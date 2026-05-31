"use client";

interface MediaCardProps {
  title: string;
  url: string;
  poster: string;
  type: "video" | "announcement" | "discord";
}

export function MediaCard({ title, poster, url, type }: MediaCardProps) {
  return (
    <a
      className="init-media-card group block"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="init-media-frame relative overflow-hidden block rounded-md">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-75"
        />
        <span className="init-media-play absolute bottom-2 left-2 z-10">
          <img
            src="/clikkle/images/init/icons/play.svg"
            alt=""
            aria-hidden="true"
            className="w-5 h-5"
          />
        </span>
      </span>
      <span className="init-media-title block mt-2 text-xs uppercase tracking-wider text-secondary font-mono">
        {title}
      </span>
    </a>
  );
}
