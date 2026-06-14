import { Activity, Stethoscope, Zap, type LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Activity,
  Stethoscope,
  Zap,
};

interface StepCardProps {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ step, icon, title, description }: StepCardProps) {
  const Icon = iconMap[icon] ?? Activity;

  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-teal-600 text-teal-600 text-xs font-bold flex items-center justify-center">
          {step}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-brand-text mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
