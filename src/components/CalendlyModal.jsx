import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';
import { useToast } from './Toast';

export default function CalendlyModal({ isOpen, onClose }) {
  const { showToast } = useToast();
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('3:00 PM (EST)');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const dates = ['Today', 'Tomorrow', 'Thursday', 'Friday'];
  const slots = ['10:00 AM (EST)', '1:30 PM (EST)', '3:00 PM (EST)', '4:30 PM (EST)', '6:00 PM (EST)'];

  const handleBooking = () => {
    setConfirmed(true);
    showToast(`Call scheduled for ${selectedDate} at ${selectedSlot}! Calendar invite sent.`, 'success');
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div id="calendly-modal" role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-[#FAFAFA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3649F5]/10 flex items-center justify-center text-[#3649F5]">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-switzer font-bold text-lg text-neutral-900">Book a Free Strategy Call</h3>
              <p className="text-xs font-vietnam text-neutral-500">30-minute 1-on-1 architecture & product review</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-switzer font-bold text-xl text-neutral-900">Meeting Confirmed!</h4>
            <p className="font-vietnam text-sm text-neutral-600">
              A Google Meet link and calendar invitation has been dispatched to your email.
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F4F6FF] border border-[#3649F5]/20">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow">
                <img
                  src="/ceo-jobayer.png"
                  alt="Jobayer Hossain"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3649F5] uppercase tracking-wider">Meet the Founder</p>
                <h4 className="font-switzer font-bold text-sm text-neutral-900">Jobayer Hossain · Founder &amp; Lead Architect</h4>
                <p className="text-xs text-neutral-500 font-vietnam">We'll review your roadmap, AI feasibility, and budget.</p>
              </div>
            </div>

            {/* Select Day */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Select Date
              </label>
              <div className="grid grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium font-vietnam text-center transition-all ${
                      selectedDate === d
                        ? 'bg-[#0B0B0B] text-white shadow-sm'
                        : 'bg-[#F5F5F7] text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Available Time Slots (Google Meet)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSlot(s)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium font-vietnam text-center transition-all border ${
                      selectedSlot === s
                        ? 'border-[#3649F5] bg-[#3649F5]/10 text-[#3649F5] font-semibold'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 inline mr-1 opacity-70" />
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs text-neutral-400 font-vietnam">
                Free 30-min call · Zero sales pressure
              </span>
              <button
                onClick={handleBooking}
                className="px-6 py-2.5 rounded-xl bg-[#3649F5] hover:bg-blue-700 text-white font-medium text-sm font-vietnam shadow-lg shadow-[#3649F5]/25 transition-all"
              >
                Confirm Call
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

