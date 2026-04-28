'use client';

import Image from 'next/image';

export default function MissionVisionSection() {
  const features = [
    {
      id: 1,
      icon: "/images/icons/developing_people.png",
      title: "System-level, not individual-level",
      description:
        "The dominant assumption in organisational development is that improving people improves performance. It does, but only when the system supports that performance. LSC's interventions target the organisation as a whole: the decision architecture, the execution rhythms, the governance structures, and the human-AI systems that determine whether individual capability translates into collective performance.",
    },
    {
      id: 2,
      icon: "/images/icons/action_key.png",
      title: "Diagnostic intelligence before every intervention",
      description:
        "LSC does not begin an engagement with a solution. It begins with a structured assessment of how the organisation actually works, how decisions are made, where execution loses coherence, and what systemic constraints prevent strategy from becoming reality. This diagnostic intelligence, generated through AI-enabled sensing, shapes every recommendation and ensures that interventions address root causes, not presenting symptoms.",
    },
    {
      id: 3,
      icon: "/images/icons/approach.png",
      title: "AI-augmented, not AI-dependent",
      description:
        "LSC integrates AI into its work not as a product to be installed, but as a capability to be governed. Human-AI collaboration is designed with clear accountability structures, responsible governance frameworks, and a phased adoption architecture that respects the complexity of real operating environments. LSC clients build AI-augmented capability that is embedded, measured, and sustained, not deployed and abandoned.",
    },
    {
      id: 4,
      icon: "/images/icons/uniqueness.png",
      title: "Built for complexity, not optimised for simplicity",
      description:
        "LSC's methodology is designed for organisations where the operating environment is genuinely complex: where decision stakes are high, where execution must remain coherent across multiple functions and geographies, and where the cost of misalignment is strategic rather than operational. Defence, government, and enterprise clients operating under these conditions require a different kind of partner, one that can work at the intersection of strategy, execution, and organisational design simultaneously.",
    },
    {
      id: 5,
      icon: "/images/icons/av_timer.png",
      title: "Partnership, not prescription",
      description:
        "LSC works alongside leadership teams rather than advising from a distance. Engagements are structured to embed LSC's practitioners within the organisation's real challenges, not to produce reports that require separate implementation. The result is structural change that the organisation owns, understands, and can sustain.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0E2253]/40 hover:via-blue-400/30 hover:to-transparent transition-all duration-500"
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