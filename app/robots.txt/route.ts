import { siteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function GET() {
  const body = `User-agent: *
Allow: /

Disallow: /admin
Disallow: /revimed-login
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
