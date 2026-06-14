"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CLINICAL_EVIDENCE } from "@/content/home";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function ClinicalEvidence() {
  return (
    <SectionWrapper id="evidence">
      <div className="text-center mb-16">
        <h2 className="text-headline font-bold text-brand-text mb-4">Clinical Evidence</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our outcomes are driven by rigorous, multi-center clinical trials — not anecdote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {CLINICAL_EVIDENCE.stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-8 rounded-2xl bg-brand-surface border border-teal-100"
          >
            <p className="text-6xl font-bold text-teal-600 mb-3">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-brand-text font-medium mb-2 leading-snug">{stat.label}</p>
            <p className="text-sm text-slate-500 italic">{stat.source}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-8">
          {CLINICAL_EVIDENCE.methodologyNote}
        </p>
      </div>
    </SectionWrapper>
  );
}
