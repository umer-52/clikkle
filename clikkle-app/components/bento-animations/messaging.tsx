"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import Link from "next/link";

export function BentoMessaging() {
  return (
    <Link
      href="/products/messaging"
      className="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/clikkle/images/icons/illustrated/dark/messaging.png" alt="Messaging icon" width={28} height={28} className="size-7" />
          <h3 className="font-aeonik-pro text-label text-primary">Messaging</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          <span className="text-secondary">Send notifications via</span> push, email, SMS, and in-app messaging.
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-clip rounded-xl bg-black/24 px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Notification card mock */}
          <div className="border-smooth flex w-[280px] flex-col gap-2 rounded-2xl border bg-[#232325]/90 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#2D63FF]/20 flex items-center justify-center">
                <svg className="size-4 text-[#2D63FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              </div>
              <div>
                <p className="text-eyebrow text-primary font-medium">Push Notification</p>
                <p className="text-[0.625rem] text-secondary">Just now</p>
              </div>
            </div>
            <p className="text-eyebrow text-secondary">Your order #1234 has been shipped! Track your delivery.</p>
          </div>
          <div className="border-smooth flex w-[260px] flex-col gap-2 rounded-2xl border bg-[#232325]/60 p-3 opacity-60 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="size-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <p className="text-eyebrow text-primary font-medium">Email Sent</p>
            </div>
          </div>
        </div>
        <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
      </div>
    </Link>
  );
}
