'use client';

import Image from 'next/image';

export default function MissionVisionSection() {
  const features = [
    {
      id: 1,
      icon: "/images/icons/developing_people.png",
      title: "Developing People",
      description:
        "We help individuals and organisations grow through advanced strategy, leadership, and innovation development.",
    },
    {
      id: 2,
      icon: "/images/icons/action_key.png",
      title: "Next Gen Executive",
      description:
        "We provide world-class programmes to unlock leadership and strategic potential at the executive level.",
    },
    {
      id: 3,
      icon: "/images/icons/approach.png",
      title: "Our Approach",
      description:
        "We use contemporary, immersive executive education to improve thinking and organisational performance.",
    },
    {
      id: 4,
      icon: "/images/icons/uniqueness.png",
      title: "Our Uniqueness",
      description:
        "We blend entrepreneurship, strategy courses, and technology-enabled learning to create tailored solutions.",
    },
    {
      id: 5,
      icon: "/images/icons/av_timer.png",
      title: "Customised Solution",
      description:
        "We prioritise your organisation's goals to design bespoke leadership and strategy development services.",
    },
    {
      id: 6,
      icon: "/images/icons/business_center.png",
      title: "Work With Us",
      description:
        "We seek motivated, inquisitive individuals passionate about making a meaningful impact with excellence.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-3 sm:mb-4">
            Mission / Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            Our mission is to empower individuals and organisations through
            strategic thinking, leadership excellence, and innovation that
            drives sustainable growth, while our vision is to become a globally
            recognised centre of excellence that develops future-ready leaders
            who create meaningful and lasting impact.
          </p>
        </div>

        {/* Features Grid - Card Style */}
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
      </div>
    </section>
  );
}