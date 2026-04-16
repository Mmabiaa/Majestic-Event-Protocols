import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  message: string;
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (payload: unknown) => void;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function validatePayload(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body." };

  const b = body as Record<string, unknown>;

  const name = isNonEmptyString(b.name) ? b.name.trim() : "";
  const phone = isNonEmptyString(b.phone) ? b.phone.trim() : "";
  const email = isNonEmptyString(b.email) ? b.email.trim() : "";
  const eventType = isNonEmptyString(b.eventType) ? b.eventType.trim() : "";
  const message = isNonEmptyString(b.message) ? b.message.trim() : "";

  if (!name || !phone || !email || !eventType || !message) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (name.length > 120) return { ok: false, error: "Name is too long." };
  if (phone.length > 60) return { ok: false, error: "Phone number is too long." };
  if (email.length > 254) return { ok: false, error: "Email is too long." };
  if (eventType.length > 60) return { ok: false, error: "Event type is too long." };
  if (message.length > 4000) return { ok: false, error: "Message is too long." };

  const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailLike.test(email)) return { ok: false, error: "Please enter a valid email address." };

  return { ok: true, data: { name, phone, email, eventType, message } };
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const validated = validatePayload(req.body);
  if (!validated.ok) {
    res.status(400).json({ ok: false, error: validated.error });
    return;
  }

  try {
    const SMTP_USER = getEnv("SMTP_USER");
    const SMTP_PASS = getEnv("SMTP_PASS");
    const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const { name, phone, email, eventType, message } = validated.data;

    const subject = `New Contact Message (${eventType}) — ${name}`;
    const text = [
      "New website contact submission:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Event Type: ${eventType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Majestic Events & Protocols" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send message.";
    res.status(500).json({ ok: false, error: message });
  }
}
