export async function submitContactForm(formData) {
  const res = await fetch('https://lsc.impressoft.com/api/forms/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Submission failed');
  }
  return data;
}
