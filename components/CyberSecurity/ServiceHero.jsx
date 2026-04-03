"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceHero({ service }) {
  return (
    <div className="bg-white lg:pt-28 pt-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 lg:py-20">

        {/* Badge */}
         <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-xs sm:text-sm font-bold">
             CYBER SECURITY
            </span>
          </div>

      

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6">
          {service.title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
          {service.description}
        </p>
        
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

      </div>
    </div>
  );
}
