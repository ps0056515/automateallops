'use client';
import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Rocket,
  Terminal,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';
import { createPortal } from 'react-dom';
import { sections } from '@/lib/navigation';
import { getEngineersBySquad } from '@/lib/content/engineers';
import { benchSquads } from '@/lib/content/bench';

type SquadId = 'DevOps' | 'Cloud' | 'SRE' | 'Platform';

const squadIds: SquadId[] = ['DevOps', 'Cloud', 'SRE', 'Platform'];

const squadGradients: Record<SquadId, string> = {
  DevOps: 'from-cyan-500 to-blue-600',
  Cloud: 'from-violet-500 to-purple-600',
  SRE: 'from-rose-500 to-pink-600',
  Platform: 'from-amber-500 to-orange-600',
};

const terminalLines: Record<SquadId, string[]> = {
  DevOps: [
    '$ bench scan --stack=github-actions,argocd',
    '→ 2 engineers matched · CKA + AWS DevOps Pro',
    '→ Availability: immediate · deploy window: 14 days',
    '✓ Squad lead assigned · runbooks included',
  ],
  Cloud: [
    '$ bench scan --stack=eks,terraform,aws',
    '→ 2 engineers matched · AWS SA Pro + Terraform',
    '→ Landing zone modules ready · multi-account',
    '✓ Squad lead assigned · IaC handoff included',
  ],
  SRE: [
    '$ bench scan --stack=prometheus,grafana,on-call',
    '→ 2 engineers matched · CKS + CKA certified',
    '→ SLO templates loaded · incident playbooks ready',
    '✓ Squad lead assigned · pager shadowing day one',
  ],
  Platform: [
    '$ bench scan --stack=backstage,k8s,idp',
    '→ 2 engineers matched · platform + K8s depth',
    '→ Golden path scaffolds ready · multi-tenant',
    '✓ Squad lead assigned · IDP docs included',
  ],
};

const deployMilestones = [
  { day: 'Day 1', label: 'Discovery + stack mapping' },
  { day: 'Day 3', label: 'Fixed-scope proposal in your inbox' },
  { day: 'Week 1', label: 'Squad in your Slack & repos' },
  { day: 'Week 2+', label: 'Production deliverables + handoff' },
];

type BenchTourProps = {
  open: boolean;
  onClose: () => void;
};

