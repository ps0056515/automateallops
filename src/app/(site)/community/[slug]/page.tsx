import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CommunityDetailView from '@/components/content/CommunityDetailView';
import { communityPages, getCommunityPage } from '@/lib/content/community';

export function generateStaticParams() {
  return communityPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCommunityPage(slug);
  if (!page) return { title: 'Not Found — AutomateAllOps' };
  return { title: `${page.title} — Community — AutomateAllOps`, description: page.description };
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCommunityPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Community"
        title={page.title}
        description={page.description}
        backHref="/community"
        backLabel="Community"
      />
      <CommunityDetailView page={page} />
    </>
  );
}
