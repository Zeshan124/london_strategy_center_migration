export default function CustomisedSolutionsHero() {
  return (
    <section className="bg-white lg:pt-28 pt-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-[#0E2253] rounded-lg text-xs sm:text-sm font-bold text-[#0E2253]">
                CUSTOMISED SOLUTIONS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Customised Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Partner with us to develop a customised programme to empower your
              team with their learning and development.
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300"
            >
              Reach Your Potential
            </a>
          </div>

          {/* Banner graphic (transparent PNG) */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-[#0E2253]/5 via-blue-50 to-[#F1EEEA] p-6 sm:p-8">
              <img
                src="/images/InnerPages/customized_solutions/customise-solution-banner.png"
                alt="Customised executive learning solutions"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
