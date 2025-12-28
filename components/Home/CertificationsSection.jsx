'use client';

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      badge: 'ADVANCED',
      duration: '12 WEEKS',
      title: 'AI First Accreditation',
      description: 'Comprehensive AI strategy and implementation certification',
      image: '/images/AI.jpg'
    },
    {
      id: 2,
      badge: 'EXPERT',
      duration: '16 WEEKS',
      title: 'Cyber Excellence',
      description: 'Advanced cybersecurity framework and risk management',
      image: '/images/Cyber-Excellence.jpg'
    },
    {
      id: 3,
      badge: 'PROFESSIONALS',
      duration: '10 WEEKS',
      title: 'Digital Logistics Certification',
      description: 'Digital transformation in logistics and supply chain',
      image: '/images/Digital-Logistics.jpg'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            Professional Accreditations and <br /> Certification Schemes
          </h2>
          <p className="text-base text-gray-600">
            Advance your career with our industry-recognized certification programmes
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                index === 1 ? 'lg:-translate-y-12' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-[500px] sm:h-[550px] lg:h-[500px] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 " />
                
                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1 bg-transparent border-2 border-white/60 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl transform translate-y-0 transition-transform duration-500">
                {/* Duration */}
                <p className="text-xs font-semibold tracking-wider text-[#0E2253] mb-3 uppercase">
                  {cert.duration}
                </p>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-normal text-gray-900 mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Hover: Learn More - Slides up from bottom */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}