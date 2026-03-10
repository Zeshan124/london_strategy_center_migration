"use client";

export default function ProfessorYusra() {
  return (
    <>
      {/* ================= DIGITAL EXECUTIVE SECTION ================= */}
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              “We don't need to teach women ambition; they already possess it. What we must do is empower them with the tools, strategies, and technology necessary to lead confidently in the digital era. That's why I am incredibly proud with the launch of the Women in Digital Leadership programme—the first of its kind—dedicated explicitly to empowering women to create lasting impact and drive meaningful change.”
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-gray-900">
              Professor Yusra Mouzughi
            </h2>

            <p className="text-xs tracking-widest text-[#0E2253] uppercase mb-4">
              Provost, University of Birmingham Dubai
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/InnerPages/WDL/professor-yusra.jpg"
              alt="Modern architecture with colorful geometric patterns"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
