'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, Users, ArrowRight, Terminal } from 'lucide-react';
import { sections } from '@/lib/navigation';
import { getEngineersBySquad } from '@/lib/content/engineers';

const squads = [
  {
    id: 'DevOps' as const,
    label: 'DevOps',
    color: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-500/30',
    skills: ['CI/CD pipelines', 'GitOps / ArgoCD', 'Release engineering'],
    deployTime: '2 weeks',
    available: 2,
  },
  {
    id: 'Cloud' as const,
    label: 'Cloud',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/30',
    skills: ['AWS · GCP · Azure', 'EKS / GKE / AKS', 'Terraform modules'],
    deployTime: '10 days',
    available: 2,
  },
  {
    id: 'SRE' as const,
    label: 'SRE',
    color: 'from-rose-500 to-pink-600',
    border: 'border-rose-500/30',
    skills: ['SLOs & error budgets', 'Observability stack', 'Incident playbooks'],
    deployTime: '2 weeks',
    available: 1,
  },
  {
    id: 'Platform' as const,
    label: 'Platform',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/30',
    skills: ['Internal dev platforms', 'Golden paths', 'Multi-tenant K8s'],
    deployTime: '3 weeks',
    available: 1,
  },
];

const steps = ['Select squad', 'Match engineers', 'Confirm deploy'];

export default function HeroBenchDemo() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const squad = squads[active];
  const engineers = getEngineersBySquad(squad.id).slice(0, 2);

  function handleDeploy() {
    setStep(1);
    setTimeout(() => setStep(2), 1000);
    setTimeout(() => setStep(3), 2200);
  }

  function selectSquad(i: number) {
    setActive(i);
    setStep(0);
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0a0f1e] theme-dark-panel">
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-[#060b18]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-slate-400 font-mono">bench.automateallops.com</span>
        </div>
        <div className="flex items-center gap-3">
          {steps.map((s, i) => (
            <span
              key={s}
              className={`text-[10px] font-medium hidden sm:inline ${
                step >= i + 1 ? 'text-cyan-400' : step === i ? 'text-white' : 'text-slate-600'
              }`}
            >
              {i + 1}. {s}
            </span>
          ))}
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-2 mb-5">
          {squads.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => selectSquad(i)}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all border ${
                active === i
                  ? `${s.border} bg-white/5 text-white`
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={squad.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`rounded-xl p-5 bg-gradient-to-br ${squad.color} bg-opacity-5 border border-white/8 mb-4`}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-white font-bold">{squad.label} Squad</span>
                <span className="text-xs text-emerald-400 font-semibold">{squad.available} available</span>
              </div>
              <ul className="space-y-2 mb-4">
                {squad.skills.map((skill) => (
                  <li key={skill} className="text-xs text-slate-300 flex gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Users className="w-3.5 h-3.5" />
                Deploy time: <span className="text-white font-semibold">{squad.deployTime}</span>
              </div>
            </div>

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2 mb-4"
              >
                {engineers.map((eng) => (
                  <div key={eng.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold">
                      {eng.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-semibold">{eng.name}</div>
                      <div className="text-slate-500 text-[10px]">{eng.role} · {eng.certs.join(', ')}</div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium shrink-0">{eng.availability}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {step === 3 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25"
              >
                <div className="text-emerald-400 font-display font-bold text-sm mb-1">Squad matched</div>
                <div className="text-slate-400 text-xs">Book a call to lock your deploy date</div>
              </motion.div>
            ) : (
              <button
                type="button"
                onClick={handleDeploy}
                disabled={step > 0 && step < 3}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-60"
              >
                {step === 0 && (<><Play className="w-4 h-4" /> Preview squad deploy</>)}
                {step === 1 && 'Matching engineers on bench…'}
                {step === 2 && 'Assigning squad leads…'}
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <a
          href={sections.contactProjects}
          className="mt-4 flex items-center justify-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Deploy for real <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
