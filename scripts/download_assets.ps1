$images = @(
  "EupinenceDashBoard.png",
  "mySpendDashboard.png",
  "Inner.png",
  "MySpendApp.png",
  "ZenHcareApp.png",
  "QuranLinkSeeDashBoard.png",
  "EuphuinanceProjects.png",
  "AppZenCare.png",
  "MyspendSeeApp.png",
  "define.png",
  "validate.png",
  "build.png",
  "scale.png",
  "reactIcon.png",
  "CssIcon.png",
  "netlify.png",
  "nodejs.png",
  "vsCode.png",
  "javascript.png",
  "vue.png",
  "dockerIcon.png",
  "angular.png",
  "ts.png",
  "laravel.png",
  "awsDev.png",
  "phyton.png",
  "mongodb.svg",
  "vite.png",
  "figma.svg",
  "Group 26.svg",
  "mySQL.png",
  "html.png",
  "cloudinary.png",
  "Tailwindcss.svg",
  "postman.png",
  "AI.svg",
  "build.svg",
  "outcome.svg",
  "startup.svg",
  "zentexxFooter.png",
  "Frame.png"
)

$destDir = "devorica-zentex-ref\public\homePage"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }

foreach ($img in $images) {
  $encoded = [System.Uri]::EscapeDataString($img)
  $url = "https://zentexx.com/homePage/" + $encoded
  $outPath = Join-Path $destDir $img
  if (-not (Test-Path $outPath) -or (Get-Item $outPath).Length -eq 0) {
    Write-Host "Downloading: $img"
    curl.exe -s -L -A "Mozilla/5.0" $url -o $outPath
  } else {
    Write-Host "Already exists: $img"
  }
}
Write-Host "Done!"

