import { site } from "@/lib/site";

export function GET() {
  return new Response(`User-agent: *
Allow: /

Disallow: /admin
Disallow: /api/

Sitemap: ${site.url}/sitemap.xml
`, {
    headers: { "Content-Type": "text/plain" }
  });
}
