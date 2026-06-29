import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  backHref = '/',
  backLabel = 'Back to home',
}: PageHeaderProps) {
  return (
    <div className="relative pt-28 pb-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent-soft)] rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-slate-500 link-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
        {eyebrow && (
          <div className="eyebrow mb-3">{eyebrow}</div>
        )}
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
