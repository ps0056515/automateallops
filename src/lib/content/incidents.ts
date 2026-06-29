export type IncidentStep = {
  prompt: string;
  hint?: string;
  correctAction: string;
  options: { label: string; action: string; correct: boolean; feedback: string }[];
};

export type IncidentScenario = {
  slug: string;
  title: string;
  severity: 'SEV-1' | 'SEV-2' | 'SEV-3';
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  alert: string;
  context: string[];
  symptoms: string[];
  rootCause: string;
  steps: IncidentStep[];
  tags: string[];
};

export const incidentScenarios: IncidentScenario[] = [
  {
    slug: 'api-503-ingress',
    title: 'API returning 503 — ingress misconfiguration',
    severity: 'SEV-2',
    duration: '15 min',
    difficulty: 'Beginner',
    description: 'Checkout API is down. Customers cannot complete purchases. Alert fired 4 minutes ago.',
    alert: '🔴 ALERT: checkout-api — HTTP 503 rate > 50% for 3m (us-east-1)',
    context: [
      'Last deploy: 22 minutes ago — image tag v2.4.1',
      'Pods show Running, readiness probes passing',
      'Error budget: 38% remaining this month',
    ],
    symptoms: ['503 on /api/v1/checkout', 'Pods healthy in kubectl', 'No recent config changes in GitOps repo'],
    rootCause: 'Ingress backend service name typo — points to checkout-api-old instead of checkout-api',
    tags: ['Kubernetes', 'Ingress', 'Networking'],
    steps: [
      {
        prompt: 'First response: what do you check?',
        correctAction: 'kubectl get ingress -n production',
        options: [
          { label: 'Roll back the deployment immediately', action: 'rollback', correct: false, feedback: 'Pods are healthy — rollback won\'t fix a routing issue. Check ingress/service wiring first.' },
          { label: 'Check ingress rules and backend services', action: 'ingress', correct: true, feedback: 'Correct. When pods are healthy but traffic fails, ingress/service mismatch is the top suspect.' },
          { label: 'Scale replicas to zero and back', action: 'scale', correct: false, feedback: 'Scaling won\'t help — readiness probes are passing.' },
          { label: 'Restart all nodes in the cluster', action: 'nodes', correct: false, feedback: 'Too disruptive. Gather evidence before infrastructure-level actions.' },
        ],
      },
      {
        prompt: 'Ingress shows backend checkout-api-old. Next step?',
        correctAction: 'kubectl edit ingress checkout -n production',
        options: [
          { label: 'Edit ingress to point to checkout-api service', action: 'fix-ingress', correct: true, feedback: 'Fixed. Verify with curl through ingress and confirm 200 responses in dashboard.' },
          { label: 'Delete the ingress and recreate from scratch', action: 'delete', correct: false, feedback: 'Unnecessary — a single field fix is faster and lower risk during an incident.' },
          { label: 'Rename the deployment to checkout-api-old', action: 'rename', correct: false, feedback: 'That would break GitOps conventions. Fix the ingress to match the actual service name.' },
          { label: 'Wait for auto-heal — it may resolve itself', action: 'wait', correct: false, feedback: 'SEV-2 with customer impact — act now. Misconfigurations don\'t self-heal.' },
        ],
      },
    ],
  },
  {
    slug: 'crashloop-configmap',
    title: 'CrashLoopBackOff after ConfigMap update',
    severity: 'SEV-2',
    duration: '20 min',
    difficulty: 'Intermediate',
    description: 'Payment processor pods crash-looping after a config rollout. Transactions failing.',
    alert: '🔴 ALERT: payment-processor — CrashLoopBackOff (3/3 replicas) — eu-west-1',
    context: [
      'ConfigMap payment-config updated 12 minutes ago via ArgoCD',
      'Previous version worked for 30 days',
      'ArgoCD sync status: Synced',
    ],
    symptoms: ['CrashLoopBackOff on all replicas', 'Logs: "invalid DATABASE_URL format"', 'ConfigMap hash changed in deployment'],
    rootCause: 'ConfigMap value missing URL-encoding for special characters in password',
    tags: ['Kubernetes', 'ConfigMap', 'GitOps'],
    steps: [
      {
        prompt: 'How do you confirm the root cause quickly?',
        correctAction: 'kubectl logs payment-processor-xxx --previous',
        options: [
          { label: 'Check previous container logs for startup errors', action: 'logs', correct: true, feedback: 'Logs show invalid DATABASE_URL — compare ConfigMap to last known good in Git history.' },
          { label: 'Delete the ConfigMap and let it recreate', action: 'delete-cm', correct: false, feedback: 'Destructive without understanding the change. Read logs first.' },
          { label: 'Increase memory limits', action: 'memory', correct: false, feedback: 'CrashLoop from config errors, not OOM. Logs will tell you.' },
          { label: 'Disable ArgoCD auto-sync permanently', action: 'disable-argocd', correct: false, feedback: 'Fix the config, don\'t disable GitOps. Revert the bad commit instead.' },
        ],
      },
      {
        prompt: 'Config has unencoded password chars. Resolution?',
        correctAction: 'git revert + argocd sync',
        options: [
          { label: 'Revert ConfigMap commit in Git and sync ArgoCD', action: 'revert', correct: true, feedback: 'GitOps golden path: fix in Git, let ArgoCD reconcile. Document in postmortem.' },
          { label: 'kubectl patch ConfigMap manually in cluster', action: 'patch', correct: false, feedback: 'Manual patch causes drift — ArgoCD will fight you. Fix the source of truth in Git.' },
          { label: 'Roll forward with a hotfix pod spec env var', action: 'hotfix', correct: false, feedback: 'Creates drift. Revert is faster and auditable for payment systems.' },
          { label: 'Failover to DR region', action: 'dr', correct: false, feedback: 'Config bug will follow to DR. Fix the config first unless DR has different secret management.' },
        ],
      },
    ],
  },
  {
    slug: 'autoscaler-not-scaling',
    title: 'Cluster autoscaler stuck — quota limits',
    severity: 'SEV-3',
    duration: '30 min',
    difficulty: 'Advanced',
    description: 'Pending pods for 20 minutes. HPA wants more replicas but nodes aren\'t appearing.',
    alert: '🟡 ALERT: scheduler — 14 pods Pending > 10m (us-central1)',
    context: [
      'Traffic spike from marketing campaign — expected',
      'HPA scaled web deployment to 40 replicas',
      'Cluster autoscaler logs show repeated scale-up failures',
    ],
    symptoms: ['Pods Pending: Insufficient cpu', 'CA events: max node group size reached', 'Cloud quota: CPU limit near maximum'],
    rootCause: 'GCE CPU quota exhausted + max node pool size hit simultaneously',
    tags: ['Kubernetes', 'Autoscaling', 'Cloud Quota'],
    steps: [
      {
        prompt: 'What evidence confirms quota vs. misconfiguration?',
        correctAction: 'Check CA events and cloud quota dashboard',
        options: [
          { label: 'Inspect cluster autoscaler events and cloud quotas', action: 'quota', correct: true, feedback: 'CA logs + quota dashboard show CPU limit hit. Two levers: raise quota or reduce requests.' },
          { label: 'Delete HPA to stop scaling', action: 'delete-hpa', correct: false, feedback: 'That stops desired scale but doesn\'t fix pending pods or customer impact.' },
          { label: 'Reduce pod CPU requests to zero', action: 'zero-requests', correct: false, feedback: 'Dangerous — causes noisy neighbor issues. Address quota or pool limits properly.' },
          { label: 'Add taints to all nodes', action: 'taints', correct: false, feedback: 'Opposite of what you need — you need MORE capacity, not less scheduling.' },
        ],
      },
      {
        prompt: 'Short-term mitigation while quota increase is pending?',
        correctAction: 'Reduce non-critical workloads + request quota bump',
        options: [
          { label: 'Scale down non-critical deployments + open quota ticket', action: 'mitigate', correct: true, feedback: 'Standard playbook: shed load, request emergency quota increase, communicate ETA to stakeholders.' },
          { label: 'Overprovision by ignoring limits', action: 'ignore', correct: false, feedback: 'Cloud provider won\'t provision past hard quotas — you need a quota increase or load shedding.' },
          { label: 'Migrate entire cluster to new region', action: 'migrate', correct: false, feedback: 'Hours of work — not a 30-minute mitigation. Shed load first.' },
          { label: 'Disable the marketing campaign', action: 'marketing', correct: false, feedback: 'Business decision — escalate to leadership, but technical mitigation is load shedding first.' },
        ],
      },
    ],
  },
  {
    slug: 'pipeline-wrong-image',
    title: 'Pipeline green but wrong image deployed',
    severity: 'SEV-1',
    duration: '45 min',
    difficulty: 'Advanced',
    description: 'CI passed but production serves stale vulnerable image. Security team escalated.',
    alert: '🔴 SEV-1: prod image digest mismatch — CVE-2024-xxxx still present',
    context: [
      'GitHub Actions run #4521: all green',
      'ArgoCD shows Synced, healthy',
      'Security scan: running image is 3-week-old digest',
    ],
    symptoms: ['CI built new image', 'GitOps repo tag updated', 'Running pods use old digest — imagePullPolicy: IfNotPresent on cached nodes'],
    rootCause: 'Mutable tag reused + IfNotPresent skipped pull on nodes with cached old layer',
    tags: ['CI/CD', 'GitOps', 'Security'],
    steps: [
      {
        prompt: 'Trace the deploy chain — where did it break?',
        correctAction: 'Compare Git manifest digest vs running pod imageID',
        options: [
          { label: 'Compare GitOps manifest image digest to running pod imageID', action: 'trace', correct: true, feedback: 'Manifest says sha256:abc123 but pods run sha256:old789 — tag mutability + cache issue.' },
          { label: 'Re-run the pipeline', action: 'rerun', correct: false, feedback: 'Pipeline already succeeded — problem is deploy/pull, not build.' },
          { label: 'Assume ArgoCD is broken and disable it', action: 'disable', correct: false, feedback: 'ArgoCD synced correctly — the manifest likely still references a mutable tag.' },
          { label: 'Blame security scanner false positive', action: 'blame', correct: false, feedback: 'Verify first — digest mismatch is a real finding.' },
        ],
      },
      {
        prompt: 'Immediate fix and long-term prevention?',
        correctAction: 'Rollout restart + pin immutable digests in Git',
        options: [
          { label: 'Rollout restart + switch Git to immutable digest pins', action: 'fix', correct: true, feedback: 'Restart forces pull. Pin digests in GitOps repo. Add policy blocking mutable tags in CI.' },
          { label: 'Set imagePullPolicy: Never', action: 'never', correct: false, feedback: 'Never pull is the opposite of what you need.' },
          { label: 'Delete all nodes', action: 'delete-nodes', correct: false, feedback: 'Rollout restart achieves the same with less blast radius.' },
          { label: 'Revert to last week\'s code', action: 'revert-code', correct: false, feedback: 'Code may be fine — deploy mechanism is the issue. Fix image pinning.' },
        ],
      },
    ],
  },
  {
    slug: 'memory-leak-cascade',
    title: 'Multi-service outage — upstream memory leak',
    severity: 'SEV-1',
    duration: '60 min',
    difficulty: 'Advanced',
    description: 'Auth, API, and frontend degraded. Error rate 40% and climbing.',
    alert: '🔴 SEV-1: error budget exhausted — auth-service p99 latency 12s',
    context: [
      'Cascade started 35 minutes ago in auth-service',
      'Circuit breakers opening downstream',
      'No recent deploys',
    ],
    symptoms: ['auth-service OOMKilled twice in 20 min', 'Downstream 401/503 storm', 'Heap growth linear over 6 hours'],
    rootCause: 'Session cache memory leak — unbounded map growth under high login volume',
    tags: ['SRE', 'Observability', 'Cascade failure'],
    steps: [
      {
        prompt: 'Stop the bleeding — first action?',
        correctAction: 'Restart auth pods + enable rate limiting at gateway',
        options: [
          { label: 'Restart auth-service pods + rate limit at gateway', action: 'restart', correct: true, feedback: 'Buys time while you investigate. Communicate customer impact and ETA.' },
          { label: 'Deploy a fix without understanding the leak', action: 'deploy-blind', correct: false, feedback: 'Restart first to restore service, then root-cause with profiling.' },
          { label: 'Take entire platform offline for maintenance', action: 'offline', correct: false, feedback: 'Overkill — targeted restart + rate limit contains blast radius.' },
          { label: 'Ignore auth — focus on frontend errors', action: 'frontend', correct: false, feedback: 'Frontend errors are symptoms. auth-service is the origin.' },
        ],
      },
      {
        prompt: 'Root cause confirmed: unbounded session cache. Permanent fix?',
        correctAction: 'Deploy TTL eviction + memory limits + alert on heap growth',
        options: [
          { label: 'Add cache TTL, memory limits, and heap growth alerts', action: 'fix-leak', correct: true, feedback: 'Defense in depth: fix leak, add limits, alert before OOM next time. Write postmortem.' },
          { label: 'Double memory limits only', action: 'double-mem', correct: false, feedback: 'Delays OOM — doesn\'t fix unbounded growth. Leak will return.' },
          { label: 'Remove auth entirely', action: 'remove-auth', correct: false, feedback: 'Not a serious option for production.' },
          { label: 'Close incident without postmortem — service is back', action: 'close', correct: false, feedback: 'SEV-1 requires blameless postmortem and action items.' },
        ],
      },
    ],
  },
];

export function getIncidentScenario(slug: string) {
  return incidentScenarios.find((s) => s.slug === slug);
}

export function incidentHref(slug: string) {
  return `/incidents/${slug}`;
}
