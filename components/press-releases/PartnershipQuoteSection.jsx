"use client";

import Image from "next/image";

export default function PartnershipQuoteSection() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Quote and Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Quote Content */}
          <div className="space-y-8">
            {/* Quote 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0E2253] rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 mt-4">
                "We are thrilled to be working with{" "}
                <span className="font-bold text-red-600">MILE</span>, an
                organisation that shares our passion for improving management
                practice and executive development," said{" "}
                <span className="font-bold text-red-600">Dr. Imran Zawwar</span>{" "}
                from{" "}
                <span className="font-bold text-red-600">
                  London Strategy Centre
                </span>
                . "We look forward to a productive partnership that will benefit
                both organisations and the broader management community."
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">
                  <Image
                    src="/images/InnerPages/cyberexcellence/imran-zawwar.jpg"
                    alt="Dr. Imran Zawwar"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Dr. Imran Zawwar
                  </div>
                  <div className="text-sm text-slate-600">
                    London Strategy Centre
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0E2253] rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 mt-4">
                <span className="font-bold text-red-600">BAE Systems</span>{" "}
                Saudi Development and Training Company Ltd{" "}
                <span className="font-bold text-red-600">(BAES SDT)</span> has
                signed a Memorandum of Understanding{" "}
                <span className="font-bold text-red-600">(MoU)</span> with{" "}
                <span className="font-bold text-red-600">
                  London Strategy Centre (LSC)
                </span>
                . This agreement is aimed at strengthening strategic
                collaboration between the two organizations in the areas of
                executive development, promoting innovation in technical
                training in aviation and defence sectors, and human capital
                development.
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                  <Image
                    src="/images/InnerPages/cyberexcellence/mile.jfif"
                    alt="BAE Systems SDT"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    BAE Systems SDT
                  </div>
                  <div className="text-sm text-slate-600">
                    Strategic Partnership
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Signing Photo */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/InnerPages/cyberexcellence/Main-Slider.jpg"
                  alt="Partnership signing ceremony between London Strategy Centre and MILE"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-bold text-lg mb-1">
                    Official Partnership Signing
                  </h3>
                  <p className="text-sm text-slate-300">
                    Representatives from London Strategy Centre and MILE
                    formalize their strategic collaboration
                  </p>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-900">
                    Live Event
                  </span>
                </div>
              </div>
            </div>

            {/* Image Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                <div className="text-2xl font-bold text-[#0E2253] mb-1">2</div>
                <div className="text-xs text-slate-600 uppercase tracking-wide">
                  Organizations
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                <div className="text-2xl font-bold text-[#0E2253] mb-1">
                  2026
                </div>
                <div className="text-xs text-slate-600 uppercase tracking-wide">
                  Year
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Contact Section */}
        <div className="mt-16 p-8 md:p-10 bg-[#0E2253] rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Media Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    Press Relations
                  </p>
                  <p className="text-slate-300 text-sm mb-3">
                    London Strategy Centre
                  </p>
                  <a
                    href="mailto:press@londonstrategy.com"
                    className="text-teal-400 hover:text-teal-300 transition-colors text-sm block mb-1"
                  >
                    press@londonstrategy.com
                  </a>
                  <p className="text-slate-400 text-sm">+44 20 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Contact 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    Media Inquiries
                  </p>
                  <p className="text-slate-300 text-sm mb-3">MILE</p>
                  <a
                    href="mailto:media@mile.sa"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm block mb-1"
                  >
                    media@mile.sa
                  </a>
                  <p className="text-slate-400 text-sm">+966 11 234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Marker */}
        <div className="text-center mt-12 text-slate-400">
          <span className="text-3xl font-light tracking-widest">###</span>
        </div>
      </div>
    </div>
  );
}
