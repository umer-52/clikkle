"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WindowProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div className={cn("init-window", className)}>
      <div className="init-window-chrome">
        <img src="/clikkle/images/init/globe.svg" alt="" aria-hidden="true" />
        {title ? <span className="init-window-title">{title}</span> : null}
      </div>
      {children}
    </div>
  );
}
