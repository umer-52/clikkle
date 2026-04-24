"use client";

import { SiteStep } from "./site-step";

export function CreateStep() {
    return (
        <SiteStep eyebrowText="Create">
            {/* Dashboard mockup */}
            <div className="flex aspect-video w-full flex-col rounded-t-3xl border border-white/8 bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-2 pt-2 backdrop-blur-xl overflow-hidden"
                style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
            >
                <img src="/clikkle/images/products/sites/dashboards/create-dashboard.svg"
                    alt="Create a site dashboard"
                    className="h-full w-full rounded-t-2xl object-cover object-[center_top]" loading="lazy" />
            </div>

            {/* Text */}
            <div className="relative z-10 mx-auto flex max-w-md flex-col gap-4 text-center">
                <h2 className="text-2xl md:text-5xl text-white font-aeonik-pro">
                    Clone a template or connect to your Git repository
                </h2>
                <p className="text-white/50 text-lg font-medium">
                    Use one of the pre-built Sites templates or import an existing project using Git.
                </p>
            </div>
        </SiteStep>
    );
}
