"use client";

import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";

/* ─── Pin data (ported from Appwrite source) ─── */
const pins = {
  "pop-locations": [
    { lat: 39.04, lng: -77.49, city: "Ashburn", code: "ASH" },
    { lat: 33.75, lng: -84.39, city: "Atlanta", code: "ATL" },
    { lat: 42.36, lng: -71.06, city: "Boston", code: "BOS" },
    { lat: 51.05, lng: -114.07, city: "Calgary", code: "CAL" },
    { lat: 41.88, lng: -87.63, city: "Chicago", code: "CHI" },
    { lat: 39.96, lng: -82.99, city: "Columbus", code: "COL" },
    { lat: 32.78, lng: -96.8, city: "Dallas", code: "DAL" },
    { lat: 39.74, lng: -104.99, city: "Denver", code: "DEN" },
    { lat: 42.33, lng: -83.05, city: "Detroit", code: "DET" },
    { lat: 29.76, lng: -95.37, city: "Houston", code: "HOU" },
    { lat: 30.33, lng: -81.66, city: "Jacksonville", code: "JAX" },
    { lat: 39.1, lng: -94.58, city: "Kansas City", code: "KC" },
    { lat: 34.05, lng: -118.24, city: "Los Angeles", code: "LA" },
    { lat: 25.77, lng: -80.19, city: "Miami", code: "MIA" },
    { lat: 44.98, lng: -93.27, city: "Minneapolis", code: "MIN" },
    { lat: 45.5, lng: -73.57, city: "Montreal", code: "MTL" },
    { lat: 40.71, lng: -74.01, city: "New York", code: "NYC" },
    { lat: 33.45, lng: -112.07, city: "Phoenix", code: "PHX" },
    { lat: 45.52, lng: -122.68, city: "Portland", code: "PDX" },
    { lat: 37.34, lng: -121.89, city: "San Jose", code: "SJ" },
    { lat: 47.61, lng: -122.33, city: "Seattle", code: "SEA" },
    { lat: 38.63, lng: -90.2, city: "St Louis", code: "STL" },
    { lat: 43.65, lng: -79.38, city: "Toronto", code: "TOR" },
    { lat: 49.28, lng: -123.12, city: "Vancouver", code: "VAN" },
    { lat: 4.71, lng: -74.07, city: "Bogota", code: "BOG" },
    { lat: -34.61, lng: -58.38, city: "Buenos Aires", code: "BUE" },
    { lat: -25.43, lng: -49.27, city: "Curitiba", code: "CUR" },
    { lat: -8.73, lng: -38.52, city: "Fortaleza", code: "FOR" },
    { lat: -12.05, lng: -77.04, city: "Lima", code: "LIM" },
    { lat: -23.55, lng: -46.63, city: "São Paulo", code: "SAO" },
    { lat: -33.45, lng: -70.67, city: "Santiago", code: "SCL" },
    { lat: -22.91, lng: -43.17, city: "Rio de Janeiro", code: "RIO" },
    { lat: 52.37, lng: 4.89, city: "Amsterdam", code: "AMS" },
    { lat: 55.68, lng: 12.57, city: "Copenhagen", code: "CPH" },
    { lat: 50.85, lng: 4.35, city: "Brussels", code: "BRU" },
    { lat: 55.35, lng: -10.26, city: "Dublin", code: "DUB" },
    { lat: 50.11, lng: 8.68, city: "Frankfurt", code: "FRA" },
    { lat: 60.17, lng: 24.94, city: "Helsinki", code: "HEL" },
    { lat: 40.72, lng: -12.14, city: "Lisbon", code: "LIS" },
    { lat: 51.51, lng: -0.13, city: "London", code: "LON" },
    { lat: 46.42, lng: -3.7, city: "Madrid", code: "MAD" },
    { lat: 53.48, lng: -2.24, city: "Manchester", code: "MAN" },
    { lat: 43.3, lng: 5.37, city: "Marseille", code: "MRS" },
    { lat: 45.46, lng: 9.19, city: "Milan", code: "MIL" },
    { lat: 48.14, lng: 11.58, city: "Munich", code: "MUN" },
    { lat: 62.91, lng: 8.75, city: "Oslo", code: "OSL" },
    { lat: 38.12, lng: 13.36, city: "Palermo", code: "PAL" },
    { lat: 48.86, lng: 2.35, city: "Paris", code: "PAR" },
    { lat: 41.9, lng: 12.5, city: "Rome", code: "ROM" },
    { lat: 42.7, lng: 23.32, city: "Sofia", code: "SOF" },
    { lat: 59.33, lng: 18.07, city: "Stockholm", code: "STO" },
    { lat: 48.21, lng: 16.37, city: "Vienna", code: "VIE" },
    { lat: 5.56, lng: -0.2, city: "Accra", code: "ACC" },
    { lat: -33.93, lng: 18.42, city: "Cape Town", code: "CPT" },
    { lat: -26.2, lng: 28.05, city: "Johannesburg", code: "JHB" },
    { lat: 13.75, lng: 100.5, city: "Bangkok", code: "BKK" },
    { lat: 13.08, lng: 80.28, city: "Chennai", code: "CHE" },
    { lat: 25.27, lng: 55.3, city: "Dubai", code: "DXB" },
    { lat: 25.12, lng: 56.33, city: "Fujairah", code: "FUJ" },
    { lat: 22.32, lng: 114.17, city: "Hong Kong", code: "HK" },
    { lat: 17.38, lng: 78.48, city: "Hyderabad", code: "HYD" },
    { lat: 22.57, lng: 88.36, city: "Kolkata", code: "KOL" },
    { lat: 3.14, lng: 101.69, city: "Kuala Lumpur", code: "KL" },
    { lat: 14.6, lng: 120.98, city: "Manila", code: "MNL" },
    { lat: 19.08, lng: 72.88, city: "Mumbai", code: "MUM" },
    { lat: 28.61, lng: 77.21, city: "New Delhi", code: "DEL" },
    { lat: 34.69, lng: 135.5, city: "Osaka", code: "OSA" },
    { lat: 37.57, lng: 126.98, city: "Seoul", code: "SEL" },
    { lat: 1.35, lng: 103.82, city: "Singapore", code: "SGP" },
    { lat: 35.69, lng: 139.69, city: "Tokyo", code: "TYO" },
    { lat: -34.93, lng: 138.6, city: "Adelaide", code: "ADL" },
    { lat: -39.85, lng: 174.76, city: "Auckland", code: "AKL" },
    { lat: -27.47, lng: 153.03, city: "Brisbane", code: "BNE" },
    { lat: -37.81, lng: 144.96, city: "Melbourne", code: "MEL" },
    { lat: -31.95, lng: 115.85, city: "Perth", code: "PER" },
    { lat: -33.87, lng: 151.21, city: "Sydney", code: "SYD" },
  ],
  edges: [
    { lat: 40.71, lng: -74.01, city: "New York", code: "NYC" },
    { lat: 50.11, lng: 8.68, city: "Frankfurt", code: "FRA" },
    { lat: -33.87, lng: 151.21, city: "Sydney", code: "AUS" },
    { lat: 1.35, lng: 103.82, city: "Singapore", code: "SGP" },
    { lat: 37.77, lng: -122.42, city: "San Francisco", code: "SFO" },
    { lat: 12.97, lng: 77.59, city: "Bangalore", code: "BLR" },
    { lat: 52.37, lng: 4.9, city: "Amsterdam", code: "AMS" },
    { lat: 51.51, lng: -0.13, city: "London", code: "LON" },
    { lat: 43.65, lng: -79.38, city: "Toronto", code: "TOR" },
  ],
  regions: [
    { lat: 40.71, lng: -74.01, city: "New York", code: "NYC" },
    { lat: 50.11, lng: 8.68, city: "Frankfurt", code: "FRA" },
    { lat: -33.87, lng: 151.21, city: "Sydney", code: "AUS" },
    { lat: 1.35, lng: 103.82, city: "Singapore", code: "SGP" },
    { lat: 37.77, lng: -122.42, city: "San Francisco", code: "SFO" },
    { lat: 12.97, lng: 77.59, city: "Bangalore", code: "BLR" },
    { lat: 52.37, lng: 4.9, city: "Amsterdam", code: "AMS" },
    { lat: 51.51, lng: -0.13, city: "London", code: "LON" },
    { lat: 43.65, lng: -79.38, city: "Toronto", code: "TOR" },
  ],
} as const;

