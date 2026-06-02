"use client";

import Image from "next/image";
import { useState } from "react";
import { subscribeNewsletter } from "@/lib/api/newsletter";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await subscribeNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-28">
      <div className="relative  lg:-mt-34 mx-4 sm:mx-6 lg:mx-16 xl:mx-20 z-30">
        <div className="bg-[#132D5F] backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            {/* Label */}
            <h3 className="text-center sm:text-left text-base sm:text-xl lg:text-3xl font-normal text-white lg:flex-shrink-0">
              Subscribe to our Newsletter
            </h3>

            {/* Email + Button */}
            <div className="flex-1 lg:max-w-2xl">
              <div
                className="
                    flex flex-col gap-3
                    sm:flex-row sm:gap-0
                    sm:border sm:border-gray-300 sm:rounded-lg
                    sm:focus-within:border-[#1e3a6b]
                    sm:focus-within:ring-2 sm:focus-within:ring-[#1e3a6b]/20
                    sm:bg-white
                    transition-all
                  "
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="
                        w-full
                        px-4 sm:px-6
                        py-3 sm:py-3.5
                        text-sm sm:text-base
                        text-gray-900 placeholder-gray-400
    
                        /* mobile: own border */
                        bg-white border border-gray-300 rounded-lg
                        focus:outline-none focus:border-[#1e3a6b]
                        focus:ring-2 focus:ring-[#1e3a6b]/20
    
                      
                        sm:bg-transparent sm:border-0 sm:rounded-none
                        sm:focus:border-0 sm:focus:ring-0
    
                        transition-all
                      "
                />

                <button
                  onClick={handleSubmit}
                  className="
                        inline-flex items-center justify-center gap-2
                        text-sm sm:text-base
                        font-medium whitespace-nowrap
                        bg-[#0a1d4a] text-white
                        hover:bg-[#1e3a6b]
                        transition-all duration-300
    
                        /* mobile: full-width, own shape */
                        w-full px-5 py-3 rounded-lg
    
                        /* sm+: auto-width, floats inset with margin */
                        sm:w-auto sm:px-6 sm:py-2.5 sm:m-1.5 sm:rounded-md
                      "
                >
                  SUBSCRIBE
                  <Image
                    src="/images/icons/top-arrow.png"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
