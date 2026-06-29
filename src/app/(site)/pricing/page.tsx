import PageHeader from '@/components/PageHeader';
import DeliveryPricing from '@/components/DeliveryPricing';
import Pricing from '@/components/Pricing';

export const metadata = {
  title: 'Pricing — AutomateAllOps',
  description: 'Transparent squad pricing for DevOps and SRE project delivery. Learning platform plans for engineers.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent pricing for project delivery"
        description="Fixed-scope sprints and embedded squads with published rates. No surprise change orders — bench-trained engineers ready to deploy."
        backHref="/"
      />
      <DeliveryPricing />
      <div className="relative py-16 bg-[#020817] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm mb-4">
            Learning platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Upskill your team between engagements
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Labs, certifications, and SRE Hub for engineers who want to grow — separate from delivery pricing.
          </p>
        </div>
      </div>
      <Pricing />
    </>
  );
}
