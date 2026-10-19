@echo off
rem Batch B figures on Alteisen. Usage: run_mb_alteisen.bat <id>   (launch detached with schtasks).
rem Reads %W%\<id>.bodies.txt and %W%\<id>.att.txt (one line of space-separated slugs each). Picks are
rem mb_<id>_picks.json / mb_<id>_attach_picks.json in E:\AI\Hunyuan3D-2 (concept PNGs copied to %W%\concepts).
rem Finished bodies land in %W%\bodies; raw attachment meshes stay in E:\AI\Hunyuan3D-2\outputs\<slug>\textured.glb.
set ID=%1
set W=E:\AI\work\murder-squad\mb
set PYTHONIOENCODING=utf-8
rem C: on this box can fill up (OSError 28 killed two shapes in batch b1), so keep temp files on E:
if not exist E:\AI\tmp mkdir E:\AI\tmp
set TEMP=E:\AI\tmp
set TMP=E:\AI\tmp
set BSLUGS=
set ASLUGS=
if not exist %W%\bodies mkdir %W%\bodies
if exist %W%\%ID%.bodies.txt set /p BSLUGS=<%W%\%ID%.bodies.txt
if exist %W%\%ID%.att.txt set /p ASLUGS=<%W%\%ID%.att.txt
if exist %W%\%ID%.done del %W%\%ID%.done
if exist %W%\%ID%.body.done del %W%\%ID%.body.done
echo start %date% %time% > %W%\%ID%.log
if "%BSLUGS%"=="" goto atts
set PICKS=mb_%ID%_picks.json
call E:\AI\py2.bat merge_units.py %W%\ms_units.json >> %W%\%ID%.log 2>&1
call E:\AI\py2.bat stage_cutout.py %BSLUGS% > %W%\%ID%.cutout.log 2>&1
echo cutout %date% %time% >> %W%\%ID%.log
call E:\AI\py21.bat stage_shape_env.py --only %BSLUGS% > %W%\%ID%.shape.log 2>&1
echo shape %date% %time% >> %W%\%ID%.log
call E:\AI\py2.bat stage_paint.py --only %BSLUGS% > %W%\%ID%.paint.log 2>&1
echo paint %date% %time% >> %W%\%ID%.log
set HF_HOME=E:\AI\hf-cache
set HY3DGEN_MODELS=E:\AI\hy3dgen
set UV_SYSTEM_CERTS=1
set VIRTUAL_ENV=E:\AI\Hunyuan3D-2.1\.venv
set PYTHONPATH=E:\AI\Hunyuan3D-2.1;E:\AI\Hunyuan3D-2.1\.venv\Lib\site-packages
cd /d E:\AI\Hunyuan3D-2
"%APPDATA%\uv\python\cpython-3.10.22-windows-x86_64-none\python.exe" stage_finalize.py %W%\bodies %BSLUGS% > %W%\%ID%.finalize.log 2>&1
echo bodies %date% %time% >> %W%\%ID%.log
:atts
echo done > %W%\%ID%.body.done
if "%ASLUGS%"=="" goto fin
set PICKS=mb_%ID%_attach_picks.json
call E:\AI\py2.bat stage_cutout.py %ASLUGS% > %W%\%ID%.attach-cutout.log 2>&1
call E:\AI\py21.bat stage_shape_env.py --faces 4000 --nocut %ASLUGS% --only %ASLUGS% > %W%\%ID%.attach-shape.log 2>&1
call E:\AI\py2.bat stage_paint.py --texture 512 --only %ASLUGS% > %W%\%ID%.attach-paint.log 2>&1
:fin
echo done %date% %time% >> %W%\%ID%.log
echo done > %W%\%ID%.done
