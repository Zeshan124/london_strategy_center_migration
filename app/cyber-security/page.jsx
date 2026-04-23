import React from "react";
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
import ServicesHero from "@/components/InnerPages/CyberExcellence/ServicesHero";
import BenefitsSection from "@/components/InnerPages/CyberExcellence/BenefitsSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import CyberAssessmentFramework from "@/components/InnerPages/CyberExcellence/CyberAssessmentFramework";
import TimelineSection from "@/components/InnerPages/CyberExcellence/TimelineSection";
import LearningGlobalModels from "@/components/InnerPages/CyberExcellence/LearningGlobalModels";
import AssessmentProcessByLevel from "@/components/InnerPages/CyberExcellence/AssessmentProcessByLevel";
import WhyActNow from "@/components/InnerPages/CyberExcellence/WhyActNow";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import ContactForm from "@/components/InnerPages/CyberExcellence/ContactForm";
import CyberSecurityHero from "@/components/CyberSecurity/cyberSecurityHero";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import CTASection from "@/components/CyberSecurity/CTASection";
import Services from "@/components/CyberSecurity/Services";
import FAQ from "@/components/CyberSecurity/FAQ";
import ConsultationForm from "@/components/CyberSecurity/ConsultationForm";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CyberSecurityHero />
        <PracticeAreas />
        <UniBirmingham />
        {/* <CTASection /> */}
        {/* <Services /> */}
        {/* <FAQ intro={{
          heading: "Who these services are for",
          paragraph: "LSC's cyber security services are designed for organisations where security is a board-level concern - not solely an IT function. This includes defence contractors and suppliers navigating MOD requirements, government organisations meeting NCSC and public sector frameworks, enterprises managing complex supply chains and regulatory obligations, and leadership teams seeking to elevate cyber governance from operational to strategic."
        }} /> */}
       {/* <ConsultationForm /> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;
