import fs from "fs";
import path from "path";
import matter from "gray-matter";

const framework_order = [
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "SvelteKit",
  "Refine",
  "Android",
  "React Native",
  "Flutter",
  "Apple",
  "Astro",
  "Next.js SSR",
  "Nuxt SSR",
  "SvelteKit SSR",
  "Stripe",
];

const category_order = [
  "Web",
  "Mobile and native",
  "Server",
  "Auth",
  "Databases",
  "Storage",
  "Functions",
  "Other",
];

export type TutorialListingItem = {
  title: string;
  framework: string;
  href: string;
  draft?: boolean;
};

export type TutorialCategory = {
  title: string;
  tutorials: TutorialListingItem[];
};

type TutorialFrontmatter = {
  title?: string;
  framework?: string;
  category?: string;
  draft?: boolean;
};

export function getTutorialCategories(): TutorialCategory[] {
  const tutorialsRoot = path.join(process.cwd(), "content/docs/tutorials");
  if (!fs.existsSync(tutorialsRoot)) {
    return [];
  }

  const entries = fs.readdirSync(tutorialsRoot, { withFileTypes: true });
  const allTutorials: Array<{
    title: string;
    framework: string;
    category: string;
    slug: string;
    draft?: boolean;
  }> = [];

  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const slug = ent.name;
    const stepPath = path.join(tutorialsRoot, slug, "step-1.markdoc");
    if (!fs.existsSync(stepPath)) continue;

    const raw = fs.readFileSync(stepPath, "utf8");
    const { data } = matter(raw);
    const fm = data as TutorialFrontmatter;

    const title = fm.title ?? slug;
    const framework = fm.framework ?? slug;
    const category = fm.category ?? "Other";

    allTutorials.push({
      title,
      framework,
      category,
      slug,
      draft: fm.draft === true,
    });
  }

  allTutorials.sort((a, b) => {
    const ia = framework_order.indexOf(a.framework);
    const ib = framework_order.indexOf(b.framework);
    const aIdx = ia === -1 ? 999 : ia;
    const bIdx = ib === -1 ? 999 : ib;
    if (aIdx !== bIdx) return aIdx - bIdx;
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });

  const grouped = allTutorials.reduce<Record<string, TutorialListingItem[]>>(
    (acc, item) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({
        title: item.title,
        framework: item.framework,
        href: `/docs/tutorials/${item.slug}`,
        draft: item.draft,
      });
      return acc;
    },
    {}
  );

  const categories = Object.entries(grouped).map(([title, tutorials]) => ({
    title,
    tutorials,
  }));

  categories.sort(
    (a, b) =>
      category_order.indexOf(a.title) - category_order.indexOf(b.title)
  );

  return categories;
}
