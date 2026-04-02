$file = "c:\Users\umer\Desktop\vscodeappwrite\clikkle-app\components\dashboard-illustration.tsx"
$lines = Get-Content $file

# Line 33 (0-indexed = 32) has junk after </text>
$line = $lines[32]
$closingTag = "</text>"
$idx = $line.IndexOf($closingTag)

if ($idx -ge 0) {
    # Keep everything up to and including </text>, discard the rest
    $lines[32] = $line.Substring(0, $idx + $closingTag.Length)
    Write-Host "Fixed line 33. Removed $($line.Length - $idx - $closingTag.Length) chars of junk data."
    
    # Also remove lines 33,34 (0-indexed) which are orphaned fill="#EDEDF0" and />
    # Check what's on line 34 and 35
    Write-Host "Line 34: $($lines[33])"
    Write-Host "Line 35: $($lines[34])"
    
    # Remove the orphaned fill and /> lines
    $newLines = @()
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($i -eq 33 -or $i -eq 34) {
            # Skip the orphaned fill="#EDEDF0" and /> lines  
            Write-Host "Skipping line $($i+1): $($lines[$i].Trim())"
            continue
        }
        $newLines += $lines[$i]
    }
    
    $newLines | Set-Content $file
    Write-Host "File saved successfully. New line count: $($newLines.Count)"
} else {
    Write-Host "Could not find closing tag on line 33"
}
