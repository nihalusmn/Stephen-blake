import * as THREE from 'three';
// Preserve the original deterministic geometry and textures in an isolated factory.
export function createSceneAssets() {
  var clamp01 = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x; };
  var clamp = function (x, a, b) { return x < a ? a : x > b ? b : x; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var seg = function (p, a, b) { return clamp01((p - a) / (b - a)); };
  var smooth = function (t) { return t * t * (3 - 2 * t); };
  var easeIO = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var easeIn = function (t) { return t * t; };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var bell = function (x, c, w) { return Math.exp(-Math.pow((x - c) / w, 2)); };

  /* Deterministic pseudo-random: the composition is identical on every load,
     which matters when the same frame has to be art-directed. */
  var rndSeed = 20260918;
  function rnd() {
    rndSeed = (rndSeed * 1664525 + 1013904223) % 4294967296;
    return rndSeed / 4294967296;
  }
  function rr(a, b) { return a + (b - a) * rnd(); }

  /* ---------------------------------------------------------------------
     3.  Procedural texture atlas
     Drawn on a 2D canvas at boot: no image requests, no "missing asset"
     risk, and a few hundred kilobytes of texture memory in total.
     --------------------------------------------------------------------- */
  function cv(w, h) { var c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

  function makeTex(canvas2d, srgb, repeat) {
    var t = new THREE.CanvasTexture(canvas2d);
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = 4;
    if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); }
    return t;
  }

  /* Leaf venation: a midrib and pinnate laterals, used as roughness + bump
     so the leaf catches light the way a Coffea leaf actually does. */
  function leafVeinCanvas() {
    var S = 256, c = cv(S, S), x = c.getContext('2d');
    x.fillStyle = '#8c8c8c'; x.fillRect(0, 0, S, S);
    x.lineCap = 'round';
    x.strokeStyle = '#f2f2f2'; x.lineWidth = S * 0.026;
    x.beginPath(); x.moveTo(S / 2, S); x.lineTo(S / 2, S * 0.02); x.stroke();
    x.lineWidth = S * 0.010;
    for (var i = 1; i <= 11; i++) {
      var t = i / 12, y = S - t * S * 0.96;
      var spread = Math.sin(Math.pow(t, 0.8) * Math.PI) * S * 0.45;
      x.strokeStyle = 'rgba(240,240,240,' + (0.80 - t * 0.30).toFixed(3) + ')';
      x.beginPath(); x.moveTo(S / 2, y);
      x.quadraticCurveTo(S / 2 + spread * 0.55, y - S * 0.045, S / 2 + spread, y - S * 0.105); x.stroke();
      x.beginPath(); x.moveTo(S / 2, y);
      x.quadraticCurveTo(S / 2 - spread * 0.55, y - S * 0.045, S / 2 - spread, y - S * 0.105); x.stroke();
    }
    for (var k = 0; k < 1200; k++) {
      x.fillStyle = 'rgba(0,0,0,' + rr(0.02, 0.08).toFixed(3) + ')';
      x.fillRect(rr(0, S), rr(0, S), rr(1, 3), rr(1, 3));
    }
    return c;
  }

  /* Ripe cherry skin: blush, lenticel freckles, a darker blossom end. */
  function cherrySkinCanvas() {
    var S = 256, c = cv(S, S), x = c.getContext('2d');
    var g = x.createLinearGradient(0, 0, 0, S);
    g.addColorStop(0, '#b53c23'); g.addColorStop(0.42, '#8d1d12');
    g.addColorStop(0.78, '#6a110c'); g.addColorStop(1, '#470b07');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    for (var i = 0; i < 24; i++) {
      var ax = rr(0, S), ay = rr(0, S), ar = rr(S * 0.08, S * 0.30);
      var rg = x.createRadialGradient(ax, ay, 0, ax, ay, ar);
      rg.addColorStop(0, 'rgba(206,86,48,' + rr(0.12, 0.34).toFixed(3) + ')');
      rg.addColorStop(1, 'rgba(206,86,48,0)');
      x.fillStyle = rg; x.fillRect(0, 0, S, S);
    }
    for (var k = 0; k < 520; k++) {
      x.fillStyle = 'rgba(40,9,5,' + rr(0.10, 0.34).toFixed(3) + ')';
      x.beginPath(); x.arc(rr(0, S), rr(0, S), rr(0.5, 1.8), 0, 6.283); x.fill();
    }
    return c;
  }

  /* The surface of a coffee seed is not smooth: it is finely wrinkled along
     its length, mottled, and dusted with silverskin.  This drives both bump
     and roughness, and is most of what separates a bean from a pebble. */
  function beanSurfaceCanvas() {
    var S = 512, c = cv(S, S), x = c.getContext('2d');
    x.fillStyle = '#909090'; x.fillRect(0, 0, S, S);
    /* broad mottling */
    for (var m = 0; m < 90; m++) {
      var mx = rr(0, S), my = rr(0, S), mr = rr(S * 0.02, S * 0.13);
      var g = x.createRadialGradient(mx, my, 0, mx, my, mr);
      var v = rr(0, 1) > 0.5 ? 255 : 0;
      g.addColorStop(0, 'rgba(' + v + ',' + v + ',' + v + ',' + rr(0.05, 0.16).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(' + v + ',' + v + ',' + v + ',0)');
      x.fillStyle = g; x.fillRect(0, 0, S, S);
    }
    /* fine lengthwise wrinkles */
    x.lineCap = 'round';
    for (var i = 0; i < 900; i++) {
      var sx = rr(0, S), sy = rr(0, S);
      var len = rr(S * 0.02, S * 0.11), ang = rr(-0.42, 0.42) + Math.PI / 2;
      var light = rnd() > 0.5;
      x.strokeStyle = light ? 'rgba(255,255,255,' + rr(0.05, 0.18).toFixed(3) + ')'
                            : 'rgba(0,0,0,' + rr(0.06, 0.22).toFixed(3) + ')';
      x.lineWidth = rr(0.7, 2.1);
      x.beginPath();
      x.moveTo(sx, sy);
      x.quadraticCurveTo(sx + Math.cos(ang) * len * 0.5 + rr(-4, 4),
                         sy + Math.sin(ang) * len * 0.5,
                         sx + Math.cos(ang) * len, sy + Math.sin(ang) * len);
      x.stroke();
    }
    /* silverskin dust */
    for (var k = 0; k < 1500; k++) {
      x.fillStyle = 'rgba(255,255,255,' + rr(0.04, 0.15).toFixed(3) + ')';
      x.beginPath(); x.arc(rr(0, S), rr(0, S), rr(0.4, 1.5), 0, 6.283); x.fill();
    }
    return c;
  }

  /* Coarse-ground coffee, for the mound the particles settle onto. */
  function groundsCanvas() {
    var S = 256, c = cv(S, S), x = c.getContext('2d');
    x.fillStyle = '#3b2415'; x.fillRect(0, 0, S, S);
    for (var k = 0; k < 6000; k++) {
      var l = rr(-0.22, 0.30);
      var r = Math.round(58 + l * 120), g = Math.round(36 + l * 90), b = Math.round(21 + l * 66);
      x.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      x.fillRect(rr(0, S), rr(0, S), rr(1.2, 3.4), rr(1.2, 3.4));
    }
    return c;
  }

  /* One soft round sprite, reused for pollen, smoke and contact shadows. */
  function puffCanvas(hardness) {
    var S = 128, c = cv(S, S), x = c.getContext('2d');
    var g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(hardness, 'rgba(255,255,255,' + ((1 - hardness) * 0.9).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    return c;
  }

  /* Two equirectangular environments, painted on a canvas and pre-filtered:
     golden-hour plantation, and a controlled dark studio. */
  function equirect(paint, size) {
    var c = cv(size, size / 2);
    paint(c.getContext('2d'), c.width, c.height);
    var t = new THREE.CanvasTexture(c);
    t.mapping = THREE.EquirectangularReflectionMapping;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  function paintPlantation(x, W, H) {
    var g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0.00, '#f4ddb2'); g.addColorStop(0.30, '#dab57a');
    g.addColorStop(0.50, '#8e7b4f'); g.addColorStop(0.62, '#3f4a2c');
    g.addColorStop(1.00, '#171208');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    var sx = W * 0.64, sy = H * 0.26;
    var s = x.createRadialGradient(sx, sy, 0, sx, sy, H * 0.55);
    s.addColorStop(0, 'rgba(255,248,226,1)');
    s.addColorStop(0.16, 'rgba(255,229,170,.85)');
    s.addColorStop(1, 'rgba(255,229,170,0)');
    x.fillStyle = s; x.fillRect(0, 0, W, H);
    for (var i = 0; i < 30; i++) {
      x.fillStyle = 'rgba(22,30,14,' + rr(0.10, 0.34).toFixed(3) + ')';
      x.beginPath();
      x.ellipse(rr(0, W), rr(H * 0.42, H * 0.80), rr(W * 0.03, W * 0.10), rr(H * 0.03, H * 0.10), rr(0, 3), 0, 6.283);
      x.fill();
    }
  }
  function paintStudio(x, W, H) {
    x.fillStyle = '#0b0906'; x.fillRect(0, 0, W, H);
    function box(cx, cy, r, a, col) {
      var g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, col.replace('%a', a)); g.addColorStop(1, col.replace('%a', 0));
      x.fillStyle = g; x.fillRect(0, 0, W, H);
    }
    box(W * 0.22, H * 0.28, W * 0.26, 0.95, 'rgba(255,246,232,%a)');
    box(W * 0.78, H * 0.32, W * 0.18, 0.55, 'rgba(226,236,255,%a)');
    box(W * 0.50, H * 0.88, W * 0.45, 0.16, 'rgba(180,140,84,%a)');
  }

  /* ---------------------------------------------------------------------
     4.  Geometry
     --------------------------------------------------------------------- */

  /* A coffee leaf: elliptic-oblong, acuminate tip, wavy margin, folded
     along the midrib and curled towards the tip.  Base at the origin,
     length 1 along +Y, so it can be planted straight onto a branch node. */
  function leafGeometry(su, sv) {
    var pos = [], uv = [], idx = [], i, j;
    for (i = 0; i <= su; i++) {
      var u = i / su;
      var hw = Math.pow(Math.sin(Math.PI * Math.pow(u, 0.78)), 0.68) * 0.30;
      hw *= 1 + 0.05 * Math.sin(u * 15.0);
      if (u > 0.88) hw *= Math.max(0.0001, (1 - u) / 0.12);   /* drawn-out tip */
      if (u < 0.06) hw *= u / 0.06;                            /* petiole      */
      for (j = 0; j <= sv; j++) {
        var v = (j / sv) * 2 - 1;
        var fold = -Math.pow(Math.abs(v), 1.45) * hw * 0.68;
        var curl = -Math.pow(u, 2.2) * 0.17 + Math.pow(u, 1.1) * 0.02;
        pos.push(v * hw, u, fold + curl);
        uv.push((v + 1) / 2, u);
      }
    }
    for (i = 0; i < su; i++) for (j = 0; j < sv; j++) {
      var a = i * (sv + 1) + j, b = a + sv + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  /* A ripe coffee cherry: slightly ovoid, a dimple at the blossom end, a
     shallow suture down one side, small surface irregularity.  Radius ~1. */
  function cherryGeometry(s) {
    var g = new THREE.SphereGeometry(1, s, Math.round(s * 0.7));
    var p = g.attributes.position, v = new THREE.Vector3();
    for (var i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      var x = v.x, y = v.y * 1.08, z = v.z;
      var th = Math.atan2(z, x);
      var sut = bell(th, 1.15, 0.30) * 0.055 * (1 - Math.abs(v.y));
      var dim = bell(v.y, -1, 0.34) * 0.14;
      var n = 0.014 * Math.sin(x * 13.3 + y * 9.1) * Math.cos(z * 11.7 - y * 7.3);
      var sc = 1 - sut - dim + n;
      p.setXYZ(i, x * sc, y * (1 - dim * 0.7), z * sc);
    }
    g.computeVertexNormals();
    return g;
  }

  /* A coffee seed.  Domed on one face, flat on the other, with the deep
     sinuous centre cut that makes a bean unmistakably a bean.  `aCrease`
     marks the cut, so the shader can put silverskin in it while the bean
     is green and an ember in it while it roasts.  Baked to roughly the
     real size of a seed inside the cherry above, so the reveal reads true. */
  var BEAN = 0.105;
  /* The deformation that turns a sphere into a seed.  Shared, so the
     parchment husk is exactly the shape of the bean it encloses. */
  function deformBean(g) {
    var p = g.attributes.position, v = new THREE.Vector3();
    var crease = new Float32Array(p.count);
    for (var i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      var x = v.x * 0.66, y = v.y, z = v.z * 0.44;
      var ty = Math.abs(v.y);
      var taper = 1 - 0.22 * Math.pow(ty, 3.0);
      x *= taper; z *= taper;
      var flat = smooth(clamp01((-v.z) / 0.22));
      z *= (1 - 0.56 * flat);
      var cx = 0.105 * Math.sin(y * 2.3 + 0.35);
      var d = (x - cx) / 0.072;
      var cut = Math.exp(-d * d) * (1 - Math.pow(ty, 2.6)) * flat;
      z += cut * 0.155;
      x += (x > cx ? 1 : -1) * cut * 0.020;
      var nz = 0.009 * Math.sin(x * 21 + y * 15) * Math.cos(z * 17 - y * 11);
      crease[i] = clamp01(cut * 1.35);
      p.setXYZ(i, x + nz, y * (1 - 0.05 * cut), z + nz * 0.6);
    }
    g.computeVertexNormals();
    g.setAttribute('aCrease', new THREE.BufferAttribute(crease, 1));
    g.scale(BEAN, BEAN, BEAN);
    return g;
  }
  function beanGeometry(s) {
    return deformBean(new THREE.SphereGeometry(1, s, Math.round(s * 0.68)));
  }

  /* A sculptural matte-black vessel: footed plinth, shallow basin, soft
     rim.  Not a bucket, and not a plate. */
  var VESSEL_R = 0.46;
  var FLOOR = 0.050;                       /* inner floor, in units of R    */
  var INNER = 0.74;                        /* usable floor radius, in R     */
  function vesselGeometry(R) {
    var prof = [
      /* foot */
      [0.000, 0.000], [0.500, 0.000], [0.560, 0.014], [0.580, 0.040],
      /* outside, flaring to the rim */
      [0.680, 0.070], [0.800, 0.118], [0.900, 0.180], [0.965, 0.250],
      [1.000, 0.310], [0.996, 0.328],
      /* inside, falling back to a floor wide enough to hold a handful */
      [0.958, 0.306], [0.920, 0.246], [0.884, 0.170], [0.845, 0.112],
      [0.740, 0.074], [0.540, 0.058], [0.300, 0.052], [0.000, 0.050]
    ];
    var pts = [];
    for (var i = 0; i < prof.length; i++) pts.push(new THREE.Vector2(prof[i][0] * R, prof[i][1] * R));
    return new THREE.LatheGeometry(pts, 64);
  }

  /* One irregular grain of ground coffee (unit scale; sized in the shader). */
  function grindGeometry() {
    var g = new THREE.IcosahedronGeometry(1, 0);
    var p = g.attributes.position, v = new THREE.Vector3();
    for (var i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).multiplyScalar(rr(0.55, 1.25));
      p.setXYZ(i, v.x, v.y * rr(0.6, 1.0), v.z);
    }
    g.computeVertexNormals();
    return g;
  }


return { clamp01, clamp, lerp, seg, smooth, easeIO, easeIn, easeOut, bell, rnd, rr, cv, makeTex, leafVeinCanvas, cherrySkinCanvas, beanSurfaceCanvas, groundsCanvas, puffCanvas, equirect, paintPlantation, paintStudio, leafGeometry, cherryGeometry, BEAN, deformBean, beanGeometry, VESSEL_R, FLOOR, INNER, vesselGeometry, grindGeometry };
}
