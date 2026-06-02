"use client";

export default function CTApartners({ ctaSection }) {
  return (
    <>
      <section className="bg-[#F1EEEA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content — quotes */}
          <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-18 flex flex-col justify-center">
            {ctaSection.quotes.map((quote, i) => (
              <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                "{quote.text}"
                {quote.speaker && (
                  <> — <span className="font-bold">{quote.speaker}</span>, <span className="font-bold">{quote.organisation}</span></>
                )}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src={ctaSection.image}
              alt={ctaSection.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mx-auto">
          {ctaSection.closingParagraph}
        </p>
      </div>
    </>
  );
}
