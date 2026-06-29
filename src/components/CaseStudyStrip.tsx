'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/content/proof';
import { outcomeHref, sections } from '@/lib/navigation';

export default function CaseStudyStrip() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const featured = caseStudies.slice(0, 3);

  return (
    <section ref={ref} className="relative py-20 bg-[#030b1a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Client outcomes</h2>
            <p className="text-slate-400">Real projects. Measurable results. Read the full case study.</p>
          </div>
          <Link href={sections.outcomes} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm shrink-0">
            All case studies →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={outcomeHref(study.slug)}
                className="group block glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                    {study.logo}
                  </div>
                  <div>
                    <div className="text-xs text-cyan-400">{study.industry}</div>
                    <div className="text-white font-bold">{study.company}</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm mb-4 group-hover:text-cyan-300 transition-colors leading-snug">
                  {study.headline}
                </h3>
                <div className="flex gap-4 mb-4">
                  {study.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <div className="text-xl font-black gradient-text">{r.metric}</div>
                      <div className="text-[10px] text-slate-500">{r.label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-semibold">
                  Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
