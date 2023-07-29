
const path = require('path');
const targetFileName = 'script';
require('esbuild').build({
  // the entry point file described above
  entryPoints: [path.join(__dirname, `${targetFileName}.ts`)],
  // the build folder location described above
  outfile: path.join(__dirname, '..', `${targetFileName}.js`),
  platform: 'browser',
  bundle: true,
  target: ['chrome60', 'firefox60', 'safari11', 'edge20'],
  sourcemap: false,
  minify: true,
}).catch(() => process.exit(1));
