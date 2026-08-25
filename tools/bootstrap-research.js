import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const researchDir = path.join(rootDir, 'research');

console.log('=== HADOOP SIMULATOR RESEARCH & BOOTSTRAP SYSTEM ===');

if (!fs.existsSync(researchDir)) {
  fs.mkdirSync(researchDir, { recursive: true });
}

const sources = [
  {
    name: 'Apache Hadoop Documentation & Specs',
    url: 'https://hadoop.apache.org/docs/stable/',
    type: 'Specification Reference',
    license: 'Apache-2.0',
    reusedModules: ['BlockPlacementPolicyDefault', 'Safemode Rules', 'FSCK diagnostics', 'YARN Capacity Scheduler'],
    status: 'ACTIVE_SPEC'
  },
  {
    name: 'Lucide Icons',
    url: 'https://lucide.dev/',
    type: 'UI Icon Assets',
    license: 'ISC',
    reusedModules: ['lucide-react icons'],
    status: 'INSTALLED'
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    type: 'Styling Engine',
    license: 'MIT',
    reusedModules: ['Tailwind utility classes'],
    status: 'INSTALLED'
  }
];

const licenses = [
  { package: 'react', license: 'MIT', compliant: true },
  { package: 'react-dom', license: 'MIT', compliant: true },
  { package: 'lucide-react', license: 'ISC', compliant: true },
  { package: 'tailwindcss', license: 'MIT', compliant: true },
  { package: 'vitest', license: 'MIT', compliant: true }
];

const dependencies = {
  react: "^19.0.0",
  "react-dom": "^19.0.0",
  "lucide-react": "^0.475.0",
  tailwindcss: "^3.4.17",
  vitest: "^3.0.5"
};

const compatibility = {
  webWorkers: true,
  indexedDB: true,
  opfs: true,
  webStreams: true,
  minBrowserVersion: "ES2022 / Chrome 100+ / Firefox 100+ / Safari 16+"
};

fs.writeFileSync(path.join(researchDir, 'sources.json'), JSON.stringify(sources, null, 2));
fs.writeFileSync(path.join(researchDir, 'licenses.json'), JSON.stringify(licenses, null, 2));
fs.writeFileSync(path.join(researchDir, 'dependencies.json'), JSON.stringify(dependencies, null, 2));
fs.writeFileSync(path.join(researchDir, 'compatibility.json'), JSON.stringify(compatibility, null, 2));

console.log('✓ Successfully generated research manifests in research/');
console.log('  - research/sources.json');
console.log('  - research/licenses.json');
console.log('  - research/dependencies.json');
console.log('  - research/compatibility.json');
