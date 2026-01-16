import BlogCategory from "@/components/blog/BlogCategory";
import FeaturedCampaignsCarousel from "@/components/blog/FeaturedCampaignsCarousel";
import FeaturedInsightsHeader from "@/components/blog/FeaturedInsightsHeader";
import NewsletterSubscription from "@/components/blog/NewsletterSubscription";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import Executives from "@/components/services/Executives";
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
      </main>
      <Footer />
    </div>
  );
};

export default page;
