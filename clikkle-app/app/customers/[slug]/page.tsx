import { notFound } from 'next/navigation';
import { getCustomerStoryBySlug, getCustomerStorySlugs } from '@/lib/customers';
import { MarkdocRenderer } from '@/components/markdoc/MarkdocRenderer';
import { SiteFooter } from '@/components/site-footer';
import { Breadcrumbs } from '@/components/blog/breadcrumbs';
import { PostMeta } from '@/components/blog/post-meta';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { customerStories } from '../customers-data';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getCustomerStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CustomerStoryPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const story = getCustomerStoryBySlug(resolvedParams.slug);

  if (!story) {
    notFound();
  }

  // Use the data extracted from frontmatter
  const authorData = {
    name: story.author 
      ? story.author.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : 'Clikkle Team',
    role: 'Editorial',
  };

  const currentURL = `https://clikkle.com/customers/${resolvedParams.slug}`;

  // Get 3 "Read Next" stories — compare against the href path since
  // customerStories.slug ("radar") differs from the route param ("customer-story-radar")
  const currentPath = `/customers/${resolvedParams.slug}`;
  const readNextStories = customerStories
    .filter((s) => s.href !== currentPath)
    .slice(0, 3);

  return (
    <>
      <main className="min-h-screen pb-20" style={{ paddingTop: '160px' }}>
        <div className="pt-4 lg:pt-8">
          <div className="container mx-auto px-4 lg:px-6 max-w-[76rem]">
            <Breadcrumbs title={story.title} />
            <article className="grid grid-cols-1 gap-4 lg:grid-cols-12 mb-20 relative">
              <div className="border-smooth md:border-r md:border-white/[0.08] md:pr-12 lg:col-span-9 mb-16 lg:mb-0">
                <PostMeta 
                  title={story.title}
                  date={story.date}
                  timeToRead={story.timeToRead?.toString()}
                  description={story.description}
                  currentURL={currentURL}
                  authorData={authorData}
                />
                
                {story.cover && (
                  <div className="web-media my-8! aspect-[16/9] w-full mt-8 rounded-[1rem] overflow-hidden border border-white/[0.08]">
                    <img src={story.cover} 
                      alt={story.title}
                      className="block aspect-[16/9] w-full h-full object-cover shadow-[0_4px_30px_rgba(0,0,0,0.1)]" loading="lazy" />
                  </div>
                )}

                <div className="web-article-content prose prose-invert prose-lg max-w-none mt-12 flex flex-col gap-8 prose-h2:text-3xl prose-h2:font-medium prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-medium prose-h3:mb-3 prose-p:text-secondary prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-img:rounded-xl">
                  <MarkdocRenderer content={story.content} />
                </div>
              </div>

              {/* Table of Contents Wrapper */}
              <TableOfContents />
            </article>
          </div>
        </div>

        <div className="border-smooth border-t border-white/[0.08] pt-10 mt-10">
          <div className="py-16">
            <div className="container mx-auto px-4 lg:px-6 max-w-[76rem]">
              <h3 className="text-label text-primary font-medium mb-8">Read next</h3>
              <section className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {readNextStories.map((post) => (
                    <Link href={post.href} key={post.slug} className="group flex flex-col gap-4">
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                        <img src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-caption text-secondary flex items-center gap-2">
                          <time dateTime={post.date}>{post.date}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="text-main-body font-medium text-primary group-hover:text-blue-500 transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
