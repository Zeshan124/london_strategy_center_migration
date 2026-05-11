"use client";

import Link from "next/link";

const bullets = [
  "Organisational intelligence — how systems sense and interpret strategic signals",
  "Agentic leadership — what it means to lead with AI as a thinking partner in live work",
  "Decision quality and execution coherence under uncertainty",
  "Cybernetic organisation design — building organisations that continuously adapt",
  "Strategy-to-execution alignment in government, defence, and enterprise environments",
];

export default function LessonsForLeaders() {
  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-0 items-stretch min-h-[500px]">

        {/* Left Content */}
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-gray-900">
            What are the lessons for leaders?
          </h2>
          <ul className="space-y-3 mb-8 text-sm sm:text-base text-gray-700">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div>
            <Link
              href="/trl/podcast"
              className="inline-flex items-center px-6 py-3 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#1a3570] transition-all duration-300"
            >
              EXPLORE REFRAME LAB
            </Link>
          </div>
        </div>

        {/* Right Image */}
        {/* <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/trl/cta-section.jpg"
            alt="The Reframe Lab"
            className="w-full h-full object-cover"
          />
        </div> */}

      </div>
    </section>
  );
}
