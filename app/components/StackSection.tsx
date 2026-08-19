"use client";

import { useState } from "react";
import { stack, processSteps, faqItems } from "./data";

export default function StackSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>("React");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <section id="stack" className="bg-smoke px-[max(5vw,28px)] py-24 md:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.08em]">02 / Toolkit</p>
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="max-w-[570px] text-[clamp(30px,3.6vw,48px)] font-extrabold leading-tight tracking-[-.05em]">
          Modern web application stack.
        </h2>
        <p className="max-w-[290px] text-[14.5px] leading-relaxed text-soft">
          Practical technologies for responsive interfaces, dependable APIs, and data-backed products.
        </p>
      </div>

      <div className="border-t border-ink/15">
        {stack.map((item, index) => {
          const isActive = activeSkill === item;
          return (
            <button
              key={item}
              type="button"
              onMouseEnter={() => setActiveSkill(item)}
              onFocus={() => setActiveSkill(item)}
              onClick={() => setActiveSkill(item)}
              className={`grid w-full grid-cols-[68px_1fr_30px] items-center border-b border-ink/15 px-3.5 py-4 text-left transition duration-200 last:border-b-0 ${
                isActive ? "rounded-xl bg-ink text-paper" : "hover:rounded-xl hover:bg-white hover:pl-6"
              }`}
            >
              <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
              <strong className="text-[clamp(20px,2.8vw,36px)] font-extrabold tracking-[-.05em]">{item}</strong>
              <span className={`text-right text-xl ${isActive ? "text-lime" : ""}`}>+</span>
            </button>
          );
        })}
      </div>

      <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[22px] border border-ink/5 bg-white p-7 pb-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-soft">Approach · 0{index + 1}</span>
            <h3 className="mt-3.5 text-xl font-bold tracking-[-.04em]">{step.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-soft">{step.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-3 md:mt-20">
        {faqItems.map((item, index) => {
          const isOpen = openAccordion === index;
          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-2xl border border-ink/10 transition-colors duration-300 ${
                isOpen ? "bg-ink text-paper" : "bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenAccordion(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left text-[16.5px] font-bold tracking-[-.02em]"
              >
                <span>{item.question}</span>
                <span
                  className={`flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-lime text-lg text-ink transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6">
                  <p className="max-w-[620px] text-[15px] leading-relaxed text-[#c2c2c9]">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
