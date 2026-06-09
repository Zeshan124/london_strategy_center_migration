'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { ROLE_QUESTIONS } from '@/lib/assessment/questionBank';
import { classifyRole, selectCapabilityQuestions, calculateResults, DIMENSION_META, MATURITY_PROFILES } from '@/lib/assessment/engine';

const ARCHETYPE_DESCRIPTIONS = {
  'Strategic Leader': 'You shape direction and navigate complexity — AI amplifies your judgment at scale.',
  'People & Team Leader': 'You mobilise people and remove blockers — AI extends your team\'s capacity.',
  'Analytical Professional': 'You turn data into insight — AI accelerates your research and synthesis.',
  'Creative Professional': 'You persuade and communicate — AI helps you produce more, faster.',
  'Operational Specialist': 'You keep things running — AI automates the repetitive so you can focus on exceptions.',
  'Client & Relationship Professional': 'You build trust and deliver value — AI helps you personalise at scale.',
  'Knowledge Worker': 'You build and solve — AI is your most powerful new tool.',
};

// ── Step 1: Role Phase ────────────────────────────────────────────────────────
function RolePhase({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const LETTERS = 'ABCDE';
  const q = ROLE_QUESTIONS[step];
  const isLast = step === ROLE_QUESTIONS.length - 1;
  const progress = ((step + 1) / ROLE_QUESTIONS.length) * 100;

  const handleNext = () => {
    const newAnswers = { ...answers, [q.id]: selected };
    if (isLast) {
      const arr = Object.entries(newAnswers).map(([question_id, value]) => ({ question_id, value }));
      onComplete(classifyRole(arr), arr);
    } else {
      setAnswers(newAnswers);
      setStep((s) => s + 1);
      setSelected(answers[ROLE_QUESTIONS[step + 1]?.id] ?? null);
    }
  };

  const handleBack = () => {
    if (step === 0) return;
    setSelected(answers[ROLE_QUESTIONS[step - 1].id] ?? null);
    setStep((s) => s - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] to-[#1a1f3a] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Stage 1 · Role Profile</span>
              <span className="text-xs text-white/40">{step + 1} / {ROLE_QUESTIONS.length}</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-400" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 sm:p-8 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-6 leading-snug">{q.text}</h2>
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelected(opt.value)}
                  className={`w-full flex items-start gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                    selected === opt.value
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                    selected === opt.value ? 'border-blue-500 bg-blue-500 text-white' : 'border-white/30 text-white/50'
                  }`}>
                    {LETTERS[idx]}
                  </span>
                  <span className={`text-sm leading-relaxed pt-0.5 ${selected === opt.value ? 'text-white' : 'text-white/70'}`}>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className={`px-6 py-3 border border-white/20 rounded-xl text-sm font-medium text-white/70 hover:bg-white/5 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="px-8 py-3 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-40"
            >
              {isLast ? 'See My Role Profile →' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 2: Transition ────────────────────────────────────────────────────────
function TransitionScreen({ roleProfile, onContinue }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] to-[#1a1f3a] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-xl text-center">
          <div className="w-14 h-14 rounded-full bg-[#e63946]/20 border border-[#e63946]/40 flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <p className="text-xs font-bold tracking-widest text-[#e63946] uppercase mb-3">Role Profile Complete</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{roleProfile.archetype}</h2>
          <p className="text-white/60 text-sm sm:text-base mb-8 leading-relaxed">{ARCHETYPE_DESCRIPTIONS[roleProfile.archetype]}</p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 text-left grid grid-cols-3 gap-4">
            {[
              { label: 'Seniority', value: roleProfile.seniority?.replace(/_/g, ' ') },
              { label: 'Work type', value: roleProfile.workType },
              { label: 'AI outlook', value: roleProfile.aiView?.replace(/_/g, ' ') },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">{item.label}</p>
                <p className="text-sm font-medium text-white capitalize">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left">
            <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-3">How to answer</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Answer based on what you think the <strong className="text-white">best approach</strong> would be — not necessarily what you currently do. If you haven't faced a scenario yet, choose the response most aligned with good practice, or use the 'not sure' option.
            </p>
            <p className="text-sm text-white/50 mt-3 leading-relaxed">Your score tells us <strong className="text-white/70">where to start your learning</strong>, not where your capabilities end.</p>
          </div>

          <button
            onClick={onContinue}
            className="w-full py-4 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold rounded-xl text-sm uppercase tracking-widest transition-colors"
          >
            Start Capability Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Step 3: Capability Phase ──────────────────────────────────────────────────
function CapabilityPhase({ questions, roleProfile, onSubmit }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const LETTERS = 'ABCDE';
  const q = questions[step];
  const isLast = step === questions.length - 1;
  const progress = ((step + 1) / questions.length) * 100;
  const dimMeta = DIMENSION_META[q?.dimension] || {};

  const handleNext = async () => {
    const score = selected === q.options.length ? 1 : (q.options[selected]?.score ?? 0);
    const newAnswers = { ...answers, [q.id]: { selected_option_index: selected, score } };
    if (isLast) {
      setSubmitting(true);
      const arr = Object.entries(newAnswers).map(([question_id, { selected_option_index, score: s }]) => ({ question_id, selected_option_index, score: s }));
      await onSubmit(arr);
    } else {
      setAnswers(newAnswers);
      setStep((s) => s + 1);
      setSelected(answers[questions[step + 1]?.id]?.selected_option_index ?? null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold tracking-widest text-[#e63946] uppercase">Stage 2 · {String(step + 1).padStart(2, '0')}/{questions.length}</span>
              <span className="text-xs text-gray-400">{roleProfile.archetype}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#e63946] to-rose-400 rounded-full transition-all duration-400" style={{ width: `${progress}%` }} />
            </div>
            {/* Dimension pills */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {['awareness','prompting','workflow','build','governance'].map((dim) => {
                const meta = DIMENSION_META[dim];
                const dimQs = questions.filter((dq) => dq.dimension === dim);
                const done = dimQs.filter((dq, i) => {
                  const idx = questions.findIndex((x) => x.id === dq.id);
                  return idx < step || (idx === step && selected !== null);
                }).length;
                const isCurrent = q?.dimension === dim;
                return (
                  <span key={dim} className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${isCurrent ? 'text-white' : 'text-gray-500 bg-gray-100'}`}
                    style={isCurrent ? { backgroundColor: meta.color } : {}}>
                    {meta.emoji} {done}/{dimQs.length}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white border border-[#e63946]/20 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: dimMeta.color }}>
                {dimMeta.emoji} {dimMeta.label}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">AI Capability</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-4">Tailored for: {roleProfile.archetype}</p>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-6 leading-snug">{q.text}</h2>
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`w-full flex items-start gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                    selected === idx ? 'border-[#e63946] bg-[#e63946]/5' : 'border-gray-200 hover:border-[#e63946]/40 hover:bg-gray-50'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                    selected === idx ? 'border-[#e63946] bg-[#e63946] text-white' : 'border-gray-300 text-gray-500'
                  }`}>{LETTERS[idx]}</span>
                  <span className={`text-sm leading-relaxed pt-0.5 ${selected === idx ? 'text-gray-900' : 'text-gray-600'}`}>{opt.text}</span>
                </button>
              ))}
              {/* Not sure option */}
              <button
                onClick={() => setSelected(q.options.length)}
                className={`w-full flex items-start gap-4 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                  selected === q.options.length ? 'border-gray-400 bg-gray-100' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <span className={`w-7 h-7 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                  selected === q.options.length ? 'border-gray-500 bg-gray-500 text-white' : 'border-gray-200 text-gray-400'
                }`}>{LETTERS[q.options.length]}</span>
                <span className="text-sm leading-relaxed pt-0.5 text-gray-400 italic">I'm not sure</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => { setStep((s) => s - 1); setSelected(answers[questions[step - 1]?.id]?.selected_option_index ?? null); }}
              className={`px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null || submitting}
              className="px-8 py-3 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-40"
            >
              {submitting ? 'Analysing…' : isLast ? 'Submit Assessment' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Landing Phase ─────────────────────────────────────────────────────────────
function LandingPhase({ onStart }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a0f1e] to-[#1a1f3a] pt-36 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-white/60 uppercase mb-6">AI Capability · Free Assessment</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            From AI noise to clear direction<br className="hidden sm:block" /> in 5 minutes.
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            The AI Direction Scan is a personalised, adaptive assessment that shows you how to apply AI in your work — to improve operations, sharpen analysis, stay ahead of new tools, and make faster, better decisions.
          </p>
          <button onClick={onStart} className="inline-block px-10 py-4 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold rounded-xl text-sm uppercase tracking-widest transition-colors">
            Start Your AI Direction Scan →
          </button>
        </div>
      </div>

      {/* The Problem */}
      <div className="bg-[#F1EEEA] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">The Problem</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-snug">AI is moving fast.<br />Most professionals are not.</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">New tools. New features. New platforms — every day. But most people are still asking:</p>
          <div className="space-y-3 mb-8">
            {['What actually matters for me?','Where should I start?','What should I ignore?'].map(q => (
              <div key={q} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#e63946]/10 text-[#e63946] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">?</span>
                <p className="text-base text-gray-700">{q}</p>
              </div>
            ))}
          </div>
          <div className="border-l-4 border-[#e63946] pl-5">
            <p className="text-base text-gray-700 mb-1">More information isn't the solution.</p>
            <p className="text-lg font-semibold text-gray-900">Clear direction is.</p>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">The Solution</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-6">Introducing the AI Direction Scan</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">The AI Direction Scan is a 5-minute, adaptive assessment designed to cut through noise and give you a clear, personalised direction for using AI effectively. Unlike static quizzes or generic advice, the scan:</p>
          <div className="space-y-4">
            {[
              { icon: '🎯', text: 'Adapts questions based on your role and responses' },
              { icon: '💼', text: 'Focuses on how you actually work — not theory' },
              { icon: '⚡', text: 'Identifies where AI will create the most impact for you' },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#0a0f1e] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">How It Works</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-10">A smarter way to assess AI readiness</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'You answer a short set of adaptive questions', desc: 'The scan adjusts in real time based on your role, behaviour, and priorities.' },
              { step: '02', title: 'We identify your AI direction', desc: 'Across four key areas: applying AI in operations, improving analysis and insight, staying ahead of tools and platforms, and enhancing decision-making.' },
              { step: '03', title: 'You get a clear, personalised roadmap', desc: 'No noise. No overload. Just what matters.' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-[#e63946] text-white text-sm font-bold flex items-center justify-center shrink-0">{item.step}</span>
                <div>
                  <p className="text-base font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">What You Get</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3">Your AI Direction — clearly defined</h2>
          <p className="text-base text-gray-500 mb-10">In under 5 minutes, you'll receive:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '📊', title: 'Your AI Readiness Profile', desc: 'How effectively you are currently using AI' },
              { icon: '🎯', title: 'Your Highest-Impact Focus Area', desc: 'Where AI will create the most value for you now' },
              { icon: '🔍', title: 'What to Focus On — and What to Ignore', desc: 'Cut through distractions and avoid wasted effort' },
              { icon: '📅', title: 'A Practical First Week Direction Plan', desc: 'Simple, actionable steps you can apply immediately' },
            ].map(item => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why It's Different */}
      <div className="bg-[#F1EEEA] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">Why It's Different</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-10">This is not another AI quiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-red-100">
              <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Most tools:</p>
              <ul className="space-y-3">
                {['Give generic advice','Overwhelm you with options','Focus on tools, not outcomes'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600"><span className="text-red-400 shrink-0 mt-0.5">✗</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-green-100">
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-4">The AI Direction Scan:</p>
              <ul className="space-y-3">
                {['Reflects your real working behaviour','Surfaces what actually matters','Gives you decision-grade clarity'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600"><span className="text-green-500 shrink-0 mt-0.5">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Idea */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-l-4 border-[#e63946] pl-6 text-left inline-block">
            <p className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">You don't need more AI tools.</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#e63946]">You need clearer direction.</p>
          </div>
          <p className="text-base text-gray-500 mt-8 leading-relaxed">The biggest constraint for most professionals is not access to AI — it's knowing where to apply it for real impact.</p>
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-[#0a0f1e] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">Who It's For</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '👔', title: 'Executives & Senior Leaders', desc: 'Who need to understand AI\'s strategic implications without wading through technical noise.' },
              { icon: '⚙️', title: 'Managers & Operators', desc: 'Who want to improve team performance and decision-making using AI tools.' },
              { icon: '🧭', title: 'Professionals Navigating AI Adoption', desc: 'Who want to stay ahead of AI developments relevant to their field.' },
              { icon: '✨', title: 'Anyone Using AI More Effectively', desc: 'Without the noise — seeking a structured approach to AI adoption.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">Get Started</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">Get clear on your AI direction</h2>
        <p className="text-base text-gray-500 mb-10">It takes less than 5 minutes.</p>
        <button onClick={onStart} className="inline-block px-12 py-4 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold rounded-xl text-sm uppercase tracking-widest transition-colors">
          Start Your AI Direction Scan →
        </button>
        <p className="text-xs text-gray-400 mt-8">Built on principles used in advanced capability diagnostics — adapted into a fast, individual experience.</p>
      </div>

      <Footer />
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AIAssessmentPage() {
  const router = useRouter();
  const [phase, setPhase] = useState('landing'); // landing | role | transition | capability
  const [roleProfile, setRoleProfile] = useState(null);
  const [capQuestions, setCapQuestions] = useState([]);

  const handleRoleComplete = (profile, roleAnswers) => {
    const qs = selectCapabilityQuestions(profile);
    setRoleProfile(profile);
    setCapQuestions(qs);
    sessionStorage.setItem('roleAnswers', JSON.stringify({ role_profile: profile, role_answers: roleAnswers }));
    setPhase('transition');
  };

  const handleCapabilitySubmit = async (answerArray) => {
    const { dimAvgs, overall, maturity, track } = calculateResults(answerArray, capQuestions, roleProfile);
    const results = { dimAvgs, overall, maturity, track, answers: answerArray, roleProfile };
    sessionStorage.setItem('demoResults', JSON.stringify(results));
    router.push('/ai-direction-scan/results');
  };

  if (phase === 'landing') return <><Navbar /><LandingPhase onStart={() => setPhase('role')} /></>;
  if (phase === 'role') return <RolePhase onComplete={handleRoleComplete} />;
  if (phase === 'transition') return <TransitionScreen roleProfile={roleProfile} onContinue={() => setPhase('capability')} />;
  if (phase === 'capability') return <CapabilityPhase questions={capQuestions} roleProfile={roleProfile} onSubmit={handleCapabilitySubmit} />;
  return null;
}
