import type { Metadata } from "next";
import InvestorHero from "@/components/sections/investors/InvestorHero";
import MarketOpportunity from "@/components/sections/investors/MarketOpportunity";
import TechDifferentiation from "@/components/sections/investors/TechDifferentiation";
import ClinicalMilestones from "@/components/sections/investors/ClinicalMilestones";
import FinancialsOverview from "@/components/sections/investors/FinancialsOverview";
import TeamHighlights from "@/components/sections/investors/TeamHighlights";
import InvestorCTA from "@/components/sections/investors/InvestorCTA";

export const metadata: Metadata = {
  title: "Investors — Tenacious Diagnostics",
  description:
    "Investor relations for Tenacious Diagnostics. Learn about our market opportunity, clinical program, and Series B financing.",
};

export default function InvestorsPage() {
  return (
    <>
      <InvestorHero />
      <MarketOpportunity />
      <TechDifferentiation />
      <ClinicalMilestones />
      <FinancialsOverview />
      <TeamHighlights />
      <InvestorCTA />
    </>
  );
}
