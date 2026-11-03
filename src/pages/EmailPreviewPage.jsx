import React, { useState, useMemo } from 'react';
import {
  Mail,
  CheckCircle2,
  ShieldAlert,
  Calendar,
  FileText,
  Rocket,
  BookOpen,
  Monitor,
  Maximize2,
  Smartphone,
  Send,
  Sparkles,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { EMAIL_TEMPLATE_CATALOG } from '../../api/emailTemplates.js';
import { useToast } from '../components/Toast';

export default function EmailPreviewPage() {
  const { showToast } = useToast();
  const [activeKey, setActiveKey] = useState('inquiry_receipt');
  const [viewport, setViewport] = useState('desktop'); // 'desktop', 'full', 'mobile'
  const [sendingTest, setSendingTest] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dynamic parameters state for each template with local original logo paths for instant preview
  const [templateParams, setTemplateParams] = useState({
    inquiry_receipt: {
      ...EMAIL_TEMPLATE_CATALOG.inquiry_receipt.defaultData,
      logoUrl: '/devorica-logo.png'
    },
    admin_alert: {
      ...EMAIL_TEMPLATE_CATALOG.admin_alert.defaultData,
      logoUrl: '/brand/devorica-white-logo-tight.png'
    },
    strategy_call: {
      ...EMAIL_TEMPLATE_CATALOG.strategy_call.defaultData,
      logoUrl: '/devorica-logo.png'
    },
    project_proposal: {
      ...EMAIL_TEMPLATE_CATALOG.project_proposal.defaultData,
      logoUrl: '/devorica-logo.png'
    },
    client_onboarding: {
      ...EMAIL_TEMPLATE_CATALOG.client_onboarding.defaultData,
      logoUrl: '/devorica-logo.png'
    },
    studio_newsletter: {
      ...EMAIL_TEMPLATE_CATALOG.studio_newsletter.defaultData,
      logoUrl: '/devorica-logo.png'
    }
  });

  const currentTemplate = EMAIL_TEMPLATE_CATALOG[activeKey];
  const currentData = templateParams[activeKey];

  const updateCurrentData = (key, value) => {
    setTemplateParams((prev) => ({
      ...prev,
      [activeKey]: {
        ...prev[activeKey],
        [key]: value
      }
    }));
  };

  const renderedEmail = useMemo(() => {
    if (!currentTemplate) return { html: '', text: '' };
    return currentTemplate.render(currentData);
  }, [currentTemplate, currentData]);

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(renderedEmail.html);
      setCopied(true);
      showToast('Raw HTML copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Failed to copy HTML.', 'error');
    }
  };

  const handleSendTest = async () => {
    setSendingTest(true);
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateType: activeKey,
          ...currentData,
          logoUrl: 'https://devorica.com/devorica-logo.png'
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        if (data.simulated) {
          showToast(`Dispatched in Ready Mode. Ref: ${data.referenceId}`, 'success');
        } else {
          showToast(`Live email dispatched via SMTP! Ref: ${data.referenceId}`, 'success');
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

  const templateIcons = {
    inquiry_receipt: CheckCircle2,
    admin_alert: ShieldAlert,
    strategy_call: Calendar,
    project_proposal: FileText,
    client_onboarding: Rocket,
    studio_newsletter: BookOpen
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-vietnam">
      <div className="max-w-[1540px] mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E5EA]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              Apple Grade Email Studio
            </div>
            <h1 className="font-switzer text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
              Expanded Dynamic Email Templates
            </h1>
            <p className="mt-1 text-sm text-[#86868B] max-w-2xl">
              Spacious full-width layouts (760px) featuring the original Devorica logo. 100% dynamic HTML email suite compatible with Apple Mail, Gmail, and Outlook.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyHtml}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] hover:bg-[#F2F2F7] transition shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#30D158]" /> : <Copy className="w-3.5 h-3.5 text-[#86868B]" />}
              {copied ? 'HTML Copied' : 'Copy HTML'}
            </button>

            <button
              onClick={handleSendTest}
              disabled={sendingTest}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold hover:bg-[#0077ED] transition shadow-sm disabled:opacity-60"
            >
              {sendingTest ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              {sendingTest ? 'Sending...' : 'Test Dispatch'}
            </button>
          </div>
        </div>

        {/* Template Catalog Grid Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-6">
          {Object.entries(EMAIL_TEMPLATE_CATALOG).map(([key, item]) => {
            const Icon = templateIcons[key] || Mail;
            const isSelected = activeKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-[#0071E3] bg-white ring-2 ring-[#0071E3]/20 shadow-sm'
                    : 'border-[#E5E5EA] bg-white/70 hover:bg-white text-[#48484A]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#0071E3]' : 'text-[#86868B]'}`} />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                    {item.category.split(' ')[0]}
                  </span>
                </div>
                <span className={`text-xs font-semibold line-clamp-1 ${isSelected ? 'text-[#111111]' : 'text-[#48484A]'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace: Left Controls & Right Preview */}
        <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-8 mt-8">
          {/* Left Controls Column */}
          <div className="flex flex-col gap-6">
            {/* Viewport Selector */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm">
              <label className="block text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-3">
                Preview Canvas Viewport
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setViewport('desktop')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-medium border transition ${
                    viewport === 'desktop'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#F9F9FB]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  Standard (760px)
                </button>
                <button
                  onClick={() => setViewport('full')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-medium border transition ${
                    viewport === 'full'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#F9F9FB]'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Full Width
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-medium border transition ${
                    viewport === 'mobile'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#1D1D1F] border-[#E5E5EA] hover:bg-[#F9F9FB]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile (375px)
                </button>
              </div>
            </div>

            {/* Dynamic Parameters Editor */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#F2F2F7]">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                    Dynamic Template Parameters
                  </h3>
                  <p className="text-[11px] text-[#86868B] mt-0.5">
                    {currentTemplate.name}
                  </p>
                </div>
                <span className="text-[10px] text-[#0071E3] font-medium bg-[#EBF4FE] px-2 py-0.5 rounded-full">
                  100% Dynamic
                </span>
              </div>

              {/* Dynamic Field Inputs based on Active Template */}
              {activeKey === 'inquiry_receipt' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Lead Name</label>
                    <input
                      type="text"
                      value={currentData.fullName || ''}
                      onChange={(e) => updateCurrentData('fullName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Lead Email</label>
                    <input
                      type="email"
                      value={currentData.email || ''}
                      onChange={(e) => updateCurrentData('email', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Service Interest</label>
                    <input
                      type="text"
                      value={currentData.service || ''}
                      onChange={(e) => updateCurrentData('service', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Estimated Budget</label>
                    <input
                      type="text"
                      value={currentData.budget || ''}
                      onChange={(e) => updateCurrentData('budget', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Project Note</label>
                    <textarea
                      rows={3}
                      value={currentData.message || ''}
                      onChange={(e) => updateCurrentData('message', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}

              {activeKey === 'admin_alert' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Client Full Name</label>
                    <input
                      type="text"
                      value={currentData.fullName || ''}
                      onChange={(e) => updateCurrentData('fullName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Client Email Address</label>
                    <input
                      type="email"
                      value={currentData.email || ''}
                      onChange={(e) => updateCurrentData('email', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Inquired Service</label>
                    <input
                      type="text"
                      value={currentData.service || ''}
                      onChange={(e) => updateCurrentData('service', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Target Budget</label>
                    <input
                      type="text"
                      value={currentData.budget || ''}
                      onChange={(e) => updateCurrentData('budget', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Lead Note</label>
                    <textarea
                      rows={3}
                      value={currentData.message || ''}
                      onChange={(e) => updateCurrentData('message', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}

              {activeKey === 'strategy_call' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Recipient Name</label>
                    <input
                      type="text"
                      value={currentData.fullName || ''}
                      onChange={(e) => updateCurrentData('fullName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Meeting Date</label>
                    <input
                      type="text"
                      value={currentData.meetingDate || ''}
                      onChange={(e) => updateCurrentData('meetingDate', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Meeting Time</label>
                    <input
                      type="text"
                      value={currentData.meetingTime || ''}
                      onChange={(e) => updateCurrentData('meetingTime', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Meeting Link</label>
                    <input
                      type="text"
                      value={currentData.meetingLink || ''}
                      onChange={(e) => updateCurrentData('meetingLink', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}

              {activeKey === 'project_proposal' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Client Name</label>
                    <input
                      type="text"
                      value={currentData.fullName || ''}
                      onChange={(e) => updateCurrentData('fullName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Project Name</label>
                    <input
                      type="text"
                      value={currentData.projectName || ''}
                      onChange={(e) => updateCurrentData('projectName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Timeline</label>
                    <input
                      type="text"
                      value={currentData.timeline || ''}
                      onChange={(e) => updateCurrentData('timeline', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Estimated Budget</label>
                    <input
                      type="text"
                      value={currentData.estimatedBudget || ''}
                      onChange={(e) => updateCurrentData('estimatedBudget', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}

              {activeKey === 'client_onboarding' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Client Name</label>
                    <input
                      type="text"
                      value={currentData.fullName || ''}
                      onChange={(e) => updateCurrentData('fullName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Project Name</label>
                    <input
                      type="text"
                      value={currentData.projectName || ''}
                      onChange={(e) => updateCurrentData('projectName', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Kickoff Date</label>
                    <input
                      type="text"
                      value={currentData.kickoffDate || ''}
                      onChange={(e) => updateCurrentData('kickoffDate', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Sprint 1 Objective</label>
                    <textarea
                      rows={2}
                      value={currentData.sprint1Goal || ''}
                      onChange={(e) => updateCurrentData('sprint1Goal', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}

              {activeKey === 'studio_newsletter' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Issue Title</label>
                    <input
                      type="text"
                      value={currentData.issueTitle || ''}
                      onChange={(e) => updateCurrentData('issueTitle', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Issue Number / Tag</label>
                    <input
                      type="text"
                      value={currentData.issueNumber || ''}
                      onChange={(e) => updateCurrentData('issueNumber', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#48484A] mb-1">Summary Brief</label>
                    <textarea
                      rows={3}
                      value={currentData.issueSummary || ''}
                      onChange={(e) => updateCurrentData('issueSummary', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E5EA] bg-[#F9F9FB] focus:bg-white focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Architecture Card */}
            <div className="bg-[#1C1C1E] text-white rounded-2xl p-5 border border-[#2C2C2E]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
                <span className="text-xs font-semibold text-[#8E8E93] uppercase tracking-wider">
                  Mailing Engine Active
                </span>
              </div>
              <p className="text-xs text-[#AEAEB2] leading-relaxed">
                Live delivery active through <code className="text-[#30D158]">mail.devorica.com</code> on port 465 (Secure SSL/TLS). All 6 email templates are wide, responsive, and render the official Devorica branding.
              </p>
            </div>
          </div>

          {/* Right Live Preview Canvas */}
          <div className="flex flex-col items-center w-full">
            <div
              className={`w-full transition-all duration-300 ${
                viewport === 'mobile'
                  ? 'max-w-[395px]'
                  : viewport === 'full'
                  ? 'w-full max-w-none'
                  : 'max-w-[840px]'
              }`}
            >
              {/* Mail Client Chrome Header */}
              <div className="bg-[#E5E5EA] rounded-t-2xl px-5 py-3.5 flex items-center justify-between border-b border-[#D1D1D6]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-xs font-medium text-[#636366] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {currentTemplate.name} &bull; Width: {viewport === 'mobile' ? '375px' : viewport === 'full' ? 'Fluid Full' : '760px'}
                </div>
                <div className="w-12" />
              </div>

              {/* Iframe Viewport Container */}
              <div className="bg-white rounded-b-2xl border border-t-0 border-[#E5E5EA] overflow-hidden shadow-xl min-h-[820px]">
                <iframe
                  title="Devorica Email Preview"
                  srcDoc={renderedEmail.html}
                  className="w-full h-[880px] border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
