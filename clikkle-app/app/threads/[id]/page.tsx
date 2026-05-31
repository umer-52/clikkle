import Link from "next/link";
import { ArrowLeft, ChevronUp } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { MOCK_THREADS, getThread, getRelatedThreads } from "@/lib/threads-data";
import "./../threads.css";

// Required for static export: pre-generate all thread pages at build time
export function generateStaticParams() {
  return MOCK_THREADS.map((thread) => ({
    id: thread.$id,
  }));
}

// Formats precise UTC dates (e.g. "20 May, 2026, 10:30")
function formatTimestamp(dateStr: string): string {
  try {
    const dt = new Date(dateStr);
    const day = dt.getDate();
    const month = dt.toLocaleString("en-US", { month: "short" });
    const year = dt.getFullYear();
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedHours = hours < 10 ? `0${hours}` : hours;

    return `${day} ${month}, ${year}, ${paddedHours}:${paddedMinutes}`;
  } catch {
    return dateStr;
  }
}

// Simple Markdown content parser (server-side)
function MessageContent({ content }: { content: string }) {
  if (!content) return null;

  // Split by code blocks
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-3 leading-relaxed text-secondary/95 text-sm md:text-base font-normal">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
          const code = match ? match[2] : part.slice(3, -3);

          return (
            <pre
              key={index}
              className="bg-neutral-950/80 p-4 rounded-xl text-xs overflow-x-auto border border-white/5 my-3 text-left font-mono"
            >
              <code className="text-gray-300 block">{code.trim()}</code>
            </pre>
          );
        }

        const lines = part.split("\n");
        return (
          <div key={index} className="space-y-2">
            {lines.map((line, lineIdx) => {
              if (!line.trim()) return <div key={lineIdx} className="h-2" />;

              // Parse **bold** and `inline code`
              const segments = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
              const parsed = segments.map((seg, segIdx) => {
                if (seg.startsWith("**") && seg.endsWith("**")) {
                  return (
                    <strong key={segIdx} className="font-semibold text-white">
                      {seg.slice(2, -2)}
                    </strong>
                  );
                }
                if (seg.startsWith("`") && seg.endsWith("`")) {
                  return (
                    <code key={segIdx} className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono font-normal text-white">
                      {seg.slice(1, -1)}
                    </code>
                  );
                }
                return seg;
              });

              return <p key={lineIdx} className="u-break-word">{parsed}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const thread = getThread(id);
  if (!thread) {
    return {
      title: "Thread Not Found | Clikkle Support Threads",
    };
  }
  return {
    title: `${thread.title} | Clikkle Support Threads`,
    description: thread.seo_description || thread.content.slice(0, 150),
  };
}

export default async function ThreadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: threadId } = await params;
  const thread = getThread(threadId);
  const relatedThreads = thread ? getRelatedThreads(thread, 3) : [];

  if (!thread) {
    return (
      <div className="container relative z-10 px-4 py-24 mx-auto max-w-3xl text-center">
        <h1 className="text-2xl font-semibold mb-4 text-white">Thread not found</h1>
        <p className="text-secondary mb-8">The support thread you are looking for does not exist or has been deleted.</p>
        <Link href="/threads" className="web-button is-primary px-6 py-2.5 rounded-xl font-medium">
          Back to Threads
        </Link>
      </div>
    );
  }

  const discordLink = `https://discord.com/channels/564160730845151244/${thread.discord_id}`;

  return (
    <>
      <main className="relative min-h-screen text-white overflow-hidden pb-12 pt-16">
        {/* Glow meshes */}
        <div className="threads-bg-red" />
        <div className="threads-bg-green" />

        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
          {/* Back button and page title section */}
          <div className="border-b border-white/5 py-8 mb-8">
            <Link
              href="/threads"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to support threads</span>
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-2">
              <div className="min-w-0">
                <h1 className="text-xl md:text-3xl font-medium text-white leading-tight u-break-word">
                  {thread.title}
                </h1>

                {/* Subheader tags */}
                <ul className="flex flex-wrap items-center gap-2 mt-4">
                  <li className="flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-secondary text-xs">
                    <ChevronUp className="size-3 text-accent" />
                    <span>{thread.vote_count} votes</span>
                  </li>
                  {thread.tags?.map((tag) => (
                    <li key={tag} className="text-caption bg-white/5 px-2.5 py-1 rounded-md text-secondary/90 border border-white/5">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View on Discord Button */}
              <div className="shrink-0">
                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="web-button is-primary px-5 py-2.5 rounded-xl font-medium inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-black/10"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>View on Discord</span>
                </a>
              </div>
            </div>
          </div>

          {/* Two column detail layout */}
          <div className="threads-detail-grid">
            {/* Conversation Flow */}
            <div className="threads-detail-messages">
              {thread.messages.map((message, idx) => {
                const isFirst = idx === 0;
                return (
                  <div
                    key={message.$id}
                    className="web-card is-normal border border-white/5 rounded-2xl p-5 md:p-6 bg-white/[0.02]"
                  >
                    {/* Message Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 shrink-0 rounded-full overflow-hidden border border-white/15">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={message.author_avatar}
                            alt={message.author}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">{message.author}</span>
                          {message.role && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded font-medium tracking-wide uppercase ${
                                message.role === "support"
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : message.role === "community"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : "bg-white/10 text-secondary border border-white/5"
                              }`}
                            >
                              {message.role}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-secondary text-xs">{formatTimestamp(message.timestamp)}</span>
                    </div>

                    {/* Content */}
                    <MessageContent content={message.message} />

                    {/* Special TL;DR summary box on original post */}
                    {isFirst && thread.tldr?.trim() && (
                      <div className="web-inline-info bg-accent/10 border border-accent/20 rounded-xl p-4 mt-6">
                        <div className="text-sm font-semibold text-accent mb-1.5 tracking-wide uppercase">
                          TL;DR
                        </div>
                        <p className="text-secondary text-sm font-normal leading-relaxed">{thread.tldr}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Reply Card Box */}
              <div className="web-card is-normal border border-white/5 rounded-2xl p-6 bg-white/[0.02] text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Join the discussion</h3>
                  <p className="text-secondary text-sm mt-1">
                    Reply to this support thread or ask new questions by joining our Discord server.
                  </p>
                </div>
                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="web-button is-primary px-5 py-2.5 rounded-xl font-medium inline-flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Reply on Discord</span>
                </a>
              </div>
            </div>

            {/* Sidebar Recommended Threads */}
            <div className="threads-detail-sidebar">
              {relatedThreads.length > 0 && (
                <>
                  <h2 className="text-caption font-aeonik-fono text-primary uppercase tracking-wider text-xs">
                    Recommended threads
                  </h2>
                  <ul className="threads-sidebar-list">
                    {relatedThreads.map((relThread) => (
                      <li key={relThread.$id} className="threads-sidebar-item">
                        <Link href={`/threads/${relThread.$id}`} className="block">
                          <h4 className="text-sm font-medium text-white hover:text-accent transition-colors leading-snug">
                            {relThread.title.length > 50
                              ? relThread.title.slice(0, 50) + "..."
                              : relThread.title}
                          </h4>
                          <p className="text-secondary text-xs mt-1.5 leading-relaxed">
                            {relThread.content.length > 120
                              ? relThread.content.slice(0, 120) + "..."
                              : relThread.content}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter footerNavNoTopBorder />
    </>
  );
}
