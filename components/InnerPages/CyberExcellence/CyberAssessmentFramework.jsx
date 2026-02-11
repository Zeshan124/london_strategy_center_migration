"use client";

import React from "react";
import { AlertTriangle, ShieldCheck, Search, Lock } from "lucide-react";

const CyberAssessmentFramework = () => {
  const frameworks = [
    {
      icon: AlertTriangle,
      title: "MINIMISING IMPACT OF INCIDENTS",
      description:
        "Centers on response planning and learning from past incidents to reduce future damage.",
      position: "top-left",
    },
    {
      icon: ShieldCheck,
      title: "MANAGING SECURITY RISK",
      description:
        "Use governance, risk, asset, and supply chain management to mitigate potential threats.",
      position: "top-right",
    },
    {
      icon: Search,
      title: "DETECTING CYBERSECURITY EVENTS",
      description:
        "Security monitoring and threat hunting to identify and address security incidents.",
      position: "bottom-left",
    },
    {
      icon: Lock,
      title: "PROTECTING AGAINST CYBER ATTACK",
      description:
        "Service protection, identity control, data security, and staff training to prevent breaches.",
      position: "bottom-right",
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
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0E2253] text-white text-xs font-semibold rounded-full shadow-lg uppercase tracking-wider">
              🔒 Framework Overview
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
            CYBER ASSESSMENT FRAMEWORK
          </h1>

          <p className="text-slate-600 text-lg max-w-5xl leading-relaxed">
            We follow the UK's Cyber Assessment Framework (CAF), taking a
            systematic and comprehensive approach to assessing how effectively
            the organization responsible is managing cyber risks to essential
            functions.
          </p>
        </div>

        {/* Framework Badge */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="inline-block relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Main Badge */}
            <div className="relative bg-[#132D5F] text-white px-8 py-5 font-black text-xl md:text-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[#132D5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 tracking-wide">
                NCSC CYBER ASSESSMENT FRAMEWORK
              </span>
            </div>

            {/* Arrow */}
            <div className="absolute right-0 top-0 translate-x-full">
              <div className="w-0 h-0 border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent border-l-[25px] border-l-slate-800"></div>
            </div>
          </div>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          {frameworks.map((framework, index) => {
            const IconComponent = framework.icon;
            const isTopRow = index < 2;

            return (
              <div
                key={index}
                className={`relative animate-fade-in-up ${
                  isTopRow ? "lg:pb-12" : "lg:pt-12"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300 overflow-hidden h-full">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-slate-50/0 to-gray-50/0 group-hover:from-blue-50/50 group-hover:via-slate-50/30 group-hover:to-gray-50/50 transition-all duration-500 rounded-3xl"></div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-slate-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Content Layout */}
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Text Content */}
                    <div className="flex-1 order-2 md:order-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-slate-800 transition-colors duration-300">
                        {framework.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {framework.description}
                      </p>
                    </div>

                    {/* Icon Container */}
                    <div className="relative flex-shrink-0 order-1 md:order-2">
                      {/* Connecting Line to Center - Desktop Only */}
                      <div
                        className={`hidden lg:block absolute ${
                          isTopRow ? "top-full" : "bottom-full"
                        } left-1/2 -translate-x-1/2 w-px ${
                          isTopRow ? "h-12" : "h-12"
                        } bg-gradient-to-b ${
                          isTopRow
                            ? "from-slate-300 to-transparent"
                            : "from-transparent to-slate-300"
                        }`}
                      ></div>

                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>

                      {/* Main Circle */}
                      <div className="relative w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white">
                        {/* Inner Glow */}
                        <div className="absolute inset-3 bg-gradient-to-br from-blue-500/20 to-slate-500/20 rounded-full group-hover:from-blue-500/40 group-hover:to-slate-500/40 transition-all duration-500"></div>

                        {/* Icon */}
                        <IconComponent
                          className="w-11 h-11 text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Pulse Ring Animation */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* Bottom Corner Accent */}
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "bottom-0 right-0" : "bottom-0 left-0"
                    } w-24 h-24 bg-gradient-to-${
                      index % 2 === 0 ? "tl" : "tr"
                    } from-blue-500/5 to-transparent rounded-${
                      index % 2 === 0 ? "tl" : "tr"
                    }-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Decorative Dot */}
                  <div
                    className={`absolute bottom-6 ${
                      index % 2 === 0 ? "right-6" : "left-6"
                    } w-2 h-2 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-150`}
                  ></div>
                </div>

                {/* Card Number Badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white z-20">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div
          className="mt-20 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-[#132D5F] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-center sm:text-left text-base sm:text-xl lg:text-3xl font-normal text-white lg:flex-shrink-0">
                  Comprehensive Security Assessment
                </h3>
                <p className="text-blue-100 text-lg">
                  Our framework ensures your organization meets the highest
                  cybersecurity standards
                </p>
              </div>
              <div className="flex gap-4">
                <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
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

export default CyberAssessmentFramework;
