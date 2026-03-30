'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const consoles = [
    {
        title: 'Teams management',
        copy: 'Organize users into multi-tenant teams to enable collective access to resources.',
        image: '/images/products/auth/teams-console.png'
    },
    {
        title: 'Role-based access control',
        copy: 'Define the level of access and control users or teams have over resources according to their roles.',
        image: '/images/products/auth/permissions-console.png'
    }
];

export function AccessPermissions() {
    return (
        <section className="bg-[#f9fafb] pt-32 pb-40 text-[#19191C]">
            <div className="container">
                <div className="mx-auto mb-20 flex max-w-md flex-col items-center justify-center gap-y-4 text-center">
                    <span className="text-eyebrow font-aeonik-fono text-black uppercase bg-black/5 px-3 py-1 rounded-full border border-black/10">
                        Access_
                    </span>
                    <h2 className="text-title text-primary font-aeonik-pro text-[#19191C]">
                        Easily manage teams <br /> and permissions
                    </h2>
                    <p className="text-main-body text-secondary font-medium text-[#434347]">
                        Create custom roles and level of access to resources such as projects, files, etc.
                    </p>
                    <Link
                        href="/docs"
                        className="button-secondary mt-2 !w-full md:!w-fit"
                    >
                        Learn more
                    </Link>
                </div>
            </div>

            <div className="container grid place-items-center gap-12 overflow-x-hidden pr-0 pl-5 md:grid-cols-2 md:px-5">
                {consoles.map((console, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            'relative',
                            idx === 0 ? 'after:absolute after:top-0 after:-right-6 after:bottom-0 after:ml-8 after:w-px after:bg-black/10 hidden md:block' : ''
                        )}
                    >
                        <div className="space-y-1 pr-5 md:pr-0">
                            <h3 className="text-primary text-main-body font-medium text-[#19191C]">{console.title}</h3>
                            <p className="text-secondary text-main-body max-w-[30rem] font-medium text-[#434347]">
                                {console.copy}
                            </p>
                        </div>

                        <div className="mt-8 w-[150%] rounded-3xl border border-black/10 bg-gradient-to-br from-black/5 via-transparent to-black/5 p-2 md:w-full">
                            <Image
                                className="rounded-2xl"
                                src={console.image}
                                width={600}
                                height={400}
                                alt={`${console.title} image`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
