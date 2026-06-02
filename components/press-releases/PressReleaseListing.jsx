"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { PRESS_RELEASES } from "@/lib/pressReleasesData";

export default function PressReleaseListing() {
  return (
    <section className="bg-white min-h-screen">
      {/* Header */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-32 pb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-xs font-bold mb-6">
          Media & News
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-4">
          Press Releases
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          Latest announcements, strategic partnerships, and news from London Strategy Centre.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRESS_RELEASES.map((release) => (
            <Link
              key={release.slug}
              href={`/press-release/${release.slug}`}
              className="group flex flex-col border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={release.heroImage}
                  alt={release.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block px-3 py-1 border rounded-md text-xs font-bold mb-3 w-fit">
                  {release.category}
                </span>

                <h2 className="text-lg font-light text-gray-900 leading-snug mb-3 group-hover:text-[#0E2253] transition-colors">
                  {release.headline}
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {release.subheadline}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0E2253]" />
                    {release.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0E2253]" />
                    {release.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0E2253]" />
                    {release.location}
                  </span>
                </div>

                <span className="flex items-center gap-2 text-sm font-medium text-[#0E2253] group-hover:gap-3 transition-all">
                  Read full release <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
