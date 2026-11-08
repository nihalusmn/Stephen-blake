(function(){var e=document.createElement(`style`);e.textContent=`:root{--paper:#f0e7d9;--paper-2:#e8ddcd;--paper-3:#ddd0bd;--roast:#0b0806;--roast-2:#15100c;--roast-3:#241811;--cherry:#7d3025;--cherry-lit:#934033;--leaf:#69705a;--gold:#b99a63;--gold-soft:#cbb58a;--ink:#17100c;--muted:#746657;--muted-2:#978673;--line:#d1c2ad;--line-dark:#392b21;--display:"Fraunces",Georgia,serif;--text:"Archivo","Helvetica Neue",Arial,sans-serif;--t-hero:clamp(2.9rem,6.6vw,6.2rem);--t-h2:clamp(2.3rem,4.9vw,4.4rem);--t-h3:clamp(1.35rem,2.2vw,1.9rem);--t-lead:clamp(1.05rem,1.3vw,1.24rem);--t-small:.885rem;--t-data:.74rem;--gutter:clamp(1.25rem,5vw,5rem);--max:1520px;--ease:cubic-bezier(.22,.85,.3,1);--m-ui:.18s;--m-content:.42s;--m-cinematic:.85s;--r:2px}:root:not([data-theme=light]){--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}*{box-sizing:border-box}html{-webkit-text-size-adjust:100%;scroll-behavior:smooth;scroll-padding-top:88px}body{background:var(--paper);color:var(--ink);font-family:var(--text);-webkit-font-smoothing:antialiased;margin:0;font-size:1rem;line-height:1.65;overflow-x:hidden}img{max-width:100%;height:auto;display:block}a{color:inherit;text-decoration:none}button{font:inherit;color:inherit;cursor:pointer;background:0 0;border:0}h1,h2,h3,h4{font-family:var(--display);font-variation-settings:"SOFT" 15,"WONK" 0;margin:0;font-weight:400}h1{font-size:var(--t-hero);letter-spacing:-.028em;line-height:.96}h2{font-size:var(--t-h2);letter-spacing:-.024em;line-height:1.02}h3{font-size:var(--t-h3);letter-spacing:-.015em;line-height:1.14}p{margin:0}:focus-visible{outline:2px solid var(--cherry);outline-offset:3px}::selection{background:var(--cherry);color:var(--paper)}.wrap{max-width:var(--max);padding-inline:var(--gutter);margin-inline:auto}.section{padding-block:clamp(4.5rem,9vw,9rem)}.lead{font-size:var(--t-lead);color:var(--muted);max-width:50ch;line-height:1.62}.data{font-size:var(--t-data);letter-spacing:.09em;text-transform:uppercase;color:var(--cherry);font-weight:500}.dark{background:var(--roast);color:var(--paper)}.dark .lead,.dark p{color:#d8c9b6}.dark .data{color:var(--gold)}.btn{border-radius:var(--r);letter-spacing:.14em;text-transform:uppercase;background:var(--roast-2);color:var(--paper);border:1px solid var(--roast-2);transition:background var(--m-ui) var(--ease),color var(--m-ui) var(--ease), border-color var(--m-ui) var(--ease);align-items:center;gap:.85rem;padding:1.05rem 1.9rem;font-size:.78rem;font-weight:500;display:inline-flex;position:relative}.btn .icon{transition:transform var(--m-ui) var(--ease)}.btn:hover{background:var(--roast-3);border-color:var(--roast-3)}.btn:hover .icon{transform:translate(3px)}.btn--ghost{color:var(--ink);border-color:var(--line);background:0 0}.btn--ghost:hover{border-color:var(--ink);color:var(--ink);background:0 0}.dark .btn,.hero .btn{background:var(--paper);color:var(--roast);border-color:var(--paper)}.dark .btn:hover,.hero .btn:hover{background:var(--gold-soft);border-color:var(--gold-soft);color:var(--roast)}.dark .btn--ghost,.hero .btn--ghost{color:var(--paper);background:0 0;border-color:#f0e7d952}.dark .btn--ghost:hover,.hero .btn--ghost:hover{border-color:var(--paper);color:var(--paper);background:0 0}.btn--sm{padding:.72rem 1.3rem;font-size:.7rem}.btn[disabled]{opacity:.45;pointer-events:none}.link{font-size:var(--t-small);transition:background-size var(--m-content) var(--ease),color var(--m-ui);background-image:linear-gradient(currentColor,currentColor);background-position:0 100%;background-repeat:no-repeat;background-size:100% 1px;align-items:center;gap:.45rem;padding-bottom:.25rem;font-weight:500;display:inline-flex}.link:hover{color:var(--cherry);background-size:0 1px}.icon{stroke:currentColor;fill:none;stroke-width:1.6px;stroke-linecap:round;stroke-linejoin:round;flex:none;width:1em;height:1em}.chip{border:1px solid var(--line);color:var(--muted);transition:color var(--m-ui) var(--ease),border-color var(--m-ui) var(--ease), background var(--m-ui) var(--ease);background:0 0;border-radius:999px;padding:.5rem 1.05rem;font-size:.78rem;font-weight:500}.chip:hover{border-color:var(--ink);color:var(--ink)}.chip[aria-pressed=true],.chip.is-on{background:var(--ink);border-color:var(--ink);color:var(--paper)}.dark .chip{color:#c9b9a5;border-color:#6b5340}.dark .chip:hover{border-color:var(--paper);color:var(--paper)}.dark .chip[aria-pressed=true],.dark .chip.is-on{background:var(--gold);border-color:var(--gold);color:var(--roast)}@media (prefers-reduced-motion:no-preference){[data-reveal]{opacity:1;transition:opacity var(--m-content) var(--ease) var(--rd,0s),transform .52s var(--ease) var(--rd,0s);transform:none}[data-reveal].seen{opacity:1;transform:none}[data-reveal=mask]{opacity:1;clip-path:inset(0);transition:clip-path .7s var(--ease) var(--rd,0s);transform:none}[data-reveal=mask].seen{clip-path:inset(0)}[data-reveal=zoom] img{transition:transform .9s var(--ease);transform:scale(1)}[data-reveal=zoom].seen img{transform:scale(1)}}@media (prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition-duration:.001ms!important;animation-duration:.001ms!important;animation-iteration-count:1!important}}.masthead{z-index:50;transition:background var(--m-content) var(--ease),box-shadow var(--m-content) var(--ease);position:fixed;top:0;left:0;right:0}.masthead__in{height:84px;transition:height var(--m-content) var(--ease);align-items:center;gap:2.4rem;display:flex}.masthead.stuck{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--line);background:#f0e7d9eb}.masthead.stuck.on-dark{background:#0b0806c7;box-shadow:0 1px #b99a6329}.masthead.stuck .masthead__in{height:68px}.masthead.stuck.on-dark .crest{color:var(--paper)}.masthead.stuck.on-dark .crest img{filter:drop-shadow(0 1px 3px #00000059)}.masthead.stuck.on-dark .mainnav,.masthead.stuck.on-dark .burger{color:var(--paper)}.masthead.stuck.on-dark .btn{background:var(--paper);color:var(--roast);border-color:var(--paper)}.crest{color:var(--paper);align-items:center;gap:.75rem;margin-right:auto;display:flex}.crest img{object-fit:contain;filter:drop-shadow(0 1px 3px #00000059);width:44px;height:44px}.crest b{font-family:var(--display);letter-spacing:.13em;font-size:1.05rem;font-weight:500;line-height:1;display:block}.crest i{letter-spacing:.2em;opacity:.72;margin-top:.4rem;font-size:.6rem;font-style:normal;display:block}.masthead.stuck .crest{color:var(--ink)}.masthead.stuck .crest img{filter:none}.mainnav{letter-spacing:.15em;text-transform:uppercase;color:var(--paper);gap:2.2rem;font-size:.74rem;display:flex}.masthead.stuck .mainnav,.masthead.stuck .burger{color:var(--ink)}.mainnav a{padding:.3rem 0;position:relative}.mainnav a:after{content:"";transform-origin:100%;height:1px;transition:transform .35s var(--ease);background:currentColor;position:absolute;bottom:0;left:0;right:0;transform:scaleX(0)}.mainnav a:hover:after{transform-origin:0;transform:scaleX(1)}.masthead .btn{background:var(--paper);color:var(--roast);border-color:var(--paper)}.masthead .btn:hover{background:var(--gold-soft);border-color:var(--gold-soft);color:var(--roast)}.masthead.stuck .btn{background:var(--roast-2);border-color:var(--roast-2);color:var(--paper)}.burger{color:var(--paper);padding:.5rem;display:none}@media (width<=1080px){.mainnav{display:none}.burger{display:inline-flex}.masthead .btn--head{display:none}.masthead__in{height:72px}}.hero{background:var(--roast);min-height:100svh;color:var(--paper);align-items:flex-end;display:flex;position:relative;overflow:hidden}.hero__bg{object-fit:cover;object-position:58% 50%;will-change:transform;width:100%;height:120%;position:absolute;inset:-10% 0}.hero:after{content:"";pointer-events:none;background:linear-gradient(#1a100a9e 0%,#1a100a1f 34%,#1a100a7a 72%,#1a100ae0 100%),linear-gradient(90deg,#1a100a8c 0%,#1a100a00 62%);position:absolute;inset:0}.hero__in{z-index:2;width:100%;padding-block:clamp(3rem,9vh,6rem) clamp(2.5rem,6vh,4rem);position:relative}.hero h1{text-shadow:0 2px 26px #140c0773;max-width:15ch}.hero h1 em{font-style:italic;font-weight:300}.hero__sub{max-width:44ch;font-size:var(--t-lead);color:#e6daca;margin-top:1.6rem}.hero__acts{flex-wrap:wrap;gap:1rem;margin-top:2.2rem;display:flex}.hero .btn--ghost{color:var(--paper);border-color:#f4ede173}.hero .btn--ghost:hover{background:var(--paper);color:var(--roast);border-color:var(--paper)}.hero__foot{border-top:1px solid #f4ede138;flex-wrap:wrap;align-items:center;gap:1.4rem 3rem;margin-top:clamp(2.5rem,6vh,4.5rem);padding-top:1.5rem;display:flex}.hero__foot div{min-width:8rem}.hero__foot dt{letter-spacing:.16em;text-transform:uppercase;color:#c0ae99;font-size:.65rem}.hero__foot dd{font-family:var(--display);margin:.4rem 0 0;font-size:1.15rem}.scrollcue{letter-spacing:.18em;text-transform:uppercase;color:#c0ae99;align-items:center;gap:.7rem;margin-left:auto;font-size:.66rem;display:flex}.scrollcue span{background:#f4ede14d;width:1px;height:34px;display:block;position:relative;overflow:hidden}.scrollcue span:after{content:"";background:var(--paper);animation:cue 2.4s var(--ease) infinite;position:absolute;inset:0}@keyframes cue{0%{transform:translateY(-100%)}60%,to{transform:translateY(100%)}}@media (width<=700px){.scrollcue{display:none}.hero__bg{object-position:70% 50%}.hero__acts{gap:.75rem}.hero__acts .btn{justify-content:center;width:100%}.hero__foot{grid-template-columns:1fr 1fr;gap:1.1rem;margin-top:2.2rem;display:grid}.hero__foot div{min-width:0}.hero__foot dd{font-size:1rem}.hero__foot div:first-child{grid-column:1/-1}}.strip{background:var(--roast);color:var(--gold-soft);border-block:1px solid var(--line-dark)}.strip__in{letter-spacing:.24em;text-transform:uppercase;flex-wrap:wrap;justify-content:center;gap:.9rem 2.6rem;padding-block:1.35rem;font-size:.66rem;display:flex}.strip span{white-space:nowrap}.shead{grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);align-items:end;gap:clamp(1.5rem,4vw,4rem);margin-bottom:clamp(2.5rem,5vw,4rem);display:grid}.shead h2{max-width:17ch}.shead .data{margin-bottom:1.1rem;display:block}@media (width<=860px){.shead{grid-template-columns:1fr;align-items:start;gap:1.2rem}}.how{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);margin-top:clamp(3rem,6vw,5rem);display:grid}.how article{border-right:1px solid var(--line);padding:clamp(1.8rem,3vw,2.8rem) clamp(1.4rem,2.4vw,2.4rem) 0 0}.how article:last-child{border-right:0}.how b{font-family:var(--display);color:var(--paper-3);letter-spacing:-.03em;font-size:clamp(2.6rem,5vw,4.2rem);font-weight:400;line-height:1;display:block}.how h3{letter-spacing:.2em;text-transform:uppercase;font-size:.78rem;font-family:var(--text);color:var(--ink);margin-top:1.6rem;font-weight:500}.how p{color:var(--muted);max-width:30ch;margin-top:.85rem;font-size:.92rem}@media (width<=820px){.how{grid-template-columns:1fr}.how article{border-right:0;border-bottom:1px solid var(--line);padding-bottom:1.8rem}.how article:last-child{border-bottom:0}}.story{grid-template-columns:1fr 1fr;align-items:center;gap:clamp(2rem,6vw,6rem);display:grid}.story__media{position:relative;overflow:hidden}.story__media img{object-fit:contain;width:auto;max-width:100%;height:auto;max-height:78svh;margin-inline:auto;display:block}.story__media figcaption{color:var(--ink);letter-spacing:.06em;padding:.85rem 0;font-size:.72rem}.story blockquote{border-left:2px solid var(--cherry);font-family:var(--display);max-width:34ch;margin:2rem 0 0;padding-left:1.4rem;font-size:1.32rem;font-style:italic;line-height:1.45}@media (width<=860px){.story{grid-template-columns:1fr;gap:2.2rem}.story__media{width:100%;max-width:440px;margin-inline:auto}}.story-depth{padding-bottom:clamp(4rem,9vw,8rem)}.story-depth__intro{grid-template-columns:1fr 1fr;align-items:end;gap:1rem 4rem;margin-bottom:3rem;display:grid}.story-depth__intro>.data{grid-column:1/-1}.story-depth__grid{grid-template-columns:1fr 1fr;gap:3rem 5rem;display:grid}.story-depth__grid article{border-top:1px solid var(--line);padding-top:1.5rem}.story-depth h3{margin:.8rem 0 1rem;font-size:clamp(1.45rem,2.5vw,2rem)}.story-depth__grid p{max-width:60ch;color:var(--muted);margin-top:.8rem;line-height:1.8}.story-depth__closing{border-top:1px solid var(--line);max-width:800px;margin-top:3.5rem;padding-top:2rem}.story-depth__closing p{margin:1rem 0 1.5rem;font-size:clamp(1.2rem,2vw,1.65rem);line-height:1.6}.packaging-gallery{grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,4rem);margin:3rem 0 4rem;display:grid}.packaging-gallery figure{margin:0}.packaging-gallery img{aspect-ratio:1;object-fit:contain;background:#dedede;width:100%;display:block}.packaging-gallery figcaption{padding:1.5rem 0 0}.packaging-gallery h3{margin:.6rem 0;font-size:clamp(1.4rem,2.5vw,2rem)}.packaging-gallery p{color:#cdbca7;max-width:48ch;line-height:1.7}@media (width<=700px){.story-depth__intro,.story-depth__grid,.packaging-gallery{grid-template-columns:1fr}.story-depth__grid{gap:2.5rem}.story-depth__intro{gap:1rem}.packaging-gallery{gap:2.5rem}}.filters{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.2rem;display:flex}.filters__row{flex-wrap:wrap;gap:.5rem;display:flex}.search{border:1px solid var(--line);border-radius:var(--r);min-width:min(100%,230px);color:var(--muted);align-items:center;gap:.65rem;padding:.5rem .9rem;display:flex}.search input{font:inherit;width:100%;color:var(--ink);background:0 0;border:0;outline:none;font-size:.88rem}.species{flex-wrap:wrap;align-items:center;gap:.5rem;margin-top:1rem;display:flex}.species>span{letter-spacing:.12em;text-transform:uppercase;color:var(--muted-2);margin-right:.35rem;font-size:.72rem}.grid{grid-template-columns:repeat(3,1fr);gap:clamp(2.4rem,4vw,3.6rem) clamp(1.2rem,2.4vw,2.2rem);margin-top:clamp(2rem,4vw,3.2rem);display:grid}.card{text-align:left;flex-direction:column;display:flex;position:relative}.card__img{border-radius:var(--r);background:var(--paper-3);display:block;overflow:hidden}.card__img img{aspect-ratio:4/5;object-fit:cover;width:100%;transition:transform var(--m-content) var(--ease)}.card:hover .card__img img{transform:scale(1.025)}.card__meta{letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2);margin:1.1rem 0 .55rem;font-size:.66rem}.card h3{font-size:clamp(1.3rem,1.8vw,1.65rem)}.card__grade{color:var(--muted);letter-spacing:.02em;margin-top:.5rem;font-size:.78rem}.card__link{letter-spacing:.13em;text-transform:uppercase;color:var(--ink);transition:color var(--m-ui) var(--ease);background:0 0;align-items:center;gap:.45rem;margin-top:1.1rem;padding:0;font-size:.74rem;display:inline-flex}.card__link .icon{transition:transform var(--m-ui) var(--ease)}.card__link:after{content:"";position:absolute;inset:0}.card:hover .card__link{color:var(--cherry)}.card:hover .card__link .icon{transform:translate(2px,-2px)}.card__link:focus-visible{outline:none}.card:focus-within{outline:2px solid var(--cherry);outline-offset:8px}@media (width<=1000px){.grid{grid-template-columns:repeat(2,1fr)}}@media (width<=600px){.grid{grid-template-columns:1fr}}.empty{text-align:center;color:var(--muted);padding:3rem 0}.note{color:var(--muted-2);max-width:80ch;margin-top:2.5rem;font-size:.78rem;line-height:1.75}.origins__grid{grid-template-columns:1.05fr .95fr;align-items:center;gap:clamp(2rem,5vw,5rem);display:grid}.origins__media{position:relative;overflow:hidden}.origins__media img{aspect-ratio:5/6;object-fit:cover;width:100%;transition:opacity .6s var(--ease)}.origins__badge{background:var(--paper);color:var(--roast);font-family:var(--display);padding:.6rem 1.1rem;font-size:1.05rem;position:absolute;top:1.3rem;left:1.3rem}.regions{flex-wrap:wrap;gap:.5rem;margin:1.8rem 0;display:flex}.region-out{border-top:1px solid var(--line-dark);padding-top:1.5rem}.region-out h3{margin:.5rem 0 .8rem;font-size:1.9rem}@media (width<=900px){.origins__grid{grid-template-columns:1fr}.origins__media img{aspect-ratio:16/11}}.proc{grid-template-columns:repeat(3,1fr);gap:clamp(1.2rem,2.5vw,2rem);display:grid}.proc button{text-align:left;border:1px solid var(--line);transition:all .3s var(--ease);background:0 0;border-radius:3px;padding:1.8rem 1.6rem 1.6rem}.proc button:hover{border-color:var(--ink);transform:translateY(-3px)}.proc button.is-on{background:var(--ink);border-color:var(--ink);color:var(--paper)}.proc button.is-on p{color:#cbbba8}.proc h3{margin-bottom:.6rem;font-size:1.55rem}.proc p{color:var(--muted);font-size:.88rem}.proc .state{color:var(--cherry);align-items:center;gap:.4rem;margin-top:1.1rem;font-size:.78rem;font-weight:500;display:inline-flex}.proc button.is-on .state{color:var(--gold)}@media (width<=820px){.proc{grid-template-columns:1fr}}.steps{grid-template-columns:repeat(5,1fr);gap:0;margin:0;padding:0;list-style:none;display:grid}.steps li{border-top:1px solid var(--line-dark);padding:1.6rem 1.2rem 1.8rem;position:relative}.steps b{font-family:var(--display);color:var(--gold);letter-spacing:.1em;font-size:.85rem;display:block}.steps span{font-family:var(--display);margin-top:.8rem;font-size:1.25rem;display:block}.steps small{color:#c0ae99;margin-top:.5rem;font-size:.82rem;line-height:1.6;display:block}@media (width<=980px){.steps{grid-template-columns:repeat(2,1fr)}}@media (width<=560px){.steps{grid-template-columns:1fr}}.request{background:var(--paper-2)}.flow{max-width:1080px;margin-inline:auto}.flow__rail{flex-wrap:wrap;gap:.4rem;margin-bottom:2.6rem;display:flex}.flow__rail button{text-align:left;border-top:2px solid var(--line);min-width:6.5rem;color:var(--muted-2);letter-spacing:.06em;transition:color .3s var(--ease),border-color .3s var(--ease);flex:1;padding-top:.85rem;font-size:.76rem}.flow__rail button.done{border-color:var(--leaf);color:var(--muted)}.flow__rail button.now{border-color:var(--cherry);color:var(--cherry);font-weight:600}.flow__stage{min-height:340px}.flow__panel{display:none}.flow__panel.on{display:block}@media (prefers-reduced-motion:no-preference){.flow__panel.on{animation:stage .55s var(--ease) both}@keyframes stage{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}}.flow h3{margin-bottom:.5rem;font-size:clamp(1.7rem,3vw,2.5rem)}.flow__hint{color:var(--muted);max-width:52ch;margin-bottom:1.8rem;font-size:.92rem}.picks{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.9rem;display:grid}.pick{text-align:left;border:1px solid var(--line);background:var(--paper);transition:all .28s var(--ease);border-radius:3px;padding:1.1rem 1.2rem;position:relative;overflow:hidden}.pick:hover{border-color:var(--ink);transform:translateY(-2px)}.pick[aria-pressed=true]{border-color:var(--cherry);box-shadow:inset 0 0 0 1px var(--cherry);background:#f8f1e6}.pick strong{font-family:var(--display);font-size:1.18rem;font-weight:400;display:block}.pick small{color:var(--muted);margin-top:.3rem;font-size:.8rem;display:block}.pick__tick{background:var(--cherry);width:1.35rem;height:1.35rem;color:var(--paper);opacity:0;transition:all .25s var(--ease);border-radius:50%;place-items:center;display:grid;position:absolute;top:.85rem;right:.85rem;transform:scale(.6)}.pick[aria-pressed=true] .pick__tick{opacity:1;transform:none}.pick--photo{background:0 0;border:0;padding:0}.pick--photo img{aspect-ratio:1;object-fit:cover;width:100%;transition:transform .6s var(--ease),filter .3s var(--ease);filter:saturate(.85)brightness(.92);border-radius:3px}.pick--photo:hover img{transform:scale(1.03)}.pick--photo[aria-pressed=true] img{filter:none;box-shadow:0 0 0 2px var(--cherry),0 0 0 5px var(--paper-2)}.pick--photo b{font-family:var(--display);margin-top:.7rem;font-size:1.15rem;font-weight:400;display:block}.pick--photo span{color:var(--muted);font-size:.78rem;display:block}.flow__nav{border-top:1px solid var(--line);flex-wrap:wrap;align-items:center;gap:.8rem;margin-top:2.4rem;padding-top:1.6rem;display:flex}.flow__nav .spacer{margin-left:auto}.fgrid{grid-template-columns:repeat(2,1fr);gap:1rem 1.2rem;display:grid}.field{flex-direction:column;gap:.4rem;display:flex}.field>span{letter-spacing:.2em;text-transform:uppercase;color:var(--muted-2);font-size:.64rem}.field.wide{grid-column:1/-1}input,select,textarea{border:0;border-bottom:1px solid var(--line);color:var(--ink);font:inherit;width:100%;transition:border-color var(--m-ui) var(--ease);background:0 0;border-radius:0;padding:.7rem 0;font-size:1rem}select{padding-right:1.2rem}input:focus,select:focus,textarea:focus{border-bottom-color:var(--ink);outline:none}input::placeholder,textarea::placeholder{color:var(--muted-2)}textarea{resize:vertical;min-height:90px}select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--cherry) 50%),linear-gradient(135deg,var(--cherry) 50%,transparent 50%);background-position:calc(100% - 18px) 55%,calc(100% - 13px) 55%;background-repeat:no-repeat;background-size:5px 5px;padding-right:2.4rem}.honeypot{opacity:0;width:1px;height:1px;position:absolute;left:-9999px}.summary{border:1px solid var(--line);background:var(--paper);border-radius:3px;margin-bottom:1.6rem;padding:1.1rem 1.3rem}.summary h4{font-family:var(--text);letter-spacing:.12em;text-transform:uppercase;color:var(--muted-2);margin-bottom:.7rem;font-size:.72rem;font-weight:600}.summary dl{grid-template-columns:auto 1fr;gap:.35rem 1.4rem;margin:0;font-size:.87rem;display:grid}.summary dt{color:var(--muted-2);font-size:.78rem}.summary dd{margin:0;font-weight:500}.status{border-left:2px solid var(--leaf);background:#6c7a551a;margin-top:1.2rem;padding:1rem 1.2rem;font-size:.9rem}.status[data-kind=error]{border-color:var(--cherry);background:#a6402a17}@media (width<=700px){.fgrid{grid-template-columns:1fr}.flow__rail button{flex:30%;min-width:0}}dialog{background:var(--paper);color:var(--ink);border:0;border-radius:4px;width:min(1080px,100vw - 2rem);max-width:none;height:min(90vh,940px);max-height:none;margin:auto;padding:0;overflow:hidden}dialog::backdrop{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:#1a100ab8}.dossier{grid-template-columns:.9fr 1.1fr;height:100%;min-height:0;display:grid}.dossier__visual{background:var(--paper-3);min-height:0;position:relative;overflow:hidden}.dossier__visual img{object-fit:cover;width:100%;height:100%}.dossier__cap{color:#f6efe3;background:linear-gradient(#0000,#1a100ae6);padding:2rem 1.3rem 1rem;font-size:.75rem;position:absolute;bottom:0;left:0;right:0}.dossier__body{overscroll-behavior:contain;-webkit-overflow-scrolling:touch;min-height:0;padding:clamp(1.5rem,3vw,2.6rem);overflow-y:auto}.dossier__body h2{margin:.5rem 0 .8rem;font-size:clamp(1.9rem,3.2vw,2.7rem)}.dsec{border-top:1px solid var(--line);margin-top:2rem;padding-top:1.6rem}.dsec h4{font-family:var(--text);letter-spacing:.12em;text-transform:uppercase;color:var(--muted-2);margin:0 0 1rem;font-size:.73rem;font-weight:600}.chips{flex-wrap:wrap;gap:.5rem;display:flex}.hint{color:var(--muted);margin-top:.9rem;font-size:.82rem;line-height:1.65}.specs{grid-template-columns:auto 1fr;gap:.7rem 1.5rem;margin:0;font-size:.88rem;display:grid}.specs dt{color:var(--muted-2);font-size:.79rem}.specs dd{margin:0}.dossier__acts{border-top:1px solid var(--line);flex-wrap:wrap;gap:.7rem;margin-top:2rem;padding-top:1.5rem;display:flex}.dclose{z-index:3;background:var(--paper);width:2.6rem;height:2.6rem;color:var(--roast);border-radius:50%;place-items:center;display:grid;position:absolute;top:1rem;right:1rem;box-shadow:0 2px 12px #1a100a40}.dclose:hover{background:var(--cherry);color:var(--paper)}@media (width<=860px){dialog{height:92vh}.dossier{grid-template-rows:minmax(180px,30vh) 1fr;grid-template-columns:1fr}.dossier__visual{min-height:0}}.faq details{border-top:1px solid var(--line)}.faq details:last-child{border-bottom:1px solid var(--line)}.faq summary{cursor:pointer;font-family:var(--display);justify-content:space-between;align-items:baseline;gap:1.5rem;padding:1.5rem 0;font-size:1.28rem;list-style:none;transition:color .2s;display:flex}.faq summary::-webkit-details-marker{display:none}.faq summary:hover{color:var(--cherry)}.faq summary i{color:var(--cherry);transition:transform .3s var(--ease);flex:none;font-style:normal}.faq details[open] summary i{transform:rotate(45deg)}.faq p{max-width:66ch;color:var(--muted);padding-bottom:1.6rem;font-size:.94rem}.contact{grid-template-columns:1fr 1fr;align-items:start;gap:clamp(2rem,5vw,5rem);display:grid}.clist{margin-top:2rem}.clist a{border-top:1px solid var(--line-dark);justify-content:space-between;align-items:baseline;gap:1rem;padding:1.1rem 0;transition:color .2s;display:flex}.clist a:last-child{border-bottom:1px solid var(--line-dark)}.clist a:hover{color:var(--gold)}.clist a span{color:#a8967f}.clist a b{font-family:var(--display);font-size:1.22rem;font-weight:400}@media (width<=860px){.contact{grid-template-columns:1fr}}footer{background:var(--roast);color:var(--paper)}.foot{border-top:1px solid var(--line-dark);grid-template-columns:1.4fr repeat(3,1fr);gap:2.5rem;padding-block:clamp(3rem,6vw,5rem) 2.5rem;display:grid}.foot h4{font-family:var(--text);letter-spacing:.14em;text-transform:uppercase;color:#a8967f;margin-bottom:1.1rem;font-size:.7rem;font-weight:600}.foot a,.foot button{text-align:left;color:#d6c7b3;padding:.32rem 0;font-size:.9rem;transition:color .2s;display:block}.foot a:hover,.foot button:hover{color:var(--gold)}.foot__crest img{width:86px;margin-bottom:1.1rem}.foot__motto{font-family:var(--display);color:var(--gold);margin-top:1rem;font-size:.98rem;font-style:italic}.foot-bottom{border-top:1px solid var(--line-dark);color:#a8967f;flex-wrap:wrap;justify-content:space-between;gap:1rem;padding-block:1.3rem;font-size:.78rem;display:flex}.foot-bottom nav{flex-wrap:wrap;gap:1.5rem;display:flex}@media (width<=900px){.foot{grid-template-columns:1fr 1fr}}@media (width<=540px){.foot{grid-template-columns:1fr;gap:1.8rem}}.foot-mark{font-family:var(--display);letter-spacing:-.045em;color:#f0e7d916;white-space:nowrap;-webkit-user-select:none;user-select:none;padding-block:clamp(2.5rem,7vw,5rem) clamp(1.4rem,3vw,2.4rem);font-size:clamp(2.4rem,10.4vw,10.5rem);font-weight:400;line-height:.88;overflow:hidden}.range__sub{border-top:1px solid var(--line);margin-top:clamp(3.5rem,7vw,6rem);padding-top:clamp(2.2rem,4vw,3.4rem)}.range__sub .shead h3{font-size:var(--t-h3);margin-top:.5rem}.drawer{z-index:70;background:var(--roast);color:var(--paper);padding:var(--gutter);flex-direction:column;display:none;position:fixed;inset:0}.drawer.is-open{display:flex}@media (prefers-reduced-motion:no-preference){.drawer.is-open{animation:stage .4s var(--ease) both}}.drawer__top{justify-content:space-between;align-items:center;margin-bottom:2.5rem;display:flex}.drawer nav a{font-family:var(--display);border-bottom:1px solid var(--line-dark);padding:.6rem 0;font-size:clamp(1.8rem,7vw,2.4rem);display:block}.drawer .btn{margin-top:2rem}.wafloat{z-index:45;background:var(--roast);color:var(--paper);transition:transform .4s var(--ease),background .25s;border-radius:999px;align-items:center;gap:.55rem;padding:.85rem 1.2rem;font-size:.84rem;font-weight:500;display:inline-flex;position:fixed;bottom:1.1rem;right:1.1rem;transform:translateY(120%);box-shadow:0 6px 24px #1a100a4d}.wafloat.show{transform:none}.wafloat:hover{background:var(--cherry)}.origins__grid{align-items:start}.region-out .region-title{color:var(--paper);margin:1.2rem 0 .65rem;font-size:1.3rem;line-height:1.35}.region-detail{margin-top:1.3rem}.region-detail h4,.origin-guide h4{font-family:var(--text);letter-spacing:.06em;color:var(--gold);margin-bottom:.55rem;font-size:.8rem;font-weight:500}.region-detail p,.region-out>p{font-size:.95rem;line-height:1.75}.region-ask{border-left:1px solid var(--gold);color:var(--paper);margin-top:1.5rem;padding-left:1rem}.origin-guide{padding-bottom:clamp(4rem,8vw,7rem)}.origin-guide>h3{margin:.8rem 0 2rem;font-size:clamp(1.8rem,3vw,2.6rem)}.origin-guide__grid{border-top:1px solid var(--line-dark);grid-template-columns:repeat(3,1fr);gap:2rem;padding-top:1.7rem;display:grid}.origin-guide__grid p{font-size:.95rem;line-height:1.75}.origin-guide__note{opacity:.8;max-width:85ch;margin-top:2rem;font-size:.8rem}@media (width>=901px){.origins__media{position:sticky;top:110px}}@media (width<=700px){.origin-guide__grid{grid-template-columns:1fr;gap:1.5rem}}:root{--sb-track:760vh;--sb-story:1;--sb-ink:#0b0806}.sb-cats{background:var(--roast);color:var(--paper);padding-block:clamp(5rem,10vw,9rem)}.sb-cats__head{margin-bottom:clamp(1.6rem,3.4vw,2.8rem)}.sb-cats__head h2{color:#f4e9d9;max-width:16ch;margin-top:.7rem}.sb-cats__head .data{color:var(--gold)}.sb-cats__row{grid-template-columns:repeat(3,1fr);gap:clamp(.8rem,1.6vw,1.5rem);display:grid}.sb-card{color:var(--paper);isolation:isolate;transition:transform var(--m-content) var(--ease), opacity var(--m-content) var(--ease);border-radius:2px;display:block;position:relative;overflow:hidden}.sb-card__img{background:#100b08;display:block;position:relative}.sb-card__img img{aspect-ratio:4/5;object-fit:cover;width:100%;transition:transform var(--m-cinematic) var(--ease), filter var(--m-content) var(--ease);display:block;transform:scale(1.012)}.sb-card__scrim{pointer-events:none;background:linear-gradient(#0a070457 0%,#0a070400 26%),linear-gradient(#09060400 0%,#0906040f 42%,#0906049e 74%,#090604eb 100%);position:absolute;inset:0}.sb-card__glow{opacity:0;pointer-events:none;transition:opacity var(--m-content) var(--ease);position:absolute;inset:0}.sb-card__body{z-index:2;padding:clamp(1.1rem,2vw,1.9rem);display:block;position:absolute;bottom:0;left:0;right:0}.sb-card__spec{letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.7rem;font-size:.66rem;display:block}.sb-card h3{font-family:var(--display);letter-spacing:-.02em;color:#f6eee1;font-size:clamp(1.5rem,2.6vw,2.35rem);font-weight:400;line-height:1.02}.sb-card p{color:#cdbca7;opacity:0;max-width:32ch;max-height:0;transition:max-height var(--m-content) var(--ease), opacity var(--m-ui) var(--ease), margin-top var(--m-content) var(--ease);margin-top:.6rem;font-size:.86rem;line-height:1.55;overflow:hidden}.sb-card__cta{font-size:var(--t-small);color:#f0e3d1;transition:background-size var(--m-content) var(--ease), color var(--m-ui);background-image:linear-gradient(currentColor,currentColor);background-position:0 100%;background-repeat:no-repeat;background-size:0 1px;align-items:center;gap:.5rem;margin-top:1rem;padding-bottom:.22rem;font-weight:500;display:inline-flex}.sb-card__cta .icon{transition:transform var(--m-ui) var(--ease)}.sb-card:after{content:"";z-index:3;pointer-events:none;transition:border-color var(--m-content) var(--ease);border:1px solid #d6be9600;border-radius:2px;position:absolute;inset:0}@media (hover:hover) and (prefers-reduced-motion:no-preference){.sb-cats__row:hover .sb-card{opacity:.72}.sb-cats__row:hover .sb-card:hover{opacity:1}.sb-card:hover,.sb-card:focus-visible{transform:none}.sb-card:hover .sb-card__img img,.sb-card:focus-visible .sb-card__img img{transform:scale(1.055)}.sb-card:hover p,.sb-card:focus-visible p{opacity:1;max-height:6rem;margin-top:.75rem}.sb-card:hover .sb-card__cta,.sb-card:focus-visible .sb-card__cta{background-size:100% 1px}.sb-card:hover .sb-card__cta .icon{transform:translate(2px,-2px)}.sb-card:hover:after,.sb-card:focus-visible:after{border-color:#d6be966b}.sb-card[data-cat=roasted] .sb-card__glow{mix-blend-mode:screen;background:radial-gradient(52% 34% at 50% 52%,#e28c3a4d,#e28c3a00 72%)}.sb-card[data-cat=roasted]:hover .sb-card__glow{opacity:1}.sb-card[data-cat=filter] .sb-card__glow{background-image:radial-gradient(1.5px 1.5px at 22% 36%,#ecdcc4bf,#0000 60%),radial-gradient(1.2px 1.2px at 66% 26%,#ecdcc499,#0000 60%),radial-gradient(1.7px 1.7px at 44% 62%,#ecdcc4b3,#0000 60%),radial-gradient(1.2px 1.2px at 80% 70%,#ecdcc480,#0000 60%),radial-gradient(1.3px 1.3px at 12% 74%,#ecdcc499,#0000 60%),radial-gradient(1.1px 1.1px at 58% 84%,#ecdcc480,#0000 60%)}.sb-card[data-cat=filter]:hover .sb-card__glow{opacity:1}}.sb-cats__row.is-choosing .sb-card{transition:opacity var(--m-content) var(--ease), transform var(--m-cinematic) var(--ease), filter var(--m-content) var(--ease)}.sb-cats__row.is-choosing .sb-card:not(.is-chosen){opacity:.18;filter:saturate(.5);transform:scale(.965)}.sb-cats__row.is-choosing .sb-card.is-chosen{transform:scale(1.035)}.sb-cats__row.is-choosing .sb-card.is-chosen .sb-card__img img{transform:scale(1.06)}.sb-cats__row.is-choosing .sb-card.is-chosen p{opacity:1;max-height:6rem;margin-top:.75rem}@media (prefers-reduced-motion:no-preference){.range.is-entering .range__art{animation:sb-artin 1.1s var(--ease) both}.range.is-entering .range__heroin>*{animation:sb-rise .8s var(--ease) both}.range.is-entering .range__heroin>:nth-child(2){animation-delay:60ms}.range.is-entering .range__heroin>:nth-child(3){animation-delay:.12s}.range.is-entering .range__heroin>:nth-child(4){animation-delay:.18s}.range.is-entering .range__body{animation:sb-rise .9s var(--ease) .18s both}@keyframes sb-artin{0%{opacity:0;transform:scale(1.08)}to{opacity:.62;transform:none}}@keyframes sb-rise{0%{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}}@media (width<=860px){.sb-cats__row{grid-template-columns:1fr;gap:1rem}.sb-card__img img{aspect-ratio:16/10;object-position:50% 36%}.sb-card p{opacity:1;max-height:6rem;margin-top:.6rem}}.sb-canvas,.sb-veil,.sb-notes,.sb-rail,.sb-loader{display:none}.sb-origin{position:relative}.sb-stage{background:var(--roast);position:relative}.sb-copy .hero{background:0 0}.sb-bg{z-index:0;height:100svh;position:absolute;top:0;left:0;right:0;overflow:hidden}.sb-bg__hills,.sb-bg__studio,.sb-bg__paper{display:none}.sb-copy,.sb-cats{z-index:1;position:relative}.sb-bg__layer{object-fit:cover;object-position:58% 50%;width:100%;height:120%;position:absolute;inset:-10% 0}@media (width<=700px){.sb-bg__layer{object-position:70% 50%}}.sb-on .sb-canvas,.sb-on .sb-veil,.sb-on .sb-notes,.sb-on .sb-rail,.sb-on .sb-bg__hills,.sb-on .sb-bg__studio,.sb-on .sb-bg__paper{display:block}.sb-on{scroll-behavior:auto}.sb-on .sb-origin{height:var(--sb-track)}.sb-on .sb-stage{background:var(--roast);isolation:isolate;height:100dvh;position:sticky;top:0;overflow:hidden}.sb-on .sb-bg{height:auto;inset:0}.sb-on .sb-bg__layer{will-change:transform,opacity,filter;width:108%;height:116%;inset:-8% -4%}.sb-on .sb-bg__hills{opacity:0;object-position:50% 46%}.sb-bg #hero-bg,.sb-on .sb-bg #hero-bg{object-fit:cover;object-position:50% 50%;transform-origin:0 0;width:100%;height:100%;inset:0}.sb-bg__studio{opacity:0;will-change:opacity;background:radial-gradient(74% 58% at 50% 42%,#241811 0%,#150e09 58%,#090604 100%);position:absolute;inset:0}.sb-bg__paper{opacity:0;will-change:opacity;background:radial-gradient(80% 62% at 50% 40%,#1a130d 0%,#0e0a07 58%,#070504 100%);position:absolute;inset:0}.sb-on .sb-canvas{z-index:1;touch-action:pan-y;width:100%;height:100%;display:block;position:absolute;inset:0}.sb-on .sb-veil{z-index:2;pointer-events:none;will-change:opacity;background:linear-gradient(#120b0794 0%,#120b070f 26%,#120b0700 55%),radial-gradient(118% 92% at 50% 46%,#120b0700 44%,#120b079e 100%);position:absolute;inset:0}.sb-on .sb-copy{z-index:3;pointer-events:none;position:absolute;inset:0}.sb-on .sb-copy a,.sb-on .sb-copy button{pointer-events:auto}.sb-on .sb-copy .hero{will-change:opacity,transform;background:0 0;height:100%;min-height:0;position:absolute;inset:0;overflow:visible}.sb-on .sb-copy .hero:after{display:none}.sb-copy .hero,.sb-on .sb-copy .hero{background:linear-gradient(90deg,#050c089e,#050c081f 65%,#0000);align-items:flex-end}.sb-copy .hero__in{padding-top:140px;padding-bottom:clamp(40px,8vh,90px)}.sb-copy .hero .data{color:#ffffffb8;letter-spacing:.2em;margin-bottom:22px;font-size:10px}.sb-copy .hero h1{font-family:var(--text);letter-spacing:-.055em;max-width:23ch;text-shadow:none;color:#fff;font-variation-settings:normal;font-size:clamp(42px,5.5vw,78px);font-weight:400;line-height:1.04}.sb-copy .hero__sub{color:#ffffffc7;max-width:34ch;margin-top:24px;font-size:15px;line-height:1.65}.sb-copy .hero__acts{align-items:center;gap:28px;margin-top:30px}.sb-copy .hero__acts .btn{letter-spacing:.01em;text-transform:none;color:#17221b;background:#f5f3ed;border:1px solid #f5f3ed;border-radius:2px;gap:24px;width:auto;min-height:48px;padding:14px 20px;font-size:12px}.sb-copy .hero__acts .btn:hover{background:#fff;border-color:#fff}.hero__sample{color:#fff;border-bottom:1px solid #ffffff73;align-items:center;min-height:44px;padding:8px 0;font-size:12px;text-decoration:none;display:inline-flex}.hero__sample:hover{border-color:#fff}.sb-copy .hero a:focus-visible{outline-offset:6px;outline:2px solid #fff}.masthead .burger{min-width:44px;min-height:44px}.hero__journey{letter-spacing:.07em;color:#ffffff9e;align-items:center;gap:12px;margin:48px 0 0;font-size:10px;display:flex}.hero__journey span{font-size:18px}.masthead .crest b{font-family:var(--text);letter-spacing:.18em;font-size:14px;font-weight:500}.masthead .crest i{letter-spacing:.14em;font-size:8px}@media (width<=600px){.sb-copy .hero__in{padding-top:110px;padding-bottom:36px}.sb-copy .hero h1{font-size:clamp(39px,10vw,56px)}.sb-copy .hero__sub{max-width:30ch;margin-top:18px;font-size:13px}.sb-copy .hero__acts{gap:20px;margin-top:24px}.sb-copy .hero__acts .btn{gap:12px;padding:12px 14px}.hero__journey{margin-top:30px}}.sb-notes{z-index:3;padding-inline:var(--gutter);pointer-events:none;position:absolute;bottom:clamp(6rem,15vh,10rem);left:0;right:0}.sb-note{left:var(--gutter);opacity:0;will-change:opacity,transform;width:min(42ch,72vw);margin:0;position:absolute;bottom:0;transform:translateY(16px)}.sb-note__h{font-family:var(--display);letter-spacing:-.018em;color:#f2e7d6;text-shadow:0 2px 34px #0c0704b8;font-size:clamp(1.5rem,3.1vw,2.5rem);font-style:italic;font-weight:400;line-height:1.1}.sb-note__p{color:#cdbca6;text-shadow:0 1px 22px #0c0704b3;max-width:40ch;margin-top:.85rem;font-size:clamp(.88rem,1.06vw,1rem);line-height:1.62}.sb-note__sub{letter-spacing:.055em;color:#9e8c77;max-width:40ch;margin-top:.7rem;font-size:.74rem;line-height:1.55}@media (width<=767px){.sb-notes{bottom:clamp(7rem,20vh,11rem)}.sb-note{width:min(34ch,86vw)}.sb-note__sub{display:none}}.sb-rail{left:var(--gutter);right:var(--gutter);z-index:3;pointer-events:none;opacity:0;will-change:opacity;position:absolute;bottom:clamp(2rem,5vh,3.2rem)}.sb-rail ol{grid-template-columns:repeat(7,1fr);align-items:center;margin:0;padding:0;list-style:none;display:grid}.sb-rail__step{padding-top:1.1rem;position:relative}.sb-rail__step:before{content:"";background:#eee0cb29;height:1px;position:absolute;top:0;left:0;right:0}.sb-rail__step i{background:var(--gold);width:0%;height:1px;transition:width .25s linear;display:block;position:absolute;top:0;left:0}.sb-rail__step span{letter-spacing:.2em;text-transform:uppercase;color:#8a7862;transition:color .5s var(--ease);font-size:.58rem;display:block}.sb-rail__step.is-now span{color:#eadcc6}.sb-rail__step.is-done span{color:#a8957e}@media (width<=767px){.sb-rail ol{grid-template-columns:repeat(7,1fr)}.sb-rail__step span{letter-spacing:.09em;font-size:.46rem}}.sb-on .sb-cats{z-index:4;opacity:0;pointer-events:none;will-change:opacity;align-items:center;padding-block:0;display:flex;position:absolute;inset:0}.sb-on .sb-cats .wrap{width:100%}.sb-on .sb-cats__head{opacity:0;will-change:opacity,transform;margin-bottom:clamp(1rem,2.6vh,2.1rem);transform:translateY(18px)}.sb-on .sb-cats__head h2,.sb-on .sb-cats__head .data{transition:color .7s var(--ease)}.sb-on .sb-card__img{background:0 0}.sb-on .sb-card__img img{opacity:0;will-change:opacity}.sb-on .sb-card__body{opacity:0;will-change:opacity,transform;transform:translateY(16px)}.sb-on .sb-card__scrim{opacity:0}.sb-on .sb-card:after{border-color:#0000}.sb-on .sb-card__img img{aspect-ratio:4/5;max-height:58svh}.sb-on .sb-card p{display:none}@media (width<=860px){.sb-on .sb-cats{align-items:flex-end;padding-bottom:clamp(3.5rem,11vh,6rem)}.sb-on .sb-cats__row{grid-template-columns:1fr;gap:.55rem}.sb-on .sb-card{background:#100b0857;grid-template-columns:4.9rem 1fr;align-items:center;gap:1rem;padding:.5rem .9rem .5rem .5rem;display:grid;overflow:visible}.sb-on .sb-card__img{width:4.9rem}.sb-on .sb-card__img img{aspect-ratio:4/5;max-height:none}.sb-on .sb-card__scrim{display:none}.sb-on .sb-card__body{padding:0;position:static}.sb-on .sb-card h3{font-size:1.22rem}.sb-on .sb-card__spec{letter-spacing:.15em;margin-bottom:.35rem;font-size:.54rem}.sb-on .sb-card__cta{background-size:100% 1px;margin-top:.45rem;font-size:.74rem}.sb-on .sb-cats__head{margin-bottom:1.1rem}.sb-on .sb-cats__head h2{font-size:clamp(1.7rem,7vw,2.3rem)}.sb-on .sb-cats .sb-card{background:#16110c}}.range{background:var(--paper)}.range[hidden]{display:none}.range__hero{color:var(--paper);background:#0b0806;align-items:flex-end;min-height:clamp(24rem,64vh,44rem);display:flex;position:relative;overflow:hidden}.range__art{object-fit:cover;object-position:50% 44%;opacity:.7;width:100%;height:100%;position:absolute;inset:0}.range__hero:after{content:"";pointer-events:none;background:linear-gradient(90deg,#090604f0 0%,#0906049e 46%,#0906041a 100%), linear-gradient(0deg,var(--paper) 0%,#0906048c 14%,#09060400 64%);position:absolute;inset:0}.range__heroin{z-index:2;width:100%;padding-block:clamp(3rem,7vh,5rem) clamp(2.2rem,5vh,3.4rem);position:relative}.range__heroin .data{color:var(--gold)}.range__heroin h2{color:#f6eee1;margin-top:.6rem}.range__heroin .lead{color:#d5c4ae;max-width:52ch;margin-top:1.1rem}.range__back{color:#c9b8a2;background:0 0;width:max-content;margin-bottom:clamp(1.4rem,4vh,2.6rem);padding:0;display:flex}.range__back:hover{color:var(--paper)}.range__body{padding-block:clamp(2.4rem,5vw,4rem) clamp(4rem,8vw,7rem)}.range__nav{border-bottom:1px solid var(--line);flex-wrap:wrap;align-items:center;gap:.55rem;padding-bottom:clamp(1.8rem,4vw,3rem);display:flex}.range__nav .chip[aria-current=true]{background:var(--ink);border-color:var(--ink);color:var(--paper)}.range__shead{margin-top:clamp(2rem,4vw,3rem)}.range__shead h3{font-size:var(--t-h3);margin-top:.5rem}.range .filters{margin-top:1.6rem}.range .species{margin-top:0}.range__custom{background:var(--paper-2);border:1px solid var(--line);flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.5rem 2.5rem;margin-top:clamp(3rem,6vw,5rem);padding:clamp(1.6rem,3vw,2.4rem);display:flex}.range__custom h3{margin-top:.5rem;font-size:1.5rem}.range__custom p{color:var(--muted);max-width:46ch;margin-top:.5rem;font-size:.88rem}.range__customacts{flex-wrap:wrap;gap:.6rem;display:flex}@media (width<=700px){.range__custom{flex-direction:column;align-items:flex-start}}.sb-on .sb-loader{z-index:9;transition:opacity .9s var(--ease), visibility .9s;background:#120c08;place-content:center;justify-items:center;gap:1.6rem;display:grid;position:absolute;inset:0}.sb-loader.is-done{opacity:0;visibility:hidden}.sb-loader__mark{font-family:var(--display);letter-spacing:.34em;color:#e6d8c4;text-indent:.34em;font-size:1.05rem;font-weight:500}.sb-loader__bean{width:26px;height:34px;animation:sb-bean 2.6s var(--ease) infinite;background:linear-gradient(150deg,#6b4a2f,#33200f);border-radius:50%/60% 60% 40% 40%;position:relative;box-shadow:inset 0 0 0 1px #d6be962e}.sb-loader__bean:after{content:"";background:#1a1009;border-radius:50%;position:absolute;inset:14% 46%;transform:rotate(6deg)scaleX(1.25)}@keyframes sb-bean{0%,to{transform:rotate(-8deg)translateY(0)}50%{transform:rotate(8deg)translateY(-7px)}}.sb-loader__bar{background:#e6d8c429;width:180px;height:1px;overflow:hidden}.sb-loader__bar i{background:var(--gold);width:0%;height:100%;transition:width .4s linear;display:block}.sb-on .masthead{background:linear-gradient(#120b076b,#120b0700)}.sb-on .masthead.stuck:not(.on-dark){background:#f4ede1eb}@media (prefers-reduced-motion:reduce){.sb-on .sb-canvas,.sb-on .sb-bg,.sb-on .sb-veil,.sb-on .sb-notes,.sb-on .sb-rail{display:none}.sb-on .sb-origin{height:auto}.sb-on .sb-stage{background:0 0;height:auto;position:static;overflow:visible}.sb-on .sb-copy{position:static}.sb-on .sb-copy .hero{min-height:100svh;position:relative}.sb-on .sb-cats{opacity:1;pointer-events:auto;padding-block:clamp(4rem,8vw,7.5rem);position:static}.sb-on .sb-cats__head{opacity:1;transform:none}.sb-on .sb-cats__head h2{color:var(--ink)}.sb-on .sb-card__img{background:#100b08}.sb-on .sb-card__img img{opacity:1;max-height:none}.sb-on .sb-card__body{opacity:1;transform:none}.sb-on .sb-card__scrim{opacity:1}.sb-on .sb-card p{display:block}.sb-on .sb-loader{display:none}}.sb-on .sb-stage{background:#f5f4f0}.sb-bg__studio,.sb-bg__paper{background:radial-gradient(at 62% 38%,#fdfcf9 0%,#f5f4f0 65%,#eeede8 100%)}.sb-process-film{z-index:2;pointer-events:none;opacity:0;contain:layout paint;position:absolute;inset:0;overflow:hidden}.sb-process-object,.sb-coffee-fragment{opacity:0;transform-origin:50%;pointer-events:none;will-change:transform,opacity;max-width:none;display:block;position:absolute;top:0;left:0}.sb-process-object{object-fit:contain}.sb-coffee-fragment{background-repeat:no-repeat}.sb-on.sb-film-light .sb-note__h{color:#202722;text-shadow:none}.sb-on.sb-film-light .sb-note__p{color:#565c55;text-shadow:none}.sb-on.sb-film-light .sb-note__sub{color:#62695f}.sb-on.sb-film-light .sb-rail__step:before{background:#28372b2b}.sb-on.sb-film-light .sb-rail__step i{background:#536747}.sb-on.sb-film-light .sb-rail__step span{color:#6c7269}.sb-on.sb-film-light .sb-rail__step.is-now span{color:#1b3225}.sb-on.sb-film-light .sb-rail__step.is-done span{color:#4b604d}.sb-on.sb-film-light .masthead:not(.stuck){background:linear-gradient(#f5f4f0f5,#f5f4f000)}.sb-on.sb-film-light .masthead:not(.stuck) .crest,.sb-on.sb-film-light .masthead:not(.stuck) .mainnav,.sb-on.sb-film-light .masthead:not(.stuck) .burger{color:#243027}.sb-on.sb-film-light .masthead:not(.stuck) .crest img{filter:none}.sb-on.sb-film-light .masthead:not(.stuck) .btn{color:#f5f4f0;background:#243027;border-color:#243027}.sb-on .sb-cats{background:#f5f4f0}.sb-on .sb-cats__head h2{color:#202722}.sb-on .sb-cats__head .data{color:#52634b}@media (width>=768px){.sb-on .sb-notes{bottom:23vh}.sb-on .sb-note{width:min(32ch,33vw)}.sb-on .sb-note__h{font-size:clamp(1.7rem,2.7vw,2.7rem)}.sb-on .sb-note__p{font-size:clamp(.88rem,1vw,1rem)}}@media (width<=767px){.sb-on .sb-notes{bottom:17vh}.sb-on .sb-note__h{font-size:clamp(1.45rem,6.3vw,1.9rem)}.sb-on .sb-note__p{margin-top:.7rem;font-size:.86rem;line-height:1.55}.sb-on .sb-cats .sb-card{background:#eeede7}.sb-on .sb-cats .sb-card h3{color:#202722}.sb-on .sb-cats .sb-card__spec{color:#52634b}.sb-on .sb-cats .sb-card__cta{color:#243027}}@media (prefers-reduced-motion:reduce){.sb-process-film{display:none}}.sb-journey-video,.sb-process-panel-video{z-index:2;aspect-ratio:3/4;object-fit:contain;pointer-events:none;opacity:0;-webkit-mask-composite:source-in;width:auto;max-width:none;height:102%;position:absolute;top:45%;left:66.5%;transform:translate(-50%,-50%);-webkit-mask-image:linear-gradient(90deg,#0000,#000 14% 86%,#0000),linear-gradient(#0000,#000 12% 88%,#0000);mask-image:linear-gradient(90deg,#0000,#000 14% 86%,#0000),linear-gradient(#0000,#000 12% 88%,#0000);-webkit-mask-composite:source-in;mask-composite:intersect}@media (width<=767px){.sb-journey-video,.sb-process-panel-video{max-width:125vw;height:78%;top:36%;left:50%}}@media (prefers-reduced-motion:reduce){.sb-journey-video,.sb-process-panel-video{display:none}}.sb-process-horizontal{z-index:3;opacity:0;visibility:hidden;pointer-events:none;contain:layout paint;will-change:transform;background:#f5f4f0;position:absolute;inset:0;overflow:hidden}.sb-process-horizontal__track{will-change:transform;width:300%;height:100%;display:flex}.sb-process-horizontal__panel{flex:0 0 33.3333%;height:100%;position:relative;overflow:hidden}.sb-process-panel-video{opacity:1}.sb-process-horizontal__label{top:15%;left:var(--gutter);letter-spacing:.2em;text-transform:uppercase;color:#616b60;font-size:.65rem;position:absolute}.sb-panel-note{left:var(--gutter);opacity:0;width:min(32ch,33vw);margin:0;position:absolute;bottom:0}.sb-horizontal-active #sb-notes [data-note="2"],.sb-horizontal-active #sb-notes [data-note="3"],.sb-horizontal-active #sb-notes [data-note="4"]{visibility:hidden}.sb-horizontal-active .sb-rail{z-index:4}@media (width<=767px){.sb-panel-note{width:min(34ch,86vw)}.sb-process-horizontal__label{font-size:.58rem;top:12%}.sb-panel-note .sb-note__sub{font-size:.66rem;display:block}}@media (prefers-reduced-motion:reduce){.sb-process-horizontal{display:none}}@media (width>=768px){.sb-process-horizontal__track{width:100%}.sb-process-horizontal__panel{overflow:hidden}.sb-process-horizontal__panel+.sb-process-horizontal__panel{border-left:1px solid #28372b1a}.sb-process-panel-video{max-width:140%;height:76%;top:40%;left:50%}.sb-process-horizontal__panel[data-method=honey] .sb-process-panel-video{max-width:180%;height:110%}.sb-process-horizontal__label{font-size:.58rem;top:15%;left:8%}.sb-process-horizontal .sb-notes{top:66%;bottom:auto}.sb-panel-note{width:84%;top:0;bottom:auto;left:8%}.sb-panel-note .sb-note__h{font-size:clamp(1.5rem,2.1vw,2rem)}.sb-panel-note .sb-note__p{max-width:34ch;font-size:.86rem}.sb-panel-note .sb-note__sub{letter-spacing:.02em;font-size:.65rem}}.sb-on.sb-horizontal-active .sb-copy{z-index:4}.sb-process-horizontal__label{z-index:3}.sb-hero-match{z-index:2;pointer-events:none;opacity:0;will-change:transform,opacity;max-width:none;position:absolute;top:0;left:0;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}@media (width<=767px){.sb-journey-video{max-width:none;height:min(78%,166.667vw)}}@media (prefers-reduced-motion:reduce){.sb-hero-match{display:none}}.sb-roast-vapour{z-index:2;pointer-events:none;opacity:0;filter:blur(4px);width:100%;height:100%;position:absolute;inset:0;-webkit-mask-image:linear-gradient(#0000 7%,#000 18% 65%,#0000 85%);mask-image:linear-gradient(#0000 7%,#000 18% 65%,#0000 85%)}.sb-roast-vapour path{fill:none;stroke:#625e54;stroke-linecap:round}@media (prefers-reduced-motion:reduce){.sb-roast-vapour{display:none}}.sb-cats,.sb-on .sb-cats{color:#242b25;background:#f5f4f0}.sb-cats .wrap{max-width:1440px}.sb-cats__head .data,.sb-on .sb-cats__head .data{color:#62695e;letter-spacing:.2em;margin-bottom:1.1rem;font-size:.63rem;display:block}.sb-cats__intro{justify-content:space-between;align-items:flex-end;gap:2rem;display:flex}.sb-cats__head h2,.sb-on .sb-cats__head h2{letter-spacing:-.035em;color:#242b25;max-width:none;margin:0;font-size:clamp(2rem,3.4vw,3.35rem);line-height:1.08}.sb-cats__intro>p{color:#62665e;padding-bottom:.2rem;font-size:.82rem;line-height:1.75}.sb-cats__row,.sb-on .sb-cats__row{grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(1rem,2.8vw,2.6rem)}.sb-cats .sb-card,.sb-on .sb-cats .sb-card{color:#242b25;filter:none;opacity:1;background:0 0;border-radius:0;padding:0;display:block;overflow:visible;transform:none}.sb-cats .sb-card:after{display:none}.sb-cats .sb-card__img,.sb-on .sb-cats .sb-card__img{background:0 0;width:100%;display:block;overflow:hidden}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{aspect-ratio:4/3;object-fit:cover;object-position:50% 63%;filter:none;width:100%;height:auto;max-height:36svh;transition:transform .8s var(--ease);transform:none}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{border-bottom:1px solid #d4d6cd;padding:1.25rem 0 1.15rem;display:block;position:relative;bottom:auto;left:auto;right:auto}.sb-cats .sb-card__spec,.sb-on .sb-cats .sb-card__spec{letter-spacing:.13em;color:#646d60;margin:0 0 .65rem;font-size:.59rem}.sb-cats .sb-card h3,.sb-on .sb-cats .sb-card h3{letter-spacing:-.025em;color:#242b25;font-size:clamp(1.4rem,2.15vw,2rem);line-height:1.1}.sb-cats .sb-card p,.sb-on .sb-cats .sb-card p{opacity:1;color:#63675f;max-width:none;max-height:none;margin:.65rem 0 0;font-size:.78rem;line-height:1.6;display:block;overflow:visible}.sb-cats .sb-card__cta,.sb-on .sb-cats .sb-card__cta{color:#303c30;letter-spacing:.015em;background:0 0;justify-content:space-between;align-items:center;gap:1rem;margin-top:1.15rem;padding:0;font-size:.7rem;display:flex}.sb-cats .sb-card__cta .icon{width:16px;height:16px;transition:transform .3s var(--ease)}@media (hover:hover){.sb-cats__row:hover .sb-card{opacity:1}.sb-cats .sb-card:hover .sb-card__img img{transform:scale(1.025)}.sb-cats .sb-card:hover .sb-card__cta .icon{transform:translate(2px,-2px)}.sb-cats .sb-card:hover .sb-card__body{border-bottom-color:#788371}}.sb-cats .sb-card:focus-visible{outline-offset:7px;outline:2px solid #52634b}@media (width>=768px) and (height<=700px){.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:1.15rem}.sb-cats__head .data,.sb-on .sb-cats__head .data{margin-bottom:.65rem}.sb-cats__head h2,.sb-on .sb-cats__head h2{font-size:2rem}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{max-height:29svh}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{padding:.8rem 0}.sb-cats .sb-card__cta,.sb-on .sb-cats .sb-card__cta{margin-top:.7rem}}@media (width<=767px){.sb-on .sb-cats{align-items:center;padding:4.5rem 0 1rem}.sb-cats__intro{display:block}.sb-cats__intro>p{display:none}.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:1.4rem}.sb-cats__head .data,.sb-on .sb-cats__head .data{margin-bottom:.8rem;font-size:.58rem}.sb-cats__head h2,.sb-on .sb-cats__head h2{font-size:clamp(1.65rem,6.5vw,2.5rem);line-height:1.12}.sb-cats__row,.sb-on .sb-cats__row{grid-template-columns:1fr;gap:0}.sb-cats .sb-card,.sb-on .sb-cats .sb-card{background:0 0;border-top:1px solid #d4d6cd;grid-template-columns:clamp(86px,27vw,112px) minmax(0,1fr);align-items:center;gap:1rem;padding:1rem 0;display:grid}.sb-cats .sb-card:last-child{border-bottom:1px solid #d4d6cd}.sb-cats .sb-card__img,.sb-on .sb-cats .sb-card__img{width:100%}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{aspect-ratio:1;object-position:50% 62%;max-height:none}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{border:0;padding:0}.sb-cats .sb-card__spec,.sb-on .sb-cats .sb-card__spec{letter-spacing:.08em;margin-bottom:.45rem;font-size:.52rem}.sb-cats .sb-card h3,.sb-on .sb-cats .sb-card h3{font-size:1.42rem}.sb-cats .sb-card p,.sb-on .sb-cats .sb-card p{max-width:24ch;margin-top:.45rem;font-size:.7rem;line-height:1.5}.sb-cats .sb-card__cta,.sb-on .sb-cats .sb-card__cta{margin-top:.65rem;font-size:.65rem}}@media (width<=767px) and (height<=700px){.sb-on .sb-cats{padding-top:4rem}.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:1rem}.sb-cats .sb-card,.sb-on .sb-cats .sb-card{grid-template-columns:78px minmax(0,1fr);padding:.65rem 0}.sb-cats .sb-card p,.sb-on .sb-cats .sb-card p{display:none}}@media (prefers-reduced-motion:reduce){.sb-cats .sb-card__img img{transition:none;transform:none!important}.sb-on .sb-cats{padding-block:4rem}}@media (width>=768px) and (height<=500px){.sb-on .sb-cats{padding-top:3.75rem}.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:.7rem}.sb-cats__head .data,.sb-on .sb-cats__head .data{margin-bottom:.4rem;font-size:.5rem}.sb-cats__head h2,.sb-on .sb-cats__head h2{font-size:1.45rem}.sb-cats__head h2 br,.sb-cats__intro>p{display:none}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{max-height:27svh}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{padding:.6rem 0}.sb-cats .sb-card p,.sb-on .sb-cats .sb-card p{display:none}.sb-cats .sb-card h3,.sb-on .sb-cats .sb-card h3{font-size:1.3rem}.sb-cats .sb-card__spec,.sb-on .sb-cats .sb-card__spec{margin-bottom:.35rem}.sb-cats .sb-card__cta,.sb-on .sb-cats .sb-card__cta{margin-top:.45rem}}@media (width<=767px){.sb-process-panel-video{max-width:none;height:min(78%,166.667vw)}}.sb-cats{padding-block:3rem}.sb-on .sb-cats{align-items:flex-start;padding-top:clamp(5.75rem,11vh,7rem);padding-bottom:1.5rem}.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:1.35rem}.sb-cats__head .data,.sb-on .sb-cats__head .data{margin-bottom:.7rem}.sb-cats__head h2,.sb-on .sb-cats__head h2{font-size:clamp(1.6rem,2.8vw,2.6rem)}.sb-cats__intro>p{display:none}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{aspect-ratio:16/10;max-height:26svh}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{padding-top:1rem;padding-bottom:1rem}.sb-on .sb-origin{margin-bottom:calc(-1 * var(--sb-collection-trim,0px))}.sb-on .sb-origin~.strip,.sb-on .sb-origin~.range{z-index:5;position:relative}@media (width<=767px){.sb-on .sb-cats{padding-top:5.75rem}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{aspect-ratio:1;max-height:none}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{padding:0}.sb-cats .sb-card,.sb-on .sb-cats .sb-card{padding:.75rem 0}}@media (height<=500px){.sb-on .sb-cats{padding-top:4.75rem}.sb-cats__head,.sb-on .sb-cats__head{margin-bottom:.65rem}.sb-cats__head h2,.sb-on .sb-cats__head h2{font-size:1.4rem}.sb-cats .sb-card__body,.sb-on .sb-cats .sb-card__body{padding-block:.6rem}}@media (prefers-reduced-motion:reduce){.sb-on .sb-origin{margin-bottom:0}.sb-on .sb-cats{padding-block:3rem}}.sb-on .sb-origin~*{z-index:5;position:relative}.sb-cats .sb-card__img img,.sb-on .sb-cats .sb-card__img img{object-position:50% 48%}.sb-process-horizontal__panel{isolation:isolate}.sb-on #how{isolation:isolate;background:var(--paper)}.sb-on #how:before{content:"";background:var(--paper);z-index:-1;pointer-events:none;position:absolute;inset:0 calc(50% - 50vw)}@media (pointer:coarse){.sb-on .sb-stage{height:var(--sb-viewport,100svh)}}.sb-on .sb-bg__layer{will-change:transform,opacity}.sb-process-object,.sb-coffee-fragment{will-change:auto}@media (width<=767px){.sb-rail__step span{letter-spacing:.04em;font-size:clamp(.4125rem,1.9vw,.5rem)}}html.lenis,html.lenis body{height:auto}.lenis:not(.lenis-autoToggle).lenis-stopped{overflow:clip}.lenis [data-lenis-prevent],.lenis [data-lenis-prevent-wheel],.lenis [data-lenis-prevent-touch],.lenis [data-lenis-prevent-vertical],.lenis [data-lenis-prevent-horizontal]{overscroll-behavior:contain}.lenis.lenis-smooth iframe{pointer-events:none}.lenis.lenis-autoToggle{transition-behavior:allow-discrete;transition-property:overflow;transition-duration:1ms}html{scroll-padding-top:84px}html.sb-scroll-locked{overflow:hidden}.sb-gsap-reveals [data-reveal]{transition:none}.sb-gsap-reveals [data-reveal=zoom] img{transition:transform .6s var(--ease)}#dossier,.dossier__body,#drawer{overscroll-behavior:contain}.sb-card:focus-visible{outline:2px solid var(--gold);outline-offset:4px}@media (prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important}[data-reveal]{opacity:1!important;clip-path:none!important;transform:none!important}}
/*$vite$:1*/`,document.head.appendChild(e);var t=Object.defineProperty,n=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},r=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r};function i(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,ee,te,I,ne,re,L,R,z,ie,ae,oe,B,V,se,H,ce,le,ue,de,fe,pe,me,U,he,W,ge,G,_e,K,q,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn=n((()=>{o={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},s={duration:.5,overwrite:!1,delay:0},d=1e8,f=1/d,p=Math.PI*2,m=p/4,h=0,g=Math.sqrt,_=Math.cos,v=Math.sin,y=function(e){return typeof e==`string`},b=function(e){return typeof e==`function`},x=function(e){return typeof e==`number`},S=function(e){return e===void 0},C=function(e){return typeof e==`object`},w=function(e){return e!==!1},T=function(){return typeof window<`u`},E=function(e){return b(e)||y(e)},D=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},O=Array.isArray,k=/random\([^)]+\)/g,A=/,\s*/g,j=/(?:-?\.?\d|\.)+/gi,M=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,N=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,P=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,F=/[+-]=-?[.\d]+/,ee=/[^,'"\[\]\s]+/gi,te=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,R={},z={},ae=function(e){return(z=ke(e,R))&&Yn},oe=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},B=function(e,t){return!t&&console.warn(e)},V=function(e,t){return e&&(R[e]=t)&&z&&(z[e]=t)||R},se=function(){return 0},H={suppressEvents:!0,isStart:!0,kill:!1},ce={suppressEvents:!0,kill:!1},le={suppressEvents:!0},ue={},de=[],fe={},me={},U={},he=30,W=[],ge=``,G=function(e){var t=e[0],n,r;if(C(t)||b(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=W.length;r--&&!W[r].targetTest(t););n=W[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new an(e[r],n)))||e.splice(r,1);return e},_e=function(e){return e._gsap||G(ft(e))[0]._gsap},K=function(e,t,n){return(n=e[t])&&b(n)?e[t]():S(n)&&e.getAttribute&&e.getAttribute(t)||n},q=function(e,t){return(e=e.split(`,`)).forEach(t)||e},ve=function(e){return Math.round(e*1e5)/1e5||0},ye=function(e){return Math.round(e*1e7)/1e7||0},be=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},xe=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Se=function(){var e=de.length,t=de.slice(0),n,r;for(fe={},de.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ce=function(e){return!!(e._initted||e._startAt||e.add)},we=function(e,t,n,r){de.length&&!l&&Se(),e.render(t,n,r||!!(l&&t<0&&Ce(e))),de.length&&!l&&Se()},Te=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(ee).length<2?t:y(e)?e.trim():e},Ee=function(e){return e},De=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oe=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},ke=function(e,t){for(var n in t)e[n]=t[n];return e},Ae=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=C(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},je=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Me=function(e){var t=e.parent||I,n=e.keyframes?Oe(O(e.keyframes)):De;if(w(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ne=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Pe=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Fe=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Ie=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Le=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Re=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ze=function(e,t,n,r){return e._startAt&&(l?e._startAt.revert(ce):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Be=function e(t){return!t||t._ts&&e(t.parent)},Ve=function(e){return e._repeat?He(e._tTime,e=e.duration()+e._rDelay)*e:0},He=function(e,t){var n=Math.floor(e=ye(e/t));return e&&n===e?n-1:n},Ue=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},We=function(e){return e._end=ye(e._start+(e._tDur/Math.abs(e._ts||e._rts||f)||0))},Ge=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ye(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),We(e),n._dirty||Le(n,e)),e},Ke=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ue(e.rawTime(),t),(!t._dur||ot(0,t.totalDuration(),n)-t._tTime>f)&&t.render(n,!0)),Le(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-f}},qe=function(e,t,n,r){return t.parent&&Ie(t),t._start=ye((x(n)?n:n||e!==I?rt(e,n,t):e._time)+t._delay),t._end=ye(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pe(e,t,`_first`,`_last`,e._sort?`_start`:0),Ze(t)||(e._recent=t),r||Ke(e,t),e._ts<0&&Ge(e,e._tTime),e},Je=function(e,t){return(R.ScrollTrigger||oe(`scrollTrigger`,t))&&R.ScrollTrigger.create(t,e)},Ye=function(e,t,n,r,i){if(mn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!l&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pe!==Wt.frame)return de.push(e),e._lazy=[i,r],1},Xe=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Ze=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Qe=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Xe(e)&&(e._initted||!Ze(e))||(e._ts<0||e._dp._ts<0)&&!Ze(e))?0:1,o=e._rDelay,s=0,c,u,d;if(o&&e._repeat&&(s=ot(0,e._tDur,t),u=He(s,o),e._yoyo&&u&1&&(a=1-a),u!==He(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||l||r||e._zTime===f||!t&&e._zTime){if(!e._initted&&Ye(e,t,r,n,s))return;for(d=e._zTime,e._zTime=t||(n?f:0),n||=t&&!d,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ze(e,t,n,!0),e._onUpdate&&!n&&kt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&kt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ie(e,1),!n&&!l&&(kt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},$e=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},et=function(e,t,n,r){var i=e._repeat,a=ye(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:ye(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Ge(e,e._tTime=e._tDur*o),e.parent&&We(e),n||Le(e.parent,e),e},tt=function(e){return e instanceof sn?Le(e):et(e,e._dur)},nt={_start:0,endTime:se,totalDuration:se},rt=function e(t,n,r){var i=t.labels,a=t._recent||nt,o=t.duration()>=d?a.endTime(!1):t._dur,s,c,l;return y(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(O(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},it=function(e,t,n){var r=x(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=w(s.vars.inherit)&&s.parent;a.immediateRender=w(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new xn(t[0],a,t[i+1])},at=function(e,t){return e||e===0?t(e):t},ot=function(e,t,n){return n<e?e:n>t?t:n},st=function(e,t){return!y(e)||!(t=te.exec(e))?``:t[1]},ct=function(e,t,n){return at(n,function(n){return ot(e,t,n)})},lt=[].slice,ut=function(e,t){return e&&C(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&C(e[0]))&&!e.nodeType&&e!==ne},dt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return y(e)&&!t||ut(e,1)?(r=n).push.apply(r,ft(e)):n.push(e)})||n},ft=function(e,t,n){return u&&!t&&u.selector?u.selector(e):y(e)&&!n&&(re||!Gt())?lt.call((t||L).querySelectorAll(e),0):O(e)?dt(e,n):ut(e)?lt.call(e,0):e?[e]:[]},pt=function(e){return e=ft(e)[0]||B(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return ft(t,n.querySelectorAll?n:n===e?B(`Invalid scope`)||L.createElement(`div`):e)}},mt=function(e){return e.sort(function(){return .5-Math.random()})},ht=function(e){if(b(e))return e;var t=C(e)?e:{each:e},n=$t(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return y(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,f){var p=(f||t).length,m=a[p],h,_,v,y,b,x,S,C,w;if(!m){if(w=t.grid===`auto`?0:(t.grid||[1,d])[1],!w){for(S=-d;S<(S=f[w++].getBoundingClientRect().left)&&w<p;);w<p&&w--}for(m=a[p]=[],h=s?Math.min(w,p)*l-.5:r%w,_=w===d?0:s?p*u/w-.5:r/w|0,S=0,C=d,x=0;x<p;x++)v=x%w-h,y=_-(x/w|0),m[x]=b=c?Math.abs(c===`y`?y:v):g(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&mt(m),m.max=S-C,m.min=C,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c===`y`?p/w:w:Math.max(w,p/w))||0)*(r===`edges`?-1:1),m.b=p<0?i-p:i,m.u=st(t.amount||t.each)||0,n=n&&p<0?Qt(n):n}return p=(m[e]-m.min)/m.max||0,ye(m.b+(n?n(p):p)*m.v)+m.u}},gt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=ye(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(x(n)?0:st(n))}},_t=function(e,t){var n=O(e),r,i;return!n&&C(e)&&(r=n=e.radius||d,e.values?(e=ft(e.values),(i=!x(e[0]))&&(r*=r)):e=gt(e.increment)),at(t,n?b(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=d,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||x(t)?s:s+st(t)}:gt(e))},vt=function(e,t,n,r){return at(O(e)?!t:n===!0?!!(n=0):!r,function(){return O(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},yt=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},bt=function(e,t){return function(n){return e(parseFloat(n))+(t||st(n))}},xt=function(e,t,n){return Et(e,t,0,1,n)},St=function(e,t,n){return at(n,function(n){return e[~~t(n)]})},Ct=function e(t,n,r){var i=n-t;return O(t)?St(t,e(0,t.length),n):at(r,function(e){return(i+(e-t)%i)%i+t})},wt=function e(t,n,r){var i=n-t,a=i*2;return O(t)?St(t,e(0,t.length-1),n):at(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Tt=function(e){return e.replace(k,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(A);return vt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Et=function(e,t,n,r,i){var a=t-e,o=r-n;return at(i,function(t){return n+((t-e)/a*o||0)})},Dt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=y(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(O(t)&&!O(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=ke(O(t)?[]:{},t));if(!u){for(c in n)ln.call(s,t,c,`get`,n[c]);a=function(e){return An(e,s)||(o?t.p:t)}}}return at(r,a)},Ot=function(e,t,n){var r=e.labels,i=d,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},kt=function(e,t,n){var r=e.vars,i=r[t],a=u,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&de.length&&Se(),o&&(u=o),l=s?i.apply(c,s):i.call(c),u=a,l},At=function(e){return Ie(e),e.scrollTrigger&&e.scrollTrigger.kill(!!l),e.progress()<1&&kt(e,`onInterrupt`),e},Mt=[],Nt=function(e){if(e){if(e=!e.name&&e.default||e,T()||e.headless){var t=e.name,n=b(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:se,render:An,add:ln,kill:Mn,modifier:jn,rawVars:0},a={targetTest:0,get:0,getSetter:En,aliases:{},register:0};if(Gt(),e!==r){if(me[t])return;De(r,De(je(e,i),a)),ke(r.prototype,ke(i,je(e,a))),me[r.prop=t]=r,e.targetTest&&(W.push(r),ue[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}V(t,r),e.register&&e.register(Yn,r,Fn)}else Mt.push(e)}},Pt=255,Ft={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},It=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Lt=function(e,t,n){var r=e?x(e)?[e>>16,e>>8&Pt,e&Pt]:0:Ft.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Ft[e])r=Ft[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(j),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=It(s+1/3,i,a),r[1]=It(s,i,a),r[2]=It(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(M),n&&r.length<4&&(r[3]=1),r}else r=e.match(j)||Ft.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Pt,a=r[1]/Pt,o=r[2]/Pt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Rt=function(e){var t=[],n=[],r=-1;return e.split(Bt).forEach(function(e){var i=e.match(N)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},zt=function(e,t,n){var r=``,i=(e+r).match(Bt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Lt(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Rt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Bt,`1`).split(N),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Bt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Bt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Ft)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Vt=/hsl[a]?\(/,Ht=function(e){var t=e.join(` `),n;if(Bt.lastIndex=0,Bt.test(t))return n=Vt.test(t),e[1]=zt(e[1],n),e[0]=zt(e[0],n,Rt(e[1])),!0},Wt=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ie&&(!re&&T()&&(ne=re=window,L=ne.document||{},R.gsap=Yn,(ne.gsapVersions||(ne.gsapVersions=[])).push(Yn.version),ae(z||ne.GreenSockGlobals||!ne.gsap&&ne||{}),Mt.forEach(Nt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Ut=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ut=0,l=se},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Gt(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Gt=function(){return!Ut&&Wt.wake()},Kt={},qt=/^[\d.\-M][\d.\-,\s]/,Jt=/["']/g,Yt=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Jt,``).trim():+c,r=s.substr(o+1).trim();return t},Xt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Zt=function(e){var t=(e+``).split(`(`),n=Kt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Yt(t[1])]:Xt(e).split(`,`).map(Te)):Kt._CE&&qt.test(e)?Kt._CE(``,e):n},Qt=function(e){return function(t){return 1-e(1-t)}},$t=function(e,t){return e&&(b(e)?e:Kt[e]||Zt(e))||t},en=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return q(e,function(e){for(var t in Kt[e]=R[e]=i,Kt[a=e.toLowerCase()]=n,i)Kt[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Kt[e+`.`+t]=i[t]}),i},tn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/p*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*v((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:tn(s);return a=p/a,c.config=function(n,r){return e(t,n,r)},c},rn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:tn(r);return i.config=function(n){return e(t,n)},i},q(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;en(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn,en(`Elastic`,nn(`in`),nn(`out`),nn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};en(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),en(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),en(`Circ`,function(e){return-(g(1-e*e)-1)}),en(`Sine`,function(e){return e===1?1:-_(e*m)+1}),en(`Back`,rn(`in`),rn(`out`),rn()),Kt.SteppedEase=Kt.steps=R.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-f;return function(e){return((r*ot(0,a,e)|0)+i)*n}}},s.ease=Kt[`quad.out`],q(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return ge+=e+`,`+e+`Params,`}),an=function(e,t){this.id=h++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:K,this.set=t?t.getSetter:En},on=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,et(this,+e.duration,1,1),this.data=e.data,u&&(this._ctx=u,u.data.push(this)),Ut||Wt.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,et(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Gt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ge(this,e),!n._dp||n.parent||Ke(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&qe(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===f||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),we(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ve(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ve(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?He(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-f?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ue(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-f?0:this._rts,this.totalTime(ot(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),We(this),Re(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==f&&(this._tTime-=f)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=ye(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&qe(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(w(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ue(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=le);var t=l;return l=e,Ce(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),l=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,tt(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,tt(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(rt(this,e),w(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,w(t)),this._dur||(this._zTime=-f),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-f:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-f,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-f)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=b(e)?e:Ee,a=function(){var e=t.then;t.then=null,n&&n(),b(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){At(this)},e}(),De(on.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-f,_prom:0,_ps:!1,_rts:1}),sn=function(e){a(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&qe(t.parent||I,i(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Je(i(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return it(0,arguments,this),this},n.from=function(e,t,n){return it(1,arguments,this),this},n.fromTo=function(e,t,n,r){return it(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Me(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new xn(e,t,rt(this,n),1),this},n.call=function(e,t,n){return qe(this,xn.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new xn(e,n,rt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Me(n).immediateRender=w(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Me(r).immediateRender=w(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:ye(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,u,d,p,m,h,g,_,v,y,b,x;if(this!==I&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,v=this._start,_=this._ts,h=!_,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(c=ye(o%m),o===i?(p=this._repeat,c=a):(y=ye(o/m),p=~~y,p&&p===y&&(c=a,p--),c>a&&(c=a)),y=He(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(c=a-c,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:o%a?a:o,this._lock=1,this.render(r||(x?0:ye(p*m)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&kt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=p),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,C&&(this._lock=2,r=S?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=$e(this,ye(r),ye(c)),g&&(o-=c-(c=g._start))),this._tTime=o,this._time=c,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!y&&(kt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(u=this._first;u;){if(d=u._next,(u._act||c>=u._start)&&u._ts&&g!==u){if(u.parent!==this)return this.render(e,t,n);if(u.render(u._ts>0?(c-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(c-u._start)*u._ts,t,n),c!==this._time||!this._ts&&!h){g=0,d&&(o+=this._zTime=-f);break}}u=d}else{u=this._last;for(var w=e<0?e:c;u;){if(d=u._prev,(u._act||w<=u._end)&&u._ts&&g!==u){if(u.parent!==this)return this.render(e,t,n);if(u.render(u._ts>0?(w-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(w-u._start)*u._ts,t,n||l&&Ce(u)),c!==this._time||!this._ts&&!h){g=0,d&&(o+=this._zTime=w?-f:f);break}}u=d}}if(g&&!t&&(this.pause(),g.render(c>=r?0:-f)._zTime=c>=r?1:-1,this._ts))return this._start=v,We(this),this.render(e,t,n);this._onUpdate&&!t&&kt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(v!==this._start&&Math.abs(_)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Ie(this,1),t||e<0&&!r||!o&&!r&&i||(kt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(x(t)||(t=rt(this,t,e)),!(e instanceof on)){if(O(e))return e.forEach(function(e){return n.add(e,t)}),this;if(y(e))return this.addLabel(e,t);if(b(e))e=xn.delayedCall(0,e);else return this}return this===e?this:qe(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-d);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof xn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return y(e)?this.removeLabel(e):b(e)?this.killTweensOf(e):(e.parent===this&&Fe(this,e),e===this._recent&&(this._recent=this._last),Le(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(Wt.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=rt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=xn.delayedCall(0,t||se,n);return r.data=`isPause`,this._hasPause=1,qe(this,r,rt(this,e))},n.removePause=function(e){var t=this._first;for(e=rt(this,e);t;)t._start===e&&t.data===`isPause`&&Ie(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)fn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=ft(e),i=this._first,a=x(t),o;i;)i instanceof xn?xe(i._targets,r)&&(a?(!fn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=rt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=xn.to(n,De({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||f,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&et(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,De({startAt:{time:rt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Ot(this,rt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Ot(this,rt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+f)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=ye(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Le(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Le(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=d,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,qe(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=ye(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;et(n,n===I&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(I._ts&&(we(I,Ue(e,I)),pe=Wt.frame),Wt.frame>=he){he+=o.autoSleep||120;var t=I._first;if((!t||!t._ts)&&o.autoSleep&&Wt._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Wt.sleep()}}},t}(on),De(sn.prototype,{_lock:0,_hasPause:0,_forcing:0}),cn=function(e,t,n,r,i,a,o){var s=new Fn(this._pt,e,t,0,1,kn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Tt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(P)||[];u=P.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?be(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=P.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(F.test(r)||g)&&(s.e=0),this._pt=s,s},ln=function(e,t,n,r,i,a,s,c,l,u){b(r)&&(r=r(i||0,e,a));var d=e[t],f=n===`get`?b(d)?l?e[t.indexOf(`set`)||!b(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:n,p=b(d)?l?wn:Cn:Sn,m;if(y(r)&&(~r.indexOf(`random(`)&&(r=Tt(r)),r.charAt(1)===`=`&&(m=be(f,r)+(st(f)||0),(m||m===0)&&(r=m))),!u||f!==r||pn)return!isNaN(f*r)&&r!==``?(m=new Fn(this._pt,e,t,+f||0,r-(f||0),typeof d==`boolean`?On:Dn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&oe(t,r),cn.call(this,e,t,f,r,p,c||o.stringFilter,l))},un=function(e,t,n,r,i){if(b(e)&&(e=vn(e,i,t,n,r)),!C(e)||e.style&&e.nodeType||O(e)||D(e))return y(e)?vn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=vn(e[o],i,t,n,r);return a},dn=function(e,t,n,r,i,a){var o,s,c,l;if(me[e]&&(o=new me[e]).init(i,o.rawVars?t[e]:un(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Fn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==jt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},mn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,u=i.immediateRender,p=i.lazy,m=i.onUpdate,h=i.runBackwards,g=i.yoyoEase,_=i.keyframes,v=i.autoRevert,y=t._dur,b=t._startAt,x=t._targets,S=t.parent,C=S&&S.data===`nested`?S.vars.targets:x,T=t._overwrite===`auto`&&!c,E=t.timeline,D=i.easeReverse||g,O,k,A,j,M,N,P,F,ee,te,ne,re,L;if(!E||_&&a||(a=`none`),t._ease=$t(a,s.ease),t._rEase=D&&($t(D)||t._ease),t._from=!E&&!!i.runBackwards,t._from&&(t.ratio=1),!E||_&&!i.stagger){if(F=x[0]?_e(x[0]).harness:0,re=F&&i[F.prop],O=je(i,ue),b&&(b._zTime<0&&b.progress(1),n<0&&h&&u&&!v?b.render(-1,!0):b.revert(h&&y?ce:H),b._lazy=0),o){if(Ie(t._startAt=xn.set(x,De({data:`isStart`,overwrite:!1,parent:S,immediateRender:!0,lazy:!b&&w(p),startAt:null,delay:0,onUpdate:m&&function(){return kt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(l||!u&&!v)&&t._startAt.revert(ce),u&&y&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(h&&y&&!b){if(n&&(u=!1),A=De({overwrite:!1,data:`isFromStart`,lazy:u&&!b&&w(p),immediateRender:u,stagger:0,parent:S},O),re&&(A[F.prop]=re),Ie(t._startAt=xn.set(x,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(l?t._startAt.revert(ce):t._startAt.render(-1,!0)),t._zTime=n,!u)e(t._startAt,f,f);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&w(p)||p&&!y,k=0;k<x.length;k++){if(M=x[k],P=M._gsap||G(x)[k]._gsap,t._ptLookup[k]=te={},fe[P.id]&&de.length&&Se(),ne=C===x?k:C.indexOf(M),F&&(ee=new F).init(M,re||O,t,ne,C)!==!1&&(t._pt=j=new Fn(t._pt,M,ee.name,0,1,ee.render,ee,0,ee.priority),ee._props.forEach(function(e){te[e]=j}),ee.priority&&(N=1)),!F||re)for(A in O)me[A]&&(ee=dn(A,O,t,ne,M,C))?ee.priority&&(N=1):te[A]=j=ln.call(t,M,A,`get`,O[A],ne,C,0,i.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),T&&t._pt&&(fn=t,I.killTweensOf(M,te,t.globalTime(n)),L=!t.parent,fn=0),t._pt&&p&&(fe[P.id]=1)}N&&Pn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!L,_&&n<=0&&E.render(d,!0,!0)},hn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return pn=1,e.vars[t]=`+=0`,mn(e,o),pn=0,s?B(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=ve(n)+st(u.e)),u.b&&(u.b=l.s+st(u.b))},gn=function(e,t){var n=e[0]?_e(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=ke({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},_n=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(O(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},vn=function(e,t,n,r,i){return b(e)?e.call(t,n,r,i):y(e)&&~e.indexOf(`random(`)?Tt(e):e},yn=ge+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,bn={},q(yn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return bn[e]=1}),xn=function(e){a(t,e);function t(t,n,r,a){var s;typeof n==`number`&&(r.duration=n,n=r,r=null),s=e.call(this,a?n:Me(n))||this;var l=s.vars,u=l.duration,d=l.delay,p=l.immediateRender,m=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,v=l.scrollTrigger,y=n.parent||I,b=(O(t)||D(t)?x(t[0]):`length`in n)?[t]:ft(t),S,T,k,A,j,M,N,P;if(s._targets=b.length?G(b):B(`GSAP target `+t+` not found. https://gsap.com`,!o.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,g||m||E(u)||E(d)){n=s.vars;var F=n.easeReverse||n.yoyoEase;if(S=s.timeline=new sn({data:`nested`,defaults:_||{},targets:y&&y.data===`nested`?y.vars.targets:b}),S.kill(),S.parent=S._dp=i(s),S._start=0,m||E(u)||E(d)){if(A=b.length,N=m&&ht(m),C(m))for(j in m)~yn.indexOf(j)&&(P||={},P[j]=m[j]);for(T=0;T<A;T++)k=je(n,bn),k.stagger=0,F&&(k.easeReverse=F),P&&ke(k,P),M=b[T],k.duration=+vn(u,i(s),T,M,b),k.delay=(+vn(d,i(s),T,M,b)||0)-s._delay,!m&&A===1&&k.delay&&(s._delay=d=k.delay,s._start+=d,k.delay=0),S.to(M,k,N?N(T,M,b):0),S._ease=Kt.none;S.duration()?u=d=0:s.timeline=0}else if(g){Me(De(S.vars.defaults,{ease:`none`})),S._ease=$t(g.ease||n.ease||`none`);var ee=0,te,ne,re;if(O(g))g.forEach(function(e){return S.to(b,e,`>`)}),S.duration();else{for(j in k={},g)j===`ease`||j===`easeEach`||_n(j,g[j],k,g.easeEach);for(j in k)for(te=k[j].sort(function(e,t){return e.t-t.t}),ee=0,T=0;T<te.length;T++)ne=te[T],re={ease:ne.e,duration:(ne.t-(T?te[T-1].t:0))/100*u},re[j]=ne.v,S.to(b,re,ee),ee+=re.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||s.duration(u=S.duration())}else s.timeline=0;return h===!0&&!c&&(fn=i(s),I.killTweensOf(b),fn=0),qe(y,i(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(p||!u&&!g&&s._start===ye(y._time)&&w(p)&&Be(i(s))&&y.data!==`nested`)&&(s._tTime=-f,s.render(Math.max(0,-d)||0)),v&&Je(i(s),v),s}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-f&&!o?i:e<f?0:e,c,l,u,d,p,m,h,g;if(!a)Qe(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,g=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=ye(s%d),s===i?(u=this._repeat,c=a):(p=ye(s/d),u=~~p,u&&u===p?(c=a,u--):c>a&&(c=a)),m=this._yoyo&&u&1,m&&(c=a-c),p=He(this._tTime,d),c===r&&!n&&this._initted&&u===p)return this._tTime=s,this;u!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(ye(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Ye(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=c<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=h=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=h=this._ease(c/a);if(this._from&&(this.ratio=h=1-h),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!p&&(kt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(h,l.d),l=l._next;g&&g.render(e<0?e:g._dur*g._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&ze(this,e,t,n),kt(this,`onUpdate`)),this._repeat&&u!==p&&this.vars.onRepeat&&!t&&this.parent&&kt(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&ze(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Ie(this,1),!t&&(!o||r)&&(s||r||m)&&(kt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Ut||Wt.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||mn(this,a),o=this._ease(a/this._dur),hn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Ge(this,0),this.parent||Pe(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?At(this):this.scrollTrigger&&this.scrollTrigger.kill(!!l),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,fn&&fn.vars.overwrite!==!0)._first||At(this),this.parent&&n!==this.timeline.totalDuration()&&et(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?ft(e):r,a=this._ptLookup,o=this._pt,s,c,u,d,f,p,m;if((!t||t===`all`)&&Ne(r,i))return t===`all`&&(this._pt=0),At(this);for(s=this._op=this._op||[],t!==`all`&&(y(t)&&(f={},q(t,function(e){return f[e]=1}),t=f),t=gn(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(f in c=a[m],t===`all`?(s[m]=t,d=c,u={}):(u=s[m]=s[m]||{},d=t),d)p=c&&c[f],p&&(`kill`in p.d&&p.d.kill(f)!==!0||Fe(this,p,`_pt`),delete c[f]),u!==`all`&&(u[f]=1);return this._initted&&!this._pt&&o&&At(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return it(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return it(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return I.killTweensOf(e,t,n)},t}(on),De(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),q(`staggerTo,staggerFrom,staggerFromTo`,function(e){xn[e]=function(){var t=new sn,n=lt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}}),Sn=function(e,t,n){return e[t]=n},Cn=function(e,t,n){return e[t](n)},wn=function(e,t,n,r){return e[t](r.fp,n)},Tn=function(e,t,n){return e.setAttribute(t,n)},En=function(e,t){return b(e[t])?Cn:S(e[t])&&e.setAttribute?Tn:Sn},Dn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},On=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},An=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Mn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fe(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Nn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Pn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Fn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Dn,this.d=o||this,this.set=s||Sn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Nn,this.m=e,this.mt=n,this.tween=t},e}(),q(ge+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return ue[e]=1}),R.TweenMax=R.TweenLite=xn,R.TimelineLite=R.TimelineMax=sn,I=new sn({sortChildren:!1,defaults:s,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),o.stringFilter=Ht,In=[],Ln={},Rn=[],zn=0,Bn=0,Vn=function(e){return(Ln[e]||Rn).map(function(e){return e()})},Hn=function(){var e=Date.now(),t=[];e-zn>2&&(Vn(`matchMediaInit`),In.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=ne.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Vn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),zn=e,Vn(`matchMedia`))},Un=function(){function e(e,t){this.selector=t&&pt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Bn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){b(e)&&(n=t,t=e,e=b);var r=this,i=function(){var e=u,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=pt(n)),u=r,a=t.apply(r,arguments),b(a)&&r._r.push(a),u=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===b?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=u;u=null,e(this),u=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof xn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof sn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof xn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=In.length;r--;)In[r].id===this.id&&In.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Wn=function(){function e(e){this.contexts=[],this.scope=e,u&&u.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){C(e)||(e={matches:e});var r=new Un(0,n||this.scope),i=r.conditions={},a,o,s;for(o in u&&!r.selector&&(r.selector=u.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=ne.matchMedia(e[o]),a&&(In.indexOf(r)<0&&In.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Hn):a.addEventListener(`change`,Hn)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Gn={registerPlugin:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){return Nt(e)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return I.getTweensOf(e,t)},getProperty:function(e,t,n,r){y(e)&&(e=ft(e)[0]);var i=_e(e||{}).get,a=n?Ee:Te;return n===`native`&&(n=``),e&&(t?a((me[t]&&me[t].get||i)(e,t,n,r)):function(t,n,r){return a((me[t]&&me[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=ft(e),e.length>1){var r=e.map(function(e){return Yn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=me[t],o=_e(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;jt._pt=0,r.init(e,n?t+n:t,jt,0,[e]),r.render(1,r),jt._pt&&An(1,jt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Yn.to(e,De((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return I.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$t(e.ease,s.ease)),Ae(s,e||{})},config:function(e){return Ae(o,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!me[e]&&!R[e]&&B(t+` effect requires `+e+` plugin.`)}),U[t]=function(e,t,r){return n(ft(e),De(t||{},i),r)},a&&(sn.prototype[t]=function(e,n,r){return this.add(U[t](e,C(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Kt[e]=$t(t)},parseEase:function(e,t){return arguments.length?$t(e,t):Kt},getById:function(e){return I.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,i;for(n.smoothChildTiming=w(e.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,(t||!(!r._dur&&r instanceof xn&&r.vars.onComplete===r._targets[0]))&&qe(n,r,r._start-r._delay),r=i;return qe(I,n,0),n},context:function(e,t){return e?new Un(e,t):u},matchMedia:function(e){return new Wn(e)},matchMediaRefresh:function(){return In.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Hn()},addEventListener:function(e,t){var n=Ln[e]||(Ln[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ln[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ct,wrapYoyo:wt,distribute:ht,random:vt,snap:_t,normalize:xt,getUnit:st,clamp:ct,splitColor:Lt,toArray:ft,selector:pt,mapRange:Et,pipe:yt,unitize:bt,interpolate:Dt,shuffle:mt},install:ae,effects:U,ticker:Wt,updateRoot:sn.updateRoot,plugins:me,globalTimeline:I,core:{PropTween:Fn,globals:V,Tween:xn,Timeline:sn,Animation:on,getCache:_e,_removeLinkedListItem:Fe,reverting:function(){return l},context:function(e){return e&&u&&(u.data.push(e),e._ctx=u),u},suppressOverwrites:function(e){return c=e}}},q(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Gn[e]=xn[e]}),Wt.add(sn.updateRoot),jt=Gn.to({},{duration:0}),Kn=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Kn(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Jn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(y(n)&&(r={},q(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}qn(e,n)}}}},Yn=Gn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)l?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jn(`roundProps`,gt),Jn(`modifiers`),Jn(`snap`,_t))||Gn,xn.version=sn.version=Yn.version=`3.15.0`,ie=1,T()&&Gt(),Kt.Power0,Kt.Power1,Kt.Power2,Kt.Power3,Kt.Power4,Kt.Linear,Kt.Quad,Kt.Cubic,Kt.Quart,Kt.Quint,Kt.Strong,Kt.Elastic,Kt.Back,Kt.SteppedEase,Kt.Bounce,Kt.Sine,Kt.Expo,Kt.Circ})),Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi=n((()=>{Xn(),ir=function(){return typeof window<`u`},ar={},or=180/Math.PI,sr=Math.PI/180,cr=Math.atan2,lr=1e8,ur=/([A-Z])/g,dr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,pr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},mr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_r=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},yr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},br=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},xr=function(e,t,n){return e.style[t]=n},Sr=function(e,t,n){return e.style.setProperty(t,n)},Cr=function(e,t,n){return e._gsap[t]=n},wr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Er=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Dr=`transform`,Or=Dr+`Origin`,kr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in ar&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=pr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Jr(i,e)}):this.tfm[t]=o.x?o[t]:Jr(i,t),t===Or&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Dr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Or,n,``)),t=Dr}(a||n)&&this.props.push(t,n,a[t])},Ar=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},jr=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(ur,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=rr(),i&&i.isStart||n[Dr]||(Ar(n),r.zOrigin&&n[Or]&&(n[Or]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Mr=function(e,t){var n={target:e,props:[],revert:jr,save:kr};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Pr=function(e,t){var n=Qn.createElementNS?Qn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Qn.createElement(e);return n&&n.style?n:Qn.createElement(e)},Fr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(ur,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Lr(n)||n,1)||``},Ir=`O,Moz,ms,Ms,Webkit`.split(`,`),Lr=function(e,t,n){var r=(t||tr).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Ir[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Ir[i]:``)+e},Rr=function(){ir()&&window.document&&(Zn=window,Qn=Zn.document,$n=Qn.documentElement,tr=Pr(`div`)||{style:{}},Pr(`div`),Dr=Lr(Dr),Or=Dr+`Origin`,tr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Nr=!!Lr(`perspective`),rr=Yn.core.reverting,er=1)},zr=function(e){var t=e.ownerSVGElement,n=Pr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),$n.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),$n.removeChild(n),i},Br=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vr=function(e){var t,n;try{t=e.getBBox()}catch{t=zr(e),n=1}return t&&(t.width||t.height)||n||(t=zr(e)),t&&!t.width&&!t.x&&!t.y?{x:+Br(e,[`x`,`cx`,`x1`])||0,y:+Br(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Hr=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Vr(e))},Ur=function(e,t){if(t){var n=e.style,r;t in ar&&t!==Or&&(t=Dr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(ur,`-$1`).toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,r,i,a){var o=new Fn(e._pt,t,n,0,1,a?br:yr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Gr={deg:1,rad:1,turn:1},Kr={grid:1,flex:1},qr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=tr.style,c=dr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Gr[i]||Gr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Hr(t),(p||o===`%`)&&(ar[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],ve(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==Qn&&h.appendChild||(h=Qn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Wt.time&&!g.uncache)return ve(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Ur(t,n)}else(p||o===`%`)&&!Kr[Fr(h,`display`)]&&(s.position=Fr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(tr),m=tr[u],h.removeChild(tr),s.position=`absolute`;return c&&p&&(g=_e(h),g.time=Wt.time,g.width=h[u]),ve(f?m*a/d:m&&a?d/m*a:0)},Jr=function(e,t,n,r){var i;return er||Rr(),t in pr&&t!==`transform`&&(t=pr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),ar[t]&&t!==`transform`?(i=oi(e,r),i=t===`transformOrigin`?i.svg?i.origin:si(Fr(e,Or))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=$r[t]&&$r[t](e,t,n)||Fr(e,t)||K(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?qr(e,t,i,n)+n:i},Yr=function(e,t,n,r){if(!n||n===`none`){var i=Lr(t,e,1),a=i&&Fr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Fr(e,`borderTopColor`))}var s=new Fn(this._pt,e.style,t,0,1,kn),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=n,s.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Fr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(h=e.style[t],e.style[t]=r,r=Fr(e,t)||r,h?e.style[t]=h:Ur(e,t)),u=[n,r],Ht(u),n=u[0],r=u[1],f=n.match(N)||[],x=r.match(N)||[],x.length){for(;d=N.exec(r);)g=d[0],v=r.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=be(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=N.lastIndex-y.length,y||(y=y||o.units[t]||b,c===r.length&&(r+=y,s.e+=y)),b!==y&&(p=qr(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<r.length?r.substring(c,r.length):``}else s.r=t===`display`&&r===`none`?br:yr;return F.test(r)&&(s.e=0),this._pt=s,s},Xr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Zr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Xr[n]||n,t[1]=Xr[r]||r,t.join(` `)},Qr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],ar[o]&&(s=1,o=o===`transformOrigin`?Or:Dr),Ur(n,o);s&&(Ur(n,Dr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,oi(n,1),a.uncache=1,Ar(r)))}},$r={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Fn(e._pt,t,n,0,0,Qr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},ei=[1,0,0,1,0,0],ti={},ni=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ri=function(e){var t=Fr(e,Dr);return ni(t)?ei:t.substr(7).match(M).map(ve)},ii=function(e,t){var n=e._gsap||_e(e),r=e.style,i=ri(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?ei:i):(i===ei&&!e.offsetParent&&e!==$n&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,$n.appendChild(e)),i=ri(e),s?r.display=s:Ur(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):$n.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ai=function(e,t,n,r,i,a){var o=e._gsap,s=i||ii(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==ei&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Vr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Or]=`0px 0px`,a&&(Wr(a,o,`xOrigin`,c,y),Wr(a,o,`yOrigin`,l,b),Wr(a,o,`xOffset`,u,o.xOffset),Wr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},oi=function(e,t){var n=e._gsap||new an(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,s=`deg`,c=getComputedStyle(e),l=Fr(e,Or)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,ee,te,I,ne,re,L;return n.svg=!!(e.getCTM&&Hr(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(r[Dr]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[Dr]===`none`?``:c[Dr])),r.scale=r.rotate=r.translate=`none`),C=ii(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),l=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),ai(e,N||l,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==ei&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?cr(O,D)*or:0,v=k||A?cr(k,A)*or+h:0,v&&(m*=Math.abs(Math.cos(v*sr))),n.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(L=C[6],ne=C[7],ee=C[8],te=C[9],I=C[10],re=C[11],u=C[12],d=C[13],f=C[14],w=cr(L,I),g=w*or,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+ee*E,P=M*T+te*E,F=L*T+I*E,ee=j*-E+ee*T,te=M*-E+te*T,I=L*-E+I*T,re=ne*-E+re*T,j=N,M=P,L=F),w=cr(-k,I),_=w*or,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-ee*E,P=O*T-te*E,F=k*T-I*E,re=A*E+re*T,D=N,O=P,k=F),w=cr(O,D),h=w*or,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=ve(Math.sqrt(D*D+O*O+k*k)),m=ve(Math.sqrt(M*M+L*L)),w=cr(j,M),v=Math.abs(w)>2e-4?w*or:0,b=re?1/(re<0?-re:re):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!ni(Fr(e,Dr)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(i?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ve(p),n.scaleY=ve(m),n.rotation=ve(h)+s,n.rotationX=ve(g)+s,n.rotationY=ve(_)+s,n.skewX=v+s,n.skewY=y+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Or]=si(l)),n.xOffset=n.yOffset=0,n.force3D=o.force3D,n.renderTransform=n.svg?mi:Nr?pi:li,n.uncache=0,n},si=function(e){return(e=e.split(` `))[0]+` `+e[1]},ci=function(e,t,n){var r=st(t);return ve(parseFloat(t)+parseFloat(qr(e,`x`,n+`px`,r)))+r},li=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,pi(e,t)},ui=`0deg`,di=`0px`,fi=`) `,pi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==ui||l!==ui)){var x=parseFloat(l)*sr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*sr,w=Math.cos(x),a=ci(_,a,S*w*-v),o=ci(_,o,-Math.sin(x)*-v),s=ci(_,s,C*w*-v+v)}h!==di&&(y+=`perspective(`+h+fi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==di||o!==di||s!==di)&&(y+=s!==di||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+fi),c!==ui&&(y+=`rotate(`+c+fi),l!==ui&&(y+=`rotateY(`+l+fi),u!==ui&&(y+=`rotateX(`+u+fi),(d!==ui||f!==ui)&&(y+=`skew(`+d+`, `+f+fi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+fi),_.style[Dr]=y||`translate(0, 0)`},mi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=sr,c*=sr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=sr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=ve(b),x=ve(x),S=ve(S),C=ve(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=qr(f,`x`,a,`px`),y=qr(f,`y`,o,`px`)),(p||m||h||g)&&(v=ve(v+p-(p*b+m*S)+h),y=ve(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=ve(v+r/100*w.width),y=ve(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Dr]=w)},hi=function(e,t,n,r,i){var a=360,o=y(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?or:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*lr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*lr)%a-~~(s/a)*a)),e._pt=u=new Fn(e._pt,t,n,r,s,hr),u.e=c,u.u=`deg`,e._props.push(n),u},gi=function(e,t){for(var n in t)e[n]=t[n];return e},_i=function(e,t,n){var r=gi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Dr]=t,o=oi(n,1),Ur(n,Dr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Dr],a[Dr]=t,o=oi(n,1),a[Dr]=c),ar)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=st(c),p=st(l),u=f===p?parseFloat(c):qr(n,s,c,p),d=parseFloat(l),e._pt=new Fn(e._pt,o,s,u,d-u,mr),e._pt.u=p||0,e._props.push(s));gi(o,r)},q(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});$r[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Jr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}}),vi={name:`css`,register:Rr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,s=e.style,c=n.vars.startAt,l,u,d,f,p,m,h,g,_,v,b,x,S,C,w,T,E;for(h in er||Rr(),this.styles=this.styles||Mr(e),T=this.styles.props,this.tween=n,t)if(h!==`autoRound`&&(u=t[h],!(me[h]&&dn(h,t,n,r,e,i)))){if(p=typeof u,m=$r[h],p===`function`&&(u=u.call(n,r,e,i),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=Tt(u)),m)m(this,e,h,u,n)&&(w=1);else if(h.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(h)+``).trim(),u+=``,Bt.lastIndex=0,Bt.test(l)||(g=st(l),_=st(u),_?g!==_&&(l=qr(e,h,l,_)+_):g&&(u+=g)),this.add(s,`setProperty`,l,u,r,i,0,0,h),a.push(h),T.push(h,0,s[h]);else if(p!==`undefined`){if(c&&h in c?(l=typeof c[h]==`function`?c[h].call(n,r,e,i):c[h],y(l)&&~l.indexOf(`random(`)&&(l=Tt(l)),st(l+``)||l===`auto`||(l+=o.units[h]||st(Jr(e,h))||``),(l+``).charAt(1)===`=`&&(l=Jr(e,h))):l=Jr(e,h),f=parseFloat(l),v=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),h in pr&&(h===`autoAlpha`&&(f===1&&Jr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Wr(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),h!==`scale`&&h!==`transform`&&(h=pr[h],~h.indexOf(`,`)&&(h=h.split(`,`)[0]))),b=h in ar,b){if(this.styles.save(h),E=u,p===`string`&&u.substring(0,6)===`var(--`){if(u=Fr(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=u,u=Fr(e,`perspective`),D?e.style.perspective=D:Ur(e,`perspective`)}d=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||oi(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Fn(this._pt,s,Dr,0,1,S.renderTransform,S,0,-1),x.dep=1),h===`scale`)this._pt=new Fn(this._pt,S,`scaleY`,S.scaleY,(v?be(S.scaleY,v+d):d)-S.scaleY||0,mr),this._pt.u=0,a.push(`scaleY`,h),h+=`X`;else if(h===`transformOrigin`){T.push(Or,0,s[Or]),u=Zr(u),S.svg?ai(e,u,0,C,0,this):(_=parseFloat(u.split(` `)[2])||0,_!==S.zOrigin&&Wr(this,S,`zOrigin`,S.zOrigin,_),Wr(this,s,h,si(l),si(u)));continue}else if(h===`svgOrigin`){ai(e,u,1,C,0,this);continue}else if(h in ti){hi(this,S,h,f,v?be(f,v+u):u);continue}else if(h===`smoothOrigin`){Wr(this,S,`smooth`,S.smooth,u);continue}else if(h===`force3D`){S[h]=u;continue}else if(h===`transform`){_i(this,u,e);continue}}else h in s||(h=Lr(h)||h);if(b||(d||d===0)&&(f||f===0)&&!fr.test(u)&&h in s)g=(l+``).substr((f+``).length),d||=0,_=st(u)||(h in o.units?o.units[h]:g),g!==_&&(f=qr(e,h,l,_)),this._pt=new Fn(this._pt,b?S:s,h,f,(v?be(f,v+d):d)-f,!b&&(_===`px`||h===`zIndex`)&&t.autoRound!==!1?vr:mr),this._pt.u=_||0,b&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=_r):g!==_&&_!==`%`&&(this._pt.b=l,this._pt.r=gr);else if(h in s)Yr.call(this,e,h,l,v?v+u:u);else if(h in e)this.add(e,h,l||e[h],v?v+u:u,r,i);else if(h!==`parseTransform`){oe(h,u);continue}b||(h in s?T.push(h,0,s[h]):typeof e[h]==`function`?T.push(h,2,e[h]()):T.push(h,1,l||e[h])),a.push(h)}}w&&Pn(this)},render:function(e,t){if(t.tween._time||!rr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jr,aliases:pr,getSetter:function(e,t,n){var r=pr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in ar&&t!==Or&&(e._gsap.x||Jr(e,`x`))?n&&nr===n?t===`scale`?wr:Cr:(nr=n||{})&&(t===`scale`?Tr:Er):e.style&&!S(e.style[t])?xr:~t.indexOf(`-`)?Sr:En(e,t)},core:{_removeProperty:Ur,_getMatrix:ii}},Yn.utils.checkPrefix=Lr,Yn.core.getStyleSaver=Mr,(function(e,t,n,r){var i=q(e+`,`+t+`,`+n,function(e){ar[e]=1});q(t,function(e){o.units[e]=`deg`,ti[e]=1}),pr[i[13]]=e+`,`+t,q(r,function(e){var t=e.split(`:`);pr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),q(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){o.units[e]=`px`}),Yn.registerPlugin(vi)})),bi,xi=n((()=>{Xn(),yi(),bi=Yn.registerPlugin(vi)||Yn,bi.core.Tween}));function Si(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ci(e,t,n){return t&&Si(e.prototype,t),n&&Si(e,n),e}var wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua=n((()=>{Li=function(){return wi||typeof window<`u`&&(wi=window.gsap)&&wi.registerPlugin&&wi},Ri=1,zi=[],Bi=[],Vi=[],Hi=Date.now,Ui=function(e,t){return t},Wi=function(){var e=Mi.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Bi),r.push.apply(r,Vi),Bi=n,Vi=r,Ui=function(e,n){return t[e](n)}},Gi=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},Ki=function(e){return!!~Ni.indexOf(e)},qi=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Ji=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Yi=`scrollLeft`,Xi=`scrollTop`,Zi=function(){return Pi&&Pi.isPressed||Bi.cache++},Qi=function(e,t){var n=function n(r){if(r||r===0){Ri&&(Ei.history.scrollRestoration=`manual`);var i=Pi&&Pi.isPressed;r=n.v=Math.round(r)||(Pi&&Pi.iOS?1:0),e(r),n.cacheID=Bi.cache,i&&Ui(`ss`,r)}else(t||Bi.cache!==n.cacheID||Ui(`ref`))&&(n.cacheID=Bi.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},$i={s:Yi,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Qi(function(e){return arguments.length?Ei.scrollTo(e,ea.sc()):Ei.pageXOffset||Di[Yi]||Oi[Yi]||ki[Yi]||0})},ea={s:Xi,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:$i,sc:Qi(function(e){return arguments.length?Ei.scrollTo($i.sc(),e):Ei.pageYOffset||Di[Xi]||Oi[Xi]||ki[Xi]||0})},ta=function(e,t){return(t&&t._ctx&&t._ctx.selector||wi.utils.toArray)(e)[0]||(typeof e==`string`&&wi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},na=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ra=function(e,t){var n=t.s,r=t.sc;Ki(e)&&(e=Di.scrollingElement||Oi);var i=Bi.indexOf(e),a=r===ea.sc?1:2;!~i&&(i=Bi.push(e)-1),Bi[i+a]||qi(e,`scroll`,Zi);var o=Bi[i+a],s=o||(Bi[i+a]=Qi(Gi(e,n),!0)||(Ki(e)?r:Qi(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=wi.getProperty(e,`scrollBehavior`)===`smooth`),s},ia=function(e,t,n){var r=e,i=e,a=Hi(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Hi();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Hi();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},aa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},oa=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},sa=function(){Mi=wi.core.globals().ScrollTrigger,Mi&&Mi.core&&Wi()},ca=function(e){return wi=e||Li(),!Ti&&wi&&typeof document<`u`&&document.body&&(Ei=window,Di=document,Oi=Di.documentElement,ki=Di.body,Ni=[Ei,Di,Oi,ki],wi.utils.clamp,Ii=wi.core.context||function(){},ji=`onpointerenter`in ki?`pointer`:`mouse`,Ai=la.isTouch=Ei.matchMedia&&Ei.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in Ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=la.eventTypes=(`ontouchstart`in Oi?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Oi?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Ri=0},500),Ti=1),Mi||sa(),Ti},$i.op=ea,Bi.cache=0,la=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Ti||ca(wi)||console.warn(`Please gsap.registerPlugin(Observer)`),Mi||sa();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,ee=e.onDisable,te=e.onClick,I=e.scrollSpeed,ne=e.capture,re=e.allowClicks,L=e.lockAxis,R=e.onLockAxis;this.target=i=ta(i)||Oi,this.vars=e,u&&=wi.utils.toArray(u),t||=1e-9,n||=0,d||=1,I||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(Ei.getComputedStyle(ki).lineHeight)||22;var z,ie,ae,oe,B,V,se,H=this,ce=0,le=0,ue=e.passive||!s&&e.passive!==!1,de=ra(i,$i),fe=ra(i,ea),pe=de(),me=fe(),U=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Fi[0]===`pointerdown`,he=Ki(i),W=i.ownerDocument||Di,ge=[0,0,0],G=[0,0,0],_e=0,K=function(){return _e=Hi()},q=function(e,t){return(H.event=e)&&u&&na(e.target,u)||t&&U&&e.pointerType!==`touch`||A&&A(e,t)},ve=function(){H._vx.reset(),H._vy.reset(),ie.pause(),c&&c(H)},ye=function(){var e=H.deltaX=oa(ge),n=H.deltaY=oa(G),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(H,e,n,ge,G),r&&(v&&H.deltaX>0&&v(H),y&&H.deltaX<0&&y(H),S&&S(H),T&&H.deltaX<0!=ce<0&&T(H),ce=H.deltaX,ge[0]=ge[1]=ge[2]=0),i&&(x&&H.deltaY>0&&x(H),b&&H.deltaY<0&&b(H),C&&C(H),E&&H.deltaY<0!=le<0&&E(H),le=H.deltaY,G[0]=G[1]=G[2]=0),(oe||ae)&&(k&&k(H),ae&&=(p&&ae===1&&p(H),h&&h(H),0),oe=!1),V&&!(V=!1)&&R&&R(H),B&&=(P(H),!1),z=0},be=function(e,t,n){ge[n]+=e,G[n]+=t,H._vx.update(e),H._vy.update(t),o?z||=requestAnimationFrame(ye):ye()},xe=function(e,t){L&&!se&&(H.axis=se=Math.abs(e)>Math.abs(t)?`x`:`y`,V=!0),se!==`y`&&(ge[2]+=e,H._vx.update(e,!0)),se!==`x`&&(G[2]+=t,H._vy.update(t,!0)),o?z||=requestAnimationFrame(ye):ye()},Se=function(e){if(!q(e,1)){e=aa(e,s);var t=e.clientX,r=e.clientY,i=t-H.x,a=r-H.y,o=H.isDragging;H.x=t,H.y=r,(o||(i||a)&&(Math.abs(H.startX-t)>=n||Math.abs(H.startY-r)>=n))&&(ae||=o?2:1,o||(H.isDragging=!0),xe(i,a))}},Ce=H.onPress=function(e){q(e,1)||e&&e.button||(H.axis=se=null,ie.pause(),H.isPressed=!0,e=aa(e),ce=le=0,H.startX=H.x=e.clientX,H.startY=H.y=e.clientY,H._vx.reset(),H._vy.reset(),qi(j?i:W,Fi[1],Se,ue,!0),H.deltaX=H.deltaY=0,g&&g(H))},we=H.onRelease=function(e){if(!q(e,1)){Ji(j?i:W,Fi[1],Se,!0);var t=!isNaN(H.y-H.startY),n=H.isDragging,r=n&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),a=aa(e);!r&&t&&(H._vx.reset(),H._vy.reset(),s&&re&&wi.delayedCall(.08,function(){if(Hi()-_e>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(W.createEvent){var t=W.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,Ei,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,c&&n&&!j&&ie.restart(!0),ae&&ye(),m&&n&&m(H),_&&_(H,r)}},Te=function(e){return e.touches&&e.touches.length>1&&(H.isGesturing=!0)&&M(e,H.isDragging)},Ee=function(){return(H.isGesturing=!1)||N(H)},De=function(e){if(!q(e)){var t=de(),n=fe();be((t-pe)*I,(n-me)*I,1),pe=t,me=n,c&&ie.restart(!0)}},Oe=function(e){if(!q(e)){e=aa(e,s),P&&(B=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?Ei.innerHeight:1)*d;be(e.deltaX*t,e.deltaY*t,0),c&&!j&&ie.restart(!0)}},ke=function(e){if(!q(e)){var t=e.clientX,n=e.clientY,r=t-H.x,i=n-H.y;H.x=t,H.y=n,oe=!0,c&&ie.restart(!0),(r||i)&&xe(r,i)}},Ae=function(e){H.event=e,D(H)},je=function(e){H.event=e,O(H)},Me=function(e){return q(e)||aa(e,s)&&te(H)};ie=H._dc=wi.delayedCall(l||.25,ve).pause(),H.deltaX=H.deltaY=0,H._vx=ia(0,50,!0),H._vy=ia(0,50,!0),H.scrollX=de,H.scrollY=fe,H.isDragging=H.isGesturing=H.isPressed=!1,Ii(this),H.enable=function(e){return H.isEnabled||(qi(he?W:i,`scroll`,Zi),r.indexOf(`scroll`)>=0&&qi(he?W:i,`scroll`,De,ue,ne),r.indexOf(`wheel`)>=0&&qi(i,`wheel`,Oe,ue,ne),(r.indexOf(`touch`)>=0&&Ai||r.indexOf(`pointer`)>=0)&&(qi(i,Fi[0],Ce,ue,ne),qi(W,Fi[2],we),qi(W,Fi[3],we),re&&qi(i,`click`,K,!0,!0),te&&qi(i,`click`,Me),M&&qi(W,`gesturestart`,Te),N&&qi(W,`gestureend`,Ee),D&&qi(i,ji+`enter`,Ae),O&&qi(i,ji+`leave`,je),k&&qi(i,ji+`move`,ke)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=oe=ae=!1,H._vx.reset(),H._vy.reset(),pe=de(),me=fe(),e&&e.type&&Ce(e),F&&F(H)),H},H.disable=function(){H.isEnabled&&(zi.filter(function(e){return e!==H&&Ki(e.target)}).length||Ji(he?W:i,`scroll`,Zi),H.isPressed&&(H._vx.reset(),H._vy.reset(),Ji(j?i:W,Fi[1],Se,!0)),Ji(he?W:i,`scroll`,De,ne),Ji(i,`wheel`,Oe,ne),Ji(i,Fi[0],Ce,ne),Ji(W,Fi[2],we),Ji(W,Fi[3],we),Ji(i,`click`,K,!0),Ji(i,`click`,Me),Ji(W,`gesturestart`,Te),Ji(W,`gestureend`,Ee),Ji(i,ji+`enter`,Ae),Ji(i,ji+`leave`,je),Ji(i,ji+`move`,ke),H.isEnabled=H.isPressed=H.isDragging=!1,ee&&ee(H))},H.kill=H.revert=function(){H.disable();var e=zi.indexOf(H);e>=0&&zi.splice(e,1),Pi===H&&(Pi=0)},zi.push(H),j&&Ki(i)&&(Pi=H),H.enable(f)},Ci(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}(),la.version=`3.15.0`,la.create=function(e){return new la(e)},la.register=ca,la.getAll=function(){return zi.slice()},la.getById=function(e){return zi.filter(function(t){return t.vars.id===e})[0]},Li()&&wi.registerPlugin(la)})),J,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs=n((()=>{ua(),Wa=1,Ga=Date.now,Ka=Ga(),qa=0,Ja=0,Ya=function(e,t,n){var r=fo(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Xa=function(e,t){return t&&(!fo(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Za=function e(){return Ja&&requestAnimationFrame(e)},Qa=function(){return Ca=1},$a=function(){return Ca=0},eo=function(e){return e},to=function(e){return Math.round(e*1e5)/1e5||0},no=function(){return typeof window<`u`},ro=function(){return J||no()&&(J=window.gsap)&&J.registerPlugin&&J},io=function(e){return!!~ga.indexOf(e)},ao=function(e){return(e===`Height`?Ba:fa[`inner`+e])||ma[`client`+e]||ha[`client`+e]},oo=function(e){return Gi(e,`getBoundingClientRect`)||(io(e)?function(){return Ps.width=fa.innerWidth,Ps.height=Ba,Ps}:function(){return Lo(e)})},so=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Gi(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?ao(i):e[`client`+i])||0}},co=function(e,t){return!t||~Vi.indexOf(e)?oo(e):function(){return Ps}},lo=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Gi(e,n))?a()-oo(e)()[i]:io(e)?(ma[n]||ha[n])-ao(r):e[n]-e[`offset`+r])},uo=function(e,t){for(var n=0;n<Oa.length;n+=3)(!t||~t.indexOf(Oa[n+1]))&&e(Oa[n],Oa[n+1],Oa[n+2])},fo=function(e){return typeof e==`string`},po=function(e){return typeof e==`function`},mo=function(e){return typeof e==`number`},ho=function(e){return typeof e==`object`},go=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},_o=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},vo=Math.abs,yo=`left`,bo=`top`,xo=`right`,So=`bottom`,Co=`width`,wo=`height`,To=`Right`,Eo=`Left`,Do=`Top`,Oo=`Bottom`,ko=`padding`,Ao=`margin`,jo=`Width`,Mo=`Height`,No=`px`,Po=function(e){return fa.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Fo=function(e){var t=Po(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},Io=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lo=function(e,t){var n=t&&Po(e)[wa]!==`matrix(1, 0, 0, 1, 0, 0)`&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Ro=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},zo=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Bo=function(e){return function(t){return J.utils.snap(zo(e),t)}},Vo=function(e){var t=J.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Ho=function(e){return function(t,n){return Vo(zo(e))(t,n.direction)}},Uo=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},Wo=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Go=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ko=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},qo={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Jo={toggleActions:`play`,anticipatePin:0},Yo={top:0,left:0,center:.5,bottom:1,right:1},Xo=function(e,t){if(fo(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Yo?Yo[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zo=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=pa.createElement(`div`),m=io(n)||Gi(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?ha:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===ea?xo:So)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Qo(p,0,r,_),p},Qo=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+jo]=1,i[`border`+o+jo]=0,i[n.p]=t+`px`,J.set(e,i)},$o=[],es={},ns=function(){return Ga()-qa>34&&(ts||=requestAnimationFrame(Ts))},rs=function(){(!Ma||!Ma.isPressed||Ma.startX>ha.clientWidth)&&(Bi.cache++,Ma?ts||=requestAnimationFrame(Ts):Ts(),qa||ls(`scrollStart`),qa=Ga())},is=function(){Fa=fa.innerWidth,Pa=fa.innerHeight},as=function(e){Bi.cache++,(e===!0||!Sa&&!ja&&!pa.fullscreenElement&&!pa.webkitFullscreenElement&&(!Na||Fa!==fa.innerWidth||Math.abs(fa.innerHeight-Pa)>fa.innerHeight*.25))&&_a.restart(!0)},os={},ss=[],cs=function e(){return Go(Vs,`scrollEnd`,e)||xs(!0)},ls=function(e){return os[e]&&os[e].map(function(e){return e()})||ss},us=[],ds=function(e){for(var t=0;t<us.length;t+=5)(!e||us[t+4]&&us[t+4].query===e)&&(us[t].style.cssText=us[t+1],us[t].getBBox&&us[t].setAttribute(`transform`,us[t+2]||``),us[t+3].uncache=1)},fs=function(){return Bi.forEach(function(e){return po(e)&&++e.cacheID&&(e.rec=e())})},ps=function(e,t){var n;for(Ta=0;Ta<$o.length;Ta++)n=$o[Ta],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Va=!0,t&&ds(t),t||ls(`revert`)},ms=function(e,t){Bi.cache++,(t||!hs)&&Bi.forEach(function(e){return po(e)&&e.cacheID++&&(e.rec=0)}),fo(e)&&(fa.history.scrollRestoration=Ra=e)},gs=0,vs=function(){if(_s!==gs){var e=_s=gs;requestAnimationFrame(function(){return e===gs&&xs(!0)})}},ys=function(){ha.appendChild(za),Ba=!Ma&&za.offsetHeight||fa.innerHeight,ha.removeChild(za)},bs=function(e){return va(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},xs=function(e,t){if(ma=pa.documentElement,ha=pa.body,ga=[fa,pa,ma,ha],qa&&!e&&!Va)Wo(Vs,`scrollEnd`,cs);else{ys(),hs=Vs.isRefreshing=!0,Va||fs();var n=ls(`refreshInit`);ka&&Vs.sort(),t||ps(),Bi.forEach(function(e){po(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),$o.slice(0).forEach(function(e){return e.refresh()}),Va=!1,$o.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Ha=1,bs(!0),$o.forEach(function(e){var t=lo(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),bs(!1),Ha=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Bi.forEach(function(e){po(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),ms(Ra,1),_a.pause(),gs++,hs=2,Ts(2),$o.forEach(function(e){return po(e.vars.onRefresh)&&e.vars.onRefresh(e)}),hs=Vs.isRefreshing=!1,ls(`refresh`)}},Ss=0,Cs=1,Ts=function(e){if(e===2||!hs&&!Va){Vs.isUpdating=!0,ws&&ws.update(0);var t=$o.length,n=Ga(),r=n-Ka>=50,i=t&&$o[0].scroll();if(Cs=Ss>i?-1:1,hs||(Ss=i),r&&(qa&&!Ca&&n-qa>200&&(qa=0,ls(`scrollEnd`)),ba=Ka,Ka=n),Cs<0){for(Ta=t;Ta-->0;)$o[Ta]&&$o[Ta].update(0,r);Cs=1}else for(Ta=0;Ta<t;Ta++)$o[Ta]&&$o[Ta].update(0,r);Vs.isUpdating=!1}ts=0},Es=[yo,bo,So,xo,Ao+Oo,Ao+To,Ao+Do,Ao+Eo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],Ds=Es.concat([Co,wo,`boxSizing`,`max`+jo,`max`+Mo,`position`,Ao,ko,ko+Do,ko+To,ko+Oo,ko+Eo]),Os=function(e,t,n){js(n);var r=e._gsap;if(r.spacerIsNative)js(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},ks=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=Es.length,a=t.style,o=e.style,s;i--;)s=Es[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[So]=o[xo]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[Co]=Ro(e,$i)+No,a[wo]=Ro(e,ea)+No,a[ko]=o[Ao]=o[bo]=o[yo]=`0`,js(r),o[Co]=o[`max`+jo]=n[Co],o[wo]=o[`max`+Mo]=n[wo],o[ko]=n[ko],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},As=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(As,`-$1`).toLowerCase())}},Ms=function(e){for(var t=Ds.length,n=e.style,r=[],i=0;i<t;i++)r.push(Ds[i],n[Ds[i]]);return r.t=e,r},Ns=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Ps={left:0,top:0},Fs=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){po(e)&&(e=e(s)),fo(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Xo(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),mo(e))f&&(e=J.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Qo(o,n,r,!0);else{po(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=ta(t,s)||ha,y=Lo(_)||{},y&&(y.left||y.top)||Po(_).display!==`none`||(S=_.style.display,_.style.display=`block`,y=Lo(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Xo(v[0],y[r.d]),x=Xo(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Qo(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Qo(a,C,r,w&&C>20||!w&&(u?Math.max(ha[h],ma[h]):a.parentNode[h])<=C+1),u&&(c=Lo(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+No))}return f&&_&&(h=Lo(_),f.seek(d),g=Lo(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Is=/(webkit|moz|length|cssText|inset)/i,Ls=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===ha){for(a in e._stOrig=i.cssText,o=Po(e),o)!+a&&!Is.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;J.core.getCache(e).uncache=1,t.appendChild(e)}},Rs=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},zs=function(e,t,n){var r={};r[t.p]=`+=`+n,J.set(e,r)},Bs=function(e,t){var n=ra(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Rs(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Bi.cache++,t.tween&&Ts()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=J.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Wo(e,`wheel`,n.wheelHandler),Vs.isTouch&&Wo(e,`touchmove`,n.wheelHandler),i},Vs=function(){function e(t,n){da||e.register(J)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),La(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja)this.update=this.refresh=this.kill=eo;else{t=Io(fo(t)||mo(t)||t.nodeType?{trigger:t}:t,Jo);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?$i:ea,T=!l&&l!==0,E=ta(t.scroller||fa),D=J.core.getCache(E),O=io(E),k=(`pinType`in t?t.pinType:Gi(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Jo.markers,N=O?0:parseFloat(Po(E)[`border`+w.p2+jo])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},ee=so(E,O,w),te=co(E,O),I=0,ne=0,re=0,L=ra(E,w),R,z,ie,ae,oe,B,V,se,H,ce,le,ue,de,fe,pe,me,U,he,W,ge,G,_e,K,q,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):L,ae=L(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(ka=1,t.refreshPriority===-9999&&(ws=P)),D.tweenScroll=D.tweenScroll||{top:Bs(E,ea),left:Bs(E,$i)},P.tweenTo=R=D.tweenScroll[w.p],P.scrubDuration=function(e){Ee=mo(e)&&e,Ee?Te?Te.duration(e):Te=J.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ee,paused:!0,onComplete:function(){return h&&h(P)}}):(Te&&Te.progress(1).kill(),Te=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),Ce=0,o||=n.vars.id),v&&((!ho(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in ha.style&&J.set(O?[ha,ma]:E,{scrollBehavior:`auto`}),Bi.forEach(function(e){return po(e)&&e.target===(O?pa.scrollingElement||ma:E)&&(e.smooth=!1)}),ie=po(v.snapTo)?v.snapTo:v.snapTo===`labels`?Bo(n):v.snapTo===`labelsDirectional`?Ho(n):v.directional===!1?J.utils.snap(v.snapTo):function(e,t){return Vo(v.snapTo)(e,Ga()-ne<500?0:t.direction)},De=v.duration||{min:.1,max:2},De=ho(De)?ya(De.min,De.max):ya(De,De),Oe=J.delayedCall(v.delay||Ee/2||.1,function(){var e=L(),t=Ga()-ne<500,r=R.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!Ca&&I!==e){var i=(e-B)/fe,a=n&&!T?n.totalProgress():i,o=t?0:(a-we)/(Ga()-ba)*1e3||0,s=J.utils.clamp(-i,1-i,vo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ie(c,P),mo(l)||(l=c),u=Math.max(0,Math.round(B+l*fe)),e<=V&&e>=B&&u!==e){if(r&&!r._initted&&r.data<=vo(u-e))return;v.inertia===!1&&(s=l-i),R(u,{duration:De(vo(Math.max(vo(c-a),vo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:vo(u-e),onInterrupt:function(){return Oe.restart(!0)&&p&&_o(P,p)},onComplete:function(){P.update(),I=L(),n&&!T&&(Te?Te.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Ce=we=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&_o(P,m)}},e,s*fe,u-e-s*fe),f&&_o(P,f,R.tween)}}else P.isActive&&I!==e&&Oe.restart(!0)}).pause()),o&&(es[o]=P),u=P.trigger=ta(u||d!==!0&&d),Me=u&&u._gsap&&u._gsap.stRevert,Me&&=Me(P),d=d===!0?u:ta(d),fo(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Ao||(f=!f&&d.parentNode&&d.parentNode.style&&Po(d.parentNode).display===`flex`?!1:ko),P.pin=d,z=J.core.getCache(d),z.spacer?pe=z.pinState:(b&&(b=ta(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),z.spacerIsNative=!!b,b&&(z.spacerState=Ms(b))),z.spacer=he=b||pa.createElement(`div`),he.classList.add(`pin-spacer`),o&&he.classList.add(`pin-spacer-`+o),z.pinState=pe=Ms(d)),t.force3D!==!1&&J.set(d,{force3D:!0}),P.spacer=he=z.spacer,Se=Po(d),q=Se[f+w.os2],ge=J.getProperty(d),G=J.quickSetter(d,w.a,No),ks(d,he,Se),U=Ms(d)),M){ue=ho(M)?Io(M,qo):qo,ce=Zo(`scroller-start`,o,E,w,ue,0),le=Zo(`scroller-end`,o,E,w,ue,0,ce),W=ce[`offset`+w.op.d2];var Ne=ta(Gi(E,`content`)||E);se=this.markerStart=Zo(`start`,o,Ne,w,ue,W,0,x),H=this.markerEnd=Zo(`end`,o,Ne,w,ue,W,0,x),x&&(je=J.quickSetter([se,H],w.a,No)),!k&&!(Vi.length&&Gi(E,`fixedMarkers`)===!0)&&(Fo(O?ha:E),J.set([ce,le],{force3D:!0}),ye=J.quickSetter(ce,w.a,No),xe=J.quickSetter(le,w.a,No))}if(x){var Pe=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Pe&&Pe.apply(x,Fe||[])})}if(P.previous=function(){return $o[$o.indexOf(P)-1]},P.next=function(){return $o[$o.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=Sa;r!==P.isReverted&&(r&&(ke=Math.max(L(),P.scroll.rec||0),re=P.progress,Ae=n&&n.progress()),se&&[se,H,ce,le].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(Sa=P,P.update(r)),!d||y&&P.isActive||(r?Os(d,he,pe):ks(d,he,Po(d),ve)),r||P.update(r),Sa=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!Sa&&P.enabled||i){if(d&&r&&qa)Wo(e,`scrollEnd`,cs);else{!hs&&F&&F(P),Sa=P,R.tween&&!a&&(R.tween.kill(),R.tween=0),Te&&Te.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=ee(),l=te(),m=x?x.duration():lo(E,w),h=fe<=.01||!fe,g=0,_=o||0,v=ho(a)?a.end:t.end,b=t.endTrigger||u,S=ho(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&ta(t.pinnedContainer,P),D=u&&Math.max(0,$o.indexOf(P))||0,A=D,j,z,ie,ue,W,G,q,ye,xe,Se,Ce,we,Ee;for(M&&ho(a)&&(we=J.getProperty(ce,w.p),Ee=J.getProperty(le,w.p));A-->0;)G=$o[A],G.end||G.refresh(0,1)||(Sa=P),q=G.pin,q&&(q===u||q===d||q===C)&&!G.isReverted&&(Se||=[],Se.unshift(G),G.revert(!0,!0)),G!==$o[A]&&(D--,A--);for(po(S)&&(S=S(P)),S=Ya(S,`start`,P),B=Fs(S,u,s,w,L(),se,ce,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),po(v)&&(v=v(P)),fo(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(fo(S)?S.split(` `)[0]:``)+v:(g=Xo(v.substr(2),s),v=fo(S)?S:(x?J.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,B):B)+g,b=u)),v=Ya(v,`end`,P),V=Math.max(B,Fs(v||(b?`100% 0`:m),b,s,w,L()+g,H,le,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)G=$o[A]||{},q=G.pin,q&&G.start-G._pinPush<=B&&!x&&G.end>0&&(j=G.end-(P._startClamp?Math.max(0,G.start):G.start),(q===u&&G.start-G._pinPush<B||q===C)&&isNaN(S)&&(g+=j*(1-G.progress)),q===d&&(_+=j));if(B+=g,V+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!hs&&(P._endClamp=V||-.001,V=Math.min(V,lo(E,w))),fe=V-B||(B-=.01)&&.001,h&&(re=J.utils.clamp(0,1,J.utils.normalize(B,V,ke))),P._pinPush=_,se&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+L()),J.set([se,H],j)),d&&!(Ha&&P.end>=lo(E,w)))j=Po(d),ue=w===ea,ie=L(),_e=parseFloat(ge(w.a))+_,!m&&V>1&&(Ce=(O?pa.scrollingElement||ma:E).style,Ce={style:Ce,value:Ce[`overflow`+w.a.toUpperCase()]},O&&Po(ha)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Ce.style[`overflow`+w.a.toUpperCase()]=`scroll`)),ks(d,he,j),U=Ms(d),z=Lo(d,!0),ye=k&&ra(E,ue?$i:ea)(),f?(ve=[f+w.os2,fe+_+No],ve.t=he,A=f===ko?Ro(d,w)+fe+_:0,A&&(ve.push(w.d,A+No),he.style.flexBasis!==`auto`&&(he.style.flexBasis=A+No)),js(ve),C&&$o.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&L(ke)):(A=Ro(d,w),A&&he.style.flexBasis!==`auto`&&(he.style.flexBasis=A+No)),k&&(W={top:z.top+(ue?ie-B:ye)+No,left:z.left+(ue?ye:ie-B)+No,boxSizing:`border-box`,position:`fixed`},W[Co]=W[`max`+jo]=Math.ceil(z.width)+No,W[wo]=W[`max`+Mo]=Math.ceil(z.height)+No,W[Ao]=W[Ao+Do]=W[Ao+To]=W[Ao+Oo]=W[Ao+Eo]=`0`,W[ko]=j[ko],W[ko+Do]=j[ko+Do],W[ko+To]=j[ko+To],W[ko+Oo]=j[ko+Oo],W[ko+Eo]=j[ko+Eo],me=Ns(pe,W,y),hs&&L(0)),n?(xe=n._initted,Aa(1),n.render(n.duration(),!0,!0),K=ge(w.a)-_e+fe+_,be=Math.abs(fe-K)>1,k&&be&&me.splice(me.length-2,2),n.render(0,!0,!0),xe||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Aa(0)):K=fe,Ce&&(Ce.value?Ce.style[`overflow`+w.a.toUpperCase()]=Ce.value:Ce.style.removeProperty(`overflow-`+w.a));else if(u&&L()&&!x)for(z=u.parentNode;z&&z!==ha;)z._pinOffset&&(B-=z._pinOffset,V-=z._pinOffset),z=z.parentNode;Se&&Se.forEach(function(e){return e.revert(!1,!0)}),P.start=B,P.end=V,ae=oe=hs?ke:L(),!x&&!hs&&(ae<ke&&L(ke),P.scroll.rec=0),P.revert(!1,!0),ne=Ga(),Oe&&(I=-1,Oe.restart(!0)),Sa=0,n&&T&&(n._initted||Ae)&&n.progress()!==Ae&&n.progress(Ae||0,!0).render(n.time(),!0,!0),(h||re!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||re||n.vars.immediateRender!==!1)&&n.totalProgress(x&&B<-.001&&!re?J.utils.normalize(B,V,0):re,!0),P.progress=h||(ae-B)/fe===re?0:re),d&&f&&(he._pinOffset=Math.round(P.progress*K)),Te&&Te.invalidate(),isNaN(we)||(we-=J.getProperty(ce,w.p),Ee-=J.getProperty(le,w.p),zs(ce,w,we),zs(se,w,we-(o||0)),zs(le,w,Ee),zs(H,w,Ee-(o||0))),h&&!hs&&P.update(),c&&!hs&&!de&&(de=!0,c(P),de=!1)}}},P.getVelocity=function(){return(L()-oe)/(Ga()-ba)*1e3||0},P.endAnimation=function(){go(P.callbackAnimation),n&&(Te?Te.progress(1):n.paused()?T||go(n,P.direction<0,1):go(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(B||P.refresh()||B)+n.labels[e]/n.duration()*fe||0},P.getTrailing=function(e){var t=$o.indexOf(P),n=P.direction>0?$o.slice(0,t).reverse():$o.slice(t+1);return(fo(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=B:e.start>=V})},P.update=function(e,t,r){if(!x||r||e){var o=hs===!0?ke:P.scroll(),c=e?0:(o-B)/fe,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(oe=ae,ae=x?L():o,v&&(we=Ce,Ce=n&&!T?n.totalProgress():u)),m&&d&&!Sa&&!Wa&&qa&&(!u&&B<o+(o-oe)/(Ga()-ba)*m?u=1e-4:u===1&&V>o+(o-oe)/(Ga()-ba)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!Sa&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(po(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(Te&&!Sa&&!Wa?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo(`totalProgress`,u,n._tTime/n._tDur):(Te.vars.totalProgress=u,Te.invalidate().restart())):n&&n.totalProgress(u,!!(Sa&&(ne||e)))),d){if(e&&f&&(he.style[f+w.os2]=q),!k)G(to(_e+K*u));else if(O){if(N=!e&&u>p&&V+1>o&&o+1>=lo(E,w),y){if(!e&&(h||N)){var ee=Lo(d,!0),te=o-B;Ls(d,ha,ee.top+(w===ea?te:0)+No,ee.left+(w===ea?0:te)+No)}else Ls(d,he)}js(h||N?me:U),be&&u<1&&h||G(_e+(u===1&&!N?K:0))}}v&&!R.tween&&!Sa&&!Wa&&Oe.restart(!0),a&&(M||_&&u&&(u<1||!Ua))&&va(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!Sa?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!Ua)&&(s&&M&&_o(P,s),A[b]&&_o(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&_o(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(mo(S)?S:2500)&&(go(P.callbackAnimation),Te?Te.progress(1):go(n,D===`reverse`?1:!u,1))):T&&i&&!Sa&&i(P)}if(xe){var I=x?o/x.duration()*(x._caScrollDist||0):o;ye(I+ +!!ce._isFlipped),xe(I)}je&&je(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,Wo(E,`resize`,as),O||Wo(E,`scroll`,rs),F&&Wo(e,`refreshInit`,F),t!==!1&&(P.progress=re=0,ae=oe=I=L()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&R?R.tween:Te},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:Xa(e,n&&!!P._startClamp),end:Xa(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ve&&e){var t=ve.indexOf(w.d)+1;ve[t]=parseFloat(ve[t])+e+No,ve[1]=parseFloat(ve[1])+e+No,js(ve)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||Te&&Te.pause(),ke=0,z&&(z.uncache=1),F&&Go(e,`refreshInit`,F),Oe&&(Oe.pause(),R.tween&&R.tween.kill()&&(R.tween=0)),!O)){for(var r=$o.length;r--;)if($o[r].scroller===E&&$o[r]!==P)return;Go(E,`resize`,as),O||Go(E,`scroll`,rs)}},P.kill=function(e,r){P.disable(e,r),Te&&!r&&Te.kill(),o&&delete es[o];var i=$o.indexOf(P);i>=0&&$o.splice(i,1),i===Ta&&Cs>0&&Ta--,i=0,$o.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||hs||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),se&&[se,H,ce,le].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ws===P&&(ws=0),d&&(z&&(z.uncache=1),i=0,$o.forEach(function(e){return e.pin===d&&i++}),i||(z.spacer=0)),t.onKill&&t.onKill(P)},$o.push(P),P.enable(!1,!1),Me&&Me(P),n&&n.add&&!fe){var Ie=P.update;P.update=function(){P.update=Ie,Bi.cache++,B||V||P.refresh()},J.delayedCall(.01,P.update),fe=.01,B=V=0}else P.refresh();d&&vs()}},e.register=function(t){return da||=(J=t||ro(),no()&&window.document&&e.enable(),Ja),da},e.defaults=function(e){if(e)for(var t in e)Jo[t]=e[t];return Jo},e.disable=function(e,t){Ja=0,$o.forEach(function(n){return n[t?`kill`:`disable`](e)}),Go(fa,`wheel`,rs),Go(pa,`scroll`,rs),clearInterval(xa),Go(pa,`touchcancel`,eo),Go(ha,`touchstart`,eo),Uo(Go,pa,`pointerdown,touchstart,mousedown`,Qa),Uo(Go,pa,`pointerup,touchend,mouseup`,$a),_a.kill(),uo(Go);for(var n=0;n<Bi.length;n+=3)Ko(Go,Bi[n],Bi[n+1]),Ko(Go,Bi[n],Bi[n+2])},e.enable=function(){if(fa=window,pa=document,ma=pa.documentElement,ha=pa.body,J){if(va=J.utils.toArray,ya=J.utils.clamp,La=J.core.context||eo,Aa=J.core.suppressOverwrites||eo,Ra=fa.history.scrollRestoration||`auto`,Ss=fa.pageYOffset||0,J.core.globals(`ScrollTrigger`,e),ha){Ja=1,za=document.createElement(`div`),za.style.height=`100vh`,za.style.position=`absolute`,ys(),Za(),la.register(J),e.isTouch=la.isTouch,Ia=la.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Na=la.isTouch===1,Wo(fa,`wheel`,rs),ga=[fa,pa,ma,ha],J.matchMedia?(e.matchMedia=function(e){var t=J.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},J.addEventListener(`matchMediaInit`,function(){fs(),ps()}),J.addEventListener(`matchMediaRevert`,function(){return ds()}),J.addEventListener(`matchMedia`,function(){xs(0,1),ls(`matchMedia`)}),J.matchMedia().add(`(orientation: portrait)`,function(){return is(),is})):console.warn(`Requires GSAP 3.11.0 or later`),is(),Wo(pa,`scroll`,rs);var t=ha.hasAttribute(`style`),n=ha.style,r=n.borderTopStyle,i=J.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Lo(ha),ea.m=Math.round(a.top+ea.sc())||0,$i.m=Math.round(a.left+$i.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(ha.setAttribute(`style`,``),ha.removeAttribute(`style`)),xa=setInterval(ns,250),J.delayedCall(.5,function(){return Wa=0}),Wo(pa,`touchcancel`,eo),Wo(ha,`touchstart`,eo),Uo(Wo,pa,`pointerdown,touchstart,mousedown`,Qa),Uo(Wo,pa,`pointerup,touchend,mouseup`,$a),wa=J.utils.checkPrefix(`transform`),Ds.push(wa),da=Ga(),_a=J.delayedCall(.2,xs).pause(),Oa=[pa,`visibilitychange`,function(){var e=fa.innerWidth,t=fa.innerHeight;pa.hidden?(Ea=e,Da=t):(Ea!==e||Da!==t)&&as()},pa,`DOMContentLoaded`,xs,fa,`load`,xs,fa,`resize`,as],uo(Wo),$o.forEach(function(e){return e.enable(0,1)}),o=0;o<Bi.length;o+=3)Ko(Go,Bi[o],Bi[o+1]),Ko(Go,Bi[o],Bi[o+2])}else pa&&pa.addEventListener(`DOMContentLoaded`,function t(){e.enable(),pa.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(Ua=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(xa)||(xa=n)&&setInterval(ns,n),`ignoreMobileResize`in t&&(Na=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(uo(Go)||uo(Wo,t.autoRefreshEvents||`none`),ja=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=ta(e),r=Bi.indexOf(n),i=io(n);~r&&Bi.splice(r,i?6:2),t&&(i?Vi.unshift(fa,t,ha,t,ma,t):Vi.unshift(n,t))},e.clearMatchMedia=function(e){$o.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(fo(e)?ta(e):e).getBoundingClientRect(),i=r[n?Co:wo]*t||0;return n?r.right-i>0&&r.left+i<fa.innerWidth:r.bottom-i>0&&r.top+i<fa.innerHeight},e.positionInViewport=function(e,t,n){fo(e)&&(e=ta(e));var r=e.getBoundingClientRect(),i=r[n?Co:wo],a=t==null?i/2:t in Yo?Yo[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/fa.innerWidth:(r.top+a)/fa.innerHeight},e.killAll=function(e){if($o.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=os.killAll||[];os={},t.forEach(function(e){return e()})}},e}(),Vs.version=`3.15.0`,Vs.saveStyles=function(e){return e?va(e).forEach(function(e){if(e&&e.style){var t=us.indexOf(e);t>=0&&us.splice(t,5),us.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),J.core.getCache(e),La())}}):us},Vs.revert=function(e,t){return ps(!e,t)},Vs.create=function(e,t){return new Vs(e,t)},Vs.refresh=function(e){return e?as(!0):(da||Vs.register())&&xs(!0)},Vs.update=function(e){return++Bi.cache&&Ts(e===!0?2:0)},Vs.clearScrollMemory=ms,Vs.maxScroll=function(e,t){return lo(e,t?$i:ea)},Vs.getScrollFunc=function(e,t){return ra(ta(e),t?$i:ea)},Vs.getById=function(e){return es[e]},Vs.getAll=function(){return $o.filter(function(e){return e.vars.id!==`ScrollSmoother`})},Vs.isScrolling=function(){return!!qa},Vs.snapDirectional=Vo,Vs.addEventListener=function(e,t){var n=os[e]||(os[e]=[]);~n.indexOf(t)||n.push(t)},Vs.removeEventListener=function(e,t){var n=os[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},Vs.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=J.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&po(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return po(a)&&(a=a(),Wo(Vs,`refresh`,function(){return a=t.batchMax()})),va(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(Vs.create(t))}),n},Hs=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Us=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(la.isTouch?` pinch-zoom`:``):`none`,t===ma&&e(ha,n)},Ws={auto:1,scroll:1},Gs=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||J.core.getCache(i),o=Ga(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==ha&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Ws[(s=Po(i)).overflowY]||Ws[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!io(i)&&(Ws[(s=Po(i)).overflowY]||Ws[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Ks=function(e,t,n,r){return la.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Gs,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Wo(pa,la.eventTypes[0],Ys,!1,!0)},onDisable:function(){return Go(pa,la.eventTypes[0],Ys,!0)}})},qs=/(input|label|select|textarea)/i,Ys=function(e){var t=qs.test(e.target.tagName);(t||Js)&&(e._gsapAllow=!0,Js=t)},Xs=function(e){ho(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=ta(e.target)||ma,l=J.core.globals().ScrollSmoother,u=l&&l.get(),d=Ia&&(e.content&&ta(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=ra(c,ea),p=ra(c,$i),m=1,h=(la.isTouch&&fa.visualViewport?fa.visualViewport.scale*fa.visualViewport.width:fa.outerWidth)/fa.innerWidth,g=0,_=po(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Ks(c,e.type,!0,i),x=function(){return y=!1},S=eo,C=eo,w=function(){s=lo(c,ea),C=ya(+!!Ia,s),n&&(S=ya(0,lo(c,$i))),v=gs},T=function(){d._gsap.y=to(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=to(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=to((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Bi.cache,Ts()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&J.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Ia&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=to((fa.visualViewport&&fa.visualViewport.scale||1)/h),D.pause(),e!==m&&Us(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=gs},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Bi.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Hs(p,i,o,lo(c,$i)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Hs(f,i,o,lo(c,ea)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Ia&&D.vars.scrollY>=s||i>=s-1)&&J.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Ga()-g>1e3&&(v=0,g=Ga())},e.onChange=function(e,t,r,i,a){if(gs!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&Ts()},e.onEnable=function(){Us(c,!n&&`x`),Vs.addEventListener(`refresh`,j),Wo(fa,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Us(c,!0),Go(fa,`resize`,j),Vs.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new la(e),o.iOS=Ia,Ia&&!f()&&f(1),Ia&&J.ticker.add(eo),A=o._dc,D=J.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Rs(f,f(),function(){return D.pause()})},onUpdate:Ts,onComplete:A.vars.onComplete}),o},Vs.sort=function(e){if(po(e))return $o.sort(e);var t=fa.pageYOffset||0;return Vs.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+fa.innerHeight}),$o.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},Vs.observe=function(e){return new la(e)},Vs.normalizeScroll=function(e){if(e===void 0)return Ma;if(e===!0&&Ma)return Ma.enable();if(e===!1)Ma&&Ma.kill(),Ma=e;else{var t=e instanceof la?e:Xs(e);return Ma&&Ma.target===t.target&&Ma.kill(),io(t.target)&&(Ma=t),t}},Vs.core={_getVelocityProp:ia,_inputObserver:Ks,_scrollers:Bi,_proxies:Vi,bridge:{ss:function(){qa||ls(`scrollStart`),qa=Ga()},ref:function(){return Sa}}},ro()&&J.registerPlugin(Vs)})),Qs,$s=n((()=>{xi(),Zs(),bi.registerPlugin(Vs),Vs.config({ignoreMobileResize:!0}),Qs=matchMedia(`(prefers-reduced-motion: reduce)`)}));$s();var ec={Karnataka:{title:`A heritage of coffee, with room to explore.`,story:`Coorg and Chikmagalur grow both Arabica and Robusta, while the Baba Budangiri hills are closely linked to the beginnings of coffee cultivation in India. This is a region to explore through its individual estates and growing areas, rather than treating every Karnataka coffee as the same.`,specialty:`Baba Budangiri Arabicas are associated with body, aroma and chocolate-like notes. Elsewhere, different species and processing choices open up a wider range of cup styles. The distinction between a washed Arabica and a natural Robusta matters as much as the state on the label.`,reason:`Start here when comparing coffees for a signature blend or an estate-led offering. Taste samples side by side for sweetness, acidity and body, then choose the one that works in your intended roast and brew.`,ask:`Ask for the growing area, species, process and harvest, and whether the proposed supply is an estate lot or a regional blend.`},Kerala:{title:`A distinctive home for Indian Robusta.`,story:`Wayanad gives Kerala a strong Robusta identity. Its coffee landscape includes mixed farms and shade trees, with coffee grown alongside crops such as pepper. Wayanad Robusta has geographical-indication recognition, tying its identity to this particular place.`,specialty:`The regional strength is Robusta, but quality still depends on cherry selection, processing and drying. For a buyer, it is worth comparing how individual samples deliver weight, texture and balance rather than choosing only by the word “strong”.`,reason:`If you are developing a milk-based coffee, traditional filter blend or espresso blend, include a Kerala Robusta in your sample comparison. Evaluate it in the actual blend and brewing recipe: concentration alone does not tell you whether the finish is pleasant.`,ask:`Ask about washed versus natural processing, grade and cup cleanliness. Request origin documentation if a Wayanad-specific claim is important to your product.`},"Tamil Nadu":{title:`Hill-grown coffees with distinct local identities.`,story:`The Nilgiris, Shevaroys and Anamalais are separate growing landscapes, not interchangeable names. The Shevaroys and Anamalais are known for Arabica, while the Nilgiris produces both Arabica and Robusta. Even within one state, the growing area deserves attention.`,specialty:`High-grown Arabicas are an important part of this region’s identity. That makes Tamil Nadu a useful place to explore differences in aroma, acidity and structure through carefully matched samples. Elevation is useful context, but it is not a quality score or a guaranteed flavour.`,reason:`Look beyond a broad state label when selecting a coffee for a single-origin menu. Comparing the same process and a similar roast across growing areas helps you discover which characteristics you actually prefer.`,ask:`Ask for the specific hill region, estate or producer, variety and processing method. Taste it black first, then in the drink you plan to serve.`},"Andhra Pradesh":{title:`An Eastern Ghats Arabica with a grower story.`,story:`Araku Valley is associated with Arabica grown in the Eastern Ghats and with the work of tribal farming communities. Its regional identity has received geographical-indication recognition, and its coffees have attracted attention in specialty markets.`,specialty:`Araku offers a different place of origin to explore alongside the established southern coffee districts. The most useful story connects a named grower or producer group with a documented harvest and process, then lets the sample explain the cup.`,reason:`Consider this origin when you want a coffee with a clearly explained regional identity. Compare samples for sweetness, aroma and finish; ask how the lot was produced rather than assuming every Araku coffee shares one tasting profile.`,ask:`Ask for the village or producer group, process and traceability records. Organic cultivation practices and certified-organic status are different: request certification if you need that claim.`},Odisha:{title:`Koraput: another perspective on Indian coffee.`,story:`Koraput lies in southern Odisha’s Eastern Ghats and is known for its tribal coffee-growing communities. Arabica cultivation gives this developing origin a place in India’s wider coffee landscape, beyond the better-known southern estates.`,specialty:`Its appeal is the opportunity to discover a less familiar origin through identifiable producers and individual lots. Let the coffee’s processing, preparation and sample quality lead the decision; a newer origin need not fit an established regional flavour stereotype.`,reason:`Explore Koraput when building a discovery menu or seeking a more distinctive sourcing story. A transparent account of where the coffee came from is more useful to your customers than an unsupported promise of rarity or superior quality.`,ask:`Ask for the producer or collection group, harvest, processing and available volume. Confirm repeat-supply plans and evaluate a representative sample before building a regular offering around the lot.`}},tc=`1.3.27`;function nc(e,t,n){return Math.max(e,Math.min(t,n))}function rc(e,t,n){return(1-n)*e+n*t}function ic(e,t,n,r){return rc(e,t,1-Math.exp(-n*r))}function ac(e,t){return(e%t+t)%t}var oc=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=nc(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=ic(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function sc(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var cc=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=sc(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lc=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},uc=100/6,dc={passive:!1};function fc(e,t){return e===1?uc:e===2?t:1}var pc=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new lc;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,dc),this.element.addEventListener(`touchstart`,this.onTouchStart,dc),this.element.addEventListener(`touchmove`,this.onTouchMove,dc),this.element.addEventListener(`touchend`,this.onTouchEnd,dc)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,dc),this.element.removeEventListener(`touchstart`,this.onTouchStart,dc),this.element.removeEventListener(`touchmove`,this.onTouchMove,dc),this.element.removeEventListener(`touchend`,this.onTouchEnd,dc)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=fc(r,this.window.width),a=fc(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},mc=e=>Math.min(1,1.001-2**(-10*e)),hc=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new oc;emitter=new lc;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=tc,window.lenis||(window.lenis={}),window.lenis.version=tc,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),typeof s==`number`&&typeof c!=`function`?c=mc:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new cc(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new pc(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty(`overflow`):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty(`overflow`,`clip`):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof Element&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=nc(0,f,this.limit);f===this.targetScroll?(c?.(this),l?.(this)):(this.userData=d??{},n?(this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()})):(i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=mc:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})))}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?ac(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},gc,_c;function vc(e,t={}){if(!e)return;let n=t.block===`center`?-innerHeight*.32+84:0,r=Qs.matches||t.behavior===`auto`;if(gc){let t=()=>gc.scrollTo(e,{offset:n,immediate:r,duration:.75});gc.isStopped?_c=t:t()}else e.scrollIntoView({...t,behavior:r?`instant`:`smooth`})}function yc(e){let t=new AbortController,n=t.signal;if(e&&!Qs.matches){let e=matchMedia(`(pointer: coarse)`).matches;gc=new hc({lerp:e?1:.14,smoothWheel:!e,syncTouch:!1,autoRaf:!1,prevent:e=>!!e.closest(`dialog, #drawer`)}),window.sbLenis=gc,gc.on(`scroll`,Vs.update)}let r=e=>gc?.raf(e*1e3);gc&&(bi.ticker.add(r),bi.ticker.lagSmoothing(0));let i=()=>{let e=!!document.querySelector(`dialog[open], #drawer.is-open`);if(document.documentElement.classList.toggle(`sb-scroll-locked`,e),e)gc?.stop();else{gc?.start();let e=_c;_c=null,e?.()}},a=new MutationObserver(i);return[`dossier`,`drawer`].forEach(e=>{let t=document.getElementById(e);t&&a.observe(t,{attributes:!0,attributeFilter:[`open`,`class`]})}),i(),document.addEventListener(`click`,e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target.closest(`a[href^="#"]`);if(!t||t.hasAttribute(`download`))return;let n=t.getAttribute(`href`),r;try{r=document.getElementById(decodeURIComponent(n.slice(1)))}catch{return}!r||n.length<2||(e.preventDefault(),location.hash!==n&&history.pushState(null,``,n),vc(r),r.matches(`a,button,input,select,textarea,[tabindex]`)||r.setAttribute(`tabindex`,`-1`),r.focus({preventScroll:!0}))},{signal:n}),()=>{t.abort(),a.disconnect(),bi.ticker.remove(r),gc?.off(`scroll`,Vs.update),gc?.destroy(),gc=null,_c=null,delete window.sbLenis,document.documentElement.classList.remove(`sb-scroll-locked`)}}$s();var bc={"/coffee-cherries.webp":`assets/source/coffee-cherries.webp`,"/origin-hills.webp":`assets/source/origin-hills.webp`,"/roastery.webp":`assets/source/roastery.webp`,"/brand-transparent.png":`assets/source/brand-transparent.png`},xc=new Set([`/beans-4048.webp`,`/beans-4049.webp`,`/beans-4054.webp`,`/beans-4057.webp`,`/beans-4062.webp`,`/roasted-sample.webp`,`/coffee-hero.webp`,`/filter-arabica-concept.webp`,`/filter-arabica-70.webp`,`/filter-arabica-80.webp`,`/filter-robusta-concept.webp`,`/filter-robusta-60.webp`,`/filter-robusta-70.webp`,`/filter-robusta-80.webp`,`/filter-ashwagandha.webp`,`/filter-lions-mane.webp`,`/filter-sea-moss.webp`,`/filter-shilajit.webp`]),Sc=e=>xc.has(e)?`assets/products`+e:bc[e]||e,Cc=[{id:`arabica-cherry-a`,name:`Arabica Unwashed`,category:`Green coffee`,species:`Arabica`,grade:`AAA · AA · A · B · C · PB`,image:`assets/photography/green-arabica-unwashed-reference-960.webp`,description:`Unwashed Indian Arabica. Explore six green-bean grades and build a lot specification around your roast and cup.`,process:`Unwashed, green beans`,origin:`India, region on request`,notes:`Request a sample for cup evaluation`,packaging:`Discuss bag size and liner requirements`,moq:`On enquiry`},{id:`robusta-cherry-aaa`,name:`Robusta Cherry`,category:`Green coffee`,species:`Robusta`,grade:`AAA · AA · A · B · C · PB`,image:`assets/photography/green-robusta-clean-960.webp`,description:`Green Robusta for roasting, blending and commercial coffee applications.`,process:`Confirm lot specification`,origin:`India, region on request`,notes:`Request a sample for cup evaluation`,packaging:`Discuss bag size and liner requirements`,moq:`On enquiry`},{id:`arabica-parchment-c`,name:`Arabica Washed`,category:`Green coffee`,species:`Arabica`,grade:`AAA · AA · A · B · PB · C`,image:`assets/photography/green-arabica-washed-clean-960.webp`,description:`Washed Indian Arabica, available in PL AAA, AA, A, B, PB and C grades. Select a grade and request a representative sample.`,process:`Washed, green beans`,origin:`India, region on request`,notes:`Request a sample for cup evaluation`,packaging:`Discuss bag size and liner requirements`,moq:`On enquiry`},{id:`roasted-coffee`,name:`Roasted Coffee Beans`,category:`Roasted coffee`,species:`Arabica / Robusta`,grade:`AAA · AA · A · B · C · PB`,image:`/coffee-hero.webp`,description:`Roast profiles developed for cafés, hospitality and retail coffee brands.`,process:`Medium-dark roast`,origin:`India, to specification`,notes:`Profile developed to your brief`,packaging:`Retail or bulk requirements`,moq:`On enquiry`},{id:`ground-coffee`,name:`Ground Coffee`,category:`Ground coffee`,species:`Arabica / Robusta / Blend`,grade:`To specification`,image:`/filter-arabica-concept.webp`,description:`Coffee ground for your brewing method, from espresso to filter.`,process:`Grind size to brief`,origin:`India, to specification`,notes:`Discuss strength, body and brew method`,packaging:`Retail or bulk requirements`,moq:`On enquiry`},{id:`filter-robusta-pure`,name:`Robusta Pure Filter Coffee`,category:`Filter coffee`,species:`Robusta`,grade:`100% Robusta coffee`,image:`/filter-robusta-concept.webp`,description:`Robusta Cherry coffee, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-robusta-80`,name:`Robusta Filter Coffee 80:20`,category:`Filter coffee`,species:`Robusta`,grade:`80% Robusta · 20% chicory`,image:`/filter-robusta-80.webp`,description:`Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-robusta-70`,name:`Robusta Filter Coffee 70:30`,category:`Filter coffee`,species:`Robusta`,grade:`70% Robusta · 30% chicory`,image:`/filter-robusta-70.webp`,description:`Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-robusta-60`,name:`Robusta Filter Coffee 60:40`,category:`Filter coffee`,species:`Robusta`,grade:`60% Robusta · 40% chicory`,image:`/filter-robusta-60.webp`,description:`Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-arabica-pure`,name:`Arabica Pure Filter Coffee`,category:`Filter coffee`,species:`Arabica`,grade:`100% Arabica coffee`,image:`/filter-arabica-concept.webp`,description:`Arabica Unwashed coffee, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-arabica-80`,name:`Arabica Filter Coffee 80:20`,category:`Filter coffee`,species:`Arabica`,grade:`80% Arabica · 20% chicory`,image:`/filter-arabica-80.webp`,description:`Arabica Unwashed coffee blended with chicory, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-arabica-70`,name:`Arabica Filter Coffee 70:30`,category:`Filter coffee`,species:`Arabica`,grade:`70% Arabica · 30% chicory`,image:`/filter-arabica-70.webp`,description:`Arabica Unwashed coffee blended with chicory, ground for the traditional filter coffee ritual.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-lions-mane`,name:`Lion’s Mane Filter Coffee`,category:`Filter coffee`,species:`Coffee blend`,grade:`10% lion’s mane`,image:`/filter-lions-mane.webp`,description:`Lion’s Mane Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-shilajit`,name:`Shilajit Filter Coffee`,category:`Filter coffee`,species:`Coffee blend`,grade:`8% shilajit`,image:`/filter-shilajit.webp`,description:`Shilajit Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-sea-moss`,name:`Sea Moss Filter Coffee`,category:`Filter coffee`,species:`Coffee blend`,grade:`10% sea moss`,image:`/filter-sea-moss.webp`,description:`Sea Moss Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`filter-ashwagandha`,name:`Ashwagandha Filter Coffee`,category:`Filter coffee`,species:`Coffee blend`,grade:`Ashwagandha blend`,image:`/filter-ashwagandha.webp`,description:`Ashwagandha Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.`,process:`Ground for filter brewing`,origin:`Coffee origin: India`,notes:`Evaluate a sample using your preferred brew method`,packaging:`Discuss retail and bulk formats`,moq:`On enquiry`},{id:`custom-blends`,name:`Your signature blend`,category:`Custom blends`,species:`Blend`,grade:`To specification`,image:`/roasted-sample.webp`,description:`Start with a flavour brief. We build a coffee that belongs to your brand.`,process:`Custom development enquiry`,origin:`To specification`,notes:`Flavour, strength and application led`,packaging:`Custom requirements`,moq:`On enquiry`}],wc=[{key:`green`,name:`Green coffee beans`,kicker:`Selected at origin`,lead:`Unwashed and washed Indian green beans, graded and shipped to roasters, traders and private-label producers. Sample first, specification agreed per lot.`,art:`assets/photography/category-green-1120.webp`,match:[`Green coffee`]},{key:`roasted`,name:`Roasted coffee`,kicker:`Roasted for character`,lead:`Whole bean and ground, roasted to a profile agreed against your own sample. Roast date, profile and shelf life confirmed on every despatch.`,art:`assets/photography/category-roasted-1120.webp`,match:[`Roasted coffee`,`Ground coffee`]},{key:`filter`,name:`Filter coffee`,kicker:`Crafted for the cup`,lead:`South Indian filter coffee — pure, chicory blends and herbal additions, ground to your brewing specification and packed to your format.`,art:`assets/photography/category-filter-1120.webp`,match:[`Filter coffee`]}],Tc={};wc.forEach(e=>Tc[e.key]=e);var Ec={};wc.forEach(e=>e.match.forEach(t=>Ec[t]=e.key)),Cc.forEach(e=>{e.group=Ec[e.category]||`custom`});var Dc={green:`#green-coffee`,roasted:`#roasted-coffee`,filter:`#filter-coffee`},Oc={"#green-coffee":`green`,"#roasted-coffee":`roasted`,"#filter-coffee":`filter`},kc=new Set([`filter-lions-mane`,`filter-shilajit`,`filter-ashwagandha`,`filter-sea-moss`]),Ac={Karnataka:`Coorg, Chikmagalur, Baba Budangiri`,Kerala:`Wayanad and the Western Ghats`,"Tamil Nadu":`Nilgiris, Shevaroys, Anamalais`,"Andhra Pradesh":`Araku Valley, Eastern Ghats`,Odisha:`Koraput, Eastern Ghats`},jc=[[`Natural`,`Dried with the fruit intact. Start here when you want fruit expression and body.`],[`Washed`,`Fruit removed and washed before drying. A cleaner starting point when you want clarity.`],[`Honey`,`Some mucilage left on during drying. Ask which specific method was used for the lot.`]],Y=e=>document.querySelector(e),Mc=e=>[...document.querySelectorAll(e)],Nc=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Pc=e=>`https://wa.me/918111888667?text=`+encodeURIComponent(e),Fc=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,X={group:null,species:`All species`,q:``,region:`Karnataka`,step:0,req:{origin:``,form:``,variety:``,process:``}};window.__watch=()=>Mc(`[data-reveal]`).forEach(e=>e.classList.add(`seen`)),window.__watch();var Ic=Y(`#masthead`),Lc=Y(`#wafloat`);function Rc(){let e=Y(`#sb-origin`);return!e||!document.documentElement.classList.contains(`sb-on`)?0:e.offsetTop+e.offsetHeight-(Y(`#sb-stage`)?.clientHeight||innerHeight)}var zc=[],Bc=0,Vc=!0,Hc=!0;function Uc(){let e=scrollY>Bc+24;Ic.classList.toggle(`stuck`,e);let t=scrollY+42;Ic.classList.toggle(`on-dark`,e&&zc.some(e=>t>=e[0]&&t<e[1])),Lc.classList.toggle(`show`,scrollY>Bc+innerHeight*.25)}function Wc(){zc=Mc(`[data-dark]`).map(e=>{let t=e.getBoundingClientRect();return[t.top+scrollY,t.bottom+scrollY]}),Bc=Rc(),Hc=!1,Vc=!0}var Gc=()=>{Hc=!0},Kc=new ResizeObserver(Gc);[document.body,Y(`#sb-origin`),Y(`#range`),Y(`#origins`)].filter(Boolean).forEach(e=>Kc.observe(e)),Vs.addEventListener(`refresh`,Gc),addEventListener(`resize`,Gc,{passive:!0}),addEventListener(`load`,Gc),addEventListener(`scroll`,()=>{Vc=!0},{passive:!0}),bi.ticker.add(()=>{document.hidden||(Hc&&Wc(),Vc&&(Vc=!1,Uc()))}),Wc();var qc=`Herbal blends`;function Jc(){return[`All species`,`Arabica`,`Robusta`].concat(X.group===`filter`?[qc]:[])}function Yc(){return X.group?Cc.filter(e=>{if(e.group!==X.group)return!1;if(X.species!==`All species`){if(X.species===qc){if(!kc.has(e.id))return!1}else if(!e.species.includes(X.species))return!1}return`${e.name} ${e.species} ${e.category} ${e.grade} ${e.description}`.toLowerCase().includes(X.q.toLowerCase())}):[]}var Xc=e=>e.grade===`To specification`?`Specified to your brief`:e.grade,Zc=e=>{let t=(e.process||``).split(`,`)[0].trim(),n=t&&!/^(confirm|custom|grind size)/i.test(t)?t:``;return[e.species,n].filter(Boolean).join(` · `)},Qc=e=>e.category===`Green coffee`?e.name+`, illustrative green coffee photograph`:e.name+`, illustrative product photograph`,$c=Y(`#range`);function el(){Y(`#range-nav`).innerHTML=wc.map(e=>`<a href="${Dc[e.key]}" class="chip${X.group===e.key?` is-on`:``}" data-group="${e.key}"
        aria-current="${X.group===e.key?`true`:`false`}">${Nc(e.name)}</a>`).join(``)}function tl(){let e=Jc();e.includes(X.species)||(X.species=`All species`),Y(`#species`).innerHTML=`<span>Variety</span>`+e.map(e=>`<button class="chip${X.species===e?` is-on`:``}" data-sp="${Nc(e)}">${Nc(e)}</button>`).join(``)}function nl(e,t){return`
    <article class="card" data-reveal style="--rd:${Math.min(t,5)*60}ms">
      <span class="card__img"><img src="${Sc(e.image)}" ${e.category===`Green coffee`?`srcset="${e.image.replace(`-960`,`-480`)} 480w, ${e.image} 960w" sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 30vw" width="1122" height="1402"`:``} alt="${Nc(Qc(e))}" loading="lazy" decoding="async"></span>
      <span class="card__meta">${Nc(Zc(e))}</span>
      <h3>${Nc(e.name)}</h3>
      <span class="card__grade">${Nc(Xc(e))}</span>
      <button class="card__link" data-open="${e.id}">View specification
        <svg class="icon" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><use href="#i-ne"/></svg></button>
    </article>`}function rl(){let e=Yc();Y(`#empty`).hidden=e.length>0;let t=X.group?Cc.filter(e=>e.group===X.group).length:0;if(Y(`#range-count`).textContent=e.length===t?t===1?`One coffee in this category`:t+` coffees in this category`:e.length+` of `+t+` shown`,X.group===`filter`){let t=e.filter(e=>!kc.has(e.id)),n=e.filter(e=>kc.has(e.id));Y(`#grid`).innerHTML=t.map(nl).join(``);let r=Y(`#functional`);r.hidden=n.length===0,Y(`#functional-grid`).innerHTML=n.map(nl).join(``)}else Y(`#grid`).innerHTML=e.map(nl).join(``),Y(`#functional`).hidden=!0;window.__watch(),document.dispatchEvent(new CustomEvent(`sb:catalogue-updated`))}function il(e,t){let n=Tc[e];if(!n)return;t||={};let r=Y(`#sb-cards`);if(r&&!Fc()&&(r.classList.add(`is-choosing`),r.querySelectorAll(`.sb-card`).forEach(t=>t.classList.toggle(`is-chosen`,t.dataset.cat===e))),$c.classList.remove(`is-entering`),$c.offsetWidth,Fc()||$c.classList.add(`is-entering`),X.group!==e){X.q=``;let e=Y(`#q`);e&&(e.value=``),X.species=`All species`}X.group=e,$c.hidden=!1,Y(`#range-kicker`).textContent=n.kicker,Y(`#range-h`).textContent=n.name,Y(`#range-lead`).textContent=n.lead;let i=Y(`#range-art`);i.getAttribute(`src`)!==n.art&&(i.src=n.art),el(),tl(),rl(),document.title=n.name+` — Stephen Blake, Indian coffee exporters`,window.sbLenis&&window.sbLenis.resize(),window.ScrollTrigger&&window.ScrollTrigger.refresh(),Wc(),t.push!==!1&&location.hash!==Dc[e]&&history.pushState({group:e},``,Dc[e]),t.scroll!==!1&&requestAnimationFrame(()=>vc($c,{behavior:Fc()?`auto`:`smooth`}))}function al(e){X.group=null,$c.hidden=!0,$c.classList.remove(`is-entering`);let t=Y(`#sb-cards`);t&&(t.classList.remove(`is-choosing`),t.querySelectorAll(`.sb-card`).forEach(e=>e.classList.remove(`is-chosen`))),document.title=`Stephen Blake — Indian Coffee. Grown, graded, shipped.`,e!==!1&&location.hash&&history.pushState({},``,location.pathname+location.search),window.sbLenis?.resize(),window.ScrollTrigger?.refresh(),Wc(),e!==!1&&ol()}function ol(){let e=Y(`#sb-origin`);if(document.documentElement.classList.contains(`sb-on`)&&e){let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sb-story`))||.86,n=e.offsetTop+(e.offsetHeight-innerHeight)*t;window.sbLenis?window.sbLenis.scrollTo(n,{duration:Fc()?0:1.3,force:!0}):scrollTo({top:n,behavior:Fc()?`auto`:`smooth`})}else vc(Y(`#coffees`),{behavior:Fc()?`auto`:`smooth`})}window.sbSetCategory=e=>il(e),document.addEventListener(`click`,e=>{if(e.target.closest(`#range-back`)){e.preventDefault(),al();return}let t=e.target.closest(`[data-cat],[data-group]`);t?(e.preventDefault(),il(t.dataset.cat||t.dataset.group)):e.target.closest(`a[href="#coffees"]`)&&(e.preventDefault(),ol())},!0),Y(`#species`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-sp]`);t&&(X.species=t.dataset.sp,tl(),rl())}),Y(`#q`).addEventListener(`input`,e=>{X.q=e.target.value,rl()}),Y(`#reset`).addEventListener(`click`,()=>{X.q=``,Y(`#q`).value=``,X.species=`All species`,tl(),rl()});function sl(e){let t=Oc[location.hash];if(t)il(t,{push:!1,scroll:e});else if(X.group&&al(!1),e){if(location.hash===`#coffees`||!location.hash)ol();else{let e;try{e=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{}e&&vc(e)}}}addEventListener(`popstate`,()=>sl(!0));var cl=Y(`#dossier`),ll=null;function ul(e,t){let n=Cc.find(t=>t.id===e);if(!n)return;let r=n.category===`Filter coffee`,i=n.id===`roasted-coffee`,a=n.id===`arabica-parchment-c`,o=r||n.grade===`To specification`?[]:n.grade.split(` · `);ll={p:n,isFilter:r,roasted:i,washed:a,grades:o,grade:o[0]||``,origin:`India, any region`,species:i?`Arabica`:n.species,wantSample:!!t},dl(),cl.open||cl.showModal(),document.dispatchEvent(new CustomEvent(`sb:product-opened`)),cl.querySelector(`.dossier__body`).scrollTop=0}function dl(){let e=ll.p,t=e.image,n=e.category===`Green coffee`?`Illustrative image · Request a representative lot sample`:`Representative product image`,r=ll.isFilter?e.grade:ll.roasted?`Medium-dark roast`:ll.washed?`Washed, green beans`:e.category===`Green coffee`?`Unwashed, green beans`:e.process,i=ll.roasted?`Ask for roast date, roast profile, whole-bean specification and shelf life.`:ll.isFilter?`Ask for the full ingredient declaration and grind specification.`:`Ask for crop year, moisture, screen size, defect count and lot traceability.`;cl.innerHTML=`
  <button class="dclose" data-act="close" aria-label="Close"><svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-close"/></svg></button>
  <div class="dossier">
    <div class="dossier__visual">
      <img src="${Sc(t)}" ${e.category===`Green coffee`?`srcset="${t.replace(`-960`,`-480`)} 480w, ${t} 960w" sizes="(max-width: 860px) 94vw, 45vw" width="1122" height="1402"`:``} alt="${Nc(e.name+`, `+n)}" decoding="async">
      <p class="dossier__cap">${Nc(n)}</p>
    </div>
    <div class="dossier__body">
      <span class="data">${Nc(e.category)} — ${Nc(ll.roasted?`whole bean`:e.species)}</span>
      <h2 id="dossier-title">${Nc(e.name)}</h2>
      <p class="lead" style="font-size:1rem">${Nc(e.description)}</p>

      ${ll.roasted?`<div class="dsec"><h4>Choose the coffee</h4><div class="chips">
        ${[`Arabica`,`Robusta`].map(e=>`<button class="chip" data-species="${e}" aria-pressed="${ll.species===e}">${e}</button>`).join(``)}
      </div></div>`:``}

      ${ll.grades.length?`<div class="dsec"><h4>Grades listed for this coffee</h4><div class="chips">
        ${ll.grades.map(e=>`<button class="chip" data-grade="${Nc(e)}" aria-pressed="${ll.grade===e}">${ll.washed?`PL `:``}${Nc(e)}</button>`).join(``)}
      </div>
      <p class="hint">${ll.grade===`PB`?`Peaberry is a distinct bean shape. Ask for the screen and sorting specification and cup it on your own roast.`:`Ask for the screen size, defect tolerance and a representative sample for this grade, then compare it against your buying specification.`}</p>
      <p class="hint">Grade names describe the selection. Final quality and availability are agreed against a specific lot.</p></div>`:``}

      <div class="dsec"><h4>Origin preference</h4><div class="chips">
        ${[`India, any region`,`Karnataka`,`Kerala`,`Tamil Nadu`,`Andhra Pradesh`,`Odisha`].map(e=>`<button class="chip" data-origin="${Nc(e)}" aria-pressed="${ll.origin===e}">${Nc(e)}</button>`).join(``)}
      </div>
      <p class="hint">These are sourcing preferences, not a live availability list. We confirm the region and estate for the lot we propose.</p></div>

      <div class="dsec"><h4>What we'll confirm for you</h4>
        <dl class="specs">
          <dt>Coffee</dt><dd>${Nc(ll.roasted?ll.species:e.species)}</dd>
          <dt>Format</dt><dd>${Nc(r)}</dd>
          <dt>Origin</dt><dd>${Nc(e.origin)}</dd>
          <dt>Sample</dt><dd>${Nc(e.notes)}</dd>
          <dt>Packaging</dt><dd>${Nc(e.packaging)}</dd>
          <dt>Minimum order</dt><dd>${Nc(e.moq)}</dd>
          <dt>Export</dt><dd>Send destination port, quantity and preferred Incoterm.</dd>
          <dt>${ll.roasted?`Roast &amp; freshness`:`Lot details`}</dt><dd>${i}</dd>
        </dl>
      </div>

      <div class="dossier__acts">
        <button class="btn" data-act="request">Take this into a request <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg></button>
        <a class="btn btn--ghost" data-act="wa" href="#" target="_blank" rel="noreferrer">Ask on WhatsApp</a>
      </div>
    </div>
  </div>`,cl.setAttribute(`aria-labelledby`,`dossier-title`);let a=[e.name,ll.grade&&(ll.washed?`PL `:`Grade `)+ll.grade,ll.roasted&&ll.species,ll.origin].filter(Boolean).join(`, `);cl.querySelector(`[data-act="wa"]`).href=Pc(`Hello Stephen Blake, I would like to ask about `+a+`.`)}cl.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-grade]`),r=t.closest(`[data-species]`),i=t.closest(`[data-origin]`);if(n||r||i){let e=cl.querySelector(`.dossier__body`).scrollTop;n&&(ll.grade=n.dataset.grade),r&&(ll.species=r.dataset.species),i&&(ll.origin=i.dataset.origin),dl();let t=n?`data-grade`:r?`data-species`:`data-origin`,a=n?ll.grade:r?ll.species:ll.origin;[...cl.querySelectorAll(`[${t}]`)].find(e=>e.getAttribute(t)===a)?.focus({preventScroll:!0}),cl.querySelector(`.dossier__body`).scrollTop=e;return}let a=t.closest(`[data-act]`);if(a){if(a.dataset.act===`close`)cl.close();else if(a.dataset.act===`request`){let e=ll.p;X.req.form=e.category===`Custom blends`?`Custom blends`:e.category,X.req.variety=ll.roasted?ll.species:[`Arabica`,`Robusta`].includes(e.species)?e.species:kc.has(e.id)?`Herbal blend`:``,X.req.origin=ll.origin===`India, any region`?``:ll.origin,X.req.process=e.category===`Green coffee`?ll.washed?`Washed`:`Natural`:``,X.req.coffee=e.name,Y(`input[name="grade"]`).value=ll.grade?(ll.washed?`PL `:``)+ll.grade:``,ll.wantSample&&(Y(`#f-kind`).value=`Sample request`),cl.close(),pl(),gl(),yl(4),vc(Y(`#request`),{behavior:Fc()?`auto`:`smooth`})}}}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-open]`);if(t)return ul(t.dataset.open,!1);let n=e.target.closest(`[data-sample]`);if(n)return ul(n.dataset.sample,!0)});function fl(){Y(`#regions`).innerHTML=Object.keys(Ac).map(e=>`<button class="chip" data-region="${e}" aria-pressed="${X.region===e}">${e}</button>`).join(``),Y(`#region-name`).textContent=X.region,Y(`#region-areas`).textContent=Ac[X.region].replace(/, /g,` · `);let e=ec[X.region];Y(`#region-title`).textContent=e.title,Y(`#region-note`).textContent=e.story,Y(`#region-specialty`).textContent=e.specialty,Y(`#region-reason`).textContent=e.reason,Y(`#region-ask`).textContent=e.ask,window.sbLenis?.resize(),window.ScrollTrigger?.refresh(),Y(`#region-badge`).textContent=X.region,Wc(),Y(`#region-cta`).firstChild.textContent=`Request coffee from `+X.region+` `}Y(`#regions`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-region]`);t&&(X.region=t.dataset.region,fl(),[...Y(`#regions`).querySelectorAll(`button`)].find(e=>e.dataset.region===X.region)?.focus({preventScroll:!0}))}),Y(`#region-cta`).addEventListener(`click`,()=>{X.req.origin=X.region,gl(),yl(1)});function pl(){Y(`#proc`).innerHTML=jc.map(([e,t])=>{let n=X.req.process===e;return`<button data-proc="${e}" class="${n?`is-on`:``}" aria-pressed="${n}" data-reveal>
      <h3>${e}</h3><p>${t}</p>
      <span class="state">${n?`In your request`:`Add to my request`}
        <svg class="icon" viewBox="0 0 20 20" width="15" height="15"><use href="#i-${n?`check`:`ne`}"/></svg></span>
    </button>`}).join(``),window.__watch()}Y(`#proc`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-proc]`);t&&(X.req.process=X.req.process===t.dataset.proc?``:t.dataset.proc,pl(),gl())}),Y(`#pl-cta`).addEventListener(`click`,()=>{X.req.coffee=``,Y(`input[name="grade"]`).value=``,X.req.form=`Custom blends`,Y(`#f-pl`).value=`Yes`,Y(`#f-kind`).value=`Private label enquiry`,gl(),yl(2)});var ml=[`Origin`,`Coffee`,`Variety`,`Process`,`Volume`,`Your details`],hl={origin:[[``,`Open to recommendation`,`We suggest a region for your brief`],[`Karnataka`,`Karnataka`,`Coorg, Chikmagalur, Baba Budangiri`],[`Kerala`,`Kerala`,`Wayanad and the Western Ghats`],[`Tamil Nadu`,`Tamil Nadu`,`Nilgiris, Shevaroys, Anamalais`],[`Andhra Pradesh`,`Andhra Pradesh`,`Araku Valley, Eastern Ghats`],[`Odisha`,`Odisha`,`Koraput, Eastern Ghats`]],form:[[`Green coffee`,`Green coffee`,`For your own roastery`,`/beans-4054.webp`],[`Roasted coffee`,`Roasted beans`,`Profile to your brief`,`/coffee-hero.webp`],[`Ground coffee`,`Ground coffee`,`Grind to your brew method`,`/filter-arabica-concept.webp`],[`Filter coffee`,`Filter coffee`,`Pure, chicory and herbal blends`,`/filter-robusta-80.webp`],[`Custom blends`,`Custom / private label`,`Built around your brand`,`/roasted-sample.webp`]],variety:[[``,`Open to recommendation`,`Tell us the cup you want and we will propose`],[`Arabica`,`Arabica`,`Aroma and acidity`],[`Robusta`,`Robusta`,`Body, strength and crema`],[`Blend`,`Blend`,`Arabica and Robusta to a ratio`],[`Herbal blend`,`Herbal blend`,`Lion’s mane, shilajit, sea moss or ashwagandha`]],process:[[``,`Open to recommendation`,`We propose a process for your brief`],[`Natural`,`Natural`,`Dried with the fruit intact`],[`Washed`,`Washed`,`Fruit removed and washed before drying`],[`Honey`,`Honey`,`Some mucilage left on during drying`],[`Experimental process enquiry`,`Experimental`,`Ask and we will confirm feasibility`]]};function gl(){let e=(e,[t,n,r,i])=>{let a=X.req[e]===t;return i?`<button class="pick pick--photo" data-pick="${e}" data-val="${Nc(t)}" aria-pressed="${a}">
      <img src="${Sc(i)}" alt="" loading="lazy"><b>${Nc(n)}</b><span>${Nc(r)}</span></button>`:`<button class="pick" data-pick="${e}" data-val="${Nc(t)}" aria-pressed="${a}">
      <span class="pick__tick"><svg class="icon" viewBox="0 0 20 20" width="12" height="12"><use href="#i-check"/></svg></span>
      <strong>${Nc(n)}</strong><small>${Nc(r)}</small></button>`};Y(`#p-origin`).innerHTML=hl.origin.map(t=>e(`origin`,t)).join(``),Y(`#p-form`).innerHTML=hl.form.map(t=>e(`form`,t)).join(``),Y(`#p-variety`).innerHTML=hl.variety.map(t=>e(`variety`,t)).join(``),Y(`#p-process`).innerHTML=hl.process.map(t=>e(`process`,t)).join(``),vl(),xl(),wl()}var _l;document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-pick]`);if(t){if(clearTimeout(_l),t.dataset.pick===`form`&&X.req.form!==t.dataset.val&&(X.req.coffee=``,Y(`input[name="grade"]`).value=``),X.req[t.dataset.pick]=t.dataset.val,t.dataset.pick===`process`&&pl(),t.dataset.pick===`origin`&&t.dataset.val&&(X.region=t.dataset.val,fl()),gl(),Fc())yl(X.step+1);else{let e=X.step+1;_l=setTimeout(()=>yl(e),260)}}});function vl(){Y(`#rail`).innerHTML=ml.map((e,t)=>`<button data-go="${t}" class="${t===X.step?`now`:t<X.step?`done`:``}">${t+1}. ${e}</button>`).join(``)}Y(`#rail`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-go]`);t&&yl(+t.dataset.go)});function yl(e){clearTimeout(_l),X.step=Math.max(0,Math.min(ml.length-1,e)),Mc(`.flow__panel`).forEach(e=>e.classList.toggle(`on`,+e.dataset.step===X.step)),Y(`#flow-back`).hidden=X.step===0,Y(`#flow-skip`).hidden=X.step>3,Y(`#flow-next`).innerHTML=X.step===ml.length-1?`Prepare my request <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg>`:`Continue <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg>`,vl(),xl(),wl()}Y(`#flow-back`).addEventListener(`click`,()=>yl(X.step-1)),Y(`#flow-skip`).addEventListener(`click`,()=>yl(X.step+1));function bl(){let e=e=>{let t=Y(`[name="${e}"]`);return t?t.value.trim():``},t=[];return X.req.coffee&&t.push([`Coffee`,X.req.coffee]),X.req.form&&t.push([`Form`,X.req.form]),X.req.variety&&t.push([`Variety`,X.req.variety]),e(`grade`)&&t.push([`Grade`,e(`grade`)]),X.req.process&&t.push([`Process`,X.req.process]),t.push([`Origin`,X.req.origin||`Open to recommendation`]),e(`amount`)&&t.push([`Quantity`,e(`amount`)+` `+e(`unit`)]),e(`country`)&&t.push([`Destination`,[e(`city`),e(`country`)].filter(Boolean).join(`, `)]),e(`incoterm`)&&e(`incoterm`)!==`Discuss with sales`&&t.push([`Incoterm`,e(`incoterm`)]),e(`packaging`)&&t.push([`Packaging`,e(`packaging`)]),e(`privateLabel`)&&e(`privateLabel`)!==`No`&&t.push([`Private label`,e(`privateLabel`)]),e(`sourcing`)&&e(`sourcing`)!==`Standard commercial specification`&&t.push([`Sourcing`,e(`sourcing`)]),e(`kind`)&&t.push([`Enquiry type`,e(`kind`)]),e(`requirements`)&&t.push([`Additional requirements`,e(`requirements`)]),t}function xl(){let e=bl();Y(`#summary-list`).innerHTML=e.map(([e,t])=>`<dt>${e}</dt><dd>${Nc(t)}</dd>`).join(``),Y(`#summary`).hidden=e.length===0}function Sl(){let e=bl();for(let[t,n]of[[`name`,`Name`],[`company`,`Company`],[`email`,`Email`],[`phone`,`Phone / WhatsApp`]]){let r=Y(`[name="${t}"]`)?.value.trim();r&&e.push([n,r])}return e}function Cl(){let e=Y(`#status`);e.dataset.kind===`ok`&&(e.hidden=!0,e.textContent=``,delete e.dataset.kind)}function wl(){Cl();let e=Sl(),t=e.length?`Hello Stephen Blake. I would like to request coffee — `+e.map(([e,t])=>`${e}: ${t}`).join(`, `)+`.`:`Hello Stephen Blake. I would like to discuss a coffee requirement.`;[`#wa-main`,`#wa-flow`,`#wafloat`].forEach(e=>{let n=Y(e);n&&(n.href=Pc(t))})}Y(`.flow`).addEventListener(`input`,()=>{xl(),wl()}),Y(`#flow-next`).addEventListener(`click`,()=>{if(X.step<ml.length-1)return yl(X.step+1);let e=e=>(Y(`[name="${e}"]`)?.value||``).trim(),t=Y(`#status`);if(e(`website`))return;let n=[[`name`,`your name`],[`company`,`your company`],[`email`,`your email`],[`country`,`a destination country`],[`amount`,`a quantity`]].filter(([t])=>!e(t)),r=e(`email`)&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e(`email`)),i=e(`amount`)&&(!Number.isFinite(Number(e(`amount`)))||Number(e(`amount`))<.1);if(n.length||r||i){t.hidden=!1,t.dataset.kind=`error`,t.textContent=i&&!n.length?`Enter a quantity of at least 0.1 in your selected unit.`:r&&!n.length?`That email address looks incomplete — check it and prepare your request again.`:`Add `+n.map(e=>e[1]).join(`, `)+` so we can reply.`;let e=n[0]?n[0][0]:i?`amount`:`email`;[`country`,`amount`].includes(e)&&yl(4),setTimeout(()=>Y(`[name="${e}"]`)?.focus(),80);return}t.hidden=!1,t.dataset.kind=`ok`,t.replaceChildren(document.createTextNode(`Your brief is ready. It has not been sent yet. `));let a=document.createElement(`a`);a.className=`link`,a.textContent=`Send to our coffee team on WhatsApp`,a.href=Pc(`Hello Stephen Blake, I would like to enquire about coffee.
`+Sl().map(([e,t])=>`${e}: ${t}`).join(`
`)),a.target=`_blank`,a.rel=`noopener noreferrer`,t.append(a),vc(t,{block:`center`,behavior:Fc()?`auto`:`smooth`})});var Tl=Y(`#drawer`);Y(`#burger`).addEventListener(`click`,()=>{Tl.classList.add(`is-open`),Y(`#drawer-close`).focus()}),Y(`#drawer-close`).addEventListener(`click`,()=>{Tl.classList.remove(`is-open`),Y(`#burger`).focus()}),Tl.addEventListener(`click`,e=>{e.target.closest(`a`)&&Tl.classList.remove(`is-open`)}),addEventListener(`keydown`,e=>{e.key===`Escape`&&Tl.classList.remove(`is-open`)}),el(),fl(),pl(),gl(),yl(0),Oc[location.hash]&&addEventListener(`load`,()=>{let e=()=>{window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.sbLenis&&window.sbLenis.resize();let e=Math.round($c.getBoundingClientRect().top+scrollY-84);window.sbLenis?(window.sbLenis.stop(),scrollTo(0,e),window.sbLenis.start()):scrollTo(0,e)};setTimeout(e,320),setTimeout(e,900)}),sl(!1),Mc(`img[src^="/"]`).forEach(e=>{e.src=Sc(e.getAttribute(`src`))}),Mc(`img[data-sb-src]`).forEach(e=>{e.src=Sc(e.dataset.sbSrc)});var El=Object.freeze({smoothScroll:!0,cinematic:!0,three:!0,reveals:!0,minimumSceneWidth:0});$s();function Dl(e){let t=new Map,n=()=>document.querySelectorAll(`[data-reveal]`).forEach(e=>e.classList.add(`seen`));if(!e||Qs.matches)return window.__watch=n,n(),()=>{};let r=()=>{for(let[e,n]of t)e.isConnected||(n.scrollTrigger?.kill(),n.kill(),t.delete(e));document.querySelectorAll(`[data-reveal]`).forEach(e=>{if(t.has(e)||e.closest(`.hero__copy, #hero-copy`)||!e.getClientRects().length)return;e.classList.add(`seen`);let n=e.dataset.reveal===`mask`,r=Math.min(.18,(parseFloat(e.style.getPropertyValue(`--rd`))||0)/1e3),i=bi.fromTo(e,n?{clipPath:`inset(0 0 100% 0)`}:{opacity:0,y:12},{...n?{clipPath:`inset(0 0 0% 0)`}:{opacity:1,y:0},duration:n?.65:.38,delay:r,ease:`power2.out`,clearProps:`opacity,transform,clipPath`,scrollTrigger:{trigger:e,start:`top 94%`,once:!0}});t.set(e,i)}),Vs.refresh()};return document.documentElement.classList.add(`sb-gsap-reveals`),window.__watch=r,r(),()=>{t.forEach(e=>{e.scrollTrigger?.kill(),e.revert()}),document.documentElement.classList.remove(`sb-gsap-reveals`),window.__watch=n,n()}}$s();function Ol(){let e,t=()=>{if(e?.revert(),Qs.matches)return;let t=document.querySelectorAll(`#dossier .dossier__body > *`);e=bi.fromTo(t,{opacity:0,y:6},{opacity:1,y:0,duration:.24,stagger:.025,clearProps:`opacity,transform`,ease:`power2.out`})};return document.addEventListener(`sb:product-opened`,t),()=>{e?.revert(),document.removeEventListener(`sb:product-opened`,t)}}var kl=function(e,t,n){let r=Promise.resolve();function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Al(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ml(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Nl(){let e=Ml(`canvas`);return e.style.display=`block`,e}function Pl(...e){let t=`THREE.`+e.shift();nf?nf(`log`,t,...e):console.log(t,...e)}function Fl(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Il(...e){e=Fl(e);let t=`THREE.`+e.shift();if(nf)nf(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ll(...e){e=Fl(e);let t=`THREE.`+e.shift();if(nf)nf(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Rl(...e){let t=e.join(` `);t in tf||(tf[t]=!0,Il(...e))}function zl(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Bl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(of[e&255]+of[e>>8&255]+of[e>>16&255]+of[e>>24&255]+`-`+of[t&255]+of[t>>8&255]+`-`+of[t>>16&15|64]+of[t>>24&255]+`-`+of[n&63|128]+of[n>>8&255]+`-`+of[n>>16&255]+of[n>>24&255]+of[r&255]+of[r>>8&255]+of[r>>16&255]+of[r>>24&255]).toLowerCase()}function Vl(e,t,n){return Math.max(t,Math.min(n,e))}function Hl(e,t){return(e%t+t)%t}function Ul(e,t,n){return(1-n)*e+n*t}function Wl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Gl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Kl(){let e={enabled:!0,workingColorSpace:Jd,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ql(e.r),e.g=ql(e.g),e.b=ql(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Jl(e.r),e.g=Jl(e.g),e.b=Jl(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Yd:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Rl(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Rl(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Jd]:{primaries:t,whitePoint:r,transfer:Yd,toXYZ:mf,fromXYZ:hf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qd},outputColorSpaceConfig:{drawingBufferColorSpace:qd}},[qd]:{primaries:t,whitePoint:r,transfer:Xd,toXYZ:mf,fromXYZ:hf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qd}}}),e}function ql(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Jl(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function Yl(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Il(`Texture: Unable to serialize Texture.`),{})}function Xl(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Zl(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){zp.fromArray(e,a);let o=i.x*Math.abs(zp.x)+i.y*Math.abs(zp.y)+i.z*Math.abs(zp.z),s=t.dot(zp),c=n.dot(zp),l=r.dot(zp);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function Ql(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Dm.copy(s),Dm.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Dm);return l<n.near||l>n.far?null:{distance:l,point:Dm.clone(),object:e}}function $l(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xm),e.getVertexPosition(c,Sm),e.getVertexPosition(l,Cm);let u=Ql(e,t,n,r,xm,Sm,Cm,Em);if(u){let e=new Q;Tp.getBarycoord(Em,xm,Sm,Cm,e),i&&(u.uv=Tp.getInterpolatedAttribute(i,s,c,l,e,new Z)),a&&(u.uv1=Tp.getInterpolatedAttribute(a,s,c,l,e,new Z)),o&&(u.normal=Tp.getInterpolatedAttribute(o,s,c,l,e,new Q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Q,materialIndex:0};Tp.getNormal(xm,Sm,Cm,t.normal),u.face=t,u.barycoord=e}return u}function eu(e,t,n,r,i,a,o){let s=Gm.distanceSqToPoint(e);if(s<n){let n=new Q;Gm.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function tu(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function nu(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ru(e,t){let n=1-e;return n*n*t}function iu(e,t){return 2*(1-e)*e*t}function au(e,t){return e*e*t}function ou(e,t,n,r){return ru(e,t)+iu(e,n)+au(e,r)}function su(e,t){let n=1-e;return n*n*n*t}function cu(e,t){let n=1-e;return 3*n*n*e*t}function lu(e,t){return 3*(1-e)*e*e*t}function uu(e,t){return e*e*e*t}function du(e,t,n,r,i){return su(e,t)+cu(e,n)+lu(e,r)+uu(e,i)}function fu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(mu(i))i.isRenderTargetTexture?(Il(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(mu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function pu(e){let t={};for(let n=0;n<e.length;n++){let r=fu(e[n]);for(let e in r)t[e]=r[e]}return t}function mu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function gu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gf.workingColorSpace}function _u(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function vu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function yu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function bu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function xu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=yu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=bu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}function Su(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}function Cu(e,t,n,r){let i=wu(r);switch(n){case qu:return e*t;case Qu:return e*t/i.components*i.byteLength;case $u:return e*t/i.components*i.byteLength;case ed:return e*t*2/i.components*i.byteLength;case td:return e*t*2/i.components*i.byteLength;case Ju:return e*t*3/i.components*i.byteLength;case Yu:return e*t*4/i.components*i.byteLength;case nd:return e*t*4/i.components*i.byteLength;case rd:case id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ad:case od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cd:case ud:return Math.max(e,16)*Math.max(t,8)/4;case sd:case ld:return Math.max(e,8)*Math.max(t,8)/2;case dd:case fd:case md:case hd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pd:case gd:case _d:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Td:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case jd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Md:case Nd:case Pd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fd:case Id:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ld:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function wu(e){switch(e){case Pu:case Fu:return{byteLength:1,components:1};case Lu:case Iu:case Vu:return{byteLength:2,components:1};case Hu:case Uu:return{byteLength:2,components:4};case zu:case Ru:case Bu:return{byteLength:4,components:1};case Gu:case Ku:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,Z,lf,Q,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng=n((()=>{Tu=1e3,Eu=1001,Du=1002,Ou=1003,ku=1004,Au=1005,ju=1006,Mu=1007,Nu=1008,Pu=1009,Fu=1010,Iu=1011,Lu=1012,Ru=1013,zu=1014,Bu=1015,Vu=1016,Hu=1017,Uu=1018,Wu=1020,Gu=35902,Ku=35899,qu=1021,Ju=1022,Yu=1023,Xu=1026,Zu=1027,Qu=1028,$u=1029,ed=1030,td=1031,nd=1033,rd=33776,id=33777,ad=33778,od=33779,sd=35840,cd=35841,ld=35842,ud=35843,dd=36196,fd=37492,pd=37496,md=37488,hd=37489,gd=37490,_d=37491,vd=37808,yd=37809,bd=37810,xd=37811,Sd=37812,Cd=37813,wd=37814,Td=37815,Ed=37816,Dd=37817,Od=37818,kd=37819,Ad=37820,jd=37821,Md=36492,Nd=36494,Pd=36495,Fd=36283,Id=36284,Ld=36285,Rd=36286,zd=2300,Bd=2301,Vd=2302,Hd=2303,Ud=2400,Wd=2401,Gd=2402,Kd=3200,qd=`srgb`,Jd=`srgb-linear`,Yd=`linear`,Xd=`srgb`,Zd=7680,Qd=35044,$d=35048,ef=2e3,tf={},nf=null,rf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},af=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},of=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),sf=Math.PI/180,cf=180/Math.PI,Z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vl(this.x,e.x,t.x),this.y=Vl(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vl(this.x,e,t),this.y=Vl(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lf=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Il(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vl(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vl(this.x,e.x,t.x),this.y=Vl(this.y,e.y,t.y),this.z=Vl(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vl(this.x,e,t),this.y=Vl(this.y,e,t),this.z=Vl(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uf=new Q,df=new lf,ff=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Rl(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(pf.makeScale(e,t)),this}rotate(e){return Rl(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return Rl(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pf=new ff,mf=new ff().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new ff().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),gf=Kl(),vf=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_f===void 0&&(_f=Ml(`canvas`)),_f.width=e.width,_f.height=e.height;let t=_f.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_f}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ml(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ql(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ql(t[e]/255)*255):t[e]=ql(t[e]);return{data:t,width:e.width,height:e.height}}return Il(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yf=0,bf=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yl(r[t].image)):e.push(Yl(r[t]))}else e=Yl(r);n.url=e}return t||(e.images[this.uuid]=n),n}},xf=0,Sf=new Q,Cf=class e extends af{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Eu,i=Eu,a=ju,o=Nu,s=Yu,c=Pu,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Bl(),this.name=``,this.source=new bf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ff,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Il(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Il(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tu:e.x-=Math.floor(e.x);break;case Eu:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Tu:e.y-=Math.floor(e.y);break;case Eu:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Cf.DEFAULT_IMAGE=null,Cf.DEFAULT_MAPPING=300,Cf.DEFAULT_ANISOTROPY=1,wf=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vl(this.x,e.x,t.x),this.y=Vl(this.y,e.y,t.y),this.z=Vl(this.z,e.z,t.z),this.w=Vl(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vl(this.x,e,t),this.y=Vl(this.y,e,t),this.z=Vl(this.z,e,t),this.w=Vl(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tf=class extends af{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ju,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wf(0,0,e,t),this.scissorTest=!1,this.viewport=new wf(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},i=new Cf(r),a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ju,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new bf(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ef=class extends Tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Df=class extends Cf{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ou,this.minFilter=Ou,this.wrapR=Eu,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Of=class extends Cf{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ou,this.minFilter=Ou,this.wrapR=Eu,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},kf=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Af.setFromMatrixColumn(e,0).length(),i=1/Af.setFromMatrixColumn(e,1).length(),a=1/Af.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Nf)}lookAt(e,t,n){let r=this.elements;return If.subVectors(e,t),If.lengthSq()===0&&(If.z=1),If.normalize(),Pf.crossVectors(n,If),Pf.lengthSq()===0&&(Math.abs(n.z)===1?If.x+=1e-4:If.z+=1e-4,If.normalize(),Pf.crossVectors(n,If)),Pf.normalize(),Ff.crossVectors(If,Pf),r[0]=Pf.x,r[4]=Ff.x,r[8]=If.x,r[1]=Pf.y,r[5]=Ff.y,r[9]=If.y,r[2]=Pf.z,r[6]=Ff.z,r[10]=If.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Af.set(r[0],r[1],r[2]).length(),o=Af.set(r[4],r[5],r[6]).length(),s=Af.set(r[8],r[9],r[10]).length();i<0&&(a=-a),jf.copy(this);let c=1/a,l=1/o,u=1/s;return jf.elements[0]*=c,jf.elements[1]*=c,jf.elements[2]*=c,jf.elements[4]*=l,jf.elements[5]*=l,jf.elements[6]*=l,jf.elements[8]*=u,jf.elements[9]*=u,jf.elements[10]*=u,t.setFromRotationMatrix(jf),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ef,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ef,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Af=new Q,jf=new kf,Mf=new Q(0,0,0),Nf=new Q(1,1,1),Pf=new Q,Ff=new Q,If=new Q,Lf=new kf,Rf=new lf,zf=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Vl(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Vl(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Vl(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Vl(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Vl(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Vl(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Il(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},zf.DEFAULT_ORDER=`XYZ`,Bf=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Vf=0,Hf=new Q,Uf=new lf,Wf=new kf,Gf=new Q,Kf=new Q,qf=new Q,Jf=new lf,Yf=new Q(1,0,0),Xf=new Q(0,1,0),Zf=new Q(0,0,1),Qf={type:`added`},$f={type:`removed`},ep={type:`childadded`,child:null},tp={type:`childremoved`,child:null},np=class e extends af{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Bl(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Q,n=new zf,r=new lf,i=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kf},normalMatrix:{value:new ff}}),this.matrix=new kf,this.matrixWorld=new kf,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uf.setFromAxisAngle(e,t),this.quaternion.multiply(Uf),this}rotateOnWorldAxis(e,t){return Uf.setFromAxisAngle(e,t),this.quaternion.premultiply(Uf),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wf.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gf.copy(e):Gf.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wf.lookAt(Kf,Gf,this.up):Wf.lookAt(Gf,Kf,this.up),this.quaternion.setFromRotationMatrix(Wf),r&&(Wf.extractRotation(r.matrixWorld),Uf.setFromRotationMatrix(Wf),this.quaternion.premultiply(Uf.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Ll(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qf),ep.child=e,this.dispatchEvent(ep),ep.child=null):Ll(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),tp.child=e,this.dispatchEvent(tp),tp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wf.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wf.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wf),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qf),ep.child=e,this.dispatchEvent(ep),ep.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kf,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kf,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}},np.DEFAULT_UP=new Q(0,1,0),np.DEFAULT_MATRIX_AUTO_UPDATE=!0,np.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,rp=class extends np{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ip={type:`move`},ap=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rp,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rp,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rp,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rp;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sp={h:0,s:0,l:0},cp={h:0,s:0,l:0},lp=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qd){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gf.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gf.workingColorSpace){return this.r=e,this.g=t,this.b=n,gf.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gf.workingColorSpace){if(e=Hl(e,1),t=Vl(t,0,1),n=Vl(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Xl(i,r,e+1/3),this.g=Xl(i,r,e),this.b=Xl(i,r,e-1/3)}return gf.colorSpaceToWorking(this,r),this}setStyle(e,t=qd){function n(t){t!==void 0&&parseFloat(t)<1&&Il(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Il(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Il(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qd){let n=op[e.toLowerCase()];return n===void 0?Il(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ql(e.r),this.g=ql(e.g),this.b=ql(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qd){return gf.workingToColorSpace(up.copy(this),e),Math.round(Vl(up.r*255,0,255))*65536+Math.round(Vl(up.g*255,0,255))*256+Math.round(Vl(up.b*255,0,255))}getHexString(e=qd){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gf.workingColorSpace){gf.workingToColorSpace(up.copy(this),t);let n=up.r,r=up.g,i=up.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=gf.workingColorSpace){return gf.workingToColorSpace(up.copy(this),t),e.r=up.r,e.g=up.g,e.b=up.b,e}getStyle(e=qd){gf.workingToColorSpace(up.copy(this),e);let t=up.r,n=up.g,r=up.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(sp),this.setHSL(sp.h+e,sp.s+t,sp.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sp),e.getHSL(cp);let n=Ul(sp.h,cp.h,t),r=Ul(sp.s,cp.s,t),i=Ul(sp.l,cp.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},up=new lp,lp.NAMES=op,dp=class extends np{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zf,this.environmentIntensity=1,this.environmentRotation=new zf,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fp=new Q,pp=new Q,mp=new Q,hp=new Q,gp=new Q,_p=new Q,vp=new Q,yp=new Q,bp=new Q,xp=new Q,Sp=new wf,Cp=new wf,wp=new wf,Tp=class e{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fp.subVectors(e,t),r.cross(fp);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){fp.subVectors(r,t),pp.subVectors(n,t),mp.subVectors(e,t);let a=fp.dot(fp),o=fp.dot(pp),s=fp.dot(mp),c=pp.dot(pp),l=pp.dot(mp),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hp)!==null&&hp.x>=0&&hp.y>=0&&hp.x+hp.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,hp)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,hp.x),s.addScaledVector(a,hp.y),s.addScaledVector(o,hp.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Sp.setScalar(0),Cp.setScalar(0),wp.setScalar(0),Sp.fromBufferAttribute(e,t),Cp.fromBufferAttribute(e,n),wp.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sp,i.x),a.addScaledVector(Cp,i.y),a.addScaledVector(wp,i.z),a}static isFrontFacing(e,t,n,r){return fp.subVectors(n,t),pp.subVectors(e,t),fp.cross(pp).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fp.subVectors(this.c,this.b),pp.subVectors(this.a,this.b),fp.cross(pp).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;gp.subVectors(r,n),_p.subVectors(i,n),yp.subVectors(e,n);let s=gp.dot(yp),c=_p.dot(yp);if(s<=0&&c<=0)return t.copy(n);bp.subVectors(e,r);let l=gp.dot(bp),u=_p.dot(bp);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(gp,a);xp.subVectors(e,i);let f=gp.dot(xp),p=_p.dot(xp);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_p,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return vp.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(vp,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(gp,a).addScaledVector(_p,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ep=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Op.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Op.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Op.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Op):Op.fromBufferAttribute(r,t),Op.applyMatrix4(e.matrixWorld),this.expandByPoint(Op);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),kp.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),kp.copy(e.boundingBox)),kp.applyMatrix4(e.matrixWorld),this.union(kp)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Op),Op.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ip),Lp.subVectors(this.max,Ip),Ap.subVectors(e.a,Ip),jp.subVectors(e.b,Ip),Mp.subVectors(e.c,Ip),Np.subVectors(jp,Ap),Pp.subVectors(Mp,jp),Fp.subVectors(Ap,Mp);let t=[0,-Np.z,Np.y,0,-Pp.z,Pp.y,0,-Fp.z,Fp.y,Np.z,0,-Np.x,Pp.z,0,-Pp.x,Fp.z,0,-Fp.x,-Np.y,Np.x,0,-Pp.y,Pp.x,0,-Fp.y,Fp.x,0];return!Zl(t,Ap,jp,Mp,Lp)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Ap,jp,Mp,Lp))?!1:(Rp.crossVectors(Np,Pp),t=[Rp.x,Rp.y,Rp.z],Zl(t,Ap,jp,Mp,Lp))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Op).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Op).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Dp[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dp[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dp[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dp[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dp[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dp[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dp[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dp[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dp)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dp=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Op=new Q,kp=new Ep,Ap=new Q,jp=new Q,Mp=new Q,Np=new Q,Pp=new Q,Fp=new Q,Ip=new Q,Lp=new Q,Rp=new Q,zp=new Q,Bp=new Q,Vp=new Z,Hp=0,Up=class extends af{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qd,this.updateRanges=[],this.gpuType=Bu,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vp.fromBufferAttribute(this,t),Vp.applyMatrix3(e),this.setXY(t,Vp.x,Vp.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bp.fromBufferAttribute(this,t),Bp.applyMatrix3(e),this.setXYZ(t,Bp.x,Bp.y,Bp.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bp.fromBufferAttribute(this,t),Bp.applyMatrix4(e),this.setXYZ(t,Bp.x,Bp.y,Bp.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bp.fromBufferAttribute(this,t),Bp.applyNormalMatrix(e),this.setXYZ(t,Bp.x,Bp.y,Bp.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bp.fromBufferAttribute(this,t),Bp.transformDirection(e),this.setXYZ(t,Bp.x,Bp.y,Bp.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gl(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gl(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gl(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gl(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gl(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gl(t,this.array),n=Gl(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gl(t,this.array),n=Gl(n,this.array),r=Gl(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Gl(t,this.array),n=Gl(n,this.array),r=Gl(r,this.array),i=Gl(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Wp=class extends Up{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Gp=class extends Up{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Kp=class extends Up{constructor(e,t,n){super(new Float32Array(e),t,n)}},qp=new Ep,Jp=new Q,Yp=new Q,Xp=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qp.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jp.subVectors(e,this.center);let t=Jp.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Jp,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jp.copy(e.center).add(Yp)),this.expandByPoint(Jp.copy(e.center).sub(Yp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zp=0,Qp=new kf,$p=new np,em=new Q,tm=new Ep,nm=new Ep,rm=new Q,im=class e extends af{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Bl(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Al(e)?Gp:Wp)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new ff().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qp.makeRotationFromQuaternion(e),this.applyMatrix4(Qp),this}rotateX(e){return Qp.makeRotationX(e),this.applyMatrix4(Qp),this}rotateY(e){return Qp.makeRotationY(e),this.applyMatrix4(Qp),this}rotateZ(e){return Qp.makeRotationZ(e),this.applyMatrix4(Qp),this}translate(e,t,n){return Qp.makeTranslation(e,t,n),this.applyMatrix4(Qp),this}scale(e,t,n){return Qp.makeScale(e,t,n),this.applyMatrix4(Qp),this}lookAt(e){return $p.lookAt(e),$p.updateMatrix(),this.applyMatrix4($p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(em).negate(),this.translate(em.x,em.y,em.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Kp(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Il(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ep);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ll(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];tm.setFromBufferAttribute(n),this.morphTargetsRelative?(rm.addVectors(this.boundingBox.min,tm.min),this.boundingBox.expandByPoint(rm),rm.addVectors(this.boundingBox.max,tm.max),this.boundingBox.expandByPoint(rm)):(this.boundingBox.expandByPoint(tm.min),this.boundingBox.expandByPoint(tm.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ll(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ll(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Q,1/0);else if(e){let n=this.boundingSphere.center;if(tm.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nm.setFromBufferAttribute(n),this.morphTargetsRelative?(rm.addVectors(tm.min,nm.min),tm.expandByPoint(rm),rm.addVectors(tm.max,nm.max),tm.expandByPoint(rm)):(tm.expandByPoint(nm.min),tm.expandByPoint(nm.max))}tm.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)rm.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(rm));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)rm.fromBufferAttribute(a,t),o&&(em.fromBufferAttribute(e,t),rm.add(em)),r=Math.max(r,n.distanceToSquared(rm))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ll(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ll(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Up(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Q,s[e]=new Q;let c=new Q,l=new Q,u=new Q,d=new Z,f=new Z,p=new Z,m=new Q,h=new Q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Q,y=new Q,b=new Q,x=new Q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Up(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Q,i=new Q,a=new Q,o=new Q,s=new Q,c=new Q,l=new Q,u=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rm.fromBufferAttribute(e,t),rm.normalize(),e.setXYZ(t,rm.x,rm.y,rm.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Up(a,r,i)}if(this.index===null)return Il(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},am=new Q,om=new Q,sm=new ff,cm=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=am.subVectors(n,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(am),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sm.getNormalMatrix(e),r=this.coplanarPoint(am).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},lm=0,um=class extends af{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Bl(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lp(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zd,this.stencilZFail=Zd,this.stencilZPass=Zd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Il(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Il(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lp().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new cm().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},dm=new Q,fm=new Q,pm=new Q,mm=new Q,hm=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dm)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dm.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dm.copy(this.origin).addScaledVector(this.direction,t),dm.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fm.copy(e).add(t).multiplyScalar(.5),pm.copy(t).sub(e).normalize(),mm.copy(this.origin).sub(fm);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pm),o=mm.dot(this.direction),s=-mm.dot(pm),c=mm.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fm).addScaledVector(pm,d),f}intersectSphere(e,t){if(e.radius<0)return null;dm.subVectors(e.center,this.origin);let n=dm.dot(this.direction),r=dm.dot(dm)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dm)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,te=T-P*D,I=E-F*D,ne=O-P*A,re=k-F*A,L=j-P*N,R=M-F*N,z=L*re-R*ne,ie=te*R-I*L,ae=ne*I-re*te;if(r){if(z<0||ie<0||ae<0)return null}else if((z<0||ie<0||ae<0)&&(z>0||ie>0||ae>0))return null;let oe=z+ie+ae;if(oe===0)return null;let B=ee*(z*D+ie*A+ae*N);return(oe>0?B<0:B>0)?null:this.at(B/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gm=class extends um{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new lp(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zf,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_m=new kf,vm=new hm,ym=new Xp,bm=new Q,xm=new Q,Sm=new Q,Cm=new Q,wm=new Q,Tm=new Q,Em=new Q,Dm=new Q,Om=class extends np{constructor(e=new im,t=new gm){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Tm.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wm.fromBufferAttribute(s,e),a?Tm.addScaledVector(wm,r):Tm.addScaledVector(wm.sub(t),r))}t.add(Tm)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ym.copy(n.boundingSphere),ym.applyMatrix4(i),vm.copy(e.ray).recast(e.near),ym.containsPoint(vm.origin)===!1&&(vm.intersectSphere(ym,bm)===null||vm.origin.distanceToSquared(bm)>(e.far-e.near)**2)||(_m.copy(i).invert(),vm.copy(e.ray).applyMatrix4(_m),(n.boundingBox===null||vm.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vm)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$l(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$l(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$l(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$l(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}},km=class extends Cf{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ou,l=Ou,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Am=class extends Up{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jm=new kf,Mm=new kf,Nm=[],Pm=new Ep,Fm=new kf,Im=new Om,Lm=new Xp,Rm=class extends Om{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Am(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Fm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ep),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jm),Pm.copy(e.boundingBox).applyMatrix4(jm),this.boundingBox.union(Pm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xp),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jm),Lm.copy(e.boundingSphere).applyMatrix4(jm),this.boundingSphere.union(Lm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Im.geometry=this.geometry,Im.material=this.material,Im.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lm.copy(this.boundingSphere),Lm.applyMatrix4(n),e.ray.intersectsSphere(Lm)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,jm),Mm.multiplyMatrices(n,jm),Im.matrixWorld=Mm,Im.raycast(e,Nm);for(let e=0,n=Nm.length;e<n;e++){let n=Nm[e];n.instanceId=i,n.object=this,t.push(n)}Nm.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Am(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new km(new Float32Array(r*this.count),r,this.count,Qu,Bu));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zm=new Xp,Bm=new Z(.5,.5),Vm=new Q,Hm=class{constructor(e=new cm,t=new cm,n=new cm,r=new cm,i=new cm,a=new cm){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ef,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zm.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zm.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zm)}intersectsSprite(e){zm.center.set(0,0,0);let t=Bm.distanceTo(e.center);return zm.radius=.7071067811865476+t,zm.applyMatrix4(e.matrixWorld),this.intersectsSphere(zm)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vm.x=r.normal.x>0?e.max.x:e.min.x,Vm.y=r.normal.y>0?e.max.y:e.min.y,Vm.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vm)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Um=class extends um{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new lp(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wm=new kf,Gm=new hm,Km=new Xp,qm=new Q,Jm=class extends np{constructor(e=new im,t=new Um){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Km.copy(n.boundingSphere),Km.applyMatrix4(r),Km.radius+=i,e.ray.intersectsSphere(Km)===!1)return;Wm.copy(r).invert(),Gm.copy(e.ray).applyMatrix4(Wm);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);qm.fromBufferAttribute(l,n),eu(qm,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)qm.fromBufferAttribute(l,a),eu(qm,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},Ym=class extends Cf{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xm=class extends Cf{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zm=class extends Cf{constructor(e,t,n=zu,r,i,a,o=Ou,s=Ou,c,l=Xu,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qm=class extends Zm{constructor(e,t=zu,n=301,r,i,a=Ou,o=Ou,s,c=Xu){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$m=class extends Cf{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},eh=class e extends im{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Kp(c,3)),this.setAttribute(`normal`,new Kp(l,3)),this.setAttribute(`uv`,new Kp(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},th=class e extends im{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Q,l=new Z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Kp(a,3)),this.setAttribute(`normal`,new Kp(o,3)),this.setAttribute(`uv`,new Kp(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nh=class e extends im{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Kp(u,3)),this.setAttribute(`normal`,new Kp(d,3)),this.setAttribute(`uv`,new Kp(f,2));function _(){let a=new Q,_=new Q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Z,m=new Q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rh=class e extends im{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Kp(i,3)),this.setAttribute(`normal`,new Kp(i.slice(),3)),this.setAttribute(`uv`,new Kp(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new Q,r=new Q,i=new Q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new Q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new Q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new Q,t=new Q,n=new Q,r=new Q,o=new Z,s=new Z,c=new Z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ih=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Il(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new Z:new Q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Q,r=[],i=[],a=[],o=new Q,s=new kf;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Q)}i[0]=new Q,a[0]=new Q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Vl(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Vl(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ah=class extends ih{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new Z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oh=class extends ah{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}},sh=new Q,ch=new Q,lh=new tu,uh=new tu,dh=new tu,fh=class extends ih{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ch.subVectors(r[0],r[1]).add(r[0]),c=ch);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(sh.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=sh),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),lh.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),uh.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),dh.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(lh.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),uh.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),dh.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(lh.calc(s),uh.calc(s),dh.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},ph=class extends ih{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(du(e,r.x,i.x,a.x,o.x),du(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mh=class extends ih{constructor(e=new Q,t=new Q,n=new Q,r=new Q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(du(e,r.x,i.x,a.x,o.x),du(e,r.y,i.y,a.y,o.y),du(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hh=class extends ih{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gh=class extends ih{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends ih{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ou(e,r.x,i.x,a.x),ou(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vh=class extends ih{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ou(e,r.x,i.x,a.x),ou(e,r.y,i.y,a.y),ou(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends ih{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new Z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(nu(o,s.x,c.x,l.x,u.x),nu(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this}},bh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:fh,CubicBezierCurve:ph,CubicBezierCurve3:mh,EllipseCurve:ah,LineCurve:hh,LineCurve3:gh,QuadraticBezierCurve:_h,QuadraticBezierCurve3:vh,SplineCurve:yh}),xh=class e extends rh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Sh=class e extends im{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Vl(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new Q,d=new Z,f=new Q,p=new Q,m=new Q,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Kp(a,3)),this.setAttribute(`uv`,new Kp(o,2)),this.setAttribute(`normal`,new Kp(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ch=class e extends im{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Kp(p,3)),this.setAttribute(`normal`,new Kp(m,3)),this.setAttribute(`uv`,new Kp(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},wh=class e extends im{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Q,d=new Q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Kp(p,3)),this.setAttribute(`normal`,new Kp(m,3)),this.setAttribute(`uv`,new Kp(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Th=class e extends im{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Q,f=new Q,p=new Q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Kp(c,3)),this.setAttribute(`normal`,new Kp(l,3)),this.setAttribute(`uv`,new Kp(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Eh=class e extends im{constructor(e=new vh(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Q,s=new Q,c=new Z,l=new Q,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Kp(u,3)),this.setAttribute(`normal`,new Kp(d,3)),this.setAttribute(`uv`,new Kp(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new bh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Dh={clone:fu,merge:pu},Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ah=class extends um{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fu(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new lp().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new wf().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new ff().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new kf().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jh=class extends Ah{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mh=class extends um{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new lp(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lp(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zf,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nh=class extends Mh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vl(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lp(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lp(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lp(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ph=class extends um{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fh=class extends um{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ih=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Lh=class extends Ih{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wd:i=e,o=2*t-n;break;case Gd:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Wd:a=e,s=2*n-t;break;case Gd:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Rh=class extends Ih{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zh=class extends Ih{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bh=class extends Ih{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=xu(n,t,g,y,r);i[p]=yu(x,o,_,b,m)}return i}},Vh=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=_u(t,this.TimeBufferType),this.values=_u(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_u(e.times,Array),values:_u(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),vu(e.settings)&&(n.settings={inTangents:_u(e.settings.inTangents,Array),outTangents:_u(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zd:t=this.InterpolantFactoryMethodDiscrete;break;case Bd:t=this.InterpolantFactoryMethodLinear;break;case Vd:t=this.InterpolantFactoryMethodSmooth;break;case Hd:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Il(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zd;case this.InterpolantFactoryMethodLinear:return Bd;case this.InterpolantFactoryMethodSmooth:return Vd;case this.InterpolantFactoryMethodBezier:return Hd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;vu(this.settings)&&(Su(this.settings.inTangents,e),Su(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ll(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Ll(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Ll(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Ll(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&jl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Ll(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,vu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}},Vh.prototype.ValueTypeName=``,Vh.prototype.TimeBufferType=Float32Array,Vh.prototype.ValueBufferType=Float32Array,Vh.prototype.DefaultInterpolation=Bd,Hh=class extends Vh{constructor(e,t,n){super(e,t,n)}},Hh.prototype.ValueTypeName=`bool`,Hh.prototype.ValueBufferType=Array,Hh.prototype.DefaultInterpolation=zd,Hh.prototype.InterpolantFactoryMethodLinear=void 0,Hh.prototype.InterpolantFactoryMethodSmooth=void 0,Uh=class extends Vh{constructor(e,t,n,r){super(e,t,n,r)}},Uh.prototype.ValueTypeName=`color`,Wh=class extends Vh{constructor(e,t,n,r){super(e,t,n,r)}},Wh.prototype.ValueTypeName=`number`,Gh=class extends Ih{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)lf.slerpFlat(i,0,a,c-o,a,c,s);return i}},Kh=class extends Vh{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}},Kh.prototype.ValueTypeName=`quaternion`,Kh.prototype.InterpolantFactoryMethodSmooth=void 0,qh=class extends Vh{constructor(e,t,n){super(e,t,n)}},qh.prototype.ValueTypeName=`string`,qh.prototype.ValueBufferType=Array,qh.prototype.DefaultInterpolation=zd,qh.prototype.InterpolantFactoryMethodLinear=void 0,qh.prototype.InterpolantFactoryMethodSmooth=void 0,Jh=class extends Vh{constructor(e,t,n,r){super(e,t,n,r)}},Jh.prototype.ValueTypeName=`vector`,Yh=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Xh=new Yh,Zh=class{constructor(e){this.manager=e===void 0?Xh:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}},Zh.DEFAULT_MATERIAL_NAME=`__DEFAULT`,Qh=class extends np{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new lp(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$h=class extends Qh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(np.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lp(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},eg=new kf,tg=new Q,ng=new Q,rg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Pu,this.map=null,this.mapPass=null,this.matrix=new kf,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hm,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new wf(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ng),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){eg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(eg,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(eg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ig=new Q,ag=new lf,og=new Q,sg=class extends np{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new kf,this.projectionMatrix=new kf,this.projectionMatrixInverse=new kf,this.coordinateSystem=ef,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ig,ag,og),og.x===1&&og.y===1&&og.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ig,ag,og.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ig,ag,og),og.x===1&&og.y===1&&og.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ig,ag,og.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cg=new Q,lg=new Z,ug=new Z,dg=class extends sg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cg.x,cg.y).multiplyScalar(-e/cg.z),cg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cg.x,cg.y).multiplyScalar(-e/cg.z)}getViewSize(e,t){return this.getViewBounds(e,lg,ug),t.subVectors(ug,lg)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fg=class extends rg{constructor(){super(new dg(90,1,.5,500)),this.isPointLightShadow=!0}},pg=class extends Qh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new fg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},mg=class extends sg{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hg=class extends rg{constructor(){super(new mg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gg=class extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(np.DEFAULT_UP),this.updateMatrix(),this.target=new np,this.shadow=new hg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_g=-90,vg=1,yg=class extends np{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dg(_g,vg,e,t);r.layers=this.layers,this.add(r);let i=new dg(_g,vg,e,t);i.layers=this.layers,this.add(i);let a=new dg(_g,vg,e,t);a.layers=this.layers,this.add(a);let o=new dg(_g,vg,e,t);o.layers=this.layers,this.add(o);let s=new dg(_g,vg,e,t);s.layers=this.layers,this.add(s);let c=new dg(_g,vg,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bg=class extends dg{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xg=`\\[\\]\\.:\\/`,Sg=RegExp(`[\\[\\]\\.:\\/]`,`g`),Cg=`[^\\[\\]\\.:\\/]`,wg=`[^`+xg.replace(`\\.`,``)+`]`,Tg=`((?:WC+[\\/:])*)`.replace(`WC`,Cg),Eg=`(WCOD+)?`.replace(`WCOD`,wg),Dg=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Cg),Og=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Cg),kg=RegExp(`^`+Tg+Eg+Dg+Og+`$`),Ag=[`material`,`materials`,`bones`,`map`],jg=class{constructor(e,t,n){let r=n||Mg.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mg=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Sg,``)}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ag.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Il(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Ll(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Ll(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Ll(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Ll(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Ll(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Ll(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Ll(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Ll(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Ll(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Ll(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},Mg.Composite=jg,Mg.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mg.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mg.prototype.GetterByBindingType=[Mg.prototype._getValue_direct,Mg.prototype._getValue_array,Mg.prototype._getValue_arrayElement,Mg.prototype._getValue_toArray],Mg.prototype.SetterByBindingTypeAndVersioning=[[Mg.prototype._setValue_direct,Mg.prototype._setValue_direct_setNeedsUpdate,Mg.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mg.prototype._setValue_array,Mg.prototype._setValue_array_setNeedsUpdate,Mg.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mg.prototype._setValue_arrayElement,Mg.prototype._setValue_arrayElement_setNeedsUpdate,Mg.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mg.prototype._setValue_fromArray,Mg.prototype._setValue_fromArray_setNeedsUpdate,Mg.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?Il(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`)}));function Pg(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Fg(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}function Ig(e,t,n,r,i,a){let o=new lp(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Om(new eh(1,1,1),new Ah({name:`BackgroundCubeMaterial`,uniforms:fu(Bv.backgroundCube.uniforms),vertexShader:Bv.backgroundCube.vertexShader,fragmentShader:Bv.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uv),l.material.toneMapped=gf.getTransfer(i.colorSpace)!==Xd,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Om(new Ch(2,2),new Ah({name:`BackgroundMaterial`,uniforms:fu(Bv.background.uniforms),vertexShader:Bv.background.vertexShader,fragmentShader:Bv.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=gf.getTransfer(i.colorSpace)!==Xd,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vv,gu(e)),n.buffers.color.setClear(Vv.r,Vv.g,Vv.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Lg(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Rg(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function zg(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Il(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Il(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Bg(e){let t=this,n=null,r=0,i=!1,a=!1,o=new cm,s=new ff,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Vg(e){let t=[],n=[],r=e,i=e-Wv+1+Gv;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ty.set(1,r,n):e===1?ty.set(-n,1,-r):e===2?ty.set(-n,r,1):e===3?ty.set(-1,r,-n):e===4?ty.set(-n,-1,r):ty.set(n,r,-1),ty.toArray(l,(e*6+t)*3)}}let u=new im;u.setAttribute(`position`,new Up(c,3)),u.setAttribute(`outputDirection`,new Up(l,3)),n.push(new Om(u,null)),r>Wv&&r--}return{lodMeshes:n,sizeLods:t}}function Hg(e,t,n){let r=new Ef(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ug(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Wg(e,t,n){return new Ah({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:qv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gg(e,t,n){return new Ah({name:`SphericalGaussianBlur`,defines:{SAMPLES:Kv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kg(){return new Ah({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Jg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qg(){return new Ah({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jg(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yg(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ry(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ny(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ny(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Xg(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Rl(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Zg(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Gp:Wp)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qg(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $g(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ll(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function e_(e,t,n){let r=new WeakMap,i=new wf;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Df(g,m,h,u);_.type=Bu,_.needsUpdate=!0;let v=p*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Z(m,h)},r.set(o,d);function f(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,f)}o.addEventListener(`dispose`,f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function t_(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}function n_(e,t,n,r,i,a){let o=new Ef(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new im;l.setAttribute(`position`,new Kp([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Kp([0,2,0,0,2,0],2));let u=new jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Om(l,u),f=new mg(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ef(t,n,{type:Vu,depthBuffer:!1,stencilBuffer:!1}),c=new Ef(t,n,{type:Vu,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},gf.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=iy[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}function r_(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=uy[i];if(a===void 0&&(a=new Float32Array(i),uy[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function i_(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function a_(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function o_(e,t){let n=dy[t];n===void 0&&(n=new Int32Array(t),dy[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function s_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function c_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(i_(n,t))return;e.uniform2fv(this.addr,t),a_(n,t)}}function l_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(i_(n,t))return;e.uniform3fv(this.addr,t),a_(n,t)}}function u_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(i_(n,t))return;e.uniform4fv(this.addr,t),a_(n,t)}}function d_(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(i_(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),a_(n,t)}else{if(i_(n,r))return;my.set(r),e.uniformMatrix2fv(this.addr,!1,my),a_(n,r)}}function f_(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(i_(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),a_(n,t)}else{if(i_(n,r))return;py.set(r),e.uniformMatrix3fv(this.addr,!1,py),a_(n,r)}}function p_(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(i_(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),a_(n,t)}else{if(i_(n,r))return;fy.set(r),e.uniformMatrix4fv(this.addr,!1,fy),a_(n,r)}}function m_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function h_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(i_(n,t))return;e.uniform2iv(this.addr,t),a_(n,t)}}function g_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(i_(n,t))return;e.uniform3iv(this.addr,t),a_(n,t)}}function __(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(i_(n,t))return;e.uniform4iv(this.addr,t),a_(n,t)}}function v_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function y_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(i_(n,t))return;e.uniform2uiv(this.addr,t),a_(n,t)}}function b_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(i_(n,t))return;e.uniform3uiv(this.addr,t),a_(n,t)}}function x_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(i_(n,t))return;e.uniform4uiv(this.addr,t),a_(n,t)}}function S_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(oy.compareFunction=n.isReversedDepthBuffer()?518:515,a=oy):a=ay,n.setTexture2D(t||a,i)}function C_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||cy,i)}function w_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ly,i)}function T_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||sy,i)}function E_(e){switch(e){case 5126:return s_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return h_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return y_;case 36295:return b_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function D_(e,t){e.uniform1fv(this.addr,t)}function O_(e,t){let n=r_(t,this.size,2);e.uniform2fv(this.addr,n)}function k_(e,t){let n=r_(t,this.size,3);e.uniform3fv(this.addr,n)}function A_(e,t){let n=r_(t,this.size,4);e.uniform4fv(this.addr,n)}function j_(e,t){let n=r_(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function M_(e,t){let n=r_(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function N_(e,t){let n=r_(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function P_(e,t){e.uniform1iv(this.addr,t)}function F_(e,t){e.uniform2iv(this.addr,t)}function I_(e,t){e.uniform3iv(this.addr,t)}function L_(e,t){e.uniform4iv(this.addr,t)}function R_(e,t){e.uniform1uiv(this.addr,t)}function z_(e,t){e.uniform2uiv(this.addr,t)}function B_(e,t){e.uniform3uiv(this.addr,t)}function V_(e,t){e.uniform4uiv(this.addr,t)}function H_(e,t,n){let r=this.cache,i=t.length,a=o_(n,i);i_(r,a)||(e.uniform1iv(this.addr,a),a_(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?oy:ay;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function U_(e,t,n){let r=this.cache,i=t.length,a=o_(n,i);i_(r,a)||(e.uniform1iv(this.addr,a),a_(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||cy,a[e])}function W_(e,t,n){let r=this.cache,i=t.length,a=o_(n,i);i_(r,a)||(e.uniform1iv(this.addr,a),a_(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ly,a[e])}function G_(e,t,n){let r=this.cache,i=t.length,a=o_(n,i);i_(r,a)||(e.uniform1iv(this.addr,a),a_(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||sy,a[e])}function K_(e){switch(e){case 5126:return D_;case 35664:return O_;case 35665:return k_;case 35666:return A_;case 35674:return j_;case 35675:return M_;case 35676:return N_;case 5124:case 35670:return P_;case 35667:case 35671:return F_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return R_;case 36294:return z_;case 36295:return B_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return G_}}function q_(e,t){e.seq.push(t),e.map[t.id]=t}function J_(e,t,n){let r=e.name,i=r.length;for(vy.lastIndex=0;;){let a=vy.exec(r),o=vy.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){q_(n,l===void 0?new hy(s,e,t):new gy(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _y(s),q_(n,e)),n=e}}}function Y_(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function X_(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Z_(e){gf._getMatrix(Sy,gf.workingColorSpace,e);let t=`mat3( ${Sy.elements.map(e=>e.toFixed(4))} )`;switch(gf.getTransfer(e)){case Yd:return[t,`LinearTransferOETF`];case Xd:return[t,`sRGBTransferOETF`];default:return Il(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Q_(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+X_(e.getShaderSource(t),r)}return i}function $_(e,t){let n=Z_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function ev(e,t){let n=Cy[t];return n===void 0?(Il(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function tv(){return gf.getLuminanceCoefficients(wy),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wy.x.toFixed(4)}, ${wy.y.toFixed(4)}, ${wy.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function nv(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(av).join(`
`)}function rv(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function iv(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function av(e){return e!==``}function ov(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sv(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function cv(e){return e.replace(Ty,lv)}function lv(e,t){let n=zv[t];if(n===void 0){let e=Ey.get(t);if(e!==void 0)n=zv[e],Il(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cv(n)}function uv(e){return e.replace(Dy,dv)}function dv(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fv(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function pv(e){return Oy[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}function mv(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ky[e.envMapMode]||`ENVMAP_TYPE_CUBE`}function hv(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ay[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}function gv(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:jy[e.combine]||`ENVMAP_BLENDING_NONE`}function _v(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function vv(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pv(n),l=mv(n),u=hv(n),d=gv(n),f=_v(n),p=nv(n),m=rv(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(av).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(av).join(`
`),_.length>0&&(_+=`
`)):(g=[fv(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(av).join(`
`),_=[fv(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zv.tonemapping_pars_fragment,n.toneMapping===0?``:ev(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zv.colorspace_pars_fragment,$_(`linearToOutputTexel`,n.outputColorSpace),tv(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(av).join(`
`)),o=cv(o),o=ov(o,n),o=sv(o,n),s=cv(s),s=ov(s,n),s=sv(s,n),o=uv(o),s=uv(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Y_(i,i.VERTEX_SHADER,y),S=Y_(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Q_(i,x,`vertex`),n=Q_(i,S,`fragment`);Ll(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Il(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new yy(i,h),T=iv(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,by)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xy++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function yv(e){return e===1030||e===37490||e===36285}function bv(e,t,n,r,i,a){let o=new Bf,s=new Ny,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Il(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Bv[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,ee=!!i.matcap,te=!!x,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,L=!!i.normalMap,R=!!i.displacementMap,z=!!i.emissiveMap,ie=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,B=i.clearcoat>0,V=i.dispersion>0,se=i.retroreflectivity>0,H=i.iridescence>0,ce=i.sheen>0,le=i.transmission>0,ue=oe&&!!i.anisotropyMap,de=B&&!!i.clearcoatMap,fe=B&&!!i.clearcoatNormalMap,pe=B&&!!i.clearcoatRoughnessMap,me=H&&!!i.iridescenceMap,U=H&&!!i.iridescenceThicknessMap,he=ce&&!!i.sheenColorMap,W=ce&&!!i.sheenRoughnessMap,ge=!!i.specularMap,G=!!i.specularColorMap,_e=!!i.specularIntensityMap,K=le&&!!i.transmissionMap,q=le&&!!i.thicknessMap,ve=!!i.gradientMap,ye=!!i.alphaMap,be=i.alphaTest>0,xe=!!i.alphaHash,Se=!!i.extensions,Ce=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let we={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gf.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:I,lightMap:ne,bumpMap:re,normalMap:L,displacementMap:R,emissiveMap:z,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&yv(i.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:oe,anisotropyMap:ue,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,dispersion:V,retroreflection:se,iridescence:H,iridescenceMap:me,iridescenceThicknessMap:U,sheen:ce,sheenColorMap:he,sheenRoughnessMap:W,specularMap:ge,specularColorMap:G,specularIntensityMap:_e,transmission:le,transmissionMap:K,thicknessMap:q,gradientMap:ve,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:xe,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:I&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:L&&m(i.normalMap.channel),displacementMapUv:R&&m(i.displacementMap.channel),emissiveMapUv:z&&m(i.emissiveMap.channel),metalnessMapUv:ie&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:ue&&m(i.anisotropyMap.channel),clearcoatMapUv:de&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:W&&m(i.sheenRoughnessMap.channel),specularMapUv:ge&&m(i.specularMap.channel),specularColorMapUv:G&&m(i.specularColorMap.channel),specularIntensityMapUv:_e&&m(i.specularIntensityMap.channel),transmissionMapUv:K&&m(i.transmissionMap.channel),thicknessMapUv:q&&m(i.thicknessMap.channel),alphaMapUv:ye&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(L||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||ye),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&gf.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:z&&i.emissiveMap.isVideoTexture===!0&&gf.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Se&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Se&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bv[t];n=Dh.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new vv(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function xv(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Sv(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cv(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wv(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Sv),r.length>1&&r.sort(t||Cv),i.length>1&&i.sort(t||Cv)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Tv(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new wv,e.set(t,[i])):n>=r.length?(i=new wv,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ev(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Q,color:new lp};break;case`SpotLight`:n={position:new Q,direction:new Q,color:new lp,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Q,color:new lp,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Q,skyColor:new lp,groundColor:new lp};break;case`RectAreaLight`:n={color:new lp,position:new Q,halfWidth:new Q,halfHeight:new Q}}return e[t.id]=n,n}}}function Dv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function Ov(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kv(e){let t=new Ev,n=Dv(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Q);let i=new Q,a=new kf,o=new kf;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ov);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fy++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Av(e){let t=new kv(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function jv(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Av(e),t.set(n,[a])):r>=i.length?(a=new Av(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}function Mv(e,t,n){let r=new Hm,i=new Z,a=new Z,o=new wf,s=new Ph,c=new Fh,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ah({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Iy,fragmentShader:Ly}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new im;m.setAttribute(`position`,new Up(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Om(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Il(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Il(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Il(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ef(i.x,i.y,{format:ed,type:Vu,minFilter:ju,magFilter:ju,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Zm(i.x,i.y,Bu),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Xu,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ou,d.map.depthTexture.magFilter=Ou}else l.isPointLight?(d.map=new ry(i.x),d.map.depthTexture=new Qm(i.x,zu)):(d.map=new Ef(i.x,i.y),d.map.depthTexture=new Zm(i.x,i.y,zu)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Xu,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ju,d.map.depthTexture.magFilter=ju):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ou,d.map.depthTexture.magFilter=Ou);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vy.setFromMatrixPosition(l.matrixWorld),e.position.copy(Vy),Hy.copy(e.position),Hy.add(Ry[t]),e.up.copy(zy[t]),e.lookAt(Hy),e.updateMatrixWorld(),n.makeTranslation(-Vy.x,-Vy.y,-Vy.z),By.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(By,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ef(i.x,i.y,{format:ed,type:Vu}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Nv(e,t){function n(){let t=!1,n=new wf,r=null,i=new wf(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ie(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rf[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new lp(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,te={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new wf().fromArray(I),L=new wf().fromArray(ne);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let z={};z[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(3),ue(!1),de(1),ie(e.CULL_FACE),ce(0);function ie(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function B(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function V(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let H={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ae(e.BLEND),g=!1);else if(g===!1&&(ie(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ll(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ll(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ll(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ll(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(H[r],H[i],H[o],H[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function le(t,n){t.side===2?ae(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ue(r),t.blending===1&&t.transparent===!1?ce(0):ce(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),pe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function de(t){t===0?ae(e.CULL_FACE):(ie(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function fe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function pe(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function me(t){t?ie(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function U(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function he(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||z[t]),i.type=t,i.texture=n)}function W(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ge(){try{e.compressedTexImage2D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function G(){try{e.compressedTexImage3D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function _e(){try{e.texSubImage2D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function K(){try{e.texSubImage3D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function ye(){try{e.texStorage2D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function be(){try{e.texStorage3D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function xe(){try{e.texImage2D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function Se(){try{e.texImage3D(...arguments)}catch(e){Ll(`WebGLState:`,e)}}function Ce(t){return d[t]===void 0?e.getParameter(t):d[t]}function we(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Te(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Ee(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function De(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new lp(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:ae,bindFramebuffer:oe,drawBuffers:B,useProgram:V,setBlending:ce,setMaterial:le,setFlipSided:ue,setCullFace:de,setLineWidth:fe,setPolygonOffset:pe,setScissorTest:me,activeTexture:U,bindTexture:he,unbindTexture:W,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:xe,texImage3D:Se,pixelStorei:we,getParameter:Ce,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ye,texStorage3D:be,texSubImage2D:_e,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:Te,viewport:Ee,reset:ke}}function Pv(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Z,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ml(`canvas`)}function g(e,t,n){let r=1,i=ge(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Il(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Il(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Il(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Il(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Yd:gf.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Il(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&Il(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&he(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Il(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Il(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ae(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ae(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ee(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ae(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?oe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let I={[Tu]:e.REPEAT,[Eu]:e.CLAMP_TO_EDGE,[Du]:e.MIRRORED_REPEAT},ne={[Ou]:e.NEAREST,[ku]:e.NEAREST_MIPMAP_NEAREST,[Au]:e.NEAREST_MIPMAP_LINEAR,[ju]:e.LINEAR,[Mu]:e.LINEAR_MIPMAP_NEAREST,[Nu]:e.LINEAR_MIPMAP_LINEAR},re={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function L(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Il(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,I[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,I[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,I[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ne[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ne[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,re[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function R(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function z(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ie(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=z(n.start,r.width,4),c=z(t.start,r.width,4);n.start<=i+1&&a===c&&z(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=R(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=gf.getPrimaries(gf.workingColorSpace),r=o.colorSpace===``?null:gf.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=W(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);L(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Zu,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ie(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Cu(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Il(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Il(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Cu(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ge(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ge(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,o,s){if(o.image.length!==6)return;let c=R(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=gf.getPrimaries(gf.workingColorSpace),r=o.colorSpace===``?null:gf.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=W(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);L(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Il(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ge(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function B(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function V(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);U(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),L(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)U(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function H(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?se(i.__webglFramebuffer[0],t,0):se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),V(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),V(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,i){let a=r.get(t);n!==void 0&&B(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&H(t)}function le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&U(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),V(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),L(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)B(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else B(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),L(c,a),B(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),L(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)B(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else B(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&H(t)}function ue(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let de=[],fe=[];function pe(t){if(t.samples>0){if(U(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(de.length=0,fe.length=0,de.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(de.push(l),fe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,fe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function me(e){return Math.min(i.maxSamples,e.samples)}function U(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function he(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function W(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(gf.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Il(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ll(`WebGLTextures: Unsupported texture color space:`,n)),t}function ge(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=B,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Fv(e,t){function n(n,r=``){let i,a=gf.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}function Iv(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,gu(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jy),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Lv(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ll(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Il(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Il(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}function Rv(){return Xy===null&&(Xy=new km(Yy,16,16,ed,Vu),Xy.name=`DFG_LUT`,Xy.minFilter=ju,Xy.magFilter=ju,Xy.wrapS=Eu,Xy.wrapT=Eu,Xy.generateMipmaps=!1,Xy.needsUpdate=!0),Xy}var zv,$,Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,Jv,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy=n((()=>{Ng(),zv={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new lp(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ff},alphaMap:{value:null},alphaMapTransform:{value:new ff},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ff}},envmap:{envMap:{value:null},envMapRotation:{value:new ff},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ff}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ff}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ff},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ff},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ff},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ff}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ff}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ff}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lp(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new lp(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ff},alphaTest:{value:0},uvTransform:{value:new ff}},sprite:{diffuse:{value:new lp(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ff},alphaMap:{value:null},alphaMapTransform:{value:new ff},alphaTest:{value:0}}},Bv={basic:{uniforms:pu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:zv.meshbasic_vert,fragmentShader:zv.meshbasic_frag},lambert:{uniforms:pu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new lp(0)},envMapIntensity:{value:1}}]),vertexShader:zv.meshlambert_vert,fragmentShader:zv.meshlambert_frag},phong:{uniforms:pu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new lp(0)},specular:{value:new lp(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zv.meshphong_vert,fragmentShader:zv.meshphong_frag},standard:{uniforms:pu([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new lp(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zv.meshphysical_vert,fragmentShader:zv.meshphysical_frag},toon:{uniforms:pu([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new lp(0)}}]),vertexShader:zv.meshtoon_vert,fragmentShader:zv.meshtoon_frag},matcap:{uniforms:pu([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:zv.meshmatcap_vert,fragmentShader:zv.meshmatcap_frag},points:{uniforms:pu([$.points,$.fog]),vertexShader:zv.points_vert,fragmentShader:zv.points_frag},dashed:{uniforms:pu([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zv.linedashed_vert,fragmentShader:zv.linedashed_frag},depth:{uniforms:pu([$.common,$.displacementmap]),vertexShader:zv.depth_vert,fragmentShader:zv.depth_frag},normal:{uniforms:pu([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:zv.meshnormal_vert,fragmentShader:zv.meshnormal_frag},sprite:{uniforms:pu([$.sprite,$.fog]),vertexShader:zv.sprite_vert,fragmentShader:zv.sprite_frag},background:{uniforms:{uvTransform:{value:new ff},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zv.background_vert,fragmentShader:zv.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ff}},vertexShader:zv.backgroundCube_vert,fragmentShader:zv.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zv.cube_vert,fragmentShader:zv.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zv.equirect_vert,fragmentShader:zv.equirect_frag},distance:{uniforms:pu([$.common,$.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zv.distance_vert,fragmentShader:zv.distance_frag},shadow:{uniforms:pu([$.lights,$.fog,{color:{value:new lp(0)},opacity:{value:1}}]),vertexShader:zv.shadow_vert,fragmentShader:zv.shadow_frag}},Bv.physical={uniforms:pu([Bv.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ff},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ff},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ff},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ff},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ff},sheen:{value:0},sheenColor:{value:new lp(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ff},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ff},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ff},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ff},attenuationDistance:{value:0},attenuationColor:{value:new lp(0)},specularColor:{value:new lp(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ff},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ff},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ff}}]),vertexShader:zv.meshphysical_vert,fragmentShader:zv.meshphysical_frag},Vv={r:0,b:0,g:0},Hv=new kf,Uv=new ff,Uv.set(-1,0,0,0,1,0,0,0,1),Wv=4,Gv=6,Kv=20,qv=256,Jv=new mg,Yv=new lp,Xv=null,Zv=0,Qv=0,$v=!1,ey=new Q,ty=new Q,ny=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ey}=i;Xv=this._renderer.getRenderTarget(),Zv=this._renderer.getActiveCubeFace(),Qv=this._renderer.getActiveMipmapLevel(),$v=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xv,Zv,Qv),this._renderer.xr.enabled=$v,e.scissorTest=!1,Ug(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xv=this._renderer.getRenderTarget(),Zv=this._renderer.getActiveCubeFace(),Qv=this._renderer.getActiveMipmapLevel(),$v=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ju,minFilter:ju,generateMipmaps:!1,type:Vu,format:Yu,colorSpace:Jd,depthBuffer:!1},r=Hg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vg(r)),this._blurMaterial=Gg(r,e,t),this._ggxMaterial=Wg(r,e,t)}return r}_compileMaterial(e){let t=new Om(new im,e);this._renderer.compile(t,Jv)}_sceneToCubeUV(e,t,n,r,i){let a=new dg(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Yv),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Om(new eh,new gm({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Yv),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ug(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ug(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Jv)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Wv?n-d+Wv:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ug(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Jv),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ug(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Jv)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ug(t,3*l*(r>this._lodMax-Wv?r-this._lodMax+Wv:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Jv)}},ry=class extends Ef{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ym(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new eh(5,5,5),i=new Ah({name:`CubemapFromEquirect`,uniforms:fu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Om(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ju),new yg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},iy={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`},ay=new Cf,oy=new Zm(1,1),sy=new Df,cy=new Of,ly=new Ym,uy=[],dy=[],fy=new Float32Array(16),py=new Float32Array(9),my=new Float32Array(4),hy=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}},gy=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},_y=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vy=/(\w+)(\])?(\[|\.)?/g,yy=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);J_(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},by=37297,xy=0,Sy=new ff,Cy={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`},wy=new Q,Ty=/^[ \t]*#include +<([\w\d./]+)>/gm,Ey=new Map,Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Oy={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`},ky={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`},Ay={302:`ENVMAP_MODE_REFRACTION`},jy={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`},My=0,Ny=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Py(e),t.set(e,n)),n}},Py=class{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}},Fy=0,Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ry=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],zy=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],By=new kf,Vy=new Q,Hy=new Q,Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $m(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ah({vertexShader:Uy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Om(new Ch(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ky=class extends af{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Gy,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Z,C=null,w=null,T=new dg;T.viewport=new wf;let E=new dg;E.viewport=new wf;let D=[T,E],O=new bg,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ap,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ap,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ap,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Il(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Il(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Zu:Xu,a=_.stencil?Wu:zu);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ef(d.textureWidth,d.textureHeight,{format:Yu,type:Pu,depthTexture:new Zm(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ef(f.framebufferWidth,f.framebufferHeight,{format:Yu,type:Pu,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Q,F=new Q;function ee(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);a.length===2?ee(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),I(e,O,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=cf*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new dg,o.layers.enable(n),o.viewport=new wf,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new $m,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let L=new Pg;L.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},qy=new kf,Jy=new ff,Jy.set(-1,0,0,0,1,0,0,0,1),Yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xy=null,Zy=class{constructor(e={}){let{canvas:t=Nl(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pu}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([nd,td,$u]),g=new Set([Pu,zu,Lu,Wu,Hu,Uu]),_=new Uint32Array(4),v=new Int32Array(4),y=new Q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=qd;let j=0,M=0,N=null,P=-1,F=null,ee=new wf,te=new wf,I=null,ne=new lp(0),re=0,L=t.width,R=t.height,z=1,ie=null,ae=null,oe=new wf(0,0,L,R),B=new wf(0,0,L,R),V=!1,se=new Hm,H=!1,ce=!1,le=new kf,ue=new Q,de=new wf,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return N===null?z:1}let U=n;function he(e,n){return t.getContext(e,n)}let W,ge,G,_e,K,q,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),U===null){let t=`webgl2`;if(U=he(t,e),U===null)throw he(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Fe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Ll(`WebGLRenderer: `+e.message),e}function Fe(){W=new Xg(U),W.init(),Me=new Fv(U,W),ge=new zg(U,W,e,Me),G=new Nv(U,W),ge.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),O=U.createFramebuffer(),k=U.createFramebuffer(),A=U.createFramebuffer(),_e=new $g(U),K=new xv,q=new Pv(U,W,G,K,ge,Me,_e),ve=new Yg(T),ye=new Fg(U),Ne=new Lg(U,ye),be=new Zg(U,ye,_e,Ne),xe=new t_(U,be,ye,Ne,_e),ke=new e_(U,ge,q),Ee=new Bg(K),Se=new bv(T,ve,W,ge,Ne,Ee),Ce=new Iv(T,K),we=new Tv,Te=new jv(W),Oe=new Ig(T,ve,G,xe,p,s),De=new Mv(T,xe,ge),Pe=new Lv(U,_e,ge,G),Ae=new Rg(U,W,_e),je=new Qg(U,W,_e),_e.programs=Se.programs,T.capabilities=ge,T.extensions=W,T.properties=K,T.renderLists=we,T.shadowMap=De,T.state=G,T.info=_e}m!==1009&&(w=new n_(m,t.width,t.height,o,r,i));let Ie=new Ky(T,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=W.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=W.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(e){e!==void 0&&(z=e,this.setSize(L,R,!1))},this.getSize=function(e){return e.set(L,R)},this.setSize=function(e,n,r=!0){Ie.isPresenting?Il(`WebGLRenderer: Can't change size while VR device is presenting.`):(L=e,R=n,t.width=Math.floor(e*z),t.height=Math.floor(n*z),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(L*z,R*z).floor()},this.setDrawingBufferSize=function(e,n,r){L=e,R=n,z=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Ll(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Il(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ee)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),G.viewport(ee.copy(oe).multiplyScalar(z).round())},this.getScissor=function(e){return e.copy(B)},this.setScissor=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),G.scissor(te.copy(B).multiplyScalar(z).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(e){G.setScissorTest(V=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,U.clearBufferiv(U.COLOR,0,v))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Oe.dispose(),we.dispose(),Te.dispose(),K.dispose(),ve.dispose(),xe.dispose(),Ne.dispose(),Pe.dispose(),Se.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),Pl(`WebGLRenderer: Context Lost.`),E=!0}function Re(){Pl(`WebGLRenderer: Context Restored.`),E=!1;let e=_e.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Fe(),_e.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function ze(e){Ll(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),K.remove(e)}function He(e){let t=K.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=it(e,t,n,r,i);G.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=ye.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(G.setLineWidth(r.wireframeLinewidth*me()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),G.setLineWidth(e*me()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(W.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ye.get(c).bytesPerElement:1,o=K.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),H===!0&&Ee.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,r),e.side=0,e.needsUpdate=!0,et(e,t,r),e.side=2):et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Te.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ce=this.localClippingEnabled,H=Ee.init(this.clippingPlanes,ce),H===!0&&Ee.setGlobalState(this.clippingPlanes,t),D!==null&&De.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ue(o,n,t,e),r.add(o)}else Ue(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=K.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}W.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new Pg;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ll(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ie.enabled===!0&&Ie.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Te.get(e,C.length),x.init(t),x.state.textureUnits=q.getTextureUnits(),C.push(x),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le,ef,t.reversedDepth),ce=this.localClippingEnabled,H=Ee.init(this.clippingPlanes,ce),b=we.get(e,S.length),b.init(),S.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,T.sortObjects)}Ye(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ie,ae),pe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,pe&&Oe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),H===!0&&Ee.beginShadows();let i=x.state.shadowsArray;if(De.render(i,e,t),H===!0&&Ee.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ze(n,r,e,a)}pe&&Oe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Xe(b,e,n,n.viewport)}}else r.length>0&&Ze(n,r,e,t),pe&&Oe.render(e),Xe(b,e,t)}N!==null&&M===0&&(q.updateMultisampleRenderTarget(N),q.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ne.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],q.setTextureUnits(x.state.textureUnits),H===!0&&Ee.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(se)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let i=xe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,de.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(se))){let i=xe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),de.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,de.z,s,t)}}else a.visible&&b.push(e,i,a,n,de.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),H===!0&&Ee.setGlobalState(T.clippingPlanes,n),r&&G.viewport(ee.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=W.has(`EXT_color_buffer_half_float`)||W.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ef(1,1,{generateMipmaps:!0,type:e?Vu:Pu,minFilter:Nu,samples:Math.max(4,ge.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gf.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ee;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ne),re=T.getClearAlpha(),re<1&&T.setClearColor(16777215,.5),T.clear(),pe&&Oe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),H===!0&&Ee.setGlobalState(T.clippingPlanes,r),Qe(e,n,r),q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a),W.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,$e(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ne,re),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&$e(o,t,n,s,l,c)}}function $e(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=fe);let r=K.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return nt(e,s),d}else s.uniforms=Se.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Se.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=yy.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=K.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function it(e,t,n,r,i){t.isScene!==!0&&(t=fe),q.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gf.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=K.get(r),y=x.state.lights;if(H===!0&&(ce===!0||e!==F)){let t=e===F&&r.id===P;Ee.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ee.numPlanes||v.numIntersection!==Ee.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=et(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(G.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=rt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){G.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(U,`projectionMatrix`,e.projectionMatrix),O.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(U,ue.setFromMatrixPosition(e.matrixWorld)),ge.logarithmicDepthBuffer&&O.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(U,`sunShadowMap`,y.state.sunShadowMap,q),y.state.directionalShadowMap.length>0&&O.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,q),y.state.spotShadowMap.length>0&&O.setValue(U,`spotShadowMap`,y.state.spotShadowMap,q),y.state.pointShadowMap.length>0&&O.setValue(U,`pointShadowMap`,y.state.pointShadowMap,q)),i.isSkinnedMesh){O.setOptional(U,i,`bindMatrix`),O.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(U,`boneTexture`,e.boneTexture,q))}i.isBatchedMesh&&(O.setOptional(U,i,`batchingTexture`),O.setValue(U,`batchingTexture`,i._matricesTexture,q),O.setOptional(U,i,`batchingIdTexture`),O.setValue(U,`batchingIdTexture`,i._indirectTexture,q),O.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(U,`batchingColorTexture`,i._colorsTexture,q));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&ke.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Rv()),w){if(O.setValue(U,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&at(k,E),a&&r.fog===!0&&Ce.refreshFogUniforms(k,a),Ce.refreshMaterialUniforms(k,r,z,R,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}yy.upload(U,tt(v),k,q)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(yy.upload(U,tt(v),k,q),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(U,`center`,i.center),O.setValue(U,`modelViewMatrix`,i.modelViewMatrix),O.setValue(U,`normalMatrix`,i.normalMatrix),O.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,S),Pe.bind(n,S)}}return S}function at(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=K.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),K.get(e.texture).__webglTexture=t,K.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=K.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=K.get(e);if(o.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),ee.copy(e.viewport),te.copy(e.scissor),I=e.scissorTest,G.viewport(ee),G.scissor(te),G.setScissorTest(I),P=-1;return}if(o.__webglFramebuffer===void 0)q.setupRenderTarget(e);else if(o.__hasExternalTextures)q.rebindTextures(e,K.get(e.texture).__webglTexture,K.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&K.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);q.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=K.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&q.useMultisampledRTT(e)===!1?K.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ee.copy(e.viewport),te.copy(e.scissor),I=e.scissorTest}else ee.copy(oe).multiplyScalar(z).floor(),te.copy(B).multiplyScalar(z).floor(),I=V;if(n!==0&&(r=O),G.bindFramebuffer(U.FRAMEBUFFER,r)&&G.drawBuffers(e,r),G.viewport(ee),G.scissor(te),G.setScissorTest(I),i){let r=K.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=K.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=K.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}P=-1};function st(e){let t=K.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ge.textureFormatReadable(e.format),t.__typeReadable=ge.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ll(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=K.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){G.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=st(o);if(u.__formatReadable===!1){Ll(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Ll(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,Me.convert(c),Me.convert(l),a)}finally{let e=N===null?null:K.get(N).__webglFramebuffer;G.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=K.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){G.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=st(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,Me.convert(l),Me.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=N===null?null:K.get(N).__webglFramebuffer;G.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zl(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;q.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),G.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Me.convert(t.format),_=Me.convert(t.type),v;t.isData3DTexture?(q.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(q.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(q.setTexture2D(t,0),v=U.TEXTURE_2D),G.activeTexture(U.TEXTURE0),G.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),G.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),G.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=G.getParameter(U.UNPACK_ROW_LENGTH),b=G.getParameter(U.UNPACK_IMAGE_HEIGHT),x=G.getParameter(U.UNPACK_SKIP_PIXELS),S=G.getParameter(U.UNPACK_SKIP_ROWS),C=G.getParameter(U.UNPACK_SKIP_IMAGES);G.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),G.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),G.pixelStorei(U.UNPACK_SKIP_PIXELS,l),G.pixelStorei(U.UNPACK_SKIP_ROWS,u),G.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=K.get(e),r=K.get(t),h=K.get(n.__renderTarget),g=K.get(r.__renderTarget);G.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);G.bindFramebuffer(U.READ_FRAMEBUFFER,null),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||K.has(e)){let n=K.get(e),r=K.get(t);G.bindFramebuffer(U.READ_FRAMEBUFFER,k),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);G.bindFramebuffer(U.READ_FRAMEBUFFER,null),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);G.pixelStorei(U.UNPACK_ROW_LENGTH,y),G.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),G.pixelStorei(U.UNPACK_SKIP_PIXELS,x),G.pixelStorei(U.UNPACK_SKIP_ROWS,S),G.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),G.unbindTexture()},this.initRenderTarget=function(e){K.get(e).__webglFramebuffer===void 0&&q.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?q.setTextureCube(e,0):e.isData3DTexture?q.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?q.setTexture2DArray(e,0):q.setTexture2D(e,0),G.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,G.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ef}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gf._getDrawingBufferColorSpace(e),t.unpackColorSpace=gf._getUnpackColorSpace()}}}));function $y(){var e=function(e){return e<0?0:e>1?1:e},t=function(e,t,n){return e<t?t:e>n?n:e},n=function(e,t,n){return e+(t-e)*n},r=function(t,n,r){return e((t-n)/(r-n))},i=function(e){return e*e*(3-2*e)},a=function(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2},o=function(e){return e*e},s=function(e){return 1-(1-e)**3},c=function(e,t,n){return Math.exp(-(((e-t)/n)**2))},l=20260918;function u(){return l=(l*1664525+1013904223)%4294967296,l/4294967296}function d(e,t){return e+(t-e)*u()}function f(e,t){var n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function p(e,t,n){var r=new Xm(e);return r.colorSpace=t?qd:``,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Tu,r.repeat.set(n,n)),r}function m(){var e=256,t=f(e,e),n=t.getContext(`2d`);n.fillStyle=`#8c8c8c`,n.fillRect(0,0,e,e),n.lineCap=`round`,n.strokeStyle=`#f2f2f2`,n.lineWidth=e*.026,n.beginPath(),n.moveTo(e/2,e),n.lineTo(e/2,e*.02),n.stroke(),n.lineWidth=e*.01;for(var r=1;r<=11;r++){var i=r/12,a=e-i*e*.96,o=Math.sin(i**.8*Math.PI)*e*.45;n.strokeStyle=`rgba(240,240,240,`+(.8-i*.3).toFixed(3)+`)`,n.beginPath(),n.moveTo(e/2,a),n.quadraticCurveTo(e/2+o*.55,a-e*.045,e/2+o,a-e*.105),n.stroke(),n.beginPath(),n.moveTo(e/2,a),n.quadraticCurveTo(e/2-o*.55,a-e*.045,e/2-o,a-e*.105),n.stroke()}for(var s=0;s<1200;s++)n.fillStyle=`rgba(0,0,0,`+d(.02,.08).toFixed(3)+`)`,n.fillRect(d(0,e),d(0,e),d(1,3),d(1,3));return t}function h(){var e=256,t=f(e,e),n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,`#b53c23`),r.addColorStop(.42,`#8d1d12`),r.addColorStop(.78,`#6a110c`),r.addColorStop(1,`#470b07`),n.fillStyle=r,n.fillRect(0,0,e,e);for(var i=0;i<24;i++){var a=d(0,e),o=d(0,e),s=d(e*.08,e*.3),c=n.createRadialGradient(a,o,0,a,o,s);c.addColorStop(0,`rgba(206,86,48,`+d(.12,.34).toFixed(3)+`)`),c.addColorStop(1,`rgba(206,86,48,0)`),n.fillStyle=c,n.fillRect(0,0,e,e)}for(var l=0;l<520;l++)n.fillStyle=`rgba(40,9,5,`+d(.1,.34).toFixed(3)+`)`,n.beginPath(),n.arc(d(0,e),d(0,e),d(.5,1.8),0,6.283),n.fill();return t}function g(){var e=512,t=f(e,e),n=t.getContext(`2d`);n.fillStyle=`#909090`,n.fillRect(0,0,e,e);for(var r=0;r<90;r++){var i=d(0,e),a=d(0,e),o=d(e*.02,e*.13),s=n.createRadialGradient(i,a,0,i,a,o),c=d(0,1)>.5?255:0;s.addColorStop(0,`rgba(`+c+`,`+c+`,`+c+`,`+d(.05,.16).toFixed(3)+`)`),s.addColorStop(1,`rgba(`+c+`,`+c+`,`+c+`,0)`),n.fillStyle=s,n.fillRect(0,0,e,e)}n.lineCap=`round`;for(var l=0;l<900;l++){var p=d(0,e),m=d(0,e),h=d(e*.02,e*.11),g=d(-.42,.42)+Math.PI/2;n.strokeStyle=u()>.5?`rgba(255,255,255,`+d(.05,.18).toFixed(3)+`)`:`rgba(0,0,0,`+d(.06,.22).toFixed(3)+`)`,n.lineWidth=d(.7,2.1),n.beginPath(),n.moveTo(p,m),n.quadraticCurveTo(p+Math.cos(g)*h*.5+d(-4,4),m+Math.sin(g)*h*.5,p+Math.cos(g)*h,m+Math.sin(g)*h),n.stroke()}for(var _=0;_<1500;_++)n.fillStyle=`rgba(255,255,255,`+d(.04,.15).toFixed(3)+`)`,n.beginPath(),n.arc(d(0,e),d(0,e),d(.4,1.5),0,6.283),n.fill();return t}function _(){var e=256,t=f(e,e),n=t.getContext(`2d`);n.fillStyle=`#3b2415`,n.fillRect(0,0,e,e);for(var r=0;r<6e3;r++){var i=d(-.22,.3),a=Math.round(58+i*120),o=Math.round(36+i*90),s=Math.round(21+i*66);n.fillStyle=`rgb(`+a+`,`+o+`,`+s+`)`,n.fillRect(d(0,e),d(0,e),d(1.2,3.4),d(1.2,3.4))}return t}function v(e){var t=128,n=f(t,t),r=n.getContext(`2d`),i=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);return i.addColorStop(0,`rgba(255,255,255,1)`),i.addColorStop(e,`rgba(255,255,255,`+((1-e)*.9).toFixed(3)+`)`),i.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=i,r.fillRect(0,0,t,t),n}function y(e,t){var n=f(t,t/2);e(n.getContext(`2d`),n.width,n.height);var r=new Xm(n);return r.mapping=303,r.colorSpace=qd,r}function b(e,t,n){var r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`#f4ddb2`),r.addColorStop(.3,`#dab57a`),r.addColorStop(.5,`#8e7b4f`),r.addColorStop(.62,`#3f4a2c`),r.addColorStop(1,`#171208`),e.fillStyle=r,e.fillRect(0,0,t,n);var i=t*.64,a=n*.26,o=e.createRadialGradient(i,a,0,i,a,n*.55);o.addColorStop(0,`rgba(255,248,226,1)`),o.addColorStop(.16,`rgba(255,229,170,.85)`),o.addColorStop(1,`rgba(255,229,170,0)`),e.fillStyle=o,e.fillRect(0,0,t,n);for(var s=0;s<30;s++)e.fillStyle=`rgba(22,30,14,`+d(.1,.34).toFixed(3)+`)`,e.beginPath(),e.ellipse(d(0,t),d(n*.42,n*.8),d(t*.03,t*.1),d(n*.03,n*.1),d(0,3),0,6.283),e.fill()}function x(e,t,n){e.fillStyle=`#0b0906`,e.fillRect(0,0,t,n);function r(r,i,a,o,s){var c=e.createRadialGradient(r,i,0,r,i,a);c.addColorStop(0,s.replace(`%a`,o)),c.addColorStop(1,s.replace(`%a`,0)),e.fillStyle=c,e.fillRect(0,0,t,n)}r(t*.22,n*.28,t*.26,.95,`rgba(255,246,232,%a)`),r(t*.78,n*.32,t*.18,.55,`rgba(226,236,255,%a)`),r(t*.5,n*.88,t*.45,.16,`rgba(180,140,84,%a)`)}function S(e,t){for(var n=[],r=[],i=[],a=0,o;a<=e;a++){var s=a/e,c=Math.sin(Math.PI*s**.78)**.68*.3;for(c*=1+.05*Math.sin(s*15),s>.88&&(c*=Math.max(1e-4,(1-s)/.12)),s<.06&&(c*=s/.06),o=0;o<=t;o++){var l=o/t*2-1,u=-(Math.abs(l)**1.45)*c*.68,d=-(s**2.2)*.17+s**1.1*.02;n.push(l*c,s,u+d),r.push((l+1)/2,s)}}for(a=0;a<e;a++)for(o=0;o<t;o++){var f=a*(t+1)+o,p=f+t+1;i.push(f,p,f+1,p,p+1,f+1)}var m=new im;return m.setAttribute(`position`,new Kp(n,3)),m.setAttribute(`uv`,new Kp(r,2)),m.setIndex(i),m.computeVertexNormals(),m}function C(e){for(var t=new wh(1,e,Math.round(e*.7)),n=t.attributes.position,r=new Q,i=0;i<n.count;i++){r.fromBufferAttribute(n,i);var a=r.x,o=r.y*1.08,s=r.z,l=c(Math.atan2(s,a),1.15,.3)*.055*(1-Math.abs(r.y)),u=c(r.y,-1,.34)*.14,d=.014*Math.sin(a*13.3+o*9.1)*Math.cos(s*11.7-o*7.3),f=1-l-u+d;n.setXYZ(i,a*f,o*(1-u*.7),s*f)}return t.computeVertexNormals(),t}var w=.105;function T(t){for(var n=t.attributes.position,r=new Q,a=new Float32Array(n.count),o=0;o<n.count;o++){r.fromBufferAttribute(n,o);var s=r.x*.66,c=r.y,l=r.z*.44,u=Math.abs(r.y),d=1-.22*u**3;s*=d,l*=d;var f=i(e(-r.z/.22));l*=1-.56*f;var p=.105*Math.sin(c*2.3+.35),m=(s-p)/.072,h=Math.exp(-m*m)*(1-u**2.6)*f;l+=h*.155,s+=(s>p?1:-1)*h*.02;var g=.009*Math.sin(s*21+c*15)*Math.cos(l*17-c*11);a[o]=e(h*1.35),n.setXYZ(o,s+g,c*(1-.05*h),l+g*.6)}return t.computeVertexNormals(),t.setAttribute(`aCrease`,new Up(a,1)),t.scale(w,w,w),t}function E(e){return T(new wh(1,e,Math.round(e*.68)))}var D=.46,O=.05,k=.74;function A(e){for(var t=[[0,0],[.5,0],[.56,.014],[.58,.04],[.68,.07],[.8,.118],[.9,.18],[.965,.25],[1,.31],[.996,.328],[.958,.306],[.92,.246],[.884,.17],[.845,.112],[.74,.074],[.54,.058],[.3,.052],[0,.05]],n=[],r=0;r<t.length;r++)n.push(new Z(t[r][0]*e,t[r][1]*e));return new Sh(n,64)}function j(){for(var e=new xh(1,0),t=e.attributes.position,n=new Q,r=0;r<t.count;r++)n.fromBufferAttribute(t,r).multiplyScalar(d(.55,1.25)),t.setXYZ(r,n.x,n.y*d(.6,1),n.z);return e.computeVertexNormals(),e}return{clamp01:e,clamp:t,lerp:n,seg:r,smooth:i,easeIO:a,easeIn:o,easeOut:s,bell:c,rnd:u,rr:d,cv:f,makeTex:p,leafVeinCanvas:m,cherrySkinCanvas:h,beanSurfaceCanvas:g,groundsCanvas:_,puffCanvas:v,equirect:y,paintPlantation:b,paintStudio:x,leafGeometry:S,cherryGeometry:C,BEAN:w,deformBean:T,beanGeometry:E,VESSEL_R:D,FLOOR:O,INNER:k,vesselGeometry:A,grindGeometry:j}}var eb=n((()=>{Qy()}));function tb(){let e=[];return{own(t){return e.push(()=>{t.kill?t.kill():t.disconnect?t.disconnect():t.dispose?.()}),t},listen(t,n,r,i){t.addEventListener(n,r,i),e.push(()=>t.removeEventListener(n,r,i))},tick(t){bi.ticker.add(t),e.push(()=>bi.ticker.remove(t))},dispose(t,n,r=[]){e.splice(0).reverse().forEach(e=>e());let i=new Set(r);t?.traverse(e=>{e.geometry&&i.add(e.geometry),e.skeleton&&i.add(e.skeleton),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(e=>{i.add(e),Object.values(e).forEach(e=>{e?.isTexture&&i.add(e)}),Object.values(e.uniforms||{}).forEach(e=>{e.value?.isTexture&&i.add(e.value)})})}),i.forEach(e=>e.dispose?.()),t?.clear(),n?.dispose(),n?.forceContextLoss()}}}var nb=n((()=>{$s()}));function rb(e,t){let n=`http://www.w3.org/2000/svg`,r=document.createElementNS(n,`svg`);r.classList.add(`sb-roast-vapour`),r.setAttribute(`aria-hidden`,`true`);let i=Array.from({length:4},()=>{let e=document.createElementNS(n,`path`);return r.append(e),e});e.append(r),t({dispose(){r.remove()}});let a=e.clientWidth,o=e.clientHeight,s=(e,t,n)=>{let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)};return{resize(e,t){a=e,o=t},update(e){let t=s(e,.712,.737)*(1-s(e,.784,.804));if(r.style.opacity=t.toFixed(4),r.style.visibility=t>.001?`visible`:`hidden`,t<.001)return;let n=a,c=o,l=n<768;r.setAttribute(`viewBox`,`0 0 ${n} ${c}`);let u=(l?Math.min(c*.78,n*5/3):c*1.02)/960,d=n*(l?.5:.665),f=c*(l?.36:.45),p=(e-.712)*105;i.forEach((e,t)=>{let n=d+(-65+t*42)*u,r=f-(195+t%2*22)*u,i=Math.sin(p+t*1.7)*24*u;e.setAttribute(`d`,`M ${n} ${r} C ${n-24*u} ${r-38*u}, ${n+i+28*u} ${r-69*u}, ${n+i} ${r-101*u} S ${n-i-20*u} ${r-158*u}, ${n+i*.7} ${r-193*u}`),e.style.strokeWidth=`${(t%2?9:13)*u}px`,e.style.opacity=(.1+.035*Math.sin(p+t)).toFixed(3)})}}}var ib=n((()=>{}));function ab(e,t,n){let r=e.clientWidth,i=e.clientHeight,a=r<768,o=a?`assets/video/mobile/coffee-journey-v30.mp4`:`assets/video/coffee-journey-v28.mp4`,s=document.createElement(`video`);s.className=`sb-journey-video`,s.muted=!0,s.defaultMuted=!0,s.playsInline=!0,s.preload=`auto`,s.disablePictureInPicture=!0,s.setAttribute(`aria-hidden`,`true`),s.setAttribute(`muted`,``),s.setAttribute(`playsinline`,``),s.poster=`assets/video/coffee-journey-poster-v28.jpg`,s.src=o,e.append(s);let c=rb(e,t),l=!1,u=!1,d=!1,f=0,p,m=!1,h=!0,g=new AbortController,_=document.documentElement,v=e=>Math.max(0,Math.min(1,e)),y=(e,t,n)=>{let r=v((e-t)/(n-t));return r*r*(3-2*r)};function b(e){if(e<=ob[0][0])return 0;for(let t=1;t<ob.length;t++){let[n,r]=ob[t],[i,a]=ob[t-1];if(e<=n)return a+(r-a)*v((e-i)/(n-i))}return ob.at(-1)[1]}let x=document.createElement(`section`);x.className=`sb-process-horizontal`,x.setAttribute(`aria-label`,`Three alternative coffee processing methods`);let S=document.createElement(`div`);S.className=`sb-process-horizontal__track`,x.append(S);let C=[{name:`Natural`,note:4,start:.335,end:.412,t0:1.5,t1:9.7},{name:`Honey`,note:2,start:.412,end:.488,t0:10,t1:14.7},{name:`Washed`,note:3,start:.488,end:.55,t0:15,t1:20.48}].map((t,n)=>{let r=document.createElement(`article`);r.className=`sb-process-horizontal__panel`,r.dataset.method=t.name.toLowerCase();let i=document.createElement(`p`);i.className=`sb-process-horizontal__label`,i.textContent=`0${n+1} / ${t.name} process`,r.append(i);let o=document.createElement(`video`);o.className=`sb-process-panel-video`,o.muted=!0,o.defaultMuted=!0,o.playsInline=!0,o.preload=`auto`,o.setAttribute(`muted`,``),o.setAttribute(`playsinline`,``),o.setAttribute(`aria-hidden`,`true`),o.disablePictureInPicture=!0;let c=document.createElement(`div`);c.className=`sb-notes`;let u=document.createElement(`figure`);u.className=`sb-panel-note`;let d=e.querySelector(`[data-note="${t.note}"]`);u.innerHTML=d.innerHTML,c.append(u),r.append(o,c),S.append(r);let f={...t,panel:r,player:o,note:u,source:d,target:t.t0,active:!1,offset:a?t.t0:0},p=()=>{if(l||!f.active||o.seeking||o.readyState<2)return;let e=Math.max(0,Math.min(o.duration-.05,f.target-f.offset));if(Math.abs(o.currentTime-e)>1/30)try{o.currentTime=e}catch{}};return o.addEventListener(`loadeddata`,p),o.addEventListener(`seeked`,p),f.sync=p,f.error=()=>{f.retried||l||(f.retried=!0,f.offset=0,o.src=s.src,o.load())},o.addEventListener(`error`,f.error),f});e.append(x);function w(e){e.player.getAttribute(`src`)||(e.player.src=a?`assets/video/mobile/${e.name.toLowerCase()}-v30.mp4`:s.src,e.player.load())}function T(e,t){let n=t?y(e,.329,.341)*(1-y(e,.556,.574)):0;x.style.opacity=n.toFixed(4),x.style.visibility=n>.001?`visible`:`hidden`,x.style.transform=`translate3d(0,${(-y(e,.556,.574)*100).toFixed(3)}%,0)`;let i=y(e,.402,.424)+y(e,.478,.5),a=r>=768;if(S.style.transform=a?`none`:`translate3d(${(-i*100/3).toFixed(4)}%,0,0)`,_.classList.toggle(`sb-horizontal-active`,n>.01),_.dataset.processPanel=e<.412?`natural`:e<.488?`honey`:`washed`,t&&e>.27&&e<.59)for(let t of C)(a||e>t.start-.07)&&w(t);for(let o of C){o.target=o.t0+(o.t1-o.t0)*v((e-o.start)/(o.end-o.start));let s=y(e,o.start-.006,o.start+.024);o.panel.style.transform=a&&o.name!==`Natural`?`translate3d(${((1-s)*r*.52).toFixed(2)}px,0,0)`:`none`,o.panel.style.opacity=a&&o.name!==`Natural`?y(e,o.start-.006,o.start+.006).toFixed(4):`1`,o.note.style.opacity=a?`1`:o.source.style.opacity;let c=C.indexOf(o);o.active=t&&n>.001&&(a?s>.001:Math.abs(i-c)<1.01),o.active&&o.sync()}return n}function E(){if(l||!h||d||!u||s.seeking||s.readyState<2)return;let e=Math.min(f,Math.max(0,s.duration-.05));if(Math.abs(s.currentTime-e)>1/30)try{s.currentTime=e}catch{}}function D(){l||(s.seekable.length&&s.seekable.end(s.seekable.length-1)>.1?(u=!0,_.dataset.journeyVideo=`ready`,E(),n()):!m&&/^https?:$/.test(location.protocol)&&(m=!0,fetch(o,{signal:g.signal}).then(e=>{if(!e.ok)throw Error(`Film unavailable`);return e.blob()}).then(e=>{l||(p=URL.createObjectURL(e),s.src=p,s.load())}).catch(()=>{l||k()})))}function O(){l||(E(),n())}function k(){d=!0,u=!1,_.dataset.journeyVideo=`fallback`,n()}s.addEventListener(`loadeddata`,D),s.addEventListener(`canplay`,D),s.addEventListener(`seeked`,O),s.addEventListener(`error`,k),t({dispose(){l=!0,g.abort(),s.pause(),s.removeEventListener(`loadeddata`,D),s.removeEventListener(`canplay`,D),s.removeEventListener(`seeked`,O),s.removeEventListener(`error`,k);for(let e of C)e.player.removeEventListener(`loadeddata`,e.sync),e.player.removeEventListener(`seeked`,e.sync),e.player.removeEventListener(`error`,e.error),e.player.removeAttribute(`src`),e.player.load();x.remove(),_.classList.remove(`sb-horizontal-active`),delete _.dataset.processPanel,s.removeAttribute(`src`),s.load(),s.remove(),p&&URL.revokeObjectURL(p),delete _.dataset.journeyVideo}});function A(e,t){r=e,i=t,c.resize(e,t),s.style.height=`${t}px`,s.style.left=`0`,s.style.top=`0`,s.style.transformOrigin=`0 0`}return A(r,i),{resize:A,update(e){c.update(e);let t=r,n=i,a=t<768,o=y(e,.19,.335),l=a?Math.min(n*.78,t*5/3):n*1.02,p=a?l:Math.min(n*.76,t/3*1.4/.75),m=e<.341,g=m?l+(p-l)*o:l,_=t*(m?(a?.5:.665)+((a?.5:1/6)-(a?.5:.665))*o:a?.5:.665),v=n*(m?(a?.36:.45)+((a?.36:.4)-(a?.36:.45))*o:a?.36:.45);s.style.transform=`translate3d(${_-g*.375}px,${v-g*.5}px,0) scale(${g/n})`,f=b(e),h=e<.341||e>.556,h&&E();let x=u&&!d?y(e,.09,.119)*(1-y(e,.892,.93)):0,S=x*(1-T(e,u&&!d));return s.style.opacity=S.toFixed(4),s.style.visibility=S>.001?`visible`:`hidden`,x}}}var ob,sb=n((()=>{ib(),ob=[[.119,0],[.19,.45],[.335,1.5],[.412,10],[.488,15],[.56,20.5],[.645,26.5],[.7,30.5],[.802,38.5],[.872,44.5],[.9,49.05]]}));function cb(e,t,n){let r=Math.max(e/1672,t/941),i=(e-1672*r)/2+967.5*r,a=(t-941*r)/2+236.5*r,o=e<768,s=o?Math.min(t*.78,e*5/3):t*1.02,c=s*.75,l=e*(o?.5:.665),u=t*(o?.36:.45),d=l+0*s/960,f=u+-95*s/960,p=420*s/960,m=db(n,.004,.105),h=Math.exp(Math.log(p/(45*r))*m),g=fb(i,d,m),_=fb(a,f,m),v=45*r*h;return{x:g,y:_,zoom:h,tx:g-i*h,ty:_-a*h,bodyH:v,frameScale:v/420,videoH:s,videoW:c,targetX:d,targetY:f,targetH:p}}function lb(e,t,n){let r=new Image;r.alt=``,r.draggable=!1,r.className=`sb-hero-match`,r.setAttribute(`aria-hidden`,`true`),r.src=`assets/video/coffee-journey-poster-v28.jpg`,r.style.maskImage=`url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20960%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22soft%22%20x%3D%22-5%25%22%20y%3D%22-5%25%22%20width%3D%22110%25%22%20height%3D%22110%25%22%3E%3CfeGaussianBlur%20stdDeviation%3D%221.2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url(%23soft)%22%20d%3D%22M350%20175%20C285%20170%20247%20214%20225%20281%20C203%20346%20207%20427%20232%20484%20C257%20549%20299%20590%20355%20595%20C420%20594%20466%20547%20492%20486%20C518%20419%20513%20333%20487%20267%20C459%20204%20416%20176%20370%20175%20Z%22%2F%3E%3C%2Fsvg%3E")`,e.append(r);let i=!1,a=!1,o=e.clientWidth,s=e.clientHeight;return r.style.width=`720px`,r.style.height=`960px`,r.style.transformOrigin=`0 0`,r.decode().then(()=>{i||(a=!0,n())}).catch(()=>{}),t({dispose(){i=!0,r.remove()}}),{resize(e,t){o=e,s=t},update(e){let t=cb(o,s,e),n=a?db(e,.025,.06)*(1-db(e,.105,.119)):0;if(r.style.opacity=n.toFixed(4),r.style.visibility=n>.001?`visible`:`hidden`,n>.001){let n=1-db(e,.08,.105),i=t.frameScale*(1+.24*n),a=t.frameScale*(1+.13*n);r.style.transform=`translate3d(${t.x-360*i}px,${t.y-385*a}px,0) scale(${i},${a})`}return t}}}var ub,db,fb,pb=n((()=>{ub=e=>Math.max(0,Math.min(1,e)),db=(e,t,n)=>{let r=ub((e-t)/(n-t));return r*r*(3-2*r)},fb=(e,t,n)=>e+(t-e)*n}));function mb(e,t,n,r){let i=document.getElementById(`sb-stage`),a=document.documentElement,o=document.createElement(`div`);o.className=`sb-process-film`,o.setAttribute(`aria-hidden`,`true`),i.append(o);let s=ab(i,n,r),c=lb(i,n,r),l=!1,u=!1,d=i.clientWidth,f=i.clientHeight,p={cherry:hb,green:gb,roasted:gb,peel:vb,natural:yb,parchment:bb,honey:xb,golden:Sb,grounds:Cb},m={},h=[],g=e=>Math.max(0,Math.min(1,e)),_=(e,t,n)=>{let r=g((e-t)/(n-t));return r*r*(3-2*r)},v=(e,t,n)=>e+(t-e)*n,y=(e,t,n,r,i)=>_(e,t,n)*(1-_(e,r,i));function b(e,t){let n=new Image;return n.alt=``,n.draggable=!1,n.src=t,n.className=`sb-process-object`,n.dataset.object=e,o.append(n),m[e]=n,n}Object.entries(p).forEach(([e,t])=>b(e,t)),m.roasted.style.filter=`sepia(1) saturate(1.7) brightness(.48)`;for(let[e,t]of[[`peelLeft`,vb],[`peelRight`,vb],[`hullLeft`,bb],[`hullRight`,bb]]){let n=b(e,t);n.style.clipPath=e.endsWith(`Left`)?`inset(0 50% 0 0)`:`inset(0 0 0 50%)`}for(let e=0;e<10;e++)for(let t=0;t<7;t++){let n=document.createElement(`i`);n.className=`sb-coffee-fragment`,n.style.backgroundImage=`url("${_b}")`,n.style.backgroundSize=`700% 1000%`,n.style.backgroundPosition=`${t/6*100}% ${e/9*100}%`,n.style.clipPath=`polygon(7% 3%,96% 0,100% 81%,73% 100%,0 90%)`,o.append(n),h.push({el:n,row:e,col:t,noise:Math.sin((e*7+t)*127.1)*.5+.5})}Promise.all(Object.values(m).map(e=>e.decode())).then(()=>{u||(l=!0,a.dataset.macroReady=`true`,r())}).catch(()=>{u||(a.dataset.macroReady=`fallback`)}),n({dispose(){u=!0,o.remove(),a.classList.remove(`sb-film-light`),delete a.dataset.macroReady,delete a.dataset.processStage}});function x(e,t,n,r,i=1,a=0,o){let s=m[e],c=o||r*s.naturalWidth/s.naturalHeight;s.style.width=`${c.toFixed(2)}px`,s.style.height=`${r.toFixed(2)}px`,s.style.transform=`translate3d(${(t-c/2).toFixed(2)}px,${(n-r/2).toFixed(2)}px,0) rotate(${a.toFixed(3)}deg)`,s.style.opacity=g(i).toFixed(4)}let S=new Q,C=new Q;return{get ready(){return l},resize(e,t){d=e,f=t,s.resize(e,t),c.resize(e,t)},update(e,n,r,u,p,g,b){if(c.update(e),!l)return o.style.opacity=`0`,!1;let w=d,T=f,E=w<768,D=_(e,.113,.14),O=1-_(e,.925,.982),k=s.update(e);o.style.opacity=(D*O*(1-k)).toFixed(4),o.style.visibility=D*O*(1-k)>.001?`visible`:`hidden`,a.classList.toggle(`sb-film-light`,e>.109);let A=e<.19?`origin`:e<.335?`harvest`:e<.412?`natural`:e<.488?`honey`:e<.56?`washed`:e<.645?`hulling`:e<.7?`green`:e<.802?`roasting`:e<.872?`grinding`:`collection`;if(a.dataset.processStage=A,k>.999||D*O<.001)return!0;for(let e of Object.values(m))e.style.opacity=`0`;for(let e of h)e.el.style.opacity=`0`;S.copy(n.position).project(t),C.copy(n.position).applyMatrix4(t.matrixWorldInverse);let j=n.scale.x*2.16*T/(2*Math.abs(C.z)*Math.tan(t.fov*Math.PI/360)),M=_(e,.085,.19),N=E?w*.5:w*.665,P=E?T*.38:T*.45,F=Math.min(T*(E?.37:.48),w*(E?.72:.34)),ee=v((S.x+1)*w/2,N,M),te=v((1-S.y)*T/2,P,M),I=v(j,F,M),ne=_(e,.418,.462);if(e<.335&&x(`cherry`,ee,te,I,1-_(e,.329,.345),v(-2,1,M)),x(`natural`,N,P,F*.9,y(e,.329,.35,.407,.43),-2),e>.409&&e<.488){x(`cherry`,N,P,F,1-_(e,.418,.459)),x(`honey`,N,P,F*.86,_(e,.442,.468),0,F*.57);let t=y(e,.418,.435,.459,.479);for(let e of[-1,1])x(e<0?`peelLeft`:`peelRight`,N+e*ne*F*.34,P+ne*ne*F*.24,F*.94,t,e*ne*28,F*.95)}x(`parchment`,N,P,F*.86,y(e,.484,.505,.555,.58),0,F*.57);let re=_(e,.568,.631),L=y(e,.56,.574,.61,.645);for(let e of[-1,1])x(e<0?`hullLeft`:`hullRight`,N+e*re*F*.34,P+re*re*F*.19,F*.86,L,e*re*24,F*.57);let R=y(e,.592,.633,.71,.795);x(`green`,N,P,F*.86,R,-2,F*.57),x(`golden`,N,P,F*v(.86,.91,_(e,.738,.778)),0,-2,F*.6);let z=_(e,.705,.796)*(1-_(e,.802,.85)),ie=F*.86,ae=F*.57;x(`roasted`,N,P,ie,z,-2,ae);let oe=_(e,.802,.865);if(e>.802&&e<.877){m.roasted.style.clipPath=`inset(0 0 ${oe*100}% 0)`,m.roasted.style.opacity=(1-_(e,.839,.865)).toFixed(4);for(let t of h){let n=_(e,.803+(9-t.row)*.003,.832+(9-t.row)*.003),r=n*(1-_(e,.85,.878)),i=N-ae/2+t.col*ae/7+(t.noise-.5)*ae*.8*n,a=P-ie/2+t.row*ie/10+n*n*F*.56;t.el.style.width=`${ae/7+1}px`,t.el.style.height=`${ie/10+1}px`,t.el.style.transform=`translate3d(${i}px,${a}px,0) rotate(${(t.noise-.5)*130*n}deg) scale(${1-n*.65})`,t.el.style.opacity=r.toFixed(4)}}else m.roasted.style.clipPath=`none`;let B=_(e,.827,.863);if(x(`grounds`,N,P+F*.31,F*.35,B,0,F*.85),e>.873){let t=_(e,.873,.943),n=[...document.querySelectorAll(`.sb-card__img`)],r={green:`green`,roasted:`roasted`,filter:`grounds`};n.forEach((n,a)=>{let o=n.getBoundingClientRect(),s=i.getBoundingClientRect(),c=r[n.closest(`.sb-card`).dataset.cat],l=c===`grounds`,u=o.height*.61,d=l?N:N+(c===`green`?-1:1)*F*.28,f=l?1:_(e,.875,.904),p=v(l?F*.35:F*.67,u,t);x(c,v(d,o.left-s.left+o.width/2,t),v(P+(l?F*.31:0),o.top-s.top+o.height*.46,t),p,f,0,p*(l?1.9:.67))}),m.roasted.style.clipPath=`none`}return!0}}}var hb,gb,_b,vb,yb,bb,xb,Sb,Cb,wb=n((()=>{Qy(),sb(),pb(),hb=`assets/photography/macro/cherry.webp`,gb=`assets/photography/macro/green.webp`,_b=`assets/photography/macro/roasted.webp`,vb=`assets/photography/process/peel.webp`,yb=`assets/photography/process/natural.webp`,bb=`assets/photography/process/parchment.webp`,xb=`assets/photography/process/honey.webp`,Sb=`assets/photography/process/golden.webp`,Cb=`assets/photography/process/grounds.webp`})),Tb=r({createOrigin:()=>Eb});function Eb(){let e=tb(),t=!1;var n=document.documentElement,r=document.getElementById(`sb-stage`),i=document.getElementById(`sb-canvas`);if(!r||!i||matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;var a=matchMedia(`(pointer: coarse)`).matches,o=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4,c=Math.min(innerWidth,innerHeight)<760,l=`high`;(a||c||o<=4||s<=4)&&(l=`mid`),(a&&(o<=4||s<=3)||innerWidth<520||o<=2)&&(l=`low`);var u={high:{dpr:2,nodes:15,dust:260,grinds:1500,smoke:110,aa:!0,beanSeg:84,cherrySeg:30,heroSeg:64,envSize:512,pile:132},mid:{dpr:1.6,nodes:10,dust:130,grinds:620,smoke:60,aa:!0,beanSeg:56,cherrySeg:22,heroSeg:44,envSize:256,pile:72},low:{dpr:1.3,nodes:6,dust:60,grinds:240,smoke:28,aa:!1,beanSeg:40,cherrySeg:16,heroSeg:30,envSize:256,pile:32}}[l];let{clamp01:d,clamp:f,lerp:p,seg:m,smooth:h,easeIO:g,easeIn:_,easeOut:v,bell:y,rnd:b,rr:x,cv:S,makeTex:C,leafVeinCanvas:w,cherrySkinCanvas:T,beanSurfaceCanvas:E,groundsCanvas:D,puffCanvas:O,equirect:k,paintPlantation:A,paintStudio:j,leafGeometry:M,cherryGeometry:N,BEAN:P,deformBean:F,beanGeometry:ee,VESSEL_R:te,FLOOR:I,INNER:ne,vesselGeometry:re,grindGeometry:L}=$y();var R=1.55,z=te*I+.128+R*.5*P*.47,ie=.155,ae=.91,oe,B,V,se,H,ce,le,ue,de,fe,pe,me,U,he,W,ge,G={},_e,K,q,ve,ye,be,xe=[],Se=[],Ce=[],we=[],Te,Ee,De=null,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye=[],Xe=[];function Ze(e){return Ye.push(e),e}function Qe(e){return e.transparent=!0,e.depthWrite=!0,Xe.push(e),e}var $e={value:0},et={value:1},tt={value:0},nt={C:{value:0},L:{value:0},R:{value:0}},rt={value:0},it={t:{value:0},o:{value:0}},at={t:{value:0},o:{value:0}},ot=document.getElementById(`sb-loader`),st=ot?ot.querySelector(`.sb-loader__bar i`):null,ct=document.getElementById(`hero-bg`),lt=document.getElementById(`sb-hills`),ut=document.getElementById(`sb-studio`),dt=document.getElementById(`sb-paper`),ft=document.getElementById(`sb-veil`),pt=r.querySelector(`.hero`),mt=Array.prototype.slice.call(r.querySelectorAll(`.sb-note`)),ht=document.getElementById(`sb-rail`),gt=Array.prototype.slice.call(r.querySelectorAll(`.sb-rail__step`)).map(function(e){return{el:e,bar:e.querySelector(`i`)}}),_t=document.getElementById(`coffees`),vt=r.querySelector(`.sb-cats__head`),yt=Array.prototype.slice.call(r.querySelectorAll(`.sb-card`)),bt=0,xt={vertical:!1,x:1.12,y:-.3,gapY:.74,base:1},St=new Q,Ct=new Q,wt=0;function Tt(){wt++,st&&(st.style.width=Math.min(100,wt*20)+`%`)}function Et(){let e=i.getContext(`webgl2`,{alpha:!0,antialias:u.aa,stencil:!1});if(!e)throw Error(`WebGL 2 unavailable; using photographic fallback.`);n.classList.add(`sb-on`),oe=new Zy({canvas:i,context:e,alpha:!0,antialias:u.aa,powerPreference:`high-performance`,stencil:!1}),oe.setPixelRatio(Math.min(devicePixelRatio||1,u.dpr)),oe.outputColorSpace=qd,oe.toneMapping=4,oe.toneMappingExposure=1.06,oe.setClearColor(0,0),Tt(),B=new dp,V=new dg(40,1,.05,80),le=new rp,B.add(le),se=new ny(oe),se.compileEquirectangularShader();var t=k(A,u.envSize),r=k(j,u.envSize);H=Ze(se.fromEquirectangular(t)).texture,ce=Ze(se.fromEquirectangular(r)).texture,t.dispose(),r.dispose(),B.environment=H,Tt(),Dt(),Ot(),Tt(),Nt(),zt(),Oe=mb(le,V,Ze,function(){In=!0}),Tt(),Gt(),Tt(),Pn(),qt(0),dn(0),oe.render(B,V),Mn(),Rn(),zn(),ot&&setTimeout(function(){ot.classList.add(`is-done`)},240),document.dispatchEvent(new CustomEvent(`sb:origin-ready`))}function Dt(){qe=new $h(15456438,2826774,.55),B.add(qe),We=new gg(16769972,3.1),We.position.set(3.1,4.4,2.2),B.add(We),Ge=new gg(11059326,.9),Ge.position.set(-2.6,1.1,-2.4),B.add(Ge),Ke=new gg(12571368,0),Ke.position.set(-2.2,1.6,2.6),B.add(Ke),Je=new pg(16747066,0,3,2),B.add(Je)}function Ot(){ue=new rp,le.add(ue);var e=new fh([new Q(-2.4,2.2,-1.05),new Q(-1.25,1.96,-.48),new Q(-.3,1.72,-.12),new Q(.55,1.58,.04),new Q(1.45,1.54,-.1),new Q(2.35,1.62,-.55)]),t=w(),n=Ze(C(t,!1,3)),r=Qe(Ze(new Mh({color:4863524,roughness:.94,metalness:0,roughnessMap:n,envMapIntensity:.6})));ue.add(new Om(Ze(new Eh(e,60,.032,7,!1)),r)),[[.55,1.58,.04,.06,1.34,.22],[1.45,1.54,-.1,1.26,1.26,.28]].forEach(function(e){var t=new fh([new Q(e[0],e[1],e[2]),new Q((e[0]+e[3])/2,(e[1]+e[4])/2-.04,(e[2]+e[5])/2),new Q(e[3],e[4],e[5])]);ue.add(new Om(Ze(new Eh(t,20,.015,6,!1)),r))});var i=Ze(C(t,!1)),a=Ze(M(l===`low`?10:18,l===`low`?4:7)),o=Qe(Ze(new Nh({color:16777215,roughness:.4,metalness:0,clearcoat:.62,clearcoatRoughness:.34,sheen:.55,sheenColor:new lp(10468972),sheenRoughness:.7,roughnessMap:i,bumpMap:i,bumpScale:.014,side:2,envMapIntensity:.9})));kt(o,!0);var s=u.nodes*4;de=new Rm(a,o,s);for(var c=new Float32Array(s),f=new kf,p=new lf,m=new zf,h=new Q,g=new Q,_=new lp,v=0,y=0;y<u.nodes&&v<s;y++)for(var S=.05+y/u.nodes*.9+x(-.018,.018),E=e.getPointAt(d(S)),D=x(0,6.283),O=0;O<4&&v<s;O++){h.set(E.x+x(-.03,.03),E.y+x(-.03,.02),E.z+x(-.03,.03)),p.setFromEuler(m.set(x(-2.15,-1.25),D+O*1.5708+x(-.35,.35),x(-.5,.5)));var k=x(.3,.5);f.compose(h,p,g.set(k,k,k)),de.setMatrixAt(v,f),_.setHSL(x(.235,.3),x(.32,.55),x(.085,.215)),de.setColorAt(v,_),c[v]=x(0,6.283),v++}de.count=v,a.setAttribute(`aPhase`,new Am(c,1)),de.instanceMatrix.needsUpdate=!0,de.instanceColor&&(de.instanceColor.needsUpdate=!0),de.frustumCulled=!1,ue.add(de);var A=Ze(C(T(),!0)),j=Ee=Ze(N(u.cherrySeg)),P=Qe(Ze(new Nh({color:16777215,map:A,roughness:.33,metalness:0,clearcoat:.64,clearcoatRoughness:.28,envMapIntensity:1})));kt(P,!0);var F=u.nodes*3;fe=new Rm(j,P,F);for(var ee=new Float32Array(F),te=0,I=0;I<u.nodes&&te<F;I++)for(var ne=.06+I/u.nodes*.88+x(-.02,.02),re=e.getPointAt(d(ne)),L=0;L<3&&te<F;L++){var R=x(0,6.283),z=x(.045,.085);h.set(re.x+Math.cos(R)*z,re.y-x(.03,.09),re.z+Math.sin(R)*z),p.setFromEuler(m.set(x(0,6.283),x(0,6.283),x(0,6.283)));var oe=x(.052,.08);f.compose(h,p,g.set(oe,oe,oe)),fe.setMatrixAt(te,f);var B=b();B>.88?_.setHSL(x(.075,.115),.66,.3):B>.82?_.setHSL(x(.22,.26),.44,.2):_.setHSL(x(.003,.028),x(.72,.94),x(.19,.32)),fe.setColorAt(te,_),ee[te]=x(0,6.283),te++}fe.count=te,j.setAttribute(`aPhase`,new Am(ee,1)),fe.instanceMatrix.needsUpdate=!0,fe.instanceColor&&(fe.instanceColor.needsUpdate=!0),fe.frustumCulled=!1,ue.add(fe),pe=new Om(Ze(N(u.heroSeg)),At(A)),pe.scale.setScalar(ie),pe.position.set(.02,ae,.06),le.add(pe),me=new rp;var V=Qe(Ze(new Mh({color:5595951,roughness:.82}))),se=new fh([new Q(.02,ae+.02,.06),new Q(.02,ae+.14,.09),new Q(.04,ae+.28,.15),new Q(.06,1.34,.22)]);me.add(new Om(Ze(new Eh(se,16,.0062,5,!1)),V)),le.add(me)}function kt(e,t){e.onBeforeCompile=function(e){e.uniforms.uWind=$e,t&&(e.uniforms.uLeafFade=et),e.vertexShader=`attribute float aPhase;
uniform float uWind;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
float sway = sin(uWind * 0.85 + aPhase) * 0.5 + sin(uWind * 1.63 + aPhase * 1.7) * 0.5;
float amp  = 0.010 + max(transformed.y, 0.0) * 0.035;
transformed.x += sway * amp;
transformed.z += cos(uWind * 0.71 + aPhase * 1.3) * amp * 0.7;`),t&&(e.fragmentShader=`uniform float uLeafFade;
`+e.fragmentShader.replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor.a *= uLeafFade;`))},e.needsUpdate=!0}function At(e){var t=Ze(new Nh({color:16777215,map:e,roughness:.31,metalness:0,clearcoat:.68,clearcoatRoughness:.25,envMapIntensity:1}));return t.onBeforeCompile=function(e){e.uniforms.uDissolve=tt,e.vertexShader=`varying vec3 vSbP;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vSbP = position;`),e.fragmentShader=`uniform float uDissolve;
varying vec3 vSbP;
float sbH(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float sbN(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(sbH(i), sbH(i + vec3(1,0,0)), f.x),
                 mix(sbH(i + vec3(0,1,0)), sbH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(sbH(i + vec3(0,0,1)), sbH(i + vec3(1,0,1)), f.x),
                 mix(sbH(i + vec3(0,1,1)), sbH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
`+e.fragmentShader.replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
float sbMask = sbN(vSbP * 3.4) * 0.70 + (0.5 - vSbP.y * 0.5) * 0.30;
if (uDissolve > 0.001 && sbMask < uDissolve) discard;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
float sbEdge = smoothstep(uDissolve + 0.09, uDissolve, sbMask) * step(0.001, uDissolve);
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.00, 0.76, 0.38), sbEdge * 0.80);`)},t.needsUpdate=!0,t}function jt(e){De||=Ze(C(E(),!1,2));var t=Ze(new Nh({color:16777215,roughness:.62,metalness:0,clearcoat:0,clearcoatRoughness:.7,envMapIntensity:.72,bumpMap:De,bumpScale:.52,roughnessMap:De}));return t.onBeforeCompile=function(t){t.uniforms.uRoast=e,t.vertexShader=`attribute float aCrease;
uniform float uRoast;
varying float vSbC;
`+t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vSbC = aCrease;
transformed *= (1.0 + uRoast * 0.13);
transformed -= normal * uRoast * 0.0016 * aCrease;`),t.fragmentShader=`uniform float uRoast;
varying float vSbC;
`+t.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
vec3 sbG  = vec3(0.168, 0.180, 0.112);
vec3 sbY  = vec3(0.470, 0.420, 0.208);
vec3 sbGo = vec3(0.455, 0.280, 0.098);
vec3 sbLb = vec3(0.225, 0.120, 0.055);
vec3 sbDb = vec3(0.082, 0.042, 0.024);
float r = clamp(uRoast, 0.0, 1.0);
vec3 sbCol = mix(sbG, sbY, smoothstep(0.00, 0.30, r));
sbCol = mix(sbCol, sbGo, smoothstep(0.26, 0.55, r));
sbCol = mix(sbCol, sbLb, smoothstep(0.50, 0.78, r));
sbCol = mix(sbCol, sbDb, smoothstep(0.74, 1.00, r));
float sbSk = smoothstep(0.35, 0.95, vSbC);
vec3 sbSilver = mix(vec3(0.360, 0.345, 0.288), vec3(0.046, 0.029, 0.019), smoothstep(0.18, 0.72, r));
sbCol = mix(sbCol, sbSilver, sbSk * mix(0.62, 0.38, r));
sbCol *= 1.0 - sbSk * 0.22;
diffuseColor.rgb *= sbCol;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor * mix(1.40, 1.02, smoothstep(0.35, 1.0, uRoast)) - vSbC * 0.04, 0.26, 1.0);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
float sbEm = smoothstep(0.55, 1.0, vSbC) * exp(-pow((uRoast - 0.56) / 0.16, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.34, 0.07) * sbEm * 0.10;`)},t.needsUpdate=!0,t}function Mt(e,t){return xt.vertical?t.set(0,xt.y+(1-e)*xt.gapY,0):t.set((e-1)*xt.x,xt.y,0)}function Nt(){var e=Te=Ze(ee(u.beanSeg));De||=Ze(C(E(),!1,2)),G.C=jt(nt.C),G.L=jt(nt.L),G.R=jt(nt.R),U=new rp,he=new Om(e,G.C),U.add(he),U.position.set(.02,ae,.06),le.add(U),W=new Om(e,G.L),ge=new Om(e,G.R),W.visible=ge.visible=!1,le.add(W),le.add(ge);for(var t=Ze(re(te)),n=Ze(new Th(te*.996,.0036,8,96)),r=Ze(new Mh({color:13215330,metalness:1,roughness:.25,envMapIntensity:1.25})),i=Ze(C(O(.36),!0)),a=Ze(new Ch(1.6,1.6)),o=0;o<3;o++){var s=new rp,c=Ze(new Nh({color:1643536,roughness:.7,metalness:.1,clearcoat:.14,clearcoatRoughness:.58,envMapIntensity:.95,side:2}));Se.push(c),s.add(new Om(t,c));var l=new Om(n,r);l.rotation.x=Math.PI/2,l.position.y=te*.32,l.visible=!1,s.add(l),s.userData.shell=[s.children[0],l];var d=Ze(new gm({map:i,transparent:!0,opacity:0,depthWrite:!1,color:0}));Ce.push(d);var f=new Om(a,d);f.rotation.x=-Math.PI/2,f.position.y=-.005,f.scale.setScalar(.62),s.add(f),s.visible=!1,xe.push(s),le.add(s)}_e=Pt(e,G.L,u.pile,.42),xe[0].add(_e),K=Pt(e,G.C,u.pile,.42),xe[1].add(K);for(var p=0;p<3;p++){for(var m=p===0?G.L:G.C,h=new Rm(e,m,8),g=new kf,_=new lf,v=new zf,y=new Q,b=new Q,S=0;S<8;S++){var w=x(-.55,3.69),T=x(te*1.14,te*1.52),D=.44*x(.86,1.1);y.set(Math.cos(w)*T,P*D*.5,Math.abs(Math.sin(w))*T*.62),_.setFromEuler(v.set(1.5708+x(-.18,.18),x(0,6.283),x(-.16,.16),`YXZ`)),h.setMatrixAt(S,g.compose(y,_,b.setScalar(D)))}h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,h.visible=!1,we.push(h),xe[p].add(h);for(var k=new Rm(a,Ze(new gm({map:i,transparent:!0,opacity:.3,depthWrite:!1,color:0})),8),A=0;A<8;A++)h.getMatrixAt(A,g),y.setFromMatrixPosition(g),_.setFromEuler(v.set(-1.5708,0,0)),k.setMatrixAt(A,g.compose(y.setY(.0015),_,b.set(.075,.075,.075)));k.instanceMatrix.needsUpdate=!0,k.frustumCulled=!1,h.userData.shadow=k,xe[p].add(k)}Lt()}function Pt(e,t,n,r){for(var i=new Rm(e,t,n),a=[],o=new kf,s=te*ne,c=te*I,l=P*r,u=Math.max(8,Math.round(s*s/(l*l*1.9))),d=2.399963,f=0;f<n;f++){var p=Math.floor(f/u),m=f%u,h=1-p*.14;if(h<.22)break;var g=s*h*Math.sqrt((m+.4)/u)*x(.9,1.04),_=f*d;a.push({p:new Q(Math.cos(_)*g,c+l*.46+p*l*.72,Math.sin(_)*g),e:new zf(1.5708+x(-.3,.3),x(0,6.283),x(-.24,.24),`YXZ`),s:r*x(.8,1.16),d:b()}),i.setMatrixAt(a.length-1,o.makeScale(1e-4,1e-4,1e-4)),i.setColorAt(a.length-1,an.setHSL(x(.075,.175),x(.02,.16),x(.38,.62)))}return i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.count=a.length,i.userData.slots=a,i.instanceMatrix.setUsage($d),i.frustumCulled=!1,i.visible=!1,i}function Ft(e,t){for(var n=e.userData.slots,r=0;r<n.length;r++){var i=n[r],a=h(d((t-i.d*.42)/.55));$t.setScalar(Math.max(1e-4,i.s*a)),Jt.copy(i.p),Jt.y+=(1-a)*.45,Zt.setFromEuler(Qt.set(i.e.x,i.e.y+(1-a)*2.2,i.e.z,`YXZ`)),e.setMatrixAt(r,Xt.compose(Jt,Zt,$t))}e.instanceMatrix.needsUpdate=!0}var It=te*ne*.92;function Lt(){for(var e=new wh(1,40,20),t=e.attributes.position,n=new Q,r=0;r<t.count;r++){n.fromBufferAttribute(t,r);var i=1+.045*Math.sin(n.x*26+n.z*19)*Math.cos(n.y*23);t.setXYZ(r,n.x*i,Math.max(n.y,-.02)*i,n.z*i)}e.computeVertexNormals(),Ze(e),be=Ze(new Mh({map:Ze(C(D(),!0,3)),color:16777215,roughness:.97,metalness:0,envMapIntensity:.75,transparent:!0,opacity:0})),ye=new Om(e,be),ye.scale.set(It,It*.5,It),ye.position.y=te*I,ye.visible=!1,xe[2].add(ye);for(var a=u.grinds,o=L(),s=new Float32Array(a*3),c=new Float32Array(a*3),l=new Float32Array(a*3),d=R*P*.66,f=R*P*.46,p=R*P*1,m=0;m<a;m++){var h=x(-1,1),g=b()*6.283,_=b()**(1/3),v=Math.sqrt(Math.max(0,1-h*h));s[m*3]=Math.cos(g)*v*_*p,s[m*3+1]=z+h*_*f,s[m*3+2]=Math.sin(g)*v*_*d;var y=b()*6.283,S=Math.sqrt(b())*It*1,w=Math.sqrt(Math.max(0,1-(S/(It*1))**2));c[m*3]=Math.cos(y)*S,c[m*3+1]=te*I+w*It*.5+x(.001,.01),c[m*3+2]=Math.sin(y)*S,l[m*3]=x(.4,1.6),l[m*3+1]=x(.2,1),l[m*3+2]=b()}o.setAttribute(`aStart`,new Am(s,3)),o.setAttribute(`aEnd`,new Am(c,3)),o.setAttribute(`aSeed`,new Am(l,3)),Ze(o),ve=Ze(new Mh({color:3941398,roughness:.94,metalness:0,envMapIntensity:.7,transparent:!0,opacity:0})),ve.onBeforeCompile=function(e){e.uniforms.uT=rt,e.vertexShader=`attribute vec3 aStart;
attribute vec3 aEnd;
attribute vec3 aSeed;
uniform float uT;
mat3 sbR;
mat3 sbAxis(vec3 a, float ang){
  a = normalize(a); float s = sin(ang), c = cos(ang), o = 1.0 - c;
  return mat3(o*a.x*a.x+c,      o*a.x*a.y - a.z*s, o*a.x*a.z + a.y*s,
              o*a.x*a.y+a.z*s,  o*a.y*a.y + c,     o*a.y*a.z - a.x*s,
              o*a.x*a.z-a.y*s,  o*a.y*a.z + a.x*s, o*a.z*a.z + c);
}
`+e.vertexShader.replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
float sbD = aSeed.z * 0.34;
float sbT = clamp((uT - sbD) / max(1.0 - sbD, 0.001), 0.0, 1.0);
sbT = sbT * sbT * (3.0 - 2.0 * sbT);
sbR = sbAxis(aSeed - 0.5 + vec3(0.01, 0.31, 0.07), sbT * aSeed.x * 7.0 + aSeed.y * 6.0);
objectNormal = sbR * objectNormal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed *= 0.0062 * (0.45 + aSeed.y * 0.95);
transformed = sbR * transformed;
vec3 sbArc = vec3(0.0, sin(sbT * 3.14159) * (0.02 + aSeed.y * 0.07), 0.0);
transformed += mix(aStart, aEnd, sbT) + sbArc;`)},ve.needsUpdate=!0,q=new Rm(o,ve,a);for(var T=new kf,E=0;E<a;E++)q.setMatrixAt(E,T);q.instanceMatrix.needsUpdate=!0,q.frustumCulled=!1,q.visible=!1,xe[2].add(q)}var Rt=[new Q(-.58,-.03,.3),new Q(.58,-.03,.3),new Q(0,-.3,.56)];function zt(){var e=Te;ke=new rp,le.add(ke);var t=Ze(new nh(.3,.325,.022,48)),n=Ze(new Mh({color:1315085,roughness:.86,metalness:.04,envMapIntensity:.7}));Ae=new rp,Ae.position.copy(Rt[0]),Ae.add(new Om(t,n));var r=new Om(Ze(new th(.27,40)),Ze(new Mh({color:7033653,roughness:.95,metalness:0,envMapIntensity:.5,map:Ze(C(Bt(),!0,5))})));r.rotation.x=-Math.PI/2,r.position.y=.0115,Ae.add(r),Ne=new Rm(Ee,Ut(),l===`low`?18:46),Ne.userData.slots=[];for(var i=new kf,a=0;a<Ne.count;a++){var o=a*2.399963,s=Math.sqrt((a+.5)/Ne.count)*.225;Ne.userData.slots.push({p:new Q(Math.cos(o)*s,.0375,Math.sin(o)*s),e:new zf(x(0,6.283),x(0,6.283),x(0,6.283)),s:x(.023,.031)}),Ne.setMatrixAt(a,i.makeScale(1e-4,1e-4,1e-4))}Ne.instanceMatrix.setUsage($d),Ne.frustumCulled=!1,Ae.add(Ne),ke.add(Ae),je=new rp,je.position.copy(Rt[1]),je.add(new Om(t,n)),Be=Ze(new Nh({color:395530,roughness:.11,metalness:0,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:.72,normalMap:Ze(C(Vt(),!1,3)),normalScale:new Z(.3,.3)}));var c=new Om(Ze(new th(.268,48)),Be);c.rotation.x=-Math.PI/2,c.position.y=.0165,je.add(c),Pe=new Rm(e,Ht(),l===`low`?20:44),Pe.userData.slots=[];for(var d=0;d<Pe.count;d++){var f=d*2.399963,p=Math.sqrt((d+.5)/Pe.count)*.215;Pe.userData.slots.push({p:new Q(Math.cos(f)*p,.016+P*.16,Math.sin(f)*p),e:new zf(1.5708+x(-.3,.3),x(0,6.283),x(-.25,.25),`YXZ`),s:x(.26,.36)}),Pe.setMatrixAt(d,i.makeScale(1e-4,1e-4,1e-4))}Pe.instanceMatrix.setUsage($d),Pe.frustumCulled=!1,je.add(Pe),ke.add(je),Me=new rp,Me.position.copy(Rt[2]),Me.add(new Om(t,n)),Fe=new Om(e,Ht()),Fe.scale.setScalar(.92),Fe.position.y=.0115+P*.92*.5,Fe.rotation.set(1.3,.6,0,`YXZ`),Me.add(Fe),Ie=new Om(e,Ze(new Nh({color:13209395,roughness:.14,metalness:0,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.1,transparent:!0,opacity:.72,depthWrite:!1}))),Ie.scale.setScalar(.92*1.06),Ie.position.copy(Fe.position),Ie.rotation.copy(Fe.rotation),Me.add(Ie);for(var m=new Rm(e,Ht(),7),h=new kf,g=new lf,_=new zf,v=new Q,y=new Q,b=0;b<7;b++){var S=b*2.399963+.9,w=.115+b%3*.052;v.set(Math.cos(S)*w,.0115+P*.34*.5,Math.sin(S)*w),g.setFromEuler(_.set(1.5708+x(-.25,.25),x(0,6.283),x(-.2,.2),`YXZ`)),m.setMatrixAt(b,h.compose(v,g,y.setScalar(.34)))}m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!1,Me.add(m),ke.add(Me),Ae.visible=je.visible=Me.visible=!1,Le=new Om(Ze(new nh(.3,.325,.022,48)),n),Le.position.set(0,-.175,0),Le.visible=!1,le.add(Le),ze=Ht(),Re=[];for(var T=0;T<2;T++){var E=Ze(F(new wh(1,Math.max(10,Math.round(u.beanSeg/2)),Math.round(u.beanSeg*.68),T*Math.PI,Math.PI))),D=new Om(E,ze);D.visible=!1,Re.push(D),U.add(D)}}function Bt(){var e=128,t=S(e,e),n=t.getContext(`2d`);n.fillStyle=`#7d6440`,n.fillRect(0,0,e,e),n.strokeStyle=`rgba(0,0,0,.42)`,n.lineWidth=1.4;for(var r=0;r<=8;r++){var i=r/8*e;n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(e,i),n.stroke()}n.strokeStyle=`rgba(255,255,255,.14)`;for(var a=0;a<=8;a++){var o=a/8*e+1.6;n.beginPath(),n.moveTo(o,0),n.lineTo(o,e),n.stroke()}return t}function Vt(){var e=256,t=S(e,e),n=t.getContext(`2d`);n.fillStyle=`#8080ff`,n.fillRect(0,0,e,e);for(var r=0;r<26;r++){var i=x(0,e),a=x(0,e),o=x(e*.04,e*.22),s=n.createRadialGradient(i,a,o*.55,i,a,o);s.addColorStop(0,`rgba(128,128,255,0)`),s.addColorStop(.5,`rgba(150,110,255,.30)`),s.addColorStop(1,`rgba(128,128,255,0)`),n.fillStyle=s,n.fillRect(0,0,e,e)}return t}function Ht(){return Ze(new Mh({color:10521446,roughness:.92,metalness:0,envMapIntensity:.55,bumpMap:De,bumpScale:.5,roughnessMap:De,side:2}))}function Ut(){return Ze(new Nh({color:8264720,roughness:.52,metalness:0,clearcoat:.3,clearcoatRoughness:.5,envMapIntensity:.9}))}function Wt(e,t,n,r,i,a,o,s){for(var c=new Float32Array(e*3),l=new Float32Array(e*3),u=0;u<e;u++)c[u*3]=x(-t[0],t[0]),c[u*3+1]=x(-t[1],t[1]),c[u*3+2]=x(-t[2],t[2]),l[u*3]=b(),l[u*3+1]=b(),l[u*3+2]=b();var d=Ze(new im);d.setAttribute(`position`,new Kp(c,3)),d.setAttribute(`aSeed`,new Kp(l,3));var f=Ze(new Ah({uniforms:{uT:r.t,uO:r.o,uMap:{value:n},uSize:{value:s},uPR:{value:oe.getPixelRatio()}},vertexShader:[`attribute vec3 aSeed;`,`uniform float uT; uniform float uSize; uniform float uPR;`,`varying float vA;`,i,`void main(){`,`  vec3 p = position;`,`  sbMove(p, aSeed, uT);`,`  vec4 mv = modelViewMatrix * vec4(p, 1.0);`,`  gl_PointSize = uSize * uPR * (0.5 + aSeed.x) * (1.0 / max(-mv.z, 0.08));`,`  gl_Position = projectionMatrix * mv;`,`}`].join(`
`),fragmentShader:[`uniform sampler2D uMap; uniform float uO;`,`varying float vA;`,a,`void main(){`,`  vec4 t = texture2D(uMap, gl_PointCoord);`,`  float a = t.a * vA * uO;`,`  if (a < 0.004) discard;`,`  gl_FragColor = vec4(sbColor(), a);`,`}`].join(`
`),transparent:!0,depthWrite:!1,blending:o})),p=new Jm(d,f);return p.frustumCulled=!1,p}function Gt(){var e=Ze(C(O(.12),!0)),t=Ze(C(O(.55),!0));Ue=Wt(u.dust,[2.4,1.3,1.6],e,it,`void sbMove(inout vec3 p, vec3 s, float t){
  p.y += sin(t * (0.07 + s.x * 0.10) + s.y * 6.28) * 0.30 + t * 0.006;
  p.x += sin(t * 0.05 + s.z * 6.28) * 0.22;
  p.z += cos(t * 0.043 + s.x * 6.28) * 0.18;
  vA = 0.25 + 0.75 * (0.5 + 0.5 * sin(t * 0.55 + s.z * 6.28));
}`,`vec3 sbColor(){ return vec3(1.0, 0.90, 0.72); }`,2,26),Ue.position.set(.1,1.05,.2),le.add(Ue),Ve=Wt(u.smoke,[.07,.02,.07],t,at,`void sbMove(inout vec3 p, vec3 s, float t){
  float k = fract(s.y + t * 0.30);
  p.y += k * 0.52;
  p.x += sin(k * 4.0 + s.x * 6.28) * 0.08 * k;
  p.z += cos(k * 3.4 + s.z * 6.28) * 0.08 * k;
  vA = sin(k * 3.14159) * 0.45;
}`,`vec3 sbColor(){ return vec3(0.74, 0.68, 0.61); }`,1,110),Ve.visible=!1,le.add(Ve),He=Wt(l===`low`?8:22,[.06,.02,.06],e,at,`void sbMove(inout vec3 p, vec3 s, float t){
  float k = fract(s.z + t * 0.55);
  p.y += k * 0.34;
  p.x += sin(k * 7.0 + s.x * 6.28) * 0.10 * k;
  p.z += cos(k * 6.0 + s.y * 6.28) * 0.10 * k;
  vA = pow(1.0 - k, 2.6);
}`,`vec3 sbColor(){ return vec3(1.0, 0.58, 0.18); }`,2,12),He.visible=!1,le.add(He)}var Kt=[[0,2.55,1.86,4.45,.12,1.2,0,40],[.115,1.3,1.44,2.38,.06,1.04,.02,38],[.19,.56,1.14,1.2,.03,.95,.04,33],[.235,.3,1.04,.94,.02,.91,.06,32],[.29,.3,.56,1.02,.02,.44,.06,33],[.335,.2,.26,1.38,0,.1,.06,35],[.378,-.46,.6,1.76,-.58,-.02,.3,32],[.452,.62,.6,1.76,.58,-.02,.3,32],[.524,.02,.42,1.96,0,-.28,.52,32],[.585,.05,.34,1.2,0,-.04,0,33],[.665,.05,.18,1.06,0,0,0,32],[.735,.03,.14,1.02,0,0,0,32],[.8,0,.15,1.04,0,0,0,32],[.862,0,.26,1.34,0,-.02,0,34],[.935,0,.56,2.72,0,-.2,0,38],[1,0,.62,3.14,0,-.2,0,38]];function qt(e){for(var t=0;t<Kt.length-2&&e>Kt[t+1][0];)t++;var n=Kt[t],r=Kt[t+1],i=g(d((e-n[0])/(r[0]-n[0])));St.set(p(n[1],r[1],i),p(n[2],r[2],i),p(n[3],r[3],i)),Ct.set(p(n[4],r[4],i),p(n[5],r[5],i),p(n[6],r[6],i));var a=p(n[7],r[7],i);if(V.aspect<1){var o=(1-V.aspect)*.95;St.sub(Ct).multiplyScalar(1+o*.34).add(Ct),a+=o*6}St.x+=Math.sin(bt*.14)*.012,St.y+=Math.sin(bt*.108+1.1)*.009,V.position.copy(St),V.lookAt(Ct),Math.abs(V.fov-a)>.002&&(V.fov=a,V.updateProjectionMatrix()),V.updateMatrixWorld()}var Jt=new Q,Yt=new Q;new Q;var Xt=new kf,Zt=new lf,Qt=new zf,$t=new Q,en=[new Q,new Q,new Q],tn=[1,1,1],nn=[new Q,new Q,new Q],rn=[1,1,1];new zf;var an=new lp,on={origin:[0,.19],harvest:[.19,.335],fall:[.105,.19],natural:[.335,.412],washed:[.488,.56],honey:[.412,.488],drying:[.56,.645],hulling:[.645,.7],roast:[.7,.802],grind:[.802,.872],worlds:[.855,1]},sn=[[.108,.123,.188],[.19,.214,.332],[.418,.436,.484],[.494,.512,.556],[.333,.345,.408],[.572,.598,.641],[.65,.665,.696],[.707,.721,.798],[.806,.821,.87],[.872,.88,.91]],cn=[[0,.19],[.19,.335],[.335,.56],[.56,.645],[.645,.7],[.7,.802],[.802,.875]];function ln(e,t){e&&(e.style.opacity=t.toFixed(3))}function un(e,t){return m(e,t[0],t[1])}function dn(e,t=!1){r.dataset.journeyProgress=e.toFixed(6);var n=m(e,.25,.345),a=m(e,.905,.985),o=1-h(m(e,.93,.985)),s=o>.004;if(ct){var c=m(e,0,.34),u=p(0,22,m(e,.002,.06))+p(0,7,m(e,.22,.34));ct.style.transform=`scale(`+(1.04+c*.16).toFixed(4)+`) translate3d(0,`+(c*-3.5).toFixed(2)+`%,0)`,ct.style.filter=`blur(`+u.toFixed(1)+`px) saturate(`+(1-n*.55).toFixed(3)+`)`,ln(ct,1-n*.96)}if(lt){var f=m(e,.02,.12);ln(lt,f*(1-m(e,.12,.26))*.55),lt.style.filter=`blur(`+(10+f*14).toFixed(1)+`px)`,lt.style.transform=`scale(`+(1.1+f*.08).toFixed(3)+`)`}if(ln(ut,n*(1-a)),ln(dt,a),ln(ft,(1-a)*p(1,.58,n)),pt){var g=1-m(e,.012,.052);pt.style.opacity=g.toFixed(3),pt.style.transform=`translate3d(0,`+(m(e,.01,.078)*-46).toFixed(1)+`px,0)`,pt.style.visibility=g<.01?`hidden`:`visible`,pt.inert=g<.1}for(var b=0;b<mt.length&&b<sn.length;b++)fn(b,e,sn[b][0],sn[b][1],sn[b][2]);if(pn(e),t||!Oe?.ready||e<.225){qe.intensity=p(.55,.18,n),We.intensity=p(3.1,1.35,n),We.color.setHSL(p(.098,.088,n),p(.62,.26,n),p(.76,.86,n)),Ge.intensity=p(.9,0,n),Ke.intensity=p(0,1.35,n)*(1-a*.35),oe.toneMappingExposure=p(1.06,.96,n)-a*.06;var x=e>.3;x!==(B.environment===ce)&&(B.environment=x?ce:H),$e.value=bt,et.value=1-m(e,.225,.33);for(var S=0;S<Xe.length;S++)Xe[S].opacity=et.value;ue.visible=!1,it.t.value=bt,it.o.value=(1-m(e,.25,.36))*.42,Ue.visible=it.o.value>.01;var C=m(e,.222,.262);me.visible=!1,me.rotation.z=-C*.55,me.position.y=-C*.02;var w=un(e,on.fall),T=p(ae,.1,_(w)*.82+v(w)*.18),E=.02+Math.sin(w*2.1)*.03,D=.06-w*.01;pe.position.set(E,T,D),pe.rotation.set(w*2.1,w*2.9,w*.72),pe.scale.setScalar(ie);var O=m(e,.335,.56);O>0&&(pe.position.set(0,p(.1,.4,h(O*3)),p(.02,-.34,h(O*3))),pe.rotation.set(.18,2.1+O*1.4,.06),pe.scale.setScalar(ie*p(1,.72,h(O*3))));var k=m(e,.545,.612);tt.value=d(k*1.08),pe.visible=tt.value<.99&&s&&e<.62;var A=un(e,on.natural),j=un(e,on.washed),M=un(e,on.honey),N=m(e,.33,.372)*(1-m(e,.545,.585)),F=m(e,.404,.448)*(1-m(e,.545,.585)),ee=m(e,.48,.524)*(1-m(e,.556,.592));if(Ae.visible=N>.004&&s,je.visible=F>.004&&s,Me.visible=ee>.004&&s,Ae.visible){Ae.scale.setScalar(p(.75,1,h(N)));for(var I=h(A),ne=Ne.userData.slots,re=0;re<ne.length;re++){var L=ne[re],se=h(d((N-re/ne.length*.5)/.5)),de=1-I*.24;$t.setScalar(Math.max(1e-4,L.s*se*de)),Jt.copy(L.p),Jt.y=L.p.y*(1-I*.2)+(1-se)*.3,Zt.setFromEuler(Qt.set(L.e.x,L.e.y+I*.7,L.e.z)),Ne.setMatrixAt(re,Xt.compose(Jt,Zt,$t))}Ne.instanceMatrix.needsUpdate=!0,Ne.material.color.setHSL(p(.008,.032,I),p(.88,.62,I),p(.24,.085,I)),Ne.material.roughness=p(.36,.74,I)}if(je.visible){je.scale.setScalar(p(.75,1,h(F))),Be.normalMap.offset.set(bt*.012,bt*.017);for(var fe=Pe.userData.slots,G=0;G<fe.length;G++){var Se=fe[G],Te=h(d((F-G/fe.length*.5)/.5));$t.setScalar(Math.max(1e-4,Se.s*Te)),Jt.copy(Se.p),Jt.y+=(1-Te)*.26,Zt.setFromEuler(Qt.set(Se.e.x,Se.e.y+(1-Te)*1.6+j*.5,Se.e.z,`YXZ`)),Pe.setMatrixAt(G,Xt.compose(Jt,Zt,$t))}Pe.instanceMatrix.needsUpdate=!0,Pe.material.color.setHSL(.098,p(.26,.17,j),p(.24,.4,j)),Pe.material.roughness=p(.42,.88,j)}Me.visible&&(Me.scale.setScalar(p(.75,1,h(ee))),Fe.rotation.y=.6+M*1.9,Ie.rotation.y=Fe.rotation.y,Ie.material.opacity=p(.66,.4,M),Ie.scale.setScalar(.92*p(1.09,1.035,M))),un(e,on.drying);var Ee=m(e,.548,.596);Le.visible=Ee>.004&&e<.76&&s,Le.scale.setScalar(p(.6,1,h(Ee))),un(e,on.hulling);for(var De=m(e,.556,.64),ke=h(m(e,.655,.726)),ze=0;ze<2;ze++){var Ye=Re[ze],Ze=ze===0?1:-1;Ye.visible=De>.01&&ke<.995&&s,Ye.scale.setScalar(1.16+ke*.1),Ye.position.set(Ze*ke*2.6,-ke*ke*2.2,ke*.4),Ye.rotation.set(0,0,Ze*ke*1.35)}var Qe=m(e,.556,.606);U.visible=Qe>.01&&s;var ot=h(m(e,.806,.858)),st=R*p(.42,1,h(Qe))*(1-ot*.94);ot>.985&&(U.visible=!1),U.position.set(0,p(.1,0,h(m(e,.556,.64))),.01),U.scale.setScalar(st),U.rotation.set(.2,Math.PI+.12+e*.34,.06,`YXZ`);var ht=un(e,on.roast);nt.C.value=ht,Je.position.set(U.position.x-.34,U.position.y+.22,.42),Je.intensity=y(ht,.52,.28)*.85*(1-a)*(1-un(e,on.grind));var gt=y(ht,.58,.32);at.t.value=bt,at.o.value=gt*.32*(1-a),Ve.visible=at.o.value>.01&&s,Ve.position.set(U.position.x,U.position.y,0),He.visible=Ve.visible&&l!==`low`,He.position.copy(Ve.position);var St=un(e,on.grind);rt.value=h(St),nt.R.value=1,nt.L.value=0;var Ct=h(m(e,.855,.938)),wt=h(m(e,.888,.944));wt>5e-4&&bn();for(var Tt=0;Tt<3;Tt++){Mt(Tt,Yt);var Et=Tt===2?Jt.set(0,-.1,0):Jt.set(Yt.x*.35,Yt.y-.3,0);if(nn[Tt].set(p(Et.x,Yt.x,Ct),p(Et.y,Yt.y,Ct),0),rn[Tt]=p(Tt===2?1:.5,xt.base,Ct),wt>5e-4){var Dt=p(rn[Tt],tn[Tt],wt);xe[Tt].position.set(p(nn[Tt].x,en[Tt].x,wt),p(nn[Tt].y,en[Tt].y-te*yn*Dt,wt),p(0,en[Tt].z,wt)),xe[Tt].scale.setScalar(Dt)}else xe[Tt].position.copy(nn[Tt]),xe[Tt].scale.setScalar(rn[Tt]);var Ot=Tt===2?m(e,.868,.918):m(e,.858,.912);xe[Tt].visible=(Tt===2?rt.value>.01:Ot>.004)&&s,Ce[Tt].opacity=Ot*.5}for(var kt=0;kt<3;kt++){var At=m(e,kt===2?.868:.858,kt===2?.918:.912)>.01;xe[kt].userData.shell[0].visible=At,xe[kt].userData.shell[1].visible=At}var jt=h(m(e,.868,.94)),Nt=xe[1],Pt=xe[0];jt>.004?(U.visible=s,U.position.set(Nt.position.x,Nt.position.y+z*Nt.scale.x+(1-jt)*.34,Nt.position.z),U.rotation.set(1.3,Math.PI+.55,0,`YXZ`),U.scale.setScalar(R*.5*Nt.scale.x*jt),W.visible=s,W.position.set(Pt.position.x,Pt.position.y+z*Pt.scale.x+(1-jt)*.4,Pt.position.z),W.rotation.set(1.3,Math.PI+.2,0,`YXZ`),W.scale.setScalar(R*.5*Pt.scale.x*jt)):W.visible=!1,ge.visible=!1;var It=m(e,.88,.945);_e.visible=It>.01&&s,_e.visible&&Ft(_e,It),K.visible=It>.01&&s,K.visible&&Ft(K,It);for(var Lt=m(e,.878,.906)>.4&&e<.912&&s,Rt=0;Rt<3;Rt++)we[Rt].visible=Lt,we[Rt].userData.shadow.visible=Lt;ve.opacity=d(St*9),q.visible=ve.opacity>.006&&s,be.opacity=h(m(e,.828,.88)),ye.visible=be.opacity>.006&&s}var zt=m(e,.9,.962);if(ln(_t,zt),_t&&(_t.style.pointerEvents=zt>.9?`auto`:`none`,_t.inert=zt<=.9),vt){var Bt=m(e,.906,.948);vt.style.opacity=Bt.toFixed(3),vt.style.transform=`translate3d(0,`+((1-Bt)*18).toFixed(1)+`px,0)`}for(var Vt=0;Vt<yt.length;Vt++){var Ht=yt[Vt].querySelector(`img`),Ut=yt[Vt].querySelector(`.sb-card__body`),Wt=h(m(e,.92,.985));Ht&&(Ht.style.opacity=Wt.toFixed(3));var Gt=yt[Vt].querySelector(`.sb-card__scrim`);if(Gt&&(Gt.style.opacity=Wt.toFixed(3)),Ut){var Kt=d((m(e,.962,1)-Vt*.02)/.94);Ut.style.opacity=Kt.toFixed(3),Ut.style.transform=`translate3d(0,`+((1-Kt)*16).toFixed(1)+`px,0)`}}if(e<.225&&ct){var qt=Dn,an=On,cn=cb(qt,an,e),dn=cn.x,mn=cn.y;ct.style.transformOrigin=`0 0`,ct.style.transform=`translate3d(`+cn.tx+`px,`+cn.ty+`px,0) scale(`+cn.zoom+`)`,ct.style.filter=`none`;var hn=db(e,.078,.116);ln(ct,1-hn),ln(lt,0),ln(ut,hn);var gn=pe.position.clone(),_n=gn.clone().project(V).z,vn=new Q(dn/qt*2-1,1-mn/an*2,_n).unproject(V),xn=vn.clone().applyMatrix4(V.matrixWorldInverse).z,Sn=cn.bodyH*.5*(2*Math.abs(xn)*Math.tan(V.fov*Math.PI/360))/an,Cn=h(m(e,.12,.22));pe.position.copy(vn).lerp(gn,Cn),pe.scale.setScalar(p(Sn,ie,Cn)),Ue.visible=!1,i.style.opacity=(o*hn).toFixed(3)}else i.style.opacity=o.toFixed(3),ct&&ln(ct,0);if(le.visible=s,he.visible=!0,Oe?.update(e,pe,U,he,nt.C.value,P,s)){le.visible=!1;var wn=db(e,.078,.116);ln(ut,wn),ln(dt,0),ln(ft,1-wn)}}function fn(e,t,n,r,i){var a=mt[e];if(a){var o=h(m(t,n,r)),s=h(m(t,i-Math.min(.012,(i-r)*.3),i)),c=o*(1-s);a.style.opacity=c.toFixed(3),a.style.transform=`translateY(`+((1-o)*18-s*14).toFixed(1)+`px)`}}function pn(e){if(gt.length){ln(ht,m(e,.05,.12)*(1-m(e,.878,.92)));for(var t=0;t<gt.length;t++){var n=cn[t][0],r=cn[t][1],i=d((e-n)/(r-n));gt[t].bar.style.width=(i*100).toFixed(1)+`%`;var a=e>=n&&e<r;gt[t].el.classList.toggle(`is-now`,a),gt[t].el.classList.toggle(`is-done`,e>=r)}}}var mn=new Q,hn=new Q,gn=new Q,_n=.93,vn=.465,yn=.32;function bn(){if(!(yt.length<3)){var e=i.getBoundingClientRect();if(e.width&&e.height)for(var t=0;t<3;t++){var n=document.querySelector(`.sb-card[data-cat="`+[`green`,`roasted`,`filter`][t]+`"]`),r=n&&n.querySelector(`.sb-card__img`);if(r){var a=r.getBoundingClientRect();xn((a.left+a.width/2-e.left)/e.width,(a.top+a.height*vn-e.top)/e.height,en[t]),xn((a.left-e.left)/e.width,.5,hn),xn((a.right-e.left)/e.width,.5,gn),tn[t]=f(Math.abs(gn.x-hn.x)*_n/(te*2),.1,2.6)}}}}function xn(e,t,n){mn.set(e*2-1,-(t*2-1),.5).unproject(V).sub(V.position);var r=mn.z,i=Math.abs(r)<1e-6?0:(0-V.position.z)/r;return n.copy(V.position).addScaledVector(mn,i)}var Sn=0,Cn=0,wn=!0,Tn=!0,En=0,Dn=innerWidth,On=innerHeight,kn=matchMedia(`(pointer: coarse)`).matches,An=innerWidth,jn=innerHeight;function Mn(){var t=parseFloat(getComputedStyle(n).getPropertyValue(`--sb-story`))||.86;let r=bi.matchMedia();e.own({dispose(){r.revert()}}),r.add({mobile:`(max-width: 767px)`,tablet:`(min-width: 768px) and (max-width: 1439px)`,desktop:`(min-width: 1440px)`},e=>(n.dataset.motionViewport=e.conditions.mobile?`mobile`:e.conditions.tablet?`tablet`:`desktop`,(()=>{let e=Vs.create({trigger:`#sb-origin`,start:`top top`,end:()=>`+=`+(document.getElementById(`sb-origin`).offsetHeight-On),scrub:!0,onUpdate:function(e){Sn=d(e.progress/t)},onRefresh:function(e){Sn=d(e.progress/t),In=!0}});return()=>e.kill()})())),e.own(new IntersectionObserver(function(e){Tn=e[0].isIntersecting},{rootMargin:`15% 0px`})).observe(document.getElementById(`sb-origin`)),e.tick(Nn),e.listen(window,`resize`,Ln,{passive:!0}),e.listen(window,`orientationchange`,Ln,{passive:!0})}function Nn(e){if(wn){var t=En?Math.min(.05,e-En):.016;En=e,bt=Cn*60,!Tn||document.hidden||Cn===Sn&&!In||(Cn=kn?Sn:Cn+(Sn-Cn)*Math.min(1,t*7.5),Math.abs(Sn-Cn)<1e-5&&(Cn=Sn),In=!1,qt(Cn),dn(Cn),le.visible?(i.style.visibility=`visible`,oe.render(B,V)):i.style.visibility=`hidden`)}}function Pn(){n.style.removeProperty(`--sb-viewport`);var e=r.clientWidth||innerWidth,t=r.clientHeight||innerHeight;kn&&n.style.setProperty(`--sb-viewport`,t+`px`),Dn=e,On=t,Oe?.resize(e,t),V.aspect=e/t,V.updateProjectionMatrix(),oe.setPixelRatio(Math.min(devicePixelRatio||1,u.dpr)),oe.setSize(e,t,!1),xt.vertical=V.aspect<.95,xt.vertical?(xt.x=0,xt.y=0,xt.gapY=.46,xt.base=.38):(xt.y=-.3,xt.x=f(.7*V.aspect,.86,1.28),xt.base=1),n.style.setProperty(`--sb-track`,(e<768?4.612:6.676)*t+`px`),bn();var i=_t&&_t.querySelector(`.wrap`),a=_t?parseFloat(getComputedStyle(_t).paddingTop):0,o=i?i.offsetHeight:t;n.style.setProperty(`--sb-collection-trim`,Math.max(0,t-a-o-24)+`px`),In=!0}var Fn,In=!0;function Ln(){kn&&innerWidth===An&&Math.abs(innerHeight-jn)<jn*.25||(An=innerWidth,jn=innerHeight,clearTimeout(Fn),Fn=setTimeout(function(){t||(Pn(),Vs.refresh())},180))}function Rn(){bn(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(function(){t||(Pn(),Vs.refresh())})}function zn(){e.listen(document,`visibilitychange`,function(){wn=!document.hidden,En=0,In=!0}),e.listen(i,`webglcontextlost`,function(e){e.preventDefault(),Vn()})}function Bn(){pt&&(pt.inert=!1),_t&&(_t.inert=!1),[ct,lt,ut,dt,ft,pt,_t,vt,ht].forEach(function(e){e&&e.removeAttribute(`style`)}),mt.concat(yt).forEach(function(e){e.removeAttribute(`style`)}),yt.forEach(function(e){[`img`,`.sb-card__body`,`.sb-card__scrim`].forEach(function(t){var n=e.querySelector(t);n&&n.removeAttribute(`style`)})})}function Vn(){t||(t=!0,wn=!1,clearTimeout(Fn),e.dispose(B,oe,Ye),se&&se.dispose(),Bn(),i.removeAttribute(`style`),i.replaceWith(i.cloneNode(!1)),n.classList.remove(`sb-on`),delete n.dataset.motionViewport,n.style.removeProperty(`--sb-track`),n.style.removeProperty(`--sb-collection-trim`),n.style.removeProperty(`--sb-viewport`),ot&&ot.classList.add(`is-done`),delete window.sbCaptureCategoryArt,delete window.sbOriginDispose,Vs.refresh())}window.sbCaptureCategoryArt=function(e,t,n){var r=V.aspect,a=V.fov,o=V.position.clone(),s=V.quaternion.clone();dn(.93,!0),nt.C.value=1,nt.R.value=1,nt.L.value=0,rt.value=1,at.o.value=0,it.o.value=0,Ve.visible=He.visible=Ue.visible=!1,ue.visible=!1,pe.visible=!1,me.visible=!1,Je.intensity=e===1?.45:0,qe.intensity=.16,We.color.set(16771270),We.intensity=2.25,We.position.set(-2.4,3.6,2),Ke.color.set(10401496),Ke.intensity=1.05,Ke.position.set(2.8,1.1,-2.2),Ge.color.set(13081173),Ge.intensity=.95,Ge.position.set(.4,-.6,3),oe.toneMappingExposure=.88,B.environment=ce,le.visible=!0,q.visible=ye.visible=e===2,_e.visible=e===0,K.visible=e===1,e===0&&Ft(_e,1),e===1&&Ft(K,1);for(var c=0;c<3;c++)we[c].visible=c===e,we[c].userData.shadow.visible=c===e;ve.opacity=1,be.opacity=1;for(var l=0;l<Xe.length;l++)Xe[l].opacity=1;for(var u=0;u<3;u++)xe[u].visible=u===e,Ce[u].opacity=.38;W.visible=e===0,U.visible=e===1||e===2,ge.visible=!1,Re[0].visible=Re[1].visible=!1,Ae.visible=je.visible=Me.visible=!1,Le.visible=!1;for(var d=xt.base,f=0;f<3;f++)Mt(f,Jt),xe[f].position.copy(Jt),xe[f].scale.setScalar(d);var p=xe[e].position,m=p.y+z*d;W.position.set(p.x-.02*d,m,.03*d),W.rotation.set(1.3,Math.PI+.2,0,`YXZ`),W.scale.setScalar(R*.5*d),U.position.set(p.x-.02*d,e===2?p.y+(te*I+It*.5+R*.5*P*.47)*d:m,(e===2?.1:.03)*d),U.rotation.set(1.3,Math.PI+.55,0,`YXZ`),U.scale.setScalar(R*(e===2?.4:.5)*d),he.scale.setScalar(1),V.aspect=t/n,V.fov=34,V.position.set(p.x,p.y+.92*d,p.z+2.1*d),V.lookAt(p.x,p.y-.05*d,p.z),V.updateProjectionMatrix(),V.updateMatrixWorld(),i.style.opacity=`1`;var h=oe.getPixelRatio(),g=new Z;oe.getSize(g),oe.setPixelRatio(1),oe.setSize(t,n,!1),oe.setRenderTarget(null),oe.clear(),oe.render(B,V);var _=document.createElement(`canvas`);_.width=t,_.height=n;var v=_.getContext(`2d`),y=v.createRadialGradient(t*.5,n*.4,0,t*.5,n*.4,n*.78);y.addColorStop(0,`#241811`),y.addColorStop(.58,`#150E09`),y.addColorStop(1,`#090604`),v.fillStyle=y,v.fillRect(0,0,t,n),v.drawImage(oe.domElement,0,0,t,n);var b=v.createRadialGradient(t*.5,n*.46,n*.22,t*.5,n*.46,n*.8);return b.addColorStop(0,`rgba(9,6,4,0)`),b.addColorStop(1,`rgba(9,6,4,0.62)`),v.fillStyle=b,v.fillRect(0,0,t,n),oe.setPixelRatio(h),oe.setSize(g.x,g.y,!1),We.position.set(3.1,4.4,2.2),Ke.color.set(12571368),Ke.position.set(-2.2,1.6,2.6),Ge.color.set(11059326),Ge.position.set(-2.6,1.1,-2.4),V.aspect=r,V.fov=a,V.position.copy(o),V.quaternion.copy(s),V.updateProjectionMatrix(),V.updateMatrixWorld(),En=0,_},window.sbOriginDispose=Vn;try{return Et(),{dispose:Vn,get scene(){return B},get renderer(){return oe}}}catch(e){document.dispatchEvent(new CustomEvent(`sb:visual-error`,{detail:e.message})),n.classList.remove(`sb-on`),delete n.dataset.motionViewport,ot&&ot.classList.add(`is-done`);try{Vn()}catch{}}}var Db=n((()=>{Qy(),eb(),$s(),nb(),wb(),pb()}));$s();function Ob(){let e,t=!1,n=El.cinematic&&El.three&&!Qs.matches&&innerWidth>=El.minimumSceneWidth&&!navigator.connection?.saveData,r=document.getElementById(`sb-loader`);if(!n)return r?.classList.add(`is-done`),()=>{};let i=setTimeout(async()=>{if(!t)try{let{createOrigin:n}=await kl(async()=>{let{createOrigin:e}=await Promise.resolve().then(()=>(Db(),Tb));return{createOrigin:e}},void 0,{}.url);if(t||Qs.matches)return;let r;try{r=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{}e=n(),Vs.refresh(),window.sbLenis?.resize(),r&&vc(r,{behavior:`auto`})}catch(e){document.dispatchEvent(new CustomEvent(`sb:visual-error`,{detail:e.message}))}finally{r?.classList.add(`is-done`)}},180);return()=>{t=!0,clearTimeout(i),e?.dispose()}}function kb(){let e=document.getElementById(`drawer`),t=document.getElementById(`burger`),n=new AbortController,r=()=>{let n=e.classList.contains(`is-open`);t.setAttribute(`aria-expanded`,String(n)),e.inert=!n,n&&!e.contains(document.activeElement)&&document.getElementById(`drawer-close`).focus()},i=new MutationObserver(r);return i.observe(e,{attributes:!0,attributeFilter:[`class`]}),r(),e.addEventListener(`keydown`,t=>{if(t.key!==`Tab`)return;let n=[...e.querySelectorAll(`a[href], button`)].filter(e=>e.getClientRects().length),r=n[0],i=n.at(-1);t.shiftKey&&document.activeElement===r&&(t.preventDefault(),i.focus()),!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),r.focus())},{signal:n.signal}),document.addEventListener(`keydown`,n=>{n.key===`Escape`&&e.contains(document.activeElement)&&t.focus()},{signal:n.signal}),()=>{i.disconnect(),n.abort()}}$s(),window.ScrollTrigger=Vs;var Ab=[];function jb(){Ab.splice(0).reverse().forEach(e=>e())}function Mb(){jb(),Ab=[yc(El.smoothScroll),Dl(El.reveals),Ol(),kb(),Ob()]}Mb(),Qs.addEventListener(`change`,Mb),matchMedia(`(min-width: ${El.minimumSceneWidth}px)`).addEventListener(`change`,Mb),addEventListener(`pagehide`,jb),addEventListener(`pageshow`,e=>{e.persisted&&Mb()})})();