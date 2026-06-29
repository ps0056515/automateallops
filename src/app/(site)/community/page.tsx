import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import { communityPages } from '@/lib/content/community';
import { communityHref } from '@/lib/navigation';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Community — AutomateAllOps',
  description: 'Join 50,000+ DevOps engineers on Discord, forums, events, and more.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Stories from the AutomateAllOps Community"
        description="Connect with engineers worldwide. Learn faster together — ask questions, share incident stories, and find study groups for cert prep."
        backHref="/"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Why community matters in DevOps</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Production problems rarely appear in documentation. They appear at 2am, in your specific stack, with your team&apos;s constraints.
            The AutomateAllOps community is where engineers share what worked — anonymized postmortems, lab walkthroughs, interview prep, and architecture feedback.
            Every channel is moderated for technical quality, not engagement bait.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {communityPages.map((page) => (
            <Link
              key={page.slug}
              href={communityHref(page.slug)}
              className="glass glass-hover rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all group h-full flex flex-col"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-300 transition-colors">{page.title}</h3>
              <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">{page.description}</p>
              <span className="text-sm text-cyan-400 inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
}
