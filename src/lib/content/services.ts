import type { RichSection } from './types';

export type ServiceOffering = {
  title: string;
  description: string;
  examples: string[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    title: 'Kubernetes & Platform Engineering',
    description: 'Cluster design, migrations, GitOps, and internal developer platforms — built to your standards.',
    examples: ['EKS/GKE/AKS cluster setup & hardening', 'GitOps with ArgoCD or Flux', 'Multi-tenant namespace strategy', 'Platform team golden paths'],
  },
  {
    title: 'CI/CD & Release Engineering',
    description: 'Pipelines that ship safely — from monorepo builds to progressive delivery in production.',
    examples: ['GitHub Actions / GitLab CI pipelines', 'Blue-green & canary deployments', 'Artifact signing & SBOM in CI', 'Deployment frequency & DORA metrics'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Terraform, OpenTofu, Pulumi, and CloudFormation — modules your team can own long-term.',
    examples: ['Multi-account AWS landing zones', 'Terraform module libraries', 'Policy-as-code (OPA, Sentinel)', 'State management & drift detection'],
  },
  {
    title: 'Site Reliability Engineering',
    description: 'Reliability programs that stick — SLOs, observability, incident response, and on-call readiness.',
    examples: ['SLO/SLI design & error budgets', 'Prometheus/Grafana/Datadog observability stacks', 'Incident playbooks & postmortem culture', 'Chaos engineering & game days'],
  },
  {
    title: 'Cloud & DevSecOps',
    description: 'Secure cloud-native systems — networking, secrets, compliance, and supply chain security.',
    examples: ['Zero-trust networking & service mesh', 'Secrets management (Vault, AWS SM)', 'Container scanning & admission control', 'SOC 2 / HIPAA-ready infra patterns'],
  },
  {
    title: 'Staff Augmentation & On-Call',
    description: 'Senior DevOps and SRE engineers embedded in your team — short sprints or long engagements.',
    examples: ['Dedicated SRE squad for 3–12 months', 'On-call coverage & escalation support', 'Interview loop & hiring bar consulting', 'Knowledge transfer before we roll off'],
  },
];

export const deliveryModel = [
  { step: 'Discovery call', timeAnchor: 'Day 1', detail: '30-minute scoping call — stack, timeline, success criteria. No sales deck, just engineers on the call from minute one.' },
  { step: 'Proposal in your inbox', timeAnchor: 'Day 3', detail: 'Fixed-scope sprint or time-and-materials team — you choose. Clear deliverables, pricing, and weekly demo cadence.' },
  { step: 'Engineers in your Slack', timeAnchor: 'Week 2', detail: 'Senior engineers own the work. Daily async updates, PRs in your repos, standups on your schedule.' },
  { step: 'You own it forever', timeAnchor: 'Week 6', detail: 'Runbooks, architecture diagrams, and recorded walkthroughs handed off. Optional retainer if you want us to stay.' },
];

export const engineerCapabilities = [
  'CKA / CKAD / CKS certified engineers',
  'Production on-call experience at scale',
  'AWS, GCP, and Azure practitioners',
  'Full-stack ops: code, infra, observability, incidents',
  'Async-friendly — US, EU, and APAC time zones',
];

export const serviceSections: RichSection[] = [
  {
    title: 'Bench-trained squads',
    body: 'We don\'t hire per project. AutomateAllOps maintains a bench of ready-made DevOps, Cloud, and SRE squads — every engineer completes hands-on labs and capstone projects before joining a client engagement. Pick a squad, tell us your stack, and we deploy in weeks.',
  },
  {
    title: 'How we work',
    steps: deliveryModel.map((d) => ({ title: d.step, description: d.detail })),
  },
  {
    title: 'Our engineers',
    items: engineerCapabilities,
    callout: { variant: 'info', text: 'Every engineer on delivery engagements has carried a production pager. We match skill set to your stack — not whoever is bench-available.' },
  },
  {
    title: 'Engagement types',
    items: [
      'Fixed-scope project (2–8 weeks) — defined deliverable, fixed price',
      'Embedded team (1–6 months) — engineers join your standups and Slack',
      'Retainer — ongoing SRE/on-call and infra maintenance',
      'Rescue engagement — production is on fire, we stabilize first, plan second',
    ],
  },
];

export const servicesStats = [
  { value: '50+', label: 'Delivery Engineers' },
  { value: '200+', label: 'Projects Shipped' },
  { value: '8 yrs', label: 'Avg. Engineer Experience' },
  { value: '100%', label: 'DevOps & SRE Focus' },
];
