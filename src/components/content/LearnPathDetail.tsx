import { Clock, Star, Users } from 'lucide-react';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { LearningPath } from '@/lib/content/learning-paths';
import { sections } from '@/lib/navigation';

export default function LearnPathDetail({ path }: { path: LearningPath }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center text-3xl`}>
            {path.icon}
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">{path.badge}</div>
            <div className="text-slate-400 text-sm">{path.level}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-6">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{path.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" />{path.learners} enrolled</span>
          <span className="flex items-center gap-1 text-amber-400"><Star className="w-4 h-4 fill-current" />{path.rating}</span>
        </div>
        <h2 className="text-white font-bold mb-3">Prerequisites</h2>
        <ul className="space-y-2 mb-6">
          {path.prerequisites.map((p) => (
            <li key={p} className="text-slate-400 text-sm flex gap-2"><span className="text-cyan-400">→</span>{p}</li>
          ))}
        </ul>
        <h2 className="text-white font-bold mb-3">You will be able to</h2>
        <ul className="space-y-2 mb-6">
          {path.outcomes.map((o) => (
            <li key={o} className="text-slate-300 text-sm flex gap-2"><span className="text-green-400">✓</span>{o}</li>
          ))}
        </ul>
        <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-4 mb-6">
          <div className="text-violet-400 text-xs font-semibold uppercase mb-1">Capstone project</div>
          <p className="text-slate-300 text-sm leading-relaxed">{path.capstone}</p>
        </div>
        <PageCta label="Enroll in this path" href={sections.getStarted} secondaryLabel="Try a free lab" secondaryHref={sections.labs} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Course modules</h2>
        <div className="space-y-4">
          {path.modules.map((mod, i) => (
            <div key={mod.title} className="glass rounded-xl p-6 border border-white/5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-white">Module {i + 1}: {mod.title}</h3>
                <span className="text-xs text-slate-500 shrink-0">{mod.duration}</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">{mod.description}</p>
              <div className="flex flex-wrap gap-2">
                {mod.labs.map((lab) => (
                  <span key={lab} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">{lab}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <RichContent sections={path.sections} />

      <div>
        <h2 className="text-white font-bold mb-4">Topics covered</h2>
        <div className="flex flex-wrap gap-2">
          {path.topics.map((topic) => (
            <span key={topic} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5">{topic}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
