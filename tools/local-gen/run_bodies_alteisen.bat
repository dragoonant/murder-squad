@echo off
set W=E:\AI\work\murder-squad
set PYTHONIOENCODING=utf-8
set PICKS=ms_picks.json
set SLUGS=kom-boss-nob kom-boy kom-breacha-boy kom-burna-boy kom-comms-boy kom-dakka-boy kom-rokkit-boy kom-slasha-boy kom-snipa-boy kom-grot kom-bomb-squig
if not exist %W%\bodies mkdir %W%\bodies
echo start %date% %time% > %W%\chain.log
call E:\AI\py2.bat merge_units.py %W%\ms_units.json >> %W%\chain.log 2>&1
call E:\AI\py2.bat stage_cutout.py %SLUGS% > %W%\cutout.log 2>&1
call E:\AI\py21.bat stage_shape_env.py --only %SLUGS% > %W%\shape.log 2>&1
call E:\AI\py2.bat stage_paint.py --only %SLUGS% > %W%\paint.log 2>&1
set HF_HOME=E:\AI\hf-cache
set HY3DGEN_MODELS=E:\AI\hy3dgen
set UV_SYSTEM_CERTS=1
set VIRTUAL_ENV=E:\AI\Hunyuan3D-2.1\.venv
set PYTHONPATH=E:\AI\Hunyuan3D-2.1;E:\AI\Hunyuan3D-2.1\.venv\Lib\site-packages
cd /d E:\AI\Hunyuan3D-2
"%APPDATA%\uv\python\cpython-3.10.22-windows-x86_64-none\python.exe" stage_finalize.py %W%\bodies %SLUGS% > %W%\finalize.log 2>&1
echo done %date% %time% >> %W%\chain.log
echo done > %W%\chain.done
