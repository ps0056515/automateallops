import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { LabCategory } from '@/lib/content/labs';
import { sections } from '@/lib/navigation';

export default function LabDetailView({ category }: { category: LabCategory }) {
  const primaryCta =
    category.slug === 'challenges'
      ? { label: 'Try incident sims', href: sections.incidents }
      : category.slug === 'certifications'
        ? { label: 'Open certification hub', href: sections.certifications }
        : { label: 'Try a live lab', href: sections.labs };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <h2 className="text-lg font-bold text-white mb-4">Who it&apos;s for</h2>
        <ul className="space-y-2 mb-6">
          {category.whoItsFor.map((w) => (
            <li key={w} className="text-slate-300 text-sm flex gap-2"><span className="text-cyan-400">→</span>{w}</li>
          ))}
        </ul>
        <PageCta label={primaryCta.label} href={primaryCta.href} secondaryLabel="Get started free" secondaryHref={sections.getStarted} />
      </div>

      <div className="glass rounded-xl p-6 border border-white/5">
        <h2 className="text-lg font-bold text-white mb-4">Sample scenarios</h2>
        <ul className="space-y-3">
          {category.sampleScenarios.map((s) => (
            <li key={s} className="text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-cyan-500/30">{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Highlights</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {category.highlights.map((h) => (
            <div key={h} className="glass rounded-lg p-4 border border-white/5 text-slate-300 text-sm">{h}</div>
          ))}
        </div>
      </div>

      <RichContent sections={category.sections} />
    </div>
  );
}
