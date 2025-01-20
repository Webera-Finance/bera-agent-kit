// @ts-check
// @type=module

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, '../package.json'), 'utf8')
);

// Get version from environment variable if provided (for semantic-release)
const version = process.env.NEXT_VERSION || pkg.version;

// Create a new exports object without the /dist prefix
const exports = {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.js",
    "default": "./index.js"
  },
  "./package.json": "./package.json",
  "./utils": {
    "types": "./utils/index.d.ts",
    "import": "./utils/index.mjs",
    "require": "./utils/index.js"
  },
  "./utils/createViemWalletClient": {
    "types": "./utils/createViemWalletClient.d.ts",
    "import": "./utils/createViemWalletClient.mjs",
    "require": "./utils/createViemWalletClient.js"
  },
  "./tools": {
    "types": "./tools/index.d.ts",
    "import": "./tools/index.mjs",
    "require": "./tools/index.js"
  },
  "./ai-agents": {
    "types": "./ai-agents/index.d.ts",
    "import": "./ai-agents/index.mjs",
    "require": "./ai-agents/index.js"
  }
};

const distPkg = {
  name: pkg.name,
  version: version,
  description: pkg.description,
  main: 'index.js',
  module: 'index.mjs',
  types: 'index.d.ts',
  exports: exports,
  dependencies: {
    openai: pkg.dependencies.openai,
    viem: pkg.dependencies.viem,
    '@langchain/core': pkg.dependencies['@langchain/core'],
    '@langchain/community': pkg.dependencies['@langchain/community'],
    '@langchain/langgraph': pkg.dependencies['@langchain/langgraph'],
    '@langchain/openai': pkg.dependencies['@langchain/openai'],
  },
  repository: pkg.repository,
  keywords: pkg.keywords,
  author: pkg.author,
  license: pkg.license,
  bugs: pkg.bugs,
  homepage: pkg.homepage
};

// Write the package.json
writeFileSync(
  resolve(__dirname, '../dist/package.json'), 
  JSON.stringify(distPkg, null, 2)
); 
