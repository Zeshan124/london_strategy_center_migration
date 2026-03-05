"use client";

import Image from "next/image";

export default function ProgramHighlights() {
  const practiceItems = [
    "Understanding digital transformation and its impact on leadership.",
    "Designing strategies to lead change and overcome resistance.",
    "Building resilience and adaptability in uncertain environments.",
    "Communicating with confidence and expanding your network.",
    "Leading innovation and driving cultural change.",
    "Inspiring teams through authentic and influential leadership.",
  ];

  const loveItems = [
    "Learn from expert faculty and industry leaders.",
    "Explore global case studies of real-world leadership and innovation.",
    "Receive personalised career and leadership coaching, including 1:1 sessions.",
    "Gain practical insights on leading diversity, equity, and inclusion.",
    "Connect with a strong network of peers, mentors, and experts.",
    "Walk away with an actionable leadership development plan.",
    "Earn a recognised certificate from the University of Birmingham Dubai.",
    "Leave recharged—with clarity, confidence, and a clear next step.",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - What You'll Practice */}
          <div className="bg-[#F1EEEA] overflow-hidden shadow-lg">
            {/* Image */}
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/InnerPages/WDL/experience.jpg"
                alt="Women attending leadership workshop"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-6">
                What You'll Practice
              </h2>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {practiceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - What You'll Love This Experience */}
          <div className="bg-[#F1EEEA] overflow-hidden shadow-lg">
            {/* Image */}
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/InnerPages/WDL/practice.jpg"
                alt="Women in leadership discussion"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-6">
                What You'll Love This Experience
              </h2>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {loveItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}