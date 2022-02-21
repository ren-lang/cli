var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args2, saturation = null) {
      const [r, g, b] = args2;
      let value = saturation === null ? convert.rgb.hsv(args2)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args2) {
      return convert.rgb.ansi16(convert.hsv.rgb(args2), args2[2]);
    };
    convert.rgb.ansi256 = function(args2) {
      const r = args2[0];
      const g = args2[1];
      const b = args2[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args2) {
      let color = args2 % 10;
      if (color === 0 || color === 7) {
        if (args2 > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args2 > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args2) {
      if (args2 >= 232) {
        const c = (args2 - 232) * 10 + 8;
        return [c, c, c];
      }
      args2 -= 16;
      let rem;
      const r = Math.floor(args2 / 36) / 5 * 255;
      const g = Math.floor((rem = args2 % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args2) {
      const integer = ((Math.round(args2[0]) & 255) << 16) + ((Math.round(args2[1]) & 255) << 8) + (Math.round(args2[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args2) {
      const match = args2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args2) {
      return [args2[0] / 100 * 255, args2[0] / 100 * 255, args2[0] / 100 * 255];
    };
    convert.gray.hsl = function(args2) {
      return [0, 0, args2[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray2) {
      return [0, 100, gray2[0]];
    };
    convert.gray.cmyk = function(gray2) {
      return [0, 0, 0, gray2[0]];
    };
    convert.gray.lab = function(gray2) {
      return [gray2[0], 0, 0];
    };
    convert.gray.hex = function(gray2) {
      const val = Math.round(gray2[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args2) {
        return to(from(args2));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args2) {
        const arg0 = args2[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args2 = arg0;
        }
        return fn(args2);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args2) {
        const arg0 = args2[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args2 = arg0;
        }
        const result = fn(args2);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args2) => {
      const code = fn(...args2);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args2) => {
      const code = fn(...args2);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args2) => {
      const rgb = fn(...args2);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv2 = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv2.indexOf(prefix + flag);
      const terminatorPosition = argv2.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk/source/util.js"(exports, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/source/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args2 = parseArguments(name, matches[2]);
          results.push([name].concat(args2));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk/source/index.js"(exports, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk2 = {};
      applyOptions(chalk2, options);
      chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
      Object.setPrototypeOf(chalk2, Chalk2.prototype);
      Object.setPrototypeOf(chalk2.template, chalk2);
      chalk2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk2.template.Instance = ChalkClass;
      return chalk2.template;
    };
    function Chalk2(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk2, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk2, parts.join(""));
    };
    Object.defineProperties(Chalk2.prototype, styles);
    var chalk = Chalk2();
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk2({ level: stderrColor ? stderrColor.level : 0 });
    chalk.stderr.supportsColor = stderrColor;
    module2.exports = chalk;
  }
});

// elm:/Library/src/ren-lang/cli/src/elm/Main.elm
var require_Main = __commonJS({
  "elm:/Library/src/ren-lang/cli/src/elm/Main.elm"(exports) {
    (function(scope) {
      "use strict";
      function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
      }
      function F2(fun) {
        return F(2, fun, function(a) {
          return function(b) {
            return fun(a, b);
          };
        });
      }
      function F3(fun) {
        return F(3, fun, function(a) {
          return function(b) {
            return function(c) {
              return fun(a, b, c);
            };
          };
        });
      }
      function F4(fun) {
        return F(4, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return fun(a, b, c, d);
              };
            };
          };
        });
      }
      function F5(fun) {
        return F(5, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return fun(a, b, c, d, e);
                };
              };
            };
          };
        });
      }
      function F6(fun) {
        return F(6, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return fun(a, b, c, d, e, f);
                  };
                };
              };
            };
          };
        });
      }
      function F7(fun) {
        return F(7, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return fun(a, b, c, d, e, f, g);
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F8(fun) {
        return F(8, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return fun(a, b, c, d, e, f, g, h);
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F9(fun) {
        return F(9, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return function(i) {
                          return fun(a, b, c, d, e, f, g, h, i);
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
      }
      function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
      }
      function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
      }
      function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
      }
      function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
      }
      function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
      }
      function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
      }
      function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
      }
      console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
      var _List_Nil_UNUSED = { $: 0 };
      var _List_Nil = { $: "[]" };
      function _List_Cons_UNUSED(hd, tl) {
        return { $: 1, a: hd, b: tl };
      }
      function _List_Cons(hd, tl) {
        return { $: "::", a: hd, b: tl };
      }
      var _List_cons = F2(_List_Cons);
      function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--; ) {
          out = _List_Cons(arr[i], out);
        }
        return out;
      }
      function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
          out.push(xs.a);
        }
        return out;
      }
      var _List_map2 = F3(function(f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
          arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map3 = F4(function(f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          return _Utils_cmp(f(a), f(b));
        }));
      });
      var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          var ord = A2(f, a, b);
          return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
      });
      var _JsArray_empty = [];
      function _JsArray_singleton(value) {
        return [value];
      }
      function _JsArray_length(array) {
        return array.length;
      }
      var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
          result[i] = func(offset + i);
        }
        return result;
      });
      var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
          result[i] = ls.a;
          ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
      });
      var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
      });
      var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[index] = value;
        return result;
      });
      var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[length] = value;
        return result;
      });
      var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_foldr = F3(function(func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = func(array[i]);
        }
        return result;
      });
      var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = A2(func, offset + i, array[i]);
        }
        return result;
      });
      var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
      });
      var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
          itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
          result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
          result[i + destLen] = source[i];
        }
        return result;
      });
      var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
      });
      var _Debug_log = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
      });
      function _Debug_todo(moduleName, region) {
        return function(message) {
          _Debug_crash(8, moduleName, region, message);
        };
      }
      function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
          _Debug_crash(9, moduleName, region, value, message);
        };
      }
      function _Debug_toString_UNUSED(value) {
        return "<internals>";
      }
      function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
      }
      function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
          return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
          return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
          return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
          return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
          return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        }
        if (typeof value === "object" && "$" in value) {
          var tag = value.$;
          if (typeof tag === "number") {
            return _Debug_internalColor(ansi, "<internals>");
          }
          if (tag[0] === "#") {
            var output = [];
            for (var k in value) {
              if (k === "$")
                continue;
              output.push(_Debug_toAnsiString(ansi, value[k]));
            }
            return "(" + output.join(",") + ")";
          }
          if (tag === "Set_elm_builtin") {
            return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
          }
          if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
            return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
          }
          if (tag === "Array_elm_builtin") {
            return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
          }
          if (tag === "::" || tag === "[]") {
            var output = "[";
            value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
            for (; value.b; value = value.b) {
              output += "," + _Debug_toAnsiString(ansi, value.a);
            }
            return output + "]";
          }
          var output = "";
          for (var i in value) {
            if (i === "$")
              continue;
            var str = _Debug_toAnsiString(ansi, value[i]);
            var c0 = str[0];
            var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
            output += " " + (parenless ? str : "(" + str + ")");
          }
          return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
          return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
          return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
          var output = [];
          for (var key in value) {
            var field = key[0] === "_" ? key.slice(1) : key;
            output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
          }
          if (output.length === 0) {
            return "{}";
          }
          return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
      }
      function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) {
          return s.replace(/\'/g, "\\'");
        } else {
          return s.replace(/\"/g, '\\"');
        }
      }
      function _Debug_ctorColor(ansi, string) {
        return ansi ? "\x1B[96m" + string + "\x1B[0m" : string;
      }
      function _Debug_numberColor(ansi, string) {
        return ansi ? "\x1B[95m" + string + "\x1B[0m" : string;
      }
      function _Debug_stringColor(ansi, string) {
        return ansi ? "\x1B[93m" + string + "\x1B[0m" : string;
      }
      function _Debug_charColor(ansi, string) {
        return ansi ? "\x1B[92m" + string + "\x1B[0m" : string;
      }
      function _Debug_fadeColor(ansi, string) {
        return ansi ? "\x1B[37m" + string + "\x1B[0m" : string;
      }
      function _Debug_internalColor(ansi, string) {
        return ansi ? "\x1B[36m" + string + "\x1B[0m" : string;
      }
      function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
      }
      function _Debug_crash_UNUSED(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
      }
      function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
          case 0:
            throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
          case 1:
            throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
          case 2:
            var jsonErrorString = fact1;
            throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
          case 3:
            var portName = fact1;
            throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
          case 4:
            var portName = fact1;
            var problem = fact2;
            throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
          case 5:
            throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
          case 6:
            var moduleName = fact1;
            throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
          case 8:
            var moduleName = fact1;
            var region = fact2;
            var message = fact3;
            throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
          case 9:
            var moduleName = fact1;
            var region = fact2;
            var value = fact3;
            var message = fact4;
            throw new Error("TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
          case 10:
            throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
          case 11:
            throw new Error("Cannot perform mod 0. Division by zero error.");
        }
      }
      function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) {
          return "on line " + region.start.line;
        }
        return "on lines " + region.start.line + " through " + region.end.line;
      }
      function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
        }
        return isEqual;
      }
      function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
          return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
          typeof x === "function" && _Debug_crash(5);
          return false;
        }
        if (depth > 100) {
          stack.push(_Utils_Tuple2(x, y));
          return true;
        }
        if (x.$ === "Set_elm_builtin") {
          x = $elm$core$Set$toList(x);
          y = $elm$core$Set$toList(y);
        }
        if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
          x = $elm$core$Dict$toList(x);
          y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
          if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
            return false;
          }
        }
        return true;
      }
      var _Utils_equal = F2(_Utils_eq);
      var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
      });
      function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
          return x === y ? 0 : x < y ? -1 : 1;
        }
        if (x instanceof String) {
          var a = x.valueOf();
          var b = y.valueOf();
          return a === b ? 0 : a < b ? -1 : 1;
        }
        if (x.$[0] === "#") {
          return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
        }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
      }
      var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
      });
      var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
      });
      var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
      });
      var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
      });
      var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
      });
      var _Utils_Tuple0_UNUSED = 0;
      var _Utils_Tuple0 = { $: "#0" };
      function _Utils_Tuple2_UNUSED(a, b) {
        return { a, b };
      }
      function _Utils_Tuple2(a, b) {
        return { $: "#2", a, b };
      }
      function _Utils_Tuple3_UNUSED(a, b, c) {
        return { a, b, c };
      }
      function _Utils_Tuple3(a, b, c) {
        return { $: "#3", a, b, c };
      }
      function _Utils_chr_UNUSED(c) {
        return c;
      }
      function _Utils_chr(c) {
        return new String(c);
      }
      function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
          newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
          newRecord[key] = updatedFields[key];
        }
        return newRecord;
      }
      var _Utils_append = F2(_Utils_ap);
      function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
          return xs + ys;
        }
        if (!xs.b) {
          return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
          curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
      }
      var _Basics_add = F2(function(a, b) {
        return a + b;
      });
      var _Basics_sub = F2(function(a, b) {
        return a - b;
      });
      var _Basics_mul = F2(function(a, b) {
        return a * b;
      });
      var _Basics_fdiv = F2(function(a, b) {
        return a / b;
      });
      var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
      });
      var _Basics_pow = F2(Math.pow);
      var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
      });
      var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
      });
      var _Basics_pi = Math.PI;
      var _Basics_e = Math.E;
      var _Basics_cos = Math.cos;
      var _Basics_sin = Math.sin;
      var _Basics_tan = Math.tan;
      var _Basics_acos = Math.acos;
      var _Basics_asin = Math.asin;
      var _Basics_atan = Math.atan;
      var _Basics_atan2 = F2(Math.atan2);
      function _Basics_toFloat(x) {
        return x;
      }
      function _Basics_truncate(n) {
        return n | 0;
      }
      function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
      }
      var _Basics_ceiling = Math.ceil;
      var _Basics_floor = Math.floor;
      var _Basics_round = Math.round;
      var _Basics_sqrt = Math.sqrt;
      var _Basics_log = Math.log;
      var _Basics_isNaN = isNaN;
      function _Basics_not(bool) {
        return !bool;
      }
      var _Basics_and = F2(function(a, b) {
        return a && b;
      });
      var _Basics_or = F2(function(a, b) {
        return a || b;
      });
      var _Basics_xor = F2(function(a, b) {
        return a !== b;
      });
      var _String_cons = F2(function(chr, str) {
        return chr + str;
      });
      function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
      }
      var _String_append = F2(function(a, b) {
        return a + b;
      });
      function _String_length(str) {
        return str.length;
      }
      var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
          var word = string.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            array[i] = func(_Utils_chr(string[i] + string[i + 1]));
            i += 2;
            continue;
          }
          array[i] = func(_Utils_chr(string[i]));
          i++;
        }
        return array.join("");
      });
      var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
          var char = str[i];
          var word = str.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += str[i];
            i++;
          }
          if (isGood(_Utils_chr(char))) {
            arr.push(char);
          }
        }
        return arr.join("");
      });
      function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
          var word = str.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            arr[len - i] = str[i + 1];
            i++;
            arr[len - i] = str[i - 1];
            i++;
          } else {
            arr[len - i] = str[i];
            i++;
          }
        }
        return arr.join("");
      }
      var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
          var char = string[i];
          var word = string.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += string[i];
            i++;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_split = F2(function(sep, str) {
        return str.split(sep);
      });
      var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
      });
      var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
      });
      function _String_trim(str) {
        return str.trim();
      }
      function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
      }
      function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
      }
      function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
      }
      function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
      }
      function _String_toUpper(str) {
        return str.toUpperCase();
      }
      function _String_toLower(str) {
        return str.toLowerCase();
      }
      var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (isGood(_Utils_chr(char))) {
            return true;
          }
        }
        return false;
      });
      var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (!isGood(_Utils_chr(char))) {
            return false;
          }
        }
        return true;
      });
      var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
      });
      var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
      });
      var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
      });
      var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
          return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
          is.push(i);
          i = i + subLen;
        }
        return _List_fromArray(is);
      });
      function _String_fromNumber(number) {
        return number + "";
      }
      function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
          var code = str.charCodeAt(i);
          if (code < 48 || 57 < code) {
            return $elm$core$Maybe$Nothing;
          }
          total = 10 * total + code - 48;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
      }
      function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
          return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
      }
      function _String_fromList(chars) {
        return _List_toArray(chars).join("");
      }
      function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
          return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
      }
      function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 1114111 < code ? "\uFFFD" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
      }
      function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
      }
      function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
      }
      function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
      }
      function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
      }
      function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
      }
      function _Json_succeed(msg) {
        return {
          $: 0,
          a: msg
        };
      }
      function _Json_fail(msg) {
        return {
          $: 1,
          a: msg
        };
      }
      function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
      }
      var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
      });
      var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
      });
      var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
      });
      var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
      });
      var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
      });
      function _Json_decodeList(decoder) {
        return { $: 3, b: decoder };
      }
      function _Json_decodeArray(decoder) {
        return { $: 4, b: decoder };
      }
      function _Json_decodeNull(value) {
        return { $: 5, c: value };
      }
      var _Json_decodeField = F2(function(field, decoder) {
        return {
          $: 6,
          d: field,
          b: decoder
        };
      });
      var _Json_decodeIndex = F2(function(index, decoder) {
        return {
          $: 7,
          e: index,
          b: decoder
        };
      });
      function _Json_decodeKeyValuePairs(decoder) {
        return {
          $: 8,
          b: decoder
        };
      }
      function _Json_mapMany(f, decoders) {
        return {
          $: 9,
          f,
          g: decoders
        };
      }
      var _Json_andThen = F2(function(callback, decoder) {
        return {
          $: 10,
          b: decoder,
          h: callback
        };
      });
      function _Json_oneOf(decoders) {
        return {
          $: 11,
          g: decoders
        };
      }
      var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [d1]);
      });
      var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
      });
      var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
      });
      var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
      });
      var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
      });
      var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
      });
      var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
      });
      var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
      });
      var _Json_runOnString = F2(function(decoder, string) {
        try {
          var value = JSON.parse(string);
          return _Json_runHelp(decoder, value);
        } catch (e) {
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
      });
      var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
      });
      function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
          case 2:
            return decoder.b(value);
          case 5:
            return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
          case 3:
            if (!_Json_isArray(value)) {
              return _Json_expecting("a LIST", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
          case 4:
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
          case 6:
            var field = decoder.d;
            if (typeof value !== "object" || value === null || !(field in value)) {
              return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
            }
            var result = _Json_runHelp(decoder.b, value[field]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
          case 7:
            var index = decoder.e;
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            if (index >= value.length) {
              return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
            }
            var result = _Json_runHelp(decoder.b, value[index]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
          case 8:
            if (typeof value !== "object" || value === null || _Json_isArray(value)) {
              return _Json_expecting("an OBJECT", value);
            }
            var keyValuePairs = _List_Nil;
            for (var key in value) {
              if (value.hasOwnProperty(key)) {
                var result = _Json_runHelp(decoder.b, value[key]);
                if (!$elm$core$Result$isOk(result)) {
                  return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                }
                keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
              }
            }
            return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
          case 9:
            var answer = decoder.f;
            var decoders = decoder.g;
            for (var i = 0; i < decoders.length; i++) {
              var result = _Json_runHelp(decoders[i], value);
              if (!$elm$core$Result$isOk(result)) {
                return result;
              }
              answer = answer(result.a);
            }
            return $elm$core$Result$Ok(answer);
          case 10:
            var result = _Json_runHelp(decoder.b, value);
            return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
          case 11:
            var errors = _List_Nil;
            for (var temp = decoder.g; temp.b; temp = temp.b) {
              var result = _Json_runHelp(temp.a, value);
              if ($elm$core$Result$isOk(result)) {
                return result;
              }
              errors = _List_Cons(result.a, errors);
            }
            return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
          case 1:
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
          case 0:
            return $elm$core$Result$Ok(decoder.a);
        }
      }
      function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
          var result = _Json_runHelp(decoder, value[i]);
          if (!$elm$core$Result$isOk(result)) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
          }
          array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
      }
      function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
      }
      function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
          return array[i];
        });
      }
      function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
      }
      function _Json_equality(x, y) {
        if (x === y) {
          return true;
        }
        if (x.$ !== y.$) {
          return false;
        }
        switch (x.$) {
          case 0:
          case 1:
            return x.a === y.a;
          case 2:
            return x.b === y.b;
          case 5:
            return x.c === y.c;
          case 3:
          case 4:
          case 8:
            return _Json_equality(x.b, y.b);
          case 6:
            return x.d === y.d && _Json_equality(x.b, y.b);
          case 7:
            return x.e === y.e && _Json_equality(x.b, y.b);
          case 9:
            return x.f === y.f && _Json_listEquality(x.g, y.g);
          case 10:
            return x.h === y.h && _Json_equality(x.b, y.b);
          case 11:
            return _Json_listEquality(x.g, y.g);
        }
      }
      function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          if (!_Json_equality(aDecoders[i], bDecoders[i])) {
            return false;
          }
        }
        return true;
      }
      var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
      });
      function _Json_wrap(value) {
        return { $: 0, a: value };
      }
      function _Json_unwrap(value) {
        return value.a;
      }
      function _Json_wrap_UNUSED(value) {
        return value;
      }
      function _Json_unwrap_UNUSED(value) {
        return value;
      }
      function _Json_emptyArray() {
        return [];
      }
      function _Json_emptyObject() {
        return {};
      }
      var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
      });
      function _Json_addEntry(func) {
        return F2(function(entry, array) {
          array.push(_Json_unwrap(func(entry)));
          return array;
        });
      }
      var _Json_encodeNull = _Json_wrap(null);
      function _Scheduler_succeed(value) {
        return {
          $: 0,
          a: value
        };
      }
      function _Scheduler_fail(error) {
        return {
          $: 1,
          a: error
        };
      }
      function _Scheduler_binding(callback) {
        return {
          $: 2,
          b: callback,
          c: null
        };
      }
      var _Scheduler_andThen = F2(function(callback, task) {
        return {
          $: 3,
          b: callback,
          d: task
        };
      });
      var _Scheduler_onError = F2(function(callback, task) {
        return {
          $: 4,
          b: callback,
          d: task
        };
      });
      function _Scheduler_receive(callback) {
        return {
          $: 5,
          b: callback
        };
      }
      var _Scheduler_guid = 0;
      function _Scheduler_rawSpawn(task) {
        var proc = {
          $: 0,
          e: _Scheduler_guid++,
          f: task,
          g: null,
          h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
      }
      function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
          callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
      }
      function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
      }
      var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
          _Scheduler_rawSend(proc, msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
          var task = proc.f;
          if (task.$ === 2 && task.c) {
            task.c();
          }
          proc.f = null;
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      }
      var _Scheduler_working = false;
      var _Scheduler_queue = [];
      function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
          return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
          _Scheduler_step(proc);
        }
        _Scheduler_working = false;
      }
      function _Scheduler_step(proc) {
        while (proc.f) {
          var rootTag = proc.f.$;
          if (rootTag === 0 || rootTag === 1) {
            while (proc.g && proc.g.$ !== rootTag) {
              proc.g = proc.g.i;
            }
            if (!proc.g) {
              return;
            }
            proc.f = proc.g.b(proc.f.a);
            proc.g = proc.g.i;
          } else if (rootTag === 2) {
            proc.f.c = proc.f.b(function(newRoot) {
              proc.f = newRoot;
              _Scheduler_enqueue(proc);
            });
            return;
          } else if (rootTag === 5) {
            if (proc.h.length === 0) {
              return;
            }
            proc.f = proc.f.b(proc.h.shift());
          } else {
            proc.g = {
              $: rootTag === 3 ? 0 : 1,
              b: proc.f.b,
              i: proc.g
            };
            proc.f = proc.f.d;
          }
        }
      }
      function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
          var id = setTimeout(function() {
            callback(_Scheduler_succeed(_Utils_Tuple0));
          }, time);
          return function() {
            clearTimeout(id);
          };
        });
      }
      var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args2) {
        return _Platform_initialize(flagDecoder, args2, impl.init, impl.update, impl.subscriptions, function() {
          return function() {
          };
        });
      });
      function _Platform_initialize(flagDecoder, args2, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args2 ? args2["flags"] : void 0));
        $elm$core$Result$isOk(result) || _Debug_crash(2, _Json_errorToString(result.a));
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
          var pair = A2(update, msg, model);
          stepper(model = pair.a, viewMetadata);
          _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports } : {};
      }
      var _Platform_preload;
      function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
      }
      var _Platform_effectManagers = {};
      function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
          var manager = _Platform_effectManagers[key];
          if (manager.a) {
            ports = ports || {};
            ports[key] = manager.a(key, sendToApp);
          }
          managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
      }
      function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
          b: init,
          c: onEffects,
          d: onSelfMsg,
          e: cmdMap,
          f: subMap
        };
      }
      function _Platform_instantiateManager(info, sendToApp) {
        var router = {
          g: sendToApp,
          h: void 0
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
          return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
            var value = msg.a;
            if (msg.$ === 0) {
              return A3(onSelfMsg, router, value, state);
            }
            return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
          }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
      }
      var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
          router.g(msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
          $: 0,
          a: msg
        });
      });
      function _Platform_leaf(home) {
        return function(value) {
          return {
            $: 1,
            k: home,
            l: value
          };
        };
      }
      function _Platform_batch(list) {
        return {
          $: 2,
          m: list
        };
      }
      var _Platform_map = F2(function(tagger, bag) {
        return {
          $: 3,
          n: tagger,
          o: bag
        };
      });
      var _Platform_effectsQueue = [];
      var _Platform_effectsActive = false;
      function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
          return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift(); ) {
          _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
      }
      function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
          _Scheduler_rawSend(managers[home], {
            $: "fx",
            a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
          });
        }
      }
      function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
          case 1:
            var home = bag.k;
            var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
            effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
            return;
          case 2:
            for (var list = bag.m; list.b; list = list.b) {
              _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
            }
            return;
          case 3:
            _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
              s: bag.n,
              t: taggers
            });
            return;
        }
      }
      function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
          for (var temp = taggers; temp; temp = temp.t) {
            x = temp.s(x);
          }
          return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
      }
      function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
      }
      function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
          _Debug_crash(3, name);
        }
      }
      function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          e: _Platform_outgoingPortMap,
          u: converter,
          a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
      });
      function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
          for (; cmdList.b; cmdList = cmdList.b) {
            var currentSubs = subs;
            var value = _Json_unwrap(converter(cmdList.a));
            for (var i = 0; i < currentSubs.length; i++) {
              currentSubs[i](value);
            }
          }
          return init;
        });
        function subscribe(callback) {
          subs.push(callback);
        }
        function unsubscribe(callback) {
          subs = subs.slice();
          var index = subs.indexOf(callback);
          if (index >= 0) {
            subs.splice(index, 1);
          }
        }
        return {
          subscribe,
          unsubscribe
        };
      }
      function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          f: _Platform_incomingPortMap,
          u: converter,
          a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
          return tagger(finalTagger(value));
        };
      });
      function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
          subs = subList;
          return init;
        });
        function send(incomingValue) {
          var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
          $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
          var value = result.a;
          for (var temp = subs; temp.b; temp = temp.b) {
            sendToApp(temp.a(value));
          }
        }
        return { send };
      }
      function _Platform_export_UNUSED(exports2) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsProd(obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      function _Platform_export(exports2) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsDebug(moduleName, obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      var _Regex_never = /.^/;
      var _Regex_fromStringWith = F2(function(options, string) {
        var flags = "g";
        if (options.multiline) {
          flags += "m";
        }
        if (options.caseInsensitive) {
          flags += "i";
        }
        try {
          return $elm$core$Maybe$Just(new RegExp(string, flags));
        } catch (error) {
          return $elm$core$Maybe$Nothing;
        }
      });
      var _Regex_contains = F2(function(re, string) {
        return string.match(re) !== null;
      });
      var _Regex_findAtMost = F3(function(n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
          if (prevLastIndex == re.lastIndex)
            break;
          var i = result.length - 1;
          var subs = new Array(i);
          while (i > 0) {
            var submatch = result[i];
            subs[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
          }
          out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
          prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
      });
      var _Regex_replaceAtMost = F4(function(n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
          if (count++ >= n) {
            return match;
          }
          var i = arguments.length - 3;
          var submatches = new Array(i);
          while (i > 0) {
            var submatch = arguments[i];
            submatches[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
          }
          return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
      });
      var _Regex_splitAtMost = F3(function(n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
          var result = re.exec(string);
          if (!result)
            break;
          out.push(string.slice(start, result.index));
          start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
      });
      var _Regex_infinity = Infinity;
      var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for (var i = 0; isGood && i < smallLength; ) {
          var code = bigString.charCodeAt(offset);
          isGood = smallString[i++] === bigString[offset++] && (code === 10 ? (row++, col = 1) : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
      });
      var _Parser_isSubChar = F3(function(predicate, offset, string) {
        return string.length <= offset ? -1 : (string.charCodeAt(offset) & 63488) === 55296 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === "\n" ? -2 : offset + 1 : -1;
      });
      var _Parser_isAsciiCode = F3(function(code, offset, string) {
        return string.charCodeAt(offset) === code;
      });
      var _Parser_chompBase10 = F2(function(offset, string) {
        for (; offset < string.length; offset++) {
          var code = string.charCodeAt(offset);
          if (code < 48 || 57 < code) {
            return offset;
          }
        }
        return offset;
      });
      var _Parser_consumeBase = F3(function(base, offset, string) {
        for (var total = 0; offset < string.length; offset++) {
          var digit = string.charCodeAt(offset) - 48;
          if (digit < 0 || base <= digit)
            break;
          total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
      });
      var _Parser_consumeBase16 = F2(function(offset, string) {
        for (var total = 0; offset < string.length; offset++) {
          var code = string.charCodeAt(offset);
          if (48 <= code && code <= 57) {
            total = 16 * total + code - 48;
          } else if (65 <= code && code <= 70) {
            total = 16 * total + code - 55;
          } else if (97 <= code && code <= 102) {
            total = 16 * total + code - 87;
          } else {
            break;
          }
        }
        return _Utils_Tuple2(offset, total);
      });
      var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while (offset < target) {
          var code = bigString.charCodeAt(offset++);
          code === 10 ? (col = 1, row++) : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
      });
      var $author$project$Main$Idle = { $: "Idle" };
      var $elm$core$Basics$EQ = { $: "EQ" };
      var $elm$core$Basics$LT = { $: "LT" };
      var $elm$core$List$cons = _List_cons;
      var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
      var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
          if (node.$ === "SubTree") {
            var subTree = node.a;
            return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
          } else {
            var values = node.a;
            return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
          }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
      });
      var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
      };
      var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr:
          while (true) {
            if (t.$ === "RBEmpty_elm_builtin") {
              return acc;
            } else {
              var key = t.b;
              var value = t.c;
              var left = t.d;
              var right = t.e;
              var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
              func = $temp$func;
              acc = $temp$acc;
              t = $temp$t;
              continue foldr;
            }
          }
      });
      var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
          return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
      };
      var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
          return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
      };
      var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
      };
      var $elm$core$Basics$GT = { $: "GT" };
      var $elm$core$Result$Err = function(a) {
        return { $: "Err", a };
      };
      var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return { $: "Failure", a, b };
      });
      var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return { $: "Field", a, b };
      });
      var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return { $: "Index", a, b };
      });
      var $elm$core$Result$Ok = function(a) {
        return { $: "Ok", a };
      };
      var $elm$json$Json$Decode$OneOf = function(a) {
        return { $: "OneOf", a };
      };
      var $elm$core$Basics$False = { $: "False" };
      var $elm$core$Basics$add = _Basics_add;
      var $elm$core$Maybe$Just = function(a) {
        return { $: "Just", a };
      };
      var $elm$core$Maybe$Nothing = { $: "Nothing" };
      var $elm$core$String$all = _String_all;
      var $elm$core$Basics$and = _Basics_and;
      var $elm$core$Basics$append = _Utils_append;
      var $elm$json$Json$Encode$encode = _Json_encode;
      var $elm$core$String$fromInt = _String_fromNumber;
      var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
      });
      var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
      });
      var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
      };
      var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl:
          while (true) {
            if (!list.b) {
              return acc;
            } else {
              var x = list.a;
              var xs = list.b;
              var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
              func = $temp$func;
              acc = $temp$acc;
              list = $temp$list;
              continue foldl;
            }
          }
      });
      var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
          return i + 1;
        }), 0, xs);
      };
      var $elm$core$List$map2 = _List_map2;
      var $elm$core$Basics$le = _Utils_le;
      var $elm$core$Basics$sub = _Basics_sub;
      var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp:
          while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
              var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
              lo = $temp$lo;
              hi = $temp$hi;
              list = $temp$list;
              continue rangeHelp;
            } else {
              return list;
            }
          }
      });
      var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
      });
      var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
      });
      var $elm$core$Char$toCode = _Char_toCode;
      var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
      };
      var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
      };
      var $elm$core$Basics$or = _Basics_or;
      var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
      };
      var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
      };
      var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
      };
      var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
      };
      var $elm$core$String$uncons = _String_uncons;
      var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
      });
      var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
      };
      var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp:
          while (true) {
            switch (error.$) {
              case "Field":
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                  var _v1 = $elm$core$String$uncons(f);
                  if (_v1.$ === "Nothing") {
                    return false;
                  } else {
                    var _v2 = _v1.a;
                    var _char = _v2.a;
                    var rest = _v2.b;
                    return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                  }
                }();
                var fieldName = isSimple ? "." + f : "['" + (f + "']");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              case "Index":
                var i = error.a;
                var err = error.b;
                var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              case "OneOf":
                var errors = error.a;
                if (!errors.b) {
                  return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                    if (!context.b) {
                      return "!";
                    } else {
                      return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                    }
                  }();
                } else {
                  if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                  } else {
                    var starter = function() {
                      if (!context.b) {
                        return "Json.Decode.oneOf";
                      } else {
                        return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                      }
                    }();
                    var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                    return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                  }
                }
              default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                  if (!context.b) {
                    return "Problem with the given value:\n\n";
                  } else {
                    return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
                  }
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
            }
          }
      });
      var $elm$core$Array$branchFactor = 32;
      var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return { $: "Array_elm_builtin", a, b, c, d };
      });
      var $elm$core$Elm$JsArray$empty = _JsArray_empty;
      var $elm$core$Basics$ceiling = _Basics_ceiling;
      var $elm$core$Basics$fdiv = _Basics_fdiv;
      var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
      });
      var $elm$core$Basics$toFloat = _Basics_toFloat;
      var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
      var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
      var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
      var $elm$core$Array$Leaf = function(a) {
        return { $: "Leaf", a };
      };
      var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
      });
      var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
      });
      var $elm$core$Basics$eq = _Utils_equal;
      var $elm$core$Basics$floor = _Basics_floor;
      var $elm$core$Elm$JsArray$length = _JsArray_length;
      var $elm$core$Basics$gt = _Utils_gt;
      var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
      });
      var $elm$core$Basics$mul = _Basics_mul;
      var $elm$core$Array$SubTree = function(a) {
        return { $: "SubTree", a };
      };
      var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
      var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes:
          while (true) {
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
              return $elm$core$List$reverse(newAcc);
            } else {
              var $temp$nodes = remainingNodes, $temp$acc = newAcc;
              nodes = $temp$nodes;
              acc = $temp$acc;
              continue compressNodes;
            }
          }
      });
      var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
      };
      var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder:
          while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
              return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            } else {
              var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
              nodeList = $temp$nodeList;
              nodeListSize = $temp$nodeListSize;
              continue treeFromBuilder;
            }
          }
      });
      var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) {
          return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        } else {
          var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
          var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
          var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
          var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
          return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
      });
      var $elm$core$Basics$idiv = _Basics_idiv;
      var $elm$core$Basics$lt = _Utils_lt;
      var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp:
          while (true) {
            if (fromIndex < 0) {
              return A2($elm$core$Array$builderToArray, false, { nodeList, nodeListSize: len / $elm$core$Array$branchFactor | 0, tail });
            } else {
              var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
              var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
              fn = $temp$fn;
              fromIndex = $temp$fromIndex;
              len = $temp$len;
              nodeList = $temp$nodeList;
              tail = $temp$tail;
              continue initializeHelp;
            }
          }
      });
      var $elm$core$Basics$remainderBy = _Basics_remainderBy;
      var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) {
          return $elm$core$Array$empty;
        } else {
          var tailLen = len % $elm$core$Array$branchFactor;
          var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
          var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
          return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
      });
      var $elm$core$Basics$True = { $: "True" };
      var $elm$core$Result$isOk = function(result) {
        if (result.$ === "Ok") {
          return true;
        } else {
          return false;
        }
      };
      var $elm$core$Platform$Cmd$batch = _Platform_batch;
      var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
      var $author$project$Data$IO$pure = function(model) {
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
      };
      var $author$project$Main$init = function(_v0) {
        return $author$project$Data$IO$pure($author$project$Main$Idle);
      };
      var $author$project$Main$None = { $: "None" };
      var $elm$core$Platform$Sub$batch = _Platform_batch;
      var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
      });
      var $elm$json$Json$Decode$decodeValue = _Json_run;
      var $elm$json$Json$Decode$value = _Json_decodeValue;
      var $author$project$Main$fromFs = _Platform_incomingPort("fromFs", $elm$json$Json$Decode$value);
      var $author$project$Main$GotProject = function(a) {
        return { $: "GotProject", a };
      };
      var $author$project$Main$GotProjectMetadata = function(a) {
        return { $: "GotProjectMetadata", a };
      };
      var $elm$json$Json$Decode$andThen = _Json_andThen;
      var $elm$core$Dict$RBEmpty_elm_builtin = { $: "RBEmpty_elm_builtin" };
      var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
      var $elm$core$Dict$Black = { $: "Black" };
      var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return { $: "RBNode_elm_builtin", a, b, c, d, e };
      });
      var $elm$core$Dict$Red = { $: "Red" };
      var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
          var _v1 = right.a;
          var rK = right.b;
          var rV = right.c;
          var rLeft = right.d;
          var rRight = right.e;
          if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
            var _v3 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
          }
        } else {
          if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
            var _v5 = left.a;
            var lK = left.b;
            var lV = left.c;
            var _v6 = left.d;
            var _v7 = _v6.a;
            var llK = _v6.b;
            var llV = _v6.c;
            var llLeft = _v6.d;
            var llRight = _v6.e;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
          }
        }
      });
      var $elm$core$Basics$compare = _Utils_compare;
      var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        } else {
          var nColor = dict.a;
          var nKey = dict.b;
          var nValue = dict.c;
          var nLeft = dict.d;
          var nRight = dict.e;
          var _v1 = A2($elm$core$Basics$compare, key, nKey);
          switch (_v1.$) {
            case "LT":
              return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
            case "EQ":
              return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
            default:
              return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
          }
        }
      });
      var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
          var _v1 = _v0.a;
          var k = _v0.b;
          var v = _v0.c;
          var l = _v0.d;
          var r = _v0.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
          var x = _v0;
          return x;
        }
      });
      var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
          var key = _v0.a;
          var value = _v0.b;
          return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
      };
      var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
      var $elm$json$Json$Decode$map = _Json_map1;
      var $elm$json$Json$Decode$dict = function(decoder) {
        return A2($elm$json$Json$Decode$map, $elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
      };
      var $elm$json$Json$Decode$fail = _Json_fail;
      var $elm$json$Json$Decode$field = _Json_decodeField;
      var $elm$json$Json$Decode$string = _Json_decodeString;
      var $author$project$Main$fromFsDecoder = A2($elm$json$Json$Decode$andThen, function(tag) {
        switch (tag) {
          case "GotProject":
            return A2($elm$json$Json$Decode$map, $author$project$Main$GotProject, A2($elm$json$Json$Decode$field, "0", $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)));
          case "GotProjectMetadata":
            return A2($elm$json$Json$Decode$map, $author$project$Main$GotProjectMetadata, A2($elm$json$Json$Decode$field, "0", $elm$json$Json$Decode$string));
          default:
            return $elm$json$Json$Decode$fail("");
        }
      }, A2($elm$json$Json$Decode$field, "$", $elm$json$Json$Decode$string));
      var $elm$core$Result$withDefault = F2(function(def, result) {
        if (result.$ === "Ok") {
          var a = result.a;
          return a;
        } else {
          return def;
        }
      });
      var $author$project$Main$subscriptions = function(_v0) {
        return $elm$core$Platform$Sub$batch(_List_fromArray([
          $author$project$Main$fromFs(A2($elm$core$Basics$composeR, $elm$json$Json$Decode$decodeValue($author$project$Main$fromFsDecoder), $elm$core$Result$withDefault($author$project$Main$None)))
        ]));
      };
      var $elm$json$Json$Decode$succeed = _Json_succeed;
      var $author$project$Main$Compiling = function(a) {
        return { $: "Compiling", a };
      };
      var $ren_lang$compiler$Ren$AST$Module$Import = F3(function(path, name, exposed) {
        return { exposed, name, path };
      });
      var $elm$core$List$any = F2(function(isOkay, list) {
        any:
          while (true) {
            if (!list.b) {
              return false;
            } else {
              var x = list.a;
              var xs = list.b;
              if (isOkay(x)) {
                return true;
              } else {
                var $temp$isOkay = isOkay, $temp$list = xs;
                isOkay = $temp$isOkay;
                list = $temp$list;
                continue any;
              }
            }
          }
      });
      var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) {
          return acc;
        } else {
          var a = ls.a;
          var r1 = ls.b;
          if (!r1.b) {
            return A2(fn, a, acc);
          } else {
            var b = r1.a;
            var r2 = r1.b;
            if (!r2.b) {
              return A2(fn, a, A2(fn, b, acc));
            } else {
              var c = r2.a;
              var r3 = r2.b;
              if (!r3.b) {
                return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
              } else {
                var d = r3.a;
                var r4 = r3.b;
                var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
              }
            }
          }
        }
      });
      var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
      });
      var $elm$core$List$filter = F2(function(isGood, list) {
        return A3($elm$core$List$foldr, F2(function(x, xs) {
          return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }), _List_Nil, list);
      });
      var $elm$core$Basics$not = _Basics_not;
      var $author$project$Main$addStdlib = function(_v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        var stdlib = _List_fromArray([
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/array", _List_fromArray(["Array"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/compare", _List_fromArray(["Compare"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/function", _List_fromArray(["Function"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/logic", _List_fromArray(["Logic"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/math", _List_fromArray(["Math"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/maybe", _List_fromArray(["Maybe"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/object", _List_fromArray(["Object"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/promise", _List_fromArray(["Promise"]), _List_Nil),
          A3($ren_lang$compiler$Ren$AST$Module$Import, "pkg ren/string", _List_fromArray(["String"]), _List_Nil)
        ]);
        return {
          declarations,
          imports: _Utils_ap(imports, A2($elm$core$List$filter, function(_v1) {
            var name = _v1.name;
            return !A2($elm$core$List$any, A2($elm$core$Basics$composeR, function($) {
              return $.name;
            }, $elm$core$Basics$eq(name)), imports);
          }, stdlib))
        };
      };
      var $author$project$Data$Project$fromFiles = function(files) {
        return { files };
      };
      var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
      });
      var $elm$core$Dict$map = F2(function(func, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        } else {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, color, key, A2(func, key, value), A2($elm$core$Dict$map, func, left), A2($elm$core$Dict$map, func, right));
        }
      });
      var $author$project$Data$Project$map = F2(function(f, project) {
        return {
          files: A2($elm$core$Dict$map, $elm$core$Basics$always(f), project.files)
        };
      });
      var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
          return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
      });
      var $elm$core$String$replace = F3(function(before, after, string) {
        return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
      });
      var $elm$core$String$startsWith = _String_startsWith;
      var $author$project$Main$resolveImports = F2(function(renDir, _v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        return {
          declarations,
          imports: A2($elm$core$List$map, function(_v1) {
            var path = _v1.path;
            var name = _v1.name;
            var exposed = _v1.exposed;
            return {
              exposed,
              name,
              path: A2($elm$core$String$startsWith, "ext ", path) ? A3($elm$core$String$replace, "ext ", "", path) : A2($elm$core$String$startsWith, "pkg ", path) ? renDir + ("/deps/" + (A3($elm$core$String$replace, "pkg ", "", path) + ".ren.mjs")) : path + ".ren.mjs"
            };
          }, imports)
        };
      });
      var $elm$core$Result$andThen = F2(function(callback, result) {
        if (result.$ === "Ok") {
          var value = result.a;
          return callback(value);
        } else {
          var msg = result.a;
          return $elm$core$Result$Err(msg);
        }
      });
      var $elm$core$Result$map = F2(function(func, ra) {
        if (ra.$ === "Ok") {
          var a = ra.a;
          return $elm$core$Result$Ok(func(a));
        } else {
          var e = ra.a;
          return $elm$core$Result$Err(e);
        }
      });
      var $ren_lang$compiler$Ren$Compiler$run = function(_v0) {
        var parse = _v0.parse;
        var desugar = _v0.desugar;
        var validate = _v0.validate;
        var check = _v0.check;
        var optimise = _v0.optimise;
        var emit = _v0.emit;
        return A2($elm$core$Basics$composeR, parse, A2($elm$core$Basics$composeR, $elm$core$Result$map(desugar), A2($elm$core$Basics$composeR, $elm$core$Result$andThen(validate), A2($elm$core$Basics$composeR, $elm$core$Result$andThen(check), A2($elm$core$Basics$composeR, $elm$core$Result$map(optimise), $elm$core$Result$map(emit))))));
      };
      var $author$project$Data$Project$toFiles = function(project) {
        return project.files;
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule = { $: "ESModule" };
      var $ren_lang$compiler$Ren$Compiler$ParseError = function(a) {
        return { $: "ParseError", a };
      };
      var $ren_lang$compiler$Ren$Compiler$TypeError = function(a) {
        return { $: "TypeError", a };
      };
      var $ren_lang$compiler$Ren$AST$Module$map = F2(function(f, m) {
        return {
          declarations: A2($elm$core$List$map, f, m.declarations),
          imports: m.imports
        };
      });
      var $elm$core$Result$mapError = F2(function(f, result) {
        if (result.$ === "Ok") {
          var v = result.a;
          return $elm$core$Result$Ok(v);
        } else {
          var e = result.a;
          return $elm$core$Result$Err(f(e));
        }
      });
      var $ren_lang$compiler$Ren$Data$Type$Any = { $: "Any" };
      var $ren_lang$compiler$Ren$Data$Type$Hole = { $: "Hole" };
      var $ren_lang$compiler$Ren$Compiler$Check$TypeTooGeneral = F2(function(a, b) {
        return { $: "TypeTooGeneral", a, b };
      });
      var $ren_lang$compiler$Control$ResultM$andThen = F2(function(f, runA) {
        return function(context) {
          var _v0 = runA(context);
          if (_v0.b.$ === "Ok") {
            var ctx = _v0.a;
            var a = _v0.b.a;
            return A2(f, a, ctx);
          } else {
            var ctx = _v0.a;
            var e = _v0.b.a;
            return _Utils_Tuple2(ctx, $elm$core$Result$Err(e));
          }
        };
      });
      var $ren_lang$compiler$Control$ResultM$do = F2(function(runA, f) {
        return A2($ren_lang$compiler$Control$ResultM$andThen, f, runA);
      });
      var $ren_lang$compiler$Ren$AST$Expr$Access = F2(function(a, b) {
        return { $: "Access", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Annotation = F2(function(a, b) {
        return { $: "Annotation", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Application = F2(function(a, b) {
        return { $: "Application", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Array = function(a) {
        return { $: "Array", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Block = F2(function(a, b) {
        return { $: "Block", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Boolean = function(a) {
        return { $: "Boolean", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Conditional = F3(function(a, b, c) {
        return { $: "Conditional", a, b, c };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Error = function(a) {
        return { $: "Error", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Identifier = function(a) {
        return { $: "Identifier", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Infix = F3(function(a, b, c) {
        return { $: "Infix", a, b, c };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Lambda = F2(function(a, b) {
        return { $: "Lambda", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Literal = function(a) {
        return { $: "Literal", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Match = F2(function(a, b) {
        return { $: "Match", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$Number = function(a) {
        return { $: "Number", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Record = function(a) {
        return { $: "Record", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$String = function(a) {
        return { $: "String", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Template = function(a) {
        return { $: "Template", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Undefined = { $: "Undefined" };
      var $ren_lang$compiler$Ren$AST$Expr$Variant = F2(function(a, b) {
        return { $: "Variant", a, b };
      });
      var $elm$core$Basics$identity = function(x) {
        return x;
      };
      var $elm$core$Maybe$map = F2(function(f, maybe) {
        if (maybe.$ === "Just") {
          var value = maybe.a;
          return $elm$core$Maybe$Just(f(value));
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $ren_lang$compiler$Data$Tuple3$mapAll = F4(function(f, g, h, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        var c = _v0.c;
        return _Utils_Tuple3(f(a), g(b), h(c));
      });
      var $ren_lang$compiler$Data$Either$Left = function(a) {
        return { $: "Left", a };
      };
      var $ren_lang$compiler$Data$Either$Right = function(a) {
        return { $: "Right", a };
      };
      var $ren_lang$compiler$Data$Either$mapBoth = F3(function(f, g, either) {
        if (either.$ === "Left") {
          var a = either.a;
          return $ren_lang$compiler$Data$Either$Left(f(a));
        } else {
          var b = either.a;
          return $ren_lang$compiler$Data$Either$Right(g(b));
        }
      });
      var $elm$core$Tuple$mapSecond = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
      });
      var $ren_lang$compiler$Ren$AST$Expr$map = F2(function(f, expression) {
        switch (expression.$) {
          case "Access":
            var expr = expression.a;
            var accessors = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Access, f(expr), accessors);
          case "Application":
            var expr = expression.a;
            var args2 = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Application, f(expr), A2($elm$core$List$map, f, args2));
          case "Annotation":
            var expr = expression.a;
            var t = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Annotation, f(expr), t);
          case "Block":
            var bindings = expression.a;
            var body = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Block, A2($elm$core$List$map, $elm$core$Tuple$mapSecond(f), bindings), f(body));
          case "Conditional":
            var cond = expression.a;
            var _true = expression.b;
            var _false = expression.c;
            return A3($ren_lang$compiler$Ren$AST$Expr$Conditional, f(cond), f(_true), f(_false));
          case "Error":
            var e = expression.a;
            return $ren_lang$compiler$Ren$AST$Expr$Error(e);
          case "Identifier":
            var id = expression.a;
            return $ren_lang$compiler$Ren$AST$Expr$Identifier(id);
          case "Infix":
            var op = expression.a;
            var lhs = expression.b;
            var rhs = expression.c;
            return A3($ren_lang$compiler$Ren$AST$Expr$Infix, op, f(lhs), f(rhs));
          case "Lambda":
            var args2 = expression.a;
            var body = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Lambda, args2, f(body));
          case "Literal":
            switch (expression.a.$) {
              case "Array":
                var entries = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Array(A2($elm$core$List$map, f, entries)));
              case "Boolean":
                var b = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Boolean(b));
              case "Number":
                var n = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Number(n));
              case "Record":
                var entries = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Record(A2($elm$core$List$map, $elm$core$Tuple$mapSecond(f), entries)));
              case "String":
                var s = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$String(s));
              case "Template":
                var segments = expression.a.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Template(A2($elm$core$List$map, A2($ren_lang$compiler$Data$Either$mapBoth, $elm$core$Basics$identity, f), segments)));
              case "Undefined":
                var _v1 = expression.a;
                return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Undefined);
              default:
                var _v2 = expression.a;
                var tag = _v2.a;
                var args2 = _v2.b;
                return $ren_lang$compiler$Ren$AST$Expr$Literal(A2($ren_lang$compiler$Ren$AST$Expr$Variant, tag, A2($elm$core$List$map, f, args2)));
            }
          default:
            var expr = expression.a;
            var cases = expression.b;
            return A2($ren_lang$compiler$Ren$AST$Expr$Match, f(expr), A2($elm$core$List$map, A3($ren_lang$compiler$Data$Tuple3$mapAll, $elm$core$Basics$identity, $elm$core$Maybe$map(f), f), cases));
        }
      });
      var $ren_lang$compiler$Ren$AST$Expr$cata = F2(function(f, _v0) {
        var meta = _v0.a;
        var expression = _v0.b;
        return A2(f, meta, A2($ren_lang$compiler$Ren$AST$Expr$map, $ren_lang$compiler$Ren$AST$Expr$cata(f), expression));
      });
      var $ren_lang$compiler$Ren$Compiler$Check$InternalError = function(a) {
        return { $: "InternalError", a };
      };
      var $ren_lang$compiler$Control$ResultM$fail = function(e) {
        return function(context) {
          return _Utils_Tuple2(context, $elm$core$Result$Err(e));
        };
      };
      var $elm$core$Basics$composeL = F3(function(g, f, x) {
        return g(f(x));
      });
      var $elm$core$Set$Set_elm_builtin = function(a) {
        return { $: "Set_elm_builtin", a };
      };
      var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
      var $elm$core$Dict$foldl = F3(function(func, acc, dict) {
        foldl:
          while (true) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return acc;
            } else {
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldl, func, acc, left)), $temp$dict = right;
              func = $temp$func;
              acc = $temp$acc;
              dict = $temp$dict;
              continue foldl;
            }
          }
      });
      var $elm$core$Dict$singleton = F2(function(key, value) {
        return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
      });
      var $elm$core$Set$singleton = function(key) {
        return $elm$core$Set$Set_elm_builtin(A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
      };
      var $elm$core$Dict$union = F2(function(t1, t2) {
        return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
      });
      var $elm$core$Set$union = F2(function(_v0, _v1) {
        var dict1 = _v0.a;
        var dict2 = _v1.a;
        return $elm$core$Set$Set_elm_builtin(A2($elm$core$Dict$union, dict1, dict2));
      });
      var $ren_lang$compiler$Ren$Data$Type$free = function(type_) {
        switch (type_.$) {
          case "Var":
            var v = type_.a;
            return $elm$core$Set$singleton(v);
          case "Con":
            return $elm$core$Set$empty;
          case "App":
            var t1 = type_.a;
            var tN = type_.b;
            return A3($elm$core$List$foldl, A2($elm$core$Basics$composeL, $elm$core$Set$union, $ren_lang$compiler$Ren$Data$Type$free), $ren_lang$compiler$Ren$Data$Type$free(t1), tN);
          case "Fun":
            var t1 = type_.a;
            var t2 = type_.b;
            return A2($elm$core$Set$union, $ren_lang$compiler$Ren$Data$Type$free(t1), $ren_lang$compiler$Ren$Data$Type$free(t2));
          case "Rec":
            var tN = type_.a;
            return A3($elm$core$Dict$foldl, $elm$core$Basics$always(A2($elm$core$Basics$composeL, $elm$core$Set$union, $ren_lang$compiler$Ren$Data$Type$free)), $elm$core$Set$empty, tN);
          case "Any":
            return $elm$core$Set$empty;
          default:
            return $elm$core$Set$empty;
        }
      };
      var $elm$core$Dict$values = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, valueList) {
          return A2($elm$core$List$cons, value, valueList);
        }), _List_Nil, dict);
      };
      var $ren_lang$compiler$Ren$Data$Monoenv$free = function(env) {
        return A3($elm$core$List$foldl, A2($elm$core$Basics$composeL, $elm$core$Set$union, $ren_lang$compiler$Ren$Data$Type$free), $elm$core$Set$empty, $elm$core$Dict$values(env));
      };
      var $ren_lang$compiler$Ren$Data$Typing$free = function(_v0) {
        var env_ = _v0.a;
        var t = _v0.b;
        return A2($elm$core$Set$union, $ren_lang$compiler$Ren$Data$Type$free(t), $ren_lang$compiler$Ren$Data$Monoenv$free(env_));
      };
      var $elm$core$Set$foldl = F3(function(func, initialState, _v0) {
        var dict = _v0.a;
        return A3($elm$core$Dict$foldl, F3(function(key, _v1, state) {
          return A2(func, key, state);
        }), initialState, dict);
      });
      var $ren_lang$compiler$Ren$Data$Type$Var = function(a) {
        return { $: "Var", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Check$next = function(context) {
        var vars = context.vars;
        if (vars.b) {
          var _var = vars.a;
          var rest = vars.b;
          return _Utils_Tuple2(_Utils_update(context, { vars: rest }), $elm$core$Result$Ok($ren_lang$compiler$Ren$Data$Type$Var(_var)));
        } else {
          return _Utils_Tuple2(context, $elm$core$Result$Err($ren_lang$compiler$Ren$Compiler$Check$InternalError("Ran out of fresh type variables.")));
        }
      };
      var $ren_lang$compiler$Control$ResultM$succeed = function(a) {
        return function(context) {
          return _Utils_Tuple2(context, $elm$core$Result$Ok(a));
        };
      };
      var $ren_lang$compiler$Ren$Compiler$Check$fresh = function(name) {
        return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
          return _Utils_eq($ren_lang$compiler$Ren$Data$Type$Var(name), a) ? $ren_lang$compiler$Ren$Compiler$Check$fresh(name) : $ren_lang$compiler$Control$ResultM$succeed(a);
        });
      };
      var $ren_lang$compiler$Ren$Data$Substitution$singleton = $elm$core$Dict$singleton;
      var $ren_lang$compiler$Ren$Data$Type$App = F2(function(a, b) {
        return { $: "App", a, b };
      });
      var $ren_lang$compiler$Ren$Data$Type$Con = function(a) {
        return { $: "Con", a };
      };
      var $ren_lang$compiler$Ren$Data$Type$Fun = F2(function(a, b) {
        return { $: "Fun", a, b };
      });
      var $ren_lang$compiler$Ren$Data$Type$Rec = function(a) {
        return { $: "Rec", a };
      };
      var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get:
          while (true) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return $elm$core$Maybe$Nothing;
            } else {
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              var _v1 = A2($elm$core$Basics$compare, targetKey, key);
              switch (_v1.$) {
                case "LT":
                  var $temp$targetKey = targetKey, $temp$dict = left;
                  targetKey = $temp$targetKey;
                  dict = $temp$dict;
                  continue get;
                case "EQ":
                  return $elm$core$Maybe$Just(value);
                default:
                  var $temp$targetKey = targetKey, $temp$dict = right;
                  targetKey = $temp$targetKey;
                  dict = $temp$dict;
                  continue get;
              }
            }
          }
      });
      var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === "Just") {
          var value = maybe.a;
          return value;
        } else {
          return _default;
        }
      });
      var $ren_lang$compiler$Ren$Data$Type$substitute = F2(function(s, t) {
        switch (t.$) {
          case "Var":
            var v = t.a;
            return A2($elm$core$Maybe$withDefault, $ren_lang$compiler$Ren$Data$Type$Var(v), A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$Data$Type$substitute(s), A2($elm$core$Dict$get, v, s)));
          case "Con":
            var c = t.a;
            return $ren_lang$compiler$Ren$Data$Type$Con(c);
          case "App":
            var t1 = t.a;
            var tN = t.b;
            return A2($ren_lang$compiler$Ren$Data$Type$App, A2($ren_lang$compiler$Ren$Data$Type$substitute, s, t1), A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Type$substitute(s), tN));
          case "Fun":
            var t1 = t.a;
            var t2 = t.b;
            return A2($ren_lang$compiler$Ren$Data$Type$Fun, A2($ren_lang$compiler$Ren$Data$Type$substitute, s, t1), A2($ren_lang$compiler$Ren$Data$Type$substitute, s, t2));
          case "Rec":
            var tN = t.a;
            return $ren_lang$compiler$Ren$Data$Type$Rec(A2($elm$core$Dict$map, $elm$core$Basics$always($ren_lang$compiler$Ren$Data$Type$substitute(s)), tN));
          case "Any":
            return $ren_lang$compiler$Ren$Data$Type$Any;
          default:
            return $ren_lang$compiler$Ren$Data$Type$Hole;
        }
      });
      var $ren_lang$compiler$Ren$Data$Monoenv$substitute = F2(function(s, env) {
        return A2($elm$core$Dict$map, $elm$core$Basics$always($ren_lang$compiler$Ren$Data$Type$substitute(s)), env);
      });
      var $ren_lang$compiler$Ren$Data$Typing$substitute = F2(function(s, _v0) {
        var env_ = _v0.a;
        var t = _v0.b;
        return _Utils_Tuple2(A2($ren_lang$compiler$Ren$Data$Monoenv$substitute, s, env_), A2($ren_lang$compiler$Ren$Data$Type$substitute, s, t));
      });
      var $ren_lang$compiler$Ren$Compiler$Check$inst = function(typing) {
        return A3($elm$core$Set$foldl, F2(function(v, inst_) {
          return A2($ren_lang$compiler$Control$ResultM$do, inst_, function(t) {
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$fresh(v), function(a) {
              return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$substitute, A2($ren_lang$compiler$Ren$Data$Substitution$singleton, v, a), t));
            });
          });
        }), $ren_lang$compiler$Control$ResultM$succeed(typing), $ren_lang$compiler$Ren$Data$Typing$free(typing));
      };
      var $elm$core$Basics$neq = _Utils_notEqual;
      var $ren_lang$compiler$Ren$Data$Monoenv$empty = $elm$core$Dict$empty;
      var $ren_lang$compiler$Ren$Data$Typing$poly = function(t) {
        return _Utils_Tuple2($ren_lang$compiler$Ren$Data$Monoenv$empty, t);
      };
      var $ren_lang$compiler$Ren$Data$Substitution$empty = $elm$core$Dict$empty;
      var $elm$core$String$cons = _String_cons;
      var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, "");
      };
      var $elm$core$Char$fromCode = _Char_fromCode;
      var $elm$core$Basics$ge = _Utils_ge;
      var $elm$core$Basics$modBy = _Basics_modBy;
      var $ren_lang$compiler$Ren$Data$Type$var = function(n) {
        return n >= 26 ? _Utils_ap($ren_lang$compiler$Ren$Data$Type$var((n / 26 | 0) - 1), $ren_lang$compiler$Ren$Data$Type$var(A2($elm$core$Basics$modBy, 26, n))) : $elm$core$String$fromChar($elm$core$Char$fromCode(97 + A2($elm$core$Basics$modBy, 26, n)));
      };
      var $ren_lang$compiler$Ren$Data$Typing$simplify = function(typing) {
        var s = F2(function(i, v) {
          return _Utils_eq($ren_lang$compiler$Ren$Data$Type$var(i), v) ? $ren_lang$compiler$Ren$Data$Substitution$empty : A2($ren_lang$compiler$Ren$Data$Substitution$singleton, v, $ren_lang$compiler$Ren$Data$Type$Var($ren_lang$compiler$Ren$Data$Type$var(i)));
        });
        return A3($elm$core$List$foldl, $ren_lang$compiler$Ren$Data$Typing$substitute, typing, A2($elm$core$List$indexedMap, s, $elm$core$Set$toList($ren_lang$compiler$Ren$Data$Typing$free(typing))));
      };
      var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
      };
      var $ren_lang$compiler$Ren$Data$Typing$type_ = $elm$core$Tuple$second;
      var $elm$core$Tuple$pair = F2(function(a, b) {
        return _Utils_Tuple2(a, b);
      });
      var $ren_lang$compiler$Ren$Data$Typing$from = $elm$core$Tuple$pair;
      var $ren_lang$compiler$Ren$Data$Monoenv$merge = F3(function(s, a, b) {
        return A2($elm$core$Dict$union, A2($ren_lang$compiler$Ren$Data$Monoenv$substitute, s, a), A2($ren_lang$compiler$Ren$Data$Monoenv$substitute, s, b));
      });
      var $ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes = F2(function(a, b) {
        return { $: "IncompatibleTypes", a, b };
      });
      var $ren_lang$compiler$Ren$Compiler$Check$InfiniteType = F2(function(a, b) {
        return { $: "InfiniteType", a, b };
      });
      var $ren_lang$compiler$Ren$Data$Substitution$compose = F3(function(apply, s1, s2) {
        return A2($elm$core$Dict$union, s1, A2($elm$core$Dict$map, $elm$core$Basics$always(apply(s1)), s2));
      });
      var $ren_lang$compiler$Control$ResultM$map = F2(function(f, runA) {
        return function(context) {
          return A2($elm$core$Tuple$mapSecond, $elm$core$Result$map(f), runA(context));
        };
      });
      var $elm$core$Tuple$mapBoth = F3(function(funcA, funcB, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(funcA(x), funcB(y));
      });
      var $elm$core$Dict$member = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$get, key, dict);
        if (_v0.$ === "Just") {
          return true;
        } else {
          return false;
        }
      });
      var $elm$core$Set$member = F2(function(key, _v0) {
        var dict = _v0.a;
        return A2($elm$core$Dict$member, key, dict);
      });
      var $elm$core$Dict$sizeHelp = F2(function(n, dict) {
        sizeHelp:
          while (true) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return n;
            } else {
              var left = dict.d;
              var right = dict.e;
              var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right), $temp$dict = left;
              n = $temp$n;
              dict = $temp$dict;
              continue sizeHelp;
            }
          }
      });
      var $elm$core$Dict$size = function(dict) {
        return A2($elm$core$Dict$sizeHelp, 0, dict);
      };
      var $ren_lang$compiler$Ren$Compiler$Check$mgu = function(equations) {
        mgu:
          while (true) {
            _v0$2:
              while (true) {
                _v0$3:
                  while (true) {
                    _v0$4:
                      while (true) {
                        _v0$10:
                          while (true) {
                            if (!equations.b) {
                              return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Substitution$empty);
                            } else {
                              switch (equations.a.a.$) {
                                case "Hole":
                                  var _v1 = equations.a;
                                  var _v2 = _v1.a;
                                  var rest = equations.b;
                                  var $temp$equations = rest;
                                  equations = $temp$equations;
                                  continue mgu;
                                case "Var":
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$3;
                                    default:
                                      break _v0$3;
                                  }
                                case "Con":
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$4;
                                    case "Con":
                                      var _v7 = equations.a;
                                      var c1 = _v7.a.a;
                                      var c2 = _v7.b.a;
                                      var rest = equations.b;
                                      if (_Utils_eq(c1, c2)) {
                                        var $temp$equations = rest;
                                        equations = $temp$equations;
                                        continue mgu;
                                      } else {
                                        return $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes, $ren_lang$compiler$Ren$Data$Type$Con(c1), $ren_lang$compiler$Ren$Data$Type$Con(c2)));
                                      }
                                    default:
                                      break _v0$10;
                                  }
                                case "Any":
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$4;
                                    case "Any":
                                      var _v8 = equations.a;
                                      var _v9 = _v8.a;
                                      var _v10 = _v8.b;
                                      var rest = equations.b;
                                      var $temp$equations = rest;
                                      equations = $temp$equations;
                                      continue mgu;
                                    default:
                                      break _v0$10;
                                  }
                                case "Fun":
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$4;
                                    case "Fun":
                                      var _v11 = equations.a;
                                      var _v12 = _v11.a;
                                      var t1 = _v12.a;
                                      var u1 = _v12.b;
                                      var _v13 = _v11.b;
                                      var t2 = _v13.a;
                                      var u2 = _v13.b;
                                      var rest = equations.b;
                                      return $ren_lang$compiler$Ren$Compiler$Check$mgu(_Utils_ap(rest, _List_fromArray([
                                        _Utils_Tuple2(t1, t2),
                                        _Utils_Tuple2(u1, u2)
                                      ])));
                                    default:
                                      break _v0$10;
                                  }
                                case "App":
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$4;
                                    case "App":
                                      var _v14 = equations.a;
                                      var _v15 = _v14.a;
                                      var t1 = _v15.a;
                                      var u1 = _v15.b;
                                      var _v16 = _v14.b;
                                      var t2 = _v16.a;
                                      var u2 = _v16.b;
                                      var rest = equations.b;
                                      return !_Utils_eq($elm$core$List$length(u1), $elm$core$List$length(u2)) ? $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes, A2($ren_lang$compiler$Ren$Data$Type$App, t1, u1), A2($ren_lang$compiler$Ren$Data$Type$App, t2, u2))) : $ren_lang$compiler$Ren$Compiler$Check$mgu(_Utils_ap(rest, A2($elm$core$List$cons, _Utils_Tuple2(t1, t2), A3($elm$core$List$map2, $elm$core$Tuple$pair, u1, u2))));
                                    default:
                                      break _v0$10;
                                  }
                                default:
                                  switch (equations.a.b.$) {
                                    case "Hole":
                                      break _v0$2;
                                    case "Var":
                                      break _v0$4;
                                    case "Rec":
                                      var _v17 = equations.a;
                                      var t1 = _v17.a.a;
                                      var t2 = _v17.b.a;
                                      var rest = equations.b;
                                      return !_Utils_eq($elm$core$Dict$size(t1), $elm$core$Dict$size(t2)) ? $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes, $ren_lang$compiler$Ren$Data$Type$Rec(t1), $ren_lang$compiler$Ren$Data$Type$Rec(t2))) : !_Utils_eq($elm$core$Dict$keys(t1), $elm$core$Dict$keys(t2)) ? $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes, $ren_lang$compiler$Ren$Data$Type$Rec(t1), $ren_lang$compiler$Ren$Data$Type$Rec(t2))) : $ren_lang$compiler$Ren$Compiler$Check$mgu(_Utils_ap(rest, A3($elm$core$List$map2, $elm$core$Tuple$pair, $elm$core$Dict$values(t1), $elm$core$Dict$values(t2))));
                                    default:
                                      break _v0$10;
                                  }
                              }
                            }
                          }
                        var _v18 = equations.a;
                        var t1 = _v18.a;
                        var t2 = _v18.b;
                        return $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$IncompatibleTypes, t1, t2));
                      }
                    var _v6 = equations.a;
                    var t = _v6.a;
                    var a = _v6.b.a;
                    var rest = equations.b;
                    return $ren_lang$compiler$Ren$Compiler$Check$mgu(A2($elm$core$List$cons, _Utils_Tuple2($ren_lang$compiler$Ren$Data$Type$Var(a), t), rest));
                  }
                var _v5 = equations.a;
                var a = _v5.a.a;
                var t = _v5.b;
                var rest = equations.b;
                var s = A2($ren_lang$compiler$Ren$Data$Substitution$singleton, a, t);
                if (_Utils_eq($ren_lang$compiler$Ren$Data$Type$Var(a), t)) {
                  var $temp$equations = rest;
                  equations = $temp$equations;
                  continue mgu;
                } else {
                  if (A2($elm$core$Set$member, a, $ren_lang$compiler$Ren$Data$Type$free(t))) {
                    return $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$InfiniteType, $ren_lang$compiler$Ren$Data$Type$Var(a), t));
                  } else {
                    return A2($ren_lang$compiler$Control$ResultM$map, A2($ren_lang$compiler$Ren$Data$Substitution$compose, $ren_lang$compiler$Ren$Data$Type$substitute, s), $ren_lang$compiler$Ren$Compiler$Check$mgu(A2($elm$core$List$map, A2($elm$core$Tuple$mapBoth, $ren_lang$compiler$Ren$Data$Type$substitute(s), $ren_lang$compiler$Ren$Data$Type$substitute(s)), rest)));
                  }
                }
              }
            var _v3 = equations.a;
            var _v4 = _v3.b;
            var rest = equations.b;
            var $temp$equations = rest;
            equations = $temp$equations;
            continue mgu;
          }
      };
      var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) {
          return xs;
        } else {
          return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
        }
      });
      var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
      };
      var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
      });
      var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === "Just") {
          var x = _v0.a;
          return A2($elm$core$List$cons, x, xs);
        } else {
          return xs;
        }
      });
      var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
      });
      var $elm$core$Set$insert = F2(function(key, _v0) {
        var dict = _v0.a;
        return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
      });
      var $elm$core$Set$fromList = function(list) {
        return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
      };
      var $ren_lang$compiler$Control$ResultM$andMap = F2(function(runA, runF) {
        return function(context) {
          var _v0 = runF(context);
          if (_v0.b.$ === "Ok") {
            var ctx = _v0.a;
            var f = _v0.b.a;
            return A3($ren_lang$compiler$Control$ResultM$map, f, runA, ctx);
          } else {
            var ctx = _v0.a;
            var e = _v0.b.a;
            return _Utils_Tuple2(ctx, $elm$core$Result$Err(e));
          }
        };
      });
      var $ren_lang$compiler$Control$ResultM$map2 = F3(function(f, runA, runB) {
        return A2($ren_lang$compiler$Control$ResultM$andMap, runB, A2($ren_lang$compiler$Control$ResultM$andMap, runA, $ren_lang$compiler$Control$ResultM$succeed(f)));
      });
      var $ren_lang$compiler$Control$ResultM$mapM = F2(function(f, xs) {
        return A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$reverse, A3($elm$core$List$foldl, A2($elm$core$Basics$composeL, $ren_lang$compiler$Control$ResultM$map2($elm$core$List$cons), f), $ren_lang$compiler$Control$ResultM$succeed(_List_Nil), xs));
      });
      var $ren_lang$compiler$Ren$Compiler$Check$monoeqs = function(monoenvs) {
        var eq = function(_var) {
          return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(tv) {
            return $ren_lang$compiler$Control$ResultM$succeed(_Utils_Tuple2(_var, tv));
          });
        };
        var env = A2($elm$core$List$concatMap, $elm$core$Dict$toList, monoenvs);
        var names = $elm$core$Set$toList($elm$core$Set$fromList(A2($elm$core$List$map, $elm$core$Tuple$first, env)));
        return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $elm$core$Dict$fromList, A2($ren_lang$compiler$Control$ResultM$mapM, eq, names)), function(vars) {
          var makeEq = function(_v0) {
            var _var = _v0.a;
            var t = _v0.b;
            return A2($elm$core$Maybe$map, function(a) {
              return _Utils_Tuple2(a, t);
            }, A2($elm$core$Dict$get, _var, vars));
          };
          return $ren_lang$compiler$Control$ResultM$succeed(A2($elm$core$List$filterMap, makeEq, env));
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Check$setSubstitution = function(substitution) {
        return function(context) {
          return _Utils_Tuple2(_Utils_update(context, { substitution }), $elm$core$Result$Ok(_Utils_Tuple0));
        };
      };
      var $ren_lang$compiler$Ren$Compiler$Check$unify = F2(function(monoenvs, ts) {
        return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
          return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$monoeqs(monoenvs), function(eqs) {
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$mgu(_Utils_ap(eqs, A2($elm$core$List$map, $elm$core$Tuple$pair(a), ts))), function(s) {
              return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$setSubstitution(s), function(_v0) {
                return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, A3($elm$core$List$foldl, $ren_lang$compiler$Ren$Data$Monoenv$merge(s), $ren_lang$compiler$Ren$Data$Monoenv$empty, monoenvs), A2($ren_lang$compiler$Ren$Data$Type$substitute, s, a)));
              });
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$annotation = F2(function(inferExpr, ann) {
        return _Utils_eq(ann, $ren_lang$compiler$Ren$Data$Type$Any) ? $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Any)) : A2($ren_lang$compiler$Control$ResultM$do, inferExpr, function(_v0) {
          var envExpr = _v0.a;
          var tExpr = _v0.b;
          return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$inst($ren_lang$compiler$Ren$Data$Typing$poly(ann)), function(_v1) {
            var envAnn = _v1.a;
            var tAnn = _v1.b;
            return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envExpr]), _List_fromArray([tExpr, tAnn])), function(t) {
              return _Utils_eq(ann, $ren_lang$compiler$Ren$Data$Type$Hole) ? $ren_lang$compiler$Control$ResultM$succeed(_Utils_Tuple2(envExpr, tExpr)) : !_Utils_eq($ren_lang$compiler$Ren$Data$Typing$free($ren_lang$compiler$Ren$Data$Typing$simplify(t)), $ren_lang$compiler$Ren$Data$Typing$free($ren_lang$compiler$Ren$Data$Typing$simplify(_Utils_Tuple2(envAnn, tAnn)))) ? $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$TypeTooGeneral, ann, $ren_lang$compiler$Ren$Data$Typing$type_(t))) : $ren_lang$compiler$Control$ResultM$succeed(t);
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$getSubstitution = function(context) {
        var substitution = context.substitution;
        return _Utils_Tuple2(context, $elm$core$Result$Ok(substitution));
      };
      var $ren_lang$compiler$Ren$Compiler$Check$application_ = F2(function(inferFun, inferArg) {
        return A2($ren_lang$compiler$Control$ResultM$do, inferFun, function(_v0) {
          var envFun = _v0.a;
          var tFun = _v0.b;
          return A2($ren_lang$compiler$Control$ResultM$do, inferArg, function(_v1) {
            var envArg = _v1.a;
            var tArg = _v1.b;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envFun, envArg]), _List_fromArray([
                tFun,
                A2($ren_lang$compiler$Ren$Data$Type$Fun, tArg, a)
              ])), function(_v2) {
                var env = _v2.a;
                var t = _v2.b;
                if (t.$ === "Fun") {
                  var r = t.b;
                  return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$getSubstitution, function(s) {
                    return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$substitute, s, _Utils_Tuple2(env, r)));
                  });
                } else {
                  return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(b) {
                    return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$getSubstitution, function(s) {
                      return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$substitute, s, _Utils_Tuple2(env, b)));
                    });
                  });
                }
              });
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$application = F2(function(inferFun, inferArgs) {
        return A3($elm$core$List$foldl, F2(function(a, f) {
          return A2($ren_lang$compiler$Ren$Compiler$Check$application_, f, a);
        }), inferFun, inferArgs);
      });
      var $ren_lang$compiler$Ren$Data$Typing$env = $elm$core$Tuple$first;
      var $ren_lang$compiler$Ren$Compiler$Check$extend = F2(function(_var, typing) {
        return function(context) {
          var polyenv = context.polyenv;
          return _Utils_Tuple2(_Utils_update(context, {
            polyenv: A3($elm$core$Dict$insert, _var, typing, polyenv)
          }), $elm$core$Result$Ok(_Utils_Tuple0));
        };
      });
      var $elm$core$Dict$filter = F2(function(isGood, dict) {
        return A3($elm$core$Dict$foldl, F3(function(k, v, d) {
          return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
        }), $elm$core$Dict$empty, dict);
      });
      var $elm$core$Dict$intersect = F2(function(t1, t2) {
        return A2($elm$core$Dict$filter, F2(function(k, _v0) {
          return A2($elm$core$Dict$member, k, t2);
        }), t1);
      });
      var $elm$core$Set$intersect = F2(function(_v0, _v1) {
        var dict1 = _v0.a;
        var dict2 = _v1.a;
        return $elm$core$Set$Set_elm_builtin(A2($elm$core$Dict$intersect, dict1, dict2));
      });
      var $elm$core$Dict$isEmpty = function(dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return true;
        } else {
          return false;
        }
      };
      var $elm$core$Set$isEmpty = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$isEmpty(dict);
      };
      var $elm$core$Dict$getMin = function(dict) {
        getMin:
          while (true) {
            if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
              var left = dict.d;
              var $temp$dict = left;
              dict = $temp$dict;
              continue getMin;
            } else {
              return dict;
            }
          }
      };
      var $elm$core$Dict$moveRedLeft = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
          if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var lLeft = _v1.d;
            var lRight = _v1.e;
            var _v2 = dict.e;
            var rClr = _v2.a;
            var rK = _v2.b;
            var rV = _v2.c;
            var rLeft = _v2.d;
            var _v3 = rLeft.a;
            var rlK = rLeft.b;
            var rlV = rLeft.c;
            var rlL = rLeft.d;
            var rlR = rLeft.e;
            var rRight = _v2.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rlK, rlV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), rlL), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v4 = dict.d;
            var lClr = _v4.a;
            var lK = _v4.b;
            var lV = _v4.c;
            var lLeft = _v4.d;
            var lRight = _v4.e;
            var _v5 = dict.e;
            var rClr = _v5.a;
            var rK = _v5.b;
            var rV = _v5.c;
            var rLeft = _v5.d;
            var rRight = _v5.e;
            if (clr.$ === "Black") {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$moveRedRight = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
          if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var _v2 = _v1.d;
            var _v3 = _v2.a;
            var llK = _v2.b;
            var llV = _v2.c;
            var llLeft = _v2.d;
            var llRight = _v2.e;
            var lRight = _v1.e;
            var _v4 = dict.e;
            var rClr = _v4.a;
            var rK = _v4.b;
            var rV = _v4.c;
            var rLeft = _v4.d;
            var rRight = _v4.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, lRight, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v5 = dict.d;
            var lClr = _v5.a;
            var lK = _v5.b;
            var lV = _v5.c;
            var lLeft = _v5.d;
            var lRight = _v5.e;
            var _v6 = dict.e;
            var rClr = _v6.a;
            var rK = _v6.b;
            var rV = _v6.c;
            var rLeft = _v6.d;
            var rRight = _v6.e;
            if (clr.$ === "Black") {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$removeHelpPrepEQGT = F7(function(targetKey, dict, color, key, value, left, right) {
        if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
          var _v1 = left.a;
          var lK = left.b;
          var lV = left.c;
          var lLeft = left.d;
          var lRight = left.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, color, lK, lV, lLeft, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
        } else {
          _v2$2:
            while (true) {
              if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
                if (right.d.$ === "RBNode_elm_builtin") {
                  if (right.d.a.$ === "Black") {
                    var _v3 = right.a;
                    var _v4 = right.d;
                    var _v5 = _v4.a;
                    return $elm$core$Dict$moveRedRight(dict);
                  } else {
                    break _v2$2;
                  }
                } else {
                  var _v6 = right.a;
                  var _v7 = right.d;
                  return $elm$core$Dict$moveRedRight(dict);
                }
              } else {
                break _v2$2;
              }
            }
          return dict;
        }
      });
      var $elm$core$Dict$removeMin = function(dict) {
        if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var lColor = left.a;
          var lLeft = left.d;
          var right = dict.e;
          if (lColor.$ === "Black") {
            if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
              var _v3 = lLeft.a;
              return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
            } else {
              var _v4 = $elm$core$Dict$moveRedLeft(dict);
              if (_v4.$ === "RBNode_elm_builtin") {
                var nColor = _v4.a;
                var nKey = _v4.b;
                var nValue = _v4.c;
                var nLeft = _v4.d;
                var nRight = _v4.e;
                return A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
              } else {
                return $elm$core$Dict$RBEmpty_elm_builtin;
              }
            }
          } else {
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
          }
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      };
      var $elm$core$Dict$removeHelp = F2(function(targetKey, dict) {
        if (dict.$ === "RBEmpty_elm_builtin") {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        } else {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          if (_Utils_cmp(targetKey, key) < 0) {
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
              var _v4 = left.a;
              var lLeft = left.d;
              if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                var _v6 = lLeft.a;
                return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
              } else {
                var _v7 = $elm$core$Dict$moveRedLeft(dict);
                if (_v7.$ === "RBNode_elm_builtin") {
                  var nColor = _v7.a;
                  var nKey = _v7.b;
                  var nValue = _v7.c;
                  var nLeft = _v7.d;
                  var nRight = _v7.e;
                  return A5($elm$core$Dict$balance, nColor, nKey, nValue, A2($elm$core$Dict$removeHelp, targetKey, nLeft), nRight);
                } else {
                  return $elm$core$Dict$RBEmpty_elm_builtin;
                }
              }
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
            }
          } else {
            return A2($elm$core$Dict$removeHelpEQGT, targetKey, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
          }
        }
      });
      var $elm$core$Dict$removeHelpEQGT = F2(function(targetKey, dict) {
        if (dict.$ === "RBNode_elm_builtin") {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var right = dict.e;
          if (_Utils_eq(targetKey, key)) {
            var _v1 = $elm$core$Dict$getMin(right);
            if (_v1.$ === "RBNode_elm_builtin") {
              var minKey = _v1.b;
              var minValue = _v1.c;
              return A5($elm$core$Dict$balance, color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
            } else {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            }
          } else {
            return A5($elm$core$Dict$balance, color, key, value, left, A2($elm$core$Dict$removeHelp, targetKey, right));
          }
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      });
      var $elm$core$Dict$remove = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
        if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
          var _v1 = _v0.a;
          var k = _v0.b;
          var v = _v0.c;
          var l = _v0.d;
          var r = _v0.e;
          return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
          var x = _v0;
          return x;
        }
      });
      var $ren_lang$compiler$Ren$Data$Monoenv$remove = $elm$core$Dict$remove;
      var $ren_lang$compiler$Ren$Data$Typing$reduce = F2(function(_var, _v0) {
        var env_ = _v0.a;
        var t = _v0.b;
        var tau_ftv = $ren_lang$compiler$Ren$Data$Type$free(t);
        var keep = function(s) {
          return !$elm$core$Set$isEmpty(A2($elm$core$Set$intersect, $ren_lang$compiler$Ren$Data$Type$free(s), tau_ftv));
        };
        var delta = A2($elm$core$Dict$filter, $elm$core$Basics$always(keep), A2($ren_lang$compiler$Ren$Data$Monoenv$remove, _var, env_));
        return A2($ren_lang$compiler$Ren$Data$Typing$from, delta, t);
      });
      var $ren_lang$compiler$Ren$Compiler$Check$block = F2(function(bindings, inferExpr) {
        if (!bindings.b) {
          return inferExpr;
        } else {
          if (!bindings.b.b) {
            var _v1 = bindings.a;
            var _var = _v1.a;
            var inferBinding = _v1.b;
            return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $ren_lang$compiler$Ren$Data$Typing$reduce(_var), inferBinding), function(binding) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$extend, _var, binding), function(_v2) {
                return A2($ren_lang$compiler$Control$ResultM$do, inferExpr, function(expr) {
                  return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([
                    $ren_lang$compiler$Ren$Data$Typing$env(expr),
                    $ren_lang$compiler$Ren$Data$Typing$env(binding)
                  ]), _List_Nil), function(_v3) {
                    return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$getSubstitution, function(s) {
                      return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, A3($ren_lang$compiler$Ren$Data$Monoenv$merge, s, $ren_lang$compiler$Ren$Data$Typing$env(expr), $ren_lang$compiler$Ren$Data$Typing$env(binding)), $ren_lang$compiler$Ren$Data$Typing$type_(expr)));
                    });
                  });
                });
              });
            });
          } else {
            var _v4 = bindings.a;
            var _var = _v4.a;
            var inferBinding = _v4.b;
            var rest = bindings.b;
            return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $ren_lang$compiler$Ren$Data$Typing$reduce(_var), inferBinding), function(binding) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$extend, _var, binding), function(_v5) {
                return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$block, rest, inferExpr), function(expr) {
                  return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([
                    $ren_lang$compiler$Ren$Data$Typing$env(expr),
                    $ren_lang$compiler$Ren$Data$Typing$env(binding)
                  ]), _List_Nil), function(_v6) {
                    return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$getSubstitution, function(s) {
                      return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, A3($ren_lang$compiler$Ren$Data$Monoenv$merge, s, $ren_lang$compiler$Ren$Data$Typing$env(expr), $ren_lang$compiler$Ren$Data$Typing$env(binding)), $ren_lang$compiler$Ren$Data$Typing$type_(expr)));
                    });
                  });
                });
              });
            });
          }
        }
      });
      var $ren_lang$compiler$Ren$Data$Type$boolean = $ren_lang$compiler$Ren$Data$Type$Con("Boolean");
      var $ren_lang$compiler$Ren$Compiler$Check$conditional = F3(function(inferCond, inferTrue, inferFalse) {
        return A2($ren_lang$compiler$Control$ResultM$do, inferCond, function(cond) {
          return A2($ren_lang$compiler$Control$ResultM$do, inferTrue, function(_true) {
            return A2($ren_lang$compiler$Control$ResultM$do, inferFalse, function(_false) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([
                $ren_lang$compiler$Ren$Data$Typing$env(cond)
              ]), _List_fromArray([
                $ren_lang$compiler$Ren$Data$Typing$type_(cond),
                $ren_lang$compiler$Ren$Data$Type$boolean
              ])), function(t) {
                return A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([
                  $ren_lang$compiler$Ren$Data$Typing$env(t),
                  $ren_lang$compiler$Ren$Data$Typing$env(_true),
                  $ren_lang$compiler$Ren$Data$Typing$env(_false)
                ]), _List_fromArray([
                  $ren_lang$compiler$Ren$Data$Typing$type_(_true),
                  $ren_lang$compiler$Ren$Data$Typing$type_(_false)
                ]));
              });
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$lookup = function(name) {
        return function(context) {
          var polyenv = context.polyenv;
          return _Utils_Tuple2(context, $elm$core$Result$Ok(A2($elm$core$Dict$get, name, polyenv)));
        };
      };
      var $ren_lang$compiler$Ren$Data$Monoenv$singleton = $elm$core$Dict$singleton;
      var $ren_lang$compiler$Ren$Data$Typing$mono = F2(function(v, t) {
        return _Utils_Tuple2(A2($ren_lang$compiler$Ren$Data$Monoenv$singleton, v, t), t);
      });
      var $ren_lang$compiler$Ren$Compiler$Check$identifier = function(id) {
        switch (id.$) {
          case "Local":
            var name = id.a;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$lookup(name), function(t) {
              if (t.$ === "Just") {
                var typing = t.a;
                return $ren_lang$compiler$Ren$Compiler$Check$inst(typing);
              } else {
                return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
                  return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$mono, name, a));
                });
              }
            });
          case "Scoped":
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for scoped identifiers is currently not supported!"));
          default:
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for placeholder identifiers is currently not supported!"));
        }
      };
      var $ren_lang$compiler$Ren$AST$Expr$internalOperatorName = function(op) {
        switch (op.$) {
          case "Pipe":
            return "$op_pipe";
          case "Compose":
            return "$op_compose";
          case "Add":
            return "$op_add";
          case "Sub":
            return "$op_sub";
          case "Mul":
            return "$op_mul";
          case "Div":
            return "$op_div";
          case "Pow":
            return "$op_pow";
          case "Mod":
            return "$op_mod";
          case "Eq":
            return "$op_eq";
          case "NotEq":
            return "$op_notEq";
          case "Lt":
            return "$op_lt";
          case "Lte":
            return "$op_lte";
          case "Gt":
            return "$op_gt";
          case "Gte":
            return "$op_gte";
          case "And":
            return "$op_and";
          case "Or":
            return "$op_or";
          case "Cons":
            return "$op_cons";
          default:
            return "$op_join";
        }
      };
      var $ren_lang$compiler$Ren$Compiler$Check$lookupBuiltin = function(name) {
        return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$lookup(name), function(typing) {
          if (typing.$ === "Just") {
            var t = typing.a;
            return $ren_lang$compiler$Ren$Compiler$Check$inst(t);
          } else {
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Missing typing for builtin: `" + (name + "`")));
          }
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Check$infix_ = F3(function(op, lhs, rhs) {
        return A2($ren_lang$compiler$Ren$Compiler$Check$application, $ren_lang$compiler$Ren$Compiler$Check$lookupBuiltin($ren_lang$compiler$Ren$AST$Expr$internalOperatorName(op)), _List_fromArray([lhs, rhs]));
      });
      var $ren_lang$compiler$Data$Either$extract = F3(function(f, g, either) {
        if (either.$ === "Left") {
          var a = either.a;
          return f(a);
        } else {
          var b = either.a;
          return g(b);
        }
      });
      var $ren_lang$compiler$Ren$AST$Expr$bound = function(pattern) {
        bound:
          while (true) {
            switch (pattern.$) {
              case "ArrayDestructure":
                var patterns = pattern.a;
                return A2($elm$core$List$concatMap, $ren_lang$compiler$Ren$AST$Expr$bound, patterns);
              case "LiteralPattern":
                return _List_Nil;
              case "Name":
                var n = pattern.a;
                return _List_fromArray([n]);
              case "RecordDestructure":
                var entries = pattern.a;
                return A2($elm$core$List$concatMap, function(_v1) {
                  var k = _v1.a;
                  var p = _v1.b;
                  return A2($elm$core$Maybe$withDefault, _List_fromArray([k]), A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$AST$Expr$bound, p));
                }, entries);
              case "Spread":
                var n = pattern.a;
                return _List_fromArray([n]);
              case "TemplateDestructure":
                var segments = pattern.a;
                return A2($elm$core$List$concatMap, A2($ren_lang$compiler$Data$Either$extract, $elm$core$Basics$always(_List_Nil), $ren_lang$compiler$Ren$AST$Expr$bound), segments);
              case "Typeof":
                var pat = pattern.b;
                var $temp$pattern = pat;
                pattern = $temp$pattern;
                continue bound;
              case "VariantDestructure":
                var patterns = pattern.b;
                return A2($elm$core$List$concatMap, $ren_lang$compiler$Ren$AST$Expr$bound, patterns);
              default:
                return _List_Nil;
            }
          }
      };
      var $ren_lang$compiler$Ren$Data$Monoenv$dom = $elm$core$Dict$member;
      var $ren_lang$compiler$Ren$Data$Type$array = function(t) {
        return A2($ren_lang$compiler$Ren$Data$Type$App, $ren_lang$compiler$Ren$Data$Type$Con("Array"), _List_fromArray([t]));
      };
      var $ren_lang$compiler$Control$ResultM$sequence = A2($elm$core$List$foldr, $ren_lang$compiler$Control$ResultM$map2($elm$core$List$cons), $ren_lang$compiler$Control$ResultM$succeed(_List_Nil));
      var $ren_lang$compiler$Ren$Data$Type$string = $ren_lang$compiler$Ren$Data$Type$Con("String");
      var $elm$core$List$unzip = function(pairs) {
        var step = F2(function(_v0, _v1) {
          var x = _v0.a;
          var y = _v0.b;
          var xs = _v1.a;
          var ys = _v1.b;
          return _Utils_Tuple2(A2($elm$core$List$cons, x, xs), A2($elm$core$List$cons, y, ys));
        });
        return A3($elm$core$List$foldr, step, _Utils_Tuple2(_List_Nil, _List_Nil), pairs);
      };
      var $ren_lang$compiler$Ren$Compiler$Check$pattern = function(p) {
        switch (p.$) {
          case "ArrayDestructure":
            var patterns = p.a;
            var _v1 = $elm$core$List$reverse(patterns);
            if (_v1.b && _v1.a.$ === "Spread") {
              var spread = _v1.a;
              var rest = _v1.b;
              return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$pattern(spread), function(_v2) {
                var envSpread = _v2.a;
                var tSpread = _v2.b;
                return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$unzip, $ren_lang$compiler$Control$ResultM$sequence(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Check$pattern, rest))), function(_v3) {
                  var envs = _v3.a;
                  var ts = _v3.b;
                  return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, envs, ts), function(_v4) {
                    var env = _v4.a;
                    var t = _v4.b;
                    return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envSpread, env]), _List_fromArray([
                      tSpread,
                      $ren_lang$compiler$Ren$Data$Type$array(t)
                    ])), function(_v5) {
                      return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, $ren_lang$compiler$Ren$Data$Type$array(t)));
                    });
                  });
                });
              });
            } else {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$unzip, $ren_lang$compiler$Control$ResultM$sequence(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Check$pattern, patterns))), function(_v6) {
                var envs = _v6.a;
                var ts = _v6.b;
                return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, envs, ts), function(_v7) {
                  var env = _v7.a;
                  var t = _v7.b;
                  return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, $ren_lang$compiler$Ren$Data$Type$array(t)));
                });
              });
            }
          case "LiteralPattern":
            switch (p.a.$) {
              case "Array":
                return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Cannot infer type of array literal pattern."));
              case "Boolean":
                return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("Boolean")));
              case "Number":
                return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("Number")));
              case "Record":
                return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Cannot infer type of record literal pattern."));
              case "String":
                return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("String")));
              case "Template":
                return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Cannot infer type of template literal pattern."));
              case "Undefined":
                var _v8 = p.a;
                return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("()")));
              default:
                var _v9 = p.a;
                return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Cannot infer type of variant literal pattern."));
            }
          case "Name":
            var name = p.a;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$mono, name, a));
            });
          case "RecordDestructure":
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for record destructure patterns is currently not supported!"));
          case "Spread":
            var name = p.a;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$mono, name, $ren_lang$compiler$Ren$Data$Type$array(a)));
            });
          case "TemplateDestructure":
            var segments = p.a;
            return A2($ren_lang$compiler$Control$ResultM$andThen, function(_v10) {
              var envs = _v10.a;
              var ts = _v10.b;
              return A2($ren_lang$compiler$Ren$Compiler$Check$unify, envs, A2($elm$core$List$cons, $ren_lang$compiler$Ren$Data$Type$string, ts));
            }, A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$unzip, $ren_lang$compiler$Control$ResultM$sequence(A2($elm$core$List$map, A2($ren_lang$compiler$Data$Either$extract, $elm$core$Basics$always($ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$string))), $ren_lang$compiler$Ren$Compiler$Check$pattern), segments))));
          case "Typeof":
            var p_ = p.b;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$pattern(p_), function(_v11) {
              var env = _v11.a;
              return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, $ren_lang$compiler$Ren$Data$Type$Any));
            });
          case "VariantDestructure":
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for variant destructure patterns is currently not supported!"));
          default:
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly(a));
            });
        }
      };
      var $ren_lang$compiler$Ren$Compiler$Check$lambda_ = F2(function(pat, inferExpr) {
        return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$pattern(pat), function(_v0) {
          var envP = _v0.a;
          var tP = _v0.b;
          return A2($ren_lang$compiler$Control$ResultM$do, inferExpr, function(_v1) {
            var envE = _v1.a;
            var tE = _v1.b;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(b) {
                return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envP, envE]), _List_fromArray([
                  A2($ren_lang$compiler$Ren$Data$Type$Fun, tP, a),
                  A2($ren_lang$compiler$Ren$Data$Type$Fun, b, tE)
                ])), function(_v2) {
                  var env = _v2.a;
                  var t = _v2.b;
                  return A2($elm$core$List$any, function(v) {
                    return A2($ren_lang$compiler$Ren$Data$Monoenv$dom, v, env);
                  }, $ren_lang$compiler$Ren$AST$Expr$bound(pat)) ? $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, A3($elm$core$List$foldl, $ren_lang$compiler$Ren$Data$Monoenv$remove, env, $ren_lang$compiler$Ren$AST$Expr$bound(pat)), t)) : A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(c) {
                    return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, A2($ren_lang$compiler$Ren$Data$Type$Fun, c, tE)));
                  });
                });
              });
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$lambda = F2(function(patterns, inferExpr) {
        return A3($elm$core$List$foldl, $ren_lang$compiler$Ren$Compiler$Check$lambda_, inferExpr, patterns);
      });
      var $ren_lang$compiler$Data$Tuple2$apply = F2(function(f, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return A2(f, a, b);
      });
      var $ren_lang$compiler$Ren$Compiler$Check$literal = function(lit) {
        switch (lit.$) {
          case "Array":
            var inferElements = lit.a;
            return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$unzip, $ren_lang$compiler$Control$ResultM$sequence(inferElements)), function(_v1) {
              var envs = _v1.a;
              var ts = _v1.b;
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, envs, ts), function(_v2) {
                var env = _v2.a;
                var t = _v2.b;
                return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, $ren_lang$compiler$Ren$Data$Type$array(t)));
              });
            });
          case "Boolean":
            return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("Boolean")));
          case "Number":
            return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("Number")));
          case "Record":
            var entries = lit.a;
            return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$mapM, $elm$core$Tuple$second, entries), function(typings) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Typing$env, typings), _List_Nil), function(_v3) {
                var env = _v3.a;
                return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$getSubstitution, function(s) {
                  var types = A2($elm$core$List$map, A2($elm$core$Basics$composeL, $ren_lang$compiler$Ren$Data$Type$substitute(s), $elm$core$Tuple$second), typings);
                  var keys = A2($elm$core$List$map, $elm$core$Tuple$first, entries);
                  var t = $ren_lang$compiler$Ren$Data$Type$Rec($elm$core$Dict$fromList(A3($elm$core$List$map2, $elm$core$Tuple$pair, keys, types)));
                  return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, t));
                });
              });
            });
          case "String":
            return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("String")));
          case "Template":
            var inferSegments = lit.a;
            return A2($ren_lang$compiler$Control$ResultM$andThen, $ren_lang$compiler$Data$Tuple2$apply($ren_lang$compiler$Ren$Compiler$Check$unify), A2($ren_lang$compiler$Control$ResultM$map, $elm$core$List$unzip, $ren_lang$compiler$Control$ResultM$sequence(A2($elm$core$List$map, A2($ren_lang$compiler$Data$Either$extract, $elm$core$Basics$always($ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$string))), $elm$core$Basics$identity), inferSegments))));
          case "Undefined":
            return $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$Con("()")));
          default:
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for variant literals is currently not supported!"));
        }
      };
      var $ren_lang$compiler$Ren$Compiler$Check$case_ = function(_v0) {
        var p = _v0.a;
        var maybeInferGuard = _v0.b;
        var inferBody = _v0.c;
        var inferGuard = A2($elm$core$Maybe$withDefault, $ren_lang$compiler$Control$ResultM$succeed($ren_lang$compiler$Ren$Data$Typing$poly($ren_lang$compiler$Ren$Data$Type$boolean)), maybeInferGuard);
        return A2($ren_lang$compiler$Control$ResultM$do, inferGuard, function(_v1) {
          var envG = _v1.a;
          var tG = _v1.b;
          return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envG]), _List_fromArray([tG, $ren_lang$compiler$Ren$Data$Type$boolean])), function(_v2) {
            return A2($ren_lang$compiler$Ren$Compiler$Check$lambda_, p, inferBody);
          });
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Check$unifyTypings = function(typings) {
        return A2($ren_lang$compiler$Ren$Compiler$Check$unify, A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Typing$env, typings), A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Typing$type_, typings));
      };
      var $ren_lang$compiler$Ren$Compiler$Check$match = F2(function(inferExpr, inferCases) {
        return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Control$ResultM$andThen, $ren_lang$compiler$Ren$Compiler$Check$unifyTypings, $ren_lang$compiler$Control$ResultM$sequence(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Check$case_, inferCases))), function(cases) {
          return A2($ren_lang$compiler$Control$ResultM$do, inferExpr, function(_v0) {
            var envExpr = _v0.a;
            var tExpr = _v0.b;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(a) {
              return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$unifyTypings(_List_fromArray([
                A2($ren_lang$compiler$Ren$Data$Typing$from, envExpr, A2($ren_lang$compiler$Ren$Data$Type$Fun, tExpr, a)),
                cases
              ])), function(_v1) {
                var env = _v1.a;
                var t = _v1.b;
                if (t.$ === "Fun") {
                  var r = t.b;
                  return $ren_lang$compiler$Control$ResultM$succeed(A2($ren_lang$compiler$Ren$Data$Typing$from, env, r));
                } else {
                  return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Inferred pattern match to be something other than a function."));
                }
              });
            });
          });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Check$infer = function(exprF) {
        switch (exprF.$) {
          case "Access":
            return $ren_lang$compiler$Control$ResultM$fail($ren_lang$compiler$Ren$Compiler$Check$InternalError("Type inference for record accessors is currently not supported!"));
          case "Application":
            var expr = exprF.a;
            var args2 = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Check$application, expr, args2);
          case "Annotation":
            var inferExpr = exprF.a;
            var ann = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Check$annotation, inferExpr, ann);
          case "Block":
            var bindings = exprF.a;
            var expr = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Check$block, bindings, expr);
          case "Conditional":
            var cond = exprF.a;
            var _true = exprF.b;
            var _false = exprF.c;
            return A3($ren_lang$compiler$Ren$Compiler$Check$conditional, cond, _true, _false);
          case "Error":
            return A2($ren_lang$compiler$Control$ResultM$map, $ren_lang$compiler$Ren$Data$Typing$poly, $ren_lang$compiler$Ren$Compiler$Check$next);
          case "Identifier":
            var id = exprF.a;
            return $ren_lang$compiler$Ren$Compiler$Check$identifier(id);
          case "Infix":
            var op = exprF.a;
            var lhs = exprF.b;
            var rhs = exprF.c;
            return A3($ren_lang$compiler$Ren$Compiler$Check$infix_, op, lhs, rhs);
          case "Lambda":
            var args2 = exprF.a;
            var expr = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Check$lambda, args2, expr);
          case "Literal":
            var lit = exprF.a;
            return $ren_lang$compiler$Ren$Compiler$Check$literal(lit);
          default:
            var expr = exprF.a;
            var cases = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Check$match, expr, cases);
        }
      };
      var $ren_lang$compiler$Ren$Data$Type$fun = F3(function(f, args2, ret) {
        return A2($ren_lang$compiler$Ren$Data$Type$Fun, f, A3($elm$core$List$foldr, $ren_lang$compiler$Ren$Data$Type$Fun, ret, args2));
      });
      var $ren_lang$compiler$Ren$Data$Type$number = $ren_lang$compiler$Ren$Data$Type$Con("Number");
      var $ren_lang$compiler$Ren$Compiler$Check$init = {
        polyenv: $elm$core$Dict$fromList(_List_fromArray([
          _Utils_Tuple2("$op_pipe", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_fromArray([
            A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_Nil, $ren_lang$compiler$Ren$Data$Type$Var("b"))
          ]), $ren_lang$compiler$Ren$Data$Type$Var("b")))),
          _Utils_Tuple2("$op_compose", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_Nil, $ren_lang$compiler$Ren$Data$Type$Var("b")), _List_fromArray([
            A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("b"), _List_Nil, $ren_lang$compiler$Ren$Data$Type$Var("c"))
          ]), A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_Nil, $ren_lang$compiler$Ren$Data$Type$Var("c"))))),
          _Utils_Tuple2("$op_add", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_sub", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_mul", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_div", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_pow", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_mod", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$number))),
          _Utils_Tuple2("$op_eq", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_fromArray([
            $ren_lang$compiler$Ren$Data$Type$Var("a")
          ]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_notEq", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_fromArray([
            $ren_lang$compiler$Ren$Data$Type$Var("a")
          ]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_lt", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_lte", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_gt", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_gte", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$number, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$number]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_and", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$boolean, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$boolean]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_or", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$boolean, _List_fromArray([$ren_lang$compiler$Ren$Data$Type$boolean]), $ren_lang$compiler$Ren$Data$Type$boolean))),
          _Utils_Tuple2("$op_cons", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$Var("a"), _List_fromArray([
            $ren_lang$compiler$Ren$Data$Type$array($ren_lang$compiler$Ren$Data$Type$Var("a"))
          ]), $ren_lang$compiler$Ren$Data$Type$array($ren_lang$compiler$Ren$Data$Type$Var("a"))))),
          _Utils_Tuple2("$op_join", $ren_lang$compiler$Ren$Data$Typing$poly(A3($ren_lang$compiler$Ren$Data$Type$fun, $ren_lang$compiler$Ren$Data$Type$array($ren_lang$compiler$Ren$Data$Type$Var("a")), _List_fromArray([
            $ren_lang$compiler$Ren$Data$Type$array($ren_lang$compiler$Ren$Data$Type$Var("a"))
          ]), $ren_lang$compiler$Ren$Data$Type$array($ren_lang$compiler$Ren$Data$Type$Var("a")))))
        ])),
        substitution: $elm$core$Dict$empty,
        vars: A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Type$var, A2($elm$core$List$range, 0, 25 * (26 * 2)))
      };
      var $ren_lang$compiler$Control$ResultM$runM = F2(function(ctx, infer) {
        return infer(ctx).b;
      });
      var $ren_lang$compiler$Ren$Compiler$Check$expression = F2(function(polyenv, expr) {
        return A2($ren_lang$compiler$Control$ResultM$runM, _Utils_update($ren_lang$compiler$Ren$Compiler$Check$init, {
          polyenv: A2($elm$core$Dict$union, $ren_lang$compiler$Ren$Compiler$Check$init.polyenv, polyenv)
        }), A2($ren_lang$compiler$Ren$AST$Expr$cata, $elm$core$Basics$always($ren_lang$compiler$Ren$Compiler$Check$infer), expr));
      });
      var $ren_lang$compiler$Ren$Compiler$Check$declaration = F2(function(polyenv, declr) {
        var type_ = declr.type_;
        var expr = declr.expr;
        return _Utils_eq(type_, $ren_lang$compiler$Ren$Data$Type$Any) ? $elm$core$Result$Ok(declr) : A2($elm$core$Result$andThen, function(_v0) {
          var envDec = _v0.a;
          var tDec = _v0.b;
          return A2($ren_lang$compiler$Control$ResultM$runM, $ren_lang$compiler$Ren$Compiler$Check$init, A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$inst($ren_lang$compiler$Ren$Data$Typing$poly(type_)), function(_v1) {
            var envAnn = _v1.a;
            var tAnn = _v1.b;
            return A2($ren_lang$compiler$Control$ResultM$do, $ren_lang$compiler$Ren$Compiler$Check$next, function(_v2) {
              return A2($ren_lang$compiler$Control$ResultM$do, A2($ren_lang$compiler$Ren$Compiler$Check$unify, _List_fromArray([envDec, envAnn]), _List_fromArray([tDec, tAnn])), function(t) {
                return _Utils_eq(tAnn, $ren_lang$compiler$Ren$Data$Type$Hole) ? $ren_lang$compiler$Control$ResultM$succeed(_Utils_update(declr, {
                  type_: $ren_lang$compiler$Ren$Data$Typing$type_(t)
                })) : !_Utils_eq($ren_lang$compiler$Ren$Data$Typing$free($ren_lang$compiler$Ren$Data$Typing$simplify(t)), $ren_lang$compiler$Ren$Data$Typing$free($ren_lang$compiler$Ren$Data$Typing$simplify($ren_lang$compiler$Ren$Data$Typing$poly(type_)))) ? $ren_lang$compiler$Control$ResultM$fail(A2($ren_lang$compiler$Ren$Compiler$Check$TypeTooGeneral, type_, $ren_lang$compiler$Ren$Data$Typing$type_(t))) : $ren_lang$compiler$Control$ResultM$succeed(_Utils_update(declr, {
                  type_: $ren_lang$compiler$Ren$Data$Typing$type_(t)
                }));
              });
            });
          }));
        }, A2($ren_lang$compiler$Ren$Compiler$Check$expression, polyenv, expr));
      });
      var $ren_lang$compiler$Ren$Data$Polyenv$empty = $elm$core$Dict$empty;
      var $ren_lang$compiler$Ren$Data$Polyenv$insert = $elm$core$Dict$insert;
      var $elm$core$Result$map2 = F3(function(func, ra, rb) {
        if (ra.$ === "Err") {
          var x = ra.a;
          return $elm$core$Result$Err(x);
        } else {
          var a = ra.a;
          if (rb.$ === "Err") {
            var x = rb.a;
            return $elm$core$Result$Err(x);
          } else {
            var b = rb.a;
            return $elm$core$Result$Ok(A2(func, a, b));
          }
        }
      });
      var $ren_lang$compiler$Ren$Compiler$Check$run = function(m) {
        var declarations = m.declarations;
        var polyenv = A3($elm$core$List$foldl, F2(function(_v0, env) {
          var name = _v0.name;
          var type_ = _v0.type_;
          return A3($ren_lang$compiler$Ren$Data$Polyenv$insert, name, $ren_lang$compiler$Ren$Data$Typing$poly(type_), env);
        }), $ren_lang$compiler$Ren$Data$Polyenv$empty, declarations);
        return A2($elm$core$Result$map, function(ds) {
          return _Utils_update(m, { declarations: ds });
        }, A3($elm$core$List$foldr, F2(function(d, ds) {
          return A3($elm$core$Result$map2, $elm$core$List$cons, A2($ren_lang$compiler$Ren$Compiler$Check$declaration, polyenv, d), ds);
        }), $elm$core$Result$Ok(_List_Nil), declarations));
      };
      var $ren_lang$compiler$Ren$AST$Expr$Expr = F2(function(a, b) {
        return { $: "Expr", a, b };
      });
      var $ren_lang$compiler$Ren$Compiler$Desugar$run = F2(function(transformations, declaration) {
        var apply = F2(function(meta, expr) {
          apply:
            while (true) {
              var result = A3($elm$core$List$foldl, F2(function(f, e) {
                return A2(f, meta, e);
              }), expr, transformations);
              if (_Utils_eq(result, expr)) {
                return expr;
              } else {
                var $temp$meta = meta, $temp$expr = result;
                meta = $temp$meta;
                expr = $temp$expr;
                continue apply;
              }
            }
        });
        return _Utils_update(declaration, {
          expr: A2($ren_lang$compiler$Ren$AST$Expr$cata, F2(function(meta, expression) {
            return A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2(apply, meta, expression));
          }), declaration.expr)
        });
      });
      var $ren_lang$compiler$Ren$Data$Type$reduce = function(t) {
        var s = F2(function(i, v) {
          return _Utils_eq($ren_lang$compiler$Ren$Data$Type$var(i), v) ? $ren_lang$compiler$Ren$Data$Substitution$empty : A2($ren_lang$compiler$Ren$Data$Substitution$singleton, v, $ren_lang$compiler$Ren$Data$Type$Var($ren_lang$compiler$Ren$Data$Type$var(i)));
        });
        return A3($elm$core$List$foldl, $ren_lang$compiler$Ren$Data$Type$substitute, t, A2($elm$core$List$indexedMap, s, $elm$core$Set$toList($ren_lang$compiler$Ren$Data$Type$free(t))));
      };
      var $the_sett$elm_pretty_printer$Internals$Concatenate = F2(function(a, b) {
        return { $: "Concatenate", a, b };
      });
      var $the_sett$elm_pretty_printer$Pretty$append = F2(function(doc1, doc2) {
        return A2($the_sett$elm_pretty_printer$Internals$Concatenate, function(_v0) {
          return doc1;
        }, function(_v1) {
          return doc2;
        });
      });
      var $elm_community$basics_extra$Basics$Extra$flip = F3(function(f, b, a) {
        return A2(f, a, b);
      });
      var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
      var $the_sett$elm_pretty_printer$Internals$Text = F2(function(a, b) {
        return { $: "Text", a, b };
      });
      var $the_sett$elm_pretty_printer$Pretty$char = function(c) {
        return A2($the_sett$elm_pretty_printer$Internals$Text, $elm$core$String$fromChar(c), $elm$core$Maybe$Nothing);
      };
      var $the_sett$elm_pretty_printer$Internals$Empty = { $: "Empty" };
      var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
      var $the_sett$elm_pretty_printer$Pretty$join = F2(function(sep, docs) {
        join:
          while (true) {
            if (!docs.b) {
              return $the_sett$elm_pretty_printer$Pretty$empty;
            } else {
              if (docs.a.$ === "Empty") {
                var _v1 = docs.a;
                var ds = docs.b;
                var $temp$sep = sep, $temp$docs = ds;
                sep = $temp$sep;
                docs = $temp$docs;
                continue join;
              } else {
                var d = docs.a;
                var ds = docs.b;
                var step = F2(function(x, rest) {
                  if (x.$ === "Empty") {
                    return rest;
                  } else {
                    var doc = x;
                    return A2($the_sett$elm_pretty_printer$Pretty$append, sep, A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest));
                  }
                });
                var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
                return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
              }
            }
          }
      });
      var $the_sett$elm_pretty_printer$Pretty$string = function(val) {
        return A2($the_sett$elm_pretty_printer$Internals$Text, val, $elm$core$Maybe$Nothing);
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$access = F2(function(_v0, accessors) {
        var wrap = _v0.wrap;
        var expr = _v0.expr;
        return {
          expr: A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(".")), A2($elm$core$List$cons, wrap(expr), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, accessors))),
          wrap: $elm$core$Basics$identity
        };
      });
      var $the_sett$elm_pretty_printer$Pretty$surround = F3(function(left, right, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$append, A2($the_sett$elm_pretty_printer$Pretty$append, left, doc), right);
      });
      var $the_sett$elm_pretty_printer$Pretty$parens = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("(")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(")")), doc);
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$application = F2(function(_v0, args2) {
        var wrap = _v0.wrap;
        var expr = _v0.expr;
        return {
          expr: A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(" ")), A2($elm$core$List$cons, wrap(expr), A2($elm$core$List$map, A2($elm$core$Basics$composeR, function($) {
            return $.expr;
          }, $the_sett$elm_pretty_printer$Pretty$parens), args2))),
          wrap: $the_sett$elm_pretty_printer$Pretty$parens
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$iife = F2(function(_v0, body) {
        var arg = _v0.a;
        var expr = _v0.b;
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(expr), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), A2($the_sett$elm_pretty_printer$Pretty$a, body, $the_sett$elm_pretty_printer$Pretty$string("((" + (arg + ") => ")))));
      });
      var $the_sett$elm_pretty_printer$Internals$copy = F2(function(i, s) {
        return !i ? "" : _Utils_ap(s, A2($the_sett$elm_pretty_printer$Internals$copy, i - 1, s));
      });
      var $the_sett$elm_pretty_printer$Internals$Column = function(a) {
        return { $: "Column", a };
      };
      var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
      var $the_sett$elm_pretty_printer$Internals$Nest = F2(function(a, b) {
        return { $: "Nest", a, b };
      });
      var $the_sett$elm_pretty_printer$Pretty$nest = F2(function(depth, doc) {
        return A2($the_sett$elm_pretty_printer$Internals$Nest, depth, function(_v0) {
          return doc;
        });
      });
      var $the_sett$elm_pretty_printer$Internals$Nesting = function(a) {
        return { $: "Nesting", a };
      };
      var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
      var $the_sett$elm_pretty_printer$Pretty$align = function(doc) {
        return $the_sett$elm_pretty_printer$Pretty$column(function(currentColumn) {
          return $the_sett$elm_pretty_printer$Pretty$nesting(function(indentLvl) {
            return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
          });
        });
      };
      var $the_sett$elm_pretty_printer$Pretty$hang = F2(function(spaces, doc) {
        return $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc));
      });
      var $the_sett$elm_pretty_printer$Pretty$indent = F2(function(spaces, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$hang, spaces, A2($the_sett$elm_pretty_printer$Pretty$append, $the_sett$elm_pretty_printer$Pretty$string(A2($the_sett$elm_pretty_printer$Internals$copy, spaces, " ")), doc));
      });
      var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) {
          return true;
        } else {
          return false;
        }
      };
      var $the_sett$elm_pretty_printer$Internals$Line = F2(function(a, b) {
        return { $: "Line", a, b };
      });
      var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Internals$Line, " ", "");
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$block = F2(function(bindings, _v0) {
        var wrap = _v0.wrap;
        var expr = _v0.expr;
        var binding = function(_v1) {
          var name = _v1.a;
          var gen = _v1.b;
          return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(" ")), _List_fromArray([
            $the_sett$elm_pretty_printer$Pretty$string("const"),
            $the_sett$elm_pretty_printer$Pretty$string(name),
            $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("=")),
            gen.expr
          ]));
        };
        return $elm$core$List$isEmpty(bindings) ? { expr, wrap } : {
          expr: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, expr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("return "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$line, A2($elm$core$List$map, binding, bindings))))))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{")))))),
          wrap: $ren_lang$compiler$Ren$Compiler$Emit$ESModule$iife(_Utils_Tuple2("", $the_sett$elm_pretty_printer$Pretty$empty))
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$conditional = F3(function(cond, _true, _false) {
        return {
          expr: A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(" ")), _List_fromArray([
            cond.expr,
            $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("?")),
            _true.expr,
            $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(":")),
            _false.expr
          ])),
          wrap: $the_sett$elm_pretty_printer$Pretty$parens
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$identifier = function(id) {
        switch (id.$) {
          case "Local":
            var _var = id.a;
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$string(_var),
              wrap: $elm$core$Basics$identity
            };
          case "Scoped":
            if (id.b.$ === "Scoped") {
              var namespace = id.a;
              var id_ = id.b;
              return {
                expr: A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$identifier(id_).expr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("$")), $the_sett$elm_pretty_printer$Pretty$string(namespace))),
                wrap: $elm$core$Basics$identity
              };
            } else {
              var namespace = id.a;
              var id_ = id.b;
              return {
                expr: A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$identifier(id_).expr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(".")), $the_sett$elm_pretty_printer$Pretty$string(namespace))),
                wrap: $elm$core$Basics$identity
              };
            }
          default:
            return { expr: $the_sett$elm_pretty_printer$Pretty$empty, wrap: $elm$core$Basics$identity };
        }
      };
      var $ren_lang$compiler$Ren$AST$Expr$Local = function(a) {
        return { $: "Local", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Name = function(a) {
        return { $: "Name", a };
      };
      var $the_sett$elm_pretty_printer$Pretty$brackets = A2($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("[")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("]")));
      var $ren_lang$compiler$Ren$AST$Expr$ArrayDestructure = function(a) {
        return { $: "ArrayDestructure", a };
      };
      var $the_sett$elm_pretty_printer$Pretty$braces = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), doc);
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern = function(pat) {
        lambdaPattern:
          while (true) {
            switch (pat.$) {
              case "ArrayDestructure":
                var elements = pat.a;
                return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern, elements)));
              case "LiteralPattern":
                return $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("_"));
              case "Name":
                var name = pat.a;
                return $the_sett$elm_pretty_printer$Pretty$string(name);
              case "RecordDestructure":
                var entries = pat.a;
                var entry = function(_v2) {
                  var name2 = _v2.a;
                  var maybePattern = _v2.b;
                  if (maybePattern.$ === "Just") {
                    if (maybePattern.a.$ === "Spread") {
                      return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name2), $the_sett$elm_pretty_printer$Pretty$string("..."));
                    } else {
                      var p = maybePattern.a;
                      return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern(p), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(": "), $the_sett$elm_pretty_printer$Pretty$string(name2)));
                    }
                  } else {
                    return $the_sett$elm_pretty_printer$Pretty$string(name2);
                  }
                };
                return $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, entry, entries)));
              case "Spread":
                var name = pat.a;
                return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("..."));
              case "TemplateDestructure":
                return $the_sett$elm_pretty_printer$Pretty$string("_");
              case "Typeof":
                return $the_sett$elm_pretty_printer$Pretty$string("_");
              case "VariantDestructure":
                var tag = pat.a;
                var patterns = pat.b;
                var $temp$pat = $ren_lang$compiler$Ren$AST$Expr$ArrayDestructure(A2($elm$core$List$cons, $ren_lang$compiler$Ren$AST$Expr$Name("#" + tag), patterns));
                pat = $temp$pat;
                continue lambdaPattern;
              default:
                var name = pat.a;
                return A2($the_sett$elm_pretty_printer$Pretty$a, A2($elm$core$Maybe$withDefault, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$Maybe$map, $the_sett$elm_pretty_printer$Pretty$string, name)), $the_sett$elm_pretty_printer$Pretty$string("_"));
            }
          }
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambda = F2(function(args2, _v0) {
        var wrap = _v0.wrap;
        var expr = _v0.expr;
        return {
          expr: A2($the_sett$elm_pretty_printer$Pretty$a, wrap(expr), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" => "), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" => "), A2($elm$core$List$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern, $the_sett$elm_pretty_printer$Pretty$parens), args2)))),
          wrap: $the_sett$elm_pretty_printer$Pretty$parens
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$infix_ = F3(function(op, lhs, rhs) {
        var binop = function(s) {
          return {
            expr: A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" " + (s + " ")), _List_fromArray([
              lhs.wrap(lhs.expr),
              rhs.wrap(rhs.expr)
            ])),
            wrap: $the_sett$elm_pretty_printer$Pretty$parens
          };
        };
        switch (op.$) {
          case "Pipe":
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$application, rhs, _List_fromArray([lhs]));
          case "Compose":
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambda, _List_fromArray([
              $ren_lang$compiler$Ren$AST$Expr$Name("$compose")
            ]), A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$application, rhs, _List_fromArray([
              A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$application, lhs, _List_fromArray([
                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$identifier($ren_lang$compiler$Ren$AST$Expr$Local("$compose"))
              ]))
            ])));
          case "Add":
            return binop("+");
          case "Sub":
            return binop("-");
          case "Mul":
            return binop("*");
          case "Div":
            return binop("/");
          case "Pow":
            return binop("**");
          case "Mod":
            return binop("%");
          case "Eq":
            return binop("==");
          case "NotEq":
            return binop("!=");
          case "Lt":
            return binop("<");
          case "Lte":
            return binop("<=");
          case "Gt":
            return binop(">");
          case "Gte":
            return binop(">=");
          case "And":
            return binop("&&");
          case "Or":
            return binop("||");
          case "Cons":
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), _List_fromArray([
                lhs.expr,
                A2($the_sett$elm_pretty_printer$Pretty$a, rhs.wrap(rhs.expr), $the_sett$elm_pretty_printer$Pretty$string("..."))
              ]))),
              wrap: $the_sett$elm_pretty_printer$Pretty$parens
            };
          default:
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), _List_fromArray([
                A2($the_sett$elm_pretty_printer$Pretty$a, lhs.wrap(lhs.expr), $the_sett$elm_pretty_printer$Pretty$string("...")),
                A2($the_sett$elm_pretty_printer$Pretty$a, rhs.wrap(rhs.expr), $the_sett$elm_pretty_printer$Pretty$string("..."))
              ]))),
              wrap: $the_sett$elm_pretty_printer$Pretty$parens
            };
        }
      });
      var $elm$core$String$fromFloat = _String_fromNumber;
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$literal = function(lit) {
        switch (lit.$) {
          case "Array":
            var elements = lit.a;
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, function($) {
                return $.expr;
              }, elements))),
              wrap: $elm$core$Basics$identity
            };
          case "Boolean":
            if (lit.a) {
              return {
                expr: $the_sett$elm_pretty_printer$Pretty$string("true"),
                wrap: $elm$core$Basics$identity
              };
            } else {
              return {
                expr: $the_sett$elm_pretty_printer$Pretty$string("false"),
                wrap: $elm$core$Basics$identity
              };
            }
          case "Number":
            var n = lit.a;
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(n)),
              wrap: $elm$core$Basics$identity
            };
          case "Record":
            var entries = lit.a;
            var entry = function(_v1) {
              var key = _v1.a;
              var expr = _v1.b.expr;
              return A2($the_sett$elm_pretty_printer$Pretty$a, expr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(": "), $the_sett$elm_pretty_printer$Pretty$string(key)));
            };
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, entry, entries))),
              wrap: $the_sett$elm_pretty_printer$Pretty$parens
            };
          case "String":
            var s = lit.a;
            return {
              expr: A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$string(s)),
              wrap: $elm$core$Basics$identity
            };
          case "Template":
            var segments = lit.a;
            var segment = A2($ren_lang$compiler$Data$Either$extract, $the_sett$elm_pretty_printer$Pretty$string, A2($elm$core$Basics$composeR, function($) {
              return $.expr;
            }, A2($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$string("${"), $the_sett$elm_pretty_printer$Pretty$string("}"))));
            return {
              expr: A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("`")), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("`")), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$List$map, segment, segments))),
              wrap: $elm$core$Basics$identity
            };
          case "Undefined":
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$string("undefined"),
              wrap: $elm$core$Basics$identity
            };
          default:
            var name = lit.a;
            var args2 = lit.b;
            return {
              expr: $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$cons, $the_sett$elm_pretty_printer$Pretty$string('"$' + (name + '"')), A2($elm$core$List$map, function($) {
                return $.expr;
              }, args2)))),
              wrap: $elm$core$Basics$identity
            };
        }
      };
      var $elm$regex$Regex$Match = F4(function(match, index, number, submatches) {
        return { index, match, number, submatches };
      });
      var $elm$regex$Regex$contains = _Regex_contains;
      var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
      var $elm$regex$Regex$fromString = function(string) {
        return A2($elm$regex$Regex$fromStringWith, { caseInsensitive: false, multiline: false }, string);
      };
      var $ren_lang$compiler$Ren$AST$Expr$LiteralPattern = function(a) {
        return { $: "LiteralPattern", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$TemplateDestructure = function(a) {
        return { $: "TemplateDestructure", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings = F2(function(name, pat) {
        matchBindings:
          while (true) {
            switch (pat.$) {
              case "ArrayDestructure":
                var elements = pat.a;
                return $elm$core$List$concat(A2($elm$core$List$indexedMap, F2(function(i, el) {
                  return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings, name + ("[" + ($elm$core$String$fromInt(i) + "]")), el);
                }), elements));
              case "LiteralPattern":
                return _List_Nil;
              case "Name":
                var bindingName = pat.a;
                return _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" = "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(bindingName), $the_sett$elm_pretty_printer$Pretty$string("const "))))
                ]);
              case "RecordDestructure":
                var entries = pat.a;
                return $elm$core$List$concat(A2($elm$core$List$map, function(_v1) {
                  var key = _v1.a;
                  var val = _v1.b;
                  return A2($elm$core$Maybe$withDefault, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings, name + ("." + key), $ren_lang$compiler$Ren$AST$Expr$Name(key)), A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings(name + ("." + key)), val));
                }, entries));
              case "Spread":
                return _List_fromArray([
                  $the_sett$elm_pretty_printer$Pretty$string('throw new Error("TODO: Implement spread pattern bindings.")')
                ]);
              case "TemplateDestructure":
                var segments = pat.a;
                var sanitise = function(s) {
                  return $elm$core$Basics$identity(s);
                };
                var _v2 = $ren_lang$compiler$Ren$AST$Expr$bound($ren_lang$compiler$Ren$AST$Expr$TemplateDestructure(segments));
                if (!_v2.b) {
                  return _List_Nil;
                } else {
                  var bindings = _v2;
                  return _List_fromArray([
                    A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("$').exec("), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(A2($elm$core$String$join, "", A2($elm$core$List$map, A2($ren_lang$compiler$Data$Either$extract, sanitise, $elm$core$Basics$always("(.*)")), segments))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" ] = new RegExp('^"), A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, bindings)), $the_sett$elm_pretty_printer$Pretty$string("const [ , ")))))))
                  ]);
                }
              case "Typeof":
                var p = pat.b;
                var $temp$name = name, $temp$pat = p;
                name = $temp$name;
                pat = $temp$pat;
                continue matchBindings;
              case "VariantDestructure":
                var tagName = pat.a;
                var ps = pat.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings, name, $ren_lang$compiler$Ren$AST$Expr$ArrayDestructure(A2($elm$core$List$cons, $ren_lang$compiler$Ren$AST$Expr$LiteralPattern($ren_lang$compiler$Ren$AST$Expr$String("$" + tagName)), ps)));
              default:
                return _List_Nil;
            }
          }
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern = F2(function(name, pat) {
        switch (pat.$) {
          case "ArrayDestructure":
            var elements = pat.a;
            return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
              A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt($elm$core$List$length(elements))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(".length >= "), $the_sett$elm_pretty_printer$Pretty$string(name))),
              A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), A2($elm$core$List$indexedMap, F2(function(i, el) {
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name + ("[" + ($elm$core$String$fromInt(i) + "]")), el);
              }), elements))
            ]));
          case "LiteralPattern":
            switch (pat.a.$) {
              case "Array":
                return $the_sett$elm_pretty_printer$Pretty$empty;
              case "Boolean":
                if (pat.a.a) {
                  return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("true"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name)));
                } else {
                  return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("false"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name)));
                }
              case "Number":
                var n = pat.a.a;
                return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(n)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name)));
              case "Record":
                return $the_sett$elm_pretty_printer$Pretty$empty;
              case "String":
                var s = pat.a.a;
                return A2($the_sett$elm_pretty_printer$Pretty$a, A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$string(s)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name)));
              case "Template":
                return $the_sett$elm_pretty_printer$Pretty$empty;
              case "Undefined":
                var _v1 = pat.a;
                return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" || "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("undefined"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name))),
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("null"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" === "), $the_sett$elm_pretty_printer$Pretty$string(name)))
                ])));
              default:
                var _v2 = pat.a;
                return $the_sett$elm_pretty_printer$Pretty$empty;
            }
          case "Name":
            return $the_sett$elm_pretty_printer$Pretty$empty;
          case "RecordDestructure":
            var entries = pat.a;
            return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), A2($elm$core$List$map, function(_v3) {
              var key = _v3.a;
              var val = _v3.b;
              if (val.$ === "Just") {
                var p2 = val.a;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" in "), A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$string(key)))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name + ("." + key), p2)
                ]));
              } else {
                return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" in "), A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$string(key))));
              }
            }, entries));
          case "Spread":
            return $the_sett$elm_pretty_printer$Pretty$empty;
          case "TemplateDestructure":
            var segments = pat.a;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("$').test("), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(A2($elm$core$String$join, "", A2($elm$core$List$map, A2($ren_lang$compiler$Data$Either$extract, $elm$core$Basics$identity, $elm$core$Basics$always("(.*)")), segments))), $the_sett$elm_pretty_printer$Pretty$string("new RegExp('^")))));
          case "Typeof":
            switch (pat.a) {
              case "Array":
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(")"), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("Array.isArray("))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
              case "Boolean":
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('=== "boolean"'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("typeof "))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
              case "Number":
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('=== "number"'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("typeof "))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
              case "Object":
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('=== "object"'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("typeof "))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
              case "String":
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('=== "string"'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("typeof "))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
              default:
                var typeName = pat.a;
                var p = pat.b;
                return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(" && "), _List_fromArray([
                  A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(typeName), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" instanceof "), $the_sett$elm_pretty_printer$Pretty$string(name))),
                  A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, p)
                ]));
            }
          case "VariantDestructure":
            var tagName = pat.a;
            var ps = pat.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, $ren_lang$compiler$Ren$AST$Expr$ArrayDestructure(A2($elm$core$List$cons, $ren_lang$compiler$Ren$AST$Expr$LiteralPattern($ren_lang$compiler$Ren$AST$Expr$String("$" + tagName)), ps)));
          default:
            return $the_sett$elm_pretty_printer$Pretty$string("true");
        }
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchCase = F2(function(name, _v0) {
        var pat = _v0.a;
        var guard = _v0.b;
        var expr = _v0.c.expr;
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, expr, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string("return "), function() {
          var _v1 = A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBindings, name, pat);
          if (!_v1.b) {
            return $the_sett$elm_pretty_printer$Pretty$empty;
          } else {
            var bindings = _v1;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$line, bindings)));
          }
        }()))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(") {"), A2($the_sett$elm_pretty_printer$Pretty$a, A2($elm$core$Maybe$withDefault, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, function($) {
          return $.expr;
        }, $the_sett$elm_pretty_printer$Pretty$append($the_sett$elm_pretty_printer$Pretty$string(" && "))), guard)), A2($the_sett$elm_pretty_printer$Pretty$a, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPattern, name, pat), $the_sett$elm_pretty_printer$Pretty$string("if ("))))))));
      });
      var $elm$regex$Regex$never = _Regex_never;
      var $the_sett$elm_pretty_printer$Internals$NLine = F3(function(a, b, c) {
        return { $: "NLine", a, b, c };
      });
      var $the_sett$elm_pretty_printer$Internals$NNil = { $: "NNil" };
      var $the_sett$elm_pretty_printer$Internals$NText = F3(function(a, b, c) {
        return { $: "NText", a, b, c };
      });
      var $elm$core$String$length = _String_length;
      var $the_sett$elm_pretty_printer$Internals$fits = F2(function(w, normal) {
        fits:
          while (true) {
            if (w < 0) {
              return false;
            } else {
              switch (normal.$) {
                case "NNil":
                  return true;
                case "NText":
                  var text = normal.a;
                  var innerNormal = normal.b;
                  var $temp$w = w - $elm$core$String$length(text), $temp$normal = innerNormal(_Utils_Tuple0);
                  w = $temp$w;
                  normal = $temp$normal;
                  continue fits;
                default:
                  return true;
              }
            }
          }
      });
      var $the_sett$elm_pretty_printer$Internals$better = F4(function(w, k, doc, doc2Fn) {
        return A2($the_sett$elm_pretty_printer$Internals$fits, w - k, doc) ? doc : doc2Fn(_Utils_Tuple0);
      });
      var $the_sett$elm_pretty_printer$Internals$best = F3(function(width, startCol, x) {
        var be = F3(function(w, k, docs) {
          be:
            while (true) {
              if (!docs.b) {
                return $the_sett$elm_pretty_printer$Internals$NNil;
              } else {
                switch (docs.a.b.$) {
                  case "Empty":
                    var _v1 = docs.a;
                    var i = _v1.a;
                    var _v2 = _v1.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = ds;
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Concatenate":
                    var _v3 = docs.a;
                    var i = _v3.a;
                    var _v4 = _v3.b;
                    var doc = _v4.a;
                    var doc2 = _v4.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, doc(_Utils_Tuple0)), A2($elm$core$List$cons, _Utils_Tuple2(i, doc2(_Utils_Tuple0)), ds));
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Nest":
                    var _v5 = docs.a;
                    var i = _v5.a;
                    var _v6 = _v5.b;
                    var j = _v6.a;
                    var doc = _v6.b;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i + j, doc(_Utils_Tuple0)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  case "Text":
                    var _v7 = docs.a;
                    var i = _v7.a;
                    var _v8 = _v7.b;
                    var text = _v8.a;
                    var maybeTag = _v8.b;
                    var ds = docs.b;
                    return A3($the_sett$elm_pretty_printer$Internals$NText, text, function(_v9) {
                      return A3(be, w, k + $elm$core$String$length(text), ds);
                    }, maybeTag);
                  case "Line":
                    var _v10 = docs.a;
                    var i = _v10.a;
                    var _v11 = _v10.b;
                    var vsep = _v11.b;
                    var ds = docs.b;
                    return A3($the_sett$elm_pretty_printer$Internals$NLine, i, vsep, function(_v12) {
                      return A3(be, w, i + $elm$core$String$length(vsep), ds);
                    });
                  case "Union":
                    var _v13 = docs.a;
                    var i = _v13.a;
                    var _v14 = _v13.b;
                    var doc = _v14.a;
                    var doc2 = _v14.b;
                    var ds = docs.b;
                    return A4($the_sett$elm_pretty_printer$Internals$better, w, k, A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc), ds)), function(_v15) {
                      return A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc2), ds));
                    });
                  case "Nesting":
                    var _v16 = docs.a;
                    var i = _v16.a;
                    var fn = _v16.b.a;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(i)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                  default:
                    var _v17 = docs.a;
                    var i = _v17.a;
                    var fn = _v17.b.a;
                    var ds = docs.b;
                    var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(k)), ds);
                    w = $temp$w;
                    k = $temp$k;
                    docs = $temp$docs;
                    continue be;
                }
              }
            }
        });
        return A3(be, width, startCol, _List_fromArray([
          _Utils_Tuple2(0, x)
        ]));
      });
      var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, "", strings);
      };
      var $the_sett$elm_pretty_printer$Internals$layout = function(normal) {
        var layoutInner = F2(function(normal2, acc) {
          layoutInner:
            while (true) {
              switch (normal2.$) {
                case "NNil":
                  return acc;
                case "NText":
                  var text = normal2.a;
                  var innerNormal = normal2.b;
                  var maybeTag = normal2.c;
                  var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, text, acc);
                  normal2 = $temp$normal2;
                  acc = $temp$acc;
                  continue layoutInner;
                default:
                  var i = normal2.a;
                  var sep = normal2.b;
                  var innerNormal = normal2.c;
                  var norm = innerNormal(_Utils_Tuple0);
                  if (norm.$ === "NLine") {
                    var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, "\n" + sep, acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                  } else {
                    var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, "\n" + (A2($the_sett$elm_pretty_printer$Internals$copy, i, " ") + sep), acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                  }
              }
            }
        });
        return $elm$core$String$concat($elm$core$List$reverse(A2(layoutInner, normal, _List_Nil)));
      };
      var $the_sett$elm_pretty_printer$Pretty$pretty = F2(function(w, doc) {
        return $the_sett$elm_pretty_printer$Internals$layout(A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc));
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$match = F2(function(_v0, cases) {
        var expr = _v0.expr;
        var isVariable = A2($elm$core$Maybe$withDefault, $elm$regex$Regex$never, $elm$regex$Regex$fromString("^[a-z][a-zA-Z0-9_]*$"));
        var exprString = A2($the_sett$elm_pretty_printer$Pretty$pretty, 0, expr);
        var matchVariable = A2($elm$regex$Regex$contains, isVariable, exprString) ? exprString : "$match";
        return {
          expr: A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$iife, _Utils_Tuple2(matchVariable, expr), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('throw new Error("Incomplete pattern match.")'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$line, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchCase(matchVariable), cases)))))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{"))))))),
          wrap: $elm$core$Basics$identity
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$expression = function(exprF) {
        switch (exprF.$) {
          case "Access":
            var expr = exprF.a;
            var accessors = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$access, expr, accessors);
          case "Application":
            var expr = exprF.a;
            var args2 = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$application, expr, args2);
          case "Annotation":
            var expr = exprF.a;
            return expr;
          case "Block":
            var bindings = exprF.a;
            var expr = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$block, bindings, expr);
          case "Conditional":
            var cond = exprF.a;
            var _true = exprF.b;
            var _false = exprF.c;
            return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$conditional, cond, _true, _false);
          case "Error":
            return { expr: $the_sett$elm_pretty_printer$Pretty$empty, wrap: $elm$core$Basics$identity };
          case "Identifier":
            var id = exprF.a;
            return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$identifier(id);
          case "Infix":
            var op = exprF.a;
            var lhs = exprF.b;
            var rhs = exprF.c;
            return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$infix_, op, lhs, rhs);
          case "Lambda":
            var args2 = exprF.a;
            var expr = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambda, args2, expr);
          case "Literal":
            var lit = exprF.a;
            return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$literal(lit);
          default:
            var expr = exprF.a;
            var cases = exprF.b;
            return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$match, expr, cases);
        }
      };
      var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(" "));
      var $ren_lang$compiler$Data$Tuple2$asList = F2(function(f, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return f(_List_fromArray([a, b]));
      });
      var $ren_lang$compiler$Ren$Data$Type$toParenthesisedString = function(type_) {
        switch (type_.$) {
          case "App":
            if (!type_.b.b) {
              var t1 = type_.a;
              return $ren_lang$compiler$Ren$Data$Type$toString(t1);
            } else {
              var t1 = type_.a;
              var t2 = type_.b;
              return "(" + ($ren_lang$compiler$Ren$Data$Type$toString(t1) + (" " + (A2($elm$core$String$join, " ", A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Type$toParenthesisedString, t2)) + ")")));
            }
          case "Fun":
            var t1 = type_.a;
            var t2 = type_.b;
            return "(" + ($ren_lang$compiler$Ren$Data$Type$toParenthesisedString(t1) + (" \u2192 " + ($ren_lang$compiler$Ren$Data$Type$toString(t2) + ")")));
          default:
            return $ren_lang$compiler$Ren$Data$Type$toString(type_);
        }
      };
      var $ren_lang$compiler$Ren$Data$Type$toString = function(type_) {
        switch (type_.$) {
          case "Var":
            var v = type_.a;
            return v;
          case "Con":
            var c = type_.a;
            return c;
          case "App":
            var t1 = type_.a;
            var t2 = type_.b;
            return $ren_lang$compiler$Ren$Data$Type$toString(t1) + (" " + A2($elm$core$String$join, " ", A2($elm$core$List$map, $ren_lang$compiler$Ren$Data$Type$toParenthesisedString, t2)));
          case "Fun":
            if (type_.a.$ === "Fun") {
              var t1 = type_.a;
              var t2 = type_.b;
              return $ren_lang$compiler$Ren$Data$Type$toParenthesisedString(t1) + (" \u2192 " + $ren_lang$compiler$Ren$Data$Type$toString(t2));
            } else {
              var t1 = type_.a;
              var t2 = type_.b;
              return $ren_lang$compiler$Ren$Data$Type$toString(t1) + (" \u2192 " + $ren_lang$compiler$Ren$Data$Type$toString(t2));
            }
          case "Rec":
            var tN = type_.a;
            return "{" + (A2($elm$core$String$join, ", ", A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$mapSecond($ren_lang$compiler$Ren$Data$Type$toString), $ren_lang$compiler$Data$Tuple2$asList($elm$core$String$join(": "))), $elm$core$Dict$toList(tN))) + " }");
          case "Any":
            return "*";
          default:
            return "?";
        }
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$wrapBuilder = function(_v0) {
        var wrap = _v0.wrap;
        var expr = _v0.expr;
        return wrap(expr);
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$declaration = function(_v0) {
        var _public = _v0._public;
        var name = _v0.name;
        var type_ = _v0.type_;
        var expr = _v0.expr;
        return name === "_" ? A2($ren_lang$compiler$Ren$AST$Expr$cata, $elm$core$Basics$always($ren_lang$compiler$Ren$Compiler$Emit$ESModule$expression), expr).expr : A2($the_sett$elm_pretty_printer$Pretty$a, function() {
          if (expr.b.$ === "Lambda" && expr.b.a.b) {
            if (!expr.b.a.b.b) {
              var _v2 = expr.b;
              var _v3 = _v2.a;
              var arg = _v3.a;
              var body = _v2.b;
              return A2($the_sett$elm_pretty_printer$Pretty$append, _public ? $the_sett$elm_pretty_printer$Pretty$string("export ") : $the_sett$elm_pretty_printer$Pretty$empty, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$wrapBuilder(A2($ren_lang$compiler$Ren$AST$Expr$cata, $elm$core$Basics$always($ren_lang$compiler$Ren$Compiler$Emit$ESModule$expression), body)), $the_sett$elm_pretty_printer$Pretty$string("return "))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern(arg)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("function ")))))))))));
            } else {
              var meta = expr.a;
              var _v4 = expr.b;
              var _v5 = _v4.a;
              var arg = _v5.a;
              var args2 = _v5.b;
              var body = _v4.b;
              return A2($the_sett$elm_pretty_printer$Pretty$append, _public ? $the_sett$elm_pretty_printer$Pretty$string("export ") : $the_sett$elm_pretty_printer$Pretty$empty, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("}")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$wrapBuilder(A2($ren_lang$compiler$Ren$AST$Expr$cata, $elm$core$Basics$always($ren_lang$compiler$Ren$Compiler$Emit$ESModule$expression), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2($ren_lang$compiler$Ren$AST$Expr$Lambda, args2, body)))), $the_sett$elm_pretty_printer$Pretty$string("return "))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("{")), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$lambdaPattern(arg)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("function ")))))))))));
            }
          } else {
            return A2($the_sett$elm_pretty_printer$Pretty$append, _public ? $the_sett$elm_pretty_printer$Pretty$string("export ") : $the_sett$elm_pretty_printer$Pretty$empty, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$wrapBuilder(A2($ren_lang$compiler$Ren$AST$Expr$cata, $elm$core$Basics$always($ren_lang$compiler$Ren$Compiler$Emit$ESModule$expression), expr)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" = "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("const ")))));
          }
        }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string($ren_lang$compiler$Ren$Data$Type$toString(type_)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" :: "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string("// "))))));
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$Util$doubleline = A2($the_sett$elm_pretty_printer$Pretty$append, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line);
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$import_ = function(_v0) {
        var path = _v0.path;
        var name = _v0.name;
        var exposed = _v0.exposed;
        var _v1 = _Utils_Tuple2(name, exposed);
        if (!_v1.a.b) {
          if (!_v1.b.b) {
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), $the_sett$elm_pretty_printer$Pretty$string("import "))));
          } else {
            var bindings = _v1.b;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" from "), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(", "), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, bindings))), $the_sett$elm_pretty_printer$Pretty$string("import "))))));
          }
        } else {
          if (!_v1.b.b) {
            var parts = _v1.a;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('"')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(" from "), A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr("$")), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, parts)), $the_sett$elm_pretty_printer$Pretty$string("import * as "))))));
          } else {
            var parts = _v1.a;
            var bindings = _v1.b;
            return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$line, _List_fromArray([
              $ren_lang$compiler$Ren$Compiler$Emit$ESModule$import_({ exposed: _List_Nil, name: parts, path }),
              $ren_lang$compiler$Ren$Compiler$Emit$ESModule$import_({ exposed: bindings, name: _List_Nil, path })
            ]));
          }
        }
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$module_ = function(_v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        return $elm$core$List$isEmpty(imports) ? A2($the_sett$elm_pretty_printer$Pretty$join, $ren_lang$compiler$Ren$Compiler$Emit$Util$doubleline, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$declaration, declarations)) : A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $ren_lang$compiler$Ren$Compiler$Emit$Util$doubleline, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$declaration, declarations)), A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$Util$doubleline, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$line, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$import_, imports))));
      };
      var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$run = A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$module_, $the_sett$elm_pretty_printer$Pretty$pretty(80));
      var $ren_lang$compiler$Ren$Compiler$Emit$run = F2(function(target, m) {
        if (target.$ === "ESModule") {
          return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$run(m);
        } else {
          var showDeclaration = function(_v1) {
            var name = _v1.name;
            var type_ = _v1.type_;
            return name + (" : " + $ren_lang$compiler$Ren$Data$Type$toString($ren_lang$compiler$Ren$Data$Type$reduce(type_)));
          };
          return A2($elm$core$String$join, "\n\n", A2($elm$core$List$map, showDeclaration, m.declarations));
        }
      });
      var $ren_lang$compiler$Ren$Compiler$Optimise$run = F2(function(optimisations, declaration) {
        var apply = F2(function(meta, expr) {
          apply:
            while (true) {
              var result = A3($elm$core$List$foldl, F2(function(f, e) {
                return A2(f, meta, e);
              }), expr, optimisations);
              if (_Utils_eq(result, expr)) {
                return expr;
              } else {
                var $temp$meta = meta, $temp$expr = result;
                meta = $temp$meta;
                expr = $temp$expr;
                continue apply;
              }
            }
        });
        return _Utils_update(declaration, {
          expr: A2($ren_lang$compiler$Ren$AST$Expr$cata, F2(function(meta, expression) {
            return A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2(apply, meta, expression));
          }), declaration.expr)
        });
      });
      var $elm$parser$Parser$Advanced$Done = function(a) {
        return { $: "Done", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingEOF = { $: "ExpectingEOF" };
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol = function(a) {
        return { $: "ExpectingSymbol", a };
      };
      var $elm$parser$Parser$Advanced$Loop = function(a) {
        return { $: "Loop", a };
      };
      var $ren_lang$compiler$Ren$AST$Module$Module = F2(function(imports, declarations) {
        return { declarations, imports };
      });
      var $elm$parser$Parser$Advanced$Token = F2(function(a, b) {
        return { $: "Token", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Module$Declaration = F5(function(_public, name, type_, expr, meta) {
        return { expr, meta, name, _public, type_ };
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$InDeclaration = { $: "InDeclaration" };
      var $elm$parser$Parser$Advanced$Good = F3(function(a, b, c) {
        return { $: "Good", a, b, c };
      });
      var $elm$parser$Parser$Advanced$Parser = function(a) {
        return { $: "Parser", a };
      };
      var $elm$parser$Parser$Advanced$commit = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$Good, true, a, s);
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingChar = { $: "ExpectingChar" };
      var $ren_lang$compiler$Ren$Compiler$Parse$InExpr = { $: "InExpr" };
      var $ren_lang$compiler$Ren$Compiler$Parse$InternalError = function(a) {
        return { $: "InternalError", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$UnexpextedChar = function(a) {
        return { $: "UnexpextedChar", a };
      };
      var $elm$parser$Parser$Advanced$Bad = F2(function(a, b) {
        return { $: "Bad", a, b };
      });
      var $elm$parser$Parser$Advanced$andThen = F2(function(callback, _v0) {
        var parseA = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parseA(s0);
          if (_v1.$ === "Bad") {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p1 = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            var _v2 = callback(a);
            var parseB = _v2.a;
            var _v3 = parseB(s1);
            if (_v3.$ === "Bad") {
              var p2 = _v3.a;
              var x = _v3.b;
              return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
            } else {
              var p2 = _v3.a;
              var b = _v3.b;
              var s2 = _v3.c;
              return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
            }
          }
        });
      });
      var $elm$parser$Parser$Advanced$Forbidden = { $: "Forbidden" };
      var $elm$parser$Parser$Advanced$map2 = F3(function(func, _v0, _v1) {
        var parseA = _v0.a;
        var parseB = _v1.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v2 = parseA(s0);
          if (_v2.$ === "Bad") {
            var p = _v2.a;
            var x = _v2.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p1 = _v2.a;
            var a = _v2.b;
            var s1 = _v2.c;
            var _v3 = parseB(s1);
            if (_v3.$ === "Bad") {
              var p2 = _v3.a;
              var x = _v3.b;
              return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
            } else {
              var p2 = _v3.a;
              var b = _v3.b;
              var s2 = _v3.c;
              return A3($elm$parser$Parser$Advanced$Good, p1 || p2, A2(func, a, b), s2);
            }
          }
        });
      });
      var $elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
      });
      var $elm$parser$Parser$Advanced$ignorer = F2(function(keepParser, ignoreParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
      });
      var $elm$parser$Parser$Advanced$loopHelp = F4(function(p, state, callback, s0) {
        loopHelp:
          while (true) {
            var _v0 = callback(state);
            var parse = _v0.a;
            var _v1 = parse(s0);
            if (_v1.$ === "Good") {
              var p1 = _v1.a;
              var step = _v1.b;
              var s1 = _v1.c;
              if (step.$ === "Loop") {
                var newState = step.a;
                var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                p = $temp$p;
                state = $temp$state;
                callback = $temp$callback;
                s0 = $temp$s0;
                continue loopHelp;
              } else {
                var result = step.a;
                return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
              }
            } else {
              var p1 = _v1.a;
              var x = _v1.b;
              return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
            }
          }
      });
      var $elm$parser$Parser$Advanced$loop = F2(function(state, callback) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
        });
      });
      var $elm$parser$Parser$Advanced$map = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Good") {
            var p = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, p, func(a), s1);
          } else {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          }
        });
      });
      var $elm$parser$Parser$Advanced$Empty = { $: "Empty" };
      var $elm$parser$Parser$Advanced$Append = F2(function(a, b) {
        return { $: "Append", a, b };
      });
      var $elm$parser$Parser$Advanced$oneOfHelp = F3(function(s0, bag, parsers) {
        oneOfHelp:
          while (true) {
            if (!parsers.b) {
              return A2($elm$parser$Parser$Advanced$Bad, false, bag);
            } else {
              var parse = parsers.a.a;
              var remainingParsers = parsers.b;
              var _v1 = parse(s0);
              if (_v1.$ === "Good") {
                var step = _v1;
                return step;
              } else {
                var step = _v1;
                var p = step.a;
                var x = step.b;
                if (p) {
                  return step;
                } else {
                  var $temp$s0 = s0, $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x), $temp$parsers = remainingParsers;
                  s0 = $temp$s0;
                  bag = $temp$bag;
                  parsers = $temp$parsers;
                  continue oneOfHelp;
                }
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$oneOf = function(parsers) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
        });
      };
      var $elm$parser$Parser$Advanced$revAlways = F2(function(_v0, b) {
        return b;
      });
      var $elm$parser$Parser$Advanced$skip = F2(function(iParser, kParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
      });
      var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(function(ender, ws, parseItem, sep, revItems) {
        var chompRest = function(item) {
          return A5($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep, A2($elm$core$List$cons, item, revItems));
        };
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$map, function(item) {
            return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
          }, parseItem))),
          A2($elm$parser$Parser$Advanced$map, function(_v0) {
            return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
          }, ender)
        ])));
      });
      var $elm$parser$Parser$Advanced$succeed = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A3($elm$parser$Parser$Advanced$Good, false, a, s);
        });
      };
      var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(function(ws, parseItem, sep, revItems) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$map, function(item) {
            return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
          }, A2($elm$parser$Parser$Advanced$ignorer, parseItem, A2($elm$parser$Parser$Advanced$ignorer, ws, A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
          A2($elm$parser$Parser$Advanced$map, function(_v0) {
            return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
          }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
        ]));
      });
      var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(function(ender, ws, parseItem, sep, revItems) {
        var parseEnd = A2($elm$parser$Parser$Advanced$map, function(_v0) {
          return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
        }, ender);
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(item) {
              return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
            }, parseItem),
            parseEnd
          ])))),
          parseEnd
        ])));
      });
      var $elm$parser$Parser$Advanced$sequenceEnd = F5(function(ender, ws, parseItem, sep, trailing) {
        var chompRest = function(item) {
          switch (trailing.$) {
            case "Forbidden":
              return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
            case "Optional":
              return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
            default:
              return A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$loop, _List_fromArray([item]), A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))), ender);
          }
        };
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
          A2($elm$parser$Parser$Advanced$map, function(_v0) {
            return _List_Nil;
          }, ender)
        ]));
      });
      var $elm$parser$Parser$Advanced$AddRight = F2(function(a, b) {
        return { $: "AddRight", a, b };
      });
      var $elm$parser$Parser$Advanced$DeadEnd = F4(function(row, col, problem, contextStack) {
        return { col, contextStack, problem, row };
      });
      var $elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
      });
      var $elm$core$String$isEmpty = function(string) {
        return string === "";
      };
      var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
      var $elm$core$Basics$negate = function(n) {
        return -n;
      };
      var $elm$parser$Parser$Advanced$token = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
          var newOffset = _v1.a;
          var newRow = _v1.b;
          var newCol = _v1.c;
          return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, { col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src });
        });
      };
      var $elm$parser$Parser$Advanced$sequence = function(i) {
        return A2($elm$parser$Parser$Advanced$skip, $elm$parser$Parser$Advanced$token(i.start), A2($elm$parser$Parser$Advanced$skip, i.spaces, A5($elm$parser$Parser$Advanced$sequenceEnd, $elm$parser$Parser$Advanced$token(i.end), i.spaces, i.item, $elm$parser$Parser$Advanced$token(i.separator), i.trailing)));
      };
      var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
      var $elm$parser$Parser$Advanced$chompWhileHelp = F5(function(isGood, offset, row, col, s0) {
        chompWhileHelp:
          while (true) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
            if (_Utils_eq(newOffset, -1)) {
              return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s0.offset, offset) < 0, _Utils_Tuple0, { col, context: s0.context, indent: s0.indent, offset, row, src: s0.src });
            } else {
              if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
              } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$chompWhile = function(isGood) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
        });
      };
      var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(" ")) || (_Utils_eq(c, _Utils_chr("\n")) || _Utils_eq(c, _Utils_chr("\r")));
      });
      var $dmy$elm_pratt_parser$Pratt$Advanced$filter = F3(function(_v0, currentPrecedence, leftExpression) {
        var precedence = _v0.a;
        var parser = _v0.b;
        return _Utils_cmp(precedence, currentPrecedence) > 0 ? $elm$core$Maybe$Just(parser(leftExpression)) : $elm$core$Maybe$Nothing;
      });
      var $dmy$elm_pratt_parser$Pratt$Advanced$operation = F3(function(config, precedence, leftExpression) {
        var conf = config.a;
        return $elm$parser$Parser$Advanced$oneOf(A2($elm$core$List$filterMap, function(toOperation) {
          return A3($dmy$elm_pratt_parser$Pratt$Advanced$filter, toOperation(config), precedence, leftExpression);
        }, conf.andThenOneOf));
      });
      var $dmy$elm_pratt_parser$Pratt$Advanced$expressionHelp = function(_v0) {
        var config = _v0.a;
        var conf = config.a;
        var precedence = _v0.b;
        var leftExpression = _v0.c;
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), conf.spaces), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$map, function(expr) {
            return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple3(config, precedence, expr));
          }, A3($dmy$elm_pratt_parser$Pratt$Advanced$operation, config, precedence, leftExpression)),
          $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(leftExpression))
        ])));
      };
      var $elm$parser$Parser$Advanced$lazy = function(thunk) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v0 = thunk(_Utils_Tuple0);
          var parse = _v0.a;
          return parse(s);
        });
      };
      var $dmy$elm_pratt_parser$Pratt$Advanced$subExpression = F2(function(precedence, config) {
        var conf = config.a;
        return A2($elm$parser$Parser$Advanced$andThen, function(leftExpression) {
          return A2($elm$parser$Parser$Advanced$loop, _Utils_Tuple3(config, precedence, leftExpression), $dmy$elm_pratt_parser$Pratt$Advanced$expressionHelp);
        }, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), conf.spaces), $elm$parser$Parser$Advanced$lazy(function(_v0) {
          return $elm$parser$Parser$Advanced$oneOf(A2($elm$core$List$map, $elm$core$Basics$apR(config), conf.oneOf));
        })));
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$array = function(config) {
        return A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Array), $elm$parser$Parser$Advanced$sequence({
          end: A2($elm$parser$Parser$Advanced$Token, "]", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("]")),
          item: A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config),
          separator: A2($elm$parser$Parser$Advanced$Token, ",", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(",")),
          spaces: $elm$parser$Parser$Advanced$spaces,
          start: A2($elm$parser$Parser$Advanced$Token, "[", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("[")),
          trailing: $elm$parser$Parser$Advanced$Forbidden
        }));
      };
      var $elm$parser$Parser$Advanced$backtrackable = function(_v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Bad") {
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, false, x);
          } else {
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
          }
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingKeyword = function(a) {
        return { $: "ExpectingKeyword", a };
      };
      var $elm$parser$Parser$Advanced$keyword = function(_v0) {
        var kwd = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(kwd);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
          var newOffset = _v1.a;
          var newRow = _v1.b;
          var newCol = _v1.c;
          return _Utils_eq(newOffset, -1) || 0 <= A3($elm$parser$Parser$Advanced$isSubChar, function(c) {
            return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr("_"));
          }, newOffset, s.src) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, { col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src });
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$keyword = function(s) {
        return $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, s, $ren_lang$compiler$Ren$Compiler$Parse$ExpectingKeyword(s)));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$keywords = $elm$core$Set$fromList($elm$core$List$concat(_List_fromArray([
        _List_fromArray(["import", "as", "exposing"]),
        _List_fromArray(["pub", "extern", "run"]),
        _List_fromArray(["fun", "let", "ret"]),
        _List_fromArray(["if", "then", "else"]),
        _List_fromArray(["where", "is"]),
        _List_fromArray(["true", "false"])
      ])));
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingCamelCase = { $: "ExpectingCamelCase" };
      var $elm$core$String$slice = _String_slice;
      var $elm$parser$Parser$Advanced$varHelp = F7(function(isGood, offset, row, col, src, indent, context) {
        varHelp:
          while (true) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
            if (_Utils_eq(newOffset, -1)) {
              return { col, context, indent, offset, row, src };
            } else {
              if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
              } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
              }
            }
          }
      });
      var $elm$parser$Parser$Advanced$variable = function(i) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
          if (_Utils_eq(firstOffset, -1)) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
          } else {
            var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
            var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
            return A2($elm$core$Set$member, name, i.reserved) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
          }
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName = function(reserved) {
        return $elm$parser$Parser$Advanced$variable({ expecting: $ren_lang$compiler$Ren$Compiler$Parse$ExpectingCamelCase, inner: $elm$core$Char$isAlphaNum, reserved, start: $elm$core$Char$isLower });
      };
      var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
      var $ren_lang$compiler$Ren$Compiler$Parse$symbol = function(s) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, s, $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(s)));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$binding = function(config) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair("_")), $ren_lang$compiler$Ren$Compiler$Parse$keyword("run")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config))),
          $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair), $ren_lang$compiler$Ren$Compiler$Parse$keyword("let")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("=")), $elm$parser$Parser$Advanced$spaces)), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config)))
        ]));
      };
      var $ren_lang$compiler$Ren$Data$Span$Pos = F2(function(line, column) {
        return { column, line };
      });
      var $ren_lang$compiler$Ren$Data$Span$Span = F2(function(start, end) {
        return { end, start };
      });
      var $ren_lang$compiler$Ren$Data$Span$fromTuples = F2(function(start, end) {
        return A2($ren_lang$compiler$Ren$Data$Span$Span, A2($ren_lang$compiler$Data$Tuple2$apply, $ren_lang$compiler$Ren$Data$Span$Pos, start), A2($ren_lang$compiler$Data$Tuple2$apply, $ren_lang$compiler$Ren$Data$Span$Pos, end));
      });
      var $elm$parser$Parser$Advanced$getPosition = $elm$parser$Parser$Advanced$Parser(function(s) {
        return A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple2(s.row, s.col), s);
      });
      var $ren_lang$compiler$Ren$Data$Span$parser = F2(function(f, p) {
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(start, a, end) {
          return A2(f, A2($ren_lang$compiler$Ren$Data$Span$fromTuples, start, end), a);
        })), $elm$parser$Parser$Advanced$getPosition), p), $elm$parser$Parser$Advanced$getPosition);
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$block = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Block), $ren_lang$compiler$Ren$Compiler$Parse$symbol("{")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(bindings) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(b) {
              return A2($elm$core$List$cons, b, bindings);
            }), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$binding(config), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v0) {
              return $elm$core$List$reverse(bindings);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$keyword("ret")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0))), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("}")))));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$boolean = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Boolean), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(true), $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, "true", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingKeyword("true")))),
        A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(false), $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, "false", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingKeyword("false"))))
      ])));
      var $elm$parser$Parser$Advanced$chompIf = F2(function(isGood, expecting) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
          return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : _Utils_eq(newOffset, -2) ? A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, { col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src }) : A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, { col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src });
        });
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$conditional = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Conditional), $ren_lang$compiler$Ren$Compiler$Parse$keyword("if")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$keyword("then")), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$keyword("else")), $elm$parser$Parser$Advanced$spaces)), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config))));
      };
      var $dmy$elm_pratt_parser$Pratt$Advanced$Config = function(a) {
        return { $: "Config", a };
      };
      var $dmy$elm_pratt_parser$Pratt$Advanced$expression = function(config) {
        return A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, $dmy$elm_pratt_parser$Pratt$Advanced$Config({ andThenOneOf: config.andThenOneOf, oneOf: config.oneOf, spaces: config.spaces }));
      };
      var $elm$parser$Parser$Advanced$mapChompedString = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(s0);
          if (_v1.$ === "Bad") {
            var p = _v1.a;
            var x = _v1.b;
            return A2($elm$parser$Parser$Advanced$Bad, p, x);
          } else {
            var p = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, p, A2(func, A3($elm$core$String$slice, s0.offset, s1.offset, s0.src), a), s1);
          }
        });
      });
      var $elm$parser$Parser$Advanced$getChompedString = function(parser) {
        return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$local = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Local), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords));
      var $ren_lang$compiler$Ren$AST$Expr$Placeholder = function(a) {
        return { $: "Placeholder", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$placeholder = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Placeholder), $ren_lang$compiler$Ren$Compiler$Parse$symbol("_")), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords)),
        $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
      ])));
      var $ren_lang$compiler$Ren$AST$Expr$Scoped = F2(function(a, b) {
        return { $: "Scoped", a, b };
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingCapitalCase = { $: "ExpectingCapitalCase" };
      var $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName = function(reserved) {
        return $elm$parser$Parser$Advanced$variable({ expecting: $ren_lang$compiler$Ren$Compiler$Parse$ExpectingCapitalCase, inner: $elm$core$Char$isAlphaNum, reserved, start: $elm$core$Char$isUpper });
      };
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$scoped() {
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Scoped), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName($elm$core$Set$empty), $ren_lang$compiler$Ren$Compiler$Parse$symbol("."))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $elm$parser$Parser$Advanced$lazy(function(_v0) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$scoped();
          }),
          $ren_lang$compiler$Ren$Compiler$Parse$local
        ])));
      }
      try {
        var $ren_lang$compiler$Ren$Compiler$Parse$scoped = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$scoped();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$scoped = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$scoped;
        };
      } catch ($) {
        throw "Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502    scoped\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $ren_lang$compiler$Ren$Compiler$Parse$identifier = A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Identifier), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$ren_lang$compiler$Ren$Compiler$Parse$placeholder, $ren_lang$compiler$Ren$Compiler$Parse$local, $ren_lang$compiler$Ren$Compiler$Parse$scoped]))));
      var $elm$parser$Parser$Advanced$Located = F3(function(row, col, context) {
        return { col, context, row };
      });
      var $elm$parser$Parser$Advanced$changeContext = F2(function(newContext, s) {
        return { col: s.col, context: newContext, indent: s.indent, offset: s.offset, row: s.row, src: s.src };
      });
      var $elm$parser$Parser$Advanced$inContext = F2(function(context, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
          var _v1 = parse(A2($elm$parser$Parser$Advanced$changeContext, A2($elm$core$List$cons, A3($elm$parser$Parser$Advanced$Located, s0.row, s0.col, context), s0.context), s0));
          if (_v1.$ === "Good") {
            var p = _v1.a;
            var a = _v1.b;
            var s1 = _v1.c;
            return A3($elm$parser$Parser$Advanced$Good, p, a, A2($elm$parser$Parser$Advanced$changeContext, s0.context, s1));
          } else {
            var step = _v1;
            return step;
          }
        });
      });
      var $ren_lang$compiler$Ren$AST$Expr$RecordDestructure = function(a) {
        return { $: "RecordDestructure", a };
      };
      var $ren_lang$compiler$Ren$AST$Expr$Typeof = F2(function(a, b) {
        return { $: "Typeof", a, b };
      });
      var $ren_lang$compiler$Ren$AST$Expr$VariantDestructure = F2(function(a, b) {
        return { $: "VariantDestructure", a, b };
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingNumber = { $: "ExpectingNumber" };
      var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
      var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
      var $elm$parser$Parser$Advanced$bumpOffset = F2(function(newOffset, s) {
        return { col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src };
      });
      var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
      var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
      var $elm$parser$Parser$Advanced$consumeExp = F2(function(offset, src) {
        if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
          var eOffset = offset + 1;
          var expOffset = A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src) ? eOffset + 1 : eOffset;
          var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
          return _Utils_eq(expOffset, newOffset) ? -newOffset : newOffset;
        } else {
          return offset;
        }
      });
      var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(function(offset, src) {
        return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2($elm$parser$Parser$Advanced$consumeExp, A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src), src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
      });
      var $elm$parser$Parser$Advanced$finalizeInt = F5(function(invalid, handler, startOffset, _v0, s) {
        var endOffset = _v0.a;
        var n = _v0.b;
        if (handler.$ === "Err") {
          var x = handler.a;
          return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, x));
        } else {
          var toValue = handler.a;
          return _Utils_eq(startOffset, endOffset) ? A2($elm$parser$Parser$Advanced$Bad, _Utils_cmp(s.offset, startOffset) < 0, A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
        }
      });
      var $elm$parser$Parser$Advanced$fromInfo = F4(function(row, col, x, context) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
      });
      var $elm$core$String$toFloat = _String_toFloat;
      var $elm$parser$Parser$Advanced$finalizeFloat = F6(function(invalid, expecting, intSettings, floatSettings, intPair, s) {
        var intOffset = intPair.a;
        var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
        if (floatOffset < 0) {
          return A2($elm$parser$Parser$Advanced$Bad, true, A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
        } else {
          if (_Utils_eq(s.offset, floatOffset)) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting));
          } else {
            if (_Utils_eq(intOffset, floatOffset)) {
              return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
            } else {
              if (floatSettings.$ === "Err") {
                var x = floatSettings.a;
                return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
              } else {
                var toValue = floatSettings.a;
                var _v1 = $elm$core$String$toFloat(A3($elm$core$String$slice, s.offset, floatOffset, s.src));
                if (_v1.$ === "Nothing") {
                  return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                } else {
                  var n = _v1.a;
                  return A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
                }
              }
            }
          }
        }
      });
      var $elm$parser$Parser$Advanced$number = function(c) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
            var zeroOffset = s.offset + 1;
            var baseOffset = zeroOffset + 1;
            return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.hex, baseOffset, A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.octal, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.binary, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src), s) : A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, _Utils_Tuple2(zeroOffset, 0), s);
          } else {
            return A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src), s);
          }
        });
      };
      var $elm$parser$Parser$Advanced$problem = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$number = function() {
        var numberConfig = {
          binary: $elm$core$Result$Ok($elm$core$Basics$toFloat),
          expecting: $ren_lang$compiler$Ren$Compiler$Parse$ExpectingNumber,
          _float: $elm$core$Result$Ok($elm$core$Basics$identity),
          hex: $elm$core$Result$Ok($elm$core$Basics$toFloat),
          _int: $elm$core$Result$Ok($elm$core$Basics$toFloat),
          invalid: $ren_lang$compiler$Ren$Compiler$Parse$ExpectingNumber,
          octal: $elm$core$Result$Ok($elm$core$Basics$toFloat)
        };
        return A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Number), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$negate), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "-", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("-")))), $elm$parser$Parser$Advanced$number(numberConfig)),
          $elm$parser$Parser$Advanced$number(numberConfig)
        ])), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$andThen, function(_v0) {
            return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$ExpectingNumber);
          }, A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isAlpha, $ren_lang$compiler$Ren$Compiler$Parse$ExpectingNumber)),
          $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)
        ]))));
      }();
      var $elm$core$String$fromList = _String_fromList;
      var $ren_lang$compiler$Ren$Compiler$Parse$quotedString = function(quote) {
        var s = $elm$core$String$fromChar(quote);
        var _char = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$symbol(s)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(_v0) {
              return _Utils_chr("\\");
            }, $ren_lang$compiler$Ren$Compiler$Parse$symbol("\\")),
            A2($elm$parser$Parser$Advanced$map, function(_v1) {
              return _Utils_chr('"');
            }, $ren_lang$compiler$Ren$Compiler$Parse$symbol('"'))
          ]))),
          A2($elm$parser$Parser$Advanced$andThen, function(_v2) {
            return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$UnexpextedChar(quote));
          }, $ren_lang$compiler$Ren$Compiler$Parse$symbol(s)),
          A2($elm$parser$Parser$Advanced$andThen, A2($elm$core$Basics$composeR, $elm$core$String$uncons, A2($elm$core$Basics$composeR, $elm$core$Maybe$map(A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$parser$Parser$Advanced$succeed)), $elm$core$Maybe$withDefault($elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$InternalError("Multiple characters chomped in `character`"))))), $elm$parser$Parser$Advanced$getChompedString(A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Basics$neq(_Utils_chr("\n")), $ren_lang$compiler$Ren$Compiler$Parse$ExpectingChar)))
        ]));
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$String$fromList), $ren_lang$compiler$Ren$Compiler$Parse$symbol(s)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(cs) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(c) {
              return A2($elm$core$List$cons, c, cs);
            }), _char))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, $elm$parser$Parser$Advanced$succeed($elm$core$List$reverse(cs)))
          ]));
        }), $ren_lang$compiler$Ren$Compiler$Parse$symbol(s)));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$string = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$String), $ren_lang$compiler$Ren$Compiler$Parse$quotedString(_Utils_chr('"')));
      var $ren_lang$compiler$Ren$Compiler$Parse$undefined = A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Undefined), $ren_lang$compiler$Ren$Compiler$Parse$symbol("()"));
      var $ren_lang$compiler$Ren$Compiler$Parse$literalPattern = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$LiteralPattern), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([$ren_lang$compiler$Ren$Compiler$Parse$boolean, $ren_lang$compiler$Ren$Compiler$Parse$number, $ren_lang$compiler$Ren$Compiler$Parse$string, $ren_lang$compiler$Ren$Compiler$Parse$undefined])));
      var $ren_lang$compiler$Ren$Compiler$Parse$name = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Name), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords));
      var $ren_lang$compiler$Ren$AST$Expr$Spread = function(a) {
        return { $: "Spread", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$spread = $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Spread), $ren_lang$compiler$Ren$Compiler$Parse$symbol("...")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords)));
      var $ren_lang$compiler$Ren$AST$Expr$Wildcard = function(a) {
        return { $: "Wildcard", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$wildcard = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Wildcard), $ren_lang$compiler$Ren$Compiler$Parse$symbol("_")), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$map, $elm$core$Maybe$Just, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($elm$core$Set$empty)),
        $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
      ])));
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructure(),
          $ren_lang$compiler$Ren$Compiler$Parse$literalPattern,
          $ren_lang$compiler$Ren$Compiler$Parse$name,
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$recordDestructure(),
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateDestructure(),
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$typeof(),
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructure(),
          $ren_lang$compiler$Ren$Compiler$Parse$wildcard
        ]));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructure() {
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$ArrayDestructure), $ren_lang$compiler$Ren$Compiler$Parse$symbol("[")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$List$cons), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v16) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
          }), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(patterns) {
            return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(pat) {
                return A2($elm$core$List$cons, pat, patterns);
              }), $ren_lang$compiler$Ren$Compiler$Parse$symbol(",")), $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$lazy(function(_v17) {
                return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
              })))),
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, $elm$core$List$reverse, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(pat) {
                return A2($elm$core$List$cons, pat, patterns);
              }), $ren_lang$compiler$Ren$Compiler$Parse$symbol(",")), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$spread))),
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v18) {
                return $elm$core$List$reverse(patterns);
              }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
            ]));
          })),
          $elm$parser$Parser$Advanced$succeed(_List_Nil)
        ])), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("]"))));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$recordDestructure() {
        var keyAndPattern = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords), $elm$parser$Parser$Advanced$spaces)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $ren_lang$compiler$Ren$Compiler$Parse$symbol(":")), $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$lazy(function(_v15) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
          })),
          $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
        ])));
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$RecordDestructure), $ren_lang$compiler$Ren$Compiler$Parse$symbol("{")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$List$cons), A2($elm$parser$Parser$Advanced$ignorer, keyAndPattern, $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(patterns) {
            return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(pat) {
                return A2($elm$core$List$cons, pat, patterns);
              }), $ren_lang$compiler$Ren$Compiler$Parse$symbol(",")), $elm$parser$Parser$Advanced$spaces), keyAndPattern))),
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, $elm$core$List$reverse, A2($elm$parser$Parser$Advanced$andThen, function(pat) {
                if (pat.$ === "Spread") {
                  var key = pat.a;
                  return $elm$parser$Parser$Advanced$succeed(A2($elm$core$List$cons, _Utils_Tuple2(key, $elm$core$Maybe$Just(pat)), patterns));
                } else {
                  return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$InternalError(""));
                }
              }, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$symbol(",")), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$spread)))),
              A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v14) {
                return $elm$core$List$reverse(patterns);
              }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
            ]));
          })),
          $elm$parser$Parser$Advanced$succeed(_List_Nil)
        ])), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("}"))));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateDestructure() {
        var joinSegments = F2(function(segment, segments) {
          var _v11 = _Utils_Tuple2(segment, segments);
          if (_v11.a.$ === "Left") {
            if (_v11.b.b && _v11.b.a.$ === "Left") {
              var c = _v11.a.a;
              var _v12 = _v11.b;
              var s = _v12.a.a;
              var rest = _v12.b;
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left(A2($elm$core$String$cons, c, s)), rest);
            } else {
              var c = _v11.a.a;
              var rest = _v11.b;
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left($elm$core$String$fromChar(c)), rest);
            }
          } else {
            var e = _v11.a.a;
            var rest = _v11.b;
            return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Right(e), rest);
          }
        });
        var _char = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "\\", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("\\")))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(_v4) {
              return _Utils_chr("\\");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "\\", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("\\")))),
            A2($elm$parser$Parser$Advanced$map, function(_v5) {
              return _Utils_chr('"');
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, '"', $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol('"')))),
            A2($elm$parser$Parser$Advanced$map, function(_v6) {
              return _Utils_chr("'");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "'", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("'")))),
            A2($elm$parser$Parser$Advanced$map, function(_v7) {
              return _Utils_chr("\n");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "n", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("n")))),
            A2($elm$parser$Parser$Advanced$map, function(_v8) {
              return _Utils_chr("	");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "t", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("t")))),
            A2($elm$parser$Parser$Advanced$map, function(_v9) {
              return _Utils_chr("\r");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "r", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("r"))))
          ]))),
          A2($elm$parser$Parser$Advanced$andThen, function(_v10) {
            return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$UnexpextedChar(_Utils_chr("`")));
          }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "`", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("`")))),
          A2($elm$parser$Parser$Advanced$andThen, A2($elm$core$Basics$composeR, $elm$core$String$uncons, A2($elm$core$Basics$composeR, $elm$core$Maybe$map(A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$parser$Parser$Advanced$succeed)), $elm$core$Maybe$withDefault($elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$InternalError("Multiple characters chomped in `parseChar`"))))), $elm$parser$Parser$Advanced$getChompedString(A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Basics$neq(_Utils_chr("\n")), $ren_lang$compiler$Ren$Compiler$Parse$ExpectingChar)))
        ]));
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(A2($elm$core$Basics$composeR, A2($elm$core$List$foldl, joinSegments, _List_Nil), $ren_lang$compiler$Ren$AST$Expr$TemplateDestructure)), $ren_lang$compiler$Ren$Compiler$Parse$symbol("`")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(segments) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(expr) {
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Right(expr), segments);
            }), $ren_lang$compiler$Ren$Compiler$Parse$symbol("${")), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v3) {
              return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
            }), $ren_lang$compiler$Ren$Compiler$Parse$symbol("}")))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(c) {
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left(c), segments);
            }), _char))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, $elm$parser$Parser$Advanced$succeed(segments))
          ]));
        }), $ren_lang$compiler$Ren$Compiler$Parse$symbol("`"))));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$typeof() {
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Typeof), $ren_lang$compiler$Ren$Compiler$Parse$symbol("@")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName($elm$core$Set$empty), $elm$parser$Parser$Advanced$spaces)), $elm$parser$Parser$Advanced$lazy(function(_v2) {
          return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
        })));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructure() {
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$VariantDestructure), $ren_lang$compiler$Ren$Compiler$Parse$symbol("#")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($elm$core$Set$empty), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(patterns) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(pat) {
              return A2($elm$core$List$cons, pat, patterns);
            }), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v0) {
              return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
            }), $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v1) {
              return $elm$core$List$reverse(patterns);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        })));
      }
      try {
        var $ren_lang$compiler$Ren$Compiler$Parse$pattern = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$pattern = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$pattern;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$arrayDestructure = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructure();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructure = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$arrayDestructure;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$recordDestructure = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$recordDestructure();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$recordDestructure = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$recordDestructure;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$templateDestructure = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateDestructure();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateDestructure = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$templateDestructure;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$typeof = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$typeof();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$typeof = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$typeof;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$variantDestructure = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructure();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructure = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$variantDestructure;
        };
      } catch ($) {
        throw "Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502    pattern\n  \u2502     \u2193\n  \u2502    arrayDestructure\n  \u2502     \u2193\n  \u2502    recordDestructure\n  \u2502     \u2193\n  \u2502    templateDestructure\n  \u2502     \u2193\n  \u2502    typeof\n  \u2502     \u2193\n  \u2502    variantDestructure\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $ren_lang$compiler$Ren$Compiler$Parse$lambda = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(arg, args2, body) {
          return A2($ren_lang$compiler$Ren$AST$Expr$Lambda, A2($elm$core$List$cons, arg, args2), body);
        })), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$pattern, $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(args2) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(arg) {
              return A2($elm$core$List$cons, arg, args2);
            }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$pattern, $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v0) {
              return $elm$core$List$reverse(args2);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("=>")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces)), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config))));
      };
      var $dmy$elm_pratt_parser$Pratt$Advanced$literal = $elm$core$Basics$always;
      var $ren_lang$compiler$Ren$AST$Expr$Add = { $: "Add" };
      var $ren_lang$compiler$Ren$AST$Expr$And = { $: "And" };
      var $ren_lang$compiler$Ren$AST$Expr$Compose = { $: "Compose" };
      var $ren_lang$compiler$Ren$AST$Expr$Cons = { $: "Cons" };
      var $ren_lang$compiler$Ren$AST$Expr$Eq = { $: "Eq" };
      var $ren_lang$compiler$Ren$AST$Expr$Gt = { $: "Gt" };
      var $ren_lang$compiler$Ren$AST$Expr$Join = { $: "Join" };
      var $ren_lang$compiler$Ren$AST$Expr$Lt = { $: "Lt" };
      var $ren_lang$compiler$Ren$AST$Expr$Lte = { $: "Lte" };
      var $ren_lang$compiler$Ren$AST$Expr$Mod = { $: "Mod" };
      var $ren_lang$compiler$Ren$AST$Expr$Mul = { $: "Mul" };
      var $ren_lang$compiler$Ren$AST$Expr$NotEq = { $: "NotEq" };
      var $ren_lang$compiler$Ren$AST$Expr$Or = { $: "Or" };
      var $ren_lang$compiler$Ren$AST$Expr$Pipe = { $: "Pipe" };
      var $ren_lang$compiler$Ren$AST$Expr$Pow = { $: "Pow" };
      var $ren_lang$compiler$Ren$AST$Expr$Sub = { $: "Sub" };
      var $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp = F4(function(_v0, operator, apply, config) {
        var leftPrecedence = _v0.a;
        var rightPrecedence = _v0.b;
        return _Utils_Tuple2(leftPrecedence, function(left) {
          return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(apply(left)), operator), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, rightPrecedence, config));
        });
      });
      var $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft = function(precedence) {
        return $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp(_Utils_Tuple2(precedence, precedence));
      };
      var $dmy$elm_pratt_parser$Pratt$Advanced$infixRight = function(precedence) {
        return $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp(_Utils_Tuple2(precedence, precedence - 1));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$ExpectingOperator = function(a) {
        return { $: "ExpectingOperator", a };
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$operator = function(s) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, s, $ren_lang$compiler$Ren$Compiler$Parse$ExpectingOperator(s)));
      };
      var $ren_lang$compiler$Ren$AST$Expr$wrap = F2(function(meta, expression) {
        return A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, expression);
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$prattExpression = function(parsers) {
        return A2($elm$parser$Parser$Advanced$inContext, $ren_lang$compiler$Ren$Compiler$Parse$InExpr, $dmy$elm_pratt_parser$Pratt$Advanced$expression({
          andThenOneOf: function() {
            var locateInfix = F2(function(parser, expr) {
              return A2($elm$parser$Parser$Advanced$andThen, function(_v0) {
                var e = _v0.b;
                if (e.$ === "Infix") {
                  var _v2 = e.b;
                  var start = _v2.a.start;
                  var _v3 = e.c;
                  var end = _v3.a.end;
                  return $elm$parser$Parser$Advanced$succeed(A2($ren_lang$compiler$Ren$AST$Expr$Expr, A2($ren_lang$compiler$Ren$Data$Span$Span, start, end), e));
                } else {
                  return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$InternalError("Parsed something other than an `Infix` expression in `andThenOneOf`"));
                }
              }, parser(expr));
            });
            var dummySpan = A2($ren_lang$compiler$Ren$Data$Span$fromTuples, _Utils_Tuple2(0, 0), _Utils_Tuple2(0, 0));
            var infix_ = F4(function(parser, precedence, sym, op) {
              return A2($elm$core$Basics$composeL, $elm$core$Tuple$mapSecond(locateInfix), A3(parser, precedence, $ren_lang$compiler$Ren$Compiler$Parse$operator(sym), F2(function(lhs, rhs) {
                return A2($ren_lang$compiler$Ren$AST$Expr$wrap, dummySpan, A3($ren_lang$compiler$Ren$AST$Expr$Infix, op, lhs, rhs));
              })));
            });
            return _List_fromArray([
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 1, "|>", $ren_lang$compiler$Ren$AST$Expr$Pipe),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 9, ">>", $ren_lang$compiler$Ren$AST$Expr$Compose),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, "==", $ren_lang$compiler$Ren$AST$Expr$Eq),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, "!=", $ren_lang$compiler$Ren$AST$Expr$NotEq),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, "<=", $ren_lang$compiler$Ren$AST$Expr$Lte),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, ">=", $ren_lang$compiler$Ren$AST$Expr$Lte),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 3, "&&", $ren_lang$compiler$Ren$AST$Expr$And),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 2, "||", $ren_lang$compiler$Ren$AST$Expr$Or),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 5, "::", $ren_lang$compiler$Ren$AST$Expr$Cons),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 5, "++", $ren_lang$compiler$Ren$AST$Expr$Join),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, "<", $ren_lang$compiler$Ren$AST$Expr$Lt),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 4, ">", $ren_lang$compiler$Ren$AST$Expr$Gt),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 6, "+", $ren_lang$compiler$Ren$AST$Expr$Add),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 6, "-", $ren_lang$compiler$Ren$AST$Expr$Sub),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft, 7, "*", $ren_lang$compiler$Ren$AST$Expr$Mul),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 7, "^", $ren_lang$compiler$Ren$AST$Expr$Pow),
              A4(infix_, $dmy$elm_pratt_parser$Pratt$Advanced$infixRight, 7, "%", $ren_lang$compiler$Ren$AST$Expr$Mod)
            ]);
          }(),
          oneOf: parsers,
          spaces: $elm$parser$Parser$Advanced$spaces
        }));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$record = function(config) {
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Record), $elm$parser$Parser$Advanced$sequence({
          end: A2($elm$parser$Parser$Advanced$Token, "}", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("}")),
          item: $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords), $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, ":", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(":")))), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces)), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config))),
            A2($elm$parser$Parser$Advanced$map, function(_v0) {
              var loc = _v0.a;
              var key = _v0.b;
              return _Utils_Tuple2(key, A2($ren_lang$compiler$Ren$AST$Expr$Expr, loc, $ren_lang$compiler$Ren$AST$Expr$Identifier($ren_lang$compiler$Ren$AST$Expr$Local(key))));
            }, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(start, key, end) {
              return _Utils_Tuple2(A2($ren_lang$compiler$Ren$Data$Span$fromTuples, start, end), key);
            })), $elm$parser$Parser$Advanced$getPosition), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords)), $elm$parser$Parser$Advanced$getPosition))
          ])),
          separator: A2($elm$parser$Parser$Advanced$Token, ",", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(",")),
          spaces: $elm$parser$Parser$Advanced$spaces,
          start: A2($elm$parser$Parser$Advanced$Token, "{", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("{")),
          trailing: $elm$parser$Parser$Advanced$Forbidden
        })));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$any = A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Any), $ren_lang$compiler$Ren$Compiler$Parse$symbol("*"));
      var $ren_lang$compiler$Ren$Compiler$Parse$con = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Con), $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName($elm$core$Set$empty)),
        A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Con("()")), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "()", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("()"))))
      ]));
      var $ren_lang$compiler$Ren$Compiler$Parse$hole = A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Hole), $ren_lang$compiler$Ren$Compiler$Parse$symbol("?"));
      var $ren_lang$compiler$Ren$Compiler$Parse$var = A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Var), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords));
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$fun(),
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$app(),
          $ren_lang$compiler$Ren$Compiler$Parse$var,
          $ren_lang$compiler$Ren$Compiler$Parse$con,
          $ren_lang$compiler$Ren$Compiler$Parse$any,
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$rec(),
          $ren_lang$compiler$Ren$Compiler$Parse$hole,
          $elm$parser$Parser$Advanced$lazy(function(_v3) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype();
          })
        ]));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$fun() {
        var typeWithoutFun = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype(),
          $ren_lang$compiler$Ren$Compiler$Parse$any,
          $ren_lang$compiler$Ren$Compiler$Parse$var,
          $ren_lang$compiler$Ren$Compiler$Parse$con,
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$app(),
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$rec(),
          $ren_lang$compiler$Ren$Compiler$Parse$hole
        ]));
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Fun), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, typeWithoutFun, $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$symbol("->"),
          $ren_lang$compiler$Ren$Compiler$Parse$symbol("\u2192")
        ]))), $elm$parser$Parser$Advanced$spaces)), $elm$parser$Parser$Advanced$lazy(function(_v2) {
          return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_();
        })));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$app() {
        var typeWithoutApp = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype(),
          $ren_lang$compiler$Ren$Compiler$Parse$var,
          $ren_lang$compiler$Ren$Compiler$Parse$con,
          $ren_lang$compiler$Ren$Compiler$Parse$any,
          $ren_lang$compiler$Ren$Compiler$Parse$hole
        ]));
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(con_, arg, args2) {
          return A2($ren_lang$compiler$Ren$Data$Type$App, con_, A2($elm$core$List$cons, arg, args2));
        })), A2($elm$parser$Parser$Advanced$ignorer, typeWithoutApp, $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, typeWithoutApp, $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(args2) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(arg) {
              return A2($elm$core$List$cons, arg, args2);
            }), A2($elm$parser$Parser$Advanced$ignorer, typeWithoutApp, $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, $elm$parser$Parser$Advanced$succeed($elm$core$List$reverse(args2)))
          ]));
        })));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$rec() {
        return A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(A2($elm$core$Basics$composeL, $ren_lang$compiler$Ren$Data$Type$Rec, $elm$core$Dict$fromList)), $elm$parser$Parser$Advanced$sequence({
          end: A2($elm$parser$Parser$Advanced$Token, "}", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("}")),
          item: A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol(":")), $elm$parser$Parser$Advanced$spaces)), $elm$parser$Parser$Advanced$lazy(function(_v1) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_();
          })),
          separator: A2($elm$parser$Parser$Advanced$Token, ",", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(",")),
          spaces: $elm$parser$Parser$Advanced$spaces,
          start: A2($elm$parser$Parser$Advanced$Token, "{", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("{")),
          trailing: $elm$parser$Parser$Advanced$Forbidden
        }));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype() {
        return $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$symbol("(")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v0) {
          return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_();
        }), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol(")"))));
      }
      try {
        var $ren_lang$compiler$Ren$Compiler$Parse$type_ = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$type_ = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$type_;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$fun = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$fun();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$fun = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$fun;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$app = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$app();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$app = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$app;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$rec = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$rec();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$rec = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$rec;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$subtype = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subtype = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$subtype;
        };
      } catch ($) {
        throw "Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502    type_\n  \u2502     \u2193\n  \u2502    fun\n  \u2502     \u2193\n  \u2502    app\n  \u2502     \u2193\n  \u2502    rec\n  \u2502     \u2193\n  \u2502    subtype\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $ren_lang$compiler$Ren$Compiler$Parse$application = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(f, arg, args2) {
          return A2($ren_lang$compiler$Ren$AST$Expr$Application, f, A2($elm$core$List$cons, arg, args2));
        })), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$access(),
          $ren_lang$compiler$Ren$Compiler$Parse$block(config),
          $elm$parser$Parser$Advanced$lazy(function(_v14) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression();
          }),
          $ren_lang$compiler$Ren$Compiler$Parse$identifier
        ])), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised(), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(args2) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(arg) {
              return A2($elm$core$List$cons, arg, args2);
            }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised(), $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v15) {
              return $elm$core$List$reverse(args2);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }))));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$literal = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Literal), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$array(config),
          $ren_lang$compiler$Ren$Compiler$Parse$boolean,
          $ren_lang$compiler$Ren$Compiler$Parse$number,
          $ren_lang$compiler$Ren$Compiler$Parse$record(config),
          $ren_lang$compiler$Ren$Compiler$Parse$string,
          $ren_lang$compiler$Ren$Compiler$Parse$template(config),
          $ren_lang$compiler$Ren$Compiler$Parse$undefined,
          $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variant()
        ]))));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$match = function(config) {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Match), $ren_lang$compiler$Ren$Compiler$Parse$keyword("where")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(cases) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(F3(function(pat, guard, body) {
              return A2($elm$core$List$cons, _Utils_Tuple3(pat, guard, body), cases);
            })), $ren_lang$compiler$Ren$Compiler$Parse$keyword("is")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$pattern, $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
              A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just), $ren_lang$compiler$Ren$Compiler$Parse$keyword("if")), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$prattExpression(_List_fromArray([
                $ren_lang$compiler$Ren$Compiler$Parse$conditional,
                $ren_lang$compiler$Ren$Compiler$Parse$match,
                $ren_lang$compiler$Ren$Compiler$Parse$application,
                $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$cyclic$access()),
                $ren_lang$compiler$Ren$Compiler$Parse$block,
                $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$identifier),
                $ren_lang$compiler$Ren$Compiler$Parse$literal,
                $dmy$elm_pratt_parser$Pratt$Advanced$literal($elm$parser$Parser$Advanced$lazy(function(_v12) {
                  return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression();
                }))
              ]))),
              $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
            ])), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol("=>")), $elm$parser$Parser$Advanced$spaces)), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, config))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v13) {
              return $elm$core$List$reverse(cases);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }))));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$template = function(config) {
        var joinSegments = F2(function(segment, segments) {
          var _v9 = _Utils_Tuple2(segment, segments);
          if (_v9.a.$ === "Left") {
            if (_v9.b.b && _v9.b.a.$ === "Left") {
              var c = _v9.a.a;
              var _v10 = _v9.b;
              var s = _v10.a.a;
              var rest = _v10.b;
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left(A2($elm$core$String$cons, c, s)), rest);
            } else {
              var c = _v9.a.a;
              var rest = _v9.b;
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left($elm$core$String$fromChar(c)), rest);
            }
          } else {
            var e = _v9.a.a;
            var rest = _v9.b;
            return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Right(e), rest);
          }
        });
        var _char = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "\\", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("\\")))), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(_v2) {
              return _Utils_chr("\\");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "\\", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("\\")))),
            A2($elm$parser$Parser$Advanced$map, function(_v3) {
              return _Utils_chr('"');
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, '"', $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol('"')))),
            A2($elm$parser$Parser$Advanced$map, function(_v4) {
              return _Utils_chr("'");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "'", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("'")))),
            A2($elm$parser$Parser$Advanced$map, function(_v5) {
              return _Utils_chr("\n");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "n", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("n")))),
            A2($elm$parser$Parser$Advanced$map, function(_v6) {
              return _Utils_chr("	");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "t", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("t")))),
            A2($elm$parser$Parser$Advanced$map, function(_v7) {
              return _Utils_chr("\r");
            }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "r", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("r"))))
          ]))),
          A2($elm$parser$Parser$Advanced$andThen, function(_v8) {
            return $elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$UnexpextedChar(_Utils_chr("`")));
          }, $elm$parser$Parser$Advanced$token(A2($elm$parser$Parser$Advanced$Token, "`", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("`")))),
          A2($elm$parser$Parser$Advanced$andThen, A2($elm$core$Basics$composeR, $elm$core$String$uncons, A2($elm$core$Basics$composeR, $elm$core$Maybe$map(A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$parser$Parser$Advanced$succeed)), $elm$core$Maybe$withDefault($elm$parser$Parser$Advanced$problem($ren_lang$compiler$Ren$Compiler$Parse$InternalError("Multiple characters chomped in `parseChar`"))))), $elm$parser$Parser$Advanced$getChompedString(A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Basics$neq(_Utils_chr("\n")), $ren_lang$compiler$Ren$Compiler$Parse$ExpectingChar)))
        ]));
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(A2($elm$core$Basics$composeR, A2($elm$core$List$foldl, joinSegments, _List_Nil), $ren_lang$compiler$Ren$AST$Expr$Template)), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "`", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("`")))), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(segments) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(expr) {
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Right(expr), segments);
            }), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "${", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("${")))), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v1) {
              return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expression();
            }), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "}", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("}")))))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(c) {
              return A2($elm$core$List$cons, $ren_lang$compiler$Data$Either$Left(c), segments);
            }), _char))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, $elm$parser$Parser$Advanced$succeed(segments))
          ]));
        }), $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, "`", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("`")))));
      };
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression() {
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$symbol("(")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expression(), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol(")")));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expression() {
        return $ren_lang$compiler$Ren$Compiler$Parse$prattExpression(_List_fromArray([
          $ren_lang$compiler$Ren$Compiler$Parse$conditional,
          $ren_lang$compiler$Ren$Compiler$Parse$match,
          $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$cyclic$annotation()),
          $ren_lang$compiler$Ren$Compiler$Parse$lambda,
          $ren_lang$compiler$Ren$Compiler$Parse$application,
          $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$cyclic$access()),
          $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$identifier),
          $ren_lang$compiler$Ren$Compiler$Parse$block,
          $ren_lang$compiler$Ren$Compiler$Parse$literal,
          $dmy$elm_pratt_parser$Pratt$Advanced$literal($elm$parser$Parser$Advanced$lazy(function(_v18) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression();
          }))
        ]));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$access() {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(F3(function(expr, accessor, accessors) {
          return A2($ren_lang$compiler$Ren$AST$Expr$Access, expr, A2($elm$core$List$cons, accessor, accessors));
        })), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$lazy(function(_v16) {
          return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised();
        }), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol(".")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0))), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($elm$core$Set$empty), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(accessors) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(function(accessor) {
              return A2($elm$core$List$cons, accessor, accessors);
            }), $ren_lang$compiler$Ren$Compiler$Parse$symbol(".")), $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($elm$core$Set$empty))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v17) {
              return $elm$core$List$reverse(accessors);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }))));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$annotation() {
        return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Annotation), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised(), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$keyword("as")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $elm$parser$Parser$Advanced$spaces)), $ren_lang$compiler$Ren$Compiler$Parse$type_)));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised() {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$inContext, $ren_lang$compiler$Ren$Compiler$Parse$InExpr, $dmy$elm_pratt_parser$Pratt$Advanced$expression({
            andThenOneOf: _List_Nil,
            oneOf: _List_fromArray([
              $ren_lang$compiler$Ren$Compiler$Parse$block,
              function(config) {
                return A2($ren_lang$compiler$Ren$Data$Span$parser, $ren_lang$compiler$Ren$AST$Expr$Expr, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Literal), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                  $ren_lang$compiler$Ren$Compiler$Parse$array(config),
                  $ren_lang$compiler$Ren$Compiler$Parse$boolean,
                  $ren_lang$compiler$Ren$Compiler$Parse$number,
                  $ren_lang$compiler$Ren$Compiler$Parse$record(config),
                  $ren_lang$compiler$Ren$Compiler$Parse$string,
                  $ren_lang$compiler$Ren$Compiler$Parse$template(config),
                  $ren_lang$compiler$Ren$Compiler$Parse$undefined
                ]))));
              },
              $dmy$elm_pratt_parser$Pratt$Advanced$literal($ren_lang$compiler$Ren$Compiler$Parse$identifier)
            ]),
            spaces: $elm$parser$Parser$Advanced$spaces
          })),
          $elm$parser$Parser$Advanced$lazy(function(_v11) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression();
          })
        ]));
      }
      function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variant() {
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Expr$Variant), $ren_lang$compiler$Ren$Compiler$Parse$symbol("#")), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($elm$core$Set$empty), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(exprs) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(expr) {
              return A2($elm$core$List$cons, expr, exprs);
            }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised(), $elm$parser$Parser$Advanced$spaces))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v0) {
              return $elm$core$List$reverse(exprs);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        }));
      }
      try {
        var $ren_lang$compiler$Ren$Compiler$Parse$subexpression = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$subexpression = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$subexpression;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$expression = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expression();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expression = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$expression;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$access = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$access();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$access = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$access;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$annotation = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$annotation();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$annotation = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$annotation;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$parenthesised = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$parenthesised = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$parenthesised;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$variant = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variant();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variant = function() {
          return $ren_lang$compiler$Ren$Compiler$Parse$variant;
        };
      } catch ($) {
        throw "Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502    subexpression\n  \u2502     \u2193\n  \u2502    expression\n  \u2502     \u2193\n  \u2502    access\n  \u2502     \u2193\n  \u2502    annotation\n  \u2502     \u2193\n  \u2502    application\n  \u2502     \u2193\n  \u2502    literal\n  \u2502     \u2193\n  \u2502    match\n  \u2502     \u2193\n  \u2502    parenthesised\n  \u2502     \u2193\n  \u2502    template\n  \u2502     \u2193\n  \u2502    variant\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!";
      }
      var $ren_lang$compiler$Ren$Compiler$Parse$declaration = $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$inContext, $ren_lang$compiler$Ren$Compiler$Parse$InDeclaration, A2($ren_lang$compiler$Ren$Data$Span$parser, $elm$core$Basics$apR, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(A3($ren_lang$compiler$Ren$AST$Module$Declaration, false, "_", $ren_lang$compiler$Ren$Data$Type$Any)), $ren_lang$compiler$Ren$Compiler$Parse$keyword("run")), $elm$parser$Parser$Advanced$commit(_Utils_Tuple0)), $ren_lang$compiler$Ren$Compiler$Parse$expression))),
        A2($elm$parser$Parser$Advanced$inContext, $ren_lang$compiler$Ren$Compiler$Parse$InDeclaration, A2($ren_lang$compiler$Ren$Data$Span$parser, $elm$core$Basics$apR, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Module$Declaration), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(true), $ren_lang$compiler$Ren$Compiler$Parse$keyword("pub")),
          $elm$parser$Parser$Advanced$succeed(false)
        ])), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$keyword("let")), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$symbol(":")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$type_, $elm$parser$Parser$Advanced$spaces)),
          $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$Data$Type$Any)
        ])), $ren_lang$compiler$Ren$Compiler$Parse$symbol("=")), $elm$parser$Parser$Advanced$spaces)), $ren_lang$compiler$Ren$Compiler$Parse$expression)))
      ]));
      var $elm$parser$Parser$Advanced$end = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          return _Utils_eq($elm$core$String$length(s.src), s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$InImport = { $: "InImport" };
      var $ren_lang$compiler$Ren$Compiler$Parse$import_ = A2($elm$parser$Parser$Advanced$inContext, $ren_lang$compiler$Ren$Compiler$Parse$InImport, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Module$Import), $ren_lang$compiler$Ren$Compiler$Parse$keyword("import")), $elm$parser$Parser$Advanced$spaces), $ren_lang$compiler$Ren$Compiler$Parse$symbol('"')), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$chompWhile($elm$core$Basics$neq(_Utils_chr('"')))), $ren_lang$compiler$Ren$Compiler$Parse$symbol('"')), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$keyword("as")), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(names) {
          return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(n) {
              return A2($elm$core$List$cons, n, names);
            }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName($elm$core$Set$empty), $ren_lang$compiler$Ren$Compiler$Parse$symbol("."))))),
            A2($elm$parser$Parser$Advanced$map, A2($elm$core$Basics$composeL, $elm$parser$Parser$Advanced$Done, $elm$core$List$reverse), A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(n) {
              return A2($elm$core$List$cons, n, names);
            }), $ren_lang$compiler$Ren$Compiler$Parse$uppercaseName($elm$core$Set$empty))),
            A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v0) {
              return $elm$core$List$reverse(names);
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
          ]));
        })),
        $elm$parser$Parser$Advanced$succeed(_List_Nil)
      ])), $elm$parser$Parser$Advanced$spaces)), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$backtrackable(A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), $ren_lang$compiler$Ren$Compiler$Parse$keyword("exposing")), $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$sequence({
          end: A2($elm$parser$Parser$Advanced$Token, "}", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("}")),
          item: $ren_lang$compiler$Ren$Compiler$Parse$lowercaseName($ren_lang$compiler$Ren$Compiler$Parse$keywords),
          separator: A2($elm$parser$Parser$Advanced$Token, ",", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol(",")),
          spaces: $elm$parser$Parser$Advanced$spaces,
          start: A2($elm$parser$Parser$Advanced$Token, "{", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("{")),
          trailing: $elm$parser$Parser$Advanced$Forbidden
        }))),
        $elm$parser$Parser$Advanced$succeed(_List_Nil)
      ]))));
      var $elm$parser$Parser$Advanced$chompUntilEndOr = function(str) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
          var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
          var newOffset = _v0.a;
          var newRow = _v0.b;
          var newCol = _v0.c;
          var adjustedOffset = newOffset < 0 ? $elm$core$String$length(s.src) : newOffset;
          return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s.offset, adjustedOffset) < 0, _Utils_Tuple0, { col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src });
        });
      };
      var $elm$parser$Parser$Advanced$lineComment = function(start) {
        return A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$token(start), $elm$parser$Parser$Advanced$chompUntilEndOr("\n"));
      };
      var $ren_lang$compiler$Ren$Compiler$Parse$module_ = A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($ren_lang$compiler$Ren$AST$Module$Module), $elm$parser$Parser$Advanced$spaces), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(imports) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(i) {
            return A2($elm$core$List$cons, i, imports);
          }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$import_, $elm$parser$Parser$Advanced$spaces))),
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(imports), $elm$parser$Parser$Advanced$lineComment(A2($elm$parser$Parser$Advanced$Token, "//", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("//"))))),
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v0) {
            return $elm$core$List$reverse(imports);
          }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
        ]));
      }), $elm$parser$Parser$Advanced$spaces)), A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$loop, _List_Nil, function(declarations) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$keeper, $elm$parser$Parser$Advanced$succeed(function(d) {
            return A2($elm$core$List$cons, d, declarations);
          }), A2($elm$parser$Parser$Advanced$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$declaration, $elm$parser$Parser$Advanced$spaces))),
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Loop, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(declarations), $elm$parser$Parser$Advanced$lineComment(A2($elm$parser$Parser$Advanced$Token, "//", $ren_lang$compiler$Ren$Compiler$Parse$ExpectingSymbol("//"))))),
          A2($elm$parser$Parser$Advanced$map, $elm$parser$Parser$Advanced$Done, A2($elm$parser$Parser$Advanced$map, function(_v1) {
            return $elm$core$List$reverse(declarations);
          }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0)))
        ]));
      }), $elm$parser$Parser$Advanced$spaces), $elm$parser$Parser$Advanced$end($ren_lang$compiler$Ren$Compiler$Parse$ExpectingEOF)));
      var $elm$parser$Parser$Advanced$bagToList = F2(function(bag, list) {
        bagToList:
          while (true) {
            switch (bag.$) {
              case "Empty":
                return list;
              case "AddRight":
                var bag1 = bag.a;
                var x = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$core$List$cons, x, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
              default:
                var bag1 = bag.a;
                var bag2 = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
            }
          }
      });
      var $elm$parser$Parser$Advanced$run = F2(function(_v0, src) {
        var parse = _v0.a;
        var _v1 = parse({ col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src });
        if (_v1.$ === "Good") {
          var value = _v1.b;
          return $elm$core$Result$Ok(value);
        } else {
          var bag = _v1.b;
          return $elm$core$Result$Err(A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
        }
      });
      var $ren_lang$compiler$Ren$Compiler$Parse$run = $elm$parser$Parser$Advanced$run($ren_lang$compiler$Ren$Compiler$Parse$module_);
      var $ren_lang$compiler$Ren$Compiler$custom = F4(function(shouldTypecheck, transformations, optimisations, target) {
        return {
          check: shouldTypecheck ? A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Check$run, $elm$core$Result$mapError($ren_lang$compiler$Ren$Compiler$TypeError)) : $elm$core$Result$Ok,
          desugar: $ren_lang$compiler$Ren$AST$Module$map($ren_lang$compiler$Ren$Compiler$Desugar$run(transformations)),
          emit: $ren_lang$compiler$Ren$Compiler$Emit$run(target),
          optimise: $ren_lang$compiler$Ren$AST$Module$map($ren_lang$compiler$Ren$Compiler$Optimise$run(optimisations)),
          parse: A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Parse$run, $elm$core$Result$mapError($ren_lang$compiler$Ren$Compiler$ParseError)),
          validate: $elm$core$Result$Ok
        };
      });
      var $ren_lang$compiler$Ren$Compiler$Desugar$blocks = F2(function(_v0, exprF) {
        if (exprF.$ === "Block" && !exprF.a.b) {
          var _v2 = exprF.b;
          var expr = _v2.b;
          return expr;
        } else {
          return exprF;
        }
      });
      var $elm$core$List$drop = F2(function(n, list) {
        drop:
          while (true) {
            if (n <= 0) {
              return list;
            } else {
              if (!list.b) {
                return list;
              } else {
                var x = list.a;
                var xs = list.b;
                var $temp$n = n - 1, $temp$list = xs;
                n = $temp$n;
                list = $temp$list;
                continue drop;
              }
            }
          }
      });
      var $ren_lang$compiler$Ren$Compiler$Desugar$placeholders = F2(function(meta, exprF) {
        var replace = F2(function(id, _v6) {
          var m = _v6.a;
          var e2 = _v6.b;
          if (e2.$ === "Identifier" && e2.a.$ === "Placeholder") {
            return A2($ren_lang$compiler$Ren$AST$Expr$Expr, m, $ren_lang$compiler$Ren$AST$Expr$Identifier($ren_lang$compiler$Ren$AST$Expr$Local("$" + $elm$core$String$fromInt(id))));
          } else {
            return A2($ren_lang$compiler$Ren$AST$Expr$Expr, m, e2);
          }
        });
        var isPlaceholder = function(_v4) {
          var e2 = _v4.b;
          if (e2.$ === "Identifier" && e2.a.$ === "Placeholder") {
            return true;
          } else {
            return false;
          }
        };
        var ids = A2($elm$core$List$range, 0, 10);
        var args2 = function(exprs) {
          return A2($elm$core$List$filterMap, $elm$core$Basics$identity, A3($elm$core$List$map2, F2(function(id, _v1) {
            var e2 = _v1.b;
            if (e2.$ === "Identifier" && e2.a.$ === "Placeholder") {
              return $elm$core$Maybe$Just($ren_lang$compiler$Ren$AST$Expr$Name("$" + $elm$core$String$fromInt(id)));
            } else {
              return $elm$core$Maybe$Nothing;
            }
          }), ids, exprs));
        };
        _v0$5:
          while (true) {
            switch (exprF.$) {
              case "Access":
                if (exprF.a.b.$ === "Identifier" && exprF.a.b.a.$ === "Placeholder") {
                  var e = exprF.a;
                  var accessors = exprF.b;
                  return A2($ren_lang$compiler$Ren$AST$Expr$Lambda, _List_fromArray([
                    $ren_lang$compiler$Ren$AST$Expr$Name("$0")
                  ]), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2($ren_lang$compiler$Ren$AST$Expr$Access, A2(replace, 0, e), accessors)));
                } else {
                  break _v0$5;
                }
              case "Application":
                var e = exprF.a;
                var es = exprF.b;
                return A2($elm$core$List$any, isPlaceholder, A2($elm$core$List$cons, e, es)) ? A2($ren_lang$compiler$Ren$AST$Expr$Lambda, args2(A2($elm$core$List$cons, e, es)), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2($ren_lang$compiler$Ren$AST$Expr$Application, A2(replace, 0, e), A3($elm$core$List$map2, replace, A2($elm$core$List$drop, 1, ids), es)))) : exprF;
              case "Conditional":
                var c = exprF.a;
                var t = exprF.b;
                var f = exprF.c;
                return A2($elm$core$List$any, isPlaceholder, _List_fromArray([c, t, f])) ? A2($ren_lang$compiler$Ren$AST$Expr$Lambda, args2(_List_fromArray([c, t, f])), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A3($ren_lang$compiler$Ren$AST$Expr$Conditional, A2(replace, 0, c), A2(replace, 1, t), A2(replace, 2, f)))) : exprF;
              case "Infix":
                var op = exprF.a;
                var lhs = exprF.b;
                var rhs = exprF.c;
                return A2($elm$core$List$any, isPlaceholder, _List_fromArray([lhs, rhs])) ? A2($ren_lang$compiler$Ren$AST$Expr$Lambda, args2(_List_fromArray([lhs, rhs])), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A3($ren_lang$compiler$Ren$AST$Expr$Infix, op, A2(replace, 0, lhs), A2(replace, 1, rhs)))) : exprF;
              case "Match":
                if (exprF.a.b.$ === "Identifier" && exprF.a.b.a.$ === "Placeholder") {
                  var e = exprF.a;
                  var cases = exprF.b;
                  return A2($ren_lang$compiler$Ren$AST$Expr$Lambda, _List_fromArray([
                    $ren_lang$compiler$Ren$AST$Expr$Name("$0")
                  ]), A2($ren_lang$compiler$Ren$AST$Expr$Expr, meta, A2($ren_lang$compiler$Ren$AST$Expr$Match, A2(replace, 0, e), cases)));
                } else {
                  break _v0$5;
                }
              default:
                break _v0$5;
            }
          }
        return exprF;
      });
      var $ren_lang$compiler$Ren$Compiler$Desugar$defaults = _List_fromArray([$ren_lang$compiler$Ren$Compiler$Desugar$placeholders, $ren_lang$compiler$Ren$Compiler$Desugar$blocks]);
      var $elm$core$Maybe$andThen = F2(function(callback, maybeValue) {
        if (maybeValue.$ === "Just") {
          var value = maybeValue.a;
          return callback(value);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      });
      var $elm$core$String$toLower = _String_toLower;
      var $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean = function(expr) {
        _v0$4:
          while (true) {
            if (expr.$ === "Literal") {
              switch (expr.a.$) {
                case "Boolean":
                  var b = expr.a.a;
                  return $elm$core$Maybe$Just(b);
                case "Number":
                  var n = expr.a.a;
                  return !n ? $elm$core$Maybe$Just(false) : $elm$core$Maybe$Just(true);
                case "String":
                  var s = expr.a.a;
                  return $elm$core$String$toLower(s) === "true" ? $elm$core$Maybe$Just(true) : $elm$core$String$toLower(s) === "false" ? $elm$core$Maybe$Just(false) : A2($elm$core$Maybe$andThen, $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), $elm$core$String$toFloat(s)));
                case "Undefined":
                  var _v1 = expr.a;
                  return $elm$core$Maybe$Just(false);
                default:
                  break _v0$4;
              }
            } else {
              break _v0$4;
            }
          }
        return $elm$core$Maybe$Nothing;
      };
      var $ren_lang$compiler$Ren$AST$Expr$coerceToNumber = function(expr) {
        _v0$5:
          while (true) {
            if (expr.$ === "Literal") {
              switch (expr.a.$) {
                case "Boolean":
                  if (expr.a.a) {
                    return $elm$core$Maybe$Just(1);
                  } else {
                    return $elm$core$Maybe$Just(0);
                  }
                case "Number":
                  var n = expr.a.a;
                  return $elm$core$Maybe$Just(n);
                case "String":
                  var s = expr.a.a;
                  return $elm$core$String$toFloat(s);
                case "Undefined":
                  var _v1 = expr.a;
                  return $elm$core$Maybe$Just(0);
                default:
                  break _v0$5;
              }
            } else {
              break _v0$5;
            }
          }
        return $elm$core$Maybe$Nothing;
      };
      var $elm$core$Maybe$map2 = F3(function(func, ma, mb) {
        if (ma.$ === "Nothing") {
          return $elm$core$Maybe$Nothing;
        } else {
          var a = ma.a;
          if (mb.$ === "Nothing") {
            return $elm$core$Maybe$Nothing;
          } else {
            var b = mb.a;
            return $elm$core$Maybe$Just(A2(func, a, b));
          }
        }
      });
      var $elm$core$Basics$pow = _Basics_pow;
      var $ren_lang$compiler$Ren$Compiler$Optimise$operators = F2(function(_v0, expr) {
        _v1$15:
          while (true) {
            if (expr.$ === "Infix") {
              switch (expr.a.$) {
                case "Pipe":
                  var _v2 = expr.a;
                  var lhs = expr.b;
                  var rhs = expr.c;
                  return A2($ren_lang$compiler$Ren$AST$Expr$Application, rhs, _List_fromArray([lhs]));
                case "Add":
                  var _v3 = expr.a;
                  var _v4 = expr.b;
                  var lhs = _v4.b;
                  var _v5 = expr.c;
                  var rhs = _v5.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$add, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Sub":
                  var _v6 = expr.a;
                  var _v7 = expr.b;
                  var lhs = _v7.b;
                  var _v8 = expr.c;
                  var rhs = _v8.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$sub, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Mul":
                  var _v9 = expr.a;
                  var _v10 = expr.b;
                  var lhs = _v10.b;
                  var _v11 = expr.c;
                  var rhs = _v11.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$mul, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Div":
                  var _v12 = expr.a;
                  var _v13 = expr.b;
                  var lhs = _v13.b;
                  var _v14 = expr.c;
                  var rhs = _v14.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$fdiv, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Pow":
                  var _v15 = expr.a;
                  var _v16 = expr.b;
                  var lhs = _v16.b;
                  var _v17 = expr.c;
                  var rhs = _v17.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Number, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$pow, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Mod":
                  var _v18 = expr.a;
                  return expr;
                case "Lt":
                  var _v19 = expr.a;
                  var _v20 = expr.b;
                  var lhs = _v20.b;
                  var _v21 = expr.c;
                  var rhs = _v21.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$lt, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Lte":
                  var _v22 = expr.a;
                  var _v23 = expr.b;
                  var lhs = _v23.b;
                  var _v24 = expr.c;
                  var rhs = _v24.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$le, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Gt":
                  var _v25 = expr.a;
                  var _v26 = expr.b;
                  var lhs = _v26.b;
                  var _v27 = expr.c;
                  var rhs = _v27.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$gt, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "Gte":
                  var _v28 = expr.a;
                  var _v29 = expr.b;
                  var lhs = _v29.b;
                  var _v30 = expr.c;
                  var rhs = _v30.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$ge, $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToNumber(rhs))));
                case "And":
                  var _v31 = expr.a;
                  var _v32 = expr.b;
                  var lhs = _v32.b;
                  var _v33 = expr.c;
                  var rhs = _v33.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$and, $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean(rhs))));
                case "Or":
                  var _v34 = expr.a;
                  var _v35 = expr.b;
                  var lhs = _v35.b;
                  var _v36 = expr.c;
                  var rhs = _v36.b;
                  return A2($elm$core$Maybe$withDefault, expr, A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$AST$Expr$Boolean, $ren_lang$compiler$Ren$AST$Expr$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$or, $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean(lhs), $ren_lang$compiler$Ren$AST$Expr$coerceToBoolean(rhs))));
                case "Cons":
                  if (expr.c.b.$ === "Literal" && expr.c.b.a.$ === "Array") {
                    var _v37 = expr.a;
                    var lhs = expr.b;
                    var _v38 = expr.c;
                    var elements = _v38.b.a.a;
                    return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Array(A2($elm$core$List$cons, lhs, elements)));
                  } else {
                    break _v1$15;
                  }
                case "Join":
                  if (expr.b.b.$ === "Literal" && expr.b.b.a.$ === "Array" && expr.c.b.$ === "Literal" && expr.c.b.a.$ === "Array") {
                    var _v39 = expr.a;
                    var _v40 = expr.b;
                    var xs = _v40.b.a.a;
                    var _v41 = expr.c;
                    var ys = _v41.b.a.a;
                    return $ren_lang$compiler$Ren$AST$Expr$Literal($ren_lang$compiler$Ren$AST$Expr$Array(_Utils_ap(xs, ys)));
                  } else {
                    break _v1$15;
                  }
                default:
                  break _v1$15;
              }
            } else {
              break _v1$15;
            }
          }
        return expr;
      });
      var $ren_lang$compiler$Ren$Compiler$typed = A4($ren_lang$compiler$Ren$Compiler$custom, true, $ren_lang$compiler$Ren$Compiler$Desugar$defaults, _List_fromArray([$ren_lang$compiler$Ren$Compiler$Optimise$operators]), $ren_lang$compiler$Ren$Compiler$Emit$ESModule);
      var $author$project$Data$IO$with = F2(function(cmd, _v0) {
        var model = _v0.a;
        var cmds = _v0.b;
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$batch(_List_fromArray([cmd, cmds])));
      });
      var $elm$json$Json$Encode$dict = F3(function(toKey, toValue, dictionary) {
        return _Json_wrap(A3($elm$core$Dict$foldl, F3(function(key, value, obj) {
          return A3(_Json_addField, toKey(key), toValue(value), obj);
        }), _Json_emptyObject(_Utils_Tuple0), dictionary));
      });
      var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v0, obj) {
          var k = _v0.a;
          var v = _v0.b;
          return A3(_Json_addField, k, v, obj);
        }), _Json_emptyObject(_Utils_Tuple0), pairs));
      };
      var $elm$json$Json$Encode$string = _Json_wrap;
      var $author$project$Main$toFs = _Platform_outgoingPort("toFs", $elm$core$Basics$identity);
      var $author$project$Main$writeFiles = function(files) {
        var encodeFile = function(file) {
          if (file.$ === "Ok") {
            var src = file.a;
            return $elm$json$Json$Encode$object(_List_fromArray([
              _Utils_Tuple2("$", $elm$json$Json$Encode$string("Ok")),
              _Utils_Tuple2("src", $elm$json$Json$Encode$string(src))
            ]));
          } else {
            return $elm$json$Json$Encode$object(_List_fromArray([
              _Utils_Tuple2("$", $elm$json$Json$Encode$string("Err")),
              _Utils_Tuple2("err", $elm$json$Json$Encode$string(""))
            ]));
          }
        };
        return $author$project$Main$toFs($elm$json$Json$Encode$object(_List_fromArray([
          _Utils_Tuple2("$", $elm$json$Json$Encode$string("WriteFiles")),
          _Utils_Tuple2("files", A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, encodeFile, files))
        ])));
      };
      var $author$project$Main$update = F2(function(msg, model) {
        var _v0 = _Utils_Tuple2(msg, model);
        switch (_v0.a.$) {
          case "GotProjectMetadata":
            if (_v0.b.$ === "Idle") {
              var renDir = _v0.a.a;
              var _v1 = _v0.b;
              return $author$project$Data$IO$pure($author$project$Main$Compiling({ renDir }));
            } else {
              return $author$project$Data$IO$pure(model);
            }
          case "GotProject":
            if (_v0.b.$ === "Compiling") {
              var project = _v0.a.a;
              var renDir = _v0.b.a.renDir;
              var toolchain = _Utils_update($ren_lang$compiler$Ren$Compiler$typed, {
                validate: A2($elm$core$Basics$composeR, $author$project$Main$addStdlib, A2($elm$core$Basics$composeR, $author$project$Main$resolveImports(renDir), $ren_lang$compiler$Ren$Compiler$typed.validate))
              });
              return A2($author$project$Data$IO$with, $author$project$Main$writeFiles($author$project$Data$Project$toFiles(A2($author$project$Data$Project$map, $ren_lang$compiler$Ren$Compiler$run(toolchain), $author$project$Data$Project$fromFiles(project)))), $author$project$Data$IO$pure(model));
            } else {
              return $author$project$Data$IO$pure(model);
            }
          default:
            var _v2 = _v0.a;
            return $author$project$Data$IO$pure(model);
        }
      });
      var $elm$core$Platform$worker = _Platform_worker;
      var $author$project$Main$main = $elm$core$Platform$worker({ init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update });
      _Platform_export({ "Main": { "init": $author$project$Main$main($elm$json$Json$Decode$succeed(_Utils_Tuple0))(0) } });
    })(exports);
  }
});

