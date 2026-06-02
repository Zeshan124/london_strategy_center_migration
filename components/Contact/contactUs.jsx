'use client';

import { useState } from 'react';
import { X, ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import { submitContactForm } from '@/lib/api/contact';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    company: '',
    category: 'general',
    information: 'general',
    message: '',
    consent: true
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', title: '', company: '', category: 'general', information: 'general', message: '', consent: true });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a1d4a] via-[#1e3a6b] to-[#4a7bb8] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-26 sm:py-20 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              We're here to help you unlock your organization's potential. Reach out to us for inquiries, partnerships, or to learn more about our programs.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <MapPin className="w-6 h-6 text-white mb-3" />
                <p className="text-sm text-white/80">45 Albemarle Street, 3rd Floor,
Mayfair, W1S 4JL, London, United Kingdom</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <Mail className="w-6 h-6 text-white mb-3" />
                <a href="mailto:enquiries@londonstrategycentre.com" className="text-sm text-white/80 hover:text-white transition-colors break-all">
                  enquiries@londonstrategycentre.com
                </a>
              </div>
              {/* <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <Phone className="w-6 h-6 text-white mb-3" />
                <p className="text-sm text-white/80">+44 20 1234 5678</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30C240 10 480 50 720 30C960 10 1200 50 1440 30V60H0V30Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Form Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-5">
          {/* Name - Full Width */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
          />

          {/* Email - Full Width */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
          />

          {/* Title & Company - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Category Dropdown */}
          {/* <div className="relative">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-[#0a1d4a] text-white rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1e3a6b] transition-all text-sm sm:text-base"
            >
              <option value="">Choose</option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="training">Training Programs</option>
              <option value="consultation">Consultation</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
          </div> */}

          {/* Information Dropdown */}
          {/* <div className="relative">
            <select
              name="information"
              value={formData.information}
              onChange={handleChange}
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-[#0a1d4a] text-white rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1e3a6b] transition-all text-sm sm:text-base"
            >
              <option value="">General Information</option>
              <option value="pricing">Pricing Information</option>
              <option value="schedule">Schedule Information</option>
              <option value="location">Location Information</option>
              <option value="custom">Custom Programs</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
          </div> */}

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            required
            rows={5}
            className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-3xl text-gray-900 placeholder-gray-600 focus:outline-none focus:border-gray-900 transition-colors resize-none text-sm sm:text-base"
          />

          {/* reCAPTCHA and Submit Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-2">
            {/* reCAPTCHA Placeholder */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded">
              <input
                type="checkbox"
                id="recaptcha"
                className="w-6 h-6 cursor-pointer"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer">
                I'm not a robot
              </label>
              <div className="ml-2">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="2" fill="#4285F4"/>
                  <path d="M16 8L12 16L16 24L20 16L16 8Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-12 sm:px-16 md:px-28 py-3.5 sm:py-4 bg-[#0a1d4a] text-white rounded-lg font-medium text-sm sm:text-base hover:bg-[#1e3a6b] transition-all duration-300 uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'SUBMIT'}
            </button>
          </div>

          {/* Success message */}
          {status === 'success' && (
            <div className="mt-4 px-5 py-4 bg-green-50 border border-green-200 rounded-2xl text-sm text-green-800 font-medium">
              ✓ Thank you for your message. We will be in touch shortly.
            </div>
          )}

          {/* Error message */}
          {status === 'error' && (
            <div className="mt-4 px-5 py-4 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-700 font-medium">
              Something went wrong. Please try again or email us at enquiries@londonstrategycentre.com
            </div>
          )}
        </div>
      </div>
    </div>
  );
}