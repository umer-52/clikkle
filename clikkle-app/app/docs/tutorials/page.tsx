import Link from "next/link";
import { getTutorialCategories } from "@/lib/tutorials-index";
import { getTutorialIconClass } from "@/lib/docs-icons";

export const metadata = {
  title: "Tutorials - Docs - Clikkle",
  description:
    "Follow a simple tutorial to get started with Clikkle in your preferred framework quickly and easily.",
};

export default function TutorialsPage() {
  const tutorials = getTutorialCategories();

  return (
    <article className="relative">
      <header className="sticky top-0 z-[18] flex items-center justify-between gap-8 border-b border-offset bg-[var(--bg-primary)] pb-8 pt-10">
        <div className="flex items-center gap-4">
          <h1 className="text-title font-aeonik-pro text-primary">Tutorials</h1>
        </div>
      </header>

      <div className="mt-6 flex flex-col gap-20">
        {tutorials.map((category) => (
          <section key={category.title} className="flex flex-col gap-6">
            <h2 className="text-eyebrow uppercase tracking-loose text-tertiary">
              {category.title}
            </h2>

            <ul className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {category.tutorials.map((tutorial) => {
                const iconClass = getTutorialIconClass(tutorial.framework);
                return (
                  <li key={tutorial.href}>
                    <Link
                      href={tutorial.href}
                      className="group flex min-h-full flex-col gap-1 rounded-2xl border border-offset bg-card p-5 transition-all hover:bg-smooth"
                    >
                      <header className="flex items-center gap-3">
                        {iconClass ? (
                          <span
                            className={`${iconClass} docs-card-icon text-primary`}
                            aria-hidden
                          />
                        ) : null}
                        <h3 className="text-[14px] font-medium leading-[1.2] text-primary">
                          {tutorial.framework}
                        </h3>
                      </header>
                      <p className="text-sub-body mt-1 font-medium text-secondary">
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
  );
}
