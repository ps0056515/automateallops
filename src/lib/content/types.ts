export type ContentStep = {
  title: string;
  description: string;
};

export type RichSection = {
  title: string;
  body?: string;
  items?: string[];
  steps?: ContentStep[];
  callout?: { variant: 'tip' | 'warning' | 'info'; text: string };
};

export type PageDetail = {
  sections: RichSection[];
  ctaLabel?: string;
  ctaHref?: string;
};
