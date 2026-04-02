"use client";
import { cn } from "@/lib/utils";
import { GridPaper } from "./grid-paper";
import Link from "next/link";

const commands = ['GenerateReport', 'SendEmail', 'UpdateProfile', 'DeleteAccount', 'CreateInvoice'];

function CommandPill({ command }: { command: string }) {
  return (
    <div className="text-caption font-fira-code relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white">
      <div className="h-full w-full rounded-2xl bg-[#202023] px-3 py-1 text-white/80">
        {command}
      </div>
      <div className="absolute inset-0 -z-1 bg-gradient-to-l from-white/12 to-transparent"></div>
    </div>
  );
}

export function BentoFunctions() {
  return (
    <Link
      href="/products/functions"
      className="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    >
      <div className="space-y-3 px-3 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <img loading="lazy" src="/clikkle/images/icons/illustrated/dark/functions.png" alt="Functions icon" width={28} height={28} className="size-7" />
          <h3 className="font-aeonik-pro text-label text-primary">Functions</h3>
        </div>
        <p className="text-sub-body text-primary max-w-lg font-medium">
          Deploy and scale serverless functions{" "}
          <span className="text-secondary">in 30+ secure, isolated runtimes in 13 languages.</span>
        </p>
      </div>
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8">
        <div
          className={cn(
            'flex flex-1 flex-col gap-3 overflow-clip text-center',
            'mask-linear-[to_top,_transparent_0%,_white_50%,_transparent_100%] mask-alpha'
          )}
        >
          <div className="flex h-max flex-col items-center gap-3">
            {commands.slice(0, 2).map((cmd) => (
              <CommandPill key={cmd} command={cmd} />
            ))}
            {/* Active command */}
            <div className="text-caption font-fira-code relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white">
              <div className="flex h-full w-full items-center justify-between gap-2 rounded-2xl bg-[#202023] px-3 py-1 text-left text-white/80">
                UpdateProfile
                <svg className="size-5 text-[#B4F8E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="absolute inset-0 -z-1 bg-gradient-to-l from-white/12 to-transparent"></div>
            </div>
            {commands.slice(3).map((cmd) => (
              <CommandPill key={cmd} command={cmd} />
            ))}
          </div>
        </div>
        <GridPaper className="absolute inset-0 bg-size-[calc(100%/13)]" />
      </div>
    </Link>
  );
}
