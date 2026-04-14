"use client";

import { useState } from "react";
import Image from "next/image";
import AssessmentProcessByLevel from "./AssessmentProcessByLevel";

export default function CertificationLevel() {
  const [showAssessment, setShowAssessment] = useState(false);
  const certifications = [
    {
      number: "1",
      title: "Aware Level",
      desc: "Self-assessment for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-1.svg",
    },
    
    {
      number: "2",
      title: "Basic Level",
      desc: "Independent assessment for moderate-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-3.svg",
    },
    {
      number: "3",
      title: "Foundation Level",
      desc: "Additional controls for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-2.svg",
    },
    {
      number: "4",
      title: "Holistic Level",
      desc: "Highest standard for critical infrastructure.",
      img: "/images/InnerPages/cyberexcellence/Level-4.svg",
    },
  ];

  return (
    <>
    <section id="certification" className="py-12 sm:py-16 md:py-10 bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Regional Solution Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
            A Regional Solution for a Regional Challenge
          </h2>
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            As the Middle East continues to rely more and more on digital
            platforms, tough cybersecurity measures are not only a business
            necessity but also a regulatory requirement. The region faces
            escalating cyber risks that impact organisations across both the
            public and private sectors. Cyber Excellence was established to
            address these local challenges, aligning its certification model
            with regional frameworks such as the Saudi National Cybersecurity
            Authority (NCA). Essential Cybersecurity Controls (ECC), the UAE
            Information Assurance Standards (IAS), and the Gulf Cooperation
            Council (GCC) Cybersecurity Strategy. By harmonising with these and
            other national mandates, Cyber Excellence ensures that certification
            is regionally relevant and internationally credible.
          </p>
        </div>

        {/* Certification Levels Header */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Certification Levels
          </h2>
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
            With "Cyber Excellence, organisations in all sectors can scale
            securely, governments can ensure robust supply chains, and the
            Region can move towards unified cybersecurity standards aligned with
            digital transformation."
          </p>
        </div>

        {/* Certification Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex flex-col items-center sm:items-start">
                {/* Logo Image - Responsive sizing */}
                <div className="mb-4 sm:mb-5 md:mb-6 w-full flex justify-center sm:justify-start">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      width={192}
                      height={192}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Title - Responsive text */}
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3 text-center sm:text-left">
                  {cert.title}
                </h3>

                {/* Description - Responsive text */}
                <p className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={() => setShowAssessment((prev) => !prev)}
            className="px-10 py-3.5 bg-[#0E2253] text-white text-sm rounded-xl border-2 border-[#0E2253] hover:bg-transparent hover:text-[#0E2253] transition-all duration-300 uppercase tracking-widest"
          >
            {showAssessment ? "Show Less ↑" : "Learn More ↗"}
          </button>
        </div>
      </div>
    </section>

    {showAssessment && <AssessmentProcessByLevel />}
    </>
  );
}
