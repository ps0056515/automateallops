import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import { sections } from '@/lib/navigation';

const signInSections = [
  {
    title: 'Your account unlocks',
    items: [
      'Lab progress synced across devices',
      'Learning path completion and XP',
      'SRE Hub playbooks and templates',
      'Community Discord roles and forum badges',
      'Certification prep mock exam history',
    ],
  },
  {
    title: 'Security practices',
    body: 'We support GitHub OAuth and email/password with enforced MFA for team accounts. Sessions expire after inactivity. We never store cloud credentials — labs use ephemeral isolated environments.',
  },
];

export const metadata = {
  title: 'Sign In — AutomateAllOps',
  description: 'Sign in to your AutomateAllOps account.',
};

export default function SignInPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sign In"
        title="Welcome Back"
        description="Sign in to continue your labs, track progress, and access the SRE Hub."
        backHref="/"
      />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <form className="glass rounded-2xl p-8 border border-white/10 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">Email</label>
            <input id="email" type="email" placeholder="you@company.com" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-slate-400 mb-1.5">Password</label>
            <input id="password" type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50" />
          </div>
          <button type="button" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Sign In
          </button>
        </form>
        <div className="max-w-md">
          <RichContent sections={signInSections} />
        </div>
        <p className="text-center text-sm text-slate-500">
          No account yet?{' '}
          <Link href={sections.getStarted} className="link-accent hover:underline">Get started free</Link>
        </p>
      </div>
    </>
  );
}
