import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const sections = [
  {
    id: "information-we-collect",
    icon: "📥",
    heading: "Information We Collect",
    paragraphs: [
      "We may collect the following information from you when you use the Website:",
    ],
    bullets: [
      "Personal information, such as your name, email address, and phone number, that you provide to us when you sign up for our newsletter or submit a form on the Website.",
      "Technical information, such as your IP address and browser information, that we collect automatically when you use the Website.",
      "Usage information, such as the pages you visit and the actions you take, that we collect automatically when you use the Website.",
    ],
  },
  {
    id: "use-of-information",
    icon: "⚙️",
    heading: "Use of Information",
    paragraphs: ["We use the information we collect from you to:"],
    bullets: [
      "Respond to your inquiries and provide customer support.",
      "Send you marketing communications, such as newsletters and promotional emails, that we think may be of interest to you.",
      "Improve the Website and personalise your experience.",
      "Comply with legal obligations and resolve disputes.",
    ],
  },
  {
    id: "sharing-of-information",
    icon: "🤝",
    heading: "Sharing of Information",
    paragraphs: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with third-party service providers who assist us with the operation of the Website and the provision of our services. We require these service providers to keep your information confidential and to use it only for the purposes of providing their services to us.",
      "We may also share your information with third parties if we believe in good faith that such sharing is necessary to comply with legal obligations, protect our rights or property, or prevent fraud or illegal activities.",
    ],
  },
  {
    id: "security-of-information",
    icon: "🔒",
    heading: "Security of Information",
    paragraphs: [
      "We are committed to ensuring that your information is secure. We use reasonable physical, technical, and administrative measures to protect your information from unauthorised access, disclosure, alteration, and destruction.",
      "However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.",
    ],
  },
  {
    id: "links-to-other-websites",
    icon: "🔗",
    heading: "Links to Other Websites",
    paragraphs: [
      "The Website may contain links to other websites that are not owned or controlled by us. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any website you visit.",
    ],
  },
  {
    id: "changes-to-privacy-policy",
    icon: "📝",
    heading: "Changes to Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time by posting a new version on the Website. You should check this page occasionally to ensure you are happy with any changes. Your continued use of the Website after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.",
    ],
  },
  {
    id: "contact-us",
    icon: "✉️",
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, please contact us at info@londonstrategycentre.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-[#0E2253] pt-36 pb-16 sm:pb-20">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            Thank you for visiting{" "}
            <a href="https://www.londonstrategycentre.com" className="text-white hover:underline">
              www.londonstrategycentre.com
            </a>
            . This Privacy Policy sets out how we collect, use, and protect any personal information that you provide to us when you use the Website. We are committed to ensuring that your privacy is protected.
          </p>
        </div>
      </div>

      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Sticky Sidebar */}
          <aside className="lg:w-64 lg:shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#0E2253] hover:bg-[#F1EEEA] transition-all duration-200 group"
                  >
                    <span className="text-base">{s.icon}</span>
                    <span className="group-hover:font-medium transition-all">{s.heading}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-[#F1EEEA] rounded-xl">
                <p className="text-xs font-semibold text-gray-700 mb-2">Questions?</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">Contact our team for any privacy enquiries.</p>
                <a
                  href="mailto:info@londonstrategycentre.com"
                  className="text-xs font-semibold text-[#0E2253] hover:underline"
                >
                  info@londonstrategycentre.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Section Header */}
                <div className="bg-linear-to-r from-[#F1EEEA] to-white px-6 sm:px-8 py-5 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E2253]/10 flex items-center justify-center text-xl shrink-0">
                      {section.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#0E2253] bg-[#0E2253]/10 px-2 py-0.5 rounded-full">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {section.heading}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Section Body */}
                <div className="px-6 sm:px-8 py-6">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((bullet, k) => (
                        <li key={k} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E2253]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
