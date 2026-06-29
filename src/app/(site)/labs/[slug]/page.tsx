import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import LabDetailView from '@/components/content/LabDetailView';
import { getLabCategory, labCategories } from '@/lib/content/labs';

export function generateStaticParams() {
  return labCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getLabCategory(slug);
  if (!category) return { title: 'Lab Not Found — AutomateAllOps' };
  return { title: `${category.title} — AutomateAllOps`, description: category.description };
}

export default async function LabDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getLabCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Labs"
        title={category.title}
        description={category.description}
        backHref="/labs"
        backLabel="All labs"
      />
      <LabDetailView category={category} />
    </>
  );
}
