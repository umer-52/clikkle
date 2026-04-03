'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { createMap } from 'svg-dotted-map';
import { pins, type PinSegment } from './data/pins';
import { MapTooltip, type TooltipData } from './map-tooltip';
import { MapNav } from './map-nav';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

interface MapProps {
    theme?: 'light' | 'dark';
    navigable?: boolean;
    defaultSet?: PinSegment;
}

export function Map({ theme = 'dark', navigable = true, defaultSet = 'pop-locations' }: MapProps) {
    const [activeSegment, setActiveSegment] = useState<PinSegment>(defaultSet);
    const [tooltipData, setTooltipData] = useState<TooltipData>({ city: null, code: null });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const mapRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(mapRef, { once: true, amount: 0.2 });

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

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX + 15, y: e.clientY + 15 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
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

    return (
        <div className="relative w-full overflow-hidden">
            <div ref={mapRef} className="relative mx-auto h-full md:w-full">
                <motion.div
                    initial={{ opacity: 0, perspective: 25, rotateX: 2, scale: 1.2 }}
                    animate={isInView ? { opacity: 1, rotateX: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative mx-auto my-10 h-fit max-w-5xl origin-bottom transform-[perspective(25px)_rotateX(1deg)_scale3d(1.2,_1.2,_1)] transition-all md:my-0 md:w-[120%] md:-translate-x-[10%]"
                >
                    <svg viewBox={`0 0 ${height * 2} ${height}`} className="w-full h-auto drop-shadow-sm">
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
                                    className="fill-[var(--color-brand-primary,#2d63ff)]"
                                />
                                <circle cx={marker.x} cy={marker.y} r={radius * 0.5} fill="white" />
                                <circle cx={marker.x} cy={marker.y} r={radius * 4} className="fill-transparent" />
                            </g>
                        ))}
                    </svg>
                </motion.div>
            </div>

            <MapTooltip {...mousePos} theme={theme} tooltipData={tooltipData} />

            {navigable && (
                <div className="relative z-[10]">
                    <MapNav
                        theme={theme}
                        activeSegment={activeSegment}
                        onValueChange={(val) => setActiveSegment(val as PinSegment)}
                    />
                </div>
            )}
        </div>
    );
}
