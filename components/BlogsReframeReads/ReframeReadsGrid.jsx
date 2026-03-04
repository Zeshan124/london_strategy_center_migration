"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Eye,
  ArrowUpRight,
  Share2,
  Bookmark,
  Search,
} from "lucide-react";

// ── Static article data (replace / extend as needed) ─────────────────────────
const ALL_ARTICLES = [
  {
    id: 1,
    image: "/images/InnerPages/reframe-reads/blog-1.jpg",
    badge: "FEATURED",
    category: "leadership",
    categoryLabel: "Sustainability & Technology",
    title: "Women's Representation in AI and STEM",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Dr Heather Jeffery",
    authorRole: "Head of Subject and Associate Professor in Marketing, University of Birmingham Dubai",
    authorOrg: "University of Birmingham",
    authorOrgLogo: null,
    companyLogo: null,
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },
  {
    id: 2,
   image: "/images/InnerPages/reframe-reads/blog-2.jpg",
    badge: "REFRAME READS",
    category: "ai",
    categoryLabel: "Reframe Reads",
    title: "AI Hard Talk: From Hype to Real-World Impact",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Junaid Mohsin Haq",
    authorRole: "Senior Business Transformation Leader",
    authorOrg: "Amazon",
    authorOrgLogo: "/images/reframe-reads/amazon-logo.png",
    companyLogo: "/images/reframe-reads/amazon-logo.png",
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },
  {
    id: 3,
    image: "/images/InnerPages/reframe-reads/blog-3.jpg",
    badge: "REFRAME READS",
    category: "technology",
    categoryLabel: "Sustainability & Technology",
    title: "A Collision Or A Catalyst For Progress?",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Dr Mohamed Irfan Shaikh",
    authorRole: "Programme Director, SEE Institute Dubai",
    authorOrg: "SEE Institute",
    authorOrgLogo: "/images/reframe-reads/see-institute-logo.png",
    companyLogo: "/images/reframe-reads/see-institute-logo.png",
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },
  {
    id: 4,
  image: "/images/InnerPages/reframe-reads/blog-4.jpg",
    badge: "FEATURED",
    category: "leadership",
    categoryLabel: "Reframe Reads",
    title: "AI, Brains, & The Future We Are Shaping",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Dr Vinod Metta",
    authorRole: "Consultant Interventional Neurologist and Movement Disorders Specialist",
    authorOrg: "King's College Hospital London",
    authorOrgLogo: "/images/reframe-reads/kings-college-logo.png",
    companyLogo: "/images/reframe-reads/kings-college-logo.png",
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },

  {
    id: 5,
  image: "/images/InnerPages/reframe-reads/blog-2.jpg",
    badge: "FEATURED",
    category: "leadership",
    categoryLabel: "Reframe Reads",
    title: "AI, Brains, & The Future We Are Shaping",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Dr Vinod Metta",
    authorRole: "Consultant Interventional Neurologist and Movement Disorders Specialist",
    authorOrg: "King's College Hospital London",
    authorOrgLogo: "/images/reframe-reads/kings-college-logo.png",
    companyLogo: "/images/reframe-reads/kings-college-logo.png",
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },

  {
    id: 6,
  image: "/images/InnerPages/reframe-reads/blog-3.jpg",
    badge: "FEATURED",
    category: "leadership",
    categoryLabel: "Reframe Reads",
    title: "AI, Brains, & The Future We Are Shaping",
    articleTitle:
      "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    author: "Dr Vinod Metta",
    authorRole: "Consultant Interventional Neurologist and Movement Disorders Specialist",
    authorOrg: "King's College Hospital London",
    authorOrgLogo: "/images/reframe-reads/kings-college-logo.png",
    companyLogo: "/images/reframe-reads/kings-college-logo.png",
    editedByLSC: true,
    date: "Feb 18, 2026",
    views: 19,
    description:
      "Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence",
    readLink: "#",
    tags: ["growth", "ai", "business"],
  },
];



const CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "ai", label: "Artificial Intelligence" },
  { value: "leadership", label: "Leadership" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business & Growth" },
];

const PER_PAGE = 6;

