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

const DATABASES = [
  { label: 'DEFRA',           desc: 'UK Government emissions factor database' },
  { label: 'EPA',             desc: 'US Environmental Protection Agency factors' },
  { label: 'IPCC',            desc: 'IPCC emission factor database for GHG inventories' },
  { label: 'GHG Protocol',    desc: 'Corporate value chain accounting standard' },
  { label: 'CSRD',            desc: 'EU Corporate Sustainability Reporting Directive' },
  { label: 'Sector-Specific', desc: 'Industry-aligned frameworks applied on demand' },
];

export default function SustainabilityClient() {
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
              From Compliance Burden to Live Intelligence
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              AI Agents for Scope 3 Emissions Auditing
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider">⏱ 7 min read</span>
              <span>•</span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E2253]">Strategic Case Study #1901</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200">
              <img
                alt="Scope 3 Emissions Intelligence"
                className="w-full h-80 md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/InnerPages/Industries/sustainability/sustainability-hero.jpg"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
              <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                 LSC transformed Scope 3 emissions management by replacing manual, point-in-time reporting with an AI-powered, continuously monitored intelligence system. The solution automates supplier data collection, normalises emissions data across all 15 Scope 3 categories, and generates audit-ready, framework-compliant reports on demand. The result is accurate, real-time sustainability intelligence that reduces compliance effort, strengthens regulatory confidence, and enables more informed strategic decision-making.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xs text-gray-500">LSC Sustainability Practice</p>
                  <p className="text-xs text-gray-400 mt-0.5">2024</p>
                </div>
                <span className="text-2xl">🌿</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content + SideNav */}
        <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
          <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
            <div>
              <h4 className="text-lg font-bold text-[#0E2253]">Overview</h4>
              <p className="text-xs text-gray-400">Sustainability Intelligence Node</p>
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
                  Scope 3 emissions — the indirect emissions that run across an organisation's full value chain — represent the largest and least visible portion of most enterprises' carbon footprint. Regulatory pressure is no longer theoretical: CSRD, SEC climate disclosure rules, and procurement-linked sustainability requirements are forcing organisations to account for emissions they have never systematically measured. Most organisations are structurally unprepared. They lack the data infrastructure, the supplier visibility, and the analytical capacity to produce a credible Scope 3 number — accurately, at speed, and on demand.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div id="problem" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl text-white mb-4">The Problem</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Scope 3 audits are manually intensive, supplier-dependent, and expensive. Data arrives in incompatible formats from hundreds of counterparties across a supply chain that was never designed with emissions visibility in mind. Spend-based estimates — the default fallback — are imprecise and increasingly exposed to regulatory and legal scrutiny.
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Internal sustainability teams lack the capacity to ingest, normalise, and interrogate the volume of data required to cover all 15 Scope 3 categories. And when audits are eventually completed, they are already out of date — point-in-time snapshots produced under pressure, not a defensible, continuous record.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  The result is a compliance programme that consumes significant resource and still fails to produce the quality of emissions intelligence that regulators, procurement counterparties, and investors increasingly require.
                </p>
              </div>
            </div>

            {/* LSC's Approach */}
            <div id="approach" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">LSC's Approach</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                LSC deployed a Tier 3 — Cybernetic Organisation Design solution: a coordinated network of AI agents that continuously ingest supplier data, financial transactions, logistics records, and procurement documentation, then normalise that data against recognised emissions factor databases including DEFRA, EPA, and IPCC.
              </p>

              {/* Databases grid */}
              {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-5">Emissions Databases &amp; Frameworks Integrated</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DATABASES.map((db) => (
                    <div key={db.label} className="p-3 bg-white border border-gray-200 rounded-xl">
                      <p className="text-xs font-bold text-[#0E2253] mb-1">{db.label}</p>
                      <p className="text-[10px] text-gray-400 leading-relaxed">{db.desc}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The agentic system operates across all 15 Scope 3 categories simultaneously. Agents identify data gaps and query suppliers automatically, without requiring manual intervention from the sustainability team. Every action is logged, timestamped, and traceable — creating a continuous, structured audit trail rather than a periodic report.
                  </p>
                  <p className="text-sm italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">
                    At the core of this architecture is organisational intelligence built for execution coherence: the system does not wait for humans to initiate a reporting cycle. It maintains a live emissions profile, flags anomalies, and generates framework-aligned outputs — against CSRD, GHG Protocol, and sector-specific standards — on demand. This is AI-augmented transformation applied to a domain where the cost of imprecision is rising rapidly.
                  </p>
                </div>
                <div className="border border-gray-200 overflow-hidden rounded-lg">
                  <img
                    alt="Sustainability Intelligence"
                    className="w-full h-full object-cover"
                    src="/images/InnerPages/Industries/sustainability/cta-section.jpg"
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
                  The organisation shifted from annual, manually produced estimates to a live intelligence capability — Scope 3 data that is current, structured, and auditable at all times. Supplier data gaps are identified and actioned automatically; the compliance team no longer drives the data collection process.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Reporting against CSRD, the GHG Protocol, and sector-specific frameworks is generated on demand rather than assembled under deadline. Sustainability professionals are freed from manual data aggregation and repositioned on higher-value strategic analysis — decisions about supply chain redesign, procurement policy, and emissions reduction targets.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Critically, the organisation can now evidence its emissions position credibly — in procurement negotiations, investor disclosures, and regulatory submissions — without the uncertainty that characterises spend-based estimation.
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
                  Scope 3 compliance is not a reporting exercise. It is an intelligence problem — and it requires an intelligence infrastructure. Organisations that treat it as the former will continue to produce defensible-looking numbers that are functionally inadequate. Those that invest in Tier 3 agentic systems — built for strategic sensing, continuous ingestion, and execution coherence — will hold a structural advantage in every regulatory, commercial, and investor context where emissions data matters.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl font-semibold text-[#0E2253] mb-3">Assess Your Scope 3 Data Infrastructure</h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
                LSC's Sustainability practice builds Tier 3 agentic systems that transform emissions auditing from a compliance burden into a continuous intelligence capability.
              </p>
              <a href="#contact" className="inline-block px-8 py-3.5 bg-[#0E2253] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all">
                Request a Capability Diagnostic →
              </a>
            </div>

            {/* Contact Form */}
            {/* <div id="contact" className="scroll-mt-24 border border-gray-200 rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-2xl font-semibold text-[#0E2253] mb-2">Request a Capability Diagnostic</h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">Contact LSC to assess your Scope 3 data infrastructure and understand how a Tier 3 agentic architecture can be designed for your organisation.</p>
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
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Describe your Scope 3 challenge</label>
                    <textarea rows={4} value={contactForm.message} onChange={(e) => setContactForm(f => ({...f, message: e.target.value}))} placeholder="Briefly describe your current emissions reporting challenges or data infrastructure gaps..." className="w-full px-4 py-3 border border-gray-200 text-sm resize-none focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
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
