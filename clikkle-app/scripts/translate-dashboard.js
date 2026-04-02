const fs = require('fs');

let svelte = fs.readFileSync('c:/Users/umer/Desktop/vscodeappwrite/src/routes/(marketing)/(components)/dashboard.svelte', 'utf8');

// remove svelte tags
svelte = svelte.replace(/<script[\s\S]*?<\/script>/, '');

svelte = svelte.replace(/class=/g, 'className=');
svelte = svelte.replace(/class=\{cn\(/g, 'className={cn(');

// standard React attributes
const attrs = [
    'stroke-opacity', 'fill-opacity', 'stroke-width', 'clip-path', 'clip-rule', 'fill-rule'
];

for (const attr of attrs) {
    const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
    svelte = svelte.replace(new RegExp(attr + '=', 'g'), camel + '=');
}

const component = `
import { cn } from "@/lib/utils";

export function DashboardIllustration() {
  return (
    ${svelte.trim()}
  );
}
`;

fs.writeFileSync('c:/Users/umer/Desktop/vscodeappwrite/clikkle-app/components/dashboard-illustration.tsx', component);
console.log("DashboardIllustration generated!");
