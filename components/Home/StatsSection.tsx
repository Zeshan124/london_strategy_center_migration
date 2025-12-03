
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: "1,200+",
      label: "Leaders Developed",
      description: "Across all four pillars"
    },
    {
      number: "500+",
      label: "AI Certifications",
      description: "Completed successfully"
    },
    {
      number: "300+",
      label: "Cybersecurity Experts",
      description: "Trained and certified"
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Certification completion"
    },
    {
      number: "50+",
      label: "Global Partners",
      description: "Across industries"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In strategic consulting"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable results across our four pillars and certification programs, driving transformation for organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="text-4xl font-bold text-red-800 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
