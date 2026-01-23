"use client";

import { useState } from "react";
import { ChevronDown, Search as SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Choose Category");
  const [selectedSort, setSelectedSort] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ["All", "Leadership", "Innovation", "Geopolitical"];
  const sortOptions = ["Most Recent", "Oldest First", "Most Popular"];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: "emotional-intelligent-leadership",
      category: "LEADERSHIP",
      date: "18TH AUGUST, 2025",
      title: "Emotional intelligent leadership: being it or performing it?",
      description:
        'The late Maya Angelou once said, "I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
      image: "/images/blog/two.jpg",
      hasReadMore: true,
    },
    {
      id: 2,
      slug: "leadership-maturity",
      category: "LEADERSHIP",
      date: "11TH AUGUST, 2025",
      title: "Leadership Maturity",
      description: "",
      image: "/images/blog/two.jpg",
      hasReadMore: false,
    },
    {
      id: 3,
      slug: "leadership-development-roi",
      category: "LEADERSHIP",
      date: "28TH JULY, 2025",
      title: "Leadership Development and the ROI Ritual",
      description: "",
      image: "/images/blog/three.jpg",
      hasReadMore: false,
    },
    {
      id: 4,
      slug: "leadership-practices",
      category: "LEADERSHIP",
      date: "23RD JULY, 2025",
      title: "Leadership As a Set of Practices",
      description: "",
      image: "/images/blog/four.jpg",
      hasReadMore: false,
    },
    {
      id: 5,
      slug: "womens-leadership-what-to-fix",
      category: "LEADERSHIP",
      date: "17TH JUNE, 2025",
      title: "Women's Leadership: What Exactly Are We Trying to Fix?",
      description: "",
      image: "/images/blog/five.jpg",
      hasReadMore: false,
    },
    {
      id: 6,
      slug: "womens-leadership-confidence",
      category: "LEADERSHIP",
      date: "17TH JUNE, 2025",
      title:
        'Women\'s Leadership and "confidence" (Aw), not just "nice to haves" but differentiators',
      description: "",
      image: "/images/blog/six.jpg",
      hasReadMore: false,
    },
    {
      id: 7,
      slug: "limelight-or-shade",
      category: "LEADERSHIP",
      date: "17TH JUNE, 2025",
      title: "The Limelight Or The Shade",
      description: "",
      image: "/images/blog/seven.jpg",
      hasReadMore: false,
    },
    {
      id: 8,
      slug: "climate-action-geopolitical-tensions",
      category: "GEOPOLITICAL",
      date: "5TH JUNE, 2025",
      title:
        "Climate Action: Can Climate Action Survive Rising Geopolitical Tensions?",
      description: "",
      image: "/images/blog/eight.jpg",
      hasReadMore: false,
    },
    {
      id: 9,
      slug: "pope-francis-leadership-legacy",
      category: "LEADERSHIP",
      date: "25TH MAY, 2025",
      title: "The Late Pope Francis and His Leadership Legacy",
      description: "",
      image: "/images/blog/nine.jpg",
      hasReadMore: false,
    },
    {
      id: 10,
      slug: "make-innovation-happen",
      category: "INNOVATION",
      date: "24TH MAY, 2025",
      title: "How Do We Make Innovation Happen?",
      description: "",
      image: "/images/blog/one.jpg",
      hasReadMore: false,
    },
  ];

  // Filter blog posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Choose Category" ||
      selectedCategory === "All" ||
      post.category === selectedCategory.toUpperCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort filtered posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedSort === "Most Recent") {
      return b.id - a.id;
    } else if (selectedSort === "Oldest First") {
      return a.id - b.id;
    }
    return 0; // Most Popular - keep original order for now
  });

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
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
              />
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
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isSortOpen ? "rotate-180" : ""
                }`}
              />
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
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {sortedPosts.map((post) => (
            <Link
              href={`/blog/${post.slug || 'post-' + post.id}`}
              key={post.id}
              className="group relative bg-white border-2 border-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-wide uppercase rounded-md ${
                      post.category === "LEADERSHIP"
                        ? "bg-[#1e3a8a] text-white"
                        : post.category === "INNOVATION"
                        ? "bg-gray-900 text-white"
                        : "bg-[#92400e] text-white"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-5 sm:p-6">
                {/* Date */}
                <p className="text-[11px] sm:text-xs text-gray-600 mb-3 font-semibold tracking-wide uppercase">
                  {post.date}
                </p>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {post.title}
                </h3>
              </div>

              {/* Hover Overlay - Covers Entire Card */}
              <div className="absolute inset-0 bg-[#E8E3DC] opacity-0 invisible group-hover:opacity-95 group-hover:visible transition-all duration-300 flex flex-col justify-between p-6 sm:p-8">
                {/* Top Content */}
                <div>
                  <p className="text-xs sm:text-sm text-[#0E2253] font-semibold mb-3 sm:mb-4 tracking-wide">
                    {post.date}
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed line-clamp-4 sm:line-clamp-5">
                    {post.description ||
                      'The late Maya Angelou once said, "I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."'}
                  </p>
                </div>

                {/* Bottom Button */}
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0E2253] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#1a3a6b] transition-colors">
                    READ MORE
                    <span className="text-base sm:text-lg">↗</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}

        {/* View More Button */}
        {sortedPosts.length > 0 && (
          <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2253] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3a6b] transition-colors">
              VIEW MORE
              <span className="text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
