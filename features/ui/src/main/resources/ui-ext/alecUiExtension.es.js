const pe = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
}, Pk = {}, Hk = window.Vue.resolveComponent, $k = window.Vue.createVNode, jk = window.Vue.openBlock, Lk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Xk = { class: "main" };
function qk(e, r) {
  const o = Hk("router-view");
  return jk(), Lk("div", Xk, [
    $k(o)
  ]);
}
const Kk = /* @__PURE__ */ pe(Pk, [["render", qk], ["__scopeId", "data-v-5d32d140"]]), eR = window.Vue.defineComponent, tR = window.Vue.openBlock, nR = window.Vue.createBlock, rR = /* @__PURE__ */ eR({
  __name: "App",
  setup(e) {
    return (r, o) => (tR(), nR(Kk));
  }
});
var oa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rv = { exports: {} }, Gu = { exports: {} }, ov = function(r, o) {
  return function() {
    for (var s = new Array(arguments.length), c = 0; c < s.length; c++)
      s[c] = arguments[c];
    return r.apply(o, s);
  };
}, aR = ov, Yu = Object.prototype.toString, Pu = function(e) {
  return function(r) {
    var o = Yu.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Jr(e) {
  return e = e.toLowerCase(), function(o) {
    return Pu(o) === e;
  };
}
function Hu(e) {
  return Array.isArray(e);
}
function Ns(e) {
  return typeof e > "u";
}
function iR(e) {
  return e !== null && !Ns(e) && e.constructor !== null && !Ns(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var av = Jr("ArrayBuffer");
function sR(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && av(e.buffer), r;
}
function lR(e) {
  return typeof e == "string";
}
function cR(e) {
  return typeof e == "number";
}
function iv(e) {
  return e !== null && typeof e == "object";
}
function ms(e) {
  if (Pu(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var uR = Jr("Date"), dR = Jr("File"), fR = Jr("Blob"), hR = Jr("FileList");
function $u(e) {
  return Yu.call(e) === "[object Function]";
}
function pR(e) {
  return iv(e) && $u(e.pipe);
}
function mR(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Yu.call(e) === r || $u(e.toString) && e.toString() === r);
}
var wR = Jr("URLSearchParams");
function vR(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function VR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ju(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Hu(e))
      for (var o = 0, i = e.length; o < i; o++)
        r.call(null, e[o], o, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && r.call(null, e[s], s, e);
}
function bu() {
  var e = {};
  function r(s, c) {
    ms(e[c]) && ms(s) ? e[c] = bu(e[c], s) : ms(s) ? e[c] = bu({}, s) : Hu(s) ? e[c] = s.slice() : e[c] = s;
  }
  for (var o = 0, i = arguments.length; o < i; o++)
    ju(arguments[o], r);
  return e;
}
function gR(e, r, o) {
  return ju(r, function(s, c) {
    o && typeof s == "function" ? e[c] = aR(s, o) : e[c] = s;
  }), e;
}
function TR(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function UR(e, r, o, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function yR(e, r, o) {
  var i, s, c, d = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      c = i[s], d[c] || (r[c] = e[c], d[c] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function NR(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var i = e.indexOf(r, o);
  return i !== -1 && i === o;
}
function kR(e) {
  if (!e)
    return null;
  var r = e.length;
  if (Ns(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var RR = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Pe = {
  isArray: Hu,
  isArrayBuffer: av,
  isBuffer: iR,
  isFormData: mR,
  isArrayBufferView: sR,
  isString: lR,
  isNumber: cR,
  isObject: iv,
  isPlainObject: ms,
  isUndefined: Ns,
  isDate: uR,
  isFile: dR,
  isBlob: fR,
  isFunction: $u,
  isStream: pR,
  isURLSearchParams: wR,
  isStandardBrowserEnv: VR,
  forEach: ju,
  merge: bu,
  extend: gR,
  trim: vR,
  stripBOM: TR,
  inherits: UR,
  toFlatObject: yR,
  kindOf: Pu,
  kindOfTest: Jr,
  endsWith: NR,
  toArray: kR,
  isTypedArray: RR,
  isFileList: hR
}, Lr = Pe;
function op(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var sv = function(r, o, i) {
  if (!o)
    return r;
  var s;
  if (i)
    s = i(o);
  else if (Lr.isURLSearchParams(o))
    s = o.toString();
  else {
    var c = [];
    Lr.forEach(o, function(m, v) {
      m === null || typeof m > "u" || (Lr.isArray(m) ? v = v + "[]" : m = [m], Lr.forEach(m, function(g) {
        Lr.isDate(g) ? g = g.toISOString() : Lr.isObject(g) && (g = JSON.stringify(g)), c.push(op(v) + "=" + op(g));
      }));
    }), s = c.join("&");
  }
  if (s) {
    var d = r.indexOf("#");
    d !== -1 && (r = r.slice(0, d)), r += (r.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return r;
}, MR = Pe;
function Cs() {
  this.handlers = [];
}
Cs.prototype.use = function(r, o, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Cs.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
Cs.prototype.forEach = function(r) {
  MR.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var bR = Cs, SR = Pe, ZR = function(r, o) {
  SR.forEach(r, function(s, c) {
    c !== o && c.toUpperCase() === o.toUpperCase() && (r[o] = s, delete r[c]);
  });
}, lv = Pe;
function yo(e, r, o, i, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), i && (this.request = i), s && (this.response = s);
}
lv.inherits(yo, Error, {
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
var cv = yo.prototype, uv = {};
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
  uv[e] = { value: e };
});
Object.defineProperties(yo, uv);
Object.defineProperty(cv, "isAxiosError", { value: !0 });
yo.from = function(e, r, o, i, s, c) {
  var d = Object.create(cv);
  return lv.toFlatObject(e, d, function(m) {
    return m !== Error.prototype;
  }), yo.call(d, e.message, r, o, i, s), d.name = e.name, c && Object.assign(d, c), d;
};
var bo = yo, dv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jt = Pe;
function ER(e, r) {
  r = r || new FormData();
  var o = [];
  function i(c) {
    return c === null ? "" : jt.isDate(c) ? c.toISOString() : jt.isArrayBuffer(c) || jt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function s(c, d) {
    if (jt.isPlainObject(c) || jt.isArray(c)) {
      if (o.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      o.push(c), jt.forEach(c, function(m, v) {
        if (!jt.isUndefined(m)) {
          var V = d ? d + "." + v : v, g;
          if (m && !d && typeof m == "object") {
            if (jt.endsWith(v, "{}"))
              m = JSON.stringify(m);
            else if (jt.endsWith(v, "[]") && (g = jt.toArray(m))) {
              g.forEach(function(U) {
                !jt.isUndefined(U) && r.append(V, i(U));
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
var fv = ER, yc, ap;
function JR() {
  if (ap)
    return yc;
  ap = 1;
  var e = bo;
  return yc = function(o, i, s) {
    var c = s.config.validateStatus;
    !s.status || !c || c(s.status) ? o(s) : i(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, yc;
}
var Nc, ip;
function AR() {
  if (ip)
    return Nc;
  ip = 1;
  var e = Pe;
  return Nc = e.isStandardBrowserEnv() ? function() {
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
  }(), Nc;
}
var FR = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, _R = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, CR = FR, WR = _R, hv = function(r, o) {
  return r && !CR(o) ? WR(r, o) : o;
}, kc, sp;
function BR() {
  if (sp)
    return kc;
  sp = 1;
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
  return kc = function(i) {
    var s = {}, c, d, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), c = e.trim(v.substr(0, f)).toLowerCase(), d = e.trim(v.substr(f + 1)), c) {
        if (s[c] && r.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? s[c] = (s[c] ? s[c] : []).concat([d]) : s[c] = s[c] ? s[c] + ", " + d : d;
      }
    }), s;
  }, kc;
}
var Rc, lp;
function xR() {
  if (lp)
    return Rc;
  lp = 1;
  var e = Pe;
  return Rc = e.isStandardBrowserEnv() ? function() {
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
  }(), Rc;
}
var Mc, cp;
function Ws() {
  if (cp)
    return Mc;
  cp = 1;
  var e = bo, r = Pe;
  function o(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), Mc = o, Mc;
}
var bc, up;
function IR() {
  return up || (up = 1, bc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), bc;
}
var Sc, dp;
function fp() {
  if (dp)
    return Sc;
  dp = 1;
  var e = Pe, r = JR(), o = AR(), i = sv, s = hv, c = BR(), d = xR(), f = dv, m = bo, v = Ws(), V = IR();
  return Sc = function(U) {
    return new Promise(function(b, A) {
      var C = U.data, F = U.headers, W = U.responseType, _;
      function I() {
        U.cancelToken && U.cancelToken.unsubscribe(_), U.signal && U.signal.removeEventListener("abort", _);
      }
      e.isFormData(C) && e.isStandardBrowserEnv() && delete F["Content-Type"];
      var S = new XMLHttpRequest();
      if (U.auth) {
        var z = U.auth.username || "", Q = U.auth.password ? unescape(encodeURIComponent(U.auth.password)) : "";
        F.Authorization = "Basic " + btoa(z + ":" + Q);
      }
      var x = s(U.baseURL, U.url);
      S.open(U.method.toUpperCase(), i(x, U.params, U.paramsSerializer), !0), S.timeout = U.timeout;
      function j() {
        if (!!S) {
          var L = "getAllResponseHeaders" in S ? c(S.getAllResponseHeaders()) : null, G = !W || W === "text" || W === "json" ? S.responseText : S.response, se = {
            data: G,
            status: S.status,
            statusText: S.statusText,
            headers: L,
            config: U,
            request: S
          };
          r(function(Ee) {
            b(Ee), I();
          }, function(Ee) {
            A(Ee), I();
          }, se), S = null;
        }
      }
      if ("onloadend" in S ? S.onloadend = j : S.onreadystatechange = function() {
        !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(j);
      }, S.onabort = function() {
        !S || (A(new m("Request aborted", m.ECONNABORTED, U, S)), S = null);
      }, S.onerror = function() {
        A(new m("Network Error", m.ERR_NETWORK, U, S, S)), S = null;
      }, S.ontimeout = function() {
        var G = U.timeout ? "timeout of " + U.timeout + "ms exceeded" : "timeout exceeded", se = U.transitional || f;
        U.timeoutErrorMessage && (G = U.timeoutErrorMessage), A(new m(
          G,
          se.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          U,
          S
        )), S = null;
      }, e.isStandardBrowserEnv()) {
        var K = (U.withCredentials || d(x)) && U.xsrfCookieName ? o.read(U.xsrfCookieName) : void 0;
        K && (F[U.xsrfHeaderName] = K);
      }
      "setRequestHeader" in S && e.forEach(F, function(G, se) {
        typeof C > "u" && se.toLowerCase() === "content-type" ? delete F[se] : S.setRequestHeader(se, G);
      }), e.isUndefined(U.withCredentials) || (S.withCredentials = !!U.withCredentials), W && W !== "json" && (S.responseType = U.responseType), typeof U.onDownloadProgress == "function" && S.addEventListener("progress", U.onDownloadProgress), typeof U.onUploadProgress == "function" && S.upload && S.upload.addEventListener("progress", U.onUploadProgress), (U.cancelToken || U.signal) && (_ = function(L) {
        !S || (A(!L || L && L.type ? new v() : L), S.abort(), S = null);
      }, U.cancelToken && U.cancelToken.subscribe(_), U.signal && (U.signal.aborted ? _() : U.signal.addEventListener("abort", _))), C || (C = null);
      var Ue = V(x);
      if (Ue && ["http", "https", "file"].indexOf(Ue) === -1) {
        A(new m("Unsupported protocol " + Ue + ":", m.ERR_BAD_REQUEST, U));
        return;
      }
      S.send(C);
    });
  }, Sc;
}
var Zc, hp;
function DR() {
  return hp || (hp = 1, Zc = null), Zc;
}
var xe = Pe, pp = ZR, mp = bo, OR = dv, QR = fv, zR = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function wp(e, r) {
  !xe.isUndefined(e) && xe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function GR() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = fp()), e;
}
function YR(e, r, o) {
  if (xe.isString(e))
    try {
      return (r || JSON.parse)(e), xe.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (o || JSON.stringify)(e);
}
var Bs = {
  transitional: OR,
  adapter: GR(),
  transformRequest: [function(r, o) {
    if (pp(o, "Accept"), pp(o, "Content-Type"), xe.isFormData(r) || xe.isArrayBuffer(r) || xe.isBuffer(r) || xe.isStream(r) || xe.isFile(r) || xe.isBlob(r))
      return r;
    if (xe.isArrayBufferView(r))
      return r.buffer;
    if (xe.isURLSearchParams(r))
      return wp(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = xe.isObject(r), s = o && o["Content-Type"], c;
    if ((c = xe.isFileList(r)) || i && s === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return QR(c ? { "files[]": r } : r, d && new d());
    } else if (i || s === "application/json")
      return wp(o, "application/json"), YR(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || Bs.transitional, i = o && o.silentJSONParsing, s = o && o.forcedJSONParsing, c = !i && this.responseType === "json";
    if (c || s && xe.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? mp.from(d, mp.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: DR()
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
  Bs.headers[r] = {};
});
xe.forEach(["post", "put", "patch"], function(r) {
  Bs.headers[r] = xe.merge(zR);
});
var Lu = Bs, PR = Pe, HR = Lu, $R = function(r, o, i) {
  var s = this || HR;
  return PR.forEach(i, function(d) {
    r = d.call(s, r, o);
  }), r;
}, Ec, vp;
function pv() {
  return vp || (vp = 1, Ec = function(r) {
    return !!(r && r.__CANCEL__);
  }), Ec;
}
var Vp = Pe, Jc = $R, jR = pv(), LR = Lu, XR = Ws();
function Ac(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new XR();
}
var qR = function(r) {
  Ac(r), r.headers = r.headers || {}, r.data = Jc.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Vp.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Vp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete r.headers[s];
    }
  );
  var o = r.adapter || LR.adapter;
  return o(r).then(function(s) {
    return Ac(r), s.data = Jc.call(
      r,
      s.data,
      s.headers,
      r.transformResponse
    ), s;
  }, function(s) {
    return jR(s) || (Ac(r), s && s.response && (s.response.data = Jc.call(
      r,
      s.response.data,
      s.response.headers,
      r.transformResponse
    ))), Promise.reject(s);
  });
}, Tt = Pe, mv = function(r, o) {
  o = o || {};
  var i = {};
  function s(V, g) {
    return Tt.isPlainObject(V) && Tt.isPlainObject(g) ? Tt.merge(V, g) : Tt.isPlainObject(g) ? Tt.merge({}, g) : Tt.isArray(g) ? g.slice() : g;
  }
  function c(V) {
    if (Tt.isUndefined(o[V])) {
      if (!Tt.isUndefined(r[V]))
        return s(void 0, r[V]);
    } else
      return s(r[V], o[V]);
  }
  function d(V) {
    if (!Tt.isUndefined(o[V]))
      return s(void 0, o[V]);
  }
  function f(V) {
    if (Tt.isUndefined(o[V])) {
      if (!Tt.isUndefined(r[V]))
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
  return Tt.forEach(Object.keys(r).concat(Object.keys(o)), function(g) {
    var U = v[g] || c, M = U(g);
    Tt.isUndefined(M) && U !== m || (i[g] = M);
  }), i;
}, Fc, gp;
function wv() {
  return gp || (gp = 1, Fc = {
    version: "0.27.2"
  }), Fc;
}
var KR = wv().version, qn = bo, Xu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Xu[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Tp = {};
Xu.transitional = function(r, o, i) {
  function s(c, d) {
    return "[Axios v" + KR + "] Transitional option '" + c + "'" + d + (i ? ". " + i : "");
  }
  return function(c, d, f) {
    if (r === !1)
      throw new qn(
        s(d, " has been removed" + (o ? " in " + o : "")),
        qn.ERR_DEPRECATED
      );
    return o && !Tp[d] && (Tp[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(c, d, f) : !0;
  };
};
function eM(e, r, o) {
  if (typeof e != "object")
    throw new qn("options must be an object", qn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), s = i.length; s-- > 0; ) {
    var c = i[s], d = r[c];
    if (d) {
      var f = e[c], m = f === void 0 || d(f, c, e);
      if (m !== !0)
        throw new qn("option " + c + " must be " + m, qn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new qn("Unknown option " + c, qn.ERR_BAD_OPTION);
  }
}
var tM = {
  assertOptions: eM,
  validators: Xu
}, vv = Pe, nM = sv, Up = bR, yp = qR, xs = mv, rM = hv, Vv = tM, Xr = Vv.validators;
function No(e) {
  this.defaults = e, this.interceptors = {
    request: new Up(),
    response: new Up()
  };
}
No.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = xs(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var i = o.transitional;
  i !== void 0 && Vv.assertOptions(i, {
    silentJSONParsing: Xr.transitional(Xr.boolean),
    forcedJSONParsing: Xr.transitional(Xr.boolean),
    clarifyTimeoutError: Xr.transitional(Xr.boolean)
  }, !1);
  var s = [], c = !0;
  this.interceptors.request.forEach(function(M) {
    typeof M.runWhen == "function" && M.runWhen(o) === !1 || (c = c && M.synchronous, s.unshift(M.fulfilled, M.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(M) {
    d.push(M.fulfilled, M.rejected);
  });
  var f;
  if (!c) {
    var m = [yp, void 0];
    for (Array.prototype.unshift.apply(m, s), m = m.concat(d), f = Promise.resolve(o); m.length; )
      f = f.then(m.shift(), m.shift());
    return f;
  }
  for (var v = o; s.length; ) {
    var V = s.shift(), g = s.shift();
    try {
      v = V(v);
    } catch (U) {
      g(U);
      break;
    }
  }
  try {
    f = yp(v);
  } catch (U) {
    return Promise.reject(U);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
No.prototype.getUri = function(r) {
  r = xs(this.defaults, r);
  var o = rM(r.baseURL, r.url);
  return nM(o, r.params, r.paramsSerializer);
};
vv.forEach(["delete", "get", "head", "options"], function(r) {
  No.prototype[r] = function(o, i) {
    return this.request(xs(i || {}, {
      method: r,
      url: o,
      data: (i || {}).data
    }));
  };
});
vv.forEach(["post", "put", "patch"], function(r) {
  function o(i) {
    return function(c, d, f) {
      return this.request(xs(f || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  No.prototype[r] = o(), No.prototype[r + "Form"] = o(!0);
});
var oM = No, _c, Np;
function aM() {
  if (Np)
    return _c;
  Np = 1;
  var e = Ws();
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
  }, _c = r, _c;
}
var Cc, kp;
function iM() {
  return kp || (kp = 1, Cc = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), Cc;
}
var Wc, Rp;
function sM() {
  if (Rp)
    return Wc;
  Rp = 1;
  var e = Pe;
  return Wc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, Wc;
}
var Mp = Pe, lM = ov, ws = oM, cM = mv, uM = Lu;
function gv(e) {
  var r = new ws(e), o = lM(ws.prototype.request, r);
  return Mp.extend(o, ws.prototype, r), Mp.extend(o, r), o.create = function(s) {
    return gv(cM(e, s));
  }, o;
}
var ht = gv(uM);
ht.Axios = ws;
ht.CanceledError = Ws();
ht.CancelToken = aM();
ht.isCancel = pv();
ht.VERSION = wv().version;
ht.toFormData = fv;
ht.AxiosError = bo;
ht.Cancel = ht.CanceledError;
ht.all = function(r) {
  return Promise.all(r);
};
ht.spread = iM();
ht.isAxiosError = sM();
Gu.exports = ht;
Gu.exports.default = ht;
(function(e) {
  e.exports = Gu.exports;
})(rv);
const Tv = /* @__PURE__ */ oR(rv.exports), Cn = Tv.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), an = Tv.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var ve = { exports: {} };
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
    var o, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, V = "__lodash_placeholder__", g = 1, U = 2, M = 4, b = 1, A = 2, C = 1, F = 2, W = 4, _ = 8, I = 16, S = 32, z = 64, Q = 128, x = 256, j = 512, K = 30, Ue = "...", L = 800, G = 16, se = 1, le = 2, Ee = 3, Oe = 1 / 0, qe = 9007199254740991, Co = 17976931348623157e292, Ha = 0 / 0, cn = 4294967295, oV = cn - 1, aV = cn >>> 1, iV = [
      ["ary", Q],
      ["bind", C],
      ["bindKey", F],
      ["curry", _],
      ["curryRight", I],
      ["flip", j],
      ["partial", S],
      ["partialRight", z],
      ["rearg", x]
    ], _r = "[object Arguments]", $a = "[object Array]", sV = "[object AsyncFunction]", Wo = "[object Boolean]", Bo = "[object Date]", lV = "[object DOMException]", ja = "[object Error]", La = "[object Function]", Md = "[object GeneratorFunction]", zt = "[object Map]", xo = "[object Number]", cV = "[object Null]", Vn = "[object Object]", bd = "[object Promise]", uV = "[object Proxy]", Io = "[object RegExp]", Gt = "[object Set]", Do = "[object String]", Xa = "[object Symbol]", dV = "[object Undefined]", Oo = "[object WeakMap]", fV = "[object WeakSet]", Qo = "[object ArrayBuffer]", Cr = "[object DataView]", tl = "[object Float32Array]", nl = "[object Float64Array]", rl = "[object Int8Array]", ol = "[object Int16Array]", al = "[object Int32Array]", il = "[object Uint8Array]", sl = "[object Uint8ClampedArray]", ll = "[object Uint16Array]", cl = "[object Uint32Array]", hV = /\b__p \+= '';/g, pV = /\b(__p \+=) '' \+/g, mV = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sd = /&(?:amp|lt|gt|quot|#39);/g, Zd = /[&<>"']/g, wV = RegExp(Sd.source), vV = RegExp(Zd.source), VV = /<%-([\s\S]+?)%>/g, gV = /<%([\s\S]+?)%>/g, Ed = /<%=([\s\S]+?)%>/g, TV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, UV = /^\w*$/, yV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ul = /[\\^$.*+?()[\]{}|]/g, NV = RegExp(ul.source), dl = /^\s+/, kV = /\s/, RV = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, MV = /\{\n\/\* \[wrapped with (.+)\] \*/, bV = /,? & /, SV = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ZV = /[()=,{}\[\]\/\s]/, EV = /\\(\\)?/g, JV = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Jd = /\w*$/, AV = /^[-+]0x[0-9a-f]+$/i, FV = /^0b[01]+$/i, _V = /^\[object .+?Constructor\]$/, CV = /^0o[0-7]+$/i, WV = /^(?:0|[1-9]\d*)$/, BV = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qa = /($^)/, xV = /['\n\r\u2028\u2029\\]/g, Ka = "\\ud800-\\udfff", IV = "\\u0300-\\u036f", DV = "\\ufe20-\\ufe2f", OV = "\\u20d0-\\u20ff", Ad = IV + DV + OV, Fd = "\\u2700-\\u27bf", _d = "a-z\\xdf-\\xf6\\xf8-\\xff", QV = "\\xac\\xb1\\xd7\\xf7", zV = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", GV = "\\u2000-\\u206f", YV = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Cd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wd = "\\ufe0e\\ufe0f", Bd = QV + zV + GV + YV, fl = "['\u2019]", PV = "[" + Ka + "]", xd = "[" + Bd + "]", ei = "[" + Ad + "]", Id = "\\d+", HV = "[" + Fd + "]", Dd = "[" + _d + "]", Od = "[^" + Ka + Bd + Id + Fd + _d + Cd + "]", hl = "\\ud83c[\\udffb-\\udfff]", $V = "(?:" + ei + "|" + hl + ")", Qd = "[^" + Ka + "]", pl = "(?:\\ud83c[\\udde6-\\uddff]){2}", ml = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wr = "[" + Cd + "]", zd = "\\u200d", Gd = "(?:" + Dd + "|" + Od + ")", jV = "(?:" + Wr + "|" + Od + ")", Yd = "(?:" + fl + "(?:d|ll|m|re|s|t|ve))?", Pd = "(?:" + fl + "(?:D|LL|M|RE|S|T|VE))?", Hd = $V + "?", $d = "[" + Wd + "]?", LV = "(?:" + zd + "(?:" + [Qd, pl, ml].join("|") + ")" + $d + Hd + ")*", XV = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qV = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", jd = $d + Hd + LV, KV = "(?:" + [HV, pl, ml].join("|") + ")" + jd, e0 = "(?:" + [Qd + ei + "?", ei, pl, ml, PV].join("|") + ")", t0 = RegExp(fl, "g"), n0 = RegExp(ei, "g"), wl = RegExp(hl + "(?=" + hl + ")|" + e0 + jd, "g"), r0 = RegExp([
      Wr + "?" + Dd + "+" + Yd + "(?=" + [xd, Wr, "$"].join("|") + ")",
      jV + "+" + Pd + "(?=" + [xd, Wr + Gd, "$"].join("|") + ")",
      Wr + "?" + Gd + "+" + Yd,
      Wr + "+" + Pd,
      qV,
      XV,
      Id,
      KV
    ].join("|"), "g"), o0 = RegExp("[" + zd + Ka + Ad + Wd + "]"), a0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, i0 = [
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
    ], s0 = -1, ye = {};
    ye[tl] = ye[nl] = ye[rl] = ye[ol] = ye[al] = ye[il] = ye[sl] = ye[ll] = ye[cl] = !0, ye[_r] = ye[$a] = ye[Qo] = ye[Wo] = ye[Cr] = ye[Bo] = ye[ja] = ye[La] = ye[zt] = ye[xo] = ye[Vn] = ye[Io] = ye[Gt] = ye[Do] = ye[Oo] = !1;
    var ge = {};
    ge[_r] = ge[$a] = ge[Qo] = ge[Cr] = ge[Wo] = ge[Bo] = ge[tl] = ge[nl] = ge[rl] = ge[ol] = ge[al] = ge[zt] = ge[xo] = ge[Vn] = ge[Io] = ge[Gt] = ge[Do] = ge[Xa] = ge[il] = ge[sl] = ge[ll] = ge[cl] = !0, ge[ja] = ge[La] = ge[Oo] = !1;
    var l0 = {
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
    }, c0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, u0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, d0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, f0 = parseFloat, h0 = parseInt, Ld = typeof oa == "object" && oa && oa.Object === Object && oa, p0 = typeof self == "object" && self && self.Object === Object && self, Qe = Ld || p0 || Function("return this")(), vl = r && !r.nodeType && r, ir = vl && !0 && e && !e.nodeType && e, Xd = ir && ir.exports === vl, Vl = Xd && Ld.process, bt = function() {
      try {
        var y = ir && ir.require && ir.require("util").types;
        return y || Vl && Vl.binding && Vl.binding("util");
      } catch {
      }
    }(), qd = bt && bt.isArrayBuffer, Kd = bt && bt.isDate, ef = bt && bt.isMap, tf = bt && bt.isRegExp, nf = bt && bt.isSet, rf = bt && bt.isTypedArray;
    function pt(y, R, k) {
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
    function m0(y, R, k, D) {
      for (var X = -1, ue = y == null ? 0 : y.length; ++X < ue; ) {
        var Ae = y[X];
        R(D, Ae, k(Ae), y);
      }
      return D;
    }
    function St(y, R) {
      for (var k = -1, D = y == null ? 0 : y.length; ++k < D && R(y[k], k, y) !== !1; )
        ;
      return y;
    }
    function w0(y, R) {
      for (var k = y == null ? 0 : y.length; k-- && R(y[k], k, y) !== !1; )
        ;
      return y;
    }
    function of(y, R) {
      for (var k = -1, D = y == null ? 0 : y.length; ++k < D; )
        if (!R(y[k], k, y))
          return !1;
      return !0;
    }
    function Wn(y, R) {
      for (var k = -1, D = y == null ? 0 : y.length, X = 0, ue = []; ++k < D; ) {
        var Ae = y[k];
        R(Ae, k, y) && (ue[X++] = Ae);
      }
      return ue;
    }
    function ti(y, R) {
      var k = y == null ? 0 : y.length;
      return !!k && Br(y, R, 0) > -1;
    }
    function gl(y, R, k) {
      for (var D = -1, X = y == null ? 0 : y.length; ++D < X; )
        if (k(R, y[D]))
          return !0;
      return !1;
    }
    function Ne(y, R) {
      for (var k = -1, D = y == null ? 0 : y.length, X = Array(D); ++k < D; )
        X[k] = R(y[k], k, y);
      return X;
    }
    function Bn(y, R) {
      for (var k = -1, D = R.length, X = y.length; ++k < D; )
        y[X + k] = R[k];
      return y;
    }
    function Tl(y, R, k, D) {
      var X = -1, ue = y == null ? 0 : y.length;
      for (D && ue && (k = y[++X]); ++X < ue; )
        k = R(k, y[X], X, y);
      return k;
    }
    function v0(y, R, k, D) {
      var X = y == null ? 0 : y.length;
      for (D && X && (k = y[--X]); X--; )
        k = R(k, y[X], X, y);
      return k;
    }
    function Ul(y, R) {
      for (var k = -1, D = y == null ? 0 : y.length; ++k < D; )
        if (R(y[k], k, y))
          return !0;
      return !1;
    }
    var V0 = yl("length");
    function g0(y) {
      return y.split("");
    }
    function T0(y) {
      return y.match(SV) || [];
    }
    function af(y, R, k) {
      var D;
      return k(y, function(X, ue, Ae) {
        if (R(X, ue, Ae))
          return D = ue, !1;
      }), D;
    }
    function ni(y, R, k, D) {
      for (var X = y.length, ue = k + (D ? 1 : -1); D ? ue-- : ++ue < X; )
        if (R(y[ue], ue, y))
          return ue;
      return -1;
    }
    function Br(y, R, k) {
      return R === R ? A0(y, R, k) : ni(y, sf, k);
    }
    function U0(y, R, k, D) {
      for (var X = k - 1, ue = y.length; ++X < ue; )
        if (D(y[X], R))
          return X;
      return -1;
    }
    function sf(y) {
      return y !== y;
    }
    function lf(y, R) {
      var k = y == null ? 0 : y.length;
      return k ? kl(y, R) / k : Ha;
    }
    function yl(y) {
      return function(R) {
        return R == null ? o : R[y];
      };
    }
    function Nl(y) {
      return function(R) {
        return y == null ? o : y[R];
      };
    }
    function cf(y, R, k, D, X) {
      return X(y, function(ue, Ae, Ve) {
        k = D ? (D = !1, ue) : R(k, ue, Ae, Ve);
      }), k;
    }
    function y0(y, R) {
      var k = y.length;
      for (y.sort(R); k--; )
        y[k] = y[k].value;
      return y;
    }
    function kl(y, R) {
      for (var k, D = -1, X = y.length; ++D < X; ) {
        var ue = R(y[D]);
        ue !== o && (k = k === o ? ue : k + ue);
      }
      return k;
    }
    function Rl(y, R) {
      for (var k = -1, D = Array(y); ++k < y; )
        D[k] = R(k);
      return D;
    }
    function N0(y, R) {
      return Ne(R, function(k) {
        return [k, y[k]];
      });
    }
    function uf(y) {
      return y && y.slice(0, pf(y) + 1).replace(dl, "");
    }
    function mt(y) {
      return function(R) {
        return y(R);
      };
    }
    function Ml(y, R) {
      return Ne(R, function(k) {
        return y[k];
      });
    }
    function zo(y, R) {
      return y.has(R);
    }
    function df(y, R) {
      for (var k = -1, D = y.length; ++k < D && Br(R, y[k], 0) > -1; )
        ;
      return k;
    }
    function ff(y, R) {
      for (var k = y.length; k-- && Br(R, y[k], 0) > -1; )
        ;
      return k;
    }
    function k0(y, R) {
      for (var k = y.length, D = 0; k--; )
        y[k] === R && ++D;
      return D;
    }
    var R0 = Nl(l0), M0 = Nl(c0);
    function b0(y) {
      return "\\" + d0[y];
    }
    function S0(y, R) {
      return y == null ? o : y[R];
    }
    function xr(y) {
      return o0.test(y);
    }
    function Z0(y) {
      return a0.test(y);
    }
    function E0(y) {
      for (var R, k = []; !(R = y.next()).done; )
        k.push(R.value);
      return k;
    }
    function bl(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(D, X) {
        k[++R] = [X, D];
      }), k;
    }
    function hf(y, R) {
      return function(k) {
        return y(R(k));
      };
    }
    function xn(y, R) {
      for (var k = -1, D = y.length, X = 0, ue = []; ++k < D; ) {
        var Ae = y[k];
        (Ae === R || Ae === V) && (y[k] = V, ue[X++] = k);
      }
      return ue;
    }
    function ri(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(D) {
        k[++R] = D;
      }), k;
    }
    function J0(y) {
      var R = -1, k = Array(y.size);
      return y.forEach(function(D) {
        k[++R] = [D, D];
      }), k;
    }
    function A0(y, R, k) {
      for (var D = k - 1, X = y.length; ++D < X; )
        if (y[D] === R)
          return D;
      return -1;
    }
    function F0(y, R, k) {
      for (var D = k + 1; D--; )
        if (y[D] === R)
          return D;
      return D;
    }
    function Ir(y) {
      return xr(y) ? C0(y) : V0(y);
    }
    function Yt(y) {
      return xr(y) ? W0(y) : g0(y);
    }
    function pf(y) {
      for (var R = y.length; R-- && kV.test(y.charAt(R)); )
        ;
      return R;
    }
    var _0 = Nl(u0);
    function C0(y) {
      for (var R = wl.lastIndex = 0; wl.test(y); )
        ++R;
      return R;
    }
    function W0(y) {
      return y.match(wl) || [];
    }
    function B0(y) {
      return y.match(r0) || [];
    }
    var x0 = function y(R) {
      R = R == null ? Qe : Dr.defaults(Qe.Object(), R, Dr.pick(Qe, i0));
      var k = R.Array, D = R.Date, X = R.Error, ue = R.Function, Ae = R.Math, Ve = R.Object, Sl = R.RegExp, I0 = R.String, Zt = R.TypeError, oi = k.prototype, D0 = ue.prototype, Or = Ve.prototype, ai = R["__core-js_shared__"], ii = D0.toString, me = Or.hasOwnProperty, O0 = 0, mf = function() {
        var t = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), si = Or.toString, Q0 = ii.call(Ve), z0 = Qe._, G0 = Sl(
        "^" + ii.call(me).replace(ul, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), li = Xd ? R.Buffer : o, In = R.Symbol, ci = R.Uint8Array, wf = li ? li.allocUnsafe : o, ui = hf(Ve.getPrototypeOf, Ve), vf = Ve.create, Vf = Or.propertyIsEnumerable, di = oi.splice, gf = In ? In.isConcatSpreadable : o, Go = In ? In.iterator : o, sr = In ? In.toStringTag : o, fi = function() {
        try {
          var t = fr(Ve, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Y0 = R.clearTimeout !== Qe.clearTimeout && R.clearTimeout, P0 = D && D.now !== Qe.Date.now && D.now, H0 = R.setTimeout !== Qe.setTimeout && R.setTimeout, hi = Ae.ceil, pi = Ae.floor, Zl = Ve.getOwnPropertySymbols, $0 = li ? li.isBuffer : o, Tf = R.isFinite, j0 = oi.join, L0 = hf(Ve.keys, Ve), Fe = Ae.max, He = Ae.min, X0 = D.now, q0 = R.parseInt, Uf = Ae.random, K0 = oi.reverse, El = fr(R, "DataView"), Yo = fr(R, "Map"), Jl = fr(R, "Promise"), Qr = fr(R, "Set"), Po = fr(R, "WeakMap"), Ho = fr(Ve, "create"), mi = Po && new Po(), zr = {}, eg = hr(El), tg = hr(Yo), ng = hr(Jl), rg = hr(Qr), og = hr(Po), wi = In ? In.prototype : o, $o = wi ? wi.valueOf : o, yf = wi ? wi.toString : o;
      function h(t) {
        if (Re(t) && !q(t) && !(t instanceof ae)) {
          if (t instanceof Et)
            return t;
          if (me.call(t, "__wrapped__"))
            return Nh(t);
        }
        return new Et(t);
      }
      var Gr = function() {
        function t() {
        }
        return function(n) {
          if (!ke(n))
            return {};
          if (vf)
            return vf(n);
          t.prototype = n;
          var a = new t();
          return t.prototype = o, a;
        };
      }();
      function vi() {
      }
      function Et(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: VV,
        evaluate: gV,
        interpolate: Ed,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = vi.prototype, h.prototype.constructor = h, Et.prototype = Gr(vi.prototype), Et.prototype.constructor = Et;
      function ae(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = cn, this.__views__ = [];
      }
      function ag() {
        var t = new ae(this.__wrapped__);
        return t.__actions__ = at(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = at(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = at(this.__views__), t;
      }
      function ig() {
        if (this.__filtered__) {
          var t = new ae(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function sg() {
        var t = this.__wrapped__.value(), n = this.__dir__, a = q(t), l = n < 0, u = a ? t.length : 0, p = gT(0, u, this.__views__), w = p.start, T = p.end, N = T - w, Z = l ? T : w - 1, E = this.__iteratees__, J = E.length, B = 0, O = He(N, this.__takeCount__);
        if (!a || !l && u == N && O == N)
          return Pf(t, this.__actions__);
        var H = [];
        e:
          for (; N-- && B < O; ) {
            Z += n;
            for (var te = -1, $ = t[Z]; ++te < J; ) {
              var oe = E[te], ie = oe.iteratee, Vt = oe.type, tt = ie($);
              if (Vt == le)
                $ = tt;
              else if (!tt) {
                if (Vt == se)
                  continue e;
                break e;
              }
            }
            H[B++] = $;
          }
        return H;
      }
      ae.prototype = Gr(vi.prototype), ae.prototype.constructor = ae;
      function lr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function lg() {
        this.__data__ = Ho ? Ho(null) : {}, this.size = 0;
      }
      function cg(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function ug(t) {
        var n = this.__data__;
        if (Ho) {
          var a = n[t];
          return a === m ? o : a;
        }
        return me.call(n, t) ? n[t] : o;
      }
      function dg(t) {
        var n = this.__data__;
        return Ho ? n[t] !== o : me.call(n, t);
      }
      function fg(t, n) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Ho && n === o ? m : n, this;
      }
      lr.prototype.clear = lg, lr.prototype.delete = cg, lr.prototype.get = ug, lr.prototype.has = dg, lr.prototype.set = fg;
      function gn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function hg() {
        this.__data__ = [], this.size = 0;
      }
      function pg(t) {
        var n = this.__data__, a = Vi(n, t);
        if (a < 0)
          return !1;
        var l = n.length - 1;
        return a == l ? n.pop() : di.call(n, a, 1), --this.size, !0;
      }
      function mg(t) {
        var n = this.__data__, a = Vi(n, t);
        return a < 0 ? o : n[a][1];
      }
      function wg(t) {
        return Vi(this.__data__, t) > -1;
      }
      function vg(t, n) {
        var a = this.__data__, l = Vi(a, t);
        return l < 0 ? (++this.size, a.push([t, n])) : a[l][1] = n, this;
      }
      gn.prototype.clear = hg, gn.prototype.delete = pg, gn.prototype.get = mg, gn.prototype.has = wg, gn.prototype.set = vg;
      function Tn(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++n < a; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Vg() {
        this.size = 0, this.__data__ = {
          hash: new lr(),
          map: new (Yo || gn)(),
          string: new lr()
        };
      }
      function gg(t) {
        var n = Ei(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Tg(t) {
        return Ei(this, t).get(t);
      }
      function Ug(t) {
        return Ei(this, t).has(t);
      }
      function yg(t, n) {
        var a = Ei(this, t), l = a.size;
        return a.set(t, n), this.size += a.size == l ? 0 : 1, this;
      }
      Tn.prototype.clear = Vg, Tn.prototype.delete = gg, Tn.prototype.get = Tg, Tn.prototype.has = Ug, Tn.prototype.set = yg;
      function cr(t) {
        var n = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new Tn(); ++n < a; )
          this.add(t[n]);
      }
      function Ng(t) {
        return this.__data__.set(t, m), this;
      }
      function kg(t) {
        return this.__data__.has(t);
      }
      cr.prototype.add = cr.prototype.push = Ng, cr.prototype.has = kg;
      function Pt(t) {
        var n = this.__data__ = new gn(t);
        this.size = n.size;
      }
      function Rg() {
        this.__data__ = new gn(), this.size = 0;
      }
      function Mg(t) {
        var n = this.__data__, a = n.delete(t);
        return this.size = n.size, a;
      }
      function bg(t) {
        return this.__data__.get(t);
      }
      function Sg(t) {
        return this.__data__.has(t);
      }
      function Zg(t, n) {
        var a = this.__data__;
        if (a instanceof gn) {
          var l = a.__data__;
          if (!Yo || l.length < s - 1)
            return l.push([t, n]), this.size = ++a.size, this;
          a = this.__data__ = new Tn(l);
        }
        return a.set(t, n), this.size = a.size, this;
      }
      Pt.prototype.clear = Rg, Pt.prototype.delete = Mg, Pt.prototype.get = bg, Pt.prototype.has = Sg, Pt.prototype.set = Zg;
      function Nf(t, n) {
        var a = q(t), l = !a && pr(t), u = !a && !l && Gn(t), p = !a && !l && !u && $r(t), w = a || l || u || p, T = w ? Rl(t.length, I0) : [], N = T.length;
        for (var Z in t)
          (n || me.call(t, Z)) && !(w && (Z == "length" || u && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || kn(Z, N))) && T.push(Z);
        return T;
      }
      function kf(t) {
        var n = t.length;
        return n ? t[Ql(0, n - 1)] : o;
      }
      function Eg(t, n) {
        return Ji(at(t), ur(n, 0, t.length));
      }
      function Jg(t) {
        return Ji(at(t));
      }
      function Al(t, n, a) {
        (a !== o && !Ht(t[n], a) || a === o && !(n in t)) && Un(t, n, a);
      }
      function jo(t, n, a) {
        var l = t[n];
        (!(me.call(t, n) && Ht(l, a)) || a === o && !(n in t)) && Un(t, n, a);
      }
      function Vi(t, n) {
        for (var a = t.length; a--; )
          if (Ht(t[a][0], n))
            return a;
        return -1;
      }
      function Ag(t, n, a, l) {
        return Dn(t, function(u, p, w) {
          n(l, u, a(u), w);
        }), l;
      }
      function Rf(t, n) {
        return t && dn(n, We(n), t);
      }
      function Fg(t, n) {
        return t && dn(n, st(n), t);
      }
      function Un(t, n, a) {
        n == "__proto__" && fi ? fi(t, n, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[n] = a;
      }
      function Fl(t, n) {
        for (var a = -1, l = n.length, u = k(l), p = t == null; ++a < l; )
          u[a] = p ? o : hc(t, n[a]);
        return u;
      }
      function ur(t, n, a) {
        return t === t && (a !== o && (t = t <= a ? t : a), n !== o && (t = t >= n ? t : n)), t;
      }
      function Jt(t, n, a, l, u, p) {
        var w, T = n & g, N = n & U, Z = n & M;
        if (a && (w = u ? a(t, l, u, p) : a(t)), w !== o)
          return w;
        if (!ke(t))
          return t;
        var E = q(t);
        if (E) {
          if (w = UT(t), !T)
            return at(t, w);
        } else {
          var J = $e(t), B = J == La || J == Md;
          if (Gn(t))
            return jf(t, T);
          if (J == Vn || J == _r || B && !u) {
            if (w = N || B ? {} : ph(t), !T)
              return N ? uT(t, Fg(w, t)) : cT(t, Rf(w, t));
          } else {
            if (!ge[J])
              return u ? t : {};
            w = yT(t, J, T);
          }
        }
        p || (p = new Pt());
        var O = p.get(t);
        if (O)
          return O;
        p.set(t, w), zh(t) ? t.forEach(function($) {
          w.add(Jt($, n, a, $, t, p));
        }) : Oh(t) && t.forEach(function($, oe) {
          w.set(oe, Jt($, n, a, oe, t, p));
        });
        var H = Z ? N ? Kl : ql : N ? st : We, te = E ? o : H(t);
        return St(te || t, function($, oe) {
          te && (oe = $, $ = t[oe]), jo(w, oe, Jt($, n, a, oe, t, p));
        }), w;
      }
      function _g(t) {
        var n = We(t);
        return function(a) {
          return Mf(a, t, n);
        };
      }
      function Mf(t, n, a) {
        var l = a.length;
        if (t == null)
          return !l;
        for (t = Ve(t); l--; ) {
          var u = a[l], p = n[u], w = t[u];
          if (w === o && !(u in t) || !p(w))
            return !1;
        }
        return !0;
      }
      function bf(t, n, a) {
        if (typeof t != "function")
          throw new Zt(d);
        return na(function() {
          t.apply(o, a);
        }, n);
      }
      function Lo(t, n, a, l) {
        var u = -1, p = ti, w = !0, T = t.length, N = [], Z = n.length;
        if (!T)
          return N;
        a && (n = Ne(n, mt(a))), l ? (p = gl, w = !1) : n.length >= s && (p = zo, w = !1, n = new cr(n));
        e:
          for (; ++u < T; ) {
            var E = t[u], J = a == null ? E : a(E);
            if (E = l || E !== 0 ? E : 0, w && J === J) {
              for (var B = Z; B--; )
                if (n[B] === J)
                  continue e;
              N.push(E);
            } else
              p(n, J, l) || N.push(E);
          }
        return N;
      }
      var Dn = eh(un), Sf = eh(Cl, !0);
      function Cg(t, n) {
        var a = !0;
        return Dn(t, function(l, u, p) {
          return a = !!n(l, u, p), a;
        }), a;
      }
      function gi(t, n, a) {
        for (var l = -1, u = t.length; ++l < u; ) {
          var p = t[l], w = n(p);
          if (w != null && (T === o ? w === w && !vt(w) : a(w, T)))
            var T = w, N = p;
        }
        return N;
      }
      function Wg(t, n, a, l) {
        var u = t.length;
        for (a = ee(a), a < 0 && (a = -a > u ? 0 : u + a), l = l === o || l > u ? u : ee(l), l < 0 && (l += u), l = a > l ? 0 : Yh(l); a < l; )
          t[a++] = n;
        return t;
      }
      function Zf(t, n) {
        var a = [];
        return Dn(t, function(l, u, p) {
          n(l, u, p) && a.push(l);
        }), a;
      }
      function ze(t, n, a, l, u) {
        var p = -1, w = t.length;
        for (a || (a = kT), u || (u = []); ++p < w; ) {
          var T = t[p];
          n > 0 && a(T) ? n > 1 ? ze(T, n - 1, a, l, u) : Bn(u, T) : l || (u[u.length] = T);
        }
        return u;
      }
      var _l = th(), Ef = th(!0);
      function un(t, n) {
        return t && _l(t, n, We);
      }
      function Cl(t, n) {
        return t && Ef(t, n, We);
      }
      function Ti(t, n) {
        return Wn(n, function(a) {
          return Rn(t[a]);
        });
      }
      function dr(t, n) {
        n = Qn(n, t);
        for (var a = 0, l = n.length; t != null && a < l; )
          t = t[fn(n[a++])];
        return a && a == l ? t : o;
      }
      function Jf(t, n, a) {
        var l = n(t);
        return q(t) ? l : Bn(l, a(t));
      }
      function Ke(t) {
        return t == null ? t === o ? dV : cV : sr && sr in Ve(t) ? VT(t) : JT(t);
      }
      function Wl(t, n) {
        return t > n;
      }
      function Bg(t, n) {
        return t != null && me.call(t, n);
      }
      function xg(t, n) {
        return t != null && n in Ve(t);
      }
      function Ig(t, n, a) {
        return t >= He(n, a) && t < Fe(n, a);
      }
      function Bl(t, n, a) {
        for (var l = a ? gl : ti, u = t[0].length, p = t.length, w = p, T = k(p), N = 1 / 0, Z = []; w--; ) {
          var E = t[w];
          w && n && (E = Ne(E, mt(n))), N = He(E.length, N), T[w] = !a && (n || u >= 120 && E.length >= 120) ? new cr(w && E) : o;
        }
        E = t[0];
        var J = -1, B = T[0];
        e:
          for (; ++J < u && Z.length < N; ) {
            var O = E[J], H = n ? n(O) : O;
            if (O = a || O !== 0 ? O : 0, !(B ? zo(B, H) : l(Z, H, a))) {
              for (w = p; --w; ) {
                var te = T[w];
                if (!(te ? zo(te, H) : l(t[w], H, a)))
                  continue e;
              }
              B && B.push(H), Z.push(O);
            }
          }
        return Z;
      }
      function Dg(t, n, a, l) {
        return un(t, function(u, p, w) {
          n(l, a(u), p, w);
        }), l;
      }
      function Xo(t, n, a) {
        n = Qn(n, t), t = Vh(t, n);
        var l = t == null ? t : t[fn(Ft(n))];
        return l == null ? o : pt(l, t, a);
      }
      function Af(t) {
        return Re(t) && Ke(t) == _r;
      }
      function Og(t) {
        return Re(t) && Ke(t) == Qo;
      }
      function Qg(t) {
        return Re(t) && Ke(t) == Bo;
      }
      function qo(t, n, a, l, u) {
        return t === n ? !0 : t == null || n == null || !Re(t) && !Re(n) ? t !== t && n !== n : zg(t, n, a, l, qo, u);
      }
      function zg(t, n, a, l, u, p) {
        var w = q(t), T = q(n), N = w ? $a : $e(t), Z = T ? $a : $e(n);
        N = N == _r ? Vn : N, Z = Z == _r ? Vn : Z;
        var E = N == Vn, J = Z == Vn, B = N == Z;
        if (B && Gn(t)) {
          if (!Gn(n))
            return !1;
          w = !0, E = !1;
        }
        if (B && !E)
          return p || (p = new Pt()), w || $r(t) ? dh(t, n, a, l, u, p) : wT(t, n, N, a, l, u, p);
        if (!(a & b)) {
          var O = E && me.call(t, "__wrapped__"), H = J && me.call(n, "__wrapped__");
          if (O || H) {
            var te = O ? t.value() : t, $ = H ? n.value() : n;
            return p || (p = new Pt()), u(te, $, a, l, p);
          }
        }
        return B ? (p || (p = new Pt()), vT(t, n, a, l, u, p)) : !1;
      }
      function Gg(t) {
        return Re(t) && $e(t) == zt;
      }
      function xl(t, n, a, l) {
        var u = a.length, p = u, w = !l;
        if (t == null)
          return !p;
        for (t = Ve(t); u--; ) {
          var T = a[u];
          if (w && T[2] ? T[1] !== t[T[0]] : !(T[0] in t))
            return !1;
        }
        for (; ++u < p; ) {
          T = a[u];
          var N = T[0], Z = t[N], E = T[1];
          if (w && T[2]) {
            if (Z === o && !(N in t))
              return !1;
          } else {
            var J = new Pt();
            if (l)
              var B = l(Z, E, N, t, n, J);
            if (!(B === o ? qo(E, Z, b | A, l, J) : B))
              return !1;
          }
        }
        return !0;
      }
      function Ff(t) {
        if (!ke(t) || MT(t))
          return !1;
        var n = Rn(t) ? G0 : _V;
        return n.test(hr(t));
      }
      function Yg(t) {
        return Re(t) && Ke(t) == Io;
      }
      function Pg(t) {
        return Re(t) && $e(t) == Gt;
      }
      function Hg(t) {
        return Re(t) && Bi(t.length) && !!ye[Ke(t)];
      }
      function _f(t) {
        return typeof t == "function" ? t : t == null ? lt : typeof t == "object" ? q(t) ? Bf(t[0], t[1]) : Wf(t) : np(t);
      }
      function Il(t) {
        if (!ta(t))
          return L0(t);
        var n = [];
        for (var a in Ve(t))
          me.call(t, a) && a != "constructor" && n.push(a);
        return n;
      }
      function $g(t) {
        if (!ke(t))
          return ET(t);
        var n = ta(t), a = [];
        for (var l in t)
          l == "constructor" && (n || !me.call(t, l)) || a.push(l);
        return a;
      }
      function Dl(t, n) {
        return t < n;
      }
      function Cf(t, n) {
        var a = -1, l = it(t) ? k(t.length) : [];
        return Dn(t, function(u, p, w) {
          l[++a] = n(u, p, w);
        }), l;
      }
      function Wf(t) {
        var n = tc(t);
        return n.length == 1 && n[0][2] ? wh(n[0][0], n[0][1]) : function(a) {
          return a === t || xl(a, t, n);
        };
      }
      function Bf(t, n) {
        return rc(t) && mh(n) ? wh(fn(t), n) : function(a) {
          var l = hc(a, t);
          return l === o && l === n ? pc(a, t) : qo(n, l, b | A);
        };
      }
      function Ui(t, n, a, l, u) {
        t !== n && _l(n, function(p, w) {
          if (u || (u = new Pt()), ke(p))
            jg(t, n, w, a, Ui, l, u);
          else {
            var T = l ? l(ac(t, w), p, w + "", t, n, u) : o;
            T === o && (T = p), Al(t, w, T);
          }
        }, st);
      }
      function jg(t, n, a, l, u, p, w) {
        var T = ac(t, a), N = ac(n, a), Z = w.get(N);
        if (Z) {
          Al(t, a, Z);
          return;
        }
        var E = p ? p(T, N, a + "", t, n, w) : o, J = E === o;
        if (J) {
          var B = q(N), O = !B && Gn(N), H = !B && !O && $r(N);
          E = N, B || O || H ? q(T) ? E = T : Me(T) ? E = at(T) : O ? (J = !1, E = jf(N, !0)) : H ? (J = !1, E = Lf(N, !0)) : E = [] : ra(N) || pr(N) ? (E = T, pr(T) ? E = Ph(T) : (!ke(T) || Rn(T)) && (E = ph(N))) : J = !1;
        }
        J && (w.set(N, E), u(E, N, l, p, w), w.delete(N)), Al(t, a, E);
      }
      function xf(t, n) {
        var a = t.length;
        if (!!a)
          return n += n < 0 ? a : 0, kn(n, a) ? t[n] : o;
      }
      function If(t, n, a) {
        n.length ? n = Ne(n, function(p) {
          return q(p) ? function(w) {
            return dr(w, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [lt];
        var l = -1;
        n = Ne(n, mt(Y()));
        var u = Cf(t, function(p, w, T) {
          var N = Ne(n, function(Z) {
            return Z(p);
          });
          return { criteria: N, index: ++l, value: p };
        });
        return y0(u, function(p, w) {
          return lT(p, w, a);
        });
      }
      function Lg(t, n) {
        return Df(t, n, function(a, l) {
          return pc(t, l);
        });
      }
      function Df(t, n, a) {
        for (var l = -1, u = n.length, p = {}; ++l < u; ) {
          var w = n[l], T = dr(t, w);
          a(T, w) && Ko(p, Qn(w, t), T);
        }
        return p;
      }
      function Xg(t) {
        return function(n) {
          return dr(n, t);
        };
      }
      function Ol(t, n, a, l) {
        var u = l ? U0 : Br, p = -1, w = n.length, T = t;
        for (t === n && (n = at(n)), a && (T = Ne(t, mt(a))); ++p < w; )
          for (var N = 0, Z = n[p], E = a ? a(Z) : Z; (N = u(T, E, N, l)) > -1; )
            T !== t && di.call(T, N, 1), di.call(t, N, 1);
        return t;
      }
      function Of(t, n) {
        for (var a = t ? n.length : 0, l = a - 1; a--; ) {
          var u = n[a];
          if (a == l || u !== p) {
            var p = u;
            kn(u) ? di.call(t, u, 1) : Yl(t, u);
          }
        }
        return t;
      }
      function Ql(t, n) {
        return t + pi(Uf() * (n - t + 1));
      }
      function qg(t, n, a, l) {
        for (var u = -1, p = Fe(hi((n - t) / (a || 1)), 0), w = k(p); p--; )
          w[l ? p : ++u] = t, t += a;
        return w;
      }
      function zl(t, n) {
        var a = "";
        if (!t || n < 1 || n > qe)
          return a;
        do
          n % 2 && (a += t), n = pi(n / 2), n && (t += t);
        while (n);
        return a;
      }
      function re(t, n) {
        return ic(vh(t, n, lt), t + "");
      }
      function Kg(t) {
        return kf(jr(t));
      }
      function eT(t, n) {
        var a = jr(t);
        return Ji(a, ur(n, 0, a.length));
      }
      function Ko(t, n, a, l) {
        if (!ke(t))
          return t;
        n = Qn(n, t);
        for (var u = -1, p = n.length, w = p - 1, T = t; T != null && ++u < p; ) {
          var N = fn(n[u]), Z = a;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return t;
          if (u != w) {
            var E = T[N];
            Z = l ? l(E, N, T) : o, Z === o && (Z = ke(E) ? E : kn(n[u + 1]) ? [] : {});
          }
          jo(T, N, Z), T = T[N];
        }
        return t;
      }
      var Qf = mi ? function(t, n) {
        return mi.set(t, n), t;
      } : lt, tT = fi ? function(t, n) {
        return fi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: wc(n),
          writable: !0
        });
      } : lt;
      function nT(t) {
        return Ji(jr(t));
      }
      function At(t, n, a) {
        var l = -1, u = t.length;
        n < 0 && (n = -n > u ? 0 : u + n), a = a > u ? u : a, a < 0 && (a += u), u = n > a ? 0 : a - n >>> 0, n >>>= 0;
        for (var p = k(u); ++l < u; )
          p[l] = t[l + n];
        return p;
      }
      function rT(t, n) {
        var a;
        return Dn(t, function(l, u, p) {
          return a = n(l, u, p), !a;
        }), !!a;
      }
      function yi(t, n, a) {
        var l = 0, u = t == null ? l : t.length;
        if (typeof n == "number" && n === n && u <= aV) {
          for (; l < u; ) {
            var p = l + u >>> 1, w = t[p];
            w !== null && !vt(w) && (a ? w <= n : w < n) ? l = p + 1 : u = p;
          }
          return u;
        }
        return Gl(t, n, lt, a);
      }
      function Gl(t, n, a, l) {
        var u = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = a(n);
        for (var w = n !== n, T = n === null, N = vt(n), Z = n === o; u < p; ) {
          var E = pi((u + p) / 2), J = a(t[E]), B = J !== o, O = J === null, H = J === J, te = vt(J);
          if (w)
            var $ = l || H;
          else
            Z ? $ = H && (l || B) : T ? $ = H && B && (l || !O) : N ? $ = H && B && !O && (l || !te) : O || te ? $ = !1 : $ = l ? J <= n : J < n;
          $ ? u = E + 1 : p = E;
        }
        return He(p, oV);
      }
      function zf(t, n) {
        for (var a = -1, l = t.length, u = 0, p = []; ++a < l; ) {
          var w = t[a], T = n ? n(w) : w;
          if (!a || !Ht(T, N)) {
            var N = T;
            p[u++] = w === 0 ? 0 : w;
          }
        }
        return p;
      }
      function Gf(t) {
        return typeof t == "number" ? t : vt(t) ? Ha : +t;
      }
      function wt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return Ne(t, wt) + "";
        if (vt(t))
          return yf ? yf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Oe ? "-0" : n;
      }
      function On(t, n, a) {
        var l = -1, u = ti, p = t.length, w = !0, T = [], N = T;
        if (a)
          w = !1, u = gl;
        else if (p >= s) {
          var Z = n ? null : pT(t);
          if (Z)
            return ri(Z);
          w = !1, u = zo, N = new cr();
        } else
          N = n ? [] : T;
        e:
          for (; ++l < p; ) {
            var E = t[l], J = n ? n(E) : E;
            if (E = a || E !== 0 ? E : 0, w && J === J) {
              for (var B = N.length; B--; )
                if (N[B] === J)
                  continue e;
              n && N.push(J), T.push(E);
            } else
              u(N, J, a) || (N !== T && N.push(J), T.push(E));
          }
        return T;
      }
      function Yl(t, n) {
        return n = Qn(n, t), t = Vh(t, n), t == null || delete t[fn(Ft(n))];
      }
      function Yf(t, n, a, l) {
        return Ko(t, n, a(dr(t, n)), l);
      }
      function Ni(t, n, a, l) {
        for (var u = t.length, p = l ? u : -1; (l ? p-- : ++p < u) && n(t[p], p, t); )
          ;
        return a ? At(t, l ? 0 : p, l ? p + 1 : u) : At(t, l ? p + 1 : 0, l ? u : p);
      }
      function Pf(t, n) {
        var a = t;
        return a instanceof ae && (a = a.value()), Tl(n, function(l, u) {
          return u.func.apply(u.thisArg, Bn([l], u.args));
        }, a);
      }
      function Pl(t, n, a) {
        var l = t.length;
        if (l < 2)
          return l ? On(t[0]) : [];
        for (var u = -1, p = k(l); ++u < l; )
          for (var w = t[u], T = -1; ++T < l; )
            T != u && (p[u] = Lo(p[u] || w, t[T], n, a));
        return On(ze(p, 1), n, a);
      }
      function Hf(t, n, a) {
        for (var l = -1, u = t.length, p = n.length, w = {}; ++l < u; ) {
          var T = l < p ? n[l] : o;
          a(w, t[l], T);
        }
        return w;
      }
      function Hl(t) {
        return Me(t) ? t : [];
      }
      function $l(t) {
        return typeof t == "function" ? t : lt;
      }
      function Qn(t, n) {
        return q(t) ? t : rc(t, n) ? [t] : yh(fe(t));
      }
      var oT = re;
      function zn(t, n, a) {
        var l = t.length;
        return a = a === o ? l : a, !n && a >= l ? t : At(t, n, a);
      }
      var $f = Y0 || function(t) {
        return Qe.clearTimeout(t);
      };
      function jf(t, n) {
        if (n)
          return t.slice();
        var a = t.length, l = wf ? wf(a) : new t.constructor(a);
        return t.copy(l), l;
      }
      function jl(t) {
        var n = new t.constructor(t.byteLength);
        return new ci(n).set(new ci(t)), n;
      }
      function aT(t, n) {
        var a = n ? jl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function iT(t) {
        var n = new t.constructor(t.source, Jd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function sT(t) {
        return $o ? Ve($o.call(t)) : {};
      }
      function Lf(t, n) {
        var a = n ? jl(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function Xf(t, n) {
        if (t !== n) {
          var a = t !== o, l = t === null, u = t === t, p = vt(t), w = n !== o, T = n === null, N = n === n, Z = vt(n);
          if (!T && !Z && !p && t > n || p && w && N && !T && !Z || l && w && N || !a && N || !u)
            return 1;
          if (!l && !p && !Z && t < n || Z && a && u && !l && !p || T && a && u || !w && u || !N)
            return -1;
        }
        return 0;
      }
      function lT(t, n, a) {
        for (var l = -1, u = t.criteria, p = n.criteria, w = u.length, T = a.length; ++l < w; ) {
          var N = Xf(u[l], p[l]);
          if (N) {
            if (l >= T)
              return N;
            var Z = a[l];
            return N * (Z == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function qf(t, n, a, l) {
        for (var u = -1, p = t.length, w = a.length, T = -1, N = n.length, Z = Fe(p - w, 0), E = k(N + Z), J = !l; ++T < N; )
          E[T] = n[T];
        for (; ++u < w; )
          (J || u < p) && (E[a[u]] = t[u]);
        for (; Z--; )
          E[T++] = t[u++];
        return E;
      }
      function Kf(t, n, a, l) {
        for (var u = -1, p = t.length, w = -1, T = a.length, N = -1, Z = n.length, E = Fe(p - T, 0), J = k(E + Z), B = !l; ++u < E; )
          J[u] = t[u];
        for (var O = u; ++N < Z; )
          J[O + N] = n[N];
        for (; ++w < T; )
          (B || u < p) && (J[O + a[w]] = t[u++]);
        return J;
      }
      function at(t, n) {
        var a = -1, l = t.length;
        for (n || (n = k(l)); ++a < l; )
          n[a] = t[a];
        return n;
      }
      function dn(t, n, a, l) {
        var u = !a;
        a || (a = {});
        for (var p = -1, w = n.length; ++p < w; ) {
          var T = n[p], N = l ? l(a[T], t[T], T, a, t) : o;
          N === o && (N = t[T]), u ? Un(a, T, N) : jo(a, T, N);
        }
        return a;
      }
      function cT(t, n) {
        return dn(t, nc(t), n);
      }
      function uT(t, n) {
        return dn(t, fh(t), n);
      }
      function ki(t, n) {
        return function(a, l) {
          var u = q(a) ? m0 : Ag, p = n ? n() : {};
          return u(a, t, Y(l, 2), p);
        };
      }
      function Yr(t) {
        return re(function(n, a) {
          var l = -1, u = a.length, p = u > 1 ? a[u - 1] : o, w = u > 2 ? a[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (u--, p) : o, w && et(a[0], a[1], w) && (p = u < 3 ? o : p, u = 1), n = Ve(n); ++l < u; ) {
            var T = a[l];
            T && t(n, T, l, p);
          }
          return n;
        });
      }
      function eh(t, n) {
        return function(a, l) {
          if (a == null)
            return a;
          if (!it(a))
            return t(a, l);
          for (var u = a.length, p = n ? u : -1, w = Ve(a); (n ? p-- : ++p < u) && l(w[p], p, w) !== !1; )
            ;
          return a;
        };
      }
      function th(t) {
        return function(n, a, l) {
          for (var u = -1, p = Ve(n), w = l(n), T = w.length; T--; ) {
            var N = w[t ? T : ++u];
            if (a(p[N], N, p) === !1)
              break;
          }
          return n;
        };
      }
      function dT(t, n, a) {
        var l = n & C, u = ea(t);
        function p() {
          var w = this && this !== Qe && this instanceof p ? u : t;
          return w.apply(l ? a : this, arguments);
        }
        return p;
      }
      function nh(t) {
        return function(n) {
          n = fe(n);
          var a = xr(n) ? Yt(n) : o, l = a ? a[0] : n.charAt(0), u = a ? zn(a, 1).join("") : n.slice(1);
          return l[t]() + u;
        };
      }
      function Pr(t) {
        return function(n) {
          return Tl(ep(Kh(n).replace(t0, "")), t, "");
        };
      }
      function ea(t) {
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
          var a = Gr(t.prototype), l = t.apply(a, n);
          return ke(l) ? l : a;
        };
      }
      function fT(t, n, a) {
        var l = ea(t);
        function u() {
          for (var p = arguments.length, w = k(p), T = p, N = Hr(u); T--; )
            w[T] = arguments[T];
          var Z = p < 3 && w[0] !== N && w[p - 1] !== N ? [] : xn(w, N);
          if (p -= Z.length, p < a)
            return sh(
              t,
              n,
              Ri,
              u.placeholder,
              o,
              w,
              Z,
              o,
              o,
              a - p
            );
          var E = this && this !== Qe && this instanceof u ? l : t;
          return pt(E, this, w);
        }
        return u;
      }
      function rh(t) {
        return function(n, a, l) {
          var u = Ve(n);
          if (!it(n)) {
            var p = Y(a, 3);
            n = We(n), a = function(T) {
              return p(u[T], T, u);
            };
          }
          var w = t(n, a, l);
          return w > -1 ? u[p ? n[w] : w] : o;
        };
      }
      function oh(t) {
        return Nn(function(n) {
          var a = n.length, l = a, u = Et.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Zt(d);
            if (u && !w && Zi(p) == "wrapper")
              var w = new Et([], !0);
          }
          for (l = w ? l : a; ++l < a; ) {
            p = n[l];
            var T = Zi(p), N = T == "wrapper" ? ec(p) : o;
            N && oc(N[0]) && N[1] == (Q | _ | S | x) && !N[4].length && N[9] == 1 ? w = w[Zi(N[0])].apply(w, N[3]) : w = p.length == 1 && oc(p) ? w[T]() : w.thru(p);
          }
          return function() {
            var Z = arguments, E = Z[0];
            if (w && Z.length == 1 && q(E))
              return w.plant(E).value();
            for (var J = 0, B = a ? n[J].apply(this, Z) : E; ++J < a; )
              B = n[J].call(this, B);
            return B;
          };
        });
      }
      function Ri(t, n, a, l, u, p, w, T, N, Z) {
        var E = n & Q, J = n & C, B = n & F, O = n & (_ | I), H = n & j, te = B ? o : ea(t);
        function $() {
          for (var oe = arguments.length, ie = k(oe), Vt = oe; Vt--; )
            ie[Vt] = arguments[Vt];
          if (O)
            var tt = Hr($), gt = k0(ie, tt);
          if (l && (ie = qf(ie, l, u, O)), p && (ie = Kf(ie, p, w, O)), oe -= gt, O && oe < Z) {
            var be = xn(ie, tt);
            return sh(
              t,
              n,
              Ri,
              $.placeholder,
              a,
              ie,
              be,
              T,
              N,
              Z - oe
            );
          }
          var $t = J ? a : this, bn = B ? $t[t] : t;
          return oe = ie.length, T ? ie = AT(ie, T) : H && oe > 1 && ie.reverse(), E && N < oe && (ie.length = N), this && this !== Qe && this instanceof $ && (bn = te || ea(bn)), bn.apply($t, ie);
        }
        return $;
      }
      function ah(t, n) {
        return function(a, l) {
          return Dg(a, t, n(l), {});
        };
      }
      function Mi(t, n) {
        return function(a, l) {
          var u;
          if (a === o && l === o)
            return n;
          if (a !== o && (u = a), l !== o) {
            if (u === o)
              return l;
            typeof a == "string" || typeof l == "string" ? (a = wt(a), l = wt(l)) : (a = Gf(a), l = Gf(l)), u = t(a, l);
          }
          return u;
        };
      }
      function Ll(t) {
        return Nn(function(n) {
          return n = Ne(n, mt(Y())), re(function(a) {
            var l = this;
            return t(n, function(u) {
              return pt(u, l, a);
            });
          });
        });
      }
      function bi(t, n) {
        n = n === o ? " " : wt(n);
        var a = n.length;
        if (a < 2)
          return a ? zl(n, t) : n;
        var l = zl(n, hi(t / Ir(n)));
        return xr(n) ? zn(Yt(l), 0, t).join("") : l.slice(0, t);
      }
      function hT(t, n, a, l) {
        var u = n & C, p = ea(t);
        function w() {
          for (var T = -1, N = arguments.length, Z = -1, E = l.length, J = k(E + N), B = this && this !== Qe && this instanceof w ? p : t; ++Z < E; )
            J[Z] = l[Z];
          for (; N--; )
            J[Z++] = arguments[++T];
          return pt(B, u ? a : this, J);
        }
        return w;
      }
      function ih(t) {
        return function(n, a, l) {
          return l && typeof l != "number" && et(n, a, l) && (a = l = o), n = Mn(n), a === o ? (a = n, n = 0) : a = Mn(a), l = l === o ? n < a ? 1 : -1 : Mn(l), qg(n, a, l, t);
        };
      }
      function Si(t) {
        return function(n, a) {
          return typeof n == "string" && typeof a == "string" || (n = _t(n), a = _t(a)), t(n, a);
        };
      }
      function sh(t, n, a, l, u, p, w, T, N, Z) {
        var E = n & _, J = E ? w : o, B = E ? o : w, O = E ? p : o, H = E ? o : p;
        n |= E ? S : z, n &= ~(E ? z : S), n & W || (n &= ~(C | F));
        var te = [
          t,
          n,
          u,
          O,
          J,
          H,
          B,
          T,
          N,
          Z
        ], $ = a.apply(o, te);
        return oc(t) && gh($, te), $.placeholder = l, Th($, t, n);
      }
      function Xl(t) {
        var n = Ae[t];
        return function(a, l) {
          if (a = _t(a), l = l == null ? 0 : He(ee(l), 292), l && Tf(a)) {
            var u = (fe(a) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + l));
            return u = (fe(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return n(a);
        };
      }
      var pT = Qr && 1 / ri(new Qr([, -0]))[1] == Oe ? function(t) {
        return new Qr(t);
      } : gc;
      function lh(t) {
        return function(n) {
          var a = $e(n);
          return a == zt ? bl(n) : a == Gt ? J0(n) : N0(n, t(n));
        };
      }
      function yn(t, n, a, l, u, p, w, T) {
        var N = n & F;
        if (!N && typeof t != "function")
          throw new Zt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(S | z), l = u = o), w = w === o ? w : Fe(ee(w), 0), T = T === o ? T : ee(T), Z -= u ? u.length : 0, n & z) {
          var E = l, J = u;
          l = u = o;
        }
        var B = N ? o : ec(t), O = [
          t,
          n,
          a,
          l,
          u,
          E,
          J,
          p,
          w,
          T
        ];
        if (B && ZT(O, B), t = O[0], n = O[1], a = O[2], l = O[3], u = O[4], T = O[9] = O[9] === o ? N ? 0 : t.length : Fe(O[9] - Z, 0), !T && n & (_ | I) && (n &= ~(_ | I)), !n || n == C)
          var H = dT(t, n, a);
        else
          n == _ || n == I ? H = fT(t, n, T) : (n == S || n == (C | S)) && !u.length ? H = hT(t, n, a, l) : H = Ri.apply(o, O);
        var te = B ? Qf : gh;
        return Th(te(H, O), t, n);
      }
      function ch(t, n, a, l) {
        return t === o || Ht(t, Or[a]) && !me.call(l, a) ? n : t;
      }
      function uh(t, n, a, l, u, p) {
        return ke(t) && ke(n) && (p.set(n, t), Ui(t, n, o, uh, p), p.delete(n)), t;
      }
      function mT(t) {
        return ra(t) ? o : t;
      }
      function dh(t, n, a, l, u, p) {
        var w = a & b, T = t.length, N = n.length;
        if (T != N && !(w && N > T))
          return !1;
        var Z = p.get(t), E = p.get(n);
        if (Z && E)
          return Z == n && E == t;
        var J = -1, B = !0, O = a & A ? new cr() : o;
        for (p.set(t, n), p.set(n, t); ++J < T; ) {
          var H = t[J], te = n[J];
          if (l)
            var $ = w ? l(te, H, J, n, t, p) : l(H, te, J, t, n, p);
          if ($ !== o) {
            if ($)
              continue;
            B = !1;
            break;
          }
          if (O) {
            if (!Ul(n, function(oe, ie) {
              if (!zo(O, ie) && (H === oe || u(H, oe, a, l, p)))
                return O.push(ie);
            })) {
              B = !1;
              break;
            }
          } else if (!(H === te || u(H, te, a, l, p))) {
            B = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), B;
      }
      function wT(t, n, a, l, u, p, w) {
        switch (a) {
          case Cr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Qo:
            return !(t.byteLength != n.byteLength || !p(new ci(t), new ci(n)));
          case Wo:
          case Bo:
          case xo:
            return Ht(+t, +n);
          case ja:
            return t.name == n.name && t.message == n.message;
          case Io:
          case Do:
            return t == n + "";
          case zt:
            var T = bl;
          case Gt:
            var N = l & b;
            if (T || (T = ri), t.size != n.size && !N)
              return !1;
            var Z = w.get(t);
            if (Z)
              return Z == n;
            l |= A, w.set(t, n);
            var E = dh(T(t), T(n), l, u, p, w);
            return w.delete(t), E;
          case Xa:
            if ($o)
              return $o.call(t) == $o.call(n);
        }
        return !1;
      }
      function vT(t, n, a, l, u, p) {
        var w = a & b, T = ql(t), N = T.length, Z = ql(n), E = Z.length;
        if (N != E && !w)
          return !1;
        for (var J = N; J--; ) {
          var B = T[J];
          if (!(w ? B in n : me.call(n, B)))
            return !1;
        }
        var O = p.get(t), H = p.get(n);
        if (O && H)
          return O == n && H == t;
        var te = !0;
        p.set(t, n), p.set(n, t);
        for (var $ = w; ++J < N; ) {
          B = T[J];
          var oe = t[B], ie = n[B];
          if (l)
            var Vt = w ? l(ie, oe, B, n, t, p) : l(oe, ie, B, t, n, p);
          if (!(Vt === o ? oe === ie || u(oe, ie, a, l, p) : Vt)) {
            te = !1;
            break;
          }
          $ || ($ = B == "constructor");
        }
        if (te && !$) {
          var tt = t.constructor, gt = n.constructor;
          tt != gt && "constructor" in t && "constructor" in n && !(typeof tt == "function" && tt instanceof tt && typeof gt == "function" && gt instanceof gt) && (te = !1);
        }
        return p.delete(t), p.delete(n), te;
      }
      function Nn(t) {
        return ic(vh(t, o, Mh), t + "");
      }
      function ql(t) {
        return Jf(t, We, nc);
      }
      function Kl(t) {
        return Jf(t, st, fh);
      }
      var ec = mi ? function(t) {
        return mi.get(t);
      } : gc;
      function Zi(t) {
        for (var n = t.name + "", a = zr[n], l = me.call(zr, n) ? a.length : 0; l--; ) {
          var u = a[l], p = u.func;
          if (p == null || p == t)
            return u.name;
        }
        return n;
      }
      function Hr(t) {
        var n = me.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function Y() {
        var t = h.iteratee || vc;
        return t = t === vc ? _f : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ei(t, n) {
        var a = t.__data__;
        return RT(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
      }
      function tc(t) {
        for (var n = We(t), a = n.length; a--; ) {
          var l = n[a], u = t[l];
          n[a] = [l, u, mh(u)];
        }
        return n;
      }
      function fr(t, n) {
        var a = S0(t, n);
        return Ff(a) ? a : o;
      }
      function VT(t) {
        var n = me.call(t, sr), a = t[sr];
        try {
          t[sr] = o;
          var l = !0;
        } catch {
        }
        var u = si.call(t);
        return l && (n ? t[sr] = a : delete t[sr]), u;
      }
      var nc = Zl ? function(t) {
        return t == null ? [] : (t = Ve(t), Wn(Zl(t), function(n) {
          return Vf.call(t, n);
        }));
      } : Tc, fh = Zl ? function(t) {
        for (var n = []; t; )
          Bn(n, nc(t)), t = ui(t);
        return n;
      } : Tc, $e = Ke;
      (El && $e(new El(new ArrayBuffer(1))) != Cr || Yo && $e(new Yo()) != zt || Jl && $e(Jl.resolve()) != bd || Qr && $e(new Qr()) != Gt || Po && $e(new Po()) != Oo) && ($e = function(t) {
        var n = Ke(t), a = n == Vn ? t.constructor : o, l = a ? hr(a) : "";
        if (l)
          switch (l) {
            case eg:
              return Cr;
            case tg:
              return zt;
            case ng:
              return bd;
            case rg:
              return Gt;
            case og:
              return Oo;
          }
        return n;
      });
      function gT(t, n, a) {
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
      function TT(t) {
        var n = t.match(MV);
        return n ? n[1].split(bV) : [];
      }
      function hh(t, n, a) {
        n = Qn(n, t);
        for (var l = -1, u = n.length, p = !1; ++l < u; ) {
          var w = fn(n[l]);
          if (!(p = t != null && a(t, w)))
            break;
          t = t[w];
        }
        return p || ++l != u ? p : (u = t == null ? 0 : t.length, !!u && Bi(u) && kn(w, u) && (q(t) || pr(t)));
      }
      function UT(t) {
        var n = t.length, a = new t.constructor(n);
        return n && typeof t[0] == "string" && me.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function ph(t) {
        return typeof t.constructor == "function" && !ta(t) ? Gr(ui(t)) : {};
      }
      function yT(t, n, a) {
        var l = t.constructor;
        switch (n) {
          case Qo:
            return jl(t);
          case Wo:
          case Bo:
            return new l(+t);
          case Cr:
            return aT(t, a);
          case tl:
          case nl:
          case rl:
          case ol:
          case al:
          case il:
          case sl:
          case ll:
          case cl:
            return Lf(t, a);
          case zt:
            return new l();
          case xo:
          case Do:
            return new l(t);
          case Io:
            return iT(t);
          case Gt:
            return new l();
          case Xa:
            return sT(t);
        }
      }
      function NT(t, n) {
        var a = n.length;
        if (!a)
          return t;
        var l = a - 1;
        return n[l] = (a > 1 ? "& " : "") + n[l], n = n.join(a > 2 ? ", " : " "), t.replace(RV, `{
/* [wrapped with ` + n + `] */
`);
      }
      function kT(t) {
        return q(t) || pr(t) || !!(gf && t && t[gf]);
      }
      function kn(t, n) {
        var a = typeof t;
        return n = n == null ? qe : n, !!n && (a == "number" || a != "symbol" && WV.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function et(t, n, a) {
        if (!ke(a))
          return !1;
        var l = typeof n;
        return (l == "number" ? it(a) && kn(n, a.length) : l == "string" && n in a) ? Ht(a[n], t) : !1;
      }
      function rc(t, n) {
        if (q(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || vt(t) ? !0 : UV.test(t) || !TV.test(t) || n != null && t in Ve(n);
      }
      function RT(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function oc(t) {
        var n = Zi(t), a = h[n];
        if (typeof a != "function" || !(n in ae.prototype))
          return !1;
        if (t === a)
          return !0;
        var l = ec(a);
        return !!l && t === l[0];
      }
      function MT(t) {
        return !!mf && mf in t;
      }
      var bT = ai ? Rn : Uc;
      function ta(t) {
        var n = t && t.constructor, a = typeof n == "function" && n.prototype || Or;
        return t === a;
      }
      function mh(t) {
        return t === t && !ke(t);
      }
      function wh(t, n) {
        return function(a) {
          return a == null ? !1 : a[t] === n && (n !== o || t in Ve(a));
        };
      }
      function ST(t) {
        var n = Ci(t, function(l) {
          return a.size === v && a.clear(), l;
        }), a = n.cache;
        return n;
      }
      function ZT(t, n) {
        var a = t[1], l = n[1], u = a | l, p = u < (C | F | Q), w = l == Q && a == _ || l == Q && a == x && t[7].length <= n[8] || l == (Q | x) && n[7].length <= n[8] && a == _;
        if (!(p || w))
          return t;
        l & C && (t[2] = n[2], u |= a & C ? 0 : W);
        var T = n[3];
        if (T) {
          var N = t[3];
          t[3] = N ? qf(N, T, n[4]) : T, t[4] = N ? xn(t[3], V) : n[4];
        }
        return T = n[5], T && (N = t[5], t[5] = N ? Kf(N, T, n[6]) : T, t[6] = N ? xn(t[5], V) : n[6]), T = n[7], T && (t[7] = T), l & Q && (t[8] = t[8] == null ? n[8] : He(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = u, t;
      }
      function ET(t) {
        var n = [];
        if (t != null)
          for (var a in Ve(t))
            n.push(a);
        return n;
      }
      function JT(t) {
        return si.call(t);
      }
      function vh(t, n, a) {
        return n = Fe(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, u = -1, p = Fe(l.length - n, 0), w = k(p); ++u < p; )
            w[u] = l[n + u];
          u = -1;
          for (var T = k(n + 1); ++u < n; )
            T[u] = l[u];
          return T[n] = a(w), pt(t, this, T);
        };
      }
      function Vh(t, n) {
        return n.length < 2 ? t : dr(t, At(n, 0, -1));
      }
      function AT(t, n) {
        for (var a = t.length, l = He(n.length, a), u = at(t); l--; ) {
          var p = n[l];
          t[l] = kn(p, a) ? u[p] : o;
        }
        return t;
      }
      function ac(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var gh = Uh(Qf), na = H0 || function(t, n) {
        return Qe.setTimeout(t, n);
      }, ic = Uh(tT);
      function Th(t, n, a) {
        var l = n + "";
        return ic(t, NT(l, FT(TT(l), a)));
      }
      function Uh(t) {
        var n = 0, a = 0;
        return function() {
          var l = X0(), u = G - (l - a);
          if (a = l, u > 0) {
            if (++n >= L)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function Ji(t, n) {
        var a = -1, l = t.length, u = l - 1;
        for (n = n === o ? l : n; ++a < n; ) {
          var p = Ql(a, u), w = t[p];
          t[p] = t[a], t[a] = w;
        }
        return t.length = n, t;
      }
      var yh = ST(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(yV, function(a, l, u, p) {
          n.push(u ? p.replace(EV, "$1") : l || a);
        }), n;
      });
      function fn(t) {
        if (typeof t == "string" || vt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Oe ? "-0" : n;
      }
      function hr(t) {
        if (t != null) {
          try {
            return ii.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function FT(t, n) {
        return St(iV, function(a) {
          var l = "_." + a[0];
          n & a[1] && !ti(t, l) && t.push(l);
        }), t.sort();
      }
      function Nh(t) {
        if (t instanceof ae)
          return t.clone();
        var n = new Et(t.__wrapped__, t.__chain__);
        return n.__actions__ = at(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function _T(t, n, a) {
        (a ? et(t, n, a) : n === o) ? n = 1 : n = Fe(ee(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var u = 0, p = 0, w = k(hi(l / n)); u < l; )
          w[p++] = At(t, u, u += n);
        return w;
      }
      function CT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = 0, u = []; ++n < a; ) {
          var p = t[n];
          p && (u[l++] = p);
        }
        return u;
      }
      function WT() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = k(t - 1), a = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Bn(q(a) ? at(a) : [a], ze(n, 1));
      }
      var BT = re(function(t, n) {
        return Me(t) ? Lo(t, ze(n, 1, Me, !0)) : [];
      }), xT = re(function(t, n) {
        var a = Ft(n);
        return Me(a) && (a = o), Me(t) ? Lo(t, ze(n, 1, Me, !0), Y(a, 2)) : [];
      }), IT = re(function(t, n) {
        var a = Ft(n);
        return Me(a) && (a = o), Me(t) ? Lo(t, ze(n, 1, Me, !0), o, a) : [];
      });
      function DT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), At(t, n < 0 ? 0 : n, l)) : [];
      }
      function OT(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, At(t, 0, n < 0 ? 0 : n)) : [];
      }
      function QT(t, n) {
        return t && t.length ? Ni(t, Y(n, 3), !0, !0) : [];
      }
      function zT(t, n) {
        return t && t.length ? Ni(t, Y(n, 3), !0) : [];
      }
      function GT(t, n, a, l) {
        var u = t == null ? 0 : t.length;
        return u ? (a && typeof a != "number" && et(t, n, a) && (a = 0, l = u), Wg(t, n, a, l)) : [];
      }
      function kh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Fe(l + u, 0)), ni(t, Y(n, 3), u);
      }
      function Rh(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l - 1;
        return a !== o && (u = ee(a), u = a < 0 ? Fe(l + u, 0) : He(u, l - 1)), ni(t, Y(n, 3), u, !0);
      }
      function Mh(t) {
        var n = t == null ? 0 : t.length;
        return n ? ze(t, 1) : [];
      }
      function YT(t) {
        var n = t == null ? 0 : t.length;
        return n ? ze(t, Oe) : [];
      }
      function PT(t, n) {
        var a = t == null ? 0 : t.length;
        return a ? (n = n === o ? 1 : ee(n), ze(t, n)) : [];
      }
      function HT(t) {
        for (var n = -1, a = t == null ? 0 : t.length, l = {}; ++n < a; ) {
          var u = t[n];
          l[u[0]] = u[1];
        }
        return l;
      }
      function bh(t) {
        return t && t.length ? t[0] : o;
      }
      function $T(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = a == null ? 0 : ee(a);
        return u < 0 && (u = Fe(l + u, 0)), Br(t, n, u);
      }
      function jT(t) {
        var n = t == null ? 0 : t.length;
        return n ? At(t, 0, -1) : [];
      }
      var LT = re(function(t) {
        var n = Ne(t, Hl);
        return n.length && n[0] === t[0] ? Bl(n) : [];
      }), XT = re(function(t) {
        var n = Ft(t), a = Ne(t, Hl);
        return n === Ft(a) ? n = o : a.pop(), a.length && a[0] === t[0] ? Bl(a, Y(n, 2)) : [];
      }), qT = re(function(t) {
        var n = Ft(t), a = Ne(t, Hl);
        return n = typeof n == "function" ? n : o, n && a.pop(), a.length && a[0] === t[0] ? Bl(a, o, n) : [];
      });
      function KT(t, n) {
        return t == null ? "" : j0.call(t, n);
      }
      function Ft(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function eU(t, n, a) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l;
        return a !== o && (u = ee(a), u = u < 0 ? Fe(l + u, 0) : He(u, l - 1)), n === n ? F0(t, n, u) : ni(t, sf, u, !0);
      }
      function tU(t, n) {
        return t && t.length ? xf(t, ee(n)) : o;
      }
      var nU = re(Sh);
      function Sh(t, n) {
        return t && t.length && n && n.length ? Ol(t, n) : t;
      }
      function rU(t, n, a) {
        return t && t.length && n && n.length ? Ol(t, n, Y(a, 2)) : t;
      }
      function oU(t, n, a) {
        return t && t.length && n && n.length ? Ol(t, n, o, a) : t;
      }
      var aU = Nn(function(t, n) {
        var a = t == null ? 0 : t.length, l = Fl(t, n);
        return Of(t, Ne(n, function(u) {
          return kn(u, a) ? +u : u;
        }).sort(Xf)), l;
      });
      function iU(t, n) {
        var a = [];
        if (!(t && t.length))
          return a;
        var l = -1, u = [], p = t.length;
        for (n = Y(n, 3); ++l < p; ) {
          var w = t[l];
          n(w, l, t) && (a.push(w), u.push(l));
        }
        return Of(t, u), a;
      }
      function sc(t) {
        return t == null ? t : K0.call(t);
      }
      function sU(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (a && typeof a != "number" && et(t, n, a) ? (n = 0, a = l) : (n = n == null ? 0 : ee(n), a = a === o ? l : ee(a)), At(t, n, a)) : [];
      }
      function lU(t, n) {
        return yi(t, n);
      }
      function cU(t, n, a) {
        return Gl(t, n, Y(a, 2));
      }
      function uU(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = yi(t, n);
          if (l < a && Ht(t[l], n))
            return l;
        }
        return -1;
      }
      function dU(t, n) {
        return yi(t, n, !0);
      }
      function fU(t, n, a) {
        return Gl(t, n, Y(a, 2), !0);
      }
      function hU(t, n) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var l = yi(t, n, !0) - 1;
          if (Ht(t[l], n))
            return l;
        }
        return -1;
      }
      function pU(t) {
        return t && t.length ? zf(t) : [];
      }
      function mU(t, n) {
        return t && t.length ? zf(t, Y(n, 2)) : [];
      }
      function wU(t) {
        var n = t == null ? 0 : t.length;
        return n ? At(t, 1, n) : [];
      }
      function vU(t, n, a) {
        return t && t.length ? (n = a || n === o ? 1 : ee(n), At(t, 0, n < 0 ? 0 : n)) : [];
      }
      function VU(t, n, a) {
        var l = t == null ? 0 : t.length;
        return l ? (n = a || n === o ? 1 : ee(n), n = l - n, At(t, n < 0 ? 0 : n, l)) : [];
      }
      function gU(t, n) {
        return t && t.length ? Ni(t, Y(n, 3), !1, !0) : [];
      }
      function TU(t, n) {
        return t && t.length ? Ni(t, Y(n, 3)) : [];
      }
      var UU = re(function(t) {
        return On(ze(t, 1, Me, !0));
      }), yU = re(function(t) {
        var n = Ft(t);
        return Me(n) && (n = o), On(ze(t, 1, Me, !0), Y(n, 2));
      }), NU = re(function(t) {
        var n = Ft(t);
        return n = typeof n == "function" ? n : o, On(ze(t, 1, Me, !0), o, n);
      });
      function kU(t) {
        return t && t.length ? On(t) : [];
      }
      function RU(t, n) {
        return t && t.length ? On(t, Y(n, 2)) : [];
      }
      function MU(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? On(t, o, n) : [];
      }
      function lc(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Wn(t, function(a) {
          if (Me(a))
            return n = Fe(a.length, n), !0;
        }), Rl(n, function(a) {
          return Ne(t, yl(a));
        });
      }
      function Zh(t, n) {
        if (!(t && t.length))
          return [];
        var a = lc(t);
        return n == null ? a : Ne(a, function(l) {
          return pt(n, o, l);
        });
      }
      var bU = re(function(t, n) {
        return Me(t) ? Lo(t, n) : [];
      }), SU = re(function(t) {
        return Pl(Wn(t, Me));
      }), ZU = re(function(t) {
        var n = Ft(t);
        return Me(n) && (n = o), Pl(Wn(t, Me), Y(n, 2));
      }), EU = re(function(t) {
        var n = Ft(t);
        return n = typeof n == "function" ? n : o, Pl(Wn(t, Me), o, n);
      }), JU = re(lc);
      function AU(t, n) {
        return Hf(t || [], n || [], jo);
      }
      function FU(t, n) {
        return Hf(t || [], n || [], Ko);
      }
      var _U = re(function(t) {
        var n = t.length, a = n > 1 ? t[n - 1] : o;
        return a = typeof a == "function" ? (t.pop(), a) : o, Zh(t, a);
      });
      function Eh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function CU(t, n) {
        return n(t), t;
      }
      function Ai(t, n) {
        return n(t);
      }
      var WU = Nn(function(t) {
        var n = t.length, a = n ? t[0] : 0, l = this.__wrapped__, u = function(p) {
          return Fl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ae) || !kn(a) ? this.thru(u) : (l = l.slice(a, +a + (n ? 1 : 0)), l.__actions__.push({
          func: Ai,
          args: [u],
          thisArg: o
        }), new Et(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function BU() {
        return Eh(this);
      }
      function xU() {
        return new Et(this.value(), this.__chain__);
      }
      function IU() {
        this.__values__ === o && (this.__values__ = Gh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function DU() {
        return this;
      }
      function OU(t) {
        for (var n, a = this; a instanceof vi; ) {
          var l = Nh(a);
          l.__index__ = 0, l.__values__ = o, n ? u.__wrapped__ = l : n = l;
          var u = l;
          a = a.__wrapped__;
        }
        return u.__wrapped__ = t, n;
      }
      function QU() {
        var t = this.__wrapped__;
        if (t instanceof ae) {
          var n = t;
          return this.__actions__.length && (n = new ae(this)), n = n.reverse(), n.__actions__.push({
            func: Ai,
            args: [sc],
            thisArg: o
          }), new Et(n, this.__chain__);
        }
        return this.thru(sc);
      }
      function zU() {
        return Pf(this.__wrapped__, this.__actions__);
      }
      var GU = ki(function(t, n, a) {
        me.call(t, a) ? ++t[a] : Un(t, a, 1);
      });
      function YU(t, n, a) {
        var l = q(t) ? of : Cg;
        return a && et(t, n, a) && (n = o), l(t, Y(n, 3));
      }
      function PU(t, n) {
        var a = q(t) ? Wn : Zf;
        return a(t, Y(n, 3));
      }
      var HU = rh(kh), $U = rh(Rh);
      function jU(t, n) {
        return ze(Fi(t, n), 1);
      }
      function LU(t, n) {
        return ze(Fi(t, n), Oe);
      }
      function XU(t, n, a) {
        return a = a === o ? 1 : ee(a), ze(Fi(t, n), a);
      }
      function Jh(t, n) {
        var a = q(t) ? St : Dn;
        return a(t, Y(n, 3));
      }
      function Ah(t, n) {
        var a = q(t) ? w0 : Sf;
        return a(t, Y(n, 3));
      }
      var qU = ki(function(t, n, a) {
        me.call(t, a) ? t[a].push(n) : Un(t, a, [n]);
      });
      function KU(t, n, a, l) {
        t = it(t) ? t : jr(t), a = a && !l ? ee(a) : 0;
        var u = t.length;
        return a < 0 && (a = Fe(u + a, 0)), xi(t) ? a <= u && t.indexOf(n, a) > -1 : !!u && Br(t, n, a) > -1;
      }
      var ey = re(function(t, n, a) {
        var l = -1, u = typeof n == "function", p = it(t) ? k(t.length) : [];
        return Dn(t, function(w) {
          p[++l] = u ? pt(n, w, a) : Xo(w, n, a);
        }), p;
      }), ty = ki(function(t, n, a) {
        Un(t, a, n);
      });
      function Fi(t, n) {
        var a = q(t) ? Ne : Cf;
        return a(t, Y(n, 3));
      }
      function ny(t, n, a, l) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), a = l ? o : a, q(a) || (a = a == null ? [] : [a]), If(t, n, a));
      }
      var ry = ki(function(t, n, a) {
        t[a ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function oy(t, n, a) {
        var l = q(t) ? Tl : cf, u = arguments.length < 3;
        return l(t, Y(n, 4), a, u, Dn);
      }
      function ay(t, n, a) {
        var l = q(t) ? v0 : cf, u = arguments.length < 3;
        return l(t, Y(n, 4), a, u, Sf);
      }
      function iy(t, n) {
        var a = q(t) ? Wn : Zf;
        return a(t, Wi(Y(n, 3)));
      }
      function sy(t) {
        var n = q(t) ? kf : Kg;
        return n(t);
      }
      function ly(t, n, a) {
        (a ? et(t, n, a) : n === o) ? n = 1 : n = ee(n);
        var l = q(t) ? Eg : eT;
        return l(t, n);
      }
      function cy(t) {
        var n = q(t) ? Jg : nT;
        return n(t);
      }
      function uy(t) {
        if (t == null)
          return 0;
        if (it(t))
          return xi(t) ? Ir(t) : t.length;
        var n = $e(t);
        return n == zt || n == Gt ? t.size : Il(t).length;
      }
      function dy(t, n, a) {
        var l = q(t) ? Ul : rT;
        return a && et(t, n, a) && (n = o), l(t, Y(n, 3));
      }
      var fy = re(function(t, n) {
        if (t == null)
          return [];
        var a = n.length;
        return a > 1 && et(t, n[0], n[1]) ? n = [] : a > 2 && et(n[0], n[1], n[2]) && (n = [n[0]]), If(t, ze(n, 1), []);
      }), _i = P0 || function() {
        return Qe.Date.now();
      };
      function hy(t, n) {
        if (typeof n != "function")
          throw new Zt(d);
        return t = ee(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Fh(t, n, a) {
        return n = a ? o : n, n = t && n == null ? t.length : n, yn(t, Q, o, o, o, o, n);
      }
      function _h(t, n) {
        var a;
        if (typeof n != "function")
          throw new Zt(d);
        return t = ee(t), function() {
          return --t > 0 && (a = n.apply(this, arguments)), t <= 1 && (n = o), a;
        };
      }
      var cc = re(function(t, n, a) {
        var l = C;
        if (a.length) {
          var u = xn(a, Hr(cc));
          l |= S;
        }
        return yn(t, l, n, a, u);
      }), Ch = re(function(t, n, a) {
        var l = C | F;
        if (a.length) {
          var u = xn(a, Hr(Ch));
          l |= S;
        }
        return yn(n, l, t, a, u);
      });
      function Wh(t, n, a) {
        n = a ? o : n;
        var l = yn(t, _, o, o, o, o, o, n);
        return l.placeholder = Wh.placeholder, l;
      }
      function Bh(t, n, a) {
        n = a ? o : n;
        var l = yn(t, I, o, o, o, o, o, n);
        return l.placeholder = Bh.placeholder, l;
      }
      function xh(t, n, a) {
        var l, u, p, w, T, N, Z = 0, E = !1, J = !1, B = !0;
        if (typeof t != "function")
          throw new Zt(d);
        n = _t(n) || 0, ke(a) && (E = !!a.leading, J = "maxWait" in a, p = J ? Fe(_t(a.maxWait) || 0, n) : p, B = "trailing" in a ? !!a.trailing : B);
        function O(be) {
          var $t = l, bn = u;
          return l = u = o, Z = be, w = t.apply(bn, $t), w;
        }
        function H(be) {
          return Z = be, T = na(oe, n), E ? O(be) : w;
        }
        function te(be) {
          var $t = be - N, bn = be - Z, rp = n - $t;
          return J ? He(rp, p - bn) : rp;
        }
        function $(be) {
          var $t = be - N, bn = be - Z;
          return N === o || $t >= n || $t < 0 || J && bn >= p;
        }
        function oe() {
          var be = _i();
          if ($(be))
            return ie(be);
          T = na(oe, te(be));
        }
        function ie(be) {
          return T = o, B && l ? O(be) : (l = u = o, w);
        }
        function Vt() {
          T !== o && $f(T), Z = 0, l = N = u = T = o;
        }
        function tt() {
          return T === o ? w : ie(_i());
        }
        function gt() {
          var be = _i(), $t = $(be);
          if (l = arguments, u = this, N = be, $t) {
            if (T === o)
              return H(N);
            if (J)
              return $f(T), T = na(oe, n), O(N);
          }
          return T === o && (T = na(oe, n)), w;
        }
        return gt.cancel = Vt, gt.flush = tt, gt;
      }
      var py = re(function(t, n) {
        return bf(t, 1, n);
      }), my = re(function(t, n, a) {
        return bf(t, _t(n) || 0, a);
      });
      function wy(t) {
        return yn(t, j);
      }
      function Ci(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Zt(d);
        var a = function() {
          var l = arguments, u = n ? n.apply(this, l) : l[0], p = a.cache;
          if (p.has(u))
            return p.get(u);
          var w = t.apply(this, l);
          return a.cache = p.set(u, w) || p, w;
        };
        return a.cache = new (Ci.Cache || Tn)(), a;
      }
      Ci.Cache = Tn;
      function Wi(t) {
        if (typeof t != "function")
          throw new Zt(d);
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
      function vy(t) {
        return _h(2, t);
      }
      var Vy = oT(function(t, n) {
        n = n.length == 1 && q(n[0]) ? Ne(n[0], mt(Y())) : Ne(ze(n, 1), mt(Y()));
        var a = n.length;
        return re(function(l) {
          for (var u = -1, p = He(l.length, a); ++u < p; )
            l[u] = n[u].call(this, l[u]);
          return pt(t, this, l);
        });
      }), uc = re(function(t, n) {
        var a = xn(n, Hr(uc));
        return yn(t, S, o, n, a);
      }), Ih = re(function(t, n) {
        var a = xn(n, Hr(Ih));
        return yn(t, z, o, n, a);
      }), gy = Nn(function(t, n) {
        return yn(t, x, o, o, o, n);
      });
      function Ty(t, n) {
        if (typeof t != "function")
          throw new Zt(d);
        return n = n === o ? n : ee(n), re(t, n);
      }
      function Uy(t, n) {
        if (typeof t != "function")
          throw new Zt(d);
        return n = n == null ? 0 : Fe(ee(n), 0), re(function(a) {
          var l = a[n], u = zn(a, 0, n);
          return l && Bn(u, l), pt(t, this, u);
        });
      }
      function yy(t, n, a) {
        var l = !0, u = !0;
        if (typeof t != "function")
          throw new Zt(d);
        return ke(a) && (l = "leading" in a ? !!a.leading : l, u = "trailing" in a ? !!a.trailing : u), xh(t, n, {
          leading: l,
          maxWait: n,
          trailing: u
        });
      }
      function Ny(t) {
        return Fh(t, 1);
      }
      function ky(t, n) {
        return uc($l(n), t);
      }
      function Ry() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function My(t) {
        return Jt(t, M);
      }
      function by(t, n) {
        return n = typeof n == "function" ? n : o, Jt(t, M, n);
      }
      function Sy(t) {
        return Jt(t, g | M);
      }
      function Zy(t, n) {
        return n = typeof n == "function" ? n : o, Jt(t, g | M, n);
      }
      function Ey(t, n) {
        return n == null || Mf(t, n, We(n));
      }
      function Ht(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Jy = Si(Wl), Ay = Si(function(t, n) {
        return t >= n;
      }), pr = Af(function() {
        return arguments;
      }()) ? Af : function(t) {
        return Re(t) && me.call(t, "callee") && !Vf.call(t, "callee");
      }, q = k.isArray, Fy = qd ? mt(qd) : Og;
      function it(t) {
        return t != null && Bi(t.length) && !Rn(t);
      }
      function Me(t) {
        return Re(t) && it(t);
      }
      function _y(t) {
        return t === !0 || t === !1 || Re(t) && Ke(t) == Wo;
      }
      var Gn = $0 || Uc, Cy = Kd ? mt(Kd) : Qg;
      function Wy(t) {
        return Re(t) && t.nodeType === 1 && !ra(t);
      }
      function By(t) {
        if (t == null)
          return !0;
        if (it(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || $r(t) || pr(t)))
          return !t.length;
        var n = $e(t);
        if (n == zt || n == Gt)
          return !t.size;
        if (ta(t))
          return !Il(t).length;
        for (var a in t)
          if (me.call(t, a))
            return !1;
        return !0;
      }
      function xy(t, n) {
        return qo(t, n);
      }
      function Iy(t, n, a) {
        a = typeof a == "function" ? a : o;
        var l = a ? a(t, n) : o;
        return l === o ? qo(t, n, o, a) : !!l;
      }
      function dc(t) {
        if (!Re(t))
          return !1;
        var n = Ke(t);
        return n == ja || n == lV || typeof t.message == "string" && typeof t.name == "string" && !ra(t);
      }
      function Dy(t) {
        return typeof t == "number" && Tf(t);
      }
      function Rn(t) {
        if (!ke(t))
          return !1;
        var n = Ke(t);
        return n == La || n == Md || n == sV || n == uV;
      }
      function Dh(t) {
        return typeof t == "number" && t == ee(t);
      }
      function Bi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= qe;
      }
      function ke(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Re(t) {
        return t != null && typeof t == "object";
      }
      var Oh = ef ? mt(ef) : Gg;
      function Oy(t, n) {
        return t === n || xl(t, n, tc(n));
      }
      function Qy(t, n, a) {
        return a = typeof a == "function" ? a : o, xl(t, n, tc(n), a);
      }
      function zy(t) {
        return Qh(t) && t != +t;
      }
      function Gy(t) {
        if (bT(t))
          throw new X(c);
        return Ff(t);
      }
      function Yy(t) {
        return t === null;
      }
      function Py(t) {
        return t == null;
      }
      function Qh(t) {
        return typeof t == "number" || Re(t) && Ke(t) == xo;
      }
      function ra(t) {
        if (!Re(t) || Ke(t) != Vn)
          return !1;
        var n = ui(t);
        if (n === null)
          return !0;
        var a = me.call(n, "constructor") && n.constructor;
        return typeof a == "function" && a instanceof a && ii.call(a) == Q0;
      }
      var fc = tf ? mt(tf) : Yg;
      function Hy(t) {
        return Dh(t) && t >= -qe && t <= qe;
      }
      var zh = nf ? mt(nf) : Pg;
      function xi(t) {
        return typeof t == "string" || !q(t) && Re(t) && Ke(t) == Do;
      }
      function vt(t) {
        return typeof t == "symbol" || Re(t) && Ke(t) == Xa;
      }
      var $r = rf ? mt(rf) : Hg;
      function $y(t) {
        return t === o;
      }
      function jy(t) {
        return Re(t) && $e(t) == Oo;
      }
      function Ly(t) {
        return Re(t) && Ke(t) == fV;
      }
      var Xy = Si(Dl), qy = Si(function(t, n) {
        return t <= n;
      });
      function Gh(t) {
        if (!t)
          return [];
        if (it(t))
          return xi(t) ? Yt(t) : at(t);
        if (Go && t[Go])
          return E0(t[Go]());
        var n = $e(t), a = n == zt ? bl : n == Gt ? ri : jr;
        return a(t);
      }
      function Mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = _t(t), t === Oe || t === -Oe) {
          var n = t < 0 ? -1 : 1;
          return n * Co;
        }
        return t === t ? t : 0;
      }
      function ee(t) {
        var n = Mn(t), a = n % 1;
        return n === n ? a ? n - a : n : 0;
      }
      function Yh(t) {
        return t ? ur(ee(t), 0, cn) : 0;
      }
      function _t(t) {
        if (typeof t == "number")
          return t;
        if (vt(t))
          return Ha;
        if (ke(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ke(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = uf(t);
        var a = FV.test(t);
        return a || CV.test(t) ? h0(t.slice(2), a ? 2 : 8) : AV.test(t) ? Ha : +t;
      }
      function Ph(t) {
        return dn(t, st(t));
      }
      function Ky(t) {
        return t ? ur(ee(t), -qe, qe) : t === 0 ? t : 0;
      }
      function fe(t) {
        return t == null ? "" : wt(t);
      }
      var eN = Yr(function(t, n) {
        if (ta(n) || it(n)) {
          dn(n, We(n), t);
          return;
        }
        for (var a in n)
          me.call(n, a) && jo(t, a, n[a]);
      }), Hh = Yr(function(t, n) {
        dn(n, st(n), t);
      }), Ii = Yr(function(t, n, a, l) {
        dn(n, st(n), t, l);
      }), tN = Yr(function(t, n, a, l) {
        dn(n, We(n), t, l);
      }), nN = Nn(Fl);
      function rN(t, n) {
        var a = Gr(t);
        return n == null ? a : Rf(a, n);
      }
      var oN = re(function(t, n) {
        t = Ve(t);
        var a = -1, l = n.length, u = l > 2 ? n[2] : o;
        for (u && et(n[0], n[1], u) && (l = 1); ++a < l; )
          for (var p = n[a], w = st(p), T = -1, N = w.length; ++T < N; ) {
            var Z = w[T], E = t[Z];
            (E === o || Ht(E, Or[Z]) && !me.call(t, Z)) && (t[Z] = p[Z]);
          }
        return t;
      }), aN = re(function(t) {
        return t.push(o, uh), pt($h, o, t);
      });
      function iN(t, n) {
        return af(t, Y(n, 3), un);
      }
      function sN(t, n) {
        return af(t, Y(n, 3), Cl);
      }
      function lN(t, n) {
        return t == null ? t : _l(t, Y(n, 3), st);
      }
      function cN(t, n) {
        return t == null ? t : Ef(t, Y(n, 3), st);
      }
      function uN(t, n) {
        return t && un(t, Y(n, 3));
      }
      function dN(t, n) {
        return t && Cl(t, Y(n, 3));
      }
      function fN(t) {
        return t == null ? [] : Ti(t, We(t));
      }
      function hN(t) {
        return t == null ? [] : Ti(t, st(t));
      }
      function hc(t, n, a) {
        var l = t == null ? o : dr(t, n);
        return l === o ? a : l;
      }
      function pN(t, n) {
        return t != null && hh(t, n, Bg);
      }
      function pc(t, n) {
        return t != null && hh(t, n, xg);
      }
      var mN = ah(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = si.call(n)), t[n] = a;
      }, wc(lt)), wN = ah(function(t, n, a) {
        n != null && typeof n.toString != "function" && (n = si.call(n)), me.call(t, n) ? t[n].push(a) : t[n] = [a];
      }, Y), vN = re(Xo);
      function We(t) {
        return it(t) ? Nf(t) : Il(t);
      }
      function st(t) {
        return it(t) ? Nf(t, !0) : $g(t);
      }
      function VN(t, n) {
        var a = {};
        return n = Y(n, 3), un(t, function(l, u, p) {
          Un(a, n(l, u, p), l);
        }), a;
      }
      function gN(t, n) {
        var a = {};
        return n = Y(n, 3), un(t, function(l, u, p) {
          Un(a, u, n(l, u, p));
        }), a;
      }
      var TN = Yr(function(t, n, a) {
        Ui(t, n, a);
      }), $h = Yr(function(t, n, a, l) {
        Ui(t, n, a, l);
      }), UN = Nn(function(t, n) {
        var a = {};
        if (t == null)
          return a;
        var l = !1;
        n = Ne(n, function(p) {
          return p = Qn(p, t), l || (l = p.length > 1), p;
        }), dn(t, Kl(t), a), l && (a = Jt(a, g | U | M, mT));
        for (var u = n.length; u--; )
          Yl(a, n[u]);
        return a;
      });
      function yN(t, n) {
        return jh(t, Wi(Y(n)));
      }
      var NN = Nn(function(t, n) {
        return t == null ? {} : Lg(t, n);
      });
      function jh(t, n) {
        if (t == null)
          return {};
        var a = Ne(Kl(t), function(l) {
          return [l];
        });
        return n = Y(n), Df(t, a, function(l, u) {
          return n(l, u[0]);
        });
      }
      function kN(t, n, a) {
        n = Qn(n, t);
        var l = -1, u = n.length;
        for (u || (u = 1, t = o); ++l < u; ) {
          var p = t == null ? o : t[fn(n[l])];
          p === o && (l = u, p = a), t = Rn(p) ? p.call(t) : p;
        }
        return t;
      }
      function RN(t, n, a) {
        return t == null ? t : Ko(t, n, a);
      }
      function MN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Ko(t, n, a, l);
      }
      var Lh = lh(We), Xh = lh(st);
      function bN(t, n, a) {
        var l = q(t), u = l || Gn(t) || $r(t);
        if (n = Y(n, 4), a == null) {
          var p = t && t.constructor;
          u ? a = l ? new p() : [] : ke(t) ? a = Rn(p) ? Gr(ui(t)) : {} : a = {};
        }
        return (u ? St : un)(t, function(w, T, N) {
          return n(a, w, T, N);
        }), a;
      }
      function SN(t, n) {
        return t == null ? !0 : Yl(t, n);
      }
      function ZN(t, n, a) {
        return t == null ? t : Yf(t, n, $l(a));
      }
      function EN(t, n, a, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Yf(t, n, $l(a), l);
      }
      function jr(t) {
        return t == null ? [] : Ml(t, We(t));
      }
      function JN(t) {
        return t == null ? [] : Ml(t, st(t));
      }
      function AN(t, n, a) {
        return a === o && (a = n, n = o), a !== o && (a = _t(a), a = a === a ? a : 0), n !== o && (n = _t(n), n = n === n ? n : 0), ur(_t(t), n, a);
      }
      function FN(t, n, a) {
        return n = Mn(n), a === o ? (a = n, n = 0) : a = Mn(a), t = _t(t), Ig(t, n, a);
      }
      function _N(t, n, a) {
        if (a && typeof a != "boolean" && et(t, n, a) && (n = a = o), a === o && (typeof n == "boolean" ? (a = n, n = o) : typeof t == "boolean" && (a = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Mn(t), n === o ? (n = t, t = 0) : n = Mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (a || t % 1 || n % 1) {
          var u = Uf();
          return He(t + u * (n - t + f0("1e-" + ((u + "").length - 1))), n);
        }
        return Ql(t, n);
      }
      var CN = Pr(function(t, n, a) {
        return n = n.toLowerCase(), t + (a ? qh(n) : n);
      });
      function qh(t) {
        return mc(fe(t).toLowerCase());
      }
      function Kh(t) {
        return t = fe(t), t && t.replace(BV, R0).replace(n0, "");
      }
      function WN(t, n, a) {
        t = fe(t), n = wt(n);
        var l = t.length;
        a = a === o ? l : ur(ee(a), 0, l);
        var u = a;
        return a -= n.length, a >= 0 && t.slice(a, u) == n;
      }
      function BN(t) {
        return t = fe(t), t && vV.test(t) ? t.replace(Zd, M0) : t;
      }
      function xN(t) {
        return t = fe(t), t && NV.test(t) ? t.replace(ul, "\\$&") : t;
      }
      var IN = Pr(function(t, n, a) {
        return t + (a ? "-" : "") + n.toLowerCase();
      }), DN = Pr(function(t, n, a) {
        return t + (a ? " " : "") + n.toLowerCase();
      }), ON = nh("toLowerCase");
      function QN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ir(t) : 0;
        if (!n || l >= n)
          return t;
        var u = (n - l) / 2;
        return bi(pi(u), a) + t + bi(hi(u), a);
      }
      function zN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ir(t) : 0;
        return n && l < n ? t + bi(n - l, a) : t;
      }
      function GN(t, n, a) {
        t = fe(t), n = ee(n);
        var l = n ? Ir(t) : 0;
        return n && l < n ? bi(n - l, a) + t : t;
      }
      function YN(t, n, a) {
        return a || n == null ? n = 0 : n && (n = +n), q0(fe(t).replace(dl, ""), n || 0);
      }
      function PN(t, n, a) {
        return (a ? et(t, n, a) : n === o) ? n = 1 : n = ee(n), zl(fe(t), n);
      }
      function HN() {
        var t = arguments, n = fe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var $N = Pr(function(t, n, a) {
        return t + (a ? "_" : "") + n.toLowerCase();
      });
      function jN(t, n, a) {
        return a && typeof a != "number" && et(t, n, a) && (n = a = o), a = a === o ? cn : a >>> 0, a ? (t = fe(t), t && (typeof n == "string" || n != null && !fc(n)) && (n = wt(n), !n && xr(t)) ? zn(Yt(t), 0, a) : t.split(n, a)) : [];
      }
      var LN = Pr(function(t, n, a) {
        return t + (a ? " " : "") + mc(n);
      });
      function XN(t, n, a) {
        return t = fe(t), a = a == null ? 0 : ur(ee(a), 0, t.length), n = wt(n), t.slice(a, a + n.length) == n;
      }
      function qN(t, n, a) {
        var l = h.templateSettings;
        a && et(t, n, a) && (n = o), t = fe(t), n = Ii({}, n, l, ch);
        var u = Ii({}, n.imports, l.imports, ch), p = We(u), w = Ml(u, p), T, N, Z = 0, E = n.interpolate || qa, J = "__p += '", B = Sl(
          (n.escape || qa).source + "|" + E.source + "|" + (E === Ed ? JV : qa).source + "|" + (n.evaluate || qa).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (me.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++s0 + "]") + `
`;
        t.replace(B, function($, oe, ie, Vt, tt, gt) {
          return ie || (ie = Vt), J += t.slice(Z, gt).replace(xV, b0), oe && (T = !0, J += `' +
__e(` + oe + `) +
'`), tt && (N = !0, J += `';
` + tt + `;
__p += '`), ie && (J += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), Z = gt + $.length, $;
        }), J += `';
`;
        var H = me.call(n, "variable") && n.variable;
        if (!H)
          J = `with (obj) {
` + J + `
}
`;
        else if (ZV.test(H))
          throw new X(f);
        J = (N ? J.replace(hV, "") : J).replace(pV, "$1").replace(mV, "$1;"), J = "function(" + (H || "obj") + `) {
` + (H ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var te = tp(function() {
          return ue(p, O + "return " + J).apply(o, w);
        });
        if (te.source = J, dc(te))
          throw te;
        return te;
      }
      function KN(t) {
        return fe(t).toLowerCase();
      }
      function ek(t) {
        return fe(t).toUpperCase();
      }
      function tk(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return uf(t);
        if (!t || !(n = wt(n)))
          return t;
        var l = Yt(t), u = Yt(n), p = df(l, u), w = ff(l, u) + 1;
        return zn(l, p, w).join("");
      }
      function nk(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.slice(0, pf(t) + 1);
        if (!t || !(n = wt(n)))
          return t;
        var l = Yt(t), u = ff(l, Yt(n)) + 1;
        return zn(l, 0, u).join("");
      }
      function rk(t, n, a) {
        if (t = fe(t), t && (a || n === o))
          return t.replace(dl, "");
        if (!t || !(n = wt(n)))
          return t;
        var l = Yt(t), u = df(l, Yt(n));
        return zn(l, u).join("");
      }
      function ok(t, n) {
        var a = K, l = Ue;
        if (ke(n)) {
          var u = "separator" in n ? n.separator : u;
          a = "length" in n ? ee(n.length) : a, l = "omission" in n ? wt(n.omission) : l;
        }
        t = fe(t);
        var p = t.length;
        if (xr(t)) {
          var w = Yt(t);
          p = w.length;
        }
        if (a >= p)
          return t;
        var T = a - Ir(l);
        if (T < 1)
          return l;
        var N = w ? zn(w, 0, T).join("") : t.slice(0, T);
        if (u === o)
          return N + l;
        if (w && (T += N.length - T), fc(u)) {
          if (t.slice(T).search(u)) {
            var Z, E = N;
            for (u.global || (u = Sl(u.source, fe(Jd.exec(u)) + "g")), u.lastIndex = 0; Z = u.exec(E); )
              var J = Z.index;
            N = N.slice(0, J === o ? T : J);
          }
        } else if (t.indexOf(wt(u), T) != T) {
          var B = N.lastIndexOf(u);
          B > -1 && (N = N.slice(0, B));
        }
        return N + l;
      }
      function ak(t) {
        return t = fe(t), t && wV.test(t) ? t.replace(Sd, _0) : t;
      }
      var ik = Pr(function(t, n, a) {
        return t + (a ? " " : "") + n.toUpperCase();
      }), mc = nh("toUpperCase");
      function ep(t, n, a) {
        return t = fe(t), n = a ? o : n, n === o ? Z0(t) ? B0(t) : T0(t) : t.match(n) || [];
      }
      var tp = re(function(t, n) {
        try {
          return pt(t, o, n);
        } catch (a) {
          return dc(a) ? a : new X(a);
        }
      }), sk = Nn(function(t, n) {
        return St(n, function(a) {
          a = fn(a), Un(t, a, cc(t[a], t));
        }), t;
      });
      function lk(t) {
        var n = t == null ? 0 : t.length, a = Y();
        return t = n ? Ne(t, function(l) {
          if (typeof l[1] != "function")
            throw new Zt(d);
          return [a(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var u = -1; ++u < n; ) {
            var p = t[u];
            if (pt(p[0], this, l))
              return pt(p[1], this, l);
          }
        });
      }
      function ck(t) {
        return _g(Jt(t, g));
      }
      function wc(t) {
        return function() {
          return t;
        };
      }
      function uk(t, n) {
        return t == null || t !== t ? n : t;
      }
      var dk = oh(), fk = oh(!0);
      function lt(t) {
        return t;
      }
      function vc(t) {
        return _f(typeof t == "function" ? t : Jt(t, g));
      }
      function hk(t) {
        return Wf(Jt(t, g));
      }
      function pk(t, n) {
        return Bf(t, Jt(n, g));
      }
      var mk = re(function(t, n) {
        return function(a) {
          return Xo(a, t, n);
        };
      }), wk = re(function(t, n) {
        return function(a) {
          return Xo(t, a, n);
        };
      });
      function Vc(t, n, a) {
        var l = We(n), u = Ti(n, l);
        a == null && !(ke(n) && (u.length || !l.length)) && (a = n, n = t, t = this, u = Ti(n, We(n)));
        var p = !(ke(a) && "chain" in a) || !!a.chain, w = Rn(t);
        return St(u, function(T) {
          var N = n[T];
          t[T] = N, w && (t.prototype[T] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var E = t(this.__wrapped__), J = E.__actions__ = at(this.__actions__);
              return J.push({ func: N, args: arguments, thisArg: t }), E.__chain__ = Z, E;
            }
            return N.apply(t, Bn([this.value()], arguments));
          });
        }), t;
      }
      function vk() {
        return Qe._ === this && (Qe._ = z0), this;
      }
      function gc() {
      }
      function Vk(t) {
        return t = ee(t), re(function(n) {
          return xf(n, t);
        });
      }
      var gk = Ll(Ne), Tk = Ll(of), Uk = Ll(Ul);
      function np(t) {
        return rc(t) ? yl(fn(t)) : Xg(t);
      }
      function yk(t) {
        return function(n) {
          return t == null ? o : dr(t, n);
        };
      }
      var Nk = ih(), kk = ih(!0);
      function Tc() {
        return [];
      }
      function Uc() {
        return !1;
      }
      function Rk() {
        return {};
      }
      function Mk() {
        return "";
      }
      function bk() {
        return !0;
      }
      function Sk(t, n) {
        if (t = ee(t), t < 1 || t > qe)
          return [];
        var a = cn, l = He(t, cn);
        n = Y(n), t -= cn;
        for (var u = Rl(l, n); ++a < t; )
          n(a);
        return u;
      }
      function Zk(t) {
        return q(t) ? Ne(t, fn) : vt(t) ? [t] : at(yh(fe(t)));
      }
      function Ek(t) {
        var n = ++O0;
        return fe(t) + n;
      }
      var Jk = Mi(function(t, n) {
        return t + n;
      }, 0), Ak = Xl("ceil"), Fk = Mi(function(t, n) {
        return t / n;
      }, 1), _k = Xl("floor");
      function Ck(t) {
        return t && t.length ? gi(t, lt, Wl) : o;
      }
      function Wk(t, n) {
        return t && t.length ? gi(t, Y(n, 2), Wl) : o;
      }
      function Bk(t) {
        return lf(t, lt);
      }
      function xk(t, n) {
        return lf(t, Y(n, 2));
      }
      function Ik(t) {
        return t && t.length ? gi(t, lt, Dl) : o;
      }
      function Dk(t, n) {
        return t && t.length ? gi(t, Y(n, 2), Dl) : o;
      }
      var Ok = Mi(function(t, n) {
        return t * n;
      }, 1), Qk = Xl("round"), zk = Mi(function(t, n) {
        return t - n;
      }, 0);
      function Gk(t) {
        return t && t.length ? kl(t, lt) : 0;
      }
      function Yk(t, n) {
        return t && t.length ? kl(t, Y(n, 2)) : 0;
      }
      return h.after = hy, h.ary = Fh, h.assign = eN, h.assignIn = Hh, h.assignInWith = Ii, h.assignWith = tN, h.at = nN, h.before = _h, h.bind = cc, h.bindAll = sk, h.bindKey = Ch, h.castArray = Ry, h.chain = Eh, h.chunk = _T, h.compact = CT, h.concat = WT, h.cond = lk, h.conforms = ck, h.constant = wc, h.countBy = GU, h.create = rN, h.curry = Wh, h.curryRight = Bh, h.debounce = xh, h.defaults = oN, h.defaultsDeep = aN, h.defer = py, h.delay = my, h.difference = BT, h.differenceBy = xT, h.differenceWith = IT, h.drop = DT, h.dropRight = OT, h.dropRightWhile = QT, h.dropWhile = zT, h.fill = GT, h.filter = PU, h.flatMap = jU, h.flatMapDeep = LU, h.flatMapDepth = XU, h.flatten = Mh, h.flattenDeep = YT, h.flattenDepth = PT, h.flip = wy, h.flow = dk, h.flowRight = fk, h.fromPairs = HT, h.functions = fN, h.functionsIn = hN, h.groupBy = qU, h.initial = jT, h.intersection = LT, h.intersectionBy = XT, h.intersectionWith = qT, h.invert = mN, h.invertBy = wN, h.invokeMap = ey, h.iteratee = vc, h.keyBy = ty, h.keys = We, h.keysIn = st, h.map = Fi, h.mapKeys = VN, h.mapValues = gN, h.matches = hk, h.matchesProperty = pk, h.memoize = Ci, h.merge = TN, h.mergeWith = $h, h.method = mk, h.methodOf = wk, h.mixin = Vc, h.negate = Wi, h.nthArg = Vk, h.omit = UN, h.omitBy = yN, h.once = vy, h.orderBy = ny, h.over = gk, h.overArgs = Vy, h.overEvery = Tk, h.overSome = Uk, h.partial = uc, h.partialRight = Ih, h.partition = ry, h.pick = NN, h.pickBy = jh, h.property = np, h.propertyOf = yk, h.pull = nU, h.pullAll = Sh, h.pullAllBy = rU, h.pullAllWith = oU, h.pullAt = aU, h.range = Nk, h.rangeRight = kk, h.rearg = gy, h.reject = iy, h.remove = iU, h.rest = Ty, h.reverse = sc, h.sampleSize = ly, h.set = RN, h.setWith = MN, h.shuffle = cy, h.slice = sU, h.sortBy = fy, h.sortedUniq = pU, h.sortedUniqBy = mU, h.split = jN, h.spread = Uy, h.tail = wU, h.take = vU, h.takeRight = VU, h.takeRightWhile = gU, h.takeWhile = TU, h.tap = CU, h.throttle = yy, h.thru = Ai, h.toArray = Gh, h.toPairs = Lh, h.toPairsIn = Xh, h.toPath = Zk, h.toPlainObject = Ph, h.transform = bN, h.unary = Ny, h.union = UU, h.unionBy = yU, h.unionWith = NU, h.uniq = kU, h.uniqBy = RU, h.uniqWith = MU, h.unset = SN, h.unzip = lc, h.unzipWith = Zh, h.update = ZN, h.updateWith = EN, h.values = jr, h.valuesIn = JN, h.without = bU, h.words = ep, h.wrap = ky, h.xor = SU, h.xorBy = ZU, h.xorWith = EU, h.zip = JU, h.zipObject = AU, h.zipObjectDeep = FU, h.zipWith = _U, h.entries = Lh, h.entriesIn = Xh, h.extend = Hh, h.extendWith = Ii, Vc(h, h), h.add = Jk, h.attempt = tp, h.camelCase = CN, h.capitalize = qh, h.ceil = Ak, h.clamp = AN, h.clone = My, h.cloneDeep = Sy, h.cloneDeepWith = Zy, h.cloneWith = by, h.conformsTo = Ey, h.deburr = Kh, h.defaultTo = uk, h.divide = Fk, h.endsWith = WN, h.eq = Ht, h.escape = BN, h.escapeRegExp = xN, h.every = YU, h.find = HU, h.findIndex = kh, h.findKey = iN, h.findLast = $U, h.findLastIndex = Rh, h.findLastKey = sN, h.floor = _k, h.forEach = Jh, h.forEachRight = Ah, h.forIn = lN, h.forInRight = cN, h.forOwn = uN, h.forOwnRight = dN, h.get = hc, h.gt = Jy, h.gte = Ay, h.has = pN, h.hasIn = pc, h.head = bh, h.identity = lt, h.includes = KU, h.indexOf = $T, h.inRange = FN, h.invoke = vN, h.isArguments = pr, h.isArray = q, h.isArrayBuffer = Fy, h.isArrayLike = it, h.isArrayLikeObject = Me, h.isBoolean = _y, h.isBuffer = Gn, h.isDate = Cy, h.isElement = Wy, h.isEmpty = By, h.isEqual = xy, h.isEqualWith = Iy, h.isError = dc, h.isFinite = Dy, h.isFunction = Rn, h.isInteger = Dh, h.isLength = Bi, h.isMap = Oh, h.isMatch = Oy, h.isMatchWith = Qy, h.isNaN = zy, h.isNative = Gy, h.isNil = Py, h.isNull = Yy, h.isNumber = Qh, h.isObject = ke, h.isObjectLike = Re, h.isPlainObject = ra, h.isRegExp = fc, h.isSafeInteger = Hy, h.isSet = zh, h.isString = xi, h.isSymbol = vt, h.isTypedArray = $r, h.isUndefined = $y, h.isWeakMap = jy, h.isWeakSet = Ly, h.join = KT, h.kebabCase = IN, h.last = Ft, h.lastIndexOf = eU, h.lowerCase = DN, h.lowerFirst = ON, h.lt = Xy, h.lte = qy, h.max = Ck, h.maxBy = Wk, h.mean = Bk, h.meanBy = xk, h.min = Ik, h.minBy = Dk, h.stubArray = Tc, h.stubFalse = Uc, h.stubObject = Rk, h.stubString = Mk, h.stubTrue = bk, h.multiply = Ok, h.nth = tU, h.noConflict = vk, h.noop = gc, h.now = _i, h.pad = QN, h.padEnd = zN, h.padStart = GN, h.parseInt = YN, h.random = _N, h.reduce = oy, h.reduceRight = ay, h.repeat = PN, h.replace = HN, h.result = kN, h.round = Qk, h.runInContext = y, h.sample = sy, h.size = uy, h.snakeCase = $N, h.some = dy, h.sortedIndex = lU, h.sortedIndexBy = cU, h.sortedIndexOf = uU, h.sortedLastIndex = dU, h.sortedLastIndexBy = fU, h.sortedLastIndexOf = hU, h.startCase = LN, h.startsWith = XN, h.subtract = zk, h.sum = Gk, h.sumBy = Yk, h.template = qN, h.times = Sk, h.toFinite = Mn, h.toInteger = ee, h.toLength = Yh, h.toLower = KN, h.toNumber = _t, h.toSafeInteger = Ky, h.toString = fe, h.toUpper = ek, h.trim = tk, h.trimEnd = nk, h.trimStart = rk, h.truncate = ok, h.unescape = ak, h.uniqueId = Ek, h.upperCase = ik, h.upperFirst = mc, h.each = Jh, h.eachRight = Ah, h.first = bh, Vc(h, function() {
        var t = {};
        return un(h, function(n, a) {
          me.call(h.prototype, a) || (t[a] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, St(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), St(["drop", "take"], function(t, n) {
        ae.prototype[t] = function(a) {
          a = a === o ? 1 : Fe(ee(a), 0);
          var l = this.__filtered__ && !n ? new ae(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = He(a, l.__takeCount__) : l.__views__.push({
            size: He(a, cn),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ae.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), St(["filter", "map", "takeWhile"], function(t, n) {
        var a = n + 1, l = a == se || a == Ee;
        ae.prototype[t] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Y(u, 3),
            type: a
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), St(["head", "last"], function(t, n) {
        var a = "take" + (n ? "Right" : "");
        ae.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), St(["initial", "tail"], function(t, n) {
        var a = "drop" + (n ? "" : "Right");
        ae.prototype[t] = function() {
          return this.__filtered__ ? new ae(this) : this[a](1);
        };
      }), ae.prototype.compact = function() {
        return this.filter(lt);
      }, ae.prototype.find = function(t) {
        return this.filter(t).head();
      }, ae.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ae.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ae(this) : this.map(function(a) {
          return Xo(a, t, n);
        });
      }), ae.prototype.reject = function(t) {
        return this.filter(Wi(Y(t)));
      }, ae.prototype.slice = function(t, n) {
        t = ee(t);
        var a = this;
        return a.__filtered__ && (t > 0 || n < 0) ? new ae(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), n !== o && (n = ee(n), a = n < 0 ? a.dropRight(-n) : a.take(n - t)), a);
      }, ae.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ae.prototype.toArray = function() {
        return this.take(cn);
      }, un(ae.prototype, function(t, n) {
        var a = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), u = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var w = this.__wrapped__, T = l ? [1] : arguments, N = w instanceof ae, Z = T[0], E = N || q(w), J = function(oe) {
            var ie = u.apply(h, Bn([oe], T));
            return l && B ? ie[0] : ie;
          };
          E && a && typeof Z == "function" && Z.length != 1 && (N = E = !1);
          var B = this.__chain__, O = !!this.__actions__.length, H = p && !B, te = N && !O;
          if (!p && E) {
            w = te ? w : new ae(this);
            var $ = t.apply(w, T);
            return $.__actions__.push({ func: Ai, args: [J], thisArg: o }), new Et($, B);
          }
          return H && te ? t.apply(this, T) : ($ = this.thru(J), H ? l ? $.value()[0] : $.value() : $);
        });
      }), St(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = oi[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), un(ae.prototype, function(t, n) {
        var a = h[n];
        if (a) {
          var l = a.name + "";
          me.call(zr, l) || (zr[l] = []), zr[l].push({ name: n, func: a });
        }
      }), zr[Ri(o, F).name] = [{
        name: "wrapper",
        func: o
      }], ae.prototype.clone = ag, ae.prototype.reverse = ig, ae.prototype.value = sg, h.prototype.at = WU, h.prototype.chain = BU, h.prototype.commit = xU, h.prototype.next = IU, h.prototype.plant = OU, h.prototype.reverse = QU, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = zU, h.prototype.first = h.prototype.head, Go && (h.prototype[Go] = DU), h;
    }, Dr = x0();
    ir ? ((ir.exports = Dr)._ = Dr, vl._ = Dr) : Qe._ = Dr;
  }).call(oa);
})(ve, ve.exports);
const dM = "/alarms?_s=", Is = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, fM = async (e, r) => {
  try {
    return (await an.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      Is
    )).status === 204;
  } catch {
    return !1;
  }
}, hM = async (e, r) => {
  try {
    return (await an.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      Is
    )).status === 204;
  } catch {
    return !1;
  }
}, pM = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await Cn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      Is
    )).status == 204;
  } catch {
    return !1;
  }
}, mM = async () => {
  try {
    const e = `${dM}isSituation==true&limit=0`, r = await Cn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, wM = async (e) => {
  try {
    const r = e.join(",id=="), o = await Cn(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, Uv = async (e) => {
  try {
    const r = await Cn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, vM = async (e) => {
  try {
    const r = await Cn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, VM = async () => {
  try {
    const e = await Cn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => ve.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, gM = async (e, r, o) => {
  try {
    return (await Cn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      Is
    )).status == 204;
  } catch {
    return !1;
  }
}, TM = async (e, r) => {
  try {
    return (await Cn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, UM = async () => {
  try {
    const e = await Cn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, yM = window.Pinia.defineStore, sn = yM("situationsStore", {
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
      const e = await VM();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await mM();
      if (e) {
        const r = e.alarm.map((s) => {
          var c;
          return s.status = (c = s.parameters.filter(
            (d) => d.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, s;
        });
        this.filteredSituations = r.map((s) => s.id);
        const o = ve.exports.groupBy(r, "status"), i = [
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
        const i = await Uv(e);
        if (i) {
          const s = (r = i.relatedAlarms) == null ? void 0 : r.map((f) => f.id), d = await wM(s);
          i.status = (o = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, i.alarms = ve.exports.sortBy(d, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (i) => {
          const s = await vM(i);
          s && (o[i] = ve.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await UM();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), NM = window.Vue.openBlock, kM = window.Vue.createElementBlock, RM = window.Vue.createElementVNode;
var MM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const bM = {}, SM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZM = /* @__PURE__ */ RM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), EM = [
  ZM
];
function JM(e, r) {
  return NM(), kM("svg", SM, EM);
}
var ko = /* @__PURE__ */ MM(bM, [["render", JM]]);
var AM = Object.defineProperty, bp = Object.getOwnPropertySymbols, FM = Object.prototype.hasOwnProperty, _M = Object.prototype.propertyIsEnumerable, Sp = (e, r, o) => r in e ? AM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Zp = (e, r) => {
  for (var o in r || (r = {}))
    FM.call(r, o) && Sp(e, o, r[o]);
  if (bp)
    for (var o of bp(r))
      _M.call(r, o) && Sp(e, o, r[o]);
  return e;
};
const CM = window.Vue.defineComponent, WM = window.Vue.toRaw, Bc = window.Vue.h;
var BM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const xM = {
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
}, IM = CM({
  props: xM,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((s, c) => (s[c] = !0, s), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let i = WM(this.icon);
    return this.$slots.default ? Bc("span", { class: "feather-icon-container" }, [
      Bc(this.$slots.default()[0], Zp({
        class: r
      }, o))
    ]) : Bc(i, Zp({
      class: r
    }, o));
  }
});
var P = /* @__PURE__ */ BM(IM, [["__scopeId", "data-v-52cbf270"]]);
const DM = window.Vue.openBlock, OM = window.Vue.createElementBlock, QM = window.Vue.createElementVNode;
var zM = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const GM = {}, YM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PM = /* @__PURE__ */ QM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), HM = [
  PM
];
function $M(e, r) {
  return DM(), OM("svg", YM, HM);
}
var yv = /* @__PURE__ */ zM(GM, [["render", $M]]);
const Ie = {
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
function mn(e) {
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
function jM(e, r) {
  Te(2, arguments);
  var o = Ce(e), i = mn(r);
  return isNaN(i) ? new Date(NaN) : (i && o.setDate(o.getDate() + i), o);
}
function LM(e, r) {
  Te(2, arguments);
  var o = Ce(e).getTime(), i = mn(r);
  return new Date(o + i);
}
var XM = {};
function So() {
  return XM;
}
function Ep(e, r) {
  var o, i, s, c, d, f, m, v;
  Te(1, arguments);
  var V = So(), g = mn((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var U = Ce(e), M = U.getDay(), b = (M < g ? 7 : 0) + M - g;
  return U.setDate(U.getDate() - b), U.setHours(0, 0, 0, 0), U;
}
function Su(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function Jp(e) {
  Te(1, arguments);
  var r = Ce(e);
  return r.setHours(0, 0, 0, 0), r;
}
function qM(e, r) {
  Te(2, arguments);
  var o = Ce(e), i = Ce(r), s = o.getTime() - i.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function Nv(e, r) {
  Te(2, arguments);
  var o = Jp(e), i = Jp(r);
  return o.getTime() === i.getTime();
}
function KM(e) {
  return Te(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function e2(e) {
  if (Te(1, arguments), !KM(e) && typeof e != "number")
    return !1;
  var r = Ce(e);
  return !isNaN(Number(r));
}
function t2(e, r) {
  Te(2, arguments);
  var o = mn(r);
  return LM(e, -o);
}
var n2 = 864e5;
function r2(e) {
  Te(1, arguments);
  var r = Ce(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var i = r.getTime(), s = o - i;
  return Math.floor(s / n2) + 1;
}
function ks(e) {
  Te(1, arguments);
  var r = 1, o = Ce(e), i = o.getUTCDay(), s = (i < r ? 7 : 0) + i - r;
  return o.setUTCDate(o.getUTCDate() - s), o.setUTCHours(0, 0, 0, 0), o;
}
function kv(e) {
  Te(1, arguments);
  var r = Ce(e), o = r.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(o + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = ks(i), c = new Date(0);
  c.setUTCFullYear(o, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = ks(c);
  return r.getTime() >= s.getTime() ? o + 1 : r.getTime() >= d.getTime() ? o : o - 1;
}
function o2(e) {
  Te(1, arguments);
  var r = kv(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = ks(o);
  return i;
}
var a2 = 6048e5;
function i2(e) {
  Te(1, arguments);
  var r = Ce(e), o = ks(r).getTime() - o2(r).getTime();
  return Math.round(o / a2) + 1;
}
function Rs(e, r) {
  var o, i, s, c, d, f, m, v;
  Te(1, arguments);
  var V = So(), g = mn((o = (i = (s = (c = r == null ? void 0 : r.weekStartsOn) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var U = Ce(e), M = U.getUTCDay(), b = (M < g ? 7 : 0) + M - g;
  return U.setUTCDate(U.getUTCDate() - b), U.setUTCHours(0, 0, 0, 0), U;
}
function Rv(e, r) {
  var o, i, s, c, d, f, m, v;
  Te(1, arguments);
  var V = Ce(e), g = V.getUTCFullYear(), U = So(), M = mn((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : U.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = U.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = new Date(0);
  b.setUTCFullYear(g + 1, 0, M), b.setUTCHours(0, 0, 0, 0);
  var A = Rs(b, r), C = new Date(0);
  C.setUTCFullYear(g, 0, M), C.setUTCHours(0, 0, 0, 0);
  var F = Rs(C, r);
  return V.getTime() >= A.getTime() ? g + 1 : V.getTime() >= F.getTime() ? g : g - 1;
}
function s2(e, r) {
  var o, i, s, c, d, f, m, v;
  Te(1, arguments);
  var V = So(), g = mn((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (d = r.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : V.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = V.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), U = Rv(e, r), M = new Date(0);
  M.setUTCFullYear(U, 0, g), M.setUTCHours(0, 0, 0, 0);
  var b = Rs(M, r);
  return b;
}
var l2 = 6048e5;
function c2(e, r) {
  Te(1, arguments);
  var o = Ce(e), i = Rs(o, r).getTime() - s2(o, r).getTime();
  return Math.round(i / l2) + 1;
}
function we(e, r) {
  for (var o = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < r; )
    i = "0" + i;
  return o + i;
}
var u2 = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), i = o > 0 ? o : 1 - o;
    return we(r === "yy" ? i % 100 : i, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : we(o + 1, 2);
  },
  d: function(e, r) {
    return we(e.getUTCDate(), r.length);
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
    return we(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return we(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return we(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return we(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, i = e.getUTCMilliseconds(), s = Math.floor(i * Math.pow(10, o - 3));
    return we(s, r.length);
  }
};
const Yn = u2;
var qr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, d2 = {
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
    return Yn.y(e, r);
  },
  Y: function(e, r, o, i) {
    var s = Rv(e, i), c = s > 0 ? s : 1 - s;
    if (r === "YY") {
      var d = c % 100;
      return we(d, 2);
    }
    return r === "Yo" ? o.ordinalNumber(c, {
      unit: "year"
    }) : we(c, r.length);
  },
  R: function(e, r) {
    var o = kv(e);
    return we(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return we(o, r.length);
  },
  Q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(i);
      case "QQ":
        return we(i, 2);
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
        return we(i, 2);
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
        return Yn.M(e, r);
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
        return we(i + 1, 2);
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
    var s = c2(e, i);
    return r === "wo" ? o.ordinalNumber(s, {
      unit: "week"
    }) : we(s, r.length);
  },
  I: function(e, r, o) {
    var i = i2(e);
    return r === "Io" ? o.ordinalNumber(i, {
      unit: "week"
    }) : we(i, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Yn.d(e, r);
  },
  D: function(e, r, o) {
    var i = r2(e);
    return r === "Do" ? o.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : we(i, r.length);
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
        return we(c, 2);
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
        return we(c, r.length);
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
        return we(s, r.length);
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
    switch (i === 12 ? s = qr.noon : i === 0 ? s = qr.midnight : s = i / 12 >= 1 ? "pm" : "am", r) {
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
    switch (i >= 17 ? s = qr.evening : i >= 12 ? s = qr.afternoon : i >= 4 ? s = qr.morning : s = qr.night, r) {
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
    return Yn.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Yn.H(e, r);
  },
  K: function(e, r, o) {
    var i = e.getUTCHours() % 12;
    return r === "Ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : we(i, r.length);
  },
  k: function(e, r, o) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), r === "ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : we(i, r.length);
  },
  m: function(e, r, o) {
    return r === "mo" ? o.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Yn.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Yn.s(e, r);
  },
  S: function(e, r) {
    return Yn.S(e, r);
  },
  X: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (r) {
      case "X":
        return Fp(c);
      case "XXXX":
      case "XX":
        return kr(c);
      case "XXXXX":
      case "XXX":
      default:
        return kr(c, ":");
    }
  },
  x: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "x":
        return Fp(c);
      case "xxxx":
      case "xx":
        return kr(c);
      case "xxxxx":
      case "xxx":
      default:
        return kr(c, ":");
    }
  },
  O: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ap(c, ":");
      case "OOOO":
      default:
        return "GMT" + kr(c, ":");
    }
  },
  z: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ap(c, ":");
      case "zzzz":
      default:
        return "GMT" + kr(c, ":");
    }
  },
  t: function(e, r, o, i) {
    var s = i._originalDate || e, c = Math.floor(s.getTime() / 1e3);
    return we(c, r.length);
  },
  T: function(e, r, o, i) {
    var s = i._originalDate || e, c = s.getTime();
    return we(c, r.length);
  }
};
function Ap(e, r) {
  var o = e > 0 ? "-" : "+", i = Math.abs(e), s = Math.floor(i / 60), c = i % 60;
  if (c === 0)
    return o + String(s);
  var d = r || "";
  return o + String(s) + d + we(c, 2);
}
function Fp(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + we(Math.abs(e) / 60, 2);
  }
  return kr(e, r);
}
function kr(e, r) {
  var o = r || "", i = e > 0 ? "-" : "+", s = Math.abs(e), c = we(Math.floor(s / 60), 2), d = we(s % 60, 2);
  return i + c + o + d;
}
const f2 = d2;
var _p = function(e, r) {
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
}, Mv = function(e, r) {
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
}, h2 = function(e, r) {
  var o = e.match(/(P+)(p+)?/) || [], i = o[1], s = o[2];
  if (!s)
    return _p(e, r);
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
  return c.replace("{{date}}", _p(i, r)).replace("{{time}}", Mv(s, r));
}, p2 = {
  p: Mv,
  P: h2
};
const m2 = p2;
var w2 = ["D", "DD"], v2 = ["YY", "YYYY"];
function V2(e) {
  return w2.indexOf(e) !== -1;
}
function g2(e) {
  return v2.indexOf(e) !== -1;
}
function Cp(e, r, o) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var T2 = {
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
}, U2 = function(e, r, o) {
  var i, s = T2[e];
  return typeof s == "string" ? i = s : r === 1 ? i = s.one : i = s.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + i : i + " ago" : i;
};
const y2 = U2;
function xc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, i = e.formats[o] || e.formats[e.defaultWidth];
    return i;
  };
}
var N2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, k2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, R2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, M2 = {
  date: xc({
    formats: N2,
    defaultWidth: "full"
  }),
  time: xc({
    formats: k2,
    defaultWidth: "full"
  }),
  dateTime: xc({
    formats: R2,
    defaultWidth: "full"
  })
};
const b2 = M2;
var S2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Z2 = function(e, r, o, i) {
  return S2[e];
};
const E2 = Z2;
function aa(e) {
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
var J2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, A2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, F2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, _2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, C2 = {
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
}, W2 = {
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
}, B2 = function(e, r) {
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
}, x2 = {
  ordinalNumber: B2,
  era: aa({
    values: J2,
    defaultWidth: "wide"
  }),
  quarter: aa({
    values: A2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: aa({
    values: F2,
    defaultWidth: "wide"
  }),
  day: aa({
    values: _2,
    defaultWidth: "wide"
  }),
  dayPeriod: aa({
    values: C2,
    defaultWidth: "wide",
    formattingValues: W2,
    defaultFormattingWidth: "wide"
  })
};
const I2 = x2;
function ia(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, s = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], c = r.match(s);
    if (!c)
      return null;
    var d = c[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? O2(f, function(g) {
      return g.test(d);
    }) : D2(f, function(g) {
      return g.test(d);
    }), v;
    v = e.valueCallback ? e.valueCallback(m) : m, v = o.valueCallback ? o.valueCallback(v) : v;
    var V = r.slice(d.length);
    return {
      value: v,
      rest: V
    };
  };
}
function D2(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function O2(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function Q2(e) {
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
var z2 = /^(\d+)(th|st|nd|rd)?/i, G2 = /\d+/i, Y2 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, P2 = {
  any: [/^b/i, /^(a|c)/i]
}, H2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, j2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, L2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, X2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, q2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, K2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, eb = {
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
}, tb = {
  ordinalNumber: Q2({
    matchPattern: z2,
    parsePattern: G2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ia({
    matchPatterns: Y2,
    defaultMatchWidth: "wide",
    parsePatterns: P2,
    defaultParseWidth: "any"
  }),
  quarter: ia({
    matchPatterns: H2,
    defaultMatchWidth: "wide",
    parsePatterns: $2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ia({
    matchPatterns: j2,
    defaultMatchWidth: "wide",
    parsePatterns: L2,
    defaultParseWidth: "any"
  }),
  day: ia({
    matchPatterns: X2,
    defaultMatchWidth: "wide",
    parsePatterns: q2,
    defaultParseWidth: "any"
  }),
  dayPeriod: ia({
    matchPatterns: K2,
    defaultMatchWidth: "any",
    parsePatterns: eb,
    defaultParseWidth: "any"
  })
};
const nb = tb;
var rb = {
  code: "en-US",
  formatDistance: y2,
  formatLong: b2,
  formatRelative: E2,
  localize: I2,
  match: nb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const bv = rb;
var ob = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ab = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ib = /^'([^]*?)'?$/, sb = /''/g, lb = /[a-zA-Z]/;
function cb(e, r, o) {
  var i, s, c, d, f, m, v, V, g, U, M, b, A, C, F, W, _, I;
  Te(2, arguments);
  var S = String(r), z = So(), Q = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : z.locale) !== null && i !== void 0 ? i : bv, x = mn((c = (d = (f = (m = o == null ? void 0 : o.firstWeekContainsDate) !== null && m !== void 0 ? m : o == null || (v = o.locale) === null || v === void 0 || (V = v.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && f !== void 0 ? f : z.firstWeekContainsDate) !== null && d !== void 0 ? d : (g = z.locale) === null || g === void 0 || (U = g.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(x >= 1 && x <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var j = mn((M = (b = (A = (C = o == null ? void 0 : o.weekStartsOn) !== null && C !== void 0 ? C : o == null || (F = o.locale) === null || F === void 0 || (W = F.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && A !== void 0 ? A : z.weekStartsOn) !== null && b !== void 0 ? b : (_ = z.locale) === null || _ === void 0 || (I = _.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && M !== void 0 ? M : 0);
  if (!(j >= 0 && j <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ce(e);
  if (!e2(K))
    throw new RangeError("Invalid time value");
  var Ue = Su(K), L = t2(K, Ue), G = {
    firstWeekContainsDate: x,
    weekStartsOn: j,
    locale: Q,
    _originalDate: K
  }, se = S.match(ab).map(function(le) {
    var Ee = le[0];
    if (Ee === "p" || Ee === "P") {
      var Oe = m2[Ee];
      return Oe(le, Q.formatLong);
    }
    return le;
  }).join("").match(ob).map(function(le) {
    if (le === "''")
      return "'";
    var Ee = le[0];
    if (Ee === "'")
      return ub(le);
    var Oe = f2[Ee];
    if (Oe)
      return !(o != null && o.useAdditionalWeekYearTokens) && g2(le) && Cp(le, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && V2(le) && Cp(le, r, String(e)), Oe(L, le, Q.localize, G);
    if (Ee.match(lb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ee + "`");
    return le;
  }).join("");
  return se;
}
function ub(e) {
  var r = e.match(ib);
  return r ? r[1].replace(sb, "'") : e;
}
function Sv(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function db(e) {
  return Sv({}, e);
}
var Wp = 1e3 * 60, Ms = 60 * 24, Bp = Ms * 30, xp = Ms * 365;
function Ds(e, r, o) {
  var i, s, c;
  Te(2, arguments);
  var d = So(), f = (i = (s = o == null ? void 0 : o.locale) !== null && s !== void 0 ? s : d.locale) !== null && i !== void 0 ? i : bv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = qM(e, r);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Sv(db(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: m
  }), V, g;
  m > 0 ? (V = Ce(r), g = Ce(e)) : (V = Ce(e), g = Ce(r));
  var U = String((c = o == null ? void 0 : o.roundingMethod) !== null && c !== void 0 ? c : "round"), M;
  if (U === "floor")
    M = Math.floor;
  else if (U === "ceil")
    M = Math.ceil;
  else if (U === "round")
    M = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var b = g.getTime() - V.getTime(), A = b / Wp, C = Su(g) - Su(V), F = (b - C) / Wp, W = o == null ? void 0 : o.unit, _;
  if (W ? _ = String(W) : A < 1 ? _ = "second" : A < 60 ? _ = "minute" : A < Ms ? _ = "hour" : F < Bp ? _ = "day" : F < xp ? _ = "month" : _ = "year", _ === "second") {
    var I = M(b / 1e3);
    return f.formatDistance("xSeconds", I, v);
  } else if (_ === "minute") {
    var S = M(A);
    return f.formatDistance("xMinutes", S, v);
  } else if (_ === "hour") {
    var z = M(A / 60);
    return f.formatDistance("xHours", z, v);
  } else if (_ === "day") {
    var Q = M(F / Ms);
    return f.formatDistance("xDays", Q, v);
  } else if (_ === "month") {
    var x = M(F / Bp);
    return x === 12 && W !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", x, v);
  } else if (_ === "year") {
    var j = M(F / xp);
    return f.formatDistance("xYears", j, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function fb(e, r, o) {
  Te(2, arguments);
  var i = Ep(e, o), s = Ep(r, o);
  return i.getTime() === s.getTime();
}
function hb(e, r) {
  return Te(1, arguments), fb(e, Date.now(), r);
}
function pb(e) {
  return Te(1, arguments), Nv(e, Date.now());
}
function mb(e, r) {
  Te(2, arguments);
  var o = mn(r);
  return jM(e, -o);
}
function wb(e) {
  return Te(1, arguments), Nv(e, mb(Date.now(), 1));
}
const wn = (e) => {
  let r = "";
  if (e)
    try {
      r = cb(new Date(e), Ie.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, Zv = (e, r) => {
  const o = e.length > r ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, r) + o;
}, Ev = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (i) => pb(i.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (i) => wb(i.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (i) => hb(i.firstEventTime)
      );
      break;
  }
  return o;
}, vb = window.Vue.defineComponent, Ut = window.Vue.unref, Ip = window.Vue.normalizeClass, hn = window.Vue.createElementVNode, Kr = window.Vue.toDisplayString, Dp = window.Vue.createVNode, mr = window.Vue.openBlock, wr = window.Vue.createElementBlock, Di = window.Vue.createCommentVNode, Zu = window.Vue.createTextVNode, Vb = window.Vue.renderList, gb = window.Vue.Fragment, Tb = window.Vue.pushScopeId, Ub = window.Vue.popScopeId, qu = (e) => (Tb("data-v-d97f7aa6"), e = e(), Ub(), e), yb = { class: "content" }, Nb = { class: "title-row" }, kb = { class: "title" }, Rb = {
  key: 0,
  class: "accepted"
}, Mb = {
  key: 1,
  class: "rejected"
}, bb = /* @__PURE__ */ qu(() => /* @__PURE__ */ hn("span", { class: "info-title" }, " Duration: ", -1)), Sb = { key: 0 }, Zb = /* @__PURE__ */ qu(() => /* @__PURE__ */ hn("span", { class: "info-title" }, " First Event: ", -1)), Eb = { class: "description" }, Jb = /* @__PURE__ */ qu(() => /* @__PURE__ */ hn("hr", null, null, -1)), Ab = {
  key: 1,
  class: "count-info"
}, Fb = /* @__PURE__ */ Zu(" Alarms: "), _b = { class: "info-title" }, Cb = /* @__PURE__ */ vb({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, i = Ie.ACCEPTED, s = Ie.REJECTED, c = new Date().getTime(), d = () => {
      var f;
      r("situation-selected", (f = o.situationInfo) == null ? void 0 : f.id);
    };
    return (f, m) => {
      var v, V, g;
      return mr(), wr("div", {
        onClick: d,
        class: Ip(["card", {
          rejected: o.situationInfo.status == Ut(s)
        }])
      }, [
        hn("div", {
          class: Ip(["severity-line", [`${(V = (v = o.situationInfo) == null ? void 0 : v.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
        }, null, 2),
        hn("div", yb, [
          hn("div", Nb, [
            hn("div", kb, "Situation " + Kr((g = o.situationInfo) == null ? void 0 : g.id), 1),
            o.situationInfo.status == Ut(i) ? (mr(), wr("div", Rb, [
              Dp(Ut(P), {
                icon: Ut(ko),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Di("", !0),
            o.situationInfo.status == Ut(s) ? (mr(), wr("div", Mb, [
              Dp(Ut(P), {
                icon: Ut(yv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Di("", !0)
          ]),
          hn("div", null, [
            bb,
            Zu(" " + Kr(Ut(Ds)(
              Ut(c),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Di("", !0) : (mr(), wr("div", Sb, [
            Zb,
            Zu(Kr(Ut(wn)(o.situationInfo.firstEventTime)), 1)
          ])),
          hn("div", Eb, Kr(Ut(Zv)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          Jb,
          o.situationInfo.relatedAlarms ? (mr(), wr("div", Ab, [
            Fb,
            hn("span", _b, Kr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Di("", !0),
          (mr(!0), wr(gb, null, Vb(Ut(ve.exports.keys)(
            Ut(ve.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (U) => (mr(), wr("div", {
            class: "info-title",
            key: U
          }, " - " + Kr(U), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Jv = /* @__PURE__ */ pe(Cb, [["__scopeId", "data-v-d97f7aa6"]]), Wb = window.Vue.openBlock, Bb = window.Vue.createElementBlock, xb = window.Vue.createElementVNode;
var Ib = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Db = {}, Ob = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qb = /* @__PURE__ */ xb("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), zb = [
  Qb
];
function Gb(e, r) {
  return Wb(), Bb("svg", Ob, zb);
}
var Yb = /* @__PURE__ */ Ib(Db, [["render", Gb]]);
const Pb = window.Vue.openBlock, Hb = window.Vue.createElementBlock, Av = window.Vue.createElementVNode;
var $b = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const jb = {}, Lb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Xb = /* @__PURE__ */ Av("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), qb = /* @__PURE__ */ Av("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), Kb = [
  Xb,
  qb
];
function eS(e, r) {
  return Pb(), Hb("svg", Lb, Kb);
}
var tS = /* @__PURE__ */ $b(jb, [["render", eS]]);
const nS = window.Vue.openBlock, rS = window.Vue.createElementBlock, oS = window.Vue.createElementVNode;
var aS = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const iS = {}, sS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lS = /* @__PURE__ */ oS("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), cS = [
  lS
];
function uS(e, r) {
  return nS(), rS("svg", sS, cS);
}
var dS = /* @__PURE__ */ aS(iS, [["render", uS]]);
const fS = window.Vue.openBlock, hS = window.Vue.createElementBlock, pS = window.Vue.createElementVNode;
var mS = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const wS = {}, vS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VS = /* @__PURE__ */ pS("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), gS = [
  VS
];
function TS(e, r) {
  return fS(), hS("svg", vS, gS);
}
var Fv = /* @__PURE__ */ mS(wS, [["render", TS]]);
const US = window.Vue.defineComponent, Pn = window.Vue.unref, Oi = window.Vue.normalizeClass, Qi = window.Vue.createVNode, yS = window.Vue.openBlock, NS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kS = { class: "paginator" }, RS = /* @__PURE__ */ US({
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
    return (s, c) => (yS(), NS("div", kS, [
      Qi(Pn(P), {
        icon: Pn(Yb),
        "aria-hidden": "true",
        class: Oi(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => i(0))
      }, null, 8, ["icon", "class"]),
      Qi(Pn(P), {
        icon: Pn(dS),
        "aria-hidden": "true",
        class: Oi(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => i(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Qi(Pn(P), {
        icon: Pn(Fv),
        "aria-hidden": "true",
        class: Oi(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => i(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Qi(Pn(P), {
        icon: Pn(tS),
        "aria-hidden": "true",
        class: Oi(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => i(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const MS = /* @__PURE__ */ pe(RS, [["__scopeId", "data-v-40758818"]]);
const ce = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, bS = window.Vue.computed, Os = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((i) => {
    o[`${i}Label`] = bS(() => e.value[i] ? e.value[i] : r[i]);
  }), o;
};
const Sr = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, Zr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var SS = Object.defineProperty, ZS = Object.defineProperties, ES = Object.getOwnPropertyDescriptors, Op = Object.getOwnPropertySymbols, JS = Object.prototype.hasOwnProperty, AS = Object.prototype.propertyIsEnumerable, Qp = (e, r, o) => r in e ? SS(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, zp = (e, r) => {
  for (var o in r || (r = {}))
    JS.call(r, o) && Qp(e, o, r[o]);
  if (Op)
    for (var o of Op(r))
      AS.call(r, o) && Qp(e, o, r[o]);
  return e;
}, FS = (e, r) => ZS(e, ES(r));
const _S = window.Vue.defineComponent, CS = window.Vue.h;
var WS = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const BS = {
  center: {
    type: Boolean,
    default: !1
  }
}, xS = _S({
  props: BS,
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
        this.styles = FS(zp({}, s), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Zr(this.failsafe), this.failsafe = Sr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return CS("div", {
        style: zp({}, this.styles),
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
var nr = /* @__PURE__ */ WS(xS, [["__scopeId", "data-v-18e2a5db"]]);
const IS = window.Vue.openBlock, DS = window.Vue.createElementBlock, OS = window.Vue.createElementVNode;
var QS = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const zS = {}, GS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YS = /* @__PURE__ */ OS("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), PS = [
  YS
];
function HS(e, r) {
  return IS(), DS("svg", GS, PS);
}
var Zo = /* @__PURE__ */ QS(zS, [["render", HS]]);
const Gp = window.Vue.computed, $S = (e, r, o) => {
  const i = Gp(() => r.value.filter((c) => !c.disabled)), s = Gp(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (s.value === 0 ? o(i.value[i.value.length - 1]) : o(i.value[s.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (s.value === i.value.length - 1 ? o(i.value[0]) : o(i.value[s.value + 1]));
    }
  };
};
const jS = window.Vue.openBlock, LS = window.Vue.createElementBlock, Ku = window.Vue.createElementVNode;
var XS = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const qS = {}, KS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eZ = /* @__PURE__ */ Ku("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), tZ = /* @__PURE__ */ Ku("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), nZ = /* @__PURE__ */ Ku("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), rZ = [
  eZ,
  tZ,
  nZ
];
function oZ(e, r) {
  return jS(), LS("svg", KS, rZ);
}
var aZ = /* @__PURE__ */ XS(qS, [["render", oZ]]), iZ = Object.defineProperty, sZ = Object.defineProperties, lZ = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, cZ = Object.prototype.hasOwnProperty, uZ = Object.prototype.propertyIsEnumerable, Pp = (e, r, o) => r in e ? iZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, _v = (e, r) => {
  for (var o in r || (r = {}))
    cZ.call(r, o) && Pp(e, o, r[o]);
  if (Yp)
    for (var o of Yp(r))
      uZ.call(r, o) && Pp(e, o, r[o]);
  return e;
}, Cv = (e, r) => sZ(e, lZ(r));
const Eo = window.Vue.defineComponent, Ja = window.Vue.resolveComponent, pn = window.Vue.openBlock, wo = window.Vue.createElementBlock, dZ = window.Vue.createVNode, bs = window.Vue.createBlock, fZ = window.Vue.withModifiers, Ro = window.Vue.inject, Aa = window.Vue.computed, hZ = window.Vue.normalizeClass, eo = window.Vue.createElementVNode, Ss = window.Vue.toDisplayString, vs = window.Vue.renderSlot, Na = window.Vue.createCommentVNode, pZ = window.Vue.withDirectives, mZ = window.Vue.vShow, Eu = window.Vue.ref, Hp = window.Vue.toRef, $p = window.Vue.nextTick, Ju = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ed = window.Vue.provide, jp = window.Vue.isRef, wZ = window.Vue.onBeforeUnmount;
var xa = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const vZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, VZ = Eo({
  props: vZ,
  components: {
    FeatherIcon: P
  }
}), gZ = ["title"];
function TZ(e, r, o, i, s, c) {
  const d = Ja("FeatherIcon");
  return pn(), wo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    dZ(d, { icon: e.icon }, null, 8, ["icon"])
  ], 8, gZ);
}
var UZ = /* @__PURE__ */ xa(VZ, [["render", TZ], ["__scopeId", "data-v-4265058e"]]);
const yZ = Eo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Zo;
    }
  },
  components: {
    ActionIcon: UZ
  }
});
function NZ(e, r, o, i, s, c) {
  const d = Ja("ActionIcon");
  return pn(), bs(d, {
    onClick: r[0] || (r[0] = fZ((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var kZ = /* @__PURE__ */ xa(yZ, [["render", NZ]]);
const RZ = Eo({
  computed: {
    errorIcon() {
      return aZ;
    }
  },
  components: {
    FeatherIcon: P
  }
});
function MZ(e, r, o, i, s, c) {
  const d = Ja("FeatherIcon");
  return pn(), bs(d, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var bZ = /* @__PURE__ */ xa(RZ, [["render", MZ], ["__scopeId", "data-v-0b8faef3"]]);
const SZ = {
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
}, ZZ = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, EZ = Eo({
  emits: ZZ,
  props: SZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ro("wrapperOptions", {}), r = Ro("validationErrorMessage", !1), o = Aa(() => e.error ? e.error : r && r.value ? r.value : !1);
    return Cv(_v({}, e), { error: o });
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
    ClearIcon: kZ,
    ErrorIcon: bZ
  }
}), JZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, AZ = ["for"], FZ = { class: "prefix" }, _Z = { class: "post" };
function CZ(e, r, o, i, s, c) {
  const d = Ja("ClearIcon"), f = Ja("ErrorIcon");
  return pn(), wo("div", {
    class: hZ(["feather-input-wrapper-container", e.containerCls])
  }, [
    eo("fieldset", JZ, [
      eo("legend", null, Ss(e.label), 1)
    ]),
    eo("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ss(e.label), 9, AZ),
    eo("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      eo("div", FZ, [
        vs(e.$slots, "pre", {}, void 0, !0)
      ]),
      vs(e.$slots, "default", {}, void 0, !0),
      eo("div", _Z, [
        e.showClear && e.computedClearText ? (pn(), bs(d, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Na("", !0),
        e.error ? (pn(), bs(f, { key: 1 })) : Na("", !0),
        vs(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var td = /* @__PURE__ */ xa(EZ, [["render", CZ], ["__scopeId", "data-v-4db296db"]]);
const WZ = Eo({
  setup() {
    const e = Ro("subTextOptions", {}), r = Ro("validationErrorMessage", !1), o = Aa(() => e.error ? e.error : r && r.value ? r.value : "");
    return Cv(_v({}, e), { error: o });
  }
}), BZ = { class: "feather-input-sub-text" }, xZ = {
  key: 0,
  class: "feather-input-spacer"
}, IZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, DZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function OZ(e, r, o, i, s, c) {
  return pZ((pn(), wo("div", BZ, [
    !e.hint && !e.error.length ? (pn(), wo("div", xZ, "\xA0")) : Na("", !0),
    e.hint && !e.error.length ? (pn(), wo("div", IZ, Ss(e.hint), 1)) : Na("", !0),
    e.error.length > 0 ? (pn(), wo("div", DZ, Ss(e.error), 1)) : Na("", !0),
    vs(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [mZ, !e.inline || e.hint || e.error.length]
  ]);
}
var Ia = /* @__PURE__ */ xa(WZ, [["render", OZ], ["__scopeId", "data-v-8e0ac99e"]]);
const QZ = {
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
Eo({
  props: QZ,
  setup(e) {
    const r = Ro("featherFormErrors", Eu([])), o = Hp(e, "errorList"), i = Aa(() => {
      var V;
      return (V = o.value) != null && V.length ? o.value : r.value;
    }), s = Hp(e, "generalError"), c = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), f = Eu(), m = (V) => `${d(V.label)} - ${V.message}`, v = Aa(() => (i.value.length && $p(() => f.value.focus()), e.headingText(i.value)));
    return Ju(s, (V) => {
      V.length && $p(() => f.value.focus());
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
const Da = (e, r, o, i, s) => {
  const c = Ro("featherForm", !1);
  if (i && c && e.value) {
    const d = Eu("");
    ed("validationErrorMessage", d);
    const f = () => {
      if (s && jp(s) && s.value)
        return d.value = s.value, {
          success: !1,
          message: s.value,
          inputId: e.value,
          label: o
        };
      try {
        return i.validateSync(r.value), d.value = "", { success: !0 };
      } catch (V) {
        const g = V;
        return d.value = g.errors[0], {
          success: !1,
          message: g.errors[0],
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
    return s && jp(s) && Ju(s, () => {
      c.runValidation();
    }), Ju(e, (V, g) => {
      V && c && c.register(V, v), g && c && c.deregister(g);
    }, { immediate: !0 }), wZ(() => {
      c.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Oa = (e) => ({
  inherittedAttrs: Aa(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Qa = {
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
}, za = (e) => {
  ed("subTextOptions", e);
}, nd = {
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
}, rd = (e) => {
  ed("wrapperOptions", e);
}, zi = window.Vue.ref, zZ = window.Vue.watch, GZ = window.Vue.watchEffect, Lp = window.Vue.computed, Ic = window.Vue.provide, Wv = (e, r, o, i, s) => {
  const c = zi([]), d = zi(), f = zi(), m = zi();
  GZ(() => {
    if (!c.value.length)
      return;
    const F = c.value.map((W) => W.value);
    if (e.value !== void 0 && e.value !== null && (d.value = c.value[F.indexOf(e.value)]), !d.value && c.value.length) {
      let W = c.value.filter((_) => !_.disabled);
      W = W.length ? W : c.value, f.value = W[0], f.value.first = !0;
    }
  }), zZ(d, (F, W) => {
    W && (W.checked = !1), F && (F.checked = !0);
  });
  const v = (F) => {
    F && F.disabled || (f.value && (f.value.first = !1), d.value !== F && (r("update:modelValue", F.value), d.value = F, F.focus()));
  }, V = Lp(() => d.value || f.value), g = $S(V, c, v), U = Lp(() => ce("feather-radio-group"));
  m.value = U.value;
  const { validate: M } = Da(m, e, o, i, s);
  return Ic("register", (F) => {
    c.value = [...c.value, F], m.value === U.value && (m.value = F.id);
  }), Ic("select", v), Ic("blur", (F) => {
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
          g.selectNext();
          break;
        case 37:
        case 38:
          g.selectPrevious();
          break;
      }
    },
    ...g,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: M,
    firstElementId: m,
    groupId: U
  };
};
var YZ = Object.defineProperty, PZ = Object.defineProperties, HZ = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, $Z = Object.prototype.hasOwnProperty, jZ = Object.prototype.propertyIsEnumerable, qp = (e, r, o) => r in e ? YZ(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, go = (e, r) => {
  for (var o in r || (r = {}))
    $Z.call(r, o) && qp(e, o, r[o]);
  if (Xp)
    for (var o of Xp(r))
      jZ.call(r, o) && qp(e, o, r[o]);
  return e;
}, Bv = (e, r) => PZ(e, HZ(r));
const or = window.Vue.defineComponent, ka = window.Vue.inject, Zs = window.Vue.computed, Ra = window.Vue.ref, Qt = window.Vue.resolveComponent, Rt = window.Vue.openBlock, Ga = window.Vue.createElementBlock, xv = window.Vue.normalizeClass, vn = window.Vue.renderSlot, er = window.Vue.createBlock, Fa = window.Vue.createCommentVNode, Es = window.Vue.createElementVNode, LZ = window.Vue.withModifiers, Qs = window.Vue.createVNode, Iv = window.Vue.toRef, Au = window.Vue.mergeProps, Fn = window.Vue.withCtx, XZ = window.Vue.h, qZ = window.Vue.provide;
var ar = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const KZ = {
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
}, eE = or({
  props: KZ,
  setup(e) {
    const r = ka("isCondensed", null), o = Zs(() => r || e.condensed), i = Ra(!1);
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
    FeatherRipple: nr
  }
}), tE = ["aria-disabled"];
function nE(e, r, o, i, s, c) {
  const d = Qt("FeatherRipple");
  return Rt(), Ga("div", {
    class: xv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    vn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Rt(), er(d, { key: 0 })) : Fa("", !0)
  ], 42, tE);
}
var zs = /* @__PURE__ */ ar(eE, [["render", nE], ["__scopeId", "data-v-44d413dc"]]);
const rE = {
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
}, oE = or({
  emits: ["delete"],
  props: rE,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: Zo
    };
  },
  components: {
    FeatherIcon: P
  }
}), aE = { class: "chip-delete" }, iE = ["aria-label", "aria-describedby"];
function sE(e, r, o, i, s, c) {
  const d = Qt("FeatherIcon");
  return Rt(), Ga("span", aE, [
    Es("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = LZ((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Qs(d, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, iE)
  ]);
}
var lE = /* @__PURE__ */ ar(oE, [["render", sE], ["__scopeId", "data-v-4bae6cb4"]]);
const cE = or({
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
}), uE = ["title"];
function dE(e, r, o, i, s, c) {
  return Rt(), Ga("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    vn(e.$slots, "default", {}, void 0, !0)
  ], 8, uE);
}
var Gs = /* @__PURE__ */ ar(cE, [["render", dE], ["__scopeId", "data-v-1a0445b2"]]);
const fE = {}, hE = {
  class: "chip-icon",
  role: "presentation"
};
function pE(e, r) {
  return Rt(), Ga("span", hE, [
    vn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ys = /* @__PURE__ */ ar(fE, [["render", pE], ["__scopeId", "data-v-2230176f"]]);
const Kp = {
  delete: "Remove"
}, mE = or({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Kp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = Os(Iv(e, "labels"), Kp), i = Zs(() => ce("chip-text")), s = () => {
      e.disabled || r.emit("click");
    }, c = go({}, r.attrs);
    return e.disabled && delete c.onClick, Bv(go({}, o), {
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
    Chip: zs,
    DeleteIcon: lE,
    Label: Gs,
    PreIcon: Ys
  }
}), wE = ["aria-disabled"];
function vE(e, r, o, i, s, c) {
  const d = Qt("PreIcon"), f = Qt("Label"), m = Qt("DeleteIcon"), v = Qt("Chip");
  return Rt(), er(v, Au(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Fn(() => [
      Es("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Es("span", Au(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Rt(), er(d, { key: 0 }, {
            default: Fn(() => [
              vn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Fa("", !0),
          Qs(f, { id: e.chipTextId }, {
            default: Fn(() => [
              vn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, wE),
      e.canDelete ? (Rt(), er(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (V) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Fa("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var VE = /* @__PURE__ */ ar(mE, [["render", vE], ["__scopeId", "data-v-48b2704a"]]);
const gE = or({
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
    Chip: zs,
    Label: Gs,
    PreIcon: Ys
  }
}), TE = ["aria-disabled"];
function UE(e, r, o, i, s, c) {
  const d = Qt("PreIcon"), f = Qt("Label"), m = Qt("Chip");
  return Rt(), er(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Fn(() => [
      Es("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Rt(), er(d, { key: 0 }, {
          default: Fn(() => [
            vn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Fa("", !0),
        Qs(f, null, {
          default: Fn(() => [
            vn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, TE)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var yE = /* @__PURE__ */ ar(gE, [["render", UE], ["__scopeId", "data-v-3e0c4eba"]]);
const NE = or({
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
    const r = Ra(!1), o = Ra(!1), i = Zs(() => ce("chip-label-id")), s = Zs(() => r.value || o.value ? 0 : -1), c = Ra(), d = () => {
      c.value.$el.focus();
    }, f = ka("register", (U) => {
    }), m = ka("blur", (U) => {
    }), v = ka("select", (U) => {
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
    Chip: zs,
    Label: Gs,
    PreIcon: Ys
  }
});
function kE(e, r, o, i, s, c) {
  const d = Qt("PreIcon"), f = Qt("Label"), m = Qt("Chip");
  return Rt(), er(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: xv(["focus hover", { selected: e.checked }]),
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
    default: Fn(() => [
      e.hasIcon ? (Rt(), er(d, { key: 0 }, {
        default: Fn(() => [
          vn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Fa("", !0),
      Qs(f, { id: e.labelId }, {
        default: Fn(() => [
          vn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var RE = /* @__PURE__ */ ar(NE, [["render", kE], ["__scopeId", "data-v-bbcc2f70"]]);
const ME = {
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
}, em = or({
  props: ME,
  setup() {
    return { format: ka("chipListFormat", "") };
  },
  render() {
    const e = (r) => XZ(r, go(go({}, this.$props), this.$attrs), go({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(VE) : this.format === "radio" ? e(RE) : e(yE);
  }
}), bE = {
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
}, SE = or({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: bE,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    qZ("chipListFormat", o);
    const i = o === "single";
    if (o === "radio") {
      const d = Iv(e, "modelValue");
      return Bv(go({
        attrs: {
          role: "radiogroup"
        }
      }, Wv(d, r.emit, e.label, {}, Ra(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), ZE = ["aria-label"];
function EE(e, r, o, i, s, c) {
  return Rt(), Ga("div", Au(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...d) => e.keydown && e.keydown(...d))
  }), [
    vn(e.$slots, "default", {}, void 0, !0)
  ], 16, ZE);
}
var JE = /* @__PURE__ */ ar(SE, [["render", EE], ["__scopeId", "data-v-1e06f41d"]]);
const AE = window.Vue.defineComponent, FE = window.Vue.normalizeClass, _E = window.Vue.openBlock, CE = window.Vue.createElementBlock, WE = window.Vue.createCommentVNode, BE = /* @__PURE__ */ AE({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (_E(), CE("span", {
      key: 0,
      class: FE(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : WE("", !0);
  }
});
const xE = /* @__PURE__ */ pe(BE, [["__scopeId", "data-v-e08880d6"]]), IE = window.Vue.defineComponent, sa = window.Vue.unref, Dv = window.Vue.createTextVNode, Dc = window.Vue.normalizeClass, Oc = window.Vue.withCtx, DE = window.Vue.createVNode, OE = window.Vue.renderList, QE = window.Vue.Fragment, Gi = window.Vue.openBlock, zE = window.Vue.createElementBlock, Qc = window.Vue.createBlock, tm = window.Vue.createCommentVNode, GE = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const YE = /* @__PURE__ */ Dv(" ALL "), nm = window.Vue.ref, PE = window.Vue.watch, HE = window.Vue.computed, $E = window.Vue.reactive, jE = /* @__PURE__ */ IE({
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
    const o = e, i = nm(!1), s = HE(() => ve.exports.keys(ve.exports.groupBy(o.alarms, o.property))), c = nm(
      (m = o.preSelected) != null && m.length ? o.preSelected : ["all"]
    ), d = $E({
      alarms: o.alarms
    }), f = (v) => {
      c.value = c.value.filter((V) => V !== "all"), c.value.includes(v) ? c.value = c.value.filter((V) => V !== v) : c.value.push(v), (v === "all" || c.value.length === 0) && (c.value = ["all"]), r("selected-option", c.value);
    };
    return PE(o, () => {
      var v;
      c.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], d.alarms = o.alarms, i.value = !1;
    }), (v, V) => sa(s).length > 0 ? (Gi(), Qc(sa(JE), {
      key: c.value.toString(),
      condensed: "",
      label: "",
      class: Dc({ vertical: o.isVertical })
    }, {
      default: Oc(() => [
        DE(sa(em), {
          class: Dc({ clicked: c.value.includes("all") }),
          onClick: V[0] || (V[0] = (g) => f("all"))
        }, {
          default: Oc(() => [
            YE
          ]),
          _: 1
        }, 8, ["class"]),
        (Gi(!0), zE(QE, null, OE(sa(s), (g) => (Gi(), Qc(sa(em), {
          class: Dc([
            { clicked: c.value.includes(g) },
            `${g == null ? void 0 : g.toLowerCase()}-bg`
          ]),
          key: g,
          onClick: (U) => f(g)
        }, {
          default: Oc(() => [
            e.property == "severity" ? (Gi(), Qc(xE, {
              key: 0,
              severity: g
            }, null, 8, ["severity"])) : tm("", !0),
            Dv(GE(g), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : tm("", !0);
  }
});
const Mo = /* @__PURE__ */ pe(jE, [["__scopeId", "data-v-4dac26de"]]);
var LE = Object.defineProperty, XE = Object.defineProperties, qE = Object.getOwnPropertyDescriptors, rm = Object.getOwnPropertySymbols, KE = Object.prototype.hasOwnProperty, eJ = Object.prototype.propertyIsEnumerable, om = (e, r, o) => r in e ? LE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, la = (e, r) => {
  for (var o in r || (r = {}))
    KE.call(r, o) && om(e, o, r[o]);
  if (rm)
    for (var o of rm(r))
      eJ.call(r, o) && om(e, o, r[o]);
  return e;
}, am = (e, r) => XE(e, qE(r));
const tJ = window.Vue.defineComponent, nJ = window.Vue.inject, ca = window.Vue.h;
var rJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const oJ = {
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
}, aJ = tJ({
  inheritAttrs: !1,
  props: oJ,
  setup() {
    return { hasTooltip: nJ("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, r = this.asAnchor ? "a" : "button", o = {}, i = la({}, this.$attrs);
    o.attrs = i || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const s = e();
    o.class = [this.$attrs.class].concat(s), this.$slots.icon && o.class.push("has-icon");
    let c = ca(nr);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), ca(r, am(la(la({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ca(nr, { center: !0 })
      ]);
    }
    const d = ca("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ca(r, am(la(la({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var he = /* @__PURE__ */ rJ(aJ, [["__scopeId", "data-v-702d1074"]]);
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
}, fJ = /* @__PURE__ */ lJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), hJ = [
  fJ
];
function pJ(e, r) {
  return iJ(), sJ("svg", dJ, hJ);
}
var Ov = /* @__PURE__ */ cJ(uJ, [["render", pJ]]);
const mJ = window.Vue.openBlock, wJ = window.Vue.createElementBlock, vJ = window.Vue.createElementVNode;
var VJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const gJ = {}, TJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UJ = /* @__PURE__ */ vJ("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), yJ = [
  UJ
];
function NJ(e, r) {
  return mJ(), wJ("svg", TJ, yJ);
}
var Ps = /* @__PURE__ */ VJ(gJ, [["render", NJ]]);
const kJ = window.Vue.openBlock, RJ = window.Vue.createElementBlock, Qv = window.Vue.createElementVNode;
var MJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const bJ = {}, SJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZJ = /* @__PURE__ */ Qv("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), EJ = /* @__PURE__ */ Qv("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), JJ = [
  ZJ,
  EJ
];
function AJ(e, r) {
  return kJ(), RJ("svg", SJ, JJ);
}
var FJ = /* @__PURE__ */ MJ(bJ, [["render", AJ]]);
const _J = window.Vue.openBlock, CJ = window.Vue.createElementBlock, WJ = window.Vue.createElementVNode;
var BJ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const xJ = {}, IJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DJ = /* @__PURE__ */ WJ("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), OJ = [
  DJ
];
function QJ(e, r) {
  return _J(), CJ("svg", IJ, OJ);
}
var zJ = /* @__PURE__ */ BJ(xJ, [["render", QJ]]);
const GJ = window.Vue.watch, YJ = window.Vue.onBeforeUnmount, PJ = window.Vue.ref, HJ = window.Vue.onMounted, $J = (e) => {
  const r = PJ(!1);
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
  return HJ(() => {
    const d = GJ(r, (f) => {
      window && f ? window.addEventListener("resize", s) : c();
    }, {
      immediate: !0
    });
    YJ(() => {
      d(), c();
    });
  }), r;
}, jJ = window.Vue.watch, LJ = window.Vue.onBeforeUnmount, XJ = window.Vue.ref, qJ = window.Vue.onMounted, KJ = (e, r) => {
  const o = XJ(!1), i = (d) => {
    d.target === window && r(d);
  }, s = (d) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(d.target)) || r(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", i));
  };
  return qJ(() => {
    const d = jJ(o, (f) => {
      document && window && f ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", i)) : c();
    }, {
      immediate: !0
    });
    LJ(() => {
      d(), c();
    });
  }), o;
}, eA = window.Vue.watch, tA = window.Vue.onBeforeUnmount, nA = window.Vue.ref, zv = (e, r) => {
  const o = nA(!1);
  let i = !1;
  const s = (m) => {
    r(m), i = !1;
  };
  function c(m) {
    i || (requestAnimationFrame(() => s(m)), i = !0);
  }
  const d = () => {
    e.value && e.value.removeEventListener("scroll", c, !0);
  }, f = eA([e, o], ([m, v], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", c, !0), v && m ? m.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return tA(() => {
    f(), d();
  }), o;
}, rA = window.Vue.defineComponent, Sn = window.Vue.ref, im = window.Vue.toRef, oA = window.Vue.onMounted, aA = window.Vue.watch, sm = window.Vue.computed, iA = window.Vue.nextTick, lm = window.Vue.openBlock, cm = window.Vue.createElementBlock, um = window.Vue.renderSlot, sA = window.Vue.normalizeClass, lA = window.Vue.normalizeStyle, cA = window.Vue.createCommentVNode;
var uA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const dA = {
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
}, fA = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, hA = rA({
  emits: fA,
  props: dA,
  setup(e, r) {
    const o = Sn(), i = Sn(), s = im(e, "open"), c = im(e, "noExpand"), d = Sn("auto"), f = Sn(), m = Sn(e.triggerId || ce("feather-menu-trigger")), v = Sn(ce("feather-menu-dropdown")), V = Sn(""), g = Sn("");
    oA(() => {
      f.value = window;
    });
    const U = Sn(!1), M = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), b = () => {
      if (!i.value)
        return;
      const S = o.value.getBoundingClientRect();
      U.value = !0, d.value = "auto", iA(() => {
        let { height: z, width: Q } = i.value.getBoundingClientRect();
        const x = M(), j = x.height, K = x.width;
        e.fill && Q < S.width ? (d.value = S.width + "px", Q = S.width) : d.value = Q + "px";
        let Ue = 0;
        j - S.bottom < z && S.top >= z ? (Ue = S.top - z, e.cover && (Ue += S.height)) : (Ue = S.bottom, e.cover && (Ue -= S.height));
        let L = e.right ? S.right - Q : S.left;
        !e.right && S.right >= Q && K - S.left < Q && (L = S.right - Q), e.right && S.right <= Q && K - S.left > Q && (L = S.left), g.value = `${L}px`, V.value = `${Ue}px`, U.value = !1;
      });
    }, C = KJ(o, (S) => {
      r.emit("outside-click", S);
    }), F = $J(b), W = zv(f, b);
    aA([s, i], ([S, z]) => {
      S && z && b(), C.value = S, F.value = S, W.value = S;
    });
    const _ = sm(() => {
      const S = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return s.value && (S["aria-controls"] = v.value), c.value || (S["aria-expanded"] = s.value ? "true" : "false"), S;
    }), I = sm(() => ({
      click: (S) => {
        r.emit("trigger-click", S);
      }
    }));
    return {
      positionTop: V,
      positionLeft: g,
      triggerId: m,
      triggerAttrs: _,
      triggerListeners: I,
      menuId: v,
      menu: i,
      menuWidth: d,
      root: o,
      calculatePosition: b,
      calculating: U
    };
  }
}), pA = ["data-ref-id"], mA = ["data-ref-id", "id"];
function wA(e, r, o, i, s, c) {
  return lm(), cm("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    um(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (lm(), cm("div", {
      key: 0,
      class: sA(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: lA({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      um(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, mA)) : cA("", !0)
  ], 8, pA);
}
var Gv = /* @__PURE__ */ uA(hA, [["render", wA], ["__scopeId", "data-v-f75af406"]]), vA = {
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
const VA = window.Vue.openBlock, gA = window.Vue.createElementBlock, TA = window.Vue.createElementVNode;
var UA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const yA = {}, NA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kA = /* @__PURE__ */ TA("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), RA = [
  kA
];
function MA(e, r) {
  return VA(), gA("svg", NA, RA);
}
var bA = /* @__PURE__ */ UA(yA, [["render", MA]]);
const SA = window.Vue.openBlock, ZA = window.Vue.createElementBlock, od = window.Vue.createElementVNode;
var EA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const JA = {}, AA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FA = /* @__PURE__ */ od("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), _A = /* @__PURE__ */ od("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), CA = /* @__PURE__ */ od("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), WA = [
  FA,
  _A,
  CA
];
function BA(e, r) {
  return SA(), ZA("svg", AA, WA);
}
var xA = /* @__PURE__ */ EA(JA, [["render", BA]]);
const IA = window.Vue.openBlock, DA = window.Vue.createElementBlock, OA = window.Vue.createElementVNode;
var QA = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const zA = {}, GA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YA = /* @__PURE__ */ OA("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), PA = [
  YA
];
function HA(e, r) {
  return IA(), DA("svg", GA, PA);
}
var Hs = /* @__PURE__ */ QA(zA, [["render", HA]]);
const _a = function(e, r) {
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
const $A = window.Vue.defineComponent, jA = window.Vue.openBlock, LA = window.Vue.createElementBlock, XA = window.Vue.normalizeClass, qA = window.Vue.pushScopeId, KA = window.Vue.popScopeId, Fu = window.Vue.createElementVNode;
var eF = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const tF = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, nF = {
  click: (e) => !0
}, rF = $A({
  emits: nF,
  props: tF,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Yv = (e) => (qA("data-v-07e020f5"), e = e(), KA(), e), oF = /* @__PURE__ */ Yv(() => /* @__PURE__ */ Fu("div", { class: "track" }, null, -1)), aF = /* @__PURE__ */ Yv(() => /* @__PURE__ */ Fu("div", { class: "switcher" }, [
  /* @__PURE__ */ Fu("div", { class: "switch-circle" })
], -1)), iF = [
  oF,
  aF
];
function sF(e, r, o, i, s, c) {
  return jA(), LA("div", {
    class: XA(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, iF, 2);
}
var lF = /* @__PURE__ */ eF(rF, [["render", sF], ["__scopeId", "data-v-07e020f5"]]), cF = Object.defineProperty, uF = Object.defineProperties, dF = Object.getOwnPropertyDescriptors, dm = Object.getOwnPropertySymbols, fF = Object.prototype.hasOwnProperty, hF = Object.prototype.propertyIsEnumerable, fm = (e, r, o) => r in e ? cF(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, hm = (e, r) => {
  for (var o in r || (r = {}))
    fF.call(r, o) && fm(e, o, r[o]);
  if (dm)
    for (var o of dm(r))
      hF.call(r, o) && fm(e, o, r[o]);
  return e;
}, pm = (e, r) => uF(e, dF(r));
const ad = window.Vue.defineComponent, vr = window.Vue.h, pF = window.Vue.openBlock, mF = window.Vue.createElementBlock, wF = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Pv = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const vF = {
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
}, VF = ad({
  inheritAttrs: !1,
  props: vF,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (e = vr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = vr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = vr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : vr(nr);
    if (this.asLi)
      return vr("li", pm(hm({}, this.$attrs), {
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
    const c = vr("a", pm(hm({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, i, s]);
    return vr("li", {}, [c]);
  }
});
var Ya = /* @__PURE__ */ Pv(VF, [["__scopeId", "data-v-7c46b2b3"]]);
ad({
  components: {
    FeatherListItem: Ya
  }
});
const gF = {}, TF = { class: "feather-list" };
function UF(e, r) {
  return pF(), mF("ul", TF, [
    wF(e.$slots, "default", {}, void 0, !0)
  ]);
}
var id = /* @__PURE__ */ Pv(gF, [["render", UF], ["__scopeId", "data-v-941a1d50"]]);
const yF = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, NF = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
ad({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: yF,
  props: NF,
  computed: {
    labelId() {
      return ce("switch-label");
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
  components: { SwitchRender: lF, FeatherListItem: Ya }
});
var kF = Object.defineProperty, RF = Object.defineProperties, MF = Object.getOwnPropertyDescriptors, mm = Object.getOwnPropertySymbols, bF = Object.prototype.hasOwnProperty, SF = Object.prototype.propertyIsEnumerable, wm = (e, r, o) => r in e ? kF(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Mt = (e, r) => {
  for (var o in r || (r = {}))
    bF.call(r, o) && wm(e, o, r[o]);
  if (mm)
    for (var o of mm(r))
      SF.call(r, o) && wm(e, o, r[o]);
  return e;
}, ZF = (e, r) => RF(e, MF(r));
const Jo = window.Vue.defineComponent, de = window.Vue.openBlock, _e = window.Vue.createElementBlock, dt = window.Vue.createElementVNode, rn = window.Vue.toDisplayString, Ot = window.Vue.createCommentVNode, Je = window.Vue.resolveComponent, It = window.Vue.createBlock, Xe = window.Vue.withCtx, To = window.Vue.Fragment, Ma = window.Vue.renderList, ft = window.Vue.createVNode, sd = window.Vue.withModifiers, br = window.Vue.normalizeClass, _u = window.Vue.renderSlot, Hv = window.Vue.createTextVNode, EF = window.Vue.pushScopeId, JF = window.Vue.popScopeId, $v = window.Vue.reactive, jv = window.Vue.nextTick, zc = window.Vue.markRaw, Gc = window.Vue.toRef, vm = window.Vue.computed, AF = window.Vue.toRefs, to = window.Vue.ref, Yc = window.Vue.mergeProps, Vm = window.Vue.toHandlers, Yi = window.Vue.withDirectives, Pi = window.Vue.vShow;
var $s = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, ld = {
  query: {
    type: String
  }
}, Ar = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const FF = Jo({
  mixins: [],
  props: Mt(Mt({
    text: {
      type: String,
      required: !0
    }
  }, $s), ld),
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
}), _F = {
  key: 0,
  class: "highlight"
}, CF = { key: 1 };
function WF(e, r, o, i, s, c) {
  return de(), _e("span", null, [
    dt("span", null, rn(e.beginning), 1),
    e.highlighted ? (de(), _e("span", _F, rn(e.highlighted), 1)) : Ot("", !0),
    e.end ? (de(), _e("span", CF, rn(e.end), 1)) : Ot("", !0)
  ]);
}
var Lv = /* @__PURE__ */ Ar(FF, [["render", WF], ["__scopeId", "data-v-8abe2492"]]);
const BF = Jo({
  emits: ["select", "deselect"],
  props: Mt(Mt({
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
  }, $s), ld),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        _a(r, o.$el);
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
    FeatherList: id,
    FeatherListItem: Ya,
    Highlighter: Lv
  }
}), xF = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function IF(e, r, o, i, s, c) {
  const d = Je("Highlighter"), f = Je("FeatherListItem"), m = Je("FeatherList");
  return de(), It(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Xe(() => [
      (de(!0), _e(To, null, Ma(e.items, (v, V) => (de(), _e(To, {
        key: v[e.textProp]
      }, [
        ft(f, {
          "as-li": "",
          id: e.getId(V),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(V),
          selected: e.isSelected(v),
          onClick: sd((g) => e.select(v), ["stop"])
        }, {
          default: Xe(() => [
            ft(d, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (de(), _e("span", xF, rn(e.newLabel), 1)) : Ot("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (de(), _e("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Ot("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var DF = /* @__PURE__ */ Ar(BF, [["render", IF], ["__scopeId", "data-v-f623434a"]]);
const OF = Jo({
  emits: ["select"],
  props: Mt(Mt({
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
  }, $s), ld),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        _a(r, o);
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
    Highlighter: Lv
  }
}), QF = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, zF = ["aria-multiselectable"], GF = { role: "row" }, YF = ["aria-selected", "onClick"], PF = ["id", "aria-selected"], HF = { key: 1 };
function $F(e, r, o, i, s, c) {
  const d = Je("Highlighter");
  return de(), _e("div", QF, [
    dt("table", {
      class: br(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      dt("thead", null, [
        dt("tr", GF, [
          (de(!0), _e(To, null, Ma(e.config, (f) => (de(), _e("th", {
            key: f.title
          }, rn(f.title), 1))), 128))
        ])
      ]),
      dt("tbody", null, [
        (de(!0), _e(To, null, Ma(e.items, (f, m) => (de(), _e("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: br({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: sd((v) => e.select(f), ["stop"])
        }, [
          (de(!0), _e(To, null, Ma(e.config, (v, V) => (de(), _e("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, V),
            "aria-selected": e.isSelected(f),
            class: br({ "focus-cell": e.isActiveCell(m, V) })
          }, [
            v.prop === e.textProp ? (de(), It(d, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (de(), _e("p", HF, rn(f[v.prop]), 1))
          ], 10, PF))), 128))
        ], 10, YF))), 128))
      ])
    ], 10, zF)
  ], 512);
}
var jF = /* @__PURE__ */ Ar(OF, [["render", $F], ["__scopeId", "data-v-58c88fd1"]]);
const LF = Jo({
  components: {
    FeatherList: id,
    FeatherListItem: Ya
  }
});
function XF(e, r, o, i, s, c) {
  const d = Je("FeatherListItem"), f = Je("FeatherList");
  return de(), It(f, { class: "result-list" }, {
    default: Xe(() => [
      ft(d, { "as-li": "" }, {
        default: Xe(() => [
          _u(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var qF = /* @__PURE__ */ Ar(LF, [["render", XF], ["__scopeId", "data-v-06b752c6"]]);
const KF = Jo({
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
    FeatherIcon: P,
    Cancel: Zo,
    BaseChip: zs,
    BaseChipLabel: Gs,
    BaseChipPreIcon: Ys
  }
});
function e_(e, r, o, i, s, c) {
  const d = Je("FeatherIcon"), f = Je("BaseChipPreIcon"), m = Je("BaseChipLabel"), v = Je("Cancel"), V = Je("BaseChip");
  return de(), It(V, {
    class: br(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Xe(() => [
      e.showPreIcon ? (de(), It(f, { key: 0 }, {
        default: Xe(() => {
          var g, U;
          return [
            ft(d, {
              icon: (g = e.pre) == null ? void 0 : g.icon,
              title: (U = e.pre) == null ? void 0 : U.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Ot("", !0),
      ft(m, null, {
        default: Xe(() => [
          Hv(rn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Ot("", !0) : (de(), _e("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = sd((...g) => e.handleClick && e.handleClick(...g), ["stop"]))
      }, [
        ft(d, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Xe(() => [
            ft(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var t_ = /* @__PURE__ */ Ar(KF, [["render", e_], ["__scopeId", "data-v-e0fc6ac0"]]);
const n_ = {}, r_ = (e) => (EF("data-v-aa720e06"), e = e(), JF(), e), o_ = { class: "spinner-container" }, a_ = /* @__PURE__ */ r_(() => /* @__PURE__ */ dt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ dt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), i_ = [
  a_
];
function s_(e, r) {
  return de(), _e("div", o_, i_);
}
var l_ = /* @__PURE__ */ Ar(n_, [["render", s_], ["__scopeId", "data-v-aa720e06"]]), js = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(js || {});
const Xv = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, c_ = Mt(Mt(Mt({
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
    validator: (e) => !!js[e]
  },
  labels: {
    type: Object,
    default: () => Xv
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, $s), Qa), nd), u_ = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, d_ = (e, r, o, i) => {
  if (o.toLowerCase() === js.multi) {
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
}, f_ = () => {
  const e = $v({
    row: -1
  }), r = (c) => {
    jv(() => {
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
}, h_ = (e) => {
  const r = $v({
    row: -1,
    col: -1
  }), o = (d, f) => {
    jv(() => {
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
}, p_ = Jo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: u_,
  props: c_,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== js.multi;
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
      return ce("result-item");
    },
    minCharWarningId() {
      return ce("min-char-warning");
    },
    subTextId() {
      return ce("feather-autocomplete-description");
    },
    resultsId() {
      return ce("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ce("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return zc(bA);
    },
    minCharIcon() {
      return zc(xA);
    },
    dropdownIcon() {
      return zc(Hs);
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
        _a(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          _a(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = ce("active-chip"), this.activeChipId;
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
      o !== void 0 && (Zr(this.typingTimeout), this.typingTimeout = Sr(() => {
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
    const o = Os(Gc(e, "labels"), Xv);
    za(e), rd(e);
    let i;
    e.gridConfig ? i = h_(e.gridConfig) : i = f_();
    const s = Gc(e, "id"), c = vm(() => s.value ? s.value : ce("feather-autocomplete-input")), { validate: d } = Da(c, Gc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: V, type: g, minChar: U } = AF(e), M = to(!1), b = to(!1), A = to(!1), C = to(""), F = to([]), W = to(), _ = vm(() => W.value), I = () => {
      M.value && !b.value && (C.value && C.value.length >= U.value && r.emit("search", C.value), U.value <= 0 && r.emit("search", C.value || ""), F.value = [], i.reset());
    }, S = d_({
      selectionLimit: f,
      selectionLimitReached: b,
      modelValue: m,
      textProp: v,
      allowNew: V,
      forceCloseResults: A,
      query: C,
      internalResults: F,
      input: _,
      emitSearch: I
    }, i, g.value, r.emit);
    return ZF(Mt(Mt({}, o), Oa(r.attrs)), {
      query: C,
      internalResults: F,
      selectionLimitReached: b,
      forceCloseResults: A,
      hasFocus: M,
      strategy: S,
      emitSearch: I,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: c,
      input: W,
      incomingId: s,
      inputRef: _,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: td,
    InputSubText: Ia,
    AutocompleteResults: DF,
    AutocompleteResultsGrid: jF,
    Chip: t_,
    MenuMessage: qF,
    FeatherIcon: P,
    FeatherMenu: Gv,
    Spinner: l_
  }
}), m_ = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, w_ = ["id"], v_ = { "data-ref-id": "feather-autocomplete-no-results" }, V_ = { "data-ref-id": "feather-autocomplete-selection-limit" }, g_ = { "data-ref-id": "feather-autocomplete-min-char" };
function T_(e, r, o, i, s, c) {
  const d = Je("FeatherIcon"), f = Je("Chip"), m = Je("InputWrapper"), v = Je("AutocompleteResults"), V = Je("AutocompleteResultsGrid"), g = Je("MenuMessage"), U = Je("Spinner"), M = Je("FeatherMenu"), b = Je("InputSubText");
  return de(), _e("div", Yc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    ft(M, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: br(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Xe(({ attrs: A, on: C }) => [
        ft(m, Yc(Mt(Mt({}, A), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Vm(C), { ref: "scroll" }), {
          pre: Xe(() => [
            _u(e.$slots, "pre", {}, () => [
              ft(d, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Xe(() => [
            ft(d, {
              icon: e.dropdownIcon,
              class: br(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Xe(() => [
            dt("div", {
              class: br(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              dt("div", m_, null, 512),
              dt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, rn(e.selectedDescribedByText), 9, w_),
              (de(!0), _e(To, null, Ma(e.modelValueList, (F, W) => Yi((de(), It(f, {
                key: F[e.textProp],
                role: "button",
                id: W === e.activeChipIndex ? e.activeChipId : null,
                focused: W === e.activeChipIndex,
                disabled: e.disabled,
                text: F[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(F),
                onDelete: (_) => e.removeFromValue(F)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Pi, !e.singleSelect]
              ])), 128)),
              dt("textarea", Yc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Vm(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Xe(() => [
        e.gridConfig ? Ot("", !0) : Yi((de(), It(v, {
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
          [Pi, e.showResults]
        ]),
        e.gridConfig ? Yi((de(), It(V, {
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
          [Pi, e.showResults]
        ]) : Ot("", !0),
        e.showNoResults ? (de(), It(g, { key: 2 }, {
          default: Xe(() => [
            dt("span", v_, rn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Ot("", !0),
        e.showSelectionLimit ? (de(), It(g, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Xe(() => [
            ft(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", V_, rn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Ot("", !0),
        e.minChar ? Yi((de(), It(g, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Xe(() => [
            ft(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", g_, [
              _u(e.$slots, "min-char", {}, () => [
                Hv(rn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Pi, e.showMinCharWarning]
        ]) : Ot("", !0),
        e.showLoading ? (de(), It(U, { key: 5 })) : Ot("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    ft(b, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var qv = /* @__PURE__ */ Ar(p_, [["render", T_], ["__scopeId", "data-v-43a7e951"]]);
const U_ = window.Vue.defineComponent, Pc = window.Vue.unref, y_ = window.Vue.createVNode, N_ = window.Vue.createElementVNode, k_ = window.Vue.withCtx, R_ = window.Vue.openBlock, M_ = window.Vue.createBlock, b_ = window.Vue.pushScopeId, S_ = window.Vue.popScopeId, Z_ = (e) => (b_("data-v-bb76d5a4"), e = e(), S_(), e), E_ = /* @__PURE__ */ Z_(() => /* @__PURE__ */ N_("span", null, "New Situation", -1)), J_ = window.VueRouter.useRouter, A_ = window.Vue.markRaw, F_ = /* @__PURE__ */ U_({
  __name: "NewSituationBtn",
  setup(e) {
    const r = J_(), o = A_({
      Add: Ps
    }), i = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (s, c) => (R_(), M_(Pc(he), {
      class: "new-situation-btn",
      onClick: c[0] || (c[0] = () => i())
    }, {
      default: k_(() => [
        y_(Pc(P), {
          icon: Pc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        E_
      ]),
      _: 1
    }));
  }
});
const Kv = /* @__PURE__ */ pe(F_, [["__scopeId", "data-v-bb76d5a4"]]);
var __ = Object.defineProperty, C_ = Object.defineProperties, W_ = Object.getOwnPropertyDescriptors, gm = Object.getOwnPropertySymbols, B_ = Object.prototype.hasOwnProperty, x_ = Object.prototype.propertyIsEnumerable, Tm = (e, r, o) => r in e ? __(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Vs = (e, r) => {
  for (var o in r || (r = {}))
    B_.call(r, o) && Tm(e, o, r[o]);
  if (gm)
    for (var o of gm(r))
      x_.call(r, o) && Tm(e, o, r[o]);
  return e;
}, e1 = (e, r) => C_(e, W_(r));
const t1 = window.Vue.defineComponent, I_ = window.Vue.ref, ba = window.Vue.computed, D_ = window.Vue.reactive, Um = window.Vue.watch, Hc = window.Vue.inject, n1 = window.Vue.resolveComponent, Cu = window.Vue.openBlock, r1 = window.Vue.createElementBlock, tr = window.Vue.createElementVNode, O_ = window.Vue.createBlock, Q_ = window.Vue.createCommentVNode, o1 = window.Vue.renderSlot, z_ = window.Vue.pushScopeId, G_ = window.Vue.popScopeId, $c = window.Vue.toRef, ym = window.Vue.mergeProps, Y_ = window.Vue.toDisplayString, P_ = window.Vue.createVNode;
var a1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const H_ = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, $_ = t1({
  props: H_,
  setup(e) {
    const r = I_(), o = () => {
      r.value.focus();
    }, i = ba(() => ce("feather-radio-button")), s = D_({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), c = ba(() => ce("radio-label-id")), d = ba(() => s.first || s.checked ? 0 : -1);
    Um(() => e.disabled, (g) => {
      s.disabled = g;
    }, { immediate: !0 }), Um(() => e.value, (g) => {
      s.value = g;
    }, { immediate: !0 });
    const f = Hc("register", (g) => {
    }), m = Hc("blur", (g) => {
    }), v = Hc("select", (g) => {
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
    FeatherRipple: nr
  }
}), j_ = (e) => (z_("data-v-24790cf0"), e = e(), G_(), e), L_ = { class: "layout-container" }, X_ = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], q_ = { class: "radio hover focus" }, K_ = /* @__PURE__ */ j_(() => /* @__PURE__ */ tr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ tr("svg", { class: "dot" }, [
    /* @__PURE__ */ tr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), eC = ["id"];
function tC(e, r, o, i, s, c) {
  const d = n1("feather-ripple");
  return Cu(), r1("div", L_, [
    tr("div", {
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
      tr("div", q_, [
        K_,
        e.vm.disabled ? Q_("", !0) : (Cu(), O_(d, {
          key: 0,
          center: ""
        }))
      ]),
      tr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        o1(e.$slots, "default", {}, void 0, !0)
      ], 8, eC)
    ], 40, X_)
  ]);
}
var Jn = /* @__PURE__ */ a1($_, [["render", tC], ["__scopeId", "data-v-24790cf0"]]);
const nC = e1(Vs({}, Qa), {
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
}), rC = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, oC = t1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: nC,
  emits: rC,
  setup(e, r) {
    za(e);
    const o = $c(e, "error"), i = $c(e, "modelValue"), s = ba(() => ce("feather-input-description")), c = ba(() => {
      const d = e1(Vs({}, r.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!o.value), d;
    });
    return Vs(Vs({
      descriptionId: s,
      attrs: c
    }, Wv(i, r.emit, e.label, e.schema, $c(e, "error"))), Oa(r.attrs));
  },
  components: {
    InputSubText: Ia
  }
}), aC = ["for"], iC = ["id"];
function sC(e, r, o, i, s, c) {
  const d = n1("InputSubText");
  return Cu(), r1("div", ym(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    tr("label", {
      for: e.groupId,
      class: "group-label"
    }, Y_(e.label), 9, aC),
    tr("div", ym(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      o1(e.$slots, "default", {}, void 0, !0)
    ], 16, iC),
    P_(d, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Ca = /* @__PURE__ */ a1(oC, [["render", sC], ["__scopeId", "data-v-6775aeb9"]]);
const lC = window.Vue.defineComponent, cC = window.Vue.renderList, uC = window.Vue.Fragment, Nm = window.Vue.openBlock, dC = window.Vue.createElementBlock, fC = window.Vue.toDisplayString, hC = window.Vue.createTextVNode, km = window.Vue.unref, Rm = window.Vue.withCtx, pC = window.Vue.createVNode, mC = window.Vue.createBlock, wC = window.Vue.watch, vC = window.Vue.ref, VC = /* @__PURE__ */ lC({
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
    ], s = vC(o.preSelected || i[0].id);
    return wC(o, () => {
      o.preSelected && (s.value = o.preSelected);
    }), (c, d) => (Nm(), mC(km(Ca), {
      label: "",
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("filter-date-selected", s.value))
      ],
      vertical: ""
    }, {
      default: Rm(() => [
        (Nm(), dC(uC, null, cC(i, (f) => pC(km(Jn), {
          value: f.id,
          key: f.id
        }, {
          default: Rm(() => [
            hC(fC(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const i1 = /* @__PURE__ */ pe(VC, [["__scopeId", "data-v-4fded793"]]);
const gC = window.Vue.openBlock, TC = window.Vue.createElementBlock, UC = window.Vue.pushScopeId, yC = window.Vue.popScopeId, Mm = window.Vue.createElementVNode;
var NC = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kC = {}, RC = (e) => (UC("data-v-2263be39"), e = e(), yC(), e), MC = { class: "spinner-container" }, bC = /* @__PURE__ */ RC(() => /* @__PURE__ */ Mm("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Mm("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), SC = [
  bC
];
function ZC(e, r) {
  return gC(), TC("div", MC, SC);
}
var s1 = /* @__PURE__ */ NC(kC, [["render", ZC], ["__scopeId", "data-v-2263be39"]]);
const EC = window.Vue.defineComponent, bm = window.Vue.resolveComponent, Hi = window.Vue.openBlock, $i = window.Vue.createElementBlock, jc = window.Vue.createElementVNode, Sm = window.Vue.normalizeClass, JC = window.Vue.withModifiers, Zm = window.Vue.renderSlot, AC = window.Vue.createTextVNode, FC = window.Vue.toDisplayString, Lc = window.Vue.createVNode, _C = window.Vue.Transition, CC = window.Vue.withCtx, WC = window.Vue.createCommentVNode;
var BC = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const xC = {
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
}, IC = {
  "update:modelValue": (e) => !0
}, DC = EC({
  name: "FeatherExpansionPanel",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: IC,
  props: xC,
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
      return Hs;
    },
    contentId() {
      return ce("feather-expansion-panel");
    },
    headerId() {
      return ce("feather-expansion-header");
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
    FeatherIcon: P,
    FeatherSpinner: s1
  }
}), OC = { class: "feather-expansion" }, QC = ["aria-level"], zC = ["id", "aria-controls", "aria-expanded", "aria-disabled", "aria-busy"], GC = { class: "feather-expansion-header-button-text" }, YC = ["id", "aria-labelledby"], PC = {
  key: 0,
  class: "panel-content"
}, HC = {
  key: 1,
  class: "panel-content"
};
function $C(e, r, o, i, s, c) {
  const d = bm("FeatherIcon"), f = bm("FeatherSpinner");
  return Hi(), $i("div", OC, [
    jc("div", {
      "aria-level": e.level,
      role: "heading"
    }, [
      jc("a", {
        href: "#",
        class: Sm(["feather-expansion-header-button", { expanded: e.expanded, disabled: e.disabled }]),
        role: "button",
        id: e.headerId,
        "aria-controls": e.contentId,
        "aria-expanded": e.expanded ? "true" : "false",
        "aria-disabled": e.disabled ? "true" : "false",
        "aria-busy": e.loading ? "true" : "false",
        onClick: r[0] || (r[0] = JC((...m) => e.handleClick && e.handleClick(...m), ["prevent"])),
        "data-ref-id": "feather-expansion-header-button"
      }, [
        jc("span", GC, [
          Zm(e.$slots, "title", {}, () => [
            AC(FC(e.title), 1)
          ], !0)
        ]),
        Lc(d, {
          class: Sm(["feather-expansion-header-button-icon", { rotated: e.expanded, disabled: e.disabled }]),
          icon: e.downIcon
        }, null, 8, ["icon", "class"])
      ], 10, zC)
    ], 8, QC),
    Lc(_C, {
      name: "expand",
      onEnter: e.enter,
      onAfterEnter: e.afterEnter,
      onLeave: e.leave
    }, {
      default: CC(() => [
        e.expanded ? (Hi(), $i("div", {
          key: 0,
          id: e.contentId,
          "aria-labelledby": e.headerId,
          role: "region",
          "data-ref-id": "feather-expansion-content"
        }, [
          e.loading ? (Hi(), $i("div", PC, [
            Lc(f)
          ])) : (Hi(), $i("div", HC, [
            Zm(e.$slots, "default", {}, void 0, !0)
          ]))
        ], 8, YC)) : WC("", !0)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onLeave"])
  ]);
}
var Sa = /* @__PURE__ */ BC(DC, [["render", $C], ["__scopeId", "data-v-ddc90408"]]);
const jC = window.Vue.defineComponent, tn = window.Vue.createElementVNode, Ct = window.Vue.unref, yt = window.Vue.createVNode, ji = window.Vue.withCtx, Li = window.Vue.toDisplayString, LC = window.Vue.renderList, XC = window.Vue.Fragment, no = window.Vue.openBlock, ro = window.Vue.createElementBlock, Xc = window.Vue.createCommentVNode, qC = window.Vue.pushScopeId, KC = window.Vue.popScopeId, cd = (e) => (qC("data-v-317c8f79"), e = e(), KC(), e), eW = { class: "list-main" }, tW = { class: "header" }, nW = /* @__PURE__ */ cd(() => /* @__PURE__ */ tn("h2", null, "Situation List", -1)), rW = { class: "link-btns" }, oW = /* @__PURE__ */ cd(() => /* @__PURE__ */ tn("span", null, "View Unassociated Alarms", -1)), aW = { class: "content" }, iW = { class: "filters" }, sW = /* @__PURE__ */ cd(() => /* @__PURE__ */ tn("span", null, "Reset Filters", -1)), lW = { class: "container" }, cW = { class: "autocomplete" }, uW = {
  key: 0,
  class: "situation-list"
}, dW = {
  key: 1,
  class: "container empty"
}, fW = {
  key: 2,
  class: "footer-pager"
}, hW = window.Vue.reactive, Hn = window.Vue.ref, pW = window.Vue.watch, mW = window.Vue.markRaw, wW = window.VueRouter.useRouter, vW = /* @__PURE__ */ jC({
  __name: "SituationList",
  setup(e) {
    const r = mW({
      Add: Ps,
      View: FJ,
      Settings: zJ
    }), o = wW(), i = sn();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms();
    const s = 9, c = hW({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), d = Hn(!1), f = Hn(0), m = Hn(1), v = Hn(0), V = Hn(!1), g = Hn(["all"]), U = Hn(1), M = Hn(!0), b = (L) => {
      f.value = 0, c.situations = L[0], m.value = L.length;
    }, A = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    pW(
      () => i.situations,
      () => {
        A(), v.value = i.situations.length, c.allSituations = ve.exports.chunk(i.situations, s);
        const L = i.situations.map((G) => G.id);
        i.filteredSituations = L, b(c.allSituations), C();
      }
    );
    const C = () => {
      i.filters && (i.filters.node && (c.nodeSelectedValue = i.filters.node), i.filters.severities && (g.value = i.filters.severities), U.value = i.filters.timeStart, W(), i.filters = null);
    }, F = (L) => {
      if (!L)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((G) => G.label.toLowerCase().indexOf(L) > -1).map((G) => ({
        _text: G.label,
        id: G.id
      })), d.value = !1;
    }, W = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let L = i.situations.map((G) => {
          if (G.relatedAlarms.filter(
            (le) => {
              var Ee;
              return le.nodeLabel === ((Ee = c.nodeSelectedValue) == null ? void 0 : Ee._text);
            }
          ).length > 0)
            return G;
        }).filter((G) => G);
        L && (_(L), V.value = !0);
      } else
        c.nodeSelectedValue = void 0, V.value = !0, _(i.situations);
    }, _ = (L) => {
      let G = L;
      g.value.includes("all") || (G = L.filter(
        (le) => g.value.includes(le.severity)
      )), U.value !== 1 && (G = Ev(
        U.value,
        G
      )), c.situations = G, v.value = G.length;
      const se = G.map((le) => le.id);
      i.filteredSituations = se;
    }, I = (L) => {
      f.value = L, c.situations = c.allSituations[f.value];
    }, S = (L) => {
      (c.nodeSelectedValue || g.value.length || U.value !== 1) && (i.filters = {
        node: c.nodeSelectedValue,
        severities: g.value,
        timeStart: U.value
      }), o.push({
        name: "situationDetail",
        params: {
          id: L
        }
      });
    }, z = (L) => {
      U.value = L, x();
    }, Q = (L) => {
      g.value = L, x();
    }, x = () => {
      g.value.includes("all") && U.value === 1 && !c.nodeSelectedValue ? Ue() : W();
    }, j = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, K = () => {
      o.push({
        name: "settings"
      });
    }, Ue = () => {
      g.value = ["all"], U.value = 1, c.nodeSelectedValue = void 0;
      const L = i.situations.map((G) => G.id);
      i.filteredSituations = L, v.value = i.situations.length, b(c.allSituations), V.value = !1;
    };
    return (L, G) => (no(), ro("div", eW, [
      tn("div", tW, [
        nW,
        tn("div", rW, [
          yt(Ct(he), {
            class: "view-situation-btn",
            onClick: G[0] || (G[0] = () => j())
          }, {
            default: ji(() => [
              yt(Ct(P), {
                icon: Ct(r).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              oW
            ]),
            _: 1
          }),
          yt(Kv),
          yt(Ct(P), {
            icon: Ct(r).Settings,
            "aria-hidden": "true",
            class: "icon settings",
            onClick: K
          }, null, 8, ["icon"])
        ])
      ]),
      tn("div", aW, [
        tn("div", iW, [
          yt(Ct(he), {
            class: "reset-btn",
            onClick: G[1] || (G[1] = () => Ue())
          }, {
            default: ji(() => [
              yt(Ct(P), {
                icon: Ct(Ov),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              sW
            ]),
            _: 1
          }),
          yt(Ct(Sa), {
            title: "By Severity",
            modelValue: M.value,
            "onUpdate:modelValue": G[2] || (G[2] = (se) => M.value = se)
          }, {
            default: ji(() => [
              yt(Mo, {
                alarms: Ct(i).situations,
                "pre-selected": g.value,
                onSelectedOption: Q,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          yt(Ct(Sa), {
            title: "By Start Date",
            modelValue: M.value,
            "onUpdate:modelValue": G[3] || (G[3] = (se) => M.value = se)
          }, {
            default: ji(() => [
              yt(i1, {
                onFilterDateSelected: z,
                "pre-selected": U.value
              }, null, 8, ["pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        tn("div", lW, [
          tn("div", cW, [
            tn("div", null, " Result: " + Li(c.situations.length) + " of " + Li(v.value), 1),
            yt(Ct(qv), {
              class: "map-search",
              label: "Find by node",
              loading: d.value,
              modelValue: c.nodeSelectedValue,
              "onUpdate:modelValue": [
                G[4] || (G[4] = (se) => c.nodeSelectedValue = se),
                W
              ],
              results: c.results,
              type: "single",
              onSearch: F
            }, null, 8, ["loading", "modelValue", "results"])
          ]),
          c.situations && c.situations.length > 0 ? (no(), ro("div", uW, [
            (no(!0), ro(XC, null, LC(c.situations, (se) => (no(), ro("div", {
              class: "card",
              key: se.id
            }, [
              yt(Jv, {
                onClick: () => S(se.id),
                "situation-info": se
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : Xc("", !0),
          !c.situations || c.situations.length == 0 ? (no(), ro("div", dW, " No results found ")) : Xc("", !0),
          !V.value && v.value > s ? (no(), ro("div", fW, [
            tn("div", null, "Page: " + Li(f.value + 1) + " of " + Li(m.value), 1),
            yt(MS, {
              onGoToPage: I,
              currentPage: f.value,
              totalPages: m.value
            }, null, 8, ["currentPage", "totalPages"])
          ])) : Xc("", !0)
        ])
      ])
    ]));
  }
});
const VW = /* @__PURE__ */ pe(vW, [["__scopeId", "data-v-317c8f79"]]);
const Xi = window.Vue.ref, gW = window.Vue.inject, TW = window.Vue.computed, UW = window.Vue.onMounted, l1 = {
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
}, c1 = (e) => {
  const r = Xi(!1), o = Xi(), i = Xi(e.controls), s = Xi(e.id), c = () => {
    o.value && o.value.focus();
  }, d = gW("registerTab");
  UW(() => {
    if (o.value && d) {
      const m = o.value.parentElement, v = m && m.parentElement ? m.parentElement : void 0, V = Array.from(v ? v.children : []).filter((U) => U.querySelectorAll("[role=tab]").length), g = m ? V.indexOf(m) : -1;
      d({
        el: o.value,
        focus: c,
        disabled: e.disabled,
        selected: r,
        id: s,
        controls: i,
        index: g
      });
    }
  });
  const f = TW(() => ({
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
}, Em = window.Vue.ref, yW = window.Vue.toRef, NW = window.Vue.watch, Jm = window.Vue.provide, u1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, d1 = {
  "update:modelValue": (e) => !0
}, f1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, h1 = (e, r) => {
  const o = yW(e, "modelValue"), i = Em(e.modelValue), s = Em([]);
  NW(o, (b) => {
    m(b);
  });
  const c = (b) => {
    b.preventDefault(), s.value.some((A, C) => A.tab && A.tab.el.contains(b.target) ? (f(C), m(C), !0) : !1);
  }, d = (b) => {
    if (((x) => x.shiftKey || x.ctrlKey || x.metaKey || x.altKey)(b))
      return;
    const C = b.keyCode, F = (x) => {
      x.stopPropagation(), x.preventDefault();
    }, W = s.value.filter((x) => x.tab && !x.tab.disabled), _ = s.value.findIndex((x) => x.tab && x.tab.el.contains(document.activeElement));
    let I = _ !== -1 ? _ : i.value;
    const S = [ne.RIGHT], z = [ne.LEFT], Q = [ne.ENTER, ne.SPACE];
    e.vertical && (S.push(ne.DOWN), z.push(ne.UP)), S.indexOf(C) > -1 ? (I++, I >= W.length && (I = 0), F(b), f(s.value.indexOf(W[I]))) : z.indexOf(C) > -1 && (I--, I < 0 && (I = W.length - 1), F(b), f(s.value.indexOf(W[I]))), Q.indexOf(C) > -1 && m(I);
  }, f = (b) => {
    s.value.forEach(function(A, C) {
      b === C && A.tab && A.tab.focus();
    });
  }, m = (b) => {
    const A = s.value[b];
    !A || A.tab && A.tab.disabled || (s.value.forEach((C, F) => {
      C.tab && (C.tab.selected = b === F), C.panel && (C.panel.selected = b === F);
    }), i.value = b, r.emit("update:modelValue", b));
  };
  Jm("registerTab", (b) => {
    const A = b.index;
    A > -1 && (s.value[A] = { ...s.value[A], tab: b }, s.value = [...s.value], g());
  }), Jm("registerPanel", (b) => {
    const A = b.index;
    A > -1 && (s.value[A] = {
      ...s.value[A],
      panel: b
    }, s.value = [...s.value], g());
  });
  const g = () => {
    s.value.forEach(({ tab: b, panel: A }, C) => {
      if (A && b) {
        const F = b.id || ce("tab"), W = b.controls || ce("panel");
        b.controls = W, b.id = F, A.tab = F, A.id = W;
      }
      C === i.value && (A && (A.selected = !0), b && (b.selected = !0));
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
}, qi = window.Vue.ref, kW = window.Vue.inject, RW = window.Vue.computed, MW = window.Vue.onMounted, p1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, m1 = (e) => {
  const r = qi(!1), o = qi(), i = qi(e.tab), s = qi(e.id), c = kW("registerPanel");
  MW(() => {
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
  const d = RW(() => ({
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
}, ud = window.Vue.defineComponent, bW = window.Vue.resolveComponent, dd = window.Vue.openBlock, fd = window.Vue.createElementBlock, Za = window.Vue.createElementVNode, w1 = window.Vue.mergeProps, Js = window.Vue.renderSlot, SW = window.Vue.createVNode, ZW = window.Vue.normalizeStyle, EW = window.Vue.toHandlers, JW = window.Vue.withDirectives, AW = window.Vue.normalizeProps, FW = window.Vue.guardReactiveProps, _W = window.Vue.vShow;
var hd = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const CW = l1, WW = ud({
  props: CW,
  setup(e) {
    return c1(e);
  },
  components: {
    FeatherRipple: nr
  }
}), BW = { role: "presentation" }, xW = { class: "tab-text" };
function IW(e, r, o, i, s, c) {
  const d = bW("FeatherRipple");
  return dd(), fd("li", BW, [
    Za("button", w1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Za("span", xW, [
        Js(e.$slots, "default", {}, void 0, !0)
      ]),
      SW(d)
    ], 16)
  ]);
}
var Am = /* @__PURE__ */ hd(WW, [["render", IW], ["__scopeId", "data-v-e6bb52b6"]]);
const DW = f1, OW = d1, QW = ud({
  model: u1,
  emits: OW,
  props: DW,
  setup(e, r) {
    return h1(e, r);
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
}), zW = { class: "feather-tab-container" }, GW = { class: "tab-panels" };
function YW(e, r, o, i, s, c) {
  return dd(), fd("div", zW, [
    Za("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: ZW({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Za("ul", w1(e.attrs, EW(e.listeners)), [
      Js(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Za("div", GW, [
      Js(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var PW = /* @__PURE__ */ hd(QW, [["render", YW], ["__scopeId", "data-v-27adffb9"]]);
const HW = p1, $W = ud({
  props: HW,
  setup(e) {
    return m1(e);
  }
});
function jW(e, r, o, i, s, c) {
  return JW((dd(), fd("div", AW(FW(e.attrs)), [
    Js(e.$slots, "default")
  ], 16)), [
    [_W, e.selected]
  ]);
}
var Fm = /* @__PURE__ */ hd($W, [["render", jW]]);
const LW = window.Vue.defineComponent, XW = window.Vue.toDisplayString, qW = window.Vue.normalizeClass, KW = window.Vue.openBlock, eB = window.Vue.createElementBlock, tB = window.Vue.createCommentVNode, nB = /* @__PURE__ */ LW({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (KW(), eB("span", {
      key: 0,
      class: qW(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, XW(r.severity), 3)) : tB("", !0);
  }
});
const v1 = /* @__PURE__ */ pe(nB, [["__scopeId", "data-v-83c2cdce"]]), rB = window.Vue.defineComponent, _m = window.Vue.toDisplayString, Cm = window.Vue.createElementVNode, oB = window.Vue.openBlock, aB = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iB = { class: "box" }, sB = { class: "label" }, lB = { class: "date" }, cB = /* @__PURE__ */ rB({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (oB(), aB("div", iB, [
      Cm("div", sB, _m(r.label), 1),
      Cm("div", lB, _m(r.info), 1)
    ]));
  }
});
const qc = /* @__PURE__ */ pe(cB, [["__scopeId", "data-v-b4afa751"]]), pd = "/alec", V1 = "/alec/engine/configuration", g1 = "/alec/agreement/configuration", uB = "/alec/situation", T1 = async (e) => {
  try {
    return (await an.post(`${g1}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, dB = async () => {
  try {
    const e = await an.get(`${g1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, fB = async () => {
  try {
    const e = await an.get(`${V1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, U1 = async (e, r) => {
  try {
    return (await an.post(V1, {
      distanceMeasureName: r ? Ie.HELLINGER_OPTION : Ie.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, y1 = async (e, r) => {
  try {
    return (await an.post(`${pd}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Wm = async (e, r) => {
  try {
    return (await an.delete(`${pd}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, N1 = async (e, r) => {
  try {
    return (await an.put(`${pd}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, hB = async (e) => {
  try {
    return (await an.post(uB, e)).status === 200;
  } catch {
    return !1;
  }
}, pB = window.Vue.defineComponent, mB = window.Vue.unref, wB = window.Vue.renderList, vB = window.Vue.Fragment, Kc = window.Vue.openBlock, eu = window.Vue.createElementBlock, VB = window.Vue.toDisplayString, gB = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TB = { class: "alarms-list" }, UB = /* @__PURE__ */ pB({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Kc(), eu("div", TB, [
      (Kc(!0), eu(vB, null, wB(mB(ve.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (s, c) => (Kc(), eu("div", {
        class: gB(["alarm-count", [`${c.toString().toLowerCase()}-color`, r.size]]),
        key: c
      }, VB(s.length), 3))), 128))
    ]));
  }
});
const yB = /* @__PURE__ */ pe(UB, [["__scopeId", "data-v-52d63440"]]), NB = window.Vue.openBlock, kB = window.Vue.createElementBlock, RB = window.Vue.createElementVNode;
var MB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const bB = {}, SB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZB = /* @__PURE__ */ RB("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), EB = [
  ZB
];
function JB(e, r) {
  return NB(), kB("svg", SB, EB);
}
var AB = /* @__PURE__ */ MB(bB, [["render", JB]]);
const FB = window.Vue.openBlock, _B = window.Vue.createElementBlock, CB = window.Vue.createStaticVNode;
var WB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const BB = {}, xB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, IB = /* @__PURE__ */ CB('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), DB = [
  IB
];
function OB(e, r) {
  return FB(), _B("svg", xB, DB);
}
var As = /* @__PURE__ */ WB(BB, [["render", OB]]);
const QB = window.Vue.defineComponent, Lt = window.Vue.unref, tu = window.Vue.createVNode, md = window.Vue.createElementVNode, nu = window.Vue.withCtx, Ki = window.Vue.openBlock, ru = window.Vue.createBlock, ou = window.Vue.createCommentVNode, zB = window.Vue.normalizeClass, GB = window.Vue.createElementBlock, YB = window.Vue.pushScopeId, PB = window.Vue.popScopeId, wd = (e) => (YB("data-v-e073070b"), e = e(), PB(), e), HB = /* @__PURE__ */ wd(() => /* @__PURE__ */ md("span", null, "Acknowledge", -1)), $B = /* @__PURE__ */ wd(() => /* @__PURE__ */ md("span", null, "Escalate", -1)), jB = /* @__PURE__ */ wd(() => /* @__PURE__ */ md("span", null, "Clear", -1)), LB = /* @__PURE__ */ QB({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = sn(), i = async (c) => {
      await fM(r.alarm.id, c) && o.getSituation(r.situationId), r.isSituation && await y1(
        r.situationId,
        Ie.ACCEPTED.toLowerCase()
      );
    }, s = async (c) => {
      await hM(r.alarm.id, c) && o.getSituation(r.situationId);
    };
    return (c, d) => (Ki(), GB("div", {
      class: zB(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? ou("", !0) : (Ki(), ru(Lt(he), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => i(!0))
      }, {
        default: nu(() => [
          tu(Lt(P), {
            icon: Lt(ko),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          HB
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ki(), ru(Lt(he), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Lt(Ie).ESCALATE))
      }, {
        default: nu(() => [
          tu(Lt(P), {
            icon: Lt(AB),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          $B
        ]),
        _: 1
      })) : ou("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ki(), ru(Lt(he), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Lt(Ie).CLEAR))
      }, {
        default: nu(() => [
          tu(Lt(P), {
            icon: Lt(As),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          jB
        ]),
        _: 1
      })) : ou("", !0)
    ], 2));
  }
});
const k1 = /* @__PURE__ */ pe(LB, [["__scopeId", "data-v-e073070b"]]);
var XB = Object.defineProperty, qB = Object.defineProperties, KB = Object.getOwnPropertyDescriptors, Bm = Object.getOwnPropertySymbols, ex = Object.prototype.hasOwnProperty, tx = Object.prototype.propertyIsEnumerable, xm = (e, r, o) => r in e ? XB(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Wu = (e, r) => {
  for (var o in r || (r = {}))
    ex.call(r, o) && xm(e, o, r[o]);
  if (Bm)
    for (var o of Bm(r))
      tx.call(r, o) && xm(e, o, r[o]);
  return e;
}, R1 = (e, r) => qB(e, KB(r));
const M1 = window.Vue.defineComponent, nx = window.Vue.inject, rx = window.Vue.resolveComponent, au = window.Vue.openBlock, Im = window.Vue.createElementBlock, vo = window.Vue.createElementVNode, ox = window.Vue.createBlock, Dm = window.Vue.createCommentVNode, ax = window.Vue.renderSlot, ix = window.Vue.pushScopeId, sx = window.Vue.popScopeId, iu = window.Vue.toRef, es = window.Vue.computed, lx = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var cx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const ux = {
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
}, dx = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, fx = M1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: dx,
  props: ux,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: nx("registerCheckbox", (r) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ce("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ce("checkbox-label");
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
    FeatherRipple: nr
  }
}), hx = (e) => (ix("data-v-a7af27e2"), e = e(), sx(), e), px = { class: "layout-container" }, mx = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], wx = { class: "checkbox hover focus" }, vx = /* @__PURE__ */ hx(() => /* @__PURE__ */ vo("div", { class: "box" }, [
  /* @__PURE__ */ vo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ vo("div", { class: "indeterminate" })
], -1)), Vx = ["id", "for"];
function gx(e, r, o, i, s, c) {
  const d = rx("feather-ripple");
  return au(), Im("div", px, [
    vo("div", {
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
      vo("div", wx, [
        vx,
        e.disabled ? Dm("", !0) : (au(), ox(d, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Dm("", !0) : (au(), Im("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        ax(e.$slots, "default", {}, void 0, !0)
      ], 8, Vx))
    ], 40, mx)
  ]);
}
var Ao = /* @__PURE__ */ cx(fx, [["render", gx], ["__scopeId", "data-v-a7af27e2"]]);
const Tx = R1(Wu({}, Qa), {
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
M1({
  props: Tx,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    za(e);
    const o = iu(e, "error"), i = es(() => ce("feather-checkbox-group")), s = es(() => ce("feather-input-description")), c = es(() => ce("feather-input-label")), d = es(() => {
      const V = JSON.parse(JSON.stringify(r.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!o.value), R1(Wu({}, V), {
        class: "",
        "aria-describedby": s.value
      });
    }), f = lx(i.value), { validate: m } = Da(f, iu(e, "modelValue"), e.label, e.schema, iu(e, "error"));
    return Wu({
      groupId: i,
      inputId: f,
      descriptionId: s,
      labelId: c,
      attrs: d,
      validate: m,
      registerCheckbox: (V) => {
        V && f.value === i.value && (f.value = V);
      }
    }, Oa(r.attrs));
  },
  components: {
    InputSubText: Ia
  }
});
const Ux = window.Vue.openBlock, yx = window.Vue.createElementBlock, b1 = window.Vue.createElementVNode;
var Nx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kx = {}, Rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Mx = /* @__PURE__ */ b1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), bx = /* @__PURE__ */ b1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), Sx = [
  Mx,
  bx
];
function Zx(e, r) {
  return Ux(), yx("svg", Rx, Sx);
}
var Ex = /* @__PURE__ */ Nx(kx, [["render", Zx]]);
var Jx = Object.defineProperty, Ax = Object.defineProperties, Fx = Object.getOwnPropertyDescriptors, Om = Object.getOwnPropertySymbols, _x = Object.prototype.hasOwnProperty, Cx = Object.prototype.propertyIsEnumerable, Qm = (e, r, o) => r in e ? Jx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Vo = (e, r) => {
  for (var o in r || (r = {}))
    _x.call(r, o) && Qm(e, o, r[o]);
  if (Om)
    for (var o of Om(r))
      Cx.call(r, o) && Qm(e, o, r[o]);
  return e;
}, S1 = (e, r) => Ax(e, Fx(r));
const Wx = window.Vue.defineComponent, su = window.Vue.toRef, Bx = window.Vue.computed, zm = window.Vue.resolveComponent, Gm = window.Vue.openBlock, Ym = window.Vue.createElementBlock, Pm = window.Vue.mergeProps, Hm = window.Vue.createVNode, xx = window.Vue.normalizeClass, $m = window.Vue.withCtx, Ix = window.Vue.createElementVNode, Dx = window.Vue.toDisplayString, Ox = window.Vue.createCommentVNode;
var Qx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const zx = S1(Vo(Vo({}, nd), Qa), {
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
}), Gx = {
  "update:modelValue": (e) => !0
}, Yx = Wx({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Gx,
  props: zx,
  setup(e, r) {
    za(e), rd(e);
    const o = su(e, "id"), i = Bx(() => o.value ? o.value : ce("feather-textarea-label")), { validate: s } = Da(i, su(e, "modelValue"), e.label, e.schema, su(e, "error"));
    return Vo({
      inputId: i,
      incomingId: o,
      validate: s
    }, Oa(r.attrs));
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
      return ce("feather-textarea-description");
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
      const e = Vo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), S1(Vo(Vo({}, e), this.listeners), {
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
    InputSubText: Ia,
    InputWrapper: td
  }
}), Px = ["maxlength"], Hx = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function $x(e, r, o, i, s, c) {
  const d = zm("InputWrapper"), f = zm("InputSubText");
  return Gm(), Ym("div", Pm(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Hm(d, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: xx(["feather-textarea-content", e.contentCls])
    }, {
      default: $m(() => [
        Ix("textarea", Pm(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, Px)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Hm(f, { id: e.descriptionId }, {
      right: $m(() => [
        e.maxlength ? (Gm(), Ym("div", Hx, Dx(e.charCount), 1)) : Ox("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Bu = /* @__PURE__ */ Qx(Yx, [["render", $x], ["__scopeId", "data-v-0648df5c"]]);
const jx = window.Pinia.defineStore, Ls = jx("appStore", {
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
}), Lx = window.Vue.defineComponent, jm = window.Vue.toDisplayString, ua = window.Vue.createElementVNode, Vr = window.Vue.unref, oo = window.Vue.openBlock, Lm = window.Vue.createBlock, da = window.Vue.createCommentVNode, Xm = window.Vue.createVNode, ts = window.Vue.createElementBlock, Xx = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const qx = { class: "row" }, Kx = { class: "label" }, e3 = { class: "action-icons" }, t3 = { class: "icon-btn" }, n3 = {
  key: 0,
  class: "icon-btn"
}, r3 = {
  key: 1,
  class: "icon-btn"
}, o3 = {
  key: 0,
  class: "text"
}, a3 = window.Vue.watch, qm = window.Vue.ref, i3 = /* @__PURE__ */ Lx({
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
    const r = e, o = Ls(), i = qm(!1), s = qm((m = r.memo) == null ? void 0 : m.body);
    a3(r, () => {
      var v;
      s.value = (v = r.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const c = () => {
      i.value = !i.value;
    }, d = async () => {
      i.value = !1, await TM(r.id, r.type) ? s.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, s.value && s.value !== "" && (await gM(r.id, r.type, s.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (v, V) => (oo(), ts("div", {
      class: Xx([r.boxType === "small" ? "box-small" : "box"])
    }, [
      ua("div", qx, [
        ua("div", Kx, jm(e.label), 1),
        ua("div", e3, [
          ua("div", t3, [
            i.value ? da("", !0) : (oo(), Lm(Vr(P), {
              key: 0,
              icon: Vr(Ex),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          i.value ? (oo(), ts("div", n3, [
            Xm(Vr(P), {
              icon: Vr(ko),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : da("", !0),
          s.value && s.value != "" || i.value ? (oo(), ts("div", r3, [
            Xm(Vr(P), {
              icon: Vr(Zo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : da("", !0)
        ])
      ]),
      ua("div", null, [
        !i.value && s.value != null ? (oo(), ts("div", o3, jm(s.value), 1)) : da("", !0),
        i.value ? (oo(), Lm(Vr(Bu), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": V[0] || (V[0] = (g) => s.value = g),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : da("", !0)
      ])
    ], 2));
  }
});
const Fs = /* @__PURE__ */ pe(i3, [["__scopeId", "data-v-3f44e250"]]), s3 = window.Vue.defineComponent, gr = window.Vue.unref, ao = window.Vue.createVNode, fa = window.Vue.toDisplayString, nn = window.Vue.createElementVNode, Km = window.Vue.openBlock, ew = window.Vue.createElementBlock, tw = window.Vue.createCommentVNode, lu = window.Vue.createTextVNode, l3 = window.Vue.pushScopeId, c3 = window.Vue.popScopeId, vd = (e) => (l3("data-v-a78bcbcc"), e = e(), c3(), e), u3 = {
  key: 0,
  class: "card"
}, d3 = { class: "row" }, f3 = { class: "title" }, h3 = {
  key: 0,
  class: "ack"
}, p3 = /* @__PURE__ */ vd(() => /* @__PURE__ */ nn("strong", null, " Duration: ", -1)), m3 = ["innerHTML"], w3 = /* @__PURE__ */ vd(() => /* @__PURE__ */ nn("strong", null, "First Event", -1)), v3 = /* @__PURE__ */ vd(() => /* @__PURE__ */ nn("strong", null, "Last Event", -1)), V3 = { class: "section memo-boxes" }, nw = window.Vue.ref, g3 = window.Vue.watch, T3 = /* @__PURE__ */ s3({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, i = nw(!1), s = nw(o.alarm), c = new Date().getTime();
    g3(o, () => {
      s.value = o.alarm, i.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const d = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (m) => {
      const v = await Uv(m);
      v && (s.value = v);
    };
    return (m, v) => {
      var V, g, U, M, b;
      return s.value ? (Km(), ew("div", u3, [
        nn("div", null, [
          nn("div", d3, [
            ao(gr(Ao), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (A) => i.value = A),
                d
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            nn("div", f3, fa(s.value.nodeLabel) + " - " + fa(s.value.id), 1),
            ao(v1, {
              severity: (V = s.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (Km(), ew("div", h3, [
              ao(gr(P), {
                icon: gr(ko),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : tw("", !0)
          ]),
          nn("div", null, [
            p3,
            lu(" " + fa(gr(Ds)(gr(c), new Date(s.value.firstEventTime))), 1)
          ]),
          nn("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, m3),
          nn("div", null, [
            w3,
            lu(" - " + fa(gr(wn)(s.value.firstEventTime)), 1)
          ]),
          nn("div", null, [
            v3,
            lu(" - " + fa(gr(wn)(s.value.lastEventTime)), 1)
          ]),
          nn("div", V3, [
            ao(Fs, {
              id: (g = s.value) == null ? void 0 : g.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (U = s.value) == null ? void 0 : U.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ao(Fs, {
              id: (M = s.value) == null ? void 0 : M.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (b = s.value) == null ? void 0 : b.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ao(k1, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : tw("", !0);
    };
  }
});
const U3 = /* @__PURE__ */ pe(T3, [["__scopeId", "data-v-a78bcbcc"]]), y3 = window.Vue.openBlock, N3 = window.Vue.createElementBlock, Z1 = window.Vue.createElementVNode;
var k3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const R3 = {}, M3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, b3 = /* @__PURE__ */ Z1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), S3 = /* @__PURE__ */ Z1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), Z3 = [
  b3,
  S3
];
function E3(e, r) {
  return y3(), N3("svg", M3, Z3);
}
var xu = /* @__PURE__ */ k3(R3, [["render", E3]]);
const J3 = window.Vue.watch, A3 = window.Vue.ref, F3 = window.Vue.onBeforeUnmount, E1 = (e) => {
  const r = A3(!1), o = (i) => {
    i.keyCode === ne.ESCAPE && (i.preventDefault(), r.value = !r.value);
  };
  return J3(e, (i) => {
    i ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), F3(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, _3 = window.Vue.watch, J1 = (e) => {
  let r;
  _3(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, A1 = window.Vue.watch, F1 = window.Vue.onBeforeUnmount, _1 = window.Vue.nextTick, C3 = window.Vue.onMounted, C1 = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, _s = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, W1 = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  F1(() => _s(r, o)), C3(() => A1(e, (i) => {
    i ? _1(() => {
      r = C1(o);
    }) : _s(r, o);
  }, { immediate: !0 }));
}, W3 = (e, r) => {
  let o;
  F1(() => _s(o, r.value ? r.value.offsetParent : !1)), A1([e, r], ([i, s]) => {
    i && s ? _1(() => {
      o = C1(s.offsetParent);
    }) : s && _s(o, s.offsetParent);
  }, {
    immediate: !0
  });
};
var B3 = Object.defineProperty, rw = Object.getOwnPropertySymbols, x3 = Object.prototype.hasOwnProperty, I3 = Object.prototype.propertyIsEnumerable, ow = (e, r, o) => r in e ? B3(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, D3 = (e, r) => {
  for (var o in r || (r = {}))
    x3.call(r, o) && ow(e, o, r[o]);
  if (rw)
    for (var o of rw(r))
      I3.call(r, o) && ow(e, o, r[o]);
  return e;
};
const Vd = window.Vue.defineComponent, Ea = window.Vue.ref, O3 = window.Vue.nextTick, B1 = window.Vue.openBlock, x1 = window.Vue.createElementBlock, gd = window.Vue.createElementVNode, Q3 = window.Vue.renderSlot, z3 = window.Vue.resolveComponent, G3 = window.Vue.normalizeClass, Y3 = window.Vue.withModifiers, P3 = window.Vue.createVNode, aw = window.Vue.toRef, iw = window.Vue.computed, sw = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var I1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const H3 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, $3 = Vd({
  props: H3,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Ea(), r = Ea(!1), o = (V, g) => {
      let U = V.compareDocumentPosition(g);
      if (U === 2)
        return "before";
      if (U === 4)
        return "after";
      if (U === 10 || U === 12)
        return "parent";
    }, i = (V) => {
      for (var g = 0; g < V.childNodes.length; g++) {
        var U = V.childNodes[g];
        if (c(U) || i(U))
          return !0;
      }
      return !1;
    }, s = (V) => {
      for (var g = V.childNodes.length - 1; g >= 0; g--) {
        var U = V.childNodes[g];
        if (c(U) || s(U))
          return !0;
      }
      return !1;
    }, c = (V) => d(V) ? (r.value = !0, V.focus && V.focus(), r.value = !1, document.activeElement === V) : !1, d = (V) => {
      if (V.tabIndex > 0 || V.tabIndex === 0 && V.getAttribute("tabIndex") !== null)
        return !0;
      const g = V;
      if (g.disabled || g.tabIndex === -1)
        return !1;
      switch (V.nodeName) {
        case "A":
          const U = V;
          return !!U.href && U.rel !== "ignore";
        case "INPUT":
          const M = V;
          return M.type !== "hidden" && M.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (V) => {
      const g = V.querySelector("[first-focus]");
      g && g.focus ? O3(() => {
        g.focus();
      }) : i(V);
    }, m = Ea();
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
}), j3 = /* @__PURE__ */ gd("div", { tabindex: "0" }, null, -1), L3 = {
  class: "focus-trap-content",
  ref: "content"
}, X3 = /* @__PURE__ */ gd("div", { tabindex: "0" }, null, -1);
function q3(e, r, o, i, s, c) {
  return B1(), x1("div", null, [
    j3,
    gd("div", L3, [
      Q3(e.$slots, "default")
    ], 512),
    X3
  ]);
}
var D1 = /* @__PURE__ */ I1($3, [["render", q3]]);
const K3 = Vd({
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
    icon: () => Zo
  },
  components: {
    FeatherIcon: P
  }
}), eI = ["aria-label"];
function tI(e, r, o, i, s, c) {
  const d = z3("FeatherIcon");
  return B1(), x1("a", {
    href: "#",
    class: G3(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = Y3((f) => e.$emit("close"), ["prevent"]))
  }, [
    P3(d, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, eI);
}
var O1 = /* @__PURE__ */ I1(K3, [["render", tI], ["__scopeId", "data-v-fc0f3f00"]]);
const Q1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, nI = {
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
    default: () => Q1,
    validator: (e) => !!e.title
  }
}, rI = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Vd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: rI,
  props: nI,
  setup(e, r) {
    const o = Os(aw(e, "labels"), Q1), i = aw(e, "modelValue"), s = Ea(), c = () => {
      r.emit("update:modelValue", !1);
    }, d = iw(() => !!r.slots.footer), f = iw(() => ce("dialog-header"));
    e.relative ? W3(i, s) : W1(i), J1(i), sw(E1(i), () => {
      c();
    });
    const m = Ea(e.modelValue);
    return sw(m, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), D3({ close: c, hasFooter: d, headerId: f, element: s, shown: m }, o);
  },
  components: {
    FocusTrap: D1,
    DialogClose: O1
  }
});
var oI = Object.defineProperty, lw = Object.getOwnPropertySymbols, aI = Object.prototype.hasOwnProperty, iI = Object.prototype.propertyIsEnumerable, cw = (e, r, o) => r in e ? oI(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xs = (e, r) => {
  for (var o in r || (r = {}))
    aI.call(r, o) && cw(e, o, r[o]);
  if (lw)
    for (var o of lw(r))
      iI.call(r, o) && cw(e, o, r[o]);
  return e;
};
const qs = window.Vue.defineComponent, uw = window.Vue.toRef, dw = window.Vue.watch, fw = window.Vue.ref, hw = window.Vue.resolveComponent, ns = window.Vue.openBlock, pw = window.Vue.createBlock, sI = window.Vue.Teleport, mw = window.Vue.createElementBlock, cu = window.Vue.createVNode, ww = window.Vue.Transition, uu = window.Vue.withCtx, vw = window.Vue.createCommentVNode, lI = window.Vue.withDirectives, cI = window.Vue.normalizeStyle, uI = window.Vue.normalizeClass, Vw = window.Vue.createElementVNode, dI = window.Vue.renderSlot, fI = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var hI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const z1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, pI = {
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
    default: () => z1,
    validator: (e) => !!e.title
  }
}, mI = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, wI = qs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: mI,
  props: pI,
  setup(e, r) {
    const o = Os(uw(e, "labels"), z1), i = uw(e, "modelValue"), s = () => {
      r.emit("update:modelValue", !1);
    };
    W1(i), J1(i), dw(E1(i), () => {
      s();
    });
    const c = fw(), d = fw(!1);
    return dw(d, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), Xs({ close: s, shown: d, isShown: i, element: c }, o);
  },
  components: {
    DialogClose: O1,
    FocusTrap: D1
  }
}), vI = {
  key: 0,
  class: "drawer-container feather-styles"
}, VI = {
  key: 0,
  class: "greyedOut"
}, gI = ["aria-label"], TI = { class: "slot" };
function UI(e, r, o, i, s, c) {
  const d = hw("dialog-close"), f = hw("focus-trap");
  return ns(), pw(sI, { to: "body" }, [
    e.modelValue ? (ns(), mw("div", vI, [
      cu(ww, { name: "greyOutShim" }, {
        default: uu(() => [
          e.modelValue ? (ns(), mw("div", VI)) : vw("", !0)
        ]),
        _: 1
      }),
      cu(ww, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (m) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (m) => e.shown = !1)
      }, {
        default: uu(() => [
          lI((ns(), pw(f, {
            enable: e.modelValue,
            style: cI({ width: e.width }),
            key: "sect",
            class: uI(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: uu(() => [
              Vw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Vw("div", TI, [
                  dI(e.$slots, "default", {}, void 0, !0)
                ]),
                cu(d, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, gI)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [fI, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : vw("", !0)
  ]);
}
var G1 = /* @__PURE__ */ hI(wI, [["render", UI], ["__scopeId", "data-v-0a36e1dc"]]);
const yI = Xs({
  label: {
    type: String,
    required: !0
  }
}, l1);
qs({
  name: "DrawerTab",
  props: yI,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Sr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Zr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return c1(e);
  },
  components: {
    FeatherRipple: nr
  }
});
const NI = Xs({}, f1), kI = d1;
qs({
  emits: kI,
  model: u1,
  props: NI,
  setup(e, r) {
    return h1(e, r);
  }
});
const RI = Xs({
  header: {
    type: String
  }
}, p1);
qs({
  name: "DrawerTabContent",
  props: RI,
  setup(e) {
    return m1(e);
  },
  directives: {
    MenuFocusLoop: vA
  }
});
const MI = window.Vue.defineComponent, Iu = window.Vue.createElementVNode, gw = window.Vue.unref, bI = window.Vue.renderList, SI = window.Vue.Fragment, du = window.Vue.openBlock, Tw = window.Vue.createElementBlock, ZI = window.Vue.createVNode, EI = window.Vue.withCtx, JI = window.Vue.createBlock, AI = window.Vue.pushScopeId, FI = window.Vue.popScopeId, _I = (e) => (AI("data-v-7f5329a1"), e = e(), FI(), e), CI = { class: "content" }, WI = /* @__PURE__ */ _I(() => /* @__PURE__ */ Iu("h4", null, "Choose the situation where to move the alarms:", -1)), BI = { class: "situation-list" }, xI = window.Vue.ref, II = window.Vue.watch, DI = /* @__PURE__ */ MI({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, i = sn(), s = xI(o.visible);
    return II(o, () => {
      s.value = o.visible;
    }), (c, d) => (du(), JI(gw(G1), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: EI(() => [
        Iu("div", CI, [
          WI,
          Iu("div", BI, [
            (du(!0), Tw(SI, null, bI(gw(i).situations.filter(
              (f) => f.id != o.situationId
            ), (f) => (du(), Tw("div", {
              class: "card",
              key: f.id
            }, [
              ZI(Jv, {
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
const Y1 = /* @__PURE__ */ pe(DI, [["__scopeId", "data-v-7f5329a1"]]), OI = window.Vue.defineComponent, Uw = window.Vue.normalizeClass, mo = window.Vue.createElementVNode, rs = window.Vue.unref, QI = window.Vue.createVNode, os = window.Vue.toDisplayString, zI = window.Vue.createTextVNode, GI = window.Vue.openBlock, YI = window.Vue.createElementBlock, PI = window.Vue.pushScopeId, HI = window.Vue.popScopeId, $I = (e) => (PI("data-v-92e8318d"), e = e(), HI(), e), jI = { class: "alarmInfo" }, LI = { class: "alarm-title" }, XI = /* @__PURE__ */ $I(() => /* @__PURE__ */ mo("strong", null, " Duration: ", -1)), qI = { class: "description" }, KI = /* @__PURE__ */ OI({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, i = new Date().getTime();
    return (s, c) => (GI(), YI("div", {
      class: Uw(["alarm", { selected: o.selected }])
    }, [
      mo("div", jI, [
        mo("div", {
          class: Uw(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        QI(rs(Ao), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        mo("div", LI, os(e.alarm.nodeLabel) + " - " + os(e.alarm.id), 1)
      ]),
      mo("div", null, [
        XI,
        zI(" " + os(rs(Ds)(rs(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      mo("div", qI, os(rs(Zv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Td = /* @__PURE__ */ pe(KI, [["__scopeId", "data-v-92e8318d"]]), eD = window.Vue.defineComponent, tD = window.Vue.unref, yw = window.Vue.createVNode, nD = window.Vue.openBlock, rD = window.Vue.createElementBlock, fu = window.Vue.ref, oD = window.Vue.reactive, aD = /* @__PURE__ */ eD({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: r }) {
    const o = e, i = sn(), s = fu(["all"]), c = fu(o.list), d = fu(!1), f = oD({
      nodes: i.nodes,
      results: i.nodes,
      nodeSelectedValue: void 0
    }), m = (g) => {
      s.value = g, V();
    }, v = (g) => {
      if (!g)
        return f.nodeSelectedValue = void 0, [];
      d.value = !0, f.results = f.nodes.filter((U) => U.label.toLowerCase().indexOf(g) > -1).map((U) => ({
        _text: U.label,
        id: U.id
      })), d.value = !1;
    }, V = () => {
      let g = o.list;
      f.nodeSelectedValue && f.nodeSelectedValue._text && (o.isSituation ? g = g.map((U) => {
        if (U.relatedAlarms.filter(
          (A) => {
            var C;
            return A.nodeLabel === ((C = f.nodeSelectedValue) == null ? void 0 : C._text);
          }
        ).length > 0)
          return U;
      }).filter((U) => U) : g = g.filter(
        (U) => {
          var M;
          return U.nodeLabel === ((M = f.nodeSelectedValue) == null ? void 0 : M._text);
        }
      )), s.value.includes("all") || (g = g.filter(
        (U) => s.value.includes(U.severity)
      )), c.value = g, r("filtered-list", g);
    };
    return (g, U) => (nD(), rD("div", null, [
      yw(tD(qv), {
        class: "map-search",
        label: "Find by node",
        loading: d.value,
        modelValue: f.nodeSelectedValue,
        "onUpdate:modelValue": [
          U[0] || (U[0] = (M) => f.nodeSelectedValue = M),
          V
        ],
        results: f.results,
        type: "single",
        onSearch: v
      }, null, 8, ["loading", "modelValue", "results"]),
      yw(Mo, {
        alarms: o.list,
        onSelectedOption: m,
        property: "severity"
      }, null, 8, ["alarms"])
    ]));
  }
}), iD = window.Vue.defineComponent, gs = window.Vue.createElementVNode, io = window.Vue.unref, sD = window.Vue.toDisplayString, Nw = window.Vue.withCtx, hu = window.Vue.createVNode, lD = window.Vue.renderList, cD = window.Vue.Fragment, ha = window.Vue.openBlock, as = window.Vue.createElementBlock, uD = window.Vue.createBlock, dD = window.Vue.pushScopeId, fD = window.Vue.popScopeId, hD = (e) => (dD("data-v-fa0cfc20"), e = e(), fD(), e), pD = { class: "content" }, mD = { class: "header" }, wD = /* @__PURE__ */ hD(() => /* @__PURE__ */ gs("h4", null, "ADD ALARMS", -1)), vD = {
  key: 0,
  class: "alarms-list"
}, VD = {
  key: 1,
  class: "empty"
}, is = window.Vue.ref, kw = window.Vue.watch, gD = /* @__PURE__ */ iD({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, i = sn(), s = is(o.visible), c = is([]), d = is(["all"]), f = is(i.unassignedAlarms);
    kw(o, () => {
      s.value = o.visible, c.value = [], f.value = i.unassignedAlarms;
    }), kw(
      () => i.unassignedAlarms,
      () => {
        V();
      }
    );
    const m = (U) => {
      ve.exports.includes(c.value, U) ? ve.exports.remove(c.value, (M) => M === U) : c.value.push(U);
    }, v = () => {
      r("alarms-selected", c.value);
    }, V = () => {
      let U = i.unassignedAlarms;
      d.value.includes("all") || (U = U.filter(
        (M) => d.value.includes(M.severity)
      )), f.value = U;
    }, g = (U) => {
      f.value = U;
    };
    return (U, M) => (ha(), uD(io(G1), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        M[0] || (M[0] = (b) => s.value = b),
        M[1] || (M[1] = (b) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Nw(() => [
        gs("div", pD, [
          gs("div", mD, [
            wD,
            hu(io(he), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Nw(() => [
                gs("span", null, "Add " + sD(io(c).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          hu(aD, {
            list: io(i).unassignedAlarms,
            onFilteredList: g
          }, null, 8, ["list"]),
          f.value.length ? (ha(), as("div", vD, [
            (ha(!0), as(cD, null, lD(f.value, (b) => (ha(), as("div", {
              class: "card",
              key: b.id
            }, [
              hu(Td, {
                selected: io(ve.exports.includes)(io(c), b.id),
                alarm: b,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ha(), as("div", VD, "Results not found"))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const TD = /* @__PURE__ */ pe(gD, [["__scopeId", "data-v-fa0cfc20"]]), UD = window.Vue.openBlock, yD = window.Vue.createElementBlock, P1 = window.Vue.createElementVNode;
var ND = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const kD = {}, RD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MD = /* @__PURE__ */ P1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), bD = /* @__PURE__ */ P1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), SD = [
  MD,
  bD
];
function ZD(e, r) {
  return UD(), yD("svg", RD, SD);
}
var Rw = /* @__PURE__ */ ND(kD, [["render", ZD]]);
const ED = window.Vue.defineComponent, _n = window.Vue.createElementVNode, nt = window.Vue.createVNode, je = window.Vue.unref, pa = window.Vue.withCtx, JD = window.Vue.renderList, AD = window.Vue.Fragment, ss = window.Vue.openBlock, ls = window.Vue.createElementBlock, FD = window.Vue.createCommentVNode, _D = window.Vue.pushScopeId, CD = window.Vue.popScopeId, Fo = (e) => (_D("data-v-7861b534"), e = e(), CD(), e), WD = { class: "container" }, BD = { class: "row" }, xD = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("div", { class: "title" }, "Alarms", -1)), ID = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("span", null, "Add Alarms", -1)), DD = { class: "row actions" }, OD = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("span", null, "Clear", -1)), QD = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("span", null, "Acknowledge", -1)), zD = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("span", null, "Move", -1)), GD = /* @__PURE__ */ Fo(() => /* @__PURE__ */ _n("span", null, "Remove", -1)), YD = { class: "section" }, PD = {
  key: 0,
  class: "alarm-list"
}, cs = window.Vue.ref, HD = window.Vue.watch, $D = window.Vue.reactive, jD = window.Vue.markRaw, LD = /* @__PURE__ */ ED({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = jD({
      Add: Ps,
      Delete: Rw,
      MarkComplete: As,
      CheckCircle: ko,
      ExitToApp: xu
    }), i = Ls(), s = sn(), c = cs(!1), d = cs(["all"]), f = cs(!1), m = cs(!1), v = $D({
      selectedAlarms: [],
      alarms: r.alarms
    });
    HD(r, () => {
      d.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], c.value = !1;
    });
    const V = (_) => {
      v.selectedAlarms.includes(_) ? ve.exports.remove(v.selectedAlarms, (I) => I == _) : v.selectedAlarms.push(_);
    }, g = async (_) => {
      v.selectedAlarms.length ? (await pM(v.selectedAlarms, _), s.getSituation(r.situationId), v.selectedAlarms = [], c.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, U = () => v.selectedAlarms.length === r.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), M = async () => {
      U() && (await Wm(
        r.situationId,
        v.selectedAlarms
      ) ? s.getSituation(r.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, b = (_) => {
      _.includes("all") ? v.alarms = r.alarms : v.alarms = r.alarms.filter((I) => _.includes(I.severity));
    }, A = async (_) => {
      U() && (await Wm(
        r.situationId,
        v.selectedAlarms
      ) ? await C(_, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, C = async (_, I) => {
      I.length ? await N1(_, I) ? s.getSituation(_) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, F = async (_) => {
      await C(r.situationId, _), m.value = !1;
    }, W = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    };
    return (_, I) => (ss(), ls("div", WD, [
      _n("div", BD, [
        xD,
        nt(Mo, {
          alarms: r.alarms,
          onSelectedOption: b,
          property: "severity"
        }, null, 8, ["alarms"]),
        nt(je(he), {
          class: "add-alarms-btn",
          onClick: I[0] || (I[0] = (S) => m.value = !0)
        }, {
          default: pa(() => [
            nt(je(P), {
              icon: je(o).Add,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            ID
          ]),
          _: 1
        })
      ]),
      _n("div", DD, [
        nt(je(Ao), {
          modelValue: c.value,
          "onUpdate:modelValue": I[1] || (I[1] = (S) => c.value = S),
          label: "selected"
        }, null, 8, ["modelValue"]),
        nt(je(he), {
          onClick: I[2] || (I[2] = () => g("clear"))
        }, {
          default: pa(() => [
            nt(je(P), {
              icon: je(As),
              class: "icon clear"
            }, null, 8, ["icon"]),
            OD
          ]),
          _: 1
        }),
        nt(je(he), {
          onClick: I[3] || (I[3] = () => g("ack"))
        }, {
          default: pa(() => [
            nt(je(P), {
              icon: je(ko),
              class: "icon ack"
            }, null, 8, ["icon"]),
            QD
          ]),
          _: 1
        }),
        nt(je(he), { onClick: W }, {
          default: pa(() => [
            nt(je(P), {
              icon: je(xu),
              class: "icon move"
            }, null, 8, ["icon"]),
            zD
          ]),
          _: 1
        }),
        nt(je(he), { onClick: M }, {
          default: pa(() => [
            nt(je(P), {
              icon: je(Rw),
              class: "icon remove"
            }, null, 8, ["icon"]),
            GD
          ]),
          _: 1
        })
      ]),
      _n("div", YD, [
        v.alarms.length > 0 ? (ss(), ls("div", PD, [
          (ss(!0), ls(AD, null, JD(v.alarms, (S) => (ss(), ls("div", {
            key: S.id
          }, [
            nt(U3, {
              alarm: S,
              selectAll: c.value,
              "situation-id": r.situationId,
              onAlarmSelected: V
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : FD("", !0)
      ]),
      nt(Y1, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: A,
        onDrawerClosed: I[4] || (I[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      nt(TD, {
        visible: m.value,
        onAlarmsSelected: F,
        onDrawerAlarmsClosed: I[5] || (I[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ]));
  }
});
const XD = /* @__PURE__ */ pe(LD, [["__scopeId", "data-v-7861b534"]]), qD = "/whoami", KD = async () => {
  try {
    const e = await an.get(qD);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, eO = window.Pinia.defineStore, Er = eO("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await KD();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await dB();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async getEngineInfo() {
      const e = await fB();
      e && (this.engineInfo = e);
    },
    async savePermission(e) {
      await T1(e) && (this.allowSave = e);
    }
  }
}), tO = window.Vue.defineComponent, Xt = window.Vue.createVNode, Nt = window.Vue.unref, pu = window.Vue.normalizeClass, us = window.Vue.toDisplayString, Tr = window.Vue.openBlock, Ur = window.Vue.createElementBlock, ds = window.Vue.createCommentVNode, nO = window.Vue.withCtx, en = window.Vue.createElementVNode, rO = window.Vue.createTextVNode, oO = window.Vue.Fragment, aO = window.Vue.pushScopeId, iO = window.Vue.popScopeId, sO = (e) => (aO("data-v-7d539e83"), e = e(), iO(), e), lO = { class: "section" }, cO = { class: "action-section" }, uO = {
  key: 0,
  class: "btn-row"
}, dO = { key: 0 }, fO = { key: 1 }, hO = {
  key: 0,
  class: "situation-detail"
}, pO = { class: "situation-info" }, mO = { class: "id" }, wO = { key: 0 }, vO = ["innerHTML"], VO = /* @__PURE__ */ sO(() => /* @__PURE__ */ en("p", null, null, -1)), gO = { class: "boxes" }, TO = { class: "parameters" }, UO = { class: "section memo-boxes" }, yO = { key: 0 }, Mw = window.Vue.ref, NO = window.Vue.watch, kO = /* @__PURE__ */ tO({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Ls(), i = sn(), s = Ie.REJECTED, c = Er(), d = Mw(r.situationInfo.status), f = Mw(r.situationInfo);
    NO(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const m = async (v) => {
      var g;
      await y1(
        (g = r.situationInfo) == null ? void 0 : g.id,
        v.toLowerCase()
      ) ? (d.value = v, i.getSituation(r.situationInfo.id)) : o.showErrorMsg("You need to choose at least one alarm!");
    };
    return (v, V) => {
      var g, U, M, b, A, C, F, W, _, I, S, z;
      return Tr(), Ur(oO, null, [
        en("div", lO, [
          en("div", cO, [
            Xt(k1, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Nt(c).allowSave ? (Tr(), Ur("div", uO, [
              Xt(Nt(he), {
                class: pu(["btn", { rejected: d.value == Nt(s) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => m(Nt(s)))
              }, {
                default: nO(() => [
                  Xt(Nt(P), {
                    icon: Nt(yv),
                    "aria-hidden": "true",
                    class: pu(["icon reject", { rejected: d.value == Nt(s) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == Nt(s) ? (Tr(), Ur("span", dO, us(Nt(s)), 1)) : (Tr(), Ur("span", fO, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : ds("", !0)
          ]),
          f.value ? (Tr(), Ur("div", hO, [
            en("div", {
              class: pu(["severity-line", [`${(U = (g = f.value) == null ? void 0 : g.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
            }, null, 2),
            en("div", pO, [
              en("div", mO, [
                en("div", null, [
                  rO(" Situation - " + us((M = f.value) == null ? void 0 : M.id) + " - affecting " + us(Nt(ve.exports.size)(Nt(ve.exports.groupBy)((b = f.value) == null ? void 0 : b.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (Tr(), Ur("span", wO, "having " + us(f.value.alarms.length) + " alarms ", 1)) : ds("", !0)
                ]),
                Xt(v1, {
                  severity: (A = f.value) == null ? void 0 : A.severity
                }, null, 8, ["severity"])
              ]),
              en("span", {
                innerHTML: f.value.description
              }, null, 8, vO),
              VO,
              en("div", gO, [
                Xt(qc, {
                  label: "First Event",
                  info: Nt(wn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Xt(qc, {
                  label: "Last Event",
                  info: Nt(wn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Xt(qc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            en("div", TO, [
              Xt(yB, {
                alarms: (C = f.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ds("", !0),
          en("div", UO, [
            Xt(Fs, {
              id: (F = f.value) == null ? void 0 : F.id,
              situationId: (W = f.value) == null ? void 0 : W.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (_ = f.value) == null ? void 0 : _.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Xt(Fs, {
              id: (I = f.value) == null ? void 0 : I.id,
              situationId: (S = f.value) == null ? void 0 : S.id,
              label: "Journal Memo",
              type: "journal",
              memo: (z = f.value) == null ? void 0 : z.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (Tr(), Ur("div", yO, [
          Xt(XD, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : ds("", !0)
      ], 64);
    };
  }
});
const RO = /* @__PURE__ */ pe(kO, [["__scopeId", "data-v-7d539e83"]]);
var MO = Object.defineProperty, bO = Object.defineProperties, SO = Object.getOwnPropertyDescriptors, bw = Object.getOwnPropertySymbols, ZO = Object.prototype.hasOwnProperty, EO = Object.prototype.propertyIsEnumerable, Sw = (e, r, o) => r in e ? MO(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Du = (e, r) => {
  for (var o in r || (r = {}))
    ZO.call(r, o) && Sw(e, o, r[o]);
  if (bw)
    for (var o of bw(r))
      EO.call(r, o) && Sw(e, o, r[o]);
  return e;
}, JO = (e, r) => bO(e, SO(r));
const H1 = window.Vue.defineComponent, Rr = window.Vue.resolveComponent, Ts = window.Vue.openBlock, Zw = window.Vue.createBlock, Us = window.Vue.mergeProps, Mr = window.Vue.withCtx, $1 = window.Vue.createElementBlock, AO = window.Vue.Fragment, FO = window.Vue.renderList, _O = window.Vue.createTextVNode, CO = window.Vue.toDisplayString, WO = window.Vue.computed, Ew = window.Vue.toRef, ma = window.Vue.createVNode, Jw = window.Vue.toHandlers, BO = window.Vue.renderSlot, xO = window.Vue.normalizeClass, IO = window.Vue.createElementVNode;
var j1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const DO = H1({
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
      return ce("feather-select-active");
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
        _a(r, this.$refs.list.$el);
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
    FeatherList: id,
    FeatherListItem: Ya
  }
});
function OO(e, r, o, i, s, c) {
  const d = Rr("FeatherListItem"), f = Rr("FeatherList");
  return Ts(), Zw(f, Us(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Mr(() => [
      (Ts(!0), $1(AO, null, FO(e.options, (m, v) => (Ts(), Zw(d, {
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
        default: Mr(() => [
          _O(CO(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var QO = /* @__PURE__ */ j1(DO, [["render", OO], ["__scopeId", "data-v-eae820da"]]);
const zO = JO(Du(Du({}, nd), Qa), {
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
}), GO = {
  "update:modelValue": (e) => !0
}, YO = H1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: GO,
  props: zO,
  setup(e, r) {
    za(e), rd(e);
    const o = WO(() => ce("feather-select-input")), { validate: i } = Da(o, Ew(e, "modelValue"), e.label, e.schema, Ew(e, "error"));
    return Du({
      inputId: o,
      validate: i
    }, Oa(r.attrs));
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
      return ce("feather-select-description");
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
    icon: () => Hs
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
      Zr(this.delayTimeout), this.delayTimeout = Sr(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: td,
    InputSubText: Ia,
    FeatherMenu: Gv,
    List: QO,
    FeatherIcon: P
  }
});
function PO(e, r, o, i, s, c) {
  const d = Rr("FeatherIcon"), f = Rr("InputWrapper"), m = Rr("List"), v = Rr("FeatherMenu"), V = Rr("InputSubText");
  return Ts(), $1("div", Us(e.inherittedAttrs, { class: "feather-select-container" }), [
    ma(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Mr((g) => [
        ma(f, Us({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, g.attrs, Jw(g.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Mr(() => [
            BO(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Mr(() => [
            ma(d, {
              class: xO(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Mr(() => [
            IO("input", Us(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Mr(() => [
        ma(m, {
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
    ma(V, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var HO = /* @__PURE__ */ j1(YO, [["render", PO], ["__scopeId", "data-v-ecb32d90"]]);
const $O = window.Vue.openBlock, jO = window.Vue.createElementBlock, L1 = window.Vue.createElementVNode;
var LO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const XO = {}, qO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KO = /* @__PURE__ */ L1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), e5 = /* @__PURE__ */ L1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), t5 = [
  KO,
  e5
];
function n5(e, r) {
  return $O(), jO("svg", qO, t5);
}
var r5 = /* @__PURE__ */ LO(XO, [["render", n5]]);
const ys = window.Vue.openBlock, Ou = window.Vue.createElementBlock, X1 = window.Vue.createElementVNode, o5 = window.Vue.defineComponent, yr = window.Vue.ref, a5 = window.Vue.provide, Aw = window.Vue.computed, i5 = window.Vue.onUnmounted, Fw = window.Vue.toRef, s5 = window.Vue.resolveComponent, l5 = window.Vue.Fragment, c5 = window.Vue.createBlock, u5 = window.Vue.Teleport, _w = window.Vue.createVNode, d5 = window.Vue.Transition, f5 = window.Vue.withCtx, h5 = window.Vue.normalizeClass, p5 = window.Vue.normalizeStyle, m5 = window.Vue.toDisplayString, w5 = window.Vue.createCommentVNode, v5 = window.Vue.renderSlot, mu = window.Vue.nextTick;
var q1 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const V5 = {}, g5 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, T5 = /* @__PURE__ */ X1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), U5 = [
  T5
];
function y5(e, r) {
  return ys(), Ou("svg", g5, U5);
}
var N5 = /* @__PURE__ */ q1(V5, [["render", y5]]), Ye = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ye || {}), An = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(An || {});
const k5 = (e, r, o, i = 9) => {
  const s = window.innerHeight - e.bottom, c = window.innerWidth - e.right, d = [];
  e.top >= r.height + i && d.push(Ye.top), s >= r.height + i && d.push(Ye.bottom);
  const f = [];
  c >= r.width + i && f.push(Ye.right), e.left >= r.width + i && f.push(Ye.left);
  let m = [...f, ...d];
  return (o === Ye.top || o === Ye.bottom) && (m = [...d, ...f]), m.indexOf(o) > -1 ? o : m.length ? m[0] : o;
}, R5 = (e, r, o, i, s = 28) => {
  if (e === Ye.left || e === Ye.right)
    return An.center;
  const c = r.left + r.width / 2, d = window.innerWidth - r.right, f = [], m = c, v = d + r.width / 2, V = o.width - s, g = o.width / 2;
  return m >= g && v >= g && f.push(An.center), v >= V && f.push(An.left), m >= V && f.push(An.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, M5 = {
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
    default: () => An.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, b5 = o5({
  props: M5,
  setup(e) {
    const r = yr(!1), o = yr(!1), i = ce("feather-tooltip-trigger"), s = ce("feather-tooltip"), c = "data-feather-tooltip";
    a5("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      Zr(d), r.value || (d = Sr(A, e.enterDelay));
    }, m = () => {
      Zr(d), d = Sr(C, e.exitDelay);
    }, v = (Ue) => {
      Ue.keyCode === ne.ESCAPE && (Ue.preventDefault(), C(!0));
    }, V = Aw(() => ({
      [c]: i,
      "aria-describedby": s
    })), g = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, U = yr(document), M = zv(U, () => C(!0));
    i5(() => C(!0));
    const b = () => document.getElementById(s), A = () => {
      o.value = !1, r.value = !0, mu(() => {
        const Ue = b();
        K(Ue), r.value = !1, mu(() => {
          o.value = !0, r.value = !0, M.value = !0;
        });
      });
    }, C = (Ue = !1) => {
      z.value = "", S.value = "", Q.value = "", x.value = "", r.value = !1, Ue && (o.value = !1), M.value = !1;
    }, F = Fw(e, "placement"), W = Fw(e, "pointerAlignment"), _ = 8, I = 24, S = yr(""), z = yr(""), Q = yr(""), x = yr(""), j = Aw(() => x.value ? "p-" + x.value : !1), K = (Ue) => {
      const L = document.querySelector(`[${c}=${i}]`);
      if (!L) {
        console.log("trigger not found");
        return;
      }
      mu(() => {
        const G = L.getBoundingClientRect(), se = Ue.getBoundingClientRect(), le = k5(G, se, F.value, _), Ee = R5(le, G, se, W.value, I);
        Q.value = Ee.toString(), x.value = le.toString();
        let Oe = 0, qe = 0;
        if ((le === Ye.left || le === Ye.right) && (Oe = G.top + G.height / 2 - se.height / 2, le === Ye.left && (qe = G.left - se.width - _), le === Ye.right && (qe = G.right)), le === Ye.top || le === Ye.bottom) {
          Oe = G.top - se.height - _, le === Ye.bottom && (Oe = G.bottom);
          const Co = G.left + G.width / 2;
          switch (Ee) {
            case An.center:
              qe = Co - se.width / 2;
              break;
            case An.left:
              qe = Co - I;
              break;
            case An.right:
              qe = Co - se.width + I;
              break;
          }
        }
        S.value = Oe.toString() + "px", z.value = qe.toString() + "px";
      });
    };
    return {
      attrs: V,
      listeners: g,
      show: r,
      animate: o,
      alignmentClass: Q,
      placementClass: j,
      top: S,
      left: z,
      tooltipID: s
    };
  },
  components: {
    Pointer: N5
  }
}), S5 = ["id"];
function Z5(e, r, o, i, s, c) {
  const d = s5("Pointer");
  return ys(), Ou(l5, null, [
    (ys(), c5(u5, { to: "body" }, [
      _w(d5, { css: e.animate }, {
        default: f5(() => [
          e.show ? (ys(), Ou("div", {
            key: 0,
            class: h5(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: p5({ left: e.left, top: e.top })
          }, [
            X1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, m5(e.title), 9, S5),
            _w(d, { class: "tooltip-pointer" })
          ], 6)) : w5("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    v5(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Cw = /* @__PURE__ */ q1(b5, [["render", Z5], ["__scopeId", "data-v-3da6b22e"]]);
const E5 = window.Vue.defineComponent, wu = window.Vue.normalizeStyle, vu = window.Vue.createElementVNode, wa = window.Vue.unref, Ww = window.Vue.toHandlers, Bw = window.Vue.mergeProps, xw = window.Vue.withCtx, Iw = window.Vue.createVNode, J5 = window.Vue.renderList, A5 = window.Vue.Fragment, va = window.Vue.openBlock, Va = window.Vue.createElementBlock, Dw = window.Vue.normalizeClass, Ow = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const F5 = { class: "row" }, _5 = /* @__PURE__ */ E5({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), i = (c, d) => c ? (Number(d) - Number(c)) * r.proportion : 0, s = (c) => c ? (Number(c) - Number(r.minStart)) * r.proportion : 0;
    return (c, d) => (va(), Va("div", F5, [
      vu("div", {
        class: "line-gray",
        style: wu({
          width: s(r.events[0].createTime) + "px"
        })
      }, null, 4),
      Iw(wa(Cw), {
        title: wa(wn)(e.alarm.firstEventTime)
      }, {
        default: xw(({ attrs: f, on: m }) => [
          vu("div", Bw({ class: "circle" }, f, Ww(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (va(!0), Va(A5, null, J5(r.events, (f, m) => (va(), Va("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[m + 1] ? (va(), Va("div", {
          key: 0,
          class: Dw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: wu({
            width: i(f.createTime, r.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : Ow("", !0),
        Iw(wa(Cw), {
          title: wa(wn)(e.alarm.firstEventTime)
        }, {
          default: xw(({ attrs: v, on: V }) => [
            r.events[m + 1] ? (va(), Va("div", Bw({ key: 0 }, v, Ww(V), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Ow("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      vu("div", {
        class: Dw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: wu({
          width: i(e.events[e.events.length - 1].createTime, wa(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const C5 = /* @__PURE__ */ pe(_5, [["__scopeId", "data-v-3341d12d"]]), W5 = window.Vue.openBlock, B5 = window.Vue.createElementBlock, K1 = window.Vue.createElementVNode;
var x5 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const I5 = {}, D5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, O5 = /* @__PURE__ */ K1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Q5 = /* @__PURE__ */ K1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), z5 = [
  O5,
  Q5
];
function G5(e, r) {
  return W5(), B5("svg", D5, z5);
}
var Y5 = /* @__PURE__ */ x5(I5, [["render", G5]]);
const P5 = window.Vue.defineComponent, Qu = window.Vue.createElementVNode, H5 = window.Vue.renderList, Qw = window.Vue.Fragment, Vu = window.Vue.openBlock, gu = window.Vue.createElementBlock, $5 = window.Vue.normalizeClass, j5 = window.Vue.unref, zw = window.Vue.toDisplayString, L5 = window.Vue.pushScopeId, X5 = window.Vue.popScopeId, q5 = (e) => (L5("data-v-2e087f7b"), e = e(), X5(), e), K5 = /* @__PURE__ */ q5(() => /* @__PURE__ */ Qu("strong", null, "Events:", -1)), eQ = /* @__PURE__ */ P5({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Vu(), gu(Qw, null, [
      K5,
      (Vu(!0), gu(Qw, null, H5(r.events, (s) => (Vu(), gu("div", {
        class: "event-description",
        key: s.id
      }, [
        Qu("div", {
          class: $5(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Qu("div", null, zw(j5(wn)(s.createTime)) + " - " + zw(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const tQ = /* @__PURE__ */ pe(eQ, [["__scopeId", "data-v-2e087f7b"]]), nQ = window.Vue.defineComponent, rQ = window.Vue.normalizeClass, kt = window.Vue.createElementVNode, so = window.Vue.toDisplayString, ct = window.Vue.unref, lo = window.Vue.createVNode, eV = window.Vue.createTextVNode, oQ = window.Vue.renderList, Gw = window.Vue.Fragment, Zn = window.Vue.openBlock, Nr = window.Vue.createElementBlock, Yw = window.Vue.createBlock, fs = window.Vue.createCommentVNode, aQ = window.Vue.normalizeStyle, iQ = window.Vue.pushScopeId, sQ = window.Vue.popScopeId, lQ = (e) => (iQ("data-v-01717d0d"), e = e(), sQ(), e), cQ = { class: "section detail" }, uQ = { class: "id" }, dQ = {
  key: 0,
  class: "section"
}, fQ = /* @__PURE__ */ lQ(() => /* @__PURE__ */ kt("div", { class: "id" }, "Alarms", -1)), hQ = { class: "action-btns" }, pQ = { class: "zoom" }, mQ = /* @__PURE__ */ eV(" Zoom "), wQ = { class: "times" }, vQ = {
  key: 0,
  class: "timeline-container"
}, VQ = { class: "alarm-id" }, gQ = {
  key: 0,
  class: "panel"
}, $n = window.Vue.ref, TQ = window.Vue.watch, UQ = /* @__PURE__ */ nQ({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var I, S;
    const r = e, o = sn(), i = $n(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = $n(s[0]), d = $n(r.width), f = $n(r.width), m = $n(new Date().getTime()), v = () => {
      var z, Q;
      if (!r.situation.events) {
        const x = (Q = (z = r.situation) == null ? void 0 : z.alarms) == null ? void 0 : Q.map((j) => j.id);
        o.getEvents(r.situation.id, x);
      }
    };
    v();
    const V = () => (m.value = new Date().getTime(), d.value / (Number(m.value) - Number(U.value))), g = $n(r.situation.alarms), U = $n(
      ((S = ve.exports.minBy((I = r.situation) == null ? void 0 : I.alarms, "firstEventTime")) == null ? void 0 : S.firstEventTime) || new Date().getTime()
    ), M = $n(V());
    TQ(r, () => {
      var z, Q;
      U.value = ((Q = ve.exports.minBy((z = r.situation) == null ? void 0 : z.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), v(), d.value = f.value, M.value = V(), g.value = r.situation.alarms, c.value = s[0];
    });
    const b = (z) => {
      if ((z == null ? void 0 : z.id) === 1 && (g.value = r.situation.alarms), (z == null ? void 0 : z.id) === 2) {
        const Q = ve.exports.groupBy(g.value, "severity"), x = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        g.value = x.filter((j) => j);
      }
      if ((z == null ? void 0 : z.id) === 3) {
        const Q = ve.exports.reverse(
          ve.exports.sortBy(
            r.situation.alarms,
            (x) => Number(x.lastEventTime) - Number(x.firstEventTime)
          )
        );
        g.value = Q;
      }
    }, A = () => {
      d.value += 100, M.value = V();
    }, C = () => {
      d.value -= 100, M.value = V();
    }, F = () => {
      d.value = f.value, M.value = V();
    }, W = (z) => {
      i.value = z;
    }, _ = () => {
      i.value = 0;
    };
    return (z, Q) => {
      var x, j;
      return Zn(), Nr(Gw, null, [
        kt("div", cQ, [
          kt("div", {
            class: rQ(["severity-line", [`${(j = (x = r.situation) == null ? void 0 : x.severity) == null ? void 0 : j.toLowerCase()}-bg dark`]])
          }, null, 2),
          kt("div", null, [
            kt("div", uQ, "Situation " + so(r.situation.id), 1),
            kt("div", null, " Duration: " + so(ct(Ds)(m.value, new Date(U.value))), 1)
          ])
        ]),
        g.value && g.value.length > 0 ? (Zn(), Nr("div", dQ, [
          fQ,
          kt("div", hQ, [
            lo(ct(HO), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: c.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (K) => c.value = K),
                b
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            kt("div", pQ, [
              mQ,
              kt("div", null, [
                lo(ct(P), {
                  icon: ct(r5),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                lo(ct(P), {
                  icon: ct(Ov),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                lo(ct(P), {
                  icon: ct(Y5),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Zn(), Nr("div", {
            key: 0,
            class: "alarms",
            style: aQ({
              width: f.value + 50 + "px"
            })
          }, [
            kt("div", wQ, [
              kt("div", null, so(ct(wn)(U.value)), 1),
              kt("div", null, so(ct(wn)(m.value)), 1)
            ]),
            e.situation.events ? (Zn(), Nr("div", vQ, [
              (Zn(!0), Nr(Gw, null, oQ(g.value, (K) => (Zn(), Nr("div", {
                class: "timeline",
                key: K.id
              }, [
                kt("div", VQ, [
                  eV(so(K.nodeLabel) + " - " + so(K.id) + " ", 1),
                  i.value === K.id ? (Zn(), Yw(ct(P), {
                    key: 0,
                    icon: ct(Hs),
                    class: "zoom-icon expand",
                    onClick: _
                  }, null, 8, ["icon"])) : (Zn(), Yw(ct(P), {
                    key: 1,
                    icon: ct(Fv),
                    class: "zoom-icon expand",
                    onClick: () => W(K.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                lo(C5, {
                  alarm: K,
                  proportion: M.value,
                  "min-start": U.value,
                  events: r.situation.events[K.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === K.id ? (Zn(), Nr("div", gQ, [
                  lo(tQ, {
                    events: r.situation.events[K.id]
                  }, null, 8, ["events"])
                ])) : fs("", !0)
              ]))), 128))
            ])) : fs("", !0)
          ], 4)) : fs("", !0)
        ])) : fs("", !0)
      ], 64);
    };
  }
});
const yQ = /* @__PURE__ */ pe(UQ, [["__scopeId", "data-v-01717d0d"]]), NQ = window.Vue.openBlock, kQ = window.Vue.createElementBlock, RQ = window.Vue.createElementVNode;
var MQ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const bQ = {}, SQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZQ = /* @__PURE__ */ RQ("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), EQ = [
  ZQ
];
function JQ(e, r) {
  return NQ(), kQ("svg", SQ, EQ);
}
var Uo = /* @__PURE__ */ MQ(bQ, [["render", JQ]]);
const tV = window.Vue.defineComponent, Tu = window.Vue.ref, AQ = window.Vue.toRef, Uu = window.Vue.inject, Pw = window.Vue.watch, FQ = window.Vue.nextTick, Hw = window.Vue.openBlock, $w = window.Vue.createElementBlock, yu = window.Vue.createElementVNode, _Q = window.Vue.normalizeClass, jw = window.Vue.renderSlot, Lw = window.Vue.createCommentVNode, Nu = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var CQ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const WQ = {
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
}, BQ = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, xQ = tV({
  emits: BQ,
  props: WQ,
  setup(e, r) {
    const o = Tu(), i = Tu(!1), s = Tu(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = AQ(e, "modelValue"), f = Uu("queueSnackbar", !1), m = Uu("unqueueSnackbar", !1), v = Uu("nextSnackbar", () => {
    }), V = (A, C) => {
      let F, W, _ = C;
      const I = () => {
        !F || (Zr(F), F = 0, _ -= Date.now() - W);
      }, S = () => {
        F || (W = Date.now(), F = Sr(A, _));
      };
      return S(), { pause: I, resume: S };
    }, g = () => {
      i.value = !1, r.emit("closed"), v && v();
    }, U = (A) => {
      A.keyCode === ne.ESCAPE && (s.value = !1);
    }, M = () => {
      o.value.pause();
    }, b = () => {
      s.value && o.value.resume();
    };
    return Pw(d, (A) => {
      A ? FQ(() => {
        f === !1 ? s.value = A : f(c, s);
      }) : m === !1 ? s.value = A : m(c);
    }, { immediate: !0 }), Pw(s, (A) => {
      A ? (i.value = !0, o.value = V(() => {
        s.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), M());
    }), {
      hideTimeout: o,
      contentShow: i,
      internalValue: s,
      id: c,
      incomingValue: d,
      closed: g,
      keyPressed: U,
      stopTimer: M,
      resumeTimer: b
    };
  }
}), IQ = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, DQ = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, OQ = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, QQ = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function zQ(e, r, o, i, s, c) {
  return e.modelValue || e.contentShow ? (Hw(), $w("div", IQ, [
    yu("div", {
      class: _Q(["feather-snackbar", {
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
      yu("div", DQ, [
        e.contentShow ? (Hw(), $w("div", OQ, [
          jw(e.$slots, "default", {}, void 0, !0)
        ])) : Lw("", !0)
      ]),
      yu("div", QQ, [
        jw(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Lw("", !0);
}
var Ks = /* @__PURE__ */ CQ(xQ, [["render", zQ], ["__scopeId", "data-v-5cf64a62"]]);
const GQ = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
tV({
  props: GQ,
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
    return Nu("queueSnackbar", i), Nu("unqueueSnackbar", s), Nu("nextSnackbar", c), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: i,
      shiftItem: c,
      unqueueSnackbar: s
    };
  }
});
const YQ = window.Vue.defineComponent, Se = window.Vue.unref, ut = window.Vue.createVNode, Wa = window.Vue.createElementVNode, Wt = window.Vue.withCtx, co = window.Vue.openBlock, Xw = window.Vue.createBlock, PQ = window.Vue.createCommentVNode, el = window.Vue.createTextVNode, hs = window.Vue.createElementBlock, qw = window.Vue.toDisplayString, HQ = window.Vue.pushScopeId, $Q = window.Vue.popScopeId, Ud = (e) => (HQ("data-v-87dcccfc"), e = e(), $Q(), e), jQ = { id: "cont" }, LQ = { class: "btns-navigation" }, XQ = /* @__PURE__ */ Ud(() => /* @__PURE__ */ Wa("span", null, "Situation List", -1)), qQ = /* @__PURE__ */ Ud(() => /* @__PURE__ */ Wa("span", null, "Show Previous Situation ", -1)), KQ = /* @__PURE__ */ Ud(() => /* @__PURE__ */ Wa("span", null, "Show Next Situation", -1)), ez = { key: 1 }, tz = {
  key: 0,
  class: "detail"
}, nz = /* @__PURE__ */ el("Details"), rz = /* @__PURE__ */ el("Metrics"), oz = {
  key: 1,
  class: "noSituation"
}, az = /* @__PURE__ */ el("dismiss"), uo = window.Vue.ref, Kw = window.Vue.watch, iz = window.Vue.onMounted, sz = window.VueRouter.useRouter, lz = window.VueRouter.useRoute, cz = /* @__PURE__ */ YQ({
  __name: "SituationDetail",
  setup(e) {
    const r = sz(), o = lz(), i = parseInt(o.params.id), s = uo(i), c = sn(), d = Ls();
    c.getSituation(s.value), c.getUnassignedAlarms(), c.situations.length || (c.getSituations(), c.getNodes());
    const f = uo(), m = uo(), v = uo(!0), V = uo(
      c.filteredSituations.findIndex((b) => b === s.value)
    ), g = uo(!1);
    Kw(
      () => c.situationDetail,
      () => {
        f.value = c.situationDetail, v.value = !1, c.getUnassignedAlarms();
      }
    ), iz(() => {
      var A;
      const b = ((A = document.getElementById("cont")) == null ? void 0 : A.getBoundingClientRect().width) || 1200;
      m.value = b - 90;
    });
    const U = () => {
      r.push({
        name: "situations"
      });
    }, M = (b) => {
      const A = V.value, C = c.filteredSituations[A + b];
      r.push({
        name: "situationDetail",
        params: {
          id: C
        }
      });
    };
    return Kw(o, () => {
      s.value = parseInt(o.params.id), c.getSituation(s.value), V.value = c.filteredSituations.findIndex((b) => b == s.value);
    }), d.$subscribe((b, A) => {
      g.value = A.showError;
    }), (b, A) => (co(), hs("div", jQ, [
      Wa("div", LQ, [
        ut(Se(he), {
          primary: "",
          onClick: A[0] || (A[0] = () => U())
        }, {
          default: Wt(() => [
            ut(Se(P), {
              icon: Se(Uo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            XQ
          ]),
          _: 1
        }),
        Wa("div", null, [
          ut(Se(he), {
            disabled: !Se(c).filteredSituations[V.value - 1],
            primary: "",
            onClick: A[1] || (A[1] = () => M(-1))
          }, {
            default: Wt(() => [
              ut(Se(P), {
                icon: Se(Uo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              qQ
            ]),
            _: 1
          }, 8, ["disabled"]),
          ut(Se(he), {
            disabled: !Se(c).filteredSituations[V.value + 1],
            primary: "",
            onClick: A[2] || (A[2] = () => M(1))
          }, {
            default: Wt(() => [
              KQ,
              ut(Se(P), {
                icon: Se(Uo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      v.value ? (co(), Xw(Se(s1), {
        key: 0,
        class: "spinner"
      })) : (co(), hs("div", ez, [
        f.value ? (co(), hs("div", tz, [
          ut(Se(PW), null, {
            tabs: Wt(() => [
              ut(Se(Am), null, {
                default: Wt(() => [
                  nz
                ]),
                _: 1
              }),
              ut(Se(Am), null, {
                default: Wt(() => [
                  rz
                ]),
                _: 1
              })
            ]),
            default: Wt(() => [
              ut(Se(Fm), { class: "panel" }, {
                default: Wt(() => [
                  ut(RO, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ut(Se(Fm), { class: "panel" }, {
                default: Wt(() => [
                  m.value ? (co(), Xw(yQ, {
                    key: 0,
                    situation: f.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : PQ("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (co(), hs("div", oz, " Error. The situation " + qw(Se(i)) + " does not exist. ", 1))
      ])),
      ut(Se(Ks), {
        modelValue: g.value,
        "onUpdate:modelValue": A[4] || (A[4] = (C) => g.value = C),
        center: "",
        error: ""
      }, {
        button: Wt(() => [
          ut(Se(he), {
            onClick: A[3] || (A[3] = (C) => g.value = !1),
            text: ""
          }, {
            default: Wt(() => [
              az
            ]),
            _: 1
          })
        ]),
        default: Wt(() => [
          el(qw(Se(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const uz = /* @__PURE__ */ pe(cz, [["__scopeId", "data-v-87dcccfc"]]), dz = window.Vue.defineComponent, Ge = window.Vue.unref, Bt = window.Vue.createVNode, Dt = window.Vue.createElementVNode, fo = window.Vue.withCtx, fz = window.Vue.toDisplayString, yd = window.Vue.createTextVNode, hz = window.Vue.normalizeClass, ho = window.Vue.openBlock, po = window.Vue.createElementBlock, pz = window.Vue.createCommentVNode, mz = window.Vue.renderList, wz = window.Vue.Fragment, vz = window.Vue.pushScopeId, Vz = window.Vue.popScopeId, Pa = (e) => (vz("data-v-7fae0d9e"), e = e(), Vz(), e), gz = { class: "container" }, Tz = /* @__PURE__ */ Pa(() => /* @__PURE__ */ Dt("span", null, "Situation List", -1)), Uz = /* @__PURE__ */ Pa(() => /* @__PURE__ */ Dt("h2", null, "New Situation", -1)), yz = { class: "form" }, Nz = { class: "fields" }, kz = /* @__PURE__ */ yd(" Total alarms added: "), Rz = { class: "total" }, Mz = {
  key: 0,
  class: "errorList"
}, bz = { class: "footer" }, Sz = /* @__PURE__ */ Pa(() => /* @__PURE__ */ Dt("span", null, "Clear", -1)), Zz = /* @__PURE__ */ Pa(() => /* @__PURE__ */ Dt("span", null, "Add Situation", -1)), Ez = { class: "alarm-column" }, Jz = /* @__PURE__ */ Pa(() => /* @__PURE__ */ Dt("h4", null, "Add Unassociated Alarms", -1)), Az = {
  key: 0,
  class: "alarms"
}, Fz = { key: 1 }, _z = /* @__PURE__ */ yd(" Error on creating new situation :( "), Cz = /* @__PURE__ */ yd("dismiss"), Wz = window.VueRouter.useRouter, jn = window.Vue.ref, Bz = window.Vue.watch, xz = /* @__PURE__ */ dz({
  __name: "AddSituation",
  setup(e) {
    const r = Wz(), o = sn(), i = jn(), s = jn(""), c = jn(), d = jn(""), f = jn([]), m = jn(!1), v = jn(), V = jn(o.unassignedAlarms);
    V.value.length || o.getUnassignedAlarms(), Bz(
      () => o.unassignedAlarms,
      () => {
        V.value = o.unassignedAlarms;
      }
    );
    const g = () => {
      r.push({
        name: "situations"
      });
    }, U = (F) => {
      F.includes("all") ? V.value = o.unassignedAlarms : V.value = o.unassignedAlarms.filter(
        (W) => F.includes(W.severity)
      );
    }, M = (F) => {
      m.value = !1, ve.exports.includes(f.value, F) ? ve.exports.remove(f.value, (W) => W === F) : f.value.push(F);
    }, b = () => {
      const F = "This field should not be empty";
      let W = !0;
      return i.value || (s.value = F, W = !1), c.value || (d.value = F, W = !1), f.value.length < 2 && (m.value = !0, W = !1), W;
    }, A = async () => {
      if (b()) {
        const F = {
          alarmIdList: f.value,
          diagnosticText: c.value,
          description: i.value
        };
        await hB(F) ? r.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, C = () => {
      i.value = "", c.value = "", f.value = [], V.value = o.unassignedAlarms;
    };
    return (F, W) => (ho(), po("div", gz, [
      Bt(Ge(he), {
        primary: "",
        onClick: W[0] || (W[0] = () => g()),
        class: "back-btn"
      }, {
        default: fo(() => [
          Bt(Ge(P), {
            icon: Ge(Uo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          Tz
        ]),
        _: 1
      }),
      Uz,
      Dt("div", yz, [
        Dt("div", Nz, [
          Bt(Ge(Bu), {
            modelValue: i.value,
            "onUpdate:modelValue": W[1] || (W[1] = (_) => i.value = _),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          Bt(Ge(Bu), {
            modelValue: c.value,
            "onUpdate:modelValue": W[2] || (W[2] = (_) => c.value = _),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          Dt("div", null, [
            Dt("div", {
              class: hz(["totalAlarms", { errorList: m.value }])
            }, [
              kz,
              Dt("span", Rz, fz(Ge(f).length), 1)
            ], 2),
            m.value ? (ho(), po("div", Mz, " It is required to add at least 2 alarms ")) : pz("", !0)
          ]),
          Dt("div", bz, [
            Bt(Ge(he), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: fo(() => [
                Bt(Ge(P), {
                  icon: Ge(Zo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Sz
              ]),
              _: 1
            }),
            Bt(Ge(he), {
              class: "btn",
              primary: "",
              onClick: A
            }, {
              default: fo(() => [
                Bt(Ge(P), {
                  icon: Ge(Ps),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Zz
              ]),
              _: 1
            })
          ])
        ]),
        Dt("div", Ez, [
          Jz,
          Bt(Mo, {
            alarms: Ge(o).unassignedAlarms,
            onSelectedOption: U,
            property: "severity"
          }, null, 8, ["alarms"]),
          V.value.length ? (ho(), po("div", Az, [
            (ho(!0), po(wz, null, mz(V.value, (_) => (ho(), po("div", {
              key: _.id,
              class: "alarm-card"
            }, [
              Bt(Td, {
                selected: Ge(ve.exports.includes)(Ge(f), _.id),
                alarm: _,
                onSelectedAlarm: M
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ho(), po("div", Fz, "There is no unassigned alarms"))
        ])
      ]),
      Bt(Ge(Ks), {
        modelValue: v.value,
        "onUpdate:modelValue": W[4] || (W[4] = (_) => v.value = _),
        center: "",
        error: ""
      }, {
        button: fo(() => [
          Bt(Ge(he), {
            onClick: W[3] || (W[3] = (_) => v.value = !1),
            text: ""
          }, {
            default: fo(() => [
              Cz
            ]),
            _: 1
          })
        ]),
        default: fo(() => [
          _z
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const Iz = /* @__PURE__ */ pe(xz, [["__scopeId", "data-v-7fae0d9e"]]), Dz = window.Vue.openBlock, Oz = window.Vue.createElementBlock, Qz = window.Vue.createStaticVNode;
var zz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const Gz = {}, Yz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Pz = /* @__PURE__ */ Qz('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), Hz = [
  Pz
];
function $z(e, r) {
  return Dz(), Oz("svg", Yz, Hz);
}
var jz = /* @__PURE__ */ zz(Gz, [["render", $z]]);
const Lz = window.Vue.openBlock, Xz = window.Vue.createElementBlock, qz = window.Vue.createStaticVNode;
var Kz = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const eG = {}, tG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nG = /* @__PURE__ */ qz('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), rG = [
  nG
];
function oG(e, r) {
  return Lz(), Xz("svg", tG, rG);
}
var aG = /* @__PURE__ */ Kz(eG, [["render", oG]]);
const iG = window.Vue.openBlock, sG = window.Vue.createElementBlock, lG = window.Vue.createElementVNode;
var cG = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const uG = {}, dG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fG = /* @__PURE__ */ lG("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), hG = [
  fG
];
function pG(e, r) {
  return iG(), sG("svg", dG, hG);
}
var mG = /* @__PURE__ */ cG(uG, [["render", pG]]);
const wG = window.Vue.openBlock, vG = window.Vue.createElementBlock, VG = window.Vue.createStaticVNode;
var gG = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const TG = {}, UG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yG = /* @__PURE__ */ VG('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), NG = [
  yG
];
function kG(e, r) {
  return wG(), vG("svg", UG, NG);
}
var RG = /* @__PURE__ */ gG(TG, [["render", kG]]);
const MG = window.Vue.openBlock, bG = window.Vue.createElementBlock, SG = window.Vue.createElementVNode;
var ZG = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of r)
    o[i] = s;
  return o;
};
const EG = {}, JG = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AG = /* @__PURE__ */ SG("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), FG = [
  AG
];
function _G(e, r) {
  return MG(), bG("svg", JG, FG);
}
var CG = /* @__PURE__ */ ZG(EG, [["render", _G]]);
const Nd = () => window.VRouter || Rd, WG = window.Vue.defineComponent, Ze = window.Vue.createElementVNode, Ba = window.Vue.createTextVNode, rt = window.Vue.unref, En = window.Vue.createVNode, ps = window.Vue.withCtx, ev = window.Vue.openBlock, tv = window.Vue.createElementBlock, BG = window.Vue.createCommentVNode, xG = window.Vue.pushScopeId, IG = window.Vue.popScopeId, ln = (e) => (xG("data-v-ec3cadfe"), e = e(), IG(), e), DG = { class: "container" }, OG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("div", { class: "title" }, "ALEC", -1)), QG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("div", { class: "description" }, [
  /* @__PURE__ */ Ba(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ze("strong", null, "Our goal"),
  /* @__PURE__ */ Ba(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), zG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("h3", null, "Key Benefits:", -1)), GG = { class: "list" }, YG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), PG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("span", null, "Assist in root cause analysis.", -1)), HG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), $G = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("span", null, "Easy configuration.", -1)), jG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), LG = {
  key: 0,
  class: "optin"
}, XG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("h3", null, "Enable ALEC for more precise results:", -1)), qG = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), KG = { class: "choices" }, eY = /* @__PURE__ */ ln(() => /* @__PURE__ */ Ze("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), tY = /* @__PURE__ */ Ba("Yes"), nY = /* @__PURE__ */ Ba("No"), rY = /* @__PURE__ */ Ba(" Continue "), oY = window.Vue.ref, aY = /* @__PURE__ */ WG({
  __name: "WelcomePage",
  setup(e) {
    const r = Er(), o = Nd(), i = oY(!0), s = () => {
      const c = Boolean(i.value);
      r.savePermission(c), o.push({ name: "configuration" });
    };
    return (c, d) => (ev(), tv("div", DG, [
      OG,
      QG,
      Ze("div", null, [
        zG,
        Ze("div", GG, [
          Ze("div", null, [
            En(rt(P), {
              icon: rt(RG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            YG
          ]),
          Ze("div", null, [
            En(rt(P), {
              icon: rt(mG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            PG
          ]),
          Ze("div", null, [
            En(rt(P), {
              icon: rt(CG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            HG
          ]),
          Ze("div", null, [
            En(rt(P), {
              icon: rt(jz),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            $G
          ]),
          Ze("div", null, [
            En(rt(P), {
              icon: rt(aG),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            jG
          ])
        ])
      ]),
      rt(r).isAdmin ? (ev(), tv("div", LG, [
        XG,
        qG,
        Ze("div", KG, [
          eY,
          En(rt(Ca), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f),
            label: ""
          }, {
            default: ps(() => [
              En(rt(Jn), { value: !0 }, {
                default: ps(() => [
                  tY
                ]),
                _: 1
              }),
              En(rt(Jn), { value: !1 }, {
                default: ps(() => [
                  nY
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : BG("", !0),
      En(rt(he), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: ps(() => [
          rY
        ]),
        _: 1
      })
    ]));
  }
});
const iY = /* @__PURE__ */ pe(aY, [["__scopeId", "data-v-ec3cadfe"]]), sY = window.Vue.defineComponent, lY = window.Vue.createElementVNode, cY = window.Vue.createTextVNode, uY = window.Vue.unref, dY = window.Vue.withCtx, fY = window.Vue.createVNode, hY = window.Vue.Fragment, pY = window.Vue.openBlock, mY = window.Vue.createElementBlock, wY = window.Vue.pushScopeId, vY = window.Vue.popScopeId, VY = (e) => (wY("data-v-bcb7dcc6"), e = e(), vY(), e), gY = /* @__PURE__ */ VY(() => /* @__PURE__ */ lY("div", { class: "main" }, "Something bad is happening...", -1)), TY = /* @__PURE__ */ cY(" Reload "), UY = /* @__PURE__ */ sY({
  __name: "ErrorPage",
  setup(e) {
    const r = Nd(), o = () => {
      r.push({ name: "situations" });
    };
    return (i, s) => (pY(), mY(hY, null, [
      gY,
      fY(uY(he), {
        primary: "",
        onClick: o
      }, {
        default: dY(() => [
          TY
        ]),
        _: 1
      })
    ], 64));
  }
});
const yY = /* @__PURE__ */ pe(UY, [["__scopeId", "data-v-bcb7dcc6"]]), NY = window.Vue.defineComponent, Be = window.Vue.unref, Le = window.Vue.createVNode, Kn = window.Vue.createElementVNode, Ln = window.Vue.withCtx, kY = window.Vue.renderList, RY = window.Vue.Fragment, ga = window.Vue.openBlock, Ta = window.Vue.createElementBlock, MY = window.Vue.toDisplayString, nV = window.Vue.createTextVNode, bY = window.Vue.pushScopeId, SY = window.Vue.popScopeId, kd = (e) => (bY("data-v-386a7a16"), e = e(), SY(), e), ZY = { class: "container" }, EY = { class: "nav-btns" }, JY = /* @__PURE__ */ kd(() => /* @__PURE__ */ Kn("span", null, "Situation List", -1)), AY = /* @__PURE__ */ kd(() => /* @__PURE__ */ Kn("h2", null, "List Unassigned Alarms", -1)), FY = { class: "content" }, _Y = { class: "filters" }, CY = { class: "list" }, WY = { class: "action-btns" }, BY = /* @__PURE__ */ kd(() => /* @__PURE__ */ Kn("span", null, "Move", -1)), xY = {
  key: 0,
  class: "alarms"
}, IY = { key: 1 }, DY = /* @__PURE__ */ nV("dismiss"), qt = window.Vue.ref, OY = window.Vue.watch, QY = window.Vue.markRaw, zY = window.VueRouter.useRouter, GY = /* @__PURE__ */ NY({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = QY({
      ArrowBack: Uo,
      ExitToApp: xu
    }), o = zY(), i = sn();
    i.getUnassignedAlarms(), i.getSituations();
    const s = qt([]), c = qt([]), d = qt(!1), f = qt(!1), m = qt(""), v = qt(!1), V = qt(!1), g = qt(["all"]), U = qt(["all"]), M = qt(1), b = qt(!0);
    OY(
      () => i.unassignedAlarms,
      () => {
        _();
      }
    );
    const A = (x) => {
      ve.exports.includes(c.value, x) ? ve.exports.remove(c.value, (j) => j === x) : c.value.push(x);
    }, C = (x) => {
      U.value = x, _();
    }, F = (x) => {
      g.value = x, _();
    }, W = (x) => {
      M.value = x, _();
    }, _ = () => {
      let x = i.unassignedAlarms;
      U.value.includes("all") || (x = x.filter(
        (j) => U.value.includes(j.severity)
      )), g.value.includes("all") || (x = x.filter(
        (j) => g.value.includes(j.nodeLabel)
      )), M.value !== 1 && (x = Ev(
        M.value,
        x
      )), s.value = x;
    }, I = () => {
      d.value ? c.value = s.value.map((x) => x.id) : c.value = [];
    }, S = async (x) => {
      await N1(x, c.value) ? i.getUnassignedAlarms() : (v.value = !0, V.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, z = () => {
      o.push({
        name: "situations"
      });
    }, Q = () => {
      c.value.length ? f.value = !0 : (v.value = !0, V.value = !1, m.value = "You need to choose at least one alarm!");
    };
    return (x, j) => (ga(), Ta("div", ZY, [
      Kn("div", EY, [
        Le(Be(he), {
          primary: "",
          onClick: j[0] || (j[0] = () => z())
        }, {
          default: Ln(() => [
            Le(Be(P), {
              icon: Be(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            JY
          ]),
          _: 1
        }),
        Le(Kv)
      ]),
      AY,
      Kn("div", FY, [
        Kn("div", _Y, [
          Le(Be(Sa), {
            title: "By Severity",
            modelValue: b.value,
            "onUpdate:modelValue": j[1] || (j[1] = (K) => b.value = K)
          }, {
            default: Ln(() => [
              Le(Mo, {
                alarms: Be(i).unassignedAlarms,
                onSelectedOption: C,
                "pre-selected": U.value,
                property: "severity",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Le(Be(Sa), {
            title: "By Node Label",
            modelValue: b.value,
            "onUpdate:modelValue": j[2] || (j[2] = (K) => b.value = K)
          }, {
            default: Ln(() => [
              Le(Mo, {
                alarms: Be(i).unassignedAlarms,
                onSelectedOption: F,
                "pre-selected": g.value,
                property: "nodeLabel",
                isVertical: ""
              }, null, 8, ["alarms", "pre-selected"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Le(Be(Sa), { title: "By Start Date" }, {
            default: Ln(() => [
              Le(i1, { onFilterDateSelected: W })
            ]),
            _: 1
          })
        ]),
        Kn("div", CY, [
          Kn("div", WY, [
            Le(Be(Ao), {
              modelValue: d.value,
              "onUpdate:modelValue": [
                j[3] || (j[3] = (K) => d.value = K),
                I
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Le(Be(he), { onClick: Q }, {
              default: Ln(() => [
                Le(Be(P), {
                  icon: Be(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                BY
              ]),
              _: 1
            })
          ]),
          Be(s).length ? (ga(), Ta("div", xY, [
            (ga(!0), Ta(RY, null, kY(Be(s), (K) => (ga(), Ta("div", {
              key: K.id,
              class: "card"
            }, [
              Le(Td, {
                selected: Be(ve.exports.includes)(Be(c), K.id),
                alarm: K,
                onSelectedAlarm: A
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ga(), Ta("div", IY, "There is no unassigned alarms"))
        ])
      ]),
      Le(Y1, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: S,
        onDrawerClosed: j[4] || (j[4] = () => f.value = !1)
      }, null, 8, ["visible"]),
      Le(Be(Ks), {
        modelValue: v.value,
        "onUpdate:modelValue": j[6] || (j[6] = (K) => v.value = K),
        center: "",
        error: V.value
      }, {
        button: Ln(() => [
          Le(Be(he), {
            onClick: j[5] || (j[5] = (K) => v.value = !1),
            text: ""
          }, {
            default: Ln(() => [
              DY
            ]),
            _: 1
          })
        ]),
        default: Ln(() => [
          nV(MY(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const YY = /* @__PURE__ */ pe(GY, [["__scopeId", "data-v-386a7a16"]]), PY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", HY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", $Y = window.Vue.defineComponent, De = window.Vue.createElementVNode, zu = window.Vue.createTextVNode, Xn = window.Vue.unref, Ua = window.Vue.withCtx, ya = window.Vue.createVNode, jY = window.Vue.openBlock, LY = window.Vue.createElementBlock, XY = window.Vue.pushScopeId, qY = window.Vue.popScopeId, Fr = (e) => (XY("data-v-9a5b5f4e"), e = e(), qY(), e), KY = { class: "container" }, e4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("h2", null, "Configuration", -1)), t4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("p", null, [
  /* @__PURE__ */ zu(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ De("br"),
  /* @__PURE__ */ zu(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ De("strong", null, [
    /* @__PURE__ */ De("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), n4 = { class: "radio-content" }, r4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("strong", { class: "title" }, "Clustering", -1)), o4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), a4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("img", {
  class: "img",
  src: PY
}, null, -1)), i4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("div", { class: "hellinger" }, [
  /* @__PURE__ */ De("strong", null, "With hellinger distance"),
  /* @__PURE__ */ De("br"),
  /* @__PURE__ */ De("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), s4 = /* @__PURE__ */ Fr(() => /* @__PURE__ */ De("div", { class: "radio-content" }, [
  /* @__PURE__ */ De("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ De("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ De("img", {
    class: "img img2",
    src: HY
  })
], -1)), l4 = /* @__PURE__ */ zu(" Continue "), nv = window.Vue.ref, c4 = /* @__PURE__ */ $Y({
  __name: "ConfigurationPage",
  setup(e) {
    const r = Er(), o = Nd(), i = nv(!1), s = nv(Ie.ENGINE_DBSCAN), c = () => {
      T1(r.allowSave), U1(s.value, i.value), o.push({ name: "situations" });
    };
    return (d, f) => (jY(), LY("div", KY, [
      e4,
      t4,
      De("div", null, [
        ya(Xn(Ca), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => s.value = m)
        }, {
          default: Ua(() => [
            ya(Xn(Jn), {
              class: "radio",
              value: Xn(Ie).ENGINE_DBSCAN
            }, {
              default: Ua(() => [
                De("div", n4, [
                  r4,
                  o4,
                  a4,
                  ya(Xn(Ao), {
                    modelValue: i.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                    disabled: s.value !== Xn(Ie).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ua(() => [
                      i4
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            ya(Xn(Jn), {
              class: "radio",
              value: Xn(Ie).ENGINE_DEEP_LEARNING
            }, {
              default: Ua(() => [
                s4
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      ya(Xn(he), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => c())
      }, {
        default: Ua(() => [
          l4
        ]),
        _: 1
      })
    ]));
  }
});
const u4 = /* @__PURE__ */ pe(c4, [["__scopeId", "data-v-9a5b5f4e"]]), d4 = window.Vue.defineComponent, ku = window.Vue.unref, f4 = window.Vue.createVNode, h4 = window.Vue.createElementVNode, p4 = window.Vue.withCtx, m4 = window.Vue.openBlock, w4 = window.Vue.createBlock, v4 = window.Vue.pushScopeId, V4 = window.Vue.popScopeId, g4 = (e) => (v4("data-v-1aeeac3c"), e = e(), V4(), e), T4 = /* @__PURE__ */ g4(() => /* @__PURE__ */ h4("span", null, "Situation List", -1)), U4 = window.VueRouter.useRouter, y4 = window.Vue.markRaw, N4 = /* @__PURE__ */ d4({
  __name: "SituationListBtn",
  setup(e) {
    const r = U4(), o = y4({
      ArrowBack: Uo
    }), i = () => {
      r.push({
        name: "situations"
      });
    };
    return (s, c) => (m4(), w4(ku(he), {
      primary: "",
      onClick: c[0] || (c[0] = () => i())
    }, {
      default: p4(() => [
        f4(ku(P), {
          icon: ku(o).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        T4
      ]),
      _: 1
    }));
  }
});
const k4 = /* @__PURE__ */ pe(N4, [["__scopeId", "data-v-1aeeac3c"]]), R4 = window.Vue.defineComponent, xt = window.Vue.createVNode, on = window.Vue.createElementVNode, rr = window.Vue.createTextVNode, ot = window.Vue.unref, Kt = window.Vue.withCtx, M4 = window.Vue.toDisplayString, b4 = window.Vue.Fragment, S4 = window.Vue.openBlock, Z4 = window.Vue.createElementBlock, E4 = window.Vue.pushScopeId, J4 = window.Vue.popScopeId, _o = (e) => (E4("data-v-e4c242db"), e = e(), J4(), e), A4 = { class: "container" }, F4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("h3", null, "Configuration Page", -1)), _4 = { class: "section" }, C4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("div", { class: "title" }, "OpenNMS can store anonymously the information:", -1)), W4 = /* @__PURE__ */ rr("Yes"), B4 = /* @__PURE__ */ rr("No"), x4 = { class: "section" }, I4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("div", { class: "title" }, "Engine:", -1)), D4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("div", null, [
  /* @__PURE__ */ rr(" (Detail information about engines "),
  /* @__PURE__ */ on("a", {
    target: "_blank",
    href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
  }, "here"),
  /* @__PURE__ */ rr(") ")
], -1)), O4 = /* @__PURE__ */ rr("Clustering"), Q4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("div", { class: "hellinger" }, [
  /* @__PURE__ */ on("strong", null, "With Hellinger distance")
], -1)), z4 = /* @__PURE__ */ rr("Deep Learning"), G4 = /* @__PURE__ */ _o(() => /* @__PURE__ */ on("span", null, "Save Changes", -1)), Y4 = /* @__PURE__ */ rr("dismiss"), P4 = window.Vue.markRaw, H4 = /* @__PURE__ */ R4({
  __name: "AccountSettings",
  setup(e) {
    var V, g;
    const r = P4({
      MarkComplete: As
    }), o = Er(), i = ref(o.allowSave), s = ref(((V = o.engineInfo) == null ? void 0 : V.engineName) || Ie.ENGINE_DBSCAN), c = ref(
      ((g = o.engineInfo) == null ? void 0 : g.distanceMeasureName) === Ie.HELLINGER_OPTION
    ), d = ref(!1), f = ref(!1), m = ref(""), v = async () => {
      const U = Boolean(i.value);
      o.savePermission(U);
      const M = await U1(
        s.value,
        c.value
      );
      d.value = !0, M ? (m.value = "The settings were saved!", f.value = !1) : (m.value = "Error on saving the settings", f.value = !0);
    };
    return (U, M) => (S4(), Z4(b4, null, [
      xt(k4),
      on("div", A4, [
        F4,
        on("div", _4, [
          C4,
          xt(ot(Ca), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": M[0] || (M[0] = (b) => i.value = b),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              xt(ot(Jn), { value: !0 }, {
                default: Kt(() => [
                  W4
                ]),
                _: 1
              }),
              xt(ot(Jn), { value: !1 }, {
                default: Kt(() => [
                  B4
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        on("div", x4, [
          I4,
          D4,
          xt(ot(Ca), {
            vertical: "",
            modelValue: s.value,
            "onUpdate:modelValue": M[2] || (M[2] = (b) => s.value = b),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              xt(ot(Jn), {
                class: "radio-item",
                value: ot(Ie).ENGINE_DBSCAN
              }, {
                default: Kt(() => [
                  O4
                ]),
                _: 1
              }, 8, ["value"]),
              xt(ot(Ao), {
                modelValue: c.value,
                "onUpdate:modelValue": M[1] || (M[1] = (b) => c.value = b),
                disabled: s.value !== ot(Ie).ENGINE_DBSCAN,
                class: "checkbox"
              }, {
                default: Kt(() => [
                  Q4
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              xt(ot(Jn), {
                class: "radio-item",
                value: ot(Ie).ENGINE_DEEP_LEARNING
              }, {
                default: Kt(() => [
                  z4
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        xt(ot(he), {
          primary: "",
          class: "save-btn",
          onClick: v
        }, {
          default: Kt(() => [
            xt(ot(P), {
              icon: ot(r).MarkComplete,
              class: "icon"
            }, null, 8, ["icon"]),
            G4
          ]),
          _: 1
        }),
        xt(ot(Ks), {
          modelValue: d.value,
          "onUpdate:modelValue": M[4] || (M[4] = (b) => d.value = b),
          center: "",
          error: f.value
        }, {
          button: Kt(() => [
            xt(ot(he), {
              onClick: M[3] || (M[3] = (b) => d.value = !1),
              text: ""
            }, {
              default: Kt(() => [
                Y4
              ]),
              _: 1
            })
          ]),
          default: Kt(() => [
            rr(M4(m.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const $4 = /* @__PURE__ */ pe(H4, [["__scopeId", "data-v-e4c242db"]]), j4 = window.VueRouter.createRouter, L4 = window.VueRouter.createWebHistory, Ru = async () => {
  const e = window.VRouter || Rd, r = Er();
  if (!r.userId) {
    const o = await r.getUserRole();
    await r.getAlecInfo(), o ? e.push({ name: "home" }) : e.push({ name: "error" });
  }
}, rV = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || Rd, o = Er();
      await o.getUserRole(), await o.getAlecInfo(), o.firstTime ? r.push({ name: "welcome", params: e.params }) : r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Ru(),
    component: iY
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Ru(),
    component: u4
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Ru(),
    component: VW
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: uz
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: Iz
  },
  {
    path: "/error",
    name: "error",
    component: yY
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: YY
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      const e = Er();
      await e.getAlecInfo(), await e.getEngineInfo();
    },
    component: $4
  }
], Mu = window.VRouter;
if (Mu) {
  const e = "Plugin-alecUiExtension", r = Mu.hasRoute(e) ? e : "Plugin";
  for (const o of rV) {
    const { path: i, name: s, component: c, beforeEnter: d } = o;
    Mu.addRoute(r, {
      path: i.slice(1),
      name: s,
      component: c,
      beforeEnter: d
    });
  }
}
const Rd = j4({
  history: L4(),
  routes: rV
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = rR;
