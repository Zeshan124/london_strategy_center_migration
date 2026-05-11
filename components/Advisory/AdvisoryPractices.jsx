"use client";

import { useState } from "react";
import Image from "next/image";

const DEFAULT_HEADING = "Two complementary advisory practices";
const DEFAULT_SUBHEADING = "LSC's advisory work spans two complementary practice areas, each targeting a distinct but interconnected dimension of organisational performance.";
const DEFAULT_PRACTICES = [
  {
    id: 1,
    image: "/images/InnerPages/advisory/operational_and_advisory.jpg",
    title: "Operational and Strategic Advisory",
    description: {
      visible: "addresses how organisations align strategy with execution at system level. This practice works with C-suite leaders, boards, and government decision-makers to improve decision quality, execution coherence, and operating model effectiveness.",
      hover: "Interventions draw on LSC's proprietary three-tier Capability Transformation Architecture, from Organisational Intelligence & Diagnostics (Tier 1), through Agentic Leadership Transformation (Tier 2), to Cybernetic Organisation Design (Tier 3), ensuring that advisory recommendations are embedded in structural change, not left as static reports.",
    },
  },
  {
    id: 2,
    image: "/images/InnerPages/advisory/entrepreneurship_scaleup.jpg",
    title: "Entrepreneurship and Scale-Up Advisory",
    description: {
      visible: "supports governments, development institutions, and ecosystem builders in designing and delivering programmes that equip SMEs and growth-stage ventures for international expansion.",
      hover: "Grounded in LSC's experience delivering scale-up programmes across the UK and GCC, this practice combines strategic profiling, facilitated mentoring, market immersion, and B2B matchmaking to accelerate founder capability and commercial readiness.",
    },
  },
];

function renderDescription(description, expanded, toggle) {
  // Object with visible + hover
  if (description && typeof description === "object" && !Array.isArray(description) && description.visible !== undefined) {
    return (
      <>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {description.visible}
        </p>
        {description.hover && (
          <>
            {/* Desktop: show on hover */}
            <div className="hidden sm:block overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                {description.hover}
              </p>
            </div>

            {/* Mobile: show/hide with Read more button */}
            <div className="sm:hidden">
              {expanded && (
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  {description.hover}
                </p>
              )}
              <button
                onClick={toggle}
                className="mt-3 text-xs font-semibold text-[#0E2253] uppercase tracking-widest hover:opacity-75 transition-opacity"
              >
                {expanded ? "Show less ↑" : "Read more ↓"}
              </button>
            </div>
          </>
        )}
      </>
    );
  }
  // Array of strings
  if (Array.isArray(description)) {
    return description.map((p, i) => (
      <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 last:mb-0">{p}</p>
    ));
  }
  // Plain string
  return <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{description}</p>;
}

export default function AdvisoryPractices({ heading, subheading, practices }) {
  const resolvedHeading = heading !== undefined ? heading : DEFAULT_HEADING;
  const resolvedSubheading = subheading !== undefined ? subheading : DEFAULT_SUBHEADING;
  const resolvedPractices = practices !== undefined ? practices : DEFAULT_PRACTICES;
  const [expandedIds, setExpandedIds] = useState({});

  const toggle = (id) => setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));

  if (!resolvedPractices) return null;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        {(resolvedHeading || resolvedSubheading) && (
          <div className="mb-10 sm:mb-12 md:mb-16">
            {resolvedHeading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-4 sm:mb-6">
                {resolvedHeading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
            )}
            {resolvedSubheading && (
              <p className="text-sm sm:text-base text-slate-700 max-w-5xl">
                {resolvedSubheading}
              </p>
            )}
          </div>
        )}

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {resolvedPractices.map((practice) => (
            <div
              key={practice.id}
              className="group bg-[#F5F3F0] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-slate-900 mb-4 sm:mb-6">
                  {practice.title}
                </h3>
                {renderDescription(practice.description, !!expandedIds[practice.id], () => toggle(practice.id))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
