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
    <section className="">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-8 sm:mb-4">
        <div className="flex flex-col justify-center">
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
              href="/reframe-reads"
              className="inline-flex items-center px-6 py-3 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#1a3570] transition-all duration-300"
            >
              EXPLORE REFRAME READS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
