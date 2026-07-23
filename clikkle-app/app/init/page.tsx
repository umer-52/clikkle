import Link from "next/link";
import { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { InitLockup } from "@/components/init-lockup";
import { CountdownGrid } from "@/components/init-countdown-grid";
import { Day } from "@/components/init-day";
import "./init.css";

export const metadata: Metadata = {
  title: "Init - Clikkle",
  description: "The start of something new.",
};

const baseDate = new Date("2025-05-19T07:00:00.000Z");
const featureBaseDate = new Date("2025-05-19T13:00:00.000Z");

type ResourceLink = {
  type: "Blog" | "Docs" | "Article";
  title: string;
  url: string;
  label?: string;
};

type MediaLink = {
  title: string;
  url: string;
  poster: string;
  type: "video" | "announcement" | "discord";
};

type InitDay = {
  title: string;
  release: Date;
  illustration: string;
  illustrationWidth: number;
  illustrationHeight: number;
  description: string;
  url: string;
  content: ResourceLink[];
  announcementVideo?: MediaLink;
  links?: MediaLink[];
};

const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

const formatShortDate = (date: Date) =>
  new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);

const initDates = `${formatShortDate(baseDate)} - ${addDays(featureBaseDate, 4).getDate()}`;

const illustration = (id: string) => `/clikkle/images/init/illustrations/${id}.avif`;
const squareIllustration = { illustrationWidth: 645, illustrationHeight: 643 };
const formatsIllustration = { illustrationWidth: 645, illustrationHeight: 529 };

