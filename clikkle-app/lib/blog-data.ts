export interface Author {
  name: string;
  slug: string;
  role: string;
  avatar: string;
  href: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  cover: string;
  timeToRead: number;
  author: string;
  category: string;
  slug: string;
  href: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
}

export const authors: Author[] = [
  {
    name: 'Aditya Oberai',
    slug: 'aditya-oberai',
    role: 'Developer Relations Lead',
    avatar: '/clikkle/images/avatars/aditya.png',
    href: '/blog/author/aditya-oberai',
  },
  {
    name: 'Aishwari Pahwa',
    slug: 'aishwari',
    role: 'Growth Marketer',
    avatar: '/clikkle/images/avatars/aishwari.png',
    href: '/blog/author/aishwari',
  },
  {
    name: 'Atharva Deosthale',
    slug: 'atharva',
    role: 'Developer Advocate',
    avatar: '/clikkle/images/avatars/atharva.png',
    href: '/blog/author/atharva',
  },
  {
    name: 'Matej Bačo',
    slug: 'matej-baco',
    role: 'Software Engineer',
    avatar: '/clikkle/images/avatars/matej.png',
    href: '/blog/author/matej-baco',
  },
  {
    name: 'Eldad Fux',
    slug: 'eldad-fux',
    role: 'CEO & Founder',
    avatar: '/clikkle/images/avatars/eldad.png',
    href: '/blog/author/eldad-fux',
  },
  {
    name: 'Dennis Ivy',
    slug: 'dennis-ivy',
    role: 'Developer Advocate',
    avatar: '/clikkle/images/avatars/dennis.png',
    href: '/blog/author/dennis-ivy',
  },
  {
    name: 'Thomas G. Lopes',
    slug: 'thomas-g-lopes',
    role: 'Software Engineer',
    avatar: '/clikkle/images/avatars/thomas.png',
    href: '/blog/author/thomas-g-lopes',
  },
  {
    name: 'Vincent Ge',
    slug: 'vincent-ge',
    role: 'DevRel Engineer',
    avatar: '/clikkle/images/avatars/vincent.png',
    href: '/blog/author/vincent-ge',
  },
];

