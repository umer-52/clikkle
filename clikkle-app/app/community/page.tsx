import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GithubIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Community | Clikkle',
    description: 'Join our vibrant community of developers. Ask questions, contribute solutions, and inspire others to improve the backend development experience.'
};

const metrics = [
    { value: '45,391', label: 'GitHub Stars' },
    { value: '7,028', label: 'Pull Requests' },
    { value: '18,521', label: 'Commits' },
    { value: '5,820', label: 'Issues' },
    { value: '315', label: 'Open Issues' },
    { value: '5,505', label: 'Closed Issues' },
    { value: '4,102', label: 'Forks' },
    { value: '850+', label: 'Contributors' },
];

const mockIssues = [
    { id: '1234', title: 'Add real-time support for GraphQL', repo: 'clikkle/clikkle', tags: ['enhancement', 'graphql'] },
    { id: '1235', title: 'Fix OAuth2 callback routing on mobile', repo: 'clikkle/clikkle', tags: ['bug', 'auth'] },
    { id: '1236', title: 'Improve cold start times for Node runtimes', repo: 'clikkle/clikkle', tags: ['enhancement', 'functions'] },
    { id: '1237', title: 'Console UI overflowing on small displays', repo: 'clikkle/console', tags: ['bug', 'ui'] },
];

const projects = [
    { title: 'Refetch.io', desc: 'Open-source alternative to Hacker News.', img: 'https://cloud.clikkle.io/v1/storage/buckets/thumbnails/files/68b984b5000e9ce4e9e6/preview?width=1280&output=webp&project=builtWithClikkle' },
    { title: 'Auth UI', desc: 'Authentication screens generator for any application.', img: 'https://cloud.clikkle.io/v1/storage/buckets/thumbnails/files/64803bb4f34eb4b05ee3/preview?width=800&output=webp&project=builtWithClikkle' },
];

