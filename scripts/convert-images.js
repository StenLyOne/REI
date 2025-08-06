import sharp from "sharp";
import fs from "fs";
import path from "path";

const srcDir = path.join(process.cwd(), "public/img");
const outDir = path.join(process.cwd(), "public/img-optimized");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const files = fs.readdirSync(srcDir);

files.forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const inputPath = path.join(srcDir, file);
  const outputPath = path.join(outDir, file.replace(ext, ".webp"));

  await sharp(inputPath)
    .resize({ width: 600 }) // автоуменьшение под реальный контейнер
    .webp({ quality: 70 }) // 60–75 — золотая середина
    .toFile(outputPath);

  console.log(`Optimized: ${file} → ${path.basename(outputPath)}`);
});
