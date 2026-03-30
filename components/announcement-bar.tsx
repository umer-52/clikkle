"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        try {
            const isDismissed = localStorage.getItem("clikkle-marketing-announcement-dismissed") === "1";
            setDismissed(isDismissed);
        } catch {
            setDismissed(false);
        }
    }, []);

    const dismiss = () => {
        setDismissed(true);
        try {
            localStorage.setItem("clikkle-marketing-announcement-dismissed", "1");
        } catch {
            // ignore
        }
    };

    if (dismissed) return null;

    return (
        <div className="announcement-shell border-smooth relative z-10 border-b border-white/10 bg-black">
            <button
                type="button"
                className="announcement-dismiss aw-focus-ring"
                aria-label="Dismiss announcement"
                onClick={dismiss}
            >
                <X className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="is-special-padding mx-auto">
                <a
                    href="https://imagine.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-container group relative mx-auto flex cursor-pointer items-center bg-black px-4 py-3 sm:px-6 sm:py-4 md:h-[76px] md:px-0"
                >
                    <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-1 max-w-[108rem] sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center gap-2 sm:justify-start sm:gap-3 md:basis-1/2 md:gap-4">
                            <span className="banner-text-introducing">Introducing</span>
                            <div className="logo-container flex w-[120px] sm:w-[143px] justify-center items-end">
                                <img src="/images/logos/imagine.svg" alt="Imagine" className="h-[30px] sm:h-[35px] w-auto" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-1.5 sm:mr-0 sm:ml-auto sm:gap-2 sm:text-right">
                            <span className="banner-text-right">AI Builder on Clikkle Cloud</span>
                            <svg className="h-4 w-4 flex-shrink-0 transition group-hover:translate-x-1 sm:h-5 sm:w-5 text-[#e4e4e7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
            <style jsx>{`
                .is-special-padding {
                    padding-inline: clamp(1.25rem, 4vw, 120rem);
                }
                .announcement-shell {
                    padding-inline-end: 3rem;
                }
                .announcement-dismiss {
                    position: absolute;
                    inset-inline-end: max(0.75rem, env(safe-area-inset-right));
                    inset-block-start: 50%;
                    z-index: 20;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    inline-size: 40px;
                    block-size: 40px;
                    margin-block-start: -20px;
                    border: 0;
                    border-radius: 0.375rem;
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.75);
                    cursor: pointer;
                    transition: background-color 200ms ease, color 200ms ease;
                }
                .announcement-dismiss:hover {
                    background: rgba(255, 255, 255, 0.12);
                    color: #fff;
                }
                .banner-text-introducing {
                    font-family: 'Neue Haas Grotesk Display Pro', Inter, sans-serif;
                    font-size: 18px;
                    font-weight: 450;
                    letter-spacing: -0.2px;
                    background: linear-gradient(180deg, #fafafb 0%, #828282 111.47%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .banner-text-right {
                    color: #e4e4e7;
                    font-family: Inter, sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: -0.072px;
                }
                @media (min-width: 640px) {
                    .banner-text-introducing { font-size: 20px; }
                    .banner-text-right { font-size: 16px; line-height: 22px; }
                }
            `}</style>
        </div>
    );
}
