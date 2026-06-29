import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import { sections } from '@/lib/navigation';

const startSections = [
  {
    title: 'What happens when you sign up',
    steps: [
      { title: 'Create free account', description: 'Email or GitHub — no credit card. Instant access to 10 labs per month forever.' },
      { title: 'Pick a starting point', description: 'Learning path for structure, or jump into a sandbox if you learn by breaking things.' },
      { title: 'Launch your first lab', description: 'Environment ready in ~30 seconds. Follow objectives, earn XP, track progress.' },
      { title: 'Join the community', description: 'Discord for help, forum for deep dives, events for live workshops.' },
    ],
  },
  {
    title: 'Not sure where to start?',
    items: [
      'New to DevOps → DevOps Practitioner path',
      'Know Docker, new to K8s → Kubernetes Engineer path',
      'On-call today → SRE Hub incident playbooks + observability lab',
      'Building internal platform → Platform Engineering path',
    ],
  },
];

export const metadata = {
  title: 'Get Started — AutomateAllOps',
  description: 'Create your free AutomateAllOps account and launch your first DevOps lab.',
};

export default function GetStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Started"
        title="Launch Your DevOps Journey"
        description="Your first 10 labs are free — no credit card required. Every project is DevOps-focused: pipelines, clusters, IaC, and reliability."
        backHref="/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <RichContent sections={startSections} />
        <div className="glass rounded-2xl p-10 border border-cyan-500/20 text-center">
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Create a free account to access labs, learning paths, and the SRE Hub. DevOps-only content — every track ties back to shipping and running systems at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={sections.labs} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold">
              Launch first lab
            </Link>
            <Link href={sections.learn} className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/40 transition-all">
              Browse paths
            </Link>
          </div>
        </div>
        <p className="text-sm text-slate-500 text-center">
          Already have an account?{' '}
          <Link href={sections.signIn} className="text-cyan-400 hover:text-cyan-300">Sign in</Link>
        </p>
      </div>
    </>
  );
}
