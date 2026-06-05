// ── Text Quality Scoring ────────────────────────────────────────────────────
export function assessTextQuality(text, minWords) {
  if (!text || text.trim().length === 0) return 0;
  const words = text.trim().split(/\s+/).length;
  let score = 0;
  if (words < minWords) score = words / 2;
  else if (words < minWords * 2) score = 5 + ((words - minWords) / minWords) * 3;
  else score = Math.min(10, 8 + (words / (minWords * 3)) * 2);

  const specific = /\$[\d,]+|\d+%|\d+x|\bmeasured\b|\bdata\b|\bevidence\b|\binterview|\bsurvey|\bvalidat/i;
  if (specific.test(text)) score += 3;
  const structured = /\bfirst\b|\bsecond\b|\bbecause\b|\btherefore\b|\bhowever\b|\bspecifically\b|\bfor example\b/i;
  if (structured.test(text)) score += 2;
  const vagueMatches = (text.match(/\bmaybe\b|\bprobably\b|\bhopefully\b|\bshould\b|\bmight\b/gi) || []).length;
  score -= Math.min(3, vagueMatches);
  return Math.max(0, Math.min(10, score));
}

export function assessTextDepth(text) {
  if (!text) return 0;
  const lower = text.toLowerCase();
  const concreteCount = (lower.match(/\$[\d,]+|\d+%|\d+ (customer|user|interview|client)|\d+x|revenue|traction|proof|validated|measured|tested/g) || []).length;
  const vagueCount = (lower.match(/\bwe think\b|\bwe believe\b|\bpotentially\b|\bmaybe\b|\bpossibly\b|\bsomewhat\b/g) || []).length;
  return Math.max(0, Math.min(10, concreteCount * 2) - Math.min(5, vagueCount));
}

// ── Verdict Scores ──────────────────────────────────────────────────────────
export const VERDICT_SCORES = {
  REAL: 10, PERCEIVED: 5, MANUFACTURED: 0,
  TRANSFORMATIVE: 10, INCREMENTAL: 5, NEGLIGIBLE: 0,
  'STRUCTURALLY SOUND': 10, MARGINAL: 5, BROKEN: 0,
  'DURABLE MOAT': 10, 'TEMPORARY LEAD': 5, EXPOSED: 0,
  'RIGHT TEAM, RIGHT TIME': 10, 'TEAM GAP': 4, 'TIMING MISMATCH': 4,
};

// ── Dimension Scores ────────────────────────────────────────────────────────
export function calcProblemScore(responses) {
  const q1 = responses?.lsc?.Q1 || {};
  const a = responses?.dd?.A || {};
  const verdictScore = VERDICT_SCORES[q1.verdict] ?? 0;
  const inputQuality = assessTextQuality(q1.required_input, 20);
  const inputDepth = assessTextDepth(q1.required_input);
  const interviewScore = Math.min(10, ((a.interviews_count || 0) / 20) * 10);
  const severityMap = { Critical: 10, Serious: 7, Moderate: 4, Minor: 2 };
  const severityScore = severityMap[a.problem_severity] ?? 0;
  const notesQuality = assessTextQuality(a.validation_notes, 30);
  const notesDepth = assessTextDepth(a.validation_notes);
  const raw = verdictScore * 0.40 + inputQuality * 0.50 + inputDepth * 0.50 + interviewScore * 1.50 + severityScore * 1.50 + notesQuality * 1.00 + notesDepth * 0.50;
  const maxPossible = 10 * (0.40 + 0.50 + 0.50 + 1.50 + 1.50 + 1.00 + 0.50);
  return Math.round(Math.min(100, (raw / maxPossible) * 100));
}

export function calcSolutionScore(responses) {
  const q2 = responses?.lsc?.Q2 || {};
  const e = responses?.dd?.E || {};
  const verdictScore = VERDICT_SCORES[q2.verdict] ?? 0;
  const inputQuality = assessTextQuality(q2.required_input, 20);
  const inputDepth = assessTextDepth(q2.required_input);
  const scalingMap = { 'Exponential': 10, 'Strong': 8, 'Linear': 5, 'Sub-linear': 3 };
  const scalingScore = scalingMap[e.scaling_behavior] ?? 0;
  const revenueQuality = assessTextQuality(e.revenue_streams, 20);
  const pricingQuality = assessTextQuality(e.pricing_strategy, 15);
  const profitQuality = assessTextQuality(e.profitability_path, 15);
  const raw = verdictScore * 0.35 + inputQuality * 0.60 + inputDepth * 0.50 + scalingScore * 2.00 + revenueQuality * 0.80 + pricingQuality * 0.70 + profitQuality * 0.80;
  const maxPossible = 10 * (0.35 + 0.60 + 0.50 + 2.00 + 0.80 + 0.70 + 0.80);
  return Math.round(Math.min(100, (raw / maxPossible) * 100));
}

