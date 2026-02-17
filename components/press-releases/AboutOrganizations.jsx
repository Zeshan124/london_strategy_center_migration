"use client";

import { Building2, GraduationCap, Globe, Users } from "lucide-react";

export default function AboutOrganizations() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            About Our Organizations
          </h2>
        
        </div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* London Strategy Centre */}
          <div className="group relative rounded-2xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#0E2253] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              London Strategy Centre
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              An international leader in executive development and research, dedicated to
              transforming businesses through applied knowledge and industry partnerships.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                </div>
                <span className="text-sm text-slate-600">Global executive education programs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                </div>
                <span className="text-sm text-slate-600">Applied research and innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                </div>
                <span className="text-sm text-slate-600">Industry collaboration expertise</span>
              </li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-[#0E2253]">20+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0E2253]">5000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Executives</div>
              </div>
            </div>

            {/* Learn More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#0E2253] hover:text-[#0E2253]/80 font-medium text-sm group/link"
            >
              <span>Learn more</span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* MILE */}
          <div className="group relative bg-[##0E2253] rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#0E2253] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-slate-900 mb-4">MILE</h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              A leading provider of advanced end-to-end training services in Saudi Arabia,
              specializing in partnerships with internationally recognized educational bodies.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-sm text-slate-600">End-to-end training solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-sm text-slate-600">International academic partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-sm text-slate-600">Regional expertise in Saudi Arabia</span>
              </li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-[#0E2253]">15+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0E2253]">3000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Participants</div>
              </div>
            </div>

            {/* Learn More Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#0E2253] hover:text-[#0E2253]/80 font-medium text-sm group/link"
            >
              <span>Learn more</span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Partnership Highlights */}
        <div className="mt-12 bg-[#0E2253] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="font-bold text-lg mb-2">Global Reach</h4>
              <p className="text-slate-300 text-sm">
                Combined presence across Middle East, Europe, and beyond
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-bold text-lg mb-2">Shared Vision</h4>
              <p className="text-slate-300 text-sm">
                Commitment to transforming management practice worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-bold text-lg mb-2">Excellence</h4>
              <p className="text-slate-300 text-sm">
                Applied knowledge and industry-leading expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}