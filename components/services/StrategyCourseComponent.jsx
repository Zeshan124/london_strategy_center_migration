import React from 'react';

const StrategyCourseComponent = () => {
  const programmeDetails = [
    { label: 'Dates:', value: '15th June - 16th June' },
    { label: 'Duration:', value: '2 Days Residential' },
    { label: 'Location:', value: 'London, UK' },
    { label: 'Cost:', value: '£3,500 + VAT' }
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-24">
        
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8 sm:mb-12">
          Learn to Strategise in the Digital Context
        </h1>

        {/* Profile Section */}
        <div className="flex items-start gap-4 sm:gap-6 mb-8 sm:mb-10">
          <img
            src="/images/services/dr-adnan-alturkistani.jpg"
            alt="Dr Adnan Alturkistani"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              Dr Adnan Alturkistani
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Board Member at</p>
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              London Strategy Centre
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-5xl">
            We believe that the biggest challenge organisations are facing is not strategic 
            thinking – it is strategic acting. The objective of this programme is not only 
            developing a good strategy, but ensuring that people can act precisely in a 
            consistent manner to help implement it in today's digital world. This is a challenge, 
            and most programmes fall short on this objective. The main reason is that while 
            strategy development is about knowing something strategy execution is about doing 
            it and the gap between knowing and doing is often huge!.
          </p>
        </div>

        {/* Programme Commitment */}
        <div>
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8">
            Programme Commitment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {programmeDetails.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg px-6 py-5 sm:py-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">{item.label}</span>
                  <span className="ml-1 text-gray-700">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyCourseComponent;