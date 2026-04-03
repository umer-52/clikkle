"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GridPaper } from "../bento-animations/grid-paper";
import { Check } from "lucide-react";

const QUERY = "Store the user's profile avatar image";

const skills = [
  "createDocument",
  "uploadFile",
  "getUser",
  "listFiles",
  "deleteSession",
  "getAccount",
  "listTeams",
];

const focusedSkill = "uploadFile";

export function SkillsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false);
  const [typedText, setTypedText] = useState("");
  const isInView = useInView(containerRef, { amount: "all" });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (active) {
      interval = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length < QUERY.length) {
            return QUERY.slice(0, prev.length + 1);
          }
          clearInterval(interval);
          setComplete(true);
          return prev;
        });
      }, 25);
    } else {
      setComplete(false);
      interval = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length > 0) {
            return QUERY.slice(0, prev.length - 1);
          }
          clearInterval(interval);
          return prev;
        });
      }, 15);
    }
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (isMobile) {
      setActive(isInView);
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-56 items-center justify-center overflow-hidden pt-4 sm:h-72 sm:pt-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
      onMouseEnter={() => {
        if (!window.matchMedia("(max-width: 640px)").matches) setActive(true);
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(max-width: 640px)").matches) setActive(false);
      }}
    >
      <div className="z-10 flex w-full flex-col items-center px-5 pb-4 sm:px-10">
        {/* Search bar */}
        <div
          className="flex w-full items-center gap-2 rounded-xl border bg-[var(--bg-primary)]/80 px-3 py-2.5 text-sm backdrop-blur-sm"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <svg
            className="shrink-0"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1L9.2 5.2L13 6L9.2 6.8L8 11L6.8 6.8L3 6L6.8 5.2L8 1Z"
              fill="#ADADB0"
            />
            <path
              d="M12.5 9.5L13.1 11.4L15 12L13.1 12.6L12.5 14.5L11.9 12.6L10 12L11.9 11.4L12.5 9.5Z"
              fill="#ADADB0"
              opacity="0.6"
            />
          </svg>
          <span className="flex-1">
            {typedText ? (
              <span className="text-primary">{typedText}</span>
            ) : (
              <span className="text-white/20">Ask anything...</span>
            )}
          </span>
        </div>

        {/* Horizontal skill pills */}
        <div 
          className="mt-3 flex flex-wrap items-center justify-center gap-2 w-[90%]"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)" }}
        >
          {skills.map((skill) => {
            const isFocused = skill === focusedSkill;
            if (isFocused) {
              return (
                <div
                  key={skill}
                  className="text-caption font-fira-code relative shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white"
                >
                  <motion.div
                    className="flex h-full items-center justify-between gap-2 overflow-hidden rounded-2xl bg-[#202023] px-3 py-1 text-left text-white/80 relative"
                    initial={{ paddingRight: "0.75rem" }}
                    animate={{ paddingRight: complete ? "2.5rem" : "0.75rem" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="shrink-0">{skill}</span>
                    <AnimatePresence>
                      {complete && (
                        <motion.div
                          className="absolute right-2 shrink-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="size-4 text-[#2D63FF]" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-l from-white/12 to-transparent"></div>
                </div>
              );
            }
            return (
              <div
                key={skill}
                className="text-caption font-fira-code relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white transition-opacity duration-500"
                style={{ opacity: active ? 0.15 : 0.8 }}
              >
                <div className="h-full w-full rounded-2xl bg-[#202023] px-3 py-1 text-white/80">
                  {skill}
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-l from-white/12 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>

      <GridPaper className="absolute inset-0 -z-10 bg-[length:calc(100%/11)] opacity-90" />
    </div>
  );
}
