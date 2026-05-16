"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { CYBER_SERVICES } from "@/lib/cyberServicesData";
import ServiceHero from "@/components/CyberSecurity/ServiceHero";
import CTASection from "@/components/CyberSecurity/CTASection";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import UniBirmingham from "@/components/InnerPages/CyberExcellence/UniBirmingham";
import FAQ from "@/components/CyberSecurity/FAQ";

export default function CyberServicePageClient() {
  const { slug } = useParams();
  const service = CYBER_SERVICES[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/cyber-security" className="text-[#0E2253] hover:underline">
            ← Back to Cyber Security
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <ServiceHero service={service} />
      <CTASection cta={service.cta} />
      <PracticeAreas practiceAreas={service.practiceAreas} />
      <UniBirmingham partner={service.partner} />
      {/* {service.faqs && <FAQ faqs={service.faqs} />} */}
    </main>
  );
}
