"use client";

import React from "react";
import Image from "next/image";

const DigitalTwinProcess = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F1EEEA] py-6 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Process Image */}
        <div className="hidden md:block mb-12 md:mb-16">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[300px]">
            <Image
              src="/images/InnerPages/digitaltwin/process.png"
              alt="Digital Twin Lifecycle Process"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="block md:hidden mb-12 md:mb-16">
          <div className="relative w-full h-[500px] sm:h-[550px] md:h-[450px] lg:h-[520px]">
            <Image
              src="/images/InnerPages/digitaltwin/mob-process.png"
              alt="Digital Twin Lifecycle Process"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom Description (UNCHANGED) */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            At enterprise scale, the Digital Twin becomes part of the
            organisation's sensing infrastructure. It provides boards and
            executive committees with real-time visibility into alignment,
            decision quality and execution coherence — strengthening governance,
            reducing strategic drift, and embedding the foundations of a
            cybernetic organisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinProcess;
