import { requireAdmin } from "@/lib/auth";
import { getAllPosts, getAllPrices, getAllServicesAdmin } from "@/lib/db";
import AdminClient from "../admin/AdminClient";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function AdminLoginPage() {
  const admin = await requireAdmin();
  const posts = admin ? getAllPosts() : [];
  const prices = admin ? getAllPrices() : [];
  const services = admin ? getAllServicesAdmin() : [];

  return <AdminClient loggedIn={Boolean(admin)} posts={posts} prices={prices} services={services} />;
}
