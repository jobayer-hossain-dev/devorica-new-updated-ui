import React, { useEffect, useState } from 'react';
import { X, Send, Sparkles, Check } from 'lucide-react';
import { useToast } from './Toast';

export default function ProjectRequestModal({ isOpen, onClose }) {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'AI MVP Launch',
    budget: '$10k to $20k',
    message: ''
  });

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    'AI MVP Launch',
    'SaaS Product Engineering',
    'AI Automation & Agents',
    'Modern E-Commerce & D2C',
    'Product Experience & UI/UX',
    'Systems Care & Maintenance',
    'Dedicated Product Teams'
  ];

  const budgets = [
    'Less than $5k',
    '$5k to $10k',
    '$10k to $20k',
    '$20k to $50k',
    '$50k+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      showToast('Please fill in your name and email.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Project request submitted successfully! We will reach out within 2 hours.', 'success');
      onClose();
    }, 1000);
  };

  return (
    <div id="project-request-modal" role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#3649F5]/10 flex items-center justify-center text-[#3649F5]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-switzer font-bold text-lg text-neutral-900">Start Your Project</h3>
              <p className="text-xs font-vietnam text-neutral-500">Fast-track your roadmap with our senior team</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Services interest */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
              I'm interested in:
            </label>
            <div className="flex flex-wrap gap-2">
              {services.map((srv) => (
                <button
                  type="button"
                  key={srv}
                  onClick={() => setFormData({ ...formData, service: srv })}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-vietnam transition-all ${
                    formData.service === srv
                      ? 'bg-[#3649F5] text-white shadow-sm ring-2 ring-[#3649F5]/20'
                      : 'bg-[#F3F3F5] text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Budget selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
              Estimated Budget:
            </label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setFormData({ ...formData, budget: b })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-vietnam transition-all border ${
                    formData.budget === b
                      ? 'border-[#3649F5] bg-[#3649F5]/5 text-[#3649F5] font-semibold'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Full Name <span className="text-[#3649F5]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#F9F9FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3649F5] text-sm font-vietnam"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Work Email <span className="text-[#3649F5]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#F9F9FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3649F5] text-sm font-vietnam"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Project Details & Goals
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your product vision, timeline, and any key requirements..."
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-[#F9F9FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3649F5] text-sm font-vietnam resize-none"
            />
          </div>

          {/* Footer Submit */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
            <span className="text-xs font-vietnam text-neutral-400">
              ⚡ Guaranteed response in under 2 hours
            </span>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#3649F5] hover:bg-blue-700 text-white font-medium text-sm font-vietnam transition-colors shadow-lg shadow-[#3649F5]/25 disabled:opacity-50"
            >
              {loading ? (
                <>Sending Request...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

