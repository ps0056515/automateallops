'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cloudTopics } from '@/lib/content/cloud';
import { cloudHref, sections } from '@/lib/navigation';

export default function CloudHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-16 pb-24 bg-[#020817]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 border border-cyan-500/20 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold mb-1">Need cloud engineers on your project?</p>
            <p className="text-slate-400 text-sm">We deliver AWS, GCP, and Azure work — migrations, EKS/GKE/AKS, landing zones, and FinOps.</p>
          </div>
          <a
            href={sections.contactProjects}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            Start a cloud project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cloudTopics.map((topic, i) => (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={cloudHref(topic.slug)}
                className={`block glass glass-hover rounded-2xl p-6 border ${topic.border} group h-full`}
              >
                <div
                  className={`w-12 h-12 ${topic.bg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  style={{ borderColor: topic.color }}
                >
                  {topic.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{topic.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{topic.desc}</p>
                <ul className="space-y-1.5">
                  {topic.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full ${topic.bg} border ${topic.border}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
