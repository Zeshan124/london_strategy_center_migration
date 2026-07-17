import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";

const sections = [
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    updated: "Last updated: 26 April 2023",
    icon: "🍪",
    content: [
      { type: "paragraph", text: "This Cookie Policy explains how London Strategy Centre (\"we\", \"us\", \"our\") uses cookies and similar technologies when you visit our website www.londonstrategycentre.com (\"Website\"). By using our Website, you consent to the use of cookies in accordance with this Cookie Policy." },
      { type: "heading", text: "What are cookies?" },
      { type: "paragraph", text: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the website. Cookies are used for various purposes, such as to remember your preferences, to understand how you interact with the website, to provide personalized content, and to analyze and improve website performance." },
      { type: "heading", text: "What cookies do we use?" },
      { type: "paragraph", text: "We use both session cookies and persistent cookies on our Website. Session cookies are temporary cookies that are erased when you close your browser, while persistent cookies remain on your device until they expire or are deleted." },
      { type: "paragraph", text: "We use the following categories of cookies on our Website:" },
      { type: "bullets", items: [
        "Strictly necessary cookies: These cookies are essential for the operation of our Website and enable you to navigate the site and use its features.",
        "Functional cookies: These cookies allow our Website to remember your preferences, such as your language or region, and provide enhanced features and personalized content.",
        "Analytics cookies: These cookies collect information about how visitors use our Website, such as which pages are visited most frequently and whether visitors receive error messages from web pages.",
        "Advertising cookies: These cookies are used to deliver relevant advertisements to you based on your interests, as well as to limit the number of times you see an advertisement.",
      ]},
      { type: "paragraph", text: "We also use third-party cookies on our Website. These cookies are placed by third-party providers that we work with to provide various services, such as website analytics, advertising, and social media integration." },
      { type: "heading", text: "How to manage cookies?" },
      { type: "paragraph", text: "Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. You can also delete cookies that have already been placed on your device. However, if you block or delete cookies, some features of our Website may not function properly." },
      { type: "heading", text: "Changes to this Cookie Policy" },
      { type: "paragraph", text: "We may update this Cookie Policy from time to time to reflect changes in our use of cookies and other similar technologies. We will post any changes on our Website with the new effective date of the policy." },
      { type: "heading", text: "Contact Us" },
      { type: "paragraph", text: "If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at info@londonstrategycentre.com." },
    ],
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    updated: "Last updated: 26 April 2023",
    icon: "📋",
    content: [
      { type: "paragraph", text: "Please read these Terms of Use (\"Terms\") carefully before using our website www.londonstrategycentre.com (\"Website\"). By using our Website, you agree to be bound by these Terms, which constitute a legally binding agreement between you and London Strategy Centre (\"we\", \"us\", \"our\")." },
      { type: "heading", text: "Use of Website" },
      { type: "paragraph", text: "You may use our Website only for lawful purposes and in accordance with these Terms. You agree not to use our Website:" },
      { type: "bullets", items: [
        "In any way that violates any applicable federal, state, local, or international law or regulation.",
        "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.",
        "To transmit any advertising or promotional material, including \"junk mail\", \"chain letter\", \"spam\", or any other similar solicitation.",
        "To impersonate or attempt to impersonate London Strategy Centre, a London Strategy Centre employee, another user, or any other person or entity.",
        "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website.",
      ]},
      { type: "heading", text: "Intellectual Property Rights" },
      { type: "paragraph", text: "The content on our Website, including text, graphics, images, logos, and software, is owned or licensed by London Strategy Centre and is protected by copyright, trademark, patent, and other intellectual property laws. You may not reproduce, modify, distribute, or otherwise use any content on our Website without our prior written consent." },
      { type: "heading", text: "Disclaimer of Warranties" },
      { type: "paragraph", text: "We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose." },
      { type: "heading", text: "Limitation of Liability" },
      { type: "paragraph", text: "In no event shall London Strategy Centre, its affiliates, or their respective officers, directors, employees, agents, licensors, or service providers be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use or inability to use the Website." },
      { type: "heading", text: "Governing Law and Jurisdiction" },
      { type: "paragraph", text: "These Terms shall be governed by and construed in accordance with the laws of England and Wales. You agree that any action arising out of or relating to these Terms shall be filed only in the courts located in England and Wales." },
      { type: "heading", text: "Contact Us" },
      { type: "paragraph", text: "If you have any questions or concerns about these Terms or our Website, please contact us at info@londonstrategycentre.com." },
    ],
  },
  {
    id: "anti-spam-policy",
    title: "Anti-Spam Policy",
    updated: "Last updated: 26 April 2023",
    icon: "🛡️",
    content: [
      { type: "paragraph", text: "London Strategy Centre is committed to providing a safe and enjoyable experience for all users of our Website. We do not tolerate spam or unsolicited commercial email and have established this Anti-Spam Policy to set forth our commitment to this issue." },
      { type: "heading", text: "Definition of Spam" },
      { type: "paragraph", text: "We consider spam to be any unsolicited commercial email or message sent to a person or organization without prior consent. This includes, but is not limited to:" },
      { type: "bullets", items: [
        "Messages promoting a product or service that the recipient has not requested or agreed to receive.",
        "Messages containing false or misleading information in the subject line, header, or body of the message.",
        "Messages sent to a large number of recipients without regard for their individual preferences or interests.",
        "Messages sent using a third-party mailing list that does not comply with our Anti-Spam Policy.",
      ]},
      { type: "heading", text: "Opt-In & Opt-Out Policy" },
      { type: "paragraph", text: "We only send commercial email or messages to individuals or organizations who have given us explicit permission to do so. Recipients may opt-out of receiving future communications at any time via the unsubscribe link included in every email." },
      { type: "heading", text: "Prohibited Actions" },
      { type: "bullets", items: [
        "Send spam or unsolicited commercial email.",
        "Harvest email addresses or other personal information from our Website.",
        "Use false or misleading information to disguise the origin or content of an email or message.",
        "Send emails or messages to individuals who have not given explicit permission to receive them.",
      ]},
      { type: "heading", text: "Contact Us" },
      { type: "paragraph", text: "If you believe that you have received spam from us, please notify us immediately at info@londonstrategycentre.com." },
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection Policy",
    updated: "Last updated: 26 April 2023",
    icon: "🔒",
    content: [
      { type: "paragraph", text: "London Strategy Centre is committed to protecting the privacy and personal data of all visitors and users of our Website. This Data Protection Policy sets out how we collect, process, store, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws." },
      { type: "heading", text: "Collection and Use of Personal Data" },
      { type: "paragraph", text: "We collect and process personal data that you provide to us voluntarily when you use our Website, including:" },
      { type: "bullets", items: [
        "Contact information, such as your name, email address, and phone number.",
        "Information you provide when you sign up for our newsletter.",
        "Information you provide when you register for our events.",
        "Information you provide when you apply for a job with us.",
        "Information we collect automatically, such as your IP address, browser type, and operating system.",
      ]},
      { type: "heading", text: "Data Retention and Security" },
      { type: "paragraph", text: "We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law. We take appropriate technical and organizational measures to ensure the security of your personal data." },
      { type: "heading", text: "Sharing of Personal Data" },
      { type: "paragraph", text: "We do not sell, trade, or rent your personal data to third parties. We may share your personal data with service providers who assist us in providing our services. We require all third-party service providers to respect the security and confidentiality of your personal data." },
      { type: "heading", text: "Your Rights" },
      { type: "paragraph", text: "You have the right to access, correct, update, or delete your personal data that we hold about you. You also have the right to object to the processing of your personal data, restrict its processing, or request its transfer. To exercise these rights, please contact us at info@londonstrategycentre.com." },
      { type: "heading", text: "Contact Us" },
      { type: "paragraph", text: "If you have any questions or concerns about this Data Protection Policy, please contact us at info@londonstrategycentre.com." },
    ],
  },
  {
    id: "copyright-policy",
    title: "Copyright Policy",
    updated: "Last updated: 26 April 2023",
    icon: "©️",
    content: [
      { type: "paragraph", text: "London Strategy Centre respects the intellectual property rights of others and expects all users of our Website to do the same. This Copyright Policy outlines our policy regarding the use of copyrighted material on our Website." },
      { type: "heading", text: "Copyright Ownership" },
      { type: "paragraph", text: "All content on our Website, including but not limited to text, graphics, images, logos, videos, and software, is the property of London Strategy Centre or its content suppliers and is protected by copyright laws." },
      { type: "heading", text: "Use of Content" },
      { type: "paragraph", text: "You may use the content on our Website only for personal, non-commercial purposes. You may not copy, reproduce, distribute, modify, transmit, or display any content on our Website without our prior written consent." },
      { type: "heading", text: "Copyright Infringement Claims" },
      { type: "paragraph", text: "If you believe that your copyrighted work has been copied and is accessible on our Website in a way that constitutes copyright infringement, please notify us at info@londonstrategycentre.com with:" },
      { type: "bullets", items: [
        "A description of the copyrighted work that you claim has been infringed.",
        "A description of the material that you claim is infringing and where it is located on our Website.",
        "Your contact information, including your name, address, telephone number, and email address.",
        "A statement of good faith belief that the use is not authorized by the copyright owner.",
        "A statement that the information in your notification is accurate and that you are the copyright owner or authorized to act on their behalf.",
      ]},
      { type: "heading", text: "Contact Us" },
      { type: "paragraph", text: "If you have any questions or concerns about this Copyright Policy, please contact us at info@londonstrategycentre.com." },
    ],
  },
];

function renderContent(items) {
  return items.map((item, i) => {
    if (item.type === "paragraph") {
      return <p key={i} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{item.text}</p>;
    }
    if (item.type === "heading") {
      return (
        <h3 key={i} className="text-base sm:text-lg font-semibold text-[#0E2253] mt-8 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#0E2253] rounded-full inline-block shrink-0" />
          {item.text}
        </h3>
      );
    }
    if (item.type === "bullets") {
      return (
        <ul key={i} className="space-y-3 mb-4 pl-2">
          {item.items.map((bullet, j) => (
            <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E2253]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#0E2253] pt-36 pb-16 sm:pb-20">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Policies and Legislation
          </h1>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            At London Strategy Centre, we take our legal obligations seriously and are committed to complying with all applicable laws and regulations. Our commitment to compliance is central to our business philosophy.
          </p>
        </div>
      </div>

      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Sticky Sidebar — Table of Contents */}
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
                    <span className="group-hover:font-medium transition-all">{s.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-[#F1EEEA] rounded-xl">
                <p className="text-xs font-semibold text-gray-700 mb-2">Questions?</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">Contact our team for any legal enquiries.</p>
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
          <div className="flex-1 min-w-0 space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#F1EEEA] to-white px-6 sm:px-8 py-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0E2253]/10 flex items-center justify-center text-2xl shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-[#0E2253] bg-[#0E2253]/10 px-2 py-0.5 rounded-full">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-gray-400">{section.updated}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-6">
                  {renderContent(section.content)}
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
