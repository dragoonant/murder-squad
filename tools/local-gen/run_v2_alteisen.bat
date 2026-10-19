@echo off
rem v2 dynamic-pose bodies on Alteisen (weapons baked into the body). Usage: run_v2_alteisen.bat <picks.json> <slug> [<slug> ...]. Launch detached with schtasks.
set W=E:\AI\work\murder-squad\v2
set PYTHONIOENCODING=utf-8
set PICKS=%1
shift
set BSLUGS=
:loop
if "%1"=="" goto run
set BSLUGS=%BSLUGS% %1
shift
goto loop
:run
if not exist %W%\bodies mkdir %W%\bodies
if exist %W%\chain.done del %W%\chain.done
echo start %date% %time% > %W%\chain.log
echo picks %PICKS% slugs %BSLUGS% >> %W%\chain.log
call E:\AI\py2.bat merge_units.py %W%\v2_units.json >> %W%\chain.log 2>&1
call E:\AI\py2.bat stage_cutout.py %BSLUGS% > %W%\cutout.log 2>&1
echo cutout %date% %time% >> %W%\chain.log
call E:\AI\py21.bat stage_shape_env.py --only %BSLUGS% > %W%\shape.log 2>&1
echo shape %date% %time% >> %W%\chain.log
call E:\AI\py2.bat stage_paint.py --only %BSLUGS% > %W%\paint.log 2>&1
echo paint %date% %time% >> %W%\chain.log
set HF_HOME=E:\AI\hf-cache
set HY3DGEN_MODELS=E:\AI\hy3dgen
set UV_SYSTEM_CERTS=1
set VIRTUAL_ENV=E:\AI\Hunyuan3D-2.1\.venv
set PYTHONPATH=E:\AI\Hunyuan3D-2.1;E:\AI\Hunyuan3D-2.1\.venv\Lib\site-packages
cd /d E:\AI\Hunyuan3D-2
"%APPDATA%\uv\python\cpython-3.10.22-windows-x86_64-none\python.exe" stage_finalize.py %W%\bodies %BSLUGS% > %W%\finalize.log 2>&1
echo done %date% %time% >> %W%\chain.log
echo done > %W%\chain.done
