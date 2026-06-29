import type { RichSection } from './types';

export type CloudTopic = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  bg: string;
  border: string;
  items: string[];
  overview: string;
  whenToUse: string[];
  deliveryAreas: string[];
  sections: RichSection[];
};

export const cloudTopics: CloudTopic[] = [
  {
    slug: 'aws',
    title: 'Amazon Web Services',
    desc: 'EKS, VPC, IAM, and landing zones — we design, migrate, and operate production workloads on AWS.',
    icon: '☁️',
    color: '#FF9900',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
    items: ['EKS & ECS', 'VPC & networking', 'IAM & IRSA', 'S3 & RDS', 'Cost optimization'],
    overview: 'AWS hosts the majority of enterprise cloud workloads. Our engineers deliver EKS clusters, multi-account landing zones, CI/CD to AWS, and incident-ready observability stacks.',
    whenToUse: ['Migrating on-prem to AWS', 'Standing up EKS for the first time', 'Multi-account Organization design', 'AWS cost overrun or quota issues'],
    deliveryAreas: [
      'EKS cluster design with IRSA and private endpoints',
      'Terraform/CDK landing zones with Control Tower alignment',
      'GitHub Actions OIDC to AWS — no long-lived keys',
      'GuardDuty, Config, and security baseline automation',
    ],
    sections: [
      {
        title: 'Common AWS projects we deliver',
        items: [
          'Greenfield EKS with GitOps (ArgoCD/Flux)',
          'Lift-and-shift to EC2/ECS with modernization path',
          'RDS/Aurora HA and backup strategy',
          'Cross-account CI/CD with artifact promotion',
          'Disaster recovery active-passive across regions',
        ],
      },
      {
        title: 'AWS certifications our team holds',
        items: ['AWS Solutions Architect Professional', 'AWS DevOps Engineer Professional', 'AWS Security Specialty', 'CKA/CKS on EKS'],
        callout: { variant: 'tip', text: 'We also run AWS DevOps Pro cert prep on the learning platform — 86% pass rate among track completers.' },
      },
    ],
  },
  {
    slug: 'gcp',
    title: 'Google Cloud Platform',
    desc: 'GKE, Cloud Build, Workload Identity — cloud-native delivery on GCP from cluster to pipeline.',
    icon: '🌐',
    color: '#4285F4',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
    items: ['GKE & Autopilot', 'Cloud Build', 'Workload Identity', 'Cloud Monitoring', 'VPC-native networking'],
    overview: 'GCP is the platform of choice for Kubernetes-heavy teams. We deliver GKE clusters, Cloud Build pipelines, org policy guardrails, and observability with Cloud Monitoring and Prometheus.',
    whenToUse: ['GKE adoption or Autopilot evaluation', 'Workload Identity replacing service account keys', 'Cloud Build replacing Jenkins', 'IP exhaustion or quota planning on VPC-native clusters'],
    deliveryAreas: [
      'GKE Standard and Autopilot cluster builds',
      'Workload Identity and Binary Authorization',
      'Cloud Build + Artifact Registry CI/CD',
      'Org policies, folders, and project hierarchy design',
    ],
    sections: [
      {
        title: 'GCP delivery highlights',
        items: [
          'Private GKE clusters with authorized networks',
          'Cloud NAT and subnet IP planning for pod ranges',
          'Cloud Deploy progressive delivery',
          'BigQuery + Cloud Logging observability pipelines',
          'Committed use and rightsizing FinOps reviews',
        ],
      },
    ],
  },
  {
    slug: 'azure',
    title: 'Microsoft Azure',
    desc: 'AKS, Azure DevOps, Entra ID — enterprise cloud and hybrid delivery for Microsoft-centric orgs.',
    icon: '🔷',
    color: '#0078D4',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/25',
    items: ['AKS', 'Azure DevOps', 'Key Vault', 'Azure Monitor', 'Azure Arc'],
    overview: 'Azure dominates enterprises with Microsoft stacks. We deliver AKS clusters, Azure DevOps pipelines, Key Vault integration, and hybrid patterns with Azure Arc.',
    whenToUse: ['AKS production rollout', 'Azure DevOps pipeline modernization', 'Entra ID SSO for internal platforms', 'Hybrid cloud with on-prem + Azure'],
    deliveryAreas: [
      'AKS with Azure CNI and private clusters',
      'Azure DevOps YAML pipelines and environments',
      'Key Vault CSI driver for pod secrets',
      'Azure Policy and Defender for Cloud baselines',
    ],
    sections: [
      {
        title: 'Azure projects we ship',
        items: [
          'AKS node pool autoscaling and spot integration',
          'Azure Container Registry with geo-replication',
          'Managed identities end-to-end — no secrets in Git',
          'Azure Monitor + Prometheus managed service',
          'Landing zone with subscription vending pattern',
        ],
      },
    ],
  },
  {
    slug: 'multi-cloud',
    title: 'Multi-Cloud & Hybrid',
    desc: 'Avoid lock-in with portable IaC, unified observability, and consistent GitOps across AWS, GCP, and Azure.',
    icon: '🔗',
    color: '#8b5cf6',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/25',
    items: ['Portable Terraform modules', 'Cross-cloud GitOps', 'Unified observability', 'DR across providers', 'Policy as code'],
    overview: 'Some teams need AWS for one workload and GCP for another — or hybrid with on-prem. We design abstractions that keep teams productive without three completely different operating models.',
    whenToUse: ['Acquisition integration across cloud providers', 'Regulatory data residency across regions/clouds', 'Vendor diversification strategy', 'Hybrid Kubernetes with on-prem and cloud'],
    deliveryAreas: [
      'Terraform module libraries with provider-agnostic interfaces',
      'ArgoCD ApplicationSets for multi-cluster fleet management',
      'OpenTelemetry collectors federating metrics across clouds',
      'Cluster API or Rancher for hybrid fleet management',
    ],
    sections: [
      {
        title: 'Multi-cloud principles we follow',
        items: [
          'Kubernetes as the common runtime where possible',
          'OIDC federation everywhere — no cloud-specific long-lived keys',
          'Centralized observability with consistent SLIs',
          'IaC modules per cloud with shared naming/tagging standards',
        ],
        callout: { variant: 'warning', text: 'Multi-cloud for its own sake adds cost. We help you decide where portability matters vs where to go deep on one provider.' },
      },
    ],
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    desc: 'Assess, plan, and execute migrations — datacenter to cloud, cloud-to-cloud, and monolith to Kubernetes.',
    icon: '🚀',
    color: '#06b6d4',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/25',
    items: ['Migration assessment', '6 Rs strategy', 'Cutover planning', 'Rollback runbooks', 'Post-migration optimization'],
    overview: 'Migrations fail from poor sequencing and missing rollback plans. We run discovery workshops, build migration waves, and execute with measurable checkpoints — not big-bang weekends.',
    whenToUse: ['Datacenter exit timeline', 'Acquired company infra consolidation', 'EKS/GKE migration from self-managed K8s', 'Legacy VM estate modernization'],
    deliveryAreas: [
      'Discovery: dependency mapping, TCO model, wave planning',
      'Pilot migration with success criteria before full cutover',
      'Parallel run and traffic shifting with observability gates',
      'Post-migration rightsizing and FinOps baseline',
    ],
    sections: [
      {
        title: 'Migration playbook',
        steps: [
          { title: 'Assess', description: 'Inventory apps, dependencies, compliance constraints, and team skills.' },
          { title: 'Plan', description: 'Wave schedule, rollback criteria, communication plan, and test environments.' },
          { title: 'Migrate', description: 'Automate where possible — IaC, containerize, replicate data with validation.' },
          { title: 'Optimize', description: 'Rightsize, reserved capacity, delete zombie resources, hand off runbooks.' },
        ],
      },
    ],
  },
  {
    slug: 'landing-zones',
    title: 'Landing Zones & IaC',
    desc: 'Secure, repeatable cloud foundations — accounts, networking, IAM, and guardrails provisioned as code.',
    icon: '🏗️',
    color: '#10b981',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    items: ['Account vending', 'Hub-spoke networking', 'IAM baselines', 'Policy as code', 'Terraform/OpenTofu'],
    overview: 'A landing zone is the foundation everything else builds on. We deliver Terraform modules, account structures, and policy guardrails so product teams can self-serve without breaking security.',
    whenToUse: ['First production AWS Organization', 'Scaling from 2 accounts to 20+', 'Compliance audit findings on cloud sprawl', 'Standardizing how teams request infra'],
    deliveryAreas: [
      'AWS Control Tower / GCP Organization / Azure Management Group setup',
      'Terraform Cloud or Spacelift pipeline for foundation layers',
      'OPA/Sentinel/Checkov policy gates in CI',
      'Self-service namespace/VPC vending for product teams',
    ],
    sections: [
      {
        title: 'What a landing zone includes',
        items: [
          'Multi-account/project structure per environment',
          'Centralized logging and audit trail',
          'Network topology with egress control',
          'Break-glass access and MFA enforcement',
          'Tagging standards and cost allocation',
        ],
      },
    ],
  },
  {
    slug: 'finops',
    title: 'FinOps & Cost Optimization',
    desc: 'Stop cloud bill surprises — rightsizing, reservations, tagging, and engineering accountability for spend.',
    icon: '💰',
    color: '#f59e0b',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/25',
    items: ['Cost dashboards', 'Rightsizing', 'Reserved capacity', 'Idle resource cleanup', 'Showback/chargeback'],
    overview: 'Cloud costs grow faster than revenue when nobody owns them. We implement FinOps practices: visibility, optimization, and engineering accountability — without blocking delivery.',
    whenToUse: ['Monthly cloud bill doubled with no headcount growth', 'No tagging or cost allocation by team', 'Over-provisioned EKS node groups', 'Preparing for committed use / savings plans'],
    deliveryAreas: [
      'Cost anomaly alerts and team-level dashboards',
      'Kubecost or cloud-native cost tooling integration',
      'Rightsizing recommendations with engineering buy-in',
      'Reservation and savings plan strategy',
    ],
    sections: [
      {
        title: 'Typical savings we find',
        items: [
          '20–40% from rightsizing and idle resource cleanup',
          '10–25% from reserved capacity on steady workloads',
          '15–30% from storage lifecycle and log retention policies',
          'Ongoing: tag enforcement and budget alerts per team',
        ],
        callout: { variant: 'info', text: 'FinOps is a practice, not a one-time audit. We set up dashboards and rituals your team can sustain.' },
      },
    ],
  },
];

export function getCloudTopic(slug: string) {
  return cloudTopics.find((t) => t.slug === slug);
}

export function cloudHref(slug: string) {
  return `/cloud/${slug}`;
}
