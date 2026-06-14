import Button from "@/components/ui/Button";
import { INVESTOR_HERO } from "@/content/investors";

export default function InvestorHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-text to-slate-800">
      <div className="section-container text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/50 border border-teal-700/50 text-teal-300 text-sm font-medium mb-6">
          Series B — 2026
        </div>
        <h1 className="text-display font-bold text-white mb-6 max-w-3xl mx-auto text-balance">
          {INVESTOR_HERO.headline}
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          {INVESTOR_HERO.subheadline}
        </p>
        <Button href={INVESTOR_HERO.ctaHref} variant="primary" size="lg">
          {INVESTOR_HERO.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
