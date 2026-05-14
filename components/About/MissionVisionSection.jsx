'use client';

import Image from 'next/image';

export default function MissionVisionSection() {
  const features = [
    {
      id: 1,
      icon: "/images/icons/developing_people.png",
      title: "System-level, not individual-level",
      description:
        "The assumption in organisational development is that improving people improves performance, but performance only improves when the system supports it through effective governance, decision making, execution, and human AI integration.",
    },
    {
      id: 2,
      icon: "/images/icons/action_key.png",
      title: "Diagnostic intelligence before every intervention",
      description:
        "LSC uses structured organisational diagnostics and AI-enabled insight to identify decision gaps, execution barriers, and systemic constraints, ensuring every intervention addresses the factors shaping long-term performance.",
    },
    {
      id: 3,
      icon: "/images/icons/approach.png",
      title: "AI-augmented, not AI-dependent",
      description:
        "LSC helps organisations build governed, measurable, and sustainable human AI capability through clear accountability, phased adoption, and practical integration within real operating environments.",
    },
    {
      id: 4,
      icon: "/images/icons/uniqueness.png",
      title: "Built for complexity, not optimised for simplicity",
      description:
        "LSC supports defence, government, and enterprise organisations operating in high-stakes environments where strategic alignment, cross-functional execution, and organisational resilience drive long-term success.",
    },
    {
      id: 5,
      icon: "/images/icons/av_timer.png",
      title: "Partnership, not prescription",
      description:
        "LSC works alongside leadership teams to deliver practical organisational change, embedding expertise within real business challenges to create sustainable transformation, stronger execution, and lasting organisational ownership.",
    },
  ];

  const cardImages = [
  "/images/blog/two.jpg",
  "/images/blog/three.jpg",
  "/images/blog/four.jpg",
  "/images/blog/five.jpg",
  "/images/blog/six.jpg",
  "/images/blog/seven.jpg",
];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50">

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0E2253] opacity-20 blur-3xl rounded-full animate-[spin_25s_linear_infinite]"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-4xl">
           {/* <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
              Why LSC, Differentiator Cards
            </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4">
            Mission / Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our mission is to empower individuals and organisations through
            strategic thinking, leadership excellence, and innovation that
            drives sustainable growth, while our vision is to become a globally
            recognised centre of excellence that develops future-ready leaders
            who create meaningful and lasting impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0E2253]/40 hover:via-blue-400/30 hover:to-transparent transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <div
                className="relative h-full rounded-2xl bg-white/80 backdrop-blur-lg p-6 md:p-8 border border-slate-200/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                {/* Spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--x) var(--y), rgba(14,34,83,0.15), transparent 60%)",
                  }}
                ></div>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-[#0E2253]/15 via-blue-100 to-transparent 
                  group-hover:scale-110 transition duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg md:text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0E2253] transition">
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 w-12 h-[2px] bg-gradient-to-r from-[#0E2253] to-blue-400 mb-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Description */}
                <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}