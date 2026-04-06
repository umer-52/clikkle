/** Mirrors `FloatingHeads.svelte` — server-friendly (URLs pre-resolved). */
const HEAD_POSITIONS: [number, number, number][] = [
    [120, -25, 40],
    [120, 20, -40],
    [64, -40, 20],
    [64, 25, 35],
    [64, 10, 45],
    [64, 40, 55],
    [64, 40, -20],
    [64, 10, -55],
    [40, -45, 50],
    [40, -40, -40],
];

type Props = {
    imageUrls: readonly string[];
};

export function CommunityFloatingHeads({ imageUrls }: Props) {
    if (imageUrls.length === 0) return null;

    return (
        <div className="community-floating-heads-root web-u-hide-mobile absolute">
            {HEAD_POSITIONS.map(([size, top, left], i) => {
                const src = imageUrls[i % imageUrls.length]!;
                return (
                    <div
                        key={i}
                        className="community-floating-head"
                        style={{
                            width: size,
                            height: size,
                            top: `calc(50% - ${size / 2}px + ${top}%)`,
                            left: `calc(50% - ${size / 2}px + ${left}%)`,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element -- decorative heads; mixed SVG + remote URLs */}
                        <img src={src} alt="" />
                    </div>
                );
            })}
        </div>
    );
}
