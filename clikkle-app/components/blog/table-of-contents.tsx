'use client';

import { useEffect, useState } from 'react';

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Gather all H2 and H3 headings from the prose content within the article
    const elements = Array.from(document.querySelectorAll('.web-article-content h2, .web-article-content h3'));
    
    // Assign IDs if they don't have them
    elements.forEach((el, index) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `heading-${index}`;
      }
    });

    const tocData: TOCItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: Number(el.nodeName.charAt(1)),
    }));
    
    setHeadings(tocData);

    const callback: IntersectionObserverCallback = (entries) => {
      // Find all intersecting elements
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      // Sort them by their position on screen (top to bottom)
      visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      
      if (visibleEntries.length > 0) {
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-10% 0px -80% 0px', // Triggers when element is in the top 10-20% of viewport
      threshold: 0,
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-32 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <ul className="flex flex-col gap-3 list-none pl-0 text-sub-body text-secondary border-l border-white/[0.08] relative mb-16">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const paddingClass = heading.level === 3 ? 'pl-8' : 'pl-4';
            
            return (
              <li key={heading.id} className="relative">
                {isActive && (
                  <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary rounded-full transition-all duration-300" />
                )}
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      const yOffset = -100; // offset for the fixed header
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      setActiveId(heading.id);
                    }
                  }}
                  className={`block transition-colors ${paddingClass} ${
                    isActive 
                      ? 'text-primary font-medium' 
                      : 'hover:text-primary'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
