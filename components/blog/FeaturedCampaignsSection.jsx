'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedCampaignsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const campaigns = [
    {
      id: 1,
      category: 'LEADERSHIP',
      date: '17TH JUNE, 2025',
      title: "Women's Leadership: What Exactly Are We Trying to Fix?",
      image: '/images/blog/six.jpg'
    },
    {
      id: 2,
      category: 'LEADERSHIP',
      date: '17TH JUNE, 2025',
      title: "Women's Leadership and Gender Diversity; not just 'nice to haves' but differentiators",
      image: '/images/blog/seven.jpg'
    },
    {
      id: 3,
      category: 'LEADERSHIP',
      date: '11TH JUNE, 2025',
      title: 'The Limelight Or The Shade',
      image: '/images/blog/eight.jpg'
    },
    {
      id: 4,
      category: 'GEOPOLITICAL',
      date: '5TH JUNE, 2025',
      title: 'Caught in the Crossfire: Can Climate Action Survive Rising Geopolitical Tensions?',
      image: '/images/blog/nine.jpg'
    },
    {
      id: 5,
      category: 'LEADERSHIP',
      date: '25TH MAY, 2025',
      title: 'The Latest Developments in His Leadership',
      image: '/images/blog/seven.jpg'
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, campaigns.length - itemsPerPage);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll for mobile (3 seconds per slide)
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= campaigns.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, campaigns.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleCampaigns = campaigns.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-[#0E2253] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Featured Campaigns and Collections
          </h2>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-8">
          {visibleCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {campaign.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl transform transition-all duration-500">
                {/* Date */}
                <p className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  {campaign.date}
                </p>

                {/* Title */}
                <h3 className="text-lg font-normal text-gray-900 leading-tight line-clamp-2">
                  {campaign.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative overflow-hidden mb-8">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  {/* Image */}
                  <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                        {campaign.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl">
                    {/* Date */}
                    <p className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">
                      {campaign.date}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-normal text-gray-900 leading-tight line-clamp-2">
                      {campaign.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots - Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-2">
          {campaigns.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/40 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
