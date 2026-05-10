"use client";

const DEFAULT = {
  heading: "Strategy fails at the execution layer, not the boardroom ",
  paragraphs: [
    "The presenting problem in most organisations is rarely a lack of strategy. It is the systematic dilution of strategic intent as it passes through layers of interpretation, competing priorities, and misaligned operating structures. Decision quality degrades. Execution fragments. The organisation performs below its capability — not because individuals lack skill, but because the system does not support coherent action.",
"LSC's advisory services address this structural challenge directly. Rather than advising on what to do, LSC works alongside leadership teams to redesign how the organisation decides, coordinates, and executes. This means intervening at the level of decision architecture, accountability frameworks, operating model design, and the governance systems that connect strategy to operational reality."
  ],
  bullets: null,
  image: "/images/InnerPages/advisory/strategy_fails.jpg",
};

export default function CTASection({ cta }) {
  const { heading, paragraphs, bullets, image } = cta ?? DEFAULT;

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
          {bullets?.length > 0 && (
            <ul className="space-y-3 mt-4 text-sm sm:text-base text-gray-700">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-900" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
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
