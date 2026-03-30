"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("approach");

  const tabs = [
    { id: "people", label: "People", icon: "down" },
    { id: "practice", label: "Practice", icon: "up" },
    { id: "technology", label: "Technology", icon: "down" },
  ];

  const content = {
    people:
      "We develop leaders and teams with the judgement, capability, and discipline required to lead and perform in complex environments. ",
    practice:
      "We advise organisations on implementing artificial intelligence, agentic leadership and cybernetic transformation, turning insights into effective action.",
    technology:
      "We design and build AI-enabled protocols and decision systems that strengthen how organisations think, decide, and execute.",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-blue-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-screen">
        {/* Left Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-26 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center">
          {/* Eyebrow */}
          {/* <p className="text-xs sm:text-xs font-semibold tracking-widest text-gray-700 mb-4 sm:mb-6 uppercase">
            About London Strategy Centre
          </p> */}

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-light leading-tight mb-6 sm:mb-8 text-gray-900">
            Built for Leaders Operating in Complex Systems
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed mb-8 sm:mb-10">
            London Strategy Centre helps organisations build strategic intelligence that enable leaders to think clearly, decide effectively, and act decisively in complex environments. We combine capability development, strategic advisory, and AI-enabled systems to help organisations perform and adapt in complex and rapidly changing environments.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 transition-all duration-300
                    ${
                      isActive
                        ? "border-red-600 text-red-600 bg-transparent shadow-md"
                        : "border-gray-300 text-gray-700 hover:border-gray-400 bg-transparent"
                    }
                  `}
                >
                  <span className="font-medium text-xs sm:text-sm">
                    {tab.label}
                  </span>

                  {/* Single icon, rotated 180° when active */}
                  <ChevronDown
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-in-out ${
                      isActive ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </button>
              );
            })}
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
            src="/images/home/6.jpg"
            alt="Executive meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
