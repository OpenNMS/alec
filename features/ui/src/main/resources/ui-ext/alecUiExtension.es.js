const we = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
}, RR = {}, kR = window.Vue.resolveComponent, MR = window.Vue.createVNode, bR = window.Vue.openBlock, ZR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const SR = { class: "main" };
function ER(e, r) {
  const o = kR("router-view");
  return bR(), ZR("div", SR, [
    MR(o)
  ]);
}
const JR = /* @__PURE__ */ we(RR, [["render", ER], ["__scopeId", "data-v-5d32d140"]]), AR = window.Vue.defineComponent, FR = window.Vue.openBlock, CR = window.Vue.createBlock, WR = /* @__PURE__ */ AR({
  __name: "App",
  setup(e) {
    return (r, o) => (FR(), CR(JR));
  }
});
var Go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xw = { exports: {} }, ku = { exports: {} }, Bw = function(r, o) {
  return function() {
    for (var s = new Array(arguments.length), c = 0; c < s.length; c++)
      s[c] = arguments[c];
    return r.apply(o, s);
  };
}, BR = Bw, Mu = Object.prototype.toString, bu = function(e) {
  return function(r) {
    var o = Mu.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Rr(e) {
  return e = e.toLowerCase(), function(o) {
    return bu(o) === e;
  };
}
function Zu(e) {
  return Array.isArray(e);
}
function us(e) {
  return typeof e > "u";
}
function _R(e) {
  return e !== null && !us(e) && e.constructor !== null && !us(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var _w = Rr("ArrayBuffer");
function IR(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && _w(e.buffer), r;
}
function DR(e) {
  return typeof e == "string";
}
function OR(e) {
  return typeof e == "number";
}
function Iw(e) {
  return e !== null && typeof e == "object";
}
function rs(e) {
  if (bu(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var QR = Rr("Date"), zR = Rr("File"), GR = Rr("Blob"), YR = Rr("FileList");
function Su(e) {
  return Mu.call(e) === "[object Function]";
}
function PR(e) {
  return Iw(e) && Su(e.pipe);
}
function HR(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Mu.call(e) === r || Su(e.toString) && e.toString() === r);
}
var jR = Rr("URLSearchParams");
function $R(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function XR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Eu(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Zu(e))
      for (var o = 0, i = e.length; o < i; o++)
        r.call(null, e[o], o, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && r.call(null, e[s], s, e);
}
function cu() {
  var e = {};
  function r(s, c) {
    rs(e[c]) && rs(s) ? e[c] = cu(e[c], s) : rs(s) ? e[c] = cu({}, s) : Zu(s) ? e[c] = s.slice() : e[c] = s;
  }
  for (var o = 0, i = arguments.length; o < i; o++)
    Eu(arguments[o], r);
  return e;
}
function LR(e, r, o) {
  return Eu(r, function(s, c) {
    o && typeof s == "function" ? e[c] = BR(s, o) : e[c] = s;
  }), e;
}
function qR(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function KR(e, r, o, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function ek(e, r, o) {
  var i, s, c, d = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      c = i[s], d[c] || (r[c] = e[c], d[c] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function tk(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var i = e.indexOf(r, o);
  return i !== -1 && i === o;
}
function nk(e) {
  if (!e)
    return null;
  var r = e.length;
  if (us(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var rk = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ye = {
  isArray: Zu,
  isArrayBuffer: _w,
  isBuffer: _R,
  isFormData: HR,
  isArrayBufferView: IR,
  isString: DR,
  isNumber: OR,
  isObject: Iw,
  isPlainObject: rs,
  isUndefined: us,
  isDate: QR,
  isFile: zR,
  isBlob: GR,
  isFunction: Su,
  isStream: PR,
  isURLSearchParams: jR,
  isStandardBrowserEnv: XR,
  forEach: Eu,
  merge: cu,
  extend: LR,
  trim: $R,
  stripBOM: qR,
  inherits: KR,
  toFlatObject: ek,
  kindOf: bu,
  kindOfTest: Rr,
  endsWith: tk,
  toArray: nk,
  isTypedArray: rk,
  isFileList: YR
}, zr = Ye;
function Oh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Dw = function(r, o, i) {
  if (!o)
    return r;
  var s;
  if (i)
    s = i(o);
  else if (zr.isURLSearchParams(o))
    s = o.toString();
  else {
    var c = [];
    zr.forEach(o, function(m, V) {
      m === null || typeof m > "u" || (zr.isArray(m) ? V = V + "[]" : m = [m], zr.forEach(m, function(T) {
        zr.isDate(T) ? T = T.toISOString() : zr.isObject(T) && (T = JSON.stringify(T)), c.push(Oh(V) + "=" + Oh(T));
      }));
    }), s = c.join("&");
  }
  if (s) {
    var d = r.indexOf("#");
    d !== -1 && (r = r.slice(0, d)), r += (r.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return r;
}, ok = Ye;
function Us() {
  this.handlers = [];
}
Us.prototype.use = function(r, o, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Us.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
Us.prototype.forEach = function(r) {
  ok.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var ak = Us, ik = Ye, sk = function(r, o) {
  ik.forEach(r, function(s, c) {
    c !== o && c.toUpperCase() === o.toUpperCase() && (r[o] = s, delete r[c]);
  });
}, Ow = Ye;
function ho(e, r, o, i, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), i && (this.request = i), s && (this.response = s);
}
Ow.inherits(ho, Error, {
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
var Qw = ho.prototype, zw = {};
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
  zw[e] = { value: e };
});
Object.defineProperties(ho, zw);
Object.defineProperty(Qw, "isAxiosError", { value: !0 });
ho.from = function(e, r, o, i, s, c) {
  var d = Object.create(Qw);
  return Ow.toFlatObject(e, d, function(m) {
    return m !== Error.prototype;
  }), ho.call(d, e.message, r, o, i, s), d.name = e.name, c && Object.assign(d, c), d;
};
var wo = ho, Gw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Pt = Ye;
function lk(e, r) {
  r = r || new FormData();
  var o = [];
  function i(c) {
    return c === null ? "" : Pt.isDate(c) ? c.toISOString() : Pt.isArrayBuffer(c) || Pt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function s(c, d) {
    if (Pt.isPlainObject(c) || Pt.isArray(c)) {
      if (o.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      o.push(c), Pt.forEach(c, function(m, V) {
        if (!Pt.isUndefined(m)) {
          var g = d ? d + "." + V : V, T;
          if (m && !d && typeof m == "object") {
            if (Pt.endsWith(V, "{}"))
              m = JSON.stringify(m);
            else if (Pt.endsWith(V, "[]") && (T = Pt.toArray(m))) {
              T.forEach(function(N) {
                !Pt.isUndefined(N) && r.append(g, i(N));
              });
              return;
            }
          }
          s(m, g);
        }
      }), o.pop();
    } else
      r.append(d, i(c));
  }
  return s(e), r;
}
var Yw = lk, ic, Qh;
function ck() {
  if (Qh)
    return ic;
  Qh = 1;
  var e = wo;
  return ic = function(o, i, s) {
    var c = s.config.validateStatus;
    !s.status || !c || c(s.status) ? o(s) : i(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, ic;
}
var sc, zh;
function uk() {
  if (zh)
    return sc;
  zh = 1;
  var e = Ye;
  return sc = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, s, c, d, f, m) {
        var V = [];
        V.push(i + "=" + encodeURIComponent(s)), e.isNumber(c) && V.push("expires=" + new Date(c).toGMTString()), e.isString(d) && V.push("path=" + d), e.isString(f) && V.push("domain=" + f), m === !0 && V.push("secure"), document.cookie = V.join("; ");
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
  }(), sc;
}
var dk = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, fk = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, hk = dk, pk = fk, Pw = function(r, o) {
  return r && !hk(o) ? pk(r, o) : o;
}, lc, Gh;
function mk() {
  if (Gh)
    return lc;
  Gh = 1;
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
  return lc = function(i) {
    var s = {}, c, d, f;
    return i && e.forEach(i.split(`
`), function(V) {
      if (f = V.indexOf(":"), c = e.trim(V.substr(0, f)).toLowerCase(), d = e.trim(V.substr(f + 1)), c) {
        if (s[c] && r.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? s[c] = (s[c] ? s[c] : []).concat([d]) : s[c] = s[c] ? s[c] + ", " + d : d;
      }
    }), s;
  }, lc;
}
var cc, Yh;
function wk() {
  if (Yh)
    return cc;
  Yh = 1;
  var e = Ye;
  return cc = e.isStandardBrowserEnv() ? function() {
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
  }(), cc;
}
var uc, Ph;
function ys() {
  if (Ph)
    return uc;
  Ph = 1;
  var e = wo, r = Ye;
  function o(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), uc = o, uc;
}
var dc, Hh;
function vk() {
  return Hh || (Hh = 1, dc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), dc;
}
var fc, jh;
function $h() {
  if (jh)
    return fc;
  jh = 1;
  var e = Ye, r = ck(), o = uk(), i = Dw, s = Pw, c = mk(), d = wk(), f = Gw, m = wo, V = ys(), g = vk();
  return fc = function(N) {
    return new Promise(function(E, Z) {
      var C = N.data, A = N.headers, W = N.responseType, x;
      function X() {
        N.cancelToken && N.cancelToken.unsubscribe(x), N.signal && N.signal.removeEventListener("abort", x);
      }
      e.isFormData(C) && e.isStandardBrowserEnv() && delete A["Content-Type"];
      var S = new XMLHttpRequest();
      if (N.auth) {
        var Q = N.auth.username || "", O = N.auth.password ? unescape(encodeURIComponent(N.auth.password)) : "";
        A.Authorization = "Basic " + btoa(Q + ":" + O);
      }
      var _ = s(N.baseURL, N.url);
      S.open(N.method.toUpperCase(), i(_, N.params, N.paramsSerializer), !0), S.timeout = N.timeout;
      function H() {
        if (!!S) {
          var z = "getAllResponseHeaders" in S ? c(S.getAllResponseHeaders()) : null, se = !W || W === "text" || W === "json" ? S.responseText : S.response, ve = {
            data: se,
            status: S.status,
            statusText: S.statusText,
            headers: z,
            config: N,
            request: S
          };
          r(function(Ie) {
            E(Ie), X();
          }, function(Ie) {
            Z(Ie), X();
          }, ve), S = null;
        }
      }
      if ("onloadend" in S ? S.onloadend = H : S.onreadystatechange = function() {
        !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(H);
      }, S.onabort = function() {
        !S || (Z(new m("Request aborted", m.ECONNABORTED, N, S)), S = null);
      }, S.onerror = function() {
        Z(new m("Network Error", m.ERR_NETWORK, N, S, S)), S = null;
      }, S.ontimeout = function() {
        var se = N.timeout ? "timeout of " + N.timeout + "ms exceeded" : "timeout exceeded", ve = N.transitional || f;
        N.timeoutErrorMessage && (se = N.timeoutErrorMessage), Z(new m(
          se,
          ve.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          N,
          S
        )), S = null;
      }, e.isStandardBrowserEnv()) {
        var K = (N.withCredentials || d(_)) && N.xsrfCookieName ? o.read(N.xsrfCookieName) : void 0;
        K && (A[N.xsrfHeaderName] = K);
      }
      "setRequestHeader" in S && e.forEach(A, function(se, ve) {
        typeof C > "u" && ve.toLowerCase() === "content-type" ? delete A[ve] : S.setRequestHeader(ve, se);
      }), e.isUndefined(N.withCredentials) || (S.withCredentials = !!N.withCredentials), W && W !== "json" && (S.responseType = N.responseType), typeof N.onDownloadProgress == "function" && S.addEventListener("progress", N.onDownloadProgress), typeof N.onUploadProgress == "function" && S.upload && S.upload.addEventListener("progress", N.onUploadProgress), (N.cancelToken || N.signal) && (x = function(z) {
        !S || (Z(!z || z && z.type ? new V() : z), S.abort(), S = null);
      }, N.cancelToken && N.cancelToken.subscribe(x), N.signal && (N.signal.aborted ? x() : N.signal.addEventListener("abort", x))), C || (C = null);
      var j = g(_);
      if (j && ["http", "https", "file"].indexOf(j) === -1) {
        Z(new m("Unsupported protocol " + j + ":", m.ERR_BAD_REQUEST, N));
        return;
      }
      S.send(C);
    });
  }, fc;
}
var hc, Xh;
function Vk() {
  return Xh || (Xh = 1, hc = null), hc;
}
var Be = Ye, Lh = sk, qh = wo, gk = Gw, Tk = Yw, Uk = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Kh(e, r) {
  !Be.isUndefined(e) && Be.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function yk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = $h()), e;
}
function Nk(e, r, o) {
  if (Be.isString(e))
    try {
      return (r || JSON.parse)(e), Be.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (o || JSON.stringify)(e);
}
var Ns = {
  transitional: gk,
  adapter: yk(),
  transformRequest: [function(r, o) {
    if (Lh(o, "Accept"), Lh(o, "Content-Type"), Be.isFormData(r) || Be.isArrayBuffer(r) || Be.isBuffer(r) || Be.isStream(r) || Be.isFile(r) || Be.isBlob(r))
      return r;
    if (Be.isArrayBufferView(r))
      return r.buffer;
    if (Be.isURLSearchParams(r))
      return Kh(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = Be.isObject(r), s = o && o["Content-Type"], c;
    if ((c = Be.isFileList(r)) || i && s === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return Tk(c ? { "files[]": r } : r, d && new d());
    } else if (i || s === "application/json")
      return Kh(o, "application/json"), Nk(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || Ns.transitional, i = o && o.silentJSONParsing, s = o && o.forcedJSONParsing, c = !i && this.responseType === "json";
    if (c || s && Be.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? qh.from(d, qh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Vk()
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
Be.forEach(["delete", "get", "head"], function(r) {
  Ns.headers[r] = {};
});
Be.forEach(["post", "put", "patch"], function(r) {
  Ns.headers[r] = Be.merge(Uk);
});
var Ju = Ns, Rk = Ye, kk = Ju, Mk = function(r, o, i) {
  var s = this || kk;
  return Rk.forEach(i, function(d) {
    r = d.call(s, r, o);
  }), r;
}, pc, ep;
function Hw() {
  return ep || (ep = 1, pc = function(r) {
    return !!(r && r.__CANCEL__);
  }), pc;
}
var tp = Ye, mc = Mk, bk = Hw(), Zk = Ju, Sk = ys();
function wc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Sk();
}
var Ek = function(r) {
  wc(r), r.headers = r.headers || {}, r.data = mc.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = tp.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), tp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete r.headers[s];
    }
  );
  var o = r.adapter || Zk.adapter;
  return o(r).then(function(s) {
    return wc(r), s.data = mc.call(
      r,
      s.data,
      s.headers,
      r.transformResponse
    ), s;
  }, function(s) {
    return bk(s) || (wc(r), s && s.response && (s.response.data = mc.call(
      r,
      s.response.data,
      s.response.headers,
      r.transformResponse
    ))), Promise.reject(s);
  });
}, wt = Ye, jw = function(r, o) {
  o = o || {};
  var i = {};
  function s(g, T) {
    return wt.isPlainObject(g) && wt.isPlainObject(T) ? wt.merge(g, T) : wt.isPlainObject(T) ? wt.merge({}, T) : wt.isArray(T) ? T.slice() : T;
  }
  function c(g) {
    if (wt.isUndefined(o[g])) {
      if (!wt.isUndefined(r[g]))
        return s(void 0, r[g]);
    } else
      return s(r[g], o[g]);
  }
  function d(g) {
    if (!wt.isUndefined(o[g]))
      return s(void 0, o[g]);
  }
  function f(g) {
    if (wt.isUndefined(o[g])) {
      if (!wt.isUndefined(r[g]))
        return s(void 0, r[g]);
    } else
      return s(void 0, o[g]);
  }
  function m(g) {
    if (g in o)
      return s(r[g], o[g]);
    if (g in r)
      return s(void 0, r[g]);
  }
  var V = {
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
  return wt.forEach(Object.keys(r).concat(Object.keys(o)), function(T) {
    var N = V[T] || c, F = N(T);
    wt.isUndefined(F) && N !== m || (i[T] = F);
  }), i;
}, vc, np;
function $w() {
  return np || (np = 1, vc = {
    version: "0.27.2"
  }), vc;
}
var Jk = $w().version, Pn = wo, Au = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Au[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var rp = {};
Au.transitional = function(r, o, i) {
  function s(c, d) {
    return "[Axios v" + Jk + "] Transitional option '" + c + "'" + d + (i ? ". " + i : "");
  }
  return function(c, d, f) {
    if (r === !1)
      throw new Pn(
        s(d, " has been removed" + (o ? " in " + o : "")),
        Pn.ERR_DEPRECATED
      );
    return o && !rp[d] && (rp[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(c, d, f) : !0;
  };
};
function Ak(e, r, o) {
  if (typeof e != "object")
    throw new Pn("options must be an object", Pn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), s = i.length; s-- > 0; ) {
    var c = i[s], d = r[c];
    if (d) {
      var f = e[c], m = f === void 0 || d(f, c, e);
      if (m !== !0)
        throw new Pn("option " + c + " must be " + m, Pn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new Pn("Unknown option " + c, Pn.ERR_BAD_OPTION);
  }
}
var Fk = {
  assertOptions: Ak,
  validators: Au
}, Xw = Ye, Ck = Dw, op = ak, ap = Ek, Rs = jw, Wk = Pw, Lw = Fk, Gr = Lw.validators;
function po(e) {
  this.defaults = e, this.interceptors = {
    request: new op(),
    response: new op()
  };
}
po.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Rs(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var i = o.transitional;
  i !== void 0 && Lw.assertOptions(i, {
    silentJSONParsing: Gr.transitional(Gr.boolean),
    forcedJSONParsing: Gr.transitional(Gr.boolean),
    clarifyTimeoutError: Gr.transitional(Gr.boolean)
  }, !1);
  var s = [], c = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(o) === !1 || (c = c && F.synchronous, s.unshift(F.fulfilled, F.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(F) {
    d.push(F.fulfilled, F.rejected);
  });
  var f;
  if (!c) {
    var m = [ap, void 0];
    for (Array.prototype.unshift.apply(m, s), m = m.concat(d), f = Promise.resolve(o); m.length; )
      f = f.then(m.shift(), m.shift());
    return f;
  }
  for (var V = o; s.length; ) {
    var g = s.shift(), T = s.shift();
    try {
      V = g(V);
    } catch (N) {
      T(N);
      break;
    }
  }
  try {
    f = ap(V);
  } catch (N) {
    return Promise.reject(N);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
po.prototype.getUri = function(r) {
  r = Rs(this.defaults, r);
  var o = Wk(r.baseURL, r.url);
  return Ck(o, r.params, r.paramsSerializer);
};
Xw.forEach(["delete", "get", "head", "options"], function(r) {
  po.prototype[r] = function(o, i) {
    return this.request(Rs(i || {}, {
      method: r,
      url: o,
      data: (i || {}).data
    }));
  };
});
Xw.forEach(["post", "put", "patch"], function(r) {
  function o(i) {
    return function(c, d, f) {
      return this.request(Rs(f || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  po.prototype[r] = o(), po.prototype[r + "Form"] = o(!0);
});
var xk = po, Vc, ip;
function Bk() {
  if (ip)
    return Vc;
  ip = 1;
  var e = ys();
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
  }, Vc = r, Vc;
}
var gc, sp;
function _k() {
  return sp || (sp = 1, gc = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), gc;
}
var Tc, lp;
function Ik() {
  if (lp)
    return Tc;
  lp = 1;
  var e = Ye;
  return Tc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, Tc;
}
var cp = Ye, Dk = Bw, os = xk, Ok = jw, Qk = Ju;
function qw(e) {
  var r = new os(e), o = Dk(os.prototype.request, r);
  return cp.extend(o, os.prototype, r), cp.extend(o, r), o.create = function(s) {
    return qw(Ok(e, s));
  }, o;
}
var ct = qw(Qk);
ct.Axios = os;
ct.CanceledError = ys();
ct.CancelToken = Bk();
ct.isCancel = Hw();
ct.VERSION = $w().version;
ct.toFormData = Yw;
ct.AxiosError = wo;
ct.Cancel = ct.CanceledError;
ct.all = function(r) {
  return Promise.all(r);
};
ct.spread = _k();
ct.isAxiosError = Ik();
ku.exports = ct;
ku.exports.default = ct;
(function(e) {
  e.exports = ku.exports;
})(xw);
const Kw = /* @__PURE__ */ xR(xw.exports), Zn = Kw.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), fn = Kw.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var ge = { exports: {} };
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
    var o, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", V = 500, g = "__lodash_placeholder__", T = 1, N = 2, F = 4, E = 1, Z = 2, C = 1, A = 2, W = 4, x = 8, X = 16, S = 32, Q = 64, O = 128, _ = 256, H = 512, K = 30, j = "...", z = 800, se = 16, ve = 1, de = 2, Ie = 3, De = 1 / 0, Xe = 9007199254740991, Uo = 17976931348623157e292, Ba = 0 / 0, tn = 4294967295, x1 = tn - 1, B1 = tn >>> 1, _1 = [
      ["ary", O],
      ["bind", C],
      ["bindKey", A],
      ["curry", x],
      ["curryRight", X],
      ["flip", H],
      ["partial", S],
      ["partialRight", Q],
      ["rearg", _]
    ], br = "[object Arguments]", _a = "[object Array]", I1 = "[object AsyncFunction]", yo = "[object Boolean]", No = "[object Date]", D1 = "[object DOMException]", Ia = "[object Error]", Da = "[object Function]", cd = "[object GeneratorFunction]", Dt = "[object Map]", Ro = "[object Number]", O1 = "[object Null]", hn = "[object Object]", ud = "[object Promise]", Q1 = "[object Proxy]", ko = "[object RegExp]", Ot = "[object Set]", Mo = "[object String]", Oa = "[object Symbol]", z1 = "[object Undefined]", bo = "[object WeakMap]", G1 = "[object WeakSet]", Zo = "[object ArrayBuffer]", Zr = "[object DataView]", Is = "[object Float32Array]", Ds = "[object Float64Array]", Os = "[object Int8Array]", Qs = "[object Int16Array]", zs = "[object Int32Array]", Gs = "[object Uint8Array]", Ys = "[object Uint8ClampedArray]", Ps = "[object Uint16Array]", Hs = "[object Uint32Array]", Y1 = /\b__p \+= '';/g, P1 = /\b(__p \+=) '' \+/g, H1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dd = /&(?:amp|lt|gt|quot|#39);/g, fd = /[&<>"']/g, j1 = RegExp(dd.source), $1 = RegExp(fd.source), X1 = /<%-([\s\S]+?)%>/g, L1 = /<%([\s\S]+?)%>/g, hd = /<%=([\s\S]+?)%>/g, q1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, K1 = /^\w*$/, eV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, js = /[\\^$.*+?()[\]{}|]/g, tV = RegExp(js.source), $s = /^\s+/, nV = /\s/, rV = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, oV = /\{\n\/\* \[wrapped with (.+)\] \*/, aV = /,? & /, iV = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, sV = /[()=,{}\[\]\/\s]/, lV = /\\(\\)?/g, cV = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pd = /\w*$/, uV = /^[-+]0x[0-9a-f]+$/i, dV = /^0b[01]+$/i, fV = /^\[object .+?Constructor\]$/, hV = /^0o[0-7]+$/i, pV = /^(?:0|[1-9]\d*)$/, mV = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qa = /($^)/, wV = /['\n\r\u2028\u2029\\]/g, za = "\\ud800-\\udfff", vV = "\\u0300-\\u036f", VV = "\\ufe20-\\ufe2f", gV = "\\u20d0-\\u20ff", md = vV + VV + gV, wd = "\\u2700-\\u27bf", vd = "a-z\\xdf-\\xf6\\xf8-\\xff", TV = "\\xac\\xb1\\xd7\\xf7", UV = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yV = "\\u2000-\\u206f", NV = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vd = "A-Z\\xc0-\\xd6\\xd8-\\xde", gd = "\\ufe0e\\ufe0f", Td = TV + UV + yV + NV, Xs = "['\u2019]", RV = "[" + za + "]", Ud = "[" + Td + "]", Ga = "[" + md + "]", yd = "\\d+", kV = "[" + wd + "]", Nd = "[" + vd + "]", Rd = "[^" + za + Td + yd + wd + vd + Vd + "]", Ls = "\\ud83c[\\udffb-\\udfff]", MV = "(?:" + Ga + "|" + Ls + ")", kd = "[^" + za + "]", qs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ks = "[\\ud800-\\udbff][\\udc00-\\udfff]", Sr = "[" + Vd + "]", Md = "\\u200d", bd = "(?:" + Nd + "|" + Rd + ")", bV = "(?:" + Sr + "|" + Rd + ")", Zd = "(?:" + Xs + "(?:d|ll|m|re|s|t|ve))?", Sd = "(?:" + Xs + "(?:D|LL|M|RE|S|T|VE))?", Ed = MV + "?", Jd = "[" + gd + "]?", ZV = "(?:" + Md + "(?:" + [kd, qs, Ks].join("|") + ")" + Jd + Ed + ")*", SV = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", EV = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ad = Jd + Ed + ZV, JV = "(?:" + [kV, qs, Ks].join("|") + ")" + Ad, AV = "(?:" + [kd + Ga + "?", Ga, qs, Ks, RV].join("|") + ")", FV = RegExp(Xs, "g"), CV = RegExp(Ga, "g"), el = RegExp(Ls + "(?=" + Ls + ")|" + AV + Ad, "g"), WV = RegExp([
      Sr + "?" + Nd + "+" + Zd + "(?=" + [Ud, Sr, "$"].join("|") + ")",
      bV + "+" + Sd + "(?=" + [Ud, Sr + bd, "$"].join("|") + ")",
      Sr + "?" + bd + "+" + Zd,
      Sr + "+" + Sd,
      EV,
      SV,
      yd,
      JV
    ].join("|"), "g"), xV = RegExp("[" + Md + za + md + gd + "]"), BV = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _V = [
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
    ], IV = -1, Ue = {};
    Ue[Is] = Ue[Ds] = Ue[Os] = Ue[Qs] = Ue[zs] = Ue[Gs] = Ue[Ys] = Ue[Ps] = Ue[Hs] = !0, Ue[br] = Ue[_a] = Ue[Zo] = Ue[yo] = Ue[Zr] = Ue[No] = Ue[Ia] = Ue[Da] = Ue[Dt] = Ue[Ro] = Ue[hn] = Ue[ko] = Ue[Ot] = Ue[Mo] = Ue[bo] = !1;
    var Ve = {};
    Ve[br] = Ve[_a] = Ve[Zo] = Ve[Zr] = Ve[yo] = Ve[No] = Ve[Is] = Ve[Ds] = Ve[Os] = Ve[Qs] = Ve[zs] = Ve[Dt] = Ve[Ro] = Ve[hn] = Ve[ko] = Ve[Ot] = Ve[Mo] = Ve[Oa] = Ve[Gs] = Ve[Ys] = Ve[Ps] = Ve[Hs] = !0, Ve[Ia] = Ve[Da] = Ve[bo] = !1;
    var DV = {
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
    }, OV = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, QV = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, zV = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, GV = parseFloat, YV = parseInt, Fd = typeof Go == "object" && Go && Go.Object === Object && Go, PV = typeof self == "object" && self && self.Object === Object && self, Oe = Fd || PV || Function("return this")(), tl = r && !r.nodeType && r, er = tl && !0 && e && !e.nodeType && e, Cd = er && er.exports === tl, nl = Cd && Fd.process, Rt = function() {
      try {
        var U = er && er.require && er.require("util").types;
        return U || nl && nl.binding && nl.binding("util");
      } catch {
      }
    }(), Wd = Rt && Rt.isArrayBuffer, xd = Rt && Rt.isDate, Bd = Rt && Rt.isMap, _d = Rt && Rt.isRegExp, Id = Rt && Rt.isSet, Dd = Rt && Rt.isTypedArray;
    function ut(U, k, R) {
      switch (R.length) {
        case 0:
          return U.call(k);
        case 1:
          return U.call(k, R[0]);
        case 2:
          return U.call(k, R[0], R[1]);
        case 3:
          return U.call(k, R[0], R[1], R[2]);
      }
      return U.apply(k, R);
    }
    function HV(U, k, R, I) {
      for (var L = -1, ce = U == null ? 0 : U.length; ++L < ce; ) {
        var Je = U[L];
        k(I, Je, R(Je), U);
      }
      return I;
    }
    function kt(U, k) {
      for (var R = -1, I = U == null ? 0 : U.length; ++R < I && k(U[R], R, U) !== !1; )
        ;
      return U;
    }
    function jV(U, k) {
      for (var R = U == null ? 0 : U.length; R-- && k(U[R], R, U) !== !1; )
        ;
      return U;
    }
    function Od(U, k) {
      for (var R = -1, I = U == null ? 0 : U.length; ++R < I; )
        if (!k(U[R], R, U))
          return !1;
      return !0;
    }
    function En(U, k) {
      for (var R = -1, I = U == null ? 0 : U.length, L = 0, ce = []; ++R < I; ) {
        var Je = U[R];
        k(Je, R, U) && (ce[L++] = Je);
      }
      return ce;
    }
    function Ya(U, k) {
      var R = U == null ? 0 : U.length;
      return !!R && Er(U, k, 0) > -1;
    }
    function rl(U, k, R) {
      for (var I = -1, L = U == null ? 0 : U.length; ++I < L; )
        if (R(k, U[I]))
          return !0;
      return !1;
    }
    function Ne(U, k) {
      for (var R = -1, I = U == null ? 0 : U.length, L = Array(I); ++R < I; )
        L[R] = k(U[R], R, U);
      return L;
    }
    function Jn(U, k) {
      for (var R = -1, I = k.length, L = U.length; ++R < I; )
        U[L + R] = k[R];
      return U;
    }
    function ol(U, k, R, I) {
      var L = -1, ce = U == null ? 0 : U.length;
      for (I && ce && (R = U[++L]); ++L < ce; )
        R = k(R, U[L], L, U);
      return R;
    }
    function $V(U, k, R, I) {
      var L = U == null ? 0 : U.length;
      for (I && L && (R = U[--L]); L--; )
        R = k(R, U[L], L, U);
      return R;
    }
    function al(U, k) {
      for (var R = -1, I = U == null ? 0 : U.length; ++R < I; )
        if (k(U[R], R, U))
          return !0;
      return !1;
    }
    var XV = il("length");
    function LV(U) {
      return U.split("");
    }
    function qV(U) {
      return U.match(iV) || [];
    }
    function Qd(U, k, R) {
      var I;
      return R(U, function(L, ce, Je) {
        if (k(L, ce, Je))
          return I = ce, !1;
      }), I;
    }
    function Pa(U, k, R, I) {
      for (var L = U.length, ce = R + (I ? 1 : -1); I ? ce-- : ++ce < L; )
        if (k(U[ce], ce, U))
          return ce;
      return -1;
    }
    function Er(U, k, R) {
      return k === k ? u0(U, k, R) : Pa(U, zd, R);
    }
    function KV(U, k, R, I) {
      for (var L = R - 1, ce = U.length; ++L < ce; )
        if (I(U[L], k))
          return L;
      return -1;
    }
    function zd(U) {
      return U !== U;
    }
    function Gd(U, k) {
      var R = U == null ? 0 : U.length;
      return R ? ll(U, k) / R : Ba;
    }
    function il(U) {
      return function(k) {
        return k == null ? o : k[U];
      };
    }
    function sl(U) {
      return function(k) {
        return U == null ? o : U[k];
      };
    }
    function Yd(U, k, R, I, L) {
      return L(U, function(ce, Je, me) {
        R = I ? (I = !1, ce) : k(R, ce, Je, me);
      }), R;
    }
    function e0(U, k) {
      var R = U.length;
      for (U.sort(k); R--; )
        U[R] = U[R].value;
      return U;
    }
    function ll(U, k) {
      for (var R, I = -1, L = U.length; ++I < L; ) {
        var ce = k(U[I]);
        ce !== o && (R = R === o ? ce : R + ce);
      }
      return R;
    }
    function cl(U, k) {
      for (var R = -1, I = Array(U); ++R < U; )
        I[R] = k(R);
      return I;
    }
    function t0(U, k) {
      return Ne(k, function(R) {
        return [R, U[R]];
      });
    }
    function Pd(U) {
      return U && U.slice(0, Xd(U) + 1).replace($s, "");
    }
    function dt(U) {
      return function(k) {
        return U(k);
      };
    }
    function ul(U, k) {
      return Ne(k, function(R) {
        return U[R];
      });
    }
    function So(U, k) {
      return U.has(k);
    }
    function Hd(U, k) {
      for (var R = -1, I = U.length; ++R < I && Er(k, U[R], 0) > -1; )
        ;
      return R;
    }
    function jd(U, k) {
      for (var R = U.length; R-- && Er(k, U[R], 0) > -1; )
        ;
      return R;
    }
    function n0(U, k) {
      for (var R = U.length, I = 0; R--; )
        U[R] === k && ++I;
      return I;
    }
    var r0 = sl(DV), o0 = sl(OV);
    function a0(U) {
      return "\\" + zV[U];
    }
    function i0(U, k) {
      return U == null ? o : U[k];
    }
    function Jr(U) {
      return xV.test(U);
    }
    function s0(U) {
      return BV.test(U);
    }
    function l0(U) {
      for (var k, R = []; !(k = U.next()).done; )
        R.push(k.value);
      return R;
    }
    function dl(U) {
      var k = -1, R = Array(U.size);
      return U.forEach(function(I, L) {
        R[++k] = [L, I];
      }), R;
    }
    function $d(U, k) {
      return function(R) {
        return U(k(R));
      };
    }
    function An(U, k) {
      for (var R = -1, I = U.length, L = 0, ce = []; ++R < I; ) {
        var Je = U[R];
        (Je === k || Je === g) && (U[R] = g, ce[L++] = R);
      }
      return ce;
    }
    function Ha(U) {
      var k = -1, R = Array(U.size);
      return U.forEach(function(I) {
        R[++k] = I;
      }), R;
    }
    function c0(U) {
      var k = -1, R = Array(U.size);
      return U.forEach(function(I) {
        R[++k] = [I, I];
      }), R;
    }
    function u0(U, k, R) {
      for (var I = R - 1, L = U.length; ++I < L; )
        if (U[I] === k)
          return I;
      return -1;
    }
    function d0(U, k, R) {
      for (var I = R + 1; I--; )
        if (U[I] === k)
          return I;
      return I;
    }
    function Ar(U) {
      return Jr(U) ? h0(U) : XV(U);
    }
    function Qt(U) {
      return Jr(U) ? p0(U) : LV(U);
    }
    function Xd(U) {
      for (var k = U.length; k-- && nV.test(U.charAt(k)); )
        ;
      return k;
    }
    var f0 = sl(QV);
    function h0(U) {
      for (var k = el.lastIndex = 0; el.test(U); )
        ++k;
      return k;
    }
    function p0(U) {
      return U.match(el) || [];
    }
    function m0(U) {
      return U.match(WV) || [];
    }
    var w0 = function U(k) {
      k = k == null ? Oe : Fr.defaults(Oe.Object(), k, Fr.pick(Oe, _V));
      var R = k.Array, I = k.Date, L = k.Error, ce = k.Function, Je = k.Math, me = k.Object, fl = k.RegExp, v0 = k.String, Mt = k.TypeError, ja = R.prototype, V0 = ce.prototype, Cr = me.prototype, $a = k["__core-js_shared__"], Xa = V0.toString, he = Cr.hasOwnProperty, g0 = 0, Ld = function() {
        var t = /[^.]+$/.exec($a && $a.keys && $a.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), La = Cr.toString, T0 = Xa.call(me), U0 = Oe._, y0 = fl(
        "^" + Xa.call(he).replace(js, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qa = Cd ? k.Buffer : o, Fn = k.Symbol, Ka = k.Uint8Array, qd = qa ? qa.allocUnsafe : o, ei = $d(me.getPrototypeOf, me), Kd = me.create, ef = Cr.propertyIsEnumerable, ti = ja.splice, tf = Fn ? Fn.isConcatSpreadable : o, Eo = Fn ? Fn.iterator : o, tr = Fn ? Fn.toStringTag : o, ni = function() {
        try {
          var t = ir(me, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), N0 = k.clearTimeout !== Oe.clearTimeout && k.clearTimeout, R0 = I && I.now !== Oe.Date.now && I.now, k0 = k.setTimeout !== Oe.setTimeout && k.setTimeout, ri = Je.ceil, oi = Je.floor, hl = me.getOwnPropertySymbols, M0 = qa ? qa.isBuffer : o, nf = k.isFinite, b0 = ja.join, Z0 = $d(me.keys, me), Ae = Je.max, Pe = Je.min, S0 = I.now, E0 = k.parseInt, rf = Je.random, J0 = ja.reverse, pl = ir(k, "DataView"), Jo = ir(k, "Map"), ml = ir(k, "Promise"), Wr = ir(k, "Set"), Ao = ir(k, "WeakMap"), Fo = ir(me, "create"), ai = Ao && new Ao(), xr = {}, A0 = sr(pl), F0 = sr(Jo), C0 = sr(ml), W0 = sr(Wr), x0 = sr(Ao), ii = Fn ? Fn.prototype : o, Co = ii ? ii.valueOf : o, of = ii ? ii.toString : o;
      function h(t) {
        if (ke(t) && !q(t) && !(t instanceof ae)) {
          if (t instanceof bt)
            return t;
          if (he.call(t, "__wrapped__"))
            return ih(t);
        }
        return new bt(t);
      }
      var Br = function() {
        function t() {
        }
        return function(n) {
          if (!Re(n))
            return {};
          if (Kd)
            return Kd(n);
          t.prototype = n;
          var a = new t();
          return t.prototype = o, a;
        };
      }();
      function si() {
      }
      function bt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: X1,
        evaluate: L1,
        interpolate: hd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = si.prototype, h.prototype.constructor = h, bt.prototype = Br(si.prototype), bt.prototype.constructor = bt;
      function ae(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = tn, this.__views__ = [];
      }
      function B0() {
        var t = new ae(this.__wrapped__);
        return t.__actions__ = tt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = tt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = tt(this.__views__), t;
      }
      function _0() {
        if (this.__filtered__) {
          var t = new ae(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function I0() {
        var t = this.__wrapped__.value(), n = this.__dir__, a = q(t), l = n < 0, u = a ? t.length : 0, p = Lg(0, u, this.__views__), w = p.start, v = p.end, y = v - w, M = l ? v : w - 1, b = this.__iteratees__, J = b.length, B = 0, D = Pe(y, this.__takeCount__);
        if (!a || !l && u == y && D == y)
          return Sf(t, this.__actions__);
        var Y = [];
        e:
          for (; y-- && B < D; ) {
            M += n;
            for (var te = -1, P = t[M]; ++te < J; ) {
              var oe = b[te], ie = oe.iteratee, pt = oe.type, Ke = ie(P);
              if (pt == de)
                P = Ke;
              else if (!Ke) {
                if (pt == ve)
                  continue e;
                break e;
              }
            }
            Y[B++] = P;
          }
        return Y;
      }
      ae.prototype = Br(si.prototype), ae.prototype.constructor = ae;
      function nr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function D0() {
        this.__data__ = Fo ? Fo(null) : {}, this.size = 0;
      }
      function O0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function Q0(t) {
        var n = this.__data__;
        if (Fo) {
          var a = n[t];
          return a === m ? o : a;
        }
        return he.call(n, t) ? n[t] : o;
      }
      function z0(t) {
        var n = this.__data__;
        return Fo ? n[t] !== o : he.call(n, t);
      }
      function G0(t, n) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Fo && n === o ? m : n, this;
      }
      nr.prototype.clear = D0, nr.prototype.delete = O0, nr.prototype.get = Q0, nr.prototype.has = z0, nr.prototype.set = G0;
      function pn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Y0() {
        this.__data__ = [], this.size = 0;
      }
      function P0(t) {
        var n = this.__data__, a = li(n, t);
        if (a < 0)
          return !1;
        var l = n.length - 1;
        return a == l ? n.pop() : ti.call(n, a, 1), --this.size, !0;
      }
      function H0(t) {
        var n = this.__data__, a = li(n, t);
        return a < 0 ? o : n[a][1];
      }
      function j0(t) {
        return li(this.__data__, t) > -1;
      }
      function $0(t, n) {
        var a = this.__data__, l = li(a, t);
        return l < 0 ? (++this.size, a.push([t, n])) : a[l][1] = n, this;
      }
      pn.prototype.clear = Y0, pn.prototype.delete = P0, pn.prototype.get = H0, pn.prototype.has = j0, pn.prototype.set = $0;
      function mn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function X0() {
        this.size = 0, this.__data__ = {
          hash: new nr(),
          map: new (Jo || pn)(),
          string: new nr()
        };
      }
      function L0(t) {
        var n = Ti(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function q0(t) {
        return Ti(this, t).get(t);
      }
      function K0(t) {
        return Ti(this, t).has(t);
      }
      function eg(t, n) {
        var a = Ti(this, t), l = a.size;
        return a.set(t, n), this.size += a.size == l ? 0 : 1, this;
      }
      mn.prototype.clear = X0, mn.prototype.delete = L0, mn.prototype.get = q0, mn.prototype.has = K0, mn.prototype.set = eg;
      function rr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new mn(); ++n < a; )
          this.add(t[n]);
      }
      function tg(t) {
        return this.__data__.set(t, m), this;
      }
      function ng(t) {
        return this.__data__.has(t);
      }
      rr.prototype.add = rr.prototype.push = tg, rr.prototype.has = ng;
      function zt(t) {
        var n = this.__data__ = new pn(t);
        this.size = n.size;
      }
      function rg() {
        this.__data__ = new pn(), this.size = 0;
      }
      function og(t) {
        var n = this.__data__, a = n.delete(t);
        return this.size = n.size, a;
      }
      function ag(t) {
        return this.__data__.get(t);
      }
      function ig(t) {
        return this.__data__.has(t);
      }
      function sg(t, n) {
        var a = this.__data__;
        if (a instanceof pn) {
          var l = a.__data__;
          if (!Jo || l.length < s - 1)
            return l.push([t, n]), this.size = ++a.size, this;
          a = this.__data__ = new mn(l);
        }
        return a.set(t, n), this.size = a.size, this;
      }
      zt.prototype.clear = rg, zt.prototype.delete = og, zt.prototype.get = ag, zt.prototype.has = ig, zt.prototype.set = sg;
      function af(t, n) {
        var a = q(t), l = !a && lr(t), u = !a && !l && _n(t), p = !a && !l && !u && Or(t), w = a || l || u || p, v = w ? cl(t.length, v0) : [], y = v.length;
        for (var M in t)
          (n || he.call(t, M)) && !(w && (M == "length" || u && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || gn(M, y))) && v.push(M);
        return v;
      }
      function sf(t) {
        var n = t.length;
        return n ? t[Ml(0, n - 1)] : o;
      }
      function lg(t, n) {
        return Ui(tt(t), or(n, 0, t.length));
      }
      function cg(t) {
        return Ui(tt(t));
      }
      function wl(t, n, a) {
        (a !== o && !Gt(t[n], a) || a === o && !(n in t)) && wn(t, n, a);
      }
      function Wo(t, n, a) {
        var l = t[n];
        (!(he.call(t, n) && Gt(l, a)) || a === o && !(n in t)) && wn(t, n, a);
      }
      function li(t, n) {
        for (var a = t.length; a--; )
          if (Gt(t[a][0], n))
            return a;
        return -1;
      }
      function ug(t, n, a, l) {
        return Cn(t, function(u, p, w) {
          n(l, u, a(u), w);
        }), l;
      }
      function lf(t, n) {
        return t && rn(n, We(n), t);
      }
      function dg(t, n) {
        return t && rn(n, rt(n), t);
      }
      function wn(t, n, a) {
        n == "__proto__" && ni ? ni(t, n, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[n] = a;
      }
      function vl(t, n) {
        for (var a = -1, l = n.length, u = R(l), p = t == null; ++a < l; )
          u[a] = p ? o : Ll(t, n[a]);
        return u;
      }
      function or(t, n, a) {
        return t === t && (a !== o && (t = t <= a ? t : a), n !== o && (t = t >= n ? t : n)), t;
      }
      function Zt(t, n, a, l, u, p) {
        var w, v = n & T, y = n & N, M = n & F;
        if (a && (w = u ? a(t, l, u, p) : a(t)), w !== o)
          return w;
        if (!Re(t))
          return t;
        var b = q(t);
        if (b) {
          if (w = Kg(t), !v)
            return tt(t, w);
        } else {
          var J = He(t), B = J == Da || J == cd;
          if (_n(t))
            return Af(t, v);
          if (J == hn || J == br || B && !u) {
            if (w = y || B ? {} : Lf(t), !v)
              return y ? Qg(t, dg(w, t)) : Og(t, lf(w, t));
          } else {
            if (!Ve[J])
              return u ? t : {};
            w = eT(t, J, v);
          }
        }
        p || (p = new zt());
        var D = p.get(t);
        if (D)
          return D;
        p.set(t, w), Mh(t) ? t.forEach(function(P) {
          w.add(Zt(P, n, a, P, t, p));
        }) : Rh(t) && t.forEach(function(P, oe) {
          w.set(oe, Zt(P, n, a, oe, t, p));
        });
        var Y = M ? y ? Bl : xl : y ? rt : We, te = b ? o : Y(t);
        return kt(te || t, function(P, oe) {
          te && (oe = P, P = t[oe]), Wo(w, oe, Zt(P, n, a, oe, t, p));
        }), w;
      }
      function fg(t) {
        var n = We(t);
        return function(a) {
          return cf(a, t, n);
        };
      }
      function cf(t, n, a) {
        var l = a.length;
        if (t == null)
          return !l;
        for (t = me(t); l--; ) {
          var u = a[l], p = n[u], w = t[u];
          if (w === o && !(u in t) || !p(w))
            return !1;
        }
        return !0;
      }
      function uf(t, n, a) {
        if (typeof t != "function")
          throw new Mt(d);
        return Qo(function() {
          t.apply(o, a);
        }, n);
      }
      function xo(t, n, a, l) {
        var u = -1, p = Ya, w = !0, v = t.length, y = [], M = n.length;
        if (!v)
          return y;
        a && (n = Ne(n, dt(a))), l ? (p = rl, w = !1) : n.length >= s && (p = So, w = !1, n = new rr(n));
        e:
          for (; ++u < v; ) {
            var b = t[u], J = a == null ? b : a(b);
            if (b = l || b !== 0 ? b : 0, w && J === J) {
              for (var B = M; B--; )
                if (n[B] === J)
                  continue e;
              y.push(b);
            } else
              p(n, J, l) || y.push(b);
          }
        return y;
      }
      var Cn = Bf(nn), df = Bf(gl, !0);
      function hg(t, n) {
        var a = !0;
        return Cn(t, function(l, u, p) {
          return a = !!n(l, u, p), a;
        }), a;
      }
      function ci(t, n, a) {
        for (var l = -1, u = t.length; ++l < u; ) {
          var p = t[l], w = n(p);
          if (w != null && (v === o ? w === w && !ht(w) : a(w, v)))
            var v = w, y = p;
        }
        return y;
      }
      function pg(t, n, a, l) {
        var u = t.length;
        for (a = ee(a), a < 0 && (a = -a > u ? 0 : u + a), l = l === o || l > u ? u : ee(l), l < 0 && (l += u), l = a > l ? 0 : Zh(l); a < l; )
          t[a++] = n;
        return t;
      }
      function ff(t, n) {
        var a = [];
        return Cn(t, function(l, u, p) {
          n(l, u, p) && a.push(l);
        }), a;
      }
      function Qe(t, n, a, l, u) {
        var p = -1, w = t.length;
        for (a || (a = nT), u || (u = []); ++p < w; ) {
          var v = t[p];
          n > 0 && a(v) ? n > 1 ? Qe(v, n - 1, a, l, u) : Jn(u, v) : l || (u[u.length] = v);
        }
        return u;
      }
      var Vl = _f(), hf = _f(!0);
      function nn(t, n) {
        return t && Vl(t, n, We);
      }
      function gl(t, n) {
        return t && hf(t, n, We);
      }
      function ui(t, n) {
        return En(n, function(a) {
          return Tn(t[a]);
        });
      }
      function ar(t, n) {
        n = xn(n, t);
        for (var a = 0, l = n.length; t != null && a < l; )
          t = t[on(n[a++])];
        return a && a == l ? t : o;
      }
      function pf(t, n, a) {
        var l = n(t);
        return q(t) ? l : Jn(l, a(t));
      }
      function Le(t) {
        return t == null ? t === o ? z1 : O1 : tr && tr in me(t) ? Xg(t) : cT(t);
      }
      function Tl(t, n) {
        return t > n;
      }
      function mg(t, n) {
        return t != null && he.call(t, n);
      }
      function wg(t, n) {
        return t != null && n in me(t);
      }
      function vg(t, n, a) {
        return t >= Pe(n, a) && t < Ae(n, a);
      }
      function Ul(t, n, a) {
        for (var l = a ? rl : Ya, u = t[0].length, p = t.length, w = p, v = R(p), y = 1 / 0, M = []; w--; ) {
          var b = t[w];
          w && n && (b = Ne(b, dt(n))), y = Pe(b.length, y), v[w] = !a && (n || u >= 120 && b.length >= 120) ? new rr(w && b) : o;
        }
        b = t[0];
        var J = -1, B = v[0];
        e:
          for (; ++J < u && M.length < y; ) {
            var D = b[J], Y = n ? n(D) : D;
            if (D = a || D !== 0 ? D : 0, !(B ? So(B, Y) : l(M, Y, a))) {
              for (w = p; --w; ) {
                var te = v[w];
                if (!(te ? So(te, Y) : l(t[w], Y, a)))
                  continue e;
              }
              B && B.push(Y), M.push(D);
            }
          }
        return M;
      }
      function Vg(t, n, a, l) {
        return nn(t, function(u, p, w) {
          n(l, a(u), p, w);
        }), l;
      }
      function Bo(t, n, a) {
        n = xn(n, t), t = th(t, n);
        var l = t == null ? t : t[on(Et(n))];
        return l == null ? o : ut(l, t, a);
      }
      function mf(t) {
        return ke(t) && Le(t) == br;
      }
      function gg(t) {
        return ke(t) && Le(t) == Zo;
      }
      function Tg(t) {
        return ke(t) && Le(t) == No;
      }
      function _o(t, n, a, l, u) {
        return t === n ? !0 : t == null || n == null || !ke(t) && !ke(n) ? t !== t && n !== n : Ug(t, n, a, l, _o, u);
      }
      function Ug(t, n, a, l, u, p) {
        var w = q(t), v = q(n), y = w ? _a : He(t), M = v ? _a : He(n);
        y = y == br ? hn : y, M = M == br ? hn : M;
        var b = y == hn, J = M == hn, B = y == M;
        if (B && _n(t)) {
          if (!_n(n))
            return !1;
          w = !0, b = !1;
        }
        if (B && !b)
          return p || (p = new zt()), w || Or(t) ? jf(t, n, a, l, u, p) : jg(t, n, y, a, l, u, p);
        if (!(a & E)) {
          var D = b && he.call(t, "__wrapped__"), Y = J && he.call(n, "__wrapped__");
          if (D || Y) {
            var te = D ? t.value() : t, P = Y ? n.value() : n;
            return p || (p = new zt()), u(te, P, a, l, p);
          }
        }
        return B ? (p || (p = new zt()), $g(t, n, a, l, u, p)) : !1;
      }
      function yg(t) {
        return ke(t) && He(t) == Dt;
      }
      function yl(t, n, a, l) {
        var u = a.length, p = u, w = !l;
        if (t == null)
          return !p;
        for (t = me(t); u--; ) {
          var v = a[u];
          if (w && v[2] ? v[1] !== t[v[0]] : !(v[0] in t))
            return !1;
        }
        for (; ++u < p; ) {
          v = a[u];
          var y = v[0], M = t[y], b = v[1];
          if (w && v[2]) {
            if (M === o && !(y in t))
              return !1;
          } else {
            var J = new zt();
            if (l)
              var B = l(M, b, y, t, n, J);
            if (!(B === o ? _o(b, M, E | Z, l, J) : B))
              return !1;
          }
        }
        return !0;
      }
      function wf(t) {
        if (!Re(t) || oT(t))
          return !1;
        var n = Tn(t) ? y0 : fV;
        return n.test(sr(t));
      }
      function Ng(t) {
        return ke(t) && Le(t) == ko;
      }
      function Rg(t) {
        return ke(t) && He(t) == Ot;
      }
      function kg(t) {
        return ke(t) && bi(t.length) && !!Ue[Le(t)];
      }
      function vf(t) {
        return typeof t == "function" ? t : t == null ? ot : typeof t == "object" ? q(t) ? Tf(t[0], t[1]) : gf(t) : Ih(t);
      }
      function Nl(t) {
        if (!Oo(t))
          return Z0(t);
        var n = [];
        for (var a in me(t))
          he.call(t, a) && a != "constructor" && n.push(a);
        return n;
      }
      function Mg(t) {
        if (!Re(t))
          return lT(t);
        var n = Oo(t), a = [];
        for (var l in t)
          l == "constructor" && (n || !he.call(t, l)) || a.push(l);
        return a;
      }
      function Rl(t, n) {
        return t < n;
      }
      function Vf(t, n) {
        var a = -1, l = nt(t) ? R(t.length) : [];
        return Cn(t, function(u, p, w) {
          l[++a] = n(u, p, w);
        }), l;
      }
      function gf(t) {
        var n = Il(t);
        return n.length == 1 && n[0][2] ? Kf(n[0][0], n[0][1]) : function(a) {
          return a === t || yl(a, t, n);
        };
      }
      function Tf(t, n) {
        return Ol(t) && qf(n) ? Kf(on(t), n) : function(a) {
          var l = Ll(a, t);
          return l === o && l === n ? ql(a, t) : _o(n, l, E | Z);
        };
      }
      function di(t, n, a, l, u) {
        t !== n && Vl(n, function(p, w) {
          if (u || (u = new zt()), Re(p))
            bg(t, n, w, a, di, l, u);
          else {
            var v = l ? l(zl(t, w), p, w + "", t, n, u) : o;
            v === o && (v = p), wl(t, w, v);
          }
        }, rt);
      }
      function bg(t, n, a, l, u, p, w) {
        var v = zl(t, a), y = zl(n, a), M = w.get(y);
        if (M) {
          wl(t, a, M);
          return;
        }
        var b = p ? p(v, y, a + "", t, n, w) : o, J = b === o;
        if (J) {
          var B = q(y), D = !B && _n(y), Y = !B && !D && Or(y);
          b = y, B || D || Y ? q(v) ? b = v : Me(v) ? b = tt(v) : D ? (J = !1, b = Af(y, !0)) : Y ? (J = !1, b = Ff(y, !0)) : b = [] : zo(y) || lr(y) ? (b = v, lr(v) ? b = Sh(v) : (!Re(v) || Tn(v)) && (b = Lf(y))) : J = !1;
        }
        J && (w.set(y, b), u(b, y, l, p, w), w.delete(y)), wl(t, a, b);
      }
      function Uf(t, n) {
        var a = t.length;
        if (!!a)
          return n += n < 0 ? a : 0, gn(n, a) ? t[n] : o;
      }
      function yf(t, n, a) {
        n.length ? n = Ne(n, function(p) {
          return q(p) ? function(w) {
            return ar(w, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [ot];
        var l = -1;
        n = Ne(n, dt(G()));
        var u = Vf(t, function(p, w, v) {
          var y = Ne(n, function(M) {
            return M(p);
          });
          return { criteria: y, index: ++l, value: p };
        });
        return e0(u, function(p, w) {
          return Dg(p, w, a);
        });
      }
      function Zg(t, n) {
        return Nf(t, n, function(a, l) {
          return ql(t, l);
        });
      }
      function Nf(t, n, a) {
        for (var l = -1, u = n.length, p = {}; ++l < u; ) {
          var w = n[l], v = ar(t, w);
          a(v, w) && Io(p, xn(w, t), v);
        }
        return p;
      }
      function Sg(t) {
        return function(n) {
          return ar(n, t);
        };
      }
      function kl(t, n, a, l) {
        var u = l ? KV : Er, p = -1, w = n.length, v = t;
        for (t === n && (n = tt(n)), a && (v = Ne(t, dt(a))); ++p < w; )
          for (var y = 0, M = n[p], b = a ? a(M) : M; (y = u(v, b, y, l)) > -1; )
            v !== t && ti.call(v, y, 1), ti.call(t, y, 1);
        return t;
      }
      function Rf(t, n) {
        for (var a = t ? n.length : 0, l = a - 1; a--; ) {
          var u = n[a];
          if (a == l || u !== p) {
            var p = u;
            gn(u) ? ti.call(t, u, 1) : Sl(t, u);
          }
        }
        return t;
      }
      function Ml(t, n) {
        return t + oi(rf() * (n - t + 1));
      }
      function Eg(t, n, a, l) {
        for (var u = -1, p = Ae(ri((n - t) / (a || 1)), 0), w = R(p); p--; )
          w[l ? p : ++u] = t, t += a;
        return w;
      }
      function bl(t, n) {
        var a = "";
        if (!t || n < 1 || n > Xe)
          return a;
        do
          n % 2 && (a += t), n = oi(n / 2), n && (t += t);
        while (n);
        return a;
      }
      function re(t, n) {
        return Gl(eh(t, n, ot), t + "");
      }
      function Jg(t) {
        return sf(Qr(t));
      }
      function Ag(t, n) {
        var a = Qr(t);
        return Ui(a, or(n, 0, a.length));
      }
      function Io(t, n, a, l) {
        if (!Re(t))
          return t;
        n = xn(n, t);
        for (var u = -1, p = n.length, w = p - 1, v = t; v != null && ++u < p; ) {
          var y = on(n[u]), M = a;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return t;
          if (u != w) {
            var b = v[y];
            M = l ? l(b, y, v) : o, M === o && (M = Re(b) ? b : gn(n[u + 1]) ? [] : {});
          }
          Wo(v, y, M), v = v[y];
        }
        return t;
      }
      var kf = ai ? function(t, n) {
        return ai.set(t, n), t;
      } : ot, Fg = ni ? function(t, n) {
        return ni(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ec(n),
          writable: !0
        });
      } : ot;
      function Cg(t) {
        return Ui(Qr(t));
      }
      function St(t, n, a) {
        var l = -1, u = t.length;
        n < 0 && (n = -n > u ? 0 : u + n), a = a > u ? u : a, a < 0 && (a += u), u = n > a ? 0 : a - n >>> 0, n >>>= 0;
        for (var p = R(u); ++l < u; )
          p[l] = t[l + n];
        return p;
      }
      function Wg(t, n) {
        var a;
        return Cn(t, function(l, u, p) {
          return a = n(l, u, p), !a;
        }), !!a;
      }
      function fi(t, n, a) {
        var l = 0, u = t == null ? l : t.length;
        if (typeof n == "number" && n === n && u <= B1) {
          for (; l < u; ) {
            var p = l + u >>> 1, w = t[p];
            w !== null && !ht(w) && (a ? w <= n : w < n) ? l = p + 1 : u = p;
          }
          return u;
        }
        return Zl(t, n, ot, a);
      }
      function Zl(t, n, a, l) {
        var u = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = a(n);
        for (var w = n !== n, v = n === null, y = ht(n), M = n === o; u < p; ) {
          var b = oi((u + p) / 2), J = a(t[b]), B = J !== o, D = J === null, Y = J === J, te = ht(J);
          if (w)
            var P = l || Y;
          else
            M ? P = Y && (l || B) : v ? P = Y && B && (l || !D) : y ? P = Y && B && !D && (l || !te) : D || te ? P = !1 : P = l ? J <= n : J < n;
          P ? u = b + 1 : p = b;
        }
        return Pe(p, x1);
      }
      function Mf(t, n) {
        for (var a = -1, l = t.length, u = 0, p = []; ++a < l; ) {
          var w = t[a], v = n ? n(w) : w;
          if (!a || !Gt(v, y)) {
            var y = v;
            p[u++] = w === 0 ? 0 : w;
          }
        }
        return p;
      }
      function bf(t) {
        return typeof t == "number" ? t : ht(t) ? Ba : +t;
      }
      function ft(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return Ne(t, ft) + "";
        if (ht(t))
          return of ? of.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -De ? "-0" : n;
      }
      function Wn(t, n, a) {
        var l = -1, u = Ya, p = t.length, w = !0, v = [], y = v;
        if (a)
          w = !1, u = rl;
        else if (p >= s) {
          var M = n ? null : Pg(t);
          if (M)
            return Ha(M);
          w = !1, u = So, y = new rr();
        } else
          y = n ? [] : v;
        e:
          for (; ++l < p; ) {
            var b = t[l], J = n ? n(b) : b;
            if (b = a || b !== 0 ? b : 0, w && J === J) {
              for (var B = y.length; B--; )
                if (y[B] === J)
                  continue e;
              n && y.push(J), v.push(b);
            } else
              u(y, J, a) || (y !== v && y.push(J), v.push(b));
          }
        return v;
      }
      function Sl(t, n) {
        return n = xn(n, t), t = th(t, n), t == null || delete t[on(Et(n))];
      }
      function Zf(t, n, a, l) {
        return Io(t, n, a(ar(t, n)), l);
      }
      function hi(t, n, a, l) {
        for (var u = t.length, p = l ? u : -1; (l ? p-- : ++p < u) && n(t[p], p, t); )
          ;
        return a ? St(t, l ? 0 : p, l ? p + 1 : u) : St(t, l ? p + 1 : 0, l ? u : p);
      }
      function Sf(t, n) {
        var a = t;
        return a instanceof ae && (a = a.value()), ol(n, function(l, u) {
          return u.func.apply(u.thisArg, Jn([l], u.args));
        }, a);
      }
      function El(t, n, a) {
        var l = t.length;
        if (l < 2)
          return l ? Wn(t[0]) : [];
        for (var u = -1, p = R(l); ++u < l; )
          for (var w = t[u], v = -1; ++v < l; )
            v != u && (p[u] = xo(p[u] || w, t[v], n, a));
        return Wn(Qe(p, 1), n, a);
      }
      function Ef(t, n, a) {
        for (var l = -1, u = t.length, p = n.length, w = {}; ++l < u; ) {
          var v = l < p ? n[l] : o;
          a(w, t[l], v);
        }
        return w;
      }
      function Jl(t) {
        return Me(t) ? t : [];
      }
      function Al(t) {
        return typeof t == "function" ? t : ot;
      }
      function xn(t, n) {
        return q(t) ? t : Ol(t, n) ? [t] : ah(fe(t));
      }
      var xg = re;
      function Bn(t, n, a) {
        var l = t.length;
        return a = a === o ? l : a, !n && a >= l ? t : St(t, n, a);
      }
      var Jf = N0 || function(t) {
        return Oe.clearTimeout(t);
      };
      function Af(t, n) {
        if (n)
          return t.slice();
        var a = t.length, l = qd ? qd(a) : new t.constructor(a);
        return t.copy(l), l;
      }
      function Fl(t) {
        var n = new t.constructor(t.byteLength);
        return new Ka(n).set(new Ka(t)), n;
      }
      function Bg(t, n) {
        var a = n ? Fl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function _g(t) {
        var n = new t.constructor(t.source, pd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Ig(t) {
        return Co ? me(Co.call(t)) : {};
      }
      function Ff(t, n) {
        var a = n ? Fl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function Cf(t, n) {
        if (t !== n) {
          var a = t !== o, l = t === null, u = t === t, p = ht(t), w = n !== o, v = n === null, y = n === n, M = ht(n);
          if (!v && !M && !p && t > n || p && w && y && !v && !M || l && w && y || !a && y || !u)
            return 1;
          if (!l && !p && !M && t < n || M && a && u && !l && !p || v && a && u || !w && u || !y)
            return -1;
        }
        return 0;
      }
      function Dg(t, n, a) {
        for (var l = -1, u = t.criteria, p = n.criteria, w = u.length, v = a.length; ++l < w; ) {
          var y = Cf(u[l], p[l]);
          if (y) {
            if (l >= v)
              return y;
            var M = a[l];
            return y * (M == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Wf(t, n, a, l) {
        for (var u = -1, p = t.length, w = a.length, v = -1, y = n.length, M = Ae(p - w, 0), b = R(y + M), J = !l; ++v < y; )
          b[v] = n[v];
        for (; ++u < w; )
          (J || u < p) && (b[a[u]] = t[u]);
        for (; M--; )
          b[v++] = t[u++];
        return b;
      }
      function xf(t, n, a, l) {
        for (var u = -1, p = t.length, w = -1, v = a.length, y = -1, M = n.length, b = Ae(p - v, 0), J = R(b + M), B = !l; ++u < b; )
          J[u] = t[u];
        for (var D = u; ++y < M; )
          J[D + y] = n[y];
        for (; ++w < v; )
          (B || u < p) && (J[D + a[w]] = t[u++]);
        return J;
      }
      function tt(t, n) {
        var a = -1, l = t.length;
        for (n || (n = R(l)); ++a < l; )
          n[a] = t[a];
        return n;
      }
      function rn(t, n, a, l) {
        var u = !a;
        a || (a = {});
        for (var p = -1, w = n.length; ++p < w; ) {
          var v = n[p], y = l ? l(a[v], t[v], v, a, t) : o;
          y === o && (y = t[v]), u ? wn(a, v, y) : Wo(a, v, y);
        }
        return a;
      }
      function Og(t, n) {
        return rn(t, Dl(t), n);
      }
      function Qg(t, n) {
        return rn(t, $f(t), n);
      }
      function pi(t, n) {
        return function(a, l) {
          var u = q(a) ? HV : ug, p = n ? n() : {};
          return u(a, t, G(l, 2), p);
        };
      }
      function _r(t) {
        return re(function(n, a) {
          var l = -1, u = a.length, p = u > 1 ? a[u - 1] : o, w = u > 2 ? a[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (u--, p) : o, w && qe(a[0], a[1], w) && (p = u < 3 ? o : p, u = 1), n = me(n); ++l < u; ) {
            var v = a[l];
            v && t(n, v, l, p);
          }
          return n;
        });
      }
      function Bf(t, n) {
        return function(a, l) {
          if (a == null)
            return a;
          if (!nt(a))
            return t(a, l);
          for (var u = a.length, p = n ? u : -1, w = me(a); (n ? p-- : ++p < u) && l(w[p], p, w) !== !1; )
            ;
          return a;
        };
      }
      function _f(t) {
        return function(n, a, l) {
          for (var u = -1, p = me(n), w = l(n), v = w.length; v--; ) {
            var y = w[t ? v : ++u];
            if (a(p[y], y, p) === !1)
              break;
          }
          return n;
        };
      }
      function zg(t, n, a) {
        var l = n & C, u = Do(t);
        function p() {
          var w = this && this !== Oe && this instanceof p ? u : t;
          return w.apply(l ? a : this, arguments);
        }
        return p;
      }
      function If(t) {
        return function(n) {
          n = fe(n);
          var a = Jr(n) ? Qt(n) : o, l = a ? a[0] : n.charAt(0), u = a ? Bn(a, 1).join("") : n.slice(1);
          return l[t]() + u;
        };
      }
      function Ir(t) {
        return function(n) {
          return ol(Bh(xh(n).replace(FV, "")), t, "");
        };
      }
      function Do(t) {
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
          var a = Br(t.prototype), l = t.apply(a, n);
          return Re(l) ? l : a;
        };
      }
      function Gg(t, n, a) {
        var l = Do(t);
        function u() {
          for (var p = arguments.length, w = R(p), v = p, y = Dr(u); v--; )
            w[v] = arguments[v];
          var M = p < 3 && w[0] !== y && w[p - 1] !== y ? [] : An(w, y);
          if (p -= M.length, p < a)
            return Gf(
              t,
              n,
              mi,
              u.placeholder,
              o,
              w,
              M,
              o,
              o,
              a - p
            );
          var b = this && this !== Oe && this instanceof u ? l : t;
          return ut(b, this, w);
        }
        return u;
      }
      function Df(t) {
        return function(n, a, l) {
          var u = me(n);
          if (!nt(n)) {
            var p = G(a, 3);
            n = We(n), a = function(v) {
              return p(u[v], v, u);
            };
          }
          var w = t(n, a, l);
          return w > -1 ? u[p ? n[w] : w] : o;
        };
      }
      function Of(t) {
        return Vn(function(n) {
          var a = n.length, l = a, u = bt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Mt(d);
            if (u && !w && gi(p) == "wrapper")
              var w = new bt([], !0);
          }
          for (l = w ? l : a; ++l < a; ) {
            p = n[l];
            var v = gi(p), y = v == "wrapper" ? _l(p) : o;
            y && Ql(y[0]) && y[1] == (O | x | S | _) && !y[4].length && y[9] == 1 ? w = w[gi(y[0])].apply(w, y[3]) : w = p.length == 1 && Ql(p) ? w[v]() : w.thru(p);
          }
          return function() {
            var M = arguments, b = M[0];
            if (w && M.length == 1 && q(b))
              return w.plant(b).value();
            for (var J = 0, B = a ? n[J].apply(this, M) : b; ++J < a; )
              B = n[J].call(this, B);
            return B;
          };
        });
      }
      function mi(t, n, a, l, u, p, w, v, y, M) {
        var b = n & O, J = n & C, B = n & A, D = n & (x | X), Y = n & H, te = B ? o : Do(t);
        function P() {
          for (var oe = arguments.length, ie = R(oe), pt = oe; pt--; )
            ie[pt] = arguments[pt];
          if (D)
            var Ke = Dr(P), mt = n0(ie, Ke);
          if (l && (ie = Wf(ie, l, u, D)), p && (ie = xf(ie, p, w, D)), oe -= mt, D && oe < M) {
            var be = An(ie, Ke);
            return Gf(
              t,
              n,
              mi,
              P.placeholder,
              a,
              ie,
              be,
              v,
              y,
              M - oe
            );
          }
          var Yt = J ? a : this, yn = B ? Yt[t] : t;
          return oe = ie.length, v ? ie = uT(ie, v) : Y && oe > 1 && ie.reverse(), b && y < oe && (ie.length = y), this && this !== Oe && this instanceof P && (yn = te || Do(yn)), yn.apply(Yt, ie);
        }
        return P;
      }
      function Qf(t, n) {
        return function(a, l) {
          return Vg(a, t, n(l), {});
        };
      }
      function wi(t, n) {
        return function(a, l) {
          var u;
          if (a === o && l === o)
            return n;
          if (a !== o && (u = a), l !== o) {
            if (u === o)
              return l;
            typeof a == "string" || typeof l == "string" ? (a = ft(a), l = ft(l)) : (a = bf(a), l = bf(l)), u = t(a, l);
          }
          return u;
        };
      }
      function Cl(t) {
        return Vn(function(n) {
          return n = Ne(n, dt(G())), re(function(a) {
            var l = this;
            return t(n, function(u) {
              return ut(u, l, a);
            });
          });
        });
      }
      function vi(t, n) {
        n = n === o ? " " : ft(n);
        var a = n.length;
        if (a < 2)
          return a ? bl(n, t) : n;
        var l = bl(n, ri(t / Ar(n)));
        return Jr(n) ? Bn(Qt(l), 0, t).join("") : l.slice(0, t);
      }
      function Yg(t, n, a, l) {
        var u = n & C, p = Do(t);
        function w() {
          for (var v = -1, y = arguments.length, M = -1, b = l.length, J = R(b + y), B = this && this !== Oe && this instanceof w ? p : t; ++M < b; )
            J[M] = l[M];
          for (; y--; )
            J[M++] = arguments[++v];
          return ut(B, u ? a : this, J);
        }
        return w;
      }
      function zf(t) {
        return function(n, a, l) {
          return l && typeof l != "number" && qe(n, a, l) && (a = l = o), n = Un(n), a === o ? (a = n, n = 0) : a = Un(a), l = l === o ? n < a ? 1 : -1 : Un(l), Eg(n, a, l, t);
        };
      }
      function Vi(t) {
        return function(n, a) {
          return typeof n == "string" && typeof a == "string" || (n = Jt(n), a = Jt(a)), t(n, a);
        };
      }
      function Gf(t, n, a, l, u, p, w, v, y, M) {
        var b = n & x, J = b ? w : o, B = b ? o : w, D = b ? p : o, Y = b ? o : p;
        n |= b ? S : Q, n &= ~(b ? Q : S), n & W || (n &= ~(C | A));
        var te = [
          t,
          n,
          u,
          D,
          J,
          Y,
          B,
          v,
          y,
          M
        ], P = a.apply(o, te);
        return Ql(t) && nh(P, te), P.placeholder = l, rh(P, t, n);
      }
      function Wl(t) {
        var n = Je[t];
        return function(a, l) {
          if (a = Jt(a), l = l == null ? 0 : Pe(ee(l), 292), l && nf(a)) {
            var u = (fe(a) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + l));
            return u = (fe(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return n(a);
        };
      }
      var Pg = Wr && 1 / Ha(new Wr([, -0]))[1] == De ? function(t) {
        return new Wr(t);
      } : rc;
      function Yf(t) {
        return function(n) {
          var a = He(n);
          return a == Dt ? dl(n) : a == Ot ? c0(n) : t0(n, t(n));
        };
      }
      function vn(t, n, a, l, u, p, w, v) {
        var y = n & A;
        if (!y && typeof t != "function")
          throw new Mt(d);
        var M = l ? l.length : 0;
        if (M || (n &= ~(S | Q), l = u = o), w = w === o ? w : Ae(ee(w), 0), v = v === o ? v : ee(v), M -= u ? u.length : 0, n & Q) {
          var b = l, J = u;
          l = u = o;
        }
        var B = y ? o : _l(t), D = [
          t,
          n,
          a,
          l,
          u,
          b,
          J,
          p,
          w,
          v
        ];
        if (B && sT(D, B), t = D[0], n = D[1], a = D[2], l = D[3], u = D[4], v = D[9] = D[9] === o ? y ? 0 : t.length : Ae(D[9] - M, 0), !v && n & (x | X) && (n &= ~(x | X)), !n || n == C)
          var Y = zg(t, n, a);
        else
          n == x || n == X ? Y = Gg(t, n, v) : (n == S || n == (C | S)) && !u.length ? Y = Yg(t, n, a, l) : Y = mi.apply(o, D);
        var te = B ? kf : nh;
        return rh(te(Y, D), t, n);
      }
      function Pf(t, n, a, l) {
        return t === o || Gt(t, Cr[a]) && !he.call(l, a) ? n : t;
      }
      function Hf(t, n, a, l, u, p) {
        return Re(t) && Re(n) && (p.set(n, t), di(t, n, o, Hf, p), p.delete(n)), t;
      }
      function Hg(t) {
        return zo(t) ? o : t;
      }
      function jf(t, n, a, l, u, p) {
        var w = a & E, v = t.length, y = n.length;
        if (v != y && !(w && y > v))
          return !1;
        var M = p.get(t), b = p.get(n);
        if (M && b)
          return M == n && b == t;
        var J = -1, B = !0, D = a & Z ? new rr() : o;
        for (p.set(t, n), p.set(n, t); ++J < v; ) {
          var Y = t[J], te = n[J];
          if (l)
            var P = w ? l(te, Y, J, n, t, p) : l(Y, te, J, t, n, p);
          if (P !== o) {
            if (P)
              continue;
            B = !1;
            break;
          }
          if (D) {
            if (!al(n, function(oe, ie) {
              if (!So(D, ie) && (Y === oe || u(Y, oe, a, l, p)))
                return D.push(ie);
            })) {
              B = !1;
              break;
            }
          } else if (!(Y === te || u(Y, te, a, l, p))) {
            B = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), B;
      }
      function jg(t, n, a, l, u, p, w) {
        switch (a) {
          case Zr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Zo:
            return !(t.byteLength != n.byteLength || !p(new Ka(t), new Ka(n)));
          case yo:
          case No:
          case Ro:
            return Gt(+t, +n);
          case Ia:
            return t.name == n.name && t.message == n.message;
          case ko:
          case Mo:
            return t == n + "";
          case Dt:
            var v = dl;
          case Ot:
            var y = l & E;
            if (v || (v = Ha), t.size != n.size && !y)
              return !1;
            var M = w.get(t);
            if (M)
              return M == n;
            l |= Z, w.set(t, n);
            var b = jf(v(t), v(n), l, u, p, w);
            return w.delete(t), b;
          case Oa:
            if (Co)
              return Co.call(t) == Co.call(n);
        }
        return !1;
      }
      function $g(t, n, a, l, u, p) {
        var w = a & E, v = xl(t), y = v.length, M = xl(n), b = M.length;
        if (y != b && !w)
          return !1;
        for (var J = y; J--; ) {
          var B = v[J];
          if (!(w ? B in n : he.call(n, B)))
            return !1;
        }
        var D = p.get(t), Y = p.get(n);
        if (D && Y)
          return D == n && Y == t;
        var te = !0;
        p.set(t, n), p.set(n, t);
        for (var P = w; ++J < y; ) {
          B = v[J];
          var oe = t[B], ie = n[B];
          if (l)
            var pt = w ? l(ie, oe, B, n, t, p) : l(oe, ie, B, t, n, p);
          if (!(pt === o ? oe === ie || u(oe, ie, a, l, p) : pt)) {
            te = !1;
            break;
          }
          P || (P = B == "constructor");
        }
        if (te && !P) {
          var Ke = t.constructor, mt = n.constructor;
          Ke != mt && "constructor" in t && "constructor" in n && !(typeof Ke == "function" && Ke instanceof Ke && typeof mt == "function" && mt instanceof mt) && (te = !1);
        }
        return p.delete(t), p.delete(n), te;
      }
      function Vn(t) {
        return Gl(eh(t, o, ch), t + "");
      }
      function xl(t) {
        return pf(t, We, Dl);
      }
      function Bl(t) {
        return pf(t, rt, $f);
      }
      var _l = ai ? function(t) {
        return ai.get(t);
      } : rc;
      function gi(t) {
        for (var n = t.name + "", a = xr[n], l = he.call(xr, n) ? a.length : 0; l--; ) {
          var u = a[l], p = u.func;
          if (p == null || p == t)
            return u.name;
        }
        return n;
      }
      function Dr(t) {
        var n = he.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function G() {
        var t = h.iteratee || tc;
        return t = t === tc ? vf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ti(t, n) {
        var a = t.__data__;
        return rT(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
      }
      function Il(t) {
        for (var n = We(t), a = n.length; a--; ) {
          var l = n[a], u = t[l];
          n[a] = [l, u, qf(u)];
        }
        return n;
      }
      function ir(t, n) {
        var a = i0(t, n);
        return wf(a) ? a : o;
      }
      function Xg(t) {
        var n = he.call(t, tr), a = t[tr];
        try {
          t[tr] = o;
          var l = !0;
        } catch {
        }
        var u = La.call(t);
        return l && (n ? t[tr] = a : delete t[tr]), u;
      }
      var Dl = hl ? function(t) {
        return t == null ? [] : (t = me(t), En(hl(t), function(n) {
          return ef.call(t, n);
        }));
      } : oc, $f = hl ? function(t) {
        for (var n = []; t; )
          Jn(n, Dl(t)), t = ei(t);
        return n;
      } : oc, He = Le;
      (pl && He(new pl(new ArrayBuffer(1))) != Zr || Jo && He(new Jo()) != Dt || ml && He(ml.resolve()) != ud || Wr && He(new Wr()) != Ot || Ao && He(new Ao()) != bo) && (He = function(t) {
        var n = Le(t), a = n == hn ? t.constructor : o, l = a ? sr(a) : "";
        if (l)
          switch (l) {
            case A0:
              return Zr;
            case F0:
              return Dt;
            case C0:
              return ud;
            case W0:
              return Ot;
            case x0:
              return bo;
          }
        return n;
      });
      function Lg(t, n, a) {
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
      function qg(t) {
        var n = t.match(oV);
        return n ? n[1].split(aV) : [];
      }
      function Xf(t, n, a) {
        n = xn(n, t);
        for (var l = -1, u = n.length, p = !1; ++l < u; ) {
          var w = on(n[l]);
          if (!(p = t != null && a(t, w)))
            break;
          t = t[w];
        }
        return p || ++l != u ? p : (u = t == null ? 0 : t.length, !!u && bi(u) && gn(w, u) && (q(t) || lr(t)));
      }
      function Kg(t) {
        var n = t.length, a = new t.constructor(n);
        return n && typeof t[0] == "string" && he.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function Lf(t) {
        return typeof t.constructor == "function" && !Oo(t) ? Br(ei(t)) : {};
      }
      function eT(t, n, a) {
        var l = t.constructor;
        switch (n) {
          case Zo:
            return Fl(t);
          case yo:
          case No:
            return new l(+t);
          case Zr:
            return Bg(t, a);
          case Is:
          case Ds:
          case Os:
          case Qs:
          case zs:
          case Gs:
          case Ys:
          case Ps:
          case Hs:
            return Ff(t, a);
          case Dt:
            return new l();
          case Ro:
          case Mo:
            return new l(t);
          case ko:
            return _g(t);
          case Ot:
            return new l();
          case Oa:
            return Ig(t);
        }
      }
      function tT(t, n) {
        var a = n.length;
        if (!a)
          return t;
        var l = a - 1;
        return n[l] = (a > 1 ? "& " : "") + n[l], n = n.join(a > 2 ? ", " : " "), t.replace(rV, `{
/* [wrapped with ` + n + `] */
`);
      }
      function nT(t) {
        return q(t) || lr(t) || !!(tf && t && t[tf]);
      }
      function gn(t, n) {
        var a = typeof t;
        return n = n == null ? Xe : n, !!n && (a == "number" || a != "symbol" && pV.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function qe(t, n, a) {
        if (!Re(a))
          return !1;
        var l = typeof n;
        return (l == "number" ? nt(a) && gn(n, a.length) : l == "string" && n in a) ? Gt(a[n], t) : !1;
      }
      function Ol(t, n) {
        if (q(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || ht(t) ? !0 : K1.test(t) || !q1.test(t) || n != null && t in me(n);
      }
      function rT(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ql(t) {
        var n = gi(t), a = h[n];
        if (typeof a != "function" || !(n in ae.prototype))
          return !1;
        if (t === a)
          return !0;
        var l = _l(a);
        return !!l && t === l[0];
      }
      function oT(t) {
        return !!Ld && Ld in t;
      }
      var aT = $a ? Tn : ac;
      function Oo(t) {
        var n = t && t.constructor, a = typeof n == "function" && n.prototype || Cr;
        return t === a;
      }
      function qf(t) {
        return t === t && !Re(t);
      }
      function Kf(t, n) {
        return function(a) {
          return a == null ? !1 : a[t] === n && (n !== o || t in me(a));
        };
      }
      function iT(t) {
        var n = ki(t, function(l) {
          return a.size === V && a.clear(), l;
        }), a = n.cache;
        return n;
      }
      function sT(t, n) {
        var a = t[1], l = n[1], u = a | l, p = u < (C | A | O), w = l == O && a == x || l == O && a == _ && t[7].length <= n[8] || l == (O | _) && n[7].length <= n[8] && a == x;
        if (!(p || w))
          return t;
        l & C && (t[2] = n[2], u |= a & C ? 0 : W);
        var v = n[3];
        if (v) {
          var y = t[3];
          t[3] = y ? Wf(y, v, n[4]) : v, t[4] = y ? An(t[3], g) : n[4];
        }
        return v = n[5], v && (y = t[5], t[5] = y ? xf(y, v, n[6]) : v, t[6] = y ? An(t[5], g) : n[6]), v = n[7], v && (t[7] = v), l & O && (t[8] = t[8] == null ? n[8] : Pe(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = u, t;
      }
      function lT(t) {
        var n = [];
        if (t != null)
          for (var a in me(t))
            n.push(a);
        return n;
      }
      function cT(t) {
        return La.call(t);
      }
      function eh(t, n, a) {
        return n = Ae(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, u = -1, p = Ae(l.length - n, 0), w = R(p); ++u < p; )
            w[u] = l[n + u];
          u = -1;
          for (var v = R(n + 1); ++u < n; )
            v[u] = l[u];
          return v[n] = a(w), ut(t, this, v);
        };
      }
      function th(t, n) {
        return n.length < 2 ? t : ar(t, St(n, 0, -1));
      }
      function uT(t, n) {
        for (var a = t.length, l = Pe(n.length, a), u = tt(t); l--; ) {
          var p = n[l];
          t[l] = gn(p, a) ? u[p] : o;
        }
        return t;
      }
      function zl(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var nh = oh(kf), Qo = k0 || function(t, n) {
        return Oe.setTimeout(t, n);
      }, Gl = oh(Fg);
      function rh(t, n, a) {
        var l = n + "";
        return Gl(t, tT(l, dT(qg(l), a)));
      }
      function oh(t) {
        var n = 0, a = 0;
        return function() {
          var l = S0(), u = se - (l - a);
          if (a = l, u > 0) {
            if (++n >= z)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function Ui(t, n) {
        var a = -1, l = t.length, u = l - 1;
        for (n = n === o ? l : n; ++a < n; ) {
          var p = Ml(a, u), w = t[p];
          t[p] = t[a], t[a] = w;
        }
        return t.length = n, t;
      }
      var ah = iT(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(eV, function(a, l, u, p) {
          n.push(u ? p.replace(lV, "$1") : l || a);
        }), n;
      });
      function on(t) {
        if (typeof t == "string" || ht(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -De ? "-0" : n;
      }
      function sr(t) {
        if (t != null) {
          try {
            return Xa.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function dT(t, n) {
        return kt(_1, function(a) {
          var l = "_." + a[0];
          n & a[1] && !Ya(t, l) && t.push(l);
        }), t.sort();
      }
      function ih(t) {
        if (t instanceof ae)
          return t.clone();
        var n = new bt(t.__wrapped__, t.__chain__);
        return n.__actions__ = tt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function fT(t, n, a) {
        (a ? qe(t, n, a) : n === o) ? n = 1 : n = Ae(ee(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var u = 0, p = 0, w = R(ri(l / n)); u < l; )
          w[p++] = St(t, u, u += n);
        return w;
      }
      function hT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = 0, u = []; ++n < a; ) {
          var p = t[n];
          p && (u[l++] = p);
        }
        return u;
      }
      function pT() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = R(t - 1), a = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Jn(q(a) ? tt(a) : [a], Qe(n, 1));
      }
      var mT = re(function(t, n) {
        return Me(t) ? xo(t, Qe(n, 1, Me, !0)) : [];
      }), wT = re(function(t, n) {
        var a = Et(n);
        return Me(a) && (a = o), Me(t) ? xo(t, Qe(n, 1, Me, !0), G(a, 2)) : [];
      }), vT = re(function(t, n) {
        var a = Et(n);
        return Me(a) && (a = o), Me(t) ? xo(t, Qe(n, 1, Me, !0), o, a) : [];
      });
      function VT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), St(t, n < 0 ? 0 : n, l)) : [];
      }
      function gT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function TT(t, n) {
        return t && t.length ? hi(t, G(n, 3), !0, !0) : [];
      }
      function UT(t, n) {
        return t && t.length ? hi(t, G(n, 3), !0) : [];
      }
      function yT(t, n, a, l) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && qe(t, n, a) && (a = 0, l = u), pg(t, n, a, l)) : [];
      }
      function sh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Ae(l + u, 0)), Pa(t, G(n, 3), u);
      }
      function lh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l - 1;
        return a !== o && (u = ee(a), u = a < 0 ? Ae(l + u, 0) : Pe(u, l - 1)), Pa(t, G(n, 3), u, !0);
      }
      function ch(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, 1) : [];
      }
      function NT(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, De) : [];
      }
      function RT(t, n) {
        var a = t == null ? 0 : t.length;
        return a ? (n = n === o ? 1 : ee(n), Qe(t, n)) : [];
      }
      function kT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = {}; ++n < a; ) {
          var u = t[n];
          l[u[0]] = u[1];
        }
        return l;
      }
      function uh(t) {
        return t && t.length ? t[0] : o;
      }
      function MT(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Ae(l + u, 0)), Er(t, n, u);
      }
      function bT(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 0, -1) : [];
      }
      var ZT = re(function(t) {
        var n = Ne(t, Jl);
        return n.length && n[0] === t[0] ? Ul(n) : [];
      }), ST = re(function(t) {
        var n = Et(t), a = Ne(t, Jl);
        return n === Et(a) ? n = o : a.pop(), a.length && a[0] === t[0] ? Ul(a, G(n, 2)) : [];
      }), ET = re(function(t) {
        var n = Et(t), a = Ne(t, Jl);
        return n = typeof n == "function" ? n : o, n && a.pop(), a.length && a[0] === t[0] ? Ul(a, o, n) : [];
      });
      function JT(t, n) {
        return t == null ? "" : b0.call(t, n);
      }
      function Et(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function AT(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l;
        return a !== o && (u = ee(a), u = u < 0 ? Ae(l + u, 0) : Pe(u, l - 1)), n === n ? d0(t, n, u) : Pa(t, zd, u, !0);
      }
      function FT(t, n) {
        return t && t.length ? Uf(t, ee(n)) : o;
      }
      var CT = re(dh);
      function dh(t, n) {
        return t && t.length && n && n.length ? kl(t, n) : t;
      }
      function WT(t, n, a) {
        return t && t.length && n && n.length ? kl(t, n, G(a, 2)) : t;
      }
      function xT(t, n, a) {
        return t && t.length && n && n.length ? kl(t, n, o, a) : t;
      }
      var BT = Vn(function(t, n) {
        var a = t == null ? 0 : t.length, l = vl(t, n);
        return Rf(t, Ne(n, function(u) {
          return gn(u, a) ? +u : u;
        }).sort(Cf)), l;
      });
      function _T(t, n) {
        var a = [];
        if (!(t && t.length))
          return a;
        var l = -1, u = [], p = t.length;
        for (n = G(n, 3); ++l < p; ) {
          var w = t[l];
          n(w, l, t) && (a.push(w), u.push(l));
        }
        return Rf(t, u), a;
      }
      function Yl(t) {
        return t == null ? t : J0.call(t);
      }
      function IT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (a && typeof a != "number" && qe(t, n, a) ? (n = 0, a = l) : (n = n == null ? 0 : ee(n), a = a === o ? l : ee(a)), St(t, n, a)) : [];
      }
      function DT(t, n) {
        return fi(t, n);
      }
      function OT(t, n, a) {
        return Zl(t, n, G(a, 2));
      }
      function QT(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = fi(t, n);
          if (l < a && Gt(t[l], n))
            return l;
        }
        return -1;
      }
      function zT(t, n) {
        return fi(t, n, !0);
      }
      function GT(t, n, a) {
        return Zl(t, n, G(a, 2), !0);
      }
      function YT(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = fi(t, n, !0) - 1;
          if (Gt(t[l], n))
            return l;
        }
        return -1;
      }
      function PT(t) {
        return t && t.length ? Mf(t) : [];
      }
      function HT(t, n) {
        return t && t.length ? Mf(t, G(n, 2)) : [];
      }
      function jT(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 1, n) : [];
      }
      function $T(t, n, a) {
        return t && t.length ? (n = a || n === o ? 1 : ee(n), St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function XT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, St(t, n < 0 ? 0 : n, l)) : [];
      }
      function LT(t, n) {
        return t && t.length ? hi(t, G(n, 3), !1, !0) : [];
      }
      function qT(t, n) {
        return t && t.length ? hi(t, G(n, 3)) : [];
      }
      var KT = re(function(t) {
        return Wn(Qe(t, 1, Me, !0));
      }), eU = re(function(t) {
        var n = Et(t);
        return Me(n) && (n = o), Wn(Qe(t, 1, Me, !0), G(n, 2));
      }), tU = re(function(t) {
        var n = Et(t);
        return n = typeof n == "function" ? n : o, Wn(Qe(t, 1, Me, !0), o, n);
      });
      function nU(t) {
        return t && t.length ? Wn(t) : [];
      }
      function rU(t, n) {
        return t && t.length ? Wn(t, G(n, 2)) : [];
      }
      function oU(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? Wn(t, o, n) : [];
      }
      function Pl(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = En(t, function(a) {
          if (Me(a))
            return n = Ae(a.length, n), !0;
        }), cl(n, function(a) {
          return Ne(t, il(a));
        });
      }
      function fh(t, n) {
        if (!(t && t.length))
          return [];
        var a = Pl(t);
        return n == null ? a : Ne(a, function(l) {
          return ut(n, o, l);
        });
      }
      var aU = re(function(t, n) {
        return Me(t) ? xo(t, n) : [];
      }), iU = re(function(t) {
        return El(En(t, Me));
      }), sU = re(function(t) {
        var n = Et(t);
        return Me(n) && (n = o), El(En(t, Me), G(n, 2));
      }), lU = re(function(t) {
        var n = Et(t);
        return n = typeof n == "function" ? n : o, El(En(t, Me), o, n);
      }), cU = re(Pl);
      function uU(t, n) {
        return Ef(t || [], n || [], Wo);
      }
      function dU(t, n) {
        return Ef(t || [], n || [], Io);
      }
      var fU = re(function(t) {
        var n = t.length, a = n > 1 ? t[n - 1] : o;
        return a = typeof a == "function" ? (t.pop(), a) : o, fh(t, a);
      });
      function hh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function hU(t, n) {
        return n(t), t;
      }
      function yi(t, n) {
        return n(t);
      }
      var pU = Vn(function(t) {
        var n = t.length, a = n ? t[0] : 0, l = this.__wrapped__, u = function(p) {
          return vl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ae) || !gn(a) ? this.thru(u) : (l = l.slice(a, +a + (n ? 1 : 0)), l.__actions__.push({
          func: yi,
          args: [u],
          thisArg: o
        }), new bt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function mU() {
        return hh(this);
      }
      function wU() {
        return new bt(this.value(), this.__chain__);
      }
      function vU() {
        this.__values__ === o && (this.__values__ = bh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function VU() {
        return this;
      }
      function gU(t) {
        for (var n, a = this; a instanceof si; ) {
          var l = ih(a);
          l.__index__ = 0, l.__values__ = o, n ? u.__wrapped__ = l : n = l;
          var u = l;
          a = a.__wrapped__;
        }
        return u.__wrapped__ = t, n;
      }
      function TU() {
        var t = this.__wrapped__;
        if (t instanceof ae) {
          var n = t;
          return this.__actions__.length && (n = new ae(this)), n = n.reverse(), n.__actions__.push({
            func: yi,
            args: [Yl],
            thisArg: o
          }), new bt(n, this.__chain__);
        }
        return this.thru(Yl);
      }
      function UU() {
        return Sf(this.__wrapped__, this.__actions__);
      }
      var yU = pi(function(t, n, a) {
        he.call(t, a) ? ++t[a] : wn(t, a, 1);
      });
      function NU(t, n, a) {
        var l = q(t) ? Od : hg;
        return a && qe(t, n, a) && (n = o), l(t, G(n, 3));
      }
      function RU(t, n) {
        var a = q(t) ? En : ff;
        return a(t, G(n, 3));
      }
      var kU = Df(sh), MU = Df(lh);
      function bU(t, n) {
        return Qe(Ni(t, n), 1);
      }
      function ZU(t, n) {
        return Qe(Ni(t, n), De);
      }
      function SU(t, n, a) {
        return a = a === o ? 1 : ee(a), Qe(Ni(t, n), a);
      }
      function ph(t, n) {
        var a = q(t) ? kt : Cn;
        return a(t, G(n, 3));
      }
      function mh(t, n) {
        var a = q(t) ? jV : df;
        return a(t, G(n, 3));
      }
      var EU = pi(function(t, n, a) {
        he.call(t, a) ? t[a].push(n) : wn(t, a, [n]);
      });
      function JU(t, n, a, l) {
        t = nt(t) ? t : Qr(t), a = a && !l ? ee(a) : 0;
        var u = t.length;
        return a < 0 && (a = Ae(u + a, 0)), Zi(t) ? a <= u && t.indexOf(n, a) > -1 : !!u && Er(t, n, a) > -1;
      }
      var AU = re(function(t, n, a) {
        var l = -1, u = typeof n == "function", p = nt(t) ? R(t.length) : [];
        return Cn(t, function(w) {
          p[++l] = u ? ut(n, w, a) : Bo(w, n, a);
        }), p;
      }), FU = pi(function(t, n, a) {
        wn(t, a, n);
      });
      function Ni(t, n) {
        var a = q(t) ? Ne : Vf;
        return a(t, G(n, 3));
      }
      function CU(t, n, a, l) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), a = l ? o : a, q(a) || (a = a == null ? [] : [a]), yf(t, n, a));
      }
      var WU = pi(function(t, n, a) {
        t[a ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function xU(t, n, a) {
        var l = q(t) ? ol : Yd, u = arguments.length < 3;
        return l(t, G(n, 4), a, u, Cn);
      }
      function BU(t, n, a) {
        var l = q(t) ? $V : Yd, u = arguments.length < 3;
        return l(t, G(n, 4), a, u, df);
      }
      function _U(t, n) {
        var a = q(t) ? En : ff;
        return a(t, Mi(G(n, 3)));
      }
      function IU(t) {
        var n = q(t) ? sf : Jg;
        return n(t);
      }
      function DU(t, n, a) {
        (a ? qe(t, n, a) : n === o) ? n = 1 : n = ee(n);
        var l = q(t) ? lg : Ag;
        return l(t, n);
      }
      function OU(t) {
        var n = q(t) ? cg : Cg;
        return n(t);
      }
      function QU(t) {
        if (t == null)
          return 0;
        if (nt(t))
          return Zi(t) ? Ar(t) : t.length;
        var n = He(t);
        return n == Dt || n == Ot ? t.size : Nl(t).length;
      }
      function zU(t, n, a) {
        var l = q(t) ? al : Wg;
        return a && qe(t, n, a) && (n = o), l(t, G(n, 3));
      }
      var GU = re(function(t, n) {
        if (t == null)
          return [];
        var a = n.length;
        return a > 1 && qe(t, n[0], n[1]) ? n = [] : a > 2 && qe(n[0], n[1], n[2]) && (n = [n[0]]), yf(t, Qe(n, 1), []);
      }), Ri = R0 || function() {
        return Oe.Date.now();
      };
      function YU(t, n) {
        if (typeof n != "function")
          throw new Mt(d);
        return t = ee(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function wh(t, n, a) {
        return n = a ? o : n, n = t && n == null ? t.length : n, vn(t, O, o, o, o, o, n);
      }
      function vh(t, n) {
        var a;
        if (typeof n != "function")
          throw new Mt(d);
        return t = ee(t), function() {
          return --t > 0 && (a = n.apply(this, arguments)), t <= 1 && (n = o), a;
        };
      }
      var Hl = re(function(t, n, a) {
        var l = C;
        if (a.length) {
          var u = An(a, Dr(Hl));
          l |= S;
        }
        return vn(t, l, n, a, u);
      }), Vh = re(function(t, n, a) {
        var l = C | A;
        if (a.length) {
          var u = An(a, Dr(Vh));
          l |= S;
        }
        return vn(n, l, t, a, u);
      });
      function gh(t, n, a) {
        n = a ? o : n;
        var l = vn(t, x, o, o, o, o, o, n);
        return l.placeholder = gh.placeholder, l;
      }
      function Th(t, n, a) {
        n = a ? o : n;
        var l = vn(t, X, o, o, o, o, o, n);
        return l.placeholder = Th.placeholder, l;
      }
      function Uh(t, n, a) {
        var l, u, p, w, v, y, M = 0, b = !1, J = !1, B = !0;
        if (typeof t != "function")
          throw new Mt(d);
        n = Jt(n) || 0, Re(a) && (b = !!a.leading, J = "maxWait" in a, p = J ? Ae(Jt(a.maxWait) || 0, n) : p, B = "trailing" in a ? !!a.trailing : B);
        function D(be) {
          var Yt = l, yn = u;
          return l = u = o, M = be, w = t.apply(yn, Yt), w;
        }
        function Y(be) {
          return M = be, v = Qo(oe, n), b ? D(be) : w;
        }
        function te(be) {
          var Yt = be - y, yn = be - M, Dh = n - Yt;
          return J ? Pe(Dh, p - yn) : Dh;
        }
        function P(be) {
          var Yt = be - y, yn = be - M;
          return y === o || Yt >= n || Yt < 0 || J && yn >= p;
        }
        function oe() {
          var be = Ri();
          if (P(be))
            return ie(be);
          v = Qo(oe, te(be));
        }
        function ie(be) {
          return v = o, B && l ? D(be) : (l = u = o, w);
        }
        function pt() {
          v !== o && Jf(v), M = 0, l = y = u = v = o;
        }
        function Ke() {
          return v === o ? w : ie(Ri());
        }
        function mt() {
          var be = Ri(), Yt = P(be);
          if (l = arguments, u = this, y = be, Yt) {
            if (v === o)
              return Y(y);
            if (J)
              return Jf(v), v = Qo(oe, n), D(y);
          }
          return v === o && (v = Qo(oe, n)), w;
        }
        return mt.cancel = pt, mt.flush = Ke, mt;
      }
      var PU = re(function(t, n) {
        return uf(t, 1, n);
      }), HU = re(function(t, n, a) {
        return uf(t, Jt(n) || 0, a);
      });
      function jU(t) {
        return vn(t, H);
      }
      function ki(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Mt(d);
        var a = function() {
          var l = arguments, u = n ? n.apply(this, l) : l[0], p = a.cache;
          if (p.has(u))
            return p.get(u);
          var w = t.apply(this, l);
          return a.cache = p.set(u, w) || p, w;
        };
        return a.cache = new (ki.Cache || mn)(), a;
      }
      ki.Cache = mn;
      function Mi(t) {
        if (typeof t != "function")
          throw new Mt(d);
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
      function $U(t) {
        return vh(2, t);
      }
      var XU = xg(function(t, n) {
        n = n.length == 1 && q(n[0]) ? Ne(n[0], dt(G())) : Ne(Qe(n, 1), dt(G()));
        var a = n.length;
        return re(function(l) {
          for (var u = -1, p = Pe(l.length, a); ++u < p; )
            l[u] = n[u].call(this, l[u]);
          return ut(t, this, l);
        });
      }), jl = re(function(t, n) {
        var a = An(n, Dr(jl));
        return vn(t, S, o, n, a);
      }), yh = re(function(t, n) {
        var a = An(n, Dr(yh));
        return vn(t, Q, o, n, a);
      }), LU = Vn(function(t, n) {
        return vn(t, _, o, o, o, n);
      });
      function qU(t, n) {
        if (typeof t != "function")
          throw new Mt(d);
        return n = n === o ? n : ee(n), re(t, n);
      }
      function KU(t, n) {
        if (typeof t != "function")
          throw new Mt(d);
        return n = n == null ? 0 : Ae(ee(n), 0), re(function(a) {
          var l = a[n], u = Bn(a, 0, n);
          return l && Jn(u, l), ut(t, this, u);
        });
      }
      function ey(t, n, a) {
        var l = !0, u = !0;
        if (typeof t != "function")
          throw new Mt(d);
        return Re(a) && (l = "leading" in a ? !!a.leading : l, u = "trailing" in a ? !!a.trailing : u), Uh(t, n, {
          leading: l,
          maxWait: n,
          trailing: u
        });
      }
      function ty(t) {
        return wh(t, 1);
      }
      function ny(t, n) {
        return jl(Al(n), t);
      }
      function ry() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function oy(t) {
        return Zt(t, F);
      }
      function ay(t, n) {
        return n = typeof n == "function" ? n : o, Zt(t, F, n);
      }
      function iy(t) {
        return Zt(t, T | F);
      }
      function sy(t, n) {
        return n = typeof n == "function" ? n : o, Zt(t, T | F, n);
      }
      function ly(t, n) {
        return n == null || cf(t, n, We(n));
      }
      function Gt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var cy = Vi(Tl), uy = Vi(function(t, n) {
        return t >= n;
      }), lr = mf(function() {
        return arguments;
      }()) ? mf : function(t) {
        return ke(t) && he.call(t, "callee") && !ef.call(t, "callee");
      }, q = R.isArray, dy = Wd ? dt(Wd) : gg;
      function nt(t) {
        return t != null && bi(t.length) && !Tn(t);
      }
      function Me(t) {
        return ke(t) && nt(t);
      }
      function fy(t) {
        return t === !0 || t === !1 || ke(t) && Le(t) == yo;
      }
      var _n = M0 || ac, hy = xd ? dt(xd) : Tg;
      function py(t) {
        return ke(t) && t.nodeType === 1 && !zo(t);
      }
      function my(t) {
        if (t == null)
          return !0;
        if (nt(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || _n(t) || Or(t) || lr(t)))
          return !t.length;
        var n = He(t);
        if (n == Dt || n == Ot)
          return !t.size;
        if (Oo(t))
          return !Nl(t).length;
        for (var a in t)
          if (he.call(t, a))
            return !1;
        return !0;
      }
      function wy(t, n) {
        return _o(t, n);
      }
      function vy(t, n, a) {
        a = typeof a == "function" ? a : o;
        var l = a ? a(t, n) : o;
        return l === o ? _o(t, n, o, a) : !!l;
      }
      function $l(t) {
        if (!ke(t))
          return !1;
        var n = Le(t);
        return n == Ia || n == D1 || typeof t.message == "string" && typeof t.name == "string" && !zo(t);
      }
      function Vy(t) {
        return typeof t == "number" && nf(t);
      }
      function Tn(t) {
        if (!Re(t))
          return !1;
        var n = Le(t);
        return n == Da || n == cd || n == I1 || n == Q1;
      }
      function Nh(t) {
        return typeof t == "number" && t == ee(t);
      }
      function bi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Xe;
      }
      function Re(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function ke(t) {
        return t != null && typeof t == "object";
      }
      var Rh = Bd ? dt(Bd) : yg;
      function gy(t, n) {
        return t === n || yl(t, n, Il(n));
      }
      function Ty(t, n, a) {
        return a = typeof a == "function" ? a : o, yl(t, n, Il(n), a);
      }
      function Uy(t) {
        return kh(t) && t != +t;
      }
      function yy(t) {
        if (aT(t))
          throw new L(c);
        return wf(t);
      }
      function Ny(t) {
        return t === null;
      }
      function Ry(t) {
        return t == null;
      }
      function kh(t) {
        return typeof t == "number" || ke(t) && Le(t) == Ro;
      }
      function zo(t) {
        if (!ke(t) || Le(t) != hn)
          return !1;
        var n = ei(t);
        if (n === null)
          return !0;
        var a = he.call(n, "constructor") && n.constructor;
        return typeof a == "function" && a instanceof a && Xa.call(a) == T0;
      }
      var Xl = _d ? dt(_d) : Ng;
      function ky(t) {
        return Nh(t) && t >= -Xe && t <= Xe;
      }
      var Mh = Id ? dt(Id) : Rg;
      function Zi(t) {
        return typeof t == "string" || !q(t) && ke(t) && Le(t) == Mo;
      }
      function ht(t) {
        return typeof t == "symbol" || ke(t) && Le(t) == Oa;
      }
      var Or = Dd ? dt(Dd) : kg;
      function My(t) {
        return t === o;
      }
      function by(t) {
        return ke(t) && He(t) == bo;
      }
      function Zy(t) {
        return ke(t) && Le(t) == G1;
      }
      var Sy = Vi(Rl), Ey = Vi(function(t, n) {
        return t <= n;
      });
      function bh(t) {
        if (!t)
          return [];
        if (nt(t))
          return Zi(t) ? Qt(t) : tt(t);
        if (Eo && t[Eo])
          return l0(t[Eo]());
        var n = He(t), a = n == Dt ? dl : n == Ot ? Ha : Qr;
        return a(t);
      }
      function Un(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Jt(t), t === De || t === -De) {
          var n = t < 0 ? -1 : 1;
          return n * Uo;
        }
        return t === t ? t : 0;
      }
      function ee(t) {
        var n = Un(t), a = n % 1;
        return n === n ? a ? n - a : n : 0;
      }
      function Zh(t) {
        return t ? or(ee(t), 0, tn) : 0;
      }
      function Jt(t) {
        if (typeof t == "number")
          return t;
        if (ht(t))
          return Ba;
        if (Re(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Re(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Pd(t);
        var a = dV.test(t);
        return a || hV.test(t) ? YV(t.slice(2), a ? 2 : 8) : uV.test(t) ? Ba : +t;
      }
      function Sh(t) {
        return rn(t, rt(t));
      }
      function Jy(t) {
        return t ? or(ee(t), -Xe, Xe) : t === 0 ? t : 0;
      }
      function fe(t) {
        return t == null ? "" : ft(t);
      }
      var Ay = _r(function(t, n) {
        if (Oo(n) || nt(n)) {
          rn(n, We(n), t);
          return;
        }
        for (var a in n)
          he.call(n, a) && Wo(t, a, n[a]);
      }), Eh = _r(function(t, n) {
        rn(n, rt(n), t);
      }), Si = _r(function(t, n, a, l) {
        rn(n, rt(n), t, l);
      }), Fy = _r(function(t, n, a, l) {
        rn(n, We(n), t, l);
      }), Cy = Vn(vl);
      function Wy(t, n) {
        var a = Br(t);
        return n == null ? a : lf(a, n);
      }
      var xy = re(function(t, n) {
        t = me(t);
        var a = -1, l = n.length, u = l > 2 ? n[2] : o;
        for (u && qe(n[0], n[1], u) && (l = 1); ++a < l; )
          for (var p = n[a], w = rt(p), v = -1, y = w.length; ++v < y; ) {
            var M = w[v], b = t[M];
            (b === o || Gt(b, Cr[M]) && !he.call(t, M)) && (t[M] = p[M]);
          }
        return t;
      }), By = re(function(t) {
        return t.push(o, Hf), ut(Jh, o, t);
      });
      function _y(t, n) {
        return Qd(t, G(n, 3), nn);
      }
      function Iy(t, n) {
        return Qd(t, G(n, 3), gl);
      }
      function Dy(t, n) {
        return t == null ? t : Vl(t, G(n, 3), rt);
      }
      function Oy(t, n) {
        return t == null ? t : hf(t, G(n, 3), rt);
      }
      function Qy(t, n) {
        return t && nn(t, G(n, 3));
      }
      function zy(t, n) {
        return t && gl(t, G(n, 3));
      }
      function Gy(t) {
        return t == null ? [] : ui(t, We(t));
      }
      function Yy(t) {
        return t == null ? [] : ui(t, rt(t));
      }
      function Ll(t, n, a) {
        var l = t == null ? o : ar(t, n);
        return l === o ? a : l;
      }
      function Py(t, n) {
        return t != null && Xf(t, n, mg);
      }
      function ql(t, n) {
        return t != null && Xf(t, n, wg);
      }
      var Hy = Qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = La.call(n)), t[n] = a;
      }, ec(ot)), jy = Qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = La.call(n)), he.call(t, n) ? t[n].push(a) : t[n] = [a];
      }, G), $y = re(Bo);
      function We(t) {
        return nt(t) ? af(t) : Nl(t);
      }
      function rt(t) {
        return nt(t) ? af(t, !0) : Mg(t);
      }
      function Xy(t, n) {
        var a = {};
        return n = G(n, 3), nn(t, function(l, u, p) {
          wn(a, n(l, u, p), l);
        }), a;
      }
      function Ly(t, n) {
        var a = {};
        return n = G(n, 3), nn(t, function(l, u, p) {
          wn(a, u, n(l, u, p));
        }), a;
      }
      var qy = _r(function(t, n, a) {
        di(t, n, a);
      }), Jh = _r(function(t, n, a, l) {
        di(t, n, a, l);
      }), Ky = Vn(function(t, n) {
        var a = {};
        if (t == null)
          return a;
        var l = !1;
        n = Ne(n, function(p) {
          return p = xn(p, t), l || (l = p.length > 1), p;
        }), rn(t, Bl(t), a), l && (a = Zt(a, T | N | F, Hg));
        for (var u = n.length; u--; )
          Sl(a, n[u]);
        return a;
      });
      function eN(t, n) {
        return Ah(t, Mi(G(n)));
      }
      var tN = Vn(function(t, n) {
        return t == null ? {} : Zg(t, n);
      });
      function Ah(t, n) {
        if (t == null)
          return {};
        var a = Ne(Bl(t), function(l) {
          return [l];
        });
        return n = G(n), Nf(t, a, function(l, u) {
          return n(l, u[0]);
        });
      }
      function nN(t, n, a) {
        n = xn(n, t);
        var l = -1, u = n.length;
        for (u || (u = 1, t = o); ++l < u; ) {
          var p = t == null ? o : t[on(n[l])];
          p === o && (l = u, p = a), t = Tn(p) ? p.call(t) : p;
        }
        return t;
      }
      function rN(t, n, a) {
        return t == null ? t : Io(t, n, a);
      }
      function oN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Io(t, n, a, l);
      }
      var Fh = Yf(We), Ch = Yf(rt);
      function aN(t, n, a) {
        var l = q(t), u = l || _n(t) || Or(t);
        if (n = G(n, 4), a == null) {
          var p = t && t.constructor;
          u ? a = l ? new p() : [] : Re(t) ? a = Tn(p) ? Br(ei(t)) : {} : a = {};
        }
        return (u ? kt : nn)(t, function(w, v, y) {
          return n(a, w, v, y);
        }), a;
      }
      function iN(t, n) {
        return t == null ? !0 : Sl(t, n);
      }
      function sN(t, n, a) {
        return t == null ? t : Zf(t, n, Al(a));
      }
      function lN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Zf(t, n, Al(a), l);
      }
      function Qr(t) {
        return t == null ? [] : ul(t, We(t));
      }
      function cN(t) {
        return t == null ? [] : ul(t, rt(t));
      }
      function uN(t, n, a) {
        return a === o && (a = n, n = o), a !== o && (a = Jt(a), a = a === a ? a : 0), n !== o && (n = Jt(n), n = n === n ? n : 0), or(Jt(t), n, a);
      }
      function dN(t, n, a) {
        return n = Un(n), a === o ? (a = n, n = 0) : a = Un(a), t = Jt(t), vg(t, n, a);
      }
      function fN(t, n, a) {
        if (a && typeof a != "boolean" && qe(t, n, a) && (n = a = o), a === o && (typeof n == "boolean" ? (a = n, n = o) : typeof t == "boolean" && (a = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Un(t), n === o ? (n = t, t = 0) : n = Un(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (a || t % 1 || n % 1) {
          var u = rf();
          return Pe(t + u * (n - t + GV("1e-" + ((u + "").length - 1))), n);
        }
        return Ml(t, n);
      }
      var hN = Ir(function(t, n, a) {
        return n = n.toLowerCase(), t + (a ? Wh(n) : n);
      });
      function Wh(t) {
        return Kl(fe(t).toLowerCase());
      }
      function xh(t) {
        return t = fe(t), t && t.replace(mV, r0).replace(CV, "");
      }
      function pN(t, n, a) {
        t = fe(t), n = ft(n);
        var l = t.length;
        a = a === o ? l : or(ee(a), 0, l);
        var u = a;
        return a -= n.length, a >= 0 && t.slice(a, u) == n;
      }
      function mN(t) {
        return t = fe(t), t && $1.test(t) ? t.replace(fd, o0) : t;
      }
      function wN(t) {
        return t = fe(t), t && tV.test(t) ? t.replace(js, "\\$&") : t;
      }
      var vN = Ir(function(t, n, a) {
        return t + (a ? "-" : "") + n.toLowerCase();
      }), VN = Ir(function(t, n, a) {
        return t + (a ? " " : "") + n.toLowerCase();
      }), gN = If("toLowerCase");
      function TN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        if (!n || l >= n)
          return t;
        var u = (n - l) / 2;
        return vi(oi(u), a) + t + vi(ri(u), a);
      }
      function UN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        return n && l < n ? t + vi(n - l, a) : t;
      }
      function yN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ar(t) : 0;
        return n && l < n ? vi(n - l, a) + t : t;
      }
      function NN(t, n, a) {
        return a || n == null ? n = 0 : n && (n = +n), E0(fe(t).replace($s, ""), n || 0);
      }
      function RN(t, n, a) {
        return (a ? qe(t, n, a) : n === o) ? n = 1 : n = ee(n), bl(fe(t), n);
      }
      function kN() {
        var t = arguments, n = fe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var MN = Ir(function(t, n, a) {
        return t + (a ? "_" : "") + n.toLowerCase();
      });
      function bN(t, n, a) {
        return a && typeof a != "number" && qe(t, n, a) && (n = a = o), a = a === o ? tn : a >>> 0, a ? (t = fe(t), t && (typeof n == "string" || n != null && !Xl(n)) && (n = ft(n), !n && Jr(t)) ? Bn(Qt(t), 0, a) : t.split(n, a)) : [];
      }
      var ZN = Ir(function(t, n, a) {
        return t + (a ? " " : "") + Kl(n);
      });
      function SN(t, n, a) {
        return t = fe(t), a = a == null ? 0 : or(ee(a), 0, t.length), n = ft(n), t.slice(a, a + n.length) == n;
      }
      function EN(t, n, a) {
        var l = h.templateSettings;
        a && qe(t, n, a) && (n = o), t = fe(t), n = Si({}, n, l, Pf);
        var u = Si({}, n.imports, l.imports, Pf), p = We(u), w = ul(u, p), v, y, M = 0, b = n.interpolate || Qa, J = "__p += '", B = fl(
          (n.escape || Qa).source + "|" + b.source + "|" + (b === hd ? cV : Qa).source + "|" + (n.evaluate || Qa).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (he.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++IV + "]") + `
`;
        t.replace(B, function(P, oe, ie, pt, Ke, mt) {
          return ie || (ie = pt), J += t.slice(M, mt).replace(wV, a0), oe && (v = !0, J += `' +
__e(` + oe + `) +
'`), Ke && (y = !0, J += `';
` + Ke + `;
__p += '`), ie && (J += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), M = mt + P.length, P;
        }), J += `';
`;
        var Y = he.call(n, "variable") && n.variable;
        if (!Y)
          J = `with (obj) {
` + J + `
}
`;
        else if (sV.test(Y))
          throw new L(f);
        J = (y ? J.replace(Y1, "") : J).replace(P1, "$1").replace(H1, "$1;"), J = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var te = _h(function() {
          return ce(p, D + "return " + J).apply(o, w);
        });
        if (te.source = J, $l(te))
          throw te;
        return te;
      }
      function JN(t) {
        return fe(t).toLowerCase();
      }
      function AN(t) {
        return fe(t).toUpperCase();
      }
      function FN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return Pd(t);
        if (!t || !(n = ft(n)))
          return t;
        var l = Qt(t), u = Qt(n), p = Hd(l, u), w = jd(l, u) + 1;
        return Bn(l, p, w).join("");
      }
      function CN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.slice(0, Xd(t) + 1);
        if (!t || !(n = ft(n)))
          return t;
        var l = Qt(t), u = jd(l, Qt(n)) + 1;
        return Bn(l, 0, u).join("");
      }
      function WN(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.replace($s, "");
        if (!t || !(n = ft(n)))
          return t;
        var l = Qt(t), u = Hd(l, Qt(n));
        return Bn(l, u).join("");
      }
      function xN(t, n) {
        var a = K, l = j;
        if (Re(n)) {
          var u = "separator" in n ? n.separator : u;
          a = "length" in n ? ee(n.length) : a, l = "omission" in n ? ft(n.omission) : l;
        }
        t = fe(t);
        var p = t.length;
        if (Jr(t)) {
          var w = Qt(t);
          p = w.length;
        }
        if (a >= p)
          return t;
        var v = a - Ar(l);
        if (v < 1)
          return l;
        var y = w ? Bn(w, 0, v).join("") : t.slice(0, v);
        if (u === o)
          return y + l;
        if (w && (v += y.length - v), Xl(u)) {
          if (t.slice(v).search(u)) {
            var M, b = y;
            for (u.global || (u = fl(u.source, fe(pd.exec(u)) + "g")), u.lastIndex = 0; M = u.exec(b); )
              var J = M.index;
            y = y.slice(0, J === o ? v : J);
          }
        } else if (t.indexOf(ft(u), v) != v) {
          var B = y.lastIndexOf(u);
          B > -1 && (y = y.slice(0, B));
        }
        return y + l;
      }
      function BN(t) {
        return t = fe(t), t && j1.test(t) ? t.replace(dd, f0) : t;
      }
      var _N = Ir(function(t, n, a) {
        return t + (a ? " " : "") + n.toUpperCase();
      }), Kl = If("toUpperCase");
      function Bh(t, n, a) {
        return t = fe(t), n = a ? o : n, n === o ? s0(t) ? m0(t) : qV(t) : t.match(n) || [];
      }
      var _h = re(function(t, n) {
        try {
          return ut(t, o, n);
        } catch (a) {
          return $l(a) ? a : new L(a);
        }
      }), IN = Vn(function(t, n) {
        return kt(n, function(a) {
          a = on(a), wn(t, a, Hl(t[a], t));
        }), t;
      });
      function DN(t) {
        var n = t == null ? 0 : t.length, a = G();
        return t = n ? Ne(t, function(l) {
          if (typeof l[1] != "function")
            throw new Mt(d);
          return [a(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var u = -1; ++u < n; ) {
            var p = t[u];
            if (ut(p[0], this, l))
              return ut(p[1], this, l);
          }
        });
      }
      function ON(t) {
        return fg(Zt(t, T));
      }
      function ec(t) {
        return function() {
          return t;
        };
      }
      function QN(t, n) {
        return t == null || t !== t ? n : t;
      }
      var zN = Of(), GN = Of(!0);
      function ot(t) {
        return t;
      }
      function tc(t) {
        return vf(typeof t == "function" ? t : Zt(t, T));
      }
      function YN(t) {
        return gf(Zt(t, T));
      }
      function PN(t, n) {
        return Tf(t, Zt(n, T));
      }
      var HN = re(function(t, n) {
        return function(a) {
          return Bo(a, t, n);
        };
      }), jN = re(function(t, n) {
        return function(a) {
          return Bo(t, a, n);
        };
      });
      function nc(t, n, a) {
        var l = We(n), u = ui(n, l);
        a == null && !(Re(n) && (u.length || !l.length)) && (a = n, n = t, t = this, u = ui(n, We(n)));
        var p = !(Re(a) && "chain" in a) || !!a.chain, w = Tn(t);
        return kt(u, function(v) {
          var y = n[v];
          t[v] = y, w && (t.prototype[v] = function() {
            var M = this.__chain__;
            if (p || M) {
              var b = t(this.__wrapped__), J = b.__actions__ = tt(this.__actions__);
              return J.push({ func: y, args: arguments, thisArg: t }), b.__chain__ = M, b;
            }
            return y.apply(t, Jn([this.value()], arguments));
          });
        }), t;
      }
      function $N() {
        return Oe._ === this && (Oe._ = U0), this;
      }
      function rc() {
      }
      function XN(t) {
        return t = ee(t), re(function(n) {
          return Uf(n, t);
        });
      }
      var LN = Cl(Ne), qN = Cl(Od), KN = Cl(al);
      function Ih(t) {
        return Ol(t) ? il(on(t)) : Sg(t);
      }
      function eR(t) {
        return function(n) {
          return t == null ? o : ar(t, n);
        };
      }
      var tR = zf(), nR = zf(!0);
      function oc() {
        return [];
      }
      function ac() {
        return !1;
      }
      function rR() {
        return {};
      }
      function oR() {
        return "";
      }
      function aR() {
        return !0;
      }
      function iR(t, n) {
        if (t = ee(t), t < 1 || t > Xe)
          return [];
        var a = tn, l = Pe(t, tn);
        n = G(n), t -= tn;
        for (var u = cl(l, n); ++a < t; )
          n(a);
        return u;
      }
      function sR(t) {
        return q(t) ? Ne(t, on) : ht(t) ? [t] : tt(ah(fe(t)));
      }
      function lR(t) {
        var n = ++g0;
        return fe(t) + n;
      }
      var cR = wi(function(t, n) {
        return t + n;
      }, 0), uR = Wl("ceil"), dR = wi(function(t, n) {
        return t / n;
      }, 1), fR = Wl("floor");
      function hR(t) {
        return t && t.length ? ci(t, ot, Tl) : o;
      }
      function pR(t, n) {
        return t && t.length ? ci(t, G(n, 2), Tl) : o;
      }
      function mR(t) {
        return Gd(t, ot);
      }
      function wR(t, n) {
        return Gd(t, G(n, 2));
      }
      function vR(t) {
        return t && t.length ? ci(t, ot, Rl) : o;
      }
      function VR(t, n) {
        return t && t.length ? ci(t, G(n, 2), Rl) : o;
      }
      var gR = wi(function(t, n) {
        return t * n;
      }, 1), TR = Wl("round"), UR = wi(function(t, n) {
        return t - n;
      }, 0);
      function yR(t) {
        return t && t.length ? ll(t, ot) : 0;
      }
      function NR(t, n) {
        return t && t.length ? ll(t, G(n, 2)) : 0;
      }
      return h.after = YU, h.ary = wh, h.assign = Ay, h.assignIn = Eh, h.assignInWith = Si, h.assignWith = Fy, h.at = Cy, h.before = vh, h.bind = Hl, h.bindAll = IN, h.bindKey = Vh, h.castArray = ry, h.chain = hh, h.chunk = fT, h.compact = hT, h.concat = pT, h.cond = DN, h.conforms = ON, h.constant = ec, h.countBy = yU, h.create = Wy, h.curry = gh, h.curryRight = Th, h.debounce = Uh, h.defaults = xy, h.defaultsDeep = By, h.defer = PU, h.delay = HU, h.difference = mT, h.differenceBy = wT, h.differenceWith = vT, h.drop = VT, h.dropRight = gT, h.dropRightWhile = TT, h.dropWhile = UT, h.fill = yT, h.filter = RU, h.flatMap = bU, h.flatMapDeep = ZU, h.flatMapDepth = SU, h.flatten = ch, h.flattenDeep = NT, h.flattenDepth = RT, h.flip = jU, h.flow = zN, h.flowRight = GN, h.fromPairs = kT, h.functions = Gy, h.functionsIn = Yy, h.groupBy = EU, h.initial = bT, h.intersection = ZT, h.intersectionBy = ST, h.intersectionWith = ET, h.invert = Hy, h.invertBy = jy, h.invokeMap = AU, h.iteratee = tc, h.keyBy = FU, h.keys = We, h.keysIn = rt, h.map = Ni, h.mapKeys = Xy, h.mapValues = Ly, h.matches = YN, h.matchesProperty = PN, h.memoize = ki, h.merge = qy, h.mergeWith = Jh, h.method = HN, h.methodOf = jN, h.mixin = nc, h.negate = Mi, h.nthArg = XN, h.omit = Ky, h.omitBy = eN, h.once = $U, h.orderBy = CU, h.over = LN, h.overArgs = XU, h.overEvery = qN, h.overSome = KN, h.partial = jl, h.partialRight = yh, h.partition = WU, h.pick = tN, h.pickBy = Ah, h.property = Ih, h.propertyOf = eR, h.pull = CT, h.pullAll = dh, h.pullAllBy = WT, h.pullAllWith = xT, h.pullAt = BT, h.range = tR, h.rangeRight = nR, h.rearg = LU, h.reject = _U, h.remove = _T, h.rest = qU, h.reverse = Yl, h.sampleSize = DU, h.set = rN, h.setWith = oN, h.shuffle = OU, h.slice = IT, h.sortBy = GU, h.sortedUniq = PT, h.sortedUniqBy = HT, h.split = bN, h.spread = KU, h.tail = jT, h.take = $T, h.takeRight = XT, h.takeRightWhile = LT, h.takeWhile = qT, h.tap = hU, h.throttle = ey, h.thru = yi, h.toArray = bh, h.toPairs = Fh, h.toPairsIn = Ch, h.toPath = sR, h.toPlainObject = Sh, h.transform = aN, h.unary = ty, h.union = KT, h.unionBy = eU, h.unionWith = tU, h.uniq = nU, h.uniqBy = rU, h.uniqWith = oU, h.unset = iN, h.unzip = Pl, h.unzipWith = fh, h.update = sN, h.updateWith = lN, h.values = Qr, h.valuesIn = cN, h.without = aU, h.words = Bh, h.wrap = ny, h.xor = iU, h.xorBy = sU, h.xorWith = lU, h.zip = cU, h.zipObject = uU, h.zipObjectDeep = dU, h.zipWith = fU, h.entries = Fh, h.entriesIn = Ch, h.extend = Eh, h.extendWith = Si, nc(h, h), h.add = cR, h.attempt = _h, h.camelCase = hN, h.capitalize = Wh, h.ceil = uR, h.clamp = uN, h.clone = oy, h.cloneDeep = iy, h.cloneDeepWith = sy, h.cloneWith = ay, h.conformsTo = ly, h.deburr = xh, h.defaultTo = QN, h.divide = dR, h.endsWith = pN, h.eq = Gt, h.escape = mN, h.escapeRegExp = wN, h.every = NU, h.find = kU, h.findIndex = sh, h.findKey = _y, h.findLast = MU, h.findLastIndex = lh, h.findLastKey = Iy, h.floor = fR, h.forEach = ph, h.forEachRight = mh, h.forIn = Dy, h.forInRight = Oy, h.forOwn = Qy, h.forOwnRight = zy, h.get = Ll, h.gt = cy, h.gte = uy, h.has = Py, h.hasIn = ql, h.head = uh, h.identity = ot, h.includes = JU, h.indexOf = MT, h.inRange = dN, h.invoke = $y, h.isArguments = lr, h.isArray = q, h.isArrayBuffer = dy, h.isArrayLike = nt, h.isArrayLikeObject = Me, h.isBoolean = fy, h.isBuffer = _n, h.isDate = hy, h.isElement = py, h.isEmpty = my, h.isEqual = wy, h.isEqualWith = vy, h.isError = $l, h.isFinite = Vy, h.isFunction = Tn, h.isInteger = Nh, h.isLength = bi, h.isMap = Rh, h.isMatch = gy, h.isMatchWith = Ty, h.isNaN = Uy, h.isNative = yy, h.isNil = Ry, h.isNull = Ny, h.isNumber = kh, h.isObject = Re, h.isObjectLike = ke, h.isPlainObject = zo, h.isRegExp = Xl, h.isSafeInteger = ky, h.isSet = Mh, h.isString = Zi, h.isSymbol = ht, h.isTypedArray = Or, h.isUndefined = My, h.isWeakMap = by, h.isWeakSet = Zy, h.join = JT, h.kebabCase = vN, h.last = Et, h.lastIndexOf = AT, h.lowerCase = VN, h.lowerFirst = gN, h.lt = Sy, h.lte = Ey, h.max = hR, h.maxBy = pR, h.mean = mR, h.meanBy = wR, h.min = vR, h.minBy = VR, h.stubArray = oc, h.stubFalse = ac, h.stubObject = rR, h.stubString = oR, h.stubTrue = aR, h.multiply = gR, h.nth = FT, h.noConflict = $N, h.noop = rc, h.now = Ri, h.pad = TN, h.padEnd = UN, h.padStart = yN, h.parseInt = NN, h.random = fN, h.reduce = xU, h.reduceRight = BU, h.repeat = RN, h.replace = kN, h.result = nN, h.round = TR, h.runInContext = U, h.sample = IU, h.size = QU, h.snakeCase = MN, h.some = zU, h.sortedIndex = DT, h.sortedIndexBy = OT, h.sortedIndexOf = QT, h.sortedLastIndex = zT, h.sortedLastIndexBy = GT, h.sortedLastIndexOf = YT, h.startCase = ZN, h.startsWith = SN, h.subtract = UR, h.sum = yR, h.sumBy = NR, h.template = EN, h.times = iR, h.toFinite = Un, h.toInteger = ee, h.toLength = Zh, h.toLower = JN, h.toNumber = Jt, h.toSafeInteger = Jy, h.toString = fe, h.toUpper = AN, h.trim = FN, h.trimEnd = CN, h.trimStart = WN, h.truncate = xN, h.unescape = BN, h.uniqueId = lR, h.upperCase = _N, h.upperFirst = Kl, h.each = ph, h.eachRight = mh, h.first = uh, nc(h, function() {
        var t = {};
        return nn(h, function(n, a) {
          he.call(h.prototype, a) || (t[a] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, kt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), kt(["drop", "take"], function(t, n) {
        ae.prototype[t] = function(a) {
          a = a === o ? 1 : Ae(ee(a), 0);
          var l = this.__filtered__ && !n ? new ae(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Pe(a, l.__takeCount__) : l.__views__.push({
            size: Pe(a, tn),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ae.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), kt(["filter", "map", "takeWhile"], function(t, n) {
        var a = n + 1, l = a == ve || a == Ie;
        ae.prototype[t] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(u, 3),
            type: a
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), kt(["head", "last"], function(t, n) {
        var a = "take" + (n ? "Right" : "");
        ae.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), kt(["initial", "tail"], function(t, n) {
        var a = "drop" + (n ? "" : "Right");
        ae.prototype[t] = function() {
          return this.__filtered__ ? new ae(this) : this[a](1);
        };
      }), ae.prototype.compact = function() {
        return this.filter(ot);
      }, ae.prototype.find = function(t) {
        return this.filter(t).head();
      }, ae.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ae.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ae(this) : this.map(function(a) {
          return Bo(a, t, n);
        });
      }), ae.prototype.reject = function(t) {
        return this.filter(Mi(G(t)));
      }, ae.prototype.slice = function(t, n) {
        t = ee(t);
        var a = this;
        return a.__filtered__ && (t > 0 || n < 0) ? new ae(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), n !== o && (n = ee(n), a = n < 0 ? a.dropRight(-n) : a.take(n - t)), a);
      }, ae.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ae.prototype.toArray = function() {
        return this.take(tn);
      }, nn(ae.prototype, function(t, n) {
        var a = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), u = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var w = this.__wrapped__, v = l ? [1] : arguments, y = w instanceof ae, M = v[0], b = y || q(w), J = function(oe) {
            var ie = u.apply(h, Jn([oe], v));
            return l && B ? ie[0] : ie;
          };
          b && a && typeof M == "function" && M.length != 1 && (y = b = !1);
          var B = this.__chain__, D = !!this.__actions__.length, Y = p && !B, te = y && !D;
          if (!p && b) {
            w = te ? w : new ae(this);
            var P = t.apply(w, v);
            return P.__actions__.push({ func: yi, args: [J], thisArg: o }), new bt(P, B);
          }
          return Y && te ? t.apply(this, v) : (P = this.thru(J), Y ? l ? P.value()[0] : P.value() : P);
        });
      }), kt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = ja[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), nn(ae.prototype, function(t, n) {
        var a = h[n];
        if (a) {
          var l = a.name + "";
          he.call(xr, l) || (xr[l] = []), xr[l].push({ name: n, func: a });
        }
      }), xr[mi(o, A).name] = [{
        name: "wrapper",
        func: o
      }], ae.prototype.clone = B0, ae.prototype.reverse = _0, ae.prototype.value = I0, h.prototype.at = pU, h.prototype.chain = mU, h.prototype.commit = wU, h.prototype.next = vU, h.prototype.plant = gU, h.prototype.reverse = TU, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = UU, h.prototype.first = h.prototype.head, Eo && (h.prototype[Eo] = VU), h;
    }, Fr = w0();
    er ? ((er.exports = Fr)._ = Fr, tl._ = Fr) : Oe._ = Fr;
  }).call(Go);
})(ge, ge.exports);
const zk = "/alarms?_s=", ks = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Gk = async (e, r) => {
  try {
    return (await fn.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      ks
    )).status === 204;
  } catch {
    return !1;
  }
}, Yk = async (e, r) => {
  try {
    return (await fn.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      ks
    )).status === 204;
  } catch {
    return !1;
  }
}, Pk = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await Zn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      ks
    )).status == 204;
  } catch {
    return !1;
  }
}, Hk = async () => {
  try {
    const e = `${zk}isSituation==true&limit=0`, r = await Zn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, jk = async (e) => {
  try {
    const r = e.join(",id=="), o = await Zn(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, ev = async (e) => {
  try {
    const r = await Zn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, $k = async (e) => {
  try {
    const r = await Zn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, Xk = async () => {
  try {
    const e = await Zn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => ge.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Lk = async (e, r, o) => {
  try {
    return (await Zn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      ks
    )).status == 204;
  } catch {
    return !1;
  }
}, qk = async (e, r) => {
  try {
    return (await Zn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, Kk = async () => {
  try {
    const e = await Zn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, eM = window.Pinia.defineStore, Sn = eM("situationsStore", {
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
      const e = await Xk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Hk();
      if (e) {
        const r = e.alarm.map((s) => {
          var c;
          return s.status = (c = s.parameters.filter(
            (d) => d.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, s;
        });
        this.filteredSituations = r.map((s) => s.id);
        const o = ge.exports.groupBy(r, "status"), i = [
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
        const i = await ev(e);
        if (i) {
          const s = (r = i.relatedAlarms) == null ? void 0 : r.map((f) => f.id), d = await jk(s);
          i.status = (o = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, i.alarms = ge.exports.sortBy(d, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (i) => {
          const s = await $k(i);
          s && (o[i] = ge.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await Kk();
      e && (this.unassignedAlarms = e);
    }
  }
}), tM = window.Vue.openBlock, nM = window.Vue.createElementBlock, rM = window.Vue.createElementVNode;
var oM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const aM = {}, iM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sM = /* @__PURE__ */ rM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), lM = [
  sM
];
function cM(e, r) {
  return tM(), nM("svg", iM, lM);
}
var Ra = /* @__PURE__ */ oM(aM, [["render", cM]]);
var uM = Object.defineProperty, up = Object.getOwnPropertySymbols, dM = Object.prototype.hasOwnProperty, fM = Object.prototype.propertyIsEnumerable, dp = (e, r, o) => r in e ? uM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, fp = (e, r) => {
  for (var o in r || (r = {}))
    dM.call(r, o) && dp(e, o, r[o]);
  if (up)
    for (var o of up(r))
      fM.call(r, o) && dp(e, o, r[o]);
  return e;
};
const hM = window.Vue.defineComponent, pM = window.Vue.toRaw, Uc = window.Vue.h;
var mM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const wM = {
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
}, vM = hM({
  props: wM,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((s, c) => (s[c] = !0, s), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let i = pM(this.icon);
    return this.$slots.default ? Uc("span", { class: "feather-icon-container" }, [
      Uc(this.$slots.default()[0], fp({
        class: r
      }, o))
    ]) : Uc(i, fp({
      class: r
    }, o));
  }
});
var $ = /* @__PURE__ */ mM(vM, [["__scopeId", "data-v-52cbf270"]]);
const VM = window.Vue.openBlock, gM = window.Vue.createElementBlock, TM = window.Vue.createElementVNode;
var UM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const yM = {}, NM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RM = /* @__PURE__ */ TM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), kM = [
  RM
];
function MM(e, r) {
  return VM(), gM("svg", NM, kM);
}
var tv = /* @__PURE__ */ UM(yM, [["render", MM]]);
const Ut = {
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
function cn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function Te(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function Ce(e) {
  Te(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function bM(e, r) {
  Te(2, arguments);
  var o = Ce(e), i = cn(r);
  return isNaN(i) ? new Date(NaN) : (i && o.setDate(o.getDate() + i), o);
}
function ZM(e, r) {
  Te(2, arguments);
  var o = Ce(e).getTime(), i = cn(r);
  return new Date(o + i);
}
var SM = {};
function vo() {
  return SM;
}
function hp(e, r) {
  var o, i, s, c, d, f, m, V;
  Te(1, arguments);
  var g = vo(), T = cn((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : g.weekStartsOn) !== null && i !== void 0 ? i : (m = g.locale) === null || m === void 0 || (V = m.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = Ce(e), F = N.getDay(), E = (F < T ? 7 : 0) + F - T;
  return N.setDate(N.getDate() - E), N.setHours(0, 0, 0, 0), N;
}
function uu(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function pp(e) {
  Te(1, arguments);
  var r = Ce(e);
  return r.setHours(0, 0, 0, 0), r;
}
function EM(e, r) {
  Te(2, arguments);
  var o = Ce(e), i = Ce(r), s = o.getTime() - i.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function nv(e, r) {
  Te(2, arguments);
  var o = pp(e), i = pp(r);
  return o.getTime() === i.getTime();
}
function JM(e) {
  return Te(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function AM(e) {
  if (Te(1, arguments), !JM(e) && typeof e != "number")
    return !1;
  var r = Ce(e);
  return !isNaN(Number(r));
}
function FM(e, r) {
  Te(2, arguments);
  var o = cn(r);
  return ZM(e, -o);
}
var CM = 864e5;
function WM(e) {
  Te(1, arguments);
  var r = Ce(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var i = r.getTime(), s = o - i;
  return Math.floor(s / CM) + 1;
}
function ds(e) {
  Te(1, arguments);
  var r = 1, o = Ce(e), i = o.getUTCDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setUTCDate(o.getUTCDate() - s), o.setUTCHours(0, 0, 0, 0), o;
}
function rv(e) {
  Te(1, arguments);
  var r = Ce(e), o = r.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(o + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = ds(i), c = new Date(0);
  c.setUTCFullYear(o, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = ds(c);
  return r.getTime() >= s.getTime() ? o + 1 : r.getTime() >= d.getTime() ? o : o - 1;
}
function xM(e) {
  Te(1, arguments);
  var r = rv(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = ds(o);
  return i;
}
var BM = 6048e5;
function _M(e) {
  Te(1, arguments);
  var r = Ce(e), o = ds(r).getTime() - xM(r).getTime();
  return Math.round(o / BM) + 1;
}
function fs(e, r) {
  var o, i, s, c, d, f, m, V;
  Te(1, arguments);
  var g = vo(), T = cn((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : g.weekStartsOn) !== null && i !== void 0 ? i : (m = g.locale) === null || m === void 0 || (V = m.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = Ce(e), F = N.getUTCDay(), E = (F < T ? 7 : 0) + F - T;
  return N.setUTCDate(N.getUTCDate() - E), N.setUTCHours(0, 0, 0, 0), N;
}
function ov(e, r) {
  var o, i, s, c, d, f, m, V;
  Te(1, arguments);
  var g = Ce(e), T = g.getUTCFullYear(), N = vo(), F = cn((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = N.locale) === null || m === void 0 || (V = m.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = new Date(0);
  E.setUTCFullYear(T + 1, 0, F), E.setUTCHours(0, 0, 0, 0);
  var Z = fs(E, r), C = new Date(0);
  C.setUTCFullYear(T, 0, F), C.setUTCHours(0, 0, 0, 0);
  var A = fs(C, r);
  return g.getTime() >= Z.getTime() ? T + 1 : g.getTime() >= A.getTime() ? T : T - 1;
}
function IM(e, r) {
  var o, i, s, c, d, f, m, V;
  Te(1, arguments);
  var g = vo(), T = cn((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : g.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = g.locale) === null || m === void 0 || (V = m.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), N = ov(e, r), F = new Date(0);
  F.setUTCFullYear(N, 0, T), F.setUTCHours(0, 0, 0, 0);
  var E = fs(F, r);
  return E;
}
var DM = 6048e5;
function OM(e, r) {
  Te(1, arguments);
  var o = Ce(e), i = fs(o, r).getTime() - IM(o, r).getTime();
  return Math.round(i / DM) + 1;
}
function pe(e, r) {
  for (var o = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < r; )
    i = "0" + i;
  return o + i;
}
var QM = {
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
const In = QM;
var Yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zM = {
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
    var s = ov(e, i), c = s > 0 ? s : 1 - s;
    if (r === "YY") {
      var d = c % 100;
      return pe(d, 2);
    }
    return r === "Yo" ? o.ordinalNumber(c, {
      unit: "year"
    }) : pe(c, r.length);
  },
  R: function(e, r) {
    var o = rv(e);
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
    var s = OM(e, i);
    return r === "wo" ? o.ordinalNumber(s, {
      unit: "week"
    }) : pe(s, r.length);
  },
  I: function(e, r, o) {
    var i = _M(e);
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
    var i = WM(e);
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
        return wp(c);
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
        return wp(c);
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
        return "GMT" + mp(c, ":");
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
        return "GMT" + mp(c, ":");
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
function mp(e, r) {
  var o = e > 0 ? "-" : "+", i = Math.abs(e), s = Math.floor(i / 60), c = i % 60;
  if (c === 0)
    return o + String(s);
  var d = r || "";
  return o + String(s) + d + pe(c, 2);
}
function wp(e, r) {
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
const GM = zM;
var vp = function(e, r) {
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
}, av = function(e, r) {
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
}, YM = function(e, r) {
  var o = e.match(/(P+)(p+)?/) || [], i = o[1], s = o[2];
  if (!s)
    return vp(e, r);
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
  return c.replace("{{date}}", vp(i, r)).replace("{{time}}", av(s, r));
}, PM = {
  p: av,
  P: YM
};
const HM = PM;
var jM = ["D", "DD"], $M = ["YY", "YYYY"];
function XM(e) {
  return jM.indexOf(e) !== -1;
}
function LM(e) {
  return $M.indexOf(e) !== -1;
}
function Vp(e, r, o) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var qM = {
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
}, KM = function(e, r, o) {
  var i, s = qM[e];
  return typeof s == "string" ? i = s : r === 1 ? i = s.one : i = s.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + i : i + " ago" : i;
};
const eb = KM;
function yc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, i = e.formats[o] || e.formats[e.defaultWidth];
    return i;
  };
}
var tb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ob = {
  date: yc({
    formats: tb,
    defaultWidth: "full"
  }),
  time: yc({
    formats: nb,
    defaultWidth: "full"
  }),
  dateTime: yc({
    formats: rb,
    defaultWidth: "full"
  })
};
const ab = ob;
var ib = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, sb = function(e, r, o, i) {
  return ib[e];
};
const lb = sb;
function Yo(e) {
  return function(r, o) {
    var i = o != null && o.context ? String(o.context) : "standalone", s;
    if (i === "formatting" && e.formattingValues) {
      var c = e.defaultFormattingWidth || e.defaultWidth, d = o != null && o.width ? String(o.width) : c;
      s = e.formattingValues[d] || e.formattingValues[c];
    } else {
      var f = e.defaultWidth, m = o != null && o.width ? String(o.width) : e.defaultWidth;
      s = e.values[m] || e.values[f];
    }
    var V = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[V];
  };
}
var cb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ub = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, db = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, fb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, hb = {
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
}, pb = {
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
}, mb = function(e, r) {
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
}, wb = {
  ordinalNumber: mb,
  era: Yo({
    values: cb,
    defaultWidth: "wide"
  }),
  quarter: Yo({
    values: ub,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Yo({
    values: db,
    defaultWidth: "wide"
  }),
  day: Yo({
    values: fb,
    defaultWidth: "wide"
  }),
  dayPeriod: Yo({
    values: hb,
    defaultWidth: "wide",
    formattingValues: pb,
    defaultFormattingWidth: "wide"
  })
};
const vb = wb;
function Po(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, s = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], c = r.match(s);
    if (!c)
      return null;
    var d = c[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? gb(f, function(T) {
      return T.test(d);
    }) : Vb(f, function(T) {
      return T.test(d);
    }), V;
    V = e.valueCallback ? e.valueCallback(m) : m, V = o.valueCallback ? o.valueCallback(V) : V;
    var g = r.slice(d.length);
    return {
      value: V,
      rest: g
    };
  };
}
function Vb(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function gb(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function Tb(e) {
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
var Ub = /^(\d+)(th|st|nd|rd)?/i, yb = /\d+/i, Nb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rb = {
  any: [/^b/i, /^(a|c)/i]
}, kb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Mb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zb = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Sb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Eb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Jb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ab = {
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
}, Fb = {
  ordinalNumber: Tb({
    matchPattern: Ub,
    parsePattern: yb,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Po({
    matchPatterns: Nb,
    defaultMatchWidth: "wide",
    parsePatterns: Rb,
    defaultParseWidth: "any"
  }),
  quarter: Po({
    matchPatterns: kb,
    defaultMatchWidth: "wide",
    parsePatterns: Mb,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Po({
    matchPatterns: bb,
    defaultMatchWidth: "wide",
    parsePatterns: Zb,
    defaultParseWidth: "any"
  }),
  day: Po({
    matchPatterns: Sb,
    defaultMatchWidth: "wide",
    parsePatterns: Eb,
    defaultParseWidth: "any"
  }),
  dayPeriod: Po({
    matchPatterns: Jb,
    defaultMatchWidth: "any",
    parsePatterns: Ab,
    defaultParseWidth: "any"
  })
};
const Cb = Fb;
var Wb = {
  code: "en-US",
  formatDistance: eb,
  formatLong: ab,
  formatRelative: lb,
  localize: vb,
  match: Cb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const iv = Wb;
var xb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _b = /^'([^]*?)'?$/, Ib = /''/g, Db = /[a-zA-Z]/;
function Ob(e, r, o) {
  var i, s, c, d, f, m, V, g, T, N, F, E, Z, C, A, W, x, X;
  Te(2, arguments);
  var S = String(r), Q = vo(), O = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : Q.locale) !== null && i !== void 0 ? i : iv, _ = cn((c = (d = (f = (m = o == null ? void 0 : o.firstWeekContainsDate) !== null && m !== void 0 ? m : o == null || (V = o.locale) === null || V === void 0 || (g = V.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : Q.firstWeekContainsDate) !== null && d !== void 0 ? d : (T = Q.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(_ >= 1 && _ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var H = cn((F = (E = (Z = (C = o == null ? void 0 : o.weekStartsOn) !== null && C !== void 0 ? C : o == null || (A = o.locale) === null || A === void 0 || (W = A.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && Z !== void 0 ? Z : Q.weekStartsOn) !== null && E !== void 0 ? E : (x = Q.locale) === null || x === void 0 || (X = x.options) === null || X === void 0 ? void 0 : X.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(H >= 0 && H <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ce(e);
  if (!AM(K))
    throw new RangeError("Invalid time value");
  var j = uu(K), z = FM(K, j), se = {
    firstWeekContainsDate: _,
    weekStartsOn: H,
    locale: O,
    _originalDate: K
  }, ve = S.match(Bb).map(function(de) {
    var Ie = de[0];
    if (Ie === "p" || Ie === "P") {
      var De = HM[Ie];
      return De(de, O.formatLong);
    }
    return de;
  }).join("").match(xb).map(function(de) {
    if (de === "''")
      return "'";
    var Ie = de[0];
    if (Ie === "'")
      return Qb(de);
    var De = GM[Ie];
    if (De)
      return !(o != null && o.useAdditionalWeekYearTokens) && LM(de) && Vp(de, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && XM(de) && Vp(de, r, String(e)), De(z, de, O.localize, se);
    if (Ie.match(Db))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ie + "`");
    return de;
  }).join("");
  return ve;
}
function Qb(e) {
  var r = e.match(_b);
  return r ? r[1].replace(Ib, "'") : e;
}
function sv(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function zb(e) {
  return sv({}, e);
}
var gp = 1e3 * 60, hs = 60 * 24, Tp = hs * 30, Up = hs * 365;
function Ms(e, r, o) {
  var i, s, c;
  Te(2, arguments);
  var d = vo(), f = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : d.locale) !== null && i !== void 0 ? i : iv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = EM(e, r);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var V = sv(zb(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: m
  }), g, T;
  m > 0 ? (g = Ce(r), T = Ce(e)) : (g = Ce(e), T = Ce(r));
  var N = String((c = o == null ? void 0 : o.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (N === "floor")
    F = Math.floor;
  else if (N === "ceil")
    F = Math.ceil;
  else if (N === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var E = T.getTime() - g.getTime(), Z = E / gp, C = uu(T) - uu(g), A = (E - C) / gp, W = o == null ? void 0 : o.unit, x;
  if (W ? x = String(W) : Z < 1 ? x = "second" : Z < 60 ? x = "minute" : Z < hs ? x = "hour" : A < Tp ? x = "day" : A < Up ? x = "month" : x = "year", x === "second") {
    var X = F(E / 1e3);
    return f.formatDistance("xSeconds", X, V);
  } else if (x === "minute") {
    var S = F(Z);
    return f.formatDistance("xMinutes", S, V);
  } else if (x === "hour") {
    var Q = F(Z / 60);
    return f.formatDistance("xHours", Q, V);
  } else if (x === "day") {
    var O = F(A / hs);
    return f.formatDistance("xDays", O, V);
  } else if (x === "month") {
    var _ = F(A / Tp);
    return _ === 12 && W !== "month" ? f.formatDistance("xYears", 1, V) : f.formatDistance("xMonths", _, V);
  } else if (x === "year") {
    var H = F(A / Up);
    return f.formatDistance("xYears", H, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Gb(e, r, o) {
  Te(2, arguments);
  var i = hp(e, o), s = hp(r, o);
  return i.getTime() === s.getTime();
}
function Yb(e, r) {
  return Te(1, arguments), Gb(e, Date.now(), r);
}
function Pb(e) {
  return Te(1, arguments), nv(e, Date.now());
}
function Hb(e, r) {
  Te(2, arguments);
  var o = cn(r);
  return bM(e, -o);
}
function jb(e) {
  return Te(1, arguments), nv(e, Hb(Date.now(), 1));
}
const un = (e) => {
  let r = "";
  if (e)
    try {
      r = Ob(new Date(e), Ut.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, lv = (e, r) => {
  const o = e.length > r ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, r) + o;
}, cv = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (i) => Pb(i.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (i) => jb(i.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (i) => Yb(i.firstEventTime)
      );
      break;
  }
  return o;
}, $b = window.Vue.defineComponent, vt = window.Vue.unref, yp = window.Vue.normalizeClass, sn = window.Vue.createElementVNode, Pr = window.Vue.toDisplayString, Np = window.Vue.createVNode, cr = window.Vue.openBlock, ur = window.Vue.createElementBlock, Ei = window.Vue.createCommentVNode, du = window.Vue.createTextVNode, Xb = window.Vue.renderList, Lb = window.Vue.Fragment, qb = window.Vue.pushScopeId, Kb = window.Vue.popScopeId, Fu = (e) => (qb("data-v-d97f7aa6"), e = e(), Kb(), e), e2 = { class: "content" }, t2 = { class: "title-row" }, n2 = { class: "title" }, r2 = {
  key: 0,
  class: "accepted"
}, o2 = {
  key: 1,
  class: "rejected"
}, a2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ sn("span", { class: "info-title" }, " Duration: ", -1)), i2 = { key: 0 }, s2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ sn("span", { class: "info-title" }, " First Event: ", -1)), l2 = { class: "description" }, c2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ sn("hr", null, null, -1)), u2 = {
  key: 1,
  class: "count-info"
}, d2 = /* @__PURE__ */ du(" Alarms: "), f2 = { class: "info-title" }, h2 = /* @__PURE__ */ $b({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, i = Ut.ACCEPTED, s = Ut.REJECTED, c = new Date().getTime(), d = () => {
      var f;
      r("situation-selected", (f = o.situationInfo) == null ? void 0 : f.id);
    };
    return (f, m) => {
      var V, g, T;
      return cr(), ur("div", {
        onClick: d,
        class: yp(["card", {
          rejected: o.situationInfo.status == vt(s)
        }])
      }, [
        sn("div", {
          class: yp(["severity-line", [`${(g = (V = o.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        sn("div", e2, [
          sn("div", t2, [
            sn("div", n2, "Situation " + Pr((T = o.situationInfo) == null ? void 0 : T.id), 1),
            o.situationInfo.status == vt(i) ? (cr(), ur("div", r2, [
              Np(vt($), {
                icon: vt(Ra),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ei("", !0),
            o.situationInfo.status == vt(s) ? (cr(), ur("div", o2, [
              Np(vt($), {
                icon: vt(tv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ei("", !0)
          ]),
          sn("div", null, [
            a2,
            du(" " + Pr(vt(Ms)(
              vt(c),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Ei("", !0) : (cr(), ur("div", i2, [
            s2,
            du(Pr(vt(un)(o.situationInfo.firstEventTime)), 1)
          ])),
          sn("div", l2, Pr(vt(lv)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          c2,
          o.situationInfo.relatedAlarms ? (cr(), ur("div", u2, [
            d2,
            sn("span", f2, Pr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Ei("", !0),
          (cr(!0), ur(Lb, null, Xb(vt(ge.exports.keys)(
            vt(ge.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (N) => (cr(), ur("div", {
            class: "info-title",
            key: N
          }, " - " + Pr(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const uv = /* @__PURE__ */ we(h2, [["__scopeId", "data-v-d97f7aa6"]]), p2 = window.Vue.openBlock, m2 = window.Vue.createElementBlock, w2 = window.Vue.createElementVNode;
var v2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const V2 = {}, g2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, T2 = /* @__PURE__ */ w2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), U2 = [
  T2
];
function y2(e, r) {
  return p2(), m2("svg", g2, U2);
}
var N2 = /* @__PURE__ */ v2(V2, [["render", y2]]);
const R2 = window.Vue.openBlock, k2 = window.Vue.createElementBlock, dv = window.Vue.createElementVNode;
var M2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const b2 = {}, Z2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S2 = /* @__PURE__ */ dv("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), E2 = /* @__PURE__ */ dv("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), J2 = [
  S2,
  E2
];
function A2(e, r) {
  return R2(), k2("svg", Z2, J2);
}
var F2 = /* @__PURE__ */ M2(b2, [["render", A2]]);
const C2 = window.Vue.openBlock, W2 = window.Vue.createElementBlock, x2 = window.Vue.createElementVNode;
var B2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const _2 = {}, I2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D2 = /* @__PURE__ */ x2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), O2 = [
  D2
];
function Q2(e, r) {
  return C2(), W2("svg", I2, O2);
}
var z2 = /* @__PURE__ */ B2(_2, [["render", Q2]]);
const G2 = window.Vue.openBlock, Y2 = window.Vue.createElementBlock, P2 = window.Vue.createElementVNode;
var H2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const j2 = {}, $2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X2 = /* @__PURE__ */ P2("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), L2 = [
  X2
];
function q2(e, r) {
  return G2(), Y2("svg", $2, L2);
}
var fv = /* @__PURE__ */ H2(j2, [["render", q2]]);
const K2 = window.Vue.defineComponent, Dn = window.Vue.unref, Ji = window.Vue.normalizeClass, Ai = window.Vue.createVNode, eZ = window.Vue.openBlock, tZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const nZ = { class: "paginator" }, rZ = /* @__PURE__ */ K2({
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
    return (s, c) => (eZ(), tZ("div", nZ, [
      Ai(Dn($), {
        icon: Dn(N2),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => i(0))
      }, null, 8, ["icon", "class"]),
      Ai(Dn($), {
        icon: Dn(z2),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => i(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ai(Dn($), {
        icon: Dn(fv),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => i(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ai(Dn($), {
        icon: Dn(F2),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => i(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const oZ = /* @__PURE__ */ we(rZ, [["__scopeId", "data-v-40758818"]]);
const le = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, aZ = window.Vue.computed, bs = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((i) => {
    o[`${i}Label`] = aZ(() => e.value[i] ? e.value[i] : r[i]);
  }), o;
};
const yr = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, Nr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var iZ = Object.defineProperty, sZ = Object.defineProperties, lZ = Object.getOwnPropertyDescriptors, Rp = Object.getOwnPropertySymbols, cZ = Object.prototype.hasOwnProperty, uZ = Object.prototype.propertyIsEnumerable, kp = (e, r, o) => r in e ? iZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Mp = (e, r) => {
  for (var o in r || (r = {}))
    cZ.call(r, o) && kp(e, o, r[o]);
  if (Rp)
    for (var o of Rp(r))
      uZ.call(r, o) && kp(e, o, r[o]);
  return e;
}, dZ = (e, r) => sZ(e, lZ(r));
const fZ = window.Vue.defineComponent, hZ = window.Vue.h;
var pZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const mZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, wZ = fZ({
  props: mZ,
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
        this.styles = dZ(Mp({}, s), {
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
      return hZ("div", {
        style: Mp({}, this.styles),
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
var Ln = /* @__PURE__ */ pZ(wZ, [["__scopeId", "data-v-18e2a5db"]]);
const vZ = window.Vue.openBlock, VZ = window.Vue.createElementBlock, gZ = window.Vue.createElementVNode;
var TZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const UZ = {}, yZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NZ = /* @__PURE__ */ gZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), RZ = [
  NZ
];
function kZ(e, r) {
  return vZ(), VZ("svg", yZ, RZ);
}
var Vo = /* @__PURE__ */ TZ(UZ, [["render", kZ]]);
const bp = window.Vue.computed, MZ = (e, r, o) => {
  const i = bp(() => r.value.filter((c) => !c.disabled)), s = bp(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (s.value === 0 ? o(i.value[i.value.length - 1]) : o(i.value[s.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (s.value === i.value.length - 1 ? o(i.value[0]) : o(i.value[s.value + 1]));
    }
  };
};
const bZ = window.Vue.openBlock, ZZ = window.Vue.createElementBlock, Cu = window.Vue.createElementVNode;
var SZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const EZ = {}, JZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AZ = /* @__PURE__ */ Cu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), FZ = /* @__PURE__ */ Cu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), CZ = /* @__PURE__ */ Cu("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), WZ = [
  AZ,
  FZ,
  CZ
];
function xZ(e, r) {
  return bZ(), ZZ("svg", JZ, WZ);
}
var BZ = /* @__PURE__ */ SZ(EZ, [["render", xZ]]), _Z = Object.defineProperty, IZ = Object.defineProperties, DZ = Object.getOwnPropertyDescriptors, Zp = Object.getOwnPropertySymbols, OZ = Object.prototype.hasOwnProperty, QZ = Object.prototype.propertyIsEnumerable, Sp = (e, r, o) => r in e ? _Z(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, hv = (e, r) => {
  for (var o in r || (r = {}))
    OZ.call(r, o) && Sp(e, o, r[o]);
  if (Zp)
    for (var o of Zp(r))
      QZ.call(r, o) && Sp(e, o, r[o]);
  return e;
}, pv = (e, r) => IZ(e, DZ(r));
const go = window.Vue.defineComponent, wa = window.Vue.resolveComponent, ln = window.Vue.openBlock, so = window.Vue.createElementBlock, zZ = window.Vue.createVNode, ps = window.Vue.createBlock, GZ = window.Vue.withModifiers, mo = window.Vue.inject, va = window.Vue.computed, YZ = window.Vue.normalizeClass, Hr = window.Vue.createElementVNode, ms = window.Vue.toDisplayString, as = window.Vue.renderSlot, sa = window.Vue.createCommentVNode, PZ = window.Vue.withDirectives, HZ = window.Vue.vShow, fu = window.Vue.ref, Ep = window.Vue.toRef, Jp = window.Vue.nextTick, hu = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Wu = window.Vue.provide, Ap = window.Vue.isRef, jZ = window.Vue.onBeforeUnmount;
var ka = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const $Z = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, XZ = go({
  props: $Z,
  components: {
    FeatherIcon: $
  }
}), LZ = ["title"];
function qZ(e, r, o, i, s, c) {
  const d = wa("FeatherIcon");
  return ln(), so("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    zZ(d, { icon: e.icon }, null, 8, ["icon"])
  ], 8, LZ);
}
var KZ = /* @__PURE__ */ ka(XZ, [["render", qZ], ["__scopeId", "data-v-4265058e"]]);
const eS = go({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Vo;
    }
  },
  components: {
    ActionIcon: KZ
  }
});
function tS(e, r, o, i, s, c) {
  const d = wa("ActionIcon");
  return ln(), ps(d, {
    onClick: r[0] || (r[0] = GZ((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var nS = /* @__PURE__ */ ka(eS, [["render", tS]]);
const rS = go({
  computed: {
    errorIcon() {
      return BZ;
    }
  },
  components: {
    FeatherIcon: $
  }
});
function oS(e, r, o, i, s, c) {
  const d = wa("FeatherIcon");
  return ln(), ps(d, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var aS = /* @__PURE__ */ ka(rS, [["render", oS], ["__scopeId", "data-v-0b8faef3"]]);
const iS = {
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
}, sS = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, lS = go({
  emits: sS,
  props: iS,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = mo("wrapperOptions", {}), r = mo("validationErrorMessage", !1), o = va(() => e.error ? e.error : r && r.value ? r.value : !1);
    return pv(hv({}, e), { error: o });
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
    ClearIcon: nS,
    ErrorIcon: aS
  }
}), cS = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, uS = ["for"], dS = { class: "prefix" }, fS = { class: "post" };
function hS(e, r, o, i, s, c) {
  const d = wa("ClearIcon"), f = wa("ErrorIcon");
  return ln(), so("div", {
    class: YZ(["feather-input-wrapper-container", e.containerCls])
  }, [
    Hr("fieldset", cS, [
      Hr("legend", null, ms(e.label), 1)
    ]),
    Hr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ms(e.label), 9, uS),
    Hr("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      Hr("div", dS, [
        as(e.$slots, "pre", {}, void 0, !0)
      ]),
      as(e.$slots, "default", {}, void 0, !0),
      Hr("div", fS, [
        e.showClear && e.computedClearText ? (ln(), ps(d, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : sa("", !0),
        e.error ? (ln(), ps(f, { key: 1 })) : sa("", !0),
        as(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var xu = /* @__PURE__ */ ka(lS, [["render", hS], ["__scopeId", "data-v-4db296db"]]);
const pS = go({
  setup() {
    const e = mo("subTextOptions", {}), r = mo("validationErrorMessage", !1), o = va(() => e.error ? e.error : r && r.value ? r.value : "");
    return pv(hv({}, e), { error: o });
  }
}), mS = { class: "feather-input-sub-text" }, wS = {
  key: 0,
  class: "feather-input-spacer"
}, vS = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, VS = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function gS(e, r, o, i, s, c) {
  return PZ((ln(), so("div", mS, [
    !e.hint && !e.error.length ? (ln(), so("div", wS, "\xA0")) : sa("", !0),
    e.hint && !e.error.length ? (ln(), so("div", vS, ms(e.hint), 1)) : sa("", !0),
    e.error.length > 0 ? (ln(), so("div", VS, ms(e.error), 1)) : sa("", !0),
    as(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [HZ, !e.inline || e.hint || e.error.length]
  ]);
}
var Ma = /* @__PURE__ */ ka(pS, [["render", gS], ["__scopeId", "data-v-8e0ac99e"]]);
const TS = {
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
go({
  props: TS,
  setup(e) {
    const r = mo("featherFormErrors", fu([])), o = Ep(e, "errorList"), i = va(() => {
      var g;
      return (g = o.value) != null && g.length ? o.value : r.value;
    }), s = Ep(e, "generalError"), c = (g) => {
      document.getElementById(g).focus();
    }, d = (g) => g.replace(/ \*$/, ""), f = fu(), m = (g) => `${d(g.label)} - ${g.message}`, V = va(() => (i.value.length && Jp(() => f.value.focus()), e.headingText(i.value)));
    return hu(s, (g) => {
      g.length && Jp(() => f.value.focus());
    }), {
      errors: i,
      errorsHeading: V,
      heading: f,
      focusElement: c,
      mainError: s,
      getFullMessage: m
    };
  }
});
const ba = (e, r, o, i, s) => {
  const c = mo("featherForm", !1);
  if (i && c && e.value) {
    const d = fu("");
    Wu("validationErrorMessage", d);
    const f = () => {
      if (s && Ap(s) && s.value)
        return d.value = s.value, {
          success: !1,
          message: s.value,
          inputId: e.value,
          label: o
        };
      try {
        return i.validateSync(r.value), d.value = "", { success: !0 };
      } catch (g) {
        const T = g;
        return d.value = T.errors[0], {
          success: !1,
          message: T.errors[0],
          inputId: e.value,
          label: o
        };
      }
    }, V = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return s && Ap(s) && hu(s, () => {
      c.runValidation();
    }), hu(e, (g, T) => {
      g && c && c.register(g, V), T && c && c.deregister(T);
    }, { immediate: !0 }), jZ(() => {
      c.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Za = (e) => ({
  inherittedAttrs: va(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Sa = {
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
}, Ea = (e) => {
  Wu("subTextOptions", e);
}, Bu = {
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
}, _u = (e) => {
  Wu("wrapperOptions", e);
}, Fi = window.Vue.ref, US = window.Vue.watch, yS = window.Vue.watchEffect, Fp = window.Vue.computed, Nc = window.Vue.provide, mv = (e, r, o, i, s) => {
  const c = Fi([]), d = Fi(), f = Fi(), m = Fi();
  yS(() => {
    if (!c.value.length)
      return;
    const A = c.value.map((W) => W.value);
    if (e.value !== void 0 && e.value !== null && (d.value = c.value[A.indexOf(e.value)]), !d.value && c.value.length) {
      let W = c.value.filter((x) => !x.disabled);
      W = W.length ? W : c.value, f.value = W[0], f.value.first = !0;
    }
  }), US(d, (A, W) => {
    W && (W.checked = !1), A && (A.checked = !0);
  });
  const V = (A) => {
    A && A.disabled || (f.value && (f.value.first = !1), d.value !== A && (r("update:modelValue", A.value), d.value = A, A.focus()));
  }, g = Fp(() => d.value || f.value), T = MZ(g, c, V), N = Fp(() => le("feather-radio-group"));
  m.value = N.value;
  const { validate: F } = ba(m, e, o, i, s);
  return Nc("register", (A) => {
    c.value = [...c.value, A], m.value === N.value && (m.value = A.id);
  }), Nc("select", V), Nc("blur", (A) => {
    r("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          d.value ? V(d.value) : f.value && V(f.value);
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
    validate: F,
    firstElementId: m,
    groupId: N
  };
};
var NS = Object.defineProperty, RS = Object.defineProperties, kS = Object.getOwnPropertyDescriptors, Cp = Object.getOwnPropertySymbols, MS = Object.prototype.hasOwnProperty, bS = Object.prototype.propertyIsEnumerable, Wp = (e, r, o) => r in e ? NS(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, uo = (e, r) => {
  for (var o in r || (r = {}))
    MS.call(r, o) && Wp(e, o, r[o]);
  if (Cp)
    for (var o of Cp(r))
      bS.call(r, o) && Wp(e, o, r[o]);
  return e;
}, wv = (e, r) => RS(e, kS(r));
const qn = window.Vue.defineComponent, la = window.Vue.inject, ws = window.Vue.computed, ca = window.Vue.ref, It = window.Vue.resolveComponent, yt = window.Vue.openBlock, Ja = window.Vue.createElementBlock, vv = window.Vue.normalizeClass, dn = window.Vue.renderSlot, jn = window.Vue.createBlock, Va = window.Vue.createCommentVNode, vs = window.Vue.createElementVNode, ZS = window.Vue.withModifiers, Zs = window.Vue.createVNode, Vv = window.Vue.toRef, pu = window.Vue.mergeProps, bn = window.Vue.withCtx, SS = window.Vue.h, ES = window.Vue.provide;
var Kn = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const JS = {
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
}, AS = qn({
  props: JS,
  setup(e) {
    const r = la("isCondensed", null), o = ws(() => r || e.condensed), i = ca(!1);
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
}), FS = ["aria-disabled"];
function CS(e, r, o, i, s, c) {
  const d = It("FeatherRipple");
  return yt(), Ja("div", {
    class: vv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    dn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (yt(), jn(d, { key: 0 })) : Va("", !0)
  ], 42, FS);
}
var Ss = /* @__PURE__ */ Kn(AS, [["render", CS], ["__scopeId", "data-v-44d413dc"]]);
const WS = {
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
}, xS = qn({
  emits: ["delete"],
  props: WS,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: Vo
    };
  },
  components: {
    FeatherIcon: $
  }
}), BS = { class: "chip-delete" }, _S = ["aria-label", "aria-describedby"];
function IS(e, r, o, i, s, c) {
  const d = It("FeatherIcon");
  return yt(), Ja("span", BS, [
    vs("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = ZS((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Zs(d, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, _S)
  ]);
}
var DS = /* @__PURE__ */ Kn(xS, [["render", IS], ["__scopeId", "data-v-4bae6cb4"]]);
const OS = qn({
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
}), QS = ["title"];
function zS(e, r, o, i, s, c) {
  return yt(), Ja("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    dn(e.$slots, "default", {}, void 0, !0)
  ], 8, QS);
}
var Es = /* @__PURE__ */ Kn(OS, [["render", zS], ["__scopeId", "data-v-1a0445b2"]]);
const GS = {}, YS = {
  class: "chip-icon",
  role: "presentation"
};
function PS(e, r) {
  return yt(), Ja("span", YS, [
    dn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Js = /* @__PURE__ */ Kn(GS, [["render", PS], ["__scopeId", "data-v-2230176f"]]);
const xp = {
  delete: "Remove"
}, HS = qn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => xp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = bs(Vv(e, "labels"), xp), i = ws(() => le("chip-text")), s = () => {
      e.disabled || r.emit("click");
    }, c = uo({}, r.attrs);
    return e.disabled && delete c.onClick, wv(uo({}, o), {
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
    Chip: Ss,
    DeleteIcon: DS,
    Label: Es,
    PreIcon: Js
  }
}), jS = ["aria-disabled"];
function $S(e, r, o, i, s, c) {
  const d = It("PreIcon"), f = It("Label"), m = It("DeleteIcon"), V = It("Chip");
  return yt(), jn(V, pu(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: bn(() => [
      vs("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        vs("span", pu(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (yt(), jn(d, { key: 0 }, {
            default: bn(() => [
              dn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Va("", !0),
          Zs(f, { id: e.chipTextId }, {
            default: bn(() => [
              dn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, jS),
      e.canDelete ? (yt(), jn(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Va("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var XS = /* @__PURE__ */ Kn(HS, [["render", $S], ["__scopeId", "data-v-48b2704a"]]);
const LS = qn({
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
    Chip: Ss,
    Label: Es,
    PreIcon: Js
  }
}), qS = ["aria-disabled"];
function KS(e, r, o, i, s, c) {
  const d = It("PreIcon"), f = It("Label"), m = It("Chip");
  return yt(), jn(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: bn(() => [
      vs("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (yt(), jn(d, { key: 0 }, {
          default: bn(() => [
            dn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Va("", !0),
        Zs(f, null, {
          default: bn(() => [
            dn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, qS)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var eE = /* @__PURE__ */ Kn(LS, [["render", KS], ["__scopeId", "data-v-3e0c4eba"]]);
const tE = qn({
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
    const r = ca(!1), o = ca(!1), i = ws(() => le("chip-label-id")), s = ws(() => r.value || o.value ? 0 : -1), c = ca(), d = () => {
      c.value.$el.focus();
    }, f = la("register", (N) => {
    }), m = la("blur", (N) => {
    }), V = la("select", (N) => {
    }), g = {
      first: r,
      focus: d,
      disabled: e.disabled,
      value: e.value,
      checked: o
    };
    return f(g), {
      labelId: i,
      tabindex: s,
      first: r,
      blur: m,
      click: () => {
        V(g);
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
    Chip: Ss,
    Label: Es,
    PreIcon: Js
  }
});
function nE(e, r, o, i, s, c) {
  const d = It("PreIcon"), f = It("Label"), m = It("Chip");
  return yt(), jn(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: vv(["focus hover", { selected: e.checked }]),
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
    default: bn(() => [
      e.hasIcon ? (yt(), jn(d, { key: 0 }, {
        default: bn(() => [
          dn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Va("", !0),
      Zs(f, { id: e.labelId }, {
        default: bn(() => [
          dn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var rE = /* @__PURE__ */ Kn(tE, [["render", nE], ["__scopeId", "data-v-bbcc2f70"]]);
const oE = {
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
}, Bp = qn({
  props: oE,
  setup() {
    return { format: la("chipListFormat", "") };
  },
  render() {
    const e = (r) => SS(r, uo(uo({}, this.$props), this.$attrs), uo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(XS) : this.format === "radio" ? e(rE) : e(eE);
  }
}), aE = {
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
}, iE = qn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: aE,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    ES("chipListFormat", o);
    const i = o === "single";
    if (o === "radio") {
      const d = Vv(e, "modelValue");
      return wv(uo({
        attrs: {
          role: "radiogroup"
        }
      }, mv(d, r.emit, e.label, {}, ca(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), sE = ["aria-label"];
function lE(e, r, o, i, s, c) {
  return yt(), Ja("div", pu(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...d) => e.keydown && e.keydown(...d))
  }), [
    dn(e.$slots, "default", {}, void 0, !0)
  ], 16, sE);
}
var cE = /* @__PURE__ */ Kn(iE, [["render", lE], ["__scopeId", "data-v-1e06f41d"]]);
const uE = window.Vue.defineComponent, dE = window.Vue.normalizeClass, fE = window.Vue.openBlock, hE = window.Vue.createElementBlock, pE = window.Vue.createCommentVNode, mE = /* @__PURE__ */ uE({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (fE(), hE("span", {
      key: 0,
      class: dE(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : pE("", !0);
  }
});
const wE = /* @__PURE__ */ we(mE, [["__scopeId", "data-v-e08880d6"]]), vE = window.Vue.defineComponent, Ho = window.Vue.unref, gv = window.Vue.createTextVNode, Rc = window.Vue.normalizeClass, kc = window.Vue.withCtx, VE = window.Vue.createVNode, gE = window.Vue.renderList, TE = window.Vue.Fragment, Ci = window.Vue.openBlock, UE = window.Vue.createElementBlock, Mc = window.Vue.createBlock, _p = window.Vue.createCommentVNode, yE = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NE = /* @__PURE__ */ gv(" ALL "), Ip = window.Vue.ref, RE = window.Vue.watch, kE = window.Vue.computed, ME = window.Vue.reactive, bE = /* @__PURE__ */ vE({
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
    const o = e, i = Ip(!1), s = kE(() => ge.exports.keys(ge.exports.groupBy(o.alarms, o.property))), c = Ip(
      (m = o.preSelected) != null && m.length ? o.preSelected : ["all"]
    ), d = ME({
      alarms: o.alarms
    }), f = (V) => {
      c.value = c.value.filter((g) => g !== "all"), c.value.includes(V) ? c.value = c.value.filter((g) => g !== V) : c.value.push(V), (V === "all" || c.value.length === 0) && (c.value = ["all"]), r("selected-option", c.value);
    };
    return RE(o, () => {
      var V;
      c.value = (V = o.preSelected) != null && V.length ? o.preSelected : ["all"], d.alarms = o.alarms, i.value = !1;
    }), (V, g) => Ho(s).length > 0 ? (Ci(), Mc(Ho(cE), {
      key: c.value.toString(),
      condensed: "",
      label: "",
      class: Rc({ vertical: o.isVertical })
    }, {
      default: kc(() => [
        VE(Ho(Bp), {
          class: Rc({ clicked: c.value.includes("all") }),
          onClick: g[0] || (g[0] = (T) => f("all"))
        }, {
          default: kc(() => [
            NE
          ]),
          _: 1
        }, 8, ["class"]),
        (Ci(!0), UE(TE, null, gE(Ho(s), (T) => (Ci(), Mc(Ho(Bp), {
          class: Rc([
            { clicked: c.value.includes(T) },
            `${T == null ? void 0 : T.toLowerCase()}-bg`
          ]),
          key: T,
          onClick: (N) => f(T)
        }, {
          default: kc(() => [
            e.property == "severity" ? (Ci(), Mc(wE, {
              key: 0,
              severity: T
            }, null, 8, ["severity"])) : _p("", !0),
            gv(yE(T), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : _p("", !0);
  }
});
const ga = /* @__PURE__ */ we(bE, [["__scopeId", "data-v-4dac26de"]]);
var ZE = Object.defineProperty, SE = Object.defineProperties, EE = Object.getOwnPropertyDescriptors, Dp = Object.getOwnPropertySymbols, JE = Object.prototype.hasOwnProperty, AE = Object.prototype.propertyIsEnumerable, Op = (e, r, o) => r in e ? ZE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, jo = (e, r) => {
  for (var o in r || (r = {}))
    JE.call(r, o) && Op(e, o, r[o]);
  if (Dp)
    for (var o of Dp(r))
      AE.call(r, o) && Op(e, o, r[o]);
  return e;
}, Qp = (e, r) => SE(e, EE(r));
const FE = window.Vue.defineComponent, CE = window.Vue.inject, $o = window.Vue.h;
var WE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const xE = {
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
}, BE = FE({
  inheritAttrs: !1,
  props: xE,
  setup() {
    return { hasTooltip: CE("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, r = this.asAnchor ? "a" : "button", o = {}, i = jo({}, this.$attrs);
    o.attrs = i || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const s = e();
    o.class = [this.$attrs.class].concat(s), this.$slots.icon && o.class.push("has-icon");
    let c = $o(Ln);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), $o(r, Qp(jo(jo({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : $o(Ln, { center: !0 })
      ]);
    }
    const d = $o("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return $o(r, Qp(jo(jo({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var ye = /* @__PURE__ */ WE(BE, [["__scopeId", "data-v-702d1074"]]);
const _E = window.Vue.openBlock, IE = window.Vue.createElementBlock, DE = window.Vue.createElementVNode;
var OE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const QE = {}, zE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GE = /* @__PURE__ */ DE("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), YE = [
  GE
];
function PE(e, r) {
  return _E(), IE("svg", zE, YE);
}
var Tv = /* @__PURE__ */ OE(QE, [["render", PE]]);
const HE = window.Vue.openBlock, jE = window.Vue.createElementBlock, $E = window.Vue.createElementVNode;
var XE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const LE = {}, qE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KE = /* @__PURE__ */ $E("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), eJ = [
  KE
];
function tJ(e, r) {
  return HE(), jE("svg", qE, eJ);
}
var Iu = /* @__PURE__ */ XE(LE, [["render", tJ]]);
const nJ = window.Vue.openBlock, rJ = window.Vue.createElementBlock, Uv = window.Vue.createElementVNode;
var oJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const aJ = {}, iJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sJ = /* @__PURE__ */ Uv("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), lJ = /* @__PURE__ */ Uv("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), cJ = [
  sJ,
  lJ
];
function uJ(e, r) {
  return nJ(), rJ("svg", iJ, cJ);
}
var dJ = /* @__PURE__ */ oJ(aJ, [["render", uJ]]);
const fJ = window.Vue.watch, hJ = window.Vue.onBeforeUnmount, pJ = window.Vue.ref, mJ = window.Vue.onMounted, wJ = (e) => {
  const r = pJ(!1);
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
  return mJ(() => {
    const d = fJ(r, (f) => {
      window && f ? window.addEventListener("resize", s) : c();
    }, {
      immediate: !0
    });
    hJ(() => {
      d(), c();
    });
  }), r;
}, vJ = window.Vue.watch, VJ = window.Vue.onBeforeUnmount, gJ = window.Vue.ref, TJ = window.Vue.onMounted, UJ = (e, r) => {
  const o = gJ(!1), i = (d) => {
    d.target === window && r(d);
  }, s = (d) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((V) => V && V.contains(d.target)) || r(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", i));
  };
  return TJ(() => {
    const d = vJ(o, (f) => {
      document && window && f ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", i)) : c();
    }, {
      immediate: !0
    });
    VJ(() => {
      d(), c();
    });
  }), o;
}, yJ = window.Vue.watch, NJ = window.Vue.onBeforeUnmount, RJ = window.Vue.ref, yv = (e, r) => {
  const o = RJ(!1);
  let i = !1;
  const s = (m) => {
    r(m), i = !1;
  };
  function c(m) {
    i || (requestAnimationFrame(() => s(m)), i = !0);
  }
  const d = () => {
    e.value && e.value.removeEventListener("scroll", c, !0);
  }, f = yJ([e, o], ([m, V], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", c, !0), V && m ? m.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return NJ(() => {
    f(), d();
  }), o;
}, kJ = window.Vue.defineComponent, Nn = window.Vue.ref, zp = window.Vue.toRef, MJ = window.Vue.onMounted, bJ = window.Vue.watch, Gp = window.Vue.computed, ZJ = window.Vue.nextTick, Yp = window.Vue.openBlock, Pp = window.Vue.createElementBlock, Hp = window.Vue.renderSlot, SJ = window.Vue.normalizeClass, EJ = window.Vue.normalizeStyle, JJ = window.Vue.createCommentVNode;
var AJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const FJ = {
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
}, CJ = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, WJ = kJ({
  emits: CJ,
  props: FJ,
  setup(e, r) {
    const o = Nn(), i = Nn(), s = zp(e, "open"), c = zp(e, "noExpand"), d = Nn("auto"), f = Nn(), m = Nn(e.triggerId || le("feather-menu-trigger")), V = Nn(le("feather-menu-dropdown")), g = Nn(""), T = Nn("");
    MJ(() => {
      f.value = window;
    });
    const N = Nn(!1), F = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), E = () => {
      if (!i.value)
        return;
      const S = o.value.getBoundingClientRect();
      N.value = !0, d.value = "auto", ZJ(() => {
        let { height: Q, width: O } = i.value.getBoundingClientRect();
        const _ = F(), H = _.height, K = _.width;
        e.fill && O < S.width ? (d.value = S.width + "px", O = S.width) : d.value = O + "px";
        let j = 0;
        H - S.bottom < Q && S.top >= Q ? (j = S.top - Q, e.cover && (j += S.height)) : (j = S.bottom, e.cover && (j -= S.height));
        let z = e.right ? S.right - O : S.left;
        !e.right && S.right >= O && K - S.left < O && (z = S.right - O), e.right && S.right <= O && K - S.left > O && (z = S.left), T.value = `${z}px`, g.value = `${j}px`, N.value = !1;
      });
    }, C = UJ(o, (S) => {
      r.emit("outside-click", S);
    }), A = wJ(E), W = yv(f, E);
    bJ([s, i], ([S, Q]) => {
      S && Q && E(), C.value = S, A.value = S, W.value = S;
    });
    const x = Gp(() => {
      const S = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return s.value && (S["aria-controls"] = V.value), c.value || (S["aria-expanded"] = s.value ? "true" : "false"), S;
    }), X = Gp(() => ({
      click: (S) => {
        r.emit("trigger-click", S);
      }
    }));
    return {
      positionTop: g,
      positionLeft: T,
      triggerId: m,
      triggerAttrs: x,
      triggerListeners: X,
      menuId: V,
      menu: i,
      menuWidth: d,
      root: o,
      calculatePosition: E,
      calculating: N
    };
  }
}), xJ = ["data-ref-id"], BJ = ["data-ref-id", "id"];
function _J(e, r, o, i, s, c) {
  return Yp(), Pp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Hp(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Yp(), Pp("div", {
      key: 0,
      class: SJ(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: EJ({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Hp(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, BJ)) : JJ("", !0)
  ], 8, xJ);
}
var Nv = /* @__PURE__ */ AJ(WJ, [["render", _J], ["__scopeId", "data-v-f75af406"]]), IJ = {
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
const DJ = window.Vue.openBlock, OJ = window.Vue.createElementBlock, QJ = window.Vue.createElementVNode;
var zJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const GJ = {}, YJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PJ = /* @__PURE__ */ QJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), HJ = [
  PJ
];
function jJ(e, r) {
  return DJ(), OJ("svg", YJ, HJ);
}
var $J = /* @__PURE__ */ zJ(GJ, [["render", jJ]]);
const XJ = window.Vue.openBlock, LJ = window.Vue.createElementBlock, Du = window.Vue.createElementVNode;
var qJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const KJ = {}, eA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tA = /* @__PURE__ */ Du("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), nA = /* @__PURE__ */ Du("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), rA = /* @__PURE__ */ Du("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), oA = [
  tA,
  nA,
  rA
];
function aA(e, r) {
  return XJ(), LJ("svg", eA, oA);
}
var iA = /* @__PURE__ */ qJ(KJ, [["render", aA]]);
const sA = window.Vue.openBlock, lA = window.Vue.createElementBlock, cA = window.Vue.createElementVNode;
var uA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const dA = {}, fA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hA = /* @__PURE__ */ cA("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), pA = [
  hA
];
function mA(e, r) {
  return sA(), lA("svg", fA, pA);
}
var As = /* @__PURE__ */ uA(dA, [["render", mA]]);
const Ta = function(e, r) {
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
const wA = window.Vue.defineComponent, vA = window.Vue.openBlock, VA = window.Vue.createElementBlock, gA = window.Vue.normalizeClass, TA = window.Vue.pushScopeId, UA = window.Vue.popScopeId, mu = window.Vue.createElementVNode;
var yA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const NA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, RA = {
  click: (e) => !0
}, kA = wA({
  emits: RA,
  props: NA,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Rv = (e) => (TA("data-v-07e020f5"), e = e(), UA(), e), MA = /* @__PURE__ */ Rv(() => /* @__PURE__ */ mu("div", { class: "track" }, null, -1)), bA = /* @__PURE__ */ Rv(() => /* @__PURE__ */ mu("div", { class: "switcher" }, [
  /* @__PURE__ */ mu("div", { class: "switch-circle" })
], -1)), ZA = [
  MA,
  bA
];
function SA(e, r, o, i, s, c) {
  return vA(), VA("div", {
    class: gA(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, ZA, 2);
}
var EA = /* @__PURE__ */ yA(kA, [["render", SA], ["__scopeId", "data-v-07e020f5"]]), JA = Object.defineProperty, AA = Object.defineProperties, FA = Object.getOwnPropertyDescriptors, jp = Object.getOwnPropertySymbols, CA = Object.prototype.hasOwnProperty, WA = Object.prototype.propertyIsEnumerable, $p = (e, r, o) => r in e ? JA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xp = (e, r) => {
  for (var o in r || (r = {}))
    CA.call(r, o) && $p(e, o, r[o]);
  if (jp)
    for (var o of jp(r))
      WA.call(r, o) && $p(e, o, r[o]);
  return e;
}, Lp = (e, r) => AA(e, FA(r));
const Ou = window.Vue.defineComponent, dr = window.Vue.h, xA = window.Vue.openBlock, BA = window.Vue.createElementBlock, _A = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var kv = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const IA = {
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
}, DA = Ou({
  inheritAttrs: !1,
  props: IA,
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
      return dr("li", Lp(Xp({}, this.$attrs), {
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
    const c = dr("a", Lp(Xp({}, this.$attrs), {
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
var Aa = /* @__PURE__ */ kv(DA, [["__scopeId", "data-v-7c46b2b3"]]);
Ou({
  components: {
    FeatherListItem: Aa
  }
});
const OA = {}, QA = { class: "feather-list" };
function zA(e, r) {
  return xA(), BA("ul", QA, [
    _A(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Qu = /* @__PURE__ */ kv(OA, [["render", zA], ["__scopeId", "data-v-941a1d50"]]);
const GA = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, YA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Ou({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: GA,
  props: YA,
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
  components: { SwitchRender: EA, FeatherListItem: Aa }
});
var PA = Object.defineProperty, HA = Object.defineProperties, jA = Object.getOwnPropertyDescriptors, qp = Object.getOwnPropertySymbols, $A = Object.prototype.hasOwnProperty, XA = Object.prototype.propertyIsEnumerable, Kp = (e, r, o) => r in e ? PA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Nt = (e, r) => {
  for (var o in r || (r = {}))
    $A.call(r, o) && Kp(e, o, r[o]);
  if (qp)
    for (var o of qp(r))
      XA.call(r, o) && Kp(e, o, r[o]);
  return e;
}, LA = (e, r) => HA(e, jA(r));
const To = window.Vue.defineComponent, ue = window.Vue.openBlock, Fe = window.Vue.createElementBlock, st = window.Vue.createElementVNode, Kt = window.Vue.toDisplayString, _t = window.Vue.createCommentVNode, Ee = window.Vue.resolveComponent, xt = window.Vue.createBlock, $e = window.Vue.withCtx, fo = window.Vue.Fragment, ua = window.Vue.renderList, lt = window.Vue.createVNode, zu = window.Vue.withModifiers, Ur = window.Vue.normalizeClass, wu = window.Vue.renderSlot, Mv = window.Vue.createTextVNode, qA = window.Vue.pushScopeId, KA = window.Vue.popScopeId, bv = window.Vue.reactive, Zv = window.Vue.nextTick, bc = window.Vue.markRaw, Zc = window.Vue.toRef, em = window.Vue.computed, eF = window.Vue.toRefs, jr = window.Vue.ref, Sc = window.Vue.mergeProps, tm = window.Vue.toHandlers, Wi = window.Vue.withDirectives, xi = window.Vue.vShow;
var Fs = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Gu = {
  query: {
    type: String
  }
}, kr = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const tF = To({
  mixins: [],
  props: Nt(Nt({
    text: {
      type: String,
      required: !0
    }
  }, Fs), Gu),
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
}), nF = {
  key: 0,
  class: "highlight"
}, rF = { key: 1 };
function oF(e, r, o, i, s, c) {
  return ue(), Fe("span", null, [
    st("span", null, Kt(e.beginning), 1),
    e.highlighted ? (ue(), Fe("span", nF, Kt(e.highlighted), 1)) : _t("", !0),
    e.end ? (ue(), Fe("span", rF, Kt(e.end), 1)) : _t("", !0)
  ]);
}
var Sv = /* @__PURE__ */ kr(tF, [["render", oF], ["__scopeId", "data-v-8abe2492"]]);
const aF = To({
  emits: ["select", "deselect"],
  props: Nt(Nt({
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
  }, Fs), Gu),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        Ta(r, o.$el);
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
    FeatherList: Qu,
    FeatherListItem: Aa,
    Highlighter: Sv
  }
}), iF = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function sF(e, r, o, i, s, c) {
  const d = Ee("Highlighter"), f = Ee("FeatherListItem"), m = Ee("FeatherList");
  return ue(), xt(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: $e(() => [
      (ue(!0), Fe(fo, null, ua(e.items, (V, g) => (ue(), Fe(fo, {
        key: V[e.textProp]
      }, [
        lt(f, {
          "as-li": "",
          id: e.getId(g),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(V),
          highlighted: e.isActive(g),
          selected: e.isSelected(V),
          onClick: zu((T) => e.select(V), ["stop"])
        }, {
          default: $e(() => [
            lt(d, {
              highlight: e.highlight,
              query: e.query,
              text: V[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (ue(), Fe("span", iF, Kt(e.newLabel), 1)) : _t("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && V._new ? (ue(), Fe("li", {
          role: "presentation",
          key: V[e.textProp] + "hr",
          class: "hr"
        })) : _t("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var lF = /* @__PURE__ */ kr(aF, [["render", sF], ["__scopeId", "data-v-f623434a"]]);
const cF = To({
  emits: ["select"],
  props: Nt(Nt({
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
  }, Fs), Gu),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        Ta(r, o);
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
    Highlighter: Sv
  }
}), uF = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, dF = ["aria-multiselectable"], fF = { role: "row" }, hF = ["aria-selected", "onClick"], pF = ["id", "aria-selected"], mF = { key: 1 };
function wF(e, r, o, i, s, c) {
  const d = Ee("Highlighter");
  return ue(), Fe("div", uF, [
    st("table", {
      class: Ur(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      st("thead", null, [
        st("tr", fF, [
          (ue(!0), Fe(fo, null, ua(e.config, (f) => (ue(), Fe("th", {
            key: f.title
          }, Kt(f.title), 1))), 128))
        ])
      ]),
      st("tbody", null, [
        (ue(!0), Fe(fo, null, ua(e.items, (f, m) => (ue(), Fe("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Ur({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: zu((V) => e.select(f), ["stop"])
        }, [
          (ue(!0), Fe(fo, null, ua(e.config, (V, g) => (ue(), Fe("td", {
            key: f[e.textProp] + V.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Ur({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            V.prop === e.textProp ? (ue(), xt(d, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (ue(), Fe("p", mF, Kt(f[V.prop]), 1))
          ], 10, pF))), 128))
        ], 10, hF))), 128))
      ])
    ], 10, dF)
  ], 512);
}
var vF = /* @__PURE__ */ kr(cF, [["render", wF], ["__scopeId", "data-v-58c88fd1"]]);
const VF = To({
  components: {
    FeatherList: Qu,
    FeatherListItem: Aa
  }
});
function gF(e, r, o, i, s, c) {
  const d = Ee("FeatherListItem"), f = Ee("FeatherList");
  return ue(), xt(f, { class: "result-list" }, {
    default: $e(() => [
      lt(d, { "as-li": "" }, {
        default: $e(() => [
          wu(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var TF = /* @__PURE__ */ kr(VF, [["render", gF], ["__scopeId", "data-v-06b752c6"]]);
const UF = To({
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
    Cancel: Vo,
    BaseChip: Ss,
    BaseChipLabel: Es,
    BaseChipPreIcon: Js
  }
});
function yF(e, r, o, i, s, c) {
  const d = Ee("FeatherIcon"), f = Ee("BaseChipPreIcon"), m = Ee("BaseChipLabel"), V = Ee("Cancel"), g = Ee("BaseChip");
  return ue(), xt(g, {
    class: Ur(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: $e(() => [
      e.showPreIcon ? (ue(), xt(f, { key: 0 }, {
        default: $e(() => {
          var T, N;
          return [
            lt(d, {
              icon: (T = e.pre) == null ? void 0 : T.icon,
              title: (N = e.pre) == null ? void 0 : N.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : _t("", !0),
      lt(m, null, {
        default: $e(() => [
          Mv(Kt(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? _t("", !0) : (ue(), Fe("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = zu((...T) => e.handleClick && e.handleClick(...T), ["stop"]))
      }, [
        lt(d, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: $e(() => [
            lt(V)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var NF = /* @__PURE__ */ kr(UF, [["render", yF], ["__scopeId", "data-v-e0fc6ac0"]]);
const RF = {}, kF = (e) => (qA("data-v-aa720e06"), e = e(), KA(), e), MF = { class: "spinner-container" }, bF = /* @__PURE__ */ kF(() => /* @__PURE__ */ st("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ st("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), ZF = [
  bF
];
function SF(e, r) {
  return ue(), Fe("div", MF, ZF);
}
var EF = /* @__PURE__ */ kr(RF, [["render", SF], ["__scopeId", "data-v-aa720e06"]]), Cs = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Cs || {});
const Ev = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, JF = Nt(Nt(Nt({
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
    validator: (e) => !!Cs[e]
  },
  labels: {
    type: Object,
    default: () => Ev
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Fs), Sa), Bu), AF = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, FF = (e, r, o, i) => {
  if (o.toLowerCase() === Cs.multi) {
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
        if (c.value && c.value.filter((V) => V[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = c.value ? [...c.value, f] : [f];
        i("update:modelValue", m), d(m);
      },
      removeItem(f) {
        const m = c.value.findIndex((V) => {
          if (f[e.textProp.value] === V[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const V = c.value.slice(0);
          V.splice(m, 1), i("update:modelValue", V), d(V), e.input.value.focus();
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
}, CF = () => {
  const e = bv({
    row: -1
  }), r = (c) => {
    Zv(() => {
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
}, WF = (e) => {
  const r = bv({
    row: -1,
    col: -1
  }), o = (d, f) => {
    Zv(() => {
      r.col = f, r.row = d;
    });
  }, i = (d, f) => {
    if (d.keyCode === ne.DOWN) {
      if (d.preventDefault(), r.row === -1)
        s(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const m = r.row, V = r.col;
        s(), o(m + 1, V);
      }
      return !0;
    }
    if (d.keyCode === ne.UP) {
      if (d.preventDefault(), r.row === 0)
        s();
      else if (r.row > 0) {
        const m = r.row, V = r.col;
        s(), o(m - 1, V);
      }
      return !0;
    }
    if (d.keyCode === ne.RIGHT && r.row !== -1) {
      if (d.preventDefault(), r.col + 1 <= e.length - 1) {
        const m = r.col, V = r.row;
        s(), o(V, m + 1);
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
        const m = r.col, V = r.row;
        s(), o(V, m - 1);
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
}, xF = To({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: AF,
  props: JF,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Cs.multi;
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
      return bc($J);
    },
    minCharIcon() {
      return bc(iA);
    },
    dropdownIcon() {
      return bc(As);
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
        Ta(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          Ta(this.inputRef, this.scrollContainer);
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
    const o = bs(Zc(e, "labels"), Ev);
    Ea(e), _u(e);
    let i;
    e.gridConfig ? i = WF(e.gridConfig) : i = CF();
    const s = Zc(e, "id"), c = em(() => s.value ? s.value : le("feather-autocomplete-input")), { validate: d } = ba(c, Zc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: V, allowNew: g, type: T, minChar: N } = eF(e), F = jr(!1), E = jr(!1), Z = jr(!1), C = jr(""), A = jr([]), W = jr(), x = em(() => W.value), X = () => {
      F.value && !E.value && (C.value && C.value.length >= N.value && r.emit("search", C.value), N.value <= 0 && r.emit("search", C.value || ""), A.value = [], i.reset());
    }, S = FF({
      selectionLimit: f,
      selectionLimitReached: E,
      modelValue: m,
      textProp: V,
      allowNew: g,
      forceCloseResults: Z,
      query: C,
      internalResults: A,
      input: x,
      emitSearch: X
    }, i, T.value, r.emit);
    return LA(Nt(Nt({}, o), Za(r.attrs)), {
      query: C,
      internalResults: A,
      selectionLimitReached: E,
      forceCloseResults: Z,
      hasFocus: F,
      strategy: S,
      emitSearch: X,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: c,
      input: W,
      incomingId: s,
      inputRef: x,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: xu,
    InputSubText: Ma,
    AutocompleteResults: lF,
    AutocompleteResultsGrid: vF,
    Chip: NF,
    MenuMessage: TF,
    FeatherIcon: $,
    FeatherMenu: Nv,
    Spinner: EF
  }
}), BF = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, _F = ["id"], IF = { "data-ref-id": "feather-autocomplete-no-results" }, DF = { "data-ref-id": "feather-autocomplete-selection-limit" }, OF = { "data-ref-id": "feather-autocomplete-min-char" };
function QF(e, r, o, i, s, c) {
  const d = Ee("FeatherIcon"), f = Ee("Chip"), m = Ee("InputWrapper"), V = Ee("AutocompleteResults"), g = Ee("AutocompleteResultsGrid"), T = Ee("MenuMessage"), N = Ee("Spinner"), F = Ee("FeatherMenu"), E = Ee("InputSubText");
  return ue(), Fe("div", Sc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    lt(F, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Ur(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: $e(({ attrs: Z, on: C }) => [
        lt(m, Sc(Nt(Nt({}, Z), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, tm(C), { ref: "scroll" }), {
          pre: $e(() => [
            wu(e.$slots, "pre", {}, () => [
              lt(d, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: $e(() => [
            lt(d, {
              icon: e.dropdownIcon,
              class: Ur(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: $e(() => [
            st("div", {
              class: Ur(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              st("div", BF, null, 512),
              st("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Kt(e.selectedDescribedByText), 9, _F),
              (ue(!0), Fe(fo, null, ua(e.modelValueList, (A, W) => Wi((ue(), xt(f, {
                key: A[e.textProp],
                role: "button",
                id: W === e.activeChipIndex ? e.activeChipId : null,
                focused: W === e.activeChipIndex,
                disabled: e.disabled,
                text: A[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(A),
                onDelete: (x) => e.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [xi, !e.singleSelect]
              ])), 128)),
              st("textarea", Sc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, tm(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: $e(() => [
        e.gridConfig ? _t("", !0) : Wi((ue(), xt(V, {
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
          [xi, e.showResults]
        ]),
        e.gridConfig ? Wi((ue(), xt(g, {
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
          [xi, e.showResults]
        ]) : _t("", !0),
        e.showNoResults ? (ue(), xt(T, { key: 2 }, {
          default: $e(() => [
            st("span", IF, Kt(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : _t("", !0),
        e.showSelectionLimit ? (ue(), xt(T, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: $e(() => [
            lt(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            st("span", DF, Kt(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : _t("", !0),
        e.minChar ? Wi((ue(), xt(T, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: $e(() => [
            lt(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            st("span", OF, [
              wu(e.$slots, "min-char", {}, () => [
                Mv(Kt(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [xi, e.showMinCharWarning]
        ]) : _t("", !0),
        e.showLoading ? (ue(), xt(N, { key: 5 })) : _t("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    lt(E, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var zF = /* @__PURE__ */ kr(xF, [["render", QF], ["__scopeId", "data-v-43a7e951"]]);
const GF = window.Vue.defineComponent, Ec = window.Vue.unref, YF = window.Vue.createVNode, PF = window.Vue.createElementVNode, HF = window.Vue.withCtx, jF = window.Vue.openBlock, $F = window.Vue.createBlock, XF = window.Vue.pushScopeId, LF = window.Vue.popScopeId, qF = (e) => (XF("data-v-59f119ff"), e = e(), LF(), e), KF = /* @__PURE__ */ qF(() => /* @__PURE__ */ PF("span", null, "New Situation", -1)), eC = window.VueRouter.useRouter, tC = window.Vue.markRaw, nC = /* @__PURE__ */ GF({
  __name: "NewSituationBtn",
  setup(e) {
    const r = eC(), o = tC({
      Add: Iu
    }), i = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (s, c) => (jF(), $F(Ec(ye), {
      class: "new-situation-btn",
      onClick: c[0] || (c[0] = () => i())
    }, {
      default: HF(() => [
        YF(Ec($), {
          icon: Ec(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        KF
      ]),
      _: 1
    }));
  }
});
const Jv = /* @__PURE__ */ we(nC, [["__scopeId", "data-v-59f119ff"]]);
var rC = Object.defineProperty, oC = Object.defineProperties, aC = Object.getOwnPropertyDescriptors, nm = Object.getOwnPropertySymbols, iC = Object.prototype.hasOwnProperty, sC = Object.prototype.propertyIsEnumerable, rm = (e, r, o) => r in e ? rC(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, is = (e, r) => {
  for (var o in r || (r = {}))
    iC.call(r, o) && rm(e, o, r[o]);
  if (nm)
    for (var o of nm(r))
      sC.call(r, o) && rm(e, o, r[o]);
  return e;
}, Av = (e, r) => oC(e, aC(r));
const Fv = window.Vue.defineComponent, lC = window.Vue.ref, da = window.Vue.computed, cC = window.Vue.reactive, om = window.Vue.watch, Jc = window.Vue.inject, Cv = window.Vue.resolveComponent, vu = window.Vue.openBlock, Wv = window.Vue.createElementBlock, $n = window.Vue.createElementVNode, uC = window.Vue.createBlock, dC = window.Vue.createCommentVNode, xv = window.Vue.renderSlot, fC = window.Vue.pushScopeId, hC = window.Vue.popScopeId, Ac = window.Vue.toRef, am = window.Vue.mergeProps, pC = window.Vue.toDisplayString, mC = window.Vue.createVNode;
var Bv = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const wC = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, vC = Fv({
  props: wC,
  setup(e) {
    const r = lC(), o = () => {
      r.value.focus();
    }, i = da(() => le("feather-radio-button")), s = cC({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), c = da(() => le("radio-label-id")), d = da(() => s.first || s.checked ? 0 : -1);
    om(() => e.disabled, (T) => {
      s.disabled = T;
    }, { immediate: !0 }), om(() => e.value, (T) => {
      s.value = T;
    }, { immediate: !0 });
    const f = Jc("register", (T) => {
    }), m = Jc("blur", (T) => {
    }), V = Jc("select", (T) => {
    });
    return f(s), {
      labelId: c,
      tabindex: d,
      vm: s,
      blur: m,
      click: () => {
        V(s);
      },
      input: r,
      id: i
    };
  },
  components: {
    FeatherRipple: Ln
  }
}), VC = (e) => (fC("data-v-24790cf0"), e = e(), hC(), e), gC = { class: "layout-container" }, TC = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], UC = { class: "radio hover focus" }, yC = /* @__PURE__ */ VC(() => /* @__PURE__ */ $n("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ $n("svg", { class: "dot" }, [
    /* @__PURE__ */ $n("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), NC = ["id"];
function RC(e, r, o, i, s, c) {
  const d = Cv("feather-ripple");
  return vu(), Wv("div", gC, [
    $n("div", {
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
      $n("div", UC, [
        yC,
        e.vm.disabled ? dC("", !0) : (vu(), uC(d, {
          key: 0,
          center: ""
        }))
      ]),
      $n("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        xv(e.$slots, "default", {}, void 0, !0)
      ], 8, NC)
    ], 40, TC)
  ]);
}
var Ua = /* @__PURE__ */ Bv(vC, [["render", RC], ["__scopeId", "data-v-24790cf0"]]);
const kC = Av(is({}, Sa), {
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
}), MC = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, bC = Fv({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: kC,
  emits: MC,
  setup(e, r) {
    Ea(e);
    const o = Ac(e, "error"), i = Ac(e, "modelValue"), s = da(() => le("feather-input-description")), c = da(() => {
      const d = Av(is({}, r.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!o.value), d;
    });
    return is(is({
      descriptionId: s,
      attrs: c
    }, mv(i, r.emit, e.label, e.schema, Ac(e, "error"))), Za(r.attrs));
  },
  components: {
    InputSubText: Ma
  }
}), ZC = ["for"], SC = ["id"];
function EC(e, r, o, i, s, c) {
  const d = Cv("InputSubText");
  return vu(), Wv("div", am(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    $n("label", {
      for: e.groupId,
      class: "group-label"
    }, pC(e.label), 9, ZC),
    $n("div", am(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      xv(e.$slots, "default", {}, void 0, !0)
    ], 16, SC),
    mC(d, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Yu = /* @__PURE__ */ Bv(bC, [["render", EC], ["__scopeId", "data-v-6775aeb9"]]);
const JC = window.Vue.defineComponent, AC = window.Vue.renderList, FC = window.Vue.Fragment, im = window.Vue.openBlock, CC = window.Vue.createElementBlock, WC = window.Vue.toDisplayString, xC = window.Vue.createTextVNode, sm = window.Vue.unref, lm = window.Vue.withCtx, BC = window.Vue.createVNode, _C = window.Vue.createBlock, IC = window.Vue.watch, DC = window.Vue.ref, OC = /* @__PURE__ */ JC({
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
    ], s = DC(o.preSelected || i[0].id);
    return IC(o, () => {
      o.preSelected && (s.value = o.preSelected);
    }), (c, d) => (im(), _C(sm(Yu), {
      label: "",
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("filter-date-selected", s.value))
      ],
      vertical: ""
    }, {
      default: lm(() => [
        (im(), CC(FC, null, AC(i, (f) => BC(sm(Ua), {
          value: f.id,
          key: f.id
        }, {
          default: lm(() => [
            xC(WC(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const _v = /* @__PURE__ */ we(OC, [["__scopeId", "data-v-4fded793"]]);
const QC = window.Vue.openBlock, zC = window.Vue.createElementBlock, GC = window.Vue.pushScopeId, YC = window.Vue.popScopeId, cm = window.Vue.createElementVNode;
var PC = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const HC = {}, jC = (e) => (GC("data-v-2263be39"), e = e(), YC(), e), $C = { class: "spinner-container" }, XC = /* @__PURE__ */ jC(() => /* @__PURE__ */ cm("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ cm("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), LC = [
  XC
];
function qC(e, r) {
  return QC(), zC("div", $C, LC);
}
var Iv = /* @__PURE__ */ PC(HC, [["render", qC], ["__scopeId", "data-v-2263be39"]]);
const KC = window.Vue.defineComponent, um = window.Vue.resolveComponent, Bi = window.Vue.openBlock, _i = window.Vue.createElementBlock, Fc = window.Vue.createElementVNode, dm = window.Vue.normalizeClass, eW = window.Vue.withModifiers, fm = window.Vue.renderSlot, tW = window.Vue.createTextVNode, nW = window.Vue.toDisplayString, Cc = window.Vue.createVNode, rW = window.Vue.Transition, oW = window.Vue.withCtx, aW = window.Vue.createCommentVNode;
var iW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const sW = {
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
}, lW = {
  "update:modelValue": (e) => !0
}, cW = KC({
  name: "FeatherExpansionPanel",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: lW,
  props: sW,
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
      return As;
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
    FeatherIcon: $,
    FeatherSpinner: Iv
  }
}), uW = { class: "feather-expansion" }, dW = ["aria-level"], fW = ["id", "aria-controls", "aria-expanded", "aria-disabled", "aria-busy"], hW = { class: "feather-expansion-header-button-text" }, pW = ["id", "aria-labelledby"], mW = {
  key: 0,
  class: "panel-content"
}, wW = {
  key: 1,
  class: "panel-content"
};
function vW(e, r, o, i, s, c) {
  const d = um("FeatherIcon"), f = um("FeatherSpinner");
  return Bi(), _i("div", uW, [
    Fc("div", {
      "aria-level": e.level,
      role: "heading"
    }, [
      Fc("a", {
        href: "#",
        class: dm(["feather-expansion-header-button", { expanded: e.expanded, disabled: e.disabled }]),
        role: "button",
        id: e.headerId,
        "aria-controls": e.contentId,
        "aria-expanded": e.expanded ? "true" : "false",
        "aria-disabled": e.disabled ? "true" : "false",
        "aria-busy": e.loading ? "true" : "false",
        onClick: r[0] || (r[0] = eW((...m) => e.handleClick && e.handleClick(...m), ["prevent"])),
        "data-ref-id": "feather-expansion-header-button"
      }, [
        Fc("span", hW, [
          fm(e.$slots, "title", {}, () => [
            tW(nW(e.title), 1)
          ], !0)
        ]),
        Cc(d, {
          class: dm(["feather-expansion-header-button-icon", { rotated: e.expanded, disabled: e.disabled }]),
          icon: e.downIcon
        }, null, 8, ["icon", "class"])
      ], 10, fW)
    ], 8, dW),
    Cc(rW, {
      name: "expand",
      onEnter: e.enter,
      onAfterEnter: e.afterEnter,
      onLeave: e.leave
    }, {
      default: oW(() => [
        e.expanded ? (Bi(), _i("div", {
          key: 0,
          id: e.contentId,
          "aria-labelledby": e.headerId,
          role: "region",
          "data-ref-id": "feather-expansion-content"
        }, [
          e.loading ? (Bi(), _i("div", mW, [
            Cc(f)
          ])) : (Bi(), _i("div", wW, [
            fm(e.$slots, "default", {}, void 0, !0)
          ]))
        ], 8, pW)) : aW("", !0)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onLeave"])
  ]);
}
var fa = /* @__PURE__ */ iW(cW, [["render", vW], ["__scopeId", "data-v-ddc90408"]]);
const VW = window.Vue.defineComponent, Lt = window.Vue.createElementVNode, an = window.Vue.unref, At = window.Vue.createVNode, Ii = window.Vue.withCtx, Di = window.Vue.toDisplayString, gW = window.Vue.renderList, TW = window.Vue.Fragment, $r = window.Vue.openBlock, Xr = window.Vue.createElementBlock, Wc = window.Vue.createCommentVNode, UW = window.Vue.pushScopeId, yW = window.Vue.popScopeId, Pu = (e) => (UW("data-v-af62a182"), e = e(), yW(), e), NW = { class: "list-main" }, RW = { class: "header" }, kW = /* @__PURE__ */ Pu(() => /* @__PURE__ */ Lt("h2", null, "Situation List", -1)), MW = /* @__PURE__ */ Pu(() => /* @__PURE__ */ Lt("span", null, "View Unassociated Alarms", -1)), bW = { class: "content" }, ZW = { class: "filters" }, SW = /* @__PURE__ */ Pu(() => /* @__PURE__ */ Lt("span", null, "Reset Filters", -1)), EW = { class: "container" }, JW = { class: "autocomplete" }, AW = {
  key: 0,
  class: "situation-list"
}, FW = {
  key: 1,
  class: "container empty"
}, CW = {
  key: 2,
  class: "footer-pager"
}, WW = window.Vue.reactive, On = window.Vue.ref, xW = window.Vue.watch, BW = window.Vue.markRaw, _W = window.VueRouter.useRouter, IW = /* @__PURE__ */ VW({
  __name: "SituationList",
  setup(e) {
    const r = BW({
      Add: Iu,
      View: dJ
    }), o = _W(), i = Sn();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms();
    const s = 9, c = WW({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), d = On(!1), f = On(0), m = On(1), V = On(0), g = On(!1), T = On(["all"]), N = On(1), F = On(!0), E = (j) => {
      f.value = 0, c.situations = j[0], m.value = j.length;
    }, Z = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    xW(
      () => i.situations,
      () => {
        Z(), V.value = i.situations.length, c.allSituations = ge.exports.chunk(i.situations, s);
        const j = i.situations.map((z) => z.id);
        i.filteredSituations = j, E(c.allSituations), C();
      }
    );
    const C = () => {
      i.filters && (i.filters.node && (c.nodeSelectedValue = i.filters.node), i.filters.severities && (T.value = i.filters.severities), N.value = i.filters.timeStart, W(), i.filters = null);
    }, A = (j) => {
      if (!j)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((z) => z.label.toLowerCase().indexOf(j) > -1).map((z) => ({
        _text: z.label,
        id: z.id
      })), d.value = !1;
    }, W = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let j = i.situations.map((z) => {
          if (z.relatedAlarms.filter(
            (ve) => {
              var de;
              return ve.nodeLabel === ((de = c.nodeSelectedValue) == null ? void 0 : de._text);
            }
          ).length > 0)
            return z;
        }).filter((z) => z);
        j && (x(j), g.value = !0);
      } else
        c.nodeSelectedValue = void 0, g.value = !0, x(i.situations);
    }, x = (j) => {
      let z = j;
      T.value.includes("all") || (z = j.filter(
        (ve) => T.value.includes(ve.severity)
      )), N.value !== 1 && (z = cv(
        N.value,
        z
      )), c.situations = z, V.value = z.length;
      const se = z.map((ve) => ve.id);
      i.filteredSituations = se;
    }, X = (j) => {
      f.value = j, c.situations = c.allSituations[f.value];
    }, S = (j) => {
      (c.nodeSelectedValue || T.value.length || N.value !== 1) && (i.filters = {
        node: c.nodeSelectedValue,
        severities: T.value,
        timeStart: N.value
      }), o.push({
        name: "situationDetail",
        params: {
          id: j
        }
      });
    }, Q = (j) => {
      N.value = j, _();
    }, O = (j) => {
      T.value = j, _();
    }, _ = () => {
      T.value.includes("all") && N.value === 1 && !c.nodeSelectedValue ? K() : W();
    }, H = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, K = () => {
      T.value = ["all"], N.value = 1, c.nodeSelectedValue = void 0;
      const j = i.situations.map((z) => z.id);
      i.filteredSituations = j, V.value = i.situations.length, E(c.allSituations), g.value = !1;
    };
    return (j, z) => ($r(), Xr("div", NW, [
      Lt("div", RW, [
        kW,
        Lt("div", null, [
          At(an(ye), {
            class: "view-situation-btn",
            onClick: z[0] || (z[0] = () => H())
          }, {
            default: Ii(() => [
              At(an($), {
                icon: an(r).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              MW
            ]),
            _: 1
          }),
          At(Jv)
        ])
      ]),
      Lt("div", bW, [
        Lt("div", ZW, [
          At(an(ye), {
            class: "reset-btn",
            onClick: z[1] || (z[1] = () => K())
          }, {
            default: Ii(() => [
              At(an($), {
                icon: an(Tv),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              SW
            ]),
            _: 1
          }),
          At(an(fa), {
            title: "By Severity",
            modelValue: F.value,
            "onUpdate:modelValue": z[2] || (z[2] = (se) => F.value = se)
          }, {
            default: Ii(() => [
              At(ga, {
                alarms: an(i).situations,
                "pre-selected": T.value,
                onSelectedOption: O,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          At(an(fa), {
            title: "By Start Date",
            modelValue: F.value,
            "onUpdate:modelValue": z[3] || (z[3] = (se) => F.value = se)
          }, {
            default: Ii(() => [
              At(_v, {
                onFilterDateSelected: Q,
                "pre-selected": N.value
              }, null, 8, ["pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Lt("div", EW, [
          Lt("div", JW, [
            Lt("div", null, " Result: " + Di(c.situations.length) + " of " + Di(V.value), 1),
            At(an(zF), {
              class: "map-search",
              label: "Find by node",
              loading: d.value,
              modelValue: c.nodeSelectedValue,
              "onUpdate:modelValue": [
                z[4] || (z[4] = (se) => c.nodeSelectedValue = se),
                W
              ],
              results: c.results,
              type: "single",
              onSearch: A
            }, null, 8, ["loading", "modelValue", "results"])
          ]),
          c.situations && c.situations.length > 0 ? ($r(), Xr("div", AW, [
            ($r(!0), Xr(TW, null, gW(c.situations, (se) => ($r(), Xr("div", {
              class: "card",
              key: se.id
            }, [
              At(uv, {
                onClick: () => S(se.id),
                "situation-info": se
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : Wc("", !0),
          !c.situations || c.situations.length == 0 ? ($r(), Xr("div", FW, " No results found ")) : Wc("", !0),
          !g.value && V.value > s ? ($r(), Xr("div", CW, [
            Lt("div", null, "Page: " + Di(f.value + 1) + " of " + Di(m.value), 1),
            At(oZ, {
              onGoToPage: X,
              currentPage: f.value,
              totalPages: m.value
            }, null, 8, ["currentPage", "totalPages"])
          ])) : Wc("", !0)
        ])
      ])
    ]));
  }
});
const DW = /* @__PURE__ */ we(IW, [["__scopeId", "data-v-af62a182"]]);
const Oi = window.Vue.ref, OW = window.Vue.inject, QW = window.Vue.computed, zW = window.Vue.onMounted, Dv = {
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
}, Ov = (e) => {
  const r = Oi(!1), o = Oi(), i = Oi(e.controls), s = Oi(e.id), c = () => {
    o.value && o.value.focus();
  }, d = OW("registerTab");
  zW(() => {
    if (o.value && d) {
      const m = o.value.parentElement, V = m && m.parentElement ? m.parentElement : void 0, g = Array.from(V ? V.children : []).filter((N) => N.querySelectorAll("[role=tab]").length), T = m ? g.indexOf(m) : -1;
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
  const f = QW(() => ({
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
}, hm = window.Vue.ref, GW = window.Vue.toRef, YW = window.Vue.watch, pm = window.Vue.provide, Qv = {
  prop: "modelValue",
  event: "update:modelValue"
}, zv = {
  "update:modelValue": (e) => !0
}, Gv = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, Yv = (e, r) => {
  const o = GW(e, "modelValue"), i = hm(e.modelValue), s = hm([]);
  YW(o, (E) => {
    m(E);
  });
  const c = (E) => {
    E.preventDefault(), s.value.some((Z, C) => Z.tab && Z.tab.el.contains(E.target) ? (f(C), m(C), !0) : !1);
  }, d = (E) => {
    if (((_) => _.shiftKey || _.ctrlKey || _.metaKey || _.altKey)(E))
      return;
    const C = E.keyCode, A = (_) => {
      _.stopPropagation(), _.preventDefault();
    }, W = s.value.filter((_) => _.tab && !_.tab.disabled), x = s.value.findIndex((_) => _.tab && _.tab.el.contains(document.activeElement));
    let X = x !== -1 ? x : i.value;
    const S = [ne.RIGHT], Q = [ne.LEFT], O = [ne.ENTER, ne.SPACE];
    e.vertical && (S.push(ne.DOWN), Q.push(ne.UP)), S.indexOf(C) > -1 ? (X++, X >= W.length && (X = 0), A(E), f(s.value.indexOf(W[X]))) : Q.indexOf(C) > -1 && (X--, X < 0 && (X = W.length - 1), A(E), f(s.value.indexOf(W[X]))), O.indexOf(C) > -1 && m(X);
  }, f = (E) => {
    s.value.forEach(function(Z, C) {
      E === C && Z.tab && Z.tab.focus();
    });
  }, m = (E) => {
    const Z = s.value[E];
    !Z || Z.tab && Z.tab.disabled || (s.value.forEach((C, A) => {
      C.tab && (C.tab.selected = E === A), C.panel && (C.panel.selected = E === A);
    }), i.value = E, r.emit("update:modelValue", E));
  };
  pm("registerTab", (E) => {
    const Z = E.index;
    Z > -1 && (s.value[Z] = { ...s.value[Z], tab: E }, s.value = [...s.value], T());
  }), pm("registerPanel", (E) => {
    const Z = E.index;
    Z > -1 && (s.value[Z] = {
      ...s.value[Z],
      panel: E
    }, s.value = [...s.value], T());
  });
  const T = () => {
    s.value.forEach(({ tab: E, panel: Z }, C) => {
      if (Z && E) {
        const A = E.id || le("tab"), W = E.controls || le("panel");
        E.controls = W, E.id = A, Z.tab = A, Z.id = W;
      }
      C === i.value && (Z && (Z.selected = !0), E && (E.selected = !0));
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
}, Qi = window.Vue.ref, PW = window.Vue.inject, HW = window.Vue.computed, jW = window.Vue.onMounted, Pv = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, Hv = (e) => {
  const r = Qi(!1), o = Qi(), i = Qi(e.tab), s = Qi(e.id), c = PW("registerPanel");
  jW(() => {
    if (c) {
      const f = o.value, m = f && f.parentElement ? f.parentElement : void 0, V = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      c({
        selected: r,
        id: s,
        tab: i,
        el: o.value,
        index: V
      });
    }
  });
  const d = HW(() => ({
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
}, Hu = window.Vue.defineComponent, $W = window.Vue.resolveComponent, ju = window.Vue.openBlock, $u = window.Vue.createElementBlock, ha = window.Vue.createElementVNode, jv = window.Vue.mergeProps, Vs = window.Vue.renderSlot, XW = window.Vue.createVNode, LW = window.Vue.normalizeStyle, qW = window.Vue.toHandlers, KW = window.Vue.withDirectives, ex = window.Vue.normalizeProps, tx = window.Vue.guardReactiveProps, nx = window.Vue.vShow;
var Xu = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const rx = Dv, ox = Hu({
  props: rx,
  setup(e) {
    return Ov(e);
  },
  components: {
    FeatherRipple: Ln
  }
}), ax = { role: "presentation" }, ix = { class: "tab-text" };
function sx(e, r, o, i, s, c) {
  const d = $W("FeatherRipple");
  return ju(), $u("li", ax, [
    ha("button", jv(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      ha("span", ix, [
        Vs(e.$slots, "default", {}, void 0, !0)
      ]),
      XW(d)
    ], 16)
  ]);
}
var mm = /* @__PURE__ */ Xu(ox, [["render", sx], ["__scopeId", "data-v-e6bb52b6"]]);
const lx = Gv, cx = zv, ux = Hu({
  model: Qv,
  emits: cx,
  props: lx,
  setup(e, r) {
    return Yv(e, r);
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
}), dx = { class: "feather-tab-container" }, fx = { class: "tab-panels" };
function hx(e, r, o, i, s, c) {
  return ju(), $u("div", dx, [
    ha("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: LW({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    ha("ul", jv(e.attrs, qW(e.listeners)), [
      Vs(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    ha("div", fx, [
      Vs(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var px = /* @__PURE__ */ Xu(ux, [["render", hx], ["__scopeId", "data-v-27adffb9"]]);
const mx = Pv, wx = Hu({
  props: mx,
  setup(e) {
    return Hv(e);
  }
});
function vx(e, r, o, i, s, c) {
  return KW((ju(), $u("div", ex(tx(e.attrs)), [
    Vs(e.$slots, "default")
  ], 16)), [
    [nx, e.selected]
  ]);
}
var wm = /* @__PURE__ */ Xu(wx, [["render", vx]]);
const Vx = window.Vue.defineComponent, gx = window.Vue.toDisplayString, Tx = window.Vue.normalizeClass, Ux = window.Vue.openBlock, yx = window.Vue.createElementBlock, Nx = window.Vue.createCommentVNode, Rx = /* @__PURE__ */ Vx({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (Ux(), yx("span", {
      key: 0,
      class: Tx(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, gx(r.severity), 3)) : Nx("", !0);
  }
});
const $v = /* @__PURE__ */ we(Rx, [["__scopeId", "data-v-83c2cdce"]]), kx = window.Vue.defineComponent, vm = window.Vue.toDisplayString, Vm = window.Vue.createElementVNode, Mx = window.Vue.openBlock, bx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Zx = { class: "box" }, Sx = { class: "label" }, Ex = { class: "date" }, Jx = /* @__PURE__ */ kx({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Mx(), bx("div", Zx, [
      Vm("div", Sx, vm(r.label), 1),
      Vm("div", Ex, vm(r.info), 1)
    ]));
  }
});
const xc = /* @__PURE__ */ we(Jx, [["__scopeId", "data-v-b4afa751"]]), Lu = "/alec", Ax = "/alec/engine/configuration", Xv = "/alec/agreement/configuration", Fx = "/alec/situation", Lv = async (e) => {
  try {
    return (await fn.post(`${Xv}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, Cx = async () => {
  try {
    const e = await fn.get(`${Xv}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Wx = async (e, r) => {
  try {
    return (await fn.post(Ax, {
      distanceMeasureName: r ? Ut.HELLINGER_OPTION : Ut.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, qv = async (e, r) => {
  try {
    return (await fn.post(`${Lu}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, gm = async (e, r) => {
  try {
    return (await fn.delete(`${Lu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Kv = async (e, r) => {
  try {
    return (await fn.put(`${Lu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, xx = async (e) => {
  try {
    return (await fn.post(Fx, e)).status === 200;
  } catch {
    return !1;
  }
}, Bx = window.Vue.defineComponent, _x = window.Vue.unref, Ix = window.Vue.renderList, Dx = window.Vue.Fragment, Bc = window.Vue.openBlock, _c = window.Vue.createElementBlock, Ox = window.Vue.toDisplayString, Qx = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const zx = { class: "alarms-list" }, Gx = /* @__PURE__ */ Bx({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Bc(), _c("div", zx, [
      (Bc(!0), _c(Dx, null, Ix(_x(ge.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (s, c) => (Bc(), _c("div", {
        class: Qx(["alarm-count", [`${c.toString().toLowerCase()}-color`, r.size]]),
        key: c
      }, Ox(s.length), 3))), 128))
    ]));
  }
});
const Yx = /* @__PURE__ */ we(Gx, [["__scopeId", "data-v-52d63440"]]), Px = window.Vue.openBlock, Hx = window.Vue.createElementBlock, jx = window.Vue.createElementVNode;
var $x = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Xx = {}, Lx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qx = /* @__PURE__ */ jx("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), Kx = [
  qx
];
function eB(e, r) {
  return Px(), Hx("svg", Lx, Kx);
}
var tB = /* @__PURE__ */ $x(Xx, [["render", eB]]);
const nB = window.Vue.openBlock, rB = window.Vue.createElementBlock, oB = window.Vue.createStaticVNode;
var aB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const iB = {}, sB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lB = /* @__PURE__ */ oB('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), cB = [
  lB
];
function uB(e, r) {
  return nB(), rB("svg", sB, cB);
}
var e1 = /* @__PURE__ */ aB(iB, [["render", uB]]);
const dB = window.Vue.defineComponent, Ht = window.Vue.unref, Ic = window.Vue.createVNode, qu = window.Vue.createElementVNode, Dc = window.Vue.withCtx, zi = window.Vue.openBlock, Oc = window.Vue.createBlock, Qc = window.Vue.createCommentVNode, fB = window.Vue.normalizeClass, hB = window.Vue.createElementBlock, pB = window.Vue.pushScopeId, mB = window.Vue.popScopeId, Ku = (e) => (pB("data-v-e073070b"), e = e(), mB(), e), wB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ qu("span", null, "Acknowledge", -1)), vB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ qu("span", null, "Escalate", -1)), VB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ qu("span", null, "Clear", -1)), gB = /* @__PURE__ */ dB({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = Sn(), i = async (c) => {
      await Gk(r.alarm.id, c) && o.getSituation(r.situationId), r.isSituation && await qv(
        r.situationId,
        Ut.ACCEPTED.toLowerCase()
      );
    }, s = async (c) => {
      await Yk(r.alarm.id, c) && o.getSituation(r.situationId);
    };
    return (c, d) => (zi(), hB("div", {
      class: fB(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Qc("", !0) : (zi(), Oc(Ht(ye), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => i(!0))
      }, {
        default: Dc(() => [
          Ic(Ht($), {
            icon: Ht(Ra),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          wB
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (zi(), Oc(Ht(ye), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Ht(Ut).ESCALATE))
      }, {
        default: Dc(() => [
          Ic(Ht($), {
            icon: Ht(tB),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          vB
        ]),
        _: 1
      })) : Qc("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (zi(), Oc(Ht(ye), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Ht(Ut).CLEAR))
      }, {
        default: Dc(() => [
          Ic(Ht($), {
            icon: Ht(e1),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          VB
        ]),
        _: 1
      })) : Qc("", !0)
    ], 2));
  }
});
const t1 = /* @__PURE__ */ we(gB, [["__scopeId", "data-v-e073070b"]]);
var TB = Object.defineProperty, UB = Object.defineProperties, yB = Object.getOwnPropertyDescriptors, Tm = Object.getOwnPropertySymbols, NB = Object.prototype.hasOwnProperty, RB = Object.prototype.propertyIsEnumerable, Um = (e, r, o) => r in e ? TB(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Vu = (e, r) => {
  for (var o in r || (r = {}))
    NB.call(r, o) && Um(e, o, r[o]);
  if (Tm)
    for (var o of Tm(r))
      RB.call(r, o) && Um(e, o, r[o]);
  return e;
}, n1 = (e, r) => UB(e, yB(r));
const r1 = window.Vue.defineComponent, kB = window.Vue.inject, MB = window.Vue.resolveComponent, zc = window.Vue.openBlock, ym = window.Vue.createElementBlock, lo = window.Vue.createElementVNode, bB = window.Vue.createBlock, Nm = window.Vue.createCommentVNode, ZB = window.Vue.renderSlot, SB = window.Vue.pushScopeId, EB = window.Vue.popScopeId, Gc = window.Vue.toRef, Gi = window.Vue.computed, JB = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var AB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const FB = {
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
}, CB = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, WB = r1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CB,
  props: FB,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: kB("registerCheckbox", (r) => {
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
}), xB = (e) => (SB("data-v-a7af27e2"), e = e(), EB(), e), BB = { class: "layout-container" }, _B = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], IB = { class: "checkbox hover focus" }, DB = /* @__PURE__ */ xB(() => /* @__PURE__ */ lo("div", { class: "box" }, [
  /* @__PURE__ */ lo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ lo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ lo("div", { class: "indeterminate" })
], -1)), OB = ["id", "for"];
function QB(e, r, o, i, s, c) {
  const d = MB("feather-ripple");
  return zc(), ym("div", BB, [
    lo("div", {
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
      lo("div", IB, [
        DB,
        e.disabled ? Nm("", !0) : (zc(), bB(d, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Nm("", !0) : (zc(), ym("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        ZB(e.$slots, "default", {}, void 0, !0)
      ], 8, OB))
    ], 40, _B)
  ]);
}
var Fa = /* @__PURE__ */ AB(WB, [["render", QB], ["__scopeId", "data-v-a7af27e2"]]);
const zB = n1(Vu({}, Sa), {
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
r1({
  props: zB,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    Ea(e);
    const o = Gc(e, "error"), i = Gi(() => le("feather-checkbox-group")), s = Gi(() => le("feather-input-description")), c = Gi(() => le("feather-input-label")), d = Gi(() => {
      const g = JSON.parse(JSON.stringify(r.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!o.value), n1(Vu({}, g), {
        class: "",
        "aria-describedby": s.value
      });
    }), f = JB(i.value), { validate: m } = ba(f, Gc(e, "modelValue"), e.label, e.schema, Gc(e, "error"));
    return Vu({
      groupId: i,
      inputId: f,
      descriptionId: s,
      labelId: c,
      attrs: d,
      validate: m,
      registerCheckbox: (g) => {
        g && f.value === i.value && (f.value = g);
      }
    }, Za(r.attrs));
  },
  components: {
    InputSubText: Ma
  }
});
const GB = window.Vue.openBlock, YB = window.Vue.createElementBlock, o1 = window.Vue.createElementVNode;
var PB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const HB = {}, jB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $B = /* @__PURE__ */ o1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), XB = /* @__PURE__ */ o1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), LB = [
  $B,
  XB
];
function qB(e, r) {
  return GB(), YB("svg", jB, LB);
}
var KB = /* @__PURE__ */ PB(HB, [["render", qB]]);
var e_ = Object.defineProperty, t_ = Object.defineProperties, n_ = Object.getOwnPropertyDescriptors, Rm = Object.getOwnPropertySymbols, r_ = Object.prototype.hasOwnProperty, o_ = Object.prototype.propertyIsEnumerable, km = (e, r, o) => r in e ? e_(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, co = (e, r) => {
  for (var o in r || (r = {}))
    r_.call(r, o) && km(e, o, r[o]);
  if (Rm)
    for (var o of Rm(r))
      o_.call(r, o) && km(e, o, r[o]);
  return e;
}, a1 = (e, r) => t_(e, n_(r));
const a_ = window.Vue.defineComponent, Yc = window.Vue.toRef, i_ = window.Vue.computed, Mm = window.Vue.resolveComponent, bm = window.Vue.openBlock, Zm = window.Vue.createElementBlock, Sm = window.Vue.mergeProps, Em = window.Vue.createVNode, s_ = window.Vue.normalizeClass, Jm = window.Vue.withCtx, l_ = window.Vue.createElementVNode, c_ = window.Vue.toDisplayString, u_ = window.Vue.createCommentVNode;
var d_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const f_ = a1(co(co({}, Bu), Sa), {
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
}), h_ = {
  "update:modelValue": (e) => !0
}, p_ = a_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: h_,
  props: f_,
  setup(e, r) {
    Ea(e), _u(e);
    const o = Yc(e, "id"), i = i_(() => o.value ? o.value : le("feather-textarea-label")), { validate: s } = ba(i, Yc(e, "modelValue"), e.label, e.schema, Yc(e, "error"));
    return co({
      inputId: i,
      incomingId: o,
      validate: s
    }, Za(r.attrs));
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
      const e = co({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), a1(co(co({}, e), this.listeners), {
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
    InputSubText: Ma,
    InputWrapper: xu
  }
}), m_ = ["maxlength"], w_ = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function v_(e, r, o, i, s, c) {
  const d = Mm("InputWrapper"), f = Mm("InputSubText");
  return bm(), Zm("div", Sm(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Em(d, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: s_(["feather-textarea-content", e.contentCls])
    }, {
      default: Jm(() => [
        l_("textarea", Sm(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, m_)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Em(f, { id: e.descriptionId }, {
      right: Jm(() => [
        e.maxlength ? (bm(), Zm("div", w_, c_(e.charCount), 1)) : u_("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var gu = /* @__PURE__ */ d_(p_, [["render", v_], ["__scopeId", "data-v-0648df5c"]]);
const V_ = window.Pinia.defineStore, Ws = V_("appStore", {
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
}), g_ = window.Vue.defineComponent, Am = window.Vue.toDisplayString, Xo = window.Vue.createElementVNode, fr = window.Vue.unref, Lr = window.Vue.openBlock, Fm = window.Vue.createBlock, Lo = window.Vue.createCommentVNode, Cm = window.Vue.createVNode, Yi = window.Vue.createElementBlock, T_ = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const U_ = { class: "row" }, y_ = { class: "label" }, N_ = { class: "action-icons" }, R_ = { class: "icon-btn" }, k_ = {
  key: 0,
  class: "icon-btn"
}, M_ = {
  key: 1,
  class: "icon-btn"
}, b_ = {
  key: 0,
  class: "text"
}, Z_ = window.Vue.watch, Wm = window.Vue.ref, S_ = /* @__PURE__ */ g_({
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
    const r = e, o = Ws(), i = Wm(!1), s = Wm((m = r.memo) == null ? void 0 : m.body);
    Z_(r, () => {
      var V;
      s.value = (V = r.memo) == null ? void 0 : V.body, i.value = !1;
    });
    const c = () => {
      i.value = !i.value;
    }, d = async () => {
      i.value = !1, await qk(r.id, r.type) ? s.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, s.value && s.value !== "" && (await Lk(r.id, r.type, s.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (V, g) => (Lr(), Yi("div", {
      class: T_([r.boxType === "small" ? "box-small" : "box"])
    }, [
      Xo("div", U_, [
        Xo("div", y_, Am(e.label), 1),
        Xo("div", N_, [
          Xo("div", R_, [
            i.value ? Lo("", !0) : (Lr(), Fm(fr($), {
              key: 0,
              icon: fr(KB),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Lr(), Yi("div", k_, [
            Cm(fr($), {
              icon: fr(Ra),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Lo("", !0),
          s.value && s.value != "" || i.value ? (Lr(), Yi("div", M_, [
            Cm(fr($), {
              icon: fr(Vo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Lo("", !0)
        ])
      ]),
      Xo("div", null, [
        !i.value && s.value != null ? (Lr(), Yi("div", b_, Am(s.value), 1)) : Lo("", !0),
        i.value ? (Lr(), Fm(fr(gu), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": g[0] || (g[0] = (T) => s.value = T),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Lo("", !0)
      ])
    ], 2));
  }
});
const gs = /* @__PURE__ */ we(S_, [["__scopeId", "data-v-3f44e250"]]), E_ = window.Vue.defineComponent, hr = window.Vue.unref, qr = window.Vue.createVNode, qo = window.Vue.toDisplayString, qt = window.Vue.createElementVNode, xm = window.Vue.openBlock, Bm = window.Vue.createElementBlock, _m = window.Vue.createCommentVNode, Pc = window.Vue.createTextVNode, J_ = window.Vue.pushScopeId, A_ = window.Vue.popScopeId, ed = (e) => (J_("data-v-a78bcbcc"), e = e(), A_(), e), F_ = {
  key: 0,
  class: "card"
}, C_ = { class: "row" }, W_ = { class: "title" }, x_ = {
  key: 0,
  class: "ack"
}, B_ = /* @__PURE__ */ ed(() => /* @__PURE__ */ qt("strong", null, " Duration: ", -1)), __ = ["innerHTML"], I_ = /* @__PURE__ */ ed(() => /* @__PURE__ */ qt("strong", null, "First Event", -1)), D_ = /* @__PURE__ */ ed(() => /* @__PURE__ */ qt("strong", null, "Last Event", -1)), O_ = { class: "section memo-boxes" }, Im = window.Vue.ref, Q_ = window.Vue.watch, z_ = /* @__PURE__ */ E_({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, i = Im(!1), s = Im(o.alarm), c = new Date().getTime();
    Q_(o, () => {
      s.value = o.alarm, i.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const d = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (m) => {
      const V = await ev(m);
      V && (s.value = V);
    };
    return (m, V) => {
      var g, T, N, F, E;
      return s.value ? (xm(), Bm("div", F_, [
        qt("div", null, [
          qt("div", C_, [
            qr(hr(Fa), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                V[0] || (V[0] = (Z) => i.value = Z),
                d
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            qt("div", W_, qo(s.value.nodeLabel) + " - " + qo(s.value.id), 1),
            qr($v, {
              severity: (g = s.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (xm(), Bm("div", x_, [
              qr(hr($), {
                icon: hr(Ra),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : _m("", !0)
          ]),
          qt("div", null, [
            B_,
            Pc(" " + qo(hr(Ms)(hr(c), new Date(s.value.firstEventTime))), 1)
          ]),
          qt("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, __),
          qt("div", null, [
            I_,
            Pc(" - " + qo(hr(un)(s.value.firstEventTime)), 1)
          ]),
          qt("div", null, [
            D_,
            Pc(" - " + qo(hr(un)(s.value.lastEventTime)), 1)
          ]),
          qt("div", O_, [
            qr(gs, {
              id: (T = s.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (N = s.value) == null ? void 0 : N.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            qr(gs, {
              id: (F = s.value) == null ? void 0 : F.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (E = s.value) == null ? void 0 : E.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        qr(t1, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : _m("", !0);
    };
  }
});
const G_ = /* @__PURE__ */ we(z_, [["__scopeId", "data-v-a78bcbcc"]]), Y_ = window.Vue.openBlock, P_ = window.Vue.createElementBlock, i1 = window.Vue.createElementVNode;
var H_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const j_ = {}, $_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X_ = /* @__PURE__ */ i1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), L_ = /* @__PURE__ */ i1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), q_ = [
  X_,
  L_
];
function K_(e, r) {
  return Y_(), P_("svg", $_, q_);
}
var s1 = /* @__PURE__ */ H_(j_, [["render", K_]]);
const e3 = window.Vue.watch, t3 = window.Vue.ref, n3 = window.Vue.onBeforeUnmount, l1 = (e) => {
  const r = t3(!1), o = (i) => {
    i.keyCode === ne.ESCAPE && (i.preventDefault(), r.value = !r.value);
  };
  return e3(e, (i) => {
    i ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), n3(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, r3 = window.Vue.watch, c1 = (e) => {
  let r;
  r3(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, u1 = window.Vue.watch, d1 = window.Vue.onBeforeUnmount, f1 = window.Vue.nextTick, o3 = window.Vue.onMounted, h1 = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, Ts = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, p1 = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  d1(() => Ts(r, o)), o3(() => u1(e, (i) => {
    i ? f1(() => {
      r = h1(o);
    }) : Ts(r, o);
  }, { immediate: !0 }));
}, a3 = (e, r) => {
  let o;
  d1(() => Ts(o, r.value ? r.value.offsetParent : !1)), u1([e, r], ([i, s]) => {
    i && s ? f1(() => {
      o = h1(s.offsetParent);
    }) : s && Ts(o, s.offsetParent);
  }, {
    immediate: !0
  });
};
var i3 = Object.defineProperty, Dm = Object.getOwnPropertySymbols, s3 = Object.prototype.hasOwnProperty, l3 = Object.prototype.propertyIsEnumerable, Om = (e, r, o) => r in e ? i3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, c3 = (e, r) => {
  for (var o in r || (r = {}))
    s3.call(r, o) && Om(e, o, r[o]);
  if (Dm)
    for (var o of Dm(r))
      l3.call(r, o) && Om(e, o, r[o]);
  return e;
};
const td = window.Vue.defineComponent, pa = window.Vue.ref, u3 = window.Vue.nextTick, m1 = window.Vue.openBlock, w1 = window.Vue.createElementBlock, nd = window.Vue.createElementVNode, d3 = window.Vue.renderSlot, f3 = window.Vue.resolveComponent, h3 = window.Vue.normalizeClass, p3 = window.Vue.withModifiers, m3 = window.Vue.createVNode, Qm = window.Vue.toRef, zm = window.Vue.computed, Gm = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var v1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const w3 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, v3 = td({
  props: w3,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = pa(), r = pa(!1), o = (g, T) => {
      let N = g.compareDocumentPosition(T);
      if (N === 2)
        return "before";
      if (N === 4)
        return "after";
      if (N === 10 || N === 12)
        return "parent";
    }, i = (g) => {
      for (var T = 0; T < g.childNodes.length; T++) {
        var N = g.childNodes[T];
        if (c(N) || i(N))
          return !0;
      }
      return !1;
    }, s = (g) => {
      for (var T = g.childNodes.length - 1; T >= 0; T--) {
        var N = g.childNodes[T];
        if (c(N) || s(N))
          return !0;
      }
      return !1;
    }, c = (g) => d(g) ? (r.value = !0, g.focus && g.focus(), r.value = !1, document.activeElement === g) : !1, d = (g) => {
      if (g.tabIndex > 0 || g.tabIndex === 0 && g.getAttribute("tabIndex") !== null)
        return !0;
      const T = g;
      if (T.disabled || T.tabIndex === -1)
        return !1;
      switch (g.nodeName) {
        case "A":
          const N = g;
          return !!N.href && N.rel !== "ignore";
        case "INPUT":
          const F = g;
          return F.type !== "hidden" && F.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (g) => {
      const T = g.querySelector("[first-focus]");
      T && T.focus ? u3(() => {
        T.focus();
      }) : i(g);
    }, m = pa();
    return {
      trapFocus: () => {
        r.value || setTimeout(() => {
          var g = document.activeElement;
          if (e.value.contains(g)) {
            m.value = g;
            return;
          } else {
            switch (o(e.value, g)) {
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
}), V3 = /* @__PURE__ */ nd("div", { tabindex: "0" }, null, -1), g3 = {
  class: "focus-trap-content",
  ref: "content"
}, T3 = /* @__PURE__ */ nd("div", { tabindex: "0" }, null, -1);
function U3(e, r, o, i, s, c) {
  return m1(), w1("div", null, [
    V3,
    nd("div", g3, [
      d3(e.$slots, "default")
    ], 512),
    T3
  ]);
}
var V1 = /* @__PURE__ */ v1(v3, [["render", U3]]);
const y3 = td({
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
    icon: () => Vo
  },
  components: {
    FeatherIcon: $
  }
}), N3 = ["aria-label"];
function R3(e, r, o, i, s, c) {
  const d = f3("FeatherIcon");
  return m1(), w1("a", {
    href: "#",
    class: h3(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = p3((f) => e.$emit("close"), ["prevent"]))
  }, [
    m3(d, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, N3);
}
var g1 = /* @__PURE__ */ v1(y3, [["render", R3], ["__scopeId", "data-v-fc0f3f00"]]);
const T1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, k3 = {
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
    default: () => T1,
    validator: (e) => !!e.title
  }
}, M3 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
td({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: M3,
  props: k3,
  setup(e, r) {
    const o = bs(Qm(e, "labels"), T1), i = Qm(e, "modelValue"), s = pa(), c = () => {
      r.emit("update:modelValue", !1);
    }, d = zm(() => !!r.slots.footer), f = zm(() => le("dialog-header"));
    e.relative ? a3(i, s) : p1(i), c1(i), Gm(l1(i), () => {
      c();
    });
    const m = pa(e.modelValue);
    return Gm(m, (V) => {
      V ? r.emit("shown") : r.emit("hidden");
    }), c3({ close: c, hasFooter: d, headerId: f, element: s, shown: m }, o);
  },
  components: {
    FocusTrap: V1,
    DialogClose: g1
  }
});
var b3 = Object.defineProperty, Ym = Object.getOwnPropertySymbols, Z3 = Object.prototype.hasOwnProperty, S3 = Object.prototype.propertyIsEnumerable, Pm = (e, r, o) => r in e ? b3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, xs = (e, r) => {
  for (var o in r || (r = {}))
    Z3.call(r, o) && Pm(e, o, r[o]);
  if (Ym)
    for (var o of Ym(r))
      S3.call(r, o) && Pm(e, o, r[o]);
  return e;
};
const Bs = window.Vue.defineComponent, Hm = window.Vue.toRef, jm = window.Vue.watch, $m = window.Vue.ref, Xm = window.Vue.resolveComponent, Pi = window.Vue.openBlock, Lm = window.Vue.createBlock, E3 = window.Vue.Teleport, qm = window.Vue.createElementBlock, Hc = window.Vue.createVNode, Km = window.Vue.Transition, jc = window.Vue.withCtx, ew = window.Vue.createCommentVNode, J3 = window.Vue.withDirectives, A3 = window.Vue.normalizeStyle, F3 = window.Vue.normalizeClass, tw = window.Vue.createElementVNode, C3 = window.Vue.renderSlot, W3 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var x3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const U1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, B3 = {
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
    default: () => U1,
    validator: (e) => !!e.title
  }
}, _3 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, I3 = Bs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: _3,
  props: B3,
  setup(e, r) {
    const o = bs(Hm(e, "labels"), U1), i = Hm(e, "modelValue"), s = () => {
      r.emit("update:modelValue", !1);
    };
    p1(i), c1(i), jm(l1(i), () => {
      s();
    });
    const c = $m(), d = $m(!1);
    return jm(d, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), xs({ close: s, shown: d, isShown: i, element: c }, o);
  },
  components: {
    DialogClose: g1,
    FocusTrap: V1
  }
}), D3 = {
  key: 0,
  class: "drawer-container feather-styles"
}, O3 = {
  key: 0,
  class: "greyedOut"
}, Q3 = ["aria-label"], z3 = { class: "slot" };
function G3(e, r, o, i, s, c) {
  const d = Xm("dialog-close"), f = Xm("focus-trap");
  return Pi(), Lm(E3, { to: "body" }, [
    e.modelValue ? (Pi(), qm("div", D3, [
      Hc(Km, { name: "greyOutShim" }, {
        default: jc(() => [
          e.modelValue ? (Pi(), qm("div", O3)) : ew("", !0)
        ]),
        _: 1
      }),
      Hc(Km, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (m) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (m) => e.shown = !1)
      }, {
        default: jc(() => [
          J3((Pi(), Lm(f, {
            enable: e.modelValue,
            style: A3({ width: e.width }),
            key: "sect",
            class: F3(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: jc(() => [
              tw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                tw("div", z3, [
                  C3(e.$slots, "default", {}, void 0, !0)
                ]),
                Hc(d, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, Q3)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [W3, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : ew("", !0)
  ]);
}
var Y3 = /* @__PURE__ */ x3(I3, [["render", G3], ["__scopeId", "data-v-0a36e1dc"]]);
const P3 = xs({
  label: {
    type: String,
    required: !0
  }
}, Dv);
Bs({
  name: "DrawerTab",
  props: P3,
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
    return Ov(e);
  },
  components: {
    FeatherRipple: Ln
  }
});
const H3 = xs({}, Gv), j3 = zv;
Bs({
  emits: j3,
  model: Qv,
  props: H3,
  setup(e, r) {
    return Yv(e, r);
  }
});
const $3 = xs({
  header: {
    type: String
  }
}, Pv);
Bs({
  name: "DrawerTabContent",
  props: $3,
  setup(e) {
    return Hv(e);
  },
  directives: {
    MenuFocusLoop: IJ
  }
});
const X3 = window.Vue.defineComponent, Tu = window.Vue.createElementVNode, nw = window.Vue.unref, L3 = window.Vue.renderList, q3 = window.Vue.Fragment, $c = window.Vue.openBlock, rw = window.Vue.createElementBlock, K3 = window.Vue.createVNode, eI = window.Vue.withCtx, tI = window.Vue.createBlock, nI = window.Vue.pushScopeId, rI = window.Vue.popScopeId, oI = (e) => (nI("data-v-c2050669"), e = e(), rI(), e), aI = { class: "content" }, iI = /* @__PURE__ */ oI(() => /* @__PURE__ */ Tu("h4", null, "Choose the situation where to move the alarms:", -1)), sI = { class: "situation-list" }, lI = window.Vue.ref, cI = window.Vue.watch, uI = /* @__PURE__ */ X3({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, i = Sn(), s = lI(o.visible);
    return cI(o, () => {
      s.value = o.visible;
    }), (c, d) => ($c(), tI(nw(Y3), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: eI(() => [
        Tu("div", aI, [
          iI,
          Tu("div", sI, [
            ($c(!0), rw(q3, null, L3(nw(i).situations.filter(
              (f) => f.id != o.situationId
            ), (f) => ($c(), rw("div", {
              class: "card",
              key: f.id
            }, [
              K3(uv, {
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
const y1 = /* @__PURE__ */ we(uI, [["__scopeId", "data-v-c2050669"]]), dI = window.Vue.openBlock, fI = window.Vue.createElementBlock, N1 = window.Vue.createElementVNode;
var hI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const pI = {}, mI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wI = /* @__PURE__ */ N1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), vI = /* @__PURE__ */ N1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), VI = [
  wI,
  vI
];
function gI(e, r) {
  return dI(), fI("svg", mI, VI);
}
var TI = /* @__PURE__ */ hI(pI, [["render", gI]]);
const UI = window.Vue.defineComponent, Xn = window.Vue.createElementVNode, Ft = window.Vue.createVNode, Vt = window.Vue.unref, Hi = window.Vue.withCtx, yI = window.Vue.renderList, NI = window.Vue.Fragment, ji = window.Vue.openBlock, $i = window.Vue.createElementBlock, RI = window.Vue.createCommentVNode, kI = window.Vue.pushScopeId, MI = window.Vue.popScopeId, Ca = (e) => (kI("data-v-98a53ee8"), e = e(), MI(), e), bI = { class: "container" }, ZI = { class: "row" }, SI = /* @__PURE__ */ Ca(() => /* @__PURE__ */ Xn("div", { class: "title" }, "Alarms", -1)), EI = { class: "row actions" }, JI = /* @__PURE__ */ Ca(() => /* @__PURE__ */ Xn("span", null, "Clear", -1)), AI = /* @__PURE__ */ Ca(() => /* @__PURE__ */ Xn("span", null, "Acknowledge", -1)), FI = /* @__PURE__ */ Ca(() => /* @__PURE__ */ Xn("span", null, "Move", -1)), CI = /* @__PURE__ */ Ca(() => /* @__PURE__ */ Xn("span", null, "Remove", -1)), WI = { class: "section" }, xI = {
  key: 0,
  class: "alarm-list"
}, Xc = window.Vue.ref, BI = window.Vue.watch, _I = window.Vue.reactive, II = /* @__PURE__ */ UI({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = Ws(), i = Sn(), s = Xc(!1), c = Xc(["all"]), d = Xc(!1), f = _I({
      selectedAlarms: [],
      alarms: r.alarms
    });
    BI(r, () => {
      c.value = ["all"], f.alarms = r.alarms, f.selectedAlarms = [], s.value = !1;
    });
    const m = (Z) => {
      f.selectedAlarms.includes(Z) ? ge.exports.remove(f.selectedAlarms, (C) => C == Z) : f.selectedAlarms.push(Z);
    }, V = async (Z) => {
      f.selectedAlarms.length ? (await Pk(f.selectedAlarms, Z), i.getSituation(r.situationId), f.selectedAlarms = [], s.value = !1) : o.showErrorMsg("You need to choose at least one alarm!");
    }, g = () => f.selectedAlarms.length === r.alarms.length ? (o.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : f.selectedAlarms.length ? !0 : (o.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      g() && (await gm(
        r.situationId,
        f.selectedAlarms
      ) ? i.getSituation(r.situationId) : o.showErrorMsg("Error on removing alarms :("));
    }, N = (Z) => {
      Z.includes("all") ? f.alarms = r.alarms : f.alarms = r.alarms.filter((C) => Z.includes(C.severity));
    }, F = async (Z) => {
      g() && (await gm(
        r.situationId,
        f.selectedAlarms
      ) && await Kv(
        Z,
        f.selectedAlarms
      ) ? i.getSituation(r.situationId) : o.showErrorMsg("Error on moving the alarms :(")), d.value = !1;
    }, E = () => {
      f.selectedAlarms.length ? d.value = !0 : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (Z, C) => (ji(), $i("div", bI, [
      Xn("div", ZI, [
        SI,
        Ft(ga, {
          alarms: r.alarms,
          onSelectedOption: N,
          property: "severity"
        }, null, 8, ["alarms"])
      ]),
      Xn("div", EI, [
        Ft(Vt(Fa), {
          modelValue: s.value,
          "onUpdate:modelValue": C[0] || (C[0] = (A) => s.value = A),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Ft(Vt(ye), {
          onClick: C[1] || (C[1] = () => V("clear"))
        }, {
          default: Hi(() => [
            Ft(Vt($), {
              icon: Vt(e1),
              class: "icon clear"
            }, null, 8, ["icon"]),
            JI
          ]),
          _: 1
        }),
        Ft(Vt(ye), {
          onClick: C[2] || (C[2] = () => V("ack"))
        }, {
          default: Hi(() => [
            Ft(Vt($), {
              icon: Vt(Ra),
              class: "icon ack"
            }, null, 8, ["icon"]),
            AI
          ]),
          _: 1
        }),
        Ft(Vt(ye), { onClick: E }, {
          default: Hi(() => [
            Ft(Vt($), {
              icon: Vt(s1),
              class: "icon move"
            }, null, 8, ["icon"]),
            FI
          ]),
          _: 1
        }),
        Ft(Vt(ye), { onClick: T }, {
          default: Hi(() => [
            Ft(Vt($), {
              icon: Vt(TI),
              class: "icon remove"
            }, null, 8, ["icon"]),
            CI
          ]),
          _: 1
        })
      ]),
      Xn("div", WI, [
        f.alarms.length > 0 ? (ji(), $i("div", xI, [
          (ji(!0), $i(NI, null, yI(f.alarms, (A) => (ji(), $i("div", {
            key: A.id
          }, [
            Ft(G_, {
              alarm: A,
              selectAll: s.value,
              "situation-id": r.situationId,
              onAlarmSelected: m
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : RI("", !0)
      ]),
      Ft(y1, {
        situationId: r.situationId,
        visible: d.value,
        onSituationSelected: F,
        onDrawerClosed: C[3] || (C[3] = () => d.value = !1)
      }, null, 8, ["situationId", "visible"])
    ]));
  }
});
const DI = /* @__PURE__ */ we(II, [["__scopeId", "data-v-98a53ee8"]]), OI = "/whoami", QI = async () => {
  try {
    const e = await fn.get(OI);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, zI = window.Pinia.defineStore, Wa = zI("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const e = await QI();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await Cx();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async savePermission(e) {
      if (this.allowSave = e, !e) {
        const r = await Lv(e);
        this.allowSave = r;
      }
    }
  }
}), GI = window.Vue.defineComponent, jt = window.Vue.createVNode, gt = window.Vue.unref, Lc = window.Vue.normalizeClass, Xi = window.Vue.toDisplayString, pr = window.Vue.openBlock, mr = window.Vue.createElementBlock, Li = window.Vue.createCommentVNode, YI = window.Vue.withCtx, Xt = window.Vue.createElementVNode, PI = window.Vue.createTextVNode, HI = window.Vue.Fragment, jI = window.Vue.pushScopeId, $I = window.Vue.popScopeId, XI = (e) => (jI("data-v-7d539e83"), e = e(), $I(), e), LI = { class: "section" }, qI = { class: "action-section" }, KI = {
  key: 0,
  class: "btn-row"
}, eD = { key: 0 }, tD = { key: 1 }, nD = {
  key: 0,
  class: "situation-detail"
}, rD = { class: "situation-info" }, oD = { class: "id" }, aD = { key: 0 }, iD = ["innerHTML"], sD = /* @__PURE__ */ XI(() => /* @__PURE__ */ Xt("p", null, null, -1)), lD = { class: "boxes" }, cD = { class: "parameters" }, uD = { class: "section memo-boxes" }, dD = { key: 0 }, ow = window.Vue.ref, fD = window.Vue.watch, hD = /* @__PURE__ */ GI({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Ws(), i = Sn(), s = Ut.REJECTED, c = Wa(), d = ow(r.situationInfo.status), f = ow(r.situationInfo);
    fD(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const m = async (V) => {
      var T;
      await qv(
        (T = r.situationInfo) == null ? void 0 : T.id,
        V.toLowerCase()
      ) ? (d.value = V, i.getSituation(r.situationInfo.id)) : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (V, g) => {
      var T, N, F, E, Z, C, A, W, x, X, S, Q;
      return pr(), mr(HI, null, [
        Xt("div", LI, [
          Xt("div", qI, [
            jt(t1, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            gt(c).allowSave ? (pr(), mr("div", KI, [
              jt(gt(ye), {
                class: Lc(["btn", { rejected: d.value == gt(s) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = () => m(gt(s)))
              }, {
                default: YI(() => [
                  jt(gt($), {
                    icon: gt(tv),
                    "aria-hidden": "true",
                    class: Lc(["icon reject", { rejected: d.value == gt(s) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == gt(s) ? (pr(), mr("span", eD, Xi(gt(s)), 1)) : (pr(), mr("span", tD, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Li("", !0)
          ]),
          f.value ? (pr(), mr("div", nD, [
            Xt("div", {
              class: Lc(["severity-line", [`${(N = (T = f.value) == null ? void 0 : T.severity) == null ? void 0 : N.toLowerCase()}-bg dark`]])
            }, null, 2),
            Xt("div", rD, [
              Xt("div", oD, [
                Xt("div", null, [
                  PI(" Situation - " + Xi((F = f.value) == null ? void 0 : F.id) + " - affecting " + Xi(gt(ge.exports.size)(gt(ge.exports.groupBy)((E = f.value) == null ? void 0 : E.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (pr(), mr("span", aD, "having " + Xi(f.value.alarms.length) + " alarms ", 1)) : Li("", !0)
                ]),
                jt($v, {
                  severity: (Z = f.value) == null ? void 0 : Z.severity
                }, null, 8, ["severity"])
              ]),
              Xt("span", {
                innerHTML: f.value.description
              }, null, 8, iD),
              sD,
              Xt("div", lD, [
                jt(xc, {
                  label: "First Event",
                  info: gt(un)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                jt(xc, {
                  label: "Last Event",
                  info: gt(un)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                jt(xc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Xt("div", cD, [
              jt(Yx, {
                alarms: (C = f.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Li("", !0),
          Xt("div", uD, [
            jt(gs, {
              id: (A = f.value) == null ? void 0 : A.id,
              situationId: (W = f.value) == null ? void 0 : W.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (x = f.value) == null ? void 0 : x.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            jt(gs, {
              id: (X = f.value) == null ? void 0 : X.id,
              situationId: (S = f.value) == null ? void 0 : S.id,
              label: "Journal Memo",
              type: "journal",
              memo: (Q = f.value) == null ? void 0 : Q.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (pr(), mr("div", dD, [
          jt(DI, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Li("", !0)
      ], 64);
    };
  }
});
const pD = /* @__PURE__ */ we(hD, [["__scopeId", "data-v-7d539e83"]]);
var mD = Object.defineProperty, wD = Object.defineProperties, vD = Object.getOwnPropertyDescriptors, aw = Object.getOwnPropertySymbols, VD = Object.prototype.hasOwnProperty, gD = Object.prototype.propertyIsEnumerable, iw = (e, r, o) => r in e ? mD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Uu = (e, r) => {
  for (var o in r || (r = {}))
    VD.call(r, o) && iw(e, o, r[o]);
  if (aw)
    for (var o of aw(r))
      gD.call(r, o) && iw(e, o, r[o]);
  return e;
}, TD = (e, r) => wD(e, vD(r));
const R1 = window.Vue.defineComponent, gr = window.Vue.resolveComponent, ss = window.Vue.openBlock, sw = window.Vue.createBlock, ls = window.Vue.mergeProps, Tr = window.Vue.withCtx, k1 = window.Vue.createElementBlock, UD = window.Vue.Fragment, yD = window.Vue.renderList, ND = window.Vue.createTextVNode, RD = window.Vue.toDisplayString, kD = window.Vue.computed, lw = window.Vue.toRef, Ko = window.Vue.createVNode, cw = window.Vue.toHandlers, MD = window.Vue.renderSlot, bD = window.Vue.normalizeClass, ZD = window.Vue.createElementVNode;
var M1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const SD = R1({
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
        Ta(r, this.$refs.list.$el);
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
    FeatherList: Qu,
    FeatherListItem: Aa
  }
});
function ED(e, r, o, i, s, c) {
  const d = gr("FeatherListItem"), f = gr("FeatherList");
  return ss(), sw(f, ls(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Tr(() => [
      (ss(!0), k1(UD, null, yD(e.options, (m, V) => (ss(), sw(d, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(V),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(V),
        selected: e.isSelected(V),
        onClick: (g) => e.select(m)
      }, {
        default: Tr(() => [
          ND(RD(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var JD = /* @__PURE__ */ M1(SD, [["render", ED], ["__scopeId", "data-v-eae820da"]]);
const AD = TD(Uu(Uu({}, Bu), Sa), {
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
}), FD = {
  "update:modelValue": (e) => !0
}, CD = R1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: FD,
  props: AD,
  setup(e, r) {
    Ea(e), _u(e);
    const o = kD(() => le("feather-select-input")), { validate: i } = ba(o, lw(e, "modelValue"), e.label, e.schema, lw(e, "error"));
    return Uu({
      inputId: o,
      validate: i
    }, Za(r.attrs));
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
    icon: () => As
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
    InputWrapper: xu,
    InputSubText: Ma,
    FeatherMenu: Nv,
    List: JD,
    FeatherIcon: $
  }
});
function WD(e, r, o, i, s, c) {
  const d = gr("FeatherIcon"), f = gr("InputWrapper"), m = gr("List"), V = gr("FeatherMenu"), g = gr("InputSubText");
  return ss(), k1("div", ls(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ko(V, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Tr((T) => [
        Ko(f, ls({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, T.attrs, cw(T.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Tr(() => [
            MD(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Tr(() => [
            Ko(d, {
              class: bD(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Tr(() => [
            ZD("input", ls(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, cw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Tr(() => [
        Ko(m, {
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
    Ko(g, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var xD = /* @__PURE__ */ M1(CD, [["render", WD], ["__scopeId", "data-v-ecb32d90"]]);
const BD = window.Vue.openBlock, _D = window.Vue.createElementBlock, b1 = window.Vue.createElementVNode;
var ID = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const DD = {}, OD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QD = /* @__PURE__ */ b1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), zD = /* @__PURE__ */ b1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), GD = [
  QD,
  zD
];
function YD(e, r) {
  return BD(), _D("svg", OD, GD);
}
var PD = /* @__PURE__ */ ID(DD, [["render", YD]]);
const cs = window.Vue.openBlock, yu = window.Vue.createElementBlock, Z1 = window.Vue.createElementVNode, HD = window.Vue.defineComponent, wr = window.Vue.ref, jD = window.Vue.provide, uw = window.Vue.computed, $D = window.Vue.onUnmounted, dw = window.Vue.toRef, XD = window.Vue.resolveComponent, LD = window.Vue.Fragment, qD = window.Vue.createBlock, KD = window.Vue.Teleport, fw = window.Vue.createVNode, eO = window.Vue.Transition, tO = window.Vue.withCtx, nO = window.Vue.normalizeClass, rO = window.Vue.normalizeStyle, oO = window.Vue.toDisplayString, aO = window.Vue.createCommentVNode, iO = window.Vue.renderSlot, qc = window.Vue.nextTick;
var S1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const sO = {}, lO = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, cO = /* @__PURE__ */ Z1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), uO = [
  cO
];
function dO(e, r) {
  return cs(), yu("svg", lO, uO);
}
var fO = /* @__PURE__ */ S1(sO, [["render", dO]]), Ge = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ge || {}), Mn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Mn || {});
const hO = (e, r, o, i = 9) => {
  const s = window.innerHeight - e.bottom, c = window.innerWidth - e.right, d = [];
  e.top >= r.height + i && d.push(Ge.top), s >= r.height + i && d.push(Ge.bottom);
  const f = [];
  c >= r.width + i && f.push(Ge.right), e.left >= r.width + i && f.push(Ge.left);
  let m = [...f, ...d];
  return (o === Ge.top || o === Ge.bottom) && (m = [...d, ...f]), m.indexOf(o) > -1 ? o : m.length ? m[0] : o;
}, pO = (e, r, o, i, s = 28) => {
  if (e === Ge.left || e === Ge.right)
    return Mn.center;
  const c = r.left + r.width / 2, d = window.innerWidth - r.right, f = [], m = c, V = d + r.width / 2, g = o.width - s, T = o.width / 2;
  return m >= T && V >= T && f.push(Mn.center), V >= g && f.push(Mn.left), m >= g && f.push(Mn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, mO = {
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
    default: () => Mn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, wO = HD({
  props: mO,
  setup(e) {
    const r = wr(!1), o = wr(!1), i = le("feather-tooltip-trigger"), s = le("feather-tooltip"), c = "data-feather-tooltip";
    jD("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      Nr(d), r.value || (d = yr(Z, e.enterDelay));
    }, m = () => {
      Nr(d), d = yr(C, e.exitDelay);
    }, V = (j) => {
      j.keyCode === ne.ESCAPE && (j.preventDefault(), C(!0));
    }, g = uw(() => ({
      [c]: i,
      "aria-describedby": s
    })), T = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: V
    }, N = wr(document), F = yv(N, () => C(!0));
    $D(() => C(!0));
    const E = () => document.getElementById(s), Z = () => {
      o.value = !1, r.value = !0, qc(() => {
        const j = E();
        K(j), r.value = !1, qc(() => {
          o.value = !0, r.value = !0, F.value = !0;
        });
      });
    }, C = (j = !1) => {
      Q.value = "", S.value = "", O.value = "", _.value = "", r.value = !1, j && (o.value = !1), F.value = !1;
    }, A = dw(e, "placement"), W = dw(e, "pointerAlignment"), x = 8, X = 24, S = wr(""), Q = wr(""), O = wr(""), _ = wr(""), H = uw(() => _.value ? "p-" + _.value : !1), K = (j) => {
      const z = document.querySelector(`[${c}=${i}]`);
      if (!z) {
        console.log("trigger not found");
        return;
      }
      qc(() => {
        const se = z.getBoundingClientRect(), ve = j.getBoundingClientRect(), de = hO(se, ve, A.value, x), Ie = pO(de, se, ve, W.value, X);
        O.value = Ie.toString(), _.value = de.toString();
        let De = 0, Xe = 0;
        if ((de === Ge.left || de === Ge.right) && (De = se.top + se.height / 2 - ve.height / 2, de === Ge.left && (Xe = se.left - ve.width - x), de === Ge.right && (Xe = se.right)), de === Ge.top || de === Ge.bottom) {
          De = se.top - ve.height - x, de === Ge.bottom && (De = se.bottom);
          const Uo = se.left + se.width / 2;
          switch (Ie) {
            case Mn.center:
              Xe = Uo - ve.width / 2;
              break;
            case Mn.left:
              Xe = Uo - X;
              break;
            case Mn.right:
              Xe = Uo - ve.width + X;
              break;
          }
        }
        S.value = De.toString() + "px", Q.value = Xe.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: T,
      show: r,
      animate: o,
      alignmentClass: O,
      placementClass: H,
      top: S,
      left: Q,
      tooltipID: s
    };
  },
  components: {
    Pointer: fO
  }
}), vO = ["id"];
function VO(e, r, o, i, s, c) {
  const d = XD("Pointer");
  return cs(), yu(LD, null, [
    (cs(), qD(KD, { to: "body" }, [
      fw(eO, { css: e.animate }, {
        default: tO(() => [
          e.show ? (cs(), yu("div", {
            key: 0,
            class: nO(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: rO({ left: e.left, top: e.top })
          }, [
            Z1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, oO(e.title), 9, vO),
            fw(d, { class: "tooltip-pointer" })
          ], 6)) : aO("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    iO(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var hw = /* @__PURE__ */ S1(wO, [["render", VO], ["__scopeId", "data-v-3da6b22e"]]);
const gO = window.Vue.defineComponent, Kc = window.Vue.normalizeStyle, eu = window.Vue.createElementVNode, ea = window.Vue.unref, pw = window.Vue.toHandlers, mw = window.Vue.mergeProps, ww = window.Vue.withCtx, vw = window.Vue.createVNode, TO = window.Vue.renderList, UO = window.Vue.Fragment, ta = window.Vue.openBlock, na = window.Vue.createElementBlock, Vw = window.Vue.normalizeClass, gw = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const yO = { class: "row" }, NO = /* @__PURE__ */ gO({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), i = (c, d) => c ? (Number(d) - Number(c)) * r.proportion : 0, s = (c) => c ? (Number(c) - Number(r.minStart)) * r.proportion : 0;
    return (c, d) => (ta(), na("div", yO, [
      eu("div", {
        class: "line-gray",
        style: Kc({
          width: s(r.events[0].createTime) + "px"
        })
      }, null, 4),
      vw(ea(hw), {
        title: ea(un)(e.alarm.firstEventTime)
      }, {
        default: ww(({ attrs: f, on: m }) => [
          eu("div", mw({ class: "circle" }, f, pw(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (ta(!0), na(UO, null, TO(r.events, (f, m) => (ta(), na("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[m + 1] ? (ta(), na("div", {
          key: 0,
          class: Vw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Kc({
            width: i(f.createTime, r.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : gw("", !0),
        vw(ea(hw), {
          title: ea(un)(e.alarm.firstEventTime)
        }, {
          default: ww(({ attrs: V, on: g }) => [
            r.events[m + 1] ? (ta(), na("div", mw({ key: 0 }, V, pw(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : gw("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      eu("div", {
        class: Vw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Kc({
          width: i(e.events[e.events.length - 1].createTime, ea(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const RO = /* @__PURE__ */ we(NO, [["__scopeId", "data-v-3341d12d"]]), kO = window.Vue.openBlock, MO = window.Vue.createElementBlock, E1 = window.Vue.createElementVNode;
var bO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const ZO = {}, SO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EO = /* @__PURE__ */ E1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), JO = /* @__PURE__ */ E1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), AO = [
  EO,
  JO
];
function FO(e, r) {
  return kO(), MO("svg", SO, AO);
}
var CO = /* @__PURE__ */ bO(ZO, [["render", FO]]);
const WO = window.Vue.defineComponent, Nu = window.Vue.createElementVNode, xO = window.Vue.renderList, Tw = window.Vue.Fragment, tu = window.Vue.openBlock, nu = window.Vue.createElementBlock, BO = window.Vue.normalizeClass, _O = window.Vue.unref, Uw = window.Vue.toDisplayString, IO = window.Vue.pushScopeId, DO = window.Vue.popScopeId, OO = (e) => (IO("data-v-2e087f7b"), e = e(), DO(), e), QO = /* @__PURE__ */ OO(() => /* @__PURE__ */ Nu("strong", null, "Events:", -1)), zO = /* @__PURE__ */ WO({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (tu(), nu(Tw, null, [
      QO,
      (tu(!0), nu(Tw, null, xO(r.events, (s) => (tu(), nu("div", {
        class: "event-description",
        key: s.id
      }, [
        Nu("div", {
          class: BO(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Nu("div", null, Uw(_O(un)(s.createTime)) + " - " + Uw(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const GO = /* @__PURE__ */ we(zO, [["__scopeId", "data-v-2e087f7b"]]), YO = window.Vue.defineComponent, PO = window.Vue.normalizeClass, Tt = window.Vue.createElementVNode, Kr = window.Vue.toDisplayString, at = window.Vue.unref, eo = window.Vue.createVNode, J1 = window.Vue.createTextVNode, HO = window.Vue.renderList, yw = window.Vue.Fragment, Rn = window.Vue.openBlock, vr = window.Vue.createElementBlock, Nw = window.Vue.createBlock, qi = window.Vue.createCommentVNode, jO = window.Vue.normalizeStyle, $O = window.Vue.pushScopeId, XO = window.Vue.popScopeId, LO = (e) => ($O("data-v-01717d0d"), e = e(), XO(), e), qO = { class: "section detail" }, KO = { class: "id" }, eQ = {
  key: 0,
  class: "section"
}, tQ = /* @__PURE__ */ LO(() => /* @__PURE__ */ Tt("div", { class: "id" }, "Alarms", -1)), nQ = { class: "action-btns" }, rQ = { class: "zoom" }, oQ = /* @__PURE__ */ J1(" Zoom "), aQ = { class: "times" }, iQ = {
  key: 0,
  class: "timeline-container"
}, sQ = { class: "alarm-id" }, lQ = {
  key: 0,
  class: "panel"
}, Qn = window.Vue.ref, cQ = window.Vue.watch, uQ = /* @__PURE__ */ YO({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var X, S;
    const r = e, o = Sn(), i = Qn(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Qn(s[0]), d = Qn(r.width), f = Qn(r.width), m = Qn(new Date().getTime()), V = () => {
      var Q, O;
      if (!r.situation.events) {
        const _ = (O = (Q = r.situation) == null ? void 0 : Q.alarms) == null ? void 0 : O.map((H) => H.id);
        o.getEvents(r.situation.id, _);
      }
    };
    V();
    const g = () => (m.value = new Date().getTime(), d.value / (Number(m.value) - Number(N.value))), T = Qn(r.situation.alarms), N = Qn(
      ((S = ge.exports.minBy((X = r.situation) == null ? void 0 : X.alarms, "firstEventTime")) == null ? void 0 : S.firstEventTime) || new Date().getTime()
    ), F = Qn(g());
    cQ(r, () => {
      var Q, O;
      N.value = ((O = ge.exports.minBy((Q = r.situation) == null ? void 0 : Q.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), V(), d.value = f.value, F.value = g(), T.value = r.situation.alarms, c.value = s[0];
    });
    const E = (Q) => {
      if ((Q == null ? void 0 : Q.id) === 1 && (T.value = r.situation.alarms), (Q == null ? void 0 : Q.id) === 2) {
        const O = ge.exports.groupBy(T.value, "severity"), _ = [
          ...O.CRITICAL || [],
          ...O.MAJOR || [],
          ...O.MINOR || [],
          ...O.WARNING || [],
          ...O.NORMAL || [],
          ...O.CLEARED || [],
          ...O.INDETERMINATE || []
        ];
        T.value = _.filter((H) => H);
      }
      if ((Q == null ? void 0 : Q.id) === 3) {
        const O = ge.exports.reverse(
          ge.exports.sortBy(
            r.situation.alarms,
            (_) => Number(_.lastEventTime) - Number(_.firstEventTime)
          )
        );
        T.value = O;
      }
    }, Z = () => {
      d.value += 100, F.value = g();
    }, C = () => {
      d.value -= 100, F.value = g();
    }, A = () => {
      d.value = f.value, F.value = g();
    }, W = (Q) => {
      i.value = Q;
    }, x = () => {
      i.value = 0;
    };
    return (Q, O) => {
      var _, H;
      return Rn(), vr(yw, null, [
        Tt("div", qO, [
          Tt("div", {
            class: PO(["severity-line", [`${(H = (_ = r.situation) == null ? void 0 : _.severity) == null ? void 0 : H.toLowerCase()}-bg dark`]])
          }, null, 2),
          Tt("div", null, [
            Tt("div", KO, "Situation " + Kr(r.situation.id), 1),
            Tt("div", null, " Duration: " + Kr(at(Ms)(m.value, new Date(N.value))), 1)
          ])
        ]),
        T.value && T.value.length > 0 ? (Rn(), vr("div", eQ, [
          tQ,
          Tt("div", nQ, [
            eo(at(xD), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: c.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (K) => c.value = K),
                E
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Tt("div", rQ, [
              oQ,
              Tt("div", null, [
                eo(at($), {
                  icon: at(PD),
                  class: "zoom-icon",
                  onClick: Z
                }, null, 8, ["icon"]),
                eo(at($), {
                  icon: at(Tv),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                eo(at($), {
                  icon: at(CO),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Rn(), vr("div", {
            key: 0,
            class: "alarms",
            style: jO({
              width: f.value + 50 + "px"
            })
          }, [
            Tt("div", aQ, [
              Tt("div", null, Kr(at(un)(N.value)), 1),
              Tt("div", null, Kr(at(un)(m.value)), 1)
            ]),
            e.situation.events ? (Rn(), vr("div", iQ, [
              (Rn(!0), vr(yw, null, HO(T.value, (K) => (Rn(), vr("div", {
                class: "timeline",
                key: K.id
              }, [
                Tt("div", sQ, [
                  J1(Kr(K.nodeLabel) + " - " + Kr(K.id) + " ", 1),
                  i.value === K.id ? (Rn(), Nw(at($), {
                    key: 0,
                    icon: at(As),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (Rn(), Nw(at($), {
                    key: 1,
                    icon: at(fv),
                    class: "zoom-icon expand",
                    onClick: () => W(K.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                eo(RO, {
                  alarm: K,
                  proportion: F.value,
                  "min-start": N.value,
                  events: r.situation.events[K.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === K.id ? (Rn(), vr("div", lQ, [
                  eo(GO, {
                    events: r.situation.events[K.id]
                  }, null, 8, ["events"])
                ])) : qi("", !0)
              ]))), 128))
            ])) : qi("", !0)
          ], 4)) : qi("", !0)
        ])) : qi("", !0)
      ], 64);
    };
  }
});
const dQ = /* @__PURE__ */ we(uQ, [["__scopeId", "data-v-01717d0d"]]), fQ = window.Vue.openBlock, hQ = window.Vue.createElementBlock, pQ = window.Vue.createElementVNode;
var mQ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const wQ = {}, vQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VQ = /* @__PURE__ */ pQ("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), gQ = [
  VQ
];
function TQ(e, r) {
  return fQ(), hQ("svg", vQ, gQ);
}
var ma = /* @__PURE__ */ mQ(wQ, [["render", TQ]]);
const A1 = window.Vue.defineComponent, ru = window.Vue.ref, UQ = window.Vue.toRef, ou = window.Vue.inject, Rw = window.Vue.watch, yQ = window.Vue.nextTick, kw = window.Vue.openBlock, Mw = window.Vue.createElementBlock, au = window.Vue.createElementVNode, NQ = window.Vue.normalizeClass, bw = window.Vue.renderSlot, Zw = window.Vue.createCommentVNode, iu = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var RQ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kQ = {
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
}, MQ = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, bQ = A1({
  emits: MQ,
  props: kQ,
  setup(e, r) {
    const o = ru(), i = ru(!1), s = ru(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = UQ(e, "modelValue"), f = ou("queueSnackbar", !1), m = ou("unqueueSnackbar", !1), V = ou("nextSnackbar", () => {
    }), g = (Z, C) => {
      let A, W, x = C;
      const X = () => {
        !A || (Nr(A), A = 0, x -= Date.now() - W);
      }, S = () => {
        A || (W = Date.now(), A = yr(Z, x));
      };
      return S(), { pause: X, resume: S };
    }, T = () => {
      i.value = !1, r.emit("closed"), V && V();
    }, N = (Z) => {
      Z.keyCode === ne.ESCAPE && (s.value = !1);
    }, F = () => {
      o.value.pause();
    }, E = () => {
      s.value && o.value.resume();
    };
    return Rw(d, (Z) => {
      Z ? yQ(() => {
        f === !1 ? s.value = Z : f(c, s);
      }) : m === !1 ? s.value = Z : m(c);
    }, { immediate: !0 }), Rw(s, (Z) => {
      Z ? (i.value = !0, o.value = g(() => {
        s.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), F());
    }), {
      hideTimeout: o,
      contentShow: i,
      internalValue: s,
      id: c,
      incomingValue: d,
      closed: T,
      keyPressed: N,
      stopTimer: F,
      resumeTimer: E
    };
  }
}), ZQ = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, SQ = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, EQ = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, JQ = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function AQ(e, r, o, i, s, c) {
  return e.modelValue || e.contentShow ? (kw(), Mw("div", ZQ, [
    au("div", {
      class: NQ(["feather-snackbar", {
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
      au("div", SQ, [
        e.contentShow ? (kw(), Mw("div", EQ, [
          bw(e.$slots, "default", {}, void 0, !0)
        ])) : Zw("", !0)
      ]),
      au("div", JQ, [
        bw(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Zw("", !0);
}
var rd = /* @__PURE__ */ RQ(bQ, [["render", AQ], ["__scopeId", "data-v-5cf64a62"]]);
const FQ = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
A1({
  props: FQ,
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
    return iu("queueSnackbar", i), iu("unqueueSnackbar", s), iu("nextSnackbar", c), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: i,
      shiftItem: c,
      unqueueSnackbar: s
    };
  }
});
const CQ = window.Vue.defineComponent, Ze = window.Vue.unref, it = window.Vue.createVNode, ya = window.Vue.createElementVNode, Ct = window.Vue.withCtx, to = window.Vue.openBlock, Sw = window.Vue.createBlock, WQ = window.Vue.createCommentVNode, _s = window.Vue.createTextVNode, Ki = window.Vue.createElementBlock, Ew = window.Vue.toDisplayString, xQ = window.Vue.pushScopeId, BQ = window.Vue.popScopeId, od = (e) => (xQ("data-v-029ecf47"), e = e(), BQ(), e), _Q = { id: "cont" }, IQ = { class: "btns-navigation" }, DQ = /* @__PURE__ */ od(() => /* @__PURE__ */ ya("span", null, "Situation List", -1)), OQ = /* @__PURE__ */ od(() => /* @__PURE__ */ ya("span", null, "Show Previous Situation ", -1)), QQ = /* @__PURE__ */ od(() => /* @__PURE__ */ ya("span", null, "Show Next Situation", -1)), zQ = { key: 1 }, GQ = {
  key: 0,
  class: "detail"
}, YQ = /* @__PURE__ */ _s("Details"), PQ = /* @__PURE__ */ _s("Metrics"), HQ = {
  key: 1,
  class: "noSituation"
}, jQ = /* @__PURE__ */ _s("dismiss"), no = window.Vue.ref, Jw = window.Vue.watch, $Q = window.Vue.onMounted, XQ = window.VueRouter.useRouter, LQ = window.VueRouter.useRoute, qQ = /* @__PURE__ */ CQ({
  __name: "SituationDetail",
  setup(e) {
    const r = XQ(), o = LQ(), i = parseInt(o.params.id), s = no(i), c = Sn(), d = Ws();
    c.getSituation(s.value), c.situations.length || c.getSituations();
    const f = no(), m = no(), V = no(!0), g = no(
      c.filteredSituations.findIndex((E) => E === s.value)
    ), T = no(!1);
    Jw(
      () => c.situationDetail,
      () => {
        f.value = c.situationDetail, V.value = !1;
      }
    ), $Q(() => {
      var Z;
      const E = ((Z = document.getElementById("cont")) == null ? void 0 : Z.getBoundingClientRect().width) || 1200;
      m.value = E - 90;
    });
    const N = () => {
      r.push({
        name: "situations"
      });
    }, F = (E) => {
      const Z = g.value, C = c.filteredSituations[Z + E];
      r.push({
        name: "situationDetail",
        params: {
          id: C
        }
      });
    };
    return Jw(o, () => {
      s.value = parseInt(o.params.id), c.getSituation(s.value), g.value = c.filteredSituations.findIndex((E) => E == s.value);
    }), d.$subscribe((E, Z) => {
      T.value = Z.showError;
    }), (E, Z) => (to(), Ki("div", _Q, [
      ya("div", IQ, [
        it(Ze(ye), {
          primary: "",
          onClick: Z[0] || (Z[0] = () => N())
        }, {
          default: Ct(() => [
            it(Ze($), {
              icon: Ze(ma),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            DQ
          ]),
          _: 1
        }),
        ya("div", null, [
          it(Ze(ye), {
            disabled: !Ze(c).filteredSituations[g.value - 1],
            primary: "",
            onClick: Z[1] || (Z[1] = () => F(-1))
          }, {
            default: Ct(() => [
              it(Ze($), {
                icon: Ze(ma),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              OQ
            ]),
            _: 1
          }, 8, ["disabled"]),
          it(Ze(ye), {
            disabled: !Ze(c).filteredSituations[g.value + 1],
            primary: "",
            onClick: Z[2] || (Z[2] = () => F(1))
          }, {
            default: Ct(() => [
              QQ,
              it(Ze($), {
                icon: Ze(ma),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      V.value ? (to(), Sw(Ze(Iv), {
        key: 0,
        class: "spinner"
      })) : (to(), Ki("div", zQ, [
        f.value ? (to(), Ki("div", GQ, [
          it(Ze(px), null, {
            tabs: Ct(() => [
              it(Ze(mm), null, {
                default: Ct(() => [
                  YQ
                ]),
                _: 1
              }),
              it(Ze(mm), null, {
                default: Ct(() => [
                  PQ
                ]),
                _: 1
              })
            ]),
            default: Ct(() => [
              it(Ze(wm), { class: "panel" }, {
                default: Ct(() => [
                  it(pD, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              it(Ze(wm), { class: "panel" }, {
                default: Ct(() => [
                  m.value ? (to(), Sw(dQ, {
                    key: 0,
                    situation: f.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : WQ("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (to(), Ki("div", HQ, " Error. The situation " + Ew(Ze(i)) + " does not exist. ", 1))
      ])),
      it(Ze(rd), {
        modelValue: T.value,
        "onUpdate:modelValue": Z[4] || (Z[4] = (C) => T.value = C),
        center: "",
        error: ""
      }, {
        button: Ct(() => [
          it(Ze(ye), {
            onClick: Z[3] || (Z[3] = (C) => T.value = !1),
            text: ""
          }, {
            default: Ct(() => [
              jQ
            ]),
            _: 1
          })
        ]),
        default: Ct(() => [
          _s(Ew(Ze(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const KQ = /* @__PURE__ */ we(qQ, [["__scopeId", "data-v-029ecf47"]]), e5 = window.Vue.defineComponent, Aw = window.Vue.normalizeClass, io = window.Vue.createElementVNode, es = window.Vue.unref, t5 = window.Vue.createVNode, ts = window.Vue.toDisplayString, n5 = window.Vue.createTextVNode, r5 = window.Vue.openBlock, o5 = window.Vue.createElementBlock, a5 = window.Vue.pushScopeId, i5 = window.Vue.popScopeId, s5 = (e) => (a5("data-v-e116ca71"), e = e(), i5(), e), l5 = { class: "alarmInfo" }, c5 = { class: "alarm-title" }, u5 = /* @__PURE__ */ s5(() => /* @__PURE__ */ io("strong", null, " Duration: ", -1)), d5 = { class: "description" }, f5 = /* @__PURE__ */ e5({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, i = new Date().getTime();
    return (s, c) => (r5(), o5("div", {
      class: Aw(["alarm", { selected: o.selected }])
    }, [
      io("div", l5, [
        io("div", {
          class: Aw(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        t5(es(Fa), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        io("div", c5, ts(e.alarm.nodeLabel) + " - " + ts(e.alarm.id), 1)
      ]),
      io("div", null, [
        u5,
        n5(" " + ts(es(Ms)(es(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      io("div", d5, ts(es(lv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const F1 = /* @__PURE__ */ we(f5, [["__scopeId", "data-v-e116ca71"]]), h5 = window.Vue.defineComponent, ze = window.Vue.unref, Wt = window.Vue.createVNode, Bt = window.Vue.createElementVNode, ro = window.Vue.withCtx, p5 = window.Vue.toDisplayString, ad = window.Vue.createTextVNode, m5 = window.Vue.normalizeClass, oo = window.Vue.openBlock, ao = window.Vue.createElementBlock, w5 = window.Vue.createCommentVNode, v5 = window.Vue.renderList, V5 = window.Vue.Fragment, g5 = window.Vue.pushScopeId, T5 = window.Vue.popScopeId, xa = (e) => (g5("data-v-7fae0d9e"), e = e(), T5(), e), U5 = { class: "container" }, y5 = /* @__PURE__ */ xa(() => /* @__PURE__ */ Bt("span", null, "Situation List", -1)), N5 = /* @__PURE__ */ xa(() => /* @__PURE__ */ Bt("h2", null, "New Situation", -1)), R5 = { class: "form" }, k5 = { class: "fields" }, M5 = /* @__PURE__ */ ad(" Total alarms added: "), b5 = { class: "total" }, Z5 = {
  key: 0,
  class: "errorList"
}, S5 = { class: "footer" }, E5 = /* @__PURE__ */ xa(() => /* @__PURE__ */ Bt("span", null, "Clear", -1)), J5 = /* @__PURE__ */ xa(() => /* @__PURE__ */ Bt("span", null, "Add Situation", -1)), A5 = { class: "alarm-column" }, F5 = /* @__PURE__ */ xa(() => /* @__PURE__ */ Bt("h4", null, "Add Unassociated Alarms", -1)), C5 = {
  key: 0,
  class: "alarms"
}, W5 = { key: 1 }, x5 = /* @__PURE__ */ ad(" Error on creating new situation :( "), B5 = /* @__PURE__ */ ad("dismiss"), _5 = window.VueRouter.useRouter, zn = window.Vue.ref, I5 = window.Vue.watch, D5 = /* @__PURE__ */ h5({
  __name: "AddSituation",
  setup(e) {
    const r = _5(), o = Sn(), i = zn(), s = zn(""), c = zn(), d = zn(""), f = zn([]), m = zn(!1), V = zn(), g = zn(o.unassignedAlarms);
    g.value.length || o.getUnassignedAlarms(), I5(
      () => o.unassignedAlarms,
      () => {
        g.value = o.unassignedAlarms;
      }
    );
    const T = () => {
      r.push({
        name: "situations"
      });
    }, N = (A) => {
      A.includes("all") ? g.value = o.unassignedAlarms : g.value = o.unassignedAlarms.filter(
        (W) => A.includes(W.severity)
      );
    }, F = (A) => {
      m.value = !1, ge.exports.includes(f.value, A) ? ge.exports.remove(f.value, (W) => W === A) : f.value.push(A);
    }, E = () => {
      const A = "This field should not be empty";
      let W = !0;
      return i.value || (s.value = A, W = !1), c.value || (d.value = A, W = !1), f.value.length < 2 && (m.value = !0, W = !1), W;
    }, Z = async () => {
      if (E()) {
        const A = {
          alarmIdList: f.value,
          diagnosticText: c.value,
          description: i.value
        };
        await xx(A) ? r.push({
          name: "situations"
        }) : V.value = !0;
      }
    }, C = () => {
      i.value = "", c.value = "", f.value = [], g.value = o.unassignedAlarms;
    };
    return (A, W) => (oo(), ao("div", U5, [
      Wt(ze(ye), {
        primary: "",
        onClick: W[0] || (W[0] = () => T()),
        class: "back-btn"
      }, {
        default: ro(() => [
          Wt(ze($), {
            icon: ze(ma),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          y5
        ]),
        _: 1
      }),
      N5,
      Bt("div", R5, [
        Bt("div", k5, [
          Wt(ze(gu), {
            modelValue: i.value,
            "onUpdate:modelValue": W[1] || (W[1] = (x) => i.value = x),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          Wt(ze(gu), {
            modelValue: c.value,
            "onUpdate:modelValue": W[2] || (W[2] = (x) => c.value = x),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          Bt("div", null, [
            Bt("div", {
              class: m5(["totalAlarms", { errorList: m.value }])
            }, [
              M5,
              Bt("span", b5, p5(ze(f).length), 1)
            ], 2),
            m.value ? (oo(), ao("div", Z5, " It is required to add at least 2 alarms ")) : w5("", !0)
          ]),
          Bt("div", S5, [
            Wt(ze(ye), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: ro(() => [
                Wt(ze($), {
                  icon: ze(Vo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                E5
              ]),
              _: 1
            }),
            Wt(ze(ye), {
              class: "btn",
              primary: "",
              onClick: Z
            }, {
              default: ro(() => [
                Wt(ze($), {
                  icon: ze(Iu),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                J5
              ]),
              _: 1
            })
          ])
        ]),
        Bt("div", A5, [
          F5,
          Wt(ga, {
            alarms: ze(o).unassignedAlarms,
            onSelectedOption: N,
            property: "severity"
          }, null, 8, ["alarms"]),
          g.value.length ? (oo(), ao("div", C5, [
            (oo(!0), ao(V5, null, v5(g.value, (x) => (oo(), ao("div", {
              key: x.id,
              class: "alarm-card"
            }, [
              Wt(F1, {
                selected: ze(ge.exports.includes)(ze(f), x.id),
                alarm: x,
                onSelectedAlarm: F
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (oo(), ao("div", W5, "There is no unassigned alarms"))
        ])
      ]),
      Wt(ze(rd), {
        modelValue: V.value,
        "onUpdate:modelValue": W[4] || (W[4] = (x) => V.value = x),
        center: "",
        error: ""
      }, {
        button: ro(() => [
          Wt(ze(ye), {
            onClick: W[3] || (W[3] = (x) => V.value = !1),
            text: ""
          }, {
            default: ro(() => [
              B5
            ]),
            _: 1
          })
        ]),
        default: ro(() => [
          x5
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const O5 = /* @__PURE__ */ we(D5, [["__scopeId", "data-v-7fae0d9e"]]), Q5 = window.Vue.openBlock, z5 = window.Vue.createElementBlock, G5 = window.Vue.createStaticVNode;
var Y5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const P5 = {}, H5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, j5 = /* @__PURE__ */ G5('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), $5 = [
  j5
];
function X5(e, r) {
  return Q5(), z5("svg", H5, $5);
}
var L5 = /* @__PURE__ */ Y5(P5, [["render", X5]]);
const q5 = window.Vue.openBlock, K5 = window.Vue.createElementBlock, ez = window.Vue.createStaticVNode;
var tz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const nz = {}, rz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oz = /* @__PURE__ */ ez('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), az = [
  oz
];
function iz(e, r) {
  return q5(), K5("svg", rz, az);
}
var sz = /* @__PURE__ */ tz(nz, [["render", iz]]);
const lz = window.Vue.openBlock, cz = window.Vue.createElementBlock, uz = window.Vue.createElementVNode;
var dz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const fz = {}, hz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pz = /* @__PURE__ */ uz("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), mz = [
  pz
];
function wz(e, r) {
  return lz(), cz("svg", hz, mz);
}
var vz = /* @__PURE__ */ dz(fz, [["render", wz]]);
const Vz = window.Vue.openBlock, gz = window.Vue.createElementBlock, Tz = window.Vue.createStaticVNode;
var Uz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const yz = {}, Nz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Rz = /* @__PURE__ */ Tz('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), kz = [
  Rz
];
function Mz(e, r) {
  return Vz(), gz("svg", Nz, kz);
}
var bz = /* @__PURE__ */ Uz(yz, [["render", Mz]]);
const Zz = window.Vue.openBlock, Sz = window.Vue.createElementBlock, Ez = window.Vue.createElementVNode;
var Jz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Az = {}, Fz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cz = /* @__PURE__ */ Ez("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), Wz = [
  Cz
];
function xz(e, r) {
  return Zz(), Sz("svg", Fz, Wz);
}
var Bz = /* @__PURE__ */ Jz(Az, [["render", xz]]);
const id = () => window.VRouter || ld, _z = window.Vue.defineComponent, Se = window.Vue.createElementVNode, Na = window.Vue.createTextVNode, et = window.Vue.unref, kn = window.Vue.createVNode, ns = window.Vue.withCtx, Fw = window.Vue.openBlock, Cw = window.Vue.createElementBlock, Iz = window.Vue.createCommentVNode, Dz = window.Vue.pushScopeId, Oz = window.Vue.popScopeId, en = (e) => (Dz("data-v-b4b3bdcf"), e = e(), Oz(), e), Qz = { class: "container" }, zz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("div", { class: "title" }, "ALEC", -1)), Gz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("div", { class: "description" }, [
  /* @__PURE__ */ Na(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Se("strong", null, "Our goal"),
  /* @__PURE__ */ Na(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), Yz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("h3", null, "Key Benefits:", -1)), Pz = { class: "list" }, Hz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), jz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("span", null, "Assist in root cause analysis.", -1)), $z = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), Xz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("span", null, "Easy configuration.", -1)), Lz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), qz = {
  key: 0,
  class: "optin"
}, Kz = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("h3", null, "Enable ALEC for more precise results:", -1)), eG = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), tG = { class: "choices" }, nG = /* @__PURE__ */ en(() => /* @__PURE__ */ Se("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), rG = /* @__PURE__ */ Na("Yes"), oG = /* @__PURE__ */ Na("No"), aG = /* @__PURE__ */ Na(" Continue "), iG = window.Vue.ref, sG = /* @__PURE__ */ _z({
  __name: "WelcomePage",
  setup(e) {
    const r = Wa(), o = id(), i = iG(!0), s = () => {
      const c = Boolean(i.value);
      r.savePermission(c), o.push({ name: "configuration" });
    };
    return (c, d) => (Fw(), Cw("div", Qz, [
      zz,
      Gz,
      Se("div", null, [
        Yz,
        Se("div", Pz, [
          Se("div", null, [
            kn(et($), {
              icon: et(bz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Hz
          ]),
          Se("div", null, [
            kn(et($), {
              icon: et(vz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            jz
          ]),
          Se("div", null, [
            kn(et($), {
              icon: et(Bz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            $z
          ]),
          Se("div", null, [
            kn(et($), {
              icon: et(L5),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Xz
          ]),
          Se("div", null, [
            kn(et($), {
              icon: et(sz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Lz
          ])
        ])
      ]),
      et(r).isAdmin ? (Fw(), Cw("div", qz, [
        Kz,
        eG,
        Se("div", tG, [
          nG,
          kn(et(Yu), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f),
            label: ""
          }, {
            default: ns(() => [
              kn(et(Ua), { value: !0 }, {
                default: ns(() => [
                  rG
                ]),
                _: 1
              }),
              kn(et(Ua), { value: !1 }, {
                default: ns(() => [
                  oG
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : Iz("", !0),
      kn(et(ye), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: ns(() => [
          aG
        ]),
        _: 1
      })
    ]));
  }
});
const lG = /* @__PURE__ */ we(sG, [["__scopeId", "data-v-b4b3bdcf"]]), cG = window.Vue.defineComponent, uG = window.Vue.createElementVNode, dG = window.Vue.createTextVNode, fG = window.Vue.unref, hG = window.Vue.withCtx, pG = window.Vue.createVNode, mG = window.Vue.Fragment, wG = window.Vue.openBlock, vG = window.Vue.createElementBlock, VG = window.Vue.pushScopeId, gG = window.Vue.popScopeId, TG = (e) => (VG("data-v-bcb7dcc6"), e = e(), gG(), e), UG = /* @__PURE__ */ TG(() => /* @__PURE__ */ uG("div", { class: "main" }, "Something bad is happening...", -1)), yG = /* @__PURE__ */ dG(" Reload "), NG = /* @__PURE__ */ cG({
  __name: "ErrorPage",
  setup(e) {
    const r = id(), o = () => {
      r.push({ name: "situations" });
    };
    return (i, s) => (wG(), vG(mG, null, [
      UG,
      pG(fG(ye), {
        primary: "",
        onClick: o
      }, {
        default: hG(() => [
          yG
        ]),
        _: 1
      })
    ], 64));
  }
});
const RG = /* @__PURE__ */ we(NG, [["__scopeId", "data-v-bcb7dcc6"]]), kG = window.Vue.defineComponent, xe = window.Vue.unref, je = window.Vue.createVNode, Hn = window.Vue.createElementVNode, Gn = window.Vue.withCtx, MG = window.Vue.renderList, bG = window.Vue.Fragment, ra = window.Vue.openBlock, oa = window.Vue.createElementBlock, ZG = window.Vue.toDisplayString, C1 = window.Vue.createTextVNode, SG = window.Vue.pushScopeId, EG = window.Vue.popScopeId, sd = (e) => (SG("data-v-386a7a16"), e = e(), EG(), e), JG = { class: "container" }, AG = { class: "nav-btns" }, FG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Hn("span", null, "Situation List", -1)), CG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Hn("h2", null, "List Unassigned Alarms", -1)), WG = { class: "content" }, xG = { class: "filters" }, BG = { class: "list" }, _G = { class: "action-btns" }, IG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Hn("span", null, "Move", -1)), DG = {
  key: 0,
  class: "alarms"
}, OG = { key: 1 }, QG = /* @__PURE__ */ C1("dismiss"), $t = window.Vue.ref, zG = window.Vue.watch, GG = window.Vue.markRaw, YG = window.VueRouter.useRouter, PG = /* @__PURE__ */ kG({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = GG({
      ArrowBack: ma,
      ExitToApp: s1
    }), o = YG(), i = Sn();
    i.getUnassignedAlarms(), i.getSituations();
    const s = $t([]), c = $t([]), d = $t(!1), f = $t(!1), m = $t(""), V = $t(!1), g = $t(!1), T = $t(["all"]), N = $t(["all"]), F = $t(1), E = $t(!0);
    zG(
      () => i.unassignedAlarms,
      () => {
        x();
      }
    );
    const Z = (_) => {
      ge.exports.includes(c.value, _) ? ge.exports.remove(c.value, (H) => H === _) : c.value.push(_);
    }, C = (_) => {
      N.value = _, x();
    }, A = (_) => {
      T.value = _, x();
    }, W = (_) => {
      F.value = _, x();
    }, x = () => {
      let _ = i.unassignedAlarms;
      N.value.includes("all") || (_ = _.filter(
        (H) => N.value.includes(H.severity)
      )), T.value.includes("all") || (_ = _.filter(
        (H) => T.value.includes(H.nodeLabel)
      )), F.value !== 1 && (_ = cv(
        F.value,
        _
      )), s.value = _;
    }, X = () => {
      d.value ? c.value = s.value.map((_) => _.id) : c.value = [];
    }, S = async (_) => {
      await Kv(_, c.value) ? i.getUnassignedAlarms() : (V.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, Q = () => {
      o.push({
        name: "situations"
      });
    }, O = () => {
      c.value.length ? f.value = !0 : (V.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    };
    return (_, H) => (ra(), oa("div", JG, [
      Hn("div", AG, [
        je(xe(ye), {
          primary: "",
          onClick: H[0] || (H[0] = () => Q())
        }, {
          default: Gn(() => [
            je(xe($), {
              icon: xe(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            FG
          ]),
          _: 1
        }),
        je(Jv)
      ]),
      CG,
      Hn("div", WG, [
        Hn("div", xG, [
          je(xe(fa), {
            title: "By Severity",
            modelValue: E.value,
            "onUpdate:modelValue": H[1] || (H[1] = (K) => E.value = K)
          }, {
            default: Gn(() => [
              je(ga, {
                alarms: xe(i).unassignedAlarms,
                onSelectedOption: C,
                "pre-selected": N.value,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          je(xe(fa), {
            title: "By Node Label",
            modelValue: E.value,
            "onUpdate:modelValue": H[2] || (H[2] = (K) => E.value = K)
          }, {
            default: Gn(() => [
              je(ga, {
                alarms: xe(i).unassignedAlarms,
                onSelectedOption: A,
                "pre-selected": T.value,
                property: "nodeLabel",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          je(xe(fa), { title: "By Start Date" }, {
            default: Gn(() => [
              je(_v, { onFilterDateSelected: W })
            ]),
            _: 1
          })
        ]),
        Hn("div", BG, [
          Hn("div", _G, [
            je(xe(Fa), {
              modelValue: d.value,
              "onUpdate:modelValue": [
                H[3] || (H[3] = (K) => d.value = K),
                X
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            je(xe(ye), { onClick: O }, {
              default: Gn(() => [
                je(xe($), {
                  icon: xe(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                IG
              ]),
              _: 1
            })
          ]),
          xe(s).length ? (ra(), oa("div", DG, [
            (ra(!0), oa(bG, null, MG(xe(s), (K) => (ra(), oa("div", {
              key: K.id,
              class: "card"
            }, [
              je(F1, {
                selected: xe(ge.exports.includes)(xe(c), K.id),
                alarm: K,
                onSelectedAlarm: Z
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ra(), oa("div", OG, "There is no unassigned alarms"))
        ])
      ]),
      je(y1, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: S,
        onDrawerClosed: H[4] || (H[4] = () => f.value = !1)
      }, null, 8, ["visible"]),
      je(xe(rd), {
        modelValue: V.value,
        "onUpdate:modelValue": H[6] || (H[6] = (K) => V.value = K),
        center: "",
        error: g.value
      }, {
        button: Gn(() => [
          je(xe(ye), {
            onClick: H[5] || (H[5] = (K) => V.value = !1),
            text: ""
          }, {
            default: Gn(() => [
              QG
            ]),
            _: 1
          })
        ]),
        default: Gn(() => [
          C1(ZG(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const HG = /* @__PURE__ */ we(PG, [["__scopeId", "data-v-386a7a16"]]), jG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", $G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", XG = window.Vue.defineComponent, _e = window.Vue.createElementVNode, Ru = window.Vue.createTextVNode, Yn = window.Vue.unref, aa = window.Vue.withCtx, ia = window.Vue.createVNode, LG = window.Vue.openBlock, qG = window.Vue.createElementBlock, KG = window.Vue.pushScopeId, eY = window.Vue.popScopeId, Mr = (e) => (KG("data-v-9a5b5f4e"), e = e(), eY(), e), tY = { class: "container" }, nY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("h2", null, "Configuration", -1)), rY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("p", null, [
  /* @__PURE__ */ Ru(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ _e("br"),
  /* @__PURE__ */ Ru(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ _e("strong", null, [
    /* @__PURE__ */ _e("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), oY = { class: "radio-content" }, aY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("strong", { class: "title" }, "Clustering", -1)), iY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), sY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("img", {
  class: "img",
  src: jG
}, null, -1)), lY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("div", { class: "hellinger" }, [
  /* @__PURE__ */ _e("strong", null, "With hellinger distance"),
  /* @__PURE__ */ _e("br"),
  /* @__PURE__ */ _e("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), cY = /* @__PURE__ */ Mr(() => /* @__PURE__ */ _e("div", { class: "radio-content" }, [
  /* @__PURE__ */ _e("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ _e("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ _e("img", {
    class: "img img2",
    src: $G
  })
], -1)), uY = /* @__PURE__ */ Ru(" Continue "), Ww = window.Vue.ref, dY = /* @__PURE__ */ XG({
  __name: "ConfigurationPage",
  setup(e) {
    const r = Wa(), o = id(), i = Ww(!1), s = Ww(Ut.ENGINE_DBSCAN), c = () => {
      Lv(r.allowSave), Wx(s.value, i.value), o.push({ name: "situations" });
    };
    return (d, f) => (LG(), qG("div", tY, [
      nY,
      rY,
      _e("div", null, [
        ia(Yn(Yu), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => s.value = m)
        }, {
          default: aa(() => [
            ia(Yn(Ua), {
              class: "radio",
              value: Yn(Ut).ENGINE_DBSCAN
            }, {
              default: aa(() => [
                _e("div", oY, [
                  aY,
                  iY,
                  sY,
                  ia(Yn(Fa), {
                    modelValue: i.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                    disabled: s.value !== Yn(Ut).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: aa(() => [
                      lY
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            ia(Yn(Ua), {
              class: "radio",
              value: Yn(Ut).ENGINE_DEEP_LEARNING
            }, {
              default: aa(() => [
                cY
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      ia(Yn(ye), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => c())
      }, {
        default: aa(() => [
          uY
        ]),
        _: 1
      })
    ]));
  }
});
const fY = /* @__PURE__ */ we(dY, [["__scopeId", "data-v-9a5b5f4e"]]), hY = window.VueRouter.createRouter, pY = window.VueRouter.createWebHistory, su = async () => {
  const e = window.VRouter || ld, r = Wa();
  if (!r.userId) {
    const o = await r.getUserRole();
    await r.getAlecInfo(), o ? e.push({ name: "home" }) : e.push({ name: "error" });
  }
}, W1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || ld, o = Wa();
      await o.getUserRole(), await o.getAlecInfo(), o.firstTime ? r.push({ name: "welcome", params: e.params }) : r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => su(),
    component: lG
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => su(),
    component: fY
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => su(),
    component: DW
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: KQ
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: O5
  },
  {
    path: "/error",
    name: "error",
    component: RG
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: HG
  }
], lu = window.VRouter;
if (lu) {
  const e = "Plugin-alecUiExtension", r = lu.hasRoute(e) ? e : "Plugin";
  for (const o of W1) {
    const { path: i, name: s, component: c, beforeEnter: d } = o;
    lu.addRoute(r, {
      path: i.slice(1),
      name: s,
      component: c,
      beforeEnter: d
    });
  }
}
const ld = hY({
  history: pY(),
  routes: W1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = WR;
