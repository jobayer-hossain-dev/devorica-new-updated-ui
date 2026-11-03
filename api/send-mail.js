import fs from 'node:fs';
import nodemailer from 'nodemailer';
import {
  EMAIL_TEMPLATE_CATALOG,
  renderClientReceiptEmail,
  renderAdminNotificationEmail
} from './emailTemplates.js';

function getFileEnv() {
  try {
    const content = fs.readFileSync('.env', 'utf-8');
    const result = {};
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        result[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
      }
    }
    return result;
  } catch {
    return {};
  }
}

function getSmtpConfig() {
  const fileEnv = getFileEnv();
  const host = process.env.SMTP_HOST || fileEnv.SMTP_HOST || 'mail.devorica.com';
  const user = process.env.SMTP_USER || fileEnv.SMTP_USER || 'support@devorica.com';
  const pass = process.env.SMTP_PASS || fileEnv.SMTP_PASS || '';
  const port = parseInt(process.env.SMTP_PORT || fileEnv.SMTP_PORT || '465', 10);
  const secure = (process.env.SMTP_SECURE || fileEnv.SMTP_SECURE) === 'true' || port === 465;

  const fromEmail = process.env.SMTP_FROM_EMAIL || fileEnv.SMTP_FROM_EMAIL || user || 'support@devorica.com';
  const fromName = process.env.SMTP_FROM_NAME || fileEnv.SMTP_FROM_NAME || 'Devorica AI Product Studio';
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || fileEnv.ADMIN_NOTIFICATION_EMAIL || 'support@devorica.com';

  const isConfigured = Boolean(host && user && pass);

  return {
    isConfigured,
    host,
    port,
    secure,
    user,
    pass,
    fromEmail,
    fromName,
    adminEmail
  };
}

/**
 * Parses request body for both Vercel Serverless environment and Vite dev server middleware
 */
async function getRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(raw || '{}'));
      } catch {
        resolve({});
      }
    });
    req.on('error', () => {
      resolve({});
    });
  });
}

