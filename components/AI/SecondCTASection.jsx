"use client";

const DEFAULT = {
  heading: "Built for leaders operating under complexity",
  paragraphs: [
    "LSC works with CEOs, executive committees, boards, and government leaders who face decisions with systemic consequences. Our clients include defence and security organisations, sovereign wealth enterprises, large-scale public sector bodies, and global enterprises in healthcare, energy, and infrastructure.  This is not an AI training programme. It is a system-level partnership that changes how an organisation performs permanently. ",
  ],
  image: "/images/InnerPages/artificial-intelligence/cta-section.jpg",
};

export default function SecondCTASection({ cta }) {
  const { heading, paragraphs, image } = cta ?? DEFAULT;

  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">
        
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