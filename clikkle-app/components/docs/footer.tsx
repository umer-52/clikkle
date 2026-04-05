"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Moon, Sun, Monitor } from "lucide-react";
import {
  DOCS_SOCIALS,
  DOCS_STATUS_HREF,
  DOCS_SUPPORT_HREF,
} from "@/lib/docs-socials";
import { useTheme, type ThemeSetting } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external: boolean;
  children: React.ReactNode;
}) {
  const className = "web-icon-button";
  if (external) {
    return (
      <li>
        <a
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <a href={href} aria-label={label} className={className}>
        {children}
      </a>
    </li>
  );
}

const THEME_OPTIONS: {
  value: ThemeSetting;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "dark",
    label: "Dark",
    icon: <Moon size={14} className="text-current" strokeWidth={2} aria-hidden />,
  },
  {
    value: "light",
    label: "Light",
    icon: <Sun size={14} className="text-current" strokeWidth={2} aria-hidden />,
  },
  {
    value: "system",
    label: "System",
    icon: <Monitor size={14} className="text-current" strokeWidth={2} aria-hidden />,
  },
];

/**
 * Mirrors Svelte `ThemeSelect` + `Select` placement="top".
 * Menu is portaled to `document.body` so it is not clipped by `main { overflow-x-hidden }`.
 * Outside-click listener is deferred one tick so the opening click does not immediately close.
 */
