'use client';
import { clientLogos } from '@/lib/content/clients';

const metrics = [
  { value: '200+', label: 'Projects delivered' },
  { value: '97%', label: 'On-time delivery' },
  { value: '2 wks', label: 'Avg. squad deploy' },
  { value: '8 yrs', label: 'Avg. engineer exp.' },
];

export default function SocialProofMarquee() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="relative border-y border-white/5 bg-[#010510] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">{m.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-4 border-t border-white/5">
        <div className="absolute left-0 top-0 bottom-0 w-24 marquee-fade-left bg-gradient-to-r from-[#010510] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 marquee-fade-right bg-gradient-to-l from-[#010510] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="inline-flex items-center gap-3 mx-8 shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center">
                <span className="font-display text-xs font-bold text-slate-300">{c.abbr}</span>
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-slate-300">{c.name}</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wider">{c.industry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
