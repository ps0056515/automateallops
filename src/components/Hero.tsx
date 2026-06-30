'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import { sections } from '@/lib/navigation';
import { featuredCaseStudyCta } from '@/lib/content/clients';
import HeroBenchDemo from '@/components/HeroBenchDemo';
import BenchTour from '@/components/BenchTour';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.25 + 0.05,
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 94, 94, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden bg-[#020817]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(192,94,94,0.14),transparent)]" />

      <div className="relative z-10 flex-1 flex items-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold">
                  Bench teams ready to deploy
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] mb-6">
                Operational excellence,
                <br />
                <span className="brand-highlight">
                  delivered in weeks, not quarters.
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                Bench-trained DevOps, Cloud, and SRE squads — vetted in our labs, proven on real
                engagements, and ready to embed in your stack.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={sections.contactProjects}
                  className="btn-neon group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
                >
                  <CalendarDays className="w-5 h-5" />
                  Book a discovery call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button
                  type="button"
                  onClick={() => setTourOpen(true)}
                  aria-label="Open interactive bench tour demo"
                  className="group relative inline-flex flex-col items-center justify-center gap-0.5 px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-violet-600/20 to-cyan-500/20 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 rounded-xl border border-cyan-500/40 group-hover:border-cyan-400/60 transition-colors" />
                  <span className="relative inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
                    Interactive demo
                  </span>
                  <span className="relative text-[10px] text-slate-400 font-normal">Simulated bench tour · 60 sec · no signup</span>
                </button>
              </div>

              <Link
                href={featuredCaseStudyCta.href}
                className="group inline-flex items-start gap-4 p-4 rounded-xl bento-card max-w-md hover:border-cyan-500/25 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <span className="font-display text-xs font-bold text-cyan-400">{featuredCaseStudyCta.abbr}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-cyan-300 transition-colors">
                    {featuredCaseStudyCta.headline}
                  </div>
                  <div className="text-emerald-400 text-xs font-semibold mt-0.5">{featuredCaseStudyCta.metric}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 mt-1 transition-colors" />
              </Link>
            </motion.div>

            <motion.div
              id="bench-demo"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HeroBenchDemo />
            </motion.div>
          </div>
        </div>
      </div>
      <BenchTour open={tourOpen} onClose={() => setTourOpen(false)} />
    </section>
  );
}
