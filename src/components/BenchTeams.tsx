'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, Rocket, GitBranch, Cloud, Shield, Layers } from 'lucide-react';
import { benchPipeline, benchSquads, benchStats, benchProof } from '@/lib/content/bench';
import { sections } from '@/lib/navigation';

export default function BenchTeams() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#030b1a] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-wide uppercase mb-3">The bench</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Pre-built squads — trained, not hired on the fly.
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t scramble to find freelancers. AutomateAllOps maintains pre-built DevOps, Cloud, and SRE squads —
            lab-tested and ready to deploy on your project in weeks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {benchStats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 text-center border border-violet-500/15">
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-slate-500 text-xs sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-5 mb-14"
        >
          {benchPipeline.map((stage, i) => (
            <div key={stage.step} className="relative glass rounded-2xl p-6 border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{stage.step}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{stage.detail}</p>
              {i < benchPipeline.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-500/50 z-10" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-black text-white">Ready-made squads on the bench</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {benchSquads.map((squad) => {
              const Icon = squad.title.includes('DevOps') ? GitBranch
                : squad.title.includes('Cloud') ? Cloud
                : squad.title.includes('SRE') ? Shield
                : Layers;
              return (
                <div key={squad.title} className="bento-card rounded-2xl p-5 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h4 className="font-display text-white font-bold mb-2">{squad.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{squad.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {squad.skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8 border border-violet-500/20 flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <ul className="space-y-3">
              {benchProof.map((point) => (
                <li key={point} className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-violet-400 shrink-0 mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={sections.contactProjects}
              className="btn-neon inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-violet-500/20 transition-all"
            >
              <Rocket className="w-5 h-5" />
              Deploy a squad
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href={sections.learn}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold hover:border-violet-500/30 transition-all"
            >
              Explore learning paths
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
