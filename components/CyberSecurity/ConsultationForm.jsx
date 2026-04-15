"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ConsultationForm() {
  const [showForm, setShowForm] = useState(false);
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
    setShowForm(false);
    setShowSuccessModal(true);
    setFormData({ fullName: "", email: "", phone: "", companyName: "", companyWebsite: "", enquiry: "" });
  };

  const inputClass =
    "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";

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
                  Take the next step towards stronger cyber resilience
                </h2>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                 Submit your details and a member of our team will be in touch to discuss how London Strategy Centre can support your organisation.
                </p>
              </div>

              {/* Right: Button */}
              <div className="lg:shrink-0">
                <button
                  onClick={() => setShowForm(true)}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#0E2253] text-gray-900 rounded-xl text-sm text-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Request a Consultation
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
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight mb-2">
                Request a Consultation
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Submit your details and a member of our team will be in touch shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="Company Website"
                className={inputClass}
              />

              <textarea
                name="enquiry"
                required
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Details of your enquiry"
                rows={5}
                className={`${inputClass} resize-y`}
              />

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                London Strategy Centre is committed to protecting and respecting your privacy. The information you provide will only be used to respond to your enquiry and provide the services you request. For more information on how we handle your data, please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">
                  privacy policy
                </a>
                .
              </p>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-16 py-4 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300"
                >
                  SUBMIT REQUEST
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
