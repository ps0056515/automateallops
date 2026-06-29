import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import Link from 'next/link';
import { sections } from '@/lib/navigation';

const partnerSections = [
  {
    title: 'Enterprise DevOps training',
    body: 'Upskill platform, DevOps, and SRE teams with private sandboxes, custom learning paths aligned to your stack, and progress analytics managers actually use.',
  },
  {
    title: 'What enterprise includes',
    items: [
      'SSO/SAML with Okta, Azure AD, Google Workspace — JIT provisioning and SCIM sync',
      'Private lab VPCs isolated from public sandboxes — per team or region',
      'Team analytics: skills heatmaps, cert readiness, incident sim scores, on-call readiness',
      'Custom paths mapped to your tooling (EKS, GitHub Enterprise, Terraform Cloud)',
      'Dedicated customer success, quarterly business reviews, and 4-hour SLA',
      'Invoice billing, MSAs, SOC 2 Type II, and procurement-friendly contracts',
    ],
  },
  {
    title: 'Team onboarding use case',
    body: 'New hire week zero: complete Kubernetes path capstone in sandbox, pass incident simulation, earn on-call readiness green — before touching prod. Teams report 40% faster time-to-first-meaningful-commit.',
  },
  {
    title: 'Partnership models',
    items: [
      'Seat-based licensing for engineering orgs (25 to 12,000+ seats)',
      'Academic and bootcamp partnerships with curriculum integration',
      'Technology partners co-marketing lab content',
      'Consultancies using AutomateAllOps for client workshops',
    ],
  },
];

export const metadata = {
  title: 'Partners — AutomateAllOps',
  description: 'Partner with AutomateAllOps for DevOps training and enterprise solutions.',
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="Partners & Enterprise"
        description="Train your engineering teams on AutomateAllOps with private labs, custom paths, SSO, and dedicated support."
        backHref="/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Link href={sections.enterprise} className="block glass rounded-xl p-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
          <span className="text-cyan-400 font-semibold">→ Full enterprise feature breakdown</span>
          <span className="text-slate-500 text-sm block mt-1">SSO, private labs, team analytics, security & compliance</span>
        </Link>
        <RichContent sections={partnerSections} />
        <PageCta label="Contact sales" href={sections.contactSales} secondaryLabel="View enterprise page" secondaryHref={sections.enterprise} />
      </div>
    </>
  );
}
