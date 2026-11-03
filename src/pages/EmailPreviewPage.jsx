import React, { useState, useMemo } from 'react';
import { Mail, CheckCircle2, ShieldAlert, Monitor, Smartphone, Send, Sparkles, RefreshCw } from 'lucide-react';
import { renderClientReceiptEmail, renderAdminNotificationEmail } from '../../api/emailTemplates.js';
import { useToast } from '../components/Toast';

export default function EmailPreviewPage() {
  const { showToast } = useToast();
  const [activeTemplate, setActiveTemplate] = useState('client'); // 'client' or 'admin'
  const [viewport, setViewport] = useState('desktop'); // 'desktop' or 'mobile'
  const [sendingTest, setSendingTest] = useState(false);

  // Dynamic parameters for live template testing
  const [params, setParams] = useState({
    fullName: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    service: 'AI MVP Launch',
    budget: 'BDT 50k to 100k',
    message: 'We are building an autonomous medical diagnostics platform and need a production-grade MVP in 4 weeks.',
    referenceId: 'DEV-APL779',
    source: 'Website Contact Page'
  });

  const renderedData = useMemo(() => {
    if (activeTemplate === 'client') {
      return renderClientReceiptEmail(params);
    }
    return renderAdminNotificationEmail(params);
  }, [activeTemplate, params]);

  const handleSendTest = async () => {
    setSendingTest(true);
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: params.fullName,
          email: params.email,
          service: params.service,
          budget: params.budget,
          message: params.message,
          source: 'Email Preview Workbench'
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        if (data.simulated) {
          showToast(`Test processed in Ready Mode (SMTP pending). Ref: ${data.referenceId}`, 'success');
        } else {
          showToast(`Live email sent successfully! Ref: ${data.referenceId}`, 'success');
        }
      } else {
        showToast(data.error || 'Test send failed.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network error while testing mailing system.', 'error');
    } finally {
      setSendingTest(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Apple Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E5EA]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              Apple Grade Email Studio
            </div>
            <h1 className="font-switzer text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
              Dynamic Mailing System
            </h1>
            <p className="mt-1 text-sm text-[#86868B] max-w-2xl font-vietnam">
              Ultra clean, responsive HTML email templates tailored for Devorica AI Product Studio. Live dynamic rendering compatible with Apple Mail, Gmail, and Outlook.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSendTest}
              disabled={sendingTest}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold hover:bg-[#0077ED] transition shadow-sm disabled:opacity-60"
            >
              {sendingTest ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              {sendingTest ? 'Sending Test...' : 'Trigger Test Dispatch'}
            </button>
          </div>
        </div>

        {/* Studio Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 mt-8">
          {/* Left Configuration Panel */}
          <div className="flex flex-col gap-6">
            {/* Template Selector */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm">
              <label className="block text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-3">
                Select Template
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTemplate('client')}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition ${
                    activeTemplate === 'client'
                      ? 'border-[#0071E3] bg-[#F5FAFF] ring-2 ring-[#0071E3]/20'
                      : 'border-[#E5E5EA] bg-white hover:bg-[#F9F9FB]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
                    Client Receipt
                  </div>
                  <span className="text-[11px] text-[#86868B] mt-1">
                    Sent to lead on submission
                  </span>
                </button>

                <button
                  onClick={() => setActiveTemplate('admin')}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition ${
                    activeTemplate === 'admin'
                      ? 'border-[#0071E3] bg-[#F5FAFF] ring-2 ring-[#0071E3]/20'
                      : 'border-[#E5E5EA] bg-white hover:bg-[#F9F9FB]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                    <ShieldAlert className="w-4 h-4 text-[#30D158]" />
                    Admin Alert
                  </div>
                  <span className="text-[11px] text-[#86868B] mt-1">
                    Sent to Devorica founder
                  </span>
                </button>
              </div>
            </div>

            {/* Viewport Selector */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm">
              <label className="block text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-3">
                Preview Viewport
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setViewport('desktop')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium border transition ${
                    viewport === 'desktop'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#F9F9FB]'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  Desktop (600px)
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium border transition ${
                    viewport === 'mobile'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#F9F9FB]'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile (375px)
                </button>
              </div>
            </div>

            {/* Dynamic Variables Form */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#F2F2F7]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                  Dynamic Parameters
                </h3>
                <span className="text-[10px] text-[#0071E3] font-medium bg-[#EBF4FE] px-2 py-0.5 rounded-full">
                  Live Reactivity
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#48484A] mb-1">Lead Name</label>
                <input
                  type="text"
                  value={params.fullName}
                  onChange={(e) => setParams({ ...params, fullName: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#48484A] mb-1">Lead Email</label>
                <input
                  type="email"
                  value={params.email}
                  onChange={(e) => setParams({ ...params, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#48484A] mb-1">Service</label>
                <input
                  type="text"
                  value={params.service}
                  onChange={(e) => setParams({ ...params, service: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#48484A] mb-1">Budget Range</label>
                <input
                  type="text"
                  value={params.budget}
                  onChange={(e) => setParams({ ...params, budget: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#48484A] mb-1">Project Note</label>
                <textarea
                  rows={3}
                  value={params.message}
                  onChange={(e) => setParams({ ...params, message: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                />
              </div>
            </div>

            {/* SMTP Status Card */}
            <div className="bg-[#1C1C1E] text-white rounded-2xl p-5 border border-[#2C2C2E]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
                <span className="text-xs font-semibold text-[#8E8E93] uppercase tracking-wider">
                  Mailing Engine Status
                </span>
              </div>
              <p className="text-xs text-[#AEAEB2] leading-relaxed">
                The mailing system is ready in plug and play mode. Add your SMTP host, port, user, and password into <code className="text-[#30D158]">.env</code> or Vercel Environment Variables when ready. Until then, simulated mode captures all incoming inquiries without failing.
              </p>
            </div>
          </div>

          {/* Right Live Preview Canvas */}
          <div className="flex flex-col items-center">
            {/* Device Frame */}
            <div
              className={`w-full transition-all duration-300 ${
                viewport === 'mobile' ? 'max-w-[395px]' : 'max-w-[700px]'
              }`}
            >
              {/* Browser / Mailbox Header Bar */}
              <div className="bg-[#E5E5EA] rounded-t-2xl px-4 py-3 flex items-center justify-between border-b border-[#D1D1D6]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-xs font-medium text-[#636366] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {activeTemplate === 'client' ? 'Client Inbox: Confirmation' : 'Devorica Admin: New Lead'}
                </div>
                <div className="w-12" />
              </div>

              {/* Iframe Viewport */}
              <div className="bg-white rounded-b-2xl border border-t-0 border-[#E5E5EA] overflow-hidden shadow-xl min-h-[720px]">
                <iframe
                  title="Apple Email Preview"
                  srcDoc={renderedData.html}
                  className="w-full h-[760px] border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
