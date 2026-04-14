"use client";

import Image from "next/image";

export default function OrganizationalLeadership() {
  const features = [
    {
      id: 1,
      icon: "/images/InnerPages/digitaltwin/modeling.svg",
      title: "Modeling Executive Logic",
      description:
        "Capture priorities, risk tolerance, decision sequencing, and escalation expectations from leadership.",
    },
    {
      id: 2,
      icon: "/images/InnerPages/digitaltwin/neurology.svg",
      title: "Create Intelligence System",
      description:
        "Build a leadership-anchored system that continuously tests alignment to strategic intent.",
    },
    {
      id: 3,
      icon: "/images/InnerPages/digitaltwin/compress.svg",
      title: "Scale Across Enterprise",
      description:
        "Deploy as sensing infrastructure providing real-time visibility into alignment and execution.",
    },
    {
      id: 4,
      icon: "/images/InnerPages/digitaltwin/detector_status.svg",
      title: "Strengthen Governance",
      description:
        "Enable boards and executive committees to reduce strategic drift and embed cybernetic foundations.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50">

  {/* Animated Gradient Blob */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200 opacity-30 blur-3xl rounded-full animate-pulse"></div>
    
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0E2253] opacity-20 blur-3xl rounded-full animate-[spin_25s_linear_infinite]"></div>
  </div>
      <div className="mx-auto px-6 md:px-12 xl:px-24">

        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0E2253] uppercase mb-4">
            Organisational Leadership Digital Twin
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight">
            Scaling Executive Logic <span className="text-[#0E2253]">Across the Enterprise</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            The Organisational Leadership Digital Twin scales executive logic
            across the enterprise by embedding strategic intent into a continuous,
            adaptive intelligence system.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    {/* Spotlight Effect */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
      style={{
        background: "radial-gradient(400px circle at var(--x) var(--y), rgba(14,34,83,0.15), transparent 60%)"
      }}
    ></div>

    {/* Icon */}
    <div className="mb-6 relative z-10">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl 
      bg-gradient-to-br from-[#0E2253]/15 via-blue-100 to-transparent 
      group-hover:scale-110 transition duration-300">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </div>

    {/* Title */}
    <h3 className="relative z-10 text-lg md:text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0E2253] transition">
      {feature.title}
    </h3>

    {/* Gradient Divider */}
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