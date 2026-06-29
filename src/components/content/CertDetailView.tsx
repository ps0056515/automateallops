import Link from 'next/link';
import { ExternalLink, Clock, Target, FileCheck } from 'lucide-react';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { CertificationTrack } from '@/lib/content/certifications';
import { sections } from '@/lib/navigation';

export default function CertDetailView({ track }: { track: CertificationTrack }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 border border-white/5">
          <Clock className="w-4 h-4 text-cyan-400 mb-2" />
          <div className="text-xs text-slate-500">Exam duration</div>
          <div className="text-white font-semibold">{track.examDuration}</div>
        </div>
        <div className="glass rounded-xl p-4 border border-white/5">
          <Target className="w-4 h-4 text-violet-400 mb-2" />
          <div className="text-xs text-slate-500">Tasks</div>
          <div className="text-white font-semibold">{track.taskCount}</div>
        </div>
        <div className="glass rounded-xl p-4 border border-white/5">
          <FileCheck className="w-4 h-4 text-green-400 mb-2" />
          <div className="text-xs text-slate-500">Mock exams</div>
          <div className="text-white font-semibold">{track.mockExams} full sims</div>
        </div>
        <div className="glass rounded-xl p-4 border border-white/5">
          <FileCheck className="w-4 h-4 text-amber-400 mb-2" />
          <div className="text-xs text-slate-500">Practice tasks</div>
          <div className="text-white font-semibold">{track.practiceTasks}+ hands-on</div>
        </div>
      </div>

      {track.killerShStyle && (
        <div className="glass rounded-xl p-4 border border-amber-500/20 bg-amber-500/5 text-sm text-amber-200">
          Killer.sh-style timed simulators included — exam conditions, no hints, domain score breakdown.
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Exam domains</h2>
        <div className="space-y-2">
          {track.domains.map((d) => (
            <div key={d.name} className="flex items-center justify-between glass rounded-lg px-4 py-3 border border-white/5">
              <span className="text-slate-300 text-sm">{d.name}</span>
              <span className="text-cyan-400 text-sm font-semibold">{d.weight}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Prep highlights</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {track.highlights.map((h) => (
            <div key={h} className="glass rounded-lg p-4 border border-white/5 text-slate-300 text-sm">{h}</div>
          ))}
        </div>
      </div>

      <RichContent sections={track.sections} />

      <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm text-slate-500">Official exam registration</div>
          <div className="text-white font-semibold">{track.vendor}</div>
        </div>
        <a
          href={track.lfExamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
        >
          Register for {track.shortName}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <PageCta
        label={`Start ${track.shortName} prep track`}
        href={sections.getStarted}
        secondaryLabel="View all certifications"
        secondaryHref={sections.certifications}
      />
    </div>
  );
}
