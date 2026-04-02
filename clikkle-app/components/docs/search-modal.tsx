"use client";

import React, { useEffect, useState, useRef } from "react";
import { Search, X, FileText, Layout, Zap, ArrowRight, Home, Code, Book, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SearchResult {
  title: string;
  category: string;
  href: string;
  icon: React.ReactNode;
}

const RESULTS: SearchResult[] = [
  { title: "Getting Started", category: "Basics", href: "/docs/quick-starts", icon: <Rocket className="size-4" /> },
  { title: "Authentication", category: "Products", href: "/docs/products/auth", icon: <FileText className="size-4" /> },
  { title: "Databases", category: "Products", href: "/docs/products/databases", icon: <Layout className="size-4" /> },
  { title: "REST API Reference", category: "APIs", href: "/docs/apis/rest", icon: <Code className="size-4" /> },
  { title: "Messaging", category: "Products", href: "/docs/products/messaging", icon: <Zap className="size-4" /> },
  { title: "Storage", category: "Products", href: "/docs/products/storage", icon: <Home className="size-4" /> },
  { title: "Tutorials", category: "Guides", href: "/docs/tutorials", icon: <Book className="size-4" /> },
];

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Toggle or open handled by header
      }
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filteredResults = query
    ? RESULTS.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    : RESULTS;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e22]/90 shadow-2xl backdrop-blur-xl"
          >
            {/* Input Wrapper */}
            <div className="relative flex items-center px-4 py-4 border-b border-white/5">
              <Search className="size-5 text-white/40" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent px-4 text-white outline-none placeholder:text-white/20 text-lg"
              />
              <button
                onClick={onClose}
                className="rounded-md p-1 text-white/40 hover:bg-white/5 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Results Section */}
            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-none">
              {filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredResults.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-white/40 group-hover:bg-[#2D63FF]/20 group-hover:text-[#2D63FF] transition-colors shadow-sm">
                          {result.icon}
                        </div>
                        <div>
                          <p className="text-[15px] font-medium text-white group-hover:text-white transition-colors">
                            {result.title}
                          </p>
                          <p className="text-[13px] text-white/40">
                            {result.category}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-white/0 -translate-x-2 transition-all group-hover:text-white/40 group-hover:translate-x-0" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-white/40 italic">No results for "{query}"</p>
                </div>
              )}
            </div>

            {/* Footer shadow-sm */}
            <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-4 py-3 text-[11px] font-medium uppercase tracking-widest text-white/30">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 leading-none"><kbd className="rounded bg-white/10 px-1 text-[10px] text-white/60">Enter</kbd> to select</span>
                <span className="flex items-center gap-1.5 leading-none"><kbd className="rounded bg-white/10 px-1 text-[10px] text-white/60">Esc</kbd> to close</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] leading-none">
                 Built for <span className="text-white/60">Clikkle_</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
