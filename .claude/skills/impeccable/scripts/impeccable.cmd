@echo off
setlocal DisableDelayedExpansion
rem Secure fork: no automatic downloads or PATH fallbacks.
if not defined IMPECCABLE_SECURE_BIN goto refused
if not defined IMPECCABLE_SECURE_SHA256 goto refused
if not exist "%IMPECCABLE_SECURE_BIN%" goto refused
rem PowerShell reads the path and hash as data, not as interpolated code.
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -NonInteractive -Command "$ErrorActionPreference='Stop'; $p=$env:IMPECCABLE_SECURE_BIN; if ($p -notmatch '^[A-Za-z]:[\\/]' -or $env:IMPECCABLE_SECURE_SHA256 -notmatch '^[a-fA-F0-9]{64}$') { exit 1 }; if ((Get-FileHash -LiteralPath $p -Algorithm SHA256).Hash -ne $env:IMPECCABLE_SECURE_SHA256) { exit 1 }"
if errorlevel 1 goto refused
set "IMPECCABLE_SKILL_DIR=%~dp0.."
set "IMPECCABLE_SELF=%~f0"
"%IMPECCABLE_SECURE_BIN%" %*
exit /b %errorlevel%
:refused
echo Impeccable Secure: approved local engine and SHA-256 required; no download attempted. 1>&2
exit /b 127
