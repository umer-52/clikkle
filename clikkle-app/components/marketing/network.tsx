import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Map } from '@/components/appwrite-network/map';
import Link from 'next/link';

const heading = 'The Clikkle Network';

export function Network() {
    return (
        <div className="relative flex max-w-[100vw] flex-col gap-8 overflow-hidden bg-[#EDEDF0]">
            <div className="container mt-20 flex flex-col items-center gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-aeonik-pro mx-auto inline-block pt-12 text-center text-[48px] leading-[52px] font-normal tracking-[-0.96px] text-[#19191C]">
                        {heading}
                    </h1>

                    <p className="text-center font-aeonik-pro text-[#56565C] text-[20px] font-medium leading-[28px] tracking-[-0.28px]">
                        Pick one of our many cloud regions or edges to meet your
                        <br />project&apos;s needs and reduce latency.
                    </p>
                </div>

                <Link
                    href="/the-clikkle-network"
                    className="group box-border inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-[8px] px-4 py-2 text-sm font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 sm:px-6"
                >
                    More about the Clikkle Network
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>

            <div className="mt-8 mb-20 relative px-4 md:px-0">
                <Map theme="light" navigable={true} defaultSet="pop-locations" />
            </div>
        </div>
    );
}
