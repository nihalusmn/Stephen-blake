throw new Error('Retired logo-badge experiment. Use restore-photo-branding.cjs to retain the original photographed tray logo.');
// Owner explicitly approved direct placement of the original logo artwork.
// No lettering, symbols, proportions or colour values are AI-redrawn here.
const sharp=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='assets/photography/retouched-source',base=path.join(root,'before-logo');
fs.mkdirSync(base,{recursive:true});
function components(data,w,h,channels){
 const mask=new Uint8Array(w*h),seen=new Uint8Array(w*h),out=[];
 for(let y=Math.round(h*.30);y<h*.70;y++)for(let x=Math.round(w*.27);x<w*.71;x++){
  const i=y*w+x,k=i*channels;
  mask[i]=data[k]>225&&data[k+1]>225&&data[k+2]>225?1:0;
 }
 for(let i=0;i<mask.length;i++)if(mask[i]&&!seen[i]){
  const queue=[i];seen[i]=1;let minx=w,miny=h,maxx=0,maxy=0,sx=0,sy=0;
  for(let j=0;j<queue.length;j++){
   const at=queue[j],x=at%w,y=Math.floor(at/w);minx=Math.min(minx,x);maxx=Math.max(maxx,x);miny=Math.min(miny,y);maxy=Math.max(maxy,y);sx+=x;sy+=y;
   for(const n of [at-1,at+1,at-w,at+w])if(n>=0&&n<mask.length&&mask[n]&&!seen[n]){seen[n]=1;queue.push(n)}
  }
  if(queue.length>60)out.push({x:minx,y:miny,right:maxx,bottom:maxy,count:queue.length,cx:sx/queue.length,cy:sy/queue.length});
 }
 return out;
}
(async()=>{
 const original=fs.readFileSync(path.join(root,'brand-master.png'));
 const {data,info}=await sharp(original).removeAlpha().raw().toBuffer({resolveWithObject:true});
 const bg={r:data[0],g:data[1],b:data[2]},bounds={left:info.width,top:info.height,right:0,bottom:0};
 for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++){
  const k=(y*info.width+x)*info.channels;
  if(Math.abs(data[k]-bg.r)+Math.abs(data[k+1]-bg.g)+Math.abs(data[k+2]-bg.b)>85){bounds.left=Math.min(bounds.left,x);bounds.top=Math.min(bounds.top,y);bounds.right=Math.max(bounds.right,x);bounds.bottom=Math.max(bounds.bottom,y)}
 }
 const lw=bounds.right-bounds.left+11,lh=bounds.bottom-bounds.top+11;
 // Preserve the complete original two-colour artwork, including its internal
 // negative space. The supplied dark background is part of this approved mark.
 const logo=await sharp(original).extract({left:bounds.left-5,top:bounds.top-5,width:lw,height:lh}).png().toBuffer();
 const placements=[];
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('-v32.png'))){
  const backup=path.join(base,file);if(!fs.existsSync(backup))fs.copyFileSync(path.join(root,file),backup);
  const meta=await sharp(backup).metadata();
  const probe=await sharp(backup).resize({width:600}).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const cs=components(probe.data,probe.info.width,probe.info.height,probe.info.channels);
  const central=cs.filter(c=>c.count>500&&c.cx<600*.64&&Math.abs(c.cy/probe.info.height-.5)<.14)
   .sort((a,b)=>Math.hypot(a.cx/600-.5,a.cy/probe.info.height-.5)-Math.hypot(b.cx/600-.5,b.cy/probe.info.height-.5))[0];
  let box=[.34,.365,.33,.30];
  if(central){
   let x=central.x,y=central.y,r=central.right,b=central.bottom;
   for(let pass=0;pass<4;pass++)for(const c of cs){
    if(c.cx>600*.65)continue;
    if(c.x<=r+12&&c.right>=x-12&&c.y<=b+12&&c.bottom>=y-12){x=Math.min(x,c.x);y=Math.min(y,c.y);r=Math.max(r,c.right);b=Math.max(b,c.bottom)}
   }
   box=[(x-12)/600,(y-12)/probe.info.height,(r-x+25)/600,(b-y+25)/probe.info.height];
  }
  // The new clean plates have no old crest to cover.
  if(!central)box=[.365,.39,.29,.25];
  // Explicit art-directed coverage prevents isolated white crest segments or
  // the adjacent white grade card from shrinking the replacement footprint.
  if(file.includes('robusta')&&!file.includes('aaa-v32'))box=[.32,.35,.35,.31];
  if(file==='green-collection-tray-v32.png')box=[.30,.315,.39,.33];
  const left=Math.round(box[0]*meta.width),top=Math.round(box[1]*meta.height),width=Math.round(box[2]*meta.width),height=Math.round(box[3]*meta.height);
  const inset=Math.round(width*.09),art=await sharp(logo).resize({width:width-inset*2,height:height-inset*2,fit:'inside'}).png().toBuffer(),am=await sharp(art).metadata();
  const paper=Buffer.from(`<svg width="${width}" height="${height}"><ellipse cx="${width/2}" cy="${height/2}" rx="${width/2}" ry="${height/2}" fill="rgb(${bg.r},${bg.g},${bg.b})"/></svg>`);
  const card=await sharp(paper).composite([{input:art,left:Math.round((width-am.width)/2),top:Math.round((height-am.height)/2)}]).png().toBuffer();
  await sharp(backup).composite([{input:card,left,top}]).png().toFile(path.join(root,file));
  placements.push({file,left,top,width,height,logoPixels:'Exact source artwork; proportional resize only',base:backup});
 }
 fs.writeFileSync('docs/V32-logo-placements.json',JSON.stringify({source:'STEPHEN BLAKE LOGO.pdf.png',sha256:crypto.createHash('sha256').update(original).digest('hex'),background:bg,placements},null,2));
 console.log('Applied original artwork to',placements.length,'images');
})().catch(e=>{console.error(e);process.exit(1)});
