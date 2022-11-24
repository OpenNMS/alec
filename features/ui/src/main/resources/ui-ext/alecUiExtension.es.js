const we = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
}, yR = {}, NR = window.Vue.resolveComponent, RR = window.Vue.createVNode, kR = window.Vue.openBlock, MR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const bR = { class: "main" };
function ZR(e, r) {
  const o = NR("router-view");
  return kR(), MR("div", bR, [
    RR(o)
  ]);
}
const SR = /* @__PURE__ */ we(yR, [["render", ZR], ["__scopeId", "data-v-5d32d140"]]), ER = window.Vue.defineComponent, JR = window.Vue.openBlock, AR = window.Vue.createBlock, FR = /* @__PURE__ */ ER({
  __name: "App",
  setup(e) {
    return (r, o) => (JR(), AR(SR));
  }
});
var Yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function CR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bw = { exports: {} }, ku = { exports: {} }, _w = function(r, o) {
  return function() {
    for (var s = new Array(arguments.length), c = 0; c < s.length; c++)
      s[c] = arguments[c];
    return r.apply(o, s);
  };
}, WR = _w, Mu = Object.prototype.toString, bu = function(e) {
  return function(r) {
    var o = Mu.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Nr(e) {
  return e = e.toLowerCase(), function(o) {
    return bu(o) === e;
  };
}
function Zu(e) {
  return Array.isArray(e);
}
function ls(e) {
  return typeof e > "u";
}
function xR(e) {
  return e !== null && !ls(e) && e.constructor !== null && !ls(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Iw = Nr("ArrayBuffer");
function BR(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Iw(e.buffer), r;
}
function _R(e) {
  return typeof e == "string";
}
function IR(e) {
  return typeof e == "number";
}
function Dw(e) {
  return e !== null && typeof e == "object";
}
function ts(e) {
  if (bu(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var DR = Nr("Date"), OR = Nr("File"), QR = Nr("Blob"), zR = Nr("FileList");
function Su(e) {
  return Mu.call(e) === "[object Function]";
}
function GR(e) {
  return Dw(e) && Su(e.pipe);
}
function YR(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Mu.call(e) === r || Su(e.toString) && e.toString() === r);
}
var PR = Nr("URLSearchParams");
function HR(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function jR() {
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
function lu() {
  var e = {};
  function r(s, c) {
    ts(e[c]) && ts(s) ? e[c] = lu(e[c], s) : ts(s) ? e[c] = lu({}, s) : Zu(s) ? e[c] = s.slice() : e[c] = s;
  }
  for (var o = 0, i = arguments.length; o < i; o++)
    Eu(arguments[o], r);
  return e;
}
function $R(e, r, o) {
  return Eu(r, function(s, c) {
    o && typeof s == "function" ? e[c] = WR(s, o) : e[c] = s;
  }), e;
}
function XR(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function LR(e, r, o, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function qR(e, r, o) {
  var i, s, c, d = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      c = i[s], d[c] || (r[c] = e[c], d[c] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function KR(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var i = e.indexOf(r, o);
  return i !== -1 && i === o;
}
function ek(e) {
  if (!e)
    return null;
  var r = e.length;
  if (ls(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var tk = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Pe = {
  isArray: Zu,
  isArrayBuffer: Iw,
  isBuffer: xR,
  isFormData: YR,
  isArrayBufferView: BR,
  isString: _R,
  isNumber: IR,
  isObject: Dw,
  isPlainObject: ts,
  isUndefined: ls,
  isDate: DR,
  isFile: OR,
  isBlob: QR,
  isFunction: Su,
  isStream: GR,
  isURLSearchParams: PR,
  isStandardBrowserEnv: jR,
  forEach: Eu,
  merge: lu,
  extend: $R,
  trim: HR,
  stripBOM: XR,
  inherits: LR,
  toFlatObject: qR,
  kindOf: bu,
  kindOfTest: Nr,
  endsWith: KR,
  toArray: ek,
  isTypedArray: tk,
  isFileList: zR
}, Qr = Pe;
function Oh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ow = function(r, o, i) {
  if (!o)
    return r;
  var s;
  if (i)
    s = i(o);
  else if (Qr.isURLSearchParams(o))
    s = o.toString();
  else {
    var c = [];
    Qr.forEach(o, function(m, g) {
      m === null || typeof m > "u" || (Qr.isArray(m) ? g = g + "[]" : m = [m], Qr.forEach(m, function(U) {
        Qr.isDate(U) ? U = U.toISOString() : Qr.isObject(U) && (U = JSON.stringify(U)), c.push(Oh(g) + "=" + Oh(U));
      }));
    }), s = c.join("&");
  }
  if (s) {
    var d = r.indexOf("#");
    d !== -1 && (r = r.slice(0, d)), r += (r.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return r;
}, nk = Pe;
function gs() {
  this.handlers = [];
}
gs.prototype.use = function(r, o, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
gs.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
gs.prototype.forEach = function(r) {
  nk.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var rk = gs, ok = Pe, ak = function(r, o) {
  ok.forEach(r, function(s, c) {
    c !== o && c.toUpperCase() === o.toUpperCase() && (r[o] = s, delete r[c]);
  });
}, Qw = Pe;
function po(e, r, o, i, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), i && (this.request = i), s && (this.response = s);
}
Qw.inherits(po, Error, {
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
var zw = po.prototype, Gw = {};
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
  Gw[e] = { value: e };
});
Object.defineProperties(po, Gw);
Object.defineProperty(zw, "isAxiosError", { value: !0 });
po.from = function(e, r, o, i, s, c) {
  var d = Object.create(zw);
  return Qw.toFlatObject(e, d, function(m) {
    return m !== Error.prototype;
  }), po.call(d, e.message, r, o, i, s), d.name = e.name, c && Object.assign(d, c), d;
};
var vo = po, Yw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yt = Pe;
function ik(e, r) {
  r = r || new FormData();
  var o = [];
  function i(c) {
    return c === null ? "" : Yt.isDate(c) ? c.toISOString() : Yt.isArrayBuffer(c) || Yt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function s(c, d) {
    if (Yt.isPlainObject(c) || Yt.isArray(c)) {
      if (o.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      o.push(c), Yt.forEach(c, function(m, g) {
        if (!Yt.isUndefined(m)) {
          var V = d ? d + "." + g : g, U;
          if (m && !d && typeof m == "object") {
            if (Yt.endsWith(g, "{}"))
              m = JSON.stringify(m);
            else if (Yt.endsWith(g, "[]") && (U = Yt.toArray(m))) {
              U.forEach(function(N) {
                !Yt.isUndefined(N) && r.append(V, i(N));
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
var Pw = ik, oc, Qh;
function sk() {
  if (Qh)
    return oc;
  Qh = 1;
  var e = vo;
  return oc = function(o, i, s) {
    var c = s.config.validateStatus;
    !s.status || !c || c(s.status) ? o(s) : i(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, oc;
}
var ac, zh;
function lk() {
  if (zh)
    return ac;
  zh = 1;
  var e = Pe;
  return ac = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, s, c, d, f, m) {
        var g = [];
        g.push(i + "=" + encodeURIComponent(s)), e.isNumber(c) && g.push("expires=" + new Date(c).toGMTString()), e.isString(d) && g.push("path=" + d), e.isString(f) && g.push("domain=" + f), m === !0 && g.push("secure"), document.cookie = g.join("; ");
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
  }(), ac;
}
var ck = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, uk = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, dk = ck, fk = uk, Hw = function(r, o) {
  return r && !dk(o) ? fk(r, o) : o;
}, ic, Gh;
function hk() {
  if (Gh)
    return ic;
  Gh = 1;
  var e = Pe, r = [
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
  return ic = function(i) {
    var s = {}, c, d, f;
    return i && e.forEach(i.split(`
`), function(g) {
      if (f = g.indexOf(":"), c = e.trim(g.substr(0, f)).toLowerCase(), d = e.trim(g.substr(f + 1)), c) {
        if (s[c] && r.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? s[c] = (s[c] ? s[c] : []).concat([d]) : s[c] = s[c] ? s[c] + ", " + d : d;
      }
    }), s;
  }, ic;
}
var sc, Yh;
function pk() {
  if (Yh)
    return sc;
  Yh = 1;
  var e = Pe;
  return sc = e.isStandardBrowserEnv() ? function() {
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
  }(), sc;
}
var lc, Ph;
function Ts() {
  if (Ph)
    return lc;
  Ph = 1;
  var e = vo, r = Pe;
  function o(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), lc = o, lc;
}
var cc, Hh;
function mk() {
  return Hh || (Hh = 1, cc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), cc;
}
var uc, jh;
function $h() {
  if (jh)
    return uc;
  jh = 1;
  var e = Pe, r = sk(), o = lk(), i = Ow, s = Hw, c = hk(), d = pk(), f = Yw, m = vo, g = Ts(), V = mk();
  return uc = function(N) {
    return new Promise(function(E, b) {
      var C = N.data, A = N.headers, x = N.responseType, _;
      function Y() {
        N.cancelToken && N.cancelToken.unsubscribe(_), N.signal && N.signal.removeEventListener("abort", _);
      }
      e.isFormData(C) && e.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (N.auth) {
        var W = N.auth.username || "", I = N.auth.password ? unescape(encodeURIComponent(N.auth.password)) : "";
        A.Authorization = "Basic " + btoa(W + ":" + I);
      }
      var G = s(N.baseURL, N.url);
      k.open(N.method.toUpperCase(), i(G, N.params, N.paramsSerializer), !0), k.timeout = N.timeout;
      function z() {
        if (!!k) {
          var ye = "getAllResponseHeaders" in k ? c(k.getAllResponseHeaders()) : null, Re = !x || x === "text" || x === "json" ? k.responseText : k.response, Se = {
            data: Re,
            status: k.status,
            statusText: k.statusText,
            headers: ye,
            config: N,
            request: k
          };
          r(function(Ie) {
            E(Ie), Y();
          }, function(Ie) {
            b(Ie), Y();
          }, Se), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = z : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(z);
      }, k.onabort = function() {
        !k || (b(new m("Request aborted", m.ECONNABORTED, N, k)), k = null);
      }, k.onerror = function() {
        b(new m("Network Error", m.ERR_NETWORK, N, k, k)), k = null;
      }, k.ontimeout = function() {
        var Re = N.timeout ? "timeout of " + N.timeout + "ms exceeded" : "timeout exceeded", Se = N.transitional || f;
        N.timeoutErrorMessage && (Re = N.timeoutErrorMessage), b(new m(
          Re,
          Se.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          N,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var Q = (N.withCredentials || d(G)) && N.xsrfCookieName ? o.read(N.xsrfCookieName) : void 0;
        Q && (A[N.xsrfHeaderName] = Q);
      }
      "setRequestHeader" in k && e.forEach(A, function(Re, Se) {
        typeof C > "u" && Se.toLowerCase() === "content-type" ? delete A[Se] : k.setRequestHeader(Se, Re);
      }), e.isUndefined(N.withCredentials) || (k.withCredentials = !!N.withCredentials), x && x !== "json" && (k.responseType = N.responseType), typeof N.onDownloadProgress == "function" && k.addEventListener("progress", N.onDownloadProgress), typeof N.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", N.onUploadProgress), (N.cancelToken || N.signal) && (_ = function(ye) {
        !k || (b(!ye || ye && ye.type ? new g() : ye), k.abort(), k = null);
      }, N.cancelToken && N.cancelToken.subscribe(_), N.signal && (N.signal.aborted ? _() : N.signal.addEventListener("abort", _))), C || (C = null);
      var L = V(G);
      if (L && ["http", "https", "file"].indexOf(L) === -1) {
        b(new m("Unsupported protocol " + L + ":", m.ERR_BAD_REQUEST, N));
        return;
      }
      k.send(C);
    });
  }, uc;
}
var dc, Xh;
function wk() {
  return Xh || (Xh = 1, dc = null), dc;
}
var Be = Pe, Lh = ak, qh = vo, vk = Yw, Vk = Pw, gk = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Kh(e, r) {
  !Be.isUndefined(e) && Be.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function Tk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = $h()), e;
}
function Uk(e, r, o) {
  if (Be.isString(e))
    try {
      return (r || JSON.parse)(e), Be.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (o || JSON.stringify)(e);
}
var Us = {
  transitional: vk,
  adapter: Tk(),
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
      return Vk(c ? { "files[]": r } : r, d && new d());
    } else if (i || s === "application/json")
      return Kh(o, "application/json"), Uk(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || Us.transitional, i = o && o.silentJSONParsing, s = o && o.forcedJSONParsing, c = !i && this.responseType === "json";
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
    FormData: wk()
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
  Us.headers[r] = {};
});
Be.forEach(["post", "put", "patch"], function(r) {
  Us.headers[r] = Be.merge(gk);
});
var Ju = Us, yk = Pe, Nk = Ju, Rk = function(r, o, i) {
  var s = this || Nk;
  return yk.forEach(i, function(d) {
    r = d.call(s, r, o);
  }), r;
}, fc, ep;
function jw() {
  return ep || (ep = 1, fc = function(r) {
    return !!(r && r.__CANCEL__);
  }), fc;
}
var tp = Pe, hc = Rk, kk = jw(), Mk = Ju, bk = Ts();
function pc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new bk();
}
var Zk = function(r) {
  pc(r), r.headers = r.headers || {}, r.data = hc.call(
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
  var o = r.adapter || Mk.adapter;
  return o(r).then(function(s) {
    return pc(r), s.data = hc.call(
      r,
      s.data,
      s.headers,
      r.transformResponse
    ), s;
  }, function(s) {
    return kk(s) || (pc(r), s && s.response && (s.response.data = hc.call(
      r,
      s.response.data,
      s.response.headers,
      r.transformResponse
    ))), Promise.reject(s);
  });
}, wt = Pe, $w = function(r, o) {
  o = o || {};
  var i = {};
  function s(V, U) {
    return wt.isPlainObject(V) && wt.isPlainObject(U) ? wt.merge(V, U) : wt.isPlainObject(U) ? wt.merge({}, U) : wt.isArray(U) ? U.slice() : U;
  }
  function c(V) {
    if (wt.isUndefined(o[V])) {
      if (!wt.isUndefined(r[V]))
        return s(void 0, r[V]);
    } else
      return s(r[V], o[V]);
  }
  function d(V) {
    if (!wt.isUndefined(o[V]))
      return s(void 0, o[V]);
  }
  function f(V) {
    if (wt.isUndefined(o[V])) {
      if (!wt.isUndefined(r[V]))
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
  var g = {
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
  return wt.forEach(Object.keys(r).concat(Object.keys(o)), function(U) {
    var N = g[U] || c, F = N(U);
    wt.isUndefined(F) && N !== m || (i[U] = F);
  }), i;
}, mc, np;
function Xw() {
  return np || (np = 1, mc = {
    version: "0.27.2"
  }), mc;
}
var Sk = Xw().version, Yn = vo, Au = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Au[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var rp = {};
Au.transitional = function(r, o, i) {
  function s(c, d) {
    return "[Axios v" + Sk + "] Transitional option '" + c + "'" + d + (i ? ". " + i : "");
  }
  return function(c, d, f) {
    if (r === !1)
      throw new Yn(
        s(d, " has been removed" + (o ? " in " + o : "")),
        Yn.ERR_DEPRECATED
      );
    return o && !rp[d] && (rp[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(c, d, f) : !0;
  };
};
function Ek(e, r, o) {
  if (typeof e != "object")
    throw new Yn("options must be an object", Yn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), s = i.length; s-- > 0; ) {
    var c = i[s], d = r[c];
    if (d) {
      var f = e[c], m = f === void 0 || d(f, c, e);
      if (m !== !0)
        throw new Yn("option " + c + " must be " + m, Yn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new Yn("Unknown option " + c, Yn.ERR_BAD_OPTION);
  }
}
var Jk = {
  assertOptions: Ek,
  validators: Au
}, Lw = Pe, Ak = Ow, op = rk, ap = Zk, ys = $w, Fk = Hw, qw = Jk, zr = qw.validators;
function mo(e) {
  this.defaults = e, this.interceptors = {
    request: new op(),
    response: new op()
  };
}
mo.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = ys(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var i = o.transitional;
  i !== void 0 && qw.assertOptions(i, {
    silentJSONParsing: zr.transitional(zr.boolean),
    forcedJSONParsing: zr.transitional(zr.boolean),
    clarifyTimeoutError: zr.transitional(zr.boolean)
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
  for (var g = o; s.length; ) {
    var V = s.shift(), U = s.shift();
    try {
      g = V(g);
    } catch (N) {
      U(N);
      break;
    }
  }
  try {
    f = ap(g);
  } catch (N) {
    return Promise.reject(N);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
mo.prototype.getUri = function(r) {
  r = ys(this.defaults, r);
  var o = Fk(r.baseURL, r.url);
  return Ak(o, r.params, r.paramsSerializer);
};
Lw.forEach(["delete", "get", "head", "options"], function(r) {
  mo.prototype[r] = function(o, i) {
    return this.request(ys(i || {}, {
      method: r,
      url: o,
      data: (i || {}).data
    }));
  };
});
Lw.forEach(["post", "put", "patch"], function(r) {
  function o(i) {
    return function(c, d, f) {
      return this.request(ys(f || {}, {
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
var Ck = mo, wc, ip;
function Wk() {
  if (ip)
    return wc;
  ip = 1;
  var e = Ts();
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
  }, wc = r, wc;
}
var vc, sp;
function xk() {
  return sp || (sp = 1, vc = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), vc;
}
var Vc, lp;
function Bk() {
  if (lp)
    return Vc;
  lp = 1;
  var e = Pe;
  return Vc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, Vc;
}
var cp = Pe, _k = _w, ns = Ck, Ik = $w, Dk = Ju;
function Kw(e) {
  var r = new ns(e), o = _k(ns.prototype.request, r);
  return cp.extend(o, ns.prototype, r), cp.extend(o, r), o.create = function(s) {
    return Kw(Ik(e, s));
  }, o;
}
var ct = Kw(Dk);
ct.Axios = ns;
ct.CanceledError = Ts();
ct.CancelToken = Wk();
ct.isCancel = jw();
ct.VERSION = Xw().version;
ct.toFormData = Pw;
ct.AxiosError = vo;
ct.Cancel = ct.CanceledError;
ct.all = function(r) {
  return Promise.all(r);
};
ct.spread = xk();
ct.isAxiosError = Bk();
ku.exports = ct;
ku.exports.default = ct;
(function(e) {
  e.exports = ku.exports;
})(Bw);
const ev = /* @__PURE__ */ CR(Bw.exports), Zn = ev.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), dn = ev.create({
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
    var o, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", g = 500, V = "__lodash_placeholder__", U = 1, N = 2, F = 4, E = 1, b = 2, C = 1, A = 2, x = 4, _ = 8, Y = 16, k = 32, W = 64, I = 128, G = 256, z = 512, Q = 30, L = "...", ye = 800, Re = 16, Se = 1, fe = 2, Ie = 3, De = 1 / 0, Xe = 9007199254740991, yo = 17976931348623157e292, xa = 0 / 0, Kt = 4294967295, C1 = Kt - 1, W1 = Kt >>> 1, x1 = [
      ["ary", I],
      ["bind", C],
      ["bindKey", A],
      ["curry", _],
      ["curryRight", Y],
      ["flip", z],
      ["partial", k],
      ["partialRight", W],
      ["rearg", G]
    ], Mr = "[object Arguments]", Ba = "[object Array]", B1 = "[object AsyncFunction]", No = "[object Boolean]", Ro = "[object Date]", _1 = "[object DOMException]", _a = "[object Error]", Ia = "[object Function]", cd = "[object GeneratorFunction]", It = "[object Map]", ko = "[object Number]", I1 = "[object Null]", fn = "[object Object]", ud = "[object Promise]", D1 = "[object Proxy]", Mo = "[object RegExp]", Dt = "[object Set]", bo = "[object String]", Da = "[object Symbol]", O1 = "[object Undefined]", Zo = "[object WeakMap]", Q1 = "[object WeakSet]", So = "[object ArrayBuffer]", br = "[object DataView]", Bs = "[object Float32Array]", _s = "[object Float64Array]", Is = "[object Int8Array]", Ds = "[object Int16Array]", Os = "[object Int32Array]", Qs = "[object Uint8Array]", zs = "[object Uint8ClampedArray]", Gs = "[object Uint16Array]", Ys = "[object Uint32Array]", z1 = /\b__p \+= '';/g, G1 = /\b(__p \+=) '' \+/g, Y1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dd = /&(?:amp|lt|gt|quot|#39);/g, fd = /[&<>"']/g, P1 = RegExp(dd.source), H1 = RegExp(fd.source), j1 = /<%-([\s\S]+?)%>/g, $1 = /<%([\s\S]+?)%>/g, hd = /<%=([\s\S]+?)%>/g, X1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, L1 = /^\w*$/, q1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ps = /[\\^$.*+?()[\]{}|]/g, K1 = RegExp(Ps.source), Hs = /^\s+/, eV = /\s/, tV = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, nV = /\{\n\/\* \[wrapped with (.+)\] \*/, rV = /,? & /, oV = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, aV = /[()=,{}\[\]\/\s]/, iV = /\\(\\)?/g, sV = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pd = /\w*$/, lV = /^[-+]0x[0-9a-f]+$/i, cV = /^0b[01]+$/i, uV = /^\[object .+?Constructor\]$/, dV = /^0o[0-7]+$/i, fV = /^(?:0|[1-9]\d*)$/, hV = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Oa = /($^)/, pV = /['\n\r\u2028\u2029\\]/g, Qa = "\\ud800-\\udfff", mV = "\\u0300-\\u036f", wV = "\\ufe20-\\ufe2f", vV = "\\u20d0-\\u20ff", md = mV + wV + vV, wd = "\\u2700-\\u27bf", vd = "a-z\\xdf-\\xf6\\xf8-\\xff", VV = "\\xac\\xb1\\xd7\\xf7", gV = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", TV = "\\u2000-\\u206f", UV = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vd = "A-Z\\xc0-\\xd6\\xd8-\\xde", gd = "\\ufe0e\\ufe0f", Td = VV + gV + TV + UV, js = "['\u2019]", yV = "[" + Qa + "]", Ud = "[" + Td + "]", za = "[" + md + "]", yd = "\\d+", NV = "[" + wd + "]", Nd = "[" + vd + "]", Rd = "[^" + Qa + Td + yd + wd + vd + Vd + "]", $s = "\\ud83c[\\udffb-\\udfff]", RV = "(?:" + za + "|" + $s + ")", kd = "[^" + Qa + "]", Xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ls = "[\\ud800-\\udbff][\\udc00-\\udfff]", Zr = "[" + Vd + "]", Md = "\\u200d", bd = "(?:" + Nd + "|" + Rd + ")", kV = "(?:" + Zr + "|" + Rd + ")", Zd = "(?:" + js + "(?:d|ll|m|re|s|t|ve))?", Sd = "(?:" + js + "(?:D|LL|M|RE|S|T|VE))?", Ed = RV + "?", Jd = "[" + gd + "]?", MV = "(?:" + Md + "(?:" + [kd, Xs, Ls].join("|") + ")" + Jd + Ed + ")*", bV = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ZV = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ad = Jd + Ed + MV, SV = "(?:" + [NV, Xs, Ls].join("|") + ")" + Ad, EV = "(?:" + [kd + za + "?", za, Xs, Ls, yV].join("|") + ")", JV = RegExp(js, "g"), AV = RegExp(za, "g"), qs = RegExp($s + "(?=" + $s + ")|" + EV + Ad, "g"), FV = RegExp([
      Zr + "?" + Nd + "+" + Zd + "(?=" + [Ud, Zr, "$"].join("|") + ")",
      kV + "+" + Sd + "(?=" + [Ud, Zr + bd, "$"].join("|") + ")",
      Zr + "?" + bd + "+" + Zd,
      Zr + "+" + Sd,
      ZV,
      bV,
      yd,
      SV
    ].join("|"), "g"), CV = RegExp("[" + Md + Qa + md + gd + "]"), WV = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, xV = [
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
    ], BV = -1, Ve = {};
    Ve[Bs] = Ve[_s] = Ve[Is] = Ve[Ds] = Ve[Os] = Ve[Qs] = Ve[zs] = Ve[Gs] = Ve[Ys] = !0, Ve[Mr] = Ve[Ba] = Ve[So] = Ve[No] = Ve[br] = Ve[Ro] = Ve[_a] = Ve[Ia] = Ve[It] = Ve[ko] = Ve[fn] = Ve[Mo] = Ve[Dt] = Ve[bo] = Ve[Zo] = !1;
    var pe = {};
    pe[Mr] = pe[Ba] = pe[So] = pe[br] = pe[No] = pe[Ro] = pe[Bs] = pe[_s] = pe[Is] = pe[Ds] = pe[Os] = pe[It] = pe[ko] = pe[fn] = pe[Mo] = pe[Dt] = pe[bo] = pe[Da] = pe[Qs] = pe[zs] = pe[Gs] = pe[Ys] = !0, pe[_a] = pe[Ia] = pe[Zo] = !1;
    var _V = {
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
    }, IV = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, DV = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, OV = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, QV = parseFloat, zV = parseInt, Fd = typeof Yo == "object" && Yo && Yo.Object === Object && Yo, GV = typeof self == "object" && self && self.Object === Object && self, Oe = Fd || GV || Function("return this")(), Ks = r && !r.nodeType && r, Kn = Ks && !0 && e && !e.nodeType && e, Cd = Kn && Kn.exports === Ks, el = Cd && Fd.process, Rt = function() {
      try {
        var T = Kn && Kn.require && Kn.require("util").types;
        return T || el && el.binding && el.binding("util");
      } catch {
      }
    }(), Wd = Rt && Rt.isArrayBuffer, xd = Rt && Rt.isDate, Bd = Rt && Rt.isMap, _d = Rt && Rt.isRegExp, Id = Rt && Rt.isSet, Dd = Rt && Rt.isTypedArray;
    function ut(T, M, R) {
      switch (R.length) {
        case 0:
          return T.call(M);
        case 1:
          return T.call(M, R[0]);
        case 2:
          return T.call(M, R[0], R[1]);
        case 3:
          return T.call(M, R[0], R[1], R[2]);
      }
      return T.apply(M, R);
    }
    function YV(T, M, R, D) {
      for (var X = -1, se = T == null ? 0 : T.length; ++X < se; ) {
        var Ae = T[X];
        M(D, Ae, R(Ae), T);
      }
      return D;
    }
    function kt(T, M) {
      for (var R = -1, D = T == null ? 0 : T.length; ++R < D && M(T[R], R, T) !== !1; )
        ;
      return T;
    }
    function PV(T, M) {
      for (var R = T == null ? 0 : T.length; R-- && M(T[R], R, T) !== !1; )
        ;
      return T;
    }
    function Od(T, M) {
      for (var R = -1, D = T == null ? 0 : T.length; ++R < D; )
        if (!M(T[R], R, T))
          return !1;
      return !0;
    }
    function En(T, M) {
      for (var R = -1, D = T == null ? 0 : T.length, X = 0, se = []; ++R < D; ) {
        var Ae = T[R];
        M(Ae, R, T) && (se[X++] = Ae);
      }
      return se;
    }
    function Ga(T, M) {
      var R = T == null ? 0 : T.length;
      return !!R && Sr(T, M, 0) > -1;
    }
    function tl(T, M, R) {
      for (var D = -1, X = T == null ? 0 : T.length; ++D < X; )
        if (R(M, T[D]))
          return !0;
      return !1;
    }
    function Te(T, M) {
      for (var R = -1, D = T == null ? 0 : T.length, X = Array(D); ++R < D; )
        X[R] = M(T[R], R, T);
      return X;
    }
    function Jn(T, M) {
      for (var R = -1, D = M.length, X = T.length; ++R < D; )
        T[X + R] = M[R];
      return T;
    }
    function nl(T, M, R, D) {
      var X = -1, se = T == null ? 0 : T.length;
      for (D && se && (R = T[++X]); ++X < se; )
        R = M(R, T[X], X, T);
      return R;
    }
    function HV(T, M, R, D) {
      var X = T == null ? 0 : T.length;
      for (D && X && (R = T[--X]); X--; )
        R = M(R, T[X], X, T);
      return R;
    }
    function rl(T, M) {
      for (var R = -1, D = T == null ? 0 : T.length; ++R < D; )
        if (M(T[R], R, T))
          return !0;
      return !1;
    }
    var jV = ol("length");
    function $V(T) {
      return T.split("");
    }
    function XV(T) {
      return T.match(oV) || [];
    }
    function Qd(T, M, R) {
      var D;
      return R(T, function(X, se, Ae) {
        if (M(X, se, Ae))
          return D = se, !1;
      }), D;
    }
    function Ya(T, M, R, D) {
      for (var X = T.length, se = R + (D ? 1 : -1); D ? se-- : ++se < X; )
        if (M(T[se], se, T))
          return se;
      return -1;
    }
    function Sr(T, M, R) {
      return M === M ? l0(T, M, R) : Ya(T, zd, R);
    }
    function LV(T, M, R, D) {
      for (var X = R - 1, se = T.length; ++X < se; )
        if (D(T[X], M))
          return X;
      return -1;
    }
    function zd(T) {
      return T !== T;
    }
    function Gd(T, M) {
      var R = T == null ? 0 : T.length;
      return R ? il(T, M) / R : xa;
    }
    function ol(T) {
      return function(M) {
        return M == null ? o : M[T];
      };
    }
    function al(T) {
      return function(M) {
        return T == null ? o : T[M];
      };
    }
    function Yd(T, M, R, D, X) {
      return X(T, function(se, Ae, he) {
        R = D ? (D = !1, se) : M(R, se, Ae, he);
      }), R;
    }
    function qV(T, M) {
      var R = T.length;
      for (T.sort(M); R--; )
        T[R] = T[R].value;
      return T;
    }
    function il(T, M) {
      for (var R, D = -1, X = T.length; ++D < X; ) {
        var se = M(T[D]);
        se !== o && (R = R === o ? se : R + se);
      }
      return R;
    }
    function sl(T, M) {
      for (var R = -1, D = Array(T); ++R < T; )
        D[R] = M(R);
      return D;
    }
    function KV(T, M) {
      return Te(M, function(R) {
        return [R, T[R]];
      });
    }
    function Pd(T) {
      return T && T.slice(0, Xd(T) + 1).replace(Hs, "");
    }
    function dt(T) {
      return function(M) {
        return T(M);
      };
    }
    function ll(T, M) {
      return Te(M, function(R) {
        return T[R];
      });
    }
    function Eo(T, M) {
      return T.has(M);
    }
    function Hd(T, M) {
      for (var R = -1, D = T.length; ++R < D && Sr(M, T[R], 0) > -1; )
        ;
      return R;
    }
    function jd(T, M) {
      for (var R = T.length; R-- && Sr(M, T[R], 0) > -1; )
        ;
      return R;
    }
    function e0(T, M) {
      for (var R = T.length, D = 0; R--; )
        T[R] === M && ++D;
      return D;
    }
    var t0 = al(_V), n0 = al(IV);
    function r0(T) {
      return "\\" + OV[T];
    }
    function o0(T, M) {
      return T == null ? o : T[M];
    }
    function Er(T) {
      return CV.test(T);
    }
    function a0(T) {
      return WV.test(T);
    }
    function i0(T) {
      for (var M, R = []; !(M = T.next()).done; )
        R.push(M.value);
      return R;
    }
    function cl(T) {
      var M = -1, R = Array(T.size);
      return T.forEach(function(D, X) {
        R[++M] = [X, D];
      }), R;
    }
    function $d(T, M) {
      return function(R) {
        return T(M(R));
      };
    }
    function An(T, M) {
      for (var R = -1, D = T.length, X = 0, se = []; ++R < D; ) {
        var Ae = T[R];
        (Ae === M || Ae === V) && (T[R] = V, se[X++] = R);
      }
      return se;
    }
    function Pa(T) {
      var M = -1, R = Array(T.size);
      return T.forEach(function(D) {
        R[++M] = D;
      }), R;
    }
    function s0(T) {
      var M = -1, R = Array(T.size);
      return T.forEach(function(D) {
        R[++M] = [D, D];
      }), R;
    }
    function l0(T, M, R) {
      for (var D = R - 1, X = T.length; ++D < X; )
        if (T[D] === M)
          return D;
      return -1;
    }
    function c0(T, M, R) {
      for (var D = R + 1; D--; )
        if (T[D] === M)
          return D;
      return D;
    }
    function Jr(T) {
      return Er(T) ? d0(T) : jV(T);
    }
    function Ot(T) {
      return Er(T) ? f0(T) : $V(T);
    }
    function Xd(T) {
      for (var M = T.length; M-- && eV.test(T.charAt(M)); )
        ;
      return M;
    }
    var u0 = al(DV);
    function d0(T) {
      for (var M = qs.lastIndex = 0; qs.test(T); )
        ++M;
      return M;
    }
    function f0(T) {
      return T.match(qs) || [];
    }
    function h0(T) {
      return T.match(FV) || [];
    }
    var p0 = function T(M) {
      M = M == null ? Oe : Ar.defaults(Oe.Object(), M, Ar.pick(Oe, xV));
      var R = M.Array, D = M.Date, X = M.Error, se = M.Function, Ae = M.Math, he = M.Object, ul = M.RegExp, m0 = M.String, Mt = M.TypeError, Ha = R.prototype, w0 = se.prototype, Fr = he.prototype, ja = M["__core-js_shared__"], $a = w0.toString, ue = Fr.hasOwnProperty, v0 = 0, Ld = function() {
        var t = /[^.]+$/.exec(ja && ja.keys && ja.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Xa = Fr.toString, V0 = $a.call(he), g0 = Oe._, T0 = ul(
        "^" + $a.call(ue).replace(Ps, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), La = Cd ? M.Buffer : o, Fn = M.Symbol, qa = M.Uint8Array, qd = La ? La.allocUnsafe : o, Ka = $d(he.getPrototypeOf, he), Kd = he.create, ef = Fr.propertyIsEnumerable, ei = Ha.splice, tf = Fn ? Fn.isConcatSpreadable : o, Jo = Fn ? Fn.iterator : o, er = Fn ? Fn.toStringTag : o, ti = function() {
        try {
          var t = ar(he, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), U0 = M.clearTimeout !== Oe.clearTimeout && M.clearTimeout, y0 = D && D.now !== Oe.Date.now && D.now, N0 = M.setTimeout !== Oe.setTimeout && M.setTimeout, ni = Ae.ceil, ri = Ae.floor, dl = he.getOwnPropertySymbols, R0 = La ? La.isBuffer : o, nf = M.isFinite, k0 = Ha.join, M0 = $d(he.keys, he), Fe = Ae.max, He = Ae.min, b0 = D.now, Z0 = M.parseInt, rf = Ae.random, S0 = Ha.reverse, fl = ar(M, "DataView"), Ao = ar(M, "Map"), hl = ar(M, "Promise"), Cr = ar(M, "Set"), Fo = ar(M, "WeakMap"), Co = ar(he, "create"), oi = Fo && new Fo(), Wr = {}, E0 = ir(fl), J0 = ir(Ao), A0 = ir(hl), F0 = ir(Cr), C0 = ir(Fo), ai = Fn ? Fn.prototype : o, Wo = ai ? ai.valueOf : o, of = ai ? ai.toString : o;
      function h(t) {
        if (Ne(t) && !q(t) && !(t instanceof oe)) {
          if (t instanceof bt)
            return t;
          if (ue.call(t, "__wrapped__"))
            return ih(t);
        }
        return new bt(t);
      }
      var xr = function() {
        function t() {
        }
        return function(n) {
          if (!Ue(n))
            return {};
          if (Kd)
            return Kd(n);
          t.prototype = n;
          var a = new t();
          return t.prototype = o, a;
        };
      }();
      function ii() {
      }
      function bt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: j1,
        evaluate: $1,
        interpolate: hd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = ii.prototype, h.prototype.constructor = h, bt.prototype = xr(ii.prototype), bt.prototype.constructor = bt;
      function oe(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Kt, this.__views__ = [];
      }
      function W0() {
        var t = new oe(this.__wrapped__);
        return t.__actions__ = tt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = tt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = tt(this.__views__), t;
      }
      function x0() {
        if (this.__filtered__) {
          var t = new oe(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function B0() {
        var t = this.__wrapped__.value(), n = this.__dir__, a = q(t), l = n < 0, u = a ? t.length : 0, p = $g(0, u, this.__views__), w = p.start, v = p.end, y = v - w, Z = l ? v : w - 1, S = this.__iteratees__, J = S.length, B = 0, O = He(y, this.__takeCount__);
        if (!a || !l && u == y && O == y)
          return Sf(t, this.__actions__);
        var H = [];
        e:
          for (; y-- && B < O; ) {
            Z += n;
            for (var ee = -1, j = t[Z]; ++ee < J; ) {
              var re = S[ee], ae = re.iteratee, pt = re.type, Ke = ae(j);
              if (pt == fe)
                j = Ke;
              else if (!Ke) {
                if (pt == Se)
                  continue e;
                break e;
              }
            }
            H[B++] = j;
          }
        return H;
      }
      oe.prototype = xr(ii.prototype), oe.prototype.constructor = oe;
      function tr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function _0() {
        this.__data__ = Co ? Co(null) : {}, this.size = 0;
      }
      function I0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function D0(t) {
        var n = this.__data__;
        if (Co) {
          var a = n[t];
          return a === m ? o : a;
        }
        return ue.call(n, t) ? n[t] : o;
      }
      function O0(t) {
        var n = this.__data__;
        return Co ? n[t] !== o : ue.call(n, t);
      }
      function Q0(t, n) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Co && n === o ? m : n, this;
      }
      tr.prototype.clear = _0, tr.prototype.delete = I0, tr.prototype.get = D0, tr.prototype.has = O0, tr.prototype.set = Q0;
      function hn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function z0() {
        this.__data__ = [], this.size = 0;
      }
      function G0(t) {
        var n = this.__data__, a = si(n, t);
        if (a < 0)
          return !1;
        var l = n.length - 1;
        return a == l ? n.pop() : ei.call(n, a, 1), --this.size, !0;
      }
      function Y0(t) {
        var n = this.__data__, a = si(n, t);
        return a < 0 ? o : n[a][1];
      }
      function P0(t) {
        return si(this.__data__, t) > -1;
      }
      function H0(t, n) {
        var a = this.__data__, l = si(a, t);
        return l < 0 ? (++this.size, a.push([t, n])) : a[l][1] = n, this;
      }
      hn.prototype.clear = z0, hn.prototype.delete = G0, hn.prototype.get = Y0, hn.prototype.has = P0, hn.prototype.set = H0;
      function pn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function j0() {
        this.size = 0, this.__data__ = {
          hash: new tr(),
          map: new (Ao || hn)(),
          string: new tr()
        };
      }
      function $0(t) {
        var n = gi(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function X0(t) {
        return gi(this, t).get(t);
      }
      function L0(t) {
        return gi(this, t).has(t);
      }
      function q0(t, n) {
        var a = gi(this, t), l = a.size;
        return a.set(t, n), this.size += a.size == l ? 0 : 1, this;
      }
      pn.prototype.clear = j0, pn.prototype.delete = $0, pn.prototype.get = X0, pn.prototype.has = L0, pn.prototype.set = q0;
      function nr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new pn(); ++n < a; )
          this.add(t[n]);
      }
      function K0(t) {
        return this.__data__.set(t, m), this;
      }
      function eg(t) {
        return this.__data__.has(t);
      }
      nr.prototype.add = nr.prototype.push = K0, nr.prototype.has = eg;
      function Qt(t) {
        var n = this.__data__ = new hn(t);
        this.size = n.size;
      }
      function tg() {
        this.__data__ = new hn(), this.size = 0;
      }
      function ng(t) {
        var n = this.__data__, a = n.delete(t);
        return this.size = n.size, a;
      }
      function rg(t) {
        return this.__data__.get(t);
      }
      function og(t) {
        return this.__data__.has(t);
      }
      function ag(t, n) {
        var a = this.__data__;
        if (a instanceof hn) {
          var l = a.__data__;
          if (!Ao || l.length < s - 1)
            return l.push([t, n]), this.size = ++a.size, this;
          a = this.__data__ = new pn(l);
        }
        return a.set(t, n), this.size = a.size, this;
      }
      Qt.prototype.clear = tg, Qt.prototype.delete = ng, Qt.prototype.get = rg, Qt.prototype.has = og, Qt.prototype.set = ag;
      function af(t, n) {
        var a = q(t), l = !a && sr(t), u = !a && !l && _n(t), p = !a && !l && !u && Dr(t), w = a || l || u || p, v = w ? sl(t.length, m0) : [], y = v.length;
        for (var Z in t)
          (n || ue.call(t, Z)) && !(w && (Z == "length" || u && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || Vn(Z, y))) && v.push(Z);
        return v;
      }
      function sf(t) {
        var n = t.length;
        return n ? t[Rl(0, n - 1)] : o;
      }
      function ig(t, n) {
        return Ti(tt(t), rr(n, 0, t.length));
      }
      function sg(t) {
        return Ti(tt(t));
      }
      function pl(t, n, a) {
        (a !== o && !zt(t[n], a) || a === o && !(n in t)) && mn(t, n, a);
      }
      function xo(t, n, a) {
        var l = t[n];
        (!(ue.call(t, n) && zt(l, a)) || a === o && !(n in t)) && mn(t, n, a);
      }
      function si(t, n) {
        for (var a = t.length; a--; )
          if (zt(t[a][0], n))
            return a;
        return -1;
      }
      function lg(t, n, a, l) {
        return Cn(t, function(u, p, w) {
          n(l, u, a(u), w);
        }), l;
      }
      function lf(t, n) {
        return t && tn(n, xe(n), t);
      }
      function cg(t, n) {
        return t && tn(n, rt(n), t);
      }
      function mn(t, n, a) {
        n == "__proto__" && ti ? ti(t, n, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[n] = a;
      }
      function ml(t, n) {
        for (var a = -1, l = n.length, u = R(l), p = t == null; ++a < l; )
          u[a] = p ? o : $l(t, n[a]);
        return u;
      }
      function rr(t, n, a) {
        return t === t && (a !== o && (t = t <= a ? t : a), n !== o && (t = t >= n ? t : n)), t;
      }
      function Zt(t, n, a, l, u, p) {
        var w, v = n & U, y = n & N, Z = n & F;
        if (a && (w = u ? a(t, l, u, p) : a(t)), w !== o)
          return w;
        if (!Ue(t))
          return t;
        var S = q(t);
        if (S) {
          if (w = Lg(t), !v)
            return tt(t, w);
        } else {
          var J = je(t), B = J == Ia || J == cd;
          if (_n(t))
            return Af(t, v);
          if (J == fn || J == Mr || B && !u) {
            if (w = y || B ? {} : Lf(t), !v)
              return y ? Dg(t, cg(w, t)) : Ig(t, lf(w, t));
          } else {
            if (!pe[J])
              return u ? t : {};
            w = qg(t, J, v);
          }
        }
        p || (p = new Qt());
        var O = p.get(t);
        if (O)
          return O;
        p.set(t, w), Mh(t) ? t.forEach(function(j) {
          w.add(Zt(j, n, a, j, t, p));
        }) : Rh(t) && t.forEach(function(j, re) {
          w.set(re, Zt(j, n, a, re, t, p));
        });
        var H = Z ? y ? Wl : Cl : y ? rt : xe, ee = S ? o : H(t);
        return kt(ee || t, function(j, re) {
          ee && (re = j, j = t[re]), xo(w, re, Zt(j, n, a, re, t, p));
        }), w;
      }
      function ug(t) {
        var n = xe(t);
        return function(a) {
          return cf(a, t, n);
        };
      }
      function cf(t, n, a) {
        var l = a.length;
        if (t == null)
          return !l;
        for (t = he(t); l--; ) {
          var u = a[l], p = n[u], w = t[u];
          if (w === o && !(u in t) || !p(w))
            return !1;
        }
        return !0;
      }
      function uf(t, n, a) {
        if (typeof t != "function")
          throw new Mt(d);
        return zo(function() {
          t.apply(o, a);
        }, n);
      }
      function Bo(t, n, a, l) {
        var u = -1, p = Ga, w = !0, v = t.length, y = [], Z = n.length;
        if (!v)
          return y;
        a && (n = Te(n, dt(a))), l ? (p = tl, w = !1) : n.length >= s && (p = Eo, w = !1, n = new nr(n));
        e:
          for (; ++u < v; ) {
            var S = t[u], J = a == null ? S : a(S);
            if (S = l || S !== 0 ? S : 0, w && J === J) {
              for (var B = Z; B--; )
                if (n[B] === J)
                  continue e;
              y.push(S);
            } else
              p(n, J, l) || y.push(S);
          }
        return y;
      }
      var Cn = Bf(en), df = Bf(vl, !0);
      function dg(t, n) {
        var a = !0;
        return Cn(t, function(l, u, p) {
          return a = !!n(l, u, p), a;
        }), a;
      }
      function li(t, n, a) {
        for (var l = -1, u = t.length; ++l < u; ) {
          var p = t[l], w = n(p);
          if (w != null && (v === o ? w === w && !ht(w) : a(w, v)))
            var v = w, y = p;
        }
        return y;
      }
      function fg(t, n, a, l) {
        var u = t.length;
        for (a = K(a), a < 0 && (a = -a > u ? 0 : u + a), l = l === o || l > u ? u : K(l), l < 0 && (l += u), l = a > l ? 0 : Zh(l); a < l; )
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
        for (a || (a = eT), u || (u = []); ++p < w; ) {
          var v = t[p];
          n > 0 && a(v) ? n > 1 ? Qe(v, n - 1, a, l, u) : Jn(u, v) : l || (u[u.length] = v);
        }
        return u;
      }
      var wl = _f(), hf = _f(!0);
      function en(t, n) {
        return t && wl(t, n, xe);
      }
      function vl(t, n) {
        return t && hf(t, n, xe);
      }
      function ci(t, n) {
        return En(n, function(a) {
          return gn(t[a]);
        });
      }
      function or(t, n) {
        n = xn(n, t);
        for (var a = 0, l = n.length; t != null && a < l; )
          t = t[nn(n[a++])];
        return a && a == l ? t : o;
      }
      function pf(t, n, a) {
        var l = n(t);
        return q(t) ? l : Jn(l, a(t));
      }
      function Le(t) {
        return t == null ? t === o ? O1 : I1 : er && er in he(t) ? jg(t) : sT(t);
      }
      function Vl(t, n) {
        return t > n;
      }
      function hg(t, n) {
        return t != null && ue.call(t, n);
      }
      function pg(t, n) {
        return t != null && n in he(t);
      }
      function mg(t, n, a) {
        return t >= He(n, a) && t < Fe(n, a);
      }
      function gl(t, n, a) {
        for (var l = a ? tl : Ga, u = t[0].length, p = t.length, w = p, v = R(p), y = 1 / 0, Z = []; w--; ) {
          var S = t[w];
          w && n && (S = Te(S, dt(n))), y = He(S.length, y), v[w] = !a && (n || u >= 120 && S.length >= 120) ? new nr(w && S) : o;
        }
        S = t[0];
        var J = -1, B = v[0];
        e:
          for (; ++J < u && Z.length < y; ) {
            var O = S[J], H = n ? n(O) : O;
            if (O = a || O !== 0 ? O : 0, !(B ? Eo(B, H) : l(Z, H, a))) {
              for (w = p; --w; ) {
                var ee = v[w];
                if (!(ee ? Eo(ee, H) : l(t[w], H, a)))
                  continue e;
              }
              B && B.push(H), Z.push(O);
            }
          }
        return Z;
      }
      function wg(t, n, a, l) {
        return en(t, function(u, p, w) {
          n(l, a(u), p, w);
        }), l;
      }
      function _o(t, n, a) {
        n = xn(n, t), t = th(t, n);
        var l = t == null ? t : t[nn(Et(n))];
        return l == null ? o : ut(l, t, a);
      }
      function mf(t) {
        return Ne(t) && Le(t) == Mr;
      }
      function vg(t) {
        return Ne(t) && Le(t) == So;
      }
      function Vg(t) {
        return Ne(t) && Le(t) == Ro;
      }
      function Io(t, n, a, l, u) {
        return t === n ? !0 : t == null || n == null || !Ne(t) && !Ne(n) ? t !== t && n !== n : gg(t, n, a, l, Io, u);
      }
      function gg(t, n, a, l, u, p) {
        var w = q(t), v = q(n), y = w ? Ba : je(t), Z = v ? Ba : je(n);
        y = y == Mr ? fn : y, Z = Z == Mr ? fn : Z;
        var S = y == fn, J = Z == fn, B = y == Z;
        if (B && _n(t)) {
          if (!_n(n))
            return !1;
          w = !0, S = !1;
        }
        if (B && !S)
          return p || (p = new Qt()), w || Dr(t) ? jf(t, n, a, l, u, p) : Pg(t, n, y, a, l, u, p);
        if (!(a & E)) {
          var O = S && ue.call(t, "__wrapped__"), H = J && ue.call(n, "__wrapped__");
          if (O || H) {
            var ee = O ? t.value() : t, j = H ? n.value() : n;
            return p || (p = new Qt()), u(ee, j, a, l, p);
          }
        }
        return B ? (p || (p = new Qt()), Hg(t, n, a, l, u, p)) : !1;
      }
      function Tg(t) {
        return Ne(t) && je(t) == It;
      }
      function Tl(t, n, a, l) {
        var u = a.length, p = u, w = !l;
        if (t == null)
          return !p;
        for (t = he(t); u--; ) {
          var v = a[u];
          if (w && v[2] ? v[1] !== t[v[0]] : !(v[0] in t))
            return !1;
        }
        for (; ++u < p; ) {
          v = a[u];
          var y = v[0], Z = t[y], S = v[1];
          if (w && v[2]) {
            if (Z === o && !(y in t))
              return !1;
          } else {
            var J = new Qt();
            if (l)
              var B = l(Z, S, y, t, n, J);
            if (!(B === o ? Io(S, Z, E | b, l, J) : B))
              return !1;
          }
        }
        return !0;
      }
      function wf(t) {
        if (!Ue(t) || nT(t))
          return !1;
        var n = gn(t) ? T0 : uV;
        return n.test(ir(t));
      }
      function Ug(t) {
        return Ne(t) && Le(t) == Mo;
      }
      function yg(t) {
        return Ne(t) && je(t) == Dt;
      }
      function Ng(t) {
        return Ne(t) && Mi(t.length) && !!Ve[Le(t)];
      }
      function vf(t) {
        return typeof t == "function" ? t : t == null ? ot : typeof t == "object" ? q(t) ? Tf(t[0], t[1]) : gf(t) : Ih(t);
      }
      function Ul(t) {
        if (!Qo(t))
          return M0(t);
        var n = [];
        for (var a in he(t))
          ue.call(t, a) && a != "constructor" && n.push(a);
        return n;
      }
      function Rg(t) {
        if (!Ue(t))
          return iT(t);
        var n = Qo(t), a = [];
        for (var l in t)
          l == "constructor" && (n || !ue.call(t, l)) || a.push(l);
        return a;
      }
      function yl(t, n) {
        return t < n;
      }
      function Vf(t, n) {
        var a = -1, l = nt(t) ? R(t.length) : [];
        return Cn(t, function(u, p, w) {
          l[++a] = n(u, p, w);
        }), l;
      }
      function gf(t) {
        var n = Bl(t);
        return n.length == 1 && n[0][2] ? Kf(n[0][0], n[0][1]) : function(a) {
          return a === t || Tl(a, t, n);
        };
      }
      function Tf(t, n) {
        return Il(t) && qf(n) ? Kf(nn(t), n) : function(a) {
          var l = $l(a, t);
          return l === o && l === n ? Xl(a, t) : Io(n, l, E | b);
        };
      }
      function ui(t, n, a, l, u) {
        t !== n && wl(n, function(p, w) {
          if (u || (u = new Qt()), Ue(p))
            kg(t, n, w, a, ui, l, u);
          else {
            var v = l ? l(Ol(t, w), p, w + "", t, n, u) : o;
            v === o && (v = p), pl(t, w, v);
          }
        }, rt);
      }
      function kg(t, n, a, l, u, p, w) {
        var v = Ol(t, a), y = Ol(n, a), Z = w.get(y);
        if (Z) {
          pl(t, a, Z);
          return;
        }
        var S = p ? p(v, y, a + "", t, n, w) : o, J = S === o;
        if (J) {
          var B = q(y), O = !B && _n(y), H = !B && !O && Dr(y);
          S = y, B || O || H ? q(v) ? S = v : ke(v) ? S = tt(v) : O ? (J = !1, S = Af(y, !0)) : H ? (J = !1, S = Ff(y, !0)) : S = [] : Go(y) || sr(y) ? (S = v, sr(v) ? S = Sh(v) : (!Ue(v) || gn(v)) && (S = Lf(y))) : J = !1;
        }
        J && (w.set(y, S), u(S, y, l, p, w), w.delete(y)), pl(t, a, S);
      }
      function Uf(t, n) {
        var a = t.length;
        if (!!a)
          return n += n < 0 ? a : 0, Vn(n, a) ? t[n] : o;
      }
      function yf(t, n, a) {
        n.length ? n = Te(n, function(p) {
          return q(p) ? function(w) {
            return or(w, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [ot];
        var l = -1;
        n = Te(n, dt(P()));
        var u = Vf(t, function(p, w, v) {
          var y = Te(n, function(Z) {
            return Z(p);
          });
          return { criteria: y, index: ++l, value: p };
        });
        return qV(u, function(p, w) {
          return _g(p, w, a);
        });
      }
      function Mg(t, n) {
        return Nf(t, n, function(a, l) {
          return Xl(t, l);
        });
      }
      function Nf(t, n, a) {
        for (var l = -1, u = n.length, p = {}; ++l < u; ) {
          var w = n[l], v = or(t, w);
          a(v, w) && Do(p, xn(w, t), v);
        }
        return p;
      }
      function bg(t) {
        return function(n) {
          return or(n, t);
        };
      }
      function Nl(t, n, a, l) {
        var u = l ? LV : Sr, p = -1, w = n.length, v = t;
        for (t === n && (n = tt(n)), a && (v = Te(t, dt(a))); ++p < w; )
          for (var y = 0, Z = n[p], S = a ? a(Z) : Z; (y = u(v, S, y, l)) > -1; )
            v !== t && ei.call(v, y, 1), ei.call(t, y, 1);
        return t;
      }
      function Rf(t, n) {
        for (var a = t ? n.length : 0, l = a - 1; a--; ) {
          var u = n[a];
          if (a == l || u !== p) {
            var p = u;
            Vn(u) ? ei.call(t, u, 1) : bl(t, u);
          }
        }
        return t;
      }
      function Rl(t, n) {
        return t + ri(rf() * (n - t + 1));
      }
      function Zg(t, n, a, l) {
        for (var u = -1, p = Fe(ni((n - t) / (a || 1)), 0), w = R(p); p--; )
          w[l ? p : ++u] = t, t += a;
        return w;
      }
      function kl(t, n) {
        var a = "";
        if (!t || n < 1 || n > Xe)
          return a;
        do
          n % 2 && (a += t), n = ri(n / 2), n && (t += t);
        while (n);
        return a;
      }
      function ne(t, n) {
        return Ql(eh(t, n, ot), t + "");
      }
      function Sg(t) {
        return sf(Or(t));
      }
      function Eg(t, n) {
        var a = Or(t);
        return Ti(a, rr(n, 0, a.length));
      }
      function Do(t, n, a, l) {
        if (!Ue(t))
          return t;
        n = xn(n, t);
        for (var u = -1, p = n.length, w = p - 1, v = t; v != null && ++u < p; ) {
          var y = nn(n[u]), Z = a;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return t;
          if (u != w) {
            var S = v[y];
            Z = l ? l(S, y, v) : o, Z === o && (Z = Ue(S) ? S : Vn(n[u + 1]) ? [] : {});
          }
          xo(v, y, Z), v = v[y];
        }
        return t;
      }
      var kf = oi ? function(t, n) {
        return oi.set(t, n), t;
      } : ot, Jg = ti ? function(t, n) {
        return ti(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ql(n),
          writable: !0
        });
      } : ot;
      function Ag(t) {
        return Ti(Or(t));
      }
      function St(t, n, a) {
        var l = -1, u = t.length;
        n < 0 && (n = -n > u ? 0 : u + n), a = a > u ? u : a, a < 0 && (a += u), u = n > a ? 0 : a - n >>> 0, n >>>= 0;
        for (var p = R(u); ++l < u; )
          p[l] = t[l + n];
        return p;
      }
      function Fg(t, n) {
        var a;
        return Cn(t, function(l, u, p) {
          return a = n(l, u, p), !a;
        }), !!a;
      }
      function di(t, n, a) {
        var l = 0, u = t == null ? l : t.length;
        if (typeof n == "number" && n === n && u <= W1) {
          for (; l < u; ) {
            var p = l + u >>> 1, w = t[p];
            w !== null && !ht(w) && (a ? w <= n : w < n) ? l = p + 1 : u = p;
          }
          return u;
        }
        return Ml(t, n, ot, a);
      }
      function Ml(t, n, a, l) {
        var u = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = a(n);
        for (var w = n !== n, v = n === null, y = ht(n), Z = n === o; u < p; ) {
          var S = ri((u + p) / 2), J = a(t[S]), B = J !== o, O = J === null, H = J === J, ee = ht(J);
          if (w)
            var j = l || H;
          else
            Z ? j = H && (l || B) : v ? j = H && B && (l || !O) : y ? j = H && B && !O && (l || !ee) : O || ee ? j = !1 : j = l ? J <= n : J < n;
          j ? u = S + 1 : p = S;
        }
        return He(p, C1);
      }
      function Mf(t, n) {
        for (var a = -1, l = t.length, u = 0, p = []; ++a < l; ) {
          var w = t[a], v = n ? n(w) : w;
          if (!a || !zt(v, y)) {
            var y = v;
            p[u++] = w === 0 ? 0 : w;
          }
        }
        return p;
      }
      function bf(t) {
        return typeof t == "number" ? t : ht(t) ? xa : +t;
      }
      function ft(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return Te(t, ft) + "";
        if (ht(t))
          return of ? of.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -De ? "-0" : n;
      }
      function Wn(t, n, a) {
        var l = -1, u = Ga, p = t.length, w = !0, v = [], y = v;
        if (a)
          w = !1, u = tl;
        else if (p >= s) {
          var Z = n ? null : Gg(t);
          if (Z)
            return Pa(Z);
          w = !1, u = Eo, y = new nr();
        } else
          y = n ? [] : v;
        e:
          for (; ++l < p; ) {
            var S = t[l], J = n ? n(S) : S;
            if (S = a || S !== 0 ? S : 0, w && J === J) {
              for (var B = y.length; B--; )
                if (y[B] === J)
                  continue e;
              n && y.push(J), v.push(S);
            } else
              u(y, J, a) || (y !== v && y.push(J), v.push(S));
          }
        return v;
      }
      function bl(t, n) {
        return n = xn(n, t), t = th(t, n), t == null || delete t[nn(Et(n))];
      }
      function Zf(t, n, a, l) {
        return Do(t, n, a(or(t, n)), l);
      }
      function fi(t, n, a, l) {
        for (var u = t.length, p = l ? u : -1; (l ? p-- : ++p < u) && n(t[p], p, t); )
          ;
        return a ? St(t, l ? 0 : p, l ? p + 1 : u) : St(t, l ? p + 1 : 0, l ? u : p);
      }
      function Sf(t, n) {
        var a = t;
        return a instanceof oe && (a = a.value()), nl(n, function(l, u) {
          return u.func.apply(u.thisArg, Jn([l], u.args));
        }, a);
      }
      function Zl(t, n, a) {
        var l = t.length;
        if (l < 2)
          return l ? Wn(t[0]) : [];
        for (var u = -1, p = R(l); ++u < l; )
          for (var w = t[u], v = -1; ++v < l; )
            v != u && (p[u] = Bo(p[u] || w, t[v], n, a));
        return Wn(Qe(p, 1), n, a);
      }
      function Ef(t, n, a) {
        for (var l = -1, u = t.length, p = n.length, w = {}; ++l < u; ) {
          var v = l < p ? n[l] : o;
          a(w, t[l], v);
        }
        return w;
      }
      function Sl(t) {
        return ke(t) ? t : [];
      }
      function El(t) {
        return typeof t == "function" ? t : ot;
      }
      function xn(t, n) {
        return q(t) ? t : Il(t, n) ? [t] : ah(ce(t));
      }
      var Cg = ne;
      function Bn(t, n, a) {
        var l = t.length;
        return a = a === o ? l : a, !n && a >= l ? t : St(t, n, a);
      }
      var Jf = U0 || function(t) {
        return Oe.clearTimeout(t);
      };
      function Af(t, n) {
        if (n)
          return t.slice();
        var a = t.length, l = qd ? qd(a) : new t.constructor(a);
        return t.copy(l), l;
      }
      function Jl(t) {
        var n = new t.constructor(t.byteLength);
        return new qa(n).set(new qa(t)), n;
      }
      function Wg(t, n) {
        var a = n ? Jl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function xg(t) {
        var n = new t.constructor(t.source, pd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Bg(t) {
        return Wo ? he(Wo.call(t)) : {};
      }
      function Ff(t, n) {
        var a = n ? Jl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function Cf(t, n) {
        if (t !== n) {
          var a = t !== o, l = t === null, u = t === t, p = ht(t), w = n !== o, v = n === null, y = n === n, Z = ht(n);
          if (!v && !Z && !p && t > n || p && w && y && !v && !Z || l && w && y || !a && y || !u)
            return 1;
          if (!l && !p && !Z && t < n || Z && a && u && !l && !p || v && a && u || !w && u || !y)
            return -1;
        }
        return 0;
      }
      function _g(t, n, a) {
        for (var l = -1, u = t.criteria, p = n.criteria, w = u.length, v = a.length; ++l < w; ) {
          var y = Cf(u[l], p[l]);
          if (y) {
            if (l >= v)
              return y;
            var Z = a[l];
            return y * (Z == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Wf(t, n, a, l) {
        for (var u = -1, p = t.length, w = a.length, v = -1, y = n.length, Z = Fe(p - w, 0), S = R(y + Z), J = !l; ++v < y; )
          S[v] = n[v];
        for (; ++u < w; )
          (J || u < p) && (S[a[u]] = t[u]);
        for (; Z--; )
          S[v++] = t[u++];
        return S;
      }
      function xf(t, n, a, l) {
        for (var u = -1, p = t.length, w = -1, v = a.length, y = -1, Z = n.length, S = Fe(p - v, 0), J = R(S + Z), B = !l; ++u < S; )
          J[u] = t[u];
        for (var O = u; ++y < Z; )
          J[O + y] = n[y];
        for (; ++w < v; )
          (B || u < p) && (J[O + a[w]] = t[u++]);
        return J;
      }
      function tt(t, n) {
        var a = -1, l = t.length;
        for (n || (n = R(l)); ++a < l; )
          n[a] = t[a];
        return n;
      }
      function tn(t, n, a, l) {
        var u = !a;
        a || (a = {});
        for (var p = -1, w = n.length; ++p < w; ) {
          var v = n[p], y = l ? l(a[v], t[v], v, a, t) : o;
          y === o && (y = t[v]), u ? mn(a, v, y) : xo(a, v, y);
        }
        return a;
      }
      function Ig(t, n) {
        return tn(t, _l(t), n);
      }
      function Dg(t, n) {
        return tn(t, $f(t), n);
      }
      function hi(t, n) {
        return function(a, l) {
          var u = q(a) ? YV : lg, p = n ? n() : {};
          return u(a, t, P(l, 2), p);
        };
      }
      function Br(t) {
        return ne(function(n, a) {
          var l = -1, u = a.length, p = u > 1 ? a[u - 1] : o, w = u > 2 ? a[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (u--, p) : o, w && qe(a[0], a[1], w) && (p = u < 3 ? o : p, u = 1), n = he(n); ++l < u; ) {
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
          for (var u = a.length, p = n ? u : -1, w = he(a); (n ? p-- : ++p < u) && l(w[p], p, w) !== !1; )
            ;
          return a;
        };
      }
      function _f(t) {
        return function(n, a, l) {
          for (var u = -1, p = he(n), w = l(n), v = w.length; v--; ) {
            var y = w[t ? v : ++u];
            if (a(p[y], y, p) === !1)
              break;
          }
          return n;
        };
      }
      function Og(t, n, a) {
        var l = n & C, u = Oo(t);
        function p() {
          var w = this && this !== Oe && this instanceof p ? u : t;
          return w.apply(l ? a : this, arguments);
        }
        return p;
      }
      function If(t) {
        return function(n) {
          n = ce(n);
          var a = Er(n) ? Ot(n) : o, l = a ? a[0] : n.charAt(0), u = a ? Bn(a, 1).join("") : n.slice(1);
          return l[t]() + u;
        };
      }
      function _r(t) {
        return function(n) {
          return nl(Bh(xh(n).replace(JV, "")), t, "");
        };
      }
      function Oo(t) {
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
          return Ue(l) ? l : a;
        };
      }
      function Qg(t, n, a) {
        var l = Oo(t);
        function u() {
          for (var p = arguments.length, w = R(p), v = p, y = Ir(u); v--; )
            w[v] = arguments[v];
          var Z = p < 3 && w[0] !== y && w[p - 1] !== y ? [] : An(w, y);
          if (p -= Z.length, p < a)
            return Gf(
              t,
              n,
              pi,
              u.placeholder,
              o,
              w,
              Z,
              o,
              o,
              a - p
            );
          var S = this && this !== Oe && this instanceof u ? l : t;
          return ut(S, this, w);
        }
        return u;
      }
      function Df(t) {
        return function(n, a, l) {
          var u = he(n);
          if (!nt(n)) {
            var p = P(a, 3);
            n = xe(n), a = function(v) {
              return p(u[v], v, u);
            };
          }
          var w = t(n, a, l);
          return w > -1 ? u[p ? n[w] : w] : o;
        };
      }
      function Of(t) {
        return vn(function(n) {
          var a = n.length, l = a, u = bt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Mt(d);
            if (u && !w && Vi(p) == "wrapper")
              var w = new bt([], !0);
          }
          for (l = w ? l : a; ++l < a; ) {
            p = n[l];
            var v = Vi(p), y = v == "wrapper" ? xl(p) : o;
            y && Dl(y[0]) && y[1] == (I | _ | k | G) && !y[4].length && y[9] == 1 ? w = w[Vi(y[0])].apply(w, y[3]) : w = p.length == 1 && Dl(p) ? w[v]() : w.thru(p);
          }
          return function() {
            var Z = arguments, S = Z[0];
            if (w && Z.length == 1 && q(S))
              return w.plant(S).value();
            for (var J = 0, B = a ? n[J].apply(this, Z) : S; ++J < a; )
              B = n[J].call(this, B);
            return B;
          };
        });
      }
      function pi(t, n, a, l, u, p, w, v, y, Z) {
        var S = n & I, J = n & C, B = n & A, O = n & (_ | Y), H = n & z, ee = B ? o : Oo(t);
        function j() {
          for (var re = arguments.length, ae = R(re), pt = re; pt--; )
            ae[pt] = arguments[pt];
          if (O)
            var Ke = Ir(j), mt = e0(ae, Ke);
          if (l && (ae = Wf(ae, l, u, O)), p && (ae = xf(ae, p, w, O)), re -= mt, O && re < Z) {
            var Me = An(ae, Ke);
            return Gf(
              t,
              n,
              pi,
              j.placeholder,
              a,
              ae,
              Me,
              v,
              y,
              Z - re
            );
          }
          var Gt = J ? a : this, Un = B ? Gt[t] : t;
          return re = ae.length, v ? ae = lT(ae, v) : H && re > 1 && ae.reverse(), S && y < re && (ae.length = y), this && this !== Oe && this instanceof j && (Un = ee || Oo(Un)), Un.apply(Gt, ae);
        }
        return j;
      }
      function Qf(t, n) {
        return function(a, l) {
          return wg(a, t, n(l), {});
        };
      }
      function mi(t, n) {
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
      function Al(t) {
        return vn(function(n) {
          return n = Te(n, dt(P())), ne(function(a) {
            var l = this;
            return t(n, function(u) {
              return ut(u, l, a);
            });
          });
        });
      }
      function wi(t, n) {
        n = n === o ? " " : ft(n);
        var a = n.length;
        if (a < 2)
          return a ? kl(n, t) : n;
        var l = kl(n, ni(t / Jr(n)));
        return Er(n) ? Bn(Ot(l), 0, t).join("") : l.slice(0, t);
      }
      function zg(t, n, a, l) {
        var u = n & C, p = Oo(t);
        function w() {
          for (var v = -1, y = arguments.length, Z = -1, S = l.length, J = R(S + y), B = this && this !== Oe && this instanceof w ? p : t; ++Z < S; )
            J[Z] = l[Z];
          for (; y--; )
            J[Z++] = arguments[++v];
          return ut(B, u ? a : this, J);
        }
        return w;
      }
      function zf(t) {
        return function(n, a, l) {
          return l && typeof l != "number" && qe(n, a, l) && (a = l = o), n = Tn(n), a === o ? (a = n, n = 0) : a = Tn(a), l = l === o ? n < a ? 1 : -1 : Tn(l), Zg(n, a, l, t);
        };
      }
      function vi(t) {
        return function(n, a) {
          return typeof n == "string" && typeof a == "string" || (n = Jt(n), a = Jt(a)), t(n, a);
        };
      }
      function Gf(t, n, a, l, u, p, w, v, y, Z) {
        var S = n & _, J = S ? w : o, B = S ? o : w, O = S ? p : o, H = S ? o : p;
        n |= S ? k : W, n &= ~(S ? W : k), n & x || (n &= ~(C | A));
        var ee = [
          t,
          n,
          u,
          O,
          J,
          H,
          B,
          v,
          y,
          Z
        ], j = a.apply(o, ee);
        return Dl(t) && nh(j, ee), j.placeholder = l, rh(j, t, n);
      }
      function Fl(t) {
        var n = Ae[t];
        return function(a, l) {
          if (a = Jt(a), l = l == null ? 0 : He(K(l), 292), l && nf(a)) {
            var u = (ce(a) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + l));
            return u = (ce(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return n(a);
        };
      }
      var Gg = Cr && 1 / Pa(new Cr([, -0]))[1] == De ? function(t) {
        return new Cr(t);
      } : tc;
      function Yf(t) {
        return function(n) {
          var a = je(n);
          return a == It ? cl(n) : a == Dt ? s0(n) : KV(n, t(n));
        };
      }
      function wn(t, n, a, l, u, p, w, v) {
        var y = n & A;
        if (!y && typeof t != "function")
          throw new Mt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(k | W), l = u = o), w = w === o ? w : Fe(K(w), 0), v = v === o ? v : K(v), Z -= u ? u.length : 0, n & W) {
          var S = l, J = u;
          l = u = o;
        }
        var B = y ? o : xl(t), O = [
          t,
          n,
          a,
          l,
          u,
          S,
          J,
          p,
          w,
          v
        ];
        if (B && aT(O, B), t = O[0], n = O[1], a = O[2], l = O[3], u = O[4], v = O[9] = O[9] === o ? y ? 0 : t.length : Fe(O[9] - Z, 0), !v && n & (_ | Y) && (n &= ~(_ | Y)), !n || n == C)
          var H = Og(t, n, a);
        else
          n == _ || n == Y ? H = Qg(t, n, v) : (n == k || n == (C | k)) && !u.length ? H = zg(t, n, a, l) : H = pi.apply(o, O);
        var ee = B ? kf : nh;
        return rh(ee(H, O), t, n);
      }
      function Pf(t, n, a, l) {
        return t === o || zt(t, Fr[a]) && !ue.call(l, a) ? n : t;
      }
      function Hf(t, n, a, l, u, p) {
        return Ue(t) && Ue(n) && (p.set(n, t), ui(t, n, o, Hf, p), p.delete(n)), t;
      }
      function Yg(t) {
        return Go(t) ? o : t;
      }
      function jf(t, n, a, l, u, p) {
        var w = a & E, v = t.length, y = n.length;
        if (v != y && !(w && y > v))
          return !1;
        var Z = p.get(t), S = p.get(n);
        if (Z && S)
          return Z == n && S == t;
        var J = -1, B = !0, O = a & b ? new nr() : o;
        for (p.set(t, n), p.set(n, t); ++J < v; ) {
          var H = t[J], ee = n[J];
          if (l)
            var j = w ? l(ee, H, J, n, t, p) : l(H, ee, J, t, n, p);
          if (j !== o) {
            if (j)
              continue;
            B = !1;
            break;
          }
          if (O) {
            if (!rl(n, function(re, ae) {
              if (!Eo(O, ae) && (H === re || u(H, re, a, l, p)))
                return O.push(ae);
            })) {
              B = !1;
              break;
            }
          } else if (!(H === ee || u(H, ee, a, l, p))) {
            B = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), B;
      }
      function Pg(t, n, a, l, u, p, w) {
        switch (a) {
          case br:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case So:
            return !(t.byteLength != n.byteLength || !p(new qa(t), new qa(n)));
          case No:
          case Ro:
          case ko:
            return zt(+t, +n);
          case _a:
            return t.name == n.name && t.message == n.message;
          case Mo:
          case bo:
            return t == n + "";
          case It:
            var v = cl;
          case Dt:
            var y = l & E;
            if (v || (v = Pa), t.size != n.size && !y)
              return !1;
            var Z = w.get(t);
            if (Z)
              return Z == n;
            l |= b, w.set(t, n);
            var S = jf(v(t), v(n), l, u, p, w);
            return w.delete(t), S;
          case Da:
            if (Wo)
              return Wo.call(t) == Wo.call(n);
        }
        return !1;
      }
      function Hg(t, n, a, l, u, p) {
        var w = a & E, v = Cl(t), y = v.length, Z = Cl(n), S = Z.length;
        if (y != S && !w)
          return !1;
        for (var J = y; J--; ) {
          var B = v[J];
          if (!(w ? B in n : ue.call(n, B)))
            return !1;
        }
        var O = p.get(t), H = p.get(n);
        if (O && H)
          return O == n && H == t;
        var ee = !0;
        p.set(t, n), p.set(n, t);
        for (var j = w; ++J < y; ) {
          B = v[J];
          var re = t[B], ae = n[B];
          if (l)
            var pt = w ? l(ae, re, B, n, t, p) : l(re, ae, B, t, n, p);
          if (!(pt === o ? re === ae || u(re, ae, a, l, p) : pt)) {
            ee = !1;
            break;
          }
          j || (j = B == "constructor");
        }
        if (ee && !j) {
          var Ke = t.constructor, mt = n.constructor;
          Ke != mt && "constructor" in t && "constructor" in n && !(typeof Ke == "function" && Ke instanceof Ke && typeof mt == "function" && mt instanceof mt) && (ee = !1);
        }
        return p.delete(t), p.delete(n), ee;
      }
      function vn(t) {
        return Ql(eh(t, o, ch), t + "");
      }
      function Cl(t) {
        return pf(t, xe, _l);
      }
      function Wl(t) {
        return pf(t, rt, $f);
      }
      var xl = oi ? function(t) {
        return oi.get(t);
      } : tc;
      function Vi(t) {
        for (var n = t.name + "", a = Wr[n], l = ue.call(Wr, n) ? a.length : 0; l--; ) {
          var u = a[l], p = u.func;
          if (p == null || p == t)
            return u.name;
        }
        return n;
      }
      function Ir(t) {
        var n = ue.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function P() {
        var t = h.iteratee || Kl;
        return t = t === Kl ? vf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function gi(t, n) {
        var a = t.__data__;
        return tT(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
      }
      function Bl(t) {
        for (var n = xe(t), a = n.length; a--; ) {
          var l = n[a], u = t[l];
          n[a] = [l, u, qf(u)];
        }
        return n;
      }
      function ar(t, n) {
        var a = o0(t, n);
        return wf(a) ? a : o;
      }
      function jg(t) {
        var n = ue.call(t, er), a = t[er];
        try {
          t[er] = o;
          var l = !0;
        } catch {
        }
        var u = Xa.call(t);
        return l && (n ? t[er] = a : delete t[er]), u;
      }
      var _l = dl ? function(t) {
        return t == null ? [] : (t = he(t), En(dl(t), function(n) {
          return ef.call(t, n);
        }));
      } : nc, $f = dl ? function(t) {
        for (var n = []; t; )
          Jn(n, _l(t)), t = Ka(t);
        return n;
      } : nc, je = Le;
      (fl && je(new fl(new ArrayBuffer(1))) != br || Ao && je(new Ao()) != It || hl && je(hl.resolve()) != ud || Cr && je(new Cr()) != Dt || Fo && je(new Fo()) != Zo) && (je = function(t) {
        var n = Le(t), a = n == fn ? t.constructor : o, l = a ? ir(a) : "";
        if (l)
          switch (l) {
            case E0:
              return br;
            case J0:
              return It;
            case A0:
              return ud;
            case F0:
              return Dt;
            case C0:
              return Zo;
          }
        return n;
      });
      function $g(t, n, a) {
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
              n = He(n, t + w);
              break;
            case "takeRight":
              t = Fe(t, n - w);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Xg(t) {
        var n = t.match(nV);
        return n ? n[1].split(rV) : [];
      }
      function Xf(t, n, a) {
        n = xn(n, t);
        for (var l = -1, u = n.length, p = !1; ++l < u; ) {
          var w = nn(n[l]);
          if (!(p = t != null && a(t, w)))
            break;
          t = t[w];
        }
        return p || ++l != u ? p : (u = t == null ? 0 : t.length, !!u && Mi(u) && Vn(w, u) && (q(t) || sr(t)));
      }
      function Lg(t) {
        var n = t.length, a = new t.constructor(n);
        return n && typeof t[0] == "string" && ue.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function Lf(t) {
        return typeof t.constructor == "function" && !Qo(t) ? xr(Ka(t)) : {};
      }
      function qg(t, n, a) {
        var l = t.constructor;
        switch (n) {
          case So:
            return Jl(t);
          case No:
          case Ro:
            return new l(+t);
          case br:
            return Wg(t, a);
          case Bs:
          case _s:
          case Is:
          case Ds:
          case Os:
          case Qs:
          case zs:
          case Gs:
          case Ys:
            return Ff(t, a);
          case It:
            return new l();
          case ko:
          case bo:
            return new l(t);
          case Mo:
            return xg(t);
          case Dt:
            return new l();
          case Da:
            return Bg(t);
        }
      }
      function Kg(t, n) {
        var a = n.length;
        if (!a)
          return t;
        var l = a - 1;
        return n[l] = (a > 1 ? "& " : "") + n[l], n = n.join(a > 2 ? ", " : " "), t.replace(tV, `{
/* [wrapped with ` + n + `] */
`);
      }
      function eT(t) {
        return q(t) || sr(t) || !!(tf && t && t[tf]);
      }
      function Vn(t, n) {
        var a = typeof t;
        return n = n == null ? Xe : n, !!n && (a == "number" || a != "symbol" && fV.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function qe(t, n, a) {
        if (!Ue(a))
          return !1;
        var l = typeof n;
        return (l == "number" ? nt(a) && Vn(n, a.length) : l == "string" && n in a) ? zt(a[n], t) : !1;
      }
      function Il(t, n) {
        if (q(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || ht(t) ? !0 : L1.test(t) || !X1.test(t) || n != null && t in he(n);
      }
      function tT(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Dl(t) {
        var n = Vi(t), a = h[n];
        if (typeof a != "function" || !(n in oe.prototype))
          return !1;
        if (t === a)
          return !0;
        var l = xl(a);
        return !!l && t === l[0];
      }
      function nT(t) {
        return !!Ld && Ld in t;
      }
      var rT = ja ? gn : rc;
      function Qo(t) {
        var n = t && t.constructor, a = typeof n == "function" && n.prototype || Fr;
        return t === a;
      }
      function qf(t) {
        return t === t && !Ue(t);
      }
      function Kf(t, n) {
        return function(a) {
          return a == null ? !1 : a[t] === n && (n !== o || t in he(a));
        };
      }
      function oT(t) {
        var n = Ri(t, function(l) {
          return a.size === g && a.clear(), l;
        }), a = n.cache;
        return n;
      }
      function aT(t, n) {
        var a = t[1], l = n[1], u = a | l, p = u < (C | A | I), w = l == I && a == _ || l == I && a == G && t[7].length <= n[8] || l == (I | G) && n[7].length <= n[8] && a == _;
        if (!(p || w))
          return t;
        l & C && (t[2] = n[2], u |= a & C ? 0 : x);
        var v = n[3];
        if (v) {
          var y = t[3];
          t[3] = y ? Wf(y, v, n[4]) : v, t[4] = y ? An(t[3], V) : n[4];
        }
        return v = n[5], v && (y = t[5], t[5] = y ? xf(y, v, n[6]) : v, t[6] = y ? An(t[5], V) : n[6]), v = n[7], v && (t[7] = v), l & I && (t[8] = t[8] == null ? n[8] : He(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = u, t;
      }
      function iT(t) {
        var n = [];
        if (t != null)
          for (var a in he(t))
            n.push(a);
        return n;
      }
      function sT(t) {
        return Xa.call(t);
      }
      function eh(t, n, a) {
        return n = Fe(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, u = -1, p = Fe(l.length - n, 0), w = R(p); ++u < p; )
            w[u] = l[n + u];
          u = -1;
          for (var v = R(n + 1); ++u < n; )
            v[u] = l[u];
          return v[n] = a(w), ut(t, this, v);
        };
      }
      function th(t, n) {
        return n.length < 2 ? t : or(t, St(n, 0, -1));
      }
      function lT(t, n) {
        for (var a = t.length, l = He(n.length, a), u = tt(t); l--; ) {
          var p = n[l];
          t[l] = Vn(p, a) ? u[p] : o;
        }
        return t;
      }
      function Ol(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var nh = oh(kf), zo = N0 || function(t, n) {
        return Oe.setTimeout(t, n);
      }, Ql = oh(Jg);
      function rh(t, n, a) {
        var l = n + "";
        return Ql(t, Kg(l, cT(Xg(l), a)));
      }
      function oh(t) {
        var n = 0, a = 0;
        return function() {
          var l = b0(), u = Re - (l - a);
          if (a = l, u > 0) {
            if (++n >= ye)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function Ti(t, n) {
        var a = -1, l = t.length, u = l - 1;
        for (n = n === o ? l : n; ++a < n; ) {
          var p = Rl(a, u), w = t[p];
          t[p] = t[a], t[a] = w;
        }
        return t.length = n, t;
      }
      var ah = oT(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(q1, function(a, l, u, p) {
          n.push(u ? p.replace(iV, "$1") : l || a);
        }), n;
      });
      function nn(t) {
        if (typeof t == "string" || ht(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -De ? "-0" : n;
      }
      function ir(t) {
        if (t != null) {
          try {
            return $a.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function cT(t, n) {
        return kt(x1, function(a) {
          var l = "_." + a[0];
          n & a[1] && !Ga(t, l) && t.push(l);
        }), t.sort();
      }
      function ih(t) {
        if (t instanceof oe)
          return t.clone();
        var n = new bt(t.__wrapped__, t.__chain__);
        return n.__actions__ = tt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function uT(t, n, a) {
        (a ? qe(t, n, a) : n === o) ? n = 1 : n = Fe(K(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var u = 0, p = 0, w = R(ni(l / n)); u < l; )
          w[p++] = St(t, u, u += n);
        return w;
      }
      function dT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = 0, u = []; ++n < a; ) {
          var p = t[n];
          p && (u[l++] = p);
        }
        return u;
      }
      function fT() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = R(t - 1), a = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Jn(q(a) ? tt(a) : [a], Qe(n, 1));
      }
      var hT = ne(function(t, n) {
        return ke(t) ? Bo(t, Qe(n, 1, ke, !0)) : [];
      }), pT = ne(function(t, n) {
        var a = Et(n);
        return ke(a) && (a = o), ke(t) ? Bo(t, Qe(n, 1, ke, !0), P(a, 2)) : [];
      }), mT = ne(function(t, n) {
        var a = Et(n);
        return ke(a) && (a = o), ke(t) ? Bo(t, Qe(n, 1, ke, !0), o, a) : [];
      });
      function wT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : K(n), St(t, n < 0 ? 0 : n, l)) : [];
      }
      function vT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : K(n), n = l - n, St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function VT(t, n) {
        return t && t.length ? fi(t, P(n, 3), !0, !0) : [];
      }
      function gT(t, n) {
        return t && t.length ? fi(t, P(n, 3), !0) : [];
      }
      function TT(t, n, a, l) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && qe(t, n, a) && (a = 0, l = u), fg(t, n, a, l)) : [];
      }
      function sh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : K(a);
        return u < 0 && (u = Fe(l + u, 0)), Ya(t, P(n, 3), u);
      }
      function lh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l - 1;
        return a !== o && (u = K(a), u = a < 0 ? Fe(l + u, 0) : He(u, l - 1)), Ya(t, P(n, 3), u, !0);
      }
      function ch(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, 1) : [];
      }
      function UT(t) {
        var n = t == null ? 0 : t.length;
        return n ? Qe(t, De) : [];
      }
      function yT(t, n) {
        var a = t == null ? 0 : t.length;
        return a ? (n = n === o ? 1 : K(n), Qe(t, n)) : [];
      }
      function NT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = {}; ++n < a; ) {
          var u = t[n];
          l[u[0]] = u[1];
        }
        return l;
      }
      function uh(t) {
        return t && t.length ? t[0] : o;
      }
      function RT(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : K(a);
        return u < 0 && (u = Fe(l + u, 0)), Sr(t, n, u);
      }
      function kT(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 0, -1) : [];
      }
      var MT = ne(function(t) {
        var n = Te(t, Sl);
        return n.length && n[0] === t[0] ? gl(n) : [];
      }), bT = ne(function(t) {
        var n = Et(t), a = Te(t, Sl);
        return n === Et(a) ? n = o : a.pop(), a.length && a[0] === t[0] ? gl(a, P(n, 2)) : [];
      }), ZT = ne(function(t) {
        var n = Et(t), a = Te(t, Sl);
        return n = typeof n == "function" ? n : o, n && a.pop(), a.length && a[0] === t[0] ? gl(a, o, n) : [];
      });
      function ST(t, n) {
        return t == null ? "" : k0.call(t, n);
      }
      function Et(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function ET(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l;
        return a !== o && (u = K(a), u = u < 0 ? Fe(l + u, 0) : He(u, l - 1)), n === n ? c0(t, n, u) : Ya(t, zd, u, !0);
      }
      function JT(t, n) {
        return t && t.length ? Uf(t, K(n)) : o;
      }
      var AT = ne(dh);
      function dh(t, n) {
        return t && t.length && n && n.length ? Nl(t, n) : t;
      }
      function FT(t, n, a) {
        return t && t.length && n && n.length ? Nl(t, n, P(a, 2)) : t;
      }
      function CT(t, n, a) {
        return t && t.length && n && n.length ? Nl(t, n, o, a) : t;
      }
      var WT = vn(function(t, n) {
        var a = t == null ? 0 : t.length, l = ml(t, n);
        return Rf(t, Te(n, function(u) {
          return Vn(u, a) ? +u : u;
        }).sort(Cf)), l;
      });
      function xT(t, n) {
        var a = [];
        if (!(t && t.length))
          return a;
        var l = -1, u = [], p = t.length;
        for (n = P(n, 3); ++l < p; ) {
          var w = t[l];
          n(w, l, t) && (a.push(w), u.push(l));
        }
        return Rf(t, u), a;
      }
      function zl(t) {
        return t == null ? t : S0.call(t);
      }
      function BT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (a && typeof a != "number" && qe(t, n, a) ? (n = 0, a = l) : (n = n == null ? 0 : K(n), a = a === o ? l : K(a)), St(t, n, a)) : [];
      }
      function _T(t, n) {
        return di(t, n);
      }
      function IT(t, n, a) {
        return Ml(t, n, P(a, 2));
      }
      function DT(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = di(t, n);
          if (l < a && zt(t[l], n))
            return l;
        }
        return -1;
      }
      function OT(t, n) {
        return di(t, n, !0);
      }
      function QT(t, n, a) {
        return Ml(t, n, P(a, 2), !0);
      }
      function zT(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = di(t, n, !0) - 1;
          if (zt(t[l], n))
            return l;
        }
        return -1;
      }
      function GT(t) {
        return t && t.length ? Mf(t) : [];
      }
      function YT(t, n) {
        return t && t.length ? Mf(t, P(n, 2)) : [];
      }
      function PT(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 1, n) : [];
      }
      function HT(t, n, a) {
        return t && t.length ? (n = a || n === o ? 1 : K(n), St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function jT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : K(n), n = l - n, St(t, n < 0 ? 0 : n, l)) : [];
      }
      function $T(t, n) {
        return t && t.length ? fi(t, P(n, 3), !1, !0) : [];
      }
      function XT(t, n) {
        return t && t.length ? fi(t, P(n, 3)) : [];
      }
      var LT = ne(function(t) {
        return Wn(Qe(t, 1, ke, !0));
      }), qT = ne(function(t) {
        var n = Et(t);
        return ke(n) && (n = o), Wn(Qe(t, 1, ke, !0), P(n, 2));
      }), KT = ne(function(t) {
        var n = Et(t);
        return n = typeof n == "function" ? n : o, Wn(Qe(t, 1, ke, !0), o, n);
      });
      function eU(t) {
        return t && t.length ? Wn(t) : [];
      }
      function tU(t, n) {
        return t && t.length ? Wn(t, P(n, 2)) : [];
      }
      function nU(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? Wn(t, o, n) : [];
      }
      function Gl(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = En(t, function(a) {
          if (ke(a))
            return n = Fe(a.length, n), !0;
        }), sl(n, function(a) {
          return Te(t, ol(a));
        });
      }
      function fh(t, n) {
        if (!(t && t.length))
          return [];
        var a = Gl(t);
        return n == null ? a : Te(a, function(l) {
          return ut(n, o, l);
        });
      }
      var rU = ne(function(t, n) {
        return ke(t) ? Bo(t, n) : [];
      }), oU = ne(function(t) {
        return Zl(En(t, ke));
      }), aU = ne(function(t) {
        var n = Et(t);
        return ke(n) && (n = o), Zl(En(t, ke), P(n, 2));
      }), iU = ne(function(t) {
        var n = Et(t);
        return n = typeof n == "function" ? n : o, Zl(En(t, ke), o, n);
      }), sU = ne(Gl);
      function lU(t, n) {
        return Ef(t || [], n || [], xo);
      }
      function cU(t, n) {
        return Ef(t || [], n || [], Do);
      }
      var uU = ne(function(t) {
        var n = t.length, a = n > 1 ? t[n - 1] : o;
        return a = typeof a == "function" ? (t.pop(), a) : o, fh(t, a);
      });
      function hh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function dU(t, n) {
        return n(t), t;
      }
      function Ui(t, n) {
        return n(t);
      }
      var fU = vn(function(t) {
        var n = t.length, a = n ? t[0] : 0, l = this.__wrapped__, u = function(p) {
          return ml(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof oe) || !Vn(a) ? this.thru(u) : (l = l.slice(a, +a + (n ? 1 : 0)), l.__actions__.push({
          func: Ui,
          args: [u],
          thisArg: o
        }), new bt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function hU() {
        return hh(this);
      }
      function pU() {
        return new bt(this.value(), this.__chain__);
      }
      function mU() {
        this.__values__ === o && (this.__values__ = bh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function wU() {
        return this;
      }
      function vU(t) {
        for (var n, a = this; a instanceof ii; ) {
          var l = ih(a);
          l.__index__ = 0, l.__values__ = o, n ? u.__wrapped__ = l : n = l;
          var u = l;
          a = a.__wrapped__;
        }
        return u.__wrapped__ = t, n;
      }
      function VU() {
        var t = this.__wrapped__;
        if (t instanceof oe) {
          var n = t;
          return this.__actions__.length && (n = new oe(this)), n = n.reverse(), n.__actions__.push({
            func: Ui,
            args: [zl],
            thisArg: o
          }), new bt(n, this.__chain__);
        }
        return this.thru(zl);
      }
      function gU() {
        return Sf(this.__wrapped__, this.__actions__);
      }
      var TU = hi(function(t, n, a) {
        ue.call(t, a) ? ++t[a] : mn(t, a, 1);
      });
      function UU(t, n, a) {
        var l = q(t) ? Od : dg;
        return a && qe(t, n, a) && (n = o), l(t, P(n, 3));
      }
      function yU(t, n) {
        var a = q(t) ? En : ff;
        return a(t, P(n, 3));
      }
      var NU = Df(sh), RU = Df(lh);
      function kU(t, n) {
        return Qe(yi(t, n), 1);
      }
      function MU(t, n) {
        return Qe(yi(t, n), De);
      }
      function bU(t, n, a) {
        return a = a === o ? 1 : K(a), Qe(yi(t, n), a);
      }
      function ph(t, n) {
        var a = q(t) ? kt : Cn;
        return a(t, P(n, 3));
      }
      function mh(t, n) {
        var a = q(t) ? PV : df;
        return a(t, P(n, 3));
      }
      var ZU = hi(function(t, n, a) {
        ue.call(t, a) ? t[a].push(n) : mn(t, a, [n]);
      });
      function SU(t, n, a, l) {
        t = nt(t) ? t : Or(t), a = a && !l ? K(a) : 0;
        var u = t.length;
        return a < 0 && (a = Fe(u + a, 0)), bi(t) ? a <= u && t.indexOf(n, a) > -1 : !!u && Sr(t, n, a) > -1;
      }
      var EU = ne(function(t, n, a) {
        var l = -1, u = typeof n == "function", p = nt(t) ? R(t.length) : [];
        return Cn(t, function(w) {
          p[++l] = u ? ut(n, w, a) : _o(w, n, a);
        }), p;
      }), JU = hi(function(t, n, a) {
        mn(t, a, n);
      });
      function yi(t, n) {
        var a = q(t) ? Te : Vf;
        return a(t, P(n, 3));
      }
      function AU(t, n, a, l) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), a = l ? o : a, q(a) || (a = a == null ? [] : [a]), yf(t, n, a));
      }
      var FU = hi(function(t, n, a) {
        t[a ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function CU(t, n, a) {
        var l = q(t) ? nl : Yd, u = arguments.length < 3;
        return l(t, P(n, 4), a, u, Cn);
      }
      function WU(t, n, a) {
        var l = q(t) ? HV : Yd, u = arguments.length < 3;
        return l(t, P(n, 4), a, u, df);
      }
      function xU(t, n) {
        var a = q(t) ? En : ff;
        return a(t, ki(P(n, 3)));
      }
      function BU(t) {
        var n = q(t) ? sf : Sg;
        return n(t);
      }
      function _U(t, n, a) {
        (a ? qe(t, n, a) : n === o) ? n = 1 : n = K(n);
        var l = q(t) ? ig : Eg;
        return l(t, n);
      }
      function IU(t) {
        var n = q(t) ? sg : Ag;
        return n(t);
      }
      function DU(t) {
        if (t == null)
          return 0;
        if (nt(t))
          return bi(t) ? Jr(t) : t.length;
        var n = je(t);
        return n == It || n == Dt ? t.size : Ul(t).length;
      }
      function OU(t, n, a) {
        var l = q(t) ? rl : Fg;
        return a && qe(t, n, a) && (n = o), l(t, P(n, 3));
      }
      var QU = ne(function(t, n) {
        if (t == null)
          return [];
        var a = n.length;
        return a > 1 && qe(t, n[0], n[1]) ? n = [] : a > 2 && qe(n[0], n[1], n[2]) && (n = [n[0]]), yf(t, Qe(n, 1), []);
      }), Ni = y0 || function() {
        return Oe.Date.now();
      };
      function zU(t, n) {
        if (typeof n != "function")
          throw new Mt(d);
        return t = K(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function wh(t, n, a) {
        return n = a ? o : n, n = t && n == null ? t.length : n, wn(t, I, o, o, o, o, n);
      }
      function vh(t, n) {
        var a;
        if (typeof n != "function")
          throw new Mt(d);
        return t = K(t), function() {
          return --t > 0 && (a = n.apply(this, arguments)), t <= 1 && (n = o), a;
        };
      }
      var Yl = ne(function(t, n, a) {
        var l = C;
        if (a.length) {
          var u = An(a, Ir(Yl));
          l |= k;
        }
        return wn(t, l, n, a, u);
      }), Vh = ne(function(t, n, a) {
        var l = C | A;
        if (a.length) {
          var u = An(a, Ir(Vh));
          l |= k;
        }
        return wn(n, l, t, a, u);
      });
      function gh(t, n, a) {
        n = a ? o : n;
        var l = wn(t, _, o, o, o, o, o, n);
        return l.placeholder = gh.placeholder, l;
      }
      function Th(t, n, a) {
        n = a ? o : n;
        var l = wn(t, Y, o, o, o, o, o, n);
        return l.placeholder = Th.placeholder, l;
      }
      function Uh(t, n, a) {
        var l, u, p, w, v, y, Z = 0, S = !1, J = !1, B = !0;
        if (typeof t != "function")
          throw new Mt(d);
        n = Jt(n) || 0, Ue(a) && (S = !!a.leading, J = "maxWait" in a, p = J ? Fe(Jt(a.maxWait) || 0, n) : p, B = "trailing" in a ? !!a.trailing : B);
        function O(Me) {
          var Gt = l, Un = u;
          return l = u = o, Z = Me, w = t.apply(Un, Gt), w;
        }
        function H(Me) {
          return Z = Me, v = zo(re, n), S ? O(Me) : w;
        }
        function ee(Me) {
          var Gt = Me - y, Un = Me - Z, Dh = n - Gt;
          return J ? He(Dh, p - Un) : Dh;
        }
        function j(Me) {
          var Gt = Me - y, Un = Me - Z;
          return y === o || Gt >= n || Gt < 0 || J && Un >= p;
        }
        function re() {
          var Me = Ni();
          if (j(Me))
            return ae(Me);
          v = zo(re, ee(Me));
        }
        function ae(Me) {
          return v = o, B && l ? O(Me) : (l = u = o, w);
        }
        function pt() {
          v !== o && Jf(v), Z = 0, l = y = u = v = o;
        }
        function Ke() {
          return v === o ? w : ae(Ni());
        }
        function mt() {
          var Me = Ni(), Gt = j(Me);
          if (l = arguments, u = this, y = Me, Gt) {
            if (v === o)
              return H(y);
            if (J)
              return Jf(v), v = zo(re, n), O(y);
          }
          return v === o && (v = zo(re, n)), w;
        }
        return mt.cancel = pt, mt.flush = Ke, mt;
      }
      var GU = ne(function(t, n) {
        return uf(t, 1, n);
      }), YU = ne(function(t, n, a) {
        return uf(t, Jt(n) || 0, a);
      });
      function PU(t) {
        return wn(t, z);
      }
      function Ri(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Mt(d);
        var a = function() {
          var l = arguments, u = n ? n.apply(this, l) : l[0], p = a.cache;
          if (p.has(u))
            return p.get(u);
          var w = t.apply(this, l);
          return a.cache = p.set(u, w) || p, w;
        };
        return a.cache = new (Ri.Cache || pn)(), a;
      }
      Ri.Cache = pn;
      function ki(t) {
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
      function HU(t) {
        return vh(2, t);
      }
      var jU = Cg(function(t, n) {
        n = n.length == 1 && q(n[0]) ? Te(n[0], dt(P())) : Te(Qe(n, 1), dt(P()));
        var a = n.length;
        return ne(function(l) {
          for (var u = -1, p = He(l.length, a); ++u < p; )
            l[u] = n[u].call(this, l[u]);
          return ut(t, this, l);
        });
      }), Pl = ne(function(t, n) {
        var a = An(n, Ir(Pl));
        return wn(t, k, o, n, a);
      }), yh = ne(function(t, n) {
        var a = An(n, Ir(yh));
        return wn(t, W, o, n, a);
      }), $U = vn(function(t, n) {
        return wn(t, G, o, o, o, n);
      });
      function XU(t, n) {
        if (typeof t != "function")
          throw new Mt(d);
        return n = n === o ? n : K(n), ne(t, n);
      }
      function LU(t, n) {
        if (typeof t != "function")
          throw new Mt(d);
        return n = n == null ? 0 : Fe(K(n), 0), ne(function(a) {
          var l = a[n], u = Bn(a, 0, n);
          return l && Jn(u, l), ut(t, this, u);
        });
      }
      function qU(t, n, a) {
        var l = !0, u = !0;
        if (typeof t != "function")
          throw new Mt(d);
        return Ue(a) && (l = "leading" in a ? !!a.leading : l, u = "trailing" in a ? !!a.trailing : u), Uh(t, n, {
          leading: l,
          maxWait: n,
          trailing: u
        });
      }
      function KU(t) {
        return wh(t, 1);
      }
      function ey(t, n) {
        return Pl(El(n), t);
      }
      function ty() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function ny(t) {
        return Zt(t, F);
      }
      function ry(t, n) {
        return n = typeof n == "function" ? n : o, Zt(t, F, n);
      }
      function oy(t) {
        return Zt(t, U | F);
      }
      function ay(t, n) {
        return n = typeof n == "function" ? n : o, Zt(t, U | F, n);
      }
      function iy(t, n) {
        return n == null || cf(t, n, xe(n));
      }
      function zt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var sy = vi(Vl), ly = vi(function(t, n) {
        return t >= n;
      }), sr = mf(function() {
        return arguments;
      }()) ? mf : function(t) {
        return Ne(t) && ue.call(t, "callee") && !ef.call(t, "callee");
      }, q = R.isArray, cy = Wd ? dt(Wd) : vg;
      function nt(t) {
        return t != null && Mi(t.length) && !gn(t);
      }
      function ke(t) {
        return Ne(t) && nt(t);
      }
      function uy(t) {
        return t === !0 || t === !1 || Ne(t) && Le(t) == No;
      }
      var _n = R0 || rc, dy = xd ? dt(xd) : Vg;
      function fy(t) {
        return Ne(t) && t.nodeType === 1 && !Go(t);
      }
      function hy(t) {
        if (t == null)
          return !0;
        if (nt(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || _n(t) || Dr(t) || sr(t)))
          return !t.length;
        var n = je(t);
        if (n == It || n == Dt)
          return !t.size;
        if (Qo(t))
          return !Ul(t).length;
        for (var a in t)
          if (ue.call(t, a))
            return !1;
        return !0;
      }
      function py(t, n) {
        return Io(t, n);
      }
      function my(t, n, a) {
        a = typeof a == "function" ? a : o;
        var l = a ? a(t, n) : o;
        return l === o ? Io(t, n, o, a) : !!l;
      }
      function Hl(t) {
        if (!Ne(t))
          return !1;
        var n = Le(t);
        return n == _a || n == _1 || typeof t.message == "string" && typeof t.name == "string" && !Go(t);
      }
      function wy(t) {
        return typeof t == "number" && nf(t);
      }
      function gn(t) {
        if (!Ue(t))
          return !1;
        var n = Le(t);
        return n == Ia || n == cd || n == B1 || n == D1;
      }
      function Nh(t) {
        return typeof t == "number" && t == K(t);
      }
      function Mi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Xe;
      }
      function Ue(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ne(t) {
        return t != null && typeof t == "object";
      }
      var Rh = Bd ? dt(Bd) : Tg;
      function vy(t, n) {
        return t === n || Tl(t, n, Bl(n));
      }
      function Vy(t, n, a) {
        return a = typeof a == "function" ? a : o, Tl(t, n, Bl(n), a);
      }
      function gy(t) {
        return kh(t) && t != +t;
      }
      function Ty(t) {
        if (rT(t))
          throw new X(c);
        return wf(t);
      }
      function Uy(t) {
        return t === null;
      }
      function yy(t) {
        return t == null;
      }
      function kh(t) {
        return typeof t == "number" || Ne(t) && Le(t) == ko;
      }
      function Go(t) {
        if (!Ne(t) || Le(t) != fn)
          return !1;
        var n = Ka(t);
        if (n === null)
          return !0;
        var a = ue.call(n, "constructor") && n.constructor;
        return typeof a == "function" && a instanceof a && $a.call(a) == V0;
      }
      var jl = _d ? dt(_d) : Ug;
      function Ny(t) {
        return Nh(t) && t >= -Xe && t <= Xe;
      }
      var Mh = Id ? dt(Id) : yg;
      function bi(t) {
        return typeof t == "string" || !q(t) && Ne(t) && Le(t) == bo;
      }
      function ht(t) {
        return typeof t == "symbol" || Ne(t) && Le(t) == Da;
      }
      var Dr = Dd ? dt(Dd) : Ng;
      function Ry(t) {
        return t === o;
      }
      function ky(t) {
        return Ne(t) && je(t) == Zo;
      }
      function My(t) {
        return Ne(t) && Le(t) == Q1;
      }
      var by = vi(yl), Zy = vi(function(t, n) {
        return t <= n;
      });
      function bh(t) {
        if (!t)
          return [];
        if (nt(t))
          return bi(t) ? Ot(t) : tt(t);
        if (Jo && t[Jo])
          return i0(t[Jo]());
        var n = je(t), a = n == It ? cl : n == Dt ? Pa : Or;
        return a(t);
      }
      function Tn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Jt(t), t === De || t === -De) {
          var n = t < 0 ? -1 : 1;
          return n * yo;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var n = Tn(t), a = n % 1;
        return n === n ? a ? n - a : n : 0;
      }
      function Zh(t) {
        return t ? rr(K(t), 0, Kt) : 0;
      }
      function Jt(t) {
        if (typeof t == "number")
          return t;
        if (ht(t))
          return xa;
        if (Ue(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ue(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Pd(t);
        var a = cV.test(t);
        return a || dV.test(t) ? zV(t.slice(2), a ? 2 : 8) : lV.test(t) ? xa : +t;
      }
      function Sh(t) {
        return tn(t, rt(t));
      }
      function Sy(t) {
        return t ? rr(K(t), -Xe, Xe) : t === 0 ? t : 0;
      }
      function ce(t) {
        return t == null ? "" : ft(t);
      }
      var Ey = Br(function(t, n) {
        if (Qo(n) || nt(n)) {
          tn(n, xe(n), t);
          return;
        }
        for (var a in n)
          ue.call(n, a) && xo(t, a, n[a]);
      }), Eh = Br(function(t, n) {
        tn(n, rt(n), t);
      }), Zi = Br(function(t, n, a, l) {
        tn(n, rt(n), t, l);
      }), Jy = Br(function(t, n, a, l) {
        tn(n, xe(n), t, l);
      }), Ay = vn(ml);
      function Fy(t, n) {
        var a = xr(t);
        return n == null ? a : lf(a, n);
      }
      var Cy = ne(function(t, n) {
        t = he(t);
        var a = -1, l = n.length, u = l > 2 ? n[2] : o;
        for (u && qe(n[0], n[1], u) && (l = 1); ++a < l; )
          for (var p = n[a], w = rt(p), v = -1, y = w.length; ++v < y; ) {
            var Z = w[v], S = t[Z];
            (S === o || zt(S, Fr[Z]) && !ue.call(t, Z)) && (t[Z] = p[Z]);
          }
        return t;
      }), Wy = ne(function(t) {
        return t.push(o, Hf), ut(Jh, o, t);
      });
      function xy(t, n) {
        return Qd(t, P(n, 3), en);
      }
      function By(t, n) {
        return Qd(t, P(n, 3), vl);
      }
      function _y(t, n) {
        return t == null ? t : wl(t, P(n, 3), rt);
      }
      function Iy(t, n) {
        return t == null ? t : hf(t, P(n, 3), rt);
      }
      function Dy(t, n) {
        return t && en(t, P(n, 3));
      }
      function Oy(t, n) {
        return t && vl(t, P(n, 3));
      }
      function Qy(t) {
        return t == null ? [] : ci(t, xe(t));
      }
      function zy(t) {
        return t == null ? [] : ci(t, rt(t));
      }
      function $l(t, n, a) {
        var l = t == null ? o : or(t, n);
        return l === o ? a : l;
      }
      function Gy(t, n) {
        return t != null && Xf(t, n, hg);
      }
      function Xl(t, n) {
        return t != null && Xf(t, n, pg);
      }
      var Yy = Qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = Xa.call(n)), t[n] = a;
      }, ql(ot)), Py = Qf(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = Xa.call(n)), ue.call(t, n) ? t[n].push(a) : t[n] = [a];
      }, P), Hy = ne(_o);
      function xe(t) {
        return nt(t) ? af(t) : Ul(t);
      }
      function rt(t) {
        return nt(t) ? af(t, !0) : Rg(t);
      }
      function jy(t, n) {
        var a = {};
        return n = P(n, 3), en(t, function(l, u, p) {
          mn(a, n(l, u, p), l);
        }), a;
      }
      function $y(t, n) {
        var a = {};
        return n = P(n, 3), en(t, function(l, u, p) {
          mn(a, u, n(l, u, p));
        }), a;
      }
      var Xy = Br(function(t, n, a) {
        ui(t, n, a);
      }), Jh = Br(function(t, n, a, l) {
        ui(t, n, a, l);
      }), Ly = vn(function(t, n) {
        var a = {};
        if (t == null)
          return a;
        var l = !1;
        n = Te(n, function(p) {
          return p = xn(p, t), l || (l = p.length > 1), p;
        }), tn(t, Wl(t), a), l && (a = Zt(a, U | N | F, Yg));
        for (var u = n.length; u--; )
          bl(a, n[u]);
        return a;
      });
      function qy(t, n) {
        return Ah(t, ki(P(n)));
      }
      var Ky = vn(function(t, n) {
        return t == null ? {} : Mg(t, n);
      });
      function Ah(t, n) {
        if (t == null)
          return {};
        var a = Te(Wl(t), function(l) {
          return [l];
        });
        return n = P(n), Nf(t, a, function(l, u) {
          return n(l, u[0]);
        });
      }
      function eN(t, n, a) {
        n = xn(n, t);
        var l = -1, u = n.length;
        for (u || (u = 1, t = o); ++l < u; ) {
          var p = t == null ? o : t[nn(n[l])];
          p === o && (l = u, p = a), t = gn(p) ? p.call(t) : p;
        }
        return t;
      }
      function tN(t, n, a) {
        return t == null ? t : Do(t, n, a);
      }
      function nN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Do(t, n, a, l);
      }
      var Fh = Yf(xe), Ch = Yf(rt);
      function rN(t, n, a) {
        var l = q(t), u = l || _n(t) || Dr(t);
        if (n = P(n, 4), a == null) {
          var p = t && t.constructor;
          u ? a = l ? new p() : [] : Ue(t) ? a = gn(p) ? xr(Ka(t)) : {} : a = {};
        }
        return (u ? kt : en)(t, function(w, v, y) {
          return n(a, w, v, y);
        }), a;
      }
      function oN(t, n) {
        return t == null ? !0 : bl(t, n);
      }
      function aN(t, n, a) {
        return t == null ? t : Zf(t, n, El(a));
      }
      function iN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Zf(t, n, El(a), l);
      }
      function Or(t) {
        return t == null ? [] : ll(t, xe(t));
      }
      function sN(t) {
        return t == null ? [] : ll(t, rt(t));
      }
      function lN(t, n, a) {
        return a === o && (a = n, n = o), a !== o && (a = Jt(a), a = a === a ? a : 0), n !== o && (n = Jt(n), n = n === n ? n : 0), rr(Jt(t), n, a);
      }
      function cN(t, n, a) {
        return n = Tn(n), a === o ? (a = n, n = 0) : a = Tn(a), t = Jt(t), mg(t, n, a);
      }
      function uN(t, n, a) {
        if (a && typeof a != "boolean" && qe(t, n, a) && (n = a = o), a === o && (typeof n == "boolean" ? (a = n, n = o) : typeof t == "boolean" && (a = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Tn(t), n === o ? (n = t, t = 0) : n = Tn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (a || t % 1 || n % 1) {
          var u = rf();
          return He(t + u * (n - t + QV("1e-" + ((u + "").length - 1))), n);
        }
        return Rl(t, n);
      }
      var dN = _r(function(t, n, a) {
        return n = n.toLowerCase(), t + (a ? Wh(n) : n);
      });
      function Wh(t) {
        return Ll(ce(t).toLowerCase());
      }
      function xh(t) {
        return t = ce(t), t && t.replace(hV, t0).replace(AV, "");
      }
      function fN(t, n, a) {
        t = ce(t), n = ft(n);
        var l = t.length;
        a = a === o ? l : rr(K(a), 0, l);
        var u = a;
        return a -= n.length, a >= 0 && t.slice(a, u) == n;
      }
      function hN(t) {
        return t = ce(t), t && H1.test(t) ? t.replace(fd, n0) : t;
      }
      function pN(t) {
        return t = ce(t), t && K1.test(t) ? t.replace(Ps, "\\$&") : t;
      }
      var mN = _r(function(t, n, a) {
        return t + (a ? "-" : "") + n.toLowerCase();
      }), wN = _r(function(t, n, a) {
        return t + (a ? " " : "") + n.toLowerCase();
      }), vN = If("toLowerCase");
      function VN(t, n, a) {
        t = ce(t), n = K(n);
        var l = n ? Jr(t) : 0;
        if (!n || l >= n)
          return t;
        var u = (n - l) / 2;
        return wi(ri(u), a) + t + wi(ni(u), a);
      }
      function gN(t, n, a) {
        t = ce(t), n = K(n);
        var l = n ? Jr(t) : 0;
        return n && l < n ? t + wi(n - l, a) : t;
      }
      function TN(t, n, a) {
        t = ce(t), n = K(n);
        var l = n ? Jr(t) : 0;
        return n && l < n ? wi(n - l, a) + t : t;
      }
      function UN(t, n, a) {
        return a || n == null ? n = 0 : n && (n = +n), Z0(ce(t).replace(Hs, ""), n || 0);
      }
      function yN(t, n, a) {
        return (a ? qe(t, n, a) : n === o) ? n = 1 : n = K(n), kl(ce(t), n);
      }
      function NN() {
        var t = arguments, n = ce(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var RN = _r(function(t, n, a) {
        return t + (a ? "_" : "") + n.toLowerCase();
      });
      function kN(t, n, a) {
        return a && typeof a != "number" && qe(t, n, a) && (n = a = o), a = a === o ? Kt : a >>> 0, a ? (t = ce(t), t && (typeof n == "string" || n != null && !jl(n)) && (n = ft(n), !n && Er(t)) ? Bn(Ot(t), 0, a) : t.split(n, a)) : [];
      }
      var MN = _r(function(t, n, a) {
        return t + (a ? " " : "") + Ll(n);
      });
      function bN(t, n, a) {
        return t = ce(t), a = a == null ? 0 : rr(K(a), 0, t.length), n = ft(n), t.slice(a, a + n.length) == n;
      }
      function ZN(t, n, a) {
        var l = h.templateSettings;
        a && qe(t, n, a) && (n = o), t = ce(t), n = Zi({}, n, l, Pf);
        var u = Zi({}, n.imports, l.imports, Pf), p = xe(u), w = ll(u, p), v, y, Z = 0, S = n.interpolate || Oa, J = "__p += '", B = ul(
          (n.escape || Oa).source + "|" + S.source + "|" + (S === hd ? sV : Oa).source + "|" + (n.evaluate || Oa).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (ue.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++BV + "]") + `
`;
        t.replace(B, function(j, re, ae, pt, Ke, mt) {
          return ae || (ae = pt), J += t.slice(Z, mt).replace(pV, r0), re && (v = !0, J += `' +
__e(` + re + `) +
'`), Ke && (y = !0, J += `';
` + Ke + `;
__p += '`), ae && (J += `' +
((__t = (` + ae + `)) == null ? '' : __t) +
'`), Z = mt + j.length, j;
        }), J += `';
`;
        var H = ue.call(n, "variable") && n.variable;
        if (!H)
          J = `with (obj) {
` + J + `
}
`;
        else if (aV.test(H))
          throw new X(f);
        J = (y ? J.replace(z1, "") : J).replace(G1, "$1").replace(Y1, "$1;"), J = "function(" + (H || "obj") + `) {
` + (H ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var ee = _h(function() {
          return se(p, O + "return " + J).apply(o, w);
        });
        if (ee.source = J, Hl(ee))
          throw ee;
        return ee;
      }
      function SN(t) {
        return ce(t).toLowerCase();
      }
      function EN(t) {
        return ce(t).toUpperCase();
      }
      function JN(t, n, a) {
        if (t = ce(t), t && (a || n === o))
          return Pd(t);
        if (!t || !(n = ft(n)))
          return t;
        var l = Ot(t), u = Ot(n), p = Hd(l, u), w = jd(l, u) + 1;
        return Bn(l, p, w).join("");
      }
      function AN(t, n, a) {
        if (t = ce(t), t && (a || n === o))
          return t.slice(0, Xd(t) + 1);
        if (!t || !(n = ft(n)))
          return t;
        var l = Ot(t), u = jd(l, Ot(n)) + 1;
        return Bn(l, 0, u).join("");
      }
      function FN(t, n, a) {
        if (t = ce(t), t && (a || n === o))
          return t.replace(Hs, "");
        if (!t || !(n = ft(n)))
          return t;
        var l = Ot(t), u = Hd(l, Ot(n));
        return Bn(l, u).join("");
      }
      function CN(t, n) {
        var a = Q, l = L;
        if (Ue(n)) {
          var u = "separator" in n ? n.separator : u;
          a = "length" in n ? K(n.length) : a, l = "omission" in n ? ft(n.omission) : l;
        }
        t = ce(t);
        var p = t.length;
        if (Er(t)) {
          var w = Ot(t);
          p = w.length;
        }
        if (a >= p)
          return t;
        var v = a - Jr(l);
        if (v < 1)
          return l;
        var y = w ? Bn(w, 0, v).join("") : t.slice(0, v);
        if (u === o)
          return y + l;
        if (w && (v += y.length - v), jl(u)) {
          if (t.slice(v).search(u)) {
            var Z, S = y;
            for (u.global || (u = ul(u.source, ce(pd.exec(u)) + "g")), u.lastIndex = 0; Z = u.exec(S); )
              var J = Z.index;
            y = y.slice(0, J === o ? v : J);
          }
        } else if (t.indexOf(ft(u), v) != v) {
          var B = y.lastIndexOf(u);
          B > -1 && (y = y.slice(0, B));
        }
        return y + l;
      }
      function WN(t) {
        return t = ce(t), t && P1.test(t) ? t.replace(dd, u0) : t;
      }
      var xN = _r(function(t, n, a) {
        return t + (a ? " " : "") + n.toUpperCase();
      }), Ll = If("toUpperCase");
      function Bh(t, n, a) {
        return t = ce(t), n = a ? o : n, n === o ? a0(t) ? h0(t) : XV(t) : t.match(n) || [];
      }
      var _h = ne(function(t, n) {
        try {
          return ut(t, o, n);
        } catch (a) {
          return Hl(a) ? a : new X(a);
        }
      }), BN = vn(function(t, n) {
        return kt(n, function(a) {
          a = nn(a), mn(t, a, Yl(t[a], t));
        }), t;
      });
      function _N(t) {
        var n = t == null ? 0 : t.length, a = P();
        return t = n ? Te(t, function(l) {
          if (typeof l[1] != "function")
            throw new Mt(d);
          return [a(l[0]), l[1]];
        }) : [], ne(function(l) {
          for (var u = -1; ++u < n; ) {
            var p = t[u];
            if (ut(p[0], this, l))
              return ut(p[1], this, l);
          }
        });
      }
      function IN(t) {
        return ug(Zt(t, U));
      }
      function ql(t) {
        return function() {
          return t;
        };
      }
      function DN(t, n) {
        return t == null || t !== t ? n : t;
      }
      var ON = Of(), QN = Of(!0);
      function ot(t) {
        return t;
      }
      function Kl(t) {
        return vf(typeof t == "function" ? t : Zt(t, U));
      }
      function zN(t) {
        return gf(Zt(t, U));
      }
      function GN(t, n) {
        return Tf(t, Zt(n, U));
      }
      var YN = ne(function(t, n) {
        return function(a) {
          return _o(a, t, n);
        };
      }), PN = ne(function(t, n) {
        return function(a) {
          return _o(t, a, n);
        };
      });
      function ec(t, n, a) {
        var l = xe(n), u = ci(n, l);
        a == null && !(Ue(n) && (u.length || !l.length)) && (a = n, n = t, t = this, u = ci(n, xe(n)));
        var p = !(Ue(a) && "chain" in a) || !!a.chain, w = gn(t);
        return kt(u, function(v) {
          var y = n[v];
          t[v] = y, w && (t.prototype[v] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var S = t(this.__wrapped__), J = S.__actions__ = tt(this.__actions__);
              return J.push({ func: y, args: arguments, thisArg: t }), S.__chain__ = Z, S;
            }
            return y.apply(t, Jn([this.value()], arguments));
          });
        }), t;
      }
      function HN() {
        return Oe._ === this && (Oe._ = g0), this;
      }
      function tc() {
      }
      function jN(t) {
        return t = K(t), ne(function(n) {
          return Uf(n, t);
        });
      }
      var $N = Al(Te), XN = Al(Od), LN = Al(rl);
      function Ih(t) {
        return Il(t) ? ol(nn(t)) : bg(t);
      }
      function qN(t) {
        return function(n) {
          return t == null ? o : or(t, n);
        };
      }
      var KN = zf(), eR = zf(!0);
      function nc() {
        return [];
      }
      function rc() {
        return !1;
      }
      function tR() {
        return {};
      }
      function nR() {
        return "";
      }
      function rR() {
        return !0;
      }
      function oR(t, n) {
        if (t = K(t), t < 1 || t > Xe)
          return [];
        var a = Kt, l = He(t, Kt);
        n = P(n), t -= Kt;
        for (var u = sl(l, n); ++a < t; )
          n(a);
        return u;
      }
      function aR(t) {
        return q(t) ? Te(t, nn) : ht(t) ? [t] : tt(ah(ce(t)));
      }
      function iR(t) {
        var n = ++v0;
        return ce(t) + n;
      }
      var sR = mi(function(t, n) {
        return t + n;
      }, 0), lR = Fl("ceil"), cR = mi(function(t, n) {
        return t / n;
      }, 1), uR = Fl("floor");
      function dR(t) {
        return t && t.length ? li(t, ot, Vl) : o;
      }
      function fR(t, n) {
        return t && t.length ? li(t, P(n, 2), Vl) : o;
      }
      function hR(t) {
        return Gd(t, ot);
      }
      function pR(t, n) {
        return Gd(t, P(n, 2));
      }
      function mR(t) {
        return t && t.length ? li(t, ot, yl) : o;
      }
      function wR(t, n) {
        return t && t.length ? li(t, P(n, 2), yl) : o;
      }
      var vR = mi(function(t, n) {
        return t * n;
      }, 1), VR = Fl("round"), gR = mi(function(t, n) {
        return t - n;
      }, 0);
      function TR(t) {
        return t && t.length ? il(t, ot) : 0;
      }
      function UR(t, n) {
        return t && t.length ? il(t, P(n, 2)) : 0;
      }
      return h.after = zU, h.ary = wh, h.assign = Ey, h.assignIn = Eh, h.assignInWith = Zi, h.assignWith = Jy, h.at = Ay, h.before = vh, h.bind = Yl, h.bindAll = BN, h.bindKey = Vh, h.castArray = ty, h.chain = hh, h.chunk = uT, h.compact = dT, h.concat = fT, h.cond = _N, h.conforms = IN, h.constant = ql, h.countBy = TU, h.create = Fy, h.curry = gh, h.curryRight = Th, h.debounce = Uh, h.defaults = Cy, h.defaultsDeep = Wy, h.defer = GU, h.delay = YU, h.difference = hT, h.differenceBy = pT, h.differenceWith = mT, h.drop = wT, h.dropRight = vT, h.dropRightWhile = VT, h.dropWhile = gT, h.fill = TT, h.filter = yU, h.flatMap = kU, h.flatMapDeep = MU, h.flatMapDepth = bU, h.flatten = ch, h.flattenDeep = UT, h.flattenDepth = yT, h.flip = PU, h.flow = ON, h.flowRight = QN, h.fromPairs = NT, h.functions = Qy, h.functionsIn = zy, h.groupBy = ZU, h.initial = kT, h.intersection = MT, h.intersectionBy = bT, h.intersectionWith = ZT, h.invert = Yy, h.invertBy = Py, h.invokeMap = EU, h.iteratee = Kl, h.keyBy = JU, h.keys = xe, h.keysIn = rt, h.map = yi, h.mapKeys = jy, h.mapValues = $y, h.matches = zN, h.matchesProperty = GN, h.memoize = Ri, h.merge = Xy, h.mergeWith = Jh, h.method = YN, h.methodOf = PN, h.mixin = ec, h.negate = ki, h.nthArg = jN, h.omit = Ly, h.omitBy = qy, h.once = HU, h.orderBy = AU, h.over = $N, h.overArgs = jU, h.overEvery = XN, h.overSome = LN, h.partial = Pl, h.partialRight = yh, h.partition = FU, h.pick = Ky, h.pickBy = Ah, h.property = Ih, h.propertyOf = qN, h.pull = AT, h.pullAll = dh, h.pullAllBy = FT, h.pullAllWith = CT, h.pullAt = WT, h.range = KN, h.rangeRight = eR, h.rearg = $U, h.reject = xU, h.remove = xT, h.rest = XU, h.reverse = zl, h.sampleSize = _U, h.set = tN, h.setWith = nN, h.shuffle = IU, h.slice = BT, h.sortBy = QU, h.sortedUniq = GT, h.sortedUniqBy = YT, h.split = kN, h.spread = LU, h.tail = PT, h.take = HT, h.takeRight = jT, h.takeRightWhile = $T, h.takeWhile = XT, h.tap = dU, h.throttle = qU, h.thru = Ui, h.toArray = bh, h.toPairs = Fh, h.toPairsIn = Ch, h.toPath = aR, h.toPlainObject = Sh, h.transform = rN, h.unary = KU, h.union = LT, h.unionBy = qT, h.unionWith = KT, h.uniq = eU, h.uniqBy = tU, h.uniqWith = nU, h.unset = oN, h.unzip = Gl, h.unzipWith = fh, h.update = aN, h.updateWith = iN, h.values = Or, h.valuesIn = sN, h.without = rU, h.words = Bh, h.wrap = ey, h.xor = oU, h.xorBy = aU, h.xorWith = iU, h.zip = sU, h.zipObject = lU, h.zipObjectDeep = cU, h.zipWith = uU, h.entries = Fh, h.entriesIn = Ch, h.extend = Eh, h.extendWith = Zi, ec(h, h), h.add = sR, h.attempt = _h, h.camelCase = dN, h.capitalize = Wh, h.ceil = lR, h.clamp = lN, h.clone = ny, h.cloneDeep = oy, h.cloneDeepWith = ay, h.cloneWith = ry, h.conformsTo = iy, h.deburr = xh, h.defaultTo = DN, h.divide = cR, h.endsWith = fN, h.eq = zt, h.escape = hN, h.escapeRegExp = pN, h.every = UU, h.find = NU, h.findIndex = sh, h.findKey = xy, h.findLast = RU, h.findLastIndex = lh, h.findLastKey = By, h.floor = uR, h.forEach = ph, h.forEachRight = mh, h.forIn = _y, h.forInRight = Iy, h.forOwn = Dy, h.forOwnRight = Oy, h.get = $l, h.gt = sy, h.gte = ly, h.has = Gy, h.hasIn = Xl, h.head = uh, h.identity = ot, h.includes = SU, h.indexOf = RT, h.inRange = cN, h.invoke = Hy, h.isArguments = sr, h.isArray = q, h.isArrayBuffer = cy, h.isArrayLike = nt, h.isArrayLikeObject = ke, h.isBoolean = uy, h.isBuffer = _n, h.isDate = dy, h.isElement = fy, h.isEmpty = hy, h.isEqual = py, h.isEqualWith = my, h.isError = Hl, h.isFinite = wy, h.isFunction = gn, h.isInteger = Nh, h.isLength = Mi, h.isMap = Rh, h.isMatch = vy, h.isMatchWith = Vy, h.isNaN = gy, h.isNative = Ty, h.isNil = yy, h.isNull = Uy, h.isNumber = kh, h.isObject = Ue, h.isObjectLike = Ne, h.isPlainObject = Go, h.isRegExp = jl, h.isSafeInteger = Ny, h.isSet = Mh, h.isString = bi, h.isSymbol = ht, h.isTypedArray = Dr, h.isUndefined = Ry, h.isWeakMap = ky, h.isWeakSet = My, h.join = ST, h.kebabCase = mN, h.last = Et, h.lastIndexOf = ET, h.lowerCase = wN, h.lowerFirst = vN, h.lt = by, h.lte = Zy, h.max = dR, h.maxBy = fR, h.mean = hR, h.meanBy = pR, h.min = mR, h.minBy = wR, h.stubArray = nc, h.stubFalse = rc, h.stubObject = tR, h.stubString = nR, h.stubTrue = rR, h.multiply = vR, h.nth = JT, h.noConflict = HN, h.noop = tc, h.now = Ni, h.pad = VN, h.padEnd = gN, h.padStart = TN, h.parseInt = UN, h.random = uN, h.reduce = CU, h.reduceRight = WU, h.repeat = yN, h.replace = NN, h.result = eN, h.round = VR, h.runInContext = T, h.sample = BU, h.size = DU, h.snakeCase = RN, h.some = OU, h.sortedIndex = _T, h.sortedIndexBy = IT, h.sortedIndexOf = DT, h.sortedLastIndex = OT, h.sortedLastIndexBy = QT, h.sortedLastIndexOf = zT, h.startCase = MN, h.startsWith = bN, h.subtract = gR, h.sum = TR, h.sumBy = UR, h.template = ZN, h.times = oR, h.toFinite = Tn, h.toInteger = K, h.toLength = Zh, h.toLower = SN, h.toNumber = Jt, h.toSafeInteger = Sy, h.toString = ce, h.toUpper = EN, h.trim = JN, h.trimEnd = AN, h.trimStart = FN, h.truncate = CN, h.unescape = WN, h.uniqueId = iR, h.upperCase = xN, h.upperFirst = Ll, h.each = ph, h.eachRight = mh, h.first = uh, ec(h, function() {
        var t = {};
        return en(h, function(n, a) {
          ue.call(h.prototype, a) || (t[a] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, kt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), kt(["drop", "take"], function(t, n) {
        oe.prototype[t] = function(a) {
          a = a === o ? 1 : Fe(K(a), 0);
          var l = this.__filtered__ && !n ? new oe(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = He(a, l.__takeCount__) : l.__views__.push({
            size: He(a, Kt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, oe.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), kt(["filter", "map", "takeWhile"], function(t, n) {
        var a = n + 1, l = a == Se || a == Ie;
        oe.prototype[t] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: P(u, 3),
            type: a
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), kt(["head", "last"], function(t, n) {
        var a = "take" + (n ? "Right" : "");
        oe.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), kt(["initial", "tail"], function(t, n) {
        var a = "drop" + (n ? "" : "Right");
        oe.prototype[t] = function() {
          return this.__filtered__ ? new oe(this) : this[a](1);
        };
      }), oe.prototype.compact = function() {
        return this.filter(ot);
      }, oe.prototype.find = function(t) {
        return this.filter(t).head();
      }, oe.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, oe.prototype.invokeMap = ne(function(t, n) {
        return typeof t == "function" ? new oe(this) : this.map(function(a) {
          return _o(a, t, n);
        });
      }), oe.prototype.reject = function(t) {
        return this.filter(ki(P(t)));
      }, oe.prototype.slice = function(t, n) {
        t = K(t);
        var a = this;
        return a.__filtered__ && (t > 0 || n < 0) ? new oe(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), n !== o && (n = K(n), a = n < 0 ? a.dropRight(-n) : a.take(n - t)), a);
      }, oe.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, oe.prototype.toArray = function() {
        return this.take(Kt);
      }, en(oe.prototype, function(t, n) {
        var a = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), u = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var w = this.__wrapped__, v = l ? [1] : arguments, y = w instanceof oe, Z = v[0], S = y || q(w), J = function(re) {
            var ae = u.apply(h, Jn([re], v));
            return l && B ? ae[0] : ae;
          };
          S && a && typeof Z == "function" && Z.length != 1 && (y = S = !1);
          var B = this.__chain__, O = !!this.__actions__.length, H = p && !B, ee = y && !O;
          if (!p && S) {
            w = ee ? w : new oe(this);
            var j = t.apply(w, v);
            return j.__actions__.push({ func: Ui, args: [J], thisArg: o }), new bt(j, B);
          }
          return H && ee ? t.apply(this, v) : (j = this.thru(J), H ? l ? j.value()[0] : j.value() : j);
        });
      }), kt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ha[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), en(oe.prototype, function(t, n) {
        var a = h[n];
        if (a) {
          var l = a.name + "";
          ue.call(Wr, l) || (Wr[l] = []), Wr[l].push({ name: n, func: a });
        }
      }), Wr[pi(o, A).name] = [{
        name: "wrapper",
        func: o
      }], oe.prototype.clone = W0, oe.prototype.reverse = x0, oe.prototype.value = B0, h.prototype.at = fU, h.prototype.chain = hU, h.prototype.commit = pU, h.prototype.next = mU, h.prototype.plant = vU, h.prototype.reverse = VU, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = gU, h.prototype.first = h.prototype.head, Jo && (h.prototype[Jo] = wU), h;
    }, Ar = p0();
    Kn ? ((Kn.exports = Ar)._ = Ar, Ks._ = Ar) : Oe._ = Ar;
  }).call(Yo);
})(me, me.exports);
const Ok = "/alarms?_s=", Ns = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Qk = async (e, r) => {
  try {
    return (await dn.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      Ns
    )).status === 204;
  } catch {
    return !1;
  }
}, zk = async (e, r) => {
  try {
    return (await dn.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      Ns
    )).status === 204;
  } catch {
    return !1;
  }
}, Gk = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await Zn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      Ns
    )).status == 204;
  } catch {
    return !1;
  }
}, Yk = async () => {
  try {
    const e = `${Ok}isSituation==true&limit=0`, r = await Zn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, Pk = async (e) => {
  try {
    const r = e.join(",id=="), o = await Zn(`/alarms?_s=id==${r}`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, tv = async (e) => {
  try {
    const r = await Zn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, Hk = async (e) => {
  try {
    const r = await Zn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, jk = async () => {
  try {
    const e = await Zn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => me.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, $k = async (e, r, o) => {
  try {
    return (await Zn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      Ns
    )).status == 204;
  } catch {
    return !1;
  }
}, Xk = async (e, r) => {
  try {
    return (await Zn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, Lk = async () => {
  try {
    const e = await Zn.get(
      "alarms?_s=isInSituation==false;isSituation==false"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, qk = window.Pinia.defineStore, Sn = qk("situationsStore", {
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
      const e = await jk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Yk();
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
        const i = await tv(e);
        if (i) {
          const s = (r = i.relatedAlarms) == null ? void 0 : r.map((f) => f.id), d = await Pk(s);
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
          const s = await Hk(i);
          s && (o[i] = me.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await Lk();
      e && (this.unassignedAlarms = e);
    }
  }
}), Kk = window.Vue.openBlock, eM = window.Vue.createElementBlock, tM = window.Vue.createElementVNode;
var nM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const rM = {}, oM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aM = /* @__PURE__ */ tM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), iM = [
  aM
];
function sM(e, r) {
  return Kk(), eM("svg", oM, iM);
}
var Na = /* @__PURE__ */ nM(rM, [["render", sM]]);
var lM = Object.defineProperty, up = Object.getOwnPropertySymbols, cM = Object.prototype.hasOwnProperty, uM = Object.prototype.propertyIsEnumerable, dp = (e, r, o) => r in e ? lM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, fp = (e, r) => {
  for (var o in r || (r = {}))
    cM.call(r, o) && dp(e, o, r[o]);
  if (up)
    for (var o of up(r))
      uM.call(r, o) && dp(e, o, r[o]);
  return e;
};
const dM = window.Vue.defineComponent, fM = window.Vue.toRaw, gc = window.Vue.h;
var hM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const pM = {
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
}, mM = dM({
  props: pM,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((s, c) => (s[c] = !0, s), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let i = fM(this.icon);
    return this.$slots.default ? gc("span", { class: "feather-icon-container" }, [
      gc(this.$slots.default()[0], fp({
        class: r
      }, o))
    ]) : gc(i, fp({
      class: r
    }, o));
  }
});
var $ = /* @__PURE__ */ hM(mM, [["__scopeId", "data-v-52cbf270"]]);
const wM = window.Vue.openBlock, vM = window.Vue.createElementBlock, VM = window.Vue.createElementVNode;
var gM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const TM = {}, UM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yM = /* @__PURE__ */ VM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), NM = [
  yM
];
function RM(e, r) {
  return wM(), vM("svg", UM, NM);
}
var nv = /* @__PURE__ */ gM(TM, [["render", RM]]);
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
function ln(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function ve(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function We(e) {
  ve(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function kM(e, r) {
  ve(2, arguments);
  var o = We(e), i = ln(r);
  return isNaN(i) ? new Date(NaN) : (i && o.setDate(o.getDate() + i), o);
}
function MM(e, r) {
  ve(2, arguments);
  var o = We(e).getTime(), i = ln(r);
  return new Date(o + i);
}
var bM = {};
function Vo() {
  return bM;
}
function hp(e, r) {
  var o, i, s, c, d, f, m, g;
  ve(1, arguments);
  var V = Vo(), U = ln((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(U >= 0 && U <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = We(e), F = N.getDay(), E = (F < U ? 7 : 0) + F - U;
  return N.setDate(N.getDate() - E), N.setHours(0, 0, 0, 0), N;
}
function cu(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function pp(e) {
  ve(1, arguments);
  var r = We(e);
  return r.setHours(0, 0, 0, 0), r;
}
function ZM(e, r) {
  ve(2, arguments);
  var o = We(e), i = We(r), s = o.getTime() - i.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function rv(e, r) {
  ve(2, arguments);
  var o = pp(e), i = pp(r);
  return o.getTime() === i.getTime();
}
function SM(e) {
  return ve(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function EM(e) {
  if (ve(1, arguments), !SM(e) && typeof e != "number")
    return !1;
  var r = We(e);
  return !isNaN(Number(r));
}
function JM(e, r) {
  ve(2, arguments);
  var o = ln(r);
  return MM(e, -o);
}
var AM = 864e5;
function FM(e) {
  ve(1, arguments);
  var r = We(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var i = r.getTime(), s = o - i;
  return Math.floor(s / AM) + 1;
}
function cs(e) {
  ve(1, arguments);
  var r = 1, o = We(e), i = o.getUTCDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setUTCDate(o.getUTCDate() - s), o.setUTCHours(0, 0, 0, 0), o;
}
function ov(e) {
  ve(1, arguments);
  var r = We(e), o = r.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(o + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = cs(i), c = new Date(0);
  c.setUTCFullYear(o, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = cs(c);
  return r.getTime() >= s.getTime() ? o + 1 : r.getTime() >= d.getTime() ? o : o - 1;
}
function CM(e) {
  ve(1, arguments);
  var r = ov(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = cs(o);
  return i;
}
var WM = 6048e5;
function xM(e) {
  ve(1, arguments);
  var r = We(e), o = cs(r).getTime() - CM(r).getTime();
  return Math.round(o / WM) + 1;
}
function us(e, r) {
  var o, i, s, c, d, f, m, g;
  ve(1, arguments);
  var V = Vo(), U = ln((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(U >= 0 && U <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = We(e), F = N.getUTCDay(), E = (F < U ? 7 : 0) + F - U;
  return N.setUTCDate(N.getUTCDate() - E), N.setUTCHours(0, 0, 0, 0), N;
}
function av(e, r) {
  var o, i, s, c, d, f, m, g;
  ve(1, arguments);
  var V = We(e), U = V.getUTCFullYear(), N = Vo(), F = ln((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = N.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = new Date(0);
  E.setUTCFullYear(U + 1, 0, F), E.setUTCHours(0, 0, 0, 0);
  var b = us(E, r), C = new Date(0);
  C.setUTCFullYear(U, 0, F), C.setUTCHours(0, 0, 0, 0);
  var A = us(C, r);
  return V.getTime() >= b.getTime() ? U + 1 : V.getTime() >= A.getTime() ? U : U - 1;
}
function BM(e, r) {
  var o, i, s, c, d, f, m, g;
  ve(1, arguments);
  var V = Vo(), U = ln((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : V.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), N = av(e, r), F = new Date(0);
  F.setUTCFullYear(N, 0, U), F.setUTCHours(0, 0, 0, 0);
  var E = us(F, r);
  return E;
}
var _M = 6048e5;
function IM(e, r) {
  ve(1, arguments);
  var o = We(e), i = us(o, r).getTime() - BM(o, r).getTime();
  return Math.round(i / _M) + 1;
}
function de(e, r) {
  for (var o = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < r; )
    i = "0" + i;
  return o + i;
}
var DM = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), i = o > 0 ? o : 1 - o;
    return de(r === "yy" ? i % 100 : i, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : de(o + 1, 2);
  },
  d: function(e, r) {
    return de(e.getUTCDate(), r.length);
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
    return de(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return de(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return de(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return de(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, i = e.getUTCMilliseconds(), s = Math.floor(i * Math.pow(10, o - 3));
    return de(s, r.length);
  }
};
const In = DM;
var Gr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, OM = {
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
    var s = av(e, i), c = s > 0 ? s : 1 - s;
    if (r === "YY") {
      var d = c % 100;
      return de(d, 2);
    }
    return r === "Yo" ? o.ordinalNumber(c, {
      unit: "year"
    }) : de(c, r.length);
  },
  R: function(e, r) {
    var o = ov(e);
    return de(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return de(o, r.length);
  },
  Q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(i);
      case "QQ":
        return de(i, 2);
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
        return de(i, 2);
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
        return de(i + 1, 2);
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
    var s = IM(e, i);
    return r === "wo" ? o.ordinalNumber(s, {
      unit: "week"
    }) : de(s, r.length);
  },
  I: function(e, r, o) {
    var i = xM(e);
    return r === "Io" ? o.ordinalNumber(i, {
      unit: "week"
    }) : de(i, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : In.d(e, r);
  },
  D: function(e, r, o) {
    var i = FM(e);
    return r === "Do" ? o.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : de(i, r.length);
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
        return de(c, 2);
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
        return de(c, r.length);
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
        return de(s, r.length);
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
    switch (i === 12 ? s = Gr.noon : i === 0 ? s = Gr.midnight : s = i / 12 >= 1 ? "pm" : "am", r) {
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
    switch (i >= 17 ? s = Gr.evening : i >= 12 ? s = Gr.afternoon : i >= 4 ? s = Gr.morning : s = Gr.night, r) {
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
    }) : de(i, r.length);
  },
  k: function(e, r, o) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), r === "ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : de(i, r.length);
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
        return vr(c);
      case "XXXXX":
      case "XXX":
      default:
        return vr(c, ":");
    }
  },
  x: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "x":
        return wp(c);
      case "xxxx":
      case "xx":
        return vr(c);
      case "xxxxx":
      case "xxx":
      default:
        return vr(c, ":");
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
        return "GMT" + vr(c, ":");
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
        return "GMT" + vr(c, ":");
    }
  },
  t: function(e, r, o, i) {
    var s = i._originalDate || e, c = Math.floor(s.getTime() / 1e3);
    return de(c, r.length);
  },
  T: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTime();
    return de(c, r.length);
  }
};
function mp(e, r) {
  var o = e > 0 ? "-" : "+", i = Math.abs(e), s = Math.floor(i / 60), c = i % 60;
  if (c === 0)
    return o + String(s);
  var d = r || "";
  return o + String(s) + d + de(c, 2);
}
function wp(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + de(Math.abs(e) / 60, 2);
  }
  return vr(e, r);
}
function vr(e, r) {
  var o = r || "", i = e > 0 ? "-" : "+", s = Math.abs(e), c = de(Math.floor(s / 60), 2), d = de(s % 60, 2);
  return i + c + o + d;
}
const QM = OM;
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
}, iv = function(e, r) {
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
}, zM = function(e, r) {
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
  return c.replace("{{date}}", vp(i, r)).replace("{{time}}", iv(s, r));
}, GM = {
  p: iv,
  P: zM
};
const YM = GM;
var PM = ["D", "DD"], HM = ["YY", "YYYY"];
function jM(e) {
  return PM.indexOf(e) !== -1;
}
function $M(e) {
  return HM.indexOf(e) !== -1;
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
var XM = {
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
}, LM = function(e, r, o) {
  var i, s = XM[e];
  return typeof s == "string" ? i = s : r === 1 ? i = s.one : i = s.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + i : i + " ago" : i;
};
const qM = LM;
function Tc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, i = e.formats[o] || e.formats[e.defaultWidth];
    return i;
  };
}
var KM = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, eb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nb = {
  date: Tc({
    formats: KM,
    defaultWidth: "full"
  }),
  time: Tc({
    formats: eb,
    defaultWidth: "full"
  }),
  dateTime: Tc({
    formats: tb,
    defaultWidth: "full"
  })
};
const rb = nb;
var ob = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ab = function(e, r, o, i) {
  return ob[e];
};
const ib = ab;
function Po(e) {
  return function(r, o) {
    var i = o != null && o.context ? String(o.context) : "standalone", s;
    if (i === "formatting" && e.formattingValues) {
      var c = e.defaultFormattingWidth || e.defaultWidth, d = o != null && o.width ? String(o.width) : c;
      s = e.formattingValues[d] || e.formattingValues[c];
    } else {
      var f = e.defaultWidth, m = o != null && o.width ? String(o.width) : e.defaultWidth;
      s = e.values[m] || e.values[f];
    }
    var g = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[g];
  };
}
var sb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, lb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, cb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ub = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, db = {
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
}, fb = {
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
}, hb = function(e, r) {
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
}, pb = {
  ordinalNumber: hb,
  era: Po({
    values: sb,
    defaultWidth: "wide"
  }),
  quarter: Po({
    values: lb,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Po({
    values: cb,
    defaultWidth: "wide"
  }),
  day: Po({
    values: ub,
    defaultWidth: "wide"
  }),
  dayPeriod: Po({
    values: db,
    defaultWidth: "wide",
    formattingValues: fb,
    defaultFormattingWidth: "wide"
  })
};
const mb = pb;
function Ho(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, s = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], c = r.match(s);
    if (!c)
      return null;
    var d = c[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? vb(f, function(U) {
      return U.test(d);
    }) : wb(f, function(U) {
      return U.test(d);
    }), g;
    g = e.valueCallback ? e.valueCallback(m) : m, g = o.valueCallback ? o.valueCallback(g) : g;
    var V = r.slice(d.length);
    return {
      value: g,
      rest: V
    };
  };
}
function wb(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function vb(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function Vb(e) {
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
var gb = /^(\d+)(th|st|nd|rd)?/i, Tb = /\d+/i, Ub = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yb = {
  any: [/^b/i, /^(a|c)/i]
}, Nb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Rb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mb = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, bb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Zb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Sb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Eb = {
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
}, Jb = {
  ordinalNumber: Vb({
    matchPattern: gb,
    parsePattern: Tb,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ho({
    matchPatterns: Ub,
    defaultMatchWidth: "wide",
    parsePatterns: yb,
    defaultParseWidth: "any"
  }),
  quarter: Ho({
    matchPatterns: Nb,
    defaultMatchWidth: "wide",
    parsePatterns: Rb,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ho({
    matchPatterns: kb,
    defaultMatchWidth: "wide",
    parsePatterns: Mb,
    defaultParseWidth: "any"
  }),
  day: Ho({
    matchPatterns: bb,
    defaultMatchWidth: "wide",
    parsePatterns: Zb,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ho({
    matchPatterns: Sb,
    defaultMatchWidth: "any",
    parsePatterns: Eb,
    defaultParseWidth: "any"
  })
};
const Ab = Jb;
var Fb = {
  code: "en-US",
  formatDistance: qM,
  formatLong: rb,
  formatRelative: ib,
  localize: mb,
  match: Ab,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const sv = Fb;
var Cb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xb = /^'([^]*?)'?$/, Bb = /''/g, _b = /[a-zA-Z]/;
function Ib(e, r, o) {
  var i, s, c, d, f, m, g, V, U, N, F, E, b, C, A, x, _, Y;
  ve(2, arguments);
  var k = String(r), W = Vo(), I = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : W.locale) !== null && i !== void 0 ? i : sv, G = ln((c = (d = (f = (m = o == null ? void 0 : o.firstWeekContainsDate) !== null && m !== void 0 ? m : o == null || (g = o.locale) === null || g === void 0 || (V = g.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && f !== void 0 ? f : W.firstWeekContainsDate) !== null && d !== void 0 ? d : (U = W.locale) === null || U === void 0 || (N = U.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(G >= 1 && G <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var z = ln((F = (E = (b = (C = o == null ? void 0 : o.weekStartsOn) !== null && C !== void 0 ? C : o == null || (A = o.locale) === null || A === void 0 || (x = A.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && b !== void 0 ? b : W.weekStartsOn) !== null && E !== void 0 ? E : (_ = W.locale) === null || _ === void 0 || (Y = _.options) === null || Y === void 0 ? void 0 : Y.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(z >= 0 && z <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!I.localize)
    throw new RangeError("locale must contain localize property");
  if (!I.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Q = We(e);
  if (!EM(Q))
    throw new RangeError("Invalid time value");
  var L = cu(Q), ye = JM(Q, L), Re = {
    firstWeekContainsDate: G,
    weekStartsOn: z,
    locale: I,
    _originalDate: Q
  }, Se = k.match(Wb).map(function(fe) {
    var Ie = fe[0];
    if (Ie === "p" || Ie === "P") {
      var De = YM[Ie];
      return De(fe, I.formatLong);
    }
    return fe;
  }).join("").match(Cb).map(function(fe) {
    if (fe === "''")
      return "'";
    var Ie = fe[0];
    if (Ie === "'")
      return Db(fe);
    var De = QM[Ie];
    if (De)
      return !(o != null && o.useAdditionalWeekYearTokens) && $M(fe) && Vp(fe, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && jM(fe) && Vp(fe, r, String(e)), De(ye, fe, I.localize, Re);
    if (Ie.match(_b))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ie + "`");
    return fe;
  }).join("");
  return Se;
}
function Db(e) {
  var r = e.match(xb);
  return r ? r[1].replace(Bb, "'") : e;
}
function lv(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function Ob(e) {
  return lv({}, e);
}
var gp = 1e3 * 60, ds = 60 * 24, Tp = ds * 30, Up = ds * 365;
function Rs(e, r, o) {
  var i, s, c;
  ve(2, arguments);
  var d = Vo(), f = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : d.locale) !== null && i !== void 0 ? i : sv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = ZM(e, r);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var g = lv(Ob(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: m
  }), V, U;
  m > 0 ? (V = We(r), U = We(e)) : (V = We(e), U = We(r));
  var N = String((c = o == null ? void 0 : o.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (N === "floor")
    F = Math.floor;
  else if (N === "ceil")
    F = Math.ceil;
  else if (N === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var E = U.getTime() - V.getTime(), b = E / gp, C = cu(U) - cu(V), A = (E - C) / gp, x = o == null ? void 0 : o.unit, _;
  if (x ? _ = String(x) : b < 1 ? _ = "second" : b < 60 ? _ = "minute" : b < ds ? _ = "hour" : A < Tp ? _ = "day" : A < Up ? _ = "month" : _ = "year", _ === "second") {
    var Y = F(E / 1e3);
    return f.formatDistance("xSeconds", Y, g);
  } else if (_ === "minute") {
    var k = F(b);
    return f.formatDistance("xMinutes", k, g);
  } else if (_ === "hour") {
    var W = F(b / 60);
    return f.formatDistance("xHours", W, g);
  } else if (_ === "day") {
    var I = F(A / ds);
    return f.formatDistance("xDays", I, g);
  } else if (_ === "month") {
    var G = F(A / Tp);
    return G === 12 && x !== "month" ? f.formatDistance("xYears", 1, g) : f.formatDistance("xMonths", G, g);
  } else if (_ === "year") {
    var z = F(A / Up);
    return f.formatDistance("xYears", z, g);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Qb(e, r, o) {
  ve(2, arguments);
  var i = hp(e, o), s = hp(r, o);
  return i.getTime() === s.getTime();
}
function zb(e, r) {
  return ve(1, arguments), Qb(e, Date.now(), r);
}
function Gb(e) {
  return ve(1, arguments), rv(e, Date.now());
}
function Yb(e, r) {
  ve(2, arguments);
  var o = ln(r);
  return kM(e, -o);
}
function Pb(e) {
  return ve(1, arguments), rv(e, Yb(Date.now(), 1));
}
const cn = (e) => {
  let r = "";
  if (e)
    try {
      r = Ib(new Date(e), Ut.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, cv = (e, r) => {
  const o = e.length > r ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, r) + o;
}, Hb = window.Vue.defineComponent, vt = window.Vue.unref, yp = window.Vue.normalizeClass, on = window.Vue.createElementVNode, Yr = window.Vue.toDisplayString, Np = window.Vue.createVNode, lr = window.Vue.openBlock, cr = window.Vue.createElementBlock, Si = window.Vue.createCommentVNode, uu = window.Vue.createTextVNode, jb = window.Vue.renderList, $b = window.Vue.Fragment, Xb = window.Vue.pushScopeId, Lb = window.Vue.popScopeId, Fu = (e) => (Xb("data-v-d97f7aa6"), e = e(), Lb(), e), qb = { class: "content" }, Kb = { class: "title-row" }, e2 = { class: "title" }, t2 = {
  key: 0,
  class: "accepted"
}, n2 = {
  key: 1,
  class: "rejected"
}, r2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ on("span", { class: "info-title" }, " Duration: ", -1)), o2 = { key: 0 }, a2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ on("span", { class: "info-title" }, " First Event: ", -1)), i2 = { class: "description" }, s2 = /* @__PURE__ */ Fu(() => /* @__PURE__ */ on("hr", null, null, -1)), l2 = {
  key: 1,
  class: "count-info"
}, c2 = /* @__PURE__ */ uu(" Alarms: "), u2 = { class: "info-title" }, d2 = /* @__PURE__ */ Hb({
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
      var g, V, U;
      return lr(), cr("div", {
        onClick: d,
        class: yp(["card", {
          rejected: o.situationInfo.status == vt(s)
        }])
      }, [
        on("div", {
          class: yp(["severity-line", [`${(V = (g = o.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
        }, null, 2),
        on("div", qb, [
          on("div", Kb, [
            on("div", e2, "Situation " + Yr((U = o.situationInfo) == null ? void 0 : U.id), 1),
            o.situationInfo.status == vt(i) ? (lr(), cr("div", t2, [
              Np(vt($), {
                icon: vt(Na),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Si("", !0),
            o.situationInfo.status == vt(s) ? (lr(), cr("div", n2, [
              Np(vt($), {
                icon: vt(nv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Si("", !0)
          ]),
          on("div", null, [
            r2,
            uu(" " + Yr(vt(Rs)(
              vt(c),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Si("", !0) : (lr(), cr("div", o2, [
            a2,
            uu(Yr(vt(cn)(o.situationInfo.firstEventTime)), 1)
          ])),
          on("div", i2, Yr(vt(cv)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          s2,
          o.situationInfo.relatedAlarms ? (lr(), cr("div", l2, [
            c2,
            on("span", u2, Yr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Si("", !0),
          (lr(!0), cr($b, null, jb(vt(me.exports.keys)(
            vt(me.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (N) => (lr(), cr("div", {
            class: "info-title",
            key: N
          }, " - " + Yr(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const uv = /* @__PURE__ */ we(d2, [["__scopeId", "data-v-d97f7aa6"]]), f2 = window.Vue.openBlock, h2 = window.Vue.createElementBlock, p2 = window.Vue.createElementVNode;
var m2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const w2 = {}, v2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V2 = /* @__PURE__ */ p2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), g2 = [
  V2
];
function T2(e, r) {
  return f2(), h2("svg", v2, g2);
}
var U2 = /* @__PURE__ */ m2(w2, [["render", T2]]);
const y2 = window.Vue.openBlock, N2 = window.Vue.createElementBlock, dv = window.Vue.createElementVNode;
var R2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const k2 = {}, M2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, b2 = /* @__PURE__ */ dv("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), Z2 = /* @__PURE__ */ dv("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), S2 = [
  b2,
  Z2
];
function E2(e, r) {
  return y2(), N2("svg", M2, S2);
}
var J2 = /* @__PURE__ */ R2(k2, [["render", E2]]);
const A2 = window.Vue.openBlock, F2 = window.Vue.createElementBlock, C2 = window.Vue.createElementVNode;
var W2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const x2 = {}, B2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _2 = /* @__PURE__ */ C2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), I2 = [
  _2
];
function D2(e, r) {
  return A2(), F2("svg", B2, I2);
}
var O2 = /* @__PURE__ */ W2(x2, [["render", D2]]);
const Q2 = window.Vue.openBlock, z2 = window.Vue.createElementBlock, G2 = window.Vue.createElementVNode;
var Y2 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const P2 = {}, H2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, j2 = /* @__PURE__ */ G2("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), $2 = [
  j2
];
function X2(e, r) {
  return Q2(), z2("svg", H2, $2);
}
var fv = /* @__PURE__ */ Y2(P2, [["render", X2]]);
const L2 = window.Vue.defineComponent, Dn = window.Vue.unref, Ei = window.Vue.normalizeClass, Ji = window.Vue.createVNode, q2 = window.Vue.openBlock, K2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const eZ = { class: "paginator" }, tZ = /* @__PURE__ */ L2({
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
    return (s, c) => (q2(), K2("div", eZ, [
      Ji(Dn($), {
        icon: Dn(U2),
        "aria-hidden": "true",
        class: Ei(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => i(0))
      }, null, 8, ["icon", "class"]),
      Ji(Dn($), {
        icon: Dn(O2),
        "aria-hidden": "true",
        class: Ei(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => i(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ji(Dn($), {
        icon: Dn(fv),
        "aria-hidden": "true",
        class: Ei(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => i(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ji(Dn($), {
        icon: Dn(J2),
        "aria-hidden": "true",
        class: Ei(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => i(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const nZ = /* @__PURE__ */ we(tZ, [["__scopeId", "data-v-40758818"]]);
const ie = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, rZ = window.Vue.computed, ks = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((i) => {
    o[`${i}Label`] = rZ(() => e.value[i] ? e.value[i] : r[i]);
  }), o;
};
const Ur = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, yr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var oZ = Object.defineProperty, aZ = Object.defineProperties, iZ = Object.getOwnPropertyDescriptors, Rp = Object.getOwnPropertySymbols, sZ = Object.prototype.hasOwnProperty, lZ = Object.prototype.propertyIsEnumerable, kp = (e, r, o) => r in e ? oZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Mp = (e, r) => {
  for (var o in r || (r = {}))
    sZ.call(r, o) && kp(e, o, r[o]);
  if (Rp)
    for (var o of Rp(r))
      lZ.call(r, o) && kp(e, o, r[o]);
  return e;
}, cZ = (e, r) => aZ(e, iZ(r));
const uZ = window.Vue.defineComponent, dZ = window.Vue.h;
var fZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const hZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, pZ = uZ({
  props: hZ,
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
        this.styles = cZ(Mp({}, s), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, yr(this.failsafe), this.failsafe = Ur(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return dZ("div", {
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
var Xn = /* @__PURE__ */ fZ(pZ, [["__scopeId", "data-v-18e2a5db"]]);
const mZ = window.Vue.openBlock, wZ = window.Vue.createElementBlock, vZ = window.Vue.createElementVNode;
var VZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const gZ = {}, TZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UZ = /* @__PURE__ */ vZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), yZ = [
  UZ
];
function NZ(e, r) {
  return mZ(), wZ("svg", TZ, yZ);
}
var go = /* @__PURE__ */ VZ(gZ, [["render", NZ]]);
const bp = window.Vue.computed, RZ = (e, r, o) => {
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
const kZ = window.Vue.openBlock, MZ = window.Vue.createElementBlock, Cu = window.Vue.createElementVNode;
var bZ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const ZZ = {}, SZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EZ = /* @__PURE__ */ Cu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), JZ = /* @__PURE__ */ Cu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), AZ = /* @__PURE__ */ Cu("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), FZ = [
  EZ,
  JZ,
  AZ
];
function CZ(e, r) {
  return kZ(), MZ("svg", SZ, FZ);
}
var WZ = /* @__PURE__ */ bZ(ZZ, [["render", CZ]]), xZ = Object.defineProperty, BZ = Object.defineProperties, _Z = Object.getOwnPropertyDescriptors, Zp = Object.getOwnPropertySymbols, IZ = Object.prototype.hasOwnProperty, DZ = Object.prototype.propertyIsEnumerable, Sp = (e, r, o) => r in e ? xZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, hv = (e, r) => {
  for (var o in r || (r = {}))
    IZ.call(r, o) && Sp(e, o, r[o]);
  if (Zp)
    for (var o of Zp(r))
      DZ.call(r, o) && Sp(e, o, r[o]);
  return e;
}, pv = (e, r) => BZ(e, _Z(r));
const To = window.Vue.defineComponent, ma = window.Vue.resolveComponent, sn = window.Vue.openBlock, lo = window.Vue.createElementBlock, OZ = window.Vue.createVNode, fs = window.Vue.createBlock, QZ = window.Vue.withModifiers, wo = window.Vue.inject, wa = window.Vue.computed, zZ = window.Vue.normalizeClass, Pr = window.Vue.createElementVNode, hs = window.Vue.toDisplayString, rs = window.Vue.renderSlot, sa = window.Vue.createCommentVNode, GZ = window.Vue.withDirectives, YZ = window.Vue.vShow, du = window.Vue.ref, Ep = window.Vue.toRef, Jp = window.Vue.nextTick, fu = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Wu = window.Vue.provide, Ap = window.Vue.isRef, PZ = window.Vue.onBeforeUnmount;
var Ra = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const HZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, jZ = To({
  props: HZ,
  components: {
    FeatherIcon: $
  }
}), $Z = ["title"];
function XZ(e, r, o, i, s, c) {
  const d = ma("FeatherIcon");
  return sn(), lo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    OZ(d, { icon: e.icon }, null, 8, ["icon"])
  ], 8, $Z);
}
var LZ = /* @__PURE__ */ Ra(jZ, [["render", XZ], ["__scopeId", "data-v-4265058e"]]);
const qZ = To({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return go;
    }
  },
  components: {
    ActionIcon: LZ
  }
});
function KZ(e, r, o, i, s, c) {
  const d = ma("ActionIcon");
  return sn(), fs(d, {
    onClick: r[0] || (r[0] = QZ((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var eS = /* @__PURE__ */ Ra(qZ, [["render", KZ]]);
const tS = To({
  computed: {
    errorIcon() {
      return WZ;
    }
  },
  components: {
    FeatherIcon: $
  }
});
function nS(e, r, o, i, s, c) {
  const d = ma("FeatherIcon");
  return sn(), fs(d, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var rS = /* @__PURE__ */ Ra(tS, [["render", nS], ["__scopeId", "data-v-0b8faef3"]]);
const oS = {
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
}, aS = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, iS = To({
  emits: aS,
  props: oS,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = wo("wrapperOptions", {}), r = wo("validationErrorMessage", !1), o = wa(() => e.error ? e.error : r && r.value ? r.value : !1);
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
    ClearIcon: eS,
    ErrorIcon: rS
  }
}), sS = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, lS = ["for"], cS = { class: "prefix" }, uS = { class: "post" };
function dS(e, r, o, i, s, c) {
  const d = ma("ClearIcon"), f = ma("ErrorIcon");
  return sn(), lo("div", {
    class: zZ(["feather-input-wrapper-container", e.containerCls])
  }, [
    Pr("fieldset", sS, [
      Pr("legend", null, hs(e.label), 1)
    ]),
    Pr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, hs(e.label), 9, lS),
    Pr("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      Pr("div", cS, [
        rs(e.$slots, "pre", {}, void 0, !0)
      ]),
      rs(e.$slots, "default", {}, void 0, !0),
      Pr("div", uS, [
        e.showClear && e.computedClearText ? (sn(), fs(d, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : sa("", !0),
        e.error ? (sn(), fs(f, { key: 1 })) : sa("", !0),
        rs(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var xu = /* @__PURE__ */ Ra(iS, [["render", dS], ["__scopeId", "data-v-4db296db"]]);
const fS = To({
  setup() {
    const e = wo("subTextOptions", {}), r = wo("validationErrorMessage", !1), o = wa(() => e.error ? e.error : r && r.value ? r.value : "");
    return pv(hv({}, e), { error: o });
  }
}), hS = { class: "feather-input-sub-text" }, pS = {
  key: 0,
  class: "feather-input-spacer"
}, mS = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, wS = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function vS(e, r, o, i, s, c) {
  return GZ((sn(), lo("div", hS, [
    !e.hint && !e.error.length ? (sn(), lo("div", pS, "\xA0")) : sa("", !0),
    e.hint && !e.error.length ? (sn(), lo("div", mS, hs(e.hint), 1)) : sa("", !0),
    e.error.length > 0 ? (sn(), lo("div", wS, hs(e.error), 1)) : sa("", !0),
    rs(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [YZ, !e.inline || e.hint || e.error.length]
  ]);
}
var ka = /* @__PURE__ */ Ra(fS, [["render", vS], ["__scopeId", "data-v-8e0ac99e"]]);
const VS = {
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
To({
  props: VS,
  setup(e) {
    const r = wo("featherFormErrors", du([])), o = Ep(e, "errorList"), i = wa(() => {
      var V;
      return (V = o.value) != null && V.length ? o.value : r.value;
    }), s = Ep(e, "generalError"), c = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), f = du(), m = (V) => `${d(V.label)} - ${V.message}`, g = wa(() => (i.value.length && Jp(() => f.value.focus()), e.headingText(i.value)));
    return fu(s, (V) => {
      V.length && Jp(() => f.value.focus());
    }), {
      errors: i,
      errorsHeading: g,
      heading: f,
      focusElement: c,
      mainError: s,
      getFullMessage: m
    };
  }
});
const Ma = (e, r, o, i, s) => {
  const c = wo("featherForm", !1);
  if (i && c && e.value) {
    const d = du("");
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
      } catch (V) {
        const U = V;
        return d.value = U.errors[0], {
          success: !1,
          message: U.errors[0],
          inputId: e.value,
          label: o
        };
      }
    }, g = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return s && Ap(s) && fu(s, () => {
      c.runValidation();
    }), fu(e, (V, U) => {
      V && c && c.register(V, g), U && c && c.deregister(U);
    }, { immediate: !0 }), PZ(() => {
      c.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, ba = (e) => ({
  inherittedAttrs: wa(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Za = {
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
}, Sa = (e) => {
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
}, Ai = window.Vue.ref, gS = window.Vue.watch, TS = window.Vue.watchEffect, Fp = window.Vue.computed, Uc = window.Vue.provide, mv = (e, r, o, i, s) => {
  const c = Ai([]), d = Ai(), f = Ai(), m = Ai();
  TS(() => {
    if (!c.value.length)
      return;
    const A = c.value.map((x) => x.value);
    if (e.value !== void 0 && e.value !== null && (d.value = c.value[A.indexOf(e.value)]), !d.value && c.value.length) {
      let x = c.value.filter((_) => !_.disabled);
      x = x.length ? x : c.value, f.value = x[0], f.value.first = !0;
    }
  }), gS(d, (A, x) => {
    x && (x.checked = !1), A && (A.checked = !0);
  });
  const g = (A) => {
    A && A.disabled || (f.value && (f.value.first = !1), d.value !== A && (r("update:modelValue", A.value), d.value = A, A.focus()));
  }, V = Fp(() => d.value || f.value), U = RZ(V, c, g), N = Fp(() => ie("feather-radio-group"));
  m.value = N.value;
  const { validate: F } = Ma(m, e, o, i, s);
  return Uc("register", (A) => {
    c.value = [...c.value, A], m.value === N.value && (m.value = A.id);
  }), Uc("select", g), Uc("blur", (A) => {
    r("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          d.value ? g(d.value) : f.value && g(f.value);
          break;
        case 40:
        case 39:
          U.selectNext();
          break;
        case 37:
        case 38:
          U.selectPrevious();
          break;
      }
    },
    ...U,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: F,
    firstElementId: m,
    groupId: N
  };
};
var US = Object.defineProperty, yS = Object.defineProperties, NS = Object.getOwnPropertyDescriptors, Cp = Object.getOwnPropertySymbols, RS = Object.prototype.hasOwnProperty, kS = Object.prototype.propertyIsEnumerable, Wp = (e, r, o) => r in e ? US(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, fo = (e, r) => {
  for (var o in r || (r = {}))
    RS.call(r, o) && Wp(e, o, r[o]);
  if (Cp)
    for (var o of Cp(r))
      kS.call(r, o) && Wp(e, o, r[o]);
  return e;
}, wv = (e, r) => yS(e, NS(r));
const Ln = window.Vue.defineComponent, la = window.Vue.inject, ps = window.Vue.computed, ca = window.Vue.ref, _t = window.Vue.resolveComponent, yt = window.Vue.openBlock, Ea = window.Vue.createElementBlock, vv = window.Vue.normalizeClass, un = window.Vue.renderSlot, Hn = window.Vue.createBlock, va = window.Vue.createCommentVNode, ms = window.Vue.createElementVNode, MS = window.Vue.withModifiers, Ms = window.Vue.createVNode, Vv = window.Vue.toRef, hu = window.Vue.mergeProps, bn = window.Vue.withCtx, bS = window.Vue.h, ZS = window.Vue.provide;
var qn = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const SS = {
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
}, ES = Ln({
  props: SS,
  setup(e) {
    const r = la("isCondensed", null), o = ps(() => r || e.condensed), i = ca(!1);
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
    FeatherRipple: Xn
  }
}), JS = ["aria-disabled"];
function AS(e, r, o, i, s, c) {
  const d = _t("FeatherRipple");
  return yt(), Ea("div", {
    class: vv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    un(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (yt(), Hn(d, { key: 0 })) : va("", !0)
  ], 42, JS);
}
var bs = /* @__PURE__ */ qn(ES, [["render", AS], ["__scopeId", "data-v-44d413dc"]]);
const FS = {
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
}, CS = Ln({
  emits: ["delete"],
  props: FS,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: go
    };
  },
  components: {
    FeatherIcon: $
  }
}), WS = { class: "chip-delete" }, xS = ["aria-label", "aria-describedby"];
function BS(e, r, o, i, s, c) {
  const d = _t("FeatherIcon");
  return yt(), Ea("span", WS, [
    ms("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = MS((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Ms(d, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, xS)
  ]);
}
var _S = /* @__PURE__ */ qn(CS, [["render", BS], ["__scopeId", "data-v-4bae6cb4"]]);
const IS = Ln({
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
}), DS = ["title"];
function OS(e, r, o, i, s, c) {
  return yt(), Ea("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    un(e.$slots, "default", {}, void 0, !0)
  ], 8, DS);
}
var Zs = /* @__PURE__ */ qn(IS, [["render", OS], ["__scopeId", "data-v-1a0445b2"]]);
const QS = {}, zS = {
  class: "chip-icon",
  role: "presentation"
};
function GS(e, r) {
  return yt(), Ea("span", zS, [
    un(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ss = /* @__PURE__ */ qn(QS, [["render", GS], ["__scopeId", "data-v-2230176f"]]);
const xp = {
  delete: "Remove"
}, YS = Ln({
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
    const o = ks(Vv(e, "labels"), xp), i = ps(() => ie("chip-text")), s = () => {
      e.disabled || r.emit("click");
    }, c = fo({}, r.attrs);
    return e.disabled && delete c.onClick, wv(fo({}, o), {
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
    Chip: bs,
    DeleteIcon: _S,
    Label: Zs,
    PreIcon: Ss
  }
}), PS = ["aria-disabled"];
function HS(e, r, o, i, s, c) {
  const d = _t("PreIcon"), f = _t("Label"), m = _t("DeleteIcon"), g = _t("Chip");
  return yt(), Hn(g, hu(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: bn(() => [
      ms("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        ms("span", hu(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (yt(), Hn(d, { key: 0 }, {
            default: bn(() => [
              un(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : va("", !0),
          Ms(f, { id: e.chipTextId }, {
            default: bn(() => [
              un(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, PS),
      e.canDelete ? (yt(), Hn(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (V) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : va("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var jS = /* @__PURE__ */ qn(YS, [["render", HS], ["__scopeId", "data-v-48b2704a"]]);
const $S = Ln({
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
    Chip: bs,
    Label: Zs,
    PreIcon: Ss
  }
}), XS = ["aria-disabled"];
function LS(e, r, o, i, s, c) {
  const d = _t("PreIcon"), f = _t("Label"), m = _t("Chip");
  return yt(), Hn(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: bn(() => [
      ms("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (yt(), Hn(d, { key: 0 }, {
          default: bn(() => [
            un(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : va("", !0),
        Ms(f, null, {
          default: bn(() => [
            un(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, XS)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var qS = /* @__PURE__ */ qn($S, [["render", LS], ["__scopeId", "data-v-3e0c4eba"]]);
const KS = Ln({
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
    const r = ca(!1), o = ca(!1), i = ps(() => ie("chip-label-id")), s = ps(() => r.value || o.value ? 0 : -1), c = ca(), d = () => {
      c.value.$el.focus();
    }, f = la("register", (N) => {
    }), m = la("blur", (N) => {
    }), g = la("select", (N) => {
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
        g(V);
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
    Chip: bs,
    Label: Zs,
    PreIcon: Ss
  }
});
function eE(e, r, o, i, s, c) {
  const d = _t("PreIcon"), f = _t("Label"), m = _t("Chip");
  return yt(), Hn(m, {
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
      e.hasIcon ? (yt(), Hn(d, { key: 0 }, {
        default: bn(() => [
          un(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : va("", !0),
      Ms(f, { id: e.labelId }, {
        default: bn(() => [
          un(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var tE = /* @__PURE__ */ qn(KS, [["render", eE], ["__scopeId", "data-v-bbcc2f70"]]);
const nE = {
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
}, Bp = Ln({
  props: nE,
  setup() {
    return { format: la("chipListFormat", "") };
  },
  render() {
    const e = (r) => bS(r, fo(fo({}, this.$props), this.$attrs), fo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(jS) : this.format === "radio" ? e(tE) : e(qS);
  }
}), rE = {
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
}, oE = Ln({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: rE,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    ZS("chipListFormat", o);
    const i = o === "single";
    if (o === "radio") {
      const d = Vv(e, "modelValue");
      return wv(fo({
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
}), aE = ["aria-label"];
function iE(e, r, o, i, s, c) {
  return yt(), Ea("div", hu(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...d) => e.keydown && e.keydown(...d))
  }), [
    un(e.$slots, "default", {}, void 0, !0)
  ], 16, aE);
}
var sE = /* @__PURE__ */ qn(oE, [["render", iE], ["__scopeId", "data-v-1e06f41d"]]);
const lE = window.Vue.defineComponent, cE = window.Vue.normalizeClass, uE = window.Vue.openBlock, dE = window.Vue.createElementBlock, fE = window.Vue.createCommentVNode, hE = /* @__PURE__ */ lE({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (uE(), dE("span", {
      key: 0,
      class: cE(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : fE("", !0);
  }
});
const pE = /* @__PURE__ */ we(hE, [["__scopeId", "data-v-e08880d6"]]), mE = window.Vue.defineComponent, jo = window.Vue.unref, gv = window.Vue.createTextVNode, yc = window.Vue.normalizeClass, Nc = window.Vue.withCtx, wE = window.Vue.createVNode, vE = window.Vue.renderList, VE = window.Vue.Fragment, Fi = window.Vue.openBlock, gE = window.Vue.createElementBlock, Rc = window.Vue.createBlock, _p = window.Vue.createCommentVNode, TE = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UE = /* @__PURE__ */ gv(" ALL "), Ip = window.Vue.ref, yE = window.Vue.watch, NE = window.Vue.computed, RE = window.Vue.reactive, kE = /* @__PURE__ */ mE({
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
    const o = e, i = Ip(!1), s = NE(() => me.exports.keys(me.exports.groupBy(o.alarms, o.property))), c = Ip(
      (m = o.preSelected) != null && m.length ? o.preSelected : ["all"]
    ), d = RE({
      alarms: o.alarms
    }), f = (g) => {
      c.value = c.value.filter((V) => V !== "all"), c.value.includes(g) ? c.value = c.value.filter((V) => V !== g) : c.value.push(g), (g === "all" || c.value.length === 0) && (c.value = ["all"]), r("selected-option", c.value);
    };
    return yE(o, () => {
      var g;
      c.value = (g = o.preSelected) != null && g.length ? o.preSelected : ["all"], d.alarms = o.alarms, i.value = !1;
    }), (g, V) => jo(s).length > 0 ? (Fi(), Rc(jo(sE), {
      key: c.value.toString(),
      condensed: "",
      label: "",
      class: yc({ vertical: o.isVertical })
    }, {
      default: Nc(() => [
        wE(jo(Bp), {
          class: yc({ clicked: c.value.includes("all") }),
          onClick: V[0] || (V[0] = (U) => f("all"))
        }, {
          default: Nc(() => [
            UE
          ]),
          _: 1
        }, 8, ["class"]),
        (Fi(!0), gE(VE, null, vE(jo(s), (U) => (Fi(), Rc(jo(Bp), {
          class: yc([
            { clicked: c.value.includes(U) },
            `${U == null ? void 0 : U.toLowerCase()}-bg`
          ]),
          key: U,
          onClick: (N) => f(U)
        }, {
          default: Nc(() => [
            e.property == "severity" ? (Fi(), Rc(pE, {
              key: 0,
              severity: U
            }, null, 8, ["severity"])) : _p("", !0),
            gv(TE(U), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : _p("", !0);
  }
});
const Va = /* @__PURE__ */ we(kE, [["__scopeId", "data-v-4dac26de"]]);
var ME = Object.defineProperty, bE = Object.defineProperties, ZE = Object.getOwnPropertyDescriptors, Dp = Object.getOwnPropertySymbols, SE = Object.prototype.hasOwnProperty, EE = Object.prototype.propertyIsEnumerable, Op = (e, r, o) => r in e ? ME(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, $o = (e, r) => {
  for (var o in r || (r = {}))
    SE.call(r, o) && Op(e, o, r[o]);
  if (Dp)
    for (var o of Dp(r))
      EE.call(r, o) && Op(e, o, r[o]);
  return e;
}, Qp = (e, r) => bE(e, ZE(r));
const JE = window.Vue.defineComponent, AE = window.Vue.inject, Xo = window.Vue.h;
var FE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const CE = {
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
}, WE = JE({
  inheritAttrs: !1,
  props: CE,
  setup() {
    return { hasTooltip: AE("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, r = this.asAnchor ? "a" : "button", o = {}, i = $o({}, this.$attrs);
    o.attrs = i || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const s = e();
    o.class = [this.$attrs.class].concat(s), this.$slots.icon && o.class.push("has-icon");
    let c = Xo(Xn);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), Xo(r, Qp($o($o({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Xo(Xn, { center: !0 })
      ]);
    }
    const d = Xo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Xo(r, Qp($o($o({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var ge = /* @__PURE__ */ FE(WE, [["__scopeId", "data-v-702d1074"]]);
const xE = window.Vue.openBlock, BE = window.Vue.createElementBlock, _E = window.Vue.createElementVNode;
var IE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const DE = {}, OE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QE = /* @__PURE__ */ _E("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), zE = [
  QE
];
function GE(e, r) {
  return xE(), BE("svg", OE, zE);
}
var Tv = /* @__PURE__ */ IE(DE, [["render", GE]]);
const YE = window.Vue.openBlock, PE = window.Vue.createElementBlock, HE = window.Vue.createElementVNode;
var jE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const $E = {}, XE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LE = /* @__PURE__ */ HE("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), qE = [
  LE
];
function KE(e, r) {
  return YE(), PE("svg", XE, qE);
}
var Iu = /* @__PURE__ */ jE($E, [["render", KE]]);
const eJ = window.Vue.openBlock, tJ = window.Vue.createElementBlock, Uv = window.Vue.createElementVNode;
var nJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const rJ = {}, oJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aJ = /* @__PURE__ */ Uv("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), iJ = /* @__PURE__ */ Uv("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), sJ = [
  aJ,
  iJ
];
function lJ(e, r) {
  return eJ(), tJ("svg", oJ, sJ);
}
var cJ = /* @__PURE__ */ nJ(rJ, [["render", lJ]]);
const uJ = window.Vue.watch, dJ = window.Vue.onBeforeUnmount, fJ = window.Vue.ref, hJ = window.Vue.onMounted, pJ = (e) => {
  const r = fJ(!1);
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
  return hJ(() => {
    const d = uJ(r, (f) => {
      window && f ? window.addEventListener("resize", s) : c();
    }, {
      immediate: !0
    });
    dJ(() => {
      d(), c();
    });
  }), r;
}, mJ = window.Vue.watch, wJ = window.Vue.onBeforeUnmount, vJ = window.Vue.ref, VJ = window.Vue.onMounted, gJ = (e, r) => {
  const o = vJ(!1), i = (d) => {
    d.target === window && r(d);
  }, s = (d) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((g) => g && g.contains(d.target)) || r(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", i));
  };
  return VJ(() => {
    const d = mJ(o, (f) => {
      document && window && f ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", i)) : c();
    }, {
      immediate: !0
    });
    wJ(() => {
      d(), c();
    });
  }), o;
}, TJ = window.Vue.watch, UJ = window.Vue.onBeforeUnmount, yJ = window.Vue.ref, yv = (e, r) => {
  const o = yJ(!1);
  let i = !1;
  const s = (m) => {
    r(m), i = !1;
  };
  function c(m) {
    i || (requestAnimationFrame(() => s(m)), i = !0);
  }
  const d = () => {
    e.value && e.value.removeEventListener("scroll", c, !0);
  }, f = TJ([e, o], ([m, g], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", c, !0), g && m ? m.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return UJ(() => {
    f(), d();
  }), o;
}, NJ = window.Vue.defineComponent, yn = window.Vue.ref, zp = window.Vue.toRef, RJ = window.Vue.onMounted, kJ = window.Vue.watch, Gp = window.Vue.computed, MJ = window.Vue.nextTick, Yp = window.Vue.openBlock, Pp = window.Vue.createElementBlock, Hp = window.Vue.renderSlot, bJ = window.Vue.normalizeClass, ZJ = window.Vue.normalizeStyle, SJ = window.Vue.createCommentVNode;
var EJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const JJ = {
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
}, AJ = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, FJ = NJ({
  emits: AJ,
  props: JJ,
  setup(e, r) {
    const o = yn(), i = yn(), s = zp(e, "open"), c = zp(e, "noExpand"), d = yn("auto"), f = yn(), m = yn(e.triggerId || ie("feather-menu-trigger")), g = yn(ie("feather-menu-dropdown")), V = yn(""), U = yn("");
    RJ(() => {
      f.value = window;
    });
    const N = yn(!1), F = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), E = () => {
      if (!i.value)
        return;
      const k = o.value.getBoundingClientRect();
      N.value = !0, d.value = "auto", MJ(() => {
        let { height: W, width: I } = i.value.getBoundingClientRect();
        const G = F(), z = G.height, Q = G.width;
        e.fill && I < k.width ? (d.value = k.width + "px", I = k.width) : d.value = I + "px";
        let L = 0;
        z - k.bottom < W && k.top >= W ? (L = k.top - W, e.cover && (L += k.height)) : (L = k.bottom, e.cover && (L -= k.height));
        let ye = e.right ? k.right - I : k.left;
        !e.right && k.right >= I && Q - k.left < I && (ye = k.right - I), e.right && k.right <= I && Q - k.left > I && (ye = k.left), U.value = `${ye}px`, V.value = `${L}px`, N.value = !1;
      });
    }, C = gJ(o, (k) => {
      r.emit("outside-click", k);
    }), A = pJ(E), x = yv(f, E);
    kJ([s, i], ([k, W]) => {
      k && W && E(), C.value = k, A.value = k, x.value = k;
    });
    const _ = Gp(() => {
      const k = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return s.value && (k["aria-controls"] = g.value), c.value || (k["aria-expanded"] = s.value ? "true" : "false"), k;
    }), Y = Gp(() => ({
      click: (k) => {
        r.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: V,
      positionLeft: U,
      triggerId: m,
      triggerAttrs: _,
      triggerListeners: Y,
      menuId: g,
      menu: i,
      menuWidth: d,
      root: o,
      calculatePosition: E,
      calculating: N
    };
  }
}), CJ = ["data-ref-id"], WJ = ["data-ref-id", "id"];
function xJ(e, r, o, i, s, c) {
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
      class: bJ(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: ZJ({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Hp(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, WJ)) : SJ("", !0)
  ], 8, CJ);
}
var Nv = /* @__PURE__ */ EJ(FJ, [["render", xJ], ["__scopeId", "data-v-f75af406"]]), BJ = {
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
const _J = window.Vue.openBlock, IJ = window.Vue.createElementBlock, DJ = window.Vue.createElementVNode;
var OJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const QJ = {}, zJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GJ = /* @__PURE__ */ DJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), YJ = [
  GJ
];
function PJ(e, r) {
  return _J(), IJ("svg", zJ, YJ);
}
var HJ = /* @__PURE__ */ OJ(QJ, [["render", PJ]]);
const jJ = window.Vue.openBlock, $J = window.Vue.createElementBlock, Du = window.Vue.createElementVNode;
var XJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const LJ = {}, qJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KJ = /* @__PURE__ */ Du("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), eA = /* @__PURE__ */ Du("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), tA = /* @__PURE__ */ Du("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), nA = [
  KJ,
  eA,
  tA
];
function rA(e, r) {
  return jJ(), $J("svg", qJ, nA);
}
var oA = /* @__PURE__ */ XJ(LJ, [["render", rA]]);
const aA = window.Vue.openBlock, iA = window.Vue.createElementBlock, sA = window.Vue.createElementVNode;
var lA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const cA = {}, uA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dA = /* @__PURE__ */ sA("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), fA = [
  dA
];
function hA(e, r) {
  return aA(), iA("svg", uA, fA);
}
var Es = /* @__PURE__ */ lA(cA, [["render", hA]]);
const ga = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const i = getComputedStyle(e);
  o += parseInt(i.getPropertyValue("margin-top"), 10), o += parseInt(i.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
};
const te = {
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
const pA = window.Vue.defineComponent, mA = window.Vue.openBlock, wA = window.Vue.createElementBlock, vA = window.Vue.normalizeClass, VA = window.Vue.pushScopeId, gA = window.Vue.popScopeId, pu = window.Vue.createElementVNode;
var TA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const UA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, yA = {
  click: (e) => !0
}, NA = pA({
  emits: yA,
  props: UA,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Rv = (e) => (VA("data-v-07e020f5"), e = e(), gA(), e), RA = /* @__PURE__ */ Rv(() => /* @__PURE__ */ pu("div", { class: "track" }, null, -1)), kA = /* @__PURE__ */ Rv(() => /* @__PURE__ */ pu("div", { class: "switcher" }, [
  /* @__PURE__ */ pu("div", { class: "switch-circle" })
], -1)), MA = [
  RA,
  kA
];
function bA(e, r, o, i, s, c) {
  return mA(), wA("div", {
    class: vA(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, MA, 2);
}
var ZA = /* @__PURE__ */ TA(NA, [["render", bA], ["__scopeId", "data-v-07e020f5"]]), SA = Object.defineProperty, EA = Object.defineProperties, JA = Object.getOwnPropertyDescriptors, jp = Object.getOwnPropertySymbols, AA = Object.prototype.hasOwnProperty, FA = Object.prototype.propertyIsEnumerable, $p = (e, r, o) => r in e ? SA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xp = (e, r) => {
  for (var o in r || (r = {}))
    AA.call(r, o) && $p(e, o, r[o]);
  if (jp)
    for (var o of jp(r))
      FA.call(r, o) && $p(e, o, r[o]);
  return e;
}, Lp = (e, r) => EA(e, JA(r));
const Ou = window.Vue.defineComponent, ur = window.Vue.h, CA = window.Vue.openBlock, WA = window.Vue.createElementBlock, xA = window.Vue.renderSlot;
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
const BA = {
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
}, _A = Ou({
  inheritAttrs: !1,
  props: BA,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (e = ur("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = ur("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = ur("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : ur(Xn);
    if (this.asLi)
      return ur("li", Lp(Xp({}, this.$attrs), {
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
    const c = ur("a", Lp(Xp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, i, s]);
    return ur("li", {}, [c]);
  }
});
var Ja = /* @__PURE__ */ kv(_A, [["__scopeId", "data-v-7c46b2b3"]]);
Ou({
  components: {
    FeatherListItem: Ja
  }
});
const IA = {}, DA = { class: "feather-list" };
function OA(e, r) {
  return CA(), WA("ul", DA, [
    xA(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Qu = /* @__PURE__ */ kv(IA, [["render", OA], ["__scopeId", "data-v-941a1d50"]]);
const QA = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, zA = {
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
  emits: QA,
  props: zA,
  computed: {
    labelId() {
      return ie("switch-label");
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: ZA, FeatherListItem: Ja }
});
var GA = Object.defineProperty, YA = Object.defineProperties, PA = Object.getOwnPropertyDescriptors, qp = Object.getOwnPropertySymbols, HA = Object.prototype.hasOwnProperty, jA = Object.prototype.propertyIsEnumerable, Kp = (e, r, o) => r in e ? GA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Nt = (e, r) => {
  for (var o in r || (r = {}))
    HA.call(r, o) && Kp(e, o, r[o]);
  if (qp)
    for (var o of qp(r))
      jA.call(r, o) && Kp(e, o, r[o]);
  return e;
}, $A = (e, r) => YA(e, PA(r));
const Uo = window.Vue.defineComponent, le = window.Vue.openBlock, Ce = window.Vue.createElementBlock, st = window.Vue.createElementVNode, Lt = window.Vue.toDisplayString, Bt = window.Vue.createCommentVNode, Je = window.Vue.resolveComponent, Wt = window.Vue.createBlock, $e = window.Vue.withCtx, ho = window.Vue.Fragment, ua = window.Vue.renderList, lt = window.Vue.createVNode, zu = window.Vue.withModifiers, Tr = window.Vue.normalizeClass, mu = window.Vue.renderSlot, Mv = window.Vue.createTextVNode, XA = window.Vue.pushScopeId, LA = window.Vue.popScopeId, bv = window.Vue.reactive, Zv = window.Vue.nextTick, kc = window.Vue.markRaw, Mc = window.Vue.toRef, em = window.Vue.computed, qA = window.Vue.toRefs, Hr = window.Vue.ref, bc = window.Vue.mergeProps, tm = window.Vue.toHandlers, Ci = window.Vue.withDirectives, Wi = window.Vue.vShow;
var Js = {
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
}, Rr = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const KA = Uo({
  mixins: [],
  props: Nt(Nt({
    text: {
      type: String,
      required: !0
    }
  }, Js), Gu),
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
}), eF = {
  key: 0,
  class: "highlight"
}, tF = { key: 1 };
function nF(e, r, o, i, s, c) {
  return le(), Ce("span", null, [
    st("span", null, Lt(e.beginning), 1),
    e.highlighted ? (le(), Ce("span", eF, Lt(e.highlighted), 1)) : Bt("", !0),
    e.end ? (le(), Ce("span", tF, Lt(e.end), 1)) : Bt("", !0)
  ]);
}
var Sv = /* @__PURE__ */ Rr(KA, [["render", nF], ["__scopeId", "data-v-8abe2492"]]);
const rF = Uo({
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
  }, Js), Gu),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        ga(r, o.$el);
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
    FeatherListItem: Ja,
    Highlighter: Sv
  }
}), oF = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function aF(e, r, o, i, s, c) {
  const d = Je("Highlighter"), f = Je("FeatherListItem"), m = Je("FeatherList");
  return le(), Wt(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: $e(() => [
      (le(!0), Ce(ho, null, ua(e.items, (g, V) => (le(), Ce(ho, {
        key: g[e.textProp]
      }, [
        lt(f, {
          "as-li": "",
          id: e.getId(V),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(g),
          highlighted: e.isActive(V),
          selected: e.isSelected(g),
          onClick: zu((U) => e.select(g), ["stop"])
        }, {
          default: $e(() => [
            lt(d, {
              highlight: e.highlight,
              query: e.query,
              text: g[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            g._new ? (le(), Ce("span", oF, Lt(e.newLabel), 1)) : Bt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && g._new ? (le(), Ce("li", {
          role: "presentation",
          key: g[e.textProp] + "hr",
          class: "hr"
        })) : Bt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var iF = /* @__PURE__ */ Rr(rF, [["render", aF], ["__scopeId", "data-v-f623434a"]]);
const sF = Uo({
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
  }, Js), Gu),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        ga(r, o);
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
}), lF = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, cF = ["aria-multiselectable"], uF = { role: "row" }, dF = ["aria-selected", "onClick"], fF = ["id", "aria-selected"], hF = { key: 1 };
function pF(e, r, o, i, s, c) {
  const d = Je("Highlighter");
  return le(), Ce("div", lF, [
    st("table", {
      class: Tr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      st("thead", null, [
        st("tr", uF, [
          (le(!0), Ce(ho, null, ua(e.config, (f) => (le(), Ce("th", {
            key: f.title
          }, Lt(f.title), 1))), 128))
        ])
      ]),
      st("tbody", null, [
        (le(!0), Ce(ho, null, ua(e.items, (f, m) => (le(), Ce("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Tr({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: zu((g) => e.select(f), ["stop"])
        }, [
          (le(!0), Ce(ho, null, ua(e.config, (g, V) => (le(), Ce("td", {
            key: f[e.textProp] + g.prop,
            id: e.getId(m, V),
            "aria-selected": e.isSelected(f),
            class: Tr({ "focus-cell": e.isActiveCell(m, V) })
          }, [
            g.prop === e.textProp ? (le(), Wt(d, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[g.prop]
            }, null, 8, ["highlight", "query", "text"])) : (le(), Ce("p", hF, Lt(f[g.prop]), 1))
          ], 10, fF))), 128))
        ], 10, dF))), 128))
      ])
    ], 10, cF)
  ], 512);
}
var mF = /* @__PURE__ */ Rr(sF, [["render", pF], ["__scopeId", "data-v-58c88fd1"]]);
const wF = Uo({
  components: {
    FeatherList: Qu,
    FeatherListItem: Ja
  }
});
function vF(e, r, o, i, s, c) {
  const d = Je("FeatherListItem"), f = Je("FeatherList");
  return le(), Wt(f, { class: "result-list" }, {
    default: $e(() => [
      lt(d, { "as-li": "" }, {
        default: $e(() => [
          mu(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var VF = /* @__PURE__ */ Rr(wF, [["render", vF], ["__scopeId", "data-v-06b752c6"]]);
const gF = Uo({
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
    Cancel: go,
    BaseChip: bs,
    BaseChipLabel: Zs,
    BaseChipPreIcon: Ss
  }
});
function TF(e, r, o, i, s, c) {
  const d = Je("FeatherIcon"), f = Je("BaseChipPreIcon"), m = Je("BaseChipLabel"), g = Je("Cancel"), V = Je("BaseChip");
  return le(), Wt(V, {
    class: Tr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: $e(() => [
      e.showPreIcon ? (le(), Wt(f, { key: 0 }, {
        default: $e(() => {
          var U, N;
          return [
            lt(d, {
              icon: (U = e.pre) == null ? void 0 : U.icon,
              title: (N = e.pre) == null ? void 0 : N.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Bt("", !0),
      lt(m, null, {
        default: $e(() => [
          Mv(Lt(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Bt("", !0) : (le(), Ce("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = zu((...U) => e.handleClick && e.handleClick(...U), ["stop"]))
      }, [
        lt(d, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: $e(() => [
            lt(g)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var UF = /* @__PURE__ */ Rr(gF, [["render", TF], ["__scopeId", "data-v-e0fc6ac0"]]);
const yF = {}, NF = (e) => (XA("data-v-aa720e06"), e = e(), LA(), e), RF = { class: "spinner-container" }, kF = /* @__PURE__ */ NF(() => /* @__PURE__ */ st("svg", {
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
], -1)), MF = [
  kF
];
function bF(e, r) {
  return le(), Ce("div", RF, MF);
}
var ZF = /* @__PURE__ */ Rr(yF, [["render", bF], ["__scopeId", "data-v-aa720e06"]]), As = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(As || {});
const Ev = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, SF = Nt(Nt(Nt({
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
    validator: (e) => !!As[e]
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
}, Js), Za), Bu), EF = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, JF = (e, r, o, i) => {
  if (o.toLowerCase() === As.multi) {
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
        if (c.value && c.value.filter((g) => g[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = c.value ? [...c.value, f] : [f];
        i("update:modelValue", m), d(m);
      },
      removeItem(f) {
        const m = c.value.findIndex((g) => {
          if (f[e.textProp.value] === g[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const g = c.value.slice(0);
          g.splice(m, 1), i("update:modelValue", g), d(g), e.input.value.focus();
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
}, AF = () => {
  const e = bv({
    row: -1
  }), r = (c) => {
    Zv(() => {
      e.row = c;
    });
  }, o = (c, d) => {
    if (c.keyCode === te.DOWN) {
      if (c.preventDefault(), e.row === -1)
        i(), r(0);
      else if (e.row + 1 <= d.length - 1) {
        const f = e.row;
        i(), r(f + 1);
      }
      return !0;
    }
    if (c.keyCode === te.UP) {
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
}, FF = (e) => {
  const r = bv({
    row: -1,
    col: -1
  }), o = (d, f) => {
    Zv(() => {
      r.col = f, r.row = d;
    });
  }, i = (d, f) => {
    if (d.keyCode === te.DOWN) {
      if (d.preventDefault(), r.row === -1)
        s(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const m = r.row, g = r.col;
        s(), o(m + 1, g);
      }
      return !0;
    }
    if (d.keyCode === te.UP) {
      if (d.preventDefault(), r.row === 0)
        s();
      else if (r.row > 0) {
        const m = r.row, g = r.col;
        s(), o(m - 1, g);
      }
      return !0;
    }
    if (d.keyCode === te.RIGHT && r.row !== -1) {
      if (d.preventDefault(), r.col + 1 <= e.length - 1) {
        const m = r.col, g = r.row;
        s(), o(g, m + 1);
      } else if (r.col <= e.length - 1 && r.row + 1 <= f.length - 1) {
        const m = r.row;
        s(), o(m + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === te.LEFT && r.row !== -1) {
      if (d.preventDefault(), r.col === 0 && r.row === 0)
        return !0;
      if (r.col === 0 && r.row > 0) {
        const m = r.row;
        s(), o(m - 1, e.length - 1);
      } else if (r.col > 0) {
        const m = r.col, g = r.row;
        s(), o(g, m - 1);
      }
      return !0;
    }
    if (d.keyCode === te.END && r.row !== -1) {
      d.preventDefault();
      const m = r.row;
      return s(), o(d.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (d.keyCode === te.HOME && r.row !== -1) {
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
}, CF = Uo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: EF,
  props: SF,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== As.multi;
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
      return ie("result-item");
    },
    minCharWarningId() {
      return ie("min-char-warning");
    },
    subTextId() {
      return ie("feather-autocomplete-description");
    },
    resultsId() {
      return ie("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ie("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return kc(HJ);
    },
    minCharIcon() {
      return kc(oA);
    },
    dropdownIcon() {
      return kc(Es);
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
        ga(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          ga(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = ie("active-chip"), this.activeChipId;
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
      o !== void 0 && (yr(this.typingTimeout), this.typingTimeout = Ur(() => {
        this.query = o, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const r = () => {
        this.activeChipIndex = -1;
      }, o = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === te.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        r(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === te.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const i = this.modelValue;
        this.removeFromValue(i[this.activeChipIndex]), r();
        return;
      }
      if (e.keyCode === te.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === te.ENTER || e.keyCode === te.SPACE || e.keyCode === te.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === te.ESCAPE) {
        this.forceCloseResults = !0, o(), r();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const i = this.modelValue;
        e.keyCode === te.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = i.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === te.RIGHT && (e.preventDefault(), this.activeChipIndex === i.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < i.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === te.DELETE || e.keyCode === te.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(i[this.activeChipIndex]), o(), r());
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
    const o = ks(Mc(e, "labels"), Ev);
    Sa(e), _u(e);
    let i;
    e.gridConfig ? i = FF(e.gridConfig) : i = AF();
    const s = Mc(e, "id"), c = em(() => s.value ? s.value : ie("feather-autocomplete-input")), { validate: d } = Ma(c, Mc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: g, allowNew: V, type: U, minChar: N } = qA(e), F = Hr(!1), E = Hr(!1), b = Hr(!1), C = Hr(""), A = Hr([]), x = Hr(), _ = em(() => x.value), Y = () => {
      F.value && !E.value && (C.value && C.value.length >= N.value && r.emit("search", C.value), N.value <= 0 && r.emit("search", C.value || ""), A.value = [], i.reset());
    }, k = JF({
      selectionLimit: f,
      selectionLimitReached: E,
      modelValue: m,
      textProp: g,
      allowNew: V,
      forceCloseResults: b,
      query: C,
      internalResults: A,
      input: _,
      emitSearch: Y
    }, i, U.value, r.emit);
    return $A(Nt(Nt({}, o), ba(r.attrs)), {
      query: C,
      internalResults: A,
      selectionLimitReached: E,
      forceCloseResults: b,
      hasFocus: F,
      strategy: k,
      emitSearch: Y,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: c,
      input: x,
      incomingId: s,
      inputRef: _,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: xu,
    InputSubText: ka,
    AutocompleteResults: iF,
    AutocompleteResultsGrid: mF,
    Chip: UF,
    MenuMessage: VF,
    FeatherIcon: $,
    FeatherMenu: Nv,
    Spinner: ZF
  }
}), WF = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, xF = ["id"], BF = { "data-ref-id": "feather-autocomplete-no-results" }, _F = { "data-ref-id": "feather-autocomplete-selection-limit" }, IF = { "data-ref-id": "feather-autocomplete-min-char" };
function DF(e, r, o, i, s, c) {
  const d = Je("FeatherIcon"), f = Je("Chip"), m = Je("InputWrapper"), g = Je("AutocompleteResults"), V = Je("AutocompleteResultsGrid"), U = Je("MenuMessage"), N = Je("Spinner"), F = Je("FeatherMenu"), E = Je("InputSubText");
  return le(), Ce("div", bc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    lt(F, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Tr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: $e(({ attrs: b, on: C }) => [
        lt(m, bc(Nt(Nt({}, b), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, tm(C), { ref: "scroll" }), {
          pre: $e(() => [
            mu(e.$slots, "pre", {}, () => [
              lt(d, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: $e(() => [
            lt(d, {
              icon: e.dropdownIcon,
              class: Tr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: $e(() => [
            st("div", {
              class: Tr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              st("div", WF, null, 512),
              st("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Lt(e.selectedDescribedByText), 9, xF),
              (le(!0), Ce(ho, null, ua(e.modelValueList, (A, x) => Ci((le(), Wt(f, {
                key: A[e.textProp],
                role: "button",
                id: x === e.activeChipIndex ? e.activeChipId : null,
                focused: x === e.activeChipIndex,
                disabled: e.disabled,
                text: A[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(A),
                onDelete: (_) => e.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Wi, !e.singleSelect]
              ])), 128)),
              st("textarea", bc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, tm(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: $e(() => [
        e.gridConfig ? Bt("", !0) : Ci((le(), Wt(g, {
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
          [Wi, e.showResults]
        ]),
        e.gridConfig ? Ci((le(), Wt(V, {
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
          [Wi, e.showResults]
        ]) : Bt("", !0),
        e.showNoResults ? (le(), Wt(U, { key: 2 }, {
          default: $e(() => [
            st("span", BF, Lt(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Bt("", !0),
        e.showSelectionLimit ? (le(), Wt(U, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: $e(() => [
            lt(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            st("span", _F, Lt(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Bt("", !0),
        e.minChar ? Ci((le(), Wt(U, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: $e(() => [
            lt(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            st("span", IF, [
              mu(e.$slots, "min-char", {}, () => [
                Mv(Lt(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Wi, e.showMinCharWarning]
        ]) : Bt("", !0),
        e.showLoading ? (le(), Wt(N, { key: 5 })) : Bt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    lt(E, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var OF = /* @__PURE__ */ Rr(CF, [["render", DF], ["__scopeId", "data-v-43a7e951"]]);
const QF = window.Vue.defineComponent, Zc = window.Vue.unref, zF = window.Vue.createVNode, GF = window.Vue.createElementVNode, YF = window.Vue.withCtx, PF = window.Vue.openBlock, HF = window.Vue.createBlock, jF = window.Vue.pushScopeId, $F = window.Vue.popScopeId, XF = (e) => (jF("data-v-59f119ff"), e = e(), $F(), e), LF = /* @__PURE__ */ XF(() => /* @__PURE__ */ GF("span", null, "New Situation", -1)), qF = window.VueRouter.useRouter, KF = window.Vue.markRaw, eC = /* @__PURE__ */ QF({
  __name: "NewSituationBtn",
  setup(e) {
    const r = qF(), o = KF({
      Add: Iu
    }), i = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (s, c) => (PF(), HF(Zc(ge), {
      class: "new-situation-btn",
      onClick: c[0] || (c[0] = () => i())
    }, {
      default: YF(() => [
        zF(Zc($), {
          icon: Zc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        LF
      ]),
      _: 1
    }));
  }
});
const Jv = /* @__PURE__ */ we(eC, [["__scopeId", "data-v-59f119ff"]]), tC = window.Vue.defineComponent, an = window.Vue.createElementVNode, On = window.Vue.unref, Nn = window.Vue.createVNode, nm = window.Vue.withCtx, xi = window.Vue.toDisplayString, nC = window.Vue.renderList, rC = window.Vue.Fragment, jr = window.Vue.openBlock, $r = window.Vue.createElementBlock, Sc = window.Vue.createCommentVNode, oC = window.Vue.pushScopeId, aC = window.Vue.popScopeId, Yu = (e) => (oC("data-v-9779bccb"), e = e(), aC(), e), iC = { class: "list-main" }, sC = { class: "header" }, lC = /* @__PURE__ */ Yu(() => /* @__PURE__ */ an("h2", null, "Situation List", -1)), cC = /* @__PURE__ */ Yu(() => /* @__PURE__ */ an("span", null, "View Unassociated Alarms", -1)), uC = { class: "filters" }, dC = /* @__PURE__ */ Yu(() => /* @__PURE__ */ an("span", null, "Reset Filters", -1)), fC = { class: "autocomplete" }, hC = {
  key: 0,
  class: "container"
}, pC = { class: "situation-list" }, mC = {
  key: 0,
  class: "footer-pager"
}, wC = {
  key: 1,
  class: "container"
}, vC = window.Vue.reactive, Lo = window.Vue.ref, VC = window.Vue.watch, gC = window.Vue.markRaw, TC = window.VueRouter.useRouter, UC = /* @__PURE__ */ tC({
  __name: "SituationList",
  setup(e) {
    const r = gC({
      Add: Iu,
      View: cJ
    }), o = TC(), i = Sn();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms();
    const s = 9, c = vC({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), d = Lo(!1), f = Lo(0), m = Lo(1), g = Lo(0), V = Lo(!1), U = (k) => {
      f.value = 0, c.situations = k[0], m.value = k.length;
    }, N = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    VC(
      () => i.situations,
      () => {
        N(), g.value = i.situations.length, c.allSituations = me.exports.chunk(i.situations, s);
        const k = i.situations.map((W) => W.id);
        i.filteredSituations = k, U(c.allSituations), F();
      }
    );
    const F = () => {
      i.filters && (i.filters.node && (c.nodeSelectedValue = i.filters.node), i.filters.severities && (c.filterSeverities = i.filters.severities), b(), i.filters = null);
    }, E = (k) => {
      if (!k)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((W) => W.label.toLowerCase().indexOf(k) > -1).map((W) => ({
        _text: W.label,
        id: W.id
      })), d.value = !1;
    }, b = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let k = i.situations.map((W) => {
          if (W.relatedAlarms.filter(
            (G) => {
              var z;
              return G.nodeLabel === ((z = c.nodeSelectedValue) == null ? void 0 : z._text);
            }
          ).length > 0)
            return W;
        }).filter((W) => W);
        if (k) {
          c.filterSeverities.includes("all") || (k = k.filter(
            (I) => c.filterSeverities.includes(I.severity)
          )), g.value = k.length, c.situations = k;
          const W = k.map((I) => I.id);
          i.filteredSituations = W, V.value = !0;
        }
      } else if (c.nodeSelectedValue = void 0, c.filterSeverities.includes("all"))
        Y();
      else {
        const k = i.situations.filter(
          (I) => c.filterSeverities.includes(I.severity)
        );
        c.situations = k, g.value = k.length;
        const W = k.map((I) => I.id);
        V.value = !0, i.filteredSituations = W;
      }
    }, C = (k) => {
      f.value = k, c.situations = c.allSituations[f.value];
    }, A = (k) => {
      (c.nodeSelectedValue || c.filterSeverities.length) && (i.filters = {
        node: c.nodeSelectedValue,
        severities: c.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: k
        }
      });
    }, x = (k) => {
      k.includes("all") && !c.nodeSelectedValue ? Y() : (c.filterSeverities = k, b());
    }, _ = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, Y = () => {
      c.filterSeverities = ["all"], c.nodeSelectedValue = void 0;
      const k = i.situations.map((W) => W.id);
      i.filteredSituations = k, g.value = i.situations.length, U(c.allSituations), V.value = !1;
    };
    return (k, W) => (jr(), $r("div", iC, [
      an("div", sC, [
        lC,
        an("div", null, [
          Nn(On(ge), {
            class: "view-situation-btn",
            onClick: W[0] || (W[0] = () => _())
          }, {
            default: nm(() => [
              Nn(On($), {
                icon: On(r).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              cC
            ]),
            _: 1
          }),
          Nn(Jv)
        ])
      ]),
      an("div", uC, [
        Nn(On(ge), {
          class: "reset-btn",
          onClick: W[1] || (W[1] = () => Y())
        }, {
          default: nm(() => [
            Nn(On($), {
              icon: On(Tv),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            dC
          ]),
          _: 1
        }),
        Nn(Va, {
          alarms: On(i).situations,
          onSelectedOption: x,
          property: "severity"
        }, null, 8, ["alarms"]),
        an("div", fC, [
          Nn(On(OF), {
            class: "map-search",
            label: "Find by node",
            loading: d.value,
            modelValue: c.nodeSelectedValue,
            "onUpdate:modelValue": [
              W[2] || (W[2] = (I) => c.nodeSelectedValue = I),
              b
            ],
            results: c.results,
            type: "single",
            onSearch: E
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      c.situations && c.situations.length > 0 ? (jr(), $r("div", hC, [
        an("div", null, " Result: " + xi(c.situations.length) + " of " + xi(g.value), 1),
        an("div", pC, [
          (jr(!0), $r(rC, null, nC(c.situations, (I) => (jr(), $r("div", {
            class: "card",
            key: I.id
          }, [
            Nn(uv, {
              onClick: () => A(I.id),
              "situation-info": I
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !V.value && g.value > s ? (jr(), $r("div", mC, [
          an("div", null, "Page: " + xi(f.value + 1) + " of " + xi(m.value), 1),
          Nn(nZ, {
            onGoToPage: C,
            currentPage: f.value,
            totalPages: m.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : Sc("", !0)
      ])) : Sc("", !0),
      !c.situations || c.situations.length == 0 ? (jr(), $r("div", wC, " No results found ")) : Sc("", !0)
    ]));
  }
});
const yC = /* @__PURE__ */ we(UC, [["__scopeId", "data-v-9779bccb"]]);
const Bi = window.Vue.ref, NC = window.Vue.inject, RC = window.Vue.computed, kC = window.Vue.onMounted, Av = {
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
}, Fv = (e) => {
  const r = Bi(!1), o = Bi(), i = Bi(e.controls), s = Bi(e.id), c = () => {
    o.value && o.value.focus();
  }, d = NC("registerTab");
  kC(() => {
    if (o.value && d) {
      const m = o.value.parentElement, g = m && m.parentElement ? m.parentElement : void 0, V = Array.from(g ? g.children : []).filter((N) => N.querySelectorAll("[role=tab]").length), U = m ? V.indexOf(m) : -1;
      d({
        el: o.value,
        focus: c,
        disabled: e.disabled,
        selected: r,
        id: s,
        controls: i,
        index: U
      });
    }
  });
  const f = RC(() => ({
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
}, rm = window.Vue.ref, MC = window.Vue.toRef, bC = window.Vue.watch, om = window.Vue.provide, Cv = {
  prop: "modelValue",
  event: "update:modelValue"
}, Wv = {
  "update:modelValue": (e) => !0
}, xv = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, Bv = (e, r) => {
  const o = MC(e, "modelValue"), i = rm(e.modelValue), s = rm([]);
  bC(o, (E) => {
    m(E);
  });
  const c = (E) => {
    E.preventDefault(), s.value.some((b, C) => b.tab && b.tab.el.contains(E.target) ? (f(C), m(C), !0) : !1);
  }, d = (E) => {
    if (((G) => G.shiftKey || G.ctrlKey || G.metaKey || G.altKey)(E))
      return;
    const C = E.keyCode, A = (G) => {
      G.stopPropagation(), G.preventDefault();
    }, x = s.value.filter((G) => G.tab && !G.tab.disabled), _ = s.value.findIndex((G) => G.tab && G.tab.el.contains(document.activeElement));
    let Y = _ !== -1 ? _ : i.value;
    const k = [te.RIGHT], W = [te.LEFT], I = [te.ENTER, te.SPACE];
    e.vertical && (k.push(te.DOWN), W.push(te.UP)), k.indexOf(C) > -1 ? (Y++, Y >= x.length && (Y = 0), A(E), f(s.value.indexOf(x[Y]))) : W.indexOf(C) > -1 && (Y--, Y < 0 && (Y = x.length - 1), A(E), f(s.value.indexOf(x[Y]))), I.indexOf(C) > -1 && m(Y);
  }, f = (E) => {
    s.value.forEach(function(b, C) {
      E === C && b.tab && b.tab.focus();
    });
  }, m = (E) => {
    const b = s.value[E];
    !b || b.tab && b.tab.disabled || (s.value.forEach((C, A) => {
      C.tab && (C.tab.selected = E === A), C.panel && (C.panel.selected = E === A);
    }), i.value = E, r.emit("update:modelValue", E));
  };
  om("registerTab", (E) => {
    const b = E.index;
    b > -1 && (s.value[b] = { ...s.value[b], tab: E }, s.value = [...s.value], U());
  }), om("registerPanel", (E) => {
    const b = E.index;
    b > -1 && (s.value[b] = {
      ...s.value[b],
      panel: E
    }, s.value = [...s.value], U());
  });
  const U = () => {
    s.value.forEach(({ tab: E, panel: b }, C) => {
      if (b && E) {
        const A = E.id || ie("tab"), x = E.controls || ie("panel");
        E.controls = x, E.id = A, b.tab = A, b.id = x;
      }
      C === i.value && (b && (b.selected = !0), E && (E.selected = !0));
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
}, _i = window.Vue.ref, ZC = window.Vue.inject, SC = window.Vue.computed, EC = window.Vue.onMounted, _v = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, Iv = (e) => {
  const r = _i(!1), o = _i(), i = _i(e.tab), s = _i(e.id), c = ZC("registerPanel");
  EC(() => {
    if (c) {
      const f = o.value, m = f && f.parentElement ? f.parentElement : void 0, g = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      c({
        selected: r,
        id: s,
        tab: i,
        el: o.value,
        index: g
      });
    }
  });
  const d = SC(() => ({
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
}, Pu = window.Vue.defineComponent, JC = window.Vue.resolveComponent, Hu = window.Vue.openBlock, ju = window.Vue.createElementBlock, da = window.Vue.createElementVNode, Dv = window.Vue.mergeProps, ws = window.Vue.renderSlot, AC = window.Vue.createVNode, FC = window.Vue.normalizeStyle, CC = window.Vue.toHandlers, WC = window.Vue.withDirectives, xC = window.Vue.normalizeProps, BC = window.Vue.guardReactiveProps, _C = window.Vue.vShow;
var $u = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const IC = Av, DC = Pu({
  props: IC,
  setup(e) {
    return Fv(e);
  },
  components: {
    FeatherRipple: Xn
  }
}), OC = { role: "presentation" }, QC = { class: "tab-text" };
function zC(e, r, o, i, s, c) {
  const d = JC("FeatherRipple");
  return Hu(), ju("li", OC, [
    da("button", Dv(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      da("span", QC, [
        ws(e.$slots, "default", {}, void 0, !0)
      ]),
      AC(d)
    ], 16)
  ]);
}
var am = /* @__PURE__ */ $u(DC, [["render", zC], ["__scopeId", "data-v-e6bb52b6"]]);
const GC = xv, YC = Wv, PC = Pu({
  model: Cv,
  emits: YC,
  props: GC,
  setup(e, r) {
    return Bv(e, r);
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
}), HC = { class: "feather-tab-container" }, jC = { class: "tab-panels" };
function $C(e, r, o, i, s, c) {
  return Hu(), ju("div", HC, [
    da("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: FC({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    da("ul", Dv(e.attrs, CC(e.listeners)), [
      ws(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    da("div", jC, [
      ws(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var XC = /* @__PURE__ */ $u(PC, [["render", $C], ["__scopeId", "data-v-27adffb9"]]);
const LC = _v, qC = Pu({
  props: LC,
  setup(e) {
    return Iv(e);
  }
});
function KC(e, r, o, i, s, c) {
  return WC((Hu(), ju("div", xC(BC(e.attrs)), [
    ws(e.$slots, "default")
  ], 16)), [
    [_C, e.selected]
  ]);
}
var im = /* @__PURE__ */ $u(qC, [["render", KC]]);
const eW = window.Vue.defineComponent, tW = window.Vue.toDisplayString, nW = window.Vue.normalizeClass, rW = window.Vue.openBlock, oW = window.Vue.createElementBlock, aW = window.Vue.createCommentVNode, iW = /* @__PURE__ */ eW({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (rW(), oW("span", {
      key: 0,
      class: nW(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, tW(r.severity), 3)) : aW("", !0);
  }
});
const Ov = /* @__PURE__ */ we(iW, [["__scopeId", "data-v-83c2cdce"]]), sW = window.Vue.defineComponent, sm = window.Vue.toDisplayString, lm = window.Vue.createElementVNode, lW = window.Vue.openBlock, cW = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const uW = { class: "box" }, dW = { class: "label" }, fW = { class: "date" }, hW = /* @__PURE__ */ sW({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (lW(), cW("div", uW, [
      lm("div", dW, sm(r.label), 1),
      lm("div", fW, sm(r.info), 1)
    ]));
  }
});
const Ec = /* @__PURE__ */ we(hW, [["__scopeId", "data-v-b4afa751"]]), Xu = "/alec", pW = "/alec/engine/configuration", Qv = "/alec/agreement/configuration", mW = "/alec/situation", zv = async (e) => {
  try {
    return (await dn.post(`${Qv}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, wW = async () => {
  try {
    const e = await dn.get(`${Qv}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, vW = async (e, r) => {
  try {
    return (await dn.post(pW, {
      distanceMeasureName: r ? Ut.HELLINGER_OPTION : Ut.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Gv = async (e, r) => {
  try {
    return (await dn.post(`${Xu}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, cm = async (e, r) => {
  try {
    return (await dn.delete(`${Xu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Yv = async (e, r) => {
  try {
    return (await dn.put(`${Xu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, VW = async (e) => {
  try {
    return (await dn.post(mW, e)).status === 200;
  } catch {
    return !1;
  }
}, gW = window.Vue.defineComponent, TW = window.Vue.unref, UW = window.Vue.renderList, yW = window.Vue.Fragment, Jc = window.Vue.openBlock, Ac = window.Vue.createElementBlock, NW = window.Vue.toDisplayString, RW = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kW = { class: "alarms-list" }, MW = /* @__PURE__ */ gW({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Jc(), Ac("div", kW, [
      (Jc(!0), Ac(yW, null, UW(TW(me.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (s, c) => (Jc(), Ac("div", {
        class: RW(["alarm-count", [`${c.toString().toLowerCase()}-color`, r.size]]),
        key: c
      }, NW(s.length), 3))), 128))
    ]));
  }
});
const bW = /* @__PURE__ */ we(MW, [["__scopeId", "data-v-52d63440"]]), ZW = window.Vue.openBlock, SW = window.Vue.createElementBlock, EW = window.Vue.createElementVNode;
var JW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const AW = {}, FW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CW = /* @__PURE__ */ EW("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), WW = [
  CW
];
function xW(e, r) {
  return ZW(), SW("svg", FW, WW);
}
var BW = /* @__PURE__ */ JW(AW, [["render", xW]]);
const _W = window.Vue.openBlock, IW = window.Vue.createElementBlock, DW = window.Vue.createStaticVNode;
var OW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const QW = {}, zW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GW = /* @__PURE__ */ DW('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), YW = [
  GW
];
function PW(e, r) {
  return _W(), IW("svg", zW, YW);
}
var Pv = /* @__PURE__ */ OW(QW, [["render", PW]]);
const HW = window.Vue.defineComponent, Pt = window.Vue.unref, Fc = window.Vue.createVNode, Lu = window.Vue.createElementVNode, Cc = window.Vue.withCtx, Ii = window.Vue.openBlock, Wc = window.Vue.createBlock, xc = window.Vue.createCommentVNode, jW = window.Vue.normalizeClass, $W = window.Vue.createElementBlock, XW = window.Vue.pushScopeId, LW = window.Vue.popScopeId, qu = (e) => (XW("data-v-e073070b"), e = e(), LW(), e), qW = /* @__PURE__ */ qu(() => /* @__PURE__ */ Lu("span", null, "Acknowledge", -1)), KW = /* @__PURE__ */ qu(() => /* @__PURE__ */ Lu("span", null, "Escalate", -1)), ex = /* @__PURE__ */ qu(() => /* @__PURE__ */ Lu("span", null, "Clear", -1)), tx = /* @__PURE__ */ HW({
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
      await Qk(r.alarm.id, c) && o.getSituation(r.situationId), r.isSituation && await Gv(
        r.situationId,
        Ut.ACCEPTED.toLowerCase()
      );
    }, s = async (c) => {
      await zk(r.alarm.id, c) && o.getSituation(r.situationId);
    };
    return (c, d) => (Ii(), $W("div", {
      class: jW(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? xc("", !0) : (Ii(), Wc(Pt(ge), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => i(!0))
      }, {
        default: Cc(() => [
          Fc(Pt($), {
            icon: Pt(Na),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          qW
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ii(), Wc(Pt(ge), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Pt(Ut).ESCALATE))
      }, {
        default: Cc(() => [
          Fc(Pt($), {
            icon: Pt(BW),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          KW
        ]),
        _: 1
      })) : xc("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ii(), Wc(Pt(ge), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Pt(Ut).CLEAR))
      }, {
        default: Cc(() => [
          Fc(Pt($), {
            icon: Pt(Pv),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          ex
        ]),
        _: 1
      })) : xc("", !0)
    ], 2));
  }
});
const Hv = /* @__PURE__ */ we(tx, [["__scopeId", "data-v-e073070b"]]);
var nx = Object.defineProperty, rx = Object.defineProperties, ox = Object.getOwnPropertyDescriptors, um = Object.getOwnPropertySymbols, ax = Object.prototype.hasOwnProperty, ix = Object.prototype.propertyIsEnumerable, dm = (e, r, o) => r in e ? nx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, wu = (e, r) => {
  for (var o in r || (r = {}))
    ax.call(r, o) && dm(e, o, r[o]);
  if (um)
    for (var o of um(r))
      ix.call(r, o) && dm(e, o, r[o]);
  return e;
}, jv = (e, r) => rx(e, ox(r));
const $v = window.Vue.defineComponent, sx = window.Vue.inject, lx = window.Vue.resolveComponent, Bc = window.Vue.openBlock, fm = window.Vue.createElementBlock, co = window.Vue.createElementVNode, cx = window.Vue.createBlock, hm = window.Vue.createCommentVNode, ux = window.Vue.renderSlot, dx = window.Vue.pushScopeId, fx = window.Vue.popScopeId, _c = window.Vue.toRef, Di = window.Vue.computed, hx = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var px = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const mx = {
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
}, wx = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, vx = $v({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: wx,
  props: mx,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: sx("registerCheckbox", (r) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ie("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ie("checkbox-label");
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Xn
  }
}), Vx = (e) => (dx("data-v-a7af27e2"), e = e(), fx(), e), gx = { class: "layout-container" }, Tx = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], Ux = { class: "checkbox hover focus" }, yx = /* @__PURE__ */ Vx(() => /* @__PURE__ */ co("div", { class: "box" }, [
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
], -1)), Nx = ["id", "for"];
function Rx(e, r, o, i, s, c) {
  const d = lx("feather-ripple");
  return Bc(), fm("div", gx, [
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
      co("div", Ux, [
        yx,
        e.disabled ? hm("", !0) : (Bc(), cx(d, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? hm("", !0) : (Bc(), fm("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        ux(e.$slots, "default", {}, void 0, !0)
      ], 8, Nx))
    ], 40, Tx)
  ]);
}
var Aa = /* @__PURE__ */ px(vx, [["render", Rx], ["__scopeId", "data-v-a7af27e2"]]);
const kx = jv(wu({}, Za), {
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
$v({
  props: kx,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    Sa(e);
    const o = _c(e, "error"), i = Di(() => ie("feather-checkbox-group")), s = Di(() => ie("feather-input-description")), c = Di(() => ie("feather-input-label")), d = Di(() => {
      const V = JSON.parse(JSON.stringify(r.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!o.value), jv(wu({}, V), {
        class: "",
        "aria-describedby": s.value
      });
    }), f = hx(i.value), { validate: m } = Ma(f, _c(e, "modelValue"), e.label, e.schema, _c(e, "error"));
    return wu({
      groupId: i,
      inputId: f,
      descriptionId: s,
      labelId: c,
      attrs: d,
      validate: m,
      registerCheckbox: (V) => {
        V && f.value === i.value && (f.value = V);
      }
    }, ba(r.attrs));
  },
  components: {
    InputSubText: ka
  }
});
const Mx = window.Vue.openBlock, bx = window.Vue.createElementBlock, Xv = window.Vue.createElementVNode;
var Zx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Sx = {}, Ex = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Jx = /* @__PURE__ */ Xv("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), Ax = /* @__PURE__ */ Xv("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), Fx = [
  Jx,
  Ax
];
function Cx(e, r) {
  return Mx(), bx("svg", Ex, Fx);
}
var Wx = /* @__PURE__ */ Zx(Sx, [["render", Cx]]);
var xx = Object.defineProperty, Bx = Object.defineProperties, _x = Object.getOwnPropertyDescriptors, pm = Object.getOwnPropertySymbols, Ix = Object.prototype.hasOwnProperty, Dx = Object.prototype.propertyIsEnumerable, mm = (e, r, o) => r in e ? xx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, uo = (e, r) => {
  for (var o in r || (r = {}))
    Ix.call(r, o) && mm(e, o, r[o]);
  if (pm)
    for (var o of pm(r))
      Dx.call(r, o) && mm(e, o, r[o]);
  return e;
}, Lv = (e, r) => Bx(e, _x(r));
const Ox = window.Vue.defineComponent, Ic = window.Vue.toRef, Qx = window.Vue.computed, wm = window.Vue.resolveComponent, vm = window.Vue.openBlock, Vm = window.Vue.createElementBlock, gm = window.Vue.mergeProps, Tm = window.Vue.createVNode, zx = window.Vue.normalizeClass, Um = window.Vue.withCtx, Gx = window.Vue.createElementVNode, Yx = window.Vue.toDisplayString, Px = window.Vue.createCommentVNode;
var Hx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const jx = Lv(uo(uo({}, Bu), Za), {
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
}), $x = {
  "update:modelValue": (e) => !0
}, Xx = Ox({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $x,
  props: jx,
  setup(e, r) {
    Sa(e), _u(e);
    const o = Ic(e, "id"), i = Qx(() => o.value ? o.value : ie("feather-textarea-label")), { validate: s } = Ma(i, Ic(e, "modelValue"), e.label, e.schema, Ic(e, "error"));
    return uo({
      inputId: i,
      incomingId: o,
      validate: s
    }, ba(r.attrs));
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
      return ie("feather-textarea-description");
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Lv(uo(uo({}, e), this.listeners), {
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
    InputSubText: ka,
    InputWrapper: xu
  }
}), Lx = ["maxlength"], qx = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function Kx(e, r, o, i, s, c) {
  const d = wm("InputWrapper"), f = wm("InputSubText");
  return vm(), Vm("div", gm(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Tm(d, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: zx(["feather-textarea-content", e.contentCls])
    }, {
      default: Um(() => [
        Gx("textarea", gm(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, Lx)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Tm(f, { id: e.descriptionId }, {
      right: Um(() => [
        e.maxlength ? (vm(), Vm("div", qx, Yx(e.charCount), 1)) : Px("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var vu = /* @__PURE__ */ Hx(Xx, [["render", Kx], ["__scopeId", "data-v-0648df5c"]]);
const eB = window.Pinia.defineStore, Fs = eB("appStore", {
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
}), tB = window.Vue.defineComponent, ym = window.Vue.toDisplayString, qo = window.Vue.createElementVNode, dr = window.Vue.unref, Xr = window.Vue.openBlock, Nm = window.Vue.createBlock, Ko = window.Vue.createCommentVNode, Rm = window.Vue.createVNode, Oi = window.Vue.createElementBlock, nB = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const rB = { class: "row" }, oB = { class: "label" }, aB = { class: "action-icons" }, iB = { class: "icon-btn" }, sB = {
  key: 0,
  class: "icon-btn"
}, lB = {
  key: 1,
  class: "icon-btn"
}, cB = {
  key: 0,
  class: "text"
}, uB = window.Vue.watch, km = window.Vue.ref, dB = /* @__PURE__ */ tB({
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
    const r = e, o = Fs(), i = km(!1), s = km((m = r.memo) == null ? void 0 : m.body);
    uB(r, () => {
      var g;
      s.value = (g = r.memo) == null ? void 0 : g.body, i.value = !1;
    });
    const c = () => {
      i.value = !i.value;
    }, d = async () => {
      i.value = !1, await Xk(r.id, r.type) ? s.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, s.value && s.value !== "" && (await $k(r.id, r.type, s.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (g, V) => (Xr(), Oi("div", {
      class: nB([r.boxType === "small" ? "box-small" : "box"])
    }, [
      qo("div", rB, [
        qo("div", oB, ym(e.label), 1),
        qo("div", aB, [
          qo("div", iB, [
            i.value ? Ko("", !0) : (Xr(), Nm(dr($), {
              key: 0,
              icon: dr(Wx),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Xr(), Oi("div", sB, [
            Rm(dr($), {
              icon: dr(Na),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ko("", !0),
          s.value && s.value != "" || i.value ? (Xr(), Oi("div", lB, [
            Rm(dr($), {
              icon: dr(go),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Ko("", !0)
        ])
      ]),
      qo("div", null, [
        !i.value && s.value != null ? (Xr(), Oi("div", cB, ym(s.value), 1)) : Ko("", !0),
        i.value ? (Xr(), Nm(dr(vu), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": V[0] || (V[0] = (U) => s.value = U),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ko("", !0)
      ])
    ], 2));
  }
});
const vs = /* @__PURE__ */ we(dB, [["__scopeId", "data-v-3f44e250"]]), fB = window.Vue.defineComponent, fr = window.Vue.unref, Lr = window.Vue.createVNode, ea = window.Vue.toDisplayString, Xt = window.Vue.createElementVNode, Mm = window.Vue.openBlock, bm = window.Vue.createElementBlock, Zm = window.Vue.createCommentVNode, Dc = window.Vue.createTextVNode, hB = window.Vue.pushScopeId, pB = window.Vue.popScopeId, Ku = (e) => (hB("data-v-a78bcbcc"), e = e(), pB(), e), mB = {
  key: 0,
  class: "card"
}, wB = { class: "row" }, vB = { class: "title" }, VB = {
  key: 0,
  class: "ack"
}, gB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ Xt("strong", null, " Duration: ", -1)), TB = ["innerHTML"], UB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ Xt("strong", null, "First Event", -1)), yB = /* @__PURE__ */ Ku(() => /* @__PURE__ */ Xt("strong", null, "Last Event", -1)), NB = { class: "section memo-boxes" }, Sm = window.Vue.ref, RB = window.Vue.watch, kB = /* @__PURE__ */ fB({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, i = Sm(!1), s = Sm(o.alarm), c = new Date().getTime();
    RB(o, () => {
      s.value = o.alarm, i.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const d = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (m) => {
      const g = await tv(m);
      g && (s.value = g);
    };
    return (m, g) => {
      var V, U, N, F, E;
      return s.value ? (Mm(), bm("div", mB, [
        Xt("div", null, [
          Xt("div", wB, [
            Lr(fr(Aa), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                g[0] || (g[0] = (b) => i.value = b),
                d
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Xt("div", vB, ea(s.value.nodeLabel) + " - " + ea(s.value.id), 1),
            Lr(Ov, {
              severity: (V = s.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (Mm(), bm("div", VB, [
              Lr(fr($), {
                icon: fr(Na),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Zm("", !0)
          ]),
          Xt("div", null, [
            gB,
            Dc(" " + ea(fr(Rs)(fr(c), new Date(s.value.firstEventTime))), 1)
          ]),
          Xt("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, TB),
          Xt("div", null, [
            UB,
            Dc(" - " + ea(fr(cn)(s.value.firstEventTime)), 1)
          ]),
          Xt("div", null, [
            yB,
            Dc(" - " + ea(fr(cn)(s.value.lastEventTime)), 1)
          ]),
          Xt("div", NB, [
            Lr(vs, {
              id: (U = s.value) == null ? void 0 : U.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (N = s.value) == null ? void 0 : N.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Lr(vs, {
              id: (F = s.value) == null ? void 0 : F.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (E = s.value) == null ? void 0 : E.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Lr(Hv, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Zm("", !0);
    };
  }
});
const MB = /* @__PURE__ */ we(kB, [["__scopeId", "data-v-a78bcbcc"]]), bB = window.Vue.openBlock, ZB = window.Vue.createElementBlock, qv = window.Vue.createElementVNode;
var SB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const EB = {}, JB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AB = /* @__PURE__ */ qv("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), FB = /* @__PURE__ */ qv("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), CB = [
  AB,
  FB
];
function WB(e, r) {
  return bB(), ZB("svg", JB, CB);
}
var Kv = /* @__PURE__ */ SB(EB, [["render", WB]]);
const xB = window.Vue.watch, BB = window.Vue.ref, _B = window.Vue.onBeforeUnmount, e1 = (e) => {
  const r = BB(!1), o = (i) => {
    i.keyCode === te.ESCAPE && (i.preventDefault(), r.value = !r.value);
  };
  return xB(e, (i) => {
    i ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), _B(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, IB = window.Vue.watch, t1 = (e) => {
  let r;
  IB(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, n1 = window.Vue.watch, r1 = window.Vue.onBeforeUnmount, o1 = window.Vue.nextTick, DB = window.Vue.onMounted, a1 = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, Vs = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, i1 = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  r1(() => Vs(r, o)), DB(() => n1(e, (i) => {
    i ? o1(() => {
      r = a1(o);
    }) : Vs(r, o);
  }, { immediate: !0 }));
}, OB = (e, r) => {
  let o;
  r1(() => Vs(o, r.value ? r.value.offsetParent : !1)), n1([e, r], ([i, s]) => {
    i && s ? o1(() => {
      o = a1(s.offsetParent);
    }) : s && Vs(o, s.offsetParent);
  }, {
    immediate: !0
  });
};
var QB = Object.defineProperty, Em = Object.getOwnPropertySymbols, zB = Object.prototype.hasOwnProperty, GB = Object.prototype.propertyIsEnumerable, Jm = (e, r, o) => r in e ? QB(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, YB = (e, r) => {
  for (var o in r || (r = {}))
    zB.call(r, o) && Jm(e, o, r[o]);
  if (Em)
    for (var o of Em(r))
      GB.call(r, o) && Jm(e, o, r[o]);
  return e;
};
const ed = window.Vue.defineComponent, fa = window.Vue.ref, PB = window.Vue.nextTick, s1 = window.Vue.openBlock, l1 = window.Vue.createElementBlock, td = window.Vue.createElementVNode, HB = window.Vue.renderSlot, jB = window.Vue.resolveComponent, $B = window.Vue.normalizeClass, XB = window.Vue.withModifiers, LB = window.Vue.createVNode, Am = window.Vue.toRef, Fm = window.Vue.computed, Cm = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var c1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const qB = {
  enable: {
    type: Boolean,
    required: !0
  }
}, KB = ed({
  props: qB,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = fa(), r = fa(!1), o = (V, U) => {
      let N = V.compareDocumentPosition(U);
      if (N === 2)
        return "before";
      if (N === 4)
        return "after";
      if (N === 10 || N === 12)
        return "parent";
    }, i = (V) => {
      for (var U = 0; U < V.childNodes.length; U++) {
        var N = V.childNodes[U];
        if (c(N) || i(N))
          return !0;
      }
      return !1;
    }, s = (V) => {
      for (var U = V.childNodes.length - 1; U >= 0; U--) {
        var N = V.childNodes[U];
        if (c(N) || s(N))
          return !0;
      }
      return !1;
    }, c = (V) => d(V) ? (r.value = !0, V.focus && V.focus(), r.value = !1, document.activeElement === V) : !1, d = (V) => {
      if (V.tabIndex > 0 || V.tabIndex === 0 && V.getAttribute("tabIndex") !== null)
        return !0;
      const U = V;
      if (U.disabled || U.tabIndex === -1)
        return !1;
      switch (V.nodeName) {
        case "A":
          const N = V;
          return !!N.href && N.rel !== "ignore";
        case "INPUT":
          const F = V;
          return F.type !== "hidden" && F.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (V) => {
      const U = V.querySelector("[first-focus]");
      U && U.focus ? PB(() => {
        U.focus();
      }) : i(V);
    }, m = fa();
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
}), e_ = /* @__PURE__ */ td("div", { tabindex: "0" }, null, -1), t_ = {
  class: "focus-trap-content",
  ref: "content"
}, n_ = /* @__PURE__ */ td("div", { tabindex: "0" }, null, -1);
function r_(e, r, o, i, s, c) {
  return s1(), l1("div", null, [
    e_,
    td("div", t_, [
      HB(e.$slots, "default")
    ], 512),
    n_
  ]);
}
var u1 = /* @__PURE__ */ c1(KB, [["render", r_]]);
const o_ = ed({
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
    icon: () => go
  },
  components: {
    FeatherIcon: $
  }
}), a_ = ["aria-label"];
function i_(e, r, o, i, s, c) {
  const d = jB("FeatherIcon");
  return s1(), l1("a", {
    href: "#",
    class: $B(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = XB((f) => e.$emit("close"), ["prevent"]))
  }, [
    LB(d, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, a_);
}
var d1 = /* @__PURE__ */ c1(o_, [["render", i_], ["__scopeId", "data-v-fc0f3f00"]]);
const f1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, s_ = {
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
    default: () => f1,
    validator: (e) => !!e.title
  }
}, l_ = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
ed({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: l_,
  props: s_,
  setup(e, r) {
    const o = ks(Am(e, "labels"), f1), i = Am(e, "modelValue"), s = fa(), c = () => {
      r.emit("update:modelValue", !1);
    }, d = Fm(() => !!r.slots.footer), f = Fm(() => ie("dialog-header"));
    e.relative ? OB(i, s) : i1(i), t1(i), Cm(e1(i), () => {
      c();
    });
    const m = fa(e.modelValue);
    return Cm(m, (g) => {
      g ? r.emit("shown") : r.emit("hidden");
    }), YB({ close: c, hasFooter: d, headerId: f, element: s, shown: m }, o);
  },
  components: {
    FocusTrap: u1,
    DialogClose: d1
  }
});
var c_ = Object.defineProperty, Wm = Object.getOwnPropertySymbols, u_ = Object.prototype.hasOwnProperty, d_ = Object.prototype.propertyIsEnumerable, xm = (e, r, o) => r in e ? c_(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Cs = (e, r) => {
  for (var o in r || (r = {}))
    u_.call(r, o) && xm(e, o, r[o]);
  if (Wm)
    for (var o of Wm(r))
      d_.call(r, o) && xm(e, o, r[o]);
  return e;
};
const Ws = window.Vue.defineComponent, Bm = window.Vue.toRef, _m = window.Vue.watch, Im = window.Vue.ref, Dm = window.Vue.resolveComponent, Qi = window.Vue.openBlock, Om = window.Vue.createBlock, f_ = window.Vue.Teleport, Qm = window.Vue.createElementBlock, Oc = window.Vue.createVNode, zm = window.Vue.Transition, Qc = window.Vue.withCtx, Gm = window.Vue.createCommentVNode, h_ = window.Vue.withDirectives, p_ = window.Vue.normalizeStyle, m_ = window.Vue.normalizeClass, Ym = window.Vue.createElementVNode, w_ = window.Vue.renderSlot, v_ = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var V_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const h1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, g_ = {
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
    default: () => h1,
    validator: (e) => !!e.title
  }
}, T_ = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, U_ = Ws({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: T_,
  props: g_,
  setup(e, r) {
    const o = ks(Bm(e, "labels"), h1), i = Bm(e, "modelValue"), s = () => {
      r.emit("update:modelValue", !1);
    };
    i1(i), t1(i), _m(e1(i), () => {
      s();
    });
    const c = Im(), d = Im(!1);
    return _m(d, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), Cs({ close: s, shown: d, isShown: i, element: c }, o);
  },
  components: {
    DialogClose: d1,
    FocusTrap: u1
  }
}), y_ = {
  key: 0,
  class: "drawer-container feather-styles"
}, N_ = {
  key: 0,
  class: "greyedOut"
}, R_ = ["aria-label"], k_ = { class: "slot" };
function M_(e, r, o, i, s, c) {
  const d = Dm("dialog-close"), f = Dm("focus-trap");
  return Qi(), Om(f_, { to: "body" }, [
    e.modelValue ? (Qi(), Qm("div", y_, [
      Oc(zm, { name: "greyOutShim" }, {
        default: Qc(() => [
          e.modelValue ? (Qi(), Qm("div", N_)) : Gm("", !0)
        ]),
        _: 1
      }),
      Oc(zm, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (m) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (m) => e.shown = !1)
      }, {
        default: Qc(() => [
          h_((Qi(), Om(f, {
            enable: e.modelValue,
            style: p_({ width: e.width }),
            key: "sect",
            class: m_(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Qc(() => [
              Ym("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Ym("div", k_, [
                  w_(e.$slots, "default", {}, void 0, !0)
                ]),
                Oc(d, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, R_)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [v_, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Gm("", !0)
  ]);
}
var b_ = /* @__PURE__ */ V_(U_, [["render", M_], ["__scopeId", "data-v-0a36e1dc"]]);
const Z_ = Cs({
  label: {
    type: String,
    required: !0
  }
}, Av);
Ws({
  name: "DrawerTab",
  props: Z_,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Ur(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      yr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return Fv(e);
  },
  components: {
    FeatherRipple: Xn
  }
});
const S_ = Cs({}, xv), E_ = Wv;
Ws({
  emits: E_,
  model: Cv,
  props: S_,
  setup(e, r) {
    return Bv(e, r);
  }
});
const J_ = Cs({
  header: {
    type: String
  }
}, _v);
Ws({
  name: "DrawerTabContent",
  props: J_,
  setup(e) {
    return Iv(e);
  },
  directives: {
    MenuFocusLoop: BJ
  }
});
const A_ = window.Vue.defineComponent, Vu = window.Vue.createElementVNode, Pm = window.Vue.unref, F_ = window.Vue.renderList, C_ = window.Vue.Fragment, zc = window.Vue.openBlock, Hm = window.Vue.createElementBlock, W_ = window.Vue.createVNode, x_ = window.Vue.withCtx, B_ = window.Vue.createBlock, __ = window.Vue.pushScopeId, I_ = window.Vue.popScopeId, D_ = (e) => (__("data-v-8b2fdaf8"), e = e(), I_(), e), O_ = { class: "content" }, Q_ = /* @__PURE__ */ D_(() => /* @__PURE__ */ Vu("h4", null, "Click on situation where to move the alarms:", -1)), z_ = { class: "situation-list" }, G_ = window.Vue.ref, Y_ = window.Vue.watch, P_ = /* @__PURE__ */ A_({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, i = Sn(), s = G_(o.visible);
    return Y_(o, () => {
      s.value = o.visible;
    }), (c, d) => (zc(), B_(Pm(b_), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: x_(() => [
        Vu("div", O_, [
          Q_,
          Vu("div", z_, [
            (zc(!0), Hm(C_, null, F_(Pm(i).situations.filter(
              (f) => f.id != o.situationId
            ), (f) => (zc(), Hm("div", {
              class: "card",
              key: f.id
            }, [
              W_(uv, {
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
const p1 = /* @__PURE__ */ we(P_, [["__scopeId", "data-v-8b2fdaf8"]]), H_ = window.Vue.openBlock, j_ = window.Vue.createElementBlock, m1 = window.Vue.createElementVNode;
var $_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const X_ = {}, L_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, q_ = /* @__PURE__ */ m1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), K_ = /* @__PURE__ */ m1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), e3 = [
  q_,
  K_
];
function t3(e, r) {
  return H_(), j_("svg", L_, e3);
}
var n3 = /* @__PURE__ */ $_(X_, [["render", t3]]);
const r3 = window.Vue.defineComponent, jn = window.Vue.createElementVNode, At = window.Vue.createVNode, Vt = window.Vue.unref, zi = window.Vue.withCtx, o3 = window.Vue.renderList, a3 = window.Vue.Fragment, Gi = window.Vue.openBlock, Yi = window.Vue.createElementBlock, i3 = window.Vue.createCommentVNode, s3 = window.Vue.pushScopeId, l3 = window.Vue.popScopeId, Fa = (e) => (s3("data-v-98a53ee8"), e = e(), l3(), e), c3 = { class: "container" }, u3 = { class: "row" }, d3 = /* @__PURE__ */ Fa(() => /* @__PURE__ */ jn("div", { class: "title" }, "Alarms", -1)), f3 = { class: "row actions" }, h3 = /* @__PURE__ */ Fa(() => /* @__PURE__ */ jn("span", null, "Clear", -1)), p3 = /* @__PURE__ */ Fa(() => /* @__PURE__ */ jn("span", null, "Acknowledge", -1)), m3 = /* @__PURE__ */ Fa(() => /* @__PURE__ */ jn("span", null, "Move", -1)), w3 = /* @__PURE__ */ Fa(() => /* @__PURE__ */ jn("span", null, "Remove", -1)), v3 = { class: "section" }, V3 = {
  key: 0,
  class: "alarm-list"
}, Gc = window.Vue.ref, g3 = window.Vue.watch, T3 = window.Vue.reactive, U3 = /* @__PURE__ */ r3({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = Fs(), i = Sn(), s = Gc(!1), c = Gc(["all"]), d = Gc(!1), f = T3({
      selectedAlarms: [],
      alarms: r.alarms
    });
    g3(r, () => {
      c.value = ["all"], f.alarms = r.alarms, f.selectedAlarms = [], s.value = !1;
    });
    const m = (b) => {
      f.selectedAlarms.includes(b) ? me.exports.remove(f.selectedAlarms, (C) => C == b) : f.selectedAlarms.push(b);
    }, g = async (b) => {
      f.selectedAlarms.length ? (await Gk(f.selectedAlarms, b), i.getSituation(r.situationId), f.selectedAlarms = [], s.value = !1) : o.showErrorMsg("You need to choose at least one alarm!");
    }, V = () => f.selectedAlarms.length === r.alarms.length ? (o.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : f.selectedAlarms.length ? !0 : (o.showErrorMsg("You need to choose at least one alarm!"), !1), U = async () => {
      V() && (await cm(
        r.situationId,
        f.selectedAlarms
      ) ? i.getSituation(r.situationId) : o.showErrorMsg("Error on removing alarms :("));
    }, N = (b) => {
      b.includes("all") ? f.alarms = r.alarms : f.alarms = r.alarms.filter((C) => b.includes(C.severity));
    }, F = async (b) => {
      V() && (await cm(
        r.situationId,
        f.selectedAlarms
      ) && await Yv(
        b,
        f.selectedAlarms
      ) ? i.getSituation(r.situationId) : o.showErrorMsg("Error on moving the alarms :(")), d.value = !1;
    }, E = () => {
      f.selectedAlarms.length ? d.value = !0 : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (b, C) => (Gi(), Yi("div", c3, [
      jn("div", u3, [
        d3,
        At(Va, {
          alarms: r.alarms,
          onSelectedOption: N,
          property: "severity"
        }, null, 8, ["alarms"])
      ]),
      jn("div", f3, [
        At(Vt(Aa), {
          modelValue: s.value,
          "onUpdate:modelValue": C[0] || (C[0] = (A) => s.value = A),
          label: "selected"
        }, null, 8, ["modelValue"]),
        At(Vt(ge), {
          onClick: C[1] || (C[1] = () => g("clear"))
        }, {
          default: zi(() => [
            At(Vt($), {
              icon: Vt(Pv),
              class: "icon clear"
            }, null, 8, ["icon"]),
            h3
          ]),
          _: 1
        }),
        At(Vt(ge), {
          onClick: C[2] || (C[2] = () => g("ack"))
        }, {
          default: zi(() => [
            At(Vt($), {
              icon: Vt(Na),
              class: "icon ack"
            }, null, 8, ["icon"]),
            p3
          ]),
          _: 1
        }),
        At(Vt(ge), { onClick: E }, {
          default: zi(() => [
            At(Vt($), {
              icon: Vt(Kv),
              class: "icon move"
            }, null, 8, ["icon"]),
            m3
          ]),
          _: 1
        }),
        At(Vt(ge), { onClick: U }, {
          default: zi(() => [
            At(Vt($), {
              icon: Vt(n3),
              class: "icon remove"
            }, null, 8, ["icon"]),
            w3
          ]),
          _: 1
        })
      ]),
      jn("div", v3, [
        f.alarms.length > 0 ? (Gi(), Yi("div", V3, [
          (Gi(!0), Yi(a3, null, o3(f.alarms, (A) => (Gi(), Yi("div", {
            key: A.id
          }, [
            At(MB, {
              alarm: A,
              selectAll: s.value,
              "situation-id": r.situationId,
              onAlarmSelected: m
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : i3("", !0)
      ]),
      At(p1, {
        situationId: r.situationId,
        visible: d.value,
        onSituationSelected: F,
        onDrawerClosed: C[3] || (C[3] = () => d.value = !1)
      }, null, 8, ["situationId", "visible"])
    ]));
  }
});
const y3 = /* @__PURE__ */ we(U3, [["__scopeId", "data-v-98a53ee8"]]), N3 = "/whoami", R3 = async () => {
  try {
    const e = await dn.get(N3);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, k3 = window.Pinia.defineStore, Ca = k3("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const e = await R3();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await wW();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async savePermission(e) {
      if (this.allowSave = e, !e) {
        const r = await zv(e);
        this.allowSave = r;
      }
    }
  }
}), M3 = window.Vue.defineComponent, Ht = window.Vue.createVNode, gt = window.Vue.unref, Yc = window.Vue.normalizeClass, Pi = window.Vue.toDisplayString, hr = window.Vue.openBlock, pr = window.Vue.createElementBlock, Hi = window.Vue.createCommentVNode, b3 = window.Vue.withCtx, $t = window.Vue.createElementVNode, Z3 = window.Vue.createTextVNode, S3 = window.Vue.Fragment, E3 = window.Vue.pushScopeId, J3 = window.Vue.popScopeId, A3 = (e) => (E3("data-v-7d539e83"), e = e(), J3(), e), F3 = { class: "section" }, C3 = { class: "action-section" }, W3 = {
  key: 0,
  class: "btn-row"
}, x3 = { key: 0 }, B3 = { key: 1 }, _3 = {
  key: 0,
  class: "situation-detail"
}, I3 = { class: "situation-info" }, D3 = { class: "id" }, O3 = { key: 0 }, Q3 = ["innerHTML"], z3 = /* @__PURE__ */ A3(() => /* @__PURE__ */ $t("p", null, null, -1)), G3 = { class: "boxes" }, Y3 = { class: "parameters" }, P3 = { class: "section memo-boxes" }, H3 = { key: 0 }, jm = window.Vue.ref, j3 = window.Vue.watch, $3 = /* @__PURE__ */ M3({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Fs(), i = Sn(), s = Ut.REJECTED, c = Ca(), d = jm(r.situationInfo.status), f = jm(r.situationInfo);
    j3(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const m = async (g) => {
      var U;
      await Gv(
        (U = r.situationInfo) == null ? void 0 : U.id,
        g.toLowerCase()
      ) ? (d.value = g, i.getSituation(r.situationInfo.id)) : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (g, V) => {
      var U, N, F, E, b, C, A, x, _, Y, k, W;
      return hr(), pr(S3, null, [
        $t("div", F3, [
          $t("div", C3, [
            Ht(Hv, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            gt(c).allowSave ? (hr(), pr("div", W3, [
              Ht(gt(ge), {
                class: Yc(["btn", { rejected: d.value == gt(s) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => m(gt(s)))
              }, {
                default: b3(() => [
                  Ht(gt($), {
                    icon: gt(nv),
                    "aria-hidden": "true",
                    class: Yc(["icon reject", { rejected: d.value == gt(s) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == gt(s) ? (hr(), pr("span", x3, Pi(gt(s)), 1)) : (hr(), pr("span", B3, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Hi("", !0)
          ]),
          f.value ? (hr(), pr("div", _3, [
            $t("div", {
              class: Yc(["severity-line", [`${(N = (U = f.value) == null ? void 0 : U.severity) == null ? void 0 : N.toLowerCase()}-bg dark`]])
            }, null, 2),
            $t("div", I3, [
              $t("div", D3, [
                $t("div", null, [
                  Z3(" Situation - " + Pi((F = f.value) == null ? void 0 : F.id) + " - affecting " + Pi(gt(me.exports.size)(gt(me.exports.groupBy)((E = f.value) == null ? void 0 : E.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (hr(), pr("span", O3, "having " + Pi(f.value.alarms.length) + " alarms ", 1)) : Hi("", !0)
                ]),
                Ht(Ov, {
                  severity: (b = f.value) == null ? void 0 : b.severity
                }, null, 8, ["severity"])
              ]),
              $t("span", {
                innerHTML: f.value.description
              }, null, 8, Q3),
              z3,
              $t("div", G3, [
                Ht(Ec, {
                  label: "First Event",
                  info: gt(cn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Ht(Ec, {
                  label: "Last Event",
                  info: gt(cn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Ht(Ec, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            $t("div", Y3, [
              Ht(bW, {
                alarms: (C = f.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Hi("", !0),
          $t("div", P3, [
            Ht(vs, {
              id: (A = f.value) == null ? void 0 : A.id,
              situationId: (x = f.value) == null ? void 0 : x.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (_ = f.value) == null ? void 0 : _.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ht(vs, {
              id: (Y = f.value) == null ? void 0 : Y.id,
              situationId: (k = f.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (W = f.value) == null ? void 0 : W.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (hr(), pr("div", H3, [
          Ht(y3, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Hi("", !0)
      ], 64);
    };
  }
});
const X3 = /* @__PURE__ */ we($3, [["__scopeId", "data-v-7d539e83"]]);
var L3 = Object.defineProperty, q3 = Object.defineProperties, K3 = Object.getOwnPropertyDescriptors, $m = Object.getOwnPropertySymbols, eI = Object.prototype.hasOwnProperty, tI = Object.prototype.propertyIsEnumerable, Xm = (e, r, o) => r in e ? L3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, gu = (e, r) => {
  for (var o in r || (r = {}))
    eI.call(r, o) && Xm(e, o, r[o]);
  if ($m)
    for (var o of $m(r))
      tI.call(r, o) && Xm(e, o, r[o]);
  return e;
}, nI = (e, r) => q3(e, K3(r));
const w1 = window.Vue.defineComponent, Vr = window.Vue.resolveComponent, os = window.Vue.openBlock, Lm = window.Vue.createBlock, as = window.Vue.mergeProps, gr = window.Vue.withCtx, v1 = window.Vue.createElementBlock, rI = window.Vue.Fragment, oI = window.Vue.renderList, aI = window.Vue.createTextVNode, iI = window.Vue.toDisplayString, sI = window.Vue.computed, qm = window.Vue.toRef, ta = window.Vue.createVNode, Km = window.Vue.toHandlers, lI = window.Vue.renderSlot, cI = window.Vue.normalizeClass, uI = window.Vue.createElementVNode;
var V1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const dI = w1({
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
      return ie("feather-select-active");
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
        ga(r, this.$refs.list.$el);
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
    FeatherListItem: Ja
  }
});
function fI(e, r, o, i, s, c) {
  const d = Vr("FeatherListItem"), f = Vr("FeatherList");
  return os(), Lm(f, as(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: gr(() => [
      (os(!0), v1(rI, null, oI(e.options, (m, g) => (os(), Lm(d, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(g),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(g),
        selected: e.isSelected(g),
        onClick: (V) => e.select(m)
      }, {
        default: gr(() => [
          aI(iI(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var hI = /* @__PURE__ */ V1(dI, [["render", fI], ["__scopeId", "data-v-eae820da"]]);
const pI = nI(gu(gu({}, Bu), Za), {
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
}), mI = {
  "update:modelValue": (e) => !0
}, wI = w1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: mI,
  props: pI,
  setup(e, r) {
    Sa(e), _u(e);
    const o = sI(() => ie("feather-select-input")), { validate: i } = Ma(o, qm(e, "modelValue"), e.label, e.schema, qm(e, "error"));
    return gu({
      inputId: o,
      validate: i
    }, ba(r.attrs));
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
      return ie("feather-select-description");
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
    icon: () => Es
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
      if (e.keyCode === te.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === te.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === te.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === te.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === te.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === te.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const r = String.fromCharCode(e.keyCode);
        this.charsSoFar += r, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      yr(this.delayTimeout), this.delayTimeout = Ur(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: xu,
    InputSubText: ka,
    FeatherMenu: Nv,
    List: hI,
    FeatherIcon: $
  }
});
function vI(e, r, o, i, s, c) {
  const d = Vr("FeatherIcon"), f = Vr("InputWrapper"), m = Vr("List"), g = Vr("FeatherMenu"), V = Vr("InputSubText");
  return os(), v1("div", as(e.inherittedAttrs, { class: "feather-select-container" }), [
    ta(g, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: gr((U) => [
        ta(f, as({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, U.attrs, Km(U.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: gr(() => [
            lI(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: gr(() => [
            ta(d, {
              class: cI(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: gr(() => [
            uI("input", as(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Km(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: gr(() => [
        ta(m, {
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
    ta(V, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var VI = /* @__PURE__ */ V1(wI, [["render", vI], ["__scopeId", "data-v-ecb32d90"]]);
const gI = window.Vue.openBlock, TI = window.Vue.createElementBlock, g1 = window.Vue.createElementVNode;
var UI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const yI = {}, NI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RI = /* @__PURE__ */ g1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), kI = /* @__PURE__ */ g1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), MI = [
  RI,
  kI
];
function bI(e, r) {
  return gI(), TI("svg", NI, MI);
}
var ZI = /* @__PURE__ */ UI(yI, [["render", bI]]);
const is = window.Vue.openBlock, Tu = window.Vue.createElementBlock, T1 = window.Vue.createElementVNode, SI = window.Vue.defineComponent, mr = window.Vue.ref, EI = window.Vue.provide, ew = window.Vue.computed, JI = window.Vue.onUnmounted, tw = window.Vue.toRef, AI = window.Vue.resolveComponent, FI = window.Vue.Fragment, CI = window.Vue.createBlock, WI = window.Vue.Teleport, nw = window.Vue.createVNode, xI = window.Vue.Transition, BI = window.Vue.withCtx, _I = window.Vue.normalizeClass, II = window.Vue.normalizeStyle, DI = window.Vue.toDisplayString, OI = window.Vue.createCommentVNode, QI = window.Vue.renderSlot, Pc = window.Vue.nextTick;
var U1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const zI = {}, GI = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, YI = /* @__PURE__ */ T1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), PI = [
  YI
];
function HI(e, r) {
  return is(), Tu("svg", GI, PI);
}
var jI = /* @__PURE__ */ U1(zI, [["render", HI]]), Ye = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ye || {}), Mn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Mn || {});
const $I = (e, r, o, i = 9) => {
  const s = window.innerHeight - e.bottom, c = window.innerWidth - e.right, d = [];
  e.top >= r.height + i && d.push(Ye.top), s >= r.height + i && d.push(Ye.bottom);
  const f = [];
  c >= r.width + i && f.push(Ye.right), e.left >= r.width + i && f.push(Ye.left);
  let m = [...f, ...d];
  return (o === Ye.top || o === Ye.bottom) && (m = [...d, ...f]), m.indexOf(o) > -1 ? o : m.length ? m[0] : o;
}, XI = (e, r, o, i, s = 28) => {
  if (e === Ye.left || e === Ye.right)
    return Mn.center;
  const c = r.left + r.width / 2, d = window.innerWidth - r.right, f = [], m = c, g = d + r.width / 2, V = o.width - s, U = o.width / 2;
  return m >= U && g >= U && f.push(Mn.center), g >= V && f.push(Mn.left), m >= V && f.push(Mn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, LI = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ye.top
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
}, qI = SI({
  props: LI,
  setup(e) {
    const r = mr(!1), o = mr(!1), i = ie("feather-tooltip-trigger"), s = ie("feather-tooltip"), c = "data-feather-tooltip";
    EI("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      yr(d), r.value || (d = Ur(b, e.enterDelay));
    }, m = () => {
      yr(d), d = Ur(C, e.exitDelay);
    }, g = (L) => {
      L.keyCode === te.ESCAPE && (L.preventDefault(), C(!0));
    }, V = ew(() => ({
      [c]: i,
      "aria-describedby": s
    })), U = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: g
    }, N = mr(document), F = yv(N, () => C(!0));
    JI(() => C(!0));
    const E = () => document.getElementById(s), b = () => {
      o.value = !1, r.value = !0, Pc(() => {
        const L = E();
        Q(L), r.value = !1, Pc(() => {
          o.value = !0, r.value = !0, F.value = !0;
        });
      });
    }, C = (L = !1) => {
      W.value = "", k.value = "", I.value = "", G.value = "", r.value = !1, L && (o.value = !1), F.value = !1;
    }, A = tw(e, "placement"), x = tw(e, "pointerAlignment"), _ = 8, Y = 24, k = mr(""), W = mr(""), I = mr(""), G = mr(""), z = ew(() => G.value ? "p-" + G.value : !1), Q = (L) => {
      const ye = document.querySelector(`[${c}=${i}]`);
      if (!ye) {
        console.log("trigger not found");
        return;
      }
      Pc(() => {
        const Re = ye.getBoundingClientRect(), Se = L.getBoundingClientRect(), fe = $I(Re, Se, A.value, _), Ie = XI(fe, Re, Se, x.value, Y);
        I.value = Ie.toString(), G.value = fe.toString();
        let De = 0, Xe = 0;
        if ((fe === Ye.left || fe === Ye.right) && (De = Re.top + Re.height / 2 - Se.height / 2, fe === Ye.left && (Xe = Re.left - Se.width - _), fe === Ye.right && (Xe = Re.right)), fe === Ye.top || fe === Ye.bottom) {
          De = Re.top - Se.height - _, fe === Ye.bottom && (De = Re.bottom);
          const yo = Re.left + Re.width / 2;
          switch (Ie) {
            case Mn.center:
              Xe = yo - Se.width / 2;
              break;
            case Mn.left:
              Xe = yo - Y;
              break;
            case Mn.right:
              Xe = yo - Se.width + Y;
              break;
          }
        }
        k.value = De.toString() + "px", W.value = Xe.toString() + "px";
      });
    };
    return {
      attrs: V,
      listeners: U,
      show: r,
      animate: o,
      alignmentClass: I,
      placementClass: z,
      top: k,
      left: W,
      tooltipID: s
    };
  },
  components: {
    Pointer: jI
  }
}), KI = ["id"];
function eD(e, r, o, i, s, c) {
  const d = AI("Pointer");
  return is(), Tu(FI, null, [
    (is(), CI(WI, { to: "body" }, [
      nw(xI, { css: e.animate }, {
        default: BI(() => [
          e.show ? (is(), Tu("div", {
            key: 0,
            class: _I(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: II({ left: e.left, top: e.top })
          }, [
            T1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, DI(e.title), 9, KI),
            nw(d, { class: "tooltip-pointer" })
          ], 6)) : OI("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    QI(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var rw = /* @__PURE__ */ U1(qI, [["render", eD], ["__scopeId", "data-v-3da6b22e"]]);
const tD = window.Vue.defineComponent, Hc = window.Vue.normalizeStyle, jc = window.Vue.createElementVNode, na = window.Vue.unref, ow = window.Vue.toHandlers, aw = window.Vue.mergeProps, iw = window.Vue.withCtx, sw = window.Vue.createVNode, nD = window.Vue.renderList, rD = window.Vue.Fragment, ra = window.Vue.openBlock, oa = window.Vue.createElementBlock, lw = window.Vue.normalizeClass, cw = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oD = { class: "row" }, aD = /* @__PURE__ */ tD({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), i = (c, d) => c ? (Number(d) - Number(c)) * r.proportion : 0, s = (c) => c ? (Number(c) - Number(r.minStart)) * r.proportion : 0;
    return (c, d) => (ra(), oa("div", oD, [
      jc("div", {
        class: "line-gray",
        style: Hc({
          width: s(r.events[0].createTime) + "px"
        })
      }, null, 4),
      sw(na(rw), {
        title: na(cn)(e.alarm.firstEventTime)
      }, {
        default: iw(({ attrs: f, on: m }) => [
          jc("div", aw({ class: "circle" }, f, ow(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (ra(!0), oa(rD, null, nD(r.events, (f, m) => (ra(), oa("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[m + 1] ? (ra(), oa("div", {
          key: 0,
          class: lw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Hc({
            width: i(f.createTime, r.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : cw("", !0),
        sw(na(rw), {
          title: na(cn)(e.alarm.firstEventTime)
        }, {
          default: iw(({ attrs: g, on: V }) => [
            r.events[m + 1] ? (ra(), oa("div", aw({ key: 0 }, g, ow(V), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : cw("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      jc("div", {
        class: lw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Hc({
          width: i(e.events[e.events.length - 1].createTime, na(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const iD = /* @__PURE__ */ we(aD, [["__scopeId", "data-v-3341d12d"]]), sD = window.Vue.openBlock, lD = window.Vue.createElementBlock, y1 = window.Vue.createElementVNode;
var cD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const uD = {}, dD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fD = /* @__PURE__ */ y1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), hD = /* @__PURE__ */ y1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), pD = [
  fD,
  hD
];
function mD(e, r) {
  return sD(), lD("svg", dD, pD);
}
var wD = /* @__PURE__ */ cD(uD, [["render", mD]]);
const vD = window.Vue.defineComponent, Uu = window.Vue.createElementVNode, VD = window.Vue.renderList, uw = window.Vue.Fragment, $c = window.Vue.openBlock, Xc = window.Vue.createElementBlock, gD = window.Vue.normalizeClass, TD = window.Vue.unref, dw = window.Vue.toDisplayString, UD = window.Vue.pushScopeId, yD = window.Vue.popScopeId, ND = (e) => (UD("data-v-2e087f7b"), e = e(), yD(), e), RD = /* @__PURE__ */ ND(() => /* @__PURE__ */ Uu("strong", null, "Events:", -1)), kD = /* @__PURE__ */ vD({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, i) => ($c(), Xc(uw, null, [
      RD,
      ($c(!0), Xc(uw, null, VD(r.events, (s) => ($c(), Xc("div", {
        class: "event-description",
        key: s.id
      }, [
        Uu("div", {
          class: gD(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Uu("div", null, dw(TD(cn)(s.createTime)) + " - " + dw(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const MD = /* @__PURE__ */ we(kD, [["__scopeId", "data-v-2e087f7b"]]), bD = window.Vue.defineComponent, ZD = window.Vue.normalizeClass, Tt = window.Vue.createElementVNode, qr = window.Vue.toDisplayString, at = window.Vue.unref, Kr = window.Vue.createVNode, N1 = window.Vue.createTextVNode, SD = window.Vue.renderList, fw = window.Vue.Fragment, Rn = window.Vue.openBlock, wr = window.Vue.createElementBlock, hw = window.Vue.createBlock, ji = window.Vue.createCommentVNode, ED = window.Vue.normalizeStyle, JD = window.Vue.pushScopeId, AD = window.Vue.popScopeId, FD = (e) => (JD("data-v-01717d0d"), e = e(), AD(), e), CD = { class: "section detail" }, WD = { class: "id" }, xD = {
  key: 0,
  class: "section"
}, BD = /* @__PURE__ */ FD(() => /* @__PURE__ */ Tt("div", { class: "id" }, "Alarms", -1)), _D = { class: "action-btns" }, ID = { class: "zoom" }, DD = /* @__PURE__ */ N1(" Zoom "), OD = { class: "times" }, QD = {
  key: 0,
  class: "timeline-container"
}, zD = { class: "alarm-id" }, GD = {
  key: 0,
  class: "panel"
}, Qn = window.Vue.ref, YD = window.Vue.watch, PD = /* @__PURE__ */ bD({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var Y, k;
    const r = e, o = Sn(), i = Qn(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Qn(s[0]), d = Qn(r.width), f = Qn(r.width), m = Qn(new Date().getTime()), g = () => {
      var W, I;
      if (!r.situation.events) {
        const G = (I = (W = r.situation) == null ? void 0 : W.alarms) == null ? void 0 : I.map((z) => z.id);
        o.getEvents(r.situation.id, G);
      }
    };
    g();
    const V = () => (m.value = new Date().getTime(), d.value / (Number(m.value) - Number(N.value))), U = Qn(r.situation.alarms), N = Qn(
      ((k = me.exports.minBy((Y = r.situation) == null ? void 0 : Y.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), F = Qn(V());
    YD(r, () => {
      var W, I;
      N.value = ((I = me.exports.minBy((W = r.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime(), g(), d.value = f.value, F.value = V(), U.value = r.situation.alarms, c.value = s[0];
    });
    const E = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (U.value = r.situation.alarms), (W == null ? void 0 : W.id) === 2) {
        const I = me.exports.groupBy(U.value, "severity"), G = [
          ...I.CRITICAL || [],
          ...I.MAJOR || [],
          ...I.MINOR || [],
          ...I.WARNING || [],
          ...I.NORMAL || [],
          ...I.CLEARED || [],
          ...I.INDETERMINATE || []
        ];
        U.value = G.filter((z) => z);
      }
      if ((W == null ? void 0 : W.id) === 3) {
        const I = me.exports.reverse(
          me.exports.sortBy(
            r.situation.alarms,
            (G) => Number(G.lastEventTime) - Number(G.firstEventTime)
          )
        );
        U.value = I;
      }
    }, b = () => {
      d.value += 100, F.value = V();
    }, C = () => {
      d.value -= 100, F.value = V();
    }, A = () => {
      d.value = f.value, F.value = V();
    }, x = (W) => {
      i.value = W;
    }, _ = () => {
      i.value = 0;
    };
    return (W, I) => {
      var G, z;
      return Rn(), wr(fw, null, [
        Tt("div", CD, [
          Tt("div", {
            class: ZD(["severity-line", [`${(z = (G = r.situation) == null ? void 0 : G.severity) == null ? void 0 : z.toLowerCase()}-bg dark`]])
          }, null, 2),
          Tt("div", null, [
            Tt("div", WD, "Situation " + qr(r.situation.id), 1),
            Tt("div", null, " Duration: " + qr(at(Rs)(m.value, new Date(N.value))), 1)
          ])
        ]),
        U.value && U.value.length > 0 ? (Rn(), wr("div", xD, [
          BD,
          Tt("div", _D, [
            Kr(at(VI), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: c.value,
              "onUpdate:modelValue": [
                I[0] || (I[0] = (Q) => c.value = Q),
                E
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Tt("div", ID, [
              DD,
              Tt("div", null, [
                Kr(at($), {
                  icon: at(ZI),
                  class: "zoom-icon",
                  onClick: b
                }, null, 8, ["icon"]),
                Kr(at($), {
                  icon: at(Tv),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                Kr(at($), {
                  icon: at(wD),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Rn(), wr("div", {
            key: 0,
            class: "alarms",
            style: ED({
              width: f.value + 50 + "px"
            })
          }, [
            Tt("div", OD, [
              Tt("div", null, qr(at(cn)(N.value)), 1),
              Tt("div", null, qr(at(cn)(m.value)), 1)
            ]),
            e.situation.events ? (Rn(), wr("div", QD, [
              (Rn(!0), wr(fw, null, SD(U.value, (Q) => (Rn(), wr("div", {
                class: "timeline",
                key: Q.id
              }, [
                Tt("div", zD, [
                  N1(qr(Q.nodeLabel) + " - " + qr(Q.id) + " ", 1),
                  i.value === Q.id ? (Rn(), hw(at($), {
                    key: 0,
                    icon: at(Es),
                    class: "zoom-icon expand",
                    onClick: _
                  }, null, 8, ["icon"])) : (Rn(), hw(at($), {
                    key: 1,
                    icon: at(fv),
                    class: "zoom-icon expand",
                    onClick: () => x(Q.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Kr(iD, {
                  alarm: Q,
                  proportion: F.value,
                  "min-start": N.value,
                  events: r.situation.events[Q.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === Q.id ? (Rn(), wr("div", GD, [
                  Kr(MD, {
                    events: r.situation.events[Q.id]
                  }, null, 8, ["events"])
                ])) : ji("", !0)
              ]))), 128))
            ])) : ji("", !0)
          ], 4)) : ji("", !0)
        ])) : ji("", !0)
      ], 64);
    };
  }
});
const HD = /* @__PURE__ */ we(PD, [["__scopeId", "data-v-01717d0d"]]), jD = window.Vue.openBlock, $D = window.Vue.createElementBlock, XD = window.Vue.createElementVNode;
var LD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const qD = {}, KD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eO = /* @__PURE__ */ XD("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), tO = [
  eO
];
function nO(e, r) {
  return jD(), $D("svg", KD, tO);
}
var ha = /* @__PURE__ */ LD(qD, [["render", nO]]);
const R1 = window.Vue.defineComponent, Lc = window.Vue.ref, rO = window.Vue.toRef, qc = window.Vue.inject, pw = window.Vue.watch, oO = window.Vue.nextTick, mw = window.Vue.openBlock, ww = window.Vue.createElementBlock, Kc = window.Vue.createElementVNode, aO = window.Vue.normalizeClass, vw = window.Vue.renderSlot, Vw = window.Vue.createCommentVNode, eu = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var iO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const sO = {
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
}, lO = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, cO = R1({
  emits: lO,
  props: sO,
  setup(e, r) {
    const o = Lc(), i = Lc(!1), s = Lc(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = rO(e, "modelValue"), f = qc("queueSnackbar", !1), m = qc("unqueueSnackbar", !1), g = qc("nextSnackbar", () => {
    }), V = (b, C) => {
      let A, x, _ = C;
      const Y = () => {
        !A || (yr(A), A = 0, _ -= Date.now() - x);
      }, k = () => {
        A || (x = Date.now(), A = Ur(b, _));
      };
      return k(), { pause: Y, resume: k };
    }, U = () => {
      i.value = !1, r.emit("closed"), g && g();
    }, N = (b) => {
      b.keyCode === te.ESCAPE && (s.value = !1);
    }, F = () => {
      o.value.pause();
    }, E = () => {
      s.value && o.value.resume();
    };
    return pw(d, (b) => {
      b ? oO(() => {
        f === !1 ? s.value = b : f(c, s);
      }) : m === !1 ? s.value = b : m(c);
    }, { immediate: !0 }), pw(s, (b) => {
      b ? (i.value = !0, o.value = V(() => {
        s.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), F());
    }), {
      hideTimeout: o,
      contentShow: i,
      internalValue: s,
      id: c,
      incomingValue: d,
      closed: U,
      keyPressed: N,
      stopTimer: F,
      resumeTimer: E
    };
  }
}), uO = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, dO = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, fO = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, hO = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function pO(e, r, o, i, s, c) {
  return e.modelValue || e.contentShow ? (mw(), ww("div", uO, [
    Kc("div", {
      class: aO(["feather-snackbar", {
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
      Kc("div", dO, [
        e.contentShow ? (mw(), ww("div", fO, [
          vw(e.$slots, "default", {}, void 0, !0)
        ])) : Vw("", !0)
      ]),
      Kc("div", hO, [
        vw(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Vw("", !0);
}
var nd = /* @__PURE__ */ iO(cO, [["render", pO], ["__scopeId", "data-v-5cf64a62"]]);
const mO = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
R1({
  props: mO,
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
    return eu("queueSnackbar", i), eu("unqueueSnackbar", s), eu("nextSnackbar", c), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: i,
      shiftItem: c,
      unqueueSnackbar: s
    };
  }
});
const wO = window.Vue.openBlock, vO = window.Vue.createElementBlock, VO = window.Vue.pushScopeId, gO = window.Vue.popScopeId, gw = window.Vue.createElementVNode;
var TO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const UO = {}, yO = (e) => (VO("data-v-2263be39"), e = e(), gO(), e), NO = { class: "spinner-container" }, RO = /* @__PURE__ */ yO(() => /* @__PURE__ */ gw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ gw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), kO = [
  RO
];
function MO(e, r) {
  return wO(), vO("div", NO, kO);
}
var k1 = /* @__PURE__ */ TO(UO, [["render", MO], ["__scopeId", "data-v-2263be39"]]);
const bO = window.Vue.defineComponent, be = window.Vue.unref, it = window.Vue.createVNode, Ta = window.Vue.createElementVNode, Ft = window.Vue.withCtx, eo = window.Vue.openBlock, Tw = window.Vue.createBlock, ZO = window.Vue.createCommentVNode, xs = window.Vue.createTextVNode, $i = window.Vue.createElementBlock, Uw = window.Vue.toDisplayString, SO = window.Vue.pushScopeId, EO = window.Vue.popScopeId, rd = (e) => (SO("data-v-029ecf47"), e = e(), EO(), e), JO = { id: "cont" }, AO = { class: "btns-navigation" }, FO = /* @__PURE__ */ rd(() => /* @__PURE__ */ Ta("span", null, "Situation List", -1)), CO = /* @__PURE__ */ rd(() => /* @__PURE__ */ Ta("span", null, "Show Previous Situation ", -1)), WO = /* @__PURE__ */ rd(() => /* @__PURE__ */ Ta("span", null, "Show Next Situation", -1)), xO = { key: 1 }, BO = {
  key: 0,
  class: "detail"
}, _O = /* @__PURE__ */ xs("Details"), IO = /* @__PURE__ */ xs("Metrics"), DO = {
  key: 1,
  class: "noSituation"
}, OO = /* @__PURE__ */ xs("dismiss"), to = window.Vue.ref, yw = window.Vue.watch, QO = window.Vue.onMounted, zO = window.VueRouter.useRouter, GO = window.VueRouter.useRoute, YO = /* @__PURE__ */ bO({
  __name: "SituationDetail",
  setup(e) {
    const r = zO(), o = GO(), i = parseInt(o.params.id), s = to(i), c = Sn(), d = Fs();
    c.getSituation(s.value), c.situations.length || c.getSituations();
    const f = to(), m = to(), g = to(!0), V = to(
      c.filteredSituations.findIndex((E) => E === s.value)
    ), U = to(!1);
    yw(
      () => c.situationDetail,
      () => {
        f.value = c.situationDetail, g.value = !1;
      }
    ), QO(() => {
      var b;
      const E = ((b = document.getElementById("cont")) == null ? void 0 : b.getBoundingClientRect().width) || 1200;
      m.value = E - 90;
    });
    const N = () => {
      r.push({
        name: "situations"
      });
    }, F = (E) => {
      const b = V.value, C = c.filteredSituations[b + E];
      r.push({
        name: "situationDetail",
        params: {
          id: C
        }
      });
    };
    return yw(o, () => {
      s.value = parseInt(o.params.id), c.getSituation(s.value), V.value = c.filteredSituations.findIndex((E) => E == s.value);
    }), d.$subscribe((E, b) => {
      U.value = b.showError;
    }), (E, b) => (eo(), $i("div", JO, [
      Ta("div", AO, [
        it(be(ge), {
          primary: "",
          onClick: b[0] || (b[0] = () => N())
        }, {
          default: Ft(() => [
            it(be($), {
              icon: be(ha),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            FO
          ]),
          _: 1
        }),
        Ta("div", null, [
          it(be(ge), {
            disabled: !be(c).filteredSituations[V.value - 1],
            primary: "",
            onClick: b[1] || (b[1] = () => F(-1))
          }, {
            default: Ft(() => [
              it(be($), {
                icon: be(ha),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              CO
            ]),
            _: 1
          }, 8, ["disabled"]),
          it(be(ge), {
            disabled: !be(c).filteredSituations[V.value + 1],
            primary: "",
            onClick: b[2] || (b[2] = () => F(1))
          }, {
            default: Ft(() => [
              WO,
              it(be($), {
                icon: be(ha),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? (eo(), Tw(be(k1), {
        key: 0,
        class: "spinner"
      })) : (eo(), $i("div", xO, [
        f.value ? (eo(), $i("div", BO, [
          it(be(XC), null, {
            tabs: Ft(() => [
              it(be(am), null, {
                default: Ft(() => [
                  _O
                ]),
                _: 1
              }),
              it(be(am), null, {
                default: Ft(() => [
                  IO
                ]),
                _: 1
              })
            ]),
            default: Ft(() => [
              it(be(im), { class: "panel" }, {
                default: Ft(() => [
                  it(X3, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              it(be(im), { class: "panel" }, {
                default: Ft(() => [
                  m.value ? (eo(), Tw(HD, {
                    key: 0,
                    situation: f.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : ZO("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (eo(), $i("div", DO, " Error. The situation " + Uw(be(i)) + " does not exist. ", 1))
      ])),
      it(be(nd), {
        modelValue: U.value,
        "onUpdate:modelValue": b[4] || (b[4] = (C) => U.value = C),
        center: "",
        error: ""
      }, {
        button: Ft(() => [
          it(be(ge), {
            onClick: b[3] || (b[3] = (C) => U.value = !1),
            text: ""
          }, {
            default: Ft(() => [
              OO
            ]),
            _: 1
          })
        ]),
        default: Ft(() => [
          xs(Uw(be(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const PO = /* @__PURE__ */ we(YO, [["__scopeId", "data-v-029ecf47"]]), HO = window.Vue.defineComponent, Nw = window.Vue.normalizeClass, so = window.Vue.createElementVNode, Xi = window.Vue.unref, jO = window.Vue.createVNode, Li = window.Vue.toDisplayString, $O = window.Vue.createTextVNode, XO = window.Vue.openBlock, LO = window.Vue.createElementBlock, qO = window.Vue.pushScopeId, KO = window.Vue.popScopeId, eQ = (e) => (qO("data-v-e116ca71"), e = e(), KO(), e), tQ = { class: "alarmInfo" }, nQ = { class: "alarm-title" }, rQ = /* @__PURE__ */ eQ(() => /* @__PURE__ */ so("strong", null, " Duration: ", -1)), oQ = { class: "description" }, aQ = /* @__PURE__ */ HO({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, i = new Date().getTime();
    return (s, c) => (XO(), LO("div", {
      class: Nw(["alarm", { selected: o.selected }])
    }, [
      so("div", tQ, [
        so("div", {
          class: Nw(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        jO(Xi(Aa), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        so("div", nQ, Li(e.alarm.nodeLabel) + " - " + Li(e.alarm.id), 1)
      ]),
      so("div", null, [
        rQ,
        $O(" " + Li(Xi(Rs)(Xi(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      so("div", oQ, Li(Xi(cv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const M1 = /* @__PURE__ */ we(aQ, [["__scopeId", "data-v-e116ca71"]]), iQ = window.Vue.defineComponent, ze = window.Vue.unref, Ct = window.Vue.createVNode, xt = window.Vue.createElementVNode, no = window.Vue.withCtx, sQ = window.Vue.toDisplayString, od = window.Vue.createTextVNode, lQ = window.Vue.normalizeClass, ro = window.Vue.openBlock, oo = window.Vue.createElementBlock, cQ = window.Vue.createCommentVNode, uQ = window.Vue.renderList, dQ = window.Vue.Fragment, fQ = window.Vue.pushScopeId, hQ = window.Vue.popScopeId, Wa = (e) => (fQ("data-v-7fae0d9e"), e = e(), hQ(), e), pQ = { class: "container" }, mQ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ xt("span", null, "Situation List", -1)), wQ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ xt("h2", null, "New Situation", -1)), vQ = { class: "form" }, VQ = { class: "fields" }, gQ = /* @__PURE__ */ od(" Total alarms added: "), TQ = { class: "total" }, UQ = {
  key: 0,
  class: "errorList"
}, yQ = { class: "footer" }, NQ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ xt("span", null, "Clear", -1)), RQ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ xt("span", null, "Add Situation", -1)), kQ = { class: "alarm-column" }, MQ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ xt("h4", null, "Add Unassociated Alarms", -1)), bQ = {
  key: 0,
  class: "alarms"
}, ZQ = { key: 1 }, SQ = /* @__PURE__ */ od(" Error on creating new situation :( "), EQ = /* @__PURE__ */ od("dismiss"), JQ = window.VueRouter.useRouter, zn = window.Vue.ref, AQ = window.Vue.watch, FQ = /* @__PURE__ */ iQ({
  __name: "AddSituation",
  setup(e) {
    const r = JQ(), o = Sn(), i = zn(), s = zn(""), c = zn(), d = zn(""), f = zn([]), m = zn(!1), g = zn(), V = zn(o.unassignedAlarms);
    V.value.length || o.getUnassignedAlarms(), AQ(
      () => o.unassignedAlarms,
      () => {
        V.value = o.unassignedAlarms;
      }
    );
    const U = () => {
      r.push({
        name: "situations"
      });
    }, N = (A) => {
      A.includes("all") ? V.value = o.unassignedAlarms : V.value = o.unassignedAlarms.filter(
        (x) => A.includes(x.severity)
      );
    }, F = (A) => {
      m.value = !1, me.exports.includes(f.value, A) ? me.exports.remove(f.value, (x) => x === A) : f.value.push(A);
    }, E = () => {
      const A = "This field should not be empty";
      let x = !0;
      return i.value || (s.value = A, x = !1), c.value || (d.value = A, x = !1), f.value.length < 2 && (m.value = !0, x = !1), x;
    }, b = async () => {
      if (E()) {
        const A = {
          alarmIdList: f.value,
          diagnosticText: c.value,
          description: i.value
        };
        await VW(A) ? r.push({
          name: "situations"
        }) : g.value = !0;
      }
    }, C = () => {
      i.value = "", c.value = "", f.value = [], V.value = o.unassignedAlarms;
    };
    return (A, x) => (ro(), oo("div", pQ, [
      Ct(ze(ge), {
        primary: "",
        onClick: x[0] || (x[0] = () => U()),
        class: "back-btn"
      }, {
        default: no(() => [
          Ct(ze($), {
            icon: ze(ha),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          mQ
        ]),
        _: 1
      }),
      wQ,
      xt("div", vQ, [
        xt("div", VQ, [
          Ct(ze(vu), {
            modelValue: i.value,
            "onUpdate:modelValue": x[1] || (x[1] = (_) => i.value = _),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          Ct(ze(vu), {
            modelValue: c.value,
            "onUpdate:modelValue": x[2] || (x[2] = (_) => c.value = _),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          xt("div", null, [
            xt("div", {
              class: lQ(["totalAlarms", { errorList: m.value }])
            }, [
              gQ,
              xt("span", TQ, sQ(ze(f).length), 1)
            ], 2),
            m.value ? (ro(), oo("div", UQ, " It is required to add at least 2 alarms ")) : cQ("", !0)
          ]),
          xt("div", yQ, [
            Ct(ze(ge), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: no(() => [
                Ct(ze($), {
                  icon: ze(go),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                NQ
              ]),
              _: 1
            }),
            Ct(ze(ge), {
              class: "btn",
              primary: "",
              onClick: b
            }, {
              default: no(() => [
                Ct(ze($), {
                  icon: ze(Iu),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                RQ
              ]),
              _: 1
            })
          ])
        ]),
        xt("div", kQ, [
          MQ,
          Ct(Va, {
            alarms: ze(o).unassignedAlarms,
            onSelectedOption: N,
            property: "severity"
          }, null, 8, ["alarms"]),
          V.value.length ? (ro(), oo("div", bQ, [
            (ro(!0), oo(dQ, null, uQ(V.value, (_) => (ro(), oo("div", {
              key: _.id,
              class: "alarm-card"
            }, [
              Ct(M1, {
                selected: ze(me.exports.includes)(ze(f), _.id),
                alarm: _,
                onSelectedAlarm: F
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ro(), oo("div", ZQ, "There is no unassigned alarms"))
        ])
      ]),
      Ct(ze(nd), {
        modelValue: g.value,
        "onUpdate:modelValue": x[4] || (x[4] = (_) => g.value = _),
        center: "",
        error: ""
      }, {
        button: no(() => [
          Ct(ze(ge), {
            onClick: x[3] || (x[3] = (_) => g.value = !1),
            text: ""
          }, {
            default: no(() => [
              EQ
            ]),
            _: 1
          })
        ]),
        default: no(() => [
          SQ
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const CQ = /* @__PURE__ */ we(FQ, [["__scopeId", "data-v-7fae0d9e"]]);
var WQ = Object.defineProperty, xQ = Object.defineProperties, BQ = Object.getOwnPropertyDescriptors, Rw = Object.getOwnPropertySymbols, _Q = Object.prototype.hasOwnProperty, IQ = Object.prototype.propertyIsEnumerable, kw = (e, r, o) => r in e ? WQ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, ss = (e, r) => {
  for (var o in r || (r = {}))
    _Q.call(r, o) && kw(e, o, r[o]);
  if (Rw)
    for (var o of Rw(r))
      IQ.call(r, o) && kw(e, o, r[o]);
  return e;
}, b1 = (e, r) => xQ(e, BQ(r));
const Z1 = window.Vue.defineComponent, DQ = window.Vue.ref, pa = window.Vue.computed, OQ = window.Vue.reactive, Mw = window.Vue.watch, tu = window.Vue.inject, S1 = window.Vue.resolveComponent, yu = window.Vue.openBlock, E1 = window.Vue.createElementBlock, $n = window.Vue.createElementVNode, QQ = window.Vue.createBlock, zQ = window.Vue.createCommentVNode, J1 = window.Vue.renderSlot, GQ = window.Vue.pushScopeId, YQ = window.Vue.popScopeId, nu = window.Vue.toRef, bw = window.Vue.mergeProps, PQ = window.Vue.toDisplayString, HQ = window.Vue.createVNode;
var A1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const jQ = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, $Q = Z1({
  props: jQ,
  setup(e) {
    const r = DQ(), o = () => {
      r.value.focus();
    }, i = pa(() => ie("feather-radio-button")), s = OQ({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), c = pa(() => ie("radio-label-id")), d = pa(() => s.first || s.checked ? 0 : -1);
    Mw(() => e.disabled, (U) => {
      s.disabled = U;
    }, { immediate: !0 }), Mw(() => e.value, (U) => {
      s.value = U;
    }, { immediate: !0 });
    const f = tu("register", (U) => {
    }), m = tu("blur", (U) => {
    }), g = tu("select", (U) => {
    });
    return f(s), {
      labelId: c,
      tabindex: d,
      vm: s,
      blur: m,
      click: () => {
        g(s);
      },
      input: r,
      id: i
    };
  },
  components: {
    FeatherRipple: Xn
  }
}), XQ = (e) => (GQ("data-v-24790cf0"), e = e(), YQ(), e), LQ = { class: "layout-container" }, qQ = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], KQ = { class: "radio hover focus" }, e5 = /* @__PURE__ */ XQ(() => /* @__PURE__ */ $n("div", {
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
], -1)), t5 = ["id"];
function n5(e, r, o, i, s, c) {
  const d = S1("feather-ripple");
  return yu(), E1("div", LQ, [
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
      $n("div", KQ, [
        e5,
        e.vm.disabled ? zQ("", !0) : (yu(), QQ(d, {
          key: 0,
          center: ""
        }))
      ]),
      $n("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        J1(e.$slots, "default", {}, void 0, !0)
      ], 8, t5)
    ], 40, qQ)
  ]);
}
var Ua = /* @__PURE__ */ A1($Q, [["render", n5], ["__scopeId", "data-v-24790cf0"]]);
const r5 = b1(ss({}, Za), {
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
}), o5 = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, a5 = Z1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: r5,
  emits: o5,
  setup(e, r) {
    Sa(e);
    const o = nu(e, "error"), i = nu(e, "modelValue"), s = pa(() => ie("feather-input-description")), c = pa(() => {
      const d = b1(ss({}, r.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!o.value), d;
    });
    return ss(ss({
      descriptionId: s,
      attrs: c
    }, mv(i, r.emit, e.label, e.schema, nu(e, "error"))), ba(r.attrs));
  },
  components: {
    InputSubText: ka
  }
}), i5 = ["for"], s5 = ["id"];
function l5(e, r, o, i, s, c) {
  const d = S1("InputSubText");
  return yu(), E1("div", bw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    $n("label", {
      for: e.groupId,
      class: "group-label"
    }, PQ(e.label), 9, i5),
    $n("div", bw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      J1(e.$slots, "default", {}, void 0, !0)
    ], 16, s5),
    HQ(d, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var ad = /* @__PURE__ */ A1(a5, [["render", l5], ["__scopeId", "data-v-6775aeb9"]]);
const c5 = window.Vue.openBlock, u5 = window.Vue.createElementBlock, d5 = window.Vue.createStaticVNode;
var f5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const h5 = {}, p5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, m5 = /* @__PURE__ */ d5('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), w5 = [
  m5
];
function v5(e, r) {
  return c5(), u5("svg", p5, w5);
}
var V5 = /* @__PURE__ */ f5(h5, [["render", v5]]);
const g5 = window.Vue.openBlock, T5 = window.Vue.createElementBlock, U5 = window.Vue.createStaticVNode;
var y5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const N5 = {}, R5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, k5 = /* @__PURE__ */ U5('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), M5 = [
  k5
];
function b5(e, r) {
  return g5(), T5("svg", R5, M5);
}
var Z5 = /* @__PURE__ */ y5(N5, [["render", b5]]);
const S5 = window.Vue.openBlock, E5 = window.Vue.createElementBlock, J5 = window.Vue.createElementVNode;
var A5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const F5 = {}, C5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W5 = /* @__PURE__ */ J5("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), x5 = [
  W5
];
function B5(e, r) {
  return S5(), E5("svg", C5, x5);
}
var _5 = /* @__PURE__ */ A5(F5, [["render", B5]]);
const I5 = window.Vue.openBlock, D5 = window.Vue.createElementBlock, O5 = window.Vue.createStaticVNode;
var Q5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const z5 = {}, G5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Y5 = /* @__PURE__ */ O5('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), P5 = [
  Y5
];
function H5(e, r) {
  return I5(), D5("svg", G5, P5);
}
var j5 = /* @__PURE__ */ Q5(z5, [["render", H5]]);
const $5 = window.Vue.openBlock, X5 = window.Vue.createElementBlock, L5 = window.Vue.createElementVNode;
var q5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const K5 = {}, ez = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tz = /* @__PURE__ */ L5("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), nz = [
  tz
];
function rz(e, r) {
  return $5(), X5("svg", ez, nz);
}
var oz = /* @__PURE__ */ q5(K5, [["render", rz]]);
const id = () => window.VRouter || ld, az = window.Vue.defineComponent, Ze = window.Vue.createElementVNode, ya = window.Vue.createTextVNode, et = window.Vue.unref, kn = window.Vue.createVNode, qi = window.Vue.withCtx, Zw = window.Vue.openBlock, Sw = window.Vue.createElementBlock, iz = window.Vue.createCommentVNode, sz = window.Vue.pushScopeId, lz = window.Vue.popScopeId, qt = (e) => (sz("data-v-b4b3bdcf"), e = e(), lz(), e), cz = { class: "container" }, uz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("div", { class: "title" }, "ALEC", -1)), dz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("div", { class: "description" }, [
  /* @__PURE__ */ ya(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ze("strong", null, "Our goal"),
  /* @__PURE__ */ ya(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), fz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("h3", null, "Key Benefits:", -1)), hz = { class: "list" }, pz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), mz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("span", null, "Assist in root cause analysis.", -1)), wz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), vz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("span", null, "Easy configuration.", -1)), Vz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), gz = {
  key: 0,
  class: "optin"
}, Tz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("h3", null, "Enable ALEC for more precise results:", -1)), Uz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), yz = { class: "choices" }, Nz = /* @__PURE__ */ qt(() => /* @__PURE__ */ Ze("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), Rz = /* @__PURE__ */ ya("Yes"), kz = /* @__PURE__ */ ya("No"), Mz = /* @__PURE__ */ ya(" Continue "), bz = window.Vue.ref, Zz = /* @__PURE__ */ az({
  __name: "WelcomePage",
  setup(e) {
    const r = Ca(), o = id(), i = bz(!0), s = () => {
      const c = Boolean(i.value);
      r.savePermission(c), o.push({ name: "configuration" });
    };
    return (c, d) => (Zw(), Sw("div", cz, [
      uz,
      dz,
      Ze("div", null, [
        fz,
        Ze("div", hz, [
          Ze("div", null, [
            kn(et($), {
              icon: et(j5),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pz
          ]),
          Ze("div", null, [
            kn(et($), {
              icon: et(_5),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            mz
          ]),
          Ze("div", null, [
            kn(et($), {
              icon: et(oz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wz
          ]),
          Ze("div", null, [
            kn(et($), {
              icon: et(V5),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            vz
          ]),
          Ze("div", null, [
            kn(et($), {
              icon: et(Z5),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Vz
          ])
        ])
      ]),
      et(r).isAdmin ? (Zw(), Sw("div", gz, [
        Tz,
        Uz,
        Ze("div", yz, [
          Nz,
          kn(et(ad), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f),
            label: ""
          }, {
            default: qi(() => [
              kn(et(Ua), { value: !0 }, {
                default: qi(() => [
                  Rz
                ]),
                _: 1
              }),
              kn(et(Ua), { value: !1 }, {
                default: qi(() => [
                  kz
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : iz("", !0),
      kn(et(ge), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: qi(() => [
          Mz
        ]),
        _: 1
      })
    ]));
  }
});
const Sz = /* @__PURE__ */ we(Zz, [["__scopeId", "data-v-b4b3bdcf"]]), Ez = window.Vue.defineComponent, Jz = window.Vue.createElementVNode, Az = window.Vue.createTextVNode, Fz = window.Vue.unref, Cz = window.Vue.withCtx, Wz = window.Vue.createVNode, xz = window.Vue.Fragment, Bz = window.Vue.openBlock, _z = window.Vue.createElementBlock, Iz = window.Vue.pushScopeId, Dz = window.Vue.popScopeId, Oz = (e) => (Iz("data-v-bcb7dcc6"), e = e(), Dz(), e), Qz = /* @__PURE__ */ Oz(() => /* @__PURE__ */ Jz("div", { class: "main" }, "Something bad is happening...", -1)), zz = /* @__PURE__ */ Az(" Reload "), Gz = /* @__PURE__ */ Ez({
  __name: "ErrorPage",
  setup(e) {
    const r = id(), o = () => {
      r.push({ name: "situations" });
    };
    return (i, s) => (Bz(), _z(xz, null, [
      Qz,
      Wz(Fz(ge), {
        primary: "",
        onClick: o
      }, {
        default: Cz(() => [
          zz
        ]),
        _: 1
      })
    ], 64));
  }
});
const Yz = /* @__PURE__ */ we(Gz, [["__scopeId", "data-v-bcb7dcc6"]]);
const Pz = window.Vue.defineComponent, Ew = window.Vue.resolveComponent, Ki = window.Vue.openBlock, es = window.Vue.createElementBlock, ru = window.Vue.createElementVNode, Jw = window.Vue.normalizeClass, Hz = window.Vue.withModifiers, Aw = window.Vue.renderSlot, jz = window.Vue.createTextVNode, $z = window.Vue.toDisplayString, ou = window.Vue.createVNode, Xz = window.Vue.Transition, Lz = window.Vue.withCtx, qz = window.Vue.createCommentVNode;
var Kz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const eG = {
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
}, tG = {
  "update:modelValue": (e) => !0
}, nG = Pz({
  name: "FeatherExpansionPanel",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: tG,
  props: eG,
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
      return Es;
    },
    contentId() {
      return ie("feather-expansion-panel");
    },
    headerId() {
      return ie("feather-expansion-header");
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
    FeatherSpinner: k1
  }
}), rG = { class: "feather-expansion" }, oG = ["aria-level"], aG = ["id", "aria-controls", "aria-expanded", "aria-disabled", "aria-busy"], iG = { class: "feather-expansion-header-button-text" }, sG = ["id", "aria-labelledby"], lG = {
  key: 0,
  class: "panel-content"
}, cG = {
  key: 1,
  class: "panel-content"
};
function uG(e, r, o, i, s, c) {
  const d = Ew("FeatherIcon"), f = Ew("FeatherSpinner");
  return Ki(), es("div", rG, [
    ru("div", {
      "aria-level": e.level,
      role: "heading"
    }, [
      ru("a", {
        href: "#",
        class: Jw(["feather-expansion-header-button", { expanded: e.expanded, disabled: e.disabled }]),
        role: "button",
        id: e.headerId,
        "aria-controls": e.contentId,
        "aria-expanded": e.expanded ? "true" : "false",
        "aria-disabled": e.disabled ? "true" : "false",
        "aria-busy": e.loading ? "true" : "false",
        onClick: r[0] || (r[0] = Hz((...m) => e.handleClick && e.handleClick(...m), ["prevent"])),
        "data-ref-id": "feather-expansion-header-button"
      }, [
        ru("span", iG, [
          Aw(e.$slots, "title", {}, () => [
            jz($z(e.title), 1)
          ], !0)
        ]),
        ou(d, {
          class: Jw(["feather-expansion-header-button-icon", { rotated: e.expanded, disabled: e.disabled }]),
          icon: e.downIcon
        }, null, 8, ["icon", "class"])
      ], 10, aG)
    ], 8, oG),
    ou(Xz, {
      name: "expand",
      onEnter: e.enter,
      onAfterEnter: e.afterEnter,
      onLeave: e.leave
    }, {
      default: Lz(() => [
        e.expanded ? (Ki(), es("div", {
          key: 0,
          id: e.contentId,
          "aria-labelledby": e.headerId,
          role: "region",
          "data-ref-id": "feather-expansion-content"
        }, [
          e.loading ? (Ki(), es("div", lG, [
            ou(f)
          ])) : (Ki(), es("div", cG, [
            Aw(e.$slots, "default", {}, void 0, !0)
          ]))
        ], 8, sG)) : qz("", !0)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onLeave"])
  ]);
}
var au = /* @__PURE__ */ Kz(nG, [["render", uG], ["__scopeId", "data-v-ddc90408"]]);
const dG = window.Vue.defineComponent, Ee = window.Vue.unref, Ge = window.Vue.createVNode, Pn = window.Vue.createElementVNode, rn = window.Vue.withCtx, Fw = window.Vue.renderList, Cw = window.Vue.Fragment, ao = window.Vue.openBlock, io = window.Vue.createElementBlock, Ww = window.Vue.toDisplayString, Nu = window.Vue.createTextVNode, fG = window.Vue.pushScopeId, hG = window.Vue.popScopeId, sd = (e) => (fG("data-v-60a6038c"), e = e(), hG(), e), pG = { class: "container" }, mG = { class: "nav-btns" }, wG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Pn("span", null, "Situation List", -1)), vG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Pn("h2", null, "List Unassigned Alarms", -1)), VG = { class: "content" }, gG = { class: "filters" }, TG = { class: "list" }, UG = { class: "action-btns" }, yG = /* @__PURE__ */ sd(() => /* @__PURE__ */ Pn("span", null, "Move", -1)), NG = {
  key: 0,
  class: "alarms"
}, RG = { key: 1 }, kG = /* @__PURE__ */ Nu("dismiss"), jt = window.Vue.ref, MG = window.Vue.watch, bG = window.Vue.markRaw, ZG = window.VueRouter.useRouter, SG = /* @__PURE__ */ dG({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], o = bG({
      ArrowBack: ha,
      ExitToApp: Kv
    }), i = ZG(), s = Sn();
    s.getUnassignedAlarms(), s.getSituations();
    const c = jt([]), d = jt([]), f = jt(!1), m = jt(!1), g = jt(""), V = jt(!1), U = jt(!1), N = jt(["all"]), F = jt(["all"]), E = jt(r[0].id), b = jt(!0);
    MG(
      () => s.unassignedAlarms,
      () => {
        Y();
      }
    );
    const C = (z) => {
      me.exports.includes(d.value, z) ? me.exports.remove(d.value, (Q) => Q === z) : d.value.push(z);
    }, A = (z) => {
      F.value = z, Y();
    }, x = (z) => {
      N.value = z, Y();
    }, _ = (z) => {
      E.value = z, Y();
    }, Y = () => {
      let z = s.unassignedAlarms;
      if (F.value.includes("all") || (z = z.filter(
        (Q) => F.value.includes(Q.severity)
      )), N.value.includes("all") || (z = z.filter(
        (Q) => N.value.includes(Q.nodeLabel)
      )), E.value !== 1)
        switch (E.value) {
          case 2:
            z = z.filter((Q) => Gb(Q.firstEventTime));
            break;
          case 3:
            z = z.filter(
              (Q) => Pb(Q.firstEventTime)
            );
            break;
          case 4:
            z = z.filter(
              (Q) => zb(Q.firstEventTime)
            );
            break;
        }
      c.value = z;
    }, k = () => {
      f.value ? d.value = c.value.map((z) => z.id) : d.value = [];
    }, W = async (z) => {
      await Yv(z, d.value) ? s.getUnassignedAlarms() : (V.value = !0, U.value = !0, g.value = "Error on moving the alarms :("), m.value = !1;
    }, I = () => {
      i.push({
        name: "situations"
      });
    }, G = () => {
      d.value.length ? m.value = !0 : (V.value = !0, U.value = !1, g.value = "You need to choose at least one alarm!");
    };
    return (z, Q) => (ao(), io("div", pG, [
      Pn("div", mG, [
        Ge(Ee(ge), {
          primary: "",
          onClick: Q[0] || (Q[0] = () => I())
        }, {
          default: rn(() => [
            Ge(Ee($), {
              icon: Ee(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wG
          ]),
          _: 1
        }),
        Ge(Jv)
      ]),
      vG,
      Pn("div", VG, [
        Pn("div", gG, [
          Ge(Ee(au), {
            title: "By Severity",
            modelValue: b.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (L) => b.value = L)
          }, {
            default: rn(() => [
              Ge(Va, {
                alarms: Ee(s).unassignedAlarms,
                onSelectedOption: A,
                "pre-selected": F.value,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Ge(Ee(au), {
            title: "By Node Label",
            modelValue: b.value,
            "onUpdate:modelValue": Q[2] || (Q[2] = (L) => b.value = L)
          }, {
            default: rn(() => [
              Ge(Va, {
                alarms: Ee(s).unassignedAlarms,
                onSelectedOption: x,
                "pre-selected": N.value,
                property: "nodeLabel",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Ge(Ee(au), { title: "By Date Start" }, {
            default: rn(() => [
              Ge(Ee(ad), {
                label: "",
                modelValue: E.value,
                "onUpdate:modelValue": [
                  Q[3] || (Q[3] = (L) => E.value = L),
                  Q[4] || (Q[4] = (L) => _(L))
                ],
                vertical: ""
              }, {
                default: rn(() => [
                  (ao(), io(Cw, null, Fw(r, (L) => Ge(Ee(Ua), {
                    value: L.id,
                    key: L.id
                  }, {
                    default: rn(() => [
                      Nu(Ww(L.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"])), 64))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        Pn("div", TG, [
          Pn("div", UG, [
            Ge(Ee(Aa), {
              modelValue: f.value,
              "onUpdate:modelValue": [
                Q[5] || (Q[5] = (L) => f.value = L),
                k
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Ge(Ee(ge), { onClick: G }, {
              default: rn(() => [
                Ge(Ee($), {
                  icon: Ee(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                yG
              ]),
              _: 1
            })
          ]),
          Ee(c).length ? (ao(), io("div", NG, [
            (ao(!0), io(Cw, null, Fw(Ee(c), (L) => (ao(), io("div", {
              key: L.id,
              class: "card"
            }, [
              Ge(M1, {
                selected: Ee(me.exports.includes)(Ee(d), L.id),
                alarm: L,
                onSelectedAlarm: C
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ao(), io("div", RG, "There is no unassigned alarms"))
        ])
      ]),
      Ge(p1, {
        situationId: 0,
        visible: m.value,
        onSituationSelected: W,
        onDrawerClosed: Q[6] || (Q[6] = () => m.value = !1)
      }, null, 8, ["visible"]),
      Ge(Ee(nd), {
        modelValue: V.value,
        "onUpdate:modelValue": Q[8] || (Q[8] = (L) => V.value = L),
        center: "",
        error: U.value
      }, {
        button: rn(() => [
          Ge(Ee(ge), {
            onClick: Q[7] || (Q[7] = (L) => V.value = !1),
            text: ""
          }, {
            default: rn(() => [
              kG
            ]),
            _: 1
          })
        ]),
        default: rn(() => [
          Nu(Ww(g.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const EG = /* @__PURE__ */ we(SG, [["__scopeId", "data-v-60a6038c"]]), JG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", AG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", FG = window.Vue.defineComponent, _e = window.Vue.createElementVNode, Ru = window.Vue.createTextVNode, Gn = window.Vue.unref, aa = window.Vue.withCtx, ia = window.Vue.createVNode, CG = window.Vue.openBlock, WG = window.Vue.createElementBlock, xG = window.Vue.pushScopeId, BG = window.Vue.popScopeId, kr = (e) => (xG("data-v-9a5b5f4e"), e = e(), BG(), e), _G = { class: "container" }, IG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("h2", null, "Configuration", -1)), DG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("p", null, [
  /* @__PURE__ */ Ru(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ _e("br"),
  /* @__PURE__ */ Ru(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ _e("strong", null, [
    /* @__PURE__ */ _e("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), OG = { class: "radio-content" }, QG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("strong", { class: "title" }, "Clustering", -1)), zG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), GG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("img", {
  class: "img",
  src: JG
}, null, -1)), YG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("div", { class: "hellinger" }, [
  /* @__PURE__ */ _e("strong", null, "With hellinger distance"),
  /* @__PURE__ */ _e("br"),
  /* @__PURE__ */ _e("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), PG = /* @__PURE__ */ kr(() => /* @__PURE__ */ _e("div", { class: "radio-content" }, [
  /* @__PURE__ */ _e("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ _e("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ _e("img", {
    class: "img img2",
    src: AG
  })
], -1)), HG = /* @__PURE__ */ Ru(" Continue "), xw = window.Vue.ref, jG = /* @__PURE__ */ FG({
  __name: "ConfigurationPage",
  setup(e) {
    const r = Ca(), o = id(), i = xw(!1), s = xw(Ut.ENGINE_DBSCAN), c = () => {
      zv(r.allowSave), vW(s.value, i.value), o.push({ name: "situations" });
    };
    return (d, f) => (CG(), WG("div", _G, [
      IG,
      DG,
      _e("div", null, [
        ia(Gn(ad), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => s.value = m)
        }, {
          default: aa(() => [
            ia(Gn(Ua), {
              class: "radio",
              value: Gn(Ut).ENGINE_DBSCAN
            }, {
              default: aa(() => [
                _e("div", OG, [
                  QG,
                  zG,
                  GG,
                  ia(Gn(Aa), {
                    modelValue: i.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                    disabled: s.value !== Gn(Ut).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: aa(() => [
                      YG
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            ia(Gn(Ua), {
              class: "radio",
              value: Gn(Ut).ENGINE_DEEP_LEARNING
            }, {
              default: aa(() => [
                PG
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      ia(Gn(ge), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => c())
      }, {
        default: aa(() => [
          HG
        ]),
        _: 1
      })
    ]));
  }
});
const $G = /* @__PURE__ */ we(jG, [["__scopeId", "data-v-9a5b5f4e"]]), XG = window.VueRouter.createRouter, LG = window.VueRouter.createWebHistory, iu = async () => {
  const e = window.VRouter || ld, r = Ca();
  if (!r.userId) {
    const o = await r.getUserRole();
    await r.getAlecInfo(), o ? e.push({ name: "home" }) : e.push({ name: "error" });
  }
}, F1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || ld, o = Ca();
      await o.getUserRole(), await o.getAlecInfo(), o.firstTime ? r.push({ name: "welcome", params: e.params }) : r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => iu(),
    component: Sz
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => iu(),
    component: $G
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => iu(),
    component: yC
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: PO
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: CQ
  },
  {
    path: "/error",
    name: "error",
    component: Yz
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: EG
  }
], su = window.VRouter;
if (su) {
  const e = "Plugin-alecUiExtension", r = su.hasRoute(e) ? e : "Plugin";
  for (const o of F1) {
    const { path: i, name: s, component: c, beforeEnter: d } = o;
    su.addRoute(r, {
      path: i.slice(1),
      name: s,
      component: c,
      beforeEnter: d
    });
  }
}
const ld = XG({
  history: LG(),
  routes: F1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = FR;
