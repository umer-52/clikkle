"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Users, Database, Folder, Zap, MessageSquare, Activity, Globe } from "lucide-react";
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
      icon: Users,
      title: "Auth",
      description: "Secure login with multi-factor auth.",
      href: "/products/auth"
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Set up a full-functioning messaging service.",
      href: "/docs/products/messaging"
    },
    {
      icon: Database,
      title: "Databases",
      description: "Scalable and robust databases.",
      href: "/docs/products/databases"
    },
    {
      icon: Activity,
      title: "Realtime",
      description: "Subscribe and react to any event.",
      href: "/docs/apis/realtime"
    },
    {
      icon: Folder,
      title: "Storage",
      description: "Advanced compression and encryption.",
      href: "/docs/products/storage"
    },
    {
      icon: Globe,
      title: "Sites",
      description: "The open-source Vercel alternative.",
      href: "/docs/products/sites"
    },
    {
      icon: Zap,
      title: "Functions",
      description: "Deploy & scale serverless functions.",
      href: "/docs/products/functions"
    }
  ];

  const comparisons = [
    { label: "Clikkle vs. Supabase", href: "https://clikkle.com/blog/post/appwrite-compared-to-supabase" },
    { label: "Clikkle vs. Firebase", href: "https://clikkle.com/blog/post/open-source-firebase-alternative" },
    { label: "Clikkle vs. Vercel", href: "https://clikkle.com/blog/post/open-source-vercel-alternative" }
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="aw-header-link aw-focus-ring"
        style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        data-active={isOpen ? "true" : undefined}
        aria-expanded={isOpen}
      >
        Products
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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
                          key={product.title}
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-4 outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#2D63FF] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-12 h-12 shrink-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl flex items-center justify-center text-[#85858B] transition-all group-hover:bg-[#2D63FF]/10 group-hover:text-[#2D63FF] group-hover:border-[#2D63FF]/20">
                            <product.icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col gap-1.5 pt-1">
                            <h4 className="text-white font-semibold text-[15px] leading-none transition-colors group-hover:text-white">
                              {product.title}
                            </h4>
                            <p className="text-[#85858B] text-[13px] leading-snug max-w-[200px]">
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
                    <div className="pl-4">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center font-mono text-[11px] font-medium tracking-widest text-[#85858B]">
                          CUSTOMER STORIES<span className="text-[#2D63FF] font-bold">_</span>
                        </div>
                        
                        <Link
                          href="https://clikkle.com/blog/category/customer-stories"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-[#85858B] hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-[12px] leading-tight text-right w-16">Read more customer stories</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="w-36 h-24 bg-white rounded-[20px] shrink-0 flex items-center justify-center shadow-inner relative overflow-hidden px-4">
                          <div className="flex items-center gap-2 w-full justify-center">
                            <div className="text-black font-bold text-[11px] tracking-tight flex items-center gap-0.5">
                               <span className="text-[#2D63FF]">a</span>ppwrite
                            </div>
                            <div className="w-[1.5px] h-5 bg-gray-200"></div>
                            <div className="text-black font-bold text-[11px] tracking-tight">
                               StoreAlert
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-[#85858B] text-[14.5px] leading-relaxed max-w-[240px]">
                          "Clikkle helped reduce development time by 60%, and lower server costs by 40%."
                        </p>
                      </div>
                    </div>

                    {/* COMPARE APPWRITE */}
                    <div className="pl-4">
                      <div className="flex items-center gap-1 mb-5 font-mono text-[11px] font-medium tracking-widest text-[#85858B]">
                        COMPARE APPWRITE<span className="text-[#2D63FF] font-bold">_</span>
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
