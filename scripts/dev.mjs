import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const next = path.join(root, "node_modules/next/dist/bin/next");
const server = spawn(process.execPath, [next, "dev", "--hostname", "127.0.0.1", "--port", process.env.PORT || "4173"], { cwd: root, stdio: "inherit" });
server.on("exit", (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
