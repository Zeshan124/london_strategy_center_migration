"use client";

export default function Executives() {
  return (
    <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">
        {/* Left Content */}
        <div className=" bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            London Strategy Center
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            The London Strategy Centre (LSC) is the Accreditation Body, holding
            responsibility for the ownership and maintenance of the
            certification framework. LSC operates to the highest standards of
            competence and impartiality. The centre liaises with governments,
            industry stakeholders, and international partners to align the
            framework with regulatory requirements and sector-specific needs.
          </p>

          <div>
            <img
              src="/images/InnerPages/cyberexcellence/LSC-Logo.svg"
              alt="LSC Logo"
              className="w-40 mb-6"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/cyberexcellence/lsc-banner.jpg"
            alt="Modern architecture with colorful geometric patterns"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
