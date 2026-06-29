export const sections = {
  home: '/',
  tools: '/tools',
  learn: '/learn',
  labs: '/labs',
  sreHub: '/sre-hub',
  community: '/community',
  getStarted: '/get-started',
  newsletter: '/newsletter',
  signIn: '/sign-in',
  blog: '/blog',
  demo: '/labs',
  about: '/about',
  partners: '/partners',
  enterprise: '/enterprise',
  certifications: '/certifications',
  incidents: '/incidents',
  outcomes: '/outcomes',
  services: '/services',
  cloud: '/cloud',
  whyAutomateAllOps: '/why-automateallops',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
  contactProjects: '/contact',
  contactSales: 'mailto:sales@automateallops.com?subject=AutomateAllOps%20Enterprise',
  careers: 'mailto:careers@automateallops.com?subject=Careers%20at%20AutomateAllOps',
  press: 'mailto:press@automateallops.com?subject=Press%20Inquiry',
} as const;

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function toolHref(slug: string) {
  return `/tools/${slug}`;
}

export function pathHref(slug: string) {
  return `/learn/${slug}`;
}

export function sreHref(slug: string) {
  return `/sre-hub/${slug}`;
}

export function labHref(slug: string) {
  return `/labs/${slug}`;
}

export function communityHref(slug: string) {
  return `/community/${slug}`;
}

export function certHref(slug: string) {
  return `/certifications/${slug}`;
}

export function incidentHref(slug: string) {
  return `/incidents/${slug}`;
}

export function outcomeHref(slug: string) {
  return `/outcomes/${slug}`;
}

export function cloudHref(slug: string) {
  return `/cloud/${slug}`;
}

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: 'Services',
    href: sections.services,
    children: [
      { label: 'All DevOps & SRE Projects', href: sections.services },
      { label: 'Case Studies', href: sections.outcomes },
      { label: 'Enterprise Training', href: sections.enterprise },
      { label: 'Contact Us', href: sections.contactProjects },
    ],
  },
  {
    label: 'Cloud',
    href: sections.cloud,
    children: [
      { label: 'AWS', href: cloudHref('aws') },
      { label: 'Google Cloud (GCP)', href: cloudHref('gcp') },
      { label: 'Microsoft Azure', href: cloudHref('azure') },
      { label: 'Multi-Cloud & Hybrid', href: cloudHref('multi-cloud') },
      { label: 'Cloud Migration', href: cloudHref('cloud-migration') },
      { label: 'Landing Zones & IaC', href: cloudHref('landing-zones') },
      { label: 'FinOps & Cost', href: cloudHref('finops') },
    ],
  },
  {
    label: 'Learn',
    href: sections.learn,
    children: [
      { label: 'All Learning Paths', href: sections.learn },
      { label: 'Kubernetes Engineer', href: pathHref('kubernetes-engineer') },
      { label: 'DevOps Practitioner', href: pathHref('devops-practitioner') },
      { label: 'Site Reliability Engineer', href: pathHref('site-reliability-engineer') },
      { label: 'Platform Engineering', href: pathHref('platform-engineering') },
      { label: 'Certifications (CKA/CKAD/CKS)', href: sections.certifications },
    ],
  },
  {
    label: 'Resources',
    href: sections.labs,
    children: [
      { label: 'Hands-on Labs', href: labHref('hands-on-labs') },
      { label: 'Sandboxes', href: labHref('sandboxes') },
      { label: 'Cert Prep (CKA/CKAD/CKS)', href: sections.certifications },
      { label: 'Incident Playbooks', href: sreHref('incident-playbooks') },
      { label: 'SLO Templates', href: sreHref('slo-error-budget-toolkit') },
      { label: 'Postmortems', href: sreHref('postmortem-library') },
      { label: 'Cheatsheets & CLI Refs', href: sections.tools },
      { label: 'Architecture Diagrams', href: toolHref('architecture-diagrams') },
      { label: 'Community & Discord', href: sections.community },
      { label: 'Blog', href: sections.blog },
    ],
  },
];

export const footerLinks: Record<string, { label: string; href: string }[]> = {
  Cloud: [
    { label: 'AWS', href: cloudHref('aws') },
    { label: 'Google Cloud', href: cloudHref('gcp') },
    { label: 'Azure', href: cloudHref('azure') },
    { label: 'Multi-Cloud', href: cloudHref('multi-cloud') },
    { label: 'Cloud Migration', href: cloudHref('cloud-migration') },
    { label: 'Landing Zones', href: cloudHref('landing-zones') },
    { label: 'FinOps', href: cloudHref('finops') },
  ],
  Learn: [
    { label: 'Kubernetes', href: pathHref('kubernetes-engineer') },
    { label: 'Docker', href: toolHref('docker') },
    { label: 'Terraform', href: toolHref('terraform') },
    { label: 'Ansible', href: toolHref('ansible') },
    { label: 'CI/CD', href: toolHref('github-actions') },
    { label: 'Linux', href: toolHref('linux') },
  ],
  'SRE Hub': [
    { label: 'Playbooks', href: sreHref('incident-playbooks') },
    { label: 'SLO Templates', href: sreHref('slo-error-budget-toolkit') },
    { label: 'Chaos Labs', href: sreHref('chaos-engineering') },
    { label: 'Postmortems', href: sreHref('postmortem-library') },
    { label: 'On-Call Guide', href: sreHref('on-call-excellence') },
    { label: 'Runbooks', href: sreHref('incident-playbooks') },
  ],
  Community: [
    { label: 'Discord', href: communityHref('discord') },
    { label: 'Forum', href: communityHref('forum') },
    { label: 'Events', href: communityHref('events') },
    { label: 'Blog', href: sections.blog },
    { label: 'Newsletter', href: sections.newsletter },
    { label: 'Podcast', href: communityHref('podcast') },
  ],
  Company: [
    { label: 'DevOps & SRE Projects', href: sections.services },
    { label: 'About', href: sections.about },
    { label: 'Why AutomateAllOps', href: sections.whyAutomateAllOps },
    { label: 'Outcomes & Case Studies', href: sections.outcomes },
    { label: 'Enterprise', href: sections.enterprise },
    { label: 'Partners', href: sections.partners },
    { label: 'Careers', href: sections.careers },
    { label: 'Press', href: sections.press },
    { label: 'Privacy Policy', href: sections.privacy },
    { label: 'Terms of Service', href: sections.terms },
  ],
};

export const socialLinks = [
  { label: 'GitHub', href: sections.labs },
  { label: 'Twitter', href: communityHref('discord') },
  { label: 'LinkedIn', href: sections.about },
  { label: 'YouTube', href: sections.demo },
  { label: 'Blog', href: sections.blog },
] as const;
