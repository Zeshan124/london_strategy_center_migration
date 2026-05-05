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

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <AIServiceHero service={service} />

        {/* 2. CTA Section */}
        <AICTASection cta={service.cta} />

       

        {/* 3. Practice Areas */}
        <PracticeAreas practiceAreas={service.practiceAreas} />

        <SecondCTASection cta={service.secondCta} />

        {/* 4. Tiers slider (shown when service has tiers data) */}
        {service.tiers && (
          <TiersSection
            heading={service.tiers.heading}
            subheading={service.tiers.subheading}
            tiers={service.tiers.items}
          />
        )}

         {/* Why Different — ai-noise-to-direction only */}
        {service.whyDifferent && <WhyDifferent content={service.whyDifferent} />}

        {/* 5. Phases (shown when service has phases data) */}
        {service.phases && (
          <Phases
            intro={service.phases.intro}
            heading={service.phases.heading}
            subheading={service.phases.subheading}
            phases={service.phases.items}
          />
        )}

        {/* AIx Architecture — aix-programme only */}
        {service.aixArchitecture && <AIxArchitecture content={service.aixArchitecture} />}

        {/* Contact section */}
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
