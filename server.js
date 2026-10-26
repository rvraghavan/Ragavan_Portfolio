import dns from 'node:dns';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Enforce IPv4 lookups first to avoid DNS EBUSY/timeouts
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignore if unsupported
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '25kb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio Contact Email API is operational',
  });
});

// Contact message endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000 ||
      (subject != null && (typeof subject !== 'string' || subject.length > 200))
    ) {
      return res.status(400).json({
        success: false,
        error: 'One or more fields are invalid or too long.',
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const smtpUser = process.env.SMTP_USER || 'testrequestsender123@gmail.com';
    const smtpPass = (process.env.SMTP_PASS || 'nwypyurrgqtvshii').replace(/\s+/g, '');
    const receiverEmail = process.env.RECEIVER_EMAIL || 'rvraghavan.it@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject?.trim() || 'General Inquiry';
    const cleanMessage = message.trim();

    const mailSubject = `[Portfolio Inquiry] ${cleanSubject} - from ${cleanName}`;
    const mailText = `New inquiry from V. Raghavan's Portfolio Website\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`;
    const mailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px">
        <h2 style="color:#0284c7">New Portfolio Contact Inquiry</h2>
        <p><strong>Sender Name:</strong> ${cleanName}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <p><strong>Subject:</strong> ${cleanSubject}</p>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <h4>Message</h4>
        <div style="background:#f8fafc;padding:16px;border-radius:6px;white-space:pre-wrap;color:#1e293b">${cleanMessage}</div>
        <hr style="border:0;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <p style="font-size:11px;color:#64748b">Sent via V. Raghavan's portfolio website.</p>
      </div>
    `;

    // Strategy 1: SMTP via Gmail
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
        replyTo: `"${cleanName}" <${cleanEmail}>`,
        to: receiverEmail,
        subject: mailSubject,
        text: mailText,
        html: mailHtml,
      });

      console.log('Server sent email via SMTP:', info.messageId);

      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been submitted successfully.',
        messageId: info.messageId,
      });
    } catch (smtpError) {
      console.warn('Local SMTP delivery failed, falling back to Resend API:', smtpError.message);

      // Strategy 2: Resend API over HTTPS
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
          to: receiverEmail,
          replyTo: cleanEmail,
          subject: mailSubject,
          text: mailText,
          html: mailHtml,
        });

        if (!error && data?.id) {
          console.log('Server sent email via Resend fallback:', data.id);
          return res.status(200).json({
            success: true,
            message: 'Your inquiry has been submitted successfully.',
            messageId: data.id,
          });
        }
      }

      throw smtpError;
    }
  } catch (error) {
    console.error('Contact form submission failed:', error.message);
    return res.status(500).json({
      success: false,
      error: 'Unable to send message at this time: ' + error.message,
    });
  }
});

// Start express server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Portfolio API Server running on port ${PORT}`);
  });
}

export default app;
