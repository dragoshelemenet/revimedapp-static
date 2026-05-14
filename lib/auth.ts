import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const cookieName = "revimed_admin_session";

function secret() {
  return new TextEncoder().encode(process.env.SESSION_SECRET || "local-secret-change-me");
}

export async function createSession(username: string) {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret());
}

export async function readSession() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret());
    return verified.payload as { username?: string };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await readSession();
  if (!session?.username) return null;
  return session;
}

export { cookieName };
