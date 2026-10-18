@echo off
rem M9 figures on Alteisen: 14 bodies then 14 attachments (Plague Marines, Wyrmblade rank and file). Launch detached with schtasks.
set W=E:\AI\work\murder-squad\m9
set PYTHONIOENCODING=utf-8
set BSLUGS=pm-malignant-plaguecaster pm-plague-marine-bombardier pm-plague-marine-champion pm-plague-marine-fighter pm-plague-marine-heavy-gunner pm-plague-marine-icon-bearer pm-plague-marine-warrior wb-neophyte-leader wb-neophyte-gunner wb-neophyte-heavy-gunner wb-neophyte-icon-bearer wb-sanctus-sniper wb-sanctus-talon wb-neophyte-warrior
set ASLUGS=pm-w-boltgun pm-w-corrupted-staff pm-w-flail-of-corruption pm-w-plague-knife pm-w-plague-spewer pm-w-plague-sword wb-w-autogun wb-w-barbed-tail wb-w-flamer wb-w-grenade-launcher wb-w-heavy-stubber wb-w-kelermorph-knife wb-w-liberator-autostubs wb-w-locus-blades
if not exist %W%\bodies mkdir %W%\bodies
if exist %W%\chain.done del %W%\chain.done
if exist %W%\attach-chain.done del %W%\attach-chain.done
echo start %date% %time% > %W%\chain.log
set PICKS=m9_picks.json
call E:\AI\py2.bat merge_units.py %W%\ms_units.json >> %W%\chain.log 2>&1
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
echo start %date% %time% > %W%\attach-chain.log
set PICKS=m9_attach_picks.json
call E:\AI\py2.bat stage_cutout.py %ASLUGS% > %W%\attach-cutout.log 2>&1
call E:\AI\py21.bat stage_shape_env.py --faces 4000 --nocut %ASLUGS% --only %ASLUGS% > %W%\attach-shape.log 2>&1
call E:\AI\py2.bat stage_paint.py --texture 512 --only %ASLUGS% > %W%\attach-paint.log 2>&1
echo done %date% %time% >> %W%\attach-chain.log
echo done > %W%\attach-chain.done
