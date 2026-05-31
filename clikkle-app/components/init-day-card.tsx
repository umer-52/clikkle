"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContentLink {
  type: string;
  title: string;
  url: string;
}

interface DayCardProps {
  index: number;
  title: string;
  description: string;
  releaseDate: string;
  imageUrl: string;
  links: ContentLink[];
}

export function DayCard({
  index,
  title,
  description,
  releaseDate,
  imageUrl,
  links,
}: DayCardProps) {
  return (
    <div className="init-day" id={`day-${index}`}>
      <div className="init-window">
        {/* Window Header */}
        <div className="init-window-header">
          <div className="init-window-dot" />
          <div className="init-window-dot" />
          <div className="init-window-dot" />
        </div>

        {/* Window Body */}
        <div className="init-window-body">
          {/* Info Side */}
          <div className="init-window-info">
            <div>
              <span className="init-day-label">
                Day {index} — {releaseDate}
              </span>
              <h2 className="text-title font-aeonik-pro text-primary mt-2">
                {title}
              </h2>
              <p className="text-body text-secondary mt-2">{description}</p>
            </div>

            {links && links.length > 0 && (
              <div className="init-content-links">
                {links.map((link, i) => (
                  <Link key={i} href={link.url} className="init-content-link">
                    <span className="init-content-link-type">{link.type}</span>
                    <span className="init-content-link-title">{link.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Visual Side */}
          <div className="init-window-visual">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
