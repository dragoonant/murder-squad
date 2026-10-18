"""Build a skinned body GLB from UniRig's npz outputs (docs/spec/30-figures.md section 7).

UniRig's own merge step goes through an FBX export and a Blender glTF re-export, which rewrites the mesh and
textures and failed outright on our bodies. This tool does the transfer itself: it reads the original body GLB
(figure mesh + base disc, untouched bytes), the skeleton from `raw_data.npz` (joints, tails, parents, names, as
re-extracted from UniRig's skeleton FBX) and the predicted weights from `predict_skin.npz` (weights on sampled
points in the same normalised frame), finds the axis permutation that maps that frame onto the original mesh
(the FBX round trip swaps axes), denormalises, copies weights to every figure vertex by inverse-distance from the
nearest sampled points, and writes joint nodes (translation only, identity rest rotation), a glTF skin with inverse
bind matrices, and JOINTS_0 / WEIGHTS_0 on the figure mesh. The base disc stays unskinned. Run rig-clips.py next.

Usage: python tools/models/skin-glb.py <body.glb> <raw_data.npz> <predict_skin.npz> <out.glb> [--report r.json] [--k 4]
"""
from __future__ import annotations

import argparse
import itertools
import json
import struct
import sys
from pathlib import Path

import numpy as np
from scipy.spatial import cKDTree

COMPONENT = {5120: ("b", 1), 5121: ("B", 1), 5122: ("h", 2), 5123: ("H", 2), 5125: ("I", 4), 5126: ("f", 4)}
NCOMP = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}
NPDTYPE = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}


def read_glb(path: Path) -> tuple[dict, bytearray]:
    data = path.read_bytes()
    magic = struct.unpack_from("<I", data, 0)[0]
    assert magic == 0x46546C67, "not a GLB"
    off = 12
    gltf = None
    bin_chunk = bytearray()
    while off < len(data):
        clen, ctype = struct.unpack_from("<II", data, off)
        off += 8
        chunk = data[off : off + clen]
        off += clen
        if ctype == 0x4E4F534A:
            gltf = json.loads(chunk.decode("utf-8"))
        elif ctype == 0x004E4942:
            bin_chunk = bytearray(chunk)
    assert gltf is not None
    return gltf, bin_chunk


def write_glb(path: Path, gltf: dict, bin_chunk: bytes) -> None:
    js = json.dumps(gltf, separators=(",", ":")).encode("utf-8")
    js += b" " * ((4 - len(js) % 4) % 4)
    bb = bytes(bin_chunk) + b"\0" * ((4 - len(bin_chunk) % 4) % 4)
    with path.open("wb") as f:
        f.write(struct.pack("<III", 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(bb)))
        f.write(struct.pack("<II", len(js), 0x4E4F534A))
        f.write(js)
        f.write(struct.pack("<II", len(bb), 0x004E4942))
        f.write(bb)


def read_accessor(gltf: dict, bin_chunk: bytes, index: int) -> np.ndarray:
    acc = gltf["accessors"][index]
    bv = gltf["bufferViews"][acc["bufferView"]]
    _fmt, size = COMPONENT[acc["componentType"]]
    n = NCOMP[acc["type"]]
    start = bv.get("byteOffset", 0) + acc.get("byteOffset", 0)
    stride = bv.get("byteStride", size * n)
    dt = NPDTYPE[acc["componentType"]]
    if stride == size * n:
        return np.frombuffer(bin_chunk, dtype=dt, count=acc["count"] * n, offset=start).reshape(acc["count"], n).astype(np.float64)
    out = np.empty((acc["count"], n))
    for i in range(acc["count"]):
        out[i] = np.frombuffer(bin_chunk, dtype=dt, count=n, offset=start + i * stride)
    return out


def append(gltf: dict, bin_chunk: bytearray, arr: np.ndarray, atype: str, component: int, target: int | None = None, minmax: bool = False) -> int:
    arr = np.ascontiguousarray(arr, dtype=NPDTYPE[component])
    while len(bin_chunk) % 4:
        bin_chunk += b"\0"
    off = len(bin_chunk)
    bin_chunk += arr.tobytes()
    bv = {"buffer": 0, "byteOffset": off, "byteLength": arr.nbytes}
    if target:
        bv["target"] = target
    gltf["bufferViews"].append(bv)
    acc = {"bufferView": len(gltf["bufferViews"]) - 1, "componentType": component, "count": int(arr.shape[0]), "type": atype}
    if minmax:
        acc["min"] = [float(x) for x in arr.min(axis=0)]
        acc["max"] = [float(x) for x in arr.max(axis=0)]
    gltf["accessors"].append(acc)
    return len(gltf["accessors"]) - 1


