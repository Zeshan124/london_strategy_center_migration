'use client';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/about/hero-banner.jpg"
          alt="Modern geometric architecture"
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10  mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
            About LSC
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
            Helping executives and organizations unlock their full potential in preparation for the future world of work.
          </p>
        </div>
      </div>
    </section>
  );
}