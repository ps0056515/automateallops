'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BarChart3, Quote } from 'lucide-react';
import { deliveryMetrics, caseStudies } from '@/lib/content/proof';
import { sections } from '@/lib/navigation';

export default function OutcomesProof() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const featured = caseStudies.slice(0, 2);

  return (
    <section ref={ref} className="relative py-24 bg-[#030b1a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-[#030b1a]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-4">
            <BarChart3 className="w-4 h-4" />
            Delivery track record — not marketing numbers
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            We're measured by{' '}
            <span className="gradient-text">what ships</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every number below is from a delivered project, not a slide deck.
          </p>
        </motion.div>

        {/* Delivery metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {deliveryMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-xl p-4 text-center border border-white/5 hover:border-cyan-500/20 transition-all"
              title={m.detail}
            >
              <div className="text-xl sm:text-2xl font-black gradient-text mb-1">{m.value}</div>
              <div className="text-xs text-slate-400 leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured case studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/20 transition-all group"
            >
              {/* Company + industry */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {cs.logo}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{cs.company}</div>
                  <div className="text-slate-500 text-xs">{cs.industry}</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-base mb-4 group-hover:text-cyan-300 transition-colors leading-snug">
                {cs.headline}
              </h3>

              {/* Results */}
              <div className="flex gap-4 mb-5">
                {cs.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-lg font-black gradient-text">{r.metric}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative pl-4 border-l border-cyan-500/20">
                <Quote className="absolute -left-1 -top-1 w-3 h-3 text-cyan-500/40" />
                <p className="text-slate-400 text-xs italic leading-relaxed mb-2">"{cs.quote.text}"</p>
                <div className="text-slate-500 text-[10px]">{cs.quote.author} · {cs.quote.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={sections.outcomes}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
          >
            Read all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
