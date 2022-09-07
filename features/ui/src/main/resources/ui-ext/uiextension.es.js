const Qe = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
}, Xw = {}, _w = window.Vue.resolveComponent, Lw = window.Vue.createVNode, qw = window.Vue.openBlock, Kw = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $w = { class: "main" };
function eU(n, a) {
  const r = _w("router-view");
  return qw(), Kw("div", $w, [
    Lw(r)
  ]);
}
const tU = /* @__PURE__ */ Qe(Xw, [["render", eU], ["__scopeId", "data-v-5d32d140"]]), nU = window.Vue.defineComponent, rU = window.Vue.openBlock, iU = window.Vue.createBlock, aU = /* @__PURE__ */ nU({
  __name: "App",
  setup(n) {
    return (a, r) => (rU(), iU(tU));
  }
});
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oU(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $f = { exports: {} }, ns = { exports: {} }, eh = function(a, r) {
  return function() {
    for (var s = new Array(arguments.length), f = 0; f < s.length; f++)
      s[f] = arguments[f];
    return a.apply(r, s);
  };
}, lU = eh, rs = Object.prototype.toString, is = function(n) {
  return function(a) {
    var r = rs.call(a);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Wn(n) {
  return n = n.toLowerCase(), function(r) {
    return is(r) === n;
  };
}
function as(n) {
  return Array.isArray(n);
}
function Ua(n) {
  return typeof n > "u";
}
function sU(n) {
  return n !== null && !Ua(n) && n.constructor !== null && !Ua(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var th = Wn("ArrayBuffer");
function cU(n) {
  var a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && th(n.buffer), a;
}
function uU(n) {
  return typeof n == "string";
}
function dU(n) {
  return typeof n == "number";
}
function nh(n) {
  return n !== null && typeof n == "object";
}
function ha(n) {
  if (is(n) !== "object")
    return !1;
  var a = Object.getPrototypeOf(n);
  return a === null || a === Object.prototype;
}
var fU = Wn("Date"), hU = Wn("File"), pU = Wn("Blob"), mU = Wn("FileList");
function os(n) {
  return rs.call(n) === "[object Function]";
}
function VU(n) {
  return nh(n) && os(n.pipe);
}
function TU(n) {
  var a = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || rs.call(n) === a || os(n.toString) && n.toString() === a);
}
var vU = Wn("URLSearchParams");
function wU(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function UU() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ls(n, a) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), as(n))
      for (var r = 0, l = n.length; r < l; r++)
        a.call(null, n[r], r, n);
    else
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && a.call(null, n[s], s, n);
}
function Yl() {
  var n = {};
  function a(s, f) {
    ha(n[f]) && ha(s) ? n[f] = Yl(n[f], s) : ha(s) ? n[f] = Yl({}, s) : as(s) ? n[f] = s.slice() : n[f] = s;
  }
  for (var r = 0, l = arguments.length; r < l; r++)
    ls(arguments[r], a);
  return n;
}
function RU(n, a, r) {
  return ls(a, function(s, f) {
    r && typeof s == "function" ? n[f] = lU(s, r) : n[f] = s;
  }), n;
}
function NU(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function gU(n, a, r, l) {
  n.prototype = Object.create(a.prototype, l), n.prototype.constructor = n, r && Object.assign(n.prototype, r);
}
function MU(n, a, r) {
  var l, s, f, h = {};
  a = a || {};
  do {
    for (l = Object.getOwnPropertyNames(n), s = l.length; s-- > 0; )
      f = l[s], h[f] || (a[f] = n[f], h[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!r || r(n, a)) && n !== Object.prototype);
  return a;
}
function ZU(n, a, r) {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= a.length;
  var l = n.indexOf(a, r);
  return l !== -1 && l === r;
}
function JU(n) {
  if (!n)
    return null;
  var a = n.length;
  if (Ua(a))
    return null;
  for (var r = new Array(a); a-- > 0; )
    r[a] = n[a];
  return r;
}
var kU = function(n) {
  return function(a) {
    return n && a instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Se = {
  isArray: as,
  isArrayBuffer: th,
  isBuffer: sU,
  isFormData: TU,
  isArrayBufferView: cU,
  isString: uU,
  isNumber: dU,
  isObject: nh,
  isPlainObject: ha,
  isUndefined: Ua,
  isDate: fU,
  isFile: hU,
  isBlob: pU,
  isFunction: os,
  isStream: VU,
  isURLSearchParams: vU,
  isStandardBrowserEnv: UU,
  forEach: ls,
  merge: Yl,
  extend: RU,
  trim: wU,
  stripBOM: NU,
  inherits: gU,
  toFlatObject: MU,
  kindOf: is,
  kindOfTest: Wn,
  endsWith: ZU,
  toArray: JU,
  isTypedArray: kU,
  isFileList: mU
}, qn = Se;
function id(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var rh = function(a, r, l) {
  if (!r)
    return a;
  var s;
  if (l)
    s = l(r);
  else if (qn.isURLSearchParams(r))
    s = r.toString();
  else {
    var f = [];
    qn.forEach(r, function(T, N) {
      T === null || typeof T > "u" || (qn.isArray(T) ? N = N + "[]" : T = [T], qn.forEach(T, function(k) {
        qn.isDate(k) ? k = k.toISOString() : qn.isObject(k) && (k = JSON.stringify(k)), f.push(id(N) + "=" + id(k));
      }));
    }), s = f.join("&");
  }
  if (s) {
    var h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return a;
}, yU = Se;
function Wa() {
  this.handlers = [];
}
Wa.prototype.use = function(a, r, l) {
  return this.handlers.push({
    fulfilled: a,
    rejected: r,
    synchronous: l ? l.synchronous : !1,
    runWhen: l ? l.runWhen : null
  }), this.handlers.length - 1;
};
Wa.prototype.eject = function(a) {
  this.handlers[a] && (this.handlers[a] = null);
};
Wa.prototype.forEach = function(a) {
  yU.forEach(this.handlers, function(l) {
    l !== null && a(l);
  });
};
var bU = Wa, EU = Se, FU = function(a, r) {
  EU.forEach(a, function(s, f) {
    f !== r && f.toUpperCase() === r.toUpperCase() && (a[r] = s, delete a[f]);
  });
}, ih = Se;
function ur(n, a, r, l, s) {
  Error.call(this), this.message = n, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), l && (this.request = l), s && (this.response = s);
}
ih.inherits(ur, Error, {
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
var ah = ur.prototype, oh = {};
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
  oh[n] = { value: n };
});
Object.defineProperties(ur, oh);
Object.defineProperty(ah, "isAxiosError", { value: !0 });
ur.from = function(n, a, r, l, s, f) {
  var h = Object.create(ah);
  return ih.toFlatObject(n, h, function(T) {
    return T !== Error.prototype;
  }), ur.call(h, n.message, a, r, l, s), h.name = n.name, f && Object.assign(h, f), h;
};
var hr = ur, lh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nt = Se;
function SU(n, a) {
  a = a || new FormData();
  var r = [];
  function l(f) {
    return f === null ? "" : Nt.isDate(f) ? f.toISOString() : Nt.isArrayBuffer(f) || Nt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function s(f, h) {
    if (Nt.isPlainObject(f) || Nt.isArray(f)) {
      if (r.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h);
      r.push(f), Nt.forEach(f, function(T, N) {
        if (!Nt.isUndefined(T)) {
          var g = h ? h + "." + N : N, k;
          if (T && !h && typeof T == "object") {
            if (Nt.endsWith(N, "{}"))
              T = JSON.stringify(T);
            else if (Nt.endsWith(N, "[]") && (k = Nt.toArray(T))) {
              k.forEach(function(b) {
                !Nt.isUndefined(b) && a.append(g, l(b));
              });
              return;
            }
          }
          s(T, g);
        }
      }), r.pop();
    } else
      a.append(h, l(f));
  }
  return s(n), a;
}
var sh = SU, ol, ad;
function WU() {
  if (ad)
    return ol;
  ad = 1;
  var n = hr;
  return ol = function(r, l, s) {
    var f = s.config.validateStatus;
    !s.status || !f || f(s.status) ? r(s) : l(new n(
      "Request failed with status code " + s.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, ol;
}
var ll, od;
function AU() {
  if (od)
    return ll;
  od = 1;
  var n = Se;
  return ll = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(l, s, f, h, p, T) {
        var N = [];
        N.push(l + "=" + encodeURIComponent(s)), n.isNumber(f) && N.push("expires=" + new Date(f).toGMTString()), n.isString(h) && N.push("path=" + h), n.isString(p) && N.push("domain=" + p), T === !0 && N.push("secure"), document.cookie = N.join("; ");
      },
      read: function(l) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(l) {
        this.write(l, "", Date.now() - 864e5);
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
  }(), ll;
}
var xU = function(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}, BU = function(a, r) {
  return r ? a.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : a;
}, CU = xU, DU = BU, ch = function(a, r) {
  return a && !CU(r) ? DU(a, r) : r;
}, sl, ld;
function QU() {
  if (ld)
    return sl;
  ld = 1;
  var n = Se, a = [
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
  return sl = function(l) {
    var s = {}, f, h, p;
    return l && n.forEach(l.split(`
`), function(N) {
      if (p = N.indexOf(":"), f = n.trim(N.substr(0, p)).toLowerCase(), h = n.trim(N.substr(p + 1)), f) {
        if (s[f] && a.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? s[f] = (s[f] ? s[f] : []).concat([h]) : s[f] = s[f] ? s[f] + ", " + h : h;
      }
    }), s;
  }, sl;
}
var cl, sd;
function OU() {
  if (sd)
    return cl;
  sd = 1;
  var n = Se;
  return cl = n.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), l = document.createElement("a"), s;
    function f(h) {
      var p = h;
      return r && (l.setAttribute("href", p), p = l.href), l.setAttribute("href", p), {
        href: l.href,
        protocol: l.protocol ? l.protocol.replace(/:$/, "") : "",
        host: l.host,
        search: l.search ? l.search.replace(/^\?/, "") : "",
        hash: l.hash ? l.hash.replace(/^#/, "") : "",
        hostname: l.hostname,
        port: l.port,
        pathname: l.pathname.charAt(0) === "/" ? l.pathname : "/" + l.pathname
      };
    }
    return s = f(window.location.href), function(p) {
      var T = n.isString(p) ? f(p) : p;
      return T.protocol === s.protocol && T.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), cl;
}
var ul, cd;
function Aa() {
  if (cd)
    return ul;
  cd = 1;
  var n = hr, a = Se;
  function r(l) {
    n.call(this, l == null ? "canceled" : l, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return a.inherits(r, n, {
    __CANCEL__: !0
  }), ul = r, ul;
}
var dl, ud;
function zU() {
  return ud || (ud = 1, dl = function(a) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return r && r[1] || "";
  }), dl;
}
var fl, dd;
function fd() {
  if (dd)
    return fl;
  dd = 1;
  var n = Se, a = WU(), r = AU(), l = rh, s = ch, f = QU(), h = OU(), p = lh, T = hr, N = Aa(), g = zU();
  return fl = function(b) {
    return new Promise(function(F, C) {
      var D = b.data, A = b.headers, Q = b.responseType, W;
      function H() {
        b.cancelToken && b.cancelToken.unsubscribe(W), b.signal && b.signal.removeEventListener("abort", W);
      }
      n.isFormData(D) && n.isStandardBrowserEnv() && delete A["Content-Type"];
      var y = new XMLHttpRequest();
      if (b.auth) {
        var _ = b.auth.username || "", $ = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        A.Authorization = "Basic " + btoa(_ + ":" + $);
      }
      var L = s(b.baseURL, b.url);
      y.open(b.method.toUpperCase(), l(L, b.params, b.paramsSerializer), !0), y.timeout = b.timeout;
      function Ae() {
        if (!!y) {
          var fe = "getAllResponseHeaders" in y ? f(y.getAllResponseHeaders()) : null, pe = !Q || Q === "text" || Q === "json" ? y.responseText : y.response, we = {
            data: pe,
            status: y.status,
            statusText: y.statusText,
            headers: fe,
            config: b,
            request: y
          };
          a(function(ke) {
            F(ke), H();
          }, function(ke) {
            C(ke), H();
          }, we), y = null;
        }
      }
      if ("onloadend" in y ? y.onloadend = Ae : y.onreadystatechange = function() {
        !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(Ae);
      }, y.onabort = function() {
        !y || (C(new T("Request aborted", T.ECONNABORTED, b, y)), y = null);
      }, y.onerror = function() {
        C(new T("Network Error", T.ERR_NETWORK, b, y, y)), y = null;
      }, y.ontimeout = function() {
        var pe = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded", we = b.transitional || p;
        b.timeoutErrorMessage && (pe = b.timeoutErrorMessage), C(new T(
          pe,
          we.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
          b,
          y
        )), y = null;
      }, n.isStandardBrowserEnv()) {
        var Pe = (b.withCredentials || h(L)) && b.xsrfCookieName ? r.read(b.xsrfCookieName) : void 0;
        Pe && (A[b.xsrfHeaderName] = Pe);
      }
      "setRequestHeader" in y && n.forEach(A, function(pe, we) {
        typeof D > "u" && we.toLowerCase() === "content-type" ? delete A[we] : y.setRequestHeader(we, pe);
      }), n.isUndefined(b.withCredentials) || (y.withCredentials = !!b.withCredentials), Q && Q !== "json" && (y.responseType = b.responseType), typeof b.onDownloadProgress == "function" && y.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (W = function(fe) {
        !y || (C(!fe || fe && fe.type ? new N() : fe), y.abort(), y = null);
      }, b.cancelToken && b.cancelToken.subscribe(W), b.signal && (b.signal.aborted ? W() : b.signal.addEventListener("abort", W))), D || (D = null);
      var de = g(L);
      if (de && ["http", "https", "file"].indexOf(de) === -1) {
        C(new T("Unsupported protocol " + de + ":", T.ERR_BAD_REQUEST, b));
        return;
      }
      y.send(D);
    });
  }, fl;
}
var hl, hd;
function GU() {
  return hd || (hd = 1, hl = null), hl;
}
var Ze = Se, pd = FU, md = hr, YU = lh, IU = sh, HU = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Vd(n, a) {
  !Ze.isUndefined(n) && Ze.isUndefined(n["Content-Type"]) && (n["Content-Type"] = a);
}
function PU() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = fd()), n;
}
function jU(n, a, r) {
  if (Ze.isString(n))
    try {
      return (a || JSON.parse)(n), Ze.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(n);
}
var xa = {
  transitional: YU,
  adapter: PU(),
  transformRequest: [function(a, r) {
    if (pd(r, "Accept"), pd(r, "Content-Type"), Ze.isFormData(a) || Ze.isArrayBuffer(a) || Ze.isBuffer(a) || Ze.isStream(a) || Ze.isFile(a) || Ze.isBlob(a))
      return a;
    if (Ze.isArrayBufferView(a))
      return a.buffer;
    if (Ze.isURLSearchParams(a))
      return Vd(r, "application/x-www-form-urlencoded;charset=utf-8"), a.toString();
    var l = Ze.isObject(a), s = r && r["Content-Type"], f;
    if ((f = Ze.isFileList(a)) || l && s === "multipart/form-data") {
      var h = this.env && this.env.FormData;
      return IU(f ? { "files[]": a } : a, h && new h());
    } else if (l || s === "application/json")
      return Vd(r, "application/json"), jU(a);
    return a;
  }],
  transformResponse: [function(a) {
    var r = this.transitional || xa.transitional, l = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, f = !l && this.responseType === "json";
    if (f || s && Ze.isString(a) && a.length)
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
    FormData: GU()
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
  xa.headers[a] = {};
});
Ze.forEach(["post", "put", "patch"], function(a) {
  xa.headers[a] = Ze.merge(HU);
});
var ss = xa, XU = Se, _U = ss, LU = function(a, r, l) {
  var s = this || _U;
  return XU.forEach(l, function(h) {
    a = h.call(s, a, r);
  }), a;
}, pl, Td;
function uh() {
  return Td || (Td = 1, pl = function(a) {
    return !!(a && a.__CANCEL__);
  }), pl;
}
var vd = Se, ml = LU, qU = uh(), KU = ss, $U = Aa();
function Vl(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new $U();
}
var eR = function(a) {
  Vl(a), a.headers = a.headers || {}, a.data = ml.call(
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
    function(s) {
      delete a.headers[s];
    }
  );
  var r = a.adapter || KU.adapter;
  return r(a).then(function(s) {
    return Vl(a), s.data = ml.call(
      a,
      s.data,
      s.headers,
      a.transformResponse
    ), s;
  }, function(s) {
    return qU(s) || (Vl(a), s && s.response && (s.response.data = ml.call(
      a,
      s.response.data,
      s.response.headers,
      a.transformResponse
    ))), Promise.reject(s);
  });
}, at = Se, dh = function(a, r) {
  r = r || {};
  var l = {};
  function s(g, k) {
    return at.isPlainObject(g) && at.isPlainObject(k) ? at.merge(g, k) : at.isPlainObject(k) ? at.merge({}, k) : at.isArray(k) ? k.slice() : k;
  }
  function f(g) {
    if (at.isUndefined(r[g])) {
      if (!at.isUndefined(a[g]))
        return s(void 0, a[g]);
    } else
      return s(a[g], r[g]);
  }
  function h(g) {
    if (!at.isUndefined(r[g]))
      return s(void 0, r[g]);
  }
  function p(g) {
    if (at.isUndefined(r[g])) {
      if (!at.isUndefined(a[g]))
        return s(void 0, a[g]);
    } else
      return s(void 0, r[g]);
  }
  function T(g) {
    if (g in r)
      return s(a[g], r[g]);
    if (g in a)
      return s(void 0, a[g]);
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
  return at.forEach(Object.keys(a).concat(Object.keys(r)), function(k) {
    var b = N[k] || f, B = b(k);
    at.isUndefined(B) && b !== T || (l[k] = B);
  }), l;
}, Tl, wd;
function fh() {
  return wd || (wd = 1, Tl = {
    version: "0.27.2"
  }), Tl;
}
var tR = fh().version, sn = hr, cs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, a) {
  cs[n] = function(l) {
    return typeof l === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
var Ud = {};
cs.transitional = function(a, r, l) {
  function s(f, h) {
    return "[Axios v" + tR + "] Transitional option '" + f + "'" + h + (l ? ". " + l : "");
  }
  return function(f, h, p) {
    if (a === !1)
      throw new sn(
        s(h, " has been removed" + (r ? " in " + r : "")),
        sn.ERR_DEPRECATED
      );
    return r && !Ud[h] && (Ud[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), a ? a(f, h, p) : !0;
  };
};
function nR(n, a, r) {
  if (typeof n != "object")
    throw new sn("options must be an object", sn.ERR_BAD_OPTION_VALUE);
  for (var l = Object.keys(n), s = l.length; s-- > 0; ) {
    var f = l[s], h = a[f];
    if (h) {
      var p = n[f], T = p === void 0 || h(p, f, n);
      if (T !== !0)
        throw new sn("option " + f + " must be " + T, sn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new sn("Unknown option " + f, sn.ERR_BAD_OPTION);
  }
}
var rR = {
  assertOptions: nR,
  validators: cs
}, hh = Se, iR = rh, Rd = bU, Nd = eR, Ba = dh, aR = ch, ph = rR, Kn = ph.validators;
function dr(n) {
  this.defaults = n, this.interceptors = {
    request: new Rd(),
    response: new Rd()
  };
}
dr.prototype.request = function(a, r) {
  typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = Ba(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var l = r.transitional;
  l !== void 0 && ph.assertOptions(l, {
    silentJSONParsing: Kn.transitional(Kn.boolean),
    forcedJSONParsing: Kn.transitional(Kn.boolean),
    clarifyTimeoutError: Kn.transitional(Kn.boolean)
  }, !1);
  var s = [], f = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (f = f && B.synchronous, s.unshift(B.fulfilled, B.rejected));
  });
  var h = [];
  this.interceptors.response.forEach(function(B) {
    h.push(B.fulfilled, B.rejected);
  });
  var p;
  if (!f) {
    var T = [Nd, void 0];
    for (Array.prototype.unshift.apply(T, s), T = T.concat(h), p = Promise.resolve(r); T.length; )
      p = p.then(T.shift(), T.shift());
    return p;
  }
  for (var N = r; s.length; ) {
    var g = s.shift(), k = s.shift();
    try {
      N = g(N);
    } catch (b) {
      k(b);
      break;
    }
  }
  try {
    p = Nd(N);
  } catch (b) {
    return Promise.reject(b);
  }
  for (; h.length; )
    p = p.then(h.shift(), h.shift());
  return p;
};
dr.prototype.getUri = function(a) {
  a = Ba(this.defaults, a);
  var r = aR(a.baseURL, a.url);
  return iR(r, a.params, a.paramsSerializer);
};
hh.forEach(["delete", "get", "head", "options"], function(a) {
  dr.prototype[a] = function(r, l) {
    return this.request(Ba(l || {}, {
      method: a,
      url: r,
      data: (l || {}).data
    }));
  };
});
hh.forEach(["post", "put", "patch"], function(a) {
  function r(l) {
    return function(f, h, p) {
      return this.request(Ba(p || {}, {
        method: a,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  dr.prototype[a] = r(), dr.prototype[a + "Form"] = r(!0);
});
var oR = dr, vl, gd;
function lR() {
  if (gd)
    return vl;
  gd = 1;
  var n = Aa();
  function a(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var l;
    this.promise = new Promise(function(h) {
      l = h;
    });
    var s = this;
    this.promise.then(function(f) {
      if (!!s._listeners) {
        var h, p = s._listeners.length;
        for (h = 0; h < p; h++)
          s._listeners[h](f);
        s._listeners = null;
      }
    }), this.promise.then = function(f) {
      var h, p = new Promise(function(T) {
        s.subscribe(T), h = T;
      }).then(f);
      return p.cancel = function() {
        s.unsubscribe(h);
      }, p;
    }, r(function(h) {
      s.reason || (s.reason = new n(h), l(s.reason));
    });
  }
  return a.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, a.prototype.subscribe = function(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : this._listeners = [l];
  }, a.prototype.unsubscribe = function(l) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(l);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, a.source = function() {
    var l, s = new a(function(h) {
      l = h;
    });
    return {
      token: s,
      cancel: l
    };
  }, vl = a, vl;
}
var wl, Md;
function sR() {
  return Md || (Md = 1, wl = function(a) {
    return function(l) {
      return a.apply(null, l);
    };
  }), wl;
}
var Ul, Zd;
function cR() {
  if (Zd)
    return Ul;
  Zd = 1;
  var n = Se;
  return Ul = function(r) {
    return n.isObject(r) && r.isAxiosError === !0;
  }, Ul;
}
var Jd = Se, uR = eh, pa = oR, dR = dh, fR = ss;
function mh(n) {
  var a = new pa(n), r = uR(pa.prototype.request, a);
  return Jd.extend(r, pa.prototype, a), Jd.extend(r, a), r.create = function(s) {
    return mh(dR(n, s));
  }, r;
}
var Ke = mh(fR);
Ke.Axios = pa;
Ke.CanceledError = Aa();
Ke.CancelToken = lR();
Ke.isCancel = uh();
Ke.VERSION = fh().version;
Ke.toFormData = sh;
Ke.AxiosError = hr;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(a) {
  return Promise.all(a);
};
Ke.spread = sR();
Ke.isAxiosError = cR();
ns.exports = Ke;
ns.exports.default = Ke;
(function(n) {
  n.exports = ns.exports;
})($f);
const Vh = /* @__PURE__ */ oU($f.exports);
Vh.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
});
const pr = Vh.create({
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
}, hR = "/alec", pR = "/alec/engine/configuration", Th = "/alec/agreement/configuration", mR = "/alec/situation", vh = async (n) => {
  try {
    return (await pr.post(`${Th}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, VR = async () => {
  try {
    const n = await pr.get(`${Th}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, TR = async (n, a) => {
  try {
    return (await pr.post(pR, {
      distanceMeasureName: a ? gt.HELLINGER_OPTION : gt.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, vR = async (n, a) => {
  try {
    return (await pr.post(`${hR}/situation/${a}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, wR = async () => {
  try {
    const n = await pr.get(mR);
    return n.status === 200, n.data;
  } catch {
    return !1;
  }
};
var qe = { exports: {} };
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
    var r, l = "4.17.21", s = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", p = "Invalid `variable` option passed into `_.template`", T = "__lodash_hash_undefined__", N = 500, g = "__lodash_placeholder__", k = 1, b = 2, B = 4, F = 1, C = 2, D = 1, A = 2, Q = 4, W = 8, H = 16, y = 32, _ = 64, $ = 128, L = 256, Ae = 512, Pe = 30, de = "...", fe = 800, pe = 16, we = 1, ae = 2, ke = 3, ye = 1 / 0, Oe = 9007199254740991, Vr = 17976931348623157e292, si = 0 / 0, Zt = 4294967295, op = Zt - 1, lp = Zt >>> 1, sp = [
      ["ary", $],
      ["bind", D],
      ["bindKey", A],
      ["curry", W],
      ["curryRight", H],
      ["flip", Ae],
      ["partial", y],
      ["partialRight", _],
      ["rearg", L]
    ], xn = "[object Arguments]", ci = "[object Array]", cp = "[object AsyncFunction]", Tr = "[object Boolean]", vr = "[object Date]", up = "[object DOMException]", ui = "[object Error]", di = "[object Function]", ks = "[object GeneratorFunction]", Vt = "[object Map]", wr = "[object Number]", dp = "[object Null]", Ft = "[object Object]", ys = "[object Promise]", fp = "[object Proxy]", Ur = "[object RegExp]", Tt = "[object Set]", Rr = "[object String]", fi = "[object Symbol]", hp = "[object Undefined]", Nr = "[object WeakMap]", pp = "[object WeakSet]", gr = "[object ArrayBuffer]", Bn = "[object DataView]", Da = "[object Float32Array]", Qa = "[object Float64Array]", Oa = "[object Int8Array]", za = "[object Int16Array]", Ga = "[object Int32Array]", Ya = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Ha = "[object Uint16Array]", Pa = "[object Uint32Array]", mp = /\b__p \+= '';/g, Vp = /\b(__p \+=) '' \+/g, Tp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bs = /&(?:amp|lt|gt|quot|#39);/g, Es = /[&<>"']/g, vp = RegExp(bs.source), wp = RegExp(Es.source), Up = /<%-([\s\S]+?)%>/g, Rp = /<%([\s\S]+?)%>/g, Fs = /<%=([\s\S]+?)%>/g, Np = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gp = /^\w*$/, Mp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ja = /[\\^$.*+?()[\]{}|]/g, Zp = RegExp(ja.source), Xa = /^\s+/, Jp = /\s/, kp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, yp = /\{\n\/\* \[wrapped with (.+)\] \*/, bp = /,? & /, Ep = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Fp = /[()=,{}\[\]\/\s]/, Sp = /\\(\\)?/g, Wp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ss = /\w*$/, Ap = /^[-+]0x[0-9a-f]+$/i, xp = /^0b[01]+$/i, Bp = /^\[object .+?Constructor\]$/, Cp = /^0o[0-7]+$/i, Dp = /^(?:0|[1-9]\d*)$/, Qp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, hi = /($^)/, Op = /['\n\r\u2028\u2029\\]/g, pi = "\\ud800-\\udfff", zp = "\\u0300-\\u036f", Gp = "\\ufe20-\\ufe2f", Yp = "\\u20d0-\\u20ff", Ws = zp + Gp + Yp, As = "\\u2700-\\u27bf", xs = "a-z\\xdf-\\xf6\\xf8-\\xff", Ip = "\\xac\\xb1\\xd7\\xf7", Hp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Pp = "\\u2000-\\u206f", jp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Cs = "\\ufe0e\\ufe0f", Ds = Ip + Hp + Pp + jp, _a = "['\u2019]", Xp = "[" + pi + "]", Qs = "[" + Ds + "]", mi = "[" + Ws + "]", Os = "\\d+", _p = "[" + As + "]", zs = "[" + xs + "]", Gs = "[^" + pi + Ds + Os + As + xs + Bs + "]", La = "\\ud83c[\\udffb-\\udfff]", Lp = "(?:" + mi + "|" + La + ")", Ys = "[^" + pi + "]", qa = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ka = "[\\ud800-\\udbff][\\udc00-\\udfff]", Cn = "[" + Bs + "]", Is = "\\u200d", Hs = "(?:" + zs + "|" + Gs + ")", qp = "(?:" + Cn + "|" + Gs + ")", Ps = "(?:" + _a + "(?:d|ll|m|re|s|t|ve))?", js = "(?:" + _a + "(?:D|LL|M|RE|S|T|VE))?", Xs = Lp + "?", _s = "[" + Cs + "]?", Kp = "(?:" + Is + "(?:" + [Ys, qa, Ka].join("|") + ")" + _s + Xs + ")*", $p = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", em = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ls = _s + Xs + Kp, tm = "(?:" + [_p, qa, Ka].join("|") + ")" + Ls, nm = "(?:" + [Ys + mi + "?", mi, qa, Ka, Xp].join("|") + ")", rm = RegExp(_a, "g"), im = RegExp(mi, "g"), $a = RegExp(La + "(?=" + La + ")|" + nm + Ls, "g"), am = RegExp([
      Cn + "?" + zs + "+" + Ps + "(?=" + [Qs, Cn, "$"].join("|") + ")",
      qp + "+" + js + "(?=" + [Qs, Cn + Hs, "$"].join("|") + ")",
      Cn + "?" + Hs + "+" + Ps,
      Cn + "+" + js,
      em,
      $p,
      Os,
      tm
    ].join("|"), "g"), om = RegExp("[" + Is + pi + Ws + Cs + "]"), lm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, sm = [
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
    ], cm = -1, se = {};
    se[Da] = se[Qa] = se[Oa] = se[za] = se[Ga] = se[Ya] = se[Ia] = se[Ha] = se[Pa] = !0, se[xn] = se[ci] = se[gr] = se[Tr] = se[Bn] = se[vr] = se[ui] = se[di] = se[Vt] = se[wr] = se[Ft] = se[Ur] = se[Tt] = se[Rr] = se[Nr] = !1;
    var le = {};
    le[xn] = le[ci] = le[gr] = le[Bn] = le[Tr] = le[vr] = le[Da] = le[Qa] = le[Oa] = le[za] = le[Ga] = le[Vt] = le[wr] = le[Ft] = le[Ur] = le[Tt] = le[Rr] = le[fi] = le[Ya] = le[Ia] = le[Ha] = le[Pa] = !0, le[ui] = le[di] = le[Nr] = !1;
    var um = {
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
    }, dm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, fm = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, hm = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, pm = parseFloat, mm = parseInt, qs = typeof Qr == "object" && Qr && Qr.Object === Object && Qr, Vm = typeof self == "object" && self && self.Object === Object && self, be = qs || Vm || Function("return this")(), eo = a && !a.nodeType && a, pn = eo && !0 && n && !n.nodeType && n, Ks = pn && pn.exports === eo, to = Ks && qs.process, lt = function() {
      try {
        var v = pn && pn.require && pn.require("util").types;
        return v || to && to.binding && to.binding("util");
      } catch {
      }
    }(), $s = lt && lt.isArrayBuffer, ec = lt && lt.isDate, tc = lt && lt.isMap, nc = lt && lt.isRegExp, rc = lt && lt.isSet, ic = lt && lt.isTypedArray;
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
    function Tm(v, R, U, S) {
      for (var Y = -1, te = v == null ? 0 : v.length; ++Y < te; ) {
        var Re = v[Y];
        R(S, Re, U(Re), v);
      }
      return S;
    }
    function st(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S && R(v[U], U, v) !== !1; )
        ;
      return v;
    }
    function vm(v, R) {
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
    function Xt(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length, Y = 0, te = []; ++U < S; ) {
        var Re = v[U];
        R(Re, U, v) && (te[Y++] = Re);
      }
      return te;
    }
    function Vi(v, R) {
      var U = v == null ? 0 : v.length;
      return !!U && Dn(v, R, 0) > -1;
    }
    function no(v, R, U) {
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
    function _t(v, R) {
      for (var U = -1, S = R.length, Y = v.length; ++U < S; )
        v[Y + U] = R[U];
      return v;
    }
    function ro(v, R, U, S) {
      var Y = -1, te = v == null ? 0 : v.length;
      for (S && te && (U = v[++Y]); ++Y < te; )
        U = R(U, v[Y], Y, v);
      return U;
    }
    function wm(v, R, U, S) {
      var Y = v == null ? 0 : v.length;
      for (S && Y && (U = v[--Y]); Y--; )
        U = R(U, v[Y], Y, v);
      return U;
    }
    function io(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S; )
        if (R(v[U], U, v))
          return !0;
      return !1;
    }
    var Um = ao("length");
    function Rm(v) {
      return v.split("");
    }
    function Nm(v) {
      return v.match(Ep) || [];
    }
    function oc(v, R, U) {
      var S;
      return U(v, function(Y, te, Re) {
        if (R(Y, te, Re))
          return S = te, !1;
      }), S;
    }
    function Ti(v, R, U, S) {
      for (var Y = v.length, te = U + (S ? 1 : -1); S ? te-- : ++te < Y; )
        if (R(v[te], te, v))
          return te;
      return -1;
    }
    function Dn(v, R, U) {
      return R === R ? Am(v, R, U) : Ti(v, lc, U);
    }
    function gm(v, R, U, S) {
      for (var Y = U - 1, te = v.length; ++Y < te; )
        if (S(v[Y], R))
          return Y;
      return -1;
    }
    function lc(v) {
      return v !== v;
    }
    function sc(v, R) {
      var U = v == null ? 0 : v.length;
      return U ? lo(v, R) / U : si;
    }
    function ao(v) {
      return function(R) {
        return R == null ? r : R[v];
      };
    }
    function oo(v) {
      return function(R) {
        return v == null ? r : v[R];
      };
    }
    function cc(v, R, U, S, Y) {
      return Y(v, function(te, Re, oe) {
        U = S ? (S = !1, te) : R(U, te, Re, oe);
      }), U;
    }
    function Mm(v, R) {
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
    function so(v, R) {
      for (var U = -1, S = Array(v); ++U < v; )
        S[U] = R(U);
      return S;
    }
    function Zm(v, R) {
      return ce(R, function(U) {
        return [U, v[U]];
      });
    }
    function uc(v) {
      return v && v.slice(0, pc(v) + 1).replace(Xa, "");
    }
    function et(v) {
      return function(R) {
        return v(R);
      };
    }
    function co(v, R) {
      return ce(R, function(U) {
        return v[U];
      });
    }
    function Mr(v, R) {
      return v.has(R);
    }
    function dc(v, R) {
      for (var U = -1, S = v.length; ++U < S && Dn(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function fc(v, R) {
      for (var U = v.length; U-- && Dn(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function Jm(v, R) {
      for (var U = v.length, S = 0; U--; )
        v[U] === R && ++S;
      return S;
    }
    var km = oo(um), ym = oo(dm);
    function bm(v) {
      return "\\" + hm[v];
    }
    function Em(v, R) {
      return v == null ? r : v[R];
    }
    function Qn(v) {
      return om.test(v);
    }
    function Fm(v) {
      return lm.test(v);
    }
    function Sm(v) {
      for (var R, U = []; !(R = v.next()).done; )
        U.push(R.value);
      return U;
    }
    function uo(v) {
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
    function Lt(v, R) {
      for (var U = -1, S = v.length, Y = 0, te = []; ++U < S; ) {
        var Re = v[U];
        (Re === R || Re === g) && (v[U] = g, te[Y++] = U);
      }
      return te;
    }
    function vi(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = S;
      }), U;
    }
    function Wm(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = [S, S];
      }), U;
    }
    function Am(v, R, U) {
      for (var S = U - 1, Y = v.length; ++S < Y; )
        if (v[S] === R)
          return S;
      return -1;
    }
    function xm(v, R, U) {
      for (var S = U + 1; S--; )
        if (v[S] === R)
          return S;
      return S;
    }
    function On(v) {
      return Qn(v) ? Cm(v) : Um(v);
    }
    function vt(v) {
      return Qn(v) ? Dm(v) : Rm(v);
    }
    function pc(v) {
      for (var R = v.length; R-- && Jp.test(v.charAt(R)); )
        ;
      return R;
    }
    var Bm = oo(fm);
    function Cm(v) {
      for (var R = $a.lastIndex = 0; $a.test(v); )
        ++R;
      return R;
    }
    function Dm(v) {
      return v.match($a) || [];
    }
    function Qm(v) {
      return v.match(am) || [];
    }
    var Om = function v(R) {
      R = R == null ? be : zn.defaults(be.Object(), R, zn.pick(be, sm));
      var U = R.Array, S = R.Date, Y = R.Error, te = R.Function, Re = R.Math, oe = R.Object, fo = R.RegExp, zm = R.String, ct = R.TypeError, wi = U.prototype, Gm = te.prototype, Gn = oe.prototype, Ui = R["__core-js_shared__"], Ri = Gm.toString, re = Gn.hasOwnProperty, Ym = 0, mc = function() {
        var e = /[^.]+$/.exec(Ui && Ui.keys && Ui.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ni = Gn.toString, Im = Ri.call(oe), Hm = be._, Pm = fo(
        "^" + Ri.call(re).replace(ja, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), gi = Ks ? R.Buffer : r, qt = R.Symbol, Mi = R.Uint8Array, Vc = gi ? gi.allocUnsafe : r, Zi = hc(oe.getPrototypeOf, oe), Tc = oe.create, vc = Gn.propertyIsEnumerable, Ji = wi.splice, wc = qt ? qt.isConcatSpreadable : r, Zr = qt ? qt.iterator : r, mn = qt ? qt.toStringTag : r, ki = function() {
        try {
          var e = Un(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), jm = R.clearTimeout !== be.clearTimeout && R.clearTimeout, Xm = S && S.now !== be.Date.now && S.now, _m = R.setTimeout !== be.setTimeout && R.setTimeout, yi = Re.ceil, bi = Re.floor, ho = oe.getOwnPropertySymbols, Lm = gi ? gi.isBuffer : r, Uc = R.isFinite, qm = wi.join, Km = hc(oe.keys, oe), Ne = Re.max, xe = Re.min, $m = S.now, eV = R.parseInt, Rc = Re.random, tV = wi.reverse, po = Un(R, "DataView"), Jr = Un(R, "Map"), mo = Un(R, "Promise"), Yn = Un(R, "Set"), kr = Un(R, "WeakMap"), yr = Un(oe, "create"), Ei = kr && new kr(), In = {}, nV = Rn(po), rV = Rn(Jr), iV = Rn(mo), aV = Rn(Yn), oV = Rn(kr), Fi = qt ? qt.prototype : r, br = Fi ? Fi.valueOf : r, Nc = Fi ? Fi.toString : r;
      function u(e) {
        if (he(e) && !I(e) && !(e instanceof K)) {
          if (e instanceof ut)
            return e;
          if (re.call(e, "__wrapped__"))
            return gu(e);
        }
        return new ut(e);
      }
      var Hn = function() {
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
      function Si() {
      }
      function ut(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: Up,
        evaluate: Rp,
        interpolate: Fs,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = Si.prototype, u.prototype.constructor = u, ut.prototype = Hn(Si.prototype), ut.prototype.constructor = ut;
      function K(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Zt, this.__views__ = [];
      }
      function lV() {
        var e = new K(this.__wrapped__);
        return e.__actions__ = je(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = je(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = je(this.__views__), e;
      }
      function sV() {
        if (this.__filtered__) {
          var e = new K(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function cV() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = I(e), o = t < 0, c = i ? e.length : 0, d = R1(0, c, this.__views__), m = d.start, V = d.end, w = V - m, M = o ? V : m - 1, Z = this.__iteratees__, J = Z.length, E = 0, x = xe(w, this.__takeCount__);
        if (!i || !o && c == w && x == w)
          return Pc(e, this.__actions__);
        var z = [];
        e:
          for (; w-- && E < x; ) {
            M += t;
            for (var j = -1, G = e[M]; ++j < J; ) {
              var q = Z[j], ee = q.iteratee, rt = q.type, Ye = ee(G);
              if (rt == ae)
                G = Ye;
              else if (!Ye) {
                if (rt == we)
                  continue e;
                break e;
              }
            }
            z[E++] = G;
          }
        return z;
      }
      K.prototype = Hn(Si.prototype), K.prototype.constructor = K;
      function Vn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function uV() {
        this.__data__ = yr ? yr(null) : {}, this.size = 0;
      }
      function dV(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function fV(e) {
        var t = this.__data__;
        if (yr) {
          var i = t[e];
          return i === T ? r : i;
        }
        return re.call(t, e) ? t[e] : r;
      }
      function hV(e) {
        var t = this.__data__;
        return yr ? t[e] !== r : re.call(t, e);
      }
      function pV(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = yr && t === r ? T : t, this;
      }
      Vn.prototype.clear = uV, Vn.prototype.delete = dV, Vn.prototype.get = fV, Vn.prototype.has = hV, Vn.prototype.set = pV;
      function St(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function mV() {
        this.__data__ = [], this.size = 0;
      }
      function VV(e) {
        var t = this.__data__, i = Wi(t, e);
        if (i < 0)
          return !1;
        var o = t.length - 1;
        return i == o ? t.pop() : Ji.call(t, i, 1), --this.size, !0;
      }
      function TV(e) {
        var t = this.__data__, i = Wi(t, e);
        return i < 0 ? r : t[i][1];
      }
      function vV(e) {
        return Wi(this.__data__, e) > -1;
      }
      function wV(e, t) {
        var i = this.__data__, o = Wi(i, e);
        return o < 0 ? (++this.size, i.push([e, t])) : i[o][1] = t, this;
      }
      St.prototype.clear = mV, St.prototype.delete = VV, St.prototype.get = TV, St.prototype.has = vV, St.prototype.set = wV;
      function Wt(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function UV() {
        this.size = 0, this.__data__ = {
          hash: new Vn(),
          map: new (Jr || St)(),
          string: new Vn()
        };
      }
      function RV(e) {
        var t = Hi(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function NV(e) {
        return Hi(this, e).get(e);
      }
      function gV(e) {
        return Hi(this, e).has(e);
      }
      function MV(e, t) {
        var i = Hi(this, e), o = i.size;
        return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
      }
      Wt.prototype.clear = UV, Wt.prototype.delete = RV, Wt.prototype.get = NV, Wt.prototype.has = gV, Wt.prototype.set = MV;
      function Tn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Wt(); ++t < i; )
          this.add(e[t]);
      }
      function ZV(e) {
        return this.__data__.set(e, T), this;
      }
      function JV(e) {
        return this.__data__.has(e);
      }
      Tn.prototype.add = Tn.prototype.push = ZV, Tn.prototype.has = JV;
      function wt(e) {
        var t = this.__data__ = new St(e);
        this.size = t.size;
      }
      function kV() {
        this.__data__ = new St(), this.size = 0;
      }
      function yV(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function bV(e) {
        return this.__data__.get(e);
      }
      function EV(e) {
        return this.__data__.has(e);
      }
      function FV(e, t) {
        var i = this.__data__;
        if (i instanceof St) {
          var o = i.__data__;
          if (!Jr || o.length < s - 1)
            return o.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new Wt(o);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      wt.prototype.clear = kV, wt.prototype.delete = yV, wt.prototype.get = bV, wt.prototype.has = EV, wt.prototype.set = FV;
      function gc(e, t) {
        var i = I(e), o = !i && Nn(e), c = !i && !o && nn(e), d = !i && !o && !c && _n(e), m = i || o || c || d, V = m ? so(e.length, zm) : [], w = V.length;
        for (var M in e)
          (t || re.call(e, M)) && !(m && (M == "length" || c && (M == "offset" || M == "parent") || d && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Ct(M, w))) && V.push(M);
        return V;
      }
      function Mc(e) {
        var t = e.length;
        return t ? e[Jo(0, t - 1)] : r;
      }
      function SV(e, t) {
        return Pi(je(e), vn(t, 0, e.length));
      }
      function WV(e) {
        return Pi(je(e));
      }
      function Vo(e, t, i) {
        (i !== r && !Ut(e[t], i) || i === r && !(t in e)) && At(e, t, i);
      }
      function Er(e, t, i) {
        var o = e[t];
        (!(re.call(e, t) && Ut(o, i)) || i === r && !(t in e)) && At(e, t, i);
      }
      function Wi(e, t) {
        for (var i = e.length; i--; )
          if (Ut(e[i][0], t))
            return i;
        return -1;
      }
      function AV(e, t, i, o) {
        return Kt(e, function(c, d, m) {
          t(o, c, i(c), m);
        }), o;
      }
      function Zc(e, t) {
        return e && kt(t, Me(t), e);
      }
      function xV(e, t) {
        return e && kt(t, _e(t), e);
      }
      function At(e, t, i) {
        t == "__proto__" && ki ? ki(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function To(e, t) {
        for (var i = -1, o = t.length, c = U(o), d = e == null; ++i < o; )
          c[i] = d ? r : qo(e, t[i]);
        return c;
      }
      function vn(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function dt(e, t, i, o, c, d) {
        var m, V = t & k, w = t & b, M = t & B;
        if (i && (m = c ? i(e, o, c, d) : i(e)), m !== r)
          return m;
        if (!ue(e))
          return e;
        var Z = I(e);
        if (Z) {
          if (m = g1(e), !V)
            return je(e, m);
        } else {
          var J = Be(e), E = J == di || J == ks;
          if (nn(e))
            return _c(e, V);
          if (J == Ft || J == xn || E && !c) {
            if (m = w || E ? {} : pu(e), !V)
              return w ? f1(e, xV(m, e)) : d1(e, Zc(m, e));
          } else {
            if (!le[J])
              return c ? e : {};
            m = M1(e, J, V);
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
        var z = M ? w ? Co : Bo : w ? _e : Me, j = Z ? r : z(e);
        return st(j || e, function(G, q) {
          j && (q = G, G = e[q]), Er(m, q, dt(G, t, i, q, e, d));
        }), m;
      }
      function BV(e) {
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
        return Cr(function() {
          e.apply(r, i);
        }, t);
      }
      function Fr(e, t, i, o) {
        var c = -1, d = Vi, m = !0, V = e.length, w = [], M = t.length;
        if (!V)
          return w;
        i && (t = ce(t, et(i))), o ? (d = no, m = !1) : t.length >= s && (d = Mr, m = !1, t = new Tn(t));
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
      var Kt = eu(Jt), yc = eu(wo, !0);
      function CV(e, t) {
        var i = !0;
        return Kt(e, function(o, c, d) {
          return i = !!t(o, c, d), i;
        }), i;
      }
      function Ai(e, t, i) {
        for (var o = -1, c = e.length; ++o < c; ) {
          var d = e[o], m = t(d);
          if (m != null && (V === r ? m === m && !nt(m) : i(m, V)))
            var V = m, w = d;
        }
        return w;
      }
      function DV(e, t, i, o) {
        var c = e.length;
        for (i = P(i), i < 0 && (i = -i > c ? 0 : c + i), o = o === r || o > c ? c : P(o), o < 0 && (o += c), o = i > o ? 0 : Hu(o); i < o; )
          e[i++] = t;
        return e;
      }
      function bc(e, t) {
        var i = [];
        return Kt(e, function(o, c, d) {
          t(o, c, d) && i.push(o);
        }), i;
      }
      function Ee(e, t, i, o, c) {
        var d = -1, m = e.length;
        for (i || (i = J1), c || (c = []); ++d < m; ) {
          var V = e[d];
          t > 0 && i(V) ? t > 1 ? Ee(V, t - 1, i, o, c) : _t(c, V) : o || (c[c.length] = V);
        }
        return c;
      }
      var vo = tu(), Ec = tu(!0);
      function Jt(e, t) {
        return e && vo(e, t, Me);
      }
      function wo(e, t) {
        return e && Ec(e, t, Me);
      }
      function xi(e, t) {
        return Xt(t, function(i) {
          return Dt(e[i]);
        });
      }
      function wn(e, t) {
        t = en(t, e);
        for (var i = 0, o = t.length; e != null && i < o; )
          e = e[yt(t[i++])];
        return i && i == o ? e : r;
      }
      function Fc(e, t, i) {
        var o = t(e);
        return I(e) ? o : _t(o, i(e));
      }
      function ze(e) {
        return e == null ? e === r ? hp : dp : mn && mn in oe(e) ? U1(e) : W1(e);
      }
      function Uo(e, t) {
        return e > t;
      }
      function QV(e, t) {
        return e != null && re.call(e, t);
      }
      function OV(e, t) {
        return e != null && t in oe(e);
      }
      function zV(e, t, i) {
        return e >= xe(t, i) && e < Ne(t, i);
      }
      function Ro(e, t, i) {
        for (var o = i ? no : Vi, c = e[0].length, d = e.length, m = d, V = U(d), w = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && t && (Z = ce(Z, et(t))), w = xe(Z.length, w), V[m] = !i && (t || c >= 120 && Z.length >= 120) ? new Tn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, E = V[0];
        e:
          for (; ++J < c && M.length < w; ) {
            var x = Z[J], z = t ? t(x) : x;
            if (x = i || x !== 0 ? x : 0, !(E ? Mr(E, z) : o(M, z, i))) {
              for (m = d; --m; ) {
                var j = V[m];
                if (!(j ? Mr(j, z) : o(e[m], z, i)))
                  continue e;
              }
              E && E.push(z), M.push(x);
            }
          }
        return M;
      }
      function GV(e, t, i, o) {
        return Jt(e, function(c, d, m) {
          t(o, i(c), d, m);
        }), o;
      }
      function Sr(e, t, i) {
        t = en(t, e), e = vu(e, t);
        var o = e == null ? e : e[yt(ht(t))];
        return o == null ? r : $e(o, e, i);
      }
      function Sc(e) {
        return he(e) && ze(e) == xn;
      }
      function YV(e) {
        return he(e) && ze(e) == gr;
      }
      function IV(e) {
        return he(e) && ze(e) == vr;
      }
      function Wr(e, t, i, o, c) {
        return e === t ? !0 : e == null || t == null || !he(e) && !he(t) ? e !== e && t !== t : HV(e, t, i, o, Wr, c);
      }
      function HV(e, t, i, o, c, d) {
        var m = I(e), V = I(t), w = m ? ci : Be(e), M = V ? ci : Be(t);
        w = w == xn ? Ft : w, M = M == xn ? Ft : M;
        var Z = w == Ft, J = M == Ft, E = w == M;
        if (E && nn(e)) {
          if (!nn(t))
            return !1;
          m = !0, Z = !1;
        }
        if (E && !Z)
          return d || (d = new wt()), m || _n(e) ? du(e, t, i, o, c, d) : v1(e, t, w, i, o, c, d);
        if (!(i & F)) {
          var x = Z && re.call(e, "__wrapped__"), z = J && re.call(t, "__wrapped__");
          if (x || z) {
            var j = x ? e.value() : e, G = z ? t.value() : t;
            return d || (d = new wt()), c(j, G, i, o, d);
          }
        }
        return E ? (d || (d = new wt()), w1(e, t, i, o, c, d)) : !1;
      }
      function PV(e) {
        return he(e) && Be(e) == Vt;
      }
      function No(e, t, i, o) {
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
            if (!(E === r ? Wr(Z, M, F | C, o, J) : E))
              return !1;
          }
        }
        return !0;
      }
      function Wc(e) {
        if (!ue(e) || y1(e))
          return !1;
        var t = Dt(e) ? Pm : Bp;
        return t.test(Rn(e));
      }
      function jV(e) {
        return he(e) && ze(e) == Ur;
      }
      function XV(e) {
        return he(e) && Be(e) == Tt;
      }
      function _V(e) {
        return he(e) && Ki(e.length) && !!se[ze(e)];
      }
      function Ac(e) {
        return typeof e == "function" ? e : e == null ? Le : typeof e == "object" ? I(e) ? Cc(e[0], e[1]) : Bc(e) : nd(e);
      }
      function go(e) {
        if (!Br(e))
          return Km(e);
        var t = [];
        for (var i in oe(e))
          re.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function LV(e) {
        if (!ue(e))
          return S1(e);
        var t = Br(e), i = [];
        for (var o in e)
          o == "constructor" && (t || !re.call(e, o)) || i.push(o);
        return i;
      }
      function Mo(e, t) {
        return e < t;
      }
      function xc(e, t) {
        var i = -1, o = Xe(e) ? U(e.length) : [];
        return Kt(e, function(c, d, m) {
          o[++i] = t(c, d, m);
        }), o;
      }
      function Bc(e) {
        var t = Qo(e);
        return t.length == 1 && t[0][2] ? Vu(t[0][0], t[0][1]) : function(i) {
          return i === e || No(i, e, t);
        };
      }
      function Cc(e, t) {
        return zo(e) && mu(t) ? Vu(yt(e), t) : function(i) {
          var o = qo(i, e);
          return o === r && o === t ? Ko(i, e) : Wr(t, o, F | C);
        };
      }
      function Bi(e, t, i, o, c) {
        e !== t && vo(t, function(d, m) {
          if (c || (c = new wt()), ue(d))
            qV(e, t, m, i, Bi, o, c);
          else {
            var V = o ? o(Yo(e, m), d, m + "", e, t, c) : r;
            V === r && (V = d), Vo(e, m, V);
          }
        }, _e);
      }
      function qV(e, t, i, o, c, d, m) {
        var V = Yo(e, i), w = Yo(t, i), M = m.get(w);
        if (M) {
          Vo(e, i, M);
          return;
        }
        var Z = d ? d(V, w, i + "", e, t, m) : r, J = Z === r;
        if (J) {
          var E = I(w), x = !E && nn(w), z = !E && !x && _n(w);
          Z = w, E || x || z ? I(V) ? Z = V : me(V) ? Z = je(V) : x ? (J = !1, Z = _c(w, !0)) : z ? (J = !1, Z = Lc(w, !0)) : Z = [] : Dr(w) || Nn(w) ? (Z = V, Nn(V) ? Z = Pu(V) : (!ue(V) || Dt(V)) && (Z = pu(w))) : J = !1;
        }
        J && (m.set(w, Z), c(Z, w, o, d, m), m.delete(w)), Vo(e, i, Z);
      }
      function Dc(e, t) {
        var i = e.length;
        if (!!i)
          return t += t < 0 ? i : 0, Ct(t, i) ? e[t] : r;
      }
      function Qc(e, t, i) {
        t.length ? t = ce(t, function(d) {
          return I(d) ? function(m) {
            return wn(m, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [Le];
        var o = -1;
        t = ce(t, et(O()));
        var c = xc(e, function(d, m, V) {
          var w = ce(t, function(M) {
            return M(d);
          });
          return { criteria: w, index: ++o, value: d };
        });
        return Mm(c, function(d, m) {
          return u1(d, m, i);
        });
      }
      function KV(e, t) {
        return Oc(e, t, function(i, o) {
          return Ko(e, o);
        });
      }
      function Oc(e, t, i) {
        for (var o = -1, c = t.length, d = {}; ++o < c; ) {
          var m = t[o], V = wn(e, m);
          i(V, m) && Ar(d, en(m, e), V);
        }
        return d;
      }
      function $V(e) {
        return function(t) {
          return wn(t, e);
        };
      }
      function Zo(e, t, i, o) {
        var c = o ? gm : Dn, d = -1, m = t.length, V = e;
        for (e === t && (t = je(t)), i && (V = ce(e, et(i))); ++d < m; )
          for (var w = 0, M = t[d], Z = i ? i(M) : M; (w = c(V, Z, w, o)) > -1; )
            V !== e && Ji.call(V, w, 1), Ji.call(e, w, 1);
        return e;
      }
      function zc(e, t) {
        for (var i = e ? t.length : 0, o = i - 1; i--; ) {
          var c = t[i];
          if (i == o || c !== d) {
            var d = c;
            Ct(c) ? Ji.call(e, c, 1) : bo(e, c);
          }
        }
        return e;
      }
      function Jo(e, t) {
        return e + bi(Rc() * (t - e + 1));
      }
      function e1(e, t, i, o) {
        for (var c = -1, d = Ne(yi((t - e) / (i || 1)), 0), m = U(d); d--; )
          m[o ? d : ++c] = e, e += i;
        return m;
      }
      function ko(e, t) {
        var i = "";
        if (!e || t < 1 || t > Oe)
          return i;
        do
          t % 2 && (i += e), t = bi(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function X(e, t) {
        return Io(Tu(e, t, Le), e + "");
      }
      function t1(e) {
        return Mc(Ln(e));
      }
      function n1(e, t) {
        var i = Ln(e);
        return Pi(i, vn(t, 0, i.length));
      }
      function Ar(e, t, i, o) {
        if (!ue(e))
          return e;
        t = en(t, e);
        for (var c = -1, d = t.length, m = d - 1, V = e; V != null && ++c < d; ) {
          var w = yt(t[c]), M = i;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return e;
          if (c != m) {
            var Z = V[w];
            M = o ? o(Z, w, V) : r, M === r && (M = ue(Z) ? Z : Ct(t[c + 1]) ? [] : {});
          }
          Er(V, w, M), V = V[w];
        }
        return e;
      }
      var Gc = Ei ? function(e, t) {
        return Ei.set(e, t), e;
      } : Le, r1 = ki ? function(e, t) {
        return ki(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: el(t),
          writable: !0
        });
      } : Le;
      function i1(e) {
        return Pi(Ln(e));
      }
      function ft(e, t, i) {
        var o = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), i = i > c ? c : i, i < 0 && (i += c), c = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var d = U(c); ++o < c; )
          d[o] = e[o + t];
        return d;
      }
      function a1(e, t) {
        var i;
        return Kt(e, function(o, c, d) {
          return i = t(o, c, d), !i;
        }), !!i;
      }
      function Ci(e, t, i) {
        var o = 0, c = e == null ? o : e.length;
        if (typeof t == "number" && t === t && c <= lp) {
          for (; o < c; ) {
            var d = o + c >>> 1, m = e[d];
            m !== null && !nt(m) && (i ? m <= t : m < t) ? o = d + 1 : c = d;
          }
          return c;
        }
        return yo(e, t, Le, i);
      }
      function yo(e, t, i, o) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = i(t);
        for (var m = t !== t, V = t === null, w = nt(t), M = t === r; c < d; ) {
          var Z = bi((c + d) / 2), J = i(e[Z]), E = J !== r, x = J === null, z = J === J, j = nt(J);
          if (m)
            var G = o || z;
          else
            M ? G = z && (o || E) : V ? G = z && E && (o || !x) : w ? G = z && E && !x && (o || !j) : x || j ? G = !1 : G = o ? J <= t : J < t;
          G ? c = Z + 1 : d = Z;
        }
        return xe(d, op);
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
        return typeof e == "number" ? e : nt(e) ? si : +e;
      }
      function tt(e) {
        if (typeof e == "string")
          return e;
        if (I(e))
          return ce(e, tt) + "";
        if (nt(e))
          return Nc ? Nc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ye ? "-0" : t;
      }
      function $t(e, t, i) {
        var o = -1, c = Vi, d = e.length, m = !0, V = [], w = V;
        if (i)
          m = !1, c = no;
        else if (d >= s) {
          var M = t ? null : V1(e);
          if (M)
            return vi(M);
          m = !1, c = Mr, w = new Tn();
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
      function bo(e, t) {
        return t = en(t, e), e = vu(e, t), e == null || delete e[yt(ht(t))];
      }
      function Hc(e, t, i, o) {
        return Ar(e, t, i(wn(e, t)), o);
      }
      function Di(e, t, i, o) {
        for (var c = e.length, d = o ? c : -1; (o ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return i ? ft(e, o ? 0 : d, o ? d + 1 : c) : ft(e, o ? d + 1 : 0, o ? c : d);
      }
      function Pc(e, t) {
        var i = e;
        return i instanceof K && (i = i.value()), ro(t, function(o, c) {
          return c.func.apply(c.thisArg, _t([o], c.args));
        }, i);
      }
      function Eo(e, t, i) {
        var o = e.length;
        if (o < 2)
          return o ? $t(e[0]) : [];
        for (var c = -1, d = U(o); ++c < o; )
          for (var m = e[c], V = -1; ++V < o; )
            V != c && (d[c] = Fr(d[c] || m, e[V], t, i));
        return $t(Ee(d, 1), t, i);
      }
      function jc(e, t, i) {
        for (var o = -1, c = e.length, d = t.length, m = {}; ++o < c; ) {
          var V = o < d ? t[o] : r;
          i(m, e[o], V);
        }
        return m;
      }
      function Fo(e) {
        return me(e) ? e : [];
      }
      function So(e) {
        return typeof e == "function" ? e : Le;
      }
      function en(e, t) {
        return I(e) ? e : zo(e, t) ? [e] : Nu(ne(e));
      }
      var o1 = X;
      function tn(e, t, i) {
        var o = e.length;
        return i = i === r ? o : i, !t && i >= o ? e : ft(e, t, i);
      }
      var Xc = jm || function(e) {
        return be.clearTimeout(e);
      };
      function _c(e, t) {
        if (t)
          return e.slice();
        var i = e.length, o = Vc ? Vc(i) : new e.constructor(i);
        return e.copy(o), o;
      }
      function Wo(e) {
        var t = new e.constructor(e.byteLength);
        return new Mi(t).set(new Mi(e)), t;
      }
      function l1(e, t) {
        var i = t ? Wo(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function s1(e) {
        var t = new e.constructor(e.source, Ss.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function c1(e) {
        return br ? oe(br.call(e)) : {};
      }
      function Lc(e, t) {
        var i = t ? Wo(e.buffer) : e.buffer;
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
      function u1(e, t, i) {
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
      function je(e, t) {
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
          w === r && (w = e[V]), c ? At(i, V, w) : Er(i, V, w);
        }
        return i;
      }
      function d1(e, t) {
        return kt(e, Oo(e), t);
      }
      function f1(e, t) {
        return kt(e, fu(e), t);
      }
      function Qi(e, t) {
        return function(i, o) {
          var c = I(i) ? Tm : AV, d = t ? t() : {};
          return c(i, e, O(o, 2), d);
        };
      }
      function Pn(e) {
        return X(function(t, i) {
          var o = -1, c = i.length, d = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : r, m && Ge(i[0], i[1], m) && (d = c < 3 ? r : d, c = 1), t = oe(t); ++o < c; ) {
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
          if (!Xe(i))
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
      function h1(e, t, i) {
        var o = t & D, c = xr(e);
        function d() {
          var m = this && this !== be && this instanceof d ? c : e;
          return m.apply(o ? i : this, arguments);
        }
        return d;
      }
      function nu(e) {
        return function(t) {
          t = ne(t);
          var i = Qn(t) ? vt(t) : r, o = i ? i[0] : t.charAt(0), c = i ? tn(i, 1).join("") : t.slice(1);
          return o[e]() + c;
        };
      }
      function jn(e) {
        return function(t) {
          return ro(ed($u(t).replace(rm, "")), e, "");
        };
      }
      function xr(e) {
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
          var i = Hn(e.prototype), o = e.apply(i, t);
          return ue(o) ? o : i;
        };
      }
      function p1(e, t, i) {
        var o = xr(e);
        function c() {
          for (var d = arguments.length, m = U(d), V = d, w = Xn(c); V--; )
            m[V] = arguments[V];
          var M = d < 3 && m[0] !== w && m[d - 1] !== w ? [] : Lt(m, w);
          if (d -= M.length, d < i)
            return lu(
              e,
              t,
              Oi,
              c.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - d
            );
          var Z = this && this !== be && this instanceof c ? o : e;
          return $e(Z, this, m);
        }
        return c;
      }
      function ru(e) {
        return function(t, i, o) {
          var c = oe(t);
          if (!Xe(t)) {
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
            if (c && !m && Ii(d) == "wrapper")
              var m = new ut([], !0);
          }
          for (o = m ? o : i; ++o < i; ) {
            d = t[o];
            var V = Ii(d), w = V == "wrapper" ? Do(d) : r;
            w && Go(w[0]) && w[1] == ($ | W | y | L) && !w[4].length && w[9] == 1 ? m = m[Ii(w[0])].apply(m, w[3]) : m = d.length == 1 && Go(d) ? m[V]() : m.thru(d);
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
      function Oi(e, t, i, o, c, d, m, V, w, M) {
        var Z = t & $, J = t & D, E = t & A, x = t & (W | H), z = t & Ae, j = E ? r : xr(e);
        function G() {
          for (var q = arguments.length, ee = U(q), rt = q; rt--; )
            ee[rt] = arguments[rt];
          if (x)
            var Ye = Xn(G), it = Jm(ee, Ye);
          if (o && (ee = Kc(ee, o, c, x)), d && (ee = $c(ee, d, m, x)), q -= it, x && q < M) {
            var Ve = Lt(ee, Ye);
            return lu(
              e,
              t,
              Oi,
              G.placeholder,
              i,
              ee,
              Ve,
              V,
              w,
              M - q
            );
          }
          var Rt = J ? i : this, Ot = E ? Rt[e] : e;
          return q = ee.length, V ? ee = A1(ee, V) : z && q > 1 && ee.reverse(), Z && w < q && (ee.length = w), this && this !== be && this instanceof G && (Ot = j || xr(Ot)), Ot.apply(Rt, ee);
        }
        return G;
      }
      function au(e, t) {
        return function(i, o) {
          return GV(i, e, t(o), {});
        };
      }
      function zi(e, t) {
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
      function Ao(e) {
        return Bt(function(t) {
          return t = ce(t, et(O())), X(function(i) {
            var o = this;
            return e(t, function(c) {
              return $e(c, o, i);
            });
          });
        });
      }
      function Gi(e, t) {
        t = t === r ? " " : tt(t);
        var i = t.length;
        if (i < 2)
          return i ? ko(t, e) : t;
        var o = ko(t, yi(e / On(t)));
        return Qn(t) ? tn(vt(o), 0, e).join("") : o.slice(0, e);
      }
      function m1(e, t, i, o) {
        var c = t & D, d = xr(e);
        function m() {
          for (var V = -1, w = arguments.length, M = -1, Z = o.length, J = U(Z + w), E = this && this !== be && this instanceof m ? d : e; ++M < Z; )
            J[M] = o[M];
          for (; w--; )
            J[M++] = arguments[++V];
          return $e(E, c ? i : this, J);
        }
        return m;
      }
      function ou(e) {
        return function(t, i, o) {
          return o && typeof o != "number" && Ge(t, i, o) && (i = o = r), t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), o = o === r ? t < i ? 1 : -1 : Qt(o), e1(t, i, o, e);
        };
      }
      function Yi(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = pt(t), i = pt(i)), e(t, i);
        };
      }
      function lu(e, t, i, o, c, d, m, V, w, M) {
        var Z = t & W, J = Z ? m : r, E = Z ? r : m, x = Z ? d : r, z = Z ? r : d;
        t |= Z ? y : _, t &= ~(Z ? _ : y), t & Q || (t &= ~(D | A));
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
        return Go(e) && wu(G, j), G.placeholder = o, Uu(G, e, t);
      }
      function xo(e) {
        var t = Re[e];
        return function(i, o) {
          if (i = pt(i), o = o == null ? 0 : xe(P(o), 292), o && Uc(i)) {
            var c = (ne(i) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + o));
            return c = (ne(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - o));
          }
          return t(i);
        };
      }
      var V1 = Yn && 1 / vi(new Yn([, -0]))[1] == ye ? function(e) {
        return new Yn(e);
      } : rl;
      function su(e) {
        return function(t) {
          var i = Be(t);
          return i == Vt ? uo(t) : i == Tt ? Wm(t) : Zm(t, e(t));
        };
      }
      function xt(e, t, i, o, c, d, m, V) {
        var w = t & A;
        if (!w && typeof e != "function")
          throw new ct(h);
        var M = o ? o.length : 0;
        if (M || (t &= ~(y | _), o = c = r), m = m === r ? m : Ne(P(m), 0), V = V === r ? V : P(V), M -= c ? c.length : 0, t & _) {
          var Z = o, J = c;
          o = c = r;
        }
        var E = w ? r : Do(e), x = [
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
        if (E && F1(x, E), e = x[0], t = x[1], i = x[2], o = x[3], c = x[4], V = x[9] = x[9] === r ? w ? 0 : e.length : Ne(x[9] - M, 0), !V && t & (W | H) && (t &= ~(W | H)), !t || t == D)
          var z = h1(e, t, i);
        else
          t == W || t == H ? z = p1(e, t, V) : (t == y || t == (D | y)) && !c.length ? z = m1(e, t, i, o) : z = Oi.apply(r, x);
        var j = E ? Gc : wu;
        return Uu(j(z, x), e, t);
      }
      function cu(e, t, i, o) {
        return e === r || Ut(e, Gn[i]) && !re.call(o, i) ? t : e;
      }
      function uu(e, t, i, o, c, d) {
        return ue(e) && ue(t) && (d.set(t, e), Bi(e, t, r, uu, d), d.delete(t)), e;
      }
      function T1(e) {
        return Dr(e) ? r : e;
      }
      function du(e, t, i, o, c, d) {
        var m = i & F, V = e.length, w = t.length;
        if (V != w && !(m && w > V))
          return !1;
        var M = d.get(e), Z = d.get(t);
        if (M && Z)
          return M == t && Z == e;
        var J = -1, E = !0, x = i & C ? new Tn() : r;
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
            if (!io(t, function(q, ee) {
              if (!Mr(x, ee) && (z === q || c(z, q, i, o, d)))
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
      function v1(e, t, i, o, c, d, m) {
        switch (i) {
          case Bn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case gr:
            return !(e.byteLength != t.byteLength || !d(new Mi(e), new Mi(t)));
          case Tr:
          case vr:
          case wr:
            return Ut(+e, +t);
          case ui:
            return e.name == t.name && e.message == t.message;
          case Ur:
          case Rr:
            return e == t + "";
          case Vt:
            var V = uo;
          case Tt:
            var w = o & F;
            if (V || (V = vi), e.size != t.size && !w)
              return !1;
            var M = m.get(e);
            if (M)
              return M == t;
            o |= C, m.set(e, t);
            var Z = du(V(e), V(t), o, c, d, m);
            return m.delete(e), Z;
          case fi:
            if (br)
              return br.call(e) == br.call(t);
        }
        return !1;
      }
      function w1(e, t, i, o, c, d) {
        var m = i & F, V = Bo(e), w = V.length, M = Bo(t), Z = M.length;
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
          var Ye = e.constructor, it = t.constructor;
          Ye != it && "constructor" in e && "constructor" in t && !(typeof Ye == "function" && Ye instanceof Ye && typeof it == "function" && it instanceof it) && (j = !1);
        }
        return d.delete(e), d.delete(t), j;
      }
      function Bt(e) {
        return Io(Tu(e, r, Ju), e + "");
      }
      function Bo(e) {
        return Fc(e, Me, Oo);
      }
      function Co(e) {
        return Fc(e, _e, fu);
      }
      var Do = Ei ? function(e) {
        return Ei.get(e);
      } : rl;
      function Ii(e) {
        for (var t = e.name + "", i = In[t], o = re.call(In, t) ? i.length : 0; o--; ) {
          var c = i[o], d = c.func;
          if (d == null || d == e)
            return c.name;
        }
        return t;
      }
      function Xn(e) {
        var t = re.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function O() {
        var e = u.iteratee || tl;
        return e = e === tl ? Ac : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Hi(e, t) {
        var i = e.__data__;
        return k1(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function Qo(e) {
        for (var t = Me(e), i = t.length; i--; ) {
          var o = t[i], c = e[o];
          t[i] = [o, c, mu(c)];
        }
        return t;
      }
      function Un(e, t) {
        var i = Em(e, t);
        return Wc(i) ? i : r;
      }
      function U1(e) {
        var t = re.call(e, mn), i = e[mn];
        try {
          e[mn] = r;
          var o = !0;
        } catch {
        }
        var c = Ni.call(e);
        return o && (t ? e[mn] = i : delete e[mn]), c;
      }
      var Oo = ho ? function(e) {
        return e == null ? [] : (e = oe(e), Xt(ho(e), function(t) {
          return vc.call(e, t);
        }));
      } : il, fu = ho ? function(e) {
        for (var t = []; e; )
          _t(t, Oo(e)), e = Zi(e);
        return t;
      } : il, Be = ze;
      (po && Be(new po(new ArrayBuffer(1))) != Bn || Jr && Be(new Jr()) != Vt || mo && Be(mo.resolve()) != ys || Yn && Be(new Yn()) != Tt || kr && Be(new kr()) != Nr) && (Be = function(e) {
        var t = ze(e), i = t == Ft ? e.constructor : r, o = i ? Rn(i) : "";
        if (o)
          switch (o) {
            case nV:
              return Bn;
            case rV:
              return Vt;
            case iV:
              return ys;
            case aV:
              return Tt;
            case oV:
              return Nr;
          }
        return t;
      });
      function R1(e, t, i) {
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
              t = xe(t, e + m);
              break;
            case "takeRight":
              e = Ne(e, t - m);
              break;
          }
        }
        return { start: e, end: t };
      }
      function N1(e) {
        var t = e.match(yp);
        return t ? t[1].split(bp) : [];
      }
      function hu(e, t, i) {
        t = en(t, e);
        for (var o = -1, c = t.length, d = !1; ++o < c; ) {
          var m = yt(t[o]);
          if (!(d = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return d || ++o != c ? d : (c = e == null ? 0 : e.length, !!c && Ki(c) && Ct(m, c) && (I(e) || Nn(e)));
      }
      function g1(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && re.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function pu(e) {
        return typeof e.constructor == "function" && !Br(e) ? Hn(Zi(e)) : {};
      }
      function M1(e, t, i) {
        var o = e.constructor;
        switch (t) {
          case gr:
            return Wo(e);
          case Tr:
          case vr:
            return new o(+e);
          case Bn:
            return l1(e, i);
          case Da:
          case Qa:
          case Oa:
          case za:
          case Ga:
          case Ya:
          case Ia:
          case Ha:
          case Pa:
            return Lc(e, i);
          case Vt:
            return new o();
          case wr:
          case Rr:
            return new o(e);
          case Ur:
            return s1(e);
          case Tt:
            return new o();
          case fi:
            return c1(e);
        }
      }
      function Z1(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var o = i - 1;
        return t[o] = (i > 1 ? "& " : "") + t[o], t = t.join(i > 2 ? ", " : " "), e.replace(kp, `{
/* [wrapped with ` + t + `] */
`);
      }
      function J1(e) {
        return I(e) || Nn(e) || !!(wc && e && e[wc]);
      }
      function Ct(e, t) {
        var i = typeof e;
        return t = t == null ? Oe : t, !!t && (i == "number" || i != "symbol" && Dp.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ge(e, t, i) {
        if (!ue(i))
          return !1;
        var o = typeof t;
        return (o == "number" ? Xe(i) && Ct(t, i.length) : o == "string" && t in i) ? Ut(i[t], e) : !1;
      }
      function zo(e, t) {
        if (I(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || nt(e) ? !0 : gp.test(e) || !Np.test(e) || t != null && e in oe(t);
      }
      function k1(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Go(e) {
        var t = Ii(e), i = u[t];
        if (typeof i != "function" || !(t in K.prototype))
          return !1;
        if (e === i)
          return !0;
        var o = Do(i);
        return !!o && e === o[0];
      }
      function y1(e) {
        return !!mc && mc in e;
      }
      var b1 = Ui ? Dt : al;
      function Br(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || Gn;
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
      function E1(e) {
        var t = Li(e, function(o) {
          return i.size === N && i.clear(), o;
        }), i = t.cache;
        return t;
      }
      function F1(e, t) {
        var i = e[1], o = t[1], c = i | o, d = c < (D | A | $), m = o == $ && i == W || o == $ && i == L && e[7].length <= t[8] || o == ($ | L) && t[7].length <= t[8] && i == W;
        if (!(d || m))
          return e;
        o & D && (e[2] = t[2], c |= i & D ? 0 : Q);
        var V = t[3];
        if (V) {
          var w = e[3];
          e[3] = w ? Kc(w, V, t[4]) : V, e[4] = w ? Lt(e[3], g) : t[4];
        }
        return V = t[5], V && (w = e[5], e[5] = w ? $c(w, V, t[6]) : V, e[6] = w ? Lt(e[5], g) : t[6]), V = t[7], V && (e[7] = V), o & $ && (e[8] = e[8] == null ? t[8] : xe(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function S1(e) {
        var t = [];
        if (e != null)
          for (var i in oe(e))
            t.push(i);
        return t;
      }
      function W1(e) {
        return Ni.call(e);
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
        return t.length < 2 ? e : wn(e, ft(t, 0, -1));
      }
      function A1(e, t) {
        for (var i = e.length, o = xe(t.length, i), c = je(e); o--; ) {
          var d = t[o];
          e[o] = Ct(d, i) ? c[d] : r;
        }
        return e;
      }
      function Yo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var wu = Ru(Gc), Cr = _m || function(e, t) {
        return be.setTimeout(e, t);
      }, Io = Ru(r1);
      function Uu(e, t, i) {
        var o = t + "";
        return Io(e, Z1(o, x1(N1(o), i)));
      }
      function Ru(e) {
        var t = 0, i = 0;
        return function() {
          var o = $m(), c = pe - (o - i);
          if (i = o, c > 0) {
            if (++t >= fe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Pi(e, t) {
        var i = -1, o = e.length, c = o - 1;
        for (t = t === r ? o : t; ++i < t; ) {
          var d = Jo(i, c), m = e[d];
          e[d] = e[i], e[i] = m;
        }
        return e.length = t, e;
      }
      var Nu = E1(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mp, function(i, o, c, d) {
          t.push(c ? d.replace(Sp, "$1") : o || i);
        }), t;
      });
      function yt(e) {
        if (typeof e == "string" || nt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ye ? "-0" : t;
      }
      function Rn(e) {
        if (e != null) {
          try {
            return Ri.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function x1(e, t) {
        return st(sp, function(i) {
          var o = "_." + i[0];
          t & i[1] && !Vi(e, o) && e.push(o);
        }), e.sort();
      }
      function gu(e) {
        if (e instanceof K)
          return e.clone();
        var t = new ut(e.__wrapped__, e.__chain__);
        return t.__actions__ = je(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function B1(e, t, i) {
        (i ? Ge(e, t, i) : t === r) ? t = 1 : t = Ne(P(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var c = 0, d = 0, m = U(yi(o / t)); c < o; )
          m[d++] = ft(e, c, c += t);
        return m;
      }
      function C1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = 0, c = []; ++t < i; ) {
          var d = e[t];
          d && (c[o++] = d);
        }
        return c;
      }
      function D1() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = U(e - 1), i = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return _t(I(i) ? je(i) : [i], Ee(t, 1));
      }
      var Q1 = X(function(e, t) {
        return me(e) ? Fr(e, Ee(t, 1, me, !0)) : [];
      }), O1 = X(function(e, t) {
        var i = ht(t);
        return me(i) && (i = r), me(e) ? Fr(e, Ee(t, 1, me, !0), O(i, 2)) : [];
      }), z1 = X(function(e, t) {
        var i = ht(t);
        return me(i) && (i = r), me(e) ? Fr(e, Ee(t, 1, me, !0), r, i) : [];
      });
      function G1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), ft(e, t < 0 ? 0 : t, o)) : [];
      }
      function Y1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), t = o - t, ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function I1(e, t) {
        return e && e.length ? Di(e, O(t, 3), !0, !0) : [];
      }
      function H1(e, t) {
        return e && e.length ? Di(e, O(t, 3), !0) : [];
      }
      function P1(e, t, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && Ge(e, t, i) && (i = 0, o = c), DV(e, t, i, o)) : [];
      }
      function Mu(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Ne(o + c, 0)), Ti(e, O(t, 3), c);
      }
      function Zu(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o - 1;
        return i !== r && (c = P(i), c = i < 0 ? Ne(o + c, 0) : xe(c, o - 1)), Ti(e, O(t, 3), c, !0);
      }
      function Ju(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ee(e, 1) : [];
      }
      function j1(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ee(e, ye) : [];
      }
      function X1(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : P(t), Ee(e, t)) : [];
      }
      function _1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = {}; ++t < i; ) {
          var c = e[t];
          o[c[0]] = c[1];
        }
        return o;
      }
      function ku(e) {
        return e && e.length ? e[0] : r;
      }
      function L1(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Ne(o + c, 0)), Dn(e, t, c);
      }
      function q1(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, 0, -1) : [];
      }
      var K1 = X(function(e) {
        var t = ce(e, Fo);
        return t.length && t[0] === e[0] ? Ro(t) : [];
      }), $1 = X(function(e) {
        var t = ht(e), i = ce(e, Fo);
        return t === ht(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? Ro(i, O(t, 2)) : [];
      }), e0 = X(function(e) {
        var t = ht(e), i = ce(e, Fo);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? Ro(i, r, t) : [];
      });
      function t0(e, t) {
        return e == null ? "" : qm.call(e, t);
      }
      function ht(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function n0(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o;
        return i !== r && (c = P(i), c = c < 0 ? Ne(o + c, 0) : xe(c, o - 1)), t === t ? xm(e, t, c) : Ti(e, lc, c, !0);
      }
      function r0(e, t) {
        return e && e.length ? Dc(e, P(t)) : r;
      }
      var i0 = X(yu);
      function yu(e, t) {
        return e && e.length && t && t.length ? Zo(e, t) : e;
      }
      function a0(e, t, i) {
        return e && e.length && t && t.length ? Zo(e, t, O(i, 2)) : e;
      }
      function o0(e, t, i) {
        return e && e.length && t && t.length ? Zo(e, t, r, i) : e;
      }
      var l0 = Bt(function(e, t) {
        var i = e == null ? 0 : e.length, o = To(e, t);
        return zc(e, ce(t, function(c) {
          return Ct(c, i) ? +c : c;
        }).sort(qc)), o;
      });
      function s0(e, t) {
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
      function Ho(e) {
        return e == null ? e : tV.call(e);
      }
      function c0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i && typeof i != "number" && Ge(e, t, i) ? (t = 0, i = o) : (t = t == null ? 0 : P(t), i = i === r ? o : P(i)), ft(e, t, i)) : [];
      }
      function u0(e, t) {
        return Ci(e, t);
      }
      function d0(e, t, i) {
        return yo(e, t, O(i, 2));
      }
      function f0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Ci(e, t);
          if (o < i && Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function h0(e, t) {
        return Ci(e, t, !0);
      }
      function p0(e, t, i) {
        return yo(e, t, O(i, 2), !0);
      }
      function m0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Ci(e, t, !0) - 1;
          if (Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function V0(e) {
        return e && e.length ? Yc(e) : [];
      }
      function T0(e, t) {
        return e && e.length ? Yc(e, O(t, 2)) : [];
      }
      function v0(e) {
        var t = e == null ? 0 : e.length;
        return t ? ft(e, 1, t) : [];
      }
      function w0(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : P(t), ft(e, 0, t < 0 ? 0 : t)) : [];
      }
      function U0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : P(t), t = o - t, ft(e, t < 0 ? 0 : t, o)) : [];
      }
      function R0(e, t) {
        return e && e.length ? Di(e, O(t, 3), !1, !0) : [];
      }
      function N0(e, t) {
        return e && e.length ? Di(e, O(t, 3)) : [];
      }
      var g0 = X(function(e) {
        return $t(Ee(e, 1, me, !0));
      }), M0 = X(function(e) {
        var t = ht(e);
        return me(t) && (t = r), $t(Ee(e, 1, me, !0), O(t, 2));
      }), Z0 = X(function(e) {
        var t = ht(e);
        return t = typeof t == "function" ? t : r, $t(Ee(e, 1, me, !0), r, t);
      });
      function J0(e) {
        return e && e.length ? $t(e) : [];
      }
      function k0(e, t) {
        return e && e.length ? $t(e, O(t, 2)) : [];
      }
      function y0(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? $t(e, r, t) : [];
      }
      function Po(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Xt(e, function(i) {
          if (me(i))
            return t = Ne(i.length, t), !0;
        }), so(t, function(i) {
          return ce(e, ao(i));
        });
      }
      function bu(e, t) {
        if (!(e && e.length))
          return [];
        var i = Po(e);
        return t == null ? i : ce(i, function(o) {
          return $e(t, r, o);
        });
      }
      var b0 = X(function(e, t) {
        return me(e) ? Fr(e, t) : [];
      }), E0 = X(function(e) {
        return Eo(Xt(e, me));
      }), F0 = X(function(e) {
        var t = ht(e);
        return me(t) && (t = r), Eo(Xt(e, me), O(t, 2));
      }), S0 = X(function(e) {
        var t = ht(e);
        return t = typeof t == "function" ? t : r, Eo(Xt(e, me), r, t);
      }), W0 = X(Po);
      function A0(e, t) {
        return jc(e || [], t || [], Er);
      }
      function x0(e, t) {
        return jc(e || [], t || [], Ar);
      }
      var B0 = X(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, bu(e, i);
      });
      function Eu(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function C0(e, t) {
        return t(e), e;
      }
      function ji(e, t) {
        return t(e);
      }
      var D0 = Bt(function(e) {
        var t = e.length, i = t ? e[0] : 0, o = this.__wrapped__, c = function(d) {
          return To(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof K) || !Ct(i) ? this.thru(c) : (o = o.slice(i, +i + (t ? 1 : 0)), o.__actions__.push({
          func: ji,
          args: [c],
          thisArg: r
        }), new ut(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(r), d;
        }));
      });
      function Q0() {
        return Eu(this);
      }
      function O0() {
        return new ut(this.value(), this.__chain__);
      }
      function z0() {
        this.__values__ === r && (this.__values__ = Iu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function G0() {
        return this;
      }
      function Y0(e) {
        for (var t, i = this; i instanceof Si; ) {
          var o = gu(i);
          o.__index__ = 0, o.__values__ = r, t ? c.__wrapped__ = o : t = o;
          var c = o;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function I0() {
        var e = this.__wrapped__;
        if (e instanceof K) {
          var t = e;
          return this.__actions__.length && (t = new K(this)), t = t.reverse(), t.__actions__.push({
            func: ji,
            args: [Ho],
            thisArg: r
          }), new ut(t, this.__chain__);
        }
        return this.thru(Ho);
      }
      function H0() {
        return Pc(this.__wrapped__, this.__actions__);
      }
      var P0 = Qi(function(e, t, i) {
        re.call(e, i) ? ++e[i] : At(e, i, 1);
      });
      function j0(e, t, i) {
        var o = I(e) ? ac : CV;
        return i && Ge(e, t, i) && (t = r), o(e, O(t, 3));
      }
      function X0(e, t) {
        var i = I(e) ? Xt : bc;
        return i(e, O(t, 3));
      }
      var _0 = ru(Mu), L0 = ru(Zu);
      function q0(e, t) {
        return Ee(Xi(e, t), 1);
      }
      function K0(e, t) {
        return Ee(Xi(e, t), ye);
      }
      function $0(e, t, i) {
        return i = i === r ? 1 : P(i), Ee(Xi(e, t), i);
      }
      function Fu(e, t) {
        var i = I(e) ? st : Kt;
        return i(e, O(t, 3));
      }
      function Su(e, t) {
        var i = I(e) ? vm : yc;
        return i(e, O(t, 3));
      }
      var eT = Qi(function(e, t, i) {
        re.call(e, i) ? e[i].push(t) : At(e, i, [t]);
      });
      function tT(e, t, i, o) {
        e = Xe(e) ? e : Ln(e), i = i && !o ? P(i) : 0;
        var c = e.length;
        return i < 0 && (i = Ne(c + i, 0)), $i(e) ? i <= c && e.indexOf(t, i) > -1 : !!c && Dn(e, t, i) > -1;
      }
      var nT = X(function(e, t, i) {
        var o = -1, c = typeof t == "function", d = Xe(e) ? U(e.length) : [];
        return Kt(e, function(m) {
          d[++o] = c ? $e(t, m, i) : Sr(m, t, i);
        }), d;
      }), rT = Qi(function(e, t, i) {
        At(e, i, t);
      });
      function Xi(e, t) {
        var i = I(e) ? ce : xc;
        return i(e, O(t, 3));
      }
      function iT(e, t, i, o) {
        return e == null ? [] : (I(t) || (t = t == null ? [] : [t]), i = o ? r : i, I(i) || (i = i == null ? [] : [i]), Qc(e, t, i));
      }
      var aT = Qi(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function oT(e, t, i) {
        var o = I(e) ? ro : cc, c = arguments.length < 3;
        return o(e, O(t, 4), i, c, Kt);
      }
      function lT(e, t, i) {
        var o = I(e) ? wm : cc, c = arguments.length < 3;
        return o(e, O(t, 4), i, c, yc);
      }
      function sT(e, t) {
        var i = I(e) ? Xt : bc;
        return i(e, qi(O(t, 3)));
      }
      function cT(e) {
        var t = I(e) ? Mc : t1;
        return t(e);
      }
      function uT(e, t, i) {
        (i ? Ge(e, t, i) : t === r) ? t = 1 : t = P(t);
        var o = I(e) ? SV : n1;
        return o(e, t);
      }
      function dT(e) {
        var t = I(e) ? WV : i1;
        return t(e);
      }
      function fT(e) {
        if (e == null)
          return 0;
        if (Xe(e))
          return $i(e) ? On(e) : e.length;
        var t = Be(e);
        return t == Vt || t == Tt ? e.size : go(e).length;
      }
      function hT(e, t, i) {
        var o = I(e) ? io : a1;
        return i && Ge(e, t, i) && (t = r), o(e, O(t, 3));
      }
      var pT = X(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && Ge(e, t[0], t[1]) ? t = [] : i > 2 && Ge(t[0], t[1], t[2]) && (t = [t[0]]), Qc(e, Ee(t, 1), []);
      }), _i = Xm || function() {
        return be.Date.now();
      };
      function mT(e, t) {
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
      var jo = X(function(e, t, i) {
        var o = D;
        if (i.length) {
          var c = Lt(i, Xn(jo));
          o |= y;
        }
        return xt(e, o, t, i, c);
      }), xu = X(function(e, t, i) {
        var o = D | A;
        if (i.length) {
          var c = Lt(i, Xn(xu));
          o |= y;
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
        function x(Ve) {
          var Rt = o, Ot = c;
          return o = c = r, M = Ve, m = e.apply(Ot, Rt), m;
        }
        function z(Ve) {
          return M = Ve, V = Cr(q, t), Z ? x(Ve) : m;
        }
        function j(Ve) {
          var Rt = Ve - w, Ot = Ve - M, rd = t - Rt;
          return J ? xe(rd, d - Ot) : rd;
        }
        function G(Ve) {
          var Rt = Ve - w, Ot = Ve - M;
          return w === r || Rt >= t || Rt < 0 || J && Ot >= d;
        }
        function q() {
          var Ve = _i();
          if (G(Ve))
            return ee(Ve);
          V = Cr(q, j(Ve));
        }
        function ee(Ve) {
          return V = r, E && o ? x(Ve) : (o = c = r, m);
        }
        function rt() {
          V !== r && Xc(V), M = 0, o = w = c = V = r;
        }
        function Ye() {
          return V === r ? m : ee(_i());
        }
        function it() {
          var Ve = _i(), Rt = G(Ve);
          if (o = arguments, c = this, w = Ve, Rt) {
            if (V === r)
              return z(w);
            if (J)
              return Xc(V), V = Cr(q, t), x(w);
          }
          return V === r && (V = Cr(q, t)), m;
        }
        return it.cancel = rt, it.flush = Ye, it;
      }
      var VT = X(function(e, t) {
        return kc(e, 1, t);
      }), TT = X(function(e, t, i) {
        return kc(e, pt(t) || 0, i);
      });
      function vT(e) {
        return xt(e, Ae);
      }
      function Li(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new ct(h);
        var i = function() {
          var o = arguments, c = t ? t.apply(this, o) : o[0], d = i.cache;
          if (d.has(c))
            return d.get(c);
          var m = e.apply(this, o);
          return i.cache = d.set(c, m) || d, m;
        };
        return i.cache = new (Li.Cache || Wt)(), i;
      }
      Li.Cache = Wt;
      function qi(e) {
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
      function wT(e) {
        return Au(2, e);
      }
      var UT = o1(function(e, t) {
        t = t.length == 1 && I(t[0]) ? ce(t[0], et(O())) : ce(Ee(t, 1), et(O()));
        var i = t.length;
        return X(function(o) {
          for (var c = -1, d = xe(o.length, i); ++c < d; )
            o[c] = t[c].call(this, o[c]);
          return $e(e, this, o);
        });
      }), Xo = X(function(e, t) {
        var i = Lt(t, Xn(Xo));
        return xt(e, y, r, t, i);
      }), Qu = X(function(e, t) {
        var i = Lt(t, Xn(Qu));
        return xt(e, _, r, t, i);
      }), RT = Bt(function(e, t) {
        return xt(e, L, r, r, r, t);
      });
      function NT(e, t) {
        if (typeof e != "function")
          throw new ct(h);
        return t = t === r ? t : P(t), X(e, t);
      }
      function gT(e, t) {
        if (typeof e != "function")
          throw new ct(h);
        return t = t == null ? 0 : Ne(P(t), 0), X(function(i) {
          var o = i[t], c = tn(i, 0, t);
          return o && _t(c, o), $e(e, this, c);
        });
      }
      function MT(e, t, i) {
        var o = !0, c = !0;
        if (typeof e != "function")
          throw new ct(h);
        return ue(i) && (o = "leading" in i ? !!i.leading : o, c = "trailing" in i ? !!i.trailing : c), Du(e, t, {
          leading: o,
          maxWait: t,
          trailing: c
        });
      }
      function ZT(e) {
        return Wu(e, 1);
      }
      function JT(e, t) {
        return Xo(So(t), e);
      }
      function kT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return I(e) ? e : [e];
      }
      function yT(e) {
        return dt(e, B);
      }
      function bT(e, t) {
        return t = typeof t == "function" ? t : r, dt(e, B, t);
      }
      function ET(e) {
        return dt(e, k | B);
      }
      function FT(e, t) {
        return t = typeof t == "function" ? t : r, dt(e, k | B, t);
      }
      function ST(e, t) {
        return t == null || Jc(e, t, Me(t));
      }
      function Ut(e, t) {
        return e === t || e !== e && t !== t;
      }
      var WT = Yi(Uo), AT = Yi(function(e, t) {
        return e >= t;
      }), Nn = Sc(function() {
        return arguments;
      }()) ? Sc : function(e) {
        return he(e) && re.call(e, "callee") && !vc.call(e, "callee");
      }, I = U.isArray, xT = $s ? et($s) : YV;
      function Xe(e) {
        return e != null && Ki(e.length) && !Dt(e);
      }
      function me(e) {
        return he(e) && Xe(e);
      }
      function BT(e) {
        return e === !0 || e === !1 || he(e) && ze(e) == Tr;
      }
      var nn = Lm || al, CT = ec ? et(ec) : IV;
      function DT(e) {
        return he(e) && e.nodeType === 1 && !Dr(e);
      }
      function QT(e) {
        if (e == null)
          return !0;
        if (Xe(e) && (I(e) || typeof e == "string" || typeof e.splice == "function" || nn(e) || _n(e) || Nn(e)))
          return !e.length;
        var t = Be(e);
        if (t == Vt || t == Tt)
          return !e.size;
        if (Br(e))
          return !go(e).length;
        for (var i in e)
          if (re.call(e, i))
            return !1;
        return !0;
      }
      function OT(e, t) {
        return Wr(e, t);
      }
      function zT(e, t, i) {
        i = typeof i == "function" ? i : r;
        var o = i ? i(e, t) : r;
        return o === r ? Wr(e, t, r, i) : !!o;
      }
      function _o(e) {
        if (!he(e))
          return !1;
        var t = ze(e);
        return t == ui || t == up || typeof e.message == "string" && typeof e.name == "string" && !Dr(e);
      }
      function GT(e) {
        return typeof e == "number" && Uc(e);
      }
      function Dt(e) {
        if (!ue(e))
          return !1;
        var t = ze(e);
        return t == di || t == ks || t == cp || t == fp;
      }
      function Ou(e) {
        return typeof e == "number" && e == P(e);
      }
      function Ki(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oe;
      }
      function ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function he(e) {
        return e != null && typeof e == "object";
      }
      var zu = tc ? et(tc) : PV;
      function YT(e, t) {
        return e === t || No(e, t, Qo(t));
      }
      function IT(e, t, i) {
        return i = typeof i == "function" ? i : r, No(e, t, Qo(t), i);
      }
      function HT(e) {
        return Gu(e) && e != +e;
      }
      function PT(e) {
        if (b1(e))
          throw new Y(f);
        return Wc(e);
      }
      function jT(e) {
        return e === null;
      }
      function XT(e) {
        return e == null;
      }
      function Gu(e) {
        return typeof e == "number" || he(e) && ze(e) == wr;
      }
      function Dr(e) {
        if (!he(e) || ze(e) != Ft)
          return !1;
        var t = Zi(e);
        if (t === null)
          return !0;
        var i = re.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && Ri.call(i) == Im;
      }
      var Lo = nc ? et(nc) : jV;
      function _T(e) {
        return Ou(e) && e >= -Oe && e <= Oe;
      }
      var Yu = rc ? et(rc) : XV;
      function $i(e) {
        return typeof e == "string" || !I(e) && he(e) && ze(e) == Rr;
      }
      function nt(e) {
        return typeof e == "symbol" || he(e) && ze(e) == fi;
      }
      var _n = ic ? et(ic) : _V;
      function LT(e) {
        return e === r;
      }
      function qT(e) {
        return he(e) && Be(e) == Nr;
      }
      function KT(e) {
        return he(e) && ze(e) == pp;
      }
      var $T = Yi(Mo), ev = Yi(function(e, t) {
        return e <= t;
      });
      function Iu(e) {
        if (!e)
          return [];
        if (Xe(e))
          return $i(e) ? vt(e) : je(e);
        if (Zr && e[Zr])
          return Sm(e[Zr]());
        var t = Be(e), i = t == Vt ? uo : t == Tt ? vi : Ln;
        return i(e);
      }
      function Qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = pt(e), e === ye || e === -ye) {
          var t = e < 0 ? -1 : 1;
          return t * Vr;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var t = Qt(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function Hu(e) {
        return e ? vn(P(e), 0, Zt) : 0;
      }
      function pt(e) {
        if (typeof e == "number")
          return e;
        if (nt(e))
          return si;
        if (ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = uc(e);
        var i = xp.test(e);
        return i || Cp.test(e) ? mm(e.slice(2), i ? 2 : 8) : Ap.test(e) ? si : +e;
      }
      function Pu(e) {
        return kt(e, _e(e));
      }
      function tv(e) {
        return e ? vn(P(e), -Oe, Oe) : e === 0 ? e : 0;
      }
      function ne(e) {
        return e == null ? "" : tt(e);
      }
      var nv = Pn(function(e, t) {
        if (Br(t) || Xe(t)) {
          kt(t, Me(t), e);
          return;
        }
        for (var i in t)
          re.call(t, i) && Er(e, i, t[i]);
      }), ju = Pn(function(e, t) {
        kt(t, _e(t), e);
      }), ea = Pn(function(e, t, i, o) {
        kt(t, _e(t), e, o);
      }), rv = Pn(function(e, t, i, o) {
        kt(t, Me(t), e, o);
      }), iv = Bt(To);
      function av(e, t) {
        var i = Hn(e);
        return t == null ? i : Zc(i, t);
      }
      var ov = X(function(e, t) {
        e = oe(e);
        var i = -1, o = t.length, c = o > 2 ? t[2] : r;
        for (c && Ge(t[0], t[1], c) && (o = 1); ++i < o; )
          for (var d = t[i], m = _e(d), V = -1, w = m.length; ++V < w; ) {
            var M = m[V], Z = e[M];
            (Z === r || Ut(Z, Gn[M]) && !re.call(e, M)) && (e[M] = d[M]);
          }
        return e;
      }), lv = X(function(e) {
        return e.push(r, uu), $e(Xu, r, e);
      });
      function sv(e, t) {
        return oc(e, O(t, 3), Jt);
      }
      function cv(e, t) {
        return oc(e, O(t, 3), wo);
      }
      function uv(e, t) {
        return e == null ? e : vo(e, O(t, 3), _e);
      }
      function dv(e, t) {
        return e == null ? e : Ec(e, O(t, 3), _e);
      }
      function fv(e, t) {
        return e && Jt(e, O(t, 3));
      }
      function hv(e, t) {
        return e && wo(e, O(t, 3));
      }
      function pv(e) {
        return e == null ? [] : xi(e, Me(e));
      }
      function mv(e) {
        return e == null ? [] : xi(e, _e(e));
      }
      function qo(e, t, i) {
        var o = e == null ? r : wn(e, t);
        return o === r ? i : o;
      }
      function Vv(e, t) {
        return e != null && hu(e, t, QV);
      }
      function Ko(e, t) {
        return e != null && hu(e, t, OV);
      }
      var Tv = au(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = Ni.call(t)), e[t] = i;
      }, el(Le)), vv = au(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = Ni.call(t)), re.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, O), wv = X(Sr);
      function Me(e) {
        return Xe(e) ? gc(e) : go(e);
      }
      function _e(e) {
        return Xe(e) ? gc(e, !0) : LV(e);
      }
      function Uv(e, t) {
        var i = {};
        return t = O(t, 3), Jt(e, function(o, c, d) {
          At(i, t(o, c, d), o);
        }), i;
      }
      function Rv(e, t) {
        var i = {};
        return t = O(t, 3), Jt(e, function(o, c, d) {
          At(i, c, t(o, c, d));
        }), i;
      }
      var Nv = Pn(function(e, t, i) {
        Bi(e, t, i);
      }), Xu = Pn(function(e, t, i, o) {
        Bi(e, t, i, o);
      }), gv = Bt(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var o = !1;
        t = ce(t, function(d) {
          return d = en(d, e), o || (o = d.length > 1), d;
        }), kt(e, Co(e), i), o && (i = dt(i, k | b | B, T1));
        for (var c = t.length; c--; )
          bo(i, t[c]);
        return i;
      });
      function Mv(e, t) {
        return _u(e, qi(O(t)));
      }
      var Zv = Bt(function(e, t) {
        return e == null ? {} : KV(e, t);
      });
      function _u(e, t) {
        if (e == null)
          return {};
        var i = ce(Co(e), function(o) {
          return [o];
        });
        return t = O(t), Oc(e, i, function(o, c) {
          return t(o, c[0]);
        });
      }
      function Jv(e, t, i) {
        t = en(t, e);
        var o = -1, c = t.length;
        for (c || (c = 1, e = r); ++o < c; ) {
          var d = e == null ? r : e[yt(t[o])];
          d === r && (o = c, d = i), e = Dt(d) ? d.call(e) : d;
        }
        return e;
      }
      function kv(e, t, i) {
        return e == null ? e : Ar(e, t, i);
      }
      function yv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Ar(e, t, i, o);
      }
      var Lu = su(Me), qu = su(_e);
      function bv(e, t, i) {
        var o = I(e), c = o || nn(e) || _n(e);
        if (t = O(t, 4), i == null) {
          var d = e && e.constructor;
          c ? i = o ? new d() : [] : ue(e) ? i = Dt(d) ? Hn(Zi(e)) : {} : i = {};
        }
        return (c ? st : Jt)(e, function(m, V, w) {
          return t(i, m, V, w);
        }), i;
      }
      function Ev(e, t) {
        return e == null ? !0 : bo(e, t);
      }
      function Fv(e, t, i) {
        return e == null ? e : Hc(e, t, So(i));
      }
      function Sv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Hc(e, t, So(i), o);
      }
      function Ln(e) {
        return e == null ? [] : co(e, Me(e));
      }
      function Wv(e) {
        return e == null ? [] : co(e, _e(e));
      }
      function Av(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = pt(i), i = i === i ? i : 0), t !== r && (t = pt(t), t = t === t ? t : 0), vn(pt(e), t, i);
      }
      function xv(e, t, i) {
        return t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), e = pt(e), zV(e, t, i);
      }
      function Bv(e, t, i) {
        if (i && typeof i != "boolean" && Ge(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Qt(e), t === r ? (t = e, e = 0) : t = Qt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (i || e % 1 || t % 1) {
          var c = Rc();
          return xe(e + c * (t - e + pm("1e-" + ((c + "").length - 1))), t);
        }
        return Jo(e, t);
      }
      var Cv = jn(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? Ku(t) : t);
      });
      function Ku(e) {
        return $o(ne(e).toLowerCase());
      }
      function $u(e) {
        return e = ne(e), e && e.replace(Qp, km).replace(im, "");
      }
      function Dv(e, t, i) {
        e = ne(e), t = tt(t);
        var o = e.length;
        i = i === r ? o : vn(P(i), 0, o);
        var c = i;
        return i -= t.length, i >= 0 && e.slice(i, c) == t;
      }
      function Qv(e) {
        return e = ne(e), e && wp.test(e) ? e.replace(Es, ym) : e;
      }
      function Ov(e) {
        return e = ne(e), e && Zp.test(e) ? e.replace(ja, "\\$&") : e;
      }
      var zv = jn(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), Gv = jn(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), Yv = nu("toLowerCase");
      function Iv(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? On(e) : 0;
        if (!t || o >= t)
          return e;
        var c = (t - o) / 2;
        return Gi(bi(c), i) + e + Gi(yi(c), i);
      }
      function Hv(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? On(e) : 0;
        return t && o < t ? e + Gi(t - o, i) : e;
      }
      function Pv(e, t, i) {
        e = ne(e), t = P(t);
        var o = t ? On(e) : 0;
        return t && o < t ? Gi(t - o, i) + e : e;
      }
      function jv(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), eV(ne(e).replace(Xa, ""), t || 0);
      }
      function Xv(e, t, i) {
        return (i ? Ge(e, t, i) : t === r) ? t = 1 : t = P(t), ko(ne(e), t);
      }
      function _v() {
        var e = arguments, t = ne(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Lv = jn(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function qv(e, t, i) {
        return i && typeof i != "number" && Ge(e, t, i) && (t = i = r), i = i === r ? Zt : i >>> 0, i ? (e = ne(e), e && (typeof t == "string" || t != null && !Lo(t)) && (t = tt(t), !t && Qn(e)) ? tn(vt(e), 0, i) : e.split(t, i)) : [];
      }
      var Kv = jn(function(e, t, i) {
        return e + (i ? " " : "") + $o(t);
      });
      function $v(e, t, i) {
        return e = ne(e), i = i == null ? 0 : vn(P(i), 0, e.length), t = tt(t), e.slice(i, i + t.length) == t;
      }
      function ew(e, t, i) {
        var o = u.templateSettings;
        i && Ge(e, t, i) && (t = r), e = ne(e), t = ea({}, t, o, cu);
        var c = ea({}, t.imports, o.imports, cu), d = Me(c), m = co(c, d), V, w, M = 0, Z = t.interpolate || hi, J = "__p += '", E = fo(
          (t.escape || hi).source + "|" + Z.source + "|" + (Z === Fs ? Wp : hi).source + "|" + (t.evaluate || hi).source + "|$",
          "g"
        ), x = "//# sourceURL=" + (re.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++cm + "]") + `
`;
        e.replace(E, function(G, q, ee, rt, Ye, it) {
          return ee || (ee = rt), J += e.slice(M, it).replace(Op, bm), q && (V = !0, J += `' +
__e(` + q + `) +
'`), Ye && (w = !0, J += `';
` + Ye + `;
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
        else if (Fp.test(z))
          throw new Y(p);
        J = (w ? J.replace(mp, "") : J).replace(Vp, "$1").replace(Tp, "$1;"), J = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var j = td(function() {
          return te(d, x + "return " + J).apply(r, m);
        });
        if (j.source = J, _o(j))
          throw j;
        return j;
      }
      function tw(e) {
        return ne(e).toLowerCase();
      }
      function nw(e) {
        return ne(e).toUpperCase();
      }
      function rw(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return uc(e);
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = vt(t), d = dc(o, c), m = fc(o, c) + 1;
        return tn(o, d, m).join("");
      }
      function iw(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return e.slice(0, pc(e) + 1);
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = fc(o, vt(t)) + 1;
        return tn(o, 0, c).join("");
      }
      function aw(e, t, i) {
        if (e = ne(e), e && (i || t === r))
          return e.replace(Xa, "");
        if (!e || !(t = tt(t)))
          return e;
        var o = vt(e), c = dc(o, vt(t));
        return tn(o, c).join("");
      }
      function ow(e, t) {
        var i = Pe, o = de;
        if (ue(t)) {
          var c = "separator" in t ? t.separator : c;
          i = "length" in t ? P(t.length) : i, o = "omission" in t ? tt(t.omission) : o;
        }
        e = ne(e);
        var d = e.length;
        if (Qn(e)) {
          var m = vt(e);
          d = m.length;
        }
        if (i >= d)
          return e;
        var V = i - On(o);
        if (V < 1)
          return o;
        var w = m ? tn(m, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return w + o;
        if (m && (V += w.length - V), Lo(c)) {
          if (e.slice(V).search(c)) {
            var M, Z = w;
            for (c.global || (c = fo(c.source, ne(Ss.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(Z); )
              var J = M.index;
            w = w.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(tt(c), V) != V) {
          var E = w.lastIndexOf(c);
          E > -1 && (w = w.slice(0, E));
        }
        return w + o;
      }
      function lw(e) {
        return e = ne(e), e && vp.test(e) ? e.replace(bs, Bm) : e;
      }
      var sw = jn(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), $o = nu("toUpperCase");
      function ed(e, t, i) {
        return e = ne(e), t = i ? r : t, t === r ? Fm(e) ? Qm(e) : Nm(e) : e.match(t) || [];
      }
      var td = X(function(e, t) {
        try {
          return $e(e, r, t);
        } catch (i) {
          return _o(i) ? i : new Y(i);
        }
      }), cw = Bt(function(e, t) {
        return st(t, function(i) {
          i = yt(i), At(e, i, jo(e[i], e));
        }), e;
      });
      function uw(e) {
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
      function dw(e) {
        return BV(dt(e, k));
      }
      function el(e) {
        return function() {
          return e;
        };
      }
      function fw(e, t) {
        return e == null || e !== e ? t : e;
      }
      var hw = iu(), pw = iu(!0);
      function Le(e) {
        return e;
      }
      function tl(e) {
        return Ac(typeof e == "function" ? e : dt(e, k));
      }
      function mw(e) {
        return Bc(dt(e, k));
      }
      function Vw(e, t) {
        return Cc(e, dt(t, k));
      }
      var Tw = X(function(e, t) {
        return function(i) {
          return Sr(i, e, t);
        };
      }), vw = X(function(e, t) {
        return function(i) {
          return Sr(e, i, t);
        };
      });
      function nl(e, t, i) {
        var o = Me(t), c = xi(t, o);
        i == null && !(ue(t) && (c.length || !o.length)) && (i = t, t = e, e = this, c = xi(t, Me(t)));
        var d = !(ue(i) && "chain" in i) || !!i.chain, m = Dt(e);
        return st(c, function(V) {
          var w = t[V];
          e[V] = w, m && (e.prototype[V] = function() {
            var M = this.__chain__;
            if (d || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = je(this.__actions__);
              return J.push({ func: w, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return w.apply(e, _t([this.value()], arguments));
          });
        }), e;
      }
      function ww() {
        return be._ === this && (be._ = Hm), this;
      }
      function rl() {
      }
      function Uw(e) {
        return e = P(e), X(function(t) {
          return Dc(t, e);
        });
      }
      var Rw = Ao(ce), Nw = Ao(ac), gw = Ao(io);
      function nd(e) {
        return zo(e) ? ao(yt(e)) : $V(e);
      }
      function Mw(e) {
        return function(t) {
          return e == null ? r : wn(e, t);
        };
      }
      var Zw = ou(), Jw = ou(!0);
      function il() {
        return [];
      }
      function al() {
        return !1;
      }
      function kw() {
        return {};
      }
      function yw() {
        return "";
      }
      function bw() {
        return !0;
      }
      function Ew(e, t) {
        if (e = P(e), e < 1 || e > Oe)
          return [];
        var i = Zt, o = xe(e, Zt);
        t = O(t), e -= Zt;
        for (var c = so(o, t); ++i < e; )
          t(i);
        return c;
      }
      function Fw(e) {
        return I(e) ? ce(e, yt) : nt(e) ? [e] : je(Nu(ne(e)));
      }
      function Sw(e) {
        var t = ++Ym;
        return ne(e) + t;
      }
      var Ww = zi(function(e, t) {
        return e + t;
      }, 0), Aw = xo("ceil"), xw = zi(function(e, t) {
        return e / t;
      }, 1), Bw = xo("floor");
      function Cw(e) {
        return e && e.length ? Ai(e, Le, Uo) : r;
      }
      function Dw(e, t) {
        return e && e.length ? Ai(e, O(t, 2), Uo) : r;
      }
      function Qw(e) {
        return sc(e, Le);
      }
      function Ow(e, t) {
        return sc(e, O(t, 2));
      }
      function zw(e) {
        return e && e.length ? Ai(e, Le, Mo) : r;
      }
      function Gw(e, t) {
        return e && e.length ? Ai(e, O(t, 2), Mo) : r;
      }
      var Yw = zi(function(e, t) {
        return e * t;
      }, 1), Iw = xo("round"), Hw = zi(function(e, t) {
        return e - t;
      }, 0);
      function Pw(e) {
        return e && e.length ? lo(e, Le) : 0;
      }
      function jw(e, t) {
        return e && e.length ? lo(e, O(t, 2)) : 0;
      }
      return u.after = mT, u.ary = Wu, u.assign = nv, u.assignIn = ju, u.assignInWith = ea, u.assignWith = rv, u.at = iv, u.before = Au, u.bind = jo, u.bindAll = cw, u.bindKey = xu, u.castArray = kT, u.chain = Eu, u.chunk = B1, u.compact = C1, u.concat = D1, u.cond = uw, u.conforms = dw, u.constant = el, u.countBy = P0, u.create = av, u.curry = Bu, u.curryRight = Cu, u.debounce = Du, u.defaults = ov, u.defaultsDeep = lv, u.defer = VT, u.delay = TT, u.difference = Q1, u.differenceBy = O1, u.differenceWith = z1, u.drop = G1, u.dropRight = Y1, u.dropRightWhile = I1, u.dropWhile = H1, u.fill = P1, u.filter = X0, u.flatMap = q0, u.flatMapDeep = K0, u.flatMapDepth = $0, u.flatten = Ju, u.flattenDeep = j1, u.flattenDepth = X1, u.flip = vT, u.flow = hw, u.flowRight = pw, u.fromPairs = _1, u.functions = pv, u.functionsIn = mv, u.groupBy = eT, u.initial = q1, u.intersection = K1, u.intersectionBy = $1, u.intersectionWith = e0, u.invert = Tv, u.invertBy = vv, u.invokeMap = nT, u.iteratee = tl, u.keyBy = rT, u.keys = Me, u.keysIn = _e, u.map = Xi, u.mapKeys = Uv, u.mapValues = Rv, u.matches = mw, u.matchesProperty = Vw, u.memoize = Li, u.merge = Nv, u.mergeWith = Xu, u.method = Tw, u.methodOf = vw, u.mixin = nl, u.negate = qi, u.nthArg = Uw, u.omit = gv, u.omitBy = Mv, u.once = wT, u.orderBy = iT, u.over = Rw, u.overArgs = UT, u.overEvery = Nw, u.overSome = gw, u.partial = Xo, u.partialRight = Qu, u.partition = aT, u.pick = Zv, u.pickBy = _u, u.property = nd, u.propertyOf = Mw, u.pull = i0, u.pullAll = yu, u.pullAllBy = a0, u.pullAllWith = o0, u.pullAt = l0, u.range = Zw, u.rangeRight = Jw, u.rearg = RT, u.reject = sT, u.remove = s0, u.rest = NT, u.reverse = Ho, u.sampleSize = uT, u.set = kv, u.setWith = yv, u.shuffle = dT, u.slice = c0, u.sortBy = pT, u.sortedUniq = V0, u.sortedUniqBy = T0, u.split = qv, u.spread = gT, u.tail = v0, u.take = w0, u.takeRight = U0, u.takeRightWhile = R0, u.takeWhile = N0, u.tap = C0, u.throttle = MT, u.thru = ji, u.toArray = Iu, u.toPairs = Lu, u.toPairsIn = qu, u.toPath = Fw, u.toPlainObject = Pu, u.transform = bv, u.unary = ZT, u.union = g0, u.unionBy = M0, u.unionWith = Z0, u.uniq = J0, u.uniqBy = k0, u.uniqWith = y0, u.unset = Ev, u.unzip = Po, u.unzipWith = bu, u.update = Fv, u.updateWith = Sv, u.values = Ln, u.valuesIn = Wv, u.without = b0, u.words = ed, u.wrap = JT, u.xor = E0, u.xorBy = F0, u.xorWith = S0, u.zip = W0, u.zipObject = A0, u.zipObjectDeep = x0, u.zipWith = B0, u.entries = Lu, u.entriesIn = qu, u.extend = ju, u.extendWith = ea, nl(u, u), u.add = Ww, u.attempt = td, u.camelCase = Cv, u.capitalize = Ku, u.ceil = Aw, u.clamp = Av, u.clone = yT, u.cloneDeep = ET, u.cloneDeepWith = FT, u.cloneWith = bT, u.conformsTo = ST, u.deburr = $u, u.defaultTo = fw, u.divide = xw, u.endsWith = Dv, u.eq = Ut, u.escape = Qv, u.escapeRegExp = Ov, u.every = j0, u.find = _0, u.findIndex = Mu, u.findKey = sv, u.findLast = L0, u.findLastIndex = Zu, u.findLastKey = cv, u.floor = Bw, u.forEach = Fu, u.forEachRight = Su, u.forIn = uv, u.forInRight = dv, u.forOwn = fv, u.forOwnRight = hv, u.get = qo, u.gt = WT, u.gte = AT, u.has = Vv, u.hasIn = Ko, u.head = ku, u.identity = Le, u.includes = tT, u.indexOf = L1, u.inRange = xv, u.invoke = wv, u.isArguments = Nn, u.isArray = I, u.isArrayBuffer = xT, u.isArrayLike = Xe, u.isArrayLikeObject = me, u.isBoolean = BT, u.isBuffer = nn, u.isDate = CT, u.isElement = DT, u.isEmpty = QT, u.isEqual = OT, u.isEqualWith = zT, u.isError = _o, u.isFinite = GT, u.isFunction = Dt, u.isInteger = Ou, u.isLength = Ki, u.isMap = zu, u.isMatch = YT, u.isMatchWith = IT, u.isNaN = HT, u.isNative = PT, u.isNil = XT, u.isNull = jT, u.isNumber = Gu, u.isObject = ue, u.isObjectLike = he, u.isPlainObject = Dr, u.isRegExp = Lo, u.isSafeInteger = _T, u.isSet = Yu, u.isString = $i, u.isSymbol = nt, u.isTypedArray = _n, u.isUndefined = LT, u.isWeakMap = qT, u.isWeakSet = KT, u.join = t0, u.kebabCase = zv, u.last = ht, u.lastIndexOf = n0, u.lowerCase = Gv, u.lowerFirst = Yv, u.lt = $T, u.lte = ev, u.max = Cw, u.maxBy = Dw, u.mean = Qw, u.meanBy = Ow, u.min = zw, u.minBy = Gw, u.stubArray = il, u.stubFalse = al, u.stubObject = kw, u.stubString = yw, u.stubTrue = bw, u.multiply = Yw, u.nth = r0, u.noConflict = ww, u.noop = rl, u.now = _i, u.pad = Iv, u.padEnd = Hv, u.padStart = Pv, u.parseInt = jv, u.random = Bv, u.reduce = oT, u.reduceRight = lT, u.repeat = Xv, u.replace = _v, u.result = Jv, u.round = Iw, u.runInContext = v, u.sample = cT, u.size = fT, u.snakeCase = Lv, u.some = hT, u.sortedIndex = u0, u.sortedIndexBy = d0, u.sortedIndexOf = f0, u.sortedLastIndex = h0, u.sortedLastIndexBy = p0, u.sortedLastIndexOf = m0, u.startCase = Kv, u.startsWith = $v, u.subtract = Hw, u.sum = Pw, u.sumBy = jw, u.template = ew, u.times = Ew, u.toFinite = Qt, u.toInteger = P, u.toLength = Hu, u.toLower = tw, u.toNumber = pt, u.toSafeInteger = tv, u.toString = ne, u.toUpper = nw, u.trim = rw, u.trimEnd = iw, u.trimStart = aw, u.truncate = ow, u.unescape = lw, u.uniqueId = Sw, u.upperCase = sw, u.upperFirst = $o, u.each = Fu, u.eachRight = Su, u.first = ku, nl(u, function() {
        var e = {};
        return Jt(u, function(t, i) {
          re.call(u.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = l, st(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), st(["drop", "take"], function(e, t) {
        K.prototype[e] = function(i) {
          i = i === r ? 1 : Ne(P(i), 0);
          var o = this.__filtered__ && !t ? new K(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = xe(i, o.__takeCount__) : o.__views__.push({
            size: xe(i, Zt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, K.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), st(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, o = i == we || i == ke;
        K.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: O(c, 3),
            type: i
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), st(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        K.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), st(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        K.prototype[e] = function() {
          return this.__filtered__ ? new K(this) : this[i](1);
        };
      }), K.prototype.compact = function() {
        return this.filter(Le);
      }, K.prototype.find = function(e) {
        return this.filter(e).head();
      }, K.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, K.prototype.invokeMap = X(function(e, t) {
        return typeof e == "function" ? new K(this) : this.map(function(i) {
          return Sr(i, e, t);
        });
      }), K.prototype.reject = function(e) {
        return this.filter(qi(O(e)));
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
            var ee = c.apply(u, _t([q], V));
            return o && E ? ee[0] : ee;
          };
          Z && i && typeof M == "function" && M.length != 1 && (w = Z = !1);
          var E = this.__chain__, x = !!this.__actions__.length, z = d && !E, j = w && !x;
          if (!d && Z) {
            m = j ? m : new K(this);
            var G = e.apply(m, V);
            return G.__actions__.push({ func: ji, args: [J], thisArg: r }), new ut(G, E);
          }
          return z && j ? e.apply(this, V) : (G = this.thru(J), z ? o ? G.value()[0] : G.value() : G);
        });
      }), st(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = wi[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
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
          re.call(In, o) || (In[o] = []), In[o].push({ name: t, func: i });
        }
      }), In[Oi(r, A).name] = [{
        name: "wrapper",
        func: r
      }], K.prototype.clone = lV, K.prototype.reverse = sV, K.prototype.value = cV, u.prototype.at = D0, u.prototype.chain = Q0, u.prototype.commit = O0, u.prototype.next = z0, u.prototype.plant = Y0, u.prototype.reverse = I0, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = H0, u.prototype.first = u.prototype.head, Zr && (u.prototype[Zr] = G0), u;
    }, zn = Om();
    pn ? ((pn.exports = zn)._ = zn, eo._ = zn) : be._ = zn;
  }).call(Qr);
})(qe, qe.exports);
const UR = window.Pinia.defineStore, RR = UR("situationsStore", {
  state: () => ({
    situations: []
  }),
  actions: {
    async getSituations() {
      this.situations = [];
      const n = await wR();
      if (n) {
        const a = qe.exports.groupBy(n, "status"), r = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = r;
      }
    }
  }
}), NR = window.Vue.defineComponent, gR = window.Vue.unref, MR = window.Vue.renderList, ZR = window.Vue.Fragment, Rl = window.Vue.openBlock, Nl = window.Vue.createElementBlock, JR = window.Vue.toDisplayString, kR = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const yR = { class: "alarms-list" }, bR = /* @__PURE__ */ NR({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(n) {
    const a = n;
    return (r, l) => (Rl(), Nl("div", yR, [
      (Rl(!0), Nl(ZR, null, MR(gR(qe.exports.groupBy)(a == null ? void 0 : a.alarms, "severity"), (s, f) => (Rl(), Nl("div", {
        class: kR(["alarm-count", [`${f.toString().toLowerCase()}-color`, a.size]]),
        key: f
      }, JR(s.length), 3))), 128))
    ]));
  }
});
const wh = /* @__PURE__ */ Qe(bR, [["__scopeId", "data-v-950fe87b"]]), ER = window.Vue.openBlock, FR = window.Vue.createElementBlock, SR = window.Vue.createElementVNode;
var WR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const AR = {}, xR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, BR = /* @__PURE__ */ SR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), CR = [
  BR
];
function DR(n, a) {
  return ER(), FR("svg", xR, CR);
}
var Uh = /* @__PURE__ */ WR(AR, [["render", DR]]);
var QR = Object.defineProperty, kd = Object.getOwnPropertySymbols, OR = Object.prototype.hasOwnProperty, zR = Object.prototype.propertyIsEnumerable, yd = (n, a, r) => a in n ? QR(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, bd = (n, a) => {
  for (var r in a || (a = {}))
    OR.call(a, r) && yd(n, r, a[r]);
  if (kd)
    for (var r of kd(a))
      zR.call(a, r) && yd(n, r, a[r]);
  return n;
};
const GR = window.Vue.defineComponent, YR = window.Vue.toRaw, gl = window.Vue.h;
var IR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const HR = {
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
}, PR = GR({
  props: HR,
  render() {
    const n = this.$attrs, a = n.class ? n.class.split(" ").reduce((s, f) => (s[f] = !0, s), {}) : {}, r = {};
    a["feather-icon"] = !0, this.flex && (a["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let l = YR(this.icon);
    return this.$slots.default ? gl("span", { class: "feather-icon-container" }, [
      gl(this.$slots.default()[0], bd({
        class: a
      }, r))
    ]) : gl(l, bd({
      class: a
    }, r));
  }
});
var He = /* @__PURE__ */ IR(PR, [["__scopeId", "data-v-52cbf270"]]);
const jR = window.Vue.openBlock, XR = window.Vue.createElementBlock, _R = window.Vue.createElementVNode;
var LR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const qR = {}, KR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $R = /* @__PURE__ */ _R("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), eN = [
  $R
];
function tN(n, a) {
  return jR(), XR("svg", KR, eN);
}
var Rh = /* @__PURE__ */ LR(qR, [["render", tN]]);
const nN = window.Vue.defineComponent, gn = window.Vue.unref, Ed = window.Vue.normalizeClass, ta = window.Vue.createElementVNode, rN = window.Vue.toDisplayString, Ml = window.Vue.createVNode, Zl = window.Vue.openBlock, Jl = window.Vue.createElementBlock, Fd = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iN = { class: "content" }, aN = { class: "title-row" }, oN = { class: "title" }, lN = {
  key: 0,
  class: "accepted"
}, sN = {
  key: 1,
  class: "rejected"
}, cN = /* @__PURE__ */ nN({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(n, { emit: a }) {
    const r = n, l = gt.ACCEPTED, s = gt.REJECTED, f = () => {
      var h;
      a("situation-selected", (h = r.situationInfo) == null ? void 0 : h.id);
    };
    return (h, p) => {
      var T, N, g, k;
      return Zl(), Jl("div", {
        onClick: f,
        class: Ed(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == gn(s)
        }])
      }, [
        ta("div", {
          class: Ed(["severity-line", [`${(N = (T = r.situationInfo) == null ? void 0 : T.severity) == null ? void 0 : N.toLowerCase()}-bg dark`]])
        }, null, 2),
        ta("div", iN, [
          ta("div", aN, [
            ta("div", oN, "[ " + rN((g = r.situationInfo) == null ? void 0 : g.id) + " ]", 1),
            r.situationInfo.status == gn(l) ? (Zl(), Jl("div", lN, [
              Ml(gn(He), {
                icon: gn(Uh),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Fd("", !0),
            r.situationInfo.status == gn(s) ? (Zl(), Jl("div", sN, [
              Ml(gn(He), {
                icon: gn(Rh),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Fd("", !0)
          ]),
          Ml(wh, {
            alarms: (k = r.situationInfo) == null ? void 0 : k.alarms,
            size: "normal"
          }, null, 8, ["alarms"])
        ])
      ], 2);
    };
  }
});
const uN = /* @__PURE__ */ Qe(cN, [["__scopeId", "data-v-e39a68f4"]]);
const na = window.Vue.ref, dN = window.Vue.inject, fN = window.Vue.computed, hN = window.Vue.onMounted, pN = {
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
}, mN = (n) => {
  const a = na(!1), r = na(), l = na(n.controls), s = na(n.id), f = () => {
    r.value && r.value.focus();
  }, h = dN("registerTab");
  hN(() => {
    if (r.value && h) {
      const T = r.value.parentElement, N = T && T.parentElement ? T.parentElement : void 0, g = Array.from(N ? N.children : []).filter((b) => b.querySelectorAll("[role=tab]").length), k = T ? g.indexOf(T) : -1;
      h({
        el: r.value,
        focus: f,
        disabled: n.disabled,
        selected: a,
        id: s,
        controls: l,
        index: k
      });
    }
  });
  const p = fN(() => ({
    role: "tab",
    ref: "tab",
    tabindex: a.value ? 0 : -1,
    id: s.value,
    "aria-selected": a.value,
    "aria-controls": l.value,
    "aria-disabled": n.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: a,
    attrs: p,
    tab: r
  };
};
const Ra = function(n, a) {
  return window ? window.setTimeout(n, a) : setTimeout(n, a);
}, Na = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var VN = Object.defineProperty, TN = Object.defineProperties, vN = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, wN = Object.prototype.hasOwnProperty, UN = Object.prototype.propertyIsEnumerable, Wd = (n, a, r) => a in n ? VN(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ad = (n, a) => {
  for (var r in a || (a = {}))
    wN.call(a, r) && Wd(n, r, a[r]);
  if (Sd)
    for (var r of Sd(a))
      UN.call(a, r) && Wd(n, r, a[r]);
  return n;
}, RN = (n, a) => TN(n, vN(a));
const NN = window.Vue.defineComponent, gN = window.Vue.h;
var MN = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const ZN = {
  center: {
    type: Boolean,
    default: !1
  }
}, JN = NN({
  props: ZN,
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
        const { clientWidth: a, clientHeight: r } = this.parent, l = Math.round(Math.max(a, r));
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const f = this.parent.getBoundingClientRect(), h = n.pageY, p = n.pageX;
          s = {
            top: `${h - f.top - l / 2 - document.documentElement.scrollTop}px`,
            left: `${p - f.left - l / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = RN(Ad({}, s), {
          height: `${l}px`,
          width: `${l}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Na(this.failsafe), this.failsafe = Ra(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return gN("div", {
        style: Ad({}, this.styles),
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
var Fn = /* @__PURE__ */ MN(JN, [["__scopeId", "data-v-18e2a5db"]]);
const ve = function(n) {
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
}, xd = window.Vue.ref, kN = window.Vue.toRef, yN = window.Vue.watch, Bd = window.Vue.provide, bN = {
  prop: "modelValue",
  event: "update:modelValue"
}, EN = {
  "update:modelValue": (n) => !0
}, FN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, SN = (n, a) => {
  const r = kN(n, "modelValue"), l = xd(n.modelValue), s = xd([]);
  yN(r, (F) => {
    T(F);
  });
  const f = (F) => {
    F.preventDefault(), s.value.some((C, D) => C.tab && C.tab.el.contains(F.target) ? (p(D), T(D), !0) : !1);
  }, h = (F) => {
    if (((L) => L.shiftKey || L.ctrlKey || L.metaKey || L.altKey)(F))
      return;
    const D = F.keyCode, A = (L) => {
      L.stopPropagation(), L.preventDefault();
    }, Q = s.value.filter((L) => L.tab && !L.tab.disabled), W = s.value.findIndex((L) => L.tab && L.tab.el.contains(document.activeElement));
    let H = W !== -1 ? W : l.value;
    const y = [ge.RIGHT], _ = [ge.LEFT], $ = [ge.ENTER, ge.SPACE];
    n.vertical && (y.push(ge.DOWN), _.push(ge.UP)), y.indexOf(D) > -1 ? (H++, H >= Q.length && (H = 0), A(F), p(s.value.indexOf(Q[H]))) : _.indexOf(D) > -1 && (H--, H < 0 && (H = Q.length - 1), A(F), p(s.value.indexOf(Q[H]))), $.indexOf(D) > -1 && T(H);
  }, p = (F) => {
    s.value.forEach(function(C, D) {
      F === D && C.tab && C.tab.focus();
    });
  }, T = (F) => {
    const C = s.value[F];
    !C || C.tab && C.tab.disabled || (s.value.forEach((D, A) => {
      D.tab && (D.tab.selected = F === A), D.panel && (D.panel.selected = F === A);
    }), l.value = F, a.emit("update:modelValue", F));
  };
  Bd("registerTab", (F) => {
    const C = F.index;
    C > -1 && (s.value[C] = { ...s.value[C], tab: F }, s.value = [...s.value], k());
  }), Bd("registerPanel", (F) => {
    const C = F.index;
    C > -1 && (s.value[C] = {
      ...s.value[C],
      panel: F
    }, s.value = [...s.value], k());
  });
  const k = () => {
    s.value.forEach(({ tab: F, panel: C }, D) => {
      if (C && F) {
        const A = F.id || ve("tab"), Q = F.controls || ve("panel");
        F.controls = Q, F.id = A, C.tab = A, C.id = Q;
      }
      D === l.value && (C && (C.selected = !0), F && (F.selected = !0));
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
    selected: l,
    pairs: s
  };
}, ra = window.Vue.ref, WN = window.Vue.inject, AN = window.Vue.computed, xN = window.Vue.onMounted, BN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, CN = (n) => {
  const a = ra(!1), r = ra(), l = ra(n.tab), s = ra(n.id), f = WN("registerPanel");
  xN(() => {
    if (f) {
      const p = r.value, T = p && p.parentElement ? p.parentElement : void 0, N = p ? Array.from(T ? T.children : []).indexOf(p) : -1;
      f({
        selected: a,
        id: s,
        tab: l,
        el: r.value,
        index: N
      });
    }
  });
  const h = AN(() => ({
    role: "tabpanel",
    id: s.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": a.value,
    "aria-labelledby": l.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: a,
    attrs: h,
    panel: r
  };
}, us = window.Vue.defineComponent, DN = window.Vue.resolveComponent, ds = window.Vue.openBlock, fs = window.Vue.createElementBlock, _r = window.Vue.createElementVNode, Nh = window.Vue.mergeProps, ga = window.Vue.renderSlot, QN = window.Vue.createVNode, ON = window.Vue.normalizeStyle, zN = window.Vue.toHandlers, GN = window.Vue.withDirectives, YN = window.Vue.normalizeProps, IN = window.Vue.guardReactiveProps, HN = window.Vue.vShow;
var hs = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const PN = pN, jN = us({
  props: PN,
  setup(n) {
    return mN(n);
  },
  components: {
    FeatherRipple: Fn
  }
}), XN = { role: "presentation" }, _N = { class: "tab-text" };
function LN(n, a, r, l, s, f) {
  const h = DN("FeatherRipple");
  return ds(), fs("li", XN, [
    _r("button", Nh(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      _r("span", _N, [
        ga(n.$slots, "default", {}, void 0, !0)
      ]),
      QN(h)
    ], 16)
  ]);
}
var Cd = /* @__PURE__ */ hs(jN, [["render", LN], ["__scopeId", "data-v-e6bb52b6"]]);
const qN = FN, KN = EN, $N = us({
  model: bN,
  emits: KN,
  props: qN,
  setup(n, a) {
    return SN(n, a);
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
        const n = this.$el.getBoundingClientRect(), a = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = a.left - n.left, l = a.height - 2;
        this.width = `${a.width}px`, this.transform = `translateX(${r}px) translateY(${l}px)`;
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
}), eg = { class: "feather-tab-container" }, tg = { class: "tab-panels" };
function ng(n, a, r, l, s, f) {
  return ds(), fs("div", eg, [
    _r("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: ON({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    _r("ul", Nh(n.attrs, zN(n.listeners)), [
      ga(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    _r("div", tg, [
      ga(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var rg = /* @__PURE__ */ hs($N, [["render", ng], ["__scopeId", "data-v-27adffb9"]]);
const ig = BN, ag = us({
  props: ig,
  setup(n) {
    return CN(n);
  }
});
function og(n, a, r, l, s, f) {
  return GN((ds(), fs("div", YN(IN(n.attrs)), [
    ga(n.$slots, "default")
  ], 16)), [
    [HN, n.selected]
  ]);
}
var Dd = /* @__PURE__ */ hs(ag, [["render", og]]);
const lg = window.Vue.defineComponent, sg = window.Vue.toDisplayString, cg = window.Vue.normalizeClass, ug = window.Vue.openBlock, dg = window.Vue.createElementBlock, fg = window.Vue.createCommentVNode, hg = /* @__PURE__ */ lg({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, l) => a != null && a.severity ? (ug(), dg("span", {
      key: 0,
      class: cg(["severity-status", [`${a.severity.toLowerCase()}-color`]])
    }, sg(a.severity), 3)) : fg("", !0);
  }
});
const gh = /* @__PURE__ */ Qe(hg, [["__scopeId", "data-v-83c2cdce"]]), pg = window.Vue.defineComponent, Qd = window.Vue.toDisplayString, Od = window.Vue.createElementVNode, mg = window.Vue.openBlock, Vg = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Tg = { class: "box" }, vg = { class: "label" }, wg = { class: "date" }, Ug = /* @__PURE__ */ pg({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(n) {
    const a = n;
    return (r, l) => (mg(), Vg("div", Tg, [
      Od("div", vg, Qd(a.label), 1),
      Od("div", wg, Qd(a.info), 1)
    ]));
  }
});
const kl = /* @__PURE__ */ Qe(Ug, [["__scopeId", "data-v-b4afa751"]]);
const Rg = window.Vue.computed, Ng = (n, a) => {
  const r = {};
  return Object.keys(a).forEach((l) => {
    r[`${l}Label`] = Rg(() => n.value[l] ? n.value[l] : a[l]);
  }), r;
}, gg = window.Vue.openBlock, Mg = window.Vue.createElementBlock, Zg = window.Vue.createElementVNode;
var Jg = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const kg = {}, yg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bg = /* @__PURE__ */ Zg("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Eg = [
  bg
];
function Fg(n, a) {
  return gg(), Mg("svg", yg, Eg);
}
var Mh = /* @__PURE__ */ Jg(kg, [["render", Fg]]);
const zd = window.Vue.computed, Sg = (n, a, r) => {
  const l = zd(() => a.value.filter((f) => !f.disabled)), s = zd(() => n.value ? l.value.indexOf(n.value) : -1);
  return {
    selectPrevious() {
      n.value && n.value.disabled || (s.value === 0 ? r(l.value[l.value.length - 1]) : r(l.value[s.value - 1]));
    },
    selectNext() {
      n.value && n.value.disabled || (s.value === l.value.length - 1 ? r(l.value[0]) : r(l.value[s.value + 1]));
    }
  };
};
const Wg = window.Vue.openBlock, Ag = window.Vue.createElementBlock, ps = window.Vue.createElementVNode;
var xg = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Bg = {}, Cg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Dg = /* @__PURE__ */ ps("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Qg = /* @__PURE__ */ ps("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Og = /* @__PURE__ */ ps("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), zg = [
  Dg,
  Qg,
  Og
];
function Gg(n, a) {
  return Wg(), Ag("svg", Cg, zg);
}
var Yg = /* @__PURE__ */ xg(Bg, [["render", Gg]]), Ig = Object.defineProperty, Hg = Object.defineProperties, Pg = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, jg = Object.prototype.hasOwnProperty, Xg = Object.prototype.propertyIsEnumerable, Yd = (n, a, r) => a in n ? Ig(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Zh = (n, a) => {
  for (var r in a || (a = {}))
    jg.call(a, r) && Yd(n, r, a[r]);
  if (Gd)
    for (var r of Gd(a))
      Xg.call(a, r) && Yd(n, r, a[r]);
  return n;
}, Jh = (n, a) => Hg(n, Pg(a));
const mr = window.Vue.defineComponent, ei = window.Vue.resolveComponent, bt = window.Vue.openBlock, lr = window.Vue.createElementBlock, _g = window.Vue.createVNode, Ma = window.Vue.createBlock, Lg = window.Vue.withModifiers, fr = window.Vue.inject, ti = window.Vue.computed, qg = window.Vue.normalizeClass, $n = window.Vue.createElementVNode, Za = window.Vue.toDisplayString, ma = window.Vue.renderSlot, Lr = window.Vue.createCommentVNode, Kg = window.Vue.withDirectives, $g = window.Vue.vShow, Il = window.Vue.ref, Id = window.Vue.toRef, Hd = window.Vue.nextTick, Hl = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ms = window.Vue.provide, Pd = window.Vue.isRef, eM = window.Vue.onBeforeUnmount;
var ii = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const tM = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, nM = mr({
  props: tM,
  components: {
    FeatherIcon: He
  }
}), rM = ["title"];
function iM(n, a, r, l, s, f) {
  const h = ei("FeatherIcon");
  return bt(), lr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    _g(h, { icon: n.icon }, null, 8, ["icon"])
  ], 8, rM);
}
var aM = /* @__PURE__ */ ii(nM, [["render", iM], ["__scopeId", "data-v-4265058e"]]);
const oM = mr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Mh;
    }
  },
  components: {
    ActionIcon: aM
  }
});
function lM(n, a, r, l, s, f) {
  const h = ei("ActionIcon");
  return bt(), Ma(h, {
    onClick: a[0] || (a[0] = Lg((p) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var sM = /* @__PURE__ */ ii(oM, [["render", lM]]);
const cM = mr({
  computed: {
    errorIcon() {
      return Yg;
    }
  },
  components: {
    FeatherIcon: He
  }
});
function uM(n, a, r, l, s, f) {
  const h = ei("FeatherIcon");
  return bt(), Ma(h, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var dM = /* @__PURE__ */ ii(cM, [["render", uM], ["__scopeId", "data-v-0b8faef3"]]);
const fM = {
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
}, hM = {
  clear: () => !0,
  "wrapper-click": (n) => !0
}, pM = mr({
  emits: hM,
  props: fM,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = fr("wrapperOptions", {}), a = fr("validationErrorMessage", !1), r = ti(() => n.error ? n.error : a && a.value ? a.value : !1);
    return Jh(Zh({}, n), { error: r });
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
        const l = this.$el.querySelector(".prefix");
        this.prefixWidth = l ? l.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(n, a), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: sM,
    ErrorIcon: dM
  }
}), mM = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, VM = ["for"], TM = { class: "prefix" }, vM = { class: "post" };
function wM(n, a, r, l, s, f) {
  const h = ei("ClearIcon"), p = ei("ErrorIcon");
  return bt(), lr("div", {
    class: qg(["feather-input-wrapper-container", n.containerCls])
  }, [
    $n("fieldset", mM, [
      $n("legend", null, Za(n.label), 1)
    ]),
    $n("label", {
      class: "feather-input-label",
      for: n.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Za(n.label), 9, VM),
    $n("div", {
      class: "feather-input-wrapper",
      onClick: a[1] || (a[1] = (...T) => n.handleWrapperClick && n.handleWrapperClick(...T))
    }, [
      $n("div", TM, [
        ma(n.$slots, "pre", {}, void 0, !0)
      ]),
      ma(n.$slots, "default", {}, void 0, !0),
      $n("div", vM, [
        n.showClear && n.computedClearText ? (bt(), Ma(h, {
          key: 0,
          clear: n.computedClearText,
          onClear: a[0] || (a[0] = (T) => n.$emit("clear"))
        }, null, 8, ["clear"])) : Lr("", !0),
        n.error ? (bt(), Ma(p, { key: 1 })) : Lr("", !0),
        ma(n.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var UM = /* @__PURE__ */ ii(pM, [["render", wM], ["__scopeId", "data-v-4db296db"]]);
const RM = mr({
  setup() {
    const n = fr("subTextOptions", {}), a = fr("validationErrorMessage", !1), r = ti(() => n.error ? n.error : a && a.value ? a.value : "");
    return Jh(Zh({}, n), { error: r });
  }
}), NM = { class: "feather-input-sub-text" }, gM = {
  key: 0,
  class: "feather-input-spacer"
}, MM = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, ZM = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function JM(n, a, r, l, s, f) {
  return Kg((bt(), lr("div", NM, [
    !n.hint && !n.error.length ? (bt(), lr("div", gM, "\xA0")) : Lr("", !0),
    n.hint && !n.error.length ? (bt(), lr("div", MM, Za(n.hint), 1)) : Lr("", !0),
    n.error.length > 0 ? (bt(), lr("div", ZM, Za(n.error), 1)) : Lr("", !0),
    ma(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [$g, !n.inline || n.hint || n.error.length]
  ]);
}
var Vs = /* @__PURE__ */ ii(RM, [["render", JM], ["__scopeId", "data-v-8e0ac99e"]]);
const kM = {
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
mr({
  props: kM,
  setup(n) {
    const a = fr("featherFormErrors", Il([])), r = Id(n, "errorList"), l = ti(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : a.value;
    }), s = Id(n, "generalError"), f = (g) => {
      document.getElementById(g).focus();
    }, h = (g) => g.replace(/ \*$/, ""), p = Il(), T = (g) => `${h(g.label)} - ${g.message}`, N = ti(() => (l.value.length && Hd(() => p.value.focus()), n.headingText(l.value)));
    return Hl(s, (g) => {
      g.length && Hd(() => p.value.focus());
    }), {
      errors: l,
      errorsHeading: N,
      heading: p,
      focusElement: f,
      mainError: s,
      getFullMessage: T
    };
  }
});
const Ts = (n, a, r, l, s) => {
  const f = fr("featherForm", !1);
  if (l && f && n.value) {
    const h = Il("");
    ms("validationErrorMessage", h);
    const p = () => {
      if (s && Pd(s) && s.value)
        return h.value = s.value, {
          success: !1,
          message: s.value,
          inputId: n.value,
          label: r
        };
      try {
        return l.validateSync(a.value), h.value = "", { success: !0 };
      } catch (g) {
        const k = g;
        return h.value = k.errors[0], {
          success: !1,
          message: k.errors[0],
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
    return s && Pd(s) && Hl(s, () => {
      f.runValidation();
    }), Hl(n, (g, k) => {
      g && f && f.register(g, N), k && f && f.deregister(k);
    }, { immediate: !0 }), eM(() => {
      f.deregister(n.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, vs = (n) => ({
  inherittedAttrs: ti(() => ({
    class: n.class,
    "data-ref-id": n["data-ref-id"]
  }))
}), ws = {
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
}, Us = (n) => {
  ms("subTextOptions", n);
}, yM = {
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
}, bM = (n) => {
  ms("wrapperOptions", n);
}, ia = window.Vue.ref, EM = window.Vue.watch, FM = window.Vue.watchEffect, jd = window.Vue.computed, yl = window.Vue.provide, kh = (n, a, r, l, s) => {
  const f = ia([]), h = ia(), p = ia(), T = ia();
  FM(() => {
    if (!f.value.length)
      return;
    const A = f.value.map((Q) => Q.value);
    if (n.value !== void 0 && n.value !== null && (h.value = f.value[A.indexOf(n.value)]), !h.value && f.value.length) {
      let Q = f.value.filter((W) => !W.disabled);
      Q = Q.length ? Q : f.value, p.value = Q[0], p.value.first = !0;
    }
  }), EM(h, (A, Q) => {
    Q && (Q.checked = !1), A && (A.checked = !0);
  });
  const N = (A) => {
    A && A.disabled || (p.value && (p.value.first = !1), h.value !== A && (a("update:modelValue", A.value), h.value = A, A.focus()));
  }, g = jd(() => h.value || p.value), k = Sg(g, f, N), b = jd(() => ve("feather-radio-group"));
  T.value = b.value;
  const { validate: B } = Ts(T, n, r, l, s);
  return yl("register", (A) => {
    f.value = [...f.value, A], T.value === b.value && (T.value = A.id);
  }), yl("select", N), yl("blur", (A) => {
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
          k.selectNext();
          break;
        case 37:
        case 38:
          k.selectPrevious();
          break;
      }
    },
    ...k,
    focus: () => {
      h.value && h.value.focus();
    },
    validate: B,
    firstElementId: T,
    groupId: b
  };
};
var SM = Object.defineProperty, WM = Object.defineProperties, AM = Object.getOwnPropertyDescriptors, Xd = Object.getOwnPropertySymbols, xM = Object.prototype.hasOwnProperty, BM = Object.prototype.propertyIsEnumerable, _d = (n, a, r) => a in n ? SM(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, cr = (n, a) => {
  for (var r in a || (a = {}))
    xM.call(a, r) && _d(n, r, a[r]);
  if (Xd)
    for (var r of Xd(a))
      BM.call(a, r) && _d(n, r, a[r]);
  return n;
}, yh = (n, a) => WM(n, AM(a));
const fn = window.Vue.defineComponent, qr = window.Vue.inject, Ja = window.Vue.computed, Kr = window.Vue.ref, mt = window.Vue.resolveComponent, ot = window.Vue.openBlock, ai = window.Vue.createElementBlock, bh = window.Vue.normalizeClass, Et = window.Vue.renderSlot, cn = window.Vue.createBlock, ni = window.Vue.createCommentVNode, ka = window.Vue.createElementVNode, CM = window.Vue.withModifiers, Ca = window.Vue.createVNode, Eh = window.Vue.toRef, Pl = window.Vue.mergeProps, jt = window.Vue.withCtx, DM = window.Vue.h, QM = window.Vue.provide;
var hn = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const OM = {
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
}, zM = fn({
  props: OM,
  setup(n) {
    const a = qr("isCondensed", null), r = Ja(() => a || n.condensed), l = Kr(!1);
    return {
      focused: l,
      handleFocus: () => {
        l.value = !0;
      },
      handleBlur: () => {
        l.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: Fn
  }
}), GM = ["aria-disabled"];
function YM(n, a, r, l, s, f) {
  const h = mt("FeatherRipple");
  return ot(), ai("div", {
    class: bh(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: a[0] || (a[0] = (p) => n.clickable ? n.handleFocus : null),
    onFocusout: a[1] || (a[1] = (p) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    Et(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (ot(), cn(h, { key: 0 })) : ni("", !0)
  ], 42, GM);
}
var Rs = /* @__PURE__ */ hn(zM, [["render", YM], ["__scopeId", "data-v-44d413dc"]]);
const IM = {
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
}, HM = fn({
  emits: ["delete"],
  props: IM,
  setup(n, a) {
    return {
      handleDelete: () => {
        n.disabled || a.emit("delete");
      },
      icon: Mh
    };
  },
  components: {
    FeatherIcon: He
  }
}), PM = { class: "chip-delete" }, jM = ["aria-label", "aria-describedby"];
function XM(n, a, r, l, s, f) {
  const h = mt("FeatherIcon");
  return ot(), ai("span", PM, [
    ka("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: a[0] || (a[0] = CM((...p) => n.handleDelete && n.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      Ca(h, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, jM)
  ]);
}
var _M = /* @__PURE__ */ hn(HM, [["render", XM], ["__scopeId", "data-v-4bae6cb4"]]);
const LM = fn({
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
}), qM = ["title"];
function KM(n, a, r, l, s, f) {
  return ot(), ai("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 8, qM);
}
var Ns = /* @__PURE__ */ hn(LM, [["render", KM], ["__scopeId", "data-v-1a0445b2"]]);
const $M = {}, eZ = {
  class: "chip-icon",
  role: "presentation"
};
function tZ(n, a) {
  return ot(), ai("span", eZ, [
    Et(n.$slots, "default", {}, void 0, !0)
  ]);
}
var gs = /* @__PURE__ */ hn($M, [["render", tZ], ["__scopeId", "data-v-2230176f"]]);
const Ld = {
  delete: "Remove"
}, nZ = fn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Ld
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(n, a) {
    const r = Ng(Eh(n, "labels"), Ld), l = Ja(() => ve("chip-text")), s = () => {
      n.disabled || a.emit("click");
    }, f = cr({}, a.attrs);
    return n.disabled && delete f.onClick, yh(cr({}, r), {
      chipTextId: l,
      handleClick: s,
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
    Chip: Rs,
    DeleteIcon: _M,
    Label: Ns,
    PreIcon: gs
  }
}), rZ = ["aria-disabled"];
function iZ(n, a, r, l, s, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("DeleteIcon"), N = mt("Chip");
  return ot(), cn(N, Pl(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: jt(() => [
      ka("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        ka("span", Pl(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (ot(), cn(h, { key: 0 }, {
            default: jt(() => [
              Et(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ni("", !0),
          Ca(p, { id: n.chipTextId }, {
            default: jt(() => [
              Et(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, rZ),
      n.canDelete ? (ot(), cn(T, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: a[0] || (a[0] = (g) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ni("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var aZ = /* @__PURE__ */ hn(nZ, [["render", iZ], ["__scopeId", "data-v-48b2704a"]]);
const oZ = fn({
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
    Chip: Rs,
    Label: Ns,
    PreIcon: gs
  }
}), lZ = ["aria-disabled"];
function sZ(n, a, r, l, s, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("Chip");
  return ot(), cn(T, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: jt(() => [
      ka("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (ot(), cn(h, { key: 0 }, {
          default: jt(() => [
            Et(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ni("", !0),
        Ca(p, null, {
          default: jt(() => [
            Et(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, lZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var cZ = /* @__PURE__ */ hn(oZ, [["render", sZ], ["__scopeId", "data-v-3e0c4eba"]]);
const uZ = fn({
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
    const a = Kr(!1), r = Kr(!1), l = Ja(() => ve("chip-label-id")), s = Ja(() => a.value || r.value ? 0 : -1), f = Kr(), h = () => {
      f.value.$el.focus();
    }, p = qr("register", (b) => {
    }), T = qr("blur", (b) => {
    }), N = qr("select", (b) => {
    }), g = {
      first: a,
      focus: h,
      disabled: n.disabled,
      value: n.value,
      checked: r
    };
    return p(g), {
      labelId: l,
      tabindex: s,
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
    Chip: Rs,
    Label: Ns,
    PreIcon: gs
  }
});
function dZ(n, a, r, l, s, f) {
  const h = mt("PreIcon"), p = mt("Label"), T = mt("Chip");
  return ot(), cn(T, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: bh(["focus hover", { selected: n.checked }]),
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
    default: jt(() => [
      n.hasIcon ? (ot(), cn(h, { key: 0 }, {
        default: jt(() => [
          Et(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ni("", !0),
      Ca(p, { id: n.labelId }, {
        default: jt(() => [
          Et(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var fZ = /* @__PURE__ */ hn(uZ, [["render", dZ], ["__scopeId", "data-v-bbcc2f70"]]);
const hZ = {
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
}, qd = fn({
  props: hZ,
  setup() {
    return { format: qr("chipListFormat", "") };
  },
  render() {
    const n = (a) => DM(a, cr(cr({}, this.$props), this.$attrs), cr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n(aZ) : this.format === "radio" ? n(fZ) : n(cZ);
  }
}), pZ = {
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
}, mZ = fn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: pZ,
  setup(n, a) {
    const r = n.mode === "list" ? "grid" : n.mode;
    QM("chipListFormat", r);
    const l = r === "single";
    if (r === "radio") {
      const h = Eh(n, "modelValue");
      return yh(cr({
        attrs: {
          role: "radiogroup"
        }
      }, kh(h, a.emit, n.label, {}, Kr(""))), {
        single: l
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: l };
  }
}), VZ = ["aria-label"];
function TZ(n, a, r, l, s, f) {
  return ot(), ai("div", Pl(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: a[0] || (a[0] = (...h) => n.keydown && n.keydown(...h))
  }), [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 16, VZ);
}
var vZ = /* @__PURE__ */ hn(mZ, [["render", TZ], ["__scopeId", "data-v-1e06f41d"]]);
function Sn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var a = Number(n);
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
}
function We(n, a) {
  if (a.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + a.length + " present");
}
function De(n) {
  We(1, arguments);
  var a = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && a === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || a === "[object Number]" ? new Date(n) : ((typeof n == "string" || a === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function wZ(n, a) {
  We(2, arguments);
  var r = De(n).getTime(), l = Sn(a);
  return new Date(r + l);
}
var UZ = {};
function oi() {
  return UZ;
}
function jl(n) {
  var a = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return a.setUTCFullYear(n.getFullYear()), n.getTime() - a.getTime();
}
function RZ(n, a) {
  We(2, arguments);
  var r = De(n), l = De(a), s = r.getTime() - l.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function NZ(n) {
  return We(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function gZ(n) {
  if (We(1, arguments), !NZ(n) && typeof n != "number")
    return !1;
  var a = De(n);
  return !isNaN(Number(a));
}
function MZ(n, a) {
  We(2, arguments);
  var r = Sn(a);
  return wZ(n, -r);
}
var ZZ = 864e5;
function JZ(n) {
  We(1, arguments);
  var a = De(n), r = a.getTime();
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  var l = a.getTime(), s = r - l;
  return Math.floor(s / ZZ) + 1;
}
function ya(n) {
  We(1, arguments);
  var a = 1, r = De(n), l = r.getUTCDay(), s = (l < a ? 7 : 0) + l - a;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function Fh(n) {
  We(1, arguments);
  var a = De(n), r = a.getUTCFullYear(), l = new Date(0);
  l.setUTCFullYear(r + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var s = ya(l), f = new Date(0);
  f.setUTCFullYear(r, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var h = ya(f);
  return a.getTime() >= s.getTime() ? r + 1 : a.getTime() >= h.getTime() ? r : r - 1;
}
function kZ(n) {
  We(1, arguments);
  var a = Fh(n), r = new Date(0);
  r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var l = ya(r);
  return l;
}
var yZ = 6048e5;
function bZ(n) {
  We(1, arguments);
  var a = De(n), r = ya(a).getTime() - kZ(a).getTime();
  return Math.round(r / yZ) + 1;
}
function ba(n, a) {
  var r, l, s, f, h, p, T, N;
  We(1, arguments);
  var g = oi(), k = Sn((r = (l = (s = (f = a == null ? void 0 : a.weekStartsOn) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && s !== void 0 ? s : g.weekStartsOn) !== null && l !== void 0 ? l : (T = g.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = De(n), B = b.getUTCDay(), F = (B < k ? 7 : 0) + B - k;
  return b.setUTCDate(b.getUTCDate() - F), b.setUTCHours(0, 0, 0, 0), b;
}
function Sh(n, a) {
  var r, l, s, f, h, p, T, N;
  We(1, arguments);
  var g = De(n), k = g.getUTCFullYear(), b = oi(), B = Sn((r = (l = (s = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : b.firstWeekContainsDate) !== null && l !== void 0 ? l : (T = b.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = new Date(0);
  F.setUTCFullYear(k + 1, 0, B), F.setUTCHours(0, 0, 0, 0);
  var C = ba(F, a), D = new Date(0);
  D.setUTCFullYear(k, 0, B), D.setUTCHours(0, 0, 0, 0);
  var A = ba(D, a);
  return g.getTime() >= C.getTime() ? k + 1 : g.getTime() >= A.getTime() ? k : k - 1;
}
function EZ(n, a) {
  var r, l, s, f, h, p, T, N;
  We(1, arguments);
  var g = oi(), k = Sn((r = (l = (s = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : g.firstWeekContainsDate) !== null && l !== void 0 ? l : (T = g.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Sh(n, a), B = new Date(0);
  B.setUTCFullYear(b, 0, k), B.setUTCHours(0, 0, 0, 0);
  var F = ba(B, a);
  return F;
}
var FZ = 6048e5;
function SZ(n, a) {
  We(1, arguments);
  var r = De(n), l = ba(r, a).getTime() - EZ(r, a).getTime();
  return Math.round(l / FZ) + 1;
}
function ie(n, a) {
  for (var r = n < 0 ? "-" : "", l = Math.abs(n).toString(); l.length < a; )
    l = "0" + l;
  return r + l;
}
var WZ = {
  y: function(n, a) {
    var r = n.getUTCFullYear(), l = r > 0 ? r : 1 - r;
    return ie(a === "yy" ? l % 100 : l, a.length);
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
    var r = a.length, l = n.getUTCMilliseconds(), s = Math.floor(l * Math.pow(10, r - 3));
    return ie(s, a.length);
  }
};
const rn = WZ;
var er = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, AZ = {
  G: function(n, a, r) {
    var l = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(l, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(l, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(l, {
          width: "wide"
        });
    }
  },
  y: function(n, a, r) {
    if (a === "yo") {
      var l = n.getUTCFullYear(), s = l > 0 ? l : 1 - l;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return rn.y(n, a);
  },
  Y: function(n, a, r, l) {
    var s = Sh(n, l), f = s > 0 ? s : 1 - s;
    if (a === "YY") {
      var h = f % 100;
      return ie(h, 2);
    }
    return a === "Yo" ? r.ordinalNumber(f, {
      unit: "year"
    }) : ie(f, a.length);
  },
  R: function(n, a) {
    var r = Fh(n);
    return ie(r, a.length);
  },
  u: function(n, a) {
    var r = n.getUTCFullYear();
    return ie(r, a.length);
  },
  Q: function(n, a, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(l);
      case "QQ":
        return ie(l, 2);
      case "Qo":
        return r.ordinalNumber(l, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(l, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(n, a, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(l);
      case "qq":
        return ie(l, 2);
      case "qo":
        return r.ordinalNumber(l, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(l, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(n, a, r) {
    var l = n.getUTCMonth();
    switch (a) {
      case "M":
      case "MM":
        return rn.M(n, a);
      case "Mo":
        return r.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(l, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(n, a, r) {
    var l = n.getUTCMonth();
    switch (a) {
      case "L":
        return String(l + 1);
      case "LL":
        return ie(l + 1, 2);
      case "Lo":
        return r.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(l, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(n, a, r, l) {
    var s = SZ(n, l);
    return a === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ie(s, a.length);
  },
  I: function(n, a, r) {
    var l = bZ(n);
    return a === "Io" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ie(l, a.length);
  },
  d: function(n, a, r) {
    return a === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : rn.d(n, a);
  },
  D: function(n, a, r) {
    var l = JZ(n);
    return a === "Do" ? r.ordinalNumber(l, {
      unit: "dayOfYear"
    }) : ie(l, a.length);
  },
  E: function(n, a, r) {
    var l = n.getUTCDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(n, a, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
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
  c: function(n, a, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
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
  i: function(n, a, r) {
    var l = n.getUTCDay(), s = l === 0 ? 7 : l;
    switch (a) {
      case "i":
        return String(s);
      case "ii":
        return ie(s, a.length);
      case "io":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "iii":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(n, a, r) {
    var l = n.getUTCHours(), s = l / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  b: function(n, a, r) {
    var l = n.getUTCHours(), s;
    switch (l === 12 ? s = er.noon : l === 0 ? s = er.midnight : s = l / 12 >= 1 ? "pm" : "am", a) {
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
  B: function(n, a, r) {
    var l = n.getUTCHours(), s;
    switch (l >= 17 ? s = er.evening : l >= 12 ? s = er.afternoon : l >= 4 ? s = er.morning : s = er.night, a) {
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
  h: function(n, a, r) {
    if (a === "ho") {
      var l = n.getUTCHours() % 12;
      return l === 0 && (l = 12), r.ordinalNumber(l, {
        unit: "hour"
      });
    }
    return rn.h(n, a);
  },
  H: function(n, a, r) {
    return a === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : rn.H(n, a);
  },
  K: function(n, a, r) {
    var l = n.getUTCHours() % 12;
    return a === "Ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ie(l, a.length);
  },
  k: function(n, a, r) {
    var l = n.getUTCHours();
    return l === 0 && (l = 24), a === "ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ie(l, a.length);
  },
  m: function(n, a, r) {
    return a === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : rn.m(n, a);
  },
  s: function(n, a, r) {
    return a === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : rn.s(n, a);
  },
  S: function(n, a) {
    return rn.S(n, a);
  },
  X: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    if (f === 0)
      return "Z";
    switch (a) {
      case "X":
        return $d(f);
      case "XXXX":
      case "XX":
        return kn(f);
      case "XXXXX":
      case "XXX":
      default:
        return kn(f, ":");
    }
  },
  x: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "x":
        return $d(f);
      case "xxxx":
      case "xx":
        return kn(f);
      case "xxxxx":
      case "xxx":
      default:
        return kn(f, ":");
    }
  },
  O: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Kd(f, ":");
      case "OOOO":
      default:
        return "GMT" + kn(f, ":");
    }
  },
  z: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Kd(f, ":");
      case "zzzz":
      default:
        return "GMT" + kn(f, ":");
    }
  },
  t: function(n, a, r, l) {
    var s = l._originalDate || n, f = Math.floor(s.getTime() / 1e3);
    return ie(f, a.length);
  },
  T: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTime();
    return ie(f, a.length);
  }
};
function Kd(n, a) {
  var r = n > 0 ? "-" : "+", l = Math.abs(n), s = Math.floor(l / 60), f = l % 60;
  if (f === 0)
    return r + String(s);
  var h = a || "";
  return r + String(s) + h + ie(f, 2);
}
function $d(n, a) {
  if (n % 60 === 0) {
    var r = n > 0 ? "-" : "+";
    return r + ie(Math.abs(n) / 60, 2);
  }
  return kn(n, a);
}
function kn(n, a) {
  var r = a || "", l = n > 0 ? "-" : "+", s = Math.abs(n), f = ie(Math.floor(s / 60), 2), h = ie(s % 60, 2);
  return l + f + r + h;
}
const xZ = AZ;
var ef = function(n, a) {
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
}, Wh = function(n, a) {
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
}, BZ = function(n, a) {
  var r = n.match(/(P+)(p+)?/) || [], l = r[1], s = r[2];
  if (!s)
    return ef(n, a);
  var f;
  switch (l) {
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
  return f.replace("{{date}}", ef(l, a)).replace("{{time}}", Wh(s, a));
}, CZ = {
  p: Wh,
  P: BZ
};
const DZ = CZ;
var QZ = ["D", "DD"], OZ = ["YY", "YYYY"];
function zZ(n) {
  return QZ.indexOf(n) !== -1;
}
function GZ(n) {
  return OZ.indexOf(n) !== -1;
}
function tf(n, a, r) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var YZ = {
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
}, IZ = function(n, a, r) {
  var l, s = YZ[n];
  return typeof s == "string" ? l = s : a === 1 ? l = s.one : l = s.other.replace("{{count}}", a.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + l : l + " ago" : l;
};
const HZ = IZ;
function bl(n) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = a.width ? String(a.width) : n.defaultWidth, l = n.formats[r] || n.formats[n.defaultWidth];
    return l;
  };
}
var PZ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jZ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, XZ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, _Z = {
  date: bl({
    formats: PZ,
    defaultWidth: "full"
  }),
  time: bl({
    formats: jZ,
    defaultWidth: "full"
  }),
  dateTime: bl({
    formats: XZ,
    defaultWidth: "full"
  })
};
const LZ = _Z;
var qZ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, KZ = function(n, a, r, l) {
  return qZ[n];
};
const $Z = KZ;
function Or(n) {
  return function(a, r) {
    var l = r != null && r.context ? String(r.context) : "standalone", s;
    if (l === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, h = r != null && r.width ? String(r.width) : f;
      s = n.formattingValues[h] || n.formattingValues[f];
    } else {
      var p = n.defaultWidth, T = r != null && r.width ? String(r.width) : n.defaultWidth;
      s = n.values[T] || n.values[p];
    }
    var N = n.argumentCallback ? n.argumentCallback(a) : a;
    return s[N];
  };
}
var eJ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, tJ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, nJ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, rJ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, iJ = {
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
}, aJ = {
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
}, oJ = function(n, a) {
  var r = Number(n), l = r % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, lJ = {
  ordinalNumber: oJ,
  era: Or({
    values: eJ,
    defaultWidth: "wide"
  }),
  quarter: Or({
    values: tJ,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Or({
    values: nJ,
    defaultWidth: "wide"
  }),
  day: Or({
    values: rJ,
    defaultWidth: "wide"
  }),
  dayPeriod: Or({
    values: iJ,
    defaultWidth: "wide",
    formattingValues: aJ,
    defaultFormattingWidth: "wide"
  })
};
const sJ = lJ;
function zr(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = r.width, s = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], f = a.match(s);
    if (!f)
      return null;
    var h = f[0], p = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], T = Array.isArray(p) ? uJ(p, function(k) {
      return k.test(h);
    }) : cJ(p, function(k) {
      return k.test(h);
    }), N;
    N = n.valueCallback ? n.valueCallback(T) : T, N = r.valueCallback ? r.valueCallback(N) : N;
    var g = a.slice(h.length);
    return {
      value: N,
      rest: g
    };
  };
}
function cJ(n, a) {
  for (var r in n)
    if (n.hasOwnProperty(r) && a(n[r]))
      return r;
}
function uJ(n, a) {
  for (var r = 0; r < n.length; r++)
    if (a(n[r]))
      return r;
}
function dJ(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = a.match(n.matchPattern);
    if (!l)
      return null;
    var s = l[0], f = a.match(n.parsePattern);
    if (!f)
      return null;
    var h = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    h = r.valueCallback ? r.valueCallback(h) : h;
    var p = a.slice(s.length);
    return {
      value: h,
      rest: p
    };
  };
}
var fJ = /^(\d+)(th|st|nd|rd)?/i, hJ = /\d+/i, pJ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, mJ = {
  any: [/^b/i, /^(a|c)/i]
}, VJ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, TJ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vJ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wJ = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, UJ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, RJ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, NJ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gJ = {
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
}, MJ = {
  ordinalNumber: dJ({
    matchPattern: fJ,
    parsePattern: hJ,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: zr({
    matchPatterns: pJ,
    defaultMatchWidth: "wide",
    parsePatterns: mJ,
    defaultParseWidth: "any"
  }),
  quarter: zr({
    matchPatterns: VJ,
    defaultMatchWidth: "wide",
    parsePatterns: TJ,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: zr({
    matchPatterns: vJ,
    defaultMatchWidth: "wide",
    parsePatterns: wJ,
    defaultParseWidth: "any"
  }),
  day: zr({
    matchPatterns: UJ,
    defaultMatchWidth: "wide",
    parsePatterns: RJ,
    defaultParseWidth: "any"
  }),
  dayPeriod: zr({
    matchPatterns: NJ,
    defaultMatchWidth: "any",
    parsePatterns: gJ,
    defaultParseWidth: "any"
  })
};
const ZJ = MJ;
var JJ = {
  code: "en-US",
  formatDistance: HZ,
  formatLong: LZ,
  formatRelative: $Z,
  localize: sJ,
  match: ZJ,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ah = JJ;
var kJ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, yJ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, bJ = /^'([^]*?)'?$/, EJ = /''/g, FJ = /[a-zA-Z]/;
function SJ(n, a, r) {
  var l, s, f, h, p, T, N, g, k, b, B, F, C, D, A, Q, W, H;
  We(2, arguments);
  var y = String(a), _ = oi(), $ = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : _.locale) !== null && l !== void 0 ? l : Ah, L = Sn((f = (h = (p = (T = r == null ? void 0 : r.firstWeekContainsDate) !== null && T !== void 0 ? T : r == null || (N = r.locale) === null || N === void 0 || (g = N.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && p !== void 0 ? p : _.firstWeekContainsDate) !== null && h !== void 0 ? h : (k = _.locale) === null || k === void 0 || (b = k.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ae = Sn((B = (F = (C = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (A = r.locale) === null || A === void 0 || (Q = A.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && C !== void 0 ? C : _.weekStartsOn) !== null && F !== void 0 ? F : (W = _.locale) === null || W === void 0 || (H = W.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(Ae >= 0 && Ae <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!$.localize)
    throw new RangeError("locale must contain localize property");
  if (!$.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Pe = De(n);
  if (!gZ(Pe))
    throw new RangeError("Invalid time value");
  var de = jl(Pe), fe = MZ(Pe, de), pe = {
    firstWeekContainsDate: L,
    weekStartsOn: Ae,
    locale: $,
    _originalDate: Pe
  }, we = y.match(yJ).map(function(ae) {
    var ke = ae[0];
    if (ke === "p" || ke === "P") {
      var ye = DZ[ke];
      return ye(ae, $.formatLong);
    }
    return ae;
  }).join("").match(kJ).map(function(ae) {
    if (ae === "''")
      return "'";
    var ke = ae[0];
    if (ke === "'")
      return WJ(ae);
    var ye = xZ[ke];
    if (ye)
      return !(r != null && r.useAdditionalWeekYearTokens) && GZ(ae) && tf(ae, a, String(n)), !(r != null && r.useAdditionalDayOfYearTokens) && zZ(ae) && tf(ae, a, String(n)), ye(fe, ae, $.localize, pe);
    if (ke.match(FJ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ke + "`");
    return ae;
  }).join("");
  return we;
}
function WJ(n) {
  var a = n.match(bJ);
  return a ? a[1].replace(EJ, "'") : n;
}
function xh(n, a) {
  if (n == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in a)
    Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  return n;
}
function AJ(n) {
  return xh({}, n);
}
var nf = 1e3 * 60, Ea = 60 * 24, rf = Ea * 30, af = Ea * 365;
function xJ(n, a, r) {
  var l, s, f;
  We(2, arguments);
  var h = oi(), p = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : h.locale) !== null && l !== void 0 ? l : Ah;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var T = RZ(n, a);
  if (isNaN(T))
    throw new RangeError("Invalid time value");
  var N = xh(AJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: T
  }), g, k;
  T > 0 ? (g = De(a), k = De(n)) : (g = De(n), k = De(a));
  var b = String((f = r == null ? void 0 : r.roundingMethod) !== null && f !== void 0 ? f : "round"), B;
  if (b === "floor")
    B = Math.floor;
  else if (b === "ceil")
    B = Math.ceil;
  else if (b === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var F = k.getTime() - g.getTime(), C = F / nf, D = jl(k) - jl(g), A = (F - D) / nf, Q = r == null ? void 0 : r.unit, W;
  if (Q ? W = String(Q) : C < 1 ? W = "second" : C < 60 ? W = "minute" : C < Ea ? W = "hour" : A < rf ? W = "day" : A < af ? W = "month" : W = "year", W === "second") {
    var H = B(F / 1e3);
    return p.formatDistance("xSeconds", H, N);
  } else if (W === "minute") {
    var y = B(C);
    return p.formatDistance("xMinutes", y, N);
  } else if (W === "hour") {
    var _ = B(C / 60);
    return p.formatDistance("xHours", _, N);
  } else if (W === "day") {
    var $ = B(A / Ea);
    return p.formatDistance("xDays", $, N);
  } else if (W === "month") {
    var L = B(A / rf);
    return L === 12 && Q !== "month" ? p.formatDistance("xYears", 1, N) : p.formatDistance("xMonths", L, N);
  } else if (W === "year") {
    var Ae = B(A / af);
    return p.formatDistance("xYears", Ae, N);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const dn = (n) => {
  let a = "";
  if (n)
    try {
      a = SJ(new Date(n), gt.DATE_FORMAT);
    } catch {
      console.log("error date", n);
    }
  return a;
}, BJ = window.Vue.defineComponent, aa = window.Vue.toDisplayString, yn = window.Vue.createElementVNode, CJ = window.Vue.createVNode, of = window.Vue.unref, lf = window.Vue.createTextVNode, DJ = window.Vue.openBlock, QJ = window.Vue.createElementBlock, OJ = window.Vue.createCommentVNode, zJ = window.Vue.pushScopeId, GJ = window.Vue.popScopeId, Bh = (n) => (zJ("data-v-cc91403f"), n = n(), GJ(), n), YJ = {
  key: 0,
  class: "card"
}, IJ = { class: "row" }, HJ = { class: "title" }, PJ = ["innerHTML"], jJ = /* @__PURE__ */ Bh(() => /* @__PURE__ */ yn("strong", null, "First Event", -1)), XJ = /* @__PURE__ */ Bh(() => /* @__PURE__ */ yn("strong", null, "Last Event", -1)), _J = /* @__PURE__ */ BJ({
  __name: "AlarmDetail",
  props: {
    alarm: null
  },
  setup(n) {
    const a = n;
    return (r, l) => {
      var s;
      return a.alarm ? (DJ(), QJ("div", YJ, [
        yn("div", IJ, [
          yn("div", HJ, aa(n.alarm.nodeLabel) + " [" + aa(n.alarm.id) + "]", 1),
          CJ(gh, {
            severity: (s = n.alarm) == null ? void 0 : s.severity
          }, null, 8, ["severity"])
        ]),
        yn("div", {
          innerHTML: n.alarm.description
        }, null, 8, PJ),
        yn("div", null, [
          jJ,
          lf(" - " + aa(of(dn)(n.alarm.firstTime)), 1)
        ]),
        yn("div", null, [
          XJ,
          lf(" - " + aa(of(dn)(n.alarm.time)), 1)
        ])
      ])) : OJ("", !0);
    };
  }
});
const LJ = /* @__PURE__ */ Qe(_J, [["__scopeId", "data-v-cc91403f"]]), qJ = window.Vue.defineComponent, KJ = window.Vue.normalizeClass, $J = window.Vue.openBlock, ek = window.Vue.createElementBlock, tk = window.Vue.createCommentVNode, nk = /* @__PURE__ */ qJ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, l) => a != null && a.severity ? ($J(), ek("span", {
      key: 0,
      class: KJ(["circle", [`${a.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : tk("", !0);
  }
});
const rk = /* @__PURE__ */ Qe(nk, [["__scopeId", "data-v-e08880d6"]]), ik = window.Vue.defineComponent, Xl = window.Vue.createElementVNode, Ch = window.Vue.createTextVNode, oa = window.Vue.unref, sf = window.Vue.normalizeClass, El = window.Vue.withCtx, Fl = window.Vue.createVNode, cf = window.Vue.renderList, uf = window.Vue.Fragment, tr = window.Vue.openBlock, la = window.Vue.createElementBlock, ak = window.Vue.toDisplayString, df = window.Vue.createBlock, ok = window.Vue.pushScopeId, lk = window.Vue.popScopeId, sk = (n) => (ok("data-v-1575a51a"), n = n(), lk(), n), ck = { class: "container" }, uk = /* @__PURE__ */ sk(() => /* @__PURE__ */ Xl("div", { class: "title" }, "Alarms", -1)), dk = /* @__PURE__ */ Ch(" ALL "), fk = { class: "section" }, hk = { class: "alarm-list" }, ff = window.Vue.ref, pk = window.Vue.watch, mk = window.Vue.computed, Vk = /* @__PURE__ */ ik({
  __name: "AlarmFilters",
  props: {
    alarms: null
  },
  setup(n) {
    const a = n, r = mk(() => qe.exports.keys(qe.exports.groupBy(a.alarms, "severity"))), l = ff(["all"]), s = ff(a.alarms), f = (h) => {
      l.value = l.value.filter((p) => p !== "all"), l.value.includes(h) ? l.value = l.value.filter((p) => p !== h) : l.value.push(h), h === "all" || l.value.length === 0 ? (l.value = ["all"], s.value = a.alarms) : s.value = a.alarms.filter(
        (p) => l.value.includes(p.severity)
      );
    };
    return pk(a, () => {
      l.value = ["all"], s.value = a.alarms;
    }), (h, p) => (tr(), la("div", ck, [
      uk,
      (tr(), df(oa(vZ), {
        key: l.value.toString(),
        condensed: "",
        class: "alarm-filters",
        label: "Random list for condensed visual testing"
      }, {
        default: El(() => [
          Fl(oa(qd), {
            class: sf({ clicked: l.value.includes("all") }),
            onClick: p[0] || (p[0] = (T) => f("all"))
          }, {
            default: El(() => [
              dk
            ]),
            _: 1
          }, 8, ["class"]),
          (tr(!0), la(uf, null, cf(oa(r), (T) => (tr(), df(oa(qd), {
            class: sf({ clicked: l.value.includes(T) }),
            key: T,
            onClick: (N) => f(T)
          }, {
            default: El(() => [
              Fl(rk, { severity: T }, null, 8, ["severity"]),
              Ch(ak(T), 1)
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))), 128))
        ]),
        _: 1
      })),
      Xl("div", fk, [
        Xl("div", hk, [
          (tr(!0), la(uf, null, cf(s.value, (T) => (tr(), la("div", {
            key: T.id
          }, [
            Fl(LJ, { alarm: T }, null, 8, ["alarm"])
          ]))), 128))
        ])
      ])
    ]));
  }
});
const Tk = /* @__PURE__ */ Qe(Vk, [["__scopeId", "data-v-1575a51a"]]);
var vk = Object.defineProperty, wk = Object.defineProperties, Uk = Object.getOwnPropertyDescriptors, hf = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Nk = Object.prototype.propertyIsEnumerable, pf = (n, a, r) => a in n ? vk(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Gr = (n, a) => {
  for (var r in a || (a = {}))
    Rk.call(a, r) && pf(n, r, a[r]);
  if (hf)
    for (var r of hf(a))
      Nk.call(a, r) && pf(n, r, a[r]);
  return n;
}, mf = (n, a) => wk(n, Uk(a));
const gk = window.Vue.defineComponent, Mk = window.Vue.inject, Yr = window.Vue.h;
var Zk = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Jk = {
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
}, kk = gk({
  inheritAttrs: !1,
  props: Jk,
  setup() {
    return { hasTooltip: Mk("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const T = ["btn", "hover", "focus", p];
      return this.icon && (T.push("btn-icon"), T.push("btn-icon-table")), this.onColor && T.push("on-color"), T;
    }, a = this.asAnchor ? "a" : "button", r = {}, l = Gr({}, this.$attrs);
    r.attrs = l || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const s = n();
    r.class = [this.$attrs.class].concat(s), this.$slots.icon && r.class.push("has-icon");
    let f = Yr(Fn);
    if (this.disabled && (f = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), Yr(a, mf(Gr(Gr({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Yr(Fn, { center: !0 })
      ]);
    }
    const h = Yr("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Yr(a, mf(Gr(Gr({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      h,
      f
    ]);
  }
});
var Fa = /* @__PURE__ */ Zk(kk, [["__scopeId", "data-v-702d1074"]]);
const yk = "/whoami", bk = async () => {
  try {
    const n = await pr.get(yk);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Ek = window.Pinia.defineStore, li = Ek("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await bk();
      return n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id), n;
    },
    async getAlecInfo() {
      const n = await VR();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const a = await vh(n);
        this.allowSave = a;
      }
    }
  }
}), Fk = window.Vue.defineComponent, Ue = window.Vue.unref, Ir = window.Vue.normalizeClass, zt = window.Vue.createVNode, Sl = window.Vue.toDisplayString, Gt = window.Vue.openBlock, an = window.Vue.createElementBlock, sa = window.Vue.createCommentVNode, Vf = window.Vue.withCtx, Sk = window.Vue.createBlock, Ht = window.Vue.createElementVNode, Wk = window.Vue.Fragment, Ak = window.Vue.pushScopeId, xk = window.Vue.popScopeId, Bk = (n) => (Ak("data-v-b1da26ca"), n = n(), xk(), n), Ck = { class: "section" }, Dk = {
  key: 0,
  class: "btn-row"
}, Qk = { key: 0 }, Ok = { key: 1 }, zk = { key: 0 }, Gk = { key: 1 }, Yk = {
  key: 1,
  class: "situation-detail"
}, Ik = { class: "situation-info" }, Hk = { class: "id" }, Pk = ["innerHTML"], jk = /* @__PURE__ */ Bk(() => /* @__PURE__ */ Ht("p", null, null, -1)), Xk = { class: "boxes" }, _k = { class: "parameters" }, Lk = {
  key: 0,
  class: "section"
}, qk = window.Vue.ref, Kk = window.Vue.watch, $k = /* @__PURE__ */ Fk({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(n, { emit: a }) {
    const r = n, l = gt.ACCEPTED, s = gt.REJECTED, f = li(), h = qk(r.situationInfo.status), p = (T) => {
      var N, g;
      vR((N = r.situationInfo) == null ? void 0 : N.id, T.toLowerCase()), h.value = T, a("situation-status-changed", T, (g = r.situationInfo) == null ? void 0 : g.id);
    };
    return Kk(r, () => {
      h.value = r.situationInfo.status || "";
    }), (T, N) => {
      var g, k, b, B, F;
      return Gt(), an(Wk, null, [
        Ht("div", Ck, [
          Ue(f).allowSave ? (Gt(), an("div", Dk, [
            h.value !== Ue(s) ? (Gt(), Sk(Ue(Fa), {
              key: 0,
              class: Ir(["btn", { accepted: h.value == Ue(l) }]),
              "data-test": "btn-accept",
              onClick: N[0] || (N[0] = () => p(Ue(l)))
            }, {
              default: Vf(() => [
                zt(Ue(He), {
                  icon: Ue(Uh),
                  "aria-hidden": "true",
                  class: Ir(["icon accept", { accepted: h.value == Ue(l) }])
                }, null, 8, ["icon", "class"]),
                h.value == Ue(l) ? (Gt(), an("span", Qk, Sl(Ue(l)), 1)) : (Gt(), an("span", Ok, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"])) : sa("", !0),
            zt(Ue(Fa), {
              class: Ir(["btn", { rejected: h.value == Ue(s) }]),
              onClick: N[1] || (N[1] = () => p(Ue(s)))
            }, {
              default: Vf(() => [
                zt(Ue(He), {
                  icon: Ue(Rh),
                  "aria-hidden": "true",
                  class: Ir(["icon reject", { rejected: h.value == Ue(s) }])
                }, null, 8, ["icon", "class"]),
                h.value == Ue(s) ? (Gt(), an("span", zk, Sl(Ue(s)), 1)) : (Gt(), an("span", Gk, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : sa("", !0),
          r.situationInfo ? (Gt(), an("div", Yk, [
            Ht("div", {
              class: Ir(["severity-line", [`${(k = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : k.toLowerCase()}-bg dark`]])
            }, null, 2),
            Ht("div", Ik, [
              Ht("div", Hk, [
                Ht("div", null, "Situation " + Sl((b = r.situationInfo) == null ? void 0 : b.id), 1),
                zt(gh, {
                  severity: (B = r.situationInfo) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Ht("span", {
                innerHTML: r.situationInfo.description
              }, null, 8, Pk),
              jk,
              Ht("div", Xk, [
                zt(kl, {
                  label: "First Event",
                  info: Ue(dn)(r.situationInfo.creationTime)
                }, null, 8, ["info"]),
                zt(kl, {
                  label: "Last Event",
                  info: Ue(dn)(r.situationInfo.lastTime)
                }, null, 8, ["info"]),
                zt(kl, {
                  label: "Reduction key",
                  info: r.situationInfo.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Ht("div", _k, [
              zt(wh, {
                alarms: (F = r.situationInfo) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : sa("", !0)
        ]),
        r.situationInfo.alarms.length > 0 ? (Gt(), an("div", Lk, [
          zt(Tk, {
            alarms: r.situationInfo.alarms
          }, null, 8, ["alarms"])
        ])) : sa("", !0)
      ], 64);
    };
  }
});
const ey = /* @__PURE__ */ Qe($k, [["__scopeId", "data-v-b1da26ca"]]);
const ty = window.Vue.openBlock, ny = window.Vue.createElementBlock, ry = window.Vue.createElementVNode;
var iy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const ay = {}, oy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ly = /* @__PURE__ */ ry("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), sy = [
  ly
];
function cy(n, a) {
  return ty(), ny("svg", oy, sy);
}
var uy = /* @__PURE__ */ iy(ay, [["render", cy]]);
const dy = window.Vue.watch, fy = window.Vue.onBeforeUnmount, hy = window.Vue.ref, py = window.Vue.onMounted, my = (n) => {
  const a = hy(!1);
  let r = !1;
  const l = (h) => {
    n(h), r = !1;
  };
  function s(h) {
    r || (requestAnimationFrame(() => l(h)), r = !0);
  }
  const f = () => {
    window && window.removeEventListener("resize", s);
  };
  return py(() => {
    const h = dy(a, (p) => {
      window && p ? window.addEventListener("resize", s) : f();
    }, {
      immediate: !0
    });
    fy(() => {
      h(), f();
    });
  }), a;
}, Vy = window.Vue.watch, Ty = window.Vue.onBeforeUnmount, vy = window.Vue.ref, wy = window.Vue.onMounted, Uy = (n, a) => {
  const r = vy(!1), l = (h) => {
    h.target === window && a(h);
  }, s = (h) => {
    let p = [];
    Array.isArray(n.value) ? p = n.value : p = [n.value], p.some((N) => N && N.contains(h.target)) || a(h);
  }, f = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", l));
  };
  return wy(() => {
    const h = Vy(r, (p) => {
      document && window && p ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", l)) : f();
    }, {
      immediate: !0
    });
    Ty(() => {
      h(), f();
    });
  }), r;
}, Ry = window.Vue.watch, Ny = window.Vue.onBeforeUnmount, gy = window.Vue.ref, Dh = (n, a) => {
  const r = gy(!1);
  let l = !1;
  const s = (T) => {
    a(T), l = !1;
  };
  function f(T) {
    l || (requestAnimationFrame(() => s(T)), l = !0);
  }
  const h = () => {
    n.value && n.value.removeEventListener("scroll", f, !0);
  }, p = Ry([n, r], ([T, N], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", f, !0), N && T ? T.addEventListener("scroll", f, !0) : h();
  }, {
    immediate: !0
  });
  return Ny(() => {
    p(), h();
  }), r;
}, My = window.Vue.defineComponent, Yt = window.Vue.ref, Tf = window.Vue.toRef, Zy = window.Vue.onMounted, Jy = window.Vue.watch, vf = window.Vue.computed, ky = window.Vue.nextTick, wf = window.Vue.openBlock, Uf = window.Vue.createElementBlock, Rf = window.Vue.renderSlot, yy = window.Vue.normalizeClass, by = window.Vue.normalizeStyle, Ey = window.Vue.createCommentVNode;
var Fy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Sy = {
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
}, Wy = {
  "trigger-click": (n) => !0,
  "outside-click": (n) => !0
}, Ay = My({
  emits: Wy,
  props: Sy,
  setup(n, a) {
    const r = Yt(), l = Yt(), s = Tf(n, "open"), f = Tf(n, "noExpand"), h = Yt("auto"), p = Yt(), T = Yt(n.triggerId || ve("feather-menu-trigger")), N = Yt(ve("feather-menu-dropdown")), g = Yt(""), k = Yt("");
    Zy(() => {
      p.value = window;
    });
    const b = Yt(!1), B = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), F = () => {
      if (!l.value)
        return;
      const y = r.value.getBoundingClientRect();
      b.value = !0, h.value = "auto", ky(() => {
        let { height: _, width: $ } = l.value.getBoundingClientRect();
        const L = B(), Ae = L.height, Pe = L.width;
        n.fill && $ < y.width ? (h.value = y.width + "px", $ = y.width) : h.value = $ + "px";
        let de = 0;
        Ae - y.bottom < _ && y.top >= _ ? (de = y.top - _, n.cover && (de += y.height)) : (de = y.bottom, n.cover && (de -= y.height));
        let fe = n.right ? y.right - $ : y.left;
        !n.right && y.right >= $ && Pe - y.left < $ && (fe = y.right - $), n.right && y.right <= $ && Pe - y.left > $ && (fe = y.left), k.value = `${fe}px`, g.value = `${de}px`, b.value = !1;
      });
    }, D = Uy(r, (y) => {
      a.emit("outside-click", y);
    }), A = my(F), Q = Dh(p, F);
    Jy([s, l], ([y, _]) => {
      y && _ && F(), D.value = y, A.value = y, Q.value = y;
    });
    const W = vf(() => {
      const y = {
        id: T.value,
        "aria-haspopup": "true"
      };
      return s.value && (y["aria-controls"] = N.value), f.value || (y["aria-expanded"] = s.value ? "true" : "false"), y;
    }), H = vf(() => ({
      click: (y) => {
        a.emit("trigger-click", y);
      }
    }));
    return {
      positionTop: g,
      positionLeft: k,
      triggerId: T,
      triggerAttrs: W,
      triggerListeners: H,
      menuId: N,
      menu: l,
      menuWidth: h,
      root: r,
      calculatePosition: F,
      calculating: b
    };
  }
}), xy = ["data-ref-id"], By = ["data-ref-id", "id"];
function Cy(n, a, r, l, s, f) {
  return wf(), Uf("div", {
    class: "feather-menu",
    "data-ref-id": n.dataRefId,
    ref: "root"
  }, [
    Rf(n.$slots, "trigger", {
      attrs: n.triggerAttrs,
      on: n.triggerListeners
    }, void 0, !0),
    n.open ? (wf(), Uf("div", {
      key: 0,
      class: yy(["feather-menu-dropdown", { hidden: n.calculating }]),
      "data-ref-id": n.dataRefId + "-dropdown",
      ref: "menu",
      id: n.menuId,
      style: by({ left: n.positionLeft, top: n.positionTop, width: n.menuWidth })
    }, [
      Rf(n.$slots, "default", { labelId: n.triggerId }, void 0, !0)
    ], 14, By)) : Ey("", !0)
  ], 8, xy);
}
var Dy = /* @__PURE__ */ Fy(Ay, [["render", Cy], ["__scopeId", "data-v-f75af406"]]);
const Qy = window.Vue.defineComponent, Oy = window.Vue.openBlock, zy = window.Vue.createElementBlock, Gy = window.Vue.normalizeClass, Yy = window.Vue.pushScopeId, Iy = window.Vue.popScopeId, _l = window.Vue.createElementVNode;
var Hy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Py = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, jy = {
  click: (n) => !0
}, Xy = Qy({
  emits: jy,
  props: Py,
  methods: {
    handleClick(n) {
      this.disabled || this.$emit("click", n);
    }
  }
}), Qh = (n) => (Yy("data-v-07e020f5"), n = n(), Iy(), n), _y = /* @__PURE__ */ Qh(() => /* @__PURE__ */ _l("div", { class: "track" }, null, -1)), Ly = /* @__PURE__ */ Qh(() => /* @__PURE__ */ _l("div", { class: "switcher" }, [
  /* @__PURE__ */ _l("div", { class: "switch-circle" })
], -1)), qy = [
  _y,
  Ly
];
function Ky(n, a, r, l, s, f) {
  return Oy(), zy("div", {
    class: Gy(["switch-container", { checked: n.checked, disabled: n.disabled }]),
    onClick: a[0] || (a[0] = (...h) => n.handleClick && n.handleClick(...h))
  }, qy, 2);
}
var $y = /* @__PURE__ */ Hy(Xy, [["render", Ky], ["__scopeId", "data-v-07e020f5"]]), e2 = Object.defineProperty, t2 = Object.defineProperties, n2 = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, r2 = Object.prototype.hasOwnProperty, i2 = Object.prototype.propertyIsEnumerable, gf = (n, a, r) => a in n ? e2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Mf = (n, a) => {
  for (var r in a || (a = {}))
    r2.call(a, r) && gf(n, r, a[r]);
  if (Nf)
    for (var r of Nf(a))
      i2.call(a, r) && gf(n, r, a[r]);
  return n;
}, Zf = (n, a) => t2(n, n2(a));
const Ms = window.Vue.defineComponent, Mn = window.Vue.h, a2 = window.Vue.openBlock, o2 = window.Vue.createElementBlock, l2 = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Oh = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const s2 = {
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
}, c2 = Ms({
  inheritAttrs: !1,
  props: s2,
  render() {
    let n;
    this.$slots.icon && this.$slots.icon().findIndex((h) => h.children && h.children.length !== 0 || h.type && h.type.render) !== -1 && (n = Mn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Mn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let l;
    this.$slots.post && (l = Mn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : Mn(Fn);
    if (this.asLi)
      return Mn("li", Zf(Mf({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [n, r, l, s]);
    const f = Mn("a", Zf(Mf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [n, r, l, s]);
    return Mn("li", {}, [f]);
  }
});
var Zs = /* @__PURE__ */ Oh(c2, [["__scopeId", "data-v-7c46b2b3"]]);
Ms({
  components: {
    FeatherListItem: Zs
  }
});
const u2 = {}, d2 = { class: "feather-list" };
function f2(n, a) {
  return a2(), o2("ul", d2, [
    l2(n.$slots, "default", {}, void 0, !0)
  ]);
}
var h2 = /* @__PURE__ */ Oh(u2, [["render", f2], ["__scopeId", "data-v-941a1d50"]]);
const p2 = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  keydown: (n) => !0
}, m2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Ms({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: p2,
  props: m2,
  computed: {
    labelId() {
      return ve("switch-label");
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
  components: { SwitchRender: $y, FeatherListItem: Zs }
});
const V2 = function(n, a) {
  if (!n || !a)
    return;
  let r = n.getBoundingClientRect().height;
  const l = getComputedStyle(n);
  r += parseInt(l.getPropertyValue("margin-top"), 10), r += parseInt(l.getPropertyValue("margin-bottom"), 10), a.scrollTop = n.offsetTop - a.getBoundingClientRect().height + r;
};
var T2 = Object.defineProperty, v2 = Object.defineProperties, w2 = Object.getOwnPropertyDescriptors, Jf = Object.getOwnPropertySymbols, U2 = Object.prototype.hasOwnProperty, R2 = Object.prototype.propertyIsEnumerable, kf = (n, a, r) => a in n ? T2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ll = (n, a) => {
  for (var r in a || (a = {}))
    U2.call(a, r) && kf(n, r, a[r]);
  if (Jf)
    for (var r of Jf(a))
      R2.call(a, r) && kf(n, r, a[r]);
  return n;
}, N2 = (n, a) => v2(n, w2(a));
const zh = window.Vue.defineComponent, bn = window.Vue.resolveComponent, Va = window.Vue.openBlock, yf = window.Vue.createBlock, Ta = window.Vue.mergeProps, En = window.Vue.withCtx, Gh = window.Vue.createElementBlock, g2 = window.Vue.Fragment, M2 = window.Vue.renderList, Z2 = window.Vue.createTextVNode, J2 = window.Vue.toDisplayString, k2 = window.Vue.computed, bf = window.Vue.toRef, Hr = window.Vue.createVNode, Ef = window.Vue.toHandlers, y2 = window.Vue.renderSlot, b2 = window.Vue.normalizeClass, E2 = window.Vue.createElementVNode;
var Yh = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const F2 = zh({
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
      return ve("feather-select-active");
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
        V2(a, this.$refs.list.$el);
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
    FeatherList: h2,
    FeatherListItem: Zs
  }
});
function S2(n, a, r, l, s, f) {
  const h = bn("FeatherListItem"), p = bn("FeatherList");
  return Va(), yf(p, Ta(n.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: En(() => [
      (Va(!0), Gh(g2, null, M2(n.options, (T, N) => (Va(), yf(h, {
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
        default: En(() => [
          Z2(J2(T[n.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var W2 = /* @__PURE__ */ Yh(F2, [["render", S2], ["__scopeId", "data-v-eae820da"]]);
const A2 = N2(Ll(Ll({}, yM), ws), {
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
}), x2 = {
  "update:modelValue": (n) => !0
}, B2 = zh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: x2,
  props: A2,
  setup(n, a) {
    Us(n), bM(n);
    const r = k2(() => ve("feather-select-input")), { validate: l } = Ts(r, bf(n, "modelValue"), n.label, n.schema, bf(n, "error"));
    return Ll({
      inputId: r,
      validate: l
    }, vs(a.attrs));
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
      return ve("feather-select-description");
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
    icon: () => uy
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
      Na(this.delayTimeout), this.delayTimeout = Ra(() => {
        const n = this.options.filter((a) => a[this.textProp] && a[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        n && n.length && this.select(n[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: UM,
    InputSubText: Vs,
    FeatherMenu: Dy,
    List: W2,
    FeatherIcon: He
  }
});
function C2(n, a, r, l, s, f) {
  const h = bn("FeatherIcon"), p = bn("InputWrapper"), T = bn("List"), N = bn("FeatherMenu"), g = bn("InputSubText");
  return Va(), Gh("div", Ta(n.inherittedAttrs, { class: "feather-select-container" }), [
    Hr(N, {
      "no-expand": "",
      fill: "",
      open: n.showMenu,
      onOutsideClick: n.handleOutsideClick,
      onTriggerClick: n.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: En((k) => [
        Hr(p, Ta({
          for: n.inputId,
          raised: n.raised,
          focused: n.hasFocus,
          "show-clear": n.showClear,
          onClear: n.handleClear
        }, k.attrs, Ef(k.on), {
          class: ["feather-select-wrapper", { focused: n.hasFocus }]
        }), {
          pre: En(() => [
            y2(n.$slots, "pre", {}, void 0, !0)
          ]),
          post: En(() => [
            Hr(h, {
              class: b2(["feather-select-icon", { rotate: n.showMenu }]),
              icon: n.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: En(() => [
            E2("input", Ta(n.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Ef(n.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: En(() => [
        Hr(T, {
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
    Hr(g, { id: n.subTextId }, null, 8, ["id"])
  ], 16);
}
var D2 = /* @__PURE__ */ Yh(B2, [["render", C2], ["__scopeId", "data-v-ecb32d90"]]);
const Q2 = window.Vue.openBlock, O2 = window.Vue.createElementBlock, Ih = window.Vue.createElementVNode;
var z2 = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const G2 = {}, Y2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, I2 = /* @__PURE__ */ Ih("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), H2 = /* @__PURE__ */ Ih("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), P2 = [
  I2,
  H2
];
function j2(n, a) {
  return Q2(), O2("svg", Y2, P2);
}
var X2 = /* @__PURE__ */ z2(G2, [["render", j2]]);
const va = window.Vue.openBlock, ql = window.Vue.createElementBlock, Hh = window.Vue.createElementVNode, _2 = window.Vue.defineComponent, Zn = window.Vue.ref, L2 = window.Vue.provide, Ff = window.Vue.computed, q2 = window.Vue.onUnmounted, Sf = window.Vue.toRef, K2 = window.Vue.resolveComponent, $2 = window.Vue.Fragment, eb = window.Vue.createBlock, tb = window.Vue.Teleport, Wf = window.Vue.createVNode, nb = window.Vue.Transition, rb = window.Vue.withCtx, ib = window.Vue.normalizeClass, ab = window.Vue.normalizeStyle, ob = window.Vue.toDisplayString, lb = window.Vue.createCommentVNode, sb = window.Vue.renderSlot, Wl = window.Vue.nextTick;
var Ph = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const cb = {}, ub = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, db = /* @__PURE__ */ Hh("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), fb = [
  db
];
function hb(n, a) {
  return va(), ql("svg", ub, fb);
}
var pb = /* @__PURE__ */ Ph(cb, [["render", hb]]), Fe = /* @__PURE__ */ ((n) => (n.top = "top", n.bottom = "bottom", n.left = "left", n.right = "right", n))(Fe || {}), Pt = /* @__PURE__ */ ((n) => (n.center = "center", n.left = "left", n.right = "right", n))(Pt || {});
const mb = (n, a, r, l = 9) => {
  const s = window.innerHeight - n.bottom, f = window.innerWidth - n.right, h = [];
  n.top >= a.height + l && h.push(Fe.top), s >= a.height + l && h.push(Fe.bottom);
  const p = [];
  f >= a.width + l && p.push(Fe.right), n.left >= a.width + l && p.push(Fe.left);
  let T = [...p, ...h];
  return (r === Fe.top || r === Fe.bottom) && (T = [...h, ...p]), T.indexOf(r) > -1 ? r : T.length ? T[0] : r;
}, Vb = (n, a, r, l, s = 28) => {
  if (n === Fe.left || n === Fe.right)
    return Pt.center;
  const f = a.left + a.width / 2, h = window.innerWidth - a.right, p = [], T = f, N = h + a.width / 2, g = r.width - s, k = r.width / 2;
  return T >= k && N >= k && p.push(Pt.center), N >= g && p.push(Pt.left), T >= g && p.push(Pt.right), p.indexOf(l) > -1 ? l : p.length ? p[0] : l;
}, Tb = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Fe.top
  },
  pointerAlignment: {
    type: String,
    default: () => Pt.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, vb = _2({
  props: Tb,
  setup(n) {
    const a = Zn(!1), r = Zn(!1), l = ve("feather-tooltip-trigger"), s = ve("feather-tooltip"), f = "data-feather-tooltip";
    L2("feather-has-tooltip", !0);
    let h = 0;
    const p = () => {
      Na(h), a.value || (h = Ra(C, n.enterDelay));
    }, T = () => {
      Na(h), h = Ra(D, n.exitDelay);
    }, N = (de) => {
      de.keyCode === ge.ESCAPE && (de.preventDefault(), D(!0));
    }, g = Ff(() => ({
      [f]: l,
      "aria-describedby": s
    })), k = {
      mouseenter: p,
      mouseleave: T,
      focus: p,
      blur: T,
      keydown: N
    }, b = Zn(document), B = Dh(b, () => D(!0));
    q2(() => D(!0));
    const F = () => document.getElementById(s), C = () => {
      r.value = !1, a.value = !0, Wl(() => {
        const de = F();
        Pe(de), a.value = !1, Wl(() => {
          r.value = !0, a.value = !0, B.value = !0;
        });
      });
    }, D = (de = !1) => {
      _.value = "", y.value = "", $.value = "", L.value = "", a.value = !1, de && (r.value = !1), B.value = !1;
    }, A = Sf(n, "placement"), Q = Sf(n, "pointerAlignment"), W = 8, H = 24, y = Zn(""), _ = Zn(""), $ = Zn(""), L = Zn(""), Ae = Ff(() => L.value ? "p-" + L.value : !1), Pe = (de) => {
      const fe = document.querySelector(`[${f}=${l}]`);
      if (!fe) {
        console.log("trigger not found");
        return;
      }
      Wl(() => {
        const pe = fe.getBoundingClientRect(), we = de.getBoundingClientRect(), ae = mb(pe, we, A.value, W), ke = Vb(ae, pe, we, Q.value, H);
        $.value = ke.toString(), L.value = ae.toString();
        let ye = 0, Oe = 0;
        if ((ae === Fe.left || ae === Fe.right) && (ye = pe.top + pe.height / 2 - we.height / 2, ae === Fe.left && (Oe = pe.left - we.width - W), ae === Fe.right && (Oe = pe.right)), ae === Fe.top || ae === Fe.bottom) {
          ye = pe.top - we.height - W, ae === Fe.bottom && (ye = pe.bottom);
          const Vr = pe.left + pe.width / 2;
          switch (ke) {
            case Pt.center:
              Oe = Vr - we.width / 2;
              break;
            case Pt.left:
              Oe = Vr - H;
              break;
            case Pt.right:
              Oe = Vr - we.width + H;
              break;
          }
        }
        y.value = ye.toString() + "px", _.value = Oe.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: k,
      show: a,
      animate: r,
      alignmentClass: $,
      placementClass: Ae,
      top: y,
      left: _,
      tooltipID: s
    };
  },
  components: {
    Pointer: pb
  }
}), wb = ["id"];
function Ub(n, a, r, l, s, f) {
  const h = K2("Pointer");
  return va(), ql($2, null, [
    (va(), eb(tb, { to: "body" }, [
      Wf(nb, { css: n.animate }, {
        default: rb(() => [
          n.show ? (va(), ql("div", {
            key: 0,
            class: ib(["feather-tooltip-container", [n.alignmentClass, n.placementClass]]),
            ref: "tooltip",
            style: ab({ left: n.left, top: n.top })
          }, [
            Hh("div", {
              class: "tooltip",
              role: "tooltip",
              id: n.tooltipID
            }, ob(n.title), 9, wb),
            Wf(h, { class: "tooltip-pointer" })
          ], 6)) : lb("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    sb(n.$slots, "default", {
      attrs: n.attrs,
      on: n.listeners
    }, void 0, !0)
  ], 64);
}
var Af = /* @__PURE__ */ Ph(vb, [["render", Ub], ["__scopeId", "data-v-3da6b22e"]]);
const Rb = window.Vue.defineComponent, ca = window.Vue.unref, xf = window.Vue.toHandlers, Bf = window.Vue.mergeProps, Al = window.Vue.createElementVNode, Cf = window.Vue.withCtx, Df = window.Vue.createVNode, Nb = window.Vue.normalizeClass, gb = window.Vue.normalizeStyle, Mb = window.Vue.Fragment, Zb = window.Vue.openBlock, Jb = window.Vue.createElementBlock, kb = /* @__PURE__ */ Rb({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(n) {
    const a = n, r = (s, f) => s && f ? (Number(f) - Number(s)) * a.proportion : 0, l = (s) => s ? (Number(s) - Number(a.minStart)) * a.proportion : 0;
    return (s, f) => (Zb(), Jb(Mb, null, [
      Df(ca(Af), {
        title: ca(dn)(n.alarm.firstTime)
      }, {
        default: Cf(({ attrs: h, on: p }) => [
          Al("div", Bf({ class: "circle" }, h, xf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: l(n.alarm.firstTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      Al("div", {
        class: Nb(["line", [`${n.alarm.severity.toLowerCase()}-bg dark`]]),
        style: gb({
          width: r(n.alarm.firstTime, n.alarm.time) + "px"
        })
      }, null, 6),
      Df(ca(Af), {
        title: ca(dn)(n.alarm.time)
      }, {
        default: Cf(({ attrs: h, on: p }) => [
          Al("div", Bf({ class: "circle" }, h, xf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const yb = /* @__PURE__ */ Qe(kb, [["__scopeId", "data-v-c620fbda"]]), bb = window.Vue.openBlock, Eb = window.Vue.createElementBlock, jh = window.Vue.createElementVNode;
var Fb = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Sb = {}, Wb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ab = /* @__PURE__ */ jh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), xb = /* @__PURE__ */ jh("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), Bb = [
  Ab,
  xb
];
function Cb(n, a) {
  return bb(), Eb("svg", Wb, Bb);
}
var Db = /* @__PURE__ */ Fb(Sb, [["render", Cb]]);
const Qb = window.Vue.defineComponent, Ob = window.Vue.normalizeClass, Ce = window.Vue.createElementVNode, nr = window.Vue.toDisplayString, on = window.Vue.unref, ua = window.Vue.createVNode, zb = window.Vue.createTextVNode, Qf = window.Vue.renderList, xl = window.Vue.Fragment, rr = window.Vue.openBlock, ir = window.Vue.createElementBlock, Gb = window.Vue.createCommentVNode, Yb = window.Vue.pushScopeId, Ib = window.Vue.popScopeId, Hb = (n) => (Yb("data-v-c231ad04"), n = n(), Ib(), n), Pb = { class: "section detail" }, jb = { class: "id" }, Xb = {
  key: 0,
  class: "section"
}, _b = /* @__PURE__ */ Hb(() => /* @__PURE__ */ Ce("div", { class: "id" }, "Alarms", -1)), Lb = { class: "action-btns" }, qb = { class: "zoom" }, Kb = /* @__PURE__ */ zb(" Zoom "), $b = { class: "alarms" }, eE = { class: "times" }, tE = { class: "container" }, nE = { class: "ids" }, rE = { class: "timeline-container" }, ar = window.Vue.ref, iE = window.Vue.watch, aE = /* @__PURE__ */ Qb({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(n) {
    var F, C, D, A;
    const a = n, r = 800;
    let l = ar(r);
    const s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], f = ar(s[0]), h = () => l.value / (Number(N.value) - Number(T.value)), p = ar(a.situation.alarms), T = ar(
      ((C = qe.exports.minBy((F = a.situation) == null ? void 0 : F.alarms, "firstTime")) == null ? void 0 : C.firstTime) || new Date()
    ), N = ar(((A = qe.exports.maxBy((D = a.situation) == null ? void 0 : D.alarms, "time")) == null ? void 0 : A.time) || new Date()), g = ar(h());
    iE(a, () => {
      var Q, W, H, y;
      T.value = ((W = qe.exports.minBy((Q = a.situation) == null ? void 0 : Q.alarms, "firstTime")) == null ? void 0 : W.firstTime) || new Date(), N.value = ((y = qe.exports.maxBy((H = a.situation) == null ? void 0 : H.alarms, "time")) == null ? void 0 : y.time) || new Date(), l.value = r, g.value = h(), p.value = a.situation.alarms, f.value = s[0];
    });
    const k = (Q) => {
      if ((Q == null ? void 0 : Q.id) === 1 && (p.value = a.situation.alarms), (Q == null ? void 0 : Q.id) === 2) {
        const W = qe.exports.groupBy(p.value, "severity"), H = [
          ...W.CRITICAL || [],
          ...W.MAJOR || [],
          ...W.MINOR || [],
          ...W.WARNING || [],
          ...W.NORMAL || [],
          ...W.CLEARED || [],
          ...W.INDETERMINATE || []
        ];
        p.value = H.filter((y) => y);
      }
      if ((Q == null ? void 0 : Q.id) === 3) {
        const W = qe.exports.reverse(
          qe.exports.sortBy(
            a.situation.alarms,
            (H) => Number(H.time) - Number(H.firstTime)
          )
        );
        p.value = W;
      }
    }, b = () => {
      l.value += 100, g.value = h();
    }, B = () => {
      l.value -= 100, g.value = h();
    };
    return (Q, W) => {
      var H, y;
      return rr(), ir(xl, null, [
        Ce("div", Pb, [
          Ce("div", {
            class: Ob(["severity-line", [`${(y = (H = a.situation) == null ? void 0 : H.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ce("div", null, [
            Ce("div", jb, "Situation " + nr(a.situation.id), 1),
            Ce("div", null, " Duration: " + nr(on(xJ)(new Date(N.value), new Date(T.value))), 1)
          ])
        ]),
        p.value.length > 0 ? (rr(), ir("div", Xb, [
          _b,
          Ce("div", Lb, [
            ua(on(D2), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: f.value,
              "onUpdate:modelValue": [
                W[0] || (W[0] = (_) => f.value = _),
                k
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ce("div", qb, [
              Kb,
              Ce("div", null, [
                ua(on(He), {
                  icon: on(X2),
                  class: "zoom-icon",
                  onClick: b
                }, null, 8, ["icon"]),
                ua(on(He), {
                  icon: on(Db),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          Ce("div", $b, [
            Ce("div", eE, [
              Ce("div", null, nr(on(dn)(T.value)), 1),
              Ce("div", null, nr(on(dn)(N.value)), 1)
            ]),
            Ce("div", tE, [
              Ce("div", nE, [
                (rr(!0), ir(xl, null, Qf(p.value, (_) => (rr(), ir("div", {
                  class: "alarm-id",
                  key: _.id
                }, nr(_.nodeLabel) + " [ " + nr(_.id) + " ] ", 1))), 128))
              ]),
              Ce("div", rE, [
                (rr(!0), ir(xl, null, Qf(p.value, (_) => (rr(), ir("div", {
                  class: "timeline",
                  key: _.id
                }, [
                  ua(yb, {
                    alarm: _,
                    proportion: g.value,
                    "min-start": T.value,
                    "max-end": N.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : Gb("", !0)
      ], 64);
    };
  }
});
const oE = /* @__PURE__ */ Qe(aE, [["__scopeId", "data-v-c231ad04"]]), lE = window.Vue.defineComponent, Xh = window.Vue.createTextVNode, Pr = window.Vue.unref, or = window.Vue.withCtx, Jn = window.Vue.createVNode, sE = window.Vue.openBlock, cE = window.Vue.createElementBlock, uE = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const dE = {
  key: 0,
  class: "detail"
}, fE = /* @__PURE__ */ Xh("Details"), hE = /* @__PURE__ */ Xh("Metrics"), pE = /* @__PURE__ */ lE({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  emits: ["situation-status-changed"],
  setup(n, { emit: a }) {
    const r = n, l = (s, f) => {
      a("situation-status-changed", s, f);
    };
    return (s, f) => r.alarmInfo ? (sE(), cE("div", dE, [
      Jn(Pr(rg), null, {
        tabs: or(() => [
          Jn(Pr(Cd), null, {
            default: or(() => [
              fE
            ]),
            _: 1
          }),
          Jn(Pr(Cd), null, {
            default: or(() => [
              hE
            ]),
            _: 1
          })
        ]),
        default: or(() => [
          Jn(Pr(Dd), { class: "panel" }, {
            default: or(() => [
              Jn(ey, {
                "situation-info": r.alarmInfo,
                onSituationStatusChanged: l
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Jn(Pr(Dd), { class: "panel" }, {
            default: or(() => [
              Jn(oE, {
                situation: r == null ? void 0 : r.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : uE("", !0);
  }
});
const mE = /* @__PURE__ */ Qe(pE, [["__scopeId", "data-v-b34edfcf"]]), VE = window.Vue.defineComponent, Kl = window.Vue.createElementVNode, TE = window.Vue.renderList, vE = window.Vue.Fragment, Bl = window.Vue.openBlock, Cl = window.Vue.createElementBlock, Of = window.Vue.createVNode, wE = window.Vue.unref, UE = window.Vue.pushScopeId, RE = window.Vue.popScopeId, NE = (n) => (UE("data-v-0970f108"), n = n(), RE(), n), gE = { class: "list-main" }, ME = /* @__PURE__ */ NE(() => /* @__PURE__ */ Kl("h2", null, "Situation List", -1)), ZE = { class: "container" }, JE = { class: "situation-list" }, kE = window.Vue.reactive, yE = window.Vue.ref, bE = /* @__PURE__ */ VE({
  __name: "SituationList",
  setup(n) {
    const a = RR();
    a.getSituations();
    const r = kE({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), l = yE(a.situations), s = (h) => {
      r.situationSelected = h, r.selectedSituationIndex = a.situations.findIndex(
        (p) => p.id === h
      );
    }, f = (h, p) => {
      const T = l.value;
      T.forEach((N) => {
        N.id === p && (N.status = h);
      }), l.value = qe.exports.cloneDeep(T);
    };
    return a.$subscribe((h, p) => {
      var T;
      l.value = a.situations, r.situationSelected = (T = p.situations[0]) == null ? void 0 : T.id;
    }), (h, p) => (Bl(), Cl("div", gE, [
      ME,
      Kl("div", ZE, [
        Kl("div", JE, [
          (Bl(!0), Cl(vE, null, TE(l.value, (T) => (Bl(), Cl("div", {
            key: T.id
          }, [
            Of(uN, {
              "situation-info": T,
              onSituationSelected: s,
              selected: r.situationSelected == T.id
            }, null, 8, ["situation-info", "selected"])
          ]))), 128))
        ]),
        Of(mE, {
          "alarm-info": wE(a).situations[r.selectedSituationIndex],
          onSituationStatusChanged: f
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const EE = /* @__PURE__ */ Qe(bE, [["__scopeId", "data-v-0970f108"]]);
var FE = Object.defineProperty, SE = Object.defineProperties, WE = Object.getOwnPropertyDescriptors, zf = Object.getOwnPropertySymbols, AE = Object.prototype.hasOwnProperty, xE = Object.prototype.propertyIsEnumerable, Gf = (n, a, r) => a in n ? FE(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, wa = (n, a) => {
  for (var r in a || (a = {}))
    AE.call(a, r) && Gf(n, r, a[r]);
  if (zf)
    for (var r of zf(a))
      xE.call(a, r) && Gf(n, r, a[r]);
  return n;
}, _h = (n, a) => SE(n, WE(a));
const Lh = window.Vue.defineComponent, BE = window.Vue.ref, $r = window.Vue.computed, CE = window.Vue.reactive, Yf = window.Vue.watch, Dl = window.Vue.inject, qh = window.Vue.resolveComponent, $l = window.Vue.openBlock, Kh = window.Vue.createElementBlock, un = window.Vue.createElementVNode, DE = window.Vue.createBlock, QE = window.Vue.createCommentVNode, $h = window.Vue.renderSlot, OE = window.Vue.pushScopeId, zE = window.Vue.popScopeId, Ql = window.Vue.toRef, If = window.Vue.mergeProps, GE = window.Vue.toDisplayString, YE = window.Vue.createVNode;
var ep = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const IE = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, HE = Lh({
  props: IE,
  setup(n) {
    const a = BE(), r = () => {
      a.value.focus();
    }, l = $r(() => ve("feather-radio-button")), s = CE({
      first: !1,
      focus: r,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: l.value
    }), f = $r(() => ve("radio-label-id")), h = $r(() => s.first || s.checked ? 0 : -1);
    Yf(() => n.disabled, (k) => {
      s.disabled = k;
    }, { immediate: !0 }), Yf(() => n.value, (k) => {
      s.value = k;
    }, { immediate: !0 });
    const p = Dl("register", (k) => {
    }), T = Dl("blur", (k) => {
    }), N = Dl("select", (k) => {
    });
    return p(s), {
      labelId: f,
      tabindex: h,
      vm: s,
      blur: T,
      click: () => {
        N(s);
      },
      input: a,
      id: l
    };
  },
  components: {
    FeatherRipple: Fn
  }
}), PE = (n) => (OE("data-v-24790cf0"), n = n(), zE(), n), jE = { class: "layout-container" }, XE = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], _E = { class: "radio hover focus" }, LE = /* @__PURE__ */ PE(() => /* @__PURE__ */ un("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ un("svg", { class: "dot" }, [
    /* @__PURE__ */ un("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), qE = ["id"];
function KE(n, a, r, l, s, f) {
  const h = qh("feather-ripple");
  return $l(), Kh("div", jE, [
    un("div", {
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
      un("div", _E, [
        LE,
        n.vm.disabled ? QE("", !0) : ($l(), DE(h, {
          key: 0,
          center: ""
        }))
      ]),
      un("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        $h(n.$slots, "default", {}, void 0, !0)
      ], 8, qE)
    ], 40, XE)
  ]);
}
var Sa = /* @__PURE__ */ ep(HE, [["render", KE], ["__scopeId", "data-v-24790cf0"]]);
const $E = _h(wa({}, ws), {
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
}), eF = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, tF = Lh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: $E,
  emits: eF,
  setup(n, a) {
    Us(n);
    const r = Ql(n, "error"), l = Ql(n, "modelValue"), s = $r(() => ve("feather-input-description")), f = $r(() => {
      const h = _h(wa({}, a.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return h["aria-invalid"] || (h["aria-invalid"] = !!r.value), h;
    });
    return wa(wa({
      descriptionId: s,
      attrs: f
    }, kh(l, a.emit, n.label, n.schema, Ql(n, "error"))), vs(a.attrs));
  },
  components: {
    InputSubText: Vs
  }
}), nF = ["for"], rF = ["id"];
function iF(n, a, r, l, s, f) {
  const h = qh("InputSubText");
  return $l(), Kh("div", If(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    un("label", {
      for: n.groupId,
      class: "group-label"
    }, GE(n.label), 9, nF),
    un("div", If(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: a[0] || (a[0] = (...p) => n.keydown && n.keydown(...p))
    }), [
      $h(n.$slots, "default", {}, void 0, !0)
    ], 16, rF),
    YE(h, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var tp = /* @__PURE__ */ ep(tF, [["render", iF], ["__scopeId", "data-v-6775aeb9"]]);
const aF = window.Vue.openBlock, oF = window.Vue.createElementBlock, lF = window.Vue.createStaticVNode;
var sF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const cF = {}, uF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dF = /* @__PURE__ */ lF('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), fF = [
  dF
];
function hF(n, a) {
  return aF(), oF("svg", uF, fF);
}
var pF = /* @__PURE__ */ sF(cF, [["render", hF]]);
const mF = window.Vue.openBlock, VF = window.Vue.createElementBlock, TF = window.Vue.createStaticVNode;
var vF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const wF = {}, UF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RF = /* @__PURE__ */ TF('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), NF = [
  RF
];
function gF(n, a) {
  return mF(), VF("svg", UF, NF);
}
var MF = /* @__PURE__ */ vF(wF, [["render", gF]]);
const ZF = window.Vue.openBlock, JF = window.Vue.createElementBlock, kF = window.Vue.createElementVNode;
var yF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const bF = {}, EF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FF = /* @__PURE__ */ kF("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), SF = [
  FF
];
function WF(n, a) {
  return ZF(), JF("svg", EF, SF);
}
var AF = /* @__PURE__ */ yF(bF, [["render", WF]]);
const xF = window.Vue.openBlock, BF = window.Vue.createElementBlock, CF = window.Vue.createStaticVNode;
var DF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const QF = {}, OF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zF = /* @__PURE__ */ CF('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), GF = [
  zF
];
function YF(n, a) {
  return xF(), BF("svg", OF, GF);
}
var IF = /* @__PURE__ */ DF(QF, [["render", YF]]);
const HF = window.Vue.openBlock, PF = window.Vue.createElementBlock, jF = window.Vue.createElementVNode;
var XF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const _F = {}, LF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qF = /* @__PURE__ */ jF("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), KF = [
  qF
];
function $F(n, a) {
  return HF(), PF("svg", LF, KF);
}
var eS = /* @__PURE__ */ XF(_F, [["render", $F]]);
const np = () => window.VRouter || Js, tS = window.Vue.defineComponent, Te = window.Vue.createElementVNode, ri = window.Vue.createTextVNode, Ie = window.Vue.unref, It = window.Vue.createVNode, da = window.Vue.withCtx, Hf = window.Vue.openBlock, Pf = window.Vue.createElementBlock, nS = window.Vue.createCommentVNode, rS = window.Vue.pushScopeId, iS = window.Vue.popScopeId, Mt = (n) => (rS("data-v-0fd6b0cd"), n = n(), iS(), n), aS = { class: "container" }, oS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "title" }, "ALEC", -1)), lS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "description" }, [
  /* @__PURE__ */ ri(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ Te("strong", null, "Our goal"),
  /* @__PURE__ */ ri(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), sS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Key Benefits:", -1)), cS = { class: "list" }, uS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), dS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Assist in root cause analysis.", -1)), fS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), hS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Easy configuration.", -1)), pS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), mS = {
  key: 0,
  class: "optin"
}, VS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Enable ALEC for more precise results:", -1)), TS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), vS = { class: "choices" }, wS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), US = /* @__PURE__ */ ri("Yes"), RS = /* @__PURE__ */ ri("No"), NS = /* @__PURE__ */ ri(" Continue "), gS = window.Vue.ref, MS = /* @__PURE__ */ tS({
  __name: "WelcomePage",
  setup(n) {
    const a = li(), r = np(), l = gS(!0), s = () => {
      const f = Boolean(l.value);
      a.savePermission(f), f ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (f, h) => (Hf(), Pf("div", aS, [
      oS,
      lS,
      Te("div", null, [
        sS,
        Te("div", cS, [
          Te("div", null, [
            It(Ie(He), {
              icon: Ie(IF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uS
          ]),
          Te("div", null, [
            It(Ie(He), {
              icon: Ie(AF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            dS
          ]),
          Te("div", null, [
            It(Ie(He), {
              icon: Ie(eS),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fS
          ]),
          Te("div", null, [
            It(Ie(He), {
              icon: Ie(pF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            hS
          ]),
          Te("div", null, [
            It(Ie(He), {
              icon: Ie(MF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pS
          ])
        ])
      ]),
      Ie(a).isAdmin ? (Hf(), Pf("div", mS, [
        VS,
        TS,
        Te("div", vS, [
          wS,
          It(Ie(tp), {
            horizontal: "",
            modelValue: l.value,
            "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p),
            label: ""
          }, {
            default: da(() => [
              It(Ie(Sa), { value: !0 }, {
                default: da(() => [
                  US
                ]),
                _: 1
              }),
              It(Ie(Sa), { value: !1 }, {
                default: da(() => [
                  RS
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : nS("", !0),
      It(Ie(Fa), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: da(() => [
          NS
        ]),
        _: 1
      })
    ]));
  }
});
const ZS = /* @__PURE__ */ Qe(MS, [["__scopeId", "data-v-0fd6b0cd"]]);
const JS = {}, kS = window.Vue.openBlock, yS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const bS = { class: "main" };
function ES(n, a) {
  return kS(), yS("div", bS, "Something bad is happening...");
}
const FS = /* @__PURE__ */ Qe(JS, [["render", ES], ["__scopeId", "data-v-fefffdff"]]), SS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", WS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var AS = Object.defineProperty, xS = Object.defineProperties, BS = Object.getOwnPropertyDescriptors, jf = Object.getOwnPropertySymbols, CS = Object.prototype.hasOwnProperty, DS = Object.prototype.propertyIsEnumerable, Xf = (n, a, r) => a in n ? AS(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, es = (n, a) => {
  for (var r in a || (a = {}))
    CS.call(a, r) && Xf(n, r, a[r]);
  if (jf)
    for (var r of jf(a))
      DS.call(a, r) && Xf(n, r, a[r]);
  return n;
}, rp = (n, a) => xS(n, BS(a));
const ip = window.Vue.defineComponent, QS = window.Vue.inject, OS = window.Vue.resolveComponent, Ol = window.Vue.openBlock, _f = window.Vue.createElementBlock, sr = window.Vue.createElementVNode, zS = window.Vue.createBlock, Lf = window.Vue.createCommentVNode, GS = window.Vue.renderSlot, YS = window.Vue.pushScopeId, IS = window.Vue.popScopeId, zl = window.Vue.toRef, fa = window.Vue.computed, HS = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var PS = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const jS = {
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
}, XS = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, _S = ip({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: XS,
  props: jS,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: QS("registerCheckbox", (a) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ve("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ve("checkbox-label");
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
    FeatherRipple: Fn
  }
}), LS = (n) => (YS("data-v-a7af27e2"), n = n(), IS(), n), qS = { class: "layout-container" }, KS = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], $S = { class: "checkbox hover focus" }, eW = /* @__PURE__ */ LS(() => /* @__PURE__ */ sr("div", { class: "box" }, [
  /* @__PURE__ */ sr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ sr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ sr("div", { class: "indeterminate" })
], -1)), tW = ["id", "for"];
function nW(n, a, r, l, s, f) {
  const h = OS("feather-ripple");
  return Ol(), _f("div", qS, [
    sr("div", {
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
      sr("div", $S, [
        eW,
        n.disabled ? Lf("", !0) : (Ol(), zS(h, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? Lf("", !0) : (Ol(), _f("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        GS(n.$slots, "default", {}, void 0, !0)
      ], 8, tW))
    ], 40, KS)
  ]);
}
var rW = /* @__PURE__ */ PS(_S, [["render", nW], ["__scopeId", "data-v-a7af27e2"]]);
const iW = rp(es({}, ws), {
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
ip({
  props: iW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, a) {
    Us(n);
    const r = zl(n, "error"), l = fa(() => ve("feather-checkbox-group")), s = fa(() => ve("feather-input-description")), f = fa(() => ve("feather-input-label")), h = fa(() => {
      const g = JSON.parse(JSON.stringify(a.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), rp(es({}, g), {
        class: "",
        "aria-describedby": s.value
      });
    }), p = HS(l.value), { validate: T } = Ts(p, zl(n, "modelValue"), n.label, n.schema, zl(n, "error"));
    return es({
      groupId: l,
      inputId: p,
      descriptionId: s,
      labelId: f,
      attrs: h,
      validate: T,
      registerCheckbox: (g) => {
        g && p.value === l.value && (p.value = g);
      }
    }, vs(a.attrs));
  },
  components: {
    InputSubText: Vs
  }
});
const aW = window.Vue.defineComponent, Je = window.Vue.createElementVNode, ts = window.Vue.createTextVNode, ln = window.Vue.unref, jr = window.Vue.withCtx, Xr = window.Vue.createVNode, oW = window.Vue.openBlock, lW = window.Vue.createElementBlock, sW = window.Vue.pushScopeId, cW = window.Vue.popScopeId, An = (n) => (sW("data-v-9a5b5f4e"), n = n(), cW(), n), uW = { class: "container" }, dW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("h2", null, "Configuration", -1)), fW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("p", null, [
  /* @__PURE__ */ ts(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Je("br"),
  /* @__PURE__ */ ts(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Je("strong", null, [
    /* @__PURE__ */ Je("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), hW = { class: "radio-content" }, pW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("strong", { class: "title" }, "Clustering", -1)), mW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), VW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("img", {
  class: "img",
  src: SS
}, null, -1)), TW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("div", { class: "hellinger" }, [
  /* @__PURE__ */ Je("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Je("br"),
  /* @__PURE__ */ Je("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), vW = /* @__PURE__ */ An(() => /* @__PURE__ */ Je("div", { class: "radio-content" }, [
  /* @__PURE__ */ Je("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Je("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Je("img", {
    class: "img img2",
    src: WS
  })
], -1)), wW = /* @__PURE__ */ ts(" Continue "), qf = window.Vue.ref, UW = /* @__PURE__ */ aW({
  __name: "ConfigurationPage",
  setup(n) {
    const a = li(), r = np(), l = qf(!1), s = qf(gt.ENGINE_DBSCAN), f = () => {
      vh(a.allowSave), TR(s.value, l.value), r.push({ name: "situations" });
    };
    return (h, p) => (oW(), lW("div", uW, [
      dW,
      fW,
      Je("div", null, [
        Xr(ln(tp), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (T) => s.value = T)
        }, {
          default: jr(() => [
            Xr(ln(Sa), {
              class: "radio",
              value: ln(gt).ENGINE_DBSCAN
            }, {
              default: jr(() => [
                Je("div", hW, [
                  pW,
                  mW,
                  VW,
                  Xr(ln(rW), {
                    modelValue: l.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (T) => l.value = T),
                    disabled: s.value !== ln(gt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: jr(() => [
                      TW
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Xr(ln(Sa), {
              class: "radio",
              value: ln(gt).ENGINE_DEEP_LEARNING
            }, {
              default: jr(() => [
                vW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Xr(ln(Fa), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => f())
      }, {
        default: jr(() => [
          wW
        ]),
        _: 1
      })
    ]));
  }
});
const RW = /* @__PURE__ */ Qe(UW, [["__scopeId", "data-v-9a5b5f4e"]]), NW = window.VueRouter.createRouter, gW = window.VueRouter.createWebHistory, Gl = async () => {
  const n = window.VRouter || Js, a = li();
  if (!a.userId) {
    const r = await a.getUserRole();
    await a.getAlecInfo(), r ? n.push({ name: "home" }) : n.push({ name: "error" });
  }
}, ap = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const a = window.VRouter || Js, r = li();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? a.push({ name: "welcome", params: n.params }) : a.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Gl(),
    component: ZS
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Gl(),
    component: RW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Gl(),
    component: EE
  },
  {
    path: "/error",
    name: "error",
    component: FS
  }
], Kf = window.VRouter;
if (Kf)
  for (const n of ap) {
    const { path: a, name: r, component: l, beforeEnter: s } = n;
    Kf.addRoute("Plugin", {
      path: a.slice(1),
      name: r,
      component: l,
      beforeEnter: s
    });
  }
const Js = NW({
  history: gW(),
  routes: ap
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = aU;
