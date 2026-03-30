"use client";

import { cn } from "@/lib/utils";

interface PullquoteProps {
  name: string;
  title: string;
  avatar: string;
  children: React.ReactNode;
  className?: string;
}

export function Pullquote({ name, title: jobTitle, avatar, children, className }: PullquoteProps) {
  return (
    <section className={cn("container py-20", className)}>
      <figure className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <blockquote>
          <p className="font-aeonik-pro text-subtitle text-primary text-pretty leading-relaxed">
            &ldquo;{children}&rdquo;
          </p>
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <img
            loading="lazy"
            src={avatar}
            alt={name}
            className="size-12 rounded-full object-cover"
          />
          <div className="text-left">
            <cite className="text-caption text-primary not-italic font-medium">{name}</cite>
            <p className="text-caption text-secondary">{jobTitle}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
