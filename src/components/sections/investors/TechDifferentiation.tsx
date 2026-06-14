import SectionWrapper from "@/components/ui/SectionWrapper";
import { TECH_DIFFERENTIATORS } from "@/content/investors";

export default function TechDifferentiation() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-headline font-bold text-brand-text mb-4">Technology Differentiation</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The only implantable solution that targets the neuromotor root cause of swallowing dysfunction.
        </p>
      </div>
      <div className="max-w-3xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="text-left py-4 px-6 font-semibold">Feature</th>
              <th className="text-left py-4 px-6 font-semibold">Tenacious Diagnostics</th>
              <th className="text-left py-4 px-6 font-semibold">Standard of Care</th>
            </tr>
          </thead>
          <tbody>
            {TECH_DIFFERENTIATORS.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/40"}>
                <td className="py-4 px-6 font-medium text-brand-text">{row.feature}</td>
                <td className="py-4 px-6 text-teal-700 font-medium">{row.tenacious}</td>
                <td className="py-4 px-6 text-slate-500">{row.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
