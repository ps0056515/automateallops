import type { RichSection } from './types';

export type LabCategory = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  whoItsFor: string[];
  sampleScenarios: string[];
  sections: RichSection[];
};

export const labCategories: LabCategory[] = [
  {
    slug: 'hands-on-labs',
    title: 'Hands-on Labs',
    description: 'Guided, step-by-step labs in real cloud sandboxes — Kubernetes, Terraform, CI/CD, and more.',
    highlights: ['500+ lab scenarios', 'Auto-graded checkpoints', 'Hints when you get stuck', 'XP and badges'],
    whoItsFor: ['Engineers learning a new tool', 'Teams standardizing on golden paths', 'Certification candidates needing reps', 'Bootcamp graduates bridging to production skills'],
    sampleScenarios: [
      'Fix a CrashLoopBackOff caused by misconfigured liveness probe',
      'Write Terraform module and pass policy check in CI',
      'Build GitHub Actions pipeline with OIDC to AWS',
      'Restore Prometheus data after PVC misconfiguration',
    ],
    sections: [
      { title: 'How labs work', steps: [
        { title: 'Launch sandbox', description: 'Pre-provisioned cluster or cloud env spins up in ~30 seconds.' },
        { title: 'Follow objectives', description: 'Each step has a clear success criterion verified automatically.' },
        { title: 'Get hints', description: 'Stuck? Progressive hints without giving away the full answer.' },
        { title: 'Earn XP', description: 'Completion tracks progress on your learning path dashboard.' },
      ]},
      { title: 'Lab categories', items: ['Kubernetes troubleshooting', 'Terraform & IaC', 'CI/CD pipelines', 'Observability & SRE', 'Security & compliance', 'Linux & networking'] },
    ],
  },
  {
    slug: 'sandboxes',
    title: 'Sandboxes',
    description: 'Ephemeral environments you control. Break things, rebuild, and experiment without risk.',
    highlights: ['Pre-configured clusters', 'Reset in one click', 'Team shared sandboxes', 'No local setup'],
    whoItsFor: ['PoC and spike work', 'Conference demos and interviews', 'Testing destructive commands', 'Pair programming sessions'],
    sampleScenarios: [
      'Test kubectl delete commands before production runbook',
      'Prototype Helm chart with multiple value files',
      'Reproduce customer bug in isolated namespace',
      'Train new hire on ArgoCD without prod access',
    ],
    sections: [
      { title: 'Sandbox types', items: ['Single-node K8s for quick tests', 'Multi-node EKS-like cluster for realism', 'Terraform-only AWS sandbox with spend caps', 'CI sandbox with Jenkins + agent prewired'] },
      { title: 'Reset and cost control', body: 'Sandboxes auto-terminate after idle timeout. One-click reset wipes state but keeps template — perfect for repeatable demos and interview loops.', callout: { variant: 'warning', text: 'Never put production credentials or customer data in sandboxes — they are shared-isolation environments.' } },
    ],
  },
  {
    slug: 'challenges',
    title: 'Challenges',
    description: 'Timed DevOps puzzles and incident simulations that test troubleshooting skills under pressure.',
    highlights: ['Interactive incident sims', 'Leaderboards', 'Weekly challenges', 'On-call readiness scoring'],
    whoItsFor: ['Engineers preparing for interviews', 'Teams running game days', 'Competitive learners', 'On-call readiness validation'],
    sampleScenarios: [
      '15-minute: API returning 503 — find misconfigured ingress',
      '30-minute: Cluster autoscaler not scaling — quota and limits',
      '45-minute: Pipeline green but deploy wrong image — trace CI to GitOps',
      '60-minute: Multi-service outage — identify upstream dependency',
    ],
    sections: [
      { title: 'Scoring', items: ['Time to resolution', 'Decision quality on branching scenarios', 'Customer impact simulated in score', 'Bonus for documenting root cause'] },
      { title: 'Try incident simulations', body: 'Five free interactive scenarios — SEV-1 through SEV-3 — with decision trees and real alert context. Enterprise teams get custom game-day scenarios mapped to their stack.', callout: { variant: 'tip', text: 'Start at /incidents — all scenarios free, no account required for preview.' } },
    ],
  },
  {
    slug: 'certifications',
    title: 'Certifications',
    description: 'Exam-style prep tracks for CKA, CKAD, CKS, AWS DevOps Pro, and Terraform Associate — with published pass rates.',
    highlights: ['6 CKA mock exams', 'Killer.sh-style simulators', '94% CKA pass rate', 'LF exam registration links'],
    whoItsFor: ['Career advancement', 'Employer certification requirements', 'Structured learning motivation', 'Validating skills after bootcamp'],
    sampleScenarios: [
      'CKA mock: 17 tasks in 2 hours — cluster repair under timer',
      'CKAD mock: deploy app from spec, expose, configure ConfigMap',
      'AWS DevOps Pro: pipeline + CloudFormation + incident response MCQ',
      'Terraform Associate: state, modules, workspace scenarios',
    ],
    sections: [
      { title: 'Prep methodology', steps: [
        { title: 'Diagnostic', description: 'Baseline mock exam identifies weak domains.' },
        { title: 'Targeted labs', description: 'Auto-assigned labs for your gap areas only.' },
        { title: 'Timed drills', description: 'Single-domain speed runs — networking only, storage only.' },
        { title: 'Full simulation', description: 'Exam conditions: no hints, strict timer, pass/fail report.' },
      ]},
      { title: 'Full certification hub', body: 'Detailed prep tracks, domain weights, mock exam counts, and direct links to Linux Foundation and HashiCorp exam registration live at /certifications.', callout: { variant: 'info', text: 'CKA: 94% first-attempt pass · CKAD: 91% · CKS: 88% — among full-track completers.' } },
    ],
  },
];

export function getLabCategory(slug: string) {
  return labCategories.find((c) => c.slug === slug);
}
