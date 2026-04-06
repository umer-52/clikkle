"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import { motion } from "framer-motion";
import Link from "next/link";

const CursorSVG = ({ fill }: { fill: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_941_108451)">
      <path
        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_941_108451">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export function BentoRealtime() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes custom-cursor-float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(var(--y)) translateX(var(--x)); }
            100% { transform: translateY(0) translateX(0); }
        }
        .animate-custom-cursor {
            animation: custom-cursor-float var(--duration) ease-in-out infinite;
        }
      `}} />
      <MotionLink
        href="/docs/apis/realtime"
        initial="initial"
        whileHover="hover"
        className="border-smooth group col-span-12 flex min-w-0 w-full flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] lg:col-span-5"
      >
        <div className="space-y-3 px-3 pt-2 pb-4">
          <div className="flex items-center gap-2">
            <img loading="lazy" src="/clikkle/images/icons/illustrated/dark/realtime.png" alt="Realtime icon" width={28} height={28} className="size-7" />
            <h3 className="font-aeonik-pro text-label text-primary">Realtime</h3>
          </div>
          <p className="text-sub-body text-primary max-w-lg font-medium">
            <span className="text-secondary">Subscribe and react</span> to any Clikkle event using the Realtime API.
          </p>
        </div>
        <div className="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-hidden rounded-xl bg-black/24 px-8">
          <div className="relative grid aspect-square h-[240px] w-[240px] grid-cols-2 grid-rows-2 items-center justify-center">
              <motion.img
                loading="lazy"
                src="/clikkle/assets/images/top-right.svg"
                alt="Top Right"
                className="absolute top-0 right-0 h-[150px] w-[120px]"
                variants={{
                  initial: { x: 36, y: -36 },
                  hover: { x: 0, y: 0.75, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
              />

              <img loading="lazy"
                src="/clikkle/assets/images/puzzle.svg"
                alt="Puzzle Piece"
                className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div
              className="pointer-events-none absolute aspect-square h-12 w-[4.25rem] animate-custom-cursor"
              style={{ right: "100px", bottom: "20px", "--y": "-12px", "--x": "-6px", "--duration": "2.5s" } as any}
          >
              <CursorSVG fill="#2dd4bf" />
              <div className="absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-black" style={{ backgroundColor: "#2dd4bf" }}>
                  <span>Sara</span>
              </div>
          </div>

          <div
              className="pointer-events-none absolute aspect-square h-12 w-[5.25rem] animate-custom-cursor"
              style={{ left: "140px", bottom: "85px", "--y": "8px", "--x": "-5px", "--duration": "4s" } as any}
          >
              <CursorSVG fill="#3b82f6" />
              <div className="absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-white" style={{ backgroundColor: "#3b82f6" }}>
                  <span>Aditya</span>
              </div>
          </div>

          <motion.div
              className="pointer-events-none absolute aspect-square h-12 w-[5rem]"
              style={{ top: "100px", right: "75px" }}
              variants={{
                  initial: { x: 32, y: -20, opacity: 0, filter: "blur(4px)", scale: 1 },
                  hover: { 
                      x: 0, 
                      y: 0, 
                      opacity: 1, 
                      filter: "blur(0px)", 
                      scale: 1, 
                      transition: { duration: 0.25 } 
                  }
              }}
          >
              <CursorSVG fill="#2D63FF" />
              <div className="absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-white bg-[#2D63FF]">
                  <span>Walter</span>
              </div>
          </motion.div>

          <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
        </div>
      </MotionLink>
    </>
  );
}
