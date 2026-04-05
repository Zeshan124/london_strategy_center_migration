"use client";

const DEFAULT = {
  image: "/images/InnerPages/cyberexcellence/uni-birmingham.jpg",
  heading: "University of Birmingham",
  paragraphs: [
    "University of Birmingham acts as the independent Assurance Body for this Cybersecurity Certification Framework. It ensures the integrity of the scheme and drives continual improvement. This includes conducting impartial reviews of certification activities, analysing certification trends, and generating threat insights that feed back into the framework’s evolution.",
    "Through its global academic expertise, the Assurance Body provides evidence-based oversight and ensures that the certification process remains rigorous, credible, and aligned with international best practices.",
  ],
  logo: "/images/InnerPages/cyberexcellence/uof-logo.png",
  logoAlt: "University of Birmingham Logo",
};

export default function UniBirmingham({ partner }) {
  const { image, heading, paragraphs, logo, logoAlt } = partner ?? DEFAULT;

  return (
    <section className="py-6 sm:py-16 md:py-20 lg:py-10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">

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
