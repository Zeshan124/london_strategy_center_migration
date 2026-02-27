'use client';

import { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      value: 1200,
      suffix: '+',
      label: 'Leadership Developed',
      subtitle: 'Across all four pillars'
    },
    {
      value: 500,
      suffix: '+',
      label: 'Across all four pillars',
      subtitle: 'Completed successfully'
    },
    {
      value: 300,
      suffix: '+',
      label: 'Cybersecurity Experts',
      subtitle: 'Trained and certified'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Success Rate',
      subtitle: 'Certification completion'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Global Partners',
      subtitle: 'Across industries'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      subtitle: 'In strategic consulting'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white py-6 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, suffix, label, subtitle, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center">
      <div className="text-5xl sm:text-6xl text-gray-900 mb-3">
        {count}
        <span className="text-5xl sm:text-6xl">{suffix}</span>
      </div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
        {label}
      </div>
      <div className="text-sm sm:text-base text-gray-600">
        {subtitle}
      </div>
    </div>
  );
};

export default StatsCounter;