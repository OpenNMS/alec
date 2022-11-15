const Ue = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
}, xR = {}, BR = window.Vue.resolveComponent, IR = window.Vue.createVNode, DR = window.Vue.openBlock, _R = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const OR = { class: "main" };
function QR(t, o) {
  const r = BR("router-view");
  return DR(), _R("div", OR, [
    IR(r)
  ]);
}
const zR = /* @__PURE__ */ Ue(xR, [["render", QR], ["__scopeId", "data-v-5d32d140"]]), GR = window.Vue.defineComponent, YR = window.Vue.openBlock, PR = window.Vue.createBlock, HR = /* @__PURE__ */ GR({
  __name: "App",
  setup(t) {
    return (o, r) => (YR(), PR(zR));
  }
});
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nm = { exports: {} }, Dc = { exports: {} }, ym = function(o, r) {
  return function() {
    for (var l = new Array(arguments.length), c = 0; c < l.length; c++)
      l[c] = arguments[c];
    return o.apply(r, l);
  };
}, XR = ym, _c = Object.prototype.toString, Oc = function(t) {
  return function(o) {
    var r = _c.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function ur(t) {
  return t = t.toLowerCase(), function(r) {
    return Oc(r) === t;
  };
}
function Qc(t) {
  return Array.isArray(t);
}
function Da(t) {
  return typeof t > "u";
}
function LR(t) {
  return t !== null && !Da(t) && t.constructor !== null && !Da(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var km = ur("ArrayBuffer");
function $R(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && km(t.buffer), o;
}
function qR(t) {
  return typeof t == "string";
}
function KR(t) {
  return typeof t == "number";
}
function Mm(t) {
  return t !== null && typeof t == "object";
}
function Sa(t) {
  if (Oc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var eN = ur("Date"), tN = ur("File"), nN = ur("Blob"), rN = ur("FileList");
function zc(t) {
  return _c.call(t) === "[object Function]";
}
function oN(t) {
  return Mm(t) && zc(t.pipe);
}
function iN(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || _c.call(t) === o || zc(t.toString) && t.toString() === o);
}
var aN = ur("URLSearchParams");
function sN(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function lN() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Gc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Qc(t))
      for (var r = 0, a = t.length; r < a; r++)
        o.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && o.call(null, t[l], l, t);
}
function kc() {
  var t = {};
  function o(l, c) {
    Sa(t[c]) && Sa(l) ? t[c] = kc(t[c], l) : Sa(l) ? t[c] = kc({}, l) : Qc(l) ? t[c] = l.slice() : t[c] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Gc(arguments[r], o);
  return t;
}
function cN(t, o, r) {
  return Gc(o, function(l, c) {
    r && typeof l == "function" ? t[c] = XR(l, r) : t[c] = l;
  }), t;
}
function uN(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function dN(t, o, r, a) {
  t.prototype = Object.create(o.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function fN(t, o, r) {
  var a, l, c, d = {};
  o = o || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      c = a[l], d[c] || (o[c] = t[c], d[c] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function hN(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var a = t.indexOf(o, r);
  return a !== -1 && a === r;
}
function pN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (Da(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var mN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Oe = {
  isArray: Qc,
  isArrayBuffer: km,
  isBuffer: LR,
  isFormData: iN,
  isArrayBufferView: $R,
  isString: qR,
  isNumber: KR,
  isObject: Mm,
  isPlainObject: Sa,
  isUndefined: Da,
  isDate: eN,
  isFile: tN,
  isBlob: nN,
  isFunction: zc,
  isStream: oN,
  isURLSearchParams: aN,
  isStandardBrowserEnv: lN,
  forEach: Gc,
  merge: kc,
  extend: cN,
  trim: sN,
  stripBOM: uN,
  inherits: dN,
  toFlatObject: fN,
  kindOf: Oc,
  kindOfTest: ur,
  endsWith: hN,
  toArray: pN,
  isTypedArray: mN,
  isFileList: rN
}, Er = Oe;
function Xf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Zm = function(o, r, a) {
  if (!r)
    return o;
  var l;
  if (a)
    l = a(r);
  else if (Er.isURLSearchParams(r))
    l = r.toString();
  else {
    var c = [];
    Er.forEach(r, function(w, V) {
      w === null || typeof w > "u" || (Er.isArray(w) ? V = V + "[]" : w = [w], Er.forEach(w, function(R) {
        Er.isDate(R) ? R = R.toISOString() : Er.isObject(R) && (R = JSON.stringify(R)), c.push(Xf(V) + "=" + Xf(R));
      }));
    }), l = c.join("&");
  }
  if (l) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return o;
}, wN = Oe;
function La() {
  this.handlers = [];
}
La.prototype.use = function(o, r, a) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
La.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
La.prototype.forEach = function(o) {
  wN.forEach(this.handlers, function(a) {
    a !== null && o(a);
  });
};
var vN = La, VN = Oe, TN = function(o, r) {
  VN.forEach(o, function(l, c) {
    c !== r && c.toUpperCase() === r.toUpperCase() && (o[r] = l, delete o[c]);
  });
}, bm = Oe;
function $r(t, o, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
bm.inherits($r, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Jm = $r.prototype, Em = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(t) {
  Em[t] = { value: t };
});
Object.defineProperties($r, Em);
Object.defineProperty(Jm, "isAxiosError", { value: !0 });
$r.from = function(t, o, r, a, l, c) {
  var d = Object.create(Jm);
  return bm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), $r.call(d, t.message, o, r, a, l), d.name = t.name, c && Object.assign(d, c), d;
};
var no = $r, Sm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dt = Oe;
function gN(t, o) {
  o = o || new FormData();
  var r = [];
  function a(c) {
    return c === null ? "" : Dt.isDate(c) ? c.toISOString() : Dt.isArrayBuffer(c) || Dt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function l(c, d) {
    if (Dt.isPlainObject(c) || Dt.isArray(c)) {
      if (r.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(c), Dt.forEach(c, function(w, V) {
        if (!Dt.isUndefined(w)) {
          var U = d ? d + "." + V : V, R;
          if (w && !d && typeof w == "object") {
            if (Dt.endsWith(V, "{}"))
              w = JSON.stringify(w);
            else if (Dt.endsWith(V, "[]") && (R = Dt.toArray(w))) {
              R.forEach(function(y) {
                !Dt.isUndefined(y) && o.append(U, a(y));
              });
              return;
            }
          }
          l(w, U);
        }
      }), r.pop();
    } else
      o.append(d, a(c));
  }
  return l(t), o;
}
var Am = gN, Jl, Lf;
function UN() {
  if (Lf)
    return Jl;
  Lf = 1;
  var t = no;
  return Jl = function(r, a, l) {
    var c = l.config.validateStatus;
    !l.status || !c || c(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, Jl;
}
var El, $f;
function RN() {
  if ($f)
    return El;
  $f = 1;
  var t = Oe;
  return El = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, l, c, d, h, w) {
        var V = [];
        V.push(a + "=" + encodeURIComponent(l)), t.isNumber(c) && V.push("expires=" + new Date(c).toGMTString()), t.isString(d) && V.push("path=" + d), t.isString(h) && V.push("domain=" + h), w === !0 && V.push("secure"), document.cookie = V.join("; ");
      },
      read: function(a) {
        var l = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return l ? decodeURIComponent(l[3]) : null;
      },
      remove: function(a) {
        this.write(a, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), El;
}
var NN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, yN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, kN = NN, MN = yN, Fm = function(o, r) {
  return o && !kN(r) ? MN(o, r) : r;
}, Sl, qf;
function ZN() {
  if (qf)
    return Sl;
  qf = 1;
  var t = Oe, o = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Sl = function(a) {
    var l = {}, c, d, h;
    return a && t.forEach(a.split(`
`), function(V) {
      if (h = V.indexOf(":"), c = t.trim(V.substr(0, h)).toLowerCase(), d = t.trim(V.substr(h + 1)), c) {
        if (l[c] && o.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? l[c] = (l[c] ? l[c] : []).concat([d]) : l[c] = l[c] ? l[c] + ", " + d : d;
      }
    }), l;
  }, Sl;
}
var Al, Kf;
function bN() {
  if (Kf)
    return Al;
  Kf = 1;
  var t = Oe;
  return Al = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), l;
    function c(d) {
      var h = d;
      return r && (a.setAttribute("href", h), h = a.href), a.setAttribute("href", h), {
        href: a.href,
        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
        host: a.host,
        search: a.search ? a.search.replace(/^\?/, "") : "",
        hash: a.hash ? a.hash.replace(/^#/, "") : "",
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
      };
    }
    return l = c(window.location.href), function(h) {
      var w = t.isString(h) ? c(h) : h;
      return w.protocol === l.protocol && w.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Al;
}
var Fl, eh;
function $a() {
  if (eh)
    return Fl;
  eh = 1;
  var t = no, o = Oe;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), Fl = r, Fl;
}
var Wl, th;
function JN() {
  return th || (th = 1, Wl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Wl;
}
var Cl, nh;
function rh() {
  if (nh)
    return Cl;
  nh = 1;
  var t = Oe, o = UN(), r = RN(), a = Zm, l = Fm, c = ZN(), d = bN(), h = Sm, w = no, V = $a(), U = JN();
  return Cl = function(y) {
    return new Promise(function(S, C) {
      var D = y.data, E = y.headers, B = y.responseType, x;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(x), y.signal && y.signal.removeEventListener("abort", x);
      }
      t.isFormData(D) && t.isStandardBrowserEnv() && delete E["Content-Type"];
      var b = new XMLHttpRequest();
      if (y.auth) {
        var W = y.auth.username || "", A = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        E.Authorization = "Basic " + btoa(W + ":" + A);
      }
      var O = l(y.baseURL, y.url);
      b.open(y.method.toUpperCase(), a(O, y.params, y.paramsSerializer), !0), b.timeout = y.timeout;
      function he() {
        if (!!b) {
          var Te = "getAllResponseHeaders" in b ? c(b.getAllResponseHeaders()) : null, Re = !B || B === "text" || B === "json" ? b.responseText : b.response, Ze = {
            data: Re,
            status: b.status,
            statusText: b.statusText,
            headers: Te,
            config: y,
            request: b
          };
          o(function(xe) {
            S(xe), P();
          }, function(xe) {
            C(xe), P();
          }, Ze), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = he : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(he);
      }, b.onabort = function() {
        !b || (C(new w("Request aborted", w.ECONNABORTED, y, b)), b = null);
      }, b.onerror = function() {
        C(new w("Network Error", w.ERR_NETWORK, y, b, b)), b = null;
      }, b.ontimeout = function() {
        var Re = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ze = y.transitional || h;
        y.timeoutErrorMessage && (Re = y.timeoutErrorMessage), C(new w(
          Re,
          Ze.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          b
        )), b = null;
      }, t.isStandardBrowserEnv()) {
        var se = (y.withCredentials || d(O)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        se && (E[y.xsrfHeaderName] = se);
      }
      "setRequestHeader" in b && t.forEach(E, function(Re, Ze) {
        typeof D > "u" && Ze.toLowerCase() === "content-type" ? delete E[Ze] : b.setRequestHeader(Ze, Re);
      }), t.isUndefined(y.withCredentials) || (b.withCredentials = !!y.withCredentials), B && B !== "json" && (b.responseType = y.responseType), typeof y.onDownloadProgress == "function" && b.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (x = function(Te) {
        !b || (C(!Te || Te && Te.type ? new V() : Te), b.abort(), b = null);
      }, y.cancelToken && y.cancelToken.subscribe(x), y.signal && (y.signal.aborted ? x() : y.signal.addEventListener("abort", x))), D || (D = null);
      var Ve = U(O);
      if (Ve && ["http", "https", "file"].indexOf(Ve) === -1) {
        C(new w("Unsupported protocol " + Ve + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      b.send(D);
    });
  }, Cl;
}
var xl, oh;
function EN() {
  return oh || (oh = 1, xl = null), xl;
}
var Fe = Oe, ih = TN, ah = no, SN = Sm, AN = Am, FN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function sh(t, o) {
  !Fe.isUndefined(t) && Fe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function WN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = rh()), t;
}
function CN(t, o, r) {
  if (Fe.isString(t))
    try {
      return (o || JSON.parse)(t), Fe.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var qa = {
  transitional: SN,
  adapter: WN(),
  transformRequest: [function(o, r) {
    if (ih(r, "Accept"), ih(r, "Content-Type"), Fe.isFormData(o) || Fe.isArrayBuffer(o) || Fe.isBuffer(o) || Fe.isStream(o) || Fe.isFile(o) || Fe.isBlob(o))
      return o;
    if (Fe.isArrayBufferView(o))
      return o.buffer;
    if (Fe.isURLSearchParams(o))
      return sh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var a = Fe.isObject(o), l = r && r["Content-Type"], c;
    if ((c = Fe.isFileList(o)) || a && l === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return AN(c ? { "files[]": o } : o, d && new d());
    } else if (a || l === "application/json")
      return sh(r, "application/json"), CN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || qa.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, c = !a && this.responseType === "json";
    if (c || l && Fe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? ah.from(d, ah.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: EN()
  },
  validateStatus: function(o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Fe.forEach(["delete", "get", "head"], function(o) {
  qa.headers[o] = {};
});
Fe.forEach(["post", "put", "patch"], function(o) {
  qa.headers[o] = Fe.merge(FN);
});
var Yc = qa, xN = Oe, BN = Yc, IN = function(o, r, a) {
  var l = this || BN;
  return xN.forEach(a, function(d) {
    o = d.call(l, o, r);
  }), o;
}, Bl, lh;
function Wm() {
  return lh || (lh = 1, Bl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Bl;
}
var ch = Oe, Il = IN, DN = Wm(), _N = Yc, ON = $a();
function Dl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ON();
}
var QN = function(o) {
  Dl(o), o.headers = o.headers || {}, o.data = Il.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = ch.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), ch.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete o.headers[l];
    }
  );
  var r = o.adapter || _N.adapter;
  return r(o).then(function(l) {
    return Dl(o), l.data = Il.call(
      o,
      l.data,
      l.headers,
      o.transformResponse
    ), l;
  }, function(l) {
    return DN(l) || (Dl(o), l && l.response && (l.response.data = Il.call(
      o,
      l.response.data,
      l.response.headers,
      o.transformResponse
    ))), Promise.reject(l);
  });
}, pt = Oe, Cm = function(o, r) {
  r = r || {};
  var a = {};
  function l(U, R) {
    return pt.isPlainObject(U) && pt.isPlainObject(R) ? pt.merge(U, R) : pt.isPlainObject(R) ? pt.merge({}, R) : pt.isArray(R) ? R.slice() : R;
  }
  function c(U) {
    if (pt.isUndefined(r[U])) {
      if (!pt.isUndefined(o[U]))
        return l(void 0, o[U]);
    } else
      return l(o[U], r[U]);
  }
  function d(U) {
    if (!pt.isUndefined(r[U]))
      return l(void 0, r[U]);
  }
  function h(U) {
    if (pt.isUndefined(r[U])) {
      if (!pt.isUndefined(o[U]))
        return l(void 0, o[U]);
    } else
      return l(void 0, r[U]);
  }
  function w(U) {
    if (U in r)
      return l(o[U], r[U]);
    if (U in o)
      return l(void 0, o[U]);
  }
  var V = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: w
  };
  return pt.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var y = V[R] || c, F = y(R);
    pt.isUndefined(F) && y !== w || (a[R] = F);
  }), a;
}, _l, uh;
function xm() {
  return uh || (uh = 1, _l = {
    version: "0.27.2"
  }), _l;
}
var zN = xm().version, xn = no, Pc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Pc[t] = function(a) {
    return typeof a === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var dh = {};
Pc.transitional = function(o, r, a) {
  function l(c, d) {
    return "[Axios v" + zN + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, h) {
    if (o === !1)
      throw new xn(
        l(d, " has been removed" + (r ? " in " + r : "")),
        xn.ERR_DEPRECATED
      );
    return r && !dh[d] && (dh[d] = !0, console.warn(
      l(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(c, d, h) : !0;
  };
};
function GN(t, o, r) {
  if (typeof t != "object")
    throw new xn("options must be an object", xn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var c = a[l], d = o[c];
    if (d) {
      var h = t[c], w = h === void 0 || d(h, c, t);
      if (w !== !0)
        throw new xn("option " + c + " must be " + w, xn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new xn("Unknown option " + c, xn.ERR_BAD_OPTION);
  }
}
var YN = {
  assertOptions: GN,
  validators: Pc
}, Bm = Oe, PN = Zm, fh = vN, hh = QN, Ka = Cm, HN = Fm, Im = YN, Sr = Im.validators;
function qr(t) {
  this.defaults = t, this.interceptors = {
    request: new fh(),
    response: new fh()
  };
}
qr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ka(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Im.assertOptions(a, {
    silentJSONParsing: Sr.transitional(Sr.boolean),
    forcedJSONParsing: Sr.transitional(Sr.boolean),
    clarifyTimeoutError: Sr.transitional(Sr.boolean)
  }, !1);
  var l = [], c = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(r) === !1 || (c = c && F.synchronous, l.unshift(F.fulfilled, F.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(F) {
    d.push(F.fulfilled, F.rejected);
  });
  var h;
  if (!c) {
    var w = [hh, void 0];
    for (Array.prototype.unshift.apply(w, l), w = w.concat(d), h = Promise.resolve(r); w.length; )
      h = h.then(w.shift(), w.shift());
    return h;
  }
  for (var V = r; l.length; ) {
    var U = l.shift(), R = l.shift();
    try {
      V = U(V);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    h = hh(V);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    h = h.then(d.shift(), d.shift());
  return h;
};
qr.prototype.getUri = function(o) {
  o = Ka(this.defaults, o);
  var r = HN(o.baseURL, o.url);
  return PN(r, o.params, o.paramsSerializer);
};
Bm.forEach(["delete", "get", "head", "options"], function(o) {
  qr.prototype[o] = function(r, a) {
    return this.request(Ka(a || {}, {
      method: o,
      url: r,
      data: (a || {}).data
    }));
  };
});
Bm.forEach(["post", "put", "patch"], function(o) {
  function r(a) {
    return function(c, d, h) {
      return this.request(Ka(h || {}, {
        method: o,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  qr.prototype[o] = r(), qr.prototype[o + "Form"] = r(!0);
});
var jN = qr, Ol, ph;
function XN() {
  if (ph)
    return Ol;
  ph = 1;
  var t = $a();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var l = this;
    this.promise.then(function(c) {
      if (!!l._listeners) {
        var d, h = l._listeners.length;
        for (d = 0; d < h; d++)
          l._listeners[d](c);
        l._listeners = null;
      }
    }), this.promise.then = function(c) {
      var d, h = new Promise(function(w) {
        l.subscribe(w), d = w;
      }).then(c);
      return h.cancel = function() {
        l.unsubscribe(d);
      }, h;
    }, r(function(d) {
      l.reason || (l.reason = new t(d), a(l.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, o.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(a);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, o.source = function() {
    var a, l = new o(function(d) {
      a = d;
    });
    return {
      token: l,
      cancel: a
    };
  }, Ol = o, Ol;
}
var Ql, mh;
function LN() {
  return mh || (mh = 1, Ql = function(o) {
    return function(a) {
      return o.apply(null, a);
    };
  }), Ql;
}
var zl, wh;
function $N() {
  if (wh)
    return zl;
  wh = 1;
  var t = Oe;
  return zl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, zl;
}
var vh = Oe, qN = ym, Aa = jN, KN = Cm, ey = Yc;
function Dm(t) {
  var o = new Aa(t), r = qN(Aa.prototype.request, o);
  return vh.extend(r, Aa.prototype, o), vh.extend(r, o), r.create = function(l) {
    return Dm(KN(t, l));
  }, r;
}
var st = Dm(ey);
st.Axios = Aa;
st.CanceledError = $a();
st.CancelToken = XN();
st.isCancel = Wm();
st.VERSION = xm().version;
st.toFormData = Am;
st.AxiosError = no;
st.Cancel = st.CanceledError;
st.all = function(o) {
  return Promise.all(o);
};
st.spread = LN();
st.isAxiosError = $N();
Dc.exports = st;
Dc.exports.default = st;
(function(t) {
  t.exports = Dc.exports;
})(Nm);
const _m = /* @__PURE__ */ jR(Nm.exports), Tn = _m.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), gn = _m.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var we = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(t, o) {
  (function() {
    var r, a = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", V = 500, U = "__lodash_placeholder__", R = 1, y = 2, F = 4, S = 1, C = 2, D = 1, E = 2, B = 4, x = 8, P = 16, b = 32, W = 64, A = 128, O = 256, he = 512, se = 30, Ve = "...", Te = 800, Re = 16, Ze = 1, ue = 2, xe = 3, Be = 1 / 0, Xe = 9007199254740991, io = 17976931348623157e292, Vi = 0 / 0, Yt = 4294967295, jw = Yt - 1, Xw = Yt >>> 1, Lw = [
      ["ary", A],
      ["bind", D],
      ["bindKey", E],
      ["curry", x],
      ["curryRight", P],
      ["flip", he],
      ["partial", b],
      ["partialRight", W],
      ["rearg", O]
    ], pr = "[object Arguments]", Ti = "[object Array]", $w = "[object AsyncFunction]", ao = "[object Boolean]", so = "[object Date]", qw = "[object DOMException]", gi = "[object Error]", Ui = "[object Function]", vu = "[object GeneratorFunction]", Ft = "[object Map]", lo = "[object Number]", Kw = "[object Null]", Kt = "[object Object]", Vu = "[object Promise]", e1 = "[object Proxy]", co = "[object RegExp]", Wt = "[object Set]", uo = "[object String]", Ri = "[object Symbol]", t1 = "[object Undefined]", fo = "[object WeakMap]", n1 = "[object WeakSet]", ho = "[object ArrayBuffer]", mr = "[object DataView]", ls = "[object Float32Array]", cs = "[object Float64Array]", us = "[object Int8Array]", ds = "[object Int16Array]", fs = "[object Int32Array]", hs = "[object Uint8Array]", ps = "[object Uint8ClampedArray]", ms = "[object Uint16Array]", ws = "[object Uint32Array]", r1 = /\b__p \+= '';/g, o1 = /\b(__p \+=) '' \+/g, i1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Tu = /&(?:amp|lt|gt|quot|#39);/g, gu = /[&<>"']/g, a1 = RegExp(Tu.source), s1 = RegExp(gu.source), l1 = /<%-([\s\S]+?)%>/g, c1 = /<%([\s\S]+?)%>/g, Uu = /<%=([\s\S]+?)%>/g, u1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, d1 = /^\w*$/, f1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /[\\^$.*+?()[\]{}|]/g, h1 = RegExp(vs.source), Vs = /^\s+/, p1 = /\s/, m1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, w1 = /\{\n\/\* \[wrapped with (.+)\] \*/, v1 = /,? & /, V1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, T1 = /[()=,{}\[\]\/\s]/, g1 = /\\(\\)?/g, U1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ru = /\w*$/, R1 = /^[-+]0x[0-9a-f]+$/i, N1 = /^0b[01]+$/i, y1 = /^\[object .+?Constructor\]$/, k1 = /^0o[0-7]+$/i, M1 = /^(?:0|[1-9]\d*)$/, Z1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ni = /($^)/, b1 = /['\n\r\u2028\u2029\\]/g, yi = "\\ud800-\\udfff", J1 = "\\u0300-\\u036f", E1 = "\\ufe20-\\ufe2f", S1 = "\\u20d0-\\u20ff", Nu = J1 + E1 + S1, yu = "\\u2700-\\u27bf", ku = "a-z\\xdf-\\xf6\\xf8-\\xff", A1 = "\\xac\\xb1\\xd7\\xf7", F1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", W1 = "\\u2000-\\u206f", C1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Mu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Zu = "\\ufe0e\\ufe0f", bu = A1 + F1 + W1 + C1, Ts = "['\u2019]", x1 = "[" + yi + "]", Ju = "[" + bu + "]", ki = "[" + Nu + "]", Eu = "\\d+", B1 = "[" + yu + "]", Su = "[" + ku + "]", Au = "[^" + yi + bu + Eu + yu + ku + Mu + "]", gs = "\\ud83c[\\udffb-\\udfff]", I1 = "(?:" + ki + "|" + gs + ")", Fu = "[^" + yi + "]", Us = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", wr = "[" + Mu + "]", Wu = "\\u200d", Cu = "(?:" + Su + "|" + Au + ")", D1 = "(?:" + wr + "|" + Au + ")", xu = "(?:" + Ts + "(?:d|ll|m|re|s|t|ve))?", Bu = "(?:" + Ts + "(?:D|LL|M|RE|S|T|VE))?", Iu = I1 + "?", Du = "[" + Zu + "]?", _1 = "(?:" + Wu + "(?:" + [Fu, Us, Rs].join("|") + ")" + Du + Iu + ")*", O1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Q1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _u = Du + Iu + _1, z1 = "(?:" + [B1, Us, Rs].join("|") + ")" + _u, G1 = "(?:" + [Fu + ki + "?", ki, Us, Rs, x1].join("|") + ")", Y1 = RegExp(Ts, "g"), P1 = RegExp(ki, "g"), Ns = RegExp(gs + "(?=" + gs + ")|" + G1 + _u, "g"), H1 = RegExp([
      wr + "?" + Su + "+" + xu + "(?=" + [Ju, wr, "$"].join("|") + ")",
      D1 + "+" + Bu + "(?=" + [Ju, wr + Cu, "$"].join("|") + ")",
      wr + "?" + Cu + "+" + xu,
      wr + "+" + Bu,
      Q1,
      O1,
      Eu,
      z1
    ].join("|"), "g"), j1 = RegExp("[" + Wu + yi + Nu + Zu + "]"), X1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, L1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], $1 = -1, pe = {};
    pe[ls] = pe[cs] = pe[us] = pe[ds] = pe[fs] = pe[hs] = pe[ps] = pe[ms] = pe[ws] = !0, pe[pr] = pe[Ti] = pe[ho] = pe[ao] = pe[mr] = pe[so] = pe[gi] = pe[Ui] = pe[Ft] = pe[lo] = pe[Kt] = pe[co] = pe[Wt] = pe[uo] = pe[fo] = !1;
    var fe = {};
    fe[pr] = fe[Ti] = fe[ho] = fe[mr] = fe[ao] = fe[so] = fe[ls] = fe[cs] = fe[us] = fe[ds] = fe[fs] = fe[Ft] = fe[lo] = fe[Kt] = fe[co] = fe[Wt] = fe[uo] = fe[Ri] = fe[hs] = fe[ps] = fe[ms] = fe[ws] = !0, fe[gi] = fe[Ui] = fe[fo] = !1;
    var q1 = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, K1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ev = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, tv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, nv = parseFloat, rv = parseInt, Ou = typeof Jo == "object" && Jo && Jo.Object === Object && Jo, ov = typeof self == "object" && self && self.Object === Object && self, Ie = Ou || ov || Function("return this")(), ys = o && !o.nodeType && o, On = ys && !0 && t && !t.nodeType && t, Qu = On && On.exports === ys, ks = Qu && Ou.process, gt = function() {
      try {
        var T = On && On.require && On.require("util").types;
        return T || ks && ks.binding && ks.binding("util");
      } catch {
      }
    }(), zu = gt && gt.isArrayBuffer, Gu = gt && gt.isDate, Yu = gt && gt.isMap, Pu = gt && gt.isRegExp, Hu = gt && gt.isSet, ju = gt && gt.isTypedArray;
    function lt(T, k, N) {
      switch (N.length) {
        case 0:
          return T.call(k);
        case 1:
          return T.call(k, N[0]);
        case 2:
          return T.call(k, N[0], N[1]);
        case 3:
          return T.call(k, N[0], N[1], N[2]);
      }
      return T.apply(k, N);
    }
    function iv(T, k, N, _) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var Je = T[H];
        k(_, Je, N(Je), T);
      }
      return _;
    }
    function Ut(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _ && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function av(T, k) {
      for (var N = T == null ? 0 : T.length; N-- && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Xu(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _; )
        if (!k(T[N], N, T))
          return !1;
      return !0;
    }
    function Un(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length, H = 0, re = []; ++N < _; ) {
        var Je = T[N];
        k(Je, N, T) && (re[H++] = Je);
      }
      return re;
    }
    function Mi(T, k) {
      var N = T == null ? 0 : T.length;
      return !!N && vr(T, k, 0) > -1;
    }
    function Ms(T, k, N) {
      for (var _ = -1, H = T == null ? 0 : T.length; ++_ < H; )
        if (N(k, T[_]))
          return !0;
      return !1;
    }
    function me(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length, H = Array(_); ++N < _; )
        H[N] = k(T[N], N, T);
      return H;
    }
    function Rn(T, k) {
      for (var N = -1, _ = k.length, H = T.length; ++N < _; )
        T[H + N] = k[N];
      return T;
    }
    function Zs(T, k, N, _) {
      var H = -1, re = T == null ? 0 : T.length;
      for (_ && re && (N = T[++H]); ++H < re; )
        N = k(N, T[H], H, T);
      return N;
    }
    function sv(T, k, N, _) {
      var H = T == null ? 0 : T.length;
      for (_ && H && (N = T[--H]); H--; )
        N = k(N, T[H], H, T);
      return N;
    }
    function bs(T, k) {
      for (var N = -1, _ = T == null ? 0 : T.length; ++N < _; )
        if (k(T[N], N, T))
          return !0;
      return !1;
    }
    var lv = Js("length");
    function cv(T) {
      return T.split("");
    }
    function uv(T) {
      return T.match(V1) || [];
    }
    function Lu(T, k, N) {
      var _;
      return N(T, function(H, re, Je) {
        if (k(H, re, Je))
          return _ = re, !1;
      }), _;
    }
    function Zi(T, k, N, _) {
      for (var H = T.length, re = N + (_ ? 1 : -1); _ ? re-- : ++re < H; )
        if (k(T[re], re, T))
          return re;
      return -1;
    }
    function vr(T, k, N) {
      return k === k ? Rv(T, k, N) : Zi(T, $u, N);
    }
    function dv(T, k, N, _) {
      for (var H = N - 1, re = T.length; ++H < re; )
        if (_(T[H], k))
          return H;
      return -1;
    }
    function $u(T) {
      return T !== T;
    }
    function qu(T, k) {
      var N = T == null ? 0 : T.length;
      return N ? Ss(T, k) / N : Vi;
    }
    function Js(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function Es(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function Ku(T, k, N, _, H) {
      return H(T, function(re, Je, de) {
        N = _ ? (_ = !1, re) : k(N, re, Je, de);
      }), N;
    }
    function fv(T, k) {
      var N = T.length;
      for (T.sort(k); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Ss(T, k) {
      for (var N, _ = -1, H = T.length; ++_ < H; ) {
        var re = k(T[_]);
        re !== r && (N = N === r ? re : N + re);
      }
      return N;
    }
    function As(T, k) {
      for (var N = -1, _ = Array(T); ++N < T; )
        _[N] = k(N);
      return _;
    }
    function hv(T, k) {
      return me(k, function(N) {
        return [N, T[N]];
      });
    }
    function ed(T) {
      return T && T.slice(0, od(T) + 1).replace(Vs, "");
    }
    function ct(T) {
      return function(k) {
        return T(k);
      };
    }
    function Fs(T, k) {
      return me(k, function(N) {
        return T[N];
      });
    }
    function po(T, k) {
      return T.has(k);
    }
    function td(T, k) {
      for (var N = -1, _ = T.length; ++N < _ && vr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function nd(T, k) {
      for (var N = T.length; N-- && vr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function pv(T, k) {
      for (var N = T.length, _ = 0; N--; )
        T[N] === k && ++_;
      return _;
    }
    var mv = Es(q1), wv = Es(K1);
    function vv(T) {
      return "\\" + tv[T];
    }
    function Vv(T, k) {
      return T == null ? r : T[k];
    }
    function Vr(T) {
      return j1.test(T);
    }
    function Tv(T) {
      return X1.test(T);
    }
    function gv(T) {
      for (var k, N = []; !(k = T.next()).done; )
        N.push(k.value);
      return N;
    }
    function Ws(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_, H) {
        N[++k] = [H, _];
      }), N;
    }
    function rd(T, k) {
      return function(N) {
        return T(k(N));
      };
    }
    function Nn(T, k) {
      for (var N = -1, _ = T.length, H = 0, re = []; ++N < _; ) {
        var Je = T[N];
        (Je === k || Je === U) && (T[N] = U, re[H++] = N);
      }
      return re;
    }
    function bi(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_) {
        N[++k] = _;
      }), N;
    }
    function Uv(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(_) {
        N[++k] = [_, _];
      }), N;
    }
    function Rv(T, k, N) {
      for (var _ = N - 1, H = T.length; ++_ < H; )
        if (T[_] === k)
          return _;
      return -1;
    }
    function Nv(T, k, N) {
      for (var _ = N + 1; _--; )
        if (T[_] === k)
          return _;
      return _;
    }
    function Tr(T) {
      return Vr(T) ? kv(T) : lv(T);
    }
    function Ct(T) {
      return Vr(T) ? Mv(T) : cv(T);
    }
    function od(T) {
      for (var k = T.length; k-- && p1.test(T.charAt(k)); )
        ;
      return k;
    }
    var yv = Es(ev);
    function kv(T) {
      for (var k = Ns.lastIndex = 0; Ns.test(T); )
        ++k;
      return k;
    }
    function Mv(T) {
      return T.match(Ns) || [];
    }
    function Zv(T) {
      return T.match(H1) || [];
    }
    var bv = function T(k) {
      k = k == null ? Ie : gr.defaults(Ie.Object(), k, gr.pick(Ie, L1));
      var N = k.Array, _ = k.Date, H = k.Error, re = k.Function, Je = k.Math, de = k.Object, Cs = k.RegExp, Jv = k.String, Rt = k.TypeError, Ji = N.prototype, Ev = re.prototype, Ur = de.prototype, Ei = k["__core-js_shared__"], Si = Ev.toString, le = Ur.hasOwnProperty, Sv = 0, id = function() {
        var e = /[^.]+$/.exec(Ei && Ei.keys && Ei.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ai = Ur.toString, Av = Si.call(de), Fv = Ie._, Wv = Cs(
        "^" + Si.call(le).replace(vs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Fi = Qu ? k.Buffer : r, yn = k.Symbol, Wi = k.Uint8Array, ad = Fi ? Fi.allocUnsafe : r, Ci = rd(de.getPrototypeOf, de), sd = de.create, ld = Ur.propertyIsEnumerable, xi = Ji.splice, cd = yn ? yn.isConcatSpreadable : r, mo = yn ? yn.iterator : r, Qn = yn ? yn.toStringTag : r, Bi = function() {
        try {
          var e = Hn(de, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Cv = k.clearTimeout !== Ie.clearTimeout && k.clearTimeout, xv = _ && _.now !== Ie.Date.now && _.now, Bv = k.setTimeout !== Ie.setTimeout && k.setTimeout, Ii = Je.ceil, Di = Je.floor, xs = de.getOwnPropertySymbols, Iv = Fi ? Fi.isBuffer : r, ud = k.isFinite, Dv = Ji.join, _v = rd(de.keys, de), Ee = Je.max, ze = Je.min, Ov = _.now, Qv = k.parseInt, dd = Je.random, zv = Ji.reverse, Bs = Hn(k, "DataView"), wo = Hn(k, "Map"), Is = Hn(k, "Promise"), Rr = Hn(k, "Set"), vo = Hn(k, "WeakMap"), Vo = Hn(de, "create"), _i = vo && new vo(), Nr = {}, Gv = jn(Bs), Yv = jn(wo), Pv = jn(Is), Hv = jn(Rr), jv = jn(vo), Oi = yn ? yn.prototype : r, To = Oi ? Oi.valueOf : r, fd = Oi ? Oi.toString : r;
      function f(e) {
        if (ge(e) && !j(e) && !(e instanceof te)) {
          if (e instanceof Nt)
            return e;
          if (le.call(e, "__wrapped__"))
            return pf(e);
        }
        return new Nt(e);
      }
      var yr = function() {
        function e() {
        }
        return function(n) {
          if (!ve(n))
            return {};
          if (sd)
            return sd(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function Qi() {
      }
      function Nt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        escape: l1,
        evaluate: c1,
        interpolate: Uu,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = Qi.prototype, f.prototype.constructor = f, Nt.prototype = yr(Qi.prototype), Nt.prototype.constructor = Nt;
      function te(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Yt, this.__views__ = [];
      }
      function Xv() {
        var e = new te(this.__wrapped__);
        return e.__actions__ = et(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = et(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = et(this.__views__), e;
      }
      function Lv() {
        if (this.__filtered__) {
          var e = new te(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function $v() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), s = n < 0, u = i ? e.length : 0, p = c0(0, u, this.__views__), m = p.start, v = p.end, g = v - m, M = s ? v : m - 1, Z = this.__iteratees__, J = Z.length, I = 0, Q = ze(g, this.__takeCount__);
        if (!i || !s && u == g && Q == g)
          return xd(e, this.__actions__);
        var G = [];
        e:
          for (; g-- && I < Q; ) {
            M += n;
            for (var L = -1, Y = e[M]; ++L < J; ) {
              var ee = Z[L], ne = ee.iteratee, ft = ee.type, qe = ne(Y);
              if (ft == ue)
                Y = qe;
              else if (!qe) {
                if (ft == Ze)
                  continue e;
                break e;
              }
            }
            G[I++] = Y;
          }
        return G;
      }
      te.prototype = yr(Qi.prototype), te.prototype.constructor = te;
      function zn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function qv() {
        this.__data__ = Vo ? Vo(null) : {}, this.size = 0;
      }
      function Kv(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function eV(e) {
        var n = this.__data__;
        if (Vo) {
          var i = n[e];
          return i === w ? r : i;
        }
        return le.call(n, e) ? n[e] : r;
      }
      function tV(e) {
        var n = this.__data__;
        return Vo ? n[e] !== r : le.call(n, e);
      }
      function nV(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Vo && n === r ? w : n, this;
      }
      zn.prototype.clear = qv, zn.prototype.delete = Kv, zn.prototype.get = eV, zn.prototype.has = tV, zn.prototype.set = nV;
      function en(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function rV() {
        this.__data__ = [], this.size = 0;
      }
      function oV(e) {
        var n = this.__data__, i = zi(n, e);
        if (i < 0)
          return !1;
        var s = n.length - 1;
        return i == s ? n.pop() : xi.call(n, i, 1), --this.size, !0;
      }
      function iV(e) {
        var n = this.__data__, i = zi(n, e);
        return i < 0 ? r : n[i][1];
      }
      function aV(e) {
        return zi(this.__data__, e) > -1;
      }
      function sV(e, n) {
        var i = this.__data__, s = zi(i, e);
        return s < 0 ? (++this.size, i.push([e, n])) : i[s][1] = n, this;
      }
      en.prototype.clear = rV, en.prototype.delete = oV, en.prototype.get = iV, en.prototype.has = aV, en.prototype.set = sV;
      function tn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function lV() {
        this.size = 0, this.__data__ = {
          hash: new zn(),
          map: new (wo || en)(),
          string: new zn()
        };
      }
      function cV(e) {
        var n = ta(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function uV(e) {
        return ta(this, e).get(e);
      }
      function dV(e) {
        return ta(this, e).has(e);
      }
      function fV(e, n) {
        var i = ta(this, e), s = i.size;
        return i.set(e, n), this.size += i.size == s ? 0 : 1, this;
      }
      tn.prototype.clear = lV, tn.prototype.delete = cV, tn.prototype.get = uV, tn.prototype.has = dV, tn.prototype.set = fV;
      function Gn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new tn(); ++n < i; )
          this.add(e[n]);
      }
      function hV(e) {
        return this.__data__.set(e, w), this;
      }
      function pV(e) {
        return this.__data__.has(e);
      }
      Gn.prototype.add = Gn.prototype.push = hV, Gn.prototype.has = pV;
      function xt(e) {
        var n = this.__data__ = new en(e);
        this.size = n.size;
      }
      function mV() {
        this.__data__ = new en(), this.size = 0;
      }
      function wV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function vV(e) {
        return this.__data__.get(e);
      }
      function VV(e) {
        return this.__data__.has(e);
      }
      function TV(e, n) {
        var i = this.__data__;
        if (i instanceof en) {
          var s = i.__data__;
          if (!wo || s.length < l - 1)
            return s.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new tn(s);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      xt.prototype.clear = mV, xt.prototype.delete = wV, xt.prototype.get = vV, xt.prototype.has = VV, xt.prototype.set = TV;
      function hd(e, n) {
        var i = j(e), s = !i && Xn(e), u = !i && !s && Jn(e), p = !i && !s && !u && br(e), m = i || s || u || p, v = m ? As(e.length, Jv) : [], g = v.length;
        for (var M in e)
          (n || le.call(e, M)) && !(m && (M == "length" || u && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || an(M, g))) && v.push(M);
        return v;
      }
      function pd(e) {
        var n = e.length;
        return n ? e[Xs(0, n - 1)] : r;
      }
      function gV(e, n) {
        return na(et(e), Yn(n, 0, e.length));
      }
      function UV(e) {
        return na(et(e));
      }
      function Ds(e, n, i) {
        (i !== r && !Bt(e[n], i) || i === r && !(n in e)) && nn(e, n, i);
      }
      function go(e, n, i) {
        var s = e[n];
        (!(le.call(e, n) && Bt(s, i)) || i === r && !(n in e)) && nn(e, n, i);
      }
      function zi(e, n) {
        for (var i = e.length; i--; )
          if (Bt(e[i][0], n))
            return i;
        return -1;
      }
      function RV(e, n, i, s) {
        return kn(e, function(u, p, m) {
          n(s, u, i(u), m);
        }), s;
      }
      function md(e, n) {
        return e && Ht(n, Ae(n), e);
      }
      function NV(e, n) {
        return e && Ht(n, nt(n), e);
      }
      function nn(e, n, i) {
        n == "__proto__" && Bi ? Bi(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function _s(e, n) {
        for (var i = -1, s = n.length, u = N(s), p = e == null; ++i < s; )
          u[i] = p ? r : gl(e, n[i]);
        return u;
      }
      function Yn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function yt(e, n, i, s, u, p) {
        var m, v = n & R, g = n & y, M = n & F;
        if (i && (m = u ? i(e, s, u, p) : i(e)), m !== r)
          return m;
        if (!ve(e))
          return e;
        var Z = j(e);
        if (Z) {
          if (m = d0(e), !v)
            return et(e, m);
        } else {
          var J = Ge(e), I = J == Ui || J == vu;
          if (Jn(e))
            return Dd(e, v);
          if (J == Kt || J == pr || I && !u) {
            if (m = g || I ? {} : of(e), !v)
              return g ? e0(e, NV(m, e)) : KV(e, md(m, e));
          } else {
            if (!fe[J])
              return u ? e : {};
            m = f0(e, J, v);
          }
        }
        p || (p = new xt());
        var Q = p.get(e);
        if (Q)
          return Q;
        p.set(e, m), Wf(e) ? e.forEach(function(Y) {
          m.add(yt(Y, n, i, Y, e, p));
        }) : Af(e) && e.forEach(function(Y, ee) {
          m.set(ee, yt(Y, n, i, ee, e, p));
        });
        var G = M ? g ? al : il : g ? nt : Ae, L = Z ? r : G(e);
        return Ut(L || e, function(Y, ee) {
          L && (ee = Y, Y = e[ee]), go(m, ee, yt(Y, n, i, ee, e, p));
        }), m;
      }
      function yV(e) {
        var n = Ae(e);
        return function(i) {
          return wd(i, e, n);
        };
      }
      function wd(e, n, i) {
        var s = i.length;
        if (e == null)
          return !s;
        for (e = de(e); s--; ) {
          var u = i[s], p = n[u], m = e[u];
          if (m === r && !(u in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function vd(e, n, i) {
        if (typeof e != "function")
          throw new Rt(d);
        return Zo(function() {
          e.apply(r, i);
        }, n);
      }
      function Uo(e, n, i, s) {
        var u = -1, p = Mi, m = !0, v = e.length, g = [], M = n.length;
        if (!v)
          return g;
        i && (n = me(n, ct(i))), s ? (p = Ms, m = !1) : n.length >= l && (p = po, m = !1, n = new Gn(n));
        e:
          for (; ++u < v; ) {
            var Z = e[u], J = i == null ? Z : i(Z);
            if (Z = s || Z !== 0 ? Z : 0, m && J === J) {
              for (var I = M; I--; )
                if (n[I] === J)
                  continue e;
              g.push(Z);
            } else
              p(n, J, s) || g.push(Z);
          }
        return g;
      }
      var kn = Gd(Pt), Vd = Gd(Qs, !0);
      function kV(e, n) {
        var i = !0;
        return kn(e, function(s, u, p) {
          return i = !!n(s, u, p), i;
        }), i;
      }
      function Gi(e, n, i) {
        for (var s = -1, u = e.length; ++s < u; ) {
          var p = e[s], m = n(p);
          if (m != null && (v === r ? m === m && !dt(m) : i(m, v)))
            var v = m, g = p;
        }
        return g;
      }
      function MV(e, n, i, s) {
        var u = e.length;
        for (i = X(i), i < 0 && (i = -i > u ? 0 : u + i), s = s === r || s > u ? u : X(s), s < 0 && (s += u), s = i > s ? 0 : xf(s); i < s; )
          e[i++] = n;
        return e;
      }
      function Td(e, n) {
        var i = [];
        return kn(e, function(s, u, p) {
          n(s, u, p) && i.push(s);
        }), i;
      }
      function De(e, n, i, s, u) {
        var p = -1, m = e.length;
        for (i || (i = p0), u || (u = []); ++p < m; ) {
          var v = e[p];
          n > 0 && i(v) ? n > 1 ? De(v, n - 1, i, s, u) : Rn(u, v) : s || (u[u.length] = v);
        }
        return u;
      }
      var Os = Yd(), gd = Yd(!0);
      function Pt(e, n) {
        return e && Os(e, n, Ae);
      }
      function Qs(e, n) {
        return e && gd(e, n, Ae);
      }
      function Yi(e, n) {
        return Un(n, function(i) {
          return sn(e[i]);
        });
      }
      function Pn(e, n) {
        n = Zn(n, e);
        for (var i = 0, s = n.length; e != null && i < s; )
          e = e[jt(n[i++])];
        return i && i == s ? e : r;
      }
      function Ud(e, n, i) {
        var s = n(e);
        return j(e) ? s : Rn(s, i(e));
      }
      function Le(e) {
        return e == null ? e === r ? t1 : Kw : Qn && Qn in de(e) ? l0(e) : U0(e);
      }
      function zs(e, n) {
        return e > n;
      }
      function ZV(e, n) {
        return e != null && le.call(e, n);
      }
      function bV(e, n) {
        return e != null && n in de(e);
      }
      function JV(e, n, i) {
        return e >= ze(n, i) && e < Ee(n, i);
      }
      function Gs(e, n, i) {
        for (var s = i ? Ms : Mi, u = e[0].length, p = e.length, m = p, v = N(p), g = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && n && (Z = me(Z, ct(n))), g = ze(Z.length, g), v[m] = !i && (n || u >= 120 && Z.length >= 120) ? new Gn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, I = v[0];
        e:
          for (; ++J < u && M.length < g; ) {
            var Q = Z[J], G = n ? n(Q) : Q;
            if (Q = i || Q !== 0 ? Q : 0, !(I ? po(I, G) : s(M, G, i))) {
              for (m = p; --m; ) {
                var L = v[m];
                if (!(L ? po(L, G) : s(e[m], G, i)))
                  continue e;
              }
              I && I.push(G), M.push(Q);
            }
          }
        return M;
      }
      function EV(e, n, i, s) {
        return Pt(e, function(u, p, m) {
          n(s, i(u), p, m);
        }), s;
      }
      function Ro(e, n, i) {
        n = Zn(n, e), e = cf(e, n);
        var s = e == null ? e : e[jt(Mt(n))];
        return s == null ? r : lt(s, e, i);
      }
      function Rd(e) {
        return ge(e) && Le(e) == pr;
      }
      function SV(e) {
        return ge(e) && Le(e) == ho;
      }
      function AV(e) {
        return ge(e) && Le(e) == so;
      }
      function No(e, n, i, s, u) {
        return e === n ? !0 : e == null || n == null || !ge(e) && !ge(n) ? e !== e && n !== n : FV(e, n, i, s, No, u);
      }
      function FV(e, n, i, s, u, p) {
        var m = j(e), v = j(n), g = m ? Ti : Ge(e), M = v ? Ti : Ge(n);
        g = g == pr ? Kt : g, M = M == pr ? Kt : M;
        var Z = g == Kt, J = M == Kt, I = g == M;
        if (I && Jn(e)) {
          if (!Jn(n))
            return !1;
          m = !0, Z = !1;
        }
        if (I && !Z)
          return p || (p = new xt()), m || br(e) ? tf(e, n, i, s, u, p) : a0(e, n, g, i, s, u, p);
        if (!(i & S)) {
          var Q = Z && le.call(e, "__wrapped__"), G = J && le.call(n, "__wrapped__");
          if (Q || G) {
            var L = Q ? e.value() : e, Y = G ? n.value() : n;
            return p || (p = new xt()), u(L, Y, i, s, p);
          }
        }
        return I ? (p || (p = new xt()), s0(e, n, i, s, u, p)) : !1;
      }
      function WV(e) {
        return ge(e) && Ge(e) == Ft;
      }
      function Ys(e, n, i, s) {
        var u = i.length, p = u, m = !s;
        if (e == null)
          return !p;
        for (e = de(e); u--; ) {
          var v = i[u];
          if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++u < p; ) {
          v = i[u];
          var g = v[0], M = e[g], Z = v[1];
          if (m && v[2]) {
            if (M === r && !(g in e))
              return !1;
          } else {
            var J = new xt();
            if (s)
              var I = s(M, Z, g, e, n, J);
            if (!(I === r ? No(Z, M, S | C, s, J) : I))
              return !1;
          }
        }
        return !0;
      }
      function Nd(e) {
        if (!ve(e) || w0(e))
          return !1;
        var n = sn(e) ? Wv : y1;
        return n.test(jn(e));
      }
      function CV(e) {
        return ge(e) && Le(e) == co;
      }
      function xV(e) {
        return ge(e) && Ge(e) == Wt;
      }
      function BV(e) {
        return ge(e) && la(e.length) && !!pe[Le(e)];
      }
      function yd(e) {
        return typeof e == "function" ? e : e == null ? rt : typeof e == "object" ? j(e) ? Zd(e[0], e[1]) : Md(e) : Hf(e);
      }
      function Ps(e) {
        if (!Mo(e))
          return _v(e);
        var n = [];
        for (var i in de(e))
          le.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function IV(e) {
        if (!ve(e))
          return g0(e);
        var n = Mo(e), i = [];
        for (var s in e)
          s == "constructor" && (n || !le.call(e, s)) || i.push(s);
        return i;
      }
      function Hs(e, n) {
        return e < n;
      }
      function kd(e, n) {
        var i = -1, s = tt(e) ? N(e.length) : [];
        return kn(e, function(u, p, m) {
          s[++i] = n(u, p, m);
        }), s;
      }
      function Md(e) {
        var n = ll(e);
        return n.length == 1 && n[0][2] ? sf(n[0][0], n[0][1]) : function(i) {
          return i === e || Ys(i, e, n);
        };
      }
      function Zd(e, n) {
        return ul(e) && af(n) ? sf(jt(e), n) : function(i) {
          var s = gl(i, e);
          return s === r && s === n ? Ul(i, e) : No(n, s, S | C);
        };
      }
      function Pi(e, n, i, s, u) {
        e !== n && Os(n, function(p, m) {
          if (u || (u = new xt()), ve(p))
            DV(e, n, m, i, Pi, s, u);
          else {
            var v = s ? s(fl(e, m), p, m + "", e, n, u) : r;
            v === r && (v = p), Ds(e, m, v);
          }
        }, nt);
      }
      function DV(e, n, i, s, u, p, m) {
        var v = fl(e, i), g = fl(n, i), M = m.get(g);
        if (M) {
          Ds(e, i, M);
          return;
        }
        var Z = p ? p(v, g, i + "", e, n, m) : r, J = Z === r;
        if (J) {
          var I = j(g), Q = !I && Jn(g), G = !I && !Q && br(g);
          Z = g, I || Q || G ? j(v) ? Z = v : Ne(v) ? Z = et(v) : Q ? (J = !1, Z = Dd(g, !0)) : G ? (J = !1, Z = _d(g, !0)) : Z = [] : bo(g) || Xn(g) ? (Z = v, Xn(v) ? Z = Bf(v) : (!ve(v) || sn(v)) && (Z = of(g))) : J = !1;
        }
        J && (m.set(g, Z), u(Z, g, s, p, m), m.delete(g)), Ds(e, i, Z);
      }
      function bd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, an(n, i) ? e[n] : r;
      }
      function Jd(e, n, i) {
        n.length ? n = me(n, function(p) {
          return j(p) ? function(m) {
            return Pn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [rt];
        var s = -1;
        n = me(n, ct(z()));
        var u = kd(e, function(p, m, v) {
          var g = me(n, function(M) {
            return M(p);
          });
          return { criteria: g, index: ++s, value: p };
        });
        return fv(u, function(p, m) {
          return qV(p, m, i);
        });
      }
      function _V(e, n) {
        return Ed(e, n, function(i, s) {
          return Ul(e, s);
        });
      }
      function Ed(e, n, i) {
        for (var s = -1, u = n.length, p = {}; ++s < u; ) {
          var m = n[s], v = Pn(e, m);
          i(v, m) && yo(p, Zn(m, e), v);
        }
        return p;
      }
      function OV(e) {
        return function(n) {
          return Pn(n, e);
        };
      }
      function js(e, n, i, s) {
        var u = s ? dv : vr, p = -1, m = n.length, v = e;
        for (e === n && (n = et(n)), i && (v = me(e, ct(i))); ++p < m; )
          for (var g = 0, M = n[p], Z = i ? i(M) : M; (g = u(v, Z, g, s)) > -1; )
            v !== e && xi.call(v, g, 1), xi.call(e, g, 1);
        return e;
      }
      function Sd(e, n) {
        for (var i = e ? n.length : 0, s = i - 1; i--; ) {
          var u = n[i];
          if (i == s || u !== p) {
            var p = u;
            an(u) ? xi.call(e, u, 1) : qs(e, u);
          }
        }
        return e;
      }
      function Xs(e, n) {
        return e + Di(dd() * (n - e + 1));
      }
      function QV(e, n, i, s) {
        for (var u = -1, p = Ee(Ii((n - e) / (i || 1)), 0), m = N(p); p--; )
          m[s ? p : ++u] = e, e += i;
        return m;
      }
      function Ls(e, n) {
        var i = "";
        if (!e || n < 1 || n > Xe)
          return i;
        do
          n % 2 && (i += e), n = Di(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function q(e, n) {
        return hl(lf(e, n, rt), e + "");
      }
      function zV(e) {
        return pd(Jr(e));
      }
      function GV(e, n) {
        var i = Jr(e);
        return na(i, Yn(n, 0, i.length));
      }
      function yo(e, n, i, s) {
        if (!ve(e))
          return e;
        n = Zn(n, e);
        for (var u = -1, p = n.length, m = p - 1, v = e; v != null && ++u < p; ) {
          var g = jt(n[u]), M = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (u != m) {
            var Z = v[g];
            M = s ? s(Z, g, v) : r, M === r && (M = ve(Z) ? Z : an(n[u + 1]) ? [] : {});
          }
          go(v, g, M), v = v[g];
        }
        return e;
      }
      var Ad = _i ? function(e, n) {
        return _i.set(e, n), e;
      } : rt, YV = Bi ? function(e, n) {
        return Bi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Nl(n),
          writable: !0
        });
      } : rt;
      function PV(e) {
        return na(Jr(e));
      }
      function kt(e, n, i) {
        var s = -1, u = e.length;
        n < 0 && (n = -n > u ? 0 : u + n), i = i > u ? u : i, i < 0 && (i += u), u = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = N(u); ++s < u; )
          p[s] = e[s + n];
        return p;
      }
      function HV(e, n) {
        var i;
        return kn(e, function(s, u, p) {
          return i = n(s, u, p), !i;
        }), !!i;
      }
      function Hi(e, n, i) {
        var s = 0, u = e == null ? s : e.length;
        if (typeof n == "number" && n === n && u <= Xw) {
          for (; s < u; ) {
            var p = s + u >>> 1, m = e[p];
            m !== null && !dt(m) && (i ? m <= n : m < n) ? s = p + 1 : u = p;
          }
          return u;
        }
        return $s(e, n, rt, i);
      }
      function $s(e, n, i, s) {
        var u = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, g = dt(n), M = n === r; u < p; ) {
          var Z = Di((u + p) / 2), J = i(e[Z]), I = J !== r, Q = J === null, G = J === J, L = dt(J);
          if (m)
            var Y = s || G;
          else
            M ? Y = G && (s || I) : v ? Y = G && I && (s || !Q) : g ? Y = G && I && !Q && (s || !L) : Q || L ? Y = !1 : Y = s ? J <= n : J < n;
          Y ? u = Z + 1 : p = Z;
        }
        return ze(p, jw);
      }
      function Fd(e, n) {
        for (var i = -1, s = e.length, u = 0, p = []; ++i < s; ) {
          var m = e[i], v = n ? n(m) : m;
          if (!i || !Bt(v, g)) {
            var g = v;
            p[u++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Wd(e) {
        return typeof e == "number" ? e : dt(e) ? Vi : +e;
      }
      function ut(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return me(e, ut) + "";
        if (dt(e))
          return fd ? fd.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Be ? "-0" : n;
      }
      function Mn(e, n, i) {
        var s = -1, u = Mi, p = e.length, m = !0, v = [], g = v;
        if (i)
          m = !1, u = Ms;
        else if (p >= l) {
          var M = n ? null : o0(e);
          if (M)
            return bi(M);
          m = !1, u = po, g = new Gn();
        } else
          g = n ? [] : v;
        e:
          for (; ++s < p; ) {
            var Z = e[s], J = n ? n(Z) : Z;
            if (Z = i || Z !== 0 ? Z : 0, m && J === J) {
              for (var I = g.length; I--; )
                if (g[I] === J)
                  continue e;
              n && g.push(J), v.push(Z);
            } else
              u(g, J, i) || (g !== v && g.push(J), v.push(Z));
          }
        return v;
      }
      function qs(e, n) {
        return n = Zn(n, e), e = cf(e, n), e == null || delete e[jt(Mt(n))];
      }
      function Cd(e, n, i, s) {
        return yo(e, n, i(Pn(e, n)), s);
      }
      function ji(e, n, i, s) {
        for (var u = e.length, p = s ? u : -1; (s ? p-- : ++p < u) && n(e[p], p, e); )
          ;
        return i ? kt(e, s ? 0 : p, s ? p + 1 : u) : kt(e, s ? p + 1 : 0, s ? u : p);
      }
      function xd(e, n) {
        var i = e;
        return i instanceof te && (i = i.value()), Zs(n, function(s, u) {
          return u.func.apply(u.thisArg, Rn([s], u.args));
        }, i);
      }
      function Ks(e, n, i) {
        var s = e.length;
        if (s < 2)
          return s ? Mn(e[0]) : [];
        for (var u = -1, p = N(s); ++u < s; )
          for (var m = e[u], v = -1; ++v < s; )
            v != u && (p[u] = Uo(p[u] || m, e[v], n, i));
        return Mn(De(p, 1), n, i);
      }
      function Bd(e, n, i) {
        for (var s = -1, u = e.length, p = n.length, m = {}; ++s < u; ) {
          var v = s < p ? n[s] : r;
          i(m, e[s], v);
        }
        return m;
      }
      function el(e) {
        return Ne(e) ? e : [];
      }
      function tl(e) {
        return typeof e == "function" ? e : rt;
      }
      function Zn(e, n) {
        return j(e) ? e : ul(e, n) ? [e] : hf(ie(e));
      }
      var jV = q;
      function bn(e, n, i) {
        var s = e.length;
        return i = i === r ? s : i, !n && i >= s ? e : kt(e, n, i);
      }
      var Id = Cv || function(e) {
        return Ie.clearTimeout(e);
      };
      function Dd(e, n) {
        if (n)
          return e.slice();
        var i = e.length, s = ad ? ad(i) : new e.constructor(i);
        return e.copy(s), s;
      }
      function nl(e) {
        var n = new e.constructor(e.byteLength);
        return new Wi(n).set(new Wi(e)), n;
      }
      function XV(e, n) {
        var i = n ? nl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function LV(e) {
        var n = new e.constructor(e.source, Ru.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function $V(e) {
        return To ? de(To.call(e)) : {};
      }
      function _d(e, n) {
        var i = n ? nl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Od(e, n) {
        if (e !== n) {
          var i = e !== r, s = e === null, u = e === e, p = dt(e), m = n !== r, v = n === null, g = n === n, M = dt(n);
          if (!v && !M && !p && e > n || p && m && g && !v && !M || s && m && g || !i && g || !u)
            return 1;
          if (!s && !p && !M && e < n || M && i && u && !s && !p || v && i && u || !m && u || !g)
            return -1;
        }
        return 0;
      }
      function qV(e, n, i) {
        for (var s = -1, u = e.criteria, p = n.criteria, m = u.length, v = i.length; ++s < m; ) {
          var g = Od(u[s], p[s]);
          if (g) {
            if (s >= v)
              return g;
            var M = i[s];
            return g * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Qd(e, n, i, s) {
        for (var u = -1, p = e.length, m = i.length, v = -1, g = n.length, M = Ee(p - m, 0), Z = N(g + M), J = !s; ++v < g; )
          Z[v] = n[v];
        for (; ++u < m; )
          (J || u < p) && (Z[i[u]] = e[u]);
        for (; M--; )
          Z[v++] = e[u++];
        return Z;
      }
      function zd(e, n, i, s) {
        for (var u = -1, p = e.length, m = -1, v = i.length, g = -1, M = n.length, Z = Ee(p - v, 0), J = N(Z + M), I = !s; ++u < Z; )
          J[u] = e[u];
        for (var Q = u; ++g < M; )
          J[Q + g] = n[g];
        for (; ++m < v; )
          (I || u < p) && (J[Q + i[m]] = e[u++]);
        return J;
      }
      function et(e, n) {
        var i = -1, s = e.length;
        for (n || (n = N(s)); ++i < s; )
          n[i] = e[i];
        return n;
      }
      function Ht(e, n, i, s) {
        var u = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var v = n[p], g = s ? s(i[v], e[v], v, i, e) : r;
          g === r && (g = e[v]), u ? nn(i, v, g) : go(i, v, g);
        }
        return i;
      }
      function KV(e, n) {
        return Ht(e, cl(e), n);
      }
      function e0(e, n) {
        return Ht(e, nf(e), n);
      }
      function Xi(e, n) {
        return function(i, s) {
          var u = j(i) ? iv : RV, p = n ? n() : {};
          return u(i, e, z(s, 2), p);
        };
      }
      function kr(e) {
        return q(function(n, i) {
          var s = -1, u = i.length, p = u > 1 ? i[u - 1] : r, m = u > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (u--, p) : r, m && $e(i[0], i[1], m) && (p = u < 3 ? r : p, u = 1), n = de(n); ++s < u; ) {
            var v = i[s];
            v && e(n, v, s, p);
          }
          return n;
        });
      }
      function Gd(e, n) {
        return function(i, s) {
          if (i == null)
            return i;
          if (!tt(i))
            return e(i, s);
          for (var u = i.length, p = n ? u : -1, m = de(i); (n ? p-- : ++p < u) && s(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function Yd(e) {
        return function(n, i, s) {
          for (var u = -1, p = de(n), m = s(n), v = m.length; v--; ) {
            var g = m[e ? v : ++u];
            if (i(p[g], g, p) === !1)
              break;
          }
          return n;
        };
      }
      function t0(e, n, i) {
        var s = n & D, u = ko(e);
        function p() {
          var m = this && this !== Ie && this instanceof p ? u : e;
          return m.apply(s ? i : this, arguments);
        }
        return p;
      }
      function Pd(e) {
        return function(n) {
          n = ie(n);
          var i = Vr(n) ? Ct(n) : r, s = i ? i[0] : n.charAt(0), u = i ? bn(i, 1).join("") : n.slice(1);
          return s[e]() + u;
        };
      }
      function Mr(e) {
        return function(n) {
          return Zs(Yf(Gf(n).replace(Y1, "")), e, "");
        };
      }
      function ko(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var i = yr(e.prototype), s = e.apply(i, n);
          return ve(s) ? s : i;
        };
      }
      function n0(e, n, i) {
        var s = ko(e);
        function u() {
          for (var p = arguments.length, m = N(p), v = p, g = Zr(u); v--; )
            m[v] = arguments[v];
          var M = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : Nn(m, g);
          if (p -= M.length, p < i)
            return $d(
              e,
              n,
              Li,
              u.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - p
            );
          var Z = this && this !== Ie && this instanceof u ? s : e;
          return lt(Z, this, m);
        }
        return u;
      }
      function Hd(e) {
        return function(n, i, s) {
          var u = de(n);
          if (!tt(n)) {
            var p = z(i, 3);
            n = Ae(n), i = function(v) {
              return p(u[v], v, u);
            };
          }
          var m = e(n, i, s);
          return m > -1 ? u[p ? n[m] : m] : r;
        };
      }
      function jd(e) {
        return on(function(n) {
          var i = n.length, s = i, u = Nt.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var p = n[s];
            if (typeof p != "function")
              throw new Rt(d);
            if (u && !m && ea(p) == "wrapper")
              var m = new Nt([], !0);
          }
          for (s = m ? s : i; ++s < i; ) {
            p = n[s];
            var v = ea(p), g = v == "wrapper" ? sl(p) : r;
            g && dl(g[0]) && g[1] == (A | x | b | O) && !g[4].length && g[9] == 1 ? m = m[ea(g[0])].apply(m, g[3]) : m = p.length == 1 && dl(p) ? m[v]() : m.thru(p);
          }
          return function() {
            var M = arguments, Z = M[0];
            if (m && M.length == 1 && j(Z))
              return m.plant(Z).value();
            for (var J = 0, I = i ? n[J].apply(this, M) : Z; ++J < i; )
              I = n[J].call(this, I);
            return I;
          };
        });
      }
      function Li(e, n, i, s, u, p, m, v, g, M) {
        var Z = n & A, J = n & D, I = n & E, Q = n & (x | P), G = n & he, L = I ? r : ko(e);
        function Y() {
          for (var ee = arguments.length, ne = N(ee), ft = ee; ft--; )
            ne[ft] = arguments[ft];
          if (Q)
            var qe = Zr(Y), ht = pv(ne, qe);
          if (s && (ne = Qd(ne, s, u, Q)), p && (ne = zd(ne, p, m, Q)), ee -= ht, Q && ee < M) {
            var ye = Nn(ne, qe);
            return $d(
              e,
              n,
              Li,
              Y.placeholder,
              i,
              ne,
              ye,
              v,
              g,
              M - ee
            );
          }
          var It = J ? i : this, cn = I ? It[e] : e;
          return ee = ne.length, v ? ne = R0(ne, v) : G && ee > 1 && ne.reverse(), Z && g < ee && (ne.length = g), this && this !== Ie && this instanceof Y && (cn = L || ko(cn)), cn.apply(It, ne);
        }
        return Y;
      }
      function Xd(e, n) {
        return function(i, s) {
          return EV(i, e, n(s), {});
        };
      }
      function $i(e, n) {
        return function(i, s) {
          var u;
          if (i === r && s === r)
            return n;
          if (i !== r && (u = i), s !== r) {
            if (u === r)
              return s;
            typeof i == "string" || typeof s == "string" ? (i = ut(i), s = ut(s)) : (i = Wd(i), s = Wd(s)), u = e(i, s);
          }
          return u;
        };
      }
      function rl(e) {
        return on(function(n) {
          return n = me(n, ct(z())), q(function(i) {
            var s = this;
            return e(n, function(u) {
              return lt(u, s, i);
            });
          });
        });
      }
      function qi(e, n) {
        n = n === r ? " " : ut(n);
        var i = n.length;
        if (i < 2)
          return i ? Ls(n, e) : n;
        var s = Ls(n, Ii(e / Tr(n)));
        return Vr(n) ? bn(Ct(s), 0, e).join("") : s.slice(0, e);
      }
      function r0(e, n, i, s) {
        var u = n & D, p = ko(e);
        function m() {
          for (var v = -1, g = arguments.length, M = -1, Z = s.length, J = N(Z + g), I = this && this !== Ie && this instanceof m ? p : e; ++M < Z; )
            J[M] = s[M];
          for (; g--; )
            J[M++] = arguments[++v];
          return lt(I, u ? i : this, J);
        }
        return m;
      }
      function Ld(e) {
        return function(n, i, s) {
          return s && typeof s != "number" && $e(n, i, s) && (i = s = r), n = ln(n), i === r ? (i = n, n = 0) : i = ln(i), s = s === r ? n < i ? 1 : -1 : ln(s), QV(n, i, s, e);
        };
      }
      function Ki(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Zt(n), i = Zt(i)), e(n, i);
        };
      }
      function $d(e, n, i, s, u, p, m, v, g, M) {
        var Z = n & x, J = Z ? m : r, I = Z ? r : m, Q = Z ? p : r, G = Z ? r : p;
        n |= Z ? b : W, n &= ~(Z ? W : b), n & B || (n &= ~(D | E));
        var L = [
          e,
          n,
          u,
          Q,
          J,
          G,
          I,
          v,
          g,
          M
        ], Y = i.apply(r, L);
        return dl(e) && uf(Y, L), Y.placeholder = s, df(Y, e, n);
      }
      function ol(e) {
        var n = Je[e];
        return function(i, s) {
          if (i = Zt(i), s = s == null ? 0 : ze(X(s), 292), s && ud(i)) {
            var u = (ie(i) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + s));
            return u = (ie(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - s));
          }
          return n(i);
        };
      }
      var o0 = Rr && 1 / bi(new Rr([, -0]))[1] == Be ? function(e) {
        return new Rr(e);
      } : Ml;
      function qd(e) {
        return function(n) {
          var i = Ge(n);
          return i == Ft ? Ws(n) : i == Wt ? Uv(n) : hv(n, e(n));
        };
      }
      function rn(e, n, i, s, u, p, m, v) {
        var g = n & E;
        if (!g && typeof e != "function")
          throw new Rt(d);
        var M = s ? s.length : 0;
        if (M || (n &= ~(b | W), s = u = r), m = m === r ? m : Ee(X(m), 0), v = v === r ? v : X(v), M -= u ? u.length : 0, n & W) {
          var Z = s, J = u;
          s = u = r;
        }
        var I = g ? r : sl(e), Q = [
          e,
          n,
          i,
          s,
          u,
          Z,
          J,
          p,
          m,
          v
        ];
        if (I && T0(Q, I), e = Q[0], n = Q[1], i = Q[2], s = Q[3], u = Q[4], v = Q[9] = Q[9] === r ? g ? 0 : e.length : Ee(Q[9] - M, 0), !v && n & (x | P) && (n &= ~(x | P)), !n || n == D)
          var G = t0(e, n, i);
        else
          n == x || n == P ? G = n0(e, n, v) : (n == b || n == (D | b)) && !u.length ? G = r0(e, n, i, s) : G = Li.apply(r, Q);
        var L = I ? Ad : uf;
        return df(L(G, Q), e, n);
      }
      function Kd(e, n, i, s) {
        return e === r || Bt(e, Ur[i]) && !le.call(s, i) ? n : e;
      }
      function ef(e, n, i, s, u, p) {
        return ve(e) && ve(n) && (p.set(n, e), Pi(e, n, r, ef, p), p.delete(n)), e;
      }
      function i0(e) {
        return bo(e) ? r : e;
      }
      function tf(e, n, i, s, u, p) {
        var m = i & S, v = e.length, g = n.length;
        if (v != g && !(m && g > v))
          return !1;
        var M = p.get(e), Z = p.get(n);
        if (M && Z)
          return M == n && Z == e;
        var J = -1, I = !0, Q = i & C ? new Gn() : r;
        for (p.set(e, n), p.set(n, e); ++J < v; ) {
          var G = e[J], L = n[J];
          if (s)
            var Y = m ? s(L, G, J, n, e, p) : s(G, L, J, e, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            I = !1;
            break;
          }
          if (Q) {
            if (!bs(n, function(ee, ne) {
              if (!po(Q, ne) && (G === ee || u(G, ee, i, s, p)))
                return Q.push(ne);
            })) {
              I = !1;
              break;
            }
          } else if (!(G === L || u(G, L, i, s, p))) {
            I = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), I;
      }
      function a0(e, n, i, s, u, p, m) {
        switch (i) {
          case mr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case ho:
            return !(e.byteLength != n.byteLength || !p(new Wi(e), new Wi(n)));
          case ao:
          case so:
          case lo:
            return Bt(+e, +n);
          case gi:
            return e.name == n.name && e.message == n.message;
          case co:
          case uo:
            return e == n + "";
          case Ft:
            var v = Ws;
          case Wt:
            var g = s & S;
            if (v || (v = bi), e.size != n.size && !g)
              return !1;
            var M = m.get(e);
            if (M)
              return M == n;
            s |= C, m.set(e, n);
            var Z = tf(v(e), v(n), s, u, p, m);
            return m.delete(e), Z;
          case Ri:
            if (To)
              return To.call(e) == To.call(n);
        }
        return !1;
      }
      function s0(e, n, i, s, u, p) {
        var m = i & S, v = il(e), g = v.length, M = il(n), Z = M.length;
        if (g != Z && !m)
          return !1;
        for (var J = g; J--; ) {
          var I = v[J];
          if (!(m ? I in n : le.call(n, I)))
            return !1;
        }
        var Q = p.get(e), G = p.get(n);
        if (Q && G)
          return Q == n && G == e;
        var L = !0;
        p.set(e, n), p.set(n, e);
        for (var Y = m; ++J < g; ) {
          I = v[J];
          var ee = e[I], ne = n[I];
          if (s)
            var ft = m ? s(ne, ee, I, n, e, p) : s(ee, ne, I, e, n, p);
          if (!(ft === r ? ee === ne || u(ee, ne, i, s, p) : ft)) {
            L = !1;
            break;
          }
          Y || (Y = I == "constructor");
        }
        if (L && !Y) {
          var qe = e.constructor, ht = n.constructor;
          qe != ht && "constructor" in e && "constructor" in n && !(typeof qe == "function" && qe instanceof qe && typeof ht == "function" && ht instanceof ht) && (L = !1);
        }
        return p.delete(e), p.delete(n), L;
      }
      function on(e) {
        return hl(lf(e, r, vf), e + "");
      }
      function il(e) {
        return Ud(e, Ae, cl);
      }
      function al(e) {
        return Ud(e, nt, nf);
      }
      var sl = _i ? function(e) {
        return _i.get(e);
      } : Ml;
      function ea(e) {
        for (var n = e.name + "", i = Nr[n], s = le.call(Nr, n) ? i.length : 0; s--; ) {
          var u = i[s], p = u.func;
          if (p == null || p == e)
            return u.name;
        }
        return n;
      }
      function Zr(e) {
        var n = le.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function z() {
        var e = f.iteratee || yl;
        return e = e === yl ? yd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ta(e, n) {
        var i = e.__data__;
        return m0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ll(e) {
        for (var n = Ae(e), i = n.length; i--; ) {
          var s = n[i], u = e[s];
          n[i] = [s, u, af(u)];
        }
        return n;
      }
      function Hn(e, n) {
        var i = Vv(e, n);
        return Nd(i) ? i : r;
      }
      function l0(e) {
        var n = le.call(e, Qn), i = e[Qn];
        try {
          e[Qn] = r;
          var s = !0;
        } catch {
        }
        var u = Ai.call(e);
        return s && (n ? e[Qn] = i : delete e[Qn]), u;
      }
      var cl = xs ? function(e) {
        return e == null ? [] : (e = de(e), Un(xs(e), function(n) {
          return ld.call(e, n);
        }));
      } : Zl, nf = xs ? function(e) {
        for (var n = []; e; )
          Rn(n, cl(e)), e = Ci(e);
        return n;
      } : Zl, Ge = Le;
      (Bs && Ge(new Bs(new ArrayBuffer(1))) != mr || wo && Ge(new wo()) != Ft || Is && Ge(Is.resolve()) != Vu || Rr && Ge(new Rr()) != Wt || vo && Ge(new vo()) != fo) && (Ge = function(e) {
        var n = Le(e), i = n == Kt ? e.constructor : r, s = i ? jn(i) : "";
        if (s)
          switch (s) {
            case Gv:
              return mr;
            case Yv:
              return Ft;
            case Pv:
              return Vu;
            case Hv:
              return Wt;
            case jv:
              return fo;
          }
        return n;
      });
      function c0(e, n, i) {
        for (var s = -1, u = i.length; ++s < u; ) {
          var p = i[s], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = ze(n, e + m);
              break;
            case "takeRight":
              e = Ee(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function u0(e) {
        var n = e.match(w1);
        return n ? n[1].split(v1) : [];
      }
      function rf(e, n, i) {
        n = Zn(n, e);
        for (var s = -1, u = n.length, p = !1; ++s < u; ) {
          var m = jt(n[s]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++s != u ? p : (u = e == null ? 0 : e.length, !!u && la(u) && an(m, u) && (j(e) || Xn(e)));
      }
      function d0(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && le.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function of(e) {
        return typeof e.constructor == "function" && !Mo(e) ? yr(Ci(e)) : {};
      }
      function f0(e, n, i) {
        var s = e.constructor;
        switch (n) {
          case ho:
            return nl(e);
          case ao:
          case so:
            return new s(+e);
          case mr:
            return XV(e, i);
          case ls:
          case cs:
          case us:
          case ds:
          case fs:
          case hs:
          case ps:
          case ms:
          case ws:
            return _d(e, i);
          case Ft:
            return new s();
          case lo:
          case uo:
            return new s(e);
          case co:
            return LV(e);
          case Wt:
            return new s();
          case Ri:
            return $V(e);
        }
      }
      function h0(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var s = i - 1;
        return n[s] = (i > 1 ? "& " : "") + n[s], n = n.join(i > 2 ? ", " : " "), e.replace(m1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function p0(e) {
        return j(e) || Xn(e) || !!(cd && e && e[cd]);
      }
      function an(e, n) {
        var i = typeof e;
        return n = n == null ? Xe : n, !!n && (i == "number" || i != "symbol" && M1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function $e(e, n, i) {
        if (!ve(i))
          return !1;
        var s = typeof n;
        return (s == "number" ? tt(i) && an(n, i.length) : s == "string" && n in i) ? Bt(i[n], e) : !1;
      }
      function ul(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || dt(e) ? !0 : d1.test(e) || !u1.test(e) || n != null && e in de(n);
      }
      function m0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function dl(e) {
        var n = ea(e), i = f[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (e === i)
          return !0;
        var s = sl(i);
        return !!s && e === s[0];
      }
      function w0(e) {
        return !!id && id in e;
      }
      var v0 = Ei ? sn : bl;
      function Mo(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || Ur;
        return e === i;
      }
      function af(e) {
        return e === e && !ve(e);
      }
      function sf(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in de(i));
        };
      }
      function V0(e) {
        var n = aa(e, function(s) {
          return i.size === V && i.clear(), s;
        }), i = n.cache;
        return n;
      }
      function T0(e, n) {
        var i = e[1], s = n[1], u = i | s, p = u < (D | E | A), m = s == A && i == x || s == A && i == O && e[7].length <= n[8] || s == (A | O) && n[7].length <= n[8] && i == x;
        if (!(p || m))
          return e;
        s & D && (e[2] = n[2], u |= i & D ? 0 : B);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Qd(g, v, n[4]) : v, e[4] = g ? Nn(e[3], U) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? zd(g, v, n[6]) : v, e[6] = g ? Nn(e[5], U) : n[6]), v = n[7], v && (e[7] = v), s & A && (e[8] = e[8] == null ? n[8] : ze(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = u, e;
      }
      function g0(e) {
        var n = [];
        if (e != null)
          for (var i in de(e))
            n.push(i);
        return n;
      }
      function U0(e) {
        return Ai.call(e);
      }
      function lf(e, n, i) {
        return n = Ee(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, u = -1, p = Ee(s.length - n, 0), m = N(p); ++u < p; )
            m[u] = s[n + u];
          u = -1;
          for (var v = N(n + 1); ++u < n; )
            v[u] = s[u];
          return v[n] = i(m), lt(e, this, v);
        };
      }
      function cf(e, n) {
        return n.length < 2 ? e : Pn(e, kt(n, 0, -1));
      }
      function R0(e, n) {
        for (var i = e.length, s = ze(n.length, i), u = et(e); s--; ) {
          var p = n[s];
          e[s] = an(p, i) ? u[p] : r;
        }
        return e;
      }
      function fl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var uf = ff(Ad), Zo = Bv || function(e, n) {
        return Ie.setTimeout(e, n);
      }, hl = ff(YV);
      function df(e, n, i) {
        var s = n + "";
        return hl(e, h0(s, N0(u0(s), i)));
      }
      function ff(e) {
        var n = 0, i = 0;
        return function() {
          var s = Ov(), u = Re - (s - i);
          if (i = s, u > 0) {
            if (++n >= Te)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function na(e, n) {
        var i = -1, s = e.length, u = s - 1;
        for (n = n === r ? s : n; ++i < n; ) {
          var p = Xs(i, u), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var hf = V0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(f1, function(i, s, u, p) {
          n.push(u ? p.replace(g1, "$1") : s || i);
        }), n;
      });
      function jt(e) {
        if (typeof e == "string" || dt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Be ? "-0" : n;
      }
      function jn(e) {
        if (e != null) {
          try {
            return Si.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function N0(e, n) {
        return Ut(Lw, function(i) {
          var s = "_." + i[0];
          n & i[1] && !Mi(e, s) && e.push(s);
        }), e.sort();
      }
      function pf(e) {
        if (e instanceof te)
          return e.clone();
        var n = new Nt(e.__wrapped__, e.__chain__);
        return n.__actions__ = et(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function y0(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = Ee(X(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var u = 0, p = 0, m = N(Ii(s / n)); u < s; )
          m[p++] = kt(e, u, u += n);
        return m;
      }
      function k0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = 0, u = []; ++n < i; ) {
          var p = e[n];
          p && (u[s++] = p);
        }
        return u;
      }
      function M0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return Rn(j(i) ? et(i) : [i], De(n, 1));
      }
      var Z0 = q(function(e, n) {
        return Ne(e) ? Uo(e, De(n, 1, Ne, !0)) : [];
      }), b0 = q(function(e, n) {
        var i = Mt(n);
        return Ne(i) && (i = r), Ne(e) ? Uo(e, De(n, 1, Ne, !0), z(i, 2)) : [];
      }), J0 = q(function(e, n) {
        var i = Mt(n);
        return Ne(i) && (i = r), Ne(e) ? Uo(e, De(n, 1, Ne, !0), r, i) : [];
      });
      function E0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), kt(e, n < 0 ? 0 : n, s)) : [];
      }
      function S0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, kt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function A0(e, n) {
        return e && e.length ? ji(e, z(n, 3), !0, !0) : [];
      }
      function F0(e, n) {
        return e && e.length ? ji(e, z(n, 3), !0) : [];
      }
      function W0(e, n, i, s) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && $e(e, n, i) && (i = 0, s = u), MV(e, n, i, s)) : [];
      }
      function mf(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Ee(s + u, 0)), Zi(e, z(n, 3), u);
      }
      function wf(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s - 1;
        return i !== r && (u = X(i), u = i < 0 ? Ee(s + u, 0) : ze(u, s - 1)), Zi(e, z(n, 3), u, !0);
      }
      function vf(e) {
        var n = e == null ? 0 : e.length;
        return n ? De(e, 1) : [];
      }
      function C0(e) {
        var n = e == null ? 0 : e.length;
        return n ? De(e, Be) : [];
      }
      function x0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), De(e, n)) : [];
      }
      function B0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = {}; ++n < i; ) {
          var u = e[n];
          s[u[0]] = u[1];
        }
        return s;
      }
      function Vf(e) {
        return e && e.length ? e[0] : r;
      }
      function I0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Ee(s + u, 0)), vr(e, n, u);
      }
      function D0(e) {
        var n = e == null ? 0 : e.length;
        return n ? kt(e, 0, -1) : [];
      }
      var _0 = q(function(e) {
        var n = me(e, el);
        return n.length && n[0] === e[0] ? Gs(n) : [];
      }), O0 = q(function(e) {
        var n = Mt(e), i = me(e, el);
        return n === Mt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Gs(i, z(n, 2)) : [];
      }), Q0 = q(function(e) {
        var n = Mt(e), i = me(e, el);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Gs(i, r, n) : [];
      });
      function z0(e, n) {
        return e == null ? "" : Dv.call(e, n);
      }
      function Mt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function G0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s;
        return i !== r && (u = X(i), u = u < 0 ? Ee(s + u, 0) : ze(u, s - 1)), n === n ? Nv(e, n, u) : Zi(e, $u, u, !0);
      }
      function Y0(e, n) {
        return e && e.length ? bd(e, X(n)) : r;
      }
      var P0 = q(Tf);
      function Tf(e, n) {
        return e && e.length && n && n.length ? js(e, n) : e;
      }
      function H0(e, n, i) {
        return e && e.length && n && n.length ? js(e, n, z(i, 2)) : e;
      }
      function j0(e, n, i) {
        return e && e.length && n && n.length ? js(e, n, r, i) : e;
      }
      var X0 = on(function(e, n) {
        var i = e == null ? 0 : e.length, s = _s(e, n);
        return Sd(e, me(n, function(u) {
          return an(u, i) ? +u : u;
        }).sort(Od)), s;
      });
      function L0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var s = -1, u = [], p = e.length;
        for (n = z(n, 3); ++s < p; ) {
          var m = e[s];
          n(m, s, e) && (i.push(m), u.push(s));
        }
        return Sd(e, u), i;
      }
      function pl(e) {
        return e == null ? e : zv.call(e);
      }
      function $0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (i && typeof i != "number" && $e(e, n, i) ? (n = 0, i = s) : (n = n == null ? 0 : X(n), i = i === r ? s : X(i)), kt(e, n, i)) : [];
      }
      function q0(e, n) {
        return Hi(e, n);
      }
      function K0(e, n, i) {
        return $s(e, n, z(i, 2));
      }
      function eT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = Hi(e, n);
          if (s < i && Bt(e[s], n))
            return s;
        }
        return -1;
      }
      function tT(e, n) {
        return Hi(e, n, !0);
      }
      function nT(e, n, i) {
        return $s(e, n, z(i, 2), !0);
      }
      function rT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = Hi(e, n, !0) - 1;
          if (Bt(e[s], n))
            return s;
        }
        return -1;
      }
      function oT(e) {
        return e && e.length ? Fd(e) : [];
      }
      function iT(e, n) {
        return e && e.length ? Fd(e, z(n, 2)) : [];
      }
      function aT(e) {
        var n = e == null ? 0 : e.length;
        return n ? kt(e, 1, n) : [];
      }
      function sT(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), kt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function lT(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, kt(e, n < 0 ? 0 : n, s)) : [];
      }
      function cT(e, n) {
        return e && e.length ? ji(e, z(n, 3), !1, !0) : [];
      }
      function uT(e, n) {
        return e && e.length ? ji(e, z(n, 3)) : [];
      }
      var dT = q(function(e) {
        return Mn(De(e, 1, Ne, !0));
      }), fT = q(function(e) {
        var n = Mt(e);
        return Ne(n) && (n = r), Mn(De(e, 1, Ne, !0), z(n, 2));
      }), hT = q(function(e) {
        var n = Mt(e);
        return n = typeof n == "function" ? n : r, Mn(De(e, 1, Ne, !0), r, n);
      });
      function pT(e) {
        return e && e.length ? Mn(e) : [];
      }
      function mT(e, n) {
        return e && e.length ? Mn(e, z(n, 2)) : [];
      }
      function wT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? Mn(e, r, n) : [];
      }
      function ml(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Un(e, function(i) {
          if (Ne(i))
            return n = Ee(i.length, n), !0;
        }), As(n, function(i) {
          return me(e, Js(i));
        });
      }
      function gf(e, n) {
        if (!(e && e.length))
          return [];
        var i = ml(e);
        return n == null ? i : me(i, function(s) {
          return lt(n, r, s);
        });
      }
      var vT = q(function(e, n) {
        return Ne(e) ? Uo(e, n) : [];
      }), VT = q(function(e) {
        return Ks(Un(e, Ne));
      }), TT = q(function(e) {
        var n = Mt(e);
        return Ne(n) && (n = r), Ks(Un(e, Ne), z(n, 2));
      }), gT = q(function(e) {
        var n = Mt(e);
        return n = typeof n == "function" ? n : r, Ks(Un(e, Ne), r, n);
      }), UT = q(ml);
      function RT(e, n) {
        return Bd(e || [], n || [], go);
      }
      function NT(e, n) {
        return Bd(e || [], n || [], yo);
      }
      var yT = q(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, gf(e, i);
      });
      function Uf(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function kT(e, n) {
        return n(e), e;
      }
      function ra(e, n) {
        return n(e);
      }
      var MT = on(function(e) {
        var n = e.length, i = n ? e[0] : 0, s = this.__wrapped__, u = function(p) {
          return _s(p, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof te) || !an(i) ? this.thru(u) : (s = s.slice(i, +i + (n ? 1 : 0)), s.__actions__.push({
          func: ra,
          args: [u],
          thisArg: r
        }), new Nt(s, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function ZT() {
        return Uf(this);
      }
      function bT() {
        return new Nt(this.value(), this.__chain__);
      }
      function JT() {
        this.__values__ === r && (this.__values__ = Cf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function ET() {
        return this;
      }
      function ST(e) {
        for (var n, i = this; i instanceof Qi; ) {
          var s = pf(i);
          s.__index__ = 0, s.__values__ = r, n ? u.__wrapped__ = s : n = s;
          var u = s;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = e, n;
      }
      function AT() {
        var e = this.__wrapped__;
        if (e instanceof te) {
          var n = e;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: ra,
            args: [pl],
            thisArg: r
          }), new Nt(n, this.__chain__);
        }
        return this.thru(pl);
      }
      function FT() {
        return xd(this.__wrapped__, this.__actions__);
      }
      var WT = Xi(function(e, n, i) {
        le.call(e, i) ? ++e[i] : nn(e, i, 1);
      });
      function CT(e, n, i) {
        var s = j(e) ? Xu : kV;
        return i && $e(e, n, i) && (n = r), s(e, z(n, 3));
      }
      function xT(e, n) {
        var i = j(e) ? Un : Td;
        return i(e, z(n, 3));
      }
      var BT = Hd(mf), IT = Hd(wf);
      function DT(e, n) {
        return De(oa(e, n), 1);
      }
      function _T(e, n) {
        return De(oa(e, n), Be);
      }
      function OT(e, n, i) {
        return i = i === r ? 1 : X(i), De(oa(e, n), i);
      }
      function Rf(e, n) {
        var i = j(e) ? Ut : kn;
        return i(e, z(n, 3));
      }
      function Nf(e, n) {
        var i = j(e) ? av : Vd;
        return i(e, z(n, 3));
      }
      var QT = Xi(function(e, n, i) {
        le.call(e, i) ? e[i].push(n) : nn(e, i, [n]);
      });
      function zT(e, n, i, s) {
        e = tt(e) ? e : Jr(e), i = i && !s ? X(i) : 0;
        var u = e.length;
        return i < 0 && (i = Ee(u + i, 0)), ca(e) ? i <= u && e.indexOf(n, i) > -1 : !!u && vr(e, n, i) > -1;
      }
      var GT = q(function(e, n, i) {
        var s = -1, u = typeof n == "function", p = tt(e) ? N(e.length) : [];
        return kn(e, function(m) {
          p[++s] = u ? lt(n, m, i) : Ro(m, n, i);
        }), p;
      }), YT = Xi(function(e, n, i) {
        nn(e, i, n);
      });
      function oa(e, n) {
        var i = j(e) ? me : kd;
        return i(e, z(n, 3));
      }
      function PT(e, n, i, s) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = s ? r : i, j(i) || (i = i == null ? [] : [i]), Jd(e, n, i));
      }
      var HT = Xi(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function jT(e, n, i) {
        var s = j(e) ? Zs : Ku, u = arguments.length < 3;
        return s(e, z(n, 4), i, u, kn);
      }
      function XT(e, n, i) {
        var s = j(e) ? sv : Ku, u = arguments.length < 3;
        return s(e, z(n, 4), i, u, Vd);
      }
      function LT(e, n) {
        var i = j(e) ? Un : Td;
        return i(e, sa(z(n, 3)));
      }
      function $T(e) {
        var n = j(e) ? pd : zV;
        return n(e);
      }
      function qT(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n);
        var s = j(e) ? gV : GV;
        return s(e, n);
      }
      function KT(e) {
        var n = j(e) ? UV : PV;
        return n(e);
      }
      function eg(e) {
        if (e == null)
          return 0;
        if (tt(e))
          return ca(e) ? Tr(e) : e.length;
        var n = Ge(e);
        return n == Ft || n == Wt ? e.size : Ps(e).length;
      }
      function tg(e, n, i) {
        var s = j(e) ? bs : HV;
        return i && $e(e, n, i) && (n = r), s(e, z(n, 3));
      }
      var ng = q(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && $e(e, n[0], n[1]) ? n = [] : i > 2 && $e(n[0], n[1], n[2]) && (n = [n[0]]), Jd(e, De(n, 1), []);
      }), ia = xv || function() {
        return Ie.Date.now();
      };
      function rg(e, n) {
        if (typeof n != "function")
          throw new Rt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function yf(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, rn(e, A, r, r, r, r, n);
      }
      function kf(e, n) {
        var i;
        if (typeof n != "function")
          throw new Rt(d);
        return e = X(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var wl = q(function(e, n, i) {
        var s = D;
        if (i.length) {
          var u = Nn(i, Zr(wl));
          s |= b;
        }
        return rn(e, s, n, i, u);
      }), Mf = q(function(e, n, i) {
        var s = D | E;
        if (i.length) {
          var u = Nn(i, Zr(Mf));
          s |= b;
        }
        return rn(n, s, e, i, u);
      });
      function Zf(e, n, i) {
        n = i ? r : n;
        var s = rn(e, x, r, r, r, r, r, n);
        return s.placeholder = Zf.placeholder, s;
      }
      function bf(e, n, i) {
        n = i ? r : n;
        var s = rn(e, P, r, r, r, r, r, n);
        return s.placeholder = bf.placeholder, s;
      }
      function Jf(e, n, i) {
        var s, u, p, m, v, g, M = 0, Z = !1, J = !1, I = !0;
        if (typeof e != "function")
          throw new Rt(d);
        n = Zt(n) || 0, ve(i) && (Z = !!i.leading, J = "maxWait" in i, p = J ? Ee(Zt(i.maxWait) || 0, n) : p, I = "trailing" in i ? !!i.trailing : I);
        function Q(ye) {
          var It = s, cn = u;
          return s = u = r, M = ye, m = e.apply(cn, It), m;
        }
        function G(ye) {
          return M = ye, v = Zo(ee, n), Z ? Q(ye) : m;
        }
        function L(ye) {
          var It = ye - g, cn = ye - M, jf = n - It;
          return J ? ze(jf, p - cn) : jf;
        }
        function Y(ye) {
          var It = ye - g, cn = ye - M;
          return g === r || It >= n || It < 0 || J && cn >= p;
        }
        function ee() {
          var ye = ia();
          if (Y(ye))
            return ne(ye);
          v = Zo(ee, L(ye));
        }
        function ne(ye) {
          return v = r, I && s ? Q(ye) : (s = u = r, m);
        }
        function ft() {
          v !== r && Id(v), M = 0, s = g = u = v = r;
        }
        function qe() {
          return v === r ? m : ne(ia());
        }
        function ht() {
          var ye = ia(), It = Y(ye);
          if (s = arguments, u = this, g = ye, It) {
            if (v === r)
              return G(g);
            if (J)
              return Id(v), v = Zo(ee, n), Q(g);
          }
          return v === r && (v = Zo(ee, n)), m;
        }
        return ht.cancel = ft, ht.flush = qe, ht;
      }
      var og = q(function(e, n) {
        return vd(e, 1, n);
      }), ig = q(function(e, n, i) {
        return vd(e, Zt(n) || 0, i);
      });
      function ag(e) {
        return rn(e, he);
      }
      function aa(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Rt(d);
        var i = function() {
          var s = arguments, u = n ? n.apply(this, s) : s[0], p = i.cache;
          if (p.has(u))
            return p.get(u);
          var m = e.apply(this, s);
          return i.cache = p.set(u, m) || p, m;
        };
        return i.cache = new (aa.Cache || tn)(), i;
      }
      aa.Cache = tn;
      function sa(e) {
        if (typeof e != "function")
          throw new Rt(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function sg(e) {
        return kf(2, e);
      }
      var lg = jV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? me(n[0], ct(z())) : me(De(n, 1), ct(z()));
        var i = n.length;
        return q(function(s) {
          for (var u = -1, p = ze(s.length, i); ++u < p; )
            s[u] = n[u].call(this, s[u]);
          return lt(e, this, s);
        });
      }), vl = q(function(e, n) {
        var i = Nn(n, Zr(vl));
        return rn(e, b, r, n, i);
      }), Ef = q(function(e, n) {
        var i = Nn(n, Zr(Ef));
        return rn(e, W, r, n, i);
      }), cg = on(function(e, n) {
        return rn(e, O, r, r, r, n);
      });
      function ug(e, n) {
        if (typeof e != "function")
          throw new Rt(d);
        return n = n === r ? n : X(n), q(e, n);
      }
      function dg(e, n) {
        if (typeof e != "function")
          throw new Rt(d);
        return n = n == null ? 0 : Ee(X(n), 0), q(function(i) {
          var s = i[n], u = bn(i, 0, n);
          return s && Rn(u, s), lt(e, this, u);
        });
      }
      function fg(e, n, i) {
        var s = !0, u = !0;
        if (typeof e != "function")
          throw new Rt(d);
        return ve(i) && (s = "leading" in i ? !!i.leading : s, u = "trailing" in i ? !!i.trailing : u), Jf(e, n, {
          leading: s,
          maxWait: n,
          trailing: u
        });
      }
      function hg(e) {
        return yf(e, 1);
      }
      function pg(e, n) {
        return vl(tl(n), e);
      }
      function mg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function wg(e) {
        return yt(e, F);
      }
      function vg(e, n) {
        return n = typeof n == "function" ? n : r, yt(e, F, n);
      }
      function Vg(e) {
        return yt(e, R | F);
      }
      function Tg(e, n) {
        return n = typeof n == "function" ? n : r, yt(e, R | F, n);
      }
      function gg(e, n) {
        return n == null || wd(e, n, Ae(n));
      }
      function Bt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Ug = Ki(zs), Rg = Ki(function(e, n) {
        return e >= n;
      }), Xn = Rd(function() {
        return arguments;
      }()) ? Rd : function(e) {
        return ge(e) && le.call(e, "callee") && !ld.call(e, "callee");
      }, j = N.isArray, Ng = zu ? ct(zu) : SV;
      function tt(e) {
        return e != null && la(e.length) && !sn(e);
      }
      function Ne(e) {
        return ge(e) && tt(e);
      }
      function yg(e) {
        return e === !0 || e === !1 || ge(e) && Le(e) == ao;
      }
      var Jn = Iv || bl, kg = Gu ? ct(Gu) : AV;
      function Mg(e) {
        return ge(e) && e.nodeType === 1 && !bo(e);
      }
      function Zg(e) {
        if (e == null)
          return !0;
        if (tt(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || Jn(e) || br(e) || Xn(e)))
          return !e.length;
        var n = Ge(e);
        if (n == Ft || n == Wt)
          return !e.size;
        if (Mo(e))
          return !Ps(e).length;
        for (var i in e)
          if (le.call(e, i))
            return !1;
        return !0;
      }
      function bg(e, n) {
        return No(e, n);
      }
      function Jg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var s = i ? i(e, n) : r;
        return s === r ? No(e, n, r, i) : !!s;
      }
      function Vl(e) {
        if (!ge(e))
          return !1;
        var n = Le(e);
        return n == gi || n == qw || typeof e.message == "string" && typeof e.name == "string" && !bo(e);
      }
      function Eg(e) {
        return typeof e == "number" && ud(e);
      }
      function sn(e) {
        if (!ve(e))
          return !1;
        var n = Le(e);
        return n == Ui || n == vu || n == $w || n == e1;
      }
      function Sf(e) {
        return typeof e == "number" && e == X(e);
      }
      function la(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xe;
      }
      function ve(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ge(e) {
        return e != null && typeof e == "object";
      }
      var Af = Yu ? ct(Yu) : WV;
      function Sg(e, n) {
        return e === n || Ys(e, n, ll(n));
      }
      function Ag(e, n, i) {
        return i = typeof i == "function" ? i : r, Ys(e, n, ll(n), i);
      }
      function Fg(e) {
        return Ff(e) && e != +e;
      }
      function Wg(e) {
        if (v0(e))
          throw new H(c);
        return Nd(e);
      }
      function Cg(e) {
        return e === null;
      }
      function xg(e) {
        return e == null;
      }
      function Ff(e) {
        return typeof e == "number" || ge(e) && Le(e) == lo;
      }
      function bo(e) {
        if (!ge(e) || Le(e) != Kt)
          return !1;
        var n = Ci(e);
        if (n === null)
          return !0;
        var i = le.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Si.call(i) == Av;
      }
      var Tl = Pu ? ct(Pu) : CV;
      function Bg(e) {
        return Sf(e) && e >= -Xe && e <= Xe;
      }
      var Wf = Hu ? ct(Hu) : xV;
      function ca(e) {
        return typeof e == "string" || !j(e) && ge(e) && Le(e) == uo;
      }
      function dt(e) {
        return typeof e == "symbol" || ge(e) && Le(e) == Ri;
      }
      var br = ju ? ct(ju) : BV;
      function Ig(e) {
        return e === r;
      }
      function Dg(e) {
        return ge(e) && Ge(e) == fo;
      }
      function _g(e) {
        return ge(e) && Le(e) == n1;
      }
      var Og = Ki(Hs), Qg = Ki(function(e, n) {
        return e <= n;
      });
      function Cf(e) {
        if (!e)
          return [];
        if (tt(e))
          return ca(e) ? Ct(e) : et(e);
        if (mo && e[mo])
          return gv(e[mo]());
        var n = Ge(e), i = n == Ft ? Ws : n == Wt ? bi : Jr;
        return i(e);
      }
      function ln(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Zt(e), e === Be || e === -Be) {
          var n = e < 0 ? -1 : 1;
          return n * io;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = ln(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function xf(e) {
        return e ? Yn(X(e), 0, Yt) : 0;
      }
      function Zt(e) {
        if (typeof e == "number")
          return e;
        if (dt(e))
          return Vi;
        if (ve(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ve(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = ed(e);
        var i = N1.test(e);
        return i || k1.test(e) ? rv(e.slice(2), i ? 2 : 8) : R1.test(e) ? Vi : +e;
      }
      function Bf(e) {
        return Ht(e, nt(e));
      }
      function zg(e) {
        return e ? Yn(X(e), -Xe, Xe) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : ut(e);
      }
      var Gg = kr(function(e, n) {
        if (Mo(n) || tt(n)) {
          Ht(n, Ae(n), e);
          return;
        }
        for (var i in n)
          le.call(n, i) && go(e, i, n[i]);
      }), If = kr(function(e, n) {
        Ht(n, nt(n), e);
      }), ua = kr(function(e, n, i, s) {
        Ht(n, nt(n), e, s);
      }), Yg = kr(function(e, n, i, s) {
        Ht(n, Ae(n), e, s);
      }), Pg = on(_s);
      function Hg(e, n) {
        var i = yr(e);
        return n == null ? i : md(i, n);
      }
      var jg = q(function(e, n) {
        e = de(e);
        var i = -1, s = n.length, u = s > 2 ? n[2] : r;
        for (u && $e(n[0], n[1], u) && (s = 1); ++i < s; )
          for (var p = n[i], m = nt(p), v = -1, g = m.length; ++v < g; ) {
            var M = m[v], Z = e[M];
            (Z === r || Bt(Z, Ur[M]) && !le.call(e, M)) && (e[M] = p[M]);
          }
        return e;
      }), Xg = q(function(e) {
        return e.push(r, ef), lt(Df, r, e);
      });
      function Lg(e, n) {
        return Lu(e, z(n, 3), Pt);
      }
      function $g(e, n) {
        return Lu(e, z(n, 3), Qs);
      }
      function qg(e, n) {
        return e == null ? e : Os(e, z(n, 3), nt);
      }
      function Kg(e, n) {
        return e == null ? e : gd(e, z(n, 3), nt);
      }
      function eU(e, n) {
        return e && Pt(e, z(n, 3));
      }
      function tU(e, n) {
        return e && Qs(e, z(n, 3));
      }
      function nU(e) {
        return e == null ? [] : Yi(e, Ae(e));
      }
      function rU(e) {
        return e == null ? [] : Yi(e, nt(e));
      }
      function gl(e, n, i) {
        var s = e == null ? r : Pn(e, n);
        return s === r ? i : s;
      }
      function oU(e, n) {
        return e != null && rf(e, n, ZV);
      }
      function Ul(e, n) {
        return e != null && rf(e, n, bV);
      }
      var iU = Xd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Ai.call(n)), e[n] = i;
      }, Nl(rt)), aU = Xd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Ai.call(n)), le.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, z), sU = q(Ro);
      function Ae(e) {
        return tt(e) ? hd(e) : Ps(e);
      }
      function nt(e) {
        return tt(e) ? hd(e, !0) : IV(e);
      }
      function lU(e, n) {
        var i = {};
        return n = z(n, 3), Pt(e, function(s, u, p) {
          nn(i, n(s, u, p), s);
        }), i;
      }
      function cU(e, n) {
        var i = {};
        return n = z(n, 3), Pt(e, function(s, u, p) {
          nn(i, u, n(s, u, p));
        }), i;
      }
      var uU = kr(function(e, n, i) {
        Pi(e, n, i);
      }), Df = kr(function(e, n, i, s) {
        Pi(e, n, i, s);
      }), dU = on(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var s = !1;
        n = me(n, function(p) {
          return p = Zn(p, e), s || (s = p.length > 1), p;
        }), Ht(e, al(e), i), s && (i = yt(i, R | y | F, i0));
        for (var u = n.length; u--; )
          qs(i, n[u]);
        return i;
      });
      function fU(e, n) {
        return _f(e, sa(z(n)));
      }
      var hU = on(function(e, n) {
        return e == null ? {} : _V(e, n);
      });
      function _f(e, n) {
        if (e == null)
          return {};
        var i = me(al(e), function(s) {
          return [s];
        });
        return n = z(n), Ed(e, i, function(s, u) {
          return n(s, u[0]);
        });
      }
      function pU(e, n, i) {
        n = Zn(n, e);
        var s = -1, u = n.length;
        for (u || (u = 1, e = r); ++s < u; ) {
          var p = e == null ? r : e[jt(n[s])];
          p === r && (s = u, p = i), e = sn(p) ? p.call(e) : p;
        }
        return e;
      }
      function mU(e, n, i) {
        return e == null ? e : yo(e, n, i);
      }
      function wU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : yo(e, n, i, s);
      }
      var Of = qd(Ae), Qf = qd(nt);
      function vU(e, n, i) {
        var s = j(e), u = s || Jn(e) || br(e);
        if (n = z(n, 4), i == null) {
          var p = e && e.constructor;
          u ? i = s ? new p() : [] : ve(e) ? i = sn(p) ? yr(Ci(e)) : {} : i = {};
        }
        return (u ? Ut : Pt)(e, function(m, v, g) {
          return n(i, m, v, g);
        }), i;
      }
      function VU(e, n) {
        return e == null ? !0 : qs(e, n);
      }
      function TU(e, n, i) {
        return e == null ? e : Cd(e, n, tl(i));
      }
      function gU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : Cd(e, n, tl(i), s);
      }
      function Jr(e) {
        return e == null ? [] : Fs(e, Ae(e));
      }
      function UU(e) {
        return e == null ? [] : Fs(e, nt(e));
      }
      function RU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Zt(i), i = i === i ? i : 0), n !== r && (n = Zt(n), n = n === n ? n : 0), Yn(Zt(e), n, i);
      }
      function NU(e, n, i) {
        return n = ln(n), i === r ? (i = n, n = 0) : i = ln(i), e = Zt(e), JV(e, n, i);
      }
      function yU(e, n, i) {
        if (i && typeof i != "boolean" && $e(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = ln(e), n === r ? (n = e, e = 0) : n = ln(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (i || e % 1 || n % 1) {
          var u = dd();
          return ze(e + u * (n - e + nv("1e-" + ((u + "").length - 1))), n);
        }
        return Xs(e, n);
      }
      var kU = Mr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? zf(n) : n);
      });
      function zf(e) {
        return Rl(ie(e).toLowerCase());
      }
      function Gf(e) {
        return e = ie(e), e && e.replace(Z1, mv).replace(P1, "");
      }
      function MU(e, n, i) {
        e = ie(e), n = ut(n);
        var s = e.length;
        i = i === r ? s : Yn(X(i), 0, s);
        var u = i;
        return i -= n.length, i >= 0 && e.slice(i, u) == n;
      }
      function ZU(e) {
        return e = ie(e), e && s1.test(e) ? e.replace(gu, wv) : e;
      }
      function bU(e) {
        return e = ie(e), e && h1.test(e) ? e.replace(vs, "\\$&") : e;
      }
      var JU = Mr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), EU = Mr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), SU = Pd("toLowerCase");
      function AU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? Tr(e) : 0;
        if (!n || s >= n)
          return e;
        var u = (n - s) / 2;
        return qi(Di(u), i) + e + qi(Ii(u), i);
      }
      function FU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? Tr(e) : 0;
        return n && s < n ? e + qi(n - s, i) : e;
      }
      function WU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? Tr(e) : 0;
        return n && s < n ? qi(n - s, i) + e : e;
      }
      function CU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), Qv(ie(e).replace(Vs, ""), n || 0);
      }
      function xU(e, n, i) {
        return (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n), Ls(ie(e), n);
      }
      function BU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var IU = Mr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function DU(e, n, i) {
        return i && typeof i != "number" && $e(e, n, i) && (n = i = r), i = i === r ? Yt : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !Tl(n)) && (n = ut(n), !n && Vr(e)) ? bn(Ct(e), 0, i) : e.split(n, i)) : [];
      }
      var _U = Mr(function(e, n, i) {
        return e + (i ? " " : "") + Rl(n);
      });
      function OU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : Yn(X(i), 0, e.length), n = ut(n), e.slice(i, i + n.length) == n;
      }
      function QU(e, n, i) {
        var s = f.templateSettings;
        i && $e(e, n, i) && (n = r), e = ie(e), n = ua({}, n, s, Kd);
        var u = ua({}, n.imports, s.imports, Kd), p = Ae(u), m = Fs(u, p), v, g, M = 0, Z = n.interpolate || Ni, J = "__p += '", I = Cs(
          (n.escape || Ni).source + "|" + Z.source + "|" + (Z === Uu ? U1 : Ni).source + "|" + (n.evaluate || Ni).source + "|$",
          "g"
        ), Q = "//# sourceURL=" + (le.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$1 + "]") + `
`;
        e.replace(I, function(Y, ee, ne, ft, qe, ht) {
          return ne || (ne = ft), J += e.slice(M, ht).replace(b1, vv), ee && (v = !0, J += `' +
__e(` + ee + `) +
'`), qe && (g = !0, J += `';
` + qe + `;
__p += '`), ne && (J += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), M = ht + Y.length, Y;
        }), J += `';
`;
        var G = le.call(n, "variable") && n.variable;
        if (!G)
          J = `with (obj) {
` + J + `
}
`;
        else if (T1.test(G))
          throw new H(h);
        J = (g ? J.replace(r1, "") : J).replace(o1, "$1").replace(i1, "$1;"), J = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var L = Pf(function() {
          return re(p, Q + "return " + J).apply(r, m);
        });
        if (L.source = J, Vl(L))
          throw L;
        return L;
      }
      function zU(e) {
        return ie(e).toLowerCase();
      }
      function GU(e) {
        return ie(e).toUpperCase();
      }
      function YU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return ed(e);
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = Ct(n), p = td(s, u), m = nd(s, u) + 1;
        return bn(s, p, m).join("");
      }
      function PU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, od(e) + 1);
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = nd(s, Ct(n)) + 1;
        return bn(s, 0, u).join("");
      }
      function HU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(Vs, "");
        if (!e || !(n = ut(n)))
          return e;
        var s = Ct(e), u = td(s, Ct(n));
        return bn(s, u).join("");
      }
      function jU(e, n) {
        var i = se, s = Ve;
        if (ve(n)) {
          var u = "separator" in n ? n.separator : u;
          i = "length" in n ? X(n.length) : i, s = "omission" in n ? ut(n.omission) : s;
        }
        e = ie(e);
        var p = e.length;
        if (Vr(e)) {
          var m = Ct(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var v = i - Tr(s);
        if (v < 1)
          return s;
        var g = m ? bn(m, 0, v).join("") : e.slice(0, v);
        if (u === r)
          return g + s;
        if (m && (v += g.length - v), Tl(u)) {
          if (e.slice(v).search(u)) {
            var M, Z = g;
            for (u.global || (u = Cs(u.source, ie(Ru.exec(u)) + "g")), u.lastIndex = 0; M = u.exec(Z); )
              var J = M.index;
            g = g.slice(0, J === r ? v : J);
          }
        } else if (e.indexOf(ut(u), v) != v) {
          var I = g.lastIndexOf(u);
          I > -1 && (g = g.slice(0, I));
        }
        return g + s;
      }
      function XU(e) {
        return e = ie(e), e && a1.test(e) ? e.replace(Tu, yv) : e;
      }
      var LU = Mr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), Rl = Pd("toUpperCase");
      function Yf(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? Tv(e) ? Zv(e) : uv(e) : e.match(n) || [];
      }
      var Pf = q(function(e, n) {
        try {
          return lt(e, r, n);
        } catch (i) {
          return Vl(i) ? i : new H(i);
        }
      }), $U = on(function(e, n) {
        return Ut(n, function(i) {
          i = jt(i), nn(e, i, wl(e[i], e));
        }), e;
      });
      function qU(e) {
        var n = e == null ? 0 : e.length, i = z();
        return e = n ? me(e, function(s) {
          if (typeof s[1] != "function")
            throw new Rt(d);
          return [i(s[0]), s[1]];
        }) : [], q(function(s) {
          for (var u = -1; ++u < n; ) {
            var p = e[u];
            if (lt(p[0], this, s))
              return lt(p[1], this, s);
          }
        });
      }
      function KU(e) {
        return yV(yt(e, R));
      }
      function Nl(e) {
        return function() {
          return e;
        };
      }
      function eR(e, n) {
        return e == null || e !== e ? n : e;
      }
      var tR = jd(), nR = jd(!0);
      function rt(e) {
        return e;
      }
      function yl(e) {
        return yd(typeof e == "function" ? e : yt(e, R));
      }
      function rR(e) {
        return Md(yt(e, R));
      }
      function oR(e, n) {
        return Zd(e, yt(n, R));
      }
      var iR = q(function(e, n) {
        return function(i) {
          return Ro(i, e, n);
        };
      }), aR = q(function(e, n) {
        return function(i) {
          return Ro(e, i, n);
        };
      });
      function kl(e, n, i) {
        var s = Ae(n), u = Yi(n, s);
        i == null && !(ve(n) && (u.length || !s.length)) && (i = n, n = e, e = this, u = Yi(n, Ae(n)));
        var p = !(ve(i) && "chain" in i) || !!i.chain, m = sn(e);
        return Ut(u, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var M = this.__chain__;
            if (p || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = et(this.__actions__);
              return J.push({ func: g, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return g.apply(e, Rn([this.value()], arguments));
          });
        }), e;
      }
      function sR() {
        return Ie._ === this && (Ie._ = Fv), this;
      }
      function Ml() {
      }
      function lR(e) {
        return e = X(e), q(function(n) {
          return bd(n, e);
        });
      }
      var cR = rl(me), uR = rl(Xu), dR = rl(bs);
      function Hf(e) {
        return ul(e) ? Js(jt(e)) : OV(e);
      }
      function fR(e) {
        return function(n) {
          return e == null ? r : Pn(e, n);
        };
      }
      var hR = Ld(), pR = Ld(!0);
      function Zl() {
        return [];
      }
      function bl() {
        return !1;
      }
      function mR() {
        return {};
      }
      function wR() {
        return "";
      }
      function vR() {
        return !0;
      }
      function VR(e, n) {
        if (e = X(e), e < 1 || e > Xe)
          return [];
        var i = Yt, s = ze(e, Yt);
        n = z(n), e -= Yt;
        for (var u = As(s, n); ++i < e; )
          n(i);
        return u;
      }
      function TR(e) {
        return j(e) ? me(e, jt) : dt(e) ? [e] : et(hf(ie(e)));
      }
      function gR(e) {
        var n = ++Sv;
        return ie(e) + n;
      }
      var UR = $i(function(e, n) {
        return e + n;
      }, 0), RR = ol("ceil"), NR = $i(function(e, n) {
        return e / n;
      }, 1), yR = ol("floor");
      function kR(e) {
        return e && e.length ? Gi(e, rt, zs) : r;
      }
      function MR(e, n) {
        return e && e.length ? Gi(e, z(n, 2), zs) : r;
      }
      function ZR(e) {
        return qu(e, rt);
      }
      function bR(e, n) {
        return qu(e, z(n, 2));
      }
      function JR(e) {
        return e && e.length ? Gi(e, rt, Hs) : r;
      }
      function ER(e, n) {
        return e && e.length ? Gi(e, z(n, 2), Hs) : r;
      }
      var SR = $i(function(e, n) {
        return e * n;
      }, 1), AR = ol("round"), FR = $i(function(e, n) {
        return e - n;
      }, 0);
      function WR(e) {
        return e && e.length ? Ss(e, rt) : 0;
      }
      function CR(e, n) {
        return e && e.length ? Ss(e, z(n, 2)) : 0;
      }
      return f.after = rg, f.ary = yf, f.assign = Gg, f.assignIn = If, f.assignInWith = ua, f.assignWith = Yg, f.at = Pg, f.before = kf, f.bind = wl, f.bindAll = $U, f.bindKey = Mf, f.castArray = mg, f.chain = Uf, f.chunk = y0, f.compact = k0, f.concat = M0, f.cond = qU, f.conforms = KU, f.constant = Nl, f.countBy = WT, f.create = Hg, f.curry = Zf, f.curryRight = bf, f.debounce = Jf, f.defaults = jg, f.defaultsDeep = Xg, f.defer = og, f.delay = ig, f.difference = Z0, f.differenceBy = b0, f.differenceWith = J0, f.drop = E0, f.dropRight = S0, f.dropRightWhile = A0, f.dropWhile = F0, f.fill = W0, f.filter = xT, f.flatMap = DT, f.flatMapDeep = _T, f.flatMapDepth = OT, f.flatten = vf, f.flattenDeep = C0, f.flattenDepth = x0, f.flip = ag, f.flow = tR, f.flowRight = nR, f.fromPairs = B0, f.functions = nU, f.functionsIn = rU, f.groupBy = QT, f.initial = D0, f.intersection = _0, f.intersectionBy = O0, f.intersectionWith = Q0, f.invert = iU, f.invertBy = aU, f.invokeMap = GT, f.iteratee = yl, f.keyBy = YT, f.keys = Ae, f.keysIn = nt, f.map = oa, f.mapKeys = lU, f.mapValues = cU, f.matches = rR, f.matchesProperty = oR, f.memoize = aa, f.merge = uU, f.mergeWith = Df, f.method = iR, f.methodOf = aR, f.mixin = kl, f.negate = sa, f.nthArg = lR, f.omit = dU, f.omitBy = fU, f.once = sg, f.orderBy = PT, f.over = cR, f.overArgs = lg, f.overEvery = uR, f.overSome = dR, f.partial = vl, f.partialRight = Ef, f.partition = HT, f.pick = hU, f.pickBy = _f, f.property = Hf, f.propertyOf = fR, f.pull = P0, f.pullAll = Tf, f.pullAllBy = H0, f.pullAllWith = j0, f.pullAt = X0, f.range = hR, f.rangeRight = pR, f.rearg = cg, f.reject = LT, f.remove = L0, f.rest = ug, f.reverse = pl, f.sampleSize = qT, f.set = mU, f.setWith = wU, f.shuffle = KT, f.slice = $0, f.sortBy = ng, f.sortedUniq = oT, f.sortedUniqBy = iT, f.split = DU, f.spread = dg, f.tail = aT, f.take = sT, f.takeRight = lT, f.takeRightWhile = cT, f.takeWhile = uT, f.tap = kT, f.throttle = fg, f.thru = ra, f.toArray = Cf, f.toPairs = Of, f.toPairsIn = Qf, f.toPath = TR, f.toPlainObject = Bf, f.transform = vU, f.unary = hg, f.union = dT, f.unionBy = fT, f.unionWith = hT, f.uniq = pT, f.uniqBy = mT, f.uniqWith = wT, f.unset = VU, f.unzip = ml, f.unzipWith = gf, f.update = TU, f.updateWith = gU, f.values = Jr, f.valuesIn = UU, f.without = vT, f.words = Yf, f.wrap = pg, f.xor = VT, f.xorBy = TT, f.xorWith = gT, f.zip = UT, f.zipObject = RT, f.zipObjectDeep = NT, f.zipWith = yT, f.entries = Of, f.entriesIn = Qf, f.extend = If, f.extendWith = ua, kl(f, f), f.add = UR, f.attempt = Pf, f.camelCase = kU, f.capitalize = zf, f.ceil = RR, f.clamp = RU, f.clone = wg, f.cloneDeep = Vg, f.cloneDeepWith = Tg, f.cloneWith = vg, f.conformsTo = gg, f.deburr = Gf, f.defaultTo = eR, f.divide = NR, f.endsWith = MU, f.eq = Bt, f.escape = ZU, f.escapeRegExp = bU, f.every = CT, f.find = BT, f.findIndex = mf, f.findKey = Lg, f.findLast = IT, f.findLastIndex = wf, f.findLastKey = $g, f.floor = yR, f.forEach = Rf, f.forEachRight = Nf, f.forIn = qg, f.forInRight = Kg, f.forOwn = eU, f.forOwnRight = tU, f.get = gl, f.gt = Ug, f.gte = Rg, f.has = oU, f.hasIn = Ul, f.head = Vf, f.identity = rt, f.includes = zT, f.indexOf = I0, f.inRange = NU, f.invoke = sU, f.isArguments = Xn, f.isArray = j, f.isArrayBuffer = Ng, f.isArrayLike = tt, f.isArrayLikeObject = Ne, f.isBoolean = yg, f.isBuffer = Jn, f.isDate = kg, f.isElement = Mg, f.isEmpty = Zg, f.isEqual = bg, f.isEqualWith = Jg, f.isError = Vl, f.isFinite = Eg, f.isFunction = sn, f.isInteger = Sf, f.isLength = la, f.isMap = Af, f.isMatch = Sg, f.isMatchWith = Ag, f.isNaN = Fg, f.isNative = Wg, f.isNil = xg, f.isNull = Cg, f.isNumber = Ff, f.isObject = ve, f.isObjectLike = ge, f.isPlainObject = bo, f.isRegExp = Tl, f.isSafeInteger = Bg, f.isSet = Wf, f.isString = ca, f.isSymbol = dt, f.isTypedArray = br, f.isUndefined = Ig, f.isWeakMap = Dg, f.isWeakSet = _g, f.join = z0, f.kebabCase = JU, f.last = Mt, f.lastIndexOf = G0, f.lowerCase = EU, f.lowerFirst = SU, f.lt = Og, f.lte = Qg, f.max = kR, f.maxBy = MR, f.mean = ZR, f.meanBy = bR, f.min = JR, f.minBy = ER, f.stubArray = Zl, f.stubFalse = bl, f.stubObject = mR, f.stubString = wR, f.stubTrue = vR, f.multiply = SR, f.nth = Y0, f.noConflict = sR, f.noop = Ml, f.now = ia, f.pad = AU, f.padEnd = FU, f.padStart = WU, f.parseInt = CU, f.random = yU, f.reduce = jT, f.reduceRight = XT, f.repeat = xU, f.replace = BU, f.result = pU, f.round = AR, f.runInContext = T, f.sample = $T, f.size = eg, f.snakeCase = IU, f.some = tg, f.sortedIndex = q0, f.sortedIndexBy = K0, f.sortedIndexOf = eT, f.sortedLastIndex = tT, f.sortedLastIndexBy = nT, f.sortedLastIndexOf = rT, f.startCase = _U, f.startsWith = OU, f.subtract = FR, f.sum = WR, f.sumBy = CR, f.template = QU, f.times = VR, f.toFinite = ln, f.toInteger = X, f.toLength = xf, f.toLower = zU, f.toNumber = Zt, f.toSafeInteger = zg, f.toString = ie, f.toUpper = GU, f.trim = YU, f.trimEnd = PU, f.trimStart = HU, f.truncate = jU, f.unescape = XU, f.uniqueId = gR, f.upperCase = LU, f.upperFirst = Rl, f.each = Rf, f.eachRight = Nf, f.first = Vf, kl(f, function() {
        var e = {};
        return Pt(f, function(n, i) {
          le.call(f.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = a, Ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), Ut(["drop", "take"], function(e, n) {
        te.prototype[e] = function(i) {
          i = i === r ? 1 : Ee(X(i), 0);
          var s = this.__filtered__ && !n ? new te(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = ze(i, s.__takeCount__) : s.__views__.push({
            size: ze(i, Yt),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, te.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), Ut(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, s = i == Ze || i == xe;
        te.prototype[e] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: z(u, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || s, p;
        };
      }), Ut(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), Ut(["initial", "tail"], function(e, n) {
        var i = "drop" + (n ? "" : "Right");
        te.prototype[e] = function() {
          return this.__filtered__ ? new te(this) : this[i](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(rt);
      }, te.prototype.find = function(e) {
        return this.filter(e).head();
      }, te.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, te.prototype.invokeMap = q(function(e, n) {
        return typeof e == "function" ? new te(this) : this.map(function(i) {
          return Ro(i, e, n);
        });
      }), te.prototype.reject = function(e) {
        return this.filter(sa(z(e)));
      }, te.prototype.slice = function(e, n) {
        e = X(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new te(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, te.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, te.prototype.toArray = function() {
        return this.take(Yt);
      }, Pt(te.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), u = f[s ? "take" + (n == "last" ? "Right" : "") : n], p = s || /^find/.test(n);
        !u || (f.prototype[n] = function() {
          var m = this.__wrapped__, v = s ? [1] : arguments, g = m instanceof te, M = v[0], Z = g || j(m), J = function(ee) {
            var ne = u.apply(f, Rn([ee], v));
            return s && I ? ne[0] : ne;
          };
          Z && i && typeof M == "function" && M.length != 1 && (g = Z = !1);
          var I = this.__chain__, Q = !!this.__actions__.length, G = p && !I, L = g && !Q;
          if (!p && Z) {
            m = L ? m : new te(this);
            var Y = e.apply(m, v);
            return Y.__actions__.push({ func: ra, args: [J], thisArg: r }), new Nt(Y, I);
          }
          return G && L ? e.apply(this, v) : (Y = this.thru(J), G ? s ? Y.value()[0] : Y.value() : Y);
        });
      }), Ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Ji[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var u = arguments;
          if (s && !this.__chain__) {
            var p = this.value();
            return n.apply(j(p) ? p : [], u);
          }
          return this[i](function(m) {
            return n.apply(j(m) ? m : [], u);
          });
        };
      }), Pt(te.prototype, function(e, n) {
        var i = f[n];
        if (i) {
          var s = i.name + "";
          le.call(Nr, s) || (Nr[s] = []), Nr[s].push({ name: n, func: i });
        }
      }), Nr[Li(r, E).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = Xv, te.prototype.reverse = Lv, te.prototype.value = $v, f.prototype.at = MT, f.prototype.chain = ZT, f.prototype.commit = bT, f.prototype.next = JT, f.prototype.plant = ST, f.prototype.reverse = AT, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = FT, f.prototype.first = f.prototype.head, mo && (f.prototype[mo] = ET), f;
    }, gr = bv();
    On ? ((On.exports = gr)._ = gr, ys._ = gr) : Ie._ = gr;
  }).call(Jo);
})(we, we.exports);
const ty = "/alarms?_s=", es = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, ny = async (t, o) => {
  try {
    return (await gn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      es
    )).status === 204;
  } catch {
    return !1;
  }
}, ry = async (t, o) => {
  try {
    return (await gn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      es
    )).status === 204;
  } catch {
    return !1;
  }
}, oy = async (t, o) => {
  try {
    const r = t.join(",alarm.id==");
    return (await Tn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      es
    )).status == 204;
  } catch {
    return !1;
  }
}, iy = async () => {
  try {
    const t = `${ty}isSituation==true&limit=0`, o = await Tn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, ay = async (t) => {
  try {
    const o = t.join(",id=="), r = await Tn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Om = async (t) => {
  try {
    const o = await Tn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, sy = async (t) => {
  try {
    const o = await Tn(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, ly = async () => {
  try {
    const t = await Tn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => we.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, cy = async (t, o, r) => {
  try {
    return (await Tn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      es
    )).status == 204;
  } catch {
    return !1;
  }
}, uy = async (t, o) => {
  try {
    return (await Tn.delete(`/alarms/${t}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, dy = async () => {
  try {
    const t = await Tn.get("alarms?_s=isInSituation==false");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, vt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
}, fy = "/alec", hy = "/alec/engine/configuration", Qm = "/alec/agreement/configuration", py = "/alec/situation/statusList", my = "/alec/situation", zm = async (t) => {
  try {
    return (await gn.post(`${Qm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, wy = async () => {
  try {
    const t = await gn.get(`${Qm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, vy = async (t, o) => {
  try {
    return (await gn.post(hy, {
      distanceMeasureName: o ? vt.HELLINGER_OPTION : vt.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Gm = async (t, o) => {
  try {
    return (await gn.post(`${fy}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Vy = async () => {
  try {
    const t = await gn.get(py);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, Ty = async (t) => {
  try {
    return (await gn.post(my, t)).status === 200;
  } catch {
    return !1;
  }
}, gy = window.Pinia.defineStore, dr = gy("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    situationDetail: null,
    filteredSituations: [],
    nodes: [],
    filters: null,
    unassignedAlarms: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await ly();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await iy(), o = await Vy();
      if (t) {
        const r = t.alarm.map((c) => {
          const d = o.filter(
            (h) => parseInt(h.id) === c.id
          );
          return c.status = d && d[0] ? d[0].status : "CREATED", c;
        });
        this.filteredSituations = r.map((c) => c.id);
        const a = we.exports.groupBy(r, "status"), l = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = l;
      }
    },
    async getSituation(t) {
      if (t) {
        const o = await Om(t);
        if (o) {
          const r = o.relatedAlarms.map((c) => c.id), l = await ay(r);
          o.alarms = we.exports.sortBy(l, ["id"]), this.situationDetail = o;
        }
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const l = await sy(a);
          l && (r[a] = we.exports.reverse(l));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const t = await dy();
      t && (this.unassignedAlarms = t);
    }
  }
}), Uy = window.Vue.openBlock, Ry = window.Vue.createElementBlock, Ny = window.Vue.createElementVNode;
var yy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const ky = {}, My = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Zy = /* @__PURE__ */ Ny("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), by = [
  Zy
];
function Jy(t, o) {
  return Uy(), Ry("svg", My, by);
}
var ii = /* @__PURE__ */ yy(ky, [["render", Jy]]);
var Ey = Object.defineProperty, Vh = Object.getOwnPropertySymbols, Sy = Object.prototype.hasOwnProperty, Ay = Object.prototype.propertyIsEnumerable, Th = (t, o, r) => o in t ? Ey(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, gh = (t, o) => {
  for (var r in o || (o = {}))
    Sy.call(o, r) && Th(t, r, o[r]);
  if (Vh)
    for (var r of Vh(o))
      Ay.call(o, r) && Th(t, r, o[r]);
  return t;
};
const Fy = window.Vue.defineComponent, Wy = window.Vue.toRaw, Gl = window.Vue.h;
var Cy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const xy = {
  icon: {
    type: Object,
    required: !1
  },
  flex: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    required: !1
  }
}, By = Fy({
  props: xy,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((l, c) => (l[c] = !0, l), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = Wy(this.icon);
    return this.$slots.default ? Gl("span", { class: "feather-icon-container" }, [
      Gl(this.$slots.default()[0], gh({
        class: o
      }, r))
    ]) : Gl(a, gh({
      class: o
    }, r));
  }
});
var $ = /* @__PURE__ */ Cy(By, [["__scopeId", "data-v-52cbf270"]]);
const Iy = window.Vue.openBlock, Dy = window.Vue.createElementBlock, _y = window.Vue.createElementVNode;
var Oy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Qy = {}, zy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Gy = /* @__PURE__ */ _y("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Yy = [
  Gy
];
function Py(t, o) {
  return Iy(), Dy("svg", zy, Yy);
}
var Ym = /* @__PURE__ */ Oy(Qy, [["render", Py]]);
function lr(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Qe(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function je(t) {
  Qe(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Hy(t, o) {
  Qe(2, arguments);
  var r = je(t).getTime(), a = lr(o);
  return new Date(r + a);
}
var jy = {};
function ai() {
  return jy;
}
function Mc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function Xy(t, o) {
  Qe(2, arguments);
  var r = je(t), a = je(o), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function Ly(t) {
  return Qe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function $y(t) {
  if (Qe(1, arguments), !Ly(t) && typeof t != "number")
    return !1;
  var o = je(t);
  return !isNaN(Number(o));
}
function qy(t, o) {
  Qe(2, arguments);
  var r = lr(o);
  return Hy(t, -r);
}
var Ky = 864e5;
function ek(t) {
  Qe(1, arguments);
  var o = je(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var a = o.getTime(), l = r - a;
  return Math.floor(l / Ky) + 1;
}
function _a(t) {
  Qe(1, arguments);
  var o = 1, r = je(t), a = r.getUTCDay(), l = (a < o ? 7 : 0) + a - o;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Pm(t) {
  Qe(1, arguments);
  var o = je(t), r = o.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = _a(a), c = new Date(0);
  c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = _a(c);
  return o.getTime() >= l.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function tk(t) {
  Qe(1, arguments);
  var o = Pm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = _a(r);
  return a;
}
var nk = 6048e5;
function rk(t) {
  Qe(1, arguments);
  var o = je(t), r = _a(o).getTime() - tk(o).getTime();
  return Math.round(r / nk) + 1;
}
function Oa(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = ai(), R = lr((r = (a = (l = (c = o == null ? void 0 : o.weekStartsOn) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && l !== void 0 ? l : U.weekStartsOn) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = je(t), F = y.getUTCDay(), S = (F < R ? 7 : 0) + F - R;
  return y.setUTCDate(y.getUTCDate() - S), y.setUTCHours(0, 0, 0, 0), y;
}
function Hm(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = je(t), R = U.getUTCFullYear(), y = ai(), F = lr((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : y.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = y.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(R + 1, 0, F), S.setUTCHours(0, 0, 0, 0);
  var C = Oa(S, o), D = new Date(0);
  D.setUTCFullYear(R, 0, F), D.setUTCHours(0, 0, 0, 0);
  var E = Oa(D, o);
  return U.getTime() >= C.getTime() ? R + 1 : U.getTime() >= E.getTime() ? R : R - 1;
}
function ok(t, o) {
  var r, a, l, c, d, h, w, V;
  Qe(1, arguments);
  var U = ai(), R = lr((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : U.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Hm(t, o), F = new Date(0);
  F.setUTCFullYear(y, 0, R), F.setUTCHours(0, 0, 0, 0);
  var S = Oa(F, o);
  return S;
}
var ik = 6048e5;
function ak(t, o) {
  Qe(1, arguments);
  var r = je(t), a = Oa(r, o).getTime() - ok(r, o).getTime();
  return Math.round(a / ik) + 1;
}
function ce(t, o) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < o; )
    a = "0" + a;
  return r + a;
}
var sk = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return ce(o === "yy" ? a % 100 : a, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : ce(r + 1, 2);
  },
  d: function(t, o) {
    return ce(t.getUTCDate(), o.length);
  },
  a: function(t, o) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, o) {
    return ce(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return ce(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return ce(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return ce(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return ce(l, o.length);
  }
};
const En = sk;
var Ar = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, lk = {
  G: function(t, o, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, o, r) {
    if (o === "yo") {
      var a = t.getUTCFullYear(), l = a > 0 ? a : 1 - a;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return En.y(t, o);
  },
  Y: function(t, o, r, a) {
    var l = Hm(t, a), c = l > 0 ? l : 1 - l;
    if (o === "YY") {
      var d = c % 100;
      return ce(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(c, {
      unit: "year"
    }) : ce(c, o.length);
  },
  R: function(t, o) {
    var r = Pm(t);
    return ce(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return ce(r, o.length);
  },
  Q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(a);
      case "QQ":
        return ce(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(a);
      case "qq":
        return ce(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return En.M(t, o);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "L":
        return String(a + 1);
      case "LL":
        return ce(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, o, r, a) {
    var l = ak(t, a);
    return o === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ce(l, o.length);
  },
  I: function(t, o, r) {
    var a = rk(t);
    return o === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ce(a, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : En.d(t, o);
  },
  D: function(t, o, r) {
    var a = ek(t);
    return o === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ce(a, o.length);
  },
  E: function(t, o, r) {
    var a = t.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(c);
      case "ee":
        return ce(c, 2);
      case "eo":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "eee":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(c);
      case "cc":
        return ce(c, o.length);
      case "co":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "ccc":
        return r.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, o, r) {
    var a = t.getUTCDay(), l = a === 0 ? 7 : a;
    switch (o) {
      case "i":
        return String(l);
      case "ii":
        return ce(l, o.length);
      case "io":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, o, r) {
    var a = t.getUTCHours(), l = a / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a === 12 ? l = Ar.noon : a === 0 ? l = Ar.midnight : l = a / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a >= 17 ? l = Ar.evening : a >= 12 ? l = Ar.afternoon : a >= 4 ? l = Ar.morning : l = Ar.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, o, r) {
    if (o === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return En.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : En.H(t, o);
  },
  K: function(t, o, r) {
    var a = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, o.length);
  },
  k: function(t, o, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), o === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : En.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : En.s(t, o);
  },
  S: function(t, o) {
    return En.S(t, o);
  },
  X: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (o) {
      case "X":
        return Rh(c);
      case "XXXX":
      case "XX":
        return or(c);
      case "XXXXX":
      case "XXX":
      default:
        return or(c, ":");
    }
  },
  x: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "x":
        return Rh(c);
      case "xxxx":
      case "xx":
        return or(c);
      case "xxxxx":
      case "xxx":
      default:
        return or(c, ":");
    }
  },
  O: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Uh(c, ":");
      case "OOOO":
      default:
        return "GMT" + or(c, ":");
    }
  },
  z: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Uh(c, ":");
      case "zzzz":
      default:
        return "GMT" + or(c, ":");
    }
  },
  t: function(t, o, r, a) {
    var l = a._originalDate || t, c = Math.floor(l.getTime() / 1e3);
    return ce(c, o.length);
  },
  T: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTime();
    return ce(c, o.length);
  }
};
function Uh(t, o) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), c = a % 60;
  if (c === 0)
    return r + String(l);
  var d = o || "";
  return r + String(l) + d + ce(c, 2);
}
function Rh(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + ce(Math.abs(t) / 60, 2);
  }
  return or(t, o);
}
function or(t, o) {
  var r = o || "", a = t > 0 ? "-" : "+", l = Math.abs(t), c = ce(Math.floor(l / 60), 2), d = ce(l % 60, 2);
  return a + c + r + d;
}
const ck = lk;
var Nh = function(t, o) {
  switch (t) {
    case "P":
      return o.date({
        width: "short"
      });
    case "PP":
      return o.date({
        width: "medium"
      });
    case "PPP":
      return o.date({
        width: "long"
      });
    case "PPPP":
    default:
      return o.date({
        width: "full"
      });
  }
}, jm = function(t, o) {
  switch (t) {
    case "p":
      return o.time({
        width: "short"
      });
    case "pp":
      return o.time({
        width: "medium"
      });
    case "ppp":
      return o.time({
        width: "long"
      });
    case "pppp":
    default:
      return o.time({
        width: "full"
      });
  }
}, uk = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return Nh(t, o);
  var c;
  switch (a) {
    case "P":
      c = o.dateTime({
        width: "short"
      });
      break;
    case "PP":
      c = o.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      c = o.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      c = o.dateTime({
        width: "full"
      });
      break;
  }
  return c.replace("{{date}}", Nh(a, o)).replace("{{time}}", jm(l, o));
}, dk = {
  p: jm,
  P: uk
};
const fk = dk;
var hk = ["D", "DD"], pk = ["YY", "YYYY"];
function mk(t) {
  return hk.indexOf(t) !== -1;
}
function wk(t) {
  return pk.indexOf(t) !== -1;
}
function yh(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var vk = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Vk = function(t, o, r) {
  var a, l = vk[t];
  return typeof l == "string" ? a = l : o === 1 ? a = l.one : a = l.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Tk = Vk;
function Yl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var gk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Uk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Rk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nk = {
  date: Yl({
    formats: gk,
    defaultWidth: "full"
  }),
  time: Yl({
    formats: Uk,
    defaultWidth: "full"
  }),
  dateTime: Yl({
    formats: Rk,
    defaultWidth: "full"
  })
};
const yk = Nk;
var kk = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mk = function(t, o, r, a) {
  return kk[t];
};
const Zk = Mk;
function Eo(t) {
  return function(o, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var c = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      l = t.formattingValues[d] || t.formattingValues[c];
    } else {
      var h = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[w] || t.values[h];
    }
    var V = t.argumentCallback ? t.argumentCallback(o) : o;
    return l[V];
  };
}
var bk = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Jk = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ek = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Sk = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Ak = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Fk = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Wk = function(t, o) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Ck = {
  ordinalNumber: Wk,
  era: Eo({
    values: bk,
    defaultWidth: "wide"
  }),
  quarter: Eo({
    values: Jk,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Eo({
    values: Ek,
    defaultWidth: "wide"
  }),
  day: Eo({
    values: Sk,
    defaultWidth: "wide"
  }),
  dayPeriod: Eo({
    values: Ak,
    defaultWidth: "wide",
    formattingValues: Fk,
    defaultFormattingWidth: "wide"
  })
};
const xk = Ck;
function So(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], c = o.match(l);
    if (!c)
      return null;
    var d = c[0], h = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(h) ? Ik(h, function(R) {
      return R.test(d);
    }) : Bk(h, function(R) {
      return R.test(d);
    }), V;
    V = t.valueCallback ? t.valueCallback(w) : w, V = r.valueCallback ? r.valueCallback(V) : V;
    var U = o.slice(d.length);
    return {
      value: V,
      rest: U
    };
  };
}
function Bk(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function Ik(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function Dk(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = o.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], c = o.match(t.parsePattern);
    if (!c)
      return null;
    var d = t.valueCallback ? t.valueCallback(c[0]) : c[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var h = o.slice(l.length);
    return {
      value: d,
      rest: h
    };
  };
}
var _k = /^(\d+)(th|st|nd|rd)?/i, Ok = /\d+/i, Qk = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, zk = {
  any: [/^b/i, /^(a|c)/i]
}, Gk = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yk = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Pk = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hk = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, jk = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Xk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lk = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $k = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, qk = {
  ordinalNumber: Dk({
    matchPattern: _k,
    parsePattern: Ok,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: So({
    matchPatterns: Qk,
    defaultMatchWidth: "wide",
    parsePatterns: zk,
    defaultParseWidth: "any"
  }),
  quarter: So({
    matchPatterns: Gk,
    defaultMatchWidth: "wide",
    parsePatterns: Yk,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: So({
    matchPatterns: Pk,
    defaultMatchWidth: "wide",
    parsePatterns: Hk,
    defaultParseWidth: "any"
  }),
  day: So({
    matchPatterns: jk,
    defaultMatchWidth: "wide",
    parsePatterns: Xk,
    defaultParseWidth: "any"
  }),
  dayPeriod: So({
    matchPatterns: Lk,
    defaultMatchWidth: "any",
    parsePatterns: $k,
    defaultParseWidth: "any"
  })
};
const Kk = qk;
var eM = {
  code: "en-US",
  formatDistance: Tk,
  formatLong: yk,
  formatRelative: Zk,
  localize: xk,
  match: Kk,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Xm = eM;
var tM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rM = /^'([^]*?)'?$/, oM = /''/g, iM = /[a-zA-Z]/;
function aM(t, o, r) {
  var a, l, c, d, h, w, V, U, R, y, F, S, C, D, E, B, x, P;
  Qe(2, arguments);
  var b = String(o), W = ai(), A = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : W.locale) !== null && a !== void 0 ? a : Xm, O = lr((c = (d = (h = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (V = r.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && h !== void 0 ? h : W.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = W.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(O >= 1 && O <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var he = lr((F = (S = (C = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (E = r.locale) === null || E === void 0 || (B = E.options) === null || B === void 0 ? void 0 : B.weekStartsOn) !== null && C !== void 0 ? C : W.weekStartsOn) !== null && S !== void 0 ? S : (x = W.locale) === null || x === void 0 || (P = x.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(he >= 0 && he <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!A.localize)
    throw new RangeError("locale must contain localize property");
  if (!A.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = je(t);
  if (!$y(se))
    throw new RangeError("Invalid time value");
  var Ve = Mc(se), Te = qy(se, Ve), Re = {
    firstWeekContainsDate: O,
    weekStartsOn: he,
    locale: A,
    _originalDate: se
  }, Ze = b.match(nM).map(function(ue) {
    var xe = ue[0];
    if (xe === "p" || xe === "P") {
      var Be = fk[xe];
      return Be(ue, A.formatLong);
    }
    return ue;
  }).join("").match(tM).map(function(ue) {
    if (ue === "''")
      return "'";
    var xe = ue[0];
    if (xe === "'")
      return sM(ue);
    var Be = ck[xe];
    if (Be)
      return !(r != null && r.useAdditionalWeekYearTokens) && wk(ue) && yh(ue, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && mk(ue) && yh(ue, o, String(t)), Be(Te, ue, A.localize, Re);
    if (xe.match(iM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + xe + "`");
    return ue;
  }).join("");
  return Ze;
}
function sM(t) {
  var o = t.match(rM);
  return o ? o[1].replace(oM, "'") : t;
}
function Lm(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function lM(t) {
  return Lm({}, t);
}
var kh = 1e3 * 60, Qa = 60 * 24, Mh = Qa * 30, Zh = Qa * 365;
function cM(t, o, r) {
  var a, l, c;
  Qe(2, arguments);
  var d = ai(), h = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : d.locale) !== null && a !== void 0 ? a : Xm;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Xy(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var V = Lm(lM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), U, R;
  w > 0 ? (U = je(o), R = je(t)) : (U = je(t), R = je(o));
  var y = String((c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (y === "floor")
    F = Math.floor;
  else if (y === "ceil")
    F = Math.ceil;
  else if (y === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = R.getTime() - U.getTime(), C = S / kh, D = Mc(R) - Mc(U), E = (S - D) / kh, B = r == null ? void 0 : r.unit, x;
  if (B ? x = String(B) : C < 1 ? x = "second" : C < 60 ? x = "minute" : C < Qa ? x = "hour" : E < Mh ? x = "day" : E < Zh ? x = "month" : x = "year", x === "second") {
    var P = F(S / 1e3);
    return h.formatDistance("xSeconds", P, V);
  } else if (x === "minute") {
    var b = F(C);
    return h.formatDistance("xMinutes", b, V);
  } else if (x === "hour") {
    var W = F(C / 60);
    return h.formatDistance("xHours", W, V);
  } else if (x === "day") {
    var A = F(E / Qa);
    return h.formatDistance("xDays", A, V);
  } else if (x === "month") {
    var O = F(E / Mh);
    return O === 12 && B !== "month" ? h.formatDistance("xYears", 1, V) : h.formatDistance("xMonths", O, V);
  } else if (x === "year") {
    var he = F(E / Zh);
    return h.formatDistance("xYears", he, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const $t = (t) => {
  let o = "";
  if (t)
    try {
      o = aM(new Date(t), vt.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
}, uM = (t, o) => {
  const r = t.length > o ? "..." : "";
  return t.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, dM = window.Vue.defineComponent, Xt = window.Vue.unref, bh = window.Vue.normalizeClass, pn = window.Vue.createElementVNode, Ao = window.Vue.toDisplayString, Jh = window.Vue.createVNode, Fr = window.Vue.openBlock, Wr = window.Vue.createElementBlock, Pl = window.Vue.createCommentVNode, $m = window.Vue.createTextVNode, fM = window.Vue.renderList, hM = window.Vue.Fragment, pM = window.Vue.pushScopeId, mM = window.Vue.popScopeId, qm = (t) => (pM("data-v-7c453c05"), t = t(), mM(), t), wM = { class: "content" }, vM = { class: "title-row" }, VM = { class: "title" }, TM = {
  key: 0,
  class: "accepted"
}, gM = {
  key: 1,
  class: "rejected"
}, UM = /* @__PURE__ */ qm(() => /* @__PURE__ */ pn("span", { class: "info-title" }, " First Event: ", -1)), RM = /* @__PURE__ */ qm(() => /* @__PURE__ */ pn("hr", null, null, -1)), NM = {
  key: 0,
  class: "count-info"
}, yM = /* @__PURE__ */ $m(" Alarms: "), kM = { class: "info-title" }, MM = /* @__PURE__ */ dM({
  __name: "SituationCard",
  props: {
    situationInfo: null
  },
  emits: ["situation-selected"],
  setup(t, { emit: o }) {
    const r = t, a = vt.ACCEPTED, l = vt.REJECTED, c = r.situationInfo.description.replace(/(<([^>]+)>)/gi, "").substring(0, 230) + "...", d = () => {
      var h;
      o("situation-selected", (h = r.situationInfo) == null ? void 0 : h.id);
    };
    return (h, w) => {
      var V, U, R;
      return Fr(), Wr("div", {
        onClick: d,
        class: bh(["card", {
          rejected: r.situationInfo.status == Xt(l)
        }])
      }, [
        pn("div", {
          class: bh(["severity-line", [`${(U = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        pn("div", wM, [
          pn("div", vM, [
            pn("div", VM, "Situation " + Ao((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Xt(a) ? (Fr(), Wr("div", TM, [
              Jh(Xt($), {
                icon: Xt(ii),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Pl("", !0),
            r.situationInfo.status == Xt(l) ? (Fr(), Wr("div", gM, [
              Jh(Xt($), {
                icon: Xt(Ym),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Pl("", !0)
          ]),
          pn("div", null, [
            UM,
            $m(Ao(Xt($t)(r.situationInfo.firstEventTime)), 1)
          ]),
          pn("div", { class: "description" }, Ao(c)),
          RM,
          r.situationInfo.relatedAlarms ? (Fr(), Wr("div", NM, [
            yM,
            pn("span", kM, Ao(r.situationInfo.relatedAlarms.length), 1)
          ])) : Pl("", !0),
          (Fr(!0), Wr(hM, null, fM(Xt(we.exports.keys)(
            Xt(we.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (Fr(), Wr("div", {
            class: "info-title",
            key: y
          }, " - " + Ao(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const ZM = /* @__PURE__ */ Ue(MM, [["__scopeId", "data-v-7c453c05"]]), bM = window.Vue.openBlock, JM = window.Vue.createElementBlock, EM = window.Vue.createElementVNode;
var SM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const AM = {}, FM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WM = /* @__PURE__ */ EM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), CM = [
  WM
];
function xM(t, o) {
  return bM(), JM("svg", FM, CM);
}
var BM = /* @__PURE__ */ SM(AM, [["render", xM]]);
const IM = window.Vue.openBlock, DM = window.Vue.createElementBlock, Km = window.Vue.createElementVNode;
var _M = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const OM = {}, QM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zM = /* @__PURE__ */ Km("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), GM = /* @__PURE__ */ Km("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), YM = [
  zM,
  GM
];
function PM(t, o) {
  return IM(), DM("svg", QM, YM);
}
var HM = /* @__PURE__ */ _M(OM, [["render", PM]]);
const jM = window.Vue.openBlock, XM = window.Vue.createElementBlock, LM = window.Vue.createElementVNode;
var $M = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const qM = {}, KM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eZ = /* @__PURE__ */ LM("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), tZ = [
  eZ
];
function nZ(t, o) {
  return jM(), XM("svg", KM, tZ);
}
var rZ = /* @__PURE__ */ $M(qM, [["render", nZ]]);
const oZ = window.Vue.openBlock, iZ = window.Vue.createElementBlock, aZ = window.Vue.createElementVNode;
var sZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const lZ = {}, cZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uZ = /* @__PURE__ */ aZ("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), dZ = [
  uZ
];
function fZ(t, o) {
  return oZ(), iZ("svg", cZ, dZ);
}
var ew = /* @__PURE__ */ sZ(lZ, [["render", fZ]]);
const hZ = window.Vue.defineComponent, Sn = window.Vue.unref, da = window.Vue.normalizeClass, fa = window.Vue.createVNode, pZ = window.Vue.openBlock, mZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wZ = { class: "paginator" }, vZ = /* @__PURE__ */ hZ({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: o }) {
    const r = t, a = (l) => {
      l >= 0 && l <= r.totalPages - 1 && o("go-to-page", l);
    };
    return (l, c) => (pZ(), mZ("div", wZ, [
      fa(Sn($), {
        icon: Sn(BM),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      fa(Sn($), {
        icon: Sn(rZ),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      fa(Sn($), {
        icon: Sn(ew),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      fa(Sn($), {
        icon: Sn(HM),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const VZ = /* @__PURE__ */ Ue(vZ, [["__scopeId", "data-v-40758818"]]);
const ae = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, TZ = window.Vue.computed, tw = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((a) => {
    r[`${a}Label`] = TZ(() => t.value[a] ? t.value[a] : o[a]);
  }), r;
};
const Kr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, eo = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var gZ = Object.defineProperty, UZ = Object.defineProperties, RZ = Object.getOwnPropertyDescriptors, Eh = Object.getOwnPropertySymbols, NZ = Object.prototype.hasOwnProperty, yZ = Object.prototype.propertyIsEnumerable, Sh = (t, o, r) => o in t ? gZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Ah = (t, o) => {
  for (var r in o || (o = {}))
    NZ.call(o, r) && Sh(t, r, o[r]);
  if (Eh)
    for (var r of Eh(o))
      yZ.call(o, r) && Sh(t, r, o[r]);
  return t;
}, kZ = (t, o) => UZ(t, RZ(o));
const MZ = window.Vue.defineComponent, ZZ = window.Vue.h;
var bZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const JZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, EZ = MZ({
  props: JZ,
  data() {
    return {
      pressed: !1,
      active: !1,
      styles: {},
      failsafe: -1
    };
  },
  computed: {
    parent() {
      return this.$el.parentNode;
    }
  },
  methods: {
    onClick(t) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: o, clientHeight: r } = this.parent, a = Math.round(Math.max(o, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const c = this.parent.getBoundingClientRect(), d = t.pageY, h = t.pageX;
          l = {
            top: `${d - c.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${h - c.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = kZ(Ah({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, eo(this.failsafe), this.failsafe = Kr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ZZ("div", {
        style: Ah({}, this.styles),
        class: ["ripple", { active: this.active, center: this.center }],
        onTransitionEnd: () => {
          this.pressed = !1, this.active = !1;
        },
        onTransitionCancel: () => {
          this.pressed = !1, this.active = !1;
        }
      });
  },
  mounted() {
    this.parent.addEventListener("click", this.onClick);
    const t = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(t.position === "relative" || t.position === "absolute" || t.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var cr = /* @__PURE__ */ bZ(EZ, [["__scopeId", "data-v-18e2a5db"]]);
const SZ = window.Vue.openBlock, AZ = window.Vue.createElementBlock, FZ = window.Vue.createElementVNode;
var WZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const CZ = {}, xZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, BZ = /* @__PURE__ */ FZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), IZ = [
  BZ
];
function DZ(t, o) {
  return SZ(), AZ("svg", xZ, IZ);
}
var si = /* @__PURE__ */ WZ(CZ, [["render", DZ]]);
const Fh = window.Vue.computed, _Z = (t, o, r) => {
  const a = Fh(() => o.value.filter((c) => !c.disabled)), l = Fh(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const OZ = window.Vue.openBlock, QZ = window.Vue.createElementBlock, Hc = window.Vue.createElementVNode;
var zZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const GZ = {}, YZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PZ = /* @__PURE__ */ Hc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), HZ = /* @__PURE__ */ Hc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), jZ = /* @__PURE__ */ Hc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), XZ = [
  PZ,
  HZ,
  jZ
];
function LZ(t, o) {
  return OZ(), QZ("svg", YZ, XZ);
}
var $Z = /* @__PURE__ */ zZ(GZ, [["render", LZ]]), qZ = Object.defineProperty, KZ = Object.defineProperties, e2 = Object.getOwnPropertyDescriptors, Wh = Object.getOwnPropertySymbols, t2 = Object.prototype.hasOwnProperty, n2 = Object.prototype.propertyIsEnumerable, Ch = (t, o, r) => o in t ? qZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, nw = (t, o) => {
  for (var r in o || (o = {}))
    t2.call(o, r) && Ch(t, r, o[r]);
  if (Wh)
    for (var r of Wh(o))
      n2.call(o, r) && Ch(t, r, o[r]);
  return t;
}, rw = (t, o) => KZ(t, e2(o));
const ro = window.Vue.defineComponent, Ko = window.Vue.resolveComponent, Lt = window.Vue.openBlock, Yr = window.Vue.createElementBlock, r2 = window.Vue.createVNode, za = window.Vue.createBlock, o2 = window.Vue.withModifiers, to = window.Vue.inject, ei = window.Vue.computed, i2 = window.Vue.normalizeClass, Cr = window.Vue.createElementVNode, Ga = window.Vue.toDisplayString, Fa = window.Vue.renderSlot, Ho = window.Vue.createCommentVNode, a2 = window.Vue.withDirectives, s2 = window.Vue.vShow, Zc = window.Vue.ref, xh = window.Vue.toRef, Bh = window.Vue.nextTick, bc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const jc = window.Vue.provide, Ih = window.Vue.isRef, l2 = window.Vue.onBeforeUnmount;
var li = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const c2 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, u2 = ro({
  props: c2,
  components: {
    FeatherIcon: $
  }
}), d2 = ["title"];
function f2(t, o, r, a, l, c) {
  const d = Ko("FeatherIcon");
  return Lt(), Yr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    r2(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, d2);
}
var h2 = /* @__PURE__ */ li(u2, [["render", f2], ["__scopeId", "data-v-4265058e"]]);
const p2 = ro({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return si;
    }
  },
  components: {
    ActionIcon: h2
  }
});
function m2(t, o, r, a, l, c) {
  const d = Ko("ActionIcon");
  return Lt(), za(d, {
    onClick: o[0] || (o[0] = o2((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var w2 = /* @__PURE__ */ li(p2, [["render", m2]]);
const v2 = ro({
  computed: {
    errorIcon() {
      return $Z;
    }
  },
  components: {
    FeatherIcon: $
  }
});
function V2(t, o, r, a, l, c) {
  const d = Ko("FeatherIcon");
  return Lt(), za(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var T2 = /* @__PURE__ */ li(v2, [["render", V2], ["__scopeId", "data-v-0b8faef3"]]);
const g2 = {
  for: {
    type: String,
    required: !0
  },
  focused: {
    type: Boolean,
    default: !1
  },
  showClear: {
    type: Boolean,
    default: !1
  },
  clearText: {
    type: String
  },
  raised: {
    type: Boolean,
    default: !1
  }
}, U2 = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, R2 = ro({
  emits: U2,
  props: g2,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = to("wrapperOptions", {}), o = to("validationErrorMessage", !1), r = ei(() => t.error ? t.error : o && o.value ? o.value : !1);
    return rw(nw({}, t), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((o) => o.children && o.children.length !== 0) !== -1;
    },
    containerCls() {
      const t = [];
      return this.hideLabel && t.push("hide-label"), this.raised && t.push("raised"), this.focused && t.push("focused"), this.error && t.push("error"), this.background && t.push("background"), this.disabled && t.push("disabled"), this.inline && t.push("inline"), this.hasPre && t.push("has-prefix"), t;
    }
  },
  methods: {
    handleWrapperClick(t) {
      this.disabled || this.$emit("wrapper-click", t);
    }
  },
  mounted() {
    const t = this.$el.querySelector(".prefix");
    if (t) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: w2,
    ErrorIcon: T2
  }
}), N2 = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, y2 = ["for"], k2 = { class: "prefix" }, M2 = { class: "post" };
function Z2(t, o, r, a, l, c) {
  const d = Ko("ClearIcon"), h = Ko("ErrorIcon");
  return Lt(), Yr("div", {
    class: i2(["feather-input-wrapper-container", t.containerCls])
  }, [
    Cr("fieldset", N2, [
      Cr("legend", null, Ga(t.label), 1)
    ]),
    Cr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ga(t.label), 9, y2),
    Cr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Cr("div", k2, [
        Fa(t.$slots, "pre", {}, void 0, !0)
      ]),
      Fa(t.$slots, "default", {}, void 0, !0),
      Cr("div", M2, [
        t.showClear && t.computedClearText ? (Lt(), za(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Ho("", !0),
        t.error ? (Lt(), za(h, { key: 1 })) : Ho("", !0),
        Fa(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Xc = /* @__PURE__ */ li(R2, [["render", Z2], ["__scopeId", "data-v-4db296db"]]);
const b2 = ro({
  setup() {
    const t = to("subTextOptions", {}), o = to("validationErrorMessage", !1), r = ei(() => t.error ? t.error : o && o.value ? o.value : "");
    return rw(nw({}, t), { error: r });
  }
}), J2 = { class: "feather-input-sub-text" }, E2 = {
  key: 0,
  class: "feather-input-spacer"
}, S2 = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, A2 = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function F2(t, o, r, a, l, c) {
  return a2((Lt(), Yr("div", J2, [
    !t.hint && !t.error.length ? (Lt(), Yr("div", E2, "\xA0")) : Ho("", !0),
    t.hint && !t.error.length ? (Lt(), Yr("div", S2, Ga(t.hint), 1)) : Ho("", !0),
    t.error.length > 0 ? (Lt(), Yr("div", A2, Ga(t.error), 1)) : Ho("", !0),
    Fa(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [s2, !t.inline || t.hint || t.error.length]
  ]);
}
var ci = /* @__PURE__ */ li(b2, [["render", F2], ["__scopeId", "data-v-8e0ac99e"]]);
const W2 = {
  headingText: {
    type: Function,
    default: (t) => t.length && t.length === 1 ? "1 error" : `${t.length} errors`
  },
  errorList: {
    type: Array,
    default: () => []
  },
  generalError: {
    type: String,
    default: ""
  }
};
ro({
  props: W2,
  setup(t) {
    const o = to("featherFormErrors", Zc([])), r = xh(t, "errorList"), a = ei(() => {
      var U;
      return (U = r.value) != null && U.length ? r.value : o.value;
    }), l = xh(t, "generalError"), c = (U) => {
      document.getElementById(U).focus();
    }, d = (U) => U.replace(/ \*$/, ""), h = Zc(), w = (U) => `${d(U.label)} - ${U.message}`, V = ei(() => (a.value.length && Bh(() => h.value.focus()), t.headingText(a.value)));
    return bc(l, (U) => {
      U.length && Bh(() => h.value.focus());
    }), {
      errors: a,
      errorsHeading: V,
      heading: h,
      focusElement: c,
      mainError: l,
      getFullMessage: w
    };
  }
});
const ui = (t, o, r, a, l) => {
  const c = to("featherForm", !1);
  if (a && c && t.value) {
    const d = Zc("");
    jc("validationErrorMessage", d);
    const h = () => {
      if (l && Ih(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(o.value), d.value = "", { success: !0 };
      } catch (U) {
        const R = U;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, V = {
      clear: () => {
        d.value = "";
      },
      validate: h
    };
    return l && Ih(l) && bc(l, () => {
      c.runValidation();
    }), bc(t, (U, R) => {
      U && c && c.register(U, V), R && c && c.deregister(R);
    }, { immediate: !0 }), l2(() => {
      c.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, di = (t) => ({
  inherittedAttrs: ei(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), fi = {
  hint: {
    type: String
  },
  error: {
    type: String
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, hi = (t) => {
  jc("subTextOptions", t);
}, Lc = {
  label: {
    type: String,
    required: !0
  },
  error: {
    type: String
  },
  clear: {
    type: String,
    default: ""
  },
  background: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  hideLabel: {
    type: Boolean,
    default: !1
  }
}, $c = (t) => {
  jc("wrapperOptions", t);
}, ha = window.Vue.ref, C2 = window.Vue.watch, x2 = window.Vue.watchEffect, Dh = window.Vue.computed, Hl = window.Vue.provide, ow = (t, o, r, a, l) => {
  const c = ha([]), d = ha(), h = ha(), w = ha();
  x2(() => {
    if (!c.value.length)
      return;
    const E = c.value.map((B) => B.value);
    if (t.value !== void 0 && t.value !== null && (d.value = c.value[E.indexOf(t.value)]), !d.value && c.value.length) {
      let B = c.value.filter((x) => !x.disabled);
      B = B.length ? B : c.value, h.value = B[0], h.value.first = !0;
    }
  }), C2(d, (E, B) => {
    B && (B.checked = !1), E && (E.checked = !0);
  });
  const V = (E) => {
    E && E.disabled || (h.value && (h.value.first = !1), d.value !== E && (o("update:modelValue", E.value), d.value = E, E.focus()));
  }, U = Dh(() => d.value || h.value), R = _Z(U, c, V), y = Dh(() => ae("feather-radio-group"));
  w.value = y.value;
  const { validate: F } = ui(w, t, r, a, l);
  return Hl("register", (E) => {
    c.value = [...c.value, E], w.value === y.value && (w.value = E.id);
  }), Hl("select", V), Hl("blur", (E) => {
    o("blur", E);
  }), {
    keydown: (E) => {
      switch (E.keyCode) {
        case 13:
        case 32:
          d.value ? V(d.value) : h.value && V(h.value);
          break;
        case 40:
        case 39:
          R.selectNext();
          break;
        case 37:
        case 38:
          R.selectPrevious();
          break;
      }
    },
    ...R,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: F,
    firstElementId: w,
    groupId: y
  };
};
var B2 = Object.defineProperty, I2 = Object.defineProperties, D2 = Object.getOwnPropertyDescriptors, _h = Object.getOwnPropertySymbols, _2 = Object.prototype.hasOwnProperty, O2 = Object.prototype.propertyIsEnumerable, Oh = (t, o, r) => o in t ? B2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, jr = (t, o) => {
  for (var r in o || (o = {}))
    _2.call(o, r) && Oh(t, r, o[r]);
  if (_h)
    for (var r of _h(o))
      O2.call(o, r) && Oh(t, r, o[r]);
  return t;
}, iw = (t, o) => I2(t, D2(o));
const Dn = window.Vue.defineComponent, jo = window.Vue.inject, Ya = window.Vue.computed, Xo = window.Vue.ref, At = window.Vue.resolveComponent, Vt = window.Vue.openBlock, pi = window.Vue.createElementBlock, aw = window.Vue.normalizeClass, qt = window.Vue.renderSlot, Bn = window.Vue.createBlock, ti = window.Vue.createCommentVNode, Pa = window.Vue.createElementVNode, Q2 = window.Vue.withModifiers, ts = window.Vue.createVNode, sw = window.Vue.toRef, Jc = window.Vue.mergeProps, Vn = window.Vue.withCtx, z2 = window.Vue.h, G2 = window.Vue.provide;
var _n = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Y2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  clickable: {
    type: Boolean,
    default: !1
  }
}, P2 = Dn({
  props: Y2,
  setup(t) {
    const o = jo("isCondensed", null), r = Ya(() => o || t.condensed), a = Xo(!1);
    return {
      focused: a,
      handleFocus: () => {
        a.value = !0;
      },
      handleBlur: () => {
        a.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: cr
  }
}), H2 = ["aria-disabled"];
function j2(t, o, r, a, l, c) {
  const d = At("FeatherRipple");
  return Vt(), pi("div", {
    class: aw(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (h) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (h) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    qt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (Vt(), Bn(d, { key: 0 })) : ti("", !0)
  ], 42, H2);
}
var ns = /* @__PURE__ */ _n(P2, [["render", j2], ["__scopeId", "data-v-44d413dc"]]);
const X2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  textId: {
    type: String,
    required: !0
  },
  label: {
    type: String,
    required: !0
  }
}, L2 = Dn({
  emits: ["delete"],
  props: X2,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: si
    };
  },
  components: {
    FeatherIcon: $
  }
}), $2 = { class: "chip-delete" }, q2 = ["aria-label", "aria-describedby"];
function K2(t, o, r, a, l, c) {
  const d = At("FeatherIcon");
  return Vt(), pi("span", $2, [
    Pa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = Q2((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      ts(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, q2)
  ]);
}
var eb = /* @__PURE__ */ _n(L2, [["render", K2], ["__scopeId", "data-v-4bae6cb4"]]);
const tb = Dn({
  data() {
    return {
      titleText: void 0
    };
  },
  methods: {
    ellipsisActive() {
      return this.$refs.container.offsetWidth < this.$refs.container.scrollWidth;
    },
    updateTitle() {
      this.titleText = this.ellipsisActive() ? this.$refs.container.textContent : void 0;
    }
  },
  mounted() {
    this.updateTitle();
  },
  beforeUpdate() {
    this.updateTitle();
  }
}), nb = ["title"];
function rb(t, o, r, a, l, c) {
  return Vt(), pi("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    qt(t.$slots, "default", {}, void 0, !0)
  ], 8, nb);
}
var rs = /* @__PURE__ */ _n(tb, [["render", rb], ["__scopeId", "data-v-1a0445b2"]]);
const ob = {}, ib = {
  class: "chip-icon",
  role: "presentation"
};
function ab(t, o) {
  return Vt(), pi("span", ib, [
    qt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var os = /* @__PURE__ */ _n(ob, [["render", ab], ["__scopeId", "data-v-2230176f"]]);
const Qh = {
  delete: "Remove"
}, sb = Dn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Qh
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = tw(sw(t, "labels"), Qh), a = Ya(() => ae("chip-text")), l = () => {
      t.disabled || o.emit("click");
    }, c = jr({}, o.attrs);
    return t.disabled && delete c.onClick, iw(jr({}, r), {
      chipTextId: a,
      handleClick: l,
      attrs: c
    });
  },
  computed: {
    chipTextAttrs() {
      return this.canClick ? {
        role: "button",
        tabindex: "0"
      } : {};
    },
    canDelete() {
      return !!this.$attrs.onDelete && !this.disabled;
    },
    canClick() {
      return !!this.$attrs.onClick && !this.disabled;
    },
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: ns,
    DeleteIcon: eb,
    Label: rs,
    PreIcon: os
  }
}), lb = ["aria-disabled"];
function cb(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("DeleteIcon"), V = At("Chip");
  return Vt(), Bn(V, Jc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: Vn(() => [
      Pa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Pa("span", Jc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (Vt(), Bn(d, { key: 0 }, {
            default: Vn(() => [
              qt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ti("", !0),
          ts(h, { id: t.chipTextId }, {
            default: Vn(() => [
              qt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, lb),
      t.canDelete ? (Vt(), Bn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (U) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ti("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var ub = /* @__PURE__ */ _n(sb, [["render", cb], ["__scopeId", "data-v-48b2704a"]]);
const db = Dn({
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: ns,
    Label: rs,
    PreIcon: os
  }
}), fb = ["aria-disabled"];
function hb(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("Chip");
  return Vt(), Bn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: Vn(() => [
      Pa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (Vt(), Bn(d, { key: 0 }, {
          default: Vn(() => [
            qt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ti("", !0),
        ts(h, null, {
          default: Vn(() => [
            qt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, fb)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var pb = /* @__PURE__ */ _n(db, [["render", hb], ["__scopeId", "data-v-3e0c4eba"]]);
const mb = Dn({
  props: {
    value: {
      type: [String, Object, Number, Array],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = Xo(!1), r = Xo(!1), a = Ya(() => ae("chip-label-id")), l = Ya(() => o.value || r.value ? 0 : -1), c = Xo(), d = () => {
      c.value.$el.focus();
    }, h = jo("register", (y) => {
    }), w = jo("blur", (y) => {
    }), V = jo("select", (y) => {
    }), U = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return h(U), {
      labelId: a,
      tabindex: l,
      first: o,
      blur: w,
      click: () => {
        V(U);
      },
      input: c,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: ns,
    Label: rs,
    PreIcon: os
  }
});
function wb(t, o, r, a, l, c) {
  const d = At("PreIcon"), h = At("Label"), w = At("Chip");
  return Vt(), Bn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: aw(["focus hover", { selected: t.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": t.checked ? "true" : "false",
    "aria-disabled": t.disabled,
    "aria-labelledby": t.labelId,
    tabindex: t.tabindex,
    onClick: t.click,
    "allow-click": !t.disabled,
    onBlur: t.blur
  }, {
    default: Vn(() => [
      t.hasIcon ? (Vt(), Bn(d, { key: 0 }, {
        default: Vn(() => [
          qt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ti("", !0),
      ts(h, { id: t.labelId }, {
        default: Vn(() => [
          qt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var vb = /* @__PURE__ */ _n(mb, [["render", wb], ["__scopeId", "data-v-bbcc2f70"]]);
const Vb = {
  disabled: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Object, Number, Array, Boolean]
  }
}, zh = Dn({
  props: Vb,
  setup() {
    return { format: jo("chipListFormat", "") };
  },
  render() {
    const t = (o) => z2(o, jr(jr({}, this.$props), this.$attrs), jr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(ub) : this.format === "radio" ? t(vb) : t(pb);
  }
}), Tb = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (t) => ["list", "radio", "single"].indexOf(t) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, gb = Dn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Tb,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    G2("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = sw(t, "modelValue");
      return iw(jr({
        attrs: {
          role: "radiogroup"
        }
      }, ow(d, o.emit, t.label, {}, Xo(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), Ub = ["aria-label"];
function Rb(t, o, r, a, l, c) {
  return Vt(), pi("div", Jc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    qt(t.$slots, "default", {}, void 0, !0)
  ], 16, Ub);
}
var Nb = /* @__PURE__ */ _n(gb, [["render", Rb], ["__scopeId", "data-v-1e06f41d"]]);
const yb = window.Vue.defineComponent, kb = window.Vue.normalizeClass, Mb = window.Vue.openBlock, Zb = window.Vue.createElementBlock, bb = window.Vue.createCommentVNode, Jb = /* @__PURE__ */ yb({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (Mb(), Zb("span", {
      key: 0,
      class: kb(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : bb("", !0);
  }
});
const Eb = /* @__PURE__ */ Ue(Jb, [["__scopeId", "data-v-e08880d6"]]), Sb = window.Vue.defineComponent, Fo = window.Vue.unref, lw = window.Vue.createTextVNode, Gh = window.Vue.normalizeClass, jl = window.Vue.withCtx, Yh = window.Vue.createVNode, Ab = window.Vue.renderList, Fb = window.Vue.Fragment, Xl = window.Vue.openBlock, Wb = window.Vue.createElementBlock, Cb = window.Vue.toDisplayString, Ph = window.Vue.createBlock, xb = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Bb = /* @__PURE__ */ lw(" ALL "), Hh = window.Vue.ref, Ib = window.Vue.watch, Db = window.Vue.computed, _b = window.Vue.reactive, Ob = /* @__PURE__ */ Sb({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(t, { emit: o }) {
    var w;
    const r = t, a = Hh(!1), l = Db(() => we.exports.keys(we.exports.groupBy(r.alarms, "severity"))), c = Hh(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), d = _b({
      alarms: r.alarms
    }), h = (V) => {
      c.value = c.value.filter((U) => U !== "all"), c.value.includes(V) ? c.value = c.value.filter((U) => U !== V) : c.value.push(V), (V === "all" || c.value.length === 0) && (c.value = ["all"]), o("selected-severities", c.value);
    };
    return Ib(r, () => {
      var V;
      c.value = (V = r.preSelected) != null && V.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (V, U) => Fo(l).length > 0 ? (Xl(), Ph(Fo(Nb), {
      key: c.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: jl(() => [
        Yh(Fo(zh), {
          class: Gh({ clicked: c.value.includes("all") }),
          onClick: U[0] || (U[0] = (R) => h("all"))
        }, {
          default: jl(() => [
            Bb
          ]),
          _: 1
        }, 8, ["class"]),
        (Xl(!0), Wb(Fb, null, Ab(Fo(l), (R) => (Xl(), Ph(Fo(zh), {
          class: Gh([
            { clicked: c.value.includes(R) },
            `${R == null ? void 0 : R.toLowerCase()}-bg`
          ]),
          key: R,
          onClick: (y) => h(R)
        }, {
          default: jl(() => [
            Yh(Eb, { severity: R }, null, 8, ["severity"]),
            lw(Cb(R), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : xb("", !0);
  }
});
const qc = /* @__PURE__ */ Ue(Ob, [["__scopeId", "data-v-57d07be0"]]);
var Qb = Object.defineProperty, zb = Object.defineProperties, Gb = Object.getOwnPropertyDescriptors, jh = Object.getOwnPropertySymbols, Yb = Object.prototype.hasOwnProperty, Pb = Object.prototype.propertyIsEnumerable, Xh = (t, o, r) => o in t ? Qb(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Wo = (t, o) => {
  for (var r in o || (o = {}))
    Yb.call(o, r) && Xh(t, r, o[r]);
  if (jh)
    for (var r of jh(o))
      Pb.call(o, r) && Xh(t, r, o[r]);
  return t;
}, Lh = (t, o) => zb(t, Gb(o));
const Hb = window.Vue.defineComponent, jb = window.Vue.inject, Co = window.Vue.h;
var Xb = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Lb = {
  primary: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  secondary: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  asAnchor: {
    type: Boolean,
    default: !1
  },
  onColor: {
    type: Boolean,
    default: !1
  }
}, $b = Hb({
  inheritAttrs: !1,
  props: Lb,
  setup() {
    return { hasTooltip: jb("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let h = "";
      this.primary && (h = "btn-primary"), this.secondary && (h = "btn-secondary"), (this.text || this.icon) && (h = "btn-text");
      const w = ["btn", "hover", "focus", h];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, a = Wo({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (h) => {
        this.disabled ? (this.asAnchor && h.preventDefault(), this.$emit("disabled-click", h)) : this.$emit("click", h);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let c = Co(cr);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), Co(o, Lh(Wo(Wo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Co(cr, { center: !0 })
      ]);
    }
    const d = Co("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Co(o, Lh(Wo(Wo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var We = /* @__PURE__ */ Xb($b, [["__scopeId", "data-v-702d1074"]]);
const qb = window.Vue.openBlock, Kb = window.Vue.createElementBlock, eJ = window.Vue.createElementVNode;
var tJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const nJ = {}, rJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oJ = /* @__PURE__ */ eJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), iJ = [
  oJ
];
function aJ(t, o) {
  return qb(), Kb("svg", rJ, iJ);
}
var cw = /* @__PURE__ */ tJ(nJ, [["render", aJ]]);
const sJ = window.Vue.openBlock, lJ = window.Vue.createElementBlock, cJ = window.Vue.createElementVNode;
var uJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const dJ = {}, fJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hJ = /* @__PURE__ */ cJ("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), pJ = [
  hJ
];
function mJ(t, o) {
  return sJ(), lJ("svg", fJ, pJ);
}
var uw = /* @__PURE__ */ uJ(dJ, [["render", mJ]]);
const wJ = window.Vue.watch, vJ = window.Vue.onBeforeUnmount, VJ = window.Vue.ref, TJ = window.Vue.onMounted, gJ = (t) => {
  const o = VJ(!1);
  let r = !1;
  const a = (d) => {
    t(d), r = !1;
  };
  function l(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const c = () => {
    window && window.removeEventListener("resize", l);
  };
  return TJ(() => {
    const d = wJ(o, (h) => {
      window && h ? window.addEventListener("resize", l) : c();
    }, {
      immediate: !0
    });
    vJ(() => {
      d(), c();
    });
  }), o;
}, UJ = window.Vue.watch, RJ = window.Vue.onBeforeUnmount, NJ = window.Vue.ref, yJ = window.Vue.onMounted, kJ = (t, o) => {
  const r = NJ(!1), a = (d) => {
    d.target === window && o(d);
  }, l = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((V) => V && V.contains(d.target)) || o(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return yJ(() => {
    const d = UJ(r, (h) => {
      document && window && h ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : c();
    }, {
      immediate: !0
    });
    RJ(() => {
      d(), c();
    });
  }), r;
}, MJ = window.Vue.watch, ZJ = window.Vue.onBeforeUnmount, bJ = window.Vue.ref, dw = (t, o) => {
  const r = bJ(!1);
  let a = !1;
  const l = (w) => {
    o(w), a = !1;
  };
  function c(w) {
    a || (requestAnimationFrame(() => l(w)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", c, !0);
  }, h = MJ([t, r], ([w, V], U) => {
    U && U.length && U[0] && U[0].removeEventListener("scroll", c, !0), V && w ? w.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return ZJ(() => {
    h(), d();
  }), r;
}, JJ = window.Vue.defineComponent, un = window.Vue.ref, $h = window.Vue.toRef, EJ = window.Vue.onMounted, SJ = window.Vue.watch, qh = window.Vue.computed, AJ = window.Vue.nextTick, Kh = window.Vue.openBlock, ep = window.Vue.createElementBlock, tp = window.Vue.renderSlot, FJ = window.Vue.normalizeClass, WJ = window.Vue.normalizeStyle, CJ = window.Vue.createCommentVNode;
var xJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const BJ = {
  open: {
    type: Boolean,
    default: !1
  },
  noExpand: {
    type: Boolean,
    default: !1
  },
  cover: {
    type: Boolean,
    default: !1
  },
  right: {
    type: Boolean,
    default: !1
  },
  hasFocus: {
    type: Boolean,
    default: !1
  },
  dataRefId: {
    type: String,
    default: "feather-menu"
  },
  fill: {
    type: Boolean,
    default: !1
  },
  triggerId: {
    type: String
  }
}, IJ = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, DJ = JJ({
  emits: IJ,
  props: BJ,
  setup(t, o) {
    const r = un(), a = un(), l = $h(t, "open"), c = $h(t, "noExpand"), d = un("auto"), h = un(), w = un(t.triggerId || ae("feather-menu-trigger")), V = un(ae("feather-menu-dropdown")), U = un(""), R = un("");
    EJ(() => {
      h.value = window;
    });
    const y = un(!1), F = () => ({
      height: h.value.innerHeight,
      width: h.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!a.value)
        return;
      const b = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", AJ(() => {
        let { height: W, width: A } = a.value.getBoundingClientRect();
        const O = F(), he = O.height, se = O.width;
        t.fill && A < b.width ? (d.value = b.width + "px", A = b.width) : d.value = A + "px";
        let Ve = 0;
        he - b.bottom < W && b.top >= W ? (Ve = b.top - W, t.cover && (Ve += b.height)) : (Ve = b.bottom, t.cover && (Ve -= b.height));
        let Te = t.right ? b.right - A : b.left;
        !t.right && b.right >= A && se - b.left < A && (Te = b.right - A), t.right && b.right <= A && se - b.left > A && (Te = b.left), R.value = `${Te}px`, U.value = `${Ve}px`, y.value = !1;
      });
    }, D = kJ(r, (b) => {
      o.emit("outside-click", b);
    }), E = gJ(S), B = dw(h, S);
    SJ([l, a], ([b, W]) => {
      b && W && S(), D.value = b, E.value = b, B.value = b;
    });
    const x = qh(() => {
      const b = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return l.value && (b["aria-controls"] = V.value), c.value || (b["aria-expanded"] = l.value ? "true" : "false"), b;
    }), P = qh(() => ({
      click: (b) => {
        o.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: U,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: x,
      triggerListeners: P,
      menuId: V,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: S,
      calculating: y
    };
  }
}), _J = ["data-ref-id"], OJ = ["data-ref-id", "id"];
function QJ(t, o, r, a, l, c) {
  return Kh(), ep("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    tp(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (Kh(), ep("div", {
      key: 0,
      class: FJ(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: WJ({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      tp(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, OJ)) : CJ("", !0)
  ], 8, _J);
}
var fw = /* @__PURE__ */ xJ(DJ, [["render", QJ], ["__scopeId", "data-v-f75af406"]]);
const zJ = window.Vue.openBlock, GJ = window.Vue.createElementBlock, YJ = window.Vue.createElementVNode;
var PJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const HJ = {}, jJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XJ = /* @__PURE__ */ YJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), LJ = [
  XJ
];
function $J(t, o) {
  return zJ(), GJ("svg", jJ, LJ);
}
var qJ = /* @__PURE__ */ PJ(HJ, [["render", $J]]);
const KJ = window.Vue.openBlock, eE = window.Vue.createElementBlock, Kc = window.Vue.createElementVNode;
var tE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const nE = {}, rE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oE = /* @__PURE__ */ Kc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), iE = /* @__PURE__ */ Kc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), aE = /* @__PURE__ */ Kc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), sE = [
  oE,
  iE,
  aE
];
function lE(t, o) {
  return KJ(), eE("svg", rE, sE);
}
var cE = /* @__PURE__ */ tE(nE, [["render", lE]]);
const uE = window.Vue.openBlock, dE = window.Vue.createElementBlock, fE = window.Vue.createElementVNode;
var hE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const pE = {}, mE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wE = /* @__PURE__ */ fE("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), vE = [
  wE
];
function VE(t, o) {
  return uE(), dE("svg", mE, vE);
}
var eu = /* @__PURE__ */ hE(pE, [["render", VE]]);
const ni = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
const K = {
  PAGEUP: 33,
  PAGEDOWN: 34,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  HOME: 36,
  END: 35,
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  BACKSPACE: 8,
  DELETE: 46
};
const TE = window.Vue.defineComponent, gE = window.Vue.openBlock, UE = window.Vue.createElementBlock, RE = window.Vue.normalizeClass, NE = window.Vue.pushScopeId, yE = window.Vue.popScopeId, Ec = window.Vue.createElementVNode;
var kE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const ME = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, ZE = {
  click: (t) => !0
}, bE = TE({
  emits: ZE,
  props: ME,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), hw = (t) => (NE("data-v-07e020f5"), t = t(), yE(), t), JE = /* @__PURE__ */ hw(() => /* @__PURE__ */ Ec("div", { class: "track" }, null, -1)), EE = /* @__PURE__ */ hw(() => /* @__PURE__ */ Ec("div", { class: "switcher" }, [
  /* @__PURE__ */ Ec("div", { class: "switch-circle" })
], -1)), SE = [
  JE,
  EE
];
function AE(t, o, r, a, l, c) {
  return gE(), UE("div", {
    class: RE(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, SE, 2);
}
var FE = /* @__PURE__ */ kE(bE, [["render", AE], ["__scopeId", "data-v-07e020f5"]]), WE = Object.defineProperty, CE = Object.defineProperties, xE = Object.getOwnPropertyDescriptors, np = Object.getOwnPropertySymbols, BE = Object.prototype.hasOwnProperty, IE = Object.prototype.propertyIsEnumerable, rp = (t, o, r) => o in t ? WE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, op = (t, o) => {
  for (var r in o || (o = {}))
    BE.call(o, r) && rp(t, r, o[r]);
  if (np)
    for (var r of np(o))
      IE.call(o, r) && rp(t, r, o[r]);
  return t;
}, ip = (t, o) => CE(t, xE(o));
const tu = window.Vue.defineComponent, Ln = window.Vue.h, DE = window.Vue.openBlock, _E = window.Vue.createElementBlock, OE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var pw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const QE = {
  asLi: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  selected: {
    type: Boolean,
    default: !1
  },
  highlighted: {
    type: Boolean,
    default: !1
  }
}, zE = tu({
  inheritAttrs: !1,
  props: QE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Ln("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Ln("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Ln("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Ln(cr);
    if (this.asLi)
      return Ln("li", ip(op({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [t, r, a, l]);
    const c = Ln("a", ip(op({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return Ln("li", {}, [c]);
  }
});
var mi = /* @__PURE__ */ pw(zE, [["__scopeId", "data-v-7c46b2b3"]]);
tu({
  components: {
    FeatherListItem: mi
  }
});
const GE = {}, YE = { class: "feather-list" };
function PE(t, o) {
  return DE(), _E("ul", YE, [
    OE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var nu = /* @__PURE__ */ pw(GE, [["render", PE], ["__scopeId", "data-v-941a1d50"]]);
const HE = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, jE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
tu({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: HE,
  props: jE,
  computed: {
    labelId() {
      return ae("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === K.SPACE || t.keyCode === K.ENTER) && this.updateValue(), t.keyCode === K.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: FE, FeatherListItem: mi }
});
var XE = Object.defineProperty, LE = Object.defineProperties, $E = Object.getOwnPropertyDescriptors, ap = Object.getOwnPropertySymbols, qE = Object.prototype.hasOwnProperty, KE = Object.prototype.propertyIsEnumerable, sp = (t, o, r) => o in t ? XE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Tt = (t, o) => {
  for (var r in o || (o = {}))
    qE.call(o, r) && sp(t, r, o[r]);
  if (ap)
    for (var r of ap(o))
      KE.call(o, r) && sp(t, r, o[r]);
  return t;
}, eS = (t, o) => LE(t, $E(o));
const oo = window.Vue.defineComponent, oe = window.Vue.openBlock, Se = window.Vue.createElementBlock, it = window.Vue.createElementVNode, zt = window.Vue.toDisplayString, St = window.Vue.createCommentVNode, be = window.Vue.resolveComponent, Et = window.Vue.createBlock, He = window.Vue.withCtx, Xr = window.Vue.Fragment, Lo = window.Vue.renderList, at = window.Vue.createVNode, ru = window.Vue.withModifiers, sr = window.Vue.normalizeClass, Sc = window.Vue.renderSlot, mw = window.Vue.createTextVNode, tS = window.Vue.pushScopeId, nS = window.Vue.popScopeId, ww = window.Vue.reactive, vw = window.Vue.nextTick, Ll = window.Vue.markRaw, $l = window.Vue.toRef, lp = window.Vue.computed, rS = window.Vue.toRefs, xr = window.Vue.ref, ql = window.Vue.mergeProps, cp = window.Vue.toHandlers, pa = window.Vue.withDirectives, ma = window.Vue.vShow;
var is = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, ou = {
  query: {
    type: String
  }
}, fr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const oS = oo({
  mixins: [],
  props: Tt(Tt({
    text: {
      type: String,
      required: !0
    }
  }, is), ou),
  computed: {
    index() {
      if (this.query && this.query.length === 0)
        return -1;
      if (this.query && this.highlight)
        switch (this.highlight.toLowerCase()) {
          case "ignore-case":
            return this.text.toLowerCase().indexOf(this.query.toLowerCase());
          default:
            return -1;
        }
      return -1;
    },
    beginning() {
      return this.index === -1 ? this.text : this.text.slice(0, this.index);
    },
    highlighted() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index, this.index + this.query.length);
    },
    end() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index + this.query.length);
    }
  }
}), iS = {
  key: 0,
  class: "highlight"
}, aS = { key: 1 };
function sS(t, o, r, a, l, c) {
  return oe(), Se("span", null, [
    it("span", null, zt(t.beginning), 1),
    t.highlighted ? (oe(), Se("span", iS, zt(t.highlighted), 1)) : St("", !0),
    t.end ? (oe(), Se("span", aS, zt(t.end), 1)) : St("", !0)
  ]);
}
var Vw = /* @__PURE__ */ fr(oS, [["render", sS], ["__scopeId", "data-v-8abe2492"]]);
const lS = oo({
  emits: ["select", "deselect"],
  props: Tt(Tt({
    activeId: {
      type: String,
      required: !0
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    newLabel: {
      type: String,
      default: "new"
    }
  }, is), ou),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        ni(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return o && o.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeIndex === t;
    },
    getId(t) {
      return t === this.activeIndex ? this.activeId : null;
    },
    select(t) {
      this.$emit(this.isSelected(t) ? "deselect" : "select", t);
    }
  },
  components: {
    FeatherList: nu,
    FeatherListItem: mi,
    Highlighter: Vw
  }
}), cS = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function uS(t, o, r, a, l, c) {
  const d = be("Highlighter"), h = be("FeatherListItem"), w = be("FeatherList");
  return oe(), Et(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: He(() => [
      (oe(!0), Se(Xr, null, Lo(t.items, (V, U) => (oe(), Se(Xr, {
        key: V[t.textProp]
      }, [
        at(h, {
          "as-li": "",
          id: t.getId(U),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(V),
          highlighted: t.isActive(U),
          selected: t.isSelected(V),
          onClick: ru((R) => t.select(V), ["stop"])
        }, {
          default: He(() => [
            at(d, {
              highlight: t.highlight,
              query: t.query,
              text: V[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (oe(), Se("span", cS, zt(t.newLabel), 1)) : St("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && V._new ? (oe(), Se("li", {
          role: "presentation",
          key: V[t.textProp] + "hr",
          class: "hr"
        })) : St("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var dS = /* @__PURE__ */ fr(lS, [["render", uS], ["__scopeId", "data-v-f623434a"]]);
const fS = oo({
  emits: ["select"],
  props: Tt(Tt({
    activeId: {
      type: String,
      required: !0
    },
    activeRow: {
      type: Number,
      required: !0
    },
    activeCol: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    config: {
      type: Array,
      required: !0
    }
  }, is), ou),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        ni(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((t, o) => t.align && t.align.toLowerCase() === "right" ? `tr${o + 1}` : t.align && t.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return this.value && this.value.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeRow === t;
    },
    isActiveCell(t, o) {
      return this.activeRow === t && this.activeCol === o;
    },
    getId(t, o) {
      return t === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    Highlighter: Vw
  }
}), hS = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, pS = ["aria-multiselectable"], mS = { role: "row" }, wS = ["aria-selected", "onClick"], vS = ["id", "aria-selected"], VS = { key: 1 };
function TS(t, o, r, a, l, c) {
  const d = be("Highlighter");
  return oe(), Se("div", hS, [
    it("table", {
      class: sr(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      it("thead", null, [
        it("tr", mS, [
          (oe(!0), Se(Xr, null, Lo(t.config, (h) => (oe(), Se("th", {
            key: h.title
          }, zt(h.title), 1))), 128))
        ])
      ]),
      it("tbody", null, [
        (oe(!0), Se(Xr, null, Lo(t.items, (h, w) => (oe(), Se("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: sr({ focus: t.isActive(w), selected: t.isSelected(h) }),
          onClick: ru((V) => t.select(h), ["stop"])
        }, [
          (oe(!0), Se(Xr, null, Lo(t.config, (V, U) => (oe(), Se("td", {
            key: h[t.textProp] + V.prop,
            id: t.getId(w, U),
            "aria-selected": t.isSelected(h),
            class: sr({ "focus-cell": t.isActiveCell(w, U) })
          }, [
            V.prop === t.textProp ? (oe(), Et(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Se("p", VS, zt(h[V.prop]), 1))
          ], 10, vS))), 128))
        ], 10, wS))), 128))
      ])
    ], 10, pS)
  ], 512);
}
var gS = /* @__PURE__ */ fr(fS, [["render", TS], ["__scopeId", "data-v-58c88fd1"]]);
const US = oo({
  components: {
    FeatherList: nu,
    FeatherListItem: mi
  }
});
function RS(t, o, r, a, l, c) {
  const d = be("FeatherListItem"), h = be("FeatherList");
  return oe(), Et(h, { class: "result-list" }, {
    default: He(() => [
      at(d, { "as-li": "" }, {
        default: He(() => [
          Sc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var NS = /* @__PURE__ */ fr(US, [["render", RS], ["__scopeId", "data-v-06b752c6"]]);
const yS = oo({
  name: "Chip",
  emits: ["delete"],
  props: {
    focused: {
      type: Boolean,
      default: !1
    },
    removeLabel: {
      type: String,
      required: !0
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    pre: {
      type: Object
    }
  },
  computed: {
    showPreIcon() {
      return this.pre && this.pre.icon && this.pre.title;
    }
  },
  methods: {
    handleClick() {
      this.$emit("delete");
    }
  },
  components: {
    FeatherIcon: $,
    Cancel: si,
    BaseChip: ns,
    BaseChipLabel: rs,
    BaseChipPreIcon: os
  }
});
function kS(t, o, r, a, l, c) {
  const d = be("FeatherIcon"), h = be("BaseChipPreIcon"), w = be("BaseChipLabel"), V = be("Cancel"), U = be("BaseChip");
  return oe(), Et(U, {
    class: sr(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: He(() => [
      t.showPreIcon ? (oe(), Et(h, { key: 0 }, {
        default: He(() => {
          var R, y;
          return [
            at(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (y = t.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : St("", !0),
      at(w, null, {
        default: He(() => [
          mw(zt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? St("", !0) : (oe(), Se("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = ru((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        at(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: He(() => [
            at(V)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var MS = /* @__PURE__ */ fr(yS, [["render", kS], ["__scopeId", "data-v-e0fc6ac0"]]);
const ZS = {}, bS = (t) => (tS("data-v-aa720e06"), t = t(), nS(), t), JS = { class: "spinner-container" }, ES = /* @__PURE__ */ bS(() => /* @__PURE__ */ it("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ it("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), SS = [
  ES
];
function AS(t, o) {
  return oe(), Se("div", JS, SS);
}
var FS = /* @__PURE__ */ fr(ZS, [["render", AS], ["__scopeId", "data-v-aa720e06"]]), as = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(as || {});
const Tw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, WS = Tt(Tt(Tt({
  id: {
    type: String
  },
  modelValue: {
    type: [Array, Object]
  },
  results: {
    type: Array,
    default: () => []
  },
  textProp: {
    type: String,
    default: "_text"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  minChar: {
    type: Number,
    default: 0
  },
  allowNew: {
    type: Boolean,
    default: !1
  },
  selectionLimit: {
    type: Number
  },
  newMatcher: {
    type: Function,
    default: (t, o, r) => t[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (t) => !!as[t]
  },
  labels: {
    type: Object,
    default: () => Tw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, is), fi), Lc), CS = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, xS = (t, o, r, a) => {
  if (r.toLowerCase() === as.multi) {
    const c = t.modelValue, d = (h) => {
      t.selectionLimit.value && h.length >= t.selectionLimit.value ? t.selectionLimitReached.value = !0 : t.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(h) {
        h && h.length && d(h);
      },
      hasValue() {
        return !!(c.value && c.value.length);
      },
      selectItem(h) {
        if (c.value && c.value.filter((V) => V[t.textProp.value] === h[t.textProp.value]).length)
          return;
        const w = c.value ? [...c.value, h] : [h];
        a("update:modelValue", w), d(w);
      },
      removeItem(h) {
        const w = c.value.findIndex((V) => {
          if (h[t.textProp.value] === V[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const V = c.value.slice(0);
          V.splice(w, 1), a("update:modelValue", V), d(V), t.input.value.focus();
        }
      },
      clickedItem() {
        t.query.value = "", t.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const l = t.modelValue;
  return {
    getInitialText() {
      return l.value ? l.value[t.textProp.value] : "";
    },
    handleModelValueChange() {
      t.query.value = this.getInitialText();
    },
    hasValue() {
      return !!l.value;
    },
    selectItem(c) {
      o.active.row = -1, t.forceCloseResults.value = !0, c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const c = t.internalResults.value[o.active.row];
        c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
      }
    }
  };
}, BS = () => {
  const t = ww({
    row: -1
  }), o = (c) => {
    vw(() => {
      t.row = c;
    });
  }, r = (c, d) => {
    if (c.keyCode === K.DOWN) {
      if (c.preventDefault(), t.row === -1)
        a(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const h = t.row;
        a(), o(h + 1);
      }
      return !0;
    }
    if (c.keyCode === K.UP) {
      if (c.preventDefault(), t.row === 0)
        a();
      else if (t.row > 0) {
        const h = t.row;
        a(), o(h - 1);
      }
      return !0;
    }
    return !1;
  }, a = () => {
    t.row = -1;
  };
  return { reset: a, handleKeyPress: r, active: t, first: () => {
    t.row = 0;
  } };
}, IS = (t) => {
  const o = ww({
    row: -1,
    col: -1
  }), r = (d, h) => {
    vw(() => {
      o.col = h, o.row = d;
    });
  }, a = (d, h) => {
    if (d.keyCode === K.DOWN) {
      if (d.preventDefault(), o.row === -1)
        l(), r(0, 0);
      else if (o.row + 1 <= h.length - 1) {
        const w = o.row, V = o.col;
        l(), r(w + 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.UP) {
      if (d.preventDefault(), o.row === 0)
        l();
      else if (o.row > 0) {
        const w = o.row, V = o.col;
        l(), r(w - 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, V = o.row;
        l(), r(V, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= h.length - 1) {
        const w = o.row;
        l(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === K.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        l(), r(w - 1, t.length - 1);
      } else if (o.col > 0) {
        const w = o.col, V = o.row;
        l(), r(V, w - 1);
      }
      return !0;
    }
    if (d.keyCode === K.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? h.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === K.HOME && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, l = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: o, first: () => {
    l(), r(0, 0);
  } };
}, DS = oo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CS,
  props: WS,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== as.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var t;
      return (t = this.strategy) == null ? void 0 : t.hasValue();
    },
    showMenu() {
      return (this.showResults || this.showNoResults || this.showLoading || this.showSelectionLimit || this.showMinCharWarning) && !this.disabled;
    },
    showResults() {
      return this.forceCloseResults || this.selectionLimitReached || this.showMinCharWarning ? !1 : !!(this.hasFocus && this.internalResults && this.internalResults.length && !this.loading);
    },
    showNoResults() {
      return !this.forceCloseResults && this.hasFocus && !this.selectionLimitReached && this.internalResults && this.internalResults.length === 0 && this.query && this.query.length > 0 && this.query.length >= this.minChar && !this.loading;
    },
    showSelectionLimit() {
      return !this.forceCloseResults && this.hasFocus && this.selectionLimitReached && !this.loading;
    },
    showLoading() {
      return this.hasFocus && this.loading;
    },
    showMinCharWarning() {
      return this.minChar > 0 && !this.selectionLimitReached && !this.loading && this.hasFocus && this.query.length < this.minChar;
    },
    resultItemId() {
      return ae("result-item");
    },
    minCharWarningId() {
      return ae("min-char-warning");
    },
    subTextId() {
      return ae("feather-autocomplete-description");
    },
    resultsId() {
      return ae("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ae("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Ll(qJ);
    },
    minCharIcon() {
      return Ll(cE);
    },
    dropdownIcon() {
      return Ll(eu);
    },
    inputAttrs() {
      const t = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && t.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": t.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": o,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-autocomplete": "list",
        autocomplete: "off",
        readonly: !!this.disabled,
        tabindex: this.disabled ? -1 : 0,
        "aria-controls": this.showResults ? this.resultsId : "",
        "aria-invalid": this.$attrs["aria-invalid"] === "true" || !!this.error
      };
    },
    inputListeners() {
      return {
        input: this.handleTextInput,
        blur: this.handleInputBlur,
        focus: this.handleInputFocus,
        click: this.handleInputEnter,
        keydown: this.handleInputKeyDown
      };
    },
    comboxBoxAttrs() {
      return {
        role: "combobox",
        "aria-expanded": this.showResults ? "true" : "false",
        "aria-haspopup": this.gridConfig ? "grid" : "listbox",
        "aria-owns": this.resultsId,
        "aria-label": this.label
      };
    },
    scrollContainer() {
      return this.$refs.scroll.$el.querySelector(".feather-input-wrapper");
    },
    computedMinCharText() {
      return this.minCharLabel ? this.minCharLabel.replace("${min}", this.minChar.toString()) : "";
    },
    selectedDescribedByText() {
      return this.modelValue && this.modelValue.length ? this.modelValue.map((o) => o[this.textProp]).join(", ") : "";
    },
    allowNewEnabled() {
      return this.singleSelect && this.allowNew;
    },
    modelValueList() {
      return this.singleSelect ? [] : this.modelValue;
    }
  },
  watch: {
    activeChipIndex(t) {
      t && this.genActiveChipId(), t > -1 && this.scrollContainer && this.$nextTick(() => {
        ni(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ni(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(t), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(t) {
      t && t.length > 0 && this.selectFirst(), this.forceCloseResults = !1, t && t.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (t.some((r) => this.newMatcher(r, this.query, this)) || (t = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...t
      ])), this.internalResults = t;
    },
    showResults(t) {
      const o = this.$refs.menu;
      t && o.calculatePosition && o.calculatePosition();
    },
    selectionLimitReached(t) {
      t && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(t) {
      return t._pre;
    },
    genActiveChipId() {
      return this.activeChipId = ae("active-chip"), this.activeChipId;
    },
    setAlert(t) {
      const o = this.$refs.alert;
      o.textContent = t, setTimeout(() => {
        o.textContent = "";
      }, 100);
    },
    handleClear() {
      this.query = "", this.inputRef.focus(), this.emitSearch(), this.$emit("update:modelValue", void 0);
    },
    handleInputFocus() {
      this.disabled || (this.adjustTextArea(), !this.hasFocus && (this.hasFocus = !0, this.modelValue && this.singleSelect && this.inputRef.select()));
    },
    handleInputEnter() {
      this.handleInputFocus(), this.emitSearch();
    },
    handleTextInput(t) {
      this.adjustTextArea();
      const r = t.target.value;
      r !== void 0 && (eo(this.typingTimeout), this.typingTimeout = Kr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === K.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === K.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), o();
        return;
      }
      if (t.keyCode === K.ENTER && this.active.row > -1) {
        t.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((t.keyCode === K.ENTER || t.keyCode === K.SPACE || t.keyCode === K.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        t.preventDefault(), this.emitSearch();
        return;
      }
      if (t.keyCode === K.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        t.keyCode === K.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === K.RIGHT && (t.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === K.DELETE || t.keyCode === K.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), o());
      }
    },
    handleTriggerClick() {
      this.disabled || (this.inputRef.focus(), this.handleDropdownIconClick());
    },
    handleInputBlur() {
      this.validate(), this.strategy.handleInputBlur(), (this.forceCloseResults || !this.showMenu) && this.handleOutsideClick();
    },
    handleOutsideClick() {
      this.hasFocus = !1, this.forceCloseResults = !1, this.activeChipIndex = -1, this.resetResultIndex(), this.query = this.strategy.getInitialText(), this.internalResults = [], this.adjustTextArea();
    },
    clickedItem(t) {
      this.selectItem(t), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
    },
    selectItem(t) {
      this.strategy.selectItem(t), this.adjustTextArea();
    },
    removeFromValue(t) {
      this.strategy.removeItem(t);
    },
    handleDropdownIconClick() {
      if (this.showMenu) {
        this.forceCloseResults = !0;
        return;
      }
      this.forceCloseResults || this.emitSearch();
    },
    adjustTextArea() {
      const t = this.inputRef;
      !t || (t.style.height = "1.625rem", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width, r = t.parentElement;
        t.scrollWidth <= t.clientWidth && r && o < r.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight}px`;
        });
      }));
    }
  },
  setup(t, o) {
    const r = tw($l(t, "labels"), Tw);
    hi(t), $c(t);
    let a;
    t.gridConfig ? a = IS(t.gridConfig) : a = BS();
    const l = $l(t, "id"), c = lp(() => l.value ? l.value : ae("feather-autocomplete-input")), { validate: d } = ui(c, $l(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: w, textProp: V, allowNew: U, type: R, minChar: y } = rS(t), F = xr(!1), S = xr(!1), C = xr(!1), D = xr(""), E = xr([]), B = xr(), x = lp(() => B.value), P = () => {
      F.value && !S.value && (D.value && D.value.length >= y.value && o.emit("search", D.value), y.value <= 0 && o.emit("search", D.value || ""), E.value = [], a.reset());
    }, b = xS({
      selectionLimit: h,
      selectionLimitReached: S,
      modelValue: w,
      textProp: V,
      allowNew: U,
      forceCloseResults: C,
      query: D,
      internalResults: E,
      input: x,
      emitSearch: P
    }, a, R.value, o.emit);
    return eS(Tt(Tt({}, r), di(o.attrs)), {
      query: D,
      internalResults: E,
      selectionLimitReached: S,
      forceCloseResults: C,
      hasFocus: F,
      strategy: b,
      emitSearch: P,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: c,
      input: B,
      incomingId: l,
      inputRef: x,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Xc,
    InputSubText: ci,
    AutocompleteResults: dS,
    AutocompleteResultsGrid: gS,
    Chip: MS,
    MenuMessage: NS,
    FeatherIcon: $,
    FeatherMenu: fw,
    Spinner: FS
  }
}), _S = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, OS = ["id"], QS = { "data-ref-id": "feather-autocomplete-no-results" }, zS = { "data-ref-id": "feather-autocomplete-selection-limit" }, GS = { "data-ref-id": "feather-autocomplete-min-char" };
function YS(t, o, r, a, l, c) {
  const d = be("FeatherIcon"), h = be("Chip"), w = be("InputWrapper"), V = be("AutocompleteResults"), U = be("AutocompleteResultsGrid"), R = be("MenuMessage"), y = be("Spinner"), F = be("FeatherMenu"), S = be("InputSubText");
  return oe(), Se("div", ql(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    at(F, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: sr(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: He(({ attrs: C, on: D }) => [
        at(w, ql(Tt(Tt({}, C), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, cp(D), { ref: "scroll" }), {
          pre: He(() => [
            Sc(t.$slots, "pre", {}, () => [
              at(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: He(() => [
            at(d, {
              icon: t.dropdownIcon,
              class: sr(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: He(() => [
            it("div", {
              class: sr(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              it("div", _S, null, 512),
              it("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, zt(t.selectedDescribedByText), 9, OS),
              (oe(!0), Se(Xr, null, Lo(t.modelValueList, (E, B) => pa((oe(), Et(h, {
                key: E[t.textProp],
                role: "button",
                id: B === t.activeChipIndex ? t.activeChipId : null,
                focused: B === t.activeChipIndex,
                disabled: t.disabled,
                text: E[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(E),
                onDelete: (x) => t.removeFromValue(E)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [ma, !t.singleSelect]
              ])), 128)),
              it("textarea", ql(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, cp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: He(() => [
        t.gridConfig ? St("", !0) : pa((oe(), Et(V, {
          key: 0,
          items: t.internalResults,
          value: t.modelValue,
          "text-prop": t.textProp,
          activeId: t.resultItemId,
          activeIndex: t.active.row,
          "aria-label": t.label,
          onSelect: t.clickedItem,
          onDeselect: t.removeFromValue,
          class: "autocomplete-results",
          id: t.resultsId,
          single: t.singleSelect,
          "new-label": t.newLabel,
          highlight: t.highlight,
          query: t.query,
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [ma, t.showResults]
        ]),
        t.gridConfig ? pa((oe(), Et(U, {
          key: 1,
          items: t.internalResults,
          value: t.modelValue,
          "text-prop": t.textProp,
          config: t.gridConfig,
          activeId: t.resultItemId,
          activeRow: t.active.row,
          activeCol: t.active.col,
          "aria-label": t.label,
          onSelect: t.clickedItem,
          class: "autocomplete-results",
          id: t.resultsId,
          single: t.singleSelect,
          highlight: t.highlight,
          query: t.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [ma, t.showResults]
        ]) : St("", !0),
        t.showNoResults ? (oe(), Et(R, { key: 2 }, {
          default: He(() => [
            it("span", QS, zt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : St("", !0),
        t.showSelectionLimit ? (oe(), Et(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: He(() => [
            at(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            it("span", zS, zt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : St("", !0),
        t.minChar ? pa((oe(), Et(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: He(() => [
            at(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            it("span", GS, [
              Sc(t.$slots, "min-char", {}, () => [
                mw(zt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [ma, t.showMinCharWarning]
        ]) : St("", !0),
        t.showLoading ? (oe(), Et(y, { key: 5 })) : St("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    at(S, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var PS = /* @__PURE__ */ fr(DS, [["render", YS], ["__scopeId", "data-v-43a7e951"]]);
const HS = window.Pinia.defineStore, gw = HS("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(t) {
      this.showError = !0, this.errorMessage = t, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), jS = window.Vue.defineComponent, wn = window.Vue.createElementVNode, An = window.Vue.unref, Fn = window.Vue.createVNode, up = window.Vue.withCtx, wa = window.Vue.toDisplayString, XS = window.Vue.renderList, LS = window.Vue.Fragment, Br = window.Vue.openBlock, Ir = window.Vue.createElementBlock, Kl = window.Vue.createCommentVNode, $S = window.Vue.pushScopeId, qS = window.Vue.popScopeId, iu = (t) => ($S("data-v-ce307a7a"), t = t(), qS(), t), KS = { class: "list-main" }, eA = { class: "header" }, tA = /* @__PURE__ */ iu(() => /* @__PURE__ */ wn("h2", null, "Situation List", -1)), nA = /* @__PURE__ */ iu(() => /* @__PURE__ */ wn("span", null, "New Situation", -1)), rA = { class: "filters" }, oA = /* @__PURE__ */ iu(() => /* @__PURE__ */ wn("span", null, "Reset Filters", -1)), iA = { class: "autocomplete" }, aA = {
  key: 0,
  class: "container"
}, sA = { class: "situation-list" }, lA = {
  key: 0,
  class: "footer-pager"
}, cA = {
  key: 1,
  class: "container"
}, uA = window.Vue.reactive, Dr = window.Vue.ref, dA = window.Vue.watch, fA = window.VueRouter.useRouter, hA = /* @__PURE__ */ jS({
  __name: "SituationList",
  setup(t) {
    const o = fA(), r = dr(), a = gw();
    r.getSituations(), r.getNodes(), r.getUnassignedAlarms();
    const l = 9, c = uA({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), d = Dr(!1), h = Dr(0), w = Dr(1), V = Dr(0), U = Dr(!1), R = Dr(!1), y = (W) => {
      h.value = 0, c.situations = W[0], w.value = W.length;
    }, F = () => {
      c.nodes = r.nodes, c.results = r.nodes;
    };
    a.$subscribe((W, A) => {
      R.value = A.showError;
    }), dA(
      () => r.situations,
      () => {
        F(), V.value = r.situations.length, c.allSituations = we.exports.chunk(r.situations, l);
        const W = r.situations.map((A) => A.id);
        r.filteredSituations = W, y(c.allSituations), S();
      }
    );
    const S = () => {
      r.filters && (r.filters.node && (c.nodeSelectedValue = r.filters.node), r.filters.severities && (c.filterSeverities = r.filters.severities), D(), r.filters = null);
    }, C = (W) => {
      if (!W)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((A) => A.label.toLowerCase().indexOf(W) > -1).map((A) => ({
        _text: A.label,
        id: A.id
      })), d.value = !1;
    }, D = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let W = r.situations.map((A) => {
          if (A.relatedAlarms.filter(
            (he) => {
              var se;
              return he.nodeLabel === ((se = c.nodeSelectedValue) == null ? void 0 : se._text);
            }
          ).length > 0)
            return A;
        }).filter((A) => A);
        if (W) {
          c.filterSeverities.includes("all") || (W = W.filter(
            (O) => c.filterSeverities.includes(O.severity)
          )), V.value = W.length, c.situations = W;
          const A = W.map((O) => O.id);
          r.filteredSituations = A, U.value = !0;
        }
      } else if (c.nodeSelectedValue = void 0, c.filterSeverities.includes("all"))
        b();
      else {
        const W = r.situations.filter(
          (O) => c.filterSeverities.includes(O.severity)
        );
        c.situations = W, V.value = W.length;
        const A = W.map((O) => O.id);
        U.value = !0, r.filteredSituations = A;
      }
    }, E = (W) => {
      h.value = W, c.situations = c.allSituations[h.value];
    }, B = (W) => {
      (c.nodeSelectedValue || c.filterSeverities.length) && (r.filters = {
        node: c.nodeSelectedValue,
        severities: c.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: W
        }
      });
    }, x = (W) => {
      W.includes("all") && !c.nodeSelectedValue ? b() : (c.filterSeverities = W, D());
    }, P = () => {
      o.push({
        name: "addSituation"
      });
    }, b = () => {
      c.filterSeverities = ["all"], c.nodeSelectedValue = void 0;
      const W = r.situations.map((A) => A.id);
      r.filteredSituations = W, V.value = r.situations.length, y(c.allSituations), U.value = !1;
    };
    return (W, A) => (Br(), Ir("div", KS, [
      wn("div", eA, [
        tA,
        Fn(An(We), {
          class: "new-situation-btn",
          onClick: A[0] || (A[0] = () => P())
        }, {
          default: up(() => [
            Fn(An($), {
              icon: An(uw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            nA
          ]),
          _: 1
        })
      ]),
      wn("div", rA, [
        Fn(An(We), {
          class: "reset-btn",
          onClick: A[1] || (A[1] = () => b())
        }, {
          default: up(() => [
            Fn(An($), {
              icon: An(cw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            oA
          ]),
          _: 1
        }),
        Fn(qc, {
          alarms: An(r).situations,
          onSelectedSeverities: x,
          "pre-selected": c.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        wn("div", iA, [
          Fn(An(PS), {
            class: "map-search",
            label: "Find by node",
            loading: d.value,
            modelValue: c.nodeSelectedValue,
            "onUpdate:modelValue": [
              A[2] || (A[2] = (O) => c.nodeSelectedValue = O),
              D
            ],
            results: c.results,
            type: "single",
            onSearch: C
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      c.situations && c.situations.length > 0 ? (Br(), Ir("div", aA, [
        wn("div", null, " Result: " + wa(c.situations.length) + " of " + wa(V.value), 1),
        wn("div", sA, [
          (Br(!0), Ir(LS, null, XS(c.situations, (O) => (Br(), Ir("div", {
            class: "card",
            key: O.id
          }, [
            Fn(ZM, {
              onClick: () => B(O.id),
              "situation-info": O
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !U.value && V.value > l ? (Br(), Ir("div", lA, [
          wn("div", null, "Page: " + wa(h.value + 1) + " of " + wa(w.value), 1),
          Fn(VZ, {
            onGoToPage: E,
            currentPage: h.value,
            totalPages: w.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : Kl("", !0)
      ])) : Kl("", !0),
      !c.situations || c.situations.length == 0 ? (Br(), Ir("div", cA, " No results found ")) : Kl("", !0)
    ]));
  }
});
const pA = /* @__PURE__ */ Ue(hA, [["__scopeId", "data-v-ce307a7a"]]);
const va = window.Vue.ref, mA = window.Vue.inject, wA = window.Vue.computed, vA = window.Vue.onMounted, VA = {
  id: {
    type: String
  },
  controls: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, TA = (t) => {
  const o = va(!1), r = va(), a = va(t.controls), l = va(t.id), c = () => {
    r.value && r.value.focus();
  }, d = mA("registerTab");
  vA(() => {
    if (r.value && d) {
      const w = r.value.parentElement, V = w && w.parentElement ? w.parentElement : void 0, U = Array.from(V ? V.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? U.indexOf(w) : -1;
      d({
        el: r.value,
        focus: c,
        disabled: t.disabled,
        selected: o,
        id: l,
        controls: a,
        index: R
      });
    }
  });
  const h = wA(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: l.value,
    "aria-selected": o.value,
    "aria-controls": a.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: h,
    tab: r
  };
}, dp = window.Vue.ref, gA = window.Vue.toRef, UA = window.Vue.watch, fp = window.Vue.provide, RA = {
  prop: "modelValue",
  event: "update:modelValue"
}, NA = {
  "update:modelValue": (t) => !0
}, yA = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, kA = (t, o) => {
  const r = gA(t, "modelValue"), a = dp(t.modelValue), l = dp([]);
  UA(r, (S) => {
    w(S);
  });
  const c = (S) => {
    S.preventDefault(), l.value.some((C, D) => C.tab && C.tab.el.contains(S.target) ? (h(D), w(D), !0) : !1);
  }, d = (S) => {
    if (((O) => O.shiftKey || O.ctrlKey || O.metaKey || O.altKey)(S))
      return;
    const D = S.keyCode, E = (O) => {
      O.stopPropagation(), O.preventDefault();
    }, B = l.value.filter((O) => O.tab && !O.tab.disabled), x = l.value.findIndex((O) => O.tab && O.tab.el.contains(document.activeElement));
    let P = x !== -1 ? x : a.value;
    const b = [K.RIGHT], W = [K.LEFT], A = [K.ENTER, K.SPACE];
    t.vertical && (b.push(K.DOWN), W.push(K.UP)), b.indexOf(D) > -1 ? (P++, P >= B.length && (P = 0), E(S), h(l.value.indexOf(B[P]))) : W.indexOf(D) > -1 && (P--, P < 0 && (P = B.length - 1), E(S), h(l.value.indexOf(B[P]))), A.indexOf(D) > -1 && w(P);
  }, h = (S) => {
    l.value.forEach(function(C, D) {
      S === D && C.tab && C.tab.focus();
    });
  }, w = (S) => {
    const C = l.value[S];
    !C || C.tab && C.tab.disabled || (l.value.forEach((D, E) => {
      D.tab && (D.tab.selected = S === E), D.panel && (D.panel.selected = S === E);
    }), a.value = S, o.emit("update:modelValue", S));
  };
  fp("registerTab", (S) => {
    const C = S.index;
    C > -1 && (l.value[C] = { ...l.value[C], tab: S }, l.value = [...l.value], R());
  }), fp("registerPanel", (S) => {
    const C = S.index;
    C > -1 && (l.value[C] = {
      ...l.value[C],
      panel: S
    }, l.value = [...l.value], R());
  });
  const R = () => {
    l.value.forEach(({ tab: S, panel: C }, D) => {
      if (C && S) {
        const E = S.id || ae("tab"), B = S.controls || ae("panel");
        S.controls = B, S.id = E, C.tab = E, C.id = B;
      }
      D === a.value && (C && (C.selected = !0), S && (S.selected = !0));
    });
  };
  return {
    listeners: {
      click: c,
      keydown: d
    },
    attrs: {
      role: "tablist"
    },
    selected: a,
    pairs: l
  };
}, Va = window.Vue.ref, MA = window.Vue.inject, ZA = window.Vue.computed, bA = window.Vue.onMounted, JA = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, EA = (t) => {
  const o = Va(!1), r = Va(), a = Va(t.tab), l = Va(t.id), c = MA("registerPanel");
  bA(() => {
    if (c) {
      const h = r.value, w = h && h.parentElement ? h.parentElement : void 0, V = h ? Array.from(w ? w.children : []).indexOf(h) : -1;
      c({
        selected: o,
        id: l,
        tab: a,
        el: r.value,
        index: V
      });
    }
  });
  const d = ZA(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": a.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: d,
    panel: r
  };
}, au = window.Vue.defineComponent, SA = window.Vue.resolveComponent, su = window.Vue.openBlock, lu = window.Vue.createElementBlock, $o = window.Vue.createElementVNode, Uw = window.Vue.mergeProps, Ha = window.Vue.renderSlot, AA = window.Vue.createVNode, FA = window.Vue.normalizeStyle, WA = window.Vue.toHandlers, CA = window.Vue.withDirectives, xA = window.Vue.normalizeProps, BA = window.Vue.guardReactiveProps, IA = window.Vue.vShow;
var cu = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const DA = VA, _A = au({
  props: DA,
  setup(t) {
    return TA(t);
  },
  components: {
    FeatherRipple: cr
  }
}), OA = { role: "presentation" }, QA = { class: "tab-text" };
function zA(t, o, r, a, l, c) {
  const d = SA("FeatherRipple");
  return su(), lu("li", OA, [
    $o("button", Uw(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      $o("span", QA, [
        Ha(t.$slots, "default", {}, void 0, !0)
      ]),
      AA(d)
    ], 16)
  ]);
}
var hp = /* @__PURE__ */ cu(_A, [["render", zA], ["__scopeId", "data-v-e6bb52b6"]]);
const GA = yA, YA = NA, PA = au({
  model: RA,
  emits: YA,
  props: GA,
  setup(t, o) {
    return kA(t, o);
  },
  data: () => ({
    transform: "",
    durationNumber: 250,
    width: "1px",
    ro: void 0
  }),
  watch: {
    selected() {
      this.updateSlider();
    },
    pairs: {
      handler(t) {
        t && t.length && this.ro && t.forEach((o) => {
          o.tab && this.ro.observe(o.tab.el);
        });
      },
      immediate: !0
    }
  },
  computed: {
    duration() {
      return `${this.durationNumber}ms`;
    }
  },
  methods: {
    updateSlider() {
      this.$refs.slider.getBoundingClientRect().width < 5 ? this.durationNumber = 0 : this.durationNumber = 250, this.$nextTick(() => {
        const t = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - t.left, a = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${a}px)`;
      });
    }
  },
  mounted() {
    this.updateSlider(), this.ro = new ResizeObserver(() => {
      this.updateSlider();
    });
  },
  unmounted() {
    this.ro.disconnect();
  }
}), HA = { class: "feather-tab-container" }, jA = { class: "tab-panels" };
function XA(t, o, r, a, l, c) {
  return su(), lu("div", HA, [
    $o("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: FA({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    $o("ul", Uw(t.attrs, WA(t.listeners)), [
      Ha(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    $o("div", jA, [
      Ha(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var LA = /* @__PURE__ */ cu(PA, [["render", XA], ["__scopeId", "data-v-27adffb9"]]);
const $A = JA, qA = au({
  props: $A,
  setup(t) {
    return EA(t);
  }
});
function KA(t, o, r, a, l, c) {
  return CA((su(), lu("div", xA(BA(t.attrs)), [
    Ha(t.$slots, "default")
  ], 16)), [
    [IA, t.selected]
  ]);
}
var pp = /* @__PURE__ */ cu(qA, [["render", KA]]);
const eF = window.Vue.defineComponent, tF = window.Vue.toDisplayString, nF = window.Vue.normalizeClass, rF = window.Vue.openBlock, oF = window.Vue.createElementBlock, iF = window.Vue.createCommentVNode, aF = /* @__PURE__ */ eF({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (rF(), oF("span", {
      key: 0,
      class: nF(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, tF(o.severity), 3)) : iF("", !0);
  }
});
const Rw = /* @__PURE__ */ Ue(aF, [["__scopeId", "data-v-83c2cdce"]]), sF = window.Vue.defineComponent, mp = window.Vue.toDisplayString, wp = window.Vue.createElementVNode, lF = window.Vue.openBlock, cF = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const uF = { class: "box" }, dF = { class: "label" }, fF = { class: "date" }, hF = /* @__PURE__ */ sF({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (lF(), cF("div", uF, [
      wp("div", dF, mp(o.label), 1),
      wp("div", fF, mp(o.info), 1)
    ]));
  }
});
const ec = /* @__PURE__ */ Ue(hF, [["__scopeId", "data-v-b4afa751"]]), pF = window.Vue.defineComponent, mF = window.Vue.unref, wF = window.Vue.renderList, vF = window.Vue.Fragment, tc = window.Vue.openBlock, nc = window.Vue.createElementBlock, VF = window.Vue.toDisplayString, TF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const gF = { class: "alarms-list" }, UF = /* @__PURE__ */ pF({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (tc(), nc("div", gF, [
      (tc(!0), nc(vF, null, wF(mF(we.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (l, c) => (tc(), nc("div", {
        class: TF(["alarm-count", [`${c.toString().toLowerCase()}-color`, o.size]]),
        key: c
      }, VF(l.length), 3))), 128))
    ]));
  }
});
const RF = /* @__PURE__ */ Ue(UF, [["__scopeId", "data-v-52d63440"]]), NF = window.Vue.openBlock, yF = window.Vue.createElementBlock, kF = window.Vue.createElementVNode;
var MF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const ZF = {}, bF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JF = /* @__PURE__ */ kF("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), EF = [
  JF
];
function SF(t, o) {
  return NF(), yF("svg", bF, EF);
}
var AF = /* @__PURE__ */ MF(ZF, [["render", SF]]);
const FF = window.Vue.openBlock, WF = window.Vue.createElementBlock, CF = window.Vue.createStaticVNode;
var xF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const BF = {}, IF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DF = /* @__PURE__ */ CF('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), _F = [
  DF
];
function OF(t, o) {
  return FF(), WF("svg", IF, _F);
}
var Nw = /* @__PURE__ */ xF(BF, [["render", OF]]);
const QF = window.Vue.defineComponent, _t = window.Vue.unref, rc = window.Vue.createVNode, uu = window.Vue.createElementVNode, oc = window.Vue.withCtx, Ta = window.Vue.openBlock, ic = window.Vue.createBlock, ac = window.Vue.createCommentVNode, zF = window.Vue.normalizeClass, GF = window.Vue.createElementBlock, YF = window.Vue.pushScopeId, PF = window.Vue.popScopeId, du = (t) => (YF("data-v-e073070b"), t = t(), PF(), t), HF = /* @__PURE__ */ du(() => /* @__PURE__ */ uu("span", null, "Acknowledge", -1)), jF = /* @__PURE__ */ du(() => /* @__PURE__ */ uu("span", null, "Escalate", -1)), XF = /* @__PURE__ */ du(() => /* @__PURE__ */ uu("span", null, "Clear", -1)), LF = /* @__PURE__ */ QF({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(t) {
    const o = t, r = dr(), a = async (c) => {
      await ny(o.alarm.id, c) && r.getSituation(o.situationId), o.isSituation && await Gm(
        o.situationId,
        vt.ACCEPTED.toLowerCase()
      );
    }, l = async (c) => {
      await ry(o.alarm.id, c) && r.getSituation(o.situationId);
    };
    return (c, d) => (Ta(), GF("div", {
      class: zF(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? ac("", !0) : (Ta(), ic(_t(We), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: oc(() => [
          rc(_t($), {
            icon: _t(ii),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          HF
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (Ta(), ic(_t(We), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => l(_t(vt).ESCALATE))
      }, {
        default: oc(() => [
          rc(_t($), {
            icon: _t(AF),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          jF
        ]),
        _: 1
      })) : ac("", !0),
      o.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (Ta(), ic(_t(We), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => l(_t(vt).CLEAR))
      }, {
        default: oc(() => [
          rc(_t($), {
            icon: _t(Nw),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          XF
        ]),
        _: 1
      })) : ac("", !0)
    ], 2));
  }
});
const yw = /* @__PURE__ */ Ue(LF, [["__scopeId", "data-v-e073070b"]]);
var $F = Object.defineProperty, qF = Object.defineProperties, KF = Object.getOwnPropertyDescriptors, vp = Object.getOwnPropertySymbols, eW = Object.prototype.hasOwnProperty, tW = Object.prototype.propertyIsEnumerable, Vp = (t, o, r) => o in t ? $F(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Ac = (t, o) => {
  for (var r in o || (o = {}))
    eW.call(o, r) && Vp(t, r, o[r]);
  if (vp)
    for (var r of vp(o))
      tW.call(o, r) && Vp(t, r, o[r]);
  return t;
}, kw = (t, o) => qF(t, KF(o));
const Mw = window.Vue.defineComponent, nW = window.Vue.inject, rW = window.Vue.resolveComponent, sc = window.Vue.openBlock, Tp = window.Vue.createElementBlock, Pr = window.Vue.createElementVNode, oW = window.Vue.createBlock, gp = window.Vue.createCommentVNode, iW = window.Vue.renderSlot, aW = window.Vue.pushScopeId, sW = window.Vue.popScopeId, lc = window.Vue.toRef, ga = window.Vue.computed, lW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var cW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const uW = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String
  },
  noFocus: {
    type: Boolean,
    default: !1
  }
}, dW = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, fW = Mw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: dW,
  props: uW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: nW("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ae("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ae("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(t) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", t);
      }
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue() {
      this.disabled || (this.indeterminate ? (this.$emit("update:modelValue", !0), this.$emit("indeterminate", !1)) : (this.$emit("update:modelValue", !this.modelValue), this.$emit("indeterminate", !1)));
    },
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === K.SPACE || t.keyCode === K.ENTER) && this.updateValue(), t.keyCode === K.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: cr
  }
}), hW = (t) => (aW("data-v-a7af27e2"), t = t(), sW(), t), pW = { class: "layout-container" }, mW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], wW = { class: "checkbox hover focus" }, vW = /* @__PURE__ */ hW(() => /* @__PURE__ */ Pr("div", { class: "box" }, [
  /* @__PURE__ */ Pr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Pr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Pr("div", { class: "indeterminate" })
], -1)), VW = ["id", "for"];
function TW(t, o, r, a, l, c) {
  const d = rW("feather-ripple");
  return sc(), Tp("div", pW, [
    Pr("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...h) => t.click && t.click(...h)),
      onKeydown: o[1] || (o[1] = (...h) => t.keydown && t.keydown(...h)),
      "aria-checked": t.modelValue ? "true" : t.indeterminate ? "mixed" : "false",
      "aria-disabled": t.disabled,
      "aria-labelledby": t.labelId,
      "aria-label": t.label,
      id: t.inputId,
      tabindex: t.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      Pr("div", wW, [
        vW,
        t.disabled ? gp("", !0) : (sc(), oW(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? gp("", !0) : (sc(), Tp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        iW(t.$slots, "default", {}, void 0, !0)
      ], 8, VW))
    ], 40, mW)
  ]);
}
var ss = /* @__PURE__ */ cW(fW, [["render", TW], ["__scopeId", "data-v-a7af27e2"]]);
const gW = kw(Ac({}, fi), {
  modelValue: {
    type: [Array, Object],
    required: !1
  },
  label: {
    type: String,
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
});
Mw({
  props: gW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    hi(t);
    const r = lc(t, "error"), a = ga(() => ae("feather-checkbox-group")), l = ga(() => ae("feather-input-description")), c = ga(() => ae("feather-input-label")), d = ga(() => {
      const U = JSON.parse(JSON.stringify(o.attrs));
      return U["aria-invalid"] || (U["aria-invalid"] = !!r.value), kw(Ac({}, U), {
        class: "",
        "aria-describedby": l.value
      });
    }), h = lW(a.value), { validate: w } = ui(h, lc(t, "modelValue"), t.label, t.schema, lc(t, "error"));
    return Ac({
      groupId: a,
      inputId: h,
      descriptionId: l,
      labelId: c,
      attrs: d,
      validate: w,
      registerCheckbox: (U) => {
        U && h.value === a.value && (h.value = U);
      }
    }, di(o.attrs));
  },
  components: {
    InputSubText: ci
  }
});
const UW = window.Vue.openBlock, RW = window.Vue.createElementBlock, Zw = window.Vue.createElementVNode;
var NW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const yW = {}, kW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MW = /* @__PURE__ */ Zw("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), ZW = /* @__PURE__ */ Zw("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), bW = [
  MW,
  ZW
];
function JW(t, o) {
  return UW(), RW("svg", kW, bW);
}
var EW = /* @__PURE__ */ NW(yW, [["render", JW]]);
var SW = Object.defineProperty, AW = Object.defineProperties, FW = Object.getOwnPropertyDescriptors, Up = Object.getOwnPropertySymbols, WW = Object.prototype.hasOwnProperty, CW = Object.prototype.propertyIsEnumerable, Rp = (t, o, r) => o in t ? SW(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Hr = (t, o) => {
  for (var r in o || (o = {}))
    WW.call(o, r) && Rp(t, r, o[r]);
  if (Up)
    for (var r of Up(o))
      CW.call(o, r) && Rp(t, r, o[r]);
  return t;
}, bw = (t, o) => AW(t, FW(o));
const xW = window.Vue.defineComponent, cc = window.Vue.toRef, BW = window.Vue.computed, Np = window.Vue.resolveComponent, yp = window.Vue.openBlock, kp = window.Vue.createElementBlock, Mp = window.Vue.mergeProps, Zp = window.Vue.createVNode, IW = window.Vue.normalizeClass, bp = window.Vue.withCtx, DW = window.Vue.createElementVNode, _W = window.Vue.toDisplayString, OW = window.Vue.createCommentVNode;
var QW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const zW = bw(Hr(Hr({}, Lc), fi), {
  modelValue: {
    type: String
  },
  maxlength: {
    type: Number,
    required: !1,
    default: 0
  },
  auto: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  },
  id: {
    type: String,
    required: !1
  }
}), GW = {
  "update:modelValue": (t) => !0
}, YW = xW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: GW,
  props: zW,
  setup(t, o) {
    hi(t), $c(t);
    const r = cc(t, "id"), a = BW(() => r.value ? r.value : ae("feather-textarea-label")), { validate: l } = ui(a, cc(t, "modelValue"), t.label, t.schema, cc(t, "error"));
    return Hr({
      inputId: a,
      incomingId: r,
      validate: l
    }, di(o.attrs));
  },
  data() {
    return {
      focused: !1,
      internalValue: "",
      initialHeight: 0
    };
  },
  computed: {
    descriptionId() {
      return ae("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const t = [];
      return this.error && t.push("error"), this.disabled && t.push("disabled"), this.focused && t.push("focused"), t;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const t = Hr({}, this.$attrs);
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), bw(Hr(Hr({}, t), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (t["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (t) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(t);
        },
        onBlur: (t) => {
          this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(t);
        },
        onInput: (t) => {
          this.adjustTextArea(), this.handleInput(t);
        }
      };
    },
    charCount() {
      return `${this.internalValue && this.internalValue.length || "0"} / ${this.maxlength}`;
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(t) {
        this.adjustTextArea(), this.internalValue = t;
      }
    },
    internalValue: {
      immediate: !0,
      handler(t) {
        this.$emit("update:modelValue", t);
      }
    }
  },
  methods: {
    handleClear() {
      this.internalValue = "", this.focus();
    },
    handleWrapperClick() {
      this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.validate(), this.focused = !1;
    },
    handleInput(t) {
      this.internalValue = t.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const t = this.$refs.input;
      !t || (t.style.height = "12px", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width;
        t.scrollWidth <= t.clientWidth && o < t.parentElement.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight < this.initialHeight ? this.initialHeight : t.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const t = this.$refs.input;
    this.initialHeight = t.getBoundingClientRect().height;
  },
  components: {
    InputSubText: ci,
    InputWrapper: Xc
  }
}), PW = ["maxlength"], HW = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function jW(t, o, r, a, l, c) {
  const d = Np("InputWrapper"), h = Np("InputSubText");
  return yp(), kp("div", Mp(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    Zp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: IW(["feather-textarea-content", t.contentCls])
    }, {
      default: bp(() => [
        DW("textarea", Mp(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, PW)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Zp(h, { id: t.descriptionId }, {
      right: bp(() => [
        t.maxlength ? (yp(), kp("div", HW, _W(t.charCount), 1)) : OW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Fc = /* @__PURE__ */ QW(YW, [["render", jW], ["__scopeId", "data-v-0648df5c"]]);
const XW = window.Vue.defineComponent, Jp = window.Vue.toDisplayString, xo = window.Vue.createElementVNode, $n = window.Vue.unref, _r = window.Vue.openBlock, Ep = window.Vue.createBlock, Bo = window.Vue.createCommentVNode, Sp = window.Vue.createVNode, Ua = window.Vue.createElementBlock, LW = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $W = { class: "row" }, qW = { class: "label" }, KW = { class: "action-icons" }, eC = { class: "icon-btn" }, tC = {
  key: 0,
  class: "icon-btn"
}, nC = {
  key: 1,
  class: "icon-btn"
}, rC = {
  key: 0,
  class: "text"
}, oC = window.Vue.watch, Ap = window.Vue.ref, iC = /* @__PURE__ */ XW({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(t) {
    var w;
    const o = t, r = gw(), a = Ap(!1), l = Ap((w = o.memo) == null ? void 0 : w.body);
    oC(o, () => {
      var V;
      l.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const c = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await uy(o.id, o.type) ? l.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, h = async () => {
      a.value = !1, l.value && l.value !== "" && (await cy(o.id, o.type, l.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (V, U) => (_r(), Ua("div", {
      class: LW([o.boxType === "small" ? "box-small" : "box"])
    }, [
      xo("div", $W, [
        xo("div", qW, Jp(t.label), 1),
        xo("div", KW, [
          xo("div", eC, [
            a.value ? Bo("", !0) : (_r(), Ep($n($), {
              key: 0,
              icon: $n(EW),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          a.value ? (_r(), Ua("div", tC, [
            Sp($n($), {
              icon: $n(ii),
              "aria-hidden": "true",
              class: "icon save",
              onClick: h
            }, null, 8, ["icon"])
          ])) : Bo("", !0),
          l.value && l.value != "" || a.value ? (_r(), Ua("div", nC, [
            Sp($n($), {
              icon: $n(si),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Bo("", !0)
        ])
      ]),
      xo("div", null, [
        !a.value && l.value != null ? (_r(), Ua("div", rC, Jp(l.value), 1)) : Bo("", !0),
        a.value ? (_r(), Ep($n(Fc), {
          key: 1,
          class: "textarea",
          modelValue: l.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => l.value = R),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Bo("", !0)
      ])
    ], 2));
  }
});
const ja = /* @__PURE__ */ Ue(iC, [["__scopeId", "data-v-3f44e250"]]), aC = window.Vue.defineComponent, Io = window.Vue.unref, Or = window.Vue.createVNode, Ra = window.Vue.toDisplayString, mn = window.Vue.createElementVNode, Fp = window.Vue.openBlock, Wp = window.Vue.createElementBlock, Cp = window.Vue.createCommentVNode, xp = window.Vue.createTextVNode, sC = window.Vue.pushScopeId, lC = window.Vue.popScopeId, Jw = (t) => (sC("data-v-cd37a1f9"), t = t(), lC(), t), cC = {
  key: 0,
  class: "card"
}, uC = { class: "row" }, dC = { class: "title" }, fC = {
  key: 0,
  class: "ack"
}, hC = ["innerHTML"], pC = /* @__PURE__ */ Jw(() => /* @__PURE__ */ mn("strong", null, "First Event", -1)), mC = /* @__PURE__ */ Jw(() => /* @__PURE__ */ mn("strong", null, "Last Event", -1)), wC = { class: "section memo-boxes" }, Bp = window.Vue.ref, vC = window.Vue.watch, VC = /* @__PURE__ */ aC({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, a = Bp(!1), l = Bp(r.alarm);
    vC(r, () => {
      l.value = r.alarm, a.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const w = await Om(h);
      w && (l.value = w);
    };
    return (h, w) => {
      var V, U, R, y, F;
      return l.value ? (Fp(), Wp("div", cC, [
        mn("div", null, [
          mn("div", uC, [
            Or(Io(ss), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (S) => a.value = S),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            mn("div", dC, Ra(l.value.nodeLabel) + " - " + Ra(l.value.id), 1),
            Or(Rw, {
              severity: (V = l.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            l.value.ackTime ? (Fp(), Wp("div", fC, [
              Or(Io($), {
                icon: Io(ii),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Cp("", !0)
          ]),
          mn("div", {
            class: "description",
            innerHTML: l.value.description
          }, null, 8, hC),
          mn("div", null, [
            pC,
            xp(" - " + Ra(Io($t)(l.value.firstEventTime)), 1)
          ]),
          mn("div", null, [
            mC,
            xp(" - " + Ra(Io($t)(l.value.lastEventTime)), 1)
          ]),
          mn("div", wC, [
            Or(ja, {
              id: (U = l.value) == null ? void 0 : U.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = l.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Or(ja, {
              id: (y = l.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (F = l.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Or(yw, {
          alarm: l.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : Cp("", !0);
    };
  }
});
const TC = /* @__PURE__ */ Ue(VC, [["__scopeId", "data-v-cd37a1f9"]]), gC = window.Vue.defineComponent, Lr = window.Vue.createElementVNode, qn = window.Vue.createVNode, Kn = window.Vue.unref, Ip = window.Vue.withCtx, UC = window.Vue.renderList, RC = window.Vue.Fragment, Na = window.Vue.openBlock, ya = window.Vue.createElementBlock, NC = window.Vue.createCommentVNode, yC = window.Vue.pushScopeId, kC = window.Vue.popScopeId, fu = (t) => (yC("data-v-438eed08"), t = t(), kC(), t), MC = { class: "container" }, ZC = { class: "row" }, bC = /* @__PURE__ */ fu(() => /* @__PURE__ */ Lr("div", { class: "title" }, "Alarms", -1)), JC = { class: "row actions" }, EC = /* @__PURE__ */ fu(() => /* @__PURE__ */ Lr("span", null, "Clear", -1)), SC = /* @__PURE__ */ fu(() => /* @__PURE__ */ Lr("span", null, "Acknowledge", -1)), AC = { class: "section" }, FC = {
  key: 0,
  class: "alarm-list"
}, Dp = window.Vue.ref, WC = window.Vue.watch, CC = window.Vue.reactive, xC = /* @__PURE__ */ gC({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = dr(), a = Dp(!1), l = Dp(["all"]), c = CC({
      selectedAlarms: [],
      alarms: o.alarms
    });
    WC(o, () => {
      l.value = ["all"], c.alarms = o.alarms, c.selectedAlarms = [], a.value = !1;
    });
    const d = (V) => {
      c.selectedAlarms.includes(V) ? we.exports.remove(c.selectedAlarms, (U) => U == V) : c.selectedAlarms.push(V);
    }, h = async (V) => {
      c.selectedAlarms.length && (await oy(c.selectedAlarms, V), r.getSituation(o.situationId), c.selectedAlarms = [], a.value = !1);
    }, w = (V) => {
      V.includes("all") ? c.alarms = o.alarms : c.alarms = o.alarms.filter((U) => V.includes(U.severity));
    };
    return (V, U) => (Na(), ya("div", MC, [
      Lr("div", ZC, [
        bC,
        qn(qc, {
          alarms: o.alarms,
          onSelectedSeverities: w
        }, null, 8, ["alarms"])
      ]),
      Lr("div", JC, [
        qn(Kn(ss), {
          modelValue: a.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => a.value = R),
          label: "selected"
        }, null, 8, ["modelValue"]),
        qn(Kn(We), {
          class: "acction-btn",
          onClick: U[1] || (U[1] = () => h("clear"))
        }, {
          default: Ip(() => [
            qn(Kn($), {
              icon: Kn(Nw),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            EC
          ]),
          _: 1
        }),
        qn(Kn(We), {
          class: "acction-btn",
          onClick: U[2] || (U[2] = () => h("ack"))
        }, {
          default: Ip(() => [
            qn(Kn($), {
              icon: Kn(ii),
              "aria-hidden": "true",
              class: "icon ack"
            }, null, 8, ["icon"]),
            SC
          ]),
          _: 1
        })
      ]),
      Lr("div", AC, [
        c.alarms.length > 0 ? (Na(), ya("div", FC, [
          (Na(!0), ya(RC, null, UC(c.alarms, (R) => (Na(), ya("div", {
            key: R.id
          }, [
            qn(TC, {
              alarm: R,
              selectAll: a.value,
              "situation-id": o.situationId,
              onAlarmSelected: d
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : NC("", !0)
      ])
    ]));
  }
});
const BC = /* @__PURE__ */ Ue(xC, [["__scopeId", "data-v-438eed08"]]), IC = "/whoami", DC = async () => {
  try {
    const t = await gn.get(IC);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, _C = window.Pinia.defineStore, wi = _C("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await DC();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await wy();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await zm(t);
        this.allowSave = o;
      }
    }
  }
}), OC = window.Vue.defineComponent, Ot = window.Vue.createVNode, mt = window.Vue.unref, uc = window.Vue.normalizeClass, ka = window.Vue.toDisplayString, er = window.Vue.openBlock, tr = window.Vue.createElementBlock, Ma = window.Vue.createCommentVNode, QC = window.Vue.withCtx, Qt = window.Vue.createElementVNode, zC = window.Vue.createTextVNode, GC = window.Vue.Fragment, YC = window.Vue.pushScopeId, PC = window.Vue.popScopeId, HC = (t) => (YC("data-v-eecc24f5"), t = t(), PC(), t), jC = { class: "section" }, XC = { class: "action-section" }, LC = {
  key: 0,
  class: "btn-row"
}, $C = { key: 0 }, qC = { key: 1 }, KC = {
  key: 0,
  class: "situation-detail"
}, ex = { class: "situation-info" }, tx = { class: "id" }, nx = { key: 0 }, rx = ["innerHTML"], ox = /* @__PURE__ */ HC(() => /* @__PURE__ */ Qt("p", null, null, -1)), ix = { class: "boxes" }, ax = { class: "parameters" }, sx = { class: "section memo-boxes" }, lx = { key: 0 }, _p = window.Vue.ref, cx = window.Vue.watch, ux = /* @__PURE__ */ OC({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(t) {
    const o = t, r = dr(), a = vt.REJECTED, l = wi(), c = _p(o.situationInfo.status), d = _p(o.situationInfo);
    cx(o, () => {
      c.value = o.situationInfo.status || "", d.value = o.situationInfo;
    });
    const h = (w) => {
      var V;
      Gm((V = o.situationInfo) == null ? void 0 : V.id, w.toLowerCase()), c.value = w, r.getSituation(o.situationInfo.id);
    };
    return (w, V) => {
      var U, R, y, F, S, C, D, E, B, x, P, b;
      return er(), tr(GC, null, [
        Qt("div", jC, [
          Qt("div", XC, [
            Ot(yw, {
              alarm: d.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            mt(l).allowSave ? (er(), tr("div", LC, [
              Ot(mt(We), {
                class: uc(["btn", { rejected: c.value == mt(a) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => h(mt(a)))
              }, {
                default: QC(() => [
                  Ot(mt($), {
                    icon: mt(Ym),
                    "aria-hidden": "true",
                    class: uc(["icon reject", { rejected: c.value == mt(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == mt(a) ? (er(), tr("span", $C, ka(mt(a)), 1)) : (er(), tr("span", qC, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Ma("", !0)
          ]),
          d.value ? (er(), tr("div", KC, [
            Qt("div", {
              class: uc(["severity-line", [`${(R = (U = d.value) == null ? void 0 : U.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            Qt("div", ex, [
              Qt("div", tx, [
                Qt("div", null, [
                  zC(" Situation - " + ka((y = d.value) == null ? void 0 : y.id) + " - affecting " + ka(mt(we.exports.size)(mt(we.exports.groupBy)((F = d.value) == null ? void 0 : F.alarms, "nodeId"))) + " node ", 1),
                  d.value.alarms ? (er(), tr("span", nx, "having " + ka(d.value.alarms.length) + " alarms ", 1)) : Ma("", !0)
                ]),
                Ot(Rw, {
                  severity: (S = d.value) == null ? void 0 : S.severity
                }, null, 8, ["severity"])
              ]),
              Qt("span", {
                innerHTML: d.value.description
              }, null, 8, rx),
              ox,
              Qt("div", ix, [
                Ot(ec, {
                  label: "First Event",
                  info: mt($t)(d.value.firstEventTime)
                }, null, 8, ["info"]),
                Ot(ec, {
                  label: "Last Event",
                  info: mt($t)(d.value.lastEventTime)
                }, null, 8, ["info"]),
                Ot(ec, {
                  label: "Reduction Key",
                  info: d.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Qt("div", ax, [
              Ot(RF, {
                alarms: (C = d.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Ma("", !0),
          Qt("div", sx, [
            Ot(ja, {
              id: (D = d.value) == null ? void 0 : D.id,
              situationId: (E = d.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (B = d.value) == null ? void 0 : B.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ot(ja, {
              id: (x = d.value) == null ? void 0 : x.id,
              situationId: (P = d.value) == null ? void 0 : P.id,
              label: "Journal Memo",
              type: "journal",
              memo: (b = d.value) == null ? void 0 : b.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        d.value.alarms && d.value.alarms.length ? (er(), tr("div", lx, [
          Ot(BC, {
            alarms: d.value.alarms,
            "situation-id": d.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Ma("", !0)
      ], 64);
    };
  }
});
const dx = /* @__PURE__ */ Ue(ux, [["__scopeId", "data-v-eecc24f5"]]);
var fx = Object.defineProperty, hx = Object.defineProperties, px = Object.getOwnPropertyDescriptors, Op = Object.getOwnPropertySymbols, mx = Object.prototype.hasOwnProperty, wx = Object.prototype.propertyIsEnumerable, Qp = (t, o, r) => o in t ? fx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Wc = (t, o) => {
  for (var r in o || (o = {}))
    mx.call(o, r) && Qp(t, r, o[r]);
  if (Op)
    for (var r of Op(o))
      wx.call(o, r) && Qp(t, r, o[r]);
  return t;
}, vx = (t, o) => hx(t, px(o));
const Ew = window.Vue.defineComponent, ir = window.Vue.resolveComponent, Wa = window.Vue.openBlock, zp = window.Vue.createBlock, Ca = window.Vue.mergeProps, ar = window.Vue.withCtx, Sw = window.Vue.createElementBlock, Vx = window.Vue.Fragment, Tx = window.Vue.renderList, gx = window.Vue.createTextVNode, Ux = window.Vue.toDisplayString, Rx = window.Vue.computed, Gp = window.Vue.toRef, Do = window.Vue.createVNode, Yp = window.Vue.toHandlers, Nx = window.Vue.renderSlot, yx = window.Vue.normalizeClass, kx = window.Vue.createElementVNode;
var Aw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Mx = Ew({
  inheritAttrs: !0,
  emits: ["select"],
  props: {
    label: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    activeIndex: {
      type: Number,
      required: !0
    }
  },
  computed: {
    activeId() {
      return ae("feather-select-active");
    },
    listAttrs() {
      return {
        tabindex: -1,
        role: "listbox",
        "aria-label": this.label,
        "aria-activedescendant": this.activeId
      };
    }
  },
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        ni(o, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      return this.activeIndex === t;
    },
    getId(t) {
      return t === this.activeIndex ? this.activeId : null;
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    FeatherList: nu,
    FeatherListItem: mi
  }
});
function Zx(t, o, r, a, l, c) {
  const d = ir("FeatherListItem"), h = ir("FeatherList");
  return Wa(), zp(h, Ca(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: ar(() => [
      (Wa(!0), Sw(Vx, null, Tx(t.options, (w, V) => (Wa(), zp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(V),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(V),
        selected: t.isSelected(V),
        onClick: (U) => t.select(w)
      }, {
        default: ar(() => [
          gx(Ux(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var bx = /* @__PURE__ */ Aw(Mx, [["render", Zx], ["__scopeId", "data-v-eae820da"]]);
const Jx = vx(Wc(Wc({}, Lc), fi), {
  modelValue: {
    type: Object,
    required: !1
  },
  textProp: {
    type: String,
    default: "_text"
  },
  options: {
    type: Array,
    default: () => []
  },
  schema: {
    type: Object,
    required: !1
  }
}), Ex = {
  "update:modelValue": (t) => !0
}, Sx = Ew({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Ex,
  props: Jx,
  setup(t, o) {
    hi(t), $c(t);
    const r = Rx(() => ae("feather-select-input")), { validate: a } = ui(r, Gp(t, "modelValue"), t.label, t.schema, Gp(t, "error"));
    return Wc({
      inputId: r,
      validate: a
    }, di(o.attrs));
  },
  data() {
    return {
      hasFocus: !1,
      showMenu: !1,
      charsSoFar: "",
      internalValue: this.modelValue,
      delayTimeout: -1
    };
  },
  computed: {
    showClear() {
      return !!this.modelValue;
    },
    subTextId() {
      return ae("feather-select-description");
    },
    inputAttrs() {
      return {
        id: this.inputId,
        "aria-haspopup": "listbox",
        "aria-invalid": this.$attrs["aria-invalid"] || !!this.error,
        value: this.valueText,
        readonly: !0,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (this.$attrs["aria-describedby"] || "").split(" ").concat([this.subTextId]).filter(Boolean).join(" ")
      };
    },
    inputListeners() {
      return {
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        keydown: this.handleKeyDown
      };
    },
    raised() {
      return !!this.internalValue || this.hasFocus;
    },
    valueText() {
      return this.internalValue && this.internalValue[this.textProp] ? this.internalValue[this.textProp] : "";
    },
    activeIndex() {
      if (this.internalValue && this.internalValue[this.textProp]) {
        const t = this.internalValue, o = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => eu
  },
  watch: {
    showMenu(t) {
      t ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(t) {
      this.internalValue = t;
    }
  },
  methods: {
    closeMenu() {
      this.showMenu = !1, this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleClear() {
      this.handleSelect(void 0), this.emitSelection();
    },
    handleInputFocus() {
      this.disabled || this.hasFocus || (this.hasFocus = !0);
    },
    handleInputBlur() {
      this.hasFocus && !this.showMenu && (this.hasFocus = !1, this.validate());
    },
    handleTriggerClick() {
      this.disabled || (this.showMenu = !0, this.hasFocus = !0);
    },
    handleOutsideClick() {
      this.showMenu = !1, this.hasFocus = !1;
    },
    handleSelect(t) {
      this.select(t), this.showMenu = !1, this.$refs.input.focus();
    },
    select(t) {
      this.internalValue = t;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(t) {
      if (t.keyCode === K.ENTER)
        t.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (t.keyCode === K.ESCAPE)
        this.closeMenu(), t.stopPropagation();
      else if (t.keyCode === K.DOWN)
        t.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (t.keyCode === K.UP)
        t.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (t.keyCode === K.HOME)
        t.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (t.keyCode === K.END)
        t.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(t.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      eo(this.delayTimeout), this.delayTimeout = Kr(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Xc,
    InputSubText: ci,
    FeatherMenu: fw,
    List: bx,
    FeatherIcon: $
  }
});
function Ax(t, o, r, a, l, c) {
  const d = ir("FeatherIcon"), h = ir("InputWrapper"), w = ir("List"), V = ir("FeatherMenu"), U = ir("InputSubText");
  return Wa(), Sw("div", Ca(t.inherittedAttrs, { class: "feather-select-container" }), [
    Do(V, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: ar((R) => [
        Do(h, Ca({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Yp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: ar(() => [
            Nx(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: ar(() => [
            Do(d, {
              class: yx(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: ar(() => [
            kx("input", Ca(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Yp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: ar(() => [
        Do(w, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: t.label,
          options: t.options,
          "text-prop": t.textProp,
          "active-index": t.activeIndex,
          onSelect: t.handleSelect,
          onKeydown: t.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    Do(U, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var Fx = /* @__PURE__ */ Aw(Sx, [["render", Ax], ["__scopeId", "data-v-ecb32d90"]]);
const Wx = window.Vue.openBlock, Cx = window.Vue.createElementBlock, Fw = window.Vue.createElementVNode;
var xx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Bx = {}, Ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Dx = /* @__PURE__ */ Fw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), _x = /* @__PURE__ */ Fw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ox = [
  Dx,
  _x
];
function Qx(t, o) {
  return Wx(), Cx("svg", Ix, Ox);
}
var zx = /* @__PURE__ */ xx(Bx, [["render", Qx]]);
const xa = window.Vue.openBlock, Cc = window.Vue.createElementBlock, Ww = window.Vue.createElementVNode, Gx = window.Vue.defineComponent, nr = window.Vue.ref, Yx = window.Vue.provide, Pp = window.Vue.computed, Px = window.Vue.onUnmounted, Hp = window.Vue.toRef, Hx = window.Vue.resolveComponent, jx = window.Vue.Fragment, Xx = window.Vue.createBlock, Lx = window.Vue.Teleport, jp = window.Vue.createVNode, $x = window.Vue.Transition, qx = window.Vue.withCtx, Kx = window.Vue.normalizeClass, eB = window.Vue.normalizeStyle, tB = window.Vue.toDisplayString, nB = window.Vue.createCommentVNode, rB = window.Vue.renderSlot, dc = window.Vue.nextTick;
var Cw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const oB = {}, iB = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, aB = /* @__PURE__ */ Ww("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), sB = [
  aB
];
function lB(t, o) {
  return xa(), Cc("svg", iB, sB);
}
var cB = /* @__PURE__ */ Cw(oB, [["render", lB]]), _e = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(_e || {}), vn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(vn || {});
const uB = (t, o, r, a = 9) => {
  const l = window.innerHeight - t.bottom, c = window.innerWidth - t.right, d = [];
  t.top >= o.height + a && d.push(_e.top), l >= o.height + a && d.push(_e.bottom);
  const h = [];
  c >= o.width + a && h.push(_e.right), t.left >= o.width + a && h.push(_e.left);
  let w = [...h, ...d];
  return (r === _e.top || r === _e.bottom) && (w = [...d, ...h]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, dB = (t, o, r, a, l = 28) => {
  if (t === _e.left || t === _e.right)
    return vn.center;
  const c = o.left + o.width / 2, d = window.innerWidth - o.right, h = [], w = c, V = d + o.width / 2, U = r.width - l, R = r.width / 2;
  return w >= R && V >= R && h.push(vn.center), V >= U && h.push(vn.left), w >= U && h.push(vn.right), h.indexOf(a) > -1 ? a : h.length ? h[0] : a;
}, fB = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => _e.top
  },
  pointerAlignment: {
    type: String,
    default: () => vn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, hB = Gx({
  props: fB,
  setup(t) {
    const o = nr(!1), r = nr(!1), a = ae("feather-tooltip-trigger"), l = ae("feather-tooltip"), c = "data-feather-tooltip";
    Yx("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      eo(d), o.value || (d = Kr(C, t.enterDelay));
    }, w = () => {
      eo(d), d = Kr(D, t.exitDelay);
    }, V = (Ve) => {
      Ve.keyCode === K.ESCAPE && (Ve.preventDefault(), D(!0));
    }, U = Pp(() => ({
      [c]: a,
      "aria-describedby": l
    })), R = {
      mouseenter: h,
      mouseleave: w,
      focus: h,
      blur: w,
      keydown: V
    }, y = nr(document), F = dw(y, () => D(!0));
    Px(() => D(!0));
    const S = () => document.getElementById(l), C = () => {
      r.value = !1, o.value = !0, dc(() => {
        const Ve = S();
        se(Ve), o.value = !1, dc(() => {
          r.value = !0, o.value = !0, F.value = !0;
        });
      });
    }, D = (Ve = !1) => {
      W.value = "", b.value = "", A.value = "", O.value = "", o.value = !1, Ve && (r.value = !1), F.value = !1;
    }, E = Hp(t, "placement"), B = Hp(t, "pointerAlignment"), x = 8, P = 24, b = nr(""), W = nr(""), A = nr(""), O = nr(""), he = Pp(() => O.value ? "p-" + O.value : !1), se = (Ve) => {
      const Te = document.querySelector(`[${c}=${a}]`);
      if (!Te) {
        console.log("trigger not found");
        return;
      }
      dc(() => {
        const Re = Te.getBoundingClientRect(), Ze = Ve.getBoundingClientRect(), ue = uB(Re, Ze, E.value, x), xe = dB(ue, Re, Ze, B.value, P);
        A.value = xe.toString(), O.value = ue.toString();
        let Be = 0, Xe = 0;
        if ((ue === _e.left || ue === _e.right) && (Be = Re.top + Re.height / 2 - Ze.height / 2, ue === _e.left && (Xe = Re.left - Ze.width - x), ue === _e.right && (Xe = Re.right)), ue === _e.top || ue === _e.bottom) {
          Be = Re.top - Ze.height - x, ue === _e.bottom && (Be = Re.bottom);
          const io = Re.left + Re.width / 2;
          switch (xe) {
            case vn.center:
              Xe = io - Ze.width / 2;
              break;
            case vn.left:
              Xe = io - P;
              break;
            case vn.right:
              Xe = io - Ze.width + P;
              break;
          }
        }
        b.value = Be.toString() + "px", W.value = Xe.toString() + "px";
      });
    };
    return {
      attrs: U,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: A,
      placementClass: he,
      top: b,
      left: W,
      tooltipID: l
    };
  },
  components: {
    Pointer: cB
  }
}), pB = ["id"];
function mB(t, o, r, a, l, c) {
  const d = Hx("Pointer");
  return xa(), Cc(jx, null, [
    (xa(), Xx(Lx, { to: "body" }, [
      jp($x, { css: t.animate }, {
        default: qx(() => [
          t.show ? (xa(), Cc("div", {
            key: 0,
            class: Kx(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: eB({ left: t.left, top: t.top })
          }, [
            Ww("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, tB(t.title), 9, pB),
            jp(d, { class: "tooltip-pointer" })
          ], 6)) : nB("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    rB(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Xp = /* @__PURE__ */ Cw(hB, [["render", mB], ["__scopeId", "data-v-3da6b22e"]]);
const wB = window.Vue.defineComponent, fc = window.Vue.normalizeStyle, hc = window.Vue.createElementVNode, _o = window.Vue.unref, Lp = window.Vue.toHandlers, $p = window.Vue.mergeProps, qp = window.Vue.withCtx, Kp = window.Vue.createVNode, vB = window.Vue.renderList, VB = window.Vue.Fragment, Oo = window.Vue.openBlock, Qo = window.Vue.createElementBlock, em = window.Vue.normalizeClass, tm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TB = { class: "row" }, gB = /* @__PURE__ */ wB({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(t) {
    const o = t, r = new Date().getTime(), a = (c, d) => c ? (Number(d) - Number(c)) * o.proportion : 0, l = (c) => c ? (Number(c) - Number(o.minStart)) * o.proportion : 0;
    return (c, d) => (Oo(), Qo("div", TB, [
      hc("div", {
        class: "line-gray",
        style: fc({
          width: l(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Kp(_o(Xp), {
        title: _o($t)(t.alarm.firstEventTime)
      }, {
        default: qp(({ attrs: h, on: w }) => [
          hc("div", $p({ class: "circle" }, h, Lp(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Oo(!0), Qo(VB, null, vB(o.events, (h, w) => (Oo(), Qo("div", {
        class: "event-trim",
        key: h.id
      }, [
        o.events[w + 1] ? (Oo(), Qo("div", {
          key: 0,
          class: em(["line", [`${h.severity.toLowerCase()}-bg dark`]]),
          style: fc({
            width: a(h.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : tm("", !0),
        Kp(_o(Xp), {
          title: _o($t)(t.alarm.firstEventTime)
        }, {
          default: qp(({ attrs: V, on: U }) => [
            o.events[w + 1] ? (Oo(), Qo("div", $p({ key: 0 }, V, Lp(U), {
              class: ["event", [`${h.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : tm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      hc("div", {
        class: em(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: fc({
          width: a(t.events[t.events.length - 1].createTime, _o(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const UB = /* @__PURE__ */ Ue(gB, [["__scopeId", "data-v-3341d12d"]]), RB = window.Vue.openBlock, NB = window.Vue.createElementBlock, xw = window.Vue.createElementVNode;
var yB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const kB = {}, MB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZB = /* @__PURE__ */ xw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), bB = /* @__PURE__ */ xw("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), JB = [
  ZB,
  bB
];
function EB(t, o) {
  return RB(), NB("svg", MB, JB);
}
var SB = /* @__PURE__ */ yB(kB, [["render", EB]]);
const AB = window.Vue.defineComponent, xc = window.Vue.createElementVNode, FB = window.Vue.renderList, nm = window.Vue.Fragment, pc = window.Vue.openBlock, mc = window.Vue.createElementBlock, WB = window.Vue.normalizeClass, CB = window.Vue.unref, rm = window.Vue.toDisplayString, xB = window.Vue.pushScopeId, BB = window.Vue.popScopeId, IB = (t) => (xB("data-v-2e087f7b"), t = t(), BB(), t), DB = /* @__PURE__ */ IB(() => /* @__PURE__ */ xc("strong", null, "Events:", -1)), _B = /* @__PURE__ */ AB({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (pc(), mc(nm, null, [
      DB,
      (pc(!0), mc(nm, null, FB(o.events, (l) => (pc(), mc("div", {
        class: "event-description",
        key: l.id
      }, [
        xc("div", {
          class: WB(["mark", [`${l.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        xc("div", null, rm(CB($t)(l.createTime)) + " - " + rm(l.source), 1)
      ]))), 128))
    ], 64));
  }
});
const OB = /* @__PURE__ */ Ue(_B, [["__scopeId", "data-v-2e087f7b"]]), QB = window.Vue.defineComponent, zB = window.Vue.normalizeClass, wt = window.Vue.createElementVNode, Qr = window.Vue.toDisplayString, ot = window.Vue.unref, zr = window.Vue.createVNode, Bw = window.Vue.createTextVNode, GB = window.Vue.renderList, om = window.Vue.Fragment, dn = window.Vue.openBlock, rr = window.Vue.createElementBlock, im = window.Vue.createBlock, Za = window.Vue.createCommentVNode, YB = window.Vue.normalizeStyle, PB = window.Vue.pushScopeId, HB = window.Vue.popScopeId, jB = (t) => (PB("data-v-01717d0d"), t = t(), HB(), t), XB = { class: "section detail" }, LB = { class: "id" }, $B = {
  key: 0,
  class: "section"
}, qB = /* @__PURE__ */ jB(() => /* @__PURE__ */ wt("div", { class: "id" }, "Alarms", -1)), KB = { class: "action-btns" }, e3 = { class: "zoom" }, t3 = /* @__PURE__ */ Bw(" Zoom "), n3 = { class: "times" }, r3 = {
  key: 0,
  class: "timeline-container"
}, o3 = { class: "alarm-id" }, i3 = {
  key: 0,
  class: "panel"
}, Wn = window.Vue.ref, a3 = window.Vue.watch, s3 = /* @__PURE__ */ QB({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var P, b;
    const o = t, r = dr(), a = Wn(0), l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Wn(l[0]), d = Wn(o.width), h = Wn(o.width), w = Wn(new Date().getTime()), V = () => {
      var W, A;
      if (!o.situation.events) {
        const O = (A = (W = o.situation) == null ? void 0 : W.alarms) == null ? void 0 : A.map((he) => he.id);
        r.getEvents(o.situation.id, O);
      }
    };
    V();
    const U = () => (w.value = new Date().getTime(), d.value / (Number(w.value) - Number(y.value))), R = Wn(o.situation.alarms), y = Wn(
      ((b = we.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : b.firstEventTime) || new Date().getTime()
    ), F = Wn(U());
    a3(o, () => {
      var W, A;
      y.value = ((A = we.exports.minBy((W = o.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : A.firstEventTime) || new Date().getTime(), V(), d.value = h.value, F.value = U(), R.value = o.situation.alarms, c.value = l[0];
    });
    const S = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (R.value = o.situation.alarms), (W == null ? void 0 : W.id) === 2) {
        const A = we.exports.groupBy(R.value, "severity"), O = [
          ...A.CRITICAL || [],
          ...A.MAJOR || [],
          ...A.MINOR || [],
          ...A.WARNING || [],
          ...A.NORMAL || [],
          ...A.CLEARED || [],
          ...A.INDETERMINATE || []
        ];
        R.value = O.filter((he) => he);
      }
      if ((W == null ? void 0 : W.id) === 3) {
        const A = we.exports.reverse(
          we.exports.sortBy(
            o.situation.alarms,
            (O) => Number(O.lastEventTime) - Number(O.firstEventTime)
          )
        );
        R.value = A;
      }
    }, C = () => {
      d.value += 100, F.value = U();
    }, D = () => {
      d.value -= 100, F.value = U();
    }, E = () => {
      d.value = h.value, F.value = U();
    }, B = (W) => {
      a.value = W;
    }, x = () => {
      a.value = 0;
    };
    return (W, A) => {
      var O, he;
      return dn(), rr(om, null, [
        wt("div", XB, [
          wt("div", {
            class: zB(["severity-line", [`${(he = (O = o.situation) == null ? void 0 : O.severity) == null ? void 0 : he.toLowerCase()}-bg dark`]])
          }, null, 2),
          wt("div", null, [
            wt("div", LB, "Situation " + Qr(o.situation.id), 1),
            wt("div", null, " Duration: " + Qr(ot(cM)(w.value, new Date(y.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (dn(), rr("div", $B, [
          qB,
          wt("div", KB, [
            zr(ot(Fx), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: c.value,
              "onUpdate:modelValue": [
                A[0] || (A[0] = (se) => c.value = se),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            wt("div", e3, [
              t3,
              wt("div", null, [
                zr(ot($), {
                  icon: ot(zx),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"]),
                zr(ot($), {
                  icon: ot(cw),
                  class: "zoom-icon",
                  onClick: E
                }, null, 8, ["icon"]),
                zr(ot($), {
                  icon: ot(SB),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          h.value ? (dn(), rr("div", {
            key: 0,
            class: "alarms",
            style: YB({
              width: h.value + 50 + "px"
            })
          }, [
            wt("div", n3, [
              wt("div", null, Qr(ot($t)(y.value)), 1),
              wt("div", null, Qr(ot($t)(w.value)), 1)
            ]),
            t.situation.events ? (dn(), rr("div", r3, [
              (dn(!0), rr(om, null, GB(R.value, (se) => (dn(), rr("div", {
                class: "timeline",
                key: se.id
              }, [
                wt("div", o3, [
                  Bw(Qr(se.nodeLabel) + " - " + Qr(se.id) + " ", 1),
                  a.value === se.id ? (dn(), im(ot($), {
                    key: 0,
                    icon: ot(eu),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (dn(), im(ot($), {
                    key: 1,
                    icon: ot(ew),
                    class: "zoom-icon expand",
                    onClick: () => B(se.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                zr(UB, {
                  alarm: se,
                  proportion: F.value,
                  "min-start": y.value,
                  events: o.situation.events[se.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === se.id ? (dn(), rr("div", i3, [
                  zr(OB, {
                    events: o.situation.events[se.id]
                  }, null, 8, ["events"])
                ])) : Za("", !0)
              ]))), 128))
            ])) : Za("", !0)
          ], 4)) : Za("", !0)
        ])) : Za("", !0)
      ], 64);
    };
  }
});
const l3 = /* @__PURE__ */ Ue(s3, [["__scopeId", "data-v-01717d0d"]]), c3 = window.Vue.openBlock, u3 = window.Vue.createElementBlock, d3 = window.Vue.createElementVNode;
var f3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const h3 = {}, p3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, m3 = /* @__PURE__ */ d3("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), w3 = [
  m3
];
function v3(t, o) {
  return c3(), u3("svg", p3, w3);
}
var Ba = /* @__PURE__ */ f3(h3, [["render", v3]]);
const V3 = window.Vue.defineComponent, Ye = window.Vue.unref, bt = window.Vue.createVNode, ri = window.Vue.createElementVNode, fn = window.Vue.withCtx, Iw = window.Vue.createTextVNode, wc = window.Vue.openBlock, T3 = window.Vue.createBlock, am = window.Vue.createCommentVNode, sm = window.Vue.createElementBlock, g3 = window.Vue.pushScopeId, U3 = window.Vue.popScopeId, hu = (t) => (g3("data-v-6a3cc938"), t = t(), U3(), t), R3 = { id: "cont" }, N3 = { class: "btns-navigation" }, y3 = /* @__PURE__ */ hu(() => /* @__PURE__ */ ri("span", null, "Situation List", -1)), k3 = /* @__PURE__ */ hu(() => /* @__PURE__ */ ri("span", null, "Show Previous Situation ", -1)), M3 = /* @__PURE__ */ hu(() => /* @__PURE__ */ ri("span", null, "Show Next Situation", -1)), Z3 = {
  key: 0,
  class: "detail"
}, b3 = /* @__PURE__ */ Iw("Details"), J3 = /* @__PURE__ */ Iw("Metrics"), ba = window.Vue.ref, lm = window.Vue.watch, E3 = window.Vue.onMounted, S3 = window.VueRouter.useRouter, A3 = window.VueRouter.useRoute, F3 = /* @__PURE__ */ V3({
  __name: "SituationDetail",
  setup(t) {
    const o = S3(), r = A3(), a = parseInt(r.params.id), l = ba(a), c = dr();
    c.getSituation(l.value), c.situations.length || c.getSituations();
    const d = ba(), h = ba(), w = ba(
      c.filteredSituations.findIndex((R) => R === l.value)
    );
    lm(
      () => c.situationDetail,
      () => {
        d.value = c.situationDetail;
      }
    ), E3(() => {
      var y;
      const R = ((y = document.getElementById("cont")) == null ? void 0 : y.getBoundingClientRect().width) || 1200;
      h.value = R - 90;
    });
    const V = () => {
      o.push({
        name: "situations"
      });
    }, U = (R) => {
      const y = w.value, F = c.filteredSituations[y + R];
      o.push({
        name: "situationDetail",
        params: {
          id: F
        }
      });
    };
    return lm(r, () => {
      l.value = parseInt(r.params.id), c.getSituation(l.value), w.value = c.filteredSituations.findIndex((R) => R == l.value);
    }), (R, y) => (wc(), sm("div", R3, [
      ri("div", N3, [
        bt(Ye(We), {
          primary: "",
          onClick: y[0] || (y[0] = () => V())
        }, {
          default: fn(() => [
            bt(Ye($), {
              icon: Ye(Ba),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            y3
          ]),
          _: 1
        }),
        ri("div", null, [
          bt(Ye(We), {
            disabled: !Ye(c).filteredSituations[w.value - 1],
            primary: "",
            onClick: y[1] || (y[1] = () => U(-1))
          }, {
            default: fn(() => [
              bt(Ye($), {
                icon: Ye(Ba),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              k3
            ]),
            _: 1
          }, 8, ["disabled"]),
          bt(Ye(We), {
            disabled: !Ye(c).filteredSituations[w.value + 1],
            primary: "",
            onClick: y[2] || (y[2] = () => U(1))
          }, {
            default: fn(() => [
              M3,
              bt(Ye($), {
                icon: Ye(Ba),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      d.value ? (wc(), sm("div", Z3, [
        bt(Ye(LA), null, {
          tabs: fn(() => [
            bt(Ye(hp), null, {
              default: fn(() => [
                b3
              ]),
              _: 1
            }),
            bt(Ye(hp), null, {
              default: fn(() => [
                J3
              ]),
              _: 1
            })
          ]),
          default: fn(() => [
            bt(Ye(pp), { class: "panel" }, {
              default: fn(() => [
                bt(dx, { "situation-info": d.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            bt(Ye(pp), { class: "panel" }, {
              default: fn(() => [
                h.value ? (wc(), T3(l3, {
                  key: 0,
                  situation: d.value,
                  width: h.value
                }, null, 8, ["situation", "width"])) : am("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : am("", !0)
    ]));
  }
});
const W3 = /* @__PURE__ */ Ue(F3, [["__scopeId", "data-v-6a3cc938"]]);
const Dw = window.Vue.defineComponent, vc = window.Vue.ref, C3 = window.Vue.toRef, Vc = window.Vue.inject, cm = window.Vue.watch, x3 = window.Vue.nextTick, um = window.Vue.openBlock, dm = window.Vue.createElementBlock, Tc = window.Vue.createElementVNode, B3 = window.Vue.normalizeClass, fm = window.Vue.renderSlot, hm = window.Vue.createCommentVNode, gc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var I3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const D3 = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  timeout: {
    type: Number,
    default: 4e3
  },
  error: {
    type: Boolean,
    default: !1
  }
}, _3 = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, O3 = Dw({
  emits: _3,
  props: D3,
  setup(t, o) {
    const r = vc(), a = vc(!1), l = vc(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = C3(t, "modelValue"), h = Vc("queueSnackbar", !1), w = Vc("unqueueSnackbar", !1), V = Vc("nextSnackbar", () => {
    }), U = (C, D) => {
      let E, B, x = D;
      const P = () => {
        !E || (eo(E), E = 0, x -= Date.now() - B);
      }, b = () => {
        E || (B = Date.now(), E = Kr(C, x));
      };
      return b(), { pause: P, resume: b };
    }, R = () => {
      a.value = !1, o.emit("closed"), V && V();
    }, y = (C) => {
      C.keyCode === K.ESCAPE && (l.value = !1);
    }, F = () => {
      r.value.pause();
    }, S = () => {
      l.value && r.value.resume();
    };
    return cm(d, (C) => {
      C ? x3(() => {
        h === !1 ? l.value = C : h(c, l);
      }) : w === !1 ? l.value = C : w(c);
    }, { immediate: !0 }), cm(l, (C) => {
      C ? (a.value = !0, r.value = U(() => {
        l.value = !1;
      }, t.timeout)) : (o.emit("update:modelValue", !1), F());
    }), {
      hideTimeout: r,
      contentShow: a,
      internalValue: l,
      id: c,
      incomingValue: d,
      closed: R,
      keyPressed: y,
      stopTimer: F,
      resumeTimer: S
    };
  }
}), Q3 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, z3 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, G3 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, Y3 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function P3(t, o, r, a, l, c) {
  return t.modelValue || t.contentShow ? (um(), dm("div", Q3, [
    Tc("div", {
      class: B3(["feather-snackbar", {
        "fade-in": t.internalValue,
        "fade-out": t.contentShow && !t.internalValue,
        center: t.center,
        error: t.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: o[0] || (o[0] = (...d) => t.closed && t.closed(...d)),
      onKeydown: o[1] || (o[1] = (...d) => t.keyPressed && t.keyPressed(...d)),
      onMouseover: o[2] || (o[2] = (...d) => t.stopTimer && t.stopTimer(...d)),
      onMouseleave: o[3] || (o[3] = (...d) => t.resumeTimer && t.resumeTimer(...d)),
      onFocusin: o[4] || (o[4] = (...d) => t.stopTimer && t.stopTimer(...d)),
      onFocusout: o[5] || (o[5] = (...d) => t.resumeTimer && t.resumeTimer(...d))
    }, [
      Tc("div", z3, [
        t.contentShow ? (um(), dm("div", G3, [
          fm(t.$slots, "default", {}, void 0, !0)
        ])) : hm("", !0)
      ]),
      Tc("div", Y3, [
        fm(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : hm("", !0);
}
var H3 = /* @__PURE__ */ I3(O3, [["render", P3], ["__scopeId", "data-v-5cf64a62"]]);
const j3 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
Dw({
  props: j3,
  setup() {
    let t, o = [];
    const r = () => {
      t && (t.val.value = !0);
    }, a = (d, h) => {
      const w = { id: d, val: h };
      t ? o.push(w) : (t = w, r());
    }, l = (d) => {
      (t == null ? void 0 : t.id) === d ? t.val.value = !1 : o = o.filter((h) => h.id != d);
    }, c = () => {
      o.length ? (t = o.shift(), r()) : t = void 0;
    };
    return gc("queueSnackbar", a), gc("unqueueSnackbar", l), gc("nextSnackbar", c), {
      curr: t,
      queue: o,
      showSnackbar: r,
      queueSnackbar: a,
      shiftItem: c,
      unqueueSnackbar: l
    };
  }
});
const X3 = window.Vue.defineComponent, ke = window.Vue.unref, Jt = window.Vue.createVNode, Pe = window.Vue.createElementVNode, Gr = window.Vue.withCtx, Ja = window.Vue.toDisplayString, pu = window.Vue.createTextVNode, Uc = window.Vue.normalizeClass, zo = window.Vue.openBlock, Go = window.Vue.createElementBlock, pm = window.Vue.createCommentVNode, L3 = window.Vue.renderList, $3 = window.Vue.Fragment, q3 = window.Vue.pushScopeId, K3 = window.Vue.popScopeId, vi = (t) => (q3("data-v-af4a06b2"), t = t(), K3(), t), eI = { class: "container" }, tI = /* @__PURE__ */ vi(() => /* @__PURE__ */ Pe("span", null, "Situation List", -1)), nI = /* @__PURE__ */ vi(() => /* @__PURE__ */ Pe("h2", null, "New Situation", -1)), rI = { class: "form" }, oI = { class: "fields" }, iI = /* @__PURE__ */ pu(" Total alarms added: "), aI = { class: "total" }, sI = {
  key: 0,
  class: "errorList"
}, lI = { class: "footer" }, cI = /* @__PURE__ */ vi(() => /* @__PURE__ */ Pe("span", null, "Clear", -1)), uI = /* @__PURE__ */ vi(() => /* @__PURE__ */ Pe("span", null, "Add Situation", -1)), dI = { class: "alarm-column" }, fI = /* @__PURE__ */ vi(() => /* @__PURE__ */ Pe("h4", null, "Add Unassociated Alarms", -1)), hI = {
  key: 0,
  class: "alarms"
}, pI = { class: "alarmInfo" }, mI = { class: "alarm-title" }, wI = { class: "description" }, vI = /* @__PURE__ */ pu(" Error on creating new situation :( "), VI = /* @__PURE__ */ pu("dismiss"), TI = window.VueRouter.useRouter, gI = /* @__PURE__ */ X3({
  __name: "AddSituation",
  setup(t) {
    const o = TI(), r = dr(), a = ref(), l = ref(""), c = ref(), d = ref(""), h = ref([]), w = ref(!1), V = ref(), U = ref(r.unassignedAlarms);
    U.value.length || r.getUnassignedAlarms(), watch(
      () => r.unassignedAlarms,
      () => {
        U.value = r.unassignedAlarms;
      }
    );
    const R = () => {
      o.push({
        name: "situations"
      });
    }, y = (E) => {
      E.includes("all") ? U.value = r.unassignedAlarms : U.value = r.unassignedAlarms.filter(
        (B) => E.includes(B.severity)
      );
    }, F = (E) => {
      w.value = !1, we.exports.includes(h.value, E) ? we.exports.remove(h.value, (B) => B === E) : h.value.push(E);
    }, S = () => {
      const E = "This field should not be empty";
      let B = !0;
      return a.value || (l.value = E, B = !1), c.value || (d.value = E, B = !1), h.value.length < 2 && (w.value = !0, B = !1), B;
    }, C = async () => {
      if (S()) {
        const E = {
          alarmIdList: h.value,
          diagnosticText: c.value,
          description: a.value
        };
        await Ty(E) ? o.push({
          name: "situations"
        }) : V.value = !0;
      }
    }, D = () => {
      a.value = "", c.value = "", h.value = [], U.value = r.unassignedAlarms;
    };
    return (E, B) => (zo(), Go("div", eI, [
      Jt(ke(We), {
        primary: "",
        onClick: B[0] || (B[0] = () => R()),
        class: "back-btn"
      }, {
        default: Gr(() => [
          Jt(ke($), {
            icon: ke(Ba),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          tI
        ]),
        _: 1
      }),
      nI,
      Pe("div", rI, [
        Pe("div", oI, [
          Jt(ke(Fc), {
            modelValue: a.value,
            "onUpdate:modelValue": B[1] || (B[1] = (x) => a.value = x),
            label: "Diagnostic Text",
            rows: "4",
            error: l.value
          }, null, 8, ["modelValue", "error"]),
          Jt(ke(Fc), {
            modelValue: c.value,
            "onUpdate:modelValue": B[2] || (B[2] = (x) => c.value = x),
            label: "Description",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          Pe("div", null, [
            Pe("div", {
              class: Uc(["totalAlarms", { errorList: w.value }])
            }, [
              iI,
              Pe("span", aI, Ja(ke(h).length), 1)
            ], 2),
            w.value ? (zo(), Go("div", sI, " It is required to add at least 2 alarms ")) : pm("", !0)
          ]),
          Pe("div", lI, [
            Jt(ke(We), {
              class: "btn",
              primary: "",
              onClick: D
            }, {
              default: Gr(() => [
                Jt(ke($), {
                  icon: ke(si),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                cI
              ]),
              _: 1
            }),
            Jt(ke(We), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: Gr(() => [
                Jt(ke($), {
                  icon: ke(uw),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                uI
              ]),
              _: 1
            })
          ])
        ]),
        Pe("div", dI, [
          fI,
          Jt(qc, {
            alarms: ke(r).unassignedAlarms,
            onSelectedSeverities: y
          }, null, 8, ["alarms"]),
          U.value ? (zo(), Go("div", hI, [
            (zo(!0), Go($3, null, L3(U.value, (x) => (zo(), Go("div", {
              key: x.id,
              class: Uc(["alarm", { selected: ke(we.exports.includes)(ke(h), x.id) }])
            }, [
              Pe("div", pI, [
                Pe("div", {
                  class: Uc(["triangle", [`${x.severity.toLowerCase()}`]])
                }, null, 2),
                Jt(ke(ss), {
                  modelValue: ke(we.exports.includes)(ke(h), x.id),
                  label: "selected",
                  "onUpdate:modelValue": () => F(x.id)
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                Pe("div", mI, Ja(x.nodeLabel) + " - " + Ja(x.id), 1)
              ]),
              Pe("div", wI, Ja(ke(uM)(x.description, 300)), 1)
            ], 2))), 128))
          ])) : pm("", !0)
        ])
      ]),
      Jt(ke(H3), {
        modelValue: V.value,
        "onUpdate:modelValue": B[4] || (B[4] = (x) => V.value = x),
        center: "",
        error: ""
      }, {
        button: Gr(() => [
          Jt(ke(We), {
            onClick: B[3] || (B[3] = (x) => V.value = !1),
            text: ""
          }, {
            default: Gr(() => [
              VI
            ]),
            _: 1
          })
        ]),
        default: Gr(() => [
          vI
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const UI = /* @__PURE__ */ Ue(gI, [["__scopeId", "data-v-af4a06b2"]]);
var RI = Object.defineProperty, NI = Object.defineProperties, yI = Object.getOwnPropertyDescriptors, mm = Object.getOwnPropertySymbols, kI = Object.prototype.hasOwnProperty, MI = Object.prototype.propertyIsEnumerable, wm = (t, o, r) => o in t ? RI(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Ia = (t, o) => {
  for (var r in o || (o = {}))
    kI.call(o, r) && wm(t, r, o[r]);
  if (mm)
    for (var r of mm(o))
      MI.call(o, r) && wm(t, r, o[r]);
  return t;
}, _w = (t, o) => NI(t, yI(o));
const Ow = window.Vue.defineComponent, ZI = window.Vue.ref, qo = window.Vue.computed, bI = window.Vue.reactive, vm = window.Vue.watch, Rc = window.Vue.inject, Qw = window.Vue.resolveComponent, Bc = window.Vue.openBlock, zw = window.Vue.createElementBlock, In = window.Vue.createElementVNode, JI = window.Vue.createBlock, EI = window.Vue.createCommentVNode, Gw = window.Vue.renderSlot, SI = window.Vue.pushScopeId, AI = window.Vue.popScopeId, Nc = window.Vue.toRef, Vm = window.Vue.mergeProps, FI = window.Vue.toDisplayString, WI = window.Vue.createVNode;
var Yw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const CI = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, xI = Ow({
  props: CI,
  setup(t) {
    const o = ZI(), r = () => {
      o.value.focus();
    }, a = qo(() => ae("feather-radio-button")), l = bI({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), c = qo(() => ae("radio-label-id")), d = qo(() => l.first || l.checked ? 0 : -1);
    vm(() => t.disabled, (R) => {
      l.disabled = R;
    }, { immediate: !0 }), vm(() => t.value, (R) => {
      l.value = R;
    }, { immediate: !0 });
    const h = Rc("register", (R) => {
    }), w = Rc("blur", (R) => {
    }), V = Rc("select", (R) => {
    });
    return h(l), {
      labelId: c,
      tabindex: d,
      vm: l,
      blur: w,
      click: () => {
        V(l);
      },
      input: o,
      id: a
    };
  },
  components: {
    FeatherRipple: cr
  }
}), BI = (t) => (SI("data-v-24790cf0"), t = t(), AI(), t), II = { class: "layout-container" }, DI = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], _I = { class: "radio hover focus" }, OI = /* @__PURE__ */ BI(() => /* @__PURE__ */ In("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ In("svg", { class: "dot" }, [
    /* @__PURE__ */ In("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), QI = ["id"];
function zI(t, o, r, a, l, c) {
  const d = Qw("feather-ripple");
  return Bc(), zw("div", II, [
    In("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: t.id,
      "aria-checked": t.vm.checked ? "true" : "false",
      "aria-disabled": t.vm.disabled ? "true" : "false",
      "aria-labelledby": t.labelId,
      tabindex: t.tabindex,
      onClick: o[0] || (o[0] = (...h) => t.click && t.click(...h)),
      onBlur: o[1] || (o[1] = (...h) => t.blur && t.blur(...h)),
      "data-ref-id": "feather-radio"
    }, [
      In("div", _I, [
        OI,
        t.vm.disabled ? EI("", !0) : (Bc(), JI(d, {
          key: 0,
          center: ""
        }))
      ]),
      In("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Gw(t.$slots, "default", {}, void 0, !0)
      ], 8, QI)
    ], 40, DI)
  ]);
}
var Xa = /* @__PURE__ */ Yw(xI, [["render", zI], ["__scopeId", "data-v-24790cf0"]]);
const GI = _w(Ia({}, fi), {
  label: {
    type: String,
    required: !0
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
}), YI = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, PI = Ow({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: GI,
  emits: YI,
  setup(t, o) {
    hi(t);
    const r = Nc(t, "error"), a = Nc(t, "modelValue"), l = qo(() => ae("feather-input-description")), c = qo(() => {
      const d = _w(Ia({}, o.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Ia(Ia({
      descriptionId: l,
      attrs: c
    }, ow(a, o.emit, t.label, t.schema, Nc(t, "error"))), di(o.attrs));
  },
  components: {
    InputSubText: ci
  }
}), HI = ["for"], jI = ["id"];
function XI(t, o, r, a, l, c) {
  const d = Qw("InputSubText");
  return Bc(), zw("div", Vm(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    In("label", {
      for: t.groupId,
      class: "group-label"
    }, FI(t.label), 9, HI),
    In("div", Vm(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      Gw(t.$slots, "default", {}, void 0, !0)
    ], 16, jI),
    WI(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Pw = /* @__PURE__ */ Yw(PI, [["render", XI], ["__scopeId", "data-v-6775aeb9"]]);
const LI = window.Vue.openBlock, $I = window.Vue.createElementBlock, qI = window.Vue.createStaticVNode;
var KI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const eD = {}, tD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nD = /* @__PURE__ */ qI('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), rD = [
  nD
];
function oD(t, o) {
  return LI(), $I("svg", tD, rD);
}
var iD = /* @__PURE__ */ KI(eD, [["render", oD]]);
const aD = window.Vue.openBlock, sD = window.Vue.createElementBlock, lD = window.Vue.createStaticVNode;
var cD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const uD = {}, dD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fD = /* @__PURE__ */ lD('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), hD = [
  fD
];
function pD(t, o) {
  return aD(), sD("svg", dD, hD);
}
var mD = /* @__PURE__ */ cD(uD, [["render", pD]]);
const wD = window.Vue.openBlock, vD = window.Vue.createElementBlock, VD = window.Vue.createElementVNode;
var TD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const gD = {}, UD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RD = /* @__PURE__ */ VD("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), ND = [
  RD
];
function yD(t, o) {
  return wD(), vD("svg", UD, ND);
}
var kD = /* @__PURE__ */ TD(gD, [["render", yD]]);
const MD = window.Vue.openBlock, ZD = window.Vue.createElementBlock, bD = window.Vue.createStaticVNode;
var JD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const ED = {}, SD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AD = /* @__PURE__ */ bD('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), FD = [
  AD
];
function WD(t, o) {
  return MD(), ZD("svg", SD, FD);
}
var CD = /* @__PURE__ */ JD(ED, [["render", WD]]);
const xD = window.Vue.openBlock, BD = window.Vue.createElementBlock, ID = window.Vue.createElementVNode;
var DD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const _D = {}, OD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QD = /* @__PURE__ */ ID("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), zD = [
  QD
];
function GD(t, o) {
  return xD(), BD("svg", OD, zD);
}
var YD = /* @__PURE__ */ DD(_D, [["render", GD]]);
const mu = () => window.VRouter || wu, PD = window.Vue.defineComponent, Me = window.Vue.createElementVNode, oi = window.Vue.createTextVNode, Ke = window.Vue.unref, hn = window.Vue.createVNode, Ea = window.Vue.withCtx, Tm = window.Vue.openBlock, gm = window.Vue.createElementBlock, HD = window.Vue.createCommentVNode, jD = window.Vue.pushScopeId, XD = window.Vue.popScopeId, Gt = (t) => (jD("data-v-b4b3bdcf"), t = t(), XD(), t), LD = { class: "container" }, $D = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "title" }, "ALEC", -1)), qD = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "description" }, [
  /* @__PURE__ */ oi(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Me("br"),
  /* @__PURE__ */ Me("strong", null, "Our goal"),
  /* @__PURE__ */ oi(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), KD = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("h3", null, "Key Benefits:", -1)), e_ = { class: "list" }, t_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), n_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, "Assist in root cause analysis.", -1)), r_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), o_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, "Easy configuration.", -1)), i_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), a_ = {
  key: 0,
  class: "optin"
}, s_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("h3", null, "Enable ALEC for more precise results:", -1)), l_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), c_ = { class: "choices" }, u_ = /* @__PURE__ */ Gt(() => /* @__PURE__ */ Me("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), d_ = /* @__PURE__ */ oi("Yes"), f_ = /* @__PURE__ */ oi("No"), h_ = /* @__PURE__ */ oi(" Continue "), p_ = window.Vue.ref, m_ = /* @__PURE__ */ PD({
  __name: "WelcomePage",
  setup(t) {
    const o = wi(), r = mu(), a = p_(!0), l = () => {
      const c = Boolean(a.value);
      o.savePermission(c), r.push({ name: "configuration" });
    };
    return (c, d) => (Tm(), gm("div", LD, [
      $D,
      qD,
      Me("div", null, [
        KD,
        Me("div", e_, [
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(CD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            t_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(kD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            n_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(YD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            r_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(iD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            o_
          ]),
          Me("div", null, [
            hn(Ke($), {
              icon: Ke(mD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            i_
          ])
        ])
      ]),
      Ke(o).isAdmin ? (Tm(), gm("div", a_, [
        s_,
        l_,
        Me("div", c_, [
          u_,
          hn(Ke(Pw), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            label: ""
          }, {
            default: Ea(() => [
              hn(Ke(Xa), { value: !0 }, {
                default: Ea(() => [
                  d_
                ]),
                _: 1
              }),
              hn(Ke(Xa), { value: !1 }, {
                default: Ea(() => [
                  f_
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : HD("", !0),
      hn(Ke(We), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: Ea(() => [
          h_
        ]),
        _: 1
      })
    ]));
  }
});
const w_ = /* @__PURE__ */ Ue(m_, [["__scopeId", "data-v-b4b3bdcf"]]), v_ = window.Vue.defineComponent, V_ = window.Vue.createElementVNode, T_ = window.Vue.createTextVNode, g_ = window.Vue.unref, U_ = window.Vue.withCtx, R_ = window.Vue.createVNode, N_ = window.Vue.Fragment, y_ = window.Vue.openBlock, k_ = window.Vue.createElementBlock, M_ = window.Vue.pushScopeId, Z_ = window.Vue.popScopeId, b_ = (t) => (M_("data-v-bcb7dcc6"), t = t(), Z_(), t), J_ = /* @__PURE__ */ b_(() => /* @__PURE__ */ V_("div", { class: "main" }, "Something bad is happening...", -1)), E_ = /* @__PURE__ */ T_(" Reload "), S_ = /* @__PURE__ */ v_({
  __name: "ErrorPage",
  setup(t) {
    const o = mu(), r = () => {
      o.push({ name: "situations" });
    };
    return (a, l) => (y_(), k_(N_, null, [
      J_,
      R_(g_(We), {
        primary: "",
        onClick: r
      }, {
        default: U_(() => [
          E_
        ]),
        _: 1
      })
    ], 64));
  }
});
const A_ = /* @__PURE__ */ Ue(S_, [["__scopeId", "data-v-bcb7dcc6"]]), F_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", W_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", C_ = window.Vue.defineComponent, Ce = window.Vue.createElementVNode, Ic = window.Vue.createTextVNode, Cn = window.Vue.unref, Yo = window.Vue.withCtx, Po = window.Vue.createVNode, x_ = window.Vue.openBlock, B_ = window.Vue.createElementBlock, I_ = window.Vue.pushScopeId, D_ = window.Vue.popScopeId, hr = (t) => (I_("data-v-9a5b5f4e"), t = t(), D_(), t), __ = { class: "container" }, O_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("h2", null, "Configuration", -1)), Q_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("p", null, [
  /* @__PURE__ */ Ic(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ce("br"),
  /* @__PURE__ */ Ic(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ce("strong", null, [
    /* @__PURE__ */ Ce("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), z_ = { class: "radio-content" }, G_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("strong", { class: "title" }, "Clustering", -1)), Y_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), P_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("img", {
  class: "img",
  src: F_
}, null, -1)), H_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ce("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ce("br"),
  /* @__PURE__ */ Ce("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), j_ = /* @__PURE__ */ hr(() => /* @__PURE__ */ Ce("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ce("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ce("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ce("img", {
    class: "img img2",
    src: W_
  })
], -1)), X_ = /* @__PURE__ */ Ic(" Continue "), Um = window.Vue.ref, L_ = /* @__PURE__ */ C_({
  __name: "ConfigurationPage",
  setup(t) {
    const o = wi(), r = mu(), a = Um(!1), l = Um(vt.ENGINE_DBSCAN), c = () => {
      zm(o.allowSave), vy(l.value, a.value), r.push({ name: "situations" });
    };
    return (d, h) => (x_(), B_("div", __, [
      O_,
      Q_,
      Ce("div", null, [
        Po(Cn(Pw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": h[1] || (h[1] = (w) => l.value = w)
        }, {
          default: Yo(() => [
            Po(Cn(Xa), {
              class: "radio",
              value: Cn(vt).ENGINE_DBSCAN
            }, {
              default: Yo(() => [
                Ce("div", z_, [
                  G_,
                  Y_,
                  P_,
                  Po(Cn(ss), {
                    modelValue: a.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
                    disabled: l.value !== Cn(vt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Yo(() => [
                      H_
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Po(Cn(Xa), {
              class: "radio",
              value: Cn(vt).ENGINE_DEEP_LEARNING
            }, {
              default: Yo(() => [
                j_
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Po(Cn(We), {
        primary: "",
        class: "btn",
        onClick: h[2] || (h[2] = () => c())
      }, {
        default: Yo(() => [
          X_
        ]),
        _: 1
      })
    ]));
  }
});
const $_ = /* @__PURE__ */ Ue(L_, [["__scopeId", "data-v-9a5b5f4e"]]), q_ = window.VueRouter.createRouter, K_ = window.VueRouter.createWebHistory, yc = async () => {
  const t = window.VRouter || wu, o = wi();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, Hw = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || wu, r = wi();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => yc(),
    component: w_
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => yc(),
    component: $_
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => yc(),
    component: pA
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: W3
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: UI
  },
  {
    path: "/error",
    name: "error",
    component: A_
  }
], Rm = window.VRouter;
if (Rm)
  for (const t of Hw) {
    const { path: o, name: r, component: a, beforeEnter: l } = t;
    Rm.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const wu = q_({
  history: K_(),
  routes: Hw
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = HR;
