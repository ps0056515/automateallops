'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Star, BookOpen, Award } from 'lucide-react';
import { learningPaths } from '@/lib/content/learning-paths';
import { pathHref } from '@/lib/navigation';

export default function LearningPaths() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-[#020817]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Structured Learning Paths
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Choose Your{' '}
            <span className="gradient-text">Career Track</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Precision-engineered paths from beginner to expert. Every path ends with a real-world project and industry-recognized certification prep.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((path, i) => (
            <motion.div
              key={path.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass glass-hover rounded-2xl p-6 cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

              <div className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                {path.badge}
              </div>

              <Link href={pathHref(path.slug)} className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {path.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{path.title}</h3>
                  <p className="text-sm text-slate-500">{path.level}</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{path.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{path.learners} enrolled</span>
                <span className="flex items-center gap-1 text-amber-400"><Star className="w-3.5 h-3.5 fill-current" />{path.rating}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {path.topics.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Course completion</span>
                  <span>Ready to enroll</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                    className={`h-full bg-gradient-to-r ${path.color} rounded-full`}
                  />
                </div>
              </div>

              <Link
                href={pathHref(path.slug)}
                className={`group/btn flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${path.color} bg-clip-text text-transparent hover:gap-3 transition-all`}
              >
                <Award className="w-4 h-4 text-cyan-400" />
                Start This Path
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
