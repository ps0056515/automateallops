'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import type { IncidentScenario } from '@/lib/content/incidents';
import { sections } from '@/lib/navigation';

type Props = {
  scenario: IncidentScenario;
  compact?: boolean;
};

export default function IncidentSimulator({ scenario, compact = false }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);

  const step = scenario.steps[stepIndex];
  const severityColor = scenario.severity === 'SEV-1' ? 'text-red-400 border-red-500/30 bg-red-500/10' : scenario.severity === 'SEV-2' ? 'text-orange-400 border-orange-500/30 bg-orange-500/10' : 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';

  function handleSelect(action: string, isCorrect: boolean, fb: string) {
    if (selected) return;
    setSelected(action);
    setCorrect(isCorrect);
    setFeedback(fb);
  }

  function handleNext() {
    if (stepIndex < scenario.steps.length - 1) {
      setStepIndex((i) => i + 1);
      setSelected(null);
      setFeedback(null);
      setCorrect(null);
    } else {
      setFinished(true);
    }
  }

  function handleReset() {
    setStepIndex(0);
    setSelected(null);
    setFeedback(null);
    setCorrect(null);
    setFinished(false);
  }

  return (
    <div className={`${compact ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}`}>
      <div className="glass rounded-2xl border border-white/10 overflow-hidden">
        {/* Alert bar */}
        <div className="bg-[#0a0f1e] px-6 py-4 border-b border-white/5 font-mono text-sm">
          <div className={`inline-flex items-center gap-2 px-2 py-0.5 rounded text-xs font-bold mb-2 ${severityColor}`}>
            {scenario.severity}
          </div>
          <div className="text-red-300">{scenario.alert}</div>
        </div>

        <div className="p-6 space-y-6">
          {!compact && (
            <>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{scenario.title}</h2>
                <p className="text-slate-400 text-sm">{scenario.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {scenario.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-400">{t}</span>
                ))}
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-400">{scenario.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-400">{scenario.difficulty}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="text-xs text-slate-500 uppercase mb-2">Context</div>
                  <ul className="space-y-1 text-slate-400">
                    {scenario.context.map((c) => <li key={c}>• {c}</li>)}
                  </ul>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="text-xs text-slate-500 uppercase mb-2">Symptoms</div>
                  <ul className="space-y-1 text-slate-400">
                    {scenario.symptoms.map((s) => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
              </div>
            </>
          )}

          <AnimatePresence mode="wait">
            {finished ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Scenario complete</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Root cause: {scenario.rootCause}
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button onClick={handleReset} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-sm text-white hover:border-cyan-500/30 transition-colors">
                    <RotateCcw className="w-4 h-4" /> Retry
                  </button>
                  {!compact && (
                    <Link href={sections.incidents} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold">
                      More scenarios <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div key={stepIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-white font-semibold">{step.prompt}</p>
                </div>
                <div className="space-y-2">
                  {step.options.map((opt) => {
                    const isSelected = selected === opt.action;
                    const showResult = selected !== null;
                    let border = 'border-white/10 hover:border-cyan-500/30';
                    if (showResult && isSelected) {
                      border = opt.correct ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10';
                    } else if (showResult && opt.correct) {
                      border = 'border-green-500/30 bg-green-500/5';
                    }
                    return (
                      <button
                        key={opt.action}
                        onClick={() => handleSelect(opt.action, opt.correct, opt.feedback)}
                        disabled={selected !== null}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${border} ${selected ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={isSelected ? 'text-white' : 'text-slate-300'}>{opt.label}</span>
                          {showResult && isSelected && (
                            opt.correct ? <CheckCircle className="w-4 h-4 text-green-400 shrink-0" /> : <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl text-sm ${correct ? 'bg-green-500/10 text-green-200 border border-green-500/20' : 'bg-red-500/10 text-red-200 border border-red-500/20'}`}
                  >
                    {feedback}
                    <button
                      onClick={handleNext}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
                    >
                      {stepIndex < scenario.steps.length - 1 ? 'Next step' : 'See resolution'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