def mesh_nodes(gltf: dict) -> list[int]:
    return [i for i, n in enumerate(gltf["nodes"]) if "mesh" in n]


def positions_of(gltf: dict, bin_chunk: bytes, node: int) -> np.ndarray:
    prims = gltf["meshes"][gltf["nodes"][node]["mesh"]]["primitives"]
    return np.concatenate([read_accessor(gltf, bin_chunk, p["attributes"]["POSITION"]) for p in prims])


def best_orientation(sampled: np.ndarray, target: np.ndarray, num: int = 16384, seed: int = 0) -> tuple[tuple[int, ...], np.ndarray, float]:
    """The axis permutation and signs that bring `sampled` (normalised, exporter frame) onto `target` (normalised, GLB frame)."""
    rng = np.random.default_rng(seed)
    sub = sampled[rng.permutation(sampled.shape[0])[:num]]
    tsub = target[rng.permutation(target.shape[0])[: min(num, target.shape[0])]]
    best = (None, None, float("inf"))
    for perm in itertools.permutations([0, 1, 2]):
        p = sub[:, perm]
        for signs in itertools.product([1, -1], repeat=3):
            s = np.array(signs, dtype=np.float64)
            d, _ = cKDTree(p * s).query(tsub)
            loss = float(d.mean())
            if loss < best[2]:
                best = (perm, s, loss)
    return best  # type: ignore[return-value]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("glb")
    ap.add_argument("raw_data")
    ap.add_argument("predict_skin")
    ap.add_argument("out")
    ap.add_argument("--report")
    ap.add_argument("--k", type=int, default=4, help="sampled neighbours per vertex for the weight transfer")
    args = ap.parse_args()

    gltf, bin_chunk = read_glb(Path(args.glb))
    raw = np.load(args.raw_data, allow_pickle=True)
    skin = np.load(args.predict_skin, allow_pickle=True)
    joints_n = np.asarray(raw["joints"], dtype=np.float64)
    tails_n = np.asarray(raw["tails"], dtype=np.float64)
    parents = [None if p is None else int(p) for p in raw["parents"].tolist()]
    names = [str(x) for x in raw["names"].tolist()] if raw["names"] is not None and raw["names"].shape else [f"bone_{i}" for i in range(len(parents))]
    weights_s = np.asarray(skin["skin"], dtype=np.float64)  # (S, J)
    samples_n = np.asarray(skin["vertices"], dtype=np.float64)  # (S, 3) normalised, exporter frame
    J = joints_n.shape[0]
    if J < 4:
        print(f"only {J} joints predicted; refusing to skin (a rig needs limbs)", file=sys.stderr)
        return 3
    assert weights_s.shape[1] == J, (weights_s.shape, J)

    # original frame: every mesh together (UniRig normalises the whole file), figure = the tallest mesh
    mn = mesh_nodes(gltf)
    allpos = {i: positions_of(gltf, bin_chunk, i) for i in mn}
    everything = np.concatenate(list(allpos.values()))
    lo, hi = everything.min(axis=0), everything.max(axis=0)
    center = (lo + hi) / 2
    scale = float((hi - lo).max() / 2)
    figure = max(mn, key=lambda i: allpos[i][:, 1].max() - allpos[i][:, 1].min())
    fig_pos = allpos[figure]
    fig_norm = (fig_pos - center) / scale

    perm, signs, loss = best_orientation(samples_n, (everything - center) / scale)
    fix = lambda a: a[:, perm] * signs  # noqa: E731
    samples = fix(samples_n) * scale + center
    joints = fix(joints_n) * scale + center
    tails = fix(tails_n) * scale + center

    # weight transfer: inverse-distance blend of the k nearest sampled points, top-4 joints per vertex
    tree = cKDTree(samples)
    d, idx = tree.query(fig_pos, k=args.k)
    if args.k == 1:
        d, idx = d[:, None], idx[:, None]
    w = 1.0 / np.maximum(d, 1e-6)
    w /= w.sum(axis=1, keepdims=True)
    per_vertex = np.einsum("vk,vkj->vj", w, weights_s[idx])  # (V, J)
    top = np.argsort(-per_vertex, axis=1)[:, :4]
    top_w = np.take_along_axis(per_vertex, top, axis=1)
    top_w /= np.maximum(top_w.sum(axis=1, keepdims=True), 1e-9)
    nn_dist = float(np.median(d[:, 0]))

    # joint nodes: translation only, so rest rotations are identity and the clip tool can author in the world frame
    base_index = len(gltf["nodes"])
    arm_index = base_index
    gltf["nodes"].append({"name": "Armature", "children": []})
    joint_nodes = []
    for j in range(J):
        p = parents[j]
        local = joints[j] - (joints[p] if p is not None else np.zeros(3))
        node = {"name": names[j], "translation": [float(x) for x in local], "extras": {"tail": [float(x) for x in (tails[j] - joints[j])]}}
        gltf["nodes"].append(node)
        joint_nodes.append(len(gltf["nodes"]) - 1)
    for j in range(J):
        p = parents[j]
        parent_node = gltf["nodes"][joint_nodes[p]] if p is not None else gltf["nodes"][arm_index]
        parent_node.setdefault("children", []).append(joint_nodes[j])
    gltf["scenes"][gltf.get("scene", 0)]["nodes"].append(arm_index)

    ibm = np.zeros((J, 16), dtype=np.float32)
    for j in range(J):
        m = np.eye(4)
        m[:3, 3] = -joints[j]
        ibm[j] = m.T.flatten()  # column-major
    ibm_acc = append(gltf, bin_chunk, ibm, "MAT4", 5126)
    roots = [joint_nodes[j] for j in range(J) if parents[j] is None]
    gltf.setdefault("skins", []).append({"name": "UniRig", "joints": joint_nodes, "inverseBindMatrices": ibm_acc, "skeleton": roots[0] if len(roots) == 1 else arm_index})
    skin_index = len(gltf["skins"]) - 1

    # the figure mesh gets the joints and weights; one primitive expected, else split by vertex ranges
    fig_mesh = gltf["meshes"][gltf["nodes"][figure]["mesh"]]
    start = 0
    for prim in fig_mesh["primitives"]:
        n = gltf["accessors"][prim["attributes"]["POSITION"]]["count"]
        comp = 5121 if J <= 255 else 5123
        prim["attributes"]["JOINTS_0"] = append(gltf, bin_chunk, top[start : start + n], "VEC4", comp, target=34962)
        prim["attributes"]["WEIGHTS_0"] = append(gltf, bin_chunk, top_w[start : start + n], "VEC4", 5126, target=34962)
        start += n
    gltf["nodes"][figure]["skin"] = skin_index
    gltf["buffers"][0]["byteLength"] = len(bin_chunk)
    gltf.setdefault("asset", {})["generator"] = "murder-squad skin-glb.py (UniRig skeleton + skin)"

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    write_glb(out, gltf, bin_chunk)
    dominant = np.bincount(top[:, 0], minlength=J)
    report = {
        "out": str(out),
        "bytes": out.stat().st_size,
        "joints": J,
        "names": names,
        "parents": parents,
        "joint_positions": [[round(float(x), 3) for x in jp] for jp in joints],
        "orientation": {"perm": list(perm), "signs": [int(s) for s in signs], "mean_nn_loss": round(loss, 4)},
        "normalise": {"center": [round(float(x), 3) for x in center], "scale": round(scale, 4)},
        "median_sample_distance_in": round(nn_dist, 4),
        "vertices": int(fig_pos.shape[0]),
        "dominant_vertices_per_joint": {names[j]: int(dominant[j]) for j in range(J)},
        "unskinned_meshes": [gltf["nodes"][i].get("name", str(i)) for i in mn if i != figure],
    }
    if args.report:
        Path(args.report).write_text(json.dumps(report, indent=1))
    print(json.dumps({k: report[k] for k in ("out", "bytes", "joints", "orientation", "median_sample_distance_in")}))
    print("joints:", [(names[j], parents[j], report["joint_positions"][j]) for j in range(J)])
    print("dominant vertices per joint:", report["dominant_vertices_per_joint"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
