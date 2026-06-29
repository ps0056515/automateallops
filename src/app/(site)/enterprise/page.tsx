import PageHeader from '@/components/PageHeader';
import EnterpriseDetailView from '@/components/content/EnterpriseDetailView';

export const metadata = {
  title: 'Enterprise — AutomateAllOps',
  description: 'SSO/SAML, private labs, team analytics, and custom learning paths for engineering organizations.',
};

export default function EnterprisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise"
        title="DevOps upskilling at org scale"
        description="SSO, private lab VPCs, team analytics, custom paths, and dedicated support — live today, not on a roadmap. Meridian Global deployed 12,000 seats across 8 regions."
        backHref="/"
      />
      <EnterpriseDetailView />
    </>
  );
}
