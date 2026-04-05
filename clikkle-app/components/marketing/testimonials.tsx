import { cn } from '@/lib/utils';

/** `src/lib/components/product-pages/testimonials.svelte` — data + layout (Clikkle copy / image paths). */
const testimonials = [
    {
        name: 'Ryan O’Conner',
        copy: `The switch to using Clikkle brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
        image: '/clikkle/images/testimonials/ryan-oconner.png',
        title: 'Founder',
        company: 'K-Collect'
    },
    {
        name: 'David Forster',
        copy: `We really loved working with Clikkle for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into React Native was.`,
        image: '/clikkle/images/testimonials/david-forster.png',
        title: 'Founder',
        company: 'Open Mind'
    },
    {
        name: 'Marius Bolik',
        copy: `The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
        image: '/clikkle/images/testimonials/marius-bolik2.png',
        title: 'CTO',
        company: 'mySHOEFITTER'
    },
    {
        name: 'Sergio Ponguta',
        copy: `Just go for it, don’t think twice. Try Clikkle, and you will love it!`,
        image: '/clikkle/images/testimonials/smartbee.png',
        title: 'Founder',
        company: 'Smart Bee'
    },
    {
        name: 'Phil McClusky',
        copy: 'Just like a Swiss Army Knife, you can choose and use the tools that you need with Clikkle.',
        image: '/clikkle/images/testimonials/majik.png',
        title: 'Developer',
        company: 'Majik Kids'
    },
    {
        name: 'Zach Handley',
        copy: `We have somewhere between 200,000 to 600,000 function executions per day. It's especially nice that you guys have to deal with the scaling now and not me.`,
        image: '/clikkle/images/testimonials/zach-handley.jpg',
        title: 'CTO',
        company: 'Socialaize'
    }
];

interface Props {
    className?: string;
}

export function Testimonials({ className }: Props) {
    return (
        <div className={cn('relative w-full max-w-[100vw] overflow-hidden py-20', className)}>
            {/*
              No `light` on the track: inherited tokens from the parent `.light` section are enough.
              A local `.light` would paint `var(--bg-primary)` across the row and merge with `bg-white` cards.
            */}
            <div className="group flex w-fit gap-8 bg-transparent">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex animate-scroll-deprecate items-center gap-8 group-hover:[animation-play-state:paused]"
                        aria-hidden={i !== 0}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={`${i}-${idx}`}
                                className="flex h-fit w-[90vw] shrink-0 flex-col justify-center rounded-2xl border border-[rgb(55_59_77/0.08)] bg-white p-6 shadow-[0_16px_32px_rgb(55_59_77/0.08)] transition-all md:w-lg"
                            >
                                <p className="text-sub-body flex-1 font-medium text-secondary">{testimonial.copy}</p>

                                <div className="mt-4 flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        className="size-12 rounded-full"
                                        alt={`${testimonial.company} Logo`}
                                        loading="lazy"
                                    />
                                    <div>
                                        <span className="text-sub-body text-secondary block font-medium">
                                            {testimonial.name}
                                        </span>
                                        {testimonial.title ? (
                                            <span className="text-sub-body text-secondary block">
                                                {testimonial.title} // {testimonial.company}
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
