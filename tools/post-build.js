import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

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

  // Create .nojekyll in dist, public, and root
  fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

  // Copy dist/index.html to dist/404.html and root index.html/404.html
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, path.join(distDir, '404.html'));
    fs.copyFileSync(distIndex, path.join(rootDir, '404.html'));
    fs.copyFileSync(distIndex, path.join(rootDir, 'index.html'));
    console.log('✓ Created 404.html and updated root index.html');
  }

  // Copy dist/assets to root assets/
  const distAssets = path.join(distDir, 'assets');
  const rootAssets = path.join(rootDir, 'assets');
  if (fs.existsSync(distAssets)) {
    copyRecursiveSync(distAssets, rootAssets);
    console.log('✓ Synced compiled dist/assets -> root assets/');
  }

  // Copy public/dist files (manifest.json, sw.js, logo.svg, icons, hadoop_logo.jpg) to root
  const rootFilesToCopy = ['manifest.json', 'sw.js', 'logo.svg', 'hadoop_logo.jpg'];
  rootFilesToCopy.forEach((fileName) => {
    const srcFile = fs.existsSync(path.join(distDir, fileName))
      ? path.join(distDir, fileName)
      : path.join(publicDir, fileName);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, path.join(rootDir, fileName));
      console.log(`✓ Synced ${fileName} to root for GitHub Pages`);
    }
  });

  // Copy icons directory to root icons/
  const srcIcons = fs.existsSync(path.join(distDir, 'icons'))
    ? path.join(distDir, 'icons')
    : path.join(publicDir, 'icons');
  if (fs.existsSync(srcIcons)) {
    copyRecursiveSync(srcIcons, path.join(rootDir, 'icons'));
    console.log('✓ Synced icons/ -> root icons/ for GitHub Pages');
  }

  console.log('✅ GitHub Pages post-build ready — PWA manifest & sw.js 100% available!');
}

postBuild();
