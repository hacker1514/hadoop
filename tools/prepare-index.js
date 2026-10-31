import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
fs.copyFileSync(
  path.join(projectRoot, 'index.template.html'),
  path.join(projectRoot, 'index.html')
);
