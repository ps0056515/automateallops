export type CompareRow = {
  feature: string;
  AutomateAllOps: string | boolean;
  kodekloud: string | boolean;
  linuxFoundation: string | boolean;
  aCloudGuru: string | boolean;
  youBrokeProd: string | boolean;
};

export const compareRows: CompareRow[] = [
  { feature: 'DevOps-only focus', AutomateAllOps: true, kodekloud: 'Partial', linuxFoundation: 'Partial', aCloudGuru: false, youBrokeProd: true },
  { feature: 'Hands-on labs in browser', AutomateAllOps: true, kodekloud: true, linuxFoundation: 'Limited', aCloudGuru: true, youBrokeProd: false },
  { feature: 'Live K8s sandboxes', AutomateAllOps: true, kodekloud: true, linuxFoundation: false, aCloudGuru: 'Playground only', youBrokeProd: false },
  { feature: 'CKA/CKAD/CKS mock exams', AutomateAllOps: '6 full mocks + Killer.sh guidance', kodekloud: true, linuxFoundation: 'Exam only', aCloudGuru: 'Limited', youBrokeProd: false },
  { feature: 'Incident simulations', AutomateAllOps: 'Free tier + 5 scenarios', kodekloud: 'KodeKloud Engineer Pro', linuxFoundation: false, aCloudGuru: false, youBrokeProd: 'Free tier' },
  { feature: 'SRE Hub (playbooks, SLOs, postmortems)', AutomateAllOps: true, kodekloud: false, linuxFoundation: false, aCloudGuru: false, youBrokeProd: false },
  { feature: 'Cert pass rate published', AutomateAllOps: '94% CKA (tracked)', kodekloud: 'Claims only', linuxFoundation: 'N/A', aCloudGuru: 'Claims only', youBrokeProd: 'N/A' },
  { feature: 'Enterprise SSO / SAML', AutomateAllOps: true, kodekloud: true, linuxFoundation: false, aCloudGuru: true, youBrokeProd: false },
  { feature: 'Private lab environments', AutomateAllOps: true, kodekloud: 'Business plan', linuxFoundation: false, aCloudGuru: false, youBrokeProd: false },
  { feature: 'Team analytics dashboard', AutomateAllOps: true, kodekloud: true, linuxFoundation: false, aCloudGuru: true, youBrokeProd: false },
  { feature: 'Case studies & outcomes data', AutomateAllOps: true, kodekloud: true, linuxFoundation: 'Limited', aCloudGuru: true, youBrokeProd: false },
  { feature: 'Starting price (individual)', AutomateAllOps: 'Free tier', kodekloud: 'Free tier', linuxFoundation: 'Exam fee only', aCloudGuru: 'Subscription', youBrokeProd: 'Free' },
];

export const positioningPoints = [
  {
    title: 'DevOps-only — not a generalist catalog',
    body: 'KodeKloud and A Cloud Guru cover ML, security+, and unrelated certs. AutomateAllOps is 100% shipping and running systems: K8s, CI/CD, IaC, SRE, GitOps. Every minute you spend is ops-relevant.',
  },
  {
    title: 'SRE Hub — our moat',
    body: 'No competitor bundles incident playbooks, SLO templates, chaos labs, and a postmortem library with hands-on labs. AutomateAllOps is where you learn AND where your team documents how you operate.',
  },
  {
    title: 'Incident sims included — not a separate product',
    body: 'YouBrokeProd pioneered free incident practice. We integrate interactive incident scenarios into the platform — tied to your lab progress and on-call readiness score.',
  },
  {
    title: 'Cert prep with proof',
    body: 'We publish pass rates (94% CKA first attempt among track completers), offer Killer.sh-style timed mocks, and link directly to Linux Foundation exam registration. Prep with evidence, not marketing claims.',
  },
  {
    title: 'Enterprise that ships today',
    body: 'SSO, private labs, and team analytics are live — not roadmap items. A global enterprise client rolled out 12,000 seats across 8 regions. See case studies for outcomes.',
  },
];
