import { Shield, Server, BarChart3, Route, Headphones, Lock } from 'lucide-react';
import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import { enterpriseFeatures, enterpriseSections, enterpriseLogos } from '@/lib/content/enterprise';
import { sections } from '@/lib/navigation';

const iconMap = {
  sso: Shield,
  labs: Server,
  analytics: BarChart3,
  paths: Route,
  support: Headphones,
  security: Lock,
};

export default function EnterpriseDetailView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {enterpriseFeatures.map((f) => {
          const Icon = iconMap[f.icon];
          return (
            <div key={f.title} className="glass rounded-xl p-5 border border-white/10">
              <Icon className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-slate-500 mb-4">Trusted by engineering teams at</p>
        <div className="flex flex-wrap justify-center gap-6">
          {enterpriseLogos.map((logo) => (
            <span key={logo} className="text-slate-400 font-semibold text-sm">{logo}</span>
          ))}
        </div>
      </div>

      <RichContent sections={enterpriseSections} />

      <PageCta
        label="Contact sales"
        href={sections.contactSales}
        secondaryLabel="View case studies"
        secondaryHref={sections.outcomes}
      />
    </div>
  );
}
