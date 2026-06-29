import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import LearnPathDetail from '@/components/content/LearnPathDetail';
import { getLearningPath, learningPaths } from '@/lib/content/learning-paths';

export function generateStaticParams() {
  return learningPaths.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) return { title: 'Path Not Found — AutomateAllOps' };
  return { title: `${path.title} — AutomateAllOps`, description: path.description };
}

export default async function LearnDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Learning Path"
        title={path.title}
        description={path.description}
        backHref="/learn"
        backLabel="All learning paths"
      />
      <LearnPathDetail path={path} />
    </>
  );
}
