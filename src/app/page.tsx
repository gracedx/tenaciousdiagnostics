import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import HowItWorks from "@/components/sections/HowItWorks";
import AudienceTabs from "@/components/sections/AudienceTabs";
import ClinicalEvidence from "@/components/sections/ClinicalEvidence";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <AudienceTabs />
      <ClinicalEvidence />
      <ContactCTA />
    </>
  );
}
