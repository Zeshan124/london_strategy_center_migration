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

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccessModal(true);
    setFormData({ fullName: "", email: "" });
  };

  const inputClass =
    "w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0E2253] transition-colors text-sm";

  return (
    <>
      <section id="contact-form" className="bg-white py-12 sm:py-16 lg:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

          {/* Top heading + paragraphs */}
          {(resolvedTop.heading || resolvedTop.paragraphs?.length) && (
            <div className="mb-12 sm:mb-16">
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

          {/* CTA Banner */}
          {resolvedBanner.heading && (
            <div className="bg-[#132D5F] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                    {resolvedBanner.heading}
                  </h3>
                  {resolvedBanner.subheading && (
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {resolvedBanner.subheading}
                    </p>
                  )}
                </div>
                {resolvedBanner.buttonText && (
                  <div className="lg:shrink-0">
                    <button
                      onClick={() => setShowForm(true)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0E2253] text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
                    >
                      {resolvedBanner.buttonText} ↗
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">
                {resolvedBanner.heading}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {resolvedBanner.subheading}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
              </div>
              <textarea name="motivation" value={formData.motivation} onChange={handleChange} placeholder="What would you like to discuss? (optional)" rows={4} className={`${inputClass} resize-y`} />
              <p className="text-xs text-gray-500 leading-relaxed">
                London Strategy Centre is committed to protecting your privacy. For more information please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">privacy policy</a>.
              </p>
              <div className="flex justify-end pt-2">
                <button type="submit" className="px-12 sm:px-16 py-3.5 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your request has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">A member of our team will be in touch shortly.</p>
              <button onClick={() => setShowSuccessModal(false)} className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
