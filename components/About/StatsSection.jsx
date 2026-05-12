'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const stats = [
    { id: 1, number: 500, suffix: '+', label: 'Certified Professionals' },
    { id: 2, number: 25, suffix: '+', label: 'Industry Partners' },
    { id: 3, number: 95, suffix: '%', label: 'Success Rate' },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  /* Trigger counter animation on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-16"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Stats */}
        {/* <div
          className="
            flex gap-10 overflow-x-auto snap-x snap-mandatory pb-6
            sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible
            mb-16 lg:mb-20
          "
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} start={startCount} />
          ))}
        </div> */}

        {/* Content */}
        <div className="max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-8">
            We Transform How Organisations Think, Decide, and Execute
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed mb-12">
            <p>
              Most organisations have capable people. The problem is not individual performance, it is the system those people operate within. When decision architecture is poorly designed, when strategy dilutes as it passes through organisational layers, when execution fragments across functions and geographies, capability at the individual level fails to translate into performance at the system level. The gap compounds over time. Transformation programmes come and go. The underlying system remains unchanged.
            </p>
            <p className="font-semibold text-gray-900">
              London Strategy Centre (LSC) exists to close that gap.
            </p>
          </div>
{/* 
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-8">
            LSC is your capability transformation partner
          </h2> */}

          {/* <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              The central premise of LSC's work is that measurable organisational performance improvement requires a system-level intervention, not a training programme, a strategy report, or a technology implementation. It requires redesigning how the organisation senses its environment, how decisions are made and communicated, how execution is governed, and how capability compounds across time. That is what LSC builds.
            </p>
            <p className="font-semibold text-gray-900">
              Why LSC, Differentiator Cards
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Counter Item ---------------- */

function StatItem({ stat, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = stat.number / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, stat.number]);

  return (
    <div
      className="
        snap-center shrink-0 w-full sm:w-auto
        text-center
      "
    >
      <h3 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-3">
        {count}
        {stat.suffix}
      </h3>
      <p className="text-base sm:text-lg text-gray-700">
        {stat.label}
      </p>
    </div>
  );
}
