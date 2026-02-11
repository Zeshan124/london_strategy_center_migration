"use client";

import React from "react";

const CertificationLevels = () => {
  const levels = [
    {
      number: 1,
      title: "ENTRY LEVEL",
      description: "Self-assessment for low-risk organisations.",
      accentFrom: "from-[#0E2253]",
      accentTo: "to-[#0E2253]",
      accentVia: "via-[#0E2253]",
      badgeFrom: "from-[#0E2253]",
      badgeTo: "to-[#0E2253]",
      borderHover: "hover:border-[#0E2253]",
      glowBg: "bg-[#0E2253]",
      accentText: "text-[#0E2253]",
     ringColor: "border-[#0E2253]",
      dotGradient: "from-amber-500 to-orange-500",
      shieldAccent: "#0E2253",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-9 h-9 text-white relative z-10"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "FOUNDATION LEVEL",
      description: "Additional controls for low-risk organisations.",
     accentFrom: "from-[#0E2253]",
      accentTo: "to-[#0E2253]",
      accentVia: "via-[#0E2253]",
      badgeFrom: "from-[#0E2253]",
      badgeTo: "to-[#0E2253]",
      borderHover: "hover:border-[#0E2253]",
      glowBg: "bg-[#0E2253]",
      accentText: "text-[#0E2253]",
     ringColor: "border-[#0E2253]",
      dotGradient: "from-amber-500 to-orange-500",
      shieldAccent: "#0E2253",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-9 h-9 text-white relative z-10"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "CERTIFIED LEVEL",
      description: "Independent assessment for moderate-risk organisations.",
      accentFrom: "from-[#0E2253]",
      accentTo: "to-[#0E2253]",
      accentVia: "via-[#0E2253]",
      badgeFrom: "from-[#0E2253]",
      badgeTo: "to-[#0E2253]",
      borderHover: "hover:border-[#0E2253]",
      glowBg: "bg-[#0E2253]",
      accentText: "text-[#0E2253]",
     ringColor: "border-[#0E2253]",
      dotGradient: "from-amber-500 to-orange-500",
      shieldAccent: "#0E2253",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-9 h-9 text-white relative z-10"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "ASSURED LEVEL",
      description: "Highest standard for critical infrastructure.",
      accentFrom: "from-[#0E2253]",
      accentTo: "to-[#0E2253]",
      accentVia: "via-[#0E2253]",
      badgeFrom: "from-[#0E2253]",
      badgeTo: "to-[#0E2253]",
      borderHover: "hover:border-[#0E2253]",
      glowBg: "bg-[#0E2253]",
      accentText: "text-[#0E2253]",
     ringColor: "border-[#0E2253]",
      dotGradient: "from-amber-500 to-orange-500",
      shieldAccent: "#0E2253",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-9 h-9 text-white relative z-10"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 px-4 py-20 relative overflow-hidden">
      {/* ── Subtle background pattern ── */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(30deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b),linear-gradient(150deg,#1e293b_12%,transparent_12.5%,transparent_87%,#1e293b_87.5%,#1e293b)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]"></div>
      </div>

      {/* ── Decorative blurs ── */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0E2253] text-white text-xs font-semibold rounded-full shadow-lg uppercase tracking-wider">
              🛡️ Security Excellence Framework
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
            CERTIFICATIONS LEVEL
            <br />
          </h1>
          <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
            The Middle East faces unique cybersecurity challenges that require
            specialized solutions. Our{" "}
            <span className="text-teal-600 font-semibold">
              Cyber Excellence
            </span>{" "}
            certification is designed specifically for the region.
          </p>
        </div>

        {/* ── Progress arrow bar ── */}
        <div
          className="flex items-center justify-start mb-16 overflow-x-auto pb-2 animate-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          <div className="flex items-center min-w-max gap-5">
            {levels.map((level, index) => (
              <React.Fragment key={level.number}>
                <div className="relative group transform hover:scale-105 transition-all duration-500">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${level.accentFrom} ${level.accentTo} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  {/* Bar */}
                  <div className="relative bg-[#0E2253] text-white px-6 md:px-8 py-3.5 md:py-4 font-bold text-sm md:text-base whitespace-nowrap shadow-lg overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${level.accentFrom} ${level.accentTo} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                    <span className="relative z-10">{level.title}</span>
                  </div>
                  {/* Arrow tip */}
                  <div className="absolute right-0 top-0 translate-x-full">
                    <div className="w-0 h-0 border-t-[28px] md:border-t-[32px] border-t-transparent border-b-[28px] md:border-b-[32px] border-b-transparent border-l-[18px] md:border-l-[22px] border-l-[#0E2253]"></div>
                  </div>
                </div>
                {index < levels.length - 1 && (
                  <div className="w-3 md:w-5 flex-shrink-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Certification Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <div
              key={level.number}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* ── White card ── */}
              <div
                className={`relative h-full bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300 overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-blue-50/0 to-slate-50/0 group-hover:from-teal-50/40 group-hover:via-blue-50/20 group-hover:to-slate-50/40 transition-all duration-500 rounded-3xl"></div>

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.accentFrom} ${level.accentVia} ${level.accentTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* ── Icon circle ── */}
                <div className="relative flex-shrink-0 mb-5 flex justify-center">
                  {/* Outer glow */}
                  <div
                    className={`absolute inset-0 ${level.glowBg} rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 scale-75 mx-auto w-20 h-20`}
                  ></div>

                  {/* Circle */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white">
                    {/* Inner gradient wash */}
                    <div
                      className={`absolute inset-2 bg-gradient-to-br ${level.accentFrom} ${level.accentTo} opacity-20 group-hover:opacity-40 rounded-full transition-all duration-500`}
                    ></div>
                    {level.icon}
                  </div>

                  {/* Pulse ring */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 ${level.ringColor} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000`}
                  ></div>
                </div>

                {/* ── Shield SVG (compact, centered) ── */}
                <div className="flex justify-center mb-5">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 ${level.glowBg} rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                    ></div>

                    {/* Outer shield */}
                    <svg
                      viewBox="0 0 200 220"
                      className="w-full h-full absolute"
                    >
                      <defs>
                        <linearGradient
                          id={`cert-outer-${level.number}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{
                              stopColor: level.shieldAccent,
                              stopOpacity: 0.25,
                            }}
                          />
                          <stop
                            offset="100%"
                            style={{
                              stopColor: level.shieldAccent,
                              stopOpacity: 0.45,
                            }}
                          />
                        </linearGradient>
                        <filter id={`cert-glow-${level.number}`}>
                          <feGaussianBlur
                            stdDeviation="3"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path
                        d="M100 10 L170 40 L170 110 Q170 160 100 210 Q30 160 30 110 L30 40 Z"
                        fill={`url(#cert-outer-${level.number})`}
                        stroke={level.shieldAccent}
                        strokeWidth="3"
                        filter={`url(#cert-glow-${level.number})`}
                      />
                    </svg>

                    {/* Middle shield */}
                    <svg
                      viewBox="0 0 200 220"
                      className="w-10/12 h-10/12 absolute"
                    >
                      <path
                        d="M100 20 L160 45 L160 105 Q160 145 100 190 Q40 145 40 105 L40 45 Z"
                        fill="none"
                        stroke={level.shieldAccent}
                        strokeWidth="2"
                        strokeOpacity="0.4"
                      />
                    </svg>

                    {/* Number */}
                    <div className="relative z-10">
                      <span
                        className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${level.accentFrom} ${level.accentTo} group-hover:scale-110 transition-transform duration-500 inline-block`}
                      >
                        {level.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight group-hover:text-slate-800 transition-colors duration-300">
                    {level.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-600 transition-colors duration-300 mb-5">
                    {level.description}
                  </p>

                  {/* CYBER EXCELLENCE logo */}
                  <div className="mb-4">
                    <div
                      className={`text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${level.accentFrom} ${level.accentTo} tracking-wider inline-block group-hover:scale-105 transition-transform duration-300`}
                    >
                      CYB<span className="opacity-70">≡</span>R
                    </div>
                    <div className="text-[9px] text-slate-400 tracking-[0.35em] mt-0.5 font-semibold uppercase">
                      Excellence
                    </div>
                  </div>

                  {/* Level badge pill */}
                  <div className="inline-block">
                    <div
                      className={`relative px-4 py-1.5 bg-gradient-to-r ${level.badgeFrom} ${level.badgeTo} rounded-full shadow-md overflow-hidden group-hover:shadow-lg transition-shadow duration-500`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${level.accentFrom} ${level.accentTo} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      ></div>
                      <span className="relative z-10 text-white text-xs font-bold tracking-wider">
                        LEVEL {level.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-teal-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative dot */}
                <div
                  className={`absolute bottom-5 right-5 w-2 h-2 bg-gradient-to-br ${level.dotGradient} rounded-full opacity-0 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500`}
                ></div>
              </div>

              {/* ── Number badge (top-right corner) ── */}
              <div
                className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${level.badgeFrom} ${level.badgeTo} rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white z-20`}
              >
                {level.number}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-20 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-xl border border-slate-200 w-full">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Ready to get certified?
              </h3>
              <p className="text-slate-600">
                Join thousands of organisations improving their cybersecurity
                posture across the Middle East.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <button className="group relative px-8 py-4 bg-[#0E2253] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get Certified Today</span>
                <div className="absolute inset-0 bg-[#0E2253] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transform hover:scale-105 transition-all duration-300 border-2 border-slate-300">
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

export default CertificationLevels;
