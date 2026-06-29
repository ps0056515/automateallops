'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Shield, AlertTriangle, TrendingUp, BookOpen, Zap, Target, type LucideIcon } from 'lucide-react';
import { sreFeatures } from '@/lib/content/sre-features';
import { sreHref } from '@/lib/navigation';

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  'trending-up': TrendingUp,
  zap: Zap,
  'book-open': BookOpen,
  'alert-triangle': AlertTriangle,
  target: Target,
};

export default function SREHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sreFeatures.map((feat, i) => {
            const Icon = iconMap[feat.iconKey];
            return (
              <motion.div
                key={feat.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={sreHref(feat.slug)}
                  className={`block glass glass-hover rounded-2xl p-6 border ${feat.border} group h-full`}
                >
                  <div className={`w-12 h-12 ${feat.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feat.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{feat.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{feat.desc}</p>
                  <ul className="space-y-1.5">
                    {feat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${feat.bg} border ${feat.border}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
