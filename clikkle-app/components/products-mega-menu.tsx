"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { megaMenuComparisons } from "@/lib/site-data";

/** Static export + basePath: explicit `/clikkle/...` matches `SiteHeader` logo and `next.config` basePath. */
const ILLUSTRATED = "/clikkle/images/icons/illustrated/dark";

const products = [
  {
    name: "Auth",
    href: "/products/auth",
    description: "Secure login with multi-factor auth.",
    icon: `${ILLUSTRATED}/auth.png`,
  },
  {
    name: "Databases",
    href: "/docs/products/databases",
    description: "Scalable and robust databases.",
    icon: `${ILLUSTRATED}/databases.png`,
  },
  {
    name: "Storage",
    href: "/products/storage",
    description: "Advanced compression and encryption.",
    icon: `${ILLUSTRATED}/storage.png`,
  },
  {
    name: "Functions",
    href: "/products/functions",
    description: "Deploy & scale serverless functions.",
    icon: `${ILLUSTRATED}/functions.png`,
  },
  {
    name: "Messaging",
    href: "/products/messaging",
    description: "Set up a full-functioning messaging service.",
    icon: `${ILLUSTRATED}/messaging.png`,
  },
  {
    name: "Realtime",
    href: "/docs/apis/realtime",
    description: "Subscribe and react to any event.",
    icon: `${ILLUSTRATED}/realtime.png`,
  },
  {
    name: "Sites",
    href: "/products/sites",
    description: "The open-source Vercel alternative.",
    icon: `${ILLUSTRATED}/sites.png`,
  },
];

export function ProductsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="aw-header-link aw-focus-ring"
        data-active={isOpen ? "true" : undefined}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        Products
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Parity: ProductsSubmenu.svelte melt overlay — dims page so hero copy does not read through */}
            <motion.div
              key="products-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[1001] bg-black/60"
              aria-hidden
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="products-menu-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="aw-products-mega-panel-host"
              role="dialog"
              aria-label="Products menu"
            >
              <div className="aw-products-mega-panel-card rounded-2xl border border-white/[0.08] bg-[#232325] p-6 shadow-2xl">
                {/* ProductsSubmenu.svelte: `gap-16 lg:grid-cols-12` */}
                <div className="grid w-full grid-cols-1 place-content-between gap-16 lg:grid-cols-12">
                  {/* Left: product grid — ProductsSubmenu.svelte col-span-8 -mr-12 pr-12 */}
                  <div className="lg:col-span-8 lg:-mr-12 lg:pr-12">
                    <span className="mb-4 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-[0.14em] text-[#85858B]">
                      Products
                      <span className="font-bold text-[#2D63FF]">_</span>
                    </span>
                    <div className="grid grid-flow-col-dense grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-4">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="group flex gap-3 rounded-xl p-1 text-white outline-none transition-colors hover:bg-white/[0.08] focus:bg-white/[0.08]"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06]">
                            <Image
                              src={product.icon}
                              alt=""
                              width={24}
                              height={24}
                              className="size-6 grayscale transition-all group-hover:grayscale-0 group-focus-visible:grayscale-0"
                            />
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <span className="text-[15px] font-medium leading-none text-white">
                              {product.name}
                            </span>
                            <p className="mt-1 text-pretty text-[13px] leading-snug text-[#85858B]">
                              {product.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-8 border-t border-white/[0.06] pt-10 lg:col-span-4 lg:-ml-12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                    <div className="group block rounded-2xl border border-white/[0.12] bg-white/[0.06] p-4 outline-none focus-within:bg-white/[0.12]">
                      <header className="flex items-center justify-between gap-2">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-[0.14em] text-white">
                          Customer Stories
                          <span className="font-bold text-[#2D63FF]">_</span>
                        </span>
                        <Link
                          href="/customers"
                          className="flex shrink-0 items-center text-[12px] text-[#85858B] transition-colors hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          Read more{" "}
                          <span className="ml-1 hidden xl:inline">customer stories</span>
                          <ChevronRight
                            className="ml-0.5 size-3 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </header>

                      <Link
                        href="/customers/customer-story-storealert"
                        className="my-4 flex flex-col gap-3 outline-none xl:flex-row"
                        onClick={() => setIsOpen(false)}
                      >
                        <Image
                          src="/clikkle/images/blog/customer-story-storealert/cover.png"
                          alt=""
                          width={240}
                          height={160}
                          className="min-h-10 w-full shrink-0 rounded-xl bg-white object-cover md:aspect-[3/1] xl:max-w-[120px]"
                        />
                        <p className="w-full text-pretty text-[14px] leading-snug text-[#85858B]">
                          &ldquo;Clikkle helped reduce development time by 60%, and lower server costs
                          by 40%.&rdquo;
                        </p>
                      </Link>
                    </div>

                    <div>
                      <span className="mb-3 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-[0.14em] text-[#85858B]">
                        Compare Clikkle
                        <span className="font-bold text-[#2D63FF]">_</span>
                      </span>
                      <div className="flex flex-col gap-3">
                        {megaMenuComparisons.map((compare) => (
                          <Link
                            key={compare.href}
                            href={compare.href}
                            className="group flex items-center justify-between gap-2 py-0.5 text-[14px] font-medium text-[#c4c4c6] transition-colors hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="min-w-0">{compare.label}</span>
                            <ChevronRight
                              className="size-4 shrink-0 text-[#85858B] transition-transform group-hover:translate-x-1 group-hover:text-white"
                              aria-hidden
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
