import Newsletter from "@/components/About/NewsLetter";
import FreeMaterialsSection from "@/components/FreeMaterials/FreeMaterialsSection";
import HeroMaterials from "@/components/FreeMaterials/HeroMaterials";
import StatsCounter from "@/components/FreeMaterials/StatsCounter";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <HeroMaterials />
       <FreeMaterialsSection />
       {/* <StatsCounter /> */}
       <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
