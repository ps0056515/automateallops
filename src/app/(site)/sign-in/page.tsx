import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RichContent from '@/components/content/RichContent';
import { sections } from '@/lib/navigation';

const signInSections = [
  {
    title: 'This sign-in is for the learning platform',
    body: 'Access labs, learning paths, cert prep, and SRE Hub content. If you need to deploy a bench squad for a project, use the contact page instead — that flow is separate from lab accounts.',
  },
  {
    title: 'Your account unlocks',
    items: [
      'Lab progress synced across devices',
      'Learning path completion and XP',
      'SRE Hub playbooks and templates',
      'Certification prep mock exam history',
    ],
  },
  {
    title: 'Security practices',
    body: 'We support GitHub OAuth and email/password with enforced MFA for team accounts. Sessions expire after inactivity. We never store cloud credentials — labs use ephemeral isolated environments.',
  },
];

export const metadata = {
  title: 'Lab Sign In — AutomateAllOps',
  description: 'Sign in to the AutomateAllOps learning platform — labs, paths, and SRE Hub.',
};

export default function SignInPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning platform"
        title="Lab sign in"
        description="Sign in to continue labs, track progress, and access the SRE Hub. Not for project delivery — book a discovery call for squad deployment."
        backHref="/"
      />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="glass rounded-2xl p-5 border border-amber-500/20 text-sm text-slate-400">
          Lab accounts are coming soon.{' '}
          <Link href={sections.getStarted} className="text-cyan-400 hover:text-cyan-300 font-semibold">Get started free</Link>
          {' '}or{' '}
          <Link href={sections.contactProjects} className="text-cyan-400 hover:text-cyan-300 font-semibold">contact us for project delivery</Link>.
        </div>
        <form className="glass rounded-2xl p-8 border border-white/10 space-y-4 opacity-60 pointer-events-none" aria-disabled="true">
          <div>
            <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">Email</label>
            <input id="email" type="email" disabled placeholder="you@company.com" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-slate-400 mb-1.5">Password</label>
            <input id="password" type="password" disabled placeholder="••••••••" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 placeholder-slate-600" />
          </div>
          <button type="button" disabled className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold opacity-50 cursor-not-allowed">
            Sign in (coming soon)
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
