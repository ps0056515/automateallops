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
};

export const benchEngineers: BenchEngineer[] = [
  {
    id: 'eng-1',
    name: 'Priya N.',
    role: 'Lead DevOps Engineer',
    squad: 'DevOps',
    experience: '9 yrs',
    certs: ['CKA', 'AWS DevOps Pro'],
    specialties: ['GitHub Actions', 'GitOps', 'ArgoCD'],
    availability: 'Available now',
    timezone: 'IST / US overlap',
  },
  {
    id: 'eng-2',
    name: 'James O.',
    role: 'Principal Cloud Architect',
    squad: 'Cloud',
    experience: '12 yrs',
    certs: ['AWS SA Pro', 'Terraform Associate'],
    specialties: ['EKS', 'Landing zones', 'Multi-account AWS'],
    availability: 'Available now',
    timezone: 'GMT / EU',
  },
  {
    id: 'eng-3',
    name: 'Sarah L.',
    role: 'Staff SRE',
    squad: 'SRE',
    experience: '10 yrs',
    certs: ['CKS', 'CKA'],
    specialties: ['SLO design', 'Prometheus/Grafana', 'Incident response'],
    availability: 'Available in 1 week',
    timezone: 'US Eastern',
  },
  {
    id: 'eng-4',
    name: 'Marcus W.',
    role: 'Platform Engineering Lead',
    squad: 'Platform',
    experience: '8 yrs',
    certs: ['CKAD', 'GCP Professional'],
    specialties: ['Internal dev platforms', 'Backstage', 'Golden paths'],
    availability: 'Available now',
    timezone: 'IST / APAC',
  },
  {
    id: 'eng-5',
    name: 'Elena V.',
    role: 'Senior Cloud Engineer',
    squad: 'Cloud',
    experience: '7 yrs',
    certs: ['Azure Admin', 'CKA'],
    specialties: ['AKS', 'Terraform', 'Azure DevOps'],
    availability: 'On engagement',
    timezone: 'CET / US overlap',
  },
  {
    id: 'eng-6',
    name: 'Tom R.',
    role: 'DevOps Engineer',
    squad: 'DevOps',
    experience: '6 yrs',
    certs: ['CKAD', 'Terraform Associate'],
    specialties: ['CI/CD', 'Docker', 'Helm'],
    availability: 'Available now',
    timezone: 'US Pacific',
  },
];

export function getEngineersBySquad(squad: BenchEngineer['squad']) {
  return benchEngineers.filter((e) => e.squad === squad);
}
