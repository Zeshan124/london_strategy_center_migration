"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
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
    setShowForm(false);
    setShowSuccessModal(true);
    setFormData({ fullName: "", jobTitle: "", company: "", email: "", contactNumber: "", message: "" });
  };

  return (
    <>
      {/* Trigger Section */}
      <section className="bg-[#f0f0f0] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">

          {/* Top: Description + Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-12">
            {/* Left: Description */}
            <div className="bg-white rounded-lg p-6 sm:p-8 text-sm sm:text-base text-gray-800 leading-relaxed shadow-sm">
              <p className="mb-4">
                Cyber Excellence Level 1 is recommended as a minimum standard of cybersecurity that every organisation — no matter its size — should aim for.
              </p>
              <p>
                To find out more about our certifications or to have a conversation with one of our experts about how we can support you.
              </p>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2253] mb-2">CONTACT US</h2>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/globe.png" alt="Website" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display = "none"; }} />
                <span>www.londonstrategycentre.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display = "none"; }} />
                <span>London Strategy Centre</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/images/icons/mail.svg" alt="Email" className="w-5 h-5 shrink-0" onError={(e) => { e.target.style.display = "none"; }} />
                <a href="mailto:Cyberexcellence@londonstrategycentre.com" className="hover:text-[#0E2253] transition-colors">
                  Cyberexcellence@londonstrategycentre.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-700">
                <img src="/images/icons/location.svg" alt="Location" className="w-5 h-5 shrink-0 mt-0.5" onError={(e) => { e.target.style.display = "none"; }} />
                <span>45 Albemarle Street, 3rd Floor, Mayfair, W1S 4JL, London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <p className="text-sm text-gray-800 mb-6">
            Please share more details of your enquiry by completing the form below:
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-3.5 bg-[#0E2253] text-white font-semibold text-sm hover:bg-[#1a3570] transition-all duration-300 uppercase tracking-wide"
          >
            Register Now
          </button>
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
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">Register Now</h2>
              <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
                CYBER EXCELLENCE — CONTACT US
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Job Title / Position</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Company & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company/organization"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-900">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-900">Message / Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors text-sm resize-y"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#0E2253] text-white font-semibold text-sm hover:bg-[#1a3570] transition-all duration-300 uppercase tracking-wide"
                >
                  Register Now
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
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your enquiry has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">Our team will be in touch shortly.</p>
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
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
      `}</style>
    </>
  );
}
