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

export default function HealthcareClient() {
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
              Healthcare Transformation | Nibras
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              Healthcare AI Transformation
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider">⏱ 6 min read</span>
              <span>•</span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E2253]">Strategic Case Study #1601</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200">
              <img
                alt="Healthcare AI Transformation"
                className="w-full h-[320px] md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&q=80"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
              <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LSC transformed Nibras' patient intake process by deploying AI voice agents across 200 medical specialities to conduct structured symptom assessments and intelligent triage. The solution accelerates patient routing, identifies urgent cases earlier, and provides clinicians with structured intake data while preserving human clinical decision-making. The result is faster access to appropriate care, improved operational efficiency, and scalable healthcare delivery without proportional increases in staffing.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xs text-gray-500">LSC Healthcare Practice — Nibras</p>
                  <p className="text-xs text-gray-400 mt-0.5">2024</p>
                </div>
                <span className="text-2xl">🏥</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content + SideNav */}
        <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
          <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
            <div>
              <h4 className="text-lg font-bold text-[#0E2253]">Overview</h4>
              <p className="text-xs text-gray-400">Healthcare Intelligence Node</p>
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
                  Nibras connects patients with specialists across 200 medical specialities — one of the most complex routing challenges in modern healthcare. The organisation's core promise is that patients reach the right expert, at the right time. Delivering on that promise at scale exposed a systemic problem at the point of first contact.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div id="problem" className="scroll-mt-24">
              <div className="bg-[#0E2253] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl text-white mb-4">The Problem</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  At the moment a patient needs care, the system fails them. Triage is slow, inconsistent, and dependent on the availability of human coordinators. Patients cannot always articulate what is wrong — and the gap between a symptom description and a clinical conversation is filled with friction, delay, and risk. Urgent conditions go unrecognised until they escalate. The intake process, designed for administrative convenience, was absorbing clinical capacity without improving clinical outcomes.
                </p>
                {/* <p className="text-sm text-white/80 leading-relaxed">
                  The intake process, designed for administrative convenience, was absorbing clinical capacity without improving clinical outcomes. Routing patients across 200 medical specialities at scale without a structured intake mechanism creates systemic risk. The right specialist cannot act without the right patient — and the right patient cannot reach the right specialist without frictionless, intelligent triage.
                </p> */}
              </div>
            </div>

            {/* LSC's Approach */}
            <div id="approach" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">LSC's Approach</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                LSC designed a Tier 3 — Cybernetic Organisation Design for Nibras: a network of AI voice agents, each trained across the clinical profile of a specific speciality, capable of conducting structured diagnostic conversations with patients in natural language. The system covers all 200 specialities.
              </p>

              {/* 3-step architecture */}
              {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-6">System Architecture: How It Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { step: '01', title: 'Patient Engagement', desc: 'Patient describes symptoms in natural language. Voice agent initiates structured diagnostic conversation.' },
                    { step: '02', title: 'Urgency Assessment', desc: 'Agent identifies symptom patterns, assesses urgency, and delivers first aid guidance where required.' },
                    { step: '03', title: 'Clinical Handoff', desc: 'Clinical staff receive structured intake data — not unstructured descriptions — enabling faster, better-informed decisions.' },
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col gap-3">
                      <span className="text-3xl font-bold text-[#0E2253]/20">{item.step}</span>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-[#0E2253]">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    When a patient engages, the voice agent asks structured questions, identifies symptom patterns, and assesses urgency. Where conditions require immediate intervention, the agent delivers clear, clinically appropriate first aid guidance before the patient reaches a human clinician.
                  </p>
                  <p className="text-sm italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">
                    Every agent has defined escalation rules. No agent diagnoses independently. The agentic system acts as organisational intelligence at the front line — ensuring that decision quality is built into the intake process, not left to chance.
                  </p>
                </div>
                <div className="border border-gray-200 overflow-hidden rounded-lg">
                  <img
                    alt="Healthcare System"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&q=80"
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
                  Patients reach the right speciality faster, with less friction and greater confidence. Urgent conditions are identified and triaged in the first interaction, not discovered later. Clinical staff receive structured intake data — not unstructured descriptions — enabling faster, better-informed decisions. The organisation now operates at population scale without proportional headcount growth. AI-augmented transformation of the intake function released clinical capacity where it matters most.
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
                  The system does not replace clinical judgement. It ensures that judgement is applied at the right moment, with the right information, to the right patient. Human clinicians remain the decision authority for treatment. The agentic layer exists to make that authority more effective.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl font-semibold text-[#0E2253] mb-3">Transform Patient Intake with AI Voice Agents</h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
                Our Healthcare practice helps organisations design and deploy Tier 3 agentic systems that operate at population scale.
              </p>
              <a href="#contact" className="inline-block px-8 py-3.5 bg-[#0E2253] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all">
                Request a Capability Diagnostic →
              </a>
            </div>

            {/* Contact Form */}
            {/* <div id="contact" className="scroll-mt-24 border border-gray-200 rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-2xl font-semibold text-[#0E2253] mb-2">Request a Capability Diagnostic</h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">Speak with LSC to understand how a Tier 3 voice agent architecture can be built around your healthcare organisation.</p>
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
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Tell us about your challenge</label>
                    <textarea rows={4} value={contactForm.message} onChange={(e) => setContactForm(f => ({...f, message: e.target.value}))} placeholder="Briefly describe your current patient intake or triage challenges..." className="w-full px-4 py-3 border border-gray-200 text-sm resize-none focus:outline-none focus:border-[#0E2253] transition-colors rounded-lg" />
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
