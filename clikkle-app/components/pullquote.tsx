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
    <div className={cn("container mx-auto", className)}>
      <blockquote
        className={cn(
          "font-aeonik-pro mx-auto flex w-full max-w-[40rem] flex-col items-center justify-center gap-4 py-10 pb-20 text-center md:py-16",
        )}
      >
        <h2 className="text-subtitle text-primary font-medium md:text-[1.375rem] md:leading-snug">
          <span className="text-accent -mr-1">&ldquo;</span>
          {children}
          <span className="text-accent -ml-1">&rdquo;</span>
        </h2>
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src={avatar}
            alt={name}
            className="size-6 rounded-full object-cover"
          />
          <h5 className="text-caption text-primary font-medium not-italic">
            {name}, <span className="text-secondary">{jobTitle}</span>
          </h5>
        </div>
      </blockquote>
    </div>
  );
}
