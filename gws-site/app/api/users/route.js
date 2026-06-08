import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

function guard() {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const blocked = guard();
  if (blocked) return blocked;
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ users });
}

export async function POST(req) {
  const blocked = guard();
  if (blocked) return blocked;
  const b = await req.json().catch(() => ({}));
  if (!b.name || !b.email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }
  const user = await prisma.user.create({
    data: {
      name: String(b.name),
      email: String(b.email),
      service: b.service || "Hush",
      plan: b.plan || "Monthly",
      status: b.status || "active",
      notes: b.notes || "",
      expiresAt: b.expiresAt ? new Date(b.expiresAt) : null,
    },
  });
  return NextResponse.json({ user });
}
