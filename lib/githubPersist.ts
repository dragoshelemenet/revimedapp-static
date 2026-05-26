import fs from "node:fs";
import path from "node:path";

export async function commitFileToGitHub() {
  return {
    ok: false,
    message: "GitHub persistence disabled in static repo."
  };
}

export async function saveFilePersistent({
  filePath,
  content,
}: {
  filePath: string;
  content: string;
  message?: string;
}) {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");

  return {
    ok: true,
    message: "Saved locally in static repo."
  };
}

export async function readTextFileSafe(filePath: string, fallback = "") {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) return fallback;
    return fs.readFileSync(fullPath, "utf8");
  } catch {
    return fallback;
  }
}
