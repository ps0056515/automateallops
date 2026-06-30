export type BenchEngineer = {
  id: string;
  name: string;
  role: string;
  squad: 'DevOps' | 'Cloud' | 'SRE' | 'Platform';
  experience: string;
  certs: string[];
  specialties: string[];
  availability: 'Available now' | 'Available in 1 week' | 'On engagement';
  timezone: string;
  bio: string;
  linkedIn: string;
};

export const benchEngineers: BenchEngineer[] = [
  {
    id: 'eng-1',
    name: 'Priya Nair',
    role: 'Lead DevOps Engineer',
    squad: 'DevOps',
    experience: '9 yrs',
    certs: ['CKA', 'AWS DevOps Pro'],
    specialties: ['GitHub Actions', 'GitOps', 'ArgoCD'],
    availability: 'Available now',
    timezone: 'IST / US overlap',
    bio: 'Former platform lead at a high-growth fintech. Shipped GitOps for 40+ microservices and cut deploy time 70%.',
    linkedIn: 'https://www.linkedin.com/in/priya-nair-devops',
  },
  {
    id: 'eng-2',
    name: 'James Okonkwo',
    role: 'Principal Cloud Architect',
    squad: 'Cloud',
    experience: '12 yrs',
    certs: ['AWS SA Pro', 'Terraform Associate'],
    specialties: ['EKS', 'Landing zones', 'Multi-account AWS'],
    availability: 'Available now',
    timezone: 'GMT / EU',
    bio: 'Designed landing zones for three enterprise AWS orgs. Led EKS migrations with zero-downtime cutovers.',
    linkedIn: 'https://www.linkedin.com/in/james-okonkwo-cloud',
  },
  {
    id: 'eng-3',
    name: 'Sarah Lindstrom',
    role: 'Staff SRE',
    squad: 'SRE',
    experience: '10 yrs',
    certs: ['CKS', 'CKA'],
    specialties: ['SLO design', 'Prometheus/Grafana', 'Incident response'],
    availability: 'Available in 1 week',
    timezone: 'US Eastern',
    bio: 'Built SRE programs from zero at two B2B SaaS companies. On-call veteran with 99.95%+ uptime track record.',
    linkedIn: 'https://www.linkedin.com/in/sarah-lindstrom-sre',
  },
  {
    id: 'eng-4',
    name: 'Marcus Webb',
    role: 'Platform Engineering Lead',
    squad: 'Platform',
    experience: '8 yrs',
    certs: ['CKAD', 'GCP Professional'],
    specialties: ['Internal dev platforms', 'Backstage', 'Golden paths'],
    availability: 'Available now',
    timezone: 'IST / APAC',
    bio: 'Shipped internal developer platforms serving 200+ engineers. Backstage and K8s golden-path expert.',
    linkedIn: 'https://www.linkedin.com/in/marcus-webb-platform',
  },
  {
    id: 'eng-5',
    name: 'Elena Vasquez',
    role: 'Senior Cloud Engineer',
    squad: 'Cloud',
    experience: '7 yrs',
    certs: ['Azure Admin', 'CKA'],
    specialties: ['AKS', 'Terraform', 'Azure DevOps'],
    availability: 'On engagement',
    timezone: 'CET / US overlap',
    bio: 'Multi-cloud engineer across Azure and AWS. Terraform module library author for regulated industries.',
    linkedIn: 'https://www.linkedin.com/in/elena-vasquez-cloud',
  },
  {
    id: 'eng-6',
    name: 'Tom Reyes',
    role: 'DevOps Engineer',
    squad: 'DevOps',
    experience: '6 yrs',
    certs: ['CKAD', 'Terraform Associate'],
    specialties: ['CI/CD', 'Docker', 'Helm'],
    availability: 'Available now',
    timezone: 'US Pacific',
    bio: 'CI/CD rescue specialist — replaced legacy Jenkins pipelines for e-commerce and SaaS teams.',
    linkedIn: 'https://www.linkedin.com/in/tom-reyes-devops',
  },
];

export function getEngineersBySquad(squad: BenchEngineer['squad']) {
  return benchEngineers.filter((e) => e.squad === squad);
}

export const engineerDisclaimer =
  'Bench lead profiles — credentials and full work history verified before client matching. LinkedIn profiles are public.';
