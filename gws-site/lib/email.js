// Lightweight email delivery via Resend's HTTP API (no SDK dependency).
// If RESEND_API_KEY is not set, this is a no-op that returns { sent: false }
// — the message is still saved to the database either way.

export async function sendEmail({ subject, html, replyTo }) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM || "GWS <onboarding@resend.dev>";

  if (!key || !to) {
    return { sent: false, reason: "email-not-configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { sent: false, reason: `resend-${res.status}`, detail: text };
    }
    return { sent: true };
  } catch (err) {
    return { sent: false, reason: "fetch-failed", detail: String(err) };
  }
}

export function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
