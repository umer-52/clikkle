"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Window } from "./init-window";
import { PreReleaseCard } from "./init-pre-release-card";
import { MediaCard } from "./init-media-card";
import { useCountdown } from "@/lib/use-countdown";

export interface DayProps {
  index: number;
  release: Date;
  illustration: string;
  illustrationWidth: number;
  illustrationHeight: number;
  title: string;
  description: string;
  url: string;
  content: Array<{
    type: "Blog" | "Docs" | "Article";
    title: string;
    url: string;
    label?: string;
  }>;
  announcementVideo?: {
    title: string;
    url: string;
    poster: string;
    type: "video" | "announcement" | "discord";
  };
  links?: Array<{
    title: string;
    url: string;
    poster: string;
    type: "video" | "announcement" | "discord";
  }>;
}

export function Day({
  index,
  release,
  illustration,
  illustrationWidth,
  illustrationHeight,
  title,
  description,
  url,
  content,
  announcementVideo,
  links,
}: DayProps) {
  const { hasReleased } = useCountdown(release);

  if (!hasReleased) {
    return <PreReleaseCard index={index} release={release} />;
  }

  return (
    <section className="init-day" id={`day-${index}`}>
      <Window
        title={
          <>
            Day {index} <span>/</span> {format(release, "EEEE, MMM d")}
          </>
        }
      >
        <div className="init-day-card">
          <div className="init-day-feature">
            {/* Left: copy column */}
            <div className="init-day-copy">
              <h2 className="text-display font-aeonik-pro text-primary">
                {title}
                <span>_</span>
              </h2>
              <p className="text-secondary text-main-body font-medium">{description}</p>
              {announcementVideo ? (
                <div className="init-announcement-card">
                  <MediaCard {...announcementVideo} />
                </div>
              ) : (
                <Link href={url} className="init-announcement-link">
                  Announcement <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>

            {/* Right: illustration column */}
            <div className="init-day-illustration">
              <img
                src={illustration}
                width={illustrationWidth}
                height={illustrationHeight}
                alt=""
                decoding="async"
              />
            </div>
          </div>

          {/* Resource links */}
          {content && content.length > 0 && (
            <div className="init-resource-list">
              {content.map((item, i) => (
                <Link key={i} href={item.url} className="init-resource-link">
                  <span className="init-resource-start">
                    <span className="init-resource-type">{item.type}</span>
                    <span className="init-resource-title">{item.title}</span>
                  </span>
                  <span className="init-resource-action">
                    {item.label ?? "Read article"}{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Media links */}
          {links && links.length > 0 && (
            <div className="init-media-row">
              {links.map((link, i) => (
                <MediaCard key={i} {...link} />
              ))}
            </div>
          )}
        </div>
      </Window>
    </section>
  );
}
