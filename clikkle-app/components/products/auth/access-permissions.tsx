'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const consoles = [
    {
        title: 'Teams management',
        copy: 'Organize users into multi-tenant teams to enable collective access to resources.',
        image: '/clikkle/images/products/auth/teams-console.png'
    },
    {
        title: 'Role-based access control',
        copy: 'Define the level of access and control users or teams have over resources according to their roles.',
        image: '/clikkle/images/products/auth/permissions-console.png'
    }
];

export function AccessPermissions() {
    return (
        <section className="pt-32 pb-40">
            <div className="container">
                <div className="mx-auto mb-20 flex max-w-md flex-col items-center justify-center gap-y-4 text-center">
                    <span
                        className="text-eyebrow font-aeonik-fono rounded-[0.4rem] px-3 py-1.5 font-medium uppercase text-white shadow-[4px_5px_0_0px_rgba(45,99,255,0.3)]"
                        style={{
                            background: 'linear-gradient(135deg, #3B82F6 0%, #2D63FF 72%, #2563EB 100%)'
                        }}
                    >
                        Access_
                    </span>
                    <h2 className="text-title font-aeonik-pro text-primary">
                        Easily manage teams <br /> and permissions
                    </h2>
                    <p className="text-main-body font-medium text-secondary">
                        Create custom roles and level of access to resources such as projects, files, etc.
                    </p>
                    <Link
                        href="/docs/products/auth/teams"
                        className="web-btn web-btn-secondary-light mt-2 !w-full md:!w-fit"
                    >
                        Learn more
                    </Link>
                </div>
            </div>

            <div className="container grid place-items-center gap-12 overflow-x-hidden pr-0 pl-5 md:grid-cols-2 md:px-5">
                {consoles.map((row, idx) => (
                    <div
                        key={row.title}
                        className={cn(
                            'relative',
                            idx === 0
                                ? 'hidden after:absolute after:top-0 after:-right-6 after:bottom-0 after:ml-8 after:w-px after:bg-[#19191C]/10 md:block'
                                : ''
                        )}
                    >
                        <div className="space-y-1 pr-5 md:pr-0">
                            <h3 className="text-main-body font-medium text-primary">{row.title}</h3>
                            <p className="text-main-body max-w-[30rem] font-medium text-secondary">
                                {row.copy}
                            </p>
                        </div>

                        <div className="mt-8 w-[150%] rounded-3xl border border-black/8 bg-gradient-to-br from-black/[0.06] via-black/[0.04] via-[61%] to-black/[0.06] p-2 md:w-full">
                            <Image
                                className="rounded-2xl"
                                src={row.image}
                                width={600}
                                height={400}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
