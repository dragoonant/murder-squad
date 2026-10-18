"""Procedural rig for a fused MGSD body (docs/spec/30-figures.md section 7, the part-split route).

The body GLB is one fused Hunyuan mesh plus a base disc. This tool builds a VRoid-named skeleton from the measured
sockets in the manifest and assigns skin weights by region with planar cuts softened over a short blend band, so the
figure articulates like a part-split model (torso twist, arm swings, leg strides, head turns) without the parts
tearing apart at the cuts. Two layouts:

  humanoid  17 joints: hips, spine, chest, neck, head; upper arm / lower arm / hand per side; upper leg / lower leg /
            foot per side. Joint positions come from the sockets (handR/L, shoulderR/L, beltR/L, head) and the
            figure's measured heights. The torso-to-arm cut is the density valley of |x| across the chest band,
            searched between 55% and 75% of the hand socket's |x| (the hand is the one socket that always sits on the
            arm; shoulder sockets sit on pauldrons, packs or ears) and 63% of it when the band has no clear valley.
  biped     11 joints, no arms (the bomb squig: two legs under a body with a tail and a jaw). The legs are the
            vertices under the hip line inside the z window the feet occupy on the base; tail and jaw ride the hips.

`--layout auto` (default) picks biped when the body has no hand sockets. Output is the same skinned GLB contract as
skin-glb.py (joint nodes translation-only, skin, JOINTS_0 / WEIGHTS_0, base disc untouched); run rig-clips.py next
to add the clip set (it finds the parts by these names, an empty arm list is fine).

Usage: python tools/models/split-body.py <archetype> [--layout auto|humanoid|biped] [--band 0.03]
                                          [--manifest public/assets/models/manifest.json] [--out <glb>] [--report r.json]
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from glbio import add_skeleton, mesh_nodes, positions_of, read_glb, write_glb  # noqa: E402

TRUNK = ["J_Bip_C_Hips", "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_Neck", "J_Bip_C_Head"]
ARMS = ["J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand", "J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand"]
LEGS = ["J_Bip_L_UpperLeg", "J_Bip_L_LowerLeg", "J_Bip_L_Foot", "J_Bip_R_UpperLeg", "J_Bip_R_LowerLeg", "J_Bip_R_Foot"]
LAYOUTS: dict[str, tuple[list[str], list[int | None]]] = {
    "humanoid": (TRUNK + ARMS + LEGS, [None, 0, 1, 2, 3, 2, 5, 6, 2, 8, 9, 0, 11, 12, 0, 14, 15]),
    "biped": (TRUNK + LEGS, [None, 0, 1, 2, 3, 0, 5, 6, 0, 8, 9]),
}
# the figure's left is +x (manifest handL has x > 0)


def smoothstep(x: np.ndarray) -> np.ndarray:
    x = np.clip(x, 0.0, 1.0)
    return x * x * (3 - 2 * x)


def blend(v: np.ndarray, cut: float, band: float) -> np.ndarray:
    """0 below the cut, 1 above, smooth over +-band."""
    return smoothstep((v - (cut - band)) / (2 * band))


def arm_cut(pos: np.ndarray, y_lo: float, y_hi: float, x_hand: float) -> tuple[float, str]:
    """|x| of the torso-to-arm cut: the density valley of |x| across the chest band, searched between 55% and 75%
    of the hand socket's |x|; 63% of it when the valley sits on the window's edge (no clear valley) or the band is
    too thin to measure. Returns (cut, how)."""
    default = 0.63 * x_hand
    band = pos[(pos[:, 1] > y_lo) & (pos[:, 1] < y_hi)]
    if band.shape[0] < 200:
        return default, "default (thin band)"
    ax = np.abs(band[:, 0])
    edges = np.linspace(0, ax.max() + 1e-6, 25)
    hist, _ = np.histogram(ax, bins=edges)
    centres = (edges[:-1] + edges[1:]) / 2
    sel = np.flatnonzero((centres > 0.55 * x_hand) & (centres < 0.75 * x_hand))
    if sel.size < 3:
        return default, "default (narrow window)"
    i = int(sel[np.argmin(hist[sel])])
    if i == sel[0] or i == sel[-1]:
        return default, "default (no valley)"
    return float(centres[i]), "valley"


def trunk_weights(W: np.ndarray, idx: dict[str, int], torso: np.ndarray, y: np.ndarray, y_hip: float, y_neck: float) -> None:
    """Hips -> spine -> chest -> neck by height within the torso region."""
    t = np.clip((y - y_hip) / max(1e-6, (y_neck - y_hip)), 0, 1)
    W[:, idx["J_Bip_C_Hips"]] += torso * np.clip(1 - t / 0.35, 0, 1)
    W[:, idx["J_Bip_C_Spine"]] += torso * np.clip(1 - np.abs(t - 0.35) / 0.35, 0, 1)
    W[:, idx["J_Bip_C_Chest"]] += torso * np.clip(1 - np.abs(t - 0.7) / 0.3, 0, 1)
    W[:, idx["J_Bip_C_Neck"]] += torso * np.clip((t - 0.85) / 0.15, 0, 1)


def leg_weights(W: np.ndarray, idx: dict[str, int], legs: np.ndarray, left: np.ndarray, y: np.ndarray, y_knee: float, base_top: float, band: float) -> None:
    """Left / right, upper above the knee, lower below, the foot near the base."""
    for side, side_w in (("L", left), ("R", 1 - left)):
        lower = 1 - blend(y, y_knee, band)
        foot = 1 - blend(y, base_top + 0.12 * (y_knee - base_top), band)
        W[:, idx[f"J_Bip_{side}_UpperLeg"]] += legs * side_w * (1 - lower)
        W[:, idx[f"J_Bip_{side}_LowerLeg"]] += legs * side_w * lower * (1 - foot)
        W[:, idx[f"J_Bip_{side}_Foot"]] += legs * side_w * lower * foot


def build(archetype: str, manifest: dict, models_dir: Path, layout: str = "auto", band_frac: float = 0.03) -> tuple[dict, bytearray, dict]:
    body = manifest["bodies"][archetype]
    gltf, bin_chunk = read_glb(models_dir / body["file"])
    mn = mesh_nodes(gltf)
    allpos = {i: positions_of(gltf, bin_chunk, i) for i in mn}
    figure = max(mn, key=lambda i: allpos[i][:, 1].max() - allpos[i][:, 1].min())
    pos = allpos[figure]
    s = body["sockets"]
    if layout == "auto":
        layout = "humanoid" if "handL" in s and "handR" in s else "biped"
    names, parents = LAYOUTS[layout]
    idx = {n: i for i, n in enumerate(names)}
    base_top = float(body.get("baseTopIn", pos[:, 1].min()))
    top = float(pos[:, 1].max())
    H = top - base_top
    sh_l, sh_r = np.array(s["shoulderL"]), np.array(s["shoulderR"])
    belt_l, belt_r = np.array(s["beltL"]), np.array(s["beltR"])
    head_s = np.array(s["head"])
    y_belt = float((belt_l[1] + belt_r[1]) / 2)
    y_shoulder = float((sh_l[1] + sh_r[1]) / 2)
    x, y, z = pos[:, 0], pos[:, 1], pos[:, 2]
    V = pos.shape[0]
    W = np.zeros((V, len(names)))
    band = band_frac * H
    left = blend(x, 0.0, band)  # 0 right .. 1 left
    cuts: dict[str, float | str] = {}

    if layout == "humanoid":
        hand_l, hand_r = np.array(s["handL"]), np.array(s["handR"])
        x_hand = float((abs(hand_l[0]) + abs(hand_r[0])) / 2)
        # heights: hips a little under the belt, knees at 45% of the leg, the neck at the shoulder line, the head
        # joint just above it (the chin of a two-heads-tall figure sits on the shoulders)
        y_hip = y_belt - 0.06 * H
        y_knee = base_top + 0.45 * (y_hip - base_top)
        y_neck = y_shoulder + 0.02 * H
        y_head = y_neck + 0.06 * H
        y_spine = y_hip + 0.4 * (y_shoulder - y_hip)
        y_chest = y_hip + 0.75 * (y_shoulder - y_hip)
        x_cut, how = arm_cut(pos, y_hip + 0.1 * (y_shoulder - y_hip), y_shoulder - 0.05 * H, x_hand)
        x_hipjoint = 0.45 * x_cut
        z_mid = float(np.median(z))

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
        # trunk column vs arms: inside |x| < x_cut, within the arm height range
        arm_y_lo = min(hand_l[1], hand_r[1]) - 0.12 * H
        in_arm_band = blend(y, arm_y_lo, band) * (1 - blend(y, y_neck + 0.04 * H, band))
        armness = blend(np.abs(x), x_cut, band) * in_arm_band  # 0 trunk .. 1 arm
        # arm chain weights along y: upper arm above the elbow, lower arm below, hand near the hand socket
        for side, sh_j, hand_j, side_w in (("L", sh_l_j, hand_l, left), ("R", sh_r_j, hand_r, 1 - left)):
            el_j = elbow(sh_j, hand_j)
            lower = 1 - blend(y, el_j[1], band)
            handw = 1 - blend(y, hand_j[1] + 0.05 * H, band)
            W[:, idx[f"J_Bip_{side}_UpperArm"]] += armness * side_w * (1 - lower)
            W[:, idx[f"J_Bip_{side}_LowerArm"]] += armness * side_w * lower * (1 - handw)
            W[:, idx[f"J_Bip_{side}_Hand"]] += armness * side_w * lower * handw
        trunk = 1 - armness
        headness = blend(y, y_neck, band)
        legness = 1 - blend(y, y_hip, band)
        W[:, idx["J_Bip_C_Head"]] += trunk * headness
        trunk_weights(W, idx, trunk * (1 - headness) * (1 - legness), y, y_hip, y_neck)
        leg_weights(W, idx, trunk * legness, left, y, y_knee, base_top, band)
        cuts = {"x_arm": round(x_cut, 3), "x_arm_how": how, "x_hand": round(x_hand, 3), "y_hip": round(y_hip, 3), "y_knee": round(y_knee, 3), "y_neck": round(y_neck, 3), "band": round(band, 3)}
    else:
        # biped without arms: the legs stand on the base inside a z window; the body (with its tail and jaw) sits on
        # the hips well under the belt sockets; the head is the top of the body
        y_hip = y_belt - 0.12 * H
        y_knee = base_top + 0.45 * (y_hip - base_top)
        y_neck = y_shoulder + 0.04 * H
        y_head = y_neck + 0.06 * H
        y_spine = y_hip + 0.4 * (y_shoulder - y_hip)
        y_chest = y_hip + 0.75 * (y_shoulder - y_hip)
        slab = pos[y < base_top + 0.06 * H]  # the feet
        x_hipjoint = float(np.median(np.abs(slab[:, 0])))
        z_leg = float(np.median(slab[:, 2]))
        dz_leg = float(max(slab[:, 2].max() - z_leg, z_leg - slab[:, 2].min())) + 0.06 * H
        z_mid = float(np.median(z[y > y_hip]))
        z_head = float(head_s[2]) if abs(head_s[2] - z_mid) < 0.3 * H else z_mid
        joints = np.array(
            [
                [0.0, y_hip, z_leg],
                [0.0, y_spine, z_mid],
                [0.0, y_chest, z_mid],
                [0.0, y_neck, z_mid],
                [0.0, y_head, z_head],
                [x_hipjoint, y_hip, z_leg], [x_hipjoint, y_knee, z_leg], [x_hipjoint, base_top, z_leg],
                [-x_hipjoint, y_hip, z_leg], [-x_hipjoint, y_knee, z_leg], [-x_hipjoint, base_top, z_leg],
            ],
            dtype=np.float64,
        )
        legness = (1 - blend(y, y_hip, band)) * (1 - blend(np.abs(z - z_leg), dz_leg, band))
        headness = blend(y, y_neck, band)
        W[:, idx["J_Bip_C_Head"]] += headness
        trunk_weights(W, idx, (1 - headness) * (1 - legness), y, y_hip, y_neck)
        leg_weights(W, idx, legness, left, y, y_knee, base_top, band)
        cuts = {"y_hip": round(y_hip, 3), "y_knee": round(y_knee, 3), "y_neck": round(y_neck, 3), "z_leg": round(z_leg, 3), "dz_leg": round(dz_leg, 3), "band": round(band, 3)}
    W /= np.maximum(W.sum(axis=1, keepdims=True), 1e-9)

    info = add_skeleton(gltf, bin_chunk, joints, parents, names, figure, W)
    gltf.setdefault("asset", {})["generator"] = f"murder-squad split-body.py (procedural {layout} rig from manifest sockets)"
    report = {
        "archetype": archetype,
        "layout": layout,
        "joints": len(names),
        "names": names,
        "joint_positions": [[round(float(v), 3) for v in j] for j in joints],
        "cuts": cuts,
        "dominant_vertices_per_joint": info["dominant_vertices_per_joint"],
        "vertices": int(V),
    }
    return gltf, bin_chunk, report


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("archetype")
    ap.add_argument("--layout", default="auto", choices=["auto", *LAYOUTS])
    ap.add_argument("--band", type=float, default=0.03, help="blend half-width as a fraction of the figure height")
    ap.add_argument("--manifest", default="public/assets/models/manifest.json")
    ap.add_argument("--out")
    ap.add_argument("--report")
    args = ap.parse_args()
    manifest_path = Path(args.manifest)
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    models_dir = manifest_path.parent
    gltf, bin_chunk, report = build(args.archetype, manifest, models_dir, args.layout, args.band)
    out = Path(args.out) if args.out else models_dir / "bodies" / "rigged" / f"{args.archetype}.glb"
    out.parent.mkdir(parents=True, exist_ok=True)
    write_glb(out, gltf, bin_chunk)
    report["out"] = str(out)
    report["bytes"] = out.stat().st_size
    if args.report:
        Path(args.report).write_text(json.dumps(report, indent=1))
    print(json.dumps({k: report[k] for k in ("out", "bytes", "layout", "joints", "cuts")}))
    print("dominant vertices per joint:", report["dominant_vertices_per_joint"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
