import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://revimed.site";

export const dynamic = "force-static";
export const revalidate = false;


function normalizeRoute(filePath: string) {
  let route = filePath
    .replace(process.cwd(), "")
    .replace(/^\/?app/, "")
    .replace(/\/page\.(tsx|ts|jsx|js)$/, "")
    .replace(/\/index$/, "")
    .replace(/\\/g, "/");

  if (!route) route = "/";

  if (
    route.includes("/api") ||
    route.includes("/admin") ||
    route.includes("[") ||
    route.includes("]") ||
    route.includes("(") ||
    route.includes(")")
  ) {
    return null;
  }

  return route === "" ? "/" : route;
}

function findPages(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api") return [];
      return findPages(fullPath);
    }

    if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      return [fullPath];
    }

    return [];
  });
}

function getStaticRoutes() {
  const appDir = path.join(process.cwd(), "app");

  return Array.from(
    new Set(
      findPages(appDir)
        .map(normalizeRoute)
        .filter(Boolean) as string[]
    )
  );
}

function getManagedAppRoutes() {
  try {
    const appsFile = path.join(process.cwd(), "data", "apps.json");
    if (!fs.existsSync(appsFile)) return [];

    const apps = JSON.parse(fs.readFileSync(appsFile, "utf8"));
    if (!Array.isArray(apps)) return [];

    return apps
      .filter((app) => app && app.visible !== false)
      .map((app) => {
        if (app.kind === "html" && app.slug) {
          return `/aplicatii/teste-si-instrumente/html/${app.slug}`;
        }

        return app.href || (app.slug ? `/aplicatii/teste-si-instrumente/${app.slug}` : null);
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = Array.from(
    new Set([
      ...getStaticRoutes(),
      ...getManagedAppRoutes(),
    ])
  ).sort();

  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
