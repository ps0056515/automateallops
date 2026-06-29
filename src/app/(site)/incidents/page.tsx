import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { incidentScenarios } from '@/lib/content/incidents';
import { sections } from '@/lib/navigation';
import { ArrowRight, Siren } from 'lucide-react';

export const metadata = {
  title: 'Incident Simulations — AutomateAllOps',
  description: 'Free interactive on-call incident scenarios. Practice SEV-1 and SEV-2 response before the pager fires.',
};

export default function IncidentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Incident Command Center"
        title="On-call incident simulations"
        description="Interactive scenarios that mirror real production outages — free tier included. Better than standalone tools because sims tie into your labs, cert progress, and on-call readiness score."
        backHref="/"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-xl p-4 border border-red-500/20 bg-red-500/5 mb-10 flex items-start gap-3">
          <Siren className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-slate-300 text-sm">
            All scenarios are free. Enterprise teams get private game-day scenarios mapped to their stack, plus incident sim scores in the team analytics dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {incidentScenarios.map((scenario) => (
            <Link
              key={scenario.slug}
              href={`/incidents/${scenario.slug}`}
              className="group glass rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  scenario.severity === 'SEV-1' ? 'bg-red-500/20 text-red-400' :
                  scenario.severity === 'SEV-2' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {scenario.severity}
                </span>
                <span className="text-xs text-slate-500">{scenario.duration}</span>
                <span className="text-xs text-slate-500">{scenario.difficulty}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">{scenario.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{scenario.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {scenario.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-500">{t}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-red-400 font-semibold">
                Start simulation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-slate-500 text-sm">Weekly community challenge — new scenario every Monday</p>
          <Link href={sections.getStarted} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold">
            Create free account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
