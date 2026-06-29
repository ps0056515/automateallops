import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CaseStudyView from '@/components/content/CaseStudyView';
import { getCaseStudy, caseStudies } from '@/lib/content/proof';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Case Study Not Found — AutomateAllOps' };
  return { title: `${study.company} — Case Study — AutomateAllOps`, description: study.headline };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Case Study"
        title={study.headline}
        description={`${study.company} · ${study.industry}`}
        backHref="/outcomes"
        backLabel="All outcomes"
      />
      <CaseStudyView study={study} />
    </>
  );
}
