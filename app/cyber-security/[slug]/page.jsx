"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { CYBER_SERVICES } from "@/lib/cyberServicesData";

// Reused components
import ServiceHero from "@/components/CyberSecurity/ServiceHero";
import CTASection from "@/components/CyberSecurity/CTASection";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import FAQ from "@/components/CyberSecurity/FAQ";
import ConsultationForm from "@/components/CyberSecurity/ConsultationForm";

export default function CyberServicePage() {
  const { slug } = useParams();
  const service = CYBER_SERVICES[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/cyber-security" className="text-[#0E2253] hover:underline">
              ← Back to Cyber Security
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
        {/* 1. Hero — DigitalTwinHero style */}
        <ServiceHero service={service} />

        {/* 2. CTA Section */}
        <CTASection cta={service.cta} />

        {/* 3. Practice Areas */}
        <PracticeAreas practiceAreas={service.practiceAreas} />

        {/* 4. UniBirmingham / Partner section */}
        <UniBirmingham partner={service.partner} />

        {/* 5. FAQ */}
        <FAQ />

        {/* 6. Consultation Form */}
        <div id="consultation">
          <ConsultationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
