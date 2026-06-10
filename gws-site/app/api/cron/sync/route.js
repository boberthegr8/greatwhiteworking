import { NextResponse } from "next/server";
import { syncTelegramUpdates } from "@/lib/telegram";

export const dynamic = "force-dynamic";

// Vercel Cron hits this endpoint on a schedule to pull new Telegram
// channel posts (Hush + Pure Vision) into the Updates feed, even when
// nobody is actively visiting the site.
export async function GET(req) {
  // When CRON_SECRET is set in the project env, Vercel automatically sends
  // it as `Authorization: Bearer <secret>`. Reject anything else so the
  // endpoint can't be triggered by random traffic.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const result = await syncTelegramUpdates();
  return NextResponse.json({ ok: true, ...result });
}
