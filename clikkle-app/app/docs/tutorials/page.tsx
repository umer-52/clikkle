import Link from "next/link";
import { getTutorialCategories } from "@/lib/tutorials-index";
import { getTutorialIconClass } from "@/lib/docs-icons";

export const metadata = {
  title: "Tutorials - Docs - Clikkle",
  description:
    "Follow a simple tutorial to get started with Clikkle in your preferred framework quickly and easily.",
};

/** Appwrite `src/routes/docs/tutorials/+page.svelte` */
export default function TutorialsPage() {
  const tutorials = getTutorialCategories();

  return (
    <main className="web-main-section" id="main">
      <article className="web-article">
        <header className="web-article-header">
          <div className="web-article-header-start flex flex-col items-start">
            <div className="relative flex items-center">
              <h1 className="text-title m-0 font-aeonik-pro font-bold text-primary">
                Tutorials
              </h1>
            </div>
          </div>
          <div className="web-article-header-end" />
        </header>

        <div className="web-article-content web-u-gap-80">
        {tutorials.map((category) => (
          <section key={category.title} className="flex flex-col gap-6">
            <h2 className="text-eyebrow font-aeonik-fono uppercase text-tertiary">
              {category.title}
            </h2>

            <ul className="web-grid-row-4 web-grid-row-4-mobile-1">
              {category.tutorials.map((tutorial) => {
                const iconClass = getTutorialIconClass(tutorial.framework);
                if (tutorial.draft) {
                  return (
                    <li key={tutorial.href}>
                      <span
                        className="web-card is-normal tutorial-draft-card pointer-events-none flex cursor-not-allowed flex-col gap-1 opacity-40"
                        aria-disabled
                      >
                        <header className="flex items-center gap-3">
                          {iconClass ? (
                            <span
                              className={`${iconClass} docs-card-icon text-primary`}
                              aria-hidden
                            />
                          ) : null}
                          <h3 className="m-0 text-[0.875rem] font-medium leading-[1.2] text-primary">
                            {tutorial.framework}
                          </h3>
                          <span className="tutorial-coming-soon-badge text-caption">Coming Soon</span>
                        </header>
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={tutorial.href}>
                    <Link href={tutorial.href} className="web-card is-normal no-underline">
                      <header className="flex items-center gap-3">
                        {iconClass ? (
                          <span
                            className={`${iconClass} docs-card-icon text-primary`}
                            aria-hidden
                          />
                        ) : null}
                        <h3 className="m-0 text-[0.875rem] font-medium leading-[1.2] text-primary dark:text-white">
                          {tutorial.framework}
                        </h3>
                      </header>
                      <p className="text-sub-body mt-1 text-[var(--color-text-secondary)] dark:text-white/70">
                        {tutorial.title}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        </div>
      </article>
    </main>
  );
}
