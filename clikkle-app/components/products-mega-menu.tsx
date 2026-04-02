"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ProductsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

    const products = [
      {
        name: 'Auth',
        href: '/products/auth',
        description: 'Secure login with multi-factor auth.',
        icon: '/images/icons/illustrated/dark/auth.png'
      },
      {
        name: 'Databases',
        href: '/docs/products/databases',
        description: 'Scalable and robust databases.',
        icon: '/images/icons/illustrated/dark/databases.png'
      },
      {
        name: 'Storage',
        href: '/products/storage',
        description: 'Advanced compression and encryption.',
        icon: '/images/icons/illustrated/dark/storage.png'
      },
      {
        name: 'Functions',
        href: '/products/functions',
        description: 'Deploy & scale serverless functions.',
        icon: '/images/icons/illustrated/dark/functions.png'
      },
      {
        name: 'Messaging',
        href: '/products/messaging',
        description: 'Set up a full-functioning messaging service.',
        icon: '/images/icons/illustrated/dark/messaging.png'
      },
      {
        name: 'Realtime',
        href: '/docs/apis/realtime',
        description: 'Subscribe and react to any event.',
        icon: '/images/icons/illustrated/dark/realtime.png'
      },
      {
        name: 'Sites',
        href: '/products/sites',
        description: 'The open-source Vercel alternative.',
        icon: '/images/icons/illustrated/dark/sites.png'
      }
    ];

    const comparisons = [
        {
            label: 'Clikkle vs. Supabase',
            href: '/blog/post/clikkle-compared-to-supabase'
        },
        {
            label: 'Clikkle vs. Firebase',
            href: '/blog/post/open-source-firebase-alternative'
        },
        {
            label: 'Clikkle vs. Vercel',
            href: '/blog/post/open-source-vercel-alternative'
        }
    ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="aw-header-link aw-focus-ring"
        data-active={isOpen ? "true" : undefined}
        aria-expanded={isOpen}
      >
        Products
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-0 right-0 pointer-events-none z-[100] flex justify-center"
          >
            <div className="w-full max-w-[1280px] px-[24px] md:px-[48px] lg:px-[64px] pointer-events-auto">
              <div className="w-full mt-4 rounded-3xl bg-[#19191C] shadow-2xl border border-white/10 overflow-hidden flex">
                <div className="flex w-full p-8 pb-10 gap-10">
                  
                  {/* Left Side: Products Grid */}
                  <div className="flex-[6]">
                    <div className="flex items-center gap-1 mb-8 font-mono text-[11px] font-medium tracking-widest text-[#85858B]">
                      PRODUCTS<span className="text-[#2D63FF] font-bold">_</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="group flex items-start gap-4 outline-none rounded-2xl transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-12 h-12 shrink-0 bg-white/[0.06] border border-white/[0.12] rounded-xl flex items-center justify-center transition-all group-hover:bg-white/[0.08]">
                            <Image src={product.icon} alt={product.name} width={28} height={28} className="size-6 grayscale transition-all group-hover:grayscale-0 drop-shadow-lg" />
                          </div>
                          <div className="flex flex-col gap-1 pt-1">
                            <h4 className="text-white font-medium text-[15px] leading-tight">
                              {product.name}
                            </h4>
                            <p className="text-[#85858B] text-[13px] leading-snug">
                              {product.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-[1px] bg-white/[0.06] shrink-0" />

                  {/* Right Side: Customer Stories & Comparisons */}
                  <div className="flex-[4] flex flex-col gap-10">
                    
                    {/* CUSTOMER STORIES */}
                      <div className="group block rounded-2xl border border-white/12 bg-white/6 p-4 outline-none focus-within:bg-white/12">
                        <header className="flex items-center justify-between mb-4">
                          <span className="font-mono text-[11px] font-medium tracking-widest text-[#85858B]">
                            CUSTOMER STORIES<span className="text-[#2D63FF] font-bold">_</span>
                          </span>
                          <Link
                            href="/customers"
                            className="text-[#85858B] text-[12px] flex items-center hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Read more <span className="ml-1 hidden xl:inline">customer stories</span>
                            <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </header>

                        <Link
                          href="/customers/customer-story-storealert"
                          className="flex flex-col gap-4 outline-none xl:flex-row"
                          onClick={() => setIsOpen(false)}
                        >
                          <Image
                            src="/clikkle/images/blog/customer-story-storealert/cover.png"
                            alt="Case study cover"
                            width={120}
                            height={80}
                            className="min-h-10 w-full shrink-0 rounded-xl object-cover md:aspect-[3/1] xl:max-w-[120px]"
                          />
                          <p className="w-full text-[14px] text-[#85858B] leading-snug">
                            "Clikkle helped reduce development time by 60%, and lower server costs by 40%."
                          </p>
                        </Link>
                      </div>

                    {/* COMPARE CLIKKLE */}
                    <div className="pl-4">
                      <div className="flex items-center gap-1 mb-5 font-mono text-[11px] font-medium tracking-widest text-[#85858B]">
                        COMPARE CLIKKLE<span className="text-[#2D63FF] font-bold">_</span>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        {comparisons.map((compare) => (
                          <Link
                            key={compare.label}
                            href={compare.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between text-[14.5px] font-medium text-[#c4c4c6] hover:text-white transition-colors py-0.5"
                            onClick={() => setIsOpen(false)}
                          >
                            {compare.label}
                            <ChevronRight className="w-4 h-4 text-[#85858B] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
