'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { DIMENSION_META, MATURITY_PROFILES } from '@/lib/assessment/engine';
import { DIMENSIONS } from '@/lib/assessment/questionBank';

function DimBar({ score, color, delay = 0 }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { const t = setTimeout(() => setWidth(score), 100 + delay); return () => clearTimeout(t); }, [score, delay]);
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${width}%`, backgroundColor: color }} />
    </div>
  );
}

function ScoreGauge({ score }) {
  const [displayed, setDisplayed] = useState(0);
  const radius = 54;
  const circ = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circ);
  useEffect(() => {
    const t = setTimeout(() => {
      setOffset(circ - (score / 100) * circ);
      const interval = setInterval(() => {
        setDisplayed((p) => { if (p >= score) { clearInterval(interval); return score; } return p + 1; });
      }, 15);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(t);
  }, [score, circ]);

  return (
    <svg viewBox="0 0 120 120" className="w-36 h-36">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
      <circle cx="60" cy="60" r={radius} fill="none" stroke="#e63946" strokeWidth="8"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform="rotate(-90 60 60)"
        style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
      />
      <text x="60" y="55" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">{displayed}</text>
      <text x="60" y="72" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">/100</text>
    </svg>
  );
}

function ResultsContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('demoResults');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#e63946] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/50 text-sm">Loading your results…</p>
          <p className="text-white/30 text-xs mt-2">If this takes too long, <Link href="/ai-assessment" className="underline">restart the assessment</Link></p>
        </div>
      </div>
    );
  }

  const { dimAvgs, overall, maturity, track, roleProfile } = data;
  const archetype = roleProfile?.archetype || 'Professional';
  const baseLevel = maturity?.split(' ').pop() || 'Explorer';
  const profile = MATURITY_PROFILES[baseLevel] || MATURITY_PROFILES.Explorer;

  const sortedDims = [...DIMENSIONS].sort((a, b) => (dimAvgs[b] ?? 0) - (dimAvgs[a] ?? 0));
  const strongestDim = sortedDims[0];
  const weakestDim = sortedDims[sortedDims.length - 1];

  const getDimStrength = (score) => {
    if (score >= 75) return { label: 'Strong', color: 'text-green-400' };
    if (score >= 45) return { label: 'Developing', color: 'text-amber-400' };
    return { label: 'Growth Area', color: 'text-red-400' };
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Header */}
      <div className="border-b border-white/10 pt-32 pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <p className="text-xs font-bold tracking-widest text-[#e63946] uppercase mb-3">AI Capability Assessment · Results</p>
        <h1 className="text-3xl sm:text-4xl font-light text-white mb-2">Your results are ready.</h1>
        <p className="text-white/50 text-sm">{archetype} · Assessed {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 max-w-4xl space-y-8">

        {/* Score + Maturity */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <ScoreGauge score={overall} />
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">Maturity Level</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{maturity}</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-5">{profile.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
                  <p className="text-[10px] font-bold tracking-widest text-green-400 uppercase mb-1">Strength</p>
                  <p className="text-sm text-white/80">{profile.strengths}</p>
                </div>
                <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4">
                  <p className="text-[10px] font-bold tracking-widest text-red-400 uppercase mb-1">Focus Area</p>
                  <p className="text-sm text-white/80">{profile.gaps}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dimension Breakdown */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-6">Dimension Breakdown</p>
          <div className="space-y-5">
            {DIMENSIONS.map((dim, i) => {
              const meta = DIMENSION_META[dim];
              const score = dimAvgs[dim] ?? 0;
              const strength = getDimStrength(score);
              return (
                <div key={dim} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0" style={{ backgroundColor: meta.color + '22' }}>
                    {meta.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-white/80">{meta.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold ${strength.color}`}>{strength.label}</span>
                        <span className="text-sm font-bold text-white">{score}</span>
                      </div>
                    </div>
                    <DimBar score={score} color={meta.color} delay={i * 120} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-widest text-green-400 uppercase mb-3">Your Strongest Dimension</p>
            <p className="text-lg font-semibold text-white mb-1">{DIMENSION_META[strongestDim]?.emoji} {DIMENSION_META[strongestDim]?.label}</p>
            <p className="text-2xl font-bold text-green-400">{dimAvgs[strongestDim] ?? 0}<span className="text-sm font-normal text-white/40">/100</span></p>
          </div>
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-widest text-red-400 uppercase mb-3">Biggest Growth Opportunity</p>
            <p className="text-lg font-semibold text-white mb-1">{DIMENSION_META[weakestDim]?.emoji} {DIMENSION_META[weakestDim]?.label}</p>
            <p className="text-2xl font-bold text-red-400">{dimAvgs[weakestDim] ?? 0}<span className="text-sm font-normal text-white/40">/100</span></p>
          </div>
        </div>

        {/* Recommended next step */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <p className="text-[10px] font-bold tracking-widests text-white/40 uppercase mb-3">Recommended Next Step</p>
          <p className="text-base text-white/80 leading-relaxed">{profile.nextStep}</p>
        </div>

        {/* CTA */}
        <div className="bg-[#e63946] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white/80 text-sm mb-2">Your personalised roadmap is ready.</p>
          <h3 className="text-xl font-bold text-white mb-5">Start Your 20-Day AI Learning Journey</h3>
          <Link
            href="/ai-assessment/roadmap"
            className="inline-block px-10 py-3.5 bg-white text-[#e63946] font-bold rounded-xl text-sm hover:bg-white/90 transition-colors"
          >
            View My Roadmap →
          </Link>
        </div>

        <div className="flex justify-center">
          <Link href="/ai-assessment" className="text-white/40 text-xs hover:text-white/60 transition-colors">← Retake Assessment</Link>
        </div>
      </div>
    </div>
  );
}

export default function AIAssessmentResultsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#e63946] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ResultsContent />
      </Suspense>
      <Footer />
    </>
  );
}
