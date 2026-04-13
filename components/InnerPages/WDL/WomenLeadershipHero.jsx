"use client";

import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "faculty", label: "Faculty" },
  { id: "outcomes", label: "Outcomes" },
  { id: "apply", label: "Apply" },
];

export default function WomenLeadershipHero() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 py-6">
        {/* Main content */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-8 md:py-8 lg:pt-16">
          {/* Logo */}
          {/* <div className="mb-6">
            <div className="inline-block">
              <Image
                src="/images/InnerPages/WDL/UOB-logo.svg"
                alt="UOB Logo"
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6">
            Women's Leadership <br /> in the Digital Era
          </h1>

          <div className="text-lg text-gray-900 mb-0">
            Leading with Confidence, Speaking with Power, Succeeding with
            Purpose.
          </div>

          {/* Featured Video */}
          <div className="relative mb-0 sm:mb-12 pt-12 sm:pt-24 rounded-2xl overflow-hidden">
            <video
              src="/images/InnerPages/WDL/University_of_Birmingham_Dubai_V2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Sticky Nav */}
        <div className="sticky top-0 z-40 bg-white shadow-md">
          <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <div className="flex items-center justify-between py-4 gap-4 overflow-x-auto">
              {/* Navigation Tabs */}
              <div className="flex items-center gap-6 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? " border-b-2 border-slate-900 pb-1"
                        : " hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 min-w-max">
                <button className="px-6 py-2.5 bg-[#0E2253] text-white text-sm rounded-lg hover:bg-[#2d4a7a] transition-all duration-300 whitespace-nowrap">
                  APPLY NOW
                </button>
                <button className="px-6 py-2.5 bg-[#B90722] text-white text-sm rounded-lg hover:bg-red-700 transition-all duration-300 whitespace-nowrap">
                  BOOK CONSULTATION
                </button>
                <button className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 text-sm  rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                  NOMINATE
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 text-sm rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                  DOWNLOAD BROCHURE
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
