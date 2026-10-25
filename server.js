import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SMTP Mailer Service is operational' });
});

// Contact message endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'rvraghavan.it@gmail.com';

    if (!smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        error: 'SMTP credentials not configured on the server. Please check .env file.',
      });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailSubject = subject && subject.trim()
      ? `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`
      : `[Portfolio Inquiry] Message from ${name.trim()}`;

    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      replyTo: `"${name}" <${email}>`,
      to: receiverEmail,
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
          <p style="font-size: 11px; color: #64748b; margin-bottom: 0;">This email was delivered via V. Raghavan Portfolio Website Backend SMTP Server.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Email successfully sent to ' + receiverEmail,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('SMTP Mail error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email via SMTP.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`SMTP Mail Server is running on http://localhost:${PORT}`);
});