export const categories: Category[] = [
  { name: 'Announcement', slug: 'announcement' },
  { name: 'Product', slug: 'product' },
  { name: 'Tutorial', slug: 'tutorial' },
  { name: 'Security', slug: 'security' },
  { name: 'Startup', slug: 'startup' },
  { name: 'Engineering', slug: 'engineering' },
  { name: 'Customer stories', slug: 'customer-stories' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Design', slug: 'design' },
  { name: 'Init', slug: 'init' },
];

export const featuredPost: BlogPost = {
  title: 'Introducing Clikkle Arena: Which AI model knows Clikkle best?',
  description:
    "Clikkle Arena is an open-source benchmark that tests how well AI models understand Clikkle's services, SDKs, and APIs. 191 questions across 9 service categories, fully transparent scoring, and all results open source.",
  date: '2026-03-17',
  cover: '/clikkle/images/blog/announcing-Clikkle-arena/cover.png',
  timeToRead: 4,
  author: 'matej-baco',
  category: 'announcement',
  slug: 'announcing-Clikkle-arena',
  href: '/blog/post/announcing-Clikkle-arena',
  featured: true,
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Open-source backends in regulated industries: what to check',
    description: 'A practical guide for evaluating open-source backend platforms in regulated environments.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/open-source-regulated-environments/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'security',
    slug: 'open-source-regulated-environments',
    href: '/blog/post/open-source-regulated-environments',
  },
  {
    title: 'Security responsibilities when using backend platforms',
    description: 'Understanding the shared responsibility model when using backend-as-a-service platforms.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/backend-platform-security-responsibilities/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'security',
    slug: 'backend-platform-security-responsibilities',
    href: '/blog/post/backend-platform-security-responsibilities',
  },
  {
    title: 'Firebase vs open source: the trade-offs developers miss',
    description: 'A deep dive into the trade-offs between Firebase and open-source alternatives.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/firebase-vs-open-source-tradeoffs/cover.png',
    timeToRead: 7,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'firebase-vs-open-source-tradeoffs',
    href: '/blog/post/firebase-vs-open-source-tradeoffs',
  },
  {
    title: 'Building client dashboards and internal tools faster',
    description: 'How to streamline building client dashboards and internal tools with backend platforms.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/client-dashboards-internal-tools/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'client-dashboards-internal-tools',
    href: '/blog/post/client-dashboards-internal-tools',
  },
  {
    title: 'Cloudinary vs Clikkle Storage: trade-offs in image handling',
    description: 'Comparing Cloudinary and Clikkle Storage for image and file management.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/Clikkle-vs-cloudinary/cover.png',
    timeToRead: 7,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'Clikkle-vs-cloudinary',
    href: '/blog/post/Clikkle-vs-cloudinary',
  },
  {
    title: 'Clikkle vs Vercel vs Netlify: where does your stack live?',
    description: 'Understanding where Clikkle, Vercel, and Netlify fit in the modern development stack.',
    date: '2026-03-20',
    cover: '/clikkle/images/blog/Clikkle-vs-vercel-vs-netlify/cover.png',
    timeToRead: 7,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'Clikkle-vs-vercel-vs-netlify',
    href: '/blog/post/Clikkle-vs-vercel-vs-netlify',
  },
  {
    title: 'The fastest way to launch your next side project',
    description: 'Practical tips for shipping side projects faster using modern backend platforms.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/the-fastest-way-to-launch-your-next-side-project/cover.png',
    timeToRead: 5,
    author: 'aishwari',
    category: 'startup',
    slug: 'the-fastest-way-to-launch-your-next-side-project',
    href: '/blog/post/the-fastest-way-to-launch-your-next-side-project',
  },
  {
    title: 'When open-source backend beats managed SaaS',
    description: 'Situations where self-hosted open-source backends outperform managed services.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/open-source-backend-vs-managed-saas/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'open-source-backend-vs-managed-saas',
    href: '/blog/post/open-source-backend-vs-managed-saas',
  },
  {
    title: 'Building a production-ready backend with Clikkle',
    description: 'A step-by-step guide to building a production-ready backend using Clikkle.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/building-a-production-ready-backend-with-Clikkle/cover.png',
    timeToRead: 5,
    author: 'atharva',
    category: 'tutorial',
    slug: 'building-a-production-ready-backend-with-Clikkle',
    href: '/blog/post/building-a-production-ready-backend-with-Clikkle',
  },
  {
    title: 'BAA explained: what it is and when you need one',
    description: 'Understanding Business Associate Agreements and their importance for compliance.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/baa-explained/cover.png',
    timeToRead: 7,
    author: 'aditya-oberai',
    category: 'security',
    slug: 'baa-explained',
    href: '/blog/post/baa-explained',
  },
  {
    title: 'Self-hosted vs managed backends: a practical comparison',
    description: 'Comparing self-hosted and managed backend solutions for different project types.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/self-hosted-vs-managed-backends-a-practical-comparison/cover.png',
    timeToRead: 5,
    author: 'aishwari',
    category: 'product',
    slug: 'self-hosted-vs-managed-backends-a-practical-comparison',
    href: '/blog/post/self-hosted-vs-managed-backends-a-practical-comparison',
  },
  {
    title: 'How developer tools are evolving in 2026',
    description: 'The biggest trends shaping modern developer tooling in 2026.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/how-developer-tools-are-evolving-in-2026/cover.png',
    timeToRead: 5,
    author: 'aishwari',
    category: 'product',
    slug: 'how-developer-tools-are-evolving-in-2026',
    href: '/blog/post/how-developer-tools-are-evolving-in-2026',
  },
  {
    title: 'How to evaluate backend tools without locking yourself in',
    description: 'A framework for evaluating backend platforms while avoiding vendor lock-in.',
    date: '2026-03-19',
    cover: '/clikkle/images/blog/evaluate-backend-tools-no-lock-in/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'evaluate-backend-tools-no-lock-in',
    href: '/blog/post/evaluate-backend-tools-no-lock-in',
  },
  {
    title: 'How to build internal tools quickly: Admin panels',
    description: 'Build internal admin panels and tools in record time using Clikkle.',
    date: '2026-03-18',
    cover: '/clikkle/images/blog/build-internal-tools-quickly/cover.png',
    timeToRead: 7,
    author: 'aditya-oberai',
    category: 'tutorial',
    slug: 'build-internal-tools-quickly',
    href: '/blog/post/build-internal-tools-quickly',
  },
  {
    title: 'How to avoid backend overengineering in early-stage products',
    description: 'Practical strategies to keep your backend simple during early product development.',
    date: '2026-03-18',
    cover: '/clikkle/images/blog/avoid-backend-overengineering/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'avoid-backend-overengineering',
    href: '/blog/post/avoid-backend-overengineering',
  },
  {
    title: 'When a custom backend stops being worth it',
    description: 'Signs that your custom backend is becoming a liability rather than an asset.',
    date: '2026-03-18',
    cover: '/clikkle/images/blog/when-custom-backend-stops-being-worth-it/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'when-custom-backend-stops-being-worth-it',
    href: '/blog/post/when-custom-backend-stops-being-worth-it',
  },
  {
    title: 'Open-source alternatives to proprietary BaaS tools',
    description: 'Exploring open-source alternatives to common proprietary backend-as-a-service platforms.',
    date: '2026-03-18',
    cover: '/clikkle/images/blog/open-source-baas-alternatives/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'open-source-baas-alternatives',
    href: '/blog/post/open-source-baas-alternatives',
  },
  {
    title: 'The easiest way to add file uploads to your app',
    description: 'A tutorial on adding file uploads to any application using Clikkle Storage.',
    date: '2026-03-18',
    cover: '/clikkle/images/blog/easiest-file-uploads/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'tutorial',
    slug: 'easiest-file-uploads',
    href: '/blog/post/easiest-file-uploads',
  },
  {
    title: 'How indie hackers are shipping apps faster than ever',
    description: 'How the indie hacker community is leveraging backend platforms to ship faster.',
    date: '2026-03-17',
    cover: '/clikkle/images/blog/indie-hackers-shipping-faster/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'product',
    slug: 'indie-hackers-shipping-faster',
    href: '/blog/post/indie-hackers-shipping-faster',
  },
  {
    title: 'Developer-first thinking about compliance requirements',
    description: 'Approaching compliance requirements from a developer-first perspective.',
    date: '2026-03-17',
    cover: '/clikkle/images/blog/developer-compliance-thinking/cover.png',
    timeToRead: 6,
    author: 'aditya-oberai',
    category: 'security',
    slug: 'developer-compliance-thinking',
    href: '/blog/post/developer-compliance-thinking',
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function formatBlogDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

