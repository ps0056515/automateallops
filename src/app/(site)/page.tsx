import Hero from '@/components/Hero';
import SocialProofMarquee from '@/components/SocialProofMarquee';
import WhoItsFor from '@/components/WhoItsFor';
import BenchTeams from '@/components/BenchTeams';
import ProjectDelivery from '@/components/ProjectDelivery';
import ProofHub from '@/components/ProofHub';
import InsightsSection from '@/components/InsightsSection';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofMarquee />
      <WhoItsFor />
      <div id="bench">
        <BenchTeams />
      </div>
      <ProjectDelivery />
      <ProofHub />
      <InsightsSection />
      <CTA />
    </>
  );
}
