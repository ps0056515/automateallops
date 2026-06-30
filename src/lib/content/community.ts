import type { RichSection } from './types';

export type CommunityPage = {
  slug: string;
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
  bullets: string[];
  gettingStarted: string[];
  norms: string[];
  sections: RichSection[];
  externalUrl?: string;
};

export const communityPages: CommunityPage[] = [
  {
    slug: 'discord',
    title: 'Discord',
    status: 'coming-soon',
    description: 'Real-time chat for DevOps engineers — launching Q3 2026. Join the newsletter for early access.',
    bullets: ['#kubernetes-help', '#terraform', '#career-advice', '#incident-stories'],
    gettingStarted: ['Join the newsletter to get the invite link at launch', 'Introduce yourself in #introductions with stack and goals', 'Search archive before asking — most kubectl questions answered', 'Use threads for long troubleshooting sessions'],
    norms: ['No unsolicited DMs for recruiting without asking in public channel', 'Redact company names and credentials in screenshots', 'Help others when you can — reputation is community currency', 'Be kind to beginners — everyone was mid on-call panic once'],
    sections: [
      { title: 'Planned channels', items: ['#kubernetes-help — pod failures, networking, helm', '#terraform — state issues, module design', '#career-advice — resumes, interviews, leveling', '#incident-stories — anonymized war stories', '#cert-study — CKA/CKAD study groups form here'] },
    ],
  },
  {
    slug: 'forum',
    title: 'Forum',
    status: 'coming-soon',
    description: 'Long-form discussions and searchable Q&A — in development. Use the blog and newsletter for now.',
    bullets: ['Lab discussions', 'Architecture reviews', 'Certification tips', 'Job board'],
    gettingStarted: ['Subscribe to the newsletter for forum launch announcement', 'Post architecture diagrams for feedback using template', 'Tag posts with tool names for discoverability', 'Mark solution when answered — helps search ranking'],
    norms: ['Provide minimal reproducible example for bug reports', 'Architecture reviews are suggestions not mandates', 'Job posts must include salary range or contract rate', 'No astroturfing vendor products'],
    sections: [
      { title: 'Planned forum areas', items: ['Lab walkthroughs with alternative solutions', 'Reference architecture critiques', 'Cert exam trip reports with study hours', 'Migration stories: Jenkins → GitHub Actions, etc.'] },
    ],
  },
  {
    slug: 'events',
    title: 'Events',
    status: 'coming-soon',
    description: 'Live workshops and SRE office hours — schedule launching soon. Follow the blog for announcements.',
    bullets: ['Monthly K8s deep dives', 'SRE fireside chats', 'Cert prep bootcamps', 'Conference watch parties'],
    gettingStarted: ['Subscribe to the newsletter for event announcements', 'Add to personal calendar when events go live', 'Submit questions beforehand for AMA sessions', 'Volunteer to demo your lab capstone project'],
    norms: ['Cameras optional, mute when not speaking', 'Recordings shared under CC for community learning', 'No vendor pitches in community-run events', 'Code of conduct enforced — report to moderators'],
    sections: [
      { title: 'Planned recurring events', items: ['First Tuesday: Kubernetes deep dive workshop', 'Third Wednesday: SRE fireside with guest practitioner', 'Last Friday: Cert cram session rotating cert focus', 'Quarterly: 24-hour global game day'] },
    ],
  },
  {
    slug: 'podcast',
    title: 'Podcast',
    status: 'coming-soon',
    description: 'Ship or Sink — weekly episodes on production incidents and platform engineering. First season in production.',
    bullets: ['Guest SRE interviews', 'Incident breakdowns', 'Tool deep dives', 'Career paths'],
    gettingStarted: ['Subscribe to the newsletter for launch notification', 'Start with our blog incident breakdowns in the meantime', 'Submit your anonymized story for episode consideration', 'Follow the blog RSS for related content'],
    norms: ['Stories anonymized unless guest opts in', 'Focus on learning not vendor promotion', 'Transcripts available for accessibility', 'Community episode suggestions welcome via newsletter'],
    sections: [
      { title: 'Planned episode themes', items: ['How teams think about chaos engineering at scale', 'Platform team metrics that actually matter', 'Non-traditional paths into SRE', 'Terraform module design at scale'] },
    ],
  },
];

export function getCommunityPage(slug: string) {
  return communityPages.find((p) => p.slug === slug);
}
