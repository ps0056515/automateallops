import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import IncidentSimulator from '@/components/content/IncidentSimulator';
import { getIncidentScenario, incidentScenarios } from '@/lib/content/incidents';

export function generateStaticParams() {
  return incidentScenarios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scenario = getIncidentScenario(slug);
  if (!scenario) return { title: 'Incident Not Found — AutomateAllOps' };
  return { title: `${scenario.title} — Incident Sim — AutomateAllOps`, description: scenario.description };
}

export default async function IncidentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scenario = getIncidentScenario(slug);
  if (!scenario) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${scenario.severity} · ${scenario.duration}`}
        title={scenario.title}
        description={scenario.description}
        backHref="/incidents"
        backLabel="All incidents"
      />
      <IncidentSimulator scenario={scenario} />
    </>
  );
}
