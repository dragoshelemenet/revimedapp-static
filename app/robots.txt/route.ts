export const dynamic = "force-dynamic";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://revimed.site"
).replace(/\/$/, "");

export function GET() {
  return new Response(`User-agent: *
Allow: /

Disallow: /admin
Disallow: /revimed-login
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
