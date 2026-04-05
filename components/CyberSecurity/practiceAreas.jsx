'use client';

import Link from "next/link";

const DEFAULT_HEADING = "Practice Areas";
const DEFAULT_SUBHEADING = "LSC's cyber security services span the full spectrum from technical testing to board-level strategy. Each is designed to function independently or as part of a coordinated programme.";

const DEFAULT_FEATURES = [
  {
    id: 1, slug: "certification-and-compliance",
    icon: "/images/InnerPages/cyber-security/license.svg",
    title: "Certification & Compliance Services",
    description: "Support to achieve recognised certifications and frameworks including Cyber Essentials, ISO 27001, IASME, and NIST CSF. Structured preparation that builds lasting capability, not just a certificate.",
  },
  {
    id: 2, slug: "cyber-risk-and-resilience",
    icon: "/images/InnerPages/cyber-security/verified_user.svg",
    title: "Cyber Risk & Resilience",
    description: "Risk assessments, incident response planning, business continuity, and security policy development to strengthen governance and build the capability to respond and recover.",
  },
  {
    id: 3, slug: "technical-security-services",
    icon: "/images/InnerPages/cyber-security/enhanced_encryption.svg",
    title: "Technical Security Services",
    description: "Vulnerability scanning, penetration testing, and technical security assessments that identify weaknesses across systems, networks, and applications before attackers do.",
  },
  {
    id: 4, slug: "defence-and-government-cyber-assurance",
    icon: "/images/InnerPages/cyber-security/encrypted.svg",
    title: "Defence & Government Cyber Assurance",
    description: "Specialist support for organisations navigating MOD requirements, NCSC frameworks, and public sector cyber assurance standards.",
  },
  {
    id: 5, slug: "cyber-risk-and-architecture-advisory",
    icon: "/images/InnerPages/cyber-security/chess_pawn.svg",
    title: "Cyber Risk & Architecture Advisory",
    description: "Strategic advisory that embeds security into system design through threat modelling, secure architecture reviews, and structured risk management.",
  },
  {
    id: 6, slug: "operational-technology-specialist-security",
    icon: "/images/InnerPages/cyber-security/reviews.svg",
    title: "Operational Technology & Specialist Security Reviews",
    description: "Security assessments for operational, industrial, and specialised systems including ICS, SCADA, point-of-sale, and connected IoT platforms.",
  },
  {
    id: 7, slug: "cyber-strategy-and-governance-advisory",
    icon: "/images/InnerPages/cyber-security/mitre.svg",
    title: "Cyber Strategy & Governance Advisory",
    description: "Advisory services that help leadership teams build strong cyber governance, develop security strategies, and manage cyber risk at board level. Includes Virtual CISO services.",
  },
  {
    id: 8, slug: "specialist-programme-support",
    icon: "/images/InnerPages/cyber-security/support.svg",
    title: "Specialist Programme Support",
    description: "Cyber security expertise embedded within major programmes, digital transformations, and acquisitions — defining requirements and providing assurance documentation.",
  },
];

// Derive the best column count from the number of features
function getColClass(count) {
  if (count <= 3) return "lg:grid-cols-3";
  if (count === 4) return "lg:grid-cols-4";
  if (count === 5 || count === 6) return "lg:grid-cols-3";
  return "lg:grid-cols-4";
}

export default function PracticeAreas({ practiceAreas }) {
  const heading        = practiceAreas?.heading        ?? DEFAULT_HEADING;
  const subheading     = practiceAreas?.subheading     ?? DEFAULT_SUBHEADING;
  const features       = practiceAreas?.features       ?? DEFAULT_FEATURES;
  const heading_bottom = practiceAreas?.heading_bottom ?? null;
  const subheading_bottom = practiceAreas?.subheading_bottom ?? null;
  const colClass       = getColClass(features.length);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6">
            {heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto sm:mx-0">
            {subheading}
          </p>
        </div>

        {/* Features Grid — columns adapt to feature count */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-6 sm:gap-8 md:gap-10 lg:gap-12`}>
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.slug ? `/cyber-security/${feature.slug}` : "#"}
              className="group text-center sm:text-left hover:opacity-90 transition-opacity"
            >
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0E2253] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom Heading — only rendered when passed via practiceAreas prop */}
        {(heading_bottom || subheading_bottom) && (
          <div className="mt-10 sm:mt-12 lg:mt-16 text-center sm:text-left">
            {heading_bottom && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4 sm:mb-6 lg:max-w-3xl">
                {heading_bottom}
              </h2>
            )}
            {subheading_bottom && (
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mx-auto sm:mx-0">
                {subheading_bottom}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
