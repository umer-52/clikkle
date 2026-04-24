"use client";

import { Step } from "./step";

export function Send() {
    return (
        <Step title="Step 4: Send" hideLine>
            <div className="flex flex-col lg:flex-row items-end relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(240,6%,10%)] pointer-events-none z-[100]" />

                {/* iPhone mockup */}
                <div className="flex-shrink-0 lg:ml-[15rem] z-10 mx-auto lg:mx-0">
                    <img src="/clikkle/images/products/messaging/iphone.svg"
                        alt="iPhone notification"
                        className="w-[300px] lg:w-[390px] h-auto object-contain" loading="lazy" />
                </div>

                {/* Gradient overlay on phone */}
                <div className="absolute inset-0 top-1/2 -bottom-4 z-10 bg-gradient-to-b from-transparent via-[hsl(270,4%,10%,0.4)] to-[hsl(270,4%,10%)] md:bg-gradient-to-b md:from-transparent md:via-[hsl(270,4%,10%,0.2)] md:to-[hsl(270,4%,10%,0.9)]" />

                {/* Android mockup + text */}
                <div className="relative z-[101] flex flex-col items-start lg:items-start -mt-20 lg:mt-0 lg:-ml-12 lg:h-full">
                    <img src="/clikkle/images/products/messaging/android.svg"
                        alt="Android notification"
                        className="w-[300px] lg:w-[390px] h-auto object-contain mx-auto lg:mx-0 opacity-0 lg:opacity-100 hidden lg:block" loading="lazy" />
                    <div className="lg:absolute lg:top-[70%] left-10">
                    <h3 className="text-2xl lg:text-5xl font-aeonik-pro text-white max-w-[35rem] relative z-[1000] lg:pl-8">
                        Communicate across multiple channels
                    </h3>
                        <p className="text-white/50 mt-4 pb-8 relative z-[1000] lg:pl-8 text-center lg:text-left mx-auto max-w-[90%] lg:max-w-none">
                            Pick one or more channels for you to deliver your message to your user.
                        </p>
                    </div>
                </div>
            </div>
        </Step>
    );
}
