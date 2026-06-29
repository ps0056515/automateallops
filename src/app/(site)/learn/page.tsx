import PageHeader from '@/components/PageHeader';
import LearningPaths from '@/components/LearningPaths';
import Tools from '@/components/Tools';

export const metadata = {
  title: 'Learning Paths — AutomateAllOps',
  description: 'Structured DevOps and SRE career tracks from beginner to expert.',
};

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Career Tracks for DevOps Engineers"
        description="Precision-engineered paths from beginner to expert. Every track ends with a real-world project and certification prep."
        backHref="/"
      />
      <LearningPaths />
      <Tools />
    </>
  );
}
