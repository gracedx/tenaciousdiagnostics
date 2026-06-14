import SectionWrapper from "@/components/ui/SectionWrapper";
import StepCard from "@/components/ui/StepCard";
import { HOW_IT_WORKS_STEPS } from "@/content/home";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-headline font-bold text-brand-text mb-4">How It Works</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From diagnosis to meaningful recovery — a streamlined path designed around the patient.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-teal-200" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