function DocsThemeSelect() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const [menuStyle, setMenuStyle] = React.useState<React.CSSProperties | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useLayoutEffect(() => {
    if (!open || !buttonRef.current) {
      setMenuStyle(null);
      return;
    }
    const r = buttonRef.current.getBoundingClientRect();
    setMenuStyle({
      position: "fixed",
      left: r.left,
      top: r.top - 8,
      transform: "translateY(-100%)",
      zIndex: 9999,
      minWidth: Math.max(r.width, 168),
    });
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    let removeDocClick: (() => void) | undefined;
    const tid = window.setTimeout(() => {
      const onDocClick = (e: MouseEvent) => {
        const node = e.target as Node;
        if (buttonRef.current?.contains(node) || menuRef.current?.contains(node)) return;
        setOpen(false);
      };
      document.addEventListener("click", onDocClick);
      removeDocClick = () => document.removeEventListener("click", onDocClick);
    }, 0);

    const onReposition = () => {
      if (!buttonRef.current) return;
      const r = buttonRef.current.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        left: r.left,
        top: r.top - 8,
        transform: "translateY(-100%)",
        zIndex: 9999,
        minWidth: Math.max(r.width, 168),
      });
    };
    window.addEventListener("resize", onReposition);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(tid);
      removeDocClick?.();
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = THEME_OPTIONS.find((o) => o.value === theme) ?? THEME_OPTIONS[0];

  const menu =
    mounted && open && menuStyle ? (
      <ul
        ref={menuRef}
        role="listbox"
        className="docs-theme-select-menu rounded-lg border py-1 shadow-2xl ring-1"
        style={menuStyle}
      >
        {THEME_OPTIONS.map((opt) => (
          <li key={opt.value} role="option" aria-selected={theme === opt.value}>
            <button
              type="button"
              className={cn(
                "docs-theme-select-option flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm",
                theme === opt.value && "is-active"
              )}
              onClick={() => {
                setTheme(opt.value);
                setOpen(false);
              }}
            >
              {opt.icon}
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select theme"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="docs-theme-select-button flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors"
      >
        {current.icon}
        <span>{current.label}</span>
        <ChevronDown
          size={16}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {menu && typeof document !== "undefined"
        ? createPortal(menu, document.body)
        : null}
    </>
  );
}

/** `MainFooter.svelte` variant="docs" + `_main-footer.scss` */
export function DocsFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="web-main-footer is-with-bg-color relative text-sm">
      <div className="web-main-footer-grid-1">
        <ul className="web-main-footer-grid-1-column-1 flex gap-2">
          {DOCS_SOCIALS.map((s) => (
            <SocialLink
              key={s.label}
              href={s.href}
              label={s.label}
              external={s.external}
            >
              <SocialGlyph label={s.label} />
            </SocialLink>
          ))}
        </ul>
        <div className="web-main-footer-grid-1-column-2">
          <DocsThemeSelect />
        </div>
        <ul className="web-main-footer-grid-1-column-3 web-main-footer-links items-end text-right">
          <li>
            <a
              href={DOCS_SUPPORT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="web-link"
            >
              Support
            </a>
          </li>
          <li>
            <a
              href={DOCS_STATUS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="web-link"
            >
              Status
            </a>
          </li>
        </ul>
        <div className="web-main-footer-grid-1-column-4 web-main-footer-copyright">
          Copyright © {year} Clikkle
        </div>
      </div>
    </footer>
  );
}

/** Minimal glyphs — full SVG set kept compact */
function SocialGlyph({ label }: { label: string }) {
  const common = "size-[18px] shrink-0";
  switch (label) {
    case "Discord":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      );
    case "Github":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "Twitter":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "Daily.dev":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14.032.064C16.96.672 19.392 2.816 20.32 5.632c.32.96.448 1.952.448 2.976v4.672c0 .928-.288 1.472-.928 1.632-.192.032-.576.032-.8.032H6.944a1.8 1.8 0 0 1-1.344-.64 1.967 1.967 0 0 1-.416-1.024A22.84 22.84 0 0 1 5.088 12c.032-1.92.352-3.808 1.024-5.632C7.136 3.424 9.888 1.024 13.088.16A8.752 8.752 0 0 1 14.032.064ZM8.8 9.024v3.872h2.24V9.024H8.8Zm4.16 0V12.9h2.208c1.376 0 2.208-.864 2.208-1.952s-.832-1.92-2.208-1.92H12.96Zm1.28 1.024h.608c.576 0 .864.32.864.928 0 .576-.288.896-.864.896h-.608v-1.824Z" />
        </svg>
      );
    case "Bluesky":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 10.8c-1.087-2.114-5.713-6.347-7.96-7.04-2.16-.67-4.04-.276-4.04 2.128 0 1.583 1.056 6.17 1.42 6.702.768 1.127 2.454 1.411 3.96 1.037.218-.054.442-.116.67-.189-2.094 1.258-3.085 2.502-3.085 3.824 0 2.762 3.738 5.438 9.035 5.438 5.297 0 9.035-2.676 9.035-5.438 0-1.322-.99-2.566-3.085-3.824.228.073.452.135.67.189 1.506.374 3.192.09 3.96-1.037.364-.532 1.42-5.119 1.42-6.702 0-2.404-1.88-2.798-4.04-2.128-2.247.693-6.873 4.926-7.96 7.04Z" />
        </svg>
      );
    case "Tiktok":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.52 3.94-1.53 5.37-1.04 1.46-2.58 2.5-4.29 2.89-1.54.34-3.23.2-4.66-.52-1.47-.74-2.6-1.92-3.27-3.41-.6-1.34-.78-2.85-.45-4.28.27-1.16.82-2.25 1.55-3.15 1.03-1.28 2.48-2.14 4.07-2.48v4.04c-.37.03-.76.13-1.11.27-.45.18-.88.46-1.21.84-.45.5-.72 1.15-.75 1.81-.05.97.35 1.98 1.11 2.58.75.59 1.83.74 2.76.51.84-.21 1.55-.78 1.93-1.55.33-.67.48-1.44.49-2.21V.02z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.058.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.384-.418.42-.816.678-1.38.896-.421.164-1.059.359-2.227.415-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.169-.056-1.805-.251-2.228-.415-.561-.218-.958-.476-1.38-.896-.42-.424-.679-.822-.898-1.384-.165-.422-.36-1.057-.414-2.227-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.054-1.169.249-1.805.414-2.227.219-.562.478-.961.898-1.381.422-.419.819-.678 1.38-.896.423-.166 1.059-.361 2.228-.415 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384C1.346 2.68 .936 3.352.63 4.14c-.297.766-.498 1.636-.558 2.913C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.077 2.126 1.383.766.299 1.636.5 2.913.56 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.277-.06 2.147-.261 2.912-.56.789-.306 1.459-.717 2.126-1.383.666-.667 1.077-1.337 1.384-2.126.299-.765.5-1.636.56-2.913.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.148-.56-2.913-.307-.788-.718-1.459-1.384-2.126C21.46 1.346 20.788.936 20.001.63c-.765-.297-1.636-.499-2.912-.559C15.808.014 15.399 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return <span className="text-xs font-medium">{label[0]}</span>;
  }
}
