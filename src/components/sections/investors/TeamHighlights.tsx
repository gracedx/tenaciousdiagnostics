import SectionWrapper from "@/components/ui/SectionWrapper";
import { TEAM } from "@/content/investors";

export default function TeamHighlights() {
  return (
    <SectionWrapper background="surface">
      <div className="text-center mb-12">
        <h2 className="text-headline font-bold text-brand-text mb-4">Leadership Team</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Deep expertise across neuromodulation, medtech commercialization, and clinical dysphagia care.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-700 font-bold text-xl">
              {member.name.split(" ").slice(-1)[0][0]}
            </div>
            <p className="font-bold text-brand-text text-sm">{member.name}</p>
            <p className="text-teal-600 text-xs font-medium mt-1 mb-3">{member.title}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
