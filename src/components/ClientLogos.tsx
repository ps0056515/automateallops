'use client';
import { clientLogos } from '@/lib/content/clients';

export default function ClientLogos() {
  return (
    <div className="border-b border-white/5 bg-[#020817]/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-5">
          Trusted by engineering teams in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {clientLogos.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/5 hover:border-cyan-500/20 transition-all group"
              title={c.industry}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                {c.abbr}
              </div>
              <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors hidden sm:inline">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
