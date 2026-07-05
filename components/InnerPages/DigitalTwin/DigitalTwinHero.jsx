"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import {
  Bookmark,
  Download,
  Printer,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import FeaturedCampaignsSection from "@/components/blog/FeaturedCampaignsSection";
import DigitalAvatarModal from "./DigitalAvatarModal";

export default function DigitalTwinHero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    // phone: "",
    // organization: "",
    // objective: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    const name = formData.fullName;

    // Close the form and open the digital avatar in-page
    setTimeout(() => {
      setSubmittedName(name);
      setIsFormOpen(false);
      setIsAvatarOpen(true);
      setFormData({
        fullName: "",
        email: "",
        // phone: "",
        // organization: "",
        // objective: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 py-6">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-8 md:py-8 lg:pt-16">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-xs sm:text-sm font-bold">
              LSC DIGITAL TWIN
            </span>
          </div>

          {/* Title */}
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
            Transform Leadership Logic into
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6">
            Scalable Intelligence
          </h1>

          {/* <div className="text-lg text-gray-900 mb-8">
            From AI-powered executive growth partners to organisation-wide
            strategic sensing systems, we turn how leaders think into a
            continuous intelligence infrastructure that strengthens alignment,
            accelerates decision-making, and builds cybernetic capability. This
            is not AI coaching. This is leadership intelligence engineered for
            scale.
          </div> */}
          <div className="text-lg text-gray-900 italic mb-8">
            This is not AI coaching. This is leadership intelligence engineered
            for scale.
          </div>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl text-xs hover:bg-gray-800 transition-all duration-300"
            >
              DISCOVER HOW IT WORKS
            </button>
          <button
  onClick={() => setIsFormOpen(true)}
  className="relative overflow-hidden group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0E2253] text-gray-900 rounded-xl font-medium text-xs hover:bg-[#0E2253] hover:text-white transition-all duration-300"
>
  {/* Shine Effect */}
  <span className="absolute inset-0 overflow-hidden rounded-xl">
    <span className="absolute -left-[120%] top-0 h-full w-[120%] 
    bg-gradient-to-r from-transparent via-white/60 to-transparent 
    skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700"></span>
  </span>

  <span className="relative z-10 flex items-center gap-2">
    BOOK FREE DIGITAL TWIN CONSULTATION
    <img
      src="/images/InnerPages/digitaltwin/arrow-up.svg"
      alt="icon"
      className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
    />
  </span>
</button>
          </div>

          {/* Featured Video - Full Width */}
          <div className="relative mb-0 sm:mb-12 pt-12 sm:pt-24 rounded-2xl overflow-hidden">
            <video
              src="/images/InnerPages/digitaltwin/Paul_Nanson.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Digital Avatar Modal */}
      <DigitalAvatarModal
        isOpen={isAvatarOpen}
        onClose={() => setIsAvatarOpen(false)}
        userName={submittedName}
      />

      {/* Consultation Form Modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#0E2253]">
            BOOK FREE DIGITAL TWIN CONSULTATION
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

        
              {/* <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253] focus:border-transparent"
                  placeholder="Enter your organization"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Objective
                </label>
                <textarea
                  name="objective"
                  value={formData.objective}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253] focus:border-transparent resize-none"
                  placeholder="Describe your objectives"
                />
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0E2253] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting
                  ? "Opening Avatar..."
                  : "Book a Free Session"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
