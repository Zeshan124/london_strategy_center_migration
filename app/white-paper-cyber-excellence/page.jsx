import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

const tags = [
  "#CyberExcellence",
  "#WEF2026",
  "#CyberResilience",
  "#AIGovernance",
  "#DigitalSecurity",
];

const highlights = [
  { label: "WEF Report", value: "2026 Outlook" },
  { label: "Core Themes", value: "5 Covered" },
  { label: "Framework", value: "Cyber Excellence" },
  { label: "Issued By", value: "London Strategy Centre" },
];

const sections = [
  {
    title: "Introduction: From Awareness to Operationalised Resilience",
    body: [
      "The 2026 Outlook emphasises a pressing truth: the risks associated with AI acceleration, fragmented regulatory regimes, and ecosystem-wide vulnerability are no longer emerging — they are fully present. Leadership is no longer asking whether these risks are credible, but how best to respond.",
      "Cyber Excellence offers that response. It provides structured maturity levels, measurable control benchmarks, and an integrated governance model that embeds cyber resilience into organisational strategy. Its purpose aligns directly with the Outlook's central message: resilience must be systemic, evidence-based and led from the top.",
    ],
  },
  {
    number: "1",
    title: "AI Acceleration and the Governance Imperative",
    body: [
      "The dual-use nature of AI is one of the Outlook's most urgent themes. AI simultaneously enhances defensive capabilities and lowers the threshold for executing sophisticated attacks. Phishing, fraud, reconnaissance and infrastructure probing are now scalable through automated models and generative systems.",
      "The Outlook highlights three core risks:",
    ],
    bullets: [
      "Rapid expansion of AI-enabled fraud and attack automation",
      "Uncontrolled deployment of AI systems creating unmonitored vulnerabilities",
      "Insufficient governance structures for AI decision-making",
    ],
    subSections: [
      {
        title: "How Cyber Excellence Operationalises This",
        body: ["Cyber Excellence embeds AI governance directly into enterprise risk management. The framework requires:"],
        bullets: [
          "Mandatory governance controls within the Governance & Leadership domain",
          "Secure-by-design requirements across all digital transformation initiatives",
          "Formalised risk assessment checkpoints for AI system deployment",
          "Explicit accountability at board and executive levels",
        ],
        closing: "This moves organisations away from treating AI as a technology silo and towards integrating it into structured assurance, risk and oversight processes. In doing so, Cyber Excellence reflects the Outlook's call for governance-first AI integration.",
      },
    ],
  },
  {
    number: "2",
    title: "Cyber-Enabled Fraud: Identity as the New Perimeter",
    body: [
      "The Outlook reports that cyber-enabled fraud has surpassed ransomware as the most significant concern for executives. Identity is increasingly the attack surface, exploited across SaaS ecosystems, payment systems and third-party integrations.",
      "Key risks identified include:",
    ],
    bullets: [
      "Weak or fragmented identity governance",
      "Limited visibility over SaaS platforms",
      "Lack of fraud-centric reporting at board level",
    ],
    subSections: [
      {
        title: "Cyber Excellence as the Operational Framework",
        body: ["Cyber Excellence responds through a comprehensive identity and ecosystem-focused control model:"],
        bullets: [
          "Defined maturity criteria for Identity & Access Management",
          "Monitoring and telemetry requirements across SaaS environments",
          "Third-party risk governance embedded into certification criteria",
          "Executive reporting metrics that link cyber posture to fraud exposure",
        ],
        closing: "In shifting focus from perimeter-centric controls to identity and ecosystem assurance, Cyber Excellence mirrors the structural evolution highlighted by the WEF.",
      },
    ],
  },
  {
    number: "3",
    title: "Geopolitical Fragmentation and Regulatory Complexity",
    body: [
      "Geopolitical instability is fragmenting global cyber norms and increasing compliance burdens. The Outlook warns that divergent regulatory regimes and state-sponsored threats are placing pressure on supply chains and risk management models.",
      "Major risks include:",
    ],
    bullets: [
      "Conflicting regulatory requirements across jurisdictions",
      "Erosion of supply chain trust",
      "Heightened threat levels from state and proxy actors",
    ],
    subSections: [
      {
        title: "Cyber Excellence as a Harmonising Standard",
        body: ["By providing a structured, harmonised assurance baseline, Cyber Excellence helps organisations navigate fragmented regulatory landscapes with credibility and consistency."],
        bullets: [
          "Alignment with internationally recognised frameworks, including NIST CSF and ISO standards",
          "Supply chain maturity benchmarks embedded within certification levels",
          "Formalised risk mapping that links geopolitical exposure to operational impact",
          "Evidence-based compliance documentation suitable for cross-border scrutiny",
        ],
      },
    ],
  },
  {
    number: "4",
    title: "Closing the Widening Cyber Resilience Gap",
    body: [
      "The WEF warns that the resilience gap between cyber-mature and under-resourced organisations is widening, creating systemic exposure across entire ecosystems. This is especially acute for small and mid-sized organisations that lack structured control models.",
      "Risks include:",
    ],
    bullets: [
      "Insufficient baseline controls",
      "Inconsistent maturity across supply chains",
      "Increased aggregate systemic risk",
    ],
    subSections: [
      {
        title: "Cyber Excellence as a Scalable Model",
        body: ["The framework provides a common foundation that improves ecosystem-wide consistency — precisely the systemic remedy the Outlook identifies as essential."],
        bullets: [
          "Tiered certification levels supporting incremental maturity building",
          "Clear, measurable requirements aligned to real-world implementation",
          "Practical guidance rather than theoretical recommendations",
          "Transparent maturity signalling for partners, investors and regulators",
        ],
      },
    ],
  },
  {
    number: "5",
    title: "From Technical Protection to Strategic Confidence",
    body: [
      "The Outlook reframes cybersecurity as a driver of strategic confidence rather than a cost centre. Organisations with strong governance, assured identity management, secure-by-design principles and resilient supply chains consistently outperform those relying on reactive measures.",
      "Cyber Excellence operationalises this shift by requiring:",
    ],
    bullets: [
      "Board-level ownership of cyber resilience",
      "Demonstrable integration of cyber risk into enterprise risk management",
      "Control sets that link technical capabilities to business outcomes",
      "External verification that supports trust with regulators, partners and markets",
    ],
    closing: "Through this, Cyber Excellence transforms cybersecurity into a strategic advantage aligned with long-term organisational resilience.",
  },
];

