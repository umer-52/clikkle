"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const platforms = [
  // Web Frameworks (by popularity)
  { name: 'Next.js', file: 'nextjs', href: '/docs/quick-starts/nextjs', primary: '#fff' },
  { name: 'React', file: 'react', href: '/docs/quick-starts/react', primary: '#53C1DE' },
  { name: 'Vue', file: 'vue', href: '/docs/quick-starts/vue', primary: '#4FC08D' },
  { name: 'Angular', file: 'angular', href: '/docs/quick-starts/angular', primary: '#DD0031' },
  { name: 'Svelte', file: 'svelte', href: '/docs/quick-starts/sveltekit', primary: '#FF3E00' },
  {
      name: 'TanStack Start',
      file: 'tanstack',
      href: '/docs/quick-starts/tanstack-start',
      primary: '#fff'
  },
  // Mobile Frameworks
  {
      name: 'React Native',
      file: 'react-native',
      href: '/docs/quick-starts/react-native',
      primary: '#61DAFB'
  },
  {
      name: 'Flutter',
      file: 'flutter',
      href: '/docs/quick-starts/flutter',
      primary: '#00569E',
      secondary: '#47C5FB'
  },
  {
      name: 'iOS',
      file: 'apple',
      href: '/docs/quick-starts/apple',
      primary: '#fff'
  },
  { name: 'Android', file: 'android', href: '/docs/quick-starts/android', primary: '#3DDC84' },
  {
      name: 'Kotlin',
      file: 'kotlin',
      href: '/docs/quick-starts/kotlin',
      primary: '#6D74E1',
      secondary: '#E1725C'
  },
  {
      name: 'Swift',
      file: 'swift',
      href: '/docs/quick-starts/swift',
      primary: '#F88A36',
      secondary: '#FD2020'
  },
  // Backend Languages & Runtimes
  { name: 'Node.js', file: 'nodejs', href: '/docs/quick-starts/node', primary: '#8CC84B' },
  {
      name: 'Python',
      file: 'python',
      href: '/docs/quick-starts/python',
      primary: '#F9C600',
      secondary: '#327EBD'
  },
  { name: 'PHP', file: 'php', href: '/docs/quick-starts/php', primary: '#8892BF' },
  {
      name: 'Ruby',
      file: 'ruby',
      href: '/docs/quick-starts/ruby',
      primary: '#791C12',
      secondary: '#9E120B'
  },
  { name: '.NET', file: 'dotnet', href: '/docs/quick-starts/dotnet', primary: '#512BD4' },
  { name: 'Go', file: 'go', href: '/docs/quick-starts/go', primary: '#fff' },
  {
      name: 'Deno',
      file: 'deno',
      href: '/docs/quick-starts/deno',
      primary: '#fff'
  },
  {
      name: 'Dart',
      file: 'dart',
      href: '/docs/quick-starts/dart',
      primary: '#01579B',
      secondary: '#29B6F6'
  }
];

export function PlatformsGrid({ className, headline = "Designed for the tools you work with", padded = true }: { className?: string, headline?: string, padded?: boolean }) {
  return (
    <div
      className={cn(
        "border-smooth relative z-10 border-y border-dashed border-white/10",
        className
      )}
    >
      <div
        className={cn("container flex flex-col items-center md:flex-row", {
          "px-0!": !padded,
        })}
      >
        {/* Headline — matches Appwrite GradientText + text-sub-body */}
        {headline && (
          <span className="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px] -mb-1 bg-gradient-to-br from-[#6d8ffc] to-white to-50% bg-clip-text pb-1 text-transparent">
            {headline}
          </span>
        )}

        <div
          className={cn(
            "flex w-full flex-nowrap overflow-clip md:overflow-visible",
            "mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl md:mask-none"
          )}
        >
          {/* Two rows for marquee on mobile; on md+ only first row (Appwrite platforms.svelte: md:hidden when i === 1) */}
          {/* Svelte `platforms.svelte`: row i===0 is `md:hidden`, row i===1 is the desktop strip */}
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className={cn(
                "divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]",
                groupIndex === 0 && "md:hidden"
              )}
            >
              {platforms.map((platform, i) => (
                <Link
                  key={`${groupIndex}-${platform.name}`}
                  href={platform.href}
                  className={cn(
                    /* No `shrink-0` at md+: with `md:w-full` it prevents shrinking and only the first cell fits (overflow clipped). */
                    "border-smooth animate-fade-in group relative mt-4 flex h-16 w-16 max-md:shrink-0 items-center justify-center border-dashed border-white/10 md:mt-0 md:w-full md:shrink lg:border-r",
                    i === 0 && "lg:border-l"
                  )}
                  style={
                    {
                      "--primary-color": platform.primary,
                      "--secondary-color": platform.secondary || platform.primary,
                      animationDelay: `calc(${i} * 25ms)`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={`/clikkle/images/platforms/dark/${platform.file}.svg`}
                    alt={platform.name}
                    className="relative z-10 h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  {/* Hover wash — Appwrite: gradient to primary/secondary at low alpha + noise in Svelte */}
                  <div
                    className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-tl from-[color:var(--primary-color)]/[0.04] to-[color:var(--secondary-color)]/[0.10]"
                    aria-hidden
                  />
                  {/* Name tooltip — Appwrite Tooltip.Content side=top; hidden on small screens */}
                  <span
                    className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[var(--bg-secondary)] px-2.5 py-1 text-sm font-medium text-[var(--color-text-primary)] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block"
                    role="tooltip"
                  >
                    {platform.name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
