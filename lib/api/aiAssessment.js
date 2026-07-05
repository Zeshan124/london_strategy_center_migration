const BASE = 'https://lsc.impressoft.com/api';

export async function submitAIAssessment({ email, roleProfile, roleAnswers, capabilityAnswers, scores }) {
  const res = await fetch(`${BASE}/ai-assessments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      role_profile: {
        archetype: roleProfile.archetype,
        seniority: roleProfile.seniority,
        work_type: roleProfile.workType,
        ai_view: roleProfile.aiView,
        automation_exposure: roleProfile.automationExposure ?? 0,
        agentic_exposure: roleProfile.agenticExposure ?? 0,
        augmentation_score: roleProfile.augmentationScore ?? 0,
      },
      role_answers: roleAnswers,
      capability_answers: capabilityAnswers,
      scores: {
        awareness: scores.dimAvgs?.awareness ?? 0,
        prompting: scores.dimAvgs?.prompting ?? 0,
        workflow: scores.dimAvgs?.workflow ?? 0,
        build: scores.dimAvgs?.build ?? 0,
        governance: scores.dimAvgs?.governance ?? 0,
        overall: scores.overall ?? 0,
        maturity_level: scores.maturity ?? '',
        recommended_track: scores.track ?? '',
      },
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
  return data; // { success, session_id, message }
}
