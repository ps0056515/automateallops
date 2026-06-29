import PageHeader from '@/components/PageHeader';
import ServicesDetailView from '@/components/content/ServicesDetailView';

export const metadata = {
  title: 'DevOps & SRE Projects — AutomateAllOps',
  description: 'AutomateAllOps takes on any DevOps or SRE project — Kubernetes, CI/CD, Terraform, SRE programs — with senior engineers ready to deliver.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project delivery"
        title="We take on any DevOps & SRE project"
        description="Bench-trained DevOps, Cloud, and SRE squads — ready to deploy. Kubernetes, CI/CD, Terraform, cloud migrations. Tell us what squad you need."
        backHref="/"
      />
      <ServicesDetailView />
    </>
  );
}
