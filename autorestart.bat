@echo Hit Enter In This Window To Restart Server Immediately, Keep This Window Open For Automatic 4 Hour Server Restarts.


@echo The Server Takes Around 25 Seconds To Start And Some More To Appear In The FiveM Client.
DEL /F /Q /A C:\FXServer\cache\files
TIMEOUT 10
rmdir /s /q "C:\Users\RP_FTRP_ws\Desktop\GRFW\server-data\cache\files"
TIMEOUT 15

@echo Server Resource Cache Successfully Cleared.

@echo off
:loop
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)
echo  %mytime%
if "%mytime%"=="11:30 AM" (
  taskkill /f /im FXServer.exe
  @echo Server Shutdown Successfully.
  taskkill /F /FI "WindowTitle eq Server"
  @echo Server Is Restarting Now.


  @echo The Server Will Now Start.
  start "Server" C:/Users/RP_FTRP_ws/Desktop/GRFW//FXServer.exe +set serverProfile "default"
  @echo Server Started In Another Window.
)
timeout /t 10
goto loop
