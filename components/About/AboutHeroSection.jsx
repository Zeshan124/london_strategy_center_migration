'use client';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen py-12 sm:py-16 lg:py-20 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/about/hero-banner.jpg"
          alt="Modern geometric architecture"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>

      {/* Content */}
       <div className="z-10 px-4 sm:px-6 lg:px-24">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 sm:mb-8 leading-tight">
            About Us <br /> London Strategy Centre
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
            Helping executives and organisations unlock their full potential in
            preparation for the future world of work.
          </p>
        </div>
      </div>
    </section>
  );
}
