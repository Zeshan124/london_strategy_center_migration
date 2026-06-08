"use client";

import { useState } from "react";
import { submitLeadForm } from "@/lib/api/lead";
import Image from "next/image";
import { X } from "lucide-react";

export default function AdvisoryHero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitLeadForm(formData.fullName, formData.email, 'advisory-services');
    } catch {}
    setSubmitting(false);
    setShowForm(false);
    setShowSuccess(true);
    setFormData({ fullName: '', email: '' });
  };

  const inputClass = "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";

  return (
    <div className="min-h-screen bg-white lg:pt-28 py-0">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-8 md:py-8 lg:pt-16">

        {/* Hero Card */}
        <div className="rounded-2xl overflow-hidden relative min-h-[340px] sm:min-h-[450px]">
          {/* Background Image */}
          <Image
            src="/images/InnerPages/advisory/advisory_hero.jpeg"
            alt="AI Services"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/60" /> */}

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center px-8 sm:px-10 md:px-12 py-12 h-full min-h-[340px] sm:min-h-[420px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-3">
  Advisory Services <br />
That Redesign How <br />
Organisations Decide <br />
and Execute
</h1>
           <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowForm(true)}
                className="px-5 py-2.5 bg-transparent border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact the Advisory Team
              </button>
            </div>
          </div>
        </div>

        {/* Below-card description */}
        <p className="mt-8 text-sm sm:text-base text-gray-700 leading-relaxed">
        Most advisory engagements produce recommendations. Few change how an organisation actually works. The gap between strategic advice and operational reality is where value is lost — and where most advisory relationships quietly fail. Organisations receive insight but not intervention. They get a diagnosis but not the system-level change required to shift performance.
        </p>

        <p className="mt-8 text-sm sm:text-base text-gray-700 leading-relaxed">
       London Strategy Centre (LSC) takes a different position. As an AI-augmented organisational capability transformation partner, LSC's advisory practice does not stop at recommendation. It operates at the intersection of strategy, execution, and organisational design — working with leadership teams to redesign the systems through which decisions are made, execution happens, and capability compounds over time.
        </p>

       

        {/* Section below */}
        {/* <div className="mt-12 sm:mt-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
            AI fails when it operates without governance
          </h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Organisations invest in AI tools, build pilot programmes, and deploy automation at pace. These are necessary steps. They are not sufficient. The persistent gap is between AI capability and the governance structures that direct it — between knowing what AI can do and having the organisational capability to ensure it does the right things.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              This is where most AI support falls short. It addresses the technical layer without engaging the decision-making layer. It doesn't build the operational maturity to sustain and govern AI at scale.
            </p>
          </div>
        </div> */}

      </div>

      {/* Consultation Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight mb-2">
                Contact the Advisory Team
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Submit your details and a member of our team will be in touch shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pt-1">
                London Strategy Centre is committed to protecting your privacy. For more information please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">privacy policy</a>.
              </p>
              <button type="submit" disabled={submitting} className="w-full sm:w-auto px-16 py-4 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300 disabled:opacity-60">
                {submitting ? 'Submitting...' : 'SUBMIT REQUEST'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E2253] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your consultation request has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">A member of our team will be in touch shortly.</p>
              <button onClick={() => setShowSuccess(false)} className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
