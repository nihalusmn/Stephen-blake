const {spawnSync}=require('child_process'),path=require('path'),fs=require('fs');
const root=path.resolve(__dirname,'../../..');
const jobs=[
 ['slow-network','source/tests/v32-desktop-network.cjs',{SB_REPORT:'../output/performance/candidate/slow-network.json'}],
 ['slow-blocked','source/tests/v32-desktop-network.cjs',{SB_BLOCK_VIDEO:'1',SB_REPORT:'../output/performance/candidate/slow-blocked.json'}],
 ['warm-fallback','source/tests/performance/warm-and-fallback.cjs',{}],
 ['startup','source/tests/performance/startup.cjs',{},'candidate','http://127.0.0.1:4197/'],
 ['lighthouse','source/tests/performance/lighthouse-batch.cjs',{},'candidate','http://127.0.0.1:4197/','5']
];
for(const [name,script,env,...args] of jobs){const cwd=script.includes('v32-')?path.join(root,'source'):root;const file=path.join(root,script);const log=fs.openSync(path.join(root,'output/performance/candidate',name+'.log'),'w');console.log('START',name);const result=spawnSync(process.execPath,[file,...args],{cwd,env:{...process.env,SB_URL:'http://127.0.0.1:4197/',...env},stdio:['ignore',log,log],timeout:900000});fs.closeSync(log);if(result.status!==0){console.error(name,result.status,result.error);process.exit(1)}console.log('PASS',name)}
