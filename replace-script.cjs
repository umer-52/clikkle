const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules' || file === '.git' || file === '.next') return;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            if (filePath.endsWith('.md') || filePath.endsWith('.mdx') || filePath.endsWith('.json')) {
                // exclude package.json and package-lock.json to avoid breaking deps
                if (file !== 'package.json' && file !== 'package-lock.json') {
                    results.push(filePath);
                }
            }
        }
    });
    return results;
}

const files = walk(path.join(process.cwd(), 'clikkle-app'));
console.log(`Found ${files.length} files to process.`);

let replaced = 0;
files.forEach(file => {
    const raw = fs.readFileSync(file, 'utf8');
    if (raw.includes('Appwrite') || raw.includes('appwrite')) {
        const updated = raw.replace(/Appwrite/g, 'Clikkle').replace(/appwrite/g, 'clikkle');
        fs.writeFileSync(file, updated, 'utf8');
        replaced++;
    }
});

console.log(`Updated ${replaced} files.`);
