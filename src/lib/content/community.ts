import type { RichSection } from './types';

export type CommunityPage = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  gettingStarted: string[];
  norms: string[];
  sections: RichSection[];
};

export const communityPages: CommunityPage[] = [
  {
    slug: 'discord',
    title: 'Discord',
    description: 'Real-time chat with 15,000+ DevOps engineers. Get help, share war stories, and find study groups.',
    bullets: ['#kubernetes-help', '#terraform', '#career-advice', '#incident-stories'],
    gettingStarted: ['Join via invite link after free account signup', 'Introduce yourself in #introductions with stack and goals', 'Search archive before asking — most kubectl questions answered', 'Use threads for long troubleshooting sessions'],
    norms: ['No unsolicited DMs for recruiting without asking in public channel', 'Redact company names and credentials in screenshots', 'Help others when you can — reputation is community currency', 'Be kind to beginners — everyone was mid on-call panic once'],
    sections: [
      { title: 'Active channels', items: ['#kubernetes-help — pod failures, networking, helm', '#terraform — state issues, module design', '#career-advice — resumes, interviews, leveling', '#incident-stories — anonymized war stories', '#cert-study — CKA/CKAD study groups form here'] },
      { title: 'Office hours', body: 'Staff SREs host live voice office hours every Thursday 17:00 UTC. Bring a problem you are stuck on in labs or at work — no sales pitch, pure technical Q&A.' },
    ],
  },
  {
    slug: 'forum',
    title: 'Forum',
    description: 'Long-form discussions, lab walkthroughs, and searchable Q&A archived for the community.',
    bullets: ['Lab discussions', 'Architecture reviews', 'Certification tips', 'Job board'],
    gettingStarted: ['Link AutomateAllOps account for lab progress badges on profile', 'Post architecture diagrams for feedback using template', 'Tag posts with tool names for discoverability', 'Mark solution when answered — helps search ranking'],
    norms: ['Provide minimal reproducible example for bug reports', 'Architecture reviews are suggestions not mandates', 'Job posts must include salary range or contract rate', 'No astroturfing vendor products'],
    sections: [
      { title: 'High-value forum threads', items: ['Lab walkthroughs with alternative solutions', 'Reference architecture critiques', 'Cert exam trip reports with study hours', 'Migration stories: Jenkins → GitHub Actions, etc.'] },
    ],
  },
  {
    slug: 'events',
    title: 'Events',
    description: 'Live workshops, SRE office hours, and virtual meetups with industry practitioners.',
    bullets: ['Monthly K8s deep dives', 'SRE fireside chats', 'Cert prep bootcamps', 'Conference watch parties'],
    gettingStarted: ['Browse upcoming events on community calendar', 'Add to personal calendar — replays for registrants only', 'Submit questions beforehand for AMA sessions', 'Volunteer to demo your lab capstone project'],
    norms: ['Cameras optional, mute when not speaking', 'Recordings shared under CC for community learning', 'No vendor pitches in community-run events', 'Code of conduct enforced — report to moderators'],
    sections: [
      { title: 'Recurring events', items: ['First Tuesday: Kubernetes deep dive workshop', 'Third Wednesday: SRE fireside with guest from big tech', 'Last Friday: Cert cram session rotating cert focus', 'Quarterly: 24-hour global game day'] },
    ],
  },
  {
    slug: 'podcast',
    title: 'Podcast',
    description: 'Ship or Sink — weekly episodes on production incidents, platform engineering, and career growth.',
    bullets: ['Guest SRE interviews', 'Incident breakdowns', 'Tool deep dives', 'Career paths'],
    gettingStarted: ['Subscribe on Spotify, Apple Podcasts, or RSS', 'Start with Episode 1: "The outage that taught us SLOs"', 'Join live recording Q&A announced in Discord', 'Submit your anonymized story for episode consideration'],
    norms: ['Stories anonymized unless guest opts in', 'Focus on learning not vendor promotion', 'Transcripts available for accessibility', 'Community episode suggestions voted in Discord'],
    sections: [
      { title: 'Recent episode themes', items: ['How Netflix thinks about chaos engineering at scale', 'Platform team metrics that actually matter', 'From help desk to Staff SRE — non-traditional paths', 'Terraform at 10,000 modules — module design at scale'] },
    ],
  },
];

export function getCommunityPage(slug: string) {
  return communityPages.find((p) => p.slug === slug);
}
