import AboutHeroSection from "@/components/About/AboutHeroSection";
import StatsSection from "@/components/About/StatsSection";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHeroSection />
        <StatsSection />
      </main>
    </div>
  );
};

export default page;
