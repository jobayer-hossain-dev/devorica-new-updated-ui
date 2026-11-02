$items = @(
  "productExperience/meetGoggle.png",
  "saasMvpPage/team.png",
  "aboutPage/innovation.png",
  "aboutPage/excellence.png",
  "aboutPage/commitment.png",
  "aboutPage/integrity.png",
  "aboutPage/final/azmain.png",
  "aboutPage/Shafayet.png",
  "aboutPage/final/abid.png",
  "aboutPage/Riyad1.png",
  "aboutPage/final/arif.png",
  "aboutPage/final/tanvire.png",
  "aboutPage/final/rasibull.png",
  "aboutPage/final/sajid.png",
  "aboutPage/final/atiq.png",
  "aboutPage/final/hasan.png",
  "aboutPage/final/rakib.png",
  "aboutPage/final/wahid.png",
  "aboutPage/final/fahim.png",
  "aboutPage/final/sohail.png",
  "aboutPage/final/naim.png",
  "aboutPage/final/yeasin.png",
  "aboutPage/final/shahriar.png",
  "aboutPage/final/rahat.png",
  "aboutPage/final/alamin.png",
  "aboutPage/final/jawd.png",
  "aboutPage/IMR02103.jpg",
  "aboutPage/magic.jpeg",
  "aboutPage/IMR02309.jpg",
  "aboutPage/IMR02253.jpg",
  "aboutPage/fotballMatch.jpg",
  "aboutPage/DSC00694.JPG"
)

$baseDir = "devorica-zentex-ref\public"

foreach ($item in $items) {
  $outPath = Join-Path $baseDir $item
  $parent = Split-Path $outPath -Parent
  if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Force -Path $parent }
  
  if (-not (Test-Path $outPath) -or (Get-Item $outPath).Length -eq 0) {
    $url = "https://zentexx.com/" + $item
    Write-Host "Downloading: $item"
    curl.exe -s -L -A "Mozilla/5.0" $url -o $outPath
  }
}
Write-Host "About assets done!"

