export const CYBER_SERVICES = {
  "certification-and-compliance": {
    slug: "certification-and-compliance",
    icon: "/images/InnerPages/cyber-security/license.svg",
    image: "/images/InnerPages/cyberexcellence/Main-Slider.jpg",
    title: "Certification & Compliance Services",
    tagline: "Build lasting capability, not just a certificate.",
    description:
      "Cyber Security Certification and Compliance Service",
    heroContent: [
      "Achieving a cyber security certification demonstrates a baseline of security practice to clients, regulators, and supply chain partners. But most organisations experience the same pattern — intensive preparation, successful certification, and gradual erosion of the practices that achieved it.",
      "LSC structures its certification support to build lasting internal capability alongside the credential. Every engagement is designed so that the organisation retains the knowledge, processes, and governance structures needed to maintain and improve security posture — not just pass the next assessment.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC supports organisations through the full certification journey — from initial gap analysis to certification readiness. This includes structured preparation for Cyber Essentials and Cyber Essentials Plus, IASME Cyber Assurance, ISO 27001 gap analysis and readiness, NIST CSF pathway alignment, and Cyber Excellence Level 1–4 aligned with NCICC-1 2005.",
      },
      {
        heading: "Why Certification Alone Is Not Enough",
        content:
          "Achieving a certification is a milestone, not an endpoint. Many organisations complete certification and revert to previous practices within months. LSC structures its compliance support to build internal capability alongside the certification process — so the organisation retains the knowledge and governance structures needed to maintain and extend its security posture.",
      },
      {
        heading: "Who This Is For",
        content:
          "Organisations seeking to demonstrate security maturity to clients, regulators, or supply chain partners. Defence and government suppliers with contractual certification requirements. Businesses preparing for tenders, audits, or regulatory reviews.",
      },
    ],
    practiceAreas: {
      heading: "Comprehensive framework support",
      subheading: "Beyond Cyber Excellence, LSC provides preparation, gap analysis, and implementation support across the leading certification and compliance frameworks",
      features: [
        { id: 1, icon: "/images/InnerPages/cyber-security/cloud_sync.svg", title: "Cyber Essentials", description: "Certification support covering the five core technical controls. LSC guides organisations through self-assessment preparation, evidence gathering, and remediation of identified gaps.", slug: "certification-and-compliance" },
        { id: 2, icon: "/images/InnerPages/cyber-security/bookmark_added.svg", title: "Cyber EssentialsPlus (CE+)", description: "Hands-on assessment preparation including technical verification of controls, vulnerability testing readiness, and remediation planning for CE+ requirements.", slug: "certification-and-compliance" },
        { id: 3, icon: "/images/InnerPages/cyber-security/database_search.svg", title: "NCC ICS-1:2025", description: "Gap analysis, internal auditing, and implementation support for the National Cyber Centre's industrial control system standard. Particularly relevant for organisations operating critical infrastructure and operational technology environments.", slug: "certification-and-compliance" },
        { id: 4, icon: "/images/InnerPages/cyber-security/display_external_input.svg", title: "IASME Cyber Assurance", description: "Certification support for the IASME governance framework, which extends beyond Cyber Essentials to include GDPR assurance and broader governance requirements.", slug: "certification-and-compliance" },
        { id: 5, icon: "/images/InnerPages/cyber-security/insert_chart.svg", title: "ISO 27001", description: "Gap analysis against ISO 27001 requirements, internal audit support, implementation of information security management systems (ISMS), and preparation for external certification audits.", slug: "certification-and-compliance" },
        { id: 6, icon: "/images/InnerPages/cyber-security/lock.svg", title: "NIST Cyber Security Framework (CSF)", description: "Assessment and implementation support across all NIST CSF functions: Identify, Protect, Detect, Respond, and Recover. Includes guidance on associated NIST 800 series publications relevant to the organisation's environment.", slug: "certification-and-compliance" },
         { id: 7, icon: "/images/InnerPages/cyber-security/privacy_tip.svg", title: "Defence Cyber Certification (DCC)", description: "Preparation support for organisations in the defence supply chain, aligning security practices with MOD requirements and demonstrating compliance through structured evidence.", slug: "certification-and-compliance" },
           { id: 8, icon: "/images/InnerPages/cyber-security/Group_433.svg", title: "PCI DSS", description: "Readiness assessments for payment card industry data security standards, identifying gaps and providing remediation guidance to meet PCI DSS requirements.", slug: "certification-and-compliance" },
      ],
    },
    cta: {
      heading: "Certifications measure a moment - capability endures",
      paragraphs: [
        "Most certification programmes focus on readiness for a specific assessment. That creates a predictable pattern: intensive preparation, successful certification, gradual erosion of the practices that achieved it. When the next audit cycle arrives, the preparation begins again from a weaker baseline. This pattern persists because certification support typically addresses documentation and technical controls without engaging the governance structures that sustain them. The organisation passes the assessment but has not built the internal capability to maintain compliance independently.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section.jpg",
    },
    faqs: [
      { question: "What is the difference between Cyber Essentials and Cyber Excellence?", answer: "LSC supports Cyber Essentials, Cyber Essentials Plus, IASME Cyber Assurance, ISO 27001 gap analysis, NIST CSF pathway alignment, and Cyber Excellence Level 1–4 aligned with NCICC-1 2005." },
      { question: "How long does ISO 27001 implementation typically take?", answer: "Timelines depend on the certification and your starting point. Cyber Essentials can be achieved in weeks; ISO 27001 readiness typically takes several months. LSC agrees a realistic timeline at the outset." },
      { question: "Can LSC support multiple certifications simultaneously?", answer: "LSC structures every engagement to build internal capability alongside the credential — so your organisation retains the knowledge and governance structures needed to maintain compliance independently." },
      { question: "Is certification support available for organisations outside the UK?", answer: "Yes. LSC provides ongoing support for recertification, including gap assessments ahead of annual reviews and structured preparation where requirements have evolved." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/cta-section-1.jpg",
      heading: "Who this is for",
      paragraphs: [
        "These services are designed for organisations seeking their first cyber security certification, those renewing or upgrading existing certifications, defence suppliers required to demonstrate compliance for contract eligibility, and leadership teams that want certification to reflect genuine organisational capability rather than periodic compliance activity.",
      ],
      // logo: "/images/InnerPages/cyberexcellence/uof-logo.png",
      // logoAlt: "University of Birmingham Logo",
    },
    relatedServices: [
      "cyber-risk-and-resilience",
      "defence-and-government-cyber-assurance",
      "technical-security-services",
    ],
  },

  "cyber-risk-and-resilience": {
    slug: "cyber-risk-and-resilience",
    icon: "/images/InnerPages/cyber-security/verified_user.svg",
    image: "/images/InnerPages/cyber-security/slider-2.jpg",
    title: "Cyber Risk & Resilience",
    tagline: "Understand your exposure. Build the capability to respond.",
    description:
      "Cyber Risk and Resilience Service",
    heroContent: [
      "Effective cyber risk management goes beyond technology. Organisations that treat cyber security as a purely technical discipline — firewalls, patches, monitoring tools — discover the limitation when an incident occurs and the response depends on governance, communication, and decision-making under pressure. The technology may detect the breach. It does not determine whether the organisation can respond coherently.",
      "London Strategy Centre's cyber risk and resilience services help organisations understand their exposure to cyber threats, strengthen the governance structures that sustain security, and build the operational capability to respond to and recover from incidents.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC delivers structured cyber risk assessments that identify organisational exposure across people, process, and technology. This is paired with incident response planning, business continuity design, and the development of security policies that are operational — not just documented.",
      },
      {
        heading: "Resilience as a Strategic Capability",
        content:
          "Resilience is not just about recovery speed — it is about the ability of an organisation to anticipate, absorb, adapt to, and recover from a disruptive event. LSC helps organisations build resilience structures that are embedded in governance, tested in practice, and understood at the leadership level.",
      },
      {
        heading: "Who This Is For",
        content:
          "Organisations that have experienced a security incident and need structured recovery and prevention frameworks. Leadership teams that want to move beyond reactive security and build proactive risk governance. Enterprises managing complex supply chains with distributed risk exposure.",
      },
    ],
    practiceAreas: {
      heading: "Building resilience across six dimensions",
      subheading: "LSC's cyber risk and resilience services address the full spectrum from risk identification through to recovery capability.",
     features: [
  {
    id: 1,
    icon: "/images/InnerPages/cyber-security/Group_438.svg",
    title: "Cyber Security Health Checks",
    description:
      "Assess the organisation’s overall security posture against recognised frameworks. The output is a clear, prioritised view of strengths, weaknesses, and areas requiring immediate attention – designed for leadership teams, not solely for technical audiences.",
    slug: "cyber-risk-and-resilience",
  },
  {
    id: 2,
    icon: "/images/InnerPages/cyber-security/Vector.svg",
    title: "Security Risk Assessments",
    description:
      "Identify vulnerabilities, evaluate threat likelihood and impact, and prioritise risks in a format that supports informed decision-making. Assessments are structured to produce actionable outputs – not lengthy reports that require further interpretation.",
    slug: "cyber-risk-and-resilience",
  },
  {
    id: 3,
    icon: "/images/InnerPages/cyber-security/Vector-1.svg",
    title: "Incident Response Planning with Tabletop Exercises (TTX)",
    description:
      "Prepares teams for real-world cyber incidents through structured scenario-based exercises. Plans are developed, tested, and refined so that when an incident occurs, roles, escalation paths, and communication protocols are already understood.",
    slug: "cyber-risk-and-resilience",
  },
  {
    id: 4,
    icon: "/images/InnerPages/cyber-security/Vector-2.svg",
    title: "Business Continuity Planning",
    description:
      "Ensures the organisation can maintain critical operations during cyber disruptions. Plans address operational dependencies, communication requirements, and manual workaround procedures – not just IT system recovery.",
    slug: "cyber-risk-and-resilience",
  },
  {
    id: 5,
    icon: "/images/InnerPages/cyber-security/Vector-3.svg",
    title: "Disaster Recovery Planning",
    description:
      "Provides structured processes for restoring systems, data, and services after a significant cyber incident. Recovery plans are aligned with business priorities so that the most critical functions are restored first.",
    slug: "cyber-risk-and-resilience",
  },
  {
    id: 6,
    icon: "/images/InnerPages/cyber-security/Vector-4.svg",
    title: "Security Policy Development",
    description:
      "Establishes clear governance and security practices across the organisation. Policies are written to be implementable – concise, aligned with regulatory requirements, and designed for the people who must follow them.",
    slug: "cyber-risk-and-resilience",
  },
],
    },
    cta: {
      heading: "The gap between detection and response is organisational, not technical",
      paragraphs: [
        "Most organisations invest significantly in detection and prevention. Fewer invest in the governance, planning, and rehearsal required to respond effectively when those controls fail. The result is a predictable pattern: the security operations centre identifies an anomaly, but the escalation path is unclear. The incident response plan exists in a document, but it has never been tested under realistic conditions. Business continuity arrangements address IT recovery but not operational decision-making during disruption.",
        "This gap is not a technology failure. It is a governance and capability failure - and it is where the greatest organisational risk sits.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section-2.jpg",
    },
    faqs: [
      { question: "How often should tabletop exercises be conducted?", answer: "LSC's risk assessments identify organisational exposure across people, process, and technology. The output is a prioritised risk register with practical remediation guidance — not a generic checklist." },
      { question: "What distinguishes LSC's risk assessments from standard vulnerability scanning?", answer: "LSC facilitates tabletop exercises and simulation scenarios that test the plan against realistic cyber incident scenarios, identifying gaps before a real incident does." },
      { question: "Can these services support regulatory compliance requirements?", answer: "Yes. LSC provides post-incident support including root cause analysis, remediation guidance, and structured improvements to prevent recurrence." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/slider-3.jpg",
      heading: "Who this is for",
      paragraphs: [
        "These services are designed for organisations where cyber resilience is a board-level priority, where regulatory or contractual obligations require demonstrable risk management, where existing incident response capabilities have not been tested under realistic conditions, and where leadership teams need clear, actionable insight into their cyber risk exposure.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "certification-and-compliance",
      "cyber-strategy-and-governance-advisory",
      "technical-security-services",
    ],
  },

  "technical-security-services": {
    slug: "technical-security-services",
    icon: "/images/InnerPages/cyber-security/enhanced_encryption.svg",
    image: "/images/InnerPages/cyber-security/slider-4.jpg",
    title: "Technical Security Services",
    tagline: "Identify weaknesses before attackers do.",
    description:
      "Technical Security Services",
    heroContent: [
      "Vulnerabilities that exist in theory become breaches in practice. The difference between a theoretical risk and an active compromise is often a matter of weeks - sometimes days. Technical security testing identifies these weaknesses before they can be exploited, providing practical insight into how effective an organisation's security controls actually are, not how effective they are assumed to be.",
      "London Strategy Centre's technical security services deliver structured testing across networks, systems, and applications - producing actionable findings that connect directly to remediation and governance.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC delivers technical security assessments including external and internal vulnerability scanning, network penetration testing, web application penetration testing, and infrastructure security reviews. Each engagement produces a prioritised remediation roadmap, not just a list of findings.",
      },
      {
        heading: "Beyond the Report",
        content:
          "Most penetration tests produce a report that sits unread. LSC structures its technical assessments with a debrief, remediation guidance, and — where required — re-testing to verify fixes. The aim is a measurable improvement in security posture, not just documentation of risk.",
      },
      {
        heading: "Who This Is For",
        content:
          "Organisations with compliance or contractual requirements for penetration testing. Development teams preparing to launch new systems or applications. IT and security teams seeking an independent external assessment of their environment.",
      },
    ],
    practiceAreas: {
      heading: "Three testing disciplines, one clear objective",
      subheading: "LSC's technical security services are structured around three complementary disciplines. Each serves a distinct purpose; together, they provide a comprehensive view of an organisation's technical security posture.",
      features: [
        { id: 1, icon: "/images/InnerPages/cyber-security/penetration-testing.svg", title: "Penetration Testing", description: "Simulates real-world cyber attacks to identify exploitable weaknesses in systems and networks. Where vulnerability scanning identifies what is theoretically vulnerable, penetration testing demonstrates what an attacker could actually achieve. Testing is conducted against defined scope and rules of engagement, with findings reported in both technical detail and business-impact terms.", slug: "technical-security-services" },
        { id: 2, icon: "/images/InnerPages/cyber-security/penetration-security.svg", title: "Technical Security Assessments", description: "Evaluate the security of IT infrastructure, applications, and cloud environments through structured review. Assessments examine configuration, architecture, access controls, and security monitoring - providing a detailed picture of how well the technical environment supports the organisation's security requirements.", slug: "technical-security-services" },
      ],
      heading_bottom: "Testing that informs decisions, not just reports",
      subheading_bottom: "The value of technical security testing is not in the report. It is in what the organisation does with the findings. LSC structures all testing outputs to support decision-making: vulnerabilities are prioritised by business impact, remediation guidance is practical and specific, and executive summaries enable leadership teams to understand risk without requiring technical expertise. Where testing reveals systemic issues - configuration management weaknesses, architectural vulnerabilities, or governance gaps in patch management - LSC connects findings to the broader cyber risk and governance picture."
    },
    cta: {
      heading: "Assumptions about security controls are the most dangerous controls",
      paragraphs: [
        "Organisations deploy firewalls, configure access controls, patch systems, and implement monitoring. These measures are necessary. They also create a sense of security that may not reflect reality. Configuration drift, unpatched edge systems, default credentials, and overlooked legacy applications are not unusual - they are normal. The question is not whether vulnerabilities exist. It is whether the organisation knows where they are and how exploitable they are.",
        "Technical testing answers that question with evidence rather than assumption.",
      ],
      image: "/images/InnerPages/cyber-security/slider-5.jpg",
    },
    faqs: [
      { question: "How frequently should penetration testing be conducted?", answer: "Most organisations should conduct penetration testing at least annually, or following significant changes to systems, infrastructure, or applications. Some regulatory frameworks and contracts specify minimum frequencies." },
      { question: "What is the difference between vulnerability scanning and penetration testing?", answer: "Vulnerability scanning is an automated process that identifies known weaknesses. Penetration testing involves a human tester actively attempting to exploit vulnerabilities to determine real-world impact. Both serve different purposes." },
      { question: "Will testing disrupt live systems?", answer: "LSC scopes all technical assessments carefully to minimise disruption. Testing approaches are agreed with your team before commencement, and out-of-hours testing can be arranged where live system availability is critical." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/cta-section-6.jpg",
      heading: "Who this is for",
      paragraphs: [
        "Technical security services are designed for organisations seeking independent verification of their security controls, those preparing for certification assessments where technical evidence is required, organisations with complex or hybrid IT environments including cloud deployments, and leadership teams that require evidence-based visibility into technical risk.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "certification-and-compliance",
      "operational-technology-specialist-security",
      "cyber-risk-and-resilience",
    ],
  },

  "defence-and-government-cyber-assurance": {
    slug: "defence-and-government-cyber-assurance",
    icon: "/images/InnerPages/cyber-security/encrypted.svg",
    image: "/images/InnerPages/cyber-security/Defence_&_Government_Cyber_Assurance.jpg",
    title: "Defence & Government Cyber Assurance",
    tagline: "Specialist support for high-security environments.",
    description:
      "Defence & Government Cyber Assurance",
    heroContent: [
      "Organisations operating within defence and government environments do not have the option of treating cyber security as a discretionary investment. Contract eligibility, programme security, and supply chain integrity depend on demonstrable compliance with strict frameworks. The consequence of falling short is not simply regulatory censure - it is loss of contract access, programme delays, and supply chain exclusion.",
      "London Strategy Centre provides specialist cyber assurance services for organisations navigating the security requirements of defence and government environments. Support extends from Secure by Design implementation through to supply chain risk assessment and programme-level cyber governance.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC supports defence contractors and government suppliers in meeting MOD security requirements, NCSC frameworks, and public sector cyber assurance standards. This includes supply chain security reviews, security policy alignment, and structured support for maintaining contract eligibility under evolving security obligations.",
      },
      {
        heading: "The Supply Chain Dimension",
        content:
          "Security in defence and government is not limited to prime contractors. The entire supply chain is subject to scrutiny. LSC helps organisations at every tier of the supply chain understand and meet their security obligations — protecting both the contract relationship and the broader security ecosystem.",
      },
      {
        heading: "Who This Is For",
        content:
          "Defence contractors and sub-contractors with MOD security requirements. Government suppliers navigating NCSC and public sector frameworks. Organisations bidding for government contracts that carry security obligations.",
      },
    ],
    practiceAreas: {
      heading: "Four dimensions of defence cyber assurance",
      subheading: "LSC's defence and government cyber assurance services address the requirements that matter most for organisations operating in regulated public sector environments.",
     features: [
  {
    id: 1,
    icon: "/images/InnerPages/cyber-security/secure-by-plan.svg",
    title: "Secure by Design Implementation",
    description: "Ensures security is integrated into systems during development rather than added retrospectively. Requires defining security requirements at the architecture stage, using threat models to inform design decisions, and generating security evidence as the system is built. Supports making Secure by Design a practical reality.",
    slug: "defence-and-government-cyber-assurance"
  },
  {
    id: 2,
    icon: "/images/InnerPages/cyber-security/Defence_Supplier_Cyber_Compliance.svg",
    title: "Defence Supplier Cyber Compliance",
    description: "Assesses existing controls, identifies gaps, and provides structured guidance to align organisational practices with defence security requirements. Offers a clear pathway to demonstrable compliance, including evidence packages for contracting authority review.",
    slug: "defence-and-government-cyber-assurance"
  },
  {
    id: 3,
    icon: "/images/InnerPages/cyber-security/defence_supply.svg",
    title: "Defence Supply Chain Cyber Risk Assessments",
    description: "Evaluates cyber risks associated with suppliers and partners across the defence supply chain. Identifies vulnerabilities such as third-party access, data handling practices, and configuration management, providing prioritised recommendations to reduce risk.",
    slug: "defence-and-government-cyber-assurance"
  },
  {
    id: 4,
    icon: "/images/InnerPages/cyber-security/defence_programme.svg",
    title: "Defence Programme Cyber Governance",
    description: "Ensures security oversight is embedded within programme structures. Defines accountability for cyber risk, establishes assurance processes aligned with milestones, and integrates cyber risk management into overall programme governance.",
    slug: "defence-and-government-cyber-assurance"
  }
],
 heading_bottom: "Security assurance as a condition of trust",
      subheading_bottom: "In defence and government environments, security compliance is the foundation of trust between contracting authorities, prime contractors, and the supply chain. Organisations that can demonstrate structured, evidenced security practices - through Secure by Design documentation, supplier compliance evidence, and programme governance records - maintain their position within these environments. Those that cannot, lose it. LSC's approach is designed to produce this evidence as a natural output of improved security practice - not as a documentation exercise disconnected from operational reality."
    },
    cta: {
      heading: "Defence cyber requirements are structural, not optional",
      paragraphs: [
        "The security frameworks governing defence and government contracts - from MOD Cyber Security Model to NCSC guidance and Secure by Design principles - exist because the threat environment demands them. Adversaries target supply chains precisely because suppliers often represent the weakest link in an otherwise defended environment.",
        "Compliance with these frameworks is a condition of participation, not a mark of distinction. Organisations that treat compliance as a periodic exercise rather than an embedded operational practice face a compounding risk: each assessment cycle exposes gaps that should have been closed, eroding confidence among contracting authorities and prime contractors",
      ],
      image: "/images/InnerPages/cyber-security/Defence_cyber_requirements.jpg",
    },
    faqs: [
      { question: "Does LSC hold the necessary security clearances for defence work?", answer: "LSC supports compliance with the Defence Cyber Protection Partnership (DCPP) requirements, Cyber Essentials mandates for defence suppliers, and MOD security policy frameworks across classified and unclassified environments." },
      { question: "Can LSC support organisations preparing for their first defence contract?", answer: "Yes. LSC works across the full supply chain — from prime contractors to tier-2 and tier-3 suppliers — helping organisations at every level understand and meet their security obligations." },
      { question: "How does Secure by Design differ from standard security testing?", answer: "LSC can provide urgent remediation support to address compliance gaps and restore certification status. Prevention is preferable — ongoing monitoring support is available to avoid this situation." },
      { question: "What frameworks does LSC support for defence cyber compliance?", answer: "LSC supports compliance with the Defence Cyber Protection Partnership (DCPP) requirements, Cyber Essentials mandates for defence suppliers, and MOD security policy frameworks across classified and unclassified environments." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/cta-section-7.jpg",
      heading: "Who this is for",
      paragraphs: [
        "These services are designed for defence contractors and suppliers maintaining or seeking MOD contract eligibility, organisations within the defence supply chain required to demonstrate cyber compliance to prime contractors, government bodies and agencies implementing Secure by Design principles, and programme teams requiring integrated cyber governance within defence programme structures.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "certification-and-compliance",
      "cyber-strategy-and-governance-advisory",
      "specialist-programme-support",
    ],
  },

  "cyber-risk-and-architecture-advisory": {
    slug: "cyber-risk-and-architecture-advisory",
    icon: "/images/InnerPages/cyber-security/chess_pawn.svg",
    image: "/images/InnerPages/cyber-security/cyber-risk_advisory.jpg",
    title: "Cyber Risk & Architecture Advisory",
    tagline: "Security considered from the outset, not retrofitted.",
    description:
      "Cyber Risk & Architecture Advisory",
    heroContent: [
      "Security retrofitted into a system after design is more expensive, less effective, and more likely to fail than security integrated from the outset. Yet this remains the default pattern: systems are designed for functionality, tested for security later, and then hardened against threats that should have been addressed in the architecture.",
      "London Strategy Centre's cyber risk and architecture advisory services ensure that security is considered throughout the design and operation of digital systems - not appended as a final review.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC provides architecture-level security advisory that integrates threat modelling, secure design principles, and risk management into the system development lifecycle. This includes secure architecture reviews, threat and risk assessments (TRAs), and advisory support for major system procurement and transformation programmes.",
      },
      {
        heading: "Why Architecture Matters",
        content:
          "Security weaknesses are significantly cheaper to address at the design stage than after a system has been built and deployed. LSC helps organisations and programme teams build security requirements into architecture decisions — reducing rework, reducing risk, and improving assurance outcomes.",
      },
      {
        heading: "Who This Is For",
        content:
          "Programme and project teams designing new systems or undergoing significant digital transformation. Organisations conducting major procurements where security requirements need to be defined and assessed. Technology and engineering teams that need structured security input at design stage.",
      },
    ],
    practiceAreas: {
      heading: "Five advisory disciplines for secure system design",
      subheading: "LSC's cyber risk and architecture advisory services address security at the design stage and maintain assurance as systems evolve.",
      features: [
  {
    id: 1,
    icon: "/images/InnerPages/cyber-security/cyber_risk_assessment.svg",
    title: "Cyber Risk Assessment and Threat Modelling",
    description: "Analyses potential attack scenarios to identify how systems could be compromised. Threat models are built against system architecture, data flows, and operational context to identify realistic attack paths and inform design decisions that reduce exposure.",
    slug: "cyber-risk-and-architecture-advisory"
  },
  {
    id: 2,
    icon: "/images/InnerPages/cyber-security/secure.svg",
    title: "Secure Architecture Reviews",
    description: "Examines system designs to ensure appropriate security controls are implemented at every layer including network, application, data, and identity. Identifies structural weaknesses before they are built into production systems.",
    slug: "cyber-risk-and-architecture-advisory"
  },
  {
    id: 3,
    icon: "/images/InnerPages/cyber-security/cyber_risk_register.svg",
    title: "Cyber Risk Registers and Risk Treatment",
    description: "Provides a structured approach to documenting, prioritising, and managing cyber risks. Each risk is mapped to treatment options, owners, and timelines to support governance, accountability, and decision-making.",
    slug: "cyber-risk-and-architecture-advisory"
  },
  {
    id: 4,
    icon: "/images/InnerPages/cyber-security/Security_Design_Authority.svg",
    title: "Security Design Authority",
    description: "Provides independent oversight of security decisions across programmes and platforms. Ensures architecture decisions are consistent, proportionate, and aligned with organisational risk appetite, especially in complex delivery environments.",
    slug: "cyber-risk-and-architecture-advisory"
  },
  {
    id: 5,
    icon: "/images/InnerPages/cyber-security/digital_platform.svg",
    title: "Digital Platform Cyber Assurance",
    description: "Supports ongoing security of connected systems and platforms as they evolve. Includes governance, controls, and assurance reviews to maintain effectiveness, along with structured recovery processes aligned to business priorities after incidents.",
    slug: "cyber-risk-and-architecture-advisory"
  }
],
 heading_bottom: "Designing security in is a decision about cost, risk, and capability",
      subheading_bottom: "The argument for integrating security into architecture is not ideological. It is economic and operational. Addressing a vulnerability at the design stage costs a fraction of addressing it after deployment. Architectures designed with security in mind require fewer compensatory controls, are easier to maintain, and produce better evidence for compliance and assurance purposes. Organisations building new platforms, migrating to cloud environments, or integrating connected systems face these design decisions now. The choices made at the architecture stage determine the cost and effectiveness of security for the lifetime of the system."
    },
    cta: {
      heading: "Retrofitted security creates structural weakness",
      paragraphs: [
        "When security is treated as a testing phase rather than a design principle, the resulting controls are compensatory. They mitigate threats at the surface without addressing architectural vulnerabilities that cannot be easily resolved after deployment. Network segmentation added late, access controls bolted onto an architecture that was not designed for them, encryption layered over data flows that were not mapped - these are symptoms of an approach that treats security as an afterthought. The cost is measurable: in rework, in residual risk, in the ongoing complexity of maintaining controls that the architecture was never designed to support.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section-8.jpg",
    },
    faqs: [
      { question: "At what stage of a project should security architecture input begin?", answer: "As early as possible. Security requirements are significantly cheaper to address at the design stage than after a system is built. LSC recommends engaging security advisory during the concept and requirements phase, before architecture decisions are made." },
      { question: "What is a threat and risk assessment (TRA)?", answer: "A TRA is a formal analysis of the threats to a system, the likelihood of those threats materialising, and the potential impact. TRAs are typically required at governance gates in defence and government programmes." },
      { question: "Can LSC review an existing architecture for security weaknesses?", answer: "Yes. LSC conducts independent secure architecture reviews of existing system designs, identifying security weaknesses and providing structured recommendations for improvement." },
      { question: "Does LSC provide threat modelling for software development teams?", answer: "Yes. LSC delivers threat modelling workshops and structured threat analysis for software development teams, integrating with agile and DevSecOps environments." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/cta-section-9.jpg",
      heading: "Security That Starts at Design",
      paragraphs: [
        "Addressing security weaknesses after a system is built is significantly more expensive than designing them out at the architecture stage — in time, cost, and residual risk. Organisations that engage security advisory early consistently achieve better outcomes at lower cost.",
        "LSC provides architecture-level security input that integrates with programme teams from the outset, ensuring security requirements are defined and assessed before design decisions become constraints.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "technical-security-services",
      "cyber-strategy-and-governance-advisory",
      "specialist-programme-support",
    ],
  },

  "operational-technology-specialist-security": {
    slug: "operational-technology-specialist-security",
    icon: "/images/InnerPages/cyber-security/reviews.svg",
    image: "/images/InnerPages/cyber-security/operational_technology.jpg",
    title: "Operational Technology & Specialist Security Reviews",
    tagline: "Security for the systems that run the physical world.",
    description:
      "Security assessments for operational, industrial, and specialised systems - including point-of-sale environments, industrial control systems, and connected IoT platforms.",
    heroContent: [
      "Operational technology environments present security challenges that standard IT frameworks do not address. Legacy systems with long replacement cycles, limited patching capability, and high availability requirements demand an approach that is operationally aware — and proportionate to an environment where downtime has physical and commercial consequences.",
      "LSC's OT and specialist security reviews are designed to work within these constraints. Assessments identify real security exposure without disrupting the systems that keep operations running, and produce findings that can be acted on within operational realities.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC delivers security reviews for operational technology (OT) environments, industrial control systems (ICS), SCADA platforms, point-of-sale environments, and connected IoT infrastructure. These assessments address the specific security characteristics and constraints of OT environments, where standard IT security approaches do not always apply.",
      },
      {
        heading: "The OT Security Challenge",
        content:
          "Operational technology environments often run legacy systems with long replacement cycles, limited patching capability, and high availability requirements. Security must be applied in ways that do not disrupt operations. LSC understands these constraints and delivers assessments that are practical, proportionate, and operationally aware.",
      },
      {
        heading: "Who This Is For",
        content:
          "Organisations operating industrial control systems, SCADA, or connected OT infrastructure. Retailers and hospitality businesses with point-of-sale security requirements. Organisations integrating IoT devices into operational or commercial environments.",
      },
    ],
    practiceAreas: {
      heading: "Four specialist security disciplines",
      subheading: "LSC's operational technology and specialist security reviews are structured to address the specific challenges of non-standard technology environments.",
      features: [
  {
    id: 1,
    icon: "/images/InnerPages/cyber-security/point_of_sale.svg",
    title: "Point-of-Sale Security Hardening",
    description: "Retail payment environments are frequent targets for cyber attacks due to high volumes of financial data. Security reviews assess configurations, network segmentation, access controls, and monitoring to identify weaknesses and strengthen protection, aligned with PCI DSS requirements.",
    slug: "operational-technology-specialist-security"
  },
  {
    id: 2,
    icon: "/images/InnerPages/cyber-security/industrial.svg",
    title: "Industrial & Operational Technology Security",
    description: "Assessments of industrial control systems, SCADA environments, and manufacturing networks to ensure strong security controls. Covers network architecture, remote access, IT/OT segmentation, and legacy protocol risks, with prioritised recommendations aligned to operational constraints.",
    slug: "operational-technology-specialist-security"
  },
  {
    id: 3,
    icon: "/images/InnerPages/cyber-security/connected_platforms.svg",
    title: "Connected Platform Risk Assessments",
    description: "Evaluates risks across connected systems and IoT platforms that expand attack surfaces. Identifies vulnerabilities in devices, communication protocols, and integrated systems, assessing how security posture impacts the wider organisation.",
    slug: "operational-technology-specialist-security"
  },
  {
    id: 4,
    icon: "/images/InnerPages/cyber-security/secure_system.svg",
    title: "Secure System Configuration",
    description: "Ensures enterprise systems are securely configured to reduce risks from default settings, unused services, and excessive permissions. Provides baseline configurations aligned with best practices to improve resilience across IT and OT environments.",
    slug: "operational-technology-specialist-security"
  }
],
 heading_bottom: "Assessments designed for operational reality",
      subheading_bottom: "Every assessment LSC delivers in operational technology environments is designed with operational continuity as a primary constraint. Testing approaches are non-disruptive. Recommendations account for patching limitations, legacy system dependencies, and safety requirements. The aim is to strengthen security within the operational reality of the environment - not to impose controls that conflict with it."
    },
    cta: {
      heading: "OT security requires a different approach",
      paragraphs: [
        "Standard IT security frameworks do not translate cleanly to operational technology environments. Legacy systems, high availability requirements, and limited patching windows demand assessments that are proportionate and operationally aware.",
        "LSC delivers OT security reviews that work within the constraints of industrial and operational environments — producing actionable findings without disrupting the systems that keep operations running.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section-10.jpg",
    },
    faqs: [
      { question: "Can OT systems be assessed without disrupting operations?", answer: "Yes. LSC scopes all OT assessments carefully to work within operational constraints. Passive assessment techniques are used where active testing would carry operational risk, and out-of-hours windows can be arranged." },
      { question: "What OT environments does LSC assess?", answer: "LSC assesses industrial control systems (ICS), SCADA platforms, distributed control systems (DCS), point-of-sale environments, building management systems, and connected IoT infrastructure." },
      { question: "How does OT security differ from IT security?", answer: "OT environments prioritise availability and safety over confidentiality — the opposite of most IT environments. Legacy systems with limited patching capability, long replacement cycles, and safety-critical functions require a fundamentally different security approach." },
      { question: "Does LSC support OT compliance frameworks?", answer: "Yes. LSC can align OT security assessments with IEC 62443, NIST SP 800-82, and sector-specific frameworks including those applicable to critical national infrastructure." },
    ],
    partner: {
      image: "/images/InnerPages/cyber-security/cta-section-11.jpg",
      heading: "Proportionate Security for Operational Environments",
      paragraphs: [
        "OT environments present security challenges that standard IT frameworks do not address. Legacy systems with long replacement cycles, limited patching windows, and high availability requirements demand an approach that is operationally aware and proportionate to the environment.",
        "LSC's OT security assessments are designed to work within these constraints — producing actionable findings without disrupting the systems that keep operations running.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "technical-security-services",
      "cyber-risk-and-resilience",
      "cyber-risk-and-architecture-advisory",
    ],
  },

  "cyber-strategy-and-governance-advisory": {
    slug: "cyber-strategy-and-governance-advisory",
    icon: "/images/InnerPages/cyber-security/mitre.svg",
    image: "/images/InnerPages/cyberexcellence/Main-Slider.jpg",
    title: "Cyber Strategy & Governance Advisory",
    tagline: "Elevate cyber security from operational to strategic.",
    description:
      "Advisory services that help leadership teams build strong cyber governance, develop security strategies, improve maturity, and manage cyber risk at organisational and board level. Includes Virtual CISO services.",
    heroContent: [
      "The most common cause of significant security failure is not a missing technical control — it is a governance structure that did not catch the problem early enough. Organisations that treat cyber security as an IT function rather than a strategic risk consistently underinvest, underreact, and under-govern.",
      "LSC's strategy and governance advisory helps leadership teams build the structures, disciplines, and board-level visibility needed to manage cyber risk as a business risk — moving security from a cost centre to a strategic capability that supports organisational resilience.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC provides strategic cyber advisory at the organisational and board level. This includes cyber strategy development, security maturity assessments, board-level reporting and governance frameworks, and Virtual CISO (vCISO) services for organisations that require senior security leadership without the cost of a full-time hire.",
      },
      {
        heading: "Governance as a Security Control",
        content:
          "The most common cause of security failure is not technical — it is governance. Organisations that treat cyber security as an IT function rather than a strategic risk consistently underinvest, underreact, and under-govern. LSC helps leadership teams build the structures and disciplines needed to manage cyber risk as a business risk.",
      },
      {
        heading: "Who This Is For",
        content:
          "Leadership teams and boards that want to understand and own their cyber risk rather than delegate it entirely to IT. Organisations without a dedicated CISO who need strategic security leadership. Enterprises seeking to improve their security maturity score against a recognised framework.",
      },
    ],
    practiceAreas: {
      heading: "What We Cover",
      subheading: "LSC's governance and strategy advisory helps leadership teams build the structures needed to manage cyber risk as a strategic business concern.",
      features: [
        { id: 1, icon: "/images/InnerPages/cyber-security/mitre.svg", title: "Cyber Strategy Development", description: "Development of a cyber security strategy aligned to business objectives, risk appetite, and regulatory obligations.", slug: "cyber-strategy-and-governance-advisory" },
        { id: 2, icon: "/images/InnerPages/cyber-security/verified_user.svg", title: "Security Maturity Assessment", description: "Assessment of current security maturity against a recognised framework with a structured improvement roadmap.", slug: "cyber-strategy-and-governance-advisory" },
        { id: 3, icon: "/images/InnerPages/cyber-security/support.svg", title: "Virtual CISO Services", description: "Senior security leadership provided on a fractional basis for organisations without a full-time CISO.", slug: "cyber-strategy-and-governance-advisory" },
        { id: 4, icon: "/images/InnerPages/cyber-security/chess_pawn.svg", title: "Board-Level Reporting", description: "Governance frameworks and reporting structures that give boards meaningful visibility of cyber risk.", slug: "cyber-strategy-and-governance-advisory" },
        { id: 5, icon: "/images/InnerPages/cyber-security/encrypted.svg", title: "Cyber Risk Governance", description: "Embedding cyber risk management into organisational governance structures and decision-making processes.", slug: "cyber-strategy-and-governance-advisory" },
      ],
    },
    cta: {
      heading: "Governance is the security control most organisations overlook",
      paragraphs: [
        "Technical controls fail when they are not governed. The most common cause of significant security incidents is not a missing tool — it is a governance structure that did not catch the problem early enough.",
        "LSC helps leadership teams build the structures, disciplines, and board-level awareness needed to manage cyber risk as a strategic business risk — not an IT cost centre.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section.jpg",
    },
    faqs: [
      { question: "What does a Virtual CISO do?", answer: "A Virtual CISO provides strategic security leadership on a fractional basis — owning the security strategy, advising the board, managing key security relationships, and providing governance oversight without the cost of a full-time hire." },
      { question: "How do we measure our current cyber security maturity?", answer: "LSC conducts maturity assessments against recognised frameworks including NIST CSF, CIS Controls, and ISO 27001. The output is a structured maturity score with a prioritised improvement roadmap." },
      { question: "How should cyber risk be reported to the board?", answer: "Boards need security information expressed in business risk terms — not technical detail. LSC designs governance frameworks and reporting structures that give boards meaningful visibility of cyber risk without requiring technical expertise." },
      { question: "How often should a cyber security strategy be reviewed?", answer: "At minimum annually, and following significant changes to the threat landscape, regulatory environment, or organisational structure. LSC recommends integrating security strategy review into the annual business planning cycle." },
    ],
    partner: {
      image: "/images/InnerPages/cyberexcellence/lsc-banner.jpg",
      heading: "Cyber Risk as a Board-Level Concern",
      paragraphs: [
        "The organisations that manage cyber risk most effectively are those where the board understands and owns it — not those with the most sophisticated technical controls. Governance structures determine whether security investment is sustained, proportionate, and aligned to business risk.",
        "LSC helps leadership teams build the frameworks, reporting structures, and disciplines needed to exercise genuine governance over cyber risk — moving security from an IT cost centre to a strategic business capability.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "cyber-risk-and-resilience",
      "defence-and-government-cyber-assurance",
      "specialist-programme-support",
    ],
  },

  "specialist-programme-support": {
    slug: "specialist-programme-support",
    icon: "/images/InnerPages/cyber-security/support.svg",
    image: "/images/InnerPages/cyberexcellence/Main-Slider.jpg",
    title: "Specialist Programme Support",
    tagline: "Cyber expertise embedded where it is needed most.",
    description:
      "Cyber security expertise embedded within major programmes, digital transformations, and acquisitions - defining requirements, integrating security into system design, and providing assurance documentation.",
    heroContent: [
      "Large programmes consistently underestimate their security requirements and the governance overhead they generate. Security brought in late becomes a bottleneck at assurance gates — expensive to address, disruptive to timelines, and often inadequate because the design decisions have already been made.",
      "LSC embeds experienced programme security specialists within major programmes from the outset — contributing to requirements definition, architecture decisions, and assurance documentation throughout the delivery lifecycle rather than at the end of it.",
    ],
    sections: [
      {
        heading: "What This Service Covers",
        content:
          "LSC provides specialist cyber security expertise embedded within major programmes. This includes defining security requirements, conducting security assurance reviews, providing independent technical authority input, and producing assurance documentation for programme milestones and governance gates.",
      },
      {
        heading: "Security in Complex Programmes",
        content:
          "Large programmes — digital transformations, system acquisitions, infrastructure upgrades — consistently underestimate the security requirements and the governance overhead they generate. LSC provides experienced programme security specialists who understand both the technical and governance dimensions of complex delivery environments.",
      },
      {
        heading: "Who This Is For",
        content:
          "Programme directors and delivery teams on major digital, infrastructure, or transformation programmes. Organisations undergoing mergers, acquisitions, or significant technology change. Government and defence organisations with complex assurance and accreditation requirements.",
      },
    ],
    practiceAreas: {
      heading: "What We Cover",
      subheading: "LSC provides specialist security expertise embedded within major programmes — from requirements definition through to assurance documentation at governance gates.",
      features: [
        { id: 1, icon: "/images/InnerPages/cyber-security/support.svg", title: "Security Requirements Definition", description: "Defining security requirements for major programmes before design decisions lock in cost and complexity.", slug: "specialist-programme-support" },
        { id: 2, icon: "/images/InnerPages/cyber-security/chess_pawn.svg", title: "Security Assurance Reviews", description: "Independent security assurance reviews at programme milestones and governance gates.", slug: "specialist-programme-support" },
        { id: 3, icon: "/images/InnerPages/cyber-security/mitre.svg", title: "Technical Authority Input", description: "Independent technical authority input to major system design and procurement decisions.", slug: "specialist-programme-support" },
        { id: 4, icon: "/images/InnerPages/cyber-security/verified_user.svg", title: "Assurance Documentation", description: "Production of security assurance documentation for programme milestones, audits, and accreditation.", slug: "specialist-programme-support" },
        { id: 5, icon: "/images/InnerPages/cyber-security/encrypted.svg", title: "M&A Security Due Diligence", description: "Cyber security due diligence for mergers, acquisitions, and major technology change programmes.", slug: "specialist-programme-support" },
        { id: 6, icon: "/images/InnerPages/cyber-security/license.svg", title: "Accreditation Support", description: "Structured support for organisations navigating complex security accreditation processes.", slug: "specialist-programme-support" },
      ],
    },
    cta: {
      heading: "Programmes that ignore security at the outset pay for it later",
      paragraphs: [
        "Security requirements defined late in a programme are invariably more expensive, more disruptive, and less effective than those embedded from the start. The same applies to assurance documentation produced under pressure at governance gates.",
        "LSC provides experienced programme security specialists who integrate with delivery teams from the outset — defining requirements, supporting design decisions, and producing assurance documentation that reflects the programme's actual security state.",
      ],
      image: "/images/InnerPages/cyber-security/cta-section.jpg",
    },
    faqs: [
      { question: "When should security expertise be embedded in a programme?", answer: "From the outset. Security requirements defined late in a programme are more expensive, more disruptive, and less effective. LSC recommends integrating security input during the requirements and design phases." },
      { question: "Can LSC provide an independent technical authority?", answer: "Yes. LSC provides independent technical authority input to major system design and procurement decisions — providing assurance that security requirements are proportionate, implementable, and aligned to the programme's risk profile." },
      { question: "What assurance documentation does LSC produce?", answer: "LSC produces security assurance cases, risk management frameworks, statement of applicable controls, security aspects letters, and accreditation documentation for government and defence programmes." },
      { question: "Can LSC support M&A security due diligence?", answer: "Yes. LSC conducts cyber security due diligence for mergers and acquisitions, identifying security risks in target organisations and providing structured findings that inform deal terms and post-merger remediation planning." },
    ],
    partner: {
      image: "/images/InnerPages/cyberexcellence/uni-birmingham.jpg",
      heading: "Embedded Security Expertise",
      paragraphs: [
        "Specialist programme security support is most effective when it is embedded from the outset — not brought in to fix problems that have already been designed in. LSC provides experienced programme security specialists who integrate with delivery teams, contributing to architecture decisions, requirements definition, and assurance documentation throughout the programme lifecycle.",
        "This model ensures that security is a continuous contribution to programme delivery, not a gate at the end of the process.",
      ],
      logo: null,
      logoAlt: null,
    },
    relatedServices: [
      "defence-and-government-cyber-assurance",
      "cyber-risk-and-architecture-advisory",
      "cyber-strategy-and-governance-advisory",
    ],
  },
};
