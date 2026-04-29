"use client";

import DigitalAvatarModal from "./DigitalAvatarModal";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HowItWorks() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/multimodal_hand_eye.svg",
      title: "Book a Free Session",
      description:
        "Schedule a complimentary introductory session in just a few clicks.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/graph_4.svg",
      title: "Connect with the Digital Twin",
      description:
        "Engage directly with the AI Digital Twin in a secure, private environment.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/tactic.svg",
      title: "Engage in Strategic Dialogue",
      description:
        "Experience a focused, time-limited interaction designed to surface leadership insight and decision logic.",
    },
    // {
    //   id: 5,
    //   icon: "/images/icons/av_timer.png",
    //   title: "Customised Solution",
    //   description:
    //     "We prioritise your organisation's goals to design bespoke leadership and strategy development services.",
    // },
    // {
    //   id: 6,
    //   icon: "/images/icons/business_center.png",
    //   title: "Work With Us",
    //   description:
    //     "We seek motivated, inquisitive individuals passionate about making a meaningful impact with excellence.",
    // },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    objective: "",
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
      !formData.email.trim() ||
      !formData.phone.trim()
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
        phone: "",
        organization: "",
        objective: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
   <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50">

  {/* Animated Gradient Blob */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200 opacity-30 blur-3xl rounded-full animate-pulse"></div>
    
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0E2253] opacity-20 blur-3xl rounded-full animate-[spin_25s_linear_infinite]"></div>
  </div>
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center sm:text-left">
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Simple, Intelligent, Effective
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
         <div
  key={feature.id}
  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0E2253]/40 hover:via-blue-400/30 hover:to-transparent transition-all duration-500"
>
  <div
    className="relative h-full rounded-2xl bg-white/80 backdrop-blur-lg p-6 md:p-8 border border-slate-200/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
    
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty(
        "--x",
        `${e.clientX - rect.left}px`
      );
      e.currentTarget.style.setProperty(
        "--y",
        `${e.clientY - rect.top}px`
      );
    }}
  >
    {/* Spotlight Effect */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
      style={{
        background: "radial-gradient(400px circle at var(--x) var(--y), rgba(14,34,83,0.15), transparent 60%)"
      }}
    ></div>

    {/* Icon */}
    <div className="mb-6 relative z-10">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl 
      bg-gradient-to-br from-[#0E2253]/15 via-blue-100 to-transparent 
      group-hover:scale-110 transition duration-300">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </div>

    {/* Title */}
    <h3 className="relative z-10 text-lg md:text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0E2253] transition">
      {feature.title}
    </h3>

    {/* Gradient Divider */}
    <div className="relative z-10 w-12 h-[2px] bg-gradient-to-r from-[#0E2253] to-blue-400 mb-4 group-hover:w-16 transition-all duration-300"></div>

    {/* Description */}
    <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
      {feature.description}
    </p>
  </div>
</div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-[#132D5F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-normal text-white mb-3 md:mb-2">
                 Book a virtual one-one session with the LSC Team
                </h3>
                <p className="text-white text-sm sm:text-base lg:text-base leading-relaxed">
                REGISTER YOUR INTEREST AND OUR TEAM WILL BE IN TOUCH
                </p>
              </div>

              {/* Buttons - Responsive stacking */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto md:flex-shrink-0 sm:pt-10">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#0E2253] text-gray-900 rounded-xl text-sm text-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  BOOK A SESSION
                  <img
                    src="/images/InnerPages/digitaltwin/arrow-up.svg"
                    alt="Play Icon"
                    className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </button>
              </div>
            </div>
            {/* <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 lg:gap-10 pt-4 mt-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/images/InnerPages/digitaltwin/contemporary.svg"
                  alt="Session"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
                />
                <span className="text-white text-xs sm:text-sm lg:text-base font-light">
                  Complimentary session
                </span>
              </div>
              <span className="text-white opacity-50 text-base">•</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/images/InnerPages/digitaltwin/timer.svg"
                  alt="Duration"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
                />
                <span className="text-white text-xs sm:text-sm lg:text-base font-light">
                  5 minutes
                </span>
              </div>
            </div> */}
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
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    onClick={() => setIsFormOpen(false)}
  >
    <div
      className="bg-white rounded-2xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#0E2253]">
         Book a virtual one-one session with the LSC Team
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253]"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253]"
            placeholder="Enter your email"
          />
        </div>


        {/* <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253]"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253]"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2253]"
            placeholder="Describe your objectives"
          />
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0E2253] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Opening Avatar..." : "Book a Session"}
        </button>
      </form>
    </div>
  </div>
)}
    </section>
  );
}
