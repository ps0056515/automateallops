export const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/automateallops/discovery-call';

export const intakeFields = {
  squads: ['DevOps', 'Cloud', 'SRE', 'Platform', 'Not sure yet'],
  timelines: ['ASAP (< 2 weeks)', '2–4 weeks', '1–3 months', 'Exploring options'],
} as const;

export type IntakeFormData = {
  name: string;
  email: string;
  company: string;
  squad: string;
  timeline: string;
  stack: string;
  details: string;
};

export function buildIntakeMailto(data: IntakeFormData) {
  const subject = encodeURIComponent(`Project inquiry — ${data.company || data.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Squad needed: ${data.squad}`,
      `Timeline: ${data.timeline}`,
      `Stack: ${data.stack}`,
      '',
      'Project details:',
      data.details,
    ].join('\n'),
  );
  return `mailto:projects@automateallops.com?subject=${subject}&body=${body}`;
}
