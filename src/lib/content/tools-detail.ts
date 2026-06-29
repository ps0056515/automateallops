import type { RichSection } from './types';

export type ToolDetail = {
  whyItMatters: string;
  productionUseCases: string[];
  coreConcepts: { title: string; description: string }[];
  bestPractices: string[];
  commonMistakes: string[];
  sections: RichSection[];
};

const defaults = (name: string, domain: string): ToolDetail => ({
  whyItMatters: `${name} is a core tool in modern ${domain} workflows. AutomateAllOps labs teach it the way teams use it in production — with failure scenarios, security constraints, and operational trade-offs.`,
  productionUseCases: [`Day-to-day ${domain} operations`, 'Incident troubleshooting', 'CI/CD integration'],
  coreConcepts: [{ title: 'Fundamentals', description: `Core ${name} concepts applied in guided sandbox environments.` }],
  bestPractices: ['Start with least privilege', 'Automate repetitive tasks', 'Document runbooks for on-call'],
  commonMistakes: ['Skipping validation in CI', 'Running as root/admin unnecessarily', 'No rollback plan'],
  sections: [],
});

export const toolDetails: Record<string, ToolDetail> = {
  kubernetes: {
    whyItMatters: 'Kubernetes is the de facto orchestrator for containerized workloads. Understanding it means you can deploy, scale, heal, and secure services across clusters — the skill every cloud-native team hires for.',
    productionUseCases: ['Microservices deployment at scale', 'Batch and cron workloads', 'Multi-tenant platform clusters', 'Edge and hybrid cloud deployments'],
    coreConcepts: [
      { title: 'Declarative desired state', description: 'You describe what you want (3 replicas, this image); the control plane continuously reconciles reality to match.' },
      { title: 'Control plane vs data plane', description: 'API server, scheduler, and controllers manage state; kubelet and CNI run your containers on nodes.' },
      { title: 'Labels and selectors', description: 'The glue connecting Services, Deployments, NetworkPolicies, and operators — get these wrong and nothing routes.' },
    ],
    bestPractices: ['Set requests and limits on every container', 'Use liveness/readiness probes', 'Namespace per team or env', 'GitOps for manifest changes', 'Deny-by-default NetworkPolicy'],
    commonMistakes: ['Running `:latest` in prod', 'Cluster-admin for app ServiceAccounts', 'No PodDisruptionBudgets', 'Ignoring etcd backup and upgrade paths'],
    sections: [
      { title: 'Lab progression', body: 'Start with imperative kubectl, move to Deployments and Services, then Helm, RBAC, and troubleshooting under time pressure — mirroring CKA and real on-call.' },
      { title: 'When teams adopt K8s', items: ['10+ services needing independent deploy cadence', 'Need for self-healing and horizontal scale', 'Standardizing runtime across cloud and on-prem'] },
    ],
  },
  docker: {
    whyItMatters: 'Containers package apps with dependencies. Docker is how most teams build, scan, and ship those packages before Kubernetes or serverless runtimes take over.',
    productionUseCases: ['Consistent dev/prod environments', 'CI build artifacts', 'Legacy app packaging', 'Local integration testing'],
    coreConcepts: [
      { title: 'Images vs containers', description: 'Images are immutable layers; containers are running instances with writable layer on top.' },
      { title: 'Multi-stage builds', description: 'Separate build and runtime stages to shrink attack surface and image size.' },
      { title: 'Rootless and read-only', description: 'Production containers should not run as root or write arbitrary filesystem paths.' },
    ],
    bestPractices: ['Pin base image digests', 'Use .dockerignore', 'Scan in CI with Trivy/Grype', 'Non-root USER directive', 'Healthcheck in Dockerfile'],
    commonMistakes: ['Secrets in ENV or layers', 'Huge images from dev dependencies', 'No resource limits in compose/k8s', 'Caching sensitive data in volumes'],
    sections: [
      { title: 'From Dockerfile to registry', steps: [
        { title: 'Build', description: 'Multi-stage Dockerfile with distroless or alpine runtime.' },
        { title: 'Scan', description: 'Fail CI on critical CVEs; track SBOM for compliance.' },
        { title: 'Sign & push', description: 'Cosign signatures and immutable tags in ECR/GCR/Harbor.' },
      ]},
    ],
  },
  terraform: {
    whyItMatters: 'Terraform turns infrastructure into versioned, reviewable code. Teams that IaC can reproduce environments, audit changes, and recover from disasters faster.',
    productionUseCases: ['Cloud landing zones', 'EKS/GKE cluster provisioning', 'Network and IAM baselines', 'Multi-account AWS Organizations'],
    coreConcepts: [
      { title: 'State is truth', description: 'Remote state with locking prevents concurrent apply corruption — treat state buckets as critical infrastructure.' },
      { title: 'Modules encode decisions', description: 'Good modules encode org standards: tagging, encryption, subnet layout, naming.' },
      { title: 'Plan before apply', description: 'Every change gets plan in PR; apply only from trusted CI roles.' },
    ],
    bestPractices: ['Remote state + DynamoDB/S3 lock', 'Separate state per env or workspace', 'Module versioning with semver', 'Policy as code (OPA/Sentinel)', 'Drift detection scheduled'],
    commonMistakes: ['Local state on laptops', 'Monolithic root module', 'Hard-coded secrets', 'Apply from individual laptops in prod'],
    sections: [
      { title: 'Terraform workflow in mature teams', items: ['PR: terraform fmt, validate, plan comment', 'Merge: apply staging automatically', 'Promote: manual approval for prod workspace', 'Destroy: requires second reviewer and ticket'] },
    ],
  },
  ansible: {
    whyItMatters: 'Ansible automates configuration across servers, network devices, and cloud APIs — agentless, idempotent, and ideal for brownfield environments Kubernetes has not absorbed yet.',
    productionUseCases: ['Server hardening and patching', 'Application deployment to VMs', 'Network device config', 'Hybrid cloud bootstrap'],
    coreConcepts: [
      { title: 'Idempotency', description: 'Running a playbook twice should not double-configure — modules check state before changing.' },
      { title: 'Inventory as source of truth', description: 'Dynamic inventory from cloud tags keeps targets accurate as infra scales.' },
      { title: 'Roles and collections', description: 'Reuse community and internal roles instead of copy-paste playbooks.' },
    ],
    bestPractices: ['Ansible Vault for secrets', 'Molecule for role testing', 'Limit blast radius with serial/strategy', 'Pin collection versions'],
    commonMistakes: ['Shell module instead of idempotent modules', 'Running as root everywhere', 'No check mode in CI', 'Unbounded privilege escalation'],
    sections: [{ title: 'Ansible vs Terraform', body: 'Terraform provisions; Ansible configures. Many teams use both: Terraform creates VMs, Ansible installs agents and apps.' }],
  },
  'github-actions': {
    whyItMatters: 'GitHub Actions embeds CI/CD in the repo developers already use. Reusable workflows and OIDC to cloud roles reduce secret sprawl and standardize delivery.',
    productionUseCases: ['PR validation pipelines', 'Container build and publish', 'Terraform plan/apply', 'Release automation with changelogs'],
    coreConcepts: [
      { title: 'Workflow triggers', description: 'push, pull_request, schedule, workflow_dispatch — choose triggers that match release policy.' },
      { title: 'Reusable workflows', description: 'Org-level golden pipelines consumed by hundreds of repos with pinned refs.' },
      { title: 'OIDC federation', description: 'Short-lived AWS/GCP/Azure credentials without long-lived secrets in GitHub.' },
    ],
    bestPractices: ['Pin action SHAs not tags', 'Separate env secrets per environment', 'Required checks on main', 'Concurrency groups to cancel stale runs'],
    commonMistakes: ['Pull request workflows with write tokens', 'Unpinned third-party actions', 'Secrets in logs', 'No path filters wasting minutes'],
    sections: [{ title: 'Sample pipeline stages', items: ['Lint & unit test', 'Integration test with service containers', 'Build & push image', 'Deploy via GitOps commit or helm upgrade'] }],
  },
  argocd: {
    whyItMatters: 'ArgoCD implements GitOps: cluster state follows Git. Rollbacks become git revert; audits become git log; drift becomes visible.',
    productionUseCases: ['Multi-cluster app delivery', 'Progressive rollouts with Argo Rollouts', 'Helm/Kustomize deployment', 'Disaster recovery from Git'],
    coreConcepts: [
      { title: 'Sync policy', description: 'Auto-sync vs manual — prod often manual with approval; dev auto-sync for speed.' },
      { title: 'App of Apps', description: 'Bootstrap pattern managing many Applications from one root Application.' },
      { title: 'Health assessment', description: 'ArgoCD health checks must match your CRDs and operators or apps show false green.' },
    ],
    bestPractices: ['Separate repos for app vs infra', 'SSO/RBAC on ArgoCD UI', 'Notifications to Slack on sync fail', 'Resource hooks for DB migrations'],
    commonMistakes: ['Syncing cluster-admin manifests', 'Ignoring OutOfSync noise', 'No sync windows for prod', 'Secrets in plain Git'],
    sections: [],
  },
  prometheus: {
    whyItMatters: 'Prometheus is the CNCF metrics standard. SRE teams build SLIs, alerts, and capacity plans on PromQL — it powers most Kubernetes monitoring stacks.',
    productionUseCases: ['SLI/SLO metric collection', 'Alertmanager routing', 'Kubernetes pod/node metrics', 'Custom business metrics'],
    coreConcepts: [
      { title: 'Pull model', description: 'Prometheus scrapes targets — you must expose /metrics and network allow scraping.' },
      { title: 'PromQL', description: 'Rate, histogram_quantile, and label matchers — the language of on-call dashboards.' },
      { title: 'Cardinality', description: 'Unbounded label values (user IDs) explode memory — design metrics carefully.' },
    ],
    bestPractices: ['Recording rules for expensive queries', 'Alert on symptoms not causes', 'Runbooks linked in annotations', 'Thanos/Mimir for long-term storage'],
    commonMistakes: ['Alerting on CPU alone', 'High-cardinality labels', 'No inhibition rules', 'Missing kube-state-metrics'],
    sections: [],
  },
  grafana: {
    whyItMatters: 'Grafana turns metrics, logs, and traces into shared operational truth — dashboards for on-call, executives, and postmortems.',
    productionUseCases: ['On-call dashboards', 'SLO burn dashboards', 'Incident timeline views', 'Capacity planning'],
    coreConcepts: [
      { title: 'Datasource abstraction', description: 'One UI for Prometheus, Loki, Tempo, CloudWatch — unified incident context.' },
      { title: 'Dashboard as code', description: 'Jsonnet, Terraform, or Grafana UI export — version dashboards like code.' },
      { title: 'Annotations', description: 'Mark deploys and incidents on graphs for correlation.' },
    ],
    bestPractices: ['Folder RBAC per team', 'Standard dashboard templates', 'Variables for cluster/namespace', 'On-call home dashboard per service'],
    commonMistakes: ['1000-panel dashboards', 'No dashboard ownership', 'Stale datasource credentials', 'Mixing prod and staging data'],
    sections: [],
  },
  helm: {
    whyItMatters: 'Helm packages Kubernetes apps as charts — templated, versioned releases teams can promote across environments with controlled values.',
    productionUseCases: ['Third-party software installs', 'Internal microservice packaging', 'Environment-specific overrides', 'Chart museum/OCI registries'],
    coreConcepts: [
      { title: 'Templates + values', description: 'Separate chart logic from env-specific config — values-staging.yaml vs values-prod.yaml.' },
      { title: 'Release lifecycle', description: 'install, upgrade, rollback — helm history is your deploy audit trail.' },
      { title: 'Hooks', description: 'Pre/post install jobs for migrations — use carefully to avoid stuck releases.' },
    ],
    bestPractices: ['Semver chart versions', 'helm test in CI', 'Schema validate values', 'OCI registry for charts'],
    commonMistakes: ['Templating entire manifests unreadably', 'No default resource limits', 'Hook failures blocking upgrades', 'Secrets in values files'],
    sections: [],
  },
  istio: {
    whyItMatters: 'Istio adds L7 traffic management, mTLS, and telemetry without changing application code — critical for zero-trust microservices.',
    productionUseCases: ['Canary and blue-green routing', 'Service-to-service mTLS', 'Fault injection testing', 'Multi-cluster mesh'],
    coreConcepts: [
      { title: 'Sidecar proxy', description: 'Envoy intercepts all pod traffic — understand overhead and startup ordering.' },
      { title: 'VirtualService/DestinationRule', description: 'Routing, subsets, and circuit breaking at the mesh layer.' },
      { title: 'PeerAuthentication', description: 'STRICT mTLS mode — break legacy clients if rolled out too fast.' },
    ],
    bestPractices: ['Gradual mTLS PERMISSIVE → STRICT', 'Namespace isolation', 'Export telemetry to Prometheus', 'Revision tags for canary control plane'],
    commonMistakes: ['Mesh-wide STRICT day one', 'Ignoring sidecar resources', 'No egress control', 'Debugging without istioctl'],
    sections: [],
  },
  jenkins: {
    whyItMatters: 'Jenkins remains entrenched in enterprises. Knowing declarative pipelines, agents, and shared libraries unlocks maintaining and modernizing legacy CI.',
    productionUseCases: ['Enterprise Java/.NET pipelines', 'On-prem air-gapped builds', 'Custom plugin integrations', 'Migration source to GitHub Actions'],
    coreConcepts: [
      { title: 'Controller vs agents', description: 'Never build on controller — ephemeral agents in K8s or VMs isolate workloads.' },
      { title: 'Shared libraries', description: 'Groovy libraries standardize pipeline steps across hundreds of jobs.' },
      { title: 'Credentials binding', description: 'Inject secrets at runtime — never echo in logs.' },
    ],
    bestPractices: ['Pipeline as code in Jenkinsfile', 'Job DSL or JCasC for config', 'Artifact promotion pattern', 'Regular plugin updates'],
    commonMistakes: ['Groovy complexity unmaintainable', 'Permanent agents with stale state', 'Overprivileged credentials', 'No build timeouts'],
    sections: [],
  },
  aws: {
    whyItMatters: 'AWS hosts a majority of cloud workloads. DevOps engineers need IAM, VPC, EKS, and cost-aware design to ship safely on Amazon.',
    productionUseCases: ['EKS production clusters', 'S3 artifact and state storage', 'IAM roles for service accounts', 'Multi-account landing zones'],
    coreConcepts: [
      { title: 'Shared responsibility', description: 'AWS secures the cloud; you secure what you put in it — IAM, encryption, patching.' },
      { title: 'VPC networking', description: 'Subnets, NAT, security groups — most outages are routing or SG rules.' },
      { title: 'Well-Architected', description: 'Operational excellence, security, reliability, performance, cost, sustainability.' },
    ],
    bestPractices: ['Least privilege IAM', 'Separate accounts per env', 'GuardDuty and Config', 'Tag everything for cost allocation'],
    commonMistakes: ['Long-lived access keys', 'Public S3 buckets', 'Single NAT bottleneck', 'No backup strategy for RDS/EBS'],
    sections: [],
  },
  gcp: {
    whyItMatters: 'GCP excels at Kubernetes (GKE), data, and integrated CI with Cloud Build. Platform teams often choose GCP for GKE autopilot and workload identity.',
    productionUseCases: ['GKE autopilot clusters', 'Cloud Build pipelines', 'Workload Identity federation', 'BigQuery observability pipelines'],
    coreConcepts: [
      { title: 'Projects and folders', description: 'Hierarchy for billing, IAM inheritance, and org policy.' },
      { title: 'Workload Identity', description: 'K8s SA → GCP SA without key files — the secure default for GKE apps.' },
      { title: 'VPC-native clusters', description: 'Pod IPs are real VPC IPs — understand IP exhaustion planning.' },
    ],
    bestPractices: ['Org policies for constraints', 'Binary Authorization', 'Cloud Monitoring SLOs', 'Committed use for steady workloads'],
    commonMistakes: ['Default compute SA on nodes', 'Open firewall rules', 'No IP range planning', 'Ignoring quota limits'],
    sections: [],
  },
  azure: {
    whyItMatters: 'Azure dominates enterprise Microsoft shops. AKS, Azure DevOps, and Entra ID integration are essential for hybrid orgs.',
    productionUseCases: ['AKS with Azure CNI', 'Azure DevOps pipelines', 'Key Vault secret injection', 'Hybrid Azure Arc'],
    coreConcepts: [
      { title: 'Resource groups', description: 'Lifecycle boundary — delete group deletes all contained resources.' },
      { title: 'Managed identities', description: 'Passwordless access from AKS to Azure services.' },
      { title: 'Azure Policy', description: 'Governance guardrails on subscriptions and clusters.' },
    ],
    bestPractices: ['Separate subs per env', 'Defender for Cloud', 'Private clusters where required', 'Monitor with Azure Monitor + Prometheus'],
    commonMistakes: ['Overbroad Contributor roles', 'Public AKS API', 'Secrets in ARM templates plain text', 'No autoscaling on node pools'],
    sections: [],
  },
  linux: {
    whyItMatters: 'Every container runs on Linux. Shell scripting, systemd, networking, and permissions are how you debug when dashboards go dark.',
    productionUseCases: ['On-call SSH/debug sessions', 'Automation scripts in CI', 'Node troubleshooting', 'Container host maintenance'],
    coreConcepts: [
      { title: 'Processes and cgroups', description: 'Understand PID 1, signals, OOM killer — root cause of many pod evictions.' },
      { title: 'Networking stack', description: 'ss, iptables/nftables, DNS — debug Service and Ingress failures.' },
      { title: 'Filesystem and permissions', description: 'chmod, chown, capabilities — security hardening basics.' },
    ],
    bestPractices: ['Immutable infra where possible', 'Structured logging from scripts', 'Avoid parsing ls/grep fragile patterns', 'Use shellcheck'],
    commonMistakes: ['Recursive chmod 777', 'Cron without logging', 'Running scripts as root', 'No disk space monitoring on nodes'],
    sections: [],
  },
  vault: {
    whyItMatters: 'HashiCorp Vault centralizes secrets, dynamic credentials, and encryption — eliminating long-lived DB passwords in config files.',
    productionUseCases: ['Dynamic DB credentials', 'PKI certificate issuance', 'K8s secrets injection via agent', 'Transit encryption'],
    coreConcepts: [
      { title: 'Secret engines', description: 'KV, database, PKI, AWS — each engine has lease TTL and renewal.' },
      { title: 'Policies', description: 'Path-based ACLs — principle of least privilege per app and human.' },
      { title: 'Unseal and HA', description: 'Operations burden — auto-unseal with cloud KMS in prod.' },
    ],
    bestPractices: ['Auto-unseal with KMS', 'Audit logs enabled', 'Short TTLs with renewal', 'Namespace isolation per team'],
    commonMistakes: ['Root token in CI', 'Infinite TTL secrets', 'No backup of raft storage', 'Single node in prod'],
    sections: [],
  },
  pulumi: {
    whyItMatters: 'Pulumi lets you IaC in TypeScript, Python, Go — real loops, tests, and IDE support for teams that outgrow HCL.',
    productionUseCases: ['Complex conditional infra', 'Sharing logic with app code', 'Multi-cloud abstractions', 'Policy with CrossGuard'],
    coreConcepts: [
      { title: 'Programs not templates', description: 'Imperative code produces declarative state — understand Pulumi preview diff.' },
      { title: 'Stack per env', description: 'dev/staging/prod stacks with separate config and secrets.' },
      { title: 'Component resources', description: 'Encapsulate org standards in typed components.' },
    ],
    bestPractices: ['Pin provider versions', 'CI preview on every PR', 'Secrets via Pulumi ESC or cloud vault', 'Unit test components'],
    commonMistakes: ['Logic too complex to review', 'No stack locks in CI', 'Duplicated config across stacks', 'Ignoring protect on critical resources'],
    sections: [],
  },
  datadog: {
    whyItMatters: 'Datadog unifies metrics, APM, logs, and RUM — one pane for full-stack observability when open-source stack ops cost is too high.',
    productionUseCases: ['APM trace analysis', 'Log pattern detection', 'SLO tracking in UI', 'Infrastructure monitoring'],
    coreConcepts: [
      { title: 'Unified tagging', description: 'service, env, version tags tie metrics, traces, and logs together.' },
      { title: 'APM correlation', description: 'Jump from spike in metrics to exact trace and log line.' },
      { title: 'Monitors as code', description: 'Terraform provider for monitor definitions and review.' },
    ],
    bestPractices: ['Standard tag schema', 'Monitor ownership tags', 'Composite monitors reduce noise', 'Indexed vs flex logs cost control'],
    commonMistakes: ['Ungoverned custom metrics bill', 'Alert without runbook link', 'Over-logging PII', 'No monitor cleanup'],
    sections: [],
  },
  pagerduty: {
    whyItMatters: 'PagerDuty orchestrates who gets paged, when, and with what context — the operational layer between alerts and humans.',
    productionUseCases: ['On-call schedules', 'Escalation policies', 'Incident workflows', 'Status page integration'],
    coreConcepts: [
      { title: 'Event vs incident', description: 'Many alerts dedupe into one incident — tune grouping rules.' },
      { title: 'Escalation layers', description: 'Primary → secondary → manager — time-based auto-escalate.' },
      { title: 'Runbook URLs', description: 'Every service links runbook in PD profile — on-call starts informed.' },
    ],
    bestPractices: ['Follow-the-sun or balanced rotations', 'Post-incident review in PD', 'Bi-directional Slack sync', 'Service dependency mapping'],
    commonMistakes: ['Paging on every warning', 'Single-person bus factor rotation', 'No override handoff process', 'Stale contact methods'],
    sections: [],
  },
  backstage: {
    whyItMatters: 'Backstage is the open-source developer portal — software catalog, scaffolding, and docs that make platform teams visible to product engineers.',
    productionUseCases: ['Service catalog', 'Self-service templates', 'TechDocs documentation', 'Plugin ecosystem'],
    coreConcepts: [
      { title: 'Entities YAML', description: 'Components, APIs, resources registered in catalog with ownership.' },
      { title: 'Scaffolder', description: 'Cookiecutter-like templates creating repos, CI, and K8s manifests.' },
      { title: 'Plugins', description: 'Kubernetes, ArgoCD, PagerDuty plugins surface ops context in one UI.' },
    ],
    bestPractices: ['Mandatory metadata on all services', 'Template ownership by platform team', 'Scorecards for maturity', 'SSO integration'],
    commonMistakes: ['Empty catalog without enforcement', 'Templates that rot', 'Too many plugins day one', 'No adoption metrics'],
    sections: [],
  },
  cheatsheets: {
    ...defaults('Cheatsheets', 'reference'),
    whyItMatters: 'On-call engineers need kubectl, terraform, and docker commands at 3am without searching Stack Overflow. Our cheatsheets are curated for production scenarios, not tutorial basics.',
    productionUseCases: ['Incident response quick reference', 'Cert exam cram sheets', 'Team onboarding handouts', 'Runbook appendices'],
    sections: [
      { title: 'What each cheatsheet covers', items: ['kubectl: debug, scale, cordon, exec, logs, events', 'Terraform: state, import, taint, workspace, debug', 'Docker: build, prune, inspect, compose, security', 'Git: rebase, cherry-pick, bisect, reflog recovery'] },
      { title: 'How to use them effectively', body: 'Print the one-page version for your stack. Link cheatsheet sections from PagerDuty services and Confluence runbooks so on-call finds commands in context.' },
    ],
  },
  'cli-reference': {
    ...defaults('CLI Reference', 'command-line'),
    whyItMatters: 'DevOps is a CLI profession. Searchable references with real flags and examples beat memorizing man pages.',
    productionUseCases: ['Daily ops commands', 'Script writing', 'Interview prep', 'Automation authoring'],
    sections: [
      { title: 'Reference structure', items: ['Command signature and common flags', 'Copy-paste examples with placeholders explained', 'Exit codes and error messages decoded', 'Related commands cross-linked'] },
    ],
  },
  'architecture-diagrams': {
    ...defaults('Architecture Diagrams', 'system design'),
    whyItMatters: 'Reference architectures show how successful teams wire CI/CD, observability, and security — a blueprint before you customize.',
    productionUseCases: ['Design reviews', 'Migration planning', 'Stakeholder communication', 'Interview system design'],
    sections: [
      { title: 'Diagram library includes', items: ['Three-tier on EKS with GitOps', 'Multi-account AWS landing zone', 'Observability stack: Prometheus/Loki/Tempo', 'Zero-trust service mesh topology', 'Disaster recovery active-passive'] },
      { title: 'How to adapt diagrams', body: 'Each diagram lists assumptions (RPS, RPO/RTO, compliance). Swap components using our decision matrix — e.g. ArgoCD vs Flux, self-hosted vs managed Prometheus.' },
    ],
  },
};

export function getToolDetail(slug: string): ToolDetail {
  return toolDetails[slug] ?? defaults(slug, 'DevOps');
}
