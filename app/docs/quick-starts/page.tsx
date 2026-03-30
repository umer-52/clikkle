import Link from "next/link";

export const metadata = {
  title: "Quick starts - Docs - Clikkle",
  description:
    "Get started with your favorite framework and language in just a few clicks.",
};

type QuickStart = {
  title: string;
  href: string;
};

type QuickStartCategory = {
  title: string;
  quickStarts: QuickStart[];
};

const quickStarts: QuickStartCategory[] = [
  {
    title: "Web app",
    quickStarts: [
      { title: "Next.js", href: "/docs/quick-starts/nextjs" },
      { title: "React", href: "/docs/quick-starts/react" },
      { title: "Vue.js", href: "/docs/quick-starts/vue" },
      { title: "SvelteKit", href: "/docs/quick-starts/sveltekit" },
      { title: "Angular", href: "/docs/quick-starts/angular" },
      { title: "Nuxt", href: "/docs/quick-starts/nuxt" },
      { title: "Refine", href: "/docs/quick-starts/refine" },
      { title: "Solid", href: "/docs/quick-starts/solid" },
      { title: "TanStack Start", href: "/docs/quick-starts/tanstack-start" },
      { title: "Web", href: "/docs/quick-starts/web" },
    ],
  },
  {
    title: "Mobile and native",
    quickStarts: [
      { title: "Flutter", href: "/docs/quick-starts/flutter" },
      { title: "React Native", href: "/docs/quick-starts/react-native" },
      { title: "Android", href: "/docs/quick-starts/android" },
      { title: "Apple", href: "/docs/quick-starts/apple" },
    ],
  },
  {
    title: "Server",
    quickStarts: [
      { title: "Node.js", href: "/docs/quick-starts/node" },
      { title: "Python", href: "/docs/quick-starts/python" },
      { title: ".NET", href: "/docs/quick-starts/dotnet" },
      { title: "PHP", href: "/docs/quick-starts/php" },
      { title: "Dart", href: "/docs/quick-starts/dart" },
      { title: "Ruby", href: "/docs/quick-starts/ruby" },
      { title: "Deno", href: "/docs/quick-starts/deno" },
      { title: "Go", href: "/docs/quick-starts/go" },
      { title: "Swift", href: "/docs/quick-starts/swift" },
      { title: "Kotlin", href: "/docs/quick-starts/kotlin" },
    ],
  },
];

// Icon resolver for the Quick Starts grid
function getIconUrl(title: string) {
  const normalized = title.toLowerCase().replace(/[\s.]/g, "");
  
  // Custom exact mappings utilizing minimalist "plain" or "line" Devicons for a 1:1 match
  const icons: Record<string, string> = {
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    vuejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-plain.svg",
    sveltekit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-plain.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg",
    nuxt: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-plain.svg",
    solid: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-plain.svg", 
    web: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg",
    ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-plain.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg",
    android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
    apple: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    swift: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-plain.svg",
    kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain.svg",
    dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
  };

  return icons[normalized] || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg";
}

export default function QuickStartsPage() {
  return (
    <div className="flex w-full flex-row xl:gap-14 2xl:gap-24 overflow-visible">
      {/* Main Document Body */}
      <div className="flex-1 min-w-0 max-w-[840px] pt-12 pb-24 px-6 md:px-10 lg:pl-[4rem]">
        
        <h1 className="text-[32px] md:text-[40px] font-aeonik-pro font-normal tracking-tight text-[#EAEAEA] mb-12">
          Quick start
        </h1>

        <div className="flex flex-col gap-12">
          {quickStarts.map((category) => (
            <section key={category.title} className="flex flex-col gap-4">
              
              {/* Category Header */}
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#818186]">
                {category.title}
              </h2>
              
              {/* Grid Layout */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.quickStarts.map((qs) => (
                  <li key={qs.title}>
                    <Link
                      href={qs.href}
                      className="group flex h-[64px] items-center gap-4 rounded-[16px] border border-white/[0.06] bg-[#18181B] px-5 transition-all duration-200 hover:bg-[#202023] hover:border-white/10"
                    >
                      {/* Icon */}
                      <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center opacity-70 transition-opacity group-hover:opacity-100 grayscale hover:grayscale-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={getIconUrl(qs.title)} 
                            alt={`${qs.title} icon`} 
                            className="max-h-full max-w-full object-contain" 
                        />
                      </div>
                      
                      {/* Label Text */}
                      <h4 className="text-[14px] font-medium text-[#EAEAEA] transition-colors group-hover:text-white">
                        {qs.title}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      
      {/* Right Table of Contents Sidebar Placeholder */}
      <aside className="hidden w-[240px] shrink-0 xl:block relative z-0 pl-1" aria-hidden="true" />
    </div>
  );
}
