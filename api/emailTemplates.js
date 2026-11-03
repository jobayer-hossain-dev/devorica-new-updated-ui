/**
 * Apple-grade Email Templates for Devorica AI Product Studio
 * Derived from MCP design patterns (Ticket Confirmation, Email Draft, Contact Card, Apple Design).
 * Fully responsive across Apple Mail (iOS / macOS), Gmail, Outlook, Yahoo Mail.
 * Expansive full-width layout (max-width: 760px) with original Devorica logos.
 * Zero middle dashes used in copy.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const DEFAULT_LOGO_LIGHT = 'https://devorica.com/devorica-logo.png';
const DEFAULT_LOGO_DARK = 'https://devorica.com/brand/devorica-white-logo-tight.png';

/* =========================================================================
   TEMPLATE 1: CLIENT INQUIRY CONFIRMATION (Receipt Style)
   ========================================================================= */
export function renderClientReceiptEmail({
  fullName = 'Valued Partner',
  email = '',
  service = 'AI MVP Launch',
  budget = 'BDT 50k to 100k',
  message = '',
  referenceId = 'DEV-2026',
  date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  logoUrl = DEFAULT_LOGO_LIGHT
}) {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message);
  const safeRef = escapeHtml(referenceId);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_LIGHT);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Inquiry Received: Devorica</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F5F5F7;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Switzer", "Helvetica Neue", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #1D1D1F;
    }
    table { border-collapse: separate; }
    a { color: #0071E3; text-decoration: none; }
    .apple-card {
      background-color: #FFFFFF;
      border: 1px solid #E5E5EA;
      border-radius: 20px;
    }
    .badge-pill {
      display: inline-block;
      padding: 5px 14px;
      background-color: #F2F2F7;
      border: 1px solid #E5E5EA;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #1D1D1F;
    }
    .primary-btn {
      display: inline-block;
      background-color: #0A0A0A;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      padding: 16px 34px;
      border-radius: 9999px;
      text-align: center;
      letter-spacing: -0.01em;
      text-decoration: none;
    }
    .secondary-btn {
      display: inline-block;
      background-color: #F2F2F7;
      color: #1D1D1F !important;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      padding: 16px 34px;
      border-radius: 9999px;
      text-align: center;
      border: 1px solid #E5E5EA;
      letter-spacing: -0.01em;
      text-decoration: none;
    }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
      .stack-column { display: block !important; width: 100% !important; }
      .stack-spacer { height: 12px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Brand Header with Original Devorica Logo -->
      <tr>
        <td style="padding: 0 0 28px 0; text-align: center;">
          <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="${safeLogo}" alt="Devorica" width="176" style="display: block; width: 176px; max-width: 100%; height: auto; border: 0; outline: none; margin: 0 auto;" />
          </a>
          <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #86868B; margin-top: 8px;">
            AI Product Studio
          </div>
        </td>
      </tr>

      <!-- Expansive Main Card -->
      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="apple-card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);">
            <tr>
              <td class="mobile-padding" style="padding: 48px 56px 44px 56px;">
                <!-- Status Pill -->
                <span class="badge-pill">
                  Inquiry Received &bull; Priority Queue
                </span>

                <!-- Main Greeting -->
                <h1 style="margin: 22px 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Switzer', sans-serif; font-size: 28px; font-weight: 600; line-height: 1.25; letter-spacing: -0.03em; color: #111111;">
                  We have received your project details, ${safeName}.
                </h1>
                <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #6E6E73;">
                  Thank you for reaching out to Devorica. Our senior technical architects are reviewing your project requirements, tech stack feasibility, and release timeline.
                </p>

                <!-- Project Snapshot Card -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 16px; margin-bottom: 32px;">
                  <tr>
                    <td style="padding: 24px 28px;">
                      <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #86868B; margin-bottom: 18px;">
                        Submission Summary
                      </div>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B; width: 34%;">Service Interest</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeService}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Estimated Budget</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Contact Email</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #1D1D1F;">${safeEmail}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Reference ID</td>
                          <td style="padding: 8px 0; font-size: 14px; font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace; color: #0071E3;">${safeRef}</td>
                        </tr>
                        ${safeMessage ? `
                        <tr>
                          <td colspan="2" style="padding-top: 18px;">
                            <div style="font-size: 12px; font-weight: 500; color: #86868B; margin-bottom: 6px;">Your Project Note:</div>
                            <div style="font-size: 14px; line-height: 1.6; color: #1D1D1F; background: #FFFFFF; border: 1px solid #EBEBF0; border-radius: 10px; padding: 14px 18px;">
                              "${safeMessage}"
                            </div>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Next Steps Walkthrough -->
                <div style="font-size: 15px; font-weight: 600; color: #111111; margin-bottom: 14px;">
                  What you can expect next:
                </div>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 36px;">
                  <tr>
                    <td style="vertical-align: top; width: 28px; padding-top: 2px;">
                      <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #E5E5EA; font-size: 11px; font-weight: 700; line-height: 20px; text-align: center; color: #1D1D1F;">1</div>
                    </td>
                    <td style="padding-left: 12px; padding-bottom: 16px; font-size: 14px; line-height: 1.5; color: #48484A;">
                      <strong>Architect Review:</strong> We analyze product specs, third-party integrations, and technical constraints.
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 28px; padding-top: 2px;">
                      <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #E5E5EA; font-size: 11px; font-weight: 700; line-height: 20px; text-align: center; color: #1D1D1F;">2</div>
                    </td>
                    <td style="padding-left: 12px; padding-bottom: 16px; font-size: 14px; line-height: 1.5; color: #48484A;">
                      <strong>Rapid Response:</strong> You will receive a direct reply with actionable next steps within 2 hours.
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 28px; padding-top: 2px;">
                      <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #E5E5EA; font-size: 11px; font-weight: 700; line-height: 20px; text-align: center; color: #1D1D1F;">3</div>
                    </td>
                    <td style="padding-left: 12px; font-size: 14px; line-height: 1.5; color: #48484A;">
                      <strong>Discovery Call:</strong> If aligned, we map out your MVP architecture and sprint milestones in a 30-minute session.
                    </td>
                  </tr>
                </table>

                <!-- Action Buttons -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" style="padding-bottom: 28px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="stack-column" align="center" style="padding: 0 8px;">
                            <a href="https://calendly.com" target="_blank" class="primary-btn">
                              Schedule a Discovery Call
                            </a>
                          </td>
                          <td class="stack-spacer" height="0" width="0"></td>
                          <td class="stack-column" align="center" style="padding: 0 8px;">
                            <a href="https://wa.me/8801968819448" target="_blank" class="secondary-btn">
                              Chat on WhatsApp
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr><td style="border-top: 1px solid #E5E5EA; padding-top: 28px;"></td></tr>
                </table>

                <!-- Founder Sign-off -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="vertical-align: middle;">
                      <div style="font-size: 15px; font-weight: 600; color: #111111;">Jobayer Hossain</div>
                      <div style="font-size: 13px; color: #86868B; margin-top: 3px;">Founder &amp; CEO, Devorica</div>
                      <div style="font-size: 13px; color: #86868B; margin-top: 3px;">
                        <a href="mailto:support@devorica.com" style="color: #0071E3;">support@devorica.com</a> &bull; <a href="https://devorica.com" style="color: #0071E3;">devorica.com</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding: 28px 16px 0 16px; text-align: center;">
          <p style="margin: 0; font-size: 12px; line-height: 1.6; color: #86868B;">
            Devorica AI Product Studio &bull; High Performance Engineering &amp; AI Integration
          </p>
          <p style="margin: 4px 0 0 0; font-size: 11px; line-height: 1.6; color: #AEAEB2;">
            You received this confirmation because an inquiry was submitted with this email on devorica.com.
          </p>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `DEVORICA AI PRODUCT STUDIO
Inquiry Received: Confirmation for ${fullName}

Hi ${fullName},
Thank you for reaching out to Devorica. We have received your project details and our engineering team is already reviewing them.

YOUR INQUIRY SUMMARY
Reference ID: ${referenceId}
Date: ${date}
Service Interest: ${service}
Estimated Budget: ${budget}
Email: ${email}
${message ? `Project Note: "${message}"\n` : ''}

WHAT HAPPENS NEXT
1. Architect Review: We review your product requirements and technical architecture.
2. Rapid Response: We will reply to your inquiry with next steps within 2 hours.
3. Discovery Call: We map out milestones, timeline, and deliverables together.

LINKS & CONTACT
Schedule a Discovery Call: https://calendly.com
Chat on WhatsApp: https://wa.me/8801968819448
Direct Email: support@devorica.com

Warm regards,
Jobayer Hossain
Founder & CEO, Devorica
https://devorica.com
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE 2: ADMIN LEAD ALERT (Dark Studio HUD Style)
   ========================================================================= */
export function renderAdminNotificationEmail({
  fullName = 'New Client',
  email = 'client@example.com',
  service = 'AI MVP Launch',
  budget = 'BDT 50k to 100k',
  message = 'No additional message provided.',
  source = 'Contact Page Form',
  referenceId = 'DEV-2026',
  date = new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
  logoUrl = DEFAULT_LOGO_DARK
}) {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message);
  const safeSource = escapeHtml(source);
  const safeRef = escapeHtml(referenceId);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_DARK);

  const replyMailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Devorica: Following up on your ${service} inquiry`)}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Alert</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #0A0A0A;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Switzer", "Helvetica Neue", Arial, sans-serif;
      color: #EDEDED;
    }
    .card { background-color: #141414; border: 1px solid #282828; border-radius: 20px; }
    .reply-btn {
      display: inline-block;
      background-color: #0071E3;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      padding: 15px 30px;
      border-radius: 9999px;
      text-decoration: none;
    }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #0A0A0A;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Header Row with Original White Devorica Logo -->
      <tr>
        <td style="padding-bottom: 24px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td>
                <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
                  <img src="${safeLogo}" alt="Devorica" width="156" style="display: block; width: 156px; max-width: 100%; height: auto; border: 0;" />
                </a>
              </td>
              <td align="right">
                <span style="display: inline-block; padding: 5px 12px; background-color: #1F1F1F; border: 1px solid #333333; border-radius: 8px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; color: #30D158; text-transform: uppercase;">
                  New Incoming Lead
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Expansive Dark Card -->
      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #141414; border: 1px solid #282828; border-radius: 20px;">
            <tr>
              <td class="mobile-padding" style="padding: 44px 50px;">
                <div style="font-size: 12px; color: #8E8E93; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                  Reference: ${safeRef}
                </div>
                <h1 style="margin: 0 0 8px 0; font-size: 26px; font-weight: 600; color: #FFFFFF; letter-spacing: -0.02em;">
                  ${safeName}
                </h1>
                <div style="font-size: 15px; color: #0071E3; margin-bottom: 28px;">
                  <a href="${replyMailto}" style="color: #2997FF; text-decoration: none;">${safeEmail}</a>
                </div>

                <!-- Snapshot Table -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1C1C1E; border: 1px solid #2C2C2E; border-radius: 14px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 20px 24px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; font-size: 13px; color: #8E8E93; width: 34%;">Service</td>
                          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #FFFFFF;">${safeService}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 13px; color: #8E8E93;">Budget Range</td>
                          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #30D158;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 13px; color: #8E8E93;">Source</td>
                          <td style="padding: 8px 0; font-size: 14px; color: #EDEDED;">${safeSource}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 13px; color: #8E8E93;">Timestamp</td>
                          <td style="padding: 8px 0; font-size: 13px; color: #AEAEB2;">${date}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #8E8E93; margin-bottom: 10px;">
                  Client Message / Project Details
                </div>
                <div style="background-color: #1C1C1E; border-left: 3px solid #0071E3; border-radius: 6px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #F5F5F7; margin-bottom: 32px;">
                  ${safeMessage ? safeMessage.replace(/\n/g, '<br>') : '<span style="color: #636366; font-style: italic;">No message provided.</span>'}
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <a href="${replyMailto}" class="reply-btn">
                        Reply to ${safeName} &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding-top: 24px; text-align: center; font-size: 12px; color: #636366;">
          Devorica Automated Lead Dispatcher &bull; Internal Alert System
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `[NEW LEAD ALERT] Devorica Studio

Client Name: ${fullName}
Client Email: ${email}
Service: ${service}
Budget: ${budget}
Source: ${source}
Reference ID: ${referenceId}
Time: ${date}

Client Message:
${message || 'No message provided.'}

Reply Directly: ${email}
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE 3: STRATEGY & DISCOVERY CALL INVITATION (Meeting Booking)
   ========================================================================= */
export function renderStrategyCallInviteEmail({
  fullName = 'Founder',
  service = 'AI MVP Launch',
  meetingDate = 'Thursday, Nov 12, 2026',
  meetingTime = '3:30 PM BST (UTC+6)',
  meetingPlatform = 'Google Meet',
  meetingLink = 'https://meet.google.com/dev-call-sample',
  hostName = 'Jobayer Hossain',
  hostRole = 'Founder & CEO, Devorica',
  agendaItems = [
    'Deep dive into product scope, architecture and technical constraints',
    'Tech stack evaluation (Next.js, Python FastAPI, Vector DB, Cloud Deployments)',
    'Sprint timeline breakdown, milestone deliverables and transparent quote'
  ],
  logoUrl = DEFAULT_LOGO_LIGHT
}) {
  const safeName = escapeHtml(fullName);
  const safeService = escapeHtml(service);
  const safeDate = escapeHtml(meetingDate);
  const safeTime = escapeHtml(meetingTime);
  const safePlatform = escapeHtml(meetingPlatform);
  const safeLink = escapeHtml(meetingLink);
  const safeHost = escapeHtml(hostName);
  const safeHostRole = escapeHtml(hostRole);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_LIGHT);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strategy Call Invitation: Devorica</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F5F5F7;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Switzer", "Helvetica Neue", sans-serif;
      color: #1D1D1F;
    }
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px; }
    .join-btn {
      display: inline-block;
      background-color: #0071E3;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      padding: 16px 36px;
      border-radius: 9999px;
      text-decoration: none;
    }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Logo Header -->
      <tr>
        <td style="padding: 0 0 28px 0; text-align: center;">
          <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="${safeLogo}" alt="Devorica" width="176" style="display: block; width: 176px; max-width: 100%; height: auto; border: 0; margin: 0 auto;" />
          </a>
          <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #86868B; margin-top: 8px;">
            Product Architecture Session
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px;">
            <tr>
              <td class="mobile-padding" style="padding: 48px 56px;">
                <span style="display: inline-block; padding: 5px 14px; background-color: #EBF4FE; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #0071E3; text-transform: uppercase; letter-spacing: 0.05em;">
                  Confirmed Strategy Session
                </span>

                <h1 style="margin: 22px 0 12px 0; font-size: 26px; font-weight: 600; color: #111111; letter-spacing: -0.02em;">
                  Your 30-Minute Architecture Call is Ready, ${safeName}
                </h1>
                <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #6E6E73;">
                  We are excited to discuss your <strong>${safeService}</strong>. During this session, our senior architects will analyze your product specs and outline the fastest path to production.
                </p>

                <!-- Meeting Calendar Card -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 16px; margin-bottom: 32px;">
                  <tr>
                    <td style="padding: 24px 28px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B; width: 30%;">Date</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeDate}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Time</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeTime}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Platform</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #0071E3;">${safePlatform}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Session Host</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeHost} (${safeHostRole})</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Agenda Section -->
                <div style="font-size: 15px; font-weight: 600; color: #111111; margin-bottom: 12px;">
                  Session Agenda:
                </div>
                <div style="margin-bottom: 32px;">
                  ${agendaItems.map((item) => `
                    <div style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #48484A;">
                      &bull; ${escapeHtml(item)}
                    </div>
                  `).join('')}
                </div>

                <!-- Call to action button -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
                  <tr>
                    <td align="center">
                      <a href="${safeLink}" target="_blank" class="join-btn">
                        Join Meeting Link
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 24px; font-size: 13px; color: #86868B; text-align: center;">
                  Need to reschedule? Reply directly to this email or visit our Calendly link.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 28px 16px 0 16px; text-align: center; font-size: 12px; color: #86868B;">
          Devorica AI Product Studio &bull; High Performance Engineering
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `DEVORICA STRATEGY CALL INVITATION

Hi ${fullName},
Your 30-minute architecture strategy call is confirmed.

SESSION DETAILS
Date: ${meetingDate}
Time: ${meetingTime}
Platform: ${meetingPlatform}
Link: ${meetingLink}
Host: ${hostName} (${hostRole})

AGENDA
${agendaItems.map(i => '- ' + i).join('\n')}

Need to reschedule? Reply directly to this email.
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE 4: PROJECT PROPOSAL & ARCHITECTURE BLUEPRINT
   ========================================================================= */
export function renderProjectProposalEmail({
  fullName = 'Founder',
  projectName = 'NextGen AI Platform',
  scopeOverview = 'Full-cycle engineering of production MVP with AI agent workflow and high-converting responsive UI.',
  timeline = '4 Weeks (2 Sprints)',
  estimatedBudget = 'BDT 85,000',
  deliverables = [
    'Responsive Next.js Frontend with Tailwind CSS and Framer Motion',
    'Python FastAPI backend with asynchronous task queues',
    'AI Model integration with streaming token outputs',
    'CI/CD Dockerized cloud deployment with automated monitoring',
    '30 Days of dedicated post-launch system care'
  ],
  proposalLink = 'https://devorica.com/proposals/sample',
  validUntil = '14 Days from issuance',
  logoUrl = DEFAULT_LOGO_LIGHT
}) {
  const safeName = escapeHtml(fullName);
  const safeProject = escapeHtml(projectName);
  const safeTimeline = escapeHtml(timeline);
  const safeBudget = escapeHtml(estimatedBudget);
  const safeLink = escapeHtml(proposalLink);
  const safeValid = escapeHtml(validUntil);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_LIGHT);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Proposal: Devorica</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F5F5F7;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Switzer", "Helvetica Neue", sans-serif;
      color: #1D1D1F;
    }
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px; }
    .btn {
      display: inline-block;
      background-color: #0A0A0A;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      padding: 16px 36px;
      border-radius: 9999px;
      text-decoration: none;
    }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Logo Header -->
      <tr>
        <td style="padding: 0 0 28px 0; text-align: center;">
          <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="${safeLogo}" alt="Devorica" width="176" style="display: block; width: 176px; max-width: 100%; height: auto; border: 0; margin: 0 auto;" />
          </a>
          <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #86868B; margin-top: 8px;">
            Architecture &amp; Scope Delivery
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px;">
            <tr>
              <td class="mobile-padding" style="padding: 48px 56px;">
                <span style="display: inline-block; padding: 5px 14px; background-color: #F2F2F7; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #1D1D1F; text-transform: uppercase;">
                  Proposal &bull; ${safeProject}
                </span>

                <h1 style="margin: 22px 0 12px 0; font-size: 26px; font-weight: 600; color: #111111;">
                  Project Architecture &amp; Milestone Plan
                </h1>
                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #6E6E73;">
                  Hello ${safeName}, our senior engineering team has synthesized your requirements into a production roadmap. Here is the formal executive summary.
                </p>

                <!-- Scope Details Table -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 16px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 24px 28px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B; width: 34%;">Project Name</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeProject}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Target Timeline</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeTimeline}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Fixed Estimate</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #0071E3;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Proposal Validity</td>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">${safeValid}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 10px;">
                  Technical Deliverables:
                </div>
                <div style="margin-bottom: 32px;">
                  ${deliverables.map(d => `
                    <div style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #48484A;">
                      &check; ${escapeHtml(d)}
                    </div>
                  `).join('')}
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
                  <tr>
                    <td align="center">
                      <a href="${safeLink}" target="_blank" class="btn">
                        Review Full Proposal &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 24px; font-size: 13px; color: #86868B; text-align: center;">
                  To accept this proposal or discuss modifications, reply directly to this thread.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 28px 16px 0 16px; text-align: center; font-size: 12px; color: #86868B;">
          Devorica AI Product Studio &bull; Precision Software Delivery
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `DEVORICA PROJECT PROPOSAL

