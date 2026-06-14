import { INVESTOR_CTA } from "@/content/investors";

export default function InvestorCTA() {
  return (
    <section id="investor-contact" className="py-20 bg-brand-text">
      <div className="section-container text-center">
        <h2 className="text-headline font-bold text-white mb-4">{INVESTOR_CTA.headline}</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          {INVESTOR_CTA.subheadline}
        </p>
        <a
          href={`mailto:${INVESTOR_CTA.email}`}
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-text"
        >
          {INVESTOR_CTA.ctaLabel}
        </a>
        <p className="mt-6 text-slate-400 text-sm">{INVESTOR_CTA.email}</p>
      </div>
    </section>
  );
}
