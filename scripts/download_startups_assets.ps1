$baseUrl = "https://raw.githubusercontent.com/appwrite/website/main"
$assets = @(
    "src/routes/(marketing)/(assets)/logos/devkind-light.svg",
    "src/routes/(marketing)/(assets)/logos/langx-light.svg",
    "src/routes/(marketing)/(assets)/logos/k-collect-light.svg",
    "src/routes/startups/(assets)/bg-hero.svg",
    "src/routes/startups/(assets)/bg-left.png",
    "src/routes/startups/(assets)/bg-right.png",
    "static/images/icons/gradients/backend.svg",
    "static/images/icons/gradients/cloud-credit.svg",
    "static/images/icons/gradients/support.svg",
    "static/images/icons/gradients/swag.svg",
    "static/images/icons/gradients/globe.svg",
    "static/images/icons/gradients/stars.svg",
    "static/images/icons/gradients/rocket.svg",
    "static/images/icons/gradients/shield.svg",
    "static/images/icons/gradients/eu.svg",
    "static/images/icons/gradients/database.svg",
    "static/images/icons/gradients/v-icon.svg",
    "static/images/icons/colored/check.svg",
    "static/images/testimonials/hassan.png",
    "static/images/testimonials/xue.webp",
    "static/images/testimonials/ryan.png"
)

# Also toolkit icons
$toolkitIcons = @(
    "auth.png", "databases.png", "storage.png", "functions.png", "messaging.png", "realtime.png", "sites.png"
)

foreach ($icon in $toolkitIcons) {
    $assets += "static/images/icons/illustrated/light/$icon"
}

$targetDir = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app\public\clikkle\images"
$clikkleBase = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app"

foreach ($asset in $assets) {
    $url = "$baseUrl/$asset"
    
    # Map raw github paths to our public directory structure
    $relPath = $asset.Replace("static/images/", "clikkle/images/")
    $relPath = $relPath.Replace("src/routes/(marketing)/(assets)/logos/", "clikkle/images/logos/")
    $relPath = $relPath.Replace("src/routes/startups/(assets)/", "clikkle/images/bgs/startups/")
    
    $outPath = "$clikkleBase\public\$relPath"
    $outDir = Split-Path $outPath
    
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Force -Path $outDir | Out-Null
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
