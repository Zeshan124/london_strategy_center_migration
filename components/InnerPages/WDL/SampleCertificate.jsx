"use client";

import Image from "next/image";

export default function SampleCertificate() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
              Sample Certificate
            </p>

            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-normal  leading-tight mb-6">
              Your Credential of Impact
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Recognition of success in the digital landscape.
            </p>
          </div>

          {/* Right — Certificate Image */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[700px]">
            <Image
              src="/images/InnerPages/WDL/certificate.jpg"
              alt="Sample Certificate"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
