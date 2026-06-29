import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import type { RichSection } from '@/lib/content/types';

const privacySections: RichSection[] = [
  { title: 'Information we collect', body: 'Account email, lab completion data, usage analytics, and support correspondence. We do not access your employer systems or production infrastructure.' },
  { title: 'How we use data', items: ['Deliver and improve lab experiences', 'Track learning progress you opt into', 'Send newsletter if subscribed', 'Respond to support requests', 'Detect abuse of shared sandboxes'] },
  { title: 'What we do not do', items: ['Sell personal data to third parties', 'Use lab activity for advertising profiles', 'Store payment details on our servers (handled by PCI-compliant processor)', 'Share data with employers unless you join their team account'] },
  { title: 'Your rights', body: 'Request export or deletion of your account data by emailing privacy@automateallops.com. EU/UK users have GDPR rights; California users have CCPA rights. We respond within 30 days.' },
  { title: 'Data retention', body: 'Active account data retained while account exists. Sandbox logs purged after 7 days. Deleted accounts anonymized within 90 days except billing records required by law.' },
];

export const metadata = { title: 'Privacy Policy — AutomateAllOps' };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="How AutomateAllOps handles your data." backHref="/" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RichContent sections={privacySections} />
        <p className="mt-8 text-slate-400 text-sm">
          Contact: <a href="mailto:privacy@automateallops.com" className="text-cyan-400">privacy@automateallops.com</a>
        </p>
        <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 text-sm pt-4">← Back to home</Link>
      </div>
    </>
  );
}
