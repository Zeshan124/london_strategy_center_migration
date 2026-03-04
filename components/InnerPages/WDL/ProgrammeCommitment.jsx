"use client";

import React from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function ProgrammeCommitment() {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-8">
            Programme Commitment
          </h1>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center justify-center w-10 h-10 bg-slate-900 rounded-lg">
              <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-base sm:text-lg font-bold text-red-600 uppercase tracking-wide">
              18th to 20th May, 2026
            </span>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full">
          {/* Map Container */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
            {/* World Map Image */}
            <Image
              src="/images/InnerPages/WDL/map.jpg"
              alt="World Map"
              fill
              className="object-contain"
              priority
            />

            {/* University Badge - Positioned Above Map */}
            <div className="absolute top-[15%] sm:top-[10%] right-[15%] sm:right-[20%]">
            
              
              {/* Connecting Line */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 sm:h-24 bg-slate-300"></div>
            </div>

            {/* Location Pin - Positioned on Dubai */}
            <div className="absolute top-[45%] sm:top-[50%] right-[25%] sm:right-[30%]">
              {/* Red Location Pin */}
              <svg 
                width="60" 
                height="80" 
                viewBox="0 0 24 36" 
                className="drop-shadow-xl"
              >
                <path
                  d="M12 0C7.03 0 3 4.03 3 9c0 7.5 9 18 9 18s9-10.5 9-18c0-4.97-4.03-9-9-9zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                  fill="#dc2626"
                  stroke="#fff"
                  strokeWidth="1"
                />
                {/* Inner white circle */}
                <circle cx="12" cy="9" r="3" fill="#fff" />
              </svg>

              {/* Teal UAE Highlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg width="80" height="100" viewBox="0 0 80 100">
                  <path
                    d="M20 30 Q 40 20, 60 30 L 65 55 Q 40 70, 20 55 Z"
                    fill="#06b6d4"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}