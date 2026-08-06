const BASE = 'https://lsc.impressoft.com/api';

export async function submitFreeSessionBooking(name, email) {
  const res = await fetch(`${BASE}/free-session-bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Booking failed');
  return data; // { success, data: { id, name, email, ... } }
}
