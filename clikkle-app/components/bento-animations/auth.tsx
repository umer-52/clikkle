"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import Link from "next/link";

export function BentoAuth() {
  return (
    <Link
      href="/products/auth"
      className="border-smooth col-span-12 flex min-w-0 w-full flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/clikkle/images/icons/illustrated/dark/auth.png" alt="Auth icon" width={28} height={28} className="size-7" />
          <h3 className="font-aeonik-pro text-label text-primary">Auth</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          <span className="text-secondary">Authenticate users securely with multiple login methods like</span>{" "}
          Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8">
        <div className="flex h-full w-full items-center justify-center">
          <div className="border-smooth flex w-[264px] flex-col rounded-[40px] border bg-[#232325]/90">
            <div className="pointer-events-none relative m-2 flex-1 rounded-4xl bg-[var(--bg-primary)] p-4">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="leading-micro text-secondary text-[0.625rem] tracking-tighter">Email</label>
                  <input type="text" name="email" className="border-smooth text-eyebrow w-full rounded-lg border bg-[var(--bg-primary)] px-3 py-2 tracking-tighter text-white" defaultValue="walter@acme.dev" disabled />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="leading-micro text-secondary text-[0.625rem] tracking-tighter">Create Password</label>
                  <input
                    type="text"
                    name="password"
                    className={cn('text-eyebrow! w-full rounded-lg border border-white/24 bg-[var(--bg-primary)] px-3 py-2 tracking-tighter text-white')}
                    placeholder="Your Password"
                    defaultValue="•••••••••••••"
                    disabled
                  />
                </div>
                <button type="button" className="web-btn web-btn-primary w-full !bg-white !text-[#19191C] hover:!bg-white/90 !shadow-none border-transparent" disabled>Sign up</button>
              </div>

              <span className={cn('leading-micro text-secondary relative my-3 flex items-center justify-center gap-3 text-center text-[0.625rem] tracking-tighter')}>
                <span className="bg-smooth h-px flex-1"></span>
                or sign up with
                <span className="bg-smooth h-px flex-1"></span>
              </span>

              <button type="button" className={cn('web-btn web-btn-secondary w-full gap-3')} disabled>
                <img loading="lazy" src="/clikkle/images/logos/icons/google.svg" alt="Google Icon" width={16} height={16} className="size-4" />
                Google
              </button>
            </div>
          </div>
        </div>
        <GridPaper className="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
      </div>
    </Link>
  );
}
