"use client";

import Image from "next/image";

export default function OrganizationalLeadership() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/modeling.svg",
      title: "Modeling Executive Logic",
      description:
        "Capture priorities, risk tolerance, decision sequencing, and escalation expectations from leadership.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/neurology.svg",
      title: "Create Intelligence System",
      description:
        "Build a leadership-anchored system that continuously tests alignment to strategic intent.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/compress.svg",
      title: "Scale Across Enterprise",
      description:
        "Deploy as sensing infrastructure providing real-time visibility into alignment and execution.",
    },
    {
      id: 4,
      icon: "/images/InnerPages/digitaltwin/detector_status.svg",
      title: "Strengthen Governance",
      description:
        "Enable boards and executive committees to reduce strategic drift and embed cybernetic foundations.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
            Organisational Leadership Digital Twin
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-4">
            Scaling Executive Logic Across the Enterprise
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-4xl">
            The Organisational Leadership Digital Twin scales executive logic
            across the enterprise. Built from structured modelling of executive
            priorities, risk tolerance, decision sequencing, and escalation
            expectations, it creates a leadership-anchored intelligence system
            that continuously tests organisational alignment to strategic intent.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group border-2 border-slate-200 rounded-xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}