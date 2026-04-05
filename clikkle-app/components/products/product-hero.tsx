import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';

interface ProductHeroProps {
    eyebrow: {
        label: string;
        icon: string;
    };
    title: string;
    description: string;
    cta: {
        label: string;
        url: string;
    };
    secondaryCta?: {
        label: string;
        url: string;
    };
    image: {
        url: string | StaticImageData;
        alt?: string;
    };
    mobileImage?: {
        url: string | StaticImageData;
        alt?: string;
    };
}

export function ProductHero({
    eyebrow,
    title,
    description,
    cta,
    secondaryCta,
    image,
    mobileImage
}: ProductHeroProps) {
    return (
        <div className="border-smooth relative isolate box-content flex items-center overflow-hidden border-b px-5 py-12 lg:px-8 xl:px-16 md:pt-32 md:pb-40">
            <div
                className="pointer-events-none absolute inset-0 -z-20 bg-[url(/clikkle/images/bgs/mobile-hero.png)] bg-cover bg-bottom md:bg-[url(/clikkle/images/bgs/hero.png)] md:bg-center"
                aria-hidden
            />
            <div className="marketing-hero-lighting-layer" aria-hidden />
            <div className="relative z-10 mx-auto grid w-full max-w-[75rem] items-center gap-16 md:grid-cols-2">
                <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        <img src={eyebrow.icon} className="size-8" alt="" />
                        <span className="text-eyebrow font-aeonik-fono tracking-loose text-primary uppercase">
                            {eyebrow.label}<span className="text-accent">_</span>
                        </span>
                    </div>
                    <h1 className="text-display font-aeonik-pro text-primary text-pretty max-sm:max-w-[300px] md:max-w-md">
                        {title}
                    </h1>
                    <p className="text-description text-secondary font-medium text-pretty">
                        {description}
                    </p>

                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <Button
                            asChild
                            className="!w-full md:!w-fit"
                        >
                            <Link href={cta.url}>{cta.label}</Link>
                        </Button>
                        {secondaryCta && (
                            <Button
                                asChild
                                variant="secondary"
                                className="!w-full md:!w-fit"
                            >
                                <Link href={secondaryCta.url}>{secondaryCta.label}</Link>
                            </Button>
                        )}
                    </div>
                </div>
                
                {/* Fallback to standard img tag for easier layout matching with Clikkle's approach, though next/image is preferred */}
                <img className={cn({ 'hidden md:block': mobileImage })} 
                    src={typeof image.url === 'string' ? image.url : (image.url as any).src} 
                    alt={image.alt ?? ''} />
                
                {mobileImage && (
                    <img className="block md:hidden" 
                        src={typeof mobileImage.url === 'string' ? mobileImage.url : (mobileImage.url as any).src} 
                        alt={mobileImage.alt ?? ''} />
                )}
            </div>
        </div>
    );
}
