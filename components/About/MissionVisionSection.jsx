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

  const cardImages = [
  "/images/blog/two.jpg",
  "/images/blog/three.jpg",
  "/images/blog/four.jpg",
  "/images/blog/five.jpg",
  "/images/blog/six.jpg",
  "/images/blog/seven.jpg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
          <div
  key={feature.id}
  className="group relative rounded-xl overflow-hidden h-[280px] sm:h-[320px] cursor-pointer"
>
  {/* Background Image (use icon as bg) */}
  <div className="absolute inset-0">
   <Image
  src={cardImages[index % cardImages.length]}
  alt={feature.title}
  fill
  className="object-cover group-hover:scale-110 transition-all duration-700"
/>
  </div>

  {/* Default Content (Bottom Card) */}
  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg transition-all duration-500 group-hover:translate-y-[-10px]">
    <h3 className="text-base sm:text-lg font-normal text-slate-900">
      {feature.title}
    </h3>
  </div>

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-[#E8E3DC] opacity-0 invisible group-hover:opacity-95 group-hover:visible transition-all duration-300 flex flex-col justify-between p-6">
    
    {/* Top Content */}
   <div>
  {/* Icon (NEW) */}
  <div className="mb-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12">
      <Image
        src={feature.icon}
        alt={feature.title}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  </div>

  {/* Title */}
  <h3 className="text-lg sm:text-xl text-gray-900 mb-3">
    {feature.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-800 leading-relaxed">
    {feature.description}
  </p>
</div>

    {/* Bottom Button */}
    <div className="flex justify-end">
      <button className="px-4 py-2 bg-[#0E2253] text-white text-xs sm:text-sm rounded-lg">
        LEARN MORE ↗
      </button>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}