'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CalendarDays, Clock, CheckCircle } from 'lucide-react';
import { serviceOfferings, deliveryModel } from '@/lib/content/services';
import { sections } from '@/lib/navigation';

const painPoints = [
  'Your engineers are already at capacity',
  'You need it done right, not in 6 months',
  'You can\'t afford to hire a full-time team yet',
  'The last vendor delivered code you couldn\'t maintain',
];

export default function ProjectDelivery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">How we work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            From first call to production handoff
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
            {painPoints.map((p) => (
              <div key={p} className="flex items-start gap-2 text-left text-slate-400 text-sm glass rounded-xl px-4 py-3 border border-white/5">
                <span className="text-cyan-400 mt-0.5 flex-shrink-0">→</span>
                {p}
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            That&apos;s exactly why clients come to us. Bench-trained squads take ownership — you get working production systems, not a PowerPoint.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — delivery model */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-black text-white mb-6">
              From first call to production handoff
            </h3>
            <div className="space-y-0">
              {deliveryModel.map((step, i) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < deliveryModel.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-cyan-500/30 to-transparent my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    {'timeAnchor' in step && (
                      <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">{(step as { timeAnchor: string }).timeAnchor}</div>
                    )}
                    <div className="text-white font-bold mb-1">{step.step}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={sections.contactProjects}
              className="btn-neon inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <CalendarDays className="w-5 h-5" />
              Book a 30-min discovery call
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-slate-600 text-xs mt-3">No sales deck. Engineers on the call from minute one.</p>
          </motion.div>

          {/* Right — service areas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-black text-white mb-6">What we build for you</h3>
            {serviceOfferings.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">{s.title}</h4>
                  <Clock className="w-3.5 h-3.5 text-slate-600 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.slice(0, 2).map((ex) => (
                    <span key={ex} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-500 border border-white/5">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            <Link
              href={sections.services}
              className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors pt-1"
            >
              See all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
