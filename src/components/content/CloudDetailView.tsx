import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { CloudTopic } from '@/lib/content/cloud';
import { sections } from '@/lib/navigation';

export default function CloudDetailView({ topic }: { topic: CloudTopic }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{topic.icon}</span>
          <p className="text-slate-400 leading-relaxed">{topic.overview}</p>
        </div>
        <PageCta
          label="Start a cloud project"
          href={sections.contactProjects}
          secondaryLabel="All cloud topics"
          secondaryHref={sections.cloud}
        />
      </div>

      <div className="glass rounded-xl p-6 border border-white/5">
        <h2 className="text-lg font-bold text-white mb-4">When teams come to us</h2>
        <ul className="space-y-2">
          {topic.whenToUse.map((w) => (
            <li key={w} className="text-slate-300 text-sm flex gap-2">
              <span className="text-cyan-400">→</span>
              {w}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">What we deliver</h2>
        <div className="space-y-3">
          {topic.deliveryAreas.map((area) => (
            <div key={area} className="glass rounded-xl p-4 border border-white/5 text-slate-300 text-sm flex gap-2">
              <span className="text-cyan-400 shrink-0">✓</span>
              {area}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Capabilities</h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          {topic.items.map((item) => (
            <li key={item} className="text-slate-400 text-sm flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <RichContent sections={topic.sections} />
    </div>
  );
}
