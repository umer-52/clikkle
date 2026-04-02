import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { integrations, Integration } from '@/lib/integrations-data';
import { GithubIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Integrations | Clikkle',
    description: 'Connect your favorite apps to Clikkle for a unified tech stack. Explore the Clikkle catalog: a marketplace to find integrations for your projects.'
};

export default function IntegrationsPage() {
    // Unique categories and platforms
    const categories = Array.from(new Set(integrations.map(i => i.category))).filter(Boolean);
    const platforms = Array.from(new Set(integrations.flatMap(i => i.platform || []))).filter(Boolean);
    const featuredIntegrations = integrations.filter(i => i.featured);

    return (
        <main className="flex flex-col bg-[#19191C] overflow-hidden min-h-screen">
            {/* Hero Section */}
            <header className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#2D63FF]/10 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-start gap-6 max-w-2xl">
                        <div className="text-sm font-bold tracking-widest text-white/50 uppercase">
                            Integrations<span className="text-[#2D63FF]">_</span>
                        </div>
                        <h1 className="text-display font-aeonik-pro text-white leading-tight">
                            Discover infinite possibilities
                        </h1>
                        <p className="text-main-body text-white/60 font-medium text-lg leading-relaxed">
                            Find your favourite apps to integrate with your projects in Clikkle's marketplace.
                        </p>
                    </div>
                </div>

                {/* Abstract graphic */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] opacity-20 pointer-events-none hidden lg:block">
                    <div className="w-full aspect-square border-[40px] border-white/10 rounded-[3rem] rotate-[15deg]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square border-[40px] border-white/5 rounded-[2rem] rotate-[-5deg]"></div>
                </div>
            </header>

            <div className="py-20 bg-[#19191C] border-t border-white/10">
                <div className="container mx-auto lg:grid lg:grid-cols-[240px_1fr] gap-16 items-start">
                    
                    {/* Sidebar / Filters */}
                    <aside className="hidden lg:flex flex-col gap-12 sticky top-32">
                        {/* Search could go here if client-side */}
                        
                        <div className="flex flex-col gap-4">
                            <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase">Platforms</h2>
                            <ul className="flex flex-wrap gap-2">
                                <li>
                                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer">All</span>
                                </li>
                                {platforms.map(p => (
                                    <li key={p}>
                                        <span className="bg-[#242427] text-white hover:bg-[#2C2C30] border border-white/10 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors max-w-[150px] truncate block" title={p}>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase">Categories</h2>
                            <ul className="flex flex-col gap-3">
                                {categories.map(c => (
                                    <li key={c}>
                                        <a href={`#${c.toLowerCase()}`} className="text-white/60 hover:text-white font-medium transition-colors capitalize">{c.replace('-', ' ')}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Content Section */}
                    <section className="flex flex-col gap-24">
                        
                        {/* Featured */}
                        {featuredIntegrations.length > 0 && (
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-aeonik-pro text-white">Featured</h2>
                                    <p className="text-white/50">Top recommended integrations</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {featuredIntegrations.map((item, i) => (
                                        <Link key={i} href={`/integrations/${item.slug}`} className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video flex flex-col justify-end p-8 bg-[#242427]">
                                            {item.cover && (
                                                <img src={item.cover} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" loading="lazy" />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                                            
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-white p-2">
                                                    {item.product?.avatar ? (
                                                        <img src={item.product.avatar} alt={item.product.vendor} className="w-full h-full object-contain" loading="lazy" />
                                                    ) : (
                                                        <div className="w-full h-full bg-gray-200 rounded-md" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-aeonik-pro text-xl">{item.title}</span>
                                                    <span className="text-white/60 text-sm capitalize">{item.category}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Category Sections */}
                        {categories.map(category => {
                            const categoryItems = integrations.filter(i => i.category === category);
                            if (categoryItems.length === 0) return null;

                            return (
                                <div key={category} id={category.toLowerCase()} className="flex flex-col gap-8 scroll-mt-32">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl font-aeonik-pro text-white capitalize">{category.replace('-', ' ')}</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {categoryItems.map((item, i) => (
                                            <Link key={i} href={`/integrations/${item.slug}`} className="bg-[#242427] hover:bg-[#2C2C30] border border-white/10 hover:border-white/20 rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="w-14 h-14 bg-white rounded-2xl p-2.5 shadow-sm">
                                                        {item.product?.avatar ? (
                                                            <img src={item.product.avatar} alt={item.product.vendor} className="w-full h-full object-contain" loading="lazy" />
                                                        ) : (
                                                            <div className="w-full h-full bg-gray-200 rounded-lg" />
                                                        )}
                                                    </div>
                                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.5 5.5L18.5 18.5M18.5 18.5V7M18.5 18.5H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <h3 className="text-xl font-aeonik-pro text-white line-clamp-1">{item.title}</h3>
                                                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </div>

            {/* Bottom CTA Block */}
            <div className="bg-[#19191C] pt-24 pb-32 border-t border-white/5 relative z-10">
                <div className="container mx-auto">
                    <div className="max-w-2xl text-center mx-auto flex flex-col gap-6 items-center">
                        <h2 className="text-display font-aeonik-pro text-white">Become a Technology Partner</h2>
                        <p className="text-main-body text-white/60 font-medium leading-relaxed">
                            Join our Technology Partners program to integrate your solutions with
                            Clikkle's API, enhancing functionality and expanding your reach.
                        </p>
                        <Button asChild variant="outline" className="mt-6 !border-transparent !bg-white !text-black hover:!bg-white/90">
                            <Link href="#">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
