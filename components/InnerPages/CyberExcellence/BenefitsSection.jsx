"use client";

import React from "react";
import {
  Shield,
  ShieldCheck,
  Award,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "ENTRY LEVEL",
      description:
        "Align with key national regulations, including NCA ECC, UAE IAS, ensuring regulator and partner confidence.",
      position: "top-left",
    },
    {
      icon: Shield,
      title: "RISK REDUCTION",
      description:
        "Apply controls addressing most regional threats, including those flagged by ARCC and local intelligence",
      position: "top-center",
    },
    {
      icon: Award,
      title: "TRUST",
      description:
        "Prove proactive data protection and resilience through independent assessment recognised across Middle Eastern markets.",
      position: "top-right",
    },
    {
      icon: RefreshCw,
      title: "RESILIENCE",
      description:
        "Certified controls help prevent, detect, and respond to cyber threats, ensuring business continuity.",
      position: "bottom-left",
    },
    {
      icon: TrendingUp,
      title: "CREDIBILITY",
      description:
        "Certification demonstrates strong cybersecurity commitment, boosting trust with customers, partners, and investors.",
      position: "bottom-center",
    },
    {
      icon: Users,
      title: "ADAPTABILITY",
      description:
        "Cyber Excellence certification evolves with threats, supporting growth and digital transformation.",
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
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0E2253] text-white text-xs font-semibold rounded-full shadow-lg uppercase tracking-wider">
              ✨ Why Choose Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
            BENEFITS OF CYBER <br /> EXCELLENCE
            <br />
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
             
            </span> */}
          </h1>
          {/* <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div> */}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300 overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-blue-50/0 to-slate-50/0 group-hover:from-teal-50/50 group-hover:via-blue-50/30 group-hover:to-slate-50/50 transition-all duration-500 rounded-3xl"></div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Content Container */}
                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon Container */}
                    <div className="relative flex-shrink-0">
                      {/* Outer Circle - Animated */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>

                      {/* Main Circle */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white">
                        {/* Inner Glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full group-hover:from-teal-500/40 group-hover:to-blue-500/40 transition-all duration-500"></div>

                        {/* Icon */}
                        <IconComponent
                          className="w-9 h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-500"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Connecting Line */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-slate-300 to-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-slate-800 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-teal-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Dot */}
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-150"></div>
                </div>

                {/* Card Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-20 text-center animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-[#132D5F] rounded-2xl p-8 shadow-xl border border-slate-200">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-white">
                Join thousands of organizations improving their cybersecurity
                posture
              </p>
            </div>
            <div className="flex gap-4">
              <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Learn more</span>
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  Contact us
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

export default BenefitsSection;
