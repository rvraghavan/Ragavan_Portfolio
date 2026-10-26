import { Resend } from 'resend';

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

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY is not configured on the server. Please add RESEND_API_KEY in your Vercel Environment Variables.',
      });
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.RECEIVER_EMAIL || 'rvraghavan.it@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const mailSubject = subject && subject.trim()
      ? `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`
      : `[Portfolio Inquiry] Message from ${name.trim()}`;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      replyTo: email,
      subject: mailSubject,
      text: `New Inquiry from Raghavan's Portfolio Website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}\n\n---\nSent via V. Raghavan Portfolio Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-top: 0;">New Portfolio Contact Inquiry</h2>
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h4 style="color: #334155; margin-bottom: 8px;">Message:</h4>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">Delivered via Resend Email API.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to send email via Resend.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email successfully sent to ' + receiverEmail,
      id: data?.id,
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An unexpected error occurred.',
    });
  }
}
