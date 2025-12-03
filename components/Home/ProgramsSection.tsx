
'use client';

import Link from 'next/link';

export default function ProgramsSection() {
  const pillars = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Business Strategy',
      description: 'Strategic planning, market analysis, and competitive intelligence to drive sustainable growth.',
      features: ['Strategic Planning', 'Market Analysis', 'Competitive Intelligence', 'Growth Strategy']
    },
    {
      icon: 'ri-palette-line',
      title: 'Innovation Design',
      description: 'Design thinking and technology integration for breakthrough business solutions.',
      features: ['Design Thinking', 'Technology Integration', 'Digital Innovation', 'Product Development']
    },
    {
      icon: 'ri-team-line',
      title: 'Leadership Development',
      description: 'Executive coaching and organizational transformation for effective leadership.',
      features: ['Executive Coaching', 'Team Building', 'Change Management', 'Leadership Skills']
    },
    {
      icon: 'ri-flask-line',
      title: 'Growth Lab',
      description: 'Experimental growth strategies and data-driven optimization for scaling success.',
      features: ['Growth Hacking', 'Data Analytics', 'Performance Optimization', 'Scaling Strategies']
    }
  ];

  const certifications = [
    {
      title: 'AI First Accreditation',
      duration: '12 weeks',
      description: 'Comprehensive AI strategy and implementation certification',
      level: 'Advanced'
    },
    {
      title: 'Cyber Excellence',
      duration: '16 weeks',
      description: 'Advanced cybersecurity framework and risk management',
      level: 'Expert'
    },
    {
      title: 'Digital Logistics Certification',
      duration: '10 weeks',
      description: 'Digital transformation in logistics and supply chain',
      level: 'Professional'
    }
  ];

  const industries = [
    {
      icon: 'ri-rocket-line',
      title: 'Aerospace and Defence',
      description: 'Strategic consulting for aerospace innovation and defense sector transformation'
    },
    {
      icon: 'ri-government-line',
      title: 'Public Sector',
      description: 'Public administration optimization and digital government solutions'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Technology, Media and Telecommunications',
      description: 'Digital transformation and innovation strategies for tech companies'
    },
    {
      icon: 'ri-building-line',
      title: 'Private Industries',
      description: 'Comprehensive business solutions for private sector enterprises'
    },
    {
      icon: 'ri-truck-line',
      title: 'Transportation and Logistics',
      description: 'Supply chain optimization and logistics efficiency improvements'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Education',
      description: 'Educational institution strategy and digital learning transformation'
    },
    {
      icon: 'ri-bank-line',
      title: 'Financial Institutions',
      description: 'Financial services innovation and regulatory compliance strategies'
    },
    {
      icon: 'ri-oil-line',
      title: 'Oil and Gas',
      description: 'Energy sector transformation and sustainable operations consulting'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Discover Our Four Pillars
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Our comprehensive approach combines strategic thinking, innovative design, 
            leadership excellence, and experimental growth to transform your business.
          </p>
          
          <Link 
            href="/programs" 
            className="inline-flex items-center bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors duration-200 font-medium whitespace-nowrap"
          >
            Explore All Programs
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-800 rounded-lg flex items-center justify-center mb-6">
                <i className={`${pillar.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 mb-6">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <i className="ri-check-line text-red-800 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Professional Accreditations and Certification Schemes</h3>
            <p className="text-lg text-slate-600">
              Advance your career with our industry-recognized certification programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 hover:border-red-800 transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {cert.level}
                  </span>
                  <span className="text-slate-500 text-sm">{cert.duration}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h4>
                <p className="text-slate-600 mb-6">{cert.description}</p>
                <button className="w-full bg-slate-100 text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium whitespace-nowrap">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Industries</h3>
            <p className="text-lg text-slate-600">
              Specialized expertise across diverse sectors and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6 hover:border-red-800 hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${industry.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{industry.title}</h4>
                <p className="text-slate-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
