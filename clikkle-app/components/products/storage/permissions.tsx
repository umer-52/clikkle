"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const headings = ['Create', 'Read', 'Update', 'Delete'];

const initialPermissions = [
    { label: 'Any', options: [false, true, false, false] },
    { label: 'Guest', options: [false, true, false, false] },
    { label: 'Users', options: [true, true, true, true] },
    { label: 'user:62f8b5b', options: [true, false, false, false] },
    { label: 'user:62e1544', options: [true, false, false, false] }
];

export function ProductShot() {
    const [permissions, setPermissions] = useState(initialPermissions);

    const togglePermission = (rowIndex: number, optionIndex: number) => {
        const newPerms = [...permissions];
        newPerms[rowIndex].options[optionIndex] = !newPerms[rowIndex].options[optionIndex];
        setPermissions(newPerms);
    };

    return (
        <>
            <div className="w-full md:w-[586px] hidden flex-col md:flex rounded-3xl" style={{ flexBasis: '586px' }}>
                <section className="bg-[var(--bg-primary)] border border-white/10 rounded-2xl flex flex-1 flex-col overflow-hidden shadow-2xl">
                    <header className="flex flex-col gap-4 border-b border-white/10">
                        <div className="flex gap-4 px-6 pt-6 items-center">
                            <h4 className="text-white font-semibold">My Bucket</h4>
                            <div className="ml-auto">
                                <code className="text-[10px] text-white/70 rounded-full bg-white/10 px-2 py-1">
                                    637a40ba7a703e3936e2
                                </code>
                            </div>
                        </div>

                        <ul className="mt-4 flex gap-4 px-6 text-sm text-white/70">
                            <li className="px-2 pb-2">Files</li>
                            <li className="px-2 pb-2">Usage</li>
                            <li className="px-2 pb-2">Settings</li>
                            <li className="border-white px-2 pb-2 border-b-2 text-white">Security</li>
                        </ul>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-6 bg-[var(--bg-primary)]">
                        {[
                            { label: 'Enable encryption', desc: 'Files larger than 20MB will not be encrypted.', checked: true },
                            { label: 'Strip metadata', desc: 'Remove metadata for all files uploaded to the bucket.', checked: true },
                            { label: 'Permissions', desc: 'Choose who can access the files in the bucket.', checked: true },
                            { label: 'File level permissions', desc: 'Enable to set permissions at the File level.', checked: false }
                        ].map((btn, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                                <div className={cn("w-10 h-6 rounded-full transition-colors flex items-center px-1", btn.checked ? "bg-accent" : "bg-white/20")}>
                                    <div className={cn("w-4 h-4 rounded-full bg-white transition-transform", btn.checked ? "translate-x-4" : "translate-x-0")} />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-sm text-white font-medium">{btn.label}</h5>
                                    <p className="text-xs text-white/50">{btn.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="bg-[#2D2D31]/80 relative flex flex-1 flex-col rounded-3xl border border-white/10 backdrop-blur-xl md:top-5 md:mt-16 md:ml-[-80px] md:basis-[602px] shadow-2xl">
                <h4 className="text-white font-semibold border-b border-white/10 p-6">
                    Permissions
                </h4>
                <div className="overflow-x-auto">
                    <table className="relative w-full text-left border-collapse sm:table-fixed p-6 min-w-[500px]">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-[11px] uppercase tracking-wider text-white/50 w-[120px] pl-6 py-4 md:w-[200px] font-normal">
                                    Role
                                </th>
                                {headings.map(heading => (
                                    <th key={heading} className="text-[11px] uppercase tracking-wider text-white/50 py-4 font-normal">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {permissions.map((row, index) => (
                                <tr key={row.label}>
                                    <td className="text-white text-xs md:text-sm w-[120px] px-6 py-3 md:w-[200px] md:py-4">
                                        {row.label}
                                    </td>
                                    {row.options.map((opt, i) => (
                                        <td key={i} className="py-3 md:py-4">
                                            <div className="relative inline-flex items-center justify-center">
                                                <input
                                                    type="checkbox"
                                                    checked={opt}
                                                    onChange={() => togglePermission(index, i)}
                                                    className="w-4 h-4 md:w-5 md:h-5 rounded disabled:opacity-50 appearance-none bg-white/10 border border-white/20 checked:bg-[#FE9567] checked:border-[#FE9567] cursor-pointer transition-colors focus:ring-2 focus:ring-[#FE9567]/50"
                                                />
                                                {opt && (
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="absolute pointer-events-none text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                        <path d="M1 4.5L3.5 7L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={headings.length + 1} className="py-4 pl-4 md:py-6">
                                    <Button variant="ghost" className="!text-white/70 hover:!text-white hover:!bg-white/10">
                                        <Plus className="w-3 h-3 mr-2" />
                                        Add role
                                    </Button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}

export function Permissions() {
    return (
        <div className="py-20 md:py-40">
            <div className="container">
                <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-title font-aeonik-pro text-primary text-[#19191C] dark:text-[#E8E8EB]">
                        Protect your files and <br/> set permissions
                    </h2>
                    <p className="text-main-body max-w-[470px] mx-auto font-medium text-[#434347] dark:text-[#A0A0A5]">
                        Set up file encryption and granular user permissions in your storage infrastructure
                    </p>
                    <Button
                        asChild
                        variant="secondary"
                        className="mx-auto mt-4 w-full md:w-auto web-btn web-btn-secondary-dark ring-0!"
                    >
                        <Link href="/docs/products/storage/permissions">
                            Learn more
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="container mt-20 flex flex-col md:flex-row items-center justify-center">
                <ProductShot />
            </div>
        </div>
    );
}
