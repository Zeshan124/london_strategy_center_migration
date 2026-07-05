"use client";

import { useState, useEffect } from "react";
import { Play, Share2, Calendar, Eye, Clock, ArrowRight } from "lucide-react";

const YT_API = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "";
const PER_PAGE = 12;

function detectCategory(title = "") {
  const t = title.toLowerCase();
  if (["podcast","trl","episode","ep ","ep.","interview","discussion","conversation","#podcast"].some(k => t.includes(k))) return "Podcast";
  if (["ai ","artificial intelligence","machine learning","chatgpt","automation","neural","deep learning"].some(k => t.includes(k))) return "AI";
  if (["marketing","seo","social media","branding","advertisement"].some(k => t.includes(k))) return "Marketing";
  if (["ecommerce","e-commerce","shopify","amazon","dropshipping"].some(k => t.includes(k))) return "Ecommerce";
  if (["technology","tech ","software","development","coding"].some(k => t.includes(k))) return "Technology";
  return "Business";
}

function formatDuration(iso) {
  if (!iso) return null;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return iso;
  const h = parseInt(m[1] || 0), min = parseInt(m[2] || 0), s = parseInt(m[3] || 0);
  if (h > 0) return `${h}:${String(min).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  return `${min}:${String(s).padStart(2,"0")}`;
}

async function fetchLiveVideos() {
  if (!API_KEY || !CHANNEL_ID) return [];

  // 1. Get uploads playlist ID
  const chRes = await fetch(`${YT_API}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`);
  if (!chRes.ok) return [];
  const chData = await chRes.json();
  const playlistId = chData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!playlistId) return [];

  // 2. Crawl playlist pages
  const items = [];
  let pageToken = null;
  do {
    const url = `${YT_API}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) break;
    const data = await res.json();
    (data.items || []).forEach(item => {
      items.push({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || null,
        publishedAt: item.snippet.publishedAt,
        category: detectCategory(item.snippet.title),
      });
    });
    pageToken = data.nextPageToken;
  } while (pageToken);

  // 3. Enrich with duration + viewCount in batches of 50
  const chunks = [];
  for (let i = 0; i < items.length; i += 50) chunks.push(items.slice(i, i + 50));
  for (const chunk of chunks) {
    const ids = chunk.map(v => v.videoId).join(",");
    const res = await fetch(`${YT_API}/videos?part=contentDetails,statistics&id=${ids}&key=${API_KEY}`);
    if (!res.ok) continue;
    const data = await res.json();
    (data.items || []).forEach(item => {
      const v = chunk.find(x => x.videoId === item.id);
      if (v) {
        v.duration = formatDuration(item.contentDetails?.duration);
        v.viewCount = item.statistics?.viewCount || 0;
      }
    });
  }

  return items;
}

