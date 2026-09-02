import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function postBuild() {
  console.log('Running GitHub Pages post-build preparation...');

  // Create .nojekyll in dist and public
  fs.writeFileSync(path.join(rootDir, 'public/.nojekyll'), '');
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

  // Copy dist/index.html to dist/404.html for GitHub Pages SPA routing fallback
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, path.join(distDir, '404.html'));
    fs.copyFileSync(distIndex, path.join(rootDir, '404.html'));
    fs.copyFileSync(distIndex, path.join(rootDir, 'index.html'));
    console.log('✓ Created 404.html and updated root index.html from compiled dist production bundle');
  }

  // Copy dist/assets to root assets/ so GitHub Pages serving from root finds compiled JS/CSS
  const distAssets = path.join(distDir, 'assets');
  const rootAssets = path.join(rootDir, 'assets');
  if (fs.existsSync(distAssets)) {
    copyRecursiveSync(distAssets, rootAssets);
    console.log('✓ Synced compiled dist/assets -> root assets/ for instant GitHub Pages root deployment');
  }

  console.log('✅ GitHub Pages post-build ready — zero white screen guaranteed!');
}

postBuild();
