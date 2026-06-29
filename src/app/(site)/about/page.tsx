import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import { sections } from '@/lib/navigation';
import type { RichSection } from '@/lib/content/types';

const aboutSections: RichSection[] = [
  {
    title: 'Who we are',
    body: 'AutomateAllOps delivers DevOps, Cloud, and SRE projects for engineering teams that need to ship fast. We don\'t hire freelancers per project — we maintain a bench of ready-made squads, trained through hands-on labs and capstone work before they join a client engagement.',
  },
  {
    title: 'The bench model',
    items: [
      'Engineers join our delivery bench — not the open market',
      'Four pre-built squads: DevOps, Cloud, SRE, and Platform Engineering',
      'Every engineer completes hands-on labs, cert prep, and capstone projects before joining a client engagement',
      'Typical squad deployment in ~2 weeks vs. 3–6 months of traditional hiring',
    ],
  },
  {
    title: 'What we deliver',
    body: 'Kubernetes migrations, CI/CD pipelines, Terraform modules, cloud landing zones, SRE programs, and platform builds — any DevOps or SRE project, delivered by bench-trained engineers who join your team and hand off with full documentation.',
  },
  {
    title: 'Training + delivery — one pipeline',
    items: [
      'In-house training program for DevOps, Cloud, and SRE',
      'Top performers join the AutomateAllOps bench',
      'Client projects keep skills current — real stack, real deadlines',
      'Learning platform labs and delivery work share the same production-grade content',
    ],
  },
  {
    title: 'Deploy a squad',
    body: 'Tell us your stack, timeline, and squad size. We match a bench team to your project — an engineer responds within one business day.',
    callout: { variant: 'info', text: 'Email projects@automateallops.com or visit /services for squad types and engagement models.' },
  },
];

export const metadata = {
  title: 'About — AutomateAllOps',
  description: 'AutomateAllOps — bench-trained DevOps, Cloud, and SRE squads ready to deploy on your projects.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="About AutomateAllOps"
        description="We maintain a bench of pre-trained DevOps, Cloud, and SRE squads — ready to deploy on your project in weeks."
        backHref="/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RichContent sections={aboutSections} />
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href={sections.services} className="text-cyan-400 hover:text-cyan-300">Start a DevOps project →</Link>
          <Link href={sections.outcomes} className="text-cyan-400 hover:text-cyan-300">Outcomes & case studies →</Link>
          <Link href={sections.learn} className="text-cyan-400 hover:text-cyan-300">Explore learning platform →</Link>
          <Link href={sections.careers} className="text-cyan-400 hover:text-cyan-300">Join our team →</Link>
        </div>
      </div>
    </>
  );
}
