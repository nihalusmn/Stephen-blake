// Resize/export only. Cosmetic retouching is done with the image-generation tool.
const sharp=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs=require('fs');
(async()=>{
 for(const file of fs.readdirSync('assets/photography/retouched-source').filter(f=>f.endsWith('-v32.png'))){
  for(const width of [480,960,1120]){
   await sharp(`assets/photography/retouched-source/${file}`).resize({width}).webp({quality:83,effort:6})
    .toFile(`assets/photography/${file.replace('.png',`-${width}.webp`)}`);
  }
 }
 console.log('Exported responsive WebP catalogue assets');
})().catch(e=>{console.error(e);process.exit(1)});