export default function VideoSection({ initialVideos = [], allVideos: buildAllVideos = [], totalCount: buildTotal = 0 }) {
  const [liveVideos, setLiveVideos] = useState(null); // null = not fetched yet
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [expandedIds, setExpandedIds] = useState({});
  const [now, setNow] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setNow(Date.now());
    // Fetch live data on mount — bypasses build-time freeze
    fetchLiveVideos()
      .then(videos => { if (videos.length > 0) setLiveVideos(videos); })
      .catch(() => setFetchError(true));
  }, []);

  // Use live data when available, fall back to build-time data
  const sourceVideos = liveVideos ?? buildAllVideos;
  const totalCount = liveVideos ? liveVideos.length : buildTotal;

  // Filter + sort + paginate
  const filtered = (() => {
    let list = sourceVideos.slice();
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(v => (v.title || "").toLowerCase().includes(term));
    }
    if (category && category !== "all") {
      list = list.filter(v => (v.category || "").toLowerCase() === category.toLowerCase());
    }
    switch (sortBy) {
      case "newest": list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); break;
      case "oldest": list.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)); break;
      case "most-viewed": list.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0)); break;
      case "title-az": list.sort((a, b) => (a.title || "").localeCompare(b.title || "")); break;
    }
    return list;
  })();

  const visible = filtered.slice(0, page * PER_PAGE);
  const visibleCount = visible.length;
  const filteredTotal = filtered.length;

  function clearFilters() { setSearchTerm(""); setCategory("all"); setSortBy("newest"); setPage(1); }
  function loadMore() { setPage(p => p + 1); }
  function shareVideo(video) {
    const url = `https://www.youtube.com/watch?v=${video.videoId}`;
    if (navigator.share) navigator.share({ title: video.title, url }).catch(() => {});
    else window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "width=600,height=400");
  }
  function toggleExpand(id) { setExpandedIds(prev => ({ ...prev, [id]: !prev[id] })); }

  return (
    <section className="py-12 sm:py-16 md:py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Search / Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Search videos..." value={searchTerm} onChange={e => { setSearchTerm(e.target.value); setPage(1); }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
            <select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
              <option value="all">All Categories</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="business">Business & Growth</option>
              <option value="marketing">Digital Marketing</option>
              <option value="ecommerce">E-commerce</option>
              <option value="podcast">Podcast</option>
            </select>
            <select value={sortBy} onChange={e => { setSortBy(e.target.value); setPage(1); }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="most-viewed">Most Viewed</option>
              <option value="title-az">Title: A-Z</option>
            </select>
          </div>
          {(searchTerm || category !== "all") && (
            <div className="mt-3 text-right">
              <button onClick={clearFilters} className="text-blue-600 text-sm font-medium hover:underline">Clear All Filters</button>
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-slate-600 text-sm">
            Showing <strong className="text-slate-900">{visibleCount}</strong> of{" "}
            <strong className="text-slate-900">{filteredTotal}</strong> videos
            {totalCount > 0 && <span className="text-slate-400 text-xs ml-2">({totalCount} total)</span>}
          </div>
          {liveVideos === null && !fetchError && (
            <span className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-3 h-3 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
              Loading latest…
            </span>
          )}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((video) => {
            const isNew = now && video.publishedAt
              ? new Date(video.publishedAt) > new Date(now - 7 * 24 * 60 * 60 * 1000)
              : false;
            const desc = video.description || "";
            const isLong = desc.length > 100;
            const tags = video.tags || [];

            return (
              <div key={video.videoId} className="group">
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img src={video.thumbnail} alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded">
                        {video.category || "AI"}
                      </span>
                      {isNew && (
                        <span className="px-3 py-1 bg-slate-900 border border-white text-white text-xs font-bold uppercase rounded flex items-center gap-1">
                          <span className="text-yellow-400">★</span> NEW
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-slate-900/90 text-white text-xs font-medium rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration || "—"}
                      </span>
                    </div>
                    <button onClick={e => { e.stopPropagation(); shareVideo(video); }}
                      className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg" aria-label="Share">
                      <Share2 className="w-4 h-4 text-slate-700" />
                    </button>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button onClick={() => setCurrentVideo(video)}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-[#0095BF] mb-3 leading-tight hover:underline cursor-pointer line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{video.publishedAt ? new Date(video.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.viewCount ? Number(video.viewCount).toLocaleString() : "—"}</span>
                      </div>
                    </div>
                    {desc && (
                      <div className="mb-3">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {expandedIds[video.videoId] ? desc : desc.slice(0, 100) + (isLong ? "..." : "")}
                        </p>
                        {isLong && (
                          <button onClick={() => toggleExpand(video.videoId)}
                            className="text-sm text-slate-900 font-semibold mt-2 flex items-center gap-1 hover:gap-2 transition-all">
                            {expandedIds[video.videoId] ? "Show Less" : "Read More"}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                        {tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="px-3 py-1 border border-slate-300 text-slate-700 text-xs font-medium rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
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

        {visibleCount === 0 && (
          <div className="text-center py-16">
            <Play className="w-16 h-16 mx-auto mb-4 text-slate-400" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No videos found</h3>
            <p className="text-slate-600">Try adjusting your filters or search term.</p>
          </div>
        )}

        {visibleCount < filteredTotal && (
          <div className="text-center mt-12">
            <button onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Videos <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Video Modal */}
        {currentVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 pr-8">{currentVideo.title}</h2>
                <button onClick={() => setCurrentVideo(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900">
                  <span className="text-3xl leading-none">×</span>
                </button>
              </div>
              <div className="w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
                  className="w-full h-full" title={currentVideo.title} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
