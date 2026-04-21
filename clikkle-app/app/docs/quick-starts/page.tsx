import Link from "next/link";

export const metadata = {
  title: "Quick starts - Docs - Clikkle",
  description:
    "Get started with your favorite framework and language in just a few clicks.",
};

type QuickStart = {
  title: string;
  href: string;
  icon: string;
};

type QuickStartCategory = {
  title: string;
  quickStarts: QuickStart[];
};

const quickStarts: QuickStartCategory[] = [
  {
    title: "Web app",
    quickStarts: [
      { title: "Next.js", href: "/docs/quick-starts/nextjs", icon: "icon-nextjs" },
      { title: "React", href: "/docs/quick-starts/react", icon: "icon-react" },
      { title: "Vue.js", href: "/docs/quick-starts/vue", icon: "web-icon-vue" },
      {
        title: "SvelteKit",
        href: "/docs/quick-starts/sveltekit",
        icon: "icon-svelte",
      },
      { title: "Angular", href: "/docs/quick-starts/angular", icon: "icon-angular" },
      { title: "Nuxt", href: "/docs/quick-starts/nuxt", icon: "web-icon-nuxt" },
      { title: "Refine", href: "/docs/quick-starts/refine", icon: "web-icon-refine" },
      { title: "Solid", href: "/docs/quick-starts/solid", icon: "icon-solidjs" },
      {
        title: "TanStack Start",
        href: "/docs/quick-starts/tanstack-start",
        icon: "web-icon-tanstack",
      },
      { title: "Web", href: "/docs/quick-starts/web", icon: "icon-js" },
    ],
  },
  {
    title: "Mobile and native",
    quickStarts: [
      { title: "Flutter", href: "/docs/quick-starts/flutter", icon: "icon-flutter" },
      {
        title: "React Native",
        href: "/docs/quick-starts/react-native",
        icon: "icon-react-native",
      },
      { title: "Android", href: "/docs/quick-starts/android", icon: "icon-android" },
      { title: "Apple", href: "/docs/quick-starts/apple", icon: "icon-apple" },
    ],
  },
  {
    title: "Server",
    quickStarts: [
      { title: "Node.js", href: "/docs/quick-starts/node", icon: "icon-node_js" },
      { title: "Python", href: "/docs/quick-starts/python", icon: "icon-python" },
      { title: ".NET", href: "/docs/quick-starts/dotnet", icon: "web-icon-dotnet" },
      { title: "PHP", href: "/docs/quick-starts/php", icon: "web-icon-php" },
      { title: "Dart", href: "/docs/quick-starts/dart", icon: "web-icon-dart" },
      { title: "Ruby", href: "/docs/quick-starts/ruby", icon: "web-icon-ruby" },
      { title: "Deno", href: "/docs/quick-starts/deno", icon: "web-icon-deno" },
      { title: "Go", href: "/docs/quick-starts/go", icon: "web-icon-go" },
      { title: "Swift", href: "/docs/quick-starts/swift", icon: "web-icon-swift" },
      { title: "Kotlin", href: "/docs/quick-starts/kotlin", icon: "web-icon-kotlin" },
    ],
  },
];

/** Appwrite `src/routes/docs/quick-starts/+page.svelte` */
export default function QuickStartsPage() {
  return (
    <div className="min-w-0">
      <article className="web-article">
        <header className="web-article-header docs-article-header-hub">
          <div className="web-article-header-start flex flex-col items-start">
            <div className="relative flex items-center">
              <h1 className="text-title m-0 font-aeonik-pro font-bold text-primary">
                Quick start
              </h1>
            </div>
          </div>
          <div className="web-article-header-end" />
        </header>

        <div className="web-article-content web-u-gap-80">
        {quickStarts.map((category) => (
          <section key={category.title} className="flex flex-col gap-6">
            <h2 className="text-eyebrow font-aeonik-fono uppercase text-tertiary">
              {category.title}
            </h2>

            <ul className="web-grid-row-4 web-grid-row-4-mobile-2">
              {category.quickStarts.map((qs) => (
                <li key={qs.title} className="is-mobile-col-span-2">
                  <Link href={qs.href} className="web-card is-normal no-underline">
                    <header className="flex items-center gap-3">
                      <span className={`${qs.icon} docs-card-icon text-primary`} aria-hidden />
                      <h4 className="m-0 text-[0.875rem] font-medium leading-[1.2] text-primary">
                        {qs.title}
                      </h4>
                    </header>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        </div>
      </article>
    </div>
  );
}
