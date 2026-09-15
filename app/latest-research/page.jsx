import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

const meta = {
  category: "Leadership Development",
  title: "Leadership Acts and Moments of Engagement",
  subtitle:
    "Transforming competencies into leadership acts that implement strategy.",
  author: "Lester Coupland",
  published: "December 2022",
  readTime: "5 minutes",
};

const highlights = [
  { label: "Focus Area", value: "Leadership Dev" },
  { label: "Framework", value: "Leadership Acts" },
  { label: "Author", value: "Lester Coupland" },
  { label: "Published", value: "Dec 2022" },
];

const LADDER = [
  {
    n: "1",
    term: "Act",
    def: "A deed, something done with an end in mind.",
    eg: "Get a leader to facilitate a team meeting about the strategy to surface how team members view it.",
  },
  {
    n: "2",
    term: "Activity",
    def: "An act done on a regular basis.",
    eg: "Having coffee together as a team twice a week where people can talk informally about their interpretation of the strategy.",
  },
  {
    n: "3",
    term: "Practice",
    def: "An activity that starts to become an accepted part of how we do the work and we all buy into.",
    eg: "We rotate the preparation of the agenda and chairing of our team meetings, and support and challenge each other on how we are implementing the strategy.",
  },
  {
    n: "4",
    term: "Cultural Norm",
    def: "A practice that is now embedded as the way we do things — i.e. our culture.",
    eg: "We all talk about the strategy day to day as a natural way of behaving and doing business.",
  },
];

const COMPETENCY_ACTS = [
  {
    competency: "Team working",
    act: "Hold a knowledge-sharing meeting, or organise a social event for the team.",
  },
  {
    competency: "Motivation",
    act: "Inquire and seek others’ views about the strategy at the next meeting.",
  },
  {
    competency: "Collaboration",
    act: "Identify an opportunity to work with another department, or invite a member of the Executive Team to explain the strategy.",
  },
  {
    competency: "Managing conflict",
    act: "Co-create a solution for the next complex challenge facing the team.",
  },
];

const CONTENTS = [
  { id: "engagement", label: "Engagement and the delivery of value" },
  { id: "acts", label: "From competencies to leadership acts" },
  { id: "ladder", label: "From act to cultural norm" },
  { id: "competencies", label: "Transforming competencies into acts" },
  { id: "cocreation", label: "Co-creating the acts" },
  { id: "preparing", label: "Preparing leaders to engage" },
];

const references = [
  "Kakabadse, Andrew (2015), The Success Formula. London and New York: Bloomsbury.",
  "Kim, W. Chan, and Mauborgne, Renée (2014), “Blue Ocean Leadership,” Harvard Business Review, May (Accessed 03.09.20).",
];

