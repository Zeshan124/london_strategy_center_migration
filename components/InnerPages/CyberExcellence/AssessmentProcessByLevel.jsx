"use client";

import React from "react";

const AssessmentProcessByLevel = () => {
  const levels = [
    {
      title: "ENTRY LEVEL 1",
      badge: "ENTRY LEVEL 1",
      items: [
        "Firewalls & internet gateways",
        "Secure configuration",
        "User access control",
        "Malware protection",
        "Patch management",
      ],
      description:
        "Self-assessment via a short online questionnaire. Light-touch independent verification of declarations. Scope: Five core technical controls (Cyber Essentials-aligned):",
    },
    {
      title: "FOUNDATION LEVEL 2",
      badge: "FOUNDATION LEVEL 2",
      items: [
        "External/internal vulnerability scanning",
        "Checks for unpatched/misconfigured systems",
        "Malware/AV effectiveness checks",
        "User device build reviews (laptops, desktops, mobiles)",
        "Tests confirming boundary and access control measures",
      ],
      description:
        "Includes all Level 1 aspects. Independent technical verification by a qualified assessor, including:",
    },
    {
      title: "CERTIFIED LEVEL 3",
      badge: "CERTIFIED LEVEL 3",
      items: [
        "Deeper sampling and evidence review (policies, runbooks, intrusion prevention configs, backup/restore records).",
        "Effectiveness validation (tabletop exercises, restore tests, incident response walkthroughs).",
        "Supplier oversight checks (contracts, SLAs, assurance artefacts).",
      ],
      description: "Includes all Level 1 & 2 assessment activities.",
    },
    {
      title: "ASSURED LEVEL 4",
      badge: "ASSURED LEVEL 4",
      items: [
        "Threat-led testing (e.g., red/purple teaming, breach & attack simulation) mapped to crown-jewel assets.",
        "Architecture & design assurance (network segmentation, zero-trust patterns, high-availability and failover).",
        "Operational resilience validation (RTO/RPO evidence, crisis exercises with executives).",
        "Continuous monitoring and SOC use-cases with measurable detection /response SLAs.",
        "Metrics & governance reviewed at board level; transparent reporting to regulators where required.",
      ],
      description:
        "Includes all Level 1 aspects. Independent technical verification by a qualified assessor, including:",
    },
  ];

  return (
    <div className="w-full bg-[#F1EEEA] py-15">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Assessment process by levels
          </h2>
        </div>

        {/* Levels Grid - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {levels.map((level, index) => (
            <div key={index} className="flex flex-col">
              {/* Level Badge */}
              <div className="mb-6">
                <div className="inline-block bg-[#0E2253] text-white px-8 py-3 rounded-xl font-bold text-lg uppercase tracking-wide">
                  {level.badge}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1">
                {/* Section Title */}
                <h3 className="text-[#1e3a5f] text-sm uppercase tracking-wide mb-4">
                  HOW IT'S ASSESSED
                </h3>

                {/* Description */}
                <p className="text-slate-900 text-base leading-relaxed mb-6">
                  {level.description}
                </p>

                {/* Items List */}
                <ul className="space-y-3">
                  {level.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-slate-900 text-base leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentProcessByLevel;
