'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function ContactFormSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    organisation: '',
    email: '',
    whatsapp: '',
    linkedin: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccessModal(true);
    setFormData({ fullName: '', jobTitle: '', organisation: '', email: '', whatsapp: '', linkedin: '' });
  };

  const inputClass =
    'w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors text-sm sm:text-base';

  return (
    <>
      {/* Trigger Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col items-start gap-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900">
            Contact:{' '}
            <a href="mailto:enquiries@londonstrategycentre.com" className="underline hover:text-gray-700 transition-colors">
              enquiries@londonstrategycentre.com
            </a>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
            REGISTER YOUR INTEREST AND OUR TEAM WILL BE IN TOUCH
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-2 px-10 py-3.5 bg-[#0a1d4a] text-white rounded-lg font-medium text-sm hover:bg-[#1e3a6b] transition-all duration-300 uppercase tracking-wide"
          >
            Register Your Interest
          </button>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-1">
                Register Your Interest
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 uppercase tracking-wide">
                OUR TEAM WILL BE IN TOUCH
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="organisation"
                  required
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Organisation"
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Official Email Address"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Whatsapp Number"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn"
                  className={inputClass}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-12 sm:px-16 py-3.5 bg-[#0a1d4a] text-white rounded-lg font-medium text-sm hover:bg-[#1e3a6b] transition-all duration-300 uppercase tracking-wide"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0a1d4a] mb-4">Thank you</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-2">Your interest has been registered.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">Our team will be in touch shortly.</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-12 py-3 bg-[#0a1d4a] text-white rounded-lg font-semibold hover:bg-[#1e3a6b] transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
