"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  blogPosts,
  featuredPost,
  categories,
  authors,
  getAuthor,
  formatBlogDate,
} from "@/lib/blog-data";
import { SiteFooter } from "@/components/site-footer";
import "./blog.css";

const ITEMS_PER_PAGE = 9;

function getPageNumbers(current: number, total: number) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
  if (current >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesRef = useRef<HTMLUListElement>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const featuredAuthor = getAuthor(featuredPost.author);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (selectedCategory !== "Latest") {
      const catSlug = categories.find((c) => c.name === selectedCategory)?.slug;
      if (catSlug) {
        posts = posts.filter(
          (p) => p.category.toLowerCase() === catSlug.toLowerCase()
        );
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  function handleScroll() {
    if (!categoriesRef.current) return;
    const { scrollLeft, offsetWidth, scrollWidth } = categoriesRef.current;
    setIsStart(scrollLeft <= 0);
    setIsEnd(Math.ceil(scrollLeft + offsetWidth) >= scrollWidth);
  }

  function scrollCategories(direction: "left" | "right") {
    if (!categoriesRef.current) return;
    const amount = 200;
    const current = categoriesRef.current.scrollLeft;
    const target =
      direction === "left"
        ? Math.max(0, current - amount)
        : Math.min(
            categoriesRef.current.scrollWidth -
              categoriesRef.current.offsetWidth,
            current + amount
          );
    categoriesRef.current.scrollTo({ left: target, behavior: "smooth" });
  }

  return (
    <div className="web-big-padding-section overflow-x-hidden">
      {/* Hero + Featured */}
      <div className="border-smooth relative border-b py-10">
        {/* Gradient glow */}
        <div
          className="absolute pointer-events-none"
          style={{ insetInlineStart: 0, insetBlockEnd: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="660"
            height="497"
            viewBox="0 0 660 497"
            fill="none"
          >
            <g opacity="0.4" filter="url(#blog_glow)">
              <ellipse
                cx="-2.5"
                cy="609.5"
                rx="362.5"
                ry="309.5"
                fill="url(#blog_radial)"
              />
            </g>
            <defs>
              <filter
                id="blog_glow"
                x="-665"
                y="0"
                width="1325"
                height="1219"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <radialGradient
                id="blog_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-2.5 629.739) rotate(90) scale(289.261 362.5)"
              >
                <stop offset="0.281696" stopColor="#4D8AFF" />
                <stop offset="0.59375" stopColor="#2D63FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="web-big-padding-section-level-2 relative">
          <div className="container">
            <h1 className="text-display font-aeonik-pro text-primary">Blog</h1>

            {/* Featured article */}
            {featuredAuthor && (
              <article className="blog-feature-article mt-14 md:mt-16">
                <Link
                  href={featuredPost.href}
                  className="blog-feature-article-image h-fit overflow-hidden rounded-3xl"
                >
                  <img src={featuredPost.cover}
                    className="aspect-video transition-transform duration-250 hover:scale-102 w-full object-cover"
                    loading="lazy"
                    alt="cover" />
                </Link>
                <div className="blog-feature-article-content w-full">
                  <header className="blog-feature-article-header">
                    <ul className="web-metadata text-caption blog-is-only-mobile">
                      <li>{featuredPost.timeToRead} min</li>
                    </ul>
                    <Link href={featuredPost.href}>
                      <h2 className="text-title font-aeonik-pro text-primary text-balanced">
                        {featuredPost.title}
                      </h2>
                    </Link>
                  </header>
                  <p className="text-sub-body text-secondary">
                    {featuredPost.description}
                  </p>
                  <div className="blog-author">
                    <div className="flex items-center gap-2">
                      <img className="blog-author-image"
                        src={featuredAuthor.avatar}
                        alt={featuredAuthor.name}
                        loading="lazy"
                        width={24}
                        height={24} />
                      <div className="blog-author-info">
                        <span className="text-sub-body">
                          <Link
                            href={featuredAuthor.href}
                            className="text-primary hover:underline"
                          >
                            {featuredAuthor.name}
                          </Link>
                        </span>
                        <ul className="web-metadata text-caption blog-is-not-mobile">
                          <li>{featuredPost.timeToRead} min</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={featuredPost.href}
                    className="web-btn web-btn-secondary mt-8"
                  >
                    <span>Read article</span>
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="pt-30">
        <div className="web-container container">
          <h2 className="text-title font-aeonik-pro text-primary">Articles</h2>

          <div className="pt-4">
            <div className="blog-search-and-categories">
              {/* Categories */}
              <div
                className="blog-categories-wrapper"
                data-state={isStart ? "start" : isEnd ? "end" : "middle"}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <button
                  className={`blog-category-nav-arrow left ${
                    isHovering && !isStart ? "visible" : ""
                  }`}
                  onClick={() => scrollCategories("left")}
                  aria-label="Scroll categories left"
                >
                  <ChevronLeft size={16} />
                </button>

                <ul
                  className="blog-categories"
                  onScroll={handleScroll}
                  ref={categoriesRef}
                >
                  <li className="flex items-center">
                    <button
                      className={`blog-interactive-tag ${
                        selectedCategory === "Latest" ? "is-selected" : ""
                      }`}
                      onClick={() => setSelectedCategory("Latest")}
                    >
                      Latest
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.slug} className="flex items-center">
                      <button
                        className={`blog-interactive-tag ${
                          selectedCategory === cat.name ? "is-selected" : ""
                        }`}
                        onClick={() => setSelectedCategory(cat.name)}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  className={`blog-category-nav-arrow right ${
                    isHovering && !isEnd ? "visible" : ""
                  }`}
                  onClick={() => scrollCategories("right")}
                  aria-label="Scroll categories right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Search */}
              <div className="blog-search-bar">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary z-10"
                />
                <input
                  className="blog-search-input"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="mt-12">
            {paginatedPosts.length > 0 ? (
              <>
                <ul className="blog-grid-articles">
                  {paginatedPosts.map((post) => {
                    const author = getAuthor(post.author);
                    if (!author) return null;
                    return (
                      <li key={post.slug}>
                        <Link
                          href={post.href}
                          className="block overflow-hidden rounded-lg bg-transparent"
                        >
                          <img src={post.cover}
                            className="aspect-video w-full object-cover transition-transform duration-250 hover:scale-105"
                            alt={post.title}
                            loading="lazy" />
                        </Link>
                        <div className="flex flex-col gap-3 pt-6 pb-3">
                          <div className="text-caption text-secondary">
                            {formatBlogDate(post.date)} - {post.timeToRead} min
                          </div>
                          <Link href={post.href} className="bg-transparent">
                            <h4 className="text-label font-aeonik-pro text-primary line-clamp-2 hover:underline">
                              {post.title}
                            </h4>
                          </Link>
                          <div className="text-paragraph-md flex flex-wrap items-center gap-2">
                            <img className="size-5 rounded-full ring-2 ring-[var(--bg-primary)]"
                              src={author.avatar}
                              alt={author.name}
                              loading="lazy" />
                            <span className="text-primary">
                              <Link
                                href={author.href}
                                className="hover:underline"
                              >
                                {author.name}
                              </Link>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-16">
                    <ul className="flex items-center gap-1 justify-center">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => {
                          setCurrentPage((p) => p - 1);
                          window.scrollTo({ top: 600, behavior: "smooth" });
                        }}
                        className={`navigation-button ${currentPage > 1 ? "navigation-button-active" : ""}`}
                      >
                        <ChevronLeft size={20} />
                        Previous
                      </button>
                      
                      {getPageNumbers(currentPage, totalPages).map((page, idx) => {
                        if (page === "...") {
                          return <span key={`dot-${idx}`} className="pagination-ellipsis">...</span>;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => {
                              setCurrentPage(page as number);
                              window.scrollTo({ top: 600, behavior: "smooth" });
                            }}
                            className={`pagination-number ${
                              currentPage === page ? "pagination-number-selected" : ""
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}

                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => {
                          setCurrentPage((p) => p + 1);
                          window.scrollTo({ top: 600, behavior: "smooth" });
                        }}
                        className={`navigation-button ${currentPage < totalPages ? "navigation-button-active" : ""}`}
                      >
                        Next
                        <ChevronRight size={20} />
                      </button>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full p-8 flex flex-col gap-8 items-center">
                <p className="text-secondary">
                  No results found for &quot;
                  {searchQuery || selectedCategory}&quot;
                </p>
                <button
                  className="web-btn web-btn-secondary"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Latest");
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative overflow-hidden pt-10">
        <div className="pt-[7.5rem]">
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