Hi ${fullName},
Your project proposal for ${projectName} is ready.

SUMMARY
Project: ${projectName}
Timeline: ${timeline}
Budget: ${estimatedBudget}
Validity: ${validUntil}

DELIVERABLES
${deliverables.map(d => '- ' + d).join('\n')}

Review Link: ${proposalLink}
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE 5: CLIENT ONBOARDING & SPRINT KICKOFF (Welcome Kit)
   ========================================================================= */
export function renderClientOnboardingEmail({
  fullName = 'Founder',
  projectName = 'Enterprise AI Platform',
  kickoffDate = 'Monday, Nov 16, 2026',
  leadArchitect = 'Jobayer Hossain & Senior AI Architects',
  slackChannel = '#devorica-client-hq',
  figmaUrl = 'https://figma.com/@devorica',
  stagingUrl = 'https://staging.devorica.com',
  sprint1Goal = 'Complete system architecture, design tokens, and core database migrations.',
  logoUrl = DEFAULT_LOGO_LIGHT
}) {
  const safeName = escapeHtml(fullName);
  const safeProject = escapeHtml(projectName);
  const safeDate = escapeHtml(kickoffDate);
  const safeArchitect = escapeHtml(leadArchitect);
  const safeSlack = escapeHtml(slackChannel);
  const safeFigma = escapeHtml(figmaUrl);
  const safeStaging = escapeHtml(stagingUrl);
  const safeGoal = escapeHtml(sprint1Goal);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_LIGHT);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Devorica</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F5F5F7;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Switzer", "Helvetica Neue", sans-serif;
      color: #1D1D1F;
    }
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px; }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Logo Header -->
      <tr>
        <td style="padding: 0 0 28px 0; text-align: center;">
          <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="${safeLogo}" alt="Devorica" width="176" style="display: block; width: 176px; max-width: 100%; height: auto; border: 0; margin: 0 auto;" />
          </a>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #86868B; margin-top: 8px;">
            Sprint 1 Kickoff Kit
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px;">
            <tr>
              <td class="mobile-padding" style="padding: 48px 56px;">
                <span style="display: inline-block; padding: 5px 14px; background-color: #EBF4FE; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #0071E3; text-transform: uppercase;">
                  Official Kickoff
                </span>

                <h1 style="margin: 22px 0 12px 0; font-size: 26px; font-weight: 600; color: #111111;">
                  Welcome to Devorica, ${safeName}
                </h1>
                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #6E6E73;">
                  Your project <strong>${safeProject}</strong> is officially in production. Below are your dedicated team channels and workspace access points.
                </p>

                <!-- Kickoff Details -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 16px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 24px 28px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B; width: 34%;">Kickoff Date</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeDate}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Assigned Lead</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1D1D1F;">${safeArchitect}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 14px; color: #86868B;">Private Channel</td>
                          <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #0071E3;">${safeSlack}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Sprint 1 Focus -->
                <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 10px;">
                  Sprint 1 Objective:
                </div>
                <div style="background-color: #F9F9FB; border-left: 3px solid #30D158; padding: 16px 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1D1D1F; margin-bottom: 32px;">
                  ${safeGoal}
                </div>

                <!-- Access Links -->
                <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 12px;">
                  Workspace Links:
                </div>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 6px 0; font-size: 14px;">
                      &bull; <a href="${safeFigma}" style="color: #0071E3; font-weight: 500;">Figma Interactive Prototype</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; font-size: 14px;">
                      &bull; <a href="${safeStaging}" style="color: #0071E3; font-weight: 500;">Live Staging Environment</a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 24px; font-size: 13px; color: #86868B;">
                  Questions or immediate updates? Message us anytime in your private Slack channel or reply here.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 28px 16px 0 16px; text-align: center; font-size: 12px; color: #86868B;">
          Devorica AI Product Studio &bull; Precision Software Delivery
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `WELCOME TO DEVORICA

Hi ${fullName},
Your project ${projectName} is officially kicking off.

KICKOFF DETAILS
Date: ${kickoffDate}
Lead Architect: ${leadArchitect}
Private Channel: ${slackChannel}

Sprint 1 Objective:
${sprint1Goal}

Workspace:
Figma: ${figmaUrl}
Staging: ${stagingUrl}
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE 6: STUDIO INSIGHTS & ENGINEERING NEWSLETTER
   ========================================================================= */
export function renderStudioNewsletterEmail({
  subscriberName = 'Reader',
  issueNumber = 'Vol. 14',
  issueTitle = 'Shipping AI MVPs in 18 Days',
  issueSummary = 'Key architectural patterns, model routing strategies, and UX decisions that increased trial to paid conversion by 34 percent.',
  keyTakeaways = [
    'Why strict modular contracts prevent AI hallucination regressions',
    'How intelligent edge caching saves 70 percent on LLM compute costs',
    'Micro-animations that build enterprise trust and lower customer drop-off'
  ],
  articleUrl = 'https://devorica.com/blog',
  readTime = '4 min read',
  authorName = 'Jobayer Hossain',
  logoUrl = DEFAULT_LOGO_LIGHT
}) {
  const safeName = escapeHtml(subscriberName);
  const safeVol = escapeHtml(issueNumber);
  const safeTitle = escapeHtml(issueTitle);
  const safeSummary = escapeHtml(issueSummary);
  const safeLink = escapeHtml(articleUrl);
  const safeTime = escapeHtml(readTime);
  const safeAuthor = escapeHtml(authorName);
  const safeLogo = escapeHtml(logoUrl || DEFAULT_LOGO_LIGHT);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Devorica Insights: ${safeVol}</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F5F5F7;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Switzer", "Helvetica Neue", sans-serif;
      color: #1D1D1F;
    }
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px; }
    .read-btn {
      display: inline-block;
      background-color: #0A0A0A;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      padding: 15px 32px;
      border-radius: 9999px;
      text-decoration: none;
    }
    @media only screen and (max-width: 640px) {
      .mobile-padding { padding: 28px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 40px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 760px; margin: 0 auto;">
      <!-- Logo Header -->
      <tr>
        <td style="padding: 0 0 28px 0; text-align: center;">
          <a href="https://devorica.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="${safeLogo}" alt="Devorica" width="176" style="display: block; width: 176px; max-width: 100%; height: auto; border: 0; margin: 0 auto;" />
          </a>
          <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #86868B; margin-top: 8px;">
            AI Architecture &bull; Engineering &bull; Design
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 20px;">
            <tr>
              <td class="mobile-padding" style="padding: 48px 56px;">
                <div style="margin-bottom: 18px;">
                  <span style="font-size: 11px; font-weight: 700; color: #0071E3; text-transform: uppercase; letter-spacing: 0.05em;">
                    ${safeVol} &bull; ${safeTime}
                  </span>
                </div>

                <h1 style="margin: 0 0 16px 0; font-size: 26px; font-weight: 600; color: #111111; line-height: 1.3;">
                  ${safeTitle}
                </h1>

                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #48484A;">
                  ${safeSummary}
                </p>

                <div style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
                  <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #86868B; margin-bottom: 14px;">
                    Key Takeaways in this Edition:
                  </div>
                  ${keyTakeaways.map(t => `
                    <div style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #1D1D1F;">
                      &bull; ${escapeHtml(t)}
                    </div>
                  `).join('')}
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
                  <tr>
                    <td>
                      <a href="${safeLink}" target="_blank" class="read-btn">
                        Read Full Article &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 24px; font-size: 13px; color: #86868B;">
                  Written by <strong>${safeAuthor}</strong> &bull; Devorica Studio
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 28px 16px 0 16px; text-align: center; font-size: 12px; color: #86868B;">
          Devorica AI Product Studio &bull; You received this because you are subscribed to Devorica Insights.
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const text = `DEVORICA INSIGHTS: ${issueNumber}
${issueTitle} (${readTime})

