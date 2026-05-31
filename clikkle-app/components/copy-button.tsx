"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  content: string;
  className?: string;
  variant?: "light" | "dark" | "blue";
}

export function CopyButton({ content, className, variant = "dark" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "copy-button flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        {
          "bg-white/10 hover:bg-white/20 text-white": variant === "dark",
          "bg-black/5 hover:bg-black/10 text-black": variant === "light",
          "bg-white/20 hover:bg-white/30 text-white": variant === "blue",
        },
        className
      )}
    >
      <span className="web-icon-copy" aria-label="Copy"></span>
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
