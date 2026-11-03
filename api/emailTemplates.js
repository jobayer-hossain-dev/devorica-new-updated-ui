/**
 * Apple-grade Email Templates for Devorica AI Product Studio
 * Derived from MCP design patterns (Ticket Confirmation, Email Draft, Contact Card, Apple Design).
 * Fully responsive across Apple Mail (iOS / macOS), Gmail, Outlook, Yahoo Mail.
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
  date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}) {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message);
  const safeRef = escapeHtml(referenceId);

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
      border-radius: 18px;
    }
    .badge-pill {
      display: inline-block;
      padding: 4px 12px;
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
      font-size: 13px;
      font-weight: 600;
      line-height: 1;
      padding: 14px 28px;
      border-radius: 9999px;
      text-align: center;
      letter-spacing: -0.01em;
      text-decoration: none;
    }
    .secondary-btn {
      display: inline-block;
      background-color: #F2F2F7;
      color: #1D1D1F !important;
      font-size: 13px;
      font-weight: 600;
      line-height: 1;
      padding: 14px 28px;
      border-radius: 9999px;
      text-align: center;
      border: 1px solid #E5E5EA;
      letter-spacing: -0.01em;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 24px 20px !important; }
      .stack-column { display: block !important; width: 100% !important; }
      .stack-spacer { height: 12px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <span style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Switzer', sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
            DEVORICA
          </span>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
            AI Product Studio
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="apple-card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);">
            <tr>
              <td class="mobile-padding" style="padding: 40px 40px 32px 40px;">
                <span class="badge-pill" style="display: inline-block; padding: 5px 13px; background-color: #F2F2F7; border: 1px solid #E5E5EA; border-radius: 9999px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #1D1D1F;">
                  Inquiry Received
                </span>

                <h1 style="margin: 20px 0 10px 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Switzer', sans-serif; font-size: 26px; font-weight: 600; line-height: 1.25; letter-spacing: -0.03em; color: #111111;">
                  We have received your project details, ${safeName}.
                </h1>
                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #6E6E73;">
                  Thank you for considering Devorica. Our senior technical architects are currently reviewing your project scope, architecture needs, and timeline.
                </p>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 14px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 20px 24px;">
                      <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #86868B; margin-bottom: 16px;">
                        Submission Summary
                      </div>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B; width: 36%;">Service Interest</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeService}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Estimated Budget</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Contact Email</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 500; color: #1D1D1F;">${safeEmail}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Reference ID</td>
                          <td style="padding: 6px 0; font-size: 13px; font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace; color: #0071E3;">${safeRef}</td>
                        </tr>
                        ${safeMessage ? `
                        <tr>
                          <td colspan="2" style="padding-top: 14px;">
                            <div style="font-size: 12px; font-weight: 500; color: #86868B; margin-bottom: 6px;">Your Project Note:</div>
                            <div style="font-size: 13px; line-height: 1.5; color: #1D1D1F; background: #FFFFFF; border: 1px solid #EBEBF0; border-radius: 8px; padding: 12px 14px;">
                              "${safeMessage}"
                            </div>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 12px;">
                  What you can expect next:
                </div>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
                  <tr>
                    <td style="vertical-align: top; width: 24px; padding-top: 2px;">
                      <div style="width: 18px; height: 18px; border-radius: 50%; background-color: #E5E5EA; font-size: 10px; font-weight: 700; line-height: 18px; text-align: center; color: #1D1D1F;">1</div>
                    </td>
                    <td style="padding-left: 10px; padding-bottom: 14px; font-size: 13px; line-height: 1.5; color: #48484A;">
                      <strong>Architect Review:</strong> We verify requirements, API integrations, and feasibility.
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 24px; padding-top: 2px;">
                      <div style="width: 18px; height: 18px; border-radius: 50%; background-color: #E5E5EA; font-size: 10px; font-weight: 700; line-height: 18px; text-align: center; color: #1D1D1F;">2</div>
                    </td>
                    <td style="padding-left: 10px; padding-bottom: 14px; font-size: 13px; line-height: 1.5; color: #48484A;">
                      <strong>Rapid Response:</strong> You will receive a direct reply with actionable next steps within 2 hours.
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 24px; padding-top: 2px;">
                      <div style="width: 18px; height: 18px; border-radius: 50%; background-color: #E5E5EA; font-size: 10px; font-weight: 700; line-height: 18px; text-align: center; color: #1D1D1F;">3</div>
                    </td>
                    <td style="padding-left: 10px; font-size: 13px; line-height: 1.5; color: #48484A;">
                      <strong>Discovery Call:</strong> If mutually aligned, we will map out your MVP or software architecture in a 30 minute strategy session.
                    </td>
                  </tr>
                </table>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" style="padding-bottom: 24px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="stack-column" align="center" style="padding: 0 6px;">
                            <a href="https://calendly.com" target="_blank" class="primary-btn">
                              Schedule a Discovery Call
                            </a>
                          </td>
                          <td class="stack-spacer" height="0" width="0"></td>
                          <td class="stack-column" align="center" style="padding: 0 6px;">
                            <a href="https://wa.me/8801968819448" target="_blank" class="secondary-btn">
                              Chat on WhatsApp
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr><td style="border-top: 1px solid #E5E5EA; padding-top: 24px;"></td></tr>
                </table>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="vertical-align: middle;">
                      <div style="font-size: 14px; font-weight: 600; color: #111111;">Jobayer Hossain</div>
                      <div style="font-size: 12px; color: #86868B; margin-top: 2px;">Founder &amp; CEO, Devorica</div>
                      <div style="font-size: 12px; color: #86868B; margin-top: 2px;">
                        <a href="mailto:contact@devorica.com" style="color: #0071E3;">contact@devorica.com</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 16px 0 16px; text-align: center;">
          <p style="margin: 0; font-size: 11px; line-height: 1.6; color: #86868B;">
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
Direct Email: contact@devorica.com

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
  date = new Date().toLocaleString('en-US', { timeZoneName: 'short' })
}) {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message);
  const safeSource = escapeHtml(source);
  const safeRef = escapeHtml(referenceId);

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
    .card { background-color: #141414; border: 1px solid #282828; border-radius: 16px; }
    .reply-btn {
      display: inline-block;
      background-color: #0071E3;
      color: #FFFFFF !important;
      font-size: 13px;
      font-weight: 600;
      padding: 13px 26px;
      border-radius: 9999px;
      text-decoration: none;
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #0A0A0A;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding-bottom: 20px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td>
                <span style="display: inline-block; padding: 4px 10px; background-color: #1F1F1F; border: 1px solid #333333; border-radius: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; color: #30D158; text-transform: uppercase;">
                  New Incoming Lead
                </span>
              </td>
              <td align="right" style="font-size: 12px; color: #8E8E93;">
                ${safeRef}
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #141414; border: 1px solid #282828; border-radius: 16px;">
            <tr>
              <td style="padding: 32px;">
                <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 600; color: #FFFFFF; letter-spacing: -0.02em;">
                  ${safeName}
                </h1>
                <div style="font-size: 14px; color: #0071E3; margin-bottom: 24px;">
                  <a href="${replyMailto}" style="color: #2997FF; text-decoration: none;">${safeEmail}</a>
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1C1C1E; border: 1px solid #2C2C2E; border-radius: 10px; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 16px 20px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 12px; color: #8E8E93; width: 34%;">Service</td>
                          <td style="padding: 6px 0; font-size: 13px; font-weight: 600; color: #FFFFFF;">${safeService}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 12px; color: #8E8E93;">Budget Range</td>
                          <td style="padding: 6px 0; font-size: 13px; font-weight: 600; color: #30D158;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 12px; color: #8E8E93;">Source</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #EDEDED;">${safeSource}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 12px; color: #8E8E93;">Timestamp</td>
                          <td style="padding: 6px 0; font-size: 12px; color: #AEAEB2;">${date}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #8E8E93; margin-bottom: 8px;">
                  Client Message / Notes
                </div>
                <div style="background-color: #1C1C1E; border-left: 3px solid #0071E3; border-radius: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #F5F5F7; margin-bottom: 28px;">
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
        <td style="padding-top: 20px; text-align: center; font-size: 11px; color: #636366;">
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
  ]
}) {
  const safeName = escapeHtml(fullName);
  const safeService = escapeHtml(service);
  const safeDate = escapeHtml(meetingDate);
  const safeTime = escapeHtml(meetingTime);
  const safePlatform = escapeHtml(meetingPlatform);
  const safeLink = escapeHtml(meetingLink);
  const safeHost = escapeHtml(hostName);
  const safeHostRole = escapeHtml(hostRole);

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
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; }
    .join-btn {
      display: inline-block;
      background-color: #0071E3;
      color: #FFFFFF !important;
      font-size: 14px;
      font-weight: 600;
      padding: 14px 32px;
      border-radius: 9999px;
      text-decoration: none;
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
            DEVORICA
          </span>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
            Product Architecture Session
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px;">
            <tr>
              <td style="padding: 40px;">
                <span style="display: inline-block; padding: 5px 12px; background-color: #EBF4FE; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #0071E3; text-transform: uppercase; letter-spacing: 0.05em;">
                  Confirmed Strategy Session
                </span>

                <h1 style="margin: 20px 0 10px 0; font-size: 24px; font-weight: 600; color: #111111; letter-spacing: -0.02em;">
                  Your 30-Minute Architecture Call is Ready, ${safeName}
                </h1>
                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #6E6E73;">
                  We are excited to discuss your <strong>${safeService}</strong>. During this session, our senior architects will analyze your product specs and outline the fastest path to production.
                </p>

                <!-- Meeting Calendar Card -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 14px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 24px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B; width: 30%;">Date</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeDate}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Time</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeTime}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Platform</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #0071E3;">${safePlatform}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Session Host</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeHost} (${safeHostRole})</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Agenda Section -->
                <div style="font-size: 14px; font-weight: 600; color: #111111; margin-bottom: 12px;">
                  Session Agenda:
                </div>
                <div style="margin-bottom: 28px;">
                  ${agendaItems.map((item, idx) => `
                    <div style="padding: 6px 0; font-size: 13px; line-height: 1.5; color: #48484A;">
                      &bull; ${escapeHtml(item)}
                    </div>
                  `).join('')}
                </div>

                <!-- Call to action button -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                  <tr>
                    <td align="center">
                      <a href="${safeLink}" target="_blank" class="join-btn">
                        Join Meeting Link
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 20px; font-size: 12px; color: #86868B; text-align: center;">
                  Need to reschedule? Reply directly to this email or visit our Calendly link.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 16px 0 16px; text-align: center; font-size: 11px; color: #86868B;">
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
  validUntil = '14 Days from issuance'
}) {
  const safeName = escapeHtml(fullName);
  const safeProject = escapeHtml(projectName);
  const safeScope = escapeHtml(scopeOverview);
  const safeTimeline = escapeHtml(timeline);
  const safeBudget = escapeHtml(estimatedBudget);
  const safeLink = escapeHtml(proposalLink);
  const safeValid = escapeHtml(validUntil);

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
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; }
    .btn {
      display: inline-block;
      background-color: #0A0A0A;
      color: #FFFFFF !important;
      font-size: 13px;
      font-weight: 600;
      padding: 14px 30px;
      border-radius: 9999px;
      text-decoration: none;
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
            DEVORICA
          </span>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
            Architecture &amp; Scope Delivery
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px;">
            <tr>
              <td style="padding: 40px;">
                <span style="display: inline-block; padding: 5px 12px; background-color: #F2F2F7; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #1D1D1F; text-transform: uppercase;">
                  Proposal &bull; ${safeProject}
                </span>

                <h1 style="margin: 20px 0 10px 0; font-size: 24px; font-weight: 600; color: #111111;">
                  Project Architecture &amp; Milestone Plan
                </h1>
                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #6E6E73;">
                  Hello ${safeName}, our senior engineering team has synthesized your requirements into a production roadmap. Here is the formal executive summary.
                </p>

                <!-- Scope Details Table -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 12px; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 20px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B; width: 34%;">Project Name</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeProject}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Target Timeline</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeTimeline}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Fixed Estimate</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #0071E3;">${safeBudget}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Proposal Validity</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">${safeValid}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="font-size: 13px; font-weight: 600; color: #111111; margin-bottom: 8px;">
                  Technical Deliverables:
                </div>
                <div style="margin-bottom: 28px;">
                  ${deliverables.map(d => `
                    <div style="padding: 5px 0; font-size: 13px; line-height: 1.5; color: #48484A;">
                      &check; ${escapeHtml(d)}
                    </div>
                  `).join('')}
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                  <tr>
                    <td align="center">
                      <a href="${safeLink}" target="_blank" class="btn">
                        Review Full Proposal &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 20px; font-size: 12px; color: #86868B; text-align: center;">
                  To accept this proposal or discuss modifications, reply directly to this thread.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 16px 0 16px; text-align: center; font-size: 11px; color: #86868B;">
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
  sprint1Goal = 'Complete system architecture, design tokens, and core database migrations.'
}) {
  const safeName = escapeHtml(fullName);
  const safeProject = escapeHtml(projectName);
  const safeDate = escapeHtml(kickoffDate);
  const safeArchitect = escapeHtml(leadArchitect);
  const safeSlack = escapeHtml(slackChannel);
  const safeFigma = escapeHtml(figmaUrl);
  const safeStaging = escapeHtml(stagingUrl);
  const safeGoal = escapeHtml(sprint1Goal);

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
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
            DEVORICA
          </span>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
            Sprint 1 Kickoff Kit
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px;">
            <tr>
              <td style="padding: 40px;">
                <span style="display: inline-block; padding: 5px 12px; background-color: #EBF4FE; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #0071E3; text-transform: uppercase;">
                  Official Kickoff
                </span>

                <h1 style="margin: 20px 0 10px 0; font-size: 24px; font-weight: 600; color: #111111;">
                  Welcome to Devorica, ${safeName}
                </h1>
                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #6E6E73;">
                  Your project <strong>${safeProject}</strong> is officially in production. Below are your dedicated team channels and workspace access points.
                </p>

                <!-- Kickoff Details -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 12px; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 20px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B; width: 34%;">Kickoff Date</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeDate}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Assigned Lead</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #1D1D1F;">${safeArchitect}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #86868B;">Private Channel</td>
                          <td style="padding: 6px 0; font-size: 14px; font-weight: 600; color: #0071E3;">${safeSlack}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Sprint 1 Focus -->
                <div style="font-size: 13px; font-weight: 600; color: #111111; margin-bottom: 8px;">
                  Sprint 1 Objective:
                </div>
                <div style="background-color: #F9F9FB; border-left: 3px solid #30D158; padding: 12px 16px; border-radius: 6px; font-size: 13px; line-height: 1.5; color: #1D1D1F; margin-bottom: 28px;">
                  ${safeGoal}
                </div>

                <!-- Access Links -->
                <div style="font-size: 13px; font-weight: 600; color: #111111; margin-bottom: 12px;">
                  Workspace Links:
                </div>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 6px 0; font-size: 13px;">
                      &bull; <a href="${safeFigma}" style="color: #0071E3; font-weight: 500;">Figma Interactive Prototype</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; font-size: 13px;">
                      &bull; <a href="${safeStaging}" style="color: #0071E3; font-weight: 500;">Live Staging Environment</a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 20px; font-size: 12px; color: #86868B;">
                  Questions or immediate updates? Message us anytime in your private Slack channel or reply here.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 16px 0 16px; text-align: center; font-size: 11px; color: #86868B;">
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
  authorName = 'Jobayer Hossain'
}) {
  const safeName = escapeHtml(subscriberName);
  const safeVol = escapeHtml(issueNumber);
  const safeTitle = escapeHtml(issueTitle);
  const safeSummary = escapeHtml(issueSummary);
  const safeLink = escapeHtml(articleUrl);
  const safeTime = escapeHtml(readTime);
  const safeAuthor = escapeHtml(authorName);

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
    .card { background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; }
    .read-btn {
      display: inline-block;
      background-color: #0A0A0A;
      color: #FFFFFF !important;
      font-size: 13px;
      font-weight: 600;
      padding: 13px 26px;
      border-radius: 9999px;
      text-decoration: none;
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
            DEVORICA INSIGHTS
          </span>
          <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
            AI Architecture &bull; Engineering &bull; Design
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px;">
            <tr>
              <td style="padding: 40px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                  <span style="font-size: 11px; font-weight: 700; color: #0071E3; text-transform: uppercase; letter-spacing: 0.05em;">
                    ${safeVol} &bull; ${safeTime}
                  </span>
                </div>

                <h1 style="margin: 0 0 14px 0; font-size: 24px; font-weight: 600; color: #111111; line-height: 1.3;">
                  ${safeTitle}
                </h1>

                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #48484A;">
                  ${safeSummary}
                </p>

                <div style="background-color: #FAFAFC; border: 1px solid #E5E5EA; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                  <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #86868B; margin-bottom: 12px;">
                    Key Takeaways in this Edition:
                  </div>
                  ${keyTakeaways.map(t => `
                    <div style="padding: 5px 0; font-size: 13px; line-height: 1.5; color: #1D1D1F;">
                      &bull; ${escapeHtml(t)}
                    </div>
                  `).join('')}
                </div>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                  <tr>
                    <td>
                      <a href="${safeLink}" target="_blank" class="read-btn">
                        Read Full Article &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #E5E5EA; padding-top: 20px; font-size: 12px; color: #86868B;">
                  Written by <strong>${safeAuthor}</strong> &bull; Devorica Studio
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px 16px 0 16px; text-align: center; font-size: 11px; color: #86868B;">
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
      date: 'Nov 4, 2026'
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
      date: 'Nov 4, 2026, 1:15 AM'
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
      ]
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
      validUntil: '14 Days from issuance'
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
      sprint1Goal: 'Complete system architecture, design tokens, and core database migrations.'
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
      authorName: 'Jobayer Hossain'
    }
  }
};
