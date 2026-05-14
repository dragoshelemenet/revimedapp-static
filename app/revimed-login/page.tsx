import { requireAdmin } from "@/lib/auth";
import { getAllPosts, getAllPrices, getAllServicesAdmin, getAllGalleryItems } from "@/lib/db";
import AdminClient from "../admin/AdminClient";
import { getContactContent, getAllContentBlocks } from "@/lib/content";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const admin = await requireAdmin();
  const sp = await searchParams;
  const lang = sp.lang === "en" || sp.lang === "ru" || sp.lang === "ua" || sp.lang === "ro" ? sp.lang : "ro";

  const posts = admin ? getAllPosts(lang) : [];
  const prices = admin ? getAllPrices(lang) : [];
  const services = admin ? getAllServicesAdmin(lang) : [];
  const contactContent = admin ? getContactContent(lang) : null;
  const contentBlocks = admin ? getAllContentBlocks(lang) : [];
  const gallery = admin ? getAllGalleryItems(lang) : [];

  return <AdminClient loggedIn={Boolean(admin)} posts={posts} prices={prices} services={services} gallery={gallery} contactContent={contactContent} contentBlocks={contentBlocks} selectedLang={lang} />;
}
