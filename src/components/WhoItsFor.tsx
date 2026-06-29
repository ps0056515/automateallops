'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Building2, Users, Landmark, HeartPulse, ShoppingCart, Layers } from 'lucide-react';
import { sections } from '@/lib/navigation';

const segments = [
  {
    icon: Zap,
    color: 'cyan',
    audience: 'Startup scaling fast',
    pain: 'Need CI/CD + Kubernetes shipped in 6 weeks — hiring takes 4 months.',
    outcome: 'Full CI/CD + K8s cluster, runbooks included. Done in one sprint.',
    cta: 'Book a scoping call',
    href: sections.contactProjects,
  },
  {
    icon: Building2,
    color: 'violet',
    audience: 'Mid-market without a DevOps team',
    pain: 'No time to hire, no one to own infra. Projects stall.',
    outcome: 'A pre-built squad embedded in your Slack and repos within 2 weeks.',
    cta: 'See our services',
    href: sections.services,
  },
  {
    icon: Users,
    color: 'cyan',
    audience: 'Enterprise with a staff gap',
    pain: 'Senior SRE on leave, critical on-call coverage gone, platform team overloaded.',
    outcome: 'Bench engineers fill the gap same week. SOC 2-ready, NDA day one.',
    cta: 'Talk to enterprise team',
    href: sections.contactSales,
  },
];

const industries = [
  { icon: Landmark, label: 'FinTech', desc: 'PCI-aware pipelines, zero-downtime migrations', href: '/outcomes/fintech-platform-team' },
  { icon: Layers, label: 'B2B SaaS', desc: 'Multi-tenant K8s, GitOps, release velocity', href: '/outcomes/saas-sre-transformation' },
  { icon: HeartPulse, label: 'HealthTech', desc: 'HIPAA-ready infra, audit trails, on-call', href: '/outcomes/healthtech-hipaa-platform' },
  { icon: ShoppingCart, label: 'E-commerce', desc: 'Peak-traffic scaling, CI/CD rescue, SLOs', href: '/outcomes/ci-cd-rescue' },
  { icon: Building2, label: 'Enterprise', desc: 'Multi-region rollouts, landing zones, IDP', href: '/outcomes/global-enterprise-rollout' },
];

const colorMap: Record<string, string> = {
  cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
  violet: 'border-violet-500/30 hover:border-violet-500/60',
};

const iconColorMap: Record<string, string> = {
  cyan: 'from-cyan-500 to-cyan-700',
  violet: 'from-violet-500 to-violet-700',
};

const ctaColorMap: Record<string, string> = {
  cyan: 'text-cyan-400 hover:text-cyan-300',
  violet: 'text-violet-400 hover:text-violet-300',
};

export default function WhoItsFor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">Who we work with</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Built for teams that need to ship — not hire.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We work best with engineering teams that need production-grade DevOps work done fast — without the 4-month hiring cycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.audience}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`bento-card rounded-2xl p-7 ${colorMap[seg.color]} transition-all flex flex-col`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconColorMap[seg.color]} flex items-center justify-center mb-5`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">{seg.audience}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3 font-medium">{seg.pain}</p>
                <div className="border-t border-white/5 pt-3 mb-5">
                  <p className="text-slate-500 text-xs leading-relaxed">{seg.outcome}</p>
                </div>
                <a
                  href={seg.href}
                  className={`mt-auto text-sm font-bold ${ctaColorMap[seg.color]} transition-colors`}
                >
                  {seg.cta} →
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">Industries we serve</h3>
            <p className="text-slate-500 text-sm">Same bench squads — tuned to your compliance and scale requirements</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.a
                  key={ind.label}
                  href={ind.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="bento-card rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all group text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="text-white font-bold text-sm mb-1">{ind.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{ind.desc}</div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
