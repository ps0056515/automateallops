import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import SreDetailView from '@/components/content/SreDetailView';
import { getSreFeature, sreFeatures } from '@/lib/content/sre-features';

export function generateStaticParams() {
  return sreFeatures.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getSreFeature(slug);
  if (!feature) return { title: 'Not Found — AutomateAllOps' };
  return { title: `${feature.title} — SRE Hub — AutomateAllOps`, description: feature.desc };
}

export default async function SreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getSreFeature(slug);
  if (!feature) notFound();

  return (
    <>
      <PageHeader
        eyebrow="SRE Hub"
        title={feature.title}
        description={feature.overview}
        backHref="/sre-hub"
        backLabel="SRE Hub"
      />
      <SreDetailView feature={feature} />
    </>
  );
}
