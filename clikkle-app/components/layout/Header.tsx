"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, ChevronDown, 
  KeyRound, Database, HardDrive, Braces, MessageCircleHeart, Activity, Globe 
} from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/basepath";
import { clikkleStats as clikkleStats } from "@/lib/site-data";

const products = [
  { title: "Auth", description: "Secure login with multi-factor auth", icon: KeyRound, href: "https://clikkle.com/products/auth" },
  { title: "Databases", description: "Scalable and robust databases", icon: Database, href: "https://clikkle.com/docs/products/databases" },
  { title: "Storage", description: "Advanced compression and encryption", icon: HardDrive, href: "https://clikkle.com/products/storage" },
  { title: "Functions", description: "Deploy & scale serverless functions", icon: Braces, href: "https://clikkle.com/products/functions" },
  { title: "Messaging", description: "Set up a full-functioning messaging service", icon: MessageCircleHeart, href: "https://clikkle.com/products/messaging" },
  { title: "Realtime", description: "Subscribe and react to any event", icon: Activity, href: "https://clikkle.com/docs/apis/realtime" },
  { title: "Sites", description: "The open-source Vercel alternative", icon: Globe, href: "https://clikkle.com/products/sites" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  
  const githubStars = clikkleStats.find((s: any) => s.label === "GitHub Stars")?.value || "55.2K";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group outline-none">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2D63FF] text-white transition-opacity group-hover:opacity-90">
            <Image 
              src={withBasePath("/2-version/Clikkle core (V1 White Text).png")} 
              alt="" 
              width={16} 
              height={16} 
              className="brightness-0 invert h-4 w-4" 
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Clikkle
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4">
          {/* Products Dropdown Wrapper */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-aw-text-secondary hover:text-white rounded-lg transition-colors">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsHovered ? "rotate-180" : ""}`} />
            </button>
            
            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isProductsHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-[4rem] -left-12 w-[540px] glass-heavy rounded-2xl shadow-aw-xl overflow-hidden origin-top"
                >
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {products.map((product) => {
                      const Icon = product.icon;
                      return (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="group flex gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-aw-text-muted group-hover:text-[#2D63FF] group-hover:bg-[#2D63FF]/10 transition-colors shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-white text-sm mb-0.5">{product.title}</div>
                            <div className="text-xs text-aw-text-muted leading-relaxed">{product.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/docs" className="px-4 py-2 text-sm font-medium text-aw-text-secondary hover:text-white hover:bg-white/5 rounded-full transition-colors">
            Docs
          </Link>
          <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-aw-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors tracking-wide">
            Pricing
          </Link>
          <Link href="/customers" className="px-4 py-2 text-sm font-medium text-aw-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors tracking-wide">
            Customers
          </Link>
          <Link href="/enterprise" className="px-4 py-2 text-sm font-medium text-aw-text-secondary hover:text-white hover:bg-white/5 rounded-full transition-colors tracking-wide">
            Enterprise
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/clikkle/clikkle"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center h-9 px-3 text-sm font-medium text-aw-text-secondary hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"
          >
            <Github className="w-4 h-4 mr-2" />
            <span className="mr-2">Star on GitHub</span>
            <span className="flex items-center h-5 px-1.5 bg-white/10 rounded-md text-xs font-semibold group-hover:bg-white/20 transition-colors">
              {githubStars}
            </span>
          </a>
          <Link 
            href="https://cloud.clikkle.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center h-9 px-4 text-sm font-semibold text-white bg-[#2D63FF] rounded-lg transition-all hover:bg-[#FF4D82]"
          >
            Start building for free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-aw-text-secondary hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-md" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[var(--bg-secondary)] shadow-2xl flex flex-col border-l border-white/10"
            >
              <div className="h-16 px-6 flex items-center justify-between border-b border-white/10">
                <span className="font-bold text-white tracking-wide">Menu</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-aw-text-secondary hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
                <div className="text-sm font-semibold text-aw-text-muted uppercase tracking-wider mb-2">Navigation</div>
                <Link href="/products" className="text-xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                <Link href="/docs" className="text-xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Docs</Link>
                <Link href="/pricing" className="text-xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                <Link href="/community" className="text-xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
              </div>
              <div className="p-6 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="https://github.com/clikkle/clikkle"
                  className="flex items-center justify-center h-12 rounded-full border border-white/10 bg-white/5 text-white font-medium"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Star on GitHub ({githubStars})
                </a>
                <Link
                  href="https://cloud.clikkle.com/"
                  className="flex items-center justify-center h-12 rounded-lg bg-white text-[#19191C] font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
