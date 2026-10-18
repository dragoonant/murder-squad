"""Add the Murder Squad clip set to a rigged body GLB (docs/spec/30-figures.md section 7).

Input: a skinned GLB as UniRig's merge step writes it (Blender glTF export: armature node, bone nodes, one skinned
figure mesh with JOINTS_0 / WEIGHTS_0, the black base disc as a second mesh). Output: the same GLB with the base
disc unskinned (it never moves) and six animations named idle, walk, shoot, melee, hit, death, authored
procedurally on joints classified by geometry (no bone names needed): the trunk from the root to the head, two
legs (branches that reach the ground), two arms (branches that reach the sides). Rotations are authored about
world axes at each joint's rest pivot (+Z front, +Y up, +X the figure's left), then converted to the joint's local
frame, so the result does not depend on the exporter's bone conventions.

Usage: python tools/models/rig-clips.py <in.glb> <out.glb> [--report report.json]
Pure Python + numpy. Clip lengths match the client's cue lengths (shoot 0.24 s, melee 0.38 s, hit 0.30 s, death
0.60 s for the fall part); idle and walk loop.
"""
from __future__ import annotations

import argparse
import json
import math
import struct
import sys
from pathlib import Path

import numpy as np

FPS = 30
CLIP_LEN = {"idle": 2.4, "walk": 0.6, "shoot": 0.24, "melee": 0.38, "hit": 0.30, "death": 0.60}
LOOPS = {"idle", "walk"}
# Static hold poses (docs/spec/30-figures.md section 7.5): the client plays `hold-<class>` for the right-hand
# ranged weapon and `hold-<class>` for the left-hand melee weapon (else `support-<class>` for the free left hand
# under a two-handed gun) as the base layer, with the motion clips above converted to additive. `rest` is the
# reference pose the client converts against. Each pose touches only the joints of the arm it poses.
HOLD_CLIPS = ["rest", "hold-pistol", "hold-rifle", "hold-long", "hold-heavy", "hold-melee1h", "hold-melee2h", "hold-tool", "support-rifle", "support-long", "support-heavy", "support-melee2h"]

COMPONENT = {5120: ("b", 1), 5121: ("B", 1), 5122: ("h", 2), 5123: ("H", 2), 5125: ("I", 4), 5126: ("f", 4)}
NCOMP = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}


# ---------------------------------------------------------------- GLB io
def read_glb(path: Path) -> tuple[dict, bytearray]:
    data = path.read_bytes()
    magic, _version, _length = struct.unpack_from("<III", data, 0)
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
    total = 12 + 8 + len(js) + 8 + len(bb)
    with path.open("wb") as f:
        f.write(struct.pack("<III", 0x46546C67, 2, total))
        f.write(struct.pack("<II", len(js), 0x4E4F534A))
        f.write(js)
        f.write(struct.pack("<II", len(bb), 0x004E4942))
        f.write(bb)


def read_accessor(gltf: dict, bin_chunk: bytes, index: int) -> np.ndarray:
    acc = gltf["accessors"][index]
    bv = gltf["bufferViews"][acc["bufferView"]]
    fmt, size = COMPONENT[acc["componentType"]]
    n = NCOMP[acc["type"]]
    count = acc["count"]
    start = bv.get("byteOffset", 0) + acc.get("byteOffset", 0)
    stride = bv.get("byteStride", size * n)
    out = np.empty((count, n), dtype=np.float64)
    for i in range(count):
        out[i] = struct.unpack_from("<" + fmt * n, bin_chunk, start + i * stride)
    return out


class Appender:
    """Appends tightly packed float32 data to the BIN chunk and returns accessor indices."""

    def __init__(self, gltf: dict, bin_chunk: bytearray):
        self.gltf = gltf
        self.bin = bin_chunk
        self.gltf.setdefault("bufferViews", [])
        self.gltf.setdefault("accessors", [])

    def add(self, arr: np.ndarray, atype: str, minmax: bool = False) -> int:
        arr = np.ascontiguousarray(arr, dtype=np.float32)
        while len(self.bin) % 4:
            self.bin += b"\0"
        off = len(self.bin)
        self.bin += arr.tobytes()
        self.gltf["bufferViews"].append({"buffer": 0, "byteOffset": off, "byteLength": arr.nbytes})
        acc = {"bufferView": len(self.gltf["bufferViews"]) - 1, "componentType": 5126, "count": int(arr.shape[0]), "type": atype}
        if minmax:
            acc["min"] = [float(x) for x in np.atleast_2d(arr).min(axis=0)]
            acc["max"] = [float(x) for x in np.atleast_2d(arr).max(axis=0)]
        self.gltf["accessors"].append(acc)
        return len(self.gltf["accessors"]) - 1


