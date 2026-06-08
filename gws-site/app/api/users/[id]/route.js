import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAuthed } from "@/lib/auth";

function guard() {
  if (!isAuthed()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PATCH(req, { params }) {
  const blocked = guard();
  if (blocked) return blocked;
  const b = await req.json().catch(() => ({}));
  const data = {};
  for (const k of ["name", "email", "service", "plan", "status", "notes"]) {
    if (b[k] !== undefined) data[k] = String(b[k]);
  }
  if (b.expiresAt !== undefined) {
    data.expiresAt = b.expiresAt ? new Date(b.expiresAt) : null;
  }
  const user = await prisma.user.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json({ user });
}

export async function DELETE(_req, { params }) {
  const blocked = guard();
  if (blocked) return blocked;
  await prisma.user.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
