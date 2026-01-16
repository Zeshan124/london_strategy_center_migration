import React from 'react';

const LearningObjectives = () => {
  const objectives = [
    "Describe the key questions and associated challenges to be addressed in formulating an organisation's digital strategy",
    "Manage the strategy process and rethink strategy in the face of different challenges posed by digital disruption",
    "Identify trends that have the potential to redefine competition and leverage digital opportunities to develop competitive advantage",
    "Discover the meaning of value and how value analysis can help evaluate potential disruptions",
    "Understand the concept of value creation and how it relates to customers' Willingness-to-Pay (WTP) in B2C and B2B contexts",
    "Critically apply a range of tools and techniques for crafting strategic choice in the context of digital disruption"
  ];

  return (
    <div className="bg-[#F1EEEA] rounded-lg px-6 sm:px-8 lg:px-24 py-8 sm:py-10 lg:py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
        Intended Learning Objectives
      </h2>

      <p className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide mb-6 sm:mb-8">
        ON SUCCESSFUL COMPLETION OF THIS PROGRAMME THE PARTICIPANTS SHOULD BE ABLE TO:
      </p>

      <ul className="space-y-4 sm:space-y-5">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-gray-900 mt-1 flex-shrink-0">•</span>
            <span className="text-base sm:text-lg text-gray-900 leading-relaxed">
              {objective}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningObjectives;