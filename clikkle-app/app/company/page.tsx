import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Company | Clikkle',
    description: 'At Clikkle, we aim to remove technical barriers with our backend solutions. Click here to learn more about our organization, its mission and goals.'
};

const topInvestors = [
    { name: 'Bessemer', logo: '/clikkle/images/investors/light/bessemer.svg', url: 'https://www.bvp.com/' },
    { name: 'Tiger Global', logo: '/clikkle/images/investors/light/tiger-global.svg', url: 'https://www.tigerglobal.com/' },
    { name: 'Ibex Investors', logo: '/clikkle/images/investors/light/ibex.svg', url: 'https://www.ibexinvestors.com/' },
    { name: 'Flybridge', logo: '/clikkle/images/investors/light/flybridge.svg', url: 'https://www.flybridge.com/' },
    { name: 'Seedcamp', logo: '/clikkle/images/investors/light/seedcamp.svg', url: 'https://seedcamp.com/' }
];

const angelInvestors = [
    { name: 'Aaron Applebaum', role: 'Partner', company: 'MizMaa', github: 'https://github.com/aapplbaum', twitter: 'https://twitter.com/aapplbaum' },
    { name: 'Ariel Maislos', role: 'Angel Investor', company: 'Former Apple IL CEO', github: 'https://github.com/arielmaislos', twitter: 'https://twitter.com/arielmaislos' },
    { name: 'Gilad Engel', role: 'Angel Investor', company: '' },
    { name: 'Krishna Visvanathan', role: 'Co-founder & Partner', company: 'Crane Venture Partners', github: 'https://github.com/KVCVP' },
    { name: 'Ameet Patel', role: 'Angel Investor', company: '', github: 'https://github.com/ameet-patel' },
    { name: 'Benno Jering', role: 'Partner', company: 'Redline Capital', github: 'https://github.com/bennojering/' },
    { name: 'James Lindenbaum', role: 'Co-founder', company: 'Heroku', github: 'https://github.com/jnl' },
    { name: 'Uri Boness', role: 'Co-Founder', company: 'Elastic', twitter: 'https://twitter.com/uboness' }
];

export default function CompanyPage() {
    return (
        <main className="flex flex-col bg-[#19191C] overflow-hidden">
            <img className="absolute top-0 left-0 w-auto opacity-30 md:opacity-100 mix-blend-screen max-w-[50vw]" src="/clikkle/images/pages/company/bg-left.png" alt="" aria-hidden="true" loading="lazy" />
            <img className="absolute top-0 right-0 w-auto opacity-30 md:opacity-100 mix-blend-screen max-w-[50vw]" src="/clikkle/images/pages/company/bg-right.png" alt="" aria-hidden="true" loading="lazy" />
            
            <div className="relative z-10 pt-40 pb-32">
                <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
                    <h1 className="text-display font-aeonik-pro text-white leading-tight">
                        Unleashing creativity and innovation in every creator
                    </h1>
                    <p className="text-main-body text-white/60 font-medium mt-6 text-xl max-w-3xl leading-relaxed">
                        Software development transforms our everyday lives, relying heavily
                        on the creativity and innovation of developers. At Clikkle, we
                        enable them to develop products the world loves by removing
                        technical barriers with our backend products.
                    </p>
                </div>
            </div>

            <div className="relative z-10 py-32 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="flex flex-col gap-8 items-start">
                        <h2 className="text-display font-aeonik-pro text-white">
                            Designed for and by developers
                        </h2>
                        <Button asChild variant="outline" className="!border-transparent !bg-white !text-black hover:!bg-white/90">
                            <Link href="https://clikkle.com/careers" target="_blank" rel="noopener noreferrer">
                                Join the team
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col gap-8 text-white/60 text-lg font-medium leading-relaxed">
                        <p>
                            At Clikkle it is our mission to eliminate friction and abstract
                            complexity for every creator. Giving developers all the tools they
                            need with the best experience possible to have all the capabilities
                            to create and innovate without limits and with minimum concerns.
                        </p>
                        <p>
                            We do this by building the most complete development platform
                            created for developers, backed by the open source community. A
                            platform that has all the solutions you need in one place, with
                            maximum flexibility and minimum friction. A platform that moves with
                            you on your journey, from ideation to scale. A platform that allows
                            you to succeed in the challenges of today, and those of tomorrow.
                        </p>
                        <p className="font-semibold text-white">Build like a team of hundreds.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#EDEDF0] py-40">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-display font-aeonik-pro text-[#19191C]">
                            Backed by top investors
                        </h2>
                        <p className="text-main-body text-[#434347] font-medium mt-6">
                            Clikkle is proudly backed by some of the top investors in the industry.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mb-32">
                        {topInvestors.map((investor, i) => (
                            <Link 
                                key={i} 
                                href={investor.url} 
                                target="_blank" 
                                className="bg-white rounded-3xl p-8 hover:-translate-y-1 transition-transform border border-black/5 shadow-sm min-w-[200px] flex items-center justify-center"
                            >
                                <img src={investor.logo} alt={investor.name} className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain" loading="lazy" />
                            </Link>
                        ))}
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-aeonik-pro text-[#19191C] mb-16">
                            Angel Investors
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                            {angelInvestors.map((angel, i) => (
                                <div key={i} className="flex flex-col text-[#19191C]">
                                    <h4 className="font-semibold text-lg">{angel.name}</h4>
                                    <p className="text-[#434347] font-medium mt-2">{angel.role}</p>
                                    {angel.company && <p className="text-[#434347] font-medium">{angel.company}</p>}
                                    <div className="mt-auto pt-6 flex gap-4">
                                        {angel.github && (
                                            <a href={angel.github} target="_blank" rel="noopener noreferrer" className="text-[#19191C]/50 hover:text-[#19191C] transition-colors">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                            </a>
                                        )}
                                        {angel.twitter && (
                                            <a href={angel.twitter} target="_blank" rel="noopener noreferrer" className="text-[#19191C]/50 hover:text-[#19191C] transition-colors">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.962-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-40 overflow-hidden bg-[#EDEDF0]">
                {/* Pre-footer background gradient override from previous components used in marketing */}
                <img src="/clikkle/images/bgs/pre-footer.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] min-w-[1200px] w-[200vw] opacity-30 z-0 pointer-events-none" alt="" loading="lazy" />
                
                <div className="container relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
                    <h2 className="text-display font-aeonik-pro text-[#19191C] mb-6">Join the team</h2>
                    <p className="text-[#19191C]/60 text-lg font-medium mb-10">
                        Find your next career at Clikkle and join a team of remote workers.
                    </p>
                    <Button asChild variant="outline" className="!border-black/5 !bg-white !text-black shadow-sm hover:!bg-white/90">
                        <Link href="https://clikkle.com/careers" target="_blank" rel="noopener noreferrer">
                            Careers
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
