'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    organisation: '',
    email: '',
    whatsapp: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
            Contact: <a href="mailto:enquiries@londonstrategycentre.com" className="underline hover:text-gray-700 transition-colors">enquiries@londonstrategycentre.com</a>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
            REGISTER YOUR INTEREST AND OUR TEAM WILL BE IN TOUCH
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 sm:space-y-6">
          {/* Row 1: Full Name & Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Row 2: Organisation & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Organisation"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Official Email Address"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Row 3: WhatsApp & LinkedIn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Whatsapp Number"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
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
  );
}