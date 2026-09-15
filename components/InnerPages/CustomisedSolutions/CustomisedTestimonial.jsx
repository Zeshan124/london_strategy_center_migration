export default function CustomisedTestimonial() {
  return (
    <section className="bg-[#0E2253] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-6">
            Testimonial
          </p>

          <blockquote className="space-y-5 mb-8">
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed">
              “Learn to lead with authority and confidence from knowledgeable
              professionals with contemporary insights and engaging content.
              Programmes at London Strategy Centre are perfect for anyone looking
              to take their leadership capabilities to the next level!”
            </p>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              “The 5 days Leadership &amp; Innovation Design Thinking Masterclass,
              created for us and delivered by London Strategy Centre, within
              Programme for Advanced Leadership &amp; Management (PALM) at MILE is
              aimed at enabling leaders in a consistent manner to deliver high
              quality results.”
            </p>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <img
              src="/images/InnerPages/customized_solutions/kzafar-profile-testimonail.jpg"
              alt="Khazi Zafar"
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Khazi Zafar</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Programme Director PALM &amp; Executive Education Director
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                Madinah Institute for Leadership &amp; Entrepreneurship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
