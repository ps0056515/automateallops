import type { RichSection } from './types';

export type CertificationTrack = {
  slug: string;
  title: string;
  shortName: string;
  vendor: string;
  description: string;
  examDuration: string;
  taskCount: string;
  passingScore: string;
  mockExams: number;
  practiceTasks: number;
  lfExamUrl: string;
  killerShStyle: boolean;
  highlights: string[];
  domains: { name: string; weight: string }[];
  sections: RichSection[];
};

export const certificationTracks: CertificationTrack[] = [
  {
    slug: 'cka',
    title: 'Certified Kubernetes Administrator',
    shortName: 'CKA',
    vendor: 'Linux Foundation / CNCF',
    description: 'Cluster administration, troubleshooting, networking, storage, and security — the gold standard for Kubernetes ops roles.',
    examDuration: '2 hours',
    taskCount: '15–17 performance tasks',
    passingScore: '66%',
    mockExams: 6,
    practiceTasks: 120,
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
    killerShStyle: true,
    highlights: [
      'Killer.sh-style timed simulators',
      'Auto-graded kubectl tasks in live cluster',
      'Domain-specific speed drills',
      'Official LF exam registration link',
      '94% first-attempt pass rate (full track)',
    ],
    domains: [
      { name: 'Cluster Architecture, Installation & Configuration', weight: '25%' },
      { name: 'Workloads & Scheduling', weight: '15%' },
      { name: 'Services & Networking', weight: '20%' },
      { name: 'Storage', weight: '10%' },
      { name: 'Troubleshooting', weight: '30%' },
    ],
    sections: [
      {
        title: 'Mock exam format',
        body: 'Each mock mirrors the real CKA: browser-based terminal, one cluster per task, strict 2-hour timer. No hints. Pass/fail report with domain breakdown and remediation labs auto-assigned.',
        steps: [
          { title: 'Diagnostic mock', description: 'Baseline exam identifies weak domains before you study.' },
          { title: 'Targeted labs', description: 'Auto-assigned hands-on labs for gaps only — no wasted reps.' },
          { title: 'Speed drills', description: 'Single-domain 20-minute sprints: networking only, storage only.' },
          { title: 'Full simulation', description: '6 full mocks with randomized task pools — exam-day conditions.' },
        ],
      },
      {
        title: 'Sample mock tasks',
        items: [
          'Fix a node NotReady caused by kubelet misconfiguration',
          'Create NetworkPolicy denying egress from frontend to database',
          'Backup and restore etcd snapshot on control plane node',
          'Debug CrashLoopBackOff — wrong command in liveness probe',
          'Configure HPA scaling deployment based on CPU utilization',
        ],
      },
      {
        title: 'Register for the official exam',
        body: 'AutomateAllOps prep is aligned to the current CKA curriculum. Register directly with the Linux Foundation when you are ready.',
        callout: { variant: 'info', text: 'LF includes one free retake and a Killer.sh exam simulator with exam purchase — we integrate both into your prep dashboard.' },
      },
    ],
  },
  {
    slug: 'ckad',
    title: 'Certified Kubernetes Application Developer',
    shortName: 'CKAD',
    vendor: 'Linux Foundation / CNCF',
    description: 'Deploy, configure, and expose applications on Kubernetes — focused on developer workflows with kubectl and YAML.',
    examDuration: '2 hours',
    taskCount: '16–20 performance tasks',
    passingScore: '66%',
    mockExams: 5,
    practiceTasks: 95,
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    killerShStyle: true,
    highlights: [
      'Deploy-from-spec speed practice',
      'ConfigMap, Secret, and volume drills',
      'Multi-container pod scenarios',
      '91% first-attempt pass rate',
      'LF exam + Killer.sh bundle guidance',
    ],
    domains: [
      { name: 'Application Design and Build', weight: '20%' },
      { name: 'Application Deployment', weight: '20%' },
      { name: 'Application Observability and Maintenance', weight: '15%' },
      { name: 'Application Environment, Configuration and Security', weight: '25%' },
      { name: 'Services & Networking', weight: '20%' },
    ],
    sections: [
      {
        title: 'CKAD-specific prep',
        body: 'CKAD rewards speed and kubectl fluency. Our drills emphasize imperative commands, quick YAML edits, and time-boxed task completion — average 6 minutes per task in mocks.',
        items: [
          'Create Deployment from running Pod spec',
          'Mount ConfigMap as env vars and file volume',
          'Debug failing Job with backoffLimit exceeded',
          'Expose service via Ingress with path routing',
          'Sidecar logging pattern with shared volume',
        ],
      },
    ],
  },
  {
    slug: 'cks',
    title: 'Certified Kubernetes Security Specialist',
    shortName: 'CKS',
    vendor: 'Linux Foundation / CNCF',
    description: 'Cluster hardening, supply chain security, runtime protection, and monitoring — requires active CKA or CKAD.',
    examDuration: '2 hours',
    taskCount: '15–16 performance tasks',
    passingScore: '67%',
    mockExams: 4,
    practiceTasks: 80,
    lfExamUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/',
    killerShStyle: true,
    highlights: [
      'Prerequisite: CKA or CKAD required',
      'Falco, AppArmor, and Pod Security Standards labs',
      'Image scanning and admission control scenarios',
      '88% pass rate among prep track completers',
      'NetworkPolicy and RBAC deep dives',
    ],
    domains: [
      { name: 'Cluster Setup', weight: '10%' },
      { name: 'Cluster Hardening', weight: '15%' },
      { name: 'System Hardening', weight: '15%' },
      { name: 'Minimize Microservice Vulnerabilities', weight: '20%' },
      { name: 'Supply Chain Security', weight: '20%' },
      { name: 'Monitoring, Logging and Runtime Security', weight: '20%' },
    ],
    sections: [
      {
        title: 'Security-first labs',
        body: 'CKS is the hardest K8s cert. We front-load cluster hardening and supply chain modules before timed mocks — most failures come from unfamiliarity with audit policies and image policies under pressure.',
        callout: { variant: 'warning', text: 'You must hold an active CKA or CKAD before sitting CKS. Plan your cert sequence: CKA → CKS or CKAD → CKS.' },
      },
    ],
  },
  {
    slug: 'aws-devops-pro',
    title: 'AWS Certified DevOps Engineer — Professional',
    shortName: 'AWS DevOps Pro',
    vendor: 'Amazon Web Services',
    description: 'CI/CD, infrastructure as code, monitoring, and incident response on AWS — the professional-level DevOps certification.',
    examDuration: '180 minutes',
    taskCount: '75 multiple choice / multiple response',
    passingScore: '750/1000',
    mockExams: 4,
    practiceTasks: 60,
    lfExamUrl: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    killerShStyle: false,
    highlights: [
      'CodePipeline + CloudFormation scenario labs',
      'CloudWatch, X-Ray, and incident response MCQ banks',
      'Blue/green and canary deployment sandboxes',
      '86% pass rate on full track',
    ],
    domains: [
      { name: 'SDLC Automation', weight: '22%' },
      { name: 'Configuration Management and IaC', weight: '17%' },
      { name: 'Monitoring and Logging', weight: '15%' },
      { name: 'Policies and Standards Automation', weight: '10%' },
      { name: 'Incident and Event Response', weight: '18%' },
      { name: 'High Availability, Fault Tolerance, and DR', weight: '18%' },
    ],
    sections: [
      {
        title: 'Hands-on + MCQ hybrid prep',
        body: 'Unlike CKA, AWS DevOps Pro is scenario-heavy MCQ. We pair question banks with live AWS sandboxes so you have done the work — not just memorized answers.',
      },
    ],
  },
  {
    slug: 'terraform-associate',
    title: 'HashiCorp Certified: Terraform Associate',
    shortName: 'Terraform Associate',
    vendor: 'HashiCorp',
    description: 'Terraform fundamentals: state, modules, workspaces, and core workflow — entry cert for IaC practitioners.',
    examDuration: '60 minutes',
    taskCount: '57 multiple choice',
    passingScore: '70%',
    mockExams: 3,
    practiceTasks: 45,
    lfExamUrl: 'https://www.hashicorp.com/certification/terraform-associate',
    killerShStyle: false,
    highlights: [
      'State backend and locking scenario labs',
      'Module composition exercises',
      '92% pass rate — fastest cert to earn on AutomateAllOps',
      '3-week average prep time',
    ],
    domains: [
      { name: 'Understand IaC concepts', weight: '15%' },
      { name: 'Understand Terraform purpose and basics', weight: '20%' },
      { name: 'Understand Terraform CLI', weight: '15%' },
      { name: 'Interact with Terraform modules', weight: '20%' },
      { name: 'Navigate Terraform workflow', weight: '20%' },
      { name: 'Implement and maintain state', weight: '10%' },
    ],
    sections: [
      {
        title: 'Quick-win certification',
        body: 'Most learners complete the Terraform Associate track in 3 weeks. Ideal first cert before CKA or as a team IaC baseline.',
      },
    ],
  },
];

export function getCertificationTrack(slug: string) {
  return certificationTracks.find((c) => c.slug === slug);
}

export function certHref(slug: string) {
  return `/certifications/${slug}`;
}
