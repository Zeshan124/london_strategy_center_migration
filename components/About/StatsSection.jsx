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
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div
          className="
            flex gap-10 overflow-x-auto snap-x snap-mandatory pb-6
            sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible
            mb-16 lg:mb-20
          "
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} start={startCount} />
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-8">
            The Premier Destination for Next Generation Executive Development!
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              At the London Strategy Centre, we believe in the art of the possible.
              Our mission is to equip you with the capabilities and knowledge to
              become a world-class leader.
            </p>

            <p>
              We understand that in today's competitive market, keeping up with
              the latest thinking in developing and implementing strategy is
              essential for success.
            </p>

            <p>
              We are committed to helping you navigate your key challenges through
              leadership capability development.
            </p>

            <p className="font-semibold text-gray-900">
              Unleash the power of executive development at London Strategy Centre!
            </p>
          </div>
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
