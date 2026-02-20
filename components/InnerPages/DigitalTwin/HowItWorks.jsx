"use client";

export default function HowItWorks() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/multimodal_hand_eye.png",
      title: "Modeling Executive Logic",
      description:
        "Capture priorities, risk tolerance, decision sequencing, and escalation expectations from leadership.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/graph_4.png",
      title: "Create Intelligence System",
      description:
        "Build a leadership-anchored system that continuously tests alignment to strategic intent.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/tactic.png",
      title: "Scale Across Enterprise",
      description:
        "Deploy as sensing infrastructure providing real-time visibility into alignment and execution.",
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
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-12">
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto md:flex-shrink-0">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">GET CERTIFIED TODAY</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10 pt-4 mt-4 border-t border-white/20">
              {/* Complimentary session */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/images/InnerPages/digitaltwin/hdf.png"
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
                  src="/images/InnerPages/digitaltwin/clock.png"
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
