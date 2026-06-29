import PageHeader from '@/components/PageHeader';
import ContactView from '@/components/content/ContactView';

export const metadata = {
  title: 'Contact — AutomateAllOps',
  description: 'Deploy a bench-trained DevOps, Cloud, or SRE squad. Book a discovery call — an engineer responds within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Deploy a squad"
        description="Describe your stack, timeline, and what you need shipped. We'll match a bench team and respond within one business day."
        backHref="/"
      />
      <ContactView />
    </>
  );
}
