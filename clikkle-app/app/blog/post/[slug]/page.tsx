import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, featuredPost, getAuthor, formatBlogDate } from '@/lib/blog-data';
import Link from 'next/link';

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allPosts = [featuredPost, ...blogPosts];
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Clikkle Blog',
    };
  }

  return {
    title: `${post.title} | Clikkle Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default function BlogPostPage({ params }: PostPageProps) {
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const author = getAuthor(post.author);

  return (
    <main className="flex flex-col bg-white">
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 text-center">
            <div className="flex justify-center items-center gap-2 mb-6 text-sm text-[#434347] font-medium">
                <span className="uppercase tracking-wider font-aeonik-fono bg-[#F5F5F7] px-3 py-1 rounded-full">
                    {post.category}
                </span>
                <span>•</span>
                <span>{formatBlogDate(post.date)}</span>
                <span>•</span>
                <span>{post.timeToRead} min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-aeonik-pro text-[#19191C] leading-tight mb-8 text-balance">
                {post.title}
            </h1>
            
            {author && (
                <div className="flex items-center justify-center gap-4">
                    <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full border border-[#E4E4E7]" loading="lazy" />
                    <div className="text-left">
                        <p className="font-semibold text-[#19191C]">{author.name}</p>
                        <p className="text-sm text-[#434347]">{author.role}</p>
                    </div>
                </div>
            )}
        </header>

        <img src={post.cover} alt={post.title} className="w-full h-auto rounded-3xl mb-16 shadow-xl object-cover aspect-video" loading="lazy" />

        <div className="prose prose-lg md:prose-xl prose-slate max-w-[700px] mx-auto prose-headings:font-aeonik-pro prose-p:text-[#434347] prose-a:text-[#2D63FF]">
            <p className="lead text-2xl text-[#19191C] font-medium leading-relaxed mb-8">
                {post.description}
            </p>
            
            {/* Mock content since we don't have full markdown files for the 20 posts */}
            <p>
                In the ever-evolving landscape of software development, keeping up with the latest tools and practices is essential. {post.title} represents a significant step forward in our mission to empower developers.
            </p>
            <h2>Why this matters</h2>
            <p>
                As applications grow more complex, the need for robust, scalable infrastructure becomes paramount. We've seen firsthand how the right tools can accelerate development cycles from months to days. This release addresses several core challenges developers face when building at scale.
            </p>
            <ul>
                <li>Improved performance across global edge networks</li>
                <li>Enhanced developer experience with intuitive APIs</li>
                <li>Seamless integration with your existing modern tech stack</li>
            </ul>
            <p>
                Whether you're building a side project or an enterprise application, giving developers the freedom to choose their tools without sacrificing reliability is our top priority.
            </p>
            <h2>Looking ahead</h2>
            <p>
                We're incredibly excited to see what the community builds with these new capabilities. As always, our roadmap is largely driven by your feedback, so please don't hesitate to share your thoughts on our Discord community or via GitHub discussions.
            </p>
            <p>
                Happy coding!
            </p>
        </div>

        <hr className="my-16 border-[#E4E4E7]" />

        <div className="flex justify-between items-center max-w-[700px] mx-auto">
            <Link href="/blog" className="text-[#19191C] font-medium hover:text-[#2D63FF] transition-colors flex items-center gap-2">
                ← Back to Blog
            </Link>
        </div>
      </article>
    </main>
  );
}
