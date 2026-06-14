export interface NavLink {
  label: string;
  href: string;
}

export interface ValueProp {
  icon: string;
  stat: string;
  label: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface AudienceTab {
  id: string;
  label: string;
  headline: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ClinicalStat {
  value: number;
  suffix: string;
  label: string;
  source: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export interface Milestone {
  phase: string;
  label: string;
  status: "completed" | "active" | "upcoming";
}
