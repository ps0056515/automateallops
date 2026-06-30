import Link from 'next/link';
import RichContent from '@/components/content/RichContent';
import type { CommunityPage } from '@/lib/content/community';
import { sections } from '@/lib/navigation';
import { ArrowRight } from 'lucide-react';

export default function CommunityDetailView({ page }: { page: CommunityPage }) {
  const isLive = page.status === 'live';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {!isLive && (
        <div className="glass rounded-2xl p-6 border border-amber-500/20 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            Coming soon
          </span>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            {page.title} is not live yet. Join the newsletter to get notified at launch.
          </p>
          <Link
            href={sections.newsletter}
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold"
          >
            Get launch updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      <div className="glass rounded-2xl p-8 border border-white/10">
        <h2 className="text-lg font-bold text-white mb-4">{isLive ? 'Getting started' : 'What to expect at launch'}</h2>
        <ol className="space-y-3 mb-6">
          {page.gettingStarted.map((step, i) => (
            <li key={step} className="text-slate-300 text-sm flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">{i + 1}.</span>{step}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-3">
          {isLive ? (
            <Link href={sections.getStarted} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">
              Join the community <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link href={sections.newsletter} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">
              Notify me at launch <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link href={sections.community} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all">
            Back to community hub
          </Link>
        </div>
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
