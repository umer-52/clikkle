"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative isolate flex items-center h-12 overflow-hidden bg-[#0A0A0A] border-b border-white/5">
      {/* Subtle particle/noise background effect */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fd366e' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(253,54,110,0.1) 20%, rgba(34,197,94,0.1) 80%, transparent)' }}
      />
      
      <Link 
        href="https://clikkle.com/blog/post/introducing-imagine"
        target="_blank"
        rel="noopener noreferrer"
        className="shell flex items-center justify-between w-full relative z-10 group"
      >
        {/* Left Side: Introducing Imagine */}
        <div className="flex items-center gap-3">
          <span className="text-[#A1A1AA] text-[13px] font-medium tracking-wide">Introducing</span>
          <div className="flex items-center gap-1.5 text-white font-bold text-sm tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            Imagine
          </div>
        </div>

        {/* Right Side: AI Builder Link */}
        <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-white font-medium group-hover:text-[#A1A1AA] transition-colors">
          AI Builder on Clikkle Cloud
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </div>
  );
}
