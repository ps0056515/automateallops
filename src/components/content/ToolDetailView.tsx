import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { DevOpsTool } from '@/lib/content/tools';
import type { ToolDetail } from '@/lib/content/tools-detail';
import { sections } from '@/lib/navigation';

export default function ToolDetailView({ tool, detail }: { tool: DevOpsTool; detail: ToolDetail }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{tool.icon}</span>
          <div>
            <p className="text-slate-400 leading-relaxed">{detail.whyItMatters}</p>
          </div>
        </div>
        <PageCta label={`Start ${tool.name} lab`} href={sections.labs} secondaryLabel="View learning paths" secondaryHref={sections.learn} />
      </div>

      <div className="glass rounded-2xl p-6 border border-white/5">
        <h2 className="text-lg font-bold text-white mb-4">Production use cases</h2>
        <ul className="space-y-2">
          {detail.productionUseCases.map((u) => (
            <li key={u} className="text-slate-300 text-sm flex gap-2"><span className="text-cyan-400">•</span>{u}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">Core concepts</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {detail.coreConcepts.map((c) => (
            <div key={c.title} className="glass rounded-xl p-5 border border-white/5">
              <h3 className="text-white font-semibold mb-2">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 border border-green-500/15">
          <h2 className="text-lg font-bold text-green-400 mb-4">Best practices</h2>
          <ul className="space-y-2">
            {detail.bestPractices.map((b) => (
              <li key={b} className="text-slate-300 text-sm flex gap-2"><span>✓</span>{b}</li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-xl p-6 border border-amber-500/15">
          <h2 className="text-lg font-bold text-amber-400 mb-4">Common mistakes</h2>
          <ul className="space-y-2">
            {detail.commonMistakes.map((m) => (
              <li key={m} className="text-slate-300 text-sm flex gap-2"><span>✗</span>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">Hands-on labs</h2>
        <div className="flex flex-wrap gap-2">
          {tool.labs.map((lab) => (
            <span key={lab} className="text-sm px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{lab}</span>
          ))}
        </div>
      </div>

      {detail.sections.length > 0 && <RichContent sections={detail.sections} />}
    </div>
  );
}
