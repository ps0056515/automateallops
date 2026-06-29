'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Check, Zap, Star, Building2 } from 'lucide-react';
import { sections } from '@/lib/navigation';

const plans = [
  {
    name: 'Archer',
    icon: '🏹',
    price: { monthly: 0, annual: 0 },
    desc: 'Start your DevOps journey',
    color: 'border-white/10',
    btnClass: 'border border-white/20 text-slate-300 hover:border-cyan-500/50 hover:text-white',
    features: [
      '10 free labs/month',
      'Learning path previews',
      'Community forum access',
      'Basic cheatsheets',
      '1 sandbox environment',
    ],
    notIncluded: ['Unlimited labs', 'SRE Hub', 'Certifications', 'Team features'],
  },
  {
    name: 'AutomateAll',
    icon: '⚡',
    price: { monthly: 29, annual: 19 },
    desc: 'For serious engineers',
    color: 'border-cyan-500/50',
    popular: true,
    btnClass: 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/25',
    features: [
      'Unlimited labs & sandboxes',
      'All learning paths',
      'Full SRE Hub access',
      'Certification prep (CKA, CKAD, AWS)',
      'Hands-on challenges',
      'Priority community support',
      'Offline mode',
      'Progress analytics',
    ],
    notIncluded: ['Team management', 'Custom paths'],
  },
  {
    name: 'Elite',
    icon: '🏆',
    price: { monthly: 79, annual: 59 },
    desc: 'For teams & orgs',
    color: 'border-violet-500/40',
    btnClass: 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-500/25',
    features: [
      'Everything in AutomateAll',
      'Team management (up to 25)',
      'Custom learning paths',
      'Private lab environments',
      'SSO & SAML integration',
      'Advanced analytics dashboard',
      'Dedicated Slack channel',
      'SLA & invoice billing',
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-4">
            <Zap className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Invest in Your{' '}
            <span className="gradient-text">Engineering Career</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-4 p-1 glass rounded-xl border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Annual
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Save 35%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-6 border ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl shadow-cyan-500/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full text-xs font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="text-3xl mb-3">{plan.icon}</div>
              <div className="text-white font-black text-xl mb-1">{plan.name}</div>
              <div className="text-slate-400 text-sm mb-4">{plan.desc}</div>

              <div className="mb-6">
                <span className="text-4xl font-black text-white">
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                {plan.price.monthly > 0 && (
                  <span className="text-slate-500 text-sm">/mo {annual && <span className="text-green-400">billed annually</span>}</span>
                )}
                {plan.price.monthly === 0 && <span className="text-slate-500 text-sm"> forever free</span>}
              </div>

              <Link
                href={sections.getStarted}
                className={`btn-neon w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-6 block text-center ${plan.btnClass}`}
              >
                {plan.price.monthly === 0 ? 'Get Started Free' : 'Start 7-Day Trial'}
              </Link>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold">Enterprise Plan</div>
              <div className="text-slate-400 text-sm">For large teams: custom seats, private cloud labs, dedicated CSM, compliance docs</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href={sections.enterprise}
              className="px-6 py-3 rounded-xl border border-white/10 text-white hover:border-cyan-500/30 font-semibold text-sm transition-all text-center"
            >
              Enterprise features
            </Link>
            <Link
              href={sections.contactSales}
              className="px-6 py-3 rounded-xl border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 font-semibold text-sm transition-all text-center"
            >
              Contact Sales →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
