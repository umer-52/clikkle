"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, Settings, Calendar } from "lucide-react";
import { GridPaper } from "./grid-paper";
import { withBasePath } from "@/lib/basepath";

/** Decorative status-bar time for the mock UI (must be constant — `new Date()` in render breaks SSR hydration). */
const MESSAGING_MOCK_CLOCK = "09:41";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export function BentoMessaging() {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const inView = useInView(containerRef, { amount: "all", once: false });
  const isMobileLayout = useMediaQuery("(max-width: 767px)");
  const [hovered, setHovered] = useState(false);
  const active = isMobileLayout ? inView : hovered;

  return (
    <Link
      ref={containerRef}
      href="/products/messaging"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="border-smooth group/messaging col-span-12 flex min-w-0 w-full flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src={withBasePath("/icons-black/Messaging.png")}
            alt="Messaging icon"
            width={28}
            height={28}
            className="size-7"
          />
          <h3 className="font-aeonik-pro text-label text-primary">Messaging</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          Set up a full-functioning messaging service that covers{" "}
          <span className="text-secondary">multiple channels under one unified platform.</span>
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8">
        <motion.div
          className="light absolute top-14 z-10 flex h-[65px] w-[85%] items-center justify-between gap-4 rounded-[20px] bg-white/80 px-3 py-2 shadow-[-8px_4px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          data-theme-ignore
          initial={false}
          animate={{
            y: active ? 0 : -15,
            opacity: active ? 1 : 0,
            filter: active ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ duration: 0.2 }}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-black">
            <div className="size-3 rounded-full bg-white" />
          </div>
          <div className="max-lg:text-eyebrow leading-micro flex flex-col text-[0.625rem] tracking-tighter">
            <span className="text-primary flex justify-between font-medium">
              New security measures added{" "}
              <span className="text-secondary/50 mr-1 block">now</span>
            </span>
            <p className="text-secondary leading-tight">
              Check out our latest security updates to protect your account!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="light mt-20 flex h-full w-[300px] flex-col rounded-t-[42px] border-x border-t border-white/12 bg-white/8 backdrop-blur-2xl"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
          data-theme-ignore
          initial={false}
          animate={{ y: active ? 0 : 15 }}
          transition={{ duration: 0.25 }}
        >
          <div className="m-2 flex-1 rounded-t-[34px] bg-[#19191C]">
            <div className="flex items-center justify-between px-8 pt-4">
              <span className="leading-micro w-10 text-[0.625rem] font-semibold tracking-tighter text-white">
                {MESSAGING_MOCK_CLOCK}
              </span>
              <div className="h-5 w-[84px] rounded-full bg-black" />
              <div className="h-3 w-7 rounded-full bg-black" />
            </div>
            <div className="text-eyebrow mt-6 grid flex-1 grid-cols-4 grid-rows-24 place-items-center gap-3 p-6">
              <div className="relative flex aspect-square size-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5">
                <div className="bg-accent text-eyebrow absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full" />
                <Mail className="size-6 text-white/90" aria-hidden />
              </div>
              {[MessageSquare, Settings, Calendar].map((Icon, idx) => (
                <div
                  key={idx}
                  className="flex aspect-square size-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                >
                  <Icon className="size-6 text-white/90" aria-hidden />
                </div>
              ))}
              {Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={`pad-${idx}`}
                  className="aspect-square size-full shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/13)]" />
      </div>
    </Link>
  );
}
