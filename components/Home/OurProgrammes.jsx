"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurProgrammes() {
 const industries = [
    {
      id: 1,
      title: 'CT Scan',
      description: 'An AI-enabled diagnostic, mapping how leaders think, decide, and execute, then surfacing the systemic constraints on performance.',
      image: '/images/home/ct_scan.jpg',
      href: '/artificial-intelligence/capability-transformation-scan',
    },
    {
      id: 2,
      title: 'Agentic Leadership',
      description: 'Producing measurable shifts in decision quality and execution coherence, not just competency scores or attendance on a programme.',
      image: '/images/home/agentic_ai.jpg',
      href: '/artificial-intelligence/agentic-leadership-transformation',
    },
    {
      id: 3,
      title: 'Cybernetics Transformation',
      description: 'Redesigning decision architecture, sensing systems, and governance so your organisation continuously senses, adapts, and performs.',
      image: '/images/home/cybernetics.jpg',
      href: '/artificial-intelligence/cybernetic-organisation-design',
    },
  ];
 return (
    <section className="bg-white py-16 sm:py-20 lg:py-12">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Specialised expertise across diverse sectors and industries
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] sm:h-[550px] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0" />
                
                {/* Badge */}
                {/* <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md border border-white/50 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {industry.badge}
                  </span>
                </div> */}
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl transform transition-all duration-500">
                {/* Title */}
                <h3 className="text-lg sm:text-2xl font-normal text-gray-900 mb-2 leading-tight">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>

                {/* Hover: Arrow - Appears on hover */}
                {/* <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}