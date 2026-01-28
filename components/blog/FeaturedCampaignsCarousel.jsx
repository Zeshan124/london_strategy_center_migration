"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function FeaturedCampaignsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const campaigns = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  ];

  const cardsPerView = 4;
  const maxSlide = Math.max(0, campaigns.length - cardsPerView);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, maxSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const getVisibleCampaigns = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentSlide + i) % campaigns.length;
      visible.push(campaigns[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-white px-6 lg:px-8 py-12">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
          Featured Campaigns and Collections
        </h2>

        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
            {getVisibleCampaigns().map((campaign, index) => (
              <div
                key={`${campaign.id}-${currentSlide}-${index}`}
                className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  animation: "fadeIn 0.5s ease-in-out"
                }}
              >
                {/* Image */}
                <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                      {campaign.badge}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-5 shadow-xl transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  {/* Title */}
                  <h3 className="text-lg font-normal text-gray-900 mb-2 leading-tight">
                    {campaign.title}
                  </h3>

                  {/* Description - appears on hover */}
                  <p className="text-sm text-gray-600 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                    {campaign.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={handlePrev}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1 ml-2">
            <span className="text-sm font-medium text-gray-900">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-gray-400">/</span>
            <span className="text-sm font-medium text-gray-400">
              {String(maxSlide + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}