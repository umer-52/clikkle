'use client';

import { SessionManagement } from '@/components/products/auth/animations/session-management';
import { MultiFactor } from '@/components/products/auth/animations/multi-factor';
import { SecurePasswords } from '@/components/products/auth/animations/secure-passwords';
import { AdvancedSecurity } from '@/components/products/auth/animations/advanced-security';
import { SessionLimit } from '@/components/products/auth/animations/session-limit';
import { PasswordDictionary } from '@/components/products/auth/animations/password-dictionary';

export function SecurityBento() {
    return (
        <section className="relative bg-[#19191C] pt-32 pb-40 before:absolute before:inset-0 before:bg-[url('/clikkle/images/bgs/checker-bg.png')] before:bg-[length:350%] before:bg-center before:bg-no-repeat before:opacity-10 md:before:bg-contain">
            <div className="container relative z-10">
                <div className="mx-auto flex max-w-[325px] flex-col gap-4 text-center">
                    <h2 className="font-aeonik-pro text-white text-subtitle text-pretty">
                        Built-in<br /> advanced security
                    </h2>
                    <p className="text-[#656569]">
                        Provide top security and protection with built-in security and compliance features.
                    </p>
                </div>

                <div className="mt-10 grid min-h-[900px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-12">
                    <SessionManagement />
                    <MultiFactor />
                    <SecurePasswords />
                    <AdvancedSecurity />
                    <SessionLimit />
                    <PasswordDictionary />
                </div>
            </div>
        </section>
    );
}
