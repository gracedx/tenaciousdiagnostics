import type { TeamMember, Milestone } from "@/types";

export const INVESTOR_HERO = {
  headline: "Investing in the Future of Swallowing Health",
  subheadline:
    "Tenacious Diagnostics is pioneering the first implantable device for dysphagia — a $12B+ unmet need with no approved interventional therapy.",
  ctaLabel: "Request Investor Deck",
  ctaHref: "#investor-contact",
};

export const MARKET = {
  headline: "A Massive, Untapped Market",
  stats: [
    { value: "15M+", label: "Americans affected by chronic dysphagia" },
    { value: "$12B+", label: "Total addressable market (US)" },
    { value: "3×", label: "Higher hospitalization rate vs. general population" },
    { value: "0", label: "FDA-approved implantable therapies today" },
  ],
  description:
    "Dysphagia affects 1 in 25 adults and is the leading complication of stroke, ALS, Parkinson's disease, and head & neck cancer. Current management (dietary modification, feeding tubes) does not treat the underlying neuromotor dysfunction. We do.",
};

export const TECH_DIFFERENTIATORS = [
  { feature: "Mechanism", tenacious: "Targeted pharyngeal neurostimulation", standard: "Diet modification / tube feeding" },
  { feature: "Disease modification", tenacious: "Yes — restores motor pathway", standard: "No — symptom management only" },
  { feature: "Implantable", tenacious: "Yes", standard: "No" },
  { feature: "FDA designation", tenacious: "Breakthrough Device", standard: "N/A" },
  { feature: "Patient QoL", tenacious: "TBU% improvement (DOSS)", standard: "Minimal / declining" },
];

export const MILESTONES: Milestone[] = [
  { phase: "Phase I", label: "Safety established, n=TBU", status: "upcoming" },
  { phase: "Phase II", label: "TBU% efficacy, n=TBU — Complete", status: "upcoming" },
  { phase: "Phase III", label: "Pivotal trial underway, n=TBU", status: "upcoming" },
  { phase: "PMA Filing", label: "Projected 2035", status: "upcoming" },
  { phase: "Approval", label: "Projected 2037", status: "upcoming" },
];

export const FINANCIALS = {
  headline: "Financial Overview",
  note: "Detailed financials available under NDA. Request the investor deck to learn more.",
  cards: [
    { label: "Total Raised to Date", value: "Confidential" },
    { label: "Current Runway", value: "Confidential" },
    { label: "Next Financing Round", value: "Series B — 2026" },
    { label: "Use of Proceeds", value: "Phase III completion + commercial readiness" },
  ],
};

export const TEAM: TeamMember[] = [
  {
    name: "Priya Sivaraja, MD, MPH, FRCSC",
    title: "Co-Founder & CEO",
    bio: "ENT Surgeon (EDIT FURTHER)",
  },
  {
    name: "Nick Pan, PhD, MBA, MPH",
    title: "Co-Founder & COO",
    bio: "AI Product (EDIT FURTHER)",
  },
  {
    name: "Grace Xu",
    title: "Chief of Staff",
    bio: "Life Sciences & Healthcare consultant",
  },
];

export const INVESTOR_CTA = {
  headline: "Ready to Learn More?",
  subheadline: "Request our investor deck or reach out to our business development team directly.",
  ctaLabel: "Request Investor Deck",
  email: "investors@tenaciousdiagnostics.com",
};
