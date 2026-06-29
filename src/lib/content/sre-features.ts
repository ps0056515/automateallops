import type { RichSection } from './types';

export type SreFeature = {
  slug: string;
  title: string;
  desc: string;
  iconKey: 'shield' | 'trending-up' | 'zap' | 'book-open' | 'alert-triangle' | 'target';
  color: string;
  bg: string;
  border: string;
  items: string[];
  overview: string;
  whenToUse: string[];
  phases: { title: string; description: string }[];
  sections: RichSection[];
};

export const sreFeatures: SreFeature[] = [
  {
    slug: 'incident-playbooks',
    title: 'Incident Playbooks',
    desc: 'Battle-tested runbooks for every incident type. P0 to P3 response templates used by top SRE teams.',
    iconKey: 'shield',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    items: ['Database outages', 'Memory leaks', 'Network partitions', 'Certificate expirations'],
    overview: 'Step-by-step response guides for production incidents, from detection through resolution and communication.',
    whenToUse: ['Customer-impacting outage in progress', 'On-call receives Sev1/Sev2 page', 'Post-deploy error rate spike', 'Dependency provider degraded'],
    phases: [
      { title: 'Detect & triage', description: 'Confirm user impact via SLI dashboards, assign severity, open incident channel.' },
      { title: 'Mitigate', description: 'Restore service first — rollback, scale, failover, feature flag — root cause can wait.' },
      { title: 'Communicate', description: 'Status page, internal updates every 15 min for P0, customer support briefing.' },
      { title: 'Resolve & follow up', description: 'Verify recovery metrics, close incident, schedule postmortem within 48 hours.' },
    ],
    sections: [
      { title: 'Included playbook templates', items: ['Database connection pool exhaustion', 'Kubernetes node NotReady cascade', 'TLS certificate expiry (preventive and active)', 'Third-party API latency degradation', 'Memory leak gradual OOMKill pattern'] },
      { title: 'Roles defined in every playbook', items: ['Incident Commander — coordinates, does not debug', 'Communications Lead — status updates', 'Technical Lead — drives mitigation', 'Scribe — timeline in real time'] },
    ],
  },
  {
    slug: 'slo-error-budget-toolkit',
    title: 'SLO / Error Budget Toolkit',
    desc: 'Define, measure, and enforce SLOs. Automated error budget burn alerts and stakeholder dashboards.',
    iconKey: 'trending-up',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    items: ['SLO templates', 'Burn rate calculators', 'Alerting rules', 'CUJ mapping'],
    overview: 'Templates and calculators to define reliability targets and make data-driven release decisions.',
    whenToUse: ['Launching a new customer-facing service', 'Negotiating release freeze policy', 'Explaining reliability to product leadership', 'Prioritizing reliability work vs features'],
    phases: [
      { title: 'Pick SLIs', description: 'Measure what users feel: availability, latency, correctness — not CPU.' },
      { title: 'Set SLO target', description: '99.9% might be wrong — use historical data and business tolerance.' },
      { title: 'Define error budget policy', description: 'What happens when budget exhausted: freeze releases, focus on reliability sprint.' },
      { title: 'Alert on burn rate', description: 'Multi-window burn alerts catch fast and slow degradations.' },
    ],
    sections: [
      { title: 'Toolkit includes', items: ['SLI worksheet for API, batch, and streaming workloads', 'Prometheus recording rules for availability and latency SLIs', 'Grafana dashboard template with budget remaining gauge', 'Policy doc template for product + engineering sign-off'] },
      { title: 'Example SLO', body: 'Checkout API: 99.95% of requests complete in <500ms over 30 days. Error budget = 21.6 minutes downtime/month. Burn alert at 2% budget consumed in 1 hour.', callout: { variant: 'tip', text: 'Start with one critical user journey — do not SLO everything on day one.' } },
    ],
  },
  {
    slug: 'chaos-engineering',
    title: 'Chaos Engineering',
    desc: 'Build resilient systems by breaking them first. Guided chaos experiments with safety gates.',
    iconKey: 'zap',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    items: ['Network failures', 'Pod kills', 'Latency injection', 'CPU/memory pressure'],
    overview: 'Controlled failure injection labs to validate resilience before customers find the weak spots.',
    whenToUse: ['Before major traffic event (launch, sale)', 'After architecture change', 'Validating new failover path', 'Game day quarterly ritual'],
    phases: [
      { title: 'Hypothesis', description: 'Define steady state metrics and expected behavior under failure.' },
      { title: 'Blast radius control', description: 'Start in staging, single AZ, single tenant — expand gradually.' },
      { title: 'Inject failure', description: 'Kill pod, add latency, partition network using Litmus/Gremlin/k6.' },
      { title: 'Observe & learn', description: 'Did alerts fire? Did HPA help or hurt? Document gaps.' },
    ],
    sections: [
      { title: 'Experiment catalog', items: ['Random pod deletion on critical Deployment', 'Network delay between app and database', 'DNS failure simulation', 'Node drain under load', 'Certificate mid-expiry rotation'] },
      { title: 'Safety gates', body: 'All labs include abort criteria: error rate > X%, automatic rollback, and manual kill switch. Never run uncontrolled chaos in production without executive sponsorship and comms plan.' },
    ],
  },
  {
    slug: 'postmortem-library',
    title: 'Postmortem Library',
    desc: '100+ real-world postmortems from major incidents at Google, Amazon, Netflix and more.',
    iconKey: 'book-open',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    items: ['Root cause analysis', 'Timeline templates', 'Action items tracking', 'Blameless culture'],
    overview: 'Learn from real outages with curated postmortems and blameless review templates.',
    whenToUse: ['After any Sev1/Sev2 incident', 'Training new SREs on failure modes', 'Design review for similar systems', 'Audit action item completion'],
    phases: [
      { title: 'Timeline', description: 'UTC timestamps: detection, escalation, mitigation, recovery — facts only.' },
      { title: 'Root cause analysis', description: 'Five whys or fishbone — distinguish proximate vs systemic causes.' },
      { title: 'Impact', description: 'Users affected, revenue, duration, SLA credit implications.' },
      { title: 'Action items', description: 'Prevent, detect faster, mitigate faster — each with owner and due date.' },
    ],
    sections: [
      { title: 'Curated incident categories', items: ['Config push gone wrong', 'Capacity underestimation', 'Dependency cascade', 'Human process failure', 'Security incident overlap'] },
      { title: 'Blameless principles', body: 'Assume everyone acted with reasonable intentions given what they knew. Fix systems, not shame people. Executives must model this or postmortems become cover documents.' },
    ],
  },
  {
    slug: 'on-call-excellence',
    title: 'On-Call Excellence',
    desc: 'Reduce toil, improve response times and prevent burnout. PagerDuty and Opsgenie integration labs.',
    iconKey: 'alert-triangle',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    items: ['Alert fatigue reduction', 'Escalation policies', 'Rotation design', 'Runbook automation'],
    overview: 'Design sustainable on-call rotations, reduce alert noise, and automate common responses.',
    whenToUse: ['Setting up first on-call rotation', 'Alert volume unsustainable', 'Engineer burnout signals', 'Scaling team across timezones'],
    phases: [
      { title: 'Measure', description: 'Pages per week, after-hours ratio, MTTA, toil hours per shift.' },
      { title: 'Fix alerts', description: 'Symptom-based, SLO-linked, runbook attached, no duplicate routes.' },
      { title: 'Design rotation', description: 'Primary/secondary, fair handoffs, compensation policy documented.' },
      { title: 'Automate toil', description: 'Self-service restart, cache clear, scale — remove repeat manual steps.' },
    ],
    sections: [
      { title: 'Rotation patterns', items: ['Follow-the-sun for global teams', 'Weekly rotation for small teams', 'Shadow week before solo on-call', 'Manager escalation path after 30 min P0'] },
      { title: 'Wellbeing practices', items: ['No meetings day after night shift', 'Maximum consecutive weeks cap', 'Post-incident time off for long P0s', 'Quarterly on-call retrospective'] },
    ],
  },
  {
    slug: 'observability-stack',
    title: 'Observability Stack',
    desc: 'Build world-class observability with metrics, logs, traces and dashboards from scratch.',
    iconKey: 'target',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    items: ['Prometheus + Grafana', 'OpenTelemetry', 'Loki log aggregation', 'Jaeger tracing'],
    overview: 'End-to-end observability labs covering the three pillars: metrics, logs, and distributed traces.',
    whenToUse: ['Greenfield service launch', 'Replacing vendor APM', 'Debug latency in microservices', 'Building SLO dashboards'],
    phases: [
      { title: 'Instrument', description: 'RED metrics, structured logs, OTel traces with trace context propagation.' },
      { title: 'Collect', description: 'Prometheus scrape, log shipper, trace collector — know cardinality cost.' },
      { title: 'Visualize', description: 'Dashboards per service tier, on-call home, SLO views.' },
      { title: 'Alert', description: 'Page on user pain, ticket on tech debt signals.' },
    ],
    sections: [
      { title: 'Stack you will build in labs', items: ['Prometheus + Alertmanager + Grafana', 'Loki for pod logs with label discipline', 'Tempo/Jaeger for distributed traces', 'OpenTelemetry collector pipeline'] },
      { title: 'Golden signals mapping', body: 'Latency, traffic, errors, saturation — map each to concrete metrics. Saturation often missed: queue depth, thread pool, disk IO wait.' },
    ],
  },
];

export function getSreFeature(slug: string) {
  return sreFeatures.find((f) => f.slug === slug);
}
