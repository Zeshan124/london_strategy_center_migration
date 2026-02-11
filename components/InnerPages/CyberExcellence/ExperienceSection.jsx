"use client";

export default function ExperienceSection() {
  const spaces = [
    {
      id: 1,
      title: "Additional Spaces",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "The Rose Suite",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "The Ruby Salon",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "The Ivory Suite",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            Experience You will Never Forget
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            Located in the heart of Mayfair, London's prestigious golden
            quarter. Our values boasts unique and elegant spaces for Learning &
            Development.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[350px] sm:h-[400px] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Title Box */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl py-4 px-5 shadow-xl transform transition-all duration-500">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 leading-tight">
                  {space.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
