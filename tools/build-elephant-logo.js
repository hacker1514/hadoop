import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const iconsDir = path.join(publicDir, 'icons');
const userImgPath = 'C:/Users/Niranjankumar/.gemini/antigravity/brain/64c9cfea-0c85-451e-b3f3-8638290fa2fc/.user_uploaded/media_1788328652361.png';

async function buildElephantLogo() {
  console.log('Loading uploaded elephant image from:', userImgPath);
  const origImg = await loadImage(userImgPath);

  const cropX = 390;
  const cropY = 35;
  const cropW = 533;
  const cropH = 368;

  const tempCanvas = createCanvas(cropW, cropH);
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(origImg, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  const imgData = tempCtx.getImageData(0, 0, cropW, cropH);
  const data = imgData.data;

  // Flood fill background pixels
  const isBg = new Uint8Array(cropW * cropH);
  const queue = [[0, 0], [cropW - 1, 0], [0, cropH - 1], [cropW - 1, cropH - 1], [10, 10], [cropW - 10, 10]];
  const visited = new Uint8Array(cropW * cropH);

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x < 0 || x >= cropW || y < 0 || y >= cropH) continue;
    const pos = y * cropW + x;
    if (visited[pos]) continue;
    visited[pos] = 1;

    const idx = pos * 4;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    if (r > 160 && g > 160 && b > 160) {
      isBg[pos] = 1;
      queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
  }

  // Recolor elephant using ONLY Black, Cyan, Green, Red
  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const pos = y * cropW + x;
      const i = pos * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2];

      if (isBg[pos]) {
        data[i + 3] = 0; // Make background transparent on temp canvas
        continue;
      }

      const isMouthArea = (x > 380 && y > 200 && y < 320);
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Dark outlines & mouth interior
      if (lum < 70) {
        if (isMouthArea && r > 40 && g < 40 && b < 40) {
          // RED mouth interior (#ef4444)
          data[i] = 239;
          data[i + 1] = 68;
          data[i + 2] = 68;
          data[i + 3] = 255;
        } else {
          // Pure Black lineart outline (#000000)
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = 0;
          data[i + 3] = 255;
        }
        continue;
      }

      const isEarRegion = (x > 65 && x < 270 && y > 20 && y < 270);
      const isTailRegion = (x < 75 && y > 100);

      if (isEarRegion) {
        // GREEN for Ear (#10b981 / #00ff66)
        data[i] = 0;
        data[i + 1] = 220;
        data[i + 2] = 100;
        data[i + 3] = 255;
      } else if (isMouthArea && (r > 120 && g < 110)) {
        // RED for Tongue / Mouth (#ef4444)
        data[i] = 239;
        data[i + 1] = 68;
        data[i + 2] = 68;
        data[i + 3] = 255;
      } else if (isTailRegion) {
        // GREEN for Tail (#10b981)
        data[i] = 0;
        data[i + 1] = 220;
        data[i + 2] = 100;
        data[i + 3] = 255;
      } else {
        // CYAN for Main Body & Head (#00f0ff / #06b6d4)
        const factor = lum / 255;
        data[i] = 0;
        data[i + 1] = Math.round(180 + factor * 60);
        data[i + 2] = Math.round(210 + factor * 45);
        data[i + 3] = 255;
      }
    }
  }

  tempCtx.putImageData(imgData, 0, 0);

  // Final 512x512 canvas on solid BLACK background
  const finalCanvas = createCanvas(512, 512);
  const finalCtx = finalCanvas.getContext('2d');

  // Pure Solid Black Background (#000000)
  finalCtx.fillStyle = '#000000';
  finalCtx.fillRect(0, 0, 512, 512);

  const pad = 44;
  const drawW = 512 - pad * 2;
  const drawH = drawW * (cropH / cropW);
  const drawX = pad;
  const drawY = (512 - drawH) / 2;

  finalCtx.drawImage(tempCanvas, drawX, drawY, drawW, drawH);

  // Save PNG base64 SVG
  const base64Png = finalCanvas.toBuffer('image/png').toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#000000"/>
  <image href="data:image/png;base64,${base64Png}" width="512" height="512"/>
</svg>`;

  const logoSvgPath = path.join(publicDir, 'logo.svg');
  fs.writeFileSync(logoSvgPath, svgContent);
  console.log('✓ Successfully created public/logo.svg with recolored elephant on black background!');

  // Generate PNG icon set
  const sizes = [
    { size: 192, name: 'icon-192.png', maskable: false },
    { size: 512, name: 'icon-512.png', maskable: false },
    { size: 512, name: 'icon-512-maskable.png', maskable: true },
    { size: 180, name: 'apple-touch-icon.png', maskable: false },
  ];

  for (const { size, name, maskable } of sizes) {
    const iconCanvas = createCanvas(size, size);
    const iconCtx = iconCanvas.getContext('2d');

    iconCtx.fillStyle = '#000000';
    iconCtx.fillRect(0, 0, size, size);

    if (maskable) {
      const p = size * 0.08;
      iconCtx.drawImage(finalCanvas, p, p, size - p * 2, size - p * 2);
    } else {
      iconCtx.drawImage(finalCanvas, 0, 0, size, size);
    }

    const buffer = iconCanvas.toBuffer('image/png');
    const outPath = path.join(iconsDir, name);
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Generated ${outPath} (${size}x${size}${maskable ? ', maskable' : ''})`);
  }

  console.log('\n✅ All elephant logo icons generated successfully!');
}

buildElephantLogo().catch((err) => {
  console.error('Error building elephant logo:', err);
  process.exit(1);
});
