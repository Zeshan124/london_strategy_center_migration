"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const articles = [
    {
      id: 1,
      image:
        "/images/home/1.jpg",
      category: "Talent and Skills",
      categoryLink: "/talent-skills-strategy",
      title: "As AI Changes Work, CEOs Must Change How Work Happens",
      description:
        "The DNA of work is being rewritten by AI. CEOs must go beyond deploying tools and help their organization reimagine the nature of work itself.",
      date: "November 25, 2025",
      type: "Article",
      link: "/as-ai-changes-work",
    },
    {
      id: 2,
      image:
         "/images/home/2.jpg",
      category: "Marketing and Sales",
      categoryLink: "/marketing-sales",
      title: "The Agentic Marketing Race Is On. CMOs That Move First Will Win.",
      description:
        "Agentic AI is ushering in a new era for marketing, one where autonomous systems learn, decide, and act alongside human teams.",
      date: "November 25, 2025",
      type: "Article",
      link: "/agentic-marketing-race",
    },
    {
      id: 3,
      image:
         "/images/home/3.jpg",
      category: "Value Creation Strategy",
      categoryLink: "/value-creation-strategy",
      title:
        "Reshaping a Business Portfolio Is Hard—What Separates the Best from the Rest?",
      description:
        "Most efforts fail to outperform. But embracing six best practices significantly tilts the odds in your favor.",
      date: "November 21, 2025",
      type: "Article",
      link: "/reshaping-business-portfolio",
    },
    {
      id: 4,
      image:
         "/images/home/4.jpg",
      category: "Climate Risk, Adaptation, and Resilience",
      categoryLink: "/climate-risk-adaptation",
      title: "Actions to Mobilize Investment in Adaptation and Resilience",
      description:
        "As climate change and the resulting extreme weather events continue to cause economic losses worldwide, nations are imposing various adaptation and resilience strategies.",
      date: "November 20, 2025",
      type: "Article",
      link: "/mobilizing-investment",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1000&fit=crop",
      category: "Artificial Intelligence",
      categoryLink: "/artificial-intelligence",
      title:
        "Art and Algorithms: What CEOs Should Look For in an AI-First Chief Marketing Officer",
      description:
        "AI is redefining marketing as a growth engine—and repositioning the CMO as a chief growth architect.",
      date: "November 18, 2025",
      type: "Article",
      link: "/ai-first-cmo",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=1000&fit=crop",
      category: "AI Agents",
      categoryLink: "/ai-agents",
      title:
        "Leading in the Age of AI Agents: Managing the Machines That Manage Themselves",
      description:
        "Agentic AI is both software and colleague—a form of artificial intelligence that acts. Organizations that swiftly adapt their management playbook to make full use of this transformative technology will gain the edge.",
      date: "November 18, 2025",
      type: "Article",
      link: "/machines-manage-themselves",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= articles.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, articles.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= articles.length - 1 ? 0 : prev + 1));
  };

  // Get position relative to center (active slide)
  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const total = articles.length;

    // Normalize the difference to handle wrapping
    if (diff > total / 2) return diff - total;
    if (diff < -total / 2) return diff + total;
    return diff;
  };

  // Create an ordered array for rendering with center slide in middle
  const getOrderedSlides = () => {
    const ordered = [];
    const total = articles.length;

    // Add slides from -2 to +2 positions relative to current
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + total) % total;
      ordered.push({ ...articles[index], originalIndex: index, position: i });
    }

    return ordered;
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <main className="pt-20 px-6 lg:px-8 py-12 max-w-[1400px] mx-auto">
        {/* Welcome Text */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest text-gray-900 leading-tight mb-4">
            WELCOME TO LSC
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-light text-gray-900 max-w-5xl mx-auto px-4">
            Innovation, Strategy <br/> & Leadership Excellence
          </h1>
          <p className="font-light text-gray-600 max-w-2xl mx-auto py-2 lg:px-10">Transform your business with our four-pillar approach, Specializing in cutting-edge AI and Cyberscurity certifications for the digital-first future.</p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 overflow-hidden h-[450px] mb-8">
            {getOrderedSlides().map((article, displayIndex) => {
              const position = article.position;

              return (
                <div
                  key={`${article.id}-${displayIndex}`}
                  onClick={() => setCurrentSlide(article.originalIndex)}
                  className={`
                    cursor-pointer transition-all duration-1000 ease-out flex-shrink-0
                    ${
                      position === 0
                        ? "w-[240px] sm:w-[280px] lg:w-[240px] h-[330px] opacity-100 z-30"
                        : ""
                    }
                    ${
                      position === -1 || position === 1
                        ? "w-[180px] sm:w-[210px] lg:w-[150px] h-[220px] opacity-80 z-20"
                        : ""
                    }
                    ${
                      position === -2 || position === 2
                        ? "w-[140px] sm:w-[170px] lg:w-[200px] h-[340px] opacity-50 z-10"
                        : ""
                    }
                  `}
                >
                  <div className="relative w-full h-full overflow-hidden shadow-xl group">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                    />

                    {/* Gradient Overlay - Increases on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-700" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end text-white">
                      {/* Hover Content - Slides up from bottom */}
                      <div className="px-5 pb-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        {/* Title - Show on center and adjacent slides */}
                        {(position === 0 ||
                          position === -1 ||
                          position === 1) && (
                          <>
                            <h3
                              className={`font-light mb-3 leading-snug ${
                                position === 0
                                  ? "text-xl lg:text-2xl line-clamp-3"
                                  : "text-base lg:text-lg line-clamp-2"
                              }`}
                            >
                              {article.title}
                            </h3>

                            {/* Meta Info & Description - Only on center */}
                            {position === 0 && (
                              <>
                                <p className="text-sm text-gray-200 mb-4 line-clamp-3 leading-relaxed">
                                  {article.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs text-gray-300 mb-4">
                                  <span className="uppercase font-semibold">
                                    {article.type}
                                  </span>
                                  <span>·</span>
                                  <span>{article.date}</span>
                                </div>

                                {/* Learn More Button */}
                                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-400 hover:bg-green-500 text-black font-semibold text-sm rounded-md transition-colors duration-300">
                                  LEARN MORE
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
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
            <button className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors whitespace-nowrap">
              BCG SPOTLIGHT
            </button>
            <button className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
              ARTIFICIAL INTELLIGENCE
            </button>
            <button className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
              CEO AGENDA
            </button>
            <button className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
              CLIENT IMPACT LIBRARY
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
