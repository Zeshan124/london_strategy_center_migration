'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import { DIMENSION_META } from '@/lib/assessment/engine';

const WEEKS = [
  {
    week: 1, phase: 'Foundation', accent: '#1d4ed8', lightBg: '#eff6ff', border: '#bfdbfe', tagBg: '#dbeafe', tagText: '#1e40af',
    theme: 'AI Foundations & the Professional Landscape',
    objective: 'Understand the AI landscape, key tools, and how AI applies to your specific professional context.',
    focus: 'Strategic awareness and first-use experience',
    knowledge: [
      'How large language models work and why they sometimes hallucinate',
      'The difference between automation, augmentation, and agentic AI',
      'Current AI capability landscape and limitations',
      'How to evaluate AI tools for your specific professional context',
      'Responsible AI use principles',
    ],
    skills: [
      'Write structured prompts with context, role, format, and constraints',
      'Evaluate AI output critically before using it professionally',
      'Identify which of your tasks are suitable for AI assistance',
      'Apply a simple disclosure framework for AI-assisted work',
    ],
    activities: [
      { step: '01', action: 'AI Landscape Audit', detail: 'List 10 tasks you complete weekly. Classify each as: automatable, AI-assistable, or human-only. Discuss with a colleague.' },
      { step: '02', action: 'First Structured Prompt', detail: 'Choose one task from your audit. Write a full context prompt including role, objective, audience, format, and constraints.' },
      { step: '03', action: 'Output Evaluation', detail: 'Generate 3 outputs from your prompt. Evaluate each against: accuracy, relevance, tone, and missing context. Document your findings.' },
      { step: '04', action: 'Tool Selection Research', detail: 'Research 3 AI tools relevant to your role. For each: summarise the use case, pricing, data policy, and one limitation.' },
      { step: '05', action: 'Disclosure Practice', detail: 'Draft a disclosure statement you could use when submitting AI-assisted work to a stakeholder or client.' },
    ],
    tools: [
      { name: 'ChatGPT', url: 'https://chatgpt.com', whatFor: 'General-purpose text generation, analysis, and conversation', tips: ['Use System prompts to set context', 'Request structured output formats explicitly', 'Always verify factual claims independently'] },
      { name: 'Claude', url: 'https://claude.ai', whatFor: 'Long-form analysis, nuanced reasoning, document review', tips: ['Excellent for long documents', 'Strong reasoning capabilities', 'Good at following complex instructions'] },
      { name: 'Perplexity', url: 'https://perplexity.ai', whatFor: 'Research with citations — reduces hallucination risk', tips: ['Always check the source links', 'Use for current events research', 'Good starting point for background research'] },
    ],
  },
  {
    week: 2, phase: 'Output', accent: '#6d28d9', lightBg: '#f5f3ff', border: '#ddd6fe', tagBg: '#ede9fe', tagText: '#5b21b6',
    theme: 'Professional Output & Communication',
    objective: 'Apply AI systematically to produce high-quality professional output: documents, communications, and analysis.',
    focus: 'Prompting mastery and output quality',
    knowledge: [
      'Advanced prompting techniques: chain-of-thought, role assignment, few-shot examples',
      'How to decompose complex tasks into AI-manageable steps',
      'When to use AI for drafting vs. editing vs. reviewing',
      'Context window management for long-form work',
      'How AI handles different document formats and structures',
    ],
    skills: [
      'Write multi-step prompts for complex professional tasks',
      'Systematically improve AI output through targeted feedback',
      'Adapt AI-generated content for different audiences and channels',
      'Use AI for structured analysis with explicit reasoning requirements',
    ],
    activities: [
      { step: '01', action: 'Document Redesign', detail: 'Take a document you regularly produce. Create a full prompt system to generate a high-quality first draft. Evaluate against your current output.' },
      { step: '02', action: 'Iterative Improvement', detail: 'Take an AI draft that isn\'t quite right. Practice improving it through 5 rounds of targeted prompting without manually rewriting.' },
      { step: '03', action: 'Audience Adaptation', detail: 'Produce one piece of content adapted for three different audiences (e.g. technical, executive, client). Document your prompting approach.' },
      { step: '04', action: 'Analysis Task', detail: 'Use AI to analyse a real dataset or document set. Structure your prompts to produce specific analytical outputs with explicit reasoning.' },
      { step: '05', action: 'Output Audit', detail: 'Review five pieces of AI-assisted work you\'ve produced this week. Rate each on quality, accuracy, and time saved vs. manual production.' },
    ],
    tools: [
      { name: 'Notion AI', url: 'https://notion.so', whatFor: 'Document creation, meeting notes, structured knowledge management', tips: ['Connect AI to your existing documents', 'Use for consistent template-based output', 'Good for team documentation workflows'] },
      { name: 'Gamma', url: 'https://gamma.app', whatFor: 'AI-powered presentations and visual documents', tips: ['Best for initial structure generation', 'Customise heavily post-generation', 'Good for rapid stakeholder communications'] },
    ],
  },
  {
    week: 3, phase: 'Automation', accent: '#059669', lightBg: '#ecfdf5', border: '#a7f3d0', tagBg: '#d1fae5', tagText: '#065f46',
    theme: 'Automation, Workflows & Building',
    objective: 'Redesign at least one professional workflow with AI integrated, and build a simple AI-powered tool or automation.',
    focus: 'Workflow redesign and no-code building',
    knowledge: [
      'How to map a workflow and identify AI integration points',
      'Principles of AI-assisted process redesign',
      'No-code and low-code AI tool categories',
      'How to connect AI tools using automation platforms',
      'Basic concepts in agentic AI and multi-step automation',
    ],
    skills: [
      'Map a professional workflow end-to-end with AI integration points identified',
      'Build a simple automation using a no-code platform',
      'Design a basic AI-assisted process with human review checkpoints',
      'Evaluate automation ROI in time and quality terms',
    ],
    activities: [
      { step: '01', action: 'Workflow Mapping', detail: 'Choose a workflow you complete regularly. Map it step-by-step. Identify which steps are: automate-ready, AI-assist-ready, or must stay human.' },
      { step: '02', action: 'Redesign Specification', detail: 'For your mapped workflow, write a redesign spec: what AI handles, what triggers what, where humans review, and what success looks like.' },
      { step: '03', action: 'First Build', detail: 'Use a no-code tool to build a simple automation or AI-powered tool based on your redesign. It doesn\'t need to be perfect — working is enough.' },
      { step: '04', action: 'Test and Document', detail: 'Test your build with real inputs. Document: what works, what breaks, what needs human oversight, and what you would change.' },
      { step: '05', action: 'ROI Calculation', detail: 'Calculate the time saved by your automation over a typical month. Include setup time. Present a simple business case to a colleague.' },
    ],
    tools: [
      { name: 'Make (Integromat)', url: 'https://make.com', whatFor: 'Visual workflow automation connecting apps and AI', tips: ['Start with a simple 3-step scenario', 'Test each module individually', 'Use error handling from the start'] },
      { name: 'Zapier', url: 'https://zapier.com', whatFor: 'Connecting apps with AI-powered automation steps', tips: ['Best for simple linear workflows', 'Use Zapier AI features for text processing', 'Monitor zap history for errors'] },
      { name: 'v0.dev', url: 'https://v0.dev', whatFor: 'Generate UI and simple tools from text descriptions', tips: ['Describe your tool\'s purpose clearly', 'Iterate with feedback prompts', 'Good for internal prototypes'] },
    ],
  },
  {
    week: 4, phase: 'Build', accent: '#dc2626', lightBg: '#fef2f2', border: '#fecaca', tagBg: '#fee2e2', tagText: '#991b1b',
    theme: 'Agentic AI, Governance & Programme Completion',
    objective: 'Understand and apply AI governance, explore agentic AI, complete your programme project, and consolidate your capability.',
    focus: 'Governance, agentic systems, and final project',
    knowledge: [
      'AI governance frameworks and why they matter professionally',
      'How to assess AI vendor data policies and compliance requirements',
      'Agentic AI: what it is, how it works, and where the risks are',
      'How to build a monitoring framework for deployed AI systems',
      'How to lead AI adoption in a team or organisation',
    ],
    skills: [
      'Draft or assess an AI use policy for a professional context',
      'Evaluate AI tools against compliance and data protection requirements',
      'Design a governance framework for an AI system you manage or build',
      'Present an AI capability initiative to leadership or stakeholders',
    ],
    activities: [
      { step: '01', action: 'Governance Audit', detail: 'Review your current AI tool usage. For each tool: document data handling, identify compliance gaps, and flag any policy misalignments.' },
      { step: '02', action: 'Policy Draft', detail: 'Write a one-page AI use policy for your team or function. Cover: approved tools, data rules, disclosure requirements, and escalation process.' },
      { step: '03', action: 'Agentic AI Exploration', detail: 'Research one agentic AI platform (e.g. AutoGPT, Crew AI, or a vendor\'s agent feature). Document: how it works, the risks, and one professional use case.' },
      { step: '04', action: 'Final Project', detail: 'Build, document, and present your programme project: an AI-powered tool, workflow redesign, or capability initiative with measurable impact.' },
      { step: '05', action: 'Capability Reflection', detail: 'Write a 500-word reflection: what you\'ve built, what changed in how you work, one governance decision you\'ve made, and your next learning priority.' },
    ],
    tools: [
      { name: 'Anthropic Claude', url: 'https://claude.ai', whatFor: 'Governance-safe reasoning, policy drafting, complex analysis', tips: ['Strong for compliance-sensitive tasks', 'Good at structured policy documents', 'Review output for jurisdiction-specific gaps'] },
      { name: 'LangChain', url: 'https://langchain.com', whatFor: 'Building agentic AI applications and pipelines', tips: ['Requires technical knowledge', 'Start with pre-built agents', 'Focus on understanding the architecture'] },
    ],
  },
];

