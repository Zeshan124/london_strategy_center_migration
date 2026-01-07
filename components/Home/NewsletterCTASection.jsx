"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewsletterCTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    // Add your subscription logic here
  };

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[680px]">
        {/* Left Side - Dark Blue Background with Content */}
        <div className="bg-gradient-to-br from-[#0a1d4a] to-[#1e3a6b] px-6 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 flex flex-col justify-center relative z-0">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight mb-6 text-white">
              Free Resources & Toolkits
            </h2>
            <p className="text-base lg:text-2xl sm:text-xl text-white/90 leading-relaxed max-w-xl mb-6">
              Download our comprehensive guide, frameworks, and toolkits to
              accelerate your organization's transformation journey.
            </p>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="relative min-h-[300px] lg:min-h-full z-0">
          <img
            src="/images/home/subscribe-bg.jpg"
            alt="Abstract geometric background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Newsletter Subscription Box - Overlapping Both Sections */}
      <div className="relative transform -translate-y-10 lg:-translate-y-15 -mt-20 lg:-mt-34 mx-6 sm:mx-8 lg:mx-16 xl:mx-20 z-30">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Label */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-900 lg:flex-shrink-0">
              Subscribe to our Newsletter
            </h3>

            {/* Email Input */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pr-36 sm:pr-40 px-5 sm:px-6 py-3 sm:py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1e3a6b] focus:ring-2 focus:ring-[#1e3a6b]/20 transition-all text-sm sm:text-base"
                />

                <button
                  onClick={handleSubmit}
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0a1d4a] text-white rounded-lg font-medium text-sm sm:text-base hover:bg-[#1e3a6b] transition-all duration-300 whitespace-nowrap"
                >
                  SUBSCRIBE
                  <Image
                    src="/images/icons/top-arrow.png"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
