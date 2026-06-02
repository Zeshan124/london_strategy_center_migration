"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Bookmark,
  Download,
  Printer,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Building2,
  MapPin,
  Clock,
  Calendar,
  Play,
  User,
  Timer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import FeaturedCampaignsSection from "@/components/blog/FeaturedCampaignsSection";
import Image from "next/image";

export default function HeroReframeReads() {
  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 py-0">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-24 py-8 sm:py-8 md:py-8 lg:pt-16">
          {/* Category Badge */}
          <div className="mb-6">
            <div className="inline-block">
              <Image
                src="/images/InnerPages/trl/trl-logo.svg"
                alt="Reframe Reads"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-2 max-w-4xl">
            Reframe Reads
          </h1>

           <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed mb-2">
             Expert insights on AI, innovation, and the future we are shaping together
            </p>

          <div className="flex flex-wrap items-center gap-6 pb-4 mb-4 pt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Play className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">4 Articles</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <User className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">Expert Contributors</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Timer className="w-5 h-5 text-[#0E2253]" />
              <span className="text-sm font-medium">Updated Monthly</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center sm:justify-start">
            <Link href="/trl/podcast" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300">
            WATCH VIDEOS
            </Link>
            {/* <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[white] border-2 border-[#0E2253] text-gray-900 rounded-xl font-medium text-xs sm:text-sm hover:bg-[#0E2253] hover:text-white transition-all duration-300">
            WATCH THE BOOKLET
              <img
                src="/images/InnerPages/digitaltwin/arrow-up.svg"
                alt="Play Icon"
                className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </button> */}
          </div>

          {/* Featured Video - Full Width */}
          <div className="py-8 sm:py-12 lg:py-24">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/InnerPages/trl/banner.jpg"
                alt="Strategy in the Digital Landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
