"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AnimateSection,
  StaggerGrid,
  StaggerItem,
} from "@/shared/components/ui/AnimateSection";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-md bg-surface-container-high">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between gap-6
          px-6 py-5 text-left
          font-body font-semibold text-body-md text-on-surface
          hover:text-primary transition-colors duration-150
        ">
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-on-surface-variant transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Answer panel — animated height */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 font-body text-body-md text-on-surface-variant leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: t("q0"),
      answer: t("a0"),
    },
    {
      question: t("q1"),
      answer: t("a1"),
    },
    {
      question: t("q3"),
      answer: t("a3"),
    },
    {
      question: t("q4"),
      answer: t("a4"),
    },
    {
      question: t("q5"),
      answer: t("a5"),
    },
  ];

  return (
    <section id="faq" className="py-section">
      <div className="section-container flex flex-col gap-12">
        {/* Header */}
        <AnimateSection className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-label text-primary uppercase tracking-[0.2em]">
            {t("overline")}
          </span>
          <h2 className="font-display text-h2 text-on-surface">
            {t("heading")}
          </h2>
        </AnimateSection>

        {/* Accordion */}
        <StaggerGrid className="flex flex-col gap-3 max-w-3xl mx-auto w-full">
          {items.map(({ question, answer }, i) => (
            <StaggerItem key={i}>
              <FAQItem
                question={question}
                answer={answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