# ---------------------------------------------------------------- maths (quaternions as [x, y, z, w])
def q_mul(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    ax, ay, az, aw = a
    bx, by, bz, bw = b
    return np.array([aw * bx + ax * bw + ay * bz - az * by, aw * by - ax * bz + ay * bw + az * bx, aw * bz + ax * by - ay * bx + az * bw, aw * bw - ax * bx - ay * by - az * bz])


def q_inv(q: np.ndarray) -> np.ndarray:
    return np.array([-q[0], -q[1], -q[2], q[3]]) / float(np.dot(q, q))


def q_axis(axis: np.ndarray, deg: float) -> np.ndarray:
    a = np.asarray(axis, dtype=np.float64)
    a = a / (np.linalg.norm(a) or 1.0)
    h = math.radians(deg) / 2
    return np.array([*(a * math.sin(h)), math.cos(h)])


def q_from_mat(m: np.ndarray) -> np.ndarray:
    r = m[:3, :3].copy()
    for i in range(3):
        n = np.linalg.norm(r[:, i])
        if n:
            r[:, i] /= n
    t = np.trace(r)
    if t > 0:
        s = math.sqrt(t + 1.0) * 2
        return np.array([(r[2, 1] - r[1, 2]) / s, (r[0, 2] - r[2, 0]) / s, (r[1, 0] - r[0, 1]) / s, 0.25 * s])
    i = int(np.argmax([r[0, 0], r[1, 1], r[2, 2]]))
    if i == 0:
        s = math.sqrt(1.0 + r[0, 0] - r[1, 1] - r[2, 2]) * 2
        return np.array([0.25 * s, (r[0, 1] + r[1, 0]) / s, (r[0, 2] + r[2, 0]) / s, (r[2, 1] - r[1, 2]) / s])
    if i == 1:
        s = math.sqrt(1.0 + r[1, 1] - r[0, 0] - r[2, 2]) * 2
        return np.array([(r[0, 1] + r[1, 0]) / s, 0.25 * s, (r[1, 2] + r[2, 1]) / s, (r[0, 2] - r[2, 0]) / s])
    s = math.sqrt(1.0 + r[2, 2] - r[0, 0] - r[1, 1]) * 2
    return np.array([(r[0, 2] + r[2, 0]) / s, (r[1, 2] + r[2, 1]) / s, 0.25 * s, (r[1, 0] - r[0, 1]) / s])


def mat_from_q(q: np.ndarray) -> np.ndarray:
    x, y, z, w = q / np.linalg.norm(q)
    return np.array(
        [
            [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
            [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
            [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
        ]
    )


def node_local(node: dict) -> np.ndarray:
    if "matrix" in node:
        return np.array(node["matrix"], dtype=np.float64).reshape(4, 4).T
    t = np.array(node.get("translation", [0, 0, 0]), dtype=np.float64)
    r = np.array(node.get("rotation", [0, 0, 0, 1]), dtype=np.float64)
    s = np.array(node.get("scale", [1, 1, 1]), dtype=np.float64)
    m = np.eye(4)
    m[:3, :3] = mat_from_q(r) @ np.diag(s)
    m[:3, 3] = t
    return m


# ---------------------------------------------------------------- skeleton
class Skeleton:
    def __init__(self, gltf: dict, bin_chunk: bytes):
        self.gltf = gltf
        nodes = gltf["nodes"]
        self.parent = {}
        for i, n in enumerate(nodes):
            for c in n.get("children", []):
                self.parent[c] = i
        self.world = {}
        for i in range(len(nodes)):
            self._world(i)
        skin = gltf["skins"][0]
        self.joints: list[int] = list(skin["joints"])
        jset = set(self.joints)
        # parent joint = nearest joint ancestor
        self.jparent: dict[int, int | None] = {}
        for j in self.joints:
            p = self.parent.get(j)
            while p is not None and p not in jset:
                p = self.parent.get(p)
            self.jparent[j] = p
        self.jchildren: dict[int, list[int]] = {j: [] for j in self.joints}
        for j, p in self.jparent.items():
            if p is not None:
                self.jchildren[p].append(j)
        roots = [j for j in self.joints if self.jparent[j] is None]
        self.root = max(roots, key=lambda j: self.subtree_size(j))
        self.pos = {j: self.world[j][:3, 3].copy() for j in self.joints}
        # figure bounds from the skinned mesh
        mesh_node = next(i for i, n in enumerate(nodes) if "skin" in n)
        prim = gltf["meshes"][nodes[mesh_node]["mesh"]]["primitives"][0]
        acc = gltf["accessors"][prim["attributes"]["POSITION"]]
        self.bb_min = np.array(acc["min"], dtype=np.float64)
        self.bb_max = np.array(acc["max"], dtype=np.float64)
        # the mesh node's world matrix (Blender may export the armature with a transform)
        self.mesh_world = self.world[mesh_node]
        lo = (self.mesh_world @ np.append(self.bb_min, 1))[:3]
        hi = (self.mesh_world @ np.append(self.bb_max, 1))[:3]
        self.lo = np.minimum(lo, hi)
        self.hi = np.maximum(lo, hi)
        self.height = float(self.hi[1] - self.lo[1])

    def _world(self, i: int) -> np.ndarray:
        if i in self.world:
            return self.world[i]
        local = node_local(self.gltf["nodes"][i])
        p = self.parent.get(i)
        w = (self._world(p) @ local) if p is not None else local
        self.world[i] = w
        return w

    def subtree(self, j: int) -> list[int]:
        out = [j]
        stack = [j]
        while stack:
            n = stack.pop()
            for c in self.jchildren[n]:
                out.append(c)
                stack.append(c)
        return out

    def subtree_size(self, j: int) -> int:
        return len(self.subtree(j))

    def chain(self, j: int, n: int = 8) -> list[int]:
        """Follow single children from j (the limb's joints from its first joint on), at most n."""
        out = [j]
        while len(out) < n and len(self.jchildren[out[-1]]) >= 1:
            # with several children continue along the biggest subtree
            out.append(max(self.jchildren[out[-1]], key=self.subtree_size))
        return out

    def classify_by_name(self) -> dict[str, list[int]] | None:
        """VRoid-style names (J_Bip_C_Hips, J_Bip_L_UpperArm, ...) as split-body.py and UniRig's vroid class write them."""
        names = {j: self.gltf["nodes"][j].get("name", "") for j in self.joints}
        by = {v: k for k, v in names.items()}
        if "J_Bip_C_Hips" not in by:
            return None
        pick = lambda *ns: [by[n] for n in ns if n in by]  # noqa: E731
        parts = {
            "trunk": pick("J_Bip_C_Hips", "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_UpperChest", "J_Bip_C_Neck", "J_Bip_C_Head"),
            "legL": pick("J_Bip_L_UpperLeg", "J_Bip_L_LowerLeg", "J_Bip_L_Foot", "J_Bip_L_ToeBase"),
            "legR": pick("J_Bip_R_UpperLeg", "J_Bip_R_LowerLeg", "J_Bip_R_Foot", "J_Bip_R_ToeBase"),
            "armL": pick("J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand"),
            "armR": pick("J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand"),
        }
        used = {j for lst in parts.values() for j in lst}
        parts["rest"] = [j for j in self.joints if j not in used]
        return parts

    def classify(self) -> dict[str, list[int]]:
        """Trunk (root..head), legL, legR, armL, armR as ordered joint lists; `rest` for the others."""
        named = self.classify_by_name()
        if named is not None:
            return named
        H = self.height
        base_y = self.lo[1]
        half_w = max(1e-6, (self.hi[0] - self.lo[0]) / 2)
        legs: dict[str, list[int]] = {}
        arms: dict[str, list[int]] = {}
        trunk = [self.root]
        n = self.root
        guard = 0
        while guard < 64:
            guard += 1
            kids = self.jchildren[n]
            if not kids:
                break
            if len(kids) == 1:
                n = kids[0]
                trunk.append(n)
                continue
            # a branch point: pick the trunk continuation and label the other branches
            info = []
            for c in kids:
                sub = self.subtree(c)
                P = np.array([self.pos[s] for s in sub])
                info.append((c, P[:, 1].max(), P[:, 1].min(), np.abs(P[:, 0]).max(), P[:, 0].mean()))
            # the trunk goes on through the child whose subtree reaches highest
            cont = max(info, key=lambda t: t[1])
            for c, ymax, ymin, xabs, xmean in info:
                if c == cont[0]:
                    continue
                side = "L" if xmean > 0 else "R"
                if ymin - base_y < 0.3 * H and ymax < self.pos[n][1] + 0.1 * H and side not in legs:
                    legs[side] = self.chain(c)
                elif xabs > 0.45 * half_w and ymin - base_y > 0.15 * H and side not in arms:
                    arms[side] = self.chain(c)
            n = cont[0]
            trunk.append(n)
        used = set(trunk)
        for lst in list(legs.values()) + list(arms.values()):
            used.update(lst)
        rest = [j for j in self.joints if j not in used]
        # the legs may hang off a trunk joint whose other child continued upward: fine. If no legs were found,
        # look for trunk-attached branches reaching the ground anywhere (root near the ground, legs below the hips)
        return {"trunk": trunk, "legL": legs.get("L", []), "legR": legs.get("R", []), "armL": arms.get("L", []), "armR": arms.get("R", []), "rest": rest}


# ---------------------------------------------------------------- clip authoring
X = np.array([1.0, 0.0, 0.0])
Y = np.array([0.0, 1.0, 0.0])
Z = np.array([0.0, 0.0, 1.0])


def smooth(t: float) -> float:
    t = min(1.0, max(0.0, t))
    return t * t * (3 - 2 * t)


def bump(t: float) -> float:
    return math.sin(math.pi * min(1.0, max(0.0, t)))


class Pose:
    """World-frame extra rotations per joint (quaternions) and a world-space root offset, for one frame."""

    def __init__(self):
        self.rot: dict[int, np.ndarray] = {}
        self.root_offset = np.zeros(3)
        self.root_pivot: np.ndarray | None = None

    def turn(self, j: int | None, axis: np.ndarray, deg: float) -> None:
        if j is None or abs(deg) < 1e-9:
            return
        q = q_axis(axis, deg)
        self.rot[j] = q_mul(q, self.rot[j]) if j in self.rot else q


def pick(lst: list[int], i: int) -> int | None:
    return lst[i] if len(lst) > i else None


def author(sk: Skeleton, parts: dict[str, list[int]], clip: str, t: float, length: float) -> Pose:
    """The pose of `clip` at time t (seconds). Angles are in degrees about world axes at the joint pivot."""
    u = t / length
    p = Pose()
    trunk = parts["trunk"]
    root = trunk[0]
    # trunk joints: hips (root), spine (middle), head (last). With a short trunk the same joint serves twice.
    spine = trunk[1] if len(trunk) > 2 else trunk[0]
    head = trunk[-1] if len(trunk) > 1 else None
    neck = trunk[-2] if len(trunk) > 2 else None
    shL, shR = pick(parts["armL"], 0), pick(parts["armR"], 0)
    elL, elR = pick(parts["armL"], 1), pick(parts["armR"], 1)
    hipL, hipR = pick(parts["legL"], 0), pick(parts["legR"], 0)
    kneeL, kneeR = pick(parts["legL"], 1), pick(parts["legR"], 1)
    # conventions: about +X, a positive angle tips the top of the trunk forward (+Z); a hanging limb swings
    # forward with a negative angle. About +Y, positive turns the front toward +X (the figure's left).
    if clip == "idle":
        w = 2 * math.pi * u
        p.turn(spine, X, 1.5 * math.sin(w))
        p.turn(head, Y, 3.0 * math.sin(w * 0.5 + 0.7))
        p.turn(head, X, 1.0 * math.sin(w + 1.1))
        p.turn(shL, X, 2.0 * math.sin(w))
        p.turn(shR, X, 2.0 * math.sin(w + 0.4))
        p.root_offset = np.array([0.0, 0.004 * math.sin(w), 0.0])
    elif clip == "walk":
        w = 2 * math.pi * u  # one full cycle = two steps
        s = math.sin(w)
        swing = 26.0
        p.turn(hipL, X, -swing * s)
        p.turn(hipR, X, swing * s)
        # the knee bends while its leg swings forward and straightens on the plant
        p.turn(kneeL, X, 32.0 * max(0.0, -s) ** 1.2)
        p.turn(kneeR, X, 32.0 * max(0.0, s) ** 1.2)
        # arms stay quiet (a small sway): the hands keep hold of the weapon posed by the hold clips
        p.turn(shL, X, 4.0 * s)
        p.turn(shR, X, -4.0 * s)
        p.turn(spine, X, 4.0)
        p.turn(spine, Y, 4.0 * s)
        p.turn(head, X, -3.0)
        p.turn(root, Z, 2.5 * s)
        p.root_offset = np.array([0.0, 0.035 * abs(math.sin(w)), 0.0])
    elif clip == "shoot":
        b = bump(u)
        p.turn(shR, X, -14.0 * b)  # the gun arm kicks up
        p.turn(elR, X, -8.0 * b)
        p.turn(spine, X, -5.0 * b)
        p.turn(head, X, -4.0 * b)
        p.turn(shL, X, -4.0 * b)
    elif clip == "melee":
        # wind up (arm back and high), strike through (arm forward and down), recover
        k = smooth(u / 0.55) if u < 0.55 else 1 - smooth((u - 0.55) / 0.45)
        wind = 1 - smooth(u / 0.3) if u < 0.3 else 0.0
        p.turn(shL, X, 55.0 * wind - 70.0 * k)
        p.turn(shL, Z, -20.0 * k)
        p.turn(elL, X, -25.0 * k)
        p.turn(spine, Y, 18.0 * wind - 20.0 * k)
        p.turn(spine, X, 10.0 * k)
        p.turn(head, Y, -10.0 * k)
        p.turn(shR, X, 15.0 * k)
        p.turn(hipL, X, -8.0 * k)
        p.turn(hipR, X, 8.0 * k)
    elif clip == "hit":
        b = bump(u) * (1 - 0.4 * u)
        wob = math.sin(math.pi * 3 * u) * (1 - u)
        p.turn(spine, X, -12.0 * b)
        p.turn(spine, Z, 6.0 * wob)
        p.turn(head, X, -12.0 * b)
        p.turn(shL, X, 18.0 * b)
        p.turn(shR, X, 18.0 * b)
        p.turn(shL, Z, 8.0 * wob)
        p.turn(shR, Z, 8.0 * wob)
    elif clip == "death":
        k = smooth(u)
        # topple backwards about the heels: the root turns -90 deg about X at a pivot on the ground behind the feet
        p.turn(root, X, -88.0 * k)
        p.root_pivot = np.array([0.0, sk.lo[1], -0.25 * (sk.hi[2] - sk.lo[2]) / 2])
        p.turn(kneeL, X, 30.0 * k)
        p.turn(kneeR, X, 30.0 * k)
        p.turn(shL, X, -35.0 * k)
        p.turn(shR, X, -40.0 * k)
        p.turn(head, X, -15.0 * smooth(u / 0.5) + 25.0 * smooth((u - 0.5) / 0.5))
        p.turn(spine, X, -8.0 * k)
    return p


def author_hold(parts: dict[str, list[int]], clip: str) -> Pose:
    """A static arm pose. Angles about world axes at the rest pivot: for a hanging arm a negative X angle swings
    the hand forward, the hand joint gets the opposite turn so the fist (and the grip in it) stays upright; about
    Y, positive turns a raised right arm inward and a raised left arm outward."""
    p = Pose()
    shL, elL, hdL = pick(parts["armL"], 0), pick(parts["armL"], 1), pick(parts["armL"], 2)
    shR, elR, hdR = pick(parts["armR"], 0), pick(parts["armR"], 1), pick(parts["armR"], 2)

    def arm(sh, el, hd, sh_x: float, sh_y: float, el_x: float, hd_x: float, hd_y: float = 0.0) -> None:
        p.turn(sh, X, sh_x)
        p.turn(sh, Y, sh_y)
        p.turn(el, X, el_x)
        p.turn(hd, X, hd_x)
        p.turn(hd, Y, hd_y)

    # port-arms carries: the figures' arms are too short for a hand on the forestock of a 0.9" gun held straight
    # out, so the right hand keeps the grip at the belly and the shoulder yaw (sh_y, about the world up axis)
    # swings the barrel across the chest, where the support hand meets it in front of the body. A yaw on the hand
    # itself would act about the forearm's rest axis, which after the elbow bend is a roll.
    if clip == "hold-pistol":
        arm(shR, elR, hdR, -48.0, 18.0, -14.0, 62.0)
    elif clip == "hold-rifle":
        arm(shR, elR, hdR, -12.0, 45.0, -70.0, 82.0)
    elif clip == "hold-long":
        arm(shR, elR, hdR, -8.0, 40.0, -66.0, 74.0)
    elif clip == "hold-heavy":
        arm(shR, elR, hdR, -5.0, 30.0, -64.0, 70.0)
    # melee: the forearm comes up in front, the hand counter-turns so the fist stays upright and the blade
    # (mounted standing up from the fist by HOLDS) points at the sky
    elif clip in ("hold-melee1h", "hold-tool"):
        arm(shL, elL, hdL, -15.0, -10.0, -70.0, 85.0)
    elif clip == "hold-melee2h":
        arm(shL, elL, hdL, -24.0, -18.0, -64.0, 88.0)
    elif clip in ("support-rifle", "support-long"):
        arm(shL, elL, hdL, -58.0, -30.0, -30.0, 10.0)
    elif clip == "support-heavy":
        arm(shL, elL, hdL, -52.0, -26.0, -36.0, 14.0)
    elif clip == "support-melee2h":
        arm(shR, elR, hdR, -36.0, 30.0, -56.0, 92.0)
    return p


def bake(sk: Skeleton, parts: dict[str, list[int]], clip: str) -> dict[int, dict[str, np.ndarray]]:
    """Per-joint local tracks: rotation (N,4) for every joint touched by the clip, translation (N,3) for the root."""
    static = clip in HOLD_CLIPS
    length = 0.1 if static else CLIP_LEN[clip]
    n = 2 if static else int(round(length * FPS)) + 1
    times = np.linspace(0.0, length, n)
    root = parts["trunk"][0]
    touched: set[int] = set()
    poses = []
    for t in times:
        if clip in LOOPS and t >= length:
            t = 0.0
        pose = author_hold(parts, clip) if static else author(sk, parts, clip, t, length)
        poses.append(pose)
        touched.update(pose.rot.keys())
    if clip == "rest":
        touched.update(sk.joints)
    if not static or clip == "rest":
        touched.add(root)
    tracks: dict[int, dict[str, np.ndarray]] = {}
    for j in touched:
        node = sk.gltf["nodes"][j]
        rest_local_q = q_from_mat(node_local(node)) if "rotation" not in node else np.array(node["rotation"], dtype=np.float64)
        pj = sk.jparent[j]
        parent_world_q = q_from_mat(sk.world[sk.parent[j]]) if j in sk.parent else np.array([0.0, 0.0, 0.0, 1.0])
        inv_pw = q_inv(parent_world_q)
        rots = np.empty((n, 4))
        trans = np.empty((n, 3)) if j == root else None
        rest_t = np.array(node.get("translation", [0, 0, 0]), dtype=np.float64)
        for i, pose in enumerate(poses):
            qx = pose.rot.get(j)
            if qx is None:
                rots[i] = rest_local_q
            else:
                rots[i] = q_mul(q_mul(q_mul(inv_pw, qx), parent_world_q), rest_local_q)
            if trans is not None:
                off = pose.root_offset.copy()
                if pose.root_pivot is not None and qx is not None:
                    # rotating about a pivot other than the joint moves the joint: p' = pivot + R (p - pivot)
                    R = mat_from_q(qx)
                    pw = sk.pos[j]
                    off = off + (pose.root_pivot + R @ (pw - pose.root_pivot)) - pw
                # the offset is in the world frame; express it in the parent's frame
                off_local = mat_from_q(inv_pw) @ off
                trans[i] = rest_t + off_local
        # keep quaternion continuity for linear interpolation
        for i in range(1, n):
            if np.dot(rots[i], rots[i - 1]) < 0:
                rots[i] = -rots[i]
        tracks[j] = {"rotation": rots}
        if trans is not None:
            tracks[j]["translation"] = trans
        _ = pj
    tracks["_times"] = times  # type: ignore[index]
    return tracks


def add_animations(gltf: dict, bin_chunk: bytearray, sk: Skeleton, parts: dict[str, list[int]]) -> list[str]:
    app = Appender(gltf, bin_chunk)
    names = list(CLIP_LEN) + HOLD_CLIPS
    gltf["animations"] = [a for a in gltf.get("animations", []) if a.get("name") not in names]
    for clip in names:
        tracks = bake(sk, parts, clip)
        times = tracks.pop("_times")  # type: ignore[arg-type]
        if not tracks:
            continue  # a hold pose for an arm this body does not have (the bomb squig)
        t_acc = app.add(np.asarray(times).reshape(-1, 1), "SCALAR", minmax=True)
        samplers = []
        channels = []
        for j, tr in tracks.items():
            for path, arr in tr.items():
                out_acc = app.add(arr, "VEC4" if path == "rotation" else "VEC3")
                samplers.append({"input": t_acc, "output": out_acc, "interpolation": "LINEAR"})
                channels.append({"sampler": len(samplers) - 1, "target": {"node": int(j), "path": path}})
        gltf["animations"].append({"name": clip, "samplers": samplers, "channels": channels})
    return [a["name"] for a in gltf["animations"]]


def unskin_base(gltf: dict, sk: Skeleton) -> str | None:
    """The base disc (lowest, flattest mesh) must not deform: drop its skin and joint attributes."""
    nodes = gltf["nodes"]
    best = None
    for i, n in enumerate(nodes):
        if "mesh" not in n:
            continue
        prim = gltf["meshes"][n["mesh"]]["primitives"][0]
        acc = gltf["accessors"][prim["attributes"]["POSITION"]]
        h = acc["max"][1] - acc["min"][1]
        if h < 0.25 * sk.height and (best is None or h < best[1]):
            best = (i, h)
    if best is None:
        return None
    i = best[0]
    n = nodes[i]
    n.pop("skin", None)
    for prim in gltf["meshes"][n["mesh"]]["primitives"]:
        prim["attributes"].pop("JOINTS_0", None)
        prim["attributes"].pop("WEIGHTS_0", None)
    # if the exporter hung it under the armature keep it there (the armature node itself is static); if it sits
    # under a bone, move it to the scene root
    p = sk.parent.get(i)
    if p is not None and p in set(sk.joints):
        nodes[p]["children"].remove(i)
        world = sk.world[i]
        n.pop("translation", None)
        n.pop("rotation", None)
        n.pop("scale", None)
        n["matrix"] = [float(x) for x in world.T.flatten()]
        gltf["scenes"][gltf.get("scene", 0)]["nodes"].append(i)
    return n.get("name") or gltf["meshes"][n["mesh"]].get("name") or f"node {i}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--report")
    args = ap.parse_args()
    src, dst = Path(args.src), Path(args.dst)
    gltf, bin_chunk = read_glb(src)
    if not gltf.get("skins"):
        print("no skin in", src, file=sys.stderr)
        return 2
    sk = Skeleton(gltf, bin_chunk)
    parts = sk.classify()
    base = unskin_base(gltf, sk)
    clips = add_animations(gltf, bin_chunk, sk, parts)
    tool = "split-body.py" if "split-body" in gltf.get("asset", {}).get("generator", "") else "UniRig"
    gltf.setdefault("asset", {})["generator"] = f"murder-squad rig-clips.py ({tool} skeleton + skin, procedural clips)"
    gltf["asset"]["extras"] = {"rig": {"tool": tool, "clips": clips, "joints": len(sk.joints), "parts": {k: len(v) for k, v in parts.items()}}}
    dst.parent.mkdir(parents=True, exist_ok=True)
    write_glb(dst, gltf, bin_chunk)
    names = gltf["nodes"]
    report = {
        "src": str(src),
        "dst": str(dst),
        "bytes": dst.stat().st_size,
        "joints": len(sk.joints),
        "height": round(sk.height, 3),
        "bounds": {"min": [round(float(x), 3) for x in sk.lo], "max": [round(float(x), 3) for x in sk.hi]},
        "parts": {k: [names[j].get("name", str(j)) for j in v] for k, v in parts.items()},
        "part_positions": {k: [[round(float(x), 3) for x in sk.pos[j]] for j in v] for k, v in parts.items() if k != "rest"},
        "base_unskinned": base,
        "clips": clips,
    }
    if args.report:
        Path(args.report).write_text(json.dumps(report, indent=1))
    print(json.dumps({k: report[k] for k in ("dst", "bytes", "joints", "height", "base_unskinned")}, indent=None))
    print("parts:", {k: len(v) for k, v in parts.items()})
    for k in ("trunk", "legL", "legR", "armL", "armR"):
        print(f"  {k:6s}", [(names[j].get("name", j), [round(float(x), 2) for x in sk.pos[j]]) for j in parts[k][:4]])
    return 0


if __name__ == "__main__":
    sys.exit(main())
