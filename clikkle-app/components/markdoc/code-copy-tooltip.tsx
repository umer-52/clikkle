"use client";

import {
  cloneElement,
  isValidElement,
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

const DEFAULT_RESET_MS = 1000;

type ClickableChild = ReactElement<{ onClick?: (e: MouseEvent<HTMLElement>) => void }>;

/**
 * Lightweight hover tooltip for code copy controls — Appwrite `Tooltip` + copy feedback
 * without a tooltip library.
 */
export function CodeCopyTooltip({
  copyAction,
  children,
  idleLabel = "Copy",
  copiedLabel = "Copied!",
  resetMs = DEFAULT_RESET_MS,
  placement = "top",
}: {
  copyAction: () => void | Promise<void>;
  children: ClickableChild;
  idleLabel?: string;
  copiedLabel?: string;
  resetMs?: number;
  /** `top` = above the trigger (default for snippet header icons). */
  placement?: "top" | "bottom";
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const visible = hovered || focused || copied;
  const label = copied ? copiedLabel : idleLabel;

  const runCopy = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
    await Promise.resolve(copyAction());
    setCopied(true);
    timerRef.current = setTimeout(() => {
      setCopied(false);
      timerRef.current = undefined;
    }, resetMs);
  }, [copyAction, resetMs]);

  if (!isValidElement(children)) {
    return children;
  }

  const trigger = cloneElement(children, {
    onClick: async (_e: MouseEvent<HTMLElement>) => {
      await runCopy();
    },
  });

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      {visible ? (
        <span
          role="tooltip"
          className={cn(
            "code-copy-tooltip pointer-events-none absolute z-[60] max-w-[12rem] whitespace-nowrap rounded-md px-2 py-1 text-center text-xs font-medium leading-tight shadow-md",
            placement === "top" && "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
            placement === "bottom" && "top-full left-1/2 mt-1.5 -translate-x-1/2"
          )}
        >
          {label}
        </span>
      ) : null}
      {trigger}
    </span>
  );
}
