"""Minimal GLB read / write / accessor helpers shared by the rigging tools (pure Python + numpy)."""
from __future__ import annotations

import json
import struct
from pathlib import Path

import numpy as np

COMPONENT_SIZE = {5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4}
NCOMP = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}
NPDTYPE = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
GLB_MAGIC = 0x46546C67
CHUNK_JSON = 0x4E4F534A
CHUNK_BIN = 0x004E4942


def read_glb(path: Path | str) -> tuple[dict, bytearray]:
    data = Path(path).read_bytes()
    assert struct.unpack_from("<I", data, 0)[0] == GLB_MAGIC, f"not a GLB: {path}"
    off = 12
    gltf = None
    bin_chunk = bytearray()
    while off < len(data):
        clen, ctype = struct.unpack_from("<II", data, off)
        off += 8
        chunk = data[off : off + clen]
        off += clen
        if ctype == CHUNK_JSON:
            gltf = json.loads(chunk.decode("utf-8"))
        elif ctype == CHUNK_BIN:
            bin_chunk = bytearray(chunk)
    assert gltf is not None
    return gltf, bin_chunk


def write_glb(path: Path | str, gltf: dict, bin_chunk: bytes) -> None:
    gltf["buffers"][0]["byteLength"] = len(bin_chunk)
    js = json.dumps(gltf, separators=(",", ":")).encode("utf-8")
    js += b" " * ((4 - len(js) % 4) % 4)
    bb = bytes(bin_chunk) + b"\0" * ((4 - len(bin_chunk) % 4) % 4)
    with Path(path).open("wb") as f:
        f.write(struct.pack("<III", GLB_MAGIC, 2, 12 + 8 + len(js) + 8 + len(bb)))
        f.write(struct.pack("<II", len(js), CHUNK_JSON))
        f.write(js)
        f.write(struct.pack("<II", len(bb), CHUNK_BIN))
        f.write(bb)


def read_accessor(gltf: dict, bin_chunk: bytes, index: int) -> np.ndarray:
    acc = gltf["accessors"][index]
    bv = gltf["bufferViews"][acc["bufferView"]]
    size = COMPONENT_SIZE[acc["componentType"]]
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


def append_accessor(gltf: dict, bin_chunk: bytearray, arr: np.ndarray, atype: str, component: int, target: int | None = None, minmax: bool = False) -> int:
    """Append tightly packed data to the BIN chunk; returns the new accessor index."""
    arr = np.ascontiguousarray(arr, dtype=NPDTYPE[component])
    while len(bin_chunk) % 4:
        bin_chunk += b"\0"
    off = len(bin_chunk)
    bin_chunk += arr.tobytes()
    bv: dict = {"buffer": 0, "byteOffset": off, "byteLength": arr.nbytes}
    if target:
        bv["target"] = target
    gltf.setdefault("bufferViews", []).append(bv)
    acc: dict = {"bufferView": len(gltf["bufferViews"]) - 1, "componentType": component, "count": int(arr.shape[0]), "type": atype}
    if minmax:
        acc["min"] = [float(x) for x in np.atleast_2d(arr).min(axis=0)]
        acc["max"] = [float(x) for x in np.atleast_2d(arr).max(axis=0)]
    gltf.setdefault("accessors", []).append(acc)
    return len(gltf["accessors"]) - 1


def mesh_nodes(gltf: dict) -> list[int]:
    return [i for i, n in enumerate(gltf["nodes"]) if "mesh" in n]


def positions_of(gltf: dict, bin_chunk: bytes, node: int) -> np.ndarray:
    prims = gltf["meshes"][gltf["nodes"][node]["mesh"]]["primitives"]
    return np.concatenate([read_accessor(gltf, bin_chunk, p["attributes"]["POSITION"]) for p in prims])


def add_skeleton(gltf: dict, bin_chunk: bytearray, joints: np.ndarray, parents: list[int | None], names: list[str], figure_node: int, per_vertex: np.ndarray, tails: np.ndarray | None = None) -> dict:
    """Joint nodes (translation only, identity rest rotation), a skin with inverse bind matrices, and JOINTS_0 /
    WEIGHTS_0 (top four, renormalised) on every primitive of `figure_node`. `per_vertex` is (V, J)."""
    J = joints.shape[0]
    arm_index = len(gltf["nodes"])
    gltf["nodes"].append({"name": "Armature", "children": []})
    joint_nodes = []
    for j in range(J):
        p = parents[j]
        local = joints[j] - (joints[p] if p is not None else np.zeros(3))
        node: dict = {"name": names[j], "translation": [float(x) for x in local]}
        if tails is not None:
            node["extras"] = {"tail": [float(x) for x in (tails[j] - joints[j])]}
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
        ibm[j] = m.T.flatten()
    ibm_acc = append_accessor(gltf, bin_chunk, ibm, "MAT4", 5126)
    roots = [joint_nodes[j] for j in range(J) if parents[j] is None]
    gltf.setdefault("skins", []).append({"name": "rig", "joints": joint_nodes, "inverseBindMatrices": ibm_acc, "skeleton": roots[0] if len(roots) == 1 else arm_index})
    top = np.argsort(-per_vertex, axis=1)[:, :4]
    top_w = np.take_along_axis(per_vertex, top, axis=1)
    top_w /= np.maximum(top_w.sum(axis=1, keepdims=True), 1e-9)
    mesh = gltf["meshes"][gltf["nodes"][figure_node]["mesh"]]
    start = 0
    comp = 5121 if J <= 255 else 5123
    for prim in mesh["primitives"]:
        n = gltf["accessors"][prim["attributes"]["POSITION"]]["count"]
        prim["attributes"]["JOINTS_0"] = append_accessor(gltf, bin_chunk, top[start : start + n], "VEC4", comp, target=34962)
        prim["attributes"]["WEIGHTS_0"] = append_accessor(gltf, bin_chunk, top_w[start : start + n], "VEC4", 5126, target=34962)
        start += n
    gltf["nodes"][figure_node]["skin"] = len(gltf["skins"]) - 1
    dominant = np.bincount(top[:, 0], minlength=J)
    return {"joint_nodes": joint_nodes, "dominant_vertices_per_joint": {names[j]: int(dominant[j]) for j in range(J)}}
