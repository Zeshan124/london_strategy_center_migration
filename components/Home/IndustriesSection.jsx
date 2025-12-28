'use client';

export default function IndustriesSection() {
  const industries = [
    {
      id: 1,
      badge: 'AEROSPACE',
      title: 'Aerospace and Defence',
      description: 'Strategic consulting for aerospace innovation and defense sector transformation',
      image: '/images/home/industries-section-1.jpg'
    },
    {
      id: 2,
      badge: 'PUBLIC',
      title: 'Public Sector',
      description: 'Public administration optimization and digital government solutions',
      image: '/images/home/industries-section-2.jpg'
    },
    {
      id: 3,
      badge: 'TECH',
      title: 'Technology, Media and Telecommunications',
      description: 'Digital transformation and innovation strategies for tech companies',
      image: '/images/home/industries-section-3.jpg'
    },
    {
      id: 4,
      badge: 'INDUSTRIES',
      title: 'Private Industries',
      description: 'Comprehensive business solutions for private sector enterprises',
      image: '/images/home/industries-section-4.jpg'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 text-gray-900">
            Our Industries
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Specialized expertise across diverse sectors and industries
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0" />
                
                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {industry.badge}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-3 shadow-xl transform transition-all duration-500">
                {/* Title */}
                <h3 className="text-lg font-normal text-gray-900 mb-2 leading-tight">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}