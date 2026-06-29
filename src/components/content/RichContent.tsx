import type { RichSection } from '@/lib/content/types';

export default function RichContent({ sections }: { sections: RichSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="glass rounded-2xl p-6 sm:p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
          {section.body && (
            <p className="text-slate-400 leading-relaxed mb-4">{section.body}</p>
          )}
          {section.items && (
            <ul className="space-y-2.5">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.steps && (
            <ol className="space-y-4">
              {section.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-white font-semibold mb-1">{step.title}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {section.callout && (
            <div
              className={`mt-4 rounded-xl p-4 border text-sm leading-relaxed ${
                section.callout.variant === 'warning'
                  ? 'bg-amber-500/10 border-amber-500/25 text-amber-200/90'
                  : section.callout.variant === 'info'
                    ? 'bg-violet-500/10 border-violet-500/25 text-violet-200/90'
                    : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-200/90'
              }`}
            >
              {section.callout.text}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
