import { Lock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { FINANCIALS } from "@/content/investors";

export default function FinancialsOverview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-headline font-bold text-brand-text mb-4">{FINANCIALS.headline}</h2>
        <p className="text-slate-600 max-w-xl mx-auto">{FINANCIALS.note}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
        {FINANCIALS.cards.map((card) => (
          <div
            key={card.label}
            className="p-6 rounded-2xl bg-brand-surface border border-slate-200 flex flex-col gap-2"
          >
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{card.label}</p>
            {card.value === "Confidential" ? (
              <div className="flex items-center gap-2 text-slate-400">
                <Lock className="w-4 h-4" />
                <span className="font-medium text-sm">Available under NDA</span>
              </div>
            ) : (
              <p className="font-bold text-brand-text">{card.value}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button href="#investor-contact" variant="primary" size="lg">
          Request Investor Deck
        </Button>
      </div>
    </SectionWrapper>
  );
}
