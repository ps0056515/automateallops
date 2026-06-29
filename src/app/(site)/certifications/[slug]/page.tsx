import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CertDetailView from '@/components/content/CertDetailView';
import { getCertificationTrack, certificationTracks } from '@/lib/content/certifications';

export function generateStaticParams() {
  return certificationTracks.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getCertificationTrack(slug);
  if (!track) return { title: 'Certification Not Found — AutomateAllOps' };
  return { title: `${track.shortName} Prep — AutomateAllOps`, description: track.description };
}

export default async function CertificationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getCertificationTrack(slug);
  if (!track) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Cert Prep"
        title={`${track.shortName} — ${track.title}`}
        description={track.description}
        backHref="/certifications"
        backLabel="All certifications"
      />
      <CertDetailView track={track} />
    </>
  );
}
