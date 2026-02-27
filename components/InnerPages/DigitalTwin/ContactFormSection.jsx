"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    objective: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organisation: "",
      objective: "",
    });
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          {/* Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
              Book a virtual one-one session with <span className="font-medium">Major General Paul Nanson CB CBE</span> 
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
              REGISTER YOUR INTEREST AND OUR TEAM WILL BE IN TOUCH
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5 sm:space-y-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Row 2: Phone & Organisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Organisation"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Row 3: Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <input
                type="text"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                placeholder="Objective"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSubmit}
                className="px-12 sm:px-16 md:px-24 py-3.5 sm:py-4 bg-[#0a1d4a] text-white rounded-lg font-medium text-sm hover:bg-[#1e3a6b] transition-all duration-300 uppercase tracking-wide"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Title */}
              <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                Thank you
              </h3>

              {/* Message */}
              <p className="text-gray-600 text-base leading-relaxed mb-2">
                Your session request has been received.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Our team will be in touch shortly.
              </p>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="px-12 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:bg-[#2d4a7a] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}