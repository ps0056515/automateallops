import RichContent from '@/components/content/RichContent';
import PageCta from '@/components/content/PageCta';
import type { ToolDetail } from '@/lib/content/tools-detail';
import { sections } from '@/lib/navigation';

export default function ToolResourceView({ resource, detail }: { resource: { title: string }; detail: ToolDetail }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="glass rounded-2xl p-8 border border-white/10">
        <p className="text-slate-400 leading-relaxed mb-6">{detail.whyItMatters}</p>
        <PageCta label={`Browse ${resource.title.toLowerCase()}`} href={sections.getStarted} />
      </div>
      <RichContent sections={detail.sections} />
    </div>
  );
}
