import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // 1. Configure transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yashwatts2005@gmail.com", // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char app password
      },
    });

    // 2. Email to YOU
    await transporter.sendMail({
      from: '"Portfolio Contact Form" <yashwatts2005@gmail.com>',
      to: "yashwatts2005@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:linear-gradient(135deg,#0f766e,#0ea5a4);padding:22px 24px;color:#ffffff;">
                <h2 style="margin:0;font-size:22px;line-height:1.2;">New Portfolio Inquiry</h2>
                <p style="margin:8px 0 0;font-size:13px;opacity:.95;">A new message was submitted from your contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                  <tr>
                    <td style="font-size:13px;color:#6b7280;width:120px;">Name</td>
                    <td style="font-size:14px;font-weight:600;color:#111827;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#6b7280;">Email</td>
                    <td style="font-size:14px;font-weight:600;color:#111827;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="font-size:13px;color:#6b7280;">Subject</td>
                    <td style="font-size:14px;font-weight:600;color:#111827;">${safeSubject}</td>
                  </tr>
                </table>

                <div style="margin-top:16px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
                  <div style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#6b7280;">Message</div>
                  <div style="padding:14px 12px;font-size:14px;line-height:1.7;color:#111827;word-break:break-word;">${safeMessage}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;border-top:1px solid #e5e7eb;background:#fafafa;font-size:12px;color:#6b7280;">
                Sent from your portfolio website contact form.
              </td>
            </tr>
          </table>
        </div>
      `,
      text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    // 3. Auto-reply to USER
    await transporter.sendMail({
      from: '"Yash Watts" <yashwatts2005@gmail.com>',
      to: email,
      subject: "Thank You for Contacting Me!",
      html: `
        <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:linear-gradient(135deg,#1f2937,#111827);padding:24px;color:#ffffff;">
                <h2 style="margin:0;font-size:22px;line-height:1.25;">Thanks for reaching out, ${safeName}!</h2>
                <p style="margin:8px 0 0;font-size:14px;opacity:.9;">Your message has been received successfully.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 24px;">
                <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#374151;">
                  I appreciate you taking the time to contact me. I have received your message regarding
                  <strong style="color:#111827;">${safeSubject}</strong> and will get back to you as soon as possible.
                </p>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                  <tr>
                    <td style="padding-right:10px;">
                      <a href="https://www.linkedin.com/in/yashwatts" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#0a66c2;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;">LinkedIn</a>
                    </td>
                    <td>
                      <a href="https://github.com/yashwatts" style="display:inline-block;padding:10px 14px;border-radius:8px;background:#111827;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;">GitHub</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:20px 0 0;font-size:15px;color:#374151;">Best regards,<br><strong style="color:#111827;">Yash Watts</strong></p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;border-top:1px solid #e5e7eb;background:#fafafa;font-size:12px;color:#6b7280;">
                This is an automated confirmation email from yashwatts.com.
              </td>
            </tr>
          </table>
        </div>
      `,
      text: `Hello ${name},\n\nThank you for reaching out. I received your message regarding "${subject}" and will respond soon.\n\nLinkedIn: https://www.linkedin.com/in/yashwatts\nGitHub: https://github.com/yashwatts\n\nBest regards,\nYash Watts`,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending emails" }, { status: 500 });
  }
}
