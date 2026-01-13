'use client';

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
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Mission / Vision
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto sm:mx-0">
            Our mission is to empower individuals and organisations through
            strategic thinking, leadership excellence, and innovation that
            drives sustainable growth, while our vision is to become a globally
            recognised centre of excellence that develops future-ready leaders
            who create meaningful and lasting impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center sm:text-left"
            >
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
