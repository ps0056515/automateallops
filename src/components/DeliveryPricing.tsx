'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star } from 'lucide-react';
import { deliveryPlans, pricingFaqs } from '@/lib/content/delivery-pricing';
import { sections } from '@/lib/navigation';

export default function DeliveryPricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-4">
            Transparent squad pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Know the cost{' '}
            <span className="gradient-text">before you commit</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Fixed-scope sprints or embedded squads — no surprise change orders. Bench-trained engineers on standby.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deliveryPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 border ${plan.popular ? 'border-cyan-500/50 scale-[1.02] shadow-xl shadow-cyan-500/10' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most popular
                </div>
              )}
              <div className="text-white font-black text-xl mb-1">{plan.name}</div>
              <div className="text-slate-400 text-sm mb-4">{plan.description}</div>
              <div className="mb-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
              </div>
              <div className="text-slate-500 text-sm mb-4">{plan.priceDetail}</div>
              <div className="flex gap-3 text-xs text-slate-400 mb-6 pb-6 border-b border-white/5">
                <span>{plan.squadSize}</span>
                <span>·</span>
                <span>{plan.duration}</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-slate-500 mb-4">
                <span className="text-slate-400 font-semibold">Best for: </span>
                {plan.bestFor}
              </div>
              <a
                href={sections.contactProjects}
                className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'border border-white/15 text-white hover:border-cyan-500/40'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact sales' : 'Get a proposal'}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pricingFaqs.map((faq) => (
            <div key={faq.q} className="glass rounded-xl p-4 border border-white/5">
              <div className="text-white font-semibold text-sm mb-2">{faq.q}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