export default function LatestResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0E2253] overflow-hidden">
        {/* Background image + navy overlay (keeps the white text readable) */}
        <div className="absolute inset-0">
          <img
            src="/images/InnerPages/latest-research/banner.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2253] via-[#0E2253]/90 to-[#0E2253]/70" />
        </div>

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute left-0 bottom-0 right-0 h-px bg-white/10 pointer-events-none" />

        <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-36 pb-16 sm:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              Latest Research
            </span>
            <span className="text-white/30">·</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/70 uppercase">
              {meta.category}
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-3">
              {meta.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/45 font-light italic mb-5 leading-relaxed">
              {meta.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-white/25 mb-6" />

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Author</p>
                <p className="font-semibold text-white text-sm">{meta.author}</p>
                <p className="text-white/45 text-xs mt-0.5">London Strategy Centre</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Published</p>
                <p className="font-medium text-white/80 text-sm">{meta.published}</p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Read Time</p>
                <p className="font-medium text-white/80 text-sm">{meta.readTime}</p>
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
            <div className="relative pl-6 mb-10 border-l-4 border-[#0E2253]">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-light">
                An act repeated becomes an activity, which becomes a practice and then an embedded cultural norm. Acts that are co-created and agreed, between a leader and their team, create moments of engagement. Designers of effective leadership programmes transform competencies into acts; ensuring that skill enhancement is directly related to leadership acts which implement the strategy.
              </p>
            </div>

            {/* Engagement */}
            <section id="engagement" className="scroll-mt-32 mb-14">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Engagement and the delivery of value</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                One of the key purposes of leadership development is to support the delivery of organisational strategy. And we know from the research of Andrew Kakabadse<sup>1</sup> that engagement is critical if an organisation’s strategy is to be executed in a way that delivers value. We know too that the traditional formula of creating a strategy, aligning structures and processes together with ‘fixing’ leaders’ deficits through competency development is far less likely to deliver value. Time and time again Kakabadse’s research revealed that without engagement and alignment of view about the context of the strategy (and the strategy itself) the chances of delivering value are much reduced.
              </p>

              <blockquote className="my-6 pl-5 border-l-4 border-[#0E2253] bg-[#F1EEEA] rounded-r-xl py-5 pr-6">
                <p className="text-base sm:text-lg text-[#0E2253] font-light italic leading-relaxed">
                  “Engagement is critical if an organisation’s strategy is to be executed in a way that delivers value.”
                </p>
              </blockquote>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                So leadership development programmes which are explicitly aimed at supporting the implementation of strategy should place a special emphasis on engagement; and in order to do this effectively, they should focus on leadership acts.
              </p>
            </section>

            {/* From competencies to leadership acts */}
            <section id="acts" className="scroll-mt-32 mb-14">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">From competencies to leadership acts</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                Kim and Mauborgne<sup>2</sup> suggest such a focus on leadership acts and activities, observing that “over many years a great deal of research has generated insights into the values, qualities, and behavioural styles that make for good leadership, and these have formed the basis of development programs and executive coaching. The implicit assumption is that changing values, qualities, and behavioural styles ultimately translate into high performance. But when people look back on these programs, many struggle to find evidence of notable change.”
              </p>

              <blockquote className="my-6 pl-5 border-l-4 border-[#0E2253] bg-[#F1EEEA] rounded-r-xl py-5 pr-6">
                <p className="text-base sm:text-lg text-[#0E2253] font-light italic leading-relaxed">
                  “The implicit assumption is that changing values, qualities, and behavioural styles ultimately translate into high performance.”
                </p>
              </blockquote>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                When using this approach, however, there is a risk that designers of leadership programmes do not define acts and activities. What can then happen is that acts and activities become entangled with skills, qualities and attributes of leaders. So it is worthwhile getting clarity by defining these terms.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                One way to do this is proposed below. Acts and activities are extended by adding practices and cultural norms. In other words, an act repeated becomes an activity, which becomes a practice and then an embedded cultural norm.
              </p>
            </section>

            {/* Ladder */}
            <section id="ladder" className="scroll-mt-32 mb-14">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">From act to cultural norm</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <div className="space-y-3">
                {LADDER.map((item, i) => (
                  <div
                    key={item.n}
                    className="relative flex gap-4 sm:gap-5 rounded-2xl border border-gray-200 p-5 sm:p-6"
                    style={{ marginLeft: `${i * 12}px` }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0E2253] text-white text-sm font-bold flex items-center justify-center">
                      {item.n}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#0E2253] mb-1.5">{item.term}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">{item.def}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        <span className="font-semibold text-gray-600">Example: </span>{item.eg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Transforming competencies into acts */}
            <section id="competencies" className="scroll-mt-32 mb-14">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Transforming competencies into acts</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                The sponsor of such a leadership programme may request that the content is built around the organisation’s competency framework. This is the moment to transform these competencies into acts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPETENCY_ACTS.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 p-5 bg-gray-50/60">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253]/50 mb-1">Competency</p>
                    <p className="text-sm font-bold text-gray-900 mb-3">{item.competency}</p>
                    <div className="flex items-center gap-2 text-[#0E2253] mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253]/50">Leadership Act</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.act}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Co-creating the acts */}
            <section id="cocreation" className="scroll-mt-32 mb-14">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Co-creating the acts</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                These acts would not be pre-conceived by the programme sponsor; this would defeat the object. In fact the idea is that they should emerge as an outcome from the leadership programme. Kim and Mauborgne suggest a process whereby the leader and their team co-create an as-is and to-be canvas which, through a constructive exchange, charts and ranks these acts. So the acts are agreed between the leader and their team; and through doing this they create moments of engagement.
              </p>
              <blockquote className="my-6 pl-5 border-l-4 border-[#0E2253] bg-[#F1EEEA] rounded-r-xl py-5 pr-6">
                <p className="text-base sm:text-lg text-[#0E2253] font-light italic leading-relaxed">
                  “The acts are agreed between the leader and their team; and through doing this they create moments of engagement.”
                </p>
              </blockquote>
            </section>

            {/* Preparing leaders to engage */}
            <section id="preparing" className="scroll-mt-32 mb-14">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Preparing leaders to engage</h2>
                <div className="w-10 h-0.5 bg-[#0E2253]/20 rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We suggest that an element of the leadership programme is dedicated to preparing the leaders to engage with their teams in this way — for example, how the leader might facilitate such a discussion, the importance of a growth mind-set, and how they might manage adverse reactions from team members. So the skills enhancement is directly related to a leadership act which is implementing the strategy.
              </p>
            </section>

            {/* Conclusion */}
            <div className="relative bg-[#0E2253] rounded-2xl p-8 sm:p-10 mb-8 overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/[0.04] pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-widest text-white/35 uppercase mb-4">In Closing</p>
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  If designers of leadership programmes can instil a disciplined approach in this way, the leadership acts that happen will be directly related to implementing the organisation’s strategy. And this is one of the essential purposes of leadership development.
                </p>
              </div>
            </div>

            {/* About the Author */}
            <div className="bg-[#F1EEEA] rounded-2xl p-6 sm:p-8 mb-12">
              <p className="text-[10px] font-bold tracking-widest text-[#0E2253]/50 uppercase mb-6">About the Author</p>
              <div className="flex items-start gap-4">
                <img
                  src="/images/about/lester-coupland.jpg"
                  alt={meta.author}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">{meta.author}</p>
                  <p className="text-xs font-medium text-[#0E2253] mb-2">London Strategy Centre</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Author of “Leadership Acts and Moments of Engagement,” exploring how leadership development can be designed to drive engagement and the implementation of organisational strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="mb-4">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-5">References</p>
              <ol className="space-y-3">
                {references.map((ref, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-400 flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-500 leading-relaxed">{ref}</span>
                  </li>
                ))}
              </ol>
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
                <div className="p-5 flex items-center gap-3">
                  <img
                    src="/images/about/lester-coupland.jpg"
                    alt={meta.author}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-tight">{meta.author}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">London Strategy Centre</p>
                  </div>
                </div>
              </div>

              {/* Contents */}
              <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Contents</p>
                <ol className="space-y-3">
                  {CONTENTS.map((s, i) => (
                    <li key={s.id} className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#0E2253]/10 text-[#0E2253] text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <a href={`#${s.id}`} className="text-xs text-gray-600 hover:text-[#0E2253] leading-relaxed transition-colors">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related */}
              <div className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Related</p>
                <Link href="/advisory-services" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline mb-3">
                  <span>Advisory Services</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
                <div className="h-px bg-gray-200 mb-3" />
                <Link href="/reframe-reads" className="flex items-center justify-between text-sm font-medium text-[#0E2253] hover:underline">
                  <span>Reframe Reads</span>
                  <span className="text-gray-400 shrink-0 ml-2">→</span>
                </Link>
              </div>

              {/* CTA */}
              <div className="relative bg-[#0E2253] rounded-2xl p-5 overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/[0.05] pointer-events-none" />
                <div className="relative">
                  <p className="text-[10px] font-bold tracking-widest text-white/45 uppercase mb-3">Leadership Development</p>
                  <p className="text-xs text-white/65 leading-relaxed mb-5">
                    Explore how London Strategy Centre designs leadership programmes that turn strategy into action.
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
