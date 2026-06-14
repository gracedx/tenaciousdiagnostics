import type { NavLink, ValueProp, HowItWorksStep, AudienceTab, ClinicalStat } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Evidence", href: "#evidence" },
  { label: "Audiences", href: "#audiences" },
];

export const HERO = {
  headline: "Restoring the Simple Act of Swallowing",
  subheadline:
    "Tenacious Diagnostics has developed the world's first implantable neurostimulation device to treat dysphagia — giving patients their quality of life back.",
  ctaPrimary: { label: "Request Information", href: "#contact" },
  ctaSecondary: { label: "See How It Works", href: "#how-it-works" },
};

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "Award",
    stat: "First-of-Kind",
    label: "Implantable device for dysphagia",
    description:
      "No approved implantable therapy exists for swallowing disorders. We're changing that.",
  },
  {
    icon: "TrendingUp",
    stat: "XX%",
    label: "Improvement in swallowing function",
    description:
      "Patients in our Phase II trial achieved clinically meaningful gains in validated swallowing scores.",
  },
  {
    icon: "Shield",
    stat: "FDA",
    label: "Breakthrough Device Designation",
    description:
      "Recognized by the FDA as a breakthrough device, enabling expedited review and development support.",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    icon: "Stethoscope",
    title: "Diagnosis & Selection",
    description:
      "A treating clinician identifies patients with moderate-to-severe dysphagia using validated dysphagia severity scales and videofluoroscopic swallow studies.",
  },
  {
    step: 2,
    icon: "Zap",
    title: "Minimally Invasive Implant",
    description:
      "The device is placed in a TBU-minute outpatient procedure. A small neurostimulation lead targets the pharyngeal motor cortex to restore coordinated swallowing.",
  },
  {
    step: 3,
    icon: "Activity",
    title: "Recovery & Outcomes",
    description:
      "Most patients report meaningful improvement within TBU days. The device delivers ongoing therapy, adapting to patient needs over time.",
  },
];

export const AUDIENCE_TABS: AudienceTab[] = [
  {
    id: "patients",
    label: "Patients & Caregivers",
    headline: "Finally, a treatment designed for you",
    bullets: [
      "The only implantable therapy targeting the root cause of swallowing dysfunction",
      "Outpatient procedure with no significant downtime",
      "TBU% of trial participants saw meaningful improvement in swallowing scores",
      "Ongoing support from a dedicated patient navigator team",
    ],
    ctaLabel: "Learn About the Procedure",
    ctaHref: "#contact",
  },
  {
    id: "providers",
    label: "Healthcare Providers",
    headline: "A new standard of care for your dysphagia patients",
    bullets: [
      "FDA Breakthrough Device Designation — expedited pathway to approval",
      "Comprehensive clinical training and implant support",
      "Robust peer-reviewed data package available on request",
      "Reimbursement support team to assist with payer navigation",
    ],
    ctaLabel: "Request Clinical Data",
    ctaHref: "#contact",
  },
  {
    id: "payers",
    label: "Payers",
    headline: "Evidence-based value for your members",
    bullets: [
      "Addresses an unmet need in a high-cost population — dysphagic patients have TBD× higher hospitalization rates",
      "Published health-economic model demonstrates cost offsets within XX months",
      "Phase III pivotal trial underway with FDA-aligned endpoints",
      "Pre-submission engagement with major payers ongoing",
    ],
    ctaLabel: "Review Evidence Package",
    ctaHref: "#contact",
  },
];

export const CLINICAL_EVIDENCE: { stats: ClinicalStat[]; methodologyNote: string } = {
  stats: [
    {
      value: 0,
      suffix: "%",
      label: "of patients showed measurable improvement in swallowing function",
      source: "Phase II trial, n=TBU",
    },
    {
      value: 0,
      suffix: "mo",
      label: "median durability of treatment effect at follow-up",
      source: "Phase II trial",
    },
    {
      value: 0,
      suffix: "",
      label: "patients enrolled in completed Phase II trial",
      source: "Ongoing Phase III",
    },
  ],
  methodologyNote:
    "Results from a prospective, multi-center Phase II clinical trial. Primary endpoint: ≥2-point improvement on the Dysphagia Outcome and Severity Scale (DOSS) at TBU days.",
};

export const FOOTER = {
  disclaimer:
    "For investigational use only. Not approved by the FDA. This device is currently under clinical investigation.",
  contactEmail: "tenaciousdiagnostics@gmail.com",
  links: [
    { section: "Company", items: [{ label: "About", href: "#" }, { label: "Investors", href: "/investors" }, { label: "Careers", href: "#" }] },
    { section: "Audiences", items: [{ label: "Patients", href: "#audiences" }, { label: "Providers", href: "#audiences" }, { label: "Payers", href: "#audiences" }] },
    { section: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
  ],
};