export default function CommunityPage() {
    return (
        <main className="flex flex-col bg-[#19191C] overflow-hidden">
            {/* Hero Area */}
            <div className="relative pt-40 pb-20">
                <div className="absolute top-0 right-0 max-w-[50vw] md:max-w-none md:translate-x-1/4 -translate-y-1/4 opacity-50 Mix-blend-screen mix-blend-screen">
                    <img src="/clikkle/images/bgs/hero.png" alt="" className="w-full h-auto drop-shadow-2xl opacity-40 mix-blend-screen pointer-events-none" loading="lazy" />
                </div>
                
                <div className="container relative z-10 mx-auto">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <h1 className="text-display font-aeonik-pro text-white leading-tight">
                            Built by a community of 800+ contributors
                        </h1>
                        <p className="text-main-body text-white/60 font-medium text-lg max-w-2xl leading-relaxed mt-2">
                            Inspire and get inspired. Join Clikkle's community of maintainers
                            and contributors and help us make Clikkle better for developers
                            worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button asChild variant="outline" className="w-full sm:w-auto !border-[#5865F2] !bg-[#5865F2] !text-white hover:!border-[#5865F2] hover:!bg-[#5865F2]/90 hover:!text-white">
                                <Link href="https://discord.gg/clikkle" target="_blank">
                                    Join our Discord
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" className="w-full items-center sm:w-auto">
                                <Link href="https://github.com/clikkle" target="_blank" className="flex items-center gap-2">
                                    <GithubIcon className="web-btn-icon" aria-hidden />
                                    Star on GitHub
                                    <span className="bg-[#F5F5F7]/10 px-2 py-0.5 rounded text-sm ml-2">45K</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-32 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm">
                        {metrics.map((m, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="text-4xl font-aeonik-pro text-white font-medium">{m.value}</div>
                                <div className="text-sm font-medium text-white/50 tracking-wide uppercase">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Power of Open Source */}
            <div className="relative py-40 bg-[#19191C]">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2D63FF] opacity-20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#85DBD8] opacity-15 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
                    {/* Simulated Floating Heads using static layout */}
                    <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl opacity-80 mb-16">
                        {['1.png', '2.png', '3.png', '4.png', '5.png'].map((img, i) => (
                            <img key={i} src={`/images/pages/community/avatars/${img}`} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/10 shadow-xl bg-[#242427] inline-block" alt="Contributor" loading="lazy" />
                        ))}
                    </div>

                    <h2 className="text-display font-aeonik-pro text-white max-w-3xl leading-tight">
                        The power of open source benefits us all
                    </h2>
                    <p className="text-main-body text-white/60 font-medium text-lg mt-6 max-w-lg">
                        See contributors of Clikkle since 2019 and discover how you can
                        start contributing.
                    </p>
                    <Button asChild variant="secondary" className="mt-8">
                        <Link href="https://github.com/clikkle/clikkle/graphs/contributors" target="_blank">
                            View all contributors
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Get Involved */}
            <div className="py-32 bg-[#19191C]">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-4 max-w-lg mb-12">
                        <h2 className="text-display font-aeonik-pro text-white">Get involved</h2>
                        <p className="text-main-body text-white/60 font-medium">
                            With every contribution, Clikkle gets better for all of us. Start
                            contributing today.
                        </p>
                    </div>

                    <div className="bg-[#242427] border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-16 mb-24">
                        <div className="flex-[0.8] flex flex-col items-start gap-4">
                            <h3 className="text-2xl font-aeonik-pro text-white">Check our Open Issues</h3>
                            <p className="text-white/60">Anyone can join and help Clikkle become better.</p>
                            <Button asChild variant="secondary" className="mt-4">
                                <Link href="https://github.com/clikkle/clikkle/issues" target="_blank" className="flex items-center gap-2">
                                    <GithubIcon className="web-btn-icon" aria-hidden />
                                    View all Open Issues
                                </Link>
                            </Button>
                        </div>
                        <div className="flex-1 overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-white/50 text-sm font-medium">
                                        <th className="pb-4 font-normal">Issue #</th>
                                        <th className="pb-4 font-normal">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockIssues.map((issue) => (
                                        <tr key={issue.id} className="border-b border-white/5">
                                            <td className="py-4 text-white/50 pr-4 align-top">#{issue.id}</td>
                                            <td className="py-4 align-top">
                                                <div className="flex flex-col gap-2">
                                                    <div>
                                                        <a href={`https://github.com/${issue.repo}/issues/${issue.id}`} target="_blank" className="font-medium text-white hover:text-[#2D63FF] transition-colors">{issue.title}</a>
                                                        <span className="text-white/40 ml-2 text-sm hidden sm:inline-block">({issue.repo})</span>
                                                    </div>
                                                    <div className="flex gap-2 flex-wrap">
                                                        {issue.tags.map(t => (
                                                            <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-white/60 capitalize">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h4 className="text-xl font-aeonik-pro text-white mb-8">Other ways to help</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Create content', desc: 'Help others discover Clikkle with videos and blogs.'},
                            { title: 'Present at meetups', desc: 'Share your experience and represent Clikkle in public.'},
                            { title: 'Report bugs', desc: 'Find bugs and submit PRs to fix them.'},
                            { title: 'Submit new ideas', desc: 'Suggest features, integrations, or SDKs for our roadmap.'},
                            { title: 'Improve documentation', desc: 'Find improvements in our docs and improve accessibility.'},
                            { title: 'Helping others', desc: 'Support developers with their projects and contributions.'}
                        ].map((item, i) => (
                            <div key={i} className="bg-[#242427] border border-white/5 rounded-2xl p-8 hover:border-[#2D63FF]/50 transition-colors cursor-default">
                                <h5 className="text-white font-medium mb-2">{item.title}</h5>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inspire section (White theme inverted logic manually mapping to bg-[#EDEDF0]) */}
            <div className="bg-[#EDEDF0] py-32">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-6 mb-20">
                        <h2 className="text-display font-aeonik-pro text-[#19191C]">Inspire and get inspired</h2>
                        <p className="text-main-body text-[#434347] font-medium">
                            Visit our showcase website built with Clikkle to find inspiration for
                            your projects or to showcase what you have built.
                        </p>
                        <Button asChild variant="outline" className="mt-4 hover:!bg-black/5">
                            <Link href="https://builtwith.clikkle.com" target="_blank">
                                View all projects
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((p, i) => (
                            <Link key={i} href="#" target="_blank" className="bg-white rounded-[2rem] border border-black/5 overflow-hidden group shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-aeonik-pro text-[#19191C] mb-2">{p.title}</h3>
                                    <p className="text-[#434347] font-medium">{p.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visit the community */}
            <div className="bg-[#EDEDF0] py-20 pb-40">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
                        <div className="flex flex-col gap-6 max-w-sm">
                            <h2 className="text-display font-aeonik-pro text-[#19191C]">Visit the community</h2>
                            <p className="text-[#434347] font-medium text-lg leading-relaxed">
                                Discover Clikkle's community across platforms and join the fun.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
                            <Link href="#" className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:-translate-y-2 transition-transform flex flex-col gap-12 rotate-[3deg]">
                                <div className="w-12 h-12 bg-[#5865F2]/10 text-[#5865F2] rounded-full flex items-center justify-center">
                                    {/* Abstract discord logo */}
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
                                </div>
                                <div className="text-xl font-aeonik-pro mt-auto text-[#19191C]">45,391 members</div>
                            </Link>

                            <Link href="#" className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:-translate-y-2 transition-transform flex flex-col gap-12 -rotate-[2deg]">
                                <div className="w-12 h-12 bg-black/5 text-[#19191C] rounded-full flex items-center justify-center">
                                    <TwitterIcon className="w-6 h-6 stroke-[1.5px]" />
                                </div>
                                <div className="text-xl font-aeonik-pro mt-auto text-[#19191C]">95,120 followers</div>
                            </Link>
                            
                            <Link href="#" className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:-translate-y-2 transition-transform flex flex-col gap-12 rotate-[1deg]">
                                <div className="w-12 h-12 bg-[#333]/10 text-[#333] rounded-full flex items-center justify-center">
                                    <GithubIcon className="w-6 h-6 stroke-[1.5px]" />
                                </div>
                                <div className="text-xl font-aeonik-pro mt-auto text-[#19191C]">45K stargazers</div>
                            </Link>
                            
                            <Link href="#" className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:-translate-y-2 transition-transform flex flex-col gap-12 -rotate-[4deg]">
                                <div className="w-12 h-12 bg-[#FF0000]/10 text-[#FF0000] rounded-full flex items-center justify-center">
                                    <YoutubeIcon className="w-6 h-6 shadow-xl stroke-[1.5px]" />
                                </div>
                                <div className="text-xl font-aeonik-pro mt-auto text-[#19191C]">12.5K subscribers</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter section */}
            <div className="bg-[#EDEDF0] py-40 bg-gradient-to-t from-white to-[#EDEDF0]">
                <div className="container mx-auto">
                    <div className="bg-white rounded-[2rem] p-12 lg:p-16 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">
                        <div className="flex flex-col gap-6 relative z-10 max-w-lg">
                            <h2 className="text-3xl font-aeonik-pro text-[#19191C]">Clikkle insights</h2>
                            <p className="text-[#434347] font-medium leading-relaxed">
                                Sign up to our company blog and get the latest insights from
                                Clikkle. Learn more about engineering, product design,
                                building community, and tips & tricks for using Clikkle.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col justify-center">
                            <form className="flex flex-col gap-6 max-w-sm ml-auto w-full">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[#19191C]">Your name</label>
                                    <input id="name" type="text" placeholder="Enter your name" className="w-full bg-[#EDEDF0]/50 border-0 rounded-xl px-4 py-3 placeholder-black/30 text-[#19191C] font-medium focus:ring-2 focus:ring-[#2D63FF]/20" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[#19191C]">Your email</label>
                                    <input id="email" type="email" placeholder="Enter your email" className="w-full bg-[#EDEDF0]/50 border-0 rounded-xl px-4 py-3 placeholder-black/30 text-[#19191C] font-medium focus:ring-2 focus:ring-[#2D63FF]/20" required />
                                </div>
                                <Button type="submit" variant="outline" className="mt-2 !border-transparent !bg-[#19191C] !text-white shadow-xl hover:!border-transparent hover:!bg-black hover:!text-white">
                                    Sign up
                                </Button>
                            </form>
                        </div>
                        {/* Background flare illustration */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 to-transparent rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
