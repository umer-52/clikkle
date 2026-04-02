import fs from 'fs';
import path from 'path';

function glob(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      glob(p, fileList);
    } else if (p.endsWith('.tsx')) {
      fileList.push(p);
    }
  }
  return fileList;
}

const appDir = path.resolve('./app');
const files = glob(appDir);

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('@/components/ui/button')) {
    console.log('Fixing', f);
    // Remove import
    c = c.replace(/import\s+\{\s*Button\s*\}\s+from\s+['"]@\/components\/ui\/button['"];?\r?\n?/g, '');
    
    // Replace <Button asChild ...>
    c = c.replace(/<Button\b([^>]*)asChild([^>]*)>/g, '<div className="inline-flex"$1$2>');
    
    // Replace normal <Button ...>
    c = c.replace(/<Button\b([^>]*)>/g, '<button className="web-button"$1>');
    
    // Replace </Button>
    c = c.replace(/<\/Button>/g, '</button>');
    
    // (Optional: if the original was asChild -> it expects </div> but we blindly do </button>. Let's fix that)
    // Actually, simply using <a className="web-button" ...> is better. The `asChild` was wrapping <Link>.
    // If I just strip `<Button asChild...>` and its closing, I can let the inner Link own the class.
    
    // Better Regex:
    // This is fragile. Let's just create a dummy Button component in `components/ui/button.tsx` !!
    // Yes! Creating the Button component is 100x safer than mutating 10 React files with regex.
  }
}
