import type { Metadata, Viewport } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
// import { AnnouncementBar } from "@/components/announcement-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { THEME_INIT_SCRIPT } from "@/lib/theme-init-script";
import "./globals.css";
/* Appwrite-parity marketing CTAs — unlayered; must load after globals (see file header). */
import "./marketing-appwrite-buttons.css";
/* Docs `.web-button` / `.web-inline-tag` — used by `SiteHeader` GitHub control + docs layout (deduped). */
import "./docs/docs-header.css";
/* `.web-button.is-secondary` gradient border — home pricing + docs article chrome (deduped with docs/layout). */
import "./docs/docs-article-sections.css";
/* Marketing header surface + main bleed — must be last CSS import (wins over Tailwind layers). */
import "./marketing-header-chrome.css";

/* ─── Font Configuration ─── */

/** Body text — Inter (Clikkle's primary body font) */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Display / Headings — Poppins (geometric sans-serif substitute for Aeonik Pro) */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/** Monospace / Code — JetBrains Mono (substitute for Fira Code / Aeonik Fono) */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

/* ─── Metadata ─── */

export const metadata: Metadata = {
  title: "Clikkle — Build like a team of hundreds",
  description:
    "Clikkle is an open-source platform for building applications at any scale, using your preferred programming languages and tools.",
  keywords: [
    "Clikkle",
    "backend as a service",
    "open source",
    "BaaS",
    "serverless",
    "cloud functions",
    "authentication",
    "database",
    "storage",
    "realtime",
  ],
  openGraph: {
    title: "Clikkle — Build like a team of hundreds",
    description:
      "Clikkle is an open-source platform for building applications at any scale.",
    type: "website",
    locale: "en_US",
    siteName: "Clikkle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clikkle — Build like a team of hundreds",
    description:
      "Clikkle is an open-source platform for building applications at any scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#19191C",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ─── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-body" suppressHydrationWarning>
        {/*
          Matches Svelte boot: read `localStorage.theme` before paint so html class is correct.
          `beforeInteractive` injects into document head (Next.js).
        */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <ThemeProvider>
          <a className="skip-link sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-white focus:text-black focus:top-0 focus:start-0" href="#main-content">
            Skip to content
          </a>
          {/* <AnnouncementBar /> — Imagine / AI Builder banner; restore import above to show */}
          <SiteHeader />
          <div id="main-content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
