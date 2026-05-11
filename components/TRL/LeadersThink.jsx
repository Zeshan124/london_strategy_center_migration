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

export default function LeadersThink() {
  return (
    <>
      <div className="min-h-screen bg-white py-12 sm:py-0">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-0 py-8 sm:py-8 md:py-8 lg:pt-16">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6 max-w-4xl">
           The Reframe Lab
          </h1>

           
  <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4">
           Where Organisational Thinking Gets Rebuilt
            </p>
       

         

          <div className="py-8 sm:py-12 lg:py-14">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/InnerPages/trl/leadership-thinks.jpg"
                alt="The Reframe Lab"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
      Reframe Reads is the written core of The Reframe Lab. These are long-form, original articles authored by London Strategy Centre — each one built around a single argument about how organisations sense, decide, and execute.
         </p>

<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
Reframe Reads covers the terrain that conventional business publishing avoids: why execution coherence matters more than strategic ambition, how AI-augmented leadership differs fundamentally from AI adoption, what cybernetic organisation design means in practice, and why most transformation programmes fail at the system level rather than the strategy level.
</p>

<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
Each article is written for executives who make decisions under complexity — not for audiences seeking motivation or trend summaries. The standard is analytical rigour, not volume.
         </p>
 <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
    The Reframe Lab exists to do the opposite. It is London Strategy Centre's intellectual platform — a space where the assumptions behind strategy, capability, and organisational design are examined, challenged, and reconstructed. Every article, every conversation, every argument published here begins from the same premise: the way most organisations think about performance, leadership, and transformation is structurally

        </p>
        </div>
      </div>
    </>
  );
}
