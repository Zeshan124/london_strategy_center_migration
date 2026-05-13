"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function PodcastCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  // Sample podcast data - replace with your actual data
  const podcasts = [
    {
      id: 1,
      image: "/images/InnerPages/trl/1.jpeg",
      title: "Rethinking Human Potential in the AI Age",
      guest: "Dr. Vinod Metta",
      role: "Consultant Interventional Neurologist & Movement Disorders Specialist",
      hospital: "King's College Hospital London",
    },
    {
      id: 2,
    image: "/images/InnerPages/trl/2.jpg",
      title: "Future of Work and Leadership",
      guest: "John Smith",
      role: "CEO & Leadership Expert",
      hospital: "Global Ventures Inc",
    },
    {
      id: 3,
       image: "/images/InnerPages/trl/3.jpg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
    {
      id: 4,
       image: "/images/InnerPages/trl/4.jpg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
     {
      id: 5,
       image: "/images/InnerPages/trl/5.jpg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
    {
      id: 6,
       image: "/images/InnerPages/trl/6.jpeg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
    {
      id: 7,
       image: "/images/InnerPages/trl/7.jpeg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
    {
      id: 8,
       image: "/images/InnerPages/trl/8.jpeg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
     {
      id: 9,
       image: "/images/InnerPages/trl/9.jpeg",
      title: "Digital Transformation Strategy",
      guest: "Sarah Johnson",
      role: "Chief Digital Officer",
      hospital: "Tech Innovations Ltd",
    },
    // Add more podcasts as needed
  ];

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
    <section className="bg-white py-12 sm:py-16 md:py-4">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Podcast Carousel */}
        <div className="mb-8">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            modules={[Navigation, Autoplay]}
            spaceBetween={56}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 56,
              },
            }}
            className="h-full !overflow-visible"
          >
            {podcasts.map((podcast) => (
              <SwiperSlide key={podcast.id}>
                {/* Featured Podcast Banner */}
                <div className="relative w-full h-[100px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                  {/* Background Image/Gradient */}
                  <div className="absolute inset-0 ">
                    {/* Network Pattern Overlay */}
                

                    {/* AI Brain Graphics - Optional decorative elements */}
                    <div className="relative w-full h-full">
                      <Image
                        src={podcast.image}
                        alt={podcast.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center lg:justify-start gap-3">
          {/* Play/Pause Button */}
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

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slide Counter */}
          <div className="ml-2 text-sm font-medium text-gray-600">
            {String(currentSlide + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
