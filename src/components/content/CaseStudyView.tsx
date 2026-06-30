import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import type { CaseStudy } from '@/lib/content/proof';
import { anonymizationNote } from '@/lib/content/clients';
import { sections } from '@/lib/navigation';

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {study.anonymized && (
        <div className="flex items-start gap-3 glass rounded-xl p-4 border border-amber-500/20 text-sm text-slate-400">
          <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          {anonymizationNote}
        </div>
      )}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
          {study.logo}
        </div>
        <div>
          <div className="text-sm text-cyan-400 font-semibold">{study.industry}</div>
          <div className="text-2xl font-black text-white">{study.company}</div>
        </div>
      </div>

      <h2 className="text-3xl font-black text-white">{study.headline}</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {study.results.map((r) => (
          <div key={r.label} className="glass rounded-xl p-5 text-center border border-white/10">
            <div className="text-3xl font-black gradient-text mb-1">{r.metric}</div>
            <div className="text-sm text-slate-400">{r.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="glass rounded-xl p-6 border border-white/5">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Challenge</h3>
          <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
        </div>
        <div className="glass rounded-xl p-6 border border-white/5">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Solution</h3>
          <p className="text-slate-300 leading-relaxed">{study.solution}</p>
        </div>
      </div>

      <blockquote className="glass rounded-2xl p-8 border-l-4 border-cyan-500 border border-white/10">
        <p className="text-slate-300 italic text-lg leading-relaxed mb-4">&ldquo;{study.quote.text}&rdquo;</p>
        <footer className="text-sm">
          <span className="text-white font-semibold">{study.quote.author}</span>
          <span className="text-slate-500"> — {study.quote.role}</span>
        </footer>
      </blockquote>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link href={sections.contactProjects} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
          Book a discovery call <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
