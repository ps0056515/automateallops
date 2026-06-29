import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import { blogPosts, getBlogPost } from '@/lib/content/blog-posts';
import { sections } from '@/lib/navigation';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Not Found — AutomateAllOps' };
  return { title: `${post.title} — AutomateAllOps`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${post.tag} · ${post.date} · ${post.readTime} read`}
        title={post.title}
        description={post.excerpt}
        backHref="/blog"
        backLabel="All posts"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RichContent sections={post.sections} />
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-4 justify-between items-center">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm">← All posts</Link>
          <PageCta label="Practice in labs" href={sections.labs} />
        </div>
      </div>
    </>
  );
}
