"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    enquiry: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      companyWebsite: "",
      enquiry: "",
    });
  };

  const inputClass =
    "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";

  return (
    <>
      <section className="bg-white py-12 sm:py-16 md:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-3">
            Take the next step towards stronger cyber resilience
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
            Submit your details and a member of our team will be in touch to discuss how London Strategy Centre can support your organisation.
          </p>

          {/* Sub-heading */}
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-8">
            Request a Consultation
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputClass}
              />
            </div>

            {/* Row 2: Phone & Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className={inputClass}
              />
            </div>

            {/* Row 3: Company Website (full width) */}
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="Company Website"
              className={inputClass}
            />

            {/* Row 4: Enquiry textarea (full width) */}
            <textarea
              name="enquiry"
              required
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Details of your enquiry"
              rows={5}
              className={`${inputClass} resize-y`}
            />

            {/* Privacy Notice */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
              London Strategy Centre is committed to protecting and respecting your privacy. The information you provide will only be used to respond to your enquiry and provide the services you request. For more information on how we handle your data, please review our{" "}
              <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">
                (privacy-policy)
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-78 py-6 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#0E2253] transition-all duration-300"
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>

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
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your consultation request has been received.</p>
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
    </>
  );
}
