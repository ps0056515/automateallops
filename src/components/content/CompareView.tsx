import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import { compareRows, positioningPoints } from '@/lib/content/compare';
import PageCta from '@/components/content/PageCta';
import BrandWordmark from '@/components/BrandWordmark';
import { sections } from '@/lib/navigation';

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-green-400 mx-auto" />;
  if (value === false) return <Minus className="w-5 h-5 text-slate-600 mx-auto" />;
  return <span className="text-slate-400 text-xs text-center block">{value}</span>;
}

export default function CompareView() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {positioningPoints.map((p) => (
          <div key={p.title} className="glass rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 pr-4 text-slate-500 font-medium">Feature</th>
              <th className="py-4 px-3 text-center">
                <BrandWordmark className="text-sm" />
              </th>
              <th className="py-4 px-3 text-center text-slate-400 font-medium">KodeKloud</th>
              <th className="py-4 px-3 text-center text-slate-400 font-medium">Linux Foundation</th>
              <th className="py-4 px-3 text-center text-slate-400 font-medium">A Cloud Guru</th>
              <th className="py-4 px-3 text-center text-slate-400 font-medium">YouBrokeProd</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.feature} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="py-3 pr-4 text-slate-300">{row.feature}</td>
                <td className="py-3 px-3 bg-cyan-500/5"><CellValue value={row.AutomateAllOps} /></td>
                <td className="py-3 px-3"><CellValue value={row.kodekloud} /></td>
                <td className="py-3 px-3"><CellValue value={row.linuxFoundation} /></td>
                <td className="py-3 px-3"><CellValue value={row.aCloudGuru} /></td>
                <td className="py-3 px-3"><CellValue value={row.youBrokeProd} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="glass rounded-2xl p-8 border border-white/10 text-center">
        <h3 className="text-2xl font-black text-white mb-3">The only DevOps-only platform with SRE Hub + incident sims</h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          KodeKloud is broad. Linux Foundation sells exams. YouBrokeProd does incidents only.
          AutomateAllOps combines hands-on labs, cert prep with published pass rates, and production SRE practice — in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={sections.getStarted} className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold">
            Start free
          </Link>
          <Link href={sections.outcomes} className="px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/30 transition-colors">
            See outcomes data
          </Link>
        </div>
      </div>

      <PageCta label="Get started free" href={sections.getStarted} secondaryLabel="Contact enterprise sales" secondaryHref={sections.contactSales} />
    </div>
  );
}
