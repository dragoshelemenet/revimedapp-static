import { requireAdmin } from "@/lib/auth";
import { getAllPosts } from "@/lib/db";
import AdminClient from "./AdminClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const admin = await requireAdmin();
  const posts = admin ? getAllPosts() : [];

  return <AdminClient loggedIn={Boolean(admin)} posts={posts} />;
}