export function calcCommercialScore(responses) {
  const q3 = responses?.lsc?.Q3 || {};
  const b = responses?.dd?.B || {};
  const f = responses?.dd?.F || {};
  const verdictScore = VERDICT_SCORES[q3.verdict] ?? 0;
  const inputQuality = assessTextQuality(q3.required_input, 25);
  const inputDepth = assessTextDepth(q3.required_input);
  const marketNotesQuality = assessTextQuality(b.market_notes, 20);
  const gr = b.market_growth_rate ?? 0;
  const growthScore = gr >= 20 ? 10 : gr >= 10 ? 7 : gr >= 5 ? 4 : gr > 0 ? 2 : 0;
  const ltvCac = f.ltv_cac_ratio ?? 0;
  const ltvCacScore = ltvCac >= 5 ? 10 : ltvCac >= 3 ? 7 : ltvCac >= 2 ? 4 : ltvCac > 0 ? 2 : 0;
  const nrr = f.nrr ?? 0;
  const nrrScore = nrr >= 120 ? 10 : nrr >= 100 ? 7 : nrr >= 80 ? 4 : nrr > 0 ? 2 : 0;
  const stressQuality = assessTextQuality(f.stress_test_notes, 20);
  const raw = verdictScore * 0.25 + inputQuality * 0.60 + inputDepth * 0.50 + marketNotesQuality * 0.80 + growthScore * 1.50 + ltvCacScore * 2.00 + nrrScore * 1.50 + stressQuality * 0.80;
  const maxPossible = 10 * (0.25 + 0.60 + 0.50 + 0.80 + 1.50 + 2.00 + 1.50 + 0.80);
  return Math.round(Math.min(100, (raw / maxPossible) * 100));
}

export function calcMoatScore(responses) {
  const q4 = responses?.lsc?.Q4 || {};
  const d = responses?.dd?.D || {};
  const verdictScore = VERDICT_SCORES[q4.verdict] ?? 0;
  const inputQuality = assessTextQuality(q4.required_input, 20);
  const inputDepth = assessTextDepth(q4.required_input);
  const compoundingMap = { 'Strongly Compounding': 10, 'Moderately Compounding': 7, 'Stable': 5, 'Slowly Decaying': 3, 'Rapidly Decaying': 1 };
  const compoundingScore = compoundingMap[d.compounding_vs_decaying] ?? 0;
  const moatCount = (d.moat_types || []).filter(m => m !== 'None').length;
  const moatTypeScore = Math.min(10, (moatCount / 3) * 10);
  const moatPlanQuality = assessTextQuality(d.moat_plan, 20);
  const replicationQuality = assessTextQuality(d.replication_cost, 10);
  const raw = verdictScore * 0.30 + inputQuality * 0.60 + inputDepth * 0.50 + compoundingScore * 2.00 + moatTypeScore * 1.50 + moatPlanQuality * 1.00 + replicationQuality * 0.50;
  const maxPossible = 10 * (0.30 + 0.60 + 0.50 + 2.00 + 1.50 + 1.00 + 0.50);
  return Math.round(Math.min(100, (raw / maxPossible) * 100));
}

export function calcTeamTimingScore(responses) {
  const q5 = responses?.lsc?.Q5 || {};
  const verdictScore = VERDICT_SCORES[q5.verdict] ?? 0;
  const inputQuality = assessTextQuality(q5.required_input, 30);
  const inputDepth = assessTextDepth(q5.required_input);
  const raw = verdictScore * 0.50 + inputQuality * 3.00 + inputDepth * 2.00;
  const maxPossible = 10 * (0.50 + 3.00 + 2.00);
  return Math.round(Math.min(100, (raw / maxPossible) * 100));
}

