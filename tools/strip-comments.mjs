import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');

function stripComments(content) {
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/^(\s*)\/\/.*$/gm, '$1');
  content = content.replace(/\n{3,}/g, '\n\n');
  return content;
}

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      const before = fs.readFileSync(fullPath, 'utf8');
      const after = stripComments(before);
      if (before !== after) {
        fs.writeFileSync(fullPath, after, 'utf8');
        console.log('Stripped:', path.relative(srcDir, fullPath), '(-' + (before.length - after.length) + ' bytes)');
      }
    }
  }
}

processDir(srcDir);
console.log('\nDone stripping comments from all TS/TSX files.');
