"use client";

import Image from "next/image";

export default function AboutOrganizations() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-10">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About LSC */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/press-release/lsc.svg"
                alt="London Strategy Centre"
                width={220}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4 sm:mb-6">
              About LSC
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
              London Strategy Centre is an international leader in management
              education and research, with a mission to transform the practice
              of management around the world by creating and disseminating
              applied knowledge. The Centre has a strong focus on industry links
              and is committed to working with organisations to improve
              management practice and education.
            </p>
          </div>

          {/* About MILE */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/press-release/mile.svg"
                alt="MILE - Madinah Institute for Leadership & Entrepreneurship"
                width={220}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4 sm:mb-6">
              About MILE
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
              MILE is a leading provider of advanced end-to-end training
              services in Saudi Arabia, built on partnerships with
              internationally recognized educational and academic bodies. The
              company's mission is to improve management practice and education
              in the Kingdom, and to contribute to the development of a highly
              skilled and competitive workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