const days: InitDay[] = [
  {
    title: "Sites",
    release: baseDate,
    illustration: illustration("sites"),
    ...squareIllustration,
    description:
      "Introducing the open-source Vercel alternative. A new Clikkle product that lets you deploy and host your websites and web apps right inside Clikkle.",
    url: "/blog/post/announcing-clikkle-sites",
    content: [
      {
        title: "Announcing Clikkle Sites",
        url: "/blog/post/announcing-clikkle-sites",
        type: "Blog",
      },
      {
        title: "How to host SSR web apps with Clikkle Sites",
        url: "/blog/post/host-ssr-web-apps-sites",
        type: "Blog",
      },
      {
        title: "Get started with Clikkle Sites",
        url: "/docs/products/sites",
        type: "Docs",
        label: "Visit docs",
      },
    ],
    announcementVideo: {
      url: "https://www.youtube.com/watch?v=VtDe6hDw91k",
      title: "Announcement Video",
      poster: "/clikkle/images/init/poster.avif",
      type: "announcement",
    },
    links: [
      {
        title: "Product demo",
        type: "video",
        poster: "/clikkle/images/init/posterDeploy.avif",
        url: "https://youtu.be/VtDe6hDw91k",
      },
      {
        title: "YouTube Live",
        type: "video",
        poster: "/clikkle/images/init/posterFutureOfClikkle.avif",
        url: "https://www.youtube.com/watch?v=1g8tuogsp7A",
      },
    ],
  },
  {
    title: "Flutter Web",
    release: addDays(featureBaseDate, 1),
    illustration: illustration("flutter"),
    ...squareIllustration,
    description:
      "Clikkle and Flutter work beautifully together, and now you can deploy Flutter web apps directly from Clikkle Sites.",
    url: "/blog/post/hosting-flutter-web",
    content: [
      {
        title: "How to set up the Flutter starter template on Clikkle Sites",
        url: "/blog/post/flutter-starter-sites",
        type: "Blog",
      },
      {
        title: "Building with Clikkle Sites templates",
        url: "/blog/post/building-with-sites-templates",
        type: "Blog",
      },
      {
        title: "Hosting for Flutter Web",
        url: "/docs/products/sites/quick-start/flutter",
        type: "Docs",
        label: "Visit docs",
      },
    ],
  },
  {
    title: "Dev Keys",
    release: addDays(featureBaseDate, 2),
    illustration: illustration("devkeys"),
    ...squareIllustration,
    description:
      "Introducing Dev Keys. A Clikkle feature that lets you bypass rate limits during local development for fast, uninterrupted building.",
    url: "/blog/post/announcing-dev-keys",
    content: [
      {
        title: "Improve your Clikkle developer experience with Dev Keys",
        url: "/blog/post/improve-devex-dev-keys",
        type: "Blog",
      },
      {
        title: "Dev Keys",
        url: "/docs/advanced/platform/dev-keys",
        type: "Docs",
        label: "Visit docs",
      },
    ],
  },
  {
    title: "Image formats",
    release: addDays(featureBaseDate, 3),
    illustration: illustration("formats"),
    ...formatsIllustration,
    description:
      "Clikkle Storage now supports HEIC and AVIF, giving you more tools to manage, transform, and serve images the way your product needs.",
    url: "/blog/post/new-image-formats-avif-heic",
    content: [
      {
        title: "Modern image formats now in Clikkle",
        url: "/blog/post/new-image-formats-avif-heic",
        type: "Blog",
      },
      {
        title: "How to use AVIF in Storage",
        url: "/blog/post/avif-in-storage",
        type: "Blog",
      },
      {
        title: "New image formats",
        url: "/docs/products/storage/images",
        type: "Docs",
        label: "Visit docs",
      },
    ],
    announcementVideo: {
      url: "https://www.youtube.com/watch?v=2KAwVoJh8a8",
      title: "Announcement Video",
      poster: "/clikkle/images/init/posterNewImageFormats.avif",
      type: "announcement",
    },
    links: [
      {
        title: "YouTube Live",
        type: "video",
        poster: "/clikkle/images/init/posterIndustryPanel.avif",
        url: "https://www.youtube.com/watch?v=PfnKyXo2k6o",
      },
    ],
  },
  {
    title: "File Tokens",
    release: addDays(featureBaseDate, 4),
    illustration: illustration("tokens"),
    ...squareIllustration,
    description:
      "File Tokens let you share files easily and securely without modifying permissions or changing project access.",
    url: "/blog/post/announcing-file-tokens",
    content: [
      {
        title: "Announcing File Tokens: secure file sharing without the hassle",
        url: "/blog/post/announcing-file-tokens",
        type: "Blog",
      },
      {
        title: "CSR vs SSG vs SSR: what they are and how to choose",
        url: "/blog/post/csr-ssg-ssr",
        type: "Blog",
      },
      {
        title: "File Tokens",
        url: "/docs/products/storage/file-tokens",
        type: "Docs",
        label: "Visit docs",
      },
    ],
    announcementVideo: {
      url: "https://www.youtube.com/watch?v=eiwCCjBD3cw",
      title: "Announcement Video",
      poster: "/clikkle/images/init/posterFileTokens.avif",
      type: "announcement",
    },
    links: [
      {
        title: "YouTube Live",
        type: "video",
        poster: "/clikkle/images/init/eventClosingParty.avif",
        url: "https://www.youtube.com/watch?v=1gvjqV1nq-c",
      },
    ],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="init-badge">{children}</span>;
}

function Giveaway() {
  return (
    <section className="container mx-auto px-4 init-giveaway my-16">
      <div className="init-giveaway-copy">
        <img
          src="/clikkle/images/init/init-giveaway.avif"
          alt="Init giveaway"
          className="init-giveaway-image"
        />
        <div>
          <h2 className="text-3xl text-primary font-aeonik-pro mb-4 font-bold">
            Get a ticket and
            <br />
            enter our giveaway
          </h2>
          <p className="text-secondary text-main-body mb-6 text-gray-400">
            Create, customize and share your ticket for the chance to win exclusive Init swag.
          </p>
          <Link href="/init/tickets/customize" className="web-button is-secondary border border-white/20 bg-white/5 px-6 py-2 rounded-lg inline-block text-white hover:bg-white/10 transition-colors">
            Claim your ticket
          </Link>
        </div>
      </div>

      <div className="init-ticket-stack" aria-hidden="true">
        {[0, 1, 2].map((ticket) => (
          <div key={ticket} className={`init-ticket init-ticket-${ticket + 1}`}>
            <div className="init-ticket-url">https://clikkle.com/init/ticket...</div>
            <div className="init-ticket-panel">
              <img src="/images/logos/clikkle-header-wordmark.svg" alt="" className="init-ticket-logo" />
              <div className="init-ticket-lockup">
                <img src="/clikkle/images/init/lockup.avif" alt="" />
              </div>
              <div className="init-ticket-person">
                <img src="/clikkle/images/init/avatar.avif" alt="" />
                <div>
                  <strong>
                    Walter<span>_</span>
                  </strong>
                  <small>Software Developer</small>
                </div>
              </div>
              <div className="init-ticket-strip">
                <span>Init / May 19 - 23</span>
                <span>
                  Ticket <b>#</b>123456
                </span>
              </div>
              <div className="init-ticket-dots" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function InitPage() {
  return (
    <>
      <main className="init-page">
        {/* Hero */}
        <section className="container init-hero">
          <Badge>{initDates}</Badge>

          {/* Lockup — uses init.css .init-lockup which caps at 750px */}
          <div className="init-lockup">
            <InitLockup />
          </div>

          <div className="init-hero-content">
            <p className="text-description text-secondary">
              Join us at Clikkle for another week of exciting new announcements and events.
            </p>
            <nav className="init-hero-actions" aria-label="Init actions">
              <Link href="/init/tickets/customize" className="web-button is-primary">
                <img src="/clikkle/images/init/github-icon.svg" alt="" aria-hidden="true" />
                Claim your ticket
              </Link>
              <Link
                href="https://www.producthunt.com/products/clikkle"
                className="web-button is-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support on Product Hunt
              </Link>
            </nav>
          </div>
        </section>

        {/* Day countdown grid */}
        <CountdownGrid days={days} />

        {/* Feature day cards */}
        <div className="container init-days">
          {days.map((day, index) => (
            <Day key={day.title} {...day} index={index + 1} />
          ))}
        </div>

        <Giveaway />
      </main>

      <div className="container init-footer-frame">
        <SiteFooter />
      </div>
    </>
  );
}
