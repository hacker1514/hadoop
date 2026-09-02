import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const iconsDir = path.join(publicDir, 'icons');
const logoSvgPath = path.join(publicDir, 'logo.svg');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
  console.log('Loading SVG logo from:', logoSvgPath);
  const svgImg = await loadImage(logoSvgPath);

  const sizes = [
    { size: 192, name: 'icon-192.png', maskable: false },
    { size: 512, name: 'icon-512.png', maskable: false },
    { size: 512, name: 'icon-512-maskable.png', maskable: true },
    { size: 180, name: 'apple-touch-icon.png', maskable: false },
  ];

  for (const { size, name, maskable } of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    if (maskable) {
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, size, size);
      const pad = size * 0.1;
      ctx.drawImage(svgImg, pad, pad, size - pad * 2, size - pad * 2);
    } else {
      ctx.drawImage(svgImg, 0, 0, size, size);
    }

    const buffer = canvas.toBuffer('image/png');
    const outPath = path.join(iconsDir, name);
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Generated ${outPath} (${size}x${size}${maskable ? ', maskable' : ''})`);
  }

  console.log('\n✅ All PNG icons generated from logo.svg successfully!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
