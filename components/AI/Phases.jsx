'use client';

import Link from 'next/link';

const DEFAULT_INTRO = {
  heading: null,
  paragraphs: null,
};

const DEFAULT_HEADING = 'From diagnosis to embedded capability in three phases';
const DEFAULT_SUBHEADING = null;
const DEFAULT_PHASES = [
  {
    id: 1,
    title: 'Phase 1 — Sense:',
    description: 'Deploy Tier 1 diagnostics to map the organisation’s decision patterns, execution friction points, and capability readiness for AI-augmented ways of working. ',
    image: '/images/InnerPages/artificial-intelligence/shared/phase-1-sense.jpg',
    href: null,
  },
  {
    id: 2,
    title: 'Phase 2 — Transform:',
    description: 'Run Tier 2 agentic leadership labs on live business challenges. Leaders develop new practices with AI as a thinking partner, producing measurable shifts in decision quality.',
    image: '/images/InnerPages/artificial-intelligence/shared/phase-2-transform.jpg',
    href: '/cyber-security',
  },
  {
    id: 3,
    title: 'Phase 3 — Embed:',
    description: 'Design and implement Tier 3 cybernetic systems — governance frameworks, sensing infrastructure, and feedback loops that make capability self-sustaining.  ',
    image: '/images/InnerPages/artificial-intelligence/shared/phase-3-embed.jpg',
    href: null,
  },
];

export default function Phases({ heading, subheading, phases, intro }) {
  const resolvedIntro    = intro ?? DEFAULT_INTRO;
  const resolvedHeading  = heading ?? DEFAULT_HEADING;
  const resolvedSubheading = subheading ?? DEFAULT_SUBHEADING;
  const resolvedPhases   = phases ?? DEFAULT_PHASES;

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-24">

        {/* Intro block */}
        {resolvedIntro && (resolvedIntro.heading || resolvedIntro.paragraphs?.filter(Boolean).length > 0) && (
          <div className="mb-12 lg:mb-16">
            {resolvedIntro.heading && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6 text-gray-900">
                {resolvedIntro.heading}
              </h2>
            )}
            {resolvedIntro.paragraphs?.filter(Boolean).length > 0 && (
              <div className="space-y-4">
                {resolvedIntro.paragraphs.filter(Boolean).map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            {resolvedHeading}
          </h2>
          {resolvedSubheading && (
            <p className="text-base text-gray-600">{resolvedSubheading}</p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resolvedPhases.map((phase, index) => {
            const Wrapper = phase.href ? Link : 'div';
            return (
            <Wrapper
              key={phase.id}
              {...(phase.href ? { href: phase.href } : {})}
              className={`group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                index === 1 ? 'lg:-translate-y-12' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-[500px] sm:h-[550px] lg:h-[500px] overflow-hidden">
                <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 " />
                
                {/* Badge */}
                {/* <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1 bg-black/50 border-2 border-white/60 rounded-md text-xs font-medium tracking-wider text-white uppercase">
                    {phase.badge}
                  </span>
                </div> */}
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl transform translate-y-0 transition-transform duration-500">
                {/* Duration */}
                {/* <p className="text-xs font-semibold tracking-wider text-[#0E2253] mb-3 uppercase">
                  {cert.duration}
                </p> */}

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-normal text-gray-900 mb-2 leading-tight">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {phase.description}
                </p>

                {/* Hover: Learn More - Slides up from bottom */}
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}