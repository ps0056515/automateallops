'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Terminal, Shield, Wrench, Users, BarChart3, Rocket, Cloud, Building2 } from 'lucide-react';
import { sections } from '@/lib/navigation';
import BrandWordmark from '@/components/BrandWordmark';

const exploreItems = [
  {
    title: 'DevOps & SRE Projects',
    description: 'Any project — Kubernetes, CI/CD, Terraform, SRE. Senior engineers ready to deliver.',
    href: sections.services,
    icon: Rocket,
    color: 'from-cyan-500 to-violet-600',
  },
  {
    title: 'Cloud (AWS, GCP, Azure)',
    description: 'Migrations, EKS/GKE/AKS, landing zones, multi-cloud, and FinOps — delivered by our team.',
    href: sections.cloud,
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Learning Paths',
    description: 'Structured career tracks from Kubernetes to Platform Engineering.',
    href: sections.learn,
    icon: BookOpen,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Interactive Labs',
    description: 'Real sandboxes for kubectl, Terraform, and CI/CD — no setup required.',
    href: sections.labs,
    icon: Terminal,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'SRE Hub',
    description: 'Playbooks, SLO templates, chaos labs, and postmortem libraries.',
    href: sections.sreHub,
    icon: Shield,
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'DevOps Tools',
    description: '40+ tools with cheatsheets, CLI references, and hands-on labs.',
    href: sections.tools,
    icon: Wrench,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Community',
    description: 'Discord, forums, events, and stories from 50K+ engineers.',
    href: sections.community,
    icon: Users,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Outcomes & Proof',
    description: 'Case studies, cert pass rates, and 2,800+ job placements tracked.',
    href: sections.outcomes,
    icon: BarChart3,
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Enterprise',
    description: 'SSO, private labs, team analytics — live today for org-scale rollouts.',
    href: sections.enterprise,
    icon: Building2,
    color: 'from-indigo-500 to-blue-600',
  },
];

export default function ExploreGrid() {
  return (
    <section className="relative py-24 bg-[#030b1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            Explore <BrandWordmark className="text-3xl sm:text-4xl" />
          </h2>
          <p className="text-slate-400">We deliver DevOps & SRE projects — and train engineers through hands-on labs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {exploreItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block glass glass-hover rounded-2xl p-6 h-full border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400">
                    {item.title === 'DevOps & SRE Projects'
                      ? 'View services'
                      : item.title.startsWith('Cloud')
                        ? 'Explore cloud'
                        : 'Learn more'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
