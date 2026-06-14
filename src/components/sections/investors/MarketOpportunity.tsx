import SectionWrapper from "@/components/ui/SectionWrapper";
import { MARKET } from "@/content/investors";

export default function MarketOpportunity() {
  return (
    <SectionWrapper background="surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-headline font-bold text-brand-text mb-6">{MARKET.headline}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{MARKET.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {MARKET.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white border border-teal-100 shadow-sm text-center"
            >
              <p className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-600 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
