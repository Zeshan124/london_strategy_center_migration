"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("approach");

  const tabs = [
    { id: "approach", label: "Our Approach", icon: "down" },
    { id: "uniqueness", label: "Our Uniqueness", icon: "up" },
    { id: "programmes", label: "Our Programmes", icon: "down" },
  ];

  const content = {
    approach:
      "Our unique blend of Entrepreneurship facilitation, strategy courses, and technology-based learning solutions are cutting-edge and state-of-the-art. We provide customised programmes using problem-based learning design. For us, every client is a unique partner!",
    uniqueness:
      "Our blend of Entrepreneurship facilitation, strategy courses, and technology-based learning solutions are cutting-edge and state-of-the-art. We provide customised programmes using problem-based learning design. For us, every client is a unique partner!",
    programmes:
      "Our unique blend of Entrepreneurship facilitation, strategy courses, and technology-based learning solutions are cutting-edge and state-of-the-art. We provide customised programmes using problem-based learning design. For us, every client is a unique partner!",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-blue-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-screen">
        {/* Left Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-26 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="text-xs sm:text-xs font-semibold tracking-widest text-gray-700 mb-4 sm:mb-6 uppercase">
            About London Strategy Centre
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-light leading-tight mb-6 sm:mb-8 text-gray-900">
            An Elite Next Generation Executive Development Center
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed mb-8 sm:mb-10">
            With our world-class expertise, large-scale networks and unrivalled
            partnerships we develop people and organisations in strategy,
            innovation and leadership, a distinctive combination. We are
            committed to unlocking the potential of people and organisations by
            working with business leaders and their management teams to overcome
            industry specific challenges.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "border-red-600 text-red-600 bg-transparent shadow-md"
                      : "border-gray-300 text-gray-700 hover:border-gray-400 bg-transparent"
                  }
                `}
              >
                <span className="font-medium text-xs sm:text-sm">
                  {tab.label}
                </span>
                {tab.icon === "down" ? (
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-4 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {content[activeTab]}
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-screen">
          <img
            src="/images/about-section.jpg"
            alt="Executive meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
