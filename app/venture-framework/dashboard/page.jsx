'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';

const REC_STYLES = {
  INVEST: 'bg-green-100 text-green-700 border border-green-200',
  PIVOT: 'bg-amber-100 text-amber-700 border border-amber-200',
  DISCARD: 'bg-red-100 text-red-700 border border-red-200',
};

export default function VEFDashboard() {
  const [firstName, setFirstName] = useState('');
  const [evaluations, setEvaluations] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('vef_lead_email');
    const name = localStorage.getItem('vef_lead_name') || '';
    if (!email) { router.push('/venture-framework'); return; }
    setFirstName(name);
    const stored = JSON.parse(localStorage.getItem('vef_evaluations') || '[]');
    const mine = stored.filter(e => e.lead_email === email);
    setEvaluations(mine.sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date)));
  }, [router]);

  const filtered = evaluations.filter(e =>
    e.venture_name?.toLowerCase().includes(search.toLowerCase()) ||
    e.sector?.toLowerCase().includes(search.toLowerCase()) ||
    e.stage?.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: evaluations.length,
    drafts: evaluations.filter(e => e.status === 'draft').length,
    completed: evaluations.filter(e => e.status === 'completed').length,
  };

  const formatDate = (iso) => {
    if (!iso) return '—';
    const d = new Date(iso);
    const diff = Math.floor((Date.now() - d) / 86400000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#0E2253] pt-32 pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">Venture Evaluation Framework</p>
          <h1 className="text-2xl sm:text-3xl font-light text-white">
            Welcome back{firstName ? `, ${firstName}` : ''}.
          </h1>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-10 max-w-6xl">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Total Evaluations', value: stats.total },
              { label: 'Drafts', value: stats.drafts },
              { label: 'Completed', value: stats.completed },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <p className="text-2xl font-bold text-[#0E2253]">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Search + New */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Search by venture name, sector, or stage…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0E2253] bg-white"
            />
            <Link
              href="/venture-framework/evaluation/new"
              className="px-6 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm whitespace-nowrap text-center"
            >
              + New Evaluation
            </Link>
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <p className="text-4xl mb-4">📋</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No evaluations yet</h3>
              <p className="text-sm text-gray-500 mb-6">Create your first venture evaluation to get started.</p>
              <Link href="/venture-framework/evaluation/new" className="px-8 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm">
                Create First Evaluation →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(ev => (
                <Link key={ev.id} href={`/venture-framework/evaluation/${ev.id}`} className="block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 flex-1 mr-2">{ev.venture_name || 'Untitled Venture'}</h3>
                    {ev.status === 'completed' && ev.scores?.recommendation && (
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${REC_STYLES[ev.scores.recommendation]}`}>
                        {ev.scores.recommendation}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {ev.sector && <span className="text-[10px] font-bold text-[#0E2253] bg-[#0E2253]/8 px-2 py-0.5 rounded-full">{ev.sector}</span>}
                    {ev.stage && <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{ev.stage}</span>}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ev.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {ev.status === 'completed' ? 'Completed' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">Updated {formatDate(ev.updated_date)}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
