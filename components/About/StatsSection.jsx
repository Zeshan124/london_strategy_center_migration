'use client';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: '500+',
      label: 'Certified Professionals'
    },
    {
      id: 2,
      number: '25+',
      label: 'Industry Partners'
    },
    {
      id: 3,
      number: '95%',
      label: 'Success Rate'
    }
  ];

  return (
    <section className="container bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              {/* Number */}
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-3">
                {stat.number}
              </h3>
              
              {/* Label */}
              <p className="text-base sm:text-lg text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="container mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-8">
            The Premier Destination for Next Generation Executive Development!
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              At the London Strategy Centre, we believe in the art of the possible. Our mission is to equip you with the capabilities and knowledge to become a world-class leader in your field; a leader who can strategise, innovate and inspire their teams to high performance.
            </p>

            <p>
              We understand that in today's competitive market, keeping up with the latest thinking in developing and implementing strategy is essential for business success.
            </p>

            <p>
              We are committed to helping you navigate your key challenges through developing your individual and organisational leadership capabilities.
            </p>

            <p className="font-semibold text-gray-900">
              Unleash the power of executive development at London Strategy Centre!
            </p>

            <p>
              From our immersive and interactive learning solutions to our comprehensive strategy, innovation and leadership programmes, London Strategy Centre offers a comprehensive suite of executive development interventions, programmes and consultancy. Our unique blend of innovative and engaging facilitation and state-of-the-art technology-based learning solutions make us the ultimate destination for business leaders looking to take their capability and career to the next level.
            </p>

            <p>
              Through our research-based frameworks and the knowledge imparted by our programmes, you can be sure to reach new heights.
            </p>

            <p className="font-semibold text-gray-900">
              Why not reach out to us for an exploratory conversation on how we can be your development partner of choice!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}