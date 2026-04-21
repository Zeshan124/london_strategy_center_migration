'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';

export default function IndustriesSection() {
  const swiperRef = useRef(null);

  const industries = [
    {
      id: 1,
      title: 'Aerospace and Defence',
      description: 'Strategic consulting for aerospace innovation and defense sector transformation',
      image: '/images/home/industries-section-1.jpg'
    },
    {
      id: 2,
      title: 'Public Sector',
      description: 'Public administration optimization and digital government solutions',
      image: '/images/home/industries-section-2.jpg'
    },
    {
      id: 3,
      title: 'Technology and Telecommunications',
      description: 'Digital transformation and innovation strategies for tech companies',
      image: '/images/home/industries-section-3.jpg'
    },
    {
      id: 4,
      title: 'Private Sector',
      description: 'Comprehensive business solutions for private sector enterprises',
      image: '/images/home/industries-section-4.jpg'
    },
    {
      id: 5,
      title: 'Real Estate',
      description: 'Real estate leaders need organisational intelligence built for complexity not instinct dressed as strategy.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop'
    },
    {
      id: 6,
      title: 'Healthcare',
      description: 'Healthcare organisations demand leadership capability designed for a fundamentally different environment',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop'
    },
    {
      id: 7,
      title: 'Media',
      description: 'The sector requires leaders who make high-quality decisions not those who simply adapt faster to change they did not anticipate.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop'
    },
    {
      id: 8,
      title: 'Logistics',
      description: 'In logistics, execution coherence is the competitive advantage.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop'
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 text-gray-900">
              Our Industries
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Specialised expertise across diverse sectors and industries
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Image */}
                <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" />
                </div>

                {/* Content Box */}
                <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-normal text-gray-900 mb-2 leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
