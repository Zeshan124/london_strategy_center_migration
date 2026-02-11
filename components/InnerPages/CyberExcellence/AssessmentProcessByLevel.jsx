"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const AssessmentProcessByLevel = () => {
  const levels = [
    {
      title: "ENTRY LEVEL 1",
      color: "from-[#1a3a6b] to-[#132D5F]",
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
      color: "from-[#1a3a6b] to-[#132D5F]",
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
      color: "from-[#1a3a6b] to-[#132D5F]",
      items: [
        "Deeper sampling and evidence review (policies, runbooks, intrusion prevention configs, backup/restore records).",
        "Effectiveness validation (tabletop exercises, restore tests, incident response walkthroughs).",
        "Supplier oversight checks (contracts, SLAs, assurance artefacts).",
      ],
      description: "Includes all Level 1 & 2 assessment activities.",
    },
    {
      title: "ASSURED LEVEL 4",
      color: "from-[#1a3a6b] to-[#132D5F]",
      items: [
        "Threat-led testing (e.g., red/purple teaming, breach & attack simulation) mapped to crown-jewel assets.",
        "Architecture & design assurance (network segmentation, zero-trust patterns, high-availability and failover).",
        "Operational resilience validation (RTO/RPO evidence, crisis exercises with executives).",
        "Continuous monitoring and SOC use-cases with measurable detection/response SLAs.",
      ],
      description: "Includes all Level 1–3 activities.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 px-4 py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#132D5F] leading-tight tracking-tight">
            ASSESSMENT PROCESS BY LEVEL
          </h1>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Arrow Header */}
                <div className="relative mb-0">
                  <div
                    className={`bg-gradient-to-r ${level.color} pl-6 pr-12 py-4 relative`}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                    }}
                  >
                    <h2 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide">
                      {level.title}
                    </h2>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#5B7AAE] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col">
                  {/* Section Title */}
                  <h3 className="text-white font-bold text-xl mb-4 pb-3 border-b-2 border-white/30">
                    HOW IT'S ASSESSED
                  </h3>

                  {/* Description */}
                  <p className="text-white/95 text-sm leading-relaxed mb-6">
                    {level.description}
                  </p>

                  {/* Items List */}
                  <ul className="space-y-3 flex-1">
                    {level.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-white/95 text-sm leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#132D5F]/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-slate-200">
            <p className="text-slate-600 text-sm">
              Each level builds upon the previous, ensuring comprehensive security assessment
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AssessmentProcessByLevel;