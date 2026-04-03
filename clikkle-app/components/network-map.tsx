"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { pins, type PinSegment } from "@/components/appwrite-network/data/pins";

const MAP_W = 150;
const MAP_H = 75;
const RADIUS = 0.4;

function latLngToXY(lat: number, lng: number, w: number, h: number) {
  const x = ((lng + 180) / 360) * w;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = h / 2 - (mercN / Math.PI) * (h / 2);
  return { x, y };
}

const tabItems: { label: string; value: PinSegment; icon: React.ReactNode }[] = [
  {
    label: "PoP Locations",
    value: "pop-locations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M9.82222 5C6.69333 5 5.91111 7.49542 5.91111 8.92137C5.55556 8.92137 2 8.92137 2 12.1298C2 14.6965 4.60741 15.1005 5.91111 14.9817H14.0889C15.3926 15.1005 18 14.6965 18 12.1298C18 9.56305 15.3926 8.92137 14.0889 8.92137C13.9704 7.61425 12.9511 5 9.82222 5Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    label: "Edges",
    value: "edges",
    icon: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 14.8C13.151 14.8 15.3 12.651 15.3 10C15.3 7.34903 13.151 5.2 10.5 5.2C7.84903 5.2 5.7 7.34903 5.7 10C5.7 12.651 7.84903 14.8 10.5 14.8ZM10.5 16C13.8137 16 16.5 13.3137 16.5 10C16.5 6.68629 13.8137 4 10.5 4C7.18629 4 4.5 6.68629 4.5 10C4.5 13.3137 7.18629 16 10.5 16Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Regions",
    value: "regions",
    icon: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path
          d="M16.5 8.72727C16.5 13.1818 10.5 17 10.5 17C10.5 17 4.5 13.1818 4.5 8.72727C4.5 7.20831 5.13214 5.75155 6.25736 4.67748C7.38258 3.60341 8.9087 3 10.5 3C12.0913 3 13.6174 3.60341 14.7426 4.67748C15.8679 5.75155 16.5 7.20831 16.5 8.72727Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 11C11.6046 11 12.5 10.1046 12.5 9C12.5 7.89543 11.6046 7 10.5 7C9.39543 7 8.5 7.89543 8.5 9C8.5 10.1046 9.39543 11 10.5 11Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function DottedMapSVG({
  activeMarkers,
  hoveredPin,
  setHoveredPin,
}: {
  activeMarkers: { x: number; y: number; city: string; code: string }[];
  hoveredPin: { city: string; code: string; x: number; y: number } | null;
  setHoveredPin: (
    pin: { city: string; code: string; x: number; y: number } | null
  ) => void;
}) {
  const [mapData, setMapData] = useState<
    { x: number; y: number }[] | null
  >(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import("svg-dotted-map").then(({ createMap }) => {
      const { points } = createMap({
        width: MAP_W * 2,
        height: MAP_H,
        mapSamples: 5000,
        radius: RADIUS,
      });
      setMapData(points as { x: number; y: number }[]);
    });
  }, []);

  if (!mapData) {
    // Placeholder while loading
    return (
      <svg viewBox={`0 0 ${MAP_W * 2} ${MAP_H}`} className="w-full opacity-30">
        <rect width={MAP_W * 2} height={MAP_H} fill="transparent" />
      </svg>
    );
  }

  return (
    <svg viewBox={`0 0 ${MAP_W * 2} ${MAP_H}`} className="w-full">
      {/* Background world dots */}
      {mapData.map((point, i) => (
        <ellipse
          key={i}
          cx={point.x}
          cy={point.y}
          rx={RADIUS}
          ry={RADIUS * 1.25}
          fill="#dadadd"
        />
      ))}

      {/* Active location pins */}
      {activeMarkers.map((marker) => (
        <g
          key={`${marker.city}-${marker.code}`}
          onMouseEnter={() =>
            setHoveredPin({
              city: marker.city,
              code: marker.code,
              x: marker.x,
              y: marker.y,
            })
          }
          onMouseLeave={() => setHoveredPin(null)}
          className="cursor-pointer"
        >
          {/* Invisible hit area */}
          <circle
            cx={marker.x}
            cy={marker.y}
            r={RADIUS * 5}
            fill="transparent"
          />
          {/* Glow */}
          <circle
            cx={marker.x}
            cy={marker.y}
            r={RADIUS * 1.8}
            fill="#2D63FF"
            opacity={0.3}
          />
          {/* Outer ring */}
          <circle
            cx={marker.x}
            cy={marker.y}
            r={RADIUS * 1.25}
            fill="#2D63FF"
          />
          {/* Inner dot */}
          <circle
            cx={marker.x}
            cy={marker.y}
            r={RADIUS * 0.5}
            fill="white"
          />
        </g>
      ))}

      {/* Tooltip rendered inside SVG */}
      {hoveredPin ? (
        <g>
          <rect
            x={hoveredPin.x - 30}
            y={hoveredPin.y - 10}
            width={60}
            height={7}
            rx={1}
            fill="#0f0f13"
            opacity={0.9}
          />
          <text
            x={hoveredPin.x}
            y={hoveredPin.y - 5}
            textAnchor="middle"
            fontSize={3}
            fill="white"
            fontFamily="Inter, sans-serif"
          >
            {hoveredPin.city} ({hoveredPin.code})
          </text>
        </g>
      ) : null}
    </svg>
  );
}

