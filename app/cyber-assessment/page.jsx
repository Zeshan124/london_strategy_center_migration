'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { QUESTIONS, COMPANY_SIZE_OPTIONS } from '@/lib/cyberAssessmentData';
import { submitLeadInfo, submitAssessmentAnswers } from '@/lib/api/cyberAssessment';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// ── Step 1: Welcome ──────────────────────────────────────────────────────────
function WelcomeStep({ onStart }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E2253]/10 rounded-full text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-6">
        Cyber Excellence
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
        Cyber Readiness Mini Scorecard
      </h1>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
        The <strong>SME Snapshot</strong> gives you an instant view of your organisation's cyber readiness across five critical security domains — in under 5 minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
        {[
          { icon: '⏱', title: '~5 Minutes', desc: 'Quick, structured questions' },
          { icon: '🛡', title: '5 Domains', desc: 'Covers the full security spectrum' },
          { icon: '📊', title: 'Personalised Report', desc: 'Tailored scorecard & recommendations' },
        ].map((item) => (
          <div key={item.title} className="bg-[#F1EEEA] rounded-2xl p-5">
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-bold text-gray-900 mb-1">{item.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-10 text-left shadow-sm">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">What we assess</p>
        <div className="space-y-2">
          {['Leadership & Governance', 'People & Awareness', 'Technology & Protection', 'Data & Continuity', 'Incident Readiness'].map((d, i) => (
            <div key={d} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-[#0E2253] text-white text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              {d}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full sm:w-auto px-10 py-4 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm uppercase tracking-widest"
      >
        Start Assessment →
      </button>
    </div>
  );
}

// ── Step 2: Lead Capture ─────────────────────────────────────────────────────
function LeadStep({ onSubmit, loading, error }) {
  const [form, setForm] = useState({ full_name: '', email: '', company_name: '', company_size: '', industry: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors";

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase mb-3">Step 1 of 2</p>
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">Tell us about your organisation</h2>
        <p className="text-sm text-gray-500">Your details help us personalise your scorecard report.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
            <input name="full_name" required value={form.full_name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputClass} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company Name *</label>
          <input name="company_name" required value={form.company_name} onChange={handleChange} placeholder="Acme Ltd" className={inputClass} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company Size</label>
            <select name="company_size" value={form.company_size} onChange={handleChange} className={inputClass}>
              <option value="">Select size</option>
              {COMPANY_SIZE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Industry</label>
            <input name="industry" value={form.industry} onChange={handleChange} placeholder="e.g. Finance, Healthcare" className={inputClass} />
          </div>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm uppercase tracking-widest disabled:opacity-60"
        >
          {loading ? 'Saving…' : 'Continue to Assessment →'}
        </button>
      </form>
    </div>
  );
}

// ── Step 3: Questions ────────────────────────────────────────────────────────
function QuestionStep({ answers, onAnswer, onBack, onSubmit, loading, error }) {
  const [current, setCurrent] = useState(0);
  const q = QUESTIONS[current];
  const isLast = current === QUESTIONS.length - 1;
  const progress = ((current + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (answers[q.id] === undefined) return;
    if (isLast) { onSubmit(); } else { setCurrent((c) => c + 1); }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold tracking-widest text-[#0E2253] uppercase">Step 2 of 2 — Assessment</p>
          <p className="text-xs text-gray-500">Question {current + 1} of {QUESTIONS.length}</p>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#0E2253] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">{q.domain}</p>
      </div>

      {/* Question */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 leading-snug">{q.question}</h2>
        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(q.id, idx)}
              className={`w-full flex items-start gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                answers[q.id] === idx
                  ? 'border-[#0E2253] bg-[#0E2253]/5 text-[#0E2253]'
                  : 'border-gray-200 hover:border-[#0E2253]/40 hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className={`w-7 h-7 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                answers[q.id] === idx ? 'border-[#0E2253] bg-[#0E2253] text-white' : 'border-gray-300 text-gray-500'
              }`}>
                {opt.label}
              </span>
              <span className="text-sm leading-relaxed pt-0.5">{opt.text}</span>
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          onClick={() => current === 0 ? onBack() : setCurrent((c) => c - 1)}
          className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={answers[q.id] === undefined || loading}
          className="px-8 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm disabled:opacity-40"
        >
          {loading ? 'Submitting…' : isLast ? 'Submit Assessment' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function CyberAssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState('welcome'); // welcome | lead | questions
  const [sessionId, setSessionId] = useState('');
  const [answers, setAnswers] = useState({});
  const [leadInfo, setLeadInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { setSessionId(generateUUID()); }, []);

  const handleLeadSubmit = async (formData) => {
    setLoading(true);
    setError('');
    setLeadInfo(formData);
    try {
      await submitLeadInfo({ ...formData, session_id: sessionId });
    } catch {
      // Proceed anyway — backend may use PHP sessions as fallback
    } finally {
      setLoading(false);
      setStep('questions');
    }
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitAnswers = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await submitAssessmentAnswers({ answers, session_id: sessionId });
      router.push(`/cyber-assessment/results?session=${sessionId}&company=${encodeURIComponent(leadInfo.company_name || '')}`);
    } catch {
      router.push(`/cyber-assessment/results?answers=${encodeURIComponent(JSON.stringify(answers))}&company=${encodeURIComponent(leadInfo.company_name || '')}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-[#0E2253] pt-32 pb-12">
          <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center">
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Cyber Excellence · Free Assessment</p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16">
          {step === 'welcome' && <WelcomeStep onStart={() => setStep('lead')} />}
          {step === 'lead' && (
            <LeadStep
              onSubmit={handleLeadSubmit}
              loading={loading}
              error={error}
            />
          )}
          {step === 'questions' && (
            <QuestionStep
              answers={answers}
              onAnswer={handleAnswer}
              onBack={() => setStep('lead')}
              onSubmit={handleSubmitAnswers}
              loading={loading}
              error={error}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
