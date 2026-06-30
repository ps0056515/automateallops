'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Mail, ArrowRight, CalendarDays } from 'lucide-react';
import { sections } from '@/lib/navigation';
import type { IntakeFormData } from '@/lib/content/contact';
import ContactIntakeForm from '@/components/content/ContactIntakeForm';
import CalendlyEmbed from '@/components/content/CalendlyEmbed';

function EmailCard({
  email,
  title,
  description,
  subject,
}: {
  email: string;
  title: string;
  description: string;
  subject: string;
}) {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="glass rounded-2xl p-5 border border-white/10 flex flex-col gap-3">
      <div>
        <h3 className="text-base font-bold text-white mb-1">{title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
      </div>
      <div className="font-mono text-xs text-cyan-400 break-all">{email}</div>
      <div className="flex flex-wrap gap-2 mt-auto">
        <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold hover:border-cyan-500/30 transition-all">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
        <a href={mailto} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg glass border border-white/10 text-white text-xs font-semibold hover:border-cyan-500/30 transition-all">
          <Mail className="w-3.5 h-3.5" />
          Email
        </a>
      </div>
    </div>
  );
}

export default function ContactView() {
  const [calendlyPrefill, setCalendlyPrefill] = useState<{ name?: string; email?: string }>({});

  function handleIntakeSubmitted(data: IntakeFormData) {
    setCalendlyPrefill({ name: data.name, email: data.email });
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <ContactIntakeForm onSubmitted={handleIntakeSubmitted} />
        <div className="space-y-5">
          <div className="glass rounded-2xl p-6 border border-cyan-500/20">
            <CalendarDays className="w-8 h-8 text-cyan-400 mb-3" />
            <h2 className="text-xl font-black text-white mb-2">What happens next</h2>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2"><span className="text-cyan-400 font-bold">1.</span> Engineer reviews your intake (not sales)</li>
              <li className="flex gap-2"><span className="text-cyan-400 font-bold">2.</span> 30-min discovery call to confirm scope</li>
              <li className="flex gap-2"><span className="text-cyan-400 font-bold">3.</span> Fixed-scope proposal in your inbox within 48 hrs</li>
            </ol>
          </div>
          <EmailCard email="projects@automateallops.com" title="Start a project" description="Squad sprints and embedded teams." subject="AutomateAllOps Project Inquiry" />
          <EmailCard email="sales@automateallops.com" title="Enterprise & retainer" description="Multi-squad capacity and procurement." subject="AutomateAllOps Enterprise" />
        </div>
      </div>

      <div id="book-call" className="scroll-mt-24">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white mb-2">Book your discovery call</h2>
          <p className="text-slate-400 text-sm">Pick a time that works — no commitment required.</p>
        </div>
        <CalendlyEmbed prefill={calendlyPrefill} />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href={sections.services} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all">
          See service areas <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href={sections.outcomes} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all">
          Read case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
