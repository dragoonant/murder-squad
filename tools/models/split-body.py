"""Procedural humanoid rig for a fused MGSD body (docs/spec/30-figures.md section 7, the part-split route).

The body GLB is one fused Hunyuan mesh plus a base disc. This tool builds a 14-joint skeleton from the measured
sockets in the manifest (hips, spine, chest, neck, head; shoulder / elbow / hand per side; hip / knee / foot per
side) and assigns skin weights by region with planar cuts softened over a short blend band, so the figure
articulates like a part-split model (torso twist, arm swings, leg strides, head turns) without the parts tearing
apart at the cuts. Joint positions come from the manifest sockets (handR/L, shoulderR/L, beltR/L, head) and the
figure's measured heights; the torso-to-arm cut is found as the density valley in |x| across the chest band.
Output is the same skinned GLB contract as skin-glb.py (joint nodes translation-only, skin, JOINTS_0 / WEIGHTS_0,
base disc untouched); run rig-clips.py next to add the clip set.

Usage: python tools/models/split-body.py <archetype> [--manifest public/assets/models/manifest.json] [--out <glb>] [--report r.json]
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from glbio import add_skeleton, mesh_nodes, positions_of, read_glb, write_glb  # noqa: E402

NAMES = [
    "J_Bip_C_Hips", "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_Neck", "J_Bip_C_Head",
    "J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand",
    "J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand",
    "J_Bip_L_UpperLeg", "J_Bip_L_LowerLeg", "J_Bip_L_Foot",
    "J_Bip_R_UpperLeg", "J_Bip_R_LowerLeg", "J_Bip_R_Foot",
]
PARENTS: list[int | None] = [None, 0, 1, 2, 3, 2, 5, 6, 2, 8, 9, 0, 11, 12, 0, 14, 15]
IDX = {n: i for i, n in enumerate(NAMES)}
# the figure's left is +x (manifest handL has x > 0)


def smoothstep(x: np.ndarray) -> np.ndarray:
    x = np.clip(x, 0.0, 1.0)
    return x * x * (3 - 2 * x)


def blend(v: np.ndarray, cut: float, band: float) -> np.ndarray:
    """0 below the cut, 1 above, smooth over +-band."""
    return smoothstep((v - (cut - band)) / (2 * band))


def arm_cut(pos: np.ndarray, y_lo: float, y_hi: float, x_shoulder: float) -> float:
    """|x| where the chest band is thinnest between the torso and the arm (density valley), else 55% of the shoulder x."""
    band = pos[(pos[:, 1] > y_lo) & (pos[:, 1] < y_hi)]
    if band.shape[0] < 200:
        return 0.55 * x_shoulder
    ax = np.abs(band[:, 0])
    edges = np.linspace(0, ax.max() + 1e-6, 25)
    hist, _ = np.histogram(ax, bins=edges)
    centres = (edges[:-1] + edges[1:]) / 2
    lo, hi = 0.35 * x_shoulder, 0.95 * x_shoulder
    sel = (centres > lo) & (centres < hi)
    if not sel.any():
        return 0.55 * x_shoulder
    i = int(np.argmin(np.where(sel, hist, np.inf)))
    return float(centres[i])


def build(archetype: str, manifest: dict, models_dir: Path) -> tuple[dict, bytearray, dict]:
    body = manifest["bodies"][archetype]
    gltf, bin_chunk = read_glb(models_dir / body["file"])
    mn = mesh_nodes(gltf)
    allpos = {i: positions_of(gltf, bin_chunk, i) for i in mn}
    figure = max(mn, key=lambda i: allpos[i][:, 1].max() - allpos[i][:, 1].min())
    pos = allpos[figure]
    s = body["sockets"]
    base_top = float(body.get("baseTopIn", pos[:, 1].min()))
    top = float(pos[:, 1].max())
    H = top - base_top
    hand_l, hand_r = np.array(s["handL"]), np.array(s["handR"])
    sh_l, sh_r = np.array(s["shoulderL"]), np.array(s["shoulderR"])
    belt_l, belt_r = np.array(s["beltL"]), np.array(s["beltR"])
    head_s = np.array(s["head"])
    y_belt = float((belt_l[1] + belt_r[1]) / 2)
    y_shoulder = float((sh_l[1] + sh_r[1]) / 2)
    x_shoulder = float((abs(sh_l[0]) + abs(sh_r[0])) / 2)
    # heights: hips a little under the belt, knees at 45% of the leg, the neck at the shoulder line, the head joint
    # just above it (the chin of a two-heads-tall figure sits on the shoulders)
    y_hip = y_belt - 0.06 * H
    y_knee = base_top + 0.45 * (y_hip - base_top)
    y_neck = y_shoulder + 0.02 * H
    y_head = y_neck + 0.06 * H
    y_spine = y_hip + 0.4 * (y_shoulder - y_hip)
    y_chest = y_hip + 0.75 * (y_shoulder - y_hip)
    x_cut = arm_cut(pos, y_hip + 0.1 * (y_shoulder - y_hip), y_shoulder - 0.05 * H, x_shoulder)
    x_hipjoint = 0.45 * x_cut
    z_mid = float(np.median(pos[:, 2]))

    def elbow(sh: np.ndarray, hand: np.ndarray) -> np.ndarray:
        e = (sh + hand) / 2
        e[0] = np.sign(hand[0]) * max(abs(e[0]), x_cut + 0.03 * H)
        return e

    sh_l_j = np.array([max(sh_l[0], x_cut + 0.02 * H), y_shoulder, z_mid])
    sh_r_j = np.array([min(sh_r[0], -(x_cut + 0.02 * H)), y_shoulder, z_mid])
    joints = np.array(
        [
            [0.0, y_hip, z_mid],
            [0.0, y_spine, z_mid],
            [0.0, y_chest, z_mid],
            [0.0, y_neck, z_mid],
            [head_s[0] if abs(head_s[0]) < 0.1 else 0.0, y_head, z_mid],
            sh_l_j, elbow(sh_l_j, hand_l), hand_l,
            sh_r_j, elbow(sh_r_j, hand_r), hand_r,
            [x_hipjoint, y_hip, z_mid], [x_hipjoint, y_knee, z_mid], [x_hipjoint, base_top, z_mid],
            [-x_hipjoint, y_hip, z_mid], [-x_hipjoint, y_knee, z_mid], [-x_hipjoint, base_top, z_mid],
        ],
        dtype=np.float64,
    )

    # region weights with soft cuts
    V = pos.shape[0]
    W = np.zeros((V, len(NAMES)))
    x, y = pos[:, 0], pos[:, 1]
    band = 0.03 * H
    # trunk column vs arms: inside |x| < x_cut, within the arm height range
    arm_y_lo = min(hand_l[1], hand_r[1]) - 0.12 * H
    in_arm_band = blend(y, arm_y_lo, band) * (1 - blend(y, y_neck + 0.04 * H, band))
    armness = blend(np.abs(x), x_cut, band) * in_arm_band  # 0 trunk .. 1 arm
    left = blend(x, 0.0, band)  # 0 right .. 1 left
    # arm chain weights along y: upper arm above the elbow, lower arm below, hand near the hand socket
    for side, sh_j, el_j, hand_j, side_w in (("L", sh_l_j, elbow(sh_l_j, hand_l), hand_l, left), ("R", sh_r_j, elbow(sh_r_j, hand_r), hand_r, 1 - left)):
        lower = 1 - blend(y, el_j[1], band)
        handw = 1 - blend(y, hand_j[1] + 0.05 * H, band)
        w_hand = lower * handw
        w_lower = lower * (1 - handw)
        w_upper = 1 - lower
        W[:, IDX[f"J_Bip_{side}_UpperArm"]] += armness * side_w * w_upper
        W[:, IDX[f"J_Bip_{side}_LowerArm"]] += armness * side_w * w_lower
        W[:, IDX[f"J_Bip_{side}_Hand"]] += armness * side_w * w_hand
    trunk = 1 - armness
    headness = blend(y, y_neck, band)
    legness = 1 - blend(y, y_hip, band)
    torso = trunk * (1 - headness) * (1 - legness)
    W[:, IDX["J_Bip_C_Head"]] += trunk * headness
    # torso: hips -> spine -> chest -> neck by height
    t = np.clip((y - y_hip) / max(1e-6, (y_neck - y_hip)), 0, 1)
    W[:, IDX["J_Bip_C_Hips"]] += torso * np.clip(1 - t / 0.35, 0, 1)
    W[:, IDX["J_Bip_C_Spine"]] += torso * np.clip(1 - np.abs(t - 0.35) / 0.35, 0, 1)
    W[:, IDX["J_Bip_C_Chest"]] += torso * np.clip(1 - np.abs(t - 0.7) / 0.3, 0, 1)
    W[:, IDX["J_Bip_C_Neck"]] += torso * np.clip((t - 0.85) / 0.15, 0, 1)
    # legs: left / right, upper above the knee, lower below, the foot near the base
    for side, side_w in (("L", left), ("R", 1 - left)):
        lower = 1 - blend(y, y_knee, band)
        foot = 1 - blend(y, base_top + 0.12 * (y_knee - base_top), band)
        W[:, IDX[f"J_Bip_{side}_UpperLeg"]] += trunk * legness * side_w * (1 - lower)
        W[:, IDX[f"J_Bip_{side}_LowerLeg"]] += trunk * legness * side_w * lower * (1 - foot)
        W[:, IDX[f"J_Bip_{side}_Foot"]] += trunk * legness * side_w * lower * foot
    W /= np.maximum(W.sum(axis=1, keepdims=True), 1e-9)

    info = add_skeleton(gltf, bin_chunk, joints, PARENTS, NAMES, figure, W)
    gltf.setdefault("asset", {})["generator"] = "murder-squad split-body.py (procedural rig from manifest sockets)"
    report = {
        "archetype": archetype,
        "joints": len(NAMES),
        "names": NAMES,
        "joint_positions": [[round(float(v), 3) for v in j] for j in joints],
        "cuts": {"x_arm": round(x_cut, 3), "y_hip": round(y_hip, 3), "y_knee": round(y_knee, 3), "y_neck": round(y_neck, 3), "band": round(band, 3)},
        "dominant_vertices_per_joint": info["dominant_vertices_per_joint"],
        "vertices": int(V),
    }
    return gltf, bin_chunk, report


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("archetype")
    ap.add_argument("--manifest", default="public/assets/models/manifest.json")
    ap.add_argument("--out")
    ap.add_argument("--report")
    args = ap.parse_args()
    manifest_path = Path(args.manifest)
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    models_dir = manifest_path.parent
    gltf, bin_chunk, report = build(args.archetype, manifest, models_dir)
    out = Path(args.out) if args.out else models_dir / "bodies" / "rigged" / f"{args.archetype}.glb"
    out.parent.mkdir(parents=True, exist_ok=True)
    write_glb(out, gltf, bin_chunk)
    report["out"] = str(out)
    report["bytes"] = out.stat().st_size
    if args.report:
        Path(args.report).write_text(json.dumps(report, indent=1))
    print(json.dumps({k: report[k] for k in ("out", "bytes", "joints", "cuts")}))
    print("dominant vertices per joint:", report["dominant_vertices_per_joint"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
