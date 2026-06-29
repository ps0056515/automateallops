'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { sections, pathHref } from '@/lib/navigation';

const tracks = [
  { icon: '☸️', title: 'Kubernetes Engineer', level: 'Beginner → Expert', href: pathHref('kubernetes-engineer'), color: 'from-blue-500 to-cyan-500' },
  { icon: '🔁', title: 'DevOps Practitioner', level: 'Foundation → Advanced', href: sections.learn, color: 'from-violet-500 to-purple-600' },
  { icon: '🛡️', title: 'Site Reliability Engineer', level: 'Intermediate → Staff', href: sections.sreHub, color: 'from-pink-500 to-rose-600' },
  { icon: '🏗️', title: 'Platform Engineering', level: 'Advanced → Principal', href: sections.learn, color: 'from-amber-500 to-orange-500' },
];

const tools = [
  '☸️ Kubernetes', '🐳 Docker', '🟣 Terraform', '🔴 Ansible',
  '⚙️ GitHub Actions', '🐙 ArgoCD', '🔥 Prometheus', '📊 Grafana',
  '⛵ Helm', '🕸️ Istio', '☁️ AWS', '🌐 GCP', '🔷 Azure', '🐧 Linux', '🔐 Vault',
];

export default function LearnTeaser() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="relative py-24 bg-[#030b1a] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust framing — this section explains WHY the platform exists */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Training → The Bench
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Train here.{' '}
            <span className="gradient-text">Deploy from the bench.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-2">
            Every engineer on our delivery bench trained on this platform — hands-on labs, SRE playbooks,
            incident simulations, and cert prep. We build the team; AutomateAllOps deploys it on your project.
          </p>
          <p className="text-slate-500 text-sm">
            50,000+ trained · Same curriculum · Bench-ready squads
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-6 mb-12 mt-8"
        >
          {[
            { icon: Users, value: '50K+', label: 'engineers trained' },
            { icon: Award, value: '2,400+', label: 'certifications earned' },
            { icon: BookOpen, value: '200+', label: 'hands-on labs' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 glass px-5 py-3 rounded-xl border border-white/5">
              <Icon className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-black">{value}</span>
              <span className="text-slate-400 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Track cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <Link
                href={track.href}
                className="group block glass glass-hover rounded-2xl p-5 h-full border border-white/5 hover:border-cyan-500/25 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {track.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-cyan-300 transition-colors">{track.title}</h3>
                <p className="text-slate-500 text-xs">{track.level}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="overflow-hidden"
        >
          <div className="text-xs text-slate-600 uppercase tracking-widest text-center mb-4">
            40+ tools — labs, cheatsheets, and deep-dive content
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#030b1a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#030b1a] to-transparent z-10" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3"
              style={{ width: 'max-content' }}
            >
              {[...tools, ...tools].map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all flex-shrink-0 text-sm text-slate-400 cursor-default"
                >
                  {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8"
        >
          <Link
            href={sections.learn}
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors"
          >
            Explore the learning platform <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
