import { cookies } from "next/headers";
import crypto from "node:crypto";

const ADMIN_USER = process.env.ADMIN_USER || "revimed1";
const ADMIN_PASS = process.env.ADMIN_PASS || "revimed@123";
const SESSION_SECRET = process.env.SESSION_SECRET || "revimed-local-session-secret-change-later";
const COOKIE_NAME = "revimed_admin_session";

function sign(value: string) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export async function createAdminSession(username: string, password: string) {
  const ok = username === ADMIN_USER && password === ADMIN_PASS;
  if (!ok) return false;

  const payload = `${username}:${Date.now()}`;
  const token = `${payload}.${sign(payload)}`;

  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return true;
}

export async function requireAdmin() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;

  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  if (signature !== expected) return null;

  const username = payload.split(":")[0];
  if (username !== ADMIN_USER) return null;

  return { username };
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
}
