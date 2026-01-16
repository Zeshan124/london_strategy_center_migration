'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-14">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Newsletter Box */}
        <div className="bg-[#E8E3DC] rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-12">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Label */}
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#0E2253] mb-4 sm:mb-6 uppercase">
                  Biweekly Newsletter Subscription
                </p>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-light text-gray-900 leading-tight">
                  Featured Insights: Explore the ideas shaping the future of business
                </h2>
              </div>

              {/* Right Form */}
              <div className="flex items-center justify-end">
                <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="flex-1 lg:max-w-2xl">
                              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full relative">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter your email address"
                                  className="
                        w-full
                        px-5 sm:px-6
                        py-3 sm:py-3.5
                        bg-white
                        border border-gray-300
                        rounded-xl sm:rounded-r-none
                        text-gray-900 placeholder-gray-500
                        focus:outline-none focus:border-[#1e3a6b]
                        focus:ring-2 focus:ring-[#1e3a6b]/20
                        transition-all
                        text-sm sm:text-base
                      "
                                />
                
                                <button
                                  onClick={handleSubmit}
                                  className="
                        inline-flex items-center justify-center gap-2
                        px-5 sm:px-6
                        py-3 sm:py-3.5
                        bg-[#0a1d4a] text-white
                        rounded-lg sm:rounded-l-none
                        font-medium
                        text-sm sm:text-base
                        hover:bg-[#1e3a6b]
                        transition-all duration-300
                        whitespace-nowrap
                      "
                                >
                                  SUBSCRIBE
                                  <Image
                                    src="/images/icons/top-arrow.png"
                                    alt="Arrow"
                                    width={16}
                                    height={16}
                                    className="object-contain"
                                  />
                                </button>
                              </div>
                            </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
