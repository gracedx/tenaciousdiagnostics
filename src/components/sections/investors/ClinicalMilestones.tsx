import { CheckCircle, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MILESTONES } from "@/content/investors";
import type { Milestone } from "@/types";

const statusConfig: Record<Milestone["status"], { icon: typeof CheckCircle; color: string; bg: string }> = {
  completed: { icon: CheckCircle, color: "text-teal-600", bg: "bg-teal-600" },
  active:    { icon: Circle,      color: "text-teal-500", bg: "bg-teal-400" },
  upcoming:  { icon: Clock,       color: "text-slate-400", bg: "bg-slate-300" },
};

export default function ClinicalMilestones() {
  return (
    <SectionWrapper background="surface">
      <div className="text-center mb-12">
        <h2 className="text-headline font-bold text-brand-text mb-4">Clinical Milestones</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A de-risked clinical program with FDA engagement at every stage.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        {MILESTONES.map((milestone, i) => {
          const { icon: Icon, color, bg } = statusConfig[milestone.status];
          const isLast = i === MILESTONES.length - 1;
          return (
            <div key={milestone.phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", bg)}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {!isLast && <div className="w-0.5 flex-1 bg-slate-200 my-1" />}
              </div>
              <div className={cn("pb-8", isLast && "pb-0")}>
                <p className="font-bold text-brand-text">{milestone.phase}</p>
                <p className={cn("text-sm mt-0.5", color === "text-slate-400" ? "text-slate-500" : "text-slate-600")}>
                  {milestone.label}
                </p>
                {milestone.status === "active" && (
                  <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    In Progress
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
