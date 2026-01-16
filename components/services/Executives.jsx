'use client';

import { Play, Download } from 'lucide-react';

export default function Executives() {
  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">
        {/* Left Content */}
        <div className=" bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            Who Should Attend?
          </h2>

          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-[#0E2253] mb-4 uppercase">
            EXECUTIVES WHO:
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            Are responsible for defining and implementing the strategic direction of an organisation

Are impacted by digital disruption

Want to gain competitive advantage and transform their organisation
          </p>

          {/* Meta Info */}
          {/* <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
            <span className="font-medium">Sarah Mitchell, CEO & Strategic Leadership Expert</span>
            <span className="text-gray-400">●</span>
            <span>45 min</span>
            <span className="text-gray-400">●</span>
            <span>Dec 15, 2025</span>
          </div> */}

          {/* Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[white] border-2 border-[#0E2253] text-gray-900 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
              PLAY NOW
              <img src="/images/icons/play-icon.svg" alt="Play Icon" className="w-4 h-4" />
            </button>
            
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-all duration-300">
              DOWNLOAD
              <img src="/images/icons/download-icon-btn.svg" alt="Download Icon" className="w-4 h-4" />
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/services/executives-banner.jpg"
            alt="Modern architecture with colorful geometric patterns"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}