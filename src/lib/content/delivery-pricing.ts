export type DeliveryPlan = {
  name: string;
  price: string;
  priceDetail: string;
  description: string;
  squadSize: string;
  duration: string;
  popular?: boolean;
  includes: string[];
  bestFor: string;
};

export const deliveryPlans: DeliveryPlan[] = [
  {
    name: 'Squad Sprint',
    price: '$18,000',
    priceDetail: 'fixed · 2 weeks',
    description: 'Two bench engineers on a focused deliverable — pipeline fix, cluster setup, or migration spike.',
    squadSize: '2 engineers',
    duration: '2 weeks',
    includes: [
      'Discovery + fixed-scope proposal in 48 hrs',
      'Daily async updates + weekly demo',
      'Work in your repos & Slack',
      'Runbooks + handoff walkthrough',
    ],
    bestFor: 'Pipeline rescue, K8s POC, Terraform module delivery',
  },
  {
    name: 'Embedded Squad',
    price: '$42,000',
    priceDetail: '/ month · 3–4 engineers',
    description: 'A full bench squad joins your team — standups, on-call shadowing, production ownership.',
    squadSize: '3–4 engineers',
    duration: '1–6 months',
    popular: true,
    includes: [
      'Squad matched to stack (DevOps / Cloud / SRE / Platform)',
      'Weekly demos + sprint planning',
      'Bench replacement if engineer rolls off',
      'Bench-trained — not contractors',
    ],
    bestFor: 'EKS migration, SRE program build, platform engineering',
  },
  {
    name: 'Enterprise Retainer',
    price: 'Custom',
    priceDetail: 'annual contract',
    description: 'Dedicated bench capacity, multiple squads, SLA, and priority deploy queue.',
    squadSize: 'Flexible',
    duration: '6–12 months',
    includes: [
      'Named squad leads + backup bench',
      'SOC 2 / NDA / procurement-ready',
      'Multi-region async coverage',
      'Quarterly capacity planning with bench pipeline',
    ],
    bestFor: 'Enterprise platform teams, multi-project portfolios',
  },
];

export const pricingFaqs = [
  { q: 'What\'s included in the price?', a: 'Engineer time, delivery management, handoff docs, and runbooks. Your cloud costs and third-party licenses are separate.' },
  { q: 'How fast can a squad deploy?', a: 'Most squads deploy within 2 weeks of signing. "Available now" engineers can start in days.' },
  { q: 'Are these freelancers?', a: 'No — every engineer is bench-trained and on the AutomateAllOps roster. Same people, same standards.' },
];
