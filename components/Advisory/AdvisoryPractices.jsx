"use client";

import Image from "next/image";

const DEFAULT_HEADING = "Two complementary advisory practices";
const DEFAULT_SUBHEADING = "LSC's advisory work spans two complementary practice areas, each targeting a distinct but interconnected dimension of organisational performance.";
const DEFAULT_PRACTICES = [
  {
    id: 1,
    image: "/images/InnerPages/advisory/operational_and_advisory.jpg",
    title: "Operational and Strategic Advisory",
    description:
      "addresses how organisations align strategy with execution at system level. This practice works with C-suite leaders, boards, and government decision-makers to improve decision quality, execution coherence, and operating model effectiveness.",
  },
  {
    id: 2,
    image: "/images/InnerPages/advisory/entrepreneurship_scaleup.jpg",
    title: "Entrepreneurship and Scale-Up Advisory",
    description:
      "supports governments, development institutions, and ecosystem builders in designing and delivering programmes that equip SMEs and growth-stage ventures for international expansion.",
  },
];

export default function AdvisoryPractices({ heading, subheading, practices }) {
  const resolvedHeading = heading !== undefined ? heading : DEFAULT_HEADING;
  const resolvedSubheading = subheading !== undefined ? subheading : DEFAULT_SUBHEADING;
  const resolvedPractices = practices !== undefined ? practices : DEFAULT_PRACTICES;

  if (!resolvedPractices) return null;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        
        {/* Header — only renders when heading or subheading is provided */}
        {(resolvedHeading || resolvedSubheading) && (
          <div className="mb-10 sm:mb-12 md:mb-16">
            {resolvedHeading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-4 sm:mb-6">
                {resolvedHeading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
            )}
            {resolvedSubheading && (
              <p className="text-sm sm:text-base text-slate-700 max-w-5xl">
                {resolvedSubheading}
              </p>
            )}
          </div>
        )}

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {resolvedPractices.map((practice) => (
            <div
              key={practice.id}
              className="group bg-[#F5F3F0] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-slate-900 mb-4 sm:mb-6">
                  {practice.title}
                </h3>

                {/* Description */}
                {Array.isArray(practice.description)
                  ? practice.description.map((p, i) => (
                      <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3 last:mb-0">{p}</p>
                    ))
                  : <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{practice.description}</p>
                }
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}