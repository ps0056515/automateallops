import type { RichSection } from './types';

export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: RichSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'gitops-at-scale',
    title: 'GitOps at Scale: Lessons from 500 Deploys/Day',
    tag: 'GitOps',
    date: 'Jun 12, 2025',
    readTime: '8 min',
    excerpt: 'What breaks when you move from ten deploys a day to five hundred — and the patterns that survive.',
    sections: [
      { title: 'The inflection point', body: 'Most GitOps tutorials assume a handful of microservices and one cluster. At 500 deploys/day across 40 teams, your problems shift from "how do I sync?" to "how do I prevent one team from blocking everyone else?"' },
      { title: 'Patterns that worked', items: ['App-of-Apps per team, not per service — reduces ArgoCD object explosion', 'Mandatory health checks that understand your CRDs', 'Sync windows for prod; dev clusters auto-sync freely', 'Promotion via PR to env branch, never kubectl apply'] },
      { title: 'Patterns that failed', items: ['Monorepo for all Helm values — merge contention nightmare', 'Auto-sync prod without resource hooks for migrations', 'Shared cluster-admin deploy role "temporarily"', 'Ignoring OutOfSync as "probably fine"'] },
      { title: 'Metrics we track', body: 'Deploy frequency, change failure rate, mean time to restore, and percentage of rollbacks via git revert vs manual kubectl. GitOps should improve all four — if not, your Git flow is theater.' },
    ],
  },
  {
    slug: 'slo-mistakes',
    title: '5 SLO Mistakes That Burn Error Budgets Fast',
    tag: 'SRE',
    date: 'Jun 5, 2025',
    readTime: '6 min',
    excerpt: 'Teams adopt SLOs then wonder why nobody trusts the numbers. These five mistakes explain why.',
    sections: [
      { title: '1. Measuring uptime instead of user experience', body: 'Load balancer health checks pass while checkout fails. SLIs must reflect critical user journeys — success rate and latency of key APIs, not ping.' },
      { title: '2. SLOs without error budget policy', body: 'An SLO without consequences is a dashboard widget. Define what happens when budget hits 0: release freeze, reliability sprint, exec escalation.' },
      { title: '3. Alerting on infrastructure metrics only', body: 'CPU alerts do not page — symptom alerts tied to SLI burn do. Use multi-window burn rate alerts from Google SRE workbook.' },
      { title: '4. Too many SLOs', body: 'Start with one journey. Ten SLOs means ten debates and zero clarity. Expand when the first SLO drives real decisions.' },
      { title: '5. Product not in the room', body: 'SLO targets need product sign-off on reliability vs velocity tradeoff. SRE-only SLOs get ignored the first time they block a launch.' },
    ],
  },
  {
    slug: 'terraform-modules',
    title: 'Terraform Module Design for Platform Teams',
    tag: 'IaC',
    date: 'May 28, 2025',
    readTime: '10 min',
    excerpt: 'Good modules encode organizational decisions. Bad modules are copy-paste with extra steps.',
    sections: [
      { title: 'Module boundaries', body: 'A module should represent one architectural decision: a standard VPC, a standard EKS cluster, a standard RDS instance. If your module needs 80 variables, it is not a module — it is a framework nobody understands.' },
      { title: 'Interface design', items: ['Required vs optional variables clearly documented', 'Sensible defaults for 80% case', 'Outputs that downstream modules actually need', 'Examples/ directory that runs terraform apply in CI'] },
      { title: 'Versioning and consumption', body: 'Semver modules. Pin with version constraint in consumer: version = "~> 2.3". Breaking changes get major bump and migration guide. Internal registry (Terraform Cloud or Spacelift) — not Git tags floating latest.' },
      { title: 'Testing pyramid', items: ['terraform validate + tflint in PR', 'terratest for critical paths', 'Periodic full apply/destroy in sandbox account', 'Policy check (OPA/Sentinel) before merge'] },
    ],
  },
  {
    slug: 'on-call-burnout',
    title: 'How to Fix On-Call Burnout Without Hiring More SREs',
    tag: 'On-Call',
    date: 'May 20, 2025',
    readTime: '7 min',
    excerpt: 'Burnout is a systems problem. Fix the alerts, toil, and rotation design before opening headcount.',
    sections: [
      { title: 'Measure the pain', body: 'Pages per engineer per week, after-hours percentage, MTTA trend, voluntary attrition after on-call quarters. If you cannot measure it, you cannot fix it.' },
      { title: 'Alert quality sprint', body: 'Take the top 10 noisiest alerts. For each: delete, downgrade to ticket, or fix root cause. Teams often cut pages 40% in two weeks with zero reliability loss.' },
      { title: 'Toil budget', body: 'Google SRE suggests cap 50% toil — most teams exceed 70%. Automate the three most frequent manual runbook steps this quarter. Self-service beats heroics.' },
      { title: 'Rotation design', items: ['Max 1 week solo primary for high-traffic services', 'Shadow before solo', 'Comp time policy written and enforced', 'Manager takes escalation layer — not IC at 3am alone'] },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
