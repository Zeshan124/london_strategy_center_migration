"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Share2,
  Bookmark,
  Download,
  Printer,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  Building2,
} from "lucide-react";

export default function PressReleaseHero() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="bg-white">
      {/* Press Release Header Strip */}
      <div className="bg-slate-900 text-white py-3 border-b border-slate-700">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="px-3 py-1 bg-teal-600 rounded-full text-xs font-semibold uppercase tracking-wide">
                Press Release
              </span>
              <div className="hidden md:flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4" />
                <span>February 11, 2026</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>London, UK & Riyadh, Saudi Arabia</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? "bg-teal-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <button
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                aria-label="Print"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                aria-label="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-slate-200 p-2 w-48 z-50">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-8 md:py-8 lg:pt-16">
        <article>
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <a href="/" className="hover:text-teal-600 transition-colors">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/press" className="hover:text-teal-600 transition-colors">
                  Press Releases
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-medium">Current Release</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
              <Building2 className="w-4 h-4" />
              Strategic Partnership
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Assessment process by levels
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            MILE is a leading provider of advanced end-to-end training services in Saudi Arabia
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-slate-200 pt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">February 11, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">5 min read</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">London, UK & Riyadh, KSA</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/InnerPages/cyberexcellence/Main-Slider.jpg"
              alt="London Strategy Centre and MILE Strategic Collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Opening Dateline */}
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">
              LONDON, UK and RIYADH, SAUDI ARABIA — February 11, 2026
            </p>

            {/* Paragraphs */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                London Strategy Centre and MILE are pleased to announce a strategic
                collaboration aimed at transforming the practice of management around
                the world. Both organisations share a commitment to creating and
                disseminating applied knowledge, and believe that links to industry are
                essential in achieving this.
              </p>

              <p className="text-lg">
                London Strategy Centre is an international leader in executive
                development and research, with a mission to transform businesses around
                the world by creating and disseminating applied knowledge. MILE, based
                in Saudi Arabia, specializes in the delivery of advanced end-to-end
                training services built on partnerships with internationally recognized
                educational and academic bodies.
              </p>

              <p className="text-lg">
                Through this collaboration, the two parties will pursue fundamental
                areas of cooperation towards achieving their common goals. This includes
                the sharing of their experiences and information, and participation in
                the preparation of joint programmes to achieve these goals.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}