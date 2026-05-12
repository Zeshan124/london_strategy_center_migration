'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function ContactLSC() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
    setFormData({ fullName: '', email: '' });
  };

  const inputClass = "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="max-w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-black mb-6">
              Contact the LSC Team
            </h2>
            <p className="text-sm sm:text-base  leading-relaxed mb-2">
              For leadership teams navigating the gap between strategic intent and organisational performance, whether the challenge is decision quality under complexity, strategy-to-execution alignment, or building the systems that sustain capability at scale, LSC provides the diagnostic rigour, the system-level perspective, and the embedded partnership that structural change requires.
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-2">
              To discuss how LSC's work applies to your organisation's specific context, contact the team.
            </p>

            <p className="font-bold text-gray-900 mb-4">
             To discuss how LSC's work applies to your organisation's specific context, contact the team.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-[#0E2253] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#1a3570] transition-all duration-300"
            >
              CONTACT THE TEAM
            </button>

            
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
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
                Contact the LSC Team
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
                London Strategy Centre is committed to protecting your privacy. For more information please review our{' '}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">privacy policy</a>.
              </p>
              <button type="submit" className="w-full sm:w-auto px-16 py-4 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300">
                SUBMIT
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
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your message has been received.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">A member of our team will be in touch shortly.</p>
              <button onClick={() => setShowSuccess(false)} className="px-12 py-3 bg-[#0E2253] text-white rounded-lg font-semibold hover:bg-[#1a3570] transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
