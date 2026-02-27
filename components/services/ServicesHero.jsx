"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import FeaturedCampaignsSection from "@/components/blog/FeaturedCampaignsSection";

export default function ServicesHero() {
  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 pt-16 py-0">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-8 md:py-8 lg:pt-16">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
            Strategy in the <br/> Digital Landscape
          </h1>

          <div className="text-sm text-gray-900 mb-8">
            Navigate the digital landscape with confidence, staying ahead of the
            curve with cutting-edge tools and concepts.
          </div>

          {/* Featured Image - Full Width */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/services/services_hero_banner.jpg"
              alt="Strategy in the Digital Landscape"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Two Column Layout for Content and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Content - Article */}
            <div className="lg:col-span-full">
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">
                    What is maturity?
                  </h2>

                  <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-2">
                    Digitization is revolutionizing markets and redefining the
                    rules of competition; it is transforming the way business is
                    being performed today. Although the long-term impact of
                    digital revolution promises a bright future, the process is
                    far from being linear and many businesses are at risk of
                    falling behind. This situation poses a challenge for
                    executives who need to carefully plan their strategic
                    response to digital disruption. The question then is: If
                    competitive advantage requires crafting a winning strategy,
                    why do we spend so little time strategizing and all the time
                    talking about the technology? This programme rebalances
                    these priorities and enables the participants to develop
                    robust and meaningful technology-centered strategies. This
                    programme is not about why you should digitally transform,
                    it is about how you should transform and become more
                    strategic. New practices and technologies continue to upend
                    traditional business models, and this programme is designed
                    to help executives understand this rapidly changing
                    environment and make strategic choices.
                  </div>

                   <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                   This programme offers tools and concepts that will help the participants to develop a strategic response which can turn digital threats into opportunities. It will enable participants to leverage digital opportunities to create competitive advantage and improve performance.
                  </div>

                     <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-0">
                    Participants on this programme will be led, not lectured, through a combination of presentations, facilitated discussion, and activity-based learning.
                  </div>
                </div>
              </div>        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
