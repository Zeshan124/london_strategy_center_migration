export const DEFAULT_LSC_QUESTION = {
  required_input: '', verdict: '', score: 5,
  evidence_strength: '', confidence: '', notes: '',
  fix_plan: '', moat_plan: '', hiring_plan: '',
};

export const DEFAULT_RESPONSES = {
  lsc: {
    Q1: { ...DEFAULT_LSC_QUESTION },
    Q2: { ...DEFAULT_LSC_QUESTION },
    Q3: { ...DEFAULT_LSC_QUESTION },
    Q4: { ...DEFAULT_LSC_QUESTION },
    Q5: { ...DEFAULT_LSC_QUESTION },
  },
  dd: {
    A: { interviews_count: 0, problem_cost: '', problem_frequency: '', problem_severity: '', validation_notes: '' },
    B: { tam: '', sam: '', som: '', market_growth_rate: 0, market_notes: '' },
    C: { direct_competitors: '', indirect_competitors: '', status_quo: '', differentiation: '', competition_notes: '' },
    D: { moat_types: [], compounding_vs_decaying: '', moat_timeline: '', replication_cost: '', moat_plan: '' },
    E: { model_type: '', revenue_streams: '', pricing_strategy: '', structural_risks: '', scaling_behavior: '', profitability_path: '' },
    F: { cac: 0, ltv: 0, ltv_cac_ratio: 0, payback_months: 0, monthly_churn: 0, nrr: 0, stress_test_notes: '' },
    G: {
      risk_1: { description: '', probability: '', impact: '', mitigation: '' },
      risk_2: { description: '', probability: '', impact: '', mitigation: '' },
      risk_3: { description: '', probability: '', impact: '', mitigation: '' },
      risk_4: { description: '', probability: '', impact: '', mitigation: '' },
      risk_5: { description: '', probability: '', impact: '', mitigation: '' },
      risk_notes: '',
    },
    H: {
      base_rate: 10,
      positive_adjustments: { domain_expertise: false, paying_customers: false, structural_moat: false, market_growth: false, strong_team: false, validated_economics: false },
      negative_adjustments: { no_technical_cofounder: false, crowded_market: false, unproven_economics: false, untested_model: false, no_moat: false, timing_risk: false },
      probability_low: 1, probability_high: 20, probability_central: 10, probability_notes: '',
    },
  },
  fragile_assumptions: '',
  conditions_to_invest: '',
};

export const SECTORS = ['FinTech','HealthTech','EdTech','CleanTech','AgTech','PropTech','LegalTech','InsurTech','RetailTech','LogisticsTech','HRTech','MarketingTech','CyberSecurity','AI/ML','SaaS','Consumer','DeepTech','Other'];
export const STAGES = ['Pre-seed','Seed','Series A','Series B','Growth','Late Stage'];
export const BUSINESS_MODELS = ['SaaS','Marketplace','Transactional','Usage-based','Subscription','Licensing','Services','Hardware/Physical'];
export const MOAT_TYPES = ['Network Effects','Data Advantage','Switching Costs','Brand/Trust','IP/Patents','Scale Economies','Regulatory','None'];
export const SCALING_OPTIONS = ['Exponential','Strong','Linear','Sub-linear'];
export const COMPOUNDING_OPTIONS = ['Strongly Compounding','Moderately Compounding','Stable','Slowly Decaying','Rapidly Decaying'];
export const RISK_PROBABILITY_OPTIONS = ['Very High (>70%)','High (50–70%)','Medium (30–50%)','Low (10–30%)','Very Low (<10%)'];
export const RISK_IMPACT_OPTIONS = ['Critical','High','Medium','Low'];

