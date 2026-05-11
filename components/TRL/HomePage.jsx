"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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
  MapPin,
  Clock,
  Calendar,
  Play,
  User,
  Timer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import FeaturedCampaignsSection from "@/components/blog/FeaturedCampaignsSection";
import Image from "next/image";

export default function HomePage() {
    const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
    setFormData({ fullName: "", email: "" });
  };

   const inputClass = "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";
   
  return (
    <>
      <div className="min-h-screen bg-white lg:pt-28 py-0">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-24 py-8 sm:py-8 md:py-8 lg:pt-16">
          {/* Category Badge */}
          <div className="mb-6">
            <div className="inline-block">
              <Image
                src="/images/InnerPages/trl/trl-logo.svg"
                alt="Reframe Reads"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6 max-w-4xl">
           The Reframe Lab
          </h1>

           
  <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
           Where Organisational Thinking Gets Rebuilt
            </p>
       

          <div className="flex gap-4 sm:justify-start">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300">
              JOIN US AS A SPEAKER
            </button>
          
          </div>

          <div className="py-8 sm:py-12 lg:py-16">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/InnerPages/trl/main_banner.jpg"
                alt="The Reframe Lab"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
        Most leadership content reinforces what executives already believe. It confirms existing mental models rather than testing them. The result is a market saturated with insight that sounds relevant but changes nothing.
         </p>
 <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
    The Reframe Lab exists to do the opposite. It is London Strategy Centre's intellectual platform — a space where the assumptions behind strategy, capability, and organisational design are examined, challenged, and reconstructed. Every article, every conversation, every argument published here begins from the same premise: the way most organisations think about performance, leadership, and transformation is structurally

        </p>
        </div>
      </div>
       {/* Consultation Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto"
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
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight mb-2">
                {service.consultationHeading || "Request a Consultation"}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Submit your details and a member of our team will be in touch shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pt-1">
                London Strategy Centre is committed to protecting your privacy. For more information please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">privacy policy</a>.
              </p>
              <button type="submit" className="w-full sm:w-auto px-16 py-4 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your consultation request has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">A member of our team will be in touch shortly.</p>
              <button onClick={() => setShowSuccess(false)} className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
