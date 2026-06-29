'use client';

import { useEffect } from 'react';

/** Legacy hash URLs from the single-page version — full navigation avoids Next.js 16 router bugs. */
const HASH_ROUTES: Record<string, string> = {
  home: '/',
  tools: '/tools',
  learn: '/learn',
  labs: '/labs',
  cloud: '/cloud',
  'sre-hub': '/sre-hub',
  community: '/community',
  pricing: '/services',
  'get-started': '/get-started',
  newsletter: '/newsletter',
  'cloud-hub': '/cloud',
  'tool-aws': '/cloud/aws',
  'tool-gcp': '/cloud/gcp',
  'tool-azure': '/cloud/azure',
  'tool-kubernetes': '/tools/kubernetes',
  'tool-docker': '/tools/docker',
  'tool-terraform': '/tools/terraform',
  'path-kubernetes-engineer': '/learn/kubernetes-engineer',
};

export default function HashRedirect() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;

    const target = HASH_ROUTES[hash];
    if (target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}
