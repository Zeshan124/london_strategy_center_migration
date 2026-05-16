'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';

const DEFAULT_HEADING = 'A three-tier architecture that makes AI capability permanent ';
const DEFAULT_SUBHEADING = 'LSC’s approach is built on a proprietary Capability Transformation Architecture (CTA), three integrated tiers that move organisations from diagnosis through behavioural change to embedded, self-reinforcing capability.';
const DEFAULT_TIERS = [
  { id: 1, title: 'Capability Transformation (CT) Scan (Tier 1):', description: 'AI-enabled sensing that reveals how leaders frame problems, where execution bottlenecks cluster, and what systemic constraints exist.', image: '/images/InnerPages/artificial-intelligence/shared/tier-1-ct-scan-card.jpg', href: '/artificial-intelligence/capability-transformation-scan' },
  { id: 2, title: 'Agentic Leadership Transformation (Tier 2):', description: 'Leaders working with AI as a thinking partner in live strategic and operational contexts. Not training. Not simulation.', image: '/images/InnerPages/artificial-intelligence/shared/tier-2-agentic-leadership-card.jpg', href: '/artificial-intelligence/agentic-leadership-transformation' },
  { id: 3, title: 'Cybernetic Organisation Design (Tier 3):', description: 'Embedding AI-augmented sensing, governance, and learning systems across the enterprise so that capability compounds over time.', image: '/images/InnerPages/artificial-intelligence/shared/tier-3-cybernetic-design-card.jpg', href: '/artificial-intelligence/cybernetic-organisation-design' },
];

export default function TiersSection({ top_heading, top_subheading, heading, subheading, tiers }) {
  const swiperRef = useRef(null);

  const resolvedTopHeading = top_heading ?? null;
  const resolvedTopSubheading = top_subheading ?? null;
  const resolvedHeading = heading ?? DEFAULT_HEADING;
  const resolvedSubheading = subheading !== undefined ? subheading : DEFAULT_SUBHEADING;
  const resolvedTiers = tiers ?? DEFAULT_TIERS;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            {resolvedTopHeading && (
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-light leading-tight mb-2 text-gray-900">
                {resolvedTopHeading}
              </h2>
            )}
            {resolvedTopSubheading && (
              <div className="text-sm sm:text-base text-gray-600 mb-6">
                {Array.isArray(resolvedTopSubheading) ? (
                  resolvedTopSubheading.map((text, idx) => (
                    <p key={idx} className={idx < resolvedTopSubheading.length - 1 ? "mb-2" : ""}>
                      {text}
                    </p>
                  ))
                ) : (
                  <p>{resolvedTopSubheading}</p>
                )}
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
              {resolvedHeading}
            </h2>
            {resolvedSubheading && (
              <p className="text-base sm:text-lg text-gray-600">
                {resolvedSubheading}
              </p>
            )}
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

        {/* Slider — centered grid for ≤3 items, Swiper for 4+ */}
        {resolvedTiers.length <= 3 ? (
          <div className="flex flex-wrap justify-center gap-5">
            {resolvedTiers.map((tier) => {
              const Wrapper = tier.href ? Link : 'div';
              return (
                <Wrapper
                  key={tier.id}
                  {...(tier.href ? { href: tier.href } : {})}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-[400px] sm:h-[550px] overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-5 shadow-xl transition-all duration-500">
                    <h3 className="text-lg font-normal text-gray-900 mb-2 leading-tight">{tier.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        ) : (
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
            {resolvedTiers.map((tier) => (
              <SwiperSlide key={tier.id}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl transition-all duration-500">
                    <h3 className="text-lg font-normal text-gray-900 mb-2 leading-tight">{tier.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
