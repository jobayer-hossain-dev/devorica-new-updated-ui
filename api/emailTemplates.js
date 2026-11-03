/**
 * Apple-grade Email Templates for Devorica AI Product Studio
 * Ultra clean, minimal, responsive email templates compatible with:
 * Apple Mail (iOS / macOS), Gmail, Outlook, Yahoo Mail, and modern web clients.
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

/**
 * Client Confirmation Email (Sent to the client after inquiry submission)
 */
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
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important; }
  </style>
  <![endif]-->
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
    table {
      border-collapse: separate;
    }
    a {
      color: #0071E3;
      text-decoration: none;
    }
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
    }
    @media only screen and (max-width: 600px) {
      .mobile-padding {
        padding: 24px 20px !important;
      }
      .stack-column {
        display: block !important;
        width: 100% !important;
      }
      .stack-spacer {
        height: 12px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #F5F5F7;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
      <!-- Brand Header -->
      <tr>
        <td style="padding: 0 0 24px 0; text-align: center;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center">
                <span style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Switzer', sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.04em; color: #0A0A0A;">
                  DEVORICA
                </span>
                <div style="font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #86868B; margin-top: 4px;">
                  AI Product Studio
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Main Apple Card Container -->
      <tr>
        <td>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="apple-card" style="background-color: #FFFFFF; border: 1px solid #E5E5EA; border-radius: 18px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);">
            <tr>
              <td class="mobile-padding" style="padding: 40px 40px 32px 40px;">
                <!-- Status Pill -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <span class="badge-pill" style="display: inline-block; padding: 5px 13px; background-color: #F2F2F7; border: 1px solid #E5E5EA; border-radius: 9999px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #1D1D1F;">
                        Inquiry Received
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Main Greeting -->
                <h1 style="margin: 20px 0 10px 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Switzer', sans-serif; font-size: 26px; font-weight: 600; line-height: 1.25; letter-spacing: -0.03em; color: #111111;">
                  We have received your project details, ${safeName}.
                </h1>
                <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.6; color: #6E6E73;">
                  Thank you for considering Devorica. Our senior technical architects are currently reviewing your project scope, architecture needs, and timeline.
                </p>

                <!-- Project Snapshot Card -->
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

                <!-- Next Steps Walkthrough -->
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

                <!-- Call to Action Buttons -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" style="padding-bottom: 24px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="stack-column" align="center" style="padding: 0 6px;">
                            <a href="https://calendly.com" target="_blank" class="primary-btn" style="display: inline-block; background-color: #0A0A0A; color: #FFFFFF !important; font-size: 13px; font-weight: 600; padding: 14px 28px; border-radius: 9999px; text-decoration: none;">
                              Schedule a Discovery Call
                            </a>
                          </td>
                          <td class="stack-spacer" height="0" width="0"></td>
                          <td class="stack-column" align="center" style="padding: 0 6px;">
                            <a href="https://wa.me/8801968819448" target="_blank" class="secondary-btn" style="display: inline-block; background-color: #F2F2F7; color: #1D1D1F !important; font-size: 13px; font-weight: 600; padding: 14px 28px; border-radius: 9999px; border: 1px solid #E5E5EA; text-decoration: none;">
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
                  <tr>
                    <td style="border-top: 1px solid #E5E5EA; padding-top: 24px;"></td>
                  </tr>
                </table>

                <!-- Founder Sign-off -->
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

      <!-- Minimal Apple Footer -->
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

/**
 * Admin Notification Email (Sent to Devorica Admin / Founder)
 */
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
    .card {
      background-color: #141414;
      border: 1px solid #282828;
      border-radius: 16px;
    }
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
      <!-- Header -->
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

      <!-- Card Body -->
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

                <!-- Snapshot Table -->
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

                <!-- Message Box -->
                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #8E8E93; margin-bottom: 8px;">
                  Client Message / Notes
                </div>
                <div style="background-color: #1C1C1E; border-left: 3px solid #0071E3; border-radius: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #F5F5F7; margin-bottom: 28px;">
                  ${safeMessage ? safeMessage.replace(/\n/g, '<br>') : '<span style="color: #636366; font-style: italic;">No message provided.</span>'}
                </div>

                <!-- Action Button -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <a href="${replyMailto}" class="reply-btn" style="display: inline-block; background-color: #0071E3; color: #FFFFFF !important; font-size: 13px; font-weight: 600; padding: 13px 26px; border-radius: 9999px; text-decoration: none;">
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

      <!-- Footer -->
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
