"use client";

export default function CTASection() {
  return (
    <>
      {/* ================= DIGITAL EXECUTIVE SECTION ================= */}
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
              OVERVIEW
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-gray-900">
              Women Leading the NextWave of Transformation
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Digital transformation is more than a buzzword—it’s a global
              shift. In this three-day immersive programme, you’ll gain the
              tools, confidence, and vision necessary to lead that shift.
              Delivered by experts in women’s leadership and digital strategy,
              this experience will reshape how you think, influence, and lead in
              a fast-evolving world.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/InnerPages/WDL/women-leading.jpg"
              alt="Modern architecture with colorful geometric patterns"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
