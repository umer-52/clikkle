const fs = require('fs');
const path = require('path');

function copyDirectorySync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDirectorySync('c:/Users/umer/Desktop/vscodeappwrite/src/routes/(marketing)/(assets)', 'c:/Users/umer/Desktop/vscodeappwrite/clikkle-app/public/assets');
console.log("Assets copied!");
