/* ==========================================================================
   STEPHEN BLAKE — "Origin"
   A scroll-driven cinematic prologue: plantation → one ripe cherry → the fall
   → the seed inside → three paths → green, roast, grind → the real catalogue.

   Architecture
   ------------
   Hybrid, as the brief asks.  The *environment* is photographic — the
   company's own plantation and hill photographs, composited as DOM layers
   with scroll-driven blur, scale and crossfade, which buys real depth of
   field for nothing on the GPU.  Everything the story actually touches —
   branch, leaves, the hero cherry, the seed, the three beans, the roast,
   the grind, the vessels — is real-time Three.js, so it can be driven
   frame-accurately from scroll position.

   Every visual value below is a pure function of one number, `p`, the
   scroll progress through the prologue.  Nothing accumulates frame to
   frame, which is what makes scrolling backwards rewind the film exactly
   rather than approximately.

   Nothing here is required for the site to work.  If WebGL is missing, the
   libraries fail to load, the visitor prefers reduced motion, or anything
   in here throws, the page keeps the original hero and a plain three-card
   category section.  That fallback is the *default* state of the CSS; this
   file only ever adds `sb-on` to <html>.
   ========================================================================== */
import * as THREE from 'three';
import { createSceneAssets } from './visuals/scene-assets.js';
import { gsap, ScrollTrigger } from './animations/core.js';
import { createSceneScope } from './visuals/scene-scope.js';

