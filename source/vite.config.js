import { defineConfig } from 'vite';
import { cpSync, readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname } from 'node:path';
import { createHash } from 'node:crypto';
export default defineConfig({
  base: './',
  publicDir: 'public',
  plugins: [{ name: 'preserve-editorial-assets', closeBundle() {
    // Ship only the current runtime media, including dynamic chapter/frame URLs.
    const media = JSON.parse(readFileSync('app/runtime-media.json', 'utf8')).files;
    const digest = path => createHash('sha256').update(readFileSync(path)).digest('hex');
    const originals = new Map(media.map(path => [digest(path), path]));
    const duplicates = [];
    for (const file of readdirSync('dist/assets')) {
      if (!/\.(webp|png|jpe?g|svg|mp4|webm)$/i.test(file)) continue;
      const path = `assets/${file}`, original = originals.get(digest(`dist/${path}`));
      if (original && original !== path) duplicates.push([path, original]);
    }
    for (const path of ['dist/index.html', ...readdirSync('dist/assets').filter(f => /\.(js|css)$/.test(f)).map(f => `dist/assets/${f}`)]) {
      let text = readFileSync(path, 'utf8');
      for (const [duplicate, original] of duplicates) text = text.replaceAll(duplicate, original);
      writeFileSync(path, text);
    }
    for (const [duplicate] of duplicates) unlinkSync(`dist/${duplicate}`);
    for (const path of media) {
      mkdirSync(dirname(`dist/${path}`), {recursive:true});
      cpSync(path, `dist/${path}`);
    }
    let html = readFileSync('dist/index.html', 'utf8')
      .replace(/<!-- source-file-preview -->[\s\S]*?<!-- \/source-file-preview -->/g, '')
      .replace(/<script type="module" crossorigin /g, '<script defer ')
      .replace(/ crossorigin/g, '');
    // Styles must precede the deferred script, including on WebKit cold loads.
    const styles = [];
    html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, tag => {styles.push(tag);return '';});
    html = html.replace('<script defer ', styles.join('\n') + '\n<script defer ');
    writeFileSync('dist/index.html', html);
  } }],
  build: { cssCodeSplit: false, chunkSizeWarningLimit: 850, modulePreload: false,
    rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } } },
});
