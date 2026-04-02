const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../components/docs/sidebars');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');

  // Replace the link class to use flex for badge alignment
  content = content.replace(
    '"block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"',
    '"flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"'
  );

  // Replace the item label rendering to include New badge
  content = content.replace(
    '                      {item.label}\n',
    '                      {item.label}\n                      {item.new ? <span className="ml-1.5 rounded-full bg-[#2D63FF]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#2D63FF]">New</span> : null}\n'
  );

  fs.writeFileSync(fp, content);
  console.log('Updated: ' + f);
});

console.log('Done');
