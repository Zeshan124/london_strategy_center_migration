"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const assessments = [
  {
    badge: "AWARE LEVEL 1",
    description: "Self-assessment via a short online questionnaire. Light-touch independent verification of declarations. Scope: Five core technical controls (Cyber Essentials-aligned):",
    items: [
      "Firewalls & internet gateways",
      "Secure configuration",
      "User access control",
      "Malware protection",
      "Patch management",
    ],
  },
  {
    badge: "BASIC LEVEL 2",
    description: "Includes all Level 1 aspects. Independent technical verification by a qualified assessor, including:",
    items: [
      "External/internal vulnerability scanning",
      "Checks for unpatched/misconfigured systems",
      "Malware/AV effectiveness checks",
      "User device build reviews (laptops, desktops, mobiles)",
      "Tests confirming boundary and access control measures",
    ],
  },
  {
    badge: "FOUNDATION LEVEL 3",
    description: "Includes all Level 1 & 2 assessment activities.",
    items: [
      "Deeper sampling and evidence review (policies, runbooks, intrusion prevention configs, backup/restore records).",
      "Effectiveness validation (tabletop exercises, restore tests, incident response walkthroughs).",
      "Supplier oversight checks (contracts, SLAs, assurance artefacts).",
    ],
  },
  {
    badge: "HOLISTIC LEVEL 4",
    description: "Includes all Level 1 aspects. Independent technical verification by a qualified assessor, including:",
    items: [
      "Threat-led testing (e.g., red/purple teaming, breach & attack simulation) mapped to crown-jewel assets.",
      "Architecture & design assurance (network segmentation, zero-trust patterns, high-availability and failover).",
      "Operational resilience validation (RTO/RPO evidence, crisis exercises with executives).",
      "Continuous monitoring and SOC use-cases with measurable detection/response SLAs.",
      "Metrics & governance reviewed at board level; transparent reporting to regulators where required.",
    ],
  },
];

export default function CertificationLevel() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const certifications = [
    {
      number: "1",
      title: "Aware Level",
      desc: "Self-assessment for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/1.svg",
    },
    
    {
      number: "2",
      title: "Basic Level",
      desc: "Independent assessment for moderate-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/2.svg",
    },
    {
      number: "3",
      title: "Foundation Level",
      desc: "Additional controls for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/3.svg",
    },
    {
      number: "4",
      title: "Holistic Level",
      desc: "Highest standard for critical infrastructure.",
      img: "/images/InnerPages/cyberexcellence/4.svg",
    },
  ];

  return (
    <>
    <section id="certification" className="py-12 sm:py-16 md:py-5 bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Regional Solution Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
            A Regional Solution for a Regional Challenge
          </h2>
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            As the Middle East continues to rely more and more on digital
            platforms, tough cybersecurity measures are not only a business
            necessity but also a regulatory requirement. The region faces
            escalating cyber risks that impact organisations across both the
            public and private sectors. Cyber Excellence was established to
            address these local challenges, aligning its certification model
            with regional frameworks such as the Saudi National Cybersecurity
            Authority (NCA). Essential Cybersecurity Controls (ECC), the UAE
            Information Assurance Standards (IAS), and the Gulf Cooperation
            Council (GCC) Cybersecurity Strategy. By harmonising with these and
            other national mandates, Cyber Excellence ensures that certification
            is regionally relevant and internationally credible.
          </p>
        </div>

        {/* Certification Levels Header */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Certification Levels
          </h2>
          {/* <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            With "Cyber Excellence, organisations in all sectors can scale
            securely, governments can ensure robust supply chains, and the
            Region can move towards unified cybersecurity standards aligned with
            digital transformation."
          </p> */}
        </div>

        {/* Certification Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {certifications.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedLevel(index)}
              className="group relative text-left transition-all duration-300 cursor-pointer focus:outline-none"
            >
              {/* Card Content */}
              <div className="flex flex-col items-center sm:items-start">
                {/* Logo Image - Responsive sizing */}
                <div className="mb-4 sm:mb-5 md:mb-6 w-full flex justify-center sm:justify-start">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      width={192}
                      height={192}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Title - Responsive text */}
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3 text-center sm:text-left group-hover:text-[#0E2253] transition-colors duration-200">
                  {cert.title}
                </h3>

                {/* Description - Responsive text */}
                <p className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                  {cert.desc}
                </p>

                {/* Learn More hint — always visible */}
                <span className="mt-3 text-xs text-[#0E2253] font-semibold uppercase tracking-widest">
                  Learn More ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Assessment Modal */}
    {selectedLevel !== null && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={() => setSelectedLevel(null)}
      >
        <div
          className="relative bg-[#F1EEEA] rounded-2xl shadow-2xl w-full max-w-xl p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedLevel(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[#0E2253] text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wide">
              {assessments[selectedLevel].badge}
            </span>
          </div>

          {/* HOW IT'S ASSESSED */}
          <h3 className="text-[#1e3a5f] text-xs uppercase tracking-widest mb-3">
            HOW IT'S ASSESSED
          </h3>

          <p className="text-slate-900 text-sm leading-relaxed mb-5">
            {assessments[selectedLevel].description}
          </p>

          <ul className="space-y-3">
            {assessments[selectedLevel].items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-900 text-sm leading-relaxed">
                <span className="shrink-0 w-1.5 h-1.5 bg-[#0E2253] rounded-full mt-1.5"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    </>
  );
}
