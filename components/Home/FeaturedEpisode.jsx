'use client';

import { useState } from 'react';
import { X, Play } from 'lucide-react';

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
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-[#0E2253] mb-4 uppercase">
            Featured Episode
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            AI-First Leadership: Transforming Organisations in 2026
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
            Join our thought leadership as they discuss leadership and resilience in the AI world and how Agentic AI is optimising the path of success but with limitations.
          </p>

          {/* Video Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-[#0E2253] hover:shadow-md transition-all duration-300 text-left"
              >
                {/* Play circle */}
                <div className="w-9 h-9 rounded-full bg-[#0E2253] group-hover:bg-[#1a3570] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">
                    Episode {index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-[#0E2253] transition-colors duration-300 leading-snug">
                    {video.label}
                  </span>
                </div>
              </button>
            ))}
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

      {/* Video Modal — Reel / Portrait view */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close button — outside the card, top-right */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Portrait container — 9:16 ratio, max height 90vh */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: '9/16', height: 'min(90vh, 640px)', width: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Now Playing label */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-3 bg-linear-to-b from-black/60 to-transparent">
              <div className="w-6 h-6 rounded-full bg-[#0E2253] flex items-center justify-center shrink-0">
                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
              </div>
              <div>
                <p className="text-[9px] text-white/50 uppercase tracking-widest leading-none">Now Playing</p>
                <p className="text-xs font-medium text-white leading-snug">{activeVideo.label}</p>
              </div>
            </div>

            {/* iframe fills the portrait box */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
              title={activeVideo.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
