'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { LSC_QUESTIONS, DEFAULT_RESPONSES, SECTORS, STAGES, MOAT_TYPES, BUSINESS_MODELS, SCALING_OPTIONS, COMPOUNDING_OPTIONS, RISK_PROBABILITY_OPTIONS, RISK_IMPACT_OPTIONS } from '@/lib/vef/defaultResponses';
import { calcAllScores, calcProbability } from '@/lib/vef/scoringEngine';
import { submitVentureEvaluation } from '@/lib/api/ventureFramework';

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors bg-white";
const textareaClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors resize-none bg-white";
const labelClass = "block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest";

const STEPS = ['Venture Info', 'LSC Questions', 'Due Diligence', 'Summary', 'Export'];

function generateId() {
  return 'vef_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

// ── Venture Info Step ─────────────────────────────────────────────────────────
function VentureInfoStep({ data, onChange }) {
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Venture Information</h2>
        <p className="text-sm text-gray-500">Provide basic details about the venture you are evaluating.</p>
      </div>
      <div><label className={labelClass}>Venture Name *</label><input value={data.venture_name} onChange={e => onChange('venture_name', e.target.value)} placeholder="e.g. Acme Technologies" className={inputClass} /></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Sector *</label>
          <select value={data.sector} onChange={e => onChange('sector', e.target.value)} className={inputClass}>
            <option value="">Select sector</option>
            {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Stage *</label>
          <select value={data.stage} onChange={e => onChange('stage', e.target.value)} className={inputClass}>
            <option value="">Select stage</option>
            {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div><label className={labelClass}>Geography</label><input value={data.geography} onChange={e => onChange('geography', e.target.value)} placeholder="e.g. UK, Europe" className={inputClass} /></div>
      </div>
      <div><label className={labelClass}>Venture Description</label><textarea rows={4} value={data.venture_description} onChange={e => onChange('venture_description', e.target.value)} placeholder="Brief description of what the venture does and the problem it solves…" className={textareaClass} /></div>
    </div>
  );
}

// ── LSC Questions Step ────────────────────────────────────────────────────────
function LSCStep({ responses, onChange }) {
  const [activeQ, setActiveQ] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (key) => setOpenAccordions(p => ({ ...p, [key]: !p[key] }));

  const q = LSC_QUESTIONS[activeQ];
  const qData = responses.lsc[q.id] || {};

  const update = (field, value) => {
    onChange('lsc', { ...responses.lsc, [q.id]: { ...(responses.lsc[q.id] || {}), [field]: value } });
  };

  const isComplete = (qId) => {
    const d = responses.lsc[qId] || {};
    return d.required_input?.trim() && d.verdict;
  };

  const VERDICT_COLORS = { green: 'border-green-500 bg-green-50 text-green-800', amber: 'border-amber-500 bg-amber-50 text-amber-800', red: 'border-red-500 bg-red-50 text-red-800' };
  const WARNING_COLORS = { green: '', amber: 'bg-amber-50 border-amber-200 text-amber-800', red: 'bg-red-50 border-red-200 text-red-800' };

  const showExtraField = q.extraField && q.extraField.condition.includes(qData.verdict);
  const showWarning = q.warning && qData.verdict === q.warning.condition;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Tab row */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {LSC_QUESTIONS.map((lq, i) => (
          <button key={lq.id} onClick={() => setActiveQ(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${activeQ === i ? 'bg-[#0E2253] text-white border-[#0E2253]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#0E2253]'}`}>
            {isComplete(lq.id) && <span className="text-green-400">✓</span>}
            {lq.id}: {lq.title.split(' ').slice(0, 3).join(' ')}…
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{q.id}: {q.title}</h2>
        <p className="text-xs text-gray-400 mb-6">Complete all fields on this question before proceeding.</p>

        {/* Checklist */}
        <div className="mb-4">
          <button onClick={() => toggleAccordion('checklist')} className="flex items-center gap-2 text-xs font-bold text-[#0E2253] uppercase tracking-widest mb-2">
            <span>{openAccordions.checklist ? '▲' : '▼'}</span> Interrogation Checklist
          </button>
          {openAccordions.checklist && (
            <ul className="space-y-1.5 pl-3 border-l-2 border-[#0E2253]/20">
              {q.checklist.map((item, i) => <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-[#0E2253]">→</span>{item}</li>)}
            </ul>
          )}
        </div>

        {/* Red/Green Flags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <button onClick={() => toggleAccordion('red')} className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2 flex items-center gap-1">
              <span>{openAccordions.red ? '▲' : '▼'}</span> 🚩 Red Flags
            </button>
            {openAccordions.red && <ul className="space-y-1">{q.redFlags.map((f, i) => <li key={i} className="text-xs text-gray-600 flex gap-1.5"><span className="text-red-400 shrink-0">·</span>{f}</li>)}</ul>}
          </div>
          <div>
            <button onClick={() => toggleAccordion('green')} className="text-xs font-bold text-green-600 uppercase tracking-widests mb-2 flex items-center gap-1">
              <span>{openAccordions.green ? '▲' : '▼'}</span> ✅ Green Flags
            </button>
            {openAccordions.green && <ul className="space-y-1">{q.greenFlags.map((f, i) => <li key={i} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-400 shrink-0">·</span>{f}</li>)}</ul>}
          </div>
        </div>

        {/* Required Input */}
        <div className="mb-5">
          <label className={labelClass}>Required Input *</label>
          <p className="text-xs text-gray-400 mb-2">{q.prompt}</p>
          <textarea rows={4} value={qData.required_input || ''} onChange={e => update('required_input', e.target.value)} placeholder="Provide specific, evidence-based response…" className={textareaClass} />
        </div>

        {/* Verdict */}
        <div className="mb-5">
          <label className={labelClass}>Verdict *</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {q.verdicts.map(v => (
              <button key={v.value} onClick={() => update('verdict', v.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${qData.verdict === v.value ? VERDICT_COLORS[v.color] : 'border-gray-200 hover:border-gray-300 bg-white'}`}>
                <p className="text-sm font-bold mb-1">{v.label}</p>
                <p className="text-xs text-gray-500">{v.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Warning Banner */}
        {showWarning && (
          <div className={`rounded-xl border p-4 mb-5 text-sm ${WARNING_COLORS[q.verdicts.find(v => v.value === qData.verdict)?.color] || 'bg-amber-50 border-amber-200 text-amber-800'}`}>
            ⚠ {q.warning.text}
          </div>
        )}

        {/* Conditional Extra Field */}
        {showExtraField && (
          <div className="mb-5">
            <label className={labelClass}>{q.extraField.label}</label>
            <textarea rows={3} value={qData[q.extraField.key] || ''} onChange={e => update(q.extraField.key, e.target.value)} placeholder="Provide your plan…" className={textareaClass} />
          </div>
        )}

        {/* Score Slider */}
        <div className="mb-5">
          <label className={labelClass}>Signal Strength: {qData.score ?? 5}/10</label>
          <input type="range" min={0} max={10} value={qData.score ?? 5} onChange={e => update('score', Number(e.target.value))}
            className="w-full accent-[#0E2253]" />
        </div>

        {/* Evidence + Confidence */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className={labelClass}>Evidence Strength</label>
            <select value={qData.evidence_strength || ''} onChange={e => update('evidence_strength', e.target.value)} className={inputClass}>
              <option value="">Select…</option>
              {['Strong','Moderate','Weak','None'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Confidence Level</label>
            <select value={qData.confidence || ''} onChange={e => update('confidence', e.target.value)} className={inputClass}>
              <option value="">Select…</option>
              {['High','Medium','Low'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className={labelClass}>Additional Notes</label>
          <textarea rows={2} value={qData.notes || ''} onChange={e => update('notes', e.target.value)} placeholder="Additional context or observations…" className={textareaClass} />
        </div>
      </div>
    </div>
  );
}

// ── Due Diligence Step ────────────────────────────────────────────────────────
function DDStep({ responses, onChange }) {
  const [activeSection, setActiveSection] = useState('A');
  const update = (section, field, value) => {
    onChange('dd', { ...responses.dd, [section]: { ...(responses.dd[section] || {}), [field]: value } });
  };
  const updateNested = (section, key, field, value) => {
    const sec = responses.dd[section] || {};
    onChange('dd', { ...responses.dd, [section]: { ...sec, [key]: { ...(sec[key] || {}), [field]: value } } });
  };
  const dd = responses.dd || {};

  const SECTIONS = ['A','B','C','D','E','F','G','H'];
  const SECTION_LABELS = { A: 'Validation', B: 'Market', C: 'Competition', D: 'Moat', E: 'Model', F: 'Economics', G: 'Risks', H: 'Probability' };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Section Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {SECTIONS.map(s => (
          <button key={s} onClick={() => setActiveSection(s)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${activeSection === s ? 'bg-[#0E2253] text-white border-[#0E2253]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#0E2253]'}`}>
            {s} <span className="hidden sm:inline text-xs font-normal">· {SECTION_LABELS[s]}</span>
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">

        {activeSection === 'A' && <>
          <h3 className="text-lg font-bold text-gray-900">A. Problem Validation</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className={labelClass}>Customer Interviews Conducted</label><input type="number" min={0} value={dd.A?.interviews_count || 0} onChange={e => update('A','interviews_count', Number(e.target.value))} className={inputClass} /></div>
            <div>
              <label className={labelClass}>Problem Severity</label>
              <select value={dd.A?.problem_severity || ''} onChange={e => update('A','problem_severity',e.target.value)} className={inputClass}>
                <option value="">Select…</option>{['Critical','Serious','Moderate','Minor'].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div><label className={labelClass}>Cost of the Problem</label><input value={dd.A?.problem_cost||''} onChange={e=>update('A','problem_cost',e.target.value)} placeholder="$X per month, Y hours wasted..." className={inputClass}/></div>
          <div><label className={labelClass}>Problem Frequency</label><input value={dd.A?.problem_frequency||''} onChange={e=>update('A','problem_frequency',e.target.value)} placeholder="Daily, weekly..." className={inputClass}/></div>
          <div><label className={labelClass}>Validation Evidence & Notes</label><textarea rows={4} value={dd.A?.validation_notes||''} onChange={e=>update('A','validation_notes',e.target.value)} placeholder="Interview insights, quotes, patterns..." className={textareaClass}/></div>
        </>}

        {activeSection === 'B' && <>
          <h3 className="text-lg font-bold text-gray-900">B. Market Opportunity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label className={labelClass}>TAM</label><input value={dd.B?.tam||''} onChange={e=>update('B','tam',e.target.value)} placeholder="$10B" className={inputClass}/></div>
            <div><label className={labelClass}>SAM</label><input value={dd.B?.sam||''} onChange={e=>update('B','sam',e.target.value)} placeholder="$500M" className={inputClass}/></div>
            <div><label className={labelClass}>SOM</label><input value={dd.B?.som||''} onChange={e=>update('B','som',e.target.value)} placeholder="$50M" className={inputClass}/></div>
          </div>
          <div><label className={labelClass}>Annual Market Growth Rate (%)</label><input type="number" value={dd.B?.market_growth_rate||0} onChange={e=>update('B','market_growth_rate',Number(e.target.value))} className={inputClass}/></div>
          <div><label className={labelClass}>Market Analysis Notes</label><textarea rows={3} value={dd.B?.market_notes||''} onChange={e=>update('B','market_notes',e.target.value)} placeholder="Sources, methodology, assumptions..." className={textareaClass}/></div>
        </>}

        {activeSection === 'C' && <>
          <h3 className="text-lg font-bold text-gray-900">C. Competitive Landscape</h3>
          <div><label className={labelClass}>Direct Competitors</label><textarea rows={2} value={dd.C?.direct_competitors||''} onChange={e=>update('C','direct_competitors',e.target.value)} placeholder="Same problem, same segment, same model..." className={textareaClass}/></div>
          <div><label className={labelClass}>Indirect Competitors</label><textarea rows={2} value={dd.C?.indirect_competitors||''} onChange={e=>update('C','indirect_competitors',e.target.value)} placeholder="Different approach to same problem..." className={textareaClass}/></div>
          <div><label className={labelClass}>Status Quo Alternative</label><textarea rows={2} value={dd.C?.status_quo||''} onChange={e=>update('C','status_quo',e.target.value)} placeholder="What customers do TODAY without this product..." className={textareaClass}/></div>
          <div><label className={labelClass}>Key Differentiation</label><textarea rows={2} value={dd.C?.differentiation||''} onChange={e=>update('C','differentiation',e.target.value)} placeholder="Why will customers choose this over alternatives?" className={textareaClass}/></div>
        </>}

        {activeSection === 'D' && <>
          <h3 className="text-lg font-bold text-gray-900">D. Defensibility & Moat</h3>
          <div>
            <label className={labelClass}>Moat Mechanisms Present</label>
            <div className="flex flex-wrap gap-2">
              {MOAT_TYPES.map(m => {
                const checked = (dd.D?.moat_types||[]).includes(m);
                return (
                  <button key={m} onClick={() => {
                    const current = dd.D?.moat_types || [];
                    update('D','moat_types', checked ? current.filter(x=>x!==m) : [...current, m]);
                  }} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${checked ? 'bg-[#0E2253] text-white border-[#0E2253]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#0E2253]'}`}>{m}</button>
                );
              })}
            </div>
          </div>
          <div>
            <label className={labelClass}>Moat Trajectory</label>
            <select value={dd.D?.compounding_vs_decaying||''} onChange={e=>update('D','compounding_vs_decaying',e.target.value)} className={inputClass}>
              <option value="">Select…</option>{COMPOUNDING_OPTIONS.map(o=><option key={o}>{o}</option>)}
            </select>
          </div>
          <div><label className={labelClass}>When Does Moat Become Durable?</label><input value={dd.D?.moat_timeline||''} onChange={e=>update('D','moat_timeline',e.target.value)} placeholder="e.g. 18–24 months after launch" className={inputClass}/></div>
          <div><label className={labelClass}>Cost for Competitor to Replicate</label><input value={dd.D?.replication_cost||''} onChange={e=>update('D','replication_cost',e.target.value)} placeholder="e.g. $10M+ and 3 years of data accumulation" className={inputClass}/></div>
          <div><label className={labelClass}>Moat Building Plan</label><textarea rows={3} value={dd.D?.moat_plan||''} onChange={e=>update('D','moat_plan',e.target.value)} placeholder="Steps to strengthen or build moat over next 18 months..." className={textareaClass}/></div>
        </>}

        {activeSection === 'E' && <>
          <h3 className="text-lg font-bold text-gray-900">E. Business Model & Scaling</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Primary Business Model</label>
              <select value={dd.E?.model_type||''} onChange={e=>update('E','model_type',e.target.value)} className={inputClass}>
                <option value="">Select…</option>{BUSINESS_MODELS.map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>How Does the Model Scale?</label>
              <select value={dd.E?.scaling_behavior||''} onChange={e=>update('E','scaling_behavior',e.target.value)} className={inputClass}>
                <option value="">Select…</option>{SCALING_OPTIONS.map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div><label className={labelClass}>Revenue Streams</label><textarea rows={2} value={dd.E?.revenue_streams||''} onChange={e=>update('E','revenue_streams',e.target.value)} placeholder="Breakdown of all revenue streams..." className={textareaClass}/></div>
          <div><label className={labelClass}>Pricing Strategy & Validation</label><textarea rows={2} value={dd.E?.pricing_strategy||''} onChange={e=>update('E','pricing_strategy',e.target.value)} className={textareaClass}/></div>
          <div><label className={labelClass}>Path to Profitability</label><textarea rows={2} value={dd.E?.profitability_path||''} onChange={e=>update('E','profitability_path',e.target.value)} className={textareaClass}/></div>
        </>}

        {activeSection === 'F' && <>
          <h3 className="text-lg font-bold text-gray-900">F. Unit Economics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {key:'cac', label:'CAC ($)', target: null},
              {key:'ltv', label:'LTV ($)', target: null},
              {key:'ltv_cac_ratio', label:'LTV:CAC Ratio', target: '>3:1', good: v=>v>=3},
              {key:'payback_months', label:'Payback (months)', target: '<12 months', good: v=>v>0&&v<=12},
              {key:'monthly_churn', label:'Monthly Churn (%)', target: '<2%', good: v=>v>0&&v<2},
              {key:'nrr', label:'NRR (%)', target: '>100%', good: v=>v>=100},
            ].map(f => (
              <div key={f.key}>
                <label className={labelClass}>{f.label}</label>
                {f.target && <p className="text-[10px] text-gray-400 mb-1">Target: {f.target}</p>}
                <input type="number" value={dd.F?.[f.key]||0} onChange={e=>update('F',f.key,Number(e.target.value))}
                  className={`${inputClass} ${f.good && (f.good(dd.F?.[f.key]||0) ? '!border-green-400' : dd.F?.[f.key] > 0 ? '!border-amber-400' : '')}`}/>
              </div>
            ))}
          </div>
          <div><label className={labelClass}>Stress Test Notes</label><textarea rows={3} value={dd.F?.stress_test_notes||''} onChange={e=>update('F','stress_test_notes',e.target.value)} placeholder="What happens if CAC doubles? If churn triples?" className={textareaClass}/></div>
        </>}

        {activeSection === 'G' && <>
          <h3 className="text-lg font-bold text-gray-900">G. Risk Assessment</h3>
          {[1,2,3,4,5].map(n => {
            const rk = `risk_${n}`;
            const r = dd.G?.[rk] || {};
            return (
              <div key={n} className="border border-gray-100 rounded-xl p-4 space-y-3">
                <p className="text-xs font-bold text-[#0E2253] uppercase">Risk {n}</p>
                <input value={r.description||''} onChange={e=>updateNested('G',rk,'description',e.target.value)} placeholder="Risk description…" className={inputClass}/>
                <div className="grid grid-cols-2 gap-3">
                  <select value={r.probability||''} onChange={e=>updateNested('G',rk,'probability',e.target.value)} className={inputClass}>
                    <option value="">Probability…</option>{RISK_PROBABILITY_OPTIONS.map(o=><option key={o}>{o}</option>)}
                  </select>
                  <select value={r.impact||''} onChange={e=>updateNested('G',rk,'impact',e.target.value)} className={inputClass}>
                    <option value="">Impact…</option>{RISK_IMPACT_OPTIONS.map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <textarea rows={2} value={r.mitigation||''} onChange={e=>updateNested('G',rk,'mitigation',e.target.value)} placeholder="Mitigation strategy…" className={textareaClass}/>
              </div>
            );
          })}
        </>}

        {activeSection === 'H' && <>
          <h3 className="text-lg font-bold text-gray-900">H. Probability of Success</h3>
          <div>
            <label className={labelClass}>Base Rate (%)</label>
            <input type="number" value={dd.H?.base_rate??10} onChange={e=>update('H','base_rate',Number(e.target.value))} className={inputClass}/>
            <p className="text-xs text-gray-400 mt-1">Default: 10% (typical seed-stage base rate)</p>
          </div>
          {/* Live Calculation */}
          {(() => {
            const prob = calcProbability(dd.H || {});
            return (
              <div className="bg-[#0E2253]/5 border border-[#0E2253]/20 rounded-xl p-4">
                <p className="text-xs font-bold text-[#0E2253] uppercase mb-2">Live Probability Calculation</p>
                <p className="text-2xl font-bold text-[#0E2253]">{prob.central}% <span className="text-sm font-normal text-gray-500">Central</span></p>
                <p className="text-sm text-gray-500">Range: {prob.low}% – {prob.high}%</p>
              </div>
            );
          })()}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-green-600 uppercase mb-2">Positive Adjustments</p>
              {[
                {key:'domain_expertise', label:'+5% Domain Expertise'},
                {key:'paying_customers', label:'+10% Paying Customers'},
                {key:'structural_moat', label:'+5% Structural Moat'},
                {key:'market_growth', label:'+5% Fast-Growing Market'},
                {key:'strong_team', label:'+5% Strong Team'},
                {key:'validated_economics', label:'+5% Validated Unit Economics'},
              ].map(f => (
                <label key={f.key} className="flex items-center gap-2 py-1.5 cursor-pointer">
                  <input type="checkbox" checked={dd.H?.positive_adjustments?.[f.key]||false}
                    onChange={e => update('H','positive_adjustments',{...(dd.H?.positive_adjustments||{}), [f.key]: e.target.checked})}
                    className="w-4 h-4"/>
                  <span className="text-xs text-gray-700">{f.label}</span>
                </label>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-red-600 uppercase mb-2">Negative Adjustments</p>
              {[
                {key:'no_technical_cofounder', label:'−5% No Technical Co-Founder'},
                {key:'crowded_market', label:'−5% Crowded Market'},
                {key:'unproven_economics', label:'−5% Unproven Economics'},
                {key:'untested_model', label:'−10% Untested Business Model'},
                {key:'no_moat', label:'−5% No Identified Moat'},
                {key:'timing_risk', label:'−5% Timing Risk'},
              ].map(f => (
                <label key={f.key} className="flex items-center gap-2 py-1.5 cursor-pointer">
                  <input type="checkbox" checked={dd.H?.negative_adjustments?.[f.key]||false}
                    onChange={e => update('H','negative_adjustments',{...(dd.H?.negative_adjustments||{}), [f.key]: e.target.checked})}
                    className="w-4 h-4"/>
                  <span className="text-xs text-gray-700">{f.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div><label className={labelClass}>Probability Rationale</label><textarea rows={3} value={dd.H?.probability_notes||''} onChange={e=>update('H','probability_notes',e.target.value)} placeholder="Explain your probability assessment…" className={textareaClass}/></div>
        </>}

      </div>
    </div>
  );
}

// ── Summary Step ──────────────────────────────────────────────────────────────
function SummaryStep({ evaluation, responses, onChange }) {
  const scores = calcAllScores(responses);
  const REC = { INVEST: { bg: 'bg-green-600', text: 'text-white' }, PIVOT: { bg: 'bg-amber-500', text: 'text-white' }, DISCARD: { bg: 'bg-red-600', text: 'text-white' } };
  const rc = REC[scores.recommendation] || REC.PIVOT;
  const DIMS = [
    { key: 'problem_score', label: 'Problem Validation' },
    { key: 'solution_score', label: 'Solution Quality' },
    { key: 'commercial_score', label: 'Commercial Viability' },
    { key: 'moat_score', label: 'Defensibility' },
    { key: 'team_timing_score', label: 'Team & Timing' },
  ];
  const scoreColor = (s) => s >= 70 ? 'bg-green-500' : s >= 40 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Recommendation */}
      <div className={`${rc.bg} rounded-2xl p-6 sm:p-8`}>
        <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-2">Recommendation</p>
        <h2 className={`text-4xl font-bold ${rc.text} mb-3`}>{scores.recommendation}</h2>
        <p className={`text-sm ${rc.text} opacity-90 leading-relaxed`}>{scores.recommendation_reason}</p>
      </div>

      {/* Dimension Scores */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-5">Dimension Scores</p>
        <div className="space-y-4">
          {DIMS.map(d => (
            <div key={d.key}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-gray-800">{d.label}</span>
                <span className="text-sm font-bold text-gray-900 font-mono">{scores[d.key]}</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${scoreColor(scores[d.key])}`} style={{ width: `${scores[d.key]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Probability */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Probability of Success</p>
        <div className="flex items-end gap-3">
          <p className="text-5xl font-bold text-[#0E2253]">{scores.probability_central}%</p>
          <p className="text-sm text-gray-500 mb-1">Range: {scores.probability_range_low}% – {scores.probability_range_high}%</p>
        </div>
      </div>

      {/* LSC Verdict Table */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead><tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase">Question</th>
            <th className="text-center px-5 py-3 text-xs font-bold text-gray-500 uppercase">Verdict</th>
            <th className="text-center px-5 py-3 text-xs font-bold text-gray-500 uppercase">Score</th>
          </tr></thead>
          <tbody>
            {LSC_QUESTIONS.map((q, i) => {
              const d = responses?.lsc?.[q.id] || {};
              const vColor = d.verdict === 'REAL' || d.verdict === 'TRANSFORMATIVE' || d.verdict === 'STRUCTURALLY SOUND' || d.verdict === 'DURABLE MOAT' || d.verdict === 'RIGHT TEAM, RIGHT TIME' ? 'text-green-700 bg-green-50' : d.verdict && (d.verdict === 'MANUFACTURED' || d.verdict === 'NEGLIGIBLE' || d.verdict === 'BROKEN' || d.verdict === 'EXPOSED') ? 'text-red-700 bg-red-50' : 'text-amber-700 bg-amber-50';
              return (
                <tr key={q.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 text-sm text-gray-800">{q.id}: {q.title}</td>
                  <td className="px-5 py-3 text-center"><span className={`text-[10px] font-bold px-2 py-1 rounded-full ${d.verdict ? vColor : 'text-gray-400 bg-gray-100'}`}>{d.verdict || '—'}</span></td>
                  <td className="px-5 py-3 text-center text-sm font-mono font-bold text-gray-700">{d.score ?? '—'}/10</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Fragile Assumptions + Conditions */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
        <div>
          <label className={labelClass}>Fragile Assumptions</label>
          <p className="text-xs text-gray-400 mb-2">List 3–5 assumptions that, if wrong, would fundamentally change your assessment.</p>
          <textarea rows={3} value={responses?.fragile_assumptions||''} onChange={e => onChange('fragile_assumptions', e.target.value)} className={textareaClass}/>
        </div>
        <div>
          <label className={labelClass}>Conditions to Invest</label>
          <p className="text-xs text-gray-400 mb-2">Describe specific milestones or data points required before investing.</p>
          <textarea rows={3} value={responses?.conditions_to_invest||''} onChange={e => onChange('conditions_to_invest', e.target.value)} className={textareaClass}/>
        </div>
      </div>
    </div>
  );
}

// ── Export Step ───────────────────────────────────────────────────────────────
function ExportStep({ evaluation }) {
  const exportRef = useRef(null);
  const [exporting, setExporting] = useState(false);
  const scores = calcAllScores(evaluation.responses);

  const handleExport = async () => {
    if (!exportRef.current) return;
    setExporting(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { default: jsPDF } = await import('jspdf');
      const canvas = await html2canvas(exportRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height * w) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, w, h);
      pdf.save(`${(evaluation.venture_name || 'venture').replace(/\s+/g, '-')}-LSC-evaluation.pdf`);
    } catch (e) { alert('PDF export failed. Please try again.'); }
    finally { setExporting(false); }
  };

  const REC_COLOR = { INVEST: '#16a34a', PIVOT: '#d97706', DISCARD: '#dc2626' };
  const DIMS = [
    { key: 'problem_score', label: 'Problem Validation' },
    { key: 'solution_score', label: 'Solution Quality' },
    { key: 'commercial_score', label: 'Commercial Viability' },
    { key: 'moat_score', label: 'Defensibility' },
    { key: 'team_timing_score', label: 'Team & Timing' },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Export Report</h2>
          <p className="text-sm text-gray-500">Preview your evaluation report and export as PDF.</p>
        </div>
        <button onClick={handleExport} disabled={exporting}
          className="px-8 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm disabled:opacity-60 flex items-center gap-2">
          {exporting ? <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>Exporting…</> : '⬇ Export PDF'}
        </button>
      </div>

      {/* PDF Preview */}
      <div ref={exportRef} className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <p className="text-[10px] font-bold tracking-widest text-[#0E2253] uppercase mb-1">LSC Venture Evaluation Framework</p>
          <h1 className="text-2xl font-bold text-gray-900">{evaluation.venture_name || 'Untitled Venture'}</h1>
          <p className="text-sm text-gray-500 mt-1">{evaluation.sector} · {evaluation.stage} · {evaluation.geography}</p>
          <p className="text-xs text-gray-400 mt-1">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        {/* Recommendation */}
        <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: REC_COLOR[scores.recommendation] + '15', border: `2px solid ${REC_COLOR[scores.recommendation]}33` }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: REC_COLOR[scores.recommendation] }}>Recommendation</p>
          <p className="text-2xl font-bold mb-2" style={{ color: REC_COLOR[scores.recommendation] }}>{scores.recommendation}</p>
          <p className="text-sm text-gray-700">{scores.recommendation_reason}</p>
        </div>

        {/* Scores */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">Dimension Scores</p>
          <div className="space-y-2.5">
            {DIMS.map(d => (
              <div key={d.key} className="flex items-center gap-3">
                <span className="text-xs text-gray-600 w-36 shrink-0">{d.label}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${scores[d.key]}%`, backgroundColor: scores[d.key] >= 70 ? '#16a34a' : scores[d.key] >= 40 ? '#d97706' : '#dc2626' }}/>
                </div>
                <span className="text-xs font-bold text-gray-700 w-8 text-right font-mono">{scores[d.key]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Probability */}
        <div className="bg-[#0E2253]/5 rounded-xl p-4 mb-6">
          <p className="text-[10px] font-bold text-[#0E2253] uppercase mb-1">Probability of Success</p>
          <p className="text-xl font-bold text-[#0E2253]">{scores.probability_central}% <span className="text-sm font-normal text-gray-500">({scores.probability_range_low}%–{scores.probability_range_high}%)</span></p>
        </div>

        {/* LSC Verdicts */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">LSC Question Verdicts</p>
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-200"><th className="text-left py-1.5 text-xs text-gray-500">Question</th><th className="text-center py-1.5 text-xs text-gray-500">Verdict</th><th className="text-center py-1.5 text-xs text-gray-500">Score</th></tr></thead>
            <tbody>
              {LSC_QUESTIONS.map(q => {
                const d = evaluation.responses?.lsc?.[q.id] || {};
                return (
                  <tr key={q.id} className="border-b border-gray-100">
                    <td className="py-1.5 text-gray-700">{q.id}: {q.title}</td>
                    <td className="text-center py-1.5 text-xs font-bold text-gray-600">{d.verdict || '—'}</td>
                    <td className="text-center py-1.5 text-xs font-mono text-gray-600">{d.score ?? '—'}/10</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Fragile Assumptions / Conditions */}
        {evaluation.responses?.fragile_assumptions && (
          <div className="mb-4 p-4 bg-gray-50 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Fragile Assumptions</p>
            <p className="text-xs text-gray-600">{evaluation.responses.fragile_assumptions}</p>
          </div>
        )}
        {evaluation.responses?.conditions_to_invest && (
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Conditions to Invest</p>
            <p className="text-xs text-gray-600">{evaluation.responses.conditions_to_invest}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Wizard Page ──────────────────────────────────────────────────────────
export default function NewEvaluationPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [evalId] = useState(() => generateId());
  const [evaluation, setEvaluation] = useState({
    id: evalId,
    lead_email: '',
    venture_name: '', sector: '', stage: '', geography: '', venture_description: '',
    status: 'draft',
    responses: JSON.parse(JSON.stringify(DEFAULT_RESPONSES)),
    scores: {},
    created_date: new Date().toISOString(),
    updated_date: new Date().toISOString(),
  });

  useEffect(() => {
    const email = localStorage.getItem('vef_lead_email');
    if (!email) { router.push('/venture-framework'); return; }
    setEvaluation(e => ({ ...e, lead_email: email }));
  }, [router]);

  const saveToLocalStorage = (data) => {
    setSaving(true);
    const all = JSON.parse(localStorage.getItem('vef_evaluations') || '[]');
    const idx = all.findIndex(e => e.id === data.id);
    const updated = { ...data, updated_date: new Date().toISOString() };
    if (idx >= 0) all[idx] = updated; else all.push(updated);
    localStorage.setItem('vef_evaluations', JSON.stringify(all));

    // Sync to backend (non-blocking)
    submitVentureEvaluation({
      id: updated.id,
      lead_email: updated.lead_email || localStorage.getItem('vef_lead_email') || '',
      venture_name: updated.venture_name || updated.responses?.ventureInfo?.name || '',
      sector: updated.responses?.ventureInfo?.sector || '',
      stage: updated.responses?.ventureInfo?.stage || '',
      geography: updated.responses?.ventureInfo?.geography || '',
      venture_description: updated.responses?.ventureInfo?.description || '',
      status: updated.status || 'draft',
    }).catch(() => {});

    setTimeout(() => { setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000); }, 300);
  };

  const updateField = (field, value) => {
    const next = { ...evaluation, [field]: value };
    setEvaluation(next);
    saveToLocalStorage(next);
  };

  const updateResponses = (section, value) => {
    const next = { ...evaluation, responses: { ...evaluation.responses, [section]: value } };
    setEvaluation(next);
    saveToLocalStorage(next);
  };

  const handleComplete = () => {
    const scores = calcAllScores(evaluation.responses);
    const next = { ...evaluation, status: 'completed', scores, completed_at: new Date().toISOString() };
    setEvaluation(next);
    saveToLocalStorage(next);
    setStep(4);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-6 overflow-x-auto">
              {STEPS.map((s, i) => (
                <button key={i} onClick={() => i < step ? setStep(i) : null}
                  className={`flex items-center gap-2 text-sm whitespace-nowrap transition-colors ${step === i ? 'text-[#0E2253] font-bold' : i < step ? 'text-gray-600 hover:text-[#0E2253] cursor-pointer' : 'text-gray-300 cursor-default'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === i ? 'bg-[#0E2253] text-white' : i < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    {i < step ? '✓' : i + 1}
                  </span>
                  {s}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 shrink-0 ml-4">{saving ? 'Saving…' : saved ? '✓ Saved' : ''}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-10 max-w-6xl">
          {step === 0 && <VentureInfoStep data={evaluation} onChange={updateField} />}
          {step === 1 && <LSCStep responses={evaluation.responses} onChange={updateResponses} />}
          {step === 2 && <DDStep responses={evaluation.responses} onChange={updateResponses} />}
          {step === 3 && <SummaryStep evaluation={evaluation} responses={evaluation.responses} onChange={(f, v) => { const n = {...evaluation.responses, [f]: v}; const next = {...evaluation, responses: n}; setEvaluation(next); saveToLocalStorage(next); }} />}
          {step === 4 && <ExportStep evaluation={evaluation} />}
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <button onClick={() => step > 0 ? setStep(s => s - 1) : router.push('/venture-framework/dashboard')}
              className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              ← {step === 0 ? 'Dashboard' : 'Back'}
            </button>
            {step < 3 && (
              <button onClick={() => setStep(s => s + 1)} className="px-8 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm">
                Next →
              </button>
            )}
            {step === 3 && (
              <button onClick={handleComplete} className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-sm">
                Complete & Export →
              </button>
            )}
            {step === 4 && (
              <button onClick={() => router.push('/venture-framework/dashboard')} className="px-8 py-3 bg-[#0E2253] text-white font-semibold rounded-xl hover:bg-[#1a3570] transition-colors text-sm">
                Back to Dashboard →
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
