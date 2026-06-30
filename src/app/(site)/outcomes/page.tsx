import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { caseStudies, outcomesPageMetrics, certPassRates } from '@/lib/content/proof';
import { anonymizationNote } from '@/lib/content/clients';
import { sections } from '@/lib/navigation';
import { ArrowRight, Shield } from 'lucide-react';

export const metadata = {
  title: 'Outcomes & Case Studies — AutomateAllOps',
  description: 'Delivery outcomes, certification pass rates, and anonymized case studies from AutomateAllOps projects.',
};

export default function OutcomesPage() {
  const featuredCerts = certPassRates.slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Proof"
        title="Outcomes you can verify"
        description="Published delivery metrics, cert pass rates, and case studies — not vanity stats."
        backHref="/"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {outcomesPageMetrics.map((m) => (
            <div key={m.label} className="glass rounded-xl p-5 text-center border border-white/5" title={m.detail}>
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{m.value}</div>
              <div className="text-xs text-slate-400 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <h2 className="text-2xl font-black text-white">Certification pass rates</h2>
          <Link href={sections.certifications} className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
            All cert tracks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {featuredCerts.map((c) => (
            <Link
              key={c.slug}
              href={`/certifications/${c.slug}`}
              className="glass rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">{c.passRate}</div>
              <div className="text-sm font-semibold text-slate-300">{c.exam}</div>
              <div className="text-xs text-slate-500 mt-2">{c.attempts} tracked attempts · ~{c.avgPrepWeeks} wk prep</div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-black text-white mb-2">Case studies</h2>
        <div className="flex items-start gap-2 text-sm text-slate-500 mb-6 max-w-2xl">
          <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          {anonymizationNote}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/outcomes/${study.slug}`}
              className="group glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  {study.logo}
                </div>
                <div>
                  <div className="text-xs text-cyan-400">{study.industry}</div>
                  <div className="text-white font-bold">{study.company}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{study.headline}</h3>
              <div className="flex gap-4 mb-4">
                {study.results.slice(0, 2).map((r) => (
                  <div key={r.label}>
                    <div className="text-xl font-black gradient-text">{r.metric}</div>
                    <div className="text-xs text-slate-500">{r.label}</div>
                  </div>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-semibold">
                Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={sections.contactProjects} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold">
            Book a discovery call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
