import type { RichSection } from './types';

export type LearningModule = {
  title: string;
  duration: string;
  description: string;
  labs: string[];
};

export type LearningPath = {
  slug: string;
  icon: string;
  title: string;
  level: string;
  duration: string;
  learners: string;
  rating: number;
  color: string;
  glow: string;
  topics: string[];
  badge: string;
  description: string;
  prerequisites: string[];
  outcomes: string[];
  capstone: string;
  modules: LearningModule[];
  sections: RichSection[];
};

export const learningPaths: LearningPath[] = [
  {
    slug: 'kubernetes-engineer',
    icon: '☸️',
    title: 'Kubernetes Engineer',
    level: 'Beginner → Expert',
    duration: '40 hrs',
    learners: '12.4K',
    rating: 4.9,
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(6,182,212,0.3)',
    topics: ['Pods & Deployments', 'Networking', 'Helm Charts', 'RBAC', 'Operators', 'CKA Prep'],
    badge: '🏆 Most Popular',
    description: 'Master cluster operations from your first pod to production-grade Kubernetes at scale.',
    prerequisites: ['Basic Linux CLI', 'Understanding of containers (Docker)', 'YAML syntax familiarity'],
    outcomes: [
      'Deploy and troubleshoot workloads on production-like clusters',
      'Design network policies, ingress, and service discovery',
      'Package apps with Helm and enforce RBAC least-privilege',
      'Pass CKA-style performance-based exam scenarios',
    ],
    capstone: 'Deploy a multi-tier app with Helm, HPA, NetworkPolicy, and zero-downtime rollout — then break it on purpose and recover using only kubectl.',
    modules: [
      { title: 'Cluster Fundamentals', duration: '8 hrs', description: 'Pods, ReplicaSets, Deployments, and the Kubernetes object model.', labs: ['First pod', 'Rolling updates', 'Probes & resources', 'ConfigMaps & Secrets'] },
      { title: 'Networking & Storage', duration: '10 hrs', description: 'Services, Ingress, CNI basics, PV/PVC, and StatefulSets.', labs: ['ClusterIP vs NodePort', 'Ingress TLS', 'Persistent volumes', 'StatefulSet ordering'] },
      { title: 'Security & Multi-Tenancy', duration: '8 hrs', description: 'RBAC, Pod Security, namespaces, and quota management.', labs: ['Role bindings', 'ServiceAccount tokens', 'NetworkPolicy deny-all', 'ResourceQuota'] },
      { title: 'Packaging & GitOps', duration: '8 hrs', description: 'Helm charts, Kustomize overlays, and release strategies.', labs: ['Chart templating', 'Values per env', 'Helm hooks', 'Rollback drill'] },
      { title: 'CKA Exam Prep', duration: '6 hrs', description: 'Timed drills mirroring CNCF performance tasks.', labs: ['Fix broken node', 'Backup etcd', 'Network debug', 'Full mock exam'] },
    ],
    sections: [
      {
        title: 'Who this path is for',
        body: 'Platform engineers, DevOps engineers moving into K8s ownership, and backend developers who deploy their own services. If your team is migrating off VMs or ECS, this is the path.',
      },
      {
        title: 'What makes it production-focused',
        items: [
          'Every lab runs on a real control plane — not simulated UI clicks',
          'Scenarios include crashlooping pods, DNS failures, and quota exhaustion',
          'Security labs enforce deny-by-default networking, not happy-path demos',
          'Capstone mirrors a real release: deploy, scale, break, recover, document',
        ],
      },
      {
        title: 'Career outcomes',
        body: 'Graduates report readiness for Kubernetes administrator roles, platform team membership, and CKA certification within 6–8 weeks of part-time study.',
        callout: { variant: 'tip', text: 'Pair this path with the SRE Hub SLO toolkit if you will own cluster reliability SLIs (API latency, scheduling latency, etcd health).' },
      },
    ],
  },
  {
    slug: 'devops-practitioner',
    icon: '🔁',
    title: 'DevOps Practitioner',
    level: 'Foundation → Advanced',
    duration: '60 hrs',
    learners: '18.2K',
    rating: 4.8,
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
    topics: ['Git & GitHub', 'Jenkins / GitHub Actions', 'Docker', 'Terraform', 'Monitoring', 'AWS/GCP/Azure'],
    badge: '🔥 Trending',
    description: 'End-to-end pipeline skills — version control, CI/CD, containers, IaC, and cloud fundamentals.',
    prerequisites: ['Any programming or scripting exposure', 'Basic understanding of servers and APIs'],
    outcomes: [
      'Build CI/CD pipelines that lint, test, build, scan, and deploy automatically',
      'Containerize apps with production-grade Dockerfiles',
      'Provision cloud infra with Terraform modules and remote state',
      'Instrument services with metrics and actionable alerts',
    ],
    capstone: 'Build a complete pipeline: push to main triggers tests, builds a container, scans for CVEs, deploys to staging via Terraform, and promotes to prod with manual approval gate.',
    modules: [
      { title: 'Version Control & Collaboration', duration: '6 hrs', description: 'Git workflows, branching strategies, and PR hygiene for ops teams.', labs: ['Trunk-based flow', 'Rebase vs merge', 'Signed commits', 'CODEOWNERS'] },
      { title: 'Containers & Registries', duration: '12 hrs', description: 'Docker multi-stage builds, compose for local dev, registry security.', labs: ['Optimize image size', 'Non-root containers', 'Harbor/ECR push', 'SBOM generation'] },
      { title: 'CI/CD Platforms', duration: '14 hrs', description: 'GitHub Actions and Jenkins for build automation.', labs: ['Reusable workflows', 'Matrix builds', 'Jenkins shared libs', 'Deployment gates'] },
      { title: 'Infrastructure as Code', duration: '14 hrs', description: 'Terraform on AWS with modules, state, and CI integration.', labs: ['VPC + EKS', 'Module design', 'Remote state locking', 'Plan in PR comments'] },
      { title: 'Observability Basics', duration: '8 hrs', description: 'Metrics, logs, and alerting that pages humans for the right reasons.', labs: ['Prometheus scrape', 'Grafana dashboards', 'Alert routing', 'SLO intro'] },
      { title: 'Cloud Foundations', duration: '6 hrs', description: 'AWS/GCP/Azure comparison for common DevOps workloads.', labs: ['IAM least privilege', 'Object storage', 'Managed K8s compare', 'Cost tags'] },
    ],
    sections: [
      {
        title: 'The practitioner mindset',
        body: 'DevOps is not a job title — it is a feedback loop between development and operations. This path teaches you to shorten that loop with automation, observability, and repeatable infrastructure.',
      },
      {
        title: 'Real pipelines you will build',
        items: [
          'PR pipeline: lint → unit test → integration test → preview env',
          'Main pipeline: build image → vulnerability scan → deploy staging → smoke test',
          'IaC pipeline: terraform plan on PR, apply on merge with policy checks',
          'Rollback pipeline: one-click revert to previous image tag and Terraform state',
        ],
      },
      {
        title: 'Common failure modes we drill',
        items: [
          'Secrets committed to Git — detection and rotation workflow',
          'Flaky tests blocking releases — quarantine and fix strategies',
          'Terraform state lock contention in team environments',
          'Alert storms after deploy — correlation with deployment annotations',
        ],
      },
    ],
  },
  {
    slug: 'site-reliability-engineer',
    icon: '🛡️',
    title: 'Site Reliability Engineer',
    level: 'Intermediate → Staff',
    duration: '50 hrs',
    learners: '8.1K',
    rating: 4.9,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.3)',
    topics: ['SLOs & Error Budgets', 'Observability', 'Incident Response', 'Chaos Engineering', 'On-Call Excellence', 'Toil Reduction'],
    badge: '⚡ High Value',
    description: 'Build reliable systems with SLOs, observability, incident response, and on-call excellence.',
    prerequisites: ['Production systems experience (any role)', 'Basic metrics/logs familiarity', 'Completed DevOps Practitioner or equivalent'],
    outcomes: [
      'Define SLIs/SLOs tied to user journeys, not infrastructure vanity metrics',
      'Run blameless incidents with clear roles, comms, and follow-up',
      'Design on-call rotations that scale without burning out the team',
      'Use error budgets to negotiate release velocity with product',
    ],
    capstone: 'Simulate a P1 outage: detect via SLO burn alert, run incident commander playbook, communicate status, root-cause a dependency failure, write postmortem, and ship preventive Terraform change.',
    modules: [
      { title: 'Reliability Foundations', duration: '8 hrs', description: 'SLI/SLO/error budget math and stakeholder communication.', labs: ['Define CUJ SLIs', 'Burn rate alerts', 'Error budget policy', 'Executive dashboard'] },
      { title: 'Observability Deep Dive', duration: '10 hrs', description: 'Metrics, logs, traces — the three pillars in practice.', labs: ['RED/USE methods', 'Trace sampling', 'Log correlation', 'Cardinality control'] },
      { title: 'Incident Management', duration: '10 hrs', description: 'Roles, comms templates, severity classification, and postmortems.', labs: ['IC simulation', 'Status page updates', 'Timeline reconstruction', 'Blameless PM'] },
      { title: 'Chaos & Resilience', duration: '8 hrs', description: 'Controlled failure injection with safety gates.', labs: ['Pod kill game day', 'Latency injection', 'AZ failure', 'Game day report'] },
      { title: 'Toil & Automation', duration: '8 hrs', description: 'Measure toil, prioritize automation ROI, eliminate manual runbooks.', labs: ['Toil inventory', 'Runbook automation', 'Self-service restore', 'Capacity planning'] },
      { title: 'On-Call Excellence', duration: '6 hrs', description: 'Rotation design, alert quality, and wellbeing practices.', labs: ['Escalation policy', 'Alert tuning', 'Handoff checklist', 'Post-shift review'] },
    ],
    sections: [
      {
        title: 'Why SRE is different from traditional ops',
        body: 'SRE applies software engineering to operations problems. You are not just keeping the lights on — you are measuring reliability, budgeting risk, and automating away repetitive work so engineers focus on engineering.',
      },
      {
        title: 'Frameworks you will apply',
        items: [
          'Google SRE book principles: embrace risk, eliminate toil, monitor everything',
          'Incident command system adapted for software outages',
          'Blameless postmortem culture with action item tracking',
          'Error budget policy as contract between SRE and product',
        ],
        callout: { variant: 'info', text: 'This path integrates directly with SRE Hub playbooks, postmortem library, and chaos labs — use them as reference during capstone.' },
      },
    ],
  },
  {
    slug: 'platform-engineering',
    icon: '🏗️',
    title: 'Platform Engineering',
    level: 'Advanced → Principal',
    duration: '45 hrs',
    learners: '5.3K',
    rating: 4.7,
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.3)',
    topics: ['Internal Dev Platforms', 'Backstage', 'GitOps / ArgoCD', 'Service Mesh', 'FinOps', 'Developer Experience'],
    badge: '🚀 New',
    description: 'Design internal developer platforms, GitOps workflows, and golden paths for engineering teams.',
    prerequisites: ['Strong Kubernetes and CI/CD background', 'Experience supporting internal developers', 'Terraform or equivalent IaC'],
    outcomes: [
      'Design golden paths that reduce cognitive load for product teams',
      'Build a service catalog with self-service provisioning',
      'Implement GitOps for cluster and app lifecycle management',
      'Measure platform adoption and developer productivity impact',
    ],
    capstone: 'Deliver an IDP MVP: Backstage catalog entry, Terraform module for service scaffolding, ArgoCD ApplicationSet, and documentation — onboard a mock product team in under 30 minutes.',
    modules: [
      { title: 'Platform Strategy', duration: '6 hrs', description: 'Team topologies, platform as product, and adoption metrics.', labs: ['Stakeholder map', 'Golden path design', 'DX survey', 'Roadmap prioritization'] },
      { title: 'Developer Portals', duration: '10 hrs', description: 'Backstage software catalog, scaffolder, and TechDocs.', labs: ['Entity model', 'Custom scaffolder', 'Plugin integration', 'Ownership graph'] },
      { title: 'GitOps at Scale', duration: '10 hrs', description: 'ArgoCD patterns for multi-cluster, multi-tenant delivery.', labs: ['App of Apps', 'Progressive delivery', 'Secret management', 'Drift remediation'] },
      { title: 'Service Mesh & Traffic', duration: '8 hrs', description: 'Istio/Linkerd for mTLS, traffic splitting, and observability.', labs: ['mTLS strict mode', 'Canary via mesh', 'Circuit breaking', 'Telemetry export'] },
      { title: 'FinOps for Platforms', duration: '6 hrs', description: 'Cost allocation, right-sizing, and chargeback models.', labs: ['Kubecost setup', 'Namespace quotas', 'Spot integration', 'Budget alerts'] },
      { title: 'Operating the Platform', duration: '5 hrs', description: 'SLOs for internal platforms, support models, and versioning.', labs: ['Platform SLOs', 'Breaking change policy', 'Deprecation workflow', 'On-call for platform'] },
    ],
    sections: [
      {
        title: 'Platform engineering vs DevOps',
        body: 'DevOps optimizes delivery pipelines. Platform engineering builds the paved roads product teams drive on — standardized, secure, observable by default. You are a force multiplier, not a ticket queue.',
      },
      {
        title: 'Golden path principles',
        items: [
          'Optional escape hatches — teams can leave the path but inherit more responsibility',
          'Secure defaults: mTLS, scanning, and policy enforcement baked in',
          'Self-service over tickets — provisioning in minutes, not days',
          'Documentation as code alongside templates and modules',
        ],
      },
    ],
  },
];

export function getLearningPath(slug: string) {
  return learningPaths.find((p) => p.slug === slug);
}
