const BASE = 'https://lsc.impressoft.com/api';

export async function saveRoadmapProgress(sessionId, completedDays, totalActivities) {
  const completed_activities = Object.entries(completedDays)
    .filter(([, done]) => done)
    .map(([key]) => key);

  const completion_percentage = totalActivities > 0
    ? Math.round((completed_activities.length / totalActivities) * 100)
    : 0;

  const res = await fetch(`${BASE}/ai-assessment/roadmap/progress`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, completed_activities, completion_percentage }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Progress save failed');
  return data;
}
