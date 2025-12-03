
'use client';

export default function NewsSection() {
  const insights = [
    {
      title: "AI-Driven Leadership: The New Executive Imperative",
      excerpt: "How artificial intelligence is reshaping leadership roles and the critical skills executives need to thrive in an AI-first world.",
      category: "Leadership",
      date: "Dec 18, 2024",
      readTime: "5 min read",
      image: "https://readdy.ai/api/search-image?query=Executive%20leader%20using%20AI%20technology%20for%20strategic%20decision%20making%20in%20modern%20corporate%20boardroom%2C%20sophisticated%20business%20environment%20with%20digital%20analytics%20displays%20and%20artificial%20intelligence%20interfaces%2C%20professional%20consulting%20atmosphere&width=400&height=250&seq=news001&orientation=landscape"
    },
    {
      title: "Cybersecurity Excellence: Building Resilient Organizations",
      excerpt: "Essential cybersecurity frameworks and best practices for protecting your organization against evolving digital threats.",
      category: "Cybersecurity",
      date: "Dec 15, 2024",
      readTime: "7 min read",
      image: "https://readdy.ai/api/search-image?query=Cybersecurity%20professionals%20monitoring%20advanced%20security%20systems%20and%20threat%20detection%20displays%20in%20modern%20security%20operations%20center%2C%20sophisticated%20digital%20defense%20environment%20with%20multiple%20screens%20showing%20security%20analytics&width=400&height=250&seq=news002&orientation=landscape"
    },
    {
      title: "Strategic Innovation in Digital Transformation",
      excerpt: "Breakthrough strategies for driving innovation and maintaining competitive advantage in rapidly evolving digital markets.",
      category: "Innovation",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      image: "https://readdy.ai/api/search-image?query=Innovation%20team%20collaborating%20on%20digital%20transformation%20strategy%20using%20advanced%20technology%20and%20design%20thinking%20methodologies%20in%20modern%20innovation%20lab%2C%20creative%20workspace%20with%20digital%20whiteboards%20and%20prototype%20displays&width=400&height=250&seq=news003&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay ahead with our expert analysis on innovation, cybersecurity, leadership, and strategic transformation trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {insight.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <span>{insight.date}</span>
                  <span className="mx-2">•</span>
                  <span>{insight.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-red-800 transition-colors cursor-pointer">
                  {insight.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{insight.excerpt}</p>
                
                <button className="text-red-800 hover:text-red-900 font-semibold transition-colors cursor-pointer">
                  Read More <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
}
