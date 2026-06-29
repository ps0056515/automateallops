import type { RichSection } from './types';

export type EnterpriseFeature = {
  title: string;
  description: string;
  icon: 'sso' | 'labs' | 'analytics' | 'paths' | 'support' | 'security';
};

export const enterpriseFeatures: EnterpriseFeature[] = [
  {
    title: 'SSO / SAML',
    description: 'Okta, Azure AD, Google Workspace, OneLogin — JIT provisioning, SCIM user sync, and domain-restricted access.',
    icon: 'sso',
  },
  {
    title: 'Private labs',
    description: 'Dedicated VPC-isolated sandboxes per team or region. No shared public clusters. Custom network policies and secret injection.',
    icon: 'labs',
  },
  {
    title: 'Team analytics',
    description: 'Manager dashboards: path completion, lab hours, cert readiness scores, skills heatmaps, and on-call readiness indicators.',
    icon: 'analytics',
  },
  {
    title: 'Custom learning paths',
    description: 'Map AutomateAllOps content to your stack — EKS, GitHub Enterprise, Terraform Cloud, internal runbooks as capstone modules.',
    icon: 'paths',
  },
  {
    title: 'Dedicated support',
    description: 'Named customer success manager, Slack connect channel, 4-hour SLA for platform issues, quarterly business reviews.',
    icon: 'support',
  },
  {
    title: 'Security & compliance',
    description: 'SOC 2 Type II, GDPR DPA, audit logs, IP allowlisting, data residency options (US/EU), and procurement-friendly MSAs.',
    icon: 'security',
  },
];

export const enterpriseSections: RichSection[] = [
  {
    title: 'Built for engineering leaders',
    body: 'You need measurable upskilling — not another video library nobody finishes. AutomateAllOps Enterprise gives you lab completion data, cert readiness scores, and incident sim performance so you know who is ready for on-call before you put them on the pager.',
  },
  {
    title: 'SSO / SAML integration',
    body: 'Connect your identity provider in under an hour. Supported: Okta, Azure AD, Google Workspace, OneLogin, PingIdentity. Features include JIT provisioning, SCIM directory sync, group-to-role mapping, and enforced MFA via your IdP.',
    items: [
      'SAML 2.0 and OIDC supported',
      'SCIM 2.0 for automated user lifecycle',
      'Map IdP groups to Admin / Manager / Learner roles',
      'Session timeout policies aligned to your security baseline',
    ],
  },
  {
    title: 'Private lab environments',
    body: 'Public sandboxes are great for individuals. Enterprise teams get isolated environments — dedicated Kubernetes clusters, Terraform state backends, and CI runners that never share infrastructure with other customers.',
    items: [
      'Dedicated VPC per team or business unit',
      'Custom base images with your internal tooling preinstalled',
      'Secrets injected via your vault (HashiCorp Vault, AWS Secrets Manager)',
      'Auto-terminate policies and spend caps per sandbox',
      'Whitelist egress to your internal artifact registries only',
    ],
    callout: { variant: 'tip', text: 'Private labs are included in Enterprise plans with 50+ seats. Smaller teams can add private lab packs à la carte.' },
  },
  {
    title: 'Team analytics dashboard',
    body: 'Managers see what individual learners see — plus org-wide rollups. Export CSV for HR systems or pipe to your BI stack via API.',
    steps: [
      { title: 'Skills heatmap', description: 'Which domains (K8s, Terraform, SRE) are strong vs. gaps across the org.' },
      { title: 'Path progress', description: 'Completion % per learning path, avg. time-to-capstone, drop-off points.' },
      { title: 'Cert readiness', description: 'Mock exam scores trend — know who to approve for exam vouchers.' },
      { title: 'Incident sim scores', description: 'Time-to-resolution and decision quality on practice incidents.' },
      { title: 'On-call readiness', description: 'Composite score combining labs, sims, and cert status — green/yellow/red per engineer.' },
    ],
  },
  {
    title: 'Pricing & procurement',
    body: 'Seat-based annual contracts with volume discounts. Invoice billing, PO support, and MSAs reviewed by your legal team. Most enterprises start with a 90-day pilot (25–50 seats) before org-wide rollout.',
    items: [
      'Starter Enterprise: 25–99 seats',
      'Growth Enterprise: 100–999 seats',
      'Global Enterprise: 1,000+ seats with custom SLA',
      'Academic and bootcamp pricing available',
    ],
  },
];

export const enterpriseLogos = [
  'Meridian Global',
  'NovaPay',
  'CloudStack',
  'TechFlow Inc',
  'DataBridge',
  'SecureNet',
];
