#!/usr/bin/env node
/**
 * Export Learn diagram frames from Figma → public/learn/diagrams/
 * Usage: npm run export:diagrams
 * Config: scripts/figma-export-manifest.json (fileKey + frame nodeIds)
 * Token: FIGMA_ACCESS_TOKEN in .env.local (see .env.template)
 */
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST_PATH = join(ROOT, "scripts", "figma-export-manifest.json");
const SCALE = 2;
const OUT_DIR = join(ROOT, "public", "learn", "diagrams");

/** Load FIGMA_ACCESS_TOKEN from .env.local (gitignored) if not already set. */
async function loadEnvLocal() {
  const path = join(ROOT, ".env.local");
  if (!existsSync(path) || process.env.FIGMA_ACCESS_TOKEN) return;
  const text = await readFile(path, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key === "FIGMA_ACCESS_TOKEN") process.env.FIGMA_ACCESS_TOKEN = value;
    if (key === "FIGMA_FILE_KEY") process.env.FIGMA_FILE_KEY = value;
  }
}

await loadEnvLocal();

const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
const fileKey = process.env.FIGMA_FILE_KEY ?? manifest.fileKey;
const frames = manifest.frames ?? [];

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error(
    "Set FIGMA_ACCESS_TOKEN in .env.local (copy from .env.template) or in the shell.",
  );
  process.exit(1);
}

if (frames.length === 0) {
  console.error(
    "No frames in figma-export-manifest.json — add { nodeId, slug } entries after creating frames in Figma.",
  );
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

const ids = frames.map((f) => f.nodeId).join(",");
const metaUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&format=png&scale=${SCALE}`;
const metaRes = await fetch(metaUrl, { headers: { "X-Figma-Token": token } });
if (!metaRes.ok) {
  console.error("Figma API error:", metaRes.status, await metaRes.text());
  process.exit(1);
}

const { images, err } = await metaRes.json();
if (err) {
  console.error("Figma export error:", err);
  process.exit(1);
}

for (const frame of frames) {
  const url = images[frame.nodeId];
  if (!url) {
    console.error(`No image URL for ${frame.slug} (${frame.nodeId})`);
    process.exit(1);
  }
  const imgRes = await fetch(url);
  if (!imgRes.ok) {
    console.error(`Download failed for ${frame.slug}:`, imgRes.status);
    process.exit(1);
  }
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const outPath = join(OUT_DIR, `${frame.slug}.png`);
  await writeFile(outPath, buf);
  console.log(`Wrote ${outPath} (${buf.length} bytes)`);
}

console.log(`Done — ${frames.length} PNG(s) @2x from file ${fileKey}`);
