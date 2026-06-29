import PageHeader from '@/components/PageHeader';
import TerminalDemo from '@/components/TerminalDemo';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Interactive Labs — AutomateAllOps',
  description: 'Hands-on DevOps labs in real cloud sandboxes.',
};

export default function LabsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Labs"
        title="Learn by Doing in Real Sandboxes"
        description="Launch Kubernetes clusters, Terraform environments, and CI/CD pipelines in seconds — right inside your browser."
        backHref="/"
      />
      <TerminalDemo />
      <CTA />
    </>
  );
}
