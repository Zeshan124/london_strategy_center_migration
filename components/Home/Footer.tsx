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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Image
                src="/images/icons/logo-footer.svg"
                alt="London Strategy Centre Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
             LSC is a capability transformation partner integrating people, practice, and technology to build organisational intelligence and sustained performance under complexity.
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

            {/* Social Icons */}
            <div className="flex items-center gap-1 pt-1">
              <a href="#" className="w-8 h-8 flex items-center justify-center transition-all" aria-label="Facebook">
                <img src="/images/icons/facebook.svg" alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center transition-all" aria-label="Instagram">
                <img src="/images/icons/insta.svg" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center transition-all" aria-label="TikTok">
                <img src="/images/icons/tiktok.svg" alt="TikTok" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center transition-all" aria-label="YouTube">
                <img src="/images/icons/youtube.svg" alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-300">
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
