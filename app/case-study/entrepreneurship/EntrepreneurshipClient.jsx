'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';

const NAV_ITEMS = [
  { id: 'context',   title: 'Context' },
  { id: 'problem',   title: 'The Problem' },
  { id: 'approach',  title: "LSC's Approach" },
  { id: 'outcomes',  title: 'What Changed' },
  { id: 'principle', title: 'The Principle' },
];

export default function EntrepreneurshipClient() {
  const [scrollSection, setScrollSection] = useState('context');
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setScrollSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleContactSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white lg:pt-40 pt-28">
        {/* Hero */}
        <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24" id="context">
          <div className="flex flex-col gap-3 mb-8">
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-[#0E2253] rounded-lg text-xs sm:text-sm font-bold text-[#0E2253]">
                Case Study
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-4">
              SME Digital Twin Mentor
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              Entrepreneurship &amp; Growth Advisory
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider">⏱ 6 min read</span>
              <span>•</span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E2253]">Strategic Case Study #1501</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200">
              <img
                alt="SME Founder Strategic Operations"
                className="w-full h-[320px] md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/InnerPages/Industries/entrepreneurship/entrepreneurship-hero.jpg"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
              <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LSC developed an AI-powered Digital Twin mentor that provides SME founders with continuous, business-specific strategic guidance based on their own goals, projects, and operating context. By replacing static planning with a living organisational intelligence model, the solution enables faster decision-making, proactive risk identification, and more effective project execution. The result is enterprise-grade strategic support that augments founder judgement and scales with the business.
                </p>
              </div>
              {/* <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xs text-gray-500">LSC Entrepreneurship &amp; Growth Practice</p>
                  <p className="text-xs text-gray-400 mt-0.5">2024</p>
                </div>
                <span className="text-2xl">🧠</span>
              </div> */}
            </div>
          </div>
        </section>

        {/* Content + SideNav */}
        <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
          <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
            <div>
              <h4 className="text-lg font-bold text-[#0E2253]">Overview</h4>
              <p className="text-xs text-gray-400">Entrepreneurship Intelligence Node</p>
            </div>
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`}
                  className={`py-2 text-xs font-semibold uppercase tracking-wider transition-all border-l-2 pl-3 ${
                    scrollSection === sec.id
                      ? 'text-[#0E2253] border-[#0E2253] font-bold bg-gray-50'
                      : 'text-gray-400 border-transparent hover:text-[#0E2253] hover:border-gray-300'
                  }`}>
                  {sec.title}
                </a>
              ))}
            </nav>
            {/* <a href="#contact" className="block w-full bg-[#0E2253] text-white text-center py-3 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all">
              Request Diagnostic
            </a> */}
          </aside>

          <div className="flex-1 space-y-10 pb-24">

            {/* Context */}
            <div id="context" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Context</h2>
              <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Small and medium enterprises operate at a structural disadvantage. Large organisations retain standing access to strategic counsel — advisers who understand the business, the market, and the decision at hand. Founders rarely have that. They are surrounded by generalists, constrained by budget, and forced to make consequential decisions without the analytical depth those decisions require. The gap is not one of ambition. It is one of access.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div id="problem" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl text-white mb-4">The Problem</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Business planning for most SMEs is a static exercise. A charter is written at inception, referenced occasionally, and left to age. Project execution compounds the problem: decisions are made reactively, dependencies surface late, and the founder’s attention is spread across competing urgencies with no structured mechanism to resolve them.
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                 Advisers, where they exist, are episodic — available for the quarterly meeting, absent for the Tuesday afternoon crisis. The calibre of support may be genuine, but the timing is almost never right. When a critical decision must be made, the founder is typically operating alone, with incomplete context, under pressure, and without the thinking infrastructure to slow down and reason clearly.
                </p>
                 <p className="text-sm text-white/80 leading-relaxed">
                 This is where SMEs stall — not in the absence of capability, but in the absence of organisational intelligence at the moment it is needed most.
                </p>
              </div>
            </div>

            {/* LSC's Approach */}
            <div id="approach" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">LSC's Approach</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    LSC developed a Digital Twin mentor architecture under Tier 3 — Cybernetic Organisation Design: an AI model built specifically around the founder’s business, not a generic assistant applied to it.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The Digital Twin is trained on the business’s own documents — its charter, strategic priorities, live project milestones, constraints, and operating environment. It processes real-time information and provides contextually specific guidance on project execution, business charter development, stakeholder management, and strategic trade-offs. Where a conventional adviser interprets the business from the outside, the Digital Twin models it from within.
                  </p>
                  <p className="text-sm italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4 mb-4">
                    Founders interact through natural language. The system surfaces dependencies they have not seen, flags execution risks before they compound, and provides structured thinking on decisions that would otherwise be made on instinct. It operates as a persistent, always-available strategic presence — one that holds the business in view even when the founder cannot.
                  </p>
                  <p className="text-sm italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">
                   The architecture is designed to grow with the business. As the charter evolves, as projects close and open, as the operating environment shifts, the Digital Twin updates. It is not a report. It is a living model of the organisation, capable of supporting decision quality across every layer of execution.
                  </p>
                </div>
                <div className="border border-gray-200 overflow-hidden rounded-lg">
                  <img
                    alt="Founder at Work"
                    className="w-full h-full object-cover"
                    src="/images/InnerPages/Industries/entrepreneurship/cta-section.jpg"
                  />
                </div>
              </div>
            </div>

            {/* What Changed */}
            <div id="outcomes" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-t-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">What Changed</h2>
              </div>
              <div className="border border-gray-200 rounded-b-2xl p-6 sm:p-8">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The shift was immediate and structural. Founders made faster decisions on live execution challenges — not because the system decided for them, but because it eliminated the information deficit that previously forced delay. Execution coherence improved: risks were identified early, dependencies were tracked, and the business charter became a working document rather than a historical artefact.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Perhaps most significantly, SMEs gained access to a calibre of strategic support previously reserved for organisations with dedicated advisory functions. The agentic system did not replicate a consultant. It created a new category of always-available, business-specific organisational intelligence — one that scales with the founder rather than billing by the hour.
                </p>
                <ul className="space-y-3">
                  {[
                    'Decision speed improved on live execution challenges',
                    'Business charters became active, interrogatable documents',
                    'Execution risks surfaced before they became crises',
                    'Strategic counsel became continuous, not episodic',
                    "AI-augmented transformation delivered without displacing the founder's judgement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#0E2253] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Principle */}
            <div id="principle" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-t-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">The Principle</h2>
              </div>
              <div className="border border-gray-200 rounded-b-2xl p-6 sm:p-8">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Digital Twin does not run the business. It ensures the person running it never operates without context. LSC's Tier 3 architecture is built on the premise that organisational intelligence should augment human judgement — compressing the gap between what the founder knows and what the decision requires, without displacing the agency that makes the decision meaningful.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl font-semibold text-[#0E2253] mb-3">Request a Capability Diagnostic</h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
                Speak with LSC to understand how a Digital Twin architecture can be built around your business.
              </p>
              <a href="#contact" className="inline-block px-8 py-3.5 bg-[#0E2253] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all">
                Request a Capability Diagnostic →
              </a>
            </div>

            {/* Contact Form */}
            {/* <div id="contact" className="scroll-mt-24 border border-gray-200 rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-2xl font-semibold text-[#0E2253] mb-2">Request a Capability Diagnostic</h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">Speak with LSC to understand how a Digital Twin architecture can be built around your business.</p>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-6 text-center rounded-xl">
                  <p className="text-sm font-semibold text-green-700">Thank you — we'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Full Name</label>
                      <input type="text" required value={contactForm.name} onChange={(e) => setContactForm(f => ({...f, name: e.target.value}))} placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Email Address</label>
                      <input type="email" required value={contactForm.email} onChange={(e) => setContactForm(f => ({...f, email: e.target.value}))} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Company / Organisation</label>
                    <input type="text" value={contactForm.company} onChange={(e) => setContactForm(f => ({...f, company: e.target.value}))} placeholder="Your company name" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Tell us about your business</label>
                    <textarea rows={4} value={contactForm.message} onChange={(e) => setContactForm(f => ({...f, message: e.target.value}))} placeholder="Briefly describe your current challenges..." className="w-full px-4 py-3 border border-gray-200 text-sm resize-none focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
                  </div>
                  <button type="submit" className="bg-[#0E2253] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all rounded-lg">
                    Request Capability Diagnostic
                  </button>
                </form>
              )}
            </div> */}

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
