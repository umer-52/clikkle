'use client';

import { Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

interface AuthorData {
  name?: string;
  role?: string;
  avatar?: string;
  href?: string;
}

interface PostMetaProps {
  date?: string;
  timeToRead?: number | string;
  title?: string;
  description?: string;
  authorData?: Partial<AuthorData> | Partial<AuthorData>[];
  currentURL?: string;
}

export function PostMeta({
  date = new Date().toISOString(),
  timeToRead = '0',
  title = '',
  description = '',
  authorData = {},
  currentURL = ''
}: PostMetaProps) {
  const [copied, setCopied] = useState(false);

  const authorsArray = Array.isArray(authorData) ? authorData : authorData ? [authorData] : [];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentURL || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const encodedUrl = currentURL ? encodeURIComponent(currentURL) : '';
  const encodedTitle = title ? encodeURIComponent(title) : '';

  const socialLinks = [
    {
      label: 'Share on X',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      type: 'link'
    },
    {
      label: 'Share on LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      type: 'link'
    },
    {
      label: 'Copy link',
      icon: copied ? Check : LinkIcon,
      action: handleCopy,
      type: 'button'
    }
  ];

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header>
      <div className="flex flex-col gap-4">
        <div className="text-caption text-secondary flex gap-2 font-medium">
          <time dateTime={date}>{formattedDate}</time>
          <span>•</span>
          {timeToRead && <span>{timeToRead} min</span>}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-poppins text-primary leading-[1.1] tracking-tight font-medium mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-description text-secondary font-medium mt-2">
            {description}
          </p>
        )}
      </div>

      <div className="border-smooth mb-8 flex flex-col justify-between border-b border-white/[0.08] py-8 md:flex-row">
        {authorsArray.length > 0 && (
          <div className="flex flex-wrap items-center gap-4">
            {authorsArray.map((author, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {author?.avatar ? (
                  <img className="h-11 w-11 rounded-full object-cover"
                    src={author.avatar}
                    alt={author.name || ''}
                    loading="lazy"
                    width="44"
                    height="44" />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-pink-500/40 to-pink-500/10 flex items-center justify-center border border-blue-500/20">
                    <span className="text-white text-sm font-semibold">{author?.name?.charAt(0) || 'A'}</span>
                  </div>
                )}
                <div className="flex flex-col">
                  <h4 className="text-sub-body text-primary font-medium">{author?.name || 'Clikkle Team'}</h4>
                  {author?.role && <p className="text-caption text-secondary">{author.role}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-4">
          <span className="text-eyebrow text-secondary uppercase font-semibold tracking-wide">SHARE</span>
          <ul className="flex gap-2">
            {socialLinks.map((option, idx) => (
              <li
                key={idx}
                className="bg-smooth flex h-8 w-8 items-center justify-center rounded-lg text-white/[0.6] hover:text-white transition-colors cursor-pointer bg-white/5"
              >
                {option.type === 'link' ? (
                  <a
                    aria-label={option.label}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full items-center justify-center"
                  >
                    <option.icon size={16} />
                  </a>
                ) : (
                  <button
                    aria-label={option.label}
                    onClick={option.action}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <option.icon size={16} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
