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

const STAGES = [
  { id: '01', label: 'Lead Capture',      desc: 'Inbound leads logged across email, WhatsApp, and call centre — unified into a single system record.' },
  { id: '02', label: 'Qualification',     desc: 'AI agent applies consistent qualification standard regardless of which city or agent handles the lead.' },
  { id: '03', label: 'Enrichment',        desc: 'Buyer profile built from behavioural signals, stated preferences, and historical interaction data.' },
  { id: '04', label: 'Nurture',           desc: 'Sequenced engagement matched to buyer stage — no generic outreach, no simultaneous channel noise.' },
  { id: '05', label: 'Intent Scoring',    desc: 'Continuous behavioural monitoring surfaces high-intent accounts for escalation — automatically.' },
  { id: '06', label: 'Handover Gate ★',  desc: 'Critical human control point. No warm lead reaches London without an executive decision. Authority never delegated to the system.' },
  { id: '07', label: 'Conversion',        desc: 'Structured account record passed to sales — pre-qualified, behaviour-scored, with full interaction history.' },
];

export default function RealEstateClient() {
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
              Mayfair Dunes: Eliminating Four Failure Modes Across a Three-City Sales Operation
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              Real Estate Agentic Transformation
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider">⏱ 6 min read</span>
              <span>•</span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E2253]">Strategic Case Study #1801</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200">
              <img
                alt="Mayfair Dunes Luxury Property Operations"
                className="w-full h-80 md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/InnerPages/Industries/real-estate/real-estate-hero.jpg"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
              <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LSC redesigned Mayfair Dunes’ multi-city sales operation with an AI-driven, human-governed agentic system that standardised lead qualification, improved pipeline visibility, and preserved organisational knowledge. By introducing structured workflows, defined governance, and real-time sales intelligence, the solution eliminated inconsistent decision-making while ensuring human oversight of critical commercial decisions. The result is a more scalable, transparent, and resilient sales operation across London, Dubai, and Karachi.
                </p>
              </div>
              {/* <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xs text-gray-500">LSC Real Estate Practice — Mayfair Dunes</p>
                  <p className="text-xs text-gray-400 mt-0.5">2024</p>
                </div>
                <span className="text-2xl">🏛</span>
              </div> */}
            </div>
          </div>
        </section>

        {/* Content + SideNav */}
        <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
          <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
            <div>
              <h4 className="text-lg font-bold text-[#0E2253]">Overview</h4>
              <p className="text-xs text-gray-400">Real Estate Intelligence Node</p>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client &amp; Context</h2>
              <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mayfair Dunes is a luxury residential and investment property operator with active sales teams across London, Dubai, and Karachi. The business manages high-value leads from internationally mobile buyers — across email, WhatsApp, and a dedicated call centre. Commercial momentum was strong. The infrastructure to sustain it was not.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div id="problem" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl text-white mb-4">The Problem</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Four failure modes were operating simultaneously. Leads were scored differently by every agent — there was no shared qualification standard and no execution coherence across cities. Leadership had no pipeline visibility: forecasting and prioritisation were impossible.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Institutional knowledge left with every departing agent, meaning the organisation had no durable memory of its own clients. And there was no audit trail — no record of what had been promised, or by whom. The result was decision quality degraded at every stage of the sales cycle.
                </p>
              </div>
            </div>

            {/* LSC's Approach */}
            <div id="approach" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">LSC's Approach</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                LSC applied Tier 3 — Cybernetic Organisation Design: a framework that treats the organisation as a system to be designed, not a process to be optimised. LSC built a Tier 3 agentic system comprising eight specialised AI agents coordinated across the full sales cycle. Each agent has a defined scope and hard-coded guardrails. The system does not self-direct: every consequential step requires a human decision. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
               
              </p>

              {/* 7-stage journey */}
              {/* <div className="border border-gray-200 rounded-2xl overflow-hidden mb-8">
                <div className="bg-[#0E2253] px-6 py-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90">Seven-Stage Lead Journey</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {STAGES.map((stage) => (
                    <div key={stage.id} className={`flex items-start gap-5 px-6 py-4 ${stage.id === '06' ? 'bg-amber-50 border-l-4 border-amber-400' : ''}`}>
                      <span className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${stage.id === '06' ? 'text-amber-600' : 'text-[#0E2253]/40'}`}>{stage.id}</span>
                      <div>
                        <p className={`text-xs font-bold mb-1 ${stage.id === '06' ? 'text-amber-700' : 'text-[#0E2253]'}`}>{stage.label}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <p className="text-sm italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">
                  To enforce human authority, LSC designed a seven-stage lead journey. Leads cannot advance without a defined output at each stage. Stage 06, the Handover gate, is the critical control point: no warm lead reaches London without an executive decision. The system has been running in production since launch — not in a test environment.
                </p>
                <div className="border border-gray-200 overflow-hidden rounded-lg">
                  <img
                    alt="Luxury Real Estate"
                    className="w-full h-full object-cover"
                    src="/images/InnerPages/Industries/real-estate/cta-section.jpg"
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
                <p className="text-sm text-gray-600 leading-relaxed">
                  Three operational transformations were delivered. Lead qualification is now consistent across all three cities — the same standard applied by every agent, regardless of location. Executive teams have real-time pipeline visibility, enabling decisions to be taken on current data rather than agent memory. Organisational intelligence is now structural: client knowledge lives in the system, not with individuals, and survives staff turnover completely. The organisation no longer depends on the presence of any single person to maintain decision quality.
                </p>
              </div>
            </div>

            {/* The Principle */}
            <div id="principle" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-t-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">The Principle</h2>
              </div>
              <div className="border border-gray-200 rounded-b-2xl p-6 sm:p-8">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Human-in-the-loop governance is not a feature of how LSC builds agentic systems — it is a design condition. Authority over consequential decisions is never delegated to the system.
                </p>
              </div>
            </div>

            {/* CTA */}
            {/* <div className="border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl font-semibold text-[#0E2253] mb-3">Eliminate the Failure Modes in Your Sales Operation</h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
                LSC's Real Estate practice builds Tier 3 agentic systems designed around your sales cycle, your markets, and your governance requirements.
              </p>
              <a href="#contact" className="inline-block px-8 py-3.5 bg-[#0E2253] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all">
                Request a Capability Diagnostic →
              </a>
            </div> */}

            {/* Contact Form */}
            {/* <div id="contact" className="scroll-mt-24 border border-gray-200 rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-2xl font-semibold text-[#0E2253] mb-2">Request a Capability Diagnostic</h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">Speak with LSC to understand how a Tier 3 agentic architecture can be designed around your sales operation.</p>
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
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Organisation</label>
                    <input type="text" value={contactForm.company} onChange={(e) => setContactForm(f => ({...f, company: e.target.value}))} placeholder="Your organisation name" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Describe your challenge</label>
                    <textarea rows={4} value={contactForm.message} onChange={(e) => setContactForm(f => ({...f, message: e.target.value}))} placeholder="Briefly describe your current sales operation challenges..." className="w-full px-4 py-3 border border-gray-200 text-sm resize-none focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
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
