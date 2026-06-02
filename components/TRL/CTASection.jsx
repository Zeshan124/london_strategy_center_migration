"use client";

import Link from "next/link";

export default function CTASection() {
  return (
     <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">

        {/* Left Content */}
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            The gap between knowing and redesigning is where performance lives
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Executives do not lack information. They lack frameworks that connect what they know to how their organisations actually operate. Strategy documents accumulate. Capability reviews circulate. Yet the underlying system — how decisions are made, how execution is coordinated, how leaders interact with complexity — remains largely unexamined.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The Reframe Lab addresses that structural gap. It is not a content feed. It is a deliberate programme of intellectual inquiry into the forces that determine whether organisations adapt or stall — published by a team that works inside these systems every day.
          </p>
          <div>
            <Link
              href="/trl/podcast"
              className="inline-flex items-center px-6 py-3 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#1a3570] transition-all duration-300"
            >
              EXPLORE REFRAME LAB
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/trl/cta-section.png"
            alt="The Reframe Lab"
              className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
