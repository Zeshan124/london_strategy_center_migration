"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isLoginModalOpen]);

  // Close modals on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLoginModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Sign in with:", email);
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log("Sign up clicked");
  };

  const industries = [
    { name: "Aerospace and Defense", href: "#" },
    { name: "Automotive Industry", href: "#" },
    { name: "Consumer Products Industry", href: "#" },
    { name: "Education", href: "#" },
    { name: "Energy", href: "#" },
    { name: "Financial Institutions", href: "#" },
    { name: "Health Care Industry", href: "#" },
    { name: "Industrial Goods", href: "#" },
    { name: "Insurance Industry", href: "#" },
    { name: "Principal Investors and Private Equity", href: "#" },
    { name: "Public Sector", href: "#" },
    { name: "Retail Industry", href: "#" },
    { name: "Technology, Media, and Telecommunications", href: "#" },
    { name: "Transportation and Logistics", href: "#" },
    { name: "Travel and Tourism", href: "#" },
    { name: "Urban Planning", href: "#" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="px-1 py-1 text-lg text-gray-700 font-bold bg-white rounded-lg transition-colors shadow-sm border border-gray-200 flex items-center gap-2"
              aria-label="Open menu"
            >
              <Image
                src="/images/icons/hamburger-icon.svg"
                alt="Menu Icon"
                width={32}
                height={32}
                className="w-7 h-7"
              />
              BCG
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-2 py-2.5 text-sm text-gray-600 font-medium bg-white hover:bg-gray-200 rounded-lg transition-colors shadow-sm border border-gray-200 flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              LOG IN
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="min-h-screen">
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 lg:px-8 py-4 border-b border-gray-200">
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BCG
                </Link>
                <div className="flex-1 max-w-2xl mx-4">
                  <input
                    type="search"
                    placeholder="Type to search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
              >
                LOG IN
              </button>
            </div>

            {/* Menu Content */}
            <div className="px-6 lg:px-8 py-6">
              <div className="max-w-7xl mx-auto">
                {/* Navigation Sections - Left Sidebar */}
                <div className="flex gap-8">
                  {/* Left Navigation Menu */}
                  <div className="w-72 flex-shrink-0 border-r border-gray-200 pr-8">
                    <div className="space-y-4">
                      {/* Our Services */}
                      <div>
                        <h2 className="text-sm font-medium text-gray-900 mb-2">
                          Our Services
                        </h2>
                        <ul className="space-y-1 pl-0">
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors bg-gray-100 block py-2 px-3 rounded"
                            >
                              Industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              Capabilities
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              BCG X
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Our Insights */}
                      <div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                        >
                          Our Insights
                        </Link>
                      </div>

                      {/* BCG Alumni */}
                      <div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                        >
                          BCG Alumni
                        </Link>
                      </div>

                      {/* Our Company */}
                      <div>
                        <h2 className="text-sm font-medium text-gray-900 mb-2">
                          Our Company
                        </h2>
                        <ul className="space-y-1 pl-0">
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              About BCG
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              Client Impact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              People
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              Offices
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                            >
                              Corporate Newsroom
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Join Us */}
                      <div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                        >
                          Join Us
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Content Area */}
                  <div className="flex-1">
                    {/* Industries Section */}
                    <div>
                      <h2 className="text-sm font-medium text-gray-900 mb-1">
                        Industries
                      </h2>
                      <p className="text-xs text-gray-600 mb-4">
                        Learn how we draw on industry expertise to make
                        companies more competitive.
                      </p>

                      <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                        {industries.map((industry, index) => (
                          <Link
                            key={index}
                            href={industry.href}
                            className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsLoginModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Log In To Your Account
            </h2>

            {/* Login Form */}
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                SIGN IN
                <span className="text-lg">→</span>
              </button>

              {/* Sign Up Button */}
              <button
                type="button"
                onClick={handleSignUp}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
