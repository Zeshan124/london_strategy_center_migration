"use client";

export default function HowItWorks() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/multimodal_hand_eye.svg",
      title: "Book a Free Session",
      description:
        "Schedule a complimentary introductory session in just a few clicks.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/graph_4.svg",
      title: "Connect with the Digital Twin",
      description:
        "Engage directly with the AI Digital Twin in a secure, private environment.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/tactic.svg",
      title: "Engage in Strategic Dialogue",
      description:
        "Experience a focused, time-limited interaction designed to surface leadership insight and decision logic.",
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
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Simple, Intelligent, Effective
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
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
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-[#132D5F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-normal text-white mb-3 md:mb-2">
                  Book Your Free Digital Twin Session
                </h3>
                <p className="text-white text-sm sm:text-base lg:text-base leading-relaxed">
                  Experience firsthand how an AI Digital Twin can transform
                  executive thinking and strategic decision-making.
                </p>
              </div>

              {/* Buttons - Responsive stacking */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto md:flex-shrink-0 sm:pt-10">
  <button className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#0E2253] text-gray-900 rounded-xl text-sm text-center hover:bg-gray-900 hover:text-white transition-all duration-300">
    BOOK FREE SESSION
    <img
      src="/images/InnerPages/digitaltwin/arrow-up.svg"
      alt="Play Icon"
      className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
    />
  </button>
</div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 lg:gap-10 pt-4 mt-2">
              {/* Complimentary session */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/images/InnerPages/digitaltwin/contemporary.svg"
                  alt="Session"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
                />
                <span className="text-white text-xs sm:text-sm lg:text-base font-light">
                  Complimentary session
                </span>
              </div>

              {/* Dot Separator */}
              <span className="text-white opacity-50 text-base">•</span>

              {/* 5 minutes */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/images/InnerPages/digitaltwin/timer.svg"
                  alt="Duration"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
                />
                <span className="text-white text-xs sm:text-sm lg:text-base font-light">
                  5 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