export default function ReframeReadsGrid() {
  const [articles, setArticles] = useState(ALL_ARTICLES.slice(0, PER_PAGE));
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [savedIds, setSavedIds] = useState({});

  useEffect(() => {
    let list = ALL_ARTICLES.slice();

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(term) ||
          a.articleTitle.toLowerCase().includes(term) ||
          a.author.toLowerCase().includes(term)
      );
    }

    if (category !== "all") {
      list = list.filter((a) => a.category === category);
    }

    if (sortBy === "most-viewed") {
      list.sort((a, b) => b.views - a.views);
    } else if (sortBy === "title-az") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    setArticles(list.slice(0, page * PER_PAGE));
  }, [searchTerm, category, sortBy, page]);

  const totalCount = ALL_ARTICLES.length;
  const visibleCount = articles.length;

  function clearFilters() {
    setSearchTerm("");
    setCategory("all");
    setSortBy("newest");
    setPage(1);
  }

  function loadMore() {
    setPage((p) => p + 1);
  }

  function toggleSave(id) {
    setSavedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function shareArticle(article) {
    if (navigator.share) {
      navigator
        .share({ title: article.articleTitle, url: article.readLink })
        .catch(() => {});
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .catch(() => {});
    }
  }

  return (
    <section className="bg-white py-6 sm:py-16 md:py-0">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* ── Filters ── */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
                className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0E2253] transition-colors text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="most-viewed">Most Viewed</option>
              <option value="title-az">Title: A–Z</option>
            </select>
          </div>

          {(searchTerm || category !== "all") && (
            <div className="mt-3 text-right">
              <button
                onClick={clearFilters}
                className="text-[#0E2253] text-sm font-medium hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* ── Results count ── */}
        <div className="mb-6 text-slate-600 text-sm">
          Showing <strong className="text-slate-900">{visibleCount}</strong> of{" "}
          <strong className="text-slate-900">{totalCount}</strong> articles
        </div>

        {/* ── Article Grid (zigzag from VideoSection) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            // Zigzag offset — same logic as VideoSection
            const row = Math.floor(index / 3);
            const col = index % 3;
            let offsetClass = "";
            if (row % 2 === 0) {
              if (col === 1) offsetClass = "lg:mt-8";
            } else {
              if (col === 0 || col === 2) offsetClass = "lg:mt-8";
            }

            return (
              <div key={article.id} className={`group ${offsetClass}`}>
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl">

                  {/* ── Cover Image ── */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add(
                          "bg-gradient-to-br",
                          "from-[#0E2253]",
                          "to-[#1a3a7a]"
                        );
                      }}
                    />

                    {/* Featured / Category badge */}
                    {article.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-[#C7202F] text-white text-xs uppercase rounded">
                        {article.badge}
                      </span>
                    )}

                    {/* Save button */}
                    {/* <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(article.id);
                      }}
                      aria-label="Save article"
                      className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          savedIds[article.id]
                            ? "text-[#0E2253] fill-[#0E2253]"
                            : "text-slate-700"
                        }`}
                      />
                    </button> */}

                    {/* Site URL watermark */}
                    <div className="absolute bottom-2 left-3">
                      <span className="text-white/70 text-[10px]">
                        www.londonstrategycentre.com
                      </span>
                    </div>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="p-5">
                    {/* Article title (prominent) */}
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 leading-snug line-clamp-2">
                      {article.articleTitle}
                    </h3>

                    {/* Date + Views */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{article.views}</span>
                      </div>
                    </div>

                    {/* Edited by LSC */}
                    {article.editedByLSC && (
                      <div className="flex items-center gap-1.5 text-xs text-[#0E2253] mb-3">
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span className="text-sm font-semibold text-[#0095BF] leading-tight hover:underline cursor-pointer line-clamp-2">
                          Edited and repurposed by LSC team
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Read Full Article link */}
                    <div className="flex items-center justify-between mb-4">
                      <a
                        href={article.readLink}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-[#0E2253] transition-colors group/link"
                      >
                        Read Full Article
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      {/* Share */}
                      <button
                        onClick={() => shareArticle(article)}
                        aria-label="Share article"
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Tags */}
                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 border border-slate-500 text-slate-600 text-[11px] font-medium rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── No results ── */}
        {visibleCount === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No articles found
            </h3>
            <p className="text-slate-500 text-sm">
              Try adjusting your filters or search term.
            </p>
          </div>
        )}

        {/* ── Load More ── */}
        {visibleCount < totalCount && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              Load More Articles
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
