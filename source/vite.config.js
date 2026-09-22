import { defineConfig } from 'vite';
import { cpSync, readFileSync, writeFileSync } from 'node:fs';
export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [{ name: 'preserve-editorial-assets', closeBundle() {
    cpSync('assets', 'dist/assets', { recursive: true, filter: source => !source.includes('/masters') });
    const html = readFileSync('dist/index.html', 'utf8')
      .replace(/<!-- source-file-preview -->[\s\S]*?<!-- \/source-file-preview -->/g, '')
      .replace(/<script type="module" crossorigin /g, '<script defer ')
      .replace(/ crossorigin/g, '');
    writeFileSync('dist/index.html', html);
  } }],
  build: { chunkSizeWarningLimit: 850, modulePreload: false,
    rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } } },
});
