import { NextResponse } from "next/server";
import { createSession, cookieName } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const form = await req.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");

  const okUser = username === process.env.ADMIN_USER;
  const saved = process.env.ADMIN_PASS || "";
  const okPass = saved.startsWith("$2")
    ? await bcrypt.compare(password, saved)
    : password === saved;

  if (!okUser || !okPass) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = await createSession(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return res;
}
