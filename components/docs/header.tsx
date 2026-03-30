"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import React from "react";

export function DocsHeader() {
  const GITHUB_STARS = "55.2K";
  const GITHUB_LINK = "https://github.com/appwrite/appwrite";
  const CTA_LINK = "https://cloud.clikkle.com/register";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#19191c]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        
        {/* Left Section: Logo and Navigation */}
        <div className="flex flex-1 items-center gap-6">
          <Link className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm" href="/" aria-label="Clikkle home">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-500 shadow-[0_0_15px_rgba(45,99,255,0.5)]">
               <div className="h-3 w-3 rounded-sm bg-white" />
            </div>
            Clikkle
          </Link>
          
          <nav className="hidden lg:block ml-2" aria-label="Docs Secondary">
            <Link href="/docs" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>

          {/* Center Search Bar */}
          <div className="hidden lg:flex flex-1 ml-12">
            <button
              className="group flex h-10 w-full max-w-[400px] items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 font-medium text-white/40 transition-all hover:bg-white/[0.04] hover:border-white/20 hover:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => alert("Search clicked")}
            >
              <div className="flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Search in docs</span>
              </div>
              <div className="flex gap-1 items-center">
                <kbd className="inline-flex h-5 items-center justify-center rounded bg-white/10 px-1.5 text-[10px] font-medium text-white/60 group-hover:bg-white/20 group-hover:text-white">Ctrl</kbd>
                <kbd className="inline-flex h-5 items-center justify-center rounded bg-white/10 px-1.5 text-[10px] font-medium text-white/60 group-hover:bg-white/20 group-hover:text-white">K</kbd>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4">
          <a
            className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Clikkle on GitHub"
          >
            <Star className="h-4 w-4" aria-hidden="true" />
            <span>Star on GitHub</span>
            <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs font-semibold">{GITHUB_STARS}</span>
          </a>

          <a 
            className="flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(45,99,255,0.3)] transition-all hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#19191c]" 
            href={CTA_LINK}
          >
            Start building for free
          </a>
        </div>
      </div>
    </header>
  );
}
