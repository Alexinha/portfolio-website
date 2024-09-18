import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const body = await req.json().catch((err) => {
    console.log(err);
  });
  // console.log(body);
  const { email, subject, message } = body;

  // this is the part adding autoreply to all messages sent to me via website
  try {
    const { data, error } = await resend.emails.send({
      // need to add domain later
      from: fromEmail,
      to: ["alychang0216@gmail.com", email],
      subject: "Auto-reply: " + subject,
      react: (
        <>
          <h4>{`auto-reply: ${subject}`}</h4>
          <p>Thank you for contacting me!</p>
          <hr></hr>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
