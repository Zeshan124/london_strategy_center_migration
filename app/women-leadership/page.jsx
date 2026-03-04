import BlogCategory from "@/components/blog/BlogCategory";
import FeaturedCampaignsCarousel from "@/components/blog/FeaturedCampaignsCarousel";
import FeaturedInsightsHeader from "@/components/blog/FeaturedInsightsHeader";
import NewsletterSubscription from "@/components/blog/NewsletterSubscription";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import ExperienceSection from "@/components/InnerPages/CyberExcellence/ExperienceSection";
import LearningObjectives from "@/components/InnerPages/CyberExcellence/LearningObjectives";
import React from "react";
import CertificationLevels from "@/components/InnerPages/CyberExcellence/CertificationLevels";
import BenefitsSection from "@/components/InnerPages/CyberExcellence/BenefitsSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import LearningGlobalModels from "@/components/InnerPages/CyberExcellence/LearningGlobalModels";
import AssessmentProcessByLevel from "@/components/InnerPages/CyberExcellence/AssessmentProcessByLevel";
import WhyActNow from "@/components/InnerPages/CyberExcellence/WhyActNow";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import OrganizationalLeadership from "@/components/InnerPages/DigitalTwin/OrganizationalLeadership";
import DigitalTwinProcess from "@/components/InnerPages/DigitalTwin/DigitalTwinProcess";
import HowItWorks from "@/components/InnerPages/DigitalTwin/HowItWorks";
import ContactFormSection from "@/components/InnerPages/DigitalTwin/ContactFormSection";
import WomenLeadershipHero from "@/components/InnerPages/WDL/WomenLeadershipHero";
import CTASection from "@/components/InnerPages/WDL/CTASection";
import ProgrammeCommitment from "@/components/InnerPages/WDL/ProgrammeCommitment";
import PerfectFit from "@/components/InnerPages/WDL/PerfectFit";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <WomenLeadershipHero />
        <CTASection />
        <ProgrammeCommitment />
        <PerfectFit />
        <OrganizationalLeadership />
        <DigitalTwinProcess />
        <HowItWorks />
        <ContactFormSection />
      </main>
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default page;
