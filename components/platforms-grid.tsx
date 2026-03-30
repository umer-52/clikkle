"use client";

import { cn } from "@/lib/utils";

const platforms = [
  // Web Frameworks (by popularity)
  { name: 'Next.js', dark: '/assets/icons/nextjs.svg', href: '#', primary: '#fff' },
  { name: 'React', dark: '/assets/icons/react.svg', href: '#', primary: '#53C1DE' },
  { name: 'Vue', dark: '/assets/icons/vue.svg', href: '#', primary: '#4FC08D' },
  { name: 'Angular', dark: '/assets/icons/angular.svg', href: '#', primary: '#DD0031' },
  { name: 'Svelte', dark: '/assets/icons/svelte.svg', href: '#', primary: '#FF3E00' },
  {
      name: 'TanStack Start',
      dark: '/assets/icons/tanstack.svg',
      href: '#',
      primary: '#fff'
  },
  // Mobile Frameworks
  {
      name: 'React Native',
      dark: '/assets/icons/react-native.svg',
      href: '#',
      primary: '#61DAFB'
  },
  {
      name: 'Flutter',
      dark: '/assets/icons/flutter.svg',
      href: '#',
      primary: '#00569E',
      secondary: '#47C5FB'
  },
  {
      name: 'iOS',
      dark: '/assets/icons/apple.svg',
      href: '#',
      primary: '#fff'
  },
  { name: 'Android', dark: '/assets/icons/android.svg', href: '#', primary: '#3DDC84' },
  {
      name: 'Kotlin',
      dark: '/assets/icons/kotlin.svg',
      href: '#',
      primary: '#6D74E1',
      secondary: '#E1725C'
  },
  {
      name: 'Swift',
      dark: '/assets/icons/swift.svg',
      href: '#',
      primary: '#F88A36',
      secondary: '#FD2020'
  },
  // Backend Languages & Runtimes
  { name: 'Node.js', dark: '/assets/icons/node.svg', href: '#', primary: '#8CC84B' },
  {
      name: 'Python',
      dark: '/assets/icons/python.svg',
      href: '#',
      primary: '#F9C600',
      secondary: '#327EBD'
  },
  { name: 'PHP', dark: '/assets/icons/php.svg', href: '#', primary: '#8892BF' },
  {
      name: 'Ruby',
      dark: '/assets/icons/ruby.svg',
      href: '#',
      primary: '#791C12',
      secondary: '#9E120B'
  },
  { name: '.NET', dark: '/assets/icons/net.svg', href: '#', primary: '#512BD4' },
  { name: 'Go', dark: '/assets/icons/go.svg', href: '#', primary: '#fff' },
  {
      name: 'Deno',
      dark: '/assets/icons/deno.svg',
      href: '#',
      primary: '#fff'
  },
  {
      name: 'Dart',
      dark: '/assets/icons/dart.svg',
      href: '#',
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
          <span className="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px] -mb-1 bg-gradient-to-br from-[#f8a1ba] to-white to-50% bg-clip-text pb-1 text-transparent">
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
                    <a href={platform.href} className="contents relative w-full h-full flex items-center justify-center">
                      {/* Original Clikkle icon logic */}
                      <img
                        src={platform.dark}
                        alt={platform.name}
                        className="h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0 relative z-10"
                      />
                      
                      {/* Clikkle animated noise background hover effect */}
                      <div
                        className={cn(
                          "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100",
                          "bg-gradient-to-tl from-transparent to-transparent pointer-events-none",
                          "hover:from-[color:var(--primary-color)]/10 hover:to-[color:var(--secondary-color)]/20"
                        )}
                      >
                      </div>
                    </a>
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
