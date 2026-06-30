'use client';
import { useEffect } from 'react';
import { calendlyUrl } from '@/lib/content/contact';

type CalendlyEmbedProps = {
  prefill?: { name?: string; email?: string; customAnswers?: Record<string, string> };
};

export default function CalendlyEmbed({ prefill }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly.com"]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  const url = new URL(calendlyUrl);
  if (prefill?.name) url.searchParams.set('name', prefill.name);
  if (prefill?.email) url.searchParams.set('email', prefill.email);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden border border-white/10 min-h-[680px]"
      data-url={url.toString()}
      style={{ minWidth: '320px', height: '680px' }}
    />
  );
}
