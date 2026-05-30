"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/basepath";

const worksuiteItems = [
  {
    name: "Start Scheduling",
    href: "https://worksuite.clikkle.com/calendar",
    description: "Schedule and manage meetings seamlessly.",
    icon: withBasePath("/icons-black/Scheduling.png"),
  },
  {
    name: "Automation",
    href: "https://worksuite.clikkle.com/campaigns",
    description: "Automate workflows and save time.",
    icon: withBasePath("/icons-black/Automation.png"),
  },
  {
    name: "Real-time Chat",
    href: "https://worksuite.clikkle.com/chat",
    description: "Instant messaging and team collaboration.",
    icon: withBasePath("/icons-black/Chat.png"),
  },
  {
    name: "Secure Storage",
    href: "https://worksuite.clikkle.com/files",
    description: "Encrypted file storage and sharing.",
    icon: withBasePath("/icons-black/SecureStorage.png"),
  },
  {
    name: "Promo",
    href: "https://worksuite.clikkle.com/promo",
    description: "Create and manage promotional campaigns.",
    icon: withBasePath("/icons-black/Promo.png"),
  },
  {
    name: "Video Meetings",
    href: "https://worksuite.clikkle.com/crew",
    description: "Host and join video meetings instantly.",
    icon: withBasePath("/icons-black/VideoMeetings.png"),
  },
  {
    name: "e Sign",
    href: "https://worksuite.clikkle.com/esign",
    description: "Digital signature and document signing.",
    icon: withBasePath("/icons-black/eSign.png"),
  },
];

export function WorksuiteMegaMenu(props: {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = props.isOpen ?? uncontrolledOpen;
  const setIsOpen = props.onOpenChange ?? setUncontrolledOpen;
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
  }, [isOpen, setIsOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay with same styling as Products menu */}
            <motion.div
              key="worksuite-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-1001 bg-black/60"
              aria-hidden
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="worksuite-menu-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="aw-products-mega-panel-host"
              role="dialog"
              aria-label="Clikkle Worksuite menu"
            >
              <div className="aw-products-mega-panel-card rounded-2xl border border-white/8 bg-[#232325] p-6 shadow-2xl">
                <div className="grid w-full grid-cols-1 place-content-between gap-16 lg:grid-cols-12">
                  {/* Left: worksuite items grid */}
                  <div className="lg:col-span-8 lg:-mr-12 lg:pr-12">
                    <span className="mb-4 block font-(family-name:--font-jetbrains-mono) text-xs font-medium uppercase tracking-[0.14em] text-[#85858B]">
                      Worksuite Features
                      <span className="font-bold text-[#2D63FF]">_</span>
                    </span>
                    <div className="grid grid-flow-col-dense grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-4">
                      {worksuiteItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex gap-3 rounded-xl p-1 text-white outline-none transition-colors hover:bg-white/8 focus:bg-white/8"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                            <Image
                              src={item.icon}
                              alt=""
                              width={24}
                              height={24}
                              className="size-6 grayscale transition-all group-hover:grayscale-0 group-focus-visible:grayscale-0"
                            />
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <span className="text-[15px] font-medium leading-none text-white">
                              {item.name}
                            </span>
                            <p className="mt-1 text-pretty text-[13px] leading-snug text-[#85858B]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right: info section */}
                  <div className="flex flex-col gap-8 border-t border-white/6 pt-10 lg:col-span-4 lg:-ml-12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                    <div className="group block rounded-2xl border border-white/12 bg-white/6 p-4 outline-none focus-within:bg-white/12">
                      <header className="flex items-center justify-between gap-2">
                        <span className="font-(family-name:--font-jetbrains-mono) text-xs font-medium uppercase tracking-[0.14em] text-white">
                          Get Started
                          <span className="font-bold text-[#2D63FF]">_</span>
                        </span>
                        <Link
                          href="https://worksuite.clikkle.com"
                          className="flex shrink-0 items-center text-[12px] text-[#85858B] transition-colors hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          Learn more
                          <ChevronRight
                            className="ml-0.5 size-3 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </header>
                      <p className="mt-3 w-full text-pretty text-[14px] leading-snug text-[#85858B]">
                        Explore all Clikkle Worksuite features and discover how to boost your team&apos;s productivity.
                      </p>
                    </div>

                    <div>
                      <span className="mb-3 block font-(family-name:--font-jetbrains-mono) text-xs font-medium uppercase tracking-[0.14em] text-[#85858B]">
                        Documentation
                        <span className="font-bold text-[#2D63FF]">_</span>
                      </span>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/docs/worksuite"
                          className="group flex items-center justify-between gap-2 py-0.5 text-[14px] font-medium text-[#c4c4c6] transition-colors hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="min-w-0">Worksuite Docs</span>
                          <ChevronRight
                            className="size-4 shrink-0 text-[#85858B] transition-transform group-hover:translate-x-1 group-hover:text-white"
                            aria-hidden
                          />
                        </Link>
                        <Link
                          href="/docs/worksuite/api"
                          className="group flex items-center justify-between gap-2 py-0.5 text-[14px] font-medium text-[#c4c4c6] transition-colors hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="min-w-0">API Reference</span>
                          <ChevronRight
                            className="size-4 shrink-0 text-[#85858B] transition-transform group-hover:translate-x-1 group-hover:text-white"
                            aria-hidden
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Link
                        href="https://worksuite.clikkle.com"
                        className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center transition-colors hover:bg-white/8"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                          <Image
                            src={withBasePath("/icons-black/Chat.png")}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 grayscale transition-all group-hover:grayscale-0"
                          />
                        </div>
                        <span className="text-xs font-medium text-[#c4c4c6]">Work</span>
                      </Link>
                      <Link
                        href="https://core.clikkle.com"
                        className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center transition-colors hover:bg-white/8"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                          <Image
                            src={withBasePath("/icons-black/Automation.png")}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 grayscale transition-all group-hover:grayscale-0"
                          />
                        </div>
                        <span className="text-xs font-medium text-[#c4c4c6]">Build</span>
                      </Link>
                      <Link
                        href="https://libria.clikkle.com"
                        className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center transition-colors hover:bg-white/8"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                          <Image
                            src={withBasePath("/icons-black/AI.svg")}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 grayscale transition-all group-hover:grayscale-0"
                          />
                        </div>
                        <span className="text-xs font-medium text-[#c4c4c6]">Create</span>
                      </Link>
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
