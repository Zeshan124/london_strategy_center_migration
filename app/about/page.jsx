import AboutHeroSection from "@/components/About/AboutHeroSection";
import LeadershipTeam from "@/components/About/LeadershipTeam";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import NewsLetter from "@/components/About/NewsLetter";
import StatsSection from "@/components/About/StatsSection";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHeroSection />
        <StatsSection />
        <MissionVisionSection />
        <LeadershipTeam />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
