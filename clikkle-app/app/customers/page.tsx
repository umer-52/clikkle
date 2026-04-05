'use client';

import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { customerStories, type CustomerStory } from './customers-data';
import './customers.css';

/* ═══════════════════════════════════════════════
   SVG — Clikkle icon (pink)
   ═══════════════════════════════════════════════ */
function ClikkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.028 1.536C7.916 1.536 1.536 7.916 1.536 16.028s6.38 14.492 14.492 14.492 14.492-6.38 14.492-14.492S24.14 1.536 16.028 1.536z" fill="#2D63FF"/>
      <path d="M22.24 12.192H14.4a1.92 1.92 0 0 0-1.92 1.92v.576a1.92 1.92 0 0 0 1.92 1.92h7.84a1.92 1.92 0 0 0 1.92-1.92v-.576a1.92 1.92 0 0 0-1.92-1.92zM18.72 17.664h-4.32a1.92 1.92 0 0 0-1.92 1.92v.576a1.92 1.92 0 0 0 1.92 1.92h4.32a1.92 1.92 0 0 0 1.92-1.92v-.576a1.92 1.92 0 0 0-1.92-1.92z" fill="#fff"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════════ */
/* `src/markdoc/layouts/Category.svelte` — web-category-header + container */
function CustomerHero() {
  return (
    <header className="customers-category-header">
      <div className="customers-category-header__glow" aria-hidden="true" />
      <div className="customers-category-header__content">
        <h1 className="customers-category-header__title text-display font-aeonik-pro text-primary">
          Customer Stories
        </h1>
        <p className="customers-category-header__description text-description text-secondary">
          Learn more about how other developers have built successful applications while relying on
          Clikkle.
        </p>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — Story Card
   ═══════════════════════════════════════════════ */
function StoryCard({ story }: { story: CustomerStory }) {
  return (
    <Link href={story.href} className="customer-story-card">
      {/* Cover Image */}
      <div className={`customer-story-card__cover customer-story-card__cover--${story.coverTheme || 'dark'}`}>
        <div className="customer-story-card__logos">
          {/* Clikkle Logo */}
          <div className="customer-story-card__aw-logo">
            <svg className="customer-story-card__aw-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.028 1.536C7.916 1.536 1.536 7.916 1.536 16.028s6.38 14.492 14.492 14.492 14.492-6.38 14.492-14.492S24.14 1.536 16.028 1.536z" fill="#2D63FF"/>
              <path d="M22.24 12.192H14.4a1.92 1.92 0 0 0-1.92 1.92v.576a1.92 1.92 0 0 0 1.92 1.92h7.84a1.92 1.92 0 0 0 1.92-1.92v-.576a1.92 1.92 0 0 0-1.92-1.92zM18.72 17.664h-4.32a1.92 1.92 0 0 0-1.92 1.92v.576a1.92 1.92 0 0 0 1.92 1.92h4.32a1.92 1.92 0 0 0 1.92-1.92v-.576a1.92 1.92 0 0 0-1.92-1.92z" fill="#fff"/>
            </svg>
            <span>clikkle</span>
          </div>
          {/* Divider */}
          <div className="customer-story-card__logo-divider" />
          {/* Customer Logo (text-based) */}
          <span className="customer-story-card__customer-logo">
            {story.customerName}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="customer-story-card__body">
        <div className="customer-story-card__meta">
          {story.date} - {story.readTime}
        </div>
        <h3 className="customer-story-card__title">{story.title}</h3>
        <div className="customer-story-card__author">
          <div className="customer-story-card__avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="rgba(45,99,255,0.75)"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(45,99,255,0.45)"/></svg>
          </div>
          <span className="customer-story-card__author-name">{story.author}</span>
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — Story Cards Grid
   ═══════════════════════════════════════════════ */
/* `web-grid-articles` rhythm — `_grid-articles.scss` gap 32px / 48px, min column 280px */
function StoriesGrid() {
  return (
    <ul className="customers-stories-grid">
      {customerStories.map((story) => (
        <li key={story.slug}>
          <StoryCard story={story} />
        </li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function CustomersPage() {
  return (
    <div className="pt-6">
      <div className="web-big-padding-section-level-2 customers-category-page">
        <div className="container">
          <CustomerHero />
          <div className="mt-12">
            <StoriesGrid />
          </div>
        </div>
        <div className="relative mt-0 overflow-hidden">
          <div className="container">
            <SiteFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
