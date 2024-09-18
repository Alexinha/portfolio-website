// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email, subject, message } = body;

//     const mailOptions = {
//       from: email,
//       to: "alychang0216@gmail.com",
//       subject: `New message from your website: ${subject}`,
//       text: message,
//       html: `<p><strong>From:</strong> ${email}</p>
//              <p><strong>Subject:</strong> ${subject}</p>
//              <p><strong>Message:</strong></p>
//              <p>${message}</p>`,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Message sent:", info.messageId);
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ success: false, error }), {
//       status: 500,
//     });
//   }
// }

import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    // this is where vercel stops proventing me from sending email
    // While using "*" for Access-Control-Allow-Origin is convenient for development, it's not secure for production. In production, you should replace it with the exact domain from which your frontend is making requests
    // CORS (Cross-Origin Resource Sharing) ensures that a web application hosted on one domain can securely request resources from a server hosted on a different domain. In Next.js (or any Node.js API), CORS needs to be explicitly allowed in your API routes to prevent issues like "CORS policy errors."
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight request (OPTIONS)
    if (req.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers });
    }

    const body = await req.json();
    const { email, subject, message } = body;

    const msg = {
      to: "alychang0216@gmail.com", // Your email address
      from: "alychang0216@gmail.com", // Your verified SendGrid sender email
      subject: `New message from your website: ${subject}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };

    // Send the email
    await sgMail.send(msg).then(() => {
      console.log("email sent");
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
