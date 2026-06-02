import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

const tags = [
  "#LeadershipDevelopment",
  "#GenerativeAI",
  "#Metaverse",
  "#ExecutiveEducation",
  "#FutureOfWork",
];

const highlights = [
  { label: "Focus Area", value: "Leadership Dev" },
  { label: "Core Themes", value: "5 Explored" },
  { label: "Technologies", value: "AI & Metaverse" },
  { label: "Issued By", value: "London Strategy Centre" },
];

const featuredIn = [
  {
    name: "Open and User Innovation Conference",
    logo: "/images/InnerPages/white-papers/Picture1.jpg",
    abbr: "OUI Conference",
  },
  {
    name: "Harvard Business Review",
    logo: "/images/InnerPages/white-papers/Picture2.jpg",
    abbr: "Harvard Business Review",
  },
];

const sections = [
  {
    title: "Introduction",
    body: [
      "In an era marked by rapid technological advancement and unpredictable market dynamics, the demand for innovative leadership has never been more critical. Traditional leadership development programs, while providing a solid foundation, often fall short in preparing leaders for the complexities of today’s global challenges. Enter the realms of generative AI and the Metaverse—technologies poised to revolutionize executive education. At first glance, their value seems rooted in offering personalized, immersive learning experiences. Yet, their true potential might paradoxically lie in their ability to foster deeper human connections, enhance intuition, and promote a global mindset—elements crucial for the agile, adaptive leaders of the 21st century.",
    ],
   
  },
  {
    number: "1",
    title: "Unleashing the Potential of Generative AI and the Metaverse",
    body: [
      "Generative AI and the Metaverse are at the forefront of educational innovation, providing a dynamic platform for simulating real-world business challenges in a virtual environment. Generative AI, with its ability to create highly detailed, dynamic simulations, allows for the design of bespoke learning experiences that can mirror the complex, unpredictable nature of today's business landscape. Executives can immerse themselves in scenarios that require strategic decision-making, ethical judgment, and crisis management — skills that are crucial for leadership in the 21st century.",
      "The Metaverse, a collective virtual shared space, offers an expansive realm for these simulations. It transcends traditional learning modalities by enabling executives to experience lifelike scenarios without the constraints of physical location. This immersive approach to learning not only enhances engagement but also ensures that the skills developed are deeply ingrained and readily applicable in real-world situations.",
    ],
     pullQuote: "Their true potential might paradoxically lie in their ability to foster deeper human connections, enhance intuition, and promote a global mindset.",
  },
  {
    number: "2",
    title: "Customized Learning for a Complex World",
    body: [
      "The integration of these technologies into leadership development enables a level of customization previously unattainable. Through AI-driven analytics, programs can be tailored to address the specific weaknesses and strengths of each leader, ensuring that learning is highly relevant and immediately applicable. This personalized approach facilitates deeper learning and faster skill acquisition, empowering executives to lead with confidence and strategic insight.",
      "Furthermore, the Metaverse breaks down geographical barriers, fostering global collaboration among executives. This virtual networking opportunity enriches the learning experience, exposing leaders to diverse perspectives and fostering a global mindset critical for navigating international markets and cultural nuances.",
    ],
  },
  {
    number: "3",
    title: "Re-Humanizing Education Through Technology",
    body: [
      "While generative AI and the Metaverse are often celebrated for their technological advancements, their true value in leadership development may not solely lie in their novelty. Rather, it is in their profound ability to re-humanize education. Despite their digital nature, these technologies can foster deeper human connections and empathy more effectively than traditional methods.",
      "They achieve this by simulating real-world scenarios with unprecedented vividness, enabling executives to engage in lifelike experiences that cultivate emotional intelligence and interpersonal skills, vital for leading in today's interconnected world.",
    ],
  },
  {
    number: "4",
    title: "The Role of AI in Promoting Intuition",
    body: [
      "Contrary to the common perception of AI as a tool primarily for enhancing analytical abilities, its potential to aid in the development of intuition among executives should not be underestimated. Through engagement with AI-driven scenarios, leaders can learn to recognize and trust their gut feelings more in decision-making.",
      "The rapid processing of complex simulations by AI can mimic the subconscious assimilation of real-world experiences, fostering a type of intuitive judgment that complements analytical rigor.",
    ],
    pullQuote: "The rapid processing of complex simulations by AI can mimic the subconscious assimilation of real-world experiences, fostering intuitive judgment that complements analytical rigor.",
  },
  {
    number: "5",
    title: "Ethical Considerations and Identity Management",
    body: [
      "As we venture into these virtual spaces, the digital representation of identity becomes a complex issue. Executives must manage their professional, personal, and digital personas, navigating challenges related to privacy, security, and authenticity. The digital footprint left behind in the Metaverse can have real-world implications, making it imperative to approach identity management with caution and responsibility.",
      "Ethical considerations surrounding the use of AI in creating these virtual experiences cannot be overstated. Issues of data privacy, algorithmic bias, and digital equity must be addressed to ensure that leadership development programs in the Metaverse are not only effective but also fair and inclusive. Ensuring diversity in AI training data, promoting transparency in algorithmic decisions, and safeguarding user data are all critical for maintaining the integrity of these programs.",
    ],
  },
  {
    number: "6",
    title: "The Emergence of Digital Entities",
    body: [
      "Digital entities, from AI-powered mentors to virtual avatars, introduce innovative ways to engage with content and facilitate learning. These entities can guide executives through complex simulations, provide personalized feedback, and even model leadership behaviors. However, their integration into educational platforms requires careful consideration of ethical AI practices, representation, and the impact on learners' perceptions and identities.",
      "The design of these entities must reflect the diversity of the global executive population, avoiding stereotypes and ensuring inclusivity. Furthermore, as these digital beings become more autonomous, it becomes crucial to establish guidelines for their ethical use, ensuring they contribute positively to the learning experience without compromising user privacy or autonomy.",
      "The advent of generative AI and the Metaverse represents a paradigm shift in leadership development. By offering immersive, customizable learning experiences, these technologies have the potential to significantly enhance leadership training, preparing executives for the complexities of the modern business environment. However, realizing this potential requires a balanced approach that considers ethical implications, identity management, and the need for comprehensive digital literacy. As we chart this new territory, it is imperative that we do so with a commitment to inclusivity, responsibility, and the advancement of human-centered leadership in the digital age.",
    ], 
  },
];

