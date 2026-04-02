"use client";

import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";

export type DocsReferenceSelectOption<T extends string = string> = {
  value: T;
  label: string;
  group?: string;
};

type Props<T extends string = string> = {
  id: string;
  value: T;
  options: DocsReferenceSelectOption<T>[];
  onChange: (value: T) => void;
  nativeMobile?: boolean;
  minWidth?: string;
};

const DEFAULT_GROUP = "default";

function groupOptions<T extends string>(options: DocsReferenceSelectOption<T>[]) {
  const map = new Map<string, DocsReferenceSelectOption<T>[]>();
  for (const o of options) {
    const g = o.group ?? DEFAULT_GROUP;
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(o);
  }
  return Array.from(map.entries()).map(([label, opts]) => ({ label, options: opts }));
}

export function DocsReferenceSelect<T extends string = string>({
  id,
  value,
  options,
  onChange,
  nativeMobile = true,
  minWidth = "var(--p-select-min-width)",
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<CSSProperties | null>(null);
  const [mounted, setMounted] = useState(false);

  const groups = groupOptions(options);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023.9px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!open || !btnRef.current) {
      setMenuStyle(null);
      return;
    }
    const r = btnRef.current.getBoundingClientRect();
    setMenuStyle({
      position: "fixed",
      left: r.left,
      top: r.bottom + 4,
      minWidth: r.width,
      zIndex: 10000,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const tid = window.setTimeout(() => {
      document.addEventListener("click", onDoc);
    }, 0);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(tid);
      document.removeEventListener("click", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const styleVar = { "--min-width": minWidth } as CSSProperties;

  const showNative = nativeMobile && mobile;
  const showCustom = !showNative;

  const desktop =
    mounted && showCustom ? (
      <>
        <button
          ref={btnRef}
          type="button"
          id={id}
          className={cn(
            "web-select is-colored border-gradient",
            nativeMobile && "web-is-not-mobile"
          )}
          style={styleVar}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="physical-select">
            <span>{selected?.label ?? ""}</span>
          </div>
          <span
            className={open ? "icon icon-cheveron-up" : "icon icon-cheveron-down"}
            aria-hidden="true"
          />
        </button>
        {open && menuStyle
          ? createPortal(
              <div
                ref={menuRef}
                className="web-select-menu"
                role="listbox"
                style={menuStyle}
              >
                {groups.map(({ label: gLabel, options: gOpts }) => {
                  const isDefault = gLabel === DEFAULT_GROUP;
                  if (isDefault) {
                    return (
                      <div key={gLabel} className="flex flex-col gap-0.5">
                        {gOpts.map((opt) => (
                          <button
                            key={String(opt.value)}
                            type="button"
                            role="option"
                            aria-selected={opt.value === value}
                            className="web-select-option"
                            onClick={() => {
                              onChange(opt.value);
                              close();
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div key={gLabel} className="web-select-group">
                      <span className="web-select-group-label">{gLabel}</span>
                      {gOpts.map((opt) => (
                        <button
                          key={String(opt.value)}
                          type="button"
                          role="option"
                          aria-selected={opt.value === value}
                          className="web-select-option"
                          onClick={() => {
                            onChange(opt.value);
                            close();
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>,
              document.body
            )
          : null}
      </>
    ) : null;

  const nativeSelect = showNative ? (
      <div
        className={cn(
          "web-select is-colored border-gradient web-is-only-mobile web-u-inline-width-100-percent-mobile-break1"
        )}
        style={styleVar}
      >
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
        >
          {groups.map(({ label: gLabel, options: gOpts }) => {
            const isDefault = gLabel === DEFAULT_GROUP;
            if (isDefault) {
              return gOpts.map((opt) => (
                <option key={String(opt.value)} value={opt.value}>
                  {opt.label}
                </option>
              ));
            }
            return (
              <optgroup key={gLabel} label={gLabel}>
                {gOpts.map((opt) => (
                  <option key={String(opt.value)} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            );
          })}
        </select>
        <span className="icon icon-cheveron-down" aria-hidden="true" />
      </div>
    ) : null;

  return (
    <>
      {desktop}
      {nativeSelect}
    </>
  );
}
