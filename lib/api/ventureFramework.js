const BASE = 'https://lsc.impressoft.com/api/venture-framework';

export async function submitVentureLead({ full_name, email, phone, company, role, country, consent_contact }) {
  const res = await fetch(`${BASE}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      full_name,
      email,
      phone,
      company: company || '',
      role: role || '',
      country: country || '',
      consent_contact: !!consent_contact,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Lead submission failed');
  return data; // { success, lead_id, first_name }
}

export async function submitVentureEvaluation({ id, lead_email, venture_name, sector, stage, geography, venture_description, status = 'draft' }) {
  const res = await fetch(`${BASE}/evaluations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, lead_email, venture_name, sector, stage, geography, venture_description, status }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Evaluation submission failed');
  return data; // { success, id }
}
