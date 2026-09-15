"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { submitLeadForm } from "@/lib/api/lead";

export default function CustomisedCTA() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitLeadForm(formData.fullName, formData.email, "Customised Solutions");
    } catch (err) {
      console.error("Lead API error:", err);
    }
    setSubmitting(false);
    setShowForm(false);
    setShowSuccess(true);
    setFormData({ fullName: "", email: "" });
  };

  const inputClass =
    "w-full px-4 py-3.5 border border-[#6B6B6B] rounded-xl text-sm text-[#6B6B6B] placeholder-[#6B6B6B] focus:outline-none focus:border-[#0E2253] transition-colors bg-white";

  return (
    <>
      <section id="enquire" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0E2253] px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
            <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/[0.05] pointer-events-none" />
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/[0.05] pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight mb-3">
                  Reach your potential with our customised executive solutions
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Tell us about your organisation and a member of our team will be
                  in touch to design a programme around your needs.
                </p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0E2253] text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Request a Programme
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
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
                Request a Customised Programme
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
                London Strategy Centre is committed to protecting your privacy. For
                more information please review our{" "}
                <a href="/privacy-policy" className="underline hover:text-[#0E2253] transition-colors">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-16 py-4 bg-[#0E2253] text-white text-xs tracking-widest uppercase rounded-xl hover:bg-[#1a3570] transition-all duration-300 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Request"}
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
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your enquiry has been received.</p>
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
