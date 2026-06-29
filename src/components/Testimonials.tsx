'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { sections } from '@/lib/navigation';
import BrandWordmark from '@/components/BrandWordmark';

const testimonials = [
  {
    name: 'Ravi K.',
    role: 'Senior SRE — FAANG',
    avatar: 'RK',
    color: 'from-cyan-500 to-blue-600',
    rating: 5,
    text: 'The incident simulator is unlike anything else out there. I ran 3 scenarios before my first on-call rotation and felt genuinely prepared. Passed CKA first attempt thanks to the labs.',
  },
  {
    name: 'Sarah C.',
    role: 'Platform Engineer — Streaming',
    avatar: 'SC',
    color: 'from-violet-500 to-purple-600',
    rating: 5,
    text: 'Real sandboxes — no faking it. I went from zero Kubernetes to running a multi-tenant cluster in production within 8 months. The learning path structure kept me on track the whole way.',
  },
  {
    name: 'Marcus J.',
    role: 'DevOps Lead — SaaS',
    avatar: 'MJ',
    color: 'from-pink-500 to-rose-600',
    rating: 5,
    text: 'The postmortem library and SLO templates are what I keep coming back to. My whole team uses AutomateAllOps as the source of truth for production incidents now.',
  },
  {
    name: 'Priya S.',
    role: 'Cloud Architect — Retail',
    avatar: 'PS',
    color: 'from-amber-500 to-orange-600',
    rating: 5,
    text: 'Terraform, Ansible, Helm — all covered with production-grade examples. The delivery team helped us migrate a 300-service monolith to EKS in 6 weeks. Exceptional work.',
  },
  {
    name: 'Alex P.',
    role: 'SRE Manager — Logistics',
    avatar: 'AP',
    color: 'from-green-500 to-emerald-600',
    rating: 5,
    text: 'I use AutomateAllOps to onboard every new SRE hire. The chaos engineering labs build the right intuition for distributed systems. Nothing else compares.',
  },
  {
    name: 'Nadia H.',
    role: 'DevOps Engineer — FinTech',
    avatar: 'NH',
    color: 'from-blue-500 to-indigo-600',
    rating: 5,
    text: 'CI/CD content is incredibly comprehensive. AutomateAllOps helped me build our entire deployment pipeline from scratch — 10x better than any tutorial I found elsewhere.',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030b1a] to-[#020817]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm mb-4">
            <Star className="w-4 h-4 fill-current" />
            What engineers say
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            Stories from the{' '}
            <BrandWordmark className="text-4xl sm:text-5xl" />
            <span className="text-white">Community</span>
          </h2>
          <p className="text-slate-400 text-lg">From delivered projects to hands-on training — what clients and engineers say</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 relative group border border-white/5"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5 group-hover:text-white/10 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link
            href={sections.outcomes}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
          >
            See verified outcomes and placement data
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
