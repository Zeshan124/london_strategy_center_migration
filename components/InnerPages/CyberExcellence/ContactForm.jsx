"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    company: "",
    email: "",
    contactNumber: "",
    message: "",
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
      jobTitle: "",
      company: "",
      email: "",
      contactNumber: "",
      message: "",
    });
  };

  const closeModal = () => setShowSuccessModal(false);

  return (
    <>
      <section className="bg-[#f0f0f0] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">

          {/* Top Section: Description + Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-12">
            {/* Left: Description Box */}
            <div className="bg-white rounded-lg p-6 sm:p-8 text-sm sm:text-base text-gray-800 leading-relaxed shadow-sm">
              <p className="mb-4">
                Cyber Excellence Level 1 is recommended as a minimum standard of cybersecurity that every organisation - no matter its size - should aim for.
              </p>
              <p>
                To find out more about our certifications or to have a conversation with one of our experts about how we can support you
              </p>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2253] mb-2">CONTACT US</h2>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/globe.svg" alt="Website" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display='none'; }} />
                <span>www.londonstrategycentre.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display='none'; }} />
                <span>London Strategy Centre</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/mail.svg" alt="Email" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display='none'; }} />
                <a href="mailto:Cyberexcellence@londonstrategycentre.com" className="hover:text-[#0E2253] transition-colors">
                  Cyberexcellence@londonstrategycentre.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <img src="/images/icons/location.svg" alt="Location" className="w-5 h-5 shrink-0 mt-0.5" onError={(e) => { e.target.style.display='none'; }} />
                <span>45 Albemarle Street, 3rd Floor, Mayfair, W1S 4JL, London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <p className="text-sm text-gray-800 mb-6">
            Please share more details of your enquiry by completing the form below:
          </p>

          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name & Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-5">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-900 w-36 shrink-0">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-900 w-36 shrink-0">Job Title/Position:</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Row 2: Company & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-5">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-900 w-36 shrink-0">Company/Organization:</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company/organization"
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-900 w-36 shrink-0">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Row 3: Contact Number (half width) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mb-5">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-900 w-36 shrink-0">Contact Number:</label>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Row 4: Message (full width) */}
            <div className="flex items-start gap-4 mb-8">
              <label className="text-sm font-bold text-gray-900 w-36 shrink-0 mt-2">
                Message/Additional<br />Information:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                rows={5}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm resize-y"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-10 py-3 bg-[#0E2253] text-white font-semibold text-sm hover:bg-[#1a3570] transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your enquiry has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">Our team will be in touch shortly.</p>
              <button
                onClick={closeModal}
                className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </>
  );
}
