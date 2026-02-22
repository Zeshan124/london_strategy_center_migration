"use client";

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
    // {
    //   id: 5,
    //   icon: "/images/icons/av_timer.png",
    //   title: "Customised Solution",
    //   description:
    //     "We prioritise your organisation's goals to design bespoke leadership and strategy development services.",
    // },
    // {
    //   id: 6,
    //   icon: "/images/icons/business_center.png",
    //   title: "Work With Us",
    //   description:
    //     "We seek motivated, inquisitive individuals passionate about making a meaningful impact with excellence.",
    // },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center sm:text-left">
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
            Organisational Leadership Digital Twin
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Scaling Executive Logic Across the Enterprise
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mx-auto sm:mx-0">
            The Organisational Leadership Digital Twin scales executive logic
            across the enterprise. Built from structured modelling of executive
            priorities, risk tolerance, decision sequencing, and escalation
            expectations, it creates a leadership-anchored intelligence system
            that continuously tests organisational alignment to strategic
            intent.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center sm:text-left">
              {/* Icon */}
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
