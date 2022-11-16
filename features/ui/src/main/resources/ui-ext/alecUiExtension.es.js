const Ue = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
}, _R = {}, OR = window.Vue.resolveComponent, QR = window.Vue.createVNode, zR = window.Vue.openBlock, GR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const YR = { class: "main" };
function PR(t, o) {
  const r = OR("router-view");
  return zR(), GR("div", YR, [
    QR(r)
  ]);
}
const HR = /* @__PURE__ */ Ue(_R, [["render", PR], ["__scopeId", "data-v-5d32d140"]]), jR = window.Vue.defineComponent, XR = window.Vue.openBlock, LR = window.Vue.createBlock, $R = /* @__PURE__ */ jR({
  __name: "App",
  setup(t) {
    return (o, r) => (XR(), LR(HR));
  }
});
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Mm = { exports: {} }, Gc = { exports: {} }, Zm = function(o, r) {
  return function() {
    for (var s = new Array(arguments.length), u = 0; u < s.length; u++)
      s[u] = arguments[u];
    return o.apply(r, s);
  };
}, KR = Zm, Yc = Object.prototype.toString, Pc = function(t) {
  return function(o) {
    var r = Yc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function fr(t) {
  return t = t.toLowerCase(), function(r) {
    return Pc(r) === t;
  };
}
function Hc(t) {
  return Array.isArray(t);
}
function _a(t) {
  return typeof t > "u";
}
function eN(t) {
  return t !== null && !_a(t) && t.constructor !== null && !_a(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var bm = fr("ArrayBuffer");
function tN(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && bm(t.buffer), o;
}
function nN(t) {
  return typeof t == "string";
}
function rN(t) {
  return typeof t == "number";
}
function Jm(t) {
  return t !== null && typeof t == "object";
}
function Aa(t) {
  if (Pc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var oN = fr("Date"), iN = fr("File"), aN = fr("Blob"), sN = fr("FileList");
function jc(t) {
  return Yc.call(t) === "[object Function]";
}
function lN(t) {
  return Jm(t) && jc(t.pipe);
}
function cN(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Yc.call(t) === o || jc(t.toString) && t.toString() === o);
}
var uN = fr("URLSearchParams");
function dN(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function fN() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Xc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Hc(t))
      for (var r = 0, a = t.length; r < a; r++)
        o.call(null, t[r], r, t);
    else
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && o.call(null, t[s], s, t);
}
function Ec() {
  var t = {};
  function o(s, u) {
    Aa(t[u]) && Aa(s) ? t[u] = Ec(t[u], s) : Aa(s) ? t[u] = Ec({}, s) : Hc(s) ? t[u] = s.slice() : t[u] = s;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Xc(arguments[r], o);
  return t;
}
function hN(t, o, r) {
  return Xc(o, function(s, u) {
    r && typeof s == "function" ? t[u] = KR(s, r) : t[u] = s;
  }), t;
}
function pN(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function mN(t, o, r, a) {
  t.prototype = Object.create(o.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function wN(t, o, r) {
  var a, s, u, d = {};
  o = o || {};
  do {
    for (a = Object.getOwnPropertyNames(t), s = a.length; s-- > 0; )
      u = a[s], d[u] || (o[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function vN(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var a = t.indexOf(o, r);
  return a !== -1 && a === r;
}
function VN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (_a(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var TN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Qe = {
  isArray: Hc,
  isArrayBuffer: bm,
  isBuffer: eN,
  isFormData: cN,
  isArrayBufferView: tN,
  isString: nN,
  isNumber: rN,
  isObject: Jm,
  isPlainObject: Aa,
  isUndefined: _a,
  isDate: oN,
  isFile: iN,
  isBlob: aN,
  isFunction: jc,
  isStream: lN,
  isURLSearchParams: uN,
  isStandardBrowserEnv: fN,
  forEach: Xc,
  merge: Ec,
  extend: hN,
  trim: dN,
  stripBOM: pN,
  inherits: mN,
  toFlatObject: wN,
  kindOf: Pc,
  kindOfTest: fr,
  endsWith: vN,
  toArray: VN,
  isTypedArray: TN,
  isFileList: sN
}, Ar = Qe;
function eh(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Em = function(o, r, a) {
  if (!r)
    return o;
  var s;
  if (a)
    s = a(r);
  else if (Ar.isURLSearchParams(r))
    s = r.toString();
  else {
    var u = [];
    Ar.forEach(r, function(w, V) {
      w === null || typeof w > "u" || (Ar.isArray(w) ? V = V + "[]" : w = [w], Ar.forEach(w, function(R) {
        Ar.isDate(R) ? R = R.toISOString() : Ar.isObject(R) && (R = JSON.stringify(R)), u.push(eh(V) + "=" + eh(R));
      }));
    }), s = u.join("&");
  }
  if (s) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return o;
}, gN = Qe;
function $a() {
  this.handlers = [];
}
$a.prototype.use = function(o, r, a) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
$a.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
$a.prototype.forEach = function(o) {
  gN.forEach(this.handlers, function(a) {
    a !== null && o(a);
  });
};
var UN = $a, RN = Qe, NN = function(o, r) {
  RN.forEach(o, function(s, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = s, delete o[u]);
  });
}, Sm = Qe;
function $r(t, o, r, a, s) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), a && (this.request = a), s && (this.response = s);
}
Sm.inherits($r, Error, {
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
var Am = $r.prototype, Fm = {};
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
  Fm[t] = { value: t };
});
Object.defineProperties($r, Fm);
Object.defineProperty(Am, "isAxiosError", { value: !0 });
$r.from = function(t, o, r, a, s, u) {
  var d = Object.create(Am);
  return Sm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), $r.call(d, t.message, o, r, a, s), d.name = t.name, u && Object.assign(d, u), d;
};
var no = $r, Wm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _t = Qe;
function yN(t, o) {
  o = o || new FormData();
  var r = [];
  function a(u) {
    return u === null ? "" : _t.isDate(u) ? u.toISOString() : _t.isArrayBuffer(u) || _t.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function s(u, d) {
    if (_t.isPlainObject(u) || _t.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(u), _t.forEach(u, function(w, V) {
        if (!_t.isUndefined(w)) {
          var U = d ? d + "." + V : V, R;
          if (w && !d && typeof w == "object") {
            if (_t.endsWith(V, "{}"))
              w = JSON.stringify(w);
            else if (_t.endsWith(V, "[]") && (R = _t.toArray(w))) {
              R.forEach(function(N) {
                !_t.isUndefined(N) && o.append(U, a(N));
              });
              return;
            }
          }
          s(w, U);
        }
      }), r.pop();
    } else
      o.append(d, a(u));
  }
  return s(t), o;
}
var Cm = yN, Al, th;
function kN() {
  if (th)
    return Al;
  th = 1;
  var t = no;
  return Al = function(r, a, s) {
    var u = s.config.validateStatus;
    !s.status || !u || u(s.status) ? r(s) : a(new t(
      "Request failed with status code " + s.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, Al;
}
var Fl, nh;
function MN() {
  if (nh)
    return Fl;
  nh = 1;
  var t = Qe;
  return Fl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, s, u, d, h, w) {
        var V = [];
        V.push(a + "=" + encodeURIComponent(s)), t.isNumber(u) && V.push("expires=" + new Date(u).toGMTString()), t.isString(d) && V.push("path=" + d), t.isString(h) && V.push("domain=" + h), w === !0 && V.push("secure"), document.cookie = V.join("; ");
      },
      read: function(a) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
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
  }(), Fl;
}
var ZN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, bN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, JN = ZN, EN = bN, xm = function(o, r) {
  return o && !JN(r) ? EN(o, r) : r;
}, Wl, rh;
function SN() {
  if (rh)
    return Wl;
  rh = 1;
  var t = Qe, o = [
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
  return Wl = function(a) {
    var s = {}, u, d, h;
    return a && t.forEach(a.split(`
`), function(V) {
      if (h = V.indexOf(":"), u = t.trim(V.substr(0, h)).toLowerCase(), d = t.trim(V.substr(h + 1)), u) {
        if (s[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? s[u] = (s[u] ? s[u] : []).concat([d]) : s[u] = s[u] ? s[u] + ", " + d : d;
      }
    }), s;
  }, Wl;
}
var Cl, oh;
function AN() {
  if (oh)
    return Cl;
  oh = 1;
  var t = Qe;
  return Cl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), s;
    function u(d) {
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
    return s = u(window.location.href), function(h) {
      var w = t.isString(h) ? u(h) : h;
      return w.protocol === s.protocol && w.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Cl;
}
var xl, ih;
function qa() {
  if (ih)
    return xl;
  ih = 1;
  var t = no, o = Qe;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), xl = r, xl;
}
var Bl, ah;
function FN() {
  return ah || (ah = 1, Bl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Bl;
}
var Il, sh;
function lh() {
  if (sh)
    return Il;
  sh = 1;
  var t = Qe, o = kN(), r = MN(), a = Em, s = xm, u = SN(), d = AN(), h = Wm, w = no, V = qa(), U = FN();
  return Il = function(N) {
    return new Promise(function(J, F) {
      var B = N.data, A = N.headers, C = N.responseType, W;
      function I() {
        N.cancelToken && N.cancelToken.unsubscribe(W), N.signal && N.signal.removeEventListener("abort", W);
      }
      t.isFormData(B) && t.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (N.auth) {
        var _ = N.auth.username || "", Q = N.auth.password ? unescape(encodeURIComponent(N.auth.password)) : "";
        A.Authorization = "Basic " + btoa(_ + ":" + Q);
      }
      var z = s(N.baseURL, N.url);
      k.open(N.method.toUpperCase(), a(z, N.params, N.paramsSerializer), !0), k.timeout = N.timeout;
      function we() {
        if (!!k) {
          var Te = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, Re = !C || C === "text" || C === "json" ? k.responseText : k.response, Ze = {
            data: Re,
            status: k.status,
            statusText: k.statusText,
            headers: Te,
            config: N,
            request: k
          };
          o(function(Be) {
            J(Be), I();
          }, function(Be) {
            F(Be), I();
          }, Ze), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = we : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(we);
      }, k.onabort = function() {
        !k || (F(new w("Request aborted", w.ECONNABORTED, N, k)), k = null);
      }, k.onerror = function() {
        F(new w("Network Error", w.ERR_NETWORK, N, k, k)), k = null;
      }, k.ontimeout = function() {
        var Re = N.timeout ? "timeout of " + N.timeout + "ms exceeded" : "timeout exceeded", Ze = N.transitional || h;
        N.timeoutErrorMessage && (Re = N.timeoutErrorMessage), F(new w(
          Re,
          Ze.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          N,
          k
        )), k = null;
      }, t.isStandardBrowserEnv()) {
        var de = (N.withCredentials || d(z)) && N.xsrfCookieName ? r.read(N.xsrfCookieName) : void 0;
        de && (A[N.xsrfHeaderName] = de);
      }
      "setRequestHeader" in k && t.forEach(A, function(Re, Ze) {
        typeof B > "u" && Ze.toLowerCase() === "content-type" ? delete A[Ze] : k.setRequestHeader(Ze, Re);
      }), t.isUndefined(N.withCredentials) || (k.withCredentials = !!N.withCredentials), C && C !== "json" && (k.responseType = N.responseType), typeof N.onDownloadProgress == "function" && k.addEventListener("progress", N.onDownloadProgress), typeof N.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", N.onUploadProgress), (N.cancelToken || N.signal) && (W = function(Te) {
        !k || (F(!Te || Te && Te.type ? new V() : Te), k.abort(), k = null);
      }, N.cancelToken && N.cancelToken.subscribe(W), N.signal && (N.signal.aborted ? W() : N.signal.addEventListener("abort", W))), B || (B = null);
      var Ve = U(z);
      if (Ve && ["http", "https", "file"].indexOf(Ve) === -1) {
        F(new w("Unsupported protocol " + Ve + ":", w.ERR_BAD_REQUEST, N));
        return;
      }
      k.send(B);
    });
  }, Il;
}
var Dl, ch;
function WN() {
  return ch || (ch = 1, Dl = null), Dl;
}
var Ce = Qe, uh = NN, dh = no, CN = Wm, xN = Cm, BN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function fh(t, o) {
  !Ce.isUndefined(t) && Ce.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function IN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = lh()), t;
}
function DN(t, o, r) {
  if (Ce.isString(t))
    try {
      return (o || JSON.parse)(t), Ce.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var Ka = {
  transitional: CN,
  adapter: IN(),
  transformRequest: [function(o, r) {
    if (uh(r, "Accept"), uh(r, "Content-Type"), Ce.isFormData(o) || Ce.isArrayBuffer(o) || Ce.isBuffer(o) || Ce.isStream(o) || Ce.isFile(o) || Ce.isBlob(o))
      return o;
    if (Ce.isArrayBufferView(o))
      return o.buffer;
    if (Ce.isURLSearchParams(o))
      return fh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var a = Ce.isObject(o), s = r && r["Content-Type"], u;
    if ((u = Ce.isFileList(o)) || a && s === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return xN(u ? { "files[]": o } : o, d && new d());
    } else if (a || s === "application/json")
      return fh(r, "application/json"), DN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ka.transitional, a = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || s && Ce.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (u)
          throw d.name === "SyntaxError" ? dh.from(d, dh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: WN()
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
Ce.forEach(["delete", "get", "head"], function(o) {
  Ka.headers[o] = {};
});
Ce.forEach(["post", "put", "patch"], function(o) {
  Ka.headers[o] = Ce.merge(BN);
});
var Lc = Ka, _N = Qe, ON = Lc, QN = function(o, r, a) {
  var s = this || ON;
  return _N.forEach(a, function(d) {
    o = d.call(s, o, r);
  }), o;
}, _l, hh;
function Bm() {
  return hh || (hh = 1, _l = function(o) {
    return !!(o && o.__CANCEL__);
  }), _l;
}
var ph = Qe, Ol = QN, zN = Bm(), GN = Lc, YN = qa();
function Ql(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new YN();
}
var PN = function(o) {
  Ql(o), o.headers = o.headers || {}, o.data = Ol.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = ph.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), ph.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete o.headers[s];
    }
  );
  var r = o.adapter || GN.adapter;
  return r(o).then(function(s) {
    return Ql(o), s.data = Ol.call(
      o,
      s.data,
      s.headers,
      o.transformResponse
    ), s;
  }, function(s) {
    return zN(s) || (Ql(o), s && s.response && (s.response.data = Ol.call(
      o,
      s.response.data,
      s.response.headers,
      o.transformResponse
    ))), Promise.reject(s);
  });
}, mt = Qe, Im = function(o, r) {
  r = r || {};
  var a = {};
  function s(U, R) {
    return mt.isPlainObject(U) && mt.isPlainObject(R) ? mt.merge(U, R) : mt.isPlainObject(R) ? mt.merge({}, R) : mt.isArray(R) ? R.slice() : R;
  }
  function u(U) {
    if (mt.isUndefined(r[U])) {
      if (!mt.isUndefined(o[U]))
        return s(void 0, o[U]);
    } else
      return s(o[U], r[U]);
  }
  function d(U) {
    if (!mt.isUndefined(r[U]))
      return s(void 0, r[U]);
  }
  function h(U) {
    if (mt.isUndefined(r[U])) {
      if (!mt.isUndefined(o[U]))
        return s(void 0, o[U]);
    } else
      return s(void 0, r[U]);
  }
  function w(U) {
    if (U in r)
      return s(o[U], r[U]);
    if (U in o)
      return s(void 0, o[U]);
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
  return mt.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var N = V[R] || u, S = N(R);
    mt.isUndefined(S) && N !== w || (a[R] = S);
  }), a;
}, zl, mh;
function Dm() {
  return mh || (mh = 1, zl = {
    version: "0.27.2"
  }), zl;
}
var HN = Dm().version, Dn = no, $c = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  $c[t] = function(a) {
    return typeof a === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var wh = {};
$c.transitional = function(o, r, a) {
  function s(u, d) {
    return "[Axios v" + HN + "] Transitional option '" + u + "'" + d + (a ? ". " + a : "");
  }
  return function(u, d, h) {
    if (o === !1)
      throw new Dn(
        s(d, " has been removed" + (r ? " in " + r : "")),
        Dn.ERR_DEPRECATED
      );
    return r && !wh[d] && (wh[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, d, h) : !0;
  };
};
function jN(t, o, r) {
  if (typeof t != "object")
    throw new Dn("options must be an object", Dn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), s = a.length; s-- > 0; ) {
    var u = a[s], d = o[u];
    if (d) {
      var h = t[u], w = h === void 0 || d(h, u, t);
      if (w !== !0)
        throw new Dn("option " + u + " must be " + w, Dn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Dn("Unknown option " + u, Dn.ERR_BAD_OPTION);
  }
}
var XN = {
  assertOptions: jN,
  validators: $c
}, _m = Qe, LN = Em, vh = UN, Vh = PN, es = Im, $N = xm, Om = XN, Fr = Om.validators;
function qr(t) {
  this.defaults = t, this.interceptors = {
    request: new vh(),
    response: new vh()
  };
}
qr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = es(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Om.assertOptions(a, {
    silentJSONParsing: Fr.transitional(Fr.boolean),
    forcedJSONParsing: Fr.transitional(Fr.boolean),
    clarifyTimeoutError: Fr.transitional(Fr.boolean)
  }, !1);
  var s = [], u = !0;
  this.interceptors.request.forEach(function(S) {
    typeof S.runWhen == "function" && S.runWhen(r) === !1 || (u = u && S.synchronous, s.unshift(S.fulfilled, S.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(S) {
    d.push(S.fulfilled, S.rejected);
  });
  var h;
  if (!u) {
    var w = [Vh, void 0];
    for (Array.prototype.unshift.apply(w, s), w = w.concat(d), h = Promise.resolve(r); w.length; )
      h = h.then(w.shift(), w.shift());
    return h;
  }
  for (var V = r; s.length; ) {
    var U = s.shift(), R = s.shift();
    try {
      V = U(V);
    } catch (N) {
      R(N);
      break;
    }
  }
  try {
    h = Vh(V);
  } catch (N) {
    return Promise.reject(N);
  }
  for (; d.length; )
    h = h.then(d.shift(), d.shift());
  return h;
};
qr.prototype.getUri = function(o) {
  o = es(this.defaults, o);
  var r = $N(o.baseURL, o.url);
  return LN(r, o.params, o.paramsSerializer);
};
_m.forEach(["delete", "get", "head", "options"], function(o) {
  qr.prototype[o] = function(r, a) {
    return this.request(es(a || {}, {
      method: o,
      url: r,
      data: (a || {}).data
    }));
  };
});
_m.forEach(["post", "put", "patch"], function(o) {
  function r(a) {
    return function(u, d, h) {
      return this.request(es(h || {}, {
        method: o,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  qr.prototype[o] = r(), qr.prototype[o + "Form"] = r(!0);
});
var qN = qr, Gl, Th;
function KN() {
  if (Th)
    return Gl;
  Th = 1;
  var t = qa();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var s = this;
    this.promise.then(function(u) {
      if (!!s._listeners) {
        var d, h = s._listeners.length;
        for (d = 0; d < h; d++)
          s._listeners[d](u);
        s._listeners = null;
      }
    }), this.promise.then = function(u) {
      var d, h = new Promise(function(w) {
        s.subscribe(w), d = w;
      }).then(u);
      return h.cancel = function() {
        s.unsubscribe(d);
      }, h;
    }, r(function(d) {
      s.reason || (s.reason = new t(d), a(s.reason));
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
      var s = this._listeners.indexOf(a);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, o.source = function() {
    var a, s = new o(function(d) {
      a = d;
    });
    return {
      token: s,
      cancel: a
    };
  }, Gl = o, Gl;
}
var Yl, gh;
function ey() {
  return gh || (gh = 1, Yl = function(o) {
    return function(a) {
      return o.apply(null, a);
    };
  }), Yl;
}
var Pl, Uh;
function ty() {
  if (Uh)
    return Pl;
  Uh = 1;
  var t = Qe;
  return Pl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Pl;
}
var Rh = Qe, ny = Zm, Fa = qN, ry = Im, oy = Lc;
function Qm(t) {
  var o = new Fa(t), r = ny(Fa.prototype.request, o);
  return Rh.extend(r, Fa.prototype, o), Rh.extend(r, o), r.create = function(s) {
    return Qm(ry(t, s));
  }, r;
}
var lt = Qm(oy);
lt.Axios = Fa;
lt.CanceledError = qa();
lt.CancelToken = KN();
lt.isCancel = Bm();
lt.VERSION = Dm().version;
lt.toFormData = Cm;
lt.AxiosError = no;
lt.Cancel = lt.CanceledError;
lt.all = function(o) {
  return Promise.all(o);
};
lt.spread = ey();
lt.isAxiosError = ty();
Gc.exports = lt;
Gc.exports.default = lt;
(function(t) {
  t.exports = Gc.exports;
})(Mm);
const zm = /* @__PURE__ */ qR(Mm.exports), Rn = zm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), tn = zm.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var me = { exports: {} };
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
    var r, a = "4.17.21", s = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", V = 500, U = "__lodash_placeholder__", R = 1, N = 2, S = 4, J = 1, F = 2, B = 1, A = 2, C = 4, W = 8, I = 16, k = 32, _ = 64, Q = 128, z = 256, we = 512, de = 30, Ve = "...", Te = 800, Re = 16, Ze = 1, ce = 2, Be = 3, Ie = 1 / 0, Xe = 9007199254740991, io = 17976931348623157e292, gi = 0 / 0, Pt = 4294967295, qw = Pt - 1, Kw = Pt >>> 1, e1 = [
      ["ary", Q],
      ["bind", B],
      ["bindKey", A],
      ["curry", W],
      ["curryRight", I],
      ["flip", we],
      ["partial", k],
      ["partialRight", _],
      ["rearg", z]
    ], wr = "[object Arguments]", Ui = "[object Array]", t1 = "[object AsyncFunction]", ao = "[object Boolean]", so = "[object Date]", n1 = "[object DOMException]", Ri = "[object Error]", Ni = "[object Function]", Ru = "[object GeneratorFunction]", Wt = "[object Map]", lo = "[object Number]", r1 = "[object Null]", nn = "[object Object]", Nu = "[object Promise]", o1 = "[object Proxy]", co = "[object RegExp]", Ct = "[object Set]", uo = "[object String]", yi = "[object Symbol]", i1 = "[object Undefined]", fo = "[object WeakMap]", a1 = "[object WeakSet]", ho = "[object ArrayBuffer]", vr = "[object DataView]", ds = "[object Float32Array]", fs = "[object Float64Array]", hs = "[object Int8Array]", ps = "[object Int16Array]", ms = "[object Int32Array]", ws = "[object Uint8Array]", vs = "[object Uint8ClampedArray]", Vs = "[object Uint16Array]", Ts = "[object Uint32Array]", s1 = /\b__p \+= '';/g, l1 = /\b(__p \+=) '' \+/g, c1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, yu = /&(?:amp|lt|gt|quot|#39);/g, ku = /[&<>"']/g, u1 = RegExp(yu.source), d1 = RegExp(ku.source), f1 = /<%-([\s\S]+?)%>/g, h1 = /<%([\s\S]+?)%>/g, Mu = /<%=([\s\S]+?)%>/g, p1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, m1 = /^\w*$/, w1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gs = /[\\^$.*+?()[\]{}|]/g, v1 = RegExp(gs.source), Us = /^\s+/, V1 = /\s/, T1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, g1 = /\{\n\/\* \[wrapped with (.+)\] \*/, U1 = /,? & /, R1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, N1 = /[()=,{}\[\]\/\s]/, y1 = /\\(\\)?/g, k1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zu = /\w*$/, M1 = /^[-+]0x[0-9a-f]+$/i, Z1 = /^0b[01]+$/i, b1 = /^\[object .+?Constructor\]$/, J1 = /^0o[0-7]+$/i, E1 = /^(?:0|[1-9]\d*)$/, S1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ki = /($^)/, A1 = /['\n\r\u2028\u2029\\]/g, Mi = "\\ud800-\\udfff", F1 = "\\u0300-\\u036f", W1 = "\\ufe20-\\ufe2f", C1 = "\\u20d0-\\u20ff", bu = F1 + W1 + C1, Ju = "\\u2700-\\u27bf", Eu = "a-z\\xdf-\\xf6\\xf8-\\xff", x1 = "\\xac\\xb1\\xd7\\xf7", B1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", I1 = "\\u2000-\\u206f", D1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Su = "A-Z\\xc0-\\xd6\\xd8-\\xde", Au = "\\ufe0e\\ufe0f", Fu = x1 + B1 + I1 + D1, Rs = "['\u2019]", _1 = "[" + Mi + "]", Wu = "[" + Fu + "]", Zi = "[" + bu + "]", Cu = "\\d+", O1 = "[" + Ju + "]", xu = "[" + Eu + "]", Bu = "[^" + Mi + Fu + Cu + Ju + Eu + Su + "]", Ns = "\\ud83c[\\udffb-\\udfff]", Q1 = "(?:" + Zi + "|" + Ns + ")", Iu = "[^" + Mi + "]", ys = "(?:\\ud83c[\\udde6-\\uddff]){2}", ks = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vr = "[" + Su + "]", Du = "\\u200d", _u = "(?:" + xu + "|" + Bu + ")", z1 = "(?:" + Vr + "|" + Bu + ")", Ou = "(?:" + Rs + "(?:d|ll|m|re|s|t|ve))?", Qu = "(?:" + Rs + "(?:D|LL|M|RE|S|T|VE))?", zu = Q1 + "?", Gu = "[" + Au + "]?", G1 = "(?:" + Du + "(?:" + [Iu, ys, ks].join("|") + ")" + Gu + zu + ")*", Y1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", P1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Yu = Gu + zu + G1, H1 = "(?:" + [O1, ys, ks].join("|") + ")" + Yu, j1 = "(?:" + [Iu + Zi + "?", Zi, ys, ks, _1].join("|") + ")", X1 = RegExp(Rs, "g"), L1 = RegExp(Zi, "g"), Ms = RegExp(Ns + "(?=" + Ns + ")|" + j1 + Yu, "g"), $1 = RegExp([
      Vr + "?" + xu + "+" + Ou + "(?=" + [Wu, Vr, "$"].join("|") + ")",
      z1 + "+" + Qu + "(?=" + [Wu, Vr + _u, "$"].join("|") + ")",
      Vr + "?" + _u + "+" + Ou,
      Vr + "+" + Qu,
      P1,
      Y1,
      Cu,
      H1
    ].join("|"), "g"), q1 = RegExp("[" + Du + Mi + bu + Au + "]"), K1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ev = [
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
    ], tv = -1, he = {};
    he[ds] = he[fs] = he[hs] = he[ps] = he[ms] = he[ws] = he[vs] = he[Vs] = he[Ts] = !0, he[wr] = he[Ui] = he[ho] = he[ao] = he[vr] = he[so] = he[Ri] = he[Ni] = he[Wt] = he[lo] = he[nn] = he[co] = he[Ct] = he[uo] = he[fo] = !1;
    var fe = {};
    fe[wr] = fe[Ui] = fe[ho] = fe[vr] = fe[ao] = fe[so] = fe[ds] = fe[fs] = fe[hs] = fe[ps] = fe[ms] = fe[Wt] = fe[lo] = fe[nn] = fe[co] = fe[Ct] = fe[uo] = fe[yi] = fe[ws] = fe[vs] = fe[Vs] = fe[Ts] = !0, fe[Ri] = fe[Ni] = fe[fo] = !1;
    var nv = {
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
    }, rv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ov = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, iv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, av = parseFloat, sv = parseInt, Pu = typeof Jo == "object" && Jo && Jo.Object === Object && Jo, lv = typeof self == "object" && self && self.Object === Object && self, De = Pu || lv || Function("return this")(), Zs = o && !o.nodeType && o, Gn = Zs && !0 && t && !t.nodeType && t, Hu = Gn && Gn.exports === Zs, bs = Hu && Pu.process, Ut = function() {
      try {
        var T = Gn && Gn.require && Gn.require("util").types;
        return T || bs && bs.binding && bs.binding("util");
      } catch {
      }
    }(), ju = Ut && Ut.isArrayBuffer, Xu = Ut && Ut.isDate, Lu = Ut && Ut.isMap, $u = Ut && Ut.isRegExp, qu = Ut && Ut.isSet, Ku = Ut && Ut.isTypedArray;
    function ct(T, M, y) {
      switch (y.length) {
        case 0:
          return T.call(M);
        case 1:
          return T.call(M, y[0]);
        case 2:
          return T.call(M, y[0], y[1]);
        case 3:
          return T.call(M, y[0], y[1], y[2]);
      }
      return T.apply(M, y);
    }
    function cv(T, M, y, D) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var Ee = T[H];
        M(D, Ee, y(Ee), T);
      }
      return D;
    }
    function Rt(T, M) {
      for (var y = -1, D = T == null ? 0 : T.length; ++y < D && M(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function uv(T, M) {
      for (var y = T == null ? 0 : T.length; y-- && M(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function ed(T, M) {
      for (var y = -1, D = T == null ? 0 : T.length; ++y < D; )
        if (!M(T[y], y, T))
          return !1;
      return !0;
    }
    function Nn(T, M) {
      for (var y = -1, D = T == null ? 0 : T.length, H = 0, re = []; ++y < D; ) {
        var Ee = T[y];
        M(Ee, y, T) && (re[H++] = Ee);
      }
      return re;
    }
    function bi(T, M) {
      var y = T == null ? 0 : T.length;
      return !!y && Tr(T, M, 0) > -1;
    }
    function Js(T, M, y) {
      for (var D = -1, H = T == null ? 0 : T.length; ++D < H; )
        if (y(M, T[D]))
          return !0;
      return !1;
    }
    function pe(T, M) {
      for (var y = -1, D = T == null ? 0 : T.length, H = Array(D); ++y < D; )
        H[y] = M(T[y], y, T);
      return H;
    }
    function yn(T, M) {
      for (var y = -1, D = M.length, H = T.length; ++y < D; )
        T[H + y] = M[y];
      return T;
    }
    function Es(T, M, y, D) {
      var H = -1, re = T == null ? 0 : T.length;
      for (D && re && (y = T[++H]); ++H < re; )
        y = M(y, T[H], H, T);
      return y;
    }
    function dv(T, M, y, D) {
      var H = T == null ? 0 : T.length;
      for (D && H && (y = T[--H]); H--; )
        y = M(y, T[H], H, T);
      return y;
    }
    function Ss(T, M) {
      for (var y = -1, D = T == null ? 0 : T.length; ++y < D; )
        if (M(T[y], y, T))
          return !0;
      return !1;
    }
    var fv = As("length");
    function hv(T) {
      return T.split("");
    }
    function pv(T) {
      return T.match(R1) || [];
    }
    function td(T, M, y) {
      var D;
      return y(T, function(H, re, Ee) {
        if (M(H, re, Ee))
          return D = re, !1;
      }), D;
    }
    function Ji(T, M, y, D) {
      for (var H = T.length, re = y + (D ? 1 : -1); D ? re-- : ++re < H; )
        if (M(T[re], re, T))
          return re;
      return -1;
    }
    function Tr(T, M, y) {
      return M === M ? Mv(T, M, y) : Ji(T, nd, y);
    }
    function mv(T, M, y, D) {
      for (var H = y - 1, re = T.length; ++H < re; )
        if (D(T[H], M))
          return H;
      return -1;
    }
    function nd(T) {
      return T !== T;
    }
    function rd(T, M) {
      var y = T == null ? 0 : T.length;
      return y ? Ws(T, M) / y : gi;
    }
    function As(T) {
      return function(M) {
        return M == null ? r : M[T];
      };
    }
    function Fs(T) {
      return function(M) {
        return T == null ? r : T[M];
      };
    }
    function od(T, M, y, D, H) {
      return H(T, function(re, Ee, ue) {
        y = D ? (D = !1, re) : M(y, re, Ee, ue);
      }), y;
    }
    function wv(T, M) {
      var y = T.length;
      for (T.sort(M); y--; )
        T[y] = T[y].value;
      return T;
    }
    function Ws(T, M) {
      for (var y, D = -1, H = T.length; ++D < H; ) {
        var re = M(T[D]);
        re !== r && (y = y === r ? re : y + re);
      }
      return y;
    }
    function Cs(T, M) {
      for (var y = -1, D = Array(T); ++y < T; )
        D[y] = M(y);
      return D;
    }
    function vv(T, M) {
      return pe(M, function(y) {
        return [y, T[y]];
      });
    }
    function id(T) {
      return T && T.slice(0, cd(T) + 1).replace(Us, "");
    }
    function ut(T) {
      return function(M) {
        return T(M);
      };
    }
    function xs(T, M) {
      return pe(M, function(y) {
        return T[y];
      });
    }
    function po(T, M) {
      return T.has(M);
    }
    function ad(T, M) {
      for (var y = -1, D = T.length; ++y < D && Tr(M, T[y], 0) > -1; )
        ;
      return y;
    }
    function sd(T, M) {
      for (var y = T.length; y-- && Tr(M, T[y], 0) > -1; )
        ;
      return y;
    }
    function Vv(T, M) {
      for (var y = T.length, D = 0; y--; )
        T[y] === M && ++D;
      return D;
    }
    var Tv = Fs(nv), gv = Fs(rv);
    function Uv(T) {
      return "\\" + iv[T];
    }
    function Rv(T, M) {
      return T == null ? r : T[M];
    }
    function gr(T) {
      return q1.test(T);
    }
    function Nv(T) {
      return K1.test(T);
    }
    function yv(T) {
      for (var M, y = []; !(M = T.next()).done; )
        y.push(M.value);
      return y;
    }
    function Bs(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(D, H) {
        y[++M] = [H, D];
      }), y;
    }
    function ld(T, M) {
      return function(y) {
        return T(M(y));
      };
    }
    function kn(T, M) {
      for (var y = -1, D = T.length, H = 0, re = []; ++y < D; ) {
        var Ee = T[y];
        (Ee === M || Ee === U) && (T[y] = U, re[H++] = y);
      }
      return re;
    }
    function Ei(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(D) {
        y[++M] = D;
      }), y;
    }
    function kv(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(D) {
        y[++M] = [D, D];
      }), y;
    }
    function Mv(T, M, y) {
      for (var D = y - 1, H = T.length; ++D < H; )
        if (T[D] === M)
          return D;
      return -1;
    }
    function Zv(T, M, y) {
      for (var D = y + 1; D--; )
        if (T[D] === M)
          return D;
      return D;
    }
    function Ur(T) {
      return gr(T) ? Jv(T) : fv(T);
    }
    function xt(T) {
      return gr(T) ? Ev(T) : hv(T);
    }
    function cd(T) {
      for (var M = T.length; M-- && V1.test(T.charAt(M)); )
        ;
      return M;
    }
    var bv = Fs(ov);
    function Jv(T) {
      for (var M = Ms.lastIndex = 0; Ms.test(T); )
        ++M;
      return M;
    }
    function Ev(T) {
      return T.match(Ms) || [];
    }
    function Sv(T) {
      return T.match($1) || [];
    }
    var Av = function T(M) {
      M = M == null ? De : Rr.defaults(De.Object(), M, Rr.pick(De, ev));
      var y = M.Array, D = M.Date, H = M.Error, re = M.Function, Ee = M.Math, ue = M.Object, Is = M.RegExp, Fv = M.String, Nt = M.TypeError, Si = y.prototype, Wv = re.prototype, Nr = ue.prototype, Ai = M["__core-js_shared__"], Fi = Wv.toString, se = Nr.hasOwnProperty, Cv = 0, ud = function() {
        var e = /[^.]+$/.exec(Ai && Ai.keys && Ai.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Wi = Nr.toString, xv = Fi.call(ue), Bv = De._, Iv = Is(
        "^" + Fi.call(se).replace(gs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ci = Hu ? M.Buffer : r, Mn = M.Symbol, xi = M.Uint8Array, dd = Ci ? Ci.allocUnsafe : r, Bi = ld(ue.getPrototypeOf, ue), fd = ue.create, hd = Nr.propertyIsEnumerable, Ii = Si.splice, pd = Mn ? Mn.isConcatSpreadable : r, mo = Mn ? Mn.iterator : r, Yn = Mn ? Mn.toStringTag : r, Di = function() {
        try {
          var e = Ln(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Dv = M.clearTimeout !== De.clearTimeout && M.clearTimeout, _v = D && D.now !== De.Date.now && D.now, Ov = M.setTimeout !== De.setTimeout && M.setTimeout, _i = Ee.ceil, Oi = Ee.floor, Ds = ue.getOwnPropertySymbols, Qv = Ci ? Ci.isBuffer : r, md = M.isFinite, zv = Si.join, Gv = ld(ue.keys, ue), Se = Ee.max, Ge = Ee.min, Yv = D.now, Pv = M.parseInt, wd = Ee.random, Hv = Si.reverse, _s = Ln(M, "DataView"), wo = Ln(M, "Map"), Os = Ln(M, "Promise"), yr = Ln(M, "Set"), vo = Ln(M, "WeakMap"), Vo = Ln(ue, "create"), Qi = vo && new vo(), kr = {}, jv = $n(_s), Xv = $n(wo), Lv = $n(Os), $v = $n(yr), qv = $n(vo), zi = Mn ? Mn.prototype : r, To = zi ? zi.valueOf : r, vd = zi ? zi.toString : r;
      function f(e) {
        if (ge(e) && !j(e) && !(e instanceof te)) {
          if (e instanceof yt)
            return e;
          if (se.call(e, "__wrapped__"))
            return Tf(e);
        }
        return new yt(e);
      }
      var Mr = function() {
        function e() {
        }
        return function(n) {
          if (!ve(n))
            return {};
          if (fd)
            return fd(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function Gi() {
      }
      function yt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        escape: f1,
        evaluate: h1,
        interpolate: Mu,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = Gi.prototype, f.prototype.constructor = f, yt.prototype = Mr(Gi.prototype), yt.prototype.constructor = yt;
      function te(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pt, this.__views__ = [];
      }
      function Kv() {
        var e = new te(this.__wrapped__);
        return e.__actions__ = et(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = et(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = et(this.__views__), e;
      }
      function eV() {
        if (this.__filtered__) {
          var e = new te(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function tV() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), l = n < 0, c = i ? e.length : 0, p = h0(0, c, this.__views__), m = p.start, v = p.end, g = v - m, Z = l ? v : m - 1, b = this.__iteratees__, E = b.length, x = 0, O = Ge(g, this.__takeCount__);
        if (!i || !l && c == g && O == g)
          return Od(e, this.__actions__);
        var Y = [];
        e:
          for (; g-- && x < O; ) {
            Z += n;
            for (var $ = -1, P = e[Z]; ++$ < E; ) {
              var ee = b[$], ne = ee.iteratee, ht = ee.type, qe = ne(P);
              if (ht == ce)
                P = qe;
              else if (!qe) {
                if (ht == Ze)
                  continue e;
                break e;
              }
            }
            Y[x++] = P;
          }
        return Y;
      }
      te.prototype = Mr(Gi.prototype), te.prototype.constructor = te;
      function Pn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function nV() {
        this.__data__ = Vo ? Vo(null) : {}, this.size = 0;
      }
      function rV(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function oV(e) {
        var n = this.__data__;
        if (Vo) {
          var i = n[e];
          return i === w ? r : i;
        }
        return se.call(n, e) ? n[e] : r;
      }
      function iV(e) {
        var n = this.__data__;
        return Vo ? n[e] !== r : se.call(n, e);
      }
      function aV(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Vo && n === r ? w : n, this;
      }
      Pn.prototype.clear = nV, Pn.prototype.delete = rV, Pn.prototype.get = oV, Pn.prototype.has = iV, Pn.prototype.set = aV;
      function rn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function sV() {
        this.__data__ = [], this.size = 0;
      }
      function lV(e) {
        var n = this.__data__, i = Yi(n, e);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ii.call(n, i, 1), --this.size, !0;
      }
      function cV(e) {
        var n = this.__data__, i = Yi(n, e);
        return i < 0 ? r : n[i][1];
      }
      function uV(e) {
        return Yi(this.__data__, e) > -1;
      }
      function dV(e, n) {
        var i = this.__data__, l = Yi(i, e);
        return l < 0 ? (++this.size, i.push([e, n])) : i[l][1] = n, this;
      }
      rn.prototype.clear = sV, rn.prototype.delete = lV, rn.prototype.get = cV, rn.prototype.has = uV, rn.prototype.set = dV;
      function on(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function fV() {
        this.size = 0, this.__data__ = {
          hash: new Pn(),
          map: new (wo || rn)(),
          string: new Pn()
        };
      }
      function hV(e) {
        var n = ra(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function pV(e) {
        return ra(this, e).get(e);
      }
      function mV(e) {
        return ra(this, e).has(e);
      }
      function wV(e, n) {
        var i = ra(this, e), l = i.size;
        return i.set(e, n), this.size += i.size == l ? 0 : 1, this;
      }
      on.prototype.clear = fV, on.prototype.delete = hV, on.prototype.get = pV, on.prototype.has = mV, on.prototype.set = wV;
      function Hn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new on(); ++n < i; )
          this.add(e[n]);
      }
      function vV(e) {
        return this.__data__.set(e, w), this;
      }
      function VV(e) {
        return this.__data__.has(e);
      }
      Hn.prototype.add = Hn.prototype.push = vV, Hn.prototype.has = VV;
      function Bt(e) {
        var n = this.__data__ = new rn(e);
        this.size = n.size;
      }
      function TV() {
        this.__data__ = new rn(), this.size = 0;
      }
      function gV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function UV(e) {
        return this.__data__.get(e);
      }
      function RV(e) {
        return this.__data__.has(e);
      }
      function NV(e, n) {
        var i = this.__data__;
        if (i instanceof rn) {
          var l = i.__data__;
          if (!wo || l.length < s - 1)
            return l.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new on(l);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Bt.prototype.clear = TV, Bt.prototype.delete = gV, Bt.prototype.get = UV, Bt.prototype.has = RV, Bt.prototype.set = NV;
      function Vd(e, n) {
        var i = j(e), l = !i && qn(e), c = !i && !l && Sn(e), p = !i && !l && !c && Er(e), m = i || l || c || p, v = m ? Cs(e.length, Fv) : [], g = v.length;
        for (var Z in e)
          (n || se.call(e, Z)) && !(m && (Z == "length" || c && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || cn(Z, g))) && v.push(Z);
        return v;
      }
      function Td(e) {
        var n = e.length;
        return n ? e[qs(0, n - 1)] : r;
      }
      function yV(e, n) {
        return oa(et(e), jn(n, 0, e.length));
      }
      function kV(e) {
        return oa(et(e));
      }
      function Qs(e, n, i) {
        (i !== r && !It(e[n], i) || i === r && !(n in e)) && an(e, n, i);
      }
      function go(e, n, i) {
        var l = e[n];
        (!(se.call(e, n) && It(l, i)) || i === r && !(n in e)) && an(e, n, i);
      }
      function Yi(e, n) {
        for (var i = e.length; i--; )
          if (It(e[i][0], n))
            return i;
        return -1;
      }
      function MV(e, n, i, l) {
        return Zn(e, function(c, p, m) {
          n(l, c, i(c), m);
        }), l;
      }
      function gd(e, n) {
        return e && jt(n, We(n), e);
      }
      function ZV(e, n) {
        return e && jt(n, nt(n), e);
      }
      function an(e, n, i) {
        n == "__proto__" && Di ? Di(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function zs(e, n) {
        for (var i = -1, l = n.length, c = y(l), p = e == null; ++i < l; )
          c[i] = p ? r : Nl(e, n[i]);
        return c;
      }
      function jn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function kt(e, n, i, l, c, p) {
        var m, v = n & R, g = n & N, Z = n & S;
        if (i && (m = c ? i(e, l, c, p) : i(e)), m !== r)
          return m;
        if (!ve(e))
          return e;
        var b = j(e);
        if (b) {
          if (m = m0(e), !v)
            return et(e, m);
        } else {
          var E = Ye(e), x = E == Ni || E == Ru;
          if (Sn(e))
            return Gd(e, v);
          if (E == nn || E == wr || x && !c) {
            if (m = g || x ? {} : uf(e), !v)
              return g ? o0(e, ZV(m, e)) : r0(e, gd(m, e));
          } else {
            if (!fe[E])
              return c ? e : {};
            m = w0(e, E, v);
          }
        }
        p || (p = new Bt());
        var O = p.get(e);
        if (O)
          return O;
        p.set(e, m), Df(e) ? e.forEach(function(P) {
          m.add(kt(P, n, i, P, e, p));
        }) : Bf(e) && e.forEach(function(P, ee) {
          m.set(ee, kt(P, n, i, ee, e, p));
        });
        var Y = Z ? g ? cl : ll : g ? nt : We, $ = b ? r : Y(e);
        return Rt($ || e, function(P, ee) {
          $ && (ee = P, P = e[ee]), go(m, ee, kt(P, n, i, ee, e, p));
        }), m;
      }
      function bV(e) {
        var n = We(e);
        return function(i) {
          return Ud(i, e, n);
        };
      }
      function Ud(e, n, i) {
        var l = i.length;
        if (e == null)
          return !l;
        for (e = ue(e); l--; ) {
          var c = i[l], p = n[c], m = e[c];
          if (m === r && !(c in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function Rd(e, n, i) {
        if (typeof e != "function")
          throw new Nt(d);
        return Zo(function() {
          e.apply(r, i);
        }, n);
      }
      function Uo(e, n, i, l) {
        var c = -1, p = bi, m = !0, v = e.length, g = [], Z = n.length;
        if (!v)
          return g;
        i && (n = pe(n, ut(i))), l ? (p = Js, m = !1) : n.length >= s && (p = po, m = !1, n = new Hn(n));
        e:
          for (; ++c < v; ) {
            var b = e[c], E = i == null ? b : i(b);
            if (b = l || b !== 0 ? b : 0, m && E === E) {
              for (var x = Z; x--; )
                if (n[x] === E)
                  continue e;
              g.push(b);
            } else
              p(n, E, l) || g.push(b);
          }
        return g;
      }
      var Zn = Xd(Ht), Nd = Xd(Ys, !0);
      function JV(e, n) {
        var i = !0;
        return Zn(e, function(l, c, p) {
          return i = !!n(l, c, p), i;
        }), i;
      }
      function Pi(e, n, i) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var p = e[l], m = n(p);
          if (m != null && (v === r ? m === m && !ft(m) : i(m, v)))
            var v = m, g = p;
        }
        return g;
      }
      function EV(e, n, i, l) {
        var c = e.length;
        for (i = X(i), i < 0 && (i = -i > c ? 0 : c + i), l = l === r || l > c ? c : X(l), l < 0 && (l += c), l = i > l ? 0 : Of(l); i < l; )
          e[i++] = n;
        return e;
      }
      function yd(e, n) {
        var i = [];
        return Zn(e, function(l, c, p) {
          n(l, c, p) && i.push(l);
        }), i;
      }
      function _e(e, n, i, l, c) {
        var p = -1, m = e.length;
        for (i || (i = V0), c || (c = []); ++p < m; ) {
          var v = e[p];
          n > 0 && i(v) ? n > 1 ? _e(v, n - 1, i, l, c) : yn(c, v) : l || (c[c.length] = v);
        }
        return c;
      }
      var Gs = Ld(), kd = Ld(!0);
      function Ht(e, n) {
        return e && Gs(e, n, We);
      }
      function Ys(e, n) {
        return e && kd(e, n, We);
      }
      function Hi(e, n) {
        return Nn(n, function(i) {
          return un(e[i]);
        });
      }
      function Xn(e, n) {
        n = Jn(n, e);
        for (var i = 0, l = n.length; e != null && i < l; )
          e = e[Xt(n[i++])];
        return i && i == l ? e : r;
      }
      function Md(e, n, i) {
        var l = n(e);
        return j(e) ? l : yn(l, i(e));
      }
      function Le(e) {
        return e == null ? e === r ? i1 : r1 : Yn && Yn in ue(e) ? f0(e) : k0(e);
      }
      function Ps(e, n) {
        return e > n;
      }
      function SV(e, n) {
        return e != null && se.call(e, n);
      }
      function AV(e, n) {
        return e != null && n in ue(e);
      }
      function FV(e, n, i) {
        return e >= Ge(n, i) && e < Se(n, i);
      }
      function Hs(e, n, i) {
        for (var l = i ? Js : bi, c = e[0].length, p = e.length, m = p, v = y(p), g = 1 / 0, Z = []; m--; ) {
          var b = e[m];
          m && n && (b = pe(b, ut(n))), g = Ge(b.length, g), v[m] = !i && (n || c >= 120 && b.length >= 120) ? new Hn(m && b) : r;
        }
        b = e[0];
        var E = -1, x = v[0];
        e:
          for (; ++E < c && Z.length < g; ) {
            var O = b[E], Y = n ? n(O) : O;
            if (O = i || O !== 0 ? O : 0, !(x ? po(x, Y) : l(Z, Y, i))) {
              for (m = p; --m; ) {
                var $ = v[m];
                if (!($ ? po($, Y) : l(e[m], Y, i)))
                  continue e;
              }
              x && x.push(Y), Z.push(O);
            }
          }
        return Z;
      }
      function WV(e, n, i, l) {
        return Ht(e, function(c, p, m) {
          n(l, i(c), p, m);
        }), l;
      }
      function Ro(e, n, i) {
        n = Jn(n, e), e = pf(e, n);
        var l = e == null ? e : e[Xt(Zt(n))];
        return l == null ? r : ct(l, e, i);
      }
      function Zd(e) {
        return ge(e) && Le(e) == wr;
      }
      function CV(e) {
        return ge(e) && Le(e) == ho;
      }
      function xV(e) {
        return ge(e) && Le(e) == so;
      }
      function No(e, n, i, l, c) {
        return e === n ? !0 : e == null || n == null || !ge(e) && !ge(n) ? e !== e && n !== n : BV(e, n, i, l, No, c);
      }
      function BV(e, n, i, l, c, p) {
        var m = j(e), v = j(n), g = m ? Ui : Ye(e), Z = v ? Ui : Ye(n);
        g = g == wr ? nn : g, Z = Z == wr ? nn : Z;
        var b = g == nn, E = Z == nn, x = g == Z;
        if (x && Sn(e)) {
          if (!Sn(n))
            return !1;
          m = !0, b = !1;
        }
        if (x && !b)
          return p || (p = new Bt()), m || Er(e) ? sf(e, n, i, l, c, p) : u0(e, n, g, i, l, c, p);
        if (!(i & J)) {
          var O = b && se.call(e, "__wrapped__"), Y = E && se.call(n, "__wrapped__");
          if (O || Y) {
            var $ = O ? e.value() : e, P = Y ? n.value() : n;
            return p || (p = new Bt()), c($, P, i, l, p);
          }
        }
        return x ? (p || (p = new Bt()), d0(e, n, i, l, c, p)) : !1;
      }
      function IV(e) {
        return ge(e) && Ye(e) == Wt;
      }
      function js(e, n, i, l) {
        var c = i.length, p = c, m = !l;
        if (e == null)
          return !p;
        for (e = ue(e); c--; ) {
          var v = i[c];
          if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++c < p; ) {
          v = i[c];
          var g = v[0], Z = e[g], b = v[1];
          if (m && v[2]) {
            if (Z === r && !(g in e))
              return !1;
          } else {
            var E = new Bt();
            if (l)
              var x = l(Z, b, g, e, n, E);
            if (!(x === r ? No(b, Z, J | F, l, E) : x))
              return !1;
          }
        }
        return !0;
      }
      function bd(e) {
        if (!ve(e) || g0(e))
          return !1;
        var n = un(e) ? Iv : b1;
        return n.test($n(e));
      }
      function DV(e) {
        return ge(e) && Le(e) == co;
      }
      function _V(e) {
        return ge(e) && Ye(e) == Ct;
      }
      function OV(e) {
        return ge(e) && ua(e.length) && !!he[Le(e)];
      }
      function Jd(e) {
        return typeof e == "function" ? e : e == null ? rt : typeof e == "object" ? j(e) ? Ad(e[0], e[1]) : Sd(e) : qf(e);
      }
      function Xs(e) {
        if (!Mo(e))
          return Gv(e);
        var n = [];
        for (var i in ue(e))
          se.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function QV(e) {
        if (!ve(e))
          return y0(e);
        var n = Mo(e), i = [];
        for (var l in e)
          l == "constructor" && (n || !se.call(e, l)) || i.push(l);
        return i;
      }
      function Ls(e, n) {
        return e < n;
      }
      function Ed(e, n) {
        var i = -1, l = tt(e) ? y(e.length) : [];
        return Zn(e, function(c, p, m) {
          l[++i] = n(c, p, m);
        }), l;
      }
      function Sd(e) {
        var n = dl(e);
        return n.length == 1 && n[0][2] ? ff(n[0][0], n[0][1]) : function(i) {
          return i === e || js(i, e, n);
        };
      }
      function Ad(e, n) {
        return hl(e) && df(n) ? ff(Xt(e), n) : function(i) {
          var l = Nl(i, e);
          return l === r && l === n ? yl(i, e) : No(n, l, J | F);
        };
      }
      function ji(e, n, i, l, c) {
        e !== n && Gs(n, function(p, m) {
          if (c || (c = new Bt()), ve(p))
            zV(e, n, m, i, ji, l, c);
          else {
            var v = l ? l(ml(e, m), p, m + "", e, n, c) : r;
            v === r && (v = p), Qs(e, m, v);
          }
        }, nt);
      }
      function zV(e, n, i, l, c, p, m) {
        var v = ml(e, i), g = ml(n, i), Z = m.get(g);
        if (Z) {
          Qs(e, i, Z);
          return;
        }
        var b = p ? p(v, g, i + "", e, n, m) : r, E = b === r;
        if (E) {
          var x = j(g), O = !x && Sn(g), Y = !x && !O && Er(g);
          b = g, x || O || Y ? j(v) ? b = v : Ne(v) ? b = et(v) : O ? (E = !1, b = Gd(g, !0)) : Y ? (E = !1, b = Yd(g, !0)) : b = [] : bo(g) || qn(g) ? (b = v, qn(v) ? b = Qf(v) : (!ve(v) || un(v)) && (b = uf(g))) : E = !1;
        }
        E && (m.set(g, b), c(b, g, l, p, m), m.delete(g)), Qs(e, i, b);
      }
      function Fd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, cn(n, i) ? e[n] : r;
      }
      function Wd(e, n, i) {
        n.length ? n = pe(n, function(p) {
          return j(p) ? function(m) {
            return Xn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [rt];
        var l = -1;
        n = pe(n, ut(G()));
        var c = Ed(e, function(p, m, v) {
          var g = pe(n, function(Z) {
            return Z(p);
          });
          return { criteria: g, index: ++l, value: p };
        });
        return wv(c, function(p, m) {
          return n0(p, m, i);
        });
      }
      function GV(e, n) {
        return Cd(e, n, function(i, l) {
          return yl(e, l);
        });
      }
      function Cd(e, n, i) {
        for (var l = -1, c = n.length, p = {}; ++l < c; ) {
          var m = n[l], v = Xn(e, m);
          i(v, m) && yo(p, Jn(m, e), v);
        }
        return p;
      }
      function YV(e) {
        return function(n) {
          return Xn(n, e);
        };
      }
      function $s(e, n, i, l) {
        var c = l ? mv : Tr, p = -1, m = n.length, v = e;
        for (e === n && (n = et(n)), i && (v = pe(e, ut(i))); ++p < m; )
          for (var g = 0, Z = n[p], b = i ? i(Z) : Z; (g = c(v, b, g, l)) > -1; )
            v !== e && Ii.call(v, g, 1), Ii.call(e, g, 1);
        return e;
      }
      function xd(e, n) {
        for (var i = e ? n.length : 0, l = i - 1; i--; ) {
          var c = n[i];
          if (i == l || c !== p) {
            var p = c;
            cn(c) ? Ii.call(e, c, 1) : tl(e, c);
          }
        }
        return e;
      }
      function qs(e, n) {
        return e + Oi(wd() * (n - e + 1));
      }
      function PV(e, n, i, l) {
        for (var c = -1, p = Se(_i((n - e) / (i || 1)), 0), m = y(p); p--; )
          m[l ? p : ++c] = e, e += i;
        return m;
      }
      function Ks(e, n) {
        var i = "";
        if (!e || n < 1 || n > Xe)
          return i;
        do
          n % 2 && (i += e), n = Oi(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function q(e, n) {
        return wl(hf(e, n, rt), e + "");
      }
      function HV(e) {
        return Td(Sr(e));
      }
      function jV(e, n) {
        var i = Sr(e);
        return oa(i, jn(n, 0, i.length));
      }
      function yo(e, n, i, l) {
        if (!ve(e))
          return e;
        n = Jn(n, e);
        for (var c = -1, p = n.length, m = p - 1, v = e; v != null && ++c < p; ) {
          var g = Xt(n[c]), Z = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (c != m) {
            var b = v[g];
            Z = l ? l(b, g, v) : r, Z === r && (Z = ve(b) ? b : cn(n[c + 1]) ? [] : {});
          }
          go(v, g, Z), v = v[g];
        }
        return e;
      }
      var Bd = Qi ? function(e, n) {
        return Qi.set(e, n), e;
      } : rt, XV = Di ? function(e, n) {
        return Di(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ml(n),
          writable: !0
        });
      } : rt;
      function LV(e) {
        return oa(Sr(e));
      }
      function Mt(e, n, i) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), i = i > c ? c : i, i < 0 && (i += c), c = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = y(c); ++l < c; )
          p[l] = e[l + n];
        return p;
      }
      function $V(e, n) {
        var i;
        return Zn(e, function(l, c, p) {
          return i = n(l, c, p), !i;
        }), !!i;
      }
      function Xi(e, n, i) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= Kw) {
          for (; l < c; ) {
            var p = l + c >>> 1, m = e[p];
            m !== null && !ft(m) && (i ? m <= n : m < n) ? l = p + 1 : c = p;
          }
          return c;
        }
        return el(e, n, rt, i);
      }
      function el(e, n, i, l) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, g = ft(n), Z = n === r; c < p; ) {
          var b = Oi((c + p) / 2), E = i(e[b]), x = E !== r, O = E === null, Y = E === E, $ = ft(E);
          if (m)
            var P = l || Y;
          else
            Z ? P = Y && (l || x) : v ? P = Y && x && (l || !O) : g ? P = Y && x && !O && (l || !$) : O || $ ? P = !1 : P = l ? E <= n : E < n;
          P ? c = b + 1 : p = b;
        }
        return Ge(p, qw);
      }
      function Id(e, n) {
        for (var i = -1, l = e.length, c = 0, p = []; ++i < l; ) {
          var m = e[i], v = n ? n(m) : m;
          if (!i || !It(v, g)) {
            var g = v;
            p[c++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Dd(e) {
        return typeof e == "number" ? e : ft(e) ? gi : +e;
      }
      function dt(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return pe(e, dt) + "";
        if (ft(e))
          return vd ? vd.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ie ? "-0" : n;
      }
      function bn(e, n, i) {
        var l = -1, c = bi, p = e.length, m = !0, v = [], g = v;
        if (i)
          m = !1, c = Js;
        else if (p >= s) {
          var Z = n ? null : l0(e);
          if (Z)
            return Ei(Z);
          m = !1, c = po, g = new Hn();
        } else
          g = n ? [] : v;
        e:
          for (; ++l < p; ) {
            var b = e[l], E = n ? n(b) : b;
            if (b = i || b !== 0 ? b : 0, m && E === E) {
              for (var x = g.length; x--; )
                if (g[x] === E)
                  continue e;
              n && g.push(E), v.push(b);
            } else
              c(g, E, i) || (g !== v && g.push(E), v.push(b));
          }
        return v;
      }
      function tl(e, n) {
        return n = Jn(n, e), e = pf(e, n), e == null || delete e[Xt(Zt(n))];
      }
      function _d(e, n, i, l) {
        return yo(e, n, i(Xn(e, n)), l);
      }
      function Li(e, n, i, l) {
        for (var c = e.length, p = l ? c : -1; (l ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return i ? Mt(e, l ? 0 : p, l ? p + 1 : c) : Mt(e, l ? p + 1 : 0, l ? c : p);
      }
      function Od(e, n) {
        var i = e;
        return i instanceof te && (i = i.value()), Es(n, function(l, c) {
          return c.func.apply(c.thisArg, yn([l], c.args));
        }, i);
      }
      function nl(e, n, i) {
        var l = e.length;
        if (l < 2)
          return l ? bn(e[0]) : [];
        for (var c = -1, p = y(l); ++c < l; )
          for (var m = e[c], v = -1; ++v < l; )
            v != c && (p[c] = Uo(p[c] || m, e[v], n, i));
        return bn(_e(p, 1), n, i);
      }
      function Qd(e, n, i) {
        for (var l = -1, c = e.length, p = n.length, m = {}; ++l < c; ) {
          var v = l < p ? n[l] : r;
          i(m, e[l], v);
        }
        return m;
      }
      function rl(e) {
        return Ne(e) ? e : [];
      }
      function ol(e) {
        return typeof e == "function" ? e : rt;
      }
      function Jn(e, n) {
        return j(e) ? e : hl(e, n) ? [e] : Vf(ie(e));
      }
      var qV = q;
      function En(e, n, i) {
        var l = e.length;
        return i = i === r ? l : i, !n && i >= l ? e : Mt(e, n, i);
      }
      var zd = Dv || function(e) {
        return De.clearTimeout(e);
      };
      function Gd(e, n) {
        if (n)
          return e.slice();
        var i = e.length, l = dd ? dd(i) : new e.constructor(i);
        return e.copy(l), l;
      }
      function il(e) {
        var n = new e.constructor(e.byteLength);
        return new xi(n).set(new xi(e)), n;
      }
      function KV(e, n) {
        var i = n ? il(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function e0(e) {
        var n = new e.constructor(e.source, Zu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function t0(e) {
        return To ? ue(To.call(e)) : {};
      }
      function Yd(e, n) {
        var i = n ? il(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Pd(e, n) {
        if (e !== n) {
          var i = e !== r, l = e === null, c = e === e, p = ft(e), m = n !== r, v = n === null, g = n === n, Z = ft(n);
          if (!v && !Z && !p && e > n || p && m && g && !v && !Z || l && m && g || !i && g || !c)
            return 1;
          if (!l && !p && !Z && e < n || Z && i && c && !l && !p || v && i && c || !m && c || !g)
            return -1;
        }
        return 0;
      }
      function n0(e, n, i) {
        for (var l = -1, c = e.criteria, p = n.criteria, m = c.length, v = i.length; ++l < m; ) {
          var g = Pd(c[l], p[l]);
          if (g) {
            if (l >= v)
              return g;
            var Z = i[l];
            return g * (Z == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Hd(e, n, i, l) {
        for (var c = -1, p = e.length, m = i.length, v = -1, g = n.length, Z = Se(p - m, 0), b = y(g + Z), E = !l; ++v < g; )
          b[v] = n[v];
        for (; ++c < m; )
          (E || c < p) && (b[i[c]] = e[c]);
        for (; Z--; )
          b[v++] = e[c++];
        return b;
      }
      function jd(e, n, i, l) {
        for (var c = -1, p = e.length, m = -1, v = i.length, g = -1, Z = n.length, b = Se(p - v, 0), E = y(b + Z), x = !l; ++c < b; )
          E[c] = e[c];
        for (var O = c; ++g < Z; )
          E[O + g] = n[g];
        for (; ++m < v; )
          (x || c < p) && (E[O + i[m]] = e[c++]);
        return E;
      }
      function et(e, n) {
        var i = -1, l = e.length;
        for (n || (n = y(l)); ++i < l; )
          n[i] = e[i];
        return n;
      }
      function jt(e, n, i, l) {
        var c = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var v = n[p], g = l ? l(i[v], e[v], v, i, e) : r;
          g === r && (g = e[v]), c ? an(i, v, g) : go(i, v, g);
        }
        return i;
      }
      function r0(e, n) {
        return jt(e, fl(e), n);
      }
      function o0(e, n) {
        return jt(e, lf(e), n);
      }
      function $i(e, n) {
        return function(i, l) {
          var c = j(i) ? cv : MV, p = n ? n() : {};
          return c(i, e, G(l, 2), p);
        };
      }
      function Zr(e) {
        return q(function(n, i) {
          var l = -1, c = i.length, p = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (c--, p) : r, m && $e(i[0], i[1], m) && (p = c < 3 ? r : p, c = 1), n = ue(n); ++l < c; ) {
            var v = i[l];
            v && e(n, v, l, p);
          }
          return n;
        });
      }
      function Xd(e, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!tt(i))
            return e(i, l);
          for (var c = i.length, p = n ? c : -1, m = ue(i); (n ? p-- : ++p < c) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function Ld(e) {
        return function(n, i, l) {
          for (var c = -1, p = ue(n), m = l(n), v = m.length; v--; ) {
            var g = m[e ? v : ++c];
            if (i(p[g], g, p) === !1)
              break;
          }
          return n;
        };
      }
      function i0(e, n, i) {
        var l = n & B, c = ko(e);
        function p() {
          var m = this && this !== De && this instanceof p ? c : e;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function $d(e) {
        return function(n) {
          n = ie(n);
          var i = gr(n) ? xt(n) : r, l = i ? i[0] : n.charAt(0), c = i ? En(i, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function br(e) {
        return function(n) {
          return Es(Lf(Xf(n).replace(X1, "")), e, "");
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
          var i = Mr(e.prototype), l = e.apply(i, n);
          return ve(l) ? l : i;
        };
      }
      function a0(e, n, i) {
        var l = ko(e);
        function c() {
          for (var p = arguments.length, m = y(p), v = p, g = Jr(c); v--; )
            m[v] = arguments[v];
          var Z = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : kn(m, g);
          if (p -= Z.length, p < i)
            return nf(
              e,
              n,
              qi,
              c.placeholder,
              r,
              m,
              Z,
              r,
              r,
              i - p
            );
          var b = this && this !== De && this instanceof c ? l : e;
          return ct(b, this, m);
        }
        return c;
      }
      function qd(e) {
        return function(n, i, l) {
          var c = ue(n);
          if (!tt(n)) {
            var p = G(i, 3);
            n = We(n), i = function(v) {
              return p(c[v], v, c);
            };
          }
          var m = e(n, i, l);
          return m > -1 ? c[p ? n[m] : m] : r;
        };
      }
      function Kd(e) {
        return ln(function(n) {
          var i = n.length, l = i, c = yt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Nt(d);
            if (c && !m && na(p) == "wrapper")
              var m = new yt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var v = na(p), g = v == "wrapper" ? ul(p) : r;
            g && pl(g[0]) && g[1] == (Q | W | k | z) && !g[4].length && g[9] == 1 ? m = m[na(g[0])].apply(m, g[3]) : m = p.length == 1 && pl(p) ? m[v]() : m.thru(p);
          }
          return function() {
            var Z = arguments, b = Z[0];
            if (m && Z.length == 1 && j(b))
              return m.plant(b).value();
            for (var E = 0, x = i ? n[E].apply(this, Z) : b; ++E < i; )
              x = n[E].call(this, x);
            return x;
          };
        });
      }
      function qi(e, n, i, l, c, p, m, v, g, Z) {
        var b = n & Q, E = n & B, x = n & A, O = n & (W | I), Y = n & we, $ = x ? r : ko(e);
        function P() {
          for (var ee = arguments.length, ne = y(ee), ht = ee; ht--; )
            ne[ht] = arguments[ht];
          if (O)
            var qe = Jr(P), pt = Vv(ne, qe);
          if (l && (ne = Hd(ne, l, c, O)), p && (ne = jd(ne, p, m, O)), ee -= pt, O && ee < Z) {
            var ye = kn(ne, qe);
            return nf(
              e,
              n,
              qi,
              P.placeholder,
              i,
              ne,
              ye,
              v,
              g,
              Z - ee
            );
          }
          var Dt = E ? i : this, fn = x ? Dt[e] : e;
          return ee = ne.length, v ? ne = M0(ne, v) : Y && ee > 1 && ne.reverse(), b && g < ee && (ne.length = g), this && this !== De && this instanceof P && (fn = $ || ko(fn)), fn.apply(Dt, ne);
        }
        return P;
      }
      function ef(e, n) {
        return function(i, l) {
          return WV(i, e, n(l), {});
        };
      }
      function Ki(e, n) {
        return function(i, l) {
          var c;
          if (i === r && l === r)
            return n;
          if (i !== r && (c = i), l !== r) {
            if (c === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = dt(i), l = dt(l)) : (i = Dd(i), l = Dd(l)), c = e(i, l);
          }
          return c;
        };
      }
      function al(e) {
        return ln(function(n) {
          return n = pe(n, ut(G())), q(function(i) {
            var l = this;
            return e(n, function(c) {
              return ct(c, l, i);
            });
          });
        });
      }
      function ea(e, n) {
        n = n === r ? " " : dt(n);
        var i = n.length;
        if (i < 2)
          return i ? Ks(n, e) : n;
        var l = Ks(n, _i(e / Ur(n)));
        return gr(n) ? En(xt(l), 0, e).join("") : l.slice(0, e);
      }
      function s0(e, n, i, l) {
        var c = n & B, p = ko(e);
        function m() {
          for (var v = -1, g = arguments.length, Z = -1, b = l.length, E = y(b + g), x = this && this !== De && this instanceof m ? p : e; ++Z < b; )
            E[Z] = l[Z];
          for (; g--; )
            E[Z++] = arguments[++v];
          return ct(x, c ? i : this, E);
        }
        return m;
      }
      function tf(e) {
        return function(n, i, l) {
          return l && typeof l != "number" && $e(n, i, l) && (i = l = r), n = dn(n), i === r ? (i = n, n = 0) : i = dn(i), l = l === r ? n < i ? 1 : -1 : dn(l), PV(n, i, l, e);
        };
      }
      function ta(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = bt(n), i = bt(i)), e(n, i);
        };
      }
      function nf(e, n, i, l, c, p, m, v, g, Z) {
        var b = n & W, E = b ? m : r, x = b ? r : m, O = b ? p : r, Y = b ? r : p;
        n |= b ? k : _, n &= ~(b ? _ : k), n & C || (n &= ~(B | A));
        var $ = [
          e,
          n,
          c,
          O,
          E,
          Y,
          x,
          v,
          g,
          Z
        ], P = i.apply(r, $);
        return pl(e) && mf(P, $), P.placeholder = l, wf(P, e, n);
      }
      function sl(e) {
        var n = Ee[e];
        return function(i, l) {
          if (i = bt(i), l = l == null ? 0 : Ge(X(l), 292), l && md(i)) {
            var c = (ie(i) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + l));
            return c = (ie(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(i);
        };
      }
      var l0 = yr && 1 / Ei(new yr([, -0]))[1] == Ie ? function(e) {
        return new yr(e);
      } : Jl;
      function rf(e) {
        return function(n) {
          var i = Ye(n);
          return i == Wt ? Bs(n) : i == Ct ? kv(n) : vv(n, e(n));
        };
      }
      function sn(e, n, i, l, c, p, m, v) {
        var g = n & A;
        if (!g && typeof e != "function")
          throw new Nt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(k | _), l = c = r), m = m === r ? m : Se(X(m), 0), v = v === r ? v : X(v), Z -= c ? c.length : 0, n & _) {
          var b = l, E = c;
          l = c = r;
        }
        var x = g ? r : ul(e), O = [
          e,
          n,
          i,
          l,
          c,
          b,
          E,
          p,
          m,
          v
        ];
        if (x && N0(O, x), e = O[0], n = O[1], i = O[2], l = O[3], c = O[4], v = O[9] = O[9] === r ? g ? 0 : e.length : Se(O[9] - Z, 0), !v && n & (W | I) && (n &= ~(W | I)), !n || n == B)
          var Y = i0(e, n, i);
        else
          n == W || n == I ? Y = a0(e, n, v) : (n == k || n == (B | k)) && !c.length ? Y = s0(e, n, i, l) : Y = qi.apply(r, O);
        var $ = x ? Bd : mf;
        return wf($(Y, O), e, n);
      }
      function of(e, n, i, l) {
        return e === r || It(e, Nr[i]) && !se.call(l, i) ? n : e;
      }
      function af(e, n, i, l, c, p) {
        return ve(e) && ve(n) && (p.set(n, e), ji(e, n, r, af, p), p.delete(n)), e;
      }
      function c0(e) {
        return bo(e) ? r : e;
      }
      function sf(e, n, i, l, c, p) {
        var m = i & J, v = e.length, g = n.length;
        if (v != g && !(m && g > v))
          return !1;
        var Z = p.get(e), b = p.get(n);
        if (Z && b)
          return Z == n && b == e;
        var E = -1, x = !0, O = i & F ? new Hn() : r;
        for (p.set(e, n), p.set(n, e); ++E < v; ) {
          var Y = e[E], $ = n[E];
          if (l)
            var P = m ? l($, Y, E, n, e, p) : l(Y, $, E, e, n, p);
          if (P !== r) {
            if (P)
              continue;
            x = !1;
            break;
          }
          if (O) {
            if (!Ss(n, function(ee, ne) {
              if (!po(O, ne) && (Y === ee || c(Y, ee, i, l, p)))
                return O.push(ne);
            })) {
              x = !1;
              break;
            }
          } else if (!(Y === $ || c(Y, $, i, l, p))) {
            x = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), x;
      }
      function u0(e, n, i, l, c, p, m) {
        switch (i) {
          case vr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case ho:
            return !(e.byteLength != n.byteLength || !p(new xi(e), new xi(n)));
          case ao:
          case so:
          case lo:
            return It(+e, +n);
          case Ri:
            return e.name == n.name && e.message == n.message;
          case co:
          case uo:
            return e == n + "";
          case Wt:
            var v = Bs;
          case Ct:
            var g = l & J;
            if (v || (v = Ei), e.size != n.size && !g)
              return !1;
            var Z = m.get(e);
            if (Z)
              return Z == n;
            l |= F, m.set(e, n);
            var b = sf(v(e), v(n), l, c, p, m);
            return m.delete(e), b;
          case yi:
            if (To)
              return To.call(e) == To.call(n);
        }
        return !1;
      }
      function d0(e, n, i, l, c, p) {
        var m = i & J, v = ll(e), g = v.length, Z = ll(n), b = Z.length;
        if (g != b && !m)
          return !1;
        for (var E = g; E--; ) {
          var x = v[E];
          if (!(m ? x in n : se.call(n, x)))
            return !1;
        }
        var O = p.get(e), Y = p.get(n);
        if (O && Y)
          return O == n && Y == e;
        var $ = !0;
        p.set(e, n), p.set(n, e);
        for (var P = m; ++E < g; ) {
          x = v[E];
          var ee = e[x], ne = n[x];
          if (l)
            var ht = m ? l(ne, ee, x, n, e, p) : l(ee, ne, x, e, n, p);
          if (!(ht === r ? ee === ne || c(ee, ne, i, l, p) : ht)) {
            $ = !1;
            break;
          }
          P || (P = x == "constructor");
        }
        if ($ && !P) {
          var qe = e.constructor, pt = n.constructor;
          qe != pt && "constructor" in e && "constructor" in n && !(typeof qe == "function" && qe instanceof qe && typeof pt == "function" && pt instanceof pt) && ($ = !1);
        }
        return p.delete(e), p.delete(n), $;
      }
      function ln(e) {
        return wl(hf(e, r, Rf), e + "");
      }
      function ll(e) {
        return Md(e, We, fl);
      }
      function cl(e) {
        return Md(e, nt, lf);
      }
      var ul = Qi ? function(e) {
        return Qi.get(e);
      } : Jl;
      function na(e) {
        for (var n = e.name + "", i = kr[n], l = se.call(kr, n) ? i.length : 0; l--; ) {
          var c = i[l], p = c.func;
          if (p == null || p == e)
            return c.name;
        }
        return n;
      }
      function Jr(e) {
        var n = se.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function G() {
        var e = f.iteratee || Zl;
        return e = e === Zl ? Jd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ra(e, n) {
        var i = e.__data__;
        return T0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function dl(e) {
        for (var n = We(e), i = n.length; i--; ) {
          var l = n[i], c = e[l];
          n[i] = [l, c, df(c)];
        }
        return n;
      }
      function Ln(e, n) {
        var i = Rv(e, n);
        return bd(i) ? i : r;
      }
      function f0(e) {
        var n = se.call(e, Yn), i = e[Yn];
        try {
          e[Yn] = r;
          var l = !0;
        } catch {
        }
        var c = Wi.call(e);
        return l && (n ? e[Yn] = i : delete e[Yn]), c;
      }
      var fl = Ds ? function(e) {
        return e == null ? [] : (e = ue(e), Nn(Ds(e), function(n) {
          return hd.call(e, n);
        }));
      } : El, lf = Ds ? function(e) {
        for (var n = []; e; )
          yn(n, fl(e)), e = Bi(e);
        return n;
      } : El, Ye = Le;
      (_s && Ye(new _s(new ArrayBuffer(1))) != vr || wo && Ye(new wo()) != Wt || Os && Ye(Os.resolve()) != Nu || yr && Ye(new yr()) != Ct || vo && Ye(new vo()) != fo) && (Ye = function(e) {
        var n = Le(e), i = n == nn ? e.constructor : r, l = i ? $n(i) : "";
        if (l)
          switch (l) {
            case jv:
              return vr;
            case Xv:
              return Wt;
            case Lv:
              return Nu;
            case $v:
              return Ct;
            case qv:
              return fo;
          }
        return n;
      });
      function h0(e, n, i) {
        for (var l = -1, c = i.length; ++l < c; ) {
          var p = i[l], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = Ge(n, e + m);
              break;
            case "takeRight":
              e = Se(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function p0(e) {
        var n = e.match(g1);
        return n ? n[1].split(U1) : [];
      }
      function cf(e, n, i) {
        n = Jn(n, e);
        for (var l = -1, c = n.length, p = !1; ++l < c; ) {
          var m = Xt(n[l]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++l != c ? p : (c = e == null ? 0 : e.length, !!c && ua(c) && cn(m, c) && (j(e) || qn(e)));
      }
      function m0(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && se.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function uf(e) {
        return typeof e.constructor == "function" && !Mo(e) ? Mr(Bi(e)) : {};
      }
      function w0(e, n, i) {
        var l = e.constructor;
        switch (n) {
          case ho:
            return il(e);
          case ao:
          case so:
            return new l(+e);
          case vr:
            return KV(e, i);
          case ds:
          case fs:
          case hs:
          case ps:
          case ms:
          case ws:
          case vs:
          case Vs:
          case Ts:
            return Yd(e, i);
          case Wt:
            return new l();
          case lo:
          case uo:
            return new l(e);
          case co:
            return e0(e);
          case Ct:
            return new l();
          case yi:
            return t0(e);
        }
      }
      function v0(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), e.replace(T1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function V0(e) {
        return j(e) || qn(e) || !!(pd && e && e[pd]);
      }
      function cn(e, n) {
        var i = typeof e;
        return n = n == null ? Xe : n, !!n && (i == "number" || i != "symbol" && E1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function $e(e, n, i) {
        if (!ve(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? tt(i) && cn(n, i.length) : l == "string" && n in i) ? It(i[n], e) : !1;
      }
      function hl(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || ft(e) ? !0 : m1.test(e) || !p1.test(e) || n != null && e in ue(n);
      }
      function T0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function pl(e) {
        var n = na(e), i = f[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (e === i)
          return !0;
        var l = ul(i);
        return !!l && e === l[0];
      }
      function g0(e) {
        return !!ud && ud in e;
      }
      var U0 = Ai ? un : Sl;
      function Mo(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || Nr;
        return e === i;
      }
      function df(e) {
        return e === e && !ve(e);
      }
      function ff(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
        };
      }
      function R0(e) {
        var n = la(e, function(l) {
          return i.size === V && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function N0(e, n) {
        var i = e[1], l = n[1], c = i | l, p = c < (B | A | Q), m = l == Q && i == W || l == Q && i == z && e[7].length <= n[8] || l == (Q | z) && n[7].length <= n[8] && i == W;
        if (!(p || m))
          return e;
        l & B && (e[2] = n[2], c |= i & B ? 0 : C);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Hd(g, v, n[4]) : v, e[4] = g ? kn(e[3], U) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? jd(g, v, n[6]) : v, e[6] = g ? kn(e[5], U) : n[6]), v = n[7], v && (e[7] = v), l & Q && (e[8] = e[8] == null ? n[8] : Ge(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function y0(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function k0(e) {
        return Wi.call(e);
      }
      function hf(e, n, i) {
        return n = Se(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, p = Se(l.length - n, 0), m = y(p); ++c < p; )
            m[c] = l[n + c];
          c = -1;
          for (var v = y(n + 1); ++c < n; )
            v[c] = l[c];
          return v[n] = i(m), ct(e, this, v);
        };
      }
      function pf(e, n) {
        return n.length < 2 ? e : Xn(e, Mt(n, 0, -1));
      }
      function M0(e, n) {
        for (var i = e.length, l = Ge(n.length, i), c = et(e); l--; ) {
          var p = n[l];
          e[l] = cn(p, i) ? c[p] : r;
        }
        return e;
      }
      function ml(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var mf = vf(Bd), Zo = Ov || function(e, n) {
        return De.setTimeout(e, n);
      }, wl = vf(XV);
      function wf(e, n, i) {
        var l = n + "";
        return wl(e, v0(l, Z0(p0(l), i)));
      }
      function vf(e) {
        var n = 0, i = 0;
        return function() {
          var l = Yv(), c = Re - (l - i);
          if (i = l, c > 0) {
            if (++n >= Te)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function oa(e, n) {
        var i = -1, l = e.length, c = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = qs(i, c), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var Vf = R0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(w1, function(i, l, c, p) {
          n.push(c ? p.replace(y1, "$1") : l || i);
        }), n;
      });
      function Xt(e) {
        if (typeof e == "string" || ft(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ie ? "-0" : n;
      }
      function $n(e) {
        if (e != null) {
          try {
            return Fi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Z0(e, n) {
        return Rt(e1, function(i) {
          var l = "_." + i[0];
          n & i[1] && !bi(e, l) && e.push(l);
        }), e.sort();
      }
      function Tf(e) {
        if (e instanceof te)
          return e.clone();
        var n = new yt(e.__wrapped__, e.__chain__);
        return n.__actions__ = et(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function b0(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = Se(X(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1)
          return [];
        for (var c = 0, p = 0, m = y(_i(l / n)); c < l; )
          m[p++] = Mt(e, c, c += n);
        return m;
      }
      function J0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
          var p = e[n];
          p && (c[l++] = p);
        }
        return c;
      }
      function E0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = y(e - 1), i = arguments[0], l = e; l--; )
          n[l - 1] = arguments[l];
        return yn(j(i) ? et(i) : [i], _e(n, 1));
      }
      var S0 = q(function(e, n) {
        return Ne(e) ? Uo(e, _e(n, 1, Ne, !0)) : [];
      }), A0 = q(function(e, n) {
        var i = Zt(n);
        return Ne(i) && (i = r), Ne(e) ? Uo(e, _e(n, 1, Ne, !0), G(i, 2)) : [];
      }), F0 = q(function(e, n) {
        var i = Zt(n);
        return Ne(i) && (i = r), Ne(e) ? Uo(e, _e(n, 1, Ne, !0), r, i) : [];
      });
      function W0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), Mt(e, n < 0 ? 0 : n, l)) : [];
      }
      function C0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Mt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function x0(e, n) {
        return e && e.length ? Li(e, G(n, 3), !0, !0) : [];
      }
      function B0(e, n) {
        return e && e.length ? Li(e, G(n, 3), !0) : [];
      }
      function I0(e, n, i, l) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && $e(e, n, i) && (i = 0, l = c), EV(e, n, i, l)) : [];
      }
      function gf(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : X(i);
        return c < 0 && (c = Se(l + c, 0)), Ji(e, G(n, 3), c);
      }
      function Uf(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l - 1;
        return i !== r && (c = X(i), c = i < 0 ? Se(l + c, 0) : Ge(c, l - 1)), Ji(e, G(n, 3), c, !0);
      }
      function Rf(e) {
        var n = e == null ? 0 : e.length;
        return n ? _e(e, 1) : [];
      }
      function D0(e) {
        var n = e == null ? 0 : e.length;
        return n ? _e(e, Ie) : [];
      }
      function _0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), _e(e, n)) : [];
      }
      function O0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = {}; ++n < i; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function Nf(e) {
        return e && e.length ? e[0] : r;
      }
      function Q0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : X(i);
        return c < 0 && (c = Se(l + c, 0)), Tr(e, n, c);
      }
      function z0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Mt(e, 0, -1) : [];
      }
      var G0 = q(function(e) {
        var n = pe(e, rl);
        return n.length && n[0] === e[0] ? Hs(n) : [];
      }), Y0 = q(function(e) {
        var n = Zt(e), i = pe(e, rl);
        return n === Zt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Hs(i, G(n, 2)) : [];
      }), P0 = q(function(e) {
        var n = Zt(e), i = pe(e, rl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Hs(i, r, n) : [];
      });
      function H0(e, n) {
        return e == null ? "" : zv.call(e, n);
      }
      function Zt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function j0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l;
        return i !== r && (c = X(i), c = c < 0 ? Se(l + c, 0) : Ge(c, l - 1)), n === n ? Zv(e, n, c) : Ji(e, nd, c, !0);
      }
      function X0(e, n) {
        return e && e.length ? Fd(e, X(n)) : r;
      }
      var L0 = q(yf);
      function yf(e, n) {
        return e && e.length && n && n.length ? $s(e, n) : e;
      }
      function $0(e, n, i) {
        return e && e.length && n && n.length ? $s(e, n, G(i, 2)) : e;
      }
      function q0(e, n, i) {
        return e && e.length && n && n.length ? $s(e, n, r, i) : e;
      }
      var K0 = ln(function(e, n) {
        var i = e == null ? 0 : e.length, l = zs(e, n);
        return xd(e, pe(n, function(c) {
          return cn(c, i) ? +c : c;
        }).sort(Pd)), l;
      });
      function eT(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var l = -1, c = [], p = e.length;
        for (n = G(n, 3); ++l < p; ) {
          var m = e[l];
          n(m, l, e) && (i.push(m), c.push(l));
        }
        return xd(e, c), i;
      }
      function vl(e) {
        return e == null ? e : Hv.call(e);
      }
      function tT(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (i && typeof i != "number" && $e(e, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === r ? l : X(i)), Mt(e, n, i)) : [];
      }
      function nT(e, n) {
        return Xi(e, n);
      }
      function rT(e, n, i) {
        return el(e, n, G(i, 2));
      }
      function oT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Xi(e, n);
          if (l < i && It(e[l], n))
            return l;
        }
        return -1;
      }
      function iT(e, n) {
        return Xi(e, n, !0);
      }
      function aT(e, n, i) {
        return el(e, n, G(i, 2), !0);
      }
      function sT(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Xi(e, n, !0) - 1;
          if (It(e[l], n))
            return l;
        }
        return -1;
      }
      function lT(e) {
        return e && e.length ? Id(e) : [];
      }
      function cT(e, n) {
        return e && e.length ? Id(e, G(n, 2)) : [];
      }
      function uT(e) {
        var n = e == null ? 0 : e.length;
        return n ? Mt(e, 1, n) : [];
      }
      function dT(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), Mt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function fT(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Mt(e, n < 0 ? 0 : n, l)) : [];
      }
      function hT(e, n) {
        return e && e.length ? Li(e, G(n, 3), !1, !0) : [];
      }
      function pT(e, n) {
        return e && e.length ? Li(e, G(n, 3)) : [];
      }
      var mT = q(function(e) {
        return bn(_e(e, 1, Ne, !0));
      }), wT = q(function(e) {
        var n = Zt(e);
        return Ne(n) && (n = r), bn(_e(e, 1, Ne, !0), G(n, 2));
      }), vT = q(function(e) {
        var n = Zt(e);
        return n = typeof n == "function" ? n : r, bn(_e(e, 1, Ne, !0), r, n);
      });
      function VT(e) {
        return e && e.length ? bn(e) : [];
      }
      function TT(e, n) {
        return e && e.length ? bn(e, G(n, 2)) : [];
      }
      function gT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? bn(e, r, n) : [];
      }
      function Vl(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Nn(e, function(i) {
          if (Ne(i))
            return n = Se(i.length, n), !0;
        }), Cs(n, function(i) {
          return pe(e, As(i));
        });
      }
      function kf(e, n) {
        if (!(e && e.length))
          return [];
        var i = Vl(e);
        return n == null ? i : pe(i, function(l) {
          return ct(n, r, l);
        });
      }
      var UT = q(function(e, n) {
        return Ne(e) ? Uo(e, n) : [];
      }), RT = q(function(e) {
        return nl(Nn(e, Ne));
      }), NT = q(function(e) {
        var n = Zt(e);
        return Ne(n) && (n = r), nl(Nn(e, Ne), G(n, 2));
      }), yT = q(function(e) {
        var n = Zt(e);
        return n = typeof n == "function" ? n : r, nl(Nn(e, Ne), r, n);
      }), kT = q(Vl);
      function MT(e, n) {
        return Qd(e || [], n || [], go);
      }
      function ZT(e, n) {
        return Qd(e || [], n || [], yo);
      }
      var bT = q(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, kf(e, i);
      });
      function Mf(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function JT(e, n) {
        return n(e), e;
      }
      function ia(e, n) {
        return n(e);
      }
      var ET = ln(function(e) {
        var n = e.length, i = n ? e[0] : 0, l = this.__wrapped__, c = function(p) {
          return zs(p, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !cn(i) ? this.thru(c) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: ia,
          args: [c],
          thisArg: r
        }), new yt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function ST() {
        return Mf(this);
      }
      function AT() {
        return new yt(this.value(), this.__chain__);
      }
      function FT() {
        this.__values__ === r && (this.__values__ = _f(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function WT() {
        return this;
      }
      function CT(e) {
        for (var n, i = this; i instanceof Gi; ) {
          var l = Tf(i);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function xT() {
        var e = this.__wrapped__;
        if (e instanceof te) {
          var n = e;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: ia,
            args: [vl],
            thisArg: r
          }), new yt(n, this.__chain__);
        }
        return this.thru(vl);
      }
      function BT() {
        return Od(this.__wrapped__, this.__actions__);
      }
      var IT = $i(function(e, n, i) {
        se.call(e, i) ? ++e[i] : an(e, i, 1);
      });
      function DT(e, n, i) {
        var l = j(e) ? ed : JV;
        return i && $e(e, n, i) && (n = r), l(e, G(n, 3));
      }
      function _T(e, n) {
        var i = j(e) ? Nn : yd;
        return i(e, G(n, 3));
      }
      var OT = qd(gf), QT = qd(Uf);
      function zT(e, n) {
        return _e(aa(e, n), 1);
      }
      function GT(e, n) {
        return _e(aa(e, n), Ie);
      }
      function YT(e, n, i) {
        return i = i === r ? 1 : X(i), _e(aa(e, n), i);
      }
      function Zf(e, n) {
        var i = j(e) ? Rt : Zn;
        return i(e, G(n, 3));
      }
      function bf(e, n) {
        var i = j(e) ? uv : Nd;
        return i(e, G(n, 3));
      }
      var PT = $i(function(e, n, i) {
        se.call(e, i) ? e[i].push(n) : an(e, i, [n]);
      });
      function HT(e, n, i, l) {
        e = tt(e) ? e : Sr(e), i = i && !l ? X(i) : 0;
        var c = e.length;
        return i < 0 && (i = Se(c + i, 0)), da(e) ? i <= c && e.indexOf(n, i) > -1 : !!c && Tr(e, n, i) > -1;
      }
      var jT = q(function(e, n, i) {
        var l = -1, c = typeof n == "function", p = tt(e) ? y(e.length) : [];
        return Zn(e, function(m) {
          p[++l] = c ? ct(n, m, i) : Ro(m, n, i);
        }), p;
      }), XT = $i(function(e, n, i) {
        an(e, i, n);
      });
      function aa(e, n) {
        var i = j(e) ? pe : Ed;
        return i(e, G(n, 3));
      }
      function LT(e, n, i, l) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = l ? r : i, j(i) || (i = i == null ? [] : [i]), Wd(e, n, i));
      }
      var $T = $i(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function qT(e, n, i) {
        var l = j(e) ? Es : od, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, Zn);
      }
      function KT(e, n, i) {
        var l = j(e) ? dv : od, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, Nd);
      }
      function eg(e, n) {
        var i = j(e) ? Nn : yd;
        return i(e, ca(G(n, 3)));
      }
      function tg(e) {
        var n = j(e) ? Td : HV;
        return n(e);
      }
      function ng(e, n, i) {
        (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n);
        var l = j(e) ? yV : jV;
        return l(e, n);
      }
      function rg(e) {
        var n = j(e) ? kV : LV;
        return n(e);
      }
      function og(e) {
        if (e == null)
          return 0;
        if (tt(e))
          return da(e) ? Ur(e) : e.length;
        var n = Ye(e);
        return n == Wt || n == Ct ? e.size : Xs(e).length;
      }
      function ig(e, n, i) {
        var l = j(e) ? Ss : $V;
        return i && $e(e, n, i) && (n = r), l(e, G(n, 3));
      }
      var ag = q(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && $e(e, n[0], n[1]) ? n = [] : i > 2 && $e(n[0], n[1], n[2]) && (n = [n[0]]), Wd(e, _e(n, 1), []);
      }), sa = _v || function() {
        return De.Date.now();
      };
      function sg(e, n) {
        if (typeof n != "function")
          throw new Nt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Jf(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, sn(e, Q, r, r, r, r, n);
      }
      function Ef(e, n) {
        var i;
        if (typeof n != "function")
          throw new Nt(d);
        return e = X(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var Tl = q(function(e, n, i) {
        var l = B;
        if (i.length) {
          var c = kn(i, Jr(Tl));
          l |= k;
        }
        return sn(e, l, n, i, c);
      }), Sf = q(function(e, n, i) {
        var l = B | A;
        if (i.length) {
          var c = kn(i, Jr(Sf));
          l |= k;
        }
        return sn(n, l, e, i, c);
      });
      function Af(e, n, i) {
        n = i ? r : n;
        var l = sn(e, W, r, r, r, r, r, n);
        return l.placeholder = Af.placeholder, l;
      }
      function Ff(e, n, i) {
        n = i ? r : n;
        var l = sn(e, I, r, r, r, r, r, n);
        return l.placeholder = Ff.placeholder, l;
      }
      function Wf(e, n, i) {
        var l, c, p, m, v, g, Z = 0, b = !1, E = !1, x = !0;
        if (typeof e != "function")
          throw new Nt(d);
        n = bt(n) || 0, ve(i) && (b = !!i.leading, E = "maxWait" in i, p = E ? Se(bt(i.maxWait) || 0, n) : p, x = "trailing" in i ? !!i.trailing : x);
        function O(ye) {
          var Dt = l, fn = c;
          return l = c = r, Z = ye, m = e.apply(fn, Dt), m;
        }
        function Y(ye) {
          return Z = ye, v = Zo(ee, n), b ? O(ye) : m;
        }
        function $(ye) {
          var Dt = ye - g, fn = ye - Z, Kf = n - Dt;
          return E ? Ge(Kf, p - fn) : Kf;
        }
        function P(ye) {
          var Dt = ye - g, fn = ye - Z;
          return g === r || Dt >= n || Dt < 0 || E && fn >= p;
        }
        function ee() {
          var ye = sa();
          if (P(ye))
            return ne(ye);
          v = Zo(ee, $(ye));
        }
        function ne(ye) {
          return v = r, x && l ? O(ye) : (l = c = r, m);
        }
        function ht() {
          v !== r && zd(v), Z = 0, l = g = c = v = r;
        }
        function qe() {
          return v === r ? m : ne(sa());
        }
        function pt() {
          var ye = sa(), Dt = P(ye);
          if (l = arguments, c = this, g = ye, Dt) {
            if (v === r)
              return Y(g);
            if (E)
              return zd(v), v = Zo(ee, n), O(g);
          }
          return v === r && (v = Zo(ee, n)), m;
        }
        return pt.cancel = ht, pt.flush = qe, pt;
      }
      var lg = q(function(e, n) {
        return Rd(e, 1, n);
      }), cg = q(function(e, n, i) {
        return Rd(e, bt(n) || 0, i);
      });
      function ug(e) {
        return sn(e, we);
      }
      function la(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Nt(d);
        var i = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(c))
            return p.get(c);
          var m = e.apply(this, l);
          return i.cache = p.set(c, m) || p, m;
        };
        return i.cache = new (la.Cache || on)(), i;
      }
      la.Cache = on;
      function ca(e) {
        if (typeof e != "function")
          throw new Nt(d);
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
      function dg(e) {
        return Ef(2, e);
      }
      var fg = qV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? pe(n[0], ut(G())) : pe(_e(n, 1), ut(G()));
        var i = n.length;
        return q(function(l) {
          for (var c = -1, p = Ge(l.length, i); ++c < p; )
            l[c] = n[c].call(this, l[c]);
          return ct(e, this, l);
        });
      }), gl = q(function(e, n) {
        var i = kn(n, Jr(gl));
        return sn(e, k, r, n, i);
      }), Cf = q(function(e, n) {
        var i = kn(n, Jr(Cf));
        return sn(e, _, r, n, i);
      }), hg = ln(function(e, n) {
        return sn(e, z, r, r, r, n);
      });
      function pg(e, n) {
        if (typeof e != "function")
          throw new Nt(d);
        return n = n === r ? n : X(n), q(e, n);
      }
      function mg(e, n) {
        if (typeof e != "function")
          throw new Nt(d);
        return n = n == null ? 0 : Se(X(n), 0), q(function(i) {
          var l = i[n], c = En(i, 0, n);
          return l && yn(c, l), ct(e, this, c);
        });
      }
      function wg(e, n, i) {
        var l = !0, c = !0;
        if (typeof e != "function")
          throw new Nt(d);
        return ve(i) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), Wf(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function vg(e) {
        return Jf(e, 1);
      }
      function Vg(e, n) {
        return gl(ol(n), e);
      }
      function Tg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function gg(e) {
        return kt(e, S);
      }
      function Ug(e, n) {
        return n = typeof n == "function" ? n : r, kt(e, S, n);
      }
      function Rg(e) {
        return kt(e, R | S);
      }
      function Ng(e, n) {
        return n = typeof n == "function" ? n : r, kt(e, R | S, n);
      }
      function yg(e, n) {
        return n == null || Ud(e, n, We(n));
      }
      function It(e, n) {
        return e === n || e !== e && n !== n;
      }
      var kg = ta(Ps), Mg = ta(function(e, n) {
        return e >= n;
      }), qn = Zd(function() {
        return arguments;
      }()) ? Zd : function(e) {
        return ge(e) && se.call(e, "callee") && !hd.call(e, "callee");
      }, j = y.isArray, Zg = ju ? ut(ju) : CV;
      function tt(e) {
        return e != null && ua(e.length) && !un(e);
      }
      function Ne(e) {
        return ge(e) && tt(e);
      }
      function bg(e) {
        return e === !0 || e === !1 || ge(e) && Le(e) == ao;
      }
      var Sn = Qv || Sl, Jg = Xu ? ut(Xu) : xV;
      function Eg(e) {
        return ge(e) && e.nodeType === 1 && !bo(e);
      }
      function Sg(e) {
        if (e == null)
          return !0;
        if (tt(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || Sn(e) || Er(e) || qn(e)))
          return !e.length;
        var n = Ye(e);
        if (n == Wt || n == Ct)
          return !e.size;
        if (Mo(e))
          return !Xs(e).length;
        for (var i in e)
          if (se.call(e, i))
            return !1;
        return !0;
      }
      function Ag(e, n) {
        return No(e, n);
      }
      function Fg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(e, n) : r;
        return l === r ? No(e, n, r, i) : !!l;
      }
      function Ul(e) {
        if (!ge(e))
          return !1;
        var n = Le(e);
        return n == Ri || n == n1 || typeof e.message == "string" && typeof e.name == "string" && !bo(e);
      }
      function Wg(e) {
        return typeof e == "number" && md(e);
      }
      function un(e) {
        if (!ve(e))
          return !1;
        var n = Le(e);
        return n == Ni || n == Ru || n == t1 || n == o1;
      }
      function xf(e) {
        return typeof e == "number" && e == X(e);
      }
      function ua(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xe;
      }
      function ve(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ge(e) {
        return e != null && typeof e == "object";
      }
      var Bf = Lu ? ut(Lu) : IV;
      function Cg(e, n) {
        return e === n || js(e, n, dl(n));
      }
      function xg(e, n, i) {
        return i = typeof i == "function" ? i : r, js(e, n, dl(n), i);
      }
      function Bg(e) {
        return If(e) && e != +e;
      }
      function Ig(e) {
        if (U0(e))
          throw new H(u);
        return bd(e);
      }
      function Dg(e) {
        return e === null;
      }
      function _g(e) {
        return e == null;
      }
      function If(e) {
        return typeof e == "number" || ge(e) && Le(e) == lo;
      }
      function bo(e) {
        if (!ge(e) || Le(e) != nn)
          return !1;
        var n = Bi(e);
        if (n === null)
          return !0;
        var i = se.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Fi.call(i) == xv;
      }
      var Rl = $u ? ut($u) : DV;
      function Og(e) {
        return xf(e) && e >= -Xe && e <= Xe;
      }
      var Df = qu ? ut(qu) : _V;
      function da(e) {
        return typeof e == "string" || !j(e) && ge(e) && Le(e) == uo;
      }
      function ft(e) {
        return typeof e == "symbol" || ge(e) && Le(e) == yi;
      }
      var Er = Ku ? ut(Ku) : OV;
      function Qg(e) {
        return e === r;
      }
      function zg(e) {
        return ge(e) && Ye(e) == fo;
      }
      function Gg(e) {
        return ge(e) && Le(e) == a1;
      }
      var Yg = ta(Ls), Pg = ta(function(e, n) {
        return e <= n;
      });
      function _f(e) {
        if (!e)
          return [];
        if (tt(e))
          return da(e) ? xt(e) : et(e);
        if (mo && e[mo])
          return yv(e[mo]());
        var n = Ye(e), i = n == Wt ? Bs : n == Ct ? Ei : Sr;
        return i(e);
      }
      function dn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = bt(e), e === Ie || e === -Ie) {
          var n = e < 0 ? -1 : 1;
          return n * io;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = dn(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Of(e) {
        return e ? jn(X(e), 0, Pt) : 0;
      }
      function bt(e) {
        if (typeof e == "number")
          return e;
        if (ft(e))
          return gi;
        if (ve(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ve(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = id(e);
        var i = Z1.test(e);
        return i || J1.test(e) ? sv(e.slice(2), i ? 2 : 8) : M1.test(e) ? gi : +e;
      }
      function Qf(e) {
        return jt(e, nt(e));
      }
      function Hg(e) {
        return e ? jn(X(e), -Xe, Xe) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : dt(e);
      }
      var jg = Zr(function(e, n) {
        if (Mo(n) || tt(n)) {
          jt(n, We(n), e);
          return;
        }
        for (var i in n)
          se.call(n, i) && go(e, i, n[i]);
      }), zf = Zr(function(e, n) {
        jt(n, nt(n), e);
      }), fa = Zr(function(e, n, i, l) {
        jt(n, nt(n), e, l);
      }), Xg = Zr(function(e, n, i, l) {
        jt(n, We(n), e, l);
      }), Lg = ln(zs);
      function $g(e, n) {
        var i = Mr(e);
        return n == null ? i : gd(i, n);
      }
      var qg = q(function(e, n) {
        e = ue(e);
        var i = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && $e(n[0], n[1], c) && (l = 1); ++i < l; )
          for (var p = n[i], m = nt(p), v = -1, g = m.length; ++v < g; ) {
            var Z = m[v], b = e[Z];
            (b === r || It(b, Nr[Z]) && !se.call(e, Z)) && (e[Z] = p[Z]);
          }
        return e;
      }), Kg = q(function(e) {
        return e.push(r, af), ct(Gf, r, e);
      });
      function eU(e, n) {
        return td(e, G(n, 3), Ht);
      }
      function tU(e, n) {
        return td(e, G(n, 3), Ys);
      }
      function nU(e, n) {
        return e == null ? e : Gs(e, G(n, 3), nt);
      }
      function rU(e, n) {
        return e == null ? e : kd(e, G(n, 3), nt);
      }
      function oU(e, n) {
        return e && Ht(e, G(n, 3));
      }
      function iU(e, n) {
        return e && Ys(e, G(n, 3));
      }
      function aU(e) {
        return e == null ? [] : Hi(e, We(e));
      }
      function sU(e) {
        return e == null ? [] : Hi(e, nt(e));
      }
      function Nl(e, n, i) {
        var l = e == null ? r : Xn(e, n);
        return l === r ? i : l;
      }
      function lU(e, n) {
        return e != null && cf(e, n, SV);
      }
      function yl(e, n) {
        return e != null && cf(e, n, AV);
      }
      var cU = ef(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Wi.call(n)), e[n] = i;
      }, Ml(rt)), uU = ef(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = Wi.call(n)), se.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, G), dU = q(Ro);
      function We(e) {
        return tt(e) ? Vd(e) : Xs(e);
      }
      function nt(e) {
        return tt(e) ? Vd(e, !0) : QV(e);
      }
      function fU(e, n) {
        var i = {};
        return n = G(n, 3), Ht(e, function(l, c, p) {
          an(i, n(l, c, p), l);
        }), i;
      }
      function hU(e, n) {
        var i = {};
        return n = G(n, 3), Ht(e, function(l, c, p) {
          an(i, c, n(l, c, p));
        }), i;
      }
      var pU = Zr(function(e, n, i) {
        ji(e, n, i);
      }), Gf = Zr(function(e, n, i, l) {
        ji(e, n, i, l);
      }), mU = ln(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var l = !1;
        n = pe(n, function(p) {
          return p = Jn(p, e), l || (l = p.length > 1), p;
        }), jt(e, cl(e), i), l && (i = kt(i, R | N | S, c0));
        for (var c = n.length; c--; )
          tl(i, n[c]);
        return i;
      });
      function wU(e, n) {
        return Yf(e, ca(G(n)));
      }
      var vU = ln(function(e, n) {
        return e == null ? {} : GV(e, n);
      });
      function Yf(e, n) {
        if (e == null)
          return {};
        var i = pe(cl(e), function(l) {
          return [l];
        });
        return n = G(n), Cd(e, i, function(l, c) {
          return n(l, c[0]);
        });
      }
      function VU(e, n, i) {
        n = Jn(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var p = e == null ? r : e[Xt(n[l])];
          p === r && (l = c, p = i), e = un(p) ? p.call(e) : p;
        }
        return e;
      }
      function TU(e, n, i) {
        return e == null ? e : yo(e, n, i);
      }
      function gU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : yo(e, n, i, l);
      }
      var Pf = rf(We), Hf = rf(nt);
      function UU(e, n, i) {
        var l = j(e), c = l || Sn(e) || Er(e);
        if (n = G(n, 4), i == null) {
          var p = e && e.constructor;
          c ? i = l ? new p() : [] : ve(e) ? i = un(p) ? Mr(Bi(e)) : {} : i = {};
        }
        return (c ? Rt : Ht)(e, function(m, v, g) {
          return n(i, m, v, g);
        }), i;
      }
      function RU(e, n) {
        return e == null ? !0 : tl(e, n);
      }
      function NU(e, n, i) {
        return e == null ? e : _d(e, n, ol(i));
      }
      function yU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : _d(e, n, ol(i), l);
      }
      function Sr(e) {
        return e == null ? [] : xs(e, We(e));
      }
      function kU(e) {
        return e == null ? [] : xs(e, nt(e));
      }
      function MU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = bt(i), i = i === i ? i : 0), n !== r && (n = bt(n), n = n === n ? n : 0), jn(bt(e), n, i);
      }
      function ZU(e, n, i) {
        return n = dn(n), i === r ? (i = n, n = 0) : i = dn(i), e = bt(e), FV(e, n, i);
      }
      function bU(e, n, i) {
        if (i && typeof i != "boolean" && $e(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = dn(e), n === r ? (n = e, e = 0) : n = dn(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (i || e % 1 || n % 1) {
          var c = wd();
          return Ge(e + c * (n - e + av("1e-" + ((c + "").length - 1))), n);
        }
        return qs(e, n);
      }
      var JU = br(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? jf(n) : n);
      });
      function jf(e) {
        return kl(ie(e).toLowerCase());
      }
      function Xf(e) {
        return e = ie(e), e && e.replace(S1, Tv).replace(L1, "");
      }
      function EU(e, n, i) {
        e = ie(e), n = dt(n);
        var l = e.length;
        i = i === r ? l : jn(X(i), 0, l);
        var c = i;
        return i -= n.length, i >= 0 && e.slice(i, c) == n;
      }
      function SU(e) {
        return e = ie(e), e && d1.test(e) ? e.replace(ku, gv) : e;
      }
      function AU(e) {
        return e = ie(e), e && v1.test(e) ? e.replace(gs, "\\$&") : e;
      }
      var FU = br(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), WU = br(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), CU = $d("toLowerCase");
      function xU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? Ur(e) : 0;
        if (!n || l >= n)
          return e;
        var c = (n - l) / 2;
        return ea(Oi(c), i) + e + ea(_i(c), i);
      }
      function BU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? Ur(e) : 0;
        return n && l < n ? e + ea(n - l, i) : e;
      }
      function IU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? Ur(e) : 0;
        return n && l < n ? ea(n - l, i) + e : e;
      }
      function DU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), Pv(ie(e).replace(Us, ""), n || 0);
      }
      function _U(e, n, i) {
        return (i ? $e(e, n, i) : n === r) ? n = 1 : n = X(n), Ks(ie(e), n);
      }
      function OU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var QU = br(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function zU(e, n, i) {
        return i && typeof i != "number" && $e(e, n, i) && (n = i = r), i = i === r ? Pt : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !Rl(n)) && (n = dt(n), !n && gr(e)) ? En(xt(e), 0, i) : e.split(n, i)) : [];
      }
      var GU = br(function(e, n, i) {
        return e + (i ? " " : "") + kl(n);
      });
      function YU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : jn(X(i), 0, e.length), n = dt(n), e.slice(i, i + n.length) == n;
      }
      function PU(e, n, i) {
        var l = f.templateSettings;
        i && $e(e, n, i) && (n = r), e = ie(e), n = fa({}, n, l, of);
        var c = fa({}, n.imports, l.imports, of), p = We(c), m = xs(c, p), v, g, Z = 0, b = n.interpolate || ki, E = "__p += '", x = Is(
          (n.escape || ki).source + "|" + b.source + "|" + (b === Mu ? k1 : ki).source + "|" + (n.evaluate || ki).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (se.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tv + "]") + `
`;
        e.replace(x, function(P, ee, ne, ht, qe, pt) {
          return ne || (ne = ht), E += e.slice(Z, pt).replace(A1, Uv), ee && (v = !0, E += `' +
__e(` + ee + `) +
'`), qe && (g = !0, E += `';
` + qe + `;
__p += '`), ne && (E += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), Z = pt + P.length, P;
        }), E += `';
`;
        var Y = se.call(n, "variable") && n.variable;
        if (!Y)
          E = `with (obj) {
` + E + `
}
`;
        else if (N1.test(Y))
          throw new H(h);
        E = (g ? E.replace(s1, "") : E).replace(l1, "$1").replace(c1, "$1;"), E = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`;
        var $ = $f(function() {
          return re(p, O + "return " + E).apply(r, m);
        });
        if ($.source = E, Ul($))
          throw $;
        return $;
      }
      function HU(e) {
        return ie(e).toLowerCase();
      }
      function jU(e) {
        return ie(e).toUpperCase();
      }
      function XU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return id(e);
        if (!e || !(n = dt(n)))
          return e;
        var l = xt(e), c = xt(n), p = ad(l, c), m = sd(l, c) + 1;
        return En(l, p, m).join("");
      }
      function LU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, cd(e) + 1);
        if (!e || !(n = dt(n)))
          return e;
        var l = xt(e), c = sd(l, xt(n)) + 1;
        return En(l, 0, c).join("");
      }
      function $U(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(Us, "");
        if (!e || !(n = dt(n)))
          return e;
        var l = xt(e), c = ad(l, xt(n));
        return En(l, c).join("");
      }
      function qU(e, n) {
        var i = de, l = Ve;
        if (ve(n)) {
          var c = "separator" in n ? n.separator : c;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? dt(n.omission) : l;
        }
        e = ie(e);
        var p = e.length;
        if (gr(e)) {
          var m = xt(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var v = i - Ur(l);
        if (v < 1)
          return l;
        var g = m ? En(m, 0, v).join("") : e.slice(0, v);
        if (c === r)
          return g + l;
        if (m && (v += g.length - v), Rl(c)) {
          if (e.slice(v).search(c)) {
            var Z, b = g;
            for (c.global || (c = Is(c.source, ie(Zu.exec(c)) + "g")), c.lastIndex = 0; Z = c.exec(b); )
              var E = Z.index;
            g = g.slice(0, E === r ? v : E);
          }
        } else if (e.indexOf(dt(c), v) != v) {
          var x = g.lastIndexOf(c);
          x > -1 && (g = g.slice(0, x));
        }
        return g + l;
      }
      function KU(e) {
        return e = ie(e), e && u1.test(e) ? e.replace(yu, bv) : e;
      }
      var eR = br(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), kl = $d("toUpperCase");
      function Lf(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? Nv(e) ? Sv(e) : pv(e) : e.match(n) || [];
      }
      var $f = q(function(e, n) {
        try {
          return ct(e, r, n);
        } catch (i) {
          return Ul(i) ? i : new H(i);
        }
      }), tR = ln(function(e, n) {
        return Rt(n, function(i) {
          i = Xt(i), an(e, i, Tl(e[i], e));
        }), e;
      });
      function nR(e) {
        var n = e == null ? 0 : e.length, i = G();
        return e = n ? pe(e, function(l) {
          if (typeof l[1] != "function")
            throw new Nt(d);
          return [i(l[0]), l[1]];
        }) : [], q(function(l) {
          for (var c = -1; ++c < n; ) {
            var p = e[c];
            if (ct(p[0], this, l))
              return ct(p[1], this, l);
          }
        });
      }
      function rR(e) {
        return bV(kt(e, R));
      }
      function Ml(e) {
        return function() {
          return e;
        };
      }
      function oR(e, n) {
        return e == null || e !== e ? n : e;
      }
      var iR = Kd(), aR = Kd(!0);
      function rt(e) {
        return e;
      }
      function Zl(e) {
        return Jd(typeof e == "function" ? e : kt(e, R));
      }
      function sR(e) {
        return Sd(kt(e, R));
      }
      function lR(e, n) {
        return Ad(e, kt(n, R));
      }
      var cR = q(function(e, n) {
        return function(i) {
          return Ro(i, e, n);
        };
      }), uR = q(function(e, n) {
        return function(i) {
          return Ro(e, i, n);
        };
      });
      function bl(e, n, i) {
        var l = We(n), c = Hi(n, l);
        i == null && !(ve(n) && (c.length || !l.length)) && (i = n, n = e, e = this, c = Hi(n, We(n)));
        var p = !(ve(i) && "chain" in i) || !!i.chain, m = un(e);
        return Rt(c, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var b = e(this.__wrapped__), E = b.__actions__ = et(this.__actions__);
              return E.push({ func: g, args: arguments, thisArg: e }), b.__chain__ = Z, b;
            }
            return g.apply(e, yn([this.value()], arguments));
          });
        }), e;
      }
      function dR() {
        return De._ === this && (De._ = Bv), this;
      }
      function Jl() {
      }
      function fR(e) {
        return e = X(e), q(function(n) {
          return Fd(n, e);
        });
      }
      var hR = al(pe), pR = al(ed), mR = al(Ss);
      function qf(e) {
        return hl(e) ? As(Xt(e)) : YV(e);
      }
      function wR(e) {
        return function(n) {
          return e == null ? r : Xn(e, n);
        };
      }
      var vR = tf(), VR = tf(!0);
      function El() {
        return [];
      }
      function Sl() {
        return !1;
      }
      function TR() {
        return {};
      }
      function gR() {
        return "";
      }
      function UR() {
        return !0;
      }
      function RR(e, n) {
        if (e = X(e), e < 1 || e > Xe)
          return [];
        var i = Pt, l = Ge(e, Pt);
        n = G(n), e -= Pt;
        for (var c = Cs(l, n); ++i < e; )
          n(i);
        return c;
      }
      function NR(e) {
        return j(e) ? pe(e, Xt) : ft(e) ? [e] : et(Vf(ie(e)));
      }
      function yR(e) {
        var n = ++Cv;
        return ie(e) + n;
      }
      var kR = Ki(function(e, n) {
        return e + n;
      }, 0), MR = sl("ceil"), ZR = Ki(function(e, n) {
        return e / n;
      }, 1), bR = sl("floor");
      function JR(e) {
        return e && e.length ? Pi(e, rt, Ps) : r;
      }
      function ER(e, n) {
        return e && e.length ? Pi(e, G(n, 2), Ps) : r;
      }
      function SR(e) {
        return rd(e, rt);
      }
      function AR(e, n) {
        return rd(e, G(n, 2));
      }
      function FR(e) {
        return e && e.length ? Pi(e, rt, Ls) : r;
      }
      function WR(e, n) {
        return e && e.length ? Pi(e, G(n, 2), Ls) : r;
      }
      var CR = Ki(function(e, n) {
        return e * n;
      }, 1), xR = sl("round"), BR = Ki(function(e, n) {
        return e - n;
      }, 0);
      function IR(e) {
        return e && e.length ? Ws(e, rt) : 0;
      }
      function DR(e, n) {
        return e && e.length ? Ws(e, G(n, 2)) : 0;
      }
      return f.after = sg, f.ary = Jf, f.assign = jg, f.assignIn = zf, f.assignInWith = fa, f.assignWith = Xg, f.at = Lg, f.before = Ef, f.bind = Tl, f.bindAll = tR, f.bindKey = Sf, f.castArray = Tg, f.chain = Mf, f.chunk = b0, f.compact = J0, f.concat = E0, f.cond = nR, f.conforms = rR, f.constant = Ml, f.countBy = IT, f.create = $g, f.curry = Af, f.curryRight = Ff, f.debounce = Wf, f.defaults = qg, f.defaultsDeep = Kg, f.defer = lg, f.delay = cg, f.difference = S0, f.differenceBy = A0, f.differenceWith = F0, f.drop = W0, f.dropRight = C0, f.dropRightWhile = x0, f.dropWhile = B0, f.fill = I0, f.filter = _T, f.flatMap = zT, f.flatMapDeep = GT, f.flatMapDepth = YT, f.flatten = Rf, f.flattenDeep = D0, f.flattenDepth = _0, f.flip = ug, f.flow = iR, f.flowRight = aR, f.fromPairs = O0, f.functions = aU, f.functionsIn = sU, f.groupBy = PT, f.initial = z0, f.intersection = G0, f.intersectionBy = Y0, f.intersectionWith = P0, f.invert = cU, f.invertBy = uU, f.invokeMap = jT, f.iteratee = Zl, f.keyBy = XT, f.keys = We, f.keysIn = nt, f.map = aa, f.mapKeys = fU, f.mapValues = hU, f.matches = sR, f.matchesProperty = lR, f.memoize = la, f.merge = pU, f.mergeWith = Gf, f.method = cR, f.methodOf = uR, f.mixin = bl, f.negate = ca, f.nthArg = fR, f.omit = mU, f.omitBy = wU, f.once = dg, f.orderBy = LT, f.over = hR, f.overArgs = fg, f.overEvery = pR, f.overSome = mR, f.partial = gl, f.partialRight = Cf, f.partition = $T, f.pick = vU, f.pickBy = Yf, f.property = qf, f.propertyOf = wR, f.pull = L0, f.pullAll = yf, f.pullAllBy = $0, f.pullAllWith = q0, f.pullAt = K0, f.range = vR, f.rangeRight = VR, f.rearg = hg, f.reject = eg, f.remove = eT, f.rest = pg, f.reverse = vl, f.sampleSize = ng, f.set = TU, f.setWith = gU, f.shuffle = rg, f.slice = tT, f.sortBy = ag, f.sortedUniq = lT, f.sortedUniqBy = cT, f.split = zU, f.spread = mg, f.tail = uT, f.take = dT, f.takeRight = fT, f.takeRightWhile = hT, f.takeWhile = pT, f.tap = JT, f.throttle = wg, f.thru = ia, f.toArray = _f, f.toPairs = Pf, f.toPairsIn = Hf, f.toPath = NR, f.toPlainObject = Qf, f.transform = UU, f.unary = vg, f.union = mT, f.unionBy = wT, f.unionWith = vT, f.uniq = VT, f.uniqBy = TT, f.uniqWith = gT, f.unset = RU, f.unzip = Vl, f.unzipWith = kf, f.update = NU, f.updateWith = yU, f.values = Sr, f.valuesIn = kU, f.without = UT, f.words = Lf, f.wrap = Vg, f.xor = RT, f.xorBy = NT, f.xorWith = yT, f.zip = kT, f.zipObject = MT, f.zipObjectDeep = ZT, f.zipWith = bT, f.entries = Pf, f.entriesIn = Hf, f.extend = zf, f.extendWith = fa, bl(f, f), f.add = kR, f.attempt = $f, f.camelCase = JU, f.capitalize = jf, f.ceil = MR, f.clamp = MU, f.clone = gg, f.cloneDeep = Rg, f.cloneDeepWith = Ng, f.cloneWith = Ug, f.conformsTo = yg, f.deburr = Xf, f.defaultTo = oR, f.divide = ZR, f.endsWith = EU, f.eq = It, f.escape = SU, f.escapeRegExp = AU, f.every = DT, f.find = OT, f.findIndex = gf, f.findKey = eU, f.findLast = QT, f.findLastIndex = Uf, f.findLastKey = tU, f.floor = bR, f.forEach = Zf, f.forEachRight = bf, f.forIn = nU, f.forInRight = rU, f.forOwn = oU, f.forOwnRight = iU, f.get = Nl, f.gt = kg, f.gte = Mg, f.has = lU, f.hasIn = yl, f.head = Nf, f.identity = rt, f.includes = HT, f.indexOf = Q0, f.inRange = ZU, f.invoke = dU, f.isArguments = qn, f.isArray = j, f.isArrayBuffer = Zg, f.isArrayLike = tt, f.isArrayLikeObject = Ne, f.isBoolean = bg, f.isBuffer = Sn, f.isDate = Jg, f.isElement = Eg, f.isEmpty = Sg, f.isEqual = Ag, f.isEqualWith = Fg, f.isError = Ul, f.isFinite = Wg, f.isFunction = un, f.isInteger = xf, f.isLength = ua, f.isMap = Bf, f.isMatch = Cg, f.isMatchWith = xg, f.isNaN = Bg, f.isNative = Ig, f.isNil = _g, f.isNull = Dg, f.isNumber = If, f.isObject = ve, f.isObjectLike = ge, f.isPlainObject = bo, f.isRegExp = Rl, f.isSafeInteger = Og, f.isSet = Df, f.isString = da, f.isSymbol = ft, f.isTypedArray = Er, f.isUndefined = Qg, f.isWeakMap = zg, f.isWeakSet = Gg, f.join = H0, f.kebabCase = FU, f.last = Zt, f.lastIndexOf = j0, f.lowerCase = WU, f.lowerFirst = CU, f.lt = Yg, f.lte = Pg, f.max = JR, f.maxBy = ER, f.mean = SR, f.meanBy = AR, f.min = FR, f.minBy = WR, f.stubArray = El, f.stubFalse = Sl, f.stubObject = TR, f.stubString = gR, f.stubTrue = UR, f.multiply = CR, f.nth = X0, f.noConflict = dR, f.noop = Jl, f.now = sa, f.pad = xU, f.padEnd = BU, f.padStart = IU, f.parseInt = DU, f.random = bU, f.reduce = qT, f.reduceRight = KT, f.repeat = _U, f.replace = OU, f.result = VU, f.round = xR, f.runInContext = T, f.sample = tg, f.size = og, f.snakeCase = QU, f.some = ig, f.sortedIndex = nT, f.sortedIndexBy = rT, f.sortedIndexOf = oT, f.sortedLastIndex = iT, f.sortedLastIndexBy = aT, f.sortedLastIndexOf = sT, f.startCase = GU, f.startsWith = YU, f.subtract = BR, f.sum = IR, f.sumBy = DR, f.template = PU, f.times = RR, f.toFinite = dn, f.toInteger = X, f.toLength = Of, f.toLower = HU, f.toNumber = bt, f.toSafeInteger = Hg, f.toString = ie, f.toUpper = jU, f.trim = XU, f.trimEnd = LU, f.trimStart = $U, f.truncate = qU, f.unescape = KU, f.uniqueId = yR, f.upperCase = eR, f.upperFirst = kl, f.each = Zf, f.eachRight = bf, f.first = Nf, bl(f, function() {
        var e = {};
        return Ht(f, function(n, i) {
          se.call(f.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = a, Rt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), Rt(["drop", "take"], function(e, n) {
        te.prototype[e] = function(i) {
          i = i === r ? 1 : Se(X(i), 0);
          var l = this.__filtered__ && !n ? new te(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ge(i, l.__takeCount__) : l.__views__.push({
            size: Ge(i, Pt),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, te.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), Rt(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, l = i == Ze || i == Be;
        te.prototype[e] = function(c) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(c, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Rt(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), Rt(["initial", "tail"], function(e, n) {
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
        return this.filter(ca(G(e)));
      }, te.prototype.slice = function(e, n) {
        e = X(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new te(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, te.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, te.prototype.toArray = function() {
        return this.take(Pt);
      }, Ht(te.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), c = f[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !c || (f.prototype[n] = function() {
          var m = this.__wrapped__, v = l ? [1] : arguments, g = m instanceof te, Z = v[0], b = g || j(m), E = function(ee) {
            var ne = c.apply(f, yn([ee], v));
            return l && x ? ne[0] : ne;
          };
          b && i && typeof Z == "function" && Z.length != 1 && (g = b = !1);
          var x = this.__chain__, O = !!this.__actions__.length, Y = p && !x, $ = g && !O;
          if (!p && b) {
            m = $ ? m : new te(this);
            var P = e.apply(m, v);
            return P.__actions__.push({ func: ia, args: [E], thisArg: r }), new yt(P, x);
          }
          return Y && $ ? e.apply(this, v) : (P = this.thru(E), Y ? l ? P.value()[0] : P.value() : P);
        });
      }), Rt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Si[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var c = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(j(p) ? p : [], c);
          }
          return this[i](function(m) {
            return n.apply(j(m) ? m : [], c);
          });
        };
      }), Ht(te.prototype, function(e, n) {
        var i = f[n];
        if (i) {
          var l = i.name + "";
          se.call(kr, l) || (kr[l] = []), kr[l].push({ name: n, func: i });
        }
      }), kr[qi(r, A).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = Kv, te.prototype.reverse = eV, te.prototype.value = tV, f.prototype.at = ET, f.prototype.chain = ST, f.prototype.commit = AT, f.prototype.next = FT, f.prototype.plant = CT, f.prototype.reverse = xT, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = BT, f.prototype.first = f.prototype.head, mo && (f.prototype[mo] = WT), f;
    }, Rr = Av();
    Gn ? ((Gn.exports = Rr)._ = Rr, Zs._ = Rr) : De._ = Rr;
  }).call(Jo);
})(me, me.exports);
const iy = "/alarms?_s=", ts = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, ay = async (t, o) => {
  try {
    return (await tn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      ts
    )).status === 204;
  } catch {
    return !1;
  }
}, sy = async (t, o) => {
  try {
    return (await tn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      ts
    )).status === 204;
  } catch {
    return !1;
  }
}, ly = async (t, o) => {
  try {
    const r = t.join(",alarm.id==");
    return (await Rn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      ts
    )).status == 204;
  } catch {
    return !1;
  }
}, cy = async () => {
  try {
    const t = `${iy}isSituation==true&limit=0`, o = await Rn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, uy = async (t) => {
  try {
    const o = t.join(",id=="), r = await Rn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Gm = async (t) => {
  try {
    const o = await Rn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, dy = async (t) => {
  try {
    const o = await Rn(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, fy = async () => {
  try {
    const t = await Rn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => me.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, hy = async (t, o, r) => {
  try {
    return (await Rn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      ts
    )).status == 204;
  } catch {
    return !1;
  }
}, py = async (t, o) => {
  try {
    return (await Rn.delete(`/alarms/${t}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, my = async () => {
  try {
    const t = await Rn.get(
      "alarms?_s=isInSituation==false;isSituation==false"
    );
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, Vt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
}, Ym = "/alec", wy = "/alec/engine/configuration", Pm = "/alec/agreement/configuration", vy = "/alec/situation/statusList", Vy = "/alec/situation", Hm = async (t) => {
  try {
    return (await tn.post(`${Pm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, Ty = async () => {
  try {
    const t = await tn.get(`${Pm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, gy = async (t, o) => {
  try {
    return (await tn.post(wy, {
      distanceMeasureName: o ? Vt.HELLINGER_OPTION : Vt.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, jm = async (t, o) => {
  try {
    return (await tn.post(`${Ym}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Uy = async () => {
  try {
    const t = await tn.get(vy);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, Ry = async (t, o) => {
  try {
    return (await tn.delete(`${Ym}/situation/alarm/`, {
      data: {
        situationId: t,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Ny = async (t) => {
  try {
    return (await tn.post(Vy, t)).status === 200;
  } catch {
    return !1;
  }
}, yy = window.Pinia.defineStore, hr = yy("situationsStore", {
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
      const t = await fy();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await cy(), o = await Uy();
      if (t) {
        const r = t.alarm.map((u) => {
          const d = o.filter(
            (h) => parseInt(h.id) === u.id
          );
          return u.status = d && d[0] ? d[0].status : "CREATED", u;
        });
        this.filteredSituations = r.map((u) => u.id);
        const a = me.exports.groupBy(r, "status"), s = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = s;
      }
    },
    async getSituation(t) {
      if (t) {
        const o = await Gm(t);
        if (o) {
          const r = o.relatedAlarms.map((u) => u.id), s = await uy(r);
          o.alarms = me.exports.sortBy(s, ["id"]), this.situationDetail = o;
        }
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const s = await dy(a);
          s && (r[a] = me.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const t = await my();
      t && (this.unassignedAlarms = t);
    }
  }
}), ky = window.Vue.openBlock, My = window.Vue.createElementBlock, Zy = window.Vue.createElementVNode;
var by = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Jy = {}, Ey = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Sy = /* @__PURE__ */ Zy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Ay = [
  Sy
];
function Fy(t, o) {
  return ky(), My("svg", Ey, Ay);
}
var si = /* @__PURE__ */ by(Jy, [["render", Fy]]);
var Wy = Object.defineProperty, Nh = Object.getOwnPropertySymbols, Cy = Object.prototype.hasOwnProperty, xy = Object.prototype.propertyIsEnumerable, yh = (t, o, r) => o in t ? Wy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, kh = (t, o) => {
  for (var r in o || (o = {}))
    Cy.call(o, r) && yh(t, r, o[r]);
  if (Nh)
    for (var r of Nh(o))
      xy.call(o, r) && yh(t, r, o[r]);
  return t;
};
const By = window.Vue.defineComponent, Iy = window.Vue.toRaw, Hl = window.Vue.h;
var Dy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const _y = {
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
}, Oy = By({
  props: _y,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((s, u) => (s[u] = !0, s), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = Iy(this.icon);
    return this.$slots.default ? Hl("span", { class: "feather-icon-container" }, [
      Hl(this.$slots.default()[0], kh({
        class: o
      }, r))
    ]) : Hl(a, kh({
      class: o
    }, r));
  }
});
var L = /* @__PURE__ */ Dy(Oy, [["__scopeId", "data-v-52cbf270"]]);
const Qy = window.Vue.openBlock, zy = window.Vue.createElementBlock, Gy = window.Vue.createElementVNode;
var Yy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Py = {}, Hy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jy = /* @__PURE__ */ Gy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Xy = [
  jy
];
function Ly(t, o) {
  return Qy(), zy("svg", Hy, Xy);
}
var Xm = /* @__PURE__ */ Yy(Py, [["render", Ly]]);
function ur(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function ze(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function je(t) {
  ze(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function $y(t, o) {
  ze(2, arguments);
  var r = je(t).getTime(), a = ur(o);
  return new Date(r + a);
}
var qy = {};
function li() {
  return qy;
}
function Sc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function Ky(t, o) {
  ze(2, arguments);
  var r = je(t), a = je(o), s = r.getTime() - a.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function ek(t) {
  return ze(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function tk(t) {
  if (ze(1, arguments), !ek(t) && typeof t != "number")
    return !1;
  var o = je(t);
  return !isNaN(Number(o));
}
function nk(t, o) {
  ze(2, arguments);
  var r = ur(o);
  return $y(t, -r);
}
var rk = 864e5;
function ok(t) {
  ze(1, arguments);
  var o = je(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var a = o.getTime(), s = r - a;
  return Math.floor(s / rk) + 1;
}
function Oa(t) {
  ze(1, arguments);
  var o = 1, r = je(t), a = r.getUTCDay(), s = (a < o ? 7 : 0) + a - o;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function Lm(t) {
  ze(1, arguments);
  var o = je(t), r = o.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Oa(a), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = Oa(u);
  return o.getTime() >= s.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function ik(t) {
  ze(1, arguments);
  var o = Lm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Oa(r);
  return a;
}
var ak = 6048e5;
function sk(t) {
  ze(1, arguments);
  var o = je(t), r = Oa(o).getTime() - ik(o).getTime();
  return Math.round(r / ak) + 1;
}
function Qa(t, o) {
  var r, a, s, u, d, h, w, V;
  ze(1, arguments);
  var U = li(), R = ur((r = (a = (s = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && s !== void 0 ? s : U.weekStartsOn) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = je(t), S = N.getUTCDay(), J = (S < R ? 7 : 0) + S - R;
  return N.setUTCDate(N.getUTCDate() - J), N.setUTCHours(0, 0, 0, 0), N;
}
function $m(t, o) {
  var r, a, s, u, d, h, w, V;
  ze(1, arguments);
  var U = je(t), R = U.getUTCFullYear(), N = li(), S = ur((r = (a = (s = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = N.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(S >= 1 && S <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var J = new Date(0);
  J.setUTCFullYear(R + 1, 0, S), J.setUTCHours(0, 0, 0, 0);
  var F = Qa(J, o), B = new Date(0);
  B.setUTCFullYear(R, 0, S), B.setUTCHours(0, 0, 0, 0);
  var A = Qa(B, o);
  return U.getTime() >= F.getTime() ? R + 1 : U.getTime() >= A.getTime() ? R : R - 1;
}
function lk(t, o) {
  var r, a, s, u, d, h, w, V;
  ze(1, arguments);
  var U = li(), R = ur((r = (a = (s = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && s !== void 0 ? s : U.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), N = $m(t, o), S = new Date(0);
  S.setUTCFullYear(N, 0, R), S.setUTCHours(0, 0, 0, 0);
  var J = Qa(S, o);
  return J;
}
var ck = 6048e5;
function uk(t, o) {
  ze(1, arguments);
  var r = je(t), a = Qa(r, o).getTime() - lk(r, o).getTime();
  return Math.round(a / ck) + 1;
}
function le(t, o) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < o; )
    a = "0" + a;
  return r + a;
}
var dk = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return le(o === "yy" ? a % 100 : a, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : le(r + 1, 2);
  },
  d: function(t, o) {
    return le(t.getUTCDate(), o.length);
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
    return le(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return le(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return le(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return le(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, a = t.getUTCMilliseconds(), s = Math.floor(a * Math.pow(10, r - 3));
    return le(s, o.length);
  }
};
const An = dk;
var Wr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, fk = {
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
      var a = t.getUTCFullYear(), s = a > 0 ? a : 1 - a;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return An.y(t, o);
  },
  Y: function(t, o, r, a) {
    var s = $m(t, a), u = s > 0 ? s : 1 - s;
    if (o === "YY") {
      var d = u % 100;
      return le(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : le(u, o.length);
  },
  R: function(t, o) {
    var r = Lm(t);
    return le(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return le(r, o.length);
  },
  Q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(a);
      case "QQ":
        return le(a, 2);
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
        return le(a, 2);
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
        return An.M(t, o);
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
        return le(a + 1, 2);
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
    var s = uk(t, a);
    return o === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : le(s, o.length);
  },
  I: function(t, o, r) {
    var a = sk(t);
    return o === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : le(a, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : An.d(t, o);
  },
  D: function(t, o, r) {
    var a = ok(t);
    return o === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : le(a, o.length);
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
    var s = t.getUTCDay(), u = (s - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(u);
      case "ee":
        return le(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, o, r, a) {
    var s = t.getUTCDay(), u = (s - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(u);
      case "cc":
        return le(u, o.length);
      case "co":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return r.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, o, r) {
    var a = t.getUTCDay(), s = a === 0 ? 7 : a;
    switch (o) {
      case "i":
        return String(s);
      case "ii":
        return le(s, o.length);
      case "io":
        return r.ordinalNumber(s, {
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
    var a = t.getUTCHours(), s = a / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, o, r) {
    var a = t.getUTCHours(), s;
    switch (a === 12 ? s = Wr.noon : a === 0 ? s = Wr.midnight : s = a / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, o, r) {
    var a = t.getUTCHours(), s;
    switch (a >= 17 ? s = Wr.evening : a >= 12 ? s = Wr.afternoon : a >= 4 ? s = Wr.morning : s = Wr.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(s, {
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
    return An.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : An.H(t, o);
  },
  K: function(t, o, r) {
    var a = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, o.length);
  },
  k: function(t, o, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), o === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : An.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : An.s(t, o);
  },
  S: function(t, o) {
    return An.S(t, o);
  },
  X: function(t, o, r, a) {
    var s = a._originalDate || t, u = s.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Zh(u);
      case "XXXX":
      case "XX":
        return ir(u);
      case "XXXXX":
      case "XXX":
      default:
        return ir(u, ":");
    }
  },
  x: function(t, o, r, a) {
    var s = a._originalDate || t, u = s.getTimezoneOffset();
    switch (o) {
      case "x":
        return Zh(u);
      case "xxxx":
      case "xx":
        return ir(u);
      case "xxxxx":
      case "xxx":
      default:
        return ir(u, ":");
    }
  },
  O: function(t, o, r, a) {
    var s = a._originalDate || t, u = s.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Mh(u, ":");
      case "OOOO":
      default:
        return "GMT" + ir(u, ":");
    }
  },
  z: function(t, o, r, a) {
    var s = a._originalDate || t, u = s.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Mh(u, ":");
      case "zzzz":
      default:
        return "GMT" + ir(u, ":");
    }
  },
  t: function(t, o, r, a) {
    var s = a._originalDate || t, u = Math.floor(s.getTime() / 1e3);
    return le(u, o.length);
  },
  T: function(t, o, r, a) {
    var s = a._originalDate || t, u = s.getTime();
    return le(u, o.length);
  }
};
function Mh(t, o) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), s = Math.floor(a / 60), u = a % 60;
  if (u === 0)
    return r + String(s);
  var d = o || "";
  return r + String(s) + d + le(u, 2);
}
function Zh(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + le(Math.abs(t) / 60, 2);
  }
  return ir(t, o);
}
function ir(t, o) {
  var r = o || "", a = t > 0 ? "-" : "+", s = Math.abs(t), u = le(Math.floor(s / 60), 2), d = le(s % 60, 2);
  return a + u + r + d;
}
const hk = fk;
var bh = function(t, o) {
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
}, qm = function(t, o) {
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
}, pk = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], s = r[2];
  if (!s)
    return bh(t, o);
  var u;
  switch (a) {
    case "P":
      u = o.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = o.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = o.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = o.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", bh(a, o)).replace("{{time}}", qm(s, o));
}, mk = {
  p: qm,
  P: pk
};
const wk = mk;
var vk = ["D", "DD"], Vk = ["YY", "YYYY"];
function Tk(t) {
  return vk.indexOf(t) !== -1;
}
function gk(t) {
  return Vk.indexOf(t) !== -1;
}
function Jh(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Uk = {
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
}, Rk = function(t, o, r) {
  var a, s = Uk[t];
  return typeof s == "string" ? a = s : o === 1 ? a = s.one : a = s.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Nk = Rk;
function jl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var yk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, kk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Mk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Zk = {
  date: jl({
    formats: yk,
    defaultWidth: "full"
  }),
  time: jl({
    formats: kk,
    defaultWidth: "full"
  }),
  dateTime: jl({
    formats: Mk,
    defaultWidth: "full"
  })
};
const bk = Zk;
var Jk = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ek = function(t, o, r, a) {
  return Jk[t];
};
const Sk = Ek;
function Eo(t) {
  return function(o, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", s;
    if (a === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : u;
      s = t.formattingValues[d] || t.formattingValues[u];
    } else {
      var h = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      s = t.values[w] || t.values[h];
    }
    var V = t.argumentCallback ? t.argumentCallback(o) : o;
    return s[V];
  };
}
var Ak = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Fk = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Wk = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ck = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, xk = {
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
}, Bk = {
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
}, Ik = function(t, o) {
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
}, Dk = {
  ordinalNumber: Ik,
  era: Eo({
    values: Ak,
    defaultWidth: "wide"
  }),
  quarter: Eo({
    values: Fk,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Eo({
    values: Wk,
    defaultWidth: "wide"
  }),
  day: Eo({
    values: Ck,
    defaultWidth: "wide"
  }),
  dayPeriod: Eo({
    values: xk,
    defaultWidth: "wide",
    formattingValues: Bk,
    defaultFormattingWidth: "wide"
  })
};
const _k = Dk;
function So(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, s = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], u = o.match(s);
    if (!u)
      return null;
    var d = u[0], h = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(h) ? Qk(h, function(R) {
      return R.test(d);
    }) : Ok(h, function(R) {
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
function Ok(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function Qk(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function zk(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = o.match(t.matchPattern);
    if (!a)
      return null;
    var s = a[0], u = o.match(t.parsePattern);
    if (!u)
      return null;
    var d = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var h = o.slice(s.length);
    return {
      value: d,
      rest: h
    };
  };
}
var Gk = /^(\d+)(th|st|nd|rd)?/i, Yk = /\d+/i, Pk = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hk = {
  any: [/^b/i, /^(a|c)/i]
}, jk = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Xk = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Lk = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $k = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, qk = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Kk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, eM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tM = {
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
}, nM = {
  ordinalNumber: zk({
    matchPattern: Gk,
    parsePattern: Yk,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: So({
    matchPatterns: Pk,
    defaultMatchWidth: "wide",
    parsePatterns: Hk,
    defaultParseWidth: "any"
  }),
  quarter: So({
    matchPatterns: jk,
    defaultMatchWidth: "wide",
    parsePatterns: Xk,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: So({
    matchPatterns: Lk,
    defaultMatchWidth: "wide",
    parsePatterns: $k,
    defaultParseWidth: "any"
  }),
  day: So({
    matchPatterns: qk,
    defaultMatchWidth: "wide",
    parsePatterns: Kk,
    defaultParseWidth: "any"
  }),
  dayPeriod: So({
    matchPatterns: eM,
    defaultMatchWidth: "any",
    parsePatterns: tM,
    defaultParseWidth: "any"
  })
};
const rM = nM;
var oM = {
  code: "en-US",
  formatDistance: Nk,
  formatLong: bk,
  formatRelative: Sk,
  localize: _k,
  match: rM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Km = oM;
var iM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, aM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sM = /^'([^]*?)'?$/, lM = /''/g, cM = /[a-zA-Z]/;
function uM(t, o, r) {
  var a, s, u, d, h, w, V, U, R, N, S, J, F, B, A, C, W, I;
  ze(2, arguments);
  var k = String(o), _ = li(), Q = (a = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : _.locale) !== null && a !== void 0 ? a : Km, z = ur((u = (d = (h = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (V = r.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && h !== void 0 ? h : _.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = _.locale) === null || R === void 0 || (N = R.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var we = ur((S = (J = (F = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (A = r.locale) === null || A === void 0 || (C = A.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && F !== void 0 ? F : _.weekStartsOn) !== null && J !== void 0 ? J : (W = _.locale) === null || W === void 0 || (I = W.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && S !== void 0 ? S : 0);
  if (!(we >= 0 && we <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = je(t);
  if (!tk(de))
    throw new RangeError("Invalid time value");
  var Ve = Sc(de), Te = nk(de, Ve), Re = {
    firstWeekContainsDate: z,
    weekStartsOn: we,
    locale: Q,
    _originalDate: de
  }, Ze = k.match(aM).map(function(ce) {
    var Be = ce[0];
    if (Be === "p" || Be === "P") {
      var Ie = wk[Be];
      return Ie(ce, Q.formatLong);
    }
    return ce;
  }).join("").match(iM).map(function(ce) {
    if (ce === "''")
      return "'";
    var Be = ce[0];
    if (Be === "'")
      return dM(ce);
    var Ie = hk[Be];
    if (Ie)
      return !(r != null && r.useAdditionalWeekYearTokens) && gk(ce) && Jh(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && Tk(ce) && Jh(ce, o, String(t)), Ie(Te, ce, Q.localize, Re);
    if (Be.match(cM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Be + "`");
    return ce;
  }).join("");
  return Ze;
}
function dM(t) {
  var o = t.match(sM);
  return o ? o[1].replace(lM, "'") : t;
}
function ew(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function fM(t) {
  return ew({}, t);
}
var Eh = 1e3 * 60, za = 60 * 24, Sh = za * 30, Ah = za * 365;
function hM(t, o, r) {
  var a, s, u;
  ze(2, arguments);
  var d = li(), h = (a = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : d.locale) !== null && a !== void 0 ? a : Km;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Ky(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var V = ew(fM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), U, R;
  w > 0 ? (U = je(o), R = je(t)) : (U = je(t), R = je(o));
  var N = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), S;
  if (N === "floor")
    S = Math.floor;
  else if (N === "ceil")
    S = Math.ceil;
  else if (N === "round")
    S = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var J = R.getTime() - U.getTime(), F = J / Eh, B = Sc(R) - Sc(U), A = (J - B) / Eh, C = r == null ? void 0 : r.unit, W;
  if (C ? W = String(C) : F < 1 ? W = "second" : F < 60 ? W = "minute" : F < za ? W = "hour" : A < Sh ? W = "day" : A < Ah ? W = "month" : W = "year", W === "second") {
    var I = S(J / 1e3);
    return h.formatDistance("xSeconds", I, V);
  } else if (W === "minute") {
    var k = S(F);
    return h.formatDistance("xMinutes", k, V);
  } else if (W === "hour") {
    var _ = S(F / 60);
    return h.formatDistance("xHours", _, V);
  } else if (W === "day") {
    var Q = S(A / za);
    return h.formatDistance("xDays", Q, V);
  } else if (W === "month") {
    var z = S(A / Sh);
    return z === 12 && C !== "month" ? h.formatDistance("xYears", 1, V) : h.formatDistance("xMonths", z, V);
  } else if (W === "year") {
    var we = S(A / Ah);
    return h.formatDistance("xYears", we, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const Kt = (t) => {
  let o = "";
  if (t)
    try {
      o = uM(new Date(t), Vt.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
}, pM = (t, o) => {
  const r = t.length > o ? "..." : "";
  return t.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, mM = window.Vue.defineComponent, Lt = window.Vue.unref, Fh = window.Vue.normalizeClass, vn = window.Vue.createElementVNode, Ao = window.Vue.toDisplayString, Wh = window.Vue.createVNode, Cr = window.Vue.openBlock, xr = window.Vue.createElementBlock, Xl = window.Vue.createCommentVNode, tw = window.Vue.createTextVNode, wM = window.Vue.renderList, vM = window.Vue.Fragment, VM = window.Vue.pushScopeId, TM = window.Vue.popScopeId, nw = (t) => (VM("data-v-7c453c05"), t = t(), TM(), t), gM = { class: "content" }, UM = { class: "title-row" }, RM = { class: "title" }, NM = {
  key: 0,
  class: "accepted"
}, yM = {
  key: 1,
  class: "rejected"
}, kM = /* @__PURE__ */ nw(() => /* @__PURE__ */ vn("span", { class: "info-title" }, " First Event: ", -1)), MM = /* @__PURE__ */ nw(() => /* @__PURE__ */ vn("hr", null, null, -1)), ZM = {
  key: 0,
  class: "count-info"
}, bM = /* @__PURE__ */ tw(" Alarms: "), JM = { class: "info-title" }, EM = /* @__PURE__ */ mM({
  __name: "SituationCard",
  props: {
    situationInfo: null
  },
  emits: ["situation-selected"],
  setup(t, { emit: o }) {
    const r = t, a = Vt.ACCEPTED, s = Vt.REJECTED, u = r.situationInfo.description.replace(/(<([^>]+)>)/gi, "").substring(0, 230) + "...", d = () => {
      var h;
      o("situation-selected", (h = r.situationInfo) == null ? void 0 : h.id);
    };
    return (h, w) => {
      var V, U, R;
      return Cr(), xr("div", {
        onClick: d,
        class: Fh(["card", {
          rejected: r.situationInfo.status == Lt(s)
        }])
      }, [
        vn("div", {
          class: Fh(["severity-line", [`${(U = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        vn("div", gM, [
          vn("div", UM, [
            vn("div", RM, "Situation " + Ao((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Lt(a) ? (Cr(), xr("div", NM, [
              Wh(Lt(L), {
                icon: Lt(si),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Xl("", !0),
            r.situationInfo.status == Lt(s) ? (Cr(), xr("div", yM, [
              Wh(Lt(L), {
                icon: Lt(Xm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Xl("", !0)
          ]),
          vn("div", null, [
            kM,
            tw(Ao(Lt(Kt)(r.situationInfo.firstEventTime)), 1)
          ]),
          vn("div", { class: "description" }, Ao(u)),
          MM,
          r.situationInfo.relatedAlarms ? (Cr(), xr("div", ZM, [
            bM,
            vn("span", JM, Ao(r.situationInfo.relatedAlarms.length), 1)
          ])) : Xl("", !0),
          (Cr(!0), xr(vM, null, wM(Lt(me.exports.keys)(
            Lt(me.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (N) => (Cr(), xr("div", {
            class: "info-title",
            key: N
          }, " - " + Ao(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const SM = /* @__PURE__ */ Ue(EM, [["__scopeId", "data-v-7c453c05"]]), AM = window.Vue.openBlock, FM = window.Vue.createElementBlock, WM = window.Vue.createElementVNode;
var CM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const xM = {}, BM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, IM = /* @__PURE__ */ WM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), DM = [
  IM
];
function _M(t, o) {
  return AM(), FM("svg", BM, DM);
}
var OM = /* @__PURE__ */ CM(xM, [["render", _M]]);
const QM = window.Vue.openBlock, zM = window.Vue.createElementBlock, rw = window.Vue.createElementVNode;
var GM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const YM = {}, PM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HM = /* @__PURE__ */ rw("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), jM = /* @__PURE__ */ rw("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), XM = [
  HM,
  jM
];
function LM(t, o) {
  return QM(), zM("svg", PM, XM);
}
var $M = /* @__PURE__ */ GM(YM, [["render", LM]]);
const qM = window.Vue.openBlock, KM = window.Vue.createElementBlock, eZ = window.Vue.createElementVNode;
var tZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const nZ = {}, rZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oZ = /* @__PURE__ */ eZ("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), iZ = [
  oZ
];
function aZ(t, o) {
  return qM(), KM("svg", rZ, iZ);
}
var sZ = /* @__PURE__ */ tZ(nZ, [["render", aZ]]);
const lZ = window.Vue.openBlock, cZ = window.Vue.createElementBlock, uZ = window.Vue.createElementVNode;
var dZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const fZ = {}, hZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pZ = /* @__PURE__ */ uZ("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), mZ = [
  pZ
];
function wZ(t, o) {
  return lZ(), cZ("svg", hZ, mZ);
}
var ow = /* @__PURE__ */ dZ(fZ, [["render", wZ]]);
const vZ = window.Vue.defineComponent, Fn = window.Vue.unref, ha = window.Vue.normalizeClass, pa = window.Vue.createVNode, VZ = window.Vue.openBlock, TZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const gZ = { class: "paginator" }, UZ = /* @__PURE__ */ vZ({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: o }) {
    const r = t, a = (s) => {
      s >= 0 && s <= r.totalPages - 1 && o("go-to-page", s);
    };
    return (s, u) => (VZ(), TZ("div", gZ, [
      pa(Fn(L), {
        icon: Fn(OM),
        "aria-hidden": "true",
        class: ha(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      pa(Fn(L), {
        icon: Fn(sZ),
        "aria-hidden": "true",
        class: ha(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      pa(Fn(L), {
        icon: Fn(ow),
        "aria-hidden": "true",
        class: ha(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      pa(Fn(L), {
        icon: Fn($M),
        "aria-hidden": "true",
        class: ha(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const RZ = /* @__PURE__ */ Ue(UZ, [["__scopeId", "data-v-40758818"]]);
const ae = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, NZ = window.Vue.computed, iw = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((a) => {
    r[`${a}Label`] = NZ(() => t.value[a] ? t.value[a] : o[a]);
  }), r;
};
const Kr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, eo = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var yZ = Object.defineProperty, kZ = Object.defineProperties, MZ = Object.getOwnPropertyDescriptors, Ch = Object.getOwnPropertySymbols, ZZ = Object.prototype.hasOwnProperty, bZ = Object.prototype.propertyIsEnumerable, xh = (t, o, r) => o in t ? yZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Bh = (t, o) => {
  for (var r in o || (o = {}))
    ZZ.call(o, r) && xh(t, r, o[r]);
  if (Ch)
    for (var r of Ch(o))
      bZ.call(o, r) && xh(t, r, o[r]);
  return t;
}, JZ = (t, o) => kZ(t, MZ(o));
const EZ = window.Vue.defineComponent, SZ = window.Vue.h;
var AZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const FZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, WZ = EZ({
  props: FZ,
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
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), d = t.pageY, h = t.pageX;
          s = {
            top: `${d - u.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${h - u.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = JZ(Bh({}, s), {
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
      return SZ("div", {
        style: Bh({}, this.styles),
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
var dr = /* @__PURE__ */ AZ(WZ, [["__scopeId", "data-v-18e2a5db"]]);
const CZ = window.Vue.openBlock, xZ = window.Vue.createElementBlock, BZ = window.Vue.createElementVNode;
var IZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const DZ = {}, _Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OZ = /* @__PURE__ */ BZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), QZ = [
  OZ
];
function zZ(t, o) {
  return CZ(), xZ("svg", _Z, QZ);
}
var ci = /* @__PURE__ */ IZ(DZ, [["render", zZ]]);
const Ih = window.Vue.computed, GZ = (t, o, r) => {
  const a = Ih(() => o.value.filter((u) => !u.disabled)), s = Ih(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (s.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[s.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (s.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[s.value + 1]));
    }
  };
};
const YZ = window.Vue.openBlock, PZ = window.Vue.createElementBlock, qc = window.Vue.createElementVNode;
var HZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const jZ = {}, XZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LZ = /* @__PURE__ */ qc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), $Z = /* @__PURE__ */ qc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), qZ = /* @__PURE__ */ qc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), KZ = [
  LZ,
  $Z,
  qZ
];
function e2(t, o) {
  return YZ(), PZ("svg", XZ, KZ);
}
var t2 = /* @__PURE__ */ HZ(jZ, [["render", e2]]), n2 = Object.defineProperty, r2 = Object.defineProperties, o2 = Object.getOwnPropertyDescriptors, Dh = Object.getOwnPropertySymbols, i2 = Object.prototype.hasOwnProperty, a2 = Object.prototype.propertyIsEnumerable, _h = (t, o, r) => o in t ? n2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, aw = (t, o) => {
  for (var r in o || (o = {}))
    i2.call(o, r) && _h(t, r, o[r]);
  if (Dh)
    for (var r of Dh(o))
      a2.call(o, r) && _h(t, r, o[r]);
  return t;
}, sw = (t, o) => r2(t, o2(o));
const ro = window.Vue.defineComponent, ti = window.Vue.resolveComponent, qt = window.Vue.openBlock, Pr = window.Vue.createElementBlock, s2 = window.Vue.createVNode, Ga = window.Vue.createBlock, l2 = window.Vue.withModifiers, to = window.Vue.inject, ni = window.Vue.computed, c2 = window.Vue.normalizeClass, Br = window.Vue.createElementVNode, Ya = window.Vue.toDisplayString, Wa = window.Vue.renderSlot, Xo = window.Vue.createCommentVNode, u2 = window.Vue.withDirectives, d2 = window.Vue.vShow, Ac = window.Vue.ref, Oh = window.Vue.toRef, Qh = window.Vue.nextTick, Fc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Kc = window.Vue.provide, zh = window.Vue.isRef, f2 = window.Vue.onBeforeUnmount;
var ui = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const h2 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, p2 = ro({
  props: h2,
  components: {
    FeatherIcon: L
  }
}), m2 = ["title"];
function w2(t, o, r, a, s, u) {
  const d = ti("FeatherIcon");
  return qt(), Pr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    s2(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, m2);
}
var v2 = /* @__PURE__ */ ui(p2, [["render", w2], ["__scopeId", "data-v-4265058e"]]);
const V2 = ro({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return ci;
    }
  },
  components: {
    ActionIcon: v2
  }
});
function T2(t, o, r, a, s, u) {
  const d = ti("ActionIcon");
  return qt(), Ga(d, {
    onClick: o[0] || (o[0] = l2((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var g2 = /* @__PURE__ */ ui(V2, [["render", T2]]);
const U2 = ro({
  computed: {
    errorIcon() {
      return t2;
    }
  },
  components: {
    FeatherIcon: L
  }
});
function R2(t, o, r, a, s, u) {
  const d = ti("FeatherIcon");
  return qt(), Ga(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var N2 = /* @__PURE__ */ ui(U2, [["render", R2], ["__scopeId", "data-v-0b8faef3"]]);
const y2 = {
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
}, k2 = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, M2 = ro({
  emits: k2,
  props: y2,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = to("wrapperOptions", {}), o = to("validationErrorMessage", !1), r = ni(() => t.error ? t.error : o && o.value ? o.value : !1);
    return sw(aw({}, t), { error: r });
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
    ClearIcon: g2,
    ErrorIcon: N2
  }
}), Z2 = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, b2 = ["for"], J2 = { class: "prefix" }, E2 = { class: "post" };
function S2(t, o, r, a, s, u) {
  const d = ti("ClearIcon"), h = ti("ErrorIcon");
  return qt(), Pr("div", {
    class: c2(["feather-input-wrapper-container", t.containerCls])
  }, [
    Br("fieldset", Z2, [
      Br("legend", null, Ya(t.label), 1)
    ]),
    Br("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ya(t.label), 9, b2),
    Br("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Br("div", J2, [
        Wa(t.$slots, "pre", {}, void 0, !0)
      ]),
      Wa(t.$slots, "default", {}, void 0, !0),
      Br("div", E2, [
        t.showClear && t.computedClearText ? (qt(), Ga(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Xo("", !0),
        t.error ? (qt(), Ga(h, { key: 1 })) : Xo("", !0),
        Wa(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var eu = /* @__PURE__ */ ui(M2, [["render", S2], ["__scopeId", "data-v-4db296db"]]);
const A2 = ro({
  setup() {
    const t = to("subTextOptions", {}), o = to("validationErrorMessage", !1), r = ni(() => t.error ? t.error : o && o.value ? o.value : "");
    return sw(aw({}, t), { error: r });
  }
}), F2 = { class: "feather-input-sub-text" }, W2 = {
  key: 0,
  class: "feather-input-spacer"
}, C2 = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, x2 = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function B2(t, o, r, a, s, u) {
  return u2((qt(), Pr("div", F2, [
    !t.hint && !t.error.length ? (qt(), Pr("div", W2, "\xA0")) : Xo("", !0),
    t.hint && !t.error.length ? (qt(), Pr("div", C2, Ya(t.hint), 1)) : Xo("", !0),
    t.error.length > 0 ? (qt(), Pr("div", x2, Ya(t.error), 1)) : Xo("", !0),
    Wa(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [d2, !t.inline || t.hint || t.error.length]
  ]);
}
var di = /* @__PURE__ */ ui(A2, [["render", B2], ["__scopeId", "data-v-8e0ac99e"]]);
const I2 = {
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
  props: I2,
  setup(t) {
    const o = to("featherFormErrors", Ac([])), r = Oh(t, "errorList"), a = ni(() => {
      var U;
      return (U = r.value) != null && U.length ? r.value : o.value;
    }), s = Oh(t, "generalError"), u = (U) => {
      document.getElementById(U).focus();
    }, d = (U) => U.replace(/ \*$/, ""), h = Ac(), w = (U) => `${d(U.label)} - ${U.message}`, V = ni(() => (a.value.length && Qh(() => h.value.focus()), t.headingText(a.value)));
    return Fc(s, (U) => {
      U.length && Qh(() => h.value.focus());
    }), {
      errors: a,
      errorsHeading: V,
      heading: h,
      focusElement: u,
      mainError: s,
      getFullMessage: w
    };
  }
});
const fi = (t, o, r, a, s) => {
  const u = to("featherForm", !1);
  if (a && u && t.value) {
    const d = Ac("");
    Kc("validationErrorMessage", d);
    const h = () => {
      if (s && zh(s) && s.value)
        return d.value = s.value, {
          success: !1,
          message: s.value,
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
    return s && zh(s) && Fc(s, () => {
      u.runValidation();
    }), Fc(t, (U, R) => {
      U && u && u.register(U, V), R && u && u.deregister(R);
    }, { immediate: !0 }), f2(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, hi = (t) => ({
  inherittedAttrs: ni(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), pi = {
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
}, mi = (t) => {
  Kc("subTextOptions", t);
}, tu = {
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
}, nu = (t) => {
  Kc("wrapperOptions", t);
}, ma = window.Vue.ref, D2 = window.Vue.watch, _2 = window.Vue.watchEffect, Gh = window.Vue.computed, Ll = window.Vue.provide, lw = (t, o, r, a, s) => {
  const u = ma([]), d = ma(), h = ma(), w = ma();
  _2(() => {
    if (!u.value.length)
      return;
    const A = u.value.map((C) => C.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[A.indexOf(t.value)]), !d.value && u.value.length) {
      let C = u.value.filter((W) => !W.disabled);
      C = C.length ? C : u.value, h.value = C[0], h.value.first = !0;
    }
  }), D2(d, (A, C) => {
    C && (C.checked = !1), A && (A.checked = !0);
  });
  const V = (A) => {
    A && A.disabled || (h.value && (h.value.first = !1), d.value !== A && (o("update:modelValue", A.value), d.value = A, A.focus()));
  }, U = Gh(() => d.value || h.value), R = GZ(U, u, V), N = Gh(() => ae("feather-radio-group"));
  w.value = N.value;
  const { validate: S } = fi(w, t, r, a, s);
  return Ll("register", (A) => {
    u.value = [...u.value, A], w.value === N.value && (w.value = A.id);
  }), Ll("select", V), Ll("blur", (A) => {
    o("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
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
    validate: S,
    firstElementId: w,
    groupId: N
  };
};
var O2 = Object.defineProperty, Q2 = Object.defineProperties, z2 = Object.getOwnPropertyDescriptors, Yh = Object.getOwnPropertySymbols, G2 = Object.prototype.hasOwnProperty, Y2 = Object.prototype.propertyIsEnumerable, Ph = (t, o, r) => o in t ? O2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Xr = (t, o) => {
  for (var r in o || (o = {}))
    G2.call(o, r) && Ph(t, r, o[r]);
  if (Yh)
    for (var r of Yh(o))
      Y2.call(o, r) && Ph(t, r, o[r]);
  return t;
}, cw = (t, o) => Q2(t, z2(o));
const Qn = window.Vue.defineComponent, Lo = window.Vue.inject, Pa = window.Vue.computed, $o = window.Vue.ref, Ft = window.Vue.resolveComponent, Tt = window.Vue.openBlock, wi = window.Vue.createElementBlock, uw = window.Vue.normalizeClass, en = window.Vue.renderSlot, _n = window.Vue.createBlock, ri = window.Vue.createCommentVNode, Ha = window.Vue.createElementVNode, P2 = window.Vue.withModifiers, ns = window.Vue.createVNode, dw = window.Vue.toRef, Wc = window.Vue.mergeProps, Un = window.Vue.withCtx, H2 = window.Vue.h, j2 = window.Vue.provide;
var zn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const X2 = {
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
}, L2 = Qn({
  props: X2,
  setup(t) {
    const o = Lo("isCondensed", null), r = Pa(() => o || t.condensed), a = $o(!1);
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
    FeatherRipple: dr
  }
}), $2 = ["aria-disabled"];
function q2(t, o, r, a, s, u) {
  const d = Ft("FeatherRipple");
  return Tt(), wi("div", {
    class: uw(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (h) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (h) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    en(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (Tt(), _n(d, { key: 0 })) : ri("", !0)
  ], 42, $2);
}
var rs = /* @__PURE__ */ zn(L2, [["render", q2], ["__scopeId", "data-v-44d413dc"]]);
const K2 = {
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
}, eb = Qn({
  emits: ["delete"],
  props: K2,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: ci
    };
  },
  components: {
    FeatherIcon: L
  }
}), tb = { class: "chip-delete" }, nb = ["aria-label", "aria-describedby"];
function rb(t, o, r, a, s, u) {
  const d = Ft("FeatherIcon");
  return Tt(), wi("span", tb, [
    Ha("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = P2((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      ns(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, nb)
  ]);
}
var ob = /* @__PURE__ */ zn(eb, [["render", rb], ["__scopeId", "data-v-4bae6cb4"]]);
const ib = Qn({
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
}), ab = ["title"];
function sb(t, o, r, a, s, u) {
  return Tt(), wi("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    en(t.$slots, "default", {}, void 0, !0)
  ], 8, ab);
}
var os = /* @__PURE__ */ zn(ib, [["render", sb], ["__scopeId", "data-v-1a0445b2"]]);
const lb = {}, cb = {
  class: "chip-icon",
  role: "presentation"
};
function ub(t, o) {
  return Tt(), wi("span", cb, [
    en(t.$slots, "default", {}, void 0, !0)
  ]);
}
var is = /* @__PURE__ */ zn(lb, [["render", ub], ["__scopeId", "data-v-2230176f"]]);
const Hh = {
  delete: "Remove"
}, db = Qn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Hh
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = iw(dw(t, "labels"), Hh), a = Pa(() => ae("chip-text")), s = () => {
      t.disabled || o.emit("click");
    }, u = Xr({}, o.attrs);
    return t.disabled && delete u.onClick, cw(Xr({}, r), {
      chipTextId: a,
      handleClick: s,
      attrs: u
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
    Chip: rs,
    DeleteIcon: ob,
    Label: os,
    PreIcon: is
  }
}), fb = ["aria-disabled"];
function hb(t, o, r, a, s, u) {
  const d = Ft("PreIcon"), h = Ft("Label"), w = Ft("DeleteIcon"), V = Ft("Chip");
  return Tt(), _n(V, Wc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: Un(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Ha("span", Wc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (Tt(), _n(d, { key: 0 }, {
            default: Un(() => [
              en(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ri("", !0),
          ns(h, { id: t.chipTextId }, {
            default: Un(() => [
              en(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, fb),
      t.canDelete ? (Tt(), _n(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (U) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ri("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var pb = /* @__PURE__ */ zn(db, [["render", hb], ["__scopeId", "data-v-48b2704a"]]);
const mb = Qn({
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
    Chip: rs,
    Label: os,
    PreIcon: is
  }
}), wb = ["aria-disabled"];
function vb(t, o, r, a, s, u) {
  const d = Ft("PreIcon"), h = Ft("Label"), w = Ft("Chip");
  return Tt(), _n(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: Un(() => [
      Ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (Tt(), _n(d, { key: 0 }, {
          default: Un(() => [
            en(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ri("", !0),
        ns(h, null, {
          default: Un(() => [
            en(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, wb)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var Vb = /* @__PURE__ */ zn(mb, [["render", vb], ["__scopeId", "data-v-3e0c4eba"]]);
const Tb = Qn({
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
    const o = $o(!1), r = $o(!1), a = Pa(() => ae("chip-label-id")), s = Pa(() => o.value || r.value ? 0 : -1), u = $o(), d = () => {
      u.value.$el.focus();
    }, h = Lo("register", (N) => {
    }), w = Lo("blur", (N) => {
    }), V = Lo("select", (N) => {
    }), U = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return h(U), {
      labelId: a,
      tabindex: s,
      first: o,
      blur: w,
      click: () => {
        V(U);
      },
      input: u,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    Label: os,
    PreIcon: is
  }
});
function gb(t, o, r, a, s, u) {
  const d = Ft("PreIcon"), h = Ft("Label"), w = Ft("Chip");
  return Tt(), _n(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: uw(["focus hover", { selected: t.checked }]),
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
    default: Un(() => [
      t.hasIcon ? (Tt(), _n(d, { key: 0 }, {
        default: Un(() => [
          en(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ri("", !0),
      ns(h, { id: t.labelId }, {
        default: Un(() => [
          en(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var Ub = /* @__PURE__ */ zn(Tb, [["render", gb], ["__scopeId", "data-v-bbcc2f70"]]);
const Rb = {
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
}, jh = Qn({
  props: Rb,
  setup() {
    return { format: Lo("chipListFormat", "") };
  },
  render() {
    const t = (o) => H2(o, Xr(Xr({}, this.$props), this.$attrs), Xr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(pb) : this.format === "radio" ? t(Ub) : t(Vb);
  }
}), Nb = {
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
}, yb = Qn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Nb,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    j2("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = dw(t, "modelValue");
      return cw(Xr({
        attrs: {
          role: "radiogroup"
        }
      }, lw(d, o.emit, t.label, {}, $o(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), kb = ["aria-label"];
function Mb(t, o, r, a, s, u) {
  return Tt(), wi("div", Wc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    en(t.$slots, "default", {}, void 0, !0)
  ], 16, kb);
}
var Zb = /* @__PURE__ */ zn(yb, [["render", Mb], ["__scopeId", "data-v-1e06f41d"]]);
const bb = window.Vue.defineComponent, Jb = window.Vue.normalizeClass, Eb = window.Vue.openBlock, Sb = window.Vue.createElementBlock, Ab = window.Vue.createCommentVNode, Fb = /* @__PURE__ */ bb({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (Eb(), Sb("span", {
      key: 0,
      class: Jb(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : Ab("", !0);
  }
});
const Wb = /* @__PURE__ */ Ue(Fb, [["__scopeId", "data-v-e08880d6"]]), Cb = window.Vue.defineComponent, Fo = window.Vue.unref, fw = window.Vue.createTextVNode, Xh = window.Vue.normalizeClass, $l = window.Vue.withCtx, Lh = window.Vue.createVNode, xb = window.Vue.renderList, Bb = window.Vue.Fragment, ql = window.Vue.openBlock, Ib = window.Vue.createElementBlock, Db = window.Vue.toDisplayString, $h = window.Vue.createBlock, _b = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ob = /* @__PURE__ */ fw(" ALL "), qh = window.Vue.ref, Qb = window.Vue.watch, zb = window.Vue.computed, Gb = window.Vue.reactive, Yb = /* @__PURE__ */ Cb({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(t, { emit: o }) {
    var w;
    const r = t, a = qh(!1), s = zb(() => me.exports.keys(me.exports.groupBy(r.alarms, "severity"))), u = qh(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), d = Gb({
      alarms: r.alarms
    }), h = (V) => {
      u.value = u.value.filter((U) => U !== "all"), u.value.includes(V) ? u.value = u.value.filter((U) => U !== V) : u.value.push(V), (V === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-severities", u.value);
    };
    return Qb(r, () => {
      var V;
      u.value = (V = r.preSelected) != null && V.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (V, U) => Fo(s).length > 0 ? (ql(), $h(Fo(Zb), {
      key: u.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: $l(() => [
        Lh(Fo(jh), {
          class: Xh({ clicked: u.value.includes("all") }),
          onClick: U[0] || (U[0] = (R) => h("all"))
        }, {
          default: $l(() => [
            Ob
          ]),
          _: 1
        }, 8, ["class"]),
        (ql(!0), Ib(Bb, null, xb(Fo(s), (R) => (ql(), $h(Fo(jh), {
          class: Xh([
            { clicked: u.value.includes(R) },
            `${R == null ? void 0 : R.toLowerCase()}-bg`
          ]),
          key: R,
          onClick: (N) => h(R)
        }, {
          default: $l(() => [
            Lh(Wb, { severity: R }, null, 8, ["severity"]),
            fw(Db(R), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : _b("", !0);
  }
});
const ru = /* @__PURE__ */ Ue(Yb, [["__scopeId", "data-v-57d07be0"]]);
var Pb = Object.defineProperty, Hb = Object.defineProperties, jb = Object.getOwnPropertyDescriptors, Kh = Object.getOwnPropertySymbols, Xb = Object.prototype.hasOwnProperty, Lb = Object.prototype.propertyIsEnumerable, ep = (t, o, r) => o in t ? Pb(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Wo = (t, o) => {
  for (var r in o || (o = {}))
    Xb.call(o, r) && ep(t, r, o[r]);
  if (Kh)
    for (var r of Kh(o))
      Lb.call(o, r) && ep(t, r, o[r]);
  return t;
}, tp = (t, o) => Hb(t, jb(o));
const $b = window.Vue.defineComponent, qb = window.Vue.inject, Co = window.Vue.h;
var Kb = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const eJ = {
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
}, tJ = $b({
  inheritAttrs: !1,
  props: eJ,
  setup() {
    return { hasTooltip: qb("feather-has-tooltip", !1) };
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
    const s = t();
    r.class = [this.$attrs.class].concat(s), this.$slots.icon && r.class.push("has-icon");
    let u = Co(dr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), Co(o, tp(Wo(Wo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Co(dr, { center: !0 })
      ]);
    }
    const d = Co("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Co(o, tp(Wo(Wo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var Je = /* @__PURE__ */ Kb(tJ, [["__scopeId", "data-v-702d1074"]]);
const nJ = window.Vue.openBlock, rJ = window.Vue.createElementBlock, oJ = window.Vue.createElementVNode;
var iJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const aJ = {}, sJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lJ = /* @__PURE__ */ oJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), cJ = [
  lJ
];
function uJ(t, o) {
  return nJ(), rJ("svg", sJ, cJ);
}
var hw = /* @__PURE__ */ iJ(aJ, [["render", uJ]]);
const dJ = window.Vue.openBlock, fJ = window.Vue.createElementBlock, hJ = window.Vue.createElementVNode;
var pJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const mJ = {}, wJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vJ = /* @__PURE__ */ hJ("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), VJ = [
  vJ
];
function TJ(t, o) {
  return dJ(), fJ("svg", wJ, VJ);
}
var pw = /* @__PURE__ */ pJ(mJ, [["render", TJ]]);
const gJ = window.Vue.watch, UJ = window.Vue.onBeforeUnmount, RJ = window.Vue.ref, NJ = window.Vue.onMounted, yJ = (t) => {
  const o = RJ(!1);
  let r = !1;
  const a = (d) => {
    t(d), r = !1;
  };
  function s(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", s);
  };
  return NJ(() => {
    const d = gJ(o, (h) => {
      window && h ? window.addEventListener("resize", s) : u();
    }, {
      immediate: !0
    });
    UJ(() => {
      d(), u();
    });
  }), o;
}, kJ = window.Vue.watch, MJ = window.Vue.onBeforeUnmount, ZJ = window.Vue.ref, bJ = window.Vue.onMounted, JJ = (t, o) => {
  const r = ZJ(!1), a = (d) => {
    d.target === window && o(d);
  }, s = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((V) => V && V.contains(d.target)) || o(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", a));
  };
  return bJ(() => {
    const d = kJ(r, (h) => {
      document && window && h ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", a)) : u();
    }, {
      immediate: !0
    });
    MJ(() => {
      d(), u();
    });
  }), r;
}, EJ = window.Vue.watch, SJ = window.Vue.onBeforeUnmount, AJ = window.Vue.ref, mw = (t, o) => {
  const r = AJ(!1);
  let a = !1;
  const s = (w) => {
    o(w), a = !1;
  };
  function u(w) {
    a || (requestAnimationFrame(() => s(w)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, h = EJ([t, r], ([w, V], U) => {
    U && U.length && U[0] && U[0].removeEventListener("scroll", u, !0), V && w ? w.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return SJ(() => {
    h(), d();
  }), r;
}, FJ = window.Vue.defineComponent, hn = window.Vue.ref, np = window.Vue.toRef, WJ = window.Vue.onMounted, CJ = window.Vue.watch, rp = window.Vue.computed, xJ = window.Vue.nextTick, op = window.Vue.openBlock, ip = window.Vue.createElementBlock, ap = window.Vue.renderSlot, BJ = window.Vue.normalizeClass, IJ = window.Vue.normalizeStyle, DJ = window.Vue.createCommentVNode;
var _J = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const OJ = {
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
}, QJ = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, zJ = FJ({
  emits: QJ,
  props: OJ,
  setup(t, o) {
    const r = hn(), a = hn(), s = np(t, "open"), u = np(t, "noExpand"), d = hn("auto"), h = hn(), w = hn(t.triggerId || ae("feather-menu-trigger")), V = hn(ae("feather-menu-dropdown")), U = hn(""), R = hn("");
    WJ(() => {
      h.value = window;
    });
    const N = hn(!1), S = () => ({
      height: h.value.innerHeight,
      width: h.value.innerWidth,
      left: 0,
      top: 0
    }), J = () => {
      if (!a.value)
        return;
      const k = r.value.getBoundingClientRect();
      N.value = !0, d.value = "auto", xJ(() => {
        let { height: _, width: Q } = a.value.getBoundingClientRect();
        const z = S(), we = z.height, de = z.width;
        t.fill && Q < k.width ? (d.value = k.width + "px", Q = k.width) : d.value = Q + "px";
        let Ve = 0;
        we - k.bottom < _ && k.top >= _ ? (Ve = k.top - _, t.cover && (Ve += k.height)) : (Ve = k.bottom, t.cover && (Ve -= k.height));
        let Te = t.right ? k.right - Q : k.left;
        !t.right && k.right >= Q && de - k.left < Q && (Te = k.right - Q), t.right && k.right <= Q && de - k.left > Q && (Te = k.left), R.value = `${Te}px`, U.value = `${Ve}px`, N.value = !1;
      });
    }, B = JJ(r, (k) => {
      o.emit("outside-click", k);
    }), A = yJ(J), C = mw(h, J);
    CJ([s, a], ([k, _]) => {
      k && _ && J(), B.value = k, A.value = k, C.value = k;
    });
    const W = rp(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return s.value && (k["aria-controls"] = V.value), u.value || (k["aria-expanded"] = s.value ? "true" : "false"), k;
    }), I = rp(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: U,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: W,
      triggerListeners: I,
      menuId: V,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: J,
      calculating: N
    };
  }
}), GJ = ["data-ref-id"], YJ = ["data-ref-id", "id"];
function PJ(t, o, r, a, s, u) {
  return op(), ip("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    ap(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (op(), ip("div", {
      key: 0,
      class: BJ(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: IJ({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      ap(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, YJ)) : DJ("", !0)
  ], 8, GJ);
}
var ww = /* @__PURE__ */ _J(zJ, [["render", PJ], ["__scopeId", "data-v-f75af406"]]);
const HJ = window.Vue.openBlock, jJ = window.Vue.createElementBlock, XJ = window.Vue.createElementVNode;
var LJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const $J = {}, qJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KJ = /* @__PURE__ */ XJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), eE = [
  KJ
];
function tE(t, o) {
  return HJ(), jJ("svg", qJ, eE);
}
var nE = /* @__PURE__ */ LJ($J, [["render", tE]]);
const rE = window.Vue.openBlock, oE = window.Vue.createElementBlock, ou = window.Vue.createElementVNode;
var iE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const aE = {}, sE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lE = /* @__PURE__ */ ou("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), cE = /* @__PURE__ */ ou("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), uE = /* @__PURE__ */ ou("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), dE = [
  lE,
  cE,
  uE
];
function fE(t, o) {
  return rE(), oE("svg", sE, dE);
}
var hE = /* @__PURE__ */ iE(aE, [["render", fE]]);
const pE = window.Vue.openBlock, mE = window.Vue.createElementBlock, wE = window.Vue.createElementVNode;
var vE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const VE = {}, TE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gE = /* @__PURE__ */ wE("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), UE = [
  gE
];
function RE(t, o) {
  return pE(), mE("svg", TE, UE);
}
var iu = /* @__PURE__ */ vE(VE, [["render", RE]]);
const oi = function(t, o) {
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
const NE = window.Vue.defineComponent, yE = window.Vue.openBlock, kE = window.Vue.createElementBlock, ME = window.Vue.normalizeClass, ZE = window.Vue.pushScopeId, bE = window.Vue.popScopeId, Cc = window.Vue.createElementVNode;
var JE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const EE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, SE = {
  click: (t) => !0
}, AE = NE({
  emits: SE,
  props: EE,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), vw = (t) => (ZE("data-v-07e020f5"), t = t(), bE(), t), FE = /* @__PURE__ */ vw(() => /* @__PURE__ */ Cc("div", { class: "track" }, null, -1)), WE = /* @__PURE__ */ vw(() => /* @__PURE__ */ Cc("div", { class: "switcher" }, [
  /* @__PURE__ */ Cc("div", { class: "switch-circle" })
], -1)), CE = [
  FE,
  WE
];
function xE(t, o, r, a, s, u) {
  return yE(), kE("div", {
    class: ME(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, CE, 2);
}
var BE = /* @__PURE__ */ JE(AE, [["render", xE], ["__scopeId", "data-v-07e020f5"]]), IE = Object.defineProperty, DE = Object.defineProperties, _E = Object.getOwnPropertyDescriptors, sp = Object.getOwnPropertySymbols, OE = Object.prototype.hasOwnProperty, QE = Object.prototype.propertyIsEnumerable, lp = (t, o, r) => o in t ? IE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, cp = (t, o) => {
  for (var r in o || (o = {}))
    OE.call(o, r) && lp(t, r, o[r]);
  if (sp)
    for (var r of sp(o))
      QE.call(o, r) && lp(t, r, o[r]);
  return t;
}, up = (t, o) => DE(t, _E(o));
const au = window.Vue.defineComponent, Kn = window.Vue.h, zE = window.Vue.openBlock, GE = window.Vue.createElementBlock, YE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Vw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const PE = {
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
}, HE = au({
  inheritAttrs: !1,
  props: PE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Kn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Kn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Kn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : Kn(dr);
    if (this.asLi)
      return Kn("li", up(cp({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [t, r, a, s]);
    const u = Kn("a", up(cp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, s]);
    return Kn("li", {}, [u]);
  }
});
var vi = /* @__PURE__ */ Vw(HE, [["__scopeId", "data-v-7c46b2b3"]]);
au({
  components: {
    FeatherListItem: vi
  }
});
const jE = {}, XE = { class: "feather-list" };
function LE(t, o) {
  return zE(), GE("ul", XE, [
    YE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var su = /* @__PURE__ */ Vw(jE, [["render", LE], ["__scopeId", "data-v-941a1d50"]]);
const $E = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, qE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
au({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $E,
  props: qE,
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
  components: { SwitchRender: BE, FeatherListItem: vi }
});
var KE = Object.defineProperty, eS = Object.defineProperties, tS = Object.getOwnPropertyDescriptors, dp = Object.getOwnPropertySymbols, nS = Object.prototype.hasOwnProperty, rS = Object.prototype.propertyIsEnumerable, fp = (t, o, r) => o in t ? KE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, gt = (t, o) => {
  for (var r in o || (o = {}))
    nS.call(o, r) && fp(t, r, o[r]);
  if (dp)
    for (var r of dp(o))
      rS.call(o, r) && fp(t, r, o[r]);
  return t;
}, oS = (t, o) => eS(t, tS(o));
const oo = window.Vue.defineComponent, oe = window.Vue.openBlock, Fe = window.Vue.createElementBlock, at = window.Vue.createElementVNode, Gt = window.Vue.toDisplayString, At = window.Vue.createCommentVNode, be = window.Vue.resolveComponent, St = window.Vue.createBlock, He = window.Vue.withCtx, Lr = window.Vue.Fragment, qo = window.Vue.renderList, st = window.Vue.createVNode, lu = window.Vue.withModifiers, lr = window.Vue.normalizeClass, xc = window.Vue.renderSlot, Tw = window.Vue.createTextVNode, iS = window.Vue.pushScopeId, aS = window.Vue.popScopeId, gw = window.Vue.reactive, Uw = window.Vue.nextTick, Kl = window.Vue.markRaw, ec = window.Vue.toRef, hp = window.Vue.computed, sS = window.Vue.toRefs, Ir = window.Vue.ref, tc = window.Vue.mergeProps, pp = window.Vue.toHandlers, wa = window.Vue.withDirectives, va = window.Vue.vShow;
var as = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, cu = {
  query: {
    type: String
  }
}, pr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const lS = oo({
  mixins: [],
  props: gt(gt({
    text: {
      type: String,
      required: !0
    }
  }, as), cu),
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
}), cS = {
  key: 0,
  class: "highlight"
}, uS = { key: 1 };
function dS(t, o, r, a, s, u) {
  return oe(), Fe("span", null, [
    at("span", null, Gt(t.beginning), 1),
    t.highlighted ? (oe(), Fe("span", cS, Gt(t.highlighted), 1)) : At("", !0),
    t.end ? (oe(), Fe("span", uS, Gt(t.end), 1)) : At("", !0)
  ]);
}
var Rw = /* @__PURE__ */ pr(lS, [["render", dS], ["__scopeId", "data-v-8abe2492"]]);
const fS = oo({
  emits: ["select", "deselect"],
  props: gt(gt({
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
  }, as), cu),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        oi(o, r.$el);
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
    FeatherList: su,
    FeatherListItem: vi,
    Highlighter: Rw
  }
}), hS = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function pS(t, o, r, a, s, u) {
  const d = be("Highlighter"), h = be("FeatherListItem"), w = be("FeatherList");
  return oe(), St(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: He(() => [
      (oe(!0), Fe(Lr, null, qo(t.items, (V, U) => (oe(), Fe(Lr, {
        key: V[t.textProp]
      }, [
        st(h, {
          "as-li": "",
          id: t.getId(U),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(V),
          highlighted: t.isActive(U),
          selected: t.isSelected(V),
          onClick: lu((R) => t.select(V), ["stop"])
        }, {
          default: He(() => [
            st(d, {
              highlight: t.highlight,
              query: t.query,
              text: V[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (oe(), Fe("span", hS, Gt(t.newLabel), 1)) : At("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && V._new ? (oe(), Fe("li", {
          role: "presentation",
          key: V[t.textProp] + "hr",
          class: "hr"
        })) : At("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var mS = /* @__PURE__ */ pr(fS, [["render", pS], ["__scopeId", "data-v-f623434a"]]);
const wS = oo({
  emits: ["select"],
  props: gt(gt({
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
  }, as), cu),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        oi(o, r);
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
    Highlighter: Rw
  }
}), vS = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, VS = ["aria-multiselectable"], TS = { role: "row" }, gS = ["aria-selected", "onClick"], US = ["id", "aria-selected"], RS = { key: 1 };
function NS(t, o, r, a, s, u) {
  const d = be("Highlighter");
  return oe(), Fe("div", vS, [
    at("table", {
      class: lr(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      at("thead", null, [
        at("tr", TS, [
          (oe(!0), Fe(Lr, null, qo(t.config, (h) => (oe(), Fe("th", {
            key: h.title
          }, Gt(h.title), 1))), 128))
        ])
      ]),
      at("tbody", null, [
        (oe(!0), Fe(Lr, null, qo(t.items, (h, w) => (oe(), Fe("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: lr({ focus: t.isActive(w), selected: t.isSelected(h) }),
          onClick: lu((V) => t.select(h), ["stop"])
        }, [
          (oe(!0), Fe(Lr, null, qo(t.config, (V, U) => (oe(), Fe("td", {
            key: h[t.textProp] + V.prop,
            id: t.getId(w, U),
            "aria-selected": t.isSelected(h),
            class: lr({ "focus-cell": t.isActiveCell(w, U) })
          }, [
            V.prop === t.textProp ? (oe(), St(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Fe("p", RS, Gt(h[V.prop]), 1))
          ], 10, US))), 128))
        ], 10, gS))), 128))
      ])
    ], 10, VS)
  ], 512);
}
var yS = /* @__PURE__ */ pr(wS, [["render", NS], ["__scopeId", "data-v-58c88fd1"]]);
const kS = oo({
  components: {
    FeatherList: su,
    FeatherListItem: vi
  }
});
function MS(t, o, r, a, s, u) {
  const d = be("FeatherListItem"), h = be("FeatherList");
  return oe(), St(h, { class: "result-list" }, {
    default: He(() => [
      st(d, { "as-li": "" }, {
        default: He(() => [
          xc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var ZS = /* @__PURE__ */ pr(kS, [["render", MS], ["__scopeId", "data-v-06b752c6"]]);
const bS = oo({
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
    FeatherIcon: L,
    Cancel: ci,
    BaseChip: rs,
    BaseChipLabel: os,
    BaseChipPreIcon: is
  }
});
function JS(t, o, r, a, s, u) {
  const d = be("FeatherIcon"), h = be("BaseChipPreIcon"), w = be("BaseChipLabel"), V = be("Cancel"), U = be("BaseChip");
  return oe(), St(U, {
    class: lr(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: He(() => [
      t.showPreIcon ? (oe(), St(h, { key: 0 }, {
        default: He(() => {
          var R, N;
          return [
            st(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (N = t.pre) == null ? void 0 : N.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : At("", !0),
      st(w, null, {
        default: He(() => [
          Tw(Gt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? At("", !0) : (oe(), Fe("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = lu((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        st(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: He(() => [
            st(V)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var ES = /* @__PURE__ */ pr(bS, [["render", JS], ["__scopeId", "data-v-e0fc6ac0"]]);
const SS = {}, AS = (t) => (iS("data-v-aa720e06"), t = t(), aS(), t), FS = { class: "spinner-container" }, WS = /* @__PURE__ */ AS(() => /* @__PURE__ */ at("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ at("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), CS = [
  WS
];
function xS(t, o) {
  return oe(), Fe("div", FS, CS);
}
var BS = /* @__PURE__ */ pr(SS, [["render", xS], ["__scopeId", "data-v-aa720e06"]]), ss = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(ss || {});
const Nw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, IS = gt(gt(gt({
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
    validator: (t) => !!ss[t]
  },
  labels: {
    type: Object,
    default: () => Nw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, as), pi), tu), DS = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, _S = (t, o, r, a) => {
  if (r.toLowerCase() === ss.multi) {
    const u = t.modelValue, d = (h) => {
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
        return !!(u.value && u.value.length);
      },
      selectItem(h) {
        if (u.value && u.value.filter((V) => V[t.textProp.value] === h[t.textProp.value]).length)
          return;
        const w = u.value ? [...u.value, h] : [h];
        a("update:modelValue", w), d(w);
      },
      removeItem(h) {
        const w = u.value.findIndex((V) => {
          if (h[t.textProp.value] === V[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const V = u.value.slice(0);
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
  const s = t.modelValue;
  return {
    getInitialText() {
      return s.value ? s.value[t.textProp.value] : "";
    },
    handleModelValueChange() {
      t.query.value = this.getInitialText();
    },
    hasValue() {
      return !!s.value;
    },
    selectItem(u) {
      o.active.row = -1, t.forceCloseResults.value = !0, u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const u = t.internalResults.value[o.active.row];
        u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
      }
    }
  };
}, OS = () => {
  const t = gw({
    row: -1
  }), o = (u) => {
    Uw(() => {
      t.row = u;
    });
  }, r = (u, d) => {
    if (u.keyCode === K.DOWN) {
      if (u.preventDefault(), t.row === -1)
        a(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const h = t.row;
        a(), o(h + 1);
      }
      return !0;
    }
    if (u.keyCode === K.UP) {
      if (u.preventDefault(), t.row === 0)
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
}, QS = (t) => {
  const o = gw({
    row: -1,
    col: -1
  }), r = (d, h) => {
    Uw(() => {
      o.col = h, o.row = d;
    });
  }, a = (d, h) => {
    if (d.keyCode === K.DOWN) {
      if (d.preventDefault(), o.row === -1)
        s(), r(0, 0);
      else if (o.row + 1 <= h.length - 1) {
        const w = o.row, V = o.col;
        s(), r(w + 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.UP) {
      if (d.preventDefault(), o.row === 0)
        s();
      else if (o.row > 0) {
        const w = o.row, V = o.col;
        s(), r(w - 1, V);
      }
      return !0;
    }
    if (d.keyCode === K.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, V = o.row;
        s(), r(V, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= h.length - 1) {
        const w = o.row;
        s(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === K.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        s(), r(w - 1, t.length - 1);
      } else if (o.col > 0) {
        const w = o.col, V = o.row;
        s(), r(V, w - 1);
      }
      return !0;
    }
    if (d.keyCode === K.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return s(), r(d.ctrlKey ? h.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === K.HOME && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return s(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, s = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: s, handleKeyPress: a, active: o, first: () => {
    s(), r(0, 0);
  } };
}, zS = oo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: DS,
  props: IS,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ss.multi;
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
      return Kl(nE);
    },
    minCharIcon() {
      return Kl(hE);
    },
    dropdownIcon() {
      return Kl(iu);
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
        oi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          oi(this.inputRef, this.scrollContainer);
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
    const r = iw(ec(t, "labels"), Nw);
    mi(t), nu(t);
    let a;
    t.gridConfig ? a = QS(t.gridConfig) : a = OS();
    const s = ec(t, "id"), u = hp(() => s.value ? s.value : ae("feather-autocomplete-input")), { validate: d } = fi(u, ec(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: w, textProp: V, allowNew: U, type: R, minChar: N } = sS(t), S = Ir(!1), J = Ir(!1), F = Ir(!1), B = Ir(""), A = Ir([]), C = Ir(), W = hp(() => C.value), I = () => {
      S.value && !J.value && (B.value && B.value.length >= N.value && o.emit("search", B.value), N.value <= 0 && o.emit("search", B.value || ""), A.value = [], a.reset());
    }, k = _S({
      selectionLimit: h,
      selectionLimitReached: J,
      modelValue: w,
      textProp: V,
      allowNew: U,
      forceCloseResults: F,
      query: B,
      internalResults: A,
      input: W,
      emitSearch: I
    }, a, R.value, o.emit);
    return oS(gt(gt({}, r), hi(o.attrs)), {
      query: B,
      internalResults: A,
      selectionLimitReached: J,
      forceCloseResults: F,
      hasFocus: S,
      strategy: k,
      emitSearch: I,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: u,
      input: C,
      incomingId: s,
      inputRef: W,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: eu,
    InputSubText: di,
    AutocompleteResults: mS,
    AutocompleteResultsGrid: yS,
    Chip: ES,
    MenuMessage: ZS,
    FeatherIcon: L,
    FeatherMenu: ww,
    Spinner: BS
  }
}), GS = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, YS = ["id"], PS = { "data-ref-id": "feather-autocomplete-no-results" }, HS = { "data-ref-id": "feather-autocomplete-selection-limit" }, jS = { "data-ref-id": "feather-autocomplete-min-char" };
function XS(t, o, r, a, s, u) {
  const d = be("FeatherIcon"), h = be("Chip"), w = be("InputWrapper"), V = be("AutocompleteResults"), U = be("AutocompleteResultsGrid"), R = be("MenuMessage"), N = be("Spinner"), S = be("FeatherMenu"), J = be("InputSubText");
  return oe(), Fe("div", tc(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    st(S, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: lr(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: He(({ attrs: F, on: B }) => [
        st(w, tc(gt(gt({}, F), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, pp(B), { ref: "scroll" }), {
          pre: He(() => [
            xc(t.$slots, "pre", {}, () => [
              st(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: He(() => [
            st(d, {
              icon: t.dropdownIcon,
              class: lr(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: He(() => [
            at("div", {
              class: lr(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              at("div", GS, null, 512),
              at("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Gt(t.selectedDescribedByText), 9, YS),
              (oe(!0), Fe(Lr, null, qo(t.modelValueList, (A, C) => wa((oe(), St(h, {
                key: A[t.textProp],
                role: "button",
                id: C === t.activeChipIndex ? t.activeChipId : null,
                focused: C === t.activeChipIndex,
                disabled: t.disabled,
                text: A[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(A),
                onDelete: (W) => t.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [va, !t.singleSelect]
              ])), 128)),
              at("textarea", tc(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, pp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: He(() => [
        t.gridConfig ? At("", !0) : wa((oe(), St(V, {
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
          [va, t.showResults]
        ]),
        t.gridConfig ? wa((oe(), St(U, {
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
          [va, t.showResults]
        ]) : At("", !0),
        t.showNoResults ? (oe(), St(R, { key: 2 }, {
          default: He(() => [
            at("span", PS, Gt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : At("", !0),
        t.showSelectionLimit ? (oe(), St(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: He(() => [
            st(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            at("span", HS, Gt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : At("", !0),
        t.minChar ? wa((oe(), St(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: He(() => [
            st(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            at("span", jS, [
              xc(t.$slots, "min-char", {}, () => [
                Tw(Gt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [va, t.showMinCharWarning]
        ]) : At("", !0),
        t.showLoading ? (oe(), St(N, { key: 5 })) : At("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    st(J, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var LS = /* @__PURE__ */ pr(zS, [["render", XS], ["__scopeId", "data-v-43a7e951"]]);
const $S = window.Vue.defineComponent, Tn = window.Vue.createElementVNode, Wn = window.Vue.unref, Cn = window.Vue.createVNode, mp = window.Vue.withCtx, Va = window.Vue.toDisplayString, qS = window.Vue.renderList, KS = window.Vue.Fragment, Dr = window.Vue.openBlock, _r = window.Vue.createElementBlock, nc = window.Vue.createCommentVNode, eA = window.Vue.pushScopeId, tA = window.Vue.popScopeId, uu = (t) => (eA("data-v-3a502108"), t = t(), tA(), t), nA = { class: "list-main" }, rA = { class: "header" }, oA = /* @__PURE__ */ uu(() => /* @__PURE__ */ Tn("h2", null, "Situation List", -1)), iA = /* @__PURE__ */ uu(() => /* @__PURE__ */ Tn("span", null, "New Situation", -1)), aA = { class: "filters" }, sA = /* @__PURE__ */ uu(() => /* @__PURE__ */ Tn("span", null, "Reset Filters", -1)), lA = { class: "autocomplete" }, cA = {
  key: 0,
  class: "container"
}, uA = { class: "situation-list" }, dA = {
  key: 0,
  class: "footer-pager"
}, fA = {
  key: 1,
  class: "container"
}, hA = window.Vue.reactive, xo = window.Vue.ref, pA = window.Vue.watch, mA = window.VueRouter.useRouter, wA = /* @__PURE__ */ $S({
  __name: "SituationList",
  setup(t) {
    const o = mA(), r = hr();
    r.getSituations(), r.getNodes(), r.getUnassignedAlarms();
    const a = 9, s = hA({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), u = xo(!1), d = xo(0), h = xo(1), w = xo(0), V = xo(!1), U = (I) => {
      d.value = 0, s.situations = I[0], h.value = I.length;
    }, R = () => {
      s.nodes = r.nodes, s.results = r.nodes;
    };
    pA(
      () => r.situations,
      () => {
        R(), w.value = r.situations.length, s.allSituations = me.exports.chunk(r.situations, a);
        const I = r.situations.map((k) => k.id);
        r.filteredSituations = I, U(s.allSituations), N();
      }
    );
    const N = () => {
      r.filters && (r.filters.node && (s.nodeSelectedValue = r.filters.node), r.filters.severities && (s.filterSeverities = r.filters.severities), J(), r.filters = null);
    }, S = (I) => {
      if (!I)
        return s.nodeSelectedValue = void 0, [];
      u.value = !0, s.results = s.nodes.filter((k) => k.label.toLowerCase().indexOf(I) > -1).map((k) => ({
        _text: k.label,
        id: k.id
      })), u.value = !1;
    }, J = () => {
      if (s.nodeSelectedValue && s.nodeSelectedValue._text) {
        let I = r.situations.map((k) => {
          if (k.relatedAlarms.filter(
            (Q) => {
              var z;
              return Q.nodeLabel === ((z = s.nodeSelectedValue) == null ? void 0 : z._text);
            }
          ).length > 0)
            return k;
        }).filter((k) => k);
        if (I) {
          s.filterSeverities.includes("all") || (I = I.filter(
            (_) => s.filterSeverities.includes(_.severity)
          )), w.value = I.length, s.situations = I;
          const k = I.map((_) => _.id);
          r.filteredSituations = k, V.value = !0;
        }
      } else if (s.nodeSelectedValue = void 0, s.filterSeverities.includes("all"))
        W();
      else {
        const I = r.situations.filter(
          (_) => s.filterSeverities.includes(_.severity)
        );
        s.situations = I, w.value = I.length;
        const k = I.map((_) => _.id);
        V.value = !0, r.filteredSituations = k;
      }
    }, F = (I) => {
      d.value = I, s.situations = s.allSituations[d.value];
    }, B = (I) => {
      (s.nodeSelectedValue || s.filterSeverities.length) && (r.filters = {
        node: s.nodeSelectedValue,
        severities: s.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: I
        }
      });
    }, A = (I) => {
      I.includes("all") && !s.nodeSelectedValue ? W() : (s.filterSeverities = I, J());
    }, C = () => {
      o.push({
        name: "addSituation"
      });
    }, W = () => {
      s.filterSeverities = ["all"], s.nodeSelectedValue = void 0;
      const I = r.situations.map((k) => k.id);
      r.filteredSituations = I, w.value = r.situations.length, U(s.allSituations), V.value = !1;
    };
    return (I, k) => (Dr(), _r("div", nA, [
      Tn("div", rA, [
        oA,
        Cn(Wn(Je), {
          class: "new-situation-btn",
          onClick: k[0] || (k[0] = () => C())
        }, {
          default: mp(() => [
            Cn(Wn(L), {
              icon: Wn(pw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            iA
          ]),
          _: 1
        })
      ]),
      Tn("div", aA, [
        Cn(Wn(Je), {
          class: "reset-btn",
          onClick: k[1] || (k[1] = () => W())
        }, {
          default: mp(() => [
            Cn(Wn(L), {
              icon: Wn(hw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            sA
          ]),
          _: 1
        }),
        Cn(ru, {
          alarms: Wn(r).situations,
          onSelectedSeverities: A,
          "pre-selected": s.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        Tn("div", lA, [
          Cn(Wn(LS), {
            class: "map-search",
            label: "Find by node",
            loading: u.value,
            modelValue: s.nodeSelectedValue,
            "onUpdate:modelValue": [
              k[2] || (k[2] = (_) => s.nodeSelectedValue = _),
              J
            ],
            results: s.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      s.situations && s.situations.length > 0 ? (Dr(), _r("div", cA, [
        Tn("div", null, " Result: " + Va(s.situations.length) + " of " + Va(w.value), 1),
        Tn("div", uA, [
          (Dr(!0), _r(KS, null, qS(s.situations, (_) => (Dr(), _r("div", {
            class: "card",
            key: _.id
          }, [
            Cn(SM, {
              onClick: () => B(_.id),
              "situation-info": _
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !V.value && w.value > a ? (Dr(), _r("div", dA, [
          Tn("div", null, "Page: " + Va(d.value + 1) + " of " + Va(h.value), 1),
          Cn(RZ, {
            onGoToPage: F,
            currentPage: d.value,
            totalPages: h.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : nc("", !0)
      ])) : nc("", !0),
      !s.situations || s.situations.length == 0 ? (Dr(), _r("div", fA, " No results found ")) : nc("", !0)
    ]));
  }
});
const vA = /* @__PURE__ */ Ue(wA, [["__scopeId", "data-v-3a502108"]]);
const Ta = window.Vue.ref, VA = window.Vue.inject, TA = window.Vue.computed, gA = window.Vue.onMounted, UA = {
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
}, RA = (t) => {
  const o = Ta(!1), r = Ta(), a = Ta(t.controls), s = Ta(t.id), u = () => {
    r.value && r.value.focus();
  }, d = VA("registerTab");
  gA(() => {
    if (r.value && d) {
      const w = r.value.parentElement, V = w && w.parentElement ? w.parentElement : void 0, U = Array.from(V ? V.children : []).filter((N) => N.querySelectorAll("[role=tab]").length), R = w ? U.indexOf(w) : -1;
      d({
        el: r.value,
        focus: u,
        disabled: t.disabled,
        selected: o,
        id: s,
        controls: a,
        index: R
      });
    }
  });
  const h = TA(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: s.value,
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
}, wp = window.Vue.ref, NA = window.Vue.toRef, yA = window.Vue.watch, vp = window.Vue.provide, kA = {
  prop: "modelValue",
  event: "update:modelValue"
}, MA = {
  "update:modelValue": (t) => !0
}, ZA = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, bA = (t, o) => {
  const r = NA(t, "modelValue"), a = wp(t.modelValue), s = wp([]);
  yA(r, (J) => {
    w(J);
  });
  const u = (J) => {
    J.preventDefault(), s.value.some((F, B) => F.tab && F.tab.el.contains(J.target) ? (h(B), w(B), !0) : !1);
  }, d = (J) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(J))
      return;
    const B = J.keyCode, A = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, C = s.value.filter((z) => z.tab && !z.tab.disabled), W = s.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let I = W !== -1 ? W : a.value;
    const k = [K.RIGHT], _ = [K.LEFT], Q = [K.ENTER, K.SPACE];
    t.vertical && (k.push(K.DOWN), _.push(K.UP)), k.indexOf(B) > -1 ? (I++, I >= C.length && (I = 0), A(J), h(s.value.indexOf(C[I]))) : _.indexOf(B) > -1 && (I--, I < 0 && (I = C.length - 1), A(J), h(s.value.indexOf(C[I]))), Q.indexOf(B) > -1 && w(I);
  }, h = (J) => {
    s.value.forEach(function(F, B) {
      J === B && F.tab && F.tab.focus();
    });
  }, w = (J) => {
    const F = s.value[J];
    !F || F.tab && F.tab.disabled || (s.value.forEach((B, A) => {
      B.tab && (B.tab.selected = J === A), B.panel && (B.panel.selected = J === A);
    }), a.value = J, o.emit("update:modelValue", J));
  };
  vp("registerTab", (J) => {
    const F = J.index;
    F > -1 && (s.value[F] = { ...s.value[F], tab: J }, s.value = [...s.value], R());
  }), vp("registerPanel", (J) => {
    const F = J.index;
    F > -1 && (s.value[F] = {
      ...s.value[F],
      panel: J
    }, s.value = [...s.value], R());
  });
  const R = () => {
    s.value.forEach(({ tab: J, panel: F }, B) => {
      if (F && J) {
        const A = J.id || ae("tab"), C = J.controls || ae("panel");
        J.controls = C, J.id = A, F.tab = A, F.id = C;
      }
      B === a.value && (F && (F.selected = !0), J && (J.selected = !0));
    });
  };
  return {
    listeners: {
      click: u,
      keydown: d
    },
    attrs: {
      role: "tablist"
    },
    selected: a,
    pairs: s
  };
}, ga = window.Vue.ref, JA = window.Vue.inject, EA = window.Vue.computed, SA = window.Vue.onMounted, AA = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, FA = (t) => {
  const o = ga(!1), r = ga(), a = ga(t.tab), s = ga(t.id), u = JA("registerPanel");
  SA(() => {
    if (u) {
      const h = r.value, w = h && h.parentElement ? h.parentElement : void 0, V = h ? Array.from(w ? w.children : []).indexOf(h) : -1;
      u({
        selected: o,
        id: s,
        tab: a,
        el: r.value,
        index: V
      });
    }
  });
  const d = EA(() => ({
    role: "tabpanel",
    id: s.value,
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
}, du = window.Vue.defineComponent, WA = window.Vue.resolveComponent, fu = window.Vue.openBlock, hu = window.Vue.createElementBlock, Ko = window.Vue.createElementVNode, yw = window.Vue.mergeProps, ja = window.Vue.renderSlot, CA = window.Vue.createVNode, xA = window.Vue.normalizeStyle, BA = window.Vue.toHandlers, IA = window.Vue.withDirectives, DA = window.Vue.normalizeProps, _A = window.Vue.guardReactiveProps, OA = window.Vue.vShow;
var pu = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const QA = UA, zA = du({
  props: QA,
  setup(t) {
    return RA(t);
  },
  components: {
    FeatherRipple: dr
  }
}), GA = { role: "presentation" }, YA = { class: "tab-text" };
function PA(t, o, r, a, s, u) {
  const d = WA("FeatherRipple");
  return fu(), hu("li", GA, [
    Ko("button", yw(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      Ko("span", YA, [
        ja(t.$slots, "default", {}, void 0, !0)
      ]),
      CA(d)
    ], 16)
  ]);
}
var Vp = /* @__PURE__ */ pu(zA, [["render", PA], ["__scopeId", "data-v-e6bb52b6"]]);
const HA = ZA, jA = MA, XA = du({
  model: kA,
  emits: jA,
  props: HA,
  setup(t, o) {
    return bA(t, o);
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
}), LA = { class: "feather-tab-container" }, $A = { class: "tab-panels" };
function qA(t, o, r, a, s, u) {
  return fu(), hu("div", LA, [
    Ko("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: xA({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    Ko("ul", yw(t.attrs, BA(t.listeners)), [
      ja(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ko("div", $A, [
      ja(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var KA = /* @__PURE__ */ pu(XA, [["render", qA], ["__scopeId", "data-v-27adffb9"]]);
const eF = AA, tF = du({
  props: eF,
  setup(t) {
    return FA(t);
  }
});
function nF(t, o, r, a, s, u) {
  return IA((fu(), hu("div", DA(_A(t.attrs)), [
    ja(t.$slots, "default")
  ], 16)), [
    [OA, t.selected]
  ]);
}
var Tp = /* @__PURE__ */ pu(tF, [["render", nF]]);
const rF = window.Vue.defineComponent, oF = window.Vue.toDisplayString, iF = window.Vue.normalizeClass, aF = window.Vue.openBlock, sF = window.Vue.createElementBlock, lF = window.Vue.createCommentVNode, cF = /* @__PURE__ */ rF({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (aF(), sF("span", {
      key: 0,
      class: iF(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, oF(o.severity), 3)) : lF("", !0);
  }
});
const kw = /* @__PURE__ */ Ue(cF, [["__scopeId", "data-v-83c2cdce"]]), uF = window.Vue.defineComponent, gp = window.Vue.toDisplayString, Up = window.Vue.createElementVNode, dF = window.Vue.openBlock, fF = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const hF = { class: "box" }, pF = { class: "label" }, mF = { class: "date" }, wF = /* @__PURE__ */ uF({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (dF(), fF("div", hF, [
      Up("div", pF, gp(o.label), 1),
      Up("div", mF, gp(o.info), 1)
    ]));
  }
});
const rc = /* @__PURE__ */ Ue(wF, [["__scopeId", "data-v-b4afa751"]]), vF = window.Vue.defineComponent, VF = window.Vue.unref, TF = window.Vue.renderList, gF = window.Vue.Fragment, oc = window.Vue.openBlock, ic = window.Vue.createElementBlock, UF = window.Vue.toDisplayString, RF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NF = { class: "alarms-list" }, yF = /* @__PURE__ */ vF({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (oc(), ic("div", NF, [
      (oc(!0), ic(gF, null, TF(VF(me.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (s, u) => (oc(), ic("div", {
        class: RF(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, UF(s.length), 3))), 128))
    ]));
  }
});
const kF = /* @__PURE__ */ Ue(yF, [["__scopeId", "data-v-52d63440"]]), MF = window.Vue.openBlock, ZF = window.Vue.createElementBlock, bF = window.Vue.createElementVNode;
var JF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const EF = {}, SF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AF = /* @__PURE__ */ bF("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), FF = [
  AF
];
function WF(t, o) {
  return MF(), ZF("svg", SF, FF);
}
var CF = /* @__PURE__ */ JF(EF, [["render", WF]]);
const xF = window.Vue.openBlock, BF = window.Vue.createElementBlock, IF = window.Vue.createStaticVNode;
var DF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const _F = {}, OF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QF = /* @__PURE__ */ IF('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), zF = [
  QF
];
function GF(t, o) {
  return xF(), BF("svg", OF, zF);
}
var Mw = /* @__PURE__ */ DF(_F, [["render", GF]]);
const YF = window.Vue.defineComponent, Ot = window.Vue.unref, ac = window.Vue.createVNode, mu = window.Vue.createElementVNode, sc = window.Vue.withCtx, Ua = window.Vue.openBlock, lc = window.Vue.createBlock, cc = window.Vue.createCommentVNode, PF = window.Vue.normalizeClass, HF = window.Vue.createElementBlock, jF = window.Vue.pushScopeId, XF = window.Vue.popScopeId, wu = (t) => (jF("data-v-e073070b"), t = t(), XF(), t), LF = /* @__PURE__ */ wu(() => /* @__PURE__ */ mu("span", null, "Acknowledge", -1)), $F = /* @__PURE__ */ wu(() => /* @__PURE__ */ mu("span", null, "Escalate", -1)), qF = /* @__PURE__ */ wu(() => /* @__PURE__ */ mu("span", null, "Clear", -1)), KF = /* @__PURE__ */ YF({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(t) {
    const o = t, r = hr(), a = async (u) => {
      await ay(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await jm(
        o.situationId,
        Vt.ACCEPTED.toLowerCase()
      );
    }, s = async (u) => {
      await sy(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, d) => (Ua(), HF("div", {
      class: PF(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? cc("", !0) : (Ua(), lc(Ot(Je), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: sc(() => [
          ac(Ot(L), {
            icon: Ot(si),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          LF
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (Ua(), lc(Ot(Je), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Ot(Vt).ESCALATE))
      }, {
        default: sc(() => [
          ac(Ot(L), {
            icon: Ot(CF),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          $F
        ]),
        _: 1
      })) : cc("", !0),
      o.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (Ua(), lc(Ot(Je), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Ot(Vt).CLEAR))
      }, {
        default: sc(() => [
          ac(Ot(L), {
            icon: Ot(Mw),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          qF
        ]),
        _: 1
      })) : cc("", !0)
    ], 2));
  }
});
const Zw = /* @__PURE__ */ Ue(KF, [["__scopeId", "data-v-e073070b"]]);
var eW = Object.defineProperty, tW = Object.defineProperties, nW = Object.getOwnPropertyDescriptors, Rp = Object.getOwnPropertySymbols, rW = Object.prototype.hasOwnProperty, oW = Object.prototype.propertyIsEnumerable, Np = (t, o, r) => o in t ? eW(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Bc = (t, o) => {
  for (var r in o || (o = {}))
    rW.call(o, r) && Np(t, r, o[r]);
  if (Rp)
    for (var r of Rp(o))
      oW.call(o, r) && Np(t, r, o[r]);
  return t;
}, bw = (t, o) => tW(t, nW(o));
const Jw = window.Vue.defineComponent, iW = window.Vue.inject, aW = window.Vue.resolveComponent, uc = window.Vue.openBlock, yp = window.Vue.createElementBlock, Hr = window.Vue.createElementVNode, sW = window.Vue.createBlock, kp = window.Vue.createCommentVNode, lW = window.Vue.renderSlot, cW = window.Vue.pushScopeId, uW = window.Vue.popScopeId, dc = window.Vue.toRef, Ra = window.Vue.computed, dW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var fW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const hW = {
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
}, pW = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, mW = Jw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: pW,
  props: hW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: iW("registerCheckbox", (o) => {
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
    FeatherRipple: dr
  }
}), wW = (t) => (cW("data-v-a7af27e2"), t = t(), uW(), t), vW = { class: "layout-container" }, VW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], TW = { class: "checkbox hover focus" }, gW = /* @__PURE__ */ wW(() => /* @__PURE__ */ Hr("div", { class: "box" }, [
  /* @__PURE__ */ Hr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Hr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Hr("div", { class: "indeterminate" })
], -1)), UW = ["id", "for"];
function RW(t, o, r, a, s, u) {
  const d = aW("feather-ripple");
  return uc(), yp("div", vW, [
    Hr("div", {
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
      Hr("div", TW, [
        gW,
        t.disabled ? kp("", !0) : (uc(), sW(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? kp("", !0) : (uc(), yp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        lW(t.$slots, "default", {}, void 0, !0)
      ], 8, UW))
    ], 40, VW)
  ]);
}
var ls = /* @__PURE__ */ fW(mW, [["render", RW], ["__scopeId", "data-v-a7af27e2"]]);
const NW = bw(Bc({}, pi), {
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
Jw({
  props: NW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    mi(t);
    const r = dc(t, "error"), a = Ra(() => ae("feather-checkbox-group")), s = Ra(() => ae("feather-input-description")), u = Ra(() => ae("feather-input-label")), d = Ra(() => {
      const U = JSON.parse(JSON.stringify(o.attrs));
      return U["aria-invalid"] || (U["aria-invalid"] = !!r.value), bw(Bc({}, U), {
        class: "",
        "aria-describedby": s.value
      });
    }), h = dW(a.value), { validate: w } = fi(h, dc(t, "modelValue"), t.label, t.schema, dc(t, "error"));
    return Bc({
      groupId: a,
      inputId: h,
      descriptionId: s,
      labelId: u,
      attrs: d,
      validate: w,
      registerCheckbox: (U) => {
        U && h.value === a.value && (h.value = U);
      }
    }, hi(o.attrs));
  },
  components: {
    InputSubText: di
  }
});
const yW = window.Vue.openBlock, kW = window.Vue.createElementBlock, Ew = window.Vue.createElementVNode;
var MW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const ZW = {}, bW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JW = /* @__PURE__ */ Ew("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), EW = /* @__PURE__ */ Ew("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), SW = [
  JW,
  EW
];
function AW(t, o) {
  return yW(), kW("svg", bW, SW);
}
var FW = /* @__PURE__ */ MW(ZW, [["render", AW]]);
var WW = Object.defineProperty, CW = Object.defineProperties, xW = Object.getOwnPropertyDescriptors, Mp = Object.getOwnPropertySymbols, BW = Object.prototype.hasOwnProperty, IW = Object.prototype.propertyIsEnumerable, Zp = (t, o, r) => o in t ? WW(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, jr = (t, o) => {
  for (var r in o || (o = {}))
    BW.call(o, r) && Zp(t, r, o[r]);
  if (Mp)
    for (var r of Mp(o))
      IW.call(o, r) && Zp(t, r, o[r]);
  return t;
}, Sw = (t, o) => CW(t, xW(o));
const DW = window.Vue.defineComponent, fc = window.Vue.toRef, _W = window.Vue.computed, bp = window.Vue.resolveComponent, Jp = window.Vue.openBlock, Ep = window.Vue.createElementBlock, Sp = window.Vue.mergeProps, Ap = window.Vue.createVNode, OW = window.Vue.normalizeClass, Fp = window.Vue.withCtx, QW = window.Vue.createElementVNode, zW = window.Vue.toDisplayString, GW = window.Vue.createCommentVNode;
var YW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const PW = Sw(jr(jr({}, tu), pi), {
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
}), HW = {
  "update:modelValue": (t) => !0
}, jW = DW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: HW,
  props: PW,
  setup(t, o) {
    mi(t), nu(t);
    const r = fc(t, "id"), a = _W(() => r.value ? r.value : ae("feather-textarea-label")), { validate: s } = fi(a, fc(t, "modelValue"), t.label, t.schema, fc(t, "error"));
    return jr({
      inputId: a,
      incomingId: r,
      validate: s
    }, hi(o.attrs));
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
      const t = jr({}, this.$attrs);
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), Sw(jr(jr({}, t), this.listeners), {
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
    InputSubText: di,
    InputWrapper: eu
  }
}), XW = ["maxlength"], LW = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function $W(t, o, r, a, s, u) {
  const d = bp("InputWrapper"), h = bp("InputSubText");
  return Jp(), Ep("div", Sp(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    Ap(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: OW(["feather-textarea-content", t.contentCls])
    }, {
      default: Fp(() => [
        QW("textarea", Sp(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, XW)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Ap(h, { id: t.descriptionId }, {
      right: Fp(() => [
        t.maxlength ? (Jp(), Ep("div", LW, zW(t.charCount), 1)) : GW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Ic = /* @__PURE__ */ YW(jW, [["render", $W], ["__scopeId", "data-v-0648df5c"]]);
const qW = window.Pinia.defineStore, vu = qW("appStore", {
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
}), KW = window.Vue.defineComponent, Wp = window.Vue.toDisplayString, Bo = window.Vue.createElementVNode, er = window.Vue.unref, Or = window.Vue.openBlock, Cp = window.Vue.createBlock, Io = window.Vue.createCommentVNode, xp = window.Vue.createVNode, Na = window.Vue.createElementBlock, eC = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tC = { class: "row" }, nC = { class: "label" }, rC = { class: "action-icons" }, oC = { class: "icon-btn" }, iC = {
  key: 0,
  class: "icon-btn"
}, aC = {
  key: 1,
  class: "icon-btn"
}, sC = {
  key: 0,
  class: "text"
}, lC = window.Vue.watch, Bp = window.Vue.ref, cC = /* @__PURE__ */ KW({
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
    const o = t, r = vu(), a = Bp(!1), s = Bp((w = o.memo) == null ? void 0 : w.body);
    lC(o, () => {
      var V;
      s.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const u = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await py(o.id, o.type) ? s.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, h = async () => {
      a.value = !1, s.value && s.value !== "" && (await hy(o.id, o.type, s.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (V, U) => (Or(), Na("div", {
      class: eC([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Bo("div", tC, [
        Bo("div", nC, Wp(t.label), 1),
        Bo("div", rC, [
          Bo("div", oC, [
            a.value ? Io("", !0) : (Or(), Cp(er(L), {
              key: 0,
              icon: er(FW),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Or(), Na("div", iC, [
            xp(er(L), {
              icon: er(si),
              "aria-hidden": "true",
              class: "icon save",
              onClick: h
            }, null, 8, ["icon"])
          ])) : Io("", !0),
          s.value && s.value != "" || a.value ? (Or(), Na("div", aC, [
            xp(er(L), {
              icon: er(ci),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Io("", !0)
        ])
      ]),
      Bo("div", null, [
        !a.value && s.value != null ? (Or(), Na("div", sC, Wp(s.value), 1)) : Io("", !0),
        a.value ? (Or(), Cp(er(Ic), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => s.value = R),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Io("", !0)
      ])
    ], 2));
  }
});
const Xa = /* @__PURE__ */ Ue(cC, [["__scopeId", "data-v-3f44e250"]]), uC = window.Vue.defineComponent, Do = window.Vue.unref, Qr = window.Vue.createVNode, ya = window.Vue.toDisplayString, Vn = window.Vue.createElementVNode, Ip = window.Vue.openBlock, Dp = window.Vue.createElementBlock, _p = window.Vue.createCommentVNode, Op = window.Vue.createTextVNode, dC = window.Vue.pushScopeId, fC = window.Vue.popScopeId, Aw = (t) => (dC("data-v-d6ef8007"), t = t(), fC(), t), hC = {
  key: 0,
  class: "card"
}, pC = { class: "row" }, mC = { class: "title" }, wC = {
  key: 0,
  class: "ack"
}, vC = ["innerHTML"], VC = /* @__PURE__ */ Aw(() => /* @__PURE__ */ Vn("strong", null, "First Event", -1)), TC = /* @__PURE__ */ Aw(() => /* @__PURE__ */ Vn("strong", null, "Last Event", -1)), gC = { class: "section memo-boxes" }, Qp = window.Vue.ref, UC = window.Vue.watch, RC = /* @__PURE__ */ uC({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, a = Qp(!1), s = Qp(r.alarm);
    UC(r, () => {
      s.value = r.alarm, a.value = r.selectAll;
    });
    const u = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const w = await Gm(h);
      w && (s.value = w);
    };
    return (h, w) => {
      var V, U, R, N, S;
      return s.value ? (Ip(), Dp("div", hC, [
        Vn("div", null, [
          Vn("div", pC, [
            Qr(Do(ls), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (J) => a.value = J),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Vn("div", mC, ya(s.value.nodeLabel) + " - " + ya(s.value.id), 1),
            Qr(kw, {
              severity: (V = s.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (Ip(), Dp("div", wC, [
              Qr(Do(L), {
                icon: Do(si),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : _p("", !0)
          ]),
          Vn("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, vC),
          Vn("div", null, [
            VC,
            Op(" - " + ya(Do(Kt)(s.value.firstEventTime)), 1)
          ]),
          Vn("div", null, [
            TC,
            Op(" - " + ya(Do(Kt)(s.value.lastEventTime)), 1)
          ]),
          Vn("div", gC, [
            Qr(Xa, {
              id: (U = s.value) == null ? void 0 : U.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = s.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Qr(Xa, {
              id: (N = s.value) == null ? void 0 : N.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (S = s.value) == null ? void 0 : S.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Qr(Zw, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : _p("", !0);
    };
  }
});
const NC = /* @__PURE__ */ Ue(RC, [["__scopeId", "data-v-d6ef8007"]]), yC = window.Vue.openBlock, kC = window.Vue.createElementBlock, Fw = window.Vue.createElementVNode;
var MC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const ZC = {}, bC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JC = /* @__PURE__ */ Fw("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), EC = /* @__PURE__ */ Fw("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), SC = [
  JC,
  EC
];
function AC(t, o) {
  return yC(), kC("svg", bC, SC);
}
var FC = /* @__PURE__ */ MC(ZC, [["render", AC]]);
const WC = window.Vue.defineComponent, cr = window.Vue.createElementVNode, pn = window.Vue.createVNode, $t = window.Vue.unref, hc = window.Vue.withCtx, CC = window.Vue.renderList, xC = window.Vue.Fragment, ka = window.Vue.openBlock, Ma = window.Vue.createElementBlock, BC = window.Vue.createCommentVNode, IC = window.Vue.pushScopeId, DC = window.Vue.popScopeId, cs = (t) => (IC("data-v-99e77211"), t = t(), DC(), t), _C = { class: "container" }, OC = { class: "row" }, QC = /* @__PURE__ */ cs(() => /* @__PURE__ */ cr("div", { class: "title" }, "Alarms", -1)), zC = { class: "row actions" }, GC = /* @__PURE__ */ cs(() => /* @__PURE__ */ cr("span", null, "Clear", -1)), YC = /* @__PURE__ */ cs(() => /* @__PURE__ */ cr("span", null, "Acknowledge", -1)), PC = /* @__PURE__ */ cs(() => /* @__PURE__ */ cr("span", null, "Remove", -1)), HC = { class: "section" }, jC = {
  key: 0,
  class: "alarm-list"
}, zp = window.Vue.ref, XC = window.Vue.watch, LC = window.Vue.reactive, $C = /* @__PURE__ */ WC({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = vu(), a = hr(), s = zp(!1), u = zp(["all"]), d = LC({
      selectedAlarms: [],
      alarms: o.alarms
    });
    XC(o, () => {
      u.value = ["all"], d.alarms = o.alarms, d.selectedAlarms = [], s.value = !1;
    });
    const h = (R) => {
      d.selectedAlarms.includes(R) ? me.exports.remove(d.selectedAlarms, (N) => N == R) : d.selectedAlarms.push(R);
    }, w = async (R) => {
      d.selectedAlarms.length && (await ly(d.selectedAlarms, R), a.getSituation(o.situationId), d.selectedAlarms = [], s.value = !1);
    }, V = async () => {
      d.selectedAlarms.length && (await Ry(
        o.situationId,
        d.selectedAlarms
      ) ? a.getSituation(o.situationId) : r.showErrorMsg("Error on removing alarms :("));
    }, U = (R) => {
      R.includes("all") ? d.alarms = o.alarms : d.alarms = o.alarms.filter((N) => R.includes(N.severity));
    };
    return (R, N) => (ka(), Ma("div", _C, [
      cr("div", OC, [
        QC,
        pn(ru, {
          alarms: o.alarms,
          onSelectedSeverities: U
        }, null, 8, ["alarms"])
      ]),
      cr("div", zC, [
        pn($t(ls), {
          modelValue: s.value,
          "onUpdate:modelValue": N[0] || (N[0] = (S) => s.value = S),
          label: "selected"
        }, null, 8, ["modelValue"]),
        pn($t(Je), {
          class: "acction-btn",
          onClick: N[1] || (N[1] = () => w("clear"))
        }, {
          default: hc(() => [
            pn($t(L), {
              icon: $t(Mw),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            GC
          ]),
          _: 1
        }),
        pn($t(Je), {
          class: "acction-btn",
          onClick: N[2] || (N[2] = () => w("ack"))
        }, {
          default: hc(() => [
            pn($t(L), {
              icon: $t(si),
              "aria-hidden": "true",
              class: "icon ack"
            }, null, 8, ["icon"]),
            YC
          ]),
          _: 1
        }),
        pn($t(Je), {
          class: "acction-btn",
          onClick: N[3] || (N[3] = () => V())
        }, {
          default: hc(() => [
            pn($t(L), {
              icon: $t(FC),
              "aria-hidden": "true",
              class: "icon remove"
            }, null, 8, ["icon"]),
            PC
          ]),
          _: 1
        })
      ]),
      cr("div", HC, [
        d.alarms.length > 0 ? (ka(), Ma("div", jC, [
          (ka(!0), Ma(xC, null, CC(d.alarms, (S) => (ka(), Ma("div", {
            key: S.id
          }, [
            pn(NC, {
              alarm: S,
              selectAll: s.value,
              "situation-id": o.situationId,
              onAlarmSelected: h
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : BC("", !0)
      ])
    ]));
  }
});
const qC = /* @__PURE__ */ Ue($C, [["__scopeId", "data-v-99e77211"]]), KC = "/whoami", ex = async () => {
  try {
    const t = await tn.get(KC);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, tx = window.Pinia.defineStore, Vi = tx("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await ex();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await Ty();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await Hm(t);
        this.allowSave = o;
      }
    }
  }
}), nx = window.Vue.defineComponent, Qt = window.Vue.createVNode, wt = window.Vue.unref, pc = window.Vue.normalizeClass, Za = window.Vue.toDisplayString, tr = window.Vue.openBlock, nr = window.Vue.createElementBlock, ba = window.Vue.createCommentVNode, rx = window.Vue.withCtx, zt = window.Vue.createElementVNode, ox = window.Vue.createTextVNode, ix = window.Vue.Fragment, ax = window.Vue.pushScopeId, sx = window.Vue.popScopeId, lx = (t) => (ax("data-v-eecc24f5"), t = t(), sx(), t), cx = { class: "section" }, ux = { class: "action-section" }, dx = {
  key: 0,
  class: "btn-row"
}, fx = { key: 0 }, hx = { key: 1 }, px = {
  key: 0,
  class: "situation-detail"
}, mx = { class: "situation-info" }, wx = { class: "id" }, vx = { key: 0 }, Vx = ["innerHTML"], Tx = /* @__PURE__ */ lx(() => /* @__PURE__ */ zt("p", null, null, -1)), gx = { class: "boxes" }, Ux = { class: "parameters" }, Rx = { class: "section memo-boxes" }, Nx = { key: 0 }, Gp = window.Vue.ref, yx = window.Vue.watch, kx = /* @__PURE__ */ nx({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(t) {
    const o = t, r = hr(), a = Vt.REJECTED, s = Vi(), u = Gp(o.situationInfo.status), d = Gp(o.situationInfo);
    yx(o, () => {
      u.value = o.situationInfo.status || "", d.value = o.situationInfo;
    });
    const h = (w) => {
      var V;
      jm((V = o.situationInfo) == null ? void 0 : V.id, w.toLowerCase()), u.value = w, r.getSituation(o.situationInfo.id);
    };
    return (w, V) => {
      var U, R, N, S, J, F, B, A, C, W, I, k;
      return tr(), nr(ix, null, [
        zt("div", cx, [
          zt("div", ux, [
            Qt(Zw, {
              alarm: d.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            wt(s).allowSave ? (tr(), nr("div", dx, [
              Qt(wt(Je), {
                class: pc(["btn", { rejected: u.value == wt(a) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => h(wt(a)))
              }, {
                default: rx(() => [
                  Qt(wt(L), {
                    icon: wt(Xm),
                    "aria-hidden": "true",
                    class: pc(["icon reject", { rejected: u.value == wt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == wt(a) ? (tr(), nr("span", fx, Za(wt(a)), 1)) : (tr(), nr("span", hx, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : ba("", !0)
          ]),
          d.value ? (tr(), nr("div", px, [
            zt("div", {
              class: pc(["severity-line", [`${(R = (U = d.value) == null ? void 0 : U.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            zt("div", mx, [
              zt("div", wx, [
                zt("div", null, [
                  ox(" Situation - " + Za((N = d.value) == null ? void 0 : N.id) + " - affecting " + Za(wt(me.exports.size)(wt(me.exports.groupBy)((S = d.value) == null ? void 0 : S.alarms, "nodeId"))) + " node ", 1),
                  d.value.alarms ? (tr(), nr("span", vx, "having " + Za(d.value.alarms.length) + " alarms ", 1)) : ba("", !0)
                ]),
                Qt(kw, {
                  severity: (J = d.value) == null ? void 0 : J.severity
                }, null, 8, ["severity"])
              ]),
              zt("span", {
                innerHTML: d.value.description
              }, null, 8, Vx),
              Tx,
              zt("div", gx, [
                Qt(rc, {
                  label: "First Event",
                  info: wt(Kt)(d.value.firstEventTime)
                }, null, 8, ["info"]),
                Qt(rc, {
                  label: "Last Event",
                  info: wt(Kt)(d.value.lastEventTime)
                }, null, 8, ["info"]),
                Qt(rc, {
                  label: "Reduction Key",
                  info: d.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            zt("div", Ux, [
              Qt(kF, {
                alarms: (F = d.value) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ba("", !0),
          zt("div", Rx, [
            Qt(Xa, {
              id: (B = d.value) == null ? void 0 : B.id,
              situationId: (A = d.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (C = d.value) == null ? void 0 : C.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Qt(Xa, {
              id: (W = d.value) == null ? void 0 : W.id,
              situationId: (I = d.value) == null ? void 0 : I.id,
              label: "Journal Memo",
              type: "journal",
              memo: (k = d.value) == null ? void 0 : k.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        d.value.alarms && d.value.alarms.length ? (tr(), nr("div", Nx, [
          Qt(qC, {
            alarms: d.value.alarms,
            "situation-id": d.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : ba("", !0)
      ], 64);
    };
  }
});
const Mx = /* @__PURE__ */ Ue(kx, [["__scopeId", "data-v-eecc24f5"]]);
var Zx = Object.defineProperty, bx = Object.defineProperties, Jx = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, Sx = Object.prototype.propertyIsEnumerable, Pp = (t, o, r) => o in t ? Zx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Dc = (t, o) => {
  for (var r in o || (o = {}))
    Ex.call(o, r) && Pp(t, r, o[r]);
  if (Yp)
    for (var r of Yp(o))
      Sx.call(o, r) && Pp(t, r, o[r]);
  return t;
}, Ax = (t, o) => bx(t, Jx(o));
const Ww = window.Vue.defineComponent, ar = window.Vue.resolveComponent, Ca = window.Vue.openBlock, Hp = window.Vue.createBlock, xa = window.Vue.mergeProps, sr = window.Vue.withCtx, Cw = window.Vue.createElementBlock, Fx = window.Vue.Fragment, Wx = window.Vue.renderList, Cx = window.Vue.createTextVNode, xx = window.Vue.toDisplayString, Bx = window.Vue.computed, jp = window.Vue.toRef, _o = window.Vue.createVNode, Xp = window.Vue.toHandlers, Ix = window.Vue.renderSlot, Dx = window.Vue.normalizeClass, _x = window.Vue.createElementVNode;
var xw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Ox = Ww({
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
        oi(o, this.$refs.list.$el);
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
    FeatherList: su,
    FeatherListItem: vi
  }
});
function Qx(t, o, r, a, s, u) {
  const d = ar("FeatherListItem"), h = ar("FeatherList");
  return Ca(), Hp(h, xa(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: sr(() => [
      (Ca(!0), Cw(Fx, null, Wx(t.options, (w, V) => (Ca(), Hp(d, {
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
        default: sr(() => [
          Cx(xx(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var zx = /* @__PURE__ */ xw(Ox, [["render", Qx], ["__scopeId", "data-v-eae820da"]]);
const Gx = Ax(Dc(Dc({}, tu), pi), {
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
}), Yx = {
  "update:modelValue": (t) => !0
}, Px = Ww({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Yx,
  props: Gx,
  setup(t, o) {
    mi(t), nu(t);
    const r = Bx(() => ae("feather-select-input")), { validate: a } = fi(r, jp(t, "modelValue"), t.label, t.schema, jp(t, "error"));
    return Dc({
      inputId: r,
      validate: a
    }, hi(o.attrs));
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
    icon: () => iu
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
    InputWrapper: eu,
    InputSubText: di,
    FeatherMenu: ww,
    List: zx,
    FeatherIcon: L
  }
});
function Hx(t, o, r, a, s, u) {
  const d = ar("FeatherIcon"), h = ar("InputWrapper"), w = ar("List"), V = ar("FeatherMenu"), U = ar("InputSubText");
  return Ca(), Cw("div", xa(t.inherittedAttrs, { class: "feather-select-container" }), [
    _o(V, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: sr((R) => [
        _o(h, xa({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Xp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: sr(() => [
            Ix(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: sr(() => [
            _o(d, {
              class: Dx(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: sr(() => [
            _x("input", xa(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Xp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: sr(() => [
        _o(w, {
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
    _o(U, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var jx = /* @__PURE__ */ xw(Px, [["render", Hx], ["__scopeId", "data-v-ecb32d90"]]);
const Xx = window.Vue.openBlock, Lx = window.Vue.createElementBlock, Bw = window.Vue.createElementVNode;
var $x = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const qx = {}, Kx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eB = /* @__PURE__ */ Bw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), tB = /* @__PURE__ */ Bw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), nB = [
  eB,
  tB
];
function rB(t, o) {
  return Xx(), Lx("svg", Kx, nB);
}
var oB = /* @__PURE__ */ $x(qx, [["render", rB]]);
const Ba = window.Vue.openBlock, _c = window.Vue.createElementBlock, Iw = window.Vue.createElementVNode, iB = window.Vue.defineComponent, rr = window.Vue.ref, aB = window.Vue.provide, Lp = window.Vue.computed, sB = window.Vue.onUnmounted, $p = window.Vue.toRef, lB = window.Vue.resolveComponent, cB = window.Vue.Fragment, uB = window.Vue.createBlock, dB = window.Vue.Teleport, qp = window.Vue.createVNode, fB = window.Vue.Transition, hB = window.Vue.withCtx, pB = window.Vue.normalizeClass, mB = window.Vue.normalizeStyle, wB = window.Vue.toDisplayString, vB = window.Vue.createCommentVNode, VB = window.Vue.renderSlot, mc = window.Vue.nextTick;
var Dw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const TB = {}, gB = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, UB = /* @__PURE__ */ Iw("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), RB = [
  UB
];
function NB(t, o) {
  return Ba(), _c("svg", gB, RB);
}
var yB = /* @__PURE__ */ Dw(TB, [["render", NB]]), Oe = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(Oe || {}), gn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(gn || {});
const kB = (t, o, r, a = 9) => {
  const s = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= o.height + a && d.push(Oe.top), s >= o.height + a && d.push(Oe.bottom);
  const h = [];
  u >= o.width + a && h.push(Oe.right), t.left >= o.width + a && h.push(Oe.left);
  let w = [...h, ...d];
  return (r === Oe.top || r === Oe.bottom) && (w = [...d, ...h]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, MB = (t, o, r, a, s = 28) => {
  if (t === Oe.left || t === Oe.right)
    return gn.center;
  const u = o.left + o.width / 2, d = window.innerWidth - o.right, h = [], w = u, V = d + o.width / 2, U = r.width - s, R = r.width / 2;
  return w >= R && V >= R && h.push(gn.center), V >= U && h.push(gn.left), w >= U && h.push(gn.right), h.indexOf(a) > -1 ? a : h.length ? h[0] : a;
}, ZB = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Oe.top
  },
  pointerAlignment: {
    type: String,
    default: () => gn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, bB = iB({
  props: ZB,
  setup(t) {
    const o = rr(!1), r = rr(!1), a = ae("feather-tooltip-trigger"), s = ae("feather-tooltip"), u = "data-feather-tooltip";
    aB("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      eo(d), o.value || (d = Kr(F, t.enterDelay));
    }, w = () => {
      eo(d), d = Kr(B, t.exitDelay);
    }, V = (Ve) => {
      Ve.keyCode === K.ESCAPE && (Ve.preventDefault(), B(!0));
    }, U = Lp(() => ({
      [u]: a,
      "aria-describedby": s
    })), R = {
      mouseenter: h,
      mouseleave: w,
      focus: h,
      blur: w,
      keydown: V
    }, N = rr(document), S = mw(N, () => B(!0));
    sB(() => B(!0));
    const J = () => document.getElementById(s), F = () => {
      r.value = !1, o.value = !0, mc(() => {
        const Ve = J();
        de(Ve), o.value = !1, mc(() => {
          r.value = !0, o.value = !0, S.value = !0;
        });
      });
    }, B = (Ve = !1) => {
      _.value = "", k.value = "", Q.value = "", z.value = "", o.value = !1, Ve && (r.value = !1), S.value = !1;
    }, A = $p(t, "placement"), C = $p(t, "pointerAlignment"), W = 8, I = 24, k = rr(""), _ = rr(""), Q = rr(""), z = rr(""), we = Lp(() => z.value ? "p-" + z.value : !1), de = (Ve) => {
      const Te = document.querySelector(`[${u}=${a}]`);
      if (!Te) {
        console.log("trigger not found");
        return;
      }
      mc(() => {
        const Re = Te.getBoundingClientRect(), Ze = Ve.getBoundingClientRect(), ce = kB(Re, Ze, A.value, W), Be = MB(ce, Re, Ze, C.value, I);
        Q.value = Be.toString(), z.value = ce.toString();
        let Ie = 0, Xe = 0;
        if ((ce === Oe.left || ce === Oe.right) && (Ie = Re.top + Re.height / 2 - Ze.height / 2, ce === Oe.left && (Xe = Re.left - Ze.width - W), ce === Oe.right && (Xe = Re.right)), ce === Oe.top || ce === Oe.bottom) {
          Ie = Re.top - Ze.height - W, ce === Oe.bottom && (Ie = Re.bottom);
          const io = Re.left + Re.width / 2;
          switch (Be) {
            case gn.center:
              Xe = io - Ze.width / 2;
              break;
            case gn.left:
              Xe = io - I;
              break;
            case gn.right:
              Xe = io - Ze.width + I;
              break;
          }
        }
        k.value = Ie.toString() + "px", _.value = Xe.toString() + "px";
      });
    };
    return {
      attrs: U,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: Q,
      placementClass: we,
      top: k,
      left: _,
      tooltipID: s
    };
  },
  components: {
    Pointer: yB
  }
}), JB = ["id"];
function EB(t, o, r, a, s, u) {
  const d = lB("Pointer");
  return Ba(), _c(cB, null, [
    (Ba(), uB(dB, { to: "body" }, [
      qp(fB, { css: t.animate }, {
        default: hB(() => [
          t.show ? (Ba(), _c("div", {
            key: 0,
            class: pB(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: mB({ left: t.left, top: t.top })
          }, [
            Iw("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, wB(t.title), 9, JB),
            qp(d, { class: "tooltip-pointer" })
          ], 6)) : vB("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    VB(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Kp = /* @__PURE__ */ Dw(bB, [["render", EB], ["__scopeId", "data-v-3da6b22e"]]);
const SB = window.Vue.defineComponent, wc = window.Vue.normalizeStyle, vc = window.Vue.createElementVNode, Oo = window.Vue.unref, em = window.Vue.toHandlers, tm = window.Vue.mergeProps, nm = window.Vue.withCtx, rm = window.Vue.createVNode, AB = window.Vue.renderList, FB = window.Vue.Fragment, Qo = window.Vue.openBlock, zo = window.Vue.createElementBlock, om = window.Vue.normalizeClass, im = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WB = { class: "row" }, CB = /* @__PURE__ */ SB({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(t) {
    const o = t, r = new Date().getTime(), a = (u, d) => u ? (Number(d) - Number(u)) * o.proportion : 0, s = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, d) => (Qo(), zo("div", WB, [
      vc("div", {
        class: "line-gray",
        style: wc({
          width: s(o.events[0].createTime) + "px"
        })
      }, null, 4),
      rm(Oo(Kp), {
        title: Oo(Kt)(t.alarm.firstEventTime)
      }, {
        default: nm(({ attrs: h, on: w }) => [
          vc("div", tm({ class: "circle" }, h, em(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Qo(!0), zo(FB, null, AB(o.events, (h, w) => (Qo(), zo("div", {
        class: "event-trim",
        key: h.id
      }, [
        o.events[w + 1] ? (Qo(), zo("div", {
          key: 0,
          class: om(["line", [`${h.severity.toLowerCase()}-bg dark`]]),
          style: wc({
            width: a(h.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : im("", !0),
        rm(Oo(Kp), {
          title: Oo(Kt)(t.alarm.firstEventTime)
        }, {
          default: nm(({ attrs: V, on: U }) => [
            o.events[w + 1] ? (Qo(), zo("div", tm({ key: 0 }, V, em(U), {
              class: ["event", [`${h.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : im("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      vc("div", {
        class: om(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: wc({
          width: a(t.events[t.events.length - 1].createTime, Oo(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const xB = /* @__PURE__ */ Ue(CB, [["__scopeId", "data-v-3341d12d"]]), BB = window.Vue.openBlock, IB = window.Vue.createElementBlock, _w = window.Vue.createElementVNode;
var DB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const _B = {}, OB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QB = /* @__PURE__ */ _w("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), zB = /* @__PURE__ */ _w("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), GB = [
  QB,
  zB
];
function YB(t, o) {
  return BB(), IB("svg", OB, GB);
}
var PB = /* @__PURE__ */ DB(_B, [["render", YB]]);
const HB = window.Vue.defineComponent, Oc = window.Vue.createElementVNode, jB = window.Vue.renderList, am = window.Vue.Fragment, Vc = window.Vue.openBlock, Tc = window.Vue.createElementBlock, XB = window.Vue.normalizeClass, LB = window.Vue.unref, sm = window.Vue.toDisplayString, $B = window.Vue.pushScopeId, qB = window.Vue.popScopeId, KB = (t) => ($B("data-v-2e087f7b"), t = t(), qB(), t), e3 = /* @__PURE__ */ KB(() => /* @__PURE__ */ Oc("strong", null, "Events:", -1)), t3 = /* @__PURE__ */ HB({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (Vc(), Tc(am, null, [
      e3,
      (Vc(!0), Tc(am, null, jB(o.events, (s) => (Vc(), Tc("div", {
        class: "event-description",
        key: s.id
      }, [
        Oc("div", {
          class: XB(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Oc("div", null, sm(LB(Kt)(s.createTime)) + " - " + sm(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const n3 = /* @__PURE__ */ Ue(t3, [["__scopeId", "data-v-2e087f7b"]]), r3 = window.Vue.defineComponent, o3 = window.Vue.normalizeClass, vt = window.Vue.createElementVNode, zr = window.Vue.toDisplayString, ot = window.Vue.unref, Gr = window.Vue.createVNode, Ow = window.Vue.createTextVNode, i3 = window.Vue.renderList, lm = window.Vue.Fragment, mn = window.Vue.openBlock, or = window.Vue.createElementBlock, cm = window.Vue.createBlock, Ja = window.Vue.createCommentVNode, a3 = window.Vue.normalizeStyle, s3 = window.Vue.pushScopeId, l3 = window.Vue.popScopeId, c3 = (t) => (s3("data-v-01717d0d"), t = t(), l3(), t), u3 = { class: "section detail" }, d3 = { class: "id" }, f3 = {
  key: 0,
  class: "section"
}, h3 = /* @__PURE__ */ c3(() => /* @__PURE__ */ vt("div", { class: "id" }, "Alarms", -1)), p3 = { class: "action-btns" }, m3 = { class: "zoom" }, w3 = /* @__PURE__ */ Ow(" Zoom "), v3 = { class: "times" }, V3 = {
  key: 0,
  class: "timeline-container"
}, T3 = { class: "alarm-id" }, g3 = {
  key: 0,
  class: "panel"
}, xn = window.Vue.ref, U3 = window.Vue.watch, R3 = /* @__PURE__ */ r3({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var I, k;
    const o = t, r = hr(), a = xn(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = xn(s[0]), d = xn(o.width), h = xn(o.width), w = xn(new Date().getTime()), V = () => {
      var _, Q;
      if (!o.situation.events) {
        const z = (Q = (_ = o.situation) == null ? void 0 : _.alarms) == null ? void 0 : Q.map((we) => we.id);
        r.getEvents(o.situation.id, z);
      }
    };
    V();
    const U = () => (w.value = new Date().getTime(), d.value / (Number(w.value) - Number(N.value))), R = xn(o.situation.alarms), N = xn(
      ((k = me.exports.minBy((I = o.situation) == null ? void 0 : I.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), S = xn(U());
    U3(o, () => {
      var _, Q;
      N.value = ((Q = me.exports.minBy((_ = o.situation) == null ? void 0 : _.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), V(), d.value = h.value, S.value = U(), R.value = o.situation.alarms, u.value = s[0];
    });
    const J = (_) => {
      if ((_ == null ? void 0 : _.id) === 1 && (R.value = o.situation.alarms), (_ == null ? void 0 : _.id) === 2) {
        const Q = me.exports.groupBy(R.value, "severity"), z = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        R.value = z.filter((we) => we);
      }
      if ((_ == null ? void 0 : _.id) === 3) {
        const Q = me.exports.reverse(
          me.exports.sortBy(
            o.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        R.value = Q;
      }
    }, F = () => {
      d.value += 100, S.value = U();
    }, B = () => {
      d.value -= 100, S.value = U();
    }, A = () => {
      d.value = h.value, S.value = U();
    }, C = (_) => {
      a.value = _;
    }, W = () => {
      a.value = 0;
    };
    return (_, Q) => {
      var z, we;
      return mn(), or(lm, null, [
        vt("div", u3, [
          vt("div", {
            class: o3(["severity-line", [`${(we = (z = o.situation) == null ? void 0 : z.severity) == null ? void 0 : we.toLowerCase()}-bg dark`]])
          }, null, 2),
          vt("div", null, [
            vt("div", d3, "Situation " + zr(o.situation.id), 1),
            vt("div", null, " Duration: " + zr(ot(hM)(w.value, new Date(N.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (mn(), or("div", f3, [
          h3,
          vt("div", p3, [
            Gr(ot(jx), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: u.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (de) => u.value = de),
                J
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            vt("div", m3, [
              w3,
              vt("div", null, [
                Gr(ot(L), {
                  icon: ot(oB),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                Gr(ot(L), {
                  icon: ot(hw),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                Gr(ot(L), {
                  icon: ot(PB),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          h.value ? (mn(), or("div", {
            key: 0,
            class: "alarms",
            style: a3({
              width: h.value + 50 + "px"
            })
          }, [
            vt("div", v3, [
              vt("div", null, zr(ot(Kt)(N.value)), 1),
              vt("div", null, zr(ot(Kt)(w.value)), 1)
            ]),
            t.situation.events ? (mn(), or("div", V3, [
              (mn(!0), or(lm, null, i3(R.value, (de) => (mn(), or("div", {
                class: "timeline",
                key: de.id
              }, [
                vt("div", T3, [
                  Ow(zr(de.nodeLabel) + " - " + zr(de.id) + " ", 1),
                  a.value === de.id ? (mn(), cm(ot(L), {
                    key: 0,
                    icon: ot(iu),
                    class: "zoom-icon expand",
                    onClick: W
                  }, null, 8, ["icon"])) : (mn(), cm(ot(L), {
                    key: 1,
                    icon: ot(ow),
                    class: "zoom-icon expand",
                    onClick: () => C(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Gr(xB, {
                  alarm: de,
                  proportion: S.value,
                  "min-start": N.value,
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === de.id ? (mn(), or("div", g3, [
                  Gr(n3, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : Ja("", !0)
              ]))), 128))
            ])) : Ja("", !0)
          ], 4)) : Ja("", !0)
        ])) : Ja("", !0)
      ], 64);
    };
  }
});
const N3 = /* @__PURE__ */ Ue(R3, [["__scopeId", "data-v-01717d0d"]]), y3 = window.Vue.openBlock, k3 = window.Vue.createElementBlock, M3 = window.Vue.createElementVNode;
var Z3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const b3 = {}, J3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, E3 = /* @__PURE__ */ M3("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), S3 = [
  E3
];
function A3(t, o) {
  return y3(), k3("svg", J3, S3);
}
var Ia = /* @__PURE__ */ Z3(b3, [["render", A3]]);
const Qw = window.Vue.defineComponent, gc = window.Vue.ref, F3 = window.Vue.toRef, Uc = window.Vue.inject, um = window.Vue.watch, W3 = window.Vue.nextTick, dm = window.Vue.openBlock, fm = window.Vue.createElementBlock, Rc = window.Vue.createElementVNode, C3 = window.Vue.normalizeClass, hm = window.Vue.renderSlot, pm = window.Vue.createCommentVNode, Nc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var x3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const B3 = {
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
}, I3 = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, D3 = Qw({
  emits: I3,
  props: B3,
  setup(t, o) {
    const r = gc(), a = gc(!1), s = gc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), d = F3(t, "modelValue"), h = Uc("queueSnackbar", !1), w = Uc("unqueueSnackbar", !1), V = Uc("nextSnackbar", () => {
    }), U = (F, B) => {
      let A, C, W = B;
      const I = () => {
        !A || (eo(A), A = 0, W -= Date.now() - C);
      }, k = () => {
        A || (C = Date.now(), A = Kr(F, W));
      };
      return k(), { pause: I, resume: k };
    }, R = () => {
      a.value = !1, o.emit("closed"), V && V();
    }, N = (F) => {
      F.keyCode === K.ESCAPE && (s.value = !1);
    }, S = () => {
      r.value.pause();
    }, J = () => {
      s.value && r.value.resume();
    };
    return um(d, (F) => {
      F ? W3(() => {
        h === !1 ? s.value = F : h(u, s);
      }) : w === !1 ? s.value = F : w(u);
    }, { immediate: !0 }), um(s, (F) => {
      F ? (a.value = !0, r.value = U(() => {
        s.value = !1;
      }, t.timeout)) : (o.emit("update:modelValue", !1), S());
    }), {
      hideTimeout: r,
      contentShow: a,
      internalValue: s,
      id: u,
      incomingValue: d,
      closed: R,
      keyPressed: N,
      stopTimer: S,
      resumeTimer: J
    };
  }
}), _3 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, O3 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, Q3 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, z3 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function G3(t, o, r, a, s, u) {
  return t.modelValue || t.contentShow ? (dm(), fm("div", _3, [
    Rc("div", {
      class: C3(["feather-snackbar", {
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
      Rc("div", O3, [
        t.contentShow ? (dm(), fm("div", Q3, [
          hm(t.$slots, "default", {}, void 0, !0)
        ])) : pm("", !0)
      ]),
      Rc("div", z3, [
        hm(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : pm("", !0);
}
var zw = /* @__PURE__ */ x3(D3, [["render", G3], ["__scopeId", "data-v-5cf64a62"]]);
const Y3 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
Qw({
  props: Y3,
  setup() {
    let t, o = [];
    const r = () => {
      t && (t.val.value = !0);
    }, a = (d, h) => {
      const w = { id: d, val: h };
      t ? o.push(w) : (t = w, r());
    }, s = (d) => {
      (t == null ? void 0 : t.id) === d ? t.val.value = !1 : o = o.filter((h) => h.id != d);
    }, u = () => {
      o.length ? (t = o.shift(), r()) : t = void 0;
    };
    return Nc("queueSnackbar", a), Nc("unqueueSnackbar", s), Nc("nextSnackbar", u), {
      curr: t,
      queue: o,
      showSnackbar: r,
      queueSnackbar: a,
      shiftItem: u,
      unqueueSnackbar: s
    };
  }
});
const P3 = window.Vue.defineComponent, Ae = window.Vue.unref, it = window.Vue.createVNode, ii = window.Vue.createElementVNode, Jt = window.Vue.withCtx, us = window.Vue.createTextVNode, yc = window.Vue.openBlock, H3 = window.Vue.createBlock, mm = window.Vue.createCommentVNode, wm = window.Vue.createElementBlock, j3 = window.Vue.toDisplayString, X3 = window.Vue.pushScopeId, L3 = window.Vue.popScopeId, Vu = (t) => (X3("data-v-43e272da"), t = t(), L3(), t), $3 = { id: "cont" }, q3 = { class: "btns-navigation" }, K3 = /* @__PURE__ */ Vu(() => /* @__PURE__ */ ii("span", null, "Situation List", -1)), eI = /* @__PURE__ */ Vu(() => /* @__PURE__ */ ii("span", null, "Show Previous Situation ", -1)), tI = /* @__PURE__ */ Vu(() => /* @__PURE__ */ ii("span", null, "Show Next Situation", -1)), nI = {
  key: 0,
  class: "detail"
}, rI = /* @__PURE__ */ us("Details"), oI = /* @__PURE__ */ us("Metrics"), iI = /* @__PURE__ */ us("dismiss"), Go = window.Vue.ref, vm = window.Vue.watch, aI = window.Vue.onMounted, sI = window.VueRouter.useRouter, lI = window.VueRouter.useRoute, cI = /* @__PURE__ */ P3({
  __name: "SituationDetail",
  setup(t) {
    const o = sI(), r = lI(), a = parseInt(r.params.id), s = Go(a), u = hr(), d = vu();
    u.getSituation(s.value), u.situations.length || u.getSituations();
    const h = Go(), w = Go(), V = Go(
      u.filteredSituations.findIndex((S) => S === s.value)
    ), U = Go(!1);
    vm(
      () => u.situationDetail,
      () => {
        h.value = u.situationDetail;
      }
    ), aI(() => {
      var J;
      const S = ((J = document.getElementById("cont")) == null ? void 0 : J.getBoundingClientRect().width) || 1200;
      w.value = S - 90;
    });
    const R = () => {
      o.push({
        name: "situations"
      });
    }, N = (S) => {
      const J = V.value, F = u.filteredSituations[J + S];
      o.push({
        name: "situationDetail",
        params: {
          id: F
        }
      });
    };
    return vm(r, () => {
      s.value = parseInt(r.params.id), u.getSituation(s.value), V.value = u.filteredSituations.findIndex((S) => S == s.value);
    }), d.$subscribe((S, J) => {
      U.value = J.showError;
    }), (S, J) => (yc(), wm("div", $3, [
      ii("div", q3, [
        it(Ae(Je), {
          primary: "",
          onClick: J[0] || (J[0] = () => R())
        }, {
          default: Jt(() => [
            it(Ae(L), {
              icon: Ae(Ia),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            K3
          ]),
          _: 1
        }),
        ii("div", null, [
          it(Ae(Je), {
            disabled: !Ae(u).filteredSituations[V.value - 1],
            primary: "",
            onClick: J[1] || (J[1] = () => N(-1))
          }, {
            default: Jt(() => [
              it(Ae(L), {
                icon: Ae(Ia),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              eI
            ]),
            _: 1
          }, 8, ["disabled"]),
          it(Ae(Je), {
            disabled: !Ae(u).filteredSituations[V.value + 1],
            primary: "",
            onClick: J[2] || (J[2] = () => N(1))
          }, {
            default: Jt(() => [
              tI,
              it(Ae(L), {
                icon: Ae(Ia),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      h.value ? (yc(), wm("div", nI, [
        it(Ae(KA), null, {
          tabs: Jt(() => [
            it(Ae(Vp), null, {
              default: Jt(() => [
                rI
              ]),
              _: 1
            }),
            it(Ae(Vp), null, {
              default: Jt(() => [
                oI
              ]),
              _: 1
            })
          ]),
          default: Jt(() => [
            it(Ae(Tp), { class: "panel" }, {
              default: Jt(() => [
                it(Mx, { "situation-info": h.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            it(Ae(Tp), { class: "panel" }, {
              default: Jt(() => [
                w.value ? (yc(), H3(N3, {
                  key: 0,
                  situation: h.value,
                  width: w.value
                }, null, 8, ["situation", "width"])) : mm("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : mm("", !0),
      it(Ae(zw), {
        modelValue: U.value,
        "onUpdate:modelValue": J[4] || (J[4] = (F) => U.value = F),
        center: "",
        error: ""
      }, {
        button: Jt(() => [
          it(Ae(Je), {
            onClick: J[3] || (J[3] = (F) => U.value = !1),
            text: ""
          }, {
            default: Jt(() => [
              iI
            ]),
            _: 1
          })
        ]),
        default: Jt(() => [
          us(j3(Ae(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const uI = /* @__PURE__ */ Ue(cI, [["__scopeId", "data-v-43e272da"]]), dI = window.Vue.defineComponent, ke = window.Vue.unref, Et = window.Vue.createVNode, Pe = window.Vue.createElementVNode, Yr = window.Vue.withCtx, Ea = window.Vue.toDisplayString, Tu = window.Vue.createTextVNode, kc = window.Vue.normalizeClass, Yo = window.Vue.openBlock, Po = window.Vue.createElementBlock, Vm = window.Vue.createCommentVNode, fI = window.Vue.renderList, hI = window.Vue.Fragment, pI = window.Vue.pushScopeId, mI = window.Vue.popScopeId, Ti = (t) => (pI("data-v-3fd69891"), t = t(), mI(), t), wI = { class: "container" }, vI = /* @__PURE__ */ Ti(() => /* @__PURE__ */ Pe("span", null, "Situation List", -1)), VI = /* @__PURE__ */ Ti(() => /* @__PURE__ */ Pe("h2", null, "New Situation", -1)), TI = { class: "form" }, gI = { class: "fields" }, UI = /* @__PURE__ */ Tu(" Total alarms added: "), RI = { class: "total" }, NI = {
  key: 0,
  class: "errorList"
}, yI = { class: "footer" }, kI = /* @__PURE__ */ Ti(() => /* @__PURE__ */ Pe("span", null, "Clear", -1)), MI = /* @__PURE__ */ Ti(() => /* @__PURE__ */ Pe("span", null, "Add Situation", -1)), ZI = { class: "alarm-column" }, bI = /* @__PURE__ */ Ti(() => /* @__PURE__ */ Pe("h4", null, "Add Unassociated Alarms", -1)), JI = {
  key: 0,
  class: "alarms"
}, EI = { class: "alarmInfo" }, SI = { class: "alarm-title" }, AI = { class: "description" }, FI = /* @__PURE__ */ Tu(" Error on creating new situation :( "), WI = /* @__PURE__ */ Tu("dismiss"), CI = window.VueRouter.useRouter, Bn = window.Vue.ref, xI = window.Vue.watch, BI = /* @__PURE__ */ dI({
  __name: "AddSituation",
  setup(t) {
    const o = CI(), r = hr(), a = Bn(), s = Bn(""), u = Bn(), d = Bn(""), h = Bn([]), w = Bn(!1), V = Bn(), U = Bn(r.unassignedAlarms);
    U.value.length || r.getUnassignedAlarms(), xI(
      () => r.unassignedAlarms,
      () => {
        U.value = r.unassignedAlarms;
      }
    );
    const R = () => {
      o.push({
        name: "situations"
      });
    }, N = (A) => {
      A.includes("all") ? U.value = r.unassignedAlarms : U.value = r.unassignedAlarms.filter(
        (C) => A.includes(C.severity)
      );
    }, S = (A) => {
      w.value = !1, me.exports.includes(h.value, A) ? me.exports.remove(h.value, (C) => C === A) : h.value.push(A);
    }, J = () => {
      const A = "This field should not be empty";
      let C = !0;
      return a.value || (s.value = A, C = !1), u.value || (d.value = A, C = !1), h.value.length < 2 && (w.value = !0, C = !1), C;
    }, F = async () => {
      if (J()) {
        const A = {
          alarmIdList: h.value,
          diagnosticText: u.value,
          description: a.value
        };
        await Ny(A) ? o.push({
          name: "situations"
        }) : V.value = !0;
      }
    }, B = () => {
      a.value = "", u.value = "", h.value = [], U.value = r.unassignedAlarms;
    };
    return (A, C) => (Yo(), Po("div", wI, [
      Et(ke(Je), {
        primary: "",
        onClick: C[0] || (C[0] = () => R()),
        class: "back-btn"
      }, {
        default: Yr(() => [
          Et(ke(L), {
            icon: ke(Ia),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          vI
        ]),
        _: 1
      }),
      VI,
      Pe("div", TI, [
        Pe("div", gI, [
          Et(ke(Ic), {
            modelValue: a.value,
            "onUpdate:modelValue": C[1] || (C[1] = (W) => a.value = W),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          Et(ke(Ic), {
            modelValue: u.value,
            "onUpdate:modelValue": C[2] || (C[2] = (W) => u.value = W),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          Pe("div", null, [
            Pe("div", {
              class: kc(["totalAlarms", { errorList: w.value }])
            }, [
              UI,
              Pe("span", RI, Ea(ke(h).length), 1)
            ], 2),
            w.value ? (Yo(), Po("div", NI, " It is required to add at least 2 alarms ")) : Vm("", !0)
          ]),
          Pe("div", yI, [
            Et(ke(Je), {
              class: "btn",
              primary: "",
              onClick: B
            }, {
              default: Yr(() => [
                Et(ke(L), {
                  icon: ke(ci),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                kI
              ]),
              _: 1
            }),
            Et(ke(Je), {
              class: "btn",
              primary: "",
              onClick: F
            }, {
              default: Yr(() => [
                Et(ke(L), {
                  icon: ke(pw),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                MI
              ]),
              _: 1
            })
          ])
        ]),
        Pe("div", ZI, [
          bI,
          Et(ru, {
            alarms: ke(r).unassignedAlarms,
            onSelectedSeverities: N
          }, null, 8, ["alarms"]),
          U.value ? (Yo(), Po("div", JI, [
            (Yo(!0), Po(hI, null, fI(U.value, (W) => (Yo(), Po("div", {
              key: W.id,
              class: kc(["alarm", { selected: ke(me.exports.includes)(ke(h), W.id) }])
            }, [
              Pe("div", EI, [
                Pe("div", {
                  class: kc(["triangle", [`${W.severity.toLowerCase()}`]])
                }, null, 2),
                Et(ke(ls), {
                  modelValue: ke(me.exports.includes)(ke(h), W.id),
                  label: "selected",
                  "onUpdate:modelValue": () => S(W.id)
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                Pe("div", SI, Ea(W.nodeLabel) + " - " + Ea(W.id), 1)
              ]),
              Pe("div", AI, Ea(ke(pM)(W.description, 300)), 1)
            ], 2))), 128))
          ])) : Vm("", !0)
        ])
      ]),
      Et(ke(zw), {
        modelValue: V.value,
        "onUpdate:modelValue": C[4] || (C[4] = (W) => V.value = W),
        center: "",
        error: ""
      }, {
        button: Yr(() => [
          Et(ke(Je), {
            onClick: C[3] || (C[3] = (W) => V.value = !1),
            text: ""
          }, {
            default: Yr(() => [
              WI
            ]),
            _: 1
          })
        ]),
        default: Yr(() => [
          FI
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const II = /* @__PURE__ */ Ue(BI, [["__scopeId", "data-v-3fd69891"]]);
var DI = Object.defineProperty, _I = Object.defineProperties, OI = Object.getOwnPropertyDescriptors, Tm = Object.getOwnPropertySymbols, QI = Object.prototype.hasOwnProperty, zI = Object.prototype.propertyIsEnumerable, gm = (t, o, r) => o in t ? DI(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Da = (t, o) => {
  for (var r in o || (o = {}))
    QI.call(o, r) && gm(t, r, o[r]);
  if (Tm)
    for (var r of Tm(o))
      zI.call(o, r) && gm(t, r, o[r]);
  return t;
}, Gw = (t, o) => _I(t, OI(o));
const Yw = window.Vue.defineComponent, GI = window.Vue.ref, ei = window.Vue.computed, YI = window.Vue.reactive, Um = window.Vue.watch, Mc = window.Vue.inject, Pw = window.Vue.resolveComponent, Qc = window.Vue.openBlock, Hw = window.Vue.createElementBlock, On = window.Vue.createElementVNode, PI = window.Vue.createBlock, HI = window.Vue.createCommentVNode, jw = window.Vue.renderSlot, jI = window.Vue.pushScopeId, XI = window.Vue.popScopeId, Zc = window.Vue.toRef, Rm = window.Vue.mergeProps, LI = window.Vue.toDisplayString, $I = window.Vue.createVNode;
var Xw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const qI = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, KI = Yw({
  props: qI,
  setup(t) {
    const o = GI(), r = () => {
      o.value.focus();
    }, a = ei(() => ae("feather-radio-button")), s = YI({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), u = ei(() => ae("radio-label-id")), d = ei(() => s.first || s.checked ? 0 : -1);
    Um(() => t.disabled, (R) => {
      s.disabled = R;
    }, { immediate: !0 }), Um(() => t.value, (R) => {
      s.value = R;
    }, { immediate: !0 });
    const h = Mc("register", (R) => {
    }), w = Mc("blur", (R) => {
    }), V = Mc("select", (R) => {
    });
    return h(s), {
      labelId: u,
      tabindex: d,
      vm: s,
      blur: w,
      click: () => {
        V(s);
      },
      input: o,
      id: a
    };
  },
  components: {
    FeatherRipple: dr
  }
}), eD = (t) => (jI("data-v-24790cf0"), t = t(), XI(), t), tD = { class: "layout-container" }, nD = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], rD = { class: "radio hover focus" }, oD = /* @__PURE__ */ eD(() => /* @__PURE__ */ On("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ On("svg", { class: "dot" }, [
    /* @__PURE__ */ On("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), iD = ["id"];
function aD(t, o, r, a, s, u) {
  const d = Pw("feather-ripple");
  return Qc(), Hw("div", tD, [
    On("div", {
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
      On("div", rD, [
        oD,
        t.vm.disabled ? HI("", !0) : (Qc(), PI(d, {
          key: 0,
          center: ""
        }))
      ]),
      On("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        jw(t.$slots, "default", {}, void 0, !0)
      ], 8, iD)
    ], 40, nD)
  ]);
}
var La = /* @__PURE__ */ Xw(KI, [["render", aD], ["__scopeId", "data-v-24790cf0"]]);
const sD = Gw(Da({}, pi), {
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
}), lD = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, cD = Yw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: sD,
  emits: lD,
  setup(t, o) {
    mi(t);
    const r = Zc(t, "error"), a = Zc(t, "modelValue"), s = ei(() => ae("feather-input-description")), u = ei(() => {
      const d = Gw(Da({}, o.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Da(Da({
      descriptionId: s,
      attrs: u
    }, lw(a, o.emit, t.label, t.schema, Zc(t, "error"))), hi(o.attrs));
  },
  components: {
    InputSubText: di
  }
}), uD = ["for"], dD = ["id"];
function fD(t, o, r, a, s, u) {
  const d = Pw("InputSubText");
  return Qc(), Hw("div", Rm(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    On("label", {
      for: t.groupId,
      class: "group-label"
    }, LI(t.label), 9, uD),
    On("div", Rm(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      jw(t.$slots, "default", {}, void 0, !0)
    ], 16, dD),
    $I(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Lw = /* @__PURE__ */ Xw(cD, [["render", fD], ["__scopeId", "data-v-6775aeb9"]]);
const hD = window.Vue.openBlock, pD = window.Vue.createElementBlock, mD = window.Vue.createStaticVNode;
var wD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const vD = {}, VD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TD = /* @__PURE__ */ mD('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), gD = [
  TD
];
function UD(t, o) {
  return hD(), pD("svg", VD, gD);
}
var RD = /* @__PURE__ */ wD(vD, [["render", UD]]);
const ND = window.Vue.openBlock, yD = window.Vue.createElementBlock, kD = window.Vue.createStaticVNode;
var MD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const ZD = {}, bD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JD = /* @__PURE__ */ kD('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), ED = [
  JD
];
function SD(t, o) {
  return ND(), yD("svg", bD, ED);
}
var AD = /* @__PURE__ */ MD(ZD, [["render", SD]]);
const FD = window.Vue.openBlock, WD = window.Vue.createElementBlock, CD = window.Vue.createElementVNode;
var xD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const BD = {}, ID = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DD = /* @__PURE__ */ CD("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), _D = [
  DD
];
function OD(t, o) {
  return FD(), WD("svg", ID, _D);
}
var QD = /* @__PURE__ */ xD(BD, [["render", OD]]);
const zD = window.Vue.openBlock, GD = window.Vue.createElementBlock, YD = window.Vue.createStaticVNode;
var PD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const HD = {}, jD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XD = /* @__PURE__ */ YD('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), LD = [
  XD
];
function $D(t, o) {
  return zD(), GD("svg", jD, LD);
}
var qD = /* @__PURE__ */ PD(HD, [["render", $D]]);
const KD = window.Vue.openBlock, e_ = window.Vue.createElementBlock, t_ = window.Vue.createElementVNode;
var n_ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const r_ = {}, o_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, i_ = /* @__PURE__ */ t_("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), a_ = [
  i_
];
function s_(t, o) {
  return KD(), e_("svg", o_, a_);
}
var l_ = /* @__PURE__ */ n_(r_, [["render", s_]]);
const gu = () => window.VRouter || Uu, c_ = window.Vue.defineComponent, Me = window.Vue.createElementVNode, ai = window.Vue.createTextVNode, Ke = window.Vue.unref, wn = window.Vue.createVNode, Sa = window.Vue.withCtx, Nm = window.Vue.openBlock, ym = window.Vue.createElementBlock, u_ = window.Vue.createCommentVNode, d_ = window.Vue.pushScopeId, f_ = window.Vue.popScopeId, Yt = (t) => (d_("data-v-b4b3bdcf"), t = t(), f_(), t), h_ = { class: "container" }, p_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("div", { class: "title" }, "ALEC", -1)), m_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("div", { class: "description" }, [
  /* @__PURE__ */ ai(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Me("br"),
  /* @__PURE__ */ Me("strong", null, "Our goal"),
  /* @__PURE__ */ ai(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), w_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("h3", null, "Key Benefits:", -1)), v_ = { class: "list" }, V_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), T_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("span", null, "Assist in root cause analysis.", -1)), g_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), U_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("span", null, "Easy configuration.", -1)), R_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), N_ = {
  key: 0,
  class: "optin"
}, y_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("h3", null, "Enable ALEC for more precise results:", -1)), k_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), M_ = { class: "choices" }, Z_ = /* @__PURE__ */ Yt(() => /* @__PURE__ */ Me("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), b_ = /* @__PURE__ */ ai("Yes"), J_ = /* @__PURE__ */ ai("No"), E_ = /* @__PURE__ */ ai(" Continue "), S_ = window.Vue.ref, A_ = /* @__PURE__ */ c_({
  __name: "WelcomePage",
  setup(t) {
    const o = Vi(), r = gu(), a = S_(!0), s = () => {
      const u = Boolean(a.value);
      o.savePermission(u), r.push({ name: "configuration" });
    };
    return (u, d) => (Nm(), ym("div", h_, [
      p_,
      m_,
      Me("div", null, [
        w_,
        Me("div", v_, [
          Me("div", null, [
            wn(Ke(L), {
              icon: Ke(qD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            V_
          ]),
          Me("div", null, [
            wn(Ke(L), {
              icon: Ke(QD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            T_
          ]),
          Me("div", null, [
            wn(Ke(L), {
              icon: Ke(l_),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            g_
          ]),
          Me("div", null, [
            wn(Ke(L), {
              icon: Ke(RD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            U_
          ]),
          Me("div", null, [
            wn(Ke(L), {
              icon: Ke(AD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            R_
          ])
        ])
      ]),
      Ke(o).isAdmin ? (Nm(), ym("div", N_, [
        y_,
        k_,
        Me("div", M_, [
          Z_,
          wn(Ke(Lw), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            label: ""
          }, {
            default: Sa(() => [
              wn(Ke(La), { value: !0 }, {
                default: Sa(() => [
                  b_
                ]),
                _: 1
              }),
              wn(Ke(La), { value: !1 }, {
                default: Sa(() => [
                  J_
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : u_("", !0),
      wn(Ke(Je), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: Sa(() => [
          E_
        ]),
        _: 1
      })
    ]));
  }
});
const F_ = /* @__PURE__ */ Ue(A_, [["__scopeId", "data-v-b4b3bdcf"]]), W_ = window.Vue.defineComponent, C_ = window.Vue.createElementVNode, x_ = window.Vue.createTextVNode, B_ = window.Vue.unref, I_ = window.Vue.withCtx, D_ = window.Vue.createVNode, __ = window.Vue.Fragment, O_ = window.Vue.openBlock, Q_ = window.Vue.createElementBlock, z_ = window.Vue.pushScopeId, G_ = window.Vue.popScopeId, Y_ = (t) => (z_("data-v-bcb7dcc6"), t = t(), G_(), t), P_ = /* @__PURE__ */ Y_(() => /* @__PURE__ */ C_("div", { class: "main" }, "Something bad is happening...", -1)), H_ = /* @__PURE__ */ x_(" Reload "), j_ = /* @__PURE__ */ W_({
  __name: "ErrorPage",
  setup(t) {
    const o = gu(), r = () => {
      o.push({ name: "situations" });
    };
    return (a, s) => (O_(), Q_(__, null, [
      P_,
      D_(B_(Je), {
        primary: "",
        onClick: r
      }, {
        default: I_(() => [
          H_
        ]),
        _: 1
      })
    ], 64));
  }
});
const X_ = /* @__PURE__ */ Ue(j_, [["__scopeId", "data-v-bcb7dcc6"]]), L_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", $_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", q_ = window.Vue.defineComponent, xe = window.Vue.createElementVNode, zc = window.Vue.createTextVNode, In = window.Vue.unref, Ho = window.Vue.withCtx, jo = window.Vue.createVNode, K_ = window.Vue.openBlock, eO = window.Vue.createElementBlock, tO = window.Vue.pushScopeId, nO = window.Vue.popScopeId, mr = (t) => (tO("data-v-9a5b5f4e"), t = t(), nO(), t), rO = { class: "container" }, oO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("h2", null, "Configuration", -1)), iO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("p", null, [
  /* @__PURE__ */ zc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ xe("br"),
  /* @__PURE__ */ zc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ xe("strong", null, [
    /* @__PURE__ */ xe("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), aO = { class: "radio-content" }, sO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("strong", { class: "title" }, "Clustering", -1)), lO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), cO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("img", {
  class: "img",
  src: L_
}, null, -1)), uO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("div", { class: "hellinger" }, [
  /* @__PURE__ */ xe("strong", null, "With hellinger distance"),
  /* @__PURE__ */ xe("br"),
  /* @__PURE__ */ xe("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), dO = /* @__PURE__ */ mr(() => /* @__PURE__ */ xe("div", { class: "radio-content" }, [
  /* @__PURE__ */ xe("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ xe("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ xe("img", {
    class: "img img2",
    src: $_
  })
], -1)), fO = /* @__PURE__ */ zc(" Continue "), km = window.Vue.ref, hO = /* @__PURE__ */ q_({
  __name: "ConfigurationPage",
  setup(t) {
    const o = Vi(), r = gu(), a = km(!1), s = km(Vt.ENGINE_DBSCAN), u = () => {
      Hm(o.allowSave), gy(s.value, a.value), r.push({ name: "situations" });
    };
    return (d, h) => (K_(), eO("div", rO, [
      oO,
      iO,
      xe("div", null, [
        jo(In(Lw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": h[1] || (h[1] = (w) => s.value = w)
        }, {
          default: Ho(() => [
            jo(In(La), {
              class: "radio",
              value: In(Vt).ENGINE_DBSCAN
            }, {
              default: Ho(() => [
                xe("div", aO, [
                  sO,
                  lO,
                  cO,
                  jo(In(ls), {
                    modelValue: a.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
                    disabled: s.value !== In(Vt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ho(() => [
                      uO
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            jo(In(La), {
              class: "radio",
              value: In(Vt).ENGINE_DEEP_LEARNING
            }, {
              default: Ho(() => [
                dO
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      jo(In(Je), {
        primary: "",
        class: "btn",
        onClick: h[2] || (h[2] = () => u())
      }, {
        default: Ho(() => [
          fO
        ]),
        _: 1
      })
    ]));
  }
});
const pO = /* @__PURE__ */ Ue(hO, [["__scopeId", "data-v-9a5b5f4e"]]), mO = window.VueRouter.createRouter, wO = window.VueRouter.createWebHistory, bc = async () => {
  const t = window.VRouter || Uu, o = Vi();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, $w = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || Uu, r = Vi();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => bc(),
    component: F_
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => bc(),
    component: pO
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => bc(),
    component: vA
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: uI
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: II
  },
  {
    path: "/error",
    name: "error",
    component: X_
  }
], Jc = window.VRouter;
if (Jc) {
  const t = "Plugin-alecUiExtension", o = Jc.hasRoute(t) ? t : "Plugin";
  for (const r of $w) {
    const { path: a, name: s, component: u, beforeEnter: d } = r;
    Jc.addRoute(o, {
      path: a.slice(1),
      name: s,
      component: u,
      beforeEnter: d
    });
  }
}
const Uu = mO({
  history: wO(),
  routes: $w
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = $R;
