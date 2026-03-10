'use client';

import Image from 'next/image';

export default function ProgrammeFeesPartners() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Navy Blue Container */}
        <div className="bg-[#0a1d4a] rounded-3xl px-6 sm:px-10 md:px-16 lg:px-10 py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            
            {/* Left Section - Programme Fees */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-normal mb-4 sm:mb-6">
                Programme Fees
              </h2>
              <p className="text-sm sm:text-sm text-white/90 leading-relaxed uppercase tracking-wide">
                Pricing details: Please contact us for more information
              </p>
            </div>

            {/* Right Section - Support Partner */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-6 sm:mb-2">
                Support Partner
              </h3>

              {/* Partner Logos - Single Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                
                {/* Partner 1 - Arab International Women's Forum */}
                <div className="flex items-center gap-4">
                  <div className="text-white text-xs sm:text-xs uppercase tracking-wide whitespace-nowrap">
                    Arab International<br />Women's Forum
                  </div>
                  <div className="bg-white p-1 sm:p-4 flex items-center justify-center w-44 sm:w-48 h-20 sm:h-18">
                    <Image
                      src="/images/InnerPages/WDL/arab.svg"
                      alt="Arab International Women's Forum"
                      width={150}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Partner 2 - InLabs */}
                <div className="flex items-center gap-4">
                  <div className="text-white text-xs sm:text-xs uppercase tracking-wide whitespace-nowrap">
                    InLabs
                  </div>
                  <div className="bg-white p-1 sm:p-4 flex items-center justify-center w-44 sm:w-48 h-20 sm:h-18">
                    <Image
                      src="/images/InnerPages/WDL/inlabs.svg"
                      alt="InLabs"
                      width={150}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}