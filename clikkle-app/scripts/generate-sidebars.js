const fs = require('fs');
const path = require('path');

const svelteDocsDir = path.join(__dirname, '../../src/routes/docs');
const nextSidebarsDir = path.join(__dirname, '../components/docs/sidebars');

if (!fs.existsSync(nextSidebarsDir)) {
  fs.mkdirSync(nextSidebarsDir, { recursive: true });
}

// Ensure unique function names
const generatedComponents = [];

function generateComponent(sveltePath, relativeRoute) {
  const content = fs.readFileSync(sveltePath, 'utf8');

  // Extract navigation block using RegExp
  const navBlockMatch = content.match(/const\s+navigation.*?:[\s\S]*?=\s*(\[[\s\S]*?\])\s*;/);
  if (!navBlockMatch) return null;
  
  let navigationBody = navBlockMatch[1];

  // Extract parent block
  let parentLabel = "DOCS";
  let parentHref = "/docs";
  const parentMatch = content.match(/const\s+parent.*?:[\s\S]*?=\s*(\{[\s\S]*?\})\s*;/);
  if (parentMatch) {
    try {
      // Very loose match for fields
      const labelMatch = parentMatch[1].match(/label:\s*['"](.*?)['"]/);
      if (labelMatch) parentLabel = labelMatch[1].toUpperCase();

      const hrefMatch = parentMatch[1].match(/href:\s*['"](.*?)['"]/);
      if (hrefMatch) parentHref = hrefMatch[1];
    } catch (e) {
      console.warn("Couldnt parse parent block clearly for", relativeRoute);
    }
  }

  // Derive component name from relative route
  // e.g. products/databases -> DatabasesSidebar
  const nameParts = relativeRoute.split(/[\/\\]/).filter(Boolean);
  const coreName = nameParts[nameParts.length - 1]; // e.g. 'databases'
  
  if (coreName === 'docs' || coreName === '') return null; // Root layout doesn't need this
  
  const componentName = coreName.charAt(0).toUpperCase() + coreName.slice(1).replace(/-./g, x=>x[1].toUpperCase()) + 'Sidebar';
  const outFileName = coreName + '-sidebar.tsx';
  
  // Format navigationBody
  // Svelte uses standard valid JSON/JS objects, but Next uses TS. It should drop right in nicely.
  
  const tsxTemplate = `"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type NavSection = {
  label?: string;
  items: NavItem[];
};

const navigation: NavSection[] = ${navigationBody};

export function ${componentName}() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 border-r border-white/6 lg:block">
      <nav className="sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto py-8 pr-4 pl-2 hide-scrollbar">
        
        {/* Back Button */}
        <div className="mb-6 px-3">
          <Link
            href="${parentHref}"
            className="group flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            ${parentLabel}
          </Link>
        </div>

        {navigation.map((section, sectionIdx) => (
          <div key={sectionIdx} className={cn(sectionIdx > 0 && "mt-8")}>
            {section.label ? (
              <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-white/40">
                {section.label}
              </p>
            ) : null}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "text-white bg-white/5"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
`;

  fs.writeFileSync(path.join(nextSidebarsDir, outFileName), tsxTemplate);
  generatedComponents.push({ component: componentName, path: outFileName, route: '/docs/' + relativeRoute.replace(/\\/g, '/') });
  console.log('✅ Generated', outFileName, 'for', relativeRoute);
  return { component: componentName, path: outFileName, route: '/docs/' + relativeRoute.replace(/\\/g, '/') };
}

function crawl(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      crawl(fullPath, baseDir);
    } else if (entry.name === '+layout.svelte') {
      const relative = path.relative(baseDir, path.dirname(fullPath));
      generateComponent(fullPath, relative);
    }
  }
}

console.log("Starting Svelte Layout crawling...");
crawl(svelteDocsDir, svelteDocsDir);

console.log("\n---------- SIDEBAR SWITCHER INJECTION MAP ----------\n");
generatedComponents.forEach(c => {
  console.log(`import { ${c.component} } from "./sidebars/${c.path.replace('.tsx', '')}";`);
});
console.log("\n");
generatedComponents.forEach(c => {
  console.log(`  if (pathname.startsWith("${c.route}")) return <${c.component} />;`);
});
