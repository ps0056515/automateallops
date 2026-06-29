'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Quote, Award, MapPin } from 'lucide-react';
import { deliveryMetrics, caseStudies } from '@/lib/content/proof';
import { benchEngineers } from '@/lib/content/engineers';
import { outcomeHref, sections } from '@/lib/navigation';

const availabilityStyle: Record<string, string> = {
  'Available now': 'text-emerald-400 bg-emerald-500/10',
  'Available in 1 week': 'text-amber-400 bg-amber-500/10',
  'On engagement': 'text-slate-400 bg-white/5',
};

export default function ProofHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  const featuredCases = caseStudies.slice(0, 3);
  const spotlightEngineers = benchEngineers.filter((e) => e.availability === 'Available now').slice(0, 3);
  const heroQuote = caseStudies[0].quote;

  return (
    <section ref={ref} className="relative py-28 section-mid overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">Proof, not promises</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Outcomes you can verify.<br />
            <span className="text-slate-400 font-semibold">Engineers you can meet before you sign.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every metric comes from a delivered project. Every profile shows real availability on the bench.
          </p>
        </motion.div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {deliveryMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="bento-card rounded-xl p-4 text-center"
              title={m.detail}
            >
              <div className="font-display text-xl font-extrabold text-white">{m.value}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case studies — 3 col */}
        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          {featuredCases.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <Link href={outcomeHref(cs.slug)} className="group block bento-card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center font-display text-xs font-bold text-white">
                    {cs.logo}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{cs.company}</div>
                    <div className="text-slate-500 text-xs">{cs.industry}</div>
                  </div>
                </div>
                <h3 className="font-display text-white font-bold text-sm leading-snug mb-4 group-hover:text-cyan-300 transition-colors">
                  {cs.headline}
                </h3>
                <div className="flex gap-5 mb-5">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-lg font-extrabold text-cyan-400">{r.metric}</div>
                      <div className="text-[10px] text-slate-500">{r.label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-400 font-semibold">
                  Read case study <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Engineers + featured quote bento */}
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {spotlightEngineers.map((eng, i) => (
              <motion.div
                key={eng.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="bento-card rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {eng.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-sm truncate">{eng.name}</div>
                    <div className="text-slate-500 text-xs truncate">{eng.role}</div>
                  </div>
                </div>
                <div className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3 ${availabilityStyle[eng.availability]}`}>
                  {eng.availability}
                </div>
                <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Award className="w-3 h-3" />{eng.experience}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{eng.timezone}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {eng.certs.map((c) => (
                    <span key={c} className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/15">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="lg:col-span-4 bento-card rounded-2xl p-6 flex flex-col justify-between border-cyan-500/15"
          >
            <Quote className="w-8 h-8 text-cyan-500/20 mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed italic flex-1">
              &ldquo;{heroQuote.text}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="text-white font-semibold text-sm">{heroQuote.author}</div>
              <div className="text-slate-500 text-xs">{heroQuote.role}</div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href={sections.outcomes}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white font-semibold transition-colors"
          >
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="hidden sm:block text-slate-700">·</span>
          <a
            href={sections.contactProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all"
          >
            Request squad match
          </a>
        </div>
      </div>
    </section>
  );
}
