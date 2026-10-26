import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const portArg = process.argv.indexOf("--port");
const port = Number(portArg === -1 ? 4173 : process.argv[portArg + 1]);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

await stat(root).catch(() => {
  throw new Error("Static output is missing. Run npm run build first.");
});

createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let target;
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    target = path.resolve(root, `.${pathname}`);
    if (!target.startsWith(root) && target !== path.resolve(root))
      throw new Error("Invalid path");
    if ((await stat(target)).isDirectory())
      target = path.join(target, "index.html");
    const body = await readFile(target);
    response.writeHead(200, {
      "Content-Type": types[path.extname(target)] ?? "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    const body = await readFile(path.join(root, "404.html"));
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(request.method === "HEAD" ? undefined : body);
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static portfolio preview: http://127.0.0.1:${port}`),
);
