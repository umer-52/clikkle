import Link from 'next/link';

interface BreadcrumbsProps {
  title: string;
}

export function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <div className="text-caption text-secondary flex gap-3 pt-8 pb-16">
      <Link href="/customers" className="hover:text-accent-darker transition-colors font-medium">
        Customer Stories
      </Link>
      <span>/</span>
      <span className="text-primary line-clamp-1 font-medium">{title}</span>
    </div>
  );
}
