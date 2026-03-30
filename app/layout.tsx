import type { Metadata, Viewport } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { AnnouncementBar } from "@/components/announcement-bar";
import "./globals.css";

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
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="antialiased font-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AnnouncementBar />
        <SiteHeader />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
