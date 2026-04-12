"use client";

export default function WhyActNow() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/cyberexcellence/verified.svg",
      title: "Proven Imapct",
      description:
        "We help individuals and organisations grow through advanced strategy, leadership, and innovation development.",
    },
    {
      id: 2,
       icon: "/images/InnerPages/cyberexcellence/flag-mountain.svg",
      title: "Commercial Advantage",
      description:
        "We provide world-class programmes to unlock leadership and strategic potential at the executive level.",
    },
    {
      id: 3,
     icon: "/images/InnerPages/cyberexcellence/strategy.svg",
      title: "Scalable Approach",
      description:
        "We use contemporary, immersive executive education to improve thinking and organisational performance.",
    },
    {
      id: 4,
  icon: "/images/InnerPages/cyberexcellence/alt_route.svg",
      title: "Cultural Change",
      description:
        "We blend entrepreneurship, strategy courses, and technology-enabled learning to create tailored solutions.",
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
    <section className="bg-white py-12 sm:py-16 md:py-16 lg:py-0 sm:mb-12">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Why Act Now
          </h2>
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
        <div
          className="mt-20 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-[#132D5F] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center gap-6">
              <div className="flex-1">
                <h3 className="text-center text-base sm:text-xl lg:text-3xl text-white lg:flex-shrink-0">
                  Cyber Excellence Level 1 is recommended as a minimum standard
                  of cybersecurity that every organisation - no matter its size
                  - should aim for.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
