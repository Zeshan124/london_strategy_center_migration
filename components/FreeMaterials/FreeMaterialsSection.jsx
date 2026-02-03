'use client';

import { useState } from 'react';
import { ChevronDown, Search, Download, FileText } from 'lucide-react';

export default function FreeMaterialsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Choose Category");
  const [selectedSort, setSelectedSort] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ["All", "AI Strategy", "Cybersecurity", "Leadership", "Growth", "Innovation", "Strategy"];
  const sortOptions = ["Most Recent", "Oldest First", "Most Downloaded"];

  // Free materials data
  const materials = [
    {
      id: 1,
      type: "PDF GUIDE",
      category: "AI STRATEGY",
      title: "Ai Strategy Implementation Framework",
      description: "Comprehensive 40-page guide covering AI adoption strategies, implementation roadmaps, and success metrics for business leaders.",
      pages: "40 Pages",
      downloads: "2,847 Downloads",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/ai-strategy-framework.pdf"
    },
    {
      id: 2,
      type: "TOOLKIT",
      category: "CYBERSECURITY",
      title: "Cybersecurity Assessment Toolkit",
      description: "Complete toolkit for assessing your organization's cybersecurity posture and identifying vulnerabilities.",
      pages: "25 Pages",
      downloads: "1,932 Downloads",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/cybersecurity-toolkit.pdf"
    },
    {
      id: 3,
      type: "TEMPLATES",
      category: "LEADERSHIP",
      title: "Leadership Development Planner",
      description: "Ready-to-use templates for creating comprehensive leadership development programs.",
      pages: "15 Pages",
      downloads: "3,421 Downloads",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/leadership-planner.pdf"
    },
    {
      id: 4,
      type: "WHITEPAPER",
      category: "INNOVATION",
      title: "Innovation Strategy Trends 2026",
      description: "In-depth analysis of emerging innovation trends and their impact on business strategy.",
      pages: "32 Pages",
      downloads: "2,156 Downloads",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/innovation-trends.pdf"
    },
    {
      id: 5,
      type: "CHECKLIST",
      category: "STRATEGY",
      title: "Digital Transformation Checklist",
      description: "Step-by-step checklist for planning and executing digital transformation initiatives.",
      pages: "8 Pages",
      downloads: "4,567 Downloads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/digital-transformation.pdf"
    },
    {
      id: 6,
      type: "CHECKLIST",
      category: "GROWTH",
      title: "Growth Lab Methodology Guide",
      description: "Comprehensive guide to implementing growth labs in your organization.",
      pages: "28 Pages",
      downloads: "1,789 Downloads",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/growth-lab.pdf"
    },
    {
      id: 7,
      type: "PDF GUIDE",
      category: "GROWTH",
      title: "Scale Faster with Growth Labs",
      description: "Practical strategies for accelerating business growth through structured experimentation.",
      pages: "22 Pages",
      downloads: "2,234 Downloads",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/scale-faster.pdf"
    },
    {
      id: 8,
      type: "TEMPLATES",
      category: "LEADERSHIP",
      title: "Executive Leadership Development",
      description: "Customizable templates for executive coaching and leadership assessment.",
      pages: "18 Pages",
      downloads: "2,891 Downloads",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      pdfUrl: "/downloads/executive-leadership.pdf"
    }
  ];

  // Filter materials
  const filteredMaterials = materials.filter((material) => {
    const matchesCategory =
      selectedCategory === "Choose Category" ||
      selectedCategory === "All" ||
      material.category === selectedCategory.toUpperCase().replace(" ", "");
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort materials
  const sortedMaterials = [...filteredMaterials].sort((a, b) => {
    if (selectedSort === "Most Recent") return b.id - a.id;
    if (selectedSort === "Oldest First") return a.id - b.id;
    if (selectedSort === "Most Downloaded") {
      const aDownloads = parseInt(a.downloads.replace(/,/g, ''));
      const bDownloads = parseInt(b.downloads.replace(/,/g, ''));
      return bDownloads - aDownloads;
    }
    return 0;
  });

  const handleDownload = (material) => {
    console.log('Downloading:', material.title);
    // Add your download logic here
  };

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {/* Category Dropdown */}
          <div className="relative w-full sm:w-48 md:w-56">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsSortOpen(false);
              }}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
            >
              <span>{selectedCategory}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsCategoryOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-48 md:w-56">
            <button
              onClick={() => {
                setIsSortOpen(!isSortOpen);
                setIsCategoryOpen(false);
              }}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
            >
              <span>{selectedSort}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
            </button>

            {isSortOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setIsSortOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-white border-2 border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Materials Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
  {sortedMaterials.map((material) => (
    <div
      key={material.id}
      className="group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
        <img
          src={material.image}
          alt={material.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-wide uppercase rounded-md bg-black/50 text-white backdrop-blur-sm">
            {material.category}
          </span>
        </div>
      </div>

      {/* Floating Content Card */}
      <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-5 shadow-xl transform transition-all duration-500 group-hover:-translate-y-2">
        <p className="text-[11px] sm:text-xs text-gray-600 mb-3 font-semibold tracking-wide uppercase">
          {material.type}
        </p>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
          {material.title}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#E8E3DC] opacity-0 invisible group-hover:opacity-95 group-hover:visible transition-all duration-300 flex flex-col justify-between p-6 sm:p-8">
        {/* Top Content */}
        <div>
          <p className="text-xs sm:text-sm text-[#0E2253] font-semibold mb-3 tracking-wide uppercase">
            {material.type}
          </p>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            {material.title}
          </h3>

          <p className="text-sm text-gray-800 leading-relaxed line-clamp-4 sm:line-clamp-5 mb-4">
            {material.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-700">
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>{material.pages}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              <span>{material.downloads}</span>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-end">
          <button
            onClick={() => handleDownload(material)}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0E2253] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#1a3a6b] transition-colors"
          >
            DOWNLOAD FREE
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* No Results */}
        {sortedMaterials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No materials found matching your criteria.</p>
          </div>
        )}

        {/* View More */}
        {sortedMaterials.length > 0 && (
          <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3a6b] transition-colors">
              VIEW MORE →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}