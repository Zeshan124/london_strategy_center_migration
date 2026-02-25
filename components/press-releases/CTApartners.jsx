"use client";

export default function CTApartners() {
  return (
    <>
      {/* ================= DIGITAL EXECUTIVE SECTION ================= */}
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              "We are thrilled to be working with{" "}
              <span className="font-bold"> MILE</span>, an organisation that
              shares our passion for improving management practice and executive
              development," said 
              <span className="font-bold">Dr. Imran Zawwar</span>  from 
              <span className="font-bold">London Strategy Centre</span> . "We
              look forward to a productive partnership that will benefit both
              organisations and the broader management community."
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              <span className="font-bold">BAE Systems</span> Saudi Development
              and Training Company Ltd{" "}
              <span className="font-bold">(BAES SDT)</span>  has signed a
              Memorandum of Understanding 
              <span className="font-bold">(MoU)</span>  with{" "}
              <span className="font-bold">London Strategy Centre (LSC)</span> .
              This agreement is aimed at strengthening strategic collaboration
              between the two organizations in the areas of executive
              development, promoting innovation in technical training in
              aviation and defence sectors, and human capital development.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src="/images/press-release/banner.jpg"
              alt="Modern architecture with colorful geometric patterns"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mx-auto">
          This collaboration is a significant step forward in the ongoing
          efforts of both organisations to improve executive development and
          business growth. The two parties are committed to working together to
          achieve their shared goals and to make a positive impact in the
          executive development industry.
        </p>
      </div>
    </>
  );
}
