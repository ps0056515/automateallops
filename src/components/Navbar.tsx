'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Target, Menu, X, ChevronDown, CalendarDays } from 'lucide-react';
import { navItems, sections } from '@/lib/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import BrandWordmark from '@/components/BrandWordmark';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-bg-scrolled)] backdrop-blur-xl border-b border-[var(--accent-border)] shadow-lg shadow-black/30'
          : 'bg-[var(--nav-bg-top)] backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href={sections.home} className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-pulse" />
            </div>
            <div>
              <BrandWordmark />
            </div>
            <div className="hidden sm:block ml-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[10px] text-cyan-300 font-semibold whitespace-nowrap">
              DevOps Delivery
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5 min-w-0 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => item.children.length && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  prefetch={false}
                  className="flex items-center gap-1 px-2.5 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                <AnimatePresence>
                  {activeDropdown === item.label && item.children.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full left-0 mt-1 glass rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 ${item.children.length > 6 ? 'w-96 grid grid-cols-2' : 'w-52'}`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          prefetch={false}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <div className="hidden xl:flex items-center gap-2">
            <Link href={sections.signIn} className="text-sm text-slate-400 hover:text-white px-4 py-2 transition-colors">
              Sign In
            </Link>
            <a
              href={sections.contactProjects}
              className="btn-neon flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 whitespace-nowrap"
            >
              <CalendarDays className="w-4 h-4" />
              Book a Call
            </a>
            </div>
          </div>

          <button
            type="button"
            className="xl:hidden text-slate-400 hover:text-white shrink-0 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[var(--nav-bg-mobile)] backdrop-blur-xl border-t border-white/5 max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="flex-1 block px-3 py-2.5 text-slate-300 hover:text-cyan-400 text-sm rounded-lg hover:bg-white/5 transition-all"
                    >
                      {item.label}
                    </Link>
                    {item.children.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="p-2 text-slate-500 hover:text-cyan-400 rounded-lg"
                        aria-label={`${mobileExpanded === item.label ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                        aria-expanded={mobileExpanded === item.label}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children.length > 0 && mobileExpanded === item.label && (
                    <div className="ml-3 pl-3 border-l border-white/10 space-y-0.5 mb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobile}
                          className="block px-3 py-2 text-slate-400 hover:text-cyan-400 text-sm rounded-lg hover:bg-white/5 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Theme</span>
                  <ThemeToggle />
                </div>
                <div className="flex gap-3">
                <Link
                  href={sections.signIn}
                  onClick={closeMobile}
                  className="flex-1 text-center text-sm text-slate-300 py-2.5 rounded-lg border border-white/10"
                >
                  Sign In
                </Link>
                <a
                  href={sections.contactProjects}
                  onClick={closeMobile}
                  className="flex-1 text-center text-sm font-bold py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
                >
                  Book a Call
                </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
