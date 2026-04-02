import { cn } from '@/lib/utils';
import Image from 'next/image';

const platforms = [
    { name: 'Deno', icon: '/clikkle/images/platforms/deno.svg' },
    { name: 'Python', icon: '/clikkle/images/platforms/python.svg' },
    { name: 'Dart', icon: '/clikkle/images/platforms/dart.svg' },
    { name: 'PHP', icon: '/clikkle/images/platforms/php.svg' },
    { name: 'Ruby', icon: '/clikkle/images/platforms/ruby.svg' },
    { name: '.NET', icon: '/clikkle/images/platforms/dot-net.svg' },
    { name: 'Java', icon: '/clikkle/images/platforms/java.svg' },
    { name: 'Node.js', icon: '/clikkle/images/platforms/node-js.svg' },
    { name: 'Bun', icon: '/clikkle/images/platforms/bun-sh.svg' },
    { name: 'Swift', icon: '/clikkle/images/platforms/swift.svg' },
    { name: 'Kotlin', icon: '/clikkle/images/platforms/kotlin.svg' },
    { name: 'C++', icon: '/clikkle/images/platforms/c-plus-plus.svg' }
];

export function Platforms() {
    return (
        <div
            className={cn(
                'container mb-10 overflow-clip',
                '[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [filter:brightness(1.5)]'
            )}
        >
            <div className="flex w-max gap-4 pl-4 animate-scroll-x sm:hover:[animation-play-state:paused]">
                {platforms.map((platform, i) => (
                    <img key={`p1-${i}`} src={platform.icon} alt={platform.name} className="w-16 h-16" loading="lazy" />
                ))}
                {platforms.map((platform, i) => (
                    <img key={`p2-${i}`} src={platform.icon} alt={platform.name} className="w-16 h-16" aria-hidden="true" loading="lazy" />
                ))}
            </div>
        </div>
    );
}
