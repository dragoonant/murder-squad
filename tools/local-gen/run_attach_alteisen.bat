@echo off
set W=E:\AI\work\murder-squad
set PYTHONIOENCODING=utf-8
set PICKS=ms_attach_picks.json
set SLUGS=w-hand-flamer w-heavy-bolt-pistol w-plasma-pistol w-auto-bolt-rifle w-bolt-rifle w-stalker-bolt-rifle w-auxiliary-grenade-launcher w-bolt-pistol w-heavy-bolter w-bolt-sniper-rifle w-chainsword w-power-fist w-power-sword w-thunder-hammer e-frag-grenade e-krak-grenade
:wait
if exist %W%\chain.done goto go
timeout /t 30 /nobreak >nul
goto wait
:go
echo start %date% %time% > %W%\attach-chain.log
call E:\AI\py2.bat stage_cutout.py %SLUGS% > %W%\attach-cutout.log 2>&1
call E:\AI\py21.bat stage_shape_env.py --faces 4000 --nocut %SLUGS% --only %SLUGS% > %W%\attach-shape.log 2>&1
call E:\AI\py2.bat stage_paint.py --texture 512 --only %SLUGS% > %W%\attach-paint.log 2>&1
echo done %date% %time% >> %W%\attach-chain.log
echo done > %W%\attach-chain.done