// src/main.js
var Chalk = __toESM(require_source());
var Fs = __toESM(require("fs"));
var Path = __toESM(require("path"));
var Process = __toESM(require("process"));
var import_Main = __toESM(require_Main());
var compiler = import_Main.Elm.Main.init({
  flags: {}
});
var [_execPath, _filePath, commandName, ...args] = Process.argv;
function make() {
  const [dir] = args;
  const entry = Path.resolve(Process.cwd(), dir);
  const renDir = Path.join(entry, ".ren");
  if (!Fs.lstatSync(entry).isDirectory()) {
    console.error("Entry must be a directory");
    Process.exit();
  }
  compiler.ports.fromFs?.send({
    $: "GotProjectMetadata",
    0: renDir
  });
  const files = function gatherSourceFiles(dir2) {
    return Fs.readdirSync(dir2, { withFileTypes: true }).flatMap((dirent) => {
      const path = Path.resolve(dir2, dirent.name);
      return dirent.isDirectory() ? gatherSourceFiles(path) : path;
    }).filter((path) => Path.extname(path) === ".ren");
  }(entry);
  const entries = files.map((path) => [
    path,
    Fs.readFileSync(path, { encoding: "utf8" })
  ]);
  compiler.ports.fromFs?.send({
    $: "GotProject",
    0: Object.fromEntries(entries)
  });
  return new Promise((resolve2) => {
    compiler.ports.toFs?.subscribe(({ $, ...data }) => {
      switch ($) {
        case "WriteFiles": {
          const { files: files2 } = data;
          Object.entries(files2).forEach(([path, { $: $2, ...data2 }]) => {
            switch ($2) {
              case "Ok": {
                const name = `${path}.mjs`;
                const relativeRenDir = "./" + Path.relative(Path.dirname(path), renDir);
                const src = data2.src.replaceAll(renDir, relativeRenDir);
                Fs.writeFileSync(name, src, {
                  encoding: "utf8"
                });
                break;
              }
              case "Err": {
                console.error(`Error while compiling ${path}:`);
                console.error(data2.err, "\n");
              }
            }
          });
          const stdlibDir = Path.resolve(__dirname, "../src/ren");
          try {
            Fs.mkdirSync(`${renDir}/deps/ren`, { recursive: true });
          } catch {
          }
          Fs.readdirSync(stdlibDir).forEach((stdlibModule) => {
            Fs.copyFileSync(Path.join(stdlibDir, stdlibModule), `${renDir}/deps/ren/${stdlibModule}`);
          });
          break;
        }
      }
      resolve2();
    });
  });
}
async function run() {
  const [dir] = args;
  const entry = Path.resolve(Process.cwd(), dir);
  await make();
  import(Path.join(entry, "main.ren.mjs")).then(({ main: main2 }) => {
    if (typeof main2 == "function") {
      const res = main2(args.slice(1));
      if (res != void 0) {
        console.log(res);
      }
    } else if (main2 != void 0) {
      console.log(main2);
    }
  });
}
var commands = /* @__PURE__ */ new Map([
  ["make", make],
  ["run", run]
]);
function main() {
  const command = commands.get(commandName);
  if (!command) {
    console.error(`${Chalk.red("error")}: no such subcommand: "${commandName}"
`);
    console.log("  Did you mean one of these?");
    for (const name of commands.keys()) {
      console.log(`    - ${Chalk.gray("ren")} ${name}`);
    }
    return;
  }
  command();
}
main();
