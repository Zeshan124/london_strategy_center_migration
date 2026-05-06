"use client";

const DEFAULT = {
  label: "WHY IT'S DIFFERENT",
  heading: "This is not another AI quiz",
  left: {
    title: "Most tools:",
    items: [
      "Give generic advice",
      "Overwhelm you with options",
      "Focus on tools, not outcomes",
    ],
  },
  right: {
    title: "It is designed to:",
    items: [
      "Reflect your real working behaviour",
      "Surface what actually matters",
      "Give you decision-grade clarity",
    ],
  },
  closing: "The AI Direction Scan is different.",
  image: "/images/InnerPages/artificial-intelligence/ai-quiz.jpg",
};

export default function WhyDifferent({ content }) {
  const c = content ?? DEFAULT;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left content */}
          <div>
            {c.label && (
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
                {c.label}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight mb-8">
              {c.heading}
            </h2>

            {/* Two-column bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Left column */}
              <div>
                <p className="text- font-bold sm:text-2xl text-gray-900 mb-4">{c.left.title}</p>
                <ul className="space-y-3">
                  {c.left.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column */}
              <div>
                <p className="text-base font-bold sm:text-2xl text-gray-900 mb-4">{c.right.title}</p>
                <ul className="space-y-3">
                  {c.right.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {c.closing && (
              <p className="text-sm text-gray-600">{c.closing}</p>
            )}
          </div>

          {/* Right image */}
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              src={c.image}
              alt={c.heading}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
