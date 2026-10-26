import dns from 'node:dns';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Force IPv4 lookup first to prevent getaddrinfo EBUSY / IPv6 timeouts in Vercel serverless
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // If not supported in environment, continue
}

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const smtpUser = process.env.SMTP_USER || 'testrequestsender123@gmail.com';
    const smtpPass = (process.env.SMTP_PASS || 'nwypyurrgqtvshii').replace(/\s+/g, '');
    const receiverEmail = process.env.RECEIVER_EMAIL || 'rvraghavan.it@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    const mailSubject = subject && subject.trim()
      ? `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`
      : `[Portfolio Inquiry] Message from ${name.trim()}`;

    const textBody = `New Inquiry from Raghavan's Portfolio Website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}\n\n---\nSent via V. Raghavan Portfolio Website`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-top: 0;">New Portfolio Contact Inquiry</h2>
        <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <h4 style="color: #334155; margin-bottom: 8px;">Message:</h4>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">Delivered to ${receiverEmail} via Raghavan Portfolio System.</p>
      </div>
    `;

    // 1. Primary Strategy: Direct Gmail SMTP with IPv4 resolution
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        pool: false,
        tls: {
          rejectUnauthorized: false,
        },
      });

      const info = await transporter.sendMail({
        from: `"V. Raghavan Portfolio" <${smtpUser}>`,
        replyTo: `"${name}" <${email}>`,
        to: receiverEmail,
        subject: mailSubject,
        text: textBody,
        html: htmlBody,
      });

      console.log('Email delivered via SMTP:', info.messageId);

      return res.status(200).json({
        success: true,
        message: 'Email successfully sent via SMTP to ' + receiverEmail,
        messageId: info.messageId,
      });
    } catch (smtpErr) {
      console.warn('SMTP delivery attempt failed, trying HTTP Resend fallback:', smtpErr.message);

      // 2. Secondary Strategy: Resend API over HTTPS (port 443)
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
          to: receiverEmail,
          replyTo: email,
          subject: mailSubject,
          text: textBody,
          html: htmlBody,
        });

        if (!error && data?.id) {
          console.log('Email delivered via Resend fallback:', data.id);
          return res.status(200).json({
            success: true,
            message: 'Email successfully sent to ' + receiverEmail,
            messageId: data.id,
          });
        }
      }

      // If both fail, throw SMTP error
      throw smtpErr;
    }
  } catch (err) {
    console.error('All email delivery strategies failed:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An error occurred while sending email.',
    });
  }
}
