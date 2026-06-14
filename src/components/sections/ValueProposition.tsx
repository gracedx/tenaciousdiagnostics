import { Award, TrendingUp, Shield, type LucideProps } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { VALUE_PROPS } from "@/content/home";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Award,
  TrendingUp,
  Shield,
};

export default function ValueProposition() {
  return (
    <SectionWrapper background="surface" id="solution">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {VALUE_PROPS.map((prop) => {
          const Icon = iconMap[prop.icon] ?? Award;
          return (
            <div key={prop.stat} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-teal-100">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-teal-600" />
              </div>
              <p className="text-3xl font-bold text-brand-text mb-1">{prop.stat}</p>
              <p className="font-semibold text-teal-700 mb-2 text-sm">{prop.label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{prop.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
