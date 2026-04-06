'use client';

import { useCallback, useRef, useState } from 'react';

type Props = {
    gap?: number;
    size?: 'default' | 'medium' | 'big';
    children: React.ReactNode;
    header: React.ReactNode;
    /** When true, nav buttons stay disabled (matches Svelte empty “Upcoming Events” state). */
    staticNav?: boolean;
};

/** Mirrors `Carousel.svelte` (scroll + nav + gradient fades) for the “Upcoming Events” block. */
export function CommunityEventsCarousel({ gap = 32, size = 'default', children, header, staticNav = false }: Props) {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [edge, setEdge] = useState<'start' | 'end' | 'middle'>(() => (staticNav ? 'end' : 'start'));

    const handleScroll = useCallback(() => {
        const el = carouselRef.current;
        if (!el) return;
        const isStart = el.scrollLeft <= 0;
        const isEnd = Math.ceil(el.scrollLeft + el.offsetWidth) >= el.scrollWidth;
        setEdge(isStart ? 'start' : isEnd ? 'end' : 'middle');
    }, []);

    const onScroll = staticNav ? undefined : handleScroll;

    function calculateScrollAmount(prev = false) {
        const el = carouselRef.current;
        if (!el || !el.firstElementChild) return 0;
        const direction = prev ? -1 : 1;
        const carouselSize = el.clientWidth;
        const first = el.firstElementChild as HTMLElement;
        const childSize = first.offsetWidth + gap;
        const numberOfItems = Math.max(1, Math.floor(carouselSize / childSize));
        return numberOfItems * childSize * direction;
    }

    function next() {
        if (staticNav) return;
        carouselRef.current?.scrollBy({ left: calculateScrollAmount(), behavior: 'smooth' });
    }

    function prev() {
        if (staticNav) return;
        carouselRef.current?.scrollBy({ left: calculateScrollAmount(true), behavior: 'smooth' });
    }

    return (
        <div>
            <div className="community-carousel-header mt-2 flex flex-wrap items-center">
                {header}
                <div className="community-carousel-nav ml-auto flex items-end gap-3">
                    <button
                        type="button"
                        className="web-icon-button cursor-pointer"
                        aria-label="Move carousel backward"
                        disabled={staticNav || edge === 'start'}
                        onClick={prev}
                    >
                        <span className="web-icon-arrow-left" aria-hidden />
                    </button>
                    <button
                        type="button"
                        className="web-icon-button cursor-pointer"
                        aria-label="Move carousel forward"
                        disabled={staticNav || edge === 'end'}
                        onClick={next}
                    >
                        <span className="web-icon-arrow-right" aria-hidden />
                    </button>
                </div>
            </div>
            <div
                className={`community-carousel-wrapper${staticNav ? ' community-carousel-wrapper--static' : ''}`}
                data-state={edge}
            >
                <ul
                    ref={carouselRef}
                    className={`community-carousel web-grid-articles mt-8 ${size === 'medium' ? 'is-medium' : ''} ${size === 'big' ? 'is-big' : ''}`}
                    style={{ gap: `${gap}px` }}
                    onScroll={onScroll}
                >
                    {children}
                </ul>
            </div>
        </div>
    );
}
