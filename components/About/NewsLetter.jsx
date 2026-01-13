'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Subscribing email:', email);

    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      alert('Successfully subscribed!');
    }, 1000);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0f2557] to-[#1a3a6b] rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Heading */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">
                Subscribe to our Newsletter
              </h3>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="
                    w-full
                    px-5 sm:px-6
                    py-3 sm:py-3.5
                    bg-white
                    border border-gray-300
                    rounded-lg sm:rounded-r-none
                    text-gray-900 placeholder-gray-500
                    focus:outline-none
                    focus:border-[#1e3a6b]
                    focus:ring-2 focus:ring-[#1e3a6b]/20
                    transition-all
                    text-sm sm:text-base
                  "
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6
                    py-3 sm:py-3.5
                    bg-[#0a1d4a] text-white
                    rounded-lg sm:rounded-l-none
                    font-medium
                    text-sm sm:text-base
                    hover:bg-[#1e3a6b]
                    transition-all duration-300
                    whitespace-nowrap
                    disabled:opacity-60
                  "
                >
                  {isLoading ? 'PLEASE WAIT' : 'SUBSCRIBE'}
                  <Image
                    src="/images/icons/top-arrow.png"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
