export type DevOpsTool = {
  slug: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  labs: string[];
};

export const devOpsTools: DevOpsTool[] = [
  { slug: 'kubernetes', name: 'Kubernetes', icon: '☸️', color: '#326CE5', description: 'Orchestrate containers at scale with hands-on cluster labs.', labs: ['Deploy workloads', 'Networking & Ingress', 'Helm packaging', 'RBAC & security'] },
  { slug: 'docker', name: 'Docker', icon: '🐳', color: '#2496ED', description: 'Build, ship, and run containers from Dockerfile to multi-stage production images.', labs: ['Image builds', 'Compose stacks', 'Registry workflows', 'Security scanning'] },
  { slug: 'terraform', name: 'Terraform', icon: '🟣', color: '#7B42BC', description: 'Provision cloud infrastructure as code with modules, state, and CI integration.', labs: ['AWS resources', 'Modules & workspaces', 'Remote state', 'Drift detection'] },
  { slug: 'ansible', name: 'Ansible', icon: '🔴', color: '#EE0000', description: 'Automate configuration management and deployments across fleets of servers.', labs: ['Playbooks', 'Roles & collections', 'Inventory', 'Idempotent deploys'] },
  { slug: 'github-actions', name: 'GitHub Actions', icon: '⚙️', color: '#2088FF', description: 'Build CI/CD pipelines with reusable workflows, secrets, and deployment gates.', labs: ['Pipeline design', 'Matrix builds', 'Docker publish', 'K8s deploy'] },
  { slug: 'argocd', name: 'ArgoCD', icon: '🐙', color: '#EF7B4D', description: 'Implement GitOps continuous delivery to Kubernetes clusters.', labs: ['App of Apps', 'Sync policies', 'Rollbacks', 'Multi-cluster'] },
  { slug: 'prometheus', name: 'Prometheus', icon: '🔥', color: '#E6522C', description: 'Collect metrics and write alerting rules for production observability.', labs: ['PromQL queries', 'Alertmanager', 'Service discovery', 'Recording rules'] },
  { slug: 'grafana', name: 'Grafana', icon: '📊', color: '#F46800', description: 'Visualize metrics, logs, and traces on operational dashboards.', labs: ['Dashboard design', 'Datasource setup', 'Annotations', 'On-call views'] },
  { slug: 'helm', name: 'Helm', icon: '⛵', color: '#0F1689', description: 'Package and release Kubernetes applications with charts and values.', labs: ['Chart authoring', 'Values overrides', 'Hooks', 'Chart repos'] },
  { slug: 'istio', name: 'Istio', icon: '🕸️', color: '#466BB0', description: 'Manage service mesh traffic, security, and observability.', labs: ['Traffic routing', 'mTLS', 'Fault injection', 'Telemetry'] },
  { slug: 'jenkins', name: 'Jenkins', icon: '🔧', color: '#D33833', description: 'Classic CI automation with pipelines, agents, and plugin ecosystems.', labs: ['Declarative pipelines', 'Shared libraries', 'Agents', 'Blue Ocean'] },
  { slug: 'aws', name: 'AWS', icon: '☁️', color: '#FF9900', description: 'Deploy and operate workloads on Amazon Web Services.', labs: ['EC2 & VPC', 'EKS clusters', 'IAM policies', 'Cost controls'] },
  { slug: 'gcp', name: 'GCP', icon: '🌐', color: '#4285F4', description: 'Run cloud-native systems on Google Cloud Platform.', labs: ['GKE', 'Cloud Build', 'IAM', 'Monitoring'] },
  { slug: 'azure', name: 'Azure', icon: '🔷', color: '#0078D4', description: 'Build DevOps workflows on Microsoft Azure.', labs: ['AKS', 'DevOps pipelines', 'Key Vault', 'Monitor'] },
  { slug: 'linux', name: 'Linux', icon: '🐧', color: '#FCC624', description: 'Shell scripting, systemd, networking, and server hardening essentials.', labs: ['Bash automation', 'Process management', 'Networking', 'Security basics'] },
  { slug: 'vault', name: 'Vault', icon: '🔐', color: '#000000', description: 'Manage secrets, tokens, and dynamic credentials securely.', labs: ['Secret engines', 'Policies', 'K8s integration', 'Rotation'] },
  { slug: 'pulumi', name: 'Pulumi', icon: '💠', color: '#8A3391', description: 'Infrastructure as code using real programming languages.', labs: ['TypeScript IaC', 'Stack management', 'CI integration', 'Policy as code'] },
  { slug: 'datadog', name: 'Datadog', icon: '🐕', color: '#632CA6', description: 'Unified monitoring, APM, and log management for modern stacks.', labs: ['APM setup', 'Log pipelines', 'SLO tracking', 'Incident workflows'] },
  { slug: 'pagerduty', name: 'PagerDuty', icon: '🚨', color: '#06AC38', description: 'Incident management, on-call rotations, and escalation policies.', labs: ['Escalations', 'Integrations', 'Runbooks', 'Post-incident'] },
  { slug: 'backstage', name: 'Backstage', icon: '🎭', color: '#9BF0E1', description: 'Developer portals and internal platform catalog experiences.', labs: ['Software catalog', 'Scaffolding', 'Plugins', 'TechDocs'] },
];

export const toolResources = [
  { slug: 'cheatsheets', title: 'Cheatsheets', description: 'Quick-reference guides for kubectl, Terraform, Docker, and 30+ DevOps tools.' },
  { slug: 'cli-reference', title: 'CLI Reference', description: 'Searchable command references with examples for everyday ops tasks.' },
  { slug: 'architecture-diagrams', title: 'Architecture Diagrams', description: 'Production-ready reference architectures for cloud-native systems.' },
] as const;

export function getTool(slug: string) {
  return devOpsTools.find((t) => t.slug === slug);
}

export function getToolResource(slug: string) {
  return toolResources.find((r) => r.slug === slug);
}
