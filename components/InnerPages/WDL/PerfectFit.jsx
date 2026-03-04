"use client";

export default function PerfectFit() {
  return (
    <>
      {/* ================= DIGITAL EXECUTIVE SECTION ================= */}
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          
          {/* Left Content */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
              Who should attend
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-gray-900">
              You are a Perfect Fit
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Participants include outstanding executive women who are:
            </p>

            {/* Bullet Points List */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-900">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></span>
                <span>In leadership roles seeking to understand the digital impact.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-900">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></span>
                <span>Driving organisational transformation at mid-to-senior levels.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-900">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></span>
                <span>Entrepreneurs aiming to scale through digital strategy.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-900">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></span>
                <span>Working in technology, innovation, or transformation roles.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-900">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"></span>
                <span>Leading HR and talent development for inclusive digital workplaces.</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/InnerPages/WDL/perfect-fit.jpg"
              alt="Woman in VR headset representing digital leadership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}