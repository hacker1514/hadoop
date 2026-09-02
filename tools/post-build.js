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

  // Copy dist/index.html to dist/404.html & fix manifest href
  const distIndex = path.join(distDir, 'index.html');
  if (fs.existsSync(distIndex)) {
    let htmlContent = fs.readFileSync(distIndex, 'utf8');
    htmlContent = htmlContent.replace(/href="\.\/assets\/manifest-[^"]+"/g, 'href="./manifest.json"');
    htmlContent = htmlContent.replace(/href="manifest-[^"]+"/g, 'href="./manifest.json"');
    fs.writeFileSync(distIndex, htmlContent, 'utf8');
    fs.writeFileSync(path.join(distDir, '404.html'), htmlContent, 'utf8');
    console.log('✓ Fixed manifest.json href in dist/index.html & dist/404.html');
  }

  // Ensure public/manifest.json is copied to dist/manifest.json and root manifest.json
  if (fs.existsSync(path.join(publicDir, 'manifest.json'))) {
    fs.copyFileSync(path.join(publicDir, 'manifest.json'), path.join(distDir, 'manifest.json'));
    fs.copyFileSync(path.join(publicDir, 'manifest.json'), path.join(rootDir, 'manifest.json'));
    console.log('✓ Synced public/manifest.json to dist and root');
  }

  // Copy public/dist files (sw.js, logo.svg, hadoop_logo.jpg) to root
  const rootFilesToCopy = ['sw.js', 'logo.svg', 'hadoop_logo.jpg'];
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

  // Copy pyodide directory to root pyodide/
  const srcPyodide = fs.existsSync(path.join(distDir, 'pyodide'))
    ? path.join(distDir, 'pyodide')
    : path.join(publicDir, 'pyodide');
  if (fs.existsSync(srcPyodide)) {
    copyRecursiveSync(srcPyodide, path.join(rootDir, 'pyodide'));
    console.log('✓ Synced pyodide/ -> root pyodide/ for GitHub Pages');
  }

  // Copy sql directory to root sql/
  const srcSql = fs.existsSync(path.join(distDir, 'sql'))
    ? path.join(distDir, 'sql')
    : path.join(publicDir, 'sql');
  if (fs.existsSync(srcSql)) {
    copyRecursiveSync(srcSql, path.join(rootDir, 'sql'));
    console.log('✓ Synced sql/ -> root sql/ for GitHub Pages');
  }

  console.log('✅ GitHub Pages post-build ready — PWA manifest & sw.js 100% available!');
}

postBuild();
