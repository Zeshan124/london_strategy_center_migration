'use client';

import { ArrowRight } from 'lucide-react';

export default function BlogArticlesSection() {
  const articles = [
    {
      id: 1,
      badge: 'LEADERSHIP',
      date: 'DEC 18, 2025',
      readTime: '5 MIN READ',
      title: 'AI-Driven Leadership: The New Executive Imperative',
      image: '/images/home/Leadership.jpg',
      size: 'large'
    },
    {
      id: 2,
      badge: 'CYBERSECURITY',
      date: 'DEC 14, 2025',
      readTime: '7 MIN READ',
      title: 'Cybersecurity Excellence: Building Resilient Organizations',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      size: 'small'
    },
    {
      id: 3,
      badge: 'INNOVATION',
      date: 'DEC 12, 2025',
      readTime: '6 MIN READ',
      title: 'Strategic Innovation in Digital Transformation',
      image: '/images/home/Innovation.jpg',
      size: 'small'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Card - Left Side */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="relative h-[500px] lg:h-[600px]">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                  {articles[0].badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-white/90 mb-4">
                  <span className="font-medium">{articles[0].date}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
                  {articles[0].title}
                </h3>

                {/* Read More Button */}
              <div className="flex justify-end">
  <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
    READ MORE
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
              </div>
            </div>
          </div>

          {/* Right Side - Two Small Cards */}
          <div className="flex flex-col gap-6">
            {/* Small Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-[#F1EEEA]">
              <div className="p-8 lg:p-10">
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-md text-xs font-medium tracking-wider text-gray-700 uppercase">
                    {articles[1].badge}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                  <span className="font-medium">{articles[1].date}</span>
                  <span>•</span>
                  <span>{articles[1].readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6 leading-tight">
                  {articles[1].title}
                </h3>

                {/* Read More Button */}
                <div className="flex justify-end">
  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300">
    READ MORE
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="relative h-[280px]">
                <img
                  src={articles[2].image}
                  alt={articles[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {articles[2].badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-white/90 mb-3">
                    <span className="font-medium">{articles[2].date}</span>
                    <span>•</span>
                    <span>{articles[2].readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-light text-white mb-4 leading-tight">
                    {articles[2].title}
                  </h3>

                  {/* Read More Button */}
                  <div className="flex justify-end">
  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300">
    READ MORE
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}