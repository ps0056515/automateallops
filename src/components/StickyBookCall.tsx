'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, X } from 'lucide-react';
import { sections } from '@/lib/navigation';

export default function StickyBookCall() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0a0f1e]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold truncate">Ready to deploy a squad?</div>
              <div className="text-slate-500 text-xs">30-min discovery call · No commitment</div>
            </div>
            <a
              href={sections.contactProjects}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold shrink-0 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              Book call
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="p-1.5 text-slate-500 hover:text-white transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
