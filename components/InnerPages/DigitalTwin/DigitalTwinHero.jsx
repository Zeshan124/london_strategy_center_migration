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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import FeaturedCampaignsSection from "@/components/blog/FeaturedCampaignsSection";

export default function DigitalTwinHero() {
  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 py-6">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-8 md:py-8 lg:pt-16">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-xs sm:text-sm font-bold">
              LSC DIGITAL TWIN
            </span>
          </div>

          {/* Title */}
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
           Transform Leadership Logic into
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6">
            Scalable Intelligence
          </h1>

          <div className="text-lg text-gray-900 mb-8">
            From AI-powered executive growth partners to organisation-wide
            strategic sensing systems, we turn how leaders think into a
            continuous intelligence infrastructure that strengthens alignment,
            accelerates decision-making, and builds cybernetic capability. This
            is not AI coaching. This is leadership intelligence engineered for
            scale.
          </div>
          <div className="text-lg text-gray-900 italic mb-8">
            This is not AI coaching. This is leadership intelligence engineered
            for scale.
          </div>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl text-sm hover:bg-gray-800 transition-all duration-300">
              DISCOVER HOW IT WORKS
            </button>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[white] border-2 border-[#0E2253] text-gray-900 rounded-xl font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
              BOOK A CONSULTATION
              <img
                src="/images/InnerPages/digitaltwin/arrow-up.svg"
                alt="Play Icon"
                className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </button>
          </div>

          {/* Featured Video - Full Width */}
         <div className="relative mb-0 sm:mb-12 pt-12 sm:pt-24 rounded-2xl overflow-hidden">
            <video
              src="/images/InnerPages/digitaltwin/Paul_Nanson.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
