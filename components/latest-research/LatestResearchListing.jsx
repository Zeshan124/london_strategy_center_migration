import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { LATEST_RESEARCH } from "@/lib/latestResearchData";

export default function LatestResearchListing() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[#0E2253] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/InnerPages/latest-research/banner.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2253] via-[#0E2253]/90 to-[#0E2253]/70" />
        </div>

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-16 sm:pb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase mb-8">
            Insights
          </span>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-4">
              Latest Research
            </h1>
            <div className="w-16 h-0.5 bg-white/25 mb-6" />
            <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
              Research, frameworks and perspectives from London Strategy Centre on leadership, strategy and organisational transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_RESEARCH.map((article) => (
            <Link
              key={article.slug}
              href={`/latest-research/${article.slug}`}
              className="group flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={article.bannerImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0E2253]/5 text-[10px] font-bold tracking-widest text-[#0E2253] uppercase mb-4 w-fit">
                  {article.category}
                </span>

                <h2 className="text-lg sm:text-xl font-light text-gray-900 leading-snug mb-3 group-hover:text-[#0E2253] transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight">{article.author.name}</p>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#0E2253]" />
                        {article.published}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#0E2253]" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="flex items-center gap-2 text-sm font-medium text-[#0E2253] group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
