'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { getAssessmentResults, downloadAssessmentPDF } from '@/lib/api/cyberAssessment';
import { calculateResultsLocally, RECOMMENDATIONS } from '@/lib/cyberAssessmentData';

const STATUS_CONFIG = {
  success: { label: 'In Good Shape',              bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', dot: 'bg-green-500' },
  warning: { label: 'Needs Improvement',          bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' },
  danger:  { label: 'Needs Immediate Attention',  bg: 'bg-red-50',   text: 'text-red-700',   border: 'border-red-200',   dot: 'bg-red-500'   },
};

const LEVEL_CONFIG = {
  'High Risk Zone':        { color: 'text-red-600',   bg: 'bg-red-50',   border: 'border-red-200',   bar: 'bg-red-500'   },
  'Developing Capability': { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-500' },
  'Good Foundation':       { color: 'text-blue-600',  bg: 'bg-blue-50',  border: 'border-blue-200',  bar: 'bg-blue-500'  },
  'Strong Readiness':      { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', bar: 'bg-green-500' },
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const rawAnswers = searchParams.get('answers');
  const companyParam = searchParams.get('company') || 'Your Organisation';

  // session from URL param, or fall back to sessionStorage (set before navigation)
  const resolvedSessionId = sessionId || (typeof window !== 'undefined' ? sessionStorage.getItem('cyber_session_id') : null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      if (sessionId) {
        try {
          const json = await getAssessmentResults(sessionId);
          setData(json);
          setLoading(false);
          return;
        } catch {}
      }
      // Fallback: client-side scoring from query params
      if (rawAnswers) {
        try {
          const answers = JSON.parse(decodeURIComponent(rawAnswers));
          const numericAnswers = {};
          Object.entries(answers).forEach(([k, v]) => { numericAnswers[Number(k)] = v; });
          const result = calculateResultsLocally(numericAnswers);
          setData({
            result: { ...result, recommendations: RECOMMENDATIONS[result.readinessLevel] },
            leadInfo: { companyName: decodeURIComponent(companyParam), fullName: '', email: '' },
          });
        } catch {
          setError('Unable to load your results. Please try the assessment again.');
        }
      } else {
        setError('No results found. Please complete the assessment first.');
      }
      setLoading(false);
    }
    load();
  }, [sessionId, rawAnswers, companyParam]);

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      await downloadAssessmentPDF(resolvedSessionId, data?.leadInfo?.companyName || 'Report');
    } catch {
      // API failed or no session — fall back to browser print
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0E2253] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-gray-500">Loading your results…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="text-base text-gray-700 mb-6">{error}</p>
          <Link href="/cyber-assessment" className="px-6 py-3 bg-[#0E2253] text-white rounded-xl text-sm font-semibold hover:bg-[#1a3570] transition-colors">
            Start Again
          </Link>
        </div>
      </div>
    );
  }

  const { result, leadInfo } = data;
  const { totalScore, maxScore, readinessLevel, domainScores, recommendations } = result;
  const scorePct = Math.round((totalScore / maxScore) * 100);
  const levelCfg = LEVEL_CONFIG[readinessLevel] || LEVEL_CONFIG['Good Foundation'];
  const recs = recommendations || RECOMMENDATIONS[readinessLevel] || {};

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0E2253] pt-32 pb-16">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-4xl">
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">Cyber Excellence · Assessment Results</p>
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-3">Cyber Readiness Mini Scorecard</h1>
          <p className="text-sm text-white/60">
            {leadInfo?.companyName && <span className="font-medium text-white/80">{leadInfo.companyName}</span>}
            {leadInfo?.fullName && <span> · {leadInfo.fullName}</span>}
            {' · '}{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 max-w-4xl">

        {/* Overall Score */}
        <div className={`rounded-2xl border ${levelCfg.border} ${levelCfg.bg} p-6 sm:p-8 mb-10`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="shrink-0">
              <div className={`text-5xl sm:text-6xl font-bold ${levelCfg.color}`}>
                {totalScore}<span className="text-2xl font-light text-gray-400">/{maxScore}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Overall Score</p>
            </div>
            <div className="flex-1">
              <p className={`text-xl sm:text-2xl font-semibold ${levelCfg.color} mb-2`}>{readinessLevel}</p>
              <div className="w-full h-3 bg-white/60 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${levelCfg.bar}`} style={{ width: `${scorePct}%` }} />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">{scorePct}% of maximum score</p>
            </div>
          </div>
        </div>

        {/* Domain Breakdown */}
        <div className="mb-10">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-5">Domain Breakdown</p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest">Domain</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest">Score</th>
                  <th className="text-right px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest hidden sm:table-cell">Status</th>
                </tr>
              </thead>
              <tbody>
                {domainScores.map((d, i) => {
                  const cfg = STATUS_CONFIG[d.status] || STATUS_CONFIG.warning;
                  return (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="px-5 py-4 text-sm font-medium text-gray-800">{d.domain}</td>
                      <td className="px-5 py-4 text-center">
                        <span className="text-sm font-bold text-gray-900">{d.score}</span>
                        <span className="text-xs text-gray-400">/{d.maxScore}</span>
                      </td>
                      <td className="px-5 py-4 text-right hidden sm:table-cell">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-10 space-y-6">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Recommendations</p>

          {recs.priorityActions?.length > 0 && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <p className="text-xs font-bold tracking-widest text-red-600 uppercase mb-4">🔴 Top Priority Actions — Next 90 Days</p>
              <ol className="space-y-3">
                {recs.priorityActions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {recs.quickWins?.length > 0 && (
            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <p className="text-xs font-bold tracking-widest text-green-700 uppercase mb-4">🟢 Quick Wins — Low Cost, High Impact</p>
              <ul className="space-y-3">
                {recs.quickWins.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recs.strategicImprovements?.length > 0 && (
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="text-xs font-bold tracking-widest text-blue-700 uppercase mb-4">🔵 Strategic Improvements — Next 6–12 Months</p>
              <ul className="space-y-3">
                {recs.strategicImprovements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-blue-500 font-bold shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="no-print flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="flex-1 sm:flex-none px-8 py-3.5 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {downloading ? (
              <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Generating…</>
            ) : '⬇ Export as PDF'}
          </button>
          <Link href="/cyber-assessment" className="flex-1 sm:flex-none px-8 py-3.5 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors text-sm text-center">
            Start Over
          </Link>
          <Link href="/cyberexcellence" className="flex-1 sm:flex-none px-8 py-3.5 border border-[#0E2253] text-[#0E2253] font-medium rounded-xl hover:bg-[#0E2253]/5 transition-colors text-sm text-center">
            Cyber Excellence →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CyberAssessmentResultsPage() {
  return (
    <>
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white; }
          .grid { display: block !important; }
        }
      `}</style>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#0E2253] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ResultsContent />
      </Suspense>
      <Footer />
    </>
  );
}
