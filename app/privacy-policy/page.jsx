import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const sections = [
  {
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
    heading: "Sharing of Information",
    paragraphs: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with third-party service providers who assist us with the operation of the Website and the provision of our services. We require these service providers to keep your information confidential and to use it only for the purposes of providing their services to us.",
      "We may also share your information with third parties if we believe in good faith that such sharing is necessary to comply with legal obligations, protect our rights or property, or prevent fraud or illegal activities.",
    ],
  },
  {
    heading: "Security of Information",
    paragraphs: [
      "We are committed to ensuring that your information is secure. We use reasonable physical, technical, and administrative measures to protect your information from unauthorised access, disclosure, alteration, and destruction.",
      "However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.",
    ],
  },
  {
    heading: "Links to Other Websites",
    paragraphs: [
      "The Website may contain links to other websites that are not owned or controlled by us. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any website you visit.",
    ],
  },
  {
    heading: "Changes to Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time by posting a new version on the Website. You should check this page occasionally to ensure you are happy with any changes. Your continued use of the Website after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.",
    ],
  },
  {
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
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-20">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Thank you for visiting{" "}
            <a href="https://www.londonstrategycentre.com" className="text-[#0E2253] hover:underline">
              www.londonstrategycentre.com
            </a>{" "}
            (the "Website"). This Privacy Policy sets out how we collect, use, and protect any personal information that you provide to us when you use the Website. We are committed to ensuring that your privacy is protected. If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@londonstrategycentre.com" className="text-[#0E2253] hover:underline">
              info@londonstrategycentre.com
            </a>
            .
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12" />

        {/* Sections */}
        <div className="max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet, k) => (
                    <li key={k} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
