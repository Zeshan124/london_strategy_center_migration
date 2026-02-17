"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CertificationLevel() {
  const certifications = [
    {
      number: "1",
      title: "Entry Level",
      desc: "Self-assessment for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-1.png",
    },
    {
      number: "2",
      title: "Foundation Level",
      desc: "Additional controls for low-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-2.png",
    },
    {
      number: "3",
      title: "Certified Level",
      desc: "Independent assessment for moderate-risk organisations.",
      img: "/images/InnerPages/cyberexcellence/Level-3.png",
    },
    {
      number: "4",
      title: "Assured Level",
      desc: "Highest standard for critical infrastructure.",
      img: "/images/InnerPages/cyberexcellence/Level-4.png",
    },
  ];

  return (
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
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300"
            >
              {/* Card Content */}
              <div className="flex flex-col items-center sm:items-start">
                {/* Logo Image - Responsive sizing */}
                <div className="mb-4 sm:mb-5 md:mb-6 w-full flex justify-center sm:justify-start">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
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
                <h3 className="text-lg sm:text-xl md:text-xl text-gray-900 mb-2 sm:mb-3 text-center sm:text-left">
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

        {/* CTA Section - Fully Responsive */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-[#132D5F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-normal text-white mb-3 md:mb-2">
                  Ready to get Certified?
                </h3>
                <p className="text-white text-sm sm:text-base lg:text-base leading-relaxed">
                  Join thousands of organisations improving their cybersecurity
                  posture across the Middle East.
                </p>
              </div>

              {/* Buttons - Responsive stacking */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto md:flex-shrink-0">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">GET CERTIFIED TODAY</span>
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base rounded-xl border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  LEARN MORE
                  <span className="text-base sm:text-xl px-2">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
