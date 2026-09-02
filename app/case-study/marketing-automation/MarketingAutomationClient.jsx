'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import {
  AIRCRAFT_LIST, FAULT_PRESETS, DOCUMENTATION_SILOS, MOCK_DIAGNOSES
} from '@/lib/caseStudy/aviationData';

const delay = (ms) => new Promise(r => setTimeout(r, ms));

const NAV_ITEMS = [
  { id: 'context',   title: 'Context' },
  { id: 'problem',   title: 'The Problem' },
  { id: 'approach',  title: "LSC's Approach" },
  { id: 'outcomes',  title: 'What Changed' },
  { id: 'principle', title: 'The Principle' },
];

const METRICS = [
  { value: '42%',  label: 'AOG Reduction',     desc: 'Significant decrease in Aircraft on Ground time through real-time accelerated diagnostic resolution.' },
  { value: '15x',  label: 'Search Efficiency', desc: 'Documentation retrieval time reduced from minutes to seconds at the point of work.' },
  { value: '98%',  label: 'Accuracy Rating',   desc: 'Technical instructions cross-referenced and validated against Boeing, Airbus, and regulatory specifications.' },
  { value: '$12M', label: 'Annual Savings',    desc: 'Consolidated recovery across maintenance turnaround, engineer labour, and inventory delay reduction.' },
];

