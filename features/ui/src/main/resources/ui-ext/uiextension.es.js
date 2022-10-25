const Se = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
}, hU = {}, pU = window.Vue.resolveComponent, mU = window.Vue.createVNode, VU = window.Vue.openBlock, wU = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vU = { class: "main" };
function TU(t, i) {
  const r = pU("router-view");
  return VU(), wU("div", vU, [
    mU(r)
  ]);
}
const gU = /* @__PURE__ */ Se(hU, [["render", TU], ["__scopeId", "data-v-5d32d140"]]), UU = window.Vue.defineComponent, RU = window.Vue.openBlock, NU = window.Vue.createBlock, MU = /* @__PURE__ */ UU({
  __name: "App",
  setup(t) {
    return (i, r) => (RU(), NU(gU));
  }
});
var ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yU(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ip = { exports: {} }, Kl = { exports: {} }, op = function(i, r) {
  return function() {
    for (var l = new Array(arguments.length), u = 0; u < l.length; u++)
      l[u] = arguments[u];
    return i.apply(r, l);
  };
}, kU = op, ec = Object.prototype.toString, tc = function(t) {
  return function(i) {
    var r = ec.call(i);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function qn(t) {
  return t = t.toLowerCase(), function(r) {
    return tc(r) === t;
  };
}
function nc(t) {
  return Array.isArray(t);
}
function la(t) {
  return typeof t > "u";
}
function ZU(t) {
  return t !== null && !la(t) && t.constructor !== null && !la(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var ap = qn("ArrayBuffer");
function JU(t) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(t) : i = t && t.buffer && ap(t.buffer), i;
}
function bU(t) {
  return typeof t == "string";
}
function EU(t) {
  return typeof t == "number";
}
function sp(t) {
  return t !== null && typeof t == "object";
}
function ea(t) {
  if (tc(t) !== "object")
    return !1;
  var i = Object.getPrototypeOf(t);
  return i === null || i === Object.prototype;
}
var SU = qn("Date"), FU = qn("File"), AU = qn("Blob"), WU = qn("FileList");
function rc(t) {
  return ec.call(t) === "[object Function]";
}
function CU(t) {
  return sp(t) && rc(t.pipe);
}
function xU(t) {
  var i = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || ec.call(t) === i || rc(t.toString) && t.toString() === i);
}
var BU = qn("URLSearchParams");
function DU(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function IU() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ic(t, i) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), nc(t))
      for (var r = 0, a = t.length; r < a; r++)
        i.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && i.call(null, t[l], l, t);
}
function Ql() {
  var t = {};
  function i(l, u) {
    ea(t[u]) && ea(l) ? t[u] = Ql(t[u], l) : ea(l) ? t[u] = Ql({}, l) : nc(l) ? t[u] = l.slice() : t[u] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    ic(arguments[r], i);
  return t;
}
function OU(t, i, r) {
  return ic(i, function(l, u) {
    r && typeof l == "function" ? t[u] = kU(l, r) : t[u] = l;
  }), t;
}
function QU(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function zU(t, i, r, a) {
  t.prototype = Object.create(i.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function GU(t, i, r) {
  var a, l, u, d = {};
  i = i || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      u = a[l], d[u] || (i[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, i)) && t !== Object.prototype);
  return i;
}
function YU(t, i, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= i.length;
  var a = t.indexOf(i, r);
  return a !== -1 && a === r;
}
function _U(t) {
  if (!t)
    return null;
  var i = t.length;
  if (la(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = t[i];
  return r;
}
var HU = function(t) {
  return function(i) {
    return t && i instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Be = {
  isArray: nc,
  isArrayBuffer: ap,
  isBuffer: ZU,
  isFormData: xU,
  isArrayBufferView: JU,
  isString: bU,
  isNumber: EU,
  isObject: sp,
  isPlainObject: ea,
  isUndefined: la,
  isDate: SU,
  isFile: FU,
  isBlob: AU,
  isFunction: rc,
  isStream: CU,
  isURLSearchParams: BU,
  isStandardBrowserEnv: IU,
  forEach: ic,
  merge: Ql,
  extend: OU,
  trim: DU,
  stripBOM: QU,
  inherits: zU,
  toFlatObject: GU,
  kindOf: tc,
  kindOfTest: qn,
  endsWith: YU,
  toArray: _U,
  isTypedArray: HU,
  isFileList: WU
}, Vr = Be;
function tf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var lp = function(i, r, a) {
  if (!r)
    return i;
  var l;
  if (a)
    l = a(r);
  else if (Vr.isURLSearchParams(r))
    l = r.toString();
  else {
    var u = [];
    Vr.forEach(r, function(V, g) {
      V === null || typeof V > "u" || (Vr.isArray(V) ? g = g + "[]" : V = [V], Vr.forEach(V, function(N) {
        Vr.isDate(N) ? N = N.toISOString() : Vr.isObject(N) && (N = JSON.stringify(N)), u.push(tf(g) + "=" + tf(N));
      }));
    }), l = u.join("&");
  }
  if (l) {
    var d = i.indexOf("#");
    d !== -1 && (i = i.slice(0, d)), i += (i.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return i;
}, PU = Be;
function va() {
  this.handlers = [];
}
va.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
va.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
va.prototype.forEach = function(i) {
  PU.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var jU = va, XU = Be, LU = function(i, r) {
  XU.forEach(i, function(l, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (i[r] = l, delete i[u]);
  });
}, cp = Be;
function Wr(t, i, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
cp.inherits(Wr, Error, {
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
var up = Wr.prototype, dp = {};
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
  dp[t] = { value: t };
});
Object.defineProperties(Wr, dp);
Object.defineProperty(up, "isAxiosError", { value: !0 });
Wr.from = function(t, i, r, a, l, u) {
  var d = Object.create(up);
  return cp.toFlatObject(t, d, function(V) {
    return V !== Error.prototype;
  }), Wr.call(d, t.message, i, r, a, l), d.name = t.name, u && Object.assign(d, u), d;
};
var Br = Wr, fp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ft = Be;
function qU(t, i) {
  i = i || new FormData();
  var r = [];
  function a(u) {
    return u === null ? "" : Ft.isDate(u) ? u.toISOString() : Ft.isArrayBuffer(u) || Ft.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function l(u, d) {
    if (Ft.isPlainObject(u) || Ft.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(u), Ft.forEach(u, function(V, g) {
        if (!Ft.isUndefined(V)) {
          var U = d ? d + "." + g : g, N;
          if (V && !d && typeof V == "object") {
            if (Ft.endsWith(g, "{}"))
              V = JSON.stringify(V);
            else if (Ft.endsWith(g, "[]") && (N = Ft.toArray(V))) {
              N.forEach(function(M) {
                !Ft.isUndefined(M) && i.append(U, a(M));
              });
              return;
            }
          }
          l(V, U);
        }
      }), r.pop();
    } else
      i.append(d, a(u));
  }
  return l(t), i;
}
var hp = qU, el, nf;
function $U() {
  if (nf)
    return el;
  nf = 1;
  var t = Br;
  return el = function(r, a, l) {
    var u = l.config.validateStatus;
    !l.status || !u || u(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, el;
}
var tl, rf;
function KU() {
  if (rf)
    return tl;
  rf = 1;
  var t = Be;
  return tl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, l, u, d, h, V) {
        var g = [];
        g.push(a + "=" + encodeURIComponent(l)), t.isNumber(u) && g.push("expires=" + new Date(u).toGMTString()), t.isString(d) && g.push("path=" + d), t.isString(h) && g.push("domain=" + h), V === !0 && g.push("secure"), document.cookie = g.join("; ");
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
  }(), tl;
}
var eR = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, tR = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, nR = eR, rR = tR, pp = function(i, r) {
  return i && !nR(r) ? rR(i, r) : r;
}, nl, of;
function iR() {
  if (of)
    return nl;
  of = 1;
  var t = Be, i = [
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
  return nl = function(a) {
    var l = {}, u, d, h;
    return a && t.forEach(a.split(`
`), function(g) {
      if (h = g.indexOf(":"), u = t.trim(g.substr(0, h)).toLowerCase(), d = t.trim(g.substr(h + 1)), u) {
        if (l[u] && i.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? l[u] = (l[u] ? l[u] : []).concat([d]) : l[u] = l[u] ? l[u] + ", " + d : d;
      }
    }), l;
  }, nl;
}
var rl, af;
function oR() {
  if (af)
    return rl;
  af = 1;
  var t = Be;
  return rl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), l;
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
    return l = u(window.location.href), function(h) {
      var V = t.isString(h) ? u(h) : h;
      return V.protocol === l.protocol && V.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), rl;
}
var il, sf;
function Ta() {
  if (sf)
    return il;
  sf = 1;
  var t = Br, i = Be;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, t, {
    __CANCEL__: !0
  }), il = r, il;
}
var ol, lf;
function aR() {
  return lf || (lf = 1, ol = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), ol;
}
var al, cf;
function uf() {
  if (cf)
    return al;
  cf = 1;
  var t = Be, i = $U(), r = KU(), a = lp, l = pp, u = iR(), d = oR(), h = fp, V = Br, g = Ta(), U = aR();
  return al = function(M) {
    return new Promise(function(A, S) {
      var E = M.data, F = M.headers, D = M.responseType, C;
      function G() {
        M.cancelToken && M.cancelToken.unsubscribe(C), M.signal && M.signal.removeEventListener("abort", C);
      }
      t.isFormData(E) && t.isStandardBrowserEnv() && delete F["Content-Type"];
      var J = new XMLHttpRequest();
      if (M.auth) {
        var X = M.auth.username || "", ee = M.auth.password ? unescape(encodeURIComponent(M.auth.password)) : "";
        F.Authorization = "Basic " + btoa(X + ":" + ee);
      }
      var L = l(M.baseURL, M.url);
      J.open(M.method.toUpperCase(), a(L, M.params, M.paramsSerializer), !0), J.timeout = M.timeout;
      function Ie() {
        if (!!J) {
          var we = "getAllResponseHeaders" in J ? u(J.getAllResponseHeaders()) : null, Te = !D || D === "text" || D === "json" ? J.responseText : J.response, Ne = {
            data: Te,
            status: J.status,
            statusText: J.statusText,
            headers: we,
            config: M,
            request: J
          };
          i(function(Fe) {
            A(Fe), G();
          }, function(Fe) {
            S(Fe), G();
          }, Ne), J = null;
        }
      }
      if ("onloadend" in J ? J.onloadend = Ie : J.onreadystatechange = function() {
        !J || J.readyState !== 4 || J.status === 0 && !(J.responseURL && J.responseURL.indexOf("file:") === 0) || setTimeout(Ie);
      }, J.onabort = function() {
        !J || (S(new V("Request aborted", V.ECONNABORTED, M, J)), J = null);
      }, J.onerror = function() {
        S(new V("Network Error", V.ERR_NETWORK, M, J, J)), J = null;
      }, J.ontimeout = function() {
        var Te = M.timeout ? "timeout of " + M.timeout + "ms exceeded" : "timeout exceeded", Ne = M.transitional || h;
        M.timeoutErrorMessage && (Te = M.timeoutErrorMessage), S(new V(
          Te,
          Ne.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
          M,
          J
        )), J = null;
      }, t.isStandardBrowserEnv()) {
        var Le = (M.withCredentials || d(L)) && M.xsrfCookieName ? r.read(M.xsrfCookieName) : void 0;
        Le && (F[M.xsrfHeaderName] = Le);
      }
      "setRequestHeader" in J && t.forEach(F, function(Te, Ne) {
        typeof E > "u" && Ne.toLowerCase() === "content-type" ? delete F[Ne] : J.setRequestHeader(Ne, Te);
      }), t.isUndefined(M.withCredentials) || (J.withCredentials = !!M.withCredentials), D && D !== "json" && (J.responseType = M.responseType), typeof M.onDownloadProgress == "function" && J.addEventListener("progress", M.onDownloadProgress), typeof M.onUploadProgress == "function" && J.upload && J.upload.addEventListener("progress", M.onUploadProgress), (M.cancelToken || M.signal) && (C = function(we) {
        !J || (S(!we || we && we.type ? new g() : we), J.abort(), J = null);
      }, M.cancelToken && M.cancelToken.subscribe(C), M.signal && (M.signal.aborted ? C() : M.signal.addEventListener("abort", C))), E || (E = null);
      var Ve = U(L);
      if (Ve && ["http", "https", "file"].indexOf(Ve) === -1) {
        S(new V("Unsupported protocol " + Ve + ":", V.ERR_BAD_REQUEST, M));
        return;
      }
      J.send(E);
    });
  }, al;
}
var sl, df;
function sR() {
  return df || (df = 1, sl = null), sl;
}
var be = Be, ff = LU, hf = Br, lR = fp, cR = hp, uR = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function pf(t, i) {
  !be.isUndefined(t) && be.isUndefined(t["Content-Type"]) && (t["Content-Type"] = i);
}
function dR() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = uf()), t;
}
function fR(t, i, r) {
  if (be.isString(t))
    try {
      return (i || JSON.parse)(t), be.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var ga = {
  transitional: lR,
  adapter: dR(),
  transformRequest: [function(i, r) {
    if (ff(r, "Accept"), ff(r, "Content-Type"), be.isFormData(i) || be.isArrayBuffer(i) || be.isBuffer(i) || be.isStream(i) || be.isFile(i) || be.isBlob(i))
      return i;
    if (be.isArrayBufferView(i))
      return i.buffer;
    if (be.isURLSearchParams(i))
      return pf(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var a = be.isObject(i), l = r && r["Content-Type"], u;
    if ((u = be.isFileList(i)) || a && l === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return cR(u ? { "files[]": i } : i, d && new d());
    } else if (a || l === "application/json")
      return pf(r, "application/json"), fR(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || ga.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || l && be.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (d) {
        if (u)
          throw d.name === "SyntaxError" ? hf.from(d, hf.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return i;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: sR()
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
be.forEach(["delete", "get", "head"], function(i) {
  ga.headers[i] = {};
});
be.forEach(["post", "put", "patch"], function(i) {
  ga.headers[i] = be.merge(uR);
});
var oc = ga, hR = Be, pR = oc, mR = function(i, r, a) {
  var l = this || pR;
  return hR.forEach(a, function(d) {
    i = d.call(l, i, r);
  }), i;
}, ll, mf;
function mp() {
  return mf || (mf = 1, ll = function(i) {
    return !!(i && i.__CANCEL__);
  }), ll;
}
var Vf = Be, cl = mR, VR = mp(), wR = oc, vR = Ta();
function ul(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new vR();
}
var TR = function(i) {
  ul(i), i.headers = i.headers || {}, i.data = cl.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = Vf.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), Vf.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete i.headers[l];
    }
  );
  var r = i.adapter || wR.adapter;
  return r(i).then(function(l) {
    return ul(i), l.data = cl.call(
      i,
      l.data,
      l.headers,
      i.transformResponse
    ), l;
  }, function(l) {
    return VR(l) || (ul(i), l && l.response && (l.response.data = cl.call(
      i,
      l.response.data,
      l.response.headers,
      i.transformResponse
    ))), Promise.reject(l);
  });
}, ut = Be, Vp = function(i, r) {
  r = r || {};
  var a = {};
  function l(U, N) {
    return ut.isPlainObject(U) && ut.isPlainObject(N) ? ut.merge(U, N) : ut.isPlainObject(N) ? ut.merge({}, N) : ut.isArray(N) ? N.slice() : N;
  }
  function u(U) {
    if (ut.isUndefined(r[U])) {
      if (!ut.isUndefined(i[U]))
        return l(void 0, i[U]);
    } else
      return l(i[U], r[U]);
  }
  function d(U) {
    if (!ut.isUndefined(r[U]))
      return l(void 0, r[U]);
  }
  function h(U) {
    if (ut.isUndefined(r[U])) {
      if (!ut.isUndefined(i[U]))
        return l(void 0, i[U]);
    } else
      return l(void 0, r[U]);
  }
  function V(U) {
    if (U in r)
      return l(i[U], r[U]);
    if (U in i)
      return l(void 0, i[U]);
  }
  var g = {
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
    validateStatus: V
  };
  return ut.forEach(Object.keys(i).concat(Object.keys(r)), function(N) {
    var M = g[N] || u, B = M(N);
    ut.isUndefined(B) && M !== V || (a[N] = B);
  }), a;
}, dl, wf;
function wp() {
  return wf || (wf = 1, dl = {
    version: "0.27.2"
  }), dl;
}
var gR = wp().version, gn = Br, ac = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, i) {
  ac[t] = function(a) {
    return typeof a === t || "a" + (i < 1 ? "n " : " ") + t;
  };
});
var vf = {};
ac.transitional = function(i, r, a) {
  function l(u, d) {
    return "[Axios v" + gR + "] Transitional option '" + u + "'" + d + (a ? ". " + a : "");
  }
  return function(u, d, h) {
    if (i === !1)
      throw new gn(
        l(d, " has been removed" + (r ? " in " + r : "")),
        gn.ERR_DEPRECATED
      );
    return r && !vf[d] && (vf[d] = !0, console.warn(
      l(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(u, d, h) : !0;
  };
};
function UR(t, i, r) {
  if (typeof t != "object")
    throw new gn("options must be an object", gn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var u = a[l], d = i[u];
    if (d) {
      var h = t[u], V = h === void 0 || d(h, u, t);
      if (V !== !0)
        throw new gn("option " + u + " must be " + V, gn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new gn("Unknown option " + u, gn.ERR_BAD_OPTION);
  }
}
var RR = {
  assertOptions: UR,
  validators: ac
}, vp = Be, NR = lp, Tf = jU, gf = TR, Ua = Vp, MR = pp, Tp = RR, wr = Tp.validators;
function Cr(t) {
  this.defaults = t, this.interceptors = {
    request: new Tf(),
    response: new Tf()
  };
}
Cr.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Ua(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Tp.assertOptions(a, {
    silentJSONParsing: wr.transitional(wr.boolean),
    forcedJSONParsing: wr.transitional(wr.boolean),
    clarifyTimeoutError: wr.transitional(wr.boolean)
  }, !1);
  var l = [], u = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (u = u && B.synchronous, l.unshift(B.fulfilled, B.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(B) {
    d.push(B.fulfilled, B.rejected);
  });
  var h;
  if (!u) {
    var V = [gf, void 0];
    for (Array.prototype.unshift.apply(V, l), V = V.concat(d), h = Promise.resolve(r); V.length; )
      h = h.then(V.shift(), V.shift());
    return h;
  }
  for (var g = r; l.length; ) {
    var U = l.shift(), N = l.shift();
    try {
      g = U(g);
    } catch (M) {
      N(M);
      break;
    }
  }
  try {
    h = gf(g);
  } catch (M) {
    return Promise.reject(M);
  }
  for (; d.length; )
    h = h.then(d.shift(), d.shift());
  return h;
};
Cr.prototype.getUri = function(i) {
  i = Ua(this.defaults, i);
  var r = MR(i.baseURL, i.url);
  return NR(r, i.params, i.paramsSerializer);
};
vp.forEach(["delete", "get", "head", "options"], function(i) {
  Cr.prototype[i] = function(r, a) {
    return this.request(Ua(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
vp.forEach(["post", "put", "patch"], function(i) {
  function r(a) {
    return function(u, d, h) {
      return this.request(Ua(h || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  Cr.prototype[i] = r(), Cr.prototype[i + "Form"] = r(!0);
});
var yR = Cr, fl, Uf;
function kR() {
  if (Uf)
    return fl;
  Uf = 1;
  var t = Ta();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var l = this;
    this.promise.then(function(u) {
      if (!!l._listeners) {
        var d, h = l._listeners.length;
        for (d = 0; d < h; d++)
          l._listeners[d](u);
        l._listeners = null;
      }
    }), this.promise.then = function(u) {
      var d, h = new Promise(function(V) {
        l.subscribe(V), d = V;
      }).then(u);
      return h.cancel = function() {
        l.unsubscribe(d);
      }, h;
    }, r(function(d) {
      l.reason || (l.reason = new t(d), a(l.reason));
    });
  }
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, i.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(a);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, i.source = function() {
    var a, l = new i(function(d) {
      a = d;
    });
    return {
      token: l,
      cancel: a
    };
  }, fl = i, fl;
}
var hl, Rf;
function ZR() {
  return Rf || (Rf = 1, hl = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), hl;
}
var pl, Nf;
function JR() {
  if (Nf)
    return pl;
  Nf = 1;
  var t = Be;
  return pl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, pl;
}
var Mf = Be, bR = op, ta = yR, ER = Vp, SR = oc;
function gp(t) {
  var i = new ta(t), r = bR(ta.prototype.request, i);
  return Mf.extend(r, ta.prototype, i), Mf.extend(r, i), r.create = function(l) {
    return gp(ER(t, l));
  }, r;
}
var rt = gp(SR);
rt.Axios = ta;
rt.CanceledError = Ta();
rt.CancelToken = kR();
rt.isCancel = mp();
rt.VERSION = wp().version;
rt.toFormData = hp;
rt.AxiosError = Br;
rt.Cancel = rt.CanceledError;
rt.all = function(i) {
  return Promise.all(i);
};
rt.spread = ZR();
rt.isAxiosError = JR();
Kl.exports = rt;
Kl.exports.default = rt;
(function(t) {
  t.exports = Kl.exports;
})(ip);
const Up = /* @__PURE__ */ yU(ip.exports), Dr = Up.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), kn = Up.create({
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
(function(t, i) {
  (function() {
    var r, a = "4.17.21", l = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", V = "__lodash_hash_undefined__", g = 500, U = "__lodash_placeholder__", N = 1, M = 2, B = 4, A = 1, S = 2, E = 1, F = 2, D = 4, C = 8, G = 16, J = 32, X = 64, ee = 128, L = 256, Ie = 512, Le = 30, Ve = "...", we = 800, Te = 16, Ne = 1, le = 2, Fe = 3, Ae = 1 / 0, _e = 9007199254740991, Qr = 17976931348623157e292, Qi = 0 / 0, xt = 4294967295, ym = xt - 1, km = xt >>> 1, Zm = [
      ["ary", ee],
      ["bind", E],
      ["bindKey", F],
      ["curry", C],
      ["curryRight", G],
      ["flip", Ie],
      ["partial", J],
      ["partialRight", X],
      ["rearg", L]
    ], er = "[object Arguments]", zi = "[object Array]", Jm = "[object AsyncFunction]", zr = "[object Boolean]", Gr = "[object Date]", bm = "[object DOMException]", Gi = "[object Error]", Yi = "[object Function]", Mc = "[object GeneratorFunction]", kt = "[object Map]", Yr = "[object Number]", Em = "[object Null]", Gt = "[object Object]", yc = "[object Promise]", Sm = "[object Proxy]", _r = "[object RegExp]", Zt = "[object Set]", Hr = "[object String]", _i = "[object Symbol]", Fm = "[object Undefined]", Pr = "[object WeakMap]", Am = "[object WeakSet]", jr = "[object ArrayBuffer]", tr = "[object DataView]", Aa = "[object Float32Array]", Wa = "[object Float64Array]", Ca = "[object Int8Array]", xa = "[object Int16Array]", Ba = "[object Int32Array]", Da = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Oa = "[object Uint16Array]", Qa = "[object Uint32Array]", Wm = /\b__p \+= '';/g, Cm = /\b(__p \+=) '' \+/g, xm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, kc = /&(?:amp|lt|gt|quot|#39);/g, Zc = /[&<>"']/g, Bm = RegExp(kc.source), Dm = RegExp(Zc.source), Im = /<%-([\s\S]+?)%>/g, Om = /<%([\s\S]+?)%>/g, Jc = /<%=([\s\S]+?)%>/g, Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zm = /^\w*$/, Gm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, za = /[\\^$.*+?()[\]{}|]/g, Ym = RegExp(za.source), Ga = /^\s+/, _m = /\s/, Hm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Pm = /\{\n\/\* \[wrapped with (.+)\] \*/, jm = /,? & /, Xm = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Lm = /[()=,{}\[\]\/\s]/, qm = /\\(\\)?/g, $m = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, bc = /\w*$/, Km = /^[-+]0x[0-9a-f]+$/i, e1 = /^0b[01]+$/i, t1 = /^\[object .+?Constructor\]$/, n1 = /^0o[0-7]+$/i, r1 = /^(?:0|[1-9]\d*)$/, i1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Hi = /($^)/, o1 = /['\n\r\u2028\u2029\\]/g, Pi = "\\ud800-\\udfff", a1 = "\\u0300-\\u036f", s1 = "\\ufe20-\\ufe2f", l1 = "\\u20d0-\\u20ff", Ec = a1 + s1 + l1, Sc = "\\u2700-\\u27bf", Fc = "a-z\\xdf-\\xf6\\xf8-\\xff", c1 = "\\xac\\xb1\\xd7\\xf7", u1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", d1 = "\\u2000-\\u206f", f1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ac = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wc = "\\ufe0e\\ufe0f", Cc = c1 + u1 + d1 + f1, Ya = "['\u2019]", h1 = "[" + Pi + "]", xc = "[" + Cc + "]", ji = "[" + Ec + "]", Bc = "\\d+", p1 = "[" + Sc + "]", Dc = "[" + Fc + "]", Ic = "[^" + Pi + Cc + Bc + Sc + Fc + Ac + "]", _a = "\\ud83c[\\udffb-\\udfff]", m1 = "(?:" + ji + "|" + _a + ")", Oc = "[^" + Pi + "]", Ha = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pa = "[\\ud800-\\udbff][\\udc00-\\udfff]", nr = "[" + Ac + "]", Qc = "\\u200d", zc = "(?:" + Dc + "|" + Ic + ")", V1 = "(?:" + nr + "|" + Ic + ")", Gc = "(?:" + Ya + "(?:d|ll|m|re|s|t|ve))?", Yc = "(?:" + Ya + "(?:D|LL|M|RE|S|T|VE))?", _c = m1 + "?", Hc = "[" + Wc + "]?", w1 = "(?:" + Qc + "(?:" + [Oc, Ha, Pa].join("|") + ")" + Hc + _c + ")*", v1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", T1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pc = Hc + _c + w1, g1 = "(?:" + [p1, Ha, Pa].join("|") + ")" + Pc, U1 = "(?:" + [Oc + ji + "?", ji, Ha, Pa, h1].join("|") + ")", R1 = RegExp(Ya, "g"), N1 = RegExp(ji, "g"), ja = RegExp(_a + "(?=" + _a + ")|" + U1 + Pc, "g"), M1 = RegExp([
      nr + "?" + Dc + "+" + Gc + "(?=" + [xc, nr, "$"].join("|") + ")",
      V1 + "+" + Yc + "(?=" + [xc, nr + zc, "$"].join("|") + ")",
      nr + "?" + zc + "+" + Gc,
      nr + "+" + Yc,
      T1,
      v1,
      Bc,
      g1
    ].join("|"), "g"), y1 = RegExp("[" + Qc + Pi + Ec + Wc + "]"), k1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Z1 = [
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
    ], J1 = -1, de = {};
    de[Aa] = de[Wa] = de[Ca] = de[xa] = de[Ba] = de[Da] = de[Ia] = de[Oa] = de[Qa] = !0, de[er] = de[zi] = de[jr] = de[zr] = de[tr] = de[Gr] = de[Gi] = de[Yi] = de[kt] = de[Yr] = de[Gt] = de[_r] = de[Zt] = de[Hr] = de[Pr] = !1;
    var ue = {};
    ue[er] = ue[zi] = ue[jr] = ue[tr] = ue[zr] = ue[Gr] = ue[Aa] = ue[Wa] = ue[Ca] = ue[xa] = ue[Ba] = ue[kt] = ue[Yr] = ue[Gt] = ue[_r] = ue[Zt] = ue[Hr] = ue[_i] = ue[Da] = ue[Ia] = ue[Oa] = ue[Qa] = !0, ue[Gi] = ue[Yi] = ue[Pr] = !1;
    var b1 = {
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
    }, E1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, S1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, F1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, A1 = parseFloat, W1 = parseInt, jc = typeof ui == "object" && ui && ui.Object === Object && ui, C1 = typeof self == "object" && self && self.Object === Object && self, We = jc || C1 || Function("return this")(), Xa = i && !i.nodeType && i, bn = Xa && !0 && t && !t.nodeType && t, Xc = bn && bn.exports === Xa, La = Xc && jc.process, mt = function() {
      try {
        var v = bn && bn.require && bn.require("util").types;
        return v || La && La.binding && La.binding("util");
      } catch {
      }
    }(), Lc = mt && mt.isArrayBuffer, qc = mt && mt.isDate, $c = mt && mt.isMap, Kc = mt && mt.isRegExp, eu = mt && mt.isSet, tu = mt && mt.isTypedArray;
    function it(v, y, R) {
      switch (R.length) {
        case 0:
          return v.call(y);
        case 1:
          return v.call(y, R[0]);
        case 2:
          return v.call(y, R[0], R[1]);
        case 3:
          return v.call(y, R[0], R[1], R[2]);
      }
      return v.apply(y, R);
    }
    function x1(v, y, R, x) {
      for (var Y = -1, ne = v == null ? 0 : v.length; ++Y < ne; ) {
        var ye = v[Y];
        y(x, ye, R(ye), v);
      }
      return x;
    }
    function Vt(v, y) {
      for (var R = -1, x = v == null ? 0 : v.length; ++R < x && y(v[R], R, v) !== !1; )
        ;
      return v;
    }
    function B1(v, y) {
      for (var R = v == null ? 0 : v.length; R-- && y(v[R], R, v) !== !1; )
        ;
      return v;
    }
    function nu(v, y) {
      for (var R = -1, x = v == null ? 0 : v.length; ++R < x; )
        if (!y(v[R], R, v))
          return !1;
      return !0;
    }
    function sn(v, y) {
      for (var R = -1, x = v == null ? 0 : v.length, Y = 0, ne = []; ++R < x; ) {
        var ye = v[R];
        y(ye, R, v) && (ne[Y++] = ye);
      }
      return ne;
    }
    function Xi(v, y) {
      var R = v == null ? 0 : v.length;
      return !!R && rr(v, y, 0) > -1;
    }
    function qa(v, y, R) {
      for (var x = -1, Y = v == null ? 0 : v.length; ++x < Y; )
        if (R(y, v[x]))
          return !0;
      return !1;
    }
    function fe(v, y) {
      for (var R = -1, x = v == null ? 0 : v.length, Y = Array(x); ++R < x; )
        Y[R] = y(v[R], R, v);
      return Y;
    }
    function ln(v, y) {
      for (var R = -1, x = y.length, Y = v.length; ++R < x; )
        v[Y + R] = y[R];
      return v;
    }
    function $a(v, y, R, x) {
      var Y = -1, ne = v == null ? 0 : v.length;
      for (x && ne && (R = v[++Y]); ++Y < ne; )
        R = y(R, v[Y], Y, v);
      return R;
    }
    function D1(v, y, R, x) {
      var Y = v == null ? 0 : v.length;
      for (x && Y && (R = v[--Y]); Y--; )
        R = y(R, v[Y], Y, v);
      return R;
    }
    function Ka(v, y) {
      for (var R = -1, x = v == null ? 0 : v.length; ++R < x; )
        if (y(v[R], R, v))
          return !0;
      return !1;
    }
    var I1 = es("length");
    function O1(v) {
      return v.split("");
    }
    function Q1(v) {
      return v.match(Xm) || [];
    }
    function ru(v, y, R) {
      var x;
      return R(v, function(Y, ne, ye) {
        if (y(Y, ne, ye))
          return x = ne, !1;
      }), x;
    }
    function Li(v, y, R, x) {
      for (var Y = v.length, ne = R + (x ? 1 : -1); x ? ne-- : ++ne < Y; )
        if (y(v[ne], ne, v))
          return ne;
      return -1;
    }
    function rr(v, y, R) {
      return y === y ? K1(v, y, R) : Li(v, iu, R);
    }
    function z1(v, y, R, x) {
      for (var Y = R - 1, ne = v.length; ++Y < ne; )
        if (x(v[Y], y))
          return Y;
      return -1;
    }
    function iu(v) {
      return v !== v;
    }
    function ou(v, y) {
      var R = v == null ? 0 : v.length;
      return R ? ns(v, y) / R : Qi;
    }
    function es(v) {
      return function(y) {
        return y == null ? r : y[v];
      };
    }
    function ts(v) {
      return function(y) {
        return v == null ? r : v[y];
      };
    }
    function au(v, y, R, x, Y) {
      return Y(v, function(ne, ye, ce) {
        R = x ? (x = !1, ne) : y(R, ne, ye, ce);
      }), R;
    }
    function G1(v, y) {
      var R = v.length;
      for (v.sort(y); R--; )
        v[R] = v[R].value;
      return v;
    }
    function ns(v, y) {
      for (var R, x = -1, Y = v.length; ++x < Y; ) {
        var ne = y(v[x]);
        ne !== r && (R = R === r ? ne : R + ne);
      }
      return R;
    }
    function rs(v, y) {
      for (var R = -1, x = Array(v); ++R < v; )
        x[R] = y(R);
      return x;
    }
    function Y1(v, y) {
      return fe(y, function(R) {
        return [R, v[R]];
      });
    }
    function su(v) {
      return v && v.slice(0, du(v) + 1).replace(Ga, "");
    }
    function ot(v) {
      return function(y) {
        return v(y);
      };
    }
    function is(v, y) {
      return fe(y, function(R) {
        return v[R];
      });
    }
    function Xr(v, y) {
      return v.has(y);
    }
    function lu(v, y) {
      for (var R = -1, x = v.length; ++R < x && rr(y, v[R], 0) > -1; )
        ;
      return R;
    }
    function cu(v, y) {
      for (var R = v.length; R-- && rr(y, v[R], 0) > -1; )
        ;
      return R;
    }
    function _1(v, y) {
      for (var R = v.length, x = 0; R--; )
        v[R] === y && ++x;
      return x;
    }
    var H1 = ts(b1), P1 = ts(E1);
    function j1(v) {
      return "\\" + F1[v];
    }
    function X1(v, y) {
      return v == null ? r : v[y];
    }
    function ir(v) {
      return y1.test(v);
    }
    function L1(v) {
      return k1.test(v);
    }
    function q1(v) {
      for (var y, R = []; !(y = v.next()).done; )
        R.push(y.value);
      return R;
    }
    function os(v) {
      var y = -1, R = Array(v.size);
      return v.forEach(function(x, Y) {
        R[++y] = [Y, x];
      }), R;
    }
    function uu(v, y) {
      return function(R) {
        return v(y(R));
      };
    }
    function cn(v, y) {
      for (var R = -1, x = v.length, Y = 0, ne = []; ++R < x; ) {
        var ye = v[R];
        (ye === y || ye === U) && (v[R] = U, ne[Y++] = R);
      }
      return ne;
    }
    function qi(v) {
      var y = -1, R = Array(v.size);
      return v.forEach(function(x) {
        R[++y] = x;
      }), R;
    }
    function $1(v) {
      var y = -1, R = Array(v.size);
      return v.forEach(function(x) {
        R[++y] = [x, x];
      }), R;
    }
    function K1(v, y, R) {
      for (var x = R - 1, Y = v.length; ++x < Y; )
        if (v[x] === y)
          return x;
      return -1;
    }
    function e0(v, y, R) {
      for (var x = R + 1; x--; )
        if (v[x] === y)
          return x;
      return x;
    }
    function or(v) {
      return ir(v) ? n0(v) : I1(v);
    }
    function Jt(v) {
      return ir(v) ? r0(v) : O1(v);
    }
    function du(v) {
      for (var y = v.length; y-- && _m.test(v.charAt(y)); )
        ;
      return y;
    }
    var t0 = ts(S1);
    function n0(v) {
      for (var y = ja.lastIndex = 0; ja.test(v); )
        ++y;
      return y;
    }
    function r0(v) {
      return v.match(ja) || [];
    }
    function i0(v) {
      return v.match(M1) || [];
    }
    var o0 = function v(y) {
      y = y == null ? We : ar.defaults(We.Object(), y, ar.pick(We, Z1));
      var R = y.Array, x = y.Date, Y = y.Error, ne = y.Function, ye = y.Math, ce = y.Object, as = y.RegExp, a0 = y.String, wt = y.TypeError, $i = R.prototype, s0 = ne.prototype, sr = ce.prototype, Ki = y["__core-js_shared__"], eo = s0.toString, oe = sr.hasOwnProperty, l0 = 0, fu = function() {
        var e = /[^.]+$/.exec(Ki && Ki.keys && Ki.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), to = sr.toString, c0 = eo.call(ce), u0 = We._, d0 = as(
        "^" + eo.call(oe).replace(za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), no = Xc ? y.Buffer : r, un = y.Symbol, ro = y.Uint8Array, hu = no ? no.allocUnsafe : r, io = uu(ce.getPrototypeOf, ce), pu = ce.create, mu = sr.propertyIsEnumerable, oo = $i.splice, Vu = un ? un.isConcatSpreadable : r, Lr = un ? un.iterator : r, En = un ? un.toStringTag : r, ao = function() {
        try {
          var e = Cn(ce, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), f0 = y.clearTimeout !== We.clearTimeout && y.clearTimeout, h0 = x && x.now !== We.Date.now && x.now, p0 = y.setTimeout !== We.setTimeout && y.setTimeout, so = ye.ceil, lo = ye.floor, ss = ce.getOwnPropertySymbols, m0 = no ? no.isBuffer : r, wu = y.isFinite, V0 = $i.join, w0 = uu(ce.keys, ce), ke = ye.max, Oe = ye.min, v0 = x.now, T0 = y.parseInt, vu = ye.random, g0 = $i.reverse, ls = Cn(y, "DataView"), qr = Cn(y, "Map"), cs = Cn(y, "Promise"), lr = Cn(y, "Set"), $r = Cn(y, "WeakMap"), Kr = Cn(ce, "create"), co = $r && new $r(), cr = {}, U0 = xn(ls), R0 = xn(qr), N0 = xn(cs), M0 = xn(lr), y0 = xn($r), uo = un ? un.prototype : r, ei = uo ? uo.valueOf : r, Tu = uo ? uo.toString : r;
      function f(e) {
        if (ve(e) && !_(e) && !(e instanceof K)) {
          if (e instanceof vt)
            return e;
          if (oe.call(e, "__wrapped__"))
            return gd(e);
        }
        return new vt(e);
      }
      var ur = function() {
        function e() {
        }
        return function(n) {
          if (!pe(n))
            return {};
          if (pu)
            return pu(n);
          e.prototype = n;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function fo() {
      }
      function vt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        escape: Im,
        evaluate: Om,
        interpolate: Jc,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = fo.prototype, f.prototype.constructor = f, vt.prototype = ur(fo.prototype), vt.prototype.constructor = vt;
      function K(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = xt, this.__views__ = [];
      }
      function k0() {
        var e = new K(this.__wrapped__);
        return e.__actions__ = qe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = qe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = qe(this.__views__), e;
      }
      function Z0() {
        if (this.__filtered__) {
          var e = new K(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function J0() {
        var e = this.__wrapped__.value(), n = this.__dir__, o = _(e), s = n < 0, c = o ? e.length : 0, p = OV(0, c, this.__views__), m = p.start, w = p.end, T = w - m, k = s ? w : m - 1, Z = this.__iteratees__, b = Z.length, W = 0, I = Oe(T, this.__takeCount__);
        if (!o || !s && c == T && I == T)
          return Gu(e, this.__actions__);
        var Q = [];
        e:
          for (; T-- && W < I; ) {
            k += n;
            for (var P = -1, z = e[k]; ++P < b; ) {
              var $ = Z[P], te = $.iteratee, lt = $.type, je = te(z);
              if (lt == le)
                z = je;
              else if (!je) {
                if (lt == Ne)
                  continue e;
                break e;
              }
            }
            Q[W++] = z;
          }
        return Q;
      }
      K.prototype = ur(fo.prototype), K.prototype.constructor = K;
      function Sn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function b0() {
        this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
      }
      function E0(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function S0(e) {
        var n = this.__data__;
        if (Kr) {
          var o = n[e];
          return o === V ? r : o;
        }
        return oe.call(n, e) ? n[e] : r;
      }
      function F0(e) {
        var n = this.__data__;
        return Kr ? n[e] !== r : oe.call(n, e);
      }
      function A0(e, n) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = Kr && n === r ? V : n, this;
      }
      Sn.prototype.clear = b0, Sn.prototype.delete = E0, Sn.prototype.get = S0, Sn.prototype.has = F0, Sn.prototype.set = A0;
      function Yt(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function W0() {
        this.__data__ = [], this.size = 0;
      }
      function C0(e) {
        var n = this.__data__, o = ho(n, e);
        if (o < 0)
          return !1;
        var s = n.length - 1;
        return o == s ? n.pop() : oo.call(n, o, 1), --this.size, !0;
      }
      function x0(e) {
        var n = this.__data__, o = ho(n, e);
        return o < 0 ? r : n[o][1];
      }
      function B0(e) {
        return ho(this.__data__, e) > -1;
      }
      function D0(e, n) {
        var o = this.__data__, s = ho(o, e);
        return s < 0 ? (++this.size, o.push([e, n])) : o[s][1] = n, this;
      }
      Yt.prototype.clear = W0, Yt.prototype.delete = C0, Yt.prototype.get = x0, Yt.prototype.has = B0, Yt.prototype.set = D0;
      function _t(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function I0() {
        this.size = 0, this.__data__ = {
          hash: new Sn(),
          map: new (qr || Yt)(),
          string: new Sn()
        };
      }
      function O0(e) {
        var n = yo(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Q0(e) {
        return yo(this, e).get(e);
      }
      function z0(e) {
        return yo(this, e).has(e);
      }
      function G0(e, n) {
        var o = yo(this, e), s = o.size;
        return o.set(e, n), this.size += o.size == s ? 0 : 1, this;
      }
      _t.prototype.clear = I0, _t.prototype.delete = O0, _t.prototype.get = Q0, _t.prototype.has = z0, _t.prototype.set = G0;
      function Fn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new _t(); ++n < o; )
          this.add(e[n]);
      }
      function Y0(e) {
        return this.__data__.set(e, V), this;
      }
      function _0(e) {
        return this.__data__.has(e);
      }
      Fn.prototype.add = Fn.prototype.push = Y0, Fn.prototype.has = _0;
      function bt(e) {
        var n = this.__data__ = new Yt(e);
        this.size = n.size;
      }
      function H0() {
        this.__data__ = new Yt(), this.size = 0;
      }
      function P0(e) {
        var n = this.__data__, o = n.delete(e);
        return this.size = n.size, o;
      }
      function j0(e) {
        return this.__data__.get(e);
      }
      function X0(e) {
        return this.__data__.has(e);
      }
      function L0(e, n) {
        var o = this.__data__;
        if (o instanceof Yt) {
          var s = o.__data__;
          if (!qr || s.length < l - 1)
            return s.push([e, n]), this.size = ++o.size, this;
          o = this.__data__ = new _t(s);
        }
        return o.set(e, n), this.size = o.size, this;
      }
      bt.prototype.clear = H0, bt.prototype.delete = P0, bt.prototype.get = j0, bt.prototype.has = X0, bt.prototype.set = L0;
      function gu(e, n) {
        var o = _(e), s = !o && Bn(e), c = !o && !s && mn(e), p = !o && !s && !c && pr(e), m = o || s || c || p, w = m ? rs(e.length, a0) : [], T = w.length;
        for (var k in e)
          (n || oe.call(e, k)) && !(m && (k == "length" || c && (k == "offset" || k == "parent") || p && (k == "buffer" || k == "byteLength" || k == "byteOffset") || Xt(k, T))) && w.push(k);
        return w;
      }
      function Uu(e) {
        var n = e.length;
        return n ? e[gs(0, n - 1)] : r;
      }
      function q0(e, n) {
        return ko(qe(e), An(n, 0, e.length));
      }
      function $0(e) {
        return ko(qe(e));
      }
      function us(e, n, o) {
        (o !== r && !Et(e[n], o) || o === r && !(n in e)) && Ht(e, n, o);
      }
      function ti(e, n, o) {
        var s = e[n];
        (!(oe.call(e, n) && Et(s, o)) || o === r && !(n in e)) && Ht(e, n, o);
      }
      function ho(e, n) {
        for (var o = e.length; o--; )
          if (Et(e[o][0], n))
            return o;
        return -1;
      }
      function K0(e, n, o, s) {
        return dn(e, function(c, p, m) {
          n(s, c, o(c), m);
        }), s;
      }
      function Ru(e, n) {
        return e && Dt(n, Je(n), e);
      }
      function eV(e, n) {
        return e && Dt(n, Ke(n), e);
      }
      function Ht(e, n, o) {
        n == "__proto__" && ao ? ao(e, n, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[n] = o;
      }
      function ds(e, n) {
        for (var o = -1, s = n.length, c = R(s), p = e == null; ++o < s; )
          c[o] = p ? r : _s(e, n[o]);
        return c;
      }
      function An(e, n, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), n !== r && (e = e >= n ? e : n)), e;
      }
      function Tt(e, n, o, s, c, p) {
        var m, w = n & N, T = n & M, k = n & B;
        if (o && (m = c ? o(e, s, c, p) : o(e)), m !== r)
          return m;
        if (!pe(e))
          return e;
        var Z = _(e);
        if (Z) {
          if (m = zV(e), !w)
            return qe(e, m);
        } else {
          var b = Qe(e), W = b == Yi || b == Mc;
          if (mn(e))
            return Hu(e, w);
          if (b == Gt || b == er || W && !c) {
            if (m = T || W ? {} : dd(e), !w)
              return T ? SV(e, eV(m, e)) : EV(e, Ru(m, e));
          } else {
            if (!ue[b])
              return c ? e : {};
            m = GV(e, b, w);
          }
        }
        p || (p = new bt());
        var I = p.get(e);
        if (I)
          return I;
        p.set(e, m), Od(e) ? e.forEach(function(z) {
          m.add(Tt(z, n, o, z, e, p));
        }) : Dd(e) && e.forEach(function(z, $) {
          m.set($, Tt(z, n, o, $, e, p));
        });
        var Q = k ? T ? Ss : Es : T ? Ke : Je, P = Z ? r : Q(e);
        return Vt(P || e, function(z, $) {
          P && ($ = z, z = e[$]), ti(m, $, Tt(z, n, o, $, e, p));
        }), m;
      }
      function tV(e) {
        var n = Je(e);
        return function(o) {
          return Nu(o, e, n);
        };
      }
      function Nu(e, n, o) {
        var s = o.length;
        if (e == null)
          return !s;
        for (e = ce(e); s--; ) {
          var c = o[s], p = n[c], m = e[c];
          if (m === r && !(c in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function Mu(e, n, o) {
        if (typeof e != "function")
          throw new wt(d);
        return li(function() {
          e.apply(r, o);
        }, n);
      }
      function ni(e, n, o, s) {
        var c = -1, p = Xi, m = !0, w = e.length, T = [], k = n.length;
        if (!w)
          return T;
        o && (n = fe(n, ot(o))), s ? (p = qa, m = !1) : n.length >= l && (p = Xr, m = !1, n = new Fn(n));
        e:
          for (; ++c < w; ) {
            var Z = e[c], b = o == null ? Z : o(Z);
            if (Z = s || Z !== 0 ? Z : 0, m && b === b) {
              for (var W = k; W--; )
                if (n[W] === b)
                  continue e;
              T.push(Z);
            } else
              p(n, b, s) || T.push(Z);
          }
        return T;
      }
      var dn = qu(Bt), yu = qu(hs, !0);
      function nV(e, n) {
        var o = !0;
        return dn(e, function(s, c, p) {
          return o = !!n(s, c, p), o;
        }), o;
      }
      function po(e, n, o) {
        for (var s = -1, c = e.length; ++s < c; ) {
          var p = e[s], m = n(p);
          if (m != null && (w === r ? m === m && !st(m) : o(m, w)))
            var w = m, T = p;
        }
        return T;
      }
      function rV(e, n, o, s) {
        var c = e.length;
        for (o = H(o), o < 0 && (o = -o > c ? 0 : c + o), s = s === r || s > c ? c : H(s), s < 0 && (s += c), s = o > s ? 0 : zd(s); o < s; )
          e[o++] = n;
        return e;
      }
      function ku(e, n) {
        var o = [];
        return dn(e, function(s, c, p) {
          n(s, c, p) && o.push(s);
        }), o;
      }
      function Ce(e, n, o, s, c) {
        var p = -1, m = e.length;
        for (o || (o = _V), c || (c = []); ++p < m; ) {
          var w = e[p];
          n > 0 && o(w) ? n > 1 ? Ce(w, n - 1, o, s, c) : ln(c, w) : s || (c[c.length] = w);
        }
        return c;
      }
      var fs = $u(), Zu = $u(!0);
      function Bt(e, n) {
        return e && fs(e, n, Je);
      }
      function hs(e, n) {
        return e && Zu(e, n, Je);
      }
      function mo(e, n) {
        return sn(n, function(o) {
          return Lt(e[o]);
        });
      }
      function Wn(e, n) {
        n = hn(n, e);
        for (var o = 0, s = n.length; e != null && o < s; )
          e = e[It(n[o++])];
        return o && o == s ? e : r;
      }
      function Ju(e, n, o) {
        var s = n(e);
        return _(e) ? s : ln(s, o(e));
      }
      function He(e) {
        return e == null ? e === r ? Fm : Em : En && En in ce(e) ? IV(e) : $V(e);
      }
      function ps(e, n) {
        return e > n;
      }
      function iV(e, n) {
        return e != null && oe.call(e, n);
      }
      function oV(e, n) {
        return e != null && n in ce(e);
      }
      function aV(e, n, o) {
        return e >= Oe(n, o) && e < ke(n, o);
      }
      function ms(e, n, o) {
        for (var s = o ? qa : Xi, c = e[0].length, p = e.length, m = p, w = R(p), T = 1 / 0, k = []; m--; ) {
          var Z = e[m];
          m && n && (Z = fe(Z, ot(n))), T = Oe(Z.length, T), w[m] = !o && (n || c >= 120 && Z.length >= 120) ? new Fn(m && Z) : r;
        }
        Z = e[0];
        var b = -1, W = w[0];
        e:
          for (; ++b < c && k.length < T; ) {
            var I = Z[b], Q = n ? n(I) : I;
            if (I = o || I !== 0 ? I : 0, !(W ? Xr(W, Q) : s(k, Q, o))) {
              for (m = p; --m; ) {
                var P = w[m];
                if (!(P ? Xr(P, Q) : s(e[m], Q, o)))
                  continue e;
              }
              W && W.push(Q), k.push(I);
            }
          }
        return k;
      }
      function sV(e, n, o, s) {
        return Bt(e, function(c, p, m) {
          n(s, o(c), p, m);
        }), s;
      }
      function ri(e, n, o) {
        n = hn(n, e), e = md(e, n);
        var s = e == null ? e : e[It(Ut(n))];
        return s == null ? r : it(s, e, o);
      }
      function bu(e) {
        return ve(e) && He(e) == er;
      }
      function lV(e) {
        return ve(e) && He(e) == jr;
      }
      function cV(e) {
        return ve(e) && He(e) == Gr;
      }
      function ii(e, n, o, s, c) {
        return e === n ? !0 : e == null || n == null || !ve(e) && !ve(n) ? e !== e && n !== n : uV(e, n, o, s, ii, c);
      }
      function uV(e, n, o, s, c, p) {
        var m = _(e), w = _(n), T = m ? zi : Qe(e), k = w ? zi : Qe(n);
        T = T == er ? Gt : T, k = k == er ? Gt : k;
        var Z = T == Gt, b = k == Gt, W = T == k;
        if (W && mn(e)) {
          if (!mn(n))
            return !1;
          m = !0, Z = !1;
        }
        if (W && !Z)
          return p || (p = new bt()), m || pr(e) ? ld(e, n, o, s, c, p) : BV(e, n, T, o, s, c, p);
        if (!(o & A)) {
          var I = Z && oe.call(e, "__wrapped__"), Q = b && oe.call(n, "__wrapped__");
          if (I || Q) {
            var P = I ? e.value() : e, z = Q ? n.value() : n;
            return p || (p = new bt()), c(P, z, o, s, p);
          }
        }
        return W ? (p || (p = new bt()), DV(e, n, o, s, c, p)) : !1;
      }
      function dV(e) {
        return ve(e) && Qe(e) == kt;
      }
      function Vs(e, n, o, s) {
        var c = o.length, p = c, m = !s;
        if (e == null)
          return !p;
        for (e = ce(e); c--; ) {
          var w = o[c];
          if (m && w[2] ? w[1] !== e[w[0]] : !(w[0] in e))
            return !1;
        }
        for (; ++c < p; ) {
          w = o[c];
          var T = w[0], k = e[T], Z = w[1];
          if (m && w[2]) {
            if (k === r && !(T in e))
              return !1;
          } else {
            var b = new bt();
            if (s)
              var W = s(k, Z, T, e, n, b);
            if (!(W === r ? ii(Z, k, A | S, s, b) : W))
              return !1;
          }
        }
        return !0;
      }
      function Eu(e) {
        if (!pe(e) || PV(e))
          return !1;
        var n = Lt(e) ? d0 : t1;
        return n.test(xn(e));
      }
      function fV(e) {
        return ve(e) && He(e) == _r;
      }
      function hV(e) {
        return ve(e) && Qe(e) == Zt;
      }
      function pV(e) {
        return ve(e) && Fo(e.length) && !!de[He(e)];
      }
      function Su(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? _(e) ? Wu(e[0], e[1]) : Au(e) : Kd(e);
      }
      function ws(e) {
        if (!si(e))
          return w0(e);
        var n = [];
        for (var o in ce(e))
          oe.call(e, o) && o != "constructor" && n.push(o);
        return n;
      }
      function mV(e) {
        if (!pe(e))
          return qV(e);
        var n = si(e), o = [];
        for (var s in e)
          s == "constructor" && (n || !oe.call(e, s)) || o.push(s);
        return o;
      }
      function vs(e, n) {
        return e < n;
      }
      function Fu(e, n) {
        var o = -1, s = $e(e) ? R(e.length) : [];
        return dn(e, function(c, p, m) {
          s[++o] = n(c, p, m);
        }), s;
      }
      function Au(e) {
        var n = As(e);
        return n.length == 1 && n[0][2] ? hd(n[0][0], n[0][1]) : function(o) {
          return o === e || Vs(o, e, n);
        };
      }
      function Wu(e, n) {
        return Cs(e) && fd(n) ? hd(It(e), n) : function(o) {
          var s = _s(o, e);
          return s === r && s === n ? Hs(o, e) : ii(n, s, A | S);
        };
      }
      function Vo(e, n, o, s, c) {
        e !== n && fs(n, function(p, m) {
          if (c || (c = new bt()), pe(p))
            VV(e, n, m, o, Vo, s, c);
          else {
            var w = s ? s(Bs(e, m), p, m + "", e, n, c) : r;
            w === r && (w = p), us(e, m, w);
          }
        }, Ke);
      }
      function VV(e, n, o, s, c, p, m) {
        var w = Bs(e, o), T = Bs(n, o), k = m.get(T);
        if (k) {
          us(e, o, k);
          return;
        }
        var Z = p ? p(w, T, o + "", e, n, m) : r, b = Z === r;
        if (b) {
          var W = _(T), I = !W && mn(T), Q = !W && !I && pr(T);
          Z = T, W || I || Q ? _(w) ? Z = w : ge(w) ? Z = qe(w) : I ? (b = !1, Z = Hu(T, !0)) : Q ? (b = !1, Z = Pu(T, !0)) : Z = [] : ci(T) || Bn(T) ? (Z = w, Bn(w) ? Z = Gd(w) : (!pe(w) || Lt(w)) && (Z = dd(T))) : b = !1;
        }
        b && (m.set(T, Z), c(Z, T, s, p, m), m.delete(T)), us(e, o, Z);
      }
      function Cu(e, n) {
        var o = e.length;
        if (!!o)
          return n += n < 0 ? o : 0, Xt(n, o) ? e[n] : r;
      }
      function xu(e, n, o) {
        n.length ? n = fe(n, function(p) {
          return _(p) ? function(m) {
            return Wn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [et];
        var s = -1;
        n = fe(n, ot(O()));
        var c = Fu(e, function(p, m, w) {
          var T = fe(n, function(k) {
            return k(p);
          });
          return { criteria: T, index: ++s, value: p };
        });
        return G1(c, function(p, m) {
          return bV(p, m, o);
        });
      }
      function wV(e, n) {
        return Bu(e, n, function(o, s) {
          return Hs(e, s);
        });
      }
      function Bu(e, n, o) {
        for (var s = -1, c = n.length, p = {}; ++s < c; ) {
          var m = n[s], w = Wn(e, m);
          o(w, m) && oi(p, hn(m, e), w);
        }
        return p;
      }
      function vV(e) {
        return function(n) {
          return Wn(n, e);
        };
      }
      function Ts(e, n, o, s) {
        var c = s ? z1 : rr, p = -1, m = n.length, w = e;
        for (e === n && (n = qe(n)), o && (w = fe(e, ot(o))); ++p < m; )
          for (var T = 0, k = n[p], Z = o ? o(k) : k; (T = c(w, Z, T, s)) > -1; )
            w !== e && oo.call(w, T, 1), oo.call(e, T, 1);
        return e;
      }
      function Du(e, n) {
        for (var o = e ? n.length : 0, s = o - 1; o--; ) {
          var c = n[o];
          if (o == s || c !== p) {
            var p = c;
            Xt(c) ? oo.call(e, c, 1) : Ns(e, c);
          }
        }
        return e;
      }
      function gs(e, n) {
        return e + lo(vu() * (n - e + 1));
      }
      function TV(e, n, o, s) {
        for (var c = -1, p = ke(so((n - e) / (o || 1)), 0), m = R(p); p--; )
          m[s ? p : ++c] = e, e += o;
        return m;
      }
      function Us(e, n) {
        var o = "";
        if (!e || n < 1 || n > _e)
          return o;
        do
          n % 2 && (o += e), n = lo(n / 2), n && (e += e);
        while (n);
        return o;
      }
      function j(e, n) {
        return Ds(pd(e, n, et), e + "");
      }
      function gV(e) {
        return Uu(mr(e));
      }
      function UV(e, n) {
        var o = mr(e);
        return ko(o, An(n, 0, o.length));
      }
      function oi(e, n, o, s) {
        if (!pe(e))
          return e;
        n = hn(n, e);
        for (var c = -1, p = n.length, m = p - 1, w = e; w != null && ++c < p; ) {
          var T = It(n[c]), k = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return e;
          if (c != m) {
            var Z = w[T];
            k = s ? s(Z, T, w) : r, k === r && (k = pe(Z) ? Z : Xt(n[c + 1]) ? [] : {});
          }
          ti(w, T, k), w = w[T];
        }
        return e;
      }
      var Iu = co ? function(e, n) {
        return co.set(e, n), e;
      } : et, RV = ao ? function(e, n) {
        return ao(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: js(n),
          writable: !0
        });
      } : et;
      function NV(e) {
        return ko(mr(e));
      }
      function gt(e, n, o) {
        var s = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), o = o > c ? c : o, o < 0 && (o += c), c = n > o ? 0 : o - n >>> 0, n >>>= 0;
        for (var p = R(c); ++s < c; )
          p[s] = e[s + n];
        return p;
      }
      function MV(e, n) {
        var o;
        return dn(e, function(s, c, p) {
          return o = n(s, c, p), !o;
        }), !!o;
      }
      function wo(e, n, o) {
        var s = 0, c = e == null ? s : e.length;
        if (typeof n == "number" && n === n && c <= km) {
          for (; s < c; ) {
            var p = s + c >>> 1, m = e[p];
            m !== null && !st(m) && (o ? m <= n : m < n) ? s = p + 1 : c = p;
          }
          return c;
        }
        return Rs(e, n, et, o);
      }
      function Rs(e, n, o, s) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = o(n);
        for (var m = n !== n, w = n === null, T = st(n), k = n === r; c < p; ) {
          var Z = lo((c + p) / 2), b = o(e[Z]), W = b !== r, I = b === null, Q = b === b, P = st(b);
          if (m)
            var z = s || Q;
          else
            k ? z = Q && (s || W) : w ? z = Q && W && (s || !I) : T ? z = Q && W && !I && (s || !P) : I || P ? z = !1 : z = s ? b <= n : b < n;
          z ? c = Z + 1 : p = Z;
        }
        return Oe(p, ym);
      }
      function Ou(e, n) {
        for (var o = -1, s = e.length, c = 0, p = []; ++o < s; ) {
          var m = e[o], w = n ? n(m) : m;
          if (!o || !Et(w, T)) {
            var T = w;
            p[c++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Qu(e) {
        return typeof e == "number" ? e : st(e) ? Qi : +e;
      }
      function at(e) {
        if (typeof e == "string")
          return e;
        if (_(e))
          return fe(e, at) + "";
        if (st(e))
          return Tu ? Tu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ae ? "-0" : n;
      }
      function fn(e, n, o) {
        var s = -1, c = Xi, p = e.length, m = !0, w = [], T = w;
        if (o)
          m = !1, c = qa;
        else if (p >= l) {
          var k = n ? null : CV(e);
          if (k)
            return qi(k);
          m = !1, c = Xr, T = new Fn();
        } else
          T = n ? [] : w;
        e:
          for (; ++s < p; ) {
            var Z = e[s], b = n ? n(Z) : Z;
            if (Z = o || Z !== 0 ? Z : 0, m && b === b) {
              for (var W = T.length; W--; )
                if (T[W] === b)
                  continue e;
              n && T.push(b), w.push(Z);
            } else
              c(T, b, o) || (T !== w && T.push(b), w.push(Z));
          }
        return w;
      }
      function Ns(e, n) {
        return n = hn(n, e), e = md(e, n), e == null || delete e[It(Ut(n))];
      }
      function zu(e, n, o, s) {
        return oi(e, n, o(Wn(e, n)), s);
      }
      function vo(e, n, o, s) {
        for (var c = e.length, p = s ? c : -1; (s ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return o ? gt(e, s ? 0 : p, s ? p + 1 : c) : gt(e, s ? p + 1 : 0, s ? c : p);
      }
      function Gu(e, n) {
        var o = e;
        return o instanceof K && (o = o.value()), $a(n, function(s, c) {
          return c.func.apply(c.thisArg, ln([s], c.args));
        }, o);
      }
      function Ms(e, n, o) {
        var s = e.length;
        if (s < 2)
          return s ? fn(e[0]) : [];
        for (var c = -1, p = R(s); ++c < s; )
          for (var m = e[c], w = -1; ++w < s; )
            w != c && (p[c] = ni(p[c] || m, e[w], n, o));
        return fn(Ce(p, 1), n, o);
      }
      function Yu(e, n, o) {
        for (var s = -1, c = e.length, p = n.length, m = {}; ++s < c; ) {
          var w = s < p ? n[s] : r;
          o(m, e[s], w);
        }
        return m;
      }
      function ys(e) {
        return ge(e) ? e : [];
      }
      function ks(e) {
        return typeof e == "function" ? e : et;
      }
      function hn(e, n) {
        return _(e) ? e : Cs(e, n) ? [e] : Td(ie(e));
      }
      var yV = j;
      function pn(e, n, o) {
        var s = e.length;
        return o = o === r ? s : o, !n && o >= s ? e : gt(e, n, o);
      }
      var _u = f0 || function(e) {
        return We.clearTimeout(e);
      };
      function Hu(e, n) {
        if (n)
          return e.slice();
        var o = e.length, s = hu ? hu(o) : new e.constructor(o);
        return e.copy(s), s;
      }
      function Zs(e) {
        var n = new e.constructor(e.byteLength);
        return new ro(n).set(new ro(e)), n;
      }
      function kV(e, n) {
        var o = n ? Zs(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function ZV(e) {
        var n = new e.constructor(e.source, bc.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function JV(e) {
        return ei ? ce(ei.call(e)) : {};
      }
      function Pu(e, n) {
        var o = n ? Zs(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function ju(e, n) {
        if (e !== n) {
          var o = e !== r, s = e === null, c = e === e, p = st(e), m = n !== r, w = n === null, T = n === n, k = st(n);
          if (!w && !k && !p && e > n || p && m && T && !w && !k || s && m && T || !o && T || !c)
            return 1;
          if (!s && !p && !k && e < n || k && o && c && !s && !p || w && o && c || !m && c || !T)
            return -1;
        }
        return 0;
      }
      function bV(e, n, o) {
        for (var s = -1, c = e.criteria, p = n.criteria, m = c.length, w = o.length; ++s < m; ) {
          var T = ju(c[s], p[s]);
          if (T) {
            if (s >= w)
              return T;
            var k = o[s];
            return T * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Xu(e, n, o, s) {
        for (var c = -1, p = e.length, m = o.length, w = -1, T = n.length, k = ke(p - m, 0), Z = R(T + k), b = !s; ++w < T; )
          Z[w] = n[w];
        for (; ++c < m; )
          (b || c < p) && (Z[o[c]] = e[c]);
        for (; k--; )
          Z[w++] = e[c++];
        return Z;
      }
      function Lu(e, n, o, s) {
        for (var c = -1, p = e.length, m = -1, w = o.length, T = -1, k = n.length, Z = ke(p - w, 0), b = R(Z + k), W = !s; ++c < Z; )
          b[c] = e[c];
        for (var I = c; ++T < k; )
          b[I + T] = n[T];
        for (; ++m < w; )
          (W || c < p) && (b[I + o[m]] = e[c++]);
        return b;
      }
      function qe(e, n) {
        var o = -1, s = e.length;
        for (n || (n = R(s)); ++o < s; )
          n[o] = e[o];
        return n;
      }
      function Dt(e, n, o, s) {
        var c = !o;
        o || (o = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var w = n[p], T = s ? s(o[w], e[w], w, o, e) : r;
          T === r && (T = e[w]), c ? Ht(o, w, T) : ti(o, w, T);
        }
        return o;
      }
      function EV(e, n) {
        return Dt(e, Ws(e), n);
      }
      function SV(e, n) {
        return Dt(e, cd(e), n);
      }
      function To(e, n) {
        return function(o, s) {
          var c = _(o) ? x1 : K0, p = n ? n() : {};
          return c(o, e, O(s, 2), p);
        };
      }
      function dr(e) {
        return j(function(n, o) {
          var s = -1, c = o.length, p = c > 1 ? o[c - 1] : r, m = c > 2 ? o[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (c--, p) : r, m && Pe(o[0], o[1], m) && (p = c < 3 ? r : p, c = 1), n = ce(n); ++s < c; ) {
            var w = o[s];
            w && e(n, w, s, p);
          }
          return n;
        });
      }
      function qu(e, n) {
        return function(o, s) {
          if (o == null)
            return o;
          if (!$e(o))
            return e(o, s);
          for (var c = o.length, p = n ? c : -1, m = ce(o); (n ? p-- : ++p < c) && s(m[p], p, m) !== !1; )
            ;
          return o;
        };
      }
      function $u(e) {
        return function(n, o, s) {
          for (var c = -1, p = ce(n), m = s(n), w = m.length; w--; ) {
            var T = m[e ? w : ++c];
            if (o(p[T], T, p) === !1)
              break;
          }
          return n;
        };
      }
      function FV(e, n, o) {
        var s = n & E, c = ai(e);
        function p() {
          var m = this && this !== We && this instanceof p ? c : e;
          return m.apply(s ? o : this, arguments);
        }
        return p;
      }
      function Ku(e) {
        return function(n) {
          n = ie(n);
          var o = ir(n) ? Jt(n) : r, s = o ? o[0] : n.charAt(0), c = o ? pn(o, 1).join("") : n.slice(1);
          return s[e]() + c;
        };
      }
      function fr(e) {
        return function(n) {
          return $a(qd(Ld(n).replace(R1, "")), e, "");
        };
      }
      function ai(e) {
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
          var o = ur(e.prototype), s = e.apply(o, n);
          return pe(s) ? s : o;
        };
      }
      function AV(e, n, o) {
        var s = ai(e);
        function c() {
          for (var p = arguments.length, m = R(p), w = p, T = hr(c); w--; )
            m[w] = arguments[w];
          var k = p < 3 && m[0] !== T && m[p - 1] !== T ? [] : cn(m, T);
          if (p -= k.length, p < o)
            return id(
              e,
              n,
              go,
              c.placeholder,
              r,
              m,
              k,
              r,
              r,
              o - p
            );
          var Z = this && this !== We && this instanceof c ? s : e;
          return it(Z, this, m);
        }
        return c;
      }
      function ed(e) {
        return function(n, o, s) {
          var c = ce(n);
          if (!$e(n)) {
            var p = O(o, 3);
            n = Je(n), o = function(w) {
              return p(c[w], w, c);
            };
          }
          var m = e(n, o, s);
          return m > -1 ? c[p ? n[m] : m] : r;
        };
      }
      function td(e) {
        return jt(function(n) {
          var o = n.length, s = o, c = vt.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var p = n[s];
            if (typeof p != "function")
              throw new wt(d);
            if (c && !m && Mo(p) == "wrapper")
              var m = new vt([], !0);
          }
          for (s = m ? s : o; ++s < o; ) {
            p = n[s];
            var w = Mo(p), T = w == "wrapper" ? Fs(p) : r;
            T && xs(T[0]) && T[1] == (ee | C | J | L) && !T[4].length && T[9] == 1 ? m = m[Mo(T[0])].apply(m, T[3]) : m = p.length == 1 && xs(p) ? m[w]() : m.thru(p);
          }
          return function() {
            var k = arguments, Z = k[0];
            if (m && k.length == 1 && _(Z))
              return m.plant(Z).value();
            for (var b = 0, W = o ? n[b].apply(this, k) : Z; ++b < o; )
              W = n[b].call(this, W);
            return W;
          };
        });
      }
      function go(e, n, o, s, c, p, m, w, T, k) {
        var Z = n & ee, b = n & E, W = n & F, I = n & (C | G), Q = n & Ie, P = W ? r : ai(e);
        function z() {
          for (var $ = arguments.length, te = R($), lt = $; lt--; )
            te[lt] = arguments[lt];
          if (I)
            var je = hr(z), ct = _1(te, je);
          if (s && (te = Xu(te, s, c, I)), p && (te = Lu(te, p, m, I)), $ -= ct, I && $ < k) {
            var Ue = cn(te, je);
            return id(
              e,
              n,
              go,
              z.placeholder,
              o,
              te,
              Ue,
              w,
              T,
              k - $
            );
          }
          var St = b ? o : this, $t = W ? St[e] : e;
          return $ = te.length, w ? te = KV(te, w) : Q && $ > 1 && te.reverse(), Z && T < $ && (te.length = T), this && this !== We && this instanceof z && ($t = P || ai($t)), $t.apply(St, te);
        }
        return z;
      }
      function nd(e, n) {
        return function(o, s) {
          return sV(o, e, n(s), {});
        };
      }
      function Uo(e, n) {
        return function(o, s) {
          var c;
          if (o === r && s === r)
            return n;
          if (o !== r && (c = o), s !== r) {
            if (c === r)
              return s;
            typeof o == "string" || typeof s == "string" ? (o = at(o), s = at(s)) : (o = Qu(o), s = Qu(s)), c = e(o, s);
          }
          return c;
        };
      }
      function Js(e) {
        return jt(function(n) {
          return n = fe(n, ot(O())), j(function(o) {
            var s = this;
            return e(n, function(c) {
              return it(c, s, o);
            });
          });
        });
      }
      function Ro(e, n) {
        n = n === r ? " " : at(n);
        var o = n.length;
        if (o < 2)
          return o ? Us(n, e) : n;
        var s = Us(n, so(e / or(n)));
        return ir(n) ? pn(Jt(s), 0, e).join("") : s.slice(0, e);
      }
      function WV(e, n, o, s) {
        var c = n & E, p = ai(e);
        function m() {
          for (var w = -1, T = arguments.length, k = -1, Z = s.length, b = R(Z + T), W = this && this !== We && this instanceof m ? p : e; ++k < Z; )
            b[k] = s[k];
          for (; T--; )
            b[k++] = arguments[++w];
          return it(W, c ? o : this, b);
        }
        return m;
      }
      function rd(e) {
        return function(n, o, s) {
          return s && typeof s != "number" && Pe(n, o, s) && (o = s = r), n = qt(n), o === r ? (o = n, n = 0) : o = qt(o), s = s === r ? n < o ? 1 : -1 : qt(s), TV(n, o, s, e);
        };
      }
      function No(e) {
        return function(n, o) {
          return typeof n == "string" && typeof o == "string" || (n = Rt(n), o = Rt(o)), e(n, o);
        };
      }
      function id(e, n, o, s, c, p, m, w, T, k) {
        var Z = n & C, b = Z ? m : r, W = Z ? r : m, I = Z ? p : r, Q = Z ? r : p;
        n |= Z ? J : X, n &= ~(Z ? X : J), n & D || (n &= ~(E | F));
        var P = [
          e,
          n,
          c,
          I,
          b,
          Q,
          W,
          w,
          T,
          k
        ], z = o.apply(r, P);
        return xs(e) && Vd(z, P), z.placeholder = s, wd(z, e, n);
      }
      function bs(e) {
        var n = ye[e];
        return function(o, s) {
          if (o = Rt(o), s = s == null ? 0 : Oe(H(s), 292), s && wu(o)) {
            var c = (ie(o) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + s));
            return c = (ie(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - s));
          }
          return n(o);
        };
      }
      var CV = lr && 1 / qi(new lr([, -0]))[1] == Ae ? function(e) {
        return new lr(e);
      } : qs;
      function od(e) {
        return function(n) {
          var o = Qe(n);
          return o == kt ? os(n) : o == Zt ? $1(n) : Y1(n, e(n));
        };
      }
      function Pt(e, n, o, s, c, p, m, w) {
        var T = n & F;
        if (!T && typeof e != "function")
          throw new wt(d);
        var k = s ? s.length : 0;
        if (k || (n &= ~(J | X), s = c = r), m = m === r ? m : ke(H(m), 0), w = w === r ? w : H(w), k -= c ? c.length : 0, n & X) {
          var Z = s, b = c;
          s = c = r;
        }
        var W = T ? r : Fs(e), I = [
          e,
          n,
          o,
          s,
          c,
          Z,
          b,
          p,
          m,
          w
        ];
        if (W && LV(I, W), e = I[0], n = I[1], o = I[2], s = I[3], c = I[4], w = I[9] = I[9] === r ? T ? 0 : e.length : ke(I[9] - k, 0), !w && n & (C | G) && (n &= ~(C | G)), !n || n == E)
          var Q = FV(e, n, o);
        else
          n == C || n == G ? Q = AV(e, n, w) : (n == J || n == (E | J)) && !c.length ? Q = WV(e, n, o, s) : Q = go.apply(r, I);
        var P = W ? Iu : Vd;
        return wd(P(Q, I), e, n);
      }
      function ad(e, n, o, s) {
        return e === r || Et(e, sr[o]) && !oe.call(s, o) ? n : e;
      }
      function sd(e, n, o, s, c, p) {
        return pe(e) && pe(n) && (p.set(n, e), Vo(e, n, r, sd, p), p.delete(n)), e;
      }
      function xV(e) {
        return ci(e) ? r : e;
      }
      function ld(e, n, o, s, c, p) {
        var m = o & A, w = e.length, T = n.length;
        if (w != T && !(m && T > w))
          return !1;
        var k = p.get(e), Z = p.get(n);
        if (k && Z)
          return k == n && Z == e;
        var b = -1, W = !0, I = o & S ? new Fn() : r;
        for (p.set(e, n), p.set(n, e); ++b < w; ) {
          var Q = e[b], P = n[b];
          if (s)
            var z = m ? s(P, Q, b, n, e, p) : s(Q, P, b, e, n, p);
          if (z !== r) {
            if (z)
              continue;
            W = !1;
            break;
          }
          if (I) {
            if (!Ka(n, function($, te) {
              if (!Xr(I, te) && (Q === $ || c(Q, $, o, s, p)))
                return I.push(te);
            })) {
              W = !1;
              break;
            }
          } else if (!(Q === P || c(Q, P, o, s, p))) {
            W = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), W;
      }
      function BV(e, n, o, s, c, p, m) {
        switch (o) {
          case tr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case jr:
            return !(e.byteLength != n.byteLength || !p(new ro(e), new ro(n)));
          case zr:
          case Gr:
          case Yr:
            return Et(+e, +n);
          case Gi:
            return e.name == n.name && e.message == n.message;
          case _r:
          case Hr:
            return e == n + "";
          case kt:
            var w = os;
          case Zt:
            var T = s & A;
            if (w || (w = qi), e.size != n.size && !T)
              return !1;
            var k = m.get(e);
            if (k)
              return k == n;
            s |= S, m.set(e, n);
            var Z = ld(w(e), w(n), s, c, p, m);
            return m.delete(e), Z;
          case _i:
            if (ei)
              return ei.call(e) == ei.call(n);
        }
        return !1;
      }
      function DV(e, n, o, s, c, p) {
        var m = o & A, w = Es(e), T = w.length, k = Es(n), Z = k.length;
        if (T != Z && !m)
          return !1;
        for (var b = T; b--; ) {
          var W = w[b];
          if (!(m ? W in n : oe.call(n, W)))
            return !1;
        }
        var I = p.get(e), Q = p.get(n);
        if (I && Q)
          return I == n && Q == e;
        var P = !0;
        p.set(e, n), p.set(n, e);
        for (var z = m; ++b < T; ) {
          W = w[b];
          var $ = e[W], te = n[W];
          if (s)
            var lt = m ? s(te, $, W, n, e, p) : s($, te, W, e, n, p);
          if (!(lt === r ? $ === te || c($, te, o, s, p) : lt)) {
            P = !1;
            break;
          }
          z || (z = W == "constructor");
        }
        if (P && !z) {
          var je = e.constructor, ct = n.constructor;
          je != ct && "constructor" in e && "constructor" in n && !(typeof je == "function" && je instanceof je && typeof ct == "function" && ct instanceof ct) && (P = !1);
        }
        return p.delete(e), p.delete(n), P;
      }
      function jt(e) {
        return Ds(pd(e, r, Nd), e + "");
      }
      function Es(e) {
        return Ju(e, Je, Ws);
      }
      function Ss(e) {
        return Ju(e, Ke, cd);
      }
      var Fs = co ? function(e) {
        return co.get(e);
      } : qs;
      function Mo(e) {
        for (var n = e.name + "", o = cr[n], s = oe.call(cr, n) ? o.length : 0; s--; ) {
          var c = o[s], p = c.func;
          if (p == null || p == e)
            return c.name;
        }
        return n;
      }
      function hr(e) {
        var n = oe.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function O() {
        var e = f.iteratee || Xs;
        return e = e === Xs ? Su : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function yo(e, n) {
        var o = e.__data__;
        return HV(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
      }
      function As(e) {
        for (var n = Je(e), o = n.length; o--; ) {
          var s = n[o], c = e[s];
          n[o] = [s, c, fd(c)];
        }
        return n;
      }
      function Cn(e, n) {
        var o = X1(e, n);
        return Eu(o) ? o : r;
      }
      function IV(e) {
        var n = oe.call(e, En), o = e[En];
        try {
          e[En] = r;
          var s = !0;
        } catch {
        }
        var c = to.call(e);
        return s && (n ? e[En] = o : delete e[En]), c;
      }
      var Ws = ss ? function(e) {
        return e == null ? [] : (e = ce(e), sn(ss(e), function(n) {
          return mu.call(e, n);
        }));
      } : $s, cd = ss ? function(e) {
        for (var n = []; e; )
          ln(n, Ws(e)), e = io(e);
        return n;
      } : $s, Qe = He;
      (ls && Qe(new ls(new ArrayBuffer(1))) != tr || qr && Qe(new qr()) != kt || cs && Qe(cs.resolve()) != yc || lr && Qe(new lr()) != Zt || $r && Qe(new $r()) != Pr) && (Qe = function(e) {
        var n = He(e), o = n == Gt ? e.constructor : r, s = o ? xn(o) : "";
        if (s)
          switch (s) {
            case U0:
              return tr;
            case R0:
              return kt;
            case N0:
              return yc;
            case M0:
              return Zt;
            case y0:
              return Pr;
          }
        return n;
      });
      function OV(e, n, o) {
        for (var s = -1, c = o.length; ++s < c; ) {
          var p = o[s], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = Oe(n, e + m);
              break;
            case "takeRight":
              e = ke(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function QV(e) {
        var n = e.match(Pm);
        return n ? n[1].split(jm) : [];
      }
      function ud(e, n, o) {
        n = hn(n, e);
        for (var s = -1, c = n.length, p = !1; ++s < c; ) {
          var m = It(n[s]);
          if (!(p = e != null && o(e, m)))
            break;
          e = e[m];
        }
        return p || ++s != c ? p : (c = e == null ? 0 : e.length, !!c && Fo(c) && Xt(m, c) && (_(e) || Bn(e)));
      }
      function zV(e) {
        var n = e.length, o = new e.constructor(n);
        return n && typeof e[0] == "string" && oe.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function dd(e) {
        return typeof e.constructor == "function" && !si(e) ? ur(io(e)) : {};
      }
      function GV(e, n, o) {
        var s = e.constructor;
        switch (n) {
          case jr:
            return Zs(e);
          case zr:
          case Gr:
            return new s(+e);
          case tr:
            return kV(e, o);
          case Aa:
          case Wa:
          case Ca:
          case xa:
          case Ba:
          case Da:
          case Ia:
          case Oa:
          case Qa:
            return Pu(e, o);
          case kt:
            return new s();
          case Yr:
          case Hr:
            return new s(e);
          case _r:
            return ZV(e);
          case Zt:
            return new s();
          case _i:
            return JV(e);
        }
      }
      function YV(e, n) {
        var o = n.length;
        if (!o)
          return e;
        var s = o - 1;
        return n[s] = (o > 1 ? "& " : "") + n[s], n = n.join(o > 2 ? ", " : " "), e.replace(Hm, `{
/* [wrapped with ` + n + `] */
`);
      }
      function _V(e) {
        return _(e) || Bn(e) || !!(Vu && e && e[Vu]);
      }
      function Xt(e, n) {
        var o = typeof e;
        return n = n == null ? _e : n, !!n && (o == "number" || o != "symbol" && r1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Pe(e, n, o) {
        if (!pe(o))
          return !1;
        var s = typeof n;
        return (s == "number" ? $e(o) && Xt(n, o.length) : s == "string" && n in o) ? Et(o[n], e) : !1;
      }
      function Cs(e, n) {
        if (_(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || st(e) ? !0 : zm.test(e) || !Qm.test(e) || n != null && e in ce(n);
      }
      function HV(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function xs(e) {
        var n = Mo(e), o = f[n];
        if (typeof o != "function" || !(n in K.prototype))
          return !1;
        if (e === o)
          return !0;
        var s = Fs(o);
        return !!s && e === s[0];
      }
      function PV(e) {
        return !!fu && fu in e;
      }
      var jV = Ki ? Lt : Ks;
      function si(e) {
        var n = e && e.constructor, o = typeof n == "function" && n.prototype || sr;
        return e === o;
      }
      function fd(e) {
        return e === e && !pe(e);
      }
      function hd(e, n) {
        return function(o) {
          return o == null ? !1 : o[e] === n && (n !== r || e in ce(o));
        };
      }
      function XV(e) {
        var n = Eo(e, function(s) {
          return o.size === g && o.clear(), s;
        }), o = n.cache;
        return n;
      }
      function LV(e, n) {
        var o = e[1], s = n[1], c = o | s, p = c < (E | F | ee), m = s == ee && o == C || s == ee && o == L && e[7].length <= n[8] || s == (ee | L) && n[7].length <= n[8] && o == C;
        if (!(p || m))
          return e;
        s & E && (e[2] = n[2], c |= o & E ? 0 : D);
        var w = n[3];
        if (w) {
          var T = e[3];
          e[3] = T ? Xu(T, w, n[4]) : w, e[4] = T ? cn(e[3], U) : n[4];
        }
        return w = n[5], w && (T = e[5], e[5] = T ? Lu(T, w, n[6]) : w, e[6] = T ? cn(e[5], U) : n[6]), w = n[7], w && (e[7] = w), s & ee && (e[8] = e[8] == null ? n[8] : Oe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function qV(e) {
        var n = [];
        if (e != null)
          for (var o in ce(e))
            n.push(o);
        return n;
      }
      function $V(e) {
        return to.call(e);
      }
      function pd(e, n, o) {
        return n = ke(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, c = -1, p = ke(s.length - n, 0), m = R(p); ++c < p; )
            m[c] = s[n + c];
          c = -1;
          for (var w = R(n + 1); ++c < n; )
            w[c] = s[c];
          return w[n] = o(m), it(e, this, w);
        };
      }
      function md(e, n) {
        return n.length < 2 ? e : Wn(e, gt(n, 0, -1));
      }
      function KV(e, n) {
        for (var o = e.length, s = Oe(n.length, o), c = qe(e); s--; ) {
          var p = n[s];
          e[s] = Xt(p, o) ? c[p] : r;
        }
        return e;
      }
      function Bs(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Vd = vd(Iu), li = p0 || function(e, n) {
        return We.setTimeout(e, n);
      }, Ds = vd(RV);
      function wd(e, n, o) {
        var s = n + "";
        return Ds(e, YV(s, ew(QV(s), o)));
      }
      function vd(e) {
        var n = 0, o = 0;
        return function() {
          var s = v0(), c = Te - (s - o);
          if (o = s, c > 0) {
            if (++n >= we)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function ko(e, n) {
        var o = -1, s = e.length, c = s - 1;
        for (n = n === r ? s : n; ++o < n; ) {
          var p = gs(o, c), m = e[p];
          e[p] = e[o], e[o] = m;
        }
        return e.length = n, e;
      }
      var Td = XV(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Gm, function(o, s, c, p) {
          n.push(c ? p.replace(qm, "$1") : s || o);
        }), n;
      });
      function It(e) {
        if (typeof e == "string" || st(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ae ? "-0" : n;
      }
      function xn(e) {
        if (e != null) {
          try {
            return eo.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function ew(e, n) {
        return Vt(Zm, function(o) {
          var s = "_." + o[0];
          n & o[1] && !Xi(e, s) && e.push(s);
        }), e.sort();
      }
      function gd(e) {
        if (e instanceof K)
          return e.clone();
        var n = new vt(e.__wrapped__, e.__chain__);
        return n.__actions__ = qe(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function tw(e, n, o) {
        (o ? Pe(e, n, o) : n === r) ? n = 1 : n = ke(H(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var c = 0, p = 0, m = R(so(s / n)); c < s; )
          m[p++] = gt(e, c, c += n);
        return m;
      }
      function nw(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = 0, c = []; ++n < o; ) {
          var p = e[n];
          p && (c[s++] = p);
        }
        return c;
      }
      function rw() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = R(e - 1), o = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return ln(_(o) ? qe(o) : [o], Ce(n, 1));
      }
      var iw = j(function(e, n) {
        return ge(e) ? ni(e, Ce(n, 1, ge, !0)) : [];
      }), ow = j(function(e, n) {
        var o = Ut(n);
        return ge(o) && (o = r), ge(e) ? ni(e, Ce(n, 1, ge, !0), O(o, 2)) : [];
      }), aw = j(function(e, n) {
        var o = Ut(n);
        return ge(o) && (o = r), ge(e) ? ni(e, Ce(n, 1, ge, !0), r, o) : [];
      });
      function sw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : H(n), gt(e, n < 0 ? 0 : n, s)) : [];
      }
      function lw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : H(n), n = s - n, gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function cw(e, n) {
        return e && e.length ? vo(e, O(n, 3), !0, !0) : [];
      }
      function uw(e, n) {
        return e && e.length ? vo(e, O(n, 3), !0) : [];
      }
      function dw(e, n, o, s) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && Pe(e, n, o) && (o = 0, s = c), rV(e, n, o, s)) : [];
      }
      function Ud(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : H(o);
        return c < 0 && (c = ke(s + c, 0)), Li(e, O(n, 3), c);
      }
      function Rd(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = s - 1;
        return o !== r && (c = H(o), c = o < 0 ? ke(s + c, 0) : Oe(c, s - 1)), Li(e, O(n, 3), c, !0);
      }
      function Nd(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, 1) : [];
      }
      function fw(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, Ae) : [];
      }
      function hw(e, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n = n === r ? 1 : H(n), Ce(e, n)) : [];
      }
      function pw(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = {}; ++n < o; ) {
          var c = e[n];
          s[c[0]] = c[1];
        }
        return s;
      }
      function Md(e) {
        return e && e.length ? e[0] : r;
      }
      function mw(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : H(o);
        return c < 0 && (c = ke(s + c, 0)), rr(e, n, c);
      }
      function Vw(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 0, -1) : [];
      }
      var ww = j(function(e) {
        var n = fe(e, ys);
        return n.length && n[0] === e[0] ? ms(n) : [];
      }), vw = j(function(e) {
        var n = Ut(e), o = fe(e, ys);
        return n === Ut(o) ? n = r : o.pop(), o.length && o[0] === e[0] ? ms(o, O(n, 2)) : [];
      }), Tw = j(function(e) {
        var n = Ut(e), o = fe(e, ys);
        return n = typeof n == "function" ? n : r, n && o.pop(), o.length && o[0] === e[0] ? ms(o, r, n) : [];
      });
      function gw(e, n) {
        return e == null ? "" : V0.call(e, n);
      }
      function Ut(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function Uw(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = s;
        return o !== r && (c = H(o), c = c < 0 ? ke(s + c, 0) : Oe(c, s - 1)), n === n ? e0(e, n, c) : Li(e, iu, c, !0);
      }
      function Rw(e, n) {
        return e && e.length ? Cu(e, H(n)) : r;
      }
      var Nw = j(yd);
      function yd(e, n) {
        return e && e.length && n && n.length ? Ts(e, n) : e;
      }
      function Mw(e, n, o) {
        return e && e.length && n && n.length ? Ts(e, n, O(o, 2)) : e;
      }
      function yw(e, n, o) {
        return e && e.length && n && n.length ? Ts(e, n, r, o) : e;
      }
      var kw = jt(function(e, n) {
        var o = e == null ? 0 : e.length, s = ds(e, n);
        return Du(e, fe(n, function(c) {
          return Xt(c, o) ? +c : c;
        }).sort(ju)), s;
      });
      function Zw(e, n) {
        var o = [];
        if (!(e && e.length))
          return o;
        var s = -1, c = [], p = e.length;
        for (n = O(n, 3); ++s < p; ) {
          var m = e[s];
          n(m, s, e) && (o.push(m), c.push(s));
        }
        return Du(e, c), o;
      }
      function Is(e) {
        return e == null ? e : g0.call(e);
      }
      function Jw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (o && typeof o != "number" && Pe(e, n, o) ? (n = 0, o = s) : (n = n == null ? 0 : H(n), o = o === r ? s : H(o)), gt(e, n, o)) : [];
      }
      function bw(e, n) {
        return wo(e, n);
      }
      function Ew(e, n, o) {
        return Rs(e, n, O(o, 2));
      }
      function Sw(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = wo(e, n);
          if (s < o && Et(e[s], n))
            return s;
        }
        return -1;
      }
      function Fw(e, n) {
        return wo(e, n, !0);
      }
      function Aw(e, n, o) {
        return Rs(e, n, O(o, 2), !0);
      }
      function Ww(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = wo(e, n, !0) - 1;
          if (Et(e[s], n))
            return s;
        }
        return -1;
      }
      function Cw(e) {
        return e && e.length ? Ou(e) : [];
      }
      function xw(e, n) {
        return e && e.length ? Ou(e, O(n, 2)) : [];
      }
      function Bw(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 1, n) : [];
      }
      function Dw(e, n, o) {
        return e && e.length ? (n = o || n === r ? 1 : H(n), gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Iw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : H(n), n = s - n, gt(e, n < 0 ? 0 : n, s)) : [];
      }
      function Ow(e, n) {
        return e && e.length ? vo(e, O(n, 3), !1, !0) : [];
      }
      function Qw(e, n) {
        return e && e.length ? vo(e, O(n, 3)) : [];
      }
      var zw = j(function(e) {
        return fn(Ce(e, 1, ge, !0));
      }), Gw = j(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), fn(Ce(e, 1, ge, !0), O(n, 2));
      }), Yw = j(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, fn(Ce(e, 1, ge, !0), r, n);
      });
      function _w(e) {
        return e && e.length ? fn(e) : [];
      }
      function Hw(e, n) {
        return e && e.length ? fn(e, O(n, 2)) : [];
      }
      function Pw(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? fn(e, r, n) : [];
      }
      function Os(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = sn(e, function(o) {
          if (ge(o))
            return n = ke(o.length, n), !0;
        }), rs(n, function(o) {
          return fe(e, es(o));
        });
      }
      function kd(e, n) {
        if (!(e && e.length))
          return [];
        var o = Os(e);
        return n == null ? o : fe(o, function(s) {
          return it(n, r, s);
        });
      }
      var jw = j(function(e, n) {
        return ge(e) ? ni(e, n) : [];
      }), Xw = j(function(e) {
        return Ms(sn(e, ge));
      }), Lw = j(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), Ms(sn(e, ge), O(n, 2));
      }), qw = j(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, Ms(sn(e, ge), r, n);
      }), $w = j(Os);
      function Kw(e, n) {
        return Yu(e || [], n || [], ti);
      }
      function ev(e, n) {
        return Yu(e || [], n || [], oi);
      }
      var tv = j(function(e) {
        var n = e.length, o = n > 1 ? e[n - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, kd(e, o);
      });
      function Zd(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function nv(e, n) {
        return n(e), e;
      }
      function Zo(e, n) {
        return n(e);
      }
      var rv = jt(function(e) {
        var n = e.length, o = n ? e[0] : 0, s = this.__wrapped__, c = function(p) {
          return ds(p, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof K) || !Xt(o) ? this.thru(c) : (s = s.slice(o, +o + (n ? 1 : 0)), s.__actions__.push({
          func: Zo,
          args: [c],
          thisArg: r
        }), new vt(s, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function iv() {
        return Zd(this);
      }
      function ov() {
        return new vt(this.value(), this.__chain__);
      }
      function av() {
        this.__values__ === r && (this.__values__ = Qd(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function sv() {
        return this;
      }
      function lv(e) {
        for (var n, o = this; o instanceof fo; ) {
          var s = gd(o);
          s.__index__ = 0, s.__values__ = r, n ? c.__wrapped__ = s : n = s;
          var c = s;
          o = o.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function cv() {
        var e = this.__wrapped__;
        if (e instanceof K) {
          var n = e;
          return this.__actions__.length && (n = new K(this)), n = n.reverse(), n.__actions__.push({
            func: Zo,
            args: [Is],
            thisArg: r
          }), new vt(n, this.__chain__);
        }
        return this.thru(Is);
      }
      function uv() {
        return Gu(this.__wrapped__, this.__actions__);
      }
      var dv = To(function(e, n, o) {
        oe.call(e, o) ? ++e[o] : Ht(e, o, 1);
      });
      function fv(e, n, o) {
        var s = _(e) ? nu : nV;
        return o && Pe(e, n, o) && (n = r), s(e, O(n, 3));
      }
      function hv(e, n) {
        var o = _(e) ? sn : ku;
        return o(e, O(n, 3));
      }
      var pv = ed(Ud), mv = ed(Rd);
      function Vv(e, n) {
        return Ce(Jo(e, n), 1);
      }
      function wv(e, n) {
        return Ce(Jo(e, n), Ae);
      }
      function vv(e, n, o) {
        return o = o === r ? 1 : H(o), Ce(Jo(e, n), o);
      }
      function Jd(e, n) {
        var o = _(e) ? Vt : dn;
        return o(e, O(n, 3));
      }
      function bd(e, n) {
        var o = _(e) ? B1 : yu;
        return o(e, O(n, 3));
      }
      var Tv = To(function(e, n, o) {
        oe.call(e, o) ? e[o].push(n) : Ht(e, o, [n]);
      });
      function gv(e, n, o, s) {
        e = $e(e) ? e : mr(e), o = o && !s ? H(o) : 0;
        var c = e.length;
        return o < 0 && (o = ke(c + o, 0)), Ao(e) ? o <= c && e.indexOf(n, o) > -1 : !!c && rr(e, n, o) > -1;
      }
      var Uv = j(function(e, n, o) {
        var s = -1, c = typeof n == "function", p = $e(e) ? R(e.length) : [];
        return dn(e, function(m) {
          p[++s] = c ? it(n, m, o) : ri(m, n, o);
        }), p;
      }), Rv = To(function(e, n, o) {
        Ht(e, o, n);
      });
      function Jo(e, n) {
        var o = _(e) ? fe : Fu;
        return o(e, O(n, 3));
      }
      function Nv(e, n, o, s) {
        return e == null ? [] : (_(n) || (n = n == null ? [] : [n]), o = s ? r : o, _(o) || (o = o == null ? [] : [o]), xu(e, n, o));
      }
      var Mv = To(function(e, n, o) {
        e[o ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function yv(e, n, o) {
        var s = _(e) ? $a : au, c = arguments.length < 3;
        return s(e, O(n, 4), o, c, dn);
      }
      function kv(e, n, o) {
        var s = _(e) ? D1 : au, c = arguments.length < 3;
        return s(e, O(n, 4), o, c, yu);
      }
      function Zv(e, n) {
        var o = _(e) ? sn : ku;
        return o(e, So(O(n, 3)));
      }
      function Jv(e) {
        var n = _(e) ? Uu : gV;
        return n(e);
      }
      function bv(e, n, o) {
        (o ? Pe(e, n, o) : n === r) ? n = 1 : n = H(n);
        var s = _(e) ? q0 : UV;
        return s(e, n);
      }
      function Ev(e) {
        var n = _(e) ? $0 : NV;
        return n(e);
      }
      function Sv(e) {
        if (e == null)
          return 0;
        if ($e(e))
          return Ao(e) ? or(e) : e.length;
        var n = Qe(e);
        return n == kt || n == Zt ? e.size : ws(e).length;
      }
      function Fv(e, n, o) {
        var s = _(e) ? Ka : MV;
        return o && Pe(e, n, o) && (n = r), s(e, O(n, 3));
      }
      var Av = j(function(e, n) {
        if (e == null)
          return [];
        var o = n.length;
        return o > 1 && Pe(e, n[0], n[1]) ? n = [] : o > 2 && Pe(n[0], n[1], n[2]) && (n = [n[0]]), xu(e, Ce(n, 1), []);
      }), bo = h0 || function() {
        return We.Date.now();
      };
      function Wv(e, n) {
        if (typeof n != "function")
          throw new wt(d);
        return e = H(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Ed(e, n, o) {
        return n = o ? r : n, n = e && n == null ? e.length : n, Pt(e, ee, r, r, r, r, n);
      }
      function Sd(e, n) {
        var o;
        if (typeof n != "function")
          throw new wt(d);
        return e = H(e), function() {
          return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = r), o;
        };
      }
      var Qs = j(function(e, n, o) {
        var s = E;
        if (o.length) {
          var c = cn(o, hr(Qs));
          s |= J;
        }
        return Pt(e, s, n, o, c);
      }), Fd = j(function(e, n, o) {
        var s = E | F;
        if (o.length) {
          var c = cn(o, hr(Fd));
          s |= J;
        }
        return Pt(n, s, e, o, c);
      });
      function Ad(e, n, o) {
        n = o ? r : n;
        var s = Pt(e, C, r, r, r, r, r, n);
        return s.placeholder = Ad.placeholder, s;
      }
      function Wd(e, n, o) {
        n = o ? r : n;
        var s = Pt(e, G, r, r, r, r, r, n);
        return s.placeholder = Wd.placeholder, s;
      }
      function Cd(e, n, o) {
        var s, c, p, m, w, T, k = 0, Z = !1, b = !1, W = !0;
        if (typeof e != "function")
          throw new wt(d);
        n = Rt(n) || 0, pe(o) && (Z = !!o.leading, b = "maxWait" in o, p = b ? ke(Rt(o.maxWait) || 0, n) : p, W = "trailing" in o ? !!o.trailing : W);
        function I(Ue) {
          var St = s, $t = c;
          return s = c = r, k = Ue, m = e.apply($t, St), m;
        }
        function Q(Ue) {
          return k = Ue, w = li($, n), Z ? I(Ue) : m;
        }
        function P(Ue) {
          var St = Ue - T, $t = Ue - k, ef = n - St;
          return b ? Oe(ef, p - $t) : ef;
        }
        function z(Ue) {
          var St = Ue - T, $t = Ue - k;
          return T === r || St >= n || St < 0 || b && $t >= p;
        }
        function $() {
          var Ue = bo();
          if (z(Ue))
            return te(Ue);
          w = li($, P(Ue));
        }
        function te(Ue) {
          return w = r, W && s ? I(Ue) : (s = c = r, m);
        }
        function lt() {
          w !== r && _u(w), k = 0, s = T = c = w = r;
        }
        function je() {
          return w === r ? m : te(bo());
        }
        function ct() {
          var Ue = bo(), St = z(Ue);
          if (s = arguments, c = this, T = Ue, St) {
            if (w === r)
              return Q(T);
            if (b)
              return _u(w), w = li($, n), I(T);
          }
          return w === r && (w = li($, n)), m;
        }
        return ct.cancel = lt, ct.flush = je, ct;
      }
      var Cv = j(function(e, n) {
        return Mu(e, 1, n);
      }), xv = j(function(e, n, o) {
        return Mu(e, Rt(n) || 0, o);
      });
      function Bv(e) {
        return Pt(e, Ie);
      }
      function Eo(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new wt(d);
        var o = function() {
          var s = arguments, c = n ? n.apply(this, s) : s[0], p = o.cache;
          if (p.has(c))
            return p.get(c);
          var m = e.apply(this, s);
          return o.cache = p.set(c, m) || p, m;
        };
        return o.cache = new (Eo.Cache || _t)(), o;
      }
      Eo.Cache = _t;
      function So(e) {
        if (typeof e != "function")
          throw new wt(d);
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
      function Dv(e) {
        return Sd(2, e);
      }
      var Iv = yV(function(e, n) {
        n = n.length == 1 && _(n[0]) ? fe(n[0], ot(O())) : fe(Ce(n, 1), ot(O()));
        var o = n.length;
        return j(function(s) {
          for (var c = -1, p = Oe(s.length, o); ++c < p; )
            s[c] = n[c].call(this, s[c]);
          return it(e, this, s);
        });
      }), zs = j(function(e, n) {
        var o = cn(n, hr(zs));
        return Pt(e, J, r, n, o);
      }), xd = j(function(e, n) {
        var o = cn(n, hr(xd));
        return Pt(e, X, r, n, o);
      }), Ov = jt(function(e, n) {
        return Pt(e, L, r, r, r, n);
      });
      function Qv(e, n) {
        if (typeof e != "function")
          throw new wt(d);
        return n = n === r ? n : H(n), j(e, n);
      }
      function zv(e, n) {
        if (typeof e != "function")
          throw new wt(d);
        return n = n == null ? 0 : ke(H(n), 0), j(function(o) {
          var s = o[n], c = pn(o, 0, n);
          return s && ln(c, s), it(e, this, c);
        });
      }
      function Gv(e, n, o) {
        var s = !0, c = !0;
        if (typeof e != "function")
          throw new wt(d);
        return pe(o) && (s = "leading" in o ? !!o.leading : s, c = "trailing" in o ? !!o.trailing : c), Cd(e, n, {
          leading: s,
          maxWait: n,
          trailing: c
        });
      }
      function Yv(e) {
        return Ed(e, 1);
      }
      function _v(e, n) {
        return zs(ks(n), e);
      }
      function Hv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return _(e) ? e : [e];
      }
      function Pv(e) {
        return Tt(e, B);
      }
      function jv(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, B, n);
      }
      function Xv(e) {
        return Tt(e, N | B);
      }
      function Lv(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, N | B, n);
      }
      function qv(e, n) {
        return n == null || Nu(e, n, Je(n));
      }
      function Et(e, n) {
        return e === n || e !== e && n !== n;
      }
      var $v = No(ps), Kv = No(function(e, n) {
        return e >= n;
      }), Bn = bu(function() {
        return arguments;
      }()) ? bu : function(e) {
        return ve(e) && oe.call(e, "callee") && !mu.call(e, "callee");
      }, _ = R.isArray, eT = Lc ? ot(Lc) : lV;
      function $e(e) {
        return e != null && Fo(e.length) && !Lt(e);
      }
      function ge(e) {
        return ve(e) && $e(e);
      }
      function tT(e) {
        return e === !0 || e === !1 || ve(e) && He(e) == zr;
      }
      var mn = m0 || Ks, nT = qc ? ot(qc) : cV;
      function rT(e) {
        return ve(e) && e.nodeType === 1 && !ci(e);
      }
      function iT(e) {
        if (e == null)
          return !0;
        if ($e(e) && (_(e) || typeof e == "string" || typeof e.splice == "function" || mn(e) || pr(e) || Bn(e)))
          return !e.length;
        var n = Qe(e);
        if (n == kt || n == Zt)
          return !e.size;
        if (si(e))
          return !ws(e).length;
        for (var o in e)
          if (oe.call(e, o))
            return !1;
        return !0;
      }
      function oT(e, n) {
        return ii(e, n);
      }
      function aT(e, n, o) {
        o = typeof o == "function" ? o : r;
        var s = o ? o(e, n) : r;
        return s === r ? ii(e, n, r, o) : !!s;
      }
      function Gs(e) {
        if (!ve(e))
          return !1;
        var n = He(e);
        return n == Gi || n == bm || typeof e.message == "string" && typeof e.name == "string" && !ci(e);
      }
      function sT(e) {
        return typeof e == "number" && wu(e);
      }
      function Lt(e) {
        if (!pe(e))
          return !1;
        var n = He(e);
        return n == Yi || n == Mc || n == Jm || n == Sm;
      }
      function Bd(e) {
        return typeof e == "number" && e == H(e);
      }
      function Fo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _e;
      }
      function pe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ve(e) {
        return e != null && typeof e == "object";
      }
      var Dd = $c ? ot($c) : dV;
      function lT(e, n) {
        return e === n || Vs(e, n, As(n));
      }
      function cT(e, n, o) {
        return o = typeof o == "function" ? o : r, Vs(e, n, As(n), o);
      }
      function uT(e) {
        return Id(e) && e != +e;
      }
      function dT(e) {
        if (jV(e))
          throw new Y(u);
        return Eu(e);
      }
      function fT(e) {
        return e === null;
      }
      function hT(e) {
        return e == null;
      }
      function Id(e) {
        return typeof e == "number" || ve(e) && He(e) == Yr;
      }
      function ci(e) {
        if (!ve(e) || He(e) != Gt)
          return !1;
        var n = io(e);
        if (n === null)
          return !0;
        var o = oe.call(n, "constructor") && n.constructor;
        return typeof o == "function" && o instanceof o && eo.call(o) == c0;
      }
      var Ys = Kc ? ot(Kc) : fV;
      function pT(e) {
        return Bd(e) && e >= -_e && e <= _e;
      }
      var Od = eu ? ot(eu) : hV;
      function Ao(e) {
        return typeof e == "string" || !_(e) && ve(e) && He(e) == Hr;
      }
      function st(e) {
        return typeof e == "symbol" || ve(e) && He(e) == _i;
      }
      var pr = tu ? ot(tu) : pV;
      function mT(e) {
        return e === r;
      }
      function VT(e) {
        return ve(e) && Qe(e) == Pr;
      }
      function wT(e) {
        return ve(e) && He(e) == Am;
      }
      var vT = No(vs), TT = No(function(e, n) {
        return e <= n;
      });
      function Qd(e) {
        if (!e)
          return [];
        if ($e(e))
          return Ao(e) ? Jt(e) : qe(e);
        if (Lr && e[Lr])
          return q1(e[Lr]());
        var n = Qe(e), o = n == kt ? os : n == Zt ? qi : mr;
        return o(e);
      }
      function qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Rt(e), e === Ae || e === -Ae) {
          var n = e < 0 ? -1 : 1;
          return n * Qr;
        }
        return e === e ? e : 0;
      }
      function H(e) {
        var n = qt(e), o = n % 1;
        return n === n ? o ? n - o : n : 0;
      }
      function zd(e) {
        return e ? An(H(e), 0, xt) : 0;
      }
      function Rt(e) {
        if (typeof e == "number")
          return e;
        if (st(e))
          return Qi;
        if (pe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = pe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = su(e);
        var o = e1.test(e);
        return o || n1.test(e) ? W1(e.slice(2), o ? 2 : 8) : Km.test(e) ? Qi : +e;
      }
      function Gd(e) {
        return Dt(e, Ke(e));
      }
      function gT(e) {
        return e ? An(H(e), -_e, _e) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : at(e);
      }
      var UT = dr(function(e, n) {
        if (si(n) || $e(n)) {
          Dt(n, Je(n), e);
          return;
        }
        for (var o in n)
          oe.call(n, o) && ti(e, o, n[o]);
      }), Yd = dr(function(e, n) {
        Dt(n, Ke(n), e);
      }), Wo = dr(function(e, n, o, s) {
        Dt(n, Ke(n), e, s);
      }), RT = dr(function(e, n, o, s) {
        Dt(n, Je(n), e, s);
      }), NT = jt(ds);
      function MT(e, n) {
        var o = ur(e);
        return n == null ? o : Ru(o, n);
      }
      var yT = j(function(e, n) {
        e = ce(e);
        var o = -1, s = n.length, c = s > 2 ? n[2] : r;
        for (c && Pe(n[0], n[1], c) && (s = 1); ++o < s; )
          for (var p = n[o], m = Ke(p), w = -1, T = m.length; ++w < T; ) {
            var k = m[w], Z = e[k];
            (Z === r || Et(Z, sr[k]) && !oe.call(e, k)) && (e[k] = p[k]);
          }
        return e;
      }), kT = j(function(e) {
        return e.push(r, sd), it(_d, r, e);
      });
      function ZT(e, n) {
        return ru(e, O(n, 3), Bt);
      }
      function JT(e, n) {
        return ru(e, O(n, 3), hs);
      }
      function bT(e, n) {
        return e == null ? e : fs(e, O(n, 3), Ke);
      }
      function ET(e, n) {
        return e == null ? e : Zu(e, O(n, 3), Ke);
      }
      function ST(e, n) {
        return e && Bt(e, O(n, 3));
      }
      function FT(e, n) {
        return e && hs(e, O(n, 3));
      }
      function AT(e) {
        return e == null ? [] : mo(e, Je(e));
      }
      function WT(e) {
        return e == null ? [] : mo(e, Ke(e));
      }
      function _s(e, n, o) {
        var s = e == null ? r : Wn(e, n);
        return s === r ? o : s;
      }
      function CT(e, n) {
        return e != null && ud(e, n, iV);
      }
      function Hs(e, n) {
        return e != null && ud(e, n, oV);
      }
      var xT = nd(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = to.call(n)), e[n] = o;
      }, js(et)), BT = nd(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = to.call(n)), oe.call(e, n) ? e[n].push(o) : e[n] = [o];
      }, O), DT = j(ri);
      function Je(e) {
        return $e(e) ? gu(e) : ws(e);
      }
      function Ke(e) {
        return $e(e) ? gu(e, !0) : mV(e);
      }
      function IT(e, n) {
        var o = {};
        return n = O(n, 3), Bt(e, function(s, c, p) {
          Ht(o, n(s, c, p), s);
        }), o;
      }
      function OT(e, n) {
        var o = {};
        return n = O(n, 3), Bt(e, function(s, c, p) {
          Ht(o, c, n(s, c, p));
        }), o;
      }
      var QT = dr(function(e, n, o) {
        Vo(e, n, o);
      }), _d = dr(function(e, n, o, s) {
        Vo(e, n, o, s);
      }), zT = jt(function(e, n) {
        var o = {};
        if (e == null)
          return o;
        var s = !1;
        n = fe(n, function(p) {
          return p = hn(p, e), s || (s = p.length > 1), p;
        }), Dt(e, Ss(e), o), s && (o = Tt(o, N | M | B, xV));
        for (var c = n.length; c--; )
          Ns(o, n[c]);
        return o;
      });
      function GT(e, n) {
        return Hd(e, So(O(n)));
      }
      var YT = jt(function(e, n) {
        return e == null ? {} : wV(e, n);
      });
      function Hd(e, n) {
        if (e == null)
          return {};
        var o = fe(Ss(e), function(s) {
          return [s];
        });
        return n = O(n), Bu(e, o, function(s, c) {
          return n(s, c[0]);
        });
      }
      function _T(e, n, o) {
        n = hn(n, e);
        var s = -1, c = n.length;
        for (c || (c = 1, e = r); ++s < c; ) {
          var p = e == null ? r : e[It(n[s])];
          p === r && (s = c, p = o), e = Lt(p) ? p.call(e) : p;
        }
        return e;
      }
      function HT(e, n, o) {
        return e == null ? e : oi(e, n, o);
      }
      function PT(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : oi(e, n, o, s);
      }
      var Pd = od(Je), jd = od(Ke);
      function jT(e, n, o) {
        var s = _(e), c = s || mn(e) || pr(e);
        if (n = O(n, 4), o == null) {
          var p = e && e.constructor;
          c ? o = s ? new p() : [] : pe(e) ? o = Lt(p) ? ur(io(e)) : {} : o = {};
        }
        return (c ? Vt : Bt)(e, function(m, w, T) {
          return n(o, m, w, T);
        }), o;
      }
      function XT(e, n) {
        return e == null ? !0 : Ns(e, n);
      }
      function LT(e, n, o) {
        return e == null ? e : zu(e, n, ks(o));
      }
      function qT(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : zu(e, n, ks(o), s);
      }
      function mr(e) {
        return e == null ? [] : is(e, Je(e));
      }
      function $T(e) {
        return e == null ? [] : is(e, Ke(e));
      }
      function KT(e, n, o) {
        return o === r && (o = n, n = r), o !== r && (o = Rt(o), o = o === o ? o : 0), n !== r && (n = Rt(n), n = n === n ? n : 0), An(Rt(e), n, o);
      }
      function eg(e, n, o) {
        return n = qt(n), o === r ? (o = n, n = 0) : o = qt(o), e = Rt(e), aV(e, n, o);
      }
      function tg(e, n, o) {
        if (o && typeof o != "boolean" && Pe(e, n, o) && (n = o = r), o === r && (typeof n == "boolean" ? (o = n, n = r) : typeof e == "boolean" && (o = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = qt(e), n === r ? (n = e, e = 0) : n = qt(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (o || e % 1 || n % 1) {
          var c = vu();
          return Oe(e + c * (n - e + A1("1e-" + ((c + "").length - 1))), n);
        }
        return gs(e, n);
      }
      var ng = fr(function(e, n, o) {
        return n = n.toLowerCase(), e + (o ? Xd(n) : n);
      });
      function Xd(e) {
        return Ps(ie(e).toLowerCase());
      }
      function Ld(e) {
        return e = ie(e), e && e.replace(i1, H1).replace(N1, "");
      }
      function rg(e, n, o) {
        e = ie(e), n = at(n);
        var s = e.length;
        o = o === r ? s : An(H(o), 0, s);
        var c = o;
        return o -= n.length, o >= 0 && e.slice(o, c) == n;
      }
      function ig(e) {
        return e = ie(e), e && Dm.test(e) ? e.replace(Zc, P1) : e;
      }
      function og(e) {
        return e = ie(e), e && Ym.test(e) ? e.replace(za, "\\$&") : e;
      }
      var ag = fr(function(e, n, o) {
        return e + (o ? "-" : "") + n.toLowerCase();
      }), sg = fr(function(e, n, o) {
        return e + (o ? " " : "") + n.toLowerCase();
      }), lg = Ku("toLowerCase");
      function cg(e, n, o) {
        e = ie(e), n = H(n);
        var s = n ? or(e) : 0;
        if (!n || s >= n)
          return e;
        var c = (n - s) / 2;
        return Ro(lo(c), o) + e + Ro(so(c), o);
      }
      function ug(e, n, o) {
        e = ie(e), n = H(n);
        var s = n ? or(e) : 0;
        return n && s < n ? e + Ro(n - s, o) : e;
      }
      function dg(e, n, o) {
        e = ie(e), n = H(n);
        var s = n ? or(e) : 0;
        return n && s < n ? Ro(n - s, o) + e : e;
      }
      function fg(e, n, o) {
        return o || n == null ? n = 0 : n && (n = +n), T0(ie(e).replace(Ga, ""), n || 0);
      }
      function hg(e, n, o) {
        return (o ? Pe(e, n, o) : n === r) ? n = 1 : n = H(n), Us(ie(e), n);
      }
      function pg() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var mg = fr(function(e, n, o) {
        return e + (o ? "_" : "") + n.toLowerCase();
      });
      function Vg(e, n, o) {
        return o && typeof o != "number" && Pe(e, n, o) && (n = o = r), o = o === r ? xt : o >>> 0, o ? (e = ie(e), e && (typeof n == "string" || n != null && !Ys(n)) && (n = at(n), !n && ir(e)) ? pn(Jt(e), 0, o) : e.split(n, o)) : [];
      }
      var wg = fr(function(e, n, o) {
        return e + (o ? " " : "") + Ps(n);
      });
      function vg(e, n, o) {
        return e = ie(e), o = o == null ? 0 : An(H(o), 0, e.length), n = at(n), e.slice(o, o + n.length) == n;
      }
      function Tg(e, n, o) {
        var s = f.templateSettings;
        o && Pe(e, n, o) && (n = r), e = ie(e), n = Wo({}, n, s, ad);
        var c = Wo({}, n.imports, s.imports, ad), p = Je(c), m = is(c, p), w, T, k = 0, Z = n.interpolate || Hi, b = "__p += '", W = as(
          (n.escape || Hi).source + "|" + Z.source + "|" + (Z === Jc ? $m : Hi).source + "|" + (n.evaluate || Hi).source + "|$",
          "g"
        ), I = "//# sourceURL=" + (oe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++J1 + "]") + `
`;
        e.replace(W, function(z, $, te, lt, je, ct) {
          return te || (te = lt), b += e.slice(k, ct).replace(o1, j1), $ && (w = !0, b += `' +
__e(` + $ + `) +
'`), je && (T = !0, b += `';
` + je + `;
__p += '`), te && (b += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), k = ct + z.length, z;
        }), b += `';
`;
        var Q = oe.call(n, "variable") && n.variable;
        if (!Q)
          b = `with (obj) {
` + b + `
}
`;
        else if (Lm.test(Q))
          throw new Y(h);
        b = (T ? b.replace(Wm, "") : b).replace(Cm, "$1").replace(xm, "$1;"), b = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + b + `return __p
}`;
        var P = $d(function() {
          return ne(p, I + "return " + b).apply(r, m);
        });
        if (P.source = b, Gs(P))
          throw P;
        return P;
      }
      function gg(e) {
        return ie(e).toLowerCase();
      }
      function Ug(e) {
        return ie(e).toUpperCase();
      }
      function Rg(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return su(e);
        if (!e || !(n = at(n)))
          return e;
        var s = Jt(e), c = Jt(n), p = lu(s, c), m = cu(s, c) + 1;
        return pn(s, p, m).join("");
      }
      function Ng(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return e.slice(0, du(e) + 1);
        if (!e || !(n = at(n)))
          return e;
        var s = Jt(e), c = cu(s, Jt(n)) + 1;
        return pn(s, 0, c).join("");
      }
      function Mg(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return e.replace(Ga, "");
        if (!e || !(n = at(n)))
          return e;
        var s = Jt(e), c = lu(s, Jt(n));
        return pn(s, c).join("");
      }
      function yg(e, n) {
        var o = Le, s = Ve;
        if (pe(n)) {
          var c = "separator" in n ? n.separator : c;
          o = "length" in n ? H(n.length) : o, s = "omission" in n ? at(n.omission) : s;
        }
        e = ie(e);
        var p = e.length;
        if (ir(e)) {
          var m = Jt(e);
          p = m.length;
        }
        if (o >= p)
          return e;
        var w = o - or(s);
        if (w < 1)
          return s;
        var T = m ? pn(m, 0, w).join("") : e.slice(0, w);
        if (c === r)
          return T + s;
        if (m && (w += T.length - w), Ys(c)) {
          if (e.slice(w).search(c)) {
            var k, Z = T;
            for (c.global || (c = as(c.source, ie(bc.exec(c)) + "g")), c.lastIndex = 0; k = c.exec(Z); )
              var b = k.index;
            T = T.slice(0, b === r ? w : b);
          }
        } else if (e.indexOf(at(c), w) != w) {
          var W = T.lastIndexOf(c);
          W > -1 && (T = T.slice(0, W));
        }
        return T + s;
      }
      function kg(e) {
        return e = ie(e), e && Bm.test(e) ? e.replace(kc, t0) : e;
      }
      var Zg = fr(function(e, n, o) {
        return e + (o ? " " : "") + n.toUpperCase();
      }), Ps = Ku("toUpperCase");
      function qd(e, n, o) {
        return e = ie(e), n = o ? r : n, n === r ? L1(e) ? i0(e) : Q1(e) : e.match(n) || [];
      }
      var $d = j(function(e, n) {
        try {
          return it(e, r, n);
        } catch (o) {
          return Gs(o) ? o : new Y(o);
        }
      }), Jg = jt(function(e, n) {
        return Vt(n, function(o) {
          o = It(o), Ht(e, o, Qs(e[o], e));
        }), e;
      });
      function bg(e) {
        var n = e == null ? 0 : e.length, o = O();
        return e = n ? fe(e, function(s) {
          if (typeof s[1] != "function")
            throw new wt(d);
          return [o(s[0]), s[1]];
        }) : [], j(function(s) {
          for (var c = -1; ++c < n; ) {
            var p = e[c];
            if (it(p[0], this, s))
              return it(p[1], this, s);
          }
        });
      }
      function Eg(e) {
        return tV(Tt(e, N));
      }
      function js(e) {
        return function() {
          return e;
        };
      }
      function Sg(e, n) {
        return e == null || e !== e ? n : e;
      }
      var Fg = td(), Ag = td(!0);
      function et(e) {
        return e;
      }
      function Xs(e) {
        return Su(typeof e == "function" ? e : Tt(e, N));
      }
      function Wg(e) {
        return Au(Tt(e, N));
      }
      function Cg(e, n) {
        return Wu(e, Tt(n, N));
      }
      var xg = j(function(e, n) {
        return function(o) {
          return ri(o, e, n);
        };
      }), Bg = j(function(e, n) {
        return function(o) {
          return ri(e, o, n);
        };
      });
      function Ls(e, n, o) {
        var s = Je(n), c = mo(n, s);
        o == null && !(pe(n) && (c.length || !s.length)) && (o = n, n = e, e = this, c = mo(n, Je(n)));
        var p = !(pe(o) && "chain" in o) || !!o.chain, m = Lt(e);
        return Vt(c, function(w) {
          var T = n[w];
          e[w] = T, m && (e.prototype[w] = function() {
            var k = this.__chain__;
            if (p || k) {
              var Z = e(this.__wrapped__), b = Z.__actions__ = qe(this.__actions__);
              return b.push({ func: T, args: arguments, thisArg: e }), Z.__chain__ = k, Z;
            }
            return T.apply(e, ln([this.value()], arguments));
          });
        }), e;
      }
      function Dg() {
        return We._ === this && (We._ = u0), this;
      }
      function qs() {
      }
      function Ig(e) {
        return e = H(e), j(function(n) {
          return Cu(n, e);
        });
      }
      var Og = Js(fe), Qg = Js(nu), zg = Js(Ka);
      function Kd(e) {
        return Cs(e) ? es(It(e)) : vV(e);
      }
      function Gg(e) {
        return function(n) {
          return e == null ? r : Wn(e, n);
        };
      }
      var Yg = rd(), _g = rd(!0);
      function $s() {
        return [];
      }
      function Ks() {
        return !1;
      }
      function Hg() {
        return {};
      }
      function Pg() {
        return "";
      }
      function jg() {
        return !0;
      }
      function Xg(e, n) {
        if (e = H(e), e < 1 || e > _e)
          return [];
        var o = xt, s = Oe(e, xt);
        n = O(n), e -= xt;
        for (var c = rs(s, n); ++o < e; )
          n(o);
        return c;
      }
      function Lg(e) {
        return _(e) ? fe(e, It) : st(e) ? [e] : qe(Td(ie(e)));
      }
      function qg(e) {
        var n = ++l0;
        return ie(e) + n;
      }
      var $g = Uo(function(e, n) {
        return e + n;
      }, 0), Kg = bs("ceil"), eU = Uo(function(e, n) {
        return e / n;
      }, 1), tU = bs("floor");
      function nU(e) {
        return e && e.length ? po(e, et, ps) : r;
      }
      function rU(e, n) {
        return e && e.length ? po(e, O(n, 2), ps) : r;
      }
      function iU(e) {
        return ou(e, et);
      }
      function oU(e, n) {
        return ou(e, O(n, 2));
      }
      function aU(e) {
        return e && e.length ? po(e, et, vs) : r;
      }
      function sU(e, n) {
        return e && e.length ? po(e, O(n, 2), vs) : r;
      }
      var lU = Uo(function(e, n) {
        return e * n;
      }, 1), cU = bs("round"), uU = Uo(function(e, n) {
        return e - n;
      }, 0);
      function dU(e) {
        return e && e.length ? ns(e, et) : 0;
      }
      function fU(e, n) {
        return e && e.length ? ns(e, O(n, 2)) : 0;
      }
      return f.after = Wv, f.ary = Ed, f.assign = UT, f.assignIn = Yd, f.assignInWith = Wo, f.assignWith = RT, f.at = NT, f.before = Sd, f.bind = Qs, f.bindAll = Jg, f.bindKey = Fd, f.castArray = Hv, f.chain = Zd, f.chunk = tw, f.compact = nw, f.concat = rw, f.cond = bg, f.conforms = Eg, f.constant = js, f.countBy = dv, f.create = MT, f.curry = Ad, f.curryRight = Wd, f.debounce = Cd, f.defaults = yT, f.defaultsDeep = kT, f.defer = Cv, f.delay = xv, f.difference = iw, f.differenceBy = ow, f.differenceWith = aw, f.drop = sw, f.dropRight = lw, f.dropRightWhile = cw, f.dropWhile = uw, f.fill = dw, f.filter = hv, f.flatMap = Vv, f.flatMapDeep = wv, f.flatMapDepth = vv, f.flatten = Nd, f.flattenDeep = fw, f.flattenDepth = hw, f.flip = Bv, f.flow = Fg, f.flowRight = Ag, f.fromPairs = pw, f.functions = AT, f.functionsIn = WT, f.groupBy = Tv, f.initial = Vw, f.intersection = ww, f.intersectionBy = vw, f.intersectionWith = Tw, f.invert = xT, f.invertBy = BT, f.invokeMap = Uv, f.iteratee = Xs, f.keyBy = Rv, f.keys = Je, f.keysIn = Ke, f.map = Jo, f.mapKeys = IT, f.mapValues = OT, f.matches = Wg, f.matchesProperty = Cg, f.memoize = Eo, f.merge = QT, f.mergeWith = _d, f.method = xg, f.methodOf = Bg, f.mixin = Ls, f.negate = So, f.nthArg = Ig, f.omit = zT, f.omitBy = GT, f.once = Dv, f.orderBy = Nv, f.over = Og, f.overArgs = Iv, f.overEvery = Qg, f.overSome = zg, f.partial = zs, f.partialRight = xd, f.partition = Mv, f.pick = YT, f.pickBy = Hd, f.property = Kd, f.propertyOf = Gg, f.pull = Nw, f.pullAll = yd, f.pullAllBy = Mw, f.pullAllWith = yw, f.pullAt = kw, f.range = Yg, f.rangeRight = _g, f.rearg = Ov, f.reject = Zv, f.remove = Zw, f.rest = Qv, f.reverse = Is, f.sampleSize = bv, f.set = HT, f.setWith = PT, f.shuffle = Ev, f.slice = Jw, f.sortBy = Av, f.sortedUniq = Cw, f.sortedUniqBy = xw, f.split = Vg, f.spread = zv, f.tail = Bw, f.take = Dw, f.takeRight = Iw, f.takeRightWhile = Ow, f.takeWhile = Qw, f.tap = nv, f.throttle = Gv, f.thru = Zo, f.toArray = Qd, f.toPairs = Pd, f.toPairsIn = jd, f.toPath = Lg, f.toPlainObject = Gd, f.transform = jT, f.unary = Yv, f.union = zw, f.unionBy = Gw, f.unionWith = Yw, f.uniq = _w, f.uniqBy = Hw, f.uniqWith = Pw, f.unset = XT, f.unzip = Os, f.unzipWith = kd, f.update = LT, f.updateWith = qT, f.values = mr, f.valuesIn = $T, f.without = jw, f.words = qd, f.wrap = _v, f.xor = Xw, f.xorBy = Lw, f.xorWith = qw, f.zip = $w, f.zipObject = Kw, f.zipObjectDeep = ev, f.zipWith = tv, f.entries = Pd, f.entriesIn = jd, f.extend = Yd, f.extendWith = Wo, Ls(f, f), f.add = $g, f.attempt = $d, f.camelCase = ng, f.capitalize = Xd, f.ceil = Kg, f.clamp = KT, f.clone = Pv, f.cloneDeep = Xv, f.cloneDeepWith = Lv, f.cloneWith = jv, f.conformsTo = qv, f.deburr = Ld, f.defaultTo = Sg, f.divide = eU, f.endsWith = rg, f.eq = Et, f.escape = ig, f.escapeRegExp = og, f.every = fv, f.find = pv, f.findIndex = Ud, f.findKey = ZT, f.findLast = mv, f.findLastIndex = Rd, f.findLastKey = JT, f.floor = tU, f.forEach = Jd, f.forEachRight = bd, f.forIn = bT, f.forInRight = ET, f.forOwn = ST, f.forOwnRight = FT, f.get = _s, f.gt = $v, f.gte = Kv, f.has = CT, f.hasIn = Hs, f.head = Md, f.identity = et, f.includes = gv, f.indexOf = mw, f.inRange = eg, f.invoke = DT, f.isArguments = Bn, f.isArray = _, f.isArrayBuffer = eT, f.isArrayLike = $e, f.isArrayLikeObject = ge, f.isBoolean = tT, f.isBuffer = mn, f.isDate = nT, f.isElement = rT, f.isEmpty = iT, f.isEqual = oT, f.isEqualWith = aT, f.isError = Gs, f.isFinite = sT, f.isFunction = Lt, f.isInteger = Bd, f.isLength = Fo, f.isMap = Dd, f.isMatch = lT, f.isMatchWith = cT, f.isNaN = uT, f.isNative = dT, f.isNil = hT, f.isNull = fT, f.isNumber = Id, f.isObject = pe, f.isObjectLike = ve, f.isPlainObject = ci, f.isRegExp = Ys, f.isSafeInteger = pT, f.isSet = Od, f.isString = Ao, f.isSymbol = st, f.isTypedArray = pr, f.isUndefined = mT, f.isWeakMap = VT, f.isWeakSet = wT, f.join = gw, f.kebabCase = ag, f.last = Ut, f.lastIndexOf = Uw, f.lowerCase = sg, f.lowerFirst = lg, f.lt = vT, f.lte = TT, f.max = nU, f.maxBy = rU, f.mean = iU, f.meanBy = oU, f.min = aU, f.minBy = sU, f.stubArray = $s, f.stubFalse = Ks, f.stubObject = Hg, f.stubString = Pg, f.stubTrue = jg, f.multiply = lU, f.nth = Rw, f.noConflict = Dg, f.noop = qs, f.now = bo, f.pad = cg, f.padEnd = ug, f.padStart = dg, f.parseInt = fg, f.random = tg, f.reduce = yv, f.reduceRight = kv, f.repeat = hg, f.replace = pg, f.result = _T, f.round = cU, f.runInContext = v, f.sample = Jv, f.size = Sv, f.snakeCase = mg, f.some = Fv, f.sortedIndex = bw, f.sortedIndexBy = Ew, f.sortedIndexOf = Sw, f.sortedLastIndex = Fw, f.sortedLastIndexBy = Aw, f.sortedLastIndexOf = Ww, f.startCase = wg, f.startsWith = vg, f.subtract = uU, f.sum = dU, f.sumBy = fU, f.template = Tg, f.times = Xg, f.toFinite = qt, f.toInteger = H, f.toLength = zd, f.toLower = gg, f.toNumber = Rt, f.toSafeInteger = gT, f.toString = ie, f.toUpper = Ug, f.trim = Rg, f.trimEnd = Ng, f.trimStart = Mg, f.truncate = yg, f.unescape = kg, f.uniqueId = qg, f.upperCase = Zg, f.upperFirst = Ps, f.each = Jd, f.eachRight = bd, f.first = Md, Ls(f, function() {
        var e = {};
        return Bt(f, function(n, o) {
          oe.call(f.prototype, o) || (e[o] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = a, Vt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), Vt(["drop", "take"], function(e, n) {
        K.prototype[e] = function(o) {
          o = o === r ? 1 : ke(H(o), 0);
          var s = this.__filtered__ && !n ? new K(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Oe(o, s.__takeCount__) : s.__views__.push({
            size: Oe(o, xt),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, K.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Vt(["filter", "map", "takeWhile"], function(e, n) {
        var o = n + 1, s = o == Ne || o == Fe;
        K.prototype[e] = function(c) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: O(c, 3),
            type: o
          }), p.__filtered__ = p.__filtered__ || s, p;
        };
      }), Vt(["head", "last"], function(e, n) {
        var o = "take" + (n ? "Right" : "");
        K.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Vt(["initial", "tail"], function(e, n) {
        var o = "drop" + (n ? "" : "Right");
        K.prototype[e] = function() {
          return this.__filtered__ ? new K(this) : this[o](1);
        };
      }), K.prototype.compact = function() {
        return this.filter(et);
      }, K.prototype.find = function(e) {
        return this.filter(e).head();
      }, K.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, K.prototype.invokeMap = j(function(e, n) {
        return typeof e == "function" ? new K(this) : this.map(function(o) {
          return ri(o, e, n);
        });
      }), K.prototype.reject = function(e) {
        return this.filter(So(O(e)));
      }, K.prototype.slice = function(e, n) {
        e = H(e);
        var o = this;
        return o.__filtered__ && (e > 0 || n < 0) ? new K(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== r && (n = H(n), o = n < 0 ? o.dropRight(-n) : o.take(n - e)), o);
      }, K.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, K.prototype.toArray = function() {
        return this.take(xt);
      }, Bt(K.prototype, function(e, n) {
        var o = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), c = f[s ? "take" + (n == "last" ? "Right" : "") : n], p = s || /^find/.test(n);
        !c || (f.prototype[n] = function() {
          var m = this.__wrapped__, w = s ? [1] : arguments, T = m instanceof K, k = w[0], Z = T || _(m), b = function($) {
            var te = c.apply(f, ln([$], w));
            return s && W ? te[0] : te;
          };
          Z && o && typeof k == "function" && k.length != 1 && (T = Z = !1);
          var W = this.__chain__, I = !!this.__actions__.length, Q = p && !W, P = T && !I;
          if (!p && Z) {
            m = P ? m : new K(this);
            var z = e.apply(m, w);
            return z.__actions__.push({ func: Zo, args: [b], thisArg: r }), new vt(z, W);
          }
          return Q && P ? e.apply(this, w) : (z = this.thru(b), Q ? s ? z.value()[0] : z.value() : z);
        });
      }), Vt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = $i[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var c = arguments;
          if (s && !this.__chain__) {
            var p = this.value();
            return n.apply(_(p) ? p : [], c);
          }
          return this[o](function(m) {
            return n.apply(_(m) ? m : [], c);
          });
        };
      }), Bt(K.prototype, function(e, n) {
        var o = f[n];
        if (o) {
          var s = o.name + "";
          oe.call(cr, s) || (cr[s] = []), cr[s].push({ name: n, func: o });
        }
      }), cr[go(r, F).name] = [{
        name: "wrapper",
        func: r
      }], K.prototype.clone = k0, K.prototype.reverse = Z0, K.prototype.value = J0, f.prototype.at = rv, f.prototype.chain = iv, f.prototype.commit = ov, f.prototype.next = av, f.prototype.plant = lv, f.prototype.reverse = cv, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = uv, f.prototype.first = f.prototype.head, Lr && (f.prototype[Lr] = sv), f;
    }, ar = o0();
    bn ? ((bn.exports = ar)._ = ar, Xa._ = ar) : We._ = ar;
  }).call(ui);
})(me, me.exports);
const FR = "/alarms?_s=", AR = async (t, i) => {
  try {
    return (await kn.put(
      `/alarms/${t}?ack=${i}`,
      {
        body: `alarm=${t}`
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )).status === 204;
  } catch {
    return !1;
  }
}, WR = async (t, i) => {
  try {
    if ((await kn.put(
      `/alarms/${t}?${i}=true`,
      {
        body: `alarm=${t}`
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )).status === 204)
      return !0;
  } catch {
    return !1;
  }
}, CR = async (t) => {
  try {
    const i = t.join(",alarm.id==");
    return (await Dr.put(
      `alarms?_s=alarm.id==${i}&clear=true`,
      null,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )).status == 204;
  } catch {
    return !1;
  }
}, xR = async () => {
  try {
    const t = `${FR}isSituation==true&limit=0`, i = await Dr(t);
    return i.status === 200 ? i.data : !1;
  } catch {
    return !1;
  }
}, BR = async () => {
  try {
    const t = await Dr("/alarms?limit=0");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, DR = async (t) => {
  try {
    const i = t.join(",id=="), r = await Dr(`/alarms?_s=id==${i}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Rp = async (t) => {
  try {
    const i = await Dr(`/alarms/${t}`);
    return i.status === 200 ? i.data : null;
  } catch {
    return null;
  }
}, IR = async () => {
  try {
    const t = await Dr("nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => me.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, ft = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
}, OR = "/alec", QR = "/alec/engine/configuration", Np = "/alec/agreement/configuration", zR = "/alec/situation/statusList", Mp = async (t) => {
  try {
    return (await kn.post(`${Np}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, GR = async () => {
  try {
    const t = await kn.get(`${Np}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, YR = async (t, i) => {
  try {
    return (await kn.post(QR, {
      distanceMeasureName: i ? ft.HELLINGER_OPTION : ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, yp = async (t, i) => {
  try {
    return (await kn.post(`${OR}/situation/${i}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, _R = async () => {
  try {
    const t = await kn.get(zR);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, HR = window.Pinia.defineStore, Ci = HR("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    nodes: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await IR();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await xR(), i = await BR();
      let r = [];
      i && (r = me.exports.mapKeys(i, (l) => l.id));
      const a = await _R();
      if (t) {
        const l = t.alarm.map((h) => {
          const V = h.relatedAlarms.map((U) => r[U.id]), g = a.filter(
            (U) => parseInt(U.id) === h.id
          );
          return h.alarms = V, h.status = g && g[0] ? g[0].status : "CREATED", h;
        }), u = me.exports.groupBy(l, "status"), d = [
          ...u.CREATED || [],
          ...u.ACCEPTED || [],
          ...u.REJECTED || []
        ];
        this.situations = d;
      }
    },
    async getSituation(t) {
      const i = await Rp(t);
      if (i) {
        const r = i.relatedAlarms.map((d) => d.id), a = await DR(r);
        i.alarms = a;
        const l = me.exports.cloneDeep(this.situations), u = this.situations.findIndex((d) => d.id == t);
        l[u] = i, this.situations = l;
      }
    }
  }
}), PR = window.Vue.openBlock, jR = window.Vue.createElementBlock, XR = window.Vue.createElementVNode;
var LR = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const qR = {}, $R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KR = /* @__PURE__ */ XR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), eN = [
  KR
];
function tN(t, i) {
  return PR(), jR("svg", $R, eN);
}
var kp = /* @__PURE__ */ LR(qR, [["render", tN]]);
var nN = Object.defineProperty, yf = Object.getOwnPropertySymbols, rN = Object.prototype.hasOwnProperty, iN = Object.prototype.propertyIsEnumerable, kf = (t, i, r) => i in t ? nN(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Zf = (t, i) => {
  for (var r in i || (i = {}))
    rN.call(i, r) && kf(t, r, i[r]);
  if (yf)
    for (var r of yf(i))
      iN.call(i, r) && kf(t, r, i[r]);
  return t;
};
const oN = window.Vue.defineComponent, aN = window.Vue.toRaw, ml = window.Vue.h;
var sN = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const lN = {
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
}, cN = oN({
  props: lN,
  render() {
    const t = this.$attrs, i = t.class ? t.class.split(" ").reduce((l, u) => (l[u] = !0, l), {}) : {}, r = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = aN(this.icon);
    return this.$slots.default ? ml("span", { class: "feather-icon-container" }, [
      ml(this.$slots.default()[0], Zf({
        class: i
      }, r))
    ]) : ml(a, Zf({
      class: i
    }, r));
  }
});
var he = /* @__PURE__ */ sN(cN, [["__scopeId", "data-v-52cbf270"]]);
const uN = window.Vue.openBlock, dN = window.Vue.createElementBlock, fN = window.Vue.createElementVNode;
var hN = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const pN = {}, mN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VN = /* @__PURE__ */ fN("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), wN = [
  VN
];
function vN(t, i) {
  return uN(), dN("svg", mN, wN);
}
var Zp = /* @__PURE__ */ hN(pN, [["render", vN]]);
const TN = window.Vue.defineComponent, Kt = window.Vue.unref, Jf = window.Vue.normalizeClass, di = window.Vue.createElementVNode, Vl = window.Vue.toDisplayString, bf = window.Vue.createVNode, vr = window.Vue.openBlock, Tr = window.Vue.createElementBlock, wl = window.Vue.createCommentVNode, gN = window.Vue.createTextVNode, UN = window.Vue.renderList, RN = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NN = { class: "content" }, MN = { class: "title-row" }, yN = { class: "title" }, kN = {
  key: 0,
  class: "accepted"
}, ZN = {
  key: 1,
  class: "rejected"
}, JN = {
  key: 0,
  class: "count-info"
}, bN = /* @__PURE__ */ gN(" Alarms: "), EN = { class: "info-title" }, SN = /* @__PURE__ */ TN({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(t, { emit: i }) {
    const r = t, a = ft.ACCEPTED, l = ft.REJECTED, u = () => {
      var d;
      i("situation-selected", (d = r.situationInfo) == null ? void 0 : d.id);
    };
    return (d, h) => {
      var V, g, U;
      return vr(), Tr("div", {
        onClick: u,
        class: Jf(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == Kt(l)
        }])
      }, [
        di("div", {
          class: Jf(["severity-line", [`${(g = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        di("div", NN, [
          di("div", MN, [
            di("div", yN, "Situation " + Vl((U = r.situationInfo) == null ? void 0 : U.id), 1),
            r.situationInfo.status == Kt(a) ? (vr(), Tr("div", kN, [
              bf(Kt(he), {
                icon: Kt(kp),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : wl("", !0),
            r.situationInfo.status == Kt(l) ? (vr(), Tr("div", ZN, [
              bf(Kt(he), {
                icon: Kt(Zp),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : wl("", !0)
          ]),
          r.situationInfo.alarms ? (vr(), Tr("div", JN, [
            bN,
            di("span", EN, Vl(r.situationInfo.relatedAlarms.length), 1)
          ])) : wl("", !0),
          (vr(!0), Tr(RN, null, UN(Kt(me.exports.keys)(Kt(me.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (N) => (vr(), Tr("div", {
            class: "info-title",
            key: N
          }, " - " + Vl(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const FN = /* @__PURE__ */ Se(SN, [["__scopeId", "data-v-39cf7213"]]);
const Co = window.Vue.ref, AN = window.Vue.inject, WN = window.Vue.computed, CN = window.Vue.onMounted, xN = {
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
}, BN = (t) => {
  const i = Co(!1), r = Co(), a = Co(t.controls), l = Co(t.id), u = () => {
    r.value && r.value.focus();
  }, d = AN("registerTab");
  CN(() => {
    if (r.value && d) {
      const V = r.value.parentElement, g = V && V.parentElement ? V.parentElement : void 0, U = Array.from(g ? g.children : []).filter((M) => M.querySelectorAll("[role=tab]").length), N = V ? U.indexOf(V) : -1;
      d({
        el: r.value,
        focus: u,
        disabled: t.disabled,
        selected: i,
        id: l,
        controls: a,
        index: N
      });
    }
  });
  const h = WN(() => ({
    role: "tab",
    ref: "tab",
    tabindex: i.value ? 0 : -1,
    id: l.value,
    "aria-selected": i.value,
    "aria-controls": a.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: i,
    attrs: h,
    tab: r
  };
};
const Ji = function(t, i) {
  return window ? window.setTimeout(t, i) : setTimeout(t, i);
}, bi = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var DN = Object.defineProperty, IN = Object.defineProperties, ON = Object.getOwnPropertyDescriptors, Ef = Object.getOwnPropertySymbols, QN = Object.prototype.hasOwnProperty, zN = Object.prototype.propertyIsEnumerable, Sf = (t, i, r) => i in t ? DN(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Ff = (t, i) => {
  for (var r in i || (i = {}))
    QN.call(i, r) && Sf(t, r, i[r]);
  if (Ef)
    for (var r of Ef(i))
      zN.call(i, r) && Sf(t, r, i[r]);
  return t;
}, GN = (t, i) => IN(t, ON(i));
const YN = window.Vue.defineComponent, _N = window.Vue.h;
var HN = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const PN = {
  center: {
    type: Boolean,
    default: !1
  }
}, jN = YN({
  props: PN,
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
        const { clientWidth: i, clientHeight: r } = this.parent, a = Math.round(Math.max(i, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), d = t.pageY, h = t.pageX;
          l = {
            top: `${d - u.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${h - u.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = GN(Ff({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, bi(this.failsafe), this.failsafe = Ji(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return _N("div", {
        style: Ff({}, this.styles),
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
var Xn = /* @__PURE__ */ HN(jN, [["__scopeId", "data-v-18e2a5db"]]);
const se = function(t) {
  t = t || "feather";
  const i = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), i].join("-");
}, q = {
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
}, Af = window.Vue.ref, XN = window.Vue.toRef, LN = window.Vue.watch, Wf = window.Vue.provide, qN = {
  prop: "modelValue",
  event: "update:modelValue"
}, $N = {
  "update:modelValue": (t) => !0
}, KN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, eM = (t, i) => {
  const r = XN(t, "modelValue"), a = Af(t.modelValue), l = Af([]);
  LN(r, (A) => {
    V(A);
  });
  const u = (A) => {
    A.preventDefault(), l.value.some((S, E) => S.tab && S.tab.el.contains(A.target) ? (h(E), V(E), !0) : !1);
  }, d = (A) => {
    if (((L) => L.shiftKey || L.ctrlKey || L.metaKey || L.altKey)(A))
      return;
    const E = A.keyCode, F = (L) => {
      L.stopPropagation(), L.preventDefault();
    }, D = l.value.filter((L) => L.tab && !L.tab.disabled), C = l.value.findIndex((L) => L.tab && L.tab.el.contains(document.activeElement));
    let G = C !== -1 ? C : a.value;
    const J = [q.RIGHT], X = [q.LEFT], ee = [q.ENTER, q.SPACE];
    t.vertical && (J.push(q.DOWN), X.push(q.UP)), J.indexOf(E) > -1 ? (G++, G >= D.length && (G = 0), F(A), h(l.value.indexOf(D[G]))) : X.indexOf(E) > -1 && (G--, G < 0 && (G = D.length - 1), F(A), h(l.value.indexOf(D[G]))), ee.indexOf(E) > -1 && V(G);
  }, h = (A) => {
    l.value.forEach(function(S, E) {
      A === E && S.tab && S.tab.focus();
    });
  }, V = (A) => {
    const S = l.value[A];
    !S || S.tab && S.tab.disabled || (l.value.forEach((E, F) => {
      E.tab && (E.tab.selected = A === F), E.panel && (E.panel.selected = A === F);
    }), a.value = A, i.emit("update:modelValue", A));
  };
  Wf("registerTab", (A) => {
    const S = A.index;
    S > -1 && (l.value[S] = { ...l.value[S], tab: A }, l.value = [...l.value], N());
  }), Wf("registerPanel", (A) => {
    const S = A.index;
    S > -1 && (l.value[S] = {
      ...l.value[S],
      panel: A
    }, l.value = [...l.value], N());
  });
  const N = () => {
    l.value.forEach(({ tab: A, panel: S }, E) => {
      if (S && A) {
        const F = A.id || se("tab"), D = A.controls || se("panel");
        A.controls = D, A.id = F, S.tab = F, S.id = D;
      }
      E === a.value && (S && (S.selected = !0), A && (A.selected = !0));
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
    pairs: l
  };
}, xo = window.Vue.ref, tM = window.Vue.inject, nM = window.Vue.computed, rM = window.Vue.onMounted, iM = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, oM = (t) => {
  const i = xo(!1), r = xo(), a = xo(t.tab), l = xo(t.id), u = tM("registerPanel");
  rM(() => {
    if (u) {
      const h = r.value, V = h && h.parentElement ? h.parentElement : void 0, g = h ? Array.from(V ? V.children : []).indexOf(h) : -1;
      u({
        selected: i,
        id: l,
        tab: a,
        el: r.value,
        index: g
      });
    }
  });
  const d = nM(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": i.value,
    "aria-labelledby": a.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: i,
    attrs: d,
    panel: r
  };
}, sc = window.Vue.defineComponent, aM = window.Vue.resolveComponent, lc = window.Vue.openBlock, cc = window.Vue.createElementBlock, Ui = window.Vue.createElementVNode, Jp = window.Vue.mergeProps, ca = window.Vue.renderSlot, sM = window.Vue.createVNode, lM = window.Vue.normalizeStyle, cM = window.Vue.toHandlers, uM = window.Vue.withDirectives, dM = window.Vue.normalizeProps, fM = window.Vue.guardReactiveProps, hM = window.Vue.vShow;
var uc = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const pM = xN, mM = sc({
  props: pM,
  setup(t) {
    return BN(t);
  },
  components: {
    FeatherRipple: Xn
  }
}), VM = { role: "presentation" }, wM = { class: "tab-text" };
function vM(t, i, r, a, l, u) {
  const d = aM("FeatherRipple");
  return lc(), cc("li", VM, [
    Ui("button", Jp(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      Ui("span", wM, [
        ca(t.$slots, "default", {}, void 0, !0)
      ]),
      sM(d)
    ], 16)
  ]);
}
var Cf = /* @__PURE__ */ uc(mM, [["render", vM], ["__scopeId", "data-v-e6bb52b6"]]);
const TM = KN, gM = $N, UM = sc({
  model: qN,
  emits: gM,
  props: TM,
  setup(t, i) {
    return eM(t, i);
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
        t && t.length && this.ro && t.forEach((i) => {
          i.tab && this.ro.observe(i.tab.el);
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
        const t = this.$el.getBoundingClientRect(), i = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = i.left - t.left, a = i.height - 2;
        this.width = `${i.width}px`, this.transform = `translateX(${r}px) translateY(${a}px)`;
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
}), RM = { class: "feather-tab-container" }, NM = { class: "tab-panels" };
function MM(t, i, r, a, l, u) {
  return lc(), cc("div", RM, [
    Ui("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: lM({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    Ui("ul", Jp(t.attrs, cM(t.listeners)), [
      ca(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ui("div", NM, [
      ca(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var yM = /* @__PURE__ */ uc(UM, [["render", MM], ["__scopeId", "data-v-27adffb9"]]);
const kM = iM, ZM = sc({
  props: kM,
  setup(t) {
    return oM(t);
  }
});
function JM(t, i, r, a, l, u) {
  return uM((lc(), cc("div", dM(fM(t.attrs)), [
    ca(t.$slots, "default")
  ], 16)), [
    [hM, t.selected]
  ]);
}
var xf = /* @__PURE__ */ uc(ZM, [["render", JM]]);
const bM = window.Vue.defineComponent, EM = window.Vue.toDisplayString, SM = window.Vue.normalizeClass, FM = window.Vue.openBlock, AM = window.Vue.createElementBlock, WM = window.Vue.createCommentVNode, CM = /* @__PURE__ */ bM({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (FM(), AM("span", {
      key: 0,
      class: SM(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, EM(i.severity), 3)) : WM("", !0);
  }
});
const bp = /* @__PURE__ */ Se(CM, [["__scopeId", "data-v-83c2cdce"]]), xM = window.Vue.defineComponent, Bf = window.Vue.toDisplayString, Df = window.Vue.createElementVNode, BM = window.Vue.openBlock, DM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const IM = { class: "box" }, OM = { class: "label" }, QM = { class: "date" }, zM = /* @__PURE__ */ xM({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (BM(), DM("div", IM, [
      Df("div", OM, Bf(i.label), 1),
      Df("div", QM, Bf(i.info), 1)
    ]));
  }
});
const vl = /* @__PURE__ */ Se(zM, [["__scopeId", "data-v-b4afa751"]]), GM = window.Vue.defineComponent, YM = window.Vue.unref, _M = window.Vue.renderList, HM = window.Vue.Fragment, Tl = window.Vue.openBlock, gl = window.Vue.createElementBlock, PM = window.Vue.toDisplayString, jM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XM = { class: "alarms-list" }, LM = /* @__PURE__ */ GM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (Tl(), gl("div", XM, [
      (Tl(!0), gl(HM, null, _M(YM(me.exports.groupBy)(i == null ? void 0 : i.alarms, "severity"), (l, u) => (Tl(), gl("div", {
        class: jM(["alarm-count", [`${u.toString().toLowerCase()}-color`, i.size]]),
        key: u
      }, PM(l.length), 3))), 128))
    ]));
  }
});
const qM = /* @__PURE__ */ Se(LM, [["__scopeId", "data-v-52d63440"]]);
const $M = window.Vue.computed, Ep = (t, i) => {
  const r = {};
  return Object.keys(i).forEach((a) => {
    r[`${a}Label`] = $M(() => t.value[a] ? t.value[a] : i[a]);
  }), r;
}, KM = window.Vue.openBlock, ey = window.Vue.createElementBlock, ty = window.Vue.createElementVNode;
var ny = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ry = {}, iy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oy = /* @__PURE__ */ ty("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), ay = [
  oy
];
function sy(t, i) {
  return KM(), ey("svg", iy, ay);
}
var dc = /* @__PURE__ */ ny(ry, [["render", sy]]);
const If = window.Vue.computed, ly = (t, i, r) => {
  const a = If(() => i.value.filter((u) => !u.disabled)), l = If(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const cy = window.Vue.openBlock, uy = window.Vue.createElementBlock, fc = window.Vue.createElementVNode;
var dy = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const fy = {}, hy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, py = /* @__PURE__ */ fc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), my = /* @__PURE__ */ fc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Vy = /* @__PURE__ */ fc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), wy = [
  py,
  my,
  Vy
];
function vy(t, i) {
  return cy(), uy("svg", hy, wy);
}
var Ty = /* @__PURE__ */ dy(fy, [["render", vy]]), gy = Object.defineProperty, Uy = Object.defineProperties, Ry = Object.getOwnPropertyDescriptors, Of = Object.getOwnPropertySymbols, Ny = Object.prototype.hasOwnProperty, My = Object.prototype.propertyIsEnumerable, Qf = (t, i, r) => i in t ? gy(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Sp = (t, i) => {
  for (var r in i || (i = {}))
    Ny.call(i, r) && Qf(t, r, i[r]);
  if (Of)
    for (var r of Of(i))
      My.call(i, r) && Qf(t, r, i[r]);
  return t;
}, Fp = (t, i) => Uy(t, Ry(i));
const Ir = window.Vue.defineComponent, Ei = window.Vue.resolveComponent, Qt = window.Vue.openBlock, Er = window.Vue.createElementBlock, yy = window.Vue.createVNode, ua = window.Vue.createBlock, ky = window.Vue.withModifiers, xr = window.Vue.inject, Si = window.Vue.computed, Zy = window.Vue.normalizeClass, gr = window.Vue.createElementVNode, da = window.Vue.toDisplayString, na = window.Vue.renderSlot, Ri = window.Vue.createCommentVNode, Jy = window.Vue.withDirectives, by = window.Vue.vShow, zl = window.Vue.ref, zf = window.Vue.toRef, Gf = window.Vue.nextTick, Gl = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const hc = window.Vue.provide, Yf = window.Vue.isRef, Ey = window.Vue.onBeforeUnmount;
var xi = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Sy = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Fy = Ir({
  props: Sy,
  components: {
    FeatherIcon: he
  }
}), Ay = ["title"];
function Wy(t, i, r, a, l, u) {
  const d = Ei("FeatherIcon");
  return Qt(), Er("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    yy(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, Ay);
}
var Cy = /* @__PURE__ */ xi(Fy, [["render", Wy], ["__scopeId", "data-v-4265058e"]]);
const xy = Ir({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return dc;
    }
  },
  components: {
    ActionIcon: Cy
  }
});
function By(t, i, r, a, l, u) {
  const d = Ei("ActionIcon");
  return Qt(), ua(d, {
    onClick: i[0] || (i[0] = ky((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Dy = /* @__PURE__ */ xi(xy, [["render", By]]);
const Iy = Ir({
  computed: {
    errorIcon() {
      return Ty;
    }
  },
  components: {
    FeatherIcon: he
  }
});
function Oy(t, i, r, a, l, u) {
  const d = Ei("FeatherIcon");
  return Qt(), ua(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Qy = /* @__PURE__ */ xi(Iy, [["render", Oy], ["__scopeId", "data-v-0b8faef3"]]);
const zy = {
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
}, Gy = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, Yy = Ir({
  emits: Gy,
  props: zy,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = xr("wrapperOptions", {}), i = xr("validationErrorMessage", !1), r = Si(() => t.error ? t.error : i && i.value ? i.value : !1);
    return Fp(Sp({}, t), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((i) => i.children && i.children.length !== 0) !== -1;
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
      const i = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, i), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: Dy,
    ErrorIcon: Qy
  }
}), _y = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Hy = ["for"], Py = { class: "prefix" }, jy = { class: "post" };
function Xy(t, i, r, a, l, u) {
  const d = Ei("ClearIcon"), h = Ei("ErrorIcon");
  return Qt(), Er("div", {
    class: Zy(["feather-input-wrapper-container", t.containerCls])
  }, [
    gr("fieldset", _y, [
      gr("legend", null, da(t.label), 1)
    ]),
    gr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, da(t.label), 9, Hy),
    gr("div", {
      class: "feather-input-wrapper",
      onClick: i[1] || (i[1] = (...V) => t.handleWrapperClick && t.handleWrapperClick(...V))
    }, [
      gr("div", Py, [
        na(t.$slots, "pre", {}, void 0, !0)
      ]),
      na(t.$slots, "default", {}, void 0, !0),
      gr("div", jy, [
        t.showClear && t.computedClearText ? (Qt(), ua(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: i[0] || (i[0] = (V) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Ri("", !0),
        t.error ? (Qt(), ua(h, { key: 1 })) : Ri("", !0),
        na(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Ap = /* @__PURE__ */ xi(Yy, [["render", Xy], ["__scopeId", "data-v-4db296db"]]);
const Ly = Ir({
  setup() {
    const t = xr("subTextOptions", {}), i = xr("validationErrorMessage", !1), r = Si(() => t.error ? t.error : i && i.value ? i.value : "");
    return Fp(Sp({}, t), { error: r });
  }
}), qy = { class: "feather-input-sub-text" }, $y = {
  key: 0,
  class: "feather-input-spacer"
}, Ky = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, ek = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function tk(t, i, r, a, l, u) {
  return Jy((Qt(), Er("div", qy, [
    !t.hint && !t.error.length ? (Qt(), Er("div", $y, "\xA0")) : Ri("", !0),
    t.hint && !t.error.length ? (Qt(), Er("div", Ky, da(t.hint), 1)) : Ri("", !0),
    t.error.length > 0 ? (Qt(), Er("div", ek, da(t.error), 1)) : Ri("", !0),
    na(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [by, !t.inline || t.hint || t.error.length]
  ]);
}
var Ra = /* @__PURE__ */ xi(Ly, [["render", tk], ["__scopeId", "data-v-8e0ac99e"]]);
const nk = {
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
Ir({
  props: nk,
  setup(t) {
    const i = xr("featherFormErrors", zl([])), r = zf(t, "errorList"), a = Si(() => {
      var U;
      return (U = r.value) != null && U.length ? r.value : i.value;
    }), l = zf(t, "generalError"), u = (U) => {
      document.getElementById(U).focus();
    }, d = (U) => U.replace(/ \*$/, ""), h = zl(), V = (U) => `${d(U.label)} - ${U.message}`, g = Si(() => (a.value.length && Gf(() => h.value.focus()), t.headingText(a.value)));
    return Gl(l, (U) => {
      U.length && Gf(() => h.value.focus());
    }), {
      errors: a,
      errorsHeading: g,
      heading: h,
      focusElement: u,
      mainError: l,
      getFullMessage: V
    };
  }
});
const Na = (t, i, r, a, l) => {
  const u = xr("featherForm", !1);
  if (a && u && t.value) {
    const d = zl("");
    hc("validationErrorMessage", d);
    const h = () => {
      if (l && Yf(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(i.value), d.value = "", { success: !0 };
      } catch (U) {
        const N = U;
        return d.value = N.errors[0], {
          success: !1,
          message: N.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, g = {
      clear: () => {
        d.value = "";
      },
      validate: h
    };
    return l && Yf(l) && Gl(l, () => {
      u.runValidation();
    }), Gl(t, (U, N) => {
      U && u && u.register(U, g), N && u && u.deregister(N);
    }, { immediate: !0 }), Ey(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, Ma = (t) => ({
  inherittedAttrs: Si(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), ya = {
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
}, ka = (t) => {
  hc("subTextOptions", t);
}, Wp = {
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
}, Cp = (t) => {
  hc("wrapperOptions", t);
}, Bo = window.Vue.ref, rk = window.Vue.watch, ik = window.Vue.watchEffect, _f = window.Vue.computed, Ul = window.Vue.provide, xp = (t, i, r, a, l) => {
  const u = Bo([]), d = Bo(), h = Bo(), V = Bo();
  ik(() => {
    if (!u.value.length)
      return;
    const F = u.value.map((D) => D.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[F.indexOf(t.value)]), !d.value && u.value.length) {
      let D = u.value.filter((C) => !C.disabled);
      D = D.length ? D : u.value, h.value = D[0], h.value.first = !0;
    }
  }), rk(d, (F, D) => {
    D && (D.checked = !1), F && (F.checked = !0);
  });
  const g = (F) => {
    F && F.disabled || (h.value && (h.value.first = !1), d.value !== F && (i("update:modelValue", F.value), d.value = F, F.focus()));
  }, U = _f(() => d.value || h.value), N = ly(U, u, g), M = _f(() => se("feather-radio-group"));
  V.value = M.value;
  const { validate: B } = Na(V, t, r, a, l);
  return Ul("register", (F) => {
    u.value = [...u.value, F], V.value === M.value && (V.value = F.id);
  }), Ul("select", g), Ul("blur", (F) => {
    i("blur", F);
  }), {
    keydown: (F) => {
      switch (F.keyCode) {
        case 13:
        case 32:
          d.value ? g(d.value) : h.value && g(h.value);
          break;
        case 40:
        case 39:
          N.selectNext();
          break;
        case 37:
        case 38:
          N.selectPrevious();
          break;
      }
    },
    ...N,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: B,
    firstElementId: V,
    groupId: M
  };
};
var ok = Object.defineProperty, ak = Object.defineProperties, sk = Object.getOwnPropertyDescriptors, Hf = Object.getOwnPropertySymbols, lk = Object.prototype.hasOwnProperty, ck = Object.prototype.propertyIsEnumerable, Pf = (t, i, r) => i in t ? ok(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Fr = (t, i) => {
  for (var r in i || (i = {}))
    lk.call(i, r) && Pf(t, r, i[r]);
  if (Hf)
    for (var r of Hf(i))
      ck.call(i, r) && Pf(t, r, i[r]);
  return t;
}, Bp = (t, i) => ak(t, sk(i));
const Zn = window.Vue.defineComponent, Ni = window.Vue.inject, fa = window.Vue.computed, Mi = window.Vue.ref, yt = window.Vue.resolveComponent, ht = window.Vue.openBlock, Bi = window.Vue.createElementBlock, Dp = window.Vue.normalizeClass, zt = window.Vue.renderSlot, Rn = window.Vue.createBlock, Fi = window.Vue.createCommentVNode, ha = window.Vue.createElementVNode, uk = window.Vue.withModifiers, Za = window.Vue.createVNode, Ip = window.Vue.toRef, Yl = window.Vue.mergeProps, an = window.Vue.withCtx, dk = window.Vue.h, fk = window.Vue.provide;
var Jn = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const hk = {
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
}, pk = Zn({
  props: hk,
  setup(t) {
    const i = Ni("isCondensed", null), r = fa(() => i || t.condensed), a = Mi(!1);
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
    FeatherRipple: Xn
  }
}), mk = ["aria-disabled"];
function Vk(t, i, r, a, l, u) {
  const d = yt("FeatherRipple");
  return ht(), Bi("div", {
    class: Dp(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: i[0] || (i[0] = (h) => t.clickable ? t.handleFocus : null),
    onFocusout: i[1] || (i[1] = (h) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    zt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (ht(), Rn(d, { key: 0 })) : Fi("", !0)
  ], 42, mk);
}
var Ja = /* @__PURE__ */ Jn(pk, [["render", Vk], ["__scopeId", "data-v-44d413dc"]]);
const wk = {
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
}, vk = Zn({
  emits: ["delete"],
  props: wk,
  setup(t, i) {
    return {
      handleDelete: () => {
        t.disabled || i.emit("delete");
      },
      icon: dc
    };
  },
  components: {
    FeatherIcon: he
  }
}), Tk = { class: "chip-delete" }, gk = ["aria-label", "aria-describedby"];
function Uk(t, i, r, a, l, u) {
  const d = yt("FeatherIcon");
  return ht(), Bi("span", Tk, [
    ha("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = uk((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      Za(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, gk)
  ]);
}
var Rk = /* @__PURE__ */ Jn(vk, [["render", Uk], ["__scopeId", "data-v-4bae6cb4"]]);
const Nk = Zn({
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
}), Mk = ["title"];
function yk(t, i, r, a, l, u) {
  return ht(), Bi("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    zt(t.$slots, "default", {}, void 0, !0)
  ], 8, Mk);
}
var ba = /* @__PURE__ */ Jn(Nk, [["render", yk], ["__scopeId", "data-v-1a0445b2"]]);
const kk = {}, Zk = {
  class: "chip-icon",
  role: "presentation"
};
function Jk(t, i) {
  return ht(), Bi("span", Zk, [
    zt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Ea = /* @__PURE__ */ Jn(kk, [["render", Jk], ["__scopeId", "data-v-2230176f"]]);
const jf = {
  delete: "Remove"
}, bk = Zn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => jf
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, i) {
    const r = Ep(Ip(t, "labels"), jf), a = fa(() => se("chip-text")), l = () => {
      t.disabled || i.emit("click");
    }, u = Fr({}, i.attrs);
    return t.disabled && delete u.onClick, Bp(Fr({}, r), {
      chipTextId: a,
      handleClick: l,
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
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ja,
    DeleteIcon: Rk,
    Label: ba,
    PreIcon: Ea
  }
}), Ek = ["aria-disabled"];
function Sk(t, i, r, a, l, u) {
  const d = yt("PreIcon"), h = yt("Label"), V = yt("DeleteIcon"), g = yt("Chip");
  return ht(), Rn(g, Yl(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: an(() => [
      ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        ha("span", Yl(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (ht(), Rn(d, { key: 0 }, {
            default: an(() => [
              zt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Fi("", !0),
          Za(h, { id: t.chipTextId }, {
            default: an(() => [
              zt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, Ek),
      t.canDelete ? (ht(), Rn(V, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (U) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Fi("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var Fk = /* @__PURE__ */ Jn(bk, [["render", Sk], ["__scopeId", "data-v-48b2704a"]]);
const Ak = Zn({
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
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ja,
    Label: ba,
    PreIcon: Ea
  }
}), Wk = ["aria-disabled"];
function Ck(t, i, r, a, l, u) {
  const d = yt("PreIcon"), h = yt("Label"), V = yt("Chip");
  return ht(), Rn(V, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: an(() => [
      ha("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (ht(), Rn(d, { key: 0 }, {
          default: an(() => [
            zt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Fi("", !0),
        Za(h, null, {
          default: an(() => [
            zt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, Wk)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var xk = /* @__PURE__ */ Jn(Ak, [["render", Ck], ["__scopeId", "data-v-3e0c4eba"]]);
const Bk = Zn({
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
    const i = Mi(!1), r = Mi(!1), a = fa(() => se("chip-label-id")), l = fa(() => i.value || r.value ? 0 : -1), u = Mi(), d = () => {
      u.value.$el.focus();
    }, h = Ni("register", (M) => {
    }), V = Ni("blur", (M) => {
    }), g = Ni("select", (M) => {
    }), U = {
      first: i,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return h(U), {
      labelId: a,
      tabindex: l,
      first: i,
      blur: V,
      click: () => {
        g(U);
      },
      input: u,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ja,
    Label: ba,
    PreIcon: Ea
  }
});
function Dk(t, i, r, a, l, u) {
  const d = yt("PreIcon"), h = yt("Label"), V = yt("Chip");
  return ht(), Rn(V, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: Dp(["focus hover", { selected: t.checked }]),
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
    default: an(() => [
      t.hasIcon ? (ht(), Rn(d, { key: 0 }, {
        default: an(() => [
          zt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Fi("", !0),
      Za(h, { id: t.labelId }, {
        default: an(() => [
          zt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var Ik = /* @__PURE__ */ Jn(Bk, [["render", Dk], ["__scopeId", "data-v-bbcc2f70"]]);
const Ok = {
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
}, Xf = Zn({
  props: Ok,
  setup() {
    return { format: Ni("chipListFormat", "") };
  },
  render() {
    const t = (i) => dk(i, Fr(Fr({}, this.$props), this.$attrs), Fr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(Fk) : this.format === "radio" ? t(Ik) : t(xk);
  }
}), Qk = {
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
}, zk = Zn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Qk,
  setup(t, i) {
    const r = t.mode === "list" ? "grid" : t.mode;
    fk("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = Ip(t, "modelValue");
      return Bp(Fr({
        attrs: {
          role: "radiogroup"
        }
      }, xp(d, i.emit, t.label, {}, Mi(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), Gk = ["aria-label"];
function Yk(t, i, r, a, l, u) {
  return ht(), Bi("div", Yl(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: i[0] || (i[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    zt(t.$slots, "default", {}, void 0, !0)
  ], 16, Gk);
}
var _k = /* @__PURE__ */ Jn(zk, [["render", Yk], ["__scopeId", "data-v-1e06f41d"]]);
function Ln(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var i = Number(t);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function De(t, i) {
  if (i.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Ye(t) {
  De(1, arguments);
  var i = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && i === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || i === "[object Number]" ? new Date(t) : ((typeof t == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Hk(t, i) {
  De(2, arguments);
  var r = Ye(t).getTime(), a = Ln(i);
  return new Date(r + a);
}
var Pk = {};
function Di() {
  return Pk;
}
function _l(t) {
  var i = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return i.setUTCFullYear(t.getFullYear()), t.getTime() - i.getTime();
}
function jk(t, i) {
  De(2, arguments);
  var r = Ye(t), a = Ye(i), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function Xk(t) {
  return De(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Lk(t) {
  if (De(1, arguments), !Xk(t) && typeof t != "number")
    return !1;
  var i = Ye(t);
  return !isNaN(Number(i));
}
function qk(t, i) {
  De(2, arguments);
  var r = Ln(i);
  return Hk(t, -r);
}
var $k = 864e5;
function Kk(t) {
  De(1, arguments);
  var i = Ye(t), r = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var a = i.getTime(), l = r - a;
  return Math.floor(l / $k) + 1;
}
function pa(t) {
  De(1, arguments);
  var i = 1, r = Ye(t), a = r.getUTCDay(), l = (a < i ? 7 : 0) + a - i;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Op(t) {
  De(1, arguments);
  var i = Ye(t), r = i.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = pa(a), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = pa(u);
  return i.getTime() >= l.getTime() ? r + 1 : i.getTime() >= d.getTime() ? r : r - 1;
}
function eZ(t) {
  De(1, arguments);
  var i = Op(t), r = new Date(0);
  r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = pa(r);
  return a;
}
var tZ = 6048e5;
function nZ(t) {
  De(1, arguments);
  var i = Ye(t), r = pa(i).getTime() - eZ(i).getTime();
  return Math.round(r / tZ) + 1;
}
function ma(t, i) {
  var r, a, l, u, d, h, V, g;
  De(1, arguments);
  var U = Di(), N = Ln((r = (a = (l = (u = i == null ? void 0 : i.weekStartsOn) !== null && u !== void 0 ? u : i == null || (d = i.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && l !== void 0 ? l : U.weekStartsOn) !== null && a !== void 0 ? a : (V = U.locale) === null || V === void 0 || (g = V.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var M = Ye(t), B = M.getUTCDay(), A = (B < N ? 7 : 0) + B - N;
  return M.setUTCDate(M.getUTCDate() - A), M.setUTCHours(0, 0, 0, 0), M;
}
function Qp(t, i) {
  var r, a, l, u, d, h, V, g;
  De(1, arguments);
  var U = Ye(t), N = U.getUTCFullYear(), M = Di(), B = Ln((r = (a = (l = (u = i == null ? void 0 : i.firstWeekContainsDate) !== null && u !== void 0 ? u : i == null || (d = i.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : M.firstWeekContainsDate) !== null && a !== void 0 ? a : (V = M.locale) === null || V === void 0 || (g = V.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var A = new Date(0);
  A.setUTCFullYear(N + 1, 0, B), A.setUTCHours(0, 0, 0, 0);
  var S = ma(A, i), E = new Date(0);
  E.setUTCFullYear(N, 0, B), E.setUTCHours(0, 0, 0, 0);
  var F = ma(E, i);
  return U.getTime() >= S.getTime() ? N + 1 : U.getTime() >= F.getTime() ? N : N - 1;
}
function rZ(t, i) {
  var r, a, l, u, d, h, V, g;
  De(1, arguments);
  var U = Di(), N = Ln((r = (a = (l = (u = i == null ? void 0 : i.firstWeekContainsDate) !== null && u !== void 0 ? u : i == null || (d = i.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : U.firstWeekContainsDate) !== null && a !== void 0 ? a : (V = U.locale) === null || V === void 0 || (g = V.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), M = Qp(t, i), B = new Date(0);
  B.setUTCFullYear(M, 0, N), B.setUTCHours(0, 0, 0, 0);
  var A = ma(B, i);
  return A;
}
var iZ = 6048e5;
function oZ(t, i) {
  De(1, arguments);
  var r = Ye(t), a = ma(r, i).getTime() - rZ(r, i).getTime();
  return Math.round(a / iZ) + 1;
}
function ae(t, i) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < i; )
    a = "0" + a;
  return r + a;
}
var aZ = {
  y: function(t, i) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return ae(i === "yy" ? a % 100 : a, i.length);
  },
  M: function(t, i) {
    var r = t.getUTCMonth();
    return i === "M" ? String(r + 1) : ae(r + 1, 2);
  },
  d: function(t, i) {
    return ae(t.getUTCDate(), i.length);
  },
  a: function(t, i) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (i) {
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
  h: function(t, i) {
    return ae(t.getUTCHours() % 12 || 12, i.length);
  },
  H: function(t, i) {
    return ae(t.getUTCHours(), i.length);
  },
  m: function(t, i) {
    return ae(t.getUTCMinutes(), i.length);
  },
  s: function(t, i) {
    return ae(t.getUTCSeconds(), i.length);
  },
  S: function(t, i) {
    var r = i.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return ae(l, i.length);
  }
};
const Vn = aZ;
var Ur = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, sZ = {
  G: function(t, i, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (i) {
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
  y: function(t, i, r) {
    if (i === "yo") {
      var a = t.getUTCFullYear(), l = a > 0 ? a : 1 - a;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return Vn.y(t, i);
  },
  Y: function(t, i, r, a) {
    var l = Qp(t, a), u = l > 0 ? l : 1 - l;
    if (i === "YY") {
      var d = u % 100;
      return ae(d, 2);
    }
    return i === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ae(u, i.length);
  },
  R: function(t, i) {
    var r = Op(t);
    return ae(r, i.length);
  },
  u: function(t, i) {
    var r = t.getUTCFullYear();
    return ae(r, i.length);
  },
  Q: function(t, i, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (i) {
      case "Q":
        return String(a);
      case "QQ":
        return ae(a, 2);
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
  q: function(t, i, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (i) {
      case "q":
        return String(a);
      case "qq":
        return ae(a, 2);
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
  M: function(t, i, r) {
    var a = t.getUTCMonth();
    switch (i) {
      case "M":
      case "MM":
        return Vn.M(t, i);
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
  L: function(t, i, r) {
    var a = t.getUTCMonth();
    switch (i) {
      case "L":
        return String(a + 1);
      case "LL":
        return ae(a + 1, 2);
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
  w: function(t, i, r, a) {
    var l = oZ(t, a);
    return i === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ae(l, i.length);
  },
  I: function(t, i, r) {
    var a = nZ(t);
    return i === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ae(a, i.length);
  },
  d: function(t, i, r) {
    return i === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Vn.d(t, i);
  },
  D: function(t, i, r) {
    var a = Kk(t);
    return i === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ae(a, i.length);
  },
  E: function(t, i, r) {
    var a = t.getUTCDay();
    switch (i) {
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
  e: function(t, i, r, a) {
    var l = t.getUTCDay(), u = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "e":
        return String(u);
      case "ee":
        return ae(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
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
  c: function(t, i, r, a) {
    var l = t.getUTCDay(), u = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "c":
        return String(u);
      case "cc":
        return ae(u, i.length);
      case "co":
        return r.ordinalNumber(u, {
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
  i: function(t, i, r) {
    var a = t.getUTCDay(), l = a === 0 ? 7 : a;
    switch (i) {
      case "i":
        return String(l);
      case "ii":
        return ae(l, i.length);
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
  a: function(t, i, r) {
    var a = t.getUTCHours(), l = a / 12 >= 1 ? "pm" : "am";
    switch (i) {
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
  b: function(t, i, r) {
    var a = t.getUTCHours(), l;
    switch (a === 12 ? l = Ur.noon : a === 0 ? l = Ur.midnight : l = a / 12 >= 1 ? "pm" : "am", i) {
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
  B: function(t, i, r) {
    var a = t.getUTCHours(), l;
    switch (a >= 17 ? l = Ur.evening : a >= 12 ? l = Ur.afternoon : a >= 4 ? l = Ur.morning : l = Ur.night, i) {
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
  h: function(t, i, r) {
    if (i === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Vn.h(t, i);
  },
  H: function(t, i, r) {
    return i === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Vn.H(t, i);
  },
  K: function(t, i, r) {
    var a = t.getUTCHours() % 12;
    return i === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ae(a, i.length);
  },
  k: function(t, i, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), i === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ae(a, i.length);
  },
  m: function(t, i, r) {
    return i === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Vn.m(t, i);
  },
  s: function(t, i, r) {
    return i === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Vn.s(t, i);
  },
  S: function(t, i) {
    return Vn.S(t, i);
  },
  X: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (i) {
      case "X":
        return qf(u);
      case "XXXX":
      case "XX":
        return _n(u);
      case "XXXXX":
      case "XXX":
      default:
        return _n(u, ":");
    }
  },
  x: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "x":
        return qf(u);
      case "xxxx":
      case "xx":
        return _n(u);
      case "xxxxx":
      case "xxx":
      default:
        return _n(u, ":");
    }
  },
  O: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Lf(u, ":");
      case "OOOO":
      default:
        return "GMT" + _n(u, ":");
    }
  },
  z: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Lf(u, ":");
      case "zzzz":
      default:
        return "GMT" + _n(u, ":");
    }
  },
  t: function(t, i, r, a) {
    var l = a._originalDate || t, u = Math.floor(l.getTime() / 1e3);
    return ae(u, i.length);
  },
  T: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTime();
    return ae(u, i.length);
  }
};
function Lf(t, i) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), u = a % 60;
  if (u === 0)
    return r + String(l);
  var d = i || "";
  return r + String(l) + d + ae(u, 2);
}
function qf(t, i) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + ae(Math.abs(t) / 60, 2);
  }
  return _n(t, i);
}
function _n(t, i) {
  var r = i || "", a = t > 0 ? "-" : "+", l = Math.abs(t), u = ae(Math.floor(l / 60), 2), d = ae(l % 60, 2);
  return a + u + r + d;
}
const lZ = sZ;
var $f = function(t, i) {
  switch (t) {
    case "P":
      return i.date({
        width: "short"
      });
    case "PP":
      return i.date({
        width: "medium"
      });
    case "PPP":
      return i.date({
        width: "long"
      });
    case "PPPP":
    default:
      return i.date({
        width: "full"
      });
  }
}, zp = function(t, i) {
  switch (t) {
    case "p":
      return i.time({
        width: "short"
      });
    case "pp":
      return i.time({
        width: "medium"
      });
    case "ppp":
      return i.time({
        width: "long"
      });
    case "pppp":
    default:
      return i.time({
        width: "full"
      });
  }
}, cZ = function(t, i) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return $f(t, i);
  var u;
  switch (a) {
    case "P":
      u = i.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = i.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = i.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = i.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", $f(a, i)).replace("{{time}}", zp(l, i));
}, uZ = {
  p: zp,
  P: cZ
};
const dZ = uZ;
var fZ = ["D", "DD"], hZ = ["YY", "YYYY"];
function pZ(t) {
  return fZ.indexOf(t) !== -1;
}
function mZ(t) {
  return hZ.indexOf(t) !== -1;
}
function Kf(t, i, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var VZ = {
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
}, wZ = function(t, i, r) {
  var a, l = VZ[t];
  return typeof l == "string" ? a = l : i === 1 ? a = l.one : a = l.other.replace("{{count}}", i.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const vZ = wZ;
function Rl(t) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.width ? String(i.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var TZ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gZ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, UZ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, RZ = {
  date: Rl({
    formats: TZ,
    defaultWidth: "full"
  }),
  time: Rl({
    formats: gZ,
    defaultWidth: "full"
  }),
  dateTime: Rl({
    formats: UZ,
    defaultWidth: "full"
  })
};
const NZ = RZ;
var MZ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yZ = function(t, i, r, a) {
  return MZ[t];
};
const kZ = yZ;
function fi(t) {
  return function(i, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : u;
      l = t.formattingValues[d] || t.formattingValues[u];
    } else {
      var h = t.defaultWidth, V = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[V] || t.values[h];
    }
    var g = t.argumentCallback ? t.argumentCallback(i) : i;
    return l[g];
  };
}
var ZZ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, JZ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, bZ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, EZ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, SZ = {
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
}, FZ = {
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
}, AZ = function(t, i) {
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
}, WZ = {
  ordinalNumber: AZ,
  era: fi({
    values: ZZ,
    defaultWidth: "wide"
  }),
  quarter: fi({
    values: JZ,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: fi({
    values: bZ,
    defaultWidth: "wide"
  }),
  day: fi({
    values: EZ,
    defaultWidth: "wide"
  }),
  dayPeriod: fi({
    values: SZ,
    defaultWidth: "wide",
    formattingValues: FZ,
    defaultFormattingWidth: "wide"
  })
};
const CZ = WZ;
function hi(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], u = i.match(l);
    if (!u)
      return null;
    var d = u[0], h = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], V = Array.isArray(h) ? BZ(h, function(N) {
      return N.test(d);
    }) : xZ(h, function(N) {
      return N.test(d);
    }), g;
    g = t.valueCallback ? t.valueCallback(V) : V, g = r.valueCallback ? r.valueCallback(g) : g;
    var U = i.slice(d.length);
    return {
      value: g,
      rest: U
    };
  };
}
function xZ(t, i) {
  for (var r in t)
    if (t.hasOwnProperty(r) && i(t[r]))
      return r;
}
function BZ(t, i) {
  for (var r = 0; r < t.length; r++)
    if (i(t[r]))
      return r;
}
function DZ(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = i.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], u = i.match(t.parsePattern);
    if (!u)
      return null;
    var d = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var h = i.slice(l.length);
    return {
      value: d,
      rest: h
    };
  };
}
var IZ = /^(\d+)(th|st|nd|rd)?/i, OZ = /\d+/i, QZ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, zZ = {
  any: [/^b/i, /^(a|c)/i]
}, GZ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, YZ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _Z = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, HZ = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, PZ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jZ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, XZ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, LZ = {
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
}, qZ = {
  ordinalNumber: DZ({
    matchPattern: IZ,
    parsePattern: OZ,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: hi({
    matchPatterns: QZ,
    defaultMatchWidth: "wide",
    parsePatterns: zZ,
    defaultParseWidth: "any"
  }),
  quarter: hi({
    matchPatterns: GZ,
    defaultMatchWidth: "wide",
    parsePatterns: YZ,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: hi({
    matchPatterns: _Z,
    defaultMatchWidth: "wide",
    parsePatterns: HZ,
    defaultParseWidth: "any"
  }),
  day: hi({
    matchPatterns: PZ,
    defaultMatchWidth: "wide",
    parsePatterns: jZ,
    defaultParseWidth: "any"
  }),
  dayPeriod: hi({
    matchPatterns: XZ,
    defaultMatchWidth: "any",
    parsePatterns: LZ,
    defaultParseWidth: "any"
  })
};
const $Z = qZ;
var KZ = {
  code: "en-US",
  formatDistance: vZ,
  formatLong: NZ,
  formatRelative: kZ,
  localize: CZ,
  match: $Z,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Gp = KZ;
var eJ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tJ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, nJ = /^'([^]*?)'?$/, rJ = /''/g, iJ = /[a-zA-Z]/;
function oJ(t, i, r) {
  var a, l, u, d, h, V, g, U, N, M, B, A, S, E, F, D, C, G;
  De(2, arguments);
  var J = String(i), X = Di(), ee = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : X.locale) !== null && a !== void 0 ? a : Gp, L = Ln((u = (d = (h = (V = r == null ? void 0 : r.firstWeekContainsDate) !== null && V !== void 0 ? V : r == null || (g = r.locale) === null || g === void 0 || (U = g.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && h !== void 0 ? h : X.firstWeekContainsDate) !== null && d !== void 0 ? d : (N = X.locale) === null || N === void 0 || (M = N.options) === null || M === void 0 ? void 0 : M.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ie = Ln((B = (A = (S = (E = r == null ? void 0 : r.weekStartsOn) !== null && E !== void 0 ? E : r == null || (F = r.locale) === null || F === void 0 || (D = F.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && S !== void 0 ? S : X.weekStartsOn) !== null && A !== void 0 ? A : (C = X.locale) === null || C === void 0 || (G = C.options) === null || G === void 0 ? void 0 : G.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(Ie >= 0 && Ie <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Le = Ye(t);
  if (!Lk(Le))
    throw new RangeError("Invalid time value");
  var Ve = _l(Le), we = qk(Le, Ve), Te = {
    firstWeekContainsDate: L,
    weekStartsOn: Ie,
    locale: ee,
    _originalDate: Le
  }, Ne = J.match(tJ).map(function(le) {
    var Fe = le[0];
    if (Fe === "p" || Fe === "P") {
      var Ae = dZ[Fe];
      return Ae(le, ee.formatLong);
    }
    return le;
  }).join("").match(eJ).map(function(le) {
    if (le === "''")
      return "'";
    var Fe = le[0];
    if (Fe === "'")
      return aJ(le);
    var Ae = lZ[Fe];
    if (Ae)
      return !(r != null && r.useAdditionalWeekYearTokens) && mZ(le) && Kf(le, i, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && pZ(le) && Kf(le, i, String(t)), Ae(we, le, ee.localize, Te);
    if (Fe.match(iJ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return le;
  }).join("");
  return Ne;
}
function aJ(t) {
  var i = t.match(nJ);
  return i ? i[1].replace(rJ, "'") : t;
}
function Yp(t, i) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  return t;
}
function sJ(t) {
  return Yp({}, t);
}
var eh = 1e3 * 60, Va = 60 * 24, th = Va * 30, nh = Va * 365;
function lJ(t, i, r) {
  var a, l, u;
  De(2, arguments);
  var d = Di(), h = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : d.locale) !== null && a !== void 0 ? a : Gp;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var V = jk(t, i);
  if (isNaN(V))
    throw new RangeError("Invalid time value");
  var g = Yp(sJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: V
  }), U, N;
  V > 0 ? (U = Ye(i), N = Ye(t)) : (U = Ye(t), N = Ye(i));
  var M = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), B;
  if (M === "floor")
    B = Math.floor;
  else if (M === "ceil")
    B = Math.ceil;
  else if (M === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var A = N.getTime() - U.getTime(), S = A / eh, E = _l(N) - _l(U), F = (A - E) / eh, D = r == null ? void 0 : r.unit, C;
  if (D ? C = String(D) : S < 1 ? C = "second" : S < 60 ? C = "minute" : S < Va ? C = "hour" : F < th ? C = "day" : F < nh ? C = "month" : C = "year", C === "second") {
    var G = B(A / 1e3);
    return h.formatDistance("xSeconds", G, g);
  } else if (C === "minute") {
    var J = B(S);
    return h.formatDistance("xMinutes", J, g);
  } else if (C === "hour") {
    var X = B(S / 60);
    return h.formatDistance("xHours", X, g);
  } else if (C === "day") {
    var ee = B(F / Va);
    return h.formatDistance("xDays", ee, g);
  } else if (C === "month") {
    var L = B(F / th);
    return L === 12 && D !== "month" ? h.formatDistance("xYears", 1, g) : h.formatDistance("xMonths", L, g);
  } else if (C === "year") {
    var Ie = B(F / nh);
    return h.formatDistance("xYears", Ie, g);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const yn = (t) => {
  let i = "";
  if (t)
    try {
      i = oJ(new Date(t), ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return i;
};
var cJ = Object.defineProperty, uJ = Object.defineProperties, dJ = Object.getOwnPropertyDescriptors, rh = Object.getOwnPropertySymbols, fJ = Object.prototype.hasOwnProperty, hJ = Object.prototype.propertyIsEnumerable, ih = (t, i, r) => i in t ? cJ(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, pi = (t, i) => {
  for (var r in i || (i = {}))
    fJ.call(i, r) && ih(t, r, i[r]);
  if (rh)
    for (var r of rh(i))
      hJ.call(i, r) && ih(t, r, i[r]);
  return t;
}, oh = (t, i) => uJ(t, dJ(i));
const pJ = window.Vue.defineComponent, mJ = window.Vue.inject, mi = window.Vue.h;
var VJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const wJ = {
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
}, vJ = pJ({
  inheritAttrs: !1,
  props: wJ,
  setup() {
    return { hasTooltip: mJ("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let h = "";
      this.primary && (h = "btn-primary"), this.secondary && (h = "btn-secondary"), (this.text || this.icon) && (h = "btn-text");
      const V = ["btn", "hover", "focus", h];
      return this.icon && (V.push("btn-icon"), V.push("btn-icon-table")), this.onColor && V.push("on-color"), V;
    }, i = this.asAnchor ? "a" : "button", r = {}, a = pi({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (h) => {
        this.disabled ? (this.asAnchor && h.preventDefault(), this.$emit("disabled-click", h)) : this.$emit("click", h);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let u = mi(Xn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), mi(i, oh(pi(pi({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : mi(Xn, { center: !0 })
      ]);
    }
    const d = mi("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return mi(i, oh(pi(pi({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var Nn = /* @__PURE__ */ VJ(vJ, [["__scopeId", "data-v-702d1074"]]);
const TJ = window.Vue.openBlock, gJ = window.Vue.createElementBlock, UJ = window.Vue.createElementVNode;
var RJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const NJ = {}, MJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yJ = /* @__PURE__ */ UJ("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), kJ = [
  yJ
];
function ZJ(t, i) {
  return TJ(), gJ("svg", MJ, kJ);
}
var JJ = /* @__PURE__ */ RJ(NJ, [["render", ZJ]]);
const bJ = window.Vue.openBlock, EJ = window.Vue.createElementBlock, SJ = window.Vue.createStaticVNode;
var FJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const AJ = {}, WJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CJ = /* @__PURE__ */ SJ('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), xJ = [
  CJ
];
function BJ(t, i) {
  return bJ(), EJ("svg", WJ, xJ);
}
var _p = /* @__PURE__ */ FJ(AJ, [["render", BJ]]);
const DJ = window.Vue.defineComponent, At = window.Vue.unref, Nl = window.Vue.createVNode, pc = window.Vue.createElementVNode, Ml = window.Vue.withCtx, Do = window.Vue.openBlock, yl = window.Vue.createBlock, kl = window.Vue.createCommentVNode, IJ = window.Vue.normalizeClass, OJ = window.Vue.createElementBlock, QJ = window.Vue.pushScopeId, zJ = window.Vue.popScopeId, mc = (t) => (QJ("data-v-6c8ffb78"), t = t(), zJ(), t), GJ = /* @__PURE__ */ mc(() => /* @__PURE__ */ pc("span", null, "Acknowledge", -1)), YJ = /* @__PURE__ */ mc(() => /* @__PURE__ */ pc("span", null, "Escalate", -1)), _J = /* @__PURE__ */ mc(() => /* @__PURE__ */ pc("span", null, "Clear", -1)), HJ = /* @__PURE__ */ DJ({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    showUnaknowledge: { type: Boolean },
    situationId: null
  },
  emits: ["action-clicked"],
  setup(t, { emit: i }) {
    const r = t, a = Ci(), l = async (d) => {
      await AR(r.alarm.id, d) && (a.selectedSituation = r.situationId, i("action-clicked", r.alarm.id)), await yp(r.situationId, ft.ACCEPTED);
    }, u = async (d) => {
      await WR(r.alarm.id, d) && (a.selectedSituation = r.situationId, i("action-clicked", r.alarm.id), a.getSituation(r.situationId));
    };
    return (d, h) => (Do(), OJ("div", {
      class: IJ(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? kl("", !0) : (Do(), yl(At(Nn), {
        key: 0,
        class: "acction-btn",
        onClick: h[0] || (h[0] = () => l(!0))
      }, {
        default: Ml(() => [
          Nl(At(he), {
            icon: At(kp),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          GJ
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (Do(), yl(At(Nn), {
        key: 1,
        class: "acction-btn",
        onClick: h[1] || (h[1] = () => u(At(ft).ESCALATE))
      }, {
        default: Ml(() => [
          Nl(At(he), {
            icon: At(JJ),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          YJ
        ]),
        _: 1
      })) : kl("", !0),
      r.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (Do(), yl(At(Nn), {
        key: 2,
        class: "acction-btn",
        onClick: h[2] || (h[2] = () => u(At(ft).CLEAR))
      }, {
        default: Ml(() => [
          Nl(At(he), {
            icon: At(_p),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          _J
        ]),
        _: 1
      })) : kl("", !0)
    ], 2));
  }
});
const Hp = /* @__PURE__ */ Se(HJ, [["__scopeId", "data-v-6c8ffb78"]]);
var PJ = Object.defineProperty, jJ = Object.defineProperties, XJ = Object.getOwnPropertyDescriptors, ah = Object.getOwnPropertySymbols, LJ = Object.prototype.hasOwnProperty, qJ = Object.prototype.propertyIsEnumerable, sh = (t, i, r) => i in t ? PJ(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Hl = (t, i) => {
  for (var r in i || (i = {}))
    LJ.call(i, r) && sh(t, r, i[r]);
  if (ah)
    for (var r of ah(i))
      qJ.call(i, r) && sh(t, r, i[r]);
  return t;
}, Pp = (t, i) => jJ(t, XJ(i));
const jp = window.Vue.defineComponent, $J = window.Vue.inject, KJ = window.Vue.resolveComponent, Zl = window.Vue.openBlock, lh = window.Vue.createElementBlock, Sr = window.Vue.createElementVNode, e2 = window.Vue.createBlock, ch = window.Vue.createCommentVNode, t2 = window.Vue.renderSlot, n2 = window.Vue.pushScopeId, r2 = window.Vue.popScopeId, Jl = window.Vue.toRef, Io = window.Vue.computed, i2 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var o2 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const a2 = {
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
}, s2 = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, l2 = jp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: s2,
  props: a2,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: $J("registerCheckbox", (i) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : se("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : se("checkbox-label");
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
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: Xn
  }
}), c2 = (t) => (n2("data-v-a7af27e2"), t = t(), r2(), t), u2 = { class: "layout-container" }, d2 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], f2 = { class: "checkbox hover focus" }, h2 = /* @__PURE__ */ c2(() => /* @__PURE__ */ Sr("div", { class: "box" }, [
  /* @__PURE__ */ Sr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Sr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Sr("div", { class: "indeterminate" })
], -1)), p2 = ["id", "for"];
function m2(t, i, r, a, l, u) {
  const d = KJ("feather-ripple");
  return Zl(), lh("div", u2, [
    Sr("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: i[0] || (i[0] = (...h) => t.click && t.click(...h)),
      onKeydown: i[1] || (i[1] = (...h) => t.keydown && t.keydown(...h)),
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
      Sr("div", f2, [
        h2,
        t.disabled ? ch("", !0) : (Zl(), e2(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? ch("", !0) : (Zl(), lh("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        t2(t.$slots, "default", {}, void 0, !0)
      ], 8, p2))
    ], 40, d2)
  ]);
}
var Vc = /* @__PURE__ */ o2(l2, [["render", m2], ["__scopeId", "data-v-a7af27e2"]]);
const V2 = Pp(Hl({}, ya), {
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
jp({
  props: V2,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, i) {
    ka(t);
    const r = Jl(t, "error"), a = Io(() => se("feather-checkbox-group")), l = Io(() => se("feather-input-description")), u = Io(() => se("feather-input-label")), d = Io(() => {
      const U = JSON.parse(JSON.stringify(i.attrs));
      return U["aria-invalid"] || (U["aria-invalid"] = !!r.value), Pp(Hl({}, U), {
        class: "",
        "aria-describedby": l.value
      });
    }), h = i2(a.value), { validate: V } = Na(h, Jl(t, "modelValue"), t.label, t.schema, Jl(t, "error"));
    return Hl({
      groupId: a,
      inputId: h,
      descriptionId: l,
      labelId: u,
      attrs: d,
      validate: V,
      registerCheckbox: (U) => {
        U && h.value === a.value && (h.value = U);
      }
    }, Ma(i.attrs));
  },
  components: {
    InputSubText: Ra
  }
});
const w2 = window.Vue.defineComponent, bl = window.Vue.unref, El = window.Vue.createVNode, Oo = window.Vue.toDisplayString, Un = window.Vue.createElementVNode, uh = window.Vue.createTextVNode, v2 = window.Vue.openBlock, T2 = window.Vue.createElementBlock, g2 = window.Vue.createCommentVNode, U2 = window.Vue.pushScopeId, R2 = window.Vue.popScopeId, Xp = (t) => (U2("data-v-8021b69a"), t = t(), R2(), t), N2 = {
  key: 0,
  class: "card"
}, M2 = { class: "row" }, y2 = { class: "title" }, k2 = ["innerHTML"], Z2 = /* @__PURE__ */ Xp(() => /* @__PURE__ */ Un("strong", null, "First Event", -1)), J2 = /* @__PURE__ */ Xp(() => /* @__PURE__ */ Un("strong", null, "Last Event", -1)), dh = window.Vue.ref, b2 = window.Vue.watch, E2 = /* @__PURE__ */ w2({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: i }) {
    const r = t, a = dh(!1), l = dh(r.alarm);
    b2(r, () => {
      l.value = r.alarm, a.value = r.selectAll, i("alarm-selected", r.alarm.id);
    });
    const u = () => {
      i("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const V = await Rp(h);
      V && (l.value = V);
    };
    return (h, V) => {
      var g;
      return l.value ? (v2(), T2("div", N2, [
        Un("div", null, [
          Un("div", M2, [
            El(bl(Vc), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                V[0] || (V[0] = (U) => a.value = U),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Un("div", y2, Oo(l.value.nodeLabel) + " - " + Oo(l.value.id), 1),
            El(bp, {
              severity: (g = l.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"])
          ]),
          Un("div", {
            class: "description",
            innerHTML: l.value.description
          }, null, 8, k2),
          Un("div", null, [
            Z2,
            uh(" - " + Oo(bl(yn)(l.value.firstEventTime)), 1)
          ]),
          Un("div", null, [
            J2,
            uh(" - " + Oo(bl(yn)(l.value.lastEventTime)), 1)
          ])
        ]),
        El(Hp, {
          alarm: l.value,
          direction: "vertical",
          showUnaknowledge: "",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : g2("", !0);
    };
  }
});
const S2 = /* @__PURE__ */ Se(E2, [["__scopeId", "data-v-8021b69a"]]), F2 = window.Vue.defineComponent, A2 = window.Vue.normalizeClass, W2 = window.Vue.openBlock, C2 = window.Vue.createElementBlock, x2 = window.Vue.createCommentVNode, B2 = /* @__PURE__ */ F2({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (W2(), C2("span", {
      key: 0,
      class: A2(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : x2("", !0);
  }
});
const D2 = /* @__PURE__ */ Se(B2, [["__scopeId", "data-v-e08880d6"]]), I2 = window.Vue.defineComponent, yi = window.Vue.createElementVNode, en = window.Vue.unref, Lp = window.Vue.createTextVNode, fh = window.Vue.normalizeClass, Qo = window.Vue.withCtx, Rr = window.Vue.createVNode, hh = window.Vue.renderList, ph = window.Vue.Fragment, Dn = window.Vue.openBlock, Vi = window.Vue.createElementBlock, O2 = window.Vue.toDisplayString, mh = window.Vue.createBlock, Vh = window.Vue.createCommentVNode, Q2 = window.Vue.pushScopeId, z2 = window.Vue.popScopeId, qp = (t) => (Q2("data-v-e75f8105"), t = t(), z2(), t), G2 = { class: "container" }, Y2 = { class: "row" }, _2 = /* @__PURE__ */ qp(() => /* @__PURE__ */ yi("div", { class: "title" }, "Alarms", -1)), H2 = /* @__PURE__ */ Lp(" ALL "), P2 = { class: "row actions" }, j2 = /* @__PURE__ */ qp(() => /* @__PURE__ */ yi("span", null, "Clear", -1)), X2 = { class: "section" }, L2 = {
  key: 0,
  class: "alarm-list"
}, wh = window.Vue.ref, q2 = window.Vue.watch, $2 = window.Vue.computed, K2 = window.Vue.reactive, eb = /* @__PURE__ */ I2({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const i = t, r = Ci(), a = wh(!1), l = $2(() => me.exports.keys(me.exports.groupBy(i.alarms, "severity"))), u = wh(["all"]), d = K2({
      selectedAlarms: [],
      alarms: i.alarms
    }), h = (U) => {
      u.value = u.value.filter((N) => N !== "all"), u.value.includes(U) ? u.value = u.value.filter((N) => N !== U) : u.value.push(U), U === "all" || u.value.length === 0 ? (u.value = ["all"], d.alarms = i.alarms) : d.alarms = i.alarms.filter(
        (N) => u.value.includes(N.severity)
      );
    };
    q2(i, () => {
      u.value = ["all"], d.alarms = i.alarms, d.selectedAlarms = [], a.value = !1;
    });
    const V = (U) => {
      d.selectedAlarms.includes(U) ? me.exports.remove(d.selectedAlarms, (N) => N == U) : d.selectedAlarms.push(U);
    }, g = async () => {
      await CR(d.selectedAlarms), r.getSituation(i.situationId), d.selectedAlarms = [], a.value = !1;
    };
    return (U, N) => (Dn(), Vi("div", G2, [
      yi("div", Y2, [
        _2,
        en(l).length > 1 ? (Dn(), mh(en(_k), {
          key: u.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: Qo(() => [
            Rr(en(Xf), {
              class: fh({ clicked: u.value.includes("all") }),
              onClick: N[0] || (N[0] = (M) => h("all"))
            }, {
              default: Qo(() => [
                H2
              ]),
              _: 1
            }, 8, ["class"]),
            (Dn(!0), Vi(ph, null, hh(en(l), (M) => (Dn(), mh(en(Xf), {
              class: fh({ clicked: u.value.includes(M) }),
              key: M,
              onClick: (B) => h(M)
            }, {
              default: Qo(() => [
                Rr(D2, { severity: M }, null, 8, ["severity"]),
                Lp(O2(M), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })) : Vh("", !0)
      ]),
      yi("div", P2, [
        Rr(en(Vc), {
          modelValue: a.value,
          "onUpdate:modelValue": N[1] || (N[1] = (M) => a.value = M),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Rr(en(Nn), {
          class: "acction-btn",
          onClick: N[2] || (N[2] = () => g())
        }, {
          default: Qo(() => [
            Rr(en(he), {
              icon: en(_p),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            j2
          ]),
          _: 1
        })
      ]),
      yi("div", X2, [
        d.alarms.length > 0 ? (Dn(), Vi("div", L2, [
          (Dn(!0), Vi(ph, null, hh(d.alarms, (M) => (Dn(), Vi("div", {
            key: M.id
          }, [
            Rr(S2, {
              alarm: M,
              selectAll: a.value,
              "situation-id": i.situationId,
              onAlarmSelected: V
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : Vh("", !0)
      ])
    ]));
  }
});
const tb = /* @__PURE__ */ Se(eb, [["__scopeId", "data-v-e75f8105"]]), nb = "/whoami", rb = async () => {
  try {
    const t = await kn.get(nb);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, ib = window.Pinia.defineStore, Ii = ib("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await rb();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await GR();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const i = await Mp(t);
        this.allowSave = i;
      }
    }
  }
}), ob = window.Vue.defineComponent, tn = window.Vue.createVNode, dt = window.Vue.unref, Sl = window.Vue.normalizeClass, zo = window.Vue.toDisplayString, In = window.Vue.openBlock, On = window.Vue.createElementBlock, Go = window.Vue.createCommentVNode, ab = window.Vue.withCtx, Ot = window.Vue.createElementVNode, sb = window.Vue.createTextVNode, lb = window.Vue.Fragment, cb = window.Vue.pushScopeId, ub = window.Vue.popScopeId, db = (t) => (cb("data-v-1a89b405"), t = t(), ub(), t), fb = { class: "section" }, hb = { class: "action-section" }, pb = {
  key: 0,
  class: "btn-row"
}, mb = { key: 0 }, Vb = { key: 1 }, wb = {
  key: 0,
  class: "situation-detail"
}, vb = { class: "situation-info" }, Tb = { class: "id" }, gb = { key: 0 }, Ub = ["innerHTML"], Rb = /* @__PURE__ */ db(() => /* @__PURE__ */ Ot("p", null, null, -1)), Nb = { class: "boxes" }, Mb = { class: "parameters" }, yb = { key: 0 }, vh = window.Vue.ref, kb = window.Vue.watch, Zb = /* @__PURE__ */ ob({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: i }) {
    const r = t, a = Ci(), l = ft.REJECTED, u = Ii(), d = vh(r.situationInfo.status), h = vh(r.situationInfo);
    kb(r, () => {
      d.value = r.situationInfo.status || "", h.value = r.situationInfo;
    });
    const V = (U) => {
      var N, M;
      yp((N = r.situationInfo) == null ? void 0 : N.id, U.toLowerCase()), d.value = U, i("situation-status-changed", U, (M = r.situationInfo) == null ? void 0 : M.id);
    }, g = () => {
      var U;
      a.selectedSituation = (U = r.situationInfo) == null ? void 0 : U.id, a.getSituations();
    };
    return (U, N) => {
      var M, B, A, S, E, F;
      return In(), On(lb, null, [
        Ot("div", fb, [
          Ot("div", hb, [
            tn(Hp, {
              alarm: h.value,
              direction: "horizontal",
              showClear: "",
              "situation-id": r.situationInfo.id,
              onActionClicked: g
            }, null, 8, ["alarm", "situation-id"]),
            dt(u).allowSave ? (In(), On("div", pb, [
              tn(dt(Nn), {
                class: Sl(["btn", { rejected: d.value == dt(l) }]),
                onClick: N[0] || (N[0] = () => V(dt(l)))
              }, {
                default: ab(() => [
                  tn(dt(he), {
                    icon: dt(Zp),
                    "aria-hidden": "true",
                    class: Sl(["icon reject", { rejected: d.value == dt(l) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == dt(l) ? (In(), On("span", mb, zo(dt(l)), 1)) : (In(), On("span", Vb, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Go("", !0)
          ]),
          h.value ? (In(), On("div", wb, [
            Ot("div", {
              class: Sl(["severity-line", [`${(B = (M = h.value) == null ? void 0 : M.severity) == null ? void 0 : B.toLowerCase()}-bg dark`]])
            }, null, 2),
            Ot("div", vb, [
              Ot("div", Tb, [
                Ot("div", null, [
                  sb(" Situation - " + zo((A = h.value) == null ? void 0 : A.id) + " - affecting " + zo(dt(me.exports.size)(dt(me.exports.groupBy)((S = h.value) == null ? void 0 : S.alarms, "nodeId"))) + " node ", 1),
                  h.value.alarms ? (In(), On("span", gb, "having " + zo(h.value.alarms.length) + " alarms ", 1)) : Go("", !0)
                ]),
                tn(bp, {
                  severity: (E = h.value) == null ? void 0 : E.severity
                }, null, 8, ["severity"])
              ]),
              Ot("span", {
                innerHTML: h.value.description
              }, null, 8, Ub),
              Rb,
              Ot("div", Nb, [
                tn(vl, {
                  label: "First Event",
                  info: dt(yn)(h.value.firstEventTime)
                }, null, 8, ["info"]),
                tn(vl, {
                  label: "Last Event",
                  info: dt(yn)(h.value.lastEventTime)
                }, null, 8, ["info"]),
                tn(vl, {
                  label: "Reduction Key",
                  info: h.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Ot("div", Mb, [
              tn(qM, {
                alarms: (F = h.value) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Go("", !0)
        ]),
        h.value.alarms && h.value.alarms.length > 0 ? (In(), On("div", yb, [
          tn(tb, {
            alarms: h.value.alarms,
            "situation-id": h.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Go("", !0)
      ], 64);
    };
  }
});
const Jb = /* @__PURE__ */ Se(Zb, [["__scopeId", "data-v-1a89b405"]]);
const bb = window.Vue.openBlock, Eb = window.Vue.createElementBlock, Sb = window.Vue.createElementVNode;
var Fb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Ab = {}, Wb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cb = /* @__PURE__ */ Sb("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), xb = [
  Cb
];
function Bb(t, i) {
  return bb(), Eb("svg", Wb, xb);
}
var $p = /* @__PURE__ */ Fb(Ab, [["render", Bb]]);
const Db = window.Vue.watch, Ib = window.Vue.onBeforeUnmount, Ob = window.Vue.ref, Qb = window.Vue.onMounted, zb = (t) => {
  const i = Ob(!1);
  let r = !1;
  const a = (d) => {
    t(d), r = !1;
  };
  function l(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", l);
  };
  return Qb(() => {
    const d = Db(i, (h) => {
      window && h ? window.addEventListener("resize", l) : u();
    }, {
      immediate: !0
    });
    Ib(() => {
      d(), u();
    });
  }), i;
}, Gb = window.Vue.watch, Yb = window.Vue.onBeforeUnmount, _b = window.Vue.ref, Hb = window.Vue.onMounted, Pb = (t, i) => {
  const r = _b(!1), a = (d) => {
    d.target === window && i(d);
  }, l = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((g) => g && g.contains(d.target)) || i(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return Hb(() => {
    const d = Gb(r, (h) => {
      document && window && h ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : u();
    }, {
      immediate: !0
    });
    Yb(() => {
      d(), u();
    });
  }), r;
}, jb = window.Vue.watch, Xb = window.Vue.onBeforeUnmount, Lb = window.Vue.ref, Kp = (t, i) => {
  const r = Lb(!1);
  let a = !1;
  const l = (V) => {
    i(V), a = !1;
  };
  function u(V) {
    a || (requestAnimationFrame(() => l(V)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, h = jb([t, r], ([V, g], U) => {
    U && U.length && U[0] && U[0].removeEventListener("scroll", u, !0), g && V ? V.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return Xb(() => {
    h(), d();
  }), r;
}, qb = window.Vue.defineComponent, nn = window.Vue.ref, Th = window.Vue.toRef, $b = window.Vue.onMounted, Kb = window.Vue.watch, gh = window.Vue.computed, eE = window.Vue.nextTick, Uh = window.Vue.openBlock, Rh = window.Vue.createElementBlock, Nh = window.Vue.renderSlot, tE = window.Vue.normalizeClass, nE = window.Vue.normalizeStyle, rE = window.Vue.createCommentVNode;
var iE = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const oE = {
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
}, aE = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, sE = qb({
  emits: aE,
  props: oE,
  setup(t, i) {
    const r = nn(), a = nn(), l = Th(t, "open"), u = Th(t, "noExpand"), d = nn("auto"), h = nn(), V = nn(t.triggerId || se("feather-menu-trigger")), g = nn(se("feather-menu-dropdown")), U = nn(""), N = nn("");
    $b(() => {
      h.value = window;
    });
    const M = nn(!1), B = () => ({
      height: h.value.innerHeight,
      width: h.value.innerWidth,
      left: 0,
      top: 0
    }), A = () => {
      if (!a.value)
        return;
      const J = r.value.getBoundingClientRect();
      M.value = !0, d.value = "auto", eE(() => {
        let { height: X, width: ee } = a.value.getBoundingClientRect();
        const L = B(), Ie = L.height, Le = L.width;
        t.fill && ee < J.width ? (d.value = J.width + "px", ee = J.width) : d.value = ee + "px";
        let Ve = 0;
        Ie - J.bottom < X && J.top >= X ? (Ve = J.top - X, t.cover && (Ve += J.height)) : (Ve = J.bottom, t.cover && (Ve -= J.height));
        let we = t.right ? J.right - ee : J.left;
        !t.right && J.right >= ee && Le - J.left < ee && (we = J.right - ee), t.right && J.right <= ee && Le - J.left > ee && (we = J.left), N.value = `${we}px`, U.value = `${Ve}px`, M.value = !1;
      });
    }, E = Pb(r, (J) => {
      i.emit("outside-click", J);
    }), F = zb(A), D = Kp(h, A);
    Kb([l, a], ([J, X]) => {
      J && X && A(), E.value = J, F.value = J, D.value = J;
    });
    const C = gh(() => {
      const J = {
        id: V.value,
        "aria-haspopup": "true"
      };
      return l.value && (J["aria-controls"] = g.value), u.value || (J["aria-expanded"] = l.value ? "true" : "false"), J;
    }), G = gh(() => ({
      click: (J) => {
        i.emit("trigger-click", J);
      }
    }));
    return {
      positionTop: U,
      positionLeft: N,
      triggerId: V,
      triggerAttrs: C,
      triggerListeners: G,
      menuId: g,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: A,
      calculating: M
    };
  }
}), lE = ["data-ref-id"], cE = ["data-ref-id", "id"];
function uE(t, i, r, a, l, u) {
  return Uh(), Rh("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    Nh(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (Uh(), Rh("div", {
      key: 0,
      class: tE(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: nE({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      Nh(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, cE)) : rE("", !0)
  ], 8, lE);
}
var em = /* @__PURE__ */ iE(sE, [["render", uE], ["__scopeId", "data-v-f75af406"]]);
const dE = window.Vue.defineComponent, fE = window.Vue.openBlock, hE = window.Vue.createElementBlock, pE = window.Vue.normalizeClass, mE = window.Vue.pushScopeId, VE = window.Vue.popScopeId, Pl = window.Vue.createElementVNode;
var wE = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const vE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, TE = {
  click: (t) => !0
}, gE = dE({
  emits: TE,
  props: vE,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), tm = (t) => (mE("data-v-07e020f5"), t = t(), VE(), t), UE = /* @__PURE__ */ tm(() => /* @__PURE__ */ Pl("div", { class: "track" }, null, -1)), RE = /* @__PURE__ */ tm(() => /* @__PURE__ */ Pl("div", { class: "switcher" }, [
  /* @__PURE__ */ Pl("div", { class: "switch-circle" })
], -1)), NE = [
  UE,
  RE
];
function ME(t, i, r, a, l, u) {
  return fE(), hE("div", {
    class: pE(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: i[0] || (i[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, NE, 2);
}
var yE = /* @__PURE__ */ wE(gE, [["render", ME], ["__scopeId", "data-v-07e020f5"]]), kE = Object.defineProperty, ZE = Object.defineProperties, JE = Object.getOwnPropertyDescriptors, Mh = Object.getOwnPropertySymbols, bE = Object.prototype.hasOwnProperty, EE = Object.prototype.propertyIsEnumerable, yh = (t, i, r) => i in t ? kE(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, kh = (t, i) => {
  for (var r in i || (i = {}))
    bE.call(i, r) && yh(t, r, i[r]);
  if (Mh)
    for (var r of Mh(i))
      EE.call(i, r) && yh(t, r, i[r]);
  return t;
}, Zh = (t, i) => ZE(t, JE(i));
const wc = window.Vue.defineComponent, Qn = window.Vue.h, SE = window.Vue.openBlock, FE = window.Vue.createElementBlock, AE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var nm = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const WE = {
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
}, CE = wc({
  inheritAttrs: !1,
  props: WE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Qn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Qn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Qn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Qn(Xn);
    if (this.asLi)
      return Qn("li", Zh(kh({}, this.$attrs), {
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
    const u = Qn("a", Zh(kh({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return Qn("li", {}, [u]);
  }
});
var Oi = /* @__PURE__ */ nm(CE, [["__scopeId", "data-v-7c46b2b3"]]);
wc({
  components: {
    FeatherListItem: Oi
  }
});
const xE = {}, BE = { class: "feather-list" };
function DE(t, i) {
  return SE(), FE("ul", BE, [
    AE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var vc = /* @__PURE__ */ nm(xE, [["render", DE], ["__scopeId", "data-v-941a1d50"]]);
const IE = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, OE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
wc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: IE,
  props: OE,
  computed: {
    labelId() {
      return se("switch-label");
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
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: yE, FeatherListItem: Oi }
});
const Ai = function(t, i) {
  if (!t || !i)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), i.scrollTop = t.offsetTop - i.getBoundingClientRect().height + r;
};
var QE = Object.defineProperty, zE = Object.defineProperties, GE = Object.getOwnPropertyDescriptors, Jh = Object.getOwnPropertySymbols, YE = Object.prototype.hasOwnProperty, _E = Object.prototype.propertyIsEnumerable, bh = (t, i, r) => i in t ? QE(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, jl = (t, i) => {
  for (var r in i || (i = {}))
    YE.call(i, r) && bh(t, r, i[r]);
  if (Jh)
    for (var r of Jh(i))
      _E.call(i, r) && bh(t, r, i[r]);
  return t;
}, HE = (t, i) => zE(t, GE(i));
const rm = window.Vue.defineComponent, Hn = window.Vue.resolveComponent, ra = window.Vue.openBlock, Eh = window.Vue.createBlock, ia = window.Vue.mergeProps, Pn = window.Vue.withCtx, im = window.Vue.createElementBlock, PE = window.Vue.Fragment, jE = window.Vue.renderList, XE = window.Vue.createTextVNode, LE = window.Vue.toDisplayString, qE = window.Vue.computed, Sh = window.Vue.toRef, wi = window.Vue.createVNode, Fh = window.Vue.toHandlers, $E = window.Vue.renderSlot, KE = window.Vue.normalizeClass, eS = window.Vue.createElementVNode;
var om = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const tS = rm({
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
      return se("feather-select-active");
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
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        Ai(i, this.$refs.list.$el);
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
    FeatherList: vc,
    FeatherListItem: Oi
  }
});
function nS(t, i, r, a, l, u) {
  const d = Hn("FeatherListItem"), h = Hn("FeatherList");
  return ra(), Eh(h, ia(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Pn(() => [
      (ra(!0), im(PE, null, jE(t.options, (V, g) => (ra(), Eh(d, {
        key: V[t.textProp],
        "as-li": "",
        id: t.getId(g),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(g),
        selected: t.isSelected(g),
        onClick: (U) => t.select(V)
      }, {
        default: Pn(() => [
          XE(LE(V[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var rS = /* @__PURE__ */ om(tS, [["render", nS], ["__scopeId", "data-v-eae820da"]]);
const iS = HE(jl(jl({}, Wp), ya), {
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
}), oS = {
  "update:modelValue": (t) => !0
}, aS = rm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: oS,
  props: iS,
  setup(t, i) {
    ka(t), Cp(t);
    const r = qE(() => se("feather-select-input")), { validate: a } = Na(r, Sh(t, "modelValue"), t.label, t.schema, Sh(t, "error"));
    return jl({
      inputId: r,
      validate: a
    }, Ma(i.attrs));
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
      return se("feather-select-description");
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
        const t = this.internalValue, i = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (i && i.length)
          return this.options.indexOf(i[0]);
      }
      return -1;
    },
    icon: () => $p
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
      if (t.keyCode === q.ENTER)
        t.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (t.keyCode === q.ESCAPE)
        this.closeMenu(), t.stopPropagation();
      else if (t.keyCode === q.DOWN)
        t.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (t.keyCode === q.UP)
        t.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (t.keyCode === q.HOME)
        t.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (t.keyCode === q.END)
        t.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const i = String.fromCharCode(t.keyCode);
        this.charsSoFar += i, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      bi(this.delayTimeout), this.delayTimeout = Ji(() => {
        const t = this.options.filter((i) => i[this.textProp] && i[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Ap,
    InputSubText: Ra,
    FeatherMenu: em,
    List: rS,
    FeatherIcon: he
  }
});
function sS(t, i, r, a, l, u) {
  const d = Hn("FeatherIcon"), h = Hn("InputWrapper"), V = Hn("List"), g = Hn("FeatherMenu"), U = Hn("InputSubText");
  return ra(), im("div", ia(t.inherittedAttrs, { class: "feather-select-container" }), [
    wi(g, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Pn((N) => [
        wi(h, ia({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, N.attrs, Fh(N.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: Pn(() => [
            $E(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: Pn(() => [
            wi(d, {
              class: KE(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Pn(() => [
            eS("input", ia(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Fh(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Pn(() => [
        wi(V, {
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
    wi(U, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var lS = /* @__PURE__ */ om(aS, [["render", sS], ["__scopeId", "data-v-ecb32d90"]]);
const cS = window.Vue.openBlock, uS = window.Vue.createElementBlock, am = window.Vue.createElementVNode;
var dS = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const fS = {}, hS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pS = /* @__PURE__ */ am("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), mS = /* @__PURE__ */ am("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), VS = [
  pS,
  mS
];
function wS(t, i) {
  return cS(), uS("svg", hS, VS);
}
var vS = /* @__PURE__ */ dS(fS, [["render", wS]]);
const oa = window.Vue.openBlock, Xl = window.Vue.createElementBlock, sm = window.Vue.createElementVNode, TS = window.Vue.defineComponent, zn = window.Vue.ref, gS = window.Vue.provide, Ah = window.Vue.computed, US = window.Vue.onUnmounted, Wh = window.Vue.toRef, RS = window.Vue.resolveComponent, NS = window.Vue.Fragment, MS = window.Vue.createBlock, yS = window.Vue.Teleport, Ch = window.Vue.createVNode, kS = window.Vue.Transition, ZS = window.Vue.withCtx, JS = window.Vue.normalizeClass, bS = window.Vue.normalizeStyle, ES = window.Vue.toDisplayString, SS = window.Vue.createCommentVNode, FS = window.Vue.renderSlot, Fl = window.Vue.nextTick;
var lm = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const AS = {}, WS = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, CS = /* @__PURE__ */ sm("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), xS = [
  CS
];
function BS(t, i) {
  return oa(), Xl("svg", WS, xS);
}
var DS = /* @__PURE__ */ lm(AS, [["render", BS]]), xe = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(xe || {}), on = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(on || {});
const IS = (t, i, r, a = 9) => {
  const l = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= i.height + a && d.push(xe.top), l >= i.height + a && d.push(xe.bottom);
  const h = [];
  u >= i.width + a && h.push(xe.right), t.left >= i.width + a && h.push(xe.left);
  let V = [...h, ...d];
  return (r === xe.top || r === xe.bottom) && (V = [...d, ...h]), V.indexOf(r) > -1 ? r : V.length ? V[0] : r;
}, OS = (t, i, r, a, l = 28) => {
  if (t === xe.left || t === xe.right)
    return on.center;
  const u = i.left + i.width / 2, d = window.innerWidth - i.right, h = [], V = u, g = d + i.width / 2, U = r.width - l, N = r.width / 2;
  return V >= N && g >= N && h.push(on.center), g >= U && h.push(on.left), V >= U && h.push(on.right), h.indexOf(a) > -1 ? a : h.length ? h[0] : a;
}, QS = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => xe.top
  },
  pointerAlignment: {
    type: String,
    default: () => on.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, zS = TS({
  props: QS,
  setup(t) {
    const i = zn(!1), r = zn(!1), a = se("feather-tooltip-trigger"), l = se("feather-tooltip"), u = "data-feather-tooltip";
    gS("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      bi(d), i.value || (d = Ji(S, t.enterDelay));
    }, V = () => {
      bi(d), d = Ji(E, t.exitDelay);
    }, g = (Ve) => {
      Ve.keyCode === q.ESCAPE && (Ve.preventDefault(), E(!0));
    }, U = Ah(() => ({
      [u]: a,
      "aria-describedby": l
    })), N = {
      mouseenter: h,
      mouseleave: V,
      focus: h,
      blur: V,
      keydown: g
    }, M = zn(document), B = Kp(M, () => E(!0));
    US(() => E(!0));
    const A = () => document.getElementById(l), S = () => {
      r.value = !1, i.value = !0, Fl(() => {
        const Ve = A();
        Le(Ve), i.value = !1, Fl(() => {
          r.value = !0, i.value = !0, B.value = !0;
        });
      });
    }, E = (Ve = !1) => {
      X.value = "", J.value = "", ee.value = "", L.value = "", i.value = !1, Ve && (r.value = !1), B.value = !1;
    }, F = Wh(t, "placement"), D = Wh(t, "pointerAlignment"), C = 8, G = 24, J = zn(""), X = zn(""), ee = zn(""), L = zn(""), Ie = Ah(() => L.value ? "p-" + L.value : !1), Le = (Ve) => {
      const we = document.querySelector(`[${u}=${a}]`);
      if (!we) {
        console.log("trigger not found");
        return;
      }
      Fl(() => {
        const Te = we.getBoundingClientRect(), Ne = Ve.getBoundingClientRect(), le = IS(Te, Ne, F.value, C), Fe = OS(le, Te, Ne, D.value, G);
        ee.value = Fe.toString(), L.value = le.toString();
        let Ae = 0, _e = 0;
        if ((le === xe.left || le === xe.right) && (Ae = Te.top + Te.height / 2 - Ne.height / 2, le === xe.left && (_e = Te.left - Ne.width - C), le === xe.right && (_e = Te.right)), le === xe.top || le === xe.bottom) {
          Ae = Te.top - Ne.height - C, le === xe.bottom && (Ae = Te.bottom);
          const Qr = Te.left + Te.width / 2;
          switch (Fe) {
            case on.center:
              _e = Qr - Ne.width / 2;
              break;
            case on.left:
              _e = Qr - G;
              break;
            case on.right:
              _e = Qr - Ne.width + G;
              break;
          }
        }
        J.value = Ae.toString() + "px", X.value = _e.toString() + "px";
      });
    };
    return {
      attrs: U,
      listeners: N,
      show: i,
      animate: r,
      alignmentClass: ee,
      placementClass: Ie,
      top: J,
      left: X,
      tooltipID: l
    };
  },
  components: {
    Pointer: DS
  }
}), GS = ["id"];
function YS(t, i, r, a, l, u) {
  const d = RS("Pointer");
  return oa(), Xl(NS, null, [
    (oa(), MS(yS, { to: "body" }, [
      Ch(kS, { css: t.animate }, {
        default: ZS(() => [
          t.show ? (oa(), Xl("div", {
            key: 0,
            class: JS(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: bS({ left: t.left, top: t.top })
          }, [
            sm("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, ES(t.title), 9, GS),
            Ch(d, { class: "tooltip-pointer" })
          ], 6)) : SS("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    FS(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var xh = /* @__PURE__ */ lm(zS, [["render", YS], ["__scopeId", "data-v-3da6b22e"]]);
const _S = window.Vue.defineComponent, Yo = window.Vue.unref, Bh = window.Vue.toHandlers, Dh = window.Vue.mergeProps, Ih = window.Vue.createElementVNode, Oh = window.Vue.withCtx, Qh = window.Vue.createVNode, HS = window.Vue.normalizeClass, PS = window.Vue.normalizeStyle, zh = window.Vue.openBlock, Gh = window.Vue.createElementBlock, jS = window.Vue.createCommentVNode, XS = window.Vue.Fragment, LS = /* @__PURE__ */ _S({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(t) {
    const i = t, r = (l, u) => l && u ? (Number(u) - Number(l)) * i.proportion : 0, a = (l) => l ? (Number(l) - Number(i.minStart)) * i.proportion : 0;
    return (l, u) => (zh(), Gh(XS, null, [
      Qh(Yo(xh), {
        title: Yo(yn)(t.alarm.firstEventTime)
      }, {
        default: Oh(({ attrs: d, on: h }) => [
          Ih("div", Dh({ class: "circle" }, d, Bh(h), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: a(t.alarm.firstEventTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      t.alarm.lastEventTime !== t.alarm.firstEventTime ? (zh(), Gh("div", {
        key: 0,
        class: HS(["line", [`${t.alarm.severity.toLowerCase()}-bg dark`]]),
        style: PS({
          width: r(t.alarm.firstEventTime, t.alarm.lastEventTime) + "px"
        })
      }, null, 6)) : jS("", !0),
      Qh(Yo(xh), {
        title: Yo(yn)(t.alarm.lastEventTime)
      }, {
        default: Oh(({ attrs: d, on: h }) => [
          Ih("div", Dh({ class: "circle" }, d, Bh(h), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const qS = /* @__PURE__ */ Se(LS, [["__scopeId", "data-v-9e17819d"]]), $S = window.Vue.openBlock, KS = window.Vue.createElementBlock, cm = window.Vue.createElementVNode;
var eF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const tF = {}, nF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rF = /* @__PURE__ */ cm("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), iF = /* @__PURE__ */ cm("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), oF = [
  rF,
  iF
];
function aF(t, i) {
  return $S(), KS("svg", nF, oF);
}
var sF = /* @__PURE__ */ eF(tF, [["render", aF]]);
const lF = window.Vue.defineComponent, cF = window.Vue.normalizeClass, ze = window.Vue.createElementVNode, Nr = window.Vue.toDisplayString, wn = window.Vue.unref, _o = window.Vue.createVNode, uF = window.Vue.createTextVNode, Yh = window.Vue.renderList, Al = window.Vue.Fragment, Mr = window.Vue.openBlock, yr = window.Vue.createElementBlock, dF = window.Vue.createCommentVNode, fF = window.Vue.pushScopeId, hF = window.Vue.popScopeId, pF = (t) => (fF("data-v-40347655"), t = t(), hF(), t), mF = { class: "section detail" }, VF = { class: "id" }, wF = {
  key: 0,
  class: "section"
}, vF = /* @__PURE__ */ pF(() => /* @__PURE__ */ ze("div", { class: "id" }, "Alarms", -1)), TF = { class: "action-btns" }, gF = { class: "zoom" }, UF = /* @__PURE__ */ uF(" Zoom "), RF = { class: "alarms" }, NF = { class: "times" }, MF = { class: "container" }, yF = { class: "ids" }, kF = { class: "timeline-container" }, kr = window.Vue.ref, ZF = window.Vue.watch, JF = /* @__PURE__ */ lF({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(t) {
    var A, S, E, F;
    const i = t, r = 700;
    let a = kr(r);
    const l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = kr(l[0]), d = () => a.value / (Number(g.value) - Number(V.value)), h = kr(i.situation.alarms), V = kr(
      ((S = me.exports.minBy((A = i.situation) == null ? void 0 : A.alarms, "firstEventTime")) == null ? void 0 : S.firstEventTime) || new Date()
    ), g = kr(
      ((F = me.exports.maxBy((E = i.situation) == null ? void 0 : E.alarms, "lastEventTime")) == null ? void 0 : F.lastEventTime) || new Date()
    ), U = kr(d());
    ZF(i, () => {
      var D, C, G, J;
      V.value = ((C = me.exports.minBy((D = i.situation) == null ? void 0 : D.alarms, "firstEventTime")) == null ? void 0 : C.firstEventTime) || new Date(), g.value = ((J = me.exports.maxBy((G = i.situation) == null ? void 0 : G.alarms, "lastEventTime")) == null ? void 0 : J.lastEventTime) || new Date(), a.value = r, U.value = d(), h.value = i.situation.alarms, u.value = l[0];
    });
    const N = (D) => {
      if ((D == null ? void 0 : D.id) === 1 && (h.value = i.situation.alarms), (D == null ? void 0 : D.id) === 2) {
        const C = me.exports.groupBy(h.value, "severity"), G = [
          ...C.CRITICAL || [],
          ...C.MAJOR || [],
          ...C.MINOR || [],
          ...C.WARNING || [],
          ...C.NORMAL || [],
          ...C.CLEARED || [],
          ...C.INDETERMINATE || []
        ];
        h.value = G.filter((J) => J);
      }
      if ((D == null ? void 0 : D.id) === 3) {
        const C = me.exports.reverse(
          me.exports.sortBy(
            i.situation.alarms,
            (G) => Number(G.lastEventTime) - Number(G.firstEventTime)
          )
        );
        h.value = C;
      }
    }, M = () => {
      a.value += 100, U.value = d();
    }, B = () => {
      a.value -= 100, U.value = d();
    };
    return (D, C) => {
      var G, J;
      return Mr(), yr(Al, null, [
        ze("div", mF, [
          ze("div", {
            class: cF(["severity-line", [`${(J = (G = i.situation) == null ? void 0 : G.severity) == null ? void 0 : J.toLowerCase()}-bg dark`]])
          }, null, 2),
          ze("div", null, [
            ze("div", VF, "Situation " + Nr(i.situation.id), 1),
            ze("div", null, " Duration: " + Nr(wn(lJ)(new Date(g.value), new Date(V.value))), 1)
          ])
        ]),
        h.value && h.value.length > 0 ? (Mr(), yr("div", wF, [
          vF,
          ze("div", TF, [
            _o(wn(lS), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: u.value,
              "onUpdate:modelValue": [
                C[0] || (C[0] = (X) => u.value = X),
                N
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            ze("div", gF, [
              UF,
              ze("div", null, [
                _o(wn(he), {
                  icon: wn(vS),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                _o(wn(he), {
                  icon: wn(sF),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          ze("div", RF, [
            ze("div", NF, [
              ze("div", null, Nr(wn(yn)(V.value)), 1),
              ze("div", null, Nr(wn(yn)(g.value)), 1)
            ]),
            ze("div", MF, [
              ze("div", yF, [
                (Mr(!0), yr(Al, null, Yh(h.value, (X) => (Mr(), yr("div", {
                  class: "alarm-id",
                  key: X.id
                }, Nr(X.nodeLabel) + " - " + Nr(X.id), 1))), 128))
              ]),
              ze("div", kF, [
                (Mr(!0), yr(Al, null, Yh(h.value, (X) => (Mr(), yr("div", {
                  class: "timeline",
                  key: X.id
                }, [
                  _o(qS, {
                    alarm: X,
                    proportion: U.value,
                    "min-start": V.value,
                    "max-end": g.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : dF("", !0)
      ], 64);
    };
  }
});
const bF = /* @__PURE__ */ Se(JF, [["__scopeId", "data-v-40347655"]]), EF = window.Vue.defineComponent, um = window.Vue.createTextVNode, vi = window.Vue.unref, Zr = window.Vue.withCtx, Gn = window.Vue.createVNode, SF = window.Vue.openBlock, FF = window.Vue.createElementBlock, AF = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WF = {
  key: 0,
  class: "detail"
}, CF = /* @__PURE__ */ um("Details"), xF = /* @__PURE__ */ um("Metrics"), BF = window.Vue.ref, DF = window.Vue.watch, IF = /* @__PURE__ */ EF({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: i }) {
    const r = t, a = Ci(), l = BF(r.alarmInfo), u = (d, h) => {
      i("situation-status-changed", d, h);
    };
    return DF(r, () => {
      l.value = r.alarmInfo;
    }), a.$subscribe((d, h) => {
      const V = h.situations.find(
        (g) => g.id == r.alarmInfo.id
      );
      V && (l.value = V);
    }), (d, h) => l.value ? (SF(), FF("div", WF, [
      Gn(vi(yM), null, {
        tabs: Zr(() => [
          Gn(vi(Cf), null, {
            default: Zr(() => [
              CF
            ]),
            _: 1
          }),
          Gn(vi(Cf), null, {
            default: Zr(() => [
              xF
            ]),
            _: 1
          })
        ]),
        default: Zr(() => [
          Gn(vi(xf), { class: "panel" }, {
            default: Zr(() => [
              Gn(Jb, {
                "situation-info": l.value,
                onSituationStatusChanged: u
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Gn(vi(xf), { class: "panel" }, {
            default: Zr(() => [
              Gn(bF, { situation: l.value }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : AF("", !0);
  }
});
const OF = /* @__PURE__ */ Se(IF, [["__scopeId", "data-v-c1d73bd6"]]), QF = window.Vue.openBlock, zF = window.Vue.createElementBlock, GF = window.Vue.createElementVNode;
var YF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const _F = {}, HF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PF = /* @__PURE__ */ GF("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), jF = [
  PF
];
function XF(t, i) {
  return QF(), zF("svg", HF, jF);
}
var LF = /* @__PURE__ */ YF(_F, [["render", XF]]);
const qF = window.Vue.openBlock, $F = window.Vue.createElementBlock, dm = window.Vue.createElementVNode;
var KF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const eA = {}, tA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nA = /* @__PURE__ */ dm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), rA = /* @__PURE__ */ dm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), iA = [
  nA,
  rA
];
function oA(t, i) {
  return qF(), $F("svg", tA, iA);
}
var aA = /* @__PURE__ */ KF(eA, [["render", oA]]);
const sA = window.Vue.openBlock, lA = window.Vue.createElementBlock, cA = window.Vue.createElementVNode;
var uA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const dA = {}, fA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hA = /* @__PURE__ */ cA("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), pA = [
  hA
];
function mA(t, i) {
  return sA(), lA("svg", fA, pA);
}
var VA = /* @__PURE__ */ uA(dA, [["render", mA]]);
const wA = window.Vue.openBlock, vA = window.Vue.createElementBlock, TA = window.Vue.createElementVNode;
var gA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const UA = {}, RA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NA = /* @__PURE__ */ TA("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), MA = [
  NA
];
function yA(t, i) {
  return wA(), vA("svg", RA, MA);
}
var kA = /* @__PURE__ */ gA(UA, [["render", yA]]);
const ZA = window.Vue.defineComponent, vn = window.Vue.unref, Ho = window.Vue.normalizeClass, Po = window.Vue.createVNode, JA = window.Vue.openBlock, bA = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const EA = { class: "paginator" }, SA = /* @__PURE__ */ ZA({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: i }) {
    const r = t, a = (l) => {
      l >= 0 && l <= r.totalPages - 1 && i("go-to-page", l);
    };
    return (l, u) => (JA(), bA("div", EA, [
      Po(vn(he), {
        icon: vn(LF),
        "aria-hidden": "true",
        class: Ho(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      Po(vn(he), {
        icon: vn(VA),
        "aria-hidden": "true",
        class: Ho(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Po(vn(he), {
        icon: vn(kA),
        "aria-hidden": "true",
        class: Ho(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Po(vn(he), {
        icon: vn(aA),
        "aria-hidden": "true",
        class: Ho(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const FA = /* @__PURE__ */ Se(SA, [["__scopeId", "data-v-40758818"]]);
const AA = window.Vue.openBlock, WA = window.Vue.createElementBlock, CA = window.Vue.createElementVNode;
var xA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const BA = {}, DA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, IA = /* @__PURE__ */ CA("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), OA = [
  IA
];
function QA(t, i) {
  return AA(), WA("svg", DA, OA);
}
var zA = /* @__PURE__ */ xA(BA, [["render", QA]]);
const GA = window.Vue.openBlock, YA = window.Vue.createElementBlock, Tc = window.Vue.createElementVNode;
var _A = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const HA = {}, PA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jA = /* @__PURE__ */ Tc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), XA = /* @__PURE__ */ Tc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), LA = /* @__PURE__ */ Tc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), qA = [
  jA,
  XA,
  LA
];
function $A(t, i) {
  return GA(), YA("svg", PA, qA);
}
var KA = /* @__PURE__ */ _A(HA, [["render", $A]]), eW = Object.defineProperty, tW = Object.defineProperties, nW = Object.getOwnPropertyDescriptors, _h = Object.getOwnPropertySymbols, rW = Object.prototype.hasOwnProperty, iW = Object.prototype.propertyIsEnumerable, Hh = (t, i, r) => i in t ? eW(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, pt = (t, i) => {
  for (var r in i || (i = {}))
    rW.call(i, r) && Hh(t, r, i[r]);
  if (_h)
    for (var r of _h(i))
      iW.call(i, r) && Hh(t, r, i[r]);
  return t;
}, oW = (t, i) => tW(t, nW(i));
const Or = window.Vue.defineComponent, re = window.Vue.openBlock, Ze = window.Vue.createElementBlock, tt = window.Vue.createElementVNode, Wt = window.Vue.toDisplayString, Mt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, Nt = window.Vue.createBlock, Ge = window.Vue.withCtx, Ar = window.Vue.Fragment, ki = window.Vue.renderList, nt = window.Vue.createVNode, gc = window.Vue.withModifiers, jn = window.Vue.normalizeClass, Ll = window.Vue.renderSlot, fm = window.Vue.createTextVNode, aW = window.Vue.pushScopeId, sW = window.Vue.popScopeId, hm = window.Vue.reactive, pm = window.Vue.nextTick, Wl = window.Vue.markRaw, Cl = window.Vue.toRef, Ph = window.Vue.computed, lW = window.Vue.toRefs, Jr = window.Vue.ref, xl = window.Vue.mergeProps, jh = window.Vue.toHandlers, jo = window.Vue.withDirectives, Xo = window.Vue.vShow;
var Sa = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, Uc = {
  query: {
    type: String
  }
}, $n = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const cW = Or({
  mixins: [],
  props: pt(pt({
    text: {
      type: String,
      required: !0
    }
  }, Sa), Uc),
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
}), uW = {
  key: 0,
  class: "highlight"
}, dW = { key: 1 };
function fW(t, i, r, a, l, u) {
  return re(), Ze("span", null, [
    tt("span", null, Wt(t.beginning), 1),
    t.highlighted ? (re(), Ze("span", uW, Wt(t.highlighted), 1)) : Mt("", !0),
    t.end ? (re(), Ze("span", dW, Wt(t.end), 1)) : Mt("", !0)
  ]);
}
var mm = /* @__PURE__ */ $n(cW, [["render", fW], ["__scopeId", "data-v-8abe2492"]]);
const hW = Or({
  emits: ["select", "deselect"],
  props: pt(pt({
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
  }, Sa), Uc),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        Ai(i, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const i = this.value;
      return i && i.length ? i.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
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
    FeatherList: vc,
    FeatherListItem: Oi,
    Highlighter: mm
  }
}), pW = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function mW(t, i, r, a, l, u) {
  const d = Me("Highlighter"), h = Me("FeatherListItem"), V = Me("FeatherList");
  return re(), Nt(V, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (re(!0), Ze(Ar, null, ki(t.items, (g, U) => (re(), Ze(Ar, {
        key: g[t.textProp]
      }, [
        nt(h, {
          "as-li": "",
          id: t.getId(U),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(g),
          highlighted: t.isActive(U),
          selected: t.isSelected(g),
          onClick: gc((N) => t.select(g), ["stop"])
        }, {
          default: Ge(() => [
            nt(d, {
              highlight: t.highlight,
              query: t.query,
              text: g[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            g._new ? (re(), Ze("span", pW, Wt(t.newLabel), 1)) : Mt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && g._new ? (re(), Ze("li", {
          role: "presentation",
          key: g[t.textProp] + "hr",
          class: "hr"
        })) : Mt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var VW = /* @__PURE__ */ $n(hW, [["render", mW], ["__scopeId", "data-v-f623434a"]]);
const wW = Or({
  emits: ["select"],
  props: pt(pt({
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
  }, Sa), Uc),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        Ai(i, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((t, i) => t.align && t.align.toLowerCase() === "right" ? `tr${i + 1}` : t.align && t.align.toLowerCase() === "center" ? `tc${i + 1}` : `tl${i + 1}`);
    }
  },
  methods: {
    isSelected(t) {
      const i = this.value;
      return this.value && this.value.length ? i.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeRow === t;
    },
    isActiveCell(t, i) {
      return this.activeRow === t && this.activeCol === i;
    },
    getId(t, i) {
      return t === this.activeRow && this.activeCol === i ? this.activeId : "";
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    Highlighter: mm
  }
}), vW = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, TW = ["aria-multiselectable"], gW = { role: "row" }, UW = ["aria-selected", "onClick"], RW = ["id", "aria-selected"], NW = { key: 1 };
function MW(t, i, r, a, l, u) {
  const d = Me("Highlighter");
  return re(), Ze("div", vW, [
    tt("table", {
      class: jn(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      tt("thead", null, [
        tt("tr", gW, [
          (re(!0), Ze(Ar, null, ki(t.config, (h) => (re(), Ze("th", {
            key: h.title
          }, Wt(h.title), 1))), 128))
        ])
      ]),
      tt("tbody", null, [
        (re(!0), Ze(Ar, null, ki(t.items, (h, V) => (re(), Ze("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: jn({ focus: t.isActive(V), selected: t.isSelected(h) }),
          onClick: gc((g) => t.select(h), ["stop"])
        }, [
          (re(!0), Ze(Ar, null, ki(t.config, (g, U) => (re(), Ze("td", {
            key: h[t.textProp] + g.prop,
            id: t.getId(V, U),
            "aria-selected": t.isSelected(h),
            class: jn({ "focus-cell": t.isActiveCell(V, U) })
          }, [
            g.prop === t.textProp ? (re(), Nt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[g.prop]
            }, null, 8, ["highlight", "query", "text"])) : (re(), Ze("p", NW, Wt(h[g.prop]), 1))
          ], 10, RW))), 128))
        ], 10, UW))), 128))
      ])
    ], 10, TW)
  ], 512);
}
var yW = /* @__PURE__ */ $n(wW, [["render", MW], ["__scopeId", "data-v-58c88fd1"]]);
const kW = Or({
  components: {
    FeatherList: vc,
    FeatherListItem: Oi
  }
});
function ZW(t, i, r, a, l, u) {
  const d = Me("FeatherListItem"), h = Me("FeatherList");
  return re(), Nt(h, { class: "result-list" }, {
    default: Ge(() => [
      nt(d, { "as-li": "" }, {
        default: Ge(() => [
          Ll(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var JW = /* @__PURE__ */ $n(kW, [["render", ZW], ["__scopeId", "data-v-06b752c6"]]);
const bW = Or({
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
    FeatherIcon: he,
    Cancel: dc,
    BaseChip: Ja,
    BaseChipLabel: ba,
    BaseChipPreIcon: Ea
  }
});
function EW(t, i, r, a, l, u) {
  const d = Me("FeatherIcon"), h = Me("BaseChipPreIcon"), V = Me("BaseChipLabel"), g = Me("Cancel"), U = Me("BaseChip");
  return re(), Nt(U, {
    class: jn(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: Ge(() => [
      t.showPreIcon ? (re(), Nt(h, { key: 0 }, {
        default: Ge(() => {
          var N, M;
          return [
            nt(d, {
              icon: (N = t.pre) == null ? void 0 : N.icon,
              title: (M = t.pre) == null ? void 0 : M.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Mt("", !0),
      nt(V, null, {
        default: Ge(() => [
          fm(Wt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? Mt("", !0) : (re(), Ze("span", {
        key: 1,
        class: "chip-delete",
        onClick: i[0] || (i[0] = gc((...N) => t.handleClick && t.handleClick(...N), ["stop"]))
      }, [
        nt(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: Ge(() => [
            nt(g)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var SW = /* @__PURE__ */ $n(bW, [["render", EW], ["__scopeId", "data-v-e0fc6ac0"]]);
const FW = {}, AW = (t) => (aW("data-v-aa720e06"), t = t(), sW(), t), WW = { class: "spinner-container" }, CW = /* @__PURE__ */ AW(() => /* @__PURE__ */ tt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ tt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), xW = [
  CW
];
function BW(t, i) {
  return re(), Ze("div", WW, xW);
}
var DW = /* @__PURE__ */ $n(FW, [["render", BW], ["__scopeId", "data-v-aa720e06"]]), Fa = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(Fa || {});
const Vm = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, IW = pt(pt(pt({
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
    default: (t, i, r) => t[r.textProp].toString().toLowerCase() === i.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (t) => !!Fa[t]
  },
  labels: {
    type: Object,
    default: () => Vm
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Sa), ya), Wp), OW = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, QW = (t, i, r, a) => {
  if (r.toLowerCase() === Fa.multi) {
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
        if (u.value && u.value.filter((g) => g[t.textProp.value] === h[t.textProp.value]).length)
          return;
        const V = u.value ? [...u.value, h] : [h];
        a("update:modelValue", V), d(V);
      },
      removeItem(h) {
        const V = u.value.findIndex((g) => {
          if (h[t.textProp.value] === g[t.textProp.value])
            return !0;
        });
        debugger;
        if (V > -1) {
          const g = u.value.slice(0);
          g.splice(V, 1), a("update:modelValue", g), d(g), t.input.value.focus();
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
    selectItem(u) {
      i.active.row = -1, t.forceCloseResults.value = !0, u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (i.active.row > -1) {
        const u = t.internalResults.value[i.active.row];
        u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
      }
    }
  };
}, zW = () => {
  const t = hm({
    row: -1
  }), i = (u) => {
    pm(() => {
      t.row = u;
    });
  }, r = (u, d) => {
    if (u.keyCode === q.DOWN) {
      if (u.preventDefault(), t.row === -1)
        a(), i(0);
      else if (t.row + 1 <= d.length - 1) {
        const h = t.row;
        a(), i(h + 1);
      }
      return !0;
    }
    if (u.keyCode === q.UP) {
      if (u.preventDefault(), t.row === 0)
        a();
      else if (t.row > 0) {
        const h = t.row;
        a(), i(h - 1);
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
}, GW = (t) => {
  const i = hm({
    row: -1,
    col: -1
  }), r = (d, h) => {
    pm(() => {
      i.col = h, i.row = d;
    });
  }, a = (d, h) => {
    if (d.keyCode === q.DOWN) {
      if (d.preventDefault(), i.row === -1)
        l(), r(0, 0);
      else if (i.row + 1 <= h.length - 1) {
        const V = i.row, g = i.col;
        l(), r(V + 1, g);
      }
      return !0;
    }
    if (d.keyCode === q.UP) {
      if (d.preventDefault(), i.row === 0)
        l();
      else if (i.row > 0) {
        const V = i.row, g = i.col;
        l(), r(V - 1, g);
      }
      return !0;
    }
    if (d.keyCode === q.RIGHT && i.row !== -1) {
      if (d.preventDefault(), i.col + 1 <= t.length - 1) {
        const V = i.col, g = i.row;
        l(), r(g, V + 1);
      } else if (i.col <= t.length - 1 && i.row + 1 <= h.length - 1) {
        const V = i.row;
        l(), r(V + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === q.LEFT && i.row !== -1) {
      if (d.preventDefault(), i.col === 0 && i.row === 0)
        return !0;
      if (i.col === 0 && i.row > 0) {
        const V = i.row;
        l(), r(V - 1, t.length - 1);
      } else if (i.col > 0) {
        const V = i.col, g = i.row;
        l(), r(g, V - 1);
      }
      return !0;
    }
    if (d.keyCode === q.END && i.row !== -1) {
      d.preventDefault();
      const V = i.row;
      return l(), r(d.ctrlKey ? h.length - 1 : V, t.length - 1), !0;
    }
    if (d.keyCode === q.HOME && i.row !== -1) {
      d.preventDefault();
      const V = i.row;
      return l(), r(d.ctrlKey ? 0 : V, 0), !0;
    }
    return !1;
  }, l = () => {
    i.row = -1, i.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: i, first: () => {
    l(), r(0, 0);
  } };
}, YW = Or({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: OW,
  props: IW,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Fa.multi;
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
      return se("result-item");
    },
    minCharWarningId() {
      return se("min-char-warning");
    },
    subTextId() {
      return se("feather-autocomplete-description");
    },
    resultsId() {
      return se("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return se("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Wl(zA);
    },
    minCharIcon() {
      return Wl(KA);
    },
    dropdownIcon() {
      return Wl($p);
    },
    inputAttrs() {
      const t = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let i = "";
      return this.activeChipIndex > -1 && (i = this.activeChipId), this.active.row > -1 && this.showResults && (i = this.resultItemId), this.minChar && t.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": t.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": i,
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
      return this.modelValue && this.modelValue.length ? this.modelValue.map((i) => i[this.textProp]).join(", ") : "";
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
        Ai(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, i) {
        t && i && t.length > i.length && this.scrollContainer && this.$nextTick(() => {
          Ai(this.inputRef, this.scrollContainer);
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
      const i = this.$refs.menu;
      t && i.calculatePosition && i.calculatePosition();
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
      return this.activeChipId = se("active-chip"), this.activeChipId;
    },
    setAlert(t) {
      const i = this.$refs.alert;
      i.textContent = t, setTimeout(() => {
        i.textContent = "";
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
      r !== void 0 && (bi(this.typingTimeout), this.typingTimeout = Ji(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const i = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === q.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        i(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === q.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), i();
        return;
      }
      if (t.keyCode === q.ENTER && this.active.row > -1) {
        t.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((t.keyCode === q.ENTER || t.keyCode === q.SPACE || t.keyCode === q.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        t.preventDefault(), this.emitSearch();
        return;
      }
      if (t.keyCode === q.ESCAPE) {
        this.forceCloseResults = !0, r(), i();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        t.keyCode === q.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === q.RIGHT && (t.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === q.DELETE || t.keyCode === q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), i());
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
        const i = t.getBoundingClientRect().width, r = t.parentElement;
        t.scrollWidth <= t.clientWidth && r && i < r.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight}px`;
        });
      }));
    }
  },
  setup(t, i) {
    const r = Ep(Cl(t, "labels"), Vm);
    ka(t), Cp(t);
    let a;
    t.gridConfig ? a = GW(t.gridConfig) : a = zW();
    const l = Cl(t, "id"), u = Ph(() => l.value ? l.value : se("feather-autocomplete-input")), { validate: d } = Na(u, Cl(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: V, textProp: g, allowNew: U, type: N, minChar: M } = lW(t), B = Jr(!1), A = Jr(!1), S = Jr(!1), E = Jr(""), F = Jr([]), D = Jr(), C = Ph(() => D.value), G = () => {
      B.value && !A.value && (E.value && E.value.length >= M.value && i.emit("search", E.value), M.value <= 0 && i.emit("search", E.value || ""), F.value = [], a.reset());
    }, J = QW({
      selectionLimit: h,
      selectionLimitReached: A,
      modelValue: V,
      textProp: g,
      allowNew: U,
      forceCloseResults: S,
      query: E,
      internalResults: F,
      input: C,
      emitSearch: G
    }, a, N.value, i.emit);
    return oW(pt(pt({}, r), Ma(i.attrs)), {
      query: E,
      internalResults: F,
      selectionLimitReached: A,
      forceCloseResults: S,
      hasFocus: B,
      strategy: J,
      emitSearch: G,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: u,
      input: D,
      incomingId: l,
      inputRef: C,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Ap,
    InputSubText: Ra,
    AutocompleteResults: VW,
    AutocompleteResultsGrid: yW,
    Chip: SW,
    MenuMessage: JW,
    FeatherIcon: he,
    FeatherMenu: em,
    Spinner: DW
  }
}), _W = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, HW = ["id"], PW = { "data-ref-id": "feather-autocomplete-no-results" }, jW = { "data-ref-id": "feather-autocomplete-selection-limit" }, XW = { "data-ref-id": "feather-autocomplete-min-char" };
function LW(t, i, r, a, l, u) {
  const d = Me("FeatherIcon"), h = Me("Chip"), V = Me("InputWrapper"), g = Me("AutocompleteResults"), U = Me("AutocompleteResultsGrid"), N = Me("MenuMessage"), M = Me("Spinner"), B = Me("FeatherMenu"), A = Me("InputSubText");
  return re(), Ze("div", xl(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    nt(B, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: jn(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: S, on: E }) => [
        nt(V, xl(pt(pt({}, S), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, jh(E), { ref: "scroll" }), {
          pre: Ge(() => [
            Ll(t.$slots, "pre", {}, () => [
              nt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            nt(d, {
              icon: t.dropdownIcon,
              class: jn(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            tt("div", {
              class: jn(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              tt("div", _W, null, 512),
              tt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Wt(t.selectedDescribedByText), 9, HW),
              (re(!0), Ze(Ar, null, ki(t.modelValueList, (F, D) => jo((re(), Nt(h, {
                key: F[t.textProp],
                role: "button",
                id: D === t.activeChipIndex ? t.activeChipId : null,
                focused: D === t.activeChipIndex,
                disabled: t.disabled,
                text: F[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(F),
                onDelete: (C) => t.removeFromValue(F)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Xo, !t.singleSelect]
              ])), 128)),
              tt("textarea", xl(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, jh(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? Mt("", !0) : jo((re(), Nt(g, {
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
          [Xo, t.showResults]
        ]),
        t.gridConfig ? jo((re(), Nt(U, {
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
          [Xo, t.showResults]
        ]) : Mt("", !0),
        t.showNoResults ? (re(), Nt(N, { key: 2 }, {
          default: Ge(() => [
            tt("span", PW, Wt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : Mt("", !0),
        t.showSelectionLimit ? (re(), Nt(N, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", jW, Wt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Mt("", !0),
        t.minChar ? jo((re(), Nt(N, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", XW, [
              Ll(t.$slots, "min-char", {}, () => [
                fm(Wt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Xo, t.showMinCharWarning]
        ]) : Mt("", !0),
        t.showLoading ? (re(), Nt(M, { key: 5 })) : Mt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    nt(A, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var qW = /* @__PURE__ */ $n(YW, [["render", LW], ["__scopeId", "data-v-43a7e951"]]);
const $W = window.Vue.defineComponent, aa = window.Vue.createElementVNode, Xh = window.Vue.unref, Bl = window.Vue.createVNode, Lo = window.Vue.toDisplayString, KW = window.Vue.renderList, eC = window.Vue.Fragment, Yn = window.Vue.openBlock, br = window.Vue.createElementBlock, qo = window.Vue.createCommentVNode, tC = window.Vue.createBlock, nC = window.Vue.pushScopeId, rC = window.Vue.popScopeId, iC = (t) => (nC("data-v-065b63a3"), t = t(), rC(), t), oC = { class: "list-main" }, aC = /* @__PURE__ */ iC(() => /* @__PURE__ */ aa("h2", null, "Situation List", -1)), sC = { class: "situation-filters" }, lC = {
  key: 0,
  class: "container"
}, cC = { class: "situation-list" }, uC = { key: 0 }, dC = {
  key: 1,
  class: "container"
}, fC = window.Vue.reactive, $o = window.Vue.ref, hC = /* @__PURE__ */ $W({
  __name: "SituationList",
  setup(t) {
    const i = Ci();
    i.getSituations(), i.getNodes();
    const r = 10, a = fC({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), l = $o(!1), u = $o(0), d = $o(1), h = $o(0), V = (S) => {
      u.value = 0, a.situations = S[0], d.value = S.length;
    }, g = (S) => {
      window.scrollTo(0, 0), a.situationSelected = S, a.selectedSituationIndex = i.situations.findIndex(
        (E) => E.id === S
      );
    }, U = (S, E) => {
      const F = a.situations;
      F.forEach((D) => {
        D.id === E && (D.status = S);
      }), a.situations = me.exports.cloneDeep(F);
    }, N = () => {
      a.nodes = i.nodes, a.results = i.nodes;
    };
    i.$subscribe((S, E) => {
      var F;
      E.selectedSituation != -1 ? (a.selectedSituationIndex = i.situations.findIndex(
        (D) => D.id === E.selectedSituation
      ), i.situations[a.selectedSituationIndex] && (a.situationSelected = i.situations[a.selectedSituationIndex].id)) : a.situationSelected = (F = E.situations[0]) == null ? void 0 : F.id, N(), h.value = i.situations.length, a.allSituations = me.exports.chunk(i.situations, r), V(a.allSituations);
    });
    const M = (S) => {
      if (!S)
        return a.nodeSelectedValue = void 0, [];
      l.value = !0, a.results = a.nodes.filter((E) => E.label.toLowerCase().indexOf(S) > -1).map((E) => ({
        _text: E.label,
        id: E.id
      })), l.value = !1;
    }, B = () => {
      if (a.nodeSelectedValue && a.nodeSelectedValue._text) {
        const S = i.situations.map((E) => {
          if (E.alarms.filter(
            (D) => {
              var C;
              return D.nodeLabel === ((C = a.nodeSelectedValue) == null ? void 0 : C._text);
            }
          ).length > 0)
            return E;
        }).filter((E) => E);
        S && (h.value = S.length, a.situations = S, S[0] && S[0].id && g(S[0].id));
      } else
        a.nodeSelectedValue = void 0, h.value = i.situations.length, V(a.allSituations), a.allSituations[0] && a.allSituations[0][0] && g(a.allSituations[0][0].id);
    }, A = (S) => {
      u.value = S, a.situations = a.allSituations[u.value];
    };
    return (S, E) => (Yn(), br("div", oC, [
      aC,
      aa("div", sC, [
        Bl(Xh(qW), {
          class: "map-search",
          label: "Find by node",
          loading: l.value,
          modelValue: a.nodeSelectedValue,
          "onUpdate:modelValue": [
            E[0] || (E[0] = (F) => a.nodeSelectedValue = F),
            B
          ],
          results: a.results,
          type: "single",
          onSearch: M
        }, null, 8, ["loading", "modelValue", "results"])
      ]),
      a.situations && a.situations.length > 0 ? (Yn(), br("div", lC, [
        aa("div", cC, [
          aa("div", null, " Result: " + Lo(a.situations.length) + " of " + Lo(h.value), 1),
          (Yn(!0), br(eC, null, KW(a.situations, (F) => (Yn(), br("div", {
            key: F.id
          }, [
            Bl(FN, {
              "situation-info": F,
              onSituationSelected: g,
              selected: a.situationSelected == F.id
            }, null, 8, ["situation-info", "selected"])
          ]))), 128)),
          a.nodeSelectedValue ? qo("", !0) : (Yn(), br("div", uC, " Page: " + Lo(u.value + 1) + " of " + Lo(d.value), 1)),
          a.nodeSelectedValue ? qo("", !0) : (Yn(), tC(FA, {
            key: 1,
            onGoToPage: A,
            currentPage: u.value,
            totalPages: d.value
          }, null, 8, ["currentPage", "totalPages"]))
        ]),
        Bl(OF, {
          "alarm-info": Xh(i).situations[a.selectedSituationIndex],
          onSituationStatusChanged: U
        }, null, 8, ["alarm-info"])
      ])) : qo("", !0),
      !a.situations || a.situations.length == 0 ? (Yn(), br("div", dC, " No results found ")) : qo("", !0)
    ]));
  }
});
const pC = /* @__PURE__ */ Se(hC, [["__scopeId", "data-v-065b63a3"]]);
var mC = Object.defineProperty, VC = Object.defineProperties, wC = Object.getOwnPropertyDescriptors, Lh = Object.getOwnPropertySymbols, vC = Object.prototype.hasOwnProperty, TC = Object.prototype.propertyIsEnumerable, qh = (t, i, r) => i in t ? mC(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, sa = (t, i) => {
  for (var r in i || (i = {}))
    vC.call(i, r) && qh(t, r, i[r]);
  if (Lh)
    for (var r of Lh(i))
      TC.call(i, r) && qh(t, r, i[r]);
  return t;
}, wm = (t, i) => VC(t, wC(i));
const vm = window.Vue.defineComponent, gC = window.Vue.ref, Zi = window.Vue.computed, UC = window.Vue.reactive, $h = window.Vue.watch, Dl = window.Vue.inject, Tm = window.Vue.resolveComponent, ql = window.Vue.openBlock, gm = window.Vue.createElementBlock, Mn = window.Vue.createElementVNode, RC = window.Vue.createBlock, NC = window.Vue.createCommentVNode, Um = window.Vue.renderSlot, MC = window.Vue.pushScopeId, yC = window.Vue.popScopeId, Il = window.Vue.toRef, Kh = window.Vue.mergeProps, kC = window.Vue.toDisplayString, ZC = window.Vue.createVNode;
var Rm = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const JC = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, bC = vm({
  props: JC,
  setup(t) {
    const i = gC(), r = () => {
      i.value.focus();
    }, a = Zi(() => se("feather-radio-button")), l = UC({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), u = Zi(() => se("radio-label-id")), d = Zi(() => l.first || l.checked ? 0 : -1);
    $h(() => t.disabled, (N) => {
      l.disabled = N;
    }, { immediate: !0 }), $h(() => t.value, (N) => {
      l.value = N;
    }, { immediate: !0 });
    const h = Dl("register", (N) => {
    }), V = Dl("blur", (N) => {
    }), g = Dl("select", (N) => {
    });
    return h(l), {
      labelId: u,
      tabindex: d,
      vm: l,
      blur: V,
      click: () => {
        g(l);
      },
      input: i,
      id: a
    };
  },
  components: {
    FeatherRipple: Xn
  }
}), EC = (t) => (MC("data-v-24790cf0"), t = t(), yC(), t), SC = { class: "layout-container" }, FC = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], AC = { class: "radio hover focus" }, WC = /* @__PURE__ */ EC(() => /* @__PURE__ */ Mn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Mn("svg", { class: "dot" }, [
    /* @__PURE__ */ Mn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), CC = ["id"];
function xC(t, i, r, a, l, u) {
  const d = Tm("feather-ripple");
  return ql(), gm("div", SC, [
    Mn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: t.id,
      "aria-checked": t.vm.checked ? "true" : "false",
      "aria-disabled": t.vm.disabled ? "true" : "false",
      "aria-labelledby": t.labelId,
      tabindex: t.tabindex,
      onClick: i[0] || (i[0] = (...h) => t.click && t.click(...h)),
      onBlur: i[1] || (i[1] = (...h) => t.blur && t.blur(...h)),
      "data-ref-id": "feather-radio"
    }, [
      Mn("div", AC, [
        WC,
        t.vm.disabled ? NC("", !0) : (ql(), RC(d, {
          key: 0,
          center: ""
        }))
      ]),
      Mn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Um(t.$slots, "default", {}, void 0, !0)
      ], 8, CC)
    ], 40, FC)
  ]);
}
var wa = /* @__PURE__ */ Rm(bC, [["render", xC], ["__scopeId", "data-v-24790cf0"]]);
const BC = wm(sa({}, ya), {
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
}), DC = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, IC = vm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: BC,
  emits: DC,
  setup(t, i) {
    ka(t);
    const r = Il(t, "error"), a = Il(t, "modelValue"), l = Zi(() => se("feather-input-description")), u = Zi(() => {
      const d = wm(sa({}, i.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return sa(sa({
      descriptionId: l,
      attrs: u
    }, xp(a, i.emit, t.label, t.schema, Il(t, "error"))), Ma(i.attrs));
  },
  components: {
    InputSubText: Ra
  }
}), OC = ["for"], QC = ["id"];
function zC(t, i, r, a, l, u) {
  const d = Tm("InputSubText");
  return ql(), gm("div", Kh(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Mn("label", {
      for: t.groupId,
      class: "group-label"
    }, kC(t.label), 9, OC),
    Mn("div", Kh(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: i[0] || (i[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      Um(t.$slots, "default", {}, void 0, !0)
    ], 16, QC),
    ZC(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Nm = /* @__PURE__ */ Rm(IC, [["render", zC], ["__scopeId", "data-v-6775aeb9"]]);
const GC = window.Vue.openBlock, YC = window.Vue.createElementBlock, _C = window.Vue.createStaticVNode;
var HC = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const PC = {}, jC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XC = /* @__PURE__ */ _C('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), LC = [
  XC
];
function qC(t, i) {
  return GC(), YC("svg", jC, LC);
}
var $C = /* @__PURE__ */ HC(PC, [["render", qC]]);
const KC = window.Vue.openBlock, ex = window.Vue.createElementBlock, tx = window.Vue.createStaticVNode;
var nx = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const rx = {}, ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ox = /* @__PURE__ */ tx('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), ax = [
  ox
];
function sx(t, i) {
  return KC(), ex("svg", ix, ax);
}
var lx = /* @__PURE__ */ nx(rx, [["render", sx]]);
const cx = window.Vue.openBlock, ux = window.Vue.createElementBlock, dx = window.Vue.createElementVNode;
var fx = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const hx = {}, px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mx = /* @__PURE__ */ dx("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), Vx = [
  mx
];
function wx(t, i) {
  return cx(), ux("svg", px, Vx);
}
var vx = /* @__PURE__ */ fx(hx, [["render", wx]]);
const Tx = window.Vue.openBlock, gx = window.Vue.createElementBlock, Ux = window.Vue.createStaticVNode;
var Rx = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Nx = {}, Mx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yx = /* @__PURE__ */ Ux('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), kx = [
  yx
];
function Zx(t, i) {
  return Tx(), gx("svg", Mx, kx);
}
var Jx = /* @__PURE__ */ Rx(Nx, [["render", Zx]]);
const bx = window.Vue.openBlock, Ex = window.Vue.createElementBlock, Sx = window.Vue.createElementVNode;
var Fx = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Ax = {}, Wx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cx = /* @__PURE__ */ Sx("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), xx = [
  Cx
];
function Bx(t, i) {
  return bx(), Ex("svg", Wx, xx);
}
var Dx = /* @__PURE__ */ Fx(Ax, [["render", Bx]]);
const Rc = () => window.VRouter || Nc, Ix = window.Vue.defineComponent, Re = window.Vue.createElementVNode, Wi = window.Vue.createTextVNode, Xe = window.Vue.unref, rn = window.Vue.createVNode, Ko = window.Vue.withCtx, ep = window.Vue.openBlock, tp = window.Vue.createElementBlock, Ox = window.Vue.createCommentVNode, Qx = window.Vue.pushScopeId, zx = window.Vue.popScopeId, Ct = (t) => (Qx("data-v-0fd6b0cd"), t = t(), zx(), t), Gx = { class: "container" }, Yx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("div", { class: "title" }, "ALEC", -1)), _x = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("div", { class: "description" }, [
  /* @__PURE__ */ Wi(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Re("br"),
  /* @__PURE__ */ Re("strong", null, "Our goal"),
  /* @__PURE__ */ Wi(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), Hx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("h3", null, "Key Benefits:", -1)), Px = { class: "list" }, jx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), Xx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("span", null, "Assist in root cause analysis.", -1)), Lx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), qx = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("span", null, "Easy configuration.", -1)), $x = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), Kx = {
  key: 0,
  class: "optin"
}, eB = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("h3", null, "Enable ALEC for more precise results:", -1)), tB = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), nB = { class: "choices" }, rB = /* @__PURE__ */ Ct(() => /* @__PURE__ */ Re("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), iB = /* @__PURE__ */ Wi("Yes"), oB = /* @__PURE__ */ Wi("No"), aB = /* @__PURE__ */ Wi(" Continue "), sB = window.Vue.ref, lB = /* @__PURE__ */ Ix({
  __name: "WelcomePage",
  setup(t) {
    const i = Ii(), r = Rc(), a = sB(!0), l = () => {
      const u = Boolean(a.value);
      i.savePermission(u), u ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (u, d) => (ep(), tp("div", Gx, [
      Yx,
      _x,
      Re("div", null, [
        Hx,
        Re("div", Px, [
          Re("div", null, [
            rn(Xe(he), {
              icon: Xe(Jx),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            jx
          ]),
          Re("div", null, [
            rn(Xe(he), {
              icon: Xe(vx),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Xx
          ]),
          Re("div", null, [
            rn(Xe(he), {
              icon: Xe(Dx),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Lx
          ]),
          Re("div", null, [
            rn(Xe(he), {
              icon: Xe($C),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            qx
          ]),
          Re("div", null, [
            rn(Xe(he), {
              icon: Xe(lx),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            $x
          ])
        ])
      ]),
      Xe(i).isAdmin ? (ep(), tp("div", Kx, [
        eB,
        tB,
        Re("div", nB, [
          rB,
          rn(Xe(Nm), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            label: ""
          }, {
            default: Ko(() => [
              rn(Xe(wa), { value: !0 }, {
                default: Ko(() => [
                  iB
                ]),
                _: 1
              }),
              rn(Xe(wa), { value: !1 }, {
                default: Ko(() => [
                  oB
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : Ox("", !0),
      rn(Xe(Nn), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: Ko(() => [
          aB
        ]),
        _: 1
      })
    ]));
  }
});
const cB = /* @__PURE__ */ Se(lB, [["__scopeId", "data-v-0fd6b0cd"]]), uB = window.Vue.defineComponent, dB = window.Vue.createElementVNode, fB = window.Vue.createTextVNode, hB = window.Vue.unref, pB = window.Vue.withCtx, mB = window.Vue.createVNode, VB = window.Vue.Fragment, wB = window.Vue.openBlock, vB = window.Vue.createElementBlock, TB = window.Vue.pushScopeId, gB = window.Vue.popScopeId, UB = (t) => (TB("data-v-bcb7dcc6"), t = t(), gB(), t), RB = /* @__PURE__ */ UB(() => /* @__PURE__ */ dB("div", { class: "main" }, "Something bad is happening...", -1)), NB = /* @__PURE__ */ fB(" Reload "), MB = /* @__PURE__ */ uB({
  __name: "ErrorPage",
  setup(t) {
    const i = Rc(), r = () => {
      i.push({ name: "situations" });
    };
    return (a, l) => (wB(), vB(VB, null, [
      RB,
      mB(hB(Nn), {
        primary: "",
        onClick: r
      }, {
        default: pB(() => [
          NB
        ]),
        _: 1
      })
    ], 64));
  }
});
const yB = /* @__PURE__ */ Se(MB, [["__scopeId", "data-v-bcb7dcc6"]]), kB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", ZB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", JB = window.Vue.defineComponent, Ee = window.Vue.createElementVNode, $l = window.Vue.createTextVNode, Tn = window.Vue.unref, Ti = window.Vue.withCtx, gi = window.Vue.createVNode, bB = window.Vue.openBlock, EB = window.Vue.createElementBlock, SB = window.Vue.pushScopeId, FB = window.Vue.popScopeId, Kn = (t) => (SB("data-v-9a5b5f4e"), t = t(), FB(), t), AB = { class: "container" }, WB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("h2", null, "Configuration", -1)), CB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("p", null, [
  /* @__PURE__ */ $l(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ee("br"),
  /* @__PURE__ */ $l(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ee("strong", null, [
    /* @__PURE__ */ Ee("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), xB = { class: "radio-content" }, BB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("strong", { class: "title" }, "Clustering", -1)), DB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), IB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("img", {
  class: "img",
  src: kB
}, null, -1)), OB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ee("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ee("br"),
  /* @__PURE__ */ Ee("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), QB = /* @__PURE__ */ Kn(() => /* @__PURE__ */ Ee("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ee("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ee("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ee("img", {
    class: "img img2",
    src: ZB
  })
], -1)), zB = /* @__PURE__ */ $l(" Continue "), np = window.Vue.ref, GB = /* @__PURE__ */ JB({
  __name: "ConfigurationPage",
  setup(t) {
    const i = Ii(), r = Rc(), a = np(!1), l = np(ft.ENGINE_DBSCAN), u = () => {
      Mp(i.allowSave), YR(l.value, a.value), r.push({ name: "situations" });
    };
    return (d, h) => (bB(), EB("div", AB, [
      WB,
      CB,
      Ee("div", null, [
        gi(Tn(Nm), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": h[1] || (h[1] = (V) => l.value = V)
        }, {
          default: Ti(() => [
            gi(Tn(wa), {
              class: "radio",
              value: Tn(ft).ENGINE_DBSCAN
            }, {
              default: Ti(() => [
                Ee("div", xB, [
                  BB,
                  DB,
                  IB,
                  gi(Tn(Vc), {
                    modelValue: a.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (V) => a.value = V),
                    disabled: l.value !== Tn(ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ti(() => [
                      OB
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            gi(Tn(wa), {
              class: "radio",
              value: Tn(ft).ENGINE_DEEP_LEARNING
            }, {
              default: Ti(() => [
                QB
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      gi(Tn(Nn), {
        primary: "",
        class: "btn",
        onClick: h[2] || (h[2] = () => u())
      }, {
        default: Ti(() => [
          zB
        ]),
        _: 1
      })
    ]));
  }
});
const YB = /* @__PURE__ */ Se(GB, [["__scopeId", "data-v-9a5b5f4e"]]), _B = window.VueRouter.createRouter, HB = window.VueRouter.createWebHistory, Ol = async () => {
  const t = window.VRouter || Nc, i = Ii();
  if (!i.userId) {
    const r = await i.getUserRole();
    await i.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, Mm = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const i = window.VRouter || Nc, r = Ii();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? i.push({ name: "welcome", params: t.params }) : i.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Ol(),
    component: cB
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Ol(),
    component: YB
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Ol(),
    component: pC
  },
  {
    path: "/error",
    name: "error",
    component: yB
  }
], rp = window.VRouter;
if (rp)
  for (const t of Mm) {
    const { path: i, name: r, component: a, beforeEnter: l } = t;
    rp.addRoute("Plugin", {
      path: i.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const Nc = _B({
  history: HB(),
  routes: Mm
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = MU;
