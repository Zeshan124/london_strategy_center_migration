"use client";

const DEFAULT = {
  image: "/images/about/Capability_transformation.jpg",
  heading: "LSC is your capability transformation partner",
  paragraphs: [
    "The central premise of LSC's work is that measurable organisational performance improvement requires a system-level intervention, not a training programme, a strategy report, or a technology implementation. It requires redesigning how the organisation senses its environment, how decisions are made and communicated, how execution is governed, and how capability compounds across time. That is what LSC builds.",
  ],
  subheading: null,
  logo: null,
  logoAlt: "banner image",
};

export default function CTASection({ partner }) {
  const { image, heading, paragraphs, subheading, logo, logoAlt } = partner ?? DEFAULT;

  return (
   <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">

        {/* Left Image — hidden on mobile, shown on desktop */}
        <div className="hidden lg:block relative h-64 sm:h-80 lg:h-full">
          <img src={image} alt={heading} className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            {heading}
          </h2>

          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {subheading && (
            <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-4">
              {subheading}
            </h3>
          )}

          {logo && (
            <div className="mt-2">
              <img src={logo} alt={logoAlt ?? heading} className="w-50 mb-6" />
            </div>
          )}
        </div>

        {/* Image shown on mobile only */}
        <div className="block lg:hidden relative h-64 sm:h-80">
          <img src={image} alt={heading} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
