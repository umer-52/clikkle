const fs = require('fs');
const path = require('path');

const targetDirs = ['app', 'components', 'content'];

function walkAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkAndReplace(fullPath);
    } else if (/\.(tsx|ts|js|jsx|css|markdoc|mdx)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;
      content = content.replace(/"\/images\//g, '"/clikkle/images/');
      content = content.replace(/'\/images\//g, "'/clikkle/images/");
      content = content.replace(/\('\/images\//g, "('/clikkle/images/");
      content = content.replace(/\("\/images\//g, '("/clikkle/images/');
      content = content.replace(/\]\(\/images\//g, '](/clikkle/images/');
      content = content.replace(/"\/assets\//g, '"/clikkle/assets/');
      content = content.replace(/'\/assets\//g, "'/clikkle/assets/");

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

targetDirs.forEach(dir => {
  const fullDirPath = path.join(__dirname, dir);
  if (fs.existsSync(fullDirPath)) {
    walkAndReplace(fullDirPath);
  }
});
