'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, CheckCircle } from 'lucide-react';
import { benchEngineers } from '@/lib/content/engineers';
import { sections } from '@/lib/navigation';

const availabilityColor: Record<string, string> = {
  'Available now': 'text-green-400 bg-green-500/10 border-green-500/30',
  'Available in 1 week': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'On engagement': 'text-slate-400 bg-white/5 border-white/10',
};

export default function EngineerProfiles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#030b1a] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
            Transparent bench profiles
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meet the engineers{' '}
            <span className="gradient-text">on standby</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real profiles, real availability — bench-trained engineers. You know who deploys before you sign.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {benchEngineers.map((eng, i) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/25 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {eng.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold">{eng.name}</div>
                  <div className="text-slate-400 text-sm">{eng.role}</div>
                  <div className="text-xs text-violet-400 font-semibold mt-0.5">{eng.squad} Squad</div>
                </div>
              </div>

              <div className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${availabilityColor[eng.availability]}`}>
                {eng.availability}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  {eng.experience}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {eng.timezone}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {eng.certs.map((c) => (
                  <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {c}
                  </span>
                ))}
              </div>

              <ul className="space-y-1">
                {eng.specialties.map((s) => (
                  <li key={s} className="text-xs text-slate-400 flex gap-1.5">
                    <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={sections.contactProjects}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            Request squad match →
          </a>
          <p className="text-slate-600 text-xs mt-3">Profiles shown are representative bench leads — full roster shared on discovery call</p>
        </div>
      </div>
    </section>
  );
}
