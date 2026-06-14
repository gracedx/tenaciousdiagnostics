import Button from "@/components/ui/Button";
import { HERO } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-white pointer-events-none" />
      <div className="section-container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              FDA Breakthrough Device Designation
            </div>
            <h1 className="text-display font-bold text-brand-text mb-6 text-balance">
              {HERO.headline}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              {HERO.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={HERO.ctaPrimary.href} variant="primary" size="lg">
                {HERO.ctaPrimary.label}
              </Button>
              <Button href={HERO.ctaSecondary.href} variant="outline" size="lg">
                {HERO.ctaSecondary.label}
              </Button>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-20 h-20 rounded-full bg-teal-600/10 border-2 border-teal-400/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-600/20 border-2 border-teal-500/40 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-teal-600" />
                  </div>
                </div>
                <p className="text-teal-600/60 text-sm font-medium text-center">
                  Device visualization coming soon
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-teal-700">Phase III</p>
                <p className="text-xs text-slate-500">Pivotal Trial Active</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-brand-text">87% improvement</p>
                <p className="text-xs text-slate-500">Phase II results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
