$fonts = @(
  "Switzer_Regular-s.p.0lxq26jvtw16x.woff2",
  "Switzer_Medium-s.p.08n6hsvz4qqkb.woff",
  "Switzer_Bold-s.p.0gwkb2x46z9ib.woff",
  "Switzer_Extrabold-s.p.01mupu.nnbhjo.woff"
)
$destDir = "devorica-zentex-ref\public\fonts"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }

foreach ($f in $fonts) {
  $url = "https://zentexx.com/_next/static/media/" + $f
  $out = Join-Path $destDir $f
  Write-Host "Downloading font: $f"
  curl.exe -s -L -A "Mozilla/5.0" $url -o $out
  $len = (Get-Item $out).Length
  Write-Host "Downloaded length: $len bytes"
}
Write-Host "Font downloads completed!"

