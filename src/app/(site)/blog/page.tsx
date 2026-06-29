import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { blogPosts } from '@/lib/content/blog-posts';

export const metadata = {
  title: 'Blog — AutomateAllOps',
  description: 'DevOps, SRE, and platform engineering articles from the AutomateAllOps team.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="DevOps & SRE Insights"
        description="Production war stories, tool deep dives, and career advice for engineers who ship. Every article ties back to skills you can practice in our labs."
        backHref="/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="text-xs text-cyan-400 font-semibold mb-2">{post.tag} · {post.date} · {post.readTime}</div>
            <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
