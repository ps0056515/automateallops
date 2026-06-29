import PageHeader from '@/components/PageHeader';
import Tools from '@/components/Tools';

export const metadata = {
  title: 'DevOps Tools — AutomateAllOps',
  description: 'Hands-on labs and references for 40+ DevOps and SRE tools.',
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Every Tool You Need to Ship Production Systems"
        description="Hands-on labs, cheatsheets, and CLI references for Kubernetes, Terraform, Docker, and 40+ more."
        backHref="/"
      />
      <Tools />
    </>

  );
}
