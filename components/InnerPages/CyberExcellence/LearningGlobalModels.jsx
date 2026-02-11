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
      icon: Shield,
      percentage: "99%",
      description:
        "of internet-based vulnerabilities mitigated with certified controls.",
    },
    {
      icon: Globe,
      percentage: "82%",
      description:
        "of certified organisations reported improved confidence in defending against threats.",
    },
    {
      icon: FileCheck,
      percentage: "61%",
      description: "of buyers prefer certified suppliers.",
    },
    {
      icon: Handshake,
      percentage: "71%",
      description:
        "of organisations see improved executive engagement with cybersecurity.",
    },
  ];

  const bottomStats = [
    {
      icon: TrendingDown,
      description: "80% reduction in cyber incidents among certified partners",
    },
    {
      icon: Network,
      description:
        "A unified assurance standard across thousands of suppliers.",
    },
    {
      icon: ShieldCheck,
      description: "Simplified compliance via independent certification.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 px-4 py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#132D5F] leading-tight tracking-tight">
            LEARNING FROM GLOBAL MODELS
          </h1>
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
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F] to-[#5B7AAE] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>

                    {/* Main Circle with White Border */}
                    <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-[6px] border-slate-200 group-hover:scale-110 transition-all duration-500">
                      {/* Inner Background Circle */}
                      <div className="absolute inset-4 bg-gradient-to-br from-[#132D5F] to-[#1a3a6b] rounded-full"></div>

                      {/* Inner Glow */}
                      <div className="absolute inset-5 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

                      {/* Icon */}
                      <IconComponent
                        className="w-12 h-12 text-white relative z-10"
                        strokeWidth={2.5}
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
          <div className="bg-gradient-to-r from-[#1a3a6b] via-[#132D5F] to-[#1a3a6b] rounded-2xl p-8 shadow-2xl border border-[#132D5F]/20">
            <p className="text-white text-center text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
              A leading UK wealth management firm, mandated certification for
              its partner network. Within a year, this initiative resulted in:
            </p>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {bottomStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F] to-[#5B7AAE] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>

                    {/* Main Circle with White Border */}
                    <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-[6px] border-slate-200 group-hover:scale-110 transition-all duration-500">
                      {/* Inner Background Circle */}
                      <div className="absolute inset-4 bg-gradient-to-br from-[#132D5F] to-[#1a3a6b] rounded-full"></div>

                      {/* Inner Glow */}
                      <div className="absolute inset-5 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

                      {/* Icon */}
                      <IconComponent
                        className="w-12 h-12 text-white relative z-10"
                        strokeWidth={2.5}
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <p className="text-slate-700 text-center text-base leading-relaxed max-w-5xl mx-auto">
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
          <p className="text-slate-500 text-sm italic">
            Cyber Essentials Impact Evaluation (2024), Department for Science,
            Innovation and Technology (DSIT).
          </p>
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
