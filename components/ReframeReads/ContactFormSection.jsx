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
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          {/* Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 tracking-wide">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>

          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-3xl text-gray-900 mb-3 sm:mb-4">
              Join Us as a Speaker - The Reframe Lab
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 tracking-wide">
              Share your expertise and inspire others at The Reframe Lab by
              becoming one of our featured speakers. Please fill out the form
              below with your details and relevant information about your
              speaking experience.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5 sm:space-y-6">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-3xl md:text-3xl text-gray-900 mb-3 sm:mb-4">
                Personal Information
              </h2>
            </div>

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
                name="Designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Row 3: Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
             

               <input
                type="text"
                name="Organisation / Company"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Organisation / Company"
                className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
              />

              <input
                type="text"
                name="Linkedin Profile URL"
                value={formData.linkedinProfileUrl}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL"
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
