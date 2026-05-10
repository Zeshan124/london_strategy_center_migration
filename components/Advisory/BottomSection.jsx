"use client";

import { useState } from "react";
import { X } from "lucide-react";

const DEFAULT_TOP = {
  heading: "Built for complexity, measured by performance",
  paragraphs: [
    "LSC's advisory services are designed for organisations operating under genuine complexity — where decision stakes are high, execution environments are volatile, and the cost of misalignment is measured in strategic outcomes, not just efficiency metrics. This includes defence and security organisations, government ministries navigating multi-agency execution, and enterprises managing transformation at scale across geographies and functions.",

"The outcome metric is measurable organisational performance improvement: better decisions made faster, strategy translated into disciplined execution, and capability that compounds rather than decays between engagements.",
  ],
};

const DEFAULT_BANNER = {
  heading: "Book a call with the LSC team",
  subheading: "to discuss how the Capability Transformation Architecture applies to your organisation.",
  buttonText: "BOOK FREE SESSION",
};

export default function BottomSection({ top, banner }) {
  const resolvedTop = top ?? DEFAULT_TOP;
  const resolvedBanner = banner ?? DEFAULT_BANNER;

  const inputClass =
    "w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0E2253] transition-colors text-sm";

  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-10">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

          {/* Top heading + paragraphs */}
          {(resolvedTop.heading || resolvedTop.paragraphs?.length) && (
            <div className="mb-12 sm:mb-10">
              {resolvedTop.heading && (
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight text-gray-900 mb-6">
                  {resolvedTop.heading}
                </h2>
              )}
              {resolvedTop.paragraphs?.length > 0 && (
                <div className="space-y-4">
                  {resolvedTop.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
