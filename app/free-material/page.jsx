import HeroMaterials from "@/components/FreeMaterials/HeroMaterials";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <HeroMaterials />
      </main>
      <Footer />
    </div>
  );
};

export default page;
