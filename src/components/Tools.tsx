'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { devOpsTools } from '@/lib/content/tools';
import { toolHref } from '@/lib/navigation';

export default function Tools() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#030b1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Every Tool You Need to{' '}
            <span className="gradient-text">Ship Production Systems</span>
          </h2>
          <p className="text-slate-400">Hands-on labs for 40+ industry-standard DevOps & SRE tools</p>
        </motion.div>

        <div className="space-y-4 overflow-hidden">
          {[devOpsTools.slice(0, 10), devOpsTools.slice(10)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative">
              <motion.div
                animate={{ x: rowIdx === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="flex gap-4"
                style={{ width: 'max-content' }}
              >
                {[...row, ...row].map((tool, i) => (
                  <Link
                    key={`${tool.slug}-${i}`}
                    href={toolHref(tool.slug)}
                    className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex-shrink-0 group"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                      {tool.name}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
