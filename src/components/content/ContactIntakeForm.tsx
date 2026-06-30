'use client';
import { useState } from 'react';
import { Send, CalendarDays } from 'lucide-react';
import { buildIntakeMailto, intakeFields, type IntakeFormData } from '@/lib/content/contact';

type ContactIntakeFormProps = {
  onSubmitted?: (data: IntakeFormData) => void;
};

const empty: IntakeFormData = {
  name: '',
  email: '',
  company: '',
  squad: 'Not sure yet',
  timeline: 'Exploring options',
  stack: '',
  details: '',
};

export default function ContactIntakeForm({ onSubmitted }: ContactIntakeFormProps) {
  const [form, setForm] = useState<IntakeFormData>(empty);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof IntakeFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    onSubmitted?.(form);
    window.open(buildIntakeMailto(form), '_self');
  }

  const inputClass =
    'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50';

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Project intake</h3>
        <p className="text-slate-400 text-sm">
          Tell us what you need — then book a time below. An engineer reviews every submission.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="intake-name" className="block text-xs text-slate-500 mb-1.5">Your name *</label>
          <input id="intake-name" required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} placeholder="Alex Chen" />
        </div>
        <div>
          <label htmlFor="intake-email" className="block text-xs text-slate-500 mb-1.5">Work email *</label>
          <input id="intake-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="intake-company" className="block text-xs text-slate-500 mb-1.5">Company</label>
        <input id="intake-company" value={form.company} onChange={(e) => update('company', e.target.value)} className={inputClass} placeholder="Acme Corp" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="intake-squad" className="block text-xs text-slate-500 mb-1.5">Squad type</label>
          <select id="intake-squad" value={form.squad} onChange={(e) => update('squad', e.target.value)} className={inputClass}>
            {intakeFields.squads.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="intake-timeline" className="block text-xs text-slate-500 mb-1.5">Timeline</label>
          <select id="intake-timeline" value={form.timeline} onChange={(e) => update('timeline', e.target.value)} className={inputClass}>
            {intakeFields.timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="intake-stack" className="block text-xs text-slate-500 mb-1.5">Your stack</label>
        <input id="intake-stack" value={form.stack} onChange={(e) => update('stack', e.target.value)} className={inputClass} placeholder="EKS, Terraform, GitHub Actions, …" />
      </div>

      <div>
        <label htmlFor="intake-details" className="block text-xs text-slate-500 mb-1.5">What do you need shipped? *</label>
        <textarea
          id="intake-details"
          required
          rows={4}
          value={form.details}
          onChange={(e) => update('details', e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Migration scope, team size, compliance requirements, deadline…"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
      >
        <Send className="w-4 h-4" />
        {submitted ? 'Opening email draft…' : 'Submit & book a call'}
      </button>

      <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
        <CalendarDays className="w-3 h-3" />
        After submitting, pick a time in the Calendly scheduler below
      </p>
    </form>
  );
}
