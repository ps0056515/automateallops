import PageHeader from '@/components/PageHeader';
import SREHub from '@/components/SREHub';

export const metadata = {
  title: 'SRE Hub — AutomateAllOps',
  description: 'Production-grade SRE toolkit: playbooks, SLOs, chaos engineering, and postmortems.',
};

export default function SreHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="SRE Hub"
        title="Production-Grade SRE Toolkit"
        description="Everything you need to build reliable systems, respond faster to incidents, and eliminate toil."
        backHref="/"
      />
      <SREHub />
    </>

  );
}
