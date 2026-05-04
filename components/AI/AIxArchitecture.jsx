"use client";

const DEFAULT = {
  architecture: {
    heading: "AIx within LSC's Capability Transformation Architecture",
    paragraph: "AIx operates as an accelerator within London Strategy Centre's three-tier Capability Transformation Architecture. It draws on the diagnostic precision of <strong>Organisational Intelligence &amp; Diagnostics</strong> (Tier 1), immerses leaders in the practice of <strong>Agentic Leadership Transformation</strong> (Tier 2), and introduces the systems thinking that underpins <strong>Cybernetic Organisation Design</strong> (Tier 3). For many organisations, AIx is the entry point, a concentrated experience that clarifies both the strategic challenge and the capability architecture needed to address it.",
  },
  closing: {
    heading: "Move from strategic intent to execution architecture",
    paragraph: "Organisations that master the discipline of AI-augmented strategy execution will not merely adapt to uncertainty, they will define the terms on which they compete. AIx gives leadership teams the methodology, the tools, and the structured experience to make that shift in days, not quarters.",
    cta: "To discuss how AIx can be configured for your leadership team, contact London Strategy Centre.",
  },
};

function RichParagraph({ html }) {
  return (
    <p
      className="text-sm sm:text-base text-gray-700 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function AIxArchitecture({ content }) {
  const c = content ?? DEFAULT;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Section 1 */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
            {c.architecture.heading}
          </h2>
          <RichParagraph html={c.architecture.paragraph} />
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
            {c.closing.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            {c.closing.paragraph}
          </p>
          <p className="text-sm sm:text-base font-bold text-gray-900 italic">
            {c.closing.cta}
          </p>
        </div>

      </div>
    </section>
  );
}
