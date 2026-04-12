"use client";

import Image from "next/image";

export default function OurProgrammes() {
  const programmes = [
    {
      id: 1,
      icon: "/images/home/women-leadership.svg",
      title: "Women's Leadership in the Digital Era",
      description: "We help individuals and organisations grow through advanced strategy, leadership, and innovation development."
    },
    {
      id: 2,
      icon: "/images/home/global-strategic.svg",
      title: "Global Strategic Trends",
      description: "We provide world-class programmes to unlock leadership and strategic potential at the executive level."
    },
    {
      id: 3,
      icon: "/images/home/innovation-design.svg",
      title: "IDeA X Innovation Design",
      description: "We use contemporary, immersive executive education to improve thinking and organisational performance."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-3 sm:mb-4">
            Our Programmes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Specialized expertise across diverse sectors and industries
          </p>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programmes.map((programme) => (
            <div
              key={programme.id}
              className="group border-2 border-slate-200 rounded-xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={programme.icon}
                    alt={programme.title}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-slate-900 mb-4 leading-tight">
                {programme.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {programme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}