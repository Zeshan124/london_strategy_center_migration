'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { LSC_QUESTIONS, DEFAULT_RESPONSES, SECTORS, STAGES, MOAT_TYPES, BUSINESS_MODELS, SCALING_OPTIONS, COMPOUNDING_OPTIONS, RISK_PROBABILITY_OPTIONS, RISK_IMPACT_OPTIONS } from '@/lib/vef/defaultResponses';
import { calcAllScores, calcProbability } from '@/lib/vef/scoringEngine';
import { submitVentureLead } from '@/lib/api/ventureFramework';

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors";
const textareaClass = inputClass + " resize-none";
const labelClass = "block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest";

// ── Gate Modal ────────────────────────────────────────────────────────────────
function GateModal({ onClose }) {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', company: '', role: '', country: '', consent_contact: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const last = localStorage.getItem('vef_last_submit');
    if (last && Date.now() - Number(last) < 5000) { setError('Please wait a moment before submitting.'); return; }
    if (form.full_name.length < 2) { setError('Please enter your full name.'); return; }
    setLoading(true); setError('');
    try {
      // Submit to backend — non-blocking on failure
      try {
        const data = await submitVentureLead(form);
        if (data.lead_id) localStorage.setItem('vef_lead_id', data.lead_id);
      } catch (apiErr) {
        console.error('VEF lead API error:', apiErr);
      }
      localStorage.setItem('vef_lead_email', form.email);
      localStorage.setItem('vef_lead_name', form.full_name.split(' ')[0]);
      localStorage.setItem('vef_last_submit', String(Date.now()));
      onClose();
      router.push('/venture-framework/dashboard');
    } catch { setError('Something went wrong, please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-xl">✕</button>
        <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-2">LSC Venture Framework</p>
        <h2 className="text-2xl font-light text-gray-900 mb-2">Access the Framework</h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">Get instant access to the investor-grade venture evaluation tool used by LSC advisors.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className={labelClass}>Full Name *</label><input required value={form.full_name} onChange={e => setForm(f => ({...f, full_name: e.target.value}))} placeholder="Jane Smith" className={inputClass} /></div>
          <div><label className={labelClass}>Email Address *</label><input type="email" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="jane@company.com" className={inputClass} /></div>
          <div><label className={labelClass}>Phone *</label><input required value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} placeholder="+44 7700 000000" className={inputClass} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={labelClass}>Company</label><input value={form.company} onChange={e => setForm(f => ({...f, company: e.target.value}))} placeholder="Optional" className={inputClass} /></div>
            <div><label className={labelClass}>Role / Title</label><input value={form.role} onChange={e => setForm(f => ({...f, role: e.target.value}))} placeholder="Optional" className={inputClass} /></div>
          </div>
          <div><label className={labelClass}>Country</label><input value={form.country} onChange={e => setForm(f => ({...f, country: e.target.value}))} placeholder="Optional" className={inputClass} /></div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={form.consent_contact} onChange={e => setForm(f => ({...f, consent_contact: e.target.checked}))} className="mt-1 w-4 h-4 shrink-0" />
            <span className="text-xs text-gray-500">I'm happy to be contacted by LSC about my evaluation.</span>
          </label>
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm uppercase tracking-widest disabled:opacity-60">
            {loading ? 'Processing…' : 'Start Evaluating →'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Landing Page ──────────────────────────────────────────────────────────────
export default function VEFLandingPage() {
  const [showGate, setShowGate] = useState(false);
  const router = useRouter();

  const handleAccess = () => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('vef_lead_email') : null;
    if (email) { router.push('/venture-framework/dashboard'); } else { setShowGate(true); }
  };

  const FEATURES = [
    { icon: '🔍', title: '5-Question LSC Filter', desc: 'Rapid go/no-go signal across problem, solution, commercial viability, defensibility, and team.' },
    { icon: '📋', title: '8-Section Due Diligence', desc: 'Structured deep-dive covering validation, market sizing, competition, moat, business model, unit economics, risks, and probability.' },
    { icon: '📊', title: 'Probability Model', desc: 'Base-rate adjusted probability of success with positive and negative adjustment factors.' },
    { icon: '🤖', title: 'AI-Scored Inputs', desc: 'Quality-weighted scoring that rewards specificity, evidence, and structured thinking.' },
    { icon: '📄', title: 'One-Click PDF Export', desc: 'Investor-ready evaluation report generated instantly from your completed assessment.' },
    { icon: '💼', title: 'Evaluation Dashboard', desc: 'Track all your venture evaluations in one place with INVEST / PIVOT / DISCARD verdicts.' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-[#0E2253] pt-36 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">LSC · Venture Evaluation Framework</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Investor-Grade<br />Venture Evaluation
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              A structured framework for evaluating startup investment opportunities. Complete a multi-step assessment and receive a scored recommendation: <strong className="text-green-400">INVEST</strong>, <strong className="text-amber-400">PIVOT</strong>, or <strong className="text-red-400">DISCARD</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleAccess} className="px-10 py-4 bg-white text-[#0E2253] font-bold rounded-xl hover:bg-white/90 transition-colors text-sm uppercase tracking-widest">
                Access the Framework →
              </button>
              <Link href="/venture-framework/dashboard" className="px-10 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/5 transition-colors text-sm text-center">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-20">
          <p className="text-[10px] font-bold tracking-widests text-gray-400 uppercase mb-8">What's Included</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={handleAccess} className="px-12 py-4 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm uppercase tracking-widest">
              Access the Framework →
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {showGate && <GateModal onClose={() => setShowGate(false)} />}
    </>
  );
}