type PinSegment = keyof typeof pins;

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

/* ─── Mercator projection ─── */
function latLngToXY(lat: number, lng: number, w: number, h: number) {
  const x = ((lng + 180) / 360) * w;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = h / 2 - (mercN / Math.PI) * (h / 2);
  return { x, y };
}

/* ─── SVG Dotted Map using the actual library ─── */
const MAP_W = 150;
const MAP_H = 75;
const RADIUS = 0.4;

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
            fill="#19191c"
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
    <div className="flex min-h-[100vh] flex-col items-center justify-center gap-12 bg-[#EDEDF0] py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 px-4">
        <h2 className="text-title font-aeonik-pro text-center text-[#19191c]">
          The Clikkle Network<span className="text-[#2D63FF]">_</span>
        </h2>
        <p className="text-description max-w-xl text-center font-medium text-[#56565c]">
          Pick one of our many cloud regions or edges to meet your project's
          needs and reduce latency.
        </p>
        <a
          href="/the-clikkle-network"
          className="mt-2 flex items-center justify-center rounded-lg border border-[#CDCDCF] bg-white px-6 py-2.5 text-sm font-semibold text-[#19191c] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#f5f5f5]"
        >
          More about the Clikkle Network
        </a>
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

      {/* Bottom caption */}
      <p className="text-center text-sm font-medium text-[#56565c] px-4">
        Points of presence ensure &lt;50ms ping around the globe.{" "}
        <a
          href="/docs/products/network/cdn"
          className="text-[#2D63FF] hover:underline"
        >
          Learn more about PoP Locations
        </a>
      </p>

      {/* Tabs */}
      <div className="grid w-full max-w-xl grid-cols-3 place-content-center gap-3 rounded-full bg-white/90 p-1 drop-shadow-md mx-4">
        {tabItems.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "text-caption flex h-8 items-center justify-center gap-1 rounded-full border border-[#EBEBEB] font-medium transition-colors text-[#19191c]",
                isActive && "bg-[#2D63FF]/5 border-[#2D63FF] text-[#2D63FF]"
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
