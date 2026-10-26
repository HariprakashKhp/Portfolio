import { mkdir, writeFile, stat, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "../src/data/portfolio.ts";

// Manual asset preparation only; never a build/test hook. Use the Sharp version
// shipped with Next.js so the static site needs no extra runtime dependency.
const require = createRequire(import.meta.url);
const sharp = require(require.resolve("sharp", {
  paths: [dirname(require.resolve("next/package.json"))],
}));
const webRoot = fileURLToPath(new URL("../", import.meta.url));
const repoRoot = fileURLToPath(new URL("../../../", import.meta.url));
const imageDir = join(webRoot, "public/images");
const socialDir = join(webRoot, "public/social");
const assetDir = join(webRoot, "assets");
await Promise.all([imageDir, socialDir, assetDir].map((dir) => mkdir(dir, { recursive: true })));

const sources = {
  avatar: join(repoRoot, "ChatGPT Image Oct 26, 2026, 03_42_57 PM.png"),
  portrait: join(repoRoot, "ChatGPT Image Oct 26, 2026, 03_43_09 PM.png"),
};
const exports = [
  { source: sources.avatar, name: "hari-avatar.webp", width: 192, quality: 84 },
  { source: sources.portrait, name: "hari-portrait-line-art.webp", width: 900, quality: 82 },
  { source: sources.portrait, name: "hari-portrait-line-art-mobile.webp", width: 480, quality: 80 },
];
for (const asset of exports) {
  const result = await sharp(asset.source)
    .resize({ width: asset.width, withoutEnlargement: true })
    .webp({ quality: asset.quality, effort: 6 })
    .toFile(join(imageDir, asset.name));
  const original = await stat(asset.source);
  console.log(`${asset.name}: ${original.size} -> ${result.size} bytes`);
}

// A code-native brand graphic: existing H identity, palette, and public profile.
// Escape profile text before interpolating it into SVG markup.
const escapeXml = (value) => value.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
})[character]);
const name = escapeXml(profile.name ?? "Engineering portfolio");
const domain = escapeXml(new URL(profile.website).hostname);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#111820"/>
  <path d="M40 64v502" stroke="#A7C7E7" stroke-width="3"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <text x="78" y="112" fill="#F1F3F5" font-size="36" font-weight="700">${name}</text>
    <text x="78" y="157" fill="#A9B5C2" font-size="22">Python backend engineering &amp; agentic AI</text>
    <text x="74" y="294" fill="#F1F3F5" font-size="70" font-weight="700" letter-spacing="-2">Backend engineering.</text>
    <text x="74" y="377" fill="#A7C7E7" font-size="70" font-weight="700" letter-spacing="-2">Applied AI.</text>
    <text x="78" y="452" fill="#A9B5C2" font-size="23">Python / FastAPI / RAG / AWS</text>
    <path d="M78 514h1044" stroke="#32404E"/>
    <text x="78" y="566" fill="#D4B59A" font-size="24">${domain}</text>
  </g>
  <g transform="translate(1058 68)">
    <rect width="64" height="64" rx="14" fill="#18222D"/>
    <path d="M17 14h8v14h14V14h8v36h-8V36H25v14h-8Z" fill="#A7C7E7"/>
  </g>
</svg>`;
await writeFile(join(assetDir, "portfolio-card.svg"), svg);
const card = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(join(socialDir, "portfolio-card.png"));
console.log(`portfolio-card.png: ${card.size} bytes (1200 x 630)`);

// Remove only superseded public copies, after their replacements are written.
// The owner's root PNG originals are never changed or deleted.
for (const name of ["hari-avatar.png", "hari-portrait-line-art.png"]) {
  await rm(join(imageDir, name), { force: true });
}
