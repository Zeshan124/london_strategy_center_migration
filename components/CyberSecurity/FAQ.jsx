"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const DEFAULT_FAQS = [
  {
    question: "Can LSC support organisations at different stages of cyber maturity?",
    answer: "Yes, LSC provides tailored support for organisations at any stage of their cybersecurity journey, from initial assessment to advanced implementation.",
  },
  {
    question: "Does LSC provide ongoing support or only project-based engagements?",
    answer: "LSC offers both ongoing support and project-based engagements, depending on your organisation's needs and preferences.",
  },
  {
    question: "How do LSC's services differ from standard cyber security consultancies?",
    answer: "LSC connects technical security with organisational governance. The aim is not just to identify vulnerabilities or achieve certification — it is to build the decision-making capability and governance structures that sustain security performance over time.",
  },
  {
    question: "Which certifications and frameworks does LSC support?",
    answer: "LSC supports various certifications and frameworks including ISO 27001, NIST CSF, Cyber Essentials, IASME, and the Cyber Excellence framework aligned with NCICC-1 2005.",
  },
];

export default function FAQ({ faqs: faqsProp, intro }) {
  const faqs = faqsProp ?? DEFAULT_FAQS;
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-8">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          {intro && (
            <div className="mb-8 sm:mb-10 md:mb-12 sm:text-left sm:py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
                {intro.heading}
              </h2>
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
                {intro.paragraph}
              </p>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="w-full h-px bg-slate-300 mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-300">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 py-6 sm:py-8 text-left hover:bg-slate-50 transition-colors duration-200 group"
              >
                {/* Icon */}
                <div className="shrink-0 pt-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" strokeWidth={2} />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" strokeWidth={2} />
                  )}
                </div>

                {/* Question */}
                <span className="flex-1 text-base sm:text-lg md:text-xl text-slate-900 font-normal">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-10 sm:pl-12 pr-4 pb-6 sm:pb-8">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}