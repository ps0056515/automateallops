import PageHeader from '@/components/PageHeader';
import CloudHub from '@/components/CloudHub';

export const metadata = {
  title: 'Cloud — AWS, GCP, Azure — AutomateAllOps',
  description: 'Cloud engineering and delivery on AWS, GCP, and Azure — migrations, EKS/GKE/AKS, landing zones, multi-cloud, and FinOps.',
};

export default function CloudPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cloud"
        title="AWS, GCP & Azure — delivered by senior engineers"
        description="Migrations, Kubernetes on any cloud, landing zones, multi-cloud architecture, and FinOps. We take cloud projects end-to-end."
        backHref="/"
      />
      <CloudHub />
    </>
  );
}
