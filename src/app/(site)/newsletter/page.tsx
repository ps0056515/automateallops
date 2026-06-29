import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import { sections } from '@/lib/navigation';

const newsletterSections = [
  {
    title: 'What you get every week',
    items: [
      'One kubectl/terraform tip you can use immediately',
      'Anonymized incident breakdown and lessons learned',
      'New lab and path announcements',
      'Curated articles from the SRE community — no fluff links',
    ],
  },
  {
    title: 'Who reads it',
    body: 'DevOps engineers, SREs, and platform leads who want to stay sharp without algorithm-driven noise. 12,000+ subscribers, 42% open rate — because every issue earns its place in the inbox.',
  },
  {
    title: 'Sample topics from recent issues',
    items: [
      'Why your HPA scaled to max but latency still spiked',
      'Terraform import vs moved block — when to use which',
      'On-call handoff checklist used by a 200-person eng org',
      'CKA exam change roundup and lab mapping',
    ],
  },
];

export const metadata = {
  title: 'Newsletter — AutomateAllOps',
  description: 'DevOps Weekly Digest — curated K8s tips, SRE incidents, and tool releases.',
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="DevOps Weekly Digest"
        description="Curated Kubernetes tips, SRE incident breakdowns, and tool releases. No fluff, no spam."
        backHref="/"
      />
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <RichContent sections={newsletterSections} />
        <form
          action="mailto:newsletter@automateallops.com"
          encType="text/plain"
          method="POST"
          className="glass rounded-2xl p-8 border border-cyan-500/15 space-y-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
          />
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">
            Subscribe free
          </button>
          <p className="text-xs text-slate-500 text-center">Unsubscribe anytime. We never sell your email.</p>
        </form>
        <PageCta label="Explore labs while you wait" href={sections.labs} />
      </div>
    </>
  );
}
