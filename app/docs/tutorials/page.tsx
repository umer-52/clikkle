import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Tutorials - Docs - Clikkle",
  description:
    "Follow a simple tutorial to get started with Clikkle in your preferred framework quickly and easily.",
};

type Tutorial = {
  title: string;
  framework: string;
  href: string;
};

type TutorialCategory = {
  title: string;
  tutorials: Tutorial[];
};

function getTutorials(): TutorialCategory[] {
  // Scan the content/docs/tutorials directory for available tutorials
  const tutorialsDir = path.join(process.cwd(), "content/docs/tutorials");
  const entries: string[] = [];

  if (fs.existsSync(tutorialsDir)) {
    const items = fs.readdirSync(tutorialsDir);
    for (const item of items) {
      const fullPath = path.join(tutorialsDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        entries.push(item);
      } else if (item.endsWith(".markdoc")) {
        entries.push(item.replace(".markdoc", ""));
      }
    }
  }

  const frameworkMap: Record<string, { title: string; category: string }> = {
    react: { title: "Build a ideas tracker with React", category: "Web" },
    "react-native": { title: "Build a ideas tracker with React Native", category: "Mobile" },
    nextjs: { title: "Build a ideas tracker with Next.js", category: "Web" },
    "nextjs-ssr-auth": { title: "SSR auth with Next.js", category: "Web" },
    vue: { title: "Build a ideas tracker with Vue.js", category: "Web" },
    angular: { title: "Build a ideas tracker with Angular", category: "Web" },
    sveltekit: { title: "Build a ideas tracker with SvelteKit", category: "Web" },
    "sveltekit-ssr-auth": { title: "SSR auth with SvelteKit", category: "Web" },
    nuxt: { title: "Build a ideas tracker with Nuxt", category: "Web" },
    "nuxt-ssr-auth": { title: "SSR auth with Nuxt", category: "Web" },
    astro: { title: "Build a ideas tracker with Astro", category: "Web" },
    "astro-ssr-auth": { title: "SSR auth with Astro", category: "Web" },
    flutter: { title: "Build a ideas tracker with Flutter", category: "Mobile" },
    android: { title: "Build a ideas tracker with Android", category: "Mobile" },
    apple: { title: "Build a ideas tracker with Apple", category: "Mobile" },
    refine: { title: "Build a ideas tracker with Refine", category: "Web" },
  };

  const categories: Record<string, Tutorial[]> = {};

  for (const entry of entries) {
    const info = frameworkMap[entry] || {
      title: `Tutorial: ${entry}`,
      category: "Other",
    };
    if (!categories[info.category]) categories[info.category] = [];
    categories[info.category].push({
      title: info.title,
      framework: entry
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace("Ssr", "SSR")
        .replace("Nextjs", "Next.js")
        .replace("Sveltekit", "SvelteKit")
        .replace("React Native", "React Native"),
      href: `/docs/tutorials/${entry}`,
    });
  }

  return Object.entries(categories).map(([title, tutorials]) => ({
    title,
    tutorials,
  }));
}

export default function TutorialsPage() {
  const tutorials = getTutorials();

  return (
    <div className="flex-1 min-w-0 max-w-[800px] pt-12 pb-24 px-6 md:px-10 lg:pl-[4rem]">
      <h1 className="text-4xl font-aeonik-pro font-bold tracking-tight text-white mb-12">
        Tutorials
      </h1>

      <div className="flex flex-col gap-16">
        {tutorials.map((category) => (
          <section key={category.title} className="flex flex-col gap-6">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-white/40">
              {category.title}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.tutorials.map((tutorial) => (
                <li key={tutorial.href}>
                  <Link
                    href={tutorial.href}
                    className="group flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:bg-white/[0.05] hover:border-white/10"
                  >
                    <h3 className="text-sm font-medium text-white group-hover:text-[#2D63FF] transition-colors">
                      {tutorial.framework}
                    </h3>
                    <p className="text-xs text-white/40 line-clamp-2">
                      {tutorial.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
