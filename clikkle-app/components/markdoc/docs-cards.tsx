import NextLink from "next/link";
import type { ReactNode } from "react";

/** Appwrite `Cards.svelte` */
export function DocsCards({ children }: { children: ReactNode }) {
  return <div className="not-prose my-8 grid grid-cols-1 gap-8 md:grid-cols-2">{children}</div>;
}

/** Appwrite `Cards_Item.svelte` */
export function DocsCardsItem({
  href,
  icon = "",
  image = "",
  title,
  children,
}: {
  href: string;
  icon?: string;
  image?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <NextLink
      href={href}
      className="bg-card border-smooth hover:bg-smooth !mb-0 flex flex-col gap-2 rounded-2xl border p-4 outline-0 transition-colors"
    >
      <header className="flex items-center gap-1">
        {icon ? <span className={`${icon} web-u-font-size-24`} aria-hidden="true" /> : null}
        {image ? (
          <img src={image} alt={title} className="w-6 object-contain object-center" />
        ) : null}
        <h4 className="text-sub-body text-primary font-medium">{title}</h4>
      </header>
      {children ? <div className="text-sub-body">{children}</div> : null}
    </NextLink>
  );
}

/** Appwrite `Cards_Image_Item.svelte` */
export function DocsCardsImageItem({
  href,
  light = "",
  dark = "",
  title,
  children,
}: {
  href: string;
  light?: string;
  dark?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <NextLink
      href={href}
      className="bg-card border-smooth hover:bg-smooth !mb-0 flex flex-col gap-1 rounded-2xl border p-4 outline-0"
    >
      <header className="flex items-center gap-1">
        <img src={dark} alt="" className="hidden size-8 dark:block" width={32} height={32} />
        <img src={light} alt="" className="block size-8 dark:hidden" width={32} height={32} />
        <h4 className="text-sub-body text-primary font-medium">{title}</h4>
      </header>
      <p className="text-sub-body text-primary font-medium">{children}</p>
    </NextLink>
  );
}
