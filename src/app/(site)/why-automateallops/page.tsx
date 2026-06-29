import PageHeader from '@/components/PageHeader';
import CompareView from '@/components/content/CompareView';

export const metadata = {
  title: 'Why AutomateAllOps — AutomateAllOps',
  description: 'How AutomateAllOps compares to KodeKloud, Linux Foundation, A Cloud Guru, and YouBrokeProd. DevOps-only, SRE Hub, incident sims, and published cert pass rates.',
};

export default function WhyAutomateAllOpsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Positioning"
        title="Why AutomateAllOps?"
        description="We are not another generalist learning catalog. AutomateAllOps is DevOps-only — hands-on labs, SRE Hub, incident sims, and cert prep with published outcomes."
        backHref="/"
      />
      <CompareView />
    </>
  );
}