const authors = [
  {
    initials: "IZ",
    name: "Dr Imran Zawwar",
    role: "CEO, London Strategy Centre",
  },
  {
    initials: "SY",
    name: "Dr Syed Yaqzan",
    role: "COO, London Strategy Centre",
  },
];

const references = [
  { text: "Open and User Innovation Conference", href: "#" },
  { text: "Harvard Business Review – Executive Education", href: "#" },
  { text: "London Strategy Centre – Leadership Development", href: "/about" },
];

export default function WhitePaperLeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0E2253] overflow-hidden">
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute left-0 bottom-0 right-0 h-px bg-white/10 pointer-events-none" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              White Paper
            </span>
            <span className="text-white/30">·</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              Leadership Development
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-3">
              Old Wine in a New Bottle?
            </h1>
            <p className="text-lg sm:text-xl text-white/45 font-light italic mb-5 leading-relaxed">
              The Case for Leadership Development in the Age of Generative AI
            </p>
            <div className="w-16 h-0.5 bg-white/25 mb-6" />

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Authors</p>
                <p className="font-semibold text-white text-sm">Dr Imran Zawwar & Dr Syed Yaqzan</p>
                <p className="text-white/45 text-xs mt-0.5">London Strategy Centre</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Published</p>
                <p className="font-medium text-white/80 text-sm">April 2026</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Read Time</p>
                <p className="font-medium text-white/80 text-sm">8 minutes</p>
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

      {/* As Featured In strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase shrink-0">As Featured In</p>
            <div className="flex items-center gap-8 sm:gap-12">
              {featuredIn.map((pub, i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img
                    src={pub.logo}
                    alt={pub.name}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
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
                In an era marked by rapid technological advancement and unpredictable market dynamics, the demand for innovative leadership has never been more critical.
              </p>
            </div>

            {/* <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-12">
              Enter the realms of generative AI and the Metaverse — technologies poised to revolutionize executive education. Their true potential may paradoxically lie not in novelty, but in their ability to foster deeper human connections, sharpen intuition, and promote the global mindset that adaptive 21st-century leaders require.
            </p> */}

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

                {section.pullQuote && (
                  <blockquote className="my-6 pl-5 border-l-4 border-[#0E2253] bg-[#F1EEEA] rounded-r-xl py-5 pr-6">
                    <p className="text-base sm:text-lg text-[#0E2253] font-light italic leading-relaxed">
                      "{section.pullQuote}"
                    </p>
                  </blockquote>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="relative bg-[#0E2253] rounded-2xl p-8 sm:p-10 mb-8 overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-widest text-white/35 uppercase mb-4">Conclusion</p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-6">
                  Leadership in the Digital Age
                </h2>
                <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-5">
                  The advent of generative AI and the Metaverse represents a paradigm shift in leadership development. By offering immersive, customizable learning experiences, these technologies have the potential to significantly enhance leadership training, preparing executives for the complexities of the modern business environment.
                </p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    As we chart this new territory, it is imperative that we do so with a commitment to inclusivity, responsibility, and the advancement of human-centered leadership in the digital age.
                  </p>
                </div>
              </div>
            </div>

            {/* About the Authors */}
            <div className="bg-[#F1EEEA] rounded-2xl p-6 sm:p-8 mb-12">
              <p className="text-[10px] font-bold tracking-widest text-[#0E2253]/50 uppercase mb-6">About the Authors</p>
              <div className="flex flex-col sm:flex-row gap-6">
                {authors.map((author, i) => (
                  <div key={i} className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-[#0E2253] text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {author.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-0.5">{author.name}</p>
                      <p className="text-xs font-medium text-[#0E2253] mb-2">{author.role}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Researches and writes on leadership development, generative AI, and the application of emerging technologies to executive education.
                      </p>
                    </div>
                  </div>
                ))}
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

              {/* Authors card */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-[#0E2253] px-5 py-3">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Authors</p>
                </div>
                <div className="p-5 space-y-4">
                  {authors.map((author, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#0E2253]/10 flex items-center justify-center text-[#0E2253] font-bold text-xs shrink-0">
                        {author.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 leading-tight">{author.name}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">{author.role}</p>
                      </div>
                    </div>
                  ))}
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
                <Link href="/artificial-intelligence" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline mb-3">
                  <span>AI Services</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
                <div className="h-px bg-gray-200 mb-3" />
                <Link href="/about" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline">
                  <span>About LSC</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
              </div>

              {/* CTA */}
              <div className="relative bg-[#0E2253] rounded-2xl p-5 overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/[0.05] pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] font-bold tracking-widest text-white/45 uppercase mb-3">Executive Education</p>
                  <p className="text-xs text-white/65 leading-relaxed mb-5">
                    Explore how the London Strategy Centre can accelerate your leadership capability.
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
