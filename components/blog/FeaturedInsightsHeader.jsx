'use client';

export default function FeaturedInsightsHeader() {
  return (
    <section className="bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 max-w-5xl">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900 mb-6 sm:mb-8 lg:mb-10">
          Featured Insights and Perspectives from LSC
        </h2>

        {/* Subheading */}
        <div className="max-w-5xl">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            <span className="font-semibold">The latest insights, ideas, and perspectives from London Strategy Centre.</span>
            {' '}Explore a curated selection of up-to-date content on{' '}
            <span className="font-semibold">strategy, leadership,</span> and{' '}
            <span className="font-semibold">innovation</span> shaping the future of organisations and society.
          </p>
        </div>
      </div>
    </section>
  );
}