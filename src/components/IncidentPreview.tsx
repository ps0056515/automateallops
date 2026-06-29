'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Siren, ArrowRight } from 'lucide-react';
import IncidentSimulator from '@/components/content/IncidentSimulator';
import { incidentScenarios } from '@/lib/content/incidents';
import { sections } from '@/lib/navigation';

export default function IncidentPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const previewScenario = incidentScenarios[0];

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm mb-4">
            <Siren className="w-4 h-4" />
            Incident Command Center — free tier
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Practice on-call{' '}
            <span className="gradient-text">before the pager fires</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interactive incident simulations — better than YouBrokeProd alone because they tie into your labs, cert progress, and on-call readiness score.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <IncidentSimulator scenario={previewScenario} compact />
        </motion.div>

        <div className="text-center mt-8">
          <Link
            href={sections.incidents}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-red-500/30 text-white font-semibold transition-colors"
          >
            Try all {incidentScenarios.length} scenarios free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