// ── Whitepaper Tab ─────────────────────────────────────────────────────────────
function WhitepaperView({ onOpenSimulator }) {
  const [scrollSection, setScrollSection] = useState('context');

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const pos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setScrollSection(item.id);
          break;
        }
      }
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white lg:pt-40 pt-28">
      {/* Hero */}
      <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24" id="context">
        <div className="flex flex-col gap-3 mb-8">
          <div className="mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-3 border border-[#0E2253] rounded-lg text-xs sm:text-sm font-bold text-[#0E2253]">
              Case Study
            </span>
          </div>
          {/* <span className="font-semibold text-xs tracking-widest text-[#0E2253] uppercase border-l-4 border-[#0E2253] pl-4">
            Aviation Technical Operations Advisory
          </span> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-4">
            From Campaign Factory to
Revenue Intelligence:
          </h1>

          {/* Tagline */}
         
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8">
              Full-Stack Marketing Automation
            </p>
        
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-bold uppercase tracking-wider">⏱ 10 min read</span>
            <span>•</span>
            <span className="text-xs uppercase font-bold tracking-wider text-[#0E2253]">Full-Stack Marketing Automation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200 min-h-[320px] md:min-h-[480px] lg:min-h-0">
            <img
              alt="Aviation Hangar Diagnostic Operations"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/images/InnerPages/Industries/marketing/main-banner.jpg"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
            <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                LSC transformed a fragmented B2B marketing operation into an AI-driven revenue intelligence system by integrating content generation, lead scoring, multi-channel orchestration, and real-time attribution. The solution replaced disconnected campaigns with a continuously optimising demand generation process that aligns marketing and sales around qualified pipeline. The result was higher-quality leads, improved conversion rates, smarter budget allocation, and a unified, data-driven approach to revenue growth.
              </p>
             
              {/* <button onClick={onOpenSimulator} className="px-6 py-3 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#1a3570] transition-all duration-300">
               Request a Demo
              </button> */}
            </div>
            {/* <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-xs text-gray-500">Full-Stack Marketing Automation</p>
                <p className="text-xs text-gray-400 mt-0.5">17th june 2026</p>
              </div>
              <span className="text-2xl">✈</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Content + SideNav */}
      <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
        {/* Sticky sidebar */}
        <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
          <div>
            <h4 className="text-lg font-bold text-[#0E2253] ">Overview</h4>
            <p className="text-xs text-gray-400">Aviation Intelligence Node</p>
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
          {/* <div className="mt-4">
            <button
              onClick={onOpenSimulator}
              className="block w-full bg-[#0E2253] text-white text-center py-3 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all"
            >
              Open Simulator
            </button>
          </div> */}
        </aside>

        <div className="flex-1 space-y-10 pb-24">

          {/* Context */}
          <div id="context" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client & Context</h2>
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                A B2B enterprise operating across multiple markets was generating significant marketing activity — and very little pipeline clarity. The organisation ran campaigns across email, paid media, LinkedIn, and its website. It had a CRM, a marketing automation platform, and a content team. It did not have a coherent system.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Marketing and sales operated in parallel, not in sequence. Leads passed from one function to the other on the basis of volume, not qualification. The pipeline was full of noise. Revenue performance was unpredictable.
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div id="problem" className="scroll-mt-24">
            <div className="bg-[#0E2253] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl text-white mb-4">The Problem</h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Four structural failures compounded each other. Content was produced by campaign, not by buyer intent — the same message reached cold prospects and decision-ready accounts alike. Lead scoring was manual and subjective: qualification was a conversation between a marketer and a gut feeling. Multi-channel activity was uncoordinated — a prospect could receive a cold outreach email, a retargeting ad, and a sales call within the same 48 hours, with no logic connecting them. Attribution was a spreadsheet exercise conducted quarterly, far too late to inform anything.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
            The result: high marketing spend, low conversion rates, and a sales team that had stopped trusting the leads it received.
              </p>
            </div>
          </div>

          {/* LSC's Approach */}
          <div id="approach" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">LSC's Approach</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              <strong>LSC designed a Tier 3 — Cybernetic Organisation Design intervention:</strong> a full-stack agentic marketing system that replaced disconnected tools with a continuously sensing, self-optimising demand generation architecture. The system operates across four integrated layers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  step: '01',
                  title: 'AI Content Generation',
                  desc: 'An AI content agent generates and personalises assets — emails, landing pages, LinkedIn content, and ad copy — dynamically matched to the buyer stage, sector, and stated priorities. Content is no longer produced in campaigns. It is generated continuously, tested automatically, and refined by performance data. The content layer never publishes a generic message when a specific one is available.',
                },
                {
                  step: '02',
                  title: 'Lead Scoring & Nurture',
                  desc: 'A scoring agent continuously monitors behavioural signals across every channel — page visits, email engagement, content downloads, event attendance, and intent data. It builds a real-time qualification score for each account and contact, weighted by the signals that historically predict conversion. Nurture sequences are triggered automatically when a contact crosses a defined threshold — not when a marketer finds time to review a list. Leads reach sales with a structured qualification record, not a name and a hunch.',
                },
                {
                  step: '03',
                  title: 'Multi-Channel Orchestration',
                  desc: 'An orchestration agent coordinates activity across email, paid media, social, and the website — ensuring every touchpoint a prospect encounters is sequenced, not simultaneous. The system enforces contact frequency rules, suppresses irrelevant channels based on engagement data, and escalates high-intent accounts to direct sales engagement without requiring human instruction. The buyer experiences a coherent conversation. The organisation operates a managed pipeline.',
                },
                {
                  step: '04',
                  title: 'Analytics & Attribution',
                  desc: 'An attribution agent tracks every interaction from first touch to closed revenue, applying multi-touch attribution models in real time. Marketing leadership receives daily pipeline intelligence — which channels are generating qualified demand, which content is accelerating conversion, where budget is producing noise rather than pipeline. Decisions about spend allocation are made on current data, not quarterly retrospectives.',
                },
              ].map((layer) => (
                <div key={layer.step} className="border border-gray-200 rounded-2xl p-6">
                  <p className="text-2xl font-bold text-gray-900 leading-none mb-1">{layer.step}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{layer.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>

            
          </div>

          {/* What Changed */}
          <div id="outcomes" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div>
                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Changed</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Marketing spend is allocated in real time to the channels and content producing qualified pipeline — not distributed by assumption. Leads reaching sales are pre-qualified, behaviour-scored, and accompanied by a structured account record. Sales conversion rates improve because the leads are better, not because the team has changed.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The organisation no longer runs campaigns. It operates a continuously active, self-correcting revenue intelligence system — one that learns from every interaction, adjusts to every signal, and improves its own performance without human intervention between cycles.
                </p>
                 <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Marketing and sales now share a single view of the pipeline. The conversation between functions has shifted from volume to quality, and from attribution disputes to shared data.
                </p>
              </div>
              <div className="border border-gray-200 overflow-hidden rounded-lg relative min-h-[280px] md:min-h-[400px] lg:min-h-0">
                <img
                  alt="Aviation Engineer at Work"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/InnerPages/Industries/marketing/cta-section.jpg"
                />
              </div>
            </div>
          </div>

          {/* The Principle */}
          <div id="principle" className="scroll-mt-24">
            <div className="bg-[#0E2253] rounded-t-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">The Principle</h2>
            </div>
            <div className="border border-gray-200 rounded-b-2xl p-6 sm:p-8">
              <p className="text-sm text-gray-600 leading-relaxed">
              Most organisations have a marketing execution problem disguised as a marketing strategy problem. The content is adequate. The channels are right. What is absent is the intelligence infrastructure connecting them — and the governance ensuring that human judgement is applied where it matters, not consumed where it does not.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-xl font-semibold text-[#0E2253] mb-3">Request a capability diagnostic at londonstrategycentre.com</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
              Ready to redesign how your organisation generates, qualifies, and converts demand?
            </p>
            <button
              // onClick={onOpenSimulator}
              className="inline-block px-8 py-3.5 bg-[#0E2253] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all"
            >
              Request a Demo
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

// ── Simulator Tab ──────────────────────────────────────────────────────────────
function SimulatorView() {
  const [selectedAircraft, setSelectedAircraft] = useState(AIRCRAFT_LIST[0]);
  const [selectedPresetId, setSelectedPresetId] = useState(FAULT_PRESETS[0].id);
  const [customFault, setCustomFault] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [progressText, setProgressText] = useState('');
  const [result, setResult] = useState(null);
  const [complianceSigned, setComplianceSigned] = useState(false);
  const [signedBy, setSignedBy] = useState('');
  const [auditLogs, setAuditLogs] = useState([]);
  const [logs, setLogs] = useState([{
    timestamp: new Date().toLocaleTimeString(),
    type: 'FLEET_UPDATE',
    aircraftName: 'Boeing 787-9 Dreamliner',
    message: 'Fleet telemetry link synchronized. Hangar 4 environmental metrics within tolerances.',
  }]);

  const addLog = (type, aircraftName, message) => {
    setLogs(prev => [{ timestamp: new Date().toLocaleTimeString(), type, aircraftName, message }, ...prev]);
  };

  const handleDiagnose = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setAnalysisStep(1);
    setResult(null);
    setComplianceSigned(false);
    setSignedBy('');
    const faultText = customFault || FAULT_PRESETS.find(p => p.id === selectedPresetId)?.description || '';
    addLog('DIAGNOSTIC_QUERY', selectedAircraft.name, `Initiated analysis for: "${faultText.substring(0, 60)}..."`);
    setProgressText('Crawling airframe sensors & extracting FADEC bus telemetry...');
    await delay(1200);
    setAnalysisStep(2);
    setProgressText('Ingesting documentation: searching AMM and Service Bulletins...');
    addLog('TELEMETRY_TRAVERSAL', selectedAircraft.name, 'Ingested 4 distinct documentation silos for cross-referencing.');
    await delay(1200);
    setAnalysisStep(3);
    setProgressText('Constructing Knowledge Graph & mapping airworthiness directive correlations...');
    await delay(1000);
    const diagnosis = MOCK_DIAGNOSES[selectedPresetId] || MOCK_DIAGNOSES.default;
    setResult(diagnosis);
    addLog('FLEET_UPDATE', selectedAircraft.name, `AI Core resolved fault. Confidence: ${diagnosis.confidenceRating}. Traversed ${diagnosis.nodesTraversed} nodes.`);
    setAnalysisStep(4);
    setIsAnalyzing(false);
  };

  const handleSignOff = (e) => {
    e.preventDefault();
    if (!signedBy.trim() || !result) return;
    setComplianceSigned(true);
    const record = {
      id: 'SGN-' + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toLocaleString(),
      aircraftName: selectedAircraft.name,
      tailNumber: selectedAircraft.tailNumber,
      fault: customFault || FAULT_PRESETS.find(p => p.id === selectedPresetId)?.title || '',
      signedBy,
      confidence: result.confidenceRating,
    };
    setAuditLogs(prev => [record, ...prev]);
    addLog('COMPLIANCE_SIGN_OFF', selectedAircraft.name, `Regulatory sign-off executed by ${signedBy}.`);
  };

  const LOG_COLORS = {
    DIAGNOSTIC_QUERY: 'text-blue-400',
    TELEMETRY_TRAVERSAL: 'text-yellow-400',
    COMPLIANCE_SIGN_OFF: 'text-green-400',
    FLEET_UPDATE: 'text-gray-400',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 pb-24 pt-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253] bg-gray-100 px-2 py-1 border border-gray-200">Operational Sandbox</span>
          <h1 className=" text-2xl md:text-3xl font-bold text-[#0E2253] mt-2">AirCore Point-of-Work Diagnostic Portal</h1>
          <p className="text-xs text-gray-400 mt-1">Active Connection to Fleet Documentation &amp; Fault Logic Core</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-[#0E2253] font-semibold tracking-wider">SECURE LINK ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          {/* Aircraft Selection */}
          <div className="border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">1. Select Active Hangar Aircraft</h3>
            <div className="space-y-3">
              {AIRCRAFT_LIST.map(air => (
                <div key={air.id} onClick={() => setSelectedAircraft(air)}
                  className={`p-3 border transition-all cursor-pointer flex items-center gap-3 ${
                    selectedAircraft.id === air.id ? 'border-[#0E2253] bg-[#0E2253]/5' : 'border-gray-200 hover:border-gray-400'
                  }`}>
                  <img src={air.image} alt={air.name} className="w-16 h-12 object-cover grayscale shrink-0 border border-gray-200" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className=" text-xs font-bold text-[#0E2253] truncate">{air.name}</h4>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wide shrink-0 ${
                        air.status === 'Maintenance AOG' ? 'bg-red-100 text-red-800 border border-red-200'
                          : air.status === 'In Service' ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                      }`}>{air.status}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 flex justify-between">
                      <span>Tail: <b className="font-mono text-[#0E2253]">{air.tailNumber}</b></span>
                      <span className="truncate max-w-[120px]">{air.hangarLocation}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fault Selection */}
          <div className="border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">2. Select Fault Diagnostic Profile</h3>
            <div className="space-y-1.5 mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Common Presets from Hangar Log</span>
              {FAULT_PRESETS.map(preset => (
                <button key={preset.id} onClick={() => { setSelectedPresetId(preset.id); setCustomFault(''); }}
                  className={`w-full text-left p-2.5 text-xs transition-all flex items-center justify-between border ${
                    selectedPresetId === preset.id && !customFault
                      ? 'border-[#0E2253] bg-[#0E2253] text-white font-semibold'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-800'
                  }`}>
                  <span className="truncate pr-4"><span className="font-mono font-bold mr-1.5">[{preset.category}]</span>{preset.title}</span>
                  <span className={`text-[8px] font-bold px-1 py-0.5 uppercase shrink-0 ${
                    preset.severity === 'CRITICAL' ? 'bg-red-100 text-red-800' : preset.severity === 'HIGH' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
                  }`}>{preset.severity}</span>
                </button>
              ))}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-2">Or Describe Custom Fault</span>
              <textarea rows={3} value={customFault} onChange={e => setCustomFault(e.target.value)}
                placeholder="Describe the observed malfunction in plain language..."
                className="w-full px-4 py-3 border border-gray-200 text-sm resize-none focus:outline-none focus:border-[#0E2253] transition-colors" />
            </div>
            <button onClick={handleDiagnose} disabled={isAnalyzing}
              className="mt-4 w-full bg-[#0E2253] text-white py-3 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
              {isAnalyzing ? (
                <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Analysing...</>
              ) : '⚡ Run AI Diagnostic Analysis'}
            </button>
          </div>

          {/* Documentation Index */}
          <div className="border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">3. Active Documentation Index</h3>
            <div className="space-y-3">
              {DOCUMENTATION_SILOS.map(doc => (
                <div key={doc.id} className="p-3 border border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wide ${
                      doc.type === 'AMM' ? 'bg-blue-100 text-blue-800' : doc.type === 'FIM' ? 'bg-purple-100 text-purple-800'
                        : doc.type === 'SB' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>{doc.type}</span>
                    <span className="font-mono text-[10px] text-gray-400">{doc.reference}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#0E2253] leading-snug mb-1">{doc.title}</p>
                  <p className="text-[10px] text-gray-400 leading-relaxed">{doc.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-7 space-y-6">
          {isAnalyzing && (
            <div className="border border-[#0E2253]/20 bg-[#0E2253]/5 p-6">
              <p className="text-xs font-bold text-[#0E2253] uppercase tracking-widest mb-4">AI Diagnostic Engine Running</p>
              <div className="space-y-2 mb-4">
                {['Sensor telemetry extraction','Documentation ingestion','Knowledge graph construction','Generating resolution sequence'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      analysisStep > i + 1 ? 'bg-green-500 text-white' : analysisStep === i + 1 ? 'bg-[#0E2253] text-white animate-pulse' : 'bg-gray-200 text-gray-400'
                    }`}>{analysisStep > i + 1 ? '✓' : i + 1}</span>
                    <span className={`text-xs ${analysisStep > i + 1 ? 'text-green-600 line-through' : analysisStep === i + 1 ? 'text-[#0E2253] font-semibold' : 'text-gray-400'}`}>{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 font-mono">{progressText}</p>
            </div>
          )}

          {result && !isAnalyzing && (
            <div className="border border-green-200 bg-white">
              <div className="bg-green-600 p-4 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-widest text-white">✓ Diagnostic Analysis Complete</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/80">Confidence: <b>{result.confidenceRating}</b></span>
                  <span className="text-xs text-white/80">Nodes: <b>{result.nodesTraversed}</b></span>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Root Cause Summary</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{result.summary}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Diagnostics Detected</p>
                    <ul className="space-y-1.5">{result.diagnostics.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600"><span className="text-amber-500 shrink-0">⚠</span>{d}</li>
                    ))}</ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Required Tools</p>
                    <ul className="space-y-1.5">{result.requiredTools.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600"><span className="text-[#0E2253] shrink-0">🔧</span>{t}</li>
                    ))}</ul>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Resolution Sequence</p>
                  <ol className="space-y-2">{result.resolutionSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#0E2253] text-white text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}</ol>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Consumables &amp; Parts</p>
                  <div className="flex flex-wrap gap-2">{result.consumables.map((c, i) => (
                    <span key={i} className="text-[10px] bg-gray-100 border border-gray-200 px-2 py-1 font-mono">
                      {c.name} <b>P/N: {c.partNumber}</b>
                    </span>
                  ))}</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded">
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1">⚠ Compliance Note</p>
                  <p className="text-xs text-amber-800 leading-relaxed">{result.complianceNote}</p>
                </div>
                {!complianceSigned ? (
                  <form onSubmit={handleSignOff} className="border border-gray-200 p-4 bg-gray-50">
                    <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-3">Airworthiness Compliance Sign-Off</p>
                    <div className="flex gap-3">
                      <input required value={signedBy} onChange={e => setSignedBy(e.target.value)}
                        placeholder="Enter your name & licence number..."
                        className="flex-1 px-3 py-2 border border-gray-200 text-xs focus:outline-none focus:border-[#0E2253]" />
                      <button type="submit" className="bg-[#0E2253] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#1a3570] transition-all whitespace-nowrap">
                        Sign &amp; Certify
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="border border-green-200 bg-green-50 p-4">
                    <p className="text-xs font-bold text-green-700">✓ Compliance sign-off recorded — {signedBy}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="border border-gray-800 bg-gray-900 p-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 font-mono">▶ AIRCORE SYSTEM EVENT LOG</p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 font-mono text-[10px]">
                  <span className="text-gray-600 shrink-0">[{log.timestamp}]</span>
                  <span className={`shrink-0 font-bold ${LOG_COLORS[log.type] || 'text-gray-400'}`}>{log.type}</span>
                  <span className="text-gray-300">{log.message}</span>
                </div>
              ))}
            </div>
          </div>

          {auditLogs.length > 0 && (
            <div className="border border-gray-200 bg-white p-6">
              <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-4">Compliance Audit Trail</p>
              <div className="space-y-3">
                {auditLogs.map((rec) => (
                  <div key={rec.id} className="p-3 border border-green-200 bg-green-50 text-[10px] font-mono">
                    <div className="flex justify-between mb-1">
                      <b className="text-green-800">ID: {rec.id}</b>
                      <span className="text-gray-400">{rec.timestamp}</span>
                    </div>
                    <p><span className="text-gray-500">Aircraft:</span> {rec.aircraftName} · {rec.tailNumber}</p>
                    <p><span className="text-gray-500">Signed by:</span> {rec.signedBy} · Confidence: {rec.confidence}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function AviationAIClient() {
  const [activeTab, setActiveTab] = useState('whitepaper');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Tab Bar */}
        {/* <div className="border-b border-gray-200 bg-white sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-12">
            <nav className="flex gap-8">
              <button onClick={() => setActiveTab('whitepaper')}
                className={`text-xs font-bold uppercase tracking-widest pb-0.5 border-b-2 transition-all ${
                  activeTab === 'whitepaper' ? 'text-[#0E2253] border-[#0E2253]' : 'text-gray-400 border-transparent hover:text-[#0E2253]'
                }`}>Executive Whitepaper</button>
              <button onClick={() => setActiveTab('simulator')}
                className={`text-xs font-bold uppercase tracking-widest pb-0.5 border-b-2 transition-all flex items-center gap-1.5 ${
                  activeTab === 'simulator' ? 'text-[#0E2253] border-[#0E2253]' : 'text-gray-400 border-transparent hover:text-[#0E2253]'
                }`}>⚙ Pilot Live Simulator</button>
            </nav>
            <button onClick={() => setActiveTab(activeTab === 'whitepaper' ? 'simulator' : 'whitepaper')}
              className="bg-[#0E2253] text-white px-5 py-1.5 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all flex items-center gap-1.5">
              {activeTab === 'whitepaper' ? 'Simulator Mode →' : '← Case Study'}
            </button>
          </div>
        </div> */}

        {activeTab === 'whitepaper'
          ? <WhitepaperView onOpenSimulator={() => setActiveTab('simulator')} />
          : <SimulatorView />
        }
      </div>
      <Footer />
    </>
  );
}