export function NetworkMap() {
  const [activeTab, setActiveTab] = useState<PinSegment>("pop-locations");
  const [hoveredPin, setHoveredPin] = useState<{
    city: string;
    code: string;
    x: number;
    y: number;
  } | null>(null);

  const activeMarkers = useMemo(() => {
    const segment = pins[activeTab];
    return segment.map((pin) => ({
      ...pin,
      ...latLngToXY(pin.lat, pin.lng, MAP_W * 2, MAP_H),
    }));
  }, [activeTab]);

  return (
    <div className="light flex min-h-[100vh] flex-col items-center justify-center gap-12 bg-[#EDEDF0] py-20">
      {/* Header — parity with network-map.svelte */}
      <div className="flex flex-col items-center gap-4 px-4">
        <h1 className="text-title font-aeonik-pro text-primary text-center">
          The Clikkle Network<span className="text-accent">_</span>
        </h1>
        <p className="text-description text-secondary max-w-xl text-center font-medium">
          Pick one of our many cloud regions or edges to meet your project's
          needs and reduce latency.
        </p>
        <Link
          href="/the-clikkle-network"
          className={cn(
            "mt-2 box-border inline-flex min-h-9 shrink-0 items-center justify-center rounded-[8px] border border-solid px-4 py-2 text-sm font-medium leading-none no-underline shadow-none transition-colors sm:px-6",
            "border-[color-mix(in_srgb,var(--color-brand-primary)_32%,transparent)]",
            "bg-[color-mix(in_srgb,var(--color-brand-primary)_9%,white)]",
            "text-[var(--color-brand-primary)]",
            "hover:bg-[color-mix(in_srgb,var(--color-brand-primary)_14%,white)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-brand-primary)_35%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEDF0]"
          )}
        >
          More about the Clikkle Network
        </Link>
      </div>

      {/* Map */}
      <div className="relative w-full overflow-x-hidden px-4">
        <div
          className="relative mx-auto w-full max-w-5xl"
          style={{
            transform: "perspective(25px) rotateX(1deg) scale3d(1.2, 1.2, 1)",
            transformOrigin: "bottom",
          }}
        >
          <DottedMapSVG
            activeMarkers={activeMarkers}
            hoveredPin={hoveredPin}
            setHoveredPin={setHoveredPin}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-4 grid w-full max-w-xl grid-cols-3 place-content-center gap-3 rounded-full bg-white/90 p-1 drop-shadow-md">
        {tabItems.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "text-caption text-primary bg-smooth flex h-8 items-center justify-center gap-1 rounded-full border border-[#EBEBEB] font-medium transition-colors",
                isActive && "border-accent bg-accent/5 text-accent"
              )}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