export function calcProbability(h) {
  if (!h) return { central: 10, low: 1, high: 20 };
  let central = h.base_rate ?? 10;
  const pos = h.positive_adjustments || {};
  const neg = h.negative_adjustments || {};
  if (pos.domain_expertise) central += 5;
  if (pos.paying_customers) central += 10;
  if (pos.structural_moat) central += 5;
  if (pos.market_growth) central += 5;
  if (pos.strong_team) central += 5;
  if (pos.validated_economics) central += 5;
  if (neg.no_technical_cofounder) central -= 5;
  if (neg.crowded_market) central -= 5;
  if (neg.unproven_economics) central -= 5;
  if (neg.untested_model) central -= 10;
  if (neg.no_moat) central -= 5;
  if (neg.timing_risk) central -= 5;
  central = Math.max(1, Math.min(95, central));
  return { central, low: Math.max(1, central - 10), high: Math.min(95, central + 10) };
}

export function calcRecommendation(lsc, probability) {
  const q1 = lsc?.Q1 || {};
  const q2 = lsc?.Q2 || {};
  const q3 = lsc?.Q3 || {};
  const q4 = lsc?.Q4 || {};
  const q5 = lsc?.Q5 || {};

  if (q1.verdict === 'MANUFACTURED') return { recommendation: 'DISCARD', reason: 'The problem is assessed as manufactured. A fundamental re-framing is required before this venture can be evaluated.' };
  if (q2.verdict === 'NEGLIGIBLE') return { recommendation: 'DISCARD', reason: 'The solution provides negligible improvement over the status quo. There is insufficient reason for customers to switch.' };
  if (q3.verdict === 'BROKEN' && !q3.fix_plan?.trim()) return { recommendation: 'DISCARD', reason: 'The revenue model is broken and no credible fix plan has been provided.' };
  if (q3.verdict === 'BROKEN' && q3.fix_plan?.trim()) return { recommendation: 'PIVOT', reason: 'The revenue model is broken but a fix plan exists. Execution of that plan must be validated before re-evaluation.' };
  if (q4.verdict === 'EXPOSED' && !q4.moat_plan?.trim()) return { recommendation: 'PIVOT', reason: 'No defensibility has been identified and no moat-building plan provided.' };
  if ((q5.verdict === 'TEAM GAP' || q5.verdict === 'TIMING MISMATCH') && !q5.hiring_plan?.trim()) return { recommendation: 'PIVOT', reason: 'A team gap or timing mismatch has been identified without a mitigation plan.' };

  if (q1.verdict === 'REAL' && q2.verdict !== 'NEGLIGIBLE' && q3.verdict !== 'BROKEN' && probability >= 15) {
    const caveats = [];
    if (q4.verdict === 'EXPOSED' && q4.moat_plan?.trim()) caveats.push('defensibility is limited but a moat plan exists');
    if (q4.verdict === 'TEMPORARY LEAD') caveats.push('competitive moat is temporary');
    if (q5.verdict === 'TEAM GAP' && q5.hiring_plan?.trim()) caveats.push('team gaps exist but a hiring plan is in place');
    if (q5.verdict === 'TIMING MISMATCH' && q5.hiring_plan?.trim()) caveats.push('timing risk acknowledged and mitigated');
    const caveatText = caveats.length > 0 ? ` Note: ${caveats.join('; ')}.` : '';
    return { recommendation: 'INVEST', reason: `The venture meets the core INVEST criteria: real problem, meaningful solution, sound commercial model, and sufficient probability of success (${probability}%).${caveatText}` };
  }
  return { recommendation: 'PIVOT', reason: 'One or more core criteria are not yet met. Revisit the weakest areas and validate before re-evaluation.' };
}

export function calcAllScores(responses) {
  const prob = calcProbability(responses?.dd?.H);
  const { recommendation, reason } = calcRecommendation(responses?.lsc, prob.central);
  return {
    problem_score: calcProblemScore(responses),
    solution_score: calcSolutionScore(responses),
    commercial_score: calcCommercialScore(responses),
    moat_score: calcMoatScore(responses),
    team_timing_score: calcTeamTimingScore(responses),
    probability_range_low: prob.low,
    probability_range_high: prob.high,
    probability_central: prob.central,
    recommendation,
    recommendation_reason: reason,
  };
}
