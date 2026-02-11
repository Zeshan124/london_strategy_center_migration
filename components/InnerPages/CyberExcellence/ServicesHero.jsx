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
      <div className="min-h-screen bg-white lg:pt-28 py-12">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-8 md:py-8 lg:pt-16">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
            CyberExcellence
          </h1>

          <div className="text-sm text-gray-900 mb-8">
            BUILDING A SAFER DIGITAL FUTURE FOR THE MIDDLE EAST
          </div>

          {/* Featured Image - Full Width */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/InnerPages/cyberexcellence/Main-Slider.jpg"
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
                    Introduction
                  </h2>

                  <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-2">
                    The Cyber Excellence Certification scheme is designed to
                    address the growing cybersecurity challenges in the Middle
                    East region. This comprehensive certification provides
                    organizations with the knowledge, skills, and frameworks
                    necessary to build robust cybersecurity capabilities and
                    protect their digital assets. Our certification scheme is
                    specifically tailored for organizations operating in the
                    Middle East, taking into account regional regulations,
                    cultural considerations, and the unique threat landscape of
                    the region.
                  </div>

                  <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                Our certification scheme is specifically tailored for organizations operating in the Middle East, taking into account regional regulations, cultural considerations, and the unique threat landscape of the region.
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
