import sharp from "sharp";
import fs from "fs";
import path from "path";

// const srcDir = path.join(process.cwd(), "public/img");
// const outDir = path.join(process.cwd(), "public/img-optimized");

// if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// const files = fs.readdirSync(srcDir);

// files.forEach(async (file) => {
//   const ext = path.extname(file).toLowerCase();
//   if (
//     ![
//       "hero-dashboard-mob-dark.png",
//       "hero-dashboard-mob-light.png",
//       ".png",
//       ".jpg",
//       ".jpeg",
//     ].includes(ext)
//   )
//     return;

//   const inputPath = path.join(srcDir, file);
//   const outputPath = path.join(outDir, file.replace(ext, ".webp"));

//   await sharp(inputPath)
//     .resize({ width: 600 }) // автоуменьшение под реальный контейнер
//     .webp({ quality: 70 }) // 60–75 — золотая середина
//     .toFile(outputPath);

//   console.log(`Optimized: ${file} → ${path.basename(outputPath)}`);
// });

const srcDir = path.join(process.cwd(), "public/img-optimized");
const outDir = path.join(process.cwd(), "public/img-optimized-small");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const filesToResize = [
  "avatar2.webp",
  "Market3.webp",
  "Managing3.webp",
  "Market1.webp",
  "Property1.webp",
  "Property3.webp",
  "Fundamentals1.webp",
  "avatar1.webp",
  "Financing1.webp",
  "Exit3.webp",
  "Managing1.webp",
  "Exit1.webp",
  "Financing3.webp",
  "avatar3.webp",
  "Managing2.webp",
  "Market2.webp",
  "Financing2.webp",
  "Exit2.webp",
  "Fundamentals2.webp",
  "Property2.webp",
];

// Логика: аватары → 48x48, остальные → 40x40
for (const file of filesToResize) {
  const inputPath = path.join(srcDir, file);
  const outputPath = path.join(outDir, file);

  const size = file.startsWith("avatar") ? 48 : 40;

  sharp(inputPath)
    .resize({ width: size, height: size, fit: "cover" })
    .webp({ quality: 70 })
    .toFile(outputPath)
    .then(() => console.log(`✔ ${file} → ${size}x${size}`))
    .catch((err) => console.error(`Ошибка с ${file}:`, err));
}
