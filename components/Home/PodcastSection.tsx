
'use client';

export default function PodcastSection() {
  const featuredEpisode = {
    title: "AI-First Leadership: Transforming Organizations in 2024",
    description: "Join our CEO as she discusses the critical leadership skills needed to navigate AI transformation and build resilient, future-ready organizations.",
    host: "Sarah Mitchell, CEO & Strategic Leadership Expert",
    duration: "45 min",
    date: "Dec 15, 2024",
    image: "https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20discussing%20AI%20leadership%20transformation%20in%20modern%20podcast%20studio%2C%20sophisticated%20business%20environment%20with%20digital%20displays%20showing%20AI%20analytics%20and%20strategic%20frameworks%2C%20contemporary%20recording%20setup%20with%20professional%20lighting&width=600&height=400&seq=podcast001&orientation=landscape"
  };

  const episodes = [
    {
      title: "Cybersecurity Excellence: Building Resilient Defense Systems",
      host: "Dr. James Chen, Cybersecurity Director",
      duration: "38 min",
      date: "Dec 10, 2024",
      category: "Cybersecurity"
    },
    {
      title: "Innovation Design Thinking: From Concept to Market",
      host: "Maria Rodriguez, Innovation Lead",
      duration: "42 min",
      date: "Dec 5, 2024",
      category: "Innovation"
    },
    {
      title: "Strategic Growth in Digital Transformation Era",
      host: "Michael Thompson, Strategy Consultant",
      duration: "35 min",
      date: "Nov 28, 2024",
      category: "Strategy"
    },
    {
      title: "Leadership Development in Remote-First Organizations",
      host: "Dr. Emily Watson, Leadership Coach",
      duration: "40 min",
      date: "Nov 22, 2024",
      category: "Leadership"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategy Insights Podcast</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert insights from our leadership team on innovation, strategy, leadership, AI, and cybersecurity trends shaping the future of business.
          </p>
        </div>

        {/* Featured Episode */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Featured Episode
              </span>
              <h3 className="text-2xl font-bold mb-4">{featuredEpisode.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{featuredEpisode.description}</p>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span className="mr-4">{featuredEpisode.host}</span>
                <span className="mr-4">•</span>
                <span className="mr-4">{featuredEpisode.duration}</span>
                <span className="mr-4">•</span>
                <span>{featuredEpisode.date}</span>
              </div>
              <div className="flex gap-4">
                <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-play-fill mr-2"></i>Play Now
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-download-line mr-2"></i>Download
                </button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src={featuredEpisode.image}
                alt="Featured Podcast Episode"
                className="rounded-xl shadow-lg w-full max-w-md ml-auto object-cover h-64"
              />
            </div>
          </div>
        </div>

        {/* Episode List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {episode.category}
                </span>
                <span className="text-slate-500 text-sm">{episode.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{episode.title}</h3>
              <div className="flex items-center text-sm text-slate-600 mb-4">
                <span className="mr-4">{episode.host}</span>
                <span className="mr-4">•</span>
                <span>{episode.duration}</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-play-fill mr-2"></i>Play
                </button>
                <button className="border border-slate-300 text-slate-700 hover:bg-slate-100 py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-download-line mr-2"></i>Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
