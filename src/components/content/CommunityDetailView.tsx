import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { CommunityPage } from '@/lib/content/community';
import { sections } from '@/lib/navigation';

export default function CommunityDetailView({ page }: { page: CommunityPage }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <h2 className="text-lg font-bold text-white mb-4">Getting started</h2>
        <ol className="space-y-3 mb-6">
          {page.gettingStarted.map((step, i) => (
            <li key={step} className="text-slate-300 text-sm flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">{i + 1}.</span>{step}
            </li>
          ))}
        </ol>
        <PageCta label="Join the community" href={sections.getStarted} secondaryLabel="Back to community hub" secondaryHref={sections.community} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 border border-white/5">
          <h2 className="text-lg font-bold text-white mb-4">Community norms</h2>
          <ul className="space-y-2">
            {page.norms.map((n) => (
              <li key={n} className="text-slate-400 text-sm flex gap-2"><span>•</span>{n}</li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-xl p-6 border border-white/5">
          <h2 className="text-lg font-bold text-white mb-4">Key areas</h2>
          <ul className="space-y-2">
            {page.bullets.map((b) => (
              <li key={b} className="text-cyan-300 text-sm font-mono">{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <RichContent sections={page.sections} />
    </div>
  );
}
