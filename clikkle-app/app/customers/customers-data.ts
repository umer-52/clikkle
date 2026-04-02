export interface CustomerStory {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  authorAvatar?: string;
  customerName: string;
  coverImage: string;
  coverTheme?: 'light' | 'dark';
  href: string;
}

export const customerStories: CustomerStory[] = [
  {
    slug: 'radar',
    title: 'How Radar scaled media curation while saving $1M with Clikkle Cloud',
    date: 'Sep 25, 2025',
    readTime: '6 min',
    author: 'Aditya Oberai',
    customerName: 'Radar',
    coverImage: '/clikkle/images/blog/customer-story-radar/cover.png',
    coverTheme: 'light',
    href: '/customers/customer-story-radar',
  },
  {
    slug: 'socialaize',
    title: 'Simplifying social media management with automation and AI with StoreAlert and Clikkle',
    date: 'Aug 22, 2025',
    readTime: '6 min',
    author: 'Aditya Oberai',
    customerName: 'Socialaize',
    coverImage: '/clikkle/images/blog/customer-story-socialaize/cover.png',
    coverTheme: 'dark',
    href: '/customers/customer-story-socialaize',
  },
  {
    slug: 'storealert',
    title: 'Empowering Shopify merchants with real-time store monitoring using StoreAlert',
    date: 'Feb 20, 2025',
    readTime: '6 min',
    author: 'Aditya Oberai',
    customerName: 'StoreAlert',
    coverImage: '/clikkle/images/blog/customer-story-storealert/cover.png',
    coverTheme: 'dark',
    href: '/customers/customer-story-storealert',
  },
  {
    slug: 'undo',
    title: 'Pioneering asset management solutions for the circular economy with UNDŌ',
    date: 'Jul 9, 2024',
    readTime: '6 min',
    author: 'Aditya Oberai',
    customerName: 'UNDŌ',
    coverImage: '/clikkle/images/blog/case-study-undo/cover.png',
    coverTheme: 'light',
    href: '/customers/customer-stories-undo',
  },
  {
    slug: 'langx',
    title: 'Building the future of language learning for over 5000 users worldwide with LangX',
    date: 'May 23, 2024',
    readTime: '5 min',
    author: 'Aditya Oberai',
    customerName: 'LangX',
    coverImage: '/clikkle/images/blog/case-study-langx/cover.png',
    coverTheme: 'light',
    href: '/customers/customer-stories-langx',
  },
  {
    slug: 'open-mind',
    title: "Data dilemma and cost efficiency solved: Open Mind's journey to scalable education",
    date: 'Apr 12, 2024',
    readTime: '5 min',
    author: 'Aditya Oberai',
    customerName: 'Open Mind',
    coverImage: '/clikkle/images/blog/case-study-open-mind/cover.png',
    coverTheme: 'light',
    href: '/customers/customer-stories-open-mind',
  },
  {
    slug: 'myshoefitter',
    title: 'mySHOEFITTER: Solving 75% of online shoe order returns with AI automation',
    date: 'Mar 4, 2024',
    readTime: '5 min',
    author: 'Aditya Oberai',
    customerName: 'mySHOEFITTER',
    coverImage: '/clikkle/images/blog/case-study-myshoefitter.png',
    coverTheme: 'dark',
    href: '/customers/customer-stories-myshoefitter',
  },
  {
    slug: 'majik-kids',
    title: 'Majik Kids: Building an audio-based content platform for children',
    date: 'Jan 19, 2024',
    readTime: '7 min',
    author: 'Aditya Oberai',
    customerName: 'Majik Kids',
    coverImage: '/clikkle/images/blog/majik-kids.png',
    coverTheme: 'dark',
    href: '/customers/customer-stories-majik-kids',
  },
  {
    slug: 'kcollect',
    title: 'K-Collect: Building a platform for 50,000 K-Pop fans',
    date: 'Dec 2, 2023',
    readTime: '5 min',
    author: 'Aditya Oberai',
    customerName: 'K-Collect',
    coverImage: '/clikkle/images/blog/kcollect.png',
    coverTheme: 'dark',
    href: '/customers/customer-stories-kcollect',
  },
  {
    slug: 'smartbee',
    title: 'Smartbee: Revolutionizing coal mine monitoring',
    date: 'Dec 2, 2023',
    readTime: '5 min',
    author: 'Aditya Oberai',
    customerName: 'Smartbee',
    coverImage: '/clikkle/images/blog/smartbee.png',
    coverTheme: 'dark',
    href: '/customers/customer-stories-smartbee',
  },
];
