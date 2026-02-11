"use client";

import React from "react";
import { Award, TrendingUp, Layers, Users } from "lucide-react";

const WhyActNow = () => {
  const sections = [
    {
      icon: Award,
      title: "PROVEN IMPACT",
      description:
        "Cyber Excellence builds on trusted international models like NIST, Cyber Essentials and IASME Cyber Assurance, ensuring globally recognised best practices are applied locally.",
    },
    {
      icon: TrendingUp,
      title: "COMMERCIAL ADVANTAGE",
      description:
        "Achieving Cyber Excellence certification demonstrates compliance with key client and regulatory requirements ahead of competitors. This strengthens market positioning and opens doors to new business opportunities and high-value contracts.",
    },
    {
      icon: Layers,
      title: "SCALABLE APPROACH",
      description:
        "Cyber Excellence is designed to be accessible to organisations of all sizes, from SMEs to critical infrastructure operators. Its adaptable framework allows businesses to start small and expand their cybersecurity maturity as they grow.",
    },
    {
      icon: Users,
      title: "CULTURAL CHANGE",
      description:
        "Certification shifts cybersecurity from being an IT issue to a core business priority. By capturing executive attention, it embeds security into everyday decision-making and operational processes.",
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
        <div className="mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#132D5F] leading-tight tracking-tight">
            BY LEVELS WHY ACT NOW
          </h1>
        </div>

        {/* Grid Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isBottom = index >= 2;
              const isRight = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`group relative p-8 md:p-12 animate-fade-in-up ${
                    isBottom ? "" : "lg:border-b"
                  } ${isRight ? "" : "lg:border-r"} border-slate-300 transition-all duration-500 hover:bg-slate-50/50`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        {/* Icon Background Circle */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#132D5F] to-[#1a3a6b] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                          <IconComponent
                            className="w-8 h-8 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        
                        {/* Decorative Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F] to-[#5B7AAE] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-[#425875] font-bold text-xl md:text-2xl mb-4 tracking-wide">
                      {section.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F]/0 to-transparent opacity-0 group-hover:opacity-[0.02] transition-all duration-500 pointer-events-none"></div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#132D5F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Accent Bar */}
          <div className="h-3 bg-gradient-to-r from-[#1a3a6b] via-[#132D5F] to-[#1a3a6b]"></div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-[#1a3a6b] via-[#132D5F] to-[#1a3a6b] rounded-2xl p-8 shadow-2xl border border-[#132D5F]/20">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to elevate your cybersecurity?
              </h3>
              <p className="text-white/90 text-sm">
                Start your Cyber Excellence certification journey today
              </p>
            </div>
            <div className="flex gap-4">
              <button className="group relative px-8 py-4 bg-white text-[#132D5F] font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
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

export default WhyActNow;