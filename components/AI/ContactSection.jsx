"use client";

import { useState } from "react";
import { X } from "lucide-react";

const DEFAULT_TOP = {
  heading: "Governed AI, human-in-the-loop design, and measurable outcomes",
  paragraphs: [
    "Every LSC engagement is designed around responsible AI principles. Human decision-makers remain central. AI systems are governed, transparent, and aligned with organisational values. Data sovereignty is protected. Deployment is phased, with readiness gates at each stage.",
    "For government, defence, and GCC clients, LSC's approach meets the governance and security standards these environments demand.",
  ],
};

const DEFAULT_BANNER = {
  heading: "Book a call with the LSC team",
  subheading: "to discuss how the Capability Transformation Architecture applies to your organisation.",
  buttonText: "BOOK FREE SESSION",
};

export default function ContactSection({ top, banner }) {
  const resolvedTop = top ?? DEFAULT_TOP;
  const resolvedBanner = banner ?? DEFAULT_BANNER;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const inputClass =
    "w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0E2253] transition-colors text-sm";

  return (
    <>
      <section id="contact-form" className="bg-white py-12 sm:py-16 lg:py-12">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

          {/* Top heading + paragraphs */}
          {(resolvedTop.heading || resolvedTop.paragraphs?.length) && (
            <div className="mb-12 sm:mb-10">
              {resolvedTop.heading && (
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight text-gray-900 mb-6">
                  {resolvedTop.heading}
                </h2>
              )}
              {resolvedTop.paragraphs?.length > 0 && (
                <div className="space-y-4">
                  {resolvedTop.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          
        

        </div>
      </section>

     
      

      <style jsx>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
