import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sections } from '@/lib/navigation';

type PageCtaProps = {
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageCta({
  label = 'Get started free',
  href = sections.getStarted,
  secondaryLabel,
  secondaryHref,
}: PageCtaProps) {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/40 transition-all"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}
