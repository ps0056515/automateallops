import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import type { RichSection } from '@/lib/content/types';

const termsSections: RichSection[] = [
  { title: 'Acceptable use', body: 'AutomateAllOps is for lawful DevOps learning and professional development. You may not use sandboxes for cryptocurrency mining, attacks against third parties, spam, or storage of illegal content.' },
  { title: 'Sandbox responsibilities', items: ['Do not put production credentials in lab environments', 'Do not store personal data subject to regulation (PII, PHI) in sandboxes', 'Report suspected abuse to abuse@automateallops.com', 'Shared isolation — treat sandboxes as untrusted multi-tenant'] },
  { title: 'Account terms', body: 'You are responsible for account security. One person per account unless team license applies. We may suspend accounts violating acceptable use without refund for abuse cases.' },
  { title: 'Content license', body: 'Lab content, playbooks, and paths are licensed for personal and internal team training. Redistribution, scraping, or reselling content is prohibited without written agreement.' },
  { title: 'Disclaimer', body: 'Labs simulate production scenarios but are not production environments. We do not guarantee certification exam results or employment outcomes.' },
];

export const metadata = { title: 'Terms of Service — AutomateAllOps' };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Terms for using the AutomateAllOps platform." backHref="/" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RichContent sections={termsSections} />
        <p className="mt-8 text-slate-400 text-sm">
          Questions: <a href="mailto:legal@automateallops.com" className="text-cyan-400">legal@automateallops.com</a>
        </p>
        <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 text-sm pt-4">← Back to home</Link>
      </div>
    </>
  );
}
