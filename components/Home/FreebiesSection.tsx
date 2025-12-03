
'use client';

export default function FreebiesSection() {
  const resources = [
    {
      title: "AI Strategy Implementation Framework",
      description: "Comprehensive 40-page guide covering AI adoption strategies, implementation roadmaps, and success metrics for business leaders.",
      type: "PDF Guide",
      pages: "40 pages",
      downloads: "2,847",
      category: "AI Strategy"
    },
    {
      title: "Cybersecurity Assessment Toolkit",
      description: "Complete security audit checklist, risk assessment templates, and compliance frameworks for enterprise security teams.",
      type: "Toolkit",
      pages: "25 templates",
      downloads: "1,923",
      category: "Cybersecurity"
    },
    {
      title: "Leadership Development Planner",
      description: "Strategic leadership development templates, coaching frameworks, and performance tracking tools for executive growth.",
      type: "Templates",
      pages: "15 templates",
      downloads: "3,156",
      category: "Leadership"
    },
    {
      title: "Innovation Strategy Trends 2024",
      description: "Latest insights on emerging technologies, market disruptions, and innovation opportunities across industries.",
      type: "Whitepaper",
      pages: "28 pages",
      downloads: "4,231",
      category: "Innovation"
    },
    {
      title: "Digital Transformation Checklist",
      description: "Step-by-step digital transformation guide with implementation timelines and success indicators.",
      type: "Checklist",
      pages: "12 pages",
      downloads: "2,654",
      category: "Strategy"
    },
    {
      title: "Growth Lab Methodology Guide",
      description: "Experimental growth strategies, testing frameworks, and optimization techniques for rapid business scaling.",
      type: "Methodology",
      pages: "35 pages",
      downloads: "1,789",
      category: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Free Resources & Toolkits</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download our comprehensive guides, frameworks, and toolkits to accelerate your organization's transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {resource.category}
                </span>
                <span className="text-slate-500 text-sm">{resource.type}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{resource.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{resource.description}</p>
              
              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <span>{resource.pages}</span>
                <span>{resource.downloads} downloads</span>
              </div>
              
              <button className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-download-line mr-2"></i>Download Free
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Get Premium Resources</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive access to premium toolkits, industry reports, and early access to new certification programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 text-sm"
            />
            <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