function sendJsonResponse(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.end(JSON.stringify(data));
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    return res.end();
  }

  if (req.method !== 'POST') {
    return sendJsonResponse(res, 405, {
      success: false,
      error: 'Method Not Allowed. Please send a POST request.'
    });
  }

  try {
    const body = await getRequestBody(req);
    const {
      templateType = '',
      fullName = '',
      email = '',
      interest = '',
      service = '',
      budget = '',
      message = '',
      source = 'Website Form',
      ...customProps
    } = body;

    const trimmedName = String(fullName || customProps.subscriberName || 'Valued Partner').trim();
    const trimmedEmail = String(email || customProps.to || '').trim().toLowerCase();
    const chosenService = String(service || interest || 'AI MVP Launch').trim();
    const chosenBudget = String(budget || 'BDT 50k to 100k').trim();
    const cleanMessage = String(message || '').trim();
    const cleanSource = String(source || 'Website Lead Form').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      return sendJsonResponse(res, 400, {
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const referenceId = `DEV-${Date.now().toString(36).toUpperCase()}`;
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const smtp = getSmtpConfig();

    // Check if a specific single template from the catalog was requested
    if (templateType && EMAIL_TEMPLATE_CATALOG[templateType]) {
      const templateDef = EMAIL_TEMPLATE_CATALOG[templateType];
      const mergedProps = {
        ...templateDef.defaultData,
        ...customProps,
        fullName: trimmedName,
        email: trimmedEmail,
        service: chosenService,
        budget: chosenBudget,
        message: cleanMessage,
        source: cleanSource,
        referenceId,
        date: formattedDate
      };

      const rendered = templateDef.render(mergedProps);

      if (smtp.isConfigured && trimmedEmail) {
        const transporter = nodemailer.createTransport({
          host: smtp.host,
          port: smtp.port,
          secure: smtp.secure,
          auth: { user: smtp.user, pass: smtp.pass },
          tls: { rejectUnauthorized: false }
        });

        await transporter.sendMail({
          from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
          to: trimmedEmail,
          subject: `${templateDef.name}: Devorica AI Product Studio`,
          text: rendered.text,
          html: rendered.html
        });

        return sendJsonResponse(res, 200, {
          success: true,
          referenceId,
          templateType,
          message: `Email dispatched successfully using ${templateDef.name} template.`
        });
      }

      // Simulation mode
      console.log('\n=============================================');
      console.log(`[DEVORICA MAILING SYSTEM: SINGLE TEMPLATE: ${templateDef.name}]`);
      console.log(`Recipient: ${trimmedEmail || smtp.adminEmail}`);
      console.log(`Template ID: ${templateType}`);
      console.log(`Reference: ${referenceId}`);
      console.log('Status: Rendered successfully. Ready for live SMTP delivery.');
      console.log('=============================================\n');

      return sendJsonResponse(res, 200, {
        success: true,
        simulated: true,
        referenceId,
        templateType,
        message: `Template ${templateDef.name} processed successfully in Ready Mode.`
      });
    }

    // Default Flow: Standard Lead Submission (Inquiry Receipt + Admin Notification)
    if (!trimmedName) {
      return sendJsonResponse(res, 400, {
        success: false,
        error: 'Please provide your full name.'
      });
    }
    if (!trimmedEmail) {
      return sendJsonResponse(res, 400, {
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const clientEmail = renderClientReceiptEmail({
      fullName: trimmedName,
      email: trimmedEmail,
      service: chosenService,
      budget: chosenBudget,
      message: cleanMessage,
      referenceId,
      date: formattedDate
    });

    const adminEmail = renderAdminNotificationEmail({
      fullName: trimmedName,
      email: trimmedEmail,
      service: chosenService,
      budget: chosenBudget,
      message: cleanMessage,
      source: cleanSource,
      referenceId,
      date: new Date().toLocaleString('en-US', { timeZoneName: 'short' })
    });

    if (smtp.isConfigured) {
      const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        auth: {
          user: smtp.user,
          pass: smtp.pass
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // 1. Send Admin Notification Email
      await transporter.sendMail({
        from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
        to: smtp.adminEmail,
        replyTo: `"${trimmedName}" <${trimmedEmail}>`,
        subject: `[New Lead Alert] ${trimmedName} (${chosenService})`,
        text: adminEmail.text,
        html: adminEmail.html
      });

      // 2. Send Client Confirmation Email
      await transporter.sendMail({
        from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
        to: trimmedEmail,
        subject: `Inquiry Received: We have received your project details [Devorica]`,
        text: clientEmail.text,
        html: clientEmail.html
      });

      return sendJsonResponse(res, 200, {
        success: true,
        referenceId,
        message: 'Inquiry received. Confirmation email sent successfully.'
      });
    }

    // SIMULATED / READY MODE
    console.log('\n=============================================');
    console.log('[DEVORICA MAILING SYSTEM - READY / SIMULATION MODE]');
    console.log(`Reference ID: ${referenceId}`);
    console.log(`Client: ${trimmedName} <${trimmedEmail}>`);
    console.log(`Service: ${chosenService} | Budget: ${chosenBudget}`);
    console.log(`Source: ${cleanSource}`);
    console.log(`Client Message: ${cleanMessage || '(none)'}`);
    console.log('Admin Notification Target:', smtp.adminEmail);
    console.log('Status: Email rendered successfully. Awaiting live SMTP credentials in .env');
    console.log('=============================================\n');

    return sendJsonResponse(res, 200, {
      success: true,
      simulated: true,
      referenceId,
      message: 'Inquiry received successfully! Confirmation queued for delivery.'
    });
  } catch (error) {
    console.error('[DEVORICA MAILING SYSTEM ERROR]:', error);
    return sendJsonResponse(res, 500, {
      success: false,
      error: 'An unexpected error occurred while processing your request. Please contact us at contact@devorica.com.'
    });
  }
}
