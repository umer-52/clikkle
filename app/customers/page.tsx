import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "How Radar scaled media curation while saving $1M with Clikkle Cloud",
    excerpt: "Learn how the team behind Radar handled insane scaling thresholds on a tight budget.",
    href: "https://clikkle.com/blog/post/customer-story-radar",
    date: "Sep 25, 2025",
    readTime: "6 min read",
    author: "Aditya Oberai",
  },
  {
    title: "Simplifying social media management with automation and AI with StoreAlert and Clikkle",
    excerpt: "StoreAlert deployed their Next.js scale AI platform atop Clikkle and saved hundreds of man hours.",
    href: "https://clikkle.com/blog/post/customer-story-socialaize",
    date: "Aug 22, 2025",
    readTime: "6 min read",
    author: "Aditya Oberai",
  },
  {
    title: "Empowering Shopify merchants with real-time store monitoring using StoreAlert",
    excerpt: "Building high-performance e-commerce integrations with Clikkle Realtime and Databases.",
    href: "https://clikkle.com/blog/post/customer-story-storealert",
    date: "Feb 20, 2025",
    readTime: "6 min read",
    author: "Aditya Oberai",
  },
  {
    title: "Pioneering asset management solutions for the circular economy with UNDO",
    excerpt: "Scaling sustainable supply chain ecosystems safely using Clikkle's robust serverless architecture.",
    href: "https://clikkle.com/blog/post/customer-stories-undo",
    date: "Jul 9, 2024",
    readTime: "6 min read",
    author: "Aditya Oberai",
  },
];

export default function CustomersPage() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden container mx-auto">
      {/* Background Lighting Effect */}
      <div
        className={
          "animate-lighting absolute top-0 right-0 -z-10 h-[600px] w-full translate-y-[-20%] translate-x-[10%] rotate-25 blur-[120px] bg-[image:radial-gradient(ellipse_1200px_300px_at_50%_0%,_rgba(253,_54,_110,_0.1)_0%,_rgba(253,_54,_110,_0)_70%)] opacity-30 pointer-events-none"
        }
      ></div>

      <div className="max-w-4xl animate-fade-in mx-auto px-4 md:px-0">
        <div className="mb-16">
          <span className="text-caption font-medium uppercase tracking-widest text-primary bg-white/5 py-1.5 px-3 rounded-full border border-subtle backdrop-blur-md mb-8 inline-block">
            Customer Stories
          </span>
          <h1 className="font-aeonik-pro text-transparent bg-clip-text bg-gradient-to-rp from-white to-white/70 text-5xl md:text-7xl mb-6">
            Read what developers are saying
          </h1>
          <p className="text-body font-medium text-secondary max-w-2xl">
            Learn more about how other developers have built successful applications while relying on Clikkle.
          </p>
        </div>

        <div className="grid gap-6">
          {stories.map((story, idx) => (
            <Link
              key={idx}
              href={story.href}
              className="group block rounded-2xl border border-smooth bg-[rgba(25,25,28,0.5)] backdrop-blur-md p-8 transition-all hover:bg-[rgba(25,25,28,0.8)] hover:border-accent"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-caption text-secondary mb-4">
                    <span className="font-medium text-primary">{story.author}</span>
                    <span>&bull;</span>
                    <span>{story.date}</span>
                    <span>&bull;</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h2 className="text-title text-primary font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 mb-3 transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-sub-body text-secondary max-w-2xl">
                    {story.excerpt}
                  </p>
                </div>
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-smooth group-hover:bg-white/10 group-hover:border-subtle transition-all md:mt-2">
                  <ArrowRight className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <Link href="https://clikkle.com/blog/category/customer-stories" className="web-button is-secondary group flex items-center gap-2">
                 <span className="text">Older Stories</span>
                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
    </div>
  );
}
