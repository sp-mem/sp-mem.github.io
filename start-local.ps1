param(
  [int]$Port = 4174
)

$ErrorActionPreference = "Stop"
$siteDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $siteDirectory

Write-Host "SP-Mem website preview: http://127.0.0.1:$Port/"
Write-Host "Press Ctrl+C to stop."
python -m http.server $Port --bind 127.0.0.1

