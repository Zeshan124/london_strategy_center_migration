'use client';

import Link from "next/link";
import Image from "next/image";

const DEFAULT_HEADING = "Practice Areas";
const DEFAULT_SUBHEADING = "LSC's cyber security services span the full spectrum from technical testing to board-level strategy. Each is designed to function independently or as part of a coordinated programme.";

const DEFAULT_FEATURES = [
  {
    id: 1, slug: "certification-and-compliance",
    icon: "/images/InnerPages/cyber-security/license.svg",
    title: "Certification & Compliance Services",
    description: "Support to achieve recognised certifications and frameworks - including Cyber Excellence Level 1 to 4 (/cyber-excellence) which is aligned with NCICC-1 2005. Additional support is available across leading frameworks including Cyber  Essentials, Cyber Essentials Plus (CE+) ; IASME Cyber Assurance ;  ISO 27001 gap analysis and NIST CSF pathway. Structured preparation that builds lasting capability, not just a certificate.",
  },
  {
    id: 2, slug: "cyber-risk-and-resilience",
    icon: "/images/InnerPages/cyber-security/verified_user.svg",
    title: "Cyber Risk & Resilience",
    description: "Risk assessments, incident response planning, business continuity, and security policy development. These services help organisations understand their exposure, strengthen governance, and build the capability to respond and recover.",
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
    description: "Specialist support for organisations operating within government and defence environments,navigating strict security requirements, strengthening supply-chain security, and maintaining contract eligibility.",
  },
  {
    id: 5, slug: "cyber-risk-and-architecture-advisory",
    icon: "/images/InnerPages/cyber-security/chess_pawn.svg",
    title: "Cyber Risk & Architecture Advisory",
    description: "Strategic advisory that embeds cyber security into system design through threat modelling, secure architecture reviews, and structured risk management. Security considered from the outset, not retrofitted. ",
  },
  {
    id: 6, slug: "operational-technology-specialist-security",
    icon: "/images/InnerPages/cyber-security/reviews.svg",
    title: "Operational Technology & Specialist Security Reviews",
    description: "Security assessments for operational, industrial, and specialised systems - including point-of-sale environments, industrial control systems, and connected IoT platforms.",
  },
  {
    id: 7, slug: "cyber-strategy-and-governance-advisory",
    icon: "/images/InnerPages/cyber-security/mitre.svg",
    title: "Cyber Strategy & Governance Advisory",
    description: "Advisory services that help leadership teams build strong cyber governance, develop security strategies, improve maturity, and manage cyber risk at organisational and board level. Includes Virtual CISO services.",
  },
  {
    id: 8, slug: "specialist-programme-support",
    icon: "/images/InnerPages/cyber-security/support.svg",
    title: "Specialist Programme Support",
    description: "Cyber security expertise embedded within major programmes, digital transformations, and acquisitions - defining requirements, integrating security into system design, and providing assurance documentation.",
  },
];

// Renders a string with optional inline [text](/href) markdown links
function RichText({ text, className }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <p className={className}>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <Link key={i} href={match[2]} className="text-[#0E2253] underline underline-offset-2 hover:opacity-75 transition-opacity">
              {match[1]}
            </Link>
          );
        }
        return part;
      })}
    </p>
  );
}

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
    <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50">

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0E2253] opacity-20 blur-3xl rounded-full animate-[spin_25s_linear_infinite]"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-24">

        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4">
            {heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-8`}>
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.slug ? `/cyber-security/${feature.slug}` : "#"}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0E2253]/40 hover:via-blue-400/30 hover:to-transparent transition-all duration-500"
            >
              <div
                className="relative h-full rounded-2xl bg-white/80 backdrop-blur-lg p-6 md:p-8 border border-slate-200/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                }}
              >
                {/* Spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--x) var(--y), rgba(14,34,83,0.15), transparent 60%)",
                  }}
                ></div>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-[#0E2253]/15 via-blue-100 to-transparent 
                  group-hover:scale-110 transition duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg md:text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0E2253] transition">
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 w-12 h-[2px] bg-gradient-to-r from-[#0E2253] to-blue-400 mb-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Description */}
                <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        {(heading_bottom || subheading_bottom) && (
          <div className="mt-12 lg:mt-16 text-center sm:text-left">
            {heading_bottom && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
                {heading_bottom}
              </h2>
            )}
            {subheading_bottom && (
              <RichText
                text={subheading_bottom}
                className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed"
              />
            )}
          </div>
        )}

      </div>
    </section>
  );
}
