"use client";

import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    icon: "/images/InnerPages/Industries/aviation.svg",
    title: "Aviation",
    description:
      "Aviation technical operations run on documentation. Airworthiness Directives, Aircraft Maintenance Manuals, Service Bulletins, fault isolation manuals, and engineering orders constitute a library that grows continuously and must be applied precisely.",
    href: "/case-studies/aviation",
  },
  {
    id: 2,
    icon: "/images/InnerPages/Industries/entrepreneurship.svg",
    title: "Entrepreneurship",
    description:
      "Small and medium enterprises operate at a structural disadvantage. Large organisations retain standing access to strategic counsel — advisers who understand the business, the market, and the decision at hand. Founders rarely have that. They are surrounded by generalists, constrained...",
    href: "/case-studies/entrepreneurship",
  },
  {
    id: 3,
    icon: "/images/InnerPages/Industries/healthcare.svg",
    title: "Healthcare",
    description:
      "Nibras connects patients with specialists across 200 medical specialities — one of the most complex routing challenges in modern healthcare. The organisation's core promise is that patients reach the right expert, at the right time.",
    href: "/case-studies/healthcare",
  },
  {
    id: 4,
    icon: "/images/InnerPages/Industries/marketing_automation.svg",
    title: "Marketing Automation",
    description:
      "A B2B enterprise operating across multiple markets was generating significant marketing activity — and very little pipeline clarity. The organisation ran campaigns across email, paid media, LinkedIn, and its website.",
    href: "/case-studies/marketing-automation",
  },
  {
    id: 5,
    icon: "/images/InnerPages/Industries/real_estate.svg",
    title: "Real Estate",
    description:
      "Mayfair Dunes is a luxury residential and investment property operator with active sales teams across London, Dubai, and Karachi. The business manages high-value leads from internationally mobile buyers — across email, WhatsApp, and a dedicated call centre.",
    href: "/case-studies/real-estate",
  },
  {
    id: 6,
    icon: "/images/InnerPages/Industries/sustainability.svg",
    title: "Sustainability",
    description:
      "Scope 3 emissions — the indirect emissions that run across an organisation's full value chain — represent the largest and least visible portion of most enterprises' carbon footprint. Regulatory pressure is no longer theoretical: CSRD, SEC climate disclosure rules, and procurement...",
    href: "/case-studies/sustainability",
  },
];

export default function CaseStudiesList() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal text-slate-900 mb-4 sm:mb-5 leading-tight">
            Transforming Organisations Through Intelligent AI Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            London Strategy Centre helps organisations move beyond automation by designing AI-powered operating systems that improve decision-making, execution, and performance. From healthcare and aviation to real estate, sustainability, and enterprise growth, our case studies demonstrate how agentic intelligence creates measurable impact. Explore how organisations are reducing complexity, accelerating outcomes, and building lasting competitive advantage.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-2" />

        {/* Case Studies List */}
        <div>
          {caseStudies.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                className="group flex items-center gap-6 sm:gap-10 py-8 sm:py-10 hover:bg-slate-50 transition-colors duration-200 px-0"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 sm:w-20 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={72}
                    height={72}
                    className="object-contain w-14 h-14 sm:w-[72px] sm:h-[72px] opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>

                {/* Title */}
                <div className="w-32 sm:w-44 flex-shrink-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-slate-900 leading-snug group-hover:text-[#0E2253] transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="flex-1 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 hidden sm:block">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-slate-300 rounded-md group-hover:border-[#0E2253] group-hover:bg-[#0E2253] transition-all duration-200">
                    <svg
                      className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Row Divider */}
              <div className="w-full h-px bg-slate-200" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}