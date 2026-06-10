// Pulls recent messages from your Telegram channels via the Bot API and
// upserts them into the Updates feed. One channel feeds the "Hush" feed,
// another feeds the "Pure Vision" feed — both fully automatic.
//
// Setup: create ONE bot with @BotFather, add it as an admin to each
// channel, then set:
//   TELEGRAM_BOT_TOKEN        – the bot token from @BotFather
//   TELEGRAM_HUSH_CHAT        – @username (or -100… id) of your Hush channel
//   TELEGRAM_PUREVISION_CHAT  – @username (or -100… id) of your PV channel
//
// Note: the Bot API's getUpdates only returns messages since the bot was
// added and within Telegram's retention window. For a long-term mirror you
// would set a webhook; this polling approach is dependency-free and solid
// for normal posting volume.

import { prisma } from "./db";

export async function syncTelegramUpdates() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const hushChat = process.env.TELEGRAM_HUSH_CHAT;
  const pvChat = process.env.TELEGRAM_PUREVISION_CHAT;
  if (!token || (!hushChat && !pvChat)) {
    return { synced: 0, reason: "telegram-not-configured" };
  }

  // Map each configured channel to the feed it should post into.
  const routes = [
    { chat: hushChat, source: "Hush" },
    { chat: pvChat, source: "Pure Vision" },
  ].filter((r) => r.chat);

  // Return the source for a given chat, matching by numeric id or @username.
  const sourceFor = (c) => {
    for (const r of routes) {
      if (
        String(c.id) === String(r.chat) ||
        (c.username && `@${c.username}` === r.chat)
      ) {
        return r.source;
      }
    }
    return null;
  };

  let added = 0;
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/getUpdates?limit=40&allowed_updates=["channel_post"]`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data.ok) return { synced: 0, reason: "telegram-error", detail: data };

    for (const u of data.result || []) {
      const post = u.channel_post || u.message;
      if (!post || !post.text) continue;

      const c = post.chat || {};
      const source = sourceFor(c);
      if (!source) continue; // not one of our configured channels

      const externalId = `tg-${c.id}-${post.message_id}`;
      const exists = await prisma.update.findFirst({ where: { externalId } });
      if (exists) continue;

      const firstLine = post.text.split("\n")[0].slice(0, 80);
      await prisma.update.create({
        data: {
          source,
          title: firstLine || `${source} update`,
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
