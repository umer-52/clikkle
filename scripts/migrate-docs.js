const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../../src/routes/docs');
const destDir = path.join(__dirname, '../content/docs');

// Create destination if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach((name) => {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

let count = 0;

walkSync(srcDir, (filePath) => {
  if (filePath.endsWith('.markdoc')) {
    // Determine the relative path from the source docs directory
    let relativePath = path.relative(srcDir, filePath);
    
    // In SvelteKit, routes are directories with +page.markdoc
    // We want to flatten this. For example:
    // products/auth/+page.markdoc -> products/auth.markdoc
    // products/auth/email-password/+page.markdoc -> products/auth/email-password.markdoc
    // If it's a standalone .markdoc file (rare in SvelteKit but possible), just keep its name.
    
    let destPathStr;
    if (relativePath.endsWith('+page.markdoc')) {
      const dirName = path.dirname(relativePath);
      if (dirName === '.') {
        destPathStr = 'index.markdoc'; // Root docs page
      } else {
        destPathStr = dirName + '.markdoc';
      }
    } else {
      destPathStr = relativePath;
    }

    const fullDestPath = path.join(destDir, destPathStr);
    
    // Ensure destination directory exists
    const fullDestDir = path.dirname(fullDestPath);
    if (!fs.existsSync(fullDestDir)) {
      fs.mkdirSync(fullDestDir, { recursive: true });
    }

    // Read file, we can optionally parse Frontmatter here if needed, but we just copy it for now.
    const content = fs.readFileSync(filePath, 'utf-8');
    
    fs.writeFileSync(fullDestPath, content, 'utf-8');
    count++;
    console.log(`Migrated: ${relativePath} -> ${destPathStr}`);
  }
});

console.log(`\nSuccessfully migrated ${count} files.`);
