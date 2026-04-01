$baseUrl = "https://raw.githubusercontent.com/appwrite/website/main"
$assets = @(
    "src/routes/partners/(assets)/icons/training.svg",
    "src/routes/partners/(assets)/icons/co-marketing.svg",
    "src/routes/partners/(assets)/icons/support.svg",
    "src/routes/partners/(assets)/icons/revenue.svg",
    "src/routes/partners/(assets)/icons/early-access.svg",
    "src/routes/partners/(assets)/icons/discounts.svg",
    "src/routes/partners/(assets)/icons/experience.svg",
    "src/routes/partners/(assets)/icons/expert.svg",
    "src/routes/partners/(assets)/icons/ship.svg",
    "src/routes/partners/(assets)/badges/platinum.svg",
    "src/routes/partners/(assets)/badges/gold.svg",
    "src/routes/partners/(assets)/badges/silver.svg"
)

$targetDirBase = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app\public\clikkle\images\partners"

foreach ($asset in $assets) {
    $url = "$baseUrl/$asset"
    $filename = Split-Path $asset -Leaf
    $dirname = Split-Path (Split-Path $asset -Parent) -Leaf
    
    $targetDir = "$targetDirBase\$dirname"
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
