"use client";

import Image from "next/image";

export default function AboutOrganizations({ organizations }) {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-10">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {organizations.map((org, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-6 sm:mb-8">
                <Image
                  src={org.logo}
                  alt={org.logoAlt}
                  width={220}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4 sm:mb-6">
                {org.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
