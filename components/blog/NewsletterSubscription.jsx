'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { subscribeNewsletter } from '@/lib/api/newsletter';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
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
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#0E2253] mb-4 sm:mb-6 uppercase md:text-left text-center">
                  Biweekly Newsletter Subscription
                </p>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-light text-gray-900 leading-tight md:text-left text-center">
                  Featured Insights: Explore the ideas shaping the future of business
                </h2>
              </div>

              {/* Right Form */}
              <div className="flex items-center justify-end">
                <form onSubmit={handleSubmit} className="w-full max-w-xl">
              <div className="flex-1 lg:max-w-2xl">
                          <div
                            className="
                                flex flex-col gap-3
                                sm:flex-row sm:gap-0
                                sm:border sm:border-gray-300 sm:rounded-xl
                                sm:focus-within:border-[#1e3a6b]
                                sm:focus-within:ring-2 sm:focus-within:ring-[#1e3a6b]/20
                                sm:bg-white
                                transition-all
                              "
                          >
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email address"
                              className="
                                    w-full
                                    px-4 sm:px-6
                                    py-3 sm:py-3.5
                                    text-sm sm:text-base
                                    text-gray-900 placeholder-gray-400
                
                                    /* mobile: own border */
                                    bg-white border border-gray-300 rounded-lg
                                    focus:outline-none focus:border-[#1e3a6b]
                                    focus:ring-2 focus:ring-[#1e3a6b]/20
                
                                  
                                    sm:bg-transparent sm:border-0 sm:rounded-none
                                    sm:focus:border-0 sm:focus:ring-0
                
                                    transition-all
                                  "
                            />
            
                            <button
                              onClick={handleSubmit}
                              className="
                                    inline-flex items-center justify-center gap-2
                                    text-sm sm:text-base
                                    font-medium whitespace-nowrap
                                    bg-[#0a1d4a] text-white
                                    hover:bg-[#1e3a6b]
                                    transition-all duration-300
                
                                    /* mobile: full-width, own shape */
                                    w-full px-5 py-3 rounded-lg
                
                                    /* sm+: auto-width, floats inset with margin */
                                    sm:w-auto sm:px-6 sm:py-2.5 sm:m-1.5 sm:rounded-md
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
