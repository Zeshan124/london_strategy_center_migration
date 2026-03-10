"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Signup form state
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isLoginModalOpen || isSignUpModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isLoginModalOpen, isSignUpModalOpen]);

  // Close modals on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in with:", email);
  };

  const handleSignUp = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign up with:", signUpData);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const centerMenuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/blog" },
    { name: "FREE MATERIALS", href: "/free-material" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 px-3 sm:px-6 lg:px-15 py-4 sm:py-6 lg:py-10">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo/Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {isHomePage ? (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="px-1.5 py-1.5 sm:px-2 sm:py-2 text-lg text-gray-700 font-bold bg-white rounded-lg sm:rounded-xl transition-colors shadow-md border border-gray-200 flex items-center gap-1 sm:gap-2"
                aria-label="Open menu"
              >
                <Image
                  src="/images/icons/hamburger.svg"
                  alt="Menu Icon"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
                <Image
                  src="/images/icons/LSC-logo.svg"
                  alt="LSC Logo"
                  width={80}
                  height={32}
                  className="h-5 sm:h-6 lg:h-8 w-auto"
                  priority
                />
              </button>
            ) : (
              <div className="px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-xl shadow-md border border-gray-200 flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/images/icons/hamburger.svg"
                    alt="Menu Icon"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                </button>
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/icons/LSC-logo.svg"
                    alt="LSC Logo"
                    width={120}
                    height={40}
                    className="h-6 sm:h-8 lg:h-10 w-auto"
                    priority
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Right Side - Navigation, Search & Login */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Navigation Menu - Only for non-home pages on desktop */}
            {!isHomePage && (
              <div className="hidden lg:flex items-center">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-3">
                  <ul className="flex items-center gap-5 xl:gap-7">
                    {centerMenuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`text-sm font-medium transition-colors whitespace-nowrap ${
                            pathname === item.href
                              ? "text-gray-900 px-3 py-1.5  bg-[#F1EEEA] rounded-md"
                              : "text-gray-700 hover:text-gray-900"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Search & Login */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl shadow-lg px-3 py-2 sm:px-4 sm:py-2.5">
              <button
                aria-label="Search"
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="min-h-screen">
            {/* Menu Header */}
            <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2 sm:gap-4 flex-1">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 sm:p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <Link
                  href="/"
                  className="text-xl sm:text-2xl font-bold tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LSC
                </Link>
                <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
                  <input
                    type="search"
                    placeholder="Type to search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
              >
                LOG IN
              </button>
            </div>

            {/* Mobile Search Bar */}
            <div className="sm:hidden px-3 py-3 border-b border-gray-200">
              <input
                type="search"
                placeholder="Type to search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Menu Content */}
            <div className="px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="max-w-7xl mx-auto">
                {/* Navigation Sections */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Left Navigation Menu */}
                  <div className="w-full lg:w-72 lg:flex-shrink-0 lg:border-r border-gray-200 lg:pr-8">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Our Services */}
                      <div>
                        <h2 className="text-sm font-medium text-gray-900 mb-2">
                          Our Services
                        </h2>
                        <ul className="space-y-1 pl-0">
                          <li>
                            <Link
                              href="/cyberexcellence"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors bg-gray-100 block py-2 px-3 rounded"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Cyber Excellence
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/digital-twin"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Digital Twin
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/press-release"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Press Release
                            </Link>
                          </li>
                           <li>
                            <Link
                              href="/trl"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              TRL
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/women-leadership"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              WDL
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Our Insights */}
                      <div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Our Insights
                        </Link>
                      </div>

                      {/* LSC Alumni */}
                      <div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          LSC Alumni
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
                              href="/about"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              About LSC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/free-material"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Free Materials
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-sm text-gray-700 hover:text-gray-900 transition-colors block py-2 px-3 rounded hover:bg-gray-50"
                              onClick={() => setIsMobileMenuOpen(false)}
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
                          onClick={() => setIsMobileMenuOpen(false)}
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-2">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsLoginModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-6 sm:mb-8 pr-8">
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
                  email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                className="w-full bg-[#0D1B3E] hover:bg-[#0a1d4a] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                SIGN IN
                <span className="text-lg">→</span>
              </button>

              {/* Sign Up Button */}
              <button
                type="button"
                onClick={handleSignUp}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2.5 sm:py-3 px-4 rounded-lg border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsSignUpModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 animate-fadeIn max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsSignUpModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-6 sm:mb-8 pr-8">
              Create Your Account
            </h2>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUpSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    placeholder="First Name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="signupEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  placeholder="Password"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  placeholder="Confirm Password"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-[#0D1B3E] hover:bg-[#0a1d4a] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                SIGN UP
                <span className="text-lg">→</span>
              </button>

              {/* Back to Login */}
              <button
                type="button"
                onClick={() => {
                  setIsSignUpModalOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-2.5 sm:py-3 px-4 rounded-lg border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
              >
                BACK TO LOGIN
              </button>
            </form>
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
