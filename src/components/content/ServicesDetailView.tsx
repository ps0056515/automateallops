import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import { serviceOfferings, serviceSections, servicesStats } from '@/lib/content/services';
import { sections } from '@/lib/navigation';

export default function ServicesDetailView() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {servicesStats.map((s) => (
          <div key={s.label} className="glass rounded-xl p-5 text-center border border-white/10">
            <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
            <div className="text-sm text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-black text-white mb-2">What we deliver</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">
          Kubernetes, CI/CD, Terraform, SRE, GitOps, cloud migrations — if it ships or runs in production, we do it.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceOfferings.map((service) => (
            <div key={service.title} className="glass rounded-2xl p-6 border border-white/10 h-full flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mt-auto">
                {service.examples.map((ex) => (
                  <li key={ex} className="flex gap-2 text-xs text-slate-500">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <RichContent sections={serviceSections} />

      <div className="glass rounded-2xl p-8 border border-cyan-500/20 text-center">
        <h3 className="text-2xl font-black text-white mb-3">Tell us about your project</h3>
        <p className="text-slate-400 max-w-xl mx-auto mb-6">
          Describe what you need — stack, timeline, team size. An engineer (not sales) responds within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={sections.contactProjects}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Start a project
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={sections.outcomes}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-colors"
          >
            See delivery case studies
          </Link>
        </div>
      </div>

      <PageCta
        label="Email us about your project"
        href={sections.contactProjects}
        secondaryLabel="Explore learning platform"
        secondaryHref={sections.learn}
      />
    </div>
  );
}
