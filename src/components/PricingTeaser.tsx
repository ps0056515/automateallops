'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight } from 'lucide-react';
import { deliveryPlans } from '@/lib/content/delivery-pricing';
import { sections } from '@/lib/navigation';

export default function PricingTeaser() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-28 section-dark overflow-hidden">
      <div className="divider-gradient mb-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">Transparent pricing</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Know the cost before you commit
            </h2>
            <p className="text-slate-400 text-lg">
              Fixed-scope sprints or embedded squads. Published rates — no surprise change orders.
            </p>
          </div>
          <Link
            href={sections.pricing}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm shrink-0"
          >
            Full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {deliveryPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bento-card rounded-2xl p-6 flex flex-col ${plan.popular ? 'ring-1 ring-cyan-500/40' : ''}`}
            >
              {plan.popular && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-3">Most popular</span>
              )}
              <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-4 flex-1">{plan.description}</p>
              <div className="mb-4">
                <span className="font-display text-3xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm ml-2">{plan.priceDetail}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.includes.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={sections.contactProjects}
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'border border-white/10 text-white hover:border-cyan-500/30'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact sales' : 'Get a proposal'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
