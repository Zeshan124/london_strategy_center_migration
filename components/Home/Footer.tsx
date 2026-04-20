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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-10 md:py-8">
        {/* Main Grid - Logo Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-3">
          {/* Left Column - Logo and Links */}
          <div className="flex flex-col justify-between">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <Image
                src="/images/icons/logo-footer.svg"
                alt="London Strategy Centre Logo"
                width={140}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Links and Copyright */}
            <div className="space-y-4">
              {/* Policy Links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
                <a
                  href="#"
                  className="text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-wide"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-wide"
                >
                  Policies and Legislation
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-wide"
                >
                  Sitemap
                </a>
              </div>

              {/* Copyright */}
              <p className="text-xs sm:text-sm text-slate-900">
                © 2026 London Strategy Centre
              </p>
            </div>
          </div>

          {/* Right Column - Subscribe, Address, Email, Social */}
          <div className="flex flex-col gap-5">
            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex items-stretch">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm text-slate-900 bg-white border-2 border-slate-300 rounded-l-lg focus:outline-none focus:border-[#0E2253] transition-colors placeholder-slate-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0E2253] text-white text-xs font-bold uppercase rounded-r-lg hover:bg-[#1a3570] transition-colors whitespace-nowrap"
              >
                Subscribe
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                <svg
                  className="w-full h-full text-slate-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-slate-900 leading-relaxed">
                45 Albemarle Street, 3rd Floor, Mayfair, W1S 4JL, London, United
                Kingdom
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5">
                <svg
                  className="w-full h-full text-slate-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:enquiries@londonstrategycentre.com"
                className="text-sm text-slate-900 hover:text-slate-600 transition-colors"
              >
                enquiries@londonstrategycentre.com
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
