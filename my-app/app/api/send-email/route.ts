import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

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
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Sent from your portfolio website.</p>
      `,
    });

    // 3. Auto-reply to USER
    await transporter.sendMail({
      from: '"Yash Watts" <yashwatts2005@gmail.com>',
      to: email,
      subject: "Thank You for Contacting Me!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out through my website! I have received your message regarding "${subject}".</p>
        <p>I will review your request and get back to you as soon as possible.</p>
        <p>In the meantime, feel free to check out my projects or connect with me on:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/yashwatts">LinkedIn</a></li>
          <li><a href="https://github.com/yashwatts">GitHub</a></li>
        </ul>
        <p>Best regards,<br>Yash Watts</p>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending emails" }, { status: 500 });
  }
}
