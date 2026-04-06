'use client';

/**
 * Parity with `src/lib/components/appwrite-network/map.svelte` (Appwrite marketing map).
 * Same svg-dotted-map params, transforms, dot colors, and marker geometry (fill-accent disc + white center).
 */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createMap } from 'svg-dotted-map';
import { pins, type PinSegment } from './data/pins';
import { MapTooltip, type TooltipData } from './map-tooltip';
import { MapNav } from './map-nav';
import { cn } from '@/lib/utils';

interface MapProps {
    theme?: 'light' | 'dark';
    navigable?: boolean;
    defaultSet?: PinSegment;
}

export function Map({ theme = 'dark', navigable = true, defaultSet = 'pop-locations' }: MapProps) {
    const [activeSegment, setActiveSegment] = useState<PinSegment>(defaultSet);
    const [tooltipData, setTooltipData] = useState<TooltipData>({ city: null, code: null });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const mapLayerRef = useRef<HTMLDivElement>(null);

    const radius = 0.4;
    const height = 75;

    const { points, markers } = useMemo(() => {
        const { points, addMarkers } = createMap({
            width: height * 2,
            height,
            mapSamples: 5000,
            radius
        });

        const activeMarkersList: any[] = pins[activeSegment];
        const markers = addMarkers(activeMarkersList);

        return { points, markers };
    }, [activeSegment]);

    /* Svelte `mouse-position.svelte.ts`: +12 offset, listeners while hovering map layer */
    useEffect(() => {
        const el = mapLayerRef.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX + 12, y: e.clientY + 12 });
        };

        const onEnter = () => {
            document.addEventListener('mousemove', handleMouseMove);
        };
        const onLeave = () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseOver = (marker: any) => {
        setTooltipData({
            city: marker.city,
            code: marker.code,
            available: marker.available,
            date: marker.date
        });
    };

    const handleMouseOut = () => {
        setTooltipData({ city: null, code: null });
    };

    /* DOM matches map.svelte: scroll clip wraps only the SVG stack; tooltip + nav are siblings. */
    return (
        <>
            <div className="relative w-full overflow-x-hidden [scrollbar-width:none]">
                <div className="relative mx-auto h-full [scrollbar-width:none] md:w-full">
                    <div
                        ref={mapLayerRef}
                        className={cn(
                            'relative mx-auto my-10 h-fit max-w-5xl origin-bottom transition-all [scrollbar-width:none]',
                            'transform-[perspective(25px)_rotateX(1deg)_scale3d(1.2,_1.2,_1)]',
                            'md:my-0 md:w-full md:-translate-x-20'
                        )}
                    >
                        {/*
                         * Svelte `map.svelte`: bare `<svg viewBox>`. Block + width fills row; `min-w-0` avoids
                         * flex/grid overflow clipping in nested layouts (Appwrite marketing section).
                         */}
                        <svg
                            viewBox={`0 0 ${height * 2} ${height}`}
                            className="mx-auto block h-auto w-full min-w-0 max-w-none"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {points.map((point: any, i: number) => (
                                <ellipse
                                    key={i}
                                    cx={point.x}
                                    cy={point.y}
                                    rx={radius}
                                    ry={radius * 1.25}
                                    fill={theme === 'dark' ? 'rgba(255,255,255,.1)' : '#dadadd'}
                                />
                            ))}
                            {markers.map((marker: any, i: number) => (
                                <g
                                    key={i}
                                    role="tooltip"
                                    aria-label={`${marker.city} (${marker.code})`}
                                    onMouseOver={() => handleMouseOver(marker)}
                                    onFocus={() => handleMouseOver(marker)}
                                    onBlur={handleMouseOut}
                                    onMouseOut={handleMouseOut}
                                    className="cursor-pointer"
                                >
                                    <circle
                                        cx={marker.x}
                                        cy={marker.y}
                                        r={radius * 1.25}
                                        fill="var(--color-accent, var(--color-brand-primary, #2d63ff))"
                                    />
                                    <circle cx={marker.x} cy={marker.y} r={radius * 0.5} fill="white" />
                                    <circle cx={marker.x} cy={marker.y} r={radius * 4} fill="transparent" />
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </div>

            <MapTooltip {...mousePos} theme={theme} tooltipData={tooltipData} />

            {navigable ? (
                <MapNav
                    theme={theme}
                    activeSegment={activeSegment}
                    onValueChange={(val) => setActiveSegment(val as PinSegment)}
                />
            ) : null}
        </>
    );
}
