"use client";

const DEFAULT = {
  heading: "Advisory grounded in organisational intelligence, not opinion",
  paragraphs: [
    "What distinguishes LSC's advisory practice is the diagnostic foundation on which it operates. Every engagement begins with a structured assessment of how the organisation senses its environment, frames problems, makes decisions, and translates intent into action. This is organisational intelligence — the capacity of a system to sense, interpret, and respond to complexity — and it determines whether advisory interventions produce lasting performance improvement or temporary compliance.",

"LSC applies AI-enabled sensing to surface patterns that conventional analysis misses: where execution bottlenecks cluster, how decision quality varies across the organisation, which constraints are systemic rather than situational, and what readiness exists for intervention. This intelligence shapes every advisory recommendation and ensures that interventions target the root system, not its symptoms."
  ],
  image: "/images/InnerPages/advisory/advisory_grounded.jpg",
};

export default function SecondCTASection({ cta }) {
  const { heading, paragraphs, image } = cta ?? DEFAULT;

  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
        
        {/* Text (Right on large screens) */}
        <div className="order-2 lg:order-2 bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {/* Image (Left on large screens) */}
        <div className="order-1 lg:order-1 relative h-64 sm:h-80 lg:h-full">
          <img
            src={image}
            alt={heading}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}