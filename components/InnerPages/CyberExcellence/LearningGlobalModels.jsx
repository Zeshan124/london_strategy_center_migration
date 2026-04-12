"use client";

import React from "react";
import {
  Shield,
  Globe,
  FileCheck,
  Handshake,
  TrendingDown,
  Network,
  ShieldCheck,
} from "lucide-react";

const LearningGlobalModels = () => {
  const topStats = [
    {
      icon: "/images/InnerPages/cyberexcellence/bookmark_stacks.svg",
      percentage: "99%",
      description:
        "of organisations see improved executive engagement with cybersecurity.",
    },
    {
      icon: "/images/InnerPages/cyberexcellence/article_shortcut.svg",
      percentage: "82%",
      description: "of buyers prefer certified suppliers.",
    },
    {
      icon: "/images/InnerPages/cyberexcellence/shoppingmode.svg",
      percentage: "61%",
      description:
        "of organisations see improved executive engagement with cybersecurity.",
    },
    {
      icon: "/images/InnerPages/cyberexcellence/forms_apps_script.svg",
      percentage: "71%",
      description:
        "of organisations see improved executive engagement with cybersecurity.",
    },
  ];

  const bottomStats = [
    {
      icon: "/images/InnerPages/cyberexcellence/fact_check.svg",
      description: "80% reduction in cyber incidents among certified partners",
    },
    {
      icon: "/images/InnerPages/cyberexcellence/inventory_2.svg",
      description:
        "A unified assurance standard across thousands of suppliers.",
    },
    {
      icon: "/images/InnerPages/cyberexcellence/badge.svg",
      description: "Simplified compliance via independent certification.",
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

      <div className="mx-auto px-6 sm:px-8 lg:px-24 text-center sm:text-left">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Learning from global models
          </h2>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {topStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  {/* Icon Circle */}
                  <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <img
                        src={stat.icon}
                        alt={stat.description}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Percentage */}
                  <h2 className="text-5xl font-bold text-[#132D5F] mb-4">
                    {stat.percentage}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed max-w-xs">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Banner */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          <div className="bg-[#0E2253] rounded-2xl p-8 shadow-2xl border border-[#132D5F]/20">
            <p className="text-white text-center text-base md:text-xl leading-relaxed max-w-5xl mx-auto">
              A leading UK wealth management firm, mandated certification for
              its partner network. Within a year, this initiative resulted in:
            </p>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 lg:py-12">
          {bottomStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  {/* Icon Circle */}
                  <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <img
                        src={stat.icon}
                        alt={stat.description}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed max-w-xs font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <div className="bg-[#F1EEEA] rounded-2xl p-8 shadow-lg border border-slate-200">
            <p className="text-slate-700 text-center text-lg leading-relaxed max-w-5xl mx-auto">
              Cyber Excellence adapts these lessons for the Middle East,
              ensuring both small and large organisations benefit from a
              cohesive framework.
            </p>
          </div>
        </div>

        {/* Footer Citation */}
        <div
          className="mt-8 text-center animate-fade-in"
          style={{ animationDelay: "1100ms" }}
        >
          <p className="text-gray-800 text-sm font-bold">
            Cyber Essentials Impact Evaluation (2024), Department for Science,
            Innovation and Technology (DSIT).
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-0 py-8 sm:py-12 lg:py-10">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8 sm:mb-12">
            Message From Our Principal
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 text-center sm:text-left">
            <img
              src="/images/InnerPages/cyberexcellence/major.svg"
              alt="Dr Adnan Alturkistani"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 border-b-2 border-gray-300 pb-1">
                Major General Paul Nanson
              </h2>
              <p className="text-sm sm:text-base text-gray-600">Principal,</p>
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                London Strategy Centre
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-base text-gray-700 leading-relaxed">
              “In cybersecurity, standing still is falling behind. Regular
              reassessment and updated certification standards create a culture
              of vigilance, ensuring teams remain aware and proactive.
              Continuous improvement isn’t optional, it’s the only way to stay
              ahead of evolving threats and protect critical assets in an
              ever-changing digital landscape.”
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LearningGlobalModels;
