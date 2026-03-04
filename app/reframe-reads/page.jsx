import React from "react";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import HeroReframeReads from "@/components/BlogsReframeReads/HeroReframeReads";
import ReframeReadsGrid from "@/components/BlogsReframeReads/ReframeReadsGrid";
import ContactFormSection from "@/components/InnerPages/CyberExcellence/ContactFormSection";

const page = async () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroReframeReads />
        <ReframeReadsGrid />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
