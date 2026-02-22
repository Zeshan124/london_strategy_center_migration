"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

export default function FeaturedCampaignsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const campaigns = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop",
      badge: "LOREM IPSUM",
      title: "It Is Long Established Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  const cardsPerView = 4;
  const maxSlide = Math.max(0, campaigns.length - cardsPerView);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white px-6 lg:px-8 py-2">
      <div className="mx-auto px-6 sm:px-8 lg:px-8 xl:px-24">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
          Featured Campaigns and Collections
        </h2>

        {/* Carousel Container */}
        <div className="relative mb-6">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1} // ← Keep this as 1
            speed={500}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1, // ← Change from 2 to 1
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1, // ← Change from 4 to 1
                spaceBetween: 20,
              },
            }}
          >
            {campaigns.map((campaign) => (
              <SwiperSlide key={campaign.id}>
                <div className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={toggleAutoplay}
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
      </div>
    </div>
  );
}
