"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#F1EEEA]">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 lg:py-16">

        {/* Top Section: Logo (left) | Subscribe + Contact + Socials (right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 lg:mb-10">

          {/* Left: Logo */}
          <div className="shrink-0">
            <Image
              src="/images/icons/logo-footer.svg"
              alt="London Strategy Centre Logo"
              width={130}
              height={130}
              className="object-contain"
              priority
            />
          </div>

          {/* Right: Subscribe + Address + Email + Socials */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:items-end">

            {/* Subscribe form — full width on mobile, fixed on desktop */}
            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch w-full lg:w-[460px]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 min-w-0 px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#0E2253] transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 sm:px-5 py-3 bg-[#0E2253] text-white text-xs font-semibold tracking-wider uppercase rounded-r-lg hover:bg-[#1a3570] transition-colors whitespace-nowrap shrink-0"
              >
                SUBSCRIBE
                <span className="text-sm">↗</span>
              </button>
            </form>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
              <div className="relative w-4 h-4 shrink-0 mt-0.5">
                <Image src="/images/icons/location.svg" alt="Location" fill className="object-contain" />
              </div>
              <span>45 Albemarle Street, 3rd Floor, Mayfair, W1S 4JL, London, United Kingdom</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <img src="/images/icons/mail.svg" alt="Mail" className="w-4 h-4 shrink-0" />
              <a
                href="mailto:enquiries@londonstrategycentre.com"
                className="text-gray-800 hover:text-gray-600 transition-colors break-all"
              >
                enquiries@londonstrategycentre.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <a href="#" className="w-8 h-8 flex items-center justify-center" aria-label="Facebook">
                <img src="/images/icons/facebook.svg" alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center" aria-label="Instagram">
                <img src="/images/icons/insta.svg" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center" aria-label="LinkedIn">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center" aria-label="TikTok">
                <img src="/images/icons/tiktok.svg" alt="TikTok" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center" aria-label="YouTube">
                <img src="/images/icons/youtube.svg" alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6 sm:mb-8" />

        {/* Bottom Row: Policy links + copyright */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap">
              POLICIES AND LEGISLATION
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap">
              SITEMAP
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-800 whitespace-nowrap">© 2025 London Strategy Centre</p>
        </div>

      </div>
    </footer>
  );
}
