import ContactPage from "@/components/Contact/contactUs";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
};

export default page;