export const LSC_QUESTIONS = [
  {
    id: 'Q1', title: 'Is the Problem Real?',
    prompt: 'Describe the core problem in one sentence. What specific pain are customers experiencing, and what evidence do you have that it\'s urgent and costly?',
    verdicts: [
      { value: 'REAL', label: 'REAL', desc: 'Clear evidence of urgent, costly problem', color: 'green' },
      { value: 'PERCEIVED', label: 'PERCEIVED', desc: 'Problem exists but may not be urgent enough', color: 'amber' },
      { value: 'MANUFACTURED', label: 'MANUFACTURED', desc: 'Problem created to justify the solution', color: 'red' },
    ],
    checklist: ['How many customer interviews have you conducted?','What does the problem cost customers (in time or money)?','How frequently does the problem occur?','What do customers do today to solve it (workarounds)?','Why hasn\'t this been solved before?'],
    redFlags: ['Solution described before the problem','Fewer than 10 customer interviews','\"Everyone experiences this\" type statements','No quantified cost or frequency'],
    greenFlags: ['20+ customer interviews with consistent findings','Quantified cost: \"$X per month\" or \"Y hours wasted\"','Customers actively seeking solutions','Evidence of urgency (losing money, compliance risk, etc.)'],
    extraField: { key: 'fix_plan', condition: ['PERCEIVED','MANUFACTURED'], label: 'What evidence would change this verdict? What\'s the plan to validate?' },
    warning: { condition: 'MANUFACTURED', text: 'A manufactured problem is a disqualifying signal. This venture will score DISCARD unless the problem framing changes fundamentally.' },
  },
  {
    id: 'Q2', title: 'Is the Solution 10x Better?',
    prompt: 'Describe the status quo (what customers use today) and explain precisely how this solution is better. Be specific about the magnitude of improvement.',
    verdicts: [
      { value: 'TRANSFORMATIVE', label: 'TRANSFORMATIVE', desc: 'Clear 10x improvement over status quo', color: 'green' },
      { value: 'INCREMENTAL', label: 'INCREMENTAL', desc: 'Improvement exists but modest (2–3x)', color: 'amber' },
      { value: 'NEGLIGIBLE', label: 'NEGLIGIBLE', desc: 'Marginal or no improvement', color: 'red' },
    ],
    checklist: ['What does the customer use today (the real alternative, including spreadsheets)?','What is the switching cost for a customer?','What proof exists that customers find this 10x better?','Can an incumbent add this as a feature?','Is the improvement measurable?'],
    redFlags: ['Only 2x improvement cited','High switching costs with low improvement','"Better UI" as primary differentiator','No customer validation of the improvement claim'],
    greenFlags: ['Demonstrated 10x improvement with customer evidence','Low switching cost relative to improvement','Customers pull toward the product (inbound demand)','Incumbent cannot easily replicate'],
    extraField: { key: 'moat_plan', condition: ['INCREMENTAL'], label: 'What would make this transformative? Plan to reach 10x improvement?' },
    warning: { condition: 'NEGLIGIBLE', text: 'A negligible improvement is a disqualifying signal. This venture scores DISCARD.' },
  },
  {
    id: 'Q3', title: 'Can It Make Money?',
    prompt: 'Describe the revenue model, pricing approach, and unit economics. Include current or projected CAC, LTV, and payback period. What makes the economics structurally defensible?',
    verdicts: [
      { value: 'STRUCTURALLY SOUND', label: 'STRUCTURALLY SOUND', desc: 'Clear path to profitable unit economics', color: 'green' },
      { value: 'MARGINAL', label: 'MARGINAL', desc: 'Revenue model exists but economics are uncertain', color: 'amber' },
      { value: 'BROKEN', label: 'BROKEN', desc: 'Revenue model is fundamentally flawed', color: 'red' },
    ],
    checklist: ['What does the customer pay, how often, and why?','What is CAC and LTV? Is LTV:CAC >3:1?','What is the payback period? Under 12 months?','Is there a single customer dependency (>20% revenue)?','What happens to margins at scale?'],
    redFlags: ['LTV:CAC ratio below 3:1','Unclear who pays or why','Single customer >20% of revenue','CAC rising faster than LTV'],
    greenFlags: ['LTV:CAC >5:1 with evidence','Payback <12 months','Expanding NRR (>100%)','Pricing power demonstrated'],
    extraField: { key: 'fix_plan', condition: ['BROKEN'], label: 'What structural change to the model could fix this? Is there a viable pivot?' },
    warning: { condition: 'BROKEN', text: 'A broken revenue model without a credible fix plan is a disqualifying signal.' },
  },
  {
    id: 'Q4', title: 'Can They Defend It?',
    prompt: 'What prevents a well-funded competitor or incumbent from replicating this in 12–24 months? Describe specific moat mechanisms and when they compound.',
    verdicts: [
      { value: 'DURABLE MOAT', label: 'DURABLE MOAT', desc: 'Clear, compounding defensibility', color: 'green' },
      { value: 'TEMPORARY LEAD', label: 'TEMPORARY LEAD', desc: 'Ahead of competitors today but not durably', color: 'amber' },
      { value: 'EXPOSED', label: 'EXPOSED', desc: 'No meaningful defensibility', color: 'red' },
    ],
    checklist: ['What is the primary moat type?','How long until the moat becomes durable?','What would it cost a competitor to replicate this?','Can this moat compound over time, or will it decay?','Does "first mover advantage" hold without a structural moat?'],
    redFlags: ['"First mover advantage" as the only moat','Feature-based lead (easily copied)','No switching costs or lock-in','Incumbent can add as a feature'],
    greenFlags: ['Network effects already visible','Data flywheel in motion','High switching costs validated','Regulatory or IP barrier'],
    extraField: { key: 'moat_plan', condition: ['EXPOSED','TEMPORARY LEAD'], label: 'What is the strategy to build durable moat? Timeline?' },
    warning: { condition: 'EXPOSED', text: 'No defensibility and no plan results in PIVOT.' },
  },
  {
    id: 'Q5', title: 'Right Team, Right Time?',
    prompt: 'Describe the founding team\'s relevant experience for this specific problem. Why is now the right time for this venture? What market catalyst makes this the moment?',
    verdicts: [
      { value: 'RIGHT TEAM, RIGHT TIME', label: 'RIGHT TEAM, RIGHT TIME', desc: 'Team has domain expertise + ideal market timing', color: 'green' },
      { value: 'TEAM GAP', label: 'TEAM GAP', desc: 'Meaningful capability gap in the founding team', color: 'amber' },
      { value: 'TIMING MISMATCH', label: 'TIMING MISMATCH', desc: 'Team may be right but market timing is off', color: 'red' },
    ],
    checklist: ['Does the founding team have lived experience with this problem?','Is there a technical co-founder?','What is the team\'s track record?','What market catalyst makes now the right timing?','What has changed in the past 2–3 years that enables this now?'],
    redFlags: ['No domain expertise in founding team','Solo non-technical founder','No evidence of market timing thesis','"We have a great idea" without market catalysts'],
    greenFlags: ['Founder personally experienced the problem','Technical co-founder with relevant background','Strong timing thesis supported by data','Complementary skills (technical + commercial)'],
    extraField: { key: 'hiring_plan', condition: ['TEAM GAP','TIMING MISMATCH'], label: 'What is the plan to close the gap? Who needs to join and by when?' },
    warning: { condition: 'TEAM GAP', text: 'A team gap without a mitigation plan results in PIVOT.' },
  },
];
