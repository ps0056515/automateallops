import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import type { RichSection } from '@/lib/content/types';

const cookieSections: RichSection[] = [
  { title: 'Essential cookies', body: 'Required for authentication, session management, and CSRF protection. Cannot be disabled while using logged-in features.' },
  { title: 'Analytics cookies', body: 'Help us understand which labs are completed, where users get stuck, and platform performance. Data aggregated — not sold.' },
  { title: 'Preference cookies', body: 'Remember theme, dismissed banners, and lab editor settings across visits.' },
  { title: 'Managing cookies', body: 'Browser settings can block cookies but will break sign-in and lab progress sync. We honor Do Not Track for analytics where technically feasible.' },
  { title: 'Third parties', items: ['Payment processor (session only during checkout)', 'Error monitoring for platform stability', 'No advertising networks'] },
];

export const metadata = { title: 'Cookie Policy — AutomateAllOps' };

export default function CookiesPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookie Policy" description="How AutomateAllOps uses cookies." backHref="/" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RichContent sections={cookieSections} />
        <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 text-sm pt-4">← Back to home</Link>
      </div>
    </>
  );
}
