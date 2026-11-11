const sharp=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs=require('fs');
const root=process.cwd()+'/';
const map={'green-robusta-cherry-aaa':4048,'green-arabica-cherry-a':4058,'green-arabica-pl-a':4053,'green-arabica-pl-pb':4056,'green-arabica-parchment-c':4064,'green-collection-tray':0};
(async()=>{for(const [slug,n] of Object.entries(map)){
 const name=slug+'-v32.png',p=root+'assets/photography/retouched-source/';
 const source=n?root+`assets/photography/retouched-source/originals/IMG_${n}.jpg`:root+'assets/photography/retouched-source/originals/collection-tray.jpeg';
 const meta=await sharp(p+'before-logo/'+name).metadata(),w=meta.width,h=meta.height;
 const src=await sharp(source).rotate().resize(w,h,{fit:'fill'}).removeAlpha().raw().toBuffer();
 const dst=await sharp(p+'before-logo/'+name).removeAlpha().raw().toBuffer();
 const sw=600,sh=Math.round(h/w*sw),s=await sharp(src,{raw:{width:w,height:h,channels:3}}).resize(sw,sh).raw().toBuffer(),b=await sharp(dst,{raw:{width:w,height:h,channels:3}}).resize(sw,sh).raw().toBuffer();
 const mask=new Uint8Array(sw*sh),seen=new Uint8Array(sw*sh),cs=[];
 for(let y=Math.floor(sh*.31);y<sh*.68;y++)for(let x=sw*.29|0;x<sw*.675;x++){
  const i=y*sw+x,k=i*3;for(const a of [s,b])if(a[k]>200&&a[k+1]>190&&a[k+2]>170&&Math.max(a[k],a[k+1],a[k+2])-Math.min(a[k],a[k+1],a[k+2])<65){mask[i]=1;break}
 }
 for(let i=0;i<mask.length;i++)if(mask[i]&&!seen[i]){const q=[i];seen[i]=1;let sx=0,sy=0,x0=sw,y0=sh,x1=0,y1=0;for(let j=0;j<q.length;j++){const v=q[j],x=v%sw,y=v/sw|0;sx+=x;sy+=y;x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);for(const z of [v-1,v+1,v-sw,v+sw])if(z>=0&&z<mask.length&&mask[z]&&!seen[z]){seen[z]=1;q.push(z)}}if(q.length>45)cs.push({q,cx:sx/q.length/sw,cy:sy/q.length/sh,x0,y0,x1,y1});}
 const main=cs.filter(c=>c.q.length>300&&c.cx<.63).sort((a,b)=>Math.hypot(a.cx-.5,a.cy-.5)-Math.hypot(b.cx-.5,b.cy-.5))[0];if(!main)throw new Error('No source logo '+slug);
 const chosen=new Uint8Array(sw*sh);let x0=main.x0,y0=main.y0,x1=main.x1,y1=main.y1;
 for(let pass=0;pass<4;pass++)for(const c of cs)if(c.cx<.64&&c.x0<x1+15&&c.x1>x0-15&&c.y0<y1+15&&c.y1>y0-15){for(const i of c.q)chosen[i]=255;x0=Math.min(x0,c.x0);y0=Math.min(y0,c.y0);x1=Math.max(x1,c.x1);y1=Math.max(y1,c.y1)}
 // Close the fine printed lines and fill the interior of the paper label.
 let closed=await sharp(chosen,{raw:{width:sw,height:sh,channels:1}}).blur(2).threshold(15).greyscale().raw().toBuffer();
 const outside=new Uint8Array(sw*sh),q=[0];outside[0]=1;for(let j=0;j<q.length;j++){const v=q[j],x=v%sw,y=v/sw|0;for(const z of [x?v-1:-1,x<sw-1?v+1:-1,y?v-sw:-1,y<sh-1?v+sw:-1])if(z>=0&&!outside[z]&&!closed[z]){outside[z]=1;q.push(z)}}
 for(let i=0;i<closed.length;i++)if(!outside[i])closed[i]=255;
 const alpha=await sharp(closed,{raw:{width:sw,height:sh,channels:1}}).resize(w,h).blur(.7).greyscale().raw().toBuffer();
 for(let i=0;i<w*h;i++){const a=alpha[i]/255;for(let c=0;c<3;c++)dst[i*3+c]=Math.round(src[i*3+c]*a+dst[i*3+c]*(1-a))}
 await sharp(dst,{raw:{width:w,height:h,channels:3}}).png().toFile(p+name);
 for(const size of [480,960,1120])await sharp(p+name).resize({width:size}).webp({quality:85,effort:6}).toFile(root+`assets/photography/${slug}-v32-original-logo-${size}.webp`);
 console.log(slug);
}})().catch(e=>{console.error(e);process.exit(1)});