export default function AIRoadmapPage() {
  const [results, setResults] = useState(null);
  const [completedDays, setCompletedDays] = useState({});
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('demoResults');
    if (stored) setResults(JSON.parse(stored));
    const saved = sessionStorage.getItem('roadmapProgress');
    if (saved) setCompletedDays(JSON.parse(saved));

    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const toggleDay = (week, activity) => {
    const key = `${week}-${activity}`;
    const updated = { ...completedDays, [key]: !completedDays[key] };
    setCompletedDays(updated);
    sessionStorage.setItem('roadmapProgress', JSON.stringify(updated));
  };

  const totalActivities = WEEKS.reduce((sum, w) => sum + w.activities.length, 0);
  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const completionPct = Math.round((completedCount / totalActivities) * 100);

  const archetype = results?.roleProfile?.archetype || 'Professional';
  const maturity = results?.maturity || 'AI Explorer';

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-[#0a0f1e] pt-32 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <p className="text-xs font-bold tracking-widest text-[#e63946] uppercase mb-3">AI Capability Programme · 20-Day Roadmap</p>
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-3">Your Learning Journey</h1>
          <p className="text-white/50 text-sm mb-6">{archetype} · {maturity}</p>
          <div className="flex items-center gap-4 max-w-sm">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#e63946] rounded-full transition-all" style={{ width: `${completionPct}%` }} />
            </div>
            <span className="text-sm font-bold text-white shrink-0">{completionPct}% complete</span>
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 max-w-4xl">

          {/* Compliance disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-sm text-amber-800 leading-relaxed">
            <strong>⚠ Important:</strong> Please check with your organisation's policies, compliance requirements, and local government regulations before using any AI tools in a workplace context. Only use tools that are authorised by your organisation and permitted under applicable local rules and regulations.
          </div>

          {/* Overview tiles */}
          {!showRoadmap && (
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {WEEKS.map((w) => (
                  <div key={w.week} className="rounded-2xl border p-5 cursor-pointer hover:shadow-md transition-shadow"
                    style={{ borderColor: w.border, backgroundColor: w.lightBg }}
                    onClick={() => { setShowRoadmap(true); setExpandedWeek(w.week); }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: w.tagBg, color: w.tagText }}>
                        Week {w.week} · {w.phase}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">{w.theme}</h3>
                    <p className="text-xs text-gray-500">{w.activities.length} activities · {w.tools.length} tools</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button onClick={() => setShowRoadmap(true)} className="px-10 py-4 bg-[#0a0f1e] text-white font-semibold rounded-xl hover:bg-[#1a1f3a] transition-colors text-sm">
                  View My Roadmap →
                </button>
              </div>
            </div>
          )}

          {/* Roadmap weeks */}
          {showRoadmap && WEEKS.map((w) => {
            const weekCompleted = w.activities.filter((_, ai) => completedDays[`${w.week}-${ai}`]).length;
            const isExpanded = isPrinting || expandedWeek === w.week;
            return (
              <div key={w.week} className="rounded-2xl border mb-5 overflow-hidden" style={{ borderColor: w.border }}>
                {/* Week header */}
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : w.week)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:opacity-90"
                  style={{ backgroundColor: w.lightBg }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: w.tagBg, color: w.tagText }}>
                        Week {w.week} · {w.phase}
                      </span>
                      {weekCompleted === w.activities.length && <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">✓ Complete</span>}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{w.theme}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{weekCompleted}/{w.activities.length} activities done</p>
                  </div>
                  <span className="text-gray-400 text-xl shrink-0 ml-4">{isExpanded ? '▲' : '▼'}</span>
                </button>

                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-white border-t" style={{ borderColor: w.border }}>
                    <p className="text-sm text-gray-700 leading-relaxed mb-6">{w.objective}</p>

                    {/* Knowledge & Skills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <p className="text-[10px] font-bold tracking-widets uppercase mb-3" style={{ color: w.accent }}>Knowledge</p>
                        <ul className="space-y-1.5">
                          {w.knowledge.map((k, i) => <li key={i} className="text-xs text-gray-600 flex gap-2"><span style={{ color: w.accent }}>→</span>{k}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: w.accent }}>Skills</p>
                        <ul className="space-y-1.5">
                          {w.skills.map((s, i) => <li key={i} className="text-xs text-gray-600 flex gap-2"><span style={{ color: w.accent }}>✓</span>{s}</li>)}
                        </ul>
                      </div>
                    </div>

                    {/* Activities */}
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: w.accent }}>Activities</p>
                    <div className="space-y-3 mb-6">
                      {w.activities.map((act, ai) => {
                        const done = !!completedDays[`${w.week}-${ai}`];
                        return (
                          <div key={ai} className={`rounded-xl border p-4 transition-all cursor-pointer ${done ? 'opacity-60' : ''}`}
                            style={{ borderColor: done ? '#86efac' : w.border, backgroundColor: done ? '#f0fdf4' : w.lightBg }}
                            onClick={() => toggleDay(w.week, ai)}>
                            <div className="flex items-start gap-3">
                              <div className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${done ? 'bg-green-500 border-green-500 text-white' : ''}`}
                                style={!done ? { borderColor: w.accent, color: w.accent } : {}}>
                                {done ? '✓' : act.step}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900 mb-0.5">{act.action}</p>
                                <p className="text-xs text-gray-500 leading-relaxed">{act.detail}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tools */}
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: w.accent }}>Tools This Week</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {w.tools.map((tool) => (
                        <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                          className="rounded-xl border p-4 hover:shadow-sm transition-shadow block" style={{ borderColor: w.border }}>
                          <p className="text-sm font-bold text-gray-900 mb-1">{tool.name} ↗</p>
                          <p className="text-xs text-gray-500 mb-2">{tool.whatFor}</p>
                          <ul className="space-y-1">
                            {tool.tips.map((tip, ti) => <li key={ti} className="text-[11px] text-gray-400 flex gap-1.5"><span>·</span>{tip}</li>)}
                          </ul>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {showRoadmap && (
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button onClick={() => { if (!showRoadmap) setShowRoadmap(true); setTimeout(() => window.print(), 100); }} className="flex-1 sm:flex-none px-8 py-3.5 bg-[#0a0f1e] text-white font-semibold rounded-xl text-sm hover:bg-[#1a1f3a] transition-colors text-center">
                ⬇ Download as PDF
              </button>
              <Link href="/ai-direction-scan/results" className="flex-1 sm:flex-none px-8 py-3.5 border border-gray-200 text-gray-700 font-medium rounded-xl text-sm text-center hover:bg-gray-50 transition-colors">
                ← Back to Results
              </Link>
              <Link href="/ai-direction-scan" className="flex-1 sm:flex-none px-8 py-3.5 border border-gray-200 text-gray-700 font-medium rounded-xl text-sm text-center hover:bg-gray-50 transition-colors">
                Retake Assessment
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />

      <style>{`
        @media print {
          nav, footer, button, .no-print { display: none !important; }
          body { background: white; }
        }
      `}</style>
    </>
  );
}
