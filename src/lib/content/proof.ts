export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  logo: string;
  headline: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  quote: { text: string; author: string; role: string };
};

export type CertPassRate = {
  exam: string;
  slug: string;
  passRate: string;
  attempts: string;
  avgPrepWeeks: string;
  lfExamUrl?: string;
};

// Delivery-focused metrics — shown first on homepage
export const deliveryMetrics: ProofMetric[] = [
  { value: '200+', label: 'Projects delivered', detail: 'Across Kubernetes, CI/CD, Terraform, SRE, and cloud migrations' },
  { value: '97%', label: 'On-time delivery', detail: 'Projects completed within the agreed scope and timeline' },
  { value: '8 yrs', label: 'Avg. engineer experience', detail: 'Every delivery engineer has carried a production pager' },
  { value: '6 wks', label: 'Avg. engagement', detail: 'From scoping call to production handoff' },
  { value: '50+', label: 'Delivery engineers', detail: 'US, EU, and APAC time zones — async-friendly' },
  { value: '100%', label: 'DevOps & SRE focus', detail: 'We do one thing and do it deeply — no generalist shops' },
];

// Training platform metrics — secondary, used as trust signal
export const proofMetrics: ProofMetric[] = [
  { value: '50,000+', label: 'Engineers trained', detail: 'Active learners across 120+ countries since 2022' },
  { value: '94%', label: 'CKA first-attempt pass', detail: 'Among members who complete the full prep track' },
  { value: '2,400+', label: 'Certifications earned', detail: 'CKA, CKAD, CKS, AWS DevOps, Terraform Associate' },
  { value: '87%', label: 'Career advancement', detail: 'Reported promotion or role change within 12 months' },
  { value: '40%', label: 'Faster onboarding', detail: 'Enterprise teams vs. traditional shadowing programs' },
  { value: '4.9/5', label: 'Platform rating', detail: 'Based on 12,000+ verified learner reviews' },
];

export const certPassRates: CertPassRate[] = [
  {
    exam: 'CKA',
    slug: 'cka',
    passRate: '94%',
    attempts: '1,840',
    avgPrepWeeks: '6',
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
  },
  {
    exam: 'CKAD',
    slug: 'ckad',
    passRate: '91%',
    attempts: '620',
    avgPrepWeeks: '4',
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
  },
  {
    exam: 'CKS',
    slug: 'cks',
    passRate: '88%',
    attempts: '310',
    avgPrepWeeks: '8',
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/',
  },
  {
    exam: 'AWS DevOps Pro',
    slug: 'aws-devops-pro',
    passRate: '86%',
    attempts: '480',
    avgPrepWeeks: '10',
  },
  {
    exam: 'Terraform Associate',
    slug: 'terraform-associate',
    passRate: '92%',
    attempts: '390',
    avgPrepWeeks: '3',
    lfExamUrl: 'https://www.hashicorp.com/certification/terraform-associate',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-platform-team',
    company: 'NovaPay',
    industry: 'Fintech',
    logo: 'NP',
    headline: 'EKS migration completed in 5 weeks — team owned it from day one',
    challenge: 'NovaPay needed to migrate a 40-service platform from EC2 to EKS without disrupting payments processing. Internal team lacked Kubernetes depth.',
    solution: 'AutomateAllOps embedded two senior engineers for 5 weeks — cluster design, GitOps setup with ArgoCD, service mesh, and full handoff documentation.',
    results: [
      { metric: '5 weeks', label: 'EC2 → EKS migration' },
      { metric: '0', label: 'Payment disruptions during cutover' },
      { metric: '40%', label: 'Infrastructure cost reduction post-migration' },
    ],
    quote: {
      text: 'AutomateAllOps engineers wrote code in our repos, attended our standups, and left us with runbooks we actually use. That\'s different from every other vendor we\'ve used.',
      author: 'Elena Vasquez',
      role: 'Director of Platform Engineering, NovaPay',
    },
  },
  {
    slug: 'saas-sre-transformation',
    company: 'CloudStack',
    industry: 'B2B SaaS',
    logo: 'CS',
    headline: 'SRE program built from zero — 73% fewer repeat incidents in 6 months',
    challenge: 'CloudStack had no SRE function. Alert noise was constant, postmortems were rare, and engineering morale was suffering from repeated on-call burnout.',
    solution: 'AutomateAllOps designed and implemented SLOs, built Prometheus/Grafana observability, established incident response processes, and trained 6 engineers through the transition.',
    results: [
      { metric: '73%', label: 'Reduction in repeat incidents' },
      { metric: '99.95%', label: 'Uptime achieved in 6 months' },
      { metric: '6', label: 'Engineers trained and SRE-certified' },
    ],
    quote: {
      text: 'The postmortem culture change alone was worth it. AutomateAllOps gave us vocabulary and muscle memory before our first real SEV-1.',
      author: 'James Okonkwo',
      role: 'Head of SRE, CloudStack',
    },
  },
  {
    slug: 'ci-cd-rescue',
    company: 'Vantage Commerce',
    industry: 'E-commerce',
    logo: 'VC',
    headline: 'Broken CI/CD pipeline fixed and replaced in 3 weeks — deploy time cut 80%',
    challenge: 'Vantage\'s Jenkins setup had grown unmaintainable. Deploys took 45 minutes, broke constantly, and blocked the 30-person eng team every other day.',
    solution: 'AutomateAllOps replaced Jenkins with GitHub Actions, introduced Docker layer caching, parallel test execution, and blue-green deployments to ECS.',
    results: [
      { metric: '9 min', label: 'Deploy time (was 45 min)' },
      { metric: '80%', label: 'Fewer pipeline failures' },
      { metric: '3 weeks', label: 'Full delivery timeline' },
    ],
    quote: {
      text: 'We were losing days every week to pipeline fires. AutomateAllOps fixed it and built something we can actually own. Engineers are happier.',
      author: 'Marcus Webb',
      role: 'VP Engineering, Vantage Commerce',
    },
  },
  {
    slug: 'global-enterprise-rollout',
    company: 'Meridian Global',
    industry: 'Enterprise software',
    logo: 'MG',
    headline: 'Multi-cloud Terraform landing zone deployed across 8 regions in 8 weeks',
    challenge: 'Meridian needed a standardised multi-account AWS/GCP setup with network segmentation, SSO, and policy guardrails across 8 regional offices.',
    solution: 'AutomateAllOps designed and delivered a Terraform module library, Control Tower landing zone, Vault secrets management, and OPA policy-as-code from scratch.',
    results: [
      { metric: '8 regions', label: 'Deployed simultaneously' },
      { metric: '100%', label: 'Policy compliance on day one' },
      { metric: '60%', label: 'Reduced cloud governance overhead' },
    ],
    quote: {
      text: 'Team analytics finally let us see who was ready for on-call rotation. We stopped guessing and started measuring.',
      author: 'Sarah Lindstrom',
      role: 'VP Engineering, Meridian Global',
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
