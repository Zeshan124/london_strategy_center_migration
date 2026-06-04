export const QUESTIONS = [
  {
    id: 1, domain: 'Leadership & Governance', domain_index: 1,
    question: 'Do you have clear responsibility for cybersecurity?',
    options: [
      { label: 'A', text: 'No one specifically responsible', score: 0 },
      { label: 'B', text: 'IT handles it when issues arise', score: 1 },
      { label: 'C', text: 'A named role or external provider oversees security', score: 2 },
    ],
  },
  {
    id: 2, domain: 'Leadership & Governance', domain_index: 1,
    question: 'How often is cyber risk discussed at management level?',
    options: [
      { label: 'A', text: 'Never', score: 0 },
      { label: 'B', text: 'Only after incidents', score: 1 },
      { label: 'C', text: 'Regularly as part of risk or operations meetings', score: 2 },
    ],
  },
  {
    id: 3, domain: 'People & Awareness', domain_index: 2,
    question: 'Have staff received any cyber awareness training in the last 12 months?',
    options: [
      { label: 'A', text: 'No', score: 0 },
      { label: 'B', text: 'Informal reminders only', score: 1 },
      { label: 'C', text: 'Structured training or simulations', score: 2 },
    ],
  },
  {
    id: 4, domain: 'People & Awareness', domain_index: 2,
    question: 'If someone receives a suspicious email, what usually happens?',
    options: [
      { label: 'A', text: 'No clear process', score: 0 },
      { label: 'B', text: 'They delete it or ask IT informally', score: 1 },
      { label: 'C', text: 'There is a reporting process or tool', score: 2 },
    ],
  },
  {
    id: 5, domain: 'Technology & Protection', domain_index: 3,
    question: 'Are critical systems protected by multi-factor authentication (MFA)?',
    options: [
      { label: 'A', text: 'No', score: 0 },
      { label: 'B', text: 'Some systems only', score: 1 },
      { label: 'C', text: 'Most or all critical systems', score: 2 },
    ],
  },
  {
    id: 6, domain: 'Technology & Protection', domain_index: 3,
    question: 'How often are systems and software updated?',
    options: [
      { label: 'A', text: 'Rarely or manually', score: 0 },
      { label: 'B', text: 'Periodically but not consistently', score: 1 },
      { label: 'C', text: 'Automatically or on a regular schedule', score: 2 },
    ],
  },
  {
    id: 7, domain: 'Data & Continuity', domain_index: 4,
    question: 'Are backups taken and tested?',
    options: [
      { label: 'A', text: 'No regular backups', score: 0 },
      { label: 'B', text: 'Backups exist but not tested', score: 1 },
      { label: 'C', text: 'Regularly tested backups', score: 2 },
    ],
  },
  {
    id: 8, domain: 'Data & Continuity', domain_index: 4,
    question: 'Do you know which data is most critical to your business?',
    options: [
      { label: 'A', text: 'Not clearly identified', score: 0 },
      { label: 'B', text: 'Rough idea only', score: 1 },
      { label: 'C', text: 'Clearly classified and prioritised', score: 2 },
    ],
  },
  {
    id: 9, domain: 'Incident Readiness', domain_index: 5,
    question: 'If a cyber incident happened tomorrow, do you have a response plan?',
    options: [
      { label: 'A', text: 'No plan', score: 0 },
      { label: 'B', text: 'Informal understanding only', score: 1 },
      { label: 'C', text: 'Documented plan and contacts', score: 2 },
    ],
  },
  {
    id: 10, domain: 'Incident Readiness', domain_index: 5,
    question: 'Have you tested your response to a cyber incident?',
    options: [
      { label: 'A', text: 'Never', score: 0 },
      { label: 'B', text: 'Discussed but not tested', score: 1 },
      { label: 'C', text: 'Tabletop or simulation exercises', score: 2 },
    ],
  },
];

export const COMPANY_SIZE_OPTIONS = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '200+ employees',
];

export function getReadinessLevel(totalScore) {
  const pct = (totalScore / 20) * 100;
  if (pct < 25) return 'High Risk Zone';
  if (pct < 50) return 'Developing Capability';
  if (pct < 75) return 'Good Foundation';
  return 'Strong Readiness';
}

export function getDomainStatus(score, maxScore) {
  const pct = (score / maxScore) * 100;
  if (pct < 34) return 'danger';
  if (pct < 67) return 'warning';
  return 'success';
}

// Client-side fallback scoring (mirrors the API logic)
export function calculateResultsLocally(answers) {
  const domainMap = {};
  QUESTIONS.forEach((q) => {
    const optionIndex = answers[q.id] ?? 0;
    const score = q.options[optionIndex]?.score ?? 0;
    if (!domainMap[q.domain]) domainMap[q.domain] = { score: 0, maxScore: 0 };
    domainMap[q.domain].score += score;
    domainMap[q.domain].maxScore += 2;
  });

  const domainScores = Object.entries(domainMap).map(([domain, { score, maxScore }]) => ({
    domain,
    score,
    maxScore,
    status: getDomainStatus(score, maxScore),
  }));

  const totalScore = domainScores.reduce((sum, d) => sum + d.score, 0);
  const readinessLevel = getReadinessLevel(totalScore);

  return { totalScore, maxScore: 20, readinessLevel, domainScores };
}

export const RECOMMENDATIONS = {
  'High Risk Zone': {
    priorityActions: [
      'Immediately establish a named cyber security lead or engage a specialist provider',
      'Implement multi-factor authentication on all critical business systems',
      'Begin mandatory cyber awareness training for all staff',
      'Develop a basic incident response plan with key contact information',
    ],
    quickWins: [
      'Enable automatic software updates on all systems',
      'Set up a clear process for reporting suspicious emails',
      'Create and test regular backups of critical data',
    ],
    strategicImprovements: [
      'Conduct a formal cyber risk assessment across your organisation',
      'Establish a cyber security governance structure with board-level oversight',
      'Implement a comprehensive security awareness program with regular training',
      'Develop supply chain cyber risk management processes',
    ],
  },
  'Developing Capability': {
    priorityActions: [
      'Strengthen your incident response plan with regular testing',
      'Extend MFA to all user accounts, not just critical systems',
      'Formalize cyber risk discussions in management meetings',
    ],
    quickWins: [
      'Conduct a data classification exercise to identify critical assets',
      'Implement endpoint protection on all devices',
      'Review and update your backup and recovery procedures',
    ],
    strategicImprovements: [
      'Develop a 12-month cyber improvement roadmap',
      'Consider a formal cyber security assessment or audit',
      'Build a cyber incident response team with defined roles',
    ],
  },
  'Good Foundation': {
    priorityActions: [
      'Maintain and enhance your current security measures',
      'Continue regular security awareness training and campaigns',
    ],
    quickWins: [
      'Review and update policies annually for relevance',
      'Expand security training to include emerging threats',
    ],
    strategicImprovements: [
      'Consider seeking external validation through security certifications',
      'Implement advanced threat detection capabilities',
      'Develop a crisis communication plan for major incidents',
    ],
  },
  'Strong Readiness': {
    priorityActions: [
      'Maintain your security posture through continuous improvement',
      'Share best practices across your organisation and industry',
    ],
    quickWins: [
      'Conduct peer benchmarking against industry standards',
      'Lead thought leadership in your sector on cyber security',
    ],
    strategicImprovements: [
      'Explore advanced security technologies and frameworks',
      'Consider obtaining advanced security certifications',
    ],
  },
};
