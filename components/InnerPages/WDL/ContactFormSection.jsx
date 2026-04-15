"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContactFormSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    phone: "",
    linkedin: "",
    motivation: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccessModal(true);
    setFormData({ fullName: "", jobTitle: "", organisation: "", email: "", phone: "", linkedin: "", motivation: "" });
  };

  const inputClass =
    "w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0E2253] transition-colors text-sm";

  return (
    <>
      {/* Trigger Section */}
      <section id="contact-form" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="relative mx-4 sm:mx-6 lg:mx-16 xl:mx-20">
          <div className="bg-[#132D5F] rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">

              {/* Left: Text */}
              <div className="flex flex-col gap-3 lg:max-w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                  Ready to take the next step in your leadership journey?
                </h2>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Register your interest in the Women's Leadership Development Programme and a member of our team will be in touch.
                </p>
              </div>

              {/* Right: Button */}
              <div className="lg:shrink-0">
                <button
                  onClick={() => setShowForm(true)}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#0E2253] text-gray-900 rounded-xl text-sm text-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Register Your Interest
                </button>
              </div>

            </div>
          </div>
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
            {/* Close */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">
                Register Your Interest
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
                WOMEN'S LEADERSHIP DEVELOPMENT PROGRAMME
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className={inputClass}
                />
              </div>

              {/* Row 2: Organisation & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="organisation"
                  required
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Organisation"
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputClass}
                />
              </div>

              {/* Row 3: Phone & LinkedIn */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn Profile URL"
                  className={inputClass}
                />
              </div>

              {/* Motivation textarea */}
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="What motivates you to join this programme? (optional)"
                rows={4}
                className={`${inputClass} resize-y`}
              />

              {/* Privacy notice */}
              <p className="text-xs text-gray-500 leading-relaxed">
                London Strategy Centre is committed to protecting your privacy. Your information will only be used to respond to your enquiry. For more information please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">
                  privacy policy
                </a>
                .
              </p>

              {/* Submit */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-12 sm:px-16 py-3.5 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300"
                >
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
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your interest has been registered.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">A member of our team will be in touch shortly.</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300"
              >
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