${issueSummary}

KEY TAKEAWAYS:
${keyTakeaways.map(t => '- ' + t).join('\n')}

Read here: ${articleUrl}
`;

  return { html, text };
}

/* =========================================================================
   TEMPLATE CATALOG REGISTRY (For Dynamic Dispatches & Studio UI)
   ========================================================================= */
export const EMAIL_TEMPLATE_CATALOG = {
  inquiry_receipt: {
    id: 'inquiry_receipt',
    name: 'Client Inquiry Receipt',
    description: 'Sent to client right after submitting an inquiry or project request',
    category: 'Client Facing',
    render: renderClientReceiptEmail,
    defaultData: {
      fullName: 'Alex Rivera',
      email: 'alex.rivera@example.com',
      service: 'AI MVP Launch',
      budget: 'BDT 50k to 100k',
      message: 'We are building an autonomous medical diagnostics platform and need a production MVP in 4 weeks.',
      referenceId: 'DEV-APL779',
      date: 'Nov 4, 2026',
      logoUrl: DEFAULT_LOGO_LIGHT
    }
  },
  admin_alert: {
    id: 'admin_alert',
    name: 'Admin Lead Alert',
    description: 'High-priority internal HUD dispatch sent to Devorica founder',
    category: 'Internal Team',
    render: renderAdminNotificationEmail,
    defaultData: {
      fullName: 'Alex Rivera',
      email: 'alex.rivera@example.com',
      service: 'AI MVP Launch',
      budget: 'BDT 50k to 100k',
      message: 'We are building an autonomous medical diagnostics platform and need a production MVP in 4 weeks.',
      source: 'Website Contact Page',
      referenceId: 'DEV-APL779',
      date: 'Nov 4, 2026, 1:15 AM',
      logoUrl: DEFAULT_LOGO_DARK
    }
  },
  strategy_call: {
    id: 'strategy_call',
    name: 'Strategy Call Invitation',
    description: 'Sent to client with confirmed meeting details, platform link, and agenda',
    category: 'Client Facing',
    render: renderStrategyCallInviteEmail,
    defaultData: {
      fullName: 'Alex Rivera',
      service: 'AI MVP Launch',
      meetingDate: 'Thursday, Nov 12, 2026',
      meetingTime: '3:30 PM BST (UTC+6)',
      meetingPlatform: 'Google Meet',
      meetingLink: 'https://meet.google.com/dev-call-sample',
      hostName: 'Jobayer Hossain',
      hostRole: 'Founder & CEO, Devorica',
      agendaItems: [
        'Deep dive into product scope, architecture and technical constraints',
        'Tech stack evaluation (Next.js, Python FastAPI, Vector DB, Cloud Deployments)',
        'Sprint timeline breakdown, milestone deliverables and transparent quote'
      ],
      logoUrl: DEFAULT_LOGO_LIGHT
    }
  },
  project_proposal: {
    id: 'project_proposal',
    name: 'Project Proposal Blueprint',
    description: 'Delivers technical architecture, milestone roadmap, and pricing estimate',
    category: 'Sales & Scoping',
    render: renderProjectProposalEmail,
    defaultData: {
      fullName: 'Alex Rivera',
      projectName: 'Autonomous Medical AI Platform',
      scopeOverview: 'Full-cycle engineering of production MVP with AI agent workflow and high-converting responsive UI.',
      timeline: '4 Weeks (2 Sprints)',
      estimatedBudget: 'BDT 85,000',
      deliverables: [
        'Responsive Next.js Frontend with Tailwind CSS and Framer Motion',
        'Python FastAPI backend with asynchronous task queues',
        'AI Model integration with streaming token outputs',
        'CI/CD Dockerized cloud deployment with automated monitoring',
        '30 Days of dedicated post-launch system care'
      ],
      proposalLink: 'https://devorica.com/proposals/sample',
      validUntil: '14 Days from issuance',
      logoUrl: DEFAULT_LOGO_LIGHT
    }
  },
  client_onboarding: {
    id: 'client_onboarding',
    name: 'Client Onboarding Kit',
    description: 'Official sprint kickoff with private channel, Figma, and staging links',
    category: 'Project Delivery',
    render: renderClientOnboardingEmail,
    defaultData: {
      fullName: 'Alex Rivera',
      projectName: 'Autonomous Medical AI Platform',
      kickoffDate: 'Monday, Nov 16, 2026',
      leadArchitect: 'Jobayer Hossain & Senior AI Architects',
      slackChannel: '#devorica-client-hq',
      figmaUrl: 'https://figma.com/@devorica',
      stagingUrl: 'https://staging.devorica.com',
      sprint1Goal: 'Complete system architecture, design tokens, and core database migrations.',
      logoUrl: DEFAULT_LOGO_LIGHT
    }
  },
  studio_newsletter: {
    id: 'studio_newsletter',
    name: 'Studio Insights Newsletter',
    description: 'Engineering digest and AI architecture case study release',
    category: 'Community & Content',
    render: renderStudioNewsletterEmail,
    defaultData: {
      subscriberName: 'Alex',
      issueNumber: 'Vol. 14',
      issueTitle: 'Shipping AI MVPs in 18 Days',
      issueSummary: 'Key architectural patterns, model routing strategies, and UX decisions that increased trial to paid conversion by 34 percent.',
      keyTakeaways: [
        'Why strict modular contracts prevent AI hallucination regressions',
        'How intelligent edge caching saves 70 percent on LLM compute costs',
        'Micro-animations that build enterprise trust and lower customer drop-off'
      ],
      articleUrl: 'https://devorica.com/blog',
      readTime: '4 min read',
      authorName: 'Jobayer Hossain',
      logoUrl: DEFAULT_LOGO_LIGHT
    }
  }
};
