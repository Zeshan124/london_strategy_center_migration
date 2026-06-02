"use client";

import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function PressReleaseHero({ release }) {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-8 md:py-24 pt-24 lg:pt-34">
        <article>
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-xs sm:text-sm font-bold">
              {release.category}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            {release.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            {release.subheadline}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-4 mb-4 pt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">{release.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">{release.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">{release.location}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[150px] sm:h-[500px] lg:h-[500px] mb-12 overflow-hidden">
            <Image
              src={release.heroImage}
              alt={release.headline}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-sm font-semibold text-[#0E2253] uppercase tracking-wide mb-6">
              {release.dateline}
            </p>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {release.paragraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
