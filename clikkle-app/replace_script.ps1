$files = Get-ChildItem -Path "content", "partials" -Recurse -File -Include *.markdoc, *.md
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $newContent = $content.Replace("Appwrite", "Clikkle").Replace("appwrite", "clikkle")
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated: $($file.FullName)"
    }
}
