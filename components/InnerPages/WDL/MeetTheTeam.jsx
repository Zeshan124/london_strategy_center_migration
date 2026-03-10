'use client';

import Image from 'next/image';

const teamMembers = [
  {
    id: '1',
    name: 'Dr Heather Jeffrey',
    role: 'PROGRAMME DIRECTOR',
    title: 'Head of Subject and Associate Professor',
    organization: 'University of Birmingham Dubai',
    image: '/images/InnerPages/WDL/dr-heather.svg',
  },
  {
    id: '2',
    name: 'Maj. G. Paul Nanson',
    role: 'PROGRAMME DIRECTOR',
    title: 'Principal at',
    organization: 'London Strategy Centre',
    image: '/images/InnerPages/WDL/saskia.svg',
  },
  {
    id: '3',
    name: 'Dr Imran Zawwar',
    role: 'PROGRAMME DIRECTOR',
    title: 'CEO at',
    organization: 'London Strategy Centre',
    image: '/images/InnerPages/WDL/maya.svg',
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 max-w-4xl">
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-4">
            FACULTY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Meet the Women Leading the Way
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border-2 border-slate-200 rounded-3xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 hover:border-slate-300"
            >
              <div className="flex items-start gap-5">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-slate-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {/* Role Label */}
                  <p className="text-xs sm:text-sm tracking-wider text-[#1e3a5f] uppercase mb-2">
                    {member.role}
                  </p>

                  {/* Name */}
                  <h3 className="text-2xl sm:text-2xl font-normal text-slate-900 mb-3">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="text-sm sm:text-sm text-slate-600 leading-relaxed mb-1">
                    {member.title}
                  </p>

                  {/* Organization */}
                  <p className="text-sm sm:text-sm mb-4 font-semibold">
                    {member.organization}
                  </p>

                  {/* Read More Link */}
                  <button className="inline-flex items-center gap-2 text-[#1e3a5f] text-sm uppercase tracking-wide hover:gap-3 transition-all duration-300 group">
                    <span>READ MORE</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
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