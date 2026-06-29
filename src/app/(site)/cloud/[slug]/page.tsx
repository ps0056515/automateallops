import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CloudDetailView from '@/components/content/CloudDetailView';
import { getCloudTopic, cloudTopics } from '@/lib/content/cloud';

export function generateStaticParams() {
  return cloudTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getCloudTopic(slug);
  if (!topic) return { title: 'Not Found — AutomateAllOps' };
  return { title: `${topic.title} — Cloud — AutomateAllOps`, description: topic.desc };
}

export default async function CloudDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getCloudTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Cloud"
        title={topic.title}
        description={topic.overview}
        backHref="/cloud"
        backLabel="All cloud topics"
      />
      <CloudDetailView topic={topic} />
    </>
  );
}
