export async function subscribeNewsletter(email) {
  const res = await fetch('https://lsc.impressoft.com/api/forms/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Subscription failed');
  }
  return data;
}
