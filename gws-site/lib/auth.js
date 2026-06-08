import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "gws_admin";

function secret() {
  return process.env.SESSION_SECRET || "dev-insecure-secret-change-me";
}

// Create a signed token: base64(payload).hmac
function sign(payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const mac = crypto
    .createHmac("sha256", secret())
    .update(data)
    .digest("base64url");
  return `${data}.${mac}`;
}

function verify(token) {
  if (!token || !token.includes(".")) return null;
  const [data, mac] = token.split(".");
  const expected = crypto
    .createHmac("sha256", secret())
    .update(data)
    .digest("base64url");
  if (
    mac.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))
  ) {
    return null;
  }
  try {
    return JSON.parse(Buffer.from(data, "base64url").toString());
  } catch {
    return null;
  }
}

export function createSessionCookie() {
  return {
    name: COOKIE_NAME,
    value: sign({ role: "admin", t: Date.now() }),
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  };
}

export function clearSessionCookie() {
  return {
    name: COOKIE_NAME,
    value: "",
    options: { httpOnly: true, path: "/", maxAge: 0 },
  };
}

export function isAuthed() {
  const token = cookies().get(COOKIE_NAME)?.value;
  const payload = verify(token);
  return payload?.role === "admin";
}

export function checkPassword(pw) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) return false;
  const a = Buffer.from(String(pw));
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
