import { CAPABILITY_QUESTIONS, DIMENSIONS } from './questionBank.js';

// ── Seeded deterministic shuffle ──────────────────────────────────────────────
function seededShuffle(arr, seed) {
  const shuffled = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  for (let i = shuffled.length - 1; i > 0; i--) {
    h = ((h << 5) - h + i) | 0;
    const j = ((h < 0 ? -h : h) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ── Role classification ───────────────────────────────────────────────────────
export function classifyRole(answerArray) {
  const get = (id) => answerArray.find((a) => a.question_id === id)?.value ?? '';
  const seniority    = get('r1');
  const workType     = get('r2');
  const managementLoad = get('r3');
  const repetitiveness = get('r4');
  const writingLoad  = get('r5');
  const judgmentLoad = get('r6');
  const dataExposure = get('r7');
  const clientFacing = get('r8');
  const autonomy     = get('r9');
  const aiView       = get('r10');

  let archetype = 'Knowledge Worker';
  if (['executive', 'founder'].includes(seniority) || workType === 'strategic')
    archetype = 'Strategic Leader';
  else if (managementLoad === 'majority' || managementLoad === 'significant')
    archetype = 'People & Team Leader';
  else if (workType === 'analytical' || dataExposure === 'structured')
    archetype = 'Analytical Professional';
  else if (workType === 'creative')
    archetype = 'Creative Professional';
  else if (workType === 'operational' && repetitiveness === 'highly_repetitive')
    archetype = 'Operational Specialist';
  else if (clientFacing === 'external' && workType === 'relational')
    archetype = 'Client & Relationship Professional';

  let automationExposure = 30;
  if (repetitiveness === 'highly_repetitive') automationExposure += 30;
  else if (repetitiveness === 'mostly_routine') automationExposure += 15;
  if (writingLoad === 'central' || writingLoad === 'substantial') automationExposure += 15;
  if (judgmentLoad === 'minimal' || judgmentLoad === 'moderate') automationExposure += 10;
  if (dataExposure === 'structured') automationExposure += 10;
  automationExposure = Math.min(automationExposure, 95);

  let agenticExposure = 20;
  if (autonomy === 'high' || autonomy === 'complete') agenticExposure += 25;
  if (dataExposure === 'both' || dataExposure === 'structured') agenticExposure += 20;
  if (workType === 'analytical' || workType === 'strategic') agenticExposure += 20;
  if (aiView === 'builder' || aiView === 'strategist') agenticExposure += 15;
  agenticExposure = Math.min(agenticExposure, 95);

  const augmentationScore = Math.min(
    100 - automationExposure + (judgmentLoad === 'dominant' || judgmentLoad === 'substantial' ? 20 : 0),
    95
  );

  return {
    archetype, industry: 'default', seniority, workType,
    automationExposure, agenticExposure, augmentationScore,
    aiView, repetitiveness, judgmentLoad, writingLoad, dataExposure,
  };
}

// ── Select 15 capability questions (3 per dimension) ─────────────────────────
export function selectCapabilityQuestions(roleProfile) {
  const { archetype = 'Knowledge Worker', industry = 'default' } = roleProfile;
  const INDUSTRY_VARIANTS = ['finance', 'healthcare', 'retail', 'tech', 'education'];
  const variant = INDUSTRY_VARIANTS.includes(industry) ? industry : 'default';

  const dimOrder = seededShuffle([...DIMENSIONS], archetype + industry);
  const selected = [];

  for (const dim of dimOrder) {
    const dimQs = CAPABILITY_QUESTIONS.filter((q) => q.dimension === dim);
    const archetypeMatches = dimQs.filter((q) => q.archetypes.includes(archetype));
    let pool;
    if (archetypeMatches.length >= 3) {
      pool = seededShuffle(archetypeMatches, dim + archetype).slice(0, 3);
    } else {
      const others = dimQs.filter((q) => !q.archetypes.includes(archetype));
      pool = [...archetypeMatches, ...seededShuffle(others, dim + archetype)].slice(0, 3);
    }

    for (const q of pool) {
      const variantData = q.variants[variant] || q.variants['default'];
      const shuffledOptions = seededShuffle(variantData.options, q.id + industry);
      selected.push({
        ...q,
        text: variantData.text,
        options: shuffledOptions,
        notSureOption: { text: "I'm not sure", score: 1 },
      });
    }
  }

  return selected;
}

// ── Calculate results ─────────────────────────────────────────────────────────
export function calculateResults(answerArray, questions, roleProfile) {
  const scoreByQ = {};
  for (const a of answerArray) {
    scoreByQ[a.question_id] = a.score;
  }

  const dimAvgs = {};
  for (const dim of DIMENSIONS) {
    const qs = questions.filter((q) => q.dimension === dim);
    if (!qs.length) { dimAvgs[dim] = 0; continue; }
    const total = qs.reduce((acc, q) => acc + (scoreByQ[q.id] ?? 0), 0);
    dimAvgs[dim] = Math.round((total / (qs.length * 10)) * 100);
  }

  const overall = Math.round(
    DIMENSIONS.reduce((acc, d) => acc + (dimAvgs[d] ?? 0), 0) / DIMENSIONS.length
  );

  const maturity = getMaturityLabel(overall, roleProfile?.archetype);
  const track = getTrack(overall);

  return { dimAvgs, overall, maturity, track };
}

export function getTrack(score) {
  if (score >= 83) return 'strategist';
  if (score >= 66) return 'builder';
  if (score >= 46) return 'integrator';
  if (score >= 26) return 'practitioner';
  return 'aware';
}

function getBaseLevel(score) {
  if (score >= 83) return 'Strategist';
  if (score >= 66) return 'Builder';
  if (score >= 46) return 'Integrator';
  if (score >= 26) return 'Practitioner';
  return 'Explorer';
}

const PREFIXES = {
  'Strategic Leader':                 { Explorer: 'Strategic',        Practitioner: 'Strategic',           Integrator: 'Strategic',             Builder: 'Strategic',          Strategist: 'Executive'              },
  'People & Team Leader':             { Explorer: 'Team-Aware',       Practitioner: 'Team-Enabling',       Integrator: 'Team-Enabling',         Builder: 'Team-Driving',       Strategist: 'Team-Transforming'      },
  'Analytical Professional':          { Explorer: 'Data-Curious',     Practitioner: 'Data-Informed',       Integrator: 'Data-Driven',           Builder: 'Data-Driven',        Strategist: 'Data-Strategic'         },
  'Creative Professional':            { Explorer: 'Creative',         Practitioner: 'Creative',            Integrator: 'Creative',              Builder: 'Creative',           Strategist: 'Creative'               },
  'Operational Specialist':           { Explorer: 'Process-Aware',    Practitioner: 'Process-Optimising',  Integrator: 'Process-Redesigning',   Builder: 'Process-Automating', Strategist: 'Process-Transforming'   },
  'Client & Relationship Professional': { Explorer: 'Client-Aware',   Practitioner: 'Client-Enabling',     Integrator: 'Client-Scaling',        Builder: 'Client-Innovating',  Strategist: 'Client-Transforming'    },
  'Knowledge Worker':                 { Explorer: 'Technical',        Practitioner: 'Technical',           Integrator: 'Technical',             Builder: 'Technical',          Strategist: 'Technical'              },
};

export function getMaturityLabel(score, archetype) {
  const level = getBaseLevel(score);
  const prefix = archetype && PREFIXES[archetype] ? PREFIXES[archetype][level] : 'AI';
  return `${prefix} ${level}`;
}

export const MATURITY_PROFILES = {
  Explorer: {
    summary: 'You understand AI at a surface level. You know tools exist and have likely used them occasionally, but haven\'t developed a systematic approach to applying AI in your professional work.',
    strengths: 'Foundational awareness and curiosity',
    gaps: 'Structured application, advanced prompting, workflow integration',
    nextStep: 'Start with daily use of one AI tool on a real task. Build the habit before expanding the toolkit.',
  },
  Practitioner: {
    summary: 'You use AI tools regularly and get value from them, but your use tends to be reactive rather than systematic. You haven\'t yet redesigned workflows around AI.',
    strengths: 'Consistent tool use, basic prompting',
    gaps: 'Workflow redesign, strategic evaluation, build capability',
    nextStep: 'Move from ad-hoc use to deliberate workflow integration. Choose one process and redesign it with AI at its core.',
  },
  Integrator: {
    summary: 'You integrate AI meaningfully into your work. You think in terms of processes and outcomes, not just tools. You have experience redesigning workflows and are ready to move toward building.',
    strengths: 'Process thinking, reliable prompting, strategic awareness',
    gaps: 'Build and prototype capability, agentic AI, governance maturity',
    nextStep: 'Build your first AI-powered tool or automation. This is the most impactful capability jump available to you.',
  },
  Builder: {
    summary: 'You build with AI, not just use it. You can design workflows, create prototypes, and think about AI solutions architecturally. Ready to develop governance fluency and agentic capability.',
    strengths: 'Build capability, workflow redesign, strategic prompting',
    gaps: 'Governance depth, agentic system design, organisational scaling',
    nextStep: 'Develop your governance framework and explore agentic AI systems. Your next edge is responsible, scalable deployment.',
  },
  Strategist: {
    summary: 'You operate at the strategic frontier. You think systemically about AI, can lead adoption across teams, and contribute meaningfully to governance and strategic positioning decisions.',
    strengths: 'Full-spectrum capability across all five dimensions',
    gaps: 'Frontier exploration, organisational change leadership',
    nextStep: 'Lead AI strategy for your organisation. Build internal capability in others and position your function at the AI frontier.',
  },
};

export const DIMENSION_META = {
  awareness:   { label: 'Strategic AI Awareness', color: '#3b82f6', emoji: '🧠' },
  prompting:   { label: 'Prompting & Direction',  color: '#8b5cf6', emoji: '💬' },
  workflow:    { label: 'Workflow Redesign',       color: '#10b981', emoji: '🔀' },
  build:       { label: 'Build & Prototype',       color: '#f59e0b', emoji: '🏗' },
  governance:  { label: 'Governance & Judgment',   color: '#e63946', emoji: '🛡' },
};
