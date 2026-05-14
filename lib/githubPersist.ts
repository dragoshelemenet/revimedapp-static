import fs from "node:fs/promises";
import path from "node:path";

type SaveFileInput = {
  filePath: string;
  content: string;
  message: string;
};

function env(name: string) {
  return process.env[name]?.trim() || "";
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function saveFilePersistent({ filePath, content, message }: SaveFileInput) {
  const token = env("GITHUB_TOKEN");
  const repo = env("GITHUB_REPO");
  const branch = env("GITHUB_BRANCH") || "main";

  const cleanPath = filePath.replace(/^\/+/, "");
  const absolute = path.join(process.cwd(), cleanPath);

  await fs.mkdir(path.dirname(absolute), { recursive: true });
  await fs.writeFile(absolute, content, "utf8");

  if (!token || !repo) {
    return {
      ok: true,
      mode: "filesystem",
      message: "Saved locally. GITHUB_TOKEN/GITHUB_REPO not configured, so GitHub API commit was skipped."
    };
  }

  const apiUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(cleanPath).replaceAll("%2F", "/")}`;

  let sha: string | undefined;

  const existing = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    cache: "no-store"
  });

  if (existing.ok) {
    const json = await existing.json();
    sha = json.sha;
  }

  const put = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content, "utf8").toString("base64"),
      branch,
      ...(sha ? { sha } : {})
    })
  });

  if (!put.ok) {
    const text = await put.text();
    return {
      ok: false,
      mode: "github",
      error: text
    };
  }

  return {
    ok: true,
    mode: "github",
    message: "Saved locally and committed through GitHub API."
  };
}

export async function readTextFileSafe(filePath: string, fallback: string) {
  const absolute = path.join(process.cwd(), filePath.replace(/^\/+/, ""));
  if (!(await fileExists(absolute))) return fallback;
  return fs.readFile(absolute, "utf8");
}
