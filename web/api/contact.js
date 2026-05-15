import { Resend } from "resend";

export default async function (req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = "";
  for await (const chunk of req) body += chunk;
  const { name, email, message } = JSON.parse(body);

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "alanmulhall@gmail.com",
    subject: `New message from ${name.trim()}`,
    text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
  });

  if (error) {
    res.status(500).json({ success: false, error: "Failed to send. Please try again." });
    return;
  }

  res.status(200).json({ success: true });
}
