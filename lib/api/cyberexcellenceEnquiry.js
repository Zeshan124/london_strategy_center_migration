export async function submitCyberExcellenceEnquiry(formData) {
  const res = await fetch('https://lsc.impressoft.com/api/forms/cyberexcellence-enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      full_name: formData.fullName,
      job_title: formData.jobTitle,
      company: formData.company,
      email: formData.email,
      contact_number: formData.contactNumber,
      message: formData.message,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
  return data;
}
