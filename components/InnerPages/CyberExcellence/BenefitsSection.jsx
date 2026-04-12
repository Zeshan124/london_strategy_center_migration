"use client";

import Image from "next/image";

export default function BenefitsSection() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/cyberexcellence/compliance.png",
      title: "Compliance",
      description:
        "We help individuals and organisations grow through advanced strategy, leadership, and innovation development.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/cyberexcellence/risk.png",
      title: "Risk Reduction",
      description:
        "We provide world-class programmes to unlock leadership and strategic potential at the executive level.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/cyberexcellence/trust.png",
      title: "Trust",
      description:
        "We use contemporary, immersive executive education to improve thinking and organisational performance.",
    },
    {
      id: 4,
      icon: "/images/InnerPages/cyberexcellence/resilience.png",
      title: "Resilience",
      description:
        "We blend entrepreneurship, strategy courses, and technology-enabled learning to create tailored solutions.",
    },
    {
      id: 5,
      icon: "/images/InnerPages/cyberexcellence/credibility.png",
      title: "Credibility",
      description:
        "We prioritise your organisation's goals to design bespoke leadership and strategy development services.",
    },
    {
      id: 6,
      icon: "/images/InnerPages/cyberexcellence/work-with-us.png",
      title: "Work With Us",
      description:
        "We seek motivated, inquisitive individuals passionate about making a meaningful impact with excellence.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-3 sm:mb-4">
            Benefits of Cyber Excellence
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-4xl">
            Our mission is to empower individuals and organisations through
            strategic thinking, leadership excellence, and innovation that
            drives sustainable growth.
          </p>
        </div>

        {/* Card Grid (Same as OurProgrammes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

        {/* CTA Section (unchanged) */}
        {/* <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-[#132D5F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              
              <div className="flex-1 text-center md:text-left w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-3">
                  Ready to get Certified?
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Join thousands of organisations improving their cybersecurity posture.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  GET CERTIFIED TODAY
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base rounded-xl border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  LEARN MORE ↗
                </button>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}