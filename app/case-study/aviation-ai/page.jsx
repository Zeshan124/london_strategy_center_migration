'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import {
  AIRCRAFT_LIST, FAULT_PRESETS, DOCUMENTATION_SILOS, MOCK_DIAGNOSES
} from '@/lib/caseStudy/aviationData';

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// ── Whitepaper Tab ─────────────────────────────────────────────────────────────
function WhitepaperView({ onOpenSimulator }) {
  const [scrollSection, setScrollSection] = useState('context');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['context','problem','approach','outcomes','principle'];
      const pos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setScrollSection(id); break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'context', title: 'Study Context' },
    { id: 'problem', title: 'The Problem' },
    { id: 'approach', title: 'Approach' },
    { id: 'outcomes', title: 'Outcomes' },
    { id: 'principle', title: 'The Principle' },
  ];

  const metrics = [
    { value: '42%', label: 'AOG Reduction', desc: 'Significant decrease in critical Aircraft on Ground metrics through real-time accelerated diagnostics.' },
    { value: '15x', label: 'Search Efficiency', desc: 'Procedural document intelligence time reduced from hour ranges down to mere seconds.' },
    { value: '98%', label: 'Accuracy Rating', desc: 'Technical instructions delivered fully checked with Boeing & Airbus specifications.' },
    { value: '$12M', label: 'Annual Savings', desc: 'Consolidated recovery in structural maintenance, mechanic labor overheads, and inventory delay.' },
  ];

  return (
    <div className="min-h-screen bg-white lg:pt-40 py-5">
      {/* Hero */}
      <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24" id="context">
        <div className="flex flex-col gap-3 mb-8">
          <span className="font-semibold text-xs tracking-widest text-[#0E2253] uppercase border-l-4 border-[#0E2253] pl-4">
            Aviation Technical Operations Advisory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0E2253] font-bold leading-tight max-w-4xl tracking-tight font-serif">
            AI Agents for Documentation & Fault Resolution
          </h1>
          <div className="flex items-center gap-4 text-gray-500 mt-2">
            <span className="text-xs font-medium uppercase tracking-wider">⏱ 7 min read</span>
            <span>•</span>
            <span className="text-xs uppercase font-medium tracking-wider text-[#0E2253]">Strategic Case Study #1402</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 relative overflow-hidden group border border-gray-200">
            <img
              alt="Aviation Hangar Diagnostic Operations"
              className="w-full h-[320px] md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={AIRCRAFT_LIST[0].image}
            />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
            <div className="p-6 md:p-8 border border-gray-200 bg-gray-50">
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#0E2253] mb-4">Executive Summary</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Aviation technical operations run on dense documentation. Airworthiness Directives, Aircraft Maintenance Manuals, Service Bulletins, fault isolation manuals, and engineering orders constitute a library that grows continuously and must be applied precisely. Engineers operate under high time pressure, in hard operational hangar conditions, working directly on high-value aircraft.
              </p>
              <button onClick={onOpenSimulator} className="inline-flex items-center gap-2 text-[#0E2253] font-bold text-xs uppercase tracking-widest hover:underline">
                Launch Point-Of-Work Demo →
              </button>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-xs text-gray-500">LSC Strategic Operations Practice</p>
                <p className="text-xs text-gray-400 mt-0.5">October 2024</p>
              </div>
              <span className="text-2xl">🛡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + SideNav */}
      <section className="flex mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 gap-12 mt-12">
        {/* Sticky sidebar */}
        <aside className="hidden lg:flex flex-col gap-6 w-56 sticky top-28 h-fit border-r border-gray-200 pr-8">
          <div>
            <h4 className="text-lg font-bold text-[#0E2253] font-serif">Overview</h4>
            <p className="text-xs text-gray-400">Aviation Intelligence Node</p>
          </div>
          <nav className="flex flex-col space-y-1">
            {navItems.map(sec => (
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
        </aside>

        <div className="flex-1 space-y-16">
          {/* Outcomes */}
          <div id="outcomes" className="scroll-mt-24">
            <h2 className="font-serif text-3xl font-semibold text-[#0E2253] mb-6">Key Strategic Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className={`p-6 border border-gray-200 relative overflow-hidden ${i === 0 ? 'bg-[#0E2253] text-white' : 'bg-white'}`}>
                  <span className={`font-serif text-5xl font-bold block mb-2 ${i === 0 ? 'text-white' : 'text-[#0E2253]'}`}>{m.value}</span>
                  <span className={`text-xs font-semibold uppercase tracking-widest block ${i === 0 ? 'text-white/80' : 'text-gray-500'}`}>{m.label}</span>
                  <p className={`mt-4 text-xs leading-relaxed ${i === 0 ? 'text-white/70' : 'text-gray-500'}`}>{m.desc}</p>
                </div>
              ))}
              <div className="p-6 bg-gray-900 text-white border border-gray-800 col-span-1 md:col-span-2">
                <span className="font-serif text-xl font-bold block mb-1">Tier 3 Cybernetic Design</span>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">Achieved complete institutional-grade automation of complex maintenance diagnostic decision matrices.</p>
                <button onClick={onOpenSimulator} className="bg-white text-[#0E2253] py-2 px-4 text-xs tracking-wider uppercase font-bold hover:bg-gray-100 transition-all">
                  Enter Simulator Mode
                </button>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div id="problem" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0E2253] mb-4">The Problem: Documentation Inertia</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The systemic bottleneck in hangar maintenance turnaround is structural paperwork, not raw engineering competence. Every unfamiliar cockpit fault alert or structural repair check requires mechanics to resolve a documentation challenge before picking up tools.
                </p>
                <p className="text-sm italic border-l-2 border-gray-200 pl-4 mb-4 text-gray-500">
                  "Locating exact cross-references between the Boeing Aircraft Manual and independent parts distributor databases introduced an average lag of 82 minutes per fault isolation task."
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Aircraft on Ground (AOG) costs average $150,000 per hour. When technicians face documentation ambiguity, they stop work. That is the correct safety protocol. But when documentation is stored in silos, safety halts propagate directly to corporate financial balance sheets.
                </p>
              </div>
              <div className="border border-gray-200 overflow-hidden">
                <img alt="Aerospace Component" className="w-full aspect-[4/3] object-cover grayscale" src={AIRCRAFT_LIST[1].image} />
              </div>
            </div>
          </div>

          {/* Approach */}
          <div id="approach" className="scroll-mt-24">
            <h2 className="font-serif text-3xl font-semibold text-[#0E2253] mb-4">LSC's Approach: Tier 3 Cybernetic Design</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Rather than installing another static dashboard or corporate search engine, LSC restructured client engineering teams with a voice-enabled point-of-work agent. The core AI architecture dynamically ingests corporate manuals, service bulletins, fault codes, regulatory directives, and historical fleet repair workflows.
            </p>
            {/* <div className="bg-gray-50 p-6 md:p-8 border border-gray-200 mb-6">
              <p className="text-xs font-bold text-[#0E2253] uppercase tracking-widest text-center mb-4">Systemic Architecture Map</p>
              <div className="bg-white border border-gray-100 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {['Document Ingestion', 'Knowledge Graph', 'Point-of-Work Agent'].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#0E2253] text-white text-sm font-bold flex items-center justify-center">{i + 1}</div>
                    <p className="text-xs font-semibold text-[#0E2253]">{step}</p>
                    <p className="text-[10px] text-gray-400">{['AMM · SB · FIM · AD', 'Cross-reference & map', 'Hangar tablet delivery'][i]}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mt-4 italic">Knowledge Graph synthesis automatically routes raw document silos into mobile endpoints instantly.</p>
            </div> */}
            <p className="text-sm text-gray-600 leading-relaxed">
              A technician describes a physical malfunction. The system cross-references active ADs, maps the correct diagnostic sequence, and identifies authorized parts and consumables—delivering instant, auditable checklists directly onto ruggedized technician tablets in the hangar.
            </p>
          </div>

          {/* Before/After */}
          <div className="border border-gray-200 bg-white">
            <div className="bg-[#0E2253] p-4 text-center">
              <span className="font-bold text-xs tracking-widest uppercase text-white/90">Organizational Impact: The Cybernetic Shift</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <span className="font-bold text-xs tracking-wider uppercase text-gray-400 block mb-4">Current State (Pre-AI)</span>
                <ul className="space-y-3.5">
                  {['Manual document navigation taking up to 90 mins per fault.','Maintenance knowledge trapped within specific master mechanics.','Frequent delays due to incorrect manual revision checks.'].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600"><span className="text-red-500 shrink-0 mt-0.5">✗</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <span className="font-bold text-xs tracking-wider uppercase text-[#0E2253] block mb-4">Future Vision (Post-LSC)</span>
                <ul className="space-y-3.5">
                  {['Technical documentation retrieval time dropped to seconds.','Engineers work through faults without leaving aircraft context.','Critical AOG triggers resolved with safety compliance stamps.','New engineers reach full operational baseline in weeks.'].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#0E2253] font-semibold"><span className="shrink-0 mt-0.5">✓</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Principle */}
          <div id="principle" className="scroll-mt-24 pt-4">
            <blockquote className="border-l-4 border-[#0E2253] pl-6 py-2">
              <p className="font-serif text-xl italic text-[#0E2253] leading-relaxed mb-4">
                "The bottleneck was never the engineer's competence. It was the time latency between a physical fault detection and retrieving the right airworthiness procedure. That gap is now completely closed."
              </p>
              <cite className="block text-xs uppercase tracking-widest text-gray-400 font-semibold">
                — VP OF ENGINEERING, GLOBAL CIVIL AVIATION PARTNER
              </cite>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="bg-[#0E2253] p-8 md:p-12 text-white text-center relative overflow-hidden">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Transform Operational Performance with AI-Augmented Systems</h2>
            <p className="text-xs md:text-sm max-w-2xl mx-auto mb-8 text-white/70 leading-relaxed">
              Our Strategic Advisory practice helps civil and defense aviation leaders navigate the critical transition from documentation siloing to live, voice-enabled operations automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onOpenSimulator} className="bg-white text-[#0E2253] px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all">
                Interact with Hangar Simulator
              </button>
              <button className="border border-white/40 text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                Download Advisory Whitepaper
              </button>
            </div>
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
  const logsEndRef = useRef(null);

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
    <div className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
      {/* Simulator header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0E2253] bg-gray-100 px-2 py-1 border border-gray-200">Operational Sandbox</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#0E2253] mt-2">AirCore Point-of-Work Diagnostic Portal</h1>
          <p className="text-xs text-gray-400 mt-1">Active Connection to Fleet Documentation & Fault Logic Core</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-[#0E2253] font-semibold tracking-wider">SECURE LINK ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Controls */}
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
                      <h4 className="font-serif text-xs font-bold text-[#0E2253] truncate">{air.name}</h4>
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

          {/* Documentation Silos */}
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
          {/* Analysis progress */}
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

          {/* Results panel */}
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
                  <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-2">Consumables & Parts</p>
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
                {/* Sign Off */}
                {!complianceSigned ? (
                  <form onSubmit={handleSignOff} className="border border-gray-200 p-4 bg-gray-50">
                    <p className="text-[10px] font-bold text-[#0E2253] uppercase tracking-widest mb-3">Airworthiness Compliance Sign-Off</p>
                    <div className="flex gap-3">
                      <input required value={signedBy} onChange={e => setSignedBy(e.target.value)}
                        placeholder="Enter your name & licence number..."
                        className="flex-1 px-3 py-2 border border-gray-200 text-xs focus:outline-none focus:border-[#0E2253]" />
                      <button type="submit" className="bg-[#0E2253] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#1a3570] transition-all whitespace-nowrap">
                        Sign & Certify
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

          {/* System Log */}
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

          {/* Audit log */}
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
export default function AviationCaseStudyPage() {
  const [activeTab, setActiveTab] = useState('whitepaper');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Tab Bar */}
        {/* <div className="border-b border-gray-200 bg-white sticky top-0 z-40 pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-14">
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
              className="bg-[#0E2253] text-white px-5 py-2 font-bold text-xs uppercase tracking-widest hover:bg-[#1a3570] transition-all flex items-center gap-1.5">
              {activeTab === 'whitepaper' ? 'Simulator Mode →' : '← Case Study Doc'}
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
