export default function WorkWithUsHero() {
  return (
    <section className="bg-gradient-to-br from-[#0E2253] to-[#0a1a3f] lg:pt-28 pt-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-white/40 rounded-lg text-xs sm:text-sm font-bold text-white">
                WORK WITH US
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-6">
              Latest jobs with London Strategy Centre
            </h1>

            <div className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed">
              <p>
                With our world-class expertise, large-scale networks, and
                unrivaled partnerships we develop people and organizations in
                strategy, innovation, and leadership, a distinctive combination.
                We are committed to unlocking the potential of people and
                organizations by working with business leaders and their
                management teams to overcome industry-specific challenges.
              </p>
              <p>
                We constantly look at the skills and capabilities needed for the
                future. We have ambitious plans for the future and look for
                dynamic individuals who will bring energy and a growth mindset to
                achieve our vision.
              </p>
            </div>
          </div>

          {/* Banner graphic (transparent PNG) on a light panel so it stays visible on navy */}
          <div className="relative">
            <div className="rounded-2xl p-6 sm:p-8">
              <img
                src="/images/InnerPages/work-with-us/work_with_us.png"
                alt="Careers at London Strategy Centre"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
