"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { AI_SERVICES } from "@/lib/aiServicesData";

import AIServiceHero from "@/components/AI/AIServiceHero";
import AICTASection from "@/components/AI/AICTASection";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import TiersSection from "@/components/AI/TiersSection";
import Phases from "@/components/AI/Phases";
import ContactSection from "@/components/AI/ContactSection";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import SecondCTASection from "@/components/AI/SecondCTASection";
import WhyDifferent from "@/components/AI/WhyDifferent";
import AIxArchitecture from "@/components/AI/AIxArchitecture";

export default function AIServicePage() {
  const { slug } = useParams();
  const service = AI_SERVICES[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/ai" className="text-[#0E2253] hover:underline">
              ← Back to AI Services
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Custom component order for ai-noise-to-direction
  if (slug === "ai-noise-to-direction") {
    return (
      <>
        <Navbar />
        <main>
          <AIServiceHero service={service} />
          {service.phases && (
            <Phases
              intro={service.phases.intro}
              heading={service.phases.heading}
              subheading={service.phases.subheading}
              phases={service.phases.items}
            />
          )}
          <AICTASection cta={service.cta} />
          
          <PracticeAreas practiceAreas={service.practiceAreas} />
          {service.tiers && (
            <TiersSection
              top_heading={service.tiers.top_heading}
              top_subheading={service.tiers.top_subheading}
              heading={service.tiers.heading}
              subheading={service.tiers.subheading}
              tiers={service.tiers.items}
            />
          )}
          <WhyDifferent content={service.whyDifferent} />
          <SecondCTASection cta={service.secondCta} />
          {service.tiers2 && (
            <TiersSection
              top_heading={service.tiers2.top_heading}
              top_subheading={service.tiers2.top_subheading}
              heading={service.tiers2.heading}
              subheading={service.tiers2.subheading}
              tiers={service.tiers2.items}
            />
          )}
          
          
          
          {service.contact && (
            <ContactSection
              top={service.contact.top}
              banner={service.contact.banner}
            />
          )}
        </main>
        <Footer />
      </>
    );
  }

  // Default layout for all other services
  return (
    <>
      <Navbar />
      <main>
        <AIServiceHero service={service} />
        <AICTASection cta={service.cta} />
        <PracticeAreas practiceAreas={service.practiceAreas} />
        <SecondCTASection cta={service.secondCta} />

        {service.tiers && (
          <TiersSection
            top_heading={service.tiers.top_heading}
            top_subheading={service.tiers.top_subheading}
            heading={service.tiers.heading}
            subheading={service.tiers.subheading}
            tiers={service.tiers.items}
          />
        )}

        {service.phases && (
          <Phases
            intro={service.phases.intro}
            heading={service.phases.heading}
            subheading={service.phases.subheading}
            phases={service.phases.items}
          />
        )}

        {service.aixArchitecture && <AIxArchitecture content={service.aixArchitecture} />}

        {service.contact && (
          <ContactSection
            top={service.contact.top}
            banner={service.contact.banner}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
