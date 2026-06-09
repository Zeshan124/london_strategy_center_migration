import AboutHeroSection from "@/components/About/AboutHeroSection";
import Footer from "@/components/Home/Footer";
import IndustriesHero from "@/components/Indsutries/IndustriesHero";
import IndustriesListing from "@/components/Indsutries/IndustriesListing";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <IndustriesHero />
        <IndustriesListing />
      </main>
      <Footer />
    </div>
  );
};

export default page;
