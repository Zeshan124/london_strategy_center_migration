import BlogCategory from "@/components/blog/BlogCategory";
import FeaturedCampaignsCarousel from "@/components/blog/FeaturedCampaignsCarousel";
import FeaturedInsightsHeader from "@/components/blog/FeaturedInsightsHeader";
import NewsletterSubscription from "@/components/blog/NewsletterSubscription";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ContactFormSection from "@/components/services/ContactFormSection";
import Executives from "@/components/services/Executives";
import ExperienceSection from "@/components/services/ExperienceSection";
import LearningObjectives from "@/components/services/LearningObjectives";
import ServicesHero from "@/components/services/ServicesHero";
import StrategyCourseComponent from "@/components/services/StrategyCourseComponent";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <Executives />
        <StrategyCourseComponent />
        <LearningObjectives />
        <ExperienceSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
