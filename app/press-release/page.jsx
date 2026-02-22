import BlogCategory from "@/components/blog/BlogCategory";
import FeaturedCampaignsCarousel from "@/components/blog/FeaturedCampaignsCarousel";
import FeaturedInsightsHeader from "@/components/blog/FeaturedInsightsHeader";
import NewsletterSubscription from "@/components/blog/NewsletterSubscription";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ContactFormSection from "@/components/InnerPages/CyberExcellence/ContactFormSection";
import Executives from "@/components/InnerPages/CyberExcellence/Executives";
import ExperienceSection from "@/components/InnerPages/CyberExcellence/ExperienceSection";
import LearningObjectives from "@/components/InnerPages/CyberExcellence/LearningObjectives";
import React from "react";
import CertificationLevels from "@/components/InnerPages/CyberExcellence/CertificationLevels";
import BenefitsSection from "@/components/InnerPages/CyberExcellence/BenefitsSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import CyberAssessmentFramework from "@/components/InnerPages/CyberExcellence/CyberAssessmentFramework";
import TimelineSection from "@/components/InnerPages/CyberExcellence/TimelineSection";
import LearningGlobalModels from "@/components/InnerPages/CyberExcellence/LearningGlobalModels";
import AssessmentProcessByLevel from "@/components/InnerPages/CyberExcellence/AssessmentProcessByLevel";
import WhyActNow from "@/components/InnerPages/CyberExcellence/WhyActNow";
import HeroBanner from "@/components/press-releases/PressReleaseHero";
import PartnershipQuoteSection from "@/components/press-releases/PartnershipQuoteSection";
import PressReleaseHero from "@/components/press-releases/PressReleaseHero";
import AboutOrganizations from "@/components/press-releases/AboutOrganizations";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PressReleaseHero />
        <PartnershipQuoteSection />
        <AboutOrganizations />
        {/* <StrategyCourseComponent />
        <LearningObjectives />
        <ExperienceSection /> */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
