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

export default function HomePage() {
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6 max-w-4xl">
           The Reframe Lab
          </h1>

           
  <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
           Where Organisational Thinking Gets Rebuilt
            </p>
       

          <div className="flex gap-4 sm:justify-start">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300">
              JOIN US AS A SPEAKER
            </button>
          
          </div>

          <div className="py-8 sm:py-12 lg:py-16">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/InnerPages/trl/main_banner.jpg"
                alt="The Reframe Lab"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
        Most leadership content reinforces what executives already believe. It confirms existing mental models rather than testing them. The result is a market saturated with insight that sounds relevant but changes nothing.
         </p>
 <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
    The Reframe Lab exists to do the opposite. It is London Strategy Centre's intellectual platform — a space where the assumptions behind strategy, capability, and organisational design are examined, challenged, and reconstructed. Every article, every conversation, every argument published here begins from the same premise: the way most organisations think about performance, leadership, and transformation is structurally

        </p>
        </div>
      </div>
    </>
  );
}
