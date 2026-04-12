"use client";

import Image from "next/image";

export default function CyberSecurityHero() {
  return (
   <div className="min-h-screen bg-white lg:pt-28 py-0">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-8 md:py-8 lg:pt-16">

        {/* Hero Card */}
        <div className="rounded-2xl overflow-hidden relative min-h-[340px] sm:min-h-[420px]">
          {/* Background Image */}
          <Image
            src="/images/InnerPages/cyber-security/Slider.png"
            alt="Cyber Security"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center px-8 sm:px-10 md:px-12 py-12 h-full min-h-[340px] sm:min-h-[420px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-3">
              Cyber Security
            </h1>
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6">
              Services for Organisations
            </h2>
            {/* <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-md">
              Cyber threats do not respect organisational boundaries, supply chain
              structures, or compliance timelines. Yet most organisations manage cyber
              risk in fragments - certification here, penetration testing there, governance
              bolted on as an afterthought. The result is a security posture that looks
              complete on paper but fractures under pressure.
            </p> */}
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-transparent border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                REQUEST A CONSULTATION
              </button>
             {/* <button className="px-5 py-2.5 bg-transparent border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
  DOWNLOAD CYBER OVERVIEW
  <svg className="w-3.5 h-3.5 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
</button> */}
            </div>
          </div>
        </div>

        {/* Below-card description */}
        <p className="mt-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          London Strategy Centre delivers structured cyber security services that connect technical assurance with strategic governance. Every engagement is designed to strengthen the organisation as a system - not to produce isolated reports that sit unread.
        </p>

        {/* Isolation from governance section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
            Security fails when it operates in isolation from governance
          </h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Organisations invest in firewalls, endpoint detection, and compliance certifications. These are necessary, however, they are not sufficient. The persistent gap is between technical controls and the governance structures that sustain them, between knowing a vulnerability exists and having the organisational capability to respond before it becomes an incident.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              This is where most cyber security support falls short. It addresses the technical layer without engaging the decision-making layer. It doesn't build the operational maturity to maintain it.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
