import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ToolDetailView from '@/components/content/ToolDetailView';
import ToolResourceView from '@/components/content/ToolResourceView';
import { devOpsTools, getTool, getToolResource, toolResources } from '@/lib/content/tools';
import { getToolDetail } from '@/lib/content/tools-detail';

export function generateStaticParams() {
  return [
    ...devOpsTools.map((t) => ({ slug: t.slug })),
    ...toolResources.map((r) => ({ slug: r.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  const resource = getToolResource(slug);
  const title = tool?.name ?? resource?.title;
  if (!title) return { title: 'Not Found — AutomateAllOps' };
  return {
    title: `${title} — AutomateAllOps`,
    description: tool?.description ?? resource?.description,
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  const resource = getToolResource(slug);
  if (!tool && !resource) notFound();

  const detail = getToolDetail(slug);

  if (resource) {
    return (
      <>
        <PageHeader
          eyebrow="Tools"
          title={resource.title}
          description={resource.description}
          backHref="/tools"
          backLabel="All tools"
        />
        <ToolResourceView resource={resource} detail={detail} />
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="DevOps Tool"
        title={tool!.name}
        description={tool!.description}
        backHref="/tools"
        backLabel="All tools"
      />
      <ToolDetailView tool={tool!} detail={detail} />
    </>
  );
}
