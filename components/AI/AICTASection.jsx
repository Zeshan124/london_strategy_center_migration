"use client";

const DEFAULT = {
  heading: "AI investment without system-level design produces noise, not capability ",
  paragraphs: [
    "Organisations acquire AI tools, build data teams, and commission pilots. What they rarely do is redesign the organisational system around AI’s actual potential: faster sensing, sharper decision-making, and adaptive execution at scale. The result is fragmented adoption, executive scepticism, and a widening distance between what AI could deliver and what it does. The problem is structural. AI is being added to organisations that were designed before AI existed. Without intervening at the level of leadership practice, decision rights, and operating model, technology investment compounds cost without compounding capability. ",
  ],
  image: "/images/InnerPages/artificial-intelligence/ai-investment.jpg",
};

export default function AICTASection({ cta }) {
  const { heading, paragraphs, image } = cta ?? DEFAULT;

  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
        {/* Left Content */}
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
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
