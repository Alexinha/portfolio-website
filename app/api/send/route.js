import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const mailOptions = {
      from: email,
      to: "alychang0216@gmail.com",
      subject: `New message from your website: ${subject}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
