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
      {/* Main Hero Content */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-8 md:py-24 pt-24 lg:pt-34">
        <article>
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-xs sm:text-sm font-bold">
              Strategic Partnership
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            London Strategy Centre and MILE Announce Strategic Collaboration
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            MILE is a leading provider of advanced end-to-end training services
            in Saudi Arabia
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-4 mb-4 pt-4">
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
              <span className="text-sm font-medium">
                London, UK & Riyadh, KSA
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[150px] sm:h-[500px] lg:h-[500px] mb-12 overflow-hidden">
            <Image
              src="/images/press-release/Main-Slider.jpg"
              alt="London Strategy Centre and MILE Strategic Collaboration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Opening Dateline */}
            <p className="text-sm font-semibold text-[#0E2253] uppercase tracking-wide mb-6">
              LONDON, UK and RIYADH, SAUDI ARABIA — February 11, 2026
            </p>

            {/* Paragraphs */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                London Strategy Centre and MILE are pleased to announce a
                strategic collaboration aimed at transforming the practice of
                management around the world. Both organisations share a
                commitment to creating and disseminating applied knowledge, and
                believe that links to industry are essential in achieving this.
              </p>

              <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                London Strategy Centre is an international leader in executive
                development and research, with a mission to transform businesses
                around the world by creating and disseminating applied
                knowledge. MILE, based in Saudi Arabia, specializes in the
                delivery of advanced end-to-end training services built on
                partnerships with internationally recognized educational and
                academic bodies.
              </p>

              <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                Through this collaboration, the two parties will pursue
                fundamental areas of cooperation towards achieving their common
                goals. This includes the sharing of their experiences and
                information, and participation in the preparation of joint
                programmes to achieve these goals.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
