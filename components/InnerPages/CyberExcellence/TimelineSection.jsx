"use client";

import React from "react";
import {
  Shield,
  Bug,
  ShieldCheck,
  Users,
  FileText,
  AlertTriangle,
} from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "1971",
      title: "The first known",
      subtitle: "computer virus,",
      description: "Creeper, is created as an experiment.",
      icon: Bug,
      position: "bottom",
    },
    {
      year: "1983",
      title: 'The term',
      subtitle: '"cybersecurity"',
      description: "is first used.",
      icon: Shield,
      position: "top",
    },
    {
      year: "2007",
      title: "CITC launches",
      subtitle: "Computer Emergency",
      description: "Response Team (CERT",
      icon: Users,
      position: "bottom",
    },
    {
      year: "2012",
      title: "First formal National",
      subtitle: "Cybersecurity Strategy",
      description: "was introduced to improve governance.",
      icon: ShieldCheck,
      position: "top",
    },
    {
      year: "2017",
      title: "Establishment of the",
      subtitle: "National Cybersecurity",
      description: "Authority (NCA)",
      icon: FileText,
      position: "bottom",
    },
    {
      year: "Present",
      title: "Persistent cyber",
      subtitle: "threat landscape.",
      description: "",
      icon: AlertTriangle,
      position: "top",
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
        <div className="mb-20 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#132D5F] tracking-tight">
            TIMELINE
          </h1>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative px-32">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-32 right-32 h-2 bg-gradient-to-r from-transparent via-[#5B7AAE] to-transparent transform -translate-y-1/2 rounded-full"></div>

          {/* Timeline Events */}
          <div className="relative" style={{ minHeight: "600px" }}>
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isTop = event.position === "top";
              const leftPosition = `calc(${(index / (timelineEvents.length - 1)) * 100}%)`;

              return (
                <div
                  key={index}
                  className="absolute animate-fade-in-up"
                  style={{
                    left: leftPosition,
                    top: isTop ? "0" : "auto",
                    bottom: isTop ? "auto" : "0",
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className={`flex flex-col items-center ${isTop ? "" : "flex-col-reverse"}`}>
                    {/* Content Card */}
                    <div className="group relative w-64 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300 overflow-hidden" style={{ transform: "translateX(-50%)" }}>
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F]/0 to-slate-500/0 group-hover:from-[#132D5F]/5 group-hover:to-slate-500/5 transition-all duration-500 rounded-2xl"></div>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h2 className="text-4xl font-bold text-[#132D5F] mb-4">
                          {event.year}
                        </h2>
                        <p className="text-slate-700 text-base leading-relaxed font-medium">
                          {event.title}
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed font-medium">
                          {event.subtitle}
                        </p>
                        {event.description && (
                          <p className="text-slate-600 text-sm leading-relaxed mt-2">
                            {event.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Corner Accent */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#132D5F]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Connecting Line */}
                    <div className={`w-1 bg-gradient-to-b from-[#5B7AAE] to-[#5B7AAE] ${isTop ? "h-20" : "h-20"}`}></div>

                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F] to-[#5B7AAE] rounded-full blur-xl opacity-40 scale-125"></div>

                      {/* Main Circle with Border */}
                      <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-all duration-500">
                        {/* Inner Background Circle */}
                        <div className="absolute inset-3 bg-gradient-to-br from-[#132D5F] to-[#1a3a6b] rounded-full"></div>

                        {/* Inner Glow */}
                        <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

                        {/* Icon */}
                        <IconComponent
                          className="w-10 h-10 text-white relative z-10"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#5B7AAE] to-transparent"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;

                return (
                  <div
                    key={index}
                    className="relative flex gap-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0 z-10">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#132D5F] to-[#5B7AAE] rounded-full blur-lg opacity-40 scale-125"></div>

                      {/* Main Circle */}
                      <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        {/* Inner Background Circle */}
                        <div className="absolute inset-2 bg-gradient-to-br from-[#132D5F] to-[#1a3a6b] rounded-full"></div>

                        {/* Icon */}
                        <IconComponent
                          className="w-7 h-7 text-white relative z-10"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50">
                      {/* Content */}
                      <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-[#132D5F] mb-3">
                          {event.year}
                        </h2>
                        <p className="text-slate-700 text-base leading-relaxed font-medium">
                          {event.title}
                        </p>
                        <p className="text-slate-700 text-base leading-relaxed font-medium">
                          {event.subtitle}
                        </p>
                        {event.description && (
                          <p className="text-slate-600 text-sm leading-relaxed mt-2">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default TimelineSection; 