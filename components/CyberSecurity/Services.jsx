"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Services() {

  return (
    <section id="certification" className="py-12 sm:py-16 md:py-10 bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Regional Solution Section */}
        <div className="mb-12 sm:mb-14 md:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Who these services are for
          </h2>
          <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
          LSC's cyber security services are designed for organisations where security is a board-level concern - not solely an IT function. This includes defence contractors and suppliers navigating MOD requirements, government organisations meeting NCSC and public sector frameworks, enterprises managing complex supply chains and regulatory obligations, and leadership teams seeking to elevate cyber governance from operational to strategic.

          </p>
        </div>
      </div>
    </section>
  );
}
