import Link from 'next/link';
import { Target, GitBranch, AtSign, Users, CirclePlay, Rss } from 'lucide-react';
import { footerLinks, sections, socialLinks } from '@/lib/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import BrandWordmark from '@/components/BrandWordmark';

const socialIcons = {
  GitHub: GitBranch,
  Twitter: AtSign,
  LinkedIn: Users,
  YouTube: CirclePlay,
  Blog: Rss,
} as const;

export default function Footer() {
  return (
    <footer className="relative bg-[#020817] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href={sections.home} className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-violet-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <BrandWordmark />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Pre-trained DevOps, Cloud, and SRE squads on the bench — ready to deploy on your projects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <Link
                    key={label}
                    href={href}
                    prefetch={false}
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-white font-semibold text-sm mb-4">{category}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} prefetch={false} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 border border-[var(--accent-border)] mb-12 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <div className="text-white font-bold mb-1">⚡ DevOps Weekly Digest</div>
            <div className="text-slate-400 text-sm">Curated K8s tips, SRE incidents, and tool releases. No fluff.</div>
          </div>
          <Link
            href={sections.newsletter}
            prefetch={false}
            className="btn-neon px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold whitespace-nowrap"
          >
            Subscribe
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs border-t border-white/5 pt-8">
          <div>© 2026 AutomateAllOps. Bench-trained teams, ready to deliver.</div>
          <div className="flex items-center gap-4">
            <ThemeToggle variant="footer" />
            <div className="flex gap-6">
            <Link href={sections.privacy} prefetch={false} className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href={sections.terms} prefetch={false} className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href={sections.cookies} prefetch={false} className="hover:text-slate-400 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
