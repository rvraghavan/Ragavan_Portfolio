
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '20kb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Resend email service is operational',
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
        error: 'Name, email, and message are required.',
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000 ||
      (subject != null &&
        (typeof subject !== 'string' || subject.length > 200))
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

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!apiKey || !receiverEmail) {
      console.error('Missing RESEND_API_KEY or RECEIVER_EMAIL');

      return res.status(500).json({
        success: false,
        error: 'Email service is not configured.',
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject?.trim() || 'General Inquiry';
    const cleanMessage = message.trim();

    // Escape user input before inserting it into HTML.
    const escapeHtml = (value) =>
      value.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]);

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject);
    const safeMessage = escapeHtml(cleanMessage);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Testing sender. Verify your own domain for production.
        from: 'V. Raghavan Portfolio <onboarding@resend.dev>',
        to: [receiverEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio Inquiry] ${cleanSubject} - from ${cleanName}`,
        text:
          `New inquiry from V. Raghavan's Portfolio Website\n\n` +
          `Name: ${cleanName}\n` +
          `Email: ${cleanEmail}\n` +
          `Subject: ${cleanSubject}\n\n` +
          `Message:\n${cleanMessage}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px">
            <h2 style="color:#0284c7">New Portfolio Contact Inquiry</h2>
            <p><strong>Sender Name:</strong> ${safeName}</p>
            <p><strong>Sender Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <hr />
            <h4>Message</h4>
            <div style="background:#f8fafc;padding:16px;border-radius:6px;white-space:pre-wrap">${safeMessage}</div>
            <hr />
            <p style="font-size:11px;color:#64748b">Sent via V. Raghavan's portfolio website.</p>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      // Log the provider's response, never the API key.
      console.error('Resend API error:', response.status, result);

      return res.status(502).json({
        success: false,
        error: 'Email delivery failed. Please try again later.',
      });
    }

    console.log('Resend accepted email:', result.id);

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been submitted successfully.',
      messageId: result.id,
    });
  } catch (error) {
    console.error('Contact form error:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Unable to send your message right now.',
    });
  }
});

// Export for Vercel's serverless runtime.
// Listen locally when running this file directly.
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Portfolio API running on port ${PORT}`);
  });
}

export default app;
