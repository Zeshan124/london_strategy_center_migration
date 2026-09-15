export default function CustomisedFeatures() {
  return (
    <>
      {/* Discovery and Diagnostics — image left, text right */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200 order-2 lg:order-1">
              <img
                src="/images/InnerPages/customized_solutions/Discovery-and-Diagnostics.jpg"
                alt="Discovery and diagnostics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
                Discovery and Diagnostics
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-4">
                In-depth assessment of your talent
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our proven partnership with assessment specialists, The Talent
                Enterprise, means we can work with you to undertake in-depth
                assessment of your high-potential and leadership populations. The
                Talent Enterprise proven methodology provides a unique platform for
                creating highly-targeted customised programmes that address both
                shared development needs and individual areas of focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Design and Development — text left, image right */}
      <section className="bg-[#F1EEEA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
                Programme Design and Development
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-4">
                Tailored to your needs and culture
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our approach involves working closely with your team to understand
                your organisation’s unique needs and culture, and developing
                tailored solutions that address your specific learning and
                development goals.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <img
                src="/images/InnerPages/customized_solutions/Programme-Design-Development.jpg"
                alt="Programme design and development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase shrink-0">
              Languages
            </p>
            <span className="hidden sm:block w-px h-8 bg-gray-200" />
            <p className="text-lg font-light text-gray-900">English &amp; Arabic</p>
          </div>
        </div>
      </section>
    </>
  );
}
