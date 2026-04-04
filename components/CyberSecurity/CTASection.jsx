"use client";

const DEFAULT = {
  heading: "Structured protection that strengthens over time",
  paragraphs: [
    "Certification demonstrates compliance at a point in time. What distinguishes resilient organisations is the ability to maintain and improve security posture as threats evolve, systems change, and regulatory expectations tighten.",
    "LSC's approach builds that structural capability. Technical assessments feed into governance improvements. Governance improvements inform architecture decisions. Architecture decisions strengthen the foundation for future certifications. Each engagement contributes to a compounding improvement cycle rather than an isolated deliverable.",
  ],
  image: "/images/InnerPages/cyber-security/cta-section.jpg",
};

export default function CTASection({ cta }) {
  const { heading, paragraphs, image } = cta ?? DEFAULT;

  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Content */}
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              {p}
            </p>
          ))}
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:min-h-[420px]">
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
