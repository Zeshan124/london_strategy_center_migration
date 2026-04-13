"use client";

import Image from "next/image";

export default function GalaDinner() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-10">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-normal text-slate-900 leading-tight mb-12">
          Enjoy Curated Gala Dinner at Dubai's Top
          <br className="hidden sm:block" /> Women-owned Restaurant
        </h2>

        {/* Images Grid - 3 Column Layout with Center Offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:py-16 md:py-20 gap-6 items-end">
          {/* Left Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/InnerPages/WDL/restaurant-1.jpg"
              alt="Rooftop dining with Dubai skyline view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Center Image - Translated Up */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:-translate-y-12">
            <Image
              src="/images/InnerPages/WDL/image-59.jpg"
              alt="Elegant restaurant interior with traditional decor"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/InnerPages/WDL/image-60.jpg"
              alt="Outdoor terrace dining with city views"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-normal text-slate-900 leading-tight py-16 md:py-20">
          Experience the Elegance and Energy of{" "}
          <br className="hidden sm:block" /> Dubai’s Most Inspiring Settings
        </h2>

        {/* Images Grid - 3 Column Layout with Center Offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:py-16 md:py-20 gap-6 items-end">
          {/* Left Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/InnerPages/WDL/image-64.jpg"
              alt="Rooftop dining with Dubai skyline view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Center Image - Translated Up */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:-translate-y-12">
            <Image
              src="/images/InnerPages/WDL/image-65.jpg"
              alt="Elegant restaurant interior with traditional decor"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/InnerPages/WDL/image-66.jpg"
              alt="Outdoor terrace dining with city views"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
