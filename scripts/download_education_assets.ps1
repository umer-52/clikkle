$baseUrl = "https://raw.githubusercontent.com/appwrite/website/main"
$assets = @(
    "src/routes/education/(assets)/chat-icon.svg",
    "src/routes/education/(assets)/beaker.svg",
    "src/routes/education/(assets)/checkmark.svg",
    "src/routes/education/(assets)/kickstart.svg"
)

$targetDir = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app\public\clikkle\images\education"
$clikkleBase = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app"

foreach ($asset in $assets) {
    $url = "$baseUrl/$asset"
    $filename = Split-Path $asset -Leaf
    
    $outPath = "$targetDir\$filename"
    
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    }
    
    if (-not (Test-Path $outPath)) {
        Write-Host "Downloading $url -> $outPath"
        try {
            Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
        } catch {
            Write-Host "Failed to download $url"
        }
    } else {
        Write-Host "Exists: $outPath"
    }
}
Write-Host "Done!"
