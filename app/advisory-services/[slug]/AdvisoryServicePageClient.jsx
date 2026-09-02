"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { ADVISORY_SERVICES } from "@/lib/advisoryServicesData";


import AdvisoryServiceHero from "@/components/Advisory/AdvisoryServiceHero";
import AICTASection from "@/components/AI/AICTASection";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import SecondCTASection from "@/components/AI/SecondCTASection";
import TiersSection from "@/components/AI/TiersSection";
import ContactSection from "@/components/AI/ContactSection";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import AdvisoryCTASection from "@/components/Advisory/AdvisoryCTASection";
import AdvisoryPractices from "@/components/Advisory/AdvisoryPractices";

export default function AdvisoryServicePage() {
  const { slug } = useParams();
  const service = ADVISORY_SERVICES[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/advisory-services" className="text-[#0E2253] hover:underline">
              ← Back to Advisory Services
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <AdvisoryServiceHero service={service} />

        {/* 2. CTA Sections */}
        <AdvisoryCTASection cta={service.cta} />

        <SecondCTASection cta={service.secondCta} />

         {/* 5. Contact section */}
        {service.contact && (
          <ContactSection
            top={service.contact.top}
            banner={service.contact.banner}
          />
        )}


        {/* 2b. Second CTA — entrepreneurship only */}
        {service.cta2 && <AdvisoryCTASection cta={service.cta2} />}

        

        
        
       

        {/* 3. Advisory Practices — operational-and-strategic only */}
        {service.advisoryPractices && (
          <AdvisoryPractices
            heading={service.advisoryPractices.heading}
            subheading={service.advisoryPractices.subheading}
            practices={service.advisoryPractices.practices}
          />
        )}

      </main>
      <Footer />
    </>
  );
}
