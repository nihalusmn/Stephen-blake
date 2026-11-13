const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const [label,url,count='5',profiles='mobile,desktop']=process.argv.slice(2);
const cli=process.env.SB_LH_CLI||'/tmp/sb-seo-tools/node_modules/lighthouse/cli/index.js';
const out=path.resolve('output/performance',label);fs.mkdirSync(out,{recursive:true});
const summary=[];
for(const profile of profiles.split(','))for(let i=1;i<=+count;i++){
 const prefix=path.join(out,`${profile}-${i}`);
 const args=[cli,url,'--only-categories=performance','--chrome-flags=--headless=new --no-first-run --no-default-browser-check','--output=json','--output=html','--save-assets',`--output-path=${prefix}`,'--quiet'];
 if(profile==='desktop')args.push('--preset=desktop');
 const run=spawnSync(process.execPath,args,{encoding:'utf8',timeout:120000,env:{...process.env,CHROME_PATH:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}});
 if(run.status!==0){console.error(run.stderr);process.exit(1)}
 const lhr=JSON.parse(fs.readFileSync(prefix+'.report.json','utf8'));
 const val=id=>lhr.audits[id]?.numericValue;
 const row={profile,run:i,score:lhr.categories.performance.score*100,fcp:val('first-contentful-paint'),lcp:val('largest-contentful-paint'),tbt:val('total-blocking-time'),cls:val('cumulative-layout-shift'),speedIndex:val('speed-index'),bytes:val('total-byte-weight'),runtimeError:lhr.runtimeError||null};
 summary.push(row);fs.writeFileSync(path.join(out,'summary.json'),JSON.stringify(summary,null,2));console.log(label,JSON.stringify(row));
}