const references = [
  { text: "London Strategy Centre – Cyber Excellence", href: "/cyberexcellence" },
  { text: "World Economic Forum – Global Cybersecurity Outlook 2026", href: "#" },
  { text: "Economic Times – Cybersecurity a National Priority as AI Pushes Threat Landscape", href: "#" },
  { text: "LinkedIn – Global Cybersecurity Outlook 2026 (K. Lovejoy)", href: "#" },
  { text: "WEF Radio Davos – Global Cybersecurity Outlook 2026: INTERPOL & Dragos", href: "#" },
];

export default function WhitePaperPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0E2253] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute left-0 bottom-0 right-0 h-px bg-white/10 pointer-events-none" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-16 sm:pb-20">
          {/* Category badges */}
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              White Paper
            </span>
            <span className="text-white/30">·</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              Cyber Security
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-4">
              Cyber Excellence
              {/* <br /> */}
              <span className="text-white/50"> in an Era of</span>
              <br />
              Fragmentation
            </h1>
            <div className="w-16 h-0.5 bg-white/25 mb-6" />
            <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-2xl mb-10">
              How the Cyber Excellence framework operationalises the World Economic Forum's Global Cybersecurity Outlook 2026
            </p>

            {/* Author / meta row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Author</p>
                <p className="font-semibold text-white text-sm">Pete Villiers</p>
                <p className="text-white/45 text-xs mt-0.5">CEng BEng MIET ChCSP CISSP VR</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Published</p>
                <p className="font-medium text-white/80 text-sm">17 March 2026</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Read Time</p>
                <p className="font-medium text-white/80 text-sm">10 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="bg-[#F1EEEA] border-b border-[#E8E3DE]">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((h, i) => (
              <div key={i}>
                <p className="text-[10px] font-bold tracking-widest text-[#0E2253]/40 uppercase mb-1">{h.label}</p>
                <p className="text-sm font-bold text-[#0E2253]">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mx-auto">

          {/* Article body */}
          <article className="flex-1 min-w-0">

            {/* Lead */}
            <div className="relative pl-6 mb-8 border-l-4 border-[#0E2253]">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-light">
                The World Economic Forum's Global Cybersecurity Outlook 2026 paints a stark picture of a digital world characterised by accelerating AI-driven threats, large-scale cyber-enabled fraud, geopolitical fragmentation, and a growing divide in organisational cyber maturity.
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-12">
              Cybersecurity has moved beyond the domain of technical teams; it has become a central determinant of economic stability, operational continuity, and strategic confidence. This white paper examines how the Cyber Excellence framework, developed by the London Strategy Centre, provides a practical, scalable and measurable approach to operationalising the WEF's findings. Rather than offering abstract recommendations, Cyber Excellence translates strategic risks into actionable governance, control and assurance requirements that strengthen resilience across the enterprise and its ecosystem.
            </p>

            {/* Sections */}
            {sections.map((section, i) => (
              <div key={i} className="mb-14">
                {section.number ? (
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0E2253] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {section.number}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug pt-1.5">{section.title}</h2>
                  </div>
                ) : (
                  <div className="mb-5">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{section.title}</h2>
                    <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
                  </div>
                )}

                {section.body?.map((p, j) => (
                  <p key={j} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">{p}</p>
                ))}

                {section.bullets && (
                  <ul className="my-5 space-y-2.5 bg-gray-50 border border-gray-100 rounded-xl p-5">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E2253]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.closing && (
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">{section.closing}</p>
                )}

                {section.subSections?.map((sub, s) => (
                  <div key={s} className="mt-6 rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                    <div className="bg-[#0E2253]/5 border-b border-gray-100 px-5 py-3.5">
                      <h3 className="text-sm sm:text-base font-semibold text-[#0E2253]">{sub.title}</h3>
                    </div>
                    <div className="px-5 py-5">
                      {sub.body?.map((p, j) => (
                        <p key={j} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">{p}</p>
                      ))}
                      {sub.bullets && (
                        <ul className="space-y-2.5">
                          {sub.bullets.map((b, k) => (
                            <li key={k} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sub.closing && (
                        <p className="text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100 italic">
                          {sub.closing}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="relative bg-[#0E2253] rounded-2xl p-8 sm:p-10 mb-12 overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-widest text-white/35 uppercase mb-4">Conclusion</p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-6">
                  Cyber Excellence as a Response to the 2026 Cyber Reality
                </h2>
                <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-4">
                  The themes outlined by the World Economic Forum — AI acceleration, fraud escalation, geopolitical fragmentation and widening resilience divides — describe a landscape in which ad hoc or reactive security models can no longer function. Resilience must be structured, measurable and continuously improved.
                </p>
                <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-5">
                  Cyber Excellence provides the practical framework to achieve this. It translates strategic risks into operational controls, embeds governance at the highest levels, and delivers scalable maturity models that strengthen both individual organisations and the ecosystems they operate within.
                </p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    In an era defined by digital fragmentation, Cyber Excellence enables organisations to move from awareness to action — and from protection to strategic confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="mb-12">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-5">References</p>
              <ol className="space-y-3">
                {references.map((ref, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-400 flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <a href={ref.href} className="text-sm text-gray-500 hover:text-[#0E2253] hover:underline transition-colors leading-relaxed">
                      {ref.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-semibold text-[#0E2253] bg-[#0E2253]/8 border border-[#0E2253]/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-60 lg:shrink-0">
            <div className="lg:sticky lg:top-32 space-y-5">

              {/* Author card */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-[#0E2253] px-5 py-3">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Author</p>
                </div>
                <div className="p-5">
                  <div className="w-11 h-11 rounded-full bg-[#0E2253]/10 flex items-center justify-center text-[#0E2253] font-bold text-sm mb-3">
                    PV
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Pete Villiers</p>
                  <p className="text-xs text-gray-500 leading-relaxed">CEng BEng MIET ChCSP CISSP VR</p>
                </div>
              </div>

              {/* Table of contents */}
              <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Contents</p>
                <ol className="space-y-3">
                  {sections.filter((s) => s.number).map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#0E2253]/10 text-[#0E2253] text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {s.number}
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">{s.title}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related */}
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Related</p>
                <Link href="/cyberexcellence" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline mb-3">
                  <span>Cyber Excellence Framework</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
                <div className="h-px bg-gray-200 mb-3" />
                <Link href="/cyber-security" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline">
                  <span>Cyber Security Services</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
              </div>

              {/* CTA */}
              <div className="relative bg-[#0E2253] rounded-2xl p-5 overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/[0.05] pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] font-bold tracking-widest text-white/45 uppercase mb-3">Get Certified</p>
                  <p className="text-xs text-white/65 leading-relaxed mb-5">
                    Learn how Cyber Excellence can strengthen your organisation's resilience posture.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center text-[11px] font-bold text-[#0E2253] bg-white px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors uppercase tracking-widest"
                  >
                    Contact LSC
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
