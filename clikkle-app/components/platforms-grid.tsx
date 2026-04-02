"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const platforms = [
  // Web Frameworks (by popularity)
  { name: 'Next.js', dark: '/clikkle/images/icons/gradients/nextjs.svg', href: '/docs/quick-starts/nextjs', primary: '#fff' },
  { name: 'React', dark: '/clikkle/images/icons/gradients/react.svg', href: '/docs/quick-starts/react', primary: '#53C1DE' },
  { name: 'Vue', dark: '/clikkle/images/icons/gradients/vue.svg', href: '/docs/quick-starts/vue', primary: '#4FC08D' },
  { name: 'Angular', dark: '/clikkle/images/icons/gradients/angular.svg', href: '/docs/quick-starts/angular', primary: '#DD0031' },
  { name: 'Svelte', dark: '/clikkle/images/icons/gradients/svelte.svg', href: '/docs/quick-starts/sveltekit', primary: '#FF3E00' },
  {
      name: 'TanStack Start',
      dark: '/clikkle/images/icons/gradients/tanstack.svg',
      href: '/docs/quick-starts/tanstack-start',
      primary: '#fff'
  },
  // Mobile Frameworks
  {
      name: 'React Native',
      dark: '/clikkle/images/icons/gradients/react-native.svg',
      href: '/docs/quick-starts/react-native',
      primary: '#61DAFB'
  },
  {
      name: 'Flutter',
      dark: '/clikkle/images/icons/gradients/flutter.svg',
      href: '/docs/quick-starts/flutter',
      primary: '#00569E',
      secondary: '#47C5FB'
  },
  {
      name: 'iOS',
      dark: '/clikkle/images/icons/gradients/apple.svg',
      href: '/docs/quick-starts/apple',
      primary: '#fff'
  },
  { name: 'Android', dark: '/clikkle/images/icons/gradients/android.svg', href: '/docs/quick-starts/android', primary: '#3DDC84' },
  {
      name: 'Kotlin',
      dark: '/clikkle/images/icons/gradients/kotlin.svg',
      href: '/docs/quick-starts/kotlin',
      primary: '#6D74E1',
      secondary: '#E1725C'
  },
  {
      name: 'Swift',
      dark: '/clikkle/images/icons/gradients/swift.svg',
      href: '/docs/quick-starts/swift',
      primary: '#F88A36',
      secondary: '#FD2020'
  },
  // Backend Languages & Runtimes
  { name: 'Node.js', dark: '/clikkle/images/icons/gradients/node.svg', href: '/docs/quick-starts/node', primary: '#8CC84B' },
  {
      name: 'Python',
      dark: '/clikkle/images/icons/gradients/python.svg',
      href: '/docs/quick-starts/python',
      primary: '#F9C600',
      secondary: '#327EBD'
  },
  { name: 'PHP', dark: '/clikkle/images/icons/gradients/php.svg', href: '/docs/quick-starts/php', primary: '#8892BF' },
  {
      name: 'Ruby',
      dark: '/clikkle/images/icons/gradients/ruby.svg',
      href: '/docs/quick-starts/ruby',
      primary: '#791C12',
      secondary: '#9E120B'
  },
  { name: '.NET', dark: '/clikkle/images/icons/gradients/net.svg', href: '/docs/quick-starts/dotnet', primary: '#512BD4' },
  { name: 'Go', dark: '/clikkle/images/icons/gradients/go.svg', href: '/docs/quick-starts/go', primary: '#fff' },
  {
      name: 'Deno',
      dark: '/clikkle/images/icons/gradients/deno.svg',
      href: '/docs/quick-starts/deno',
      primary: '#fff'
  },
  {
      name: 'Dart',
      dark: '/clikkle/images/icons/gradients/dart.svg',
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
        {/* Headline */}
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
          {/* Create two sets for the marquee effect */}
          {[1, 2].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className={cn(
                "divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]",
                {
                  "md:hidden": groupIndex === 0,
                }
              )}
            >
              {platforms.map((platform, i) => (
                <div
                  key={`${groupIndex}-${platform.name}`}
                  className="contents group/item relative"
                  style={
                    {
                      "--primary-color": platform.primary,
                      "--secondary-color": platform.secondary || platform.primary,
                      "--animation-delay": `${i * 25}ms`,
                    } as React.CSSProperties
                  }
                >
                  {/* Tooltip trigger/wrapper */}
                  <div
                    className={cn(
                      "border-smooth group animate-fade-in /mt-4 relative flex h-16 w-16 items-center justify-center border-dashed border-white/10 md:mt-0 md:w-full lg:border-r",
                      {
                        "lg:border-l": i === 0,
                      }
                    )}
                    aria-hidden={i < platforms.length - 1}
                  >
                    <Link href={platform.href} className="contents relative w-full h-full flex items-center justify-center">
                      {/* Original Clikkle icon logic */}
                      <img src={platform.dark}
                        alt={platform.name}
                        className="h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0 relative z-10" loading="lazy" />

                      {/* Clikkle animated noise background hover effect */}
                      <div
                        className={cn(
                          "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100",
                          "bg-gradient-to-tl from-transparent to-transparent pointer-events-none",
                          "hover:from-[color:var(--primary-color)]/10 hover:to-[color:var(--secondary-color)]/20"
                        )}
                      >
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
