'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/content/blog-posts';
import { sections } from '@/lib/navigation';

const serviceMap: Record<string, { label: string; href: string }> = {
  GitOps: { label: 'DevOps delivery', href: sections.services },
  SRE: { label: 'SRE squad', href: '/sre-hub' },
  IaC: { label: 'Cloud & Terraform', href: '/cloud/landing-zones' },
  'On-Call': { label: 'SRE squad', href: '/sre-hub/on-call-excellence' },
};

export default function InsightsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const posts = blogPosts.slice(0, 4);

  return (
    <section ref={ref} className="relative py-24 bg-[#020817] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">Engineering insights</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Read the thinking. Deploy the squad.
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Every article maps to a service we deliver — read the thinking, then deploy the squad that ships it.
            </p>
          </div>
          <Link
            href={sections.blog}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold shrink-0"
          >
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => {
            const service = serviceMap[post.tag] ?? { label: 'Our services', href: sections.services };
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 border border-white/10 hover:border-amber-500/30 transition-all h-full flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="group flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400">{post.tag}</span>
                    <span className="text-xs text-slate-600">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                </Link>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold mt-auto"
                >
                  Deploy: {service.label} <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
