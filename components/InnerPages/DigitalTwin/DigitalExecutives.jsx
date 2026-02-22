"use client";

export default function DigitalExecutives() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/psychology.svg",
      title: "Cognitive Modelling",
      description:
        "Models how you frame problems, sequence decisions, and manage trade-offs under pressure through continuous learning.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/stacks.svg",
      title: "Structured Frameworks",
      description:
        "Interprets interactions through leadership and business growth frameworks to build your evolving cognitive profile.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/vital_signs.svg",
      title: "Live Context Learning",
      description:
        "Strengthens judgment and accelerates learning cycles within your actual work environment and challenges.",
    },
  ];

  return (
    <>
      {/* ================= DIGITAL EXECUTIVE SECTION ================= */}
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
              AI DIGITAL TWIN EXECUTIVE COACH
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-gray-900">
              An Always-On Thinking Partner for Senior Leaders
            </h2>

            <div className="bg-white rounded-xl px-5 py-4 mb-6 shadow-sm">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                An always-on thinking partner that strengthens judgement,
                accelerates learning cycles, and builds sustained executive
                capability in live work contexts.
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              The AI Digital Twin Executive Coach transforms how senior leaders
              develop their thinking over time.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Rather than offering generic advice, it models how an individual
              frames problems, sequences decisions, manages trade-offs, and
              responds under pressure.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Each interaction is captured, transcribed, and interpreted through
              structured leadership and business growth frameworks, creating a
              continuously evolving cognitive profile.
            </p>

            <p className="text-sm sm:text-base text-gray-700 italic">
              This is leadership intelligence engineered for scale.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/InnerPages/digitaltwin/ex-banner.jpg"
              alt="Modern architecture with colorful geometric patterns"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CYBER ASSESSMENT FRAMEWORK SECTION ================= */}
      <section className="bg-[#F1EEEA] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-24">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.id} className="text-center sm:text-left">
                <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
