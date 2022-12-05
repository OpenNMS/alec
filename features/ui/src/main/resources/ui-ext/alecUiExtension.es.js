const we = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
}, xk = {}, Bk = window.Vue.resolveComponent, Dk = window.Vue.createVNode, Ik = window.Vue.openBlock, Ok = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Qk = { class: "main" };
function zk(e, r) {
  const o = Bk("router-view");
  return Ik(), Ok("div", Qk, [
    Dk(o)
  ]);
}
const Gk = /* @__PURE__ */ we(xk, [["render", zk], ["__scopeId", "data-v-5d32d140"]]), Yk = window.Vue.defineComponent, Pk = window.Vue.openBlock, Hk = window.Vue.createBlock, jk = /* @__PURE__ */ Yk({
  __name: "App",
  setup(e) {
    return (r, o) => (Pk(), Hk(Gk));
  }
});
var jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $k(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xw = { exports: {} }, Wu = { exports: {} }, Lw = function(r, o) {
  return function() {
    for (var s = new Array(arguments.length), c = 0; c < s.length; c++)
      s[c] = arguments[c];
    return r.apply(o, s);
  };
}, Xk = Lw, _u = Object.prototype.toString, xu = function(e) {
  return function(r) {
    var o = _u.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kr(e) {
  return e = e.toLowerCase(), function(o) {
    return xu(o) === e;
  };
}
function Bu(e) {
  return Array.isArray(e);
}
function ws(e) {
  return typeof e > "u";
}
function Lk(e) {
  return e !== null && !ws(e) && e.constructor !== null && !ws(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var qw = kr("ArrayBuffer");
function qk(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && qw(e.buffer), r;
}
function Kk(e) {
  return typeof e == "string";
}
function eR(e) {
  return typeof e == "number";
}
function Kw(e) {
  return e !== null && typeof e == "object";
}
function ls(e) {
  if (xu(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var tR = kr("Date"), nR = kr("File"), rR = kr("Blob"), oR = kr("FileList");
function Du(e) {
  return _u.call(e) === "[object Function]";
}
function aR(e) {
  return Kw(e) && Du(e.pipe);
}
function iR(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || _u.call(e) === r || Du(e.toString) && e.toString() === r);
}
var sR = kr("URLSearchParams");
function lR(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function cR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Iu(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Bu(e))
      for (var o = 0, i = e.length; o < i; o++)
        r.call(null, e[o], o, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && r.call(null, e[s], s, e);
}
function vu() {
  var e = {};
  function r(s, c) {
    ls(e[c]) && ls(s) ? e[c] = vu(e[c], s) : ls(s) ? e[c] = vu({}, s) : Bu(s) ? e[c] = s.slice() : e[c] = s;
  }
  for (var o = 0, i = arguments.length; o < i; o++)
    Iu(arguments[o], r);
  return e;
}
function uR(e, r, o) {
  return Iu(r, function(s, c) {
    o && typeof s == "function" ? e[c] = Xk(s, o) : e[c] = s;
  }), e;
}
function dR(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function fR(e, r, o, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function hR(e, r, o) {
  var i, s, c, d = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      c = i[s], d[c] || (r[c] = e[c], d[c] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function pR(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var i = e.indexOf(r, o);
  return i !== -1 && i === o;
}
function mR(e) {
  if (!e)
    return null;
  var r = e.length;
  if (ws(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var wR = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ye = {
  isArray: Bu,
  isArrayBuffer: qw,
  isBuffer: Lk,
  isFormData: iR,
  isArrayBufferView: qk,
  isString: Kk,
  isNumber: eR,
  isObject: Kw,
  isPlainObject: ls,
  isUndefined: ws,
  isDate: tR,
  isFile: nR,
  isBlob: rR,
  isFunction: Du,
  isStream: aR,
  isURLSearchParams: sR,
  isStandardBrowserEnv: cR,
  forEach: Iu,
  merge: vu,
  extend: uR,
  trim: lR,
  stripBOM: dR,
  inherits: fR,
  toFlatObject: hR,
  kindOf: xu,
  kindOfTest: kr,
  endsWith: pR,
  toArray: mR,
  isTypedArray: wR,
  isFileList: oR
}, zr = Ye;
function Lh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var ev = function(r, o, i) {
  if (!o)
    return r;
  var s;
  if (i)
    s = i(o);
  else if (zr.isURLSearchParams(o))
    s = o.toString();
  else {
    var c = [];
    zr.forEach(o, function(m, v) {
      m === null || typeof m > "u" || (zr.isArray(m) ? v = v + "[]" : m = [m], zr.forEach(m, function(T) {
        zr.isDate(T) ? T = T.toISOString() : zr.isObject(T) && (T = JSON.stringify(T)), c.push(Lh(v) + "=" + Lh(T));
      }));
    }), s = c.join("&");
  }
  if (s) {
    var d = r.indexOf("#");
    d !== -1 && (r = r.slice(0, d)), r += (r.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return r;
}, vR = Ye;
function bs() {
  this.handlers = [];
}
bs.prototype.use = function(r, o, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
bs.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
bs.prototype.forEach = function(r) {
  vR.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var VR = bs, gR = Ye, TR = function(r, o) {
  gR.forEach(r, function(s, c) {
    c !== o && c.toUpperCase() === o.toUpperCase() && (r[o] = s, delete r[c]);
  });
}, tv = Ye;
function po(e, r, o, i, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), i && (this.request = i), s && (this.response = s);
}
tv.inherits(po, Error, {
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
var nv = po.prototype, rv = {};
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
].forEach(function(e) {
  rv[e] = { value: e };
});
Object.defineProperties(po, rv);
Object.defineProperty(nv, "isAxiosError", { value: !0 });
po.from = function(e, r, o, i, s, c) {
  var d = Object.create(nv);
  return tv.toFlatObject(e, d, function(m) {
    return m !== Error.prototype;
  }), po.call(d, e.message, r, o, i, s), d.name = e.name, c && Object.assign(d, c), d;
};
var go = po, ov = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Pt = Ye;
function UR(e, r) {
  r = r || new FormData();
  var o = [];
  function i(c) {
    return c === null ? "" : Pt.isDate(c) ? c.toISOString() : Pt.isArrayBuffer(c) || Pt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function s(c, d) {
    if (Pt.isPlainObject(c) || Pt.isArray(c)) {
      if (o.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      o.push(c), Pt.forEach(c, function(m, v) {
        if (!Pt.isUndefined(m)) {
          var V = d ? d + "." + v : v, T;
          if (m && !d && typeof m == "object") {
            if (Pt.endsWith(v, "{}"))
              m = JSON.stringify(m);
            else if (Pt.endsWith(v, "[]") && (T = Pt.toArray(m))) {
              T.forEach(function(U) {
                !Pt.isUndefined(U) && r.append(V, i(U));
              });
              return;
            }
          }
          s(m, V);
        }
      }), o.pop();
    } else
      r.append(d, i(c));
  }
  return s(e), r;
}
var av = UR, hc, qh;
function yR() {
  if (qh)
    return hc;
  qh = 1;
  var e = go;
  return hc = function(o, i, s) {
    var c = s.config.validateStatus;
    !s.status || !c || c(s.status) ? o(s) : i(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, hc;
}
var pc, Kh;
function NR() {
  if (Kh)
    return pc;
  Kh = 1;
  var e = Ye;
  return pc = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, s, c, d, f, m) {
        var v = [];
        v.push(i + "=" + encodeURIComponent(s)), e.isNumber(c) && v.push("expires=" + new Date(c).toGMTString()), e.isString(d) && v.push("path=" + d), e.isString(f) && v.push("domain=" + f), m === !0 && v.push("secure"), document.cookie = v.join("; ");
      },
      read: function(i) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(i) {
        this.write(i, "", Date.now() - 864e5);
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
  }(), pc;
}
var kR = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, RR = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, MR = kR, bR = RR, iv = function(r, o) {
  return r && !MR(o) ? bR(r, o) : o;
}, mc, ep;
function ZR() {
  if (ep)
    return mc;
  ep = 1;
  var e = Ye, r = [
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
  return mc = function(i) {
    var s = {}, c, d, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), c = e.trim(v.substr(0, f)).toLowerCase(), d = e.trim(v.substr(f + 1)), c) {
        if (s[c] && r.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? s[c] = (s[c] ? s[c] : []).concat([d]) : s[c] = s[c] ? s[c] + ", " + d : d;
      }
    }), s;
  }, mc;
}
var wc, tp;
function SR() {
  if (tp)
    return wc;
  tp = 1;
  var e = Ye;
  return wc = e.isStandardBrowserEnv() ? function() {
    var o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), s;
    function c(d) {
      var f = d;
      return o && (i.setAttribute("href", f), f = i.href), i.setAttribute("href", f), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return s = c(window.location.href), function(f) {
      var m = e.isString(f) ? c(f) : f;
      return m.protocol === s.protocol && m.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), wc;
}
var vc, np;
function Zs() {
  if (np)
    return vc;
  np = 1;
  var e = go, r = Ye;
  function o(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), vc = o, vc;
}
var Vc, rp;
function ER() {
  return rp || (rp = 1, Vc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), Vc;
}
var gc, op;
function ap() {
  if (op)
    return gc;
  op = 1;
  var e = Ye, r = yR(), o = NR(), i = ev, s = iv, c = ZR(), d = SR(), f = ov, m = go, v = Zs(), V = ER();
  return gc = function(U) {
    return new Promise(function(S, A) {
      var W = U.data, F = U.headers, _ = U.responseType, C;
      function D() {
        U.cancelToken && U.cancelToken.unsubscribe(C), U.signal && U.signal.removeEventListener("abort", C);
      }
      e.isFormData(W) && e.isStandardBrowserEnv() && delete F["Content-Type"];
      var M = new XMLHttpRequest();
      if (U.auth) {
        var z = U.auth.username || "", Q = U.auth.password ? unescape(encodeURIComponent(U.auth.password)) : "";
        F.Authorization = "Basic " + btoa(z + ":" + Q);
      }
      var B = s(U.baseURL, U.url);
      M.open(U.method.toUpperCase(), i(B, U.params, U.paramsSerializer), !0), M.timeout = U.timeout;
      function $() {
        if (!!M) {
          var G = "getAllResponseHeaders" in M ? c(M.getAllResponseHeaders()) : null, se = !_ || _ === "text" || _ === "json" ? M.responseText : M.response, ge = {
            data: se,
            status: M.status,
            statusText: M.statusText,
            headers: G,
            config: U,
            request: M
          };
          r(function(De) {
            S(De), D();
          }, function(De) {
            A(De), D();
          }, ge), M = null;
        }
      }
      if ("onloadend" in M ? M.onloadend = $ : M.onreadystatechange = function() {
        !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout($);
      }, M.onabort = function() {
        !M || (A(new m("Request aborted", m.ECONNABORTED, U, M)), M = null);
      }, M.onerror = function() {
        A(new m("Network Error", m.ERR_NETWORK, U, M, M)), M = null;
      }, M.ontimeout = function() {
        var se = U.timeout ? "timeout of " + U.timeout + "ms exceeded" : "timeout exceeded", ge = U.transitional || f;
        U.timeoutErrorMessage && (se = U.timeoutErrorMessage), A(new m(
          se,
          ge.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          U,
          M
        )), M = null;
      }, e.isStandardBrowserEnv()) {
        var K = (U.withCredentials || d(B)) && U.xsrfCookieName ? o.read(U.xsrfCookieName) : void 0;
        K && (F[U.xsrfHeaderName] = K);
      }
      "setRequestHeader" in M && e.forEach(F, function(se, ge) {
        typeof W > "u" && ge.toLowerCase() === "content-type" ? delete F[ge] : M.setRequestHeader(ge, se);
      }), e.isUndefined(U.withCredentials) || (M.withCredentials = !!U.withCredentials), _ && _ !== "json" && (M.responseType = U.responseType), typeof U.onDownloadProgress == "function" && M.addEventListener("progress", U.onDownloadProgress), typeof U.onUploadProgress == "function" && M.upload && M.upload.addEventListener("progress", U.onUploadProgress), (U.cancelToken || U.signal) && (C = function(G) {
        !M || (A(!G || G && G.type ? new v() : G), M.abort(), M = null);
      }, U.cancelToken && U.cancelToken.subscribe(C), U.signal && (U.signal.aborted ? C() : U.signal.addEventListener("abort", C))), W || (W = null);
      var X = V(B);
      if (X && ["http", "https", "file"].indexOf(X) === -1) {
        A(new m("Unsupported protocol " + X + ":", m.ERR_BAD_REQUEST, U));
        return;
      }
      M.send(W);
    });
  }, gc;
}
var Tc, ip;
function JR() {
  return ip || (ip = 1, Tc = null), Tc;
}
var xe = Ye, sp = TR, lp = go, AR = ov, FR = av, CR = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cp(e, r) {
  !xe.isUndefined(e) && xe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function WR() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ap()), e;
}
function _R(e, r, o) {
  if (xe.isString(e))
    try {
      return (r || JSON.parse)(e), xe.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (o || JSON.stringify)(e);
}
var Ss = {
  transitional: AR,
  adapter: WR(),
  transformRequest: [function(r, o) {
    if (sp(o, "Accept"), sp(o, "Content-Type"), xe.isFormData(r) || xe.isArrayBuffer(r) || xe.isBuffer(r) || xe.isStream(r) || xe.isFile(r) || xe.isBlob(r))
      return r;
    if (xe.isArrayBufferView(r))
      return r.buffer;
    if (xe.isURLSearchParams(r))
      return cp(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = xe.isObject(r), s = o && o["Content-Type"], c;
    if ((c = xe.isFileList(r)) || i && s === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return FR(c ? { "files[]": r } : r, d && new d());
    } else if (i || s === "application/json")
      return cp(o, "application/json"), _R(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || Ss.transitional, i = o && o.silentJSONParsing, s = o && o.forcedJSONParsing, c = !i && this.responseType === "json";
    if (c || s && xe.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? lp.from(d, lp.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: JR()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
xe.forEach(["delete", "get", "head"], function(r) {
  Ss.headers[r] = {};
});
xe.forEach(["post", "put", "patch"], function(r) {
  Ss.headers[r] = xe.merge(CR);
});
var Ou = Ss, xR = Ye, BR = Ou, DR = function(r, o, i) {
  var s = this || BR;
  return xR.forEach(i, function(d) {
    r = d.call(s, r, o);
  }), r;
}, Uc, up;
function sv() {
  return up || (up = 1, Uc = function(r) {
    return !!(r && r.__CANCEL__);
  }), Uc;
}
var dp = Ye, yc = DR, IR = sv(), OR = Ou, QR = Zs();
function Nc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new QR();
}
var zR = function(r) {
  Nc(r), r.headers = r.headers || {}, r.data = yc.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = dp.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), dp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete r.headers[s];
    }
  );
  var o = r.adapter || OR.adapter;
  return o(r).then(function(s) {
    return Nc(r), s.data = yc.call(
      r,
      s.data,
      s.headers,
      r.transformResponse
    ), s;
  }, function(s) {
    return IR(s) || (Nc(r), s && s.response && (s.response.data = yc.call(
      r,
      s.response.data,
      s.response.headers,
      r.transformResponse
    ))), Promise.reject(s);
  });
}, Vt = Ye, lv = function(r, o) {
  o = o || {};
  var i = {};
  function s(V, T) {
    return Vt.isPlainObject(V) && Vt.isPlainObject(T) ? Vt.merge(V, T) : Vt.isPlainObject(T) ? Vt.merge({}, T) : Vt.isArray(T) ? T.slice() : T;
  }
  function c(V) {
    if (Vt.isUndefined(o[V])) {
      if (!Vt.isUndefined(r[V]))
        return s(void 0, r[V]);
    } else
      return s(r[V], o[V]);
  }
  function d(V) {
    if (!Vt.isUndefined(o[V]))
      return s(void 0, o[V]);
  }
  function f(V) {
    if (Vt.isUndefined(o[V])) {
      if (!Vt.isUndefined(r[V]))
        return s(void 0, r[V]);
    } else
      return s(void 0, o[V]);
  }
  function m(V) {
    if (V in o)
      return s(r[V], o[V]);
    if (V in r)
      return s(void 0, r[V]);
  }
  var v = {
    url: d,
    method: d,
    data: d,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: m
  };
  return Vt.forEach(Object.keys(r).concat(Object.keys(o)), function(T) {
    var U = v[T] || c, E = U(T);
    Vt.isUndefined(E) && U !== m || (i[T] = E);
  }), i;
}, kc, fp;
function cv() {
  return fp || (fp = 1, kc = {
    version: "0.27.2"
  }), kc;
}
var GR = cv().version, Hn = go, Qu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Qu[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var hp = {};
Qu.transitional = function(r, o, i) {
  function s(c, d) {
    return "[Axios v" + GR + "] Transitional option '" + c + "'" + d + (i ? ". " + i : "");
  }
  return function(c, d, f) {
    if (r === !1)
      throw new Hn(
        s(d, " has been removed" + (o ? " in " + o : "")),
        Hn.ERR_DEPRECATED
      );
    return o && !hp[d] && (hp[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(c, d, f) : !0;
  };
};
function YR(e, r, o) {
  if (typeof e != "object")
    throw new Hn("options must be an object", Hn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), s = i.length; s-- > 0; ) {
    var c = i[s], d = r[c];
    if (d) {
      var f = e[c], m = f === void 0 || d(f, c, e);
      if (m !== !0)
        throw new Hn("option " + c + " must be " + m, Hn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new Hn("Unknown option " + c, Hn.ERR_BAD_OPTION);
  }
}
var PR = {
  assertOptions: YR,
  validators: Qu
}, uv = Ye, HR = ev, pp = VR, mp = zR, Es = lv, jR = iv, dv = PR, Gr = dv.validators;
function mo(e) {
  this.defaults = e, this.interceptors = {
    request: new pp(),
    response: new pp()
  };
}
mo.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Es(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var i = o.transitional;
  i !== void 0 && dv.assertOptions(i, {
    silentJSONParsing: Gr.transitional(Gr.boolean),
    forcedJSONParsing: Gr.transitional(Gr.boolean),
    clarifyTimeoutError: Gr.transitional(Gr.boolean)
  }, !1);
  var s = [], c = !0;
  this.interceptors.request.forEach(function(E) {
    typeof E.runWhen == "function" && E.runWhen(o) === !1 || (c = c && E.synchronous, s.unshift(E.fulfilled, E.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(E) {
    d.push(E.fulfilled, E.rejected);
  });
  var f;
  if (!c) {
    var m = [mp, void 0];
    for (Array.prototype.unshift.apply(m, s), m = m.concat(d), f = Promise.resolve(o); m.length; )
      f = f.then(m.shift(), m.shift());
    return f;
  }
  for (var v = o; s.length; ) {
    var V = s.shift(), T = s.shift();
    try {
      v = V(v);
    } catch (U) {
      T(U);
      break;
    }
  }
  try {
    f = mp(v);
  } catch (U) {
    return Promise.reject(U);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
mo.prototype.getUri = function(r) {
  r = Es(this.defaults, r);
  var o = jR(r.baseURL, r.url);
  return HR(o, r.params, r.paramsSerializer);
};
uv.forEach(["delete", "get", "head", "options"], function(r) {
  mo.prototype[r] = function(o, i) {
    return this.request(Es(i || {}, {
      method: r,
      url: o,
      data: (i || {}).data
    }));
  };
});
uv.forEach(["post", "put", "patch"], function(r) {
  function o(i) {
    return function(c, d, f) {
      return this.request(Es(f || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  mo.prototype[r] = o(), mo.prototype[r + "Form"] = o(!0);
});
var $R = mo, Rc, wp;
function XR() {
  if (wp)
    return Rc;
  wp = 1;
  var e = Zs();
  function r(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(d) {
      i = d;
    });
    var s = this;
    this.promise.then(function(c) {
      if (!!s._listeners) {
        var d, f = s._listeners.length;
        for (d = 0; d < f; d++)
          s._listeners[d](c);
        s._listeners = null;
      }
    }), this.promise.then = function(c) {
      var d, f = new Promise(function(m) {
        s.subscribe(m), d = m;
      }).then(c);
      return f.cancel = function() {
        s.unsubscribe(d);
      }, f;
    }, o(function(d) {
      s.reason || (s.reason = new e(d), i(s.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, r.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(i);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, r.source = function() {
    var i, s = new r(function(d) {
      i = d;
    });
    return {
      token: s,
      cancel: i
    };
  }, Rc = r, Rc;
}
var Mc, vp;
function LR() {
  return vp || (vp = 1, Mc = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), Mc;
}
var bc, Vp;
function qR() {
  if (Vp)
    return bc;
  Vp = 1;
  var e = Ye;
  return bc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, bc;
}
var gp = Ye, KR = Lw, cs = $R, eM = lv, tM = Ou;
function fv(e) {
  var r = new cs(e), o = KR(cs.prototype.request, r);
  return gp.extend(o, cs.prototype, r), gp.extend(o, r), o.create = function(s) {
    return fv(eM(e, s));
  }, o;
}
var dt = fv(tM);
dt.Axios = cs;
dt.CanceledError = Zs();
dt.CancelToken = XR();
dt.isCancel = sv();
dt.VERSION = cv().version;
dt.toFormData = av;
dt.AxiosError = go;
dt.Cancel = dt.CanceledError;
dt.all = function(r) {
  return Promise.all(r);
};
dt.spread = LR();
dt.isAxiosError = qR();
Wu.exports = dt;
Wu.exports.default = dt;
(function(e) {
  e.exports = Wu.exports;
})(Xw);
const hv = /* @__PURE__ */ $k(Xw.exports), En = hv.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), hn = hv.create({
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
(function(e, r) {
  (function() {
    var o, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, V = "__lodash_placeholder__", T = 1, U = 2, E = 4, S = 1, A = 2, W = 1, F = 2, _ = 4, C = 8, D = 16, M = 32, z = 64, Q = 128, B = 256, $ = 512, K = 30, X = "...", G = 800, se = 16, ge = 1, de = 2, De = 3, Ie = 1 / 0, Le = 9007199254740991, Ro = 17976931348623157e292, Ia = 0 / 0, nn = 4294967295, $1 = nn - 1, X1 = nn >>> 1, L1 = [
      ["ary", Q],
      ["bind", W],
      ["bindKey", F],
      ["curry", C],
      ["curryRight", D],
      ["flip", $],
      ["partial", M],
      ["partialRight", z],
      ["rearg", B]
    ], br = "[object Arguments]", Oa = "[object Array]", q1 = "[object AsyncFunction]", Mo = "[object Boolean]", bo = "[object Date]", K1 = "[object DOMException]", Qa = "[object Error]", za = "[object Function]", gd = "[object GeneratorFunction]", It = "[object Map]", Zo = "[object Number]", eV = "[object Null]", pn = "[object Object]", Td = "[object Promise]", tV = "[object Proxy]", So = "[object RegExp]", Ot = "[object Set]", Eo = "[object String]", Ga = "[object Symbol]", nV = "[object Undefined]", Jo = "[object WeakMap]", rV = "[object WeakSet]", Ao = "[object ArrayBuffer]", Zr = "[object DataView]", Ps = "[object Float32Array]", Hs = "[object Float64Array]", js = "[object Int8Array]", $s = "[object Int16Array]", Xs = "[object Int32Array]", Ls = "[object Uint8Array]", qs = "[object Uint8ClampedArray]", Ks = "[object Uint16Array]", el = "[object Uint32Array]", oV = /\b__p \+= '';/g, aV = /\b(__p \+=) '' \+/g, iV = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ud = /&(?:amp|lt|gt|quot|#39);/g, yd = /[&<>"']/g, sV = RegExp(Ud.source), lV = RegExp(yd.source), cV = /<%-([\s\S]+?)%>/g, uV = /<%([\s\S]+?)%>/g, Nd = /<%=([\s\S]+?)%>/g, dV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fV = /^\w*$/, hV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tl = /[\\^$.*+?()[\]{}|]/g, pV = RegExp(tl.source), nl = /^\s+/, mV = /\s/, wV = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, vV = /\{\n\/\* \[wrapped with (.+)\] \*/, VV = /,? & /, gV = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, TV = /[()=,{}\[\]\/\s]/, UV = /\\(\\)?/g, yV = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kd = /\w*$/, NV = /^[-+]0x[0-9a-f]+$/i, kV = /^0b[01]+$/i, RV = /^\[object .+?Constructor\]$/, MV = /^0o[0-7]+$/i, bV = /^(?:0|[1-9]\d*)$/, ZV = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ya = /($^)/, SV = /['\n\r\u2028\u2029\\]/g, Pa = "\\ud800-\\udfff", EV = "\\u0300-\\u036f", JV = "\\ufe20-\\ufe2f", AV = "\\u20d0-\\u20ff", Rd = EV + JV + AV, Md = "\\u2700-\\u27bf", bd = "a-z\\xdf-\\xf6\\xf8-\\xff", FV = "\\xac\\xb1\\xd7\\xf7", CV = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", WV = "\\u2000-\\u206f", _V = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sd = "\\ufe0e\\ufe0f", Ed = FV + CV + WV + _V, rl = "['\u2019]", xV = "[" + Pa + "]", Jd = "[" + Ed + "]", Ha = "[" + Rd + "]", Ad = "\\d+", BV = "[" + Md + "]", Fd = "[" + bd + "]", Cd = "[^" + Pa + Ed + Ad + Md + bd + Zd + "]", ol = "\\ud83c[\\udffb-\\udfff]", DV = "(?:" + Ha + "|" + ol + ")", Wd = "[^" + Pa + "]", al = "(?:\\ud83c[\\udde6-\\uddff]){2}", il = "[\\ud800-\\udbff][\\udc00-\\udfff]", Sr = "[" + Zd + "]", _d = "\\u200d", xd = "(?:" + Fd + "|" + Cd + ")", IV = "(?:" + Sr + "|" + Cd + ")", Bd = "(?:" + rl + "(?:d|ll|m|re|s|t|ve))?", Dd = "(?:" + rl + "(?:D|LL|M|RE|S|T|VE))?", Id = DV + "?", Od = "[" + Sd + "]?", OV = "(?:" + _d + "(?:" + [Wd, al, il].join("|") + ")" + Od + Id + ")*", QV = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", zV = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Qd = Od + Id + OV, GV = "(?:" + [BV, al, il].join("|") + ")" + Qd, YV = "(?:" + [Wd + Ha + "?", Ha, al, il, xV].join("|") + ")", PV = RegExp(rl, "g"), HV = RegExp(Ha, "g"), sl = RegExp(ol + "(?=" + ol + ")|" + YV + Qd, "g"), jV = RegExp([
      Sr + "?" + Fd + "+" + Bd + "(?=" + [Jd, Sr, "$"].join("|") + ")",
      IV + "+" + Dd + "(?=" + [Jd, Sr + xd, "$"].join("|") + ")",
      Sr + "?" + xd + "+" + Bd,
      Sr + "+" + Dd,
      zV,
      QV,
      Ad,
      GV
    ].join("|"), "g"), $V = RegExp("[" + _d + Pa + Rd + Sd + "]"), XV = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, LV = [
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
    ], qV = -1, ye = {};
    ye[Ps] = ye[Hs] = ye[js] = ye[$s] = ye[Xs] = ye[Ls] = ye[qs] = ye[Ks] = ye[el] = !0, ye[br] = ye[Oa] = ye[Ao] = ye[Mo] = ye[Zr] = ye[bo] = ye[Qa] = ye[za] = ye[It] = ye[Zo] = ye[pn] = ye[So] = ye[Ot] = ye[Eo] = ye[Jo] = !1;
    var Te = {};
    Te[br] = Te[Oa] = Te[Ao] = Te[Zr] = Te[Mo] = Te[bo] = Te[Ps] = Te[Hs] = Te[js] = Te[$s] = Te[Xs] = Te[It] = Te[Zo] = Te[pn] = Te[So] = Te[Ot] = Te[Eo] = Te[Ga] = Te[Ls] = Te[qs] = Te[Ks] = Te[el] = !0, Te[Qa] = Te[za] = Te[Jo] = !1;
    var KV = {
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
    }, e0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, t0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, n0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, r0 = parseFloat, o0 = parseInt, zd = typeof jo == "object" && jo && jo.Object === Object && jo, a0 = typeof self == "object" && self && self.Object === Object && self, Oe = zd || a0 || Function("return this")(), ll = r && !r.nodeType && r, er = ll && !0 && e && !e.nodeType && e, Gd = er && er.exports === ll, cl = Gd && zd.process, Rt = function() {
      try {
        var y = er && er.require && er.require("util").types;
        return y || cl && cl.binding && cl.binding("util");
      } catch {
      }
    }(), Yd = Rt && Rt.isArrayBuffer, Pd = Rt && Rt.isDate, Hd = Rt && Rt.isMap, jd = Rt && Rt.isRegExp, $d = Rt && Rt.isSet, Xd = Rt && Rt.isTypedArray;
    function ft(y, R, k) {
      switch (k.length) {
        case 0:
          return y.call(R);
        case 1:
          return y.call(R, k[0]);
        case 2:
          return y.call(R, k[0], k[1]);
        case 3:
          return y.call(R, k[0], k[1], k[2]);
      }
      return y.apply(R, k);
    }
    function i0(y, R, k, I) {
      for (var L = -1, ce = y == null ? 0 : y.length; ++L < ce; ) {
        var Je = y[L];
        R(I, Je, k(Je), y);
      }
      return I;
    }
    function Mt(y, R) {
      for (var k = -1, I = y == null ? 0 : y.length; ++k < I && R(y[k], k, y) !== !1; )
        ;
      return y;
    }
    function s0(y, R) {
      for (var k = y == null ? 0 : y.length; k-- && R(y[k], k, y) !== !1; )
        ;
      return y;
    }
    function Ld(y, R) {
      for (var k = -1, I = y == null ? 0 : y.length; ++k < I; )
        if (!R(y[k], k, y))
          return !1;
      return !0;
    }
    function Jn(y, R) {
      for (var k = -1, I = y == null ? 0 : y.length, L = 0, ce = []; ++k < I; ) {
        var Je = y[k];
        R(Je, k, y) && (ce[L++] = Je);
      }
      return ce;
    }
    function ja(y, R) {
      var k = y == null ? 0 : y.length;
      return !!k && Er(y, R, 0) > -1;
    }
    function ul(y, R, k) {
      for (var I = -1, L = y == null ? 0 : y.length; ++I < L; )
        if (k(R, y[I]))
          return !0;
      return !1;
    }
    function Ne(y, R) {
      for (var k = -1, I = y == null ? 0 : y.length, L = Array(I); ++k < I; )
        L[k] = R(y[k], k, y);
      return L;
    }
    function An(y, R) {
      for (var k = -1, I = R.length, L = y.length; ++k < I; )
        y[L + k] = R[k];
      return y;
    }
    function dl(y, R, k, I) {
      var L = -1, ce = y == null ? 0 : y.length;
      for (I && ce && (k = y[++L]); ++L < ce; )
        k = R(k, y[L], L, y);
      return k;
    }
    function l0(y, R, k, I) {
      var L = y == null ? 0 : y.length;
      for (I && L && (k = y[--L]); L--; )
        k = R(k, y[L], L, y);
      return k;
    }
    function fl(y, R) {
      for (var k = -1, I = y == null ? 0 : y.length; ++k < I; )
        if (R(y[k], k, y))
          return !0;
      return !1;
    }
    var c0 = hl("length");
    function u0(y) {
      return y.split("");
    }
    function d0(y) {
      return y.match(gV) || [];
    }
    function qd(y, R, k) {
      var I;
      return k(y, function(L, ce, Je) {
        if (R(L, ce, Je))
          return I = ce, !1;
      }), I;
    }
    function $a(y, R, k, I) {
      for (var L = y.length, ce = k + (I ? 1 : -1); I ? ce-- : ++ce < L; )
        if (R(y[ce], ce, y))
          return ce;
      return -1;
    }
    function Er(y, R, k) {
      return R === R ? N0(y, R, k) : $a(y, Kd, k);
    }
    function f0(y, R, k, I) {
      for (var L = k - 1, ce = y.length; ++L < ce; )
        if (I(y[L], R))
          return L;
      return -1;
    }
    function Kd(y) {
      return y !== y;
    }
    function ef(y, R) {
      var k = y == null ? 0 : y.length;
      return k ? ml(y, R) / k : Ia;
    }
    function hl(y) {
      return function(R) {
        return R == null ? o : R[y];
      };
    }
    function pl(y) {
      return function(R) {
        return y == null ? o : y[R];
      };
    }
    function tf(y, R, k, I, L) {
      return L(y, function(ce, Je, ve) {
        k = I ? (I = !1, ce) : R(k, ce, Je, ve);
      }), k;
    }
    function h0(y, R) {
      var k = y.length;
      for (y.sort(R); k--; )
        y[k] = y[k].value;
      return y;
    }
    function ml(y, R) {
      for (var k, I = -1, L = y.length; ++I < L; ) {
        var ce = R(y[I]);
        ce !== o && (k = k === o ? ce : k + ce);
      }
      return k;
    }
    function wl(y, R) {
      for (var k = -1, I = Array(y); ++k < y; )
        I[k] = R(k);
      return I;
    }
    function p0(y, R) {
      return Ne(R, function(k) {
        return [k, y[k]];
      });
    }
    function nf(y) {
      return y && y.slice(0, sf(y) + 1).replace(nl, "");
    }
    function ht(y) {
      return function(R) {
        return y(R);
      };
    }
    function vl(y, R) {
      return Ne(R, function(k) {
        return y[k];
      });
    }
    function Fo(y, R) {
      return y.has(R);
    }
    function rf(y, R) {
      for (var k = -1, I = y.length; ++k < I && Er(R, y[k], 0) > -1; )
        ;
      return k;
    }
    function of(y, R) {
      for (var k = y.length; k-- && Er(R, y[k], 0) > -1; )
        ;
      return k;
    }
    function m0(y, R) {
      for (var k = y.length, I = 0; k--; )
        y[k] === R && ++I;
      return I;
    }
    var w0 = pl(KV), v0 = pl(e0);
    function V0(y) {
      return "\\" + n0[y];
    }
    function g0(y, R) {
      return y == null ? o : y[R];
    }
    function Jr(y) {
      return $V.test(y);
    }
    function T0(y) {
      return XV.test(y);
    }
    function U0(y) {
      for (var R, k = []; !(R = y.next()).done; )
        k.push(R.value);
      return k;
    }
    function Vl(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(I, L) {
        k[++R] = [L, I];
      }), k;
    }
    function af(y, R) {
      return function(k) {
        return y(R(k));
      };
    }
    function Fn(y, R) {
      for (var k = -1, I = y.length, L = 0, ce = []; ++k < I; ) {
        var Je = y[k];
        (Je === R || Je === V) && (y[k] = V, ce[L++] = k);
      }
      return ce;
    }
    function Xa(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(I) {
        k[++R] = I;
      }), k;
    }
    function y0(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(I) {
        k[++R] = [I, I];
      }), k;
    }
    function N0(y, R, k) {
      for (var I = k - 1, L = y.length; ++I < L; )
        if (y[I] === R)
          return I;
      return -1;
    }
    function k0(y, R, k) {
      for (var I = k + 1; I--; )
        if (y[I] === R)
          return I;
      return I;
    }
    function Ar(y) {
      return Jr(y) ? M0(y) : c0(y);
    }
    function Qt(y) {
      return Jr(y) ? b0(y) : u0(y);
    }
    function sf(y) {
      for (var R = y.length; R-- && mV.test(y.charAt(R)); )
        ;
      return R;
    }
    var R0 = pl(t0);
    function M0(y) {
      for (var R = sl.lastIndex = 0; sl.test(y); )
        ++R;
      return R;
    }
    function b0(y) {
      return y.match(sl) || [];
    }
    function Z0(y) {
      return y.match(jV) || [];
    }
    var S0 = function y(R) {
      R = R == null ? Oe : Fr.defaults(Oe.Object(), R, Fr.pick(Oe, LV));
      var k = R.Array, I = R.Date, L = R.Error, ce = R.Function, Je = R.Math, ve = R.Object, gl = R.RegExp, E0 = R.String, bt = R.TypeError, La = k.prototype, J0 = ce.prototype, Cr = ve.prototype, qa = R["__core-js_shared__"], Ka = J0.toString, he = Cr.hasOwnProperty, A0 = 0, lf = function() {
        var t = /[^.]+$/.exec(qa && qa.keys && qa.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ei = Cr.toString, F0 = Ka.call(ve), C0 = Oe._, W0 = gl(
        "^" + Ka.call(he).replace(tl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ti = Gd ? R.Buffer : o, Cn = R.Symbol, ni = R.Uint8Array, cf = ti ? ti.allocUnsafe : o, ri = af(ve.getPrototypeOf, ve), uf = ve.create, df = Cr.propertyIsEnumerable, oi = La.splice, ff = Cn ? Cn.isConcatSpreadable : o, Co = Cn ? Cn.iterator : o, tr = Cn ? Cn.toStringTag : o, ai = function() {
        try {
          var t = ir(ve, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), _0 = R.clearTimeout !== Oe.clearTimeout && R.clearTimeout, x0 = I && I.now !== Oe.Date.now && I.now, B0 = R.setTimeout !== Oe.setTimeout && R.setTimeout, ii = Je.ceil, si = Je.floor, Tl = ve.getOwnPropertySymbols, D0 = ti ? ti.isBuffer : o, hf = R.isFinite, I0 = La.join, O0 = af(ve.keys, ve), Ae = Je.max, Pe = Je.min, Q0 = I.now, z0 = R.parseInt, pf = Je.random, G0 = La.reverse, Ul = ir(R, "DataView"), Wo = ir(R, "Map"), yl = ir(R, "Promise"), Wr = ir(R, "Set"), _o = ir(R, "WeakMap"), xo = ir(ve, "create"), li = _o && new _o(), _r = {}, Y0 = sr(Ul), P0 = sr(Wo), H0 = sr(yl), j0 = sr(Wr), $0 = sr(_o), ci = Cn ? Cn.prototype : o, Bo = ci ? ci.valueOf : o, mf = ci ? ci.toString : o;
      function h(t) {
        if (Re(t) && !q(t) && !(t instanceof ae)) {
          if (t instanceof Zt)
            return t;
          if (he.call(t, "__wrapped__"))
            return wh(t);
        }
        return new Zt(t);
      }
      var xr = function() {
        function t() {
        }
        return function(n) {
          if (!ke(n))
            return {};
          if (uf)
            return uf(n);
          t.prototype = n;
          var a = new t();
          return t.prototype = o, a;
        };
      }();
      function ui() {
      }
      function Zt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: cV,
        evaluate: uV,
        interpolate: Nd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = ui.prototype, h.prototype.constructor = h, Zt.prototype = xr(ui.prototype), Zt.prototype.constructor = Zt;
      function ae(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = nn, this.__views__ = [];
      }
      function X0() {
        var t = new ae(this.__wrapped__);
        return t.__actions__ = rt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = rt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = rt(this.__views__), t;
      }
      function L0() {
        if (this.__filtered__) {
          var t = new ae(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function q0() {
        var t = this.__wrapped__.value(), n = this.__dir__, a = q(t), l = n < 0, u = a ? t.length : 0, p = uT(0, u, this.__views__), w = p.start, g = p.end, N = g - w, b = l ? g : w - 1, Z = this.__iteratees__, J = Z.length, x = 0, O = Pe(N, this.__takeCount__);
        if (!a || !l && u == N && O == N)
          return Df(t, this.__actions__);
        var P = [];
        e:
          for (; N-- && x < O; ) {
            b += n;
            for (var te = -1, H = t[b]; ++te < J; ) {
              var oe = Z[te], ie = oe.iteratee, wt = oe.type, et = ie(H);
              if (wt == de)
                H = et;
              else if (!et) {
                if (wt == ge)
                  continue e;
                break e;
              }
            }
            P[x++] = H;
          }
        return P;
      }
      ae.prototype = xr(ui.prototype), ae.prototype.constructor = ae;
      function nr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function K0() {
        this.__data__ = xo ? xo(null) : {}, this.size = 0;
      }
      function eg(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function tg(t) {
        var n = this.__data__;
        if (xo) {
          var a = n[t];
          return a === m ? o : a;
        }
        return he.call(n, t) ? n[t] : o;
      }
      function ng(t) {
        var n = this.__data__;
        return xo ? n[t] !== o : he.call(n, t);
      }
      function rg(t, n) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = xo && n === o ? m : n, this;
      }
      nr.prototype.clear = K0, nr.prototype.delete = eg, nr.prototype.get = tg, nr.prototype.has = ng, nr.prototype.set = rg;
      function mn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function og() {
        this.__data__ = [], this.size = 0;
      }
      function ag(t) {
        var n = this.__data__, a = di(n, t);
        if (a < 0)
          return !1;
        var l = n.length - 1;
        return a == l ? n.pop() : oi.call(n, a, 1), --this.size, !0;
      }
      function ig(t) {
        var n = this.__data__, a = di(n, t);
        return a < 0 ? o : n[a][1];
      }
      function sg(t) {
        return di(this.__data__, t) > -1;
      }
      function lg(t, n) {
        var a = this.__data__, l = di(a, t);
        return l < 0 ? (++this.size, a.push([t, n])) : a[l][1] = n, this;
      }
      mn.prototype.clear = og, mn.prototype.delete = ag, mn.prototype.get = ig, mn.prototype.has = sg, mn.prototype.set = lg;
      function wn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function cg() {
        this.size = 0, this.__data__ = {
          hash: new nr(),
          map: new (Wo || mn)(),
          string: new nr()
        };
      }
      function ug(t) {
        var n = Ni(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function dg(t) {
        return Ni(this, t).get(t);
      }
      function fg(t) {
        return Ni(this, t).has(t);
      }
      function hg(t, n) {
        var a = Ni(this, t), l = a.size;
        return a.set(t, n), this.size += a.size == l ? 0 : 1, this;
      }
      wn.prototype.clear = cg, wn.prototype.delete = ug, wn.prototype.get = dg, wn.prototype.has = fg, wn.prototype.set = hg;
      function rr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new wn(); ++n < a; )
          this.add(t[n]);
      }
      function pg(t) {
        return this.__data__.set(t, m), this;
      }
      function mg(t) {
        return this.__data__.has(t);
      }
      rr.prototype.add = rr.prototype.push = pg, rr.prototype.has = mg;
      function zt(t) {
        var n = this.__data__ = new mn(t);
        this.size = n.size;
      }
      function wg() {
        this.__data__ = new mn(), this.size = 0;
      }
      function vg(t) {
        var n = this.__data__, a = n.delete(t);
        return this.size = n.size, a;
      }
      function Vg(t) {
        return this.__data__.get(t);
      }
      function gg(t) {
        return this.__data__.has(t);
      }
      function Tg(t, n) {
        var a = this.__data__;
        if (a instanceof mn) {
          var l = a.__data__;
          if (!Wo || l.length < s - 1)
            return l.push([t, n]), this.size = ++a.size, this;
          a = this.__data__ = new wn(l);
        }
        return a.set(t, n), this.size = a.size, this;
      }
      zt.prototype.clear = wg, zt.prototype.delete = vg, zt.prototype.get = Vg, zt.prototype.has = gg, zt.prototype.set = Tg;
      function wf(t, n) {
        var a = q(t), l = !a && lr(t), u = !a && !l && Dn(t), p = !a && !l && !u && Or(t), w = a || l || u || p, g = w ? wl(t.length, E0) : [], N = g.length;
        for (var b in t)
          (n || he.call(t, b)) && !(w && (b == "length" || u && (b == "offset" || b == "parent") || p && (b == "buffer" || b == "byteLength" || b == "byteOffset") || Tn(b, N))) && g.push(b);
        return g;
      }
      function vf(t) {
        var n = t.length;
        return n ? t[Fl(0, n - 1)] : o;
      }
      function Ug(t, n) {
        return ki(rt(t), or(n, 0, t.length));
      }
      function yg(t) {
        return ki(rt(t));
      }
      function Nl(t, n, a) {
        (a !== o && !Gt(t[n], a) || a === o && !(n in t)) && vn(t, n, a);
      }
      function Do(t, n, a) {
        var l = t[n];
        (!(he.call(t, n) && Gt(l, a)) || a === o && !(n in t)) && vn(t, n, a);
      }
      function di(t, n) {
        for (var a = t.length; a--; )
          if (Gt(t[a][0], n))
            return a;
        return -1;
      }
      function Ng(t, n, a, l) {
        return Wn(t, function(u, p, w) {
          n(l, u, a(u), w);
        }), l;
      }
      function Vf(t, n) {
        return t && on(n, We(n), t);
      }
      function kg(t, n) {
        return t && on(n, at(n), t);
      }
      function vn(t, n, a) {
        n == "__proto__" && ai ? ai(t, n, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[n] = a;
      }
      function kl(t, n) {
        for (var a = -1, l = n.length, u = k(l), p = t == null; ++a < l; )
          u[a] = p ? o : oc(t, n[a]);
        return u;
      }
      function or(t, n, a) {
        return t === t && (a !== o && (t = t <= a ? t : a), n !== o && (t = t >= n ? t : n)), t;
      }
      function St(t, n, a, l, u, p) {
        var w, g = n & T, N = n & U, b = n & E;
        if (a && (w = u ? a(t, l, u, p) : a(t)), w !== o)
          return w;
        if (!ke(t))
          return t;
        var Z = q(t);
        if (Z) {
          if (w = fT(t), !g)
            return rt(t, w);
        } else {
          var J = He(t), x = J == za || J == gd;
          if (Dn(t))
            return Qf(t, g);
          if (J == pn || J == br || x && !u) {
            if (w = N || x ? {} : sh(t), !g)
              return N ? tT(t, kg(w, t)) : eT(t, Vf(w, t));
          } else {
            if (!Te[J])
              return u ? t : {};
            w = hT(t, J, g);
          }
        }
        p || (p = new zt());
        var O = p.get(t);
        if (O)
          return O;
        p.set(t, w), _h(t) ? t.forEach(function(H) {
          w.add(St(H, n, a, H, t, p));
        }) : Ch(t) && t.forEach(function(H, oe) {
          w.set(oe, St(H, n, a, oe, t, p));
        });
        var P = b ? N ? Gl : zl : N ? at : We, te = Z ? o : P(t);
        return Mt(te || t, function(H, oe) {
          te && (oe = H, H = t[oe]), Do(w, oe, St(H, n, a, oe, t, p));
        }), w;
      }
      function Rg(t) {
        var n = We(t);
        return function(a) {
          return gf(a, t, n);
        };
      }
      function gf(t, n, a) {
        var l = a.length;
        if (t == null)
          return !l;
        for (t = ve(t); l--; ) {
          var u = a[l], p = n[u], w = t[u];
          if (w === o && !(u in t) || !p(w))
            return !1;
        }
        return !0;
      }
      function Tf(t, n, a) {
        if (typeof t != "function")
          throw new bt(d);
        return Po(function() {
          t.apply(o, a);
        }, n);
      }
      function Io(t, n, a, l) {
        var u = -1, p = ja, w = !0, g = t.length, N = [], b = n.length;
        if (!g)
          return N;
        a && (n = Ne(n, ht(a))), l ? (p = ul, w = !1) : n.length >= s && (p = Fo, w = !1, n = new rr(n));
        e:
          for (; ++u < g; ) {
            var Z = t[u], J = a == null ? Z : a(Z);
            if (Z = l || Z !== 0 ? Z : 0, w && J === J) {
              for (var x = b; x--; )
                if (n[x] === J)
                  continue e;
              N.push(Z);
            } else
              p(n, J, l) || N.push(Z);
          }
        return N;
      }
      var Wn = Hf(rn), Uf = Hf(Ml, !0);
      function Mg(t, n) {
        var a = !0;
        return Wn(t, function(l, u, p) {
          return a = !!n(l, u, p), a;
        }), a;
      }
      function fi(t, n, a) {
        for (var l = -1, u = t.length; ++l < u; ) {
          var p = t[l], w = n(p);
          if (w != null && (g === o ? w === w && !mt(w) : a(w, g)))
            var g = w, N = p;
        }
        return N;
      }
      function bg(t, n, a, l) {
        var u = t.length;
        for (a = ee(a), a < 0 && (a = -a > u ? 0 : u + a), l = l === o || l > u ? u : ee(l), l < 0 && (l += u), l = a > l ? 0 : Bh(l); a < l; )
          t[a++] = n;
        return t;
      }
      function yf(t, n) {
        var a = [];
        return Wn(t, function(l, u, p) {
          n(l, u, p) && a.push(l);
        }), a;
      }
      function Qe(t, n, a, l, u) {
        var p = -1, w = t.length;
        for (a || (a = mT), u || (u = []); ++p < w; ) {
          var g = t[p];
          n > 0 && a(g) ? n > 1 ? Qe(g, n - 1, a, l, u) : An(u, g) : l || (u[u.length] = g);
        }
        return u;
      }
      var Rl = jf(), Nf = jf(!0);
      function rn(t, n) {
        return t && Rl(t, n, We);
      }
      function Ml(t, n) {
        return t && Nf(t, n, We);
      }
      function hi(t, n) {
        return Jn(n, function(a) {
          return Un(t[a]);
        });
      }
      function ar(t, n) {
        n = xn(n, t);
        for (var a = 0, l = n.length; t != null && a < l; )
          t = t[an(n[a++])];
        return a && a == l ? t : o;
      }
      function kf(t, n, a) {
        var l = n(t);
        return q(t) ? l : An(l, a(t));
      }
      function qe(t) {
        return t == null ? t === o ? nV : eV : tr && tr in ve(t) ? cT(t) : yT(t);
      }
      function bl(t, n) {
        return t > n;
      }
      function Zg(t, n) {
        return t != null && he.call(t, n);
      }
      function Sg(t, n) {
        return t != null && n in ve(t);
      }
      function Eg(t, n, a) {
        return t >= Pe(n, a) && t < Ae(n, a);
      }
      function Zl(t, n, a) {
        for (var l = a ? ul : ja, u = t[0].length, p = t.length, w = p, g = k(p), N = 1 / 0, b = []; w--; ) {
          var Z = t[w];
          w && n && (Z = Ne(Z, ht(n))), N = Pe(Z.length, N), g[w] = !a && (n || u >= 120 && Z.length >= 120) ? new rr(w && Z) : o;
        }
        Z = t[0];
        var J = -1, x = g[0];
        e:
          for (; ++J < u && b.length < N; ) {
            var O = Z[J], P = n ? n(O) : O;
            if (O = a || O !== 0 ? O : 0, !(x ? Fo(x, P) : l(b, P, a))) {
              for (w = p; --w; ) {
                var te = g[w];
                if (!(te ? Fo(te, P) : l(t[w], P, a)))
                  continue e;
              }
              x && x.push(P), b.push(O);
            }
          }
        return b;
      }
      function Jg(t, n, a, l) {
        return rn(t, function(u, p, w) {
          n(l, a(u), p, w);
        }), l;
      }
      function Oo(t, n, a) {
        n = xn(n, t), t = dh(t, n);
        var l = t == null ? t : t[an(Jt(n))];
        return l == null ? o : ft(l, t, a);
      }
      function Rf(t) {
        return Re(t) && qe(t) == br;
      }
      function Ag(t) {
        return Re(t) && qe(t) == Ao;
      }
      function Fg(t) {
        return Re(t) && qe(t) == bo;
      }
      function Qo(t, n, a, l, u) {
        return t === n ? !0 : t == null || n == null || !Re(t) && !Re(n) ? t !== t && n !== n : Cg(t, n, a, l, Qo, u);
      }
      function Cg(t, n, a, l, u, p) {
        var w = q(t), g = q(n), N = w ? Oa : He(t), b = g ? Oa : He(n);
        N = N == br ? pn : N, b = b == br ? pn : b;
        var Z = N == pn, J = b == pn, x = N == b;
        if (x && Dn(t)) {
          if (!Dn(n))
            return !1;
          w = !0, Z = !1;
        }
        if (x && !Z)
          return p || (p = new zt()), w || Or(t) ? oh(t, n, a, l, u, p) : sT(t, n, N, a, l, u, p);
        if (!(a & S)) {
          var O = Z && he.call(t, "__wrapped__"), P = J && he.call(n, "__wrapped__");
          if (O || P) {
            var te = O ? t.value() : t, H = P ? n.value() : n;
            return p || (p = new zt()), u(te, H, a, l, p);
          }
        }
        return x ? (p || (p = new zt()), lT(t, n, a, l, u, p)) : !1;
      }
      function Wg(t) {
        return Re(t) && He(t) == It;
      }
      function Sl(t, n, a, l) {
        var u = a.length, p = u, w = !l;
        if (t == null)
          return !p;
        for (t = ve(t); u--; ) {
          var g = a[u];
          if (w && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++u < p; ) {
          g = a[u];
          var N = g[0], b = t[N], Z = g[1];
          if (w && g[2]) {
            if (b === o && !(N in t))
              return !1;
          } else {
            var J = new zt();
            if (l)
              var x = l(b, Z, N, t, n, J);
            if (!(x === o ? Qo(Z, b, S | A, l, J) : x))
              return !1;
          }
        }
        return !0;
      }
      function Mf(t) {
        if (!ke(t) || vT(t))
          return !1;
        var n = Un(t) ? W0 : RV;
        return n.test(sr(t));
      }
      function _g(t) {
        return Re(t) && qe(t) == So;
      }
      function xg(t) {
        return Re(t) && He(t) == Ot;
      }
      function Bg(t) {
        return Re(t) && Ei(t.length) && !!ye[qe(t)];
      }
      function bf(t) {
        return typeof t == "function" ? t : t == null ? it : typeof t == "object" ? q(t) ? Ef(t[0], t[1]) : Sf(t) : $h(t);
      }
      function El(t) {
        if (!Yo(t))
          return O0(t);
        var n = [];
        for (var a in ve(t))
          he.call(t, a) && a != "constructor" && n.push(a);
        return n;
      }
      function Dg(t) {
        if (!ke(t))
          return UT(t);
        var n = Yo(t), a = [];
        for (var l in t)
          l == "constructor" && (n || !he.call(t, l)) || a.push(l);
        return a;
      }
      function Jl(t, n) {
        return t < n;
      }
      function Zf(t, n) {
        var a = -1, l = ot(t) ? k(t.length) : [];
        return Wn(t, function(u, p, w) {
          l[++a] = n(u, p, w);
        }), l;
      }
      function Sf(t) {
        var n = Pl(t);
        return n.length == 1 && n[0][2] ? ch(n[0][0], n[0][1]) : function(a) {
          return a === t || Sl(a, t, n);
        };
      }
      function Ef(t, n) {
        return jl(t) && lh(n) ? ch(an(t), n) : function(a) {
          var l = oc(a, t);
          return l === o && l === n ? ac(a, t) : Qo(n, l, S | A);
        };
      }
      function pi(t, n, a, l, u) {
        t !== n && Rl(n, function(p, w) {
          if (u || (u = new zt()), ke(p))
            Ig(t, n, w, a, pi, l, u);
          else {
            var g = l ? l(Xl(t, w), p, w + "", t, n, u) : o;
            g === o && (g = p), Nl(t, w, g);
          }
        }, at);
      }
      function Ig(t, n, a, l, u, p, w) {
        var g = Xl(t, a), N = Xl(n, a), b = w.get(N);
        if (b) {
          Nl(t, a, b);
          return;
        }
        var Z = p ? p(g, N, a + "", t, n, w) : o, J = Z === o;
        if (J) {
          var x = q(N), O = !x && Dn(N), P = !x && !O && Or(N);
          Z = N, x || O || P ? q(g) ? Z = g : Me(g) ? Z = rt(g) : O ? (J = !1, Z = Qf(N, !0)) : P ? (J = !1, Z = zf(N, !0)) : Z = [] : Ho(N) || lr(N) ? (Z = g, lr(g) ? Z = Dh(g) : (!ke(g) || Un(g)) && (Z = sh(N))) : J = !1;
        }
        J && (w.set(N, Z), u(Z, N, l, p, w), w.delete(N)), Nl(t, a, Z);
      }
      function Jf(t, n) {
        var a = t.length;
        if (!!a)
          return n += n < 0 ? a : 0, Tn(n, a) ? t[n] : o;
      }
      function Af(t, n, a) {
        n.length ? n = Ne(n, function(p) {
          return q(p) ? function(w) {
            return ar(w, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [it];
        var l = -1;
        n = Ne(n, ht(Y()));
        var u = Zf(t, function(p, w, g) {
          var N = Ne(n, function(b) {
            return b(p);
          });
          return { criteria: N, index: ++l, value: p };
        });
        return h0(u, function(p, w) {
          return Kg(p, w, a);
        });
      }
      function Og(t, n) {
        return Ff(t, n, function(a, l) {
          return ac(t, l);
        });
      }
      function Ff(t, n, a) {
        for (var l = -1, u = n.length, p = {}; ++l < u; ) {
          var w = n[l], g = ar(t, w);
          a(g, w) && zo(p, xn(w, t), g);
        }
        return p;
      }
      function Qg(t) {
        return function(n) {
          return ar(n, t);
        };
      }
      function Al(t, n, a, l) {
        var u = l ? f0 : Er, p = -1, w = n.length, g = t;
        for (t === n && (n = rt(n)), a && (g = Ne(t, ht(a))); ++p < w; )
          for (var N = 0, b = n[p], Z = a ? a(b) : b; (N = u(g, Z, N, l)) > -1; )
            g !== t && oi.call(g, N, 1), oi.call(t, N, 1);
        return t;
      }
      function Cf(t, n) {
        for (var a = t ? n.length : 0, l = a - 1; a--; ) {
          var u = n[a];
          if (a == l || u !== p) {
            var p = u;
            Tn(u) ? oi.call(t, u, 1) : _l(t, u);
          }
        }
        return t;
      }
      function Fl(t, n) {
        return t + si(pf() * (n - t + 1));
      }
      function zg(t, n, a, l) {
        for (var u = -1, p = Ae(ii((n - t) / (a || 1)), 0), w = k(p); p--; )
          w[l ? p : ++u] = t, t += a;
        return w;
      }
      function Cl(t, n) {
        var a = "";
        if (!t || n < 1 || n > Le)
          return a;
        do
          n % 2 && (a += t), n = si(n / 2), n && (t += t);
        while (n);
        return a;
      }
      function re(t, n) {
        return Ll(uh(t, n, it), t + "");
      }
      function Gg(t) {
        return vf(Qr(t));
      }
      function Yg(t, n) {
        var a = Qr(t);
        return ki(a, or(n, 0, a.length));
      }
      function zo(t, n, a, l) {
        if (!ke(t))
          return t;
        n = xn(n, t);
        for (var u = -1, p = n.length, w = p - 1, g = t; g != null && ++u < p; ) {
          var N = an(n[u]), b = a;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return t;
          if (u != w) {
            var Z = g[N];
            b = l ? l(Z, N, g) : o, b === o && (b = ke(Z) ? Z : Tn(n[u + 1]) ? [] : {});
          }
          Do(g, N, b), g = g[N];
        }
        return t;
      }
      var Wf = li ? function(t, n) {
        return li.set(t, n), t;
      } : it, Pg = ai ? function(t, n) {
        return ai(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: sc(n),
          writable: !0
        });
      } : it;
      function Hg(t) {
        return ki(Qr(t));
      }
      function Et(t, n, a) {
        var l = -1, u = t.length;
        n < 0 && (n = -n > u ? 0 : u + n), a = a > u ? u : a, a < 0 && (a += u), u = n > a ? 0 : a - n >>> 0, n >>>= 0;
        for (var p = k(u); ++l < u; )
          p[l] = t[l + n];
        return p;
      }
      function jg(t, n) {
        var a;
        return Wn(t, function(l, u, p) {
          return a = n(l, u, p), !a;
        }), !!a;
      }
      function mi(t, n, a) {
        var l = 0, u = t == null ? l : t.length;
        if (typeof n == "number" && n === n && u <= X1) {
          for (; l < u; ) {
            var p = l + u >>> 1, w = t[p];
            w !== null && !mt(w) && (a ? w <= n : w < n) ? l = p + 1 : u = p;
          }
          return u;
        }
        return Wl(t, n, it, a);
      }
      function Wl(t, n, a, l) {
        var u = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = a(n);
        for (var w = n !== n, g = n === null, N = mt(n), b = n === o; u < p; ) {
          var Z = si((u + p) / 2), J = a(t[Z]), x = J !== o, O = J === null, P = J === J, te = mt(J);
          if (w)
            var H = l || P;
          else
            b ? H = P && (l || x) : g ? H = P && x && (l || !O) : N ? H = P && x && !O && (l || !te) : O || te ? H = !1 : H = l ? J <= n : J < n;
          H ? u = Z + 1 : p = Z;
        }
        return Pe(p, $1);
      }
      function _f(t, n) {
        for (var a = -1, l = t.length, u = 0, p = []; ++a < l; ) {
          var w = t[a], g = n ? n(w) : w;
          if (!a || !Gt(g, N)) {
            var N = g;
            p[u++] = w === 0 ? 0 : w;
          }
        }
        return p;
      }
      function xf(t) {
        return typeof t == "number" ? t : mt(t) ? Ia : +t;
      }
      function pt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return Ne(t, pt) + "";
        if (mt(t))
          return mf ? mf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Ie ? "-0" : n;
      }
      function _n(t, n, a) {
        var l = -1, u = ja, p = t.length, w = !0, g = [], N = g;
        if (a)
          w = !1, u = ul;
        else if (p >= s) {
          var b = n ? null : aT(t);
          if (b)
            return Xa(b);
          w = !1, u = Fo, N = new rr();
        } else
          N = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var Z = t[l], J = n ? n(Z) : Z;
            if (Z = a || Z !== 0 ? Z : 0, w && J === J) {
              for (var x = N.length; x--; )
                if (N[x] === J)
                  continue e;
              n && N.push(J), g.push(Z);
            } else
              u(N, J, a) || (N !== g && N.push(J), g.push(Z));
          }
        return g;
      }
      function _l(t, n) {
        return n = xn(n, t), t = dh(t, n), t == null || delete t[an(Jt(n))];
      }
      function Bf(t, n, a, l) {
        return zo(t, n, a(ar(t, n)), l);
      }
      function wi(t, n, a, l) {
        for (var u = t.length, p = l ? u : -1; (l ? p-- : ++p < u) && n(t[p], p, t); )
          ;
        return a ? Et(t, l ? 0 : p, l ? p + 1 : u) : Et(t, l ? p + 1 : 0, l ? u : p);
      }
      function Df(t, n) {
        var a = t;
        return a instanceof ae && (a = a.value()), dl(n, function(l, u) {
          return u.func.apply(u.thisArg, An([l], u.args));
        }, a);
      }
      function xl(t, n, a) {
        var l = t.length;
        if (l < 2)
          return l ? _n(t[0]) : [];
        for (var u = -1, p = k(l); ++u < l; )
          for (var w = t[u], g = -1; ++g < l; )
            g != u && (p[u] = Io(p[u] || w, t[g], n, a));
        return _n(Qe(p, 1), n, a);
      }
      function If(t, n, a) {
        for (var l = -1, u = t.length, p = n.length, w = {}; ++l < u; ) {
          var g = l < p ? n[l] : o;
          a(w, t[l], g);
        }
        return w;
      }
      function Bl(t) {
        return Me(t) ? t : [];
      }
      function Dl(t) {
        return typeof t == "function" ? t : it;
      }
      function xn(t, n) {
        return q(t) ? t : jl(t, n) ? [t] : mh(fe(t));
      }
      var $g = re;
      function Bn(t, n, a) {
        var l = t.length;
        return a = a === o ? l : a, !n && a >= l ? t : Et(t, n, a);
      }
      var Of = _0 || function(t) {
        return Oe.clearTimeout(t);
      };
      function Qf(t, n) {
        if (n)
          return t.slice();
        var a = t.length, l = cf ? cf(a) : new t.constructor(a);
        return t.copy(l), l;
      }
      function Il(t) {
        var n = new t.constructor(t.byteLength);
        return new ni(n).set(new ni(t)), n;
      }
      function Xg(t, n) {
        var a = n ? Il(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function Lg(t) {
        var n = new t.constructor(t.source, kd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function qg(t) {
        return Bo ? ve(Bo.call(t)) : {};
      }
      function zf(t, n) {
        var a = n ? Il(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function Gf(t, n) {
        if (t !== n) {
          var a = t !== o, l = t === null, u = t === t, p = mt(t), w = n !== o, g = n === null, N = n === n, b = mt(n);
          if (!g && !b && !p && t > n || p && w && N && !g && !b || l && w && N || !a && N || !u)
            return 1;
          if (!l && !p && !b && t < n || b && a && u && !l && !p || g && a && u || !w && u || !N)
            return -1;
        }
        return 0;
      }
      function Kg(t, n, a) {
        for (var l = -1, u = t.criteria, p = n.criteria, w = u.length, g = a.length; ++l < w; ) {
          var N = Gf(u[l], p[l]);
          if (N) {
            if (l >= g)
              return N;
            var b = a[l];
            return N * (b == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Yf(t, n, a, l) {
        for (var u = -1, p = t.length, w = a.length, g = -1, N = n.length, b = Ae(p - w, 0), Z = k(N + b), J = !l; ++g < N; )
          Z[g] = n[g];
        for (; ++u < w; )
          (J || u < p) && (Z[a[u]] = t[u]);
        for (; b--; )
          Z[g++] = t[u++];
        return Z;
      }
      function Pf(t, n, a, l) {
        for (var u = -1, p = t.length, w = -1, g = a.length, N = -1, b = n.length, Z = Ae(p - g, 0), J = k(Z + b), x = !l; ++u < Z; )
          J[u] = t[u];
        for (var O = u; ++N < b; )
          J[O + N] = n[N];
        for (; ++w < g; )
          (x || u < p) && (J[O + a[w]] = t[u++]);
        return J;
      }
      function rt(t, n) {
        var a = -1, l = t.length;
        for (n || (n = k(l)); ++a < l; )
          n[a] = t[a];
        return n;
      }
      function on(t, n, a, l) {
        var u = !a;
        a || (a = {});
        for (var p = -1, w = n.length; ++p < w; ) {
          var g = n[p], N = l ? l(a[g], t[g], g, a, t) : o;
          N === o && (N = t[g]), u ? vn(a, g, N) : Do(a, g, N);
        }
        return a;
      }
      function eT(t, n) {
        return on(t, Hl(t), n);
      }
      function tT(t, n) {
        return on(t, ah(t), n);
      }
      function vi(t, n) {
        return function(a, l) {
          var u = q(a) ? i0 : Ng, p = n ? n() : {};
          return u(a, t, Y(l, 2), p);
        };
      }
      function Br(t) {
        return re(function(n, a) {
          var l = -1, u = a.length, p = u > 1 ? a[u - 1] : o, w = u > 2 ? a[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (u--, p) : o, w && Ke(a[0], a[1], w) && (p = u < 3 ? o : p, u = 1), n = ve(n); ++l < u; ) {
            var g = a[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function Hf(t, n) {
        return function(a, l) {
          if (a == null)
            return a;
          if (!ot(a))
            return t(a, l);
          for (var u = a.length, p = n ? u : -1, w = ve(a); (n ? p-- : ++p < u) && l(w[p], p, w) !== !1; )
            ;
          return a;
        };
      }
      function jf(t) {
        return function(n, a, l) {
          for (var u = -1, p = ve(n), w = l(n), g = w.length; g--; ) {
            var N = w[t ? g : ++u];
            if (a(p[N], N, p) === !1)
              break;
          }
          return n;
        };
      }
      function nT(t, n, a) {
        var l = n & W, u = Go(t);
        function p() {
          var w = this && this !== Oe && this instanceof p ? u : t;
          return w.apply(l ? a : this, arguments);
        }
        return p;
      }
      function $f(t) {
        return function(n) {
          n = fe(n);
          var a = Jr(n) ? Qt(n) : o, l = a ? a[0] : n.charAt(0), u = a ? Bn(a, 1).join("") : n.slice(1);
          return l[t]() + u;
        };
      }
      function Dr(t) {
        return function(n) {
          return dl(Hh(Ph(n).replace(PV, "")), t, "");
        };
      }
      function Go(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var a = xr(t.prototype), l = t.apply(a, n);
          return ke(l) ? l : a;
        };
      }
      function rT(t, n, a) {
        var l = Go(t);
        function u() {
          for (var p = arguments.length, w = k(p), g = p, N = Ir(u); g--; )
            w[g] = arguments[g];
          var b = p < 3 && w[0] !== N && w[p - 1] !== N ? [] : Fn(w, N);
          if (p -= b.length, p < a)
            return eh(
              t,
              n,
              Vi,
              u.placeholder,
              o,
              w,
              b,
              o,
              o,
              a - p
            );
          var Z = this && this !== Oe && this instanceof u ? l : t;
          return ft(Z, this, w);
        }
        return u;
      }
      function Xf(t) {
        return function(n, a, l) {
          var u = ve(n);
          if (!ot(n)) {
            var p = Y(a, 3);
            n = We(n), a = function(g) {
              return p(u[g], g, u);
            };
          }
          var w = t(n, a, l);
          return w > -1 ? u[p ? n[w] : w] : o;
        };
      }
      function Lf(t) {
        return gn(function(n) {
          var a = n.length, l = a, u = Zt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new bt(d);
            if (u && !w && yi(p) == "wrapper")
              var w = new Zt([], !0);
          }
          for (l = w ? l : a; ++l < a; ) {
            p = n[l];
            var g = yi(p), N = g == "wrapper" ? Yl(p) : o;
            N && $l(N[0]) && N[1] == (Q | C | M | B) && !N[4].length && N[9] == 1 ? w = w[yi(N[0])].apply(w, N[3]) : w = p.length == 1 && $l(p) ? w[g]() : w.thru(p);
          }
          return function() {
            var b = arguments, Z = b[0];
            if (w && b.length == 1 && q(Z))
              return w.plant(Z).value();
            for (var J = 0, x = a ? n[J].apply(this, b) : Z; ++J < a; )
              x = n[J].call(this, x);
            return x;
          };
        });
      }
      function Vi(t, n, a, l, u, p, w, g, N, b) {
        var Z = n & Q, J = n & W, x = n & F, O = n & (C | D), P = n & $, te = x ? o : Go(t);
        function H() {
          for (var oe = arguments.length, ie = k(oe), wt = oe; wt--; )
            ie[wt] = arguments[wt];
          if (O)
            var et = Ir(H), vt = m0(ie, et);
          if (l && (ie = Yf(ie, l, u, O)), p && (ie = Pf(ie, p, w, O)), oe -= vt, O && oe < b) {
            var be = Fn(ie, et);
            return eh(
              t,
              n,
              Vi,
              H.placeholder,
              a,
              ie,
              be,
              g,
              N,
              b - oe
            );
          }
          var Yt = J ? a : this, Nn = x ? Yt[t] : t;
          return oe = ie.length, g ? ie = NT(ie, g) : P && oe > 1 && ie.reverse(), Z && N < oe && (ie.length = N), this && this !== Oe && this instanceof H && (Nn = te || Go(Nn)), Nn.apply(Yt, ie);
        }
        return H;
      }
      function qf(t, n) {
        return function(a, l) {
          return Jg(a, t, n(l), {});
        };
      }
      function gi(t, n) {
        return function(a, l) {
          var u;
          if (a === o && l === o)
            return n;
          if (a !== o && (u = a), l !== o) {
            if (u === o)
              return l;
            typeof a == "string" || typeof l == "string" ? (a = pt(a), l = pt(l)) : (a = xf(a), l = xf(l)), u = t(a, l);
          }
          return u;
        };
      }
      function Ol(t) {
        return gn(function(n) {
          return n = Ne(n, ht(Y())), re(function(a) {
            var l = this;
            return t(n, function(u) {
              return ft(u, l, a);
            });
          });
        });
      }
      function Ti(t, n) {
        n = n === o ? " " : pt(n);
        var a = n.length;
        if (a < 2)
          return a ? Cl(n, t) : n;
        var l = Cl(n, ii(t / Ar(n)));
        return Jr(n) ? Bn(Qt(l), 0, t).join("") : l.slice(0, t);
      }
      function oT(t, n, a, l) {
        var u = n & W, p = Go(t);
        function w() {
          for (var g = -1, N = arguments.length, b = -1, Z = l.length, J = k(Z + N), x = this && this !== Oe && this instanceof w ? p : t; ++b < Z; )
            J[b] = l[b];
          for (; N--; )
            J[b++] = arguments[++g];
          return ft(x, u ? a : this, J);
        }
        return w;
      }
      function Kf(t) {
        return function(n, a, l) {
          return l && typeof l != "number" && Ke(n, a, l) && (a = l = o), n = yn(n), a === o ? (a = n, n = 0) : a = yn(a), l = l === o ? n < a ? 1 : -1 : yn(l), zg(n, a, l, t);
        };
      }
      function Ui(t) {
        return function(n, a) {
          return typeof n == "string" && typeof a == "string" || (n = At(n), a = At(a)), t(n, a);
        };
      }
      function eh(t, n, a, l, u, p, w, g, N, b) {
        var Z = n & C, J = Z ? w : o, x = Z ? o : w, O = Z ? p : o, P = Z ? o : p;
        n |= Z ? M : z, n &= ~(Z ? z : M), n & _ || (n &= ~(W | F));
        var te = [
          t,
          n,
          u,
          O,
          J,
          P,
          x,
          g,
          N,
          b
        ], H = a.apply(o, te);
        return $l(t) && fh(H, te), H.placeholder = l, hh(H, t, n);
      }
      function Ql(t) {
        var n = Je[t];
        return function(a, l) {
          if (a = At(a), l = l == null ? 0 : Pe(ee(l), 292), l && hf(a)) {
            var u = (fe(a) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + l));
            return u = (fe(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return n(a);
        };
      }
      var aT = Wr && 1 / Xa(new Wr([, -0]))[1] == Ie ? function(t) {
        return new Wr(t);
      } : uc;
      function th(t) {
        return function(n) {
          var a = He(n);
          return a == It ? Vl(n) : a == Ot ? y0(n) : p0(n, t(n));
        };
      }
      function Vn(t, n, a, l, u, p, w, g) {
        var N = n & F;
        if (!N && typeof t != "function")
          throw new bt(d);
        var b = l ? l.length : 0;
        if (b || (n &= ~(M | z), l = u = o), w = w === o ? w : Ae(ee(w), 0), g = g === o ? g : ee(g), b -= u ? u.length : 0, n & z) {
          var Z = l, J = u;
          l = u = o;
        }
        var x = N ? o : Yl(t), O = [
          t,
          n,
          a,
          l,
          u,
          Z,
          J,
          p,
          w,
          g
        ];
        if (x && TT(O, x), t = O[0], n = O[1], a = O[2], l = O[3], u = O[4], g = O[9] = O[9] === o ? N ? 0 : t.length : Ae(O[9] - b, 0), !g && n & (C | D) && (n &= ~(C | D)), !n || n == W)
          var P = nT(t, n, a);
        else
          n == C || n == D ? P = rT(t, n, g) : (n == M || n == (W | M)) && !u.length ? P = oT(t, n, a, l) : P = Vi.apply(o, O);
        var te = x ? Wf : fh;
        return hh(te(P, O), t, n);
      }
      function nh(t, n, a, l) {
        return t === o || Gt(t, Cr[a]) && !he.call(l, a) ? n : t;
      }
      function rh(t, n, a, l, u, p) {
        return ke(t) && ke(n) && (p.set(n, t), pi(t, n, o, rh, p), p.delete(n)), t;
      }
      function iT(t) {
        return Ho(t) ? o : t;
      }
      function oh(t, n, a, l, u, p) {
        var w = a & S, g = t.length, N = n.length;
        if (g != N && !(w && N > g))
          return !1;
        var b = p.get(t), Z = p.get(n);
        if (b && Z)
          return b == n && Z == t;
        var J = -1, x = !0, O = a & A ? new rr() : o;
        for (p.set(t, n), p.set(n, t); ++J < g; ) {
          var P = t[J], te = n[J];
          if (l)
            var H = w ? l(te, P, J, n, t, p) : l(P, te, J, t, n, p);
          if (H !== o) {
            if (H)
              continue;
            x = !1;
            break;
          }
          if (O) {
            if (!fl(n, function(oe, ie) {
              if (!Fo(O, ie) && (P === oe || u(P, oe, a, l, p)))
                return O.push(ie);
            })) {
              x = !1;
              break;
            }
          } else if (!(P === te || u(P, te, a, l, p))) {
            x = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), x;
      }
      function sT(t, n, a, l, u, p, w) {
        switch (a) {
          case Zr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Ao:
            return !(t.byteLength != n.byteLength || !p(new ni(t), new ni(n)));
          case Mo:
          case bo:
          case Zo:
            return Gt(+t, +n);
          case Qa:
            return t.name == n.name && t.message == n.message;
          case So:
          case Eo:
            return t == n + "";
          case It:
            var g = Vl;
          case Ot:
            var N = l & S;
            if (g || (g = Xa), t.size != n.size && !N)
              return !1;
            var b = w.get(t);
            if (b)
              return b == n;
            l |= A, w.set(t, n);
            var Z = oh(g(t), g(n), l, u, p, w);
            return w.delete(t), Z;
          case Ga:
            if (Bo)
              return Bo.call(t) == Bo.call(n);
        }
        return !1;
      }
      function lT(t, n, a, l, u, p) {
        var w = a & S, g = zl(t), N = g.length, b = zl(n), Z = b.length;
        if (N != Z && !w)
          return !1;
        for (var J = N; J--; ) {
          var x = g[J];
          if (!(w ? x in n : he.call(n, x)))
            return !1;
        }
        var O = p.get(t), P = p.get(n);
        if (O && P)
          return O == n && P == t;
        var te = !0;
        p.set(t, n), p.set(n, t);
        for (var H = w; ++J < N; ) {
          x = g[J];
          var oe = t[x], ie = n[x];
          if (l)
            var wt = w ? l(ie, oe, x, n, t, p) : l(oe, ie, x, t, n, p);
          if (!(wt === o ? oe === ie || u(oe, ie, a, l, p) : wt)) {
            te = !1;
            break;
          }
          H || (H = x == "constructor");
        }
        if (te && !H) {
          var et = t.constructor, vt = n.constructor;
          et != vt && "constructor" in t && "constructor" in n && !(typeof et == "function" && et instanceof et && typeof vt == "function" && vt instanceof vt) && (te = !1);
        }
        return p.delete(t), p.delete(n), te;
      }
      function gn(t) {
        return Ll(uh(t, o, gh), t + "");
      }
      function zl(t) {
        return kf(t, We, Hl);
      }
      function Gl(t) {
        return kf(t, at, ah);
      }
      var Yl = li ? function(t) {
        return li.get(t);
      } : uc;
      function yi(t) {
        for (var n = t.name + "", a = _r[n], l = he.call(_r, n) ? a.length : 0; l--; ) {
          var u = a[l], p = u.func;
          if (p == null || p == t)
            return u.name;
        }
        return n;
      }
      function Ir(t) {
        var n = he.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function Y() {
        var t = h.iteratee || lc;
        return t = t === lc ? bf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ni(t, n) {
        var a = t.__data__;
        return wT(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
      }
      function Pl(t) {
        for (var n = We(t), a = n.length; a--; ) {
          var l = n[a], u = t[l];
          n[a] = [l, u, lh(u)];
        }
        return n;
      }
      function ir(t, n) {
        var a = g0(t, n);
        return Mf(a) ? a : o;
      }
      function cT(t) {
        var n = he.call(t, tr), a = t[tr];
        try {
          t[tr] = o;
          var l = !0;
        } catch {
        }
        var u = ei.call(t);
        return l && (n ? t[tr] = a : delete t[tr]), u;
      }
      var Hl = Tl ? function(t) {
        return t == null ? [] : (t = ve(t), Jn(Tl(t), function(n) {
          return df.call(t, n);
        }));
      } : dc, ah = Tl ? function(t) {
        for (var n = []; t; )
          An(n, Hl(t)), t = ri(t);
        return n;
      } : dc, He = qe;
      (Ul && He(new Ul(new ArrayBuffer(1))) != Zr || Wo && He(new Wo()) != It || yl && He(yl.resolve()) != Td || Wr && He(new Wr()) != Ot || _o && He(new _o()) != Jo) && (He = function(t) {
        var n = qe(t), a = n == pn ? t.constructor : o, l = a ? sr(a) : "";
        if (l)
          switch (l) {
            case Y0:
              return Zr;
            case P0:
              return It;
            case H0:
              return Td;
            case j0:
              return Ot;
            case $0:
              return Jo;
          }
        return n;
      });
      function uT(t, n, a) {
        for (var l = -1, u = a.length; ++l < u; ) {
          var p = a[l], w = p.size;
          switch (p.type) {
            case "drop":
              t += w;
              break;
            case "dropRight":
              n -= w;
              break;
            case "take":
              n = Pe(n, t + w);
              break;
            case "takeRight":
              t = Ae(t, n - w);
              break;
          }
        }
        return { start: t, end: n };
      }
      function dT(t) {
        var n = t.match(vV);
        return n ? n[1].split(VV) : [];
      }
      function ih(t, n, a) {
        n = xn(n, t);
        for (var l = -1, u = n.length, p = !1; ++l < u; ) {
          var w = an(n[l]);
          if (!(p = t != null && a(t, w)))
            break;
          t = t[w];
        }
        return p || ++l != u ? p : (u = t == null ? 0 : t.length, !!u && Ei(u) && Tn(w, u) && (q(t) || lr(t)));
      }
      function fT(t) {
        var n = t.length, a = new t.constructor(n);
        return n && typeof t[0] == "string" && he.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function sh(t) {
        return typeof t.constructor == "function" && !Yo(t) ? xr(ri(t)) : {};
      }
      function hT(t, n, a) {
        var l = t.constructor;
        switch (n) {
          case Ao:
            return Il(t);
          case Mo:
          case bo:
            return new l(+t);
          case Zr:
            return Xg(t, a);
          case Ps:
          case Hs:
          case js:
          case $s:
          case Xs:
          case Ls:
          case qs:
          case Ks:
          case el:
            return zf(t, a);
          case It:
            return new l();
          case Zo:
          case Eo:
            return new l(t);
          case So:
            return Lg(t);
          case Ot:
            return new l();
          case Ga:
            return qg(t);
        }
      }
      function pT(t, n) {
        var a = n.length;
        if (!a)
          return t;
        var l = a - 1;
        return n[l] = (a > 1 ? "& " : "") + n[l], n = n.join(a > 2 ? ", " : " "), t.replace(wV, `{
/* [wrapped with ` + n + `] */
`);
      }
      function mT(t) {
        return q(t) || lr(t) || !!(ff && t && t[ff]);
      }
      function Tn(t, n) {
        var a = typeof t;
        return n = n == null ? Le : n, !!n && (a == "number" || a != "symbol" && bV.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ke(t, n, a) {
        if (!ke(a))
          return !1;
        var l = typeof n;
        return (l == "number" ? ot(a) && Tn(n, a.length) : l == "string" && n in a) ? Gt(a[n], t) : !1;
      }
      function jl(t, n) {
        if (q(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || mt(t) ? !0 : fV.test(t) || !dV.test(t) || n != null && t in ve(n);
      }
      function wT(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function $l(t) {
        var n = yi(t), a = h[n];
        if (typeof a != "function" || !(n in ae.prototype))
          return !1;
        if (t === a)
          return !0;
        var l = Yl(a);
        return !!l && t === l[0];
      }
      function vT(t) {
        return !!lf && lf in t;
      }
      var VT = qa ? Un : fc;
      function Yo(t) {
        var n = t && t.constructor, a = typeof n == "function" && n.prototype || Cr;
        return t === a;
      }
      function lh(t) {
        return t === t && !ke(t);
      }
      function ch(t, n) {
        return function(a) {
          return a == null ? !1 : a[t] === n && (n !== o || t in ve(a));
        };
      }
      function gT(t) {
        var n = Zi(t, function(l) {
          return a.size === v && a.clear(), l;
        }), a = n.cache;
        return n;
      }
      function TT(t, n) {
        var a = t[1], l = n[1], u = a | l, p = u < (W | F | Q), w = l == Q && a == C || l == Q && a == B && t[7].length <= n[8] || l == (Q | B) && n[7].length <= n[8] && a == C;
        if (!(p || w))
          return t;
        l & W && (t[2] = n[2], u |= a & W ? 0 : _);
        var g = n[3];
        if (g) {
          var N = t[3];
          t[3] = N ? Yf(N, g, n[4]) : g, t[4] = N ? Fn(t[3], V) : n[4];
        }
        return g = n[5], g && (N = t[5], t[5] = N ? Pf(N, g, n[6]) : g, t[6] = N ? Fn(t[5], V) : n[6]), g = n[7], g && (t[7] = g), l & Q && (t[8] = t[8] == null ? n[8] : Pe(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = u, t;
      }
      function UT(t) {
        var n = [];
        if (t != null)
          for (var a in ve(t))
            n.push(a);
        return n;
      }
      function yT(t) {
        return ei.call(t);
      }
      function uh(t, n, a) {
        return n = Ae(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, u = -1, p = Ae(l.length - n, 0), w = k(p); ++u < p; )
            w[u] = l[n + u];
          u = -1;
          for (var g = k(n + 1); ++u < n; )
            g[u] = l[u];
          return g[n] = a(w), ft(t, this, g);
        };
      }
      function dh(t, n) {
        return n.length < 2 ? t : ar(t, Et(n, 0, -1));
      }
      function NT(t, n) {
        for (var a = t.length, l = Pe(n.length, a), u = rt(t); l--; ) {
          var p = n[l];
          t[l] = Tn(p, a) ? u[p] : o;
        }
        return t;
      }
      function Xl(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var fh = ph(Wf), Po = B0 || function(t, n) {
        return Oe.setTimeout(t, n);
      }, Ll = ph(Pg);
      function hh(t, n, a) {
        var l = n + "";
        return Ll(t, pT(l, kT(dT(l), a)));
      }
      function ph(t) {
        var n = 0, a = 0;
        return function() {
          var l = Q0(), u = se - (l - a);
          if (a = l, u > 0) {
            if (++n >= G)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function ki(t, n) {
        var a = -1, l = t.length, u = l - 1;
        for (n = n === o ? l : n; ++a < n; ) {
          var p = Fl(a, u), w = t[p];
          t[p] = t[a], t[a] = w;
        }
        return t.length = n, t;
      }
      var mh = gT(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(hV, function(a, l, u, p) {
          n.push(u ? p.replace(UV, "$1") : l || a);
        }), n;
      });
      function an(t) {
        if (typeof t == "string" || mt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Ie ? "-0" : n;
      }
      function sr(t) {
        if (t != null) {
          try {
            return Ka.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function kT(t, n) {
        return Mt(L1, function(a) {
          var l = "_." + a[0];
          n & a[1] && !ja(t, l) && t.push(l);
        }), t.sort();
      }
      function wh(t) {
        if (t instanceof ae)
          return t.clone();
        var n = new Zt(t.__wrapped__, t.__chain__);
        return n.__actions__ = rt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function RT(t, n, a) {
        (a ? Ke(t, n, a) : n === o) ? n = 1 : n = Ae(ee(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var u = 0, p = 0, w = k(ii(l / n)); u < l; )
          w[p++] = Et(t, u, u += n);
        return w;
      }
      function MT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = 0, u = []; ++n < a; ) {
          var p = t[n];
          p && (u[l++] = p);
        }
        return u;
      }
      function bT() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = k(t - 1), a = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return An(q(a) ? rt(a) : [a], Qe(n, 1));
      }
      var ZT = re(function(t, n) {
        return Me(t) ? Io(t, Qe(n, 1, Me, !0)) : [];
      }), ST = re(function(t, n) {
        var a = Jt(n);
        return Me(a) && (a = o), Me(t) ? Io(t, Qe(n, 1, Me, !0), Y(a, 2)) : [];
      }), ET = re(function(t, n) {
        var a = Jt(n);
        return Me(a) && (a = o), Me(t) ? Io(t, Qe(n, 1, Me, !0), o, a) : [];
      });
      function JT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), Et(t, n < 0 ? 0 : n, l)) : [];
      }
      function AT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, Et(t, 0, n < 0 ? 0 : n)) : [];
      }
      function FT(t, n) {
        return t && t.length ? wi(t, Y(n, 3), !0, !0) : [];
      }
      function CT(t, n) {
        return t && t.length ? wi(t, Y(n, 3), !0) : [];
      }
      function WT(t, n, a, l) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && Ke(t, n, a) && (a = 0, l = u), bg(t, n, a, l)) : [];
      }
      function vh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Ae(l + u, 0)), $a(t, Y(n, 3), u);
      }
      function Vh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l - 1;
        return a !== o && (u = ee(a), u = a < 0 ? Ae(l + u, 0) : Pe(u, l - 1)), $a(t, Y(n, 3), u, !0);
      }
      function gh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, 1) : [];
      }
      function _T(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, Ie) : [];
      }
      function xT(t, n) {
        var a = t == null ? 0 : t.length;
        return a ? (n = n === o ? 1 : ee(n), Qe(t, n)) : [];
      }
      function BT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = {}; ++n < a; ) {
          var u = t[n];
          l[u[0]] = u[1];
        }
        return l;
      }
      function Th(t) {
        return t && t.length ? t[0] : o;
      }
      function DT(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Ae(l + u, 0)), Er(t, n, u);
      }
      function IT(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, 0, -1) : [];
      }
      var OT = re(function(t) {
        var n = Ne(t, Bl);
        return n.length && n[0] === t[0] ? Zl(n) : [];
      }), QT = re(function(t) {
        var n = Jt(t), a = Ne(t, Bl);
        return n === Jt(a) ? n = o : a.pop(), a.length && a[0] === t[0] ? Zl(a, Y(n, 2)) : [];
      }), zT = re(function(t) {
        var n = Jt(t), a = Ne(t, Bl);
        return n = typeof n == "function" ? n : o, n && a.pop(), a.length && a[0] === t[0] ? Zl(a, o, n) : [];
      });
      function GT(t, n) {
        return t == null ? "" : I0.call(t, n);
      }
      function Jt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function YT(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l;
        return a !== o && (u = ee(a), u = u < 0 ? Ae(l + u, 0) : Pe(u, l - 1)), n === n ? k0(t, n, u) : $a(t, Kd, u, !0);
      }
      function PT(t, n) {
        return t && t.length ? Jf(t, ee(n)) : o;
      }
      var HT = re(Uh);
      function Uh(t, n) {
        return t && t.length && n && n.length ? Al(t, n) : t;
      }
      function jT(t, n, a) {
        return t && t.length && n && n.length ? Al(t, n, Y(a, 2)) : t;
      }
      function $T(t, n, a) {
        return t && t.length && n && n.length ? Al(t, n, o, a) : t;
      }
      var XT = gn(function(t, n) {
        var a = t == null ? 0 : t.length, l = kl(t, n);
        return Cf(t, Ne(n, function(u) {
          return Tn(u, a) ? +u : u;
        }).sort(Gf)), l;
      });
      function LT(t, n) {
        var a = [];
        if (!(t && t.length))
          return a;
        var l = -1, u = [], p = t.length;
        for (n = Y(n, 3); ++l < p; ) {
          var w = t[l];
          n(w, l, t) && (a.push(w), u.push(l));
        }
        return Cf(t, u), a;
      }
      function ql(t) {
        return t == null ? t : G0.call(t);
      }
      function qT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (a && typeof a != "number" && Ke(t, n, a) ? (n = 0, a = l) : (n = n == null ? 0 : ee(n), a = a === o ? l : ee(a)), Et(t, n, a)) : [];
      }
      function KT(t, n) {
        return mi(t, n);
      }
      function eU(t, n, a) {
        return Wl(t, n, Y(a, 2));
      }
      function tU(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = mi(t, n);
          if (l < a && Gt(t[l], n))
            return l;
        }
        return -1;
      }
      function nU(t, n) {
        return mi(t, n, !0);
      }
      function rU(t, n, a) {
        return Wl(t, n, Y(a, 2), !0);
      }
      function oU(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = mi(t, n, !0) - 1;
          if (Gt(t[l], n))
            return l;
        }
        return -1;
      }
      function aU(t) {
        return t && t.length ? _f(t) : [];
      }
      function iU(t, n) {
        return t && t.length ? _f(t, Y(n, 2)) : [];
      }
      function sU(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, 1, n) : [];
      }
      function lU(t, n, a) {
        return t && t.length ? (n = a || n === o ? 1 : ee(n), Et(t, 0, n < 0 ? 0 : n)) : [];
      }
      function cU(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, Et(t, n < 0 ? 0 : n, l)) : [];
      }
      function uU(t, n) {
        return t && t.length ? wi(t, Y(n, 3), !1, !0) : [];
      }
      function dU(t, n) {
        return t && t.length ? wi(t, Y(n, 3)) : [];
      }
      var fU = re(function(t) {
        return _n(Qe(t, 1, Me, !0));
      }), hU = re(function(t) {
        var n = Jt(t);
        return Me(n) && (n = o), _n(Qe(t, 1, Me, !0), Y(n, 2));
      }), pU = re(function(t) {
        var n = Jt(t);
        return n = typeof n == "function" ? n : o, _n(Qe(t, 1, Me, !0), o, n);
      });
      function mU(t) {
        return t && t.length ? _n(t) : [];
      }
      function wU(t, n) {
        return t && t.length ? _n(t, Y(n, 2)) : [];
      }
      function vU(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? _n(t, o, n) : [];
      }
      function Kl(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Jn(t, function(a) {
          if (Me(a))
            return n = Ae(a.length, n), !0;
        }), wl(n, function(a) {
          return Ne(t, hl(a));
        });
      }
      function yh(t, n) {
        if (!(t && t.length))
          return [];
        var a = Kl(t);
        return n == null ? a : Ne(a, function(l) {
          return ft(n, o, l);
        });
      }
      var VU = re(function(t, n) {
        return Me(t) ? Io(t, n) : [];
      }), gU = re(function(t) {
        return xl(Jn(t, Me));
      }), TU = re(function(t) {
        var n = Jt(t);
        return Me(n) && (n = o), xl(Jn(t, Me), Y(n, 2));
      }), UU = re(function(t) {
        var n = Jt(t);
        return n = typeof n == "function" ? n : o, xl(Jn(t, Me), o, n);
      }), yU = re(Kl);
      function NU(t, n) {
        return If(t || [], n || [], Do);
      }
      function kU(t, n) {
        return If(t || [], n || [], zo);
      }
      var RU = re(function(t) {
        var n = t.length, a = n > 1 ? t[n - 1] : o;
        return a = typeof a == "function" ? (t.pop(), a) : o, yh(t, a);
      });
      function Nh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function MU(t, n) {
        return n(t), t;
      }
      function Ri(t, n) {
        return n(t);
      }
      var bU = gn(function(t) {
        var n = t.length, a = n ? t[0] : 0, l = this.__wrapped__, u = function(p) {
          return kl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ae) || !Tn(a) ? this.thru(u) : (l = l.slice(a, +a + (n ? 1 : 0)), l.__actions__.push({
          func: Ri,
          args: [u],
          thisArg: o
        }), new Zt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function ZU() {
        return Nh(this);
      }
      function SU() {
        return new Zt(this.value(), this.__chain__);
      }
      function EU() {
        this.__values__ === o && (this.__values__ = xh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function JU() {
        return this;
      }
      function AU(t) {
        for (var n, a = this; a instanceof ui; ) {
          var l = wh(a);
          l.__index__ = 0, l.__values__ = o, n ? u.__wrapped__ = l : n = l;
          var u = l;
          a = a.__wrapped__;
        }
        return u.__wrapped__ = t, n;
      }
      function FU() {
        var t = this.__wrapped__;
        if (t instanceof ae) {
          var n = t;
          return this.__actions__.length && (n = new ae(this)), n = n.reverse(), n.__actions__.push({
            func: Ri,
            args: [ql],
            thisArg: o
          }), new Zt(n, this.__chain__);
        }
        return this.thru(ql);
      }
      function CU() {
        return Df(this.__wrapped__, this.__actions__);
      }
      var WU = vi(function(t, n, a) {
        he.call(t, a) ? ++t[a] : vn(t, a, 1);
      });
      function _U(t, n, a) {
        var l = q(t) ? Ld : Mg;
        return a && Ke(t, n, a) && (n = o), l(t, Y(n, 3));
      }
      function xU(t, n) {
        var a = q(t) ? Jn : yf;
        return a(t, Y(n, 3));
      }
      var BU = Xf(vh), DU = Xf(Vh);
      function IU(t, n) {
        return Qe(Mi(t, n), 1);
      }
      function OU(t, n) {
        return Qe(Mi(t, n), Ie);
      }
      function QU(t, n, a) {
        return a = a === o ? 1 : ee(a), Qe(Mi(t, n), a);
      }
      function kh(t, n) {
        var a = q(t) ? Mt : Wn;
        return a(t, Y(n, 3));
      }
      function Rh(t, n) {
        var a = q(t) ? s0 : Uf;
        return a(t, Y(n, 3));
      }
      var zU = vi(function(t, n, a) {
        he.call(t, a) ? t[a].push(n) : vn(t, a, [n]);
      });
      function GU(t, n, a, l) {
        t = ot(t) ? t : Qr(t), a = a && !l ? ee(a) : 0;
        var u = t.length;
        return a < 0 && (a = Ae(u + a, 0)), Ji(t) ? a <= u && t.indexOf(n, a) > -1 : !!u && Er(t, n, a) > -1;
      }
      var YU = re(function(t, n, a) {
        var l = -1, u = typeof n == "function", p = ot(t) ? k(t.length) : [];
        return Wn(t, function(w) {
          p[++l] = u ? ft(n, w, a) : Oo(w, n, a);
        }), p;
      }), PU = vi(function(t, n, a) {
        vn(t, a, n);
      });
      function Mi(t, n) {
        var a = q(t) ? Ne : Zf;
        return a(t, Y(n, 3));
      }
      function HU(t, n, a, l) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), a = l ? o : a, q(a) || (a = a == null ? [] : [a]), Af(t, n, a));
      }
      var jU = vi(function(t, n, a) {
        t[a ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function $U(t, n, a) {
        var l = q(t) ? dl : tf, u = arguments.length < 3;
        return l(t, Y(n, 4), a, u, Wn);
      }
      function XU(t, n, a) {
        var l = q(t) ? l0 : tf, u = arguments.length < 3;
        return l(t, Y(n, 4), a, u, Uf);
      }
      function LU(t, n) {
        var a = q(t) ? Jn : yf;
        return a(t, Si(Y(n, 3)));
      }
      function qU(t) {
        var n = q(t) ? vf : Gg;
        return n(t);
      }
      function KU(t, n, a) {
        (a ? Ke(t, n, a) : n === o) ? n = 1 : n = ee(n);
        var l = q(t) ? Ug : Yg;
        return l(t, n);
      }
      function ey(t) {
        var n = q(t) ? yg : Hg;
        return n(t);
      }
      function ty(t) {
        if (t == null)
          return 0;
        if (ot(t))
          return Ji(t) ? Ar(t) : t.length;
        var n = He(t);
        return n == It || n == Ot ? t.size : El(t).length;
      }
      function ny(t, n, a) {
        var l = q(t) ? fl : jg;
        return a && Ke(t, n, a) && (n = o), l(t, Y(n, 3));
      }
      var ry = re(function(t, n) {
        if (t == null)
          return [];
        var a = n.length;
        return a > 1 && Ke(t, n[0], n[1]) ? n = [] : a > 2 && Ke(n[0], n[1], n[2]) && (n = [n[0]]), Af(t, Qe(n, 1), []);
      }), bi = x0 || function() {
        return Oe.Date.now();
      };
      function oy(t, n) {
        if (typeof n != "function")
          throw new bt(d);
        return t = ee(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Mh(t, n, a) {
        return n = a ? o : n, n = t && n == null ? t.length : n, Vn(t, Q, o, o, o, o, n);
      }
      function bh(t, n) {
        var a;
        if (typeof n != "function")
          throw new bt(d);
        return t = ee(t), function() {
          return --t > 0 && (a = n.apply(this, arguments)), t <= 1 && (n = o), a;
        };
      }
      var ec = re(function(t, n, a) {
        var l = W;
        if (a.length) {
          var u = Fn(a, Ir(ec));
          l |= M;
        }
        return Vn(t, l, n, a, u);
      }), Zh = re(function(t, n, a) {
        var l = W | F;
        if (a.length) {
          var u = Fn(a, Ir(Zh));
          l |= M;
        }
        return Vn(n, l, t, a, u);
      });
      function Sh(t, n, a) {
        n = a ? o : n;
        var l = Vn(t, C, o, o, o, o, o, n);
        return l.placeholder = Sh.placeholder, l;
      }
      function Eh(t, n, a) {
        n = a ? o : n;
        var l = Vn(t, D, o, o, o, o, o, n);
        return l.placeholder = Eh.placeholder, l;
      }
      function Jh(t, n, a) {
        var l, u, p, w, g, N, b = 0, Z = !1, J = !1, x = !0;
        if (typeof t != "function")
          throw new bt(d);
        n = At(n) || 0, ke(a) && (Z = !!a.leading, J = "maxWait" in a, p = J ? Ae(At(a.maxWait) || 0, n) : p, x = "trailing" in a ? !!a.trailing : x);
        function O(be) {
          var Yt = l, Nn = u;
          return l = u = o, b = be, w = t.apply(Nn, Yt), w;
        }
        function P(be) {
          return b = be, g = Po(oe, n), Z ? O(be) : w;
        }
        function te(be) {
          var Yt = be - N, Nn = be - b, Xh = n - Yt;
          return J ? Pe(Xh, p - Nn) : Xh;
        }
        function H(be) {
          var Yt = be - N, Nn = be - b;
          return N === o || Yt >= n || Yt < 0 || J && Nn >= p;
        }
        function oe() {
          var be = bi();
          if (H(be))
            return ie(be);
          g = Po(oe, te(be));
        }
        function ie(be) {
          return g = o, x && l ? O(be) : (l = u = o, w);
        }
        function wt() {
          g !== o && Of(g), b = 0, l = N = u = g = o;
        }
        function et() {
          return g === o ? w : ie(bi());
        }
        function vt() {
          var be = bi(), Yt = H(be);
          if (l = arguments, u = this, N = be, Yt) {
            if (g === o)
              return P(N);
            if (J)
              return Of(g), g = Po(oe, n), O(N);
          }
          return g === o && (g = Po(oe, n)), w;
        }
        return vt.cancel = wt, vt.flush = et, vt;
      }
      var ay = re(function(t, n) {
        return Tf(t, 1, n);
      }), iy = re(function(t, n, a) {
        return Tf(t, At(n) || 0, a);
      });
      function sy(t) {
        return Vn(t, $);
      }
      function Zi(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new bt(d);
        var a = function() {
          var l = arguments, u = n ? n.apply(this, l) : l[0], p = a.cache;
          if (p.has(u))
            return p.get(u);
          var w = t.apply(this, l);
          return a.cache = p.set(u, w) || p, w;
        };
        return a.cache = new (Zi.Cache || wn)(), a;
      }
      Zi.Cache = wn;
      function Si(t) {
        if (typeof t != "function")
          throw new bt(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function ly(t) {
        return bh(2, t);
      }
      var cy = $g(function(t, n) {
        n = n.length == 1 && q(n[0]) ? Ne(n[0], ht(Y())) : Ne(Qe(n, 1), ht(Y()));
        var a = n.length;
        return re(function(l) {
          for (var u = -1, p = Pe(l.length, a); ++u < p; )
            l[u] = n[u].call(this, l[u]);
          return ft(t, this, l);
        });
      }), tc = re(function(t, n) {
        var a = Fn(n, Ir(tc));
        return Vn(t, M, o, n, a);
      }), Ah = re(function(t, n) {
        var a = Fn(n, Ir(Ah));
        return Vn(t, z, o, n, a);
      }), uy = gn(function(t, n) {
        return Vn(t, B, o, o, o, n);
      });
      function dy(t, n) {
        if (typeof t != "function")
          throw new bt(d);
        return n = n === o ? n : ee(n), re(t, n);
      }
      function fy(t, n) {
        if (typeof t != "function")
          throw new bt(d);
        return n = n == null ? 0 : Ae(ee(n), 0), re(function(a) {
          var l = a[n], u = Bn(a, 0, n);
          return l && An(u, l), ft(t, this, u);
        });
      }
      function hy(t, n, a) {
        var l = !0, u = !0;
        if (typeof t != "function")
          throw new bt(d);
        return ke(a) && (l = "leading" in a ? !!a.leading : l, u = "trailing" in a ? !!a.trailing : u), Jh(t, n, {
          leading: l,
          maxWait: n,
          trailing: u
        });
      }
      function py(t) {
        return Mh(t, 1);
      }
      function my(t, n) {
        return tc(Dl(n), t);
      }
      function wy() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function vy(t) {
        return St(t, E);
      }
      function Vy(t, n) {
        return n = typeof n == "function" ? n : o, St(t, E, n);
      }
      function gy(t) {
        return St(t, T | E);
      }
      function Ty(t, n) {
        return n = typeof n == "function" ? n : o, St(t, T | E, n);
      }
      function Uy(t, n) {
        return n == null || gf(t, n, We(n));
      }
      function Gt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var yy = Ui(bl), Ny = Ui(function(t, n) {
        return t >= n;
      }), lr = Rf(function() {
        return arguments;
      }()) ? Rf : function(t) {
        return Re(t) && he.call(t, "callee") && !df.call(t, "callee");
      }, q = k.isArray, ky = Yd ? ht(Yd) : Ag;
      function ot(t) {
        return t != null && Ei(t.length) && !Un(t);
      }
      function Me(t) {
        return Re(t) && ot(t);
      }
      function Ry(t) {
        return t === !0 || t === !1 || Re(t) && qe(t) == Mo;
      }
      var Dn = D0 || fc, My = Pd ? ht(Pd) : Fg;
      function by(t) {
        return Re(t) && t.nodeType === 1 && !Ho(t);
      }
      function Zy(t) {
        if (t == null)
          return !0;
        if (ot(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || Dn(t) || Or(t) || lr(t)))
          return !t.length;
        var n = He(t);
        if (n == It || n == Ot)
          return !t.size;
        if (Yo(t))
          return !El(t).length;
        for (var a in t)
          if (he.call(t, a))
            return !1;
        return !0;
      }
      function Sy(t, n) {
        return Qo(t, n);
      }
      function Ey(t, n, a) {
        a = typeof a == "function" ? a : o;
        var l = a ? a(t, n) : o;
        return l === o ? Qo(t, n, o, a) : !!l;
      }
      function nc(t) {
        if (!Re(t))
          return !1;
        var n = qe(t);
        return n == Qa || n == K1 || typeof t.message == "string" && typeof t.name == "string" && !Ho(t);
      }
      function Jy(t) {
        return typeof t == "number" && hf(t);
      }
      function Un(t) {
        if (!ke(t))
          return !1;
        var n = qe(t);
        return n == za || n == gd || n == q1 || n == tV;
      }
      function Fh(t) {
        return typeof t == "number" && t == ee(t);
      }
      function Ei(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Le;
      }
      function ke(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Re(t) {
        return t != null && typeof t == "object";
      }
      var Ch = Hd ? ht(Hd) : Wg;
      function Ay(t, n) {
        return t === n || Sl(t, n, Pl(n));
      }
      function Fy(t, n, a) {
        return a = typeof a == "function" ? a : o, Sl(t, n, Pl(n), a);
      }
      function Cy(t) {
        return Wh(t) && t != +t;
      }
      function Wy(t) {
        if (VT(t))
          throw new L(c);
        return Mf(t);
      }
      function _y(t) {
        return t === null;
      }
      function xy(t) {
        return t == null;
      }
      function Wh(t) {
        return typeof t == "number" || Re(t) && qe(t) == Zo;
      }
      function Ho(t) {
        if (!Re(t) || qe(t) != pn)
          return !1;
        var n = ri(t);
        if (n === null)
          return !0;
        var a = he.call(n, "constructor") && n.constructor;
        return typeof a == "function" && a instanceof a && Ka.call(a) == F0;
      }
      var rc = jd ? ht(jd) : _g;
      function By(t) {
        return Fh(t) && t >= -Le && t <= Le;
      }
      var _h = $d ? ht($d) : xg;
      function Ji(t) {
        return typeof t == "string" || !q(t) && Re(t) && qe(t) == Eo;
      }
      function mt(t) {
        return typeof t == "symbol" || Re(t) && qe(t) == Ga;
      }
      var Or = Xd ? ht(Xd) : Bg;
      function Dy(t) {
        return t === o;
      }
      function Iy(t) {
        return Re(t) && He(t) == Jo;
      }
      function Oy(t) {
        return Re(t) && qe(t) == rV;
      }
      var Qy = Ui(Jl), zy = Ui(function(t, n) {
        return t <= n;
      });
      function xh(t) {
        if (!t)
          return [];
        if (ot(t))
          return Ji(t) ? Qt(t) : rt(t);
        if (Co && t[Co])
          return U0(t[Co]());
        var n = He(t), a = n == It ? Vl : n == Ot ? Xa : Qr;
        return a(t);
      }
      function yn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = At(t), t === Ie || t === -Ie) {
          var n = t < 0 ? -1 : 1;
          return n * Ro;
        }
        return t === t ? t : 0;
      }
      function ee(t) {
        var n = yn(t), a = n % 1;
        return n === n ? a ? n - a : n : 0;
      }
      function Bh(t) {
        return t ? or(ee(t), 0, nn) : 0;
      }
      function At(t) {
        if (typeof t == "number")
          return t;
        if (mt(t))
          return Ia;
        if (ke(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ke(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = nf(t);
        var a = kV.test(t);
        return a || MV.test(t) ? o0(t.slice(2), a ? 2 : 8) : NV.test(t) ? Ia : +t;
      }
      function Dh(t) {
        return on(t, at(t));
      }
      function Gy(t) {
        return t ? or(ee(t), -Le, Le) : t === 0 ? t : 0;
      }
      function fe(t) {
        return t == null ? "" : pt(t);
      }
      var Yy = Br(function(t, n) {
        if (Yo(n) || ot(n)) {
          on(n, We(n), t);
          return;
        }
        for (var a in n)
          he.call(n, a) && Do(t, a, n[a]);
      }), Ih = Br(function(t, n) {
        on(n, at(n), t);
      }), Ai = Br(function(t, n, a, l) {
        on(n, at(n), t, l);
      }), Py = Br(function(t, n, a, l) {
        on(n, We(n), t, l);
      }), Hy = gn(kl);
      function jy(t, n) {
        var a = xr(t);
        return n == null ? a : Vf(a, n);
      }
      var $y = re(function(t, n) {
        t = ve(t);
        var a = -1, l = n.length, u = l > 2 ? n[2] : o;
        for (u && Ke(n[0], n[1], u) && (l = 1); ++a < l; )
          for (var p = n[a], w = at(p), g = -1, N = w.length; ++g < N; ) {
            var b = w[g], Z = t[b];
            (Z === o || Gt(Z, Cr[b]) && !he.call(t, b)) && (t[b] = p[b]);
          }
        return t;
      }), Xy = re(function(t) {
        return t.push(o, rh), ft(Oh, o, t);
      });
      function Ly(t, n) {
        return qd(t, Y(n, 3), rn);
      }
      function qy(t, n) {
        return qd(t, Y(n, 3), Ml);
      }
      function Ky(t, n) {
        return t == null ? t : Rl(t, Y(n, 3), at);
      }
      function eN(t, n) {
        return t == null ? t : Nf(t, Y(n, 3), at);
      }
      function tN(t, n) {
        return t && rn(t, Y(n, 3));
      }
      function nN(t, n) {
        return t && Ml(t, Y(n, 3));
      }
      function rN(t) {
        return t == null ? [] : hi(t, We(t));
      }
      function oN(t) {
        return t == null ? [] : hi(t, at(t));
      }
      function oc(t, n, a) {
        var l = t == null ? o : ar(t, n);
        return l === o ? a : l;
      }
      function aN(t, n) {
        return t != null && ih(t, n, Zg);
      }
      function ac(t, n) {
        return t != null && ih(t, n, Sg);
      }
      var iN = qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = ei.call(n)), t[n] = a;
      }, sc(it)), sN = qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = ei.call(n)), he.call(t, n) ? t[n].push(a) : t[n] = [a];
      }, Y), lN = re(Oo);
      function We(t) {
        return ot(t) ? wf(t) : El(t);
      }
      function at(t) {
        return ot(t) ? wf(t, !0) : Dg(t);
      }
      function cN(t, n) {
        var a = {};
        return n = Y(n, 3), rn(t, function(l, u, p) {
          vn(a, n(l, u, p), l);
        }), a;
      }
      function uN(t, n) {
        var a = {};
        return n = Y(n, 3), rn(t, function(l, u, p) {
          vn(a, u, n(l, u, p));
        }), a;
      }
      var dN = Br(function(t, n, a) {
        pi(t, n, a);
      }), Oh = Br(function(t, n, a, l) {
        pi(t, n, a, l);
      }), fN = gn(function(t, n) {
        var a = {};
        if (t == null)
          return a;
        var l = !1;
        n = Ne(n, function(p) {
          return p = xn(p, t), l || (l = p.length > 1), p;
        }), on(t, Gl(t), a), l && (a = St(a, T | U | E, iT));
        for (var u = n.length; u--; )
          _l(a, n[u]);
        return a;
      });
      function hN(t, n) {
        return Qh(t, Si(Y(n)));
      }
      var pN = gn(function(t, n) {
        return t == null ? {} : Og(t, n);
      });
      function Qh(t, n) {
        if (t == null)
          return {};
        var a = Ne(Gl(t), function(l) {
          return [l];
        });
        return n = Y(n), Ff(t, a, function(l, u) {
          return n(l, u[0]);
        });
      }
      function mN(t, n, a) {
        n = xn(n, t);
        var l = -1, u = n.length;
        for (u || (u = 1, t = o); ++l < u; ) {
          var p = t == null ? o : t[an(n[l])];
          p === o && (l = u, p = a), t = Un(p) ? p.call(t) : p;
        }
        return t;
      }
      function wN(t, n, a) {
        return t == null ? t : zo(t, n, a);
      }
      function vN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : zo(t, n, a, l);
      }
      var zh = th(We), Gh = th(at);
      function VN(t, n, a) {
        var l = q(t), u = l || Dn(t) || Or(t);
        if (n = Y(n, 4), a == null) {
          var p = t && t.constructor;
          u ? a = l ? new p() : [] : ke(t) ? a = Un(p) ? xr(ri(t)) : {} : a = {};
        }
        return (u ? Mt : rn)(t, function(w, g, N) {
          return n(a, w, g, N);
        }), a;
      }
      function gN(t, n) {
        return t == null ? !0 : _l(t, n);
      }
      function TN(t, n, a) {
        return t == null ? t : Bf(t, n, Dl(a));
      }
      function UN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Bf(t, n, Dl(a), l);
      }
      function Qr(t) {
        return t == null ? [] : vl(t, We(t));
      }
      function yN(t) {
        return t == null ? [] : vl(t, at(t));
      }
      function NN(t, n, a) {
        return a === o && (a = n, n = o), a !== o && (a = At(a), a = a === a ? a : 0), n !== o && (n = At(n), n = n === n ? n : 0), or(At(t), n, a);
      }
      function kN(t, n, a) {
        return n = yn(n), a === o ? (a = n, n = 0) : a = yn(a), t = At(t), Eg(t, n, a);
      }
      function RN(t, n, a) {
        if (a && typeof a != "boolean" && Ke(t, n, a) && (n = a = o), a === o && (typeof n == "boolean" ? (a = n, n = o) : typeof t == "boolean" && (a = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = yn(t), n === o ? (n = t, t = 0) : n = yn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (a || t % 1 || n % 1) {
          var u = pf();
          return Pe(t + u * (n - t + r0("1e-" + ((u + "").length - 1))), n);
        }
        return Fl(t, n);
      }
      var MN = Dr(function(t, n, a) {
        return n = n.toLowerCase(), t + (a ? Yh(n) : n);
      });
      function Yh(t) {
        return ic(fe(t).toLowerCase());
      }
      function Ph(t) {
        return t = fe(t), t && t.replace(ZV, w0).replace(HV, "");
      }
      function bN(t, n, a) {
        t = fe(t), n = pt(n);
        var l = t.length;
        a = a === o ? l : or(ee(a), 0, l);
        var u = a;
        return a -= n.length, a >= 0 && t.slice(a, u) == n;
      }
      function ZN(t) {
        return t = fe(t), t && lV.test(t) ? t.replace(yd, v0) : t;
      }
      function SN(t) {
        return t = fe(t), t && pV.test(t) ? t.replace(tl, "\\$&") : t;
      }
      var EN = Dr(function(t, n, a) {
        return t + (a ? "-" : "") + n.toLowerCase();
      }), JN = Dr(function(t, n, a) {
        return t + (a ? " " : "") + n.toLowerCase();
      }), AN = $f("toLowerCase");
      function FN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        if (!n || l >= n)
          return t;
        var u = (n - l) / 2;
        return Ti(si(u), a) + t + Ti(ii(u), a);
      }
      function CN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        return n && l < n ? t + Ti(n - l, a) : t;
      }
      function WN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        return n && l < n ? Ti(n - l, a) + t : t;
      }
      function _N(t, n, a) {
        return a || n == null ? n = 0 : n && (n = +n), z0(fe(t).replace(nl, ""), n || 0);
      }
      function xN(t, n, a) {
        return (a ? Ke(t, n, a) : n === o) ? n = 1 : n = ee(n), Cl(fe(t), n);
      }
      function BN() {
        var t = arguments, n = fe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var DN = Dr(function(t, n, a) {
        return t + (a ? "_" : "") + n.toLowerCase();
      });
      function IN(t, n, a) {
        return a && typeof a != "number" && Ke(t, n, a) && (n = a = o), a = a === o ? nn : a >>> 0, a ? (t = fe(t), t && (typeof n == "string" || n != null && !rc(n)) && (n = pt(n), !n && Jr(t)) ? Bn(Qt(t), 0, a) : t.split(n, a)) : [];
      }
      var ON = Dr(function(t, n, a) {
        return t + (a ? " " : "") + ic(n);
      });
      function QN(t, n, a) {
        return t = fe(t), a = a == null ? 0 : or(ee(a), 0, t.length), n = pt(n), t.slice(a, a + n.length) == n;
      }
      function zN(t, n, a) {
        var l = h.templateSettings;
        a && Ke(t, n, a) && (n = o), t = fe(t), n = Ai({}, n, l, nh);
        var u = Ai({}, n.imports, l.imports, nh), p = We(u), w = vl(u, p), g, N, b = 0, Z = n.interpolate || Ya, J = "__p += '", x = gl(
          (n.escape || Ya).source + "|" + Z.source + "|" + (Z === Nd ? yV : Ya).source + "|" + (n.evaluate || Ya).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (he.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qV + "]") + `
`;
        t.replace(x, function(H, oe, ie, wt, et, vt) {
          return ie || (ie = wt), J += t.slice(b, vt).replace(SV, V0), oe && (g = !0, J += `' +
__e(` + oe + `) +
'`), et && (N = !0, J += `';
` + et + `;
__p += '`), ie && (J += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), b = vt + H.length, H;
        }), J += `';
`;
        var P = he.call(n, "variable") && n.variable;
        if (!P)
          J = `with (obj) {
` + J + `
}
`;
        else if (TV.test(P))
          throw new L(f);
        J = (N ? J.replace(oV, "") : J).replace(aV, "$1").replace(iV, "$1;"), J = "function(" + (P || "obj") + `) {
` + (P ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var te = jh(function() {
          return ce(p, O + "return " + J).apply(o, w);
        });
        if (te.source = J, nc(te))
          throw te;
        return te;
      }
      function GN(t) {
        return fe(t).toLowerCase();
      }
      function YN(t) {
        return fe(t).toUpperCase();
      }
      function PN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return nf(t);
        if (!t || !(n = pt(n)))
          return t;
        var l = Qt(t), u = Qt(n), p = rf(l, u), w = of(l, u) + 1;
        return Bn(l, p, w).join("");
      }
      function HN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.slice(0, sf(t) + 1);
        if (!t || !(n = pt(n)))
          return t;
        var l = Qt(t), u = of(l, Qt(n)) + 1;
        return Bn(l, 0, u).join("");
      }
      function jN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.replace(nl, "");
        if (!t || !(n = pt(n)))
          return t;
        var l = Qt(t), u = rf(l, Qt(n));
        return Bn(l, u).join("");
      }
      function $N(t, n) {
        var a = K, l = X;
        if (ke(n)) {
          var u = "separator" in n ? n.separator : u;
          a = "length" in n ? ee(n.length) : a, l = "omission" in n ? pt(n.omission) : l;
        }
        t = fe(t);
        var p = t.length;
        if (Jr(t)) {
          var w = Qt(t);
          p = w.length;
        }
        if (a >= p)
          return t;
        var g = a - Ar(l);
        if (g < 1)
          return l;
        var N = w ? Bn(w, 0, g).join("") : t.slice(0, g);
        if (u === o)
          return N + l;
        if (w && (g += N.length - g), rc(u)) {
          if (t.slice(g).search(u)) {
            var b, Z = N;
            for (u.global || (u = gl(u.source, fe(kd.exec(u)) + "g")), u.lastIndex = 0; b = u.exec(Z); )
              var J = b.index;
            N = N.slice(0, J === o ? g : J);
          }
        } else if (t.indexOf(pt(u), g) != g) {
          var x = N.lastIndexOf(u);
          x > -1 && (N = N.slice(0, x));
        }
        return N + l;
      }
      function XN(t) {
        return t = fe(t), t && sV.test(t) ? t.replace(Ud, R0) : t;
      }
      var LN = Dr(function(t, n, a) {
        return t + (a ? " " : "") + n.toUpperCase();
      }), ic = $f("toUpperCase");
      function Hh(t, n, a) {
        return t = fe(t), n = a ? o : n, n === o ? T0(t) ? Z0(t) : d0(t) : t.match(n) || [];
      }
      var jh = re(function(t, n) {
        try {
          return ft(t, o, n);
        } catch (a) {
          return nc(a) ? a : new L(a);
        }
      }), qN = gn(function(t, n) {
        return Mt(n, function(a) {
          a = an(a), vn(t, a, ec(t[a], t));
        }), t;
      });
      function KN(t) {
        var n = t == null ? 0 : t.length, a = Y();
        return t = n ? Ne(t, function(l) {
          if (typeof l[1] != "function")
            throw new bt(d);
          return [a(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var u = -1; ++u < n; ) {
            var p = t[u];
            if (ft(p[0], this, l))
              return ft(p[1], this, l);
          }
        });
      }
      function ek(t) {
        return Rg(St(t, T));
      }
      function sc(t) {
        return function() {
          return t;
        };
      }
      function tk(t, n) {
        return t == null || t !== t ? n : t;
      }
      var nk = Lf(), rk = Lf(!0);
      function it(t) {
        return t;
      }
      function lc(t) {
        return bf(typeof t == "function" ? t : St(t, T));
      }
      function ok(t) {
        return Sf(St(t, T));
      }
      function ak(t, n) {
        return Ef(t, St(n, T));
      }
      var ik = re(function(t, n) {
        return function(a) {
          return Oo(a, t, n);
        };
      }), sk = re(function(t, n) {
        return function(a) {
          return Oo(t, a, n);
        };
      });
      function cc(t, n, a) {
        var l = We(n), u = hi(n, l);
        a == null && !(ke(n) && (u.length || !l.length)) && (a = n, n = t, t = this, u = hi(n, We(n)));
        var p = !(ke(a) && "chain" in a) || !!a.chain, w = Un(t);
        return Mt(u, function(g) {
          var N = n[g];
          t[g] = N, w && (t.prototype[g] = function() {
            var b = this.__chain__;
            if (p || b) {
              var Z = t(this.__wrapped__), J = Z.__actions__ = rt(this.__actions__);
              return J.push({ func: N, args: arguments, thisArg: t }), Z.__chain__ = b, Z;
            }
            return N.apply(t, An([this.value()], arguments));
          });
        }), t;
      }
      function lk() {
        return Oe._ === this && (Oe._ = C0), this;
      }
      function uc() {
      }
      function ck(t) {
        return t = ee(t), re(function(n) {
          return Jf(n, t);
        });
      }
      var uk = Ol(Ne), dk = Ol(Ld), fk = Ol(fl);
      function $h(t) {
        return jl(t) ? hl(an(t)) : Qg(t);
      }
      function hk(t) {
        return function(n) {
          return t == null ? o : ar(t, n);
        };
      }
      var pk = Kf(), mk = Kf(!0);
      function dc() {
        return [];
      }
      function fc() {
        return !1;
      }
      function wk() {
        return {};
      }
      function vk() {
        return "";
      }
      function Vk() {
        return !0;
      }
      function gk(t, n) {
        if (t = ee(t), t < 1 || t > Le)
          return [];
        var a = nn, l = Pe(t, nn);
        n = Y(n), t -= nn;
        for (var u = wl(l, n); ++a < t; )
          n(a);
        return u;
      }
      function Tk(t) {
        return q(t) ? Ne(t, an) : mt(t) ? [t] : rt(mh(fe(t)));
      }
      function Uk(t) {
        var n = ++A0;
        return fe(t) + n;
      }
      var yk = gi(function(t, n) {
        return t + n;
      }, 0), Nk = Ql("ceil"), kk = gi(function(t, n) {
        return t / n;
      }, 1), Rk = Ql("floor");
      function Mk(t) {
        return t && t.length ? fi(t, it, bl) : o;
      }
      function bk(t, n) {
        return t && t.length ? fi(t, Y(n, 2), bl) : o;
      }
      function Zk(t) {
        return ef(t, it);
      }
      function Sk(t, n) {
        return ef(t, Y(n, 2));
      }
      function Ek(t) {
        return t && t.length ? fi(t, it, Jl) : o;
      }
      function Jk(t, n) {
        return t && t.length ? fi(t, Y(n, 2), Jl) : o;
      }
      var Ak = gi(function(t, n) {
        return t * n;
      }, 1), Fk = Ql("round"), Ck = gi(function(t, n) {
        return t - n;
      }, 0);
      function Wk(t) {
        return t && t.length ? ml(t, it) : 0;
      }
      function _k(t, n) {
        return t && t.length ? ml(t, Y(n, 2)) : 0;
      }
      return h.after = oy, h.ary = Mh, h.assign = Yy, h.assignIn = Ih, h.assignInWith = Ai, h.assignWith = Py, h.at = Hy, h.before = bh, h.bind = ec, h.bindAll = qN, h.bindKey = Zh, h.castArray = wy, h.chain = Nh, h.chunk = RT, h.compact = MT, h.concat = bT, h.cond = KN, h.conforms = ek, h.constant = sc, h.countBy = WU, h.create = jy, h.curry = Sh, h.curryRight = Eh, h.debounce = Jh, h.defaults = $y, h.defaultsDeep = Xy, h.defer = ay, h.delay = iy, h.difference = ZT, h.differenceBy = ST, h.differenceWith = ET, h.drop = JT, h.dropRight = AT, h.dropRightWhile = FT, h.dropWhile = CT, h.fill = WT, h.filter = xU, h.flatMap = IU, h.flatMapDeep = OU, h.flatMapDepth = QU, h.flatten = gh, h.flattenDeep = _T, h.flattenDepth = xT, h.flip = sy, h.flow = nk, h.flowRight = rk, h.fromPairs = BT, h.functions = rN, h.functionsIn = oN, h.groupBy = zU, h.initial = IT, h.intersection = OT, h.intersectionBy = QT, h.intersectionWith = zT, h.invert = iN, h.invertBy = sN, h.invokeMap = YU, h.iteratee = lc, h.keyBy = PU, h.keys = We, h.keysIn = at, h.map = Mi, h.mapKeys = cN, h.mapValues = uN, h.matches = ok, h.matchesProperty = ak, h.memoize = Zi, h.merge = dN, h.mergeWith = Oh, h.method = ik, h.methodOf = sk, h.mixin = cc, h.negate = Si, h.nthArg = ck, h.omit = fN, h.omitBy = hN, h.once = ly, h.orderBy = HU, h.over = uk, h.overArgs = cy, h.overEvery = dk, h.overSome = fk, h.partial = tc, h.partialRight = Ah, h.partition = jU, h.pick = pN, h.pickBy = Qh, h.property = $h, h.propertyOf = hk, h.pull = HT, h.pullAll = Uh, h.pullAllBy = jT, h.pullAllWith = $T, h.pullAt = XT, h.range = pk, h.rangeRight = mk, h.rearg = uy, h.reject = LU, h.remove = LT, h.rest = dy, h.reverse = ql, h.sampleSize = KU, h.set = wN, h.setWith = vN, h.shuffle = ey, h.slice = qT, h.sortBy = ry, h.sortedUniq = aU, h.sortedUniqBy = iU, h.split = IN, h.spread = fy, h.tail = sU, h.take = lU, h.takeRight = cU, h.takeRightWhile = uU, h.takeWhile = dU, h.tap = MU, h.throttle = hy, h.thru = Ri, h.toArray = xh, h.toPairs = zh, h.toPairsIn = Gh, h.toPath = Tk, h.toPlainObject = Dh, h.transform = VN, h.unary = py, h.union = fU, h.unionBy = hU, h.unionWith = pU, h.uniq = mU, h.uniqBy = wU, h.uniqWith = vU, h.unset = gN, h.unzip = Kl, h.unzipWith = yh, h.update = TN, h.updateWith = UN, h.values = Qr, h.valuesIn = yN, h.without = VU, h.words = Hh, h.wrap = my, h.xor = gU, h.xorBy = TU, h.xorWith = UU, h.zip = yU, h.zipObject = NU, h.zipObjectDeep = kU, h.zipWith = RU, h.entries = zh, h.entriesIn = Gh, h.extend = Ih, h.extendWith = Ai, cc(h, h), h.add = yk, h.attempt = jh, h.camelCase = MN, h.capitalize = Yh, h.ceil = Nk, h.clamp = NN, h.clone = vy, h.cloneDeep = gy, h.cloneDeepWith = Ty, h.cloneWith = Vy, h.conformsTo = Uy, h.deburr = Ph, h.defaultTo = tk, h.divide = kk, h.endsWith = bN, h.eq = Gt, h.escape = ZN, h.escapeRegExp = SN, h.every = _U, h.find = BU, h.findIndex = vh, h.findKey = Ly, h.findLast = DU, h.findLastIndex = Vh, h.findLastKey = qy, h.floor = Rk, h.forEach = kh, h.forEachRight = Rh, h.forIn = Ky, h.forInRight = eN, h.forOwn = tN, h.forOwnRight = nN, h.get = oc, h.gt = yy, h.gte = Ny, h.has = aN, h.hasIn = ac, h.head = Th, h.identity = it, h.includes = GU, h.indexOf = DT, h.inRange = kN, h.invoke = lN, h.isArguments = lr, h.isArray = q, h.isArrayBuffer = ky, h.isArrayLike = ot, h.isArrayLikeObject = Me, h.isBoolean = Ry, h.isBuffer = Dn, h.isDate = My, h.isElement = by, h.isEmpty = Zy, h.isEqual = Sy, h.isEqualWith = Ey, h.isError = nc, h.isFinite = Jy, h.isFunction = Un, h.isInteger = Fh, h.isLength = Ei, h.isMap = Ch, h.isMatch = Ay, h.isMatchWith = Fy, h.isNaN = Cy, h.isNative = Wy, h.isNil = xy, h.isNull = _y, h.isNumber = Wh, h.isObject = ke, h.isObjectLike = Re, h.isPlainObject = Ho, h.isRegExp = rc, h.isSafeInteger = By, h.isSet = _h, h.isString = Ji, h.isSymbol = mt, h.isTypedArray = Or, h.isUndefined = Dy, h.isWeakMap = Iy, h.isWeakSet = Oy, h.join = GT, h.kebabCase = EN, h.last = Jt, h.lastIndexOf = YT, h.lowerCase = JN, h.lowerFirst = AN, h.lt = Qy, h.lte = zy, h.max = Mk, h.maxBy = bk, h.mean = Zk, h.meanBy = Sk, h.min = Ek, h.minBy = Jk, h.stubArray = dc, h.stubFalse = fc, h.stubObject = wk, h.stubString = vk, h.stubTrue = Vk, h.multiply = Ak, h.nth = PT, h.noConflict = lk, h.noop = uc, h.now = bi, h.pad = FN, h.padEnd = CN, h.padStart = WN, h.parseInt = _N, h.random = RN, h.reduce = $U, h.reduceRight = XU, h.repeat = xN, h.replace = BN, h.result = mN, h.round = Fk, h.runInContext = y, h.sample = qU, h.size = ty, h.snakeCase = DN, h.some = ny, h.sortedIndex = KT, h.sortedIndexBy = eU, h.sortedIndexOf = tU, h.sortedLastIndex = nU, h.sortedLastIndexBy = rU, h.sortedLastIndexOf = oU, h.startCase = ON, h.startsWith = QN, h.subtract = Ck, h.sum = Wk, h.sumBy = _k, h.template = zN, h.times = gk, h.toFinite = yn, h.toInteger = ee, h.toLength = Bh, h.toLower = GN, h.toNumber = At, h.toSafeInteger = Gy, h.toString = fe, h.toUpper = YN, h.trim = PN, h.trimEnd = HN, h.trimStart = jN, h.truncate = $N, h.unescape = XN, h.uniqueId = Uk, h.upperCase = LN, h.upperFirst = ic, h.each = kh, h.eachRight = Rh, h.first = Th, cc(h, function() {
        var t = {};
        return rn(h, function(n, a) {
          he.call(h.prototype, a) || (t[a] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, Mt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Mt(["drop", "take"], function(t, n) {
        ae.prototype[t] = function(a) {
          a = a === o ? 1 : Ae(ee(a), 0);
          var l = this.__filtered__ && !n ? new ae(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Pe(a, l.__takeCount__) : l.__views__.push({
            size: Pe(a, nn),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ae.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), Mt(["filter", "map", "takeWhile"], function(t, n) {
        var a = n + 1, l = a == ge || a == De;
        ae.prototype[t] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Y(u, 3),
            type: a
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Mt(["head", "last"], function(t, n) {
        var a = "take" + (n ? "Right" : "");
        ae.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), Mt(["initial", "tail"], function(t, n) {
        var a = "drop" + (n ? "" : "Right");
        ae.prototype[t] = function() {
          return this.__filtered__ ? new ae(this) : this[a](1);
        };
      }), ae.prototype.compact = function() {
        return this.filter(it);
      }, ae.prototype.find = function(t) {
        return this.filter(t).head();
      }, ae.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ae.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ae(this) : this.map(function(a) {
          return Oo(a, t, n);
        });
      }), ae.prototype.reject = function(t) {
        return this.filter(Si(Y(t)));
      }, ae.prototype.slice = function(t, n) {
        t = ee(t);
        var a = this;
        return a.__filtered__ && (t > 0 || n < 0) ? new ae(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), n !== o && (n = ee(n), a = n < 0 ? a.dropRight(-n) : a.take(n - t)), a);
      }, ae.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ae.prototype.toArray = function() {
        return this.take(nn);
      }, rn(ae.prototype, function(t, n) {
        var a = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), u = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var w = this.__wrapped__, g = l ? [1] : arguments, N = w instanceof ae, b = g[0], Z = N || q(w), J = function(oe) {
            var ie = u.apply(h, An([oe], g));
            return l && x ? ie[0] : ie;
          };
          Z && a && typeof b == "function" && b.length != 1 && (N = Z = !1);
          var x = this.__chain__, O = !!this.__actions__.length, P = p && !x, te = N && !O;
          if (!p && Z) {
            w = te ? w : new ae(this);
            var H = t.apply(w, g);
            return H.__actions__.push({ func: Ri, args: [J], thisArg: o }), new Zt(H, x);
          }
          return P && te ? t.apply(this, g) : (H = this.thru(J), P ? l ? H.value()[0] : H.value() : H);
        });
      }), Mt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = La[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var u = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(q(p) ? p : [], u);
          }
          return this[a](function(w) {
            return n.apply(q(w) ? w : [], u);
          });
        };
      }), rn(ae.prototype, function(t, n) {
        var a = h[n];
        if (a) {
          var l = a.name + "";
          he.call(_r, l) || (_r[l] = []), _r[l].push({ name: n, func: a });
        }
      }), _r[Vi(o, F).name] = [{
        name: "wrapper",
        func: o
      }], ae.prototype.clone = X0, ae.prototype.reverse = L0, ae.prototype.value = q0, h.prototype.at = bU, h.prototype.chain = ZU, h.prototype.commit = SU, h.prototype.next = EU, h.prototype.plant = AU, h.prototype.reverse = FU, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = CU, h.prototype.first = h.prototype.head, Co && (h.prototype[Co] = JU), h;
    }, Fr = S0();
    er ? ((er.exports = Fr)._ = Fr, ll._ = Fr) : Oe._ = Fr;
  }).call(jo);
})(me, me.exports);
const nM = "/alarms?_s=", Js = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, rM = async (e, r) => {
  try {
    return (await hn.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      Js
    )).status === 204;
  } catch {
    return !1;
  }
}, oM = async (e, r) => {
  try {
    return (await hn.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      Js
    )).status === 204;
  } catch {
    return !1;
  }
}, aM = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await En.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      Js
    )).status == 204;
  } catch {
    return !1;
  }
}, iM = async () => {
  try {
    const e = `${nM}isSituation==true&limit=0`, r = await En(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, sM = async (e) => {
  try {
    const r = e.join(",id=="), o = await En(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, pv = async (e) => {
  try {
    const r = await En(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, lM = async (e) => {
  try {
    const r = await En(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, cM = async () => {
  try {
    const e = await En("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => me.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, uM = async (e, r, o) => {
  try {
    return (await En.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      Js
    )).status == 204;
  } catch {
    return !1;
  }
}, dM = async (e, r) => {
  try {
    return (await En.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, fM = async () => {
  try {
    const e = await En.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, hM = window.Pinia.defineStore, en = hM("situationsStore", {
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
      const e = await cM();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await iM();
      if (e) {
        const r = e.alarm.map((s) => {
          var c;
          return s.status = (c = s.parameters.filter(
            (d) => d.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, s;
        });
        this.filteredSituations = r.map((s) => s.id);
        const o = me.exports.groupBy(r, "status"), i = [
          ...o.CREATED || [],
          ...o.ACCEPTED || [],
          ...o.REJECTED || []
        ];
        this.situations = i;
      }
    },
    async getSituation(e) {
      var r, o;
      if (e) {
        const i = await pv(e);
        if (i) {
          const s = (r = i.relatedAlarms) == null ? void 0 : r.map((f) => f.id), d = await sM(s);
          i.status = (o = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, i.alarms = me.exports.sortBy(d, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (i) => {
          const s = await lM(i);
          s && (o[i] = me.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await fM();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), pM = window.Vue.openBlock, mM = window.Vue.createElementBlock, wM = window.Vue.createElementVNode;
var vM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const VM = {}, gM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TM = /* @__PURE__ */ wM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), UM = [
  TM
];
function yM(e, r) {
  return pM(), mM("svg", gM, UM);
}
var wo = /* @__PURE__ */ vM(VM, [["render", yM]]);
var NM = Object.defineProperty, Tp = Object.getOwnPropertySymbols, kM = Object.prototype.hasOwnProperty, RM = Object.prototype.propertyIsEnumerable, Up = (e, r, o) => r in e ? NM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, yp = (e, r) => {
  for (var o in r || (r = {}))
    kM.call(r, o) && Up(e, o, r[o]);
  if (Tp)
    for (var o of Tp(r))
      RM.call(r, o) && Up(e, o, r[o]);
  return e;
};
const MM = window.Vue.defineComponent, bM = window.Vue.toRaw, Zc = window.Vue.h;
var ZM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const SM = {
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
}, EM = MM({
  props: SM,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((s, c) => (s[c] = !0, s), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let i = bM(this.icon);
    return this.$slots.default ? Zc("span", { class: "feather-icon-container" }, [
      Zc(this.$slots.default()[0], yp({
        class: r
      }, o))
    ]) : Zc(i, yp({
      class: r
    }, o));
  }
});
var j = /* @__PURE__ */ ZM(EM, [["__scopeId", "data-v-52cbf270"]]);
const JM = window.Vue.openBlock, AM = window.Vue.createElementBlock, FM = window.Vue.createElementVNode;
var CM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const WM = {}, _M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xM = /* @__PURE__ */ FM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), BM = [
  xM
];
function DM(e, r) {
  return JM(), AM("svg", _M, BM);
}
var mv = /* @__PURE__ */ CM(WM, [["render", DM]]);
const yt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
};
function un(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function Ue(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function Ce(e) {
  Ue(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function IM(e, r) {
  Ue(2, arguments);
  var o = Ce(e), i = un(r);
  return isNaN(i) ? new Date(NaN) : (i && o.setDate(o.getDate() + i), o);
}
function OM(e, r) {
  Ue(2, arguments);
  var o = Ce(e).getTime(), i = un(r);
  return new Date(o + i);
}
var QM = {};
function To() {
  return QM;
}
function Np(e, r) {
  var o, i, s, c, d, f, m, v;
  Ue(1, arguments);
  var V = To(), T = un((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var U = Ce(e), E = U.getDay(), S = (E < T ? 7 : 0) + E - T;
  return U.setDate(U.getDate() - S), U.setHours(0, 0, 0, 0), U;
}
function Vu(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function kp(e) {
  Ue(1, arguments);
  var r = Ce(e);
  return r.setHours(0, 0, 0, 0), r;
}
function zM(e, r) {
  Ue(2, arguments);
  var o = Ce(e), i = Ce(r), s = o.getTime() - i.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function wv(e, r) {
  Ue(2, arguments);
  var o = kp(e), i = kp(r);
  return o.getTime() === i.getTime();
}
function GM(e) {
  return Ue(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function YM(e) {
  if (Ue(1, arguments), !GM(e) && typeof e != "number")
    return !1;
  var r = Ce(e);
  return !isNaN(Number(r));
}
function PM(e, r) {
  Ue(2, arguments);
  var o = un(r);
  return OM(e, -o);
}
var HM = 864e5;
function jM(e) {
  Ue(1, arguments);
  var r = Ce(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var i = r.getTime(), s = o - i;
  return Math.floor(s / HM) + 1;
}
function vs(e) {
  Ue(1, arguments);
  var r = 1, o = Ce(e), i = o.getUTCDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setUTCDate(o.getUTCDate() - s), o.setUTCHours(0, 0, 0, 0), o;
}
function vv(e) {
  Ue(1, arguments);
  var r = Ce(e), o = r.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(o + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = vs(i), c = new Date(0);
  c.setUTCFullYear(o, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = vs(c);
  return r.getTime() >= s.getTime() ? o + 1 : r.getTime() >= d.getTime() ? o : o - 1;
}
function $M(e) {
  Ue(1, arguments);
  var r = vv(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = vs(o);
  return i;
}
var XM = 6048e5;
function LM(e) {
  Ue(1, arguments);
  var r = Ce(e), o = vs(r).getTime() - $M(r).getTime();
  return Math.round(o / XM) + 1;
}
function Vs(e, r) {
  var o, i, s, c, d, f, m, v;
  Ue(1, arguments);
  var V = To(), T = un((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var U = Ce(e), E = U.getUTCDay(), S = (E < T ? 7 : 0) + E - T;
  return U.setUTCDate(U.getUTCDate() - S), U.setUTCHours(0, 0, 0, 0), U;
}
function Vv(e, r) {
  var o, i, s, c, d, f, m, v;
  Ue(1, arguments);
  var V = Ce(e), T = V.getUTCFullYear(), U = To(), E = un((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : U.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = U.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(E >= 1 && E <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(T + 1, 0, E), S.setUTCHours(0, 0, 0, 0);
  var A = Vs(S, r), W = new Date(0);
  W.setUTCFullYear(T, 0, E), W.setUTCHours(0, 0, 0, 0);
  var F = Vs(W, r);
  return V.getTime() >= A.getTime() ? T + 1 : V.getTime() >= F.getTime() ? T : T - 1;
}
function qM(e, r) {
  var o, i, s, c, d, f, m, v;
  Ue(1, arguments);
  var V = To(), T = un((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : V.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), U = Vv(e, r), E = new Date(0);
  E.setUTCFullYear(U, 0, T), E.setUTCHours(0, 0, 0, 0);
  var S = Vs(E, r);
  return S;
}
var KM = 6048e5;
function eb(e, r) {
  Ue(1, arguments);
  var o = Ce(e), i = Vs(o, r).getTime() - qM(o, r).getTime();
  return Math.round(i / KM) + 1;
}
function pe(e, r) {
  for (var o = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < r; )
    i = "0" + i;
  return o + i;
}
var tb = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), i = o > 0 ? o : 1 - o;
    return pe(r === "yy" ? i % 100 : i, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : pe(o + 1, 2);
  },
  d: function(e, r) {
    return pe(e.getUTCDate(), r.length);
  },
  a: function(e, r) {
    var o = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.toUpperCase();
      case "aaa":
        return o;
      case "aaaaa":
        return o[0];
      case "aaaa":
      default:
        return o === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(e, r) {
    return pe(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return pe(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return pe(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return pe(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, i = e.getUTCMilliseconds(), s = Math.floor(i * Math.pow(10, o - 3));
    return pe(s, r.length);
  }
};
const In = tb;
var Yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, nb = {
  G: function(e, r, o) {
    var i = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return o.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return o.era(i, {
          width: "wide"
        });
    }
  },
  y: function(e, r, o) {
    if (r === "yo") {
      var i = e.getUTCFullYear(), s = i > 0 ? i : 1 - i;
      return o.ordinalNumber(s, {
        unit: "year"
      });
    }
    return In.y(e, r);
  },
  Y: function(e, r, o, i) {
    var s = Vv(e, i), c = s > 0 ? s : 1 - s;
    if (r === "YY") {
      var d = c % 100;
      return pe(d, 2);
    }
    return r === "Yo" ? o.ordinalNumber(c, {
      unit: "year"
    }) : pe(c, r.length);
  },
  R: function(e, r) {
    var o = vv(e);
    return pe(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return pe(o, r.length);
  },
  Q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(i);
      case "QQ":
        return pe(i, 2);
      case "Qo":
        return o.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return o.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(i);
      case "qq":
        return pe(i, 2);
      case "qo":
        return o.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return o.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, r, o) {
    var i = e.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return In.M(e, r);
      case "Mo":
        return o.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return o.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return o.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, r, o) {
    var i = e.getUTCMonth();
    switch (r) {
      case "L":
        return String(i + 1);
      case "LL":
        return pe(i + 1, 2);
      case "Lo":
        return o.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return o.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return o.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, r, o, i) {
    var s = eb(e, i);
    return r === "wo" ? o.ordinalNumber(s, {
      unit: "week"
    }) : pe(s, r.length);
  },
  I: function(e, r, o) {
    var i = LM(e);
    return r === "Io" ? o.ordinalNumber(i, {
      unit: "week"
    }) : pe(i, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : In.d(e, r);
  },
  D: function(e, r, o) {
    var i = jM(e);
    return r === "Do" ? o.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : pe(i, r.length);
  },
  E: function(e, r, o) {
    var i = e.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return o.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return o.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, r, o, i) {
    var s = e.getUTCDay(), c = (s - i.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(c);
      case "ee":
        return pe(c, 2);
      case "eo":
        return o.ordinalNumber(c, {
          unit: "day"
        });
      case "eee":
        return o.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return o.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return o.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(e, r, o, i) {
    var s = e.getUTCDay(), c = (s - i.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(c);
      case "cc":
        return pe(c, r.length);
      case "co":
        return o.ordinalNumber(c, {
          unit: "day"
        });
      case "ccc":
        return o.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return o.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return o.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(e, r, o) {
    var i = e.getUTCDay(), s = i === 0 ? 7 : i;
    switch (r) {
      case "i":
        return String(s);
      case "ii":
        return pe(s, r.length);
      case "io":
        return o.ordinalNumber(s, {
          unit: "day"
        });
      case "iii":
        return o.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return o.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return o.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return o.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, r, o) {
    var i = e.getUTCHours(), s = i / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return o.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return o.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(e, r, o) {
    var i = e.getUTCHours(), s;
    switch (i === 12 ? s = Yr.noon : i === 0 ? s = Yr.midnight : s = i / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return o.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return o.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return o.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(e, r, o) {
    var i = e.getUTCHours(), s;
    switch (i >= 17 ? s = Yr.evening : i >= 12 ? s = Yr.afternoon : i >= 4 ? s = Yr.morning : s = Yr.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(e, r, o) {
    if (r === "ho") {
      var i = e.getUTCHours() % 12;
      return i === 0 && (i = 12), o.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return In.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : In.H(e, r);
  },
  K: function(e, r, o) {
    var i = e.getUTCHours() % 12;
    return r === "Ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : pe(i, r.length);
  },
  k: function(e, r, o) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), r === "ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : pe(i, r.length);
  },
  m: function(e, r, o) {
    return r === "mo" ? o.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : In.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : In.s(e, r);
  },
  S: function(e, r) {
    return In.S(e, r);
  },
  X: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (r) {
      case "X":
        return Mp(c);
      case "XXXX":
      case "XX":
        return Vr(c);
      case "XXXXX":
      case "XXX":
      default:
        return Vr(c, ":");
    }
  },
  x: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "x":
        return Mp(c);
      case "xxxx":
      case "xx":
        return Vr(c);
      case "xxxxx":
      case "xxx":
      default:
        return Vr(c, ":");
    }
  },
  O: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Rp(c, ":");
      case "OOOO":
      default:
        return "GMT" + Vr(c, ":");
    }
  },
  z: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Rp(c, ":");
      case "zzzz":
      default:
        return "GMT" + Vr(c, ":");
    }
  },
  t: function(e, r, o, i) {
    var s = i._originalDate || e, c = Math.floor(s.getTime() / 1e3);
    return pe(c, r.length);
  },
  T: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTime();
    return pe(c, r.length);
  }
};
function Rp(e, r) {
  var o = e > 0 ? "-" : "+", i = Math.abs(e), s = Math.floor(i / 60), c = i % 60;
  if (c === 0)
    return o + String(s);
  var d = r || "";
  return o + String(s) + d + pe(c, 2);
}
function Mp(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + pe(Math.abs(e) / 60, 2);
  }
  return Vr(e, r);
}
function Vr(e, r) {
  var o = r || "", i = e > 0 ? "-" : "+", s = Math.abs(e), c = pe(Math.floor(s / 60), 2), d = pe(s % 60, 2);
  return i + c + o + d;
}
const rb = nb;
var bp = function(e, r) {
  switch (e) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, gv = function(e, r) {
  switch (e) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, ob = function(e, r) {
  var o = e.match(/(P+)(p+)?/) || [], i = o[1], s = o[2];
  if (!s)
    return bp(e, r);
  var c;
  switch (i) {
    case "P":
      c = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      c = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      c = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      c = r.dateTime({
        width: "full"
      });
      break;
  }
  return c.replace("{{date}}", bp(i, r)).replace("{{time}}", gv(s, r));
}, ab = {
  p: gv,
  P: ob
};
const ib = ab;
var sb = ["D", "DD"], lb = ["YY", "YYYY"];
function cb(e) {
  return sb.indexOf(e) !== -1;
}
function ub(e) {
  return lb.indexOf(e) !== -1;
}
function Zp(e, r, o) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var db = {
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
}, fb = function(e, r, o) {
  var i, s = db[e];
  return typeof s == "string" ? i = s : r === 1 ? i = s.one : i = s.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + i : i + " ago" : i;
};
const hb = fb;
function Sc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, i = e.formats[o] || e.formats[e.defaultWidth];
    return i;
  };
}
var pb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vb = {
  date: Sc({
    formats: pb,
    defaultWidth: "full"
  }),
  time: Sc({
    formats: mb,
    defaultWidth: "full"
  }),
  dateTime: Sc({
    formats: wb,
    defaultWidth: "full"
  })
};
const Vb = vb;
var gb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Tb = function(e, r, o, i) {
  return gb[e];
};
const Ub = Tb;
function $o(e) {
  return function(r, o) {
    var i = o != null && o.context ? String(o.context) : "standalone", s;
    if (i === "formatting" && e.formattingValues) {
      var c = e.defaultFormattingWidth || e.defaultWidth, d = o != null && o.width ? String(o.width) : c;
      s = e.formattingValues[d] || e.formattingValues[c];
    } else {
      var f = e.defaultWidth, m = o != null && o.width ? String(o.width) : e.defaultWidth;
      s = e.values[m] || e.values[f];
    }
    var v = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[v];
  };
}
var yb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Nb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, kb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Rb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Mb = {
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
}, bb = {
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
}, Zb = function(e, r) {
  var o = Number(e), i = o % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, Sb = {
  ordinalNumber: Zb,
  era: $o({
    values: yb,
    defaultWidth: "wide"
  }),
  quarter: $o({
    values: Nb,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: $o({
    values: kb,
    defaultWidth: "wide"
  }),
  day: $o({
    values: Rb,
    defaultWidth: "wide"
  }),
  dayPeriod: $o({
    values: Mb,
    defaultWidth: "wide",
    formattingValues: bb,
    defaultFormattingWidth: "wide"
  })
};
const Eb = Sb;
function Xo(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, s = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], c = r.match(s);
    if (!c)
      return null;
    var d = c[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? Ab(f, function(T) {
      return T.test(d);
    }) : Jb(f, function(T) {
      return T.test(d);
    }), v;
    v = e.valueCallback ? e.valueCallback(m) : m, v = o.valueCallback ? o.valueCallback(v) : v;
    var V = r.slice(d.length);
    return {
      value: v,
      rest: V
    };
  };
}
function Jb(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function Ab(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function Fb(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.match(e.matchPattern);
    if (!i)
      return null;
    var s = i[0], c = r.match(e.parsePattern);
    if (!c)
      return null;
    var d = e.valueCallback ? e.valueCallback(c[0]) : c[0];
    d = o.valueCallback ? o.valueCallback(d) : d;
    var f = r.slice(s.length);
    return {
      value: d,
      rest: f
    };
  };
}
var Cb = /^(\d+)(th|st|nd|rd)?/i, Wb = /\d+/i, _b = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xb = {
  any: [/^b/i, /^(a|c)/i]
}, Bb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Db = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ib = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ob = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Qb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, zb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Gb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yb = {
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
}, Pb = {
  ordinalNumber: Fb({
    matchPattern: Cb,
    parsePattern: Wb,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Xo({
    matchPatterns: _b,
    defaultMatchWidth: "wide",
    parsePatterns: xb,
    defaultParseWidth: "any"
  }),
  quarter: Xo({
    matchPatterns: Bb,
    defaultMatchWidth: "wide",
    parsePatterns: Db,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Xo({
    matchPatterns: Ib,
    defaultMatchWidth: "wide",
    parsePatterns: Ob,
    defaultParseWidth: "any"
  }),
  day: Xo({
    matchPatterns: Qb,
    defaultMatchWidth: "wide",
    parsePatterns: zb,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xo({
    matchPatterns: Gb,
    defaultMatchWidth: "any",
    parsePatterns: Yb,
    defaultParseWidth: "any"
  })
};
const Hb = Pb;
var jb = {
  code: "en-US",
  formatDistance: hb,
  formatLong: Vb,
  formatRelative: Ub,
  localize: Eb,
  match: Hb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Tv = jb;
var $b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Xb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Lb = /^'([^]*?)'?$/, qb = /''/g, Kb = /[a-zA-Z]/;
function e2(e, r, o) {
  var i, s, c, d, f, m, v, V, T, U, E, S, A, W, F, _, C, D;
  Ue(2, arguments);
  var M = String(r), z = To(), Q = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : z.locale) !== null && i !== void 0 ? i : Tv, B = un((c = (d = (f = (m = o == null ? void 0 : o.firstWeekContainsDate) !== null && m !== void 0 ? m : o == null || (v = o.locale) === null || v === void 0 || (V = v.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && f !== void 0 ? f : z.firstWeekContainsDate) !== null && d !== void 0 ? d : (T = z.locale) === null || T === void 0 || (U = T.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = un((E = (S = (A = (W = o == null ? void 0 : o.weekStartsOn) !== null && W !== void 0 ? W : o == null || (F = o.locale) === null || F === void 0 || (_ = F.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && A !== void 0 ? A : z.weekStartsOn) !== null && S !== void 0 ? S : (C = z.locale) === null || C === void 0 || (D = C.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && E !== void 0 ? E : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ce(e);
  if (!YM(K))
    throw new RangeError("Invalid time value");
  var X = Vu(K), G = PM(K, X), se = {
    firstWeekContainsDate: B,
    weekStartsOn: $,
    locale: Q,
    _originalDate: K
  }, ge = M.match(Xb).map(function(de) {
    var De = de[0];
    if (De === "p" || De === "P") {
      var Ie = ib[De];
      return Ie(de, Q.formatLong);
    }
    return de;
  }).join("").match($b).map(function(de) {
    if (de === "''")
      return "'";
    var De = de[0];
    if (De === "'")
      return t2(de);
    var Ie = rb[De];
    if (Ie)
      return !(o != null && o.useAdditionalWeekYearTokens) && ub(de) && Zp(de, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && cb(de) && Zp(de, r, String(e)), Ie(G, de, Q.localize, se);
    if (De.match(Kb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + De + "`");
    return de;
  }).join("");
  return ge;
}
function t2(e) {
  var r = e.match(Lb);
  return r ? r[1].replace(qb, "'") : e;
}
function Uv(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function n2(e) {
  return Uv({}, e);
}
var Sp = 1e3 * 60, gs = 60 * 24, Ep = gs * 30, Jp = gs * 365;
function As(e, r, o) {
  var i, s, c;
  Ue(2, arguments);
  var d = To(), f = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : d.locale) !== null && i !== void 0 ? i : Tv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = zM(e, r);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Uv(n2(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: m
  }), V, T;
  m > 0 ? (V = Ce(r), T = Ce(e)) : (V = Ce(e), T = Ce(r));
  var U = String((c = o == null ? void 0 : o.roundingMethod) !== null && c !== void 0 ? c : "round"), E;
  if (U === "floor")
    E = Math.floor;
  else if (U === "ceil")
    E = Math.ceil;
  else if (U === "round")
    E = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = T.getTime() - V.getTime(), A = S / Sp, W = Vu(T) - Vu(V), F = (S - W) / Sp, _ = o == null ? void 0 : o.unit, C;
  if (_ ? C = String(_) : A < 1 ? C = "second" : A < 60 ? C = "minute" : A < gs ? C = "hour" : F < Ep ? C = "day" : F < Jp ? C = "month" : C = "year", C === "second") {
    var D = E(S / 1e3);
    return f.formatDistance("xSeconds", D, v);
  } else if (C === "minute") {
    var M = E(A);
    return f.formatDistance("xMinutes", M, v);
  } else if (C === "hour") {
    var z = E(A / 60);
    return f.formatDistance("xHours", z, v);
  } else if (C === "day") {
    var Q = E(F / gs);
    return f.formatDistance("xDays", Q, v);
  } else if (C === "month") {
    var B = E(F / Ep);
    return B === 12 && _ !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", B, v);
  } else if (C === "year") {
    var $ = E(F / Jp);
    return f.formatDistance("xYears", $, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function r2(e, r, o) {
  Ue(2, arguments);
  var i = Np(e, o), s = Np(r, o);
  return i.getTime() === s.getTime();
}
function o2(e, r) {
  return Ue(1, arguments), r2(e, Date.now(), r);
}
function a2(e) {
  return Ue(1, arguments), wv(e, Date.now());
}
function i2(e, r) {
  Ue(2, arguments);
  var o = un(r);
  return IM(e, -o);
}
function s2(e) {
  return Ue(1, arguments), wv(e, i2(Date.now(), 1));
}
const dn = (e) => {
  let r = "";
  if (e)
    try {
      r = e2(new Date(e), yt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, yv = (e, r) => {
  const o = e.length > r ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, r) + o;
}, Nv = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (i) => a2(i.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (i) => s2(i.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (i) => o2(i.firstEventTime)
      );
      break;
  }
  return o;
}, l2 = window.Vue.defineComponent, gt = window.Vue.unref, Ap = window.Vue.normalizeClass, ln = window.Vue.createElementVNode, Pr = window.Vue.toDisplayString, Fp = window.Vue.createVNode, cr = window.Vue.openBlock, ur = window.Vue.createElementBlock, Fi = window.Vue.createCommentVNode, gu = window.Vue.createTextVNode, c2 = window.Vue.renderList, u2 = window.Vue.Fragment, d2 = window.Vue.pushScopeId, f2 = window.Vue.popScopeId, zu = (e) => (d2("data-v-d97f7aa6"), e = e(), f2(), e), h2 = { class: "content" }, p2 = { class: "title-row" }, m2 = { class: "title" }, w2 = {
  key: 0,
  class: "accepted"
}, v2 = {
  key: 1,
  class: "rejected"
}, V2 = /* @__PURE__ */ zu(() => /* @__PURE__ */ ln("span", { class: "info-title" }, " Duration: ", -1)), g2 = { key: 0 }, T2 = /* @__PURE__ */ zu(() => /* @__PURE__ */ ln("span", { class: "info-title" }, " First Event: ", -1)), U2 = { class: "description" }, y2 = /* @__PURE__ */ zu(() => /* @__PURE__ */ ln("hr", null, null, -1)), N2 = {
  key: 1,
  class: "count-info"
}, k2 = /* @__PURE__ */ gu(" Alarms: "), R2 = { class: "info-title" }, M2 = /* @__PURE__ */ l2({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, i = yt.ACCEPTED, s = yt.REJECTED, c = new Date().getTime(), d = () => {
      var f;
      r("situation-selected", (f = o.situationInfo) == null ? void 0 : f.id);
    };
    return (f, m) => {
      var v, V, T;
      return cr(), ur("div", {
        onClick: d,
        class: Ap(["card", {
          rejected: o.situationInfo.status == gt(s)
        }])
      }, [
        ln("div", {
          class: Ap(["severity-line", [`${(V = (v = o.situationInfo) == null ? void 0 : v.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
        }, null, 2),
        ln("div", h2, [
          ln("div", p2, [
            ln("div", m2, "Situation " + Pr((T = o.situationInfo) == null ? void 0 : T.id), 1),
            o.situationInfo.status == gt(i) ? (cr(), ur("div", w2, [
              Fp(gt(j), {
                icon: gt(wo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Fi("", !0),
            o.situationInfo.status == gt(s) ? (cr(), ur("div", v2, [
              Fp(gt(j), {
                icon: gt(mv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Fi("", !0)
          ]),
          ln("div", null, [
            V2,
            gu(" " + Pr(gt(As)(
              gt(c),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Fi("", !0) : (cr(), ur("div", g2, [
            T2,
            gu(Pr(gt(dn)(o.situationInfo.firstEventTime)), 1)
          ])),
          ln("div", U2, Pr(gt(yv)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          y2,
          o.situationInfo.relatedAlarms ? (cr(), ur("div", N2, [
            k2,
            ln("span", R2, Pr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Fi("", !0),
          (cr(!0), ur(u2, null, c2(gt(me.exports.keys)(
            gt(me.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (U) => (cr(), ur("div", {
            class: "info-title",
            key: U
          }, " - " + Pr(U), 1))), 128))
        ])
      ], 2);
    };
  }
});
const kv = /* @__PURE__ */ we(M2, [["__scopeId", "data-v-d97f7aa6"]]), b2 = window.Vue.openBlock, Z2 = window.Vue.createElementBlock, S2 = window.Vue.createElementVNode;
var E2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const J2 = {}, A2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, F2 = /* @__PURE__ */ S2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), C2 = [
  F2
];
function W2(e, r) {
  return b2(), Z2("svg", A2, C2);
}
var _2 = /* @__PURE__ */ E2(J2, [["render", W2]]);
const x2 = window.Vue.openBlock, B2 = window.Vue.createElementBlock, Rv = window.Vue.createElementVNode;
var D2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const I2 = {}, O2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Q2 = /* @__PURE__ */ Rv("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), z2 = /* @__PURE__ */ Rv("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), G2 = [
  Q2,
  z2
];
function Y2(e, r) {
  return x2(), B2("svg", O2, G2);
}
var P2 = /* @__PURE__ */ D2(I2, [["render", Y2]]);
const H2 = window.Vue.openBlock, j2 = window.Vue.createElementBlock, $2 = window.Vue.createElementVNode;
var X2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const L2 = {}, q2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, K2 = /* @__PURE__ */ $2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), eZ = [
  K2
];
function tZ(e, r) {
  return H2(), j2("svg", q2, eZ);
}
var nZ = /* @__PURE__ */ X2(L2, [["render", tZ]]);
const rZ = window.Vue.openBlock, oZ = window.Vue.createElementBlock, aZ = window.Vue.createElementVNode;
var iZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const sZ = {}, lZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cZ = /* @__PURE__ */ aZ("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), uZ = [
  cZ
];
function dZ(e, r) {
  return rZ(), oZ("svg", lZ, uZ);
}
var Mv = /* @__PURE__ */ iZ(sZ, [["render", dZ]]);
const fZ = window.Vue.defineComponent, On = window.Vue.unref, Ci = window.Vue.normalizeClass, Wi = window.Vue.createVNode, hZ = window.Vue.openBlock, pZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const mZ = { class: "paginator" }, wZ = /* @__PURE__ */ fZ({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: r }) {
    const o = e, i = (s) => {
      s >= 0 && s <= o.totalPages - 1 && r("go-to-page", s);
    };
    return (s, c) => (hZ(), pZ("div", mZ, [
      Wi(On(j), {
        icon: On(_2),
        "aria-hidden": "true",
        class: Ci(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => i(0))
      }, null, 8, ["icon", "class"]),
      Wi(On(j), {
        icon: On(nZ),
        "aria-hidden": "true",
        class: Ci(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => i(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Wi(On(j), {
        icon: On(Mv),
        "aria-hidden": "true",
        class: Ci(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => i(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Wi(On(j), {
        icon: On(P2),
        "aria-hidden": "true",
        class: Ci(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => i(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const vZ = /* @__PURE__ */ we(wZ, [["__scopeId", "data-v-40758818"]]);
const le = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, VZ = window.Vue.computed, Fs = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((i) => {
    o[`${i}Label`] = VZ(() => e.value[i] ? e.value[i] : r[i]);
  }), o;
};
const yr = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, Nr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var gZ = Object.defineProperty, TZ = Object.defineProperties, UZ = Object.getOwnPropertyDescriptors, Cp = Object.getOwnPropertySymbols, yZ = Object.prototype.hasOwnProperty, NZ = Object.prototype.propertyIsEnumerable, Wp = (e, r, o) => r in e ? gZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, _p = (e, r) => {
  for (var o in r || (r = {}))
    yZ.call(r, o) && Wp(e, o, r[o]);
  if (Cp)
    for (var o of Cp(r))
      NZ.call(r, o) && Wp(e, o, r[o]);
  return e;
}, kZ = (e, r) => TZ(e, UZ(r));
const RZ = window.Vue.defineComponent, MZ = window.Vue.h;
var bZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const ZZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, SZ = RZ({
  props: ZZ,
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
    onClick(e) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: r, clientHeight: o } = this.parent, i = Math.round(Math.max(r, o));
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const c = this.parent.getBoundingClientRect(), d = e.pageY, f = e.pageX;
          s = {
            top: `${d - c.top - i / 2 - document.documentElement.scrollTop}px`,
            left: `${f - c.left - i / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = kZ(_p({}, s), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Nr(this.failsafe), this.failsafe = yr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return MZ("div", {
        style: _p({}, this.styles),
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
    const e = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(e.position === "relative" || e.position === "absolute" || e.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var Ln = /* @__PURE__ */ bZ(SZ, [["__scopeId", "data-v-18e2a5db"]]);
const EZ = window.Vue.openBlock, JZ = window.Vue.createElementBlock, AZ = window.Vue.createElementVNode;
var FZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const CZ = {}, WZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _Z = /* @__PURE__ */ AZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), xZ = [
  _Z
];
function BZ(e, r) {
  return EZ(), JZ("svg", WZ, xZ);
}
var Uo = /* @__PURE__ */ FZ(CZ, [["render", BZ]]);
const xp = window.Vue.computed, DZ = (e, r, o) => {
  const i = xp(() => r.value.filter((c) => !c.disabled)), s = xp(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (s.value === 0 ? o(i.value[i.value.length - 1]) : o(i.value[s.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (s.value === i.value.length - 1 ? o(i.value[0]) : o(i.value[s.value + 1]));
    }
  };
};
const IZ = window.Vue.openBlock, OZ = window.Vue.createElementBlock, Gu = window.Vue.createElementVNode;
var QZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const zZ = {}, GZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YZ = /* @__PURE__ */ Gu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PZ = /* @__PURE__ */ Gu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), HZ = /* @__PURE__ */ Gu("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jZ = [
  YZ,
  PZ,
  HZ
];
function $Z(e, r) {
  return IZ(), OZ("svg", GZ, jZ);
}
var XZ = /* @__PURE__ */ QZ(zZ, [["render", $Z]]), LZ = Object.defineProperty, qZ = Object.defineProperties, KZ = Object.getOwnPropertyDescriptors, Bp = Object.getOwnPropertySymbols, eS = Object.prototype.hasOwnProperty, tS = Object.prototype.propertyIsEnumerable, Dp = (e, r, o) => r in e ? LZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, bv = (e, r) => {
  for (var o in r || (r = {}))
    eS.call(r, o) && Dp(e, o, r[o]);
  if (Bp)
    for (var o of Bp(r))
      tS.call(r, o) && Dp(e, o, r[o]);
  return e;
}, Zv = (e, r) => qZ(e, KZ(r));
const yo = window.Vue.defineComponent, ya = window.Vue.resolveComponent, cn = window.Vue.openBlock, lo = window.Vue.createElementBlock, nS = window.Vue.createVNode, Ts = window.Vue.createBlock, rS = window.Vue.withModifiers, vo = window.Vue.inject, Na = window.Vue.computed, oS = window.Vue.normalizeClass, Hr = window.Vue.createElementVNode, Us = window.Vue.toDisplayString, us = window.Vue.renderSlot, ha = window.Vue.createCommentVNode, aS = window.Vue.withDirectives, iS = window.Vue.vShow, Tu = window.Vue.ref, Ip = window.Vue.toRef, Op = window.Vue.nextTick, Uu = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Yu = window.Vue.provide, Qp = window.Vue.isRef, sS = window.Vue.onBeforeUnmount;
var Sa = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const lS = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, cS = yo({
  props: lS,
  components: {
    FeatherIcon: j
  }
}), uS = ["title"];
function dS(e, r, o, i, s, c) {
  const d = ya("FeatherIcon");
  return cn(), lo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    nS(d, { icon: e.icon }, null, 8, ["icon"])
  ], 8, uS);
}
var fS = /* @__PURE__ */ Sa(cS, [["render", dS], ["__scopeId", "data-v-4265058e"]]);
const hS = yo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Uo;
    }
  },
  components: {
    ActionIcon: fS
  }
});
function pS(e, r, o, i, s, c) {
  const d = ya("ActionIcon");
  return cn(), Ts(d, {
    onClick: r[0] || (r[0] = rS((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var mS = /* @__PURE__ */ Sa(hS, [["render", pS]]);
const wS = yo({
  computed: {
    errorIcon() {
      return XZ;
    }
  },
  components: {
    FeatherIcon: j
  }
});
function vS(e, r, o, i, s, c) {
  const d = ya("FeatherIcon");
  return cn(), Ts(d, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var VS = /* @__PURE__ */ Sa(wS, [["render", vS], ["__scopeId", "data-v-0b8faef3"]]);
const gS = {
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
}, TS = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, US = yo({
  emits: TS,
  props: gS,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = vo("wrapperOptions", {}), r = vo("validationErrorMessage", !1), o = Na(() => e.error ? e.error : r && r.value ? r.value : !1);
    return Zv(bv({}, e), { error: o });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((r) => r.children && r.children.length !== 0) !== -1;
    },
    containerCls() {
      const e = [];
      return this.hideLabel && e.push("hide-label"), this.raised && e.push("raised"), this.focused && e.push("focused"), this.error && e.push("error"), this.background && e.push("background"), this.disabled && e.push("disabled"), this.inline && e.push("inline"), this.hasPre && e.push("has-prefix"), e;
    }
  },
  methods: {
    handleWrapperClick(e) {
      this.disabled || this.$emit("wrapper-click", e);
    }
  },
  mounted() {
    const e = this.$el.querySelector(".prefix");
    if (e) {
      const r = { childList: !0, subtree: !0 }, o = () => {
        const i = this.$el.querySelector(".prefix");
        this.prefixWidth = i ? i.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(o), this.prefixObserver.observe(e, r), o();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: mS,
    ErrorIcon: VS
  }
}), yS = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, NS = ["for"], kS = { class: "prefix" }, RS = { class: "post" };
function MS(e, r, o, i, s, c) {
  const d = ya("ClearIcon"), f = ya("ErrorIcon");
  return cn(), lo("div", {
    class: oS(["feather-input-wrapper-container", e.containerCls])
  }, [
    Hr("fieldset", yS, [
      Hr("legend", null, Us(e.label), 1)
    ]),
    Hr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Us(e.label), 9, NS),
    Hr("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      Hr("div", kS, [
        us(e.$slots, "pre", {}, void 0, !0)
      ]),
      us(e.$slots, "default", {}, void 0, !0),
      Hr("div", RS, [
        e.showClear && e.computedClearText ? (cn(), Ts(d, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : ha("", !0),
        e.error ? (cn(), Ts(f, { key: 1 })) : ha("", !0),
        us(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Pu = /* @__PURE__ */ Sa(US, [["render", MS], ["__scopeId", "data-v-4db296db"]]);
const bS = yo({
  setup() {
    const e = vo("subTextOptions", {}), r = vo("validationErrorMessage", !1), o = Na(() => e.error ? e.error : r && r.value ? r.value : "");
    return Zv(bv({}, e), { error: o });
  }
}), ZS = { class: "feather-input-sub-text" }, SS = {
  key: 0,
  class: "feather-input-spacer"
}, ES = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, JS = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function AS(e, r, o, i, s, c) {
  return aS((cn(), lo("div", ZS, [
    !e.hint && !e.error.length ? (cn(), lo("div", SS, "\xA0")) : ha("", !0),
    e.hint && !e.error.length ? (cn(), lo("div", ES, Us(e.hint), 1)) : ha("", !0),
    e.error.length > 0 ? (cn(), lo("div", JS, Us(e.error), 1)) : ha("", !0),
    us(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [iS, !e.inline || e.hint || e.error.length]
  ]);
}
var Ea = /* @__PURE__ */ Sa(bS, [["render", AS], ["__scopeId", "data-v-8e0ac99e"]]);
const FS = {
  headingText: {
    type: Function,
    default: (e) => e.length && e.length === 1 ? "1 error" : `${e.length} errors`
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
yo({
  props: FS,
  setup(e) {
    const r = vo("featherFormErrors", Tu([])), o = Ip(e, "errorList"), i = Na(() => {
      var V;
      return (V = o.value) != null && V.length ? o.value : r.value;
    }), s = Ip(e, "generalError"), c = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), f = Tu(), m = (V) => `${d(V.label)} - ${V.message}`, v = Na(() => (i.value.length && Op(() => f.value.focus()), e.headingText(i.value)));
    return Uu(s, (V) => {
      V.length && Op(() => f.value.focus());
    }), {
      errors: i,
      errorsHeading: v,
      heading: f,
      focusElement: c,
      mainError: s,
      getFullMessage: m
    };
  }
});
const Ja = (e, r, o, i, s) => {
  const c = vo("featherForm", !1);
  if (i && c && e.value) {
    const d = Tu("");
    Yu("validationErrorMessage", d);
    const f = () => {
      if (s && Qp(s) && s.value)
        return d.value = s.value, {
          success: !1,
          message: s.value,
          inputId: e.value,
          label: o
        };
      try {
        return i.validateSync(r.value), d.value = "", { success: !0 };
      } catch (V) {
        const T = V;
        return d.value = T.errors[0], {
          success: !1,
          message: T.errors[0],
          inputId: e.value,
          label: o
        };
      }
    }, v = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return s && Qp(s) && Uu(s, () => {
      c.runValidation();
    }), Uu(e, (V, T) => {
      V && c && c.register(V, v), T && c && c.deregister(T);
    }, { immediate: !0 }), sS(() => {
      c.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Aa = (e) => ({
  inherittedAttrs: Na(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Fa = {
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
}, Ca = (e) => {
  Yu("subTextOptions", e);
}, Hu = {
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
}, ju = (e) => {
  Yu("wrapperOptions", e);
}, _i = window.Vue.ref, CS = window.Vue.watch, WS = window.Vue.watchEffect, zp = window.Vue.computed, Ec = window.Vue.provide, Sv = (e, r, o, i, s) => {
  const c = _i([]), d = _i(), f = _i(), m = _i();
  WS(() => {
    if (!c.value.length)
      return;
    const F = c.value.map((_) => _.value);
    if (e.value !== void 0 && e.value !== null && (d.value = c.value[F.indexOf(e.value)]), !d.value && c.value.length) {
      let _ = c.value.filter((C) => !C.disabled);
      _ = _.length ? _ : c.value, f.value = _[0], f.value.first = !0;
    }
  }), CS(d, (F, _) => {
    _ && (_.checked = !1), F && (F.checked = !0);
  });
  const v = (F) => {
    F && F.disabled || (f.value && (f.value.first = !1), d.value !== F && (r("update:modelValue", F.value), d.value = F, F.focus()));
  }, V = zp(() => d.value || f.value), T = DZ(V, c, v), U = zp(() => le("feather-radio-group"));
  m.value = U.value;
  const { validate: E } = Ja(m, e, o, i, s);
  return Ec("register", (F) => {
    c.value = [...c.value, F], m.value === U.value && (m.value = F.id);
  }), Ec("select", v), Ec("blur", (F) => {
    r("blur", F);
  }), {
    keydown: (F) => {
      switch (F.keyCode) {
        case 13:
        case 32:
          d.value ? v(d.value) : f.value && v(f.value);
          break;
        case 40:
        case 39:
          T.selectNext();
          break;
        case 37:
        case 38:
          T.selectPrevious();
          break;
      }
    },
    ...T,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: E,
    firstElementId: m,
    groupId: U
  };
};
var _S = Object.defineProperty, xS = Object.defineProperties, BS = Object.getOwnPropertyDescriptors, Gp = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, IS = Object.prototype.propertyIsEnumerable, Yp = (e, r, o) => r in e ? _S(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, fo = (e, r) => {
  for (var o in r || (r = {}))
    DS.call(r, o) && Yp(e, o, r[o]);
  if (Gp)
    for (var o of Gp(r))
      IS.call(r, o) && Yp(e, o, r[o]);
  return e;
}, Ev = (e, r) => xS(e, BS(r));
const qn = window.Vue.defineComponent, pa = window.Vue.inject, ys = window.Vue.computed, ma = window.Vue.ref, Dt = window.Vue.resolveComponent, Nt = window.Vue.openBlock, Wa = window.Vue.createElementBlock, Jv = window.Vue.normalizeClass, fn = window.Vue.renderSlot, $n = window.Vue.createBlock, ka = window.Vue.createCommentVNode, Ns = window.Vue.createElementVNode, OS = window.Vue.withModifiers, Cs = window.Vue.createVNode, Av = window.Vue.toRef, yu = window.Vue.mergeProps, Zn = window.Vue.withCtx, QS = window.Vue.h, zS = window.Vue.provide;
var Kn = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const GS = {
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
}, YS = qn({
  props: GS,
  setup(e) {
    const r = pa("isCondensed", null), o = ys(() => r || e.condensed), i = ma(!1);
    return {
      focused: i,
      handleFocus: () => {
        i.value = !0;
      },
      handleBlur: () => {
        i.value = !1;
      },
      isCondensed: o
    };
  },
  components: {
    FeatherRipple: Ln
  }
}), PS = ["aria-disabled"];
function HS(e, r, o, i, s, c) {
  const d = Dt("FeatherRipple");
  return Nt(), Wa("div", {
    class: Jv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    fn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Nt(), $n(d, { key: 0 })) : ka("", !0)
  ], 42, PS);
}
var Ws = /* @__PURE__ */ Kn(YS, [["render", HS], ["__scopeId", "data-v-44d413dc"]]);
const jS = {
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
}, $S = qn({
  emits: ["delete"],
  props: jS,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: Uo
    };
  },
  components: {
    FeatherIcon: j
  }
}), XS = { class: "chip-delete" }, LS = ["aria-label", "aria-describedby"];
function qS(e, r, o, i, s, c) {
  const d = Dt("FeatherIcon");
  return Nt(), Wa("span", XS, [
    Ns("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = OS((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Cs(d, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, LS)
  ]);
}
var KS = /* @__PURE__ */ Kn($S, [["render", qS], ["__scopeId", "data-v-4bae6cb4"]]);
const eE = qn({
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
}), tE = ["title"];
function nE(e, r, o, i, s, c) {
  return Nt(), Wa("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    fn(e.$slots, "default", {}, void 0, !0)
  ], 8, tE);
}
var _s = /* @__PURE__ */ Kn(eE, [["render", nE], ["__scopeId", "data-v-1a0445b2"]]);
const rE = {}, oE = {
  class: "chip-icon",
  role: "presentation"
};
function aE(e, r) {
  return Nt(), Wa("span", oE, [
    fn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var xs = /* @__PURE__ */ Kn(rE, [["render", aE], ["__scopeId", "data-v-2230176f"]]);
const Pp = {
  delete: "Remove"
}, iE = qn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Pp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = Fs(Av(e, "labels"), Pp), i = ys(() => le("chip-text")), s = () => {
      e.disabled || r.emit("click");
    }, c = fo({}, r.attrs);
    return e.disabled && delete c.onClick, Ev(fo({}, o), {
      chipTextId: i,
      handleClick: s,
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
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ws,
    DeleteIcon: KS,
    Label: _s,
    PreIcon: xs
  }
}), sE = ["aria-disabled"];
function lE(e, r, o, i, s, c) {
  const d = Dt("PreIcon"), f = Dt("Label"), m = Dt("DeleteIcon"), v = Dt("Chip");
  return Nt(), $n(v, yu(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Zn(() => [
      Ns("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ns("span", yu(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Nt(), $n(d, { key: 0 }, {
            default: Zn(() => [
              fn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ka("", !0),
          Cs(f, { id: e.chipTextId }, {
            default: Zn(() => [
              fn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, sE),
      e.canDelete ? (Nt(), $n(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (V) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ka("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var cE = /* @__PURE__ */ Kn(iE, [["render", lE], ["__scopeId", "data-v-48b2704a"]]);
const uE = qn({
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
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ws,
    Label: _s,
    PreIcon: xs
  }
}), dE = ["aria-disabled"];
function fE(e, r, o, i, s, c) {
  const d = Dt("PreIcon"), f = Dt("Label"), m = Dt("Chip");
  return Nt(), $n(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Zn(() => [
      Ns("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Nt(), $n(d, { key: 0 }, {
          default: Zn(() => [
            fn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ka("", !0),
        Cs(f, null, {
          default: Zn(() => [
            fn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, dE)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var hE = /* @__PURE__ */ Kn(uE, [["render", fE], ["__scopeId", "data-v-3e0c4eba"]]);
const pE = qn({
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
  setup(e) {
    const r = ma(!1), o = ma(!1), i = ys(() => le("chip-label-id")), s = ys(() => r.value || o.value ? 0 : -1), c = ma(), d = () => {
      c.value.$el.focus();
    }, f = pa("register", (U) => {
    }), m = pa("blur", (U) => {
    }), v = pa("select", (U) => {
    }), V = {
      first: r,
      focus: d,
      disabled: e.disabled,
      value: e.value,
      checked: o
    };
    return f(V), {
      labelId: i,
      tabindex: s,
      first: r,
      blur: m,
      click: () => {
        v(V);
      },
      input: c,
      checked: o
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ws,
    Label: _s,
    PreIcon: xs
  }
});
function mE(e, r, o, i, s, c) {
  const d = Dt("PreIcon"), f = Dt("Label"), m = Dt("Chip");
  return Nt(), $n(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Jv(["focus hover", { selected: e.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": e.checked ? "true" : "false",
    "aria-disabled": e.disabled,
    "aria-labelledby": e.labelId,
    tabindex: e.tabindex,
    onClick: e.click,
    "allow-click": !e.disabled,
    onBlur: e.blur
  }, {
    default: Zn(() => [
      e.hasIcon ? (Nt(), $n(d, { key: 0 }, {
        default: Zn(() => [
          fn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ka("", !0),
      Cs(f, { id: e.labelId }, {
        default: Zn(() => [
          fn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var wE = /* @__PURE__ */ Kn(pE, [["render", mE], ["__scopeId", "data-v-bbcc2f70"]]);
const vE = {
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
}, Hp = qn({
  props: vE,
  setup() {
    return { format: pa("chipListFormat", "") };
  },
  render() {
    const e = (r) => QS(r, fo(fo({}, this.$props), this.$attrs), fo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(cE) : this.format === "radio" ? e(wE) : e(hE);
  }
}), VE = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (e) => ["list", "radio", "single"].indexOf(e) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, gE = qn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: VE,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    zS("chipListFormat", o);
    const i = o === "single";
    if (o === "radio") {
      const d = Av(e, "modelValue");
      return Ev(fo({
        attrs: {
          role: "radiogroup"
        }
      }, Sv(d, r.emit, e.label, {}, ma(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), TE = ["aria-label"];
function UE(e, r, o, i, s, c) {
  return Nt(), Wa("div", yu(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...d) => e.keydown && e.keydown(...d))
  }), [
    fn(e.$slots, "default", {}, void 0, !0)
  ], 16, TE);
}
var yE = /* @__PURE__ */ Kn(gE, [["render", UE], ["__scopeId", "data-v-1e06f41d"]]);
const NE = window.Vue.defineComponent, kE = window.Vue.normalizeClass, RE = window.Vue.openBlock, ME = window.Vue.createElementBlock, bE = window.Vue.createCommentVNode, ZE = /* @__PURE__ */ NE({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (RE(), ME("span", {
      key: 0,
      class: kE(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : bE("", !0);
  }
});
const SE = /* @__PURE__ */ we(ZE, [["__scopeId", "data-v-e08880d6"]]), EE = window.Vue.defineComponent, Lo = window.Vue.unref, Fv = window.Vue.createTextVNode, Jc = window.Vue.normalizeClass, Ac = window.Vue.withCtx, JE = window.Vue.createVNode, AE = window.Vue.renderList, FE = window.Vue.Fragment, xi = window.Vue.openBlock, CE = window.Vue.createElementBlock, Fc = window.Vue.createBlock, jp = window.Vue.createCommentVNode, WE = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _E = /* @__PURE__ */ Fv(" ALL "), $p = window.Vue.ref, xE = window.Vue.watch, BE = window.Vue.computed, DE = window.Vue.reactive, IE = /* @__PURE__ */ EE({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: r }) {
    var m;
    const o = e, i = $p(!1), s = BE(() => me.exports.keys(me.exports.groupBy(o.alarms, o.property))), c = $p(
      (m = o.preSelected) != null && m.length ? o.preSelected : ["all"]
    ), d = DE({
      alarms: o.alarms
    }), f = (v) => {
      c.value = c.value.filter((V) => V !== "all"), c.value.includes(v) ? c.value = c.value.filter((V) => V !== v) : c.value.push(v), (v === "all" || c.value.length === 0) && (c.value = ["all"]), r("selected-option", c.value);
    };
    return xE(o, () => {
      var v;
      c.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], d.alarms = o.alarms, i.value = !1;
    }), (v, V) => Lo(s).length > 0 ? (xi(), Fc(Lo(yE), {
      key: c.value.toString(),
      condensed: "",
      label: "",
      class: Jc({ vertical: o.isVertical })
    }, {
      default: Ac(() => [
        JE(Lo(Hp), {
          class: Jc({ clicked: c.value.includes("all") }),
          onClick: V[0] || (V[0] = (T) => f("all"))
        }, {
          default: Ac(() => [
            _E
          ]),
          _: 1
        }, 8, ["class"]),
        (xi(!0), CE(FE, null, AE(Lo(s), (T) => (xi(), Fc(Lo(Hp), {
          class: Jc([
            { clicked: c.value.includes(T) },
            `${T == null ? void 0 : T.toLowerCase()}-bg`
          ]),
          key: T,
          onClick: (U) => f(T)
        }, {
          default: Ac(() => [
            e.property == "severity" ? (xi(), Fc(SE, {
              key: 0,
              severity: T
            }, null, 8, ["severity"])) : jp("", !0),
            Fv(WE(T), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : jp("", !0);
  }
});
const Vo = /* @__PURE__ */ we(IE, [["__scopeId", "data-v-4dac26de"]]);
var OE = Object.defineProperty, QE = Object.defineProperties, zE = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, GE = Object.prototype.hasOwnProperty, YE = Object.prototype.propertyIsEnumerable, Lp = (e, r, o) => r in e ? OE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, qo = (e, r) => {
  for (var o in r || (r = {}))
    GE.call(r, o) && Lp(e, o, r[o]);
  if (Xp)
    for (var o of Xp(r))
      YE.call(r, o) && Lp(e, o, r[o]);
  return e;
}, qp = (e, r) => QE(e, zE(r));
const PE = window.Vue.defineComponent, HE = window.Vue.inject, Ko = window.Vue.h;
var jE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const $E = {
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
}, XE = PE({
  inheritAttrs: !1,
  props: $E,
  setup() {
    return { hasTooltip: HE("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, r = this.asAnchor ? "a" : "button", o = {}, i = qo({}, this.$attrs);
    o.attrs = i || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const s = e();
    o.class = [this.$attrs.class].concat(s), this.$slots.icon && o.class.push("has-icon");
    let c = Ko(Ln);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), Ko(r, qp(qo(qo({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ko(Ln, { center: !0 })
      ]);
    }
    const d = Ko("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ko(r, qp(qo(qo({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var Ve = /* @__PURE__ */ jE(XE, [["__scopeId", "data-v-702d1074"]]);
const LE = window.Vue.openBlock, qE = window.Vue.createElementBlock, KE = window.Vue.createElementVNode;
var eJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const tJ = {}, nJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rJ = /* @__PURE__ */ KE("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), oJ = [
  rJ
];
function aJ(e, r) {
  return LE(), qE("svg", nJ, oJ);
}
var Cv = /* @__PURE__ */ eJ(tJ, [["render", aJ]]);
const iJ = window.Vue.openBlock, sJ = window.Vue.createElementBlock, lJ = window.Vue.createElementVNode;
var cJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const uJ = {}, dJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fJ = /* @__PURE__ */ lJ("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), hJ = [
  fJ
];
function pJ(e, r) {
  return iJ(), sJ("svg", dJ, hJ);
}
var Bs = /* @__PURE__ */ cJ(uJ, [["render", pJ]]);
const mJ = window.Vue.openBlock, wJ = window.Vue.createElementBlock, Wv = window.Vue.createElementVNode;
var vJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const VJ = {}, gJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TJ = /* @__PURE__ */ Wv("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), UJ = /* @__PURE__ */ Wv("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), yJ = [
  TJ,
  UJ
];
function NJ(e, r) {
  return mJ(), wJ("svg", gJ, yJ);
}
var kJ = /* @__PURE__ */ vJ(VJ, [["render", NJ]]);
const RJ = window.Vue.watch, MJ = window.Vue.onBeforeUnmount, bJ = window.Vue.ref, ZJ = window.Vue.onMounted, SJ = (e) => {
  const r = bJ(!1);
  let o = !1;
  const i = (d) => {
    e(d), o = !1;
  };
  function s(d) {
    o || (requestAnimationFrame(() => i(d)), o = !0);
  }
  const c = () => {
    window && window.removeEventListener("resize", s);
  };
  return ZJ(() => {
    const d = RJ(r, (f) => {
      window && f ? window.addEventListener("resize", s) : c();
    }, {
      immediate: !0
    });
    MJ(() => {
      d(), c();
    });
  }), r;
}, EJ = window.Vue.watch, JJ = window.Vue.onBeforeUnmount, AJ = window.Vue.ref, FJ = window.Vue.onMounted, CJ = (e, r) => {
  const o = AJ(!1), i = (d) => {
    d.target === window && r(d);
  }, s = (d) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(d.target)) || r(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", i));
  };
  return FJ(() => {
    const d = EJ(o, (f) => {
      document && window && f ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", i)) : c();
    }, {
      immediate: !0
    });
    JJ(() => {
      d(), c();
    });
  }), o;
}, WJ = window.Vue.watch, _J = window.Vue.onBeforeUnmount, xJ = window.Vue.ref, _v = (e, r) => {
  const o = xJ(!1);
  let i = !1;
  const s = (m) => {
    r(m), i = !1;
  };
  function c(m) {
    i || (requestAnimationFrame(() => s(m)), i = !0);
  }
  const d = () => {
    e.value && e.value.removeEventListener("scroll", c, !0);
  }, f = WJ([e, o], ([m, v], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", c, !0), v && m ? m.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return _J(() => {
    f(), d();
  }), o;
}, BJ = window.Vue.defineComponent, kn = window.Vue.ref, Kp = window.Vue.toRef, DJ = window.Vue.onMounted, IJ = window.Vue.watch, em = window.Vue.computed, OJ = window.Vue.nextTick, tm = window.Vue.openBlock, nm = window.Vue.createElementBlock, rm = window.Vue.renderSlot, QJ = window.Vue.normalizeClass, zJ = window.Vue.normalizeStyle, GJ = window.Vue.createCommentVNode;
var YJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const PJ = {
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
}, HJ = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, jJ = BJ({
  emits: HJ,
  props: PJ,
  setup(e, r) {
    const o = kn(), i = kn(), s = Kp(e, "open"), c = Kp(e, "noExpand"), d = kn("auto"), f = kn(), m = kn(e.triggerId || le("feather-menu-trigger")), v = kn(le("feather-menu-dropdown")), V = kn(""), T = kn("");
    DJ(() => {
      f.value = window;
    });
    const U = kn(!1), E = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!i.value)
        return;
      const M = o.value.getBoundingClientRect();
      U.value = !0, d.value = "auto", OJ(() => {
        let { height: z, width: Q } = i.value.getBoundingClientRect();
        const B = E(), $ = B.height, K = B.width;
        e.fill && Q < M.width ? (d.value = M.width + "px", Q = M.width) : d.value = Q + "px";
        let X = 0;
        $ - M.bottom < z && M.top >= z ? (X = M.top - z, e.cover && (X += M.height)) : (X = M.bottom, e.cover && (X -= M.height));
        let G = e.right ? M.right - Q : M.left;
        !e.right && M.right >= Q && K - M.left < Q && (G = M.right - Q), e.right && M.right <= Q && K - M.left > Q && (G = M.left), T.value = `${G}px`, V.value = `${X}px`, U.value = !1;
      });
    }, W = CJ(o, (M) => {
      r.emit("outside-click", M);
    }), F = SJ(S), _ = _v(f, S);
    IJ([s, i], ([M, z]) => {
      M && z && S(), W.value = M, F.value = M, _.value = M;
    });
    const C = em(() => {
      const M = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return s.value && (M["aria-controls"] = v.value), c.value || (M["aria-expanded"] = s.value ? "true" : "false"), M;
    }), D = em(() => ({
      click: (M) => {
        r.emit("trigger-click", M);
      }
    }));
    return {
      positionTop: V,
      positionLeft: T,
      triggerId: m,
      triggerAttrs: C,
      triggerListeners: D,
      menuId: v,
      menu: i,
      menuWidth: d,
      root: o,
      calculatePosition: S,
      calculating: U
    };
  }
}), $J = ["data-ref-id"], XJ = ["data-ref-id", "id"];
function LJ(e, r, o, i, s, c) {
  return tm(), nm("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    rm(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (tm(), nm("div", {
      key: 0,
      class: QJ(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: zJ({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      rm(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, XJ)) : GJ("", !0)
  ], 8, $J);
}
var xv = /* @__PURE__ */ YJ(jJ, [["render", LJ], ["__scopeId", "data-v-f75af406"]]), qJ = {
  mounted(e, r) {
    e.addEventListener("keydown", r.dir.contentKeyPressed);
  },
  unmounted(e, r) {
    e.removeEventListener("keydown", r.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const r = e.currentTarget.querySelectorAll("li a");
    let o = [].indexOf.call(r, e.target);
    if (!(o < 0)) {
      switch (e.keyCode) {
        case 40:
          o++, o === r.length && (o = 0);
          break;
        case 38:
          o--, o === -1 && (o = r.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), r[o].focus();
    }
  }
};
const KJ = window.Vue.openBlock, eA = window.Vue.createElementBlock, tA = window.Vue.createElementVNode;
var nA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const rA = {}, oA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aA = /* @__PURE__ */ tA("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), iA = [
  aA
];
function sA(e, r) {
  return KJ(), eA("svg", oA, iA);
}
var lA = /* @__PURE__ */ nA(rA, [["render", sA]]);
const cA = window.Vue.openBlock, uA = window.Vue.createElementBlock, $u = window.Vue.createElementVNode;
var dA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const fA = {}, hA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pA = /* @__PURE__ */ $u("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), mA = /* @__PURE__ */ $u("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), wA = /* @__PURE__ */ $u("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), vA = [
  pA,
  mA,
  wA
];
function VA(e, r) {
  return cA(), uA("svg", hA, vA);
}
var gA = /* @__PURE__ */ dA(fA, [["render", VA]]);
const TA = window.Vue.openBlock, UA = window.Vue.createElementBlock, yA = window.Vue.createElementVNode;
var NA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kA = {}, RA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MA = /* @__PURE__ */ yA("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), bA = [
  MA
];
function ZA(e, r) {
  return TA(), UA("svg", RA, bA);
}
var Ds = /* @__PURE__ */ NA(kA, [["render", ZA]]);
const Ra = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const i = getComputedStyle(e);
  o += parseInt(i.getPropertyValue("margin-top"), 10), o += parseInt(i.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
};
const ne = {
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
const SA = window.Vue.defineComponent, EA = window.Vue.openBlock, JA = window.Vue.createElementBlock, AA = window.Vue.normalizeClass, FA = window.Vue.pushScopeId, CA = window.Vue.popScopeId, Nu = window.Vue.createElementVNode;
var WA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const _A = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, xA = {
  click: (e) => !0
}, BA = SA({
  emits: xA,
  props: _A,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Bv = (e) => (FA("data-v-07e020f5"), e = e(), CA(), e), DA = /* @__PURE__ */ Bv(() => /* @__PURE__ */ Nu("div", { class: "track" }, null, -1)), IA = /* @__PURE__ */ Bv(() => /* @__PURE__ */ Nu("div", { class: "switcher" }, [
  /* @__PURE__ */ Nu("div", { class: "switch-circle" })
], -1)), OA = [
  DA,
  IA
];
function QA(e, r, o, i, s, c) {
  return EA(), JA("div", {
    class: AA(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, OA, 2);
}
var zA = /* @__PURE__ */ WA(BA, [["render", QA], ["__scopeId", "data-v-07e020f5"]]), GA = Object.defineProperty, YA = Object.defineProperties, PA = Object.getOwnPropertyDescriptors, om = Object.getOwnPropertySymbols, HA = Object.prototype.hasOwnProperty, jA = Object.prototype.propertyIsEnumerable, am = (e, r, o) => r in e ? GA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, im = (e, r) => {
  for (var o in r || (r = {}))
    HA.call(r, o) && am(e, o, r[o]);
  if (om)
    for (var o of om(r))
      jA.call(r, o) && am(e, o, r[o]);
  return e;
}, sm = (e, r) => YA(e, PA(r));
const Xu = window.Vue.defineComponent, dr = window.Vue.h, $A = window.Vue.openBlock, XA = window.Vue.createElementBlock, LA = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Dv = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const qA = {
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
}, KA = Xu({
  inheritAttrs: !1,
  props: qA,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (e = dr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = dr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = dr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : dr(Ln);
    if (this.asLi)
      return dr("li", sm(im({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, o, i, s]);
    const c = dr("a", sm(im({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, i, s]);
    return dr("li", {}, [c]);
  }
});
var _a = /* @__PURE__ */ Dv(KA, [["__scopeId", "data-v-7c46b2b3"]]);
Xu({
  components: {
    FeatherListItem: _a
  }
});
const eF = {}, tF = { class: "feather-list" };
function nF(e, r) {
  return $A(), XA("ul", tF, [
    LA(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Lu = /* @__PURE__ */ Dv(eF, [["render", nF], ["__scopeId", "data-v-941a1d50"]]);
const rF = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, oF = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Xu({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: rF,
  props: oF,
  computed: {
    labelId() {
      return le("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === ne.SPACE || e.keyCode === ne.ENTER) && this.updateValue(), e.keyCode === ne.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: zA, FeatherListItem: _a }
});
var aF = Object.defineProperty, iF = Object.defineProperties, sF = Object.getOwnPropertyDescriptors, lm = Object.getOwnPropertySymbols, lF = Object.prototype.hasOwnProperty, cF = Object.prototype.propertyIsEnumerable, cm = (e, r, o) => r in e ? aF(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, kt = (e, r) => {
  for (var o in r || (r = {}))
    lF.call(r, o) && cm(e, o, r[o]);
  if (lm)
    for (var o of lm(r))
      cF.call(r, o) && cm(e, o, r[o]);
  return e;
}, uF = (e, r) => iF(e, sF(r));
const No = window.Vue.defineComponent, ue = window.Vue.openBlock, Fe = window.Vue.createElementBlock, ct = window.Vue.createElementVNode, Kt = window.Vue.toDisplayString, Bt = window.Vue.createCommentVNode, Ee = window.Vue.resolveComponent, _t = window.Vue.createBlock, Xe = window.Vue.withCtx, ho = window.Vue.Fragment, wa = window.Vue.renderList, ut = window.Vue.createVNode, qu = window.Vue.withModifiers, Ur = window.Vue.normalizeClass, ku = window.Vue.renderSlot, Iv = window.Vue.createTextVNode, dF = window.Vue.pushScopeId, fF = window.Vue.popScopeId, Ov = window.Vue.reactive, Qv = window.Vue.nextTick, Cc = window.Vue.markRaw, Wc = window.Vue.toRef, um = window.Vue.computed, hF = window.Vue.toRefs, jr = window.Vue.ref, _c = window.Vue.mergeProps, dm = window.Vue.toHandlers, Bi = window.Vue.withDirectives, Di = window.Vue.vShow;
var Is = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Ku = {
  query: {
    type: String
  }
}, Rr = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const pF = No({
  mixins: [],
  props: kt(kt({
    text: {
      type: String,
      required: !0
    }
  }, Is), Ku),
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
}), mF = {
  key: 0,
  class: "highlight"
}, wF = { key: 1 };
function vF(e, r, o, i, s, c) {
  return ue(), Fe("span", null, [
    ct("span", null, Kt(e.beginning), 1),
    e.highlighted ? (ue(), Fe("span", mF, Kt(e.highlighted), 1)) : Bt("", !0),
    e.end ? (ue(), Fe("span", wF, Kt(e.end), 1)) : Bt("", !0)
  ]);
}
var zv = /* @__PURE__ */ Rr(pF, [["render", vF], ["__scopeId", "data-v-8abe2492"]]);
const VF = No({
  emits: ["select", "deselect"],
  props: kt(kt({
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
  }, Is), Ku),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        Ra(r, o.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const r = this.value;
      return r && r.length ? r.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit(this.isSelected(e) ? "deselect" : "select", e);
    }
  },
  components: {
    FeatherList: Lu,
    FeatherListItem: _a,
    Highlighter: zv
  }
}), gF = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function TF(e, r, o, i, s, c) {
  const d = Ee("Highlighter"), f = Ee("FeatherListItem"), m = Ee("FeatherList");
  return ue(), _t(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Xe(() => [
      (ue(!0), Fe(ho, null, wa(e.items, (v, V) => (ue(), Fe(ho, {
        key: v[e.textProp]
      }, [
        ut(f, {
          "as-li": "",
          id: e.getId(V),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(V),
          selected: e.isSelected(v),
          onClick: qu((T) => e.select(v), ["stop"])
        }, {
          default: Xe(() => [
            ut(d, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (ue(), Fe("span", gF, Kt(e.newLabel), 1)) : Bt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (ue(), Fe("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Bt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var UF = /* @__PURE__ */ Rr(VF, [["render", TF], ["__scopeId", "data-v-f623434a"]]);
const yF = No({
  emits: ["select"],
  props: kt(kt({
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
  }, Is), Ku),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        Ra(r, o);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, r) => e.align && e.align.toLowerCase() === "right" ? `tr${r + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${r + 1}` : `tl${r + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const r = this.value;
      return this.value && this.value.length ? r.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, r) {
      return this.activeRow === e && this.activeCol === r;
    },
    getId(e, r) {
      return e === this.activeRow && this.activeCol === r ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: zv
  }
}), NF = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, kF = ["aria-multiselectable"], RF = { role: "row" }, MF = ["aria-selected", "onClick"], bF = ["id", "aria-selected"], ZF = { key: 1 };
function SF(e, r, o, i, s, c) {
  const d = Ee("Highlighter");
  return ue(), Fe("div", NF, [
    ct("table", {
      class: Ur(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      ct("thead", null, [
        ct("tr", RF, [
          (ue(!0), Fe(ho, null, wa(e.config, (f) => (ue(), Fe("th", {
            key: f.title
          }, Kt(f.title), 1))), 128))
        ])
      ]),
      ct("tbody", null, [
        (ue(!0), Fe(ho, null, wa(e.items, (f, m) => (ue(), Fe("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Ur({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: qu((v) => e.select(f), ["stop"])
        }, [
          (ue(!0), Fe(ho, null, wa(e.config, (v, V) => (ue(), Fe("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, V),
            "aria-selected": e.isSelected(f),
            class: Ur({ "focus-cell": e.isActiveCell(m, V) })
          }, [
            v.prop === e.textProp ? (ue(), _t(d, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (ue(), Fe("p", ZF, Kt(f[v.prop]), 1))
          ], 10, bF))), 128))
        ], 10, MF))), 128))
      ])
    ], 10, kF)
  ], 512);
}
var EF = /* @__PURE__ */ Rr(yF, [["render", SF], ["__scopeId", "data-v-58c88fd1"]]);
const JF = No({
  components: {
    FeatherList: Lu,
    FeatherListItem: _a
  }
});
function AF(e, r, o, i, s, c) {
  const d = Ee("FeatherListItem"), f = Ee("FeatherList");
  return ue(), _t(f, { class: "result-list" }, {
    default: Xe(() => [
      ut(d, { "as-li": "" }, {
        default: Xe(() => [
          ku(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var FF = /* @__PURE__ */ Rr(JF, [["render", AF], ["__scopeId", "data-v-06b752c6"]]);
const CF = No({
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
    FeatherIcon: j,
    Cancel: Uo,
    BaseChip: Ws,
    BaseChipLabel: _s,
    BaseChipPreIcon: xs
  }
});
function WF(e, r, o, i, s, c) {
  const d = Ee("FeatherIcon"), f = Ee("BaseChipPreIcon"), m = Ee("BaseChipLabel"), v = Ee("Cancel"), V = Ee("BaseChip");
  return ue(), _t(V, {
    class: Ur(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Xe(() => [
      e.showPreIcon ? (ue(), _t(f, { key: 0 }, {
        default: Xe(() => {
          var T, U;
          return [
            ut(d, {
              icon: (T = e.pre) == null ? void 0 : T.icon,
              title: (U = e.pre) == null ? void 0 : U.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Bt("", !0),
      ut(m, null, {
        default: Xe(() => [
          Iv(Kt(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Bt("", !0) : (ue(), Fe("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = qu((...T) => e.handleClick && e.handleClick(...T), ["stop"]))
      }, [
        ut(d, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Xe(() => [
            ut(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var _F = /* @__PURE__ */ Rr(CF, [["render", WF], ["__scopeId", "data-v-e0fc6ac0"]]);
const xF = {}, BF = (e) => (dF("data-v-aa720e06"), e = e(), fF(), e), DF = { class: "spinner-container" }, IF = /* @__PURE__ */ BF(() => /* @__PURE__ */ ct("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ ct("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), OF = [
  IF
];
function QF(e, r) {
  return ue(), Fe("div", DF, OF);
}
var zF = /* @__PURE__ */ Rr(xF, [["render", QF], ["__scopeId", "data-v-aa720e06"]]), Os = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Os || {});
const Gv = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, GF = kt(kt(kt({
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
    default: (e, r, o) => e[o.textProp].toString().toLowerCase() === r.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!Os[e]
  },
  labels: {
    type: Object,
    default: () => Gv
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Is), Fa), Hu), YF = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, PF = (e, r, o, i) => {
  if (o.toLowerCase() === Os.multi) {
    const c = e.modelValue, d = (f) => {
      e.selectionLimit.value && f.length >= e.selectionLimit.value ? e.selectionLimitReached.value = !0 : e.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(f) {
        f && f.length && d(f);
      },
      hasValue() {
        return !!(c.value && c.value.length);
      },
      selectItem(f) {
        if (c.value && c.value.filter((v) => v[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = c.value ? [...c.value, f] : [f];
        i("update:modelValue", m), d(m);
      },
      removeItem(f) {
        const m = c.value.findIndex((v) => {
          if (f[e.textProp.value] === v[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const v = c.value.slice(0);
          v.splice(m, 1), i("update:modelValue", v), d(v), e.input.value.focus();
        }
      },
      clickedItem() {
        e.query.value = "", e.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const s = e.modelValue;
  return {
    getInitialText() {
      return s.value ? s.value[e.textProp.value] : "";
    },
    handleModelValueChange() {
      e.query.value = this.getInitialText();
    },
    hasValue() {
      return !!s.value;
    },
    selectItem(c) {
      r.active.row = -1, e.forceCloseResults.value = !0, c && c._new && e.allowNew ? i("new", c._new) : i("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (r.active.row > -1) {
        const c = e.internalResults.value[r.active.row];
        c && c._new && e.allowNew ? i("new", c._new) : i("update:modelValue", c);
      }
    }
  };
}, HF = () => {
  const e = Ov({
    row: -1
  }), r = (c) => {
    Qv(() => {
      e.row = c;
    });
  }, o = (c, d) => {
    if (c.keyCode === ne.DOWN) {
      if (c.preventDefault(), e.row === -1)
        i(), r(0);
      else if (e.row + 1 <= d.length - 1) {
        const f = e.row;
        i(), r(f + 1);
      }
      return !0;
    }
    if (c.keyCode === ne.UP) {
      if (c.preventDefault(), e.row === 0)
        i();
      else if (e.row > 0) {
        const f = e.row;
        i(), r(f - 1);
      }
      return !0;
    }
    return !1;
  }, i = () => {
    e.row = -1;
  };
  return { reset: i, handleKeyPress: o, active: e, first: () => {
    e.row = 0;
  } };
}, jF = (e) => {
  const r = Ov({
    row: -1,
    col: -1
  }), o = (d, f) => {
    Qv(() => {
      r.col = f, r.row = d;
    });
  }, i = (d, f) => {
    if (d.keyCode === ne.DOWN) {
      if (d.preventDefault(), r.row === -1)
        s(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const m = r.row, v = r.col;
        s(), o(m + 1, v);
      }
      return !0;
    }
    if (d.keyCode === ne.UP) {
      if (d.preventDefault(), r.row === 0)
        s();
      else if (r.row > 0) {
        const m = r.row, v = r.col;
        s(), o(m - 1, v);
      }
      return !0;
    }
    if (d.keyCode === ne.RIGHT && r.row !== -1) {
      if (d.preventDefault(), r.col + 1 <= e.length - 1) {
        const m = r.col, v = r.row;
        s(), o(v, m + 1);
      } else if (r.col <= e.length - 1 && r.row + 1 <= f.length - 1) {
        const m = r.row;
        s(), o(m + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === ne.LEFT && r.row !== -1) {
      if (d.preventDefault(), r.col === 0 && r.row === 0)
        return !0;
      if (r.col === 0 && r.row > 0) {
        const m = r.row;
        s(), o(m - 1, e.length - 1);
      } else if (r.col > 0) {
        const m = r.col, v = r.row;
        s(), o(v, m - 1);
      }
      return !0;
    }
    if (d.keyCode === ne.END && r.row !== -1) {
      d.preventDefault();
      const m = r.row;
      return s(), o(d.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (d.keyCode === ne.HOME && r.row !== -1) {
      d.preventDefault();
      const m = r.row;
      return s(), o(d.ctrlKey ? 0 : m, 0), !0;
    }
    return !1;
  }, s = () => {
    r.row = -1, r.col = -1;
  };
  return { reset: s, handleKeyPress: i, active: r, first: () => {
    s(), o(0, 0);
  } };
}, $F = No({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: YF,
  props: GF,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Os.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var e;
      return (e = this.strategy) == null ? void 0 : e.hasValue();
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
      return le("result-item");
    },
    minCharWarningId() {
      return le("min-char-warning");
    },
    subTextId() {
      return le("feather-autocomplete-description");
    },
    resultsId() {
      return le("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return le("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Cc(lA);
    },
    minCharIcon() {
      return Cc(gA);
    },
    dropdownIcon() {
      return Cc(Ds);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let r = "";
      return this.activeChipIndex > -1 && (r = this.activeChipId), this.active.row > -1 && this.showResults && (r = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": r,
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
      return this.modelValue && this.modelValue.length ? this.modelValue.map((r) => r[this.textProp]).join(", ") : "";
    },
    allowNewEnabled() {
      return this.singleSelect && this.allowNew;
    },
    modelValueList() {
      return this.singleSelect ? [] : this.modelValue;
    }
  },
  watch: {
    activeChipIndex(e) {
      e && this.genActiveChipId(), e > -1 && this.scrollContainer && this.$nextTick(() => {
        Ra(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          Ra(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(e), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(e) {
      e && e.length > 0 && this.selectFirst(), this.forceCloseResults = !1, e && e.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (e.some((o) => this.newMatcher(o, this.query, this)) || (e = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...e
      ])), this.internalResults = e;
    },
    showResults(e) {
      const r = this.$refs.menu;
      e && r.calculatePosition && r.calculatePosition();
    },
    selectionLimitReached(e) {
      e && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(e) {
      return e._pre;
    },
    genActiveChipId() {
      return this.activeChipId = le("active-chip"), this.activeChipId;
    },
    setAlert(e) {
      const r = this.$refs.alert;
      r.textContent = e, setTimeout(() => {
        r.textContent = "";
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
    handleTextInput(e) {
      this.adjustTextArea();
      const o = e.target.value;
      o !== void 0 && (Nr(this.typingTimeout), this.typingTimeout = yr(() => {
        this.query = o, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const r = () => {
        this.activeChipIndex = -1;
      }, o = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ne.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        r(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ne.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const i = this.modelValue;
        this.removeFromValue(i[this.activeChipIndex]), r();
        return;
      }
      if (e.keyCode === ne.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === ne.ENTER || e.keyCode === ne.SPACE || e.keyCode === ne.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === ne.ESCAPE) {
        this.forceCloseResults = !0, o(), r();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const i = this.modelValue;
        e.keyCode === ne.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = i.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ne.RIGHT && (e.preventDefault(), this.activeChipIndex === i.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < i.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ne.DELETE || e.keyCode === ne.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(i[this.activeChipIndex]), o(), r());
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
    clickedItem(e) {
      this.selectItem(e), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
    },
    selectItem(e) {
      this.strategy.selectItem(e), this.adjustTextArea();
    },
    removeFromValue(e) {
      this.strategy.removeItem(e);
    },
    handleDropdownIconClick() {
      if (this.showMenu) {
        this.forceCloseResults = !0;
        return;
      }
      this.forceCloseResults || this.emitSearch();
    },
    adjustTextArea() {
      const e = this.inputRef;
      !e || (e.style.height = "1.625rem", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const r = e.getBoundingClientRect().width, o = e.parentElement;
        e.scrollWidth <= e.clientWidth && o && r < o.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, r) {
    const o = Fs(Wc(e, "labels"), Gv);
    Ca(e), ju(e);
    let i;
    e.gridConfig ? i = jF(e.gridConfig) : i = HF();
    const s = Wc(e, "id"), c = um(() => s.value ? s.value : le("feather-autocomplete-input")), { validate: d } = Ja(c, Wc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: V, type: T, minChar: U } = hF(e), E = jr(!1), S = jr(!1), A = jr(!1), W = jr(""), F = jr([]), _ = jr(), C = um(() => _.value), D = () => {
      E.value && !S.value && (W.value && W.value.length >= U.value && r.emit("search", W.value), U.value <= 0 && r.emit("search", W.value || ""), F.value = [], i.reset());
    }, M = PF({
      selectionLimit: f,
      selectionLimitReached: S,
      modelValue: m,
      textProp: v,
      allowNew: V,
      forceCloseResults: A,
      query: W,
      internalResults: F,
      input: C,
      emitSearch: D
    }, i, T.value, r.emit);
    return uF(kt(kt({}, o), Aa(r.attrs)), {
      query: W,
      internalResults: F,
      selectionLimitReached: S,
      forceCloseResults: A,
      hasFocus: E,
      strategy: M,
      emitSearch: D,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: c,
      input: _,
      incomingId: s,
      inputRef: C,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Pu,
    InputSubText: Ea,
    AutocompleteResults: UF,
    AutocompleteResultsGrid: EF,
    Chip: _F,
    MenuMessage: FF,
    FeatherIcon: j,
    FeatherMenu: xv,
    Spinner: zF
  }
}), XF = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, LF = ["id"], qF = { "data-ref-id": "feather-autocomplete-no-results" }, KF = { "data-ref-id": "feather-autocomplete-selection-limit" }, eC = { "data-ref-id": "feather-autocomplete-min-char" };
function tC(e, r, o, i, s, c) {
  const d = Ee("FeatherIcon"), f = Ee("Chip"), m = Ee("InputWrapper"), v = Ee("AutocompleteResults"), V = Ee("AutocompleteResultsGrid"), T = Ee("MenuMessage"), U = Ee("Spinner"), E = Ee("FeatherMenu"), S = Ee("InputSubText");
  return ue(), Fe("div", _c(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    ut(E, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Ur(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Xe(({ attrs: A, on: W }) => [
        ut(m, _c(kt(kt({}, A), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, dm(W), { ref: "scroll" }), {
          pre: Xe(() => [
            ku(e.$slots, "pre", {}, () => [
              ut(d, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Xe(() => [
            ut(d, {
              icon: e.dropdownIcon,
              class: Ur(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Xe(() => [
            ct("div", {
              class: Ur(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              ct("div", XF, null, 512),
              ct("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Kt(e.selectedDescribedByText), 9, LF),
              (ue(!0), Fe(ho, null, wa(e.modelValueList, (F, _) => Bi((ue(), _t(f, {
                key: F[e.textProp],
                role: "button",
                id: _ === e.activeChipIndex ? e.activeChipId : null,
                focused: _ === e.activeChipIndex,
                disabled: e.disabled,
                text: F[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(F),
                onDelete: (C) => e.removeFromValue(F)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Di, !e.singleSelect]
              ])), 128)),
              ct("textarea", _c(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, dm(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Xe(() => [
        e.gridConfig ? Bt("", !0) : Bi((ue(), _t(v, {
          key: 0,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          activeId: e.resultItemId,
          activeIndex: e.active.row,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          onDeselect: e.removeFromValue,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          "new-label": e.newLabel,
          highlight: e.highlight,
          query: e.query,
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [Di, e.showResults]
        ]),
        e.gridConfig ? Bi((ue(), _t(V, {
          key: 1,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          config: e.gridConfig,
          activeId: e.resultItemId,
          activeRow: e.active.row,
          activeCol: e.active.col,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          highlight: e.highlight,
          query: e.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [Di, e.showResults]
        ]) : Bt("", !0),
        e.showNoResults ? (ue(), _t(T, { key: 2 }, {
          default: Xe(() => [
            ct("span", qF, Kt(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Bt("", !0),
        e.showSelectionLimit ? (ue(), _t(T, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Xe(() => [
            ut(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", KF, Kt(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Bt("", !0),
        e.minChar ? Bi((ue(), _t(T, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Xe(() => [
            ut(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", eC, [
              ku(e.$slots, "min-char", {}, () => [
                Iv(Kt(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Di, e.showMinCharWarning]
        ]) : Bt("", !0),
        e.showLoading ? (ue(), _t(U, { key: 5 })) : Bt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    ut(S, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var Yv = /* @__PURE__ */ Rr($F, [["render", tC], ["__scopeId", "data-v-43a7e951"]]);
const nC = window.Vue.defineComponent, xc = window.Vue.unref, rC = window.Vue.createVNode, oC = window.Vue.createElementVNode, aC = window.Vue.withCtx, iC = window.Vue.openBlock, sC = window.Vue.createBlock, lC = window.Vue.pushScopeId, cC = window.Vue.popScopeId, uC = (e) => (lC("data-v-bb76d5a4"), e = e(), cC(), e), dC = /* @__PURE__ */ uC(() => /* @__PURE__ */ oC("span", null, "New Situation", -1)), fC = window.VueRouter.useRouter, hC = window.Vue.markRaw, pC = /* @__PURE__ */ nC({
  __name: "NewSituationBtn",
  setup(e) {
    const r = fC(), o = hC({
      Add: Bs
    }), i = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (s, c) => (iC(), sC(xc(Ve), {
      class: "new-situation-btn",
      onClick: c[0] || (c[0] = () => i())
    }, {
      default: aC(() => [
        rC(xc(j), {
          icon: xc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        dC
      ]),
      _: 1
    }));
  }
});
const Pv = /* @__PURE__ */ we(pC, [["__scopeId", "data-v-bb76d5a4"]]);
var mC = Object.defineProperty, wC = Object.defineProperties, vC = Object.getOwnPropertyDescriptors, fm = Object.getOwnPropertySymbols, VC = Object.prototype.hasOwnProperty, gC = Object.prototype.propertyIsEnumerable, hm = (e, r, o) => r in e ? mC(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, ds = (e, r) => {
  for (var o in r || (r = {}))
    VC.call(r, o) && hm(e, o, r[o]);
  if (fm)
    for (var o of fm(r))
      gC.call(r, o) && hm(e, o, r[o]);
  return e;
}, Hv = (e, r) => wC(e, vC(r));
const jv = window.Vue.defineComponent, TC = window.Vue.ref, va = window.Vue.computed, UC = window.Vue.reactive, pm = window.Vue.watch, Bc = window.Vue.inject, $v = window.Vue.resolveComponent, Ru = window.Vue.openBlock, Xv = window.Vue.createElementBlock, Xn = window.Vue.createElementVNode, yC = window.Vue.createBlock, NC = window.Vue.createCommentVNode, Lv = window.Vue.renderSlot, kC = window.Vue.pushScopeId, RC = window.Vue.popScopeId, Dc = window.Vue.toRef, mm = window.Vue.mergeProps, MC = window.Vue.toDisplayString, bC = window.Vue.createVNode;
var qv = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const ZC = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, SC = jv({
  props: ZC,
  setup(e) {
    const r = TC(), o = () => {
      r.value.focus();
    }, i = va(() => le("feather-radio-button")), s = UC({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), c = va(() => le("radio-label-id")), d = va(() => s.first || s.checked ? 0 : -1);
    pm(() => e.disabled, (T) => {
      s.disabled = T;
    }, { immediate: !0 }), pm(() => e.value, (T) => {
      s.value = T;
    }, { immediate: !0 });
    const f = Bc("register", (T) => {
    }), m = Bc("blur", (T) => {
    }), v = Bc("select", (T) => {
    });
    return f(s), {
      labelId: c,
      tabindex: d,
      vm: s,
      blur: m,
      click: () => {
        v(s);
      },
      input: r,
      id: i
    };
  },
  components: {
    FeatherRipple: Ln
  }
}), EC = (e) => (kC("data-v-24790cf0"), e = e(), RC(), e), JC = { class: "layout-container" }, AC = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], FC = { class: "radio hover focus" }, CC = /* @__PURE__ */ EC(() => /* @__PURE__ */ Xn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Xn("svg", { class: "dot" }, [
    /* @__PURE__ */ Xn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), WC = ["id"];
function _C(e, r, o, i, s, c) {
  const d = $v("feather-ripple");
  return Ru(), Xv("div", JC, [
    Xn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: r[0] || (r[0] = (...f) => e.click && e.click(...f)),
      onBlur: r[1] || (r[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      Xn("div", FC, [
        CC,
        e.vm.disabled ? NC("", !0) : (Ru(), yC(d, {
          key: 0,
          center: ""
        }))
      ]),
      Xn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        Lv(e.$slots, "default", {}, void 0, !0)
      ], 8, WC)
    ], 40, AC)
  ]);
}
var Ma = /* @__PURE__ */ qv(SC, [["render", _C], ["__scopeId", "data-v-24790cf0"]]);
const xC = Hv(ds({}, Fa), {
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
}), BC = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, DC = jv({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: xC,
  emits: BC,
  setup(e, r) {
    Ca(e);
    const o = Dc(e, "error"), i = Dc(e, "modelValue"), s = va(() => le("feather-input-description")), c = va(() => {
      const d = Hv(ds({}, r.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!o.value), d;
    });
    return ds(ds({
      descriptionId: s,
      attrs: c
    }, Sv(i, r.emit, e.label, e.schema, Dc(e, "error"))), Aa(r.attrs));
  },
  components: {
    InputSubText: Ea
  }
}), IC = ["for"], OC = ["id"];
function QC(e, r, o, i, s, c) {
  const d = $v("InputSubText");
  return Ru(), Xv("div", mm(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Xn("label", {
      for: e.groupId,
      class: "group-label"
    }, MC(e.label), 9, IC),
    Xn("div", mm(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      Lv(e.$slots, "default", {}, void 0, !0)
    ], 16, OC),
    bC(d, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var ed = /* @__PURE__ */ qv(DC, [["render", QC], ["__scopeId", "data-v-6775aeb9"]]);
const zC = window.Vue.defineComponent, GC = window.Vue.renderList, YC = window.Vue.Fragment, wm = window.Vue.openBlock, PC = window.Vue.createElementBlock, HC = window.Vue.toDisplayString, jC = window.Vue.createTextVNode, vm = window.Vue.unref, Vm = window.Vue.withCtx, $C = window.Vue.createVNode, XC = window.Vue.createBlock, LC = window.Vue.watch, qC = window.Vue.ref, KC = /* @__PURE__ */ zC({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: r }) {
    const o = e, i = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], s = qC(o.preSelected || i[0].id);
    return LC(o, () => {
      o.preSelected && (s.value = o.preSelected);
    }), (c, d) => (wm(), XC(vm(ed), {
      label: "",
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("filter-date-selected", s.value))
      ],
      vertical: ""
    }, {
      default: Vm(() => [
        (wm(), PC(YC, null, GC(i, (f) => $C(vm(Ma), {
          value: f.id,
          key: f.id
        }, {
          default: Vm(() => [
            jC(HC(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Kv = /* @__PURE__ */ we(KC, [["__scopeId", "data-v-4fded793"]]);
const eW = window.Vue.openBlock, tW = window.Vue.createElementBlock, nW = window.Vue.pushScopeId, rW = window.Vue.popScopeId, gm = window.Vue.createElementVNode;
var oW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const aW = {}, iW = (e) => (nW("data-v-2263be39"), e = e(), rW(), e), sW = { class: "spinner-container" }, lW = /* @__PURE__ */ iW(() => /* @__PURE__ */ gm("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ gm("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), cW = [
  lW
];
function uW(e, r) {
  return eW(), tW("div", sW, cW);
}
var e1 = /* @__PURE__ */ oW(aW, [["render", uW], ["__scopeId", "data-v-2263be39"]]);
const dW = window.Vue.defineComponent, Tm = window.Vue.resolveComponent, Ii = window.Vue.openBlock, Oi = window.Vue.createElementBlock, Ic = window.Vue.createElementVNode, Um = window.Vue.normalizeClass, fW = window.Vue.withModifiers, ym = window.Vue.renderSlot, hW = window.Vue.createTextVNode, pW = window.Vue.toDisplayString, Oc = window.Vue.createVNode, mW = window.Vue.Transition, wW = window.Vue.withCtx, vW = window.Vue.createCommentVNode;
var VW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const gW = {
  modelValue: {
    type: Boolean,
    default: !1,
    required: !1
  },
  level: {
    type: Number,
    default: 4,
    required: !1
  },
  title: {
    type: String,
    required: !1
  },
  disabled: {
    type: Boolean,
    default: !1,
    required: !1
  },
  loading: {
    type: Boolean,
    default: !1,
    required: !1
  }
}, TW = {
  "update:modelValue": (e) => !0
}, UW = dW({
  name: "FeatherExpansionPanel",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: TW,
  props: gW,
  watch: {
    modelValue: {
      immediate: !0,
      handler(e) {
        this.internalState = e;
      }
    }
  },
  data() {
    return {
      internalState: this.modelValue
    };
  },
  computed: {
    expanded() {
      return this.disabled ? !1 : this.internalState;
    },
    downIcon() {
      return Ds;
    },
    contentId() {
      return le("feather-expansion-panel");
    },
    headerId() {
      return le("feather-expansion-header");
    }
  },
  methods: {
    handleClick() {
      this.disabled || (this.internalState = !this.internalState, this.$emit("update:modelValue", this.internalState));
    },
    enter(e) {
      const r = e, o = getComputedStyle(r).width;
      r.style.width = o, r.style.position = "absolute", r.style.visibility = "hidden", r.style.height = "auto";
      const i = getComputedStyle(r).height;
      r.style.width = "", r.style.position = "", r.style.visibility = "", r.style.height = "0", getComputedStyle(r).height, setTimeout(() => {
        r.style.height = i;
      });
    },
    afterEnter(e) {
      const r = e;
      r.style.height = "auto";
    },
    leave(e) {
      const r = e, o = getComputedStyle(r).height;
      r.style.height = o, getComputedStyle(r).height, setTimeout(() => {
        r.style.height = "0";
      });
    }
  },
  components: {
    FeatherIcon: j,
    FeatherSpinner: e1
  }
}), yW = { class: "feather-expansion" }, NW = ["aria-level"], kW = ["id", "aria-controls", "aria-expanded", "aria-disabled", "aria-busy"], RW = { class: "feather-expansion-header-button-text" }, MW = ["id", "aria-labelledby"], bW = {
  key: 0,
  class: "panel-content"
}, ZW = {
  key: 1,
  class: "panel-content"
};
function SW(e, r, o, i, s, c) {
  const d = Tm("FeatherIcon"), f = Tm("FeatherSpinner");
  return Ii(), Oi("div", yW, [
    Ic("div", {
      "aria-level": e.level,
      role: "heading"
    }, [
      Ic("a", {
        href: "#",
        class: Um(["feather-expansion-header-button", { expanded: e.expanded, disabled: e.disabled }]),
        role: "button",
        id: e.headerId,
        "aria-controls": e.contentId,
        "aria-expanded": e.expanded ? "true" : "false",
        "aria-disabled": e.disabled ? "true" : "false",
        "aria-busy": e.loading ? "true" : "false",
        onClick: r[0] || (r[0] = fW((...m) => e.handleClick && e.handleClick(...m), ["prevent"])),
        "data-ref-id": "feather-expansion-header-button"
      }, [
        Ic("span", RW, [
          ym(e.$slots, "title", {}, () => [
            hW(pW(e.title), 1)
          ], !0)
        ]),
        Oc(d, {
          class: Um(["feather-expansion-header-button-icon", { rotated: e.expanded, disabled: e.disabled }]),
          icon: e.downIcon
        }, null, 8, ["icon", "class"])
      ], 10, kW)
    ], 8, NW),
    Oc(mW, {
      name: "expand",
      onEnter: e.enter,
      onAfterEnter: e.afterEnter,
      onLeave: e.leave
    }, {
      default: wW(() => [
        e.expanded ? (Ii(), Oi("div", {
          key: 0,
          id: e.contentId,
          "aria-labelledby": e.headerId,
          role: "region",
          "data-ref-id": "feather-expansion-content"
        }, [
          e.loading ? (Ii(), Oi("div", bW, [
            Oc(f)
          ])) : (Ii(), Oi("div", ZW, [
            ym(e.$slots, "default", {}, void 0, !0)
          ]))
        ], 8, MW)) : vW("", !0)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onLeave"])
  ]);
}
var Va = /* @__PURE__ */ VW(UW, [["render", SW], ["__scopeId", "data-v-ddc90408"]]);
const EW = window.Vue.defineComponent, Lt = window.Vue.createElementVNode, sn = window.Vue.unref, Ft = window.Vue.createVNode, Qi = window.Vue.withCtx, zi = window.Vue.toDisplayString, JW = window.Vue.renderList, AW = window.Vue.Fragment, $r = window.Vue.openBlock, Xr = window.Vue.createElementBlock, Qc = window.Vue.createCommentVNode, FW = window.Vue.pushScopeId, CW = window.Vue.popScopeId, td = (e) => (FW("data-v-e53cf56b"), e = e(), CW(), e), WW = { class: "list-main" }, _W = { class: "header" }, xW = /* @__PURE__ */ td(() => /* @__PURE__ */ Lt("h2", null, "Situation List", -1)), BW = /* @__PURE__ */ td(() => /* @__PURE__ */ Lt("span", null, "View Unassociated Alarms", -1)), DW = { class: "content" }, IW = { class: "filters" }, OW = /* @__PURE__ */ td(() => /* @__PURE__ */ Lt("span", null, "Reset Filters", -1)), QW = { class: "container" }, zW = { class: "autocomplete" }, GW = {
  key: 0,
  class: "situation-list"
}, YW = {
  key: 1,
  class: "container empty"
}, PW = {
  key: 2,
  class: "footer-pager"
}, HW = window.Vue.reactive, Qn = window.Vue.ref, jW = window.Vue.watch, $W = window.Vue.markRaw, XW = window.VueRouter.useRouter, LW = /* @__PURE__ */ EW({
  __name: "SituationList",
  setup(e) {
    const r = $W({
      Add: Bs,
      View: kJ
    }), o = XW(), i = en();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms();
    const s = 9, c = HW({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), d = Qn(!1), f = Qn(0), m = Qn(1), v = Qn(0), V = Qn(!1), T = Qn(["all"]), U = Qn(1), E = Qn(!0), S = (X) => {
      f.value = 0, c.situations = X[0], m.value = X.length;
    }, A = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    jW(
      () => i.situations,
      () => {
        A(), v.value = i.situations.length, c.allSituations = me.exports.chunk(i.situations, s);
        const X = i.situations.map((G) => G.id);
        i.filteredSituations = X, S(c.allSituations), W();
      }
    );
    const W = () => {
      i.filters && (i.filters.node && (c.nodeSelectedValue = i.filters.node), i.filters.severities && (T.value = i.filters.severities), U.value = i.filters.timeStart, _(), i.filters = null);
    }, F = (X) => {
      if (!X)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((G) => G.label.toLowerCase().indexOf(X) > -1).map((G) => ({
        _text: G.label,
        id: G.id
      })), d.value = !1;
    }, _ = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let X = i.situations.map((G) => {
          if (G.relatedAlarms.filter(
            (ge) => {
              var de;
              return ge.nodeLabel === ((de = c.nodeSelectedValue) == null ? void 0 : de._text);
            }
          ).length > 0)
            return G;
        }).filter((G) => G);
        X && (C(X), V.value = !0);
      } else
        c.nodeSelectedValue = void 0, V.value = !0, C(i.situations);
    }, C = (X) => {
      let G = X;
      T.value.includes("all") || (G = X.filter(
        (ge) => T.value.includes(ge.severity)
      )), U.value !== 1 && (G = Nv(
        U.value,
        G
      )), c.situations = G, v.value = G.length;
      const se = G.map((ge) => ge.id);
      i.filteredSituations = se;
    }, D = (X) => {
      f.value = X, c.situations = c.allSituations[f.value];
    }, M = (X) => {
      (c.nodeSelectedValue || T.value.length || U.value !== 1) && (i.filters = {
        node: c.nodeSelectedValue,
        severities: T.value,
        timeStart: U.value
      }), o.push({
        name: "situationDetail",
        params: {
          id: X
        }
      });
    }, z = (X) => {
      U.value = X, B();
    }, Q = (X) => {
      T.value = X, B();
    }, B = () => {
      T.value.includes("all") && U.value === 1 && !c.nodeSelectedValue ? K() : _();
    }, $ = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, K = () => {
      T.value = ["all"], U.value = 1, c.nodeSelectedValue = void 0;
      const X = i.situations.map((G) => G.id);
      i.filteredSituations = X, v.value = i.situations.length, S(c.allSituations), V.value = !1;
    };
    return (X, G) => ($r(), Xr("div", WW, [
      Lt("div", _W, [
        xW,
        Lt("div", null, [
          Ft(sn(Ve), {
            class: "view-situation-btn",
            onClick: G[0] || (G[0] = () => $())
          }, {
            default: Qi(() => [
              Ft(sn(j), {
                icon: sn(r).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              BW
            ]),
            _: 1
          }),
          Ft(Pv)
        ])
      ]),
      Lt("div", DW, [
        Lt("div", IW, [
          Ft(sn(Ve), {
            class: "reset-btn",
            onClick: G[1] || (G[1] = () => K())
          }, {
            default: Qi(() => [
              Ft(sn(j), {
                icon: sn(Cv),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              OW
            ]),
            _: 1
          }),
          Ft(sn(Va), {
            title: "By Severity",
            modelValue: E.value,
            "onUpdate:modelValue": G[2] || (G[2] = (se) => E.value = se)
          }, {
            default: Qi(() => [
              Ft(Vo, {
                alarms: sn(i).situations,
                "pre-selected": T.value,
                onSelectedOption: Q,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Ft(sn(Va), {
            title: "By Start Date",
            modelValue: E.value,
            "onUpdate:modelValue": G[3] || (G[3] = (se) => E.value = se)
          }, {
            default: Qi(() => [
              Ft(Kv, {
                onFilterDateSelected: z,
                "pre-selected": U.value
              }, null, 8, ["pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Lt("div", QW, [
          Lt("div", zW, [
            Lt("div", null, " Result: " + zi(c.situations.length) + " of " + zi(v.value), 1),
            Ft(sn(Yv), {
              class: "map-search",
              label: "Find by node",
              loading: d.value,
              modelValue: c.nodeSelectedValue,
              "onUpdate:modelValue": [
                G[4] || (G[4] = (se) => c.nodeSelectedValue = se),
                _
              ],
              results: c.results,
              type: "single",
              onSearch: F
            }, null, 8, ["loading", "modelValue", "results"])
          ]),
          c.situations && c.situations.length > 0 ? ($r(), Xr("div", GW, [
            ($r(!0), Xr(AW, null, JW(c.situations, (se) => ($r(), Xr("div", {
              class: "card",
              key: se.id
            }, [
              Ft(kv, {
                onClick: () => M(se.id),
                "situation-info": se
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : Qc("", !0),
          !c.situations || c.situations.length == 0 ? ($r(), Xr("div", YW, " No results found ")) : Qc("", !0),
          !V.value && v.value > s ? ($r(), Xr("div", PW, [
            Lt("div", null, "Page: " + zi(f.value + 1) + " of " + zi(m.value), 1),
            Ft(vZ, {
              onGoToPage: D,
              currentPage: f.value,
              totalPages: m.value
            }, null, 8, ["currentPage", "totalPages"])
          ])) : Qc("", !0)
        ])
      ])
    ]));
  }
});
const qW = /* @__PURE__ */ we(LW, [["__scopeId", "data-v-e53cf56b"]]);
const Gi = window.Vue.ref, KW = window.Vue.inject, e_ = window.Vue.computed, t_ = window.Vue.onMounted, t1 = {
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
}, n1 = (e) => {
  const r = Gi(!1), o = Gi(), i = Gi(e.controls), s = Gi(e.id), c = () => {
    o.value && o.value.focus();
  }, d = KW("registerTab");
  t_(() => {
    if (o.value && d) {
      const m = o.value.parentElement, v = m && m.parentElement ? m.parentElement : void 0, V = Array.from(v ? v.children : []).filter((U) => U.querySelectorAll("[role=tab]").length), T = m ? V.indexOf(m) : -1;
      d({
        el: o.value,
        focus: c,
        disabled: e.disabled,
        selected: r,
        id: s,
        controls: i,
        index: T
      });
    }
  });
  const f = e_(() => ({
    role: "tab",
    ref: "tab",
    tabindex: r.value ? 0 : -1,
    id: s.value,
    "aria-selected": r.value,
    "aria-controls": i.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: r,
    attrs: f,
    tab: o
  };
}, Nm = window.Vue.ref, n_ = window.Vue.toRef, r_ = window.Vue.watch, km = window.Vue.provide, r1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, o1 = {
  "update:modelValue": (e) => !0
}, a1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, i1 = (e, r) => {
  const o = n_(e, "modelValue"), i = Nm(e.modelValue), s = Nm([]);
  r_(o, (S) => {
    m(S);
  });
  const c = (S) => {
    S.preventDefault(), s.value.some((A, W) => A.tab && A.tab.el.contains(S.target) ? (f(W), m(W), !0) : !1);
  }, d = (S) => {
    if (((B) => B.shiftKey || B.ctrlKey || B.metaKey || B.altKey)(S))
      return;
    const W = S.keyCode, F = (B) => {
      B.stopPropagation(), B.preventDefault();
    }, _ = s.value.filter((B) => B.tab && !B.tab.disabled), C = s.value.findIndex((B) => B.tab && B.tab.el.contains(document.activeElement));
    let D = C !== -1 ? C : i.value;
    const M = [ne.RIGHT], z = [ne.LEFT], Q = [ne.ENTER, ne.SPACE];
    e.vertical && (M.push(ne.DOWN), z.push(ne.UP)), M.indexOf(W) > -1 ? (D++, D >= _.length && (D = 0), F(S), f(s.value.indexOf(_[D]))) : z.indexOf(W) > -1 && (D--, D < 0 && (D = _.length - 1), F(S), f(s.value.indexOf(_[D]))), Q.indexOf(W) > -1 && m(D);
  }, f = (S) => {
    s.value.forEach(function(A, W) {
      S === W && A.tab && A.tab.focus();
    });
  }, m = (S) => {
    const A = s.value[S];
    !A || A.tab && A.tab.disabled || (s.value.forEach((W, F) => {
      W.tab && (W.tab.selected = S === F), W.panel && (W.panel.selected = S === F);
    }), i.value = S, r.emit("update:modelValue", S));
  };
  km("registerTab", (S) => {
    const A = S.index;
    A > -1 && (s.value[A] = { ...s.value[A], tab: S }, s.value = [...s.value], T());
  }), km("registerPanel", (S) => {
    const A = S.index;
    A > -1 && (s.value[A] = {
      ...s.value[A],
      panel: S
    }, s.value = [...s.value], T());
  });
  const T = () => {
    s.value.forEach(({ tab: S, panel: A }, W) => {
      if (A && S) {
        const F = S.id || le("tab"), _ = S.controls || le("panel");
        S.controls = _, S.id = F, A.tab = F, A.id = _;
      }
      W === i.value && (A && (A.selected = !0), S && (S.selected = !0));
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
    selected: i,
    pairs: s
  };
}, Yi = window.Vue.ref, o_ = window.Vue.inject, a_ = window.Vue.computed, i_ = window.Vue.onMounted, s1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, l1 = (e) => {
  const r = Yi(!1), o = Yi(), i = Yi(e.tab), s = Yi(e.id), c = o_("registerPanel");
  i_(() => {
    if (c) {
      const f = o.value, m = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      c({
        selected: r,
        id: s,
        tab: i,
        el: o.value,
        index: v
      });
    }
  });
  const d = a_(() => ({
    role: "tabpanel",
    id: s.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": r.value,
    "aria-labelledby": i.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: r,
    attrs: d,
    panel: o
  };
}, nd = window.Vue.defineComponent, s_ = window.Vue.resolveComponent, rd = window.Vue.openBlock, od = window.Vue.createElementBlock, ga = window.Vue.createElementVNode, c1 = window.Vue.mergeProps, ks = window.Vue.renderSlot, l_ = window.Vue.createVNode, c_ = window.Vue.normalizeStyle, u_ = window.Vue.toHandlers, d_ = window.Vue.withDirectives, f_ = window.Vue.normalizeProps, h_ = window.Vue.guardReactiveProps, p_ = window.Vue.vShow;
var ad = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const m_ = t1, w_ = nd({
  props: m_,
  setup(e) {
    return n1(e);
  },
  components: {
    FeatherRipple: Ln
  }
}), v_ = { role: "presentation" }, V_ = { class: "tab-text" };
function g_(e, r, o, i, s, c) {
  const d = s_("FeatherRipple");
  return rd(), od("li", v_, [
    ga("button", c1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      ga("span", V_, [
        ks(e.$slots, "default", {}, void 0, !0)
      ]),
      l_(d)
    ], 16)
  ]);
}
var Rm = /* @__PURE__ */ ad(w_, [["render", g_], ["__scopeId", "data-v-e6bb52b6"]]);
const T_ = a1, U_ = o1, y_ = nd({
  model: r1,
  emits: U_,
  props: T_,
  setup(e, r) {
    return i1(e, r);
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
      handler(e) {
        e && e.length && this.ro && e.forEach((r) => {
          r.tab && this.ro.observe(r.tab.el);
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
        const e = this.$el.getBoundingClientRect(), r = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), o = r.left - e.left, i = r.height - 2;
        this.width = `${r.width}px`, this.transform = `translateX(${o}px) translateY(${i}px)`;
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
}), N_ = { class: "feather-tab-container" }, k_ = { class: "tab-panels" };
function R_(e, r, o, i, s, c) {
  return rd(), od("div", N_, [
    ga("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: c_({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    ga("ul", c1(e.attrs, u_(e.listeners)), [
      ks(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    ga("div", k_, [
      ks(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var M_ = /* @__PURE__ */ ad(y_, [["render", R_], ["__scopeId", "data-v-27adffb9"]]);
const b_ = s1, Z_ = nd({
  props: b_,
  setup(e) {
    return l1(e);
  }
});
function S_(e, r, o, i, s, c) {
  return d_((rd(), od("div", f_(h_(e.attrs)), [
    ks(e.$slots, "default")
  ], 16)), [
    [p_, e.selected]
  ]);
}
var Mm = /* @__PURE__ */ ad(Z_, [["render", S_]]);
const E_ = window.Vue.defineComponent, J_ = window.Vue.toDisplayString, A_ = window.Vue.normalizeClass, F_ = window.Vue.openBlock, C_ = window.Vue.createElementBlock, W_ = window.Vue.createCommentVNode, __ = /* @__PURE__ */ E_({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (F_(), C_("span", {
      key: 0,
      class: A_(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, J_(r.severity), 3)) : W_("", !0);
  }
});
const u1 = /* @__PURE__ */ we(__, [["__scopeId", "data-v-83c2cdce"]]), x_ = window.Vue.defineComponent, bm = window.Vue.toDisplayString, Zm = window.Vue.createElementVNode, B_ = window.Vue.openBlock, D_ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const I_ = { class: "box" }, O_ = { class: "label" }, Q_ = { class: "date" }, z_ = /* @__PURE__ */ x_({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (B_(), D_("div", I_, [
      Zm("div", O_, bm(r.label), 1),
      Zm("div", Q_, bm(r.info), 1)
    ]));
  }
});
const zc = /* @__PURE__ */ we(z_, [["__scopeId", "data-v-b4afa751"]]), id = "/alec", G_ = "/alec/engine/configuration", d1 = "/alec/agreement/configuration", Y_ = "/alec/situation", f1 = async (e) => {
  try {
    return (await hn.post(`${d1}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, P_ = async () => {
  try {
    const e = await hn.get(`${d1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, H_ = async (e, r) => {
  try {
    return (await hn.post(G_, {
      distanceMeasureName: r ? yt.HELLINGER_OPTION : yt.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, h1 = async (e, r) => {
  try {
    return (await hn.post(`${id}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Sm = async (e, r) => {
  try {
    return (await hn.delete(`${id}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, p1 = async (e, r) => {
  try {
    return (await hn.put(`${id}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, j_ = async (e) => {
  try {
    return (await hn.post(Y_, e)).status === 200;
  } catch {
    return !1;
  }
}, $_ = window.Vue.defineComponent, X_ = window.Vue.unref, L_ = window.Vue.renderList, q_ = window.Vue.Fragment, Gc = window.Vue.openBlock, Yc = window.Vue.createElementBlock, K_ = window.Vue.toDisplayString, ex = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tx = { class: "alarms-list" }, nx = /* @__PURE__ */ $_({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Gc(), Yc("div", tx, [
      (Gc(!0), Yc(q_, null, L_(X_(me.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (s, c) => (Gc(), Yc("div", {
        class: ex(["alarm-count", [`${c.toString().toLowerCase()}-color`, r.size]]),
        key: c
      }, K_(s.length), 3))), 128))
    ]));
  }
});
const rx = /* @__PURE__ */ we(nx, [["__scopeId", "data-v-52d63440"]]), ox = window.Vue.openBlock, ax = window.Vue.createElementBlock, ix = window.Vue.createElementVNode;
var sx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const lx = {}, cx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ux = /* @__PURE__ */ ix("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), dx = [
  ux
];
function fx(e, r) {
  return ox(), ax("svg", cx, dx);
}
var hx = /* @__PURE__ */ sx(lx, [["render", fx]]);
const px = window.Vue.openBlock, mx = window.Vue.createElementBlock, wx = window.Vue.createStaticVNode;
var vx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Vx = {}, gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Tx = /* @__PURE__ */ wx('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), Ux = [
  Tx
];
function yx(e, r) {
  return px(), mx("svg", gx, Ux);
}
var Mu = /* @__PURE__ */ vx(Vx, [["render", yx]]);
const Nx = window.Vue.defineComponent, Ht = window.Vue.unref, Pc = window.Vue.createVNode, sd = window.Vue.createElementVNode, Hc = window.Vue.withCtx, Pi = window.Vue.openBlock, jc = window.Vue.createBlock, $c = window.Vue.createCommentVNode, kx = window.Vue.normalizeClass, Rx = window.Vue.createElementBlock, Mx = window.Vue.pushScopeId, bx = window.Vue.popScopeId, ld = (e) => (Mx("data-v-e073070b"), e = e(), bx(), e), Zx = /* @__PURE__ */ ld(() => /* @__PURE__ */ sd("span", null, "Acknowledge", -1)), Sx = /* @__PURE__ */ ld(() => /* @__PURE__ */ sd("span", null, "Escalate", -1)), Ex = /* @__PURE__ */ ld(() => /* @__PURE__ */ sd("span", null, "Clear", -1)), Jx = /* @__PURE__ */ Nx({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = en(), i = async (c) => {
      await rM(r.alarm.id, c) && o.getSituation(r.situationId), r.isSituation && await h1(
        r.situationId,
        yt.ACCEPTED.toLowerCase()
      );
    }, s = async (c) => {
      await oM(r.alarm.id, c) && o.getSituation(r.situationId);
    };
    return (c, d) => (Pi(), Rx("div", {
      class: kx(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? $c("", !0) : (Pi(), jc(Ht(Ve), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => i(!0))
      }, {
        default: Hc(() => [
          Pc(Ht(j), {
            icon: Ht(wo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          Zx
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Pi(), jc(Ht(Ve), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Ht(yt).ESCALATE))
      }, {
        default: Hc(() => [
          Pc(Ht(j), {
            icon: Ht(hx),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          Sx
        ]),
        _: 1
      })) : $c("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Pi(), jc(Ht(Ve), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Ht(yt).CLEAR))
      }, {
        default: Hc(() => [
          Pc(Ht(j), {
            icon: Ht(Mu),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          Ex
        ]),
        _: 1
      })) : $c("", !0)
    ], 2));
  }
});
const m1 = /* @__PURE__ */ we(Jx, [["__scopeId", "data-v-e073070b"]]);
var Ax = Object.defineProperty, Fx = Object.defineProperties, Cx = Object.getOwnPropertyDescriptors, Em = Object.getOwnPropertySymbols, Wx = Object.prototype.hasOwnProperty, _x = Object.prototype.propertyIsEnumerable, Jm = (e, r, o) => r in e ? Ax(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, bu = (e, r) => {
  for (var o in r || (r = {}))
    Wx.call(r, o) && Jm(e, o, r[o]);
  if (Em)
    for (var o of Em(r))
      _x.call(r, o) && Jm(e, o, r[o]);
  return e;
}, w1 = (e, r) => Fx(e, Cx(r));
const v1 = window.Vue.defineComponent, xx = window.Vue.inject, Bx = window.Vue.resolveComponent, Xc = window.Vue.openBlock, Am = window.Vue.createElementBlock, co = window.Vue.createElementVNode, Dx = window.Vue.createBlock, Fm = window.Vue.createCommentVNode, Ix = window.Vue.renderSlot, Ox = window.Vue.pushScopeId, Qx = window.Vue.popScopeId, Lc = window.Vue.toRef, Hi = window.Vue.computed, zx = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var Gx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Yx = {
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
}, Px = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, Hx = v1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Px,
  props: Yx,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: xx("registerCheckbox", (r) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : le("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : le("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(e) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", e);
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
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === ne.SPACE || e.keyCode === ne.ENTER) && this.updateValue(), e.keyCode === ne.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Ln
  }
}), jx = (e) => (Ox("data-v-a7af27e2"), e = e(), Qx(), e), $x = { class: "layout-container" }, Xx = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], Lx = { class: "checkbox hover focus" }, qx = /* @__PURE__ */ jx(() => /* @__PURE__ */ co("div", { class: "box" }, [
  /* @__PURE__ */ co("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ co("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ co("div", { class: "indeterminate" })
], -1)), Kx = ["id", "for"];
function eB(e, r, o, i, s, c) {
  const d = Bx("feather-ripple");
  return Xc(), Am("div", $x, [
    co("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: r[0] || (r[0] = (...f) => e.click && e.click(...f)),
      onKeydown: r[1] || (r[1] = (...f) => e.keydown && e.keydown(...f)),
      "aria-checked": e.modelValue ? "true" : e.indeterminate ? "mixed" : "false",
      "aria-disabled": e.disabled,
      "aria-labelledby": e.labelId,
      "aria-label": e.label,
      id: e.inputId,
      tabindex: e.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      co("div", Lx, [
        qx,
        e.disabled ? Fm("", !0) : (Xc(), Dx(d, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Fm("", !0) : (Xc(), Am("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        Ix(e.$slots, "default", {}, void 0, !0)
      ], 8, Kx))
    ], 40, Xx)
  ]);
}
var xa = /* @__PURE__ */ Gx(Hx, [["render", eB], ["__scopeId", "data-v-a7af27e2"]]);
const tB = w1(bu({}, Fa), {
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
v1({
  props: tB,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    Ca(e);
    const o = Lc(e, "error"), i = Hi(() => le("feather-checkbox-group")), s = Hi(() => le("feather-input-description")), c = Hi(() => le("feather-input-label")), d = Hi(() => {
      const V = JSON.parse(JSON.stringify(r.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!o.value), w1(bu({}, V), {
        class: "",
        "aria-describedby": s.value
      });
    }), f = zx(i.value), { validate: m } = Ja(f, Lc(e, "modelValue"), e.label, e.schema, Lc(e, "error"));
    return bu({
      groupId: i,
      inputId: f,
      descriptionId: s,
      labelId: c,
      attrs: d,
      validate: m,
      registerCheckbox: (V) => {
        V && f.value === i.value && (f.value = V);
      }
    }, Aa(r.attrs));
  },
  components: {
    InputSubText: Ea
  }
});
const nB = window.Vue.openBlock, rB = window.Vue.createElementBlock, V1 = window.Vue.createElementVNode;
var oB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const aB = {}, iB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sB = /* @__PURE__ */ V1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), lB = /* @__PURE__ */ V1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), cB = [
  sB,
  lB
];
function uB(e, r) {
  return nB(), rB("svg", iB, cB);
}
var dB = /* @__PURE__ */ oB(aB, [["render", uB]]);
var fB = Object.defineProperty, hB = Object.defineProperties, pB = Object.getOwnPropertyDescriptors, Cm = Object.getOwnPropertySymbols, mB = Object.prototype.hasOwnProperty, wB = Object.prototype.propertyIsEnumerable, Wm = (e, r, o) => r in e ? fB(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, uo = (e, r) => {
  for (var o in r || (r = {}))
    mB.call(r, o) && Wm(e, o, r[o]);
  if (Cm)
    for (var o of Cm(r))
      wB.call(r, o) && Wm(e, o, r[o]);
  return e;
}, g1 = (e, r) => hB(e, pB(r));
const vB = window.Vue.defineComponent, qc = window.Vue.toRef, VB = window.Vue.computed, _m = window.Vue.resolveComponent, xm = window.Vue.openBlock, Bm = window.Vue.createElementBlock, Dm = window.Vue.mergeProps, Im = window.Vue.createVNode, gB = window.Vue.normalizeClass, Om = window.Vue.withCtx, TB = window.Vue.createElementVNode, UB = window.Vue.toDisplayString, yB = window.Vue.createCommentVNode;
var NB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kB = g1(uo(uo({}, Hu), Fa), {
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
}), RB = {
  "update:modelValue": (e) => !0
}, MB = vB({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: RB,
  props: kB,
  setup(e, r) {
    Ca(e), ju(e);
    const o = qc(e, "id"), i = VB(() => o.value ? o.value : le("feather-textarea-label")), { validate: s } = Ja(i, qc(e, "modelValue"), e.label, e.schema, qc(e, "error"));
    return uo({
      inputId: i,
      incomingId: o,
      validate: s
    }, Aa(r.attrs));
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
      return le("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const e = [];
      return this.error && e.push("error"), this.disabled && e.push("disabled"), this.focused && e.push("focused"), e;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const e = uo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), g1(uo(uo({}, e), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (e["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (e) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(e);
        },
        onBlur: (e) => {
          this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(e);
        },
        onInput: (e) => {
          this.adjustTextArea(), this.handleInput(e);
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
      handler(e) {
        this.adjustTextArea(), this.internalValue = e;
      }
    },
    internalValue: {
      immediate: !0,
      handler(e) {
        this.$emit("update:modelValue", e);
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
    handleInput(e) {
      this.internalValue = e.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const e = this.$refs.input;
      !e || (e.style.height = "12px", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const r = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && r < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight < this.initialHeight ? this.initialHeight : e.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const e = this.$refs.input;
    this.initialHeight = e.getBoundingClientRect().height;
  },
  components: {
    InputSubText: Ea,
    InputWrapper: Pu
  }
}), bB = ["maxlength"], ZB = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function SB(e, r, o, i, s, c) {
  const d = _m("InputWrapper"), f = _m("InputSubText");
  return xm(), Bm("div", Dm(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Im(d, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: gB(["feather-textarea-content", e.contentCls])
    }, {
      default: Om(() => [
        TB("textarea", Dm(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, bB)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Im(f, { id: e.descriptionId }, {
      right: Om(() => [
        e.maxlength ? (xm(), Bm("div", ZB, UB(e.charCount), 1)) : yB("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Zu = /* @__PURE__ */ NB(MB, [["render", SB], ["__scopeId", "data-v-0648df5c"]]);
const EB = window.Pinia.defineStore, Qs = EB("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(e) {
      this.showError = !0, this.errorMessage = e, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), JB = window.Vue.defineComponent, Qm = window.Vue.toDisplayString, ea = window.Vue.createElementVNode, fr = window.Vue.unref, Lr = window.Vue.openBlock, zm = window.Vue.createBlock, ta = window.Vue.createCommentVNode, Gm = window.Vue.createVNode, ji = window.Vue.createElementBlock, AB = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const FB = { class: "row" }, CB = { class: "label" }, WB = { class: "action-icons" }, _B = { class: "icon-btn" }, xB = {
  key: 0,
  class: "icon-btn"
}, BB = {
  key: 1,
  class: "icon-btn"
}, DB = {
  key: 0,
  class: "text"
}, IB = window.Vue.watch, Ym = window.Vue.ref, OB = /* @__PURE__ */ JB({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(e) {
    var m;
    const r = e, o = Qs(), i = Ym(!1), s = Ym((m = r.memo) == null ? void 0 : m.body);
    IB(r, () => {
      var v;
      s.value = (v = r.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const c = () => {
      i.value = !i.value;
    }, d = async () => {
      i.value = !1, await dM(r.id, r.type) ? s.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, s.value && s.value !== "" && (await uM(r.id, r.type, s.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (v, V) => (Lr(), ji("div", {
      class: AB([r.boxType === "small" ? "box-small" : "box"])
    }, [
      ea("div", FB, [
        ea("div", CB, Qm(e.label), 1),
        ea("div", WB, [
          ea("div", _B, [
            i.value ? ta("", !0) : (Lr(), zm(fr(j), {
              key: 0,
              icon: fr(dB),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Lr(), ji("div", xB, [
            Gm(fr(j), {
              icon: fr(wo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : ta("", !0),
          s.value && s.value != "" || i.value ? (Lr(), ji("div", BB, [
            Gm(fr(j), {
              icon: fr(Uo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : ta("", !0)
        ])
      ]),
      ea("div", null, [
        !i.value && s.value != null ? (Lr(), ji("div", DB, Qm(s.value), 1)) : ta("", !0),
        i.value ? (Lr(), zm(fr(Zu), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": V[0] || (V[0] = (T) => s.value = T),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : ta("", !0)
      ])
    ], 2));
  }
});
const Rs = /* @__PURE__ */ we(OB, [["__scopeId", "data-v-3f44e250"]]), QB = window.Vue.defineComponent, hr = window.Vue.unref, qr = window.Vue.createVNode, na = window.Vue.toDisplayString, qt = window.Vue.createElementVNode, Pm = window.Vue.openBlock, Hm = window.Vue.createElementBlock, jm = window.Vue.createCommentVNode, Kc = window.Vue.createTextVNode, zB = window.Vue.pushScopeId, GB = window.Vue.popScopeId, cd = (e) => (zB("data-v-a78bcbcc"), e = e(), GB(), e), YB = {
  key: 0,
  class: "card"
}, PB = { class: "row" }, HB = { class: "title" }, jB = {
  key: 0,
  class: "ack"
}, $B = /* @__PURE__ */ cd(() => /* @__PURE__ */ qt("strong", null, " Duration: ", -1)), XB = ["innerHTML"], LB = /* @__PURE__ */ cd(() => /* @__PURE__ */ qt("strong", null, "First Event", -1)), qB = /* @__PURE__ */ cd(() => /* @__PURE__ */ qt("strong", null, "Last Event", -1)), KB = { class: "section memo-boxes" }, $m = window.Vue.ref, e3 = window.Vue.watch, t3 = /* @__PURE__ */ QB({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, i = $m(!1), s = $m(o.alarm), c = new Date().getTime();
    e3(o, () => {
      s.value = o.alarm, i.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const d = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (m) => {
      const v = await pv(m);
      v && (s.value = v);
    };
    return (m, v) => {
      var V, T, U, E, S;
      return s.value ? (Pm(), Hm("div", YB, [
        qt("div", null, [
          qt("div", PB, [
            qr(hr(xa), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (A) => i.value = A),
                d
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            qt("div", HB, na(s.value.nodeLabel) + " - " + na(s.value.id), 1),
            qr(u1, {
              severity: (V = s.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (Pm(), Hm("div", jB, [
              qr(hr(j), {
                icon: hr(wo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : jm("", !0)
          ]),
          qt("div", null, [
            $B,
            Kc(" " + na(hr(As)(hr(c), new Date(s.value.firstEventTime))), 1)
          ]),
          qt("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, XB),
          qt("div", null, [
            LB,
            Kc(" - " + na(hr(dn)(s.value.firstEventTime)), 1)
          ]),
          qt("div", null, [
            qB,
            Kc(" - " + na(hr(dn)(s.value.lastEventTime)), 1)
          ]),
          qt("div", KB, [
            qr(Rs, {
              id: (T = s.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (U = s.value) == null ? void 0 : U.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            qr(Rs, {
              id: (E = s.value) == null ? void 0 : E.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (S = s.value) == null ? void 0 : S.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        qr(m1, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : jm("", !0);
    };
  }
});
const n3 = /* @__PURE__ */ we(t3, [["__scopeId", "data-v-a78bcbcc"]]), r3 = window.Vue.openBlock, o3 = window.Vue.createElementBlock, T1 = window.Vue.createElementVNode;
var a3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const i3 = {}, s3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, l3 = /* @__PURE__ */ T1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), c3 = /* @__PURE__ */ T1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), u3 = [
  l3,
  c3
];
function d3(e, r) {
  return r3(), o3("svg", s3, u3);
}
var Su = /* @__PURE__ */ a3(i3, [["render", d3]]);
const f3 = window.Vue.watch, h3 = window.Vue.ref, p3 = window.Vue.onBeforeUnmount, U1 = (e) => {
  const r = h3(!1), o = (i) => {
    i.keyCode === ne.ESCAPE && (i.preventDefault(), r.value = !r.value);
  };
  return f3(e, (i) => {
    i ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), p3(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, m3 = window.Vue.watch, y1 = (e) => {
  let r;
  m3(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, N1 = window.Vue.watch, k1 = window.Vue.onBeforeUnmount, R1 = window.Vue.nextTick, w3 = window.Vue.onMounted, M1 = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, Ms = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, b1 = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  k1(() => Ms(r, o)), w3(() => N1(e, (i) => {
    i ? R1(() => {
      r = M1(o);
    }) : Ms(r, o);
  }, { immediate: !0 }));
}, v3 = (e, r) => {
  let o;
  k1(() => Ms(o, r.value ? r.value.offsetParent : !1)), N1([e, r], ([i, s]) => {
    i && s ? R1(() => {
      o = M1(s.offsetParent);
    }) : s && Ms(o, s.offsetParent);
  }, {
    immediate: !0
  });
};
var V3 = Object.defineProperty, Xm = Object.getOwnPropertySymbols, g3 = Object.prototype.hasOwnProperty, T3 = Object.prototype.propertyIsEnumerable, Lm = (e, r, o) => r in e ? V3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, U3 = (e, r) => {
  for (var o in r || (r = {}))
    g3.call(r, o) && Lm(e, o, r[o]);
  if (Xm)
    for (var o of Xm(r))
      T3.call(r, o) && Lm(e, o, r[o]);
  return e;
};
const ud = window.Vue.defineComponent, Ta = window.Vue.ref, y3 = window.Vue.nextTick, Z1 = window.Vue.openBlock, S1 = window.Vue.createElementBlock, dd = window.Vue.createElementVNode, N3 = window.Vue.renderSlot, k3 = window.Vue.resolveComponent, R3 = window.Vue.normalizeClass, M3 = window.Vue.withModifiers, b3 = window.Vue.createVNode, qm = window.Vue.toRef, Km = window.Vue.computed, ew = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var E1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Z3 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, S3 = ud({
  props: Z3,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Ta(), r = Ta(!1), o = (V, T) => {
      let U = V.compareDocumentPosition(T);
      if (U === 2)
        return "before";
      if (U === 4)
        return "after";
      if (U === 10 || U === 12)
        return "parent";
    }, i = (V) => {
      for (var T = 0; T < V.childNodes.length; T++) {
        var U = V.childNodes[T];
        if (c(U) || i(U))
          return !0;
      }
      return !1;
    }, s = (V) => {
      for (var T = V.childNodes.length - 1; T >= 0; T--) {
        var U = V.childNodes[T];
        if (c(U) || s(U))
          return !0;
      }
      return !1;
    }, c = (V) => d(V) ? (r.value = !0, V.focus && V.focus(), r.value = !1, document.activeElement === V) : !1, d = (V) => {
      if (V.tabIndex > 0 || V.tabIndex === 0 && V.getAttribute("tabIndex") !== null)
        return !0;
      const T = V;
      if (T.disabled || T.tabIndex === -1)
        return !1;
      switch (V.nodeName) {
        case "A":
          const U = V;
          return !!U.href && U.rel !== "ignore";
        case "INPUT":
          const E = V;
          return E.type !== "hidden" && E.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (V) => {
      const T = V.querySelector("[first-focus]");
      T && T.focus ? y3(() => {
        T.focus();
      }) : i(V);
    }, m = Ta();
    return {
      trapFocus: () => {
        r.value || setTimeout(() => {
          var V = document.activeElement;
          if (e.value.contains(V)) {
            m.value = V;
            return;
          } else {
            switch (o(e.value, V)) {
              case "before":
                s(e.value);
                break;
              case "after":
                i(e.value);
                break;
              case "parent":
                f(e.value);
                break;
            }
            m.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: r,
      attemptToFocusFirst: f,
      focusLastDescendant: s,
      focusFirstDescendant: i,
      isFocusable: d,
      lastFocus: m
    };
  },
  computed: {
    ready() {
      return this.rendered && this.enable;
    }
  },
  watch: {
    ready: {
      immediate: !0,
      handler: "enableTrap"
    }
  },
  methods: {
    enableTrap(e) {
      e ? this.addFocusTrapEvents() : this.removeFocusTrapEvents();
    },
    addFocusTrapEvents() {
      document.addEventListener("blur", this.trapFocus, !0), this.content ? this.attemptToFocusFirst(this.content) : this.$nextTick(() => {
        this.content && this.attemptToFocusFirst(this.content);
      });
    },
    removeFocusTrapEvents() {
      typeof document < "u" && document.removeEventListener("blur", this.trapFocus, !0);
    }
  },
  mounted() {
    this.rendered = !0;
  },
  beforeUnmount() {
    this.removeFocusTrapEvents();
  }
}), E3 = /* @__PURE__ */ dd("div", { tabindex: "0" }, null, -1), J3 = {
  class: "focus-trap-content",
  ref: "content"
}, A3 = /* @__PURE__ */ dd("div", { tabindex: "0" }, null, -1);
function F3(e, r, o, i, s, c) {
  return Z1(), S1("div", null, [
    E3,
    dd("div", J3, [
      N3(e.$slots, "default")
    ], 512),
    A3
  ]);
}
var J1 = /* @__PURE__ */ E1(S3, [["render", F3]]);
const C3 = ud({
  emits: ["close"],
  props: {
    closeText: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    icon: () => Uo
  },
  components: {
    FeatherIcon: j
  }
}), W3 = ["aria-label"];
function _3(e, r, o, i, s, c) {
  const d = k3("FeatherIcon");
  return Z1(), S1("a", {
    href: "#",
    class: R3(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = M3((f) => e.$emit("close"), ["prevent"]))
  }, [
    b3(d, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, W3);
}
var A1 = /* @__PURE__ */ E1(C3, [["render", _3], ["__scopeId", "data-v-fc0f3f00"]]);
const F1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, x3 = {
  modelValue: {
    type: Boolean
  },
  relative: {
    type: Boolean,
    default: !1
  },
  hideTitle: {
    type: Boolean,
    default: !1
  },
  hideClose: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => F1,
    validator: (e) => !!e.title
  }
}, B3 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
ud({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: B3,
  props: x3,
  setup(e, r) {
    const o = Fs(qm(e, "labels"), F1), i = qm(e, "modelValue"), s = Ta(), c = () => {
      r.emit("update:modelValue", !1);
    }, d = Km(() => !!r.slots.footer), f = Km(() => le("dialog-header"));
    e.relative ? v3(i, s) : b1(i), y1(i), ew(U1(i), () => {
      c();
    });
    const m = Ta(e.modelValue);
    return ew(m, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), U3({ close: c, hasFooter: d, headerId: f, element: s, shown: m }, o);
  },
  components: {
    FocusTrap: J1,
    DialogClose: A1
  }
});
var D3 = Object.defineProperty, tw = Object.getOwnPropertySymbols, I3 = Object.prototype.hasOwnProperty, O3 = Object.prototype.propertyIsEnumerable, nw = (e, r, o) => r in e ? D3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, zs = (e, r) => {
  for (var o in r || (r = {}))
    I3.call(r, o) && nw(e, o, r[o]);
  if (tw)
    for (var o of tw(r))
      O3.call(r, o) && nw(e, o, r[o]);
  return e;
};
const Gs = window.Vue.defineComponent, rw = window.Vue.toRef, ow = window.Vue.watch, aw = window.Vue.ref, iw = window.Vue.resolveComponent, $i = window.Vue.openBlock, sw = window.Vue.createBlock, Q3 = window.Vue.Teleport, lw = window.Vue.createElementBlock, eu = window.Vue.createVNode, cw = window.Vue.Transition, tu = window.Vue.withCtx, uw = window.Vue.createCommentVNode, z3 = window.Vue.withDirectives, G3 = window.Vue.normalizeStyle, Y3 = window.Vue.normalizeClass, dw = window.Vue.createElementVNode, P3 = window.Vue.renderSlot, H3 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var j3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const C1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, $3 = {
  modelValue: {
    type: Boolean,
    default: !1,
    required: !0
  },
  width: {
    type: String,
    default: "auto",
    validator: (e) => e === "auto" ? !0 : /(\d*)(px|%|em|vw)/.test(e)
  },
  left: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => C1,
    validator: (e) => !!e.title
  }
}, X3 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, L3 = Gs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: X3,
  props: $3,
  setup(e, r) {
    const o = Fs(rw(e, "labels"), C1), i = rw(e, "modelValue"), s = () => {
      r.emit("update:modelValue", !1);
    };
    b1(i), y1(i), ow(U1(i), () => {
      s();
    });
    const c = aw(), d = aw(!1);
    return ow(d, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), zs({ close: s, shown: d, isShown: i, element: c }, o);
  },
  components: {
    DialogClose: A1,
    FocusTrap: J1
  }
}), q3 = {
  key: 0,
  class: "drawer-container feather-styles"
}, K3 = {
  key: 0,
  class: "greyedOut"
}, eD = ["aria-label"], tD = { class: "slot" };
function nD(e, r, o, i, s, c) {
  const d = iw("dialog-close"), f = iw("focus-trap");
  return $i(), sw(Q3, { to: "body" }, [
    e.modelValue ? ($i(), lw("div", q3, [
      eu(cw, { name: "greyOutShim" }, {
        default: tu(() => [
          e.modelValue ? ($i(), lw("div", K3)) : uw("", !0)
        ]),
        _: 1
      }),
      eu(cw, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (m) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (m) => e.shown = !1)
      }, {
        default: tu(() => [
          z3(($i(), sw(f, {
            enable: e.modelValue,
            style: G3({ width: e.width }),
            key: "sect",
            class: Y3(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: tu(() => [
              dw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                dw("div", tD, [
                  P3(e.$slots, "default", {}, void 0, !0)
                ]),
                eu(d, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, eD)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [H3, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : uw("", !0)
  ]);
}
var W1 = /* @__PURE__ */ j3(L3, [["render", nD], ["__scopeId", "data-v-0a36e1dc"]]);
const rD = zs({
  label: {
    type: String,
    required: !0
  }
}, t1);
Gs({
  name: "DrawerTab",
  props: rD,
  data() {
    return {
      showLabel: !1,
      showLabelTimeout: 0
    };
  },
  watch: {
    selected(e) {
      e && this.mouseLeave();
    }
  },
  methods: {
    mouseEnter() {
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = yr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Nr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return n1(e);
  },
  components: {
    FeatherRipple: Ln
  }
});
const oD = zs({}, a1), aD = o1;
Gs({
  emits: aD,
  model: r1,
  props: oD,
  setup(e, r) {
    return i1(e, r);
  }
});
const iD = zs({
  header: {
    type: String
  }
}, s1);
Gs({
  name: "DrawerTabContent",
  props: iD,
  setup(e) {
    return l1(e);
  },
  directives: {
    MenuFocusLoop: qJ
  }
});
const sD = window.Vue.defineComponent, Eu = window.Vue.createElementVNode, fw = window.Vue.unref, lD = window.Vue.renderList, cD = window.Vue.Fragment, nu = window.Vue.openBlock, hw = window.Vue.createElementBlock, uD = window.Vue.createVNode, dD = window.Vue.withCtx, fD = window.Vue.createBlock, hD = window.Vue.pushScopeId, pD = window.Vue.popScopeId, mD = (e) => (hD("data-v-7f5329a1"), e = e(), pD(), e), wD = { class: "content" }, vD = /* @__PURE__ */ mD(() => /* @__PURE__ */ Eu("h4", null, "Choose the situation where to move the alarms:", -1)), VD = { class: "situation-list" }, gD = window.Vue.ref, TD = window.Vue.watch, UD = /* @__PURE__ */ sD({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, i = en(), s = gD(o.visible);
    return TD(o, () => {
      s.value = o.visible;
    }), (c, d) => (nu(), fD(fw(W1), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: dD(() => [
        Eu("div", wD, [
          vD,
          Eu("div", VD, [
            (nu(!0), hw(cD, null, lD(fw(i).situations.filter(
              (f) => f.id != o.situationId
            ), (f) => (nu(), hw("div", {
              class: "card",
              key: f.id
            }, [
              uD(kv, {
                onClick: (m) => r("situation-selected", f.id),
                "situation-info": f,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const _1 = /* @__PURE__ */ we(UD, [["__scopeId", "data-v-7f5329a1"]]), yD = window.Vue.defineComponent, pw = window.Vue.normalizeClass, so = window.Vue.createElementVNode, Xi = window.Vue.unref, ND = window.Vue.createVNode, Li = window.Vue.toDisplayString, kD = window.Vue.createTextVNode, RD = window.Vue.openBlock, MD = window.Vue.createElementBlock, bD = window.Vue.pushScopeId, ZD = window.Vue.popScopeId, SD = (e) => (bD("data-v-92e8318d"), e = e(), ZD(), e), ED = { class: "alarmInfo" }, JD = { class: "alarm-title" }, AD = /* @__PURE__ */ SD(() => /* @__PURE__ */ so("strong", null, " Duration: ", -1)), FD = { class: "description" }, CD = /* @__PURE__ */ yD({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, i = new Date().getTime();
    return (s, c) => (RD(), MD("div", {
      class: pw(["alarm", { selected: o.selected }])
    }, [
      so("div", ED, [
        so("div", {
          class: pw(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        ND(Xi(xa), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        so("div", JD, Li(e.alarm.nodeLabel) + " - " + Li(e.alarm.id), 1)
      ]),
      so("div", null, [
        AD,
        kD(" " + Li(Xi(As)(Xi(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      so("div", FD, Li(Xi(yv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const fd = /* @__PURE__ */ we(CD, [["__scopeId", "data-v-92e8318d"]]), WD = window.Vue.defineComponent, _D = window.Vue.unref, mw = window.Vue.createVNode, xD = window.Vue.openBlock, BD = window.Vue.createElementBlock, ru = window.Vue.ref, DD = window.Vue.reactive, ID = /* @__PURE__ */ WD({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: r }) {
    const o = e, i = en(), s = ru(["all"]), c = ru(o.list), d = ru(!1), f = DD({
      nodes: i.nodes,
      results: i.nodes,
      nodeSelectedValue: void 0
    }), m = (T) => {
      s.value = T, V();
    }, v = (T) => {
      if (!T)
        return f.nodeSelectedValue = void 0, [];
      d.value = !0, f.results = f.nodes.filter((U) => U.label.toLowerCase().indexOf(T) > -1).map((U) => ({
        _text: U.label,
        id: U.id
      })), d.value = !1;
    }, V = () => {
      let T = o.list;
      f.nodeSelectedValue && f.nodeSelectedValue._text && (o.isSituation ? T = T.map((U) => {
        if (U.relatedAlarms.filter(
          (A) => {
            var W;
            return A.nodeLabel === ((W = f.nodeSelectedValue) == null ? void 0 : W._text);
          }
        ).length > 0)
          return U;
      }).filter((U) => U) : T = T.filter(
        (U) => {
          var E;
          return U.nodeLabel === ((E = f.nodeSelectedValue) == null ? void 0 : E._text);
        }
      )), s.value.includes("all") || (T = T.filter(
        (U) => s.value.includes(U.severity)
      )), c.value = T, r("filtered-list", T);
    };
    return (T, U) => (xD(), BD("div", null, [
      mw(_D(Yv), {
        class: "map-search",
        label: "Find by node",
        loading: d.value,
        modelValue: f.nodeSelectedValue,
        "onUpdate:modelValue": [
          U[0] || (U[0] = (E) => f.nodeSelectedValue = E),
          V
        ],
        results: f.results,
        type: "single",
        onSearch: v
      }, null, 8, ["loading", "modelValue", "results"]),
      mw(Vo, {
        alarms: o.list,
        onSelectedOption: m,
        property: "severity"
      }, null, 8, ["alarms"])
    ]));
  }
}), OD = window.Vue.defineComponent, fs = window.Vue.createElementVNode, Kr = window.Vue.unref, QD = window.Vue.toDisplayString, ww = window.Vue.withCtx, ou = window.Vue.createVNode, zD = window.Vue.renderList, GD = window.Vue.Fragment, ra = window.Vue.openBlock, qi = window.Vue.createElementBlock, YD = window.Vue.createBlock, PD = window.Vue.pushScopeId, HD = window.Vue.popScopeId, jD = (e) => (PD("data-v-fa0cfc20"), e = e(), HD(), e), $D = { class: "content" }, XD = { class: "header" }, LD = /* @__PURE__ */ jD(() => /* @__PURE__ */ fs("h4", null, "ADD ALARMS", -1)), qD = {
  key: 0,
  class: "alarms-list"
}, KD = {
  key: 1,
  class: "empty"
}, Ki = window.Vue.ref, vw = window.Vue.watch, eI = /* @__PURE__ */ OD({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, i = en(), s = Ki(o.visible), c = Ki([]), d = Ki(["all"]), f = Ki(i.unassignedAlarms);
    vw(o, () => {
      s.value = o.visible, c.value = [], f.value = i.unassignedAlarms;
    }), vw(
      () => i.unassignedAlarms,
      () => {
        V();
      }
    );
    const m = (U) => {
      me.exports.includes(c.value, U) ? me.exports.remove(c.value, (E) => E === U) : c.value.push(U);
    }, v = () => {
      r("alarms-selected", c.value);
    }, V = () => {
      let U = i.unassignedAlarms;
      d.value.includes("all") || (U = U.filter(
        (E) => d.value.includes(E.severity)
      )), f.value = U;
    }, T = (U) => {
      f.value = U;
    };
    return (U, E) => (ra(), YD(Kr(W1), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        E[0] || (E[0] = (S) => s.value = S),
        E[1] || (E[1] = (S) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: ww(() => [
        fs("div", $D, [
          fs("div", XD, [
            LD,
            ou(Kr(Ve), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: ww(() => [
                fs("span", null, "Add " + QD(Kr(c).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          ou(ID, {
            list: Kr(i).unassignedAlarms,
            onFilteredList: T
          }, null, 8, ["list"]),
          f.value.length ? (ra(), qi("div", qD, [
            (ra(!0), qi(GD, null, zD(f.value, (S) => (ra(), qi("div", {
              class: "card",
              key: S.id
            }, [
              ou(fd, {
                selected: Kr(me.exports.includes)(Kr(c), S.id),
                alarm: S,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ra(), qi("div", KD, "Results not found"))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const tI = /* @__PURE__ */ we(eI, [["__scopeId", "data-v-fa0cfc20"]]), nI = window.Vue.openBlock, rI = window.Vue.createElementBlock, x1 = window.Vue.createElementVNode;
var oI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const aI = {}, iI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sI = /* @__PURE__ */ x1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), lI = /* @__PURE__ */ x1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), cI = [
  sI,
  lI
];
function uI(e, r) {
  return nI(), rI("svg", iI, cI);
}
var Vw = /* @__PURE__ */ oI(aI, [["render", uI]]);
const dI = window.Vue.defineComponent, Sn = window.Vue.createElementVNode, tt = window.Vue.createVNode, je = window.Vue.unref, oa = window.Vue.withCtx, fI = window.Vue.renderList, hI = window.Vue.Fragment, es = window.Vue.openBlock, ts = window.Vue.createElementBlock, pI = window.Vue.createCommentVNode, mI = window.Vue.pushScopeId, wI = window.Vue.popScopeId, ko = (e) => (mI("data-v-7861b534"), e = e(), wI(), e), vI = { class: "container" }, VI = { class: "row" }, gI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("div", { class: "title" }, "Alarms", -1)), TI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("span", null, "Add Alarms", -1)), UI = { class: "row actions" }, yI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("span", null, "Clear", -1)), NI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("span", null, "Acknowledge", -1)), kI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("span", null, "Move", -1)), RI = /* @__PURE__ */ ko(() => /* @__PURE__ */ Sn("span", null, "Remove", -1)), MI = { class: "section" }, bI = {
  key: 0,
  class: "alarm-list"
}, ns = window.Vue.ref, ZI = window.Vue.watch, SI = window.Vue.reactive, EI = window.Vue.markRaw, JI = /* @__PURE__ */ dI({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = EI({
      Add: Bs,
      Delete: Vw,
      MarkComplete: Mu,
      CheckCircle: wo,
      ExitToApp: Su
    }), i = Qs(), s = en(), c = ns(!1), d = ns(["all"]), f = ns(!1), m = ns(!1), v = SI({
      selectedAlarms: [],
      alarms: r.alarms
    });
    ZI(r, () => {
      d.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], c.value = !1;
    });
    const V = (C) => {
      v.selectedAlarms.includes(C) ? me.exports.remove(v.selectedAlarms, (D) => D == C) : v.selectedAlarms.push(C);
    }, T = async (C) => {
      v.selectedAlarms.length ? (await aM(v.selectedAlarms, C), s.getSituation(r.situationId), v.selectedAlarms = [], c.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, U = () => v.selectedAlarms.length === r.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), E = async () => {
      U() && (await Sm(
        r.situationId,
        v.selectedAlarms
      ) ? s.getSituation(r.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, S = (C) => {
      C.includes("all") ? v.alarms = r.alarms : v.alarms = r.alarms.filter((D) => C.includes(D.severity));
    }, A = async (C) => {
      U() && (await Sm(
        r.situationId,
        v.selectedAlarms
      ) ? await W(C, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, W = async (C, D) => {
      D.length ? await p1(C, D) ? s.getSituation(C) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, F = async (C) => {
      await W(r.situationId, C), m.value = !1;
    }, _ = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    };
    return (C, D) => (es(), ts("div", vI, [
      Sn("div", VI, [
        gI,
        tt(Vo, {
          alarms: r.alarms,
          onSelectedOption: S,
          property: "severity"
        }, null, 8, ["alarms"]),
        tt(je(Ve), {
          class: "add-alarms-btn",
          onClick: D[0] || (D[0] = (M) => m.value = !0)
        }, {
          default: oa(() => [
            tt(je(j), {
              icon: je(o).Add,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            TI
          ]),
          _: 1
        })
      ]),
      Sn("div", UI, [
        tt(je(xa), {
          modelValue: c.value,
          "onUpdate:modelValue": D[1] || (D[1] = (M) => c.value = M),
          label: "selected"
        }, null, 8, ["modelValue"]),
        tt(je(Ve), {
          onClick: D[2] || (D[2] = () => T("clear"))
        }, {
          default: oa(() => [
            tt(je(j), {
              icon: je(Mu),
              class: "icon clear"
            }, null, 8, ["icon"]),
            yI
          ]),
          _: 1
        }),
        tt(je(Ve), {
          onClick: D[3] || (D[3] = () => T("ack"))
        }, {
          default: oa(() => [
            tt(je(j), {
              icon: je(wo),
              class: "icon ack"
            }, null, 8, ["icon"]),
            NI
          ]),
          _: 1
        }),
        tt(je(Ve), { onClick: _ }, {
          default: oa(() => [
            tt(je(j), {
              icon: je(Su),
              class: "icon move"
            }, null, 8, ["icon"]),
            kI
          ]),
          _: 1
        }),
        tt(je(Ve), { onClick: E }, {
          default: oa(() => [
            tt(je(j), {
              icon: je(Vw),
              class: "icon remove"
            }, null, 8, ["icon"]),
            RI
          ]),
          _: 1
        })
      ]),
      Sn("div", MI, [
        v.alarms.length > 0 ? (es(), ts("div", bI, [
          (es(!0), ts(hI, null, fI(v.alarms, (M) => (es(), ts("div", {
            key: M.id
          }, [
            tt(n3, {
              alarm: M,
              selectAll: c.value,
              "situation-id": r.situationId,
              onAlarmSelected: V
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : pI("", !0)
      ]),
      tt(_1, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: A,
        onDrawerClosed: D[4] || (D[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      tt(tI, {
        visible: m.value,
        onAlarmsSelected: F,
        onDrawerAlarmsClosed: D[5] || (D[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ]));
  }
});
const AI = /* @__PURE__ */ we(JI, [["__scopeId", "data-v-7861b534"]]), FI = "/whoami", CI = async () => {
  try {
    const e = await hn.get(FI);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, WI = window.Pinia.defineStore, Ba = WI("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const e = await CI();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await P_();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async savePermission(e) {
      if (this.allowSave = e, !e) {
        const r = await f1(e);
        this.allowSave = r;
      }
    }
  }
}), _I = window.Vue.defineComponent, jt = window.Vue.createVNode, Tt = window.Vue.unref, au = window.Vue.normalizeClass, rs = window.Vue.toDisplayString, pr = window.Vue.openBlock, mr = window.Vue.createElementBlock, os = window.Vue.createCommentVNode, xI = window.Vue.withCtx, Xt = window.Vue.createElementVNode, BI = window.Vue.createTextVNode, DI = window.Vue.Fragment, II = window.Vue.pushScopeId, OI = window.Vue.popScopeId, QI = (e) => (II("data-v-7d539e83"), e = e(), OI(), e), zI = { class: "section" }, GI = { class: "action-section" }, YI = {
  key: 0,
  class: "btn-row"
}, PI = { key: 0 }, HI = { key: 1 }, jI = {
  key: 0,
  class: "situation-detail"
}, $I = { class: "situation-info" }, XI = { class: "id" }, LI = { key: 0 }, qI = ["innerHTML"], KI = /* @__PURE__ */ QI(() => /* @__PURE__ */ Xt("p", null, null, -1)), eO = { class: "boxes" }, tO = { class: "parameters" }, nO = { class: "section memo-boxes" }, rO = { key: 0 }, gw = window.Vue.ref, oO = window.Vue.watch, aO = /* @__PURE__ */ _I({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Qs(), i = en(), s = yt.REJECTED, c = Ba(), d = gw(r.situationInfo.status), f = gw(r.situationInfo);
    oO(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const m = async (v) => {
      var T;
      await h1(
        (T = r.situationInfo) == null ? void 0 : T.id,
        v.toLowerCase()
      ) ? (d.value = v, i.getSituation(r.situationInfo.id)) : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (v, V) => {
      var T, U, E, S, A, W, F, _, C, D, M, z;
      return pr(), mr(DI, null, [
        Xt("div", zI, [
          Xt("div", GI, [
            jt(m1, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Tt(c).allowSave ? (pr(), mr("div", YI, [
              jt(Tt(Ve), {
                class: au(["btn", { rejected: d.value == Tt(s) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => m(Tt(s)))
              }, {
                default: xI(() => [
                  jt(Tt(j), {
                    icon: Tt(mv),
                    "aria-hidden": "true",
                    class: au(["icon reject", { rejected: d.value == Tt(s) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == Tt(s) ? (pr(), mr("span", PI, rs(Tt(s)), 1)) : (pr(), mr("span", HI, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : os("", !0)
          ]),
          f.value ? (pr(), mr("div", jI, [
            Xt("div", {
              class: au(["severity-line", [`${(U = (T = f.value) == null ? void 0 : T.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
            }, null, 2),
            Xt("div", $I, [
              Xt("div", XI, [
                Xt("div", null, [
                  BI(" Situation - " + rs((E = f.value) == null ? void 0 : E.id) + " - affecting " + rs(Tt(me.exports.size)(Tt(me.exports.groupBy)((S = f.value) == null ? void 0 : S.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (pr(), mr("span", LI, "having " + rs(f.value.alarms.length) + " alarms ", 1)) : os("", !0)
                ]),
                jt(u1, {
                  severity: (A = f.value) == null ? void 0 : A.severity
                }, null, 8, ["severity"])
              ]),
              Xt("span", {
                innerHTML: f.value.description
              }, null, 8, qI),
              KI,
              Xt("div", eO, [
                jt(zc, {
                  label: "First Event",
                  info: Tt(dn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                jt(zc, {
                  label: "Last Event",
                  info: Tt(dn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                jt(zc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Xt("div", tO, [
              jt(rx, {
                alarms: (W = f.value) == null ? void 0 : W.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : os("", !0),
          Xt("div", nO, [
            jt(Rs, {
              id: (F = f.value) == null ? void 0 : F.id,
              situationId: (_ = f.value) == null ? void 0 : _.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (C = f.value) == null ? void 0 : C.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            jt(Rs, {
              id: (D = f.value) == null ? void 0 : D.id,
              situationId: (M = f.value) == null ? void 0 : M.id,
              label: "Journal Memo",
              type: "journal",
              memo: (z = f.value) == null ? void 0 : z.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (pr(), mr("div", rO, [
          jt(AI, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : os("", !0)
      ], 64);
    };
  }
});
const iO = /* @__PURE__ */ we(aO, [["__scopeId", "data-v-7d539e83"]]);
var sO = Object.defineProperty, lO = Object.defineProperties, cO = Object.getOwnPropertyDescriptors, Tw = Object.getOwnPropertySymbols, uO = Object.prototype.hasOwnProperty, dO = Object.prototype.propertyIsEnumerable, Uw = (e, r, o) => r in e ? sO(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ju = (e, r) => {
  for (var o in r || (r = {}))
    uO.call(r, o) && Uw(e, o, r[o]);
  if (Tw)
    for (var o of Tw(r))
      dO.call(r, o) && Uw(e, o, r[o]);
  return e;
}, fO = (e, r) => lO(e, cO(r));
const B1 = window.Vue.defineComponent, gr = window.Vue.resolveComponent, hs = window.Vue.openBlock, yw = window.Vue.createBlock, ps = window.Vue.mergeProps, Tr = window.Vue.withCtx, D1 = window.Vue.createElementBlock, hO = window.Vue.Fragment, pO = window.Vue.renderList, mO = window.Vue.createTextVNode, wO = window.Vue.toDisplayString, vO = window.Vue.computed, Nw = window.Vue.toRef, aa = window.Vue.createVNode, kw = window.Vue.toHandlers, VO = window.Vue.renderSlot, gO = window.Vue.normalizeClass, TO = window.Vue.createElementVNode;
var I1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const UO = B1({
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
      return le("feather-select-active");
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
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        Ra(r, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    FeatherList: Lu,
    FeatherListItem: _a
  }
});
function yO(e, r, o, i, s, c) {
  const d = gr("FeatherListItem"), f = gr("FeatherList");
  return hs(), yw(f, ps(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Tr(() => [
      (hs(!0), D1(hO, null, pO(e.options, (m, v) => (hs(), yw(d, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(v),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(v),
        selected: e.isSelected(v),
        onClick: (V) => e.select(m)
      }, {
        default: Tr(() => [
          mO(wO(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var NO = /* @__PURE__ */ I1(UO, [["render", yO], ["__scopeId", "data-v-eae820da"]]);
const kO = fO(Ju(Ju({}, Hu), Fa), {
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
}), RO = {
  "update:modelValue": (e) => !0
}, MO = B1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: RO,
  props: kO,
  setup(e, r) {
    Ca(e), ju(e);
    const o = vO(() => le("feather-select-input")), { validate: i } = Ja(o, Nw(e, "modelValue"), e.label, e.schema, Nw(e, "error"));
    return Ju({
      inputId: o,
      validate: i
    }, Aa(r.attrs));
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
      return le("feather-select-description");
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
        const e = this.internalValue, r = this.options.filter((o) => o[this.textProp] === e[this.textProp]);
        if (r && r.length)
          return this.options.indexOf(r[0]);
      }
      return -1;
    },
    icon: () => Ds
  },
  watch: {
    showMenu(e) {
      e ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(e) {
      this.internalValue = e;
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
    handleSelect(e) {
      this.select(e), this.showMenu = !1, this.$refs.input.focus();
    },
    select(e) {
      this.internalValue = e;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(e) {
      if (e.keyCode === ne.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === ne.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === ne.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === ne.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === ne.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === ne.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const r = String.fromCharCode(e.keyCode);
        this.charsSoFar += r, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Nr(this.delayTimeout), this.delayTimeout = yr(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Pu,
    InputSubText: Ea,
    FeatherMenu: xv,
    List: NO,
    FeatherIcon: j
  }
});
function bO(e, r, o, i, s, c) {
  const d = gr("FeatherIcon"), f = gr("InputWrapper"), m = gr("List"), v = gr("FeatherMenu"), V = gr("InputSubText");
  return hs(), D1("div", ps(e.inherittedAttrs, { class: "feather-select-container" }), [
    aa(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Tr((T) => [
        aa(f, ps({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, T.attrs, kw(T.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Tr(() => [
            VO(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Tr(() => [
            aa(d, {
              class: gO(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Tr(() => [
            TO("input", ps(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, kw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Tr(() => [
        aa(m, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: e.label,
          options: e.options,
          "text-prop": e.textProp,
          "active-index": e.activeIndex,
          onSelect: e.handleSelect,
          onKeydown: e.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    aa(V, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var ZO = /* @__PURE__ */ I1(MO, [["render", bO], ["__scopeId", "data-v-ecb32d90"]]);
const SO = window.Vue.openBlock, EO = window.Vue.createElementBlock, O1 = window.Vue.createElementVNode;
var JO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const AO = {}, FO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CO = /* @__PURE__ */ O1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), WO = /* @__PURE__ */ O1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), _O = [
  CO,
  WO
];
function xO(e, r) {
  return SO(), EO("svg", FO, _O);
}
var BO = /* @__PURE__ */ JO(AO, [["render", xO]]);
const ms = window.Vue.openBlock, Au = window.Vue.createElementBlock, Q1 = window.Vue.createElementVNode, DO = window.Vue.defineComponent, wr = window.Vue.ref, IO = window.Vue.provide, Rw = window.Vue.computed, OO = window.Vue.onUnmounted, Mw = window.Vue.toRef, QO = window.Vue.resolveComponent, zO = window.Vue.Fragment, GO = window.Vue.createBlock, YO = window.Vue.Teleport, bw = window.Vue.createVNode, PO = window.Vue.Transition, HO = window.Vue.withCtx, jO = window.Vue.normalizeClass, $O = window.Vue.normalizeStyle, XO = window.Vue.toDisplayString, LO = window.Vue.createCommentVNode, qO = window.Vue.renderSlot, iu = window.Vue.nextTick;
var z1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const KO = {}, eQ = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, tQ = /* @__PURE__ */ Q1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), nQ = [
  tQ
];
function rQ(e, r) {
  return ms(), Au("svg", eQ, nQ);
}
var oQ = /* @__PURE__ */ z1(KO, [["render", rQ]]), Ge = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ge || {}), bn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(bn || {});
const aQ = (e, r, o, i = 9) => {
  const s = window.innerHeight - e.bottom, c = window.innerWidth - e.right, d = [];
  e.top >= r.height + i && d.push(Ge.top), s >= r.height + i && d.push(Ge.bottom);
  const f = [];
  c >= r.width + i && f.push(Ge.right), e.left >= r.width + i && f.push(Ge.left);
  let m = [...f, ...d];
  return (o === Ge.top || o === Ge.bottom) && (m = [...d, ...f]), m.indexOf(o) > -1 ? o : m.length ? m[0] : o;
}, iQ = (e, r, o, i, s = 28) => {
  if (e === Ge.left || e === Ge.right)
    return bn.center;
  const c = r.left + r.width / 2, d = window.innerWidth - r.right, f = [], m = c, v = d + r.width / 2, V = o.width - s, T = o.width / 2;
  return m >= T && v >= T && f.push(bn.center), v >= V && f.push(bn.left), m >= V && f.push(bn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, sQ = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ge.top
  },
  pointerAlignment: {
    type: String,
    default: () => bn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, lQ = DO({
  props: sQ,
  setup(e) {
    const r = wr(!1), o = wr(!1), i = le("feather-tooltip-trigger"), s = le("feather-tooltip"), c = "data-feather-tooltip";
    IO("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      Nr(d), r.value || (d = yr(A, e.enterDelay));
    }, m = () => {
      Nr(d), d = yr(W, e.exitDelay);
    }, v = (X) => {
      X.keyCode === ne.ESCAPE && (X.preventDefault(), W(!0));
    }, V = Rw(() => ({
      [c]: i,
      "aria-describedby": s
    })), T = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, U = wr(document), E = _v(U, () => W(!0));
    OO(() => W(!0));
    const S = () => document.getElementById(s), A = () => {
      o.value = !1, r.value = !0, iu(() => {
        const X = S();
        K(X), r.value = !1, iu(() => {
          o.value = !0, r.value = !0, E.value = !0;
        });
      });
    }, W = (X = !1) => {
      z.value = "", M.value = "", Q.value = "", B.value = "", r.value = !1, X && (o.value = !1), E.value = !1;
    }, F = Mw(e, "placement"), _ = Mw(e, "pointerAlignment"), C = 8, D = 24, M = wr(""), z = wr(""), Q = wr(""), B = wr(""), $ = Rw(() => B.value ? "p-" + B.value : !1), K = (X) => {
      const G = document.querySelector(`[${c}=${i}]`);
      if (!G) {
        console.log("trigger not found");
        return;
      }
      iu(() => {
        const se = G.getBoundingClientRect(), ge = X.getBoundingClientRect(), de = aQ(se, ge, F.value, C), De = iQ(de, se, ge, _.value, D);
        Q.value = De.toString(), B.value = de.toString();
        let Ie = 0, Le = 0;
        if ((de === Ge.left || de === Ge.right) && (Ie = se.top + se.height / 2 - ge.height / 2, de === Ge.left && (Le = se.left - ge.width - C), de === Ge.right && (Le = se.right)), de === Ge.top || de === Ge.bottom) {
          Ie = se.top - ge.height - C, de === Ge.bottom && (Ie = se.bottom);
          const Ro = se.left + se.width / 2;
          switch (De) {
            case bn.center:
              Le = Ro - ge.width / 2;
              break;
            case bn.left:
              Le = Ro - D;
              break;
            case bn.right:
              Le = Ro - ge.width + D;
              break;
          }
        }
        M.value = Ie.toString() + "px", z.value = Le.toString() + "px";
      });
    };
    return {
      attrs: V,
      listeners: T,
      show: r,
      animate: o,
      alignmentClass: Q,
      placementClass: $,
      top: M,
      left: z,
      tooltipID: s
    };
  },
  components: {
    Pointer: oQ
  }
}), cQ = ["id"];
function uQ(e, r, o, i, s, c) {
  const d = QO("Pointer");
  return ms(), Au(zO, null, [
    (ms(), GO(YO, { to: "body" }, [
      bw(PO, { css: e.animate }, {
        default: HO(() => [
          e.show ? (ms(), Au("div", {
            key: 0,
            class: jO(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: $O({ left: e.left, top: e.top })
          }, [
            Q1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, XO(e.title), 9, cQ),
            bw(d, { class: "tooltip-pointer" })
          ], 6)) : LO("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    qO(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Zw = /* @__PURE__ */ z1(lQ, [["render", uQ], ["__scopeId", "data-v-3da6b22e"]]);
const dQ = window.Vue.defineComponent, su = window.Vue.normalizeStyle, lu = window.Vue.createElementVNode, ia = window.Vue.unref, Sw = window.Vue.toHandlers, Ew = window.Vue.mergeProps, Jw = window.Vue.withCtx, Aw = window.Vue.createVNode, fQ = window.Vue.renderList, hQ = window.Vue.Fragment, sa = window.Vue.openBlock, la = window.Vue.createElementBlock, Fw = window.Vue.normalizeClass, Cw = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const pQ = { class: "row" }, mQ = /* @__PURE__ */ dQ({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), i = (c, d) => c ? (Number(d) - Number(c)) * r.proportion : 0, s = (c) => c ? (Number(c) - Number(r.minStart)) * r.proportion : 0;
    return (c, d) => (sa(), la("div", pQ, [
      lu("div", {
        class: "line-gray",
        style: su({
          width: s(r.events[0].createTime) + "px"
        })
      }, null, 4),
      Aw(ia(Zw), {
        title: ia(dn)(e.alarm.firstEventTime)
      }, {
        default: Jw(({ attrs: f, on: m }) => [
          lu("div", Ew({ class: "circle" }, f, Sw(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (sa(!0), la(hQ, null, fQ(r.events, (f, m) => (sa(), la("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[m + 1] ? (sa(), la("div", {
          key: 0,
          class: Fw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: su({
            width: i(f.createTime, r.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : Cw("", !0),
        Aw(ia(Zw), {
          title: ia(dn)(e.alarm.firstEventTime)
        }, {
          default: Jw(({ attrs: v, on: V }) => [
            r.events[m + 1] ? (sa(), la("div", Ew({ key: 0 }, v, Sw(V), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Cw("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      lu("div", {
        class: Fw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: su({
          width: i(e.events[e.events.length - 1].createTime, ia(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const wQ = /* @__PURE__ */ we(mQ, [["__scopeId", "data-v-3341d12d"]]), vQ = window.Vue.openBlock, VQ = window.Vue.createElementBlock, G1 = window.Vue.createElementVNode;
var gQ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const TQ = {}, UQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yQ = /* @__PURE__ */ G1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), NQ = /* @__PURE__ */ G1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), kQ = [
  yQ,
  NQ
];
function RQ(e, r) {
  return vQ(), VQ("svg", UQ, kQ);
}
var MQ = /* @__PURE__ */ gQ(TQ, [["render", RQ]]);
const bQ = window.Vue.defineComponent, Fu = window.Vue.createElementVNode, ZQ = window.Vue.renderList, Ww = window.Vue.Fragment, cu = window.Vue.openBlock, uu = window.Vue.createElementBlock, SQ = window.Vue.normalizeClass, EQ = window.Vue.unref, _w = window.Vue.toDisplayString, JQ = window.Vue.pushScopeId, AQ = window.Vue.popScopeId, FQ = (e) => (JQ("data-v-2e087f7b"), e = e(), AQ(), e), CQ = /* @__PURE__ */ FQ(() => /* @__PURE__ */ Fu("strong", null, "Events:", -1)), WQ = /* @__PURE__ */ bQ({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (cu(), uu(Ww, null, [
      CQ,
      (cu(!0), uu(Ww, null, ZQ(r.events, (s) => (cu(), uu("div", {
        class: "event-description",
        key: s.id
      }, [
        Fu("div", {
          class: SQ(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Fu("div", null, _w(EQ(dn)(s.createTime)) + " - " + _w(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const _Q = /* @__PURE__ */ we(WQ, [["__scopeId", "data-v-2e087f7b"]]), xQ = window.Vue.defineComponent, BQ = window.Vue.normalizeClass, Ut = window.Vue.createElementVNode, eo = window.Vue.toDisplayString, st = window.Vue.unref, to = window.Vue.createVNode, Y1 = window.Vue.createTextVNode, DQ = window.Vue.renderList, xw = window.Vue.Fragment, Rn = window.Vue.openBlock, vr = window.Vue.createElementBlock, Bw = window.Vue.createBlock, as = window.Vue.createCommentVNode, IQ = window.Vue.normalizeStyle, OQ = window.Vue.pushScopeId, QQ = window.Vue.popScopeId, zQ = (e) => (OQ("data-v-01717d0d"), e = e(), QQ(), e), GQ = { class: "section detail" }, YQ = { class: "id" }, PQ = {
  key: 0,
  class: "section"
}, HQ = /* @__PURE__ */ zQ(() => /* @__PURE__ */ Ut("div", { class: "id" }, "Alarms", -1)), jQ = { class: "action-btns" }, $Q = { class: "zoom" }, XQ = /* @__PURE__ */ Y1(" Zoom "), LQ = { class: "times" }, qQ = {
  key: 0,
  class: "timeline-container"
}, KQ = { class: "alarm-id" }, e5 = {
  key: 0,
  class: "panel"
}, zn = window.Vue.ref, t5 = window.Vue.watch, n5 = /* @__PURE__ */ xQ({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var D, M;
    const r = e, o = en(), i = zn(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = zn(s[0]), d = zn(r.width), f = zn(r.width), m = zn(new Date().getTime()), v = () => {
      var z, Q;
      if (!r.situation.events) {
        const B = (Q = (z = r.situation) == null ? void 0 : z.alarms) == null ? void 0 : Q.map(($) => $.id);
        o.getEvents(r.situation.id, B);
      }
    };
    v();
    const V = () => (m.value = new Date().getTime(), d.value / (Number(m.value) - Number(U.value))), T = zn(r.situation.alarms), U = zn(
      ((M = me.exports.minBy((D = r.situation) == null ? void 0 : D.alarms, "firstEventTime")) == null ? void 0 : M.firstEventTime) || new Date().getTime()
    ), E = zn(V());
    t5(r, () => {
      var z, Q;
      U.value = ((Q = me.exports.minBy((z = r.situation) == null ? void 0 : z.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), v(), d.value = f.value, E.value = V(), T.value = r.situation.alarms, c.value = s[0];
    });
    const S = (z) => {
      if ((z == null ? void 0 : z.id) === 1 && (T.value = r.situation.alarms), (z == null ? void 0 : z.id) === 2) {
        const Q = me.exports.groupBy(T.value, "severity"), B = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        T.value = B.filter(($) => $);
      }
      if ((z == null ? void 0 : z.id) === 3) {
        const Q = me.exports.reverse(
          me.exports.sortBy(
            r.situation.alarms,
            (B) => Number(B.lastEventTime) - Number(B.firstEventTime)
          )
        );
        T.value = Q;
      }
    }, A = () => {
      d.value += 100, E.value = V();
    }, W = () => {
      d.value -= 100, E.value = V();
    }, F = () => {
      d.value = f.value, E.value = V();
    }, _ = (z) => {
      i.value = z;
    }, C = () => {
      i.value = 0;
    };
    return (z, Q) => {
      var B, $;
      return Rn(), vr(xw, null, [
        Ut("div", GQ, [
          Ut("div", {
            class: BQ(["severity-line", [`${($ = (B = r.situation) == null ? void 0 : B.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ut("div", null, [
            Ut("div", YQ, "Situation " + eo(r.situation.id), 1),
            Ut("div", null, " Duration: " + eo(st(As)(m.value, new Date(U.value))), 1)
          ])
        ]),
        T.value && T.value.length > 0 ? (Rn(), vr("div", PQ, [
          HQ,
          Ut("div", jQ, [
            to(st(ZO), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: c.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (K) => c.value = K),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ut("div", $Q, [
              XQ,
              Ut("div", null, [
                to(st(j), {
                  icon: st(BO),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                to(st(j), {
                  icon: st(Cv),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                to(st(j), {
                  icon: st(MQ),
                  class: "zoom-icon",
                  onClick: W
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Rn(), vr("div", {
            key: 0,
            class: "alarms",
            style: IQ({
              width: f.value + 50 + "px"
            })
          }, [
            Ut("div", LQ, [
              Ut("div", null, eo(st(dn)(U.value)), 1),
              Ut("div", null, eo(st(dn)(m.value)), 1)
            ]),
            e.situation.events ? (Rn(), vr("div", qQ, [
              (Rn(!0), vr(xw, null, DQ(T.value, (K) => (Rn(), vr("div", {
                class: "timeline",
                key: K.id
              }, [
                Ut("div", KQ, [
                  Y1(eo(K.nodeLabel) + " - " + eo(K.id) + " ", 1),
                  i.value === K.id ? (Rn(), Bw(st(j), {
                    key: 0,
                    icon: st(Ds),
                    class: "zoom-icon expand",
                    onClick: C
                  }, null, 8, ["icon"])) : (Rn(), Bw(st(j), {
                    key: 1,
                    icon: st(Mv),
                    class: "zoom-icon expand",
                    onClick: () => _(K.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                to(wQ, {
                  alarm: K,
                  proportion: E.value,
                  "min-start": U.value,
                  events: r.situation.events[K.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === K.id ? (Rn(), vr("div", e5, [
                  to(_Q, {
                    events: r.situation.events[K.id]
                  }, null, 8, ["events"])
                ])) : as("", !0)
              ]))), 128))
            ])) : as("", !0)
          ], 4)) : as("", !0)
        ])) : as("", !0)
      ], 64);
    };
  }
});
const r5 = /* @__PURE__ */ we(n5, [["__scopeId", "data-v-01717d0d"]]), o5 = window.Vue.openBlock, a5 = window.Vue.createElementBlock, i5 = window.Vue.createElementVNode;
var s5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const l5 = {}, c5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, u5 = /* @__PURE__ */ i5("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), d5 = [
  u5
];
function f5(e, r) {
  return o5(), a5("svg", c5, d5);
}
var Ua = /* @__PURE__ */ s5(l5, [["render", f5]]);
const P1 = window.Vue.defineComponent, du = window.Vue.ref, h5 = window.Vue.toRef, fu = window.Vue.inject, Dw = window.Vue.watch, p5 = window.Vue.nextTick, Iw = window.Vue.openBlock, Ow = window.Vue.createElementBlock, hu = window.Vue.createElementVNode, m5 = window.Vue.normalizeClass, Qw = window.Vue.renderSlot, zw = window.Vue.createCommentVNode, pu = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var w5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const v5 = {
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
}, V5 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, g5 = P1({
  emits: V5,
  props: v5,
  setup(e, r) {
    const o = du(), i = du(!1), s = du(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = h5(e, "modelValue"), f = fu("queueSnackbar", !1), m = fu("unqueueSnackbar", !1), v = fu("nextSnackbar", () => {
    }), V = (A, W) => {
      let F, _, C = W;
      const D = () => {
        !F || (Nr(F), F = 0, C -= Date.now() - _);
      }, M = () => {
        F || (_ = Date.now(), F = yr(A, C));
      };
      return M(), { pause: D, resume: M };
    }, T = () => {
      i.value = !1, r.emit("closed"), v && v();
    }, U = (A) => {
      A.keyCode === ne.ESCAPE && (s.value = !1);
    }, E = () => {
      o.value.pause();
    }, S = () => {
      s.value && o.value.resume();
    };
    return Dw(d, (A) => {
      A ? p5(() => {
        f === !1 ? s.value = A : f(c, s);
      }) : m === !1 ? s.value = A : m(c);
    }, { immediate: !0 }), Dw(s, (A) => {
      A ? (i.value = !0, o.value = V(() => {
        s.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), E());
    }), {
      hideTimeout: o,
      contentShow: i,
      internalValue: s,
      id: c,
      incomingValue: d,
      closed: T,
      keyPressed: U,
      stopTimer: E,
      resumeTimer: S
    };
  }
}), T5 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, U5 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, y5 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, N5 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function k5(e, r, o, i, s, c) {
  return e.modelValue || e.contentShow ? (Iw(), Ow("div", T5, [
    hu("div", {
      class: m5(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: r[0] || (r[0] = (...d) => e.closed && e.closed(...d)),
      onKeydown: r[1] || (r[1] = (...d) => e.keyPressed && e.keyPressed(...d)),
      onMouseover: r[2] || (r[2] = (...d) => e.stopTimer && e.stopTimer(...d)),
      onMouseleave: r[3] || (r[3] = (...d) => e.resumeTimer && e.resumeTimer(...d)),
      onFocusin: r[4] || (r[4] = (...d) => e.stopTimer && e.stopTimer(...d)),
      onFocusout: r[5] || (r[5] = (...d) => e.resumeTimer && e.resumeTimer(...d))
    }, [
      hu("div", U5, [
        e.contentShow ? (Iw(), Ow("div", y5, [
          Qw(e.$slots, "default", {}, void 0, !0)
        ])) : zw("", !0)
      ]),
      hu("div", N5, [
        Qw(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : zw("", !0);
}
var hd = /* @__PURE__ */ w5(g5, [["render", k5], ["__scopeId", "data-v-5cf64a62"]]);
const R5 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
P1({
  props: R5,
  setup() {
    let e, r = [];
    const o = () => {
      e && (e.val.value = !0);
    }, i = (d, f) => {
      const m = { id: d, val: f };
      e ? r.push(m) : (e = m, o());
    }, s = (d) => {
      (e == null ? void 0 : e.id) === d ? e.val.value = !1 : r = r.filter((f) => f.id != d);
    }, c = () => {
      r.length ? (e = r.shift(), o()) : e = void 0;
    };
    return pu("queueSnackbar", i), pu("unqueueSnackbar", s), pu("nextSnackbar", c), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: i,
      shiftItem: c,
      unqueueSnackbar: s
    };
  }
});
const M5 = window.Vue.defineComponent, Ze = window.Vue.unref, lt = window.Vue.createVNode, ba = window.Vue.createElementVNode, Ct = window.Vue.withCtx, no = window.Vue.openBlock, Gw = window.Vue.createBlock, b5 = window.Vue.createCommentVNode, Ys = window.Vue.createTextVNode, is = window.Vue.createElementBlock, Yw = window.Vue.toDisplayString, Z5 = window.Vue.pushScopeId, S5 = window.Vue.popScopeId, pd = (e) => (Z5("data-v-87dcccfc"), e = e(), S5(), e), E5 = { id: "cont" }, J5 = { class: "btns-navigation" }, A5 = /* @__PURE__ */ pd(() => /* @__PURE__ */ ba("span", null, "Situation List", -1)), F5 = /* @__PURE__ */ pd(() => /* @__PURE__ */ ba("span", null, "Show Previous Situation ", -1)), C5 = /* @__PURE__ */ pd(() => /* @__PURE__ */ ba("span", null, "Show Next Situation", -1)), W5 = { key: 1 }, _5 = {
  key: 0,
  class: "detail"
}, x5 = /* @__PURE__ */ Ys("Details"), B5 = /* @__PURE__ */ Ys("Metrics"), D5 = {
  key: 1,
  class: "noSituation"
}, I5 = /* @__PURE__ */ Ys("dismiss"), ro = window.Vue.ref, Pw = window.Vue.watch, O5 = window.Vue.onMounted, Q5 = window.VueRouter.useRouter, z5 = window.VueRouter.useRoute, G5 = /* @__PURE__ */ M5({
  __name: "SituationDetail",
  setup(e) {
    const r = Q5(), o = z5(), i = parseInt(o.params.id), s = ro(i), c = en(), d = Qs();
    c.getSituation(s.value), c.getUnassignedAlarms(), c.situations.length || (c.getSituations(), c.getNodes());
    const f = ro(), m = ro(), v = ro(!0), V = ro(
      c.filteredSituations.findIndex((S) => S === s.value)
    ), T = ro(!1);
    Pw(
      () => c.situationDetail,
      () => {
        f.value = c.situationDetail, v.value = !1, c.getUnassignedAlarms();
      }
    ), O5(() => {
      var A;
      const S = ((A = document.getElementById("cont")) == null ? void 0 : A.getBoundingClientRect().width) || 1200;
      m.value = S - 90;
    });
    const U = () => {
      r.push({
        name: "situations"
      });
    }, E = (S) => {
      const A = V.value, W = c.filteredSituations[A + S];
      r.push({
        name: "situationDetail",
        params: {
          id: W
        }
      });
    };
    return Pw(o, () => {
      s.value = parseInt(o.params.id), c.getSituation(s.value), V.value = c.filteredSituations.findIndex((S) => S == s.value);
    }), d.$subscribe((S, A) => {
      T.value = A.showError;
    }), (S, A) => (no(), is("div", E5, [
      ba("div", J5, [
        lt(Ze(Ve), {
          primary: "",
          onClick: A[0] || (A[0] = () => U())
        }, {
          default: Ct(() => [
            lt(Ze(j), {
              icon: Ze(Ua),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            A5
          ]),
          _: 1
        }),
        ba("div", null, [
          lt(Ze(Ve), {
            disabled: !Ze(c).filteredSituations[V.value - 1],
            primary: "",
            onClick: A[1] || (A[1] = () => E(-1))
          }, {
            default: Ct(() => [
              lt(Ze(j), {
                icon: Ze(Ua),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              F5
            ]),
            _: 1
          }, 8, ["disabled"]),
          lt(Ze(Ve), {
            disabled: !Ze(c).filteredSituations[V.value + 1],
            primary: "",
            onClick: A[2] || (A[2] = () => E(1))
          }, {
            default: Ct(() => [
              C5,
              lt(Ze(j), {
                icon: Ze(Ua),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      v.value ? (no(), Gw(Ze(e1), {
        key: 0,
        class: "spinner"
      })) : (no(), is("div", W5, [
        f.value ? (no(), is("div", _5, [
          lt(Ze(M_), null, {
            tabs: Ct(() => [
              lt(Ze(Rm), null, {
                default: Ct(() => [
                  x5
                ]),
                _: 1
              }),
              lt(Ze(Rm), null, {
                default: Ct(() => [
                  B5
                ]),
                _: 1
              })
            ]),
            default: Ct(() => [
              lt(Ze(Mm), { class: "panel" }, {
                default: Ct(() => [
                  lt(iO, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              lt(Ze(Mm), { class: "panel" }, {
                default: Ct(() => [
                  m.value ? (no(), Gw(r5, {
                    key: 0,
                    situation: f.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : b5("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (no(), is("div", D5, " Error. The situation " + Yw(Ze(i)) + " does not exist. ", 1))
      ])),
      lt(Ze(hd), {
        modelValue: T.value,
        "onUpdate:modelValue": A[4] || (A[4] = (W) => T.value = W),
        center: "",
        error: ""
      }, {
        button: Ct(() => [
          lt(Ze(Ve), {
            onClick: A[3] || (A[3] = (W) => T.value = !1),
            text: ""
          }, {
            default: Ct(() => [
              I5
            ]),
            _: 1
          })
        ]),
        default: Ct(() => [
          Ys(Yw(Ze(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const Y5 = /* @__PURE__ */ we(G5, [["__scopeId", "data-v-87dcccfc"]]), P5 = window.Vue.defineComponent, ze = window.Vue.unref, Wt = window.Vue.createVNode, xt = window.Vue.createElementVNode, oo = window.Vue.withCtx, H5 = window.Vue.toDisplayString, md = window.Vue.createTextVNode, j5 = window.Vue.normalizeClass, ao = window.Vue.openBlock, io = window.Vue.createElementBlock, $5 = window.Vue.createCommentVNode, X5 = window.Vue.renderList, L5 = window.Vue.Fragment, q5 = window.Vue.pushScopeId, K5 = window.Vue.popScopeId, Da = (e) => (q5("data-v-7fae0d9e"), e = e(), K5(), e), ez = { class: "container" }, tz = /* @__PURE__ */ Da(() => /* @__PURE__ */ xt("span", null, "Situation List", -1)), nz = /* @__PURE__ */ Da(() => /* @__PURE__ */ xt("h2", null, "New Situation", -1)), rz = { class: "form" }, oz = { class: "fields" }, az = /* @__PURE__ */ md(" Total alarms added: "), iz = { class: "total" }, sz = {
  key: 0,
  class: "errorList"
}, lz = { class: "footer" }, cz = /* @__PURE__ */ Da(() => /* @__PURE__ */ xt("span", null, "Clear", -1)), uz = /* @__PURE__ */ Da(() => /* @__PURE__ */ xt("span", null, "Add Situation", -1)), dz = { class: "alarm-column" }, fz = /* @__PURE__ */ Da(() => /* @__PURE__ */ xt("h4", null, "Add Unassociated Alarms", -1)), hz = {
  key: 0,
  class: "alarms"
}, pz = { key: 1 }, mz = /* @__PURE__ */ md(" Error on creating new situation :( "), wz = /* @__PURE__ */ md("dismiss"), vz = window.VueRouter.useRouter, Gn = window.Vue.ref, Vz = window.Vue.watch, gz = /* @__PURE__ */ P5({
  __name: "AddSituation",
  setup(e) {
    const r = vz(), o = en(), i = Gn(), s = Gn(""), c = Gn(), d = Gn(""), f = Gn([]), m = Gn(!1), v = Gn(), V = Gn(o.unassignedAlarms);
    V.value.length || o.getUnassignedAlarms(), Vz(
      () => o.unassignedAlarms,
      () => {
        V.value = o.unassignedAlarms;
      }
    );
    const T = () => {
      r.push({
        name: "situations"
      });
    }, U = (F) => {
      F.includes("all") ? V.value = o.unassignedAlarms : V.value = o.unassignedAlarms.filter(
        (_) => F.includes(_.severity)
      );
    }, E = (F) => {
      m.value = !1, me.exports.includes(f.value, F) ? me.exports.remove(f.value, (_) => _ === F) : f.value.push(F);
    }, S = () => {
      const F = "This field should not be empty";
      let _ = !0;
      return i.value || (s.value = F, _ = !1), c.value || (d.value = F, _ = !1), f.value.length < 2 && (m.value = !0, _ = !1), _;
    }, A = async () => {
      if (S()) {
        const F = {
          alarmIdList: f.value,
          diagnosticText: c.value,
          description: i.value
        };
        await j_(F) ? r.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, W = () => {
      i.value = "", c.value = "", f.value = [], V.value = o.unassignedAlarms;
    };
    return (F, _) => (ao(), io("div", ez, [
      Wt(ze(Ve), {
        primary: "",
        onClick: _[0] || (_[0] = () => T()),
        class: "back-btn"
      }, {
        default: oo(() => [
          Wt(ze(j), {
            icon: ze(Ua),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          tz
        ]),
        _: 1
      }),
      nz,
      xt("div", rz, [
        xt("div", oz, [
          Wt(ze(Zu), {
            modelValue: i.value,
            "onUpdate:modelValue": _[1] || (_[1] = (C) => i.value = C),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          Wt(ze(Zu), {
            modelValue: c.value,
            "onUpdate:modelValue": _[2] || (_[2] = (C) => c.value = C),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          xt("div", null, [
            xt("div", {
              class: j5(["totalAlarms", { errorList: m.value }])
            }, [
              az,
              xt("span", iz, H5(ze(f).length), 1)
            ], 2),
            m.value ? (ao(), io("div", sz, " It is required to add at least 2 alarms ")) : $5("", !0)
          ]),
          xt("div", lz, [
            Wt(ze(Ve), {
              class: "btn",
              primary: "",
              onClick: W
            }, {
              default: oo(() => [
                Wt(ze(j), {
                  icon: ze(Uo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                cz
              ]),
              _: 1
            }),
            Wt(ze(Ve), {
              class: "btn",
              primary: "",
              onClick: A
            }, {
              default: oo(() => [
                Wt(ze(j), {
                  icon: ze(Bs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                uz
              ]),
              _: 1
            })
          ])
        ]),
        xt("div", dz, [
          fz,
          Wt(Vo, {
            alarms: ze(o).unassignedAlarms,
            onSelectedOption: U,
            property: "severity"
          }, null, 8, ["alarms"]),
          V.value.length ? (ao(), io("div", hz, [
            (ao(!0), io(L5, null, X5(V.value, (C) => (ao(), io("div", {
              key: C.id,
              class: "alarm-card"
            }, [
              Wt(fd, {
                selected: ze(me.exports.includes)(ze(f), C.id),
                alarm: C,
                onSelectedAlarm: E
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ao(), io("div", pz, "There is no unassigned alarms"))
        ])
      ]),
      Wt(ze(hd), {
        modelValue: v.value,
        "onUpdate:modelValue": _[4] || (_[4] = (C) => v.value = C),
        center: "",
        error: ""
      }, {
        button: oo(() => [
          Wt(ze(Ve), {
            onClick: _[3] || (_[3] = (C) => v.value = !1),
            text: ""
          }, {
            default: oo(() => [
              wz
            ]),
            _: 1
          })
        ]),
        default: oo(() => [
          mz
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const Tz = /* @__PURE__ */ we(gz, [["__scopeId", "data-v-7fae0d9e"]]), Uz = window.Vue.openBlock, yz = window.Vue.createElementBlock, Nz = window.Vue.createStaticVNode;
var kz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Rz = {}, Mz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bz = /* @__PURE__ */ Nz('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), Zz = [
  bz
];
function Sz(e, r) {
  return Uz(), yz("svg", Mz, Zz);
}
var Ez = /* @__PURE__ */ kz(Rz, [["render", Sz]]);
const Jz = window.Vue.openBlock, Az = window.Vue.createElementBlock, Fz = window.Vue.createStaticVNode;
var Cz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Wz = {}, _z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xz = /* @__PURE__ */ Fz('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), Bz = [
  xz
];
function Dz(e, r) {
  return Jz(), Az("svg", _z, Bz);
}
var Iz = /* @__PURE__ */ Cz(Wz, [["render", Dz]]);
const Oz = window.Vue.openBlock, Qz = window.Vue.createElementBlock, zz = window.Vue.createElementVNode;
var Gz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Yz = {}, Pz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Hz = /* @__PURE__ */ zz("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), jz = [
  Hz
];
function $z(e, r) {
  return Oz(), Qz("svg", Pz, jz);
}
var Xz = /* @__PURE__ */ Gz(Yz, [["render", $z]]);
const Lz = window.Vue.openBlock, qz = window.Vue.createElementBlock, Kz = window.Vue.createStaticVNode;
var eG = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const tG = {}, nG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rG = /* @__PURE__ */ Kz('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), oG = [
  rG
];
function aG(e, r) {
  return Lz(), qz("svg", nG, oG);
}
var iG = /* @__PURE__ */ eG(tG, [["render", aG]]);
const sG = window.Vue.openBlock, lG = window.Vue.createElementBlock, cG = window.Vue.createElementVNode;
var uG = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const dG = {}, fG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hG = /* @__PURE__ */ cG("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), pG = [
  hG
];
function mG(e, r) {
  return sG(), lG("svg", fG, pG);
}
var wG = /* @__PURE__ */ uG(dG, [["render", mG]]);
const wd = () => window.VRouter || Vd, vG = window.Vue.defineComponent, Se = window.Vue.createElementVNode, Za = window.Vue.createTextVNode, nt = window.Vue.unref, Mn = window.Vue.createVNode, ss = window.Vue.withCtx, Hw = window.Vue.openBlock, jw = window.Vue.createElementBlock, VG = window.Vue.createCommentVNode, gG = window.Vue.pushScopeId, TG = window.Vue.popScopeId, tn = (e) => (gG("data-v-b4b3bdcf"), e = e(), TG(), e), UG = { class: "container" }, yG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("div", { class: "title" }, "ALEC", -1)), NG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("div", { class: "description" }, [
  /* @__PURE__ */ Za(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Se("strong", null, "Our goal"),
  /* @__PURE__ */ Za(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), kG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("h3", null, "Key Benefits:", -1)), RG = { class: "list" }, MG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), bG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("span", null, "Assist in root cause analysis.", -1)), ZG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), SG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("span", null, "Easy configuration.", -1)), EG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), JG = {
  key: 0,
  class: "optin"
}, AG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("h3", null, "Enable ALEC for more precise results:", -1)), FG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), CG = { class: "choices" }, WG = /* @__PURE__ */ tn(() => /* @__PURE__ */ Se("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), _G = /* @__PURE__ */ Za("Yes"), xG = /* @__PURE__ */ Za("No"), BG = /* @__PURE__ */ Za(" Continue "), DG = window.Vue.ref, IG = /* @__PURE__ */ vG({
  __name: "WelcomePage",
  setup(e) {
    const r = Ba(), o = wd(), i = DG(!0), s = () => {
      const c = Boolean(i.value);
      r.savePermission(c), o.push({ name: "configuration" });
    };
    return (c, d) => (Hw(), jw("div", UG, [
      yG,
      NG,
      Se("div", null, [
        kG,
        Se("div", RG, [
          Se("div", null, [
            Mn(nt(j), {
              icon: nt(iG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            MG
          ]),
          Se("div", null, [
            Mn(nt(j), {
              icon: nt(Xz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            bG
          ]),
          Se("div", null, [
            Mn(nt(j), {
              icon: nt(wG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            ZG
          ]),
          Se("div", null, [
            Mn(nt(j), {
              icon: nt(Ez),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            SG
          ]),
          Se("div", null, [
            Mn(nt(j), {
              icon: nt(Iz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            EG
          ])
        ])
      ]),
      nt(r).isAdmin ? (Hw(), jw("div", JG, [
        AG,
        FG,
        Se("div", CG, [
          WG,
          Mn(nt(ed), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f),
            label: ""
          }, {
            default: ss(() => [
              Mn(nt(Ma), { value: !0 }, {
                default: ss(() => [
                  _G
                ]),
                _: 1
              }),
              Mn(nt(Ma), { value: !1 }, {
                default: ss(() => [
                  xG
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : VG("", !0),
      Mn(nt(Ve), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: ss(() => [
          BG
        ]),
        _: 1
      })
    ]));
  }
});
const OG = /* @__PURE__ */ we(IG, [["__scopeId", "data-v-b4b3bdcf"]]), QG = window.Vue.defineComponent, zG = window.Vue.createElementVNode, GG = window.Vue.createTextVNode, YG = window.Vue.unref, PG = window.Vue.withCtx, HG = window.Vue.createVNode, jG = window.Vue.Fragment, $G = window.Vue.openBlock, XG = window.Vue.createElementBlock, LG = window.Vue.pushScopeId, qG = window.Vue.popScopeId, KG = (e) => (LG("data-v-bcb7dcc6"), e = e(), qG(), e), eY = /* @__PURE__ */ KG(() => /* @__PURE__ */ zG("div", { class: "main" }, "Something bad is happening...", -1)), tY = /* @__PURE__ */ GG(" Reload "), nY = /* @__PURE__ */ QG({
  __name: "ErrorPage",
  setup(e) {
    const r = wd(), o = () => {
      r.push({ name: "situations" });
    };
    return (i, s) => ($G(), XG(jG, null, [
      eY,
      HG(YG(Ve), {
        primary: "",
        onClick: o
      }, {
        default: PG(() => [
          tY
        ]),
        _: 1
      })
    ], 64));
  }
});
const rY = /* @__PURE__ */ we(nY, [["__scopeId", "data-v-bcb7dcc6"]]), oY = window.Vue.defineComponent, _e = window.Vue.unref, $e = window.Vue.createVNode, jn = window.Vue.createElementVNode, Yn = window.Vue.withCtx, aY = window.Vue.renderList, iY = window.Vue.Fragment, ca = window.Vue.openBlock, ua = window.Vue.createElementBlock, sY = window.Vue.toDisplayString, H1 = window.Vue.createTextVNode, lY = window.Vue.pushScopeId, cY = window.Vue.popScopeId, vd = (e) => (lY("data-v-386a7a16"), e = e(), cY(), e), uY = { class: "container" }, dY = { class: "nav-btns" }, fY = /* @__PURE__ */ vd(() => /* @__PURE__ */ jn("span", null, "Situation List", -1)), hY = /* @__PURE__ */ vd(() => /* @__PURE__ */ jn("h2", null, "List Unassigned Alarms", -1)), pY = { class: "content" }, mY = { class: "filters" }, wY = { class: "list" }, vY = { class: "action-btns" }, VY = /* @__PURE__ */ vd(() => /* @__PURE__ */ jn("span", null, "Move", -1)), gY = {
  key: 0,
  class: "alarms"
}, TY = { key: 1 }, UY = /* @__PURE__ */ H1("dismiss"), $t = window.Vue.ref, yY = window.Vue.watch, NY = window.Vue.markRaw, kY = window.VueRouter.useRouter, RY = /* @__PURE__ */ oY({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = NY({
      ArrowBack: Ua,
      ExitToApp: Su
    }), o = kY(), i = en();
    i.getUnassignedAlarms(), i.getSituations();
    const s = $t([]), c = $t([]), d = $t(!1), f = $t(!1), m = $t(""), v = $t(!1), V = $t(!1), T = $t(["all"]), U = $t(["all"]), E = $t(1), S = $t(!0);
    yY(
      () => i.unassignedAlarms,
      () => {
        C();
      }
    );
    const A = (B) => {
      me.exports.includes(c.value, B) ? me.exports.remove(c.value, ($) => $ === B) : c.value.push(B);
    }, W = (B) => {
      U.value = B, C();
    }, F = (B) => {
      T.value = B, C();
    }, _ = (B) => {
      E.value = B, C();
    }, C = () => {
      let B = i.unassignedAlarms;
      U.value.includes("all") || (B = B.filter(
        ($) => U.value.includes($.severity)
      )), T.value.includes("all") || (B = B.filter(
        ($) => T.value.includes($.nodeLabel)
      )), E.value !== 1 && (B = Nv(
        E.value,
        B
      )), s.value = B;
    }, D = () => {
      d.value ? c.value = s.value.map((B) => B.id) : c.value = [];
    }, M = async (B) => {
      await p1(B, c.value) ? i.getUnassignedAlarms() : (v.value = !0, V.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, z = () => {
      o.push({
        name: "situations"
      });
    }, Q = () => {
      c.value.length ? f.value = !0 : (v.value = !0, V.value = !1, m.value = "You need to choose at least one alarm!");
    };
    return (B, $) => (ca(), ua("div", uY, [
      jn("div", dY, [
        $e(_e(Ve), {
          primary: "",
          onClick: $[0] || ($[0] = () => z())
        }, {
          default: Yn(() => [
            $e(_e(j), {
              icon: _e(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fY
          ]),
          _: 1
        }),
        $e(Pv)
      ]),
      hY,
      jn("div", pY, [
        jn("div", mY, [
          $e(_e(Va), {
            title: "By Severity",
            modelValue: S.value,
            "onUpdate:modelValue": $[1] || ($[1] = (K) => S.value = K)
          }, {
            default: Yn(() => [
              $e(Vo, {
                alarms: _e(i).unassignedAlarms,
                onSelectedOption: W,
                "pre-selected": U.value,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          $e(_e(Va), {
            title: "By Node Label",
            modelValue: S.value,
            "onUpdate:modelValue": $[2] || ($[2] = (K) => S.value = K)
          }, {
            default: Yn(() => [
              $e(Vo, {
                alarms: _e(i).unassignedAlarms,
                onSelectedOption: F,
                "pre-selected": T.value,
                property: "nodeLabel",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          $e(_e(Va), { title: "By Start Date" }, {
            default: Yn(() => [
              $e(Kv, { onFilterDateSelected: _ })
            ]),
            _: 1
          })
        ]),
        jn("div", wY, [
          jn("div", vY, [
            $e(_e(xa), {
              modelValue: d.value,
              "onUpdate:modelValue": [
                $[3] || ($[3] = (K) => d.value = K),
                D
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            $e(_e(Ve), { onClick: Q }, {
              default: Yn(() => [
                $e(_e(j), {
                  icon: _e(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                VY
              ]),
              _: 1
            })
          ]),
          _e(s).length ? (ca(), ua("div", gY, [
            (ca(!0), ua(iY, null, aY(_e(s), (K) => (ca(), ua("div", {
              key: K.id,
              class: "card"
            }, [
              $e(fd, {
                selected: _e(me.exports.includes)(_e(c), K.id),
                alarm: K,
                onSelectedAlarm: A
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ca(), ua("div", TY, "There is no unassigned alarms"))
        ])
      ]),
      $e(_1, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: M,
        onDrawerClosed: $[4] || ($[4] = () => f.value = !1)
      }, null, 8, ["visible"]),
      $e(_e(hd), {
        modelValue: v.value,
        "onUpdate:modelValue": $[6] || ($[6] = (K) => v.value = K),
        center: "",
        error: V.value
      }, {
        button: Yn(() => [
          $e(_e(Ve), {
            onClick: $[5] || ($[5] = (K) => v.value = !1),
            text: ""
          }, {
            default: Yn(() => [
              UY
            ]),
            _: 1
          })
        ]),
        default: Yn(() => [
          H1(sY(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const MY = /* @__PURE__ */ we(RY, [["__scopeId", "data-v-386a7a16"]]), bY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", ZY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", SY = window.Vue.defineComponent, Be = window.Vue.createElementVNode, Cu = window.Vue.createTextVNode, Pn = window.Vue.unref, da = window.Vue.withCtx, fa = window.Vue.createVNode, EY = window.Vue.openBlock, JY = window.Vue.createElementBlock, AY = window.Vue.pushScopeId, FY = window.Vue.popScopeId, Mr = (e) => (AY("data-v-9a5b5f4e"), e = e(), FY(), e), CY = { class: "container" }, WY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("h2", null, "Configuration", -1)), _Y = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("p", null, [
  /* @__PURE__ */ Cu(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Be("br"),
  /* @__PURE__ */ Cu(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Be("strong", null, [
    /* @__PURE__ */ Be("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), xY = { class: "radio-content" }, BY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("strong", { class: "title" }, "Clustering", -1)), DY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), IY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("img", {
  class: "img",
  src: bY
}, null, -1)), OY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("div", { class: "hellinger" }, [
  /* @__PURE__ */ Be("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Be("br"),
  /* @__PURE__ */ Be("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), QY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ Be("div", { class: "radio-content" }, [
  /* @__PURE__ */ Be("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Be("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Be("img", {
    class: "img img2",
    src: ZY
  })
], -1)), zY = /* @__PURE__ */ Cu(" Continue "), $w = window.Vue.ref, GY = /* @__PURE__ */ SY({
  __name: "ConfigurationPage",
  setup(e) {
    const r = Ba(), o = wd(), i = $w(!1), s = $w(yt.ENGINE_DBSCAN), c = () => {
      f1(r.allowSave), H_(s.value, i.value), o.push({ name: "situations" });
    };
    return (d, f) => (EY(), JY("div", CY, [
      WY,
      _Y,
      Be("div", null, [
        fa(Pn(ed), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => s.value = m)
        }, {
          default: da(() => [
            fa(Pn(Ma), {
              class: "radio",
              value: Pn(yt).ENGINE_DBSCAN
            }, {
              default: da(() => [
                Be("div", xY, [
                  BY,
                  DY,
                  IY,
                  fa(Pn(xa), {
                    modelValue: i.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                    disabled: s.value !== Pn(yt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: da(() => [
                      OY
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            fa(Pn(Ma), {
              class: "radio",
              value: Pn(yt).ENGINE_DEEP_LEARNING
            }, {
              default: da(() => [
                QY
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      fa(Pn(Ve), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => c())
      }, {
        default: da(() => [
          zY
        ]),
        _: 1
      })
    ]));
  }
});
const YY = /* @__PURE__ */ we(GY, [["__scopeId", "data-v-9a5b5f4e"]]), PY = window.VueRouter.createRouter, HY = window.VueRouter.createWebHistory, mu = async () => {
  const e = window.VRouter || Vd, r = Ba();
  if (!r.userId) {
    const o = await r.getUserRole();
    await r.getAlecInfo(), o ? e.push({ name: "home" }) : e.push({ name: "error" });
  }
}, j1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || Vd, o = Ba();
      await o.getUserRole(), await o.getAlecInfo(), o.firstTime ? r.push({ name: "welcome", params: e.params }) : r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => mu(),
    component: OG
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => mu(),
    component: YY
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => mu(),
    component: qW
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: Y5
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: Tz
  },
  {
    path: "/error",
    name: "error",
    component: rY
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: MY
  }
], wu = window.VRouter;
if (wu) {
  const e = "Plugin-alecUiExtension", r = wu.hasRoute(e) ? e : "Plugin";
  for (const o of j1) {
    const { path: i, name: s, component: c, beforeEnter: d } = o;
    wu.addRoute(r, {
      path: i.slice(1),
      name: s,
      component: c,
      beforeEnter: d
    });
  }
}
const Vd = PY({
  history: HY(),
  routes: j1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = jk;
