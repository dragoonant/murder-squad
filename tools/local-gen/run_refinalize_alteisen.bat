@echo off
rem Re-run only the finalise stage on Alteisen after a height change in ms_units.json (no GPU needed).
rem Usage: run_refinalize_alteisen.bat <picks.json> <slug> [slug ...]   (copy the new ms_units.json to the work dir first)
set W=E:\AI\work\murder-squad\mb
set PYTHONIOENCODING=utf-8
set PICKS=%1
shift
set SLUGS=%1 %2 %3 %4 %5 %6 %7 %8 %9
call E:\AI\py2.bat merge_units.py %W%\ms_units.json > %W%\refinalize.log 2>&1
set HF_HOME=E:\AI\hf-cache
set HY3DGEN_MODELS=E:\AI\hy3dgen
set UV_SYSTEM_CERTS=1
set VIRTUAL_ENV=E:\AI\Hunyuan3D-2.1\.venv
set PYTHONPATH=E:\AI\Hunyuan3D-2.1;E:\AI\Hunyuan3D-2.1\.venv\Lib\site-packages
cd /d E:\AI\Hunyuan3D-2
"%APPDATA%\uv\python\cpython-3.10.22-windows-x86_64-none\python.exe" stage_finalize.py %W%\bodies %SLUGS% >> %W%\refinalize.log 2>&1
echo done > %W%\refinalize.done
