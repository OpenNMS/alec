const Oe = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
}, qw = {}, Kw = window.Vue.resolveComponent, $w = window.Vue.createVNode, eU = window.Vue.openBlock, tU = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const nU = { class: "main" };
function rU(n, a) {
  const r = Kw("router-view");
  return eU(), tU("div", nU, [
    $w(r)
  ]);
}
const iU = /* @__PURE__ */ Oe(qw, [["render", rU], ["__scopeId", "data-v-5d32d140"]]), aU = window.Vue.defineComponent, oU = window.Vue.openBlock, sU = window.Vue.createBlock, lU = /* @__PURE__ */ aU({
  __name: "App",
  setup(n) {
    return (a, r) => (oU(), sU(iU));
  }
});
var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cU(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var nh = { exports: {} }, nl = { exports: {} }, rh = function(a, r) {
  return function() {
    for (var l = new Array(arguments.length), f = 0; f < l.length; f++)
      l[f] = arguments[f];
    return a.apply(r, l);
  };
}, uU = rh, rl = Object.prototype.toString, il = function(n) {
  return function(a) {
    var r = rl.call(a);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function An(n) {
  return n = n.toLowerCase(), function(r) {
    return il(r) === n;
  };
}
function al(n) {
  return Array.isArray(n);
}
function Ra(n) {
  return typeof n > "u";
}
function dU(n) {
  return n !== null && !Ra(n) && n.constructor !== null && !Ra(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var ih = An("ArrayBuffer");
function fU(n) {
  var a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && ih(n.buffer), a;
}
function hU(n) {
  return typeof n == "string";
}
function pU(n) {
  return typeof n == "number";
}
function ah(n) {
  return n !== null && typeof n == "object";
}
function pa(n) {
  if (il(n) !== "object")
    return !1;
  var a = Object.getPrototypeOf(n);
  return a === null || a === Object.prototype;
}
var mU = An("Date"), VU = An("File"), TU = An("Blob"), vU = An("FileList");
function ol(n) {
  return rl.call(n) === "[object Function]";
}
function wU(n) {
  return ah(n) && ol(n.pipe);
}
function UU(n) {
  var a = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || rl.call(n) === a || ol(n.toString) && n.toString() === a);
}
var RU = An("URLSearchParams");
function NU(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function gU() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function sl(n, a) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), al(n))
      for (var r = 0, s = n.length; r < s; r++)
        a.call(null, n[r], r, n);
    else
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && a.call(null, n[l], l, n);
}
function Ys() {
  var n = {};
  function a(l, f) {
    pa(n[f]) && pa(l) ? n[f] = Ys(n[f], l) : pa(l) ? n[f] = Ys({}, l) : al(l) ? n[f] = l.slice() : n[f] = l;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    sl(arguments[r], a);
  return n;
}
function MU(n, a, r) {
  return sl(a, function(l, f) {
    r && typeof l == "function" ? n[f] = uU(l, r) : n[f] = l;
  }), n;
}
function ZU(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function JU(n, a, r, s) {
  n.prototype = Object.create(a.prototype, s), n.prototype.constructor = n, r && Object.assign(n.prototype, r);
}
function kU(n, a, r) {
  var s, l, f, h = {};
  a = a || {};
  do {
    for (s = Object.getOwnPropertyNames(n), l = s.length; l-- > 0; )
      f = s[l], h[f] || (a[f] = n[f], h[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!r || r(n, a)) && n !== Object.prototype);
  return a;
}
function yU(n, a, r) {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= a.length;
  var s = n.indexOf(a, r);
  return s !== -1 && s === r;
}
function bU(n) {
  if (!n)
    return null;
  var a = n.length;
  if (Ra(a))
    return null;
  for (var r = new Array(a); a-- > 0; )
    r[a] = n[a];
  return r;
}
var EU = function(n) {
  return function(a) {
    return n && a instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), We = {
  isArray: al,
  isArrayBuffer: ih,
  isBuffer: dU,
  isFormData: UU,
  isArrayBufferView: fU,
  isString: hU,
  isNumber: pU,
  isObject: ah,
  isPlainObject: pa,
  isUndefined: Ra,
  isDate: mU,
  isFile: VU,
  isBlob: TU,
  isFunction: ol,
  isStream: wU,
  isURLSearchParams: RU,
  isStandardBrowserEnv: gU,
  forEach: sl,
  merge: Ys,
  extend: MU,
  trim: NU,
  stripBOM: ZU,
  inherits: JU,
  toFlatObject: kU,
  kindOf: il,
  kindOfTest: An,
  endsWith: yU,
  toArray: bU,
  isTypedArray: EU,
  isFileList: vU
}, Kn = We;
function id(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var oh = function(a, r, s) {
  if (!r)
    return a;
  var l;
  if (s)
    l = s(r);
  else if (Kn.isURLSearchParams(r))
    l = r.toString();
  else {
    var f = [];
    Kn.forEach(r, function(T, N) {
      T === null || typeof T > "u" || (Kn.isArray(T) ? N = N + "[]" : T = [T], Kn.forEach(T, function(b) {
        Kn.isDate(b) ? b = b.toISOString() : Kn.isObject(b) && (b = JSON.stringify(b)), f.push(id(N) + "=" + id(b));
      }));
    }), l = f.join("&");
  }
  if (l) {
    var h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return a;
}, FU = We;
function Aa() {
  this.handlers = [];
}
Aa.prototype.use = function(a, r, s) {
  return this.handlers.push({
    fulfilled: a,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Aa.prototype.eject = function(a) {
  this.handlers[a] && (this.handlers[a] = null);
};
Aa.prototype.forEach = function(a) {
  FU.forEach(this.handlers, function(s) {
    s !== null && a(s);
  });
};
var SU = Aa, WU = We, AU = function(a, r) {
  WU.forEach(a, function(l, f) {
    f !== r && f.toUpperCase() === r.toUpperCase() && (a[r] = l, delete a[f]);
  });
}, sh = We;
function dr(n, a, r, s, l) {
  Error.call(this), this.message = n, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), s && (this.request = s), l && (this.response = l);
}
sh.inherits(dr, Error, {
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
var lh = dr.prototype, ch = {};
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
].forEach(function(n) {
  ch[n] = { value: n };
});
Object.defineProperties(dr, ch);
Object.defineProperty(lh, "isAxiosError", { value: !0 });
dr.from = function(n, a, r, s, l, f) {
  var h = Object.create(lh);
  return sh.toFlatObject(n, h, function(T) {
    return T !== Error.prototype;
  }), dr.call(h, n.message, a, r, s, l), h.name = n.name, f && Object.assign(h, f), h;
};
var pr = dr, uh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nt = We;
function xU(n, a) {
  a = a || new FormData();
  var r = [];
  function s(f) {
    return f === null ? "" : Nt.isDate(f) ? f.toISOString() : Nt.isArrayBuffer(f) || Nt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, h) {
    if (Nt.isPlainObject(f) || Nt.isArray(f)) {
      if (r.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h);
      r.push(f), Nt.forEach(f, function(T, N) {
        if (!Nt.isUndefined(T)) {
          var g = h ? h + "." + N : N, b;
          if (T && !h && typeof T == "object") {
            if (Nt.endsWith(N, "{}"))
              T = JSON.stringify(T);
            else if (Nt.endsWith(N, "[]") && (b = Nt.toArray(T))) {
              b.forEach(function(y) {
                !Nt.isUndefined(y) && a.append(g, s(y));
              });
              return;
            }
          }
          l(T, g);
        }
      }), r.pop();
    } else
      a.append(h, s(f));
  }
  return l(n), a;
}
var dh = xU, ss, ad;
function BU() {
  if (ad)
    return ss;
  ad = 1;
  var n = pr;
  return ss = function(r, s, l) {
    var f = l.config.validateStatus;
    !l.status || !f || f(l.status) ? r(l) : s(new n(
      "Request failed with status code " + l.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, ss;
}
var ls, od;
function CU() {
  if (od)
    return ls;
  od = 1;
  var n = We;
  return ls = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, l, f, h, p, T) {
        var N = [];
        N.push(s + "=" + encodeURIComponent(l)), n.isNumber(f) && N.push("expires=" + new Date(f).toGMTString()), n.isString(h) && N.push("path=" + h), n.isString(p) && N.push("domain=" + p), T === !0 && N.push("secure"), document.cookie = N.join("; ");
      },
      read: function(s) {
        var l = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return l ? decodeURIComponent(l[3]) : null;
      },
      remove: function(s) {
        this.write(s, "", Date.now() - 864e5);
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
  }(), ls;
}
var DU = function(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}, QU = function(a, r) {
  return r ? a.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : a;
}, OU = DU, zU = QU, fh = function(a, r) {
  return a && !OU(r) ? zU(a, r) : r;
}, cs, sd;
function GU() {
  if (sd)
    return cs;
  sd = 1;
  var n = We, a = [
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
  return cs = function(s) {
    var l = {}, f, h, p;
    return s && n.forEach(s.split(`
`), function(N) {
      if (p = N.indexOf(":"), f = n.trim(N.substr(0, p)).toLowerCase(), h = n.trim(N.substr(p + 1)), f) {
        if (l[f] && a.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? l[f] = (l[f] ? l[f] : []).concat([h]) : l[f] = l[f] ? l[f] + ", " + h : h;
      }
    }), l;
  }, cs;
}
var us, ld;
function YU() {
  if (ld)
    return us;
  ld = 1;
  var n = We;
  return us = n.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), l;
    function f(h) {
      var p = h;
      return r && (s.setAttribute("href", p), p = s.href), s.setAttribute("href", p), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return l = f(window.location.href), function(p) {
      var T = n.isString(p) ? f(p) : p;
      return T.protocol === l.protocol && T.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), us;
}
var ds, cd;
function xa() {
  if (cd)
    return ds;
  cd = 1;
  var n = pr, a = We;
  function r(s) {
    n.call(this, s == null ? "canceled" : s, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return a.inherits(r, n, {
    __CANCEL__: !0
  }), ds = r, ds;
}
var fs, ud;
function IU() {
  return ud || (ud = 1, fs = function(a) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return r && r[1] || "";
  }), fs;
}
var hs, dd;
function fd() {
  if (dd)
    return hs;
  dd = 1;
  var n = We, a = BU(), r = CU(), s = oh, l = fh, f = GU(), h = YU(), p = uh, T = pr, N = xa(), g = IU();
  return hs = function(y) {
    return new Promise(function(F, C) {
      var D = y.data, A = y.headers, Q = y.responseType, W;
      function H() {
        y.cancelToken && y.cancelToken.unsubscribe(W), y.signal && y.signal.removeEventListener("abort", W);
      }
      n.isFormData(D) && n.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var _ = y.auth.username || "", $ = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        A.Authorization = "Basic " + btoa(_ + ":" + $);
      }
      var L = l(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), s(L, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function xe() {
        if (!!k) {
          var fe = "getAllResponseHeaders" in k ? f(k.getAllResponseHeaders()) : null, me = !Q || Q === "text" || Q === "json" ? k.responseText : k.response, Ue = {
            data: me,
            status: k.status,
            statusText: k.statusText,
            headers: fe,
            config: y,
            request: k
          };
          a(function(ye) {
            F(ye), H();
          }, function(ye) {
            C(ye), H();
          }, Ue), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = xe : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(xe);
      }, k.onabort = function() {
        !k || (C(new T("Request aborted", T.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        C(new T("Network Error", T.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var me = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ue = y.transitional || p;
        y.timeoutErrorMessage && (me = y.timeoutErrorMessage), C(new T(
          me,
          Ue.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
          y,
          k
        )), k = null;
      }, n.isStandardBrowserEnv()) {
        var je = (y.withCredentials || h(L)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        je && (A[y.xsrfHeaderName] = je);
      }
      "setRequestHeader" in k && n.forEach(A, function(me, Ue) {
        typeof D > "u" && Ue.toLowerCase() === "content-type" ? delete A[Ue] : k.setRequestHeader(Ue, me);
      }), n.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), Q && Q !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (W = function(fe) {
        !k || (C(!fe || fe && fe.type ? new N() : fe), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(W), y.signal && (y.signal.aborted ? W() : y.signal.addEventListener("abort", W))), D || (D = null);
      var de = g(L);
      if (de && ["http", "https", "file"].indexOf(de) === -1) {
        C(new T("Unsupported protocol " + de + ":", T.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(D);
    });
  }, hs;
}
var ps, hd;
function HU() {
  return hd || (hd = 1, ps = null), ps;
}
var Ze = We, pd = AU, md = pr, PU = uh, jU = dh, XU = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Vd(n, a) {
  !Ze.isUndefined(n) && Ze.isUndefined(n["Content-Type"]) && (n["Content-Type"] = a);
}
function _U() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = fd()), n;
}
function LU(n, a, r) {
  if (Ze.isString(n))
    try {
      return (a || JSON.parse)(n), Ze.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(n);
}
var Ba = {
  transitional: PU,
  adapter: _U(),
  transformRequest: [function(a, r) {
    if (pd(r, "Accept"), pd(r, "Content-Type"), Ze.isFormData(a) || Ze.isArrayBuffer(a) || Ze.isBuffer(a) || Ze.isStream(a) || Ze.isFile(a) || Ze.isBlob(a))
      return a;
    if (Ze.isArrayBufferView(a))
      return a.buffer;
    if (Ze.isURLSearchParams(a))
      return Vd(r, "application/x-www-form-urlencoded;charset=utf-8"), a.toString();
    var s = Ze.isObject(a), l = r && r["Content-Type"], f;
    if ((f = Ze.isFileList(a)) || s && l === "multipart/form-data") {
      var h = this.env && this.env.FormData;
      return jU(f ? { "files[]": a } : a, h && new h());
    } else if (s || l === "application/json")
      return Vd(r, "application/json"), LU(a);
    return a;
  }],
  transformResponse: [function(a) {
    var r = this.transitional || Ba.transitional, s = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, f = !s && this.responseType === "json";
    if (f || l && Ze.isString(a) && a.length)
      try {
        return JSON.parse(a);
      } catch (h) {
        if (f)
          throw h.name === "SyntaxError" ? md.from(h, md.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    return a;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: HU()
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Ze.forEach(["delete", "get", "head"], function(a) {
  Ba.headers[a] = {};
});
Ze.forEach(["post", "put", "patch"], function(a) {
  Ba.headers[a] = Ze.merge(XU);
});
var ll = Ba, qU = We, KU = ll, $U = function(a, r, s) {
  var l = this || KU;
  return qU.forEach(s, function(h) {
    a = h.call(l, a, r);
  }), a;
}, ms, Td;
function hh() {
  return Td || (Td = 1, ms = function(a) {
    return !!(a && a.__CANCEL__);
  }), ms;
}
var vd = We, Vs = $U, eR = hh(), tR = ll, nR = xa();
function Ts(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new nR();
}
var rR = function(a) {
  Ts(a), a.headers = a.headers || {}, a.data = Vs.call(
    a,
    a.data,
    a.headers,
    a.transformRequest
  ), a.headers = vd.merge(
    a.headers.common || {},
    a.headers[a.method] || {},
    a.headers
  ), vd.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete a.headers[l];
    }
  );
  var r = a.adapter || tR.adapter;
  return r(a).then(function(l) {
    return Ts(a), l.data = Vs.call(
      a,
      l.data,
      l.headers,
      a.transformResponse
    ), l;
  }, function(l) {
    return eR(l) || (Ts(a), l && l.response && (l.response.data = Vs.call(
      a,
      l.response.data,
      l.response.headers,
      a.transformResponse
    ))), Promise.reject(l);
  });
}, at = We, ph = function(a, r) {
  r = r || {};
  var s = {};
  function l(g, b) {
    return at.isPlainObject(g) && at.isPlainObject(b) ? at.merge(g, b) : at.isPlainObject(b) ? at.merge({}, b) : at.isArray(b) ? b.slice() : b;
  }
  function f(g) {
    if (at.isUndefined(r[g])) {
      if (!at.isUndefined(a[g]))
        return l(void 0, a[g]);
    } else
      return l(a[g], r[g]);
  }
  function h(g) {
    if (!at.isUndefined(r[g]))
      return l(void 0, r[g]);
  }
  function p(g) {
    if (at.isUndefined(r[g])) {
      if (!at.isUndefined(a[g]))
        return l(void 0, a[g]);
    } else
      return l(void 0, r[g]);
  }
  function T(g) {
    if (g in r)
      return l(a[g], r[g]);
    if (g in a)
      return l(void 0, a[g]);
  }
  var N = {
    url: h,
    method: h,
    data: h,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: T
  };
  return at.forEach(Object.keys(a).concat(Object.keys(r)), function(b) {
    var y = N[b] || f, B = y(b);
    at.isUndefined(B) && y !== T || (s[b] = B);
  }), s;
}, vs, wd;
function mh() {
  return wd || (wd = 1, vs = {
    version: "0.27.2"
  }), vs;
}
var iR = mh().version, cn = pr, cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, a) {
  cl[n] = function(s) {
    return typeof s === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
var Ud = {};
cl.transitional = function(a, r, s) {
  function l(f, h) {
    return "[Axios v" + iR + "] Transitional option '" + f + "'" + h + (s ? ". " + s : "");
  }
  return function(f, h, p) {
    if (a === !1)
      throw new cn(
        l(h, " has been removed" + (r ? " in " + r : "")),
        cn.ERR_DEPRECATED
      );
    return r && !Ud[h] && (Ud[h] = !0, console.warn(
      l(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), a ? a(f, h, p) : !0;
  };
};
function aR(n, a, r) {
  if (typeof n != "object")
    throw new cn("options must be an object", cn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(n), l = s.length; l-- > 0; ) {
    var f = s[l], h = a[f];
    if (h) {
      var p = n[f], T = p === void 0 || h(p, f, n);
      if (T !== !0)
        throw new cn("option " + f + " must be " + T, cn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new cn("Unknown option " + f, cn.ERR_BAD_OPTION);
  }
}
var oR = {
  assertOptions: aR,
  validators: cl
}, Vh = We, sR = oh, Rd = SU, Nd = rR, Ca = ph, lR = fh, Th = oR, $n = Th.validators;
function fr(n) {
  this.defaults = n, this.interceptors = {
    request: new Rd(),
    response: new Rd()
  };
}
fr.prototype.request = function(a, r) {
  typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = Ca(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Th.assertOptions(s, {
    silentJSONParsing: $n.transitional($n.boolean),
    forcedJSONParsing: $n.transitional($n.boolean),
    clarifyTimeoutError: $n.transitional($n.boolean)
  }, !1);
  var l = [], f = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (f = f && B.synchronous, l.unshift(B.fulfilled, B.rejected));
  });
  var h = [];
  this.interceptors.response.forEach(function(B) {
    h.push(B.fulfilled, B.rejected);
  });
  var p;
  if (!f) {
    var T = [Nd, void 0];
    for (Array.prototype.unshift.apply(T, l), T = T.concat(h), p = Promise.resolve(r); T.length; )
      p = p.then(T.shift(), T.shift());
    return p;
  }
  for (var N = r; l.length; ) {
    var g = l.shift(), b = l.shift();
    try {
      N = g(N);
    } catch (y) {
      b(y);
      break;
    }
  }
  try {
    p = Nd(N);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; h.length; )
    p = p.then(h.shift(), h.shift());
  return p;
};
fr.prototype.getUri = function(a) {
  a = Ca(this.defaults, a);
  var r = lR(a.baseURL, a.url);
  return sR(r, a.params, a.paramsSerializer);
};
Vh.forEach(["delete", "get", "head", "options"], function(a) {
  fr.prototype[a] = function(r, s) {
    return this.request(Ca(s || {}, {
      method: a,
      url: r,
      data: (s || {}).data
    }));
  };
});
Vh.forEach(["post", "put", "patch"], function(a) {
  function r(s) {
    return function(f, h, p) {
      return this.request(Ca(p || {}, {
        method: a,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  fr.prototype[a] = r(), fr.prototype[a + "Form"] = r(!0);
});
var cR = fr, ws, gd;
function uR() {
  if (gd)
    return ws;
  gd = 1;
  var n = xa();
  function a(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(h) {
      s = h;
    });
    var l = this;
    this.promise.then(function(f) {
      if (!!l._listeners) {
        var h, p = l._listeners.length;
        for (h = 0; h < p; h++)
          l._listeners[h](f);
        l._listeners = null;
      }
    }), this.promise.then = function(f) {
      var h, p = new Promise(function(T) {
        l.subscribe(T), h = T;
      }).then(f);
      return p.cancel = function() {
        l.unsubscribe(h);
      }, p;
    }, r(function(h) {
      l.reason || (l.reason = new n(h), s(l.reason));
    });
  }
  return a.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, a.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, a.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(s);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, a.source = function() {
    var s, l = new a(function(h) {
      s = h;
    });
    return {
      token: l,
      cancel: s
    };
  }, ws = a, ws;
}
var Us, Md;
function dR() {
  return Md || (Md = 1, Us = function(a) {
    return function(s) {
      return a.apply(null, s);
    };
  }), Us;
}
var Rs, Zd;
function fR() {
  if (Zd)
    return Rs;
  Zd = 1;
  var n = We;
  return Rs = function(r) {
    return n.isObject(r) && r.isAxiosError === !0;
  }, Rs;
}
var Jd = We, hR = rh, ma = cR, pR = ph, mR = ll;
function vh(n) {
  var a = new ma(n), r = hR(ma.prototype.request, a);
  return Jd.extend(r, ma.prototype, a), Jd.extend(r, a), r.create = function(l) {
    return vh(pR(n, l));
  }, r;
}
var Ke = vh(mR);
Ke.Axios = ma;
Ke.CanceledError = xa();
Ke.CancelToken = uR();
Ke.isCancel = hh();
Ke.VERSION = mh().version;
Ke.toFormData = dh;
Ke.AxiosError = pr;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(a) {
  return Promise.all(a);
};
Ke.spread = dR();
Ke.isAxiosError = fR();
nl.exports = Ke;
nl.exports.default = Ke;
(function(n) {
  n.exports = nl.exports;
})(nh);
const wh = /* @__PURE__ */ cU(nh.exports);
wh.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
});
const mr = wh.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), gt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED"
}, VR = "/alec", TR = "/alec/engine/configuration", Uh = "/alec/agreement/configuration", vR = "/alec/situation", Rh = async (n) => {
  try {
    return (await mr.post(`${Uh}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, wR = async () => {
  try {
    const n = await mr.get(`${Uh}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, UR = async (n, a) => {
  try {
    return (await mr.post(TR, {
      distanceMeasureName: a ? gt.HELLINGER_OPTION : gt.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, RR = async (n, a) => {
  try {
    return (await mr.post(`${VR}/situation/${a}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, NR = async () => {
  try {
    const n = await mr.get(vR);
    return n.status === 200, n.data;
  } catch {
    return !1;
  }
};
var Je = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(n, a) {
  (function() {
    var r, s = "4.17.21", l = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", p = "Invalid `variable` option passed into `_.template`", T = "__lodash_hash_undefined__", N = 500, g = "__lodash_placeholder__", b = 1, y = 2, B = 4, F = 1, C = 2, D = 1, A = 2, Q = 4, W = 8, H = 16, k = 32, _ = 64, $ = 128, L = 256, xe = 512, je = 30, de = "...", fe = 800, me = 16, Ue = 1, ae = 2, ye = 3, be = 1 / 0, ze = 9007199254740991, Tr = 17976931348623157e292, di = 0 / 0, Zt = 4294967295, cp = Zt - 1, up = Zt >>> 1, dp = [
      ["ary", $],
      ["bind", D],
      ["bindKey", A],
      ["curry", W],
      ["curryRight", H],
      ["flip", xe],
      ["partial", k],
      ["partialRight", _],
      ["rearg", L]
    ], Bn = "[object Arguments]", fi = "[object Array]", fp = "[object AsyncFunction]", vr = "[object Boolean]", wr = "[object Date]", hp = "[object DOMException]", hi = "[object Error]", pi = "[object Function]", kl = "[object GeneratorFunction]", Vt = "[object Map]", Ur = "[object Number]", pp = "[object Null]", Ft = "[object Object]", yl = "[object Promise]", mp = "[object Proxy]", Rr = "[object RegExp]", Tt = "[object Set]", Nr = "[object String]", mi = "[object Symbol]", Vp = "[object Undefined]", gr = "[object WeakMap]", Tp = "[object WeakSet]", Mr = "[object ArrayBuffer]", Cn = "[object DataView]", Qa = "[object Float32Array]", Oa = "[object Float64Array]", za = "[object Int8Array]", Ga = "[object Int16Array]", Ya = "[object Int32Array]", Ia = "[object Uint8Array]", Ha = "[object Uint8ClampedArray]", Pa = "[object Uint16Array]", ja = "[object Uint32Array]", vp = /\b__p \+= '';/g, wp = /\b(__p \+=) '' \+/g, Up = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bl = /&(?:amp|lt|gt|quot|#39);/g, El = /[&<>"']/g, Rp = RegExp(bl.source), Np = RegExp(El.source), gp = /<%-([\s\S]+?)%>/g, Mp = /<%([\s\S]+?)%>/g, Fl = /<%=([\s\S]+?)%>/g, Zp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jp = /^\w*$/, kp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xa = /[\\^$.*+?()[\]{}|]/g, yp = RegExp(Xa.source), _a = /^\s+/, bp = /\s/, Ep = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fp = /\{\n\/\* \[wrapped with (.+)\] \*/, Sp = /,? & /, Wp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ap = /[()=,{}\[\]\/\s]/, xp = /\\(\\)?/g, Bp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Sl = /\w*$/, Cp = /^[-+]0x[0-9a-f]+$/i, Dp = /^0b[01]+$/i, Qp = /^\[object .+?Constructor\]$/, Op = /^0o[0-7]+$/i, zp = /^(?:0|[1-9]\d*)$/, Gp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Vi = /($^)/, Yp = /['\n\r\u2028\u2029\\]/g, Ti = "\\ud800-\\udfff", Ip = "\\u0300-\\u036f", Hp = "\\ufe20-\\ufe2f", Pp = "\\u20d0-\\u20ff", Wl = Ip + Hp + Pp, Al = "\\u2700-\\u27bf", xl = "a-z\\xdf-\\xf6\\xf8-\\xff", jp = "\\xac\\xb1\\xd7\\xf7", Xp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", _p = "\\u2000-\\u206f", Lp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Cl = "\\ufe0e\\ufe0f", Dl = jp + Xp + _p + Lp, La = "['\u2019]", qp = "[" + Ti + "]", Ql = "[" + Dl + "]", vi = "[" + Wl + "]", Ol = "\\d+", Kp = "[" + Al + "]", zl = "[" + xl + "]", Gl = "[^" + Ti + Dl + Ol + Al + xl + Bl + "]", qa = "\\ud83c[\\udffb-\\udfff]", $p = "(?:" + vi + "|" + qa + ")", Yl = "[^" + Ti + "]", Ka = "(?:\\ud83c[\\udde6-\\uddff]){2}", $a = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dn = "[" + Bl + "]", Il = "\\u200d", Hl = "(?:" + zl + "|" + Gl + ")", em = "(?:" + Dn + "|" + Gl + ")", Pl = "(?:" + La + "(?:d|ll|m|re|s|t|ve))?", jl = "(?:" + La + "(?:D|LL|M|RE|S|T|VE))?", Xl = $p + "?", _l = "[" + Cl + "]?", tm = "(?:" + Il + "(?:" + [Yl, Ka, $a].join("|") + ")" + _l + Xl + ")*", nm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ll = _l + Xl + tm, im = "(?:" + [Kp, Ka, $a].join("|") + ")" + Ll, am = "(?:" + [Yl + vi + "?", vi, Ka, $a, qp].join("|") + ")", om = RegExp(La, "g"), sm = RegExp(vi, "g"), eo = RegExp(qa + "(?=" + qa + ")|" + am + Ll, "g"), lm = RegExp([
      Dn + "?" + zl + "+" + Pl + "(?=" + [Ql, Dn, "$"].join("|") + ")",
      em + "+" + jl + "(?=" + [Ql, Dn + Hl, "$"].join("|") + ")",
      Dn + "?" + Hl + "+" + Pl,
      Dn + "+" + jl,
      rm,
      nm,
      Ol,
      im
    ].join("|"), "g"), cm = RegExp("[" + Il + Ti + Wl + Cl + "]"), um = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, dm = [
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
    ], fm = -1, le = {};
    le[Qa] = le[Oa] = le[za] = le[Ga] = le[Ya] = le[Ia] = le[Ha] = le[Pa] = le[ja] = !0, le[Bn] = le[fi] = le[Mr] = le[vr] = le[Cn] = le[wr] = le[hi] = le[pi] = le[Vt] = le[Ur] = le[Ft] = le[Rr] = le[Tt] = le[Nr] = le[gr] = !1;
    var se = {};
    se[Bn] = se[fi] = se[Mr] = se[Cn] = se[vr] = se[wr] = se[Qa] = se[Oa] = se[za] = se[Ga] = se[Ya] = se[Vt] = se[Ur] = se[Ft] = se[Rr] = se[Tt] = se[Nr] = se[mi] = se[Ia] = se[Ha] = se[Pa] = se[ja] = !0, se[hi] = se[pi] = se[gr] = !1;
    var hm = {
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
    }, pm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, mm = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Vm = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Tm = parseFloat, vm = parseInt, ql = typeof Or == "object" && Or && Or.Object === Object && Or, wm = typeof self == "object" && self && self.Object === Object && self, Ee = ql || wm || Function("return this")(), to = a && !a.nodeType && a, mn = to && !0 && n && !n.nodeType && n, Kl = mn && mn.exports === to, no = Kl && ql.process, st = function() {
      try {
        var v = mn && mn.require && mn.require("util").types;
        return v || no && no.binding && no.binding("util");
      } catch {
      }
    }(), $l = st && st.isArrayBuffer, ec = st && st.isDate, tc = st && st.isMap, nc = st && st.isRegExp, rc = st && st.isSet, ic = st && st.isTypedArray;
    function $e(v, R, U) {
      switch (U.length) {
        case 0:
          return v.call(R);
        case 1:
          return v.call(R, U[0]);
        case 2:
          return v.call(R, U[0], U[1]);
        case 3:
          return v.call(R, U[0], U[1], U[2]);
      }
      return v.apply(R, U);
    }
    function Um(v, R, U, S) {
      for (var Y = -1, te = v == null ? 0 : v.length; ++Y < te; ) {
        var Re = v[Y];
        R(S, Re, U(Re), v);
      }
      return S;
    }
    function lt(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S && R(v[U], U, v) !== !1; )
        ;
      return v;
    }
    function Rm(v, R) {
      for (var U = v == null ? 0 : v.length; U-- && R(v[U], U, v) !== !1; )
        ;
      return v;
    }
    function ac(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S; )
        if (!R(v[U], U, v))
          return !1;
      return !0;
    }
    function _t(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length, Y = 0, te = []; ++U < S; ) {
        var Re = v[U];
        R(Re, U, v) && (te[Y++] = Re);
      }
      return te;
    }
    function wi(v, R) {
      var U = v == null ? 0 : v.length;
      return !!U && Qn(v, R, 0) > -1;
    }
    function ro(v, R, U) {
      for (var S = -1, Y = v == null ? 0 : v.length; ++S < Y; )
        if (U(R, v[S]))
          return !0;
      return !1;
    }
    function ce(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length, Y = Array(S); ++U < S; )
        Y[U] = R(v[U], U, v);
      return Y;
    }
    function Lt(v, R) {
      for (var U = -1, S = R.length, Y = v.length; ++U < S; )
        v[Y + U] = R[U];
      return v;
    }
    function io(v, R, U, S) {
      var Y = -1, te = v == null ? 0 : v.length;
      for (S && te && (U = v[++Y]); ++Y < te; )
        U = R(U, v[Y], Y, v);
      return U;
    }
    function Nm(v, R, U, S) {
      var Y = v == null ? 0 : v.length;
      for (S && Y && (U = v[--Y]); Y--; )
        U = R(U, v[Y], Y, v);
      return U;
    }
    function ao(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S; )
        if (R(v[U], U, v))
          return !0;
      return !1;
    }
    var gm = oo("length");
    function Mm(v) {
      return v.split("");
    }
    function Zm(v) {
      return v.match(Wp) || [];
    }
    function oc(v, R, U) {
      var S;
      return U(v, function(Y, te, Re) {
        if (R(Y, te, Re))
          return S = te, !1;
      }), S;
    }
    function Ui(v, R, U, S) {
      for (var Y = v.length, te = U + (S ? 1 : -1); S ? te-- : ++te < Y; )
        if (R(v[te], te, v))
          return te;
      return -1;
    }
    function Qn(v, R, U) {
      return R === R ? Cm(v, R, U) : Ui(v, sc, U);
    }
    function Jm(v, R, U, S) {
      for (var Y = U - 1, te = v.length; ++Y < te; )
        if (S(v[Y], R))
          return Y;
      return -1;
    }
    function sc(v) {
      return v !== v;
    }
    function lc(v, R) {
      var U = v == null ? 0 : v.length;
      return U ? lo(v, R) / U : di;
    }
    function oo(v) {
      return function(R) {
        return R == null ? r : R[v];
      };
    }
    function so(v) {
      return function(R) {
        return v == null ? r : v[R];
      };
    }
    function cc(v, R, U, S, Y) {
      return Y(v, function(te, Re, oe) {
        U = S ? (S = !1, te) : R(U, te, Re, oe);
      }), U;
    }
    function km(v, R) {
      var U = v.length;
      for (v.sort(R); U--; )
        v[U] = v[U].value;
      return v;
    }
    function lo(v, R) {
      for (var U, S = -1, Y = v.length; ++S < Y; ) {
        var te = R(v[S]);
        te !== r && (U = U === r ? te : U + te);
      }
      return U;
    }
    function co(v, R) {
      for (var U = -1, S = Array(v); ++U < v; )
        S[U] = R(U);
      return S;
    }
    function ym(v, R) {
      return ce(R, function(U) {
        return [U, v[U]];
      });
    }
    function uc(v) {
      return v && v.slice(0, pc(v) + 1).replace(_a, "");
    }
    function et(v) {
      return function(R) {
        return v(R);
      };
    }
    function uo(v, R) {
      return ce(R, function(U) {
        return v[U];
      });
    }
    function Zr(v, R) {
      return v.has(R);
    }
    function dc(v, R) {
      for (var U = -1, S = v.length; ++U < S && Qn(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function fc(v, R) {
      for (var U = v.length; U-- && Qn(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function bm(v, R) {
      for (var U = v.length, S = 0; U--; )
        v[U] === R && ++S;
      return S;
    }
    var Em = so(hm), Fm = so(pm);
    function Sm(v) {
      return "\\" + Vm[v];
    }
    function Wm(v, R) {
      return v == null ? r : v[R];
    }
    function On(v) {
      return cm.test(v);
    }
    function Am(v) {
      return um.test(v);
    }
    function xm(v) {
      for (var R, U = []; !(R = v.next()).done; )
        U.push(R.value);
      return U;
    }
    function fo(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S, Y) {
        U[++R] = [Y, S];
      }), U;
    }
    function hc(v, R) {
      return function(U) {
        return v(R(U));
      };
    }
    function qt(v, R) {
      for (var U = -1, S = v.length, Y = 0, te = []; ++U < S; ) {
        var Re = v[U];
        (Re === R || Re === g) && (v[U] = g, te[Y++] = U);
      }
      return te;
    }
    function Ri(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = S;
      }), U;
    }
    function Bm(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = [S, S];
      }), U;
    }
    function Cm(v, R, U) {
      for (var S = U - 1, Y = v.length; ++S < Y; )
        if (v[S] === R)
          return S;
      return -1;
    }
    function Dm(v, R, U) {
      for (var S = U + 1; S--; )
        if (v[S] === R)
          return S;
      return S;
    }
    function zn(v) {
      return On(v) ? Om(v) : gm(v);
    }
    function vt(v) {
      return On(v) ? zm(v) : Mm(v);
    }
    function pc(v) {
      for (var R = v.length; R-- && bp.test(v.charAt(R)); )
        ;
      return R;
    }
    var Qm = so(mm);
    function Om(v) {
      for (var R = eo.lastIndex = 0; eo.test(v); )
        ++R;
      return R;
    }
    function zm(v) {
      return v.match(eo) || [];
    }
    function Gm(v) {
      return v.match(lm) || [];
    }
    var Ym = function v(R) {
      R = R == null ? Ee : Gn.defaults(Ee.Object(), R, Gn.pick(Ee, dm));
      var U = R.Array, S = R.Date, Y = R.Error, te = R.Function, Re = R.Math, oe = R.Object, ho = R.RegExp, Im = R.String, ct = R.TypeError, Ni = U.prototype, Hm = te.prototype, Yn = oe.prototype, gi = R["__core-js_shared__"], Mi = Hm.toString, re = Yn.hasOwnProperty, Pm = 0, mc = function() {
        var e = /[^.]+$/.exec(gi && gi.keys && gi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Zi = Yn.toString, jm = Mi.call(oe), Xm = Ee._, _m = ho(
        "^" + Mi.call(re).replace(Xa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ji = Kl ? R.Buffer : r, Kt = R.Symbol, ki = R.Uint8Array, Vc = Ji ? Ji.allocUnsafe : r, yi = hc(oe.getPrototypeOf, oe), Tc = oe.create, vc = Yn.propertyIsEnumerable, bi = Ni.splice, wc = Kt ? Kt.isConcatSpreadable : r, Jr = Kt ? Kt.iterator : r, Vn = Kt ? Kt.toStringTag : r, Ei = function() {
        try {
          var e = Rn(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Lm = R.clearTimeout !== Ee.clearTimeout && R.clearTimeout, qm = S && S.now !== Ee.Date.now && S.now, Km = R.setTimeout !== Ee.setTimeout && R.setTimeout, Fi = Re.ceil, Si = Re.floor, po = oe.getOwnPropertySymbols, $m = Ji ? Ji.isBuffer : r, Uc = R.isFinite, eV = Ni.join, tV = hc(oe.keys, oe), Ne = Re.max, Be = Re.min, nV = S.now, rV = R.parseInt, Rc = Re.random, iV = Ni.reverse, mo = Rn(R, "DataView"), kr = Rn(R, "Map"), Vo = Rn(R, "Promise"), In = Rn(R, "Set"), yr = Rn(R, "WeakMap"), br = Rn(oe, "create"), Wi = yr && new yr(), Hn = {}, aV = Nn(mo), oV = Nn(kr), sV = Nn(Vo), lV = Nn(In), cV = Nn(yr), Ai = Kt ? Kt.prototype : r, Er = Ai ? Ai.valueOf : r, Nc = Ai ? Ai.toString : r;
      function u(e) {
        if (he(e) && !I(e) && !(e instanceof K)) {
          if (e instanceof ut)
            return e;
          if (re.call(e, "__wrapped__"))
            return gu(e);
        }
        return new ut(e);
      }
      var Pn = function() {
        function e() {
        }
        return function(t) {
          if (!ue(t))
            return {};
          if (Tc)
            return Tc(t);
          e.prototype = t;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function xi() {
      }
      function ut(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: gp,
        evaluate: Mp,
        interpolate: Fl,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = xi.prototype, u.prototype.constructor = u, ut.prototype = Pn(xi.prototype), ut.prototype.constructor = ut;
      function K(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Zt, this.__views__ = [];
      }
      function uV() {
        var e = new K(this.__wrapped__);
        return e.__actions__ = Xe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Xe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Xe(this.__views__), e;
      }
      function dV() {
        if (this.__filtered__) {
          var e = new K(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function fV() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = I(e), o = t < 0, c = i ? e.length : 0, d = M1(0, c, this.__views__), m = d.start, V = d.end, w = V - m, M = o ? V : m - 1, Z = this.__iteratees__, J = Z.length, E = 0, x = Be(w, this.__takeCount__);
        if (!i || !o && c == w && x == w)
          return Pc(e, this.__actions__);
        var z = [];
        e:
          for (; w-- && E < x; ) {
            M += t;
            for (var j = -1, G = e[M]; ++j < J; ) {
              var q = Z[j], ee = q.iteratee, rt = q.type, Ie = ee(G);
              if (rt == ae)
                G = Ie;
              else if (!Ie) {
                if (rt == Ue)
                  continue e;
                break e;
              }
            }
            z[E++] = G;
          }
        return z;
      }
      K.prototype = Pn(xi.prototype), K.prototype.constructor = K;
      function Tn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function hV() {
        this.__data__ = br ? br(null) : {}, this.size = 0;
      }
      function pV(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function mV(e) {
        var t = this.__data__;
        if (br) {
          var i = t[e];
          return i === T ? r : i;
        }
        return re.call(t, e) ? t[e] : r;
      }
      function VV(e) {
        var t = this.__data__;
        return br ? t[e] !== r : re.call(t, e);
      }
      function TV(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = br && t === r ? T : t, this;
      }
      Tn.prototype.clear = hV, Tn.prototype.delete = pV, Tn.prototype.get = mV, Tn.prototype.has = VV, Tn.prototype.set = TV;
      function St(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function vV() {
        this.__data__ = [], this.size = 0;
      }
      function wV(e) {
        var t = this.__data__, i = Bi(t, e);
        if (i < 0)
          return !1;
        var o = t.length - 1;
        return i == o ? t.pop() : bi.call(t, i, 1), --this.size, !0;
      }
      function UV(e) {
        var t = this.__data__, i = Bi(t, e);
        return i < 0 ? r : t[i][1];
      }
      function RV(e) {
        return Bi(this.__data__, e) > -1;
      }
      function NV(e, t) {
        var i = this.__data__, o = Bi(i, e);
        return o < 0 ? (++this.size, i.push([e, t])) : i[o][1] = t, this;
      }
      St.prototype.clear = vV, St.prototype.delete = wV, St.prototype.get = UV, St.prototype.has = RV, St.prototype.set = NV;
      function Wt(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function gV() {
        this.size = 0, this.__data__ = {
          hash: new Tn(),
          map: new (kr || St)(),
          string: new Tn()
        };
      }
      function MV(e) {
        var t = Xi(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function ZV(e) {
        return Xi(this, e).get(e);
      }
      function JV(e) {
        return Xi(this, e).has(e);
      }
      function kV(e, t) {
        var i = Xi(this, e), o = i.size;
        return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
      }
      Wt.prototype.clear = gV, Wt.prototype.delete = MV, Wt.prototype.get = ZV, Wt.prototype.has = JV, Wt.prototype.set = kV;
      function vn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Wt(); ++t < i; )
          this.add(e[t]);
      }
      function yV(e) {
        return this.__data__.set(e, T), this;
      }
      function bV(e) {
        return this.__data__.has(e);
      }
      vn.prototype.add = vn.prototype.push = yV, vn.prototype.has = bV;
      function wt(e) {
        var t = this.__data__ = new St(e);
        this.size = t.size;
      }
      function EV() {
        this.__data__ = new St(), this.size = 0;
      }
      function FV(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function SV(e) {
        return this.__data__.get(e);
      }
      function WV(e) {
        return this.__data__.has(e);
      }
      function AV(e, t) {
        var i = this.__data__;
        if (i instanceof St) {
          var o = i.__data__;
          if (!kr || o.length < l - 1)
            return o.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new Wt(o);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      wt.prototype.clear = EV, wt.prototype.delete = FV, wt.prototype.get = SV, wt.prototype.has = WV, wt.prototype.set = AV;
      function gc(e, t) {
        var i = I(e), o = !i && gn(e), c = !i && !o && rn(e), d = !i && !o && !c && Ln(e), m = i || o || c || d, V = m ? co(e.length, Im) : [], w = V.length;
        for (var M in e)
          (t || re.call(e, M)) && !(m && (M == "length" || c && (M == "offset" || M == "parent") || d && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Ct(M, w))) && V.push(M);
        return V;
      }
      function Mc(e) {
        var t = e.length;
        return t ? e[ko(0, t - 1)] : r;
      }
      function xV(e, t) {
        return _i(Xe(e), wn(t, 0, e.length));
      }
      function BV(e) {
        return _i(Xe(e));
      }
      function To(e, t, i) {
        (i !== r && !Ut(e[t], i) || i === r && !(t in e)) && At(e, t, i);
      }
      function Fr(e, t, i) {
        var o = e[t];
        (!(re.call(e, t) && Ut(o, i)) || i === r && !(t in e)) && At(e, t, i);
      }
      function Bi(e, t) {
        for (var i = e.length; i--; )
          if (Ut(e[i][0], t))
            return i;
        return -1;
      }
      function CV(e, t, i, o) {
        return $t(e, function(c, d, m) {
          t(o, c, i(c), m);
        }), o;
      }
      function Zc(e, t) {
        return e && kt(t, Me(t), e);
      }
      function DV(e, t) {
        return e && kt(t, Le(t), e);
      }
      function At(e, t, i) {
        t == "__proto__" && Ei ? Ei(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function vo(e, t) {
        for (var i = -1, o = t.length, c = U(o), d = e == null; ++i < o; )
          c[i] = d ? r : Ko(e, t[i]);
        return c;
      }
      function wn(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function dt(e, t, i, o, c, d) {
        var m, V = t & b, w = t & y, M = t & B;
        if (i && (m = c ? i(e, o, c, d) : i(e)), m !== r)
          return m;
        if (!ue(e))
          return e;
        var Z = I(e);
        if (Z) {
          if (m = J1(e), !V)
            return Xe(e, m);
        } else {
          var J = Ce(e), E = J == pi || J == kl;
          if (rn(e))
            return _c(e, V);
          if (J == Ft || J == Bn || E && !c) {
            if (m = w || E ? {} : pu(e), !V)
              return w ? m1(e, DV(m, e)) : p1(e, Zc(m, e));
          } else {
            if (!se[J])
              return c ? e : {};
            m = k1(e, J, V);
          }
        }
        d || (d = new wt());
        var x = d.get(e);
        if (x)
          return x;
        d.set(e, m), Yu(e) ? e.forEach(function(G) {
          m.add(dt(G, t, i, G, e, d));
        }) : zu(e) && e.forEach(function(G, q) {
          m.set(q, dt(G, t, i, q, e, d));
        });
        var z = M ? w ? Do : Co : w ? Le : Me, j = Z ? r : z(e);
        return lt(j || e, function(G, q) {
          j && (q = G, G = e[q]), Fr(m, q, dt(G, t, i, q, e, d));
        }), m;
      }
      function QV(e) {
        var t = Me(e);
        return function(i) {
          return Jc(i, e, t);
        };
      }
      function Jc(e, t, i) {
        var o = i.length;
        if (e == null)
          return !o;
        for (e = oe(e); o--; ) {
          var c = i[o], d = t[c], m = e[c];
          if (m === r && !(c in e) || !d(m))
            return !1;
        }
        return !0;
      }
      function kc(e, t, i) {
        if (typeof e != "function")
          throw new ct(h);
        return Dr(function() {
          e.apply(r, i);
        }, t);
      }
      function Sr(e, t, i, o) {
        var c = -1, d = wi, m = !0, V = e.length, w = [], M = t.length;
        if (!V)
          return w;
        i && (t = ce(t, et(i))), o ? (d = ro, m = !1) : t.length >= l && (d = Zr, m = !1, t = new vn(t));
        e:
          for (; ++c < V; ) {
            var Z = e[c], J = i == null ? Z : i(Z);
            if (Z = o || Z !== 0 ? Z : 0, m && J === J) {
              for (var E = M; E--; )
                if (t[E] === J)
                  continue e;
              w.push(Z);
            } else
              d(t, J, o) || w.push(Z);
          }
        return w;
      }
      var $t = eu(Jt), yc = eu(Uo, !0);
      function OV(e, t) {
        var i = !0;
        return $t(e, function(o, c, d) {
          return i = !!t(o, c, d), i;
        }), i;
      }
      function Ci(e, t, i) {
        for (var o = -1, c = e.length; ++o < c; ) {
          var d = e[o], m = t(d);
          if (m != null && (V === r ? m === m && !nt(m) : i(m, V)))
            var V = m, w = d;
        }
        return w;
      }
      function zV(e, t, i, o) {
        var c = e.length;
        for (i = P(i), i < 0 && (i = -i > c ? 0 : c + i), o = o === r || o > c ? c : P(o), o < 0 && (o += c), o = i > o ? 0 : Hu(o); i < o; )
          e[i++] = t;
        return e;
      }
      function bc(e, t) {
        var i = [];
        return $t(e, function(o, c, d) {
          t(o, c, d) && i.push(o);
        }), i;
      }
      function Fe(e, t, i, o, c) {
        var d = -1, m = e.length;
        for (i || (i = b1), c || (c = []); ++d < m; ) {
          var V = e[d];
          t > 0 && i(V) ? t > 1 ? Fe(V, t - 1, i, o, c) : Lt(c, V) : o || (c[c.length] = V);
        }
        return c;
      }
      var wo = tu(), Ec = tu(!0);
      function Jt(e, t) {
        return e && wo(e, t, Me);
      }
      function Uo(e, t) {
        return e && Ec(e, t, Me);
      }
      function Di(e, t) {
        return _t(t, function(i) {
          return Dt(e[i]);
        });
      }
      function Un(e, t) {
        t = tn(t, e);
        for (var i = 0, o = t.length; e != null && i < o; )
          e = e[yt(t[i++])];
        return i && i == o ? e : r;
      }
      function Fc(e, t, i) {
        var o = t(e);
        return I(e) ? o : Lt(o, i(e));
      }
      function Ge(e) {
        return e == null ? e === r ? Vp : pp : Vn && Vn in oe(e) ? g1(e) : B1(e);
      }
      function Ro(e, t) {
        return e > t;
      }
      function GV(e, t) {
        return e != null && re.call(e, t);
      }
      function YV(e, t) {
        return e != null && t in oe(e);
      }
      function IV(e, t, i) {
        return e >= Be(t, i) && e < Ne(t, i);
      }
      function No(e, t, i) {
        for (var o = i ? ro : wi, c = e[0].length, d = e.length, m = d, V = U(d), w = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && t && (Z = ce(Z, et(t))), w = Be(Z.length, w), V[m] = !i && (t || c >= 120 && Z.length >= 120) ? new vn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, E = V[0];
        e:
          for (; ++J < c && M.length < w; ) {
            var x = Z[J], z = t ? t(x) : x;
            if (x = i || x !== 0 ? x : 0, !(E ? Zr(E, z) : o(M, z, i))) {
              for (m = d; --m; ) {
                var j = V[m];
                if (!(j ? Zr(j, z) : o(e[m], z, i)))
                  continue e;
              }
              E && E.push(z), M.push(x);
            }
          }
        return M;
      }
      function HV(e, t, i, o) {
        return Jt(e, function(c, d, m) {
          t(o, i(c), d, m);
        }), o;
      }
      function Wr(e, t, i) {
        t = tn(t, e), e = vu(e, t);
        var o = e == null ? e : e[yt(ht(t))];
        return o == null ? r : $e(o, e, i);
      }
      function Sc(e) {
        return he(e) && Ge(e) == Bn;
      }
      function PV(e) {
        return he(e) && Ge(e) == Mr;
      }
      function jV(e) {
        return he(e) && Ge(e) == wr;
      }
      function Ar(e, t, i, o, c) {
        return e === t ? !0 : e == null || t == null || !he(e) && !he(t) ? e !== e && t !== t : XV(e, t, i, o, Ar, c);
      }
      function XV(e, t, i, o, c, d) {
        var m = I(e), V = I(t), w = m ? fi : Ce(e), M = V ? fi : Ce(t);
        w = w == Bn ? Ft : w, M = M == Bn ? Ft : M;
        var Z = w == Ft, J = M == Ft, E = w == M;
        if (E && rn(e)) {
          if (!rn(t))
            return !1;
          m = !0, Z = !1;
        }
        if (E && !Z)
          return d || (d = new wt()), m || Ln(e) ? du(e, t, i, o, c, d) : R1(e, t, w, i, o, c, d);
        if (!(i & F)) {
          var x = Z && re.call(e, "__wrapped__"), z = J && re.call(t, "__wrapped__");
          if (x || z) {
            var j = x ? e.value() : e, G = z ? t.value() : t;
            return d || (d = new wt()), c(j, G, i, o, d);
          }
        }
        return E ? (d || (d = new wt()), N1(e, t, i, o, c, d)) : !1;
      }
      function _V(e) {
        return he(e) && Ce(e) == Vt;
      }
      function go(e, t, i, o) {
        var c = i.length, d = c, m = !o;
        if (e == null)
          return !d;
        for (e = oe(e); c--; ) {
          var V = i[c];
          if (m && V[2] ? V[1] !== e[V[0]] : !(V[0] in e))
            return !1;
        }
        for (; ++c < d; ) {
          V = i[c];
          var w = V[0], M = e[w], Z = V[1];
          if (m && V[2]) {
            if (M === r && !(w in e))
              return !1;
          } else {
            var J = new wt();
            if (o)
              var E = o(M, Z, w, e, t, J);
            if (!(E === r ? Ar(Z, M, F | C, o, J) : E))
              return !1;
          }
        }
        return !0;
      }
      function Wc(e) {
        if (!ue(e) || F1(e))
          return !1;
        var t = Dt(e) ? _m : Qp;
        return t.test(Nn(e));
      }
      function LV(e) {
        return he(e) && Ge(e) == Rr;
      }
      function qV(e) {
        return he(e) && Ce(e) == Tt;
      }
      function KV(e) {
        return he(e) && ta(e.length) && !!le[Ge(e)];
      }
      function Ac(e) {
        return typeof e == "function" ? e : e == null ? qe : typeof e == "object" ? I(e) ? Cc(e[0], e[1]) : Bc(e) : nd(e);
      }
      function Mo(e) {
        if (!Cr(e))
          return tV(e);
        var t = [];
        for (var i in oe(e))
          re.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function $V(e) {
        if (!ue(e))
          return x1(e);
        var t = Cr(e), i = [];
        for (var o in e)
          o == "constructor" && (t || !re.call(e, o)) || i.push(o);
        return i;
      }
      function Zo(e, t) {
        return e < t;
      }
      function xc(e, t) {
        var i = -1, o = _e(e) ? U(e.length) : [];
        return $t(e, function(c, d, m) {
          o[++i] = t(c, d, m);
        }), o;
      }
      function Bc(e) {
        var t = Oo(e);
        return t.length == 1 && t[0][2] ? Vu(t[0][0], t[0][1]) : function(i) {
          return i === e || go(i, e, t);
        };
      }
      function Cc(e, t) {
        return Go(e) && mu(t) ? Vu(yt(e), t) : function(i) {
          var o = Ko(i, e);
          return o === r && o === t ? $o(i, e) : Ar(t, o, F | C);
        };
      }
      function Qi(e, t, i, o, c) {
        e !== t && wo(t, function(d, m) {
          if (c || (c = new wt()), ue(d))
            e1(e, t, m, i, Qi, o, c);
          else {
            var V = o ? o(Io(e, m), d, m + "", e, t, c) : r;
            V === r && (V = d), To(e, m, V);
          }
        }, Le);
      }
      function e1(e, t, i, o, c, d, m) {
        var V = Io(e, i), w = Io(t, i), M = m.get(w);
        if (M) {
          To(e, i, M);
          return;
        }
        var Z = d ? d(V, w, i + "", e, t, m) : r, J = Z === r;
        if (J) {
          var E = I(w), x = !E && rn(w), z = !E && !x && Ln(w);
          Z = w, E || x || z ? I(V) ? Z = V : Ve(V) ? Z = Xe(V) : x ? (J = !1, Z = _c(w, !0)) : z ? (J = !1, Z = Lc(w, !0)) : Z = [] : Qr(w) || gn(w) ? (Z = V, gn(V) ? Z = Pu(V) : (!ue(V) || Dt(V)) && (Z = pu(w))) : J = !1;
        }
        J && (m.set(w, Z), c(Z, w, o, d, m), m.delete(w)), To(e, i, Z);
      }
      function Dc(e, t) {
        var i = e.length;
        if (!!i)
          return t += t < 0 ? i : 0, Ct(t, i) ? e[t] : r;
      }
      function Qc(e, t, i) {
        t.length ? t = ce(t, function(d) {
          return I(d) ? function(m) {
            return Un(m, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [qe];
        var o = -1;
        t = ce(t, et(O()));
        var c = xc(e, function(d, m, V) {
          var w = ce(t, function(M) {
            return M(d);
          });
          return { criteria: w, index: ++o, value: d };
        });
        return km(c, function(d, m) {
          return h1(d, m, i);
        });
      }
      function t1(e, t) {
        return Oc(e, t, function(i, o) {
          return $o(e, o);
        });
      }
      function Oc(e, t, i) {
        for (var o = -1, c = t.length, d = {}; ++o < c; ) {
          var m = t[o], V = Un(e, m);
          i(V, m) && xr(d, tn(m, e), V);
        }
        return d;
      }
      function n1(e) {
        return function(t) {
          return Un(t, e);
        };
      }
      function Jo(e, t, i, o) {
        var c = o ? Jm : Qn, d = -1, m = t.length, V = e;
        for (e === t && (t = Xe(t)), i && (V = ce(e, et(i))); ++d < m; )
          for (var w = 0, M = t[d], Z = i ? i(M) : M; (w = c(V, Z, w, o)) > -1; )
            V !== e && bi.call(V, w, 1), bi.call(e, w, 1);
        return e;
      }
      function zc(e, t) {
        for (var i = e ? t.length : 0, o = i - 1; i--; ) {
          var c = t[i];
          if (i == o || c !== d) {
            var d = c;
            Ct(c) ? bi.call(e, c, 1) : Eo(e, c);
          }
        }
        return e;
      }
      function ko(e, t) {
        return e + Si(Rc() * (t - e + 1));
      }
      function r1(e, t, i, o) {
        for (var c = -1, d = Ne(Fi((t - e) / (i || 1)), 0), m = U(d); d--; )
          m[o ? d : ++c] = e, e += i;
        return m;
      }
      function yo(e, t) {
        var i = "";
        if (!e || t < 1 || t > ze)
          return i;
        do
          t % 2 && (i += e), t = Si(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function X(e, t) {
        return Ho(Tu(e, t, qe), e + "");
      }
      function i1(e) {
        return Mc(qn(e));
      }
      function a1(e, t) {
        var i = qn(e);
        return _i(i, wn(t, 0, i.length));
      }
      function xr(e, t, i, o) {
        if (!ue(e))
          return e;
        t = tn(t, e);
        for (var c = -1, d = t.length, m = d - 1, V = e; V != null && ++c < d; ) {
          var w = yt(t[c]), M = i;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return e;
          if (c != m) {
            var Z = V[w];
            M = o ? o(Z, w, V) : r, M === r && (M = ue(Z) ? Z : Ct(t[c + 1]) ? [] : {});
          }
          Fr(V, w, M), V = V[w];
        }
        return e;
      }
      var Gc = Wi ? function(e, t) {
        return Wi.set(e, t), e;
      } : qe, o1 = Ei ? function(e, t) {
        return Ei(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ts(t),
          writable: !0
        });
      } : qe;
      function s1(e) {
        return _i(qn(e));
      }
      function ft(e, t, i) {
        var o = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), i = i > c ? c : i, i < 0 && (i += c), c = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var d = U(c); ++o < c; )
          d[o] = e[o + t];
        return d;
      }
      function l1(e, t) {
        var i;
        return $t(e, function(o, c, d) {
          return i = t(o, c, d), !i;
        }), !!i;
      }
      function Oi(e, t, i) {
        var o = 0, c = e == null ? o : e.length;
        if (typeof t == "number" && t === t && c <= up) {
          for (; o < c; ) {
            var d = o + c >>> 1, m = e[d];
            m !== null && !nt(m) && (i ? m <= t : m < t) ? o = d + 1 : c = d;
          }
          return c;
        }
        return bo(e, t, qe, i);
      }
      function bo(e, t, i, o) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = i(t);
        for (var m = t !== t, V = t === null, w = nt(t), M = t === r; c < d; ) {
          var Z = Si((c + d) / 2), J = i(e[Z]), E = J !== r, x = J === null, z = J === J, j = nt(J);
          if (m)
            var G = o || z;
          else
            M ? G = z && (o || E) : V ? G = z && E && (o || !x) : w ? G = z && E && !x && (o || !j) : x || j ? G = !1 : G = o ? J <= t : J < t;
          G ? c = Z + 1 : d = Z;
        }
        return Be(d, cp);
      }
      function Yc(e, t) {
        for (var i = -1, o = e.length, c = 0, d = []; ++i < o; ) {
          var m = e[i], V = t ? t(m) : m;
          if (!i || !Ut(V, w)) {
            var w = V;
            d[c++] = m === 0 ? 0 : m;
          }
        }
        return d;
      }
      function Ic(e) {
        return typeof e == "number" ? e : nt(e) ? di : +e;
      }
      function tt(e) {
        if (typeof e == "string")
          return e;
        if (I(e))
          return ce(e, tt) + "";
        if (nt(e))
          return Nc ? Nc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -be ? "-0" : t;
      }
      function en(e, t, i) {
        var o = -1, c = wi, d = e.length, m = !0, V = [], w = V;
        if (i)
          m = !1, c = ro;
        else if (d >= l) {
          var M = t ? null : w1(e);
          if (M)
            return Ri(M);
          m = !1, c = Zr, w = new vn();
        } else
          w = t ? [] : V;
        e:
          for (; ++o < d; ) {
            var Z = e[o], J = t ? t(Z) : Z;
            if (Z = i || Z !== 0 ? Z : 0, m && J === J) {
              for (var E = w.length; E--; )
                if (w[E] === J)
                  continue e;
              t && w.push(J), V.push(Z);
            } else
              c(w, J, i) || (w !== V && w.push(J), V.push(Z));
          }
        return V;
      }
      function Eo(e, t) {
        return t = tn(t, e), e = vu(e, t), e == null || delete e[yt(ht(t))];
      }
      function Hc(e, t, i, o) {
        return xr(e, t, i(Un(e, t)), o);
      }
      function zi(e, t, i, o) {
        for (var c = e.length, d = o ? c : -1; (o ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return i ? ft(e, o ? 0 : d, o ? d + 1 : c) : ft(e, o ? d + 1 : 0, o ? c : d);
      }
      function Pc(e, t) {
        var i = e;
        return i instanceof K && (i = i.value()), io(t, function(o, c) {
          return c.func.apply(c.thisArg, Lt([o], c.args));
        }, i);
      }
      function Fo(e, t, i) {
        var o = e.length;
        if (o < 2)
          return o ? en(e[0]) : [];
        for (var c = -1, d = U(o); ++c < o; )
          for (var m = e[c], V = -1; ++V < o; )
            V != c && (d[c] = Sr(d[c] || m, e[V], t, i));
        return en(Fe(d, 1), t, i);
      }
      function jc(e, t, i) {
        for (var o = -1, c = e.length, d = t.length, m = {}; ++o < c; ) {
          var V = o < d ? t[o] : r;
          i(m, e[o], V);
        }
        return m;
      }
      function So(e) {
        return Ve(e) ? e : [];
      }
      function Wo(e) {
        return typeof e == "function" ? e : qe;
      }
      function tn(e, t) {
        return I(e) ? e : Go(e, t) ? [e] : Nu(ne(e));
      }
      var c1 = X;
      function nn(e, t, i) {
        var o = e.length;
        return i = i === r ? o : i, !t && i >= o ? e : ft(e, t, i);
      }
      var Xc = Lm || function(e) {
        return Ee.clearTimeout(e);
      };
      function _c(e, t) {
        if (t)
          return e.slice();
        var i = e.length, o = Vc ? Vc(i) : new e.constructor(i);
        return e.copy(o), o;
      }
      function Ao(e) {
        var t = new e.constructor(e.byteLength);
        return new ki(t).set(new ki(e)), t;
      }
      function u1(e, t) {
        var i = t ? Ao(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function d1(e) {
        var t = new e.constructor(e.source, Sl.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function f1(e) {
        return Er ? oe(Er.call(e)) : {};
      }
      function Lc(e, t) {
        var i = t ? Ao(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function qc(e, t) {
        if (e !== t) {
          var i = e !== r, o = e === null, c = e === e, d = nt(e), m = t !== r, V = t === null, w = t === t, M = nt(t);
          if (!V && !M && !d && e > t || d && m && w && !V && !M || o && m && w || !i && w || !c)
            return 1;
          if (!o && !d && !M && e < t || M && i && c && !o && !d || V && i && c || !m && c || !w)
            return -1;
        }
        return 0;
      }
      function h1(e, t, i) {
        for (var o = -1, c = e.criteria, d = t.criteria, m = c.length, V = i.length; ++o < m; ) {
          var w = qc(c[o], d[o]);
          if (w) {
            if (o >= V)
              return w;
            var M = i[o];
            return w * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Kc(e, t, i, o) {
        for (var c = -1, d = e.length, m = i.length, V = -1, w = t.length, M = Ne(d - m, 0), Z = U(w + M), J = !o; ++V < w; )
          Z[V] = t[V];
        for (; ++c < m; )
          (J || c < d) && (Z[i[c]] = e[c]);
        for (; M--; )
          Z[V++] = e[c++];
        return Z;
      }
      function $c(e, t, i, o) {
        for (var c = -1, d = e.length, m = -1, V = i.length, w = -1, M = t.length, Z = Ne(d - V, 0), J = U(Z + M), E = !o; ++c < Z; )
          J[c] = e[c];
        for (var x = c; ++w < M; )
          J[x + w] = t[w];
        for (; ++m < V; )
          (E || c < d) && (J[x + i[m]] = e[c++]);
        return J;
      }
      function Xe(e, t) {
        var i = -1, o = e.length;
        for (t || (t = U(o)); ++i < o; )
          t[i] = e[i];
        return t;
      }
      function kt(e, t, i, o) {
        var c = !i;
        i || (i = {});
        for (var d = -1, m = t.length; ++d < m; ) {
          var V = t[d], w = o ? o(i[V], e[V], V, i, e) : r;
          w === r && (w = e[V]), c ? At(i, V, w) : Fr(i, V, w);
        }
        return i;
      }
      function p1(e, t) {
        return kt(e, zo(e), t);
      }
      function m1(e, t) {
        return kt(e, fu(e), t);
      }
      function Gi(e, t) {
        return function(i, o) {
          var c = I(i) ? Um : CV, d = t ? t() : {};
          return c(i, e, O(o, 2), d);
        };
      }
      function jn(e) {
        return X(function(t, i) {
          var o = -1, c = i.length, d = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : r, m && Ye(i[0], i[1], m) && (d = c < 3 ? r : d, c = 1), t = oe(t); ++o < c; ) {
            var V = i[o];
            V && e(t, V, o, d);
          }
          return t;
        });
      }
      function eu(e, t) {
        return function(i, o) {
          if (i == null)
            return i;
          if (!_e(i))
            return e(i, o);
          for (var c = i.length, d = t ? c : -1, m = oe(i); (t ? d-- : ++d < c) && o(m[d], d, m) !== !1; )
            ;
          return i;
        };
      }
      function tu(e) {
        return function(t, i, o) {
          for (var c = -1, d = oe(t), m = o(t), V = m.length; V--; ) {
            var w = m[e ? V : ++c];
            if (i(d[w], w, d) === !1)
              break;
          }
          return t;
        };
      }
      function V1(e, t, i) {
        var o = t & D, c = Br(e);
        function d() {
          var m = this && this !== Ee && this instanceof d ? c : e;
          return m.apply(o ? i : this, arguments);
        }
        return d;
      }
      function nu(e) {
        return function(t) {
          t = ne(t);
          var i = On(t) ? vt(t) : r, o = i ? i[0] : t.charAt(0), c = i ? nn(i, 1).join("") : t.slice(1);
          return o[e]() + c;
        };
      }
      function Xn(e) {
        return function(t) {
          return io(ed($u(t).replace(om, "")), e, "");
        };
      }
      function Br(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var i = Pn(e.prototype), o = e.apply(i, t);
          return ue(o) ? o : i;
        };
      }
      function T1(e, t, i) {
        var o = Br(e);
        function c() {
          for (var d = arguments.length, m = U(d), V = d, w = _n(c); V--; )
            m[V] = arguments[V];
          var M = d < 3 && m[0] !== w && m[d - 1] !== w ? [] : qt(m, w);
          if (d -= M.length, d < i)
            return su(
              e,
              t,
              Yi,
              c.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - d
            );
          var Z = this && this !== Ee && this instanceof c ? o : e;
          return $e(Z, this, m);
        }
        return c;
      }
      function ru(e) {
        return function(t, i, o) {
          var c = oe(t);
          if (!_e(t)) {
            var d = O(i, 3);
            t = Me(t), i = function(V) {
              return d(c[V], V, c);
            };
          }
          var m = e(t, i, o);
          return m > -1 ? c[d ? t[m] : m] : r;
        };
      }
      function iu(e) {
        return Bt(function(t) {
          var i = t.length, o = i, c = ut.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var d = t[o];
            if (typeof d != "function")
              throw new ct(h);
            if (c && !m && ji(d) == "wrapper")
              var m = new ut([], !0);
          }
          for (o = m ? o : i; ++o < i; ) {
            d = t[o];
            var V = ji(d), w = V == "wrapper" ? Qo(d) : r;
            w && Yo(w[0]) && w[1] == ($ | W | k | L) && !w[4].length && w[9] == 1 ? m = m[ji(w[0])].apply(m, w[3]) : m = d.length == 1 && Yo(d) ? m[V]() : m.thru(d);
          }
          return function() {
            var M = arguments, Z = M[0];
            if (m && M.length == 1 && I(Z))
              return m.plant(Z).value();
            for (var J = 0, E = i ? t[J].apply(this, M) : Z; ++J < i; )
              E = t[J].call(this, E);
            return E;
          };
        });
      }
      function Yi(e, t, i, o, c, d, m, V, w, M) {
        var Z = t & $, J = t & D, E = t & A, x = t & (W | H), z = t & xe, j = E ? r : Br(e);
        function G() {
          for (var q = arguments.length, ee = U(q), rt = q; rt--; )
            ee[rt] = arguments[rt];
          if (x)
            var Ie = _n(G), it = bm(ee, Ie);
          if (o && (ee = Kc(ee, o, c, x)), d && (ee = $c(ee, d, m, x)), q -= it, x && q < M) {
            var Te = qt(ee, Ie);
            return su(
              e,
              t,
              Yi,
              G.placeholder,
              i,
              ee,
              Te,
              V,
              w,
              M - q
            );
          }
          var Rt = J ? i : this, Ot = E ? Rt[e] : e;
          return q = ee.length, V ? ee = C1(ee, V) : z && q > 1 && ee.reverse(), Z && w < q && (ee.length = w), this && this !== Ee && this instanceof G && (Ot = j || Br(Ot)), Ot.apply(Rt, ee);
        }
        return G;
      }
      function au(e, t) {
        return function(i, o) {
          return HV(i, e, t(o), {});
        };
      }
      function Ii(e, t) {
        return function(i, o) {
          var c;
          if (i === r && o === r)
            return t;
          if (i !== r && (c = i), o !== r) {
            if (c === r)
              return o;
            typeof i == "string" || typeof o == "string" ? (i = tt(i), o = tt(o)) : (i = Ic(i), o = Ic(o)), c = e(i, o);
          }
          return c;
        };
      }
      function xo(e) {
        return Bt(function(t) {
          return t = ce(t, et(O())), X(function(i) {
            var o = this;
            return e(t, function(c) {
              return $e(c, o, i);
            });
          });
        });
      }
      function Hi(e, t) {
        t = t === r ? " " : tt(t);
        var i = t.length;
        if (i < 2)
          return i ? yo(t, e) : t;
        var o = yo(t, Fi(e / zn(t)));
        return On(t) ? nn(vt(o), 0, e).join("") : o.slice(0, e);
      }
      function v1(e, t, i, o) {
        var c = t & D, d = Br(e);
        function m() {
          for (var V = -1, w = arguments.length, M = -1, Z = o.length, J = U(Z + w), E = this && this !== Ee && this instanceof m ? d : e; ++M < Z; )
            J[M] = o[M];
          for (; w--; )
            J[M++] = arguments[++V];
          return $e(E, c ? i : this, J);
        }
        return m;
      }
      function ou(e) {
        return function(t, i, o) {
          return o && typeof o != "number" && Ye(t, i, o) && (i = o = r), t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), o = o === r ? t < i ? 1 : -1 : Qt(o), r1(t, i, o, e);
        };
      }
      function Pi(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = pt(t), i = pt(i)), e(t, i);
        };
      }
      function su(e, t, i, o, c, d, m, V, w, M) {
        var Z = t & W, J = Z ? m : r, E = Z ? r : m, x = Z ? d : r, z = Z ? r : d;
        t |= Z ? k : _, t &= ~(Z ? _ : k), t & Q || (t &= ~(D | A));
        var j = [
          e,
          t,
          c,
          x,
          J,
          z,
          E,
          V,
          w,
          M
        ], G = i.apply(r, j);
        return Yo(e) && wu(G, j), G.placeholder = o, Uu(G, e, t);
      }
      function Bo(e) {
        var t = Re[e];
        return function(i, o) {
          if (i = pt(i), o = o == null ? 0 : Be(P(o), 292), o && Uc(i)) {
            var c = (ne(i) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + o));
            return c = (ne(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - o));
          }
          return t(i);
        };
      }
      var w1 = In && 1 / Ri(new In([, -0]))[1] == be ? function(e) {
        return new In(e);
      } : is;
      function lu(e) {
        return function(t) {
          var i = Ce(t);
          return i == Vt ? fo(t) : i == Tt ? Bm(t) : ym(t, e(t));
        };
      }
      function xt(e, t, i, o, c, d, m, V) {
        var w = t & A;
        if (!w && typeof e != "function")
          throw new ct(h);
        var M = o ? o.length : 0;
        if (M || (t &= ~(k | _), o = c = r), m = m === r ? m : Ne(P(m), 0), V = V === r ? V : P(V), M -= c ? c.length : 0, t & _) {
          var Z = o, J = c;
          o = c = r;
        }
        var E = w ? r : Qo(e), x = [
          e,
          t,
          i,
          o,
          c,
          Z,
          J,
          d,
          m,
          V
        ];
        if (E && A1(x, E), e = x[0], t = x[1], i = x[2], o = x[3], c = x[4], V = x[9] = x[9] === r ? w ? 0 : e.length : Ne(x[9] - M, 0), !V && t & (W | H) && (t &= ~(W | H)), !t || t == D)
          var z = V1(e, t, i);
        else
          t == W || t == H ? z = T1(e, t, V) : (t == k || t == (D | k)) && !c.length ? z = v1(e, t, i, o) : z = Yi.apply(r, x);
        var j = E ? Gc : wu;
        return Uu(j(z, x), e, t);
      }
      function cu(e, t, i, o) {
        return e === r || Ut(e, Yn[i]) && !re.call(o, i) ? t : e;
      }
      function uu(e, t, i, o, c, d) {
        return ue(e) && ue(t) && (d.set(t, e), Qi(e, t, r, uu, d), d.delete(t)), e;
      }
      function U1(e) {
        return Qr(e) ? r : e;
      }
      function du(e, t, i, o, c, d) {
        var m = i & F, V = e.length, w = t.length;
        if (V != w && !(m && w > V))
          return !1;
        var M = d.get(e), Z = d.get(t);
        if (M && Z)
          return M == t && Z == e;
        var J = -1, E = !0, x = i & C ? new vn() : r;
        for (d.set(e, t), d.set(t, e); ++J < V; ) {
          var z = e[J], j = t[J];
          if (o)
            var G = m ? o(j, z, J, t, e, d) : o(z, j, J, e, t, d);
          if (G !== r) {
            if (G)
              continue;
            E = !1;
            break;
          }
          if (x) {
            if (!ao(t, function(q, ee) {
              if (!Zr(x, ee) && (z === q || c(z, q, i, o, d)))
                return x.push(ee);
            })) {
              E = !1;
              break;
            }
          } else if (!(z === j || c(z, j, i, o, d))) {
            E = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), E;
      }
      function R1(e, t, i, o, c, d, m) {
        switch (i) {
          case Cn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Mr:
            return !(e.byteLength != t.byteLength || !d(new ki(e), new ki(t)));
          case vr:
          case wr:
          case Ur:
            return Ut(+e, +t);
          case hi:
            return e.name == t.name && e.message == t.message;
          case Rr:
          case Nr:
            return e == t + "";
          case Vt:
            var V = fo;
          case Tt:
            var w = o & F;
            if (V || (V = Ri), e.size != t.size && !w)
              return !1;
            var M = m.get(e);
            if (M)
              return M == t;
            o |= C, m.set(e, t);
            var Z = du(V(e), V(t), o, c, d, m);
            return m.delete(e), Z;
          case mi:
            if (Er)
              return Er.call(e) == Er.call(t);
        }
        return !1;
      }
      function N1(e, t, i, o, c, d) {
        var m = i & F, V = Co(e), w = V.length, M = Co(t), Z = M.length;
        if (w != Z && !m)
          return !1;
        for (var J = w; J--; ) {
          var E = V[J];
          if (!(m ? E in t : re.call(t, E)))
            return !1;
        }
        var x = d.get(e), z = d.get(t);
        if (x && z)
          return x == t && z == e;
        var j = !0;
        d.set(e, t), d.set(t, e);
        for (var G = m; ++J < w; ) {
          E = V[J];
          var q = e[E], ee = t[E];
          if (o)
            var rt = m ? o(ee, q, E, t, e, d) : o(q, ee, E, e, t, d);
          if (!(rt === r ? q === ee || c(q, ee, i, o, d) : rt)) {
            j = !1;
            break;
          }
          G || (G = E == "constructor");
        }
        if (j && !G) {
          var Ie = e.constructor, it = t.constructor;
          Ie != it && "constructor" in e && "constructor" in t && !(typeof Ie == "function" && Ie instanceof Ie && typeof it == "function" && it instanceof it) && (j = !1);
        }
        return d.delete(e), d.delete(t), j;
      }
      function Bt(e) {
        return Ho(Tu(e, r, Ju), e + "");
      }
      function Co(e) {
        return Fc(e, Me, zo);
      }
      function Do(e) {
        return Fc(e, Le, fu);
      }
      var Qo = Wi ? function(e) {
        return Wi.get(e);
      } : is;
      function ji(e) {
        for (var t = e.name + "", i = Hn[t], o = re.call(Hn, t) ? i.length : 0; o--; ) {
          var c = i[o], d = c.func;
          if (d == null || d == e)
            return c.name;
        }
        return t;
      }
      function _n(e) {
        var t = re.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function O() {
        var e = u.iteratee || ns;
        return e = e === ns ? Ac : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Xi(e, t) {
        var i = e.__data__;
        return E1(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function Oo(e) {
        for (var t = Me(e), i = t.length; i--; ) {
          var o = t[i], c = e[o];
          t[i] = [o, c, mu(c)];
        }
        return t;
      }
      function Rn(e, t) {
        var i = Wm(e, t);
        return Wc(i) ? i : r;
      }
      function g1(e) {
        var t = re.call(e, Vn), i = e[Vn];
        try {
          e[Vn] = r;
          var o = !0;
        } catch {
        }
        var c = Zi.call(e);
        return o && (t ? e[Vn] = i : delete e[Vn]), c;
      }
      var zo = po ? function(e) {
        return e == null ? [] : (e = oe(e), _t(po(e), function(t) {
          return vc.call(e, t);
        }));
      } : as, fu = po ? function(e) {
        for (var t = []; e; )
          Lt(t, zo(e)), e = yi(e);
        return t;
      } : as, Ce = Ge;
      (mo && Ce(new mo(new ArrayBuffer(1))) != Cn || kr && Ce(new kr()) != Vt || Vo && Ce(Vo.resolve()) != yl || In && Ce(new In()) != Tt || yr && Ce(new yr()) != gr) && (Ce = function(e) {
        var t = Ge(e), i = t == Ft ? e.constructor : r, o = i ? Nn(i) : "";
        if (o)
          switch (o) {
            case aV:
              return Cn;
            case oV:
              return Vt;
            case sV:
              return yl;
            case lV:
              return Tt;
            case cV:
              return gr;
          }
        return t;
      });
      function M1(e, t, i) {
        for (var o = -1, c = i.length; ++o < c; ) {
          var d = i[o], m = d.size;
          switch (d.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              t -= m;
              break;
            case "take":
              t = Be(t, e + m);
              break;
            case "takeRight":
              e = Ne(e, t - m);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Z1(e) {
        var t = e.match(Fp);
        return t ? t[1].split(Sp) : [];
      }
      function hu(e, t, i) {
        t = tn(t, e);
        for (var o = -1, c = t.length, d = !1; ++o < c; ) {
          var m = yt(t[o]);
          if (!(d = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return d || ++o != c ? d : (c = e == null ? 0 : e.length, !!c && ta(c) && Ct(m, c) && (I(e) || gn(e)));
      }
      function J1(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && re.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function pu(e) {
        return typeof e.constructor == "function" && !Cr(e) ? Pn(yi(e)) : {};
      }
      function k1(e, t, i) {
        var o = e.constructor;
        switch (t) {
          case Mr:
            return Ao(e);
          case vr:
          case wr:
            return new o(+e);
          case Cn:
            return u1(e, i);
          case Qa:
          case Oa:
          case za:
          case Ga:
          case Ya:
          case Ia:
          case Ha:
          case Pa:
          case ja:
            return Lc(e, i);
          case Vt:
            return new o();
          case Ur:
          case Nr:
            return new o(e);
          case Rr:
            return d1(e);
          case Tt:
            return new o();
          case mi:
            return f1(e);
        }
      }
      function y1(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var o = i - 1;
        return t[o] = (i > 1 ? "& " : "") + t[o], t = t.join(i > 2 ? ", " : " "), e.replace(Ep, `{
/* [wrapped with ` + t + `] */
`);
      }
      function b1(e) {
        return I(e) || gn(e) || !!(wc && e && e[wc]);
      }
      function Ct(e, t) {
        var i = typeof e;
        return t = t == null ? ze : t, !!t && (i == "number" || i != "symbol" && zp.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ye(e, t, i) {
        if (!ue(i))
          return !1;
        var o = typeof t;
        return (o == "number" ? _e(i) && Ct(t, i.length) : o == "string" && t in i) ? Ut(i[t], e) : !1;
      }
      function Go(e, t) {
        if (I(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || nt(e) ? !0 : Jp.test(e) || !Zp.test(e) || t != null && e in oe(t);
      }
      function E1(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Yo(e) {
        var t = ji(e), i = u[t];
        if (typeof i != "function" || !(t in K.prototype))
          return !1;
        if (e === i)
          return !0;
        var o = Qo(i);
        return !!o && e === o[0];
      }
      function F1(e) {
        return !!mc && mc in e;
      }
      var S1 = gi ? Dt : os;
      function Cr(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || Yn;
        return e === i;
      }
      function mu(e) {
        return e === e && !ue(e);
      }
      function Vu(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in oe(i));
        };
      }
      function W1(e) {
        var t = $i(e, function(o) {
          return i.size === N && i.clear(), o;
        }), i = t.cache;
        return t;
      }
      function A1(e, t) {
        var i = e[1], o = t[1], c = i | o, d = c < (D | A | $), m = o == $ && i == W || o == $ && i == L && e[7].length <= t[8] || o == ($ | L) && t[7].length <= t[8] && i == W;
        if (!(d || m))
          return e;
        o & D && (e[2] = t[2], c |= i & D ? 0 : Q);
        var V = t[3];
        if (V) {
          var w = e[3];
          e[3] = w ? Kc(w, V, t[4]) : V, e[4] = w ? qt(e[3], g) : t[4];
        }
        return V = t[5], V && (w = e[5], e[5] = w ? $c(w, V, t[6]) : V, e[6] = w ? qt(e[5], g) : t[6]), V = t[7], V && (e[7] = V), o & $ && (e[8] = e[8] == null ? t[8] : Be(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function x1(e) {
        var t = [];
        if (e != null)
          for (var i in oe(e))
            t.push(i);
        return t;
      }
      function B1(e) {
        return Zi.call(e);
      }
      function Tu(e, t, i) {
        return t = Ne(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, c = -1, d = Ne(o.length - t, 0), m = U(d); ++c < d; )
            m[c] = o[t + c];
          c = -1;
          for (var V = U(t + 1); ++c < t; )
            V[c] = o[c];
          return V[t] = i(m), $e(e, this, V);
        };
      }
      function vu(e, t) {
        return t.length < 2 ? e : Un(e, ft(t, 0, -1));
      }
      function C1(e, t) {
        for (var i = e.length, o = Be(t.length, i), c = Xe(e); o--; ) {
          var d = t[o];
          e[o] = Ct(d, i) ? c[d] : r;
        }
        return e;
      }
      function Io(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var wu = Ru(Gc), Dr = Km || function(e, t) {
        return Ee.setTimeout(e, t);
      }, Ho = Ru(o1);
      function Uu(e, t, i) {
        var o = t + "";
        return Ho(e, y1(o, D1(Z1(o), i)));
      }
      function Ru(e) {
        var t = 0, i = 0;
        return function() {
          var o = nV(), c = me - (o - i);
          if (i = o, c > 0) {
            if (++t >= fe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function _i(e, t) {
        var i = -1, o = e.length, c = o - 1;
        for (t = t === r ? o : t; ++i < t; ) {
          var d = ko(i, c), m = e[d];
          e[d] = e[i], e[i] = m;
        }
        return e.length = t, e;
      }
      var Nu = W1(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(kp, function(i, o, c, d) {
          t.push(c ? d.replace(xp, "$1") : o || i);
        }), t;
      });
      function yt(e) {
        if (typeof e == "string" || nt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -be ? "-0" : t;
      }
      function Nn(e) {
        if (e != null) {
          try {
            return Mi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function D1(e, t) {
        return lt(dp, function(i) {
          var o = "_." + i[0];
          t & i[1] && !wi(e, o) && e.push(o);
        }), e.sort();
      }
      function gu(e) {
        if (e instanceof K)
          return e.clone();
        var t = new ut(e.__wrapped__, e.__chain__);
        return t.__actions__ = Xe(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Q1(e, t, i) {
        (i ? Ye(e, t, i) : t === r) ? t = 1 : t = Ne(P(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var c = 0, d = 0, m = U(Fi(o / t)); c < o; )
          m[d++] = ft(e, c, c += t);
        return m;
      }
      function O1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = 0, c = []; ++t < i; ) {
          var d = e[t];
          d && (c[o++] = d);
        }
        return c;
      }
      function z1() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = U(e - 1), i = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Lt(I(i) ? Xe(i) : [i], Fe(t, 1));
      }
      var G1 = X(function(e, t) {
        return Ve(e) ? Sr(e, Fe(t, 1, Ve, !0)) : [];
      }), Y1 = X(function(e, t) {
        var i = ht(t);
        return Ve(i) && (i = r), Ve(e) ? Sr(e, Fe(t, 1, Ve, !0), O(i, 2)) : [];
      }), I1 = X(function(e, t) {
        var i = ht(t);
        return Ve(i) && (i = r), Ve(e) ? Sr(e, Fe(t, 1, Ve, !0), r, i) : [];
      });
      function H1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), ft(e, t < 0 ? 0 : t, o)) : [];
      }
      function P1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), t = o - t, ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function j1(e, t) {
        return e && e.length ? zi(e, O(t, 3), !0, !0) : [];
      }
      function X1(e, t) {
        return e && e.length ? zi(e, O(t, 3), !0) : [];
      }
      function _1(e, t, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && Ye(e, t, i) && (i = 0, o = c), zV(e, t, i, o)) : [];
      }
      function Mu(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Ne(o + c, 0)), Ui(e, O(t, 3), c);
      }
      function Zu(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o - 1;
        return i !== r && (c = P(i), c = i < 0 ? Ne(o + c, 0) : Be(c, o - 1)), Ui(e, O(t, 3), c, !0);
      }
      function Ju(e) {
        var t = e == null ? 0 : e.length;
        return t ? Fe(e, 1) : [];
      }
      function L1(e) {
        var t = e == null ? 0 : e.length;
        return t ? Fe(e, be) : [];
      }
      function q1(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : P(t), Fe(e, t)) : [];
      }
      function K1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = {}; ++t < i; ) {
          var c = e[t];
          o[c[0]] = c[1];
        }
        return o;
      }
      function ku(e) {
        return e && e.length ? e[0] : r;
      }
      function $1(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Ne(o + c, 0)), Qn(e, t, c);
      }
      function e0(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, 0, -1) : [];
      }
      var t0 = X(function(e) {
        var t = ce(e, So);
        return t.length && t[0] === e[0] ? No(t) : [];
      }), n0 = X(function(e) {
        var t = ht(e), i = ce(e, So);
        return t === ht(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? No(i, O(t, 2)) : [];
      }), r0 = X(function(e) {
        var t = ht(e), i = ce(e, So);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? No(i, r, t) : [];
      });
      function i0(e, t) {
        return e == null ? "" : eV.call(e, t);
      }
      function ht(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function a0(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o;
        return i !== r && (c = P(i), c = c < 0 ? Ne(o + c, 0) : Be(c, o - 1)), t === t ? Dm(e, t, c) : Ui(e, sc, c, !0);
      }
      function o0(e, t) {
        return e && e.length ? Dc(e, P(t)) : r;
      }
      var s0 = X(yu);
      function yu(e, t) {
        return e && e.length && t && t.length ? Jo(e, t) : e;
      }
      function l0(e, t, i) {
        return e && e.length && t && t.length ? Jo(e, t, O(i, 2)) : e;
      }
      function c0(e, t, i) {
        return e && e.length && t && t.length ? Jo(e, t, r, i) : e;
      }
      var u0 = Bt(function(e, t) {
        var i = e == null ? 0 : e.length, o = vo(e, t);
        return zc(e, ce(t, function(c) {
          return Ct(c, i) ? +c : c;
        }).sort(qc)), o;
      });
      function d0(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var o = -1, c = [], d = e.length;
        for (t = O(t, 3); ++o < d; ) {
          var m = e[o];
          t(m, o, e) && (i.push(m), c.push(o));
        }
        return zc(e, c), i;
      }
      function Po(e) {
        return e == null ? e : iV.call(e);
      }
      function f0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i && typeof i != "number" && Ye(e, t, i) ? (t = 0, i = o) : (t = t == null ? 0 : P(t), i = i === r ? o : P(i)), ft(e, t, i)) : [];
      }
      function h0(e, t) {
        return Oi(e, t);
      }
      function p0(e, t, i) {
        return bo(e, t, O(i, 2));
      }
      function m0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Oi(e, t);
          if (o < i && Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function V0(e, t) {
        return Oi(e, t, !0);
      }
      function T0(e, t, i) {
        return bo(e, t, O(i, 2), !0);
      }
      function v0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Oi(e, t, !0) - 1;
          if (Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function w0(e) {
        return e && e.length ? Yc(e) : [];
      }
      function U0(e, t) {
        return e && e.length ? Yc(e, O(t, 2)) : [];
      }
      function R0(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, 1, t) : [];
      }
      function N0(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : P(t), ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function g0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), t = o - t, ft(e, t < 0 ? 0 : t, o)) : [];
      }
      function M0(e, t) {
        return e && e.length ? zi(e, O(t, 3), !1, !0) : [];
      }
      function Z0(e, t) {
        return e && e.length ? zi(e, O(t, 3)) : [];
      }
      var J0 = X(function(e) {
        return en(Fe(e, 1, Ve, !0));
      }), k0 = X(function(e) {
        var t = ht(e);
        return Ve(t) && (t = r), en(Fe(e, 1, Ve, !0), O(t, 2));
      }), y0 = X(function(e) {
        var t = ht(e);
        return t = typeof t == "function" ? t : r, en(Fe(e, 1, Ve, !0), r, t);
      });
      function b0(e) {
        return e && e.length ? en(e) : [];
      }
      function E0(e, t) {
        return e && e.length ? en(e, O(t, 2)) : [];
      }
      function F0(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? en(e, r, t) : [];
      }
      function jo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = _t(e, function(i) {
          if (Ve(i))
            return t = Ne(i.length, t), !0;
        }), co(t, function(i) {
          return ce(e, oo(i));
        });
      }
      function bu(e, t) {
        if (!(e && e.length))
          return [];
        var i = jo(e);
        return t == null ? i : ce(i, function(o) {
          return $e(t, r, o);
        });
      }
      var S0 = X(function(e, t) {
        return Ve(e) ? Sr(e, t) : [];
      }), W0 = X(function(e) {
        return Fo(_t(e, Ve));
      }), A0 = X(function(e) {
        var t = ht(e);
        return Ve(t) && (t = r), Fo(_t(e, Ve), O(t, 2));
      }), x0 = X(function(e) {
        var t = ht(e);
        return t = typeof t == "function" ? t : r, Fo(_t(e, Ve), r, t);
      }), B0 = X(jo);
      function C0(e, t) {
        return jc(e || [], t || [], Fr);
      }
      function D0(e, t) {
        return jc(e || [], t || [], xr);
      }
      var Q0 = X(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, bu(e, i);
      });
      function Eu(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function O0(e, t) {
        return t(e), e;
      }
      function Li(e, t) {
        return t(e);
      }
      var z0 = Bt(function(e) {
        var t = e.length, i = t ? e[0] : 0, o = this.__wrapped__, c = function(d) {
          return vo(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof K) || !Ct(i) ? this.thru(c) : (o = o.slice(i, +i + (t ? 1 : 0)), o.__actions__.push({
          func: Li,
          args: [c],
          thisArg: r
        }), new ut(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(r), d;
        }));
      });
      function G0() {
        return Eu(this);
      }
      function Y0() {
        return new ut(this.value(), this.__chain__);
      }
      function I0() {
        this.__values__ === r && (this.__values__ = Iu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function H0() {
        return this;
      }
      function P0(e) {
        for (var t, i = this; i instanceof xi; ) {
          var o = gu(i);
          o.__index__ = 0, o.__values__ = r, t ? c.__wrapped__ = o : t = o;
          var c = o;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function j0() {
        var e = this.__wrapped__;
        if (e instanceof K) {
          var t = e;
          return this.__actions__.length && (t = new K(this)), t = t.reverse(), t.__actions__.push({
            func: Li,
            args: [Po],
            thisArg: r
          }), new ut(t, this.__chain__);
        }
        return this.thru(Po);
      }
      function X0() {
        return Pc(this.__wrapped__, this.__actions__);
      }
      var _0 = Gi(function(e, t, i) {
        re.call(e, i) ? ++e[i] : At(e, i, 1);
      });
      function L0(e, t, i) {
        var o = I(e) ? ac : OV;
        return i && Ye(e, t, i) && (t = r), o(e, O(t, 3));
      }
      function q0(e, t) {
        var i = I(e) ? _t : bc;
        return i(e, O(t, 3));
      }
      var K0 = ru(Mu), $0 = ru(Zu);
      function eT(e, t) {
        return Fe(qi(e, t), 1);
      }
      function tT(e, t) {
        return Fe(qi(e, t), be);
      }
      function nT(e, t, i) {
        return i = i === r ? 1 : P(i), Fe(qi(e, t), i);
      }
      function Fu(e, t) {
        var i = I(e) ? lt : $t;
        return i(e, O(t, 3));
      }
      function Su(e, t) {
        var i = I(e) ? Rm : yc;
        return i(e, O(t, 3));
      }
      var rT = Gi(function(e, t, i) {
        re.call(e, i) ? e[i].push(t) : At(e, i, [t]);
      });
      function iT(e, t, i, o) {
        e = _e(e) ? e : qn(e), i = i && !o ? P(i) : 0;
        var c = e.length;
        return i < 0 && (i = Ne(c + i, 0)), na(e) ? i <= c && e.indexOf(t, i) > -1 : !!c && Qn(e, t, i) > -1;
      }
      var aT = X(function(e, t, i) {
        var o = -1, c = typeof t == "function", d = _e(e) ? U(e.length) : [];
        return $t(e, function(m) {
          d[++o] = c ? $e(t, m, i) : Wr(m, t, i);
        }), d;
      }), oT = Gi(function(e, t, i) {
        At(e, i, t);
      });
      function qi(e, t) {
        var i = I(e) ? ce : xc;
        return i(e, O(t, 3));
      }
      function sT(e, t, i, o) {
        return e == null ? [] : (I(t) || (t = t == null ? [] : [t]), i = o ? r : i, I(i) || (i = i == null ? [] : [i]), Qc(e, t, i));
      }
      var lT = Gi(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function cT(e, t, i) {
        var o = I(e) ? io : cc, c = arguments.length < 3;
        return o(e, O(t, 4), i, c, $t);
      }
      function uT(e, t, i) {
        var o = I(e) ? Nm : cc, c = arguments.length < 3;
        return o(e, O(t, 4), i, c, yc);
      }
      function dT(e, t) {
        var i = I(e) ? _t : bc;
        return i(e, ea(O(t, 3)));
      }
      function fT(e) {
        var t = I(e) ? Mc : i1;
        return t(e);
      }
      function hT(e, t, i) {
        (i ? Ye(e, t, i) : t === r) ? t = 1 : t = P(t);
        var o = I(e) ? xV : a1;
        return o(e, t);
      }
      function pT(e) {
        var t = I(e) ? BV : s1;
        return t(e);
      }
      function mT(e) {
        if (e == null)
          return 0;
        if (_e(e))
          return na(e) ? zn(e) : e.length;
        var t = Ce(e);
        return t == Vt || t == Tt ? e.size : Mo(e).length;
      }
      function VT(e, t, i) {
        var o = I(e) ? ao : l1;
        return i && Ye(e, t, i) && (t = r), o(e, O(t, 3));
      }
      var TT = X(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && Ye(e, t[0], t[1]) ? t = [] : i > 2 && Ye(t[0], t[1], t[2]) && (t = [t[0]]), Qc(e, Fe(t, 1), []);
      }), Ki = qm || function() {
        return Ee.Date.now();
      };
      function vT(e, t) {
        if (typeof t != "function")
          throw new ct(h);
        return e = P(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Wu(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, xt(e, $, r, r, r, r, t);
      }
      function Au(e, t) {
        var i;
        if (typeof t != "function")
          throw new ct(h);
        return e = P(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var Xo = X(function(e, t, i) {
        var o = D;
        if (i.length) {
          var c = qt(i, _n(Xo));
          o |= k;
        }
        return xt(e, o, t, i, c);
      }), xu = X(function(e, t, i) {
        var o = D | A;
        if (i.length) {
          var c = qt(i, _n(xu));
          o |= k;
        }
        return xt(t, o, e, i, c);
      });
      function Bu(e, t, i) {
        t = i ? r : t;
        var o = xt(e, W, r, r, r, r, r, t);
        return o.placeholder = Bu.placeholder, o;
      }
      function Cu(e, t, i) {
        t = i ? r : t;
        var o = xt(e, H, r, r, r, r, r, t);
        return o.placeholder = Cu.placeholder, o;
      }
      function Du(e, t, i) {
        var o, c, d, m, V, w, M = 0, Z = !1, J = !1, E = !0;
        if (typeof e != "function")
          throw new ct(h);
        t = pt(t) || 0, ue(i) && (Z = !!i.leading, J = "maxWait" in i, d = J ? Ne(pt(i.maxWait) || 0, t) : d, E = "trailing" in i ? !!i.trailing : E);
        function x(Te) {
          var Rt = o, Ot = c;
          return o = c = r, M = Te, m = e.apply(Ot, Rt), m;
        }
        function z(Te) {
          return M = Te, V = Dr(q, t), Z ? x(Te) : m;
        }
        function j(Te) {
          var Rt = Te - w, Ot = Te - M, rd = t - Rt;
          return J ? Be(rd, d - Ot) : rd;
        }
        function G(Te) {
          var Rt = Te - w, Ot = Te - M;
          return w === r || Rt >= t || Rt < 0 || J && Ot >= d;
        }
        function q() {
          var Te = Ki();
          if (G(Te))
            return ee(Te);
          V = Dr(q, j(Te));
        }
        function ee(Te) {
          return V = r, E && o ? x(Te) : (o = c = r, m);
        }
        function rt() {
          V !== r && Xc(V), M = 0, o = w = c = V = r;
        }
        function Ie() {
          return V === r ? m : ee(Ki());
        }
        function it() {
          var Te = Ki(), Rt = G(Te);
          if (o = arguments, c = this, w = Te, Rt) {
            if (V === r)
              return z(w);
            if (J)
              return Xc(V), V = Dr(q, t), x(w);
          }
          return V === r && (V = Dr(q, t)), m;
        }
        return it.cancel = rt, it.flush = Ie, it;
      }
      var wT = X(function(e, t) {
        return kc(e, 1, t);
      }), UT = X(function(e, t, i) {
        return kc(e, pt(t) || 0, i);
      });
      function RT(e) {
        return xt(e, xe);
      }
      function $i(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new ct(h);
        var i = function() {
          var o = arguments, c = t ? t.apply(this, o) : o[0], d = i.cache;
          if (d.has(c))
            return d.get(c);
          var m = e.apply(this, o);
          return i.cache = d.set(c, m) || d, m;
        };
        return i.cache = new ($i.Cache || Wt)(), i;
      }
      $i.Cache = Wt;
      function ea(e) {
        if (typeof e != "function")
          throw new ct(h);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function NT(e) {
        return Au(2, e);
      }
      var gT = c1(function(e, t) {
        t = t.length == 1 && I(t[0]) ? ce(t[0], et(O())) : ce(Fe(t, 1), et(O()));
        var i = t.length;
        return X(function(o) {
          for (var c = -1, d = Be(o.length, i); ++c < d; )
            o[c] = t[c].call(this, o[c]);
          return $e(e, this, o);
        });
      }), _o = X(function(e, t) {
        var i = qt(t, _n(_o));
        return xt(e, k, r, t, i);
      }), Qu = X(function(e, t) {
        var i = qt(t, _n(Qu));
        return xt(e, _, r, t, i);
      }), MT = Bt(function(e, t) {
        return xt(e, L, r, r, r, t);
      });
      function ZT(e, t) {
        if (typeof e != "function")
          throw new ct(h);
        return t = t === r ? t : P(t), X(e, t);
      }
      function JT(e, t) {
        if (typeof e != "function")
          throw new ct(h);
        return t = t == null ? 0 : Ne(P(t), 0), X(function(i) {
          var o = i[t], c = nn(i, 0, t);
          return o && Lt(c, o), $e(e, this, c);
        });
      }
      function kT(e, t, i) {
        var o = !0, c = !0;
        if (typeof e != "function")
          throw new ct(h);
        return ue(i) && (o = "leading" in i ? !!i.leading : o, c = "trailing" in i ? !!i.trailing : c), Du(e, t, {
          leading: o,
          maxWait: t,
          trailing: c
        });
      }
      function yT(e) {
        return Wu(e, 1);
      }
      function bT(e, t) {
        return _o(Wo(t), e);
      }
      function ET() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return I(e) ? e : [e];
      }
      function FT(e) {
        return dt(e, B);
      }
      function ST(e, t) {
        return t = typeof t == "function" ? t : r, dt(e, B, t);
      }
      function WT(e) {
        return dt(e, b | B);
      }
      function AT(e, t) {
        return t = typeof t == "function" ? t : r, dt(e, b | B, t);
      }
      function xT(e, t) {
        return t == null || Jc(e, t, Me(t));
      }
      function Ut(e, t) {
        return e === t || e !== e && t !== t;
      }
      var BT = Pi(Ro), CT = Pi(function(e, t) {
        return e >= t;
      }), gn = Sc(function() {
        return arguments;
      }()) ? Sc : function(e) {
        return he(e) && re.call(e, "callee") && !vc.call(e, "callee");
      }, I = U.isArray, DT = $l ? et($l) : PV;
      function _e(e) {
        return e != null && ta(e.length) && !Dt(e);
      }
      function Ve(e) {
        return he(e) && _e(e);
      }
      function QT(e) {
        return e === !0 || e === !1 || he(e) && Ge(e) == vr;
      }
      var rn = $m || os, OT = ec ? et(ec) : jV;
      function zT(e) {
        return he(e) && e.nodeType === 1 && !Qr(e);
      }
      function GT(e) {
        if (e == null)
          return !0;
        if (_e(e) && (I(e) || typeof e == "string" || typeof e.splice == "function" || rn(e) || Ln(e) || gn(e)))
          return !e.length;
        var t = Ce(e);
        if (t == Vt || t == Tt)
          return !e.size;
        if (Cr(e))
          return !Mo(e).length;
        for (var i in e)
          if (re.call(e, i))
            return !1;
        return !0;
      }
      function YT(e, t) {
        return Ar(e, t);
      }
      function IT(e, t, i) {
        i = typeof i == "function" ? i : r;
        var o = i ? i(e, t) : r;
        return o === r ? Ar(e, t, r, i) : !!o;
      }
      function Lo(e) {
        if (!he(e))
          return !1;
        var t = Ge(e);
        return t == hi || t == hp || typeof e.message == "string" && typeof e.name == "string" && !Qr(e);
      }
      function HT(e) {
        return typeof e == "number" && Uc(e);
      }
      function Dt(e) {
        if (!ue(e))
          return !1;
        var t = Ge(e);
        return t == pi || t == kl || t == fp || t == mp;
      }
      function Ou(e) {
        return typeof e == "number" && e == P(e);
      }
      function ta(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ze;
      }
      function ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function he(e) {
        return e != null && typeof e == "object";
      }
      var zu = tc ? et(tc) : _V;
      function PT(e, t) {
        return e === t || go(e, t, Oo(t));
      }
      function jT(e, t, i) {
        return i = typeof i == "function" ? i : r, go(e, t, Oo(t), i);
      }
      function XT(e) {
        return Gu(e) && e != +e;
      }
      function _T(e) {
        if (S1(e))
          throw new Y(f);
        return Wc(e);
      }
      function LT(e) {
        return e === null;
      }
      function qT(e) {
        return e == null;
      }
      function Gu(e) {
        return typeof e == "number" || he(e) && Ge(e) == Ur;
      }
      function Qr(e) {
        if (!he(e) || Ge(e) != Ft)
          return !1;
        var t = yi(e);
        if (t === null)
          return !0;
        var i = re.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && Mi.call(i) == jm;
      }
      var qo = nc ? et(nc) : LV;
      function KT(e) {
        return Ou(e) && e >= -ze && e <= ze;
      }
      var Yu = rc ? et(rc) : qV;
      function na(e) {
        return typeof e == "string" || !I(e) && he(e) && Ge(e) == Nr;
      }
      function nt(e) {
        return typeof e == "symbol" || he(e) && Ge(e) == mi;
      }
      var Ln = ic ? et(ic) : KV;
      function $T(e) {
        return e === r;
      }
      function ev(e) {
        return he(e) && Ce(e) == gr;
      }
      function tv(e) {
        return he(e) && Ge(e) == Tp;
      }
      var nv = Pi(Zo), rv = Pi(function(e, t) {
        return e <= t;
      });
      function Iu(e) {
        if (!e)
          return [];
        if (_e(e))
          return na(e) ? vt(e) : Xe(e);
        if (Jr && e[Jr])
          return xm(e[Jr]());
        var t = Ce(e), i = t == Vt ? fo : t == Tt ? Ri : qn;
        return i(e);
      }
      function Qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = pt(e), e === be || e === -be) {
          var t = e < 0 ? -1 : 1;
          return t * Tr;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var t = Qt(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function Hu(e) {
        return e ? wn(P(e), 0, Zt) : 0;
      }
      function pt(e) {
        if (typeof e == "number")
          return e;
        if (nt(e))
          return di;
        if (ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = uc(e);
        var i = Dp.test(e);
        return i || Op.test(e) ? vm(e.slice(2), i ? 2 : 8) : Cp.test(e) ? di : +e;
      }
      function Pu(e) {
        return kt(e, Le(e));
      }
      function iv(e) {
        return e ? wn(P(e), -ze, ze) : e === 0 ? e : 0;
      }
      function ne(e) {
        return e == null ? "" : tt(e);
      }
      var av = jn(function(e, t) {
        if (Cr(t) || _e(t)) {
          kt(t, Me(t), e);
          return;
        }
        for (var i in t)
          re.call(t, i) && Fr(e, i, t[i]);
      }), ju = jn(function(e, t) {
        kt(t, Le(t), e);
      }), ra = jn(function(e, t, i, o) {
        kt(t, Le(t), e, o);
      }), ov = jn(function(e, t, i, o) {
        kt(t, Me(t), e, o);
      }), sv = Bt(vo);
      function lv(e, t) {
        var i = Pn(e);
        return t == null ? i : Zc(i, t);
      }
      var cv = X(function(e, t) {
        e = oe(e);
        var i = -1, o = t.length, c = o > 2 ? t[2] : r;
        for (c && Ye(t[0], t[1], c) && (o = 1); ++i < o; )
          for (var d = t[i], m = Le(d), V = -1, w = m.length; ++V < w; ) {
            var M = m[V], Z = e[M];
            (Z === r || Ut(Z, Yn[M]) && !re.call(e, M)) && (e[M] = d[M]);
          }
        return e;
      }), uv = X(function(e) {
        return e.push(r, uu), $e(Xu, r, e);
      });
      function dv(e, t) {
        return oc(e, O(t, 3), Jt);
      }
      function fv(e, t) {
        return oc(e, O(t, 3), Uo);
      }
      function hv(e, t) {
        return e == null ? e : wo(e, O(t, 3), Le);
      }
      function pv(e, t) {
        return e == null ? e : Ec(e, O(t, 3), Le);
      }
      function mv(e, t) {
        return e && Jt(e, O(t, 3));
      }
      function Vv(e, t) {
        return e && Uo(e, O(t, 3));
      }
      function Tv(e) {
        return e == null ? [] : Di(e, Me(e));
      }
      function vv(e) {
        return e == null ? [] : Di(e, Le(e));
      }
      function Ko(e, t, i) {
        var o = e == null ? r : Un(e, t);
        return o === r ? i : o;
      }
      function wv(e, t) {
        return e != null && hu(e, t, GV);
      }
      function $o(e, t) {
        return e != null && hu(e, t, YV);
      }
      var Uv = au(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = Zi.call(t)), e[t] = i;
      }, ts(qe)), Rv = au(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = Zi.call(t)), re.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, O), Nv = X(Wr);
      function Me(e) {
        return _e(e) ? gc(e) : Mo(e);
      }
      function Le(e) {
        return _e(e) ? gc(e, !0) : $V(e);
      }
      function gv(e, t) {
        var i = {};
        return t = O(t, 3), Jt(e, function(o, c, d) {
          At(i, t(o, c, d), o);
        }), i;
      }
      function Mv(e, t) {
        var i = {};
        return t = O(t, 3), Jt(e, function(o, c, d) {
          At(i, c, t(o, c, d));
        }), i;
      }
      var Zv = jn(function(e, t, i) {
        Qi(e, t, i);
      }), Xu = jn(function(e, t, i, o) {
        Qi(e, t, i, o);
      }), Jv = Bt(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var o = !1;
        t = ce(t, function(d) {
          return d = tn(d, e), o || (o = d.length > 1), d;
        }), kt(e, Do(e), i), o && (i = dt(i, b | y | B, U1));
        for (var c = t.length; c--; )
          Eo(i, t[c]);
        return i;
      });
      function kv(e, t) {
        return _u(e, ea(O(t)));
      }
      var yv = Bt(function(e, t) {
        return e == null ? {} : t1(e, t);
      });
      function _u(e, t) {
        if (e == null)
          return {};
        var i = ce(Do(e), function(o) {
          return [o];
        });
        return t = O(t), Oc(e, i, function(o, c) {
          return t(o, c[0]);
        });
      }
      function bv(e, t, i) {
        t = tn(t, e);
        var o = -1, c = t.length;
        for (c || (c = 1, e = r); ++o < c; ) {
          var d = e == null ? r : e[yt(t[o])];
          d === r && (o = c, d = i), e = Dt(d) ? d.call(e) : d;
        }
        return e;
      }
      function Ev(e, t, i) {
        return e == null ? e : xr(e, t, i);
      }
      function Fv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : xr(e, t, i, o);
      }
      var Lu = lu(Me), qu = lu(Le);
      function Sv(e, t, i) {
        var o = I(e), c = o || rn(e) || Ln(e);
        if (t = O(t, 4), i == null) {
          var d = e && e.constructor;
          c ? i = o ? new d() : [] : ue(e) ? i = Dt(d) ? Pn(yi(e)) : {} : i = {};
        }
        return (c ? lt : Jt)(e, function(m, V, w) {
          return t(i, m, V, w);
        }), i;
      }
      function Wv(e, t) {
        return e == null ? !0 : Eo(e, t);
      }
      function Av(e, t, i) {
        return e == null ? e : Hc(e, t, Wo(i));
      }
      function xv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Hc(e, t, Wo(i), o);
      }
      function qn(e) {
        return e == null ? [] : uo(e, Me(e));
      }
      function Bv(e) {
        return e == null ? [] : uo(e, Le(e));
      }
      function Cv(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = pt(i), i = i === i ? i : 0), t !== r && (t = pt(t), t = t === t ? t : 0), wn(pt(e), t, i);
      }
      function Dv(e, t, i) {
        return t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), e = pt(e), IV(e, t, i);
      }
      function Qv(e, t, i) {
        if (i && typeof i != "boolean" && Ye(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Qt(e), t === r ? (t = e, e = 0) : t = Qt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (i || e % 1 || t % 1) {
          var c = Rc();
          return Be(e + c * (t - e + Tm("1e-" + ((c + "").length - 1))), t);
        }
        return ko(e, t);
      }
      var Ov = Xn(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? Ku(t) : t);
      });
      function Ku(e) {
        return es(ne(e).toLowerCase());
      }
      function $u(e) {
        return e = ne(e), e && e.replace(Gp, Em).replace(sm, "");
      }
      function zv(e, t, i) {
        e = ne(e), t = tt(t);
        var o = e.length;
        i = i === r ? o : wn(P(i), 0, o);
        var c = i;
        return i -= t.length, i >= 0 && e.slice(i, c) == t;
      }
      function Gv(e) {
        return e = ne(e), e && Np.test(e) ? e.replace(El, Fm) : e;
      }
      function Yv(e) {
        return e = ne(e), e && yp.test(e) ? e.replace(Xa, "\\$&") : e;
      }
      var Iv = Xn(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), Hv = Xn(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), Pv = nu("toLowerCase");
      function jv(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? zn(e) : 0;
        if (!t || o >= t)
          return e;
        var c = (t - o) / 2;
        return Hi(Si(c), i) + e + Hi(Fi(c), i);
      }
      function Xv(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? zn(e) : 0;
        return t && o < t ? e + Hi(t - o, i) : e;
      }
      function _v(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? zn(e) : 0;
        return t && o < t ? Hi(t - o, i) + e : e;
      }
      function Lv(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), rV(ne(e).replace(_a, ""), t || 0);
      }
      function qv(e, t, i) {
        return (i ? Ye(e, t, i) : t === r) ? t = 1 : t = P(t), yo(ne(e), t);
      }
      function Kv() {
        var e = arguments, t = ne(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var $v = Xn(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function ew(e, t, i) {
        return i && typeof i != "number" && Ye(e, t, i) && (t = i = r), i = i === r ? Zt : i >>> 0, i ? (e = ne(e), e && (typeof t == "string" || t != null && !qo(t)) && (t = tt(t), !t && On(e)) ? nn(vt(e), 0, i) : e.split(t, i)) : [];
      }
      var tw = Xn(function(e, t, i) {
        return e + (i ? " " : "") + es(t);
      });
      function nw(e, t, i) {
        return e = ne(e), i = i == null ? 0 : wn(P(i), 0, e.length), t = tt(t), e.slice(i, i + t.length) == t;
      }
      function rw(e, t, i) {
        var o = u.templateSettings;
        i && Ye(e, t, i) && (t = r), e = ne(e), t = ra({}, t, o, cu);
        var c = ra({}, t.imports, o.imports, cu), d = Me(c), m = uo(c, d), V, w, M = 0, Z = t.interpolate || Vi, J = "__p += '", E = ho(
          (t.escape || Vi).source + "|" + Z.source + "|" + (Z === Fl ? Bp : Vi).source + "|" + (t.evaluate || Vi).source + "|$",
          "g"
        ), x = "//# sourceURL=" + (re.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++fm + "]") + `
`;
        e.replace(E, function(G, q, ee, rt, Ie, it) {
          return ee || (ee = rt), J += e.slice(M, it).replace(Yp, Sm), q && (V = !0, J += `' +
__e(` + q + `) +
'`), Ie && (w = !0, J += `';
` + Ie + `;
__p += '`), ee && (J += `' +
((__t = (` + ee + `)) == null ? '' : __t) +
'`), M = it + G.length, G;
        }), J += `';
`;
        var z = re.call(t, "variable") && t.variable;
        if (!z)
          J = `with (obj) {
` + J + `
}
`;
        else if (Ap.test(z))
          throw new Y(p);
        J = (w ? J.replace(vp, "") : J).replace(wp, "$1").replace(Up, "$1;"), J = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var j = td(function() {
          return te(d, x + "return " + J).apply(r, m);
        });
        if (j.source = J, Lo(j))
          throw j;
        return j;
      }
      function iw(e) {
        return ne(e).toLowerCase();
      }
      function aw(e) {
        return ne(e).toUpperCase();
      }
      function ow(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return uc(e);
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = vt(t), d = dc(o, c), m = fc(o, c) + 1;
        return nn(o, d, m).join("");
      }
      function sw(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return e.slice(0, pc(e) + 1);
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = fc(o, vt(t)) + 1;
        return nn(o, 0, c).join("");
      }
      function lw(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return e.replace(_a, "");
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = dc(o, vt(t));
        return nn(o, c).join("");
      }
      function cw(e, t) {
        var i = je, o = de;
        if (ue(t)) {
          var c = "separator" in t ? t.separator : c;
          i = "length" in t ? P(t.length) : i, o = "omission" in t ? tt(t.omission) : o;
        }
        e = ne(e);
        var d = e.length;
        if (On(e)) {
          var m = vt(e);
          d = m.length;
        }
        if (i >= d)
          return e;
        var V = i - zn(o);
        if (V < 1)
          return o;
        var w = m ? nn(m, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return w + o;
        if (m && (V += w.length - V), qo(c)) {
          if (e.slice(V).search(c)) {
            var M, Z = w;
            for (c.global || (c = ho(c.source, ne(Sl.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(Z); )
              var J = M.index;
            w = w.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(tt(c), V) != V) {
          var E = w.lastIndexOf(c);
          E > -1 && (w = w.slice(0, E));
        }
        return w + o;
      }
      function uw(e) {
        return e = ne(e), e && Rp.test(e) ? e.replace(bl, Qm) : e;
      }
      var dw = Xn(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), es = nu("toUpperCase");
      function ed(e, t, i) {
        return e = ne(e), t = i ? r : t, t === r ? Am(e) ? Gm(e) : Zm(e) : e.match(t) || [];
      }
      var td = X(function(e, t) {
        try {
          return $e(e, r, t);
        } catch (i) {
          return Lo(i) ? i : new Y(i);
        }
      }), fw = Bt(function(e, t) {
        return lt(t, function(i) {
          i = yt(i), At(e, i, Xo(e[i], e));
        }), e;
      });
      function hw(e) {
        var t = e == null ? 0 : e.length, i = O();
        return e = t ? ce(e, function(o) {
          if (typeof o[1] != "function")
            throw new ct(h);
          return [i(o[0]), o[1]];
        }) : [], X(function(o) {
          for (var c = -1; ++c < t; ) {
            var d = e[c];
            if ($e(d[0], this, o))
              return $e(d[1], this, o);
          }
        });
      }
      function pw(e) {
        return QV(dt(e, b));
      }
      function ts(e) {
        return function() {
          return e;
        };
      }
      function mw(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Vw = iu(), Tw = iu(!0);
      function qe(e) {
        return e;
      }
      function ns(e) {
        return Ac(typeof e == "function" ? e : dt(e, b));
      }
      function vw(e) {
        return Bc(dt(e, b));
      }
      function ww(e, t) {
        return Cc(e, dt(t, b));
      }
      var Uw = X(function(e, t) {
        return function(i) {
          return Wr(i, e, t);
        };
      }), Rw = X(function(e, t) {
        return function(i) {
          return Wr(e, i, t);
        };
      });
      function rs(e, t, i) {
        var o = Me(t), c = Di(t, o);
        i == null && !(ue(t) && (c.length || !o.length)) && (i = t, t = e, e = this, c = Di(t, Me(t)));
        var d = !(ue(i) && "chain" in i) || !!i.chain, m = Dt(e);
        return lt(c, function(V) {
          var w = t[V];
          e[V] = w, m && (e.prototype[V] = function() {
            var M = this.__chain__;
            if (d || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = Xe(this.__actions__);
              return J.push({ func: w, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return w.apply(e, Lt([this.value()], arguments));
          });
        }), e;
      }
      function Nw() {
        return Ee._ === this && (Ee._ = Xm), this;
      }
      function is() {
      }
      function gw(e) {
        return e = P(e), X(function(t) {
          return Dc(t, e);
        });
      }
      var Mw = xo(ce), Zw = xo(ac), Jw = xo(ao);
      function nd(e) {
        return Go(e) ? oo(yt(e)) : n1(e);
      }
      function kw(e) {
        return function(t) {
          return e == null ? r : Un(e, t);
        };
      }
      var yw = ou(), bw = ou(!0);
      function as() {
        return [];
      }
      function os() {
        return !1;
      }
      function Ew() {
        return {};
      }
      function Fw() {
        return "";
      }
      function Sw() {
        return !0;
      }
      function Ww(e, t) {
        if (e = P(e), e < 1 || e > ze)
          return [];
        var i = Zt, o = Be(e, Zt);
        t = O(t), e -= Zt;
        for (var c = co(o, t); ++i < e; )
          t(i);
        return c;
      }
      function Aw(e) {
        return I(e) ? ce(e, yt) : nt(e) ? [e] : Xe(Nu(ne(e)));
      }
      function xw(e) {
        var t = ++Pm;
        return ne(e) + t;
      }
      var Bw = Ii(function(e, t) {
        return e + t;
      }, 0), Cw = Bo("ceil"), Dw = Ii(function(e, t) {
        return e / t;
      }, 1), Qw = Bo("floor");
      function Ow(e) {
        return e && e.length ? Ci(e, qe, Ro) : r;
      }
      function zw(e, t) {
        return e && e.length ? Ci(e, O(t, 2), Ro) : r;
      }
      function Gw(e) {
        return lc(e, qe);
      }
      function Yw(e, t) {
        return lc(e, O(t, 2));
      }
      function Iw(e) {
        return e && e.length ? Ci(e, qe, Zo) : r;
      }
      function Hw(e, t) {
        return e && e.length ? Ci(e, O(t, 2), Zo) : r;
      }
      var Pw = Ii(function(e, t) {
        return e * t;
      }, 1), jw = Bo("round"), Xw = Ii(function(e, t) {
        return e - t;
      }, 0);
      function _w(e) {
        return e && e.length ? lo(e, qe) : 0;
      }
      function Lw(e, t) {
        return e && e.length ? lo(e, O(t, 2)) : 0;
      }
      return u.after = vT, u.ary = Wu, u.assign = av, u.assignIn = ju, u.assignInWith = ra, u.assignWith = ov, u.at = sv, u.before = Au, u.bind = Xo, u.bindAll = fw, u.bindKey = xu, u.castArray = ET, u.chain = Eu, u.chunk = Q1, u.compact = O1, u.concat = z1, u.cond = hw, u.conforms = pw, u.constant = ts, u.countBy = _0, u.create = lv, u.curry = Bu, u.curryRight = Cu, u.debounce = Du, u.defaults = cv, u.defaultsDeep = uv, u.defer = wT, u.delay = UT, u.difference = G1, u.differenceBy = Y1, u.differenceWith = I1, u.drop = H1, u.dropRight = P1, u.dropRightWhile = j1, u.dropWhile = X1, u.fill = _1, u.filter = q0, u.flatMap = eT, u.flatMapDeep = tT, u.flatMapDepth = nT, u.flatten = Ju, u.flattenDeep = L1, u.flattenDepth = q1, u.flip = RT, u.flow = Vw, u.flowRight = Tw, u.fromPairs = K1, u.functions = Tv, u.functionsIn = vv, u.groupBy = rT, u.initial = e0, u.intersection = t0, u.intersectionBy = n0, u.intersectionWith = r0, u.invert = Uv, u.invertBy = Rv, u.invokeMap = aT, u.iteratee = ns, u.keyBy = oT, u.keys = Me, u.keysIn = Le, u.map = qi, u.mapKeys = gv, u.mapValues = Mv, u.matches = vw, u.matchesProperty = ww, u.memoize = $i, u.merge = Zv, u.mergeWith = Xu, u.method = Uw, u.methodOf = Rw, u.mixin = rs, u.negate = ea, u.nthArg = gw, u.omit = Jv, u.omitBy = kv, u.once = NT, u.orderBy = sT, u.over = Mw, u.overArgs = gT, u.overEvery = Zw, u.overSome = Jw, u.partial = _o, u.partialRight = Qu, u.partition = lT, u.pick = yv, u.pickBy = _u, u.property = nd, u.propertyOf = kw, u.pull = s0, u.pullAll = yu, u.pullAllBy = l0, u.pullAllWith = c0, u.pullAt = u0, u.range = yw, u.rangeRight = bw, u.rearg = MT, u.reject = dT, u.remove = d0, u.rest = ZT, u.reverse = Po, u.sampleSize = hT, u.set = Ev, u.setWith = Fv, u.shuffle = pT, u.slice = f0, u.sortBy = TT, u.sortedUniq = w0, u.sortedUniqBy = U0, u.split = ew, u.spread = JT, u.tail = R0, u.take = N0, u.takeRight = g0, u.takeRightWhile = M0, u.takeWhile = Z0, u.tap = O0, u.throttle = kT, u.thru = Li, u.toArray = Iu, u.toPairs = Lu, u.toPairsIn = qu, u.toPath = Aw, u.toPlainObject = Pu, u.transform = Sv, u.unary = yT, u.union = J0, u.unionBy = k0, u.unionWith = y0, u.uniq = b0, u.uniqBy = E0, u.uniqWith = F0, u.unset = Wv, u.unzip = jo, u.unzipWith = bu, u.update = Av, u.updateWith = xv, u.values = qn, u.valuesIn = Bv, u.without = S0, u.words = ed, u.wrap = bT, u.xor = W0, u.xorBy = A0, u.xorWith = x0, u.zip = B0, u.zipObject = C0, u.zipObjectDeep = D0, u.zipWith = Q0, u.entries = Lu, u.entriesIn = qu, u.extend = ju, u.extendWith = ra, rs(u, u), u.add = Bw, u.attempt = td, u.camelCase = Ov, u.capitalize = Ku, u.ceil = Cw, u.clamp = Cv, u.clone = FT, u.cloneDeep = WT, u.cloneDeepWith = AT, u.cloneWith = ST, u.conformsTo = xT, u.deburr = $u, u.defaultTo = mw, u.divide = Dw, u.endsWith = zv, u.eq = Ut, u.escape = Gv, u.escapeRegExp = Yv, u.every = L0, u.find = K0, u.findIndex = Mu, u.findKey = dv, u.findLast = $0, u.findLastIndex = Zu, u.findLastKey = fv, u.floor = Qw, u.forEach = Fu, u.forEachRight = Su, u.forIn = hv, u.forInRight = pv, u.forOwn = mv, u.forOwnRight = Vv, u.get = Ko, u.gt = BT, u.gte = CT, u.has = wv, u.hasIn = $o, u.head = ku, u.identity = qe, u.includes = iT, u.indexOf = $1, u.inRange = Dv, u.invoke = Nv, u.isArguments = gn, u.isArray = I, u.isArrayBuffer = DT, u.isArrayLike = _e, u.isArrayLikeObject = Ve, u.isBoolean = QT, u.isBuffer = rn, u.isDate = OT, u.isElement = zT, u.isEmpty = GT, u.isEqual = YT, u.isEqualWith = IT, u.isError = Lo, u.isFinite = HT, u.isFunction = Dt, u.isInteger = Ou, u.isLength = ta, u.isMap = zu, u.isMatch = PT, u.isMatchWith = jT, u.isNaN = XT, u.isNative = _T, u.isNil = qT, u.isNull = LT, u.isNumber = Gu, u.isObject = ue, u.isObjectLike = he, u.isPlainObject = Qr, u.isRegExp = qo, u.isSafeInteger = KT, u.isSet = Yu, u.isString = na, u.isSymbol = nt, u.isTypedArray = Ln, u.isUndefined = $T, u.isWeakMap = ev, u.isWeakSet = tv, u.join = i0, u.kebabCase = Iv, u.last = ht, u.lastIndexOf = a0, u.lowerCase = Hv, u.lowerFirst = Pv, u.lt = nv, u.lte = rv, u.max = Ow, u.maxBy = zw, u.mean = Gw, u.meanBy = Yw, u.min = Iw, u.minBy = Hw, u.stubArray = as, u.stubFalse = os, u.stubObject = Ew, u.stubString = Fw, u.stubTrue = Sw, u.multiply = Pw, u.nth = o0, u.noConflict = Nw, u.noop = is, u.now = Ki, u.pad = jv, u.padEnd = Xv, u.padStart = _v, u.parseInt = Lv, u.random = Qv, u.reduce = cT, u.reduceRight = uT, u.repeat = qv, u.replace = Kv, u.result = bv, u.round = jw, u.runInContext = v, u.sample = fT, u.size = mT, u.snakeCase = $v, u.some = VT, u.sortedIndex = h0, u.sortedIndexBy = p0, u.sortedIndexOf = m0, u.sortedLastIndex = V0, u.sortedLastIndexBy = T0, u.sortedLastIndexOf = v0, u.startCase = tw, u.startsWith = nw, u.subtract = Xw, u.sum = _w, u.sumBy = Lw, u.template = rw, u.times = Ww, u.toFinite = Qt, u.toInteger = P, u.toLength = Hu, u.toLower = iw, u.toNumber = pt, u.toSafeInteger = iv, u.toString = ne, u.toUpper = aw, u.trim = ow, u.trimEnd = sw, u.trimStart = lw, u.truncate = cw, u.unescape = uw, u.uniqueId = xw, u.upperCase = dw, u.upperFirst = es, u.each = Fu, u.eachRight = Su, u.first = ku, rs(u, function() {
        var e = {};
        return Jt(u, function(t, i) {
          re.call(u.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = s, lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), lt(["drop", "take"], function(e, t) {
        K.prototype[e] = function(i) {
          i = i === r ? 1 : Ne(P(i), 0);
          var o = this.__filtered__ && !t ? new K(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Be(i, o.__takeCount__) : o.__views__.push({
            size: Be(i, Zt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, K.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), lt(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, o = i == Ue || i == ye;
        K.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: O(c, 3),
            type: i
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), lt(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        K.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), lt(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        K.prototype[e] = function() {
          return this.__filtered__ ? new K(this) : this[i](1);
        };
      }), K.prototype.compact = function() {
        return this.filter(qe);
      }, K.prototype.find = function(e) {
        return this.filter(e).head();
      }, K.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, K.prototype.invokeMap = X(function(e, t) {
        return typeof e == "function" ? new K(this) : this.map(function(i) {
          return Wr(i, e, t);
        });
      }), K.prototype.reject = function(e) {
        return this.filter(ea(O(e)));
      }, K.prototype.slice = function(e, t) {
        e = P(e);
        var i = this;
        return i.__filtered__ && (e > 0 || t < 0) ? new K(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (t = P(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
      }, K.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, K.prototype.toArray = function() {
        return this.take(Zt);
      }, Jt(K.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), c = u[o ? "take" + (t == "last" ? "Right" : "") : t], d = o || /^find/.test(t);
        !c || (u.prototype[t] = function() {
          var m = this.__wrapped__, V = o ? [1] : arguments, w = m instanceof K, M = V[0], Z = w || I(m), J = function(q) {
            var ee = c.apply(u, Lt([q], V));
            return o && E ? ee[0] : ee;
          };
          Z && i && typeof M == "function" && M.length != 1 && (w = Z = !1);
          var E = this.__chain__, x = !!this.__actions__.length, z = d && !E, j = w && !x;
          if (!d && Z) {
            m = j ? m : new K(this);
            var G = e.apply(m, V);
            return G.__actions__.push({ func: Li, args: [J], thisArg: r }), new ut(G, E);
          }
          return z && j ? e.apply(this, V) : (G = this.thru(J), z ? o ? G.value()[0] : G.value() : G);
        });
      }), lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ni[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var c = arguments;
          if (o && !this.__chain__) {
            var d = this.value();
            return t.apply(I(d) ? d : [], c);
          }
          return this[i](function(m) {
            return t.apply(I(m) ? m : [], c);
          });
        };
      }), Jt(K.prototype, function(e, t) {
        var i = u[t];
        if (i) {
          var o = i.name + "";
          re.call(Hn, o) || (Hn[o] = []), Hn[o].push({ name: t, func: i });
        }
      }), Hn[Yi(r, A).name] = [{
        name: "wrapper",
        func: r
      }], K.prototype.clone = uV, K.prototype.reverse = dV, K.prototype.value = fV, u.prototype.at = z0, u.prototype.chain = G0, u.prototype.commit = Y0, u.prototype.next = I0, u.prototype.plant = P0, u.prototype.reverse = j0, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = X0, u.prototype.first = u.prototype.head, Jr && (u.prototype[Jr] = H0), u;
    }, Gn = Ym();
    mn ? ((mn.exports = Gn)._ = Gn, to._ = Gn) : Ee._ = Gn;
  }).call(Or);
})(Je, Je.exports);
const gR = window.Pinia.defineStore, MR = gR("situationsStore", {
  state: () => ({
    situations: []
  }),
  actions: {
    async getSituations() {
      this.situations = [];
      const n = await NR();
      if (n) {
        const a = Je.exports.groupBy(n, "status"), r = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = r;
      }
    }
  }
}), ZR = window.Vue.openBlock, JR = window.Vue.createElementBlock, kR = window.Vue.createElementVNode;
var yR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const bR = {}, ER = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FR = /* @__PURE__ */ kR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), SR = [
  FR
];
function WR(n, a) {
  return ZR(), JR("svg", ER, SR);
}
var Nh = /* @__PURE__ */ yR(bR, [["render", WR]]);
var AR = Object.defineProperty, kd = Object.getOwnPropertySymbols, xR = Object.prototype.hasOwnProperty, BR = Object.prototype.propertyIsEnumerable, yd = (n, a, r) => a in n ? AR(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, bd = (n, a) => {
  for (var r in a || (a = {}))
    xR.call(a, r) && yd(n, r, a[r]);
  if (kd)
    for (var r of kd(a))
      BR.call(a, r) && yd(n, r, a[r]);
  return n;
};
const CR = window.Vue.defineComponent, DR = window.Vue.toRaw, Ns = window.Vue.h;
var QR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const OR = {
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
}, zR = CR({
  props: OR,
  render() {
    const n = this.$attrs, a = n.class ? n.class.split(" ").reduce((l, f) => (l[f] = !0, l), {}) : {}, r = {};
    a["feather-icon"] = !0, this.flex && (a["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = DR(this.icon);
    return this.$slots.default ? Ns("span", { class: "feather-icon-container" }, [
      Ns(this.$slots.default()[0], bd({
        class: a
      }, r))
    ]) : Ns(s, bd({
      class: a
    }, r));
  }
});
var Pe = /* @__PURE__ */ QR(zR, [["__scopeId", "data-v-52cbf270"]]);
const GR = window.Vue.openBlock, YR = window.Vue.createElementBlock, IR = window.Vue.createElementVNode;
var HR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const PR = {}, jR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XR = /* @__PURE__ */ IR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), _R = [
  XR
];
function LR(n, a) {
  return GR(), YR("svg", jR, _R);
}
var gh = /* @__PURE__ */ HR(PR, [["render", LR]]);
const qR = window.Vue.defineComponent, zt = window.Vue.unref, Ed = window.Vue.normalizeClass, Mn = window.Vue.createElementVNode, gs = window.Vue.toDisplayString, Fd = window.Vue.createVNode, Ms = window.Vue.openBlock, Zs = window.Vue.createElementBlock, Sd = window.Vue.createCommentVNode, Mh = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const KR = { class: "content" }, $R = { class: "title-row" }, eN = { class: "title" }, tN = {
  key: 0,
  class: "accepted"
}, nN = {
  key: 1,
  class: "rejected"
}, rN = { class: "count-info" }, iN = /* @__PURE__ */ Mh(" Alarms: "), aN = { class: "count" }, oN = /* @__PURE__ */ Mh(" Nodes:"), sN = { class: "count" }, lN = /* @__PURE__ */ qR({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(n, { emit: a }) {
    const r = n, s = gt.ACCEPTED, l = gt.REJECTED, f = () => {
      var h;
      a("situation-selected", (h = r.situationInfo) == null ? void 0 : h.id);
    };
    return (h, p) => {
      var T, N, g;
      return Ms(), Zs("div", {
        onClick: f,
        class: Ed(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == zt(l)
        }])
      }, [
        Mn("div", {
          class: Ed(["severity-line", [`${(N = (T = r.situationInfo) == null ? void 0 : T.severity) == null ? void 0 : N.toLowerCase()}-bg dark`]])
        }, null, 2),
        Mn("div", KR, [
          Mn("div", $R, [
            Mn("div", eN, "Situation [ " + gs((g = r.situationInfo) == null ? void 0 : g.id) + " ]", 1),
            r.situationInfo.status == zt(s) ? (Ms(), Zs("div", tN, [
              Fd(zt(Pe), {
                icon: zt(Nh),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Sd("", !0),
            r.situationInfo.status == zt(l) ? (Ms(), Zs("div", nN, [
              Fd(zt(Pe), {
                icon: zt(gh),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Sd("", !0)
          ]),
          Mn("div", rN, [
            iN,
            Mn("span", aN, gs(r.situationInfo.alarms.length), 1),
            oN,
            Mn("span", sN, gs(zt(Je.exports.size)(zt(Je.exports.groupBy)(r.situationInfo.alarms, "nodeId"))), 1)
          ])
        ])
      ], 2);
    };
  }
});
const cN = /* @__PURE__ */ Oe(lN, [["__scopeId", "data-v-8f204f4d"]]);
const ia = window.Vue.ref, uN = window.Vue.inject, dN = window.Vue.computed, fN = window.Vue.onMounted, hN = {
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
}, pN = (n) => {
  const a = ia(!1), r = ia(), s = ia(n.controls), l = ia(n.id), f = () => {
    r.value && r.value.focus();
  }, h = uN("registerTab");
  fN(() => {
    if (r.value && h) {
      const T = r.value.parentElement, N = T && T.parentElement ? T.parentElement : void 0, g = Array.from(N ? N.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), b = T ? g.indexOf(T) : -1;
      h({
        el: r.value,
        focus: f,
        disabled: n.disabled,
        selected: a,
        id: l,
        controls: s,
        index: b
      });
    }
  });
  const p = dN(() => ({
    role: "tab",
    ref: "tab",
    tabindex: a.value ? 0 : -1,
    id: l.value,
    "aria-selected": a.value,
    "aria-controls": s.value,
    "aria-disabled": n.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: a,
    attrs: p,
    tab: r
  };
};
const Na = function(n, a) {
  return window ? window.setTimeout(n, a) : setTimeout(n, a);
}, ga = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var mN = Object.defineProperty, VN = Object.defineProperties, TN = Object.getOwnPropertyDescriptors, Wd = Object.getOwnPropertySymbols, vN = Object.prototype.hasOwnProperty, wN = Object.prototype.propertyIsEnumerable, Ad = (n, a, r) => a in n ? mN(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, xd = (n, a) => {
  for (var r in a || (a = {}))
    vN.call(a, r) && Ad(n, r, a[r]);
  if (Wd)
    for (var r of Wd(a))
      wN.call(a, r) && Ad(n, r, a[r]);
  return n;
}, UN = (n, a) => VN(n, TN(a));
const RN = window.Vue.defineComponent, NN = window.Vue.h;
var gN = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const MN = {
  center: {
    type: Boolean,
    default: !1
  }
}, ZN = RN({
  props: MN,
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
    onClick(n) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: a, clientHeight: r } = this.parent, s = Math.round(Math.max(a, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const f = this.parent.getBoundingClientRect(), h = n.pageY, p = n.pageX;
          l = {
            top: `${h - f.top - s / 2 - document.documentElement.scrollTop}px`,
            left: `${p - f.left - s / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = UN(xd({}, l), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, ga(this.failsafe), this.failsafe = Na(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return NN("div", {
        style: xd({}, this.styles),
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
    const n = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(n.position === "relative" || n.position === "absolute" || n.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var Sn = /* @__PURE__ */ gN(ZN, [["__scopeId", "data-v-18e2a5db"]]);
const we = function(n) {
  n = n || "feather";
  const a = Math.floor(Math.random() * 1e9);
  return [n.replace(/\s+/g, "-"), Date.now(), a].join("-");
}, ge = {
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
}, Bd = window.Vue.ref, JN = window.Vue.toRef, kN = window.Vue.watch, Cd = window.Vue.provide, yN = {
  prop: "modelValue",
  event: "update:modelValue"
}, bN = {
  "update:modelValue": (n) => !0
}, EN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, FN = (n, a) => {
  const r = JN(n, "modelValue"), s = Bd(n.modelValue), l = Bd([]);
  kN(r, (F) => {
    T(F);
  });
  const f = (F) => {
    F.preventDefault(), l.value.some((C, D) => C.tab && C.tab.el.contains(F.target) ? (p(D), T(D), !0) : !1);
  }, h = (F) => {
    if (((L) => L.shiftKey || L.ctrlKey || L.metaKey || L.altKey)(F))
      return;
    const D = F.keyCode, A = (L) => {
      L.stopPropagation(), L.preventDefault();
    }, Q = l.value.filter((L) => L.tab && !L.tab.disabled), W = l.value.findIndex((L) => L.tab && L.tab.el.contains(document.activeElement));
    let H = W !== -1 ? W : s.value;
    const k = [ge.RIGHT], _ = [ge.LEFT], $ = [ge.ENTER, ge.SPACE];
    n.vertical && (k.push(ge.DOWN), _.push(ge.UP)), k.indexOf(D) > -1 ? (H++, H >= Q.length && (H = 0), A(F), p(l.value.indexOf(Q[H]))) : _.indexOf(D) > -1 && (H--, H < 0 && (H = Q.length - 1), A(F), p(l.value.indexOf(Q[H]))), $.indexOf(D) > -1 && T(H);
  }, p = (F) => {
    l.value.forEach(function(C, D) {
      F === D && C.tab && C.tab.focus();
    });
  }, T = (F) => {
    const C = l.value[F];
    !C || C.tab && C.tab.disabled || (l.value.forEach((D, A) => {
      D.tab && (D.tab.selected = F === A), D.panel && (D.panel.selected = F === A);
    }), s.value = F, a.emit("update:modelValue", F));
  };
  Cd("registerTab", (F) => {
    const C = F.index;
    C > -1 && (l.value[C] = { ...l.value[C], tab: F }, l.value = [...l.value], b());
  }), Cd("registerPanel", (F) => {
    const C = F.index;
    C > -1 && (l.value[C] = {
      ...l.value[C],
      panel: F
    }, l.value = [...l.value], b());
  });
  const b = () => {
    l.value.forEach(({ tab: F, panel: C }, D) => {
      if (C && F) {
        const A = F.id || we("tab"), Q = F.controls || we("panel");
        F.controls = Q, F.id = A, C.tab = A, C.id = Q;
      }
      D === s.value && (C && (C.selected = !0), F && (F.selected = !0));
    });
  };
  return {
    listeners: {
      click: f,
      keydown: h
    },
    attrs: {
      role: "tablist"
    },
    selected: s,
    pairs: l
  };
}, aa = window.Vue.ref, SN = window.Vue.inject, WN = window.Vue.computed, AN = window.Vue.onMounted, xN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, BN = (n) => {
  const a = aa(!1), r = aa(), s = aa(n.tab), l = aa(n.id), f = SN("registerPanel");
  AN(() => {
    if (f) {
      const p = r.value, T = p && p.parentElement ? p.parentElement : void 0, N = p ? Array.from(T ? T.children : []).indexOf(p) : -1;
      f({
        selected: a,
        id: l,
        tab: s,
        el: r.value,
        index: N
      });
    }
  });
  const h = WN(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": a.value,
    "aria-labelledby": s.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: a,
    attrs: h,
    panel: r
  };
}, ul = window.Vue.defineComponent, CN = window.Vue.resolveComponent, dl = window.Vue.openBlock, fl = window.Vue.createElementBlock, Kr = window.Vue.createElementVNode, Zh = window.Vue.mergeProps, Ma = window.Vue.renderSlot, DN = window.Vue.createVNode, QN = window.Vue.normalizeStyle, ON = window.Vue.toHandlers, zN = window.Vue.withDirectives, GN = window.Vue.normalizeProps, YN = window.Vue.guardReactiveProps, IN = window.Vue.vShow;
var hl = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const HN = hN, PN = ul({
  props: HN,
  setup(n) {
    return pN(n);
  },
  components: {
    FeatherRipple: Sn
  }
}), jN = { role: "presentation" }, XN = { class: "tab-text" };
function _N(n, a, r, s, l, f) {
  const h = CN("FeatherRipple");
  return dl(), fl("li", jN, [
    Kr("button", Zh(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      Kr("span", XN, [
        Ma(n.$slots, "default", {}, void 0, !0)
      ]),
      DN(h)
    ], 16)
  ]);
}
var Dd = /* @__PURE__ */ hl(PN, [["render", _N], ["__scopeId", "data-v-e6bb52b6"]]);
const LN = EN, qN = bN, KN = ul({
  model: yN,
  emits: qN,
  props: LN,
  setup(n, a) {
    return FN(n, a);
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
      handler(n) {
        n && n.length && this.ro && n.forEach((a) => {
          a.tab && this.ro.observe(a.tab.el);
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
        const n = this.$el.getBoundingClientRect(), a = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = a.left - n.left, s = a.height - 2;
        this.width = `${a.width}px`, this.transform = `translateX(${r}px) translateY(${s}px)`;
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
}), $N = { class: "feather-tab-container" }, eg = { class: "tab-panels" };
function tg(n, a, r, s, l, f) {
  return dl(), fl("div", $N, [
    Kr("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: QN({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    Kr("ul", Zh(n.attrs, ON(n.listeners)), [
      Ma(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Kr("div", eg, [
      Ma(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var ng = /* @__PURE__ */ hl(KN, [["render", tg], ["__scopeId", "data-v-27adffb9"]]);
const rg = xN, ig = ul({
  props: rg,
  setup(n) {
    return BN(n);
  }
});
function ag(n, a, r, s, l, f) {
  return zN((dl(), fl("div", GN(YN(n.attrs)), [
    Ma(n.$slots, "default")
  ], 16)), [
    [IN, n.selected]
  ]);
}
var Qd = /* @__PURE__ */ hl(ig, [["render", ag]]);
const og = window.Vue.defineComponent, sg = window.Vue.toDisplayString, lg = window.Vue.normalizeClass, cg = window.Vue.openBlock, ug = window.Vue.createElementBlock, dg = window.Vue.createCommentVNode, fg = /* @__PURE__ */ og({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, s) => a != null && a.severity ? (cg(), ug("span", {
      key: 0,
      class: lg(["severity-status", [`${a.severity.toLowerCase()}-color`]])
    }, sg(a.severity), 3)) : dg("", !0);
  }
});
const Jh = /* @__PURE__ */ Oe(fg, [["__scopeId", "data-v-83c2cdce"]]), hg = window.Vue.defineComponent, Od = window.Vue.toDisplayString, zd = window.Vue.createElementVNode, pg = window.Vue.openBlock, mg = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Vg = { class: "box" }, Tg = { class: "label" }, vg = { class: "date" }, wg = /* @__PURE__ */ hg({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(n) {
    const a = n;
    return (r, s) => (pg(), mg("div", Vg, [
      zd("div", Tg, Od(a.label), 1),
      zd("div", vg, Od(a.info), 1)
    ]));
  }
});
const Js = /* @__PURE__ */ Oe(wg, [["__scopeId", "data-v-b4afa751"]]), Ug = window.Vue.defineComponent, Rg = window.Vue.unref, Ng = window.Vue.renderList, gg = window.Vue.Fragment, ks = window.Vue.openBlock, ys = window.Vue.createElementBlock, Mg = window.Vue.toDisplayString, Zg = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Jg = { class: "alarms-list" }, kg = /* @__PURE__ */ Ug({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(n) {
    const a = n;
    return (r, s) => (ks(), ys("div", Jg, [
      (ks(!0), ys(gg, null, Ng(Rg(Je.exports.groupBy)(a == null ? void 0 : a.alarms, "severity"), (l, f) => (ks(), ys("div", {
        class: Zg(["alarm-count", [`${f.toString().toLowerCase()}-color`, a.size]]),
        key: f
      }, Mg(l.length), 3))), 128))
    ]));
  }
});
const yg = /* @__PURE__ */ Oe(kg, [["__scopeId", "data-v-950fe87b"]]);
const bg = window.Vue.computed, Eg = (n, a) => {
  const r = {};
  return Object.keys(a).forEach((s) => {
    r[`${s}Label`] = bg(() => n.value[s] ? n.value[s] : a[s]);
  }), r;
}, Fg = window.Vue.openBlock, Sg = window.Vue.createElementBlock, Wg = window.Vue.createElementVNode;
var Ag = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const xg = {}, Bg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cg = /* @__PURE__ */ Wg("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Dg = [
  Cg
];
function Qg(n, a) {
  return Fg(), Sg("svg", Bg, Dg);
}
var kh = /* @__PURE__ */ Ag(xg, [["render", Qg]]);
const Gd = window.Vue.computed, Og = (n, a, r) => {
  const s = Gd(() => a.value.filter((f) => !f.disabled)), l = Gd(() => n.value ? s.value.indexOf(n.value) : -1);
  return {
    selectPrevious() {
      n.value && n.value.disabled || (l.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[l.value - 1]));
    },
    selectNext() {
      n.value && n.value.disabled || (l.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[l.value + 1]));
    }
  };
};
const zg = window.Vue.openBlock, Gg = window.Vue.createElementBlock, pl = window.Vue.createElementVNode;
var Yg = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const Ig = {}, Hg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Pg = /* @__PURE__ */ pl("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), jg = /* @__PURE__ */ pl("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Xg = /* @__PURE__ */ pl("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), _g = [
  Pg,
  jg,
  Xg
];
function Lg(n, a) {
  return zg(), Gg("svg", Hg, _g);
}
var qg = /* @__PURE__ */ Yg(Ig, [["render", Lg]]), Kg = Object.defineProperty, $g = Object.defineProperties, eM = Object.getOwnPropertyDescriptors, Yd = Object.getOwnPropertySymbols, tM = Object.prototype.hasOwnProperty, nM = Object.prototype.propertyIsEnumerable, Id = (n, a, r) => a in n ? Kg(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, yh = (n, a) => {
  for (var r in a || (a = {}))
    tM.call(a, r) && Id(n, r, a[r]);
  if (Yd)
    for (var r of Yd(a))
      nM.call(a, r) && Id(n, r, a[r]);
  return n;
}, bh = (n, a) => $g(n, eM(a));
const Vr = window.Vue.defineComponent, ri = window.Vue.resolveComponent, bt = window.Vue.openBlock, lr = window.Vue.createElementBlock, rM = window.Vue.createVNode, Za = window.Vue.createBlock, iM = window.Vue.withModifiers, hr = window.Vue.inject, ii = window.Vue.computed, aM = window.Vue.normalizeClass, er = window.Vue.createElementVNode, Ja = window.Vue.toDisplayString, Va = window.Vue.renderSlot, $r = window.Vue.createCommentVNode, oM = window.Vue.withDirectives, sM = window.Vue.vShow, Is = window.Vue.ref, Hd = window.Vue.toRef, Pd = window.Vue.nextTick, Hs = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ml = window.Vue.provide, jd = window.Vue.isRef, lM = window.Vue.onBeforeUnmount;
var si = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const cM = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, uM = Vr({
  props: cM,
  components: {
    FeatherIcon: Pe
  }
}), dM = ["title"];
function fM(n, a, r, s, l, f) {
  const h = ri("FeatherIcon");
  return bt(), lr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    rM(h, { icon: n.icon }, null, 8, ["icon"])
  ], 8, dM);
}
var hM = /* @__PURE__ */ si(uM, [["render", fM], ["__scopeId", "data-v-4265058e"]]);
const pM = Vr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return kh;
    }
  },
  components: {
    ActionIcon: hM
  }
});
function mM(n, a, r, s, l, f) {
  const h = ri("ActionIcon");
  return bt(), Za(h, {
    onClick: a[0] || (a[0] = iM((p) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var VM = /* @__PURE__ */ si(pM, [["render", mM]]);
const TM = Vr({
  computed: {
    errorIcon() {
      return qg;
    }
  },
  components: {
    FeatherIcon: Pe
  }
});
function vM(n, a, r, s, l, f) {
  const h = ri("FeatherIcon");
  return bt(), Za(h, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var wM = /* @__PURE__ */ si(TM, [["render", vM], ["__scopeId", "data-v-0b8faef3"]]);
const UM = {
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
}, RM = {
  clear: () => !0,
  "wrapper-click": (n) => !0
}, NM = Vr({
  emits: RM,
  props: UM,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = hr("wrapperOptions", {}), a = hr("validationErrorMessage", !1), r = ii(() => n.error ? n.error : a && a.value ? a.value : !1);
    return bh(yh({}, n), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((a) => a.children && a.children.length !== 0) !== -1;
    },
    containerCls() {
      const n = [];
      return this.hideLabel && n.push("hide-label"), this.raised && n.push("raised"), this.focused && n.push("focused"), this.error && n.push("error"), this.background && n.push("background"), this.disabled && n.push("disabled"), this.inline && n.push("inline"), this.hasPre && n.push("has-prefix"), n;
    }
  },
  methods: {
    handleWrapperClick(n) {
      this.disabled || this.$emit("wrapper-click", n);
    }
  },
  mounted() {
    const n = this.$el.querySelector(".prefix");
    if (n) {
      const a = { childList: !0, subtree: !0 }, r = () => {
        const s = this.$el.querySelector(".prefix");
        this.prefixWidth = s ? s.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(n, a), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: VM,
    ErrorIcon: wM
  }
}), gM = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, MM = ["for"], ZM = { class: "prefix" }, JM = { class: "post" };
function kM(n, a, r, s, l, f) {
  const h = ri("ClearIcon"), p = ri("ErrorIcon");
  return bt(), lr("div", {
    class: aM(["feather-input-wrapper-container", n.containerCls])
  }, [
    er("fieldset", gM, [
      er("legend", null, Ja(n.label), 1)
    ]),
    er("label", {
      class: "feather-input-label",
      for: n.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ja(n.label), 9, MM),
    er("div", {
      class: "feather-input-wrapper",
      onClick: a[1] || (a[1] = (...T) => n.handleWrapperClick && n.handleWrapperClick(...T))
    }, [
      er("div", ZM, [
        Va(n.$slots, "pre", {}, void 0, !0)
      ]),
      Va(n.$slots, "default", {}, void 0, !0),
      er("div", JM, [
        n.showClear && n.computedClearText ? (bt(), Za(h, {
          key: 0,
          clear: n.computedClearText,
          onClear: a[0] || (a[0] = (T) => n.$emit("clear"))
        }, null, 8, ["clear"])) : $r("", !0),
        n.error ? (bt(), Za(p, { key: 1 })) : $r("", !0),
        Va(n.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var yM = /* @__PURE__ */ si(NM, [["render", kM], ["__scopeId", "data-v-4db296db"]]);
const bM = Vr({
  setup() {
    const n = hr("subTextOptions", {}), a = hr("validationErrorMessage", !1), r = ii(() => n.error ? n.error : a && a.value ? a.value : "");
    return bh(yh({}, n), { error: r });
  }
}), EM = { class: "feather-input-sub-text" }, FM = {
  key: 0,
  class: "feather-input-spacer"
}, SM = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, WM = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function AM(n, a, r, s, l, f) {
  return oM((bt(), lr("div", EM, [
    !n.hint && !n.error.length ? (bt(), lr("div", FM, "\xA0")) : $r("", !0),
    n.hint && !n.error.length ? (bt(), lr("div", SM, Ja(n.hint), 1)) : $r("", !0),
    n.error.length > 0 ? (bt(), lr("div", WM, Ja(n.error), 1)) : $r("", !0),
    Va(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [sM, !n.inline || n.hint || n.error.length]
  ]);
}
var Vl = /* @__PURE__ */ si(bM, [["render", AM], ["__scopeId", "data-v-8e0ac99e"]]);
const xM = {
  headingText: {
    type: Function,
    default: (n) => n.length && n.length === 1 ? "1 error" : `${n.length} errors`
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
Vr({
  props: xM,
  setup(n) {
    const a = hr("featherFormErrors", Is([])), r = Hd(n, "errorList"), s = ii(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : a.value;
    }), l = Hd(n, "generalError"), f = (g) => {
      document.getElementById(g).focus();
    }, h = (g) => g.replace(/ \*$/, ""), p = Is(), T = (g) => `${h(g.label)} - ${g.message}`, N = ii(() => (s.value.length && Pd(() => p.value.focus()), n.headingText(s.value)));
    return Hs(l, (g) => {
      g.length && Pd(() => p.value.focus());
    }), {
      errors: s,
      errorsHeading: N,
      heading: p,
      focusElement: f,
      mainError: l,
      getFullMessage: T
    };
  }
});
const Tl = (n, a, r, s, l) => {
  const f = hr("featherForm", !1);
  if (s && f && n.value) {
    const h = Is("");
    ml("validationErrorMessage", h);
    const p = () => {
      if (l && jd(l) && l.value)
        return h.value = l.value, {
          success: !1,
          message: l.value,
          inputId: n.value,
          label: r
        };
      try {
        return s.validateSync(a.value), h.value = "", { success: !0 };
      } catch (g) {
        const b = g;
        return h.value = b.errors[0], {
          success: !1,
          message: b.errors[0],
          inputId: n.value,
          label: r
        };
      }
    }, N = {
      clear: () => {
        h.value = "";
      },
      validate: p
    };
    return l && jd(l) && Hs(l, () => {
      f.runValidation();
    }), Hs(n, (g, b) => {
      g && f && f.register(g, N), b && f && f.deregister(b);
    }, { immediate: !0 }), lM(() => {
      f.deregister(n.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, vl = (n) => ({
  inherittedAttrs: ii(() => ({
    class: n.class,
    "data-ref-id": n["data-ref-id"]
  }))
}), wl = {
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
}, Ul = (n) => {
  ml("subTextOptions", n);
}, BM = {
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
}, CM = (n) => {
  ml("wrapperOptions", n);
}, oa = window.Vue.ref, DM = window.Vue.watch, QM = window.Vue.watchEffect, Xd = window.Vue.computed, bs = window.Vue.provide, Eh = (n, a, r, s, l) => {
  const f = oa([]), h = oa(), p = oa(), T = oa();
  QM(() => {
    if (!f.value.length)
      return;
    const A = f.value.map((Q) => Q.value);
    if (n.value !== void 0 && n.value !== null && (h.value = f.value[A.indexOf(n.value)]), !h.value && f.value.length) {
      let Q = f.value.filter((W) => !W.disabled);
      Q = Q.length ? Q : f.value, p.value = Q[0], p.value.first = !0;
    }
  }), DM(h, (A, Q) => {
    Q && (Q.checked = !1), A && (A.checked = !0);
  });
  const N = (A) => {
    A && A.disabled || (p.value && (p.value.first = !1), h.value !== A && (a("update:modelValue", A.value), h.value = A, A.focus()));
  }, g = Xd(() => h.value || p.value), b = Og(g, f, N), y = Xd(() => we("feather-radio-group"));
  T.value = y.value;
  const { validate: B } = Tl(T, n, r, s, l);
  return bs("register", (A) => {
    f.value = [...f.value, A], T.value === y.value && (T.value = A.id);
  }), bs("select", N), bs("blur", (A) => {
    a("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          h.value ? N(h.value) : p.value && N(p.value);
          break;
        case 40:
        case 39:
          b.selectNext();
          break;
        case 37:
        case 38:
          b.selectPrevious();
          break;
      }
    },
    ...b,
    focus: () => {
      h.value && h.value.focus();
    },
    validate: B,
    firstElementId: T,
    groupId: y
  };
};
var OM = Object.defineProperty, zM = Object.defineProperties, GM = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, YM = Object.prototype.hasOwnProperty, IM = Object.prototype.propertyIsEnumerable, Ld = (n, a, r) => a in n ? OM(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, ur = (n, a) => {
  for (var r in a || (a = {}))
    YM.call(a, r) && Ld(n, r, a[r]);
  if (_d)
    for (var r of _d(a))
      IM.call(a, r) && Ld(n, r, a[r]);
  return n;
}, Fh = (n, a) => zM(n, GM(a));
const hn = window.Vue.defineComponent, ei = window.Vue.inject, ka = window.Vue.computed, ti = window.Vue.ref, mt = window.Vue.resolveComponent, ot = window.Vue.openBlock, li = window.Vue.createElementBlock, Sh = window.Vue.normalizeClass, Et = window.Vue.renderSlot, un = window.Vue.createBlock, ai = window.Vue.createCommentVNode, ya = window.Vue.createElementVNode, HM = window.Vue.withModifiers, Da = window.Vue.createVNode, Wh = window.Vue.toRef, Ps = window.Vue.mergeProps, Xt = window.Vue.withCtx, PM = window.Vue.h, jM = window.Vue.provide;
var pn = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const XM = {
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
}, _M = hn({
  props: XM,
  setup(n) {
    const a = ei("isCondensed", null), r = ka(() => a || n.condensed), s = ti(!1);
    return {
      focused: s,
      handleFocus: () => {
        s.value = !0;
      },
      handleBlur: () => {
        s.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: Sn
  }
}), LM = ["aria-disabled"];
function qM(n, a, r, s, l, f) {
  const h = mt("FeatherRipple");
  return ot(), li("div", {
    class: Sh(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: a[0] || (a[0] = (p) => n.clickable ? n.handleFocus : null),
    onFocusout: a[1] || (a[1] = (p) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    Et(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (ot(), un(h, { key: 0 })) : ai("", !0)
  ], 42, LM);
}
var Rl = /* @__PURE__ */ pn(_M, [["render", qM], ["__scopeId", "data-v-44d413dc"]]);
const KM = {
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
}, $M = hn({
  emits: ["delete"],
  props: KM,
  setup(n, a) {
    return {
      handleDelete: () => {
        n.disabled || a.emit("delete");
      },
      icon: kh
    };
  },
  components: {
    FeatherIcon: Pe
  }
}), eZ = { class: "chip-delete" }, tZ = ["aria-label", "aria-describedby"];
function nZ(n, a, r, s, l, f) {
  const h = mt("FeatherIcon");
  return ot(), li("span", eZ, [
    ya("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: a[0] || (a[0] = HM((...p) => n.handleDelete && n.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      Da(h, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, tZ)
  ]);
}
var rZ = /* @__PURE__ */ pn($M, [["render", nZ], ["__scopeId", "data-v-4bae6cb4"]]);
const iZ = hn({
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
}), aZ = ["title"];
function oZ(n, a, r, s, l, f) {
  return ot(), li("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 8, aZ);
}
var Nl = /* @__PURE__ */ pn(iZ, [["render", oZ], ["__scopeId", "data-v-1a0445b2"]]);
const sZ = {}, lZ = {
  class: "chip-icon",
  role: "presentation"
};
function cZ(n, a) {
  return ot(), li("span", lZ, [
    Et(n.$slots, "default", {}, void 0, !0)
  ]);
}
var gl = /* @__PURE__ */ pn(sZ, [["render", cZ], ["__scopeId", "data-v-2230176f"]]);
const qd = {
  delete: "Remove"
}, uZ = hn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => qd
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(n, a) {
    const r = Eg(Wh(n, "labels"), qd), s = ka(() => we("chip-text")), l = () => {
      n.disabled || a.emit("click");
    }, f = ur({}, a.attrs);
    return n.disabled && delete f.onClick, Fh(ur({}, r), {
      chipTextId: s,
      handleClick: l,
      attrs: f
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
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Rl,
    DeleteIcon: rZ,
    Label: Nl,
    PreIcon: gl
  }
}), dZ = ["aria-disabled"];
function fZ(n, a, r, s, l, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("DeleteIcon"), N = mt("Chip");
  return ot(), un(N, Ps(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: Xt(() => [
      ya("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        ya("span", Ps(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (ot(), un(h, { key: 0 }, {
            default: Xt(() => [
              Et(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ai("", !0),
          Da(p, { id: n.chipTextId }, {
            default: Xt(() => [
              Et(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, dZ),
      n.canDelete ? (ot(), un(T, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: a[0] || (a[0] = (g) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ai("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var hZ = /* @__PURE__ */ pn(uZ, [["render", fZ], ["__scopeId", "data-v-48b2704a"]]);
const pZ = hn({
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
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Rl,
    Label: Nl,
    PreIcon: gl
  }
}), mZ = ["aria-disabled"];
function VZ(n, a, r, s, l, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("Chip");
  return ot(), un(T, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: Xt(() => [
      ya("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (ot(), un(h, { key: 0 }, {
          default: Xt(() => [
            Et(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ai("", !0),
        Da(p, null, {
          default: Xt(() => [
            Et(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, mZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var TZ = /* @__PURE__ */ pn(pZ, [["render", VZ], ["__scopeId", "data-v-3e0c4eba"]]);
const vZ = hn({
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
  setup(n) {
    const a = ti(!1), r = ti(!1), s = ka(() => we("chip-label-id")), l = ka(() => a.value || r.value ? 0 : -1), f = ti(), h = () => {
      f.value.$el.focus();
    }, p = ei("register", (y) => {
    }), T = ei("blur", (y) => {
    }), N = ei("select", (y) => {
    }), g = {
      first: a,
      focus: h,
      disabled: n.disabled,
      value: n.value,
      checked: r
    };
    return p(g), {
      labelId: s,
      tabindex: l,
      first: a,
      blur: T,
      click: () => {
        N(g);
      },
      input: f,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Rl,
    Label: Nl,
    PreIcon: gl
  }
});
function wZ(n, a, r, s, l, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("Chip");
  return ot(), un(T, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: Sh(["focus hover", { selected: n.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": n.checked ? "true" : "false",
    "aria-disabled": n.disabled,
    "aria-labelledby": n.labelId,
    tabindex: n.tabindex,
    onClick: n.click,
    "allow-click": !n.disabled,
    onBlur: n.blur
  }, {
    default: Xt(() => [
      n.hasIcon ? (ot(), un(h, { key: 0 }, {
        default: Xt(() => [
          Et(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ai("", !0),
      Da(p, { id: n.labelId }, {
        default: Xt(() => [
          Et(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var UZ = /* @__PURE__ */ pn(vZ, [["render", wZ], ["__scopeId", "data-v-bbcc2f70"]]);
const RZ = {
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
}, Kd = hn({
  props: RZ,
  setup() {
    return { format: ei("chipListFormat", "") };
  },
  render() {
    const n = (a) => PM(a, ur(ur({}, this.$props), this.$attrs), ur({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n(hZ) : this.format === "radio" ? n(UZ) : n(TZ);
  }
}), NZ = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (n) => ["list", "radio", "single"].indexOf(n) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, gZ = hn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: NZ,
  setup(n, a) {
    const r = n.mode === "list" ? "grid" : n.mode;
    jM("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const h = Wh(n, "modelValue");
      return Fh(ur({
        attrs: {
          role: "radiogroup"
        }
      }, Eh(h, a.emit, n.label, {}, ti(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), MZ = ["aria-label"];
function ZZ(n, a, r, s, l, f) {
  return ot(), li("div", Ps(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: a[0] || (a[0] = (...h) => n.keydown && n.keydown(...h))
  }), [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 16, MZ);
}
var JZ = /* @__PURE__ */ pn(gZ, [["render", ZZ], ["__scopeId", "data-v-1e06f41d"]]);
function Wn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var a = Number(n);
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
}
function Ae(n, a) {
  if (a.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + a.length + " present");
}
function Qe(n) {
  Ae(1, arguments);
  var a = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && a === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || a === "[object Number]" ? new Date(n) : ((typeof n == "string" || a === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function kZ(n, a) {
  Ae(2, arguments);
  var r = Qe(n).getTime(), s = Wn(a);
  return new Date(r + s);
}
var yZ = {};
function ci() {
  return yZ;
}
function js(n) {
  var a = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return a.setUTCFullYear(n.getFullYear()), n.getTime() - a.getTime();
}
function bZ(n, a) {
  Ae(2, arguments);
  var r = Qe(n), s = Qe(a), l = r.getTime() - s.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function EZ(n) {
  return Ae(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function FZ(n) {
  if (Ae(1, arguments), !EZ(n) && typeof n != "number")
    return !1;
  var a = Qe(n);
  return !isNaN(Number(a));
}
function SZ(n, a) {
  Ae(2, arguments);
  var r = Wn(a);
  return kZ(n, -r);
}
var WZ = 864e5;
function AZ(n) {
  Ae(1, arguments);
  var a = Qe(n), r = a.getTime();
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  var s = a.getTime(), l = r - s;
  return Math.floor(l / WZ) + 1;
}
function ba(n) {
  Ae(1, arguments);
  var a = 1, r = Qe(n), s = r.getUTCDay(), l = (s < a ? 7 : 0) + s - a;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Ah(n) {
  Ae(1, arguments);
  var a = Qe(n), r = a.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var l = ba(s), f = new Date(0);
  f.setUTCFullYear(r, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var h = ba(f);
  return a.getTime() >= l.getTime() ? r + 1 : a.getTime() >= h.getTime() ? r : r - 1;
}
function xZ(n) {
  Ae(1, arguments);
  var a = Ah(n), r = new Date(0);
  r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = ba(r);
  return s;
}
var BZ = 6048e5;
function CZ(n) {
  Ae(1, arguments);
  var a = Qe(n), r = ba(a).getTime() - xZ(a).getTime();
  return Math.round(r / BZ) + 1;
}
function Ea(n, a) {
  var r, s, l, f, h, p, T, N;
  Ae(1, arguments);
  var g = ci(), b = Wn((r = (s = (l = (f = a == null ? void 0 : a.weekStartsOn) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && l !== void 0 ? l : g.weekStartsOn) !== null && s !== void 0 ? s : (T = g.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(b >= 0 && b <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Qe(n), B = y.getUTCDay(), F = (B < b ? 7 : 0) + B - b;
  return y.setUTCDate(y.getUTCDate() - F), y.setUTCHours(0, 0, 0, 0), y;
}
function xh(n, a) {
  var r, s, l, f, h, p, T, N;
  Ae(1, arguments);
  var g = Qe(n), b = g.getUTCFullYear(), y = ci(), B = Wn((r = (s = (l = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (T = y.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = new Date(0);
  F.setUTCFullYear(b + 1, 0, B), F.setUTCHours(0, 0, 0, 0);
  var C = Ea(F, a), D = new Date(0);
  D.setUTCFullYear(b, 0, B), D.setUTCHours(0, 0, 0, 0);
  var A = Ea(D, a);
  return g.getTime() >= C.getTime() ? b + 1 : g.getTime() >= A.getTime() ? b : b - 1;
}
function DZ(n, a) {
  var r, s, l, f, h, p, T, N;
  Ae(1, arguments);
  var g = ci(), b = Wn((r = (s = (l = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (T = g.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = xh(n, a), B = new Date(0);
  B.setUTCFullYear(y, 0, b), B.setUTCHours(0, 0, 0, 0);
  var F = Ea(B, a);
  return F;
}
var QZ = 6048e5;
function OZ(n, a) {
  Ae(1, arguments);
  var r = Qe(n), s = Ea(r, a).getTime() - DZ(r, a).getTime();
  return Math.round(s / QZ) + 1;
}
function ie(n, a) {
  for (var r = n < 0 ? "-" : "", s = Math.abs(n).toString(); s.length < a; )
    s = "0" + s;
  return r + s;
}
var zZ = {
  y: function(n, a) {
    var r = n.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return ie(a === "yy" ? s % 100 : s, a.length);
  },
  M: function(n, a) {
    var r = n.getUTCMonth();
    return a === "M" ? String(r + 1) : ie(r + 1, 2);
  },
  d: function(n, a) {
    return ie(n.getUTCDate(), a.length);
  },
  a: function(n, a) {
    var r = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  h: function(n, a) {
    return ie(n.getUTCHours() % 12 || 12, a.length);
  },
  H: function(n, a) {
    return ie(n.getUTCHours(), a.length);
  },
  m: function(n, a) {
    return ie(n.getUTCMinutes(), a.length);
  },
  s: function(n, a) {
    return ie(n.getUTCSeconds(), a.length);
  },
  S: function(n, a) {
    var r = a.length, s = n.getUTCMilliseconds(), l = Math.floor(s * Math.pow(10, r - 3));
    return ie(l, a.length);
  }
};
const an = zZ;
var tr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, GZ = {
  G: function(n, a, r) {
    var s = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(s, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(s, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(s, {
          width: "wide"
        });
    }
  },
  y: function(n, a, r) {
    if (a === "yo") {
      var s = n.getUTCFullYear(), l = s > 0 ? s : 1 - s;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return an.y(n, a);
  },
  Y: function(n, a, r, s) {
    var l = xh(n, s), f = l > 0 ? l : 1 - l;
    if (a === "YY") {
      var h = f % 100;
      return ie(h, 2);
    }
    return a === "Yo" ? r.ordinalNumber(f, {
      unit: "year"
    }) : ie(f, a.length);
  },
  R: function(n, a) {
    var r = Ah(n);
    return ie(r, a.length);
  },
  u: function(n, a) {
    var r = n.getUTCFullYear();
    return ie(r, a.length);
  },
  Q: function(n, a, r) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(s);
      case "QQ":
        return ie(s, 2);
      case "Qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(n, a, r) {
    var s = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(s);
      case "qq":
        return ie(s, 2);
      case "qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(n, a, r) {
    var s = n.getUTCMonth();
    switch (a) {
      case "M":
      case "MM":
        return an.M(n, a);
      case "Mo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(n, a, r) {
    var s = n.getUTCMonth();
    switch (a) {
      case "L":
        return String(s + 1);
      case "LL":
        return ie(s + 1, 2);
      case "Lo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(n, a, r, s) {
    var l = OZ(n, s);
    return a === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ie(l, a.length);
  },
  I: function(n, a, r) {
    var s = CZ(n);
    return a === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ie(s, a.length);
  },
  d: function(n, a, r) {
    return a === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : an.d(n, a);
  },
  D: function(n, a, r) {
    var s = AZ(n);
    return a === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : ie(s, a.length);
  },
  E: function(n, a, r) {
    var s = n.getUTCDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(n, a, r, s) {
    var l = n.getUTCDay(), f = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "e":
        return String(f);
      case "ee":
        return ie(f, 2);
      case "eo":
        return r.ordinalNumber(f, {
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
  c: function(n, a, r, s) {
    var l = n.getUTCDay(), f = (l - s.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(f);
      case "cc":
        return ie(f, a.length);
      case "co":
        return r.ordinalNumber(f, {
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
  i: function(n, a, r) {
    var s = n.getUTCDay(), l = s === 0 ? 7 : s;
    switch (a) {
      case "i":
        return String(l);
      case "ii":
        return ie(l, a.length);
      case "io":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(n, a, r) {
    var s = n.getUTCHours(), l = s / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  b: function(n, a, r) {
    var s = n.getUTCHours(), l;
    switch (s === 12 ? l = tr.noon : s === 0 ? l = tr.midnight : l = s / 12 >= 1 ? "pm" : "am", a) {
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
  B: function(n, a, r) {
    var s = n.getUTCHours(), l;
    switch (s >= 17 ? l = tr.evening : s >= 12 ? l = tr.afternoon : s >= 4 ? l = tr.morning : l = tr.night, a) {
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
  h: function(n, a, r) {
    if (a === "ho") {
      var s = n.getUTCHours() % 12;
      return s === 0 && (s = 12), r.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return an.h(n, a);
  },
  H: function(n, a, r) {
    return a === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : an.H(n, a);
  },
  K: function(n, a, r) {
    var s = n.getUTCHours() % 12;
    return a === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ie(s, a.length);
  },
  k: function(n, a, r) {
    var s = n.getUTCHours();
    return s === 0 && (s = 24), a === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ie(s, a.length);
  },
  m: function(n, a, r) {
    return a === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : an.m(n, a);
  },
  s: function(n, a, r) {
    return a === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : an.s(n, a);
  },
  S: function(n, a) {
    return an.S(n, a);
  },
  X: function(n, a, r, s) {
    var l = s._originalDate || n, f = l.getTimezoneOffset();
    if (f === 0)
      return "Z";
    switch (a) {
      case "X":
        return ef(f);
      case "XXXX":
      case "XX":
        return yn(f);
      case "XXXXX":
      case "XXX":
      default:
        return yn(f, ":");
    }
  },
  x: function(n, a, r, s) {
    var l = s._originalDate || n, f = l.getTimezoneOffset();
    switch (a) {
      case "x":
        return ef(f);
      case "xxxx":
      case "xx":
        return yn(f);
      case "xxxxx":
      case "xxx":
      default:
        return yn(f, ":");
    }
  },
  O: function(n, a, r, s) {
    var l = s._originalDate || n, f = l.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + $d(f, ":");
      case "OOOO":
      default:
        return "GMT" + yn(f, ":");
    }
  },
  z: function(n, a, r, s) {
    var l = s._originalDate || n, f = l.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + $d(f, ":");
      case "zzzz":
      default:
        return "GMT" + yn(f, ":");
    }
  },
  t: function(n, a, r, s) {
    var l = s._originalDate || n, f = Math.floor(l.getTime() / 1e3);
    return ie(f, a.length);
  },
  T: function(n, a, r, s) {
    var l = s._originalDate || n, f = l.getTime();
    return ie(f, a.length);
  }
};
function $d(n, a) {
  var r = n > 0 ? "-" : "+", s = Math.abs(n), l = Math.floor(s / 60), f = s % 60;
  if (f === 0)
    return r + String(l);
  var h = a || "";
  return r + String(l) + h + ie(f, 2);
}
function ef(n, a) {
  if (n % 60 === 0) {
    var r = n > 0 ? "-" : "+";
    return r + ie(Math.abs(n) / 60, 2);
  }
  return yn(n, a);
}
function yn(n, a) {
  var r = a || "", s = n > 0 ? "-" : "+", l = Math.abs(n), f = ie(Math.floor(l / 60), 2), h = ie(l % 60, 2);
  return s + f + r + h;
}
const YZ = GZ;
var tf = function(n, a) {
  switch (n) {
    case "P":
      return a.date({
        width: "short"
      });
    case "PP":
      return a.date({
        width: "medium"
      });
    case "PPP":
      return a.date({
        width: "long"
      });
    case "PPPP":
    default:
      return a.date({
        width: "full"
      });
  }
}, Bh = function(n, a) {
  switch (n) {
    case "p":
      return a.time({
        width: "short"
      });
    case "pp":
      return a.time({
        width: "medium"
      });
    case "ppp":
      return a.time({
        width: "long"
      });
    case "pppp":
    default:
      return a.time({
        width: "full"
      });
  }
}, IZ = function(n, a) {
  var r = n.match(/(P+)(p+)?/) || [], s = r[1], l = r[2];
  if (!l)
    return tf(n, a);
  var f;
  switch (s) {
    case "P":
      f = a.dateTime({
        width: "short"
      });
      break;
    case "PP":
      f = a.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      f = a.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      f = a.dateTime({
        width: "full"
      });
      break;
  }
  return f.replace("{{date}}", tf(s, a)).replace("{{time}}", Bh(l, a));
}, HZ = {
  p: Bh,
  P: IZ
};
const PZ = HZ;
var jZ = ["D", "DD"], XZ = ["YY", "YYYY"];
function _Z(n) {
  return jZ.indexOf(n) !== -1;
}
function LZ(n) {
  return XZ.indexOf(n) !== -1;
}
function nf(n, a, r) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var qZ = {
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
}, KZ = function(n, a, r) {
  var s, l = qZ[n];
  return typeof l == "string" ? s = l : a === 1 ? s = l.one : s = l.other.replace("{{count}}", a.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const $Z = KZ;
function Es(n) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = a.width ? String(a.width) : n.defaultWidth, s = n.formats[r] || n.formats[n.defaultWidth];
    return s;
  };
}
var eJ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, tJ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, nJ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, rJ = {
  date: Es({
    formats: eJ,
    defaultWidth: "full"
  }),
  time: Es({
    formats: tJ,
    defaultWidth: "full"
  }),
  dateTime: Es({
    formats: nJ,
    defaultWidth: "full"
  })
};
const iJ = rJ;
var aJ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, oJ = function(n, a, r, s) {
  return aJ[n];
};
const sJ = oJ;
function zr(n) {
  return function(a, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", l;
    if (s === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, h = r != null && r.width ? String(r.width) : f;
      l = n.formattingValues[h] || n.formattingValues[f];
    } else {
      var p = n.defaultWidth, T = r != null && r.width ? String(r.width) : n.defaultWidth;
      l = n.values[T] || n.values[p];
    }
    var N = n.argumentCallback ? n.argumentCallback(a) : a;
    return l[N];
  };
}
var lJ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cJ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uJ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, dJ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, fJ = {
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
}, hJ = {
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
}, pJ = function(n, a) {
  var r = Number(n), s = r % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, mJ = {
  ordinalNumber: pJ,
  era: zr({
    values: lJ,
    defaultWidth: "wide"
  }),
  quarter: zr({
    values: cJ,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: zr({
    values: uJ,
    defaultWidth: "wide"
  }),
  day: zr({
    values: dJ,
    defaultWidth: "wide"
  }),
  dayPeriod: zr({
    values: fJ,
    defaultWidth: "wide",
    formattingValues: hJ,
    defaultFormattingWidth: "wide"
  })
};
const VJ = mJ;
function Gr(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, l = s && n.matchPatterns[s] || n.matchPatterns[n.defaultMatchWidth], f = a.match(l);
    if (!f)
      return null;
    var h = f[0], p = s && n.parsePatterns[s] || n.parsePatterns[n.defaultParseWidth], T = Array.isArray(p) ? vJ(p, function(b) {
      return b.test(h);
    }) : TJ(p, function(b) {
      return b.test(h);
    }), N;
    N = n.valueCallback ? n.valueCallback(T) : T, N = r.valueCallback ? r.valueCallback(N) : N;
    var g = a.slice(h.length);
    return {
      value: N,
      rest: g
    };
  };
}
function TJ(n, a) {
  for (var r in n)
    if (n.hasOwnProperty(r) && a(n[r]))
      return r;
}
function vJ(n, a) {
  for (var r = 0; r < n.length; r++)
    if (a(n[r]))
      return r;
}
function wJ(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = a.match(n.matchPattern);
    if (!s)
      return null;
    var l = s[0], f = a.match(n.parsePattern);
    if (!f)
      return null;
    var h = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    h = r.valueCallback ? r.valueCallback(h) : h;
    var p = a.slice(l.length);
    return {
      value: h,
      rest: p
    };
  };
}
var UJ = /^(\d+)(th|st|nd|rd)?/i, RJ = /\d+/i, NJ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gJ = {
  any: [/^b/i, /^(a|c)/i]
}, MJ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ZJ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, JJ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, kJ = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, yJ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bJ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, EJ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, FJ = {
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
}, SJ = {
  ordinalNumber: wJ({
    matchPattern: UJ,
    parsePattern: RJ,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: Gr({
    matchPatterns: NJ,
    defaultMatchWidth: "wide",
    parsePatterns: gJ,
    defaultParseWidth: "any"
  }),
  quarter: Gr({
    matchPatterns: MJ,
    defaultMatchWidth: "wide",
    parsePatterns: ZJ,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: Gr({
    matchPatterns: JJ,
    defaultMatchWidth: "wide",
    parsePatterns: kJ,
    defaultParseWidth: "any"
  }),
  day: Gr({
    matchPatterns: yJ,
    defaultMatchWidth: "wide",
    parsePatterns: bJ,
    defaultParseWidth: "any"
  }),
  dayPeriod: Gr({
    matchPatterns: EJ,
    defaultMatchWidth: "any",
    parsePatterns: FJ,
    defaultParseWidth: "any"
  })
};
const WJ = SJ;
var AJ = {
  code: "en-US",
  formatDistance: $Z,
  formatLong: iJ,
  formatRelative: sJ,
  localize: VJ,
  match: WJ,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ch = AJ;
var xJ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, BJ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, CJ = /^'([^]*?)'?$/, DJ = /''/g, QJ = /[a-zA-Z]/;
function OJ(n, a, r) {
  var s, l, f, h, p, T, N, g, b, y, B, F, C, D, A, Q, W, H;
  Ae(2, arguments);
  var k = String(a), _ = ci(), $ = (s = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : _.locale) !== null && s !== void 0 ? s : Ch, L = Wn((f = (h = (p = (T = r == null ? void 0 : r.firstWeekContainsDate) !== null && T !== void 0 ? T : r == null || (N = r.locale) === null || N === void 0 || (g = N.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && p !== void 0 ? p : _.firstWeekContainsDate) !== null && h !== void 0 ? h : (b = _.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var xe = Wn((B = (F = (C = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (A = r.locale) === null || A === void 0 || (Q = A.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && C !== void 0 ? C : _.weekStartsOn) !== null && F !== void 0 ? F : (W = _.locale) === null || W === void 0 || (H = W.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(xe >= 0 && xe <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!$.localize)
    throw new RangeError("locale must contain localize property");
  if (!$.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var je = Qe(n);
  if (!FZ(je))
    throw new RangeError("Invalid time value");
  var de = js(je), fe = SZ(je, de), me = {
    firstWeekContainsDate: L,
    weekStartsOn: xe,
    locale: $,
    _originalDate: je
  }, Ue = k.match(BJ).map(function(ae) {
    var ye = ae[0];
    if (ye === "p" || ye === "P") {
      var be = PZ[ye];
      return be(ae, $.formatLong);
    }
    return ae;
  }).join("").match(xJ).map(function(ae) {
    if (ae === "''")
      return "'";
    var ye = ae[0];
    if (ye === "'")
      return zJ(ae);
    var be = YZ[ye];
    if (be)
      return !(r != null && r.useAdditionalWeekYearTokens) && LZ(ae) && nf(ae, a, String(n)), !(r != null && r.useAdditionalDayOfYearTokens) && _Z(ae) && nf(ae, a, String(n)), be(fe, ae, $.localize, me);
    if (ye.match(QJ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ye + "`");
    return ae;
  }).join("");
  return Ue;
}
function zJ(n) {
  var a = n.match(CJ);
  return a ? a[1].replace(DJ, "'") : n;
}
function Dh(n, a) {
  if (n == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in a)
    Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  return n;
}
function GJ(n) {
  return Dh({}, n);
}
var rf = 1e3 * 60, Fa = 60 * 24, af = Fa * 30, of = Fa * 365;
function YJ(n, a, r) {
  var s, l, f;
  Ae(2, arguments);
  var h = ci(), p = (s = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : h.locale) !== null && s !== void 0 ? s : Ch;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var T = bZ(n, a);
  if (isNaN(T))
    throw new RangeError("Invalid time value");
  var N = Dh(GJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: T
  }), g, b;
  T > 0 ? (g = Qe(a), b = Qe(n)) : (g = Qe(n), b = Qe(a));
  var y = String((f = r == null ? void 0 : r.roundingMethod) !== null && f !== void 0 ? f : "round"), B;
  if (y === "floor")
    B = Math.floor;
  else if (y === "ceil")
    B = Math.ceil;
  else if (y === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var F = b.getTime() - g.getTime(), C = F / rf, D = js(b) - js(g), A = (F - D) / rf, Q = r == null ? void 0 : r.unit, W;
  if (Q ? W = String(Q) : C < 1 ? W = "second" : C < 60 ? W = "minute" : C < Fa ? W = "hour" : A < af ? W = "day" : A < of ? W = "month" : W = "year", W === "second") {
    var H = B(F / 1e3);
    return p.formatDistance("xSeconds", H, N);
  } else if (W === "minute") {
    var k = B(C);
    return p.formatDistance("xMinutes", k, N);
  } else if (W === "hour") {
    var _ = B(C / 60);
    return p.formatDistance("xHours", _, N);
  } else if (W === "day") {
    var $ = B(A / Fa);
    return p.formatDistance("xDays", $, N);
  } else if (W === "month") {
    var L = B(A / af);
    return L === 12 && Q !== "month" ? p.formatDistance("xYears", 1, N) : p.formatDistance("xMonths", L, N);
  } else if (W === "year") {
    var xe = B(A / of);
    return p.formatDistance("xYears", xe, N);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const fn = (n) => {
  let a = "";
  if (n)
    try {
      a = OJ(new Date(n), gt.DATE_FORMAT);
    } catch {
      console.log("error date", n);
    }
  return a;
}, IJ = window.Vue.defineComponent, sa = window.Vue.toDisplayString, bn = window.Vue.createElementVNode, HJ = window.Vue.createVNode, sf = window.Vue.unref, lf = window.Vue.createTextVNode, PJ = window.Vue.openBlock, jJ = window.Vue.createElementBlock, XJ = window.Vue.createCommentVNode, _J = window.Vue.pushScopeId, LJ = window.Vue.popScopeId, Qh = (n) => (_J("data-v-a0ce320e"), n = n(), LJ(), n), qJ = {
  key: 0,
  class: "card"
}, KJ = { class: "row" }, $J = { class: "title" }, ek = ["innerHTML"], tk = /* @__PURE__ */ Qh(() => /* @__PURE__ */ bn("strong", null, "First Event", -1)), nk = /* @__PURE__ */ Qh(() => /* @__PURE__ */ bn("strong", null, "Last Event", -1)), rk = /* @__PURE__ */ IJ({
  __name: "AlarmDetail",
  props: {
    alarm: null
  },
  setup(n) {
    const a = n;
    return (r, s) => {
      var l;
      return a.alarm ? (PJ(), jJ("div", qJ, [
        bn("div", KJ, [
          bn("div", $J, sa(n.alarm.nodeLabel) + " [" + sa(n.alarm.id) + "]", 1),
          HJ(Jh, {
            severity: (l = n.alarm) == null ? void 0 : l.severity
          }, null, 8, ["severity"])
        ]),
        bn("div", {
          class: "description",
          innerHTML: n.alarm.description
        }, null, 8, ek),
        bn("div", null, [
          tk,
          lf(" - " + sa(sf(fn)(n.alarm.firstTime)), 1)
        ]),
        bn("div", null, [
          nk,
          lf(" - " + sa(sf(fn)(n.alarm.time)), 1)
        ])
      ])) : XJ("", !0);
    };
  }
});
const ik = /* @__PURE__ */ Oe(rk, [["__scopeId", "data-v-a0ce320e"]]), ak = window.Vue.defineComponent, ok = window.Vue.normalizeClass, sk = window.Vue.openBlock, lk = window.Vue.createElementBlock, ck = window.Vue.createCommentVNode, uk = /* @__PURE__ */ ak({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, s) => a != null && a.severity ? (sk(), lk("span", {
      key: 0,
      class: ok(["circle", [`${a.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : ck("", !0);
  }
});
const dk = /* @__PURE__ */ Oe(uk, [["__scopeId", "data-v-e08880d6"]]), fk = window.Vue.defineComponent, Xs = window.Vue.createElementVNode, Yr = window.Vue.unref, Oh = window.Vue.createTextVNode, cf = window.Vue.normalizeClass, Fs = window.Vue.withCtx, Ss = window.Vue.createVNode, uf = window.Vue.renderList, df = window.Vue.Fragment, nr = window.Vue.openBlock, la = window.Vue.createElementBlock, hk = window.Vue.toDisplayString, ff = window.Vue.createBlock, pk = window.Vue.createCommentVNode, mk = window.Vue.pushScopeId, Vk = window.Vue.popScopeId, Tk = (n) => (mk("data-v-884f956d"), n = n(), Vk(), n), vk = { class: "container" }, wk = /* @__PURE__ */ Tk(() => /* @__PURE__ */ Xs("div", { class: "title" }, "Alarms", -1)), Uk = /* @__PURE__ */ Oh(" ALL "), Rk = { class: "section" }, Nk = { class: "alarm-list" }, hf = window.Vue.ref, gk = window.Vue.watch, Mk = window.Vue.computed, Zk = /* @__PURE__ */ fk({
  __name: "AlarmFilters",
  props: {
    alarms: null
  },
  setup(n) {
    const a = n, r = Mk(() => Je.exports.keys(Je.exports.groupBy(a.alarms, "severity"))), s = hf(["all"]), l = hf(a.alarms), f = (h) => {
      s.value = s.value.filter((p) => p !== "all"), s.value.includes(h) ? s.value = s.value.filter((p) => p !== h) : s.value.push(h), h === "all" || s.value.length === 0 ? (s.value = ["all"], l.value = a.alarms) : l.value = a.alarms.filter(
        (p) => s.value.includes(p.severity)
      );
    };
    return gk(a, () => {
      s.value = ["all"], l.value = a.alarms;
    }), (h, p) => (nr(), la("div", vk, [
      wk,
      Yr(r).length > 1 ? (nr(), ff(Yr(JZ), {
        key: s.value.toString(),
        condensed: "",
        class: "alarm-filters",
        label: "Random list for condensed visual testing"
      }, {
        default: Fs(() => [
          Ss(Yr(Kd), {
            class: cf({ clicked: s.value.includes("all") }),
            onClick: p[0] || (p[0] = (T) => f("all"))
          }, {
            default: Fs(() => [
              Uk
            ]),
            _: 1
          }, 8, ["class"]),
          (nr(!0), la(df, null, uf(Yr(r), (T) => (nr(), ff(Yr(Kd), {
            class: cf({ clicked: s.value.includes(T) }),
            key: T,
            onClick: (N) => f(T)
          }, {
            default: Fs(() => [
              Ss(dk, { severity: T }, null, 8, ["severity"]),
              Oh(hk(T), 1)
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))), 128))
        ]),
        _: 1
      })) : pk("", !0),
      Xs("div", Rk, [
        Xs("div", Nk, [
          (nr(!0), la(df, null, uf(l.value, (T) => (nr(), la("div", {
            key: T.id
          }, [
            Ss(ik, { alarm: T }, null, 8, ["alarm"])
          ]))), 128))
        ])
      ])
    ]));
  }
});
const Jk = /* @__PURE__ */ Oe(Zk, [["__scopeId", "data-v-884f956d"]]);
var kk = Object.defineProperty, yk = Object.defineProperties, bk = Object.getOwnPropertyDescriptors, pf = Object.getOwnPropertySymbols, Ek = Object.prototype.hasOwnProperty, Fk = Object.prototype.propertyIsEnumerable, mf = (n, a, r) => a in n ? kk(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ir = (n, a) => {
  for (var r in a || (a = {}))
    Ek.call(a, r) && mf(n, r, a[r]);
  if (pf)
    for (var r of pf(a))
      Fk.call(a, r) && mf(n, r, a[r]);
  return n;
}, Vf = (n, a) => yk(n, bk(a));
const Sk = window.Vue.defineComponent, Wk = window.Vue.inject, Hr = window.Vue.h;
var Ak = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const xk = {
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
}, Bk = Sk({
  inheritAttrs: !1,
  props: xk,
  setup() {
    return { hasTooltip: Wk("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const T = ["btn", "hover", "focus", p];
      return this.icon && (T.push("btn-icon"), T.push("btn-icon-table")), this.onColor && T.push("on-color"), T;
    }, a = this.asAnchor ? "a" : "button", r = {}, s = Ir({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const l = n();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let f = Hr(Sn);
    if (this.disabled && (f = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), Hr(a, Vf(Ir(Ir({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Hr(Sn, { center: !0 })
      ]);
    }
    const h = Hr("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Hr(a, Vf(Ir(Ir({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      h,
      f
    ]);
  }
});
var Sa = /* @__PURE__ */ Ak(Bk, [["__scopeId", "data-v-702d1074"]]);
const Ck = "/whoami", Dk = async () => {
  try {
    const n = await mr.get(Ck);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Qk = window.Pinia.defineStore, ui = Qk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await Dk();
      return n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id), n;
    },
    async getAlecInfo() {
      const n = await wR();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const a = await Rh(n);
        this.allowSave = a;
      }
    }
  }
}), Ok = window.Vue.defineComponent, pe = window.Vue.unref, Pr = window.Vue.normalizeClass, Gt = window.Vue.createVNode, jr = window.Vue.toDisplayString, Yt = window.Vue.openBlock, on = window.Vue.createElementBlock, ca = window.Vue.createCommentVNode, Tf = window.Vue.withCtx, zk = window.Vue.createBlock, Pt = window.Vue.createElementVNode, Gk = window.Vue.Fragment, Yk = window.Vue.pushScopeId, Ik = window.Vue.popScopeId, Hk = (n) => (Yk("data-v-26986531"), n = n(), Ik(), n), Pk = { class: "section" }, jk = {
  key: 0,
  class: "btn-row"
}, Xk = { key: 0 }, _k = { key: 1 }, Lk = { key: 0 }, qk = { key: 1 }, Kk = {
  key: 1,
  class: "situation-detail"
}, $k = { class: "situation-info" }, ey = { class: "id" }, ty = ["innerHTML"], ny = /* @__PURE__ */ Hk(() => /* @__PURE__ */ Pt("p", null, null, -1)), ry = { class: "boxes" }, iy = { class: "parameters" }, ay = {
  key: 0,
  class: "section"
}, oy = window.Vue.ref, sy = window.Vue.watch, ly = /* @__PURE__ */ Ok({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(n, { emit: a }) {
    const r = n, s = gt.ACCEPTED, l = gt.REJECTED, f = ui(), h = oy(r.situationInfo.status), p = (T) => {
      var N, g;
      RR((N = r.situationInfo) == null ? void 0 : N.id, T.toLowerCase()), h.value = T, a("situation-status-changed", T, (g = r.situationInfo) == null ? void 0 : g.id);
    };
    return sy(r, () => {
      h.value = r.situationInfo.status || "";
    }), (T, N) => {
      var g, b, y, B, F, C;
      return Yt(), on(Gk, null, [
        Pt("div", Pk, [
          pe(f).allowSave ? (Yt(), on("div", jk, [
            h.value !== pe(l) ? (Yt(), zk(pe(Sa), {
              key: 0,
              class: Pr(["btn", { accepted: h.value == pe(s) }]),
              onClick: N[0] || (N[0] = () => p(pe(s)))
            }, {
              default: Tf(() => [
                Gt(pe(Pe), {
                  icon: pe(Nh),
                  "aria-hidden": "true",
                  class: Pr(["icon accept", { accepted: h.value == pe(s) }])
                }, null, 8, ["icon", "class"]),
                h.value == pe(s) ? (Yt(), on("span", Xk, jr(pe(s)), 1)) : (Yt(), on("span", _k, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"])) : ca("", !0),
            Gt(pe(Sa), {
              class: Pr(["btn", { rejected: h.value == pe(l) }]),
              onClick: N[1] || (N[1] = () => p(pe(l)))
            }, {
              default: Tf(() => [
                Gt(pe(Pe), {
                  icon: pe(gh),
                  "aria-hidden": "true",
                  class: Pr(["icon reject", { rejected: h.value == pe(l) }])
                }, null, 8, ["icon", "class"]),
                h.value == pe(l) ? (Yt(), on("span", Lk, jr(pe(l)), 1)) : (Yt(), on("span", qk, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : ca("", !0),
          r.situationInfo ? (Yt(), on("div", Kk, [
            Pt("div", {
              class: Pr(["severity-line", [`${(b = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            Pt("div", $k, [
              Pt("div", ey, [
                Pt("div", null, " Situation - " + jr((y = r.situationInfo) == null ? void 0 : y.id) + " - affecting " + jr(pe(Je.exports.size)(pe(Je.exports.groupBy)((B = r.situationInfo) == null ? void 0 : B.alarms, "nodeId"))) + " node having " + jr(r.situationInfo.alarms.length) + " alarms ", 1),
                Gt(Jh, {
                  severity: (F = r.situationInfo) == null ? void 0 : F.severity
                }, null, 8, ["severity"])
              ]),
              Pt("span", {
                innerHTML: r.situationInfo.description
              }, null, 8, ty),
              ny,
              Pt("div", ry, [
                Gt(Js, {
                  label: "First Event",
                  info: pe(fn)(r.situationInfo.creationTime)
                }, null, 8, ["info"]),
                Gt(Js, {
                  label: "Last Event",
                  info: pe(fn)(r.situationInfo.lastTime)
                }, null, 8, ["info"]),
                Gt(Js, {
                  label: "Reduction key",
                  info: r.situationInfo.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Pt("div", iy, [
              Gt(yg, {
                alarms: (C = r.situationInfo) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ca("", !0)
        ]),
        r.situationInfo.alarms.length > 0 ? (Yt(), on("div", ay, [
          Gt(Jk, {
            alarms: r.situationInfo.alarms
          }, null, 8, ["alarms"])
        ])) : ca("", !0)
      ], 64);
    };
  }
});
const cy = /* @__PURE__ */ Oe(ly, [["__scopeId", "data-v-26986531"]]);
const uy = window.Vue.openBlock, dy = window.Vue.createElementBlock, fy = window.Vue.createElementVNode;
var hy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const py = {}, my = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vy = /* @__PURE__ */ fy("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), Ty = [
  Vy
];
function vy(n, a) {
  return uy(), dy("svg", my, Ty);
}
var wy = /* @__PURE__ */ hy(py, [["render", vy]]);
const Uy = window.Vue.watch, Ry = window.Vue.onBeforeUnmount, Ny = window.Vue.ref, gy = window.Vue.onMounted, My = (n) => {
  const a = Ny(!1);
  let r = !1;
  const s = (h) => {
    n(h), r = !1;
  };
  function l(h) {
    r || (requestAnimationFrame(() => s(h)), r = !0);
  }
  const f = () => {
    window && window.removeEventListener("resize", l);
  };
  return gy(() => {
    const h = Uy(a, (p) => {
      window && p ? window.addEventListener("resize", l) : f();
    }, {
      immediate: !0
    });
    Ry(() => {
      h(), f();
    });
  }), a;
}, Zy = window.Vue.watch, Jy = window.Vue.onBeforeUnmount, ky = window.Vue.ref, yy = window.Vue.onMounted, by = (n, a) => {
  const r = ky(!1), s = (h) => {
    h.target === window && a(h);
  }, l = (h) => {
    let p = [];
    Array.isArray(n.value) ? p = n.value : p = [n.value], p.some((N) => N && N.contains(h.target)) || a(h);
  }, f = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", s));
  };
  return yy(() => {
    const h = Zy(r, (p) => {
      document && window && p ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", s)) : f();
    }, {
      immediate: !0
    });
    Jy(() => {
      h(), f();
    });
  }), r;
}, Ey = window.Vue.watch, Fy = window.Vue.onBeforeUnmount, Sy = window.Vue.ref, zh = (n, a) => {
  const r = Sy(!1);
  let s = !1;
  const l = (T) => {
    a(T), s = !1;
  };
  function f(T) {
    s || (requestAnimationFrame(() => l(T)), s = !0);
  }
  const h = () => {
    n.value && n.value.removeEventListener("scroll", f, !0);
  }, p = Ey([n, r], ([T, N], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", f, !0), N && T ? T.addEventListener("scroll", f, !0) : h();
  }, {
    immediate: !0
  });
  return Fy(() => {
    p(), h();
  }), r;
}, Wy = window.Vue.defineComponent, It = window.Vue.ref, vf = window.Vue.toRef, Ay = window.Vue.onMounted, xy = window.Vue.watch, wf = window.Vue.computed, By = window.Vue.nextTick, Uf = window.Vue.openBlock, Rf = window.Vue.createElementBlock, Nf = window.Vue.renderSlot, Cy = window.Vue.normalizeClass, Dy = window.Vue.normalizeStyle, Qy = window.Vue.createCommentVNode;
var Oy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const zy = {
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
}, Gy = {
  "trigger-click": (n) => !0,
  "outside-click": (n) => !0
}, Yy = Wy({
  emits: Gy,
  props: zy,
  setup(n, a) {
    const r = It(), s = It(), l = vf(n, "open"), f = vf(n, "noExpand"), h = It("auto"), p = It(), T = It(n.triggerId || we("feather-menu-trigger")), N = It(we("feather-menu-dropdown")), g = It(""), b = It("");
    Ay(() => {
      p.value = window;
    });
    const y = It(!1), B = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), F = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      y.value = !0, h.value = "auto", By(() => {
        let { height: _, width: $ } = s.value.getBoundingClientRect();
        const L = B(), xe = L.height, je = L.width;
        n.fill && $ < k.width ? (h.value = k.width + "px", $ = k.width) : h.value = $ + "px";
        let de = 0;
        xe - k.bottom < _ && k.top >= _ ? (de = k.top - _, n.cover && (de += k.height)) : (de = k.bottom, n.cover && (de -= k.height));
        let fe = n.right ? k.right - $ : k.left;
        !n.right && k.right >= $ && je - k.left < $ && (fe = k.right - $), n.right && k.right <= $ && je - k.left > $ && (fe = k.left), b.value = `${fe}px`, g.value = `${de}px`, y.value = !1;
      });
    }, D = by(r, (k) => {
      a.emit("outside-click", k);
    }), A = My(F), Q = zh(p, F);
    xy([l, s], ([k, _]) => {
      k && _ && F(), D.value = k, A.value = k, Q.value = k;
    });
    const W = wf(() => {
      const k = {
        id: T.value,
        "aria-haspopup": "true"
      };
      return l.value && (k["aria-controls"] = N.value), f.value || (k["aria-expanded"] = l.value ? "true" : "false"), k;
    }), H = wf(() => ({
      click: (k) => {
        a.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: g,
      positionLeft: b,
      triggerId: T,
      triggerAttrs: W,
      triggerListeners: H,
      menuId: N,
      menu: s,
      menuWidth: h,
      root: r,
      calculatePosition: F,
      calculating: y
    };
  }
}), Iy = ["data-ref-id"], Hy = ["data-ref-id", "id"];
function Py(n, a, r, s, l, f) {
  return Uf(), Rf("div", {
    class: "feather-menu",
    "data-ref-id": n.dataRefId,
    ref: "root"
  }, [
    Nf(n.$slots, "trigger", {
      attrs: n.triggerAttrs,
      on: n.triggerListeners
    }, void 0, !0),
    n.open ? (Uf(), Rf("div", {
      key: 0,
      class: Cy(["feather-menu-dropdown", { hidden: n.calculating }]),
      "data-ref-id": n.dataRefId + "-dropdown",
      ref: "menu",
      id: n.menuId,
      style: Dy({ left: n.positionLeft, top: n.positionTop, width: n.menuWidth })
    }, [
      Nf(n.$slots, "default", { labelId: n.triggerId }, void 0, !0)
    ], 14, Hy)) : Qy("", !0)
  ], 8, Iy);
}
var jy = /* @__PURE__ */ Oy(Yy, [["render", Py], ["__scopeId", "data-v-f75af406"]]);
const Xy = window.Vue.defineComponent, _y = window.Vue.openBlock, Ly = window.Vue.createElementBlock, qy = window.Vue.normalizeClass, Ky = window.Vue.pushScopeId, $y = window.Vue.popScopeId, _s = window.Vue.createElementVNode;
var e2 = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const t2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, n2 = {
  click: (n) => !0
}, r2 = Xy({
  emits: n2,
  props: t2,
  methods: {
    handleClick(n) {
      this.disabled || this.$emit("click", n);
    }
  }
}), Gh = (n) => (Ky("data-v-07e020f5"), n = n(), $y(), n), i2 = /* @__PURE__ */ Gh(() => /* @__PURE__ */ _s("div", { class: "track" }, null, -1)), a2 = /* @__PURE__ */ Gh(() => /* @__PURE__ */ _s("div", { class: "switcher" }, [
  /* @__PURE__ */ _s("div", { class: "switch-circle" })
], -1)), o2 = [
  i2,
  a2
];
function s2(n, a, r, s, l, f) {
  return _y(), Ly("div", {
    class: qy(["switch-container", { checked: n.checked, disabled: n.disabled }]),
    onClick: a[0] || (a[0] = (...h) => n.handleClick && n.handleClick(...h))
  }, o2, 2);
}
var l2 = /* @__PURE__ */ e2(r2, [["render", s2], ["__scopeId", "data-v-07e020f5"]]), c2 = Object.defineProperty, u2 = Object.defineProperties, d2 = Object.getOwnPropertyDescriptors, gf = Object.getOwnPropertySymbols, f2 = Object.prototype.hasOwnProperty, h2 = Object.prototype.propertyIsEnumerable, Mf = (n, a, r) => a in n ? c2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Zf = (n, a) => {
  for (var r in a || (a = {}))
    f2.call(a, r) && Mf(n, r, a[r]);
  if (gf)
    for (var r of gf(a))
      h2.call(a, r) && Mf(n, r, a[r]);
  return n;
}, Jf = (n, a) => u2(n, d2(a));
const Ml = window.Vue.defineComponent, Zn = window.Vue.h, p2 = window.Vue.openBlock, m2 = window.Vue.createElementBlock, V2 = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Yh = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const T2 = {
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
}, v2 = Ml({
  inheritAttrs: !1,
  props: T2,
  render() {
    let n;
    this.$slots.icon && this.$slots.icon().findIndex((h) => h.children && h.children.length !== 0 || h.type && h.type.render) !== -1 && (n = Zn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Zn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Zn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Zn(Sn);
    if (this.asLi)
      return Zn("li", Jf(Zf({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [n, r, s, l]);
    const f = Zn("a", Jf(Zf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [n, r, s, l]);
    return Zn("li", {}, [f]);
  }
});
var Zl = /* @__PURE__ */ Yh(v2, [["__scopeId", "data-v-7c46b2b3"]]);
Ml({
  components: {
    FeatherListItem: Zl
  }
});
const w2 = {}, U2 = { class: "feather-list" };
function R2(n, a) {
  return p2(), m2("ul", U2, [
    V2(n.$slots, "default", {}, void 0, !0)
  ]);
}
var N2 = /* @__PURE__ */ Yh(w2, [["render", R2], ["__scopeId", "data-v-941a1d50"]]);
const g2 = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  keydown: (n) => !0
}, M2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Ml({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: g2,
  props: M2,
  computed: {
    labelId() {
      return we("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(n) {
      this.focus(), this.updateValue(), this.$emit("click", n);
    },
    keydown(n) {
      (n.keyCode === ge.SPACE || n.keyCode === ge.ENTER) && this.updateValue(), n.keyCode === ge.SPACE && n.preventDefault(), this.$emit("keydown", n);
    }
  },
  components: { SwitchRender: l2, FeatherListItem: Zl }
});
const Z2 = function(n, a) {
  if (!n || !a)
    return;
  let r = n.getBoundingClientRect().height;
  const s = getComputedStyle(n);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), a.scrollTop = n.offsetTop - a.getBoundingClientRect().height + r;
};
var J2 = Object.defineProperty, k2 = Object.defineProperties, y2 = Object.getOwnPropertyDescriptors, kf = Object.getOwnPropertySymbols, b2 = Object.prototype.hasOwnProperty, E2 = Object.prototype.propertyIsEnumerable, yf = (n, a, r) => a in n ? J2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ls = (n, a) => {
  for (var r in a || (a = {}))
    b2.call(a, r) && yf(n, r, a[r]);
  if (kf)
    for (var r of kf(a))
      E2.call(a, r) && yf(n, r, a[r]);
  return n;
}, F2 = (n, a) => k2(n, y2(a));
const Ih = window.Vue.defineComponent, En = window.Vue.resolveComponent, Ta = window.Vue.openBlock, bf = window.Vue.createBlock, va = window.Vue.mergeProps, Fn = window.Vue.withCtx, Hh = window.Vue.createElementBlock, S2 = window.Vue.Fragment, W2 = window.Vue.renderList, A2 = window.Vue.createTextVNode, x2 = window.Vue.toDisplayString, B2 = window.Vue.computed, Ef = window.Vue.toRef, Xr = window.Vue.createVNode, Ff = window.Vue.toHandlers, C2 = window.Vue.renderSlot, D2 = window.Vue.normalizeClass, Q2 = window.Vue.createElementVNode;
var Ph = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const O2 = Ih({
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
      return we("feather-select-active");
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
    activeIndex(n) {
      n > -1 && this.$nextTick(() => {
        const a = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[n];
        Z2(a, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(n) {
      return this.activeIndex === n;
    },
    getId(n) {
      return n === this.activeIndex ? this.activeId : null;
    },
    select(n) {
      this.$emit("select", n);
    }
  },
  components: {
    FeatherList: N2,
    FeatherListItem: Zl
  }
});
function z2(n, a, r, s, l, f) {
  const h = En("FeatherListItem"), p = En("FeatherList");
  return Ta(), bf(p, va(n.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Fn(() => [
      (Ta(!0), Hh(S2, null, W2(n.options, (T, N) => (Ta(), bf(h, {
        key: T[n.textProp],
        "as-li": "",
        id: n.getId(N),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": n.isSelected(N),
        selected: n.isSelected(N),
        onClick: (g) => n.select(T)
      }, {
        default: Fn(() => [
          A2(x2(T[n.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var G2 = /* @__PURE__ */ Ph(O2, [["render", z2], ["__scopeId", "data-v-eae820da"]]);
const Y2 = F2(Ls(Ls({}, BM), wl), {
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
}), I2 = {
  "update:modelValue": (n) => !0
}, H2 = Ih({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: I2,
  props: Y2,
  setup(n, a) {
    Ul(n), CM(n);
    const r = B2(() => we("feather-select-input")), { validate: s } = Tl(r, Ef(n, "modelValue"), n.label, n.schema, Ef(n, "error"));
    return Ls({
      inputId: r,
      validate: s
    }, vl(a.attrs));
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
      return we("feather-select-description");
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
        const n = this.internalValue, a = this.options.filter((r) => r[this.textProp] === n[this.textProp]);
        if (a && a.length)
          return this.options.indexOf(a[0]);
      }
      return -1;
    },
    icon: () => wy
  },
  watch: {
    showMenu(n) {
      n ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(n) {
      this.internalValue = n;
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
    handleSelect(n) {
      this.select(n), this.showMenu = !1, this.$refs.input.focus();
    },
    select(n) {
      this.internalValue = n;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(n) {
      if (n.keyCode === ge.ENTER)
        n.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (n.keyCode === ge.ESCAPE)
        this.closeMenu(), n.stopPropagation();
      else if (n.keyCode === ge.DOWN)
        n.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (n.keyCode === ge.UP)
        n.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (n.keyCode === ge.HOME)
        n.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (n.keyCode === ge.END)
        n.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const a = String.fromCharCode(n.keyCode);
        this.charsSoFar += a, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      ga(this.delayTimeout), this.delayTimeout = Na(() => {
        const n = this.options.filter((a) => a[this.textProp] && a[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        n && n.length && this.select(n[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: yM,
    InputSubText: Vl,
    FeatherMenu: jy,
    List: G2,
    FeatherIcon: Pe
  }
});
function P2(n, a, r, s, l, f) {
  const h = En("FeatherIcon"), p = En("InputWrapper"), T = En("List"), N = En("FeatherMenu"), g = En("InputSubText");
  return Ta(), Hh("div", va(n.inherittedAttrs, { class: "feather-select-container" }), [
    Xr(N, {
      "no-expand": "",
      fill: "",
      open: n.showMenu,
      onOutsideClick: n.handleOutsideClick,
      onTriggerClick: n.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Fn((b) => [
        Xr(p, va({
          for: n.inputId,
          raised: n.raised,
          focused: n.hasFocus,
          "show-clear": n.showClear,
          onClear: n.handleClear
        }, b.attrs, Ff(b.on), {
          class: ["feather-select-wrapper", { focused: n.hasFocus }]
        }), {
          pre: Fn(() => [
            C2(n.$slots, "pre", {}, void 0, !0)
          ]),
          post: Fn(() => [
            Xr(h, {
              class: D2(["feather-select-icon", { rotate: n.showMenu }]),
              icon: n.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Fn(() => [
            Q2("input", va(n.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Ff(n.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Fn(() => [
        Xr(T, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: n.label,
          options: n.options,
          "text-prop": n.textProp,
          "active-index": n.activeIndex,
          onSelect: n.handleSelect,
          onKeydown: n.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    Xr(g, { id: n.subTextId }, null, 8, ["id"])
  ], 16);
}
var j2 = /* @__PURE__ */ Ph(H2, [["render", P2], ["__scopeId", "data-v-ecb32d90"]]);
const X2 = window.Vue.openBlock, _2 = window.Vue.createElementBlock, jh = window.Vue.createElementVNode;
var L2 = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const q2 = {}, K2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $2 = /* @__PURE__ */ jh("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), eb = /* @__PURE__ */ jh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), tb = [
  $2,
  eb
];
function nb(n, a) {
  return X2(), _2("svg", K2, tb);
}
var rb = /* @__PURE__ */ L2(q2, [["render", nb]]);
const wa = window.Vue.openBlock, qs = window.Vue.createElementBlock, Xh = window.Vue.createElementVNode, ib = window.Vue.defineComponent, Jn = window.Vue.ref, ab = window.Vue.provide, Sf = window.Vue.computed, ob = window.Vue.onUnmounted, Wf = window.Vue.toRef, sb = window.Vue.resolveComponent, lb = window.Vue.Fragment, cb = window.Vue.createBlock, ub = window.Vue.Teleport, Af = window.Vue.createVNode, db = window.Vue.Transition, fb = window.Vue.withCtx, hb = window.Vue.normalizeClass, pb = window.Vue.normalizeStyle, mb = window.Vue.toDisplayString, Vb = window.Vue.createCommentVNode, Tb = window.Vue.renderSlot, Ws = window.Vue.nextTick;
var _h = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const vb = {}, wb = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Ub = /* @__PURE__ */ Xh("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), Rb = [
  Ub
];
function Nb(n, a) {
  return wa(), qs("svg", wb, Rb);
}
var gb = /* @__PURE__ */ _h(vb, [["render", Nb]]), Se = /* @__PURE__ */ ((n) => (n.top = "top", n.bottom = "bottom", n.left = "left", n.right = "right", n))(Se || {}), jt = /* @__PURE__ */ ((n) => (n.center = "center", n.left = "left", n.right = "right", n))(jt || {});
const Mb = (n, a, r, s = 9) => {
  const l = window.innerHeight - n.bottom, f = window.innerWidth - n.right, h = [];
  n.top >= a.height + s && h.push(Se.top), l >= a.height + s && h.push(Se.bottom);
  const p = [];
  f >= a.width + s && p.push(Se.right), n.left >= a.width + s && p.push(Se.left);
  let T = [...p, ...h];
  return (r === Se.top || r === Se.bottom) && (T = [...h, ...p]), T.indexOf(r) > -1 ? r : T.length ? T[0] : r;
}, Zb = (n, a, r, s, l = 28) => {
  if (n === Se.left || n === Se.right)
    return jt.center;
  const f = a.left + a.width / 2, h = window.innerWidth - a.right, p = [], T = f, N = h + a.width / 2, g = r.width - l, b = r.width / 2;
  return T >= b && N >= b && p.push(jt.center), N >= g && p.push(jt.left), T >= g && p.push(jt.right), p.indexOf(s) > -1 ? s : p.length ? p[0] : s;
}, Jb = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Se.top
  },
  pointerAlignment: {
    type: String,
    default: () => jt.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, kb = ib({
  props: Jb,
  setup(n) {
    const a = Jn(!1), r = Jn(!1), s = we("feather-tooltip-trigger"), l = we("feather-tooltip"), f = "data-feather-tooltip";
    ab("feather-has-tooltip", !0);
    let h = 0;
    const p = () => {
      ga(h), a.value || (h = Na(C, n.enterDelay));
    }, T = () => {
      ga(h), h = Na(D, n.exitDelay);
    }, N = (de) => {
      de.keyCode === ge.ESCAPE && (de.preventDefault(), D(!0));
    }, g = Sf(() => ({
      [f]: s,
      "aria-describedby": l
    })), b = {
      mouseenter: p,
      mouseleave: T,
      focus: p,
      blur: T,
      keydown: N
    }, y = Jn(document), B = zh(y, () => D(!0));
    ob(() => D(!0));
    const F = () => document.getElementById(l), C = () => {
      r.value = !1, a.value = !0, Ws(() => {
        const de = F();
        je(de), a.value = !1, Ws(() => {
          r.value = !0, a.value = !0, B.value = !0;
        });
      });
    }, D = (de = !1) => {
      _.value = "", k.value = "", $.value = "", L.value = "", a.value = !1, de && (r.value = !1), B.value = !1;
    }, A = Wf(n, "placement"), Q = Wf(n, "pointerAlignment"), W = 8, H = 24, k = Jn(""), _ = Jn(""), $ = Jn(""), L = Jn(""), xe = Sf(() => L.value ? "p-" + L.value : !1), je = (de) => {
      const fe = document.querySelector(`[${f}=${s}]`);
      if (!fe) {
        console.log("trigger not found");
        return;
      }
      Ws(() => {
        const me = fe.getBoundingClientRect(), Ue = de.getBoundingClientRect(), ae = Mb(me, Ue, A.value, W), ye = Zb(ae, me, Ue, Q.value, H);
        $.value = ye.toString(), L.value = ae.toString();
        let be = 0, ze = 0;
        if ((ae === Se.left || ae === Se.right) && (be = me.top + me.height / 2 - Ue.height / 2, ae === Se.left && (ze = me.left - Ue.width - W), ae === Se.right && (ze = me.right)), ae === Se.top || ae === Se.bottom) {
          be = me.top - Ue.height - W, ae === Se.bottom && (be = me.bottom);
          const Tr = me.left + me.width / 2;
          switch (ye) {
            case jt.center:
              ze = Tr - Ue.width / 2;
              break;
            case jt.left:
              ze = Tr - H;
              break;
            case jt.right:
              ze = Tr - Ue.width + H;
              break;
          }
        }
        k.value = be.toString() + "px", _.value = ze.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: b,
      show: a,
      animate: r,
      alignmentClass: $,
      placementClass: xe,
      top: k,
      left: _,
      tooltipID: l
    };
  },
  components: {
    Pointer: gb
  }
}), yb = ["id"];
function bb(n, a, r, s, l, f) {
  const h = sb("Pointer");
  return wa(), qs(lb, null, [
    (wa(), cb(ub, { to: "body" }, [
      Af(db, { css: n.animate }, {
        default: fb(() => [
          n.show ? (wa(), qs("div", {
            key: 0,
            class: hb(["feather-tooltip-container", [n.alignmentClass, n.placementClass]]),
            ref: "tooltip",
            style: pb({ left: n.left, top: n.top })
          }, [
            Xh("div", {
              class: "tooltip",
              role: "tooltip",
              id: n.tooltipID
            }, mb(n.title), 9, yb),
            Af(h, { class: "tooltip-pointer" })
          ], 6)) : Vb("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    Tb(n.$slots, "default", {
      attrs: n.attrs,
      on: n.listeners
    }, void 0, !0)
  ], 64);
}
var xf = /* @__PURE__ */ _h(kb, [["render", bb], ["__scopeId", "data-v-3da6b22e"]]);
const Eb = window.Vue.defineComponent, ua = window.Vue.unref, Bf = window.Vue.toHandlers, Cf = window.Vue.mergeProps, Df = window.Vue.createElementVNode, Qf = window.Vue.withCtx, Fb = window.Vue.createVNode, Sb = window.Vue.normalizeClass, Wb = window.Vue.normalizeStyle, As = window.Vue.openBlock, Of = window.Vue.createElementBlock, zf = window.Vue.createCommentVNode, Ab = window.Vue.createBlock, xb = window.Vue.Fragment, Bb = /* @__PURE__ */ Eb({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(n) {
    const a = n, r = (l, f) => l && f ? (Number(f) - Number(l)) * a.proportion : 0, s = (l) => l ? (Number(l) - Number(a.minStart)) * a.proportion : 0;
    return (l, f) => (As(), Of(xb, null, [
      Fb(ua(xf), {
        title: ua(fn)(n.alarm.firstTime)
      }, {
        default: Qf(({ attrs: h, on: p }) => [
          Df("div", Cf({ class: "circle" }, h, Bf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: s(n.alarm.firstTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      n.alarm.time !== n.alarm.firstTime ? (As(), Of("div", {
        key: 0,
        class: Sb(["line", [`${n.alarm.severity.toLowerCase()}-bg dark`]]),
        style: Wb({
          width: r(n.alarm.firstTime, n.alarm.time) + "px"
        })
      }, null, 6)) : zf("", !0),
      n.alarm.time !== n.alarm.firstTime ? (As(), Ab(ua(xf), {
        key: 1,
        title: ua(fn)(n.alarm.time)
      }, {
        default: Qf(({ attrs: h, on: p }) => [
          Df("div", Cf({ class: "circle" }, h, Bf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])) : zf("", !0)
    ], 64));
  }
});
const Cb = /* @__PURE__ */ Oe(Bb, [["__scopeId", "data-v-75e95337"]]), Db = window.Vue.openBlock, Qb = window.Vue.createElementBlock, Lh = window.Vue.createElementVNode;
var Ob = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const zb = {}, Gb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Yb = /* @__PURE__ */ Lh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ib = /* @__PURE__ */ Lh("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), Hb = [
  Yb,
  Ib
];
function Pb(n, a) {
  return Db(), Qb("svg", Gb, Hb);
}
var jb = /* @__PURE__ */ Ob(zb, [["render", Pb]]);
const Xb = window.Vue.defineComponent, _b = window.Vue.normalizeClass, De = window.Vue.createElementVNode, rr = window.Vue.toDisplayString, sn = window.Vue.unref, da = window.Vue.createVNode, Lb = window.Vue.createTextVNode, Gf = window.Vue.renderList, xs = window.Vue.Fragment, ir = window.Vue.openBlock, ar = window.Vue.createElementBlock, qb = window.Vue.createCommentVNode, Kb = window.Vue.pushScopeId, $b = window.Vue.popScopeId, eE = (n) => (Kb("data-v-eb2e440b"), n = n(), $b(), n), tE = { class: "section detail" }, nE = { class: "id" }, rE = {
  key: 0,
  class: "section"
}, iE = /* @__PURE__ */ eE(() => /* @__PURE__ */ De("div", { class: "id" }, "Alarms", -1)), aE = { class: "action-btns" }, oE = { class: "zoom" }, sE = /* @__PURE__ */ Lb(" Zoom "), lE = { class: "alarms" }, cE = { class: "times" }, uE = { class: "container" }, dE = { class: "ids" }, fE = { class: "timeline-container" }, or = window.Vue.ref, hE = window.Vue.watch, pE = /* @__PURE__ */ Xb({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(n) {
    var F, C, D, A;
    const a = n, r = 700;
    let s = or(r);
    const l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], f = or(l[0]), h = () => s.value / (Number(N.value) - Number(T.value)), p = or(a.situation.alarms), T = or(
      ((C = Je.exports.minBy((F = a.situation) == null ? void 0 : F.alarms, "firstTime")) == null ? void 0 : C.firstTime) || new Date()
    ), N = or(((A = Je.exports.maxBy((D = a.situation) == null ? void 0 : D.alarms, "time")) == null ? void 0 : A.time) || new Date()), g = or(h());
    hE(a, () => {
      var Q, W, H, k;
      T.value = ((W = Je.exports.minBy((Q = a.situation) == null ? void 0 : Q.alarms, "firstTime")) == null ? void 0 : W.firstTime) || new Date(), N.value = ((k = Je.exports.maxBy((H = a.situation) == null ? void 0 : H.alarms, "time")) == null ? void 0 : k.time) || new Date(), s.value = r, g.value = h(), p.value = a.situation.alarms, f.value = l[0];
    });
    const b = (Q) => {
      if ((Q == null ? void 0 : Q.id) === 1 && (p.value = a.situation.alarms), (Q == null ? void 0 : Q.id) === 2) {
        const W = Je.exports.groupBy(p.value, "severity"), H = [
          ...W.CRITICAL || [],
          ...W.MAJOR || [],
          ...W.MINOR || [],
          ...W.WARNING || [],
          ...W.NORMAL || [],
          ...W.CLEARED || [],
          ...W.INDETERMINATE || []
        ];
        p.value = H.filter((k) => k);
      }
      if ((Q == null ? void 0 : Q.id) === 3) {
        const W = Je.exports.reverse(
          Je.exports.sortBy(
            a.situation.alarms,
            (H) => Number(H.time) - Number(H.firstTime)
          )
        );
        p.value = W;
      }
    }, y = () => {
      s.value += 100, g.value = h();
    }, B = () => {
      s.value -= 100, g.value = h();
    };
    return (Q, W) => {
      var H, k;
      return ir(), ar(xs, null, [
        De("div", tE, [
          De("div", {
            class: _b(["severity-line", [`${(k = (H = a.situation) == null ? void 0 : H.severity) == null ? void 0 : k.toLowerCase()}-bg dark`]])
          }, null, 2),
          De("div", null, [
            De("div", nE, "Situation " + rr(a.situation.id), 1),
            De("div", null, " Duration: " + rr(sn(YJ)(new Date(N.value), new Date(T.value))), 1)
          ])
        ]),
        p.value.length > 0 ? (ir(), ar("div", rE, [
          iE,
          De("div", aE, [
            da(sn(j2), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: f.value,
              "onUpdate:modelValue": [
                W[0] || (W[0] = (_) => f.value = _),
                b
              ],
              "text-prop": "name"
            }, null, 8, ["modelValue"]),
            De("div", oE, [
              sE,
              De("div", null, [
                da(sn(Pe), {
                  icon: sn(rb),
                  class: "zoom-icon",
                  onClick: y
                }, null, 8, ["icon"]),
                da(sn(Pe), {
                  icon: sn(jb),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          De("div", lE, [
            De("div", cE, [
              De("div", null, rr(sn(fn)(T.value)), 1),
              De("div", null, rr(sn(fn)(N.value)), 1)
            ]),
            De("div", uE, [
              De("div", dE, [
                (ir(!0), ar(xs, null, Gf(p.value, (_) => (ir(), ar("div", {
                  class: "alarm-id",
                  key: _.id
                }, rr(_.nodeLabel) + " [ " + rr(_.id) + " ] ", 1))), 128))
              ]),
              De("div", fE, [
                (ir(!0), ar(xs, null, Gf(p.value, (_) => (ir(), ar("div", {
                  class: "timeline",
                  key: _.id
                }, [
                  da(Cb, {
                    alarm: _,
                    proportion: g.value,
                    "min-start": T.value,
                    "max-end": N.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : qb("", !0)
      ], 64);
    };
  }
});
const mE = /* @__PURE__ */ Oe(pE, [["__scopeId", "data-v-eb2e440b"]]), VE = window.Vue.defineComponent, qh = window.Vue.createTextVNode, _r = window.Vue.unref, sr = window.Vue.withCtx, kn = window.Vue.createVNode, TE = window.Vue.openBlock, vE = window.Vue.createElementBlock, wE = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UE = {
  key: 0,
  class: "detail"
}, RE = /* @__PURE__ */ qh("Details"), NE = /* @__PURE__ */ qh("Metrics"), gE = /* @__PURE__ */ VE({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  emits: ["situation-status-changed"],
  setup(n, { emit: a }) {
    const r = n, s = (l, f) => {
      a("situation-status-changed", l, f);
    };
    return (l, f) => r.alarmInfo ? (TE(), vE("div", UE, [
      kn(_r(ng), null, {
        tabs: sr(() => [
          kn(_r(Dd), null, {
            default: sr(() => [
              RE
            ]),
            _: 1
          }),
          kn(_r(Dd), null, {
            default: sr(() => [
              NE
            ]),
            _: 1
          })
        ]),
        default: sr(() => [
          kn(_r(Qd), { class: "panel" }, {
            default: sr(() => [
              kn(cy, {
                "situation-info": r.alarmInfo,
                onSituationStatusChanged: s
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          kn(_r(Qd), { class: "panel" }, {
            default: sr(() => [
              kn(mE, {
                situation: r == null ? void 0 : r.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : wE("", !0);
  }
});
const ME = /* @__PURE__ */ Oe(gE, [["__scopeId", "data-v-b34edfcf"]]), ZE = window.Vue.defineComponent, Ks = window.Vue.createElementVNode, JE = window.Vue.renderList, kE = window.Vue.Fragment, Bs = window.Vue.openBlock, Cs = window.Vue.createElementBlock, Yf = window.Vue.createVNode, yE = window.Vue.unref, bE = window.Vue.pushScopeId, EE = window.Vue.popScopeId, FE = (n) => (bE("data-v-d7c51438"), n = n(), EE(), n), SE = { class: "list-main" }, WE = /* @__PURE__ */ FE(() => /* @__PURE__ */ Ks("h2", null, "Situation List", -1)), AE = { class: "container" }, xE = { class: "situation-list" }, BE = window.Vue.reactive, CE = window.Vue.ref, DE = /* @__PURE__ */ ZE({
  __name: "SituationList",
  setup(n) {
    const a = MR();
    a.getSituations();
    const r = BE({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), s = CE(a.situations), l = (h) => {
      window.scrollTo(0, 0), r.situationSelected = h, r.selectedSituationIndex = a.situations.findIndex(
        (p) => p.id === h
      );
    }, f = (h, p) => {
      const T = s.value;
      T.forEach((N) => {
        N.id === p && (N.status = h);
      }), s.value = Je.exports.cloneDeep(T);
    };
    return a.$subscribe((h, p) => {
      var T;
      s.value = a.situations, r.situationSelected = (T = p.situations[0]) == null ? void 0 : T.id;
    }), (h, p) => (Bs(), Cs("div", SE, [
      WE,
      Ks("div", AE, [
        Ks("div", xE, [
          (Bs(!0), Cs(kE, null, JE(s.value, (T) => (Bs(), Cs("div", {
            key: T.id
          }, [
            Yf(cN, {
              "situation-info": T,
              onSituationSelected: l,
              selected: r.situationSelected == T.id
            }, null, 8, ["situation-info", "selected"])
          ]))), 128))
        ]),
        Yf(ME, {
          "alarm-info": yE(a).situations[r.selectedSituationIndex],
          onSituationStatusChanged: f
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const QE = /* @__PURE__ */ Oe(DE, [["__scopeId", "data-v-d7c51438"]]);
var OE = Object.defineProperty, zE = Object.defineProperties, GE = Object.getOwnPropertyDescriptors, If = Object.getOwnPropertySymbols, YE = Object.prototype.hasOwnProperty, IE = Object.prototype.propertyIsEnumerable, Hf = (n, a, r) => a in n ? OE(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ua = (n, a) => {
  for (var r in a || (a = {}))
    YE.call(a, r) && Hf(n, r, a[r]);
  if (If)
    for (var r of If(a))
      IE.call(a, r) && Hf(n, r, a[r]);
  return n;
}, Kh = (n, a) => zE(n, GE(a));
const $h = window.Vue.defineComponent, HE = window.Vue.ref, ni = window.Vue.computed, PE = window.Vue.reactive, Pf = window.Vue.watch, Ds = window.Vue.inject, ep = window.Vue.resolveComponent, $s = window.Vue.openBlock, tp = window.Vue.createElementBlock, dn = window.Vue.createElementVNode, jE = window.Vue.createBlock, XE = window.Vue.createCommentVNode, np = window.Vue.renderSlot, _E = window.Vue.pushScopeId, LE = window.Vue.popScopeId, Qs = window.Vue.toRef, jf = window.Vue.mergeProps, qE = window.Vue.toDisplayString, KE = window.Vue.createVNode;
var rp = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const $E = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, eF = $h({
  props: $E,
  setup(n) {
    const a = HE(), r = () => {
      a.value.focus();
    }, s = ni(() => we("feather-radio-button")), l = PE({
      first: !1,
      focus: r,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: s.value
    }), f = ni(() => we("radio-label-id")), h = ni(() => l.first || l.checked ? 0 : -1);
    Pf(() => n.disabled, (b) => {
      l.disabled = b;
    }, { immediate: !0 }), Pf(() => n.value, (b) => {
      l.value = b;
    }, { immediate: !0 });
    const p = Ds("register", (b) => {
    }), T = Ds("blur", (b) => {
    }), N = Ds("select", (b) => {
    });
    return p(l), {
      labelId: f,
      tabindex: h,
      vm: l,
      blur: T,
      click: () => {
        N(l);
      },
      input: a,
      id: s
    };
  },
  components: {
    FeatherRipple: Sn
  }
}), tF = (n) => (_E("data-v-24790cf0"), n = n(), LE(), n), nF = { class: "layout-container" }, rF = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], iF = { class: "radio hover focus" }, aF = /* @__PURE__ */ tF(() => /* @__PURE__ */ dn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ dn("svg", { class: "dot" }, [
    /* @__PURE__ */ dn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), oF = ["id"];
function sF(n, a, r, s, l, f) {
  const h = ep("feather-ripple");
  return $s(), tp("div", nF, [
    dn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: n.id,
      "aria-checked": n.vm.checked ? "true" : "false",
      "aria-disabled": n.vm.disabled ? "true" : "false",
      "aria-labelledby": n.labelId,
      tabindex: n.tabindex,
      onClick: a[0] || (a[0] = (...p) => n.click && n.click(...p)),
      onBlur: a[1] || (a[1] = (...p) => n.blur && n.blur(...p)),
      "data-ref-id": "feather-radio"
    }, [
      dn("div", iF, [
        aF,
        n.vm.disabled ? XE("", !0) : ($s(), jE(h, {
          key: 0,
          center: ""
        }))
      ]),
      dn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        np(n.$slots, "default", {}, void 0, !0)
      ], 8, oF)
    ], 40, rF)
  ]);
}
var Wa = /* @__PURE__ */ rp(eF, [["render", sF], ["__scopeId", "data-v-24790cf0"]]);
const lF = Kh(Ua({}, wl), {
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
}), cF = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, uF = $h({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: lF,
  emits: cF,
  setup(n, a) {
    Ul(n);
    const r = Qs(n, "error"), s = Qs(n, "modelValue"), l = ni(() => we("feather-input-description")), f = ni(() => {
      const h = Kh(Ua({}, a.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return h["aria-invalid"] || (h["aria-invalid"] = !!r.value), h;
    });
    return Ua(Ua({
      descriptionId: l,
      attrs: f
    }, Eh(s, a.emit, n.label, n.schema, Qs(n, "error"))), vl(a.attrs));
  },
  components: {
    InputSubText: Vl
  }
}), dF = ["for"], fF = ["id"];
function hF(n, a, r, s, l, f) {
  const h = ep("InputSubText");
  return $s(), tp("div", jf(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    dn("label", {
      for: n.groupId,
      class: "group-label"
    }, qE(n.label), 9, dF),
    dn("div", jf(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: a[0] || (a[0] = (...p) => n.keydown && n.keydown(...p))
    }), [
      np(n.$slots, "default", {}, void 0, !0)
    ], 16, fF),
    KE(h, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var ip = /* @__PURE__ */ rp(uF, [["render", hF], ["__scopeId", "data-v-6775aeb9"]]);
const pF = window.Vue.openBlock, mF = window.Vue.createElementBlock, VF = window.Vue.createStaticVNode;
var TF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const vF = {}, wF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UF = /* @__PURE__ */ VF('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), RF = [
  UF
];
function NF(n, a) {
  return pF(), mF("svg", wF, RF);
}
var gF = /* @__PURE__ */ TF(vF, [["render", NF]]);
const MF = window.Vue.openBlock, ZF = window.Vue.createElementBlock, JF = window.Vue.createStaticVNode;
var kF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const yF = {}, bF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EF = /* @__PURE__ */ JF('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), FF = [
  EF
];
function SF(n, a) {
  return MF(), ZF("svg", bF, FF);
}
var WF = /* @__PURE__ */ kF(yF, [["render", SF]]);
const AF = window.Vue.openBlock, xF = window.Vue.createElementBlock, BF = window.Vue.createElementVNode;
var CF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const DF = {}, QF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OF = /* @__PURE__ */ BF("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), zF = [
  OF
];
function GF(n, a) {
  return AF(), xF("svg", QF, zF);
}
var YF = /* @__PURE__ */ CF(DF, [["render", GF]]);
const IF = window.Vue.openBlock, HF = window.Vue.createElementBlock, PF = window.Vue.createStaticVNode;
var jF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const XF = {}, _F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LF = /* @__PURE__ */ PF('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), qF = [
  LF
];
function KF(n, a) {
  return IF(), HF("svg", _F, qF);
}
var $F = /* @__PURE__ */ jF(XF, [["render", KF]]);
const eS = window.Vue.openBlock, tS = window.Vue.createElementBlock, nS = window.Vue.createElementVNode;
var rS = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const iS = {}, aS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oS = /* @__PURE__ */ nS("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), sS = [
  oS
];
function lS(n, a) {
  return eS(), tS("svg", aS, sS);
}
var cS = /* @__PURE__ */ rS(iS, [["render", lS]]);
const ap = () => window.VRouter || Jl, uS = window.Vue.defineComponent, ve = window.Vue.createElementVNode, oi = window.Vue.createTextVNode, He = window.Vue.unref, Ht = window.Vue.createVNode, fa = window.Vue.withCtx, Xf = window.Vue.openBlock, _f = window.Vue.createElementBlock, dS = window.Vue.createCommentVNode, fS = window.Vue.pushScopeId, hS = window.Vue.popScopeId, Mt = (n) => (fS("data-v-0fd6b0cd"), n = n(), hS(), n), pS = { class: "container" }, mS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("div", { class: "title" }, "ALEC", -1)), VS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("div", { class: "description" }, [
  /* @__PURE__ */ oi(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ ve("br"),
  /* @__PURE__ */ ve("strong", null, "Our goal"),
  /* @__PURE__ */ oi(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), TS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("h3", null, "Key Benefits:", -1)), vS = { class: "list" }, wS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), US = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("span", null, "Assist in root cause analysis.", -1)), RS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), NS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("span", null, "Easy configuration.", -1)), gS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), MS = {
  key: 0,
  class: "optin"
}, ZS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("h3", null, "Enable ALEC for more precise results:", -1)), JS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), kS = { class: "choices" }, yS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ ve("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), bS = /* @__PURE__ */ oi("Yes"), ES = /* @__PURE__ */ oi("No"), FS = /* @__PURE__ */ oi(" Continue "), SS = window.Vue.ref, WS = /* @__PURE__ */ uS({
  __name: "WelcomePage",
  setup(n) {
    const a = ui(), r = ap(), s = SS(!0), l = () => {
      const f = Boolean(s.value);
      a.savePermission(f), f ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (f, h) => (Xf(), _f("div", pS, [
      mS,
      VS,
      ve("div", null, [
        TS,
        ve("div", vS, [
          ve("div", null, [
            Ht(He(Pe), {
              icon: He($F),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wS
          ]),
          ve("div", null, [
            Ht(He(Pe), {
              icon: He(YF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            US
          ]),
          ve("div", null, [
            Ht(He(Pe), {
              icon: He(cS),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            RS
          ]),
          ve("div", null, [
            Ht(He(Pe), {
              icon: He(gF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NS
          ]),
          ve("div", null, [
            Ht(He(Pe), {
              icon: He(WF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            gS
          ])
        ])
      ]),
      He(a).isAdmin ? (Xf(), _f("div", MS, [
        ZS,
        JS,
        ve("div", kS, [
          yS,
          Ht(He(ip), {
            horizontal: "",
            modelValue: s.value,
            "onUpdate:modelValue": h[0] || (h[0] = (p) => s.value = p),
            label: ""
          }, {
            default: fa(() => [
              Ht(He(Wa), { value: !0 }, {
                default: fa(() => [
                  bS
                ]),
                _: 1
              }),
              Ht(He(Wa), { value: !1 }, {
                default: fa(() => [
                  ES
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : dS("", !0),
      Ht(He(Sa), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: fa(() => [
          FS
        ]),
        _: 1
      })
    ]));
  }
});
const AS = /* @__PURE__ */ Oe(WS, [["__scopeId", "data-v-0fd6b0cd"]]);
const xS = {}, BS = window.Vue.openBlock, CS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const DS = { class: "main" };
function QS(n, a) {
  return BS(), CS("div", DS, "Something bad is happening...");
}
const OS = /* @__PURE__ */ Oe(xS, [["render", QS], ["__scopeId", "data-v-fefffdff"]]), zS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", GS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var YS = Object.defineProperty, IS = Object.defineProperties, HS = Object.getOwnPropertyDescriptors, Lf = Object.getOwnPropertySymbols, PS = Object.prototype.hasOwnProperty, jS = Object.prototype.propertyIsEnumerable, qf = (n, a, r) => a in n ? YS(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, el = (n, a) => {
  for (var r in a || (a = {}))
    PS.call(a, r) && qf(n, r, a[r]);
  if (Lf)
    for (var r of Lf(a))
      jS.call(a, r) && qf(n, r, a[r]);
  return n;
}, op = (n, a) => IS(n, HS(a));
const sp = window.Vue.defineComponent, XS = window.Vue.inject, _S = window.Vue.resolveComponent, Os = window.Vue.openBlock, Kf = window.Vue.createElementBlock, cr = window.Vue.createElementVNode, LS = window.Vue.createBlock, $f = window.Vue.createCommentVNode, qS = window.Vue.renderSlot, KS = window.Vue.pushScopeId, $S = window.Vue.popScopeId, zs = window.Vue.toRef, ha = window.Vue.computed, eW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var tW = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [s, l] of a)
    r[s] = l;
  return r;
};
const nW = {
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
}, rW = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, iW = sp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: rW,
  props: nW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: XS("registerCheckbox", (a) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : we("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : we("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(n) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", n);
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
    click(n) {
      this.focus(), this.updateValue(), this.$emit("click", n);
    },
    keydown(n) {
      (n.keyCode === ge.SPACE || n.keyCode === ge.ENTER) && this.updateValue(), n.keyCode === ge.SPACE && n.preventDefault();
    }
  },
  components: {
    FeatherRipple: Sn
  }
}), aW = (n) => (KS("data-v-a7af27e2"), n = n(), $S(), n), oW = { class: "layout-container" }, sW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], lW = { class: "checkbox hover focus" }, cW = /* @__PURE__ */ aW(() => /* @__PURE__ */ cr("div", { class: "box" }, [
  /* @__PURE__ */ cr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ cr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ cr("div", { class: "indeterminate" })
], -1)), uW = ["id", "for"];
function dW(n, a, r, s, l, f) {
  const h = _S("feather-ripple");
  return Os(), Kf("div", oW, [
    cr("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: a[0] || (a[0] = (...p) => n.click && n.click(...p)),
      onKeydown: a[1] || (a[1] = (...p) => n.keydown && n.keydown(...p)),
      "aria-checked": n.modelValue ? "true" : n.indeterminate ? "mixed" : "false",
      "aria-disabled": n.disabled,
      "aria-labelledby": n.labelId,
      "aria-label": n.label,
      id: n.inputId,
      tabindex: n.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      cr("div", lW, [
        cW,
        n.disabled ? $f("", !0) : (Os(), LS(h, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? $f("", !0) : (Os(), Kf("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        qS(n.$slots, "default", {}, void 0, !0)
      ], 8, uW))
    ], 40, sW)
  ]);
}
var fW = /* @__PURE__ */ tW(iW, [["render", dW], ["__scopeId", "data-v-a7af27e2"]]);
const hW = op(el({}, wl), {
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
sp({
  props: hW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, a) {
    Ul(n);
    const r = zs(n, "error"), s = ha(() => we("feather-checkbox-group")), l = ha(() => we("feather-input-description")), f = ha(() => we("feather-input-label")), h = ha(() => {
      const g = JSON.parse(JSON.stringify(a.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), op(el({}, g), {
        class: "",
        "aria-describedby": l.value
      });
    }), p = eW(s.value), { validate: T } = Tl(p, zs(n, "modelValue"), n.label, n.schema, zs(n, "error"));
    return el({
      groupId: s,
      inputId: p,
      descriptionId: l,
      labelId: f,
      attrs: h,
      validate: T,
      registerCheckbox: (g) => {
        g && p.value === s.value && (p.value = g);
      }
    }, vl(a.attrs));
  },
  components: {
    InputSubText: Vl
  }
});
const pW = window.Vue.defineComponent, ke = window.Vue.createElementVNode, tl = window.Vue.createTextVNode, ln = window.Vue.unref, Lr = window.Vue.withCtx, qr = window.Vue.createVNode, mW = window.Vue.openBlock, VW = window.Vue.createElementBlock, TW = window.Vue.pushScopeId, vW = window.Vue.popScopeId, xn = (n) => (TW("data-v-63a33f02"), n = n(), vW(), n), wW = { class: "container" }, UW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("h2", null, "Configuration", -1)), RW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("p", null, [
  /* @__PURE__ */ tl(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ ke("br"),
  /* @__PURE__ */ tl(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ ke("strong", null, [
    /* @__PURE__ */ ke("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/2.1.0/engines/cluster.html"
    }, " here ")
  ])
], -1)), NW = { class: "radio-content" }, gW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("strong", { class: "title" }, "Clustering", -1)), MW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), ZW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("img", {
  class: "img",
  src: zS
}, null, -1)), JW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("div", { class: "hellinger" }, [
  /* @__PURE__ */ ke("strong", null, "With hellinger distance"),
  /* @__PURE__ */ ke("br"),
  /* @__PURE__ */ ke("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), kW = /* @__PURE__ */ xn(() => /* @__PURE__ */ ke("div", { class: "radio-content" }, [
  /* @__PURE__ */ ke("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ ke("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ ke("img", {
    class: "img img2",
    src: GS
  })
], -1)), yW = /* @__PURE__ */ tl(" Continue "), eh = window.Vue.ref, bW = /* @__PURE__ */ pW({
  __name: "ConfigurationPage",
  setup(n) {
    const a = ui(), r = ap(), s = eh(!1), l = eh(gt.ENGINE_DBSCAN), f = () => {
      Rh(a.allowSave), UR(l.value, s.value), r.push({ name: "situations" });
    };
    return (h, p) => (mW(), VW("div", wW, [
      UW,
      RW,
      ke("div", null, [
        qr(ln(ip), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": p[1] || (p[1] = (T) => l.value = T)
        }, {
          default: Lr(() => [
            qr(ln(Wa), {
              class: "radio",
              value: ln(gt).ENGINE_DBSCAN
            }, {
              default: Lr(() => [
                ke("div", NW, [
                  gW,
                  MW,
                  ZW,
                  qr(ln(fW), {
                    modelValue: s.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (T) => s.value = T),
                    disabled: l.value !== ln(gt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Lr(() => [
                      JW
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            qr(ln(Wa), {
              class: "radio",
              value: ln(gt).ENGINE_DEEP_LEARNING
            }, {
              default: Lr(() => [
                kW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      qr(ln(Sa), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => f())
      }, {
        default: Lr(() => [
          yW
        ]),
        _: 1
      })
    ]));
  }
});
const EW = /* @__PURE__ */ Oe(bW, [["__scopeId", "data-v-63a33f02"]]), FW = window.VueRouter.createRouter, SW = window.VueRouter.createWebHistory, Gs = async () => {
  const n = window.VRouter || Jl, a = ui();
  if (!a.userId) {
    const r = await a.getUserRole();
    await a.getAlecInfo(), r ? n.push({ name: "home" }) : n.push({ name: "error" });
  }
}, lp = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const a = window.VRouter || Jl, r = ui();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? a.push({ name: "welcome", params: n.params }) : a.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Gs(),
    component: AS
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Gs(),
    component: EW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Gs(),
    component: QE
  },
  {
    path: "/error",
    name: "error",
    component: OS
  }
], th = window.VRouter;
if (th)
  for (const n of lp) {
    const { path: a, name: r, component: s, beforeEnter: l } = n;
    th.addRoute("Plugin", {
      path: a.slice(1),
      name: r,
      component: s,
      beforeEnter: l
    });
  }
const Jl = FW({
  history: SW(),
  routes: lp
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = lU;
