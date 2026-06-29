import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { SreFeature } from '@/lib/content/sre-features';
import { sections } from '@/lib/navigation';

export default function SreDetailView({ feature }: { feature: SreFeature }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <p className="text-slate-400 leading-relaxed mb-6">{feature.desc}</p>
        <PageCta label="Access SRE Hub" href={sections.getStarted} secondaryLabel="Try chaos lab" secondaryHref={sections.labs} />
      </div>

      <div className="glass rounded-xl p-6 border border-white/5">
        <h2 className="text-lg font-bold text-white mb-4">When to use this</h2>
        <ul className="space-y-2">
          {feature.whenToUse.map((w) => (
            <li key={w} className="text-slate-300 text-sm flex gap-2"><span className="text-cyan-400">→</span>{w}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">Response phases</h2>
        <div className="space-y-3">
          {feature.phases.map((phase, i) => (
            <div key={phase.title} className="flex gap-4 glass rounded-xl p-5 border border-white/5">
              <span className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-400 font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-white font-semibold mb-1">{phase.title}</h3>
                <p className="text-slate-400 text-sm">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Included resources</h2>
        <ul className="space-y-2">
          {feature.items.map((item) => (
            <li key={item} className="text-slate-300 text-sm flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />{item}</li>
          ))}
        </ul>
      </div>

      <RichContent sections={feature.sections} />
    </div>
  );
}
