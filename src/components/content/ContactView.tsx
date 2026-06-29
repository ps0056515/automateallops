'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Mail, ArrowRight, CalendarDays } from 'lucide-react';
import { sections } from '@/lib/navigation';

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

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="font-mono text-sm text-cyan-400 break-all">{email}</div>
      <div className="flex flex-wrap gap-3 mt-auto">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied' : 'Copy email'}
        </button>
        <a
          href={mailto}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-white text-sm font-semibold hover:border-cyan-500/30 transition-all"
        >
          <Mail className="w-4 h-4" />
          Open in email app
        </a>
      </div>
    </div>
  );
}

export default function ContactView() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-cyan-500/20 text-center">
        <CalendarDays className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-white mb-2">30-minute discovery call</h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Tell us your stack, timeline, and squad size. An engineer — not sales — responds within one business day.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <EmailCard
          email="projects@automateallops.com"
          title="Start a project"
          description="Squad sprints, embedded teams, and fixed-scope DevOps delivery."
          subject="AutomateAllOps Project Inquiry"
        />
        <EmailCard
          email="sales@automateallops.com"
          title="Enterprise & retainer"
          description="Multi-squad capacity, procurement, and SOC 2-ready engagements."
          subject="AutomateAllOps Enterprise"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Link
          href={sections.services}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all"
        >
          See service areas
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={sections.outcomes}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-all"
        >
          Read case studies
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