export function createOrigin() {
  const scope = createSceneScope();
  let disposed = false;

  var root = document.documentElement;
  var stage = document.getElementById('sb-stage');
  var canvas = document.getElementById('sb-canvas');
  if (!stage || !canvas) return;

  /* ---------------------------------------------------------------------
     0.  Can we — and should we — run?
     --------------------------------------------------------------------- */
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) return;

  /* ---------------------------------------------------------------------
     1.  Quality tier — real consumer devices, not the development machine
     --------------------------------------------------------------------- */
  var coarse = matchMedia('(pointer: coarse)').matches;
  var cores = navigator.hardwareConcurrency || 4;
  var mem = navigator.deviceMemory || 4;
  var small = Math.min(innerWidth, innerHeight) < 760;

  var tier = 'high';
  if (coarse || small || cores <= 4 || mem <= 4) tier = 'mid';
  if ((coarse && (cores <= 4 || mem <= 3)) || innerWidth < 520 || cores <= 2) tier = 'low';

  var Q = {
    high: { dpr: 2.0, nodes: 15, dust: 260, grinds: 1500, smoke: 110, aa: true, beanSeg: 84, cherrySeg: 30, heroSeg: 64, envSize: 512, pile: 132 },
    mid: { dpr: 1.6, nodes: 10, dust: 130, grinds: 620, smoke: 60, aa: true, beanSeg: 56, cherrySeg: 22, heroSeg: 44, envSize: 256, pile: 72 },
    low: { dpr: 1.3, nodes: 6, dust: 60, grinds: 240, smoke: 28, aa: false, beanSeg: 40, cherrySeg: 16, heroSeg: 30, envSize: 256, pile: 32 }
  }[tier];

  /* ---------------------------------------------------------------------
     2.  Small maths
     --------------------------------------------------------------------- */
  const { clamp01, clamp, lerp, seg, smooth, easeIO, easeIn, easeOut, bell, rnd, rr, cv, makeTex, leafVeinCanvas, cherrySkinCanvas, beanSurfaceCanvas, groundsCanvas, puffCanvas, equirect, paintPlantation, paintStudio, leafGeometry, cherryGeometry, BEAN, deformBean, beanGeometry, VESSEL_R, FLOOR, INNER, vesselGeometry, grindGeometry } = createSceneAssets();

  /* ---------------------------------------------------------------------
     5.  Scene state
     --------------------------------------------------------------------- */
  var SEAT = 1.55;                         /* hero-bean scale on its pedestal */
  var HEAP_H = 0.128;                      /* how high a handful heaps       */
  /* Where the hero bean rests: on top of the handful, in both the film and
     the still.  Sharing this number is what lets one dissolve into the
     other without the eye catching the swap. */
  var SEAT_Y = VESSEL_R * FLOOR + HEAP_H + SEAT * 0.50 * BEAN * 0.47;
  var CHERRY_R = 0.155;
  var CHERRY_Y = 0.91;                     /* where the hero cherry hangs     */
  var FALL_Y = -0.545;                     /* and where it comes to rest      */

  var renderer, scene, camera, pmrem, envPlantation, envStudio;
  var world, branchGrp, leaves, cherryField, heroCherry, heroStem;
  var seed, beanC, beanL, beanR, beanMats = {}, greenPile, roastPile, grinds, grindMat, mound, moundMat;
  var vessels = [], vesselMats = [], shadowMats = [], spills = [];
  var beanGeoRef, cherryGeoRef, beanSurface = null;
  var processing, stationN, stationW, stationH;
  var dryCherries, washedBeans, honeyBean, honeyCoat;
  var dryingSlab, husk, parchMat, waterMat;
  var smoke, sparks, dust;
  var keyLight, rimLight, fillLight, hemi, roastLight;

  var disposables = [];          /* everything we must give back to the GPU */
  var canopyFade = [];           /* foliage, which dissolves with the canopy */
  function track(o) { disposables.push(o); return o; }
  /* Only the foliage is blended.  Everything else stays opaque, which keeps
     the depth sorting honest — the whole composition is faded out at the end
     by the canvas element, not by two dozen material alphas. */
  function canopy(m) { m.transparent = true; m.depthWrite = true; canopyFade.push(m); return m; }

  /* uniforms shared with the shaders */
  var uWind = { value: 0 }, uLeafFade = { value: 1 };
  var uDissolve = { value: 0 };
  var uRoast = { C: { value: 0 }, L: { value: 0 }, R: { value: 0 } };
  var uGrind = { value: 0 };
  var uDust = { t: { value: 0 }, o: { value: 0 } };
  var uSmoke = { t: { value: 0 }, o: { value: 0 } };

  /* DOM the story drives */
  var loaderEl = document.getElementById('sb-loader');
  var loadBar = loaderEl ? loaderEl.querySelector('.sb-loader__bar i') : null;
  var bgPlant = document.getElementById('hero-bg');
  var bgHills = document.getElementById('sb-hills');
  var bgStudio = document.getElementById('sb-studio');
  var bgPaper = document.getElementById('sb-paper');
  var veilEl = document.getElementById('sb-veil');
  var heroCopy = stage.querySelector('.hero');
  var noteEls = Array.prototype.slice.call(stage.querySelectorAll('.sb-note'));
  var railEl = document.getElementById('sb-rail');
  var railSteps = Array.prototype.slice.call(stage.querySelectorAll('.sb-rail__step'))
    .map(function (el) { return { el: el, bar: el.querySelector('i') }; });
  var pathsEl = document.getElementById('coffees');
  var pathsHead = stage.querySelector('.sb-cats__head');
  var cardEls = Array.prototype.slice.call(stage.querySelectorAll('.sb-card'));

  var clock = 0;
  var layout = { vertical: false, x: 1.12, y: -0.30, gapY: 0.74, base: 1 };
  var camPos = new THREE.Vector3(), camLook = new THREE.Vector3();

  var stepsDone = 0;
  function step() { stepsDone++; if (loadBar) loadBar.style.width = Math.min(100, stepsDone * 20) + '%'; }

  /* ---------------------------------------------------------------------
     6.  Build
     --------------------------------------------------------------------- */
  function build() {
    const context = canvas.getContext('webgl2', { alpha: true, antialias: Q.aa, stencil: false });
    if (!context) throw new Error('WebGL 2 unavailable; using photographic fallback.');
    root.classList.add('sb-on');

    renderer = new THREE.WebGLRenderer({
      canvas: canvas, context: context, alpha: true, antialias: Q.aa,
      powerPreference: 'high-performance', stencil: false
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, Q.dpr));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    renderer.setClearColor(0x000000, 0);
    step();

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, 1, 0.05, 80);
    world = new THREE.Group();
    scene.add(world);

    pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    var eqP = equirect(paintPlantation, Q.envSize);
    var eqS = equirect(paintStudio, Q.envSize);
    envPlantation = track(pmrem.fromEquirectangular(eqP)).texture;
    envStudio = track(pmrem.fromEquirectangular(eqS)).texture;
    eqP.dispose(); eqS.dispose();
    scene.environment = envPlantation;
    step();

    buildLights();
    buildPlantation();
    step();
    buildPaths();
    buildProcessing();
    step();
    buildAtmosphere();
    step();

    resize();
    driveCamera(0);
    apply(0);
    renderer.render(scene, camera);

    wireScroll();
    wireLinks();
    wireLifecycle();

    if (loaderEl) setTimeout(function () { loaderEl.classList.add('is-done'); }, 240);
    document.dispatchEvent(new CustomEvent('sb:origin-ready'));
  }

  function buildLights() {
    hemi = new THREE.HemisphereLight(0xEBD8B6, 0x2B2216, 0.55);
    scene.add(hemi);

    keyLight = new THREE.DirectionalLight(0xFFE3B4, 3.1);      /* the sun     */
    keyLight.position.set(3.1, 4.4, 2.2);
    scene.add(keyLight);

    rimLight = new THREE.DirectionalLight(0xA8C07E, 0.9);      /* leaf bounce */
    rimLight.position.set(-2.6, 1.1, -2.4);
    scene.add(rimLight);

    fillLight = new THREE.DirectionalLight(0xBFD2E8, 0.0);     /* studio fill */
    fillLight.position.set(-2.2, 1.6, 2.6);
    scene.add(fillLight);

    /* warmth from the roast — a suggestion of heat, never a fire */
    roastLight = new THREE.PointLight(0xFF8A3A, 0.0, 3.0, 2.0);
    scene.add(roastLight);
  }

  /* ------------------------------------------------------------------
     Chapters 1–2: the plantation, the branch, the hero cherry
     ------------------------------------------------------------------ */
  function buildPlantation() {
    branchGrp = new THREE.Group();
    world.add(branchGrp);

    /* The branch arcs across the top of frame, leaving the lower-left
       third clear for the headline. */
    var spine = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.40, 2.20, -1.05),
      new THREE.Vector3(-1.25, 1.96, -0.48),
      new THREE.Vector3(-0.30, 1.72, -0.12),
      new THREE.Vector3(0.55, 1.58, 0.04),
      new THREE.Vector3(1.45, 1.54, -0.10),
      new THREE.Vector3(2.35, 1.62, -0.55)
    ]);

    var veinCanvas = leafVeinCanvas();
    var barkMap = track(makeTex(veinCanvas, false, 3));
    var bark = canopy(track(new THREE.MeshStandardMaterial({
      color: 0x4A3624, roughness: 0.94, metalness: 0.0,
      roughnessMap: barkMap, envMapIntensity: 0.6
    })));
    branchGrp.add(new THREE.Mesh(track(new THREE.TubeGeometry(spine, 60, 0.032, 7, false)), bark));

    /* the twig the hero cherry hangs from, plus one for depth */
    var twigs = [
      [0.55, 1.58, 0.04, 0.06, 1.34, 0.22],
      [1.45, 1.54, -0.10, 1.26, 1.26, 0.28]
    ];
    twigs.forEach(function (t) {
      var c = new THREE.CatmullRomCurve3([
        new THREE.Vector3(t[0], t[1], t[2]),
        new THREE.Vector3((t[0] + t[3]) / 2, (t[1] + t[4]) / 2 - 0.04, (t[2] + t[5]) / 2),
        new THREE.Vector3(t[3], t[4], t[5])
      ]);
      branchGrp.add(new THREE.Mesh(track(new THREE.TubeGeometry(c, 20, 0.015, 6, false)), bark));
    });

    /* ---- leaves, in opposite pairs at nodes along the branch ---- */
    var veinMap = track(makeTex(veinCanvas, false));
    var leafGeo = track(leafGeometry(tier === 'low' ? 10 : 18, tier === 'low' ? 4 : 7));
    var leafMat = canopy(track(new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, roughness: 0.40, metalness: 0.0,
      clearcoat: 0.62, clearcoatRoughness: 0.34,
      sheen: 0.55, sheenColor: new THREE.Color(0x9FBE6C), sheenRoughness: 0.7,
      roughnessMap: veinMap, bumpMap: veinMap, bumpScale: 0.014,
      side: THREE.DoubleSide, envMapIntensity: 0.9
    })));
    addWind(leafMat, true);

    var nLeaf = Q.nodes * 4;
    leaves = new THREE.InstancedMesh(leafGeo, leafMat, nLeaf);
    var lphase = new Float32Array(nLeaf);
    var m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    var po = new THREE.Vector3(), sc = new THREE.Vector3(), col = new THREE.Color();
    var li = 0;
    for (var n = 0; n < Q.nodes && li < nLeaf; n++) {
      var t = 0.05 + (n / Q.nodes) * 0.90 + rr(-0.018, 0.018);
      var node = spine.getPointAt(clamp01(t));
      var baseAng = rr(0, 6.283);
      for (var k = 0; k < 4 && li < nLeaf; k++) {
        /* leaves sit ON the branch: the petiole starts at the node */
        po.set(node.x + rr(-0.03, 0.03), node.y + rr(-0.03, 0.02), node.z + rr(-0.03, 0.03));
        q.setFromEuler(e.set(rr(-2.15, -1.25), baseAng + k * 1.5708 + rr(-0.35, 0.35), rr(-0.5, 0.5)));
        var s = rr(0.30, 0.50);
        m.compose(po, q, sc.set(s, s, s));
        leaves.setMatrixAt(li, m);
        col.setHSL(rr(0.235, 0.300), rr(0.32, 0.55), rr(0.085, 0.215));
        leaves.setColorAt(li, col);
        lphase[li] = rr(0, 6.283);
        li++;
      }
    }
    leaves.count = li;
    leafGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(lphase, 1));
    leaves.instanceMatrix.needsUpdate = true;
    if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
    leaves.frustumCulled = false;
    branchGrp.add(leaves);

    /* ---- clusters of cherries, held tight against the branch ---- */
    var skinMap = track(makeTex(cherrySkinCanvas(), true));
    var cherryGeo = cherryGeoRef = track(cherryGeometry(Q.cherrySeg));
    var cherryMat = canopy(track(new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, map: skinMap, roughness: 0.33, metalness: 0.0,
      clearcoat: 0.64, clearcoatRoughness: 0.28, envMapIntensity: 1.0
    })));
    addWind(cherryMat, true);

    var nCherry = Q.nodes * 3;
    cherryField = new THREE.InstancedMesh(cherryGeo, cherryMat, nCherry);
    var cphase = new Float32Array(nCherry);
    var ci = 0;
    for (var cn = 0; cn < Q.nodes && ci < nCherry; cn++) {
      var ct = 0.06 + (cn / Q.nodes) * 0.88 + rr(-0.02, 0.02);
      var cnode = spine.getPointAt(clamp01(ct));
      for (var j = 0; j < 3 && ci < nCherry; j++) {
        var a = rr(0, 6.283), rad = rr(0.045, 0.085);
        po.set(cnode.x + Math.cos(a) * rad, cnode.y - rr(0.03, 0.09), cnode.z + Math.sin(a) * rad);
        q.setFromEuler(e.set(rr(0, 6.283), rr(0, 6.283), rr(0, 6.283)));
        var cs = rr(0.052, 0.080);
        m.compose(po, q, sc.set(cs, cs, cs));
        cherryField.setMatrixAt(ci, m);
        var ripe = rnd();
        if (ripe > 0.88) col.setHSL(rr(0.075, 0.115), 0.66, 0.30);      /* turning */
        else if (ripe > 0.82) col.setHSL(rr(0.22, 0.26), 0.44, 0.20);   /* unripe  */
        else col.setHSL(rr(0.003, 0.028), rr(0.72, 0.94), rr(0.19, 0.32));
        cherryField.setColorAt(ci, col);
        cphase[ci] = rr(0, 6.283);
        ci++;
      }
    }
    cherryField.count = ci;
    cherryGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(cphase, 1));
    cherryField.instanceMatrix.needsUpdate = true;
    if (cherryField.instanceColor) cherryField.instanceColor.needsUpdate = true;
    cherryField.frustumCulled = false;
    branchGrp.add(cherryField);

    /* ---- the hero cherry ---- */
    heroCherry = new THREE.Mesh(track(cherryGeometry(Q.heroSeg)), heroSkinMaterial(skinMap));
    heroCherry.scale.setScalar(CHERRY_R);
    heroCherry.position.set(0.02, CHERRY_Y, 0.06);
    world.add(heroCherry);

    heroStem = new THREE.Group();
    var stemMat = canopy(track(new THREE.MeshStandardMaterial({ color: 0x55632F, roughness: 0.82 })));
    var stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.02, CHERRY_Y + 0.02, 0.06),
      new THREE.Vector3(0.02, CHERRY_Y + 0.14, 0.09),
      new THREE.Vector3(0.04, CHERRY_Y + 0.28, 0.15),
      new THREE.Vector3(0.06, 1.34, 0.22)
    ]);
    heroStem.add(new THREE.Mesh(track(new THREE.TubeGeometry(stemCurve, 16, 0.0062, 5, false)), stemMat));
    world.add(heroStem);
  }

  /* Wind: a believable sway applied entirely in the vertex shader, so the
     CPU never touches an instance matrix.  Amplitude rises up the leaf. */
  function addWind(mat, fade) {
    mat.onBeforeCompile = function (sh) {
      sh.uniforms.uWind = uWind;
      if (fade) sh.uniforms.uLeafFade = uLeafFade;
      sh.vertexShader = 'attribute float aPhase;\nuniform float uWind;\n' +
        sh.vertexShader.replace('#include <begin_vertex>', [
          '#include <begin_vertex>',
          'float sway = sin(uWind * 0.85 + aPhase) * 0.5 + sin(uWind * 1.63 + aPhase * 1.7) * 0.5;',
          'float amp  = 0.010 + max(transformed.y, 0.0) * 0.035;',
          'transformed.x += sway * amp;',
          'transformed.z += cos(uWind * 0.71 + aPhase * 1.3) * amp * 0.7;'
        ].join('\n'));
      if (fade) {
        sh.fragmentShader = 'uniform float uLeafFade;\n' +
          sh.fragmentShader.replace('#include <dithering_fragment>',
            '#include <dithering_fragment>\ngl_FragColor.a *= uLeafFade;');
      }
    };
    mat.needsUpdate = true;
  }

  /* The hero cherry's skin dissolves — it does not explode.  A noise
     threshold eats it away, with a warm gold edge where the fruit gives up
     the seed. */
  function heroSkinMaterial(map) {
    var m = track(new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, map: map, roughness: 0.31, metalness: 0.0,
      clearcoat: 0.68, clearcoatRoughness: 0.25, envMapIntensity: 1.0
    }));
    m.onBeforeCompile = function (sh) {
      sh.uniforms.uDissolve = uDissolve;
      sh.vertexShader = 'varying vec3 vSbP;\n' +
        sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvSbP = position;');
      sh.fragmentShader = [
        'uniform float uDissolve;',
        'varying vec3 vSbP;',
        'float sbH(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }',
        'float sbN(vec3 p){',
        '  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);',
        '  return mix(mix(mix(sbH(i), sbH(i + vec3(1,0,0)), f.x),',
        '                 mix(sbH(i + vec3(0,1,0)), sbH(i + vec3(1,1,0)), f.x), f.y),',
        '             mix(mix(sbH(i + vec3(0,0,1)), sbH(i + vec3(1,0,1)), f.x),',
        '                 mix(sbH(i + vec3(0,1,1)), sbH(i + vec3(1,1,1)), f.x), f.y), f.z);',
        '}'
      ].join('\n') + '\n' + sh.fragmentShader
        .replace('#include <clipping_planes_fragment>', [
          '#include <clipping_planes_fragment>',
          'float sbMask = sbN(vSbP * 3.4) * 0.70 + (0.5 - vSbP.y * 0.5) * 0.30;',
          'if (uDissolve > 0.001 && sbMask < uDissolve) discard;'
        ].join('\n'))
        .replace('#include <dithering_fragment>', [
          '#include <dithering_fragment>',
          'float sbEdge = smoothstep(uDissolve + 0.09, uDissolve, sbMask) * step(0.001, uDissolve);',
          'gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.00, 0.76, 0.38), sbEdge * 0.80);'
        ].join('\n'));
    };
    m.needsUpdate = true;
    return m;
  }

  /* ------------------------------------------------------------------
     Chapters 4–8: the seed, the three paths, the three destinations
     ------------------------------------------------------------------ */
  function beanMaterial(u) {
    if (!beanSurface) beanSurface = track(makeTex(beanSurfaceCanvas(), false, 2));
    var m = track(new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, roughness: 0.62, metalness: 0.0,
      clearcoat: 0.0, clearcoatRoughness: 0.7, envMapIntensity: 0.72,
      bumpMap: beanSurface, bumpScale: 0.52,
      roughnessMap: beanSurface
    }));
    m.onBeforeCompile = function (sh) {
      sh.uniforms.uRoast = u;
      sh.vertexShader = 'attribute float aCrease;\nuniform float uRoast;\nvarying float vSbC;\n' +
        sh.vertexShader.replace('#include <begin_vertex>', [
          '#include <begin_vertex>',
          'vSbC = aCrease;',
          /* beans swell and the cut opens a little as they roast */
          'transformed *= (1.0 + uRoast * 0.13);',
          'transformed -= normal * uRoast * 0.0016 * aCrease;'
        ].join('\n'));
      sh.fragmentShader = 'uniform float uRoast;\nvarying float vSbC;\n' +
        sh.fragmentShader
          .replace('#include <color_fragment>', [
            '#include <color_fragment>',
            'vec3 sbG  = vec3(0.168, 0.180, 0.112);',   /* green, unroasted   */
            'vec3 sbY  = vec3(0.470, 0.420, 0.208);',   /* pale yellow        */
            'vec3 sbGo = vec3(0.455, 0.280, 0.098);',   /* golden             */
            'vec3 sbLb = vec3(0.225, 0.120, 0.055);',   /* light brown        */
            'vec3 sbDb = vec3(0.082, 0.042, 0.024);',   /* deep roasted brown */
            'float r = clamp(uRoast, 0.0, 1.0);',
            'vec3 sbCol = mix(sbG, sbY, smoothstep(0.00, 0.30, r));',
            'sbCol = mix(sbCol, sbGo, smoothstep(0.26, 0.55, r));',
            'sbCol = mix(sbCol, sbLb, smoothstep(0.50, 0.78, r));',
            'sbCol = mix(sbCol, sbDb, smoothstep(0.74, 1.00, r));',
            /* silverskin sits in the cut while the bean is green, and chars */
            'float sbSk = smoothstep(0.35, 0.95, vSbC);',
            'vec3 sbSilver = mix(vec3(0.360, 0.345, 0.288), vec3(0.046, 0.029, 0.019), smoothstep(0.18, 0.72, r));',
            'sbCol = mix(sbCol, sbSilver, sbSk * mix(0.62, 0.38, r));',
            /* the groove itself is in shadow */
            'sbCol *= 1.0 - sbSk * 0.22;',
            'diffuseColor.rgb *= sbCol;'
          ].join('\n'))
          .replace('#include <roughnessmap_fragment>', [
            '#include <roughnessmap_fragment>',
            /* oils migrate to the surface: a dark roast is glossier */
            'roughnessFactor = clamp(roughnessFactor * mix(1.40, 1.02, smoothstep(0.35, 1.0, uRoast)) - vSbC * 0.04, 0.26, 1.0);'
          ].join('\n'))
          .replace('#include <emissivemap_fragment>', [
            '#include <emissivemap_fragment>',
            /* the faintest ember deep in the cut at the height of the roast.
               Restraint is the whole point: this must never read as fire. */
            'float sbEm = smoothstep(0.55, 1.0, vSbC) * exp(-pow((uRoast - 0.56) / 0.16, 2.0));',
            'totalEmissiveRadiance += vec3(1.0, 0.34, 0.07) * sbEm * 0.10;'
          ].join('\n'));
    };
    m.needsUpdate = true;
    return m;
  }

  function pathSlot(i, out) {
    if (layout.vertical) return out.set(0, layout.y + (1 - i) * layout.gapY, 0);
    return out.set((i - 1) * layout.x, layout.y, 0);
  }

  function buildPaths() {
    var beanGeo = beanGeoRef = track(beanGeometry(Q.beanSeg));
    if (!beanSurface) beanSurface = track(makeTex(beanSurfaceCanvas(), false, 2));
    beanMats.C = beanMaterial(uRoast.C);
    beanMats.L = beanMaterial(uRoast.L);
    beanMats.R = beanMaterial(uRoast.R);

    /* the seed revealed inside the cherry becomes the centre bean */
    seed = new THREE.Group();
    beanC = new THREE.Mesh(beanGeo, beanMats.C);
    seed.add(beanC);
    seed.position.set(0.02, CHERRY_Y, 0.06);
    world.add(seed);

    beanL = new THREE.Mesh(beanGeo, beanMats.L);
    beanR = new THREE.Mesh(beanGeo, beanMats.R);
    beanL.visible = beanR.visible = false;
    world.add(beanL); world.add(beanR);

    /* ---- three destinations: matte-black vessels, one gold hairline ---- */
    var vesselGeo = track(vesselGeometry(VESSEL_R));
    var ringGeo = track(new THREE.TorusGeometry(VESSEL_R * 0.996, 0.0036, 8, 96));
    var goldMat = track(new THREE.MeshStandardMaterial({
      color: 0xC9A662, metalness: 1.0, roughness: 0.25, envMapIntensity: 1.25
    }));
    var shadowTex = track(makeTex(puffCanvas(0.36), true));
    var shadowGeo = track(new THREE.PlaneGeometry(1.6, 1.6));

    for (var i = 0; i < 3; i++) {
      var g = new THREE.Group();
      var vm = track(new THREE.MeshPhysicalMaterial({
        color: 0x191410, roughness: 0.70, metalness: 0.10,
        clearcoat: 0.14, clearcoatRoughness: 0.58, envMapIntensity: 0.95,
        side: THREE.DoubleSide
      }));
      vesselMats.push(vm);
      g.add(new THREE.Mesh(vesselGeo, vm));

      var ring = new THREE.Mesh(ringGeo, goldMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = VESSEL_R * 0.320;
      ring.visible = false;
      g.add(ring);
      g.userData.shell = [g.children[0], ring];

      var sm = track(new THREE.MeshBasicMaterial({
        map: shadowTex, transparent: true, opacity: 0, depthWrite: false, color: 0x000000
      }));
      shadowMats.push(sm);
      var sh = new THREE.Mesh(shadowGeo, sm);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -0.005;
      sh.scale.setScalar(0.62);
      g.add(sh);

      g.visible = false;
      vessels.push(g);
      world.add(g);
    }

    /* Two handfuls of beans, heaped the way beans actually heap: rings that
       tighten as they stack, every bean lying flat with its cut upward and
       spun to its own angle. */
    greenPile = beanHeap(beanGeo, beanMats.L, Q.pile, 0.42);
    vessels[0].add(greenPile);
    roastPile = beanHeap(beanGeo, beanMats.C, Q.pile, 0.42);
    vessels[1].add(roastPile);

    /* a few beans resting on the studio floor beside each vessel — the
       detail that stops a product shot looking like a diagram */
    for (var sp2 = 0; sp2 < 3; sp2++) {
      var mat = sp2 === 0 ? beanMats.L : beanMats.C;
      var spill = new THREE.InstancedMesh(beanGeo, mat, 8);
      var m2 = new THREE.Matrix4(), q2 = new THREE.Quaternion(), e2 = new THREE.Euler();
      var p2 = new THREE.Vector3(), s2v = new THREE.Vector3();
      for (var b2 = 0; b2 < 8; b2++) {
        var ang = rr(-0.55, 3.69), rad2 = rr(VESSEL_R * 1.14, VESSEL_R * 1.52);
        var sz = 0.44 * rr(0.86, 1.10);
        p2.set(Math.cos(ang) * rad2, BEAN * sz * 0.50, Math.abs(Math.sin(ang)) * rad2 * 0.62);
        q2.setFromEuler(e2.set(1.5708 + rr(-0.18, 0.18), rr(0, 6.283), rr(-0.16, 0.16), 'YXZ'));
        spill.setMatrixAt(b2, m2.compose(p2, q2, s2v.setScalar(sz)));
      }
      spill.instanceMatrix.needsUpdate = true;
      spill.frustumCulled = false;
      spill.visible = false;
      spills.push(spill);
      vessels[sp2].add(spill);
      /* a scrap of shadow under each one, or they float */
      var sh2 = new THREE.InstancedMesh(shadowGeo, track(new THREE.MeshBasicMaterial({
        map: shadowTex, transparent: true, opacity: 0.30, depthWrite: false, color: 0x000000
      })), 8);
      for (var b3 = 0; b3 < 8; b3++) {
        spill.getMatrixAt(b3, m2);
        p2.setFromMatrixPosition(m2);
        q2.setFromEuler(e2.set(-1.5708, 0, 0));
        sh2.setMatrixAt(b3, m2.compose(p2.setY(0.0015), q2, s2v.set(0.075, 0.075, 0.075)));
      }
      sh2.instanceMatrix.needsUpdate = true;
      sh2.frustumCulled = false;
      spill.userData.shadow = sh2;
      vessels[sp2].add(sh2);
    }

    buildGrind();
  }

  /* One heap of beans inside a vessel.  Slots are fixed at build time; the
     story only ever animates each bean in from above. */
  function beanHeap(geo, mat, n, scale) {
    var mesh = new THREE.InstancedMesh(geo, mat, n);
    var slots = [], mm = new THREE.Matrix4();
    var inner = VESSEL_R * INNER, floorY = VESSEL_R * FLOOR;
    var half = BEAN * scale;                       /* half the bean's length */
    var perLayer = Math.max(8, Math.round((inner * inner) / (half * half * 1.9)));
    var GA = 2.399963;                             /* golden angle           */
    for (var i = 0; i < n; i++) {
      var layer = Math.floor(i / perLayer), k = i % perLayer;
      var shrink = 1 - layer * 0.14;
      if (shrink < 0.22) break;
      var radius = inner * shrink * Math.sqrt((k + 0.4) / perLayer) * rr(0.90, 1.04);
      var a = i * GA;
      slots.push({
        p: new THREE.Vector3(Math.cos(a) * radius,
                             floorY + half * 0.46 + layer * half * 0.72,
                             Math.sin(a) * radius),
        e: new THREE.Euler(1.5708 + rr(-0.30, 0.30), rr(0, 6.283), rr(-0.24, 0.24), 'YXZ'),
        s: scale * rr(0.80, 1.16),
        d: rnd()
      });
      mesh.setMatrixAt(slots.length - 1, mm.makeScale(0.0001, 0.0001, 0.0001));
      mesh.setColorAt(slots.length - 1, tmpCol.setHSL(rr(0.075, 0.175), rr(0.02, 0.16), rr(0.38, 0.62)));
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.count = slots.length;
    mesh.userData.slots = slots;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    mesh.visible = false;
    return mesh;
  }

  function fillHeap(mesh, t01) {
    var slots = mesh.userData.slots;
    for (var b = 0; b < slots.length; b++) {
      var s = slots[b];
      var t = smooth(clamp01((t01 - s.d * 0.42) / 0.55));
      sTmp.setScalar(Math.max(0.0001, s.s * t));
      vTmp.copy(s.p); vTmp.y += (1 - t) * 0.45;
      qTmp.setFromEuler(eTmp.set(s.e.x, s.e.y + (1 - t) * 2.2, s.e.z, 'YXZ'));
      mesh.setMatrixAt(b, mTmp.compose(vTmp, qTmp, sTmp));
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  /* Ground coffee.  A solid mound carries the mass — no particle system can
     afford to look dense enough on a phone — and one InstancedMesh of real
     grains flies into it.  Every grain's flight from inside the bean to its
     place in the mound happens in the vertex shader, so the CPU cost of the
     whole effect is a single uniform write.  Both are parented to the
     right-hand vessel, so they inherit the hand-off move and scale free. */
  var MOUND_R = VESSEL_R * INNER * 0.92;
  function buildGrind() {
    /* the mound */
    var mg = new THREE.SphereGeometry(1, 40, 20);
    var mp = mg.attributes.position, mv = new THREE.Vector3();
    for (var i = 0; i < mp.count; i++) {
      mv.fromBufferAttribute(mp, i);
      var n = 1 + 0.045 * Math.sin(mv.x * 26 + mv.z * 19) * Math.cos(mv.y * 23);
      mp.setXYZ(i, mv.x * n, Math.max(mv.y, -0.02) * n, mv.z * n);
    }
    mg.computeVertexNormals();
    track(mg);
    moundMat = track(new THREE.MeshStandardMaterial({
      map: track(makeTex(groundsCanvas(), true, 3)),
      color: 0xFFFFFF, roughness: 0.97, metalness: 0.0, envMapIntensity: 0.75,
      transparent: true, opacity: 0
    }));
    mound = new THREE.Mesh(mg, moundMat);
    mound.scale.set(MOUND_R, MOUND_R * 0.50, MOUND_R);
    mound.position.y = VESSEL_R * FLOOR;
    mound.visible = false;
    vessels[2].add(mound);

    /* the grains */
    var n2 = Q.grinds;
    var geo = grindGeometry();
    var start = new Float32Array(n2 * 3), end = new Float32Array(n2 * 3), sd = new Float32Array(n2 * 3);
    var bx = SEAT * BEAN * 0.66, by = SEAT * BEAN * 0.46, bz = SEAT * BEAN * 1.0;
    for (var k = 0; k < n2; k++) {
      /* start: uniformly inside the seated bean's volume (it lies flat, so
         its long axis is X and its thin axis is Y) */
      var z1 = rr(-1, 1), th = rnd() * 6.283, rad = Math.pow(rnd(), 1 / 3);
      var sxy = Math.sqrt(Math.max(0, 1 - z1 * z1));
      start[k * 3] = Math.cos(th) * sxy * rad * bz;
      start[k * 3 + 1] = SEAT_Y + z1 * rad * by;
      start[k * 3 + 2] = Math.sin(th) * sxy * rad * bx;
      /* end: scattered across and just above the mound's surface */
      var ea = rnd() * 6.283, er = Math.sqrt(rnd()) * MOUND_R * 1.00;
      var dome = Math.sqrt(Math.max(0, 1 - Math.pow(er / (MOUND_R * 1.00), 2)));
      end[k * 3] = Math.cos(ea) * er;
      end[k * 3 + 1] = VESSEL_R * FLOOR + dome * MOUND_R * 0.50 + rr(0.001, 0.010);
      end[k * 3 + 2] = Math.sin(ea) * er;
      sd[k * 3] = rr(0.4, 1.6); sd[k * 3 + 1] = rr(0.2, 1.0); sd[k * 3 + 2] = rnd();
    }
    geo.setAttribute('aStart', new THREE.InstancedBufferAttribute(start, 3));
    geo.setAttribute('aEnd', new THREE.InstancedBufferAttribute(end, 3));
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(sd, 3));
    track(geo);

    grindMat = track(new THREE.MeshStandardMaterial({
      color: 0x3C2416, roughness: 0.94, metalness: 0.0, envMapIntensity: 0.7,
      transparent: true, opacity: 0
    }));
    grindMat.onBeforeCompile = function (sh) {
      sh.uniforms.uT = uGrind;
      var head = [
        'attribute vec3 aStart;',
        'attribute vec3 aEnd;',
        'attribute vec3 aSeed;',
        'uniform float uT;',
        'mat3 sbR;',
        'mat3 sbAxis(vec3 a, float ang){',
        '  a = normalize(a); float s = sin(ang), c = cos(ang), o = 1.0 - c;',
        '  return mat3(o*a.x*a.x+c,      o*a.x*a.y - a.z*s, o*a.x*a.z + a.y*s,',
        '              o*a.x*a.y+a.z*s,  o*a.y*a.y + c,     o*a.y*a.z - a.x*s,',
        '              o*a.x*a.z-a.y*s,  o*a.y*a.z + a.x*s, o*a.z*a.z + c);',
        '}'
      ].join('\n');
      sh.vertexShader = head + '\n' + sh.vertexShader
        .replace('#include <beginnormal_vertex>', [
          '#include <beginnormal_vertex>',
          'float sbD = aSeed.z * 0.34;',
          'float sbT = clamp((uT - sbD) / max(1.0 - sbD, 0.001), 0.0, 1.0);',
          'sbT = sbT * sbT * (3.0 - 2.0 * sbT);',
          'sbR = sbAxis(aSeed - 0.5 + vec3(0.01, 0.31, 0.07), sbT * aSeed.x * 7.0 + aSeed.y * 6.0);',
          'objectNormal = sbR * objectNormal;'
        ].join('\n'))
        .replace('#include <begin_vertex>', [
          '#include <begin_vertex>',
          'transformed *= 0.0062 * (0.45 + aSeed.y * 0.95);',
          'transformed = sbR * transformed;',
          'vec3 sbArc = vec3(0.0, sin(sbT * 3.14159) * (0.02 + aSeed.y * 0.07), 0.0);',
          'transformed += mix(aStart, aEnd, sbT) + sbArc;'
        ].join('\n'));
    };
    grindMat.needsUpdate = true;

    grinds = new THREE.InstancedMesh(geo, grindMat, n2);
    var id = new THREE.Matrix4();
    for (var q2 = 0; q2 < n2; q2++) grinds.setMatrixAt(q2, id);
    grinds.instanceMatrix.needsUpdate = true;
    grinds.frustumCulled = false;
    grinds.visible = false;
    vessels[2].add(grinds);
  }

  /* ------------------------------------------------------------------
     Chapter 4-5: processing, drying, hulling

     Three stations stand around the suspended cherry — natural, washed,
     honey — each a small, deliberately lit vignette rather than a scene of
     its own.  The camera visits them in turn while the copy explains what
     is happening, then the journey converges back onto one parchment bean,
     dries it, and hulls it to reveal the green coffee underneath.
     ------------------------------------------------------------------ */
  var STATION = [
    new THREE.Vector3(-0.58, -0.03, 0.30),   /* natural */
    new THREE.Vector3(0.58, -0.03, 0.30),    /* washed  */
    new THREE.Vector3(0.00, -0.30, 0.56)     /* honey   */
  ];

  function buildProcessing() {
    var beanGeo = beanGeoRef;
    processing = new THREE.Group();
    world.add(processing);

    var slabGeo = track(new THREE.CylinderGeometry(0.30, 0.325, 0.022, 48));
    var slabMat = track(new THREE.MeshStandardMaterial({
      color: 0x14110D, roughness: 0.86, metalness: 0.04, envMapIntensity: 0.7
    }));

    /* ---- natural: whole cherries drying in the sun ---- */
    stationN = new THREE.Group();
    stationN.position.copy(STATION[0]);
    stationN.add(new THREE.Mesh(slabGeo, slabMat));
    /* the drying bed itself: a fine mesh over the slab */
    var bed = new THREE.Mesh(
      track(new THREE.CircleGeometry(0.27, 40)),
      track(new THREE.MeshStandardMaterial({
        color: 0x6B5335, roughness: 0.95, metalness: 0.0, envMapIntensity: 0.5,
        map: track(makeTex(meshBedCanvas(), true, 5))
      })));
    bed.rotation.x = -Math.PI / 2;
    bed.position.y = 0.0115;
    stationN.add(bed);

    dryCherries = new THREE.InstancedMesh(cherryGeoRef, cherryDryMat(), tier === 'low' ? 18 : 46);
    dryCherries.userData.slots = [];
    var mm = new THREE.Matrix4();
    for (var i = 0; i < dryCherries.count; i++) {
      var a = i * 2.399963, r = Math.sqrt((i + 0.5) / dryCherries.count) * 0.225;
      dryCherries.userData.slots.push({
        p: new THREE.Vector3(Math.cos(a) * r, 0.0115 + 0.026, Math.sin(a) * r),
        e: new THREE.Euler(rr(0, 6.283), rr(0, 6.283), rr(0, 6.283)),
        s: rr(0.023, 0.031)
      });
      dryCherries.setMatrixAt(i, mm.makeScale(0.0001, 0.0001, 0.0001));
    }
    dryCherries.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    dryCherries.frustumCulled = false;
    stationN.add(dryCherries);
    processing.add(stationN);

    /* ---- washed: coffee coming clean under water ---- */
    stationW = new THREE.Group();
    stationW.position.copy(STATION[1]);
    stationW.add(new THREE.Mesh(slabGeo, slabMat));
    waterMat = track(new THREE.MeshPhysicalMaterial({
      color: 0x06090A, roughness: 0.11, metalness: 0.0,
      clearcoat: 1.0, clearcoatRoughness: 0.07, envMapIntensity: 0.72,
      normalMap: track(makeTex(rippleCanvas(), false, 3)),
      normalScale: new THREE.Vector2(0.30, 0.30)
    }));
    var water = new THREE.Mesh(track(new THREE.CircleGeometry(0.268, 48)), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.0165;
    stationW.add(water);

    washedBeans = new THREE.InstancedMesh(beanGeo, parchmentMaterial(), tier === 'low' ? 20 : 44);
    washedBeans.userData.slots = [];
    for (var j = 0; j < washedBeans.count; j++) {
      var aj = j * 2.399963, rj = Math.sqrt((j + 0.5) / washedBeans.count) * 0.215;
      washedBeans.userData.slots.push({
        p: new THREE.Vector3(Math.cos(aj) * rj, 0.016 + BEAN * 0.16, Math.sin(aj) * rj),
        e: new THREE.Euler(1.5708 + rr(-0.3, 0.3), rr(0, 6.283), rr(-0.25, 0.25), 'YXZ'),
        s: rr(0.26, 0.36)
      });
      washedBeans.setMatrixAt(j, mm.makeScale(0.0001, 0.0001, 0.0001));
    }
    washedBeans.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    washedBeans.frustumCulled = false;
    stationW.add(washedBeans);
    processing.add(stationW);

    /* ---- honey: the sticky layer left on the seed ---- */
    stationH = new THREE.Group();
    stationH.position.copy(STATION[2]);
    stationH.add(new THREE.Mesh(slabGeo, slabMat));
    honeyBean = new THREE.Mesh(beanGeo, parchmentMaterial());
    honeyBean.scale.setScalar(0.92);
    honeyBean.position.y = 0.0115 + BEAN * 0.92 * 0.5;
    honeyBean.rotation.set(1.30, 0.6, 0, 'YXZ');
    stationH.add(honeyBean);
    honeyCoat = new THREE.Mesh(beanGeo, track(new THREE.MeshPhysicalMaterial({
      color: 0xC98F33, roughness: 0.14, metalness: 0.0,
      clearcoat: 1.0, clearcoatRoughness: 0.06, envMapIntensity: 1.1,
      transparent: true, opacity: 0.72, depthWrite: false
    })));
    honeyCoat.scale.setScalar(0.92 * 1.06);
    honeyCoat.position.copy(honeyBean.position);
    honeyCoat.rotation.copy(honeyBean.rotation);
    stationH.add(honeyCoat);
    var honeySide = new THREE.InstancedMesh(beanGeo, parchmentMaterial(), 7);
    var hm2 = new THREE.Matrix4(), hq = new THREE.Quaternion(), he = new THREE.Euler();
    var hp = new THREE.Vector3(), hs = new THREE.Vector3();
    for (var hb = 0; hb < 7; hb++) {
      var ha = hb * 2.399963 + 0.9, hr = 0.115 + (hb % 3) * 0.052;
      hp.set(Math.cos(ha) * hr, 0.0115 + BEAN * 0.34 * 0.5, Math.sin(ha) * hr);
      hq.setFromEuler(he.set(1.5708 + rr(-0.25, 0.25), rr(0, 6.283), rr(-0.2, 0.2), 'YXZ'));
      honeySide.setMatrixAt(hb, hm2.compose(hp, hq, hs.setScalar(0.34)));
    }
    honeySide.instanceMatrix.needsUpdate = true;
    honeySide.frustumCulled = false;
    stationH.add(honeySide);
    processing.add(stationH);

    stationN.visible = stationW.visible = stationH.visible = false;

    /* ---- the drying floor the journey converges back onto ---- */
    dryingSlab = new THREE.Mesh(
      track(new THREE.CylinderGeometry(0.30, 0.325, 0.022, 48)),
      slabMat);
    dryingSlab.position.set(0, -0.175, 0);
    dryingSlab.visible = false;
    world.add(dryingSlab);

    /* ---- the parchment husk, in two halves that open ---- */
    parchMat = parchmentMaterial();
    husk = [];
    for (var h = 0; h < 2; h++) {
      var hg = track(deformBean(new THREE.SphereGeometry(
        1, Math.max(10, Math.round(Q.beanSeg / 2)), Math.round(Q.beanSeg * 0.68),
        h * Math.PI, Math.PI)));
      var hm = new THREE.Mesh(hg, parchMat);
      hm.visible = false;
      husk.push(hm);
      seed.add(hm);
    }
  }

  /* a woven drying-bed mesh */
  function meshBedCanvas() {
    var S = 128, c = cv(S, S), x = c.getContext('2d');
    x.fillStyle = '#7d6440'; x.fillRect(0, 0, S, S);
    x.strokeStyle = 'rgba(0,0,0,.42)'; x.lineWidth = 1.4;
    for (var i = 0; i <= 8; i++) {
      var t = (i / 8) * S;
      x.beginPath(); x.moveTo(t, 0); x.lineTo(t, S); x.stroke();
      x.beginPath(); x.moveTo(0, t); x.lineTo(S, t); x.stroke();
    }
    x.strokeStyle = 'rgba(255,255,255,.14)';
    for (var j = 0; j <= 8; j++) {
      var u = (j / 8) * S + 1.6;
      x.beginPath(); x.moveTo(u, 0); x.lineTo(u, S); x.stroke();
    }
    return c;
  }

  /* still water, lightly disturbed */
  function rippleCanvas() {
    var S = 256, c = cv(S, S), x = c.getContext('2d');
    x.fillStyle = '#8080ff'; x.fillRect(0, 0, S, S);
    for (var i = 0; i < 26; i++) {
      var cx = rr(0, S), cy = rr(0, S), r = rr(S * 0.04, S * 0.22);
      var g = x.createRadialGradient(cx, cy, r * 0.55, cx, cy, r);
      g.addColorStop(0, 'rgba(128,128,255,0)');
      g.addColorStop(0.5, 'rgba(150,110,255,.30)');
      g.addColorStop(1, 'rgba(128,128,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, S, S);
    }
    return c;
  }

  function parchmentMaterial() {
    return track(new THREE.MeshStandardMaterial({
      color: 0xA08B66, roughness: 0.92, metalness: 0.0, envMapIntensity: 0.55,
      bumpMap: beanSurface, bumpScale: 0.5, roughnessMap: beanSurface,
      side: THREE.DoubleSide
    }));
  }

  function cherryDryMat() {
    return track(new THREE.MeshPhysicalMaterial({
      color: 0x7E1C10, roughness: 0.52, metalness: 0.0,
      clearcoat: 0.3, clearcoatRoughness: 0.5, envMapIntensity: 0.9
    }));
  }

  /* ------------------------------------------------------------------
     Atmosphere — pollen, roast smoke, the faintest chaff
     ------------------------------------------------------------------ */
  function pointCloud(n, spread, sprite, u, moveGLSL, colorGLSL, blending, size) {
    var pos = new Float32Array(n * 3), sd = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      pos[i * 3] = rr(-spread[0], spread[0]);
      pos[i * 3 + 1] = rr(-spread[1], spread[1]);
      pos[i * 3 + 2] = rr(-spread[2], spread[2]);
      sd[i * 3] = rnd(); sd[i * 3 + 1] = rnd(); sd[i * 3 + 2] = rnd();
    }
    var g = track(new THREE.BufferGeometry());
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(sd, 3));
    var m = track(new THREE.ShaderMaterial({
      uniforms: {
        uT: u.t, uO: u.o, uMap: { value: sprite },
        uSize: { value: size }, uPR: { value: renderer.getPixelRatio() }
      },
      vertexShader: [
        'attribute vec3 aSeed;',
        'uniform float uT; uniform float uSize; uniform float uPR;',
        'varying float vA;',
        moveGLSL,
        'void main(){',
        '  vec3 p = position;',
        '  sbMove(p, aSeed, uT);',
        '  vec4 mv = modelViewMatrix * vec4(p, 1.0);',
        '  gl_PointSize = uSize * uPR * (0.5 + aSeed.x) * (1.0 / max(-mv.z, 0.08));',
        '  gl_Position = projectionMatrix * mv;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform sampler2D uMap; uniform float uO;',
        'varying float vA;',
        colorGLSL,
        'void main(){',
        '  vec4 t = texture2D(uMap, gl_PointCoord);',
        '  float a = t.a * vA * uO;',
        '  if (a < 0.004) discard;',
        '  gl_FragColor = vec4(sbColor(), a);',
        '}'
      ].join('\n'),
      transparent: true, depthWrite: false, blending: blending
    }));
    var pts = new THREE.Points(g, m);
    pts.frustumCulled = false;
    return pts;
  }

  function buildAtmosphere() {
    var soft = track(makeTex(puffCanvas(0.12), true));
    var puff = track(makeTex(puffCanvas(0.55), true));

    dust = pointCloud(Q.dust, [2.4, 1.3, 1.6], soft, uDust, [
      'void sbMove(inout vec3 p, vec3 s, float t){',
      '  p.y += sin(t * (0.07 + s.x * 0.10) + s.y * 6.28) * 0.30 + t * 0.006;',
      '  p.x += sin(t * 0.05 + s.z * 6.28) * 0.22;',
      '  p.z += cos(t * 0.043 + s.x * 6.28) * 0.18;',
      '  vA = 0.25 + 0.75 * (0.5 + 0.5 * sin(t * 0.55 + s.z * 6.28));',
      '}'
    ].join('\n'),
      'vec3 sbColor(){ return vec3(1.0, 0.90, 0.72); }',
      THREE.AdditiveBlending, 26);
    dust.position.set(0.1, 1.05, 0.2);
    world.add(dust);

    smoke = pointCloud(Q.smoke, [0.07, 0.02, 0.07], puff, uSmoke, [
      'void sbMove(inout vec3 p, vec3 s, float t){',
      '  float k = fract(s.y + t * 0.30);',
      '  p.y += k * 0.52;',
      '  p.x += sin(k * 4.0 + s.x * 6.28) * 0.08 * k;',
      '  p.z += cos(k * 3.4 + s.z * 6.28) * 0.08 * k;',
      '  vA = sin(k * 3.14159) * 0.45;',
      '}'
    ].join('\n'),
      'vec3 sbColor(){ return vec3(0.74, 0.68, 0.61); }',
      THREE.NormalBlending, 110);
    smoke.visible = false;
    world.add(smoke);

    sparks = pointCloud(tier === 'low' ? 8 : 22, [0.06, 0.02, 0.06], soft, uSmoke, [
      'void sbMove(inout vec3 p, vec3 s, float t){',
      '  float k = fract(s.z + t * 0.55);',
      '  p.y += k * 0.34;',
      '  p.x += sin(k * 7.0 + s.x * 6.28) * 0.10 * k;',
      '  p.z += cos(k * 6.0 + s.y * 6.28) * 0.10 * k;',
      '  vA = pow(1.0 - k, 2.6);',
      '}'
    ].join('\n'),
      'vec3 sbColor(){ return vec3(1.0, 0.58, 0.18); }',
      THREE.AdditiveBlending, 12);
    sparks.visible = false;
    world.add(sparks);
  }

  /* ---------------------------------------------------------------------
     7.  Camera choreography
     Heavy, deliberate, slow.  Keyframes with cubic easing between them —
     no roller-coaster, no constant motion everywhere.
     --------------------------------------------------------------------- */
  var KEYS = [
    /*  p      cam x,   y,     z      look x,  y,     z     fov  */
    [0.000, 2.55, 1.86, 4.45, 0.12, 1.20, 0.00, 40],   /* the plantation      */
    [0.115, 1.30, 1.44, 2.38, 0.06, 1.04, 0.02, 38],
    [0.190, 0.56, 1.14, 1.20, 0.03, 0.95, 0.04, 33],   /* one cherry          */
    [0.235, 0.30, 1.04, 0.94, 0.02, 0.91, 0.06, 32],
    [0.290, 0.30, 0.56, 1.02, 0.02, 0.44, 0.06, 33],   /* the fall            */
    [0.335, 0.20, 0.26, 1.38, 0.00, 0.10, 0.06, 35],   /* the processing room */
    [0.378, -0.46, 0.60, 1.76, -0.58, -0.02, 0.30, 32], /* natural            */
    [0.452, 0.62, 0.60, 1.76, 0.58, -0.02, 0.30, 32],  /* washed              */
    [0.524, 0.02, 0.42, 1.96, 0.00, -0.28, 0.52, 32],  /* honey               */
    [0.585, 0.05, 0.34, 1.20, 0.00, -0.04, 0.00, 33],  /* drying              */
    [0.665, 0.05, 0.18, 1.06, 0.00, 0.00, 0.00, 32],   /* hulling             */
    [0.735, 0.03, 0.14, 1.02, 0.00, 0.00, 0.00, 32],   /* green coffee        */
    [0.800, 0.00, 0.15, 1.04, 0.00, 0.00, 0.00, 32],   /* the roast           */
    [0.862, 0.00, 0.26, 1.34, 0.00, -0.02, 0.00, 34],  /* the grind           */
    [0.935, 0.00, 0.56, 2.72, 0.00, -0.20, 0.00, 38],  /* the three worlds    */
    [1.000, 0.00, 0.62, 3.14, 0.00, -0.20, 0.00, 38]
  ];

  function driveCamera(p) {
    var i = 0;
    while (i < KEYS.length - 2 && p > KEYS[i + 1][0]) i++;
    var a = KEYS[i], b = KEYS[i + 1];
    var t = easeIO(clamp01((p - a[0]) / (b[0] - a[0])));
    camPos.set(lerp(a[1], b[1], t), lerp(a[2], b[2], t), lerp(a[3], b[3], t));
    camLook.set(lerp(a[4], b[4], t), lerp(a[5], b[5], t), lerp(a[6], b[6], t));
    var fov = lerp(a[7], b[7], t);

    /* a portrait viewport needs more room for the same composition */
    if (camera.aspect < 1) {
      var k = (1 - camera.aspect) * 0.95;
      camPos.sub(camLook).multiplyScalar(1 + k * 0.34).add(camLook);
      fov += k * 6;
    }
    /* a very small damped drift, so the frame breathes without being busy */
    camPos.x += Math.sin(clock * 0.14) * 0.012;
    camPos.y += Math.sin(clock * 0.108 + 1.1) * 0.009;

    camera.position.copy(camPos);
    camera.lookAt(camLook);
    if (Math.abs(camera.fov - fov) > 0.002) { camera.fov = fov; camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();
  }

  /* ---------------------------------------------------------------------
     8.  The journey

     Tree → cherry → harvest → the three processing methods → drying →
     hulling → green coffee → roast → grind → three products.  Every value
     below is a pure function of `p`, which is what makes scrolling
     backwards rewind the film rather than approximate it.
     --------------------------------------------------------------------- */
  var vTmp = new THREE.Vector3(), vSlot = new THREE.Vector3(), vBase = new THREE.Vector3();
  var mTmp = new THREE.Matrix4(), qTmp = new THREE.Quaternion(), eTmp = new THREE.Euler(), sTmp = new THREE.Vector3();
  var slotTarget = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  var slotScale = [1, 1, 1];
  var vesselPos = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  var vesselScale = [1, 1, 1];
  var seed0 = new THREE.Euler();
  var tmpCol = new THREE.Color();

  /* chapter boundaries, in one place, so the copy and the pictures agree */
  var CH = {
    origin: [0.000, 0.115],
    harvest: [0.115, 0.235],
    fall: [0.235, 0.335],
    natural: [0.335, 0.412],
    washed: [0.412, 0.488],
    honey: [0.488, 0.560],
    drying: [0.560, 0.645],
    hulling: [0.645, 0.735],
    roast: [0.735, 0.802],
    grind: [0.802, 0.872],
    worlds: [0.855, 1.000]
  };
  /* note in-start, fully-in, out-end */
  var NOTE_T = [
    [0.072, 0.100, 0.150],
    [0.168, 0.198, 0.248],
    [0.258, 0.286, 0.332],
    [0.342, 0.370, 0.408],
    [0.418, 0.446, 0.484],
    [0.494, 0.522, 0.556],
    [0.572, 0.598, 0.641],
    [0.658, 0.684, 0.731],
    [0.748, 0.772, 0.798],
    [0.814, 0.838, 0.868]
  ];
  var STAGE_T = [
    [0.000, 0.115], [0.115, 0.235], [0.235, 0.560],
    [0.560, 0.645], [0.645, 0.735], [0.735, 0.802], [0.802, 0.875]
  ];

  function setOp(el, v) { if (el) el.style.opacity = v.toFixed(3); }
  function win(p, c) { return seg(p, c[0], c[1]); }

  function apply(p) {
    var toDark = seg(p, 0.250, 0.345);
    /* the journey settles in the room it was shot in, not on paper */
    var toPaper = seg(p, 0.905, 0.985);   /* now a deepening, not a lightening */
    var fade = 1 - smooth(seg(p, 0.930, 0.985));          /* the 3D bows out         */
    var alive = fade > 0.004;

    /* ---------- environment: the photographic half ------------------- */
    if (bgPlant) {
      var push = seg(p, 0, 0.34);
      var blur = lerp(0, 22, seg(p, 0.002, 0.060)) + lerp(0, 7, seg(p, 0.22, 0.34));
      bgPlant.style.transform = 'scale(' + (1.04 + push * 0.16).toFixed(4) +
        ') translate3d(0,' + (push * -3.5).toFixed(2) + '%,0)';
      bgPlant.style.filter = 'blur(' + blur.toFixed(1) + 'px) saturate(' + (1 - toDark * 0.55).toFixed(3) + ')';
      setOp(bgPlant, 1 - toDark * 0.96);
    }
    if (bgHills) {
      var hIn = seg(p, 0.02, 0.12), hOut = seg(p, 0.12, 0.26);
      setOp(bgHills, hIn * (1 - hOut) * 0.55);
      bgHills.style.filter = 'blur(' + (10 + hIn * 14).toFixed(1) + 'px)';
      bgHills.style.transform = 'scale(' + (1.10 + hIn * 0.08).toFixed(3) + ')';
    }
    setOp(bgStudio, toDark * (1 - toPaper));
    setOp(bgPaper, toPaper);
    setOp(veilEl, (1 - toPaper) * lerp(1, 0.58, toDark));

    /* ---------- typography ------------------------------------------- */
    if (heroCopy) {
      var ho = 1 - seg(p, 0.028, 0.078);
      heroCopy.style.opacity = ho.toFixed(3);
      heroCopy.style.transform = 'translate3d(0,' + (seg(p, 0.010, 0.078) * -46).toFixed(1) + 'px,0)';
      heroCopy.style.visibility = ho < 0.01 ? 'hidden' : 'visible';
      heroCopy.inert = ho < 0.1;
    }
    for (var n = 0; n < noteEls.length && n < NOTE_T.length; n++) {
      noteAt(n, p, NOTE_T[n][0], NOTE_T[n][1], NOTE_T[n][2]);
    }
    drawRail(p);

    /* ---------- lighting --------------------------------------------- */
    hemi.intensity = lerp(0.55, 0.18, toDark);
    keyLight.intensity = lerp(3.1, 1.35, toDark);
    keyLight.color.setHSL(lerp(0.098, 0.088, toDark), lerp(0.62, 0.26, toDark), lerp(0.76, 0.86, toDark));
    rimLight.intensity = lerp(0.9, 0.0, toDark);
    fillLight.intensity = lerp(0.0, 1.35, toDark) * (1 - toPaper * 0.35);
    renderer.toneMappingExposure = lerp(1.06, 0.96, toDark) - toPaper * 0.06;

    var wantStudio = p > 0.30;
    if (wantStudio !== (scene.environment === envStudio)) {
      scene.environment = wantStudio ? envStudio : envPlantation;
    }

    /* ---------- chapters 1-2: the branch, the hero cherry ------------ */
    uWind.value = clock;
    var canopyOut = seg(p, 0.225, 0.330);
    uLeafFade.value = 1 - canopyOut;
    for (var cf = 0; cf < canopyFade.length; cf++) canopyFade[cf].opacity = uLeafFade.value;
    branchGrp.visible = false; // The supplied photograph owns the branch; never overlay a second canopy.

    uDust.t.value = clock;
    uDust.o.value = (1 - seg(p, 0.250, 0.360)) * 0.42;
    dust.visible = uDust.o.value > 0.01;

    var release = seg(p, 0.222, 0.262);
    heroStem.visible = false; // The photographed stem stays attached until the photographic handoff.
    heroStem.rotation.z = -release * 0.55;
    heroStem.position.y = -release * 0.02;

    /* ---------- chapter 3: the fall into the processing room --------- */
    var fall = win(p, CH.fall);
    var fy = lerp(CHERRY_Y, 0.10, easeIn(fall) * 0.82 + easeOut(fall) * 0.18);
    var fx = 0.02 + Math.sin(fall * 2.1) * 0.030;
    var fz = 0.06 - fall * 0.01;
    heroCherry.position.set(fx, fy, fz);
    heroCherry.rotation.set(fall * 2.10, fall * 2.90, fall * 0.72);
    heroCherry.scale.setScalar(CHERRY_R);

    /* the cherry hangs in the processing room while the three methods are
       shown around it, then gives up its seed */
    var hold = seg(p, 0.335, 0.560);
    if (hold > 0) {
      heroCherry.position.set(0, lerp(0.10, 0.40, smooth(hold * 3)), lerp(0.02, -0.34, smooth(hold * 3)));
      heroCherry.rotation.set(0.18, 2.10 + hold * 1.4, 0.06);
      heroCherry.scale.setScalar(CHERRY_R * lerp(1, 0.72, smooth(hold * 3)));
    }
    var skin = seg(p, 0.545, 0.612);           /* the fruit comes away     */
    uDissolve.value = clamp01(skin * 1.08);
    heroCherry.visible = uDissolve.value < 0.99 && alive && p < 0.62;

    /* ---------- chapter 4: natural, washed, honey -------------------- */
    var nat = win(p, CH.natural), wash = win(p, CH.washed), hon = win(p, CH.honey);
    var natIn = seg(p, 0.330, 0.372) * (1 - seg(p, 0.545, 0.585));
    var washIn = seg(p, 0.404, 0.448) * (1 - seg(p, 0.545, 0.585));
    var honIn = seg(p, 0.480, 0.524) * (1 - seg(p, 0.556, 0.592));

    stationN.visible = natIn > 0.004 && alive;
    stationW.visible = washIn > 0.004 && alive;
    stationH.visible = honIn > 0.004 && alive;

    if (stationN.visible) {
      stationN.scale.setScalar(lerp(0.75, 1, smooth(natIn)));
      /* whole cherries darken and shrink as they dry in the sun */
      var dryT = smooth(nat);
      var slotsN = dryCherries.userData.slots;
      for (var i = 0; i < slotsN.length; i++) {
        var sN = slotsN[i];
        var appear = smooth(clamp01((natIn - (i / slotsN.length) * 0.5) / 0.5));
        var shrink = 1 - dryT * 0.24;
        sTmp.setScalar(Math.max(0.0001, sN.s * appear * shrink));
        vTmp.copy(sN.p); vTmp.y = sN.p.y * (1 - dryT * 0.2) + (1 - appear) * 0.30;
        qTmp.setFromEuler(eTmp.set(sN.e.x, sN.e.y + dryT * 0.7, sN.e.z));
        dryCherries.setMatrixAt(i, mTmp.compose(vTmp, qTmp, sTmp));
      }
      dryCherries.instanceMatrix.needsUpdate = true;
      dryCherries.material.color.setHSL(lerp(0.008, 0.032, dryT), lerp(0.88, 0.62, dryT), lerp(0.24, 0.085, dryT));
      dryCherries.material.roughness = lerp(0.36, 0.74, dryT);
    }

    if (stationW.visible) {
      stationW.scale.setScalar(lerp(0.75, 1, smooth(washIn)));
      waterMat.normalMap.offset.set(clock * 0.012, clock * 0.017);
      var slotsW = washedBeans.userData.slots;
      for (var j = 0; j < slotsW.length; j++) {
        var sW = slotsW[j];
        var ap = smooth(clamp01((washIn - (j / slotsW.length) * 0.5) / 0.5));
        sTmp.setScalar(Math.max(0.0001, sW.s * ap));
        vTmp.copy(sW.p); vTmp.y += (1 - ap) * 0.26;
        qTmp.setFromEuler(eTmp.set(sW.e.x, sW.e.y + (1 - ap) * 1.6 + wash * 0.5, sW.e.z, 'YXZ'));
        washedBeans.setMatrixAt(j, mTmp.compose(vTmp, qTmp, sTmp));
      }
      washedBeans.instanceMatrix.needsUpdate = true;
      /* the coffee comes out of the water clean */
      washedBeans.material.color.setHSL(0.098, lerp(0.26, 0.17, wash), lerp(0.24, 0.40, wash));
      washedBeans.material.roughness = lerp(0.42, 0.88, wash);
    }

    if (stationH.visible) {
      stationH.scale.setScalar(lerp(0.75, 1, smooth(honIn)));
      honeyBean.rotation.y = 0.6 + hon * 1.9;
      honeyCoat.rotation.y = honeyBean.rotation.y;
      /* the sticky layer thins but never quite leaves */
      honeyCoat.material.opacity = lerp(0.66, 0.40, hon);
      honeyCoat.scale.setScalar(0.92 * lerp(1.09, 1.035, hon));
    }

    /* ---------- chapter 5: drying ------------------------------------ */
    var dry = win(p, CH.drying);
    var dryIn = seg(p, 0.548, 0.596);
    dryingSlab.visible = dryIn > 0.004 && p < 0.760 && alive;
    dryingSlab.scale.setScalar(lerp(0.6, 1, smooth(dryIn)));

    /* ---------- chapter 6: hulling, and the green coffee beneath ----- */
    var hull = win(p, CH.hulling);
    var huskOn = seg(p, 0.556, 0.640);
    var huskOpen = smooth(seg(p, 0.655, 0.726));
    for (var h = 0; h < 2; h++) {
      var hm = husk[h], dir = h === 0 ? 1 : -1;
      hm.visible = huskOn > 0.01 && huskOpen < 0.995 && alive;
      hm.scale.setScalar(1.16 + huskOpen * 0.10);
      /* the two halves hinge apart and fall away from the seed inside */
      hm.position.set(dir * huskOpen * 2.6, -huskOpen * huskOpen * 2.2, huskOpen * 0.4);
      hm.rotation.set(0, 0, dir * huskOpen * 1.35);
    }

    /* the seed itself: present from the moment the fruit comes away */
    var seedOn = seg(p, 0.556, 0.606);
    seed.visible = seedOn > 0.01 && alive;
    /* the bean we have followed since the tree is the coffee being ground */
    var consumed = smooth(seg(p, 0.806, 0.858));
    var seedScale = SEAT * lerp(0.42, 1.0, smooth(seedOn)) * (1 - consumed * 0.94);
    if (consumed > 0.985) seed.visible = false;
    seed.position.set(0, lerp(0.10, 0.0, smooth(seg(p, 0.556, 0.640))), 0.01);
    seed.scale.setScalar(seedScale);
    /* the flat, creased face stays towards the camera: it is what makes a
       coffee bean read as a coffee bean */
    seed.rotation.set(0.20, Math.PI + 0.12 + p * 0.34, 0.06, 'YXZ');

    /* ---------- chapter 7: the roast --------------------------------- */
    var roast = win(p, CH.roast);
    uRoast.C.value = roast;
    roastLight.position.set(seed.position.x - 0.34, seed.position.y + 0.22, 0.42);
    roastLight.intensity = bell(roast, 0.52, 0.28) * 0.85 * (1 - toPaper) * (1 - win(p, CH.grind));
    var smokeOn = bell(roast, 0.58, 0.32);
    uSmoke.t.value = clock;
    uSmoke.o.value = smokeOn * 0.32 * (1 - toPaper);
    smoke.visible = uSmoke.o.value > 0.01 && alive;
    smoke.position.set(seed.position.x, seed.position.y, 0);
    sparks.visible = smoke.visible && tier !== 'low';
    sparks.position.copy(smoke.position);

    /* ---------- chapter 8: the grind --------------------------------- */
    var grind = win(p, CH.grind);
    uGrind.value = smooth(grind);
    uRoast.R.value = 1;
    uRoast.L.value = 0;

    /* ---------- chapter 9: the three worlds recompose ---------------- */
    var rec = smooth(seg(p, 0.855, 0.938));          /* recomposition      */
    var hand = smooth(seg(p, 0.888, 0.944));         /* alignment to DOM   */
    if (hand > 0.0005) measureCards();

    for (var v = 0; v < 3; v++) {
      pathSlot(v, vSlot);
      /* the grind happened centre stage inside the filter vessel; the other
         two rise into place beside it */
      var from = v === 2 ? vTmp.set(0, -0.10, 0) : vTmp.set(vSlot.x * 0.35, vSlot.y - 0.30, 0);
      vesselPos[v].set(lerp(from.x, vSlot.x, rec), lerp(from.y, vSlot.y, rec), 0);
      vesselScale[v] = lerp(v === 2 ? 1 : 0.5, layout.base, rec);
      if (hand > 0.0005) {
        var sc2 = lerp(vesselScale[v], slotScale[v], hand);
        vessels[v].position.set(
          lerp(vesselPos[v].x, slotTarget[v].x, hand),
          lerp(vesselPos[v].y, slotTarget[v].y - VESSEL_R * RIM_Y * sc2, hand),
          lerp(0, slotTarget[v].z, hand));
        vessels[v].scale.setScalar(sc2);
      } else {
        vessels[v].position.copy(vesselPos[v]);
        vessels[v].scale.setScalar(vesselScale[v]);
      }
      /* the vessels themselves only appear once the journey is over */
      var show = v === 2 ? seg(p, 0.868, 0.918) : seg(p, 0.858, 0.912);
      vessels[v].visible = (v === 2 ? uGrind.value > 0.01 : show > 0.004) && alive;
      shadowMats[v].opacity = show * 0.50;
    }
    for (var vs = 0; vs < 3; vs++) {
      var on = seg(p, vs === 2 ? 0.868 : 0.858, vs === 2 ? 0.918 : 0.912) > 0.01;
      vessels[vs].userData.shell[0].visible = on;
      vessels[vs].userData.shell[1].visible = on;
    }

    /* The journey is over.  Its three outcomes present themselves: a green
       bean on the left, the roasted bean in the centre, the grounds it was
       just turned into on the right.  Each rises into its own vessel. */
    var settle = smooth(seg(p, 0.868, 0.940));
    var vC = vessels[1], vL = vessels[0];
    if (settle > 0.004) {
      seed.visible = alive;
      seed.position.set(
        vC.position.x,
        vC.position.y + SEAT_Y * vC.scale.x + (1 - settle) * 0.34,
        vC.position.z);
      seed.rotation.set(1.30, Math.PI + 0.55, 0, 'YXZ');
      seed.scale.setScalar(SEAT * 0.50 * vC.scale.x * settle);

      beanL.visible = alive;
      beanL.position.set(
        vL.position.x,
        vL.position.y + SEAT_Y * vL.scale.x + (1 - settle) * 0.40,
        vL.position.z);
      beanL.rotation.set(1.30, Math.PI + 0.20, 0, 'YXZ');
      beanL.scale.setScalar(SEAT * 0.50 * vL.scale.x * settle);
    } else {
      beanL.visible = false;
    }
    beanR.visible = false;

    var fill = seg(p, 0.880, 0.945);
    greenPile.visible = fill > 0.01 && alive;
    if (greenPile.visible) fillHeap(greenPile, fill);
    roastPile.visible = fill > 0.01 && alive;
    if (roastPile.visible) fillHeap(roastPile, fill);
    var spillOn = seg(p, 0.878, 0.906) > 0.4 && p < 0.912 && alive;
    for (var sp3 = 0; sp3 < 3; sp3++) {
      spills[sp3].visible = spillOn;
      spills[sp3].userData.shadow.visible = spillOn;
    }

    grindMat.opacity = clamp01(grind * 9);
    grinds.visible = grindMat.opacity > 0.006 && alive;
    moundMat.opacity = smooth(seg(p, 0.828, 0.880));
    mound.visible = moundMat.opacity > 0.006 && alive;

    /* ---------- the crossfade into the real catalogue ---------------- */
    var showCards = seg(p, 0.900, 0.962);
    setOp(pathsEl, showCards);
    if (pathsEl) {
      pathsEl.style.pointerEvents = showCards > 0.9 ? 'auto' : 'none';
      pathsEl.inert = showCards <= 0.9;
    }
    if (pathsHead) {
      var hh = seg(p, 0.906, 0.948);
      pathsHead.style.opacity = hh.toFixed(3);
      pathsHead.style.transform = 'translate3d(0,' + ((1 - hh) * 18).toFixed(1) + 'px,0)';
    }
    for (var c = 0; c < cardEls.length; c++) {
      var img = cardEls[c].querySelector('img');
      var body = cardEls[c].querySelector('.sb-card__body');
      var ci = smooth(seg(p, 0.920, 0.985));
      if (img) img.style.opacity = ci.toFixed(3);
      var scrim = cardEls[c].querySelector('.sb-card__scrim');
      if (scrim) scrim.style.opacity = ci.toFixed(3);
      if (body) {
        var bi = clamp01((seg(p, 0.962, 1.0) - c * 0.02) / 0.94);
        body.style.opacity = bi.toFixed(3);
        body.style.transform = 'translate3d(0,' + ((1 - bi) * 16).toFixed(1) + 'px,0)';
      }
    }

    // The still photograph is the opening frame; scrolling reveals the live scene.
    if (p < 0.225 && bgPlant) {
      // Source-image coordinates of the single hanging cherry (not a cluster).
      // Both photo and mesh use this same cover-crop transform at every viewport.
      var sw = stage.clientWidth, sh = stage.clientHeight;
      var cover = Math.max(sw / 1672, sh / 941);
      var ax = (sw - 1672 * cover) * 0.5 + 968 * cover;
      var ay = (sh - 941 * cover) * 0.5 + 236 * cover;
      var zoomT = smooth(seg(p, 0, 0.12));
      var zoom = lerp(1, 2.6, zoomT);
      var cx = lerp(ax, sw * 0.5, zoomT), cy = lerp(ay, sh * 0.48, zoomT);
      bgPlant.style.transformOrigin = '0 0';
      bgPlant.style.transform = 'translate(' + (cx - ax * zoom) + 'px,' + (cy - ay * zoom) + 'px) scale(' + zoom + ')';
      bgPlant.style.filter = 'none';
      var handoff = smooth(seg(p, 0.065, 0.12));
      setOp(bgPlant, 1 - handoff);
      setOp(bgHills, 0);
      setOp(bgStudio, handoff);
      var natural = heroCherry.position.clone();
      var depth = natural.clone().project(camera).z;
      var aligned = new THREE.Vector3(cx / sw * 2 - 1, 1 - cy / sh * 2, depth).unproject(camera);
      var distance = aligned.clone().applyMatrix4(camera.matrixWorldInverse).z;
      var radius = 19 * cover * zoom * (2 * Math.abs(distance) * Math.tan(camera.fov * Math.PI / 360)) / sh;
      var join = smooth(seg(p, 0.12, 0.22));
      heroCherry.position.copy(aligned).lerp(natural, join);
      heroCherry.scale.setScalar(lerp(radius, CHERRY_R, join));
      dust.visible = false;
      canvas.style.opacity = (fade * handoff).toFixed(3);
    } else {
      canvas.style.opacity = fade.toFixed(3);
      if (bgPlant) setOp(bgPlant, 0);
    }
    world.visible = alive;
  }

  function noteAt(i, p, a, b, c) {
    var el = noteEls[i]; if (!el) return;
    var inn = smooth(seg(p, a, b));
    var out = smooth(seg(p, c - (c - b) * 0.42, c));
    var v = inn * (1 - out);
    el.style.opacity = v.toFixed(3);
    el.style.transform = 'translateY(' + ((1 - inn) * 18 - out * 14).toFixed(1) + 'px)';
  }

  function drawRail(p) {
    if (!railSteps.length) return;
    setOp(railEl, seg(p, 0.05, 0.12) * (1 - seg(p, 0.878, 0.920)));
    for (var i = 0; i < railSteps.length; i++) {
      var a = STAGE_T[i][0], b = STAGE_T[i][1];
      var t = clamp01((p - a) / (b - a));
      railSteps[i].bar.style.width = (t * 100).toFixed(1) + '%';
      var now = p >= a && p < b;
      railSteps[i].el.classList.toggle('is-now', now);
      railSteps[i].el.classList.toggle('is-done', p >= b);
    }
  }

  /* ---------------------------------------------------------------------
     9.  3D → DOM alignment
     The vessels do not guess where the cards are.  A ray is cast through
     the centre of each real <img> box and intersected with the pedestal
     plane, so for a few hundred milliseconds the WebGL composition and the
     HTML composition are the same picture and the seam disappears.
     --------------------------------------------------------------------- */
  var rayV = new THREE.Vector3();
  var edgeA = new THREE.Vector3(), edgeB = new THREE.Vector3();
  /* Existing vessel alignment anchors; the final reveal now dissolves into
     the real product photographs. Original geometry reference: measured off the
     artwork itself: 84.5% of the frame's width, its rim centred 38.8% down.
     The live vessel is matched to exactly this, so during the hand-off the
     two are the same object in the same place. */
  var ART_FILL = 0.93, ART_ANCHOR_Y = 0.465, RIM_Y = 0.320;
  function measureCards() {
    if (cardEls.length < 3) return;
    var rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    for (var i = 0; i < 3; i++) {
      var card = document.querySelector('.sb-card[data-cat="' + ['green', 'roasted', 'filter'][i] + '"]');
      var box = card && card.querySelector('.sb-card__img');
      if (!box) continue;
      var r = box.getBoundingClientRect();
      unprojectToPlane((r.left + r.width / 2 - rect.left) / rect.width,
        (r.top + r.height * ART_ANCHOR_Y - rect.top) / rect.height, slotTarget[i]);
      /* The vessel has to read exactly as wide as the bowl in the artwork,
         or the crossfade will pop.  `edgeA`/`edgeB` must not alias the
         scratch vector the unprojection itself uses. */
      unprojectToPlane((r.left - rect.left) / rect.width, 0.5, edgeA);
      unprojectToPlane((r.right - rect.left) / rect.width, 0.5, edgeB);
      slotScale[i] = clamp(Math.abs(edgeB.x - edgeA.x) * ART_FILL / (VESSEL_R * 2), 0.10, 2.6);
    }
  }
  /* screen (0..1, 0..1 from top-left) → the world point on z = 0 */
  function unprojectToPlane(sx, sy, out) {
    rayV.set(sx * 2 - 1, -(sy * 2 - 1), 0.5).unproject(camera).sub(camera.position);
    var dz = rayV.z;
    var t = Math.abs(dz) < 1e-6 ? 0 : (0 - camera.position.z) / dz;
    return out.copy(camera.position).addScaledVector(rayV, t);
  }

  /* ---------------------------------------------------------------------
     10.  Scroll wiring — Lenis drives, ScrollTrigger reports, we render
     --------------------------------------------------------------------- */
  var pTarget = 0, pNow = 0, running = true, onScreen = true, lastT = 0;

  function wireScroll() {
    var storyEnd = parseFloat(getComputedStyle(root).getPropertyValue('--sb-story')) || 0.86;
    scope.own(ScrollTrigger.create({
      trigger: '#sb-origin',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: function (self) { pTarget = clamp01(self.progress / storyEnd); }
    }));

    /* render only while the stage is actually on screen */
    scope.own(new IntersectionObserver(function (es) { onScreen = es[0].isIntersecting; },
      { rootMargin: '15% 0px' })).observe(document.getElementById('sb-origin'));

    scope.tick(frame);
    scope.listen(window, 'resize', onResize, { passive: true });
    scope.listen(window, 'orientationchange', onResize, { passive: true });
  }

  function frame(time) {
    if (!running) return;
    var dt = lastT ? Math.min(0.05, time - lastT) : 0.016;
    lastT = time;
    clock = pNow * 60;
    /* weight: the camera follows scroll with mass rather than snapping */
    pNow += (pTarget - pNow) * Math.min(1, dt * 7.5);
    if (!onScreen || document.hidden || (Math.abs(pTarget - pNow) < 0.00001 && !needsFrame)) return;
    needsFrame = false;
    driveCamera(pNow);
    apply(pNow);
    renderer.render(scene, camera);
  }

  /* ---------------------------------------------------------------------
     11.  Layout
     --------------------------------------------------------------------- */
  function resize() {
    var w = stage.clientWidth || innerWidth;
    var h = stage.clientHeight || innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, Q.dpr));
    renderer.setSize(w, h, false);

    layout.vertical = camera.aspect < 0.95;
    if (layout.vertical) {
      layout.x = 0; layout.y = 0.00; layout.gapY = 0.46; layout.base = 0.38;
    } else {
      layout.y = -0.30; layout.x = clamp(0.70 * camera.aspect, 0.86, 1.28); layout.base = 1;
    }
    /* the prologue is shorter on a phone: the same story, less scrolling */
    root.style.setProperty('--sb-track', (innerWidth < 760 ? 520 : 760) + 'vh');
    measureCards();
    needsFrame = true;
  }

  var rzT, needsFrame = true;
  function onResize() {
    clearTimeout(rzT);
    rzT = setTimeout(function () { resize(); ScrollTrigger.refresh(); }, 140);
  }

  /* ---------------------------------------------------------------------
     12.  The real product links — index.html owns the catalogue
     --------------------------------------------------------------------- */
  function wireLinks() {
    measureCards();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { if (disposed) return; resize(); ScrollTrigger.refresh(); });
    }
  }

  /* ---------------------------------------------------------------------
     13.  Lifecycle — never burn a battery in a background tab
     --------------------------------------------------------------------- */
  function wireLifecycle() {
    scope.listen(document, 'visibilitychange', function () {
      running = !document.hidden; lastT = 0; needsFrame = true;
    });
    scope.listen(canvas, 'webglcontextlost', function (e) {
      e.preventDefault(); dispose();
    });
  }

  function resetDrivenStyles() {
    if (heroCopy) heroCopy.inert = false;
    if (pathsEl) pathsEl.inert = false;
    [bgPlant, bgHills, bgStudio, bgPaper, veilEl, heroCopy, pathsEl, pathsHead, railEl]
      .forEach(function (el) { if (el) el.removeAttribute('style'); });
    noteEls.concat(cardEls).forEach(function (el) { el.removeAttribute('style'); });
    cardEls.forEach(function (a) {
      ['img', '.sb-card__body', '.sb-card__scrim'].forEach(function (sel) {
        var n = a.querySelector(sel); if (n) n.removeAttribute('style');
      });
    });
      }

  function dispose() {
    if (disposed) return;
    disposed = true; running = false;
    clearTimeout(rzT);
    scope.dispose(scene, renderer, disposables);
    if (pmrem) pmrem.dispose();
    resetDrivenStyles();
    canvas.removeAttribute('style');
    canvas.replaceWith(canvas.cloneNode(false));
    root.classList.remove('sb-on');
    root.style.removeProperty('--sb-track');
    if (loaderEl) loaderEl.classList.add('is-done');
    delete window.sbCaptureCategoryArt;
    delete window.sbOriginDispose;
    ScrollTrigger.refresh();
  }

  /* ---------------------------------------------------------------------
     13b.  Category artwork, rendered from this very scene
     The three category images are not stock photography and not generated
     in isolation: they are frames of the same film, shot from the same
     lights, with the same beans and the same grade.  `tools/render-art.html`
     drives this to produce the files in assets/.  It costs nothing until
     it is called.
     --------------------------------------------------------------------- */
  window.sbCaptureCategoryArt = function (index, W, H) {
    var prevAspect = camera.aspect, prevFov = camera.fov;
    var prevPos = camera.position.clone(), prevQ = camera.quaternion.clone();

    /* freeze the scene at the moment every transformation has completed */
    apply(0.930);
    uRoast.C.value = 1.0; uRoast.R.value = 1.0; uRoast.L.value = 0.0;
    uGrind.value = 1.0; uSmoke.o.value = 0; uDust.o.value = 0;
    smoke.visible = sparks.visible = dust.visible = false;
    branchGrp.visible = false; heroCherry.visible = false; heroStem.visible = false;
    roastLight.intensity = index === 1 ? 0.45 : 0.0;
    /* the shot's own lighting: warm key high left, cool rim behind right,
       low warm bounce — identical for all three frames */
    hemi.intensity = 0.16;
    keyLight.color.set(0xFFE8C6); keyLight.intensity = 2.25;
    keyLight.position.set(-2.4, 3.6, 2.0);
    fillLight.color.set(0x9EB6D8); fillLight.intensity = 1.05;
    fillLight.position.set(2.8, 1.1, -2.2);
    rimLight.color.set(0xC79A55); rimLight.intensity = 0.95;
    rimLight.position.set(0.4, -0.6, 3.0);
    renderer.toneMappingExposure = 0.88;
    scene.environment = envStudio;
    world.visible = true;
    grinds.visible = mound.visible = (index === 2);
    greenPile.visible = (index === 0);
    roastPile.visible = (index === 1);
    if (index === 0) fillHeap(greenPile, 1);
    if (index === 1) fillHeap(roastPile, 1);
    for (var sp4 = 0; sp4 < 3; sp4++) { spills[sp4].visible = (sp4 === index); spills[sp4].userData.shadow.visible = (sp4 === index); }
    grindMat.opacity = 1; moundMat.opacity = 1;
    for (var cf2 = 0; cf2 < canopyFade.length; cf2++) canopyFade[cf2].opacity = 1;
    for (var v = 0; v < 3; v++) {
      vessels[v].visible = (v === index);
      shadowMats[v].opacity = 0.38;
    }
    beanL.visible = index === 0;
    seed.visible = index === 1 || index === 2;
    beanR.visible = false;
    husk[0].visible = husk[1].visible = false;
    stationN.visible = stationW.visible = stationH.visible = false;
    dryingSlab.visible = false;

    /* Put the subject back on its studio pedestal, whatever the page's
       current scroll position had done with it, so the shot is the same
       every time it is taken. */
    var sc = layout.base;
    for (var k = 0; k < 3; k++) {
      pathSlot(k, vTmp);
      vessels[k].position.copy(vTmp);
      vessels[k].scale.setScalar(sc);
    }
    var c = vessels[index].position;
    var seatedY = c.y + SEAT_Y * sc;
    beanL.position.set(c.x - 0.02 * sc, seatedY, 0.03 * sc);
    beanL.rotation.set(1.30, Math.PI + 0.20, 0.0, 'YXZ');
    beanL.scale.setScalar(SEAT * 0.50 * sc);
    seed.position.set(c.x - 0.02 * sc,
      index === 2 ? c.y + (VESSEL_R * FLOOR + MOUND_R * 0.50 + SEAT * 0.5 * BEAN * 0.47) * sc : seatedY,
      (index === 2 ? 0.10 : 0.03) * sc);
    seed.rotation.set(1.30, Math.PI + 0.55, 0.0, 'YXZ');
    seed.scale.setScalar(SEAT * (index === 2 ? 0.40 : 0.50) * sc);
    beanC.scale.setScalar(1);

    /* One camera language for all three: same height, same angle, same lens.
       Close enough that the subject owns the frame. */
    camera.aspect = W / H;
    camera.fov = 34;
    camera.position.set(c.x, c.y + 0.92 * sc, c.z + 2.10 * sc);
    camera.lookAt(c.x, c.y - 0.05 * sc, c.z);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    /* Render straight to the drawing buffer at full size and copy it out in
       the same task, while it is still valid.  Simpler and more faithful
       than a render target: identical code path to what visitors see. */
    canvas.style.opacity = '1';
    var prevPR = renderer.getPixelRatio();
    var prevSize = new THREE.Vector2(); renderer.getSize(prevSize);
    renderer.setPixelRatio(1);
    renderer.setSize(W, H, false);
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(scene, camera);

    /* composite over the same studio ground the page itself uses */
    var out = document.createElement('canvas');
    out.width = W; out.height = H;
    var g = out.getContext('2d');
    var rg = g.createRadialGradient(W * 0.5, H * 0.40, 0, W * 0.5, H * 0.40, H * 0.78);
    rg.addColorStop(0, '#241811'); rg.addColorStop(0.58, '#150E09'); rg.addColorStop(1, '#090604');
    g.fillStyle = rg; g.fillRect(0, 0, W, H);
    g.drawImage(renderer.domElement, 0, 0, W, H);

    /* a restrained vignette, matching the page's own veil */
    var vg = g.createRadialGradient(W * 0.5, H * 0.46, H * 0.22, W * 0.5, H * 0.46, H * 0.80);
    vg.addColorStop(0, 'rgba(9,6,4,0)'); vg.addColorStop(1, 'rgba(9,6,4,0.62)');
    g.fillStyle = vg; g.fillRect(0, 0, W, H);

    /* put the page back exactly as it was */
    renderer.setPixelRatio(prevPR);
    renderer.setSize(prevSize.x, prevSize.y, false);
    keyLight.position.set(3.1, 4.4, 2.2);
    fillLight.color.set(0xBFD2E8); fillLight.position.set(-2.2, 1.6, 2.6);
    rimLight.color.set(0xA8C07E); rimLight.position.set(-2.6, 1.1, -2.4);
    camera.aspect = prevAspect; camera.fov = prevFov;
    camera.position.copy(prevPos); camera.quaternion.copy(prevQ);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    lastT = 0;
    return out;
  };

  window.sbOriginDispose = dispose;

  /* ---------------------------------------------------------------------
     14.  Go.  Every declaration above has run by this point, which is why
     the call lives at the bottom.
     --------------------------------------------------------------------- */
  try {
    build();
    return { dispose, get scene() { return scene; }, get renderer() { return renderer; } };
  } catch (err) {
    document.dispatchEvent(new CustomEvent('sb:visual-error', { detail: err.message }));
    root.classList.remove('sb-on');
    if (loaderEl) loaderEl.classList.add('is-done');
    try { dispose(); } catch (e2) { }
  }
}
