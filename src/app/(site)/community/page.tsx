import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import { communityPages } from '@/lib/content/community';
import { communityHref, sections } from '@/lib/navigation';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Community — AutomateAllOps',
  description: 'DevOps community resources — blog, newsletter, and upcoming Discord and events.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Learn together"
        description="Blog, newsletter, and learning resources available now. Discord, forum, and events launching soon — join the newsletter for early access."
        backHref="/"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">What&apos;s live today</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
            Production problems rarely appear in documentation. Our blog and newsletter cover anonymized postmortems,
            lab walkthroughs, and cert prep — written for engineers, not engagement bait.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={sections.blog} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold">
              Read the blog <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={sections.newsletter} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-white text-sm font-semibold hover:border-cyan-500/30 transition-all">
              Subscribe to newsletter
            </Link>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white mb-4">Coming soon</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {communityPages.map((page) => (
            <Link
              key={page.slug}
              href={communityHref(page.slug)}
              className="glass glass-hover rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all group h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-bold group-hover:text-cyan-300 transition-colors">{page.title}</h3>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Soon
                </span>
              </div>
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
