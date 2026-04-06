import { withBasePath } from '@/lib/basepath';

export type CommunityProjectCardProps = {
    title: string;
    description: string;
    image: { src: string; alt: string };
    href: string;
};

/** Mirrors `src/routes/community/ProjectCard.svelte`. */
export function CommunityProjectCard({ title, description, image, href }: CommunityProjectCardProps) {
    const src = image.src.startsWith('http') ? image.src : withBasePath(image.src);

    return (
        <a
            className="community-project-card web-card is-white flex"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="p-3">
                <h3 className="text-main-body font-medium text-primary">{title}</h3>
                <p className="line-clamp-2 text-sub-body">{description}</p>
            </div>
            <div className="community-project-card__img mt-auto p-3 pt-0">
                {/* eslint-disable-next-line @next/next/no-img-element -- external showcase thumbnails + local SVG */}
                <img src={src} alt={image.alt} />
            </div>
        </a>
    );
}
