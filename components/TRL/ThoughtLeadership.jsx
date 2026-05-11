"use client";

const DEFAULT = {
  heading: "Thought leadership grounded in system-level practice",
  paragraphs: [
    "What distinguishes The Reframe Lab from the wider landscape of executive content is its origin. Every perspective published here is informed by LSC's direct work with leadership teams navigating capability transformation in complex environments — from GCC government programmes to defence modernisation, from enterprise operating model redesign to AI-augmented leadership development.",
"This is not thought leadership produced at a distance from practice. It is the intellectual output of an organisation that operates across all three tiers of capability transformation: Organisational Intelligence & Diagnostics, Agentic Leadership Transformation, and Cybernetic Organisation Design. The arguments made here are tested against real organisational systems before they are published."
  ],
  image: "/images/InnerPages/trl/thought_leadership.jpg",
};

export default function ThoughtLeadership({ cta }) {
  const { heading, paragraphs, image } = cta ?? DEFAULT;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
        
        {/* Text (Right on large screens) */}
        <div className="order-1 lg:order-2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
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
        <div className="order-2 lg:order-1 relative h-64 sm:h-80 lg:h-full">
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