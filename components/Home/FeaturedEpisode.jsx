'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const videos = [
  { id: 'OfseuaG7QVA', label: 'Pace of Change' },
  { id: 'oKmsrBywfwg', label: 'Agentic AI & Future of Leadership' },
];

export default function FeaturedEpisode() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">
        {/* Left Content */}
        <div className=" bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-[#0E2253] mb-4 uppercase">
            Featured Episode
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            AI-First Leadership: Transforming Organizations in 2024
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
           Join our thought leadership as they discuss leadership and resilience in the AI world and how Agentic AI is optimising the path of success but with limitations.
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
          <div className="flex flex-wrap gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[white] border-2 border-[#0E2253] text-gray-900 rounded-xl font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {video.label}
                <img src="/images/icons/play-icon.svg" alt="Play Icon" className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </button>
            ))}

            {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-all duration-300">
              DOWNLOAD
              <img src="/images/icons/download-icon-btn.svg" alt="Download Icon" className="w-4 h-4" />
            </button> */}
          </div>
        </div>

        {/* Right Video */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <video
            src="/images/home/Web_video_lsc.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}