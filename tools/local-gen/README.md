# Local generation batches (Hunyuan3D on this PC and Alteisen)

Bodies: `ms_units.json` (slug -> prompt, height in inches, base mm). Picks: `ms_picks.json` maps each slug to the
absolute path of its approved concept PNG in `art/unit-concepts/` (written by the M5 run; never commit the picks
file, it holds machine paths). Attachments (weapons/equipment) get their own `ms_attachments.json` later.

Per machine, one GPU job at a time (see docs/knowledge-base/local-ai-studios.md):
- This PC: `cd %USERPROFILE%\Hunyuan3D-2` then `stage_cutout.py`, `..\Hunyuan3D-2.1\.venv\Scripts\python.exe` for
  `stage_shape.py --only <slugs>`, `stage_paint.py --only <slugs>`, `stage_finalize.py <repo>\public\assets\models\bodies <slugs>`,
  with env `UNITS=<this folder>\ms_units.json PICKS=<this folder>\ms_picks.json` (or copy the two files over `units.json`/`picks.json`
  in a dedicated work dir).
- Alteisen: copy `ms_units.json`, `ms_picks.json` and the PNGs to `E:\AI\work\murder-squad\`, then `E:\AI\py2.bat` / `E:\AI\py21.bat`
  launchers (junctions do not resolve over SSH); pull the finished GLBs back with scp.
Split the 20 bodies roughly half and half; batches of at most 9 per machine. After finalize: `node tools/models/optimize.mjs`,
measure sockets, update `public/assets/models/manifest.json`, check `?gallery`.
