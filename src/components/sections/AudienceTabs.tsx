"use client";

import { Tab } from "@headlessui/react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AUDIENCE_TABS } from "@/content/home";

export default function AudienceTabs() {
  return (
    <SectionWrapper background="surface" id="audiences">
      <div className="text-center mb-12">
        <h2 className="text-headline font-bold text-brand-text mb-4">Built for Every Stakeholder</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Whether you are living with dysphagia, treating it, or covering it — we have the information you need.
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="flex overflow-x-auto gap-2 p-1 rounded-xl bg-white shadow-sm border border-slate-200 mb-10 max-w-xl mx-auto">
          {AUDIENCE_TABS.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                cn(
                  "flex-1 whitespace-nowrap py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
                  selected
                    ? "bg-teal-600 text-white shadow"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {AUDIENCE_TABS.map((tab) => (
            <Tab.Panel key={tab.id} className="focus-visible:outline-none">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-brand-text mb-6">{tab.headline}</h3>
                <ul className="space-y-4 mb-8">
                  {tab.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button href={tab.ctaHref} variant="primary" size="md">
                  {tab.ctaLabel}
                </Button>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </SectionWrapper>
  );
}
