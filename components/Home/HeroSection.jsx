"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";

// Import Swiper styles
import "swiper/css";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [leadModal, setLeadModal] = useState(null); // holds the article object
  const [leadForm, setLeadForm] = useState({ name: "", email: "" });
  const swiperRef = useRef(null);

  function openLeadModal(article) {
    setLeadForm({ name: "", email: "" });
    setLeadModal(article);
  }

  function handleLeadSubmit(e) {
    e.preventDefault();
    // Trigger download
    const link = document.createElement("a");
    link.href = leadModal.document;
    link.download = "";
    link.click();
    setLeadModal(null);
  }

  const articles = [
    {
      id: 1,
      image: "/images/home/1.jpg",
      category: "Talent and Skills",
      categoryLink: "/talent-skills-strategy",
      title: "What a CT Scan Delivers",
      description:
        "The CT Scan produces a structured evidence base. This document details the report architecture and how findings drive action.",
      date: "November 25, 2025",
      type: "DIAGNOSTIC REPORT STRUCTURE",
      link: "/as-ai-changes-work",
      document: "/images/home/Reporting_Architecture.pdf",
    },
    {
      id: 2,
      image: "/images/home/2.jpg",
      category: "Marketing and Sales",
      categoryLink: "/marketing-sales",
      title: "Diagnosis Before Intervention",
      description:
        "Transformation that skips diagnosis compounds the problem. Tier 1 identifies where execution breaks down and why.",
      date: "November 25, 2025",
      type: "THREE-TIER ARCHITECTURE - ENTRY POINT",
      link: "/agentic-marketing-race",
        document: "/images/home/Client_Ready_Material.pdf",
    },
    {
      id: 3,
      image: "/images/home/3.jpg",
      category: "Value Creation Strategy",
      categoryLink: "/value-creation-strategy",
      title:
        "STRATEGIC INTELLIGENCE",
      description:
        "A comprehensive approach to leveraging strategic intelligence—helping organizations anticipate market shifts, prioritize high-impact initiatives, and consistently outperform through informed decision-making.",
      date: "November 21, 2025",
      type: "Intelligence",
      link: "/reshaping-business-portfolio",
       document: "/images/home/Premium_Report.pdf",
    },
    {
      id: 4,
      image: "/images/home/4.jpg",
      category: "Climate Risk, Adaptation, and Resilience",
      categoryLink: "/climate-risk-adaptation",
      title: "What LSC Does, and Why It Matters",
      description:
        "System-level transformation, not individual development. Read how LSC works as an AI-augmented capability transformation partner. ",
      date: "November 20, 2025",
      type: "CAPABILITY OVERVIEW",
      link: "/mobilizing-investment",
      document: "/images/home/LSC_Capability_Statement.pdf",
    },
    {
      id: 5,
      image: "/images/home/5.jpg",
      category: "Artificial Intelligence",
      categoryLink: "/artificial-intelligence",
      title:
        "Cyber Capability Built for Complex Environments ",
      description:
        "Cyber risk is an organisational problem, not a technical one. This kit outlines LSC’s approach to risk, resilience and governance.",
      date: "November 18, 2025",
      type: "CYBER SECURITY PRACTICE",
      link: "/ai-first-cmo",
      document: "/images/home/Cyber_Excellenc_Broucher_updated.pdf",
    },
     {
      id: 6,
      image: "/images/home/1.jpg",
      category: "Talent and Skills",
      categoryLink: "/talent-skills-strategy",
      title: "What a CT Scan Delivers",
      description:
        "The CT Scan produces a structured evidence base. This document details the report architecture and how findings drive action.",
      date: "November 25, 2025",
      type: "DIAGNOSTIC REPORT STRUCTURE",
      link: "/as-ai-changes-work",
      document: "/images/home/Reporting_Architecture.pdf",
    },
    {
      id: 7,
      image: "/images/home/2.jpg",
      category: "Marketing and Sales",
      categoryLink: "/marketing-sales",
      title: "Diagnosis Before Intervention",
      description:
        "Transformation that skips diagnosis compounds the problem. Tier 1 identifies where execution breaks down and why.",
      date: "November 25, 2025",
      type: "THREE-TIER ARCHITECTURE - ENTRY POINT",
      link: "/agentic-marketing-race",
        document: "/images/home/Client_Ready_Material.pdf",
    },
    {
      id: 8,
      image: "/images/home/3.jpg",
      category: "Value Creation Strategy",
      categoryLink: "/value-creation-strategy",
      title:
        "STRATEGIC INTELLIGENCE",
      description:
        "A comprehensive approach to leveraging strategic intelligence—helping organizations anticipate market shifts, prioritize high-impact initiatives, and consistently outperform through informed decision-making.",
      date: "November 21, 2025",
      type: "Article",
      link: "/reshaping-business-portfolio",
       document: "/images/home/Premium_Report.pdf",
    },
    {
      id: 9,
      image: "/images/home/4.jpg",
      category: "Climate Risk, Adaptation, and Resilience",
      categoryLink: "/climate-risk-adaptation",
      title: "What LSC Does, and Why It Matters",
      description:
        "System-level transformation, not individual development. Read how LSC works as an AI-augmented capability transformation partner. ",
      date: "November 20, 2025",
      type: "CAPABILITY OVERVIEW",
      link: "/mobilizing-investment",
      document: "/images/home/LSC_Capability_Statement.pdf",
    },
    {
      id: 10,
      image: "/images/home/5.jpg",
      category: "Artificial Intelligence",
      categoryLink: "/artificial-intelligence",
      title:
        "Cyber Capability Built for Complex Environments ",
      description:
        "Cyber risk is an organisational problem, not a technical one. This kit outlines LSC’s approach to risk, resilience and governance.",
      date: "November 18, 2025",
      type: "CYBER SECURITY PRACTICE",
      link: "/ai-first-cmo",
      document: "/images/home/Cyber_Excellenc_Broucher_updated.pdf",
    },
    // {
    //   id: 6,
    //   image:
    //     "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=1000&fit=crop",
    //   category: "AI Agents",
    //   categoryLink: "/ai-agents",
    //   title:
    //     "Leading in the Age of AI Agents: Managing the Machines That Manage Themselves",
    //   description:
    //     "Agentic AI is both software and colleague—a form of artificial intelligence that acts. Organizations that swiftly adapt their management playbook to make full use of this transformative technology will gain the edge.",
    //   date: "November 18, 2025",
    //   type: "Article",
    //   link: "/machines-manage-themselves",
    //   document: "/documents/article-6.pdf",
    // },
    // {
    //   id: 7,
    //   image: "/images/home/5.jpg",
    //   category: "Artificial Intelligence",
    //   categoryLink: "/artificial-intelligence",
    //   title:
    //     "Art and Algorithms: What CEOs Should Look For in an AI-First Chief Marketing Officer",
    //   description:
    //     "AI is redefining marketing as a growth engine—and repositioning the CMO as a chief growth architect.",
    //   date: "November 18, 2025",
    //   type: "Article",
    //   link: "/ai-first-cmo",
    //   document: "/documents/article-7.pdf",
    // },
    // {
    //   id: 8,
    //   image: "/images/home/4.jpg",
    //   category: "Climate Risk, Adaptation, and Resilience",
    //   categoryLink: "/climate-risk-adaptation",
    //   title: "Actions to Mobilize Investment in Adaptation and Resilience",
    //   description:
    //     "As climate change and the resulting extreme weather events continue to cause economic losses worldwide, nations are imposing various adaptation and resilience strategies.",
    //   date: "November 20, 2025",
    //   type: "Article",
    //   link: "/mobilizing-investment",
    //   document: "/documents/article-8.pdf",
    // },
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <main className="pt-20 px-6 lg:px-8 py-12 max-w-[1400px] mx-auto">
        {/* Welcome Text */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-lg font-semibold tracking-widest text-gray-900 leading-tight mb-4">
            Welcome to London Strategy Centre
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-light text-gray-900 max-w-5xl mx-auto px-4">
          Building Intelligent Organisations  <br /> for an AI-Driven World
          </h1>
          <p className="font-light text-gray-600 max-w-2xl mx-auto py-2 lg:px-10">
        In an age of AI, accelerating complexity, and constant disruption, organisations must evolve into intelligent and adaptive systems.
          </p>
            
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="h-[450px] mb-8 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              modules={[Navigation, Autoplay]}
              spaceBetween={56}
              slidesPerView={5}
              centeredSlides={true}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 56,
                },
              }}
              className="h-full !overflow-visible"
            >
           {articles.map((article) => (
  <SwiperSlide key={article.id}>
    {({ isActive, isNext, isPrev }) => {
      const position = isActive ? 0 : isNext ? 1 : isPrev ? -1 : 2;
      const isCenter = position === 0;
      const isAdjacent = position === -1 || position === 1;

      return (
        <div
          style={{ willChange: "transform" }}
          className={`h-full flex items-center justify-center transition-all duration-1000 ease-out ${
            isCenter
              ? "scale-[1.25] opacity-100 z-30"
              : isAdjacent
              ? "scale-[0.69] z-20"
              : "scale-[0.89] z-10"
          }`}
        >
          {/* Card – single fixed size, scaling handled by parent */}
          <div className="w-[240px] sm:w-[280px] lg:w-[240px] h-[330px] relative overflow-hidden shadow-xl group">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay — stronger for center card */}
            <div className={`absolute inset-0 bg-linear-to-t ${isCenter ? "from-black/90 via-black/55 to-transparent" : "from-black/70 via-black/20 to-transparent"}`} />

            {/* Content overlay — always visible */}
            <div className="absolute inset-0 flex flex-col justify-end text-white">
              <div className="px-5 pb-5">
                {/* Center card: full content always visible */}
                {isCenter && (
                  <>
                    <span className="inline-block px-3 py-1 mb-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded text-xs font-semibold uppercase tracking-wider">
                      {article.type}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-light leading-snug line-clamp-3 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                    <button
                      onClick={(e) => { e.stopPropagation(); openLeadModal(article); }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-400 hover:bg-green-500 text-black font-semibold text-sm rounded-md transition-colors duration-300"
                    >
                      Download
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Side cards: title only */}
                {!isCenter && (
                  <h3 className="text-base lg:text-lg font-light leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </SwiperSlide>
))}
            </Swiper>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <button
              onClick={toggleAutoplay}
              className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="ml-2 text-sm font-medium text-gray-600">
              {String(currentSlide + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* BCG Spotlight Footer Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-gray-200 rounded-full shadow-sm bg-white max-w-full">
            <Link href="/ai-assessment" className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap">
              Agentic AI PDR
            </Link>
            <Link href="/digital-twin" className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap">
              Digital Twins
            </Link>
            <Link href="/cyber-assessment" className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap">
              Cyber Excellence Assessment
            </Link>
            <a
              href="https://lsc-venture-framework.londonstrategycentre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Digital Business Plan
            </a>
          </div>
        </div>
      </main>

      {/* Lead Capture Modal */}
      {leadModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setLeadModal(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLeadModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-[#0E2253] uppercase mb-2">
                {leadModal.type}
              </p>
              <h2 className="text-xl font-light text-gray-900 leading-snug">
                {leadModal.title}
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Enter your details to download this article.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900">Full Name</label>
                <input
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900">Email Address</label>
                <input
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#0E2253] text-white text-sm font-semibold rounded-xl hover:bg-[#1a3570] transition-all duration-300 uppercase tracking-widest"
              >
                Download Article
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}