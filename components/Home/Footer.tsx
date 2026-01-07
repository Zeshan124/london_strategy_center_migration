"use client";

import Image from "next/image";

export default function Footer() {
  const services = [
    "Business Strategy",
    "Operations Optimization",
    "Growth Acceleration",
    "Organizational Design",
    "Financial Advisory",
    "Market Entry",
  ];

  const industries = [
    "Technology",
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & Consumer",
    "Energy & Utilities",
  ];

  return (
    <footer className="bg-[#F1EEEA]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <p className="text-sm sm:text-base lg:text-xl text-gray-800 leading-relaxed">
              Leading business consulting firm delivering strategic solutions
              and sustainable growth for companies worldwide.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm  text-gray-800 hover:text-gray-600 transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <ul className="space-y-2 sm:space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm  text-gray-800 hover:text-gray-600 transition-colors block"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4">
            {/* Address */}
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 sm:mt-1">
                <Image
                  src="/images/icons/location.svg"
                  alt="Location"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-xs sm:text-sm text-gray-800">
                <p>45 Albemarle Street,</p>
                <p>3rd Floor, Mayfair, W1S 4JL,</p>
                <p>London, United Kingdom</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src="/images/icons/mail.svg"
                alt="Mail Icon"
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5"
              />
              <a
                href="mailto:enquiries@londonstrategycentre.com"
                className="text-xs sm:text-sm text-gray-800 hover:text-gray-600 transition-colors break-all"
              >
                enquiries@londonstrategycentre.com
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Logo and Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8 border-t border-gray-300">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/icons/logo-footer.svg"
                alt="London Strategy Centre Logo"
                width={100}
                height={100}
                className="object-contain sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px]"
                priority
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm font-medium text-gray-800 mr-1 sm:mr-2 w-full sm:w-auto mb-2 sm:mb-0">
              FOLLOW US
            </span>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center transition-all"
              aria-label="Facebook"
            >
              <img
                src="/images/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <img
                src="/images/icons/insta.svg"
                alt="Instagram"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center transition-all"
              aria-label="LinkedIn"
            >
              <img
                src="/images/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center transition-all"
              aria-label="TikTok"
            >
              <img
                src="/images/icons/tiktok.svg"
                alt="TikTok"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center transition-all"
              aria-label="YouTube"
            >
              <img
                src="/images/icons/youtube.svg"
                alt="YouTube"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-300">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
            >
              POLICIES AND LEGISLATION
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium whitespace-nowrap"
            >
              SITEMAP
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-800 whitespace-nowrap">
            © 2025 London Strategy Centre
          </p>
        </div>
      </div>

      {/* AI Assistant Button */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative w-16 h-16 bg-[#1e3a6b] rounded-full shadow-2xl hover:bg-[#0a1d4a] transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
          
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-[#1e3a6b] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ASK OUR<br />AI ASSISTANT
          </div>
        </button>
      </div> */}
    </footer>
  );
}
