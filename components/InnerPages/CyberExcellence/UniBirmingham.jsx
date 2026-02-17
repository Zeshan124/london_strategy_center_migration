"use client";

export default function UniBirmingham() {
  return (
    <section className="py-6 sm:py-16 md:py-20 lg:py-20 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-auto lg:h-[50vh] min-h-[500px]">
        <div className="hidden lg:block relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/cyberexcellence/uni-birmingham.jpg"
            alt="Modern architecture with colorful geometric patterns"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            University of Birmingham
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            Univeristy of Birmingham Birmingham University acts as the
            independent Assurance Body for this Cybersecurity Certification
            Framework. It ensures the integrity of the scheme and the drives
            continual improvement. This includes conducting impartial reviews of
            certification activities, analysing certification trends, and
            generating threat insights that feed back into the framework’s
            evolution. Through its global academic expertise, the Assurance Body
            provides evidence-based oversight and ensures that the certification
            process remains rigorous, credible, and aligned with international
            best practices.
          </p>

          <div>
            <img
              src="/images/InnerPages/cyberexcellence/uof-logo.png"
              alt="University of Birmingham Logo"
              className="w-50 mb-6"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="block sm:hidden relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/cyberexcellence/uni-birmingham.jpg"
            alt="Modern architecture with colorful geometric patterns"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
