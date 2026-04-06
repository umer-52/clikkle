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
                    className="web-btn web-btn-secondary-light group"
                >
                    <span className="text">More about the Clikkle Network</span>
                    <ArrowRight
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                    />
                </Link>
            </div>

            <div className="mt-8 mb-20 relative px-4 md:px-0">
                <Map theme="light" navigable={true} defaultSet="pop-locations" />
            </div>
        </div>
    );
}
