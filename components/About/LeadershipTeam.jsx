'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';

const teamMembers = [
  {
    id: '1',
    name: 'Lester Coupland',
    title: 'President at',
    organization: 'London Strategy Centre',
    image: '/images/about/lester-coupland.jpg',
  },
  {
    id: '2',
    name: 'Maj. G. Paul Nanson',
    title: 'Principal at',
    organization: 'London Strategy Centre',
    image: '/images/about/paul-nanson.jpg',
  },
  {
    id: '3',
    name: 'Dr Imran Zawwar',
    title: 'CEO at',
    organization: 'London Strategy Centre',
    image: '/images/about/imran-zawwar.jpg',
  },
  {
    id: '4',
    name: 'Dr Syed Yaqzan',
    title: 'COO at',
    organization: 'London Strategy Centre',
    image: '/images/about/syed-yaqzan.jpg',
  },
  {
    id: '5',
    name: 'Gislene Robertson',
    title: 'Commercial Director at',
    organization: 'London Strategy Centre',
    image: '/images/about/gislene-robertson.jpg',
  },
  {
    id: '6',
    name: 'Doc McKerr',
    title: 'Director at',
    organization: 'London Strategy Centre',
    image: '/images/about/doc-mckerr.jpg',
  },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our leadership team brings together experienced professionals with a
            shared commitment to strategic excellence, innovation, and ethical
            leadership.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-900 inline-block pb-1 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600">
                    {member.title}
                  </p>

                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {member.organization}
                  </p>

                  {/* Email Icon */}
                  <button
                    className="mt-3 inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
