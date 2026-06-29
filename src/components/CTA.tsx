'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, CalendarDays, FileText } from 'lucide-react';
import { sections } from '@/lib/navigation';

const guarantees = [
  'Bench-trained squads — not ad-hoc freelancers',
  'DevOps, Cloud, SRE, or Platform squad matched to your stack',
  'Typical team deployment in ~2 weeks',
  'Full handoff: docs, runbooks, recorded walkthroughs',
];

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#020817]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/15 via-violet-900/15 to-pink-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/8 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-violet-500/8" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-wide uppercase mb-4">Get started</p>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Deploy a squad this month.
          </h2>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Skip the 6-month hiring cycle. Our bench-trained squads are ready to deploy —
            describe your project and we&apos;ll match the right team.
            <span className="text-slate-300"> No commitment required.</span>
          </p>

          {/* Guarantees */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
            {guarantees.map((g) => (
              <div key={g} className="flex items-start gap-2 glass rounded-xl px-4 py-3 border border-white/5 text-sm text-slate-300">
                <span className="text-cyan-400 flex-shrink-0 mt-0.5">✓</span>
                {g}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={sections.contactProjects}
              className="btn-neon group flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <CalendarDays className="w-5 h-5" />
              Deploy a Squad — Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href={sections.services}
              className="group flex items-center gap-2 px-8 py-5 rounded-xl glass border border-white/10 hover:border-cyan-500/30 text-white font-semibold text-base transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5 text-cyan-400" />
              See all service areas
            </Link>
          </div>

          <p className="text-slate-600 text-sm">
            Prefer email?{' '}
            <a href={sections.contactProjects} className="text-cyan-500 hover:text-cyan-400 transition-colors">
              projects@automateallops.com
            </a>
            {' '}— we respond within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
