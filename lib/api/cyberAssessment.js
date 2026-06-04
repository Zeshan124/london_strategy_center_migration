const API_BASE = 'https://lsc.impressoft.com';

export async function submitLeadInfo(data) {
  const res = await fetch(`${API_BASE}/cyberexcellence/cyber-assessment/lead-info`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || 'Failed to save lead information');
  return json;
}

export async function submitAssessmentAnswers(data) {
  const res = await fetch(`${API_BASE}/cyberexcellence/cyber-assessment/answers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || 'Failed to submit assessment');
  return json;
}

export async function getAssessmentResults(sessionId) {
  const res = await fetch(`${API_BASE}/cyberexcellence/cyber-assessment/results/${sessionId}`);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || 'Failed to fetch results');
  return json;
}

export async function downloadAssessmentPDF(sessionId, companyName) {
  const res = await fetch(`${API_BASE}/cyberexcellence/cyber-assessment/download-pdf`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId }),
  });
  if (!res.ok) throw new Error('Failed to generate PDF');
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Cyber-Readiness-Scorecard-${companyName.replace(/\s+/g, '-')}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
