import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { certificationTracks } from '@/lib/content/certifications';
import { certPassRates } from '@/lib/content/proof';
import { sections } from '@/lib/navigation';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Certifications — AutomateAllOps',
  description: 'CKA, CKAD, CKS mock exams with Killer.sh-style simulators, LF exam links, and published pass rates.',
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cert Prep"
        title="Certification prep with proof"
        description="Timed mock exams, hands-on practice tasks, and direct links to Linux Foundation and HashiCorp exam registration. We publish pass rates — 94% CKA first attempt among track completers."
        backHref="/"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationTracks.map((track) => {
            const passRate = certPassRates.find((c) => c.slug === track.slug);
            return (
              <Link
                key={track.slug}
                href={`/certifications/${track.slug}`}
                className="group glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">{track.shortName}</div>
                    <div className="text-xs text-slate-500">{track.vendor}</div>
                  </div>
                  {passRate && (
                    <div className="text-right">
                      <div className="text-lg font-black text-green-400">{passRate.passRate}</div>
                      <div className="text-xs text-slate-500">pass rate</div>
                    </div>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{track.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-400">{track.mockExams} mock exams</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-400">{track.practiceTasks}+ tasks</span>
                  {track.killerShStyle && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-xs text-amber-400">Killer.sh-style</span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-semibold">
                  Start prep track <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="glass rounded-2xl p-8 border border-white/10 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Register for official exams</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            AutomateAllOps prep aligns to current exam curricula. When you are ready, register directly with the certifying body.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certificationTracks.filter((t) => t.lfExamUrl).map((t) => (
              <a
                key={t.slug}
                href={t.lfExamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
              >
                {t.shortName} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href={sections.getStarted} className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Get started free →
          </Link>
        </div>
      </div>
    </>
  );
}
