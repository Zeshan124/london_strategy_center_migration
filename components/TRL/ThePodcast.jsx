"use client";

import Link from "next/link";

export default function ThePodcast() {
  return (
     <section className="bg-[#F1EEEA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">

        {/* Left Content */}
        <div className="bg-[#F1EEEA] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900">
            The Podcast — Conversations with leaders
operating at the edge of complexity
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          The Reframe Lab Podcast brings LSC into direct conversation with the C-suite executives, government leaders, defence strategists, and transformation architects who confront organisational complexity as a daily operating condition — not a theoretical construct.
           </p>

  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
These are not motivational interviews. Each episode examines a specific question about how organisations build capability, govern human-AI collaboration, or sustain execution coherence when conditions are volatile and stakes are high. Guests are selected for what they have built and what they have learned — not for profile alone.
 </p>

  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
The podcast extends the intellectual agenda of The Reframe Lab into dialogue: testing ideas, surfacing practitioner insight, and making visible the leadership thinking that conventional platforms rarely capture.
          </p>
       
          {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            The Reframe Lab addresses that structural gap. It is not a content feed. It is a deliberate programme of intellectual inquiry into the forces that determine whether organisations adapt or stall — published by a team that works inside these systems every day.
          </p> */}
         
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            src="/images/InnerPages/trl/the_podcast.jpg"
            alt="The Reframe Lab"
              className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
