"use client";

import { SiteStep } from "./site-step";

export function DeployStep() {
    return (
        <SiteStep eyebrowText="Deploy">
            {/* Deployment dashboard mockup */}
            <div
                className="flex aspect-video w-full flex-col rounded-t-3xl border border-white/8 bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-2 pt-2 backdrop-blur-xl overflow-hidden"
                style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
            >
                <img src="/clikkle/images/products/sites/dashboards/deploy-dashboard.svg"
                    alt="Deploy dashboard"
                    className="h-full w-full rounded-t-2xl object-cover object-[center_top]" loading="lazy" />
            </div>

            {/* Text */}
            <div className="relative z-10 mx-auto flex max-w-md flex-col gap-4 text-center">
                <h2 className="text-2xl md:text-5xl text-white font-aeonik-pro">Deploy your site</h2>
                <p className="text-white/50 text-lg font-medium">
                    Easily deploy your website and web apps using Git, CLI, or manually. Monitor your
                    deployment logs to ensure a stable connection with the Clikkle network.
                </p>
            </div>
        </SiteStep>
    );
}