export default function BenchTour({ open, onClose }: BenchTourProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(0);
  const [squad, setSquad] = useState<SquadId>('DevOps');
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [typingDone, setTypingDone] = useState(false);

  const engineers = getEngineersBySquad(squad).slice(0, 2);
  const squadMeta = benchSquads[squadIds.indexOf(squad)];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    setPhase(0);
    setSquad('DevOps');
    setTypedLines([]);
    setTypingDone(false);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (phase !== 2) return;
    setTypedLines([]);
    setTypingDone(false);
    const lines = terminalLines[squad];
    let lineIdx = 0;
    let charIdx = 0;
    const ids: ReturnType<typeof setTimeout>[] = [];

    function tick() {
      if (lineIdx >= lines.length) {
        setTypingDone(true);
        return;
      }
      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });
        charIdx++;
        ids.push(setTimeout(tick, line.startsWith('$') ? 28 : 18));
      } else {
        lineIdx++;
        charIdx = 0;
        ids.push(setTimeout(tick, 400));
      }
    }
    ids.push(setTimeout(tick, 300));
    return () => ids.forEach(clearTimeout);
  }, [phase, squad]);

  const advance = useCallback(() => setPhase((p) => Math.min(p + 1, 4)), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Bench tour"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020817]/90 backdrop-blur-xl"
            onClick={onClose}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0f1e]/95 shadow-2xl shadow-black/60 theme-dark-panel"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0f1e]/95 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Bench Tour</div>
                  <div className="text-slate-500 text-[10px] font-mono">simulated flow · not a real deploy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i <= phase ? 'w-6 bg-gradient-to-r from-cyan-500 to-violet-600' : 'w-3 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close tour"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {phase === 0 && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center"
                    >
                      <Rocket className="w-10 h-10 text-cyan-400" />
                    </motion.div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                      Deploy a squad in{' '}
                      <span className="brand-highlight">60 seconds</span>
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto mb-2 leading-relaxed">
                      Walk through how AutomateAllOps matches bench-trained engineers to your stack —
                      this is a demo, not an actual deployment.
                    </p>
                    <p className="text-slate-600 text-xs max-w-sm mx-auto mb-8">
                      Engineer profiles shown are real bench leads. Matching logic is illustrative.
                    </p>
                    <button
                      type="button"
                      onClick={advance}
                      className="btn-neon inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
                    >
                      Start the tour
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {phase === 1 && (
                  <motion.div
                    key="pick"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-white mb-2">Pick your squad type</h2>
                    <p className="text-slate-400 text-sm mb-6">Which bench team fits your project?</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {squadIds.map((id) => {
                        const meta = benchSquads[squadIds.indexOf(id)];
                        const selected = squad === id;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setSquad(id)}
                            className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                              selected
                                ? `border-cyan-500/50 bg-gradient-to-br ${squadGradients[id]} bg-opacity-10 shadow-lg shadow-cyan-500/10 scale-[1.02]`
                                : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                            }`}
                          >
                            <div className="text-white font-bold text-sm mb-1">{meta.title}</div>
                            <div className="text-slate-500 text-xs leading-relaxed line-clamp-2">{meta.description}</div>
                            {selected && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-2 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold"
                              >
                                <CheckCircle2 className="w-3 h-3" /> Selected
                              </motion.div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={advance}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm"
                    >
                      Run bench matcher
                      <Terminal className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {phase === 2 && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-white mb-2">Matching on the bench</h2>
                    <p className="text-slate-400 text-sm mb-4">
                      Scanning for {squadMeta.title.toLowerCase()} with your stack…
                    </p>
                    <div className="rounded-xl bg-[#060b18] border border-white/10 p-4 font-mono text-xs mb-6 min-h-[140px]">
                      {typedLines.map((line, i) => (
                        <div
                          key={i}
                          className={`mb-1.5 ${line.startsWith('$') ? 'text-cyan-400' : line.startsWith('✓') ? 'text-emerald-400' : 'text-slate-400'}`}
                        >
                          {line}
                          {i === typedLines.length - 1 && !typingDone && (
                            <span className="cursor-blink text-cyan-400">▋</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={advance}
                      disabled={!typingDone}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Meet your engineers
                      <Users className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {phase === 3 && (
                  <motion.div
                    key="engineers"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-white mb-2">Your matched squad</h2>
                    <p className="text-slate-400 text-sm mb-5">Real bench profiles — available to deploy.</p>
                    <div className="space-y-3 mb-6">
                      {engineers.map((eng, i) => (
                        <motion.div
                          key={eng.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${squadGradients[squad]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                            {eng.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm">{eng.name}</div>
                            <div className="text-slate-500 text-xs">{eng.role}</div>
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {eng.certs.map((c) => (
                                <span key={c} className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/15">{c}</span>
                              ))}
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-semibold shrink-0">{eng.availability}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="relative mb-8 pl-4 border-l border-cyan-500/20 space-y-4">
                      {deployMilestones.map((m, i) => (
                        <motion.div
                          key={m.day}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.12 }}
                          className="relative"
                        >
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 ring-4 ring-[#0a0f1e]" />
                          <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">{m.day}</div>
                          <div className="text-slate-300 text-sm">{m.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={advance}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm"
                    >
                      Complete deploy preview
                      <Rocket className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {phase === 4 && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      Squad ready to deploy
                    </h2>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8">
                      That&apos;s the simulated flow. Ready to start a real project?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={sections.contactProjects}
                        className="btn-neon inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold"
                      >
                        <CalendarDays className="w-5 h-5" />
                        Book a discovery call
                      </a>
                      <button
                        type="button"
                        onClick={() => { setPhase(0); setSquad('DevOps'); }}
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all"
                      >
                        Run again
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-6 text-xs text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1"
                    >
                      Close tour <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
