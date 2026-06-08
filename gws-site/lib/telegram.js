// Pulls recent messages from a Telegram channel via the Bot API and
// upserts them into the Updates feed as "Pure Vision" updates.
//
// Setup: create a bot with @BotFather, add it to your channel as an
// admin, then set TELEGRAM_BOT_TOKEN and TELEGRAM_PUREVISION_CHAT.
//
// Note: the Bot API's getUpdates only returns messages since the bot
// was added and within Telegram's retention window. For a long-term
// channel mirror you would set a webhook; this polling approach is a
// solid, dependency-free starting point.

import { prisma } from "./db";

export async function syncTelegramUpdates() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_PUREVISION_CHAT;
  if (!token || !chat) {
    return { synced: 0, reason: "telegram-not-configured" };
  }

  let added = 0;
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/getUpdates?limit=20&allowed_updates=["channel_post"]`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data.ok) return { synced: 0, reason: "telegram-error", detail: data };

    for (const u of data.result || []) {
      const post = u.channel_post || u.message;
      if (!post || !post.text) continue;

      // Match the configured chat by @username or numeric id.
      const c = post.chat || {};
      const matches =
        String(c.id) === String(chat) ||
        (c.username && `@${c.username}` === chat);
      if (!matches) continue;

      const externalId = `tg-${c.id}-${post.message_id}`;
      const exists = await prisma.update.findFirst({ where: { externalId } });
      if (exists) continue;

      const firstLine = post.text.split("\n")[0].slice(0, 80);
      await prisma.update.create({
        data: {
          source: "Pure Vision",
          title: firstLine || "Pure Vision update",
          body: post.text,
          externalId,
        },
      });
      added++;
    }
    return { synced: added };
  } catch (err) {
    return { synced: added, reason: "fetch-failed", detail: String(err) };
  }
}
