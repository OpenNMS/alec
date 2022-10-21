const be = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, dR = {}, fR = window.Vue.resolveComponent, hR = window.Vue.createVNode, pR = window.Vue.openBlock, mR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wR = { class: "main" };
function VR(t, o) {
  const r = fR("router-view");
  return pR(), mR("div", wR, [
    hR(r)
  ]);
}
const vR = /* @__PURE__ */ be(dR, [["render", VR], ["__scopeId", "data-v-5d32d140"]]), TR = window.Vue.defineComponent, gR = window.Vue.openBlock, UR = window.Vue.createBlock, RR = /* @__PURE__ */ TR({
  __name: "App",
  setup(t) {
    return (o, r) => (gR(), UR(vR));
  }
});
var Ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function NR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var qp = { exports: {} }, Zc = { exports: {} }, Kp = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, yR = Kp, bc = Object.prototype.toString, Jc = function(t) {
  return function(o) {
    var r = bc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function tr(t) {
  return t = t.toLowerCase(), function(r) {
    return Jc(r) === t;
  };
}
function Ec(t) {
  return Array.isArray(t);
}
function ka(t) {
  return typeof t > "u";
}
function MR(t) {
  return t !== null && !ka(t) && t.constructor !== null && !ka(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var em = tr("ArrayBuffer");
function kR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && em(t.buffer), o;
}
function ZR(t) {
  return typeof t == "string";
}
function bR(t) {
  return typeof t == "number";
}
function tm(t) {
  return t !== null && typeof t == "object";
}
function va(t) {
  if (Jc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var JR = tr("Date"), ER = tr("File"), SR = tr("Blob"), FR = tr("FileList");
function Sc(t) {
  return bc.call(t) === "[object Function]";
}
function AR(t) {
  return tm(t) && Sc(t.pipe);
}
function WR(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || bc.call(t) === o || Sc(t.toString) && t.toString() === o);
}
var CR = tr("URLSearchParams");
function xR(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function BR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Fc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Ec(t))
      for (var r = 0, s = t.length; r < s; r++)
        o.call(null, t[r], r, t);
    else
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && o.call(null, t[a], a, t);
}
function fc() {
  var t = {};
  function o(a, u) {
    va(t[u]) && va(a) ? t[u] = fc(t[u], a) : va(a) ? t[u] = fc({}, a) : Ec(a) ? t[u] = a.slice() : t[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Fc(arguments[r], o);
  return t;
}
function IR(t, o, r) {
  return Fc(o, function(a, u) {
    r && typeof a == "function" ? t[u] = yR(a, r) : t[u] = a;
  }), t;
}
function DR(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function OR(t, o, r, s) {
  t.prototype = Object.create(o.prototype, s), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function QR(t, o, r) {
  var s, a, u, d = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      u = s[a], d[u] || (o[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function zR(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var s = t.indexOf(o, r);
  return s !== -1 && s === r;
}
function GR(t) {
  if (!t)
    return null;
  var o = t.length;
  if (ka(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var YR = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Be = {
  isArray: Ec,
  isArrayBuffer: em,
  isBuffer: MR,
  isFormData: WR,
  isArrayBufferView: kR,
  isString: ZR,
  isNumber: bR,
  isObject: tm,
  isPlainObject: va,
  isUndefined: ka,
  isDate: JR,
  isFile: ER,
  isBlob: SR,
  isFunction: Sc,
  isStream: AR,
  isURLSearchParams: CR,
  isStandardBrowserEnv: BR,
  forEach: Fc,
  merge: fc,
  extend: IR,
  trim: xR,
  stripBOM: DR,
  inherits: OR,
  toFlatObject: QR,
  kindOf: Jc,
  kindOfTest: tr,
  endsWith: zR,
  toArray: GR,
  isTypedArray: YR,
  isFileList: FR
}, gr = Be;
function Sf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var nm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (gr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    gr.forEach(r, function(w, U) {
      w === null || typeof w > "u" || (gr.isArray(w) ? U = U + "[]" : w = [w], gr.forEach(w, function(R) {
        gr.isDate(R) ? R = R.toISOString() : gr.isObject(R) && (R = JSON.stringify(R)), u.push(Sf(U) + "=" + Sf(R));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, _R = Be;
function Ia() {
  this.handlers = [];
}
Ia.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Ia.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ia.prototype.forEach = function(o) {
  _R.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var HR = Ia, PR = Be, jR = function(o, r) {
  PR.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, rm = Be;
function Qr(t, o, r, s, a) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
rm.inherits(Qr, Error, {
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
var om = Qr.prototype, im = {};
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
  im[t] = { value: t };
});
Object.defineProperties(Qr, im);
Object.defineProperty(om, "isAxiosError", { value: !0 });
Qr.from = function(t, o, r, s, a, u) {
  var d = Object.create(om);
  return rm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), Qr.call(d, t.message, o, r, s, a), d.name = t.name, u && Object.assign(d, u), d;
};
var Pr = Qr, am = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ft = Be;
function XR(t, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : Ft.isDate(u) ? u.toISOString() : Ft.isArrayBuffer(u) || Ft.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, d) {
    if (Ft.isPlainObject(u) || Ft.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(u), Ft.forEach(u, function(w, U) {
        if (!Ft.isUndefined(w)) {
          var T = d ? d + "." + U : U, R;
          if (w && !d && typeof w == "object") {
            if (Ft.endsWith(U, "{}"))
              w = JSON.stringify(w);
            else if (Ft.endsWith(U, "[]") && (R = Ft.toArray(w))) {
              R.forEach(function(y) {
                !Ft.isUndefined(y) && o.append(T, s(y));
              });
              return;
            }
          }
          a(w, T);
        }
      }), r.pop();
    } else
      o.append(d, s(u));
  }
  return a(t), o;
}
var sm = XR, Ul, Ff;
function LR() {
  if (Ff)
    return Ul;
  Ff = 1;
  var t = Pr;
  return Ul = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new t(
      "Request failed with status code " + a.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ul;
}
var Rl, Af;
function $R() {
  if (Af)
    return Rl;
  Af = 1;
  var t = Be;
  return Rl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, d, f, w) {
        var U = [];
        U.push(s + "=" + encodeURIComponent(a)), t.isNumber(u) && U.push("expires=" + new Date(u).toGMTString()), t.isString(d) && U.push("path=" + d), t.isString(f) && U.push("domain=" + f), w === !0 && U.push("secure"), document.cookie = U.join("; ");
      },
      read: function(s) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
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
  }(), Rl;
}
var qR = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, KR = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, eN = qR, tN = KR, lm = function(o, r) {
  return o && !eN(r) ? tN(o, r) : r;
}, Nl, Wf;
function nN() {
  if (Wf)
    return Nl;
  Wf = 1;
  var t = Be, o = [
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
  return Nl = function(s) {
    var a = {}, u, d, f;
    return s && t.forEach(s.split(`
`), function(U) {
      if (f = U.indexOf(":"), u = t.trim(U.substr(0, f)).toLowerCase(), d = t.trim(U.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([d]) : a[u] = a[u] ? a[u] + ", " + d : d;
      }
    }), a;
  }, Nl;
}
var yl, Cf;
function rN() {
  if (Cf)
    return yl;
  Cf = 1;
  var t = Be;
  return yl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function u(d) {
      var f = d;
      return r && (s.setAttribute("href", f), f = s.href), s.setAttribute("href", f), {
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
    return a = u(window.location.href), function(f) {
      var w = t.isString(f) ? u(f) : f;
      return w.protocol === a.protocol && w.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), yl;
}
var Ml, xf;
function Da() {
  if (xf)
    return Ml;
  xf = 1;
  var t = Pr, o = Be;
  function r(s) {
    t.call(this, s == null ? "canceled" : s, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), Ml = r, Ml;
}
var kl, Bf;
function oN() {
  return Bf || (Bf = 1, kl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), kl;
}
var Zl, If;
function Df() {
  if (If)
    return Zl;
  If = 1;
  var t = Be, o = LR(), r = $R(), s = nm, a = lm, u = nN(), d = rN(), f = am, w = Pr, U = Da(), T = oN();
  return Zl = function(y) {
    return new Promise(function(F, W) {
      var B = y.data, A = y.headers, S = y.responseType, E;
      function D() {
        y.cancelToken && y.cancelToken.unsubscribe(E), y.signal && y.signal.removeEventListener("abort", E);
      }
      t.isFormData(B) && t.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var Y = y.auth.username || "", $ = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        A.Authorization = "Basic " + btoa(Y + ":" + $);
      }
      var q = a(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), s(q, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function De() {
        if (!!k) {
          var Ve = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, Te = !S || S === "text" || S === "json" ? k.responseText : k.response, Ne = {
            data: Te,
            status: k.status,
            statusText: k.statusText,
            headers: Ve,
            config: y,
            request: k
          };
          o(function(Fe) {
            F(Fe), D();
          }, function(Fe) {
            W(Fe), D();
          }, Ne), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = De : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(De);
      }, k.onabort = function() {
        !k || (W(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        W(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var Te = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ne = y.transitional || f;
        y.timeoutErrorMessage && (Te = y.timeoutErrorMessage), W(new w(
          Te,
          Ne.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, t.isStandardBrowserEnv()) {
        var Le = (y.withCredentials || d(q)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        Le && (A[y.xsrfHeaderName] = Le);
      }
      "setRequestHeader" in k && t.forEach(A, function(Te, Ne) {
        typeof B > "u" && Ne.toLowerCase() === "content-type" ? delete A[Ne] : k.setRequestHeader(Ne, Te);
      }), t.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), S && S !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (E = function(Ve) {
        !k || (W(!Ve || Ve && Ve.type ? new U() : Ve), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(E), y.signal && (y.signal.aborted ? E() : y.signal.addEventListener("abort", E))), B || (B = null);
      var we = T(q);
      if (we && ["http", "https", "file"].indexOf(we) === -1) {
        W(new w("Unsupported protocol " + we + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(B);
    });
  }, Zl;
}
var bl, Of;
function iN() {
  return Of || (Of = 1, bl = null), bl;
}
var Ee = Be, Qf = jR, zf = Pr, aN = am, sN = sm, lN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Gf(t, o) {
  !Ee.isUndefined(t) && Ee.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function cN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Df()), t;
}
function uN(t, o, r) {
  if (Ee.isString(t))
    try {
      return (o || JSON.parse)(t), Ee.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(t);
}
var Oa = {
  transitional: aN,
  adapter: cN(),
  transformRequest: [function(o, r) {
    if (Qf(r, "Accept"), Qf(r, "Content-Type"), Ee.isFormData(o) || Ee.isArrayBuffer(o) || Ee.isBuffer(o) || Ee.isStream(o) || Ee.isFile(o) || Ee.isBlob(o))
      return o;
    if (Ee.isArrayBufferView(o))
      return o.buffer;
    if (Ee.isURLSearchParams(o))
      return Gf(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Ee.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Ee.isFileList(o)) || s && a === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return sN(u ? { "files[]": o } : o, d && new d());
    } else if (s || a === "application/json")
      return Gf(r, "application/json"), uN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Oa.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ee.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (u)
          throw d.name === "SyntaxError" ? zf.from(d, zf.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: iN()
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
Ee.forEach(["delete", "get", "head"], function(o) {
  Oa.headers[o] = {};
});
Ee.forEach(["post", "put", "patch"], function(o) {
  Oa.headers[o] = Ee.merge(lN);
});
var Ac = Oa, dN = Be, fN = Ac, hN = function(o, r, s) {
  var a = this || fN;
  return dN.forEach(s, function(d) {
    o = d.call(a, o, r);
  }), o;
}, Jl, Yf;
function cm() {
  return Yf || (Yf = 1, Jl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Jl;
}
var _f = Be, El = hN, pN = cm(), mN = Ac, wN = Da();
function Sl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new wN();
}
var VN = function(o) {
  Sl(o), o.headers = o.headers || {}, o.data = El.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = _f.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), _f.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || mN.adapter;
  return r(o).then(function(a) {
    return Sl(o), a.data = El.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return pN(a) || (Sl(o), a && a.response && (a.response.data = El.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, ut = Be, um = function(o, r) {
  r = r || {};
  var s = {};
  function a(T, R) {
    return ut.isPlainObject(T) && ut.isPlainObject(R) ? ut.merge(T, R) : ut.isPlainObject(R) ? ut.merge({}, R) : ut.isArray(R) ? R.slice() : R;
  }
  function u(T) {
    if (ut.isUndefined(r[T])) {
      if (!ut.isUndefined(o[T]))
        return a(void 0, o[T]);
    } else
      return a(o[T], r[T]);
  }
  function d(T) {
    if (!ut.isUndefined(r[T]))
      return a(void 0, r[T]);
  }
  function f(T) {
    if (ut.isUndefined(r[T])) {
      if (!ut.isUndefined(o[T]))
        return a(void 0, o[T]);
    } else
      return a(void 0, r[T]);
  }
  function w(T) {
    if (T in r)
      return a(o[T], r[T]);
    if (T in o)
      return a(void 0, o[T]);
  }
  var U = {
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
    validateStatus: w
  };
  return ut.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var y = U[R] || u, x = y(R);
    ut.isUndefined(x) && y !== w || (s[R] = x);
  }), s;
}, Fl, Hf;
function dm() {
  return Hf || (Hf = 1, Fl = {
    version: "0.27.2"
  }), Fl;
}
var vN = dm().version, Rn = Pr, Wc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Wc[t] = function(s) {
    return typeof s === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var Pf = {};
Wc.transitional = function(o, r, s) {
  function a(u, d) {
    return "[Axios v" + vN + "] Transitional option '" + u + "'" + d + (s ? ". " + s : "");
  }
  return function(u, d, f) {
    if (o === !1)
      throw new Rn(
        a(d, " has been removed" + (r ? " in " + r : "")),
        Rn.ERR_DEPRECATED
      );
    return r && !Pf[d] && (Pf[d] = !0, console.warn(
      a(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, d, f) : !0;
  };
};
function TN(t, o, r) {
  if (typeof t != "object")
    throw new Rn("options must be an object", Rn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(t), a = s.length; a-- > 0; ) {
    var u = s[a], d = o[u];
    if (d) {
      var f = t[u], w = f === void 0 || d(f, u, t);
      if (w !== !0)
        throw new Rn("option " + u + " must be " + w, Rn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Rn("Unknown option " + u, Rn.ERR_BAD_OPTION);
  }
}
var gN = {
  assertOptions: TN,
  validators: Wc
}, fm = Be, UN = nm, jf = HR, Xf = VN, Qa = um, RN = lm, hm = gN, Ur = hm.validators;
function zr(t) {
  this.defaults = t, this.interceptors = {
    request: new jf(),
    response: new jf()
  };
}
zr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Qa(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && hm.assertOptions(s, {
    silentJSONParsing: Ur.transitional(Ur.boolean),
    forcedJSONParsing: Ur.transitional(Ur.boolean),
    clarifyTimeoutError: Ur.transitional(Ur.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(x) {
    typeof x.runWhen == "function" && x.runWhen(r) === !1 || (u = u && x.synchronous, a.unshift(x.fulfilled, x.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(x) {
    d.push(x.fulfilled, x.rejected);
  });
  var f;
  if (!u) {
    var w = [Xf, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(d), f = Promise.resolve(r); w.length; )
      f = f.then(w.shift(), w.shift());
    return f;
  }
  for (var U = r; a.length; ) {
    var T = a.shift(), R = a.shift();
    try {
      U = T(U);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    f = Xf(U);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
zr.prototype.getUri = function(o) {
  o = Qa(this.defaults, o);
  var r = RN(o.baseURL, o.url);
  return UN(r, o.params, o.paramsSerializer);
};
fm.forEach(["delete", "get", "head", "options"], function(o) {
  zr.prototype[o] = function(r, s) {
    return this.request(Qa(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
fm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, d, f) {
      return this.request(Qa(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  zr.prototype[o] = r(), zr.prototype[o + "Form"] = r(!0);
});
var NN = zr, Al, Lf;
function yN() {
  if (Lf)
    return Al;
  Lf = 1;
  var t = Da();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(d) {
      s = d;
    });
    var a = this;
    this.promise.then(function(u) {
      if (!!a._listeners) {
        var d, f = a._listeners.length;
        for (d = 0; d < f; d++)
          a._listeners[d](u);
        a._listeners = null;
      }
    }), this.promise.then = function(u) {
      var d, f = new Promise(function(w) {
        a.subscribe(w), d = w;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(d);
      }, f;
    }, r(function(d) {
      a.reason || (a.reason = new t(d), s(a.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, o.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(s);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, o.source = function() {
    var s, a = new o(function(d) {
      s = d;
    });
    return {
      token: a,
      cancel: s
    };
  }, Al = o, Al;
}
var Wl, $f;
function MN() {
  return $f || ($f = 1, Wl = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Wl;
}
var Cl, qf;
function kN() {
  if (qf)
    return Cl;
  qf = 1;
  var t = Be;
  return Cl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Cl;
}
var Kf = Be, ZN = Kp, Ta = NN, bN = um, JN = Ac;
function pm(t) {
  var o = new Ta(t), r = ZN(Ta.prototype.request, o);
  return Kf.extend(r, Ta.prototype, o), Kf.extend(r, o), r.create = function(a) {
    return pm(bN(t, a));
  }, r;
}
var rt = pm(JN);
rt.Axios = Ta;
rt.CanceledError = Da();
rt.CancelToken = yN();
rt.isCancel = cm();
rt.VERSION = dm().version;
rt.toFormData = sm;
rt.AxiosError = Pr;
rt.Cancel = rt.CanceledError;
rt.all = function(o) {
  return Promise.all(o);
};
rt.spread = MN();
rt.isAxiosError = kN();
Zc.exports = rt;
Zc.exports.default = rt;
(function(t) {
  t.exports = Zc.exports;
})(qp);
const mm = /* @__PURE__ */ NR(qp.exports), bn = mm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Jn = mm.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", U = 500, T = "__lodash_placeholder__", R = 1, y = 2, x = 4, F = 1, W = 2, B = 1, A = 2, S = 4, E = 8, D = 16, k = 32, Y = 64, $ = 128, q = 256, De = 512, Le = 30, we = "...", Ve = 800, Te = 16, Ne = 1, ce = 2, Fe = 3, Ae = 1 / 0, _e = 9007199254740991, qr = 17976931348623157e292, ai = 0 / 0, It = 4294967295, Nw = It - 1, yw = It >>> 1, Mw = [
      ["ary", $],
      ["bind", B],
      ["bindKey", A],
      ["curry", E],
      ["curryRight", D],
      ["flip", De],
      ["partial", k],
      ["partialRight", Y],
      ["rearg", q]
    ], or = "[object Arguments]", si = "[object Array]", kw = "[object AsyncFunction]", Kr = "[object Boolean]", eo = "[object Date]", Zw = "[object DOMException]", li = "[object Error]", ci = "[object Function]", Kc = "[object GeneratorFunction]", kt = "[object Map]", to = "[object Number]", bw = "[object Null]", _t = "[object Object]", eu = "[object Promise]", Jw = "[object Proxy]", no = "[object RegExp]", Zt = "[object Set]", ro = "[object String]", ui = "[object Symbol]", Ew = "[object Undefined]", oo = "[object WeakMap]", Sw = "[object WeakSet]", io = "[object ArrayBuffer]", ir = "[object DataView]", es = "[object Float32Array]", ts = "[object Float64Array]", ns = "[object Int8Array]", rs = "[object Int16Array]", os = "[object Int32Array]", is = "[object Uint8Array]", as = "[object Uint8ClampedArray]", ss = "[object Uint16Array]", ls = "[object Uint32Array]", Fw = /\b__p \+= '';/g, Aw = /\b(__p \+=) '' \+/g, Ww = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tu = /&(?:amp|lt|gt|quot|#39);/g, nu = /[&<>"']/g, Cw = RegExp(tu.source), xw = RegExp(nu.source), Bw = /<%-([\s\S]+?)%>/g, Iw = /<%([\s\S]+?)%>/g, ru = /<%=([\s\S]+?)%>/g, Dw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ow = /^\w*$/, Qw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cs = /[\\^$.*+?()[\]{}|]/g, zw = RegExp(cs.source), us = /^\s+/, Gw = /\s/, Yw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _w = /\{\n\/\* \[wrapped with (.+)\] \*/, Hw = /,? & /, Pw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, jw = /[()=,{}\[\]\/\s]/, Xw = /\\(\\)?/g, Lw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ou = /\w*$/, $w = /^[-+]0x[0-9a-f]+$/i, qw = /^0b[01]+$/i, Kw = /^\[object .+?Constructor\]$/, e1 = /^0o[0-7]+$/i, t1 = /^(?:0|[1-9]\d*)$/, n1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, di = /($^)/, r1 = /['\n\r\u2028\u2029\\]/g, fi = "\\ud800-\\udfff", o1 = "\\u0300-\\u036f", i1 = "\\ufe20-\\ufe2f", a1 = "\\u20d0-\\u20ff", iu = o1 + i1 + a1, au = "\\u2700-\\u27bf", su = "a-z\\xdf-\\xf6\\xf8-\\xff", s1 = "\\xac\\xb1\\xd7\\xf7", l1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", c1 = "\\u2000-\\u206f", u1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lu = "A-Z\\xc0-\\xd6\\xd8-\\xde", cu = "\\ufe0e\\ufe0f", uu = s1 + l1 + c1 + u1, ds = "['\u2019]", d1 = "[" + fi + "]", du = "[" + uu + "]", hi = "[" + iu + "]", fu = "\\d+", f1 = "[" + au + "]", hu = "[" + su + "]", pu = "[^" + fi + uu + fu + au + su + lu + "]", fs = "\\ud83c[\\udffb-\\udfff]", h1 = "(?:" + hi + "|" + fs + ")", mu = "[^" + fi + "]", hs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ps = "[\\ud800-\\udbff][\\udc00-\\udfff]", ar = "[" + lu + "]", wu = "\\u200d", Vu = "(?:" + hu + "|" + pu + ")", p1 = "(?:" + ar + "|" + pu + ")", vu = "(?:" + ds + "(?:d|ll|m|re|s|t|ve))?", Tu = "(?:" + ds + "(?:D|LL|M|RE|S|T|VE))?", gu = h1 + "?", Uu = "[" + cu + "]?", m1 = "(?:" + wu + "(?:" + [mu, hs, ps].join("|") + ")" + Uu + gu + ")*", w1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", V1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ru = Uu + gu + m1, v1 = "(?:" + [f1, hs, ps].join("|") + ")" + Ru, T1 = "(?:" + [mu + hi + "?", hi, hs, ps, d1].join("|") + ")", g1 = RegExp(ds, "g"), U1 = RegExp(hi, "g"), ms = RegExp(fs + "(?=" + fs + ")|" + T1 + Ru, "g"), R1 = RegExp([
      ar + "?" + hu + "+" + vu + "(?=" + [du, ar, "$"].join("|") + ")",
      p1 + "+" + Tu + "(?=" + [du, ar + Vu, "$"].join("|") + ")",
      ar + "?" + Vu + "+" + vu,
      ar + "+" + Tu,
      V1,
      w1,
      fu,
      v1
    ].join("|"), "g"), N1 = RegExp("[" + wu + fi + iu + cu + "]"), y1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, M1 = [
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
    ], k1 = -1, fe = {};
    fe[es] = fe[ts] = fe[ns] = fe[rs] = fe[os] = fe[is] = fe[as] = fe[ss] = fe[ls] = !0, fe[or] = fe[si] = fe[io] = fe[Kr] = fe[ir] = fe[eo] = fe[li] = fe[ci] = fe[kt] = fe[to] = fe[_t] = fe[no] = fe[Zt] = fe[ro] = fe[oo] = !1;
    var de = {};
    de[or] = de[si] = de[io] = de[ir] = de[Kr] = de[eo] = de[es] = de[ts] = de[ns] = de[rs] = de[os] = de[kt] = de[to] = de[_t] = de[no] = de[Zt] = de[ro] = de[ui] = de[is] = de[as] = de[ss] = de[ls] = !0, de[li] = de[ci] = de[oo] = !1;
    var Z1 = {
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
    }, b1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, J1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, E1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, S1 = parseFloat, F1 = parseInt, Nu = typeof Ro == "object" && Ro && Ro.Object === Object && Ro, A1 = typeof self == "object" && self && self.Object === Object && self, We = Nu || A1 || Function("return this")(), ws = o && !o.nodeType && o, Fn = ws && !0 && t && !t.nodeType && t, yu = Fn && Fn.exports === ws, Vs = yu && Nu.process, mt = function() {
      try {
        var v = Fn && Fn.require && Fn.require("util").types;
        return v || Vs && Vs.binding && Vs.binding("util");
      } catch {
      }
    }(), Mu = mt && mt.isArrayBuffer, ku = mt && mt.isDate, Zu = mt && mt.isMap, bu = mt && mt.isRegExp, Ju = mt && mt.isSet, Eu = mt && mt.isTypedArray;
    function ot(v, M, N) {
      switch (N.length) {
        case 0:
          return v.call(M);
        case 1:
          return v.call(M, N[0]);
        case 2:
          return v.call(M, N[0], N[1]);
        case 3:
          return v.call(M, N[0], N[1], N[2]);
      }
      return v.apply(M, N);
    }
    function W1(v, M, N, I) {
      for (var _ = -1, ne = v == null ? 0 : v.length; ++_ < ne; ) {
        var Me = v[_];
        M(I, Me, N(Me), v);
      }
      return I;
    }
    function wt(v, M) {
      for (var N = -1, I = v == null ? 0 : v.length; ++N < I && M(v[N], N, v) !== !1; )
        ;
      return v;
    }
    function C1(v, M) {
      for (var N = v == null ? 0 : v.length; N-- && M(v[N], N, v) !== !1; )
        ;
      return v;
    }
    function Su(v, M) {
      for (var N = -1, I = v == null ? 0 : v.length; ++N < I; )
        if (!M(v[N], N, v))
          return !1;
      return !0;
    }
    function cn(v, M) {
      for (var N = -1, I = v == null ? 0 : v.length, _ = 0, ne = []; ++N < I; ) {
        var Me = v[N];
        M(Me, N, v) && (ne[_++] = Me);
      }
      return ne;
    }
    function pi(v, M) {
      var N = v == null ? 0 : v.length;
      return !!N && sr(v, M, 0) > -1;
    }
    function vs(v, M, N) {
      for (var I = -1, _ = v == null ? 0 : v.length; ++I < _; )
        if (N(M, v[I]))
          return !0;
      return !1;
    }
    function he(v, M) {
      for (var N = -1, I = v == null ? 0 : v.length, _ = Array(I); ++N < I; )
        _[N] = M(v[N], N, v);
      return _;
    }
    function un(v, M) {
      for (var N = -1, I = M.length, _ = v.length; ++N < I; )
        v[_ + N] = M[N];
      return v;
    }
    function Ts(v, M, N, I) {
      var _ = -1, ne = v == null ? 0 : v.length;
      for (I && ne && (N = v[++_]); ++_ < ne; )
        N = M(N, v[_], _, v);
      return N;
    }
    function x1(v, M, N, I) {
      var _ = v == null ? 0 : v.length;
      for (I && _ && (N = v[--_]); _--; )
        N = M(N, v[_], _, v);
      return N;
    }
    function gs(v, M) {
      for (var N = -1, I = v == null ? 0 : v.length; ++N < I; )
        if (M(v[N], N, v))
          return !0;
      return !1;
    }
    var B1 = Us("length");
    function I1(v) {
      return v.split("");
    }
    function D1(v) {
      return v.match(Pw) || [];
    }
    function Fu(v, M, N) {
      var I;
      return N(v, function(_, ne, Me) {
        if (M(_, ne, Me))
          return I = ne, !1;
      }), I;
    }
    function mi(v, M, N, I) {
      for (var _ = v.length, ne = N + (I ? 1 : -1); I ? ne-- : ++ne < _; )
        if (M(v[ne], ne, v))
          return ne;
      return -1;
    }
    function sr(v, M, N) {
      return M === M ? $1(v, M, N) : mi(v, Au, N);
    }
    function O1(v, M, N, I) {
      for (var _ = N - 1, ne = v.length; ++_ < ne; )
        if (I(v[_], M))
          return _;
      return -1;
    }
    function Au(v) {
      return v !== v;
    }
    function Wu(v, M) {
      var N = v == null ? 0 : v.length;
      return N ? Ns(v, M) / N : ai;
    }
    function Us(v) {
      return function(M) {
        return M == null ? r : M[v];
      };
    }
    function Rs(v) {
      return function(M) {
        return v == null ? r : v[M];
      };
    }
    function Cu(v, M, N, I, _) {
      return _(v, function(ne, Me, ue) {
        N = I ? (I = !1, ne) : M(N, ne, Me, ue);
      }), N;
    }
    function Q1(v, M) {
      var N = v.length;
      for (v.sort(M); N--; )
        v[N] = v[N].value;
      return v;
    }
    function Ns(v, M) {
      for (var N, I = -1, _ = v.length; ++I < _; ) {
        var ne = M(v[I]);
        ne !== r && (N = N === r ? ne : N + ne);
      }
      return N;
    }
    function ys(v, M) {
      for (var N = -1, I = Array(v); ++N < v; )
        I[N] = M(N);
      return I;
    }
    function z1(v, M) {
      return he(M, function(N) {
        return [N, v[N]];
      });
    }
    function xu(v) {
      return v && v.slice(0, Ou(v) + 1).replace(us, "");
    }
    function it(v) {
      return function(M) {
        return v(M);
      };
    }
    function Ms(v, M) {
      return he(M, function(N) {
        return v[N];
      });
    }
    function ao(v, M) {
      return v.has(M);
    }
    function Bu(v, M) {
      for (var N = -1, I = v.length; ++N < I && sr(M, v[N], 0) > -1; )
        ;
      return N;
    }
    function Iu(v, M) {
      for (var N = v.length; N-- && sr(M, v[N], 0) > -1; )
        ;
      return N;
    }
    function G1(v, M) {
      for (var N = v.length, I = 0; N--; )
        v[N] === M && ++I;
      return I;
    }
    var Y1 = Rs(Z1), _1 = Rs(b1);
    function H1(v) {
      return "\\" + E1[v];
    }
    function P1(v, M) {
      return v == null ? r : v[M];
    }
    function lr(v) {
      return N1.test(v);
    }
    function j1(v) {
      return y1.test(v);
    }
    function X1(v) {
      for (var M, N = []; !(M = v.next()).done; )
        N.push(M.value);
      return N;
    }
    function ks(v) {
      var M = -1, N = Array(v.size);
      return v.forEach(function(I, _) {
        N[++M] = [_, I];
      }), N;
    }
    function Du(v, M) {
      return function(N) {
        return v(M(N));
      };
    }
    function dn(v, M) {
      for (var N = -1, I = v.length, _ = 0, ne = []; ++N < I; ) {
        var Me = v[N];
        (Me === M || Me === T) && (v[N] = T, ne[_++] = N);
      }
      return ne;
    }
    function wi(v) {
      var M = -1, N = Array(v.size);
      return v.forEach(function(I) {
        N[++M] = I;
      }), N;
    }
    function L1(v) {
      var M = -1, N = Array(v.size);
      return v.forEach(function(I) {
        N[++M] = [I, I];
      }), N;
    }
    function $1(v, M, N) {
      for (var I = N - 1, _ = v.length; ++I < _; )
        if (v[I] === M)
          return I;
      return -1;
    }
    function q1(v, M, N) {
      for (var I = N + 1; I--; )
        if (v[I] === M)
          return I;
      return I;
    }
    function cr(v) {
      return lr(v) ? eV(v) : B1(v);
    }
    function bt(v) {
      return lr(v) ? tV(v) : I1(v);
    }
    function Ou(v) {
      for (var M = v.length; M-- && Gw.test(v.charAt(M)); )
        ;
      return M;
    }
    var K1 = Rs(J1);
    function eV(v) {
      for (var M = ms.lastIndex = 0; ms.test(v); )
        ++M;
      return M;
    }
    function tV(v) {
      return v.match(ms) || [];
    }
    function nV(v) {
      return v.match(R1) || [];
    }
    var rV = function v(M) {
      M = M == null ? We : ur.defaults(We.Object(), M, ur.pick(We, M1));
      var N = M.Array, I = M.Date, _ = M.Error, ne = M.Function, Me = M.Math, ue = M.Object, Zs = M.RegExp, oV = M.String, Vt = M.TypeError, Vi = N.prototype, iV = ne.prototype, dr = ue.prototype, vi = M["__core-js_shared__"], Ti = iV.toString, ie = dr.hasOwnProperty, aV = 0, Qu = function() {
        var e = /[^.]+$/.exec(vi && vi.keys && vi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), gi = dr.toString, sV = Ti.call(ue), lV = We._, cV = Zs(
        "^" + Ti.call(ie).replace(cs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ui = yu ? M.Buffer : r, fn = M.Symbol, Ri = M.Uint8Array, zu = Ui ? Ui.allocUnsafe : r, Ni = Du(ue.getPrototypeOf, ue), Gu = ue.create, Yu = dr.propertyIsEnumerable, yi = Vi.splice, _u = fn ? fn.isConcatSpreadable : r, so = fn ? fn.iterator : r, An = fn ? fn.toStringTag : r, Mi = function() {
        try {
          var e = In(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), uV = M.clearTimeout !== We.clearTimeout && M.clearTimeout, dV = I && I.now !== We.Date.now && I.now, fV = M.setTimeout !== We.setTimeout && M.setTimeout, ki = Me.ceil, Zi = Me.floor, bs = ue.getOwnPropertySymbols, hV = Ui ? Ui.isBuffer : r, Hu = M.isFinite, pV = Vi.join, mV = Du(ue.keys, ue), ke = Me.max, Oe = Me.min, wV = I.now, VV = M.parseInt, Pu = Me.random, vV = Vi.reverse, Js = In(M, "DataView"), lo = In(M, "Map"), Es = In(M, "Promise"), fr = In(M, "Set"), co = In(M, "WeakMap"), uo = In(ue, "create"), bi = co && new co(), hr = {}, TV = Dn(Js), gV = Dn(lo), UV = Dn(Es), RV = Dn(fr), NV = Dn(co), Ji = fn ? fn.prototype : r, fo = Ji ? Ji.valueOf : r, ju = Ji ? Ji.toString : r;
      function h(e) {
        if (ve(e) && !H(e) && !(e instanceof ee)) {
          if (e instanceof vt)
            return e;
          if (ie.call(e, "__wrapped__"))
            return Xd(e);
        }
        return new vt(e);
      }
      var pr = function() {
        function e() {
        }
        return function(n) {
          if (!pe(n))
            return {};
          if (Gu)
            return Gu(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function Ei() {
      }
      function vt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Bw,
        evaluate: Iw,
        interpolate: ru,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Ei.prototype, h.prototype.constructor = h, vt.prototype = pr(Ei.prototype), vt.prototype.constructor = vt;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = It, this.__views__ = [];
      }
      function yV() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function MV() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function kV() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = H(e), l = n < 0, c = i ? e.length : 0, p = Iv(0, c, this.__views__), m = p.start, V = p.end, g = V - m, Z = l ? V : m - 1, b = this.__iteratees__, J = b.length, C = 0, O = Oe(g, this.__takeCount__);
        if (!i || !l && c == g && O == g)
          return vd(e, this.__actions__);
        var z = [];
        e:
          for (; g-- && C < O; ) {
            Z += n;
            for (var j = -1, G = e[Z]; ++j < J; ) {
              var K = b[j], te = K.iteratee, lt = K.type, je = te(G);
              if (lt == ce)
                G = je;
              else if (!je) {
                if (lt == Ne)
                  continue e;
                break e;
              }
            }
            z[C++] = G;
          }
        return z;
      }
      ee.prototype = pr(Ei.prototype), ee.prototype.constructor = ee;
      function Wn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function ZV() {
        this.__data__ = uo ? uo(null) : {}, this.size = 0;
      }
      function bV(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function JV(e) {
        var n = this.__data__;
        if (uo) {
          var i = n[e];
          return i === w ? r : i;
        }
        return ie.call(n, e) ? n[e] : r;
      }
      function EV(e) {
        var n = this.__data__;
        return uo ? n[e] !== r : ie.call(n, e);
      }
      function SV(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = uo && n === r ? w : n, this;
      }
      Wn.prototype.clear = ZV, Wn.prototype.delete = bV, Wn.prototype.get = JV, Wn.prototype.has = EV, Wn.prototype.set = SV;
      function Ht(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function FV() {
        this.__data__ = [], this.size = 0;
      }
      function AV(e) {
        var n = this.__data__, i = Si(n, e);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : yi.call(n, i, 1), --this.size, !0;
      }
      function WV(e) {
        var n = this.__data__, i = Si(n, e);
        return i < 0 ? r : n[i][1];
      }
      function CV(e) {
        return Si(this.__data__, e) > -1;
      }
      function xV(e, n) {
        var i = this.__data__, l = Si(i, e);
        return l < 0 ? (++this.size, i.push([e, n])) : i[l][1] = n, this;
      }
      Ht.prototype.clear = FV, Ht.prototype.delete = AV, Ht.prototype.get = WV, Ht.prototype.has = CV, Ht.prototype.set = xV;
      function Pt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function BV() {
        this.size = 0, this.__data__ = {
          hash: new Wn(),
          map: new (lo || Ht)(),
          string: new Wn()
        };
      }
      function IV(e) {
        var n = Gi(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function DV(e) {
        return Gi(this, e).get(e);
      }
      function OV(e) {
        return Gi(this, e).has(e);
      }
      function QV(e, n) {
        var i = Gi(this, e), l = i.size;
        return i.set(e, n), this.size += i.size == l ? 0 : 1, this;
      }
      Pt.prototype.clear = BV, Pt.prototype.delete = IV, Pt.prototype.get = DV, Pt.prototype.has = OV, Pt.prototype.set = QV;
      function Cn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Pt(); ++n < i; )
          this.add(e[n]);
      }
      function zV(e) {
        return this.__data__.set(e, w), this;
      }
      function GV(e) {
        return this.__data__.has(e);
      }
      Cn.prototype.add = Cn.prototype.push = zV, Cn.prototype.has = GV;
      function Jt(e) {
        var n = this.__data__ = new Ht(e);
        this.size = n.size;
      }
      function YV() {
        this.__data__ = new Ht(), this.size = 0;
      }
      function _V(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function HV(e) {
        return this.__data__.get(e);
      }
      function PV(e) {
        return this.__data__.has(e);
      }
      function jV(e, n) {
        var i = this.__data__;
        if (i instanceof Ht) {
          var l = i.__data__;
          if (!lo || l.length < a - 1)
            return l.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new Pt(l);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Jt.prototype.clear = YV, Jt.prototype.delete = _V, Jt.prototype.get = HV, Jt.prototype.has = PV, Jt.prototype.set = jV;
      function Xu(e, n) {
        var i = H(e), l = !i && On(e), c = !i && !l && Vn(e), p = !i && !l && !c && vr(e), m = i || l || c || p, V = m ? ys(e.length, oV) : [], g = V.length;
        for (var Z in e)
          (n || ie.call(e, Z)) && !(m && (Z == "length" || c && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || $t(Z, g))) && V.push(Z);
        return V;
      }
      function Lu(e) {
        var n = e.length;
        return n ? e[Qs(0, n - 1)] : r;
      }
      function XV(e, n) {
        return Yi($e(e), xn(n, 0, e.length));
      }
      function LV(e) {
        return Yi($e(e));
      }
      function Ss(e, n, i) {
        (i !== r && !Et(e[n], i) || i === r && !(n in e)) && jt(e, n, i);
      }
      function ho(e, n, i) {
        var l = e[n];
        (!(ie.call(e, n) && Et(l, i)) || i === r && !(n in e)) && jt(e, n, i);
      }
      function Si(e, n) {
        for (var i = e.length; i--; )
          if (Et(e[i][0], n))
            return i;
        return -1;
      }
      function $V(e, n, i, l) {
        return hn(e, function(c, p, m) {
          n(l, c, i(c), m);
        }), l;
      }
      function $u(e, n) {
        return e && Ot(n, Je(n), e);
      }
      function qV(e, n) {
        return e && Ot(n, Ke(n), e);
      }
      function jt(e, n, i) {
        n == "__proto__" && Mi ? Mi(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Fs(e, n) {
        for (var i = -1, l = n.length, c = N(l), p = e == null; ++i < l; )
          c[i] = p ? r : fl(e, n[i]);
        return c;
      }
      function xn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function Tt(e, n, i, l, c, p) {
        var m, V = n & R, g = n & y, Z = n & x;
        if (i && (m = c ? i(e, l, c, p) : i(e)), m !== r)
          return m;
        if (!pe(e))
          return e;
        var b = H(e);
        if (b) {
          if (m = Ov(e), !V)
            return $e(e, m);
        } else {
          var J = Qe(e), C = J == ci || J == Kc;
          if (Vn(e))
            return Ud(e, V);
          if (J == _t || J == or || C && !c) {
            if (m = g || C ? {} : Od(e), !V)
              return g ? Jv(e, qV(m, e)) : bv(e, $u(m, e));
          } else {
            if (!de[J])
              return c ? e : {};
            m = Qv(e, J, V);
          }
        }
        p || (p = new Jt());
        var O = p.get(e);
        if (O)
          return O;
        p.set(e, m), wf(e) ? e.forEach(function(G) {
          m.add(Tt(G, n, i, G, e, p));
        }) : pf(e) && e.forEach(function(G, K) {
          m.set(K, Tt(G, n, i, K, e, p));
        });
        var z = Z ? g ? qs : $s : g ? Ke : Je, j = b ? r : z(e);
        return wt(j || e, function(G, K) {
          j && (K = G, G = e[K]), ho(m, K, Tt(G, n, i, K, e, p));
        }), m;
      }
      function KV(e) {
        var n = Je(e);
        return function(i) {
          return qu(i, e, n);
        };
      }
      function qu(e, n, i) {
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
      function Ku(e, n, i) {
        if (typeof e != "function")
          throw new Vt(d);
        return go(function() {
          e.apply(r, i);
        }, n);
      }
      function po(e, n, i, l) {
        var c = -1, p = pi, m = !0, V = e.length, g = [], Z = n.length;
        if (!V)
          return g;
        i && (n = he(n, it(i))), l ? (p = vs, m = !1) : n.length >= a && (p = ao, m = !1, n = new Cn(n));
        e:
          for (; ++c < V; ) {
            var b = e[c], J = i == null ? b : i(b);
            if (b = l || b !== 0 ? b : 0, m && J === J) {
              for (var C = Z; C--; )
                if (n[C] === J)
                  continue e;
              g.push(b);
            } else
              p(n, J, l) || g.push(b);
          }
        return g;
      }
      var hn = kd(Dt), ed = kd(Ws, !0);
      function ev(e, n) {
        var i = !0;
        return hn(e, function(l, c, p) {
          return i = !!n(l, c, p), i;
        }), i;
      }
      function Fi(e, n, i) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var p = e[l], m = n(p);
          if (m != null && (V === r ? m === m && !st(m) : i(m, V)))
            var V = m, g = p;
        }
        return g;
      }
      function tv(e, n, i, l) {
        var c = e.length;
        for (i = P(i), i < 0 && (i = -i > c ? 0 : c + i), l = l === r || l > c ? c : P(l), l < 0 && (l += c), l = i > l ? 0 : vf(l); i < l; )
          e[i++] = n;
        return e;
      }
      function td(e, n) {
        var i = [];
        return hn(e, function(l, c, p) {
          n(l, c, p) && i.push(l);
        }), i;
      }
      function Ce(e, n, i, l, c) {
        var p = -1, m = e.length;
        for (i || (i = Gv), c || (c = []); ++p < m; ) {
          var V = e[p];
          n > 0 && i(V) ? n > 1 ? Ce(V, n - 1, i, l, c) : un(c, V) : l || (c[c.length] = V);
        }
        return c;
      }
      var As = Zd(), nd = Zd(!0);
      function Dt(e, n) {
        return e && As(e, n, Je);
      }
      function Ws(e, n) {
        return e && nd(e, n, Je);
      }
      function Ai(e, n) {
        return cn(n, function(i) {
          return qt(e[i]);
        });
      }
      function Bn(e, n) {
        n = mn(n, e);
        for (var i = 0, l = n.length; e != null && i < l; )
          e = e[Qt(n[i++])];
        return i && i == l ? e : r;
      }
      function rd(e, n, i) {
        var l = n(e);
        return H(e) ? l : un(l, i(e));
      }
      function He(e) {
        return e == null ? e === r ? Ew : bw : An && An in ue(e) ? Bv(e) : Lv(e);
      }
      function Cs(e, n) {
        return e > n;
      }
      function nv(e, n) {
        return e != null && ie.call(e, n);
      }
      function rv(e, n) {
        return e != null && n in ue(e);
      }
      function ov(e, n, i) {
        return e >= Oe(n, i) && e < ke(n, i);
      }
      function xs(e, n, i) {
        for (var l = i ? vs : pi, c = e[0].length, p = e.length, m = p, V = N(p), g = 1 / 0, Z = []; m--; ) {
          var b = e[m];
          m && n && (b = he(b, it(n))), g = Oe(b.length, g), V[m] = !i && (n || c >= 120 && b.length >= 120) ? new Cn(m && b) : r;
        }
        b = e[0];
        var J = -1, C = V[0];
        e:
          for (; ++J < c && Z.length < g; ) {
            var O = b[J], z = n ? n(O) : O;
            if (O = i || O !== 0 ? O : 0, !(C ? ao(C, z) : l(Z, z, i))) {
              for (m = p; --m; ) {
                var j = V[m];
                if (!(j ? ao(j, z) : l(e[m], z, i)))
                  continue e;
              }
              C && C.push(z), Z.push(O);
            }
          }
        return Z;
      }
      function iv(e, n, i, l) {
        return Dt(e, function(c, p, m) {
          n(l, i(c), p, m);
        }), l;
      }
      function mo(e, n, i) {
        n = mn(n, e), e = Yd(e, n);
        var l = e == null ? e : e[Qt(Ut(n))];
        return l == null ? r : ot(l, e, i);
      }
      function od(e) {
        return ve(e) && He(e) == or;
      }
      function av(e) {
        return ve(e) && He(e) == io;
      }
      function sv(e) {
        return ve(e) && He(e) == eo;
      }
      function wo(e, n, i, l, c) {
        return e === n ? !0 : e == null || n == null || !ve(e) && !ve(n) ? e !== e && n !== n : lv(e, n, i, l, wo, c);
      }
      function lv(e, n, i, l, c, p) {
        var m = H(e), V = H(n), g = m ? si : Qe(e), Z = V ? si : Qe(n);
        g = g == or ? _t : g, Z = Z == or ? _t : Z;
        var b = g == _t, J = Z == _t, C = g == Z;
        if (C && Vn(e)) {
          if (!Vn(n))
            return !1;
          m = !0, b = !1;
        }
        if (C && !b)
          return p || (p = new Jt()), m || vr(e) ? Bd(e, n, i, l, c, p) : Cv(e, n, g, i, l, c, p);
        if (!(i & F)) {
          var O = b && ie.call(e, "__wrapped__"), z = J && ie.call(n, "__wrapped__");
          if (O || z) {
            var j = O ? e.value() : e, G = z ? n.value() : n;
            return p || (p = new Jt()), c(j, G, i, l, p);
          }
        }
        return C ? (p || (p = new Jt()), xv(e, n, i, l, c, p)) : !1;
      }
      function cv(e) {
        return ve(e) && Qe(e) == kt;
      }
      function Bs(e, n, i, l) {
        var c = i.length, p = c, m = !l;
        if (e == null)
          return !p;
        for (e = ue(e); c--; ) {
          var V = i[c];
          if (m && V[2] ? V[1] !== e[V[0]] : !(V[0] in e))
            return !1;
        }
        for (; ++c < p; ) {
          V = i[c];
          var g = V[0], Z = e[g], b = V[1];
          if (m && V[2]) {
            if (Z === r && !(g in e))
              return !1;
          } else {
            var J = new Jt();
            if (l)
              var C = l(Z, b, g, e, n, J);
            if (!(C === r ? wo(b, Z, F | W, l, J) : C))
              return !1;
          }
        }
        return !0;
      }
      function id(e) {
        if (!pe(e) || _v(e))
          return !1;
        var n = qt(e) ? cV : Kw;
        return n.test(Dn(e));
      }
      function uv(e) {
        return ve(e) && He(e) == no;
      }
      function dv(e) {
        return ve(e) && Qe(e) == Zt;
      }
      function fv(e) {
        return ve(e) && Li(e.length) && !!fe[He(e)];
      }
      function ad(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? H(e) ? cd(e[0], e[1]) : ld(e) : Jf(e);
      }
      function Is(e) {
        if (!To(e))
          return mV(e);
        var n = [];
        for (var i in ue(e))
          ie.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function hv(e) {
        if (!pe(e))
          return Xv(e);
        var n = To(e), i = [];
        for (var l in e)
          l == "constructor" && (n || !ie.call(e, l)) || i.push(l);
        return i;
      }
      function Ds(e, n) {
        return e < n;
      }
      function sd(e, n) {
        var i = -1, l = qe(e) ? N(e.length) : [];
        return hn(e, function(c, p, m) {
          l[++i] = n(c, p, m);
        }), l;
      }
      function ld(e) {
        var n = el(e);
        return n.length == 1 && n[0][2] ? zd(n[0][0], n[0][1]) : function(i) {
          return i === e || Bs(i, e, n);
        };
      }
      function cd(e, n) {
        return nl(e) && Qd(n) ? zd(Qt(e), n) : function(i) {
          var l = fl(i, e);
          return l === r && l === n ? hl(i, e) : wo(n, l, F | W);
        };
      }
      function Wi(e, n, i, l, c) {
        e !== n && As(n, function(p, m) {
          if (c || (c = new Jt()), pe(p))
            pv(e, n, m, i, Wi, l, c);
          else {
            var V = l ? l(ol(e, m), p, m + "", e, n, c) : r;
            V === r && (V = p), Ss(e, m, V);
          }
        }, Ke);
      }
      function pv(e, n, i, l, c, p, m) {
        var V = ol(e, i), g = ol(n, i), Z = m.get(g);
        if (Z) {
          Ss(e, i, Z);
          return;
        }
        var b = p ? p(V, g, i + "", e, n, m) : r, J = b === r;
        if (J) {
          var C = H(g), O = !C && Vn(g), z = !C && !O && vr(g);
          b = g, C || O || z ? H(V) ? b = V : ge(V) ? b = $e(V) : O ? (J = !1, b = Ud(g, !0)) : z ? (J = !1, b = Rd(g, !0)) : b = [] : Uo(g) || On(g) ? (b = V, On(V) ? b = Tf(V) : (!pe(V) || qt(V)) && (b = Od(g))) : J = !1;
        }
        J && (m.set(g, b), c(b, g, l, p, m), m.delete(g)), Ss(e, i, b);
      }
      function ud(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, $t(n, i) ? e[n] : r;
      }
      function dd(e, n, i) {
        n.length ? n = he(n, function(p) {
          return H(p) ? function(m) {
            return Bn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [et];
        var l = -1;
        n = he(n, it(Q()));
        var c = sd(e, function(p, m, V) {
          var g = he(n, function(Z) {
            return Z(p);
          });
          return { criteria: g, index: ++l, value: p };
        });
        return Q1(c, function(p, m) {
          return Zv(p, m, i);
        });
      }
      function mv(e, n) {
        return fd(e, n, function(i, l) {
          return hl(e, l);
        });
      }
      function fd(e, n, i) {
        for (var l = -1, c = n.length, p = {}; ++l < c; ) {
          var m = n[l], V = Bn(e, m);
          i(V, m) && Vo(p, mn(m, e), V);
        }
        return p;
      }
      function wv(e) {
        return function(n) {
          return Bn(n, e);
        };
      }
      function Os(e, n, i, l) {
        var c = l ? O1 : sr, p = -1, m = n.length, V = e;
        for (e === n && (n = $e(n)), i && (V = he(e, it(i))); ++p < m; )
          for (var g = 0, Z = n[p], b = i ? i(Z) : Z; (g = c(V, b, g, l)) > -1; )
            V !== e && yi.call(V, g, 1), yi.call(e, g, 1);
        return e;
      }
      function hd(e, n) {
        for (var i = e ? n.length : 0, l = i - 1; i--; ) {
          var c = n[i];
          if (i == l || c !== p) {
            var p = c;
            $t(c) ? yi.call(e, c, 1) : Ys(e, c);
          }
        }
        return e;
      }
      function Qs(e, n) {
        return e + Zi(Pu() * (n - e + 1));
      }
      function Vv(e, n, i, l) {
        for (var c = -1, p = ke(ki((n - e) / (i || 1)), 0), m = N(p); p--; )
          m[l ? p : ++c] = e, e += i;
        return m;
      }
      function zs(e, n) {
        var i = "";
        if (!e || n < 1 || n > _e)
          return i;
        do
          n % 2 && (i += e), n = Zi(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function X(e, n) {
        return il(Gd(e, n, et), e + "");
      }
      function vv(e) {
        return Lu(Tr(e));
      }
      function Tv(e, n) {
        var i = Tr(e);
        return Yi(i, xn(n, 0, i.length));
      }
      function Vo(e, n, i, l) {
        if (!pe(e))
          return e;
        n = mn(n, e);
        for (var c = -1, p = n.length, m = p - 1, V = e; V != null && ++c < p; ) {
          var g = Qt(n[c]), Z = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (c != m) {
            var b = V[g];
            Z = l ? l(b, g, V) : r, Z === r && (Z = pe(b) ? b : $t(n[c + 1]) ? [] : {});
          }
          ho(V, g, Z), V = V[g];
        }
        return e;
      }
      var pd = bi ? function(e, n) {
        return bi.set(e, n), e;
      } : et, gv = Mi ? function(e, n) {
        return Mi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ml(n),
          writable: !0
        });
      } : et;
      function Uv(e) {
        return Yi(Tr(e));
      }
      function gt(e, n, i) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), i = i > c ? c : i, i < 0 && (i += c), c = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = N(c); ++l < c; )
          p[l] = e[l + n];
        return p;
      }
      function Rv(e, n) {
        var i;
        return hn(e, function(l, c, p) {
          return i = n(l, c, p), !i;
        }), !!i;
      }
      function Ci(e, n, i) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= yw) {
          for (; l < c; ) {
            var p = l + c >>> 1, m = e[p];
            m !== null && !st(m) && (i ? m <= n : m < n) ? l = p + 1 : c = p;
          }
          return c;
        }
        return Gs(e, n, et, i);
      }
      function Gs(e, n, i, l) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, V = n === null, g = st(n), Z = n === r; c < p; ) {
          var b = Zi((c + p) / 2), J = i(e[b]), C = J !== r, O = J === null, z = J === J, j = st(J);
          if (m)
            var G = l || z;
          else
            Z ? G = z && (l || C) : V ? G = z && C && (l || !O) : g ? G = z && C && !O && (l || !j) : O || j ? G = !1 : G = l ? J <= n : J < n;
          G ? c = b + 1 : p = b;
        }
        return Oe(p, Nw);
      }
      function md(e, n) {
        for (var i = -1, l = e.length, c = 0, p = []; ++i < l; ) {
          var m = e[i], V = n ? n(m) : m;
          if (!i || !Et(V, g)) {
            var g = V;
            p[c++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function wd(e) {
        return typeof e == "number" ? e : st(e) ? ai : +e;
      }
      function at(e) {
        if (typeof e == "string")
          return e;
        if (H(e))
          return he(e, at) + "";
        if (st(e))
          return ju ? ju.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ae ? "-0" : n;
      }
      function pn(e, n, i) {
        var l = -1, c = pi, p = e.length, m = !0, V = [], g = V;
        if (i)
          m = !1, c = vs;
        else if (p >= a) {
          var Z = n ? null : Av(e);
          if (Z)
            return wi(Z);
          m = !1, c = ao, g = new Cn();
        } else
          g = n ? [] : V;
        e:
          for (; ++l < p; ) {
            var b = e[l], J = n ? n(b) : b;
            if (b = i || b !== 0 ? b : 0, m && J === J) {
              for (var C = g.length; C--; )
                if (g[C] === J)
                  continue e;
              n && g.push(J), V.push(b);
            } else
              c(g, J, i) || (g !== V && g.push(J), V.push(b));
          }
        return V;
      }
      function Ys(e, n) {
        return n = mn(n, e), e = Yd(e, n), e == null || delete e[Qt(Ut(n))];
      }
      function Vd(e, n, i, l) {
        return Vo(e, n, i(Bn(e, n)), l);
      }
      function xi(e, n, i, l) {
        for (var c = e.length, p = l ? c : -1; (l ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return i ? gt(e, l ? 0 : p, l ? p + 1 : c) : gt(e, l ? p + 1 : 0, l ? c : p);
      }
      function vd(e, n) {
        var i = e;
        return i instanceof ee && (i = i.value()), Ts(n, function(l, c) {
          return c.func.apply(c.thisArg, un([l], c.args));
        }, i);
      }
      function _s(e, n, i) {
        var l = e.length;
        if (l < 2)
          return l ? pn(e[0]) : [];
        for (var c = -1, p = N(l); ++c < l; )
          for (var m = e[c], V = -1; ++V < l; )
            V != c && (p[c] = po(p[c] || m, e[V], n, i));
        return pn(Ce(p, 1), n, i);
      }
      function Td(e, n, i) {
        for (var l = -1, c = e.length, p = n.length, m = {}; ++l < c; ) {
          var V = l < p ? n[l] : r;
          i(m, e[l], V);
        }
        return m;
      }
      function Hs(e) {
        return ge(e) ? e : [];
      }
      function Ps(e) {
        return typeof e == "function" ? e : et;
      }
      function mn(e, n) {
        return H(e) ? e : nl(e, n) ? [e] : jd(oe(e));
      }
      var Nv = X;
      function wn(e, n, i) {
        var l = e.length;
        return i = i === r ? l : i, !n && i >= l ? e : gt(e, n, i);
      }
      var gd = uV || function(e) {
        return We.clearTimeout(e);
      };
      function Ud(e, n) {
        if (n)
          return e.slice();
        var i = e.length, l = zu ? zu(i) : new e.constructor(i);
        return e.copy(l), l;
      }
      function js(e) {
        var n = new e.constructor(e.byteLength);
        return new Ri(n).set(new Ri(e)), n;
      }
      function yv(e, n) {
        var i = n ? js(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function Mv(e) {
        var n = new e.constructor(e.source, ou.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function kv(e) {
        return fo ? ue(fo.call(e)) : {};
      }
      function Rd(e, n) {
        var i = n ? js(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Nd(e, n) {
        if (e !== n) {
          var i = e !== r, l = e === null, c = e === e, p = st(e), m = n !== r, V = n === null, g = n === n, Z = st(n);
          if (!V && !Z && !p && e > n || p && m && g && !V && !Z || l && m && g || !i && g || !c)
            return 1;
          if (!l && !p && !Z && e < n || Z && i && c && !l && !p || V && i && c || !m && c || !g)
            return -1;
        }
        return 0;
      }
      function Zv(e, n, i) {
        for (var l = -1, c = e.criteria, p = n.criteria, m = c.length, V = i.length; ++l < m; ) {
          var g = Nd(c[l], p[l]);
          if (g) {
            if (l >= V)
              return g;
            var Z = i[l];
            return g * (Z == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function yd(e, n, i, l) {
        for (var c = -1, p = e.length, m = i.length, V = -1, g = n.length, Z = ke(p - m, 0), b = N(g + Z), J = !l; ++V < g; )
          b[V] = n[V];
        for (; ++c < m; )
          (J || c < p) && (b[i[c]] = e[c]);
        for (; Z--; )
          b[V++] = e[c++];
        return b;
      }
      function Md(e, n, i, l) {
        for (var c = -1, p = e.length, m = -1, V = i.length, g = -1, Z = n.length, b = ke(p - V, 0), J = N(b + Z), C = !l; ++c < b; )
          J[c] = e[c];
        for (var O = c; ++g < Z; )
          J[O + g] = n[g];
        for (; ++m < V; )
          (C || c < p) && (J[O + i[m]] = e[c++]);
        return J;
      }
      function $e(e, n) {
        var i = -1, l = e.length;
        for (n || (n = N(l)); ++i < l; )
          n[i] = e[i];
        return n;
      }
      function Ot(e, n, i, l) {
        var c = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var V = n[p], g = l ? l(i[V], e[V], V, i, e) : r;
          g === r && (g = e[V]), c ? jt(i, V, g) : ho(i, V, g);
        }
        return i;
      }
      function bv(e, n) {
        return Ot(e, tl(e), n);
      }
      function Jv(e, n) {
        return Ot(e, Id(e), n);
      }
      function Bi(e, n) {
        return function(i, l) {
          var c = H(i) ? W1 : $V, p = n ? n() : {};
          return c(i, e, Q(l, 2), p);
        };
      }
      function mr(e) {
        return X(function(n, i) {
          var l = -1, c = i.length, p = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (c--, p) : r, m && Pe(i[0], i[1], m) && (p = c < 3 ? r : p, c = 1), n = ue(n); ++l < c; ) {
            var V = i[l];
            V && e(n, V, l, p);
          }
          return n;
        });
      }
      function kd(e, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!qe(i))
            return e(i, l);
          for (var c = i.length, p = n ? c : -1, m = ue(i); (n ? p-- : ++p < c) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function Zd(e) {
        return function(n, i, l) {
          for (var c = -1, p = ue(n), m = l(n), V = m.length; V--; ) {
            var g = m[e ? V : ++c];
            if (i(p[g], g, p) === !1)
              break;
          }
          return n;
        };
      }
      function Ev(e, n, i) {
        var l = n & B, c = vo(e);
        function p() {
          var m = this && this !== We && this instanceof p ? c : e;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function bd(e) {
        return function(n) {
          n = oe(n);
          var i = lr(n) ? bt(n) : r, l = i ? i[0] : n.charAt(0), c = i ? wn(i, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function wr(e) {
        return function(n) {
          return Ts(Zf(kf(n).replace(g1, "")), e, "");
        };
      }
      function vo(e) {
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
          var i = pr(e.prototype), l = e.apply(i, n);
          return pe(l) ? l : i;
        };
      }
      function Sv(e, n, i) {
        var l = vo(e);
        function c() {
          for (var p = arguments.length, m = N(p), V = p, g = Vr(c); V--; )
            m[V] = arguments[V];
          var Z = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : dn(m, g);
          if (p -= Z.length, p < i)
            return Ad(
              e,
              n,
              Ii,
              c.placeholder,
              r,
              m,
              Z,
              r,
              r,
              i - p
            );
          var b = this && this !== We && this instanceof c ? l : e;
          return ot(b, this, m);
        }
        return c;
      }
      function Jd(e) {
        return function(n, i, l) {
          var c = ue(n);
          if (!qe(n)) {
            var p = Q(i, 3);
            n = Je(n), i = function(V) {
              return p(c[V], V, c);
            };
          }
          var m = e(n, i, l);
          return m > -1 ? c[p ? n[m] : m] : r;
        };
      }
      function Ed(e) {
        return Lt(function(n) {
          var i = n.length, l = i, c = vt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Vt(d);
            if (c && !m && zi(p) == "wrapper")
              var m = new vt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var V = zi(p), g = V == "wrapper" ? Ks(p) : r;
            g && rl(g[0]) && g[1] == ($ | E | k | q) && !g[4].length && g[9] == 1 ? m = m[zi(g[0])].apply(m, g[3]) : m = p.length == 1 && rl(p) ? m[V]() : m.thru(p);
          }
          return function() {
            var Z = arguments, b = Z[0];
            if (m && Z.length == 1 && H(b))
              return m.plant(b).value();
            for (var J = 0, C = i ? n[J].apply(this, Z) : b; ++J < i; )
              C = n[J].call(this, C);
            return C;
          };
        });
      }
      function Ii(e, n, i, l, c, p, m, V, g, Z) {
        var b = n & $, J = n & B, C = n & A, O = n & (E | D), z = n & De, j = C ? r : vo(e);
        function G() {
          for (var K = arguments.length, te = N(K), lt = K; lt--; )
            te[lt] = arguments[lt];
          if (O)
            var je = Vr(G), ct = G1(te, je);
          if (l && (te = yd(te, l, c, O)), p && (te = Md(te, p, m, O)), K -= ct, O && K < Z) {
            var Ue = dn(te, je);
            return Ad(
              e,
              n,
              Ii,
              G.placeholder,
              i,
              te,
              Ue,
              V,
              g,
              Z - K
            );
          }
          var St = J ? i : this, en = C ? St[e] : e;
          return K = te.length, V ? te = $v(te, V) : z && K > 1 && te.reverse(), b && g < K && (te.length = g), this && this !== We && this instanceof G && (en = j || vo(en)), en.apply(St, te);
        }
        return G;
      }
      function Sd(e, n) {
        return function(i, l) {
          return iv(i, e, n(l), {});
        };
      }
      function Di(e, n) {
        return function(i, l) {
          var c;
          if (i === r && l === r)
            return n;
          if (i !== r && (c = i), l !== r) {
            if (c === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = at(i), l = at(l)) : (i = wd(i), l = wd(l)), c = e(i, l);
          }
          return c;
        };
      }
      function Xs(e) {
        return Lt(function(n) {
          return n = he(n, it(Q())), X(function(i) {
            var l = this;
            return e(n, function(c) {
              return ot(c, l, i);
            });
          });
        });
      }
      function Oi(e, n) {
        n = n === r ? " " : at(n);
        var i = n.length;
        if (i < 2)
          return i ? zs(n, e) : n;
        var l = zs(n, ki(e / cr(n)));
        return lr(n) ? wn(bt(l), 0, e).join("") : l.slice(0, e);
      }
      function Fv(e, n, i, l) {
        var c = n & B, p = vo(e);
        function m() {
          for (var V = -1, g = arguments.length, Z = -1, b = l.length, J = N(b + g), C = this && this !== We && this instanceof m ? p : e; ++Z < b; )
            J[Z] = l[Z];
          for (; g--; )
            J[Z++] = arguments[++V];
          return ot(C, c ? i : this, J);
        }
        return m;
      }
      function Fd(e) {
        return function(n, i, l) {
          return l && typeof l != "number" && Pe(n, i, l) && (i = l = r), n = Kt(n), i === r ? (i = n, n = 0) : i = Kt(i), l = l === r ? n < i ? 1 : -1 : Kt(l), Vv(n, i, l, e);
        };
      }
      function Qi(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Rt(n), i = Rt(i)), e(n, i);
        };
      }
      function Ad(e, n, i, l, c, p, m, V, g, Z) {
        var b = n & E, J = b ? m : r, C = b ? r : m, O = b ? p : r, z = b ? r : p;
        n |= b ? k : Y, n &= ~(b ? Y : k), n & S || (n &= ~(B | A));
        var j = [
          e,
          n,
          c,
          O,
          J,
          z,
          C,
          V,
          g,
          Z
        ], G = i.apply(r, j);
        return rl(e) && _d(G, j), G.placeholder = l, Hd(G, e, n);
      }
      function Ls(e) {
        var n = Me[e];
        return function(i, l) {
          if (i = Rt(i), l = l == null ? 0 : Oe(P(l), 292), l && Hu(i)) {
            var c = (oe(i) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + l));
            return c = (oe(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(i);
        };
      }
      var Av = fr && 1 / wi(new fr([, -0]))[1] == Ae ? function(e) {
        return new fr(e);
      } : vl;
      function Wd(e) {
        return function(n) {
          var i = Qe(n);
          return i == kt ? ks(n) : i == Zt ? L1(n) : z1(n, e(n));
        };
      }
      function Xt(e, n, i, l, c, p, m, V) {
        var g = n & A;
        if (!g && typeof e != "function")
          throw new Vt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(k | Y), l = c = r), m = m === r ? m : ke(P(m), 0), V = V === r ? V : P(V), Z -= c ? c.length : 0, n & Y) {
          var b = l, J = c;
          l = c = r;
        }
        var C = g ? r : Ks(e), O = [
          e,
          n,
          i,
          l,
          c,
          b,
          J,
          p,
          m,
          V
        ];
        if (C && jv(O, C), e = O[0], n = O[1], i = O[2], l = O[3], c = O[4], V = O[9] = O[9] === r ? g ? 0 : e.length : ke(O[9] - Z, 0), !V && n & (E | D) && (n &= ~(E | D)), !n || n == B)
          var z = Ev(e, n, i);
        else
          n == E || n == D ? z = Sv(e, n, V) : (n == k || n == (B | k)) && !c.length ? z = Fv(e, n, i, l) : z = Ii.apply(r, O);
        var j = C ? pd : _d;
        return Hd(j(z, O), e, n);
      }
      function Cd(e, n, i, l) {
        return e === r || Et(e, dr[i]) && !ie.call(l, i) ? n : e;
      }
      function xd(e, n, i, l, c, p) {
        return pe(e) && pe(n) && (p.set(n, e), Wi(e, n, r, xd, p), p.delete(n)), e;
      }
      function Wv(e) {
        return Uo(e) ? r : e;
      }
      function Bd(e, n, i, l, c, p) {
        var m = i & F, V = e.length, g = n.length;
        if (V != g && !(m && g > V))
          return !1;
        var Z = p.get(e), b = p.get(n);
        if (Z && b)
          return Z == n && b == e;
        var J = -1, C = !0, O = i & W ? new Cn() : r;
        for (p.set(e, n), p.set(n, e); ++J < V; ) {
          var z = e[J], j = n[J];
          if (l)
            var G = m ? l(j, z, J, n, e, p) : l(z, j, J, e, n, p);
          if (G !== r) {
            if (G)
              continue;
            C = !1;
            break;
          }
          if (O) {
            if (!gs(n, function(K, te) {
              if (!ao(O, te) && (z === K || c(z, K, i, l, p)))
                return O.push(te);
            })) {
              C = !1;
              break;
            }
          } else if (!(z === j || c(z, j, i, l, p))) {
            C = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), C;
      }
      function Cv(e, n, i, l, c, p, m) {
        switch (i) {
          case ir:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case io:
            return !(e.byteLength != n.byteLength || !p(new Ri(e), new Ri(n)));
          case Kr:
          case eo:
          case to:
            return Et(+e, +n);
          case li:
            return e.name == n.name && e.message == n.message;
          case no:
          case ro:
            return e == n + "";
          case kt:
            var V = ks;
          case Zt:
            var g = l & F;
            if (V || (V = wi), e.size != n.size && !g)
              return !1;
            var Z = m.get(e);
            if (Z)
              return Z == n;
            l |= W, m.set(e, n);
            var b = Bd(V(e), V(n), l, c, p, m);
            return m.delete(e), b;
          case ui:
            if (fo)
              return fo.call(e) == fo.call(n);
        }
        return !1;
      }
      function xv(e, n, i, l, c, p) {
        var m = i & F, V = $s(e), g = V.length, Z = $s(n), b = Z.length;
        if (g != b && !m)
          return !1;
        for (var J = g; J--; ) {
          var C = V[J];
          if (!(m ? C in n : ie.call(n, C)))
            return !1;
        }
        var O = p.get(e), z = p.get(n);
        if (O && z)
          return O == n && z == e;
        var j = !0;
        p.set(e, n), p.set(n, e);
        for (var G = m; ++J < g; ) {
          C = V[J];
          var K = e[C], te = n[C];
          if (l)
            var lt = m ? l(te, K, C, n, e, p) : l(K, te, C, e, n, p);
          if (!(lt === r ? K === te || c(K, te, i, l, p) : lt)) {
            j = !1;
            break;
          }
          G || (G = C == "constructor");
        }
        if (j && !G) {
          var je = e.constructor, ct = n.constructor;
          je != ct && "constructor" in e && "constructor" in n && !(typeof je == "function" && je instanceof je && typeof ct == "function" && ct instanceof ct) && (j = !1);
        }
        return p.delete(e), p.delete(n), j;
      }
      function Lt(e) {
        return il(Gd(e, r, qd), e + "");
      }
      function $s(e) {
        return rd(e, Je, tl);
      }
      function qs(e) {
        return rd(e, Ke, Id);
      }
      var Ks = bi ? function(e) {
        return bi.get(e);
      } : vl;
      function zi(e) {
        for (var n = e.name + "", i = hr[n], l = ie.call(hr, n) ? i.length : 0; l--; ) {
          var c = i[l], p = c.func;
          if (p == null || p == e)
            return c.name;
        }
        return n;
      }
      function Vr(e) {
        var n = ie.call(h, "placeholder") ? h : e;
        return n.placeholder;
      }
      function Q() {
        var e = h.iteratee || wl;
        return e = e === wl ? ad : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Gi(e, n) {
        var i = e.__data__;
        return Yv(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function el(e) {
        for (var n = Je(e), i = n.length; i--; ) {
          var l = n[i], c = e[l];
          n[i] = [l, c, Qd(c)];
        }
        return n;
      }
      function In(e, n) {
        var i = P1(e, n);
        return id(i) ? i : r;
      }
      function Bv(e) {
        var n = ie.call(e, An), i = e[An];
        try {
          e[An] = r;
          var l = !0;
        } catch {
        }
        var c = gi.call(e);
        return l && (n ? e[An] = i : delete e[An]), c;
      }
      var tl = bs ? function(e) {
        return e == null ? [] : (e = ue(e), cn(bs(e), function(n) {
          return Yu.call(e, n);
        }));
      } : Tl, Id = bs ? function(e) {
        for (var n = []; e; )
          un(n, tl(e)), e = Ni(e);
        return n;
      } : Tl, Qe = He;
      (Js && Qe(new Js(new ArrayBuffer(1))) != ir || lo && Qe(new lo()) != kt || Es && Qe(Es.resolve()) != eu || fr && Qe(new fr()) != Zt || co && Qe(new co()) != oo) && (Qe = function(e) {
        var n = He(e), i = n == _t ? e.constructor : r, l = i ? Dn(i) : "";
        if (l)
          switch (l) {
            case TV:
              return ir;
            case gV:
              return kt;
            case UV:
              return eu;
            case RV:
              return Zt;
            case NV:
              return oo;
          }
        return n;
      });
      function Iv(e, n, i) {
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
              n = Oe(n, e + m);
              break;
            case "takeRight":
              e = ke(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Dv(e) {
        var n = e.match(_w);
        return n ? n[1].split(Hw) : [];
      }
      function Dd(e, n, i) {
        n = mn(n, e);
        for (var l = -1, c = n.length, p = !1; ++l < c; ) {
          var m = Qt(n[l]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++l != c ? p : (c = e == null ? 0 : e.length, !!c && Li(c) && $t(m, c) && (H(e) || On(e)));
      }
      function Ov(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && ie.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function Od(e) {
        return typeof e.constructor == "function" && !To(e) ? pr(Ni(e)) : {};
      }
      function Qv(e, n, i) {
        var l = e.constructor;
        switch (n) {
          case io:
            return js(e);
          case Kr:
          case eo:
            return new l(+e);
          case ir:
            return yv(e, i);
          case es:
          case ts:
          case ns:
          case rs:
          case os:
          case is:
          case as:
          case ss:
          case ls:
            return Rd(e, i);
          case kt:
            return new l();
          case to:
          case ro:
            return new l(e);
          case no:
            return Mv(e);
          case Zt:
            return new l();
          case ui:
            return kv(e);
        }
      }
      function zv(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), e.replace(Yw, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Gv(e) {
        return H(e) || On(e) || !!(_u && e && e[_u]);
      }
      function $t(e, n) {
        var i = typeof e;
        return n = n == null ? _e : n, !!n && (i == "number" || i != "symbol" && t1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Pe(e, n, i) {
        if (!pe(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? qe(i) && $t(n, i.length) : l == "string" && n in i) ? Et(i[n], e) : !1;
      }
      function nl(e, n) {
        if (H(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || st(e) ? !0 : Ow.test(e) || !Dw.test(e) || n != null && e in ue(n);
      }
      function Yv(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function rl(e) {
        var n = zi(e), i = h[n];
        if (typeof i != "function" || !(n in ee.prototype))
          return !1;
        if (e === i)
          return !0;
        var l = Ks(i);
        return !!l && e === l[0];
      }
      function _v(e) {
        return !!Qu && Qu in e;
      }
      var Hv = vi ? qt : gl;
      function To(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || dr;
        return e === i;
      }
      function Qd(e) {
        return e === e && !pe(e);
      }
      function zd(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
        };
      }
      function Pv(e) {
        var n = ji(e, function(l) {
          return i.size === U && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function jv(e, n) {
        var i = e[1], l = n[1], c = i | l, p = c < (B | A | $), m = l == $ && i == E || l == $ && i == q && e[7].length <= n[8] || l == ($ | q) && n[7].length <= n[8] && i == E;
        if (!(p || m))
          return e;
        l & B && (e[2] = n[2], c |= i & B ? 0 : S);
        var V = n[3];
        if (V) {
          var g = e[3];
          e[3] = g ? yd(g, V, n[4]) : V, e[4] = g ? dn(e[3], T) : n[4];
        }
        return V = n[5], V && (g = e[5], e[5] = g ? Md(g, V, n[6]) : V, e[6] = g ? dn(e[5], T) : n[6]), V = n[7], V && (e[7] = V), l & $ && (e[8] = e[8] == null ? n[8] : Oe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function Xv(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function Lv(e) {
        return gi.call(e);
      }
      function Gd(e, n, i) {
        return n = ke(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, p = ke(l.length - n, 0), m = N(p); ++c < p; )
            m[c] = l[n + c];
          c = -1;
          for (var V = N(n + 1); ++c < n; )
            V[c] = l[c];
          return V[n] = i(m), ot(e, this, V);
        };
      }
      function Yd(e, n) {
        return n.length < 2 ? e : Bn(e, gt(n, 0, -1));
      }
      function $v(e, n) {
        for (var i = e.length, l = Oe(n.length, i), c = $e(e); l--; ) {
          var p = n[l];
          e[l] = $t(p, i) ? c[p] : r;
        }
        return e;
      }
      function ol(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var _d = Pd(pd), go = fV || function(e, n) {
        return We.setTimeout(e, n);
      }, il = Pd(gv);
      function Hd(e, n, i) {
        var l = n + "";
        return il(e, zv(l, qv(Dv(l), i)));
      }
      function Pd(e) {
        var n = 0, i = 0;
        return function() {
          var l = wV(), c = Te - (l - i);
          if (i = l, c > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function Yi(e, n) {
        var i = -1, l = e.length, c = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Qs(i, c), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var jd = Pv(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Qw, function(i, l, c, p) {
          n.push(c ? p.replace(Xw, "$1") : l || i);
        }), n;
      });
      function Qt(e) {
        if (typeof e == "string" || st(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ae ? "-0" : n;
      }
      function Dn(e) {
        if (e != null) {
          try {
            return Ti.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function qv(e, n) {
        return wt(Mw, function(i) {
          var l = "_." + i[0];
          n & i[1] && !pi(e, l) && e.push(l);
        }), e.sort();
      }
      function Xd(e) {
        if (e instanceof ee)
          return e.clone();
        var n = new vt(e.__wrapped__, e.__chain__);
        return n.__actions__ = $e(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function Kv(e, n, i) {
        (i ? Pe(e, n, i) : n === r) ? n = 1 : n = ke(P(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1)
          return [];
        for (var c = 0, p = 0, m = N(ki(l / n)); c < l; )
          m[p++] = gt(e, c, c += n);
        return m;
      }
      function e0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
          var p = e[n];
          p && (c[l++] = p);
        }
        return c;
      }
      function t0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], l = e; l--; )
          n[l - 1] = arguments[l];
        return un(H(i) ? $e(i) : [i], Ce(n, 1));
      }
      var n0 = X(function(e, n) {
        return ge(e) ? po(e, Ce(n, 1, ge, !0)) : [];
      }), r0 = X(function(e, n) {
        var i = Ut(n);
        return ge(i) && (i = r), ge(e) ? po(e, Ce(n, 1, ge, !0), Q(i, 2)) : [];
      }), o0 = X(function(e, n) {
        var i = Ut(n);
        return ge(i) && (i = r), ge(e) ? po(e, Ce(n, 1, ge, !0), r, i) : [];
      });
      function i0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), gt(e, n < 0 ? 0 : n, l)) : [];
      }
      function a0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), n = l - n, gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function s0(e, n) {
        return e && e.length ? xi(e, Q(n, 3), !0, !0) : [];
      }
      function l0(e, n) {
        return e && e.length ? xi(e, Q(n, 3), !0) : [];
      }
      function c0(e, n, i, l) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && Pe(e, n, i) && (i = 0, l = c), tv(e, n, i, l)) : [];
      }
      function Ld(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = ke(l + c, 0)), mi(e, Q(n, 3), c);
      }
      function $d(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l - 1;
        return i !== r && (c = P(i), c = i < 0 ? ke(l + c, 0) : Oe(c, l - 1)), mi(e, Q(n, 3), c, !0);
      }
      function qd(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, 1) : [];
      }
      function u0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, Ae) : [];
      }
      function d0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : P(n), Ce(e, n)) : [];
      }
      function f0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = {}; ++n < i; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function Kd(e) {
        return e && e.length ? e[0] : r;
      }
      function h0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = ke(l + c, 0)), sr(e, n, c);
      }
      function p0(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 0, -1) : [];
      }
      var m0 = X(function(e) {
        var n = he(e, Hs);
        return n.length && n[0] === e[0] ? xs(n) : [];
      }), w0 = X(function(e) {
        var n = Ut(e), i = he(e, Hs);
        return n === Ut(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? xs(i, Q(n, 2)) : [];
      }), V0 = X(function(e) {
        var n = Ut(e), i = he(e, Hs);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? xs(i, r, n) : [];
      });
      function v0(e, n) {
        return e == null ? "" : pV.call(e, n);
      }
      function Ut(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function T0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l;
        return i !== r && (c = P(i), c = c < 0 ? ke(l + c, 0) : Oe(c, l - 1)), n === n ? q1(e, n, c) : mi(e, Au, c, !0);
      }
      function g0(e, n) {
        return e && e.length ? ud(e, P(n)) : r;
      }
      var U0 = X(ef);
      function ef(e, n) {
        return e && e.length && n && n.length ? Os(e, n) : e;
      }
      function R0(e, n, i) {
        return e && e.length && n && n.length ? Os(e, n, Q(i, 2)) : e;
      }
      function N0(e, n, i) {
        return e && e.length && n && n.length ? Os(e, n, r, i) : e;
      }
      var y0 = Lt(function(e, n) {
        var i = e == null ? 0 : e.length, l = Fs(e, n);
        return hd(e, he(n, function(c) {
          return $t(c, i) ? +c : c;
        }).sort(Nd)), l;
      });
      function M0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var l = -1, c = [], p = e.length;
        for (n = Q(n, 3); ++l < p; ) {
          var m = e[l];
          n(m, l, e) && (i.push(m), c.push(l));
        }
        return hd(e, c), i;
      }
      function al(e) {
        return e == null ? e : vV.call(e);
      }
      function k0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (i && typeof i != "number" && Pe(e, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : P(n), i = i === r ? l : P(i)), gt(e, n, i)) : [];
      }
      function Z0(e, n) {
        return Ci(e, n);
      }
      function b0(e, n, i) {
        return Gs(e, n, Q(i, 2));
      }
      function J0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Ci(e, n);
          if (l < i && Et(e[l], n))
            return l;
        }
        return -1;
      }
      function E0(e, n) {
        return Ci(e, n, !0);
      }
      function S0(e, n, i) {
        return Gs(e, n, Q(i, 2), !0);
      }
      function F0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Ci(e, n, !0) - 1;
          if (Et(e[l], n))
            return l;
        }
        return -1;
      }
      function A0(e) {
        return e && e.length ? md(e) : [];
      }
      function W0(e, n) {
        return e && e.length ? md(e, Q(n, 2)) : [];
      }
      function C0(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 1, n) : [];
      }
      function x0(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : P(n), gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function B0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), n = l - n, gt(e, n < 0 ? 0 : n, l)) : [];
      }
      function I0(e, n) {
        return e && e.length ? xi(e, Q(n, 3), !1, !0) : [];
      }
      function D0(e, n) {
        return e && e.length ? xi(e, Q(n, 3)) : [];
      }
      var O0 = X(function(e) {
        return pn(Ce(e, 1, ge, !0));
      }), Q0 = X(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), pn(Ce(e, 1, ge, !0), Q(n, 2));
      }), z0 = X(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, pn(Ce(e, 1, ge, !0), r, n);
      });
      function G0(e) {
        return e && e.length ? pn(e) : [];
      }
      function Y0(e, n) {
        return e && e.length ? pn(e, Q(n, 2)) : [];
      }
      function _0(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? pn(e, r, n) : [];
      }
      function sl(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = cn(e, function(i) {
          if (ge(i))
            return n = ke(i.length, n), !0;
        }), ys(n, function(i) {
          return he(e, Us(i));
        });
      }
      function tf(e, n) {
        if (!(e && e.length))
          return [];
        var i = sl(e);
        return n == null ? i : he(i, function(l) {
          return ot(n, r, l);
        });
      }
      var H0 = X(function(e, n) {
        return ge(e) ? po(e, n) : [];
      }), P0 = X(function(e) {
        return _s(cn(e, ge));
      }), j0 = X(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), _s(cn(e, ge), Q(n, 2));
      }), X0 = X(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, _s(cn(e, ge), r, n);
      }), L0 = X(sl);
      function $0(e, n) {
        return Td(e || [], n || [], ho);
      }
      function q0(e, n) {
        return Td(e || [], n || [], Vo);
      }
      var K0 = X(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, tf(e, i);
      });
      function nf(e) {
        var n = h(e);
        return n.__chain__ = !0, n;
      }
      function eT(e, n) {
        return n(e), e;
      }
      function _i(e, n) {
        return n(e);
      }
      var tT = Lt(function(e) {
        var n = e.length, i = n ? e[0] : 0, l = this.__wrapped__, c = function(p) {
          return Fs(p, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ee) || !$t(i) ? this.thru(c) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: _i,
          args: [c],
          thisArg: r
        }), new vt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function nT() {
        return nf(this);
      }
      function rT() {
        return new vt(this.value(), this.__chain__);
      }
      function oT() {
        this.__values__ === r && (this.__values__ = Vf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function iT() {
        return this;
      }
      function aT(e) {
        for (var n, i = this; i instanceof Ei; ) {
          var l = Xd(i);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function sT() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var n = e;
          return this.__actions__.length && (n = new ee(this)), n = n.reverse(), n.__actions__.push({
            func: _i,
            args: [al],
            thisArg: r
          }), new vt(n, this.__chain__);
        }
        return this.thru(al);
      }
      function lT() {
        return vd(this.__wrapped__, this.__actions__);
      }
      var cT = Bi(function(e, n, i) {
        ie.call(e, i) ? ++e[i] : jt(e, i, 1);
      });
      function uT(e, n, i) {
        var l = H(e) ? Su : ev;
        return i && Pe(e, n, i) && (n = r), l(e, Q(n, 3));
      }
      function dT(e, n) {
        var i = H(e) ? cn : td;
        return i(e, Q(n, 3));
      }
      var fT = Jd(Ld), hT = Jd($d);
      function pT(e, n) {
        return Ce(Hi(e, n), 1);
      }
      function mT(e, n) {
        return Ce(Hi(e, n), Ae);
      }
      function wT(e, n, i) {
        return i = i === r ? 1 : P(i), Ce(Hi(e, n), i);
      }
      function rf(e, n) {
        var i = H(e) ? wt : hn;
        return i(e, Q(n, 3));
      }
      function of(e, n) {
        var i = H(e) ? C1 : ed;
        return i(e, Q(n, 3));
      }
      var VT = Bi(function(e, n, i) {
        ie.call(e, i) ? e[i].push(n) : jt(e, i, [n]);
      });
      function vT(e, n, i, l) {
        e = qe(e) ? e : Tr(e), i = i && !l ? P(i) : 0;
        var c = e.length;
        return i < 0 && (i = ke(c + i, 0)), $i(e) ? i <= c && e.indexOf(n, i) > -1 : !!c && sr(e, n, i) > -1;
      }
      var TT = X(function(e, n, i) {
        var l = -1, c = typeof n == "function", p = qe(e) ? N(e.length) : [];
        return hn(e, function(m) {
          p[++l] = c ? ot(n, m, i) : mo(m, n, i);
        }), p;
      }), gT = Bi(function(e, n, i) {
        jt(e, i, n);
      });
      function Hi(e, n) {
        var i = H(e) ? he : sd;
        return i(e, Q(n, 3));
      }
      function UT(e, n, i, l) {
        return e == null ? [] : (H(n) || (n = n == null ? [] : [n]), i = l ? r : i, H(i) || (i = i == null ? [] : [i]), dd(e, n, i));
      }
      var RT = Bi(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function NT(e, n, i) {
        var l = H(e) ? Ts : Cu, c = arguments.length < 3;
        return l(e, Q(n, 4), i, c, hn);
      }
      function yT(e, n, i) {
        var l = H(e) ? x1 : Cu, c = arguments.length < 3;
        return l(e, Q(n, 4), i, c, ed);
      }
      function MT(e, n) {
        var i = H(e) ? cn : td;
        return i(e, Xi(Q(n, 3)));
      }
      function kT(e) {
        var n = H(e) ? Lu : vv;
        return n(e);
      }
      function ZT(e, n, i) {
        (i ? Pe(e, n, i) : n === r) ? n = 1 : n = P(n);
        var l = H(e) ? XV : Tv;
        return l(e, n);
      }
      function bT(e) {
        var n = H(e) ? LV : Uv;
        return n(e);
      }
      function JT(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return $i(e) ? cr(e) : e.length;
        var n = Qe(e);
        return n == kt || n == Zt ? e.size : Is(e).length;
      }
      function ET(e, n, i) {
        var l = H(e) ? gs : Rv;
        return i && Pe(e, n, i) && (n = r), l(e, Q(n, 3));
      }
      var ST = X(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && Pe(e, n[0], n[1]) ? n = [] : i > 2 && Pe(n[0], n[1], n[2]) && (n = [n[0]]), dd(e, Ce(n, 1), []);
      }), Pi = dV || function() {
        return We.Date.now();
      };
      function FT(e, n) {
        if (typeof n != "function")
          throw new Vt(d);
        return e = P(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function af(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, Xt(e, $, r, r, r, r, n);
      }
      function sf(e, n) {
        var i;
        if (typeof n != "function")
          throw new Vt(d);
        return e = P(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var ll = X(function(e, n, i) {
        var l = B;
        if (i.length) {
          var c = dn(i, Vr(ll));
          l |= k;
        }
        return Xt(e, l, n, i, c);
      }), lf = X(function(e, n, i) {
        var l = B | A;
        if (i.length) {
          var c = dn(i, Vr(lf));
          l |= k;
        }
        return Xt(n, l, e, i, c);
      });
      function cf(e, n, i) {
        n = i ? r : n;
        var l = Xt(e, E, r, r, r, r, r, n);
        return l.placeholder = cf.placeholder, l;
      }
      function uf(e, n, i) {
        n = i ? r : n;
        var l = Xt(e, D, r, r, r, r, r, n);
        return l.placeholder = uf.placeholder, l;
      }
      function df(e, n, i) {
        var l, c, p, m, V, g, Z = 0, b = !1, J = !1, C = !0;
        if (typeof e != "function")
          throw new Vt(d);
        n = Rt(n) || 0, pe(i) && (b = !!i.leading, J = "maxWait" in i, p = J ? ke(Rt(i.maxWait) || 0, n) : p, C = "trailing" in i ? !!i.trailing : C);
        function O(Ue) {
          var St = l, en = c;
          return l = c = r, Z = Ue, m = e.apply(en, St), m;
        }
        function z(Ue) {
          return Z = Ue, V = go(K, n), b ? O(Ue) : m;
        }
        function j(Ue) {
          var St = Ue - g, en = Ue - Z, Ef = n - St;
          return J ? Oe(Ef, p - en) : Ef;
        }
        function G(Ue) {
          var St = Ue - g, en = Ue - Z;
          return g === r || St >= n || St < 0 || J && en >= p;
        }
        function K() {
          var Ue = Pi();
          if (G(Ue))
            return te(Ue);
          V = go(K, j(Ue));
        }
        function te(Ue) {
          return V = r, C && l ? O(Ue) : (l = c = r, m);
        }
        function lt() {
          V !== r && gd(V), Z = 0, l = g = c = V = r;
        }
        function je() {
          return V === r ? m : te(Pi());
        }
        function ct() {
          var Ue = Pi(), St = G(Ue);
          if (l = arguments, c = this, g = Ue, St) {
            if (V === r)
              return z(g);
            if (J)
              return gd(V), V = go(K, n), O(g);
          }
          return V === r && (V = go(K, n)), m;
        }
        return ct.cancel = lt, ct.flush = je, ct;
      }
      var AT = X(function(e, n) {
        return Ku(e, 1, n);
      }), WT = X(function(e, n, i) {
        return Ku(e, Rt(n) || 0, i);
      });
      function CT(e) {
        return Xt(e, De);
      }
      function ji(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Vt(d);
        var i = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(c))
            return p.get(c);
          var m = e.apply(this, l);
          return i.cache = p.set(c, m) || p, m;
        };
        return i.cache = new (ji.Cache || Pt)(), i;
      }
      ji.Cache = Pt;
      function Xi(e) {
        if (typeof e != "function")
          throw new Vt(d);
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
      function xT(e) {
        return sf(2, e);
      }
      var BT = Nv(function(e, n) {
        n = n.length == 1 && H(n[0]) ? he(n[0], it(Q())) : he(Ce(n, 1), it(Q()));
        var i = n.length;
        return X(function(l) {
          for (var c = -1, p = Oe(l.length, i); ++c < p; )
            l[c] = n[c].call(this, l[c]);
          return ot(e, this, l);
        });
      }), cl = X(function(e, n) {
        var i = dn(n, Vr(cl));
        return Xt(e, k, r, n, i);
      }), ff = X(function(e, n) {
        var i = dn(n, Vr(ff));
        return Xt(e, Y, r, n, i);
      }), IT = Lt(function(e, n) {
        return Xt(e, q, r, r, r, n);
      });
      function DT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n === r ? n : P(n), X(e, n);
      }
      function OT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n == null ? 0 : ke(P(n), 0), X(function(i) {
          var l = i[n], c = wn(i, 0, n);
          return l && un(c, l), ot(e, this, c);
        });
      }
      function QT(e, n, i) {
        var l = !0, c = !0;
        if (typeof e != "function")
          throw new Vt(d);
        return pe(i) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), df(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function zT(e) {
        return af(e, 1);
      }
      function GT(e, n) {
        return cl(Ps(n), e);
      }
      function YT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return H(e) ? e : [e];
      }
      function _T(e) {
        return Tt(e, x);
      }
      function HT(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, x, n);
      }
      function PT(e) {
        return Tt(e, R | x);
      }
      function jT(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, R | x, n);
      }
      function XT(e, n) {
        return n == null || qu(e, n, Je(n));
      }
      function Et(e, n) {
        return e === n || e !== e && n !== n;
      }
      var LT = Qi(Cs), $T = Qi(function(e, n) {
        return e >= n;
      }), On = od(function() {
        return arguments;
      }()) ? od : function(e) {
        return ve(e) && ie.call(e, "callee") && !Yu.call(e, "callee");
      }, H = N.isArray, qT = Mu ? it(Mu) : av;
      function qe(e) {
        return e != null && Li(e.length) && !qt(e);
      }
      function ge(e) {
        return ve(e) && qe(e);
      }
      function KT(e) {
        return e === !0 || e === !1 || ve(e) && He(e) == Kr;
      }
      var Vn = hV || gl, eg = ku ? it(ku) : sv;
      function tg(e) {
        return ve(e) && e.nodeType === 1 && !Uo(e);
      }
      function ng(e) {
        if (e == null)
          return !0;
        if (qe(e) && (H(e) || typeof e == "string" || typeof e.splice == "function" || Vn(e) || vr(e) || On(e)))
          return !e.length;
        var n = Qe(e);
        if (n == kt || n == Zt)
          return !e.size;
        if (To(e))
          return !Is(e).length;
        for (var i in e)
          if (ie.call(e, i))
            return !1;
        return !0;
      }
      function rg(e, n) {
        return wo(e, n);
      }
      function og(e, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(e, n) : r;
        return l === r ? wo(e, n, r, i) : !!l;
      }
      function ul(e) {
        if (!ve(e))
          return !1;
        var n = He(e);
        return n == li || n == Zw || typeof e.message == "string" && typeof e.name == "string" && !Uo(e);
      }
      function ig(e) {
        return typeof e == "number" && Hu(e);
      }
      function qt(e) {
        if (!pe(e))
          return !1;
        var n = He(e);
        return n == ci || n == Kc || n == kw || n == Jw;
      }
      function hf(e) {
        return typeof e == "number" && e == P(e);
      }
      function Li(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _e;
      }
      function pe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ve(e) {
        return e != null && typeof e == "object";
      }
      var pf = Zu ? it(Zu) : cv;
      function ag(e, n) {
        return e === n || Bs(e, n, el(n));
      }
      function sg(e, n, i) {
        return i = typeof i == "function" ? i : r, Bs(e, n, el(n), i);
      }
      function lg(e) {
        return mf(e) && e != +e;
      }
      function cg(e) {
        if (Hv(e))
          throw new _(u);
        return id(e);
      }
      function ug(e) {
        return e === null;
      }
      function dg(e) {
        return e == null;
      }
      function mf(e) {
        return typeof e == "number" || ve(e) && He(e) == to;
      }
      function Uo(e) {
        if (!ve(e) || He(e) != _t)
          return !1;
        var n = Ni(e);
        if (n === null)
          return !0;
        var i = ie.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Ti.call(i) == sV;
      }
      var dl = bu ? it(bu) : uv;
      function fg(e) {
        return hf(e) && e >= -_e && e <= _e;
      }
      var wf = Ju ? it(Ju) : dv;
      function $i(e) {
        return typeof e == "string" || !H(e) && ve(e) && He(e) == ro;
      }
      function st(e) {
        return typeof e == "symbol" || ve(e) && He(e) == ui;
      }
      var vr = Eu ? it(Eu) : fv;
      function hg(e) {
        return e === r;
      }
      function pg(e) {
        return ve(e) && Qe(e) == oo;
      }
      function mg(e) {
        return ve(e) && He(e) == Sw;
      }
      var wg = Qi(Ds), Vg = Qi(function(e, n) {
        return e <= n;
      });
      function Vf(e) {
        if (!e)
          return [];
        if (qe(e))
          return $i(e) ? bt(e) : $e(e);
        if (so && e[so])
          return X1(e[so]());
        var n = Qe(e), i = n == kt ? ks : n == Zt ? wi : Tr;
        return i(e);
      }
      function Kt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Rt(e), e === Ae || e === -Ae) {
          var n = e < 0 ? -1 : 1;
          return n * qr;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var n = Kt(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function vf(e) {
        return e ? xn(P(e), 0, It) : 0;
      }
      function Rt(e) {
        if (typeof e == "number")
          return e;
        if (st(e))
          return ai;
        if (pe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = pe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = xu(e);
        var i = qw.test(e);
        return i || e1.test(e) ? F1(e.slice(2), i ? 2 : 8) : $w.test(e) ? ai : +e;
      }
      function Tf(e) {
        return Ot(e, Ke(e));
      }
      function vg(e) {
        return e ? xn(P(e), -_e, _e) : e === 0 ? e : 0;
      }
      function oe(e) {
        return e == null ? "" : at(e);
      }
      var Tg = mr(function(e, n) {
        if (To(n) || qe(n)) {
          Ot(n, Je(n), e);
          return;
        }
        for (var i in n)
          ie.call(n, i) && ho(e, i, n[i]);
      }), gf = mr(function(e, n) {
        Ot(n, Ke(n), e);
      }), qi = mr(function(e, n, i, l) {
        Ot(n, Ke(n), e, l);
      }), gg = mr(function(e, n, i, l) {
        Ot(n, Je(n), e, l);
      }), Ug = Lt(Fs);
      function Rg(e, n) {
        var i = pr(e);
        return n == null ? i : $u(i, n);
      }
      var Ng = X(function(e, n) {
        e = ue(e);
        var i = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && Pe(n[0], n[1], c) && (l = 1); ++i < l; )
          for (var p = n[i], m = Ke(p), V = -1, g = m.length; ++V < g; ) {
            var Z = m[V], b = e[Z];
            (b === r || Et(b, dr[Z]) && !ie.call(e, Z)) && (e[Z] = p[Z]);
          }
        return e;
      }), yg = X(function(e) {
        return e.push(r, xd), ot(Uf, r, e);
      });
      function Mg(e, n) {
        return Fu(e, Q(n, 3), Dt);
      }
      function kg(e, n) {
        return Fu(e, Q(n, 3), Ws);
      }
      function Zg(e, n) {
        return e == null ? e : As(e, Q(n, 3), Ke);
      }
      function bg(e, n) {
        return e == null ? e : nd(e, Q(n, 3), Ke);
      }
      function Jg(e, n) {
        return e && Dt(e, Q(n, 3));
      }
      function Eg(e, n) {
        return e && Ws(e, Q(n, 3));
      }
      function Sg(e) {
        return e == null ? [] : Ai(e, Je(e));
      }
      function Fg(e) {
        return e == null ? [] : Ai(e, Ke(e));
      }
      function fl(e, n, i) {
        var l = e == null ? r : Bn(e, n);
        return l === r ? i : l;
      }
      function Ag(e, n) {
        return e != null && Dd(e, n, nv);
      }
      function hl(e, n) {
        return e != null && Dd(e, n, rv);
      }
      var Wg = Sd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = gi.call(n)), e[n] = i;
      }, ml(et)), Cg = Sd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = gi.call(n)), ie.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, Q), xg = X(mo);
      function Je(e) {
        return qe(e) ? Xu(e) : Is(e);
      }
      function Ke(e) {
        return qe(e) ? Xu(e, !0) : hv(e);
      }
      function Bg(e, n) {
        var i = {};
        return n = Q(n, 3), Dt(e, function(l, c, p) {
          jt(i, n(l, c, p), l);
        }), i;
      }
      function Ig(e, n) {
        var i = {};
        return n = Q(n, 3), Dt(e, function(l, c, p) {
          jt(i, c, n(l, c, p));
        }), i;
      }
      var Dg = mr(function(e, n, i) {
        Wi(e, n, i);
      }), Uf = mr(function(e, n, i, l) {
        Wi(e, n, i, l);
      }), Og = Lt(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var l = !1;
        n = he(n, function(p) {
          return p = mn(p, e), l || (l = p.length > 1), p;
        }), Ot(e, qs(e), i), l && (i = Tt(i, R | y | x, Wv));
        for (var c = n.length; c--; )
          Ys(i, n[c]);
        return i;
      });
      function Qg(e, n) {
        return Rf(e, Xi(Q(n)));
      }
      var zg = Lt(function(e, n) {
        return e == null ? {} : mv(e, n);
      });
      function Rf(e, n) {
        if (e == null)
          return {};
        var i = he(qs(e), function(l) {
          return [l];
        });
        return n = Q(n), fd(e, i, function(l, c) {
          return n(l, c[0]);
        });
      }
      function Gg(e, n, i) {
        n = mn(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var p = e == null ? r : e[Qt(n[l])];
          p === r && (l = c, p = i), e = qt(p) ? p.call(e) : p;
        }
        return e;
      }
      function Yg(e, n, i) {
        return e == null ? e : Vo(e, n, i);
      }
      function _g(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Vo(e, n, i, l);
      }
      var Nf = Wd(Je), yf = Wd(Ke);
      function Hg(e, n, i) {
        var l = H(e), c = l || Vn(e) || vr(e);
        if (n = Q(n, 4), i == null) {
          var p = e && e.constructor;
          c ? i = l ? new p() : [] : pe(e) ? i = qt(p) ? pr(Ni(e)) : {} : i = {};
        }
        return (c ? wt : Dt)(e, function(m, V, g) {
          return n(i, m, V, g);
        }), i;
      }
      function Pg(e, n) {
        return e == null ? !0 : Ys(e, n);
      }
      function jg(e, n, i) {
        return e == null ? e : Vd(e, n, Ps(i));
      }
      function Xg(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Vd(e, n, Ps(i), l);
      }
      function Tr(e) {
        return e == null ? [] : Ms(e, Je(e));
      }
      function Lg(e) {
        return e == null ? [] : Ms(e, Ke(e));
      }
      function $g(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Rt(i), i = i === i ? i : 0), n !== r && (n = Rt(n), n = n === n ? n : 0), xn(Rt(e), n, i);
      }
      function qg(e, n, i) {
        return n = Kt(n), i === r ? (i = n, n = 0) : i = Kt(i), e = Rt(e), ov(e, n, i);
      }
      function Kg(e, n, i) {
        if (i && typeof i != "boolean" && Pe(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = Kt(e), n === r ? (n = e, e = 0) : n = Kt(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (i || e % 1 || n % 1) {
          var c = Pu();
          return Oe(e + c * (n - e + S1("1e-" + ((c + "").length - 1))), n);
        }
        return Qs(e, n);
      }
      var eU = wr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? Mf(n) : n);
      });
      function Mf(e) {
        return pl(oe(e).toLowerCase());
      }
      function kf(e) {
        return e = oe(e), e && e.replace(n1, Y1).replace(U1, "");
      }
      function tU(e, n, i) {
        e = oe(e), n = at(n);
        var l = e.length;
        i = i === r ? l : xn(P(i), 0, l);
        var c = i;
        return i -= n.length, i >= 0 && e.slice(i, c) == n;
      }
      function nU(e) {
        return e = oe(e), e && xw.test(e) ? e.replace(nu, _1) : e;
      }
      function rU(e) {
        return e = oe(e), e && zw.test(e) ? e.replace(cs, "\\$&") : e;
      }
      var oU = wr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), iU = wr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), aU = bd("toLowerCase");
      function sU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        if (!n || l >= n)
          return e;
        var c = (n - l) / 2;
        return Oi(Zi(c), i) + e + Oi(ki(c), i);
      }
      function lU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        return n && l < n ? e + Oi(n - l, i) : e;
      }
      function cU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        return n && l < n ? Oi(n - l, i) + e : e;
      }
      function uU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), VV(oe(e).replace(us, ""), n || 0);
      }
      function dU(e, n, i) {
        return (i ? Pe(e, n, i) : n === r) ? n = 1 : n = P(n), zs(oe(e), n);
      }
      function fU() {
        var e = arguments, n = oe(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var hU = wr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function pU(e, n, i) {
        return i && typeof i != "number" && Pe(e, n, i) && (n = i = r), i = i === r ? It : i >>> 0, i ? (e = oe(e), e && (typeof n == "string" || n != null && !dl(n)) && (n = at(n), !n && lr(e)) ? wn(bt(e), 0, i) : e.split(n, i)) : [];
      }
      var mU = wr(function(e, n, i) {
        return e + (i ? " " : "") + pl(n);
      });
      function wU(e, n, i) {
        return e = oe(e), i = i == null ? 0 : xn(P(i), 0, e.length), n = at(n), e.slice(i, i + n.length) == n;
      }
      function VU(e, n, i) {
        var l = h.templateSettings;
        i && Pe(e, n, i) && (n = r), e = oe(e), n = qi({}, n, l, Cd);
        var c = qi({}, n.imports, l.imports, Cd), p = Je(c), m = Ms(c, p), V, g, Z = 0, b = n.interpolate || di, J = "__p += '", C = Zs(
          (n.escape || di).source + "|" + b.source + "|" + (b === ru ? Lw : di).source + "|" + (n.evaluate || di).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (ie.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++k1 + "]") + `
`;
        e.replace(C, function(G, K, te, lt, je, ct) {
          return te || (te = lt), J += e.slice(Z, ct).replace(r1, H1), K && (V = !0, J += `' +
__e(` + K + `) +
'`), je && (g = !0, J += `';
` + je + `;
__p += '`), te && (J += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), Z = ct + G.length, G;
        }), J += `';
`;
        var z = ie.call(n, "variable") && n.variable;
        if (!z)
          J = `with (obj) {
` + J + `
}
`;
        else if (jw.test(z))
          throw new _(f);
        J = (g ? J.replace(Fw, "") : J).replace(Aw, "$1").replace(Ww, "$1;"), J = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var j = bf(function() {
          return ne(p, O + "return " + J).apply(r, m);
        });
        if (j.source = J, ul(j))
          throw j;
        return j;
      }
      function vU(e) {
        return oe(e).toLowerCase();
      }
      function TU(e) {
        return oe(e).toUpperCase();
      }
      function gU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return xu(e);
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = bt(n), p = Bu(l, c), m = Iu(l, c) + 1;
        return wn(l, p, m).join("");
      }
      function UU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return e.slice(0, Ou(e) + 1);
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = Iu(l, bt(n)) + 1;
        return wn(l, 0, c).join("");
      }
      function RU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return e.replace(us, "");
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = Bu(l, bt(n));
        return wn(l, c).join("");
      }
      function NU(e, n) {
        var i = Le, l = we;
        if (pe(n)) {
          var c = "separator" in n ? n.separator : c;
          i = "length" in n ? P(n.length) : i, l = "omission" in n ? at(n.omission) : l;
        }
        e = oe(e);
        var p = e.length;
        if (lr(e)) {
          var m = bt(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var V = i - cr(l);
        if (V < 1)
          return l;
        var g = m ? wn(m, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return g + l;
        if (m && (V += g.length - V), dl(c)) {
          if (e.slice(V).search(c)) {
            var Z, b = g;
            for (c.global || (c = Zs(c.source, oe(ou.exec(c)) + "g")), c.lastIndex = 0; Z = c.exec(b); )
              var J = Z.index;
            g = g.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(at(c), V) != V) {
          var C = g.lastIndexOf(c);
          C > -1 && (g = g.slice(0, C));
        }
        return g + l;
      }
      function yU(e) {
        return e = oe(e), e && Cw.test(e) ? e.replace(tu, K1) : e;
      }
      var MU = wr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), pl = bd("toUpperCase");
      function Zf(e, n, i) {
        return e = oe(e), n = i ? r : n, n === r ? j1(e) ? nV(e) : D1(e) : e.match(n) || [];
      }
      var bf = X(function(e, n) {
        try {
          return ot(e, r, n);
        } catch (i) {
          return ul(i) ? i : new _(i);
        }
      }), kU = Lt(function(e, n) {
        return wt(n, function(i) {
          i = Qt(i), jt(e, i, ll(e[i], e));
        }), e;
      });
      function ZU(e) {
        var n = e == null ? 0 : e.length, i = Q();
        return e = n ? he(e, function(l) {
          if (typeof l[1] != "function")
            throw new Vt(d);
          return [i(l[0]), l[1]];
        }) : [], X(function(l) {
          for (var c = -1; ++c < n; ) {
            var p = e[c];
            if (ot(p[0], this, l))
              return ot(p[1], this, l);
          }
        });
      }
      function bU(e) {
        return KV(Tt(e, R));
      }
      function ml(e) {
        return function() {
          return e;
        };
      }
      function JU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var EU = Ed(), SU = Ed(!0);
      function et(e) {
        return e;
      }
      function wl(e) {
        return ad(typeof e == "function" ? e : Tt(e, R));
      }
      function FU(e) {
        return ld(Tt(e, R));
      }
      function AU(e, n) {
        return cd(e, Tt(n, R));
      }
      var WU = X(function(e, n) {
        return function(i) {
          return mo(i, e, n);
        };
      }), CU = X(function(e, n) {
        return function(i) {
          return mo(e, i, n);
        };
      });
      function Vl(e, n, i) {
        var l = Je(n), c = Ai(n, l);
        i == null && !(pe(n) && (c.length || !l.length)) && (i = n, n = e, e = this, c = Ai(n, Je(n)));
        var p = !(pe(i) && "chain" in i) || !!i.chain, m = qt(e);
        return wt(c, function(V) {
          var g = n[V];
          e[V] = g, m && (e.prototype[V] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var b = e(this.__wrapped__), J = b.__actions__ = $e(this.__actions__);
              return J.push({ func: g, args: arguments, thisArg: e }), b.__chain__ = Z, b;
            }
            return g.apply(e, un([this.value()], arguments));
          });
        }), e;
      }
      function xU() {
        return We._ === this && (We._ = lV), this;
      }
      function vl() {
      }
      function BU(e) {
        return e = P(e), X(function(n) {
          return ud(n, e);
        });
      }
      var IU = Xs(he), DU = Xs(Su), OU = Xs(gs);
      function Jf(e) {
        return nl(e) ? Us(Qt(e)) : wv(e);
      }
      function QU(e) {
        return function(n) {
          return e == null ? r : Bn(e, n);
        };
      }
      var zU = Fd(), GU = Fd(!0);
      function Tl() {
        return [];
      }
      function gl() {
        return !1;
      }
      function YU() {
        return {};
      }
      function _U() {
        return "";
      }
      function HU() {
        return !0;
      }
      function PU(e, n) {
        if (e = P(e), e < 1 || e > _e)
          return [];
        var i = It, l = Oe(e, It);
        n = Q(n), e -= It;
        for (var c = ys(l, n); ++i < e; )
          n(i);
        return c;
      }
      function jU(e) {
        return H(e) ? he(e, Qt) : st(e) ? [e] : $e(jd(oe(e)));
      }
      function XU(e) {
        var n = ++aV;
        return oe(e) + n;
      }
      var LU = Di(function(e, n) {
        return e + n;
      }, 0), $U = Ls("ceil"), qU = Di(function(e, n) {
        return e / n;
      }, 1), KU = Ls("floor");
      function eR(e) {
        return e && e.length ? Fi(e, et, Cs) : r;
      }
      function tR(e, n) {
        return e && e.length ? Fi(e, Q(n, 2), Cs) : r;
      }
      function nR(e) {
        return Wu(e, et);
      }
      function rR(e, n) {
        return Wu(e, Q(n, 2));
      }
      function oR(e) {
        return e && e.length ? Fi(e, et, Ds) : r;
      }
      function iR(e, n) {
        return e && e.length ? Fi(e, Q(n, 2), Ds) : r;
      }
      var aR = Di(function(e, n) {
        return e * n;
      }, 1), sR = Ls("round"), lR = Di(function(e, n) {
        return e - n;
      }, 0);
      function cR(e) {
        return e && e.length ? Ns(e, et) : 0;
      }
      function uR(e, n) {
        return e && e.length ? Ns(e, Q(n, 2)) : 0;
      }
      return h.after = FT, h.ary = af, h.assign = Tg, h.assignIn = gf, h.assignInWith = qi, h.assignWith = gg, h.at = Ug, h.before = sf, h.bind = ll, h.bindAll = kU, h.bindKey = lf, h.castArray = YT, h.chain = nf, h.chunk = Kv, h.compact = e0, h.concat = t0, h.cond = ZU, h.conforms = bU, h.constant = ml, h.countBy = cT, h.create = Rg, h.curry = cf, h.curryRight = uf, h.debounce = df, h.defaults = Ng, h.defaultsDeep = yg, h.defer = AT, h.delay = WT, h.difference = n0, h.differenceBy = r0, h.differenceWith = o0, h.drop = i0, h.dropRight = a0, h.dropRightWhile = s0, h.dropWhile = l0, h.fill = c0, h.filter = dT, h.flatMap = pT, h.flatMapDeep = mT, h.flatMapDepth = wT, h.flatten = qd, h.flattenDeep = u0, h.flattenDepth = d0, h.flip = CT, h.flow = EU, h.flowRight = SU, h.fromPairs = f0, h.functions = Sg, h.functionsIn = Fg, h.groupBy = VT, h.initial = p0, h.intersection = m0, h.intersectionBy = w0, h.intersectionWith = V0, h.invert = Wg, h.invertBy = Cg, h.invokeMap = TT, h.iteratee = wl, h.keyBy = gT, h.keys = Je, h.keysIn = Ke, h.map = Hi, h.mapKeys = Bg, h.mapValues = Ig, h.matches = FU, h.matchesProperty = AU, h.memoize = ji, h.merge = Dg, h.mergeWith = Uf, h.method = WU, h.methodOf = CU, h.mixin = Vl, h.negate = Xi, h.nthArg = BU, h.omit = Og, h.omitBy = Qg, h.once = xT, h.orderBy = UT, h.over = IU, h.overArgs = BT, h.overEvery = DU, h.overSome = OU, h.partial = cl, h.partialRight = ff, h.partition = RT, h.pick = zg, h.pickBy = Rf, h.property = Jf, h.propertyOf = QU, h.pull = U0, h.pullAll = ef, h.pullAllBy = R0, h.pullAllWith = N0, h.pullAt = y0, h.range = zU, h.rangeRight = GU, h.rearg = IT, h.reject = MT, h.remove = M0, h.rest = DT, h.reverse = al, h.sampleSize = ZT, h.set = Yg, h.setWith = _g, h.shuffle = bT, h.slice = k0, h.sortBy = ST, h.sortedUniq = A0, h.sortedUniqBy = W0, h.split = pU, h.spread = OT, h.tail = C0, h.take = x0, h.takeRight = B0, h.takeRightWhile = I0, h.takeWhile = D0, h.tap = eT, h.throttle = QT, h.thru = _i, h.toArray = Vf, h.toPairs = Nf, h.toPairsIn = yf, h.toPath = jU, h.toPlainObject = Tf, h.transform = Hg, h.unary = zT, h.union = O0, h.unionBy = Q0, h.unionWith = z0, h.uniq = G0, h.uniqBy = Y0, h.uniqWith = _0, h.unset = Pg, h.unzip = sl, h.unzipWith = tf, h.update = jg, h.updateWith = Xg, h.values = Tr, h.valuesIn = Lg, h.without = H0, h.words = Zf, h.wrap = GT, h.xor = P0, h.xorBy = j0, h.xorWith = X0, h.zip = L0, h.zipObject = $0, h.zipObjectDeep = q0, h.zipWith = K0, h.entries = Nf, h.entriesIn = yf, h.extend = gf, h.extendWith = qi, Vl(h, h), h.add = LU, h.attempt = bf, h.camelCase = eU, h.capitalize = Mf, h.ceil = $U, h.clamp = $g, h.clone = _T, h.cloneDeep = PT, h.cloneDeepWith = jT, h.cloneWith = HT, h.conformsTo = XT, h.deburr = kf, h.defaultTo = JU, h.divide = qU, h.endsWith = tU, h.eq = Et, h.escape = nU, h.escapeRegExp = rU, h.every = uT, h.find = fT, h.findIndex = Ld, h.findKey = Mg, h.findLast = hT, h.findLastIndex = $d, h.findLastKey = kg, h.floor = KU, h.forEach = rf, h.forEachRight = of, h.forIn = Zg, h.forInRight = bg, h.forOwn = Jg, h.forOwnRight = Eg, h.get = fl, h.gt = LT, h.gte = $T, h.has = Ag, h.hasIn = hl, h.head = Kd, h.identity = et, h.includes = vT, h.indexOf = h0, h.inRange = qg, h.invoke = xg, h.isArguments = On, h.isArray = H, h.isArrayBuffer = qT, h.isArrayLike = qe, h.isArrayLikeObject = ge, h.isBoolean = KT, h.isBuffer = Vn, h.isDate = eg, h.isElement = tg, h.isEmpty = ng, h.isEqual = rg, h.isEqualWith = og, h.isError = ul, h.isFinite = ig, h.isFunction = qt, h.isInteger = hf, h.isLength = Li, h.isMap = pf, h.isMatch = ag, h.isMatchWith = sg, h.isNaN = lg, h.isNative = cg, h.isNil = dg, h.isNull = ug, h.isNumber = mf, h.isObject = pe, h.isObjectLike = ve, h.isPlainObject = Uo, h.isRegExp = dl, h.isSafeInteger = fg, h.isSet = wf, h.isString = $i, h.isSymbol = st, h.isTypedArray = vr, h.isUndefined = hg, h.isWeakMap = pg, h.isWeakSet = mg, h.join = v0, h.kebabCase = oU, h.last = Ut, h.lastIndexOf = T0, h.lowerCase = iU, h.lowerFirst = aU, h.lt = wg, h.lte = Vg, h.max = eR, h.maxBy = tR, h.mean = nR, h.meanBy = rR, h.min = oR, h.minBy = iR, h.stubArray = Tl, h.stubFalse = gl, h.stubObject = YU, h.stubString = _U, h.stubTrue = HU, h.multiply = aR, h.nth = g0, h.noConflict = xU, h.noop = vl, h.now = Pi, h.pad = sU, h.padEnd = lU, h.padStart = cU, h.parseInt = uU, h.random = Kg, h.reduce = NT, h.reduceRight = yT, h.repeat = dU, h.replace = fU, h.result = Gg, h.round = sR, h.runInContext = v, h.sample = kT, h.size = JT, h.snakeCase = hU, h.some = ET, h.sortedIndex = Z0, h.sortedIndexBy = b0, h.sortedIndexOf = J0, h.sortedLastIndex = E0, h.sortedLastIndexBy = S0, h.sortedLastIndexOf = F0, h.startCase = mU, h.startsWith = wU, h.subtract = lR, h.sum = cR, h.sumBy = uR, h.template = VU, h.times = PU, h.toFinite = Kt, h.toInteger = P, h.toLength = vf, h.toLower = vU, h.toNumber = Rt, h.toSafeInteger = vg, h.toString = oe, h.toUpper = TU, h.trim = gU, h.trimEnd = UU, h.trimStart = RU, h.truncate = NU, h.unescape = yU, h.uniqueId = XU, h.upperCase = MU, h.upperFirst = pl, h.each = rf, h.eachRight = of, h.first = Kd, Vl(h, function() {
        var e = {};
        return Dt(h, function(n, i) {
          ie.call(h.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), h.VERSION = s, wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), wt(["drop", "take"], function(e, n) {
        ee.prototype[e] = function(i) {
          i = i === r ? 1 : ke(P(i), 0);
          var l = this.__filtered__ && !n ? new ee(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Oe(i, l.__takeCount__) : l.__views__.push({
            size: Oe(i, It),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ee.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), wt(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, l = i == Ne || i == Fe;
        ee.prototype[e] = function(c) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Q(c, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), wt(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        ee.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), wt(["initial", "tail"], function(e, n) {
        var i = "drop" + (n ? "" : "Right");
        ee.prototype[e] = function() {
          return this.__filtered__ ? new ee(this) : this[i](1);
        };
      }), ee.prototype.compact = function() {
        return this.filter(et);
      }, ee.prototype.find = function(e) {
        return this.filter(e).head();
      }, ee.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ee.prototype.invokeMap = X(function(e, n) {
        return typeof e == "function" ? new ee(this) : this.map(function(i) {
          return mo(i, e, n);
        });
      }), ee.prototype.reject = function(e) {
        return this.filter(Xi(Q(e)));
      }, ee.prototype.slice = function(e, n) {
        e = P(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new ee(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = P(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, ee.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ee.prototype.toArray = function() {
        return this.take(It);
      }, Dt(ee.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), c = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !c || (h.prototype[n] = function() {
          var m = this.__wrapped__, V = l ? [1] : arguments, g = m instanceof ee, Z = V[0], b = g || H(m), J = function(K) {
            var te = c.apply(h, un([K], V));
            return l && C ? te[0] : te;
          };
          b && i && typeof Z == "function" && Z.length != 1 && (g = b = !1);
          var C = this.__chain__, O = !!this.__actions__.length, z = p && !C, j = g && !O;
          if (!p && b) {
            m = j ? m : new ee(this);
            var G = e.apply(m, V);
            return G.__actions__.push({ func: _i, args: [J], thisArg: r }), new vt(G, C);
          }
          return z && j ? e.apply(this, V) : (G = this.thru(J), z ? l ? G.value()[0] : G.value() : G);
        });
      }), wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Vi[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        h.prototype[e] = function() {
          var c = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(H(p) ? p : [], c);
          }
          return this[i](function(m) {
            return n.apply(H(m) ? m : [], c);
          });
        };
      }), Dt(ee.prototype, function(e, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          ie.call(hr, l) || (hr[l] = []), hr[l].push({ name: n, func: i });
        }
      }), hr[Ii(r, A).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = yV, ee.prototype.reverse = MV, ee.prototype.value = kV, h.prototype.at = tT, h.prototype.chain = nT, h.prototype.commit = rT, h.prototype.next = oT, h.prototype.plant = aT, h.prototype.reverse = sT, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = lT, h.prototype.first = h.prototype.head, so && (h.prototype[so] = iT), h;
    }, ur = rV();
    Fn ? ((Fn.exports = ur)._ = ur, ws._ = ur) : We._ = ur;
  }).call(Ro);
})(me, me.exports);
const EN = "/alarms?_s=", za = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, SN = async (t, o) => {
  try {
    return (await Jn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      za
    )).status === 204;
  } catch {
    return !1;
  }
}, FN = async (t, o) => {
  try {
    return (await Jn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      za
    )).status === 204;
  } catch {
    return !1;
  }
}, AN = async (t) => {
  try {
    const o = t.join(",alarm.id==");
    return (await bn.put(
      `alarms?_s=alarm.id==${o}&clear=true`,
      null,
      za
    )).status == 204;
  } catch {
    return !1;
  }
}, WN = async () => {
  try {
    const t = `${EN}isSituation==true&limit=0`, o = await bn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, CN = async () => {
  try {
    const t = await bn("/alarms?limit=0");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, xN = async (t) => {
  try {
    const o = t.join(",id=="), r = await bn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, wm = async (t) => {
  try {
    const o = await bn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, BN = async () => {
  try {
    const t = await bn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((s) => me.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, IN = async (t, o, r) => {
  try {
    return (await bn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      za
    )).status == 204;
  } catch {
    return !1;
  }
}, DN = async (t, o) => {
  try {
    return (await bn.delete(`/alarms/${t}/${o}`)).status == 204;
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
}, ON = "/alec", QN = "/alec/engine/configuration", Vm = "/alec/agreement/configuration", zN = "/alec/situation/statusList", vm = async (t) => {
  try {
    return (await Jn.post(`${Vm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, GN = async () => {
  try {
    const t = await Jn.get(`${Vm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, YN = async (t, o) => {
  try {
    return (await Jn.post(QN, {
      distanceMeasureName: o ? ft.HELLINGER_OPTION : ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Tm = async (t, o) => {
  try {
    return (await Jn.post(`${ON}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, _N = async () => {
  try {
    const t = await Jn.get(zN);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, HN = window.Pinia.defineStore, jr = HN("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    nodes: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await BN();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await WN(), o = await CN();
      let r = [];
      o && (r = me.exports.mapKeys(o, (a) => a.id));
      const s = await _N();
      if (t) {
        const a = t.alarm.map((f) => {
          const w = f.relatedAlarms.map((T) => r[T.id]), U = s.filter(
            (T) => parseInt(T.id) === f.id
          );
          return f.alarms = w, f.status = U && U[0] ? U[0].status : "CREATED", f;
        }), u = me.exports.groupBy(a, "status"), d = [
          ...u.CREATED || [],
          ...u.ACCEPTED || [],
          ...u.REJECTED || []
        ];
        this.situations = d;
      }
    },
    async getSituation(t) {
      const o = await wm(t);
      if (o) {
        const r = o.relatedAlarms.map((d) => d.id), s = await xN(r);
        o.alarms = s;
        const a = me.exports.cloneDeep(this.situations), u = this.situations.findIndex((d) => d.id == t);
        a[u] = o, this.situations = a;
      }
    }
  }
}), PN = window.Vue.openBlock, jN = window.Vue.createElementBlock, XN = window.Vue.createElementVNode;
var LN = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $N = {}, qN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KN = /* @__PURE__ */ XN("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), ey = [
  KN
];
function ty(t, o) {
  return PN(), jN("svg", qN, ey);
}
var Cc = /* @__PURE__ */ LN($N, [["render", ty]]);
var ny = Object.defineProperty, eh = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, th = (t, o, r) => o in t ? ny(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, nh = (t, o) => {
  for (var r in o || (o = {}))
    ry.call(o, r) && th(t, r, o[r]);
  if (eh)
    for (var r of eh(o))
      oy.call(o, r) && th(t, r, o[r]);
  return t;
};
const iy = window.Vue.defineComponent, ay = window.Vue.toRaw, xl = window.Vue.h;
var sy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ly = {
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
}, cy = iy({
  props: ly,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = ay(this.icon);
    return this.$slots.default ? xl("span", { class: "feather-icon-container" }, [
      xl(this.$slots.default()[0], nh({
        class: o
      }, r))
    ]) : xl(s, nh({
      class: o
    }, r));
  }
});
var se = /* @__PURE__ */ sy(cy, [["__scopeId", "data-v-52cbf270"]]);
const uy = window.Vue.openBlock, dy = window.Vue.createElementBlock, fy = window.Vue.createElementVNode;
var hy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const py = {}, my = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wy = /* @__PURE__ */ fy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Vy = [
  wy
];
function vy(t, o) {
  return uy(), dy("svg", my, Vy);
}
var gm = /* @__PURE__ */ hy(py, [["render", vy]]);
const Ty = window.Vue.defineComponent, tn = window.Vue.unref, rh = window.Vue.normalizeClass, No = window.Vue.createElementVNode, Bl = window.Vue.toDisplayString, oh = window.Vue.createVNode, Rr = window.Vue.openBlock, Nr = window.Vue.createElementBlock, Il = window.Vue.createCommentVNode, gy = window.Vue.createTextVNode, Uy = window.Vue.renderList, Ry = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ny = { class: "content" }, yy = { class: "title-row" }, My = { class: "title" }, ky = {
  key: 0,
  class: "accepted"
}, Zy = {
  key: 1,
  class: "rejected"
}, by = {
  key: 0,
  class: "count-info"
}, Jy = /* @__PURE__ */ gy(" Alarms: "), Ey = { class: "info-title" }, Sy = /* @__PURE__ */ Ty({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(t, { emit: o }) {
    const r = t, s = ft.ACCEPTED, a = ft.REJECTED, u = () => {
      var d;
      o("situation-selected", (d = r.situationInfo) == null ? void 0 : d.id);
    };
    return (d, f) => {
      var w, U, T;
      return Rr(), Nr("div", {
        onClick: u,
        class: rh(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == tn(a)
        }])
      }, [
        No("div", {
          class: rh(["severity-line", [`${(U = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        No("div", Ny, [
          No("div", yy, [
            No("div", My, "Situation " + Bl((T = r.situationInfo) == null ? void 0 : T.id), 1),
            r.situationInfo.status == tn(s) ? (Rr(), Nr("div", ky, [
              oh(tn(se), {
                icon: tn(Cc),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Il("", !0),
            r.situationInfo.status == tn(a) ? (Rr(), Nr("div", Zy, [
              oh(tn(se), {
                icon: tn(gm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Il("", !0)
          ]),
          r.situationInfo.alarms ? (Rr(), Nr("div", by, [
            Jy,
            No("span", Ey, Bl(r.situationInfo.relatedAlarms.length), 1)
          ])) : Il("", !0),
          (Rr(!0), Nr(Ry, null, Uy(tn(me.exports.keys)(tn(me.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (R) => (Rr(), Nr("div", {
            class: "info-title",
            key: R
          }, " - " + Bl(R), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Fy = /* @__PURE__ */ be(Sy, [["__scopeId", "data-v-1bda4968"]]);
const Ki = window.Vue.ref, Ay = window.Vue.inject, Wy = window.Vue.computed, Cy = window.Vue.onMounted, xy = {
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
}, By = (t) => {
  const o = Ki(!1), r = Ki(), s = Ki(t.controls), a = Ki(t.id), u = () => {
    r.value && r.value.focus();
  }, d = Ay("registerTab");
  Cy(() => {
    if (r.value && d) {
      const w = r.value.parentElement, U = w && w.parentElement ? w.parentElement : void 0, T = Array.from(U ? U.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? T.indexOf(w) : -1;
      d({
        el: r.value,
        focus: u,
        disabled: t.disabled,
        selected: o,
        id: a,
        controls: s,
        index: R
      });
    }
  });
  const f = Wy(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: a.value,
    "aria-selected": o.value,
    "aria-controls": s.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: f,
    tab: r
  };
};
const Gr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, Yr = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var Iy = Object.defineProperty, Dy = Object.defineProperties, Oy = Object.getOwnPropertyDescriptors, ih = Object.getOwnPropertySymbols, Qy = Object.prototype.hasOwnProperty, zy = Object.prototype.propertyIsEnumerable, ah = (t, o, r) => o in t ? Iy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, sh = (t, o) => {
  for (var r in o || (o = {}))
    Qy.call(o, r) && ah(t, r, o[r]);
  if (ih)
    for (var r of ih(o))
      zy.call(o, r) && ah(t, r, o[r]);
  return t;
}, Gy = (t, o) => Dy(t, Oy(o));
const Yy = window.Vue.defineComponent, _y = window.Vue.h;
var Hy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Py = {
  center: {
    type: Boolean,
    default: !1
  }
}, jy = Yy({
  props: Py,
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
        const { clientWidth: o, clientHeight: r } = this.parent, s = Math.round(Math.max(o, r));
        let a = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), d = t.pageY, f = t.pageX;
          a = {
            top: `${d - u.top - s / 2 - document.documentElement.scrollTop}px`,
            left: `${f - u.left - s / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = Gy(sh({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Yr(this.failsafe), this.failsafe = Gr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return _y("div", {
        style: sh({}, this.styles),
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
var Kn = /* @__PURE__ */ Hy(jy, [["__scopeId", "data-v-18e2a5db"]]);
const le = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, L = {
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
}, lh = window.Vue.ref, Xy = window.Vue.toRef, Ly = window.Vue.watch, ch = window.Vue.provide, $y = {
  prop: "modelValue",
  event: "update:modelValue"
}, qy = {
  "update:modelValue": (t) => !0
}, Ky = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, eM = (t, o) => {
  const r = Xy(t, "modelValue"), s = lh(t.modelValue), a = lh([]);
  Ly(r, (F) => {
    w(F);
  });
  const u = (F) => {
    F.preventDefault(), a.value.some((W, B) => W.tab && W.tab.el.contains(F.target) ? (f(B), w(B), !0) : !1);
  }, d = (F) => {
    if (((q) => q.shiftKey || q.ctrlKey || q.metaKey || q.altKey)(F))
      return;
    const B = F.keyCode, A = (q) => {
      q.stopPropagation(), q.preventDefault();
    }, S = a.value.filter((q) => q.tab && !q.tab.disabled), E = a.value.findIndex((q) => q.tab && q.tab.el.contains(document.activeElement));
    let D = E !== -1 ? E : s.value;
    const k = [L.RIGHT], Y = [L.LEFT], $ = [L.ENTER, L.SPACE];
    t.vertical && (k.push(L.DOWN), Y.push(L.UP)), k.indexOf(B) > -1 ? (D++, D >= S.length && (D = 0), A(F), f(a.value.indexOf(S[D]))) : Y.indexOf(B) > -1 && (D--, D < 0 && (D = S.length - 1), A(F), f(a.value.indexOf(S[D]))), $.indexOf(B) > -1 && w(D);
  }, f = (F) => {
    a.value.forEach(function(W, B) {
      F === B && W.tab && W.tab.focus();
    });
  }, w = (F) => {
    const W = a.value[F];
    !W || W.tab && W.tab.disabled || (a.value.forEach((B, A) => {
      B.tab && (B.tab.selected = F === A), B.panel && (B.panel.selected = F === A);
    }), s.value = F, o.emit("update:modelValue", F));
  };
  ch("registerTab", (F) => {
    const W = F.index;
    W > -1 && (a.value[W] = { ...a.value[W], tab: F }, a.value = [...a.value], R());
  }), ch("registerPanel", (F) => {
    const W = F.index;
    W > -1 && (a.value[W] = {
      ...a.value[W],
      panel: F
    }, a.value = [...a.value], R());
  });
  const R = () => {
    a.value.forEach(({ tab: F, panel: W }, B) => {
      if (W && F) {
        const A = F.id || le("tab"), S = F.controls || le("panel");
        F.controls = S, F.id = A, W.tab = A, W.id = S;
      }
      B === s.value && (W && (W.selected = !0), F && (F.selected = !0));
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
    selected: s,
    pairs: a
  };
}, ea = window.Vue.ref, tM = window.Vue.inject, nM = window.Vue.computed, rM = window.Vue.onMounted, oM = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, iM = (t) => {
  const o = ea(!1), r = ea(), s = ea(t.tab), a = ea(t.id), u = tM("registerPanel");
  rM(() => {
    if (u) {
      const f = r.value, w = f && f.parentElement ? f.parentElement : void 0, U = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: U
      });
    }
  });
  const d = nM(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": s.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: d,
    panel: r
  };
}, xc = window.Vue.defineComponent, aM = window.Vue.resolveComponent, Bc = window.Vue.openBlock, Ic = window.Vue.createElementBlock, Io = window.Vue.createElementVNode, Um = window.Vue.mergeProps, Za = window.Vue.renderSlot, sM = window.Vue.createVNode, lM = window.Vue.normalizeStyle, cM = window.Vue.toHandlers, uM = window.Vue.withDirectives, dM = window.Vue.normalizeProps, fM = window.Vue.guardReactiveProps, hM = window.Vue.vShow;
var Dc = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pM = xy, mM = xc({
  props: pM,
  setup(t) {
    return By(t);
  },
  components: {
    FeatherRipple: Kn
  }
}), wM = { role: "presentation" }, VM = { class: "tab-text" };
function vM(t, o, r, s, a, u) {
  const d = aM("FeatherRipple");
  return Bc(), Ic("li", wM, [
    Io("button", Um(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      Io("span", VM, [
        Za(t.$slots, "default", {}, void 0, !0)
      ]),
      sM(d)
    ], 16)
  ]);
}
var uh = /* @__PURE__ */ Dc(mM, [["render", vM], ["__scopeId", "data-v-e6bb52b6"]]);
const TM = Ky, gM = qy, UM = xc({
  model: $y,
  emits: gM,
  props: TM,
  setup(t, o) {
    return eM(t, o);
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
        const t = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - t.left, s = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${s}px)`;
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
function yM(t, o, r, s, a, u) {
  return Bc(), Ic("div", RM, [
    Io("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: lM({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    Io("ul", Um(t.attrs, cM(t.listeners)), [
      Za(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Io("div", NM, [
      Za(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var MM = /* @__PURE__ */ Dc(UM, [["render", yM], ["__scopeId", "data-v-27adffb9"]]);
const kM = oM, ZM = xc({
  props: kM,
  setup(t) {
    return iM(t);
  }
});
function bM(t, o, r, s, a, u) {
  return uM((Bc(), Ic("div", dM(fM(t.attrs)), [
    Za(t.$slots, "default")
  ], 16)), [
    [hM, t.selected]
  ]);
}
var dh = /* @__PURE__ */ Dc(ZM, [["render", bM]]);
const JM = window.Vue.defineComponent, EM = window.Vue.toDisplayString, SM = window.Vue.normalizeClass, FM = window.Vue.openBlock, AM = window.Vue.createElementBlock, WM = window.Vue.createCommentVNode, CM = /* @__PURE__ */ JM({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (FM(), AM("span", {
      key: 0,
      class: SM(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, EM(o.severity), 3)) : WM("", !0);
  }
});
const Rm = /* @__PURE__ */ be(CM, [["__scopeId", "data-v-83c2cdce"]]), xM = window.Vue.defineComponent, fh = window.Vue.toDisplayString, hh = window.Vue.createElementVNode, BM = window.Vue.openBlock, IM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const DM = { class: "box" }, OM = { class: "label" }, QM = { class: "date" }, zM = /* @__PURE__ */ xM({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (BM(), IM("div", DM, [
      hh("div", OM, fh(o.label), 1),
      hh("div", QM, fh(o.info), 1)
    ]));
  }
});
const Dl = /* @__PURE__ */ be(zM, [["__scopeId", "data-v-b4afa751"]]), GM = window.Vue.defineComponent, YM = window.Vue.unref, _M = window.Vue.renderList, HM = window.Vue.Fragment, Ol = window.Vue.openBlock, Ql = window.Vue.createElementBlock, PM = window.Vue.toDisplayString, jM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XM = { class: "alarms-list" }, LM = /* @__PURE__ */ GM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (Ol(), Ql("div", XM, [
      (Ol(!0), Ql(HM, null, _M(YM(me.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Ol(), Ql("div", {
        class: jM(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, PM(a.length), 3))), 128))
    ]));
  }
});
const $M = /* @__PURE__ */ be(LM, [["__scopeId", "data-v-52d63440"]]);
const qM = window.Vue.computed, Nm = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = qM(() => t.value[s] ? t.value[s] : o[s]);
  }), r;
}, KM = window.Vue.openBlock, ek = window.Vue.createElementBlock, tk = window.Vue.createElementVNode;
var nk = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const rk = {}, ok = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ik = /* @__PURE__ */ tk("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), ak = [
  ik
];
function sk(t, o) {
  return KM(), ek("svg", ok, ak);
}
var Ko = /* @__PURE__ */ nk(rk, [["render", sk]]);
const ph = window.Vue.computed, lk = (t, o, r) => {
  const s = ph(() => o.value.filter((u) => !u.disabled)), a = ph(() => t.value ? s.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const ck = window.Vue.openBlock, uk = window.Vue.createElementBlock, Oc = window.Vue.createElementVNode;
var dk = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fk = {}, hk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pk = /* @__PURE__ */ Oc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), mk = /* @__PURE__ */ Oc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), wk = /* @__PURE__ */ Oc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Vk = [
  pk,
  mk,
  wk
];
function vk(t, o) {
  return ck(), uk("svg", hk, Vk);
}
var ym = /* @__PURE__ */ dk(fk, [["render", vk]]), Tk = Object.defineProperty, gk = Object.defineProperties, Uk = Object.getOwnPropertyDescriptors, mh = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Nk = Object.prototype.propertyIsEnumerable, wh = (t, o, r) => o in t ? Tk(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Mm = (t, o) => {
  for (var r in o || (o = {}))
    Rk.call(o, r) && wh(t, r, o[r]);
  if (mh)
    for (var r of mh(o))
      Nk.call(o, r) && wh(t, r, o[r]);
  return t;
}, km = (t, o) => gk(t, Uk(o));
const Xr = window.Vue.defineComponent, Ho = window.Vue.resolveComponent, zt = window.Vue.openBlock, xr = window.Vue.createElementBlock, yk = window.Vue.createVNode, ba = window.Vue.createBlock, Mk = window.Vue.withModifiers, _r = window.Vue.inject, Po = window.Vue.computed, kk = window.Vue.normalizeClass, yr = window.Vue.createElementVNode, Ja = window.Vue.toDisplayString, ga = window.Vue.renderSlot, Do = window.Vue.createCommentVNode, Zk = window.Vue.withDirectives, bk = window.Vue.vShow, hc = window.Vue.ref, Vh = window.Vue.toRef, vh = window.Vue.nextTick, pc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Qc = window.Vue.provide, Th = window.Vue.isRef, Jk = window.Vue.onBeforeUnmount;
var ei = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ek = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Sk = Xr({
  props: Ek,
  components: {
    FeatherIcon: se
  }
}), Fk = ["title"];
function Ak(t, o, r, s, a, u) {
  const d = Ho("FeatherIcon");
  return zt(), xr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    yk(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, Fk);
}
var Wk = /* @__PURE__ */ ei(Sk, [["render", Ak], ["__scopeId", "data-v-4265058e"]]);
const Ck = Xr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Ko;
    }
  },
  components: {
    ActionIcon: Wk
  }
});
function xk(t, o, r, s, a, u) {
  const d = Ho("ActionIcon");
  return zt(), ba(d, {
    onClick: o[0] || (o[0] = Mk((f) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Bk = /* @__PURE__ */ ei(Ck, [["render", xk]]);
const Ik = Xr({
  computed: {
    errorIcon() {
      return ym;
    }
  },
  components: {
    FeatherIcon: se
  }
});
function Dk(t, o, r, s, a, u) {
  const d = Ho("FeatherIcon");
  return zt(), ba(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Ok = /* @__PURE__ */ ei(Ik, [["render", Dk], ["__scopeId", "data-v-0b8faef3"]]);
const Qk = {
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
}, zk = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, Gk = Xr({
  emits: zk,
  props: Qk,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = _r("wrapperOptions", {}), o = _r("validationErrorMessage", !1), r = Po(() => t.error ? t.error : o && o.value ? o.value : !1);
    return km(Mm({}, t), { error: r });
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
        const s = this.$el.querySelector(".prefix");
        this.prefixWidth = s ? s.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: Bk,
    ErrorIcon: Ok
  }
}), Yk = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, _k = ["for"], Hk = { class: "prefix" }, Pk = { class: "post" };
function jk(t, o, r, s, a, u) {
  const d = Ho("ClearIcon"), f = Ho("ErrorIcon");
  return zt(), xr("div", {
    class: kk(["feather-input-wrapper-container", t.containerCls])
  }, [
    yr("fieldset", Yk, [
      yr("legend", null, Ja(t.label), 1)
    ]),
    yr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ja(t.label), 9, _k),
    yr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      yr("div", Hk, [
        ga(t.$slots, "pre", {}, void 0, !0)
      ]),
      ga(t.$slots, "default", {}, void 0, !0),
      yr("div", Pk, [
        t.showClear && t.computedClearText ? (zt(), ba(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Do("", !0),
        t.error ? (zt(), ba(f, { key: 1 })) : Do("", !0),
        ga(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Zm = /* @__PURE__ */ ei(Gk, [["render", jk], ["__scopeId", "data-v-4db296db"]]);
const Xk = Xr({
  setup() {
    const t = _r("subTextOptions", {}), o = _r("validationErrorMessage", !1), r = Po(() => t.error ? t.error : o && o.value ? o.value : "");
    return km(Mm({}, t), { error: r });
  }
}), Lk = { class: "feather-input-sub-text" }, $k = {
  key: 0,
  class: "feather-input-spacer"
}, qk = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Kk = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function eZ(t, o, r, s, a, u) {
  return Zk((zt(), xr("div", Lk, [
    !t.hint && !t.error.length ? (zt(), xr("div", $k, "\xA0")) : Do("", !0),
    t.hint && !t.error.length ? (zt(), xr("div", qk, Ja(t.hint), 1)) : Do("", !0),
    t.error.length > 0 ? (zt(), xr("div", Kk, Ja(t.error), 1)) : Do("", !0),
    ga(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [bk, !t.inline || t.hint || t.error.length]
  ]);
}
var Ga = /* @__PURE__ */ ei(Xk, [["render", eZ], ["__scopeId", "data-v-8e0ac99e"]]);
const tZ = {
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
Xr({
  props: tZ,
  setup(t) {
    const o = _r("featherFormErrors", hc([])), r = Vh(t, "errorList"), s = Po(() => {
      var T;
      return (T = r.value) != null && T.length ? r.value : o.value;
    }), a = Vh(t, "generalError"), u = (T) => {
      document.getElementById(T).focus();
    }, d = (T) => T.replace(/ \*$/, ""), f = hc(), w = (T) => `${d(T.label)} - ${T.message}`, U = Po(() => (s.value.length && vh(() => f.value.focus()), t.headingText(s.value)));
    return pc(a, (T) => {
      T.length && vh(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: U,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const Ya = (t, o, r, s, a) => {
  const u = _r("featherForm", !1);
  if (s && u && t.value) {
    const d = hc("");
    Qc("validationErrorMessage", d);
    const f = () => {
      if (a && Th(a) && a.value)
        return d.value = a.value, {
          success: !1,
          message: a.value,
          inputId: t.value,
          label: r
        };
      try {
        return s.validateSync(o.value), d.value = "", { success: !0 };
      } catch (T) {
        const R = T;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, U = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return a && Th(a) && pc(a, () => {
      u.runValidation();
    }), pc(t, (T, R) => {
      T && u && u.register(T, U), R && u && u.deregister(R);
    }, { immediate: !0 }), Jk(() => {
      u.deregister(t.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, _a = (t) => ({
  inherittedAttrs: Po(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), Ha = {
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
}, Pa = (t) => {
  Qc("subTextOptions", t);
}, bm = {
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
}, Jm = (t) => {
  Qc("wrapperOptions", t);
}, ta = window.Vue.ref, nZ = window.Vue.watch, rZ = window.Vue.watchEffect, gh = window.Vue.computed, zl = window.Vue.provide, Em = (t, o, r, s, a) => {
  const u = ta([]), d = ta(), f = ta(), w = ta();
  rZ(() => {
    if (!u.value.length)
      return;
    const A = u.value.map((S) => S.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[A.indexOf(t.value)]), !d.value && u.value.length) {
      let S = u.value.filter((E) => !E.disabled);
      S = S.length ? S : u.value, f.value = S[0], f.value.first = !0;
    }
  }), nZ(d, (A, S) => {
    S && (S.checked = !1), A && (A.checked = !0);
  });
  const U = (A) => {
    A && A.disabled || (f.value && (f.value.first = !1), d.value !== A && (o("update:modelValue", A.value), d.value = A, A.focus()));
  }, T = gh(() => d.value || f.value), R = lk(T, u, U), y = gh(() => le("feather-radio-group"));
  w.value = y.value;
  const { validate: x } = Ya(w, t, r, s, a);
  return zl("register", (A) => {
    u.value = [...u.value, A], w.value === y.value && (w.value = A.id);
  }), zl("select", U), zl("blur", (A) => {
    o("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          d.value ? U(d.value) : f.value && U(f.value);
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
    validate: x,
    firstElementId: w,
    groupId: y
  };
};
var oZ = Object.defineProperty, iZ = Object.defineProperties, aZ = Object.getOwnPropertyDescriptors, Uh = Object.getOwnPropertySymbols, sZ = Object.prototype.hasOwnProperty, lZ = Object.prototype.propertyIsEnumerable, Rh = (t, o, r) => o in t ? oZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Dr = (t, o) => {
  for (var r in o || (o = {}))
    sZ.call(o, r) && Rh(t, r, o[r]);
  if (Uh)
    for (var r of Uh(o))
      lZ.call(o, r) && Rh(t, r, o[r]);
  return t;
}, Sm = (t, o) => iZ(t, aZ(o));
const En = window.Vue.defineComponent, Oo = window.Vue.inject, Ea = window.Vue.computed, Qo = window.Vue.ref, Mt = window.Vue.resolveComponent, ht = window.Vue.openBlock, ti = window.Vue.createElementBlock, Fm = window.Vue.normalizeClass, Yt = window.Vue.renderSlot, yn = window.Vue.createBlock, jo = window.Vue.createCommentVNode, Sa = window.Vue.createElementVNode, cZ = window.Vue.withModifiers, ja = window.Vue.createVNode, Am = window.Vue.toRef, mc = window.Vue.mergeProps, ln = window.Vue.withCtx, uZ = window.Vue.h, dZ = window.Vue.provide;
var Sn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fZ = {
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
}, hZ = En({
  props: fZ,
  setup(t) {
    const o = Oo("isCondensed", null), r = Ea(() => o || t.condensed), s = Qo(!1);
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
    FeatherRipple: Kn
  }
}), pZ = ["aria-disabled"];
function mZ(t, o, r, s, a, u) {
  const d = Mt("FeatherRipple");
  return ht(), ti("div", {
    class: Fm(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Yt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (ht(), yn(d, { key: 0 })) : jo("", !0)
  ], 42, pZ);
}
var Xa = /* @__PURE__ */ Sn(hZ, [["render", mZ], ["__scopeId", "data-v-44d413dc"]]);
const wZ = {
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
}, VZ = En({
  emits: ["delete"],
  props: wZ,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: Ko
    };
  },
  components: {
    FeatherIcon: se
  }
}), vZ = { class: "chip-delete" }, TZ = ["aria-label", "aria-describedby"];
function gZ(t, o, r, s, a, u) {
  const d = Mt("FeatherIcon");
  return ht(), ti("span", vZ, [
    Sa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = cZ((...f) => t.handleDelete && t.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      ja(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, TZ)
  ]);
}
var UZ = /* @__PURE__ */ Sn(VZ, [["render", gZ], ["__scopeId", "data-v-4bae6cb4"]]);
const RZ = En({
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
}), NZ = ["title"];
function yZ(t, o, r, s, a, u) {
  return ht(), ti("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 8, NZ);
}
var La = /* @__PURE__ */ Sn(RZ, [["render", yZ], ["__scopeId", "data-v-1a0445b2"]]);
const MZ = {}, kZ = {
  class: "chip-icon",
  role: "presentation"
};
function ZZ(t, o) {
  return ht(), ti("span", kZ, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var $a = /* @__PURE__ */ Sn(MZ, [["render", ZZ], ["__scopeId", "data-v-2230176f"]]);
const Nh = {
  delete: "Remove"
}, bZ = En({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Nh
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = Nm(Am(t, "labels"), Nh), s = Ea(() => le("chip-text")), a = () => {
      t.disabled || o.emit("click");
    }, u = Dr({}, o.attrs);
    return t.disabled && delete u.onClick, Sm(Dr({}, r), {
      chipTextId: s,
      handleClick: a,
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
    Chip: Xa,
    DeleteIcon: UZ,
    Label: La,
    PreIcon: $a
  }
}), JZ = ["aria-disabled"];
function EZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), f = Mt("Label"), w = Mt("DeleteIcon"), U = Mt("Chip");
  return ht(), yn(U, mc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: ln(() => [
      Sa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Sa("span", mc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (ht(), yn(d, { key: 0 }, {
            default: ln(() => [
              Yt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : jo("", !0),
          ja(f, { id: t.chipTextId }, {
            default: ln(() => [
              Yt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, JZ),
      t.canDelete ? (ht(), yn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (T) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : jo("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var SZ = /* @__PURE__ */ Sn(bZ, [["render", EZ], ["__scopeId", "data-v-48b2704a"]]);
const FZ = En({
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
    Chip: Xa,
    Label: La,
    PreIcon: $a
  }
}), AZ = ["aria-disabled"];
function WZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), f = Mt("Label"), w = Mt("Chip");
  return ht(), yn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: ln(() => [
      Sa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (ht(), yn(d, { key: 0 }, {
          default: ln(() => [
            Yt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : jo("", !0),
        ja(f, null, {
          default: ln(() => [
            Yt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, AZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var CZ = /* @__PURE__ */ Sn(FZ, [["render", WZ], ["__scopeId", "data-v-3e0c4eba"]]);
const xZ = En({
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
    const o = Qo(!1), r = Qo(!1), s = Ea(() => le("chip-label-id")), a = Ea(() => o.value || r.value ? 0 : -1), u = Qo(), d = () => {
      u.value.$el.focus();
    }, f = Oo("register", (y) => {
    }), w = Oo("blur", (y) => {
    }), U = Oo("select", (y) => {
    }), T = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return f(T), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: w,
      click: () => {
        U(T);
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
    Chip: Xa,
    Label: La,
    PreIcon: $a
  }
});
function BZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), f = Mt("Label"), w = Mt("Chip");
  return ht(), yn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: Fm(["focus hover", { selected: t.checked }]),
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
    default: ln(() => [
      t.hasIcon ? (ht(), yn(d, { key: 0 }, {
        default: ln(() => [
          Yt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : jo("", !0),
      ja(f, { id: t.labelId }, {
        default: ln(() => [
          Yt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var IZ = /* @__PURE__ */ Sn(xZ, [["render", BZ], ["__scopeId", "data-v-bbcc2f70"]]);
const DZ = {
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
}, yh = En({
  props: DZ,
  setup() {
    return { format: Oo("chipListFormat", "") };
  },
  render() {
    const t = (o) => uZ(o, Dr(Dr({}, this.$props), this.$attrs), Dr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(SZ) : this.format === "radio" ? t(IZ) : t(CZ);
  }
}), OZ = {
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
}, QZ = En({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: OZ,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    dZ("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const d = Am(t, "modelValue");
      return Sm(Dr({
        attrs: {
          role: "radiogroup"
        }
      }, Em(d, o.emit, t.label, {}, Qo(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), zZ = ["aria-label"];
function GZ(t, o, r, s, a, u) {
  return ht(), ti("div", mc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 16, zZ);
}
var YZ = /* @__PURE__ */ Sn(QZ, [["render", GZ], ["__scopeId", "data-v-1e06f41d"]]);
function er(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ie(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ye(t) {
  Ie(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function _Z(t, o) {
  Ie(2, arguments);
  var r = Ye(t).getTime(), s = er(o);
  return new Date(r + s);
}
var HZ = {};
function ni() {
  return HZ;
}
function wc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function PZ(t, o) {
  Ie(2, arguments);
  var r = Ye(t), s = Ye(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function jZ(t) {
  return Ie(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function XZ(t) {
  if (Ie(1, arguments), !jZ(t) && typeof t != "number")
    return !1;
  var o = Ye(t);
  return !isNaN(Number(o));
}
function LZ(t, o) {
  Ie(2, arguments);
  var r = er(o);
  return _Z(t, -r);
}
var $Z = 864e5;
function qZ(t) {
  Ie(1, arguments);
  var o = Ye(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / $Z) + 1;
}
function Fa(t) {
  Ie(1, arguments);
  var o = 1, r = Ye(t), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Wm(t) {
  Ie(1, arguments);
  var o = Ye(t), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Fa(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = Fa(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function KZ(t) {
  Ie(1, arguments);
  var o = Wm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Fa(r);
  return s;
}
var eb = 6048e5;
function tb(t) {
  Ie(1, arguments);
  var o = Ye(t), r = Fa(o).getTime() - KZ(o).getTime();
  return Math.round(r / eb) + 1;
}
function Aa(t, o) {
  var r, s, a, u, d, f, w, U;
  Ie(1, arguments);
  var T = ni(), R = er((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : T.weekStartsOn) !== null && s !== void 0 ? s : (w = T.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ye(t), x = y.getUTCDay(), F = (x < R ? 7 : 0) + x - R;
  return y.setUTCDate(y.getUTCDate() - F), y.setUTCHours(0, 0, 0, 0), y;
}
function Cm(t, o) {
  var r, s, a, u, d, f, w, U;
  Ie(1, arguments);
  var T = Ye(t), R = T.getUTCFullYear(), y = ni(), x = er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(x >= 1 && x <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = new Date(0);
  F.setUTCFullYear(R + 1, 0, x), F.setUTCHours(0, 0, 0, 0);
  var W = Aa(F, o), B = new Date(0);
  B.setUTCFullYear(R, 0, x), B.setUTCHours(0, 0, 0, 0);
  var A = Aa(B, o);
  return T.getTime() >= W.getTime() ? R + 1 : T.getTime() >= A.getTime() ? R : R - 1;
}
function nb(t, o) {
  var r, s, a, u, d, f, w, U;
  Ie(1, arguments);
  var T = ni(), R = er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : T.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = T.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Cm(t, o), x = new Date(0);
  x.setUTCFullYear(y, 0, R), x.setUTCHours(0, 0, 0, 0);
  var F = Aa(x, o);
  return F;
}
var rb = 6048e5;
function ob(t, o) {
  Ie(1, arguments);
  var r = Ye(t), s = Aa(r, o).getTime() - nb(r, o).getTime();
  return Math.round(s / rb) + 1;
}
function ae(t, o) {
  for (var r = t < 0 ? "-" : "", s = Math.abs(t).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var ib = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return ae(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : ae(r + 1, 2);
  },
  d: function(t, o) {
    return ae(t.getUTCDate(), o.length);
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
    return ae(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return ae(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return ae(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return ae(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, s = t.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return ae(a, o.length);
  }
};
const vn = ib;
var Mr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ab = {
  G: function(t, o, r) {
    var s = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
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
  y: function(t, o, r) {
    if (o === "yo") {
      var s = t.getUTCFullYear(), a = s > 0 ? s : 1 - s;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return vn.y(t, o);
  },
  Y: function(t, o, r, s) {
    var a = Cm(t, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var d = u % 100;
      return ae(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ae(u, o.length);
  },
  R: function(t, o) {
    var r = Wm(t);
    return ae(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return ae(r, o.length);
  },
  Q: function(t, o, r) {
    var s = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return ae(s, 2);
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
  q: function(t, o, r) {
    var s = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(s);
      case "qq":
        return ae(s, 2);
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
  M: function(t, o, r) {
    var s = t.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return vn.M(t, o);
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
  L: function(t, o, r) {
    var s = t.getUTCMonth();
    switch (o) {
      case "L":
        return String(s + 1);
      case "LL":
        return ae(s + 1, 2);
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
  w: function(t, o, r, s) {
    var a = ob(t, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ae(a, o.length);
  },
  I: function(t, o, r) {
    var s = tb(t);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ae(s, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : vn.d(t, o);
  },
  D: function(t, o, r) {
    var s = qZ(t);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : ae(s, o.length);
  },
  E: function(t, o, r) {
    var s = t.getUTCDay();
    switch (o) {
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
  e: function(t, o, r, s) {
    var a = t.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(u);
      case "ee":
        return ae(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, o, r, s) {
    var a = t.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(u);
      case "cc":
        return ae(u, o.length);
      case "co":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, o, r) {
    var s = t.getUTCDay(), a = s === 0 ? 7 : s;
    switch (o) {
      case "i":
        return String(a);
      case "ii":
        return ae(a, o.length);
      case "io":
        return r.ordinalNumber(a, {
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
  a: function(t, o, r) {
    var s = t.getUTCHours(), a = s / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, o, r) {
    var s = t.getUTCHours(), a;
    switch (s === 12 ? a = Mr.noon : s === 0 ? a = Mr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, o, r) {
    var s = t.getUTCHours(), a;
    switch (s >= 17 ? a = Mr.evening : s >= 12 ? a = Mr.afternoon : s >= 4 ? a = Mr.morning : a = Mr.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, o, r) {
    if (o === "ho") {
      var s = t.getUTCHours() % 12;
      return s === 0 && (s = 12), r.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return vn.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : vn.H(t, o);
  },
  K: function(t, o, r) {
    var s = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ae(s, o.length);
  },
  k: function(t, o, r) {
    var s = t.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ae(s, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : vn.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : vn.s(t, o);
  },
  S: function(t, o) {
    return vn.S(t, o);
  },
  X: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return kh(u);
      case "XXXX":
      case "XX":
        return Xn(u);
      case "XXXXX":
      case "XXX":
      default:
        return Xn(u, ":");
    }
  },
  x: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return kh(u);
      case "xxxx":
      case "xx":
        return Xn(u);
      case "xxxxx":
      case "xxx":
      default:
        return Xn(u, ":");
    }
  },
  O: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Mh(u, ":");
      case "OOOO":
      default:
        return "GMT" + Xn(u, ":");
    }
  },
  z: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Mh(u, ":");
      case "zzzz":
      default:
        return "GMT" + Xn(u, ":");
    }
  },
  t: function(t, o, r, s) {
    var a = s._originalDate || t, u = Math.floor(a.getTime() / 1e3);
    return ae(u, o.length);
  },
  T: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTime();
    return ae(u, o.length);
  }
};
function Mh(t, o) {
  var r = t > 0 ? "-" : "+", s = Math.abs(t), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var d = o || "";
  return r + String(a) + d + ae(u, 2);
}
function kh(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + ae(Math.abs(t) / 60, 2);
  }
  return Xn(t, o);
}
function Xn(t, o) {
  var r = o || "", s = t > 0 ? "-" : "+", a = Math.abs(t), u = ae(Math.floor(a / 60), 2), d = ae(a % 60, 2);
  return s + u + r + d;
}
const sb = ab;
var Zh = function(t, o) {
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
}, xm = function(t, o) {
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
}, lb = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Zh(t, o);
  var u;
  switch (s) {
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
  return u.replace("{{date}}", Zh(s, o)).replace("{{time}}", xm(a, o));
}, cb = {
  p: xm,
  P: lb
};
const ub = cb;
var db = ["D", "DD"], fb = ["YY", "YYYY"];
function hb(t) {
  return db.indexOf(t) !== -1;
}
function pb(t) {
  return fb.indexOf(t) !== -1;
}
function bh(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var mb = {
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
}, wb = function(t, o, r) {
  var s, a = mb[t];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Vb = wb;
function Gl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, s = t.formats[r] || t.formats[t.defaultWidth];
    return s;
  };
}
var vb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Tb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ub = {
  date: Gl({
    formats: vb,
    defaultWidth: "full"
  }),
  time: Gl({
    formats: Tb,
    defaultWidth: "full"
  }),
  dateTime: Gl({
    formats: gb,
    defaultWidth: "full"
  })
};
const Rb = Ub;
var Nb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yb = function(t, o, r, s) {
  return Nb[t];
};
const Mb = yb;
function yo(t) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : u;
      a = t.formattingValues[d] || t.formattingValues[u];
    } else {
      var f = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      a = t.values[w] || t.values[f];
    }
    var U = t.argumentCallback ? t.argumentCallback(o) : o;
    return a[U];
  };
}
var kb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, bb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Jb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Eb = {
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
}, Sb = {
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
}, Fb = function(t, o) {
  var r = Number(t), s = r % 100;
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
}, Ab = {
  ordinalNumber: Fb,
  era: yo({
    values: kb,
    defaultWidth: "wide"
  }),
  quarter: yo({
    values: Zb,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: yo({
    values: bb,
    defaultWidth: "wide"
  }),
  day: yo({
    values: Jb,
    defaultWidth: "wide"
  }),
  dayPeriod: yo({
    values: Eb,
    defaultWidth: "wide",
    formattingValues: Sb,
    defaultFormattingWidth: "wide"
  })
};
const Wb = Ab;
function Mo(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && t.matchPatterns[s] || t.matchPatterns[t.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var d = u[0], f = s && t.parsePatterns[s] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(f) ? xb(f, function(R) {
      return R.test(d);
    }) : Cb(f, function(R) {
      return R.test(d);
    }), U;
    U = t.valueCallback ? t.valueCallback(w) : w, U = r.valueCallback ? r.valueCallback(U) : U;
    var T = o.slice(d.length);
    return {
      value: U,
      rest: T
    };
  };
}
function Cb(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function xb(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function Bb(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.match(t.matchPattern);
    if (!s)
      return null;
    var a = s[0], u = o.match(t.parsePattern);
    if (!u)
      return null;
    var d = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var f = o.slice(a.length);
    return {
      value: d,
      rest: f
    };
  };
}
var Ib = /^(\d+)(th|st|nd|rd)?/i, Db = /\d+/i, Ob = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qb = {
  any: [/^b/i, /^(a|c)/i]
}, zb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, _b = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Hb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Pb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Xb = {
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
}, Lb = {
  ordinalNumber: Bb({
    matchPattern: Ib,
    parsePattern: Db,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Mo({
    matchPatterns: Ob,
    defaultMatchWidth: "wide",
    parsePatterns: Qb,
    defaultParseWidth: "any"
  }),
  quarter: Mo({
    matchPatterns: zb,
    defaultMatchWidth: "wide",
    parsePatterns: Gb,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Mo({
    matchPatterns: Yb,
    defaultMatchWidth: "wide",
    parsePatterns: _b,
    defaultParseWidth: "any"
  }),
  day: Mo({
    matchPatterns: Hb,
    defaultMatchWidth: "wide",
    parsePatterns: Pb,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mo({
    matchPatterns: jb,
    defaultMatchWidth: "any",
    parsePatterns: Xb,
    defaultParseWidth: "any"
  })
};
const $b = Lb;
var qb = {
  code: "en-US",
  formatDistance: Vb,
  formatLong: Rb,
  formatRelative: Mb,
  localize: Wb,
  match: $b,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Bm = qb;
var Kb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, eJ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tJ = /^'([^]*?)'?$/, nJ = /''/g, rJ = /[a-zA-Z]/;
function oJ(t, o, r) {
  var s, a, u, d, f, w, U, T, R, y, x, F, W, B, A, S, E, D;
  Ie(2, arguments);
  var k = String(o), Y = ni(), $ = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : Y.locale) !== null && s !== void 0 ? s : Bm, q = er((u = (d = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (U = r.locale) === null || U === void 0 || (T = U.options) === null || T === void 0 ? void 0 : T.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = Y.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var De = er((x = (F = (W = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (A = r.locale) === null || A === void 0 || (S = A.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && W !== void 0 ? W : Y.weekStartsOn) !== null && F !== void 0 ? F : (E = Y.locale) === null || E === void 0 || (D = E.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && x !== void 0 ? x : 0);
  if (!(De >= 0 && De <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!$.localize)
    throw new RangeError("locale must contain localize property");
  if (!$.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Le = Ye(t);
  if (!XZ(Le))
    throw new RangeError("Invalid time value");
  var we = wc(Le), Ve = LZ(Le, we), Te = {
    firstWeekContainsDate: q,
    weekStartsOn: De,
    locale: $,
    _originalDate: Le
  }, Ne = k.match(eJ).map(function(ce) {
    var Fe = ce[0];
    if (Fe === "p" || Fe === "P") {
      var Ae = ub[Fe];
      return Ae(ce, $.formatLong);
    }
    return ce;
  }).join("").match(Kb).map(function(ce) {
    if (ce === "''")
      return "'";
    var Fe = ce[0];
    if (Fe === "'")
      return iJ(ce);
    var Ae = sb[Fe];
    if (Ae)
      return !(r != null && r.useAdditionalWeekYearTokens) && pb(ce) && bh(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && hb(ce) && bh(ce, o, String(t)), Ae(Ve, ce, $.localize, Te);
    if (Fe.match(rJ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return ce;
  }).join("");
  return Ne;
}
function iJ(t) {
  var o = t.match(tJ);
  return o ? o[1].replace(nJ, "'") : t;
}
function Im(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function aJ(t) {
  return Im({}, t);
}
var Jh = 1e3 * 60, Wa = 60 * 24, Eh = Wa * 30, Sh = Wa * 365;
function sJ(t, o, r) {
  var s, a, u;
  Ie(2, arguments);
  var d = ni(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : d.locale) !== null && s !== void 0 ? s : Bm;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = PZ(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var U = Im(aJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), T, R;
  w > 0 ? (T = Ye(o), R = Ye(t)) : (T = Ye(t), R = Ye(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), x;
  if (y === "floor")
    x = Math.floor;
  else if (y === "ceil")
    x = Math.ceil;
  else if (y === "round")
    x = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var F = R.getTime() - T.getTime(), W = F / Jh, B = wc(R) - wc(T), A = (F - B) / Jh, S = r == null ? void 0 : r.unit, E;
  if (S ? E = String(S) : W < 1 ? E = "second" : W < 60 ? E = "minute" : W < Wa ? E = "hour" : A < Eh ? E = "day" : A < Sh ? E = "month" : E = "year", E === "second") {
    var D = x(F / 1e3);
    return f.formatDistance("xSeconds", D, U);
  } else if (E === "minute") {
    var k = x(W);
    return f.formatDistance("xMinutes", k, U);
  } else if (E === "hour") {
    var Y = x(W / 60);
    return f.formatDistance("xHours", Y, U);
  } else if (E === "day") {
    var $ = x(A / Wa);
    return f.formatDistance("xDays", $, U);
  } else if (E === "month") {
    var q = x(A / Eh);
    return q === 12 && S !== "month" ? f.formatDistance("xYears", 1, U) : f.formatDistance("xMonths", q, U);
  } else if (E === "year") {
    var De = x(A / Sh);
    return f.formatDistance("xYears", De, U);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const Zn = (t) => {
  let o = "";
  if (t)
    try {
      o = oJ(new Date(t), ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
};
var lJ = Object.defineProperty, cJ = Object.defineProperties, uJ = Object.getOwnPropertyDescriptors, Fh = Object.getOwnPropertySymbols, dJ = Object.prototype.hasOwnProperty, fJ = Object.prototype.propertyIsEnumerable, Ah = (t, o, r) => o in t ? lJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, ko = (t, o) => {
  for (var r in o || (o = {}))
    dJ.call(o, r) && Ah(t, r, o[r]);
  if (Fh)
    for (var r of Fh(o))
      fJ.call(o, r) && Ah(t, r, o[r]);
  return t;
}, Wh = (t, o) => cJ(t, uJ(o));
const hJ = window.Vue.defineComponent, pJ = window.Vue.inject, Zo = window.Vue.h;
var mJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
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
}, VJ = hJ({
  inheritAttrs: !1,
  props: wJ,
  setup() {
    return { hasTooltip: pJ("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = ko({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = t();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Zo(Kn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Zo(o, Wh(ko(ko({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Zo(Kn, { center: !0 })
      ]);
    }
    const d = Zo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Zo(o, Wh(ko(ko({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var Mn = /* @__PURE__ */ mJ(VJ, [["__scopeId", "data-v-702d1074"]]);
const vJ = window.Vue.openBlock, TJ = window.Vue.createElementBlock, gJ = window.Vue.createElementVNode;
var UJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RJ = {}, NJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yJ = /* @__PURE__ */ gJ("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), MJ = [
  yJ
];
function kJ(t, o) {
  return vJ(), TJ("svg", NJ, MJ);
}
var ZJ = /* @__PURE__ */ UJ(RJ, [["render", kJ]]);
const bJ = window.Vue.openBlock, JJ = window.Vue.createElementBlock, EJ = window.Vue.createStaticVNode;
var SJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FJ = {}, AJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WJ = /* @__PURE__ */ EJ('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), CJ = [
  WJ
];
function xJ(t, o) {
  return bJ(), JJ("svg", AJ, CJ);
}
var Dm = /* @__PURE__ */ SJ(FJ, [["render", xJ]]);
const BJ = window.Vue.defineComponent, At = window.Vue.unref, Yl = window.Vue.createVNode, zc = window.Vue.createElementVNode, _l = window.Vue.withCtx, na = window.Vue.openBlock, Hl = window.Vue.createBlock, Pl = window.Vue.createCommentVNode, IJ = window.Vue.normalizeClass, DJ = window.Vue.createElementBlock, OJ = window.Vue.pushScopeId, QJ = window.Vue.popScopeId, Gc = (t) => (OJ("data-v-cc0a6466"), t = t(), QJ(), t), zJ = /* @__PURE__ */ Gc(() => /* @__PURE__ */ zc("span", null, "Acknowledge", -1)), GJ = /* @__PURE__ */ Gc(() => /* @__PURE__ */ zc("span", null, "Escalate", -1)), YJ = /* @__PURE__ */ Gc(() => /* @__PURE__ */ zc("span", null, "Clear", -1)), _J = /* @__PURE__ */ BJ({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  emits: ["action-clicked"],
  setup(t, { emit: o }) {
    const r = t, s = jr(), a = async (d) => {
      await SN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id)), r.isSituation && await Tm(
        r.situationId,
        ft.ACCEPTED.toLowerCase()
      );
    }, u = async (d) => {
      await FN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id), s.getSituation(r.situationId));
    };
    return (d, f) => (na(), DJ("div", {
      class: IJ(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? Pl("", !0) : (na(), Hl(At(Mn), {
        key: 0,
        class: "acction-btn",
        onClick: f[0] || (f[0] = () => a(!0))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(Cc),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          zJ
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (na(), Hl(At(Mn), {
        key: 1,
        class: "acction-btn",
        onClick: f[1] || (f[1] = () => u(At(ft).ESCALATE))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(ZJ),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          GJ
        ]),
        _: 1
      })) : Pl("", !0),
      r.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (na(), Hl(At(Mn), {
        key: 2,
        class: "acction-btn",
        onClick: f[2] || (f[2] = () => u(At(ft).CLEAR))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(Dm),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          YJ
        ]),
        _: 1
      })) : Pl("", !0)
    ], 2));
  }
});
const Om = /* @__PURE__ */ be(_J, [["__scopeId", "data-v-cc0a6466"]]);
var HJ = Object.defineProperty, PJ = Object.defineProperties, jJ = Object.getOwnPropertyDescriptors, Ch = Object.getOwnPropertySymbols, XJ = Object.prototype.hasOwnProperty, LJ = Object.prototype.propertyIsEnumerable, xh = (t, o, r) => o in t ? HJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Vc = (t, o) => {
  for (var r in o || (o = {}))
    XJ.call(o, r) && xh(t, r, o[r]);
  if (Ch)
    for (var r of Ch(o))
      LJ.call(o, r) && xh(t, r, o[r]);
  return t;
}, Qm = (t, o) => PJ(t, jJ(o));
const zm = window.Vue.defineComponent, $J = window.Vue.inject, qJ = window.Vue.resolveComponent, jl = window.Vue.openBlock, Bh = window.Vue.createElementBlock, Br = window.Vue.createElementVNode, KJ = window.Vue.createBlock, Ih = window.Vue.createCommentVNode, e2 = window.Vue.renderSlot, t2 = window.Vue.pushScopeId, n2 = window.Vue.popScopeId, Xl = window.Vue.toRef, ra = window.Vue.computed, r2 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var o2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i2 = {
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
}, a2 = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, s2 = zm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: a2,
  props: i2,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: $J("registerCheckbox", (o) => {
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
      (t.keyCode === L.SPACE || t.keyCode === L.ENTER) && this.updateValue(), t.keyCode === L.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: Kn
  }
}), l2 = (t) => (t2("data-v-a7af27e2"), t = t(), n2(), t), c2 = { class: "layout-container" }, u2 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], d2 = { class: "checkbox hover focus" }, f2 = /* @__PURE__ */ l2(() => /* @__PURE__ */ Br("div", { class: "box" }, [
  /* @__PURE__ */ Br("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Br("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Br("div", { class: "indeterminate" })
], -1)), h2 = ["id", "for"];
function p2(t, o, r, s, a, u) {
  const d = qJ("feather-ripple");
  return jl(), Bh("div", c2, [
    Br("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...f) => t.click && t.click(...f)),
      onKeydown: o[1] || (o[1] = (...f) => t.keydown && t.keydown(...f)),
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
      Br("div", d2, [
        f2,
        t.disabled ? Ih("", !0) : (jl(), KJ(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? Ih("", !0) : (jl(), Bh("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        e2(t.$slots, "default", {}, void 0, !0)
      ], 8, h2))
    ], 40, u2)
  ]);
}
var Yc = /* @__PURE__ */ o2(s2, [["render", p2], ["__scopeId", "data-v-a7af27e2"]]);
const m2 = Qm(Vc({}, Ha), {
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
zm({
  props: m2,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    Pa(t);
    const r = Xl(t, "error"), s = ra(() => le("feather-checkbox-group")), a = ra(() => le("feather-input-description")), u = ra(() => le("feather-input-label")), d = ra(() => {
      const T = JSON.parse(JSON.stringify(o.attrs));
      return T["aria-invalid"] || (T["aria-invalid"] = !!r.value), Qm(Vc({}, T), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = r2(s.value), { validate: w } = Ya(f, Xl(t, "modelValue"), t.label, t.schema, Xl(t, "error"));
    return Vc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: d,
      validate: w,
      registerCheckbox: (T) => {
        T && f.value === s.value && (f.value = T);
      }
    }, _a(o.attrs));
  },
  components: {
    InputSubText: Ga
  }
});
const w2 = window.Vue.openBlock, V2 = window.Vue.createElementBlock, Gm = window.Vue.createElementVNode;
var v2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const T2 = {}, g2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U2 = /* @__PURE__ */ Gm("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), R2 = /* @__PURE__ */ Gm("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), N2 = [
  U2,
  R2
];
function y2(t, o) {
  return w2(), V2("svg", g2, N2);
}
var M2 = /* @__PURE__ */ v2(T2, [["render", y2]]);
const Dh = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const Lr = window.Vue.defineComponent, Xo = window.Vue.resolveComponent, Gt = window.Vue.openBlock, Ir = window.Vue.createElementBlock, k2 = window.Vue.createVNode, Ca = window.Vue.createBlock, Z2 = window.Vue.withModifiers, Hr = window.Vue.inject, Lo = window.Vue.computed, b2 = window.Vue.normalizeClass, Nn = window.Vue.createElementVNode, J2 = window.Vue.normalizeStyle, vc = window.Vue.toDisplayString, Ua = window.Vue.renderSlot, zo = window.Vue.createCommentVNode, E2 = window.Vue.pushScopeId, S2 = window.Vue.popScopeId, F2 = window.Vue.withDirectives, A2 = window.Vue.vShow, Tc = window.Vue.ref, Oh = window.Vue.toRef, Qh = window.Vue.nextTick, gc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const _c = window.Vue.provide, zh = window.Vue.isRef, W2 = window.Vue.onBeforeUnmount, C2 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, x2 = Lr({
  props: C2,
  components: {
    FeatherIcon: se
  }
}), ri = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, B2 = ["title"];
function I2(t, o, r, s, a, u) {
  const d = Xo("FeatherIcon");
  return Gt(), Ir("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    k2(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, B2);
}
const D2 = /* @__PURE__ */ ri(x2, [["render", I2], ["__scopeId", "data-v-8bb27a5c"]]), O2 = Lr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Ko;
    }
  },
  components: {
    ActionIcon: D2
  }
});
function Q2(t, o, r, s, a, u) {
  const d = Xo("ActionIcon");
  return Gt(), Ca(d, {
    onClick: o[0] || (o[0] = Z2((f) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const z2 = /* @__PURE__ */ ri(O2, [["render", Q2]]), G2 = Lr({
  computed: {
    errorIcon() {
      return ym;
    }
  },
  components: {
    FeatherIcon: se
  }
});
function Y2(t, o, r, s, a, u) {
  const d = Xo("FeatherIcon");
  return Gt(), Ca(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const _2 = /* @__PURE__ */ ri(G2, [["render", Y2], ["__scopeId", "data-v-2b61105f"]]), H2 = {
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
}, P2 = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, j2 = Lr({
  emits: P2,
  props: H2,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const t = Hr(
      "wrapperOptions",
      {}
    ), o = Hr(
      "validationErrorMessage",
      !1
    ), r = Lo(() => t.error ? t.error : o && o.value ? o.value : !1);
    return { ...t, error: r };
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
      return this.hideLabel && t.push("hide-label"), this.raised && t.push("raised"), this.focused && t.push("focused"), this.error && t.push("error"), this.disabled && t.push("disabled"), this.inline && t.push("inline"), this.hasPre && t.push("has-prefix"), t;
    }
  },
  methods: {
    handleWrapperClick(t) {
      this.disabled || this.$emit("wrapper-click", t);
    }
  },
  mounted() {
    const t = this.$el.querySelector(".feather-input-label");
    if (t) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const s = this.$el.querySelector(".feather-input-label"), { width: a } = s.getBoundingClientRect();
        a > 2 ? this.raised || this.focused ? this.labelWidth = a + "px" : this.labelWidth = a * 0.75 + 8 + "px" : this.labelWidth = "0px";
      };
      this.labelObserver = new MutationObserver(r), this.labelObserver.observe(t, o), this.$nextTick(r);
    }
  },
  unmounted() {
    this.labelObserver && this.labelObserver.disconnect();
  },
  components: {
    ClearIcon: z2,
    ErrorIcon: _2
  }
}), Ym = (t) => (E2("data-v-ab1739ff"), t = t(), S2(), t), X2 = { class: "feather-input-border" }, L2 = /* @__PURE__ */ Ym(() => /* @__PURE__ */ Nn("div", { class: "pre-border" }, null, -1)), $2 = ["for"], q2 = /* @__PURE__ */ Ym(() => /* @__PURE__ */ Nn("div", { class: "post-border" }, null, -1)), K2 = { class: "prefix" }, eE = { class: "post" };
function tE(t, o, r, s, a, u) {
  const d = Xo("ClearIcon"), f = Xo("ErrorIcon");
  return Gt(), Ir("div", {
    class: b2(["feather-input-wrapper-container", t.containerCls])
  }, [
    Nn("div", X2, [
      L2,
      Nn("div", {
        class: "label-border",
        style: J2({ width: t.labelWidth })
      }, [
        Nn("label", {
          class: "feather-input-label",
          for: t.inputId,
          "data-ref-id": "feather-form-element-label"
        }, vc(t.label), 9, $2)
      ], 4),
      q2
    ]),
    Nn("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Nn("div", K2, [
        Ua(t.$slots, "pre", {}, void 0, !0)
      ]),
      Ua(t.$slots, "default", {}, void 0, !0),
      Nn("div", eE, [
        t.showClear && t.computedClearText ? (Gt(), Ca(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : zo("", !0),
        t.error ? (Gt(), Ca(f, { key: 1 })) : zo("", !0),
        Ua(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const nE = /* @__PURE__ */ ri(j2, [["render", tE], ["__scopeId", "data-v-ab1739ff"]]), rE = Lr({
  setup() {
    const t = Hr(
      "subTextOptions",
      {}
    ), o = Hr(
      "validationErrorMessage",
      !1
    ), r = Lo(() => t.error ? t.error : o && o.value ? o.value : "");
    return { ...t, error: r };
  }
}), oE = { class: "feather-input-sub-text" }, iE = {
  key: 0,
  class: "feather-input-spacer"
}, aE = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, sE = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function lE(t, o, r, s, a, u) {
  return F2((Gt(), Ir("div", oE, [
    !t.hint && !t.error.length ? (Gt(), Ir("div", iE, "\xA0")) : zo("", !0),
    t.hint && !t.error.length ? (Gt(), Ir("div", aE, vc(t.hint), 1)) : zo("", !0),
    t.error.length > 0 ? (Gt(), Ir("div", sE, vc(t.error), 1)) : zo("", !0),
    Ua(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [A2, !t.inline || t.hint || t.error.length]
  ]);
}
const cE = /* @__PURE__ */ ri(rE, [["render", lE], ["__scopeId", "data-v-f0789880"]]), uE = {
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
Lr({
  props: uE,
  setup(t) {
    const o = Hr(
      "featherFormErrors",
      Tc([])
    ), r = Oh(t, "errorList"), s = Lo(() => {
      var T;
      return (T = r.value) != null && T.length ? r.value : o.value;
    }), a = Oh(t, "generalError"), u = (T) => {
      document.getElementById(T).focus();
    }, d = (T) => T.replace(/ \*$/, ""), f = Tc(), w = (T) => `${d(T.label)} - ${T.message}`, U = Lo(() => (s.value.length && Qh(() => f.value.focus()), t.headingText(s.value)));
    return gc(a, (T) => {
      T.length && Qh(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: U,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const dE = (t, o, r, s, a) => {
  const u = Hr("featherForm", !1);
  if (s && u && t.value) {
    const d = Tc("");
    _c("validationErrorMessage", d);
    const f = () => {
      if (a && zh(a) && a.value)
        return d.value = a.value, {
          success: !1,
          message: a.value,
          inputId: t.value,
          label: r
        };
      try {
        return s.validateSync(o.value), d.value = "", { success: !0 };
      } catch (T) {
        const R = T;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, U = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return a && zh(a) && gc(a, () => {
      u.runValidation();
    }), gc(
      t,
      (T, R) => {
        T && u && u.register(T, U), R && u && u.deregister(R);
      },
      { immediate: !0 }
    ), W2(() => {
      u.deregister(t.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, fE = (t) => ({
  inherittedAttrs: Lo(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), hE = {
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
}, pE = (t) => {
  _c("subTextOptions", t);
}, mE = {
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
}, wE = (t) => {
  _c("wrapperOptions", t);
}, VE = window.Vue.defineComponent, Ll = window.Vue.toRef, vE = window.Vue.computed, Gh = window.Vue.resolveComponent, Yh = window.Vue.openBlock, _h = window.Vue.createElementBlock, Hh = window.Vue.mergeProps, Ph = window.Vue.createVNode, TE = window.Vue.normalizeClass, jh = window.Vue.withCtx, gE = window.Vue.createElementVNode, UE = window.Vue.toDisplayString, RE = window.Vue.createCommentVNode, NE = {
  ...mE,
  ...hE,
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
}, yE = {
  "update:modelValue": (t) => !0
}, ME = VE({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: yE,
  props: NE,
  setup(t, o) {
    pE(t), wE(t);
    const r = Ll(t, "id"), s = vE(() => r.value ? r.value : Dh("feather-textarea-label")), { validate: a } = dE(
      s,
      Ll(t, "modelValue"),
      t.label,
      t.schema,
      Ll(t, "error")
    );
    return {
      inputId: s,
      incomingId: r,
      validate: a,
      ...fE(o.attrs)
    };
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
      return Dh("feather-textarea-description");
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
      const t = { ...this.$attrs };
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), {
        ...t,
        ...this.listeners,
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (t["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      };
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
    InputSubText: cE,
    InputWrapper: nE
  }
}), kE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, ZE = ["maxlength"], bE = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function JE(t, o, r, s, a, u) {
  const d = Gh("InputWrapper"), f = Gh("InputSubText");
  return Yh(), _h("div", Hh(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    Ph(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: TE(["feather-textarea-content", t.contentCls])
    }, {
      default: jh(() => [
        gE("textarea", Hh(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, ZE)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Ph(f, { id: t.descriptionId }, {
      right: jh(() => [
        t.maxlength ? (Yh(), _h("div", bE, UE(t.charCount), 1)) : RE("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const EE = /* @__PURE__ */ kE(ME, [["render", JE], ["__scopeId", "data-v-eee43a95"]]), SE = window.Pinia.defineStore, _m = SE("appStore", {
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
}), FE = window.Vue.defineComponent, Xh = window.Vue.toDisplayString, bo = window.Vue.createElementVNode, Qn = window.Vue.unref, kr = window.Vue.openBlock, Lh = window.Vue.createBlock, Jo = window.Vue.createCommentVNode, $h = window.Vue.createVNode, oa = window.Vue.createElementBlock, AE = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WE = { class: "row" }, CE = { class: "label" }, xE = { class: "action-icons" }, BE = { class: "icon-btn" }, IE = {
  key: 0,
  class: "icon-btn"
}, DE = {
  key: 1,
  class: "icon-btn"
}, OE = {
  key: 0,
  class: "text"
}, QE = window.Vue.watch, qh = window.Vue.ref, zE = /* @__PURE__ */ FE({
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
    var U;
    const o = t, r = jr(), s = _m(), a = qh(!1), u = qh((U = o.memo) == null ? void 0 : U.body);
    QE(o, () => {
      var T;
      u.value = (T = o.memo) == null ? void 0 : T.body, a.value = !1;
    });
    const d = () => {
      a.value = !a.value;
    }, f = async () => {
      a.value = !1, await DN(o.id, o.type) ? (u.value = "", r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on removing memo :(");
    }, w = async () => {
      a.value = !1, u.value && u.value !== "" && (await IN(o.id, o.type, u.value) ? (r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on saving memo :("));
    };
    return (T, R) => (kr(), oa("div", {
      class: AE([o.boxType === "small" ? "box-small" : "box"])
    }, [
      bo("div", WE, [
        bo("div", CE, Xh(t.label), 1),
        bo("div", xE, [
          bo("div", BE, [
            a.value ? Jo("", !0) : (kr(), Lh(Qn(se), {
              key: 0,
              icon: Qn(M2),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: d
            }, null, 8, ["icon"]))
          ]),
          a.value ? (kr(), oa("div", IE, [
            $h(Qn(se), {
              icon: Qn(Cc),
              "aria-hidden": "true",
              class: "icon save",
              onClick: w
            }, null, 8, ["icon"])
          ])) : Jo("", !0),
          u.value && u.value != "" || a.value ? (kr(), oa("div", DE, [
            $h(Qn(se), {
              icon: Qn(Ko),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Jo("", !0)
        ])
      ]),
      bo("div", null, [
        !a.value && u.value != null ? (kr(), oa("div", OE, Xh(u.value), 1)) : Jo("", !0),
        a.value ? (kr(), Lh(Qn(EE), {
          key: 1,
          class: "textarea",
          modelValue: u.value,
          "onUpdate:modelValue": R[0] || (R[0] = (y) => u.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Jo("", !0)
      ])
    ], 2));
  }
});
const xa = /* @__PURE__ */ be(zE, [["__scopeId", "data-v-c30021c9"]]), GE = window.Vue.defineComponent, $l = window.Vue.unref, Eo = window.Vue.createVNode, ia = window.Vue.toDisplayString, an = window.Vue.createElementVNode, Kh = window.Vue.createTextVNode, YE = window.Vue.openBlock, _E = window.Vue.createElementBlock, HE = window.Vue.createCommentVNode, PE = window.Vue.pushScopeId, jE = window.Vue.popScopeId, Hm = (t) => (PE("data-v-3aa991f7"), t = t(), jE(), t), XE = {
  key: 0,
  class: "card"
}, LE = { class: "row" }, $E = { class: "title" }, qE = ["innerHTML"], KE = /* @__PURE__ */ Hm(() => /* @__PURE__ */ an("strong", null, "First Event", -1)), eS = /* @__PURE__ */ Hm(() => /* @__PURE__ */ an("strong", null, "Last Event", -1)), tS = { class: "section memo-boxes" }, ep = window.Vue.ref, nS = window.Vue.watch, rS = /* @__PURE__ */ GE({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, s = ep(!1), a = ep(r.alarm);
    nS(r, () => {
      a.value = r.alarm, s.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const u = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (f) => {
      const w = await wm(f);
      w && (a.value = w);
    };
    return (f, w) => {
      var U, T, R, y, x;
      return a.value ? (YE(), _E("div", XE, [
        an("div", null, [
          an("div", LE, [
            Eo($l(Yc), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (F) => s.value = F),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            an("div", $E, ia(a.value.nodeLabel) + " - " + ia(a.value.id), 1),
            Eo(Rm, {
              severity: (U = a.value) == null ? void 0 : U.severity
            }, null, 8, ["severity"])
          ]),
          an("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, qE),
          an("div", null, [
            KE,
            Kh(" - " + ia($l(Zn)(a.value.firstEventTime)), 1)
          ]),
          an("div", null, [
            eS,
            Kh(" - " + ia($l(Zn)(a.value.lastEventTime)), 1)
          ]),
          an("div", tS, [
            Eo(xa, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = a.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Eo(xa, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (x = a.value) == null ? void 0 : x.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Eo(Om, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : HE("", !0);
    };
  }
});
const oS = /* @__PURE__ */ be(rS, [["__scopeId", "data-v-3aa991f7"]]), iS = window.Vue.defineComponent, aS = window.Vue.normalizeClass, sS = window.Vue.openBlock, lS = window.Vue.createElementBlock, cS = window.Vue.createCommentVNode, uS = /* @__PURE__ */ iS({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (sS(), lS("span", {
      key: 0,
      class: aS(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : cS("", !0);
  }
});
const dS = /* @__PURE__ */ be(uS, [["__scopeId", "data-v-e08880d6"]]), fS = window.Vue.defineComponent, Go = window.Vue.createElementVNode, nn = window.Vue.unref, Pm = window.Vue.createTextVNode, tp = window.Vue.normalizeClass, aa = window.Vue.withCtx, Zr = window.Vue.createVNode, np = window.Vue.renderList, rp = window.Vue.Fragment, zn = window.Vue.openBlock, So = window.Vue.createElementBlock, hS = window.Vue.toDisplayString, op = window.Vue.createBlock, ip = window.Vue.createCommentVNode, pS = window.Vue.pushScopeId, mS = window.Vue.popScopeId, jm = (t) => (pS("data-v-e75f8105"), t = t(), mS(), t), wS = { class: "container" }, VS = { class: "row" }, vS = /* @__PURE__ */ jm(() => /* @__PURE__ */ Go("div", { class: "title" }, "Alarms", -1)), TS = /* @__PURE__ */ Pm(" ALL "), gS = { class: "row actions" }, US = /* @__PURE__ */ jm(() => /* @__PURE__ */ Go("span", null, "Clear", -1)), RS = { class: "section" }, NS = {
  key: 0,
  class: "alarm-list"
}, ap = window.Vue.ref, yS = window.Vue.watch, MS = window.Vue.computed, kS = window.Vue.reactive, ZS = /* @__PURE__ */ fS({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = jr(), s = ap(!1), a = MS(() => me.exports.keys(me.exports.groupBy(o.alarms, "severity"))), u = ap(["all"]), d = kS({
      selectedAlarms: [],
      alarms: o.alarms
    }), f = (T) => {
      u.value = u.value.filter((R) => R !== "all"), u.value.includes(T) ? u.value = u.value.filter((R) => R !== T) : u.value.push(T), T === "all" || u.value.length === 0 ? (u.value = ["all"], d.alarms = o.alarms) : d.alarms = o.alarms.filter(
        (R) => u.value.includes(R.severity)
      );
    };
    yS(o, () => {
      u.value = ["all"], d.alarms = o.alarms, d.selectedAlarms = [], s.value = !1;
    });
    const w = (T) => {
      d.selectedAlarms.includes(T) ? me.exports.remove(d.selectedAlarms, (R) => R == T) : d.selectedAlarms.push(T);
    }, U = async () => {
      await AN(d.selectedAlarms), r.getSituation(o.situationId), d.selectedAlarms = [], s.value = !1;
    };
    return (T, R) => (zn(), So("div", wS, [
      Go("div", VS, [
        vS,
        nn(a).length > 1 ? (zn(), op(nn(YZ), {
          key: u.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: aa(() => [
            Zr(nn(yh), {
              class: tp({ clicked: u.value.includes("all") }),
              onClick: R[0] || (R[0] = (y) => f("all"))
            }, {
              default: aa(() => [
                TS
              ]),
              _: 1
            }, 8, ["class"]),
            (zn(!0), So(rp, null, np(nn(a), (y) => (zn(), op(nn(yh), {
              class: tp({ clicked: u.value.includes(y) }),
              key: y,
              onClick: (x) => f(y)
            }, {
              default: aa(() => [
                Zr(dS, { severity: y }, null, 8, ["severity"]),
                Pm(hS(y), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })) : ip("", !0)
      ]),
      Go("div", gS, [
        Zr(nn(Yc), {
          modelValue: s.value,
          "onUpdate:modelValue": R[1] || (R[1] = (y) => s.value = y),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Zr(nn(Mn), {
          class: "acction-btn",
          onClick: R[2] || (R[2] = () => U())
        }, {
          default: aa(() => [
            Zr(nn(se), {
              icon: nn(Dm),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            US
          ]),
          _: 1
        })
      ]),
      Go("div", RS, [
        d.alarms.length > 0 ? (zn(), So("div", NS, [
          (zn(!0), So(rp, null, np(d.alarms, (y) => (zn(), So("div", {
            key: y.id
          }, [
            Zr(oS, {
              alarm: y,
              selectAll: s.value,
              "situation-id": o.situationId,
              onAlarmSelected: w
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : ip("", !0)
      ])
    ]));
  }
});
const bS = /* @__PURE__ */ be(ZS, [["__scopeId", "data-v-e75f8105"]]), JS = "/whoami", ES = async () => {
  try {
    const t = await Jn.get(JS);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, SS = window.Pinia.defineStore, oi = SS("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await ES();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await GN();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await vm(t);
        this.allowSave = o;
      }
    }
  }
}), FS = window.Vue.defineComponent, Wt = window.Vue.createVNode, dt = window.Vue.unref, ql = window.Vue.normalizeClass, sa = window.Vue.toDisplayString, Gn = window.Vue.openBlock, Yn = window.Vue.createElementBlock, la = window.Vue.createCommentVNode, AS = window.Vue.withCtx, Ct = window.Vue.createElementVNode, WS = window.Vue.createTextVNode, CS = window.Vue.Fragment, xS = window.Vue.pushScopeId, BS = window.Vue.popScopeId, IS = (t) => (xS("data-v-2ac18d30"), t = t(), BS(), t), DS = { class: "section" }, OS = { class: "action-section" }, QS = {
  key: 0,
  class: "btn-row"
}, zS = { key: 0 }, GS = { key: 1 }, YS = {
  key: 0,
  class: "situation-detail"
}, _S = { class: "situation-info" }, HS = { class: "id" }, PS = { key: 0 }, jS = ["innerHTML"], XS = /* @__PURE__ */ IS(() => /* @__PURE__ */ Ct("p", null, null, -1)), LS = { class: "boxes" }, $S = { class: "parameters" }, qS = { class: "section memo-boxes" }, KS = { key: 0 }, sp = window.Vue.ref, eF = window.Vue.watch, tF = /* @__PURE__ */ FS({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = jr(), a = ft.REJECTED, u = oi(), d = sp(r.situationInfo.status), f = sp(r.situationInfo);
    eF(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const w = (T) => {
      var R, y;
      Tm((R = r.situationInfo) == null ? void 0 : R.id, T.toLowerCase()), d.value = T, o("situation-status-changed", T, (y = r.situationInfo) == null ? void 0 : y.id);
    }, U = () => {
      var T;
      s.selectedSituation = (T = r.situationInfo) == null ? void 0 : T.id, s.getSituations();
    };
    return (T, R) => {
      var y, x, F, W, B, A, S, E, D, k, Y, $;
      return Gn(), Yn(CS, null, [
        Ct("div", DS, [
          Ct("div", OS, [
            Wt(Om, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id,
              onActionClicked: U
            }, null, 8, ["alarm", "situation-id"]),
            dt(u).allowSave ? (Gn(), Yn("div", QS, [
              Wt(dt(Mn), {
                class: ql(["btn", { rejected: d.value == dt(a) }]),
                onClick: R[0] || (R[0] = () => w(dt(a)))
              }, {
                default: AS(() => [
                  Wt(dt(se), {
                    icon: dt(gm),
                    "aria-hidden": "true",
                    class: ql(["icon reject", { rejected: d.value == dt(a) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == dt(a) ? (Gn(), Yn("span", zS, sa(dt(a)), 1)) : (Gn(), Yn("span", GS, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : la("", !0)
          ]),
          f.value ? (Gn(), Yn("div", YS, [
            Ct("div", {
              class: ql(["severity-line", [`${(x = (y = f.value) == null ? void 0 : y.severity) == null ? void 0 : x.toLowerCase()}-bg dark`]])
            }, null, 2),
            Ct("div", _S, [
              Ct("div", HS, [
                Ct("div", null, [
                  WS(" Situation - " + sa((F = f.value) == null ? void 0 : F.id) + " - affecting " + sa(dt(me.exports.size)(dt(me.exports.groupBy)((W = f.value) == null ? void 0 : W.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (Gn(), Yn("span", PS, "having " + sa(f.value.alarms.length) + " alarms ", 1)) : la("", !0)
                ]),
                Wt(Rm, {
                  severity: (B = f.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Ct("span", {
                innerHTML: f.value.description
              }, null, 8, jS),
              XS,
              Ct("div", LS, [
                Wt(Dl, {
                  label: "First Event",
                  info: dt(Zn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Wt(Dl, {
                  label: "Last Event",
                  info: dt(Zn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Wt(Dl, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Ct("div", $S, [
              Wt($M, {
                alarms: (A = f.value) == null ? void 0 : A.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : la("", !0),
          Ct("div", qS, [
            Wt(xa, {
              id: (S = f.value) == null ? void 0 : S.id,
              situationId: (E = f.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (D = f.value) == null ? void 0 : D.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Wt(xa, {
              id: (k = f.value) == null ? void 0 : k.id,
              situationId: (Y = f.value) == null ? void 0 : Y.id,
              label: "Journal Memo",
              type: "journal",
              memo: ($ = f.value) == null ? void 0 : $.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (Gn(), Yn("div", KS, [
          Wt(bS, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : la("", !0)
      ], 64);
    };
  }
});
const nF = /* @__PURE__ */ be(tF, [["__scopeId", "data-v-2ac18d30"]]);
const rF = window.Vue.openBlock, oF = window.Vue.createElementBlock, iF = window.Vue.createElementVNode;
var aF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sF = {}, lF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cF = /* @__PURE__ */ iF("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), uF = [
  cF
];
function dF(t, o) {
  return rF(), oF("svg", lF, uF);
}
var Xm = /* @__PURE__ */ aF(sF, [["render", dF]]);
const fF = window.Vue.watch, hF = window.Vue.onBeforeUnmount, pF = window.Vue.ref, mF = window.Vue.onMounted, wF = (t) => {
  const o = pF(!1);
  let r = !1;
  const s = (d) => {
    t(d), r = !1;
  };
  function a(d) {
    r || (requestAnimationFrame(() => s(d)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return mF(() => {
    const d = fF(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    hF(() => {
      d(), u();
    });
  }), o;
}, VF = window.Vue.watch, vF = window.Vue.onBeforeUnmount, TF = window.Vue.ref, gF = window.Vue.onMounted, UF = (t, o) => {
  const r = TF(!1), s = (d) => {
    d.target === window && o(d);
  }, a = (d) => {
    let f = [];
    Array.isArray(t.value) ? f = t.value : f = [t.value], f.some((U) => U && U.contains(d.target)) || o(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return gF(() => {
    const d = VF(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    vF(() => {
      d(), u();
    });
  }), r;
}, RF = window.Vue.watch, NF = window.Vue.onBeforeUnmount, yF = window.Vue.ref, Lm = (t, o) => {
  const r = yF(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, f = RF([t, r], ([w, U], T) => {
    T && T.length && T[0] && T[0].removeEventListener("scroll", u, !0), U && w ? w.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return NF(() => {
    f(), d();
  }), r;
}, MF = window.Vue.defineComponent, rn = window.Vue.ref, lp = window.Vue.toRef, kF = window.Vue.onMounted, ZF = window.Vue.watch, cp = window.Vue.computed, bF = window.Vue.nextTick, up = window.Vue.openBlock, dp = window.Vue.createElementBlock, fp = window.Vue.renderSlot, JF = window.Vue.normalizeClass, EF = window.Vue.normalizeStyle, SF = window.Vue.createCommentVNode;
var FF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AF = {
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
}, WF = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, CF = MF({
  emits: WF,
  props: AF,
  setup(t, o) {
    const r = rn(), s = rn(), a = lp(t, "open"), u = lp(t, "noExpand"), d = rn("auto"), f = rn(), w = rn(t.triggerId || le("feather-menu-trigger")), U = rn(le("feather-menu-dropdown")), T = rn(""), R = rn("");
    kF(() => {
      f.value = window;
    });
    const y = rn(!1), x = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), F = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", bF(() => {
        let { height: Y, width: $ } = s.value.getBoundingClientRect();
        const q = x(), De = q.height, Le = q.width;
        t.fill && $ < k.width ? (d.value = k.width + "px", $ = k.width) : d.value = $ + "px";
        let we = 0;
        De - k.bottom < Y && k.top >= Y ? (we = k.top - Y, t.cover && (we += k.height)) : (we = k.bottom, t.cover && (we -= k.height));
        let Ve = t.right ? k.right - $ : k.left;
        !t.right && k.right >= $ && Le - k.left < $ && (Ve = k.right - $), t.right && k.right <= $ && Le - k.left > $ && (Ve = k.left), R.value = `${Ve}px`, T.value = `${we}px`, y.value = !1;
      });
    }, B = UF(r, (k) => {
      o.emit("outside-click", k);
    }), A = wF(F), S = Lm(f, F);
    ZF([a, s], ([k, Y]) => {
      k && Y && F(), B.value = k, A.value = k, S.value = k;
    });
    const E = cp(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = U.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), D = cp(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: T,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: E,
      triggerListeners: D,
      menuId: U,
      menu: s,
      menuWidth: d,
      root: r,
      calculatePosition: F,
      calculating: y
    };
  }
}), xF = ["data-ref-id"], BF = ["data-ref-id", "id"];
function IF(t, o, r, s, a, u) {
  return up(), dp("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    fp(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (up(), dp("div", {
      key: 0,
      class: JF(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: EF({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      fp(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, BF)) : SF("", !0)
  ], 8, xF);
}
var $m = /* @__PURE__ */ FF(CF, [["render", IF], ["__scopeId", "data-v-f75af406"]]);
const DF = window.Vue.defineComponent, OF = window.Vue.openBlock, QF = window.Vue.createElementBlock, zF = window.Vue.normalizeClass, GF = window.Vue.pushScopeId, YF = window.Vue.popScopeId, Uc = window.Vue.createElementVNode;
var _F = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HF = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, PF = {
  click: (t) => !0
}, jF = DF({
  emits: PF,
  props: HF,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), qm = (t) => (GF("data-v-07e020f5"), t = t(), YF(), t), XF = /* @__PURE__ */ qm(() => /* @__PURE__ */ Uc("div", { class: "track" }, null, -1)), LF = /* @__PURE__ */ qm(() => /* @__PURE__ */ Uc("div", { class: "switcher" }, [
  /* @__PURE__ */ Uc("div", { class: "switch-circle" })
], -1)), $F = [
  XF,
  LF
];
function qF(t, o, r, s, a, u) {
  return OF(), QF("div", {
    class: zF(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, $F, 2);
}
var KF = /* @__PURE__ */ _F(jF, [["render", qF], ["__scopeId", "data-v-07e020f5"]]), eA = Object.defineProperty, tA = Object.defineProperties, nA = Object.getOwnPropertyDescriptors, hp = Object.getOwnPropertySymbols, rA = Object.prototype.hasOwnProperty, oA = Object.prototype.propertyIsEnumerable, pp = (t, o, r) => o in t ? eA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, mp = (t, o) => {
  for (var r in o || (o = {}))
    rA.call(o, r) && pp(t, r, o[r]);
  if (hp)
    for (var r of hp(o))
      oA.call(o, r) && pp(t, r, o[r]);
  return t;
}, wp = (t, o) => tA(t, nA(o));
const Hc = window.Vue.defineComponent, _n = window.Vue.h, iA = window.Vue.openBlock, aA = window.Vue.createElementBlock, sA = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Km = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lA = {
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
}, cA = Hc({
  inheritAttrs: !1,
  props: lA,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = _n("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = _n("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = _n("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : _n(Kn);
    if (this.asLi)
      return _n("li", wp(mp({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [t, r, s, a]);
    const u = _n("a", wp(mp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, s, a]);
    return _n("li", {}, [u]);
  }
});
var ii = /* @__PURE__ */ Km(cA, [["__scopeId", "data-v-7c46b2b3"]]);
Hc({
  components: {
    FeatherListItem: ii
  }
});
const uA = {}, dA = { class: "feather-list" };
function fA(t, o) {
  return iA(), aA("ul", dA, [
    sA(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Pc = /* @__PURE__ */ Km(uA, [["render", fA], ["__scopeId", "data-v-941a1d50"]]);
const hA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, pA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Hc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: hA,
  props: pA,
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
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === L.SPACE || t.keyCode === L.ENTER) && this.updateValue(), t.keyCode === L.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: KF, FeatherListItem: ii }
});
const $o = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const s = getComputedStyle(t);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
var mA = Object.defineProperty, wA = Object.defineProperties, VA = Object.getOwnPropertyDescriptors, Vp = Object.getOwnPropertySymbols, vA = Object.prototype.hasOwnProperty, TA = Object.prototype.propertyIsEnumerable, vp = (t, o, r) => o in t ? mA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Rc = (t, o) => {
  for (var r in o || (o = {}))
    vA.call(o, r) && vp(t, r, o[r]);
  if (Vp)
    for (var r of Vp(o))
      TA.call(o, r) && vp(t, r, o[r]);
  return t;
}, gA = (t, o) => wA(t, VA(o));
const ew = window.Vue.defineComponent, Ln = window.Vue.resolveComponent, Ra = window.Vue.openBlock, Tp = window.Vue.createBlock, Na = window.Vue.mergeProps, $n = window.Vue.withCtx, tw = window.Vue.createElementBlock, UA = window.Vue.Fragment, RA = window.Vue.renderList, NA = window.Vue.createTextVNode, yA = window.Vue.toDisplayString, MA = window.Vue.computed, gp = window.Vue.toRef, Fo = window.Vue.createVNode, Up = window.Vue.toHandlers, kA = window.Vue.renderSlot, ZA = window.Vue.normalizeClass, bA = window.Vue.createElementVNode;
var nw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JA = ew({
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
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        $o(o, this.$refs.list.$el);
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
    FeatherList: Pc,
    FeatherListItem: ii
  }
});
function EA(t, o, r, s, a, u) {
  const d = Ln("FeatherListItem"), f = Ln("FeatherList");
  return Ra(), Tp(f, Na(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: $n(() => [
      (Ra(!0), tw(UA, null, RA(t.options, (w, U) => (Ra(), Tp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(U),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(U),
        selected: t.isSelected(U),
        onClick: (T) => t.select(w)
      }, {
        default: $n(() => [
          NA(yA(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var SA = /* @__PURE__ */ nw(JA, [["render", EA], ["__scopeId", "data-v-eae820da"]]);
const FA = gA(Rc(Rc({}, bm), Ha), {
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
}), AA = {
  "update:modelValue": (t) => !0
}, WA = ew({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: AA,
  props: FA,
  setup(t, o) {
    Pa(t), Jm(t);
    const r = MA(() => le("feather-select-input")), { validate: s } = Ya(r, gp(t, "modelValue"), t.label, t.schema, gp(t, "error"));
    return Rc({
      inputId: r,
      validate: s
    }, _a(o.attrs));
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
        const t = this.internalValue, o = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => Xm
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
      if (t.keyCode === L.ENTER)
        t.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (t.keyCode === L.ESCAPE)
        this.closeMenu(), t.stopPropagation();
      else if (t.keyCode === L.DOWN)
        t.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (t.keyCode === L.UP)
        t.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (t.keyCode === L.HOME)
        t.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (t.keyCode === L.END)
        t.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(t.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Yr(this.delayTimeout), this.delayTimeout = Gr(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Zm,
    InputSubText: Ga,
    FeatherMenu: $m,
    List: SA,
    FeatherIcon: se
  }
});
function CA(t, o, r, s, a, u) {
  const d = Ln("FeatherIcon"), f = Ln("InputWrapper"), w = Ln("List"), U = Ln("FeatherMenu"), T = Ln("InputSubText");
  return Ra(), tw("div", Na(t.inherittedAttrs, { class: "feather-select-container" }), [
    Fo(U, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: $n((R) => [
        Fo(f, Na({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Up(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: $n(() => [
            kA(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: $n(() => [
            Fo(d, {
              class: ZA(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: $n(() => [
            bA("input", Na(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Up(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: $n(() => [
        Fo(w, {
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
    Fo(T, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var xA = /* @__PURE__ */ nw(WA, [["render", CA], ["__scopeId", "data-v-ecb32d90"]]);
const BA = window.Vue.openBlock, IA = window.Vue.createElementBlock, rw = window.Vue.createElementVNode;
var DA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OA = {}, QA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zA = /* @__PURE__ */ rw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), GA = /* @__PURE__ */ rw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), YA = [
  zA,
  GA
];
function _A(t, o) {
  return BA(), IA("svg", QA, YA);
}
var HA = /* @__PURE__ */ DA(OA, [["render", _A]]);
const ya = window.Vue.openBlock, Nc = window.Vue.createElementBlock, ow = window.Vue.createElementVNode, PA = window.Vue.defineComponent, Hn = window.Vue.ref, jA = window.Vue.provide, Rp = window.Vue.computed, XA = window.Vue.onUnmounted, Np = window.Vue.toRef, LA = window.Vue.resolveComponent, $A = window.Vue.Fragment, qA = window.Vue.createBlock, KA = window.Vue.Teleport, yp = window.Vue.createVNode, eW = window.Vue.Transition, tW = window.Vue.withCtx, nW = window.Vue.normalizeClass, rW = window.Vue.normalizeStyle, oW = window.Vue.toDisplayString, iW = window.Vue.createCommentVNode, aW = window.Vue.renderSlot, Kl = window.Vue.nextTick;
var iw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sW = {}, lW = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, cW = /* @__PURE__ */ ow("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), uW = [
  cW
];
function dW(t, o) {
  return ya(), Nc("svg", lW, uW);
}
var fW = /* @__PURE__ */ iw(sW, [["render", dW]]), xe = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(xe || {}), sn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(sn || {});
const hW = (t, o, r, s = 9) => {
  const a = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= o.height + s && d.push(xe.top), a >= o.height + s && d.push(xe.bottom);
  const f = [];
  u >= o.width + s && f.push(xe.right), t.left >= o.width + s && f.push(xe.left);
  let w = [...f, ...d];
  return (r === xe.top || r === xe.bottom) && (w = [...d, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, pW = (t, o, r, s, a = 28) => {
  if (t === xe.left || t === xe.right)
    return sn.center;
  const u = o.left + o.width / 2, d = window.innerWidth - o.right, f = [], w = u, U = d + o.width / 2, T = r.width - a, R = r.width / 2;
  return w >= R && U >= R && f.push(sn.center), U >= T && f.push(sn.left), w >= T && f.push(sn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, mW = {
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
    default: () => sn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, wW = PA({
  props: mW,
  setup(t) {
    const o = Hn(!1), r = Hn(!1), s = le("feather-tooltip-trigger"), a = le("feather-tooltip"), u = "data-feather-tooltip";
    jA("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      Yr(d), o.value || (d = Gr(W, t.enterDelay));
    }, w = () => {
      Yr(d), d = Gr(B, t.exitDelay);
    }, U = (we) => {
      we.keyCode === L.ESCAPE && (we.preventDefault(), B(!0));
    }, T = Rp(() => ({
      [u]: s,
      "aria-describedby": a
    })), R = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: U
    }, y = Hn(document), x = Lm(y, () => B(!0));
    XA(() => B(!0));
    const F = () => document.getElementById(a), W = () => {
      r.value = !1, o.value = !0, Kl(() => {
        const we = F();
        Le(we), o.value = !1, Kl(() => {
          r.value = !0, o.value = !0, x.value = !0;
        });
      });
    }, B = (we = !1) => {
      Y.value = "", k.value = "", $.value = "", q.value = "", o.value = !1, we && (r.value = !1), x.value = !1;
    }, A = Np(t, "placement"), S = Np(t, "pointerAlignment"), E = 8, D = 24, k = Hn(""), Y = Hn(""), $ = Hn(""), q = Hn(""), De = Rp(() => q.value ? "p-" + q.value : !1), Le = (we) => {
      const Ve = document.querySelector(`[${u}=${s}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      Kl(() => {
        const Te = Ve.getBoundingClientRect(), Ne = we.getBoundingClientRect(), ce = hW(Te, Ne, A.value, E), Fe = pW(ce, Te, Ne, S.value, D);
        $.value = Fe.toString(), q.value = ce.toString();
        let Ae = 0, _e = 0;
        if ((ce === xe.left || ce === xe.right) && (Ae = Te.top + Te.height / 2 - Ne.height / 2, ce === xe.left && (_e = Te.left - Ne.width - E), ce === xe.right && (_e = Te.right)), ce === xe.top || ce === xe.bottom) {
          Ae = Te.top - Ne.height - E, ce === xe.bottom && (Ae = Te.bottom);
          const qr = Te.left + Te.width / 2;
          switch (Fe) {
            case sn.center:
              _e = qr - Ne.width / 2;
              break;
            case sn.left:
              _e = qr - D;
              break;
            case sn.right:
              _e = qr - Ne.width + D;
              break;
          }
        }
        k.value = Ae.toString() + "px", Y.value = _e.toString() + "px";
      });
    };
    return {
      attrs: T,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: $,
      placementClass: De,
      top: k,
      left: Y,
      tooltipID: a
    };
  },
  components: {
    Pointer: fW
  }
}), VW = ["id"];
function vW(t, o, r, s, a, u) {
  const d = LA("Pointer");
  return ya(), Nc($A, null, [
    (ya(), qA(KA, { to: "body" }, [
      yp(eW, { css: t.animate }, {
        default: tW(() => [
          t.show ? (ya(), Nc("div", {
            key: 0,
            class: nW(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: rW({ left: t.left, top: t.top })
          }, [
            ow("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, oW(t.title), 9, VW),
            yp(d, { class: "tooltip-pointer" })
          ], 6)) : iW("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    aW(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Mp = /* @__PURE__ */ iw(wW, [["render", vW], ["__scopeId", "data-v-3da6b22e"]]);
const TW = window.Vue.defineComponent, ca = window.Vue.unref, kp = window.Vue.toHandlers, Zp = window.Vue.mergeProps, bp = window.Vue.createElementVNode, Jp = window.Vue.withCtx, Ep = window.Vue.createVNode, gW = window.Vue.normalizeClass, UW = window.Vue.normalizeStyle, Sp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, RW = window.Vue.createCommentVNode, NW = window.Vue.Fragment, yW = /* @__PURE__ */ TW({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(t) {
    const o = t, r = (a, u) => a && u ? (Number(u) - Number(a)) * o.proportion : 0, s = (a) => a ? (Number(a) - Number(o.minStart)) * o.proportion : 0;
    return (a, u) => (Sp(), Fp(NW, null, [
      Ep(ca(Mp), {
        title: ca(Zn)(t.alarm.firstEventTime)
      }, {
        default: Jp(({ attrs: d, on: f }) => [
          bp("div", Zp({ class: "circle" }, d, kp(f), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: s(t.alarm.firstEventTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      t.alarm.lastEventTime !== t.alarm.firstEventTime ? (Sp(), Fp("div", {
        key: 0,
        class: gW(["line", [`${t.alarm.severity.toLowerCase()}-bg dark`]]),
        style: UW({
          width: r(t.alarm.firstEventTime, t.alarm.lastEventTime) + "px"
        })
      }, null, 6)) : RW("", !0),
      Ep(ca(Mp), {
        title: ca(Zn)(t.alarm.lastEventTime)
      }, {
        default: Jp(({ attrs: d, on: f }) => [
          bp("div", Zp({ class: "circle" }, d, kp(f), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const MW = /* @__PURE__ */ be(yW, [["__scopeId", "data-v-9e17819d"]]), kW = window.Vue.openBlock, ZW = window.Vue.createElementBlock, aw = window.Vue.createElementVNode;
var bW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JW = {}, EW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SW = /* @__PURE__ */ aw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), FW = /* @__PURE__ */ aw("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), AW = [
  SW,
  FW
];
function WW(t, o) {
  return kW(), ZW("svg", EW, AW);
}
var CW = /* @__PURE__ */ bW(JW, [["render", WW]]);
const xW = window.Vue.defineComponent, BW = window.Vue.normalizeClass, ze = window.Vue.createElementVNode, br = window.Vue.toDisplayString, Tn = window.Vue.unref, ua = window.Vue.createVNode, IW = window.Vue.createTextVNode, Ap = window.Vue.renderList, ec = window.Vue.Fragment, Jr = window.Vue.openBlock, Er = window.Vue.createElementBlock, DW = window.Vue.createCommentVNode, OW = window.Vue.pushScopeId, QW = window.Vue.popScopeId, zW = (t) => (OW("data-v-40347655"), t = t(), QW(), t), GW = { class: "section detail" }, YW = { class: "id" }, _W = {
  key: 0,
  class: "section"
}, HW = /* @__PURE__ */ zW(() => /* @__PURE__ */ ze("div", { class: "id" }, "Alarms", -1)), PW = { class: "action-btns" }, jW = { class: "zoom" }, XW = /* @__PURE__ */ IW(" Zoom "), LW = { class: "alarms" }, $W = { class: "times" }, qW = { class: "container" }, KW = { class: "ids" }, eC = { class: "timeline-container" }, Sr = window.Vue.ref, tC = window.Vue.watch, nC = /* @__PURE__ */ xW({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(t) {
    var F, W, B, A;
    const o = t, r = 700;
    let s = Sr(r);
    const a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Sr(a[0]), d = () => s.value / (Number(U.value) - Number(w.value)), f = Sr(o.situation.alarms), w = Sr(
      ((W = me.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : W.firstEventTime) || new Date()
    ), U = Sr(
      ((A = me.exports.maxBy((B = o.situation) == null ? void 0 : B.alarms, "lastEventTime")) == null ? void 0 : A.lastEventTime) || new Date()
    ), T = Sr(d());
    tC(o, () => {
      var S, E, D, k;
      w.value = ((E = me.exports.minBy((S = o.situation) == null ? void 0 : S.alarms, "firstEventTime")) == null ? void 0 : E.firstEventTime) || new Date(), U.value = ((k = me.exports.maxBy((D = o.situation) == null ? void 0 : D.alarms, "lastEventTime")) == null ? void 0 : k.lastEventTime) || new Date(), s.value = r, T.value = d(), f.value = o.situation.alarms, u.value = a[0];
    });
    const R = (S) => {
      if ((S == null ? void 0 : S.id) === 1 && (f.value = o.situation.alarms), (S == null ? void 0 : S.id) === 2) {
        const E = me.exports.groupBy(f.value, "severity"), D = [
          ...E.CRITICAL || [],
          ...E.MAJOR || [],
          ...E.MINOR || [],
          ...E.WARNING || [],
          ...E.NORMAL || [],
          ...E.CLEARED || [],
          ...E.INDETERMINATE || []
        ];
        f.value = D.filter((k) => k);
      }
      if ((S == null ? void 0 : S.id) === 3) {
        const E = me.exports.reverse(
          me.exports.sortBy(
            o.situation.alarms,
            (D) => Number(D.lastEventTime) - Number(D.firstEventTime)
          )
        );
        f.value = E;
      }
    }, y = () => {
      s.value += 100, T.value = d();
    }, x = () => {
      s.value -= 100, T.value = d();
    };
    return (S, E) => {
      var D, k;
      return Jr(), Er(ec, null, [
        ze("div", GW, [
          ze("div", {
            class: BW(["severity-line", [`${(k = (D = o.situation) == null ? void 0 : D.severity) == null ? void 0 : k.toLowerCase()}-bg dark`]])
          }, null, 2),
          ze("div", null, [
            ze("div", YW, "Situation " + br(o.situation.id), 1),
            ze("div", null, " Duration: " + br(Tn(sJ)(new Date(U.value), new Date(w.value))), 1)
          ])
        ]),
        f.value && f.value.length > 0 ? (Jr(), Er("div", _W, [
          HW,
          ze("div", PW, [
            ua(Tn(xA), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                E[0] || (E[0] = (Y) => u.value = Y),
                R
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            ze("div", jW, [
              XW,
              ze("div", null, [
                ua(Tn(se), {
                  icon: Tn(HA),
                  class: "zoom-icon",
                  onClick: y
                }, null, 8, ["icon"]),
                ua(Tn(se), {
                  icon: Tn(CW),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          ze("div", LW, [
            ze("div", $W, [
              ze("div", null, br(Tn(Zn)(w.value)), 1),
              ze("div", null, br(Tn(Zn)(U.value)), 1)
            ]),
            ze("div", qW, [
              ze("div", KW, [
                (Jr(!0), Er(ec, null, Ap(f.value, (Y) => (Jr(), Er("div", {
                  class: "alarm-id",
                  key: Y.id
                }, br(Y.nodeLabel) + " - " + br(Y.id), 1))), 128))
              ]),
              ze("div", eC, [
                (Jr(!0), Er(ec, null, Ap(f.value, (Y) => (Jr(), Er("div", {
                  class: "timeline",
                  key: Y.id
                }, [
                  ua(MW, {
                    alarm: Y,
                    proportion: T.value,
                    "min-start": w.value,
                    "max-end": U.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : DW("", !0)
      ], 64);
    };
  }
});
const rC = /* @__PURE__ */ be(nC, [["__scopeId", "data-v-40347655"]]), oC = window.Vue.defineComponent, sw = window.Vue.createTextVNode, Ao = window.Vue.unref, Fr = window.Vue.withCtx, Pn = window.Vue.createVNode, iC = window.Vue.openBlock, aC = window.Vue.createElementBlock, sC = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const lC = {
  key: 0,
  class: "detail"
}, cC = /* @__PURE__ */ sw("Details"), uC = /* @__PURE__ */ sw("Metrics"), dC = window.Vue.ref, fC = window.Vue.watch, hC = /* @__PURE__ */ oC({
  __name: "SituationDetail",
  props: {
    index: null,
    forceUpdate: { type: Boolean }
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = jr(), a = dC(s.situations[r.index]), u = (d, f) => {
      o("situation-status-changed", d, f);
    };
    return fC(r, () => {
      a.value = s.situations[r.index];
    }), (d, f) => a.value ? (iC(), aC("div", lC, [
      Pn(Ao(MM), null, {
        tabs: Fr(() => [
          Pn(Ao(uh), null, {
            default: Fr(() => [
              cC
            ]),
            _: 1
          }),
          Pn(Ao(uh), null, {
            default: Fr(() => [
              uC
            ]),
            _: 1
          })
        ]),
        default: Fr(() => [
          Pn(Ao(dh), { class: "panel" }, {
            default: Fr(() => [
              Pn(nF, {
                "situation-info": a.value,
                onSituationStatusChanged: u
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Pn(Ao(dh), { class: "panel" }, {
            default: Fr(() => [
              Pn(rC, { situation: a.value }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : sC("", !0);
  }
});
const pC = /* @__PURE__ */ be(hC, [["__scopeId", "data-v-d7dbeb01"]]), mC = window.Vue.openBlock, wC = window.Vue.createElementBlock, VC = window.Vue.createElementVNode;
var vC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const TC = {}, gC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UC = /* @__PURE__ */ VC("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), RC = [
  UC
];
function NC(t, o) {
  return mC(), wC("svg", gC, RC);
}
var yC = /* @__PURE__ */ vC(TC, [["render", NC]]);
const MC = window.Vue.openBlock, kC = window.Vue.createElementBlock, lw = window.Vue.createElementVNode;
var ZC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bC = {}, JC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EC = /* @__PURE__ */ lw("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), SC = /* @__PURE__ */ lw("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), FC = [
  EC,
  SC
];
function AC(t, o) {
  return MC(), kC("svg", JC, FC);
}
var WC = /* @__PURE__ */ ZC(bC, [["render", AC]]);
const CC = window.Vue.openBlock, xC = window.Vue.createElementBlock, BC = window.Vue.createElementVNode;
var IC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DC = {}, OC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QC = /* @__PURE__ */ BC("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), zC = [
  QC
];
function GC(t, o) {
  return CC(), xC("svg", OC, zC);
}
var YC = /* @__PURE__ */ IC(DC, [["render", GC]]);
const _C = window.Vue.openBlock, HC = window.Vue.createElementBlock, PC = window.Vue.createElementVNode;
var jC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XC = {}, LC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $C = /* @__PURE__ */ PC("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), qC = [
  $C
];
function KC(t, o) {
  return _C(), HC("svg", LC, qC);
}
var ex = /* @__PURE__ */ jC(XC, [["render", KC]]);
const tx = window.Vue.defineComponent, gn = window.Vue.unref, da = window.Vue.normalizeClass, fa = window.Vue.createVNode, nx = window.Vue.openBlock, rx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ox = { class: "paginator" }, ix = /* @__PURE__ */ tx({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: o }) {
    const r = t, s = (a) => {
      a >= 0 && a <= r.totalPages - 1 && o("go-to-page", a);
    };
    return (a, u) => (nx(), rx("div", ox, [
      fa(gn(se), {
        icon: gn(yC),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => s(0))
      }, null, 8, ["icon", "class"]),
      fa(gn(se), {
        icon: gn(YC),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      fa(gn(se), {
        icon: gn(ex),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      fa(gn(se), {
        icon: gn(WC),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const ax = /* @__PURE__ */ be(ix, [["__scopeId", "data-v-40758818"]]);
const sx = window.Vue.openBlock, lx = window.Vue.createElementBlock, cx = window.Vue.createElementVNode;
var ux = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dx = {}, fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hx = /* @__PURE__ */ cx("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), px = [
  hx
];
function mx(t, o) {
  return sx(), lx("svg", fx, px);
}
var wx = /* @__PURE__ */ ux(dx, [["render", mx]]);
const Vx = window.Vue.openBlock, vx = window.Vue.createElementBlock, jc = window.Vue.createElementVNode;
var Tx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gx = {}, Ux = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Rx = /* @__PURE__ */ jc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), Nx = /* @__PURE__ */ jc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), yx = /* @__PURE__ */ jc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Mx = [
  Rx,
  Nx,
  yx
];
function kx(t, o) {
  return Vx(), vx("svg", Ux, Mx);
}
var Zx = /* @__PURE__ */ Tx(gx, [["render", kx]]), bx = Object.defineProperty, Jx = Object.defineProperties, Ex = Object.getOwnPropertyDescriptors, Wp = Object.getOwnPropertySymbols, Sx = Object.prototype.hasOwnProperty, Fx = Object.prototype.propertyIsEnumerable, Cp = (t, o, r) => o in t ? bx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, pt = (t, o) => {
  for (var r in o || (o = {}))
    Sx.call(o, r) && Cp(t, r, o[r]);
  if (Wp)
    for (var r of Wp(o))
      Fx.call(o, r) && Cp(t, r, o[r]);
  return t;
}, Ax = (t, o) => Jx(t, Ex(o));
const $r = window.Vue.defineComponent, re = window.Vue.openBlock, Ze = window.Vue.createElementBlock, tt = window.Vue.createElementVNode, xt = window.Vue.toDisplayString, yt = window.Vue.createCommentVNode, ye = window.Vue.resolveComponent, Nt = window.Vue.createBlock, Ge = window.Vue.withCtx, Or = window.Vue.Fragment, Yo = window.Vue.renderList, nt = window.Vue.createVNode, Xc = window.Vue.withModifiers, qn = window.Vue.normalizeClass, yc = window.Vue.renderSlot, cw = window.Vue.createTextVNode, Wx = window.Vue.pushScopeId, Cx = window.Vue.popScopeId, uw = window.Vue.reactive, dw = window.Vue.nextTick, tc = window.Vue.markRaw, nc = window.Vue.toRef, xp = window.Vue.computed, xx = window.Vue.toRefs, Ar = window.Vue.ref, rc = window.Vue.mergeProps, Bp = window.Vue.toHandlers, ha = window.Vue.withDirectives, pa = window.Vue.vShow;
var qa = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, Lc = {
  query: {
    type: String
  }
}, nr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Bx = $r({
  mixins: [],
  props: pt(pt({
    text: {
      type: String,
      required: !0
    }
  }, qa), Lc),
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
}), Ix = {
  key: 0,
  class: "highlight"
}, Dx = { key: 1 };
function Ox(t, o, r, s, a, u) {
  return re(), Ze("span", null, [
    tt("span", null, xt(t.beginning), 1),
    t.highlighted ? (re(), Ze("span", Ix, xt(t.highlighted), 1)) : yt("", !0),
    t.end ? (re(), Ze("span", Dx, xt(t.end), 1)) : yt("", !0)
  ]);
}
var fw = /* @__PURE__ */ nr(Bx, [["render", Ox], ["__scopeId", "data-v-8abe2492"]]);
const Qx = $r({
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
  }, qa), Lc),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        $o(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return o && o.length ? o.some((s) => s[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
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
    FeatherList: Pc,
    FeatherListItem: ii,
    Highlighter: fw
  }
}), zx = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function Gx(t, o, r, s, a, u) {
  const d = ye("Highlighter"), f = ye("FeatherListItem"), w = ye("FeatherList");
  return re(), Nt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (re(!0), Ze(Or, null, Yo(t.items, (U, T) => (re(), Ze(Or, {
        key: U[t.textProp]
      }, [
        nt(f, {
          "as-li": "",
          id: t.getId(T),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(U),
          highlighted: t.isActive(T),
          selected: t.isSelected(U),
          onClick: Xc((R) => t.select(U), ["stop"])
        }, {
          default: Ge(() => [
            nt(d, {
              highlight: t.highlight,
              query: t.query,
              text: U[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            U._new ? (re(), Ze("span", zx, xt(t.newLabel), 1)) : yt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && U._new ? (re(), Ze("li", {
          role: "presentation",
          key: U[t.textProp] + "hr",
          class: "hr"
        })) : yt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var Yx = /* @__PURE__ */ nr(Qx, [["render", Gx], ["__scopeId", "data-v-f623434a"]]);
const _x = $r({
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
  }, qa), Lc),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        $o(o, r);
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
      return this.value && this.value.length ? o.some((s) => s[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
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
    Highlighter: fw
  }
}), Hx = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, Px = ["aria-multiselectable"], jx = { role: "row" }, Xx = ["aria-selected", "onClick"], Lx = ["id", "aria-selected"], $x = { key: 1 };
function qx(t, o, r, s, a, u) {
  const d = ye("Highlighter");
  return re(), Ze("div", Hx, [
    tt("table", {
      class: qn(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      tt("thead", null, [
        tt("tr", jx, [
          (re(!0), Ze(Or, null, Yo(t.config, (f) => (re(), Ze("th", {
            key: f.title
          }, xt(f.title), 1))), 128))
        ])
      ]),
      tt("tbody", null, [
        (re(!0), Ze(Or, null, Yo(t.items, (f, w) => (re(), Ze("tr", {
          role: "row",
          key: f[t.textProp],
          "aria-selected": t.isSelected(f),
          class: qn({ focus: t.isActive(w), selected: t.isSelected(f) }),
          onClick: Xc((U) => t.select(f), ["stop"])
        }, [
          (re(!0), Ze(Or, null, Yo(t.config, (U, T) => (re(), Ze("td", {
            key: f[t.textProp] + U.prop,
            id: t.getId(w, T),
            "aria-selected": t.isSelected(f),
            class: qn({ "focus-cell": t.isActiveCell(w, T) })
          }, [
            U.prop === t.textProp ? (re(), Nt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: f[U.prop]
            }, null, 8, ["highlight", "query", "text"])) : (re(), Ze("p", $x, xt(f[U.prop]), 1))
          ], 10, Lx))), 128))
        ], 10, Xx))), 128))
      ])
    ], 10, Px)
  ], 512);
}
var Kx = /* @__PURE__ */ nr(_x, [["render", qx], ["__scopeId", "data-v-58c88fd1"]]);
const eB = $r({
  components: {
    FeatherList: Pc,
    FeatherListItem: ii
  }
});
function tB(t, o, r, s, a, u) {
  const d = ye("FeatherListItem"), f = ye("FeatherList");
  return re(), Nt(f, { class: "result-list" }, {
    default: Ge(() => [
      nt(d, { "as-li": "" }, {
        default: Ge(() => [
          yc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var nB = /* @__PURE__ */ nr(eB, [["render", tB], ["__scopeId", "data-v-06b752c6"]]);
const rB = $r({
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
    FeatherIcon: se,
    Cancel: Ko,
    BaseChip: Xa,
    BaseChipLabel: La,
    BaseChipPreIcon: $a
  }
});
function oB(t, o, r, s, a, u) {
  const d = ye("FeatherIcon"), f = ye("BaseChipPreIcon"), w = ye("BaseChipLabel"), U = ye("Cancel"), T = ye("BaseChip");
  return re(), Nt(T, {
    class: qn(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: Ge(() => [
      t.showPreIcon ? (re(), Nt(f, { key: 0 }, {
        default: Ge(() => {
          var R, y;
          return [
            nt(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (y = t.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : yt("", !0),
      nt(w, null, {
        default: Ge(() => [
          cw(xt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? yt("", !0) : (re(), Ze("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = Xc((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        nt(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: Ge(() => [
            nt(U)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var iB = /* @__PURE__ */ nr(rB, [["render", oB], ["__scopeId", "data-v-e0fc6ac0"]]);
const aB = {}, sB = (t) => (Wx("data-v-aa720e06"), t = t(), Cx(), t), lB = { class: "spinner-container" }, cB = /* @__PURE__ */ sB(() => /* @__PURE__ */ tt("svg", {
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
], -1)), uB = [
  cB
];
function dB(t, o) {
  return re(), Ze("div", lB, uB);
}
var fB = /* @__PURE__ */ nr(aB, [["render", dB], ["__scopeId", "data-v-aa720e06"]]), Ka = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(Ka || {});
const hw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, hB = pt(pt(pt({
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
    validator: (t) => !!Ka[t]
  },
  labels: {
    type: Object,
    default: () => hw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, qa), Ha), bm), pB = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, mB = (t, o, r, s) => {
  if (r.toLowerCase() === Ka.multi) {
    const u = t.modelValue, d = (f) => {
      t.selectionLimit.value && f.length >= t.selectionLimit.value ? t.selectionLimitReached.value = !0 : t.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(f) {
        f && f.length && d(f);
      },
      hasValue() {
        return !!(u.value && u.value.length);
      },
      selectItem(f) {
        if (u.value && u.value.filter((U) => U[t.textProp.value] === f[t.textProp.value]).length)
          return;
        const w = u.value ? [...u.value, f] : [f];
        s("update:modelValue", w), d(w);
      },
      removeItem(f) {
        const w = u.value.findIndex((U) => {
          if (f[t.textProp.value] === U[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const U = u.value.slice(0);
          U.splice(w, 1), s("update:modelValue", U), d(U), t.input.value.focus();
        }
      },
      clickedItem() {
        t.query.value = "", t.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const a = t.modelValue;
  return {
    getInitialText() {
      return a.value ? a.value[t.textProp.value] : "";
    },
    handleModelValueChange() {
      t.query.value = this.getInitialText();
    },
    hasValue() {
      return !!a.value;
    },
    selectItem(u) {
      o.active.row = -1, t.forceCloseResults.value = !0, u && u._new && t.allowNew ? s("new", u._new) : s("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const u = t.internalResults.value[o.active.row];
        u && u._new && t.allowNew ? s("new", u._new) : s("update:modelValue", u);
      }
    }
  };
}, wB = () => {
  const t = uw({
    row: -1
  }), o = (u) => {
    dw(() => {
      t.row = u;
    });
  }, r = (u, d) => {
    if (u.keyCode === L.DOWN) {
      if (u.preventDefault(), t.row === -1)
        s(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const f = t.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === L.UP) {
      if (u.preventDefault(), t.row === 0)
        s();
      else if (t.row > 0) {
        const f = t.row;
        s(), o(f - 1);
      }
      return !0;
    }
    return !1;
  }, s = () => {
    t.row = -1;
  };
  return { reset: s, handleKeyPress: r, active: t, first: () => {
    t.row = 0;
  } };
}, VB = (t) => {
  const o = uw({
    row: -1,
    col: -1
  }), r = (d, f) => {
    dw(() => {
      o.col = f, o.row = d;
    });
  }, s = (d, f) => {
    if (d.keyCode === L.DOWN) {
      if (d.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, U = o.col;
        a(), r(w + 1, U);
      }
      return !0;
    }
    if (d.keyCode === L.UP) {
      if (d.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, U = o.col;
        a(), r(w - 1, U);
      }
      return !0;
    }
    if (d.keyCode === L.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, U = o.row;
        a(), r(U, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= f.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === L.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        a(), r(w - 1, t.length - 1);
      } else if (o.col > 0) {
        const w = o.col, U = o.row;
        a(), r(U, w - 1);
      }
      return !0;
    }
    if (d.keyCode === L.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return a(), r(d.ctrlKey ? f.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === L.HOME && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return a(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: o, first: () => {
    a(), r(0, 0);
  } };
}, vB = $r({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: pB,
  props: hB,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Ka.multi;
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
      return tc(wx);
    },
    minCharIcon() {
      return tc(Zx);
    },
    dropdownIcon() {
      return tc(Xm);
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
        $o(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          $o(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = le("active-chip"), this.activeChipId;
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
      r !== void 0 && (Yr(this.typingTimeout), this.typingTimeout = Gr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === L.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === L.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (t.keyCode === L.ENTER && this.active.row > -1) {
        t.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((t.keyCode === L.ENTER || t.keyCode === L.SPACE || t.keyCode === L.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        t.preventDefault(), this.emitSearch();
        return;
      }
      if (t.keyCode === L.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        t.keyCode === L.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === L.RIGHT && (t.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === L.DELETE || t.keyCode === L.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = Nm(nc(t, "labels"), hw);
    Pa(t), Jm(t);
    let s;
    t.gridConfig ? s = VB(t.gridConfig) : s = wB();
    const a = nc(t, "id"), u = xp(() => a.value ? a.value : le("feather-autocomplete-input")), { validate: d } = Ya(u, nc(t, "modelValue"), t.label, t.schema), { selectionLimit: f, modelValue: w, textProp: U, allowNew: T, type: R, minChar: y } = xx(t), x = Ar(!1), F = Ar(!1), W = Ar(!1), B = Ar(""), A = Ar([]), S = Ar(), E = xp(() => S.value), D = () => {
      x.value && !F.value && (B.value && B.value.length >= y.value && o.emit("search", B.value), y.value <= 0 && o.emit("search", B.value || ""), A.value = [], s.reset());
    }, k = mB({
      selectionLimit: f,
      selectionLimitReached: F,
      modelValue: w,
      textProp: U,
      allowNew: T,
      forceCloseResults: W,
      query: B,
      internalResults: A,
      input: E,
      emitSearch: D
    }, s, R.value, o.emit);
    return Ax(pt(pt({}, r), _a(o.attrs)), {
      query: B,
      internalResults: A,
      selectionLimitReached: F,
      forceCloseResults: W,
      hasFocus: x,
      strategy: k,
      emitSearch: D,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: S,
      incomingId: a,
      inputRef: E,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Zm,
    InputSubText: Ga,
    AutocompleteResults: Yx,
    AutocompleteResultsGrid: Kx,
    Chip: iB,
    MenuMessage: nB,
    FeatherIcon: se,
    FeatherMenu: $m,
    Spinner: fB
  }
}), TB = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, gB = ["id"], UB = { "data-ref-id": "feather-autocomplete-no-results" }, RB = { "data-ref-id": "feather-autocomplete-selection-limit" }, NB = { "data-ref-id": "feather-autocomplete-min-char" };
function yB(t, o, r, s, a, u) {
  const d = ye("FeatherIcon"), f = ye("Chip"), w = ye("InputWrapper"), U = ye("AutocompleteResults"), T = ye("AutocompleteResultsGrid"), R = ye("MenuMessage"), y = ye("Spinner"), x = ye("FeatherMenu"), F = ye("InputSubText");
  return re(), Ze("div", rc(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    nt(x, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: qn(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: W, on: B }) => [
        nt(w, rc(pt(pt({}, W), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, Bp(B), { ref: "scroll" }), {
          pre: Ge(() => [
            yc(t.$slots, "pre", {}, () => [
              nt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            nt(d, {
              icon: t.dropdownIcon,
              class: qn(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            tt("div", {
              class: qn(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              tt("div", TB, null, 512),
              tt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, xt(t.selectedDescribedByText), 9, gB),
              (re(!0), Ze(Or, null, Yo(t.modelValueList, (A, S) => ha((re(), Nt(f, {
                key: A[t.textProp],
                role: "button",
                id: S === t.activeChipIndex ? t.activeChipId : null,
                focused: S === t.activeChipIndex,
                disabled: t.disabled,
                text: A[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(A),
                onDelete: (E) => t.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [pa, !t.singleSelect]
              ])), 128)),
              tt("textarea", rc(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Bp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? yt("", !0) : ha((re(), Nt(U, {
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
          [pa, t.showResults]
        ]),
        t.gridConfig ? ha((re(), Nt(T, {
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
          [pa, t.showResults]
        ]) : yt("", !0),
        t.showNoResults ? (re(), Nt(R, { key: 2 }, {
          default: Ge(() => [
            tt("span", UB, xt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : yt("", !0),
        t.showSelectionLimit ? (re(), Nt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", RB, xt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : yt("", !0),
        t.minChar ? ha((re(), Nt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", NB, [
              yc(t.$slots, "min-char", {}, () => [
                cw(xt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [pa, t.showMinCharWarning]
        ]) : yt("", !0),
        t.showLoading ? (re(), Nt(y, { key: 5 })) : yt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    nt(F, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var MB = /* @__PURE__ */ nr(vB, [["render", yB], ["__scopeId", "data-v-43a7e951"]]);
const pw = window.Vue.defineComponent, oc = window.Vue.ref, kB = window.Vue.toRef, ic = window.Vue.inject, Ip = window.Vue.watch, ZB = window.Vue.nextTick, Dp = window.Vue.openBlock, Op = window.Vue.createElementBlock, ac = window.Vue.createElementVNode, bB = window.Vue.normalizeClass, Qp = window.Vue.renderSlot, zp = window.Vue.createCommentVNode, sc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var JB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EB = {
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
}, SB = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, FB = pw({
  emits: SB,
  props: EB,
  setup(t, o) {
    const r = oc(), s = oc(!1), a = oc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), d = kB(t, "modelValue"), f = ic("queueSnackbar", !1), w = ic("unqueueSnackbar", !1), U = ic("nextSnackbar", () => {
    }), T = (W, B) => {
      let A, S, E = B;
      const D = () => {
        !A || (Yr(A), A = 0, E -= Date.now() - S);
      }, k = () => {
        A || (S = Date.now(), A = Gr(W, E));
      };
      return k(), { pause: D, resume: k };
    }, R = () => {
      s.value = !1, o.emit("closed"), U && U();
    }, y = (W) => {
      W.keyCode === L.ESCAPE && (a.value = !1);
    }, x = () => {
      r.value.pause();
    }, F = () => {
      a.value && r.value.resume();
    };
    return Ip(d, (W) => {
      W ? ZB(() => {
        f === !1 ? a.value = W : f(u, a);
      }) : w === !1 ? a.value = W : w(u);
    }, { immediate: !0 }), Ip(a, (W) => {
      W ? (s.value = !0, r.value = T(() => {
        a.value = !1;
      }, t.timeout)) : (o.emit("update:modelValue", !1), x());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: d,
      closed: R,
      keyPressed: y,
      stopTimer: x,
      resumeTimer: F
    };
  }
}), AB = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, WB = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, CB = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, xB = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function BB(t, o, r, s, a, u) {
  return t.modelValue || t.contentShow ? (Dp(), Op("div", AB, [
    ac("div", {
      class: bB(["feather-snackbar", {
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
      ac("div", WB, [
        t.contentShow ? (Dp(), Op("div", CB, [
          Qp(t.$slots, "default", {}, void 0, !0)
        ])) : zp("", !0)
      ]),
      ac("div", xB, [
        Qp(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : zp("", !0);
}
var IB = /* @__PURE__ */ JB(FB, [["render", BB], ["__scopeId", "data-v-5cf64a62"]]);
const DB = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
pw({
  props: DB,
  setup() {
    let t, o = [];
    const r = () => {
      t && (t.val.value = !0);
    }, s = (d, f) => {
      const w = { id: d, val: f };
      t ? o.push(w) : (t = w, r());
    }, a = (d) => {
      (t == null ? void 0 : t.id) === d ? t.val.value = !1 : o = o.filter((f) => f.id != d);
    }, u = () => {
      o.length ? (t = o.shift(), r()) : t = void 0;
    };
    return sc("queueSnackbar", s), sc("unqueueSnackbar", a), sc("nextSnackbar", u), {
      curr: t,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const OB = window.Vue.defineComponent, Bo = window.Vue.createElementVNode, lc = window.Vue.unref, ma = window.Vue.createVNode, Wo = window.Vue.toDisplayString, QB = window.Vue.renderList, Gp = window.Vue.Fragment, jn = window.Vue.openBlock, Wr = window.Vue.createElementBlock, wa = window.Vue.createCommentVNode, zB = window.Vue.createBlock, GB = window.Vue.createTextVNode, YB = window.Vue.withCtx, _B = window.Vue.pushScopeId, HB = window.Vue.popScopeId, PB = (t) => (_B("data-v-3e4a9e95"), t = t(), HB(), t), jB = { class: "list-main" }, XB = /* @__PURE__ */ PB(() => /* @__PURE__ */ Bo("h2", null, "Situation List", -1)), LB = { class: "situation-filters" }, $B = {
  key: 0,
  class: "container"
}, qB = { class: "situation-list" }, KB = { key: 0 }, e3 = {
  key: 1,
  class: "container"
}, t3 = window.Vue.reactive, Cr = window.Vue.ref, n3 = /* @__PURE__ */ OB({
  __name: "SituationList",
  setup(t) {
    const o = jr(), r = _m();
    o.getSituations(), o.getNodes();
    const s = 10, a = t3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), u = Cr(!1), d = Cr(0), f = Cr(1), w = Cr(0), U = Cr(!1), T = Cr(!1), R = (S) => {
      d.value = 0, a.situations = S[0], f.value = S.length;
    }, y = (S) => {
      window.scrollTo(0, 0), a.situationSelected = S, a.selectedSituationIndex = o.situations.findIndex(
        (E) => E.id === S
      );
    }, x = (S, E) => {
      const D = a.situations;
      D.forEach((k) => {
        k.id === E && (k.status = S);
      }), a.situations = me.exports.cloneDeep(D);
    }, F = () => {
      a.nodes = o.nodes, a.results = o.nodes;
    };
    r.$subscribe((S, E) => {
      T.value = E.showError;
    }), o.$subscribe((S, E) => {
      var D;
      if (E.selectedSituation != -1) {
        const k = a.selectedSituationIndex;
        a.selectedSituationIndex = o.situations.findIndex(
          (Y) => Y.id === E.selectedSituation
        ), o.situations[a.selectedSituationIndex] && (a.situationSelected = o.situations[a.selectedSituationIndex].id), k === a.selectedSituationIndex && (U.value = !U.value);
      } else
        a.situationSelected = (D = E.situations[0]) == null ? void 0 : D.id;
      F(), w.value = o.situations.length, a.allSituations = me.exports.chunk(o.situations, s), R(a.allSituations);
    });
    const W = (S) => {
      if (!S)
        return a.nodeSelectedValue = void 0, [];
      u.value = !0, a.results = a.nodes.filter((E) => E.label.toLowerCase().indexOf(S) > -1).map((E) => ({
        _text: E.label,
        id: E.id
      })), u.value = !1;
    }, B = () => {
      if (a.nodeSelectedValue && a.nodeSelectedValue._text) {
        const S = o.situations.map((E) => {
          if (E.alarms.filter(
            (k) => {
              var Y;
              return k.nodeLabel === ((Y = a.nodeSelectedValue) == null ? void 0 : Y._text);
            }
          ).length > 0)
            return E;
        }).filter((E) => E);
        S && (w.value = S.length, a.situations = S, S[0] && S[0].id && y(S[0].id));
      } else
        a.nodeSelectedValue = void 0, w.value = o.situations.length, R(a.allSituations), a.allSituations[0] && a.allSituations[0][0] && y(a.allSituations[0][0].id);
    }, A = (S) => {
      d.value = S, a.situations = a.allSituations[d.value];
    };
    return (S, E) => (jn(), Wr(Gp, null, [
      Bo("div", jB, [
        XB,
        Bo("div", LB, [
          ma(lc(MB), {
            class: "map-search",
            label: "Find by node",
            loading: u.value,
            modelValue: a.nodeSelectedValue,
            "onUpdate:modelValue": [
              E[0] || (E[0] = (D) => a.nodeSelectedValue = D),
              B
            ],
            results: a.results,
            type: "single",
            onSearch: W
          }, null, 8, ["loading", "modelValue", "results"])
        ]),
        a.situations && a.situations.length > 0 ? (jn(), Wr("div", $B, [
          Bo("div", qB, [
            Bo("div", null, " Result: " + Wo(a.situations.length) + " of " + Wo(w.value), 1),
            (jn(!0), Wr(Gp, null, QB(a.situations, (D) => (jn(), Wr("div", {
              key: D.id
            }, [
              ma(Fy, {
                "situation-info": D,
                onSituationSelected: y,
                selected: a.situationSelected == D.id
              }, null, 8, ["situation-info", "selected"])
            ]))), 128)),
            a.nodeSelectedValue ? wa("", !0) : (jn(), Wr("div", KB, " Page: " + Wo(d.value + 1) + " of " + Wo(f.value), 1)),
            a.nodeSelectedValue ? wa("", !0) : (jn(), zB(ax, {
              key: 1,
              onGoToPage: A,
              currentPage: d.value,
              totalPages: f.value
            }, null, 8, ["currentPage", "totalPages"]))
          ]),
          ma(pC, {
            index: a.selectedSituationIndex,
            forceUpdate: U.value,
            onSituationStatusChanged: x
          }, null, 8, ["index", "forceUpdate"])
        ])) : wa("", !0),
        !a.situations || a.situations.length == 0 ? (jn(), Wr("div", e3, " No results found ")) : wa("", !0)
      ]),
      ma(lc(IB), {
        modelValue: T.value,
        "onUpdate:modelValue": E[1] || (E[1] = (D) => T.value = D),
        center: "",
        error: ""
      }, {
        default: YB(() => [
          GB(Wo(lc(r).errorMessage || "Error has occurred :("), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const r3 = /* @__PURE__ */ be(n3, [["__scopeId", "data-v-3e4a9e95"]]);
var o3 = Object.defineProperty, i3 = Object.defineProperties, a3 = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, s3 = Object.prototype.hasOwnProperty, l3 = Object.prototype.propertyIsEnumerable, _p = (t, o, r) => o in t ? o3(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Ma = (t, o) => {
  for (var r in o || (o = {}))
    s3.call(o, r) && _p(t, r, o[r]);
  if (Yp)
    for (var r of Yp(o))
      l3.call(o, r) && _p(t, r, o[r]);
  return t;
}, mw = (t, o) => i3(t, a3(o));
const ww = window.Vue.defineComponent, c3 = window.Vue.ref, _o = window.Vue.computed, u3 = window.Vue.reactive, Hp = window.Vue.watch, cc = window.Vue.inject, Vw = window.Vue.resolveComponent, Mc = window.Vue.openBlock, vw = window.Vue.createElementBlock, kn = window.Vue.createElementVNode, d3 = window.Vue.createBlock, f3 = window.Vue.createCommentVNode, Tw = window.Vue.renderSlot, h3 = window.Vue.pushScopeId, p3 = window.Vue.popScopeId, uc = window.Vue.toRef, Pp = window.Vue.mergeProps, m3 = window.Vue.toDisplayString, w3 = window.Vue.createVNode;
var gw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const V3 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, v3 = ww({
  props: V3,
  setup(t) {
    const o = c3(), r = () => {
      o.value.focus();
    }, s = _o(() => le("feather-radio-button")), a = u3({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: s.value
    }), u = _o(() => le("radio-label-id")), d = _o(() => a.first || a.checked ? 0 : -1);
    Hp(() => t.disabled, (R) => {
      a.disabled = R;
    }, { immediate: !0 }), Hp(() => t.value, (R) => {
      a.value = R;
    }, { immediate: !0 });
    const f = cc("register", (R) => {
    }), w = cc("blur", (R) => {
    }), U = cc("select", (R) => {
    });
    return f(a), {
      labelId: u,
      tabindex: d,
      vm: a,
      blur: w,
      click: () => {
        U(a);
      },
      input: o,
      id: s
    };
  },
  components: {
    FeatherRipple: Kn
  }
}), T3 = (t) => (h3("data-v-24790cf0"), t = t(), p3(), t), g3 = { class: "layout-container" }, U3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], R3 = { class: "radio hover focus" }, N3 = /* @__PURE__ */ T3(() => /* @__PURE__ */ kn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ kn("svg", { class: "dot" }, [
    /* @__PURE__ */ kn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), y3 = ["id"];
function M3(t, o, r, s, a, u) {
  const d = Vw("feather-ripple");
  return Mc(), vw("div", g3, [
    kn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: t.id,
      "aria-checked": t.vm.checked ? "true" : "false",
      "aria-disabled": t.vm.disabled ? "true" : "false",
      "aria-labelledby": t.labelId,
      tabindex: t.tabindex,
      onClick: o[0] || (o[0] = (...f) => t.click && t.click(...f)),
      onBlur: o[1] || (o[1] = (...f) => t.blur && t.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      kn("div", R3, [
        N3,
        t.vm.disabled ? f3("", !0) : (Mc(), d3(d, {
          key: 0,
          center: ""
        }))
      ]),
      kn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Tw(t.$slots, "default", {}, void 0, !0)
      ], 8, y3)
    ], 40, U3)
  ]);
}
var Ba = /* @__PURE__ */ gw(v3, [["render", M3], ["__scopeId", "data-v-24790cf0"]]);
const k3 = mw(Ma({}, Ha), {
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
}), Z3 = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, b3 = ww({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: k3,
  emits: Z3,
  setup(t, o) {
    Pa(t);
    const r = uc(t, "error"), s = uc(t, "modelValue"), a = _o(() => le("feather-input-description")), u = _o(() => {
      const d = mw(Ma({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Ma(Ma({
      descriptionId: a,
      attrs: u
    }, Em(s, o.emit, t.label, t.schema, uc(t, "error"))), _a(o.attrs));
  },
  components: {
    InputSubText: Ga
  }
}), J3 = ["for"], E3 = ["id"];
function S3(t, o, r, s, a, u) {
  const d = Vw("InputSubText");
  return Mc(), vw("div", Pp(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    kn("label", {
      for: t.groupId,
      class: "group-label"
    }, m3(t.label), 9, J3),
    kn("div", Pp(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...f) => t.keydown && t.keydown(...f))
    }), [
      Tw(t.$slots, "default", {}, void 0, !0)
    ], 16, E3),
    w3(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Uw = /* @__PURE__ */ gw(b3, [["render", S3], ["__scopeId", "data-v-6775aeb9"]]);
const F3 = window.Vue.openBlock, A3 = window.Vue.createElementBlock, W3 = window.Vue.createStaticVNode;
var C3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const x3 = {}, B3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, I3 = /* @__PURE__ */ W3('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), D3 = [
  I3
];
function O3(t, o) {
  return F3(), A3("svg", B3, D3);
}
var Q3 = /* @__PURE__ */ C3(x3, [["render", O3]]);
const z3 = window.Vue.openBlock, G3 = window.Vue.createElementBlock, Y3 = window.Vue.createStaticVNode;
var _3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const H3 = {}, P3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, j3 = /* @__PURE__ */ Y3('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), X3 = [
  j3
];
function L3(t, o) {
  return z3(), G3("svg", P3, X3);
}
var $3 = /* @__PURE__ */ _3(H3, [["render", L3]]);
const q3 = window.Vue.openBlock, K3 = window.Vue.createElementBlock, eI = window.Vue.createElementVNode;
var tI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nI = {}, rI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oI = /* @__PURE__ */ eI("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), iI = [
  oI
];
function aI(t, o) {
  return q3(), K3("svg", rI, iI);
}
var sI = /* @__PURE__ */ tI(nI, [["render", aI]]);
const lI = window.Vue.openBlock, cI = window.Vue.createElementBlock, uI = window.Vue.createStaticVNode;
var dI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fI = {}, hI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pI = /* @__PURE__ */ uI('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), mI = [
  pI
];
function wI(t, o) {
  return lI(), cI("svg", hI, mI);
}
var VI = /* @__PURE__ */ dI(fI, [["render", wI]]);
const vI = window.Vue.openBlock, TI = window.Vue.createElementBlock, gI = window.Vue.createElementVNode;
var UI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RI = {}, NI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yI = /* @__PURE__ */ gI("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), MI = [
  yI
];
function kI(t, o) {
  return vI(), TI("svg", NI, MI);
}
var ZI = /* @__PURE__ */ UI(RI, [["render", kI]]);
const $c = () => window.VRouter || qc, bI = window.Vue.defineComponent, Re = window.Vue.createElementVNode, qo = window.Vue.createTextVNode, Xe = window.Vue.unref, on = window.Vue.createVNode, Va = window.Vue.withCtx, jp = window.Vue.openBlock, Xp = window.Vue.createElementBlock, JI = window.Vue.createCommentVNode, EI = window.Vue.pushScopeId, SI = window.Vue.popScopeId, Bt = (t) => (EI("data-v-0fd6b0cd"), t = t(), SI(), t), FI = { class: "container" }, AI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "title" }, "ALEC", -1)), WI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "description" }, [
  /* @__PURE__ */ qo(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Re("br"),
  /* @__PURE__ */ Re("strong", null, "Our goal"),
  /* @__PURE__ */ qo(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), CI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("h3", null, "Key Benefits:", -1)), xI = { class: "list" }, BI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), II = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, "Assist in root cause analysis.", -1)), DI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), OI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, "Easy configuration.", -1)), QI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), zI = {
  key: 0,
  class: "optin"
}, GI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("h3", null, "Enable ALEC for more precise results:", -1)), YI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), _I = { class: "choices" }, HI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), PI = /* @__PURE__ */ qo("Yes"), jI = /* @__PURE__ */ qo("No"), XI = /* @__PURE__ */ qo(" Continue "), LI = window.Vue.ref, $I = /* @__PURE__ */ bI({
  __name: "WelcomePage",
  setup(t) {
    const o = oi(), r = $c(), s = LI(!0), a = () => {
      const u = Boolean(s.value);
      o.savePermission(u), u ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (u, d) => (jp(), Xp("div", FI, [
      AI,
      WI,
      Re("div", null, [
        CI,
        Re("div", xI, [
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(VI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            BI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(sI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            II
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(ZI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            DI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(Q3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            OI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe($3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            QI
          ])
        ])
      ]),
      Xe(o).isAdmin ? (jp(), Xp("div", zI, [
        GI,
        YI,
        Re("div", _I, [
          HI,
          on(Xe(Uw), {
            horizontal: "",
            modelValue: s.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => s.value = f),
            label: ""
          }, {
            default: Va(() => [
              on(Xe(Ba), { value: !0 }, {
                default: Va(() => [
                  PI
                ]),
                _: 1
              }),
              on(Xe(Ba), { value: !1 }, {
                default: Va(() => [
                  jI
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : JI("", !0),
      on(Xe(Mn), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: a
      }, {
        default: Va(() => [
          XI
        ]),
        _: 1
      })
    ]));
  }
});
const qI = /* @__PURE__ */ be($I, [["__scopeId", "data-v-0fd6b0cd"]]), KI = window.Vue.defineComponent, eD = window.Vue.createElementVNode, tD = window.Vue.createTextVNode, nD = window.Vue.unref, rD = window.Vue.withCtx, oD = window.Vue.createVNode, iD = window.Vue.Fragment, aD = window.Vue.openBlock, sD = window.Vue.createElementBlock, lD = window.Vue.pushScopeId, cD = window.Vue.popScopeId, uD = (t) => (lD("data-v-bcb7dcc6"), t = t(), cD(), t), dD = /* @__PURE__ */ uD(() => /* @__PURE__ */ eD("div", { class: "main" }, "Something bad is happening...", -1)), fD = /* @__PURE__ */ tD(" Reload "), hD = /* @__PURE__ */ KI({
  __name: "ErrorPage",
  setup(t) {
    const o = $c(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (aD(), sD(iD, null, [
      dD,
      oD(nD(Mn), {
        primary: "",
        onClick: r
      }, {
        default: rD(() => [
          fD
        ]),
        _: 1
      })
    ], 64));
  }
});
const pD = /* @__PURE__ */ be(hD, [["__scopeId", "data-v-bcb7dcc6"]]), mD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMKcw0TjFj+uiAR/onqaaeLv/4TTmFrA4L+4z/+o/rqV7+aHLtxbZizsh9//PEJ6J/73OdWBeiH4WJ5Z1gOFM1+WM6V9/pyQGQNs8qmm26aIlqAncgTi6jY1nMzSJ4YE4oom0996lMpJl2kjudFyEjzr/7qrxKwX3TRRauvCd0ULeOdj370oynMUz7MMhyyiDmGEBDvfo973KPi4A2nbSRkBsIxKzrnDne4Q7L7i8FXdr6GUYg2z3yzwQYbpEijD33oQ6vJ8S/wUxQqHJgUBwrYT4qzJd0U9vje9763esc73rHKDeGOHKU77rjj6jWO2txZSzsH2occckh65uUvf3m13nrrpfTe+c53VswgBMCDH/zgZPuPhJ7znOdUxx57bHXYYYelSxylAD6nZz7zmSmu/cUvfnESCNKq57/ffvulcE6CCpkR7Lnnnim/PK18bUBcz+sR1+JMuCA+BUdOnLRPfvKT80vld+HAWDlQ4uzHys6SWCcOcJAKnQT0HJlN7dvA0bP5DIApRwSLFbbdiDZvta6onk7E/MORSnNnMupGQi7lJS5/ktsodMu/XC8cGCcHCtiPk5slrcKBwoHCgZZyoDhoW9owpVjj4UDuxO2WomeaPNft/XK9cGAeOFDAfh5aqZSxLwe6gXUvG3okGjb7CO0M8O+WZrxXzoUD88SBYsaZp9YqZW3EAaDNtg+s2f2tpmVzDzDPE/EMJ67QTmGh9XDN/Nnyu3BgnjlQonHmufWWrOzCH+vOXUBu98jvfOc71fe///3qn/7pnyp73XDq2sVSTD0nLBD3fpBIGkBvEZU4etq934SE9+xXw5nMOSvyJ4/q8R7BoSx+oyYziMi7nAsHZsGBotnPguslz74cCBB1DmAG3P/2b/+WNlXzsREbo9kiARCLvqG9e1aoJKC2V7yVsLR29yJNmQNn/zv+5V/+pfr5z3+e0iIoRA/R8l2Xn3ylaV8f8fD23o80pRMzBr8L6Pdt2vLAjDhQwH5GjC/Z9ucAIAakdsy0y6SdKYVC2gUTGANy2xjTvoVi0uZjlWz/1Hs/AeCFi/rYijBNhxmA/AkAwsQirnvf+96ri6EK0Pfmabk7Ww4UsJ8t/0vuXTjAPGPzNBunAVyrS61uBbK2NLDvTX3/GknVtfcuya9e9nyAtN/xf1xbfXDlh1kEU5HtmG13rIwEEYFjAZdFXgROlKFTGnl65XfhwDQ5UMB+mtwueXXkQAAsbZp5xkdKbI0MRG1rEKYTtvO2EPs/IaS8Zh1A3/+2X/AlKrMPs4yoW1vKXcqxvBwoYL+8bd+amnOMWvVq33sas/1rmEfsadNp9eqsNOfIF+NyrZ2Qou0TUICfrZ9ZyacYCSv+gvz51jC+FGSpOFDAfqmauz2VDacmcATyNGMbkNnwbJ111pn492AnxQmmHY7jT37yk+mjKcDeRnDqhDrtpzOpspR0CwdyDhSwz7lRfk+UAwHwzkIkL7300gSIbN12svQZwV571Uy0cGNOXHSPb9MySdlj/wEPeEDaNZPGD/A7hZGOuQglucKBW3GggP2t2FH+mSQHmEFovnbCtA2xEMbHPOYxSaMPkF8EECTMQoMXt++ziB/84AeTiccH0NeuXZtCNyfJ65J24UCdAwXs6xwp/4+dA0AeADJtMNmIfwd4tF3x6otI6pzb6UXyfOQjH0l76duN0+cIxe1bmJU/t4i8KHVqBwcK2LejHRa6FLYssA/9Bz7wgcpHyDfZZJMUOrnQlc4qlwM/B/TVV1+dzDsbb7xxityxKCx/Jnu1/CwcGBsHCtiPjZUloToHmGR8zs8HQvzmqOSEpdkvEwHyIFo8e75ZDnOWxWG+mWsNQdHwg0vlPAkOFLCfBFeXMM0AtAAsZovrrrsumW3Y5R//+Men2PMlZE3XKlugRcs349l6662r9ddf/1YO6jpPuyZUbhQONOBAAfsGTCqP9OZAOCTDFGFbgTPOOCOtgN1mm23+D4j1Tm257tqH593vfnd15ZVXJhPX0572tNXFWDiBp+HsXS7OlNqOmwMF7MfN0SVNL4DeRmKnnXZa2lZgu+22S07Y0PaXlDV9q01Yfu5zn0sfWReaudVWW6VPKgZP+yZQHigcaMCBAvYNmFQe6cyBOhiJK7/44ouTKYIdepTtDeppRwniepzj+iKcbdV86qmnpqpsscUW1V/+5V+uVmsR67taufJjKhwoX6qaCpsXL5M6+Nx0003VySefnIB+xx13HAnocctsQB5BfkeecT3O8cy8n232tuuuuyZn9rHHHptW4uZ1WrT65nUrvyfPgaLZT57HC5tDgK+Im7POOivtacPmLI487o1SefZsi5KYOaTHdu3DIrEAa5S02/hu8MzWyjR8q4yf//znp0gd5S3msDa22vyUqYD9/LTVzEsaYBRnBbIF8SWXXJK2OrBQaND95COtOEtTJM83vvGNFJ548803p4+HhBPYHvKiVmyQZotj76FFA0J75p9zzjlp1e22225bPeQhD0n1jPouYp1TBcufiXGggP3EWLuYCeegDJCPOuqo5IRlox/2+60BYACbg1d0ikVYAN0GYrHKlhCwcZrzZpttlnaV9IWqRSW7Zx599NFp6+QDDjgg7aAZvFLnRRNwi9qObalXAfu2tMSclcOq2FNOOSWZVkTd2Hue9g2ABgEh4OVgoglwA+i2B7Z3jrTy0EPbCdsh833ve1+1wQYbVLvssksSMoPkOU+sZsoR3USoPfvZz141kanDotZ5ntpnnspaHLTz1FozLmtolTYzO++885I9PYDePeAzKAB5HpgD8fe///3JKfnkJz852f/jm7KqHWmz14tSsRr305/+dFqFOmieM2bjQNmLaOLwtl8+cxmBGLwYKKHy8NJzoID90neB5gwAMrY9uOiii6p//Md/rNiSafRoWAAKAcIpyUb92Mc+NjkkCYC4J32/4zCDsIkYO7ZtB77zne/c6lnPLxL5FONznvOcFIt/7bXXpjZYpPqVukyHAwXsp8PnhcgFyFra//nPf77afPPNqzVr1iTTzSiVIyR++ctfpjTvdre7VQ75OHqRr1v5khUCgNJZZDKbedaznpW2Sv7Upz610MJtkdtxlnX7zVlmXvKeLw7ceOON1eWXX14xs/jANsrt6cPWxvYKPvAB6G2Slmv0ndIkCOR7hzvcIT3rc4CLTPhBmPmKlxmQhWti8vHL9bi/yDwodRudA0WzH52HS5ECkBElY3dGppZxatJMQ0INhVI2IXkH4NsP3vuLTMFrPgwfP7Glwvnnn5+idBa53qVu4+VAAfvx8nMhUwOsNPqf/OQnaXdGoDNuop3Kx9nRhGj3AfxNnl+EZ6xjYM6x/uCGG25IPAthsAj1K3WYHAcK2E+OtwuTss/q+Yj2E5/4xPTRkXGDC+3cBzysmA2NvR/zlEEEj3eazgj6pTkv95lwAL7oJWGqhQoHmnCggH0TLi3ZM7lmLZ7+Xe96V2Xl6nrrrTd2TsjLFgiPeMQjKrZ39vs8/24Zml0wLQF8HytfFiIMkbbgoL7sssuSCQzP4t6y8KLUczAOFLAfjF9L8zTwECUj+kZoo4+PhPmmCRg3ZRQNnTlGKKUIG07gXk5feXvH8ZnPfCYtNnr0ox/dSEA0LVObnwvTFXOOtQbaRvgpvwWeFCoc6MaBAvbdOLPE1wNMbXAmzA+o3OlOd0ocGSfQ5ywWWWOB1jXXXJM+egLMAJv8AJmD5uq6T/lZUPXNb34zOYttvLZMQBdtwFFrpfFVV12Vvh+An3Ev5235XTiAA+P3tBW+LgQHmEc4AIHo4x73uAQiIQQmUUEALh+LtYDXT3/60/S92rve9a5pl0sgxj5vJSkBRKPdcsstE9i7t0xgH3Xl6zCrodl//OMfT0IZHwsVDnTiQNkbpxNXyrXqC1/4QlrRaidL9vSmjtNRWcd0dP3116dtEGzLgAAYQCeAAJ1ZBsHwqEc9KpmWaP2Ab5kIPxyIUGa733333dPGccvEh1LX5hwomn1zXi30k7l2DFQ/8YlPpF0nH/awh6V6hzY5aSbwC/hA+f3vf//qIx/5SIo2+fnPf56Azb0HPehBaYvj2DNfucPcM60yTpoHTdKPujrjCbMW/0rMhJqkUZ5ZLg4UzX652rtrbUNLBB4cnz5G8rznPS85Tru+NMMbeXlnWIyZZx18EB574oknVnvttVfS7l0PgTDzQpYCtIIDxUHbimZoTyFi6wKaswiZNhDgikN5AuAKmN2yAZ2VzeLv2e/NhHI+pX/Kn6XnQAH7pe8CtzAAePogifDHjTfe+JYbM/6lXHEoSv57xkVrTfY+HCP2HtiXbZBb0yytKkgB+1Y1x+wKA0A5YW1Ixmb/0Ic+dHaFKTkPzAHtx89hv3+fiuS0LlQ4kHOggH3OjSX//YMf/CDtuSKcTzx7WZE5Px2CactaBTtjcmz7dGOhwoGcAwXsc24s+W+LlGxBMO0InFmxHUASaIsg1NSFgLathTUK1iMUKhzIOVDAPufGEv/m1AP29773vas73vGOiRNMA4tIAe7qJ2zTERTgDzwd80JRB18Oe8ADHlCJzrH9RKHCgeBAibMPTiz52YetAcRmm222ugfOorLE3vni0vknfvSjH6VqimSxodp97nOftIjLxXkUdj5M7qtWV155ZVp4ZjfRQoUDOFDAvvSDpMECe1EcbQm3nESz0Nqvvvrq6j3veU8CdKtuHTTgH/7whwn8gaXtg+91r3vNHdibiRBQvmD1s5/9LJly2PHnUWhNov2XPc0C9sveA1bqDxjsNQPghPAtIjFT+aC5PeDXWWedZOqwlsBnEAkBDk0O6s997nPVscceW22//fbVwx/+8CQM3AeYbQfNKJ8PlIvMseUF4W27iXko/yL2uzbV6RZjZZtKVcoyFQ6ETZopw5ePHvjABy7cHjNhe/elLUC/wQYbVBtttFH6tB87NyFgPx5CDjD6QIstB0466aT0wRYNESA6lUYZQya+D7Bm5WPwzFRCMOet/GNgQUmiAwcK2HdgyrJdsuHYTTfdlGy9i1Z3QAf0mG+sHeC8BO7hvGTG8Uxcs/+Ojd9ow5dcckmKbHG/KWCGAMXHEDTxO3f+TorPkT8nO9+E6KpChQM4UMw4pR+kvdDZqk3/m4Ja29kG9KIuNHr/A3ugjuJegKP/4x0avxmAL3Qx7eBN3Gta73je9hNWJPt84Pe///1kNmJGevCDH5z4TQAQOPF80/S7PRf1uvOd75xs9z4nefe73/1WEUfd3i3XF5sDBewXu3171g4wAKPvfe97ycYbQNHzpTm7qX5mLpyW4tCtDm5CNGMROgGW3h2EgPiHPvSh6uyzz075Com0ulVZvv3tb6dZg5j4pzzlKdWaFZPLuHlPQDFH8cUw5URo5iB1KM8uFgcK2C9Wew5cGwtwROGw1y8ShaZMmwa8NF3XmhJzjn3zafZmA+Hk7Pc+0OYHePe7311dccUVyTfAdAR8gb2yEECin3xz1w6je+yxR3IGSzvK3S+fXvelwQdhpsZ8xWSl/IWWmwPFZr/c7Z80TQ5aWiztbxBAbCvrcsCk1eb/NykzwPYOgBz0fYKB2YhD2L78vt3LjALszQ5E/4gCotU/6UlPSlsciP7hVwgaRxuog9kEu33T2UzkX86LyYEC9ovZro1rJewSQPmeKRq3OaFxQcb8YNSDOQbAAr0mBGgDbL0DpGn5TYlt/vTTT0+O4DDPEBg0+jj8j+e07yc/+cnp90c/+tGk8St3lL1pnt2eU/a73OUuSaB3e6ZcXx4OFLBfnrbuWFMmHKF6tM4AuY4PzuFF9aFFI6GlqB+Qxn2mD9/Dvec979nXBBJ8A+K+j8vhGs7guBcgHumbRQF/swczACadL33pS6mM4/pDyFlUJSInyjGutEs688eBAvbz12ZjK7HpPfsy23SA0SKAQgBqnIVSqte3vvWtZKqK6zkj3c+v2yaYGeQe97hHY/OWVbgcouuuu+7qegXp1g/5RH6Eiv2IYgWvMrk3CkU9CBLCjl+GICq03BwoYL/E7Q/sAQGwp40uIgFO2/76khNbOv8Es0w9OgVAuuYA2PYJ2mSTTZJm3BR8mX3MlPg/BgFXoEywWMUbQmAcbcFMdPvb3z7Vh9mo0HJzoID9Erc/QHIw49TBb1ZsUZ5f/OIXq4ueRi0HEBcFs+WWWyaBJkrG7p4EHdBn6nBf/YH15z//+RTBYkO4Rz7ykekZaYS23Ks8zDJAdRjAvt3tbpdMOrHYq1c+/e6FcCJEmOfwM671e7fcX1wONPc8LS4PlrZmQgDFfNsTJzT7JqA2KsPqwAN4f/KTn6SNuwAx0xLw5VykkQshBMpomPLJj+39ZS97WXXhhRdW1157bUpbOCbt1/2If6eZP/OZz0w7RrrXhLyvXITGbW9726E+HGI2EWsBIr0meXd6JniEh8oj7aLZd+LUcl0rYL9c7X2r2oYWaao/TQJGAWiigT784Q+nRUY0UIAHZIHTVVddlWYeT3jCE9LiI9EloxDhsdNOOyVnqOiXT3ziE6tROgQeTd42x0IlB4nAiVkR+7ioJr4Bdniafj/yLgGDJ8xpKMC637tN7tPs8bhJWZqkV56ZXw4UsJ/fthu55LR5U/1pUwA9bfrUU09NH8kWd27xEXBCQFBEi8VHl156aXXddddVBx54YHKYDlJeeaEAUCYru1k+5CEPWTVvuIcX8h6WH/JhirGZGiFFaPgfyEbe9XJ7R54Ej9Wuk1jYJu9u+dfLU/5fbA4Um/1it2/P2gEbGvS0wUB+TDeXXXZZ2lLYwiPgaIbBXOMAurF749Of/vRk5rET5SDfVq0DfTCD1s7kIj+hic7ykme8E882PQcPH/SgB1UOzmAU5jG/AX+kT5gph/BOfgKfghT54348451RKco1zjRHLVN5fzYcKGA/G763Ile2cWBDA50mAT0x5cw3j3rUo1Zj2V3PjwAoZpUtttgi+RcIiBw0O5U7ABPQOQg0PgHmlW984xvVzSsx934zn9QpwLF+ven/TEVbbbVVinLykZTYdZIgIWBi9sCE5mtZNluzP87jHve4VcEwahnqZQ1+1K+X/5eLA8WMs1ztfavaAnuhl2E6udXNCf4DfJlm2Kg5ToG3KJywfdez9jxbuM/tMXkARwKqGyjm18Wvf/KTn0z2ebHzZgaAlzZPA7e7JfOJ/8dFTFL77bdfddxxx1Xve9/7Uh2ZaThLgTwBIASUcxzIEw5mFigv+zjKQ8AAe3b7WGA2jnRLGvPHgQL289dmYysxcAUuoUGPLeE+CYkColmzyRM0TDq9ykEQuE8w0NDtROndbhSarN08zzzzzDSL8G3ZzTfffDVu/sc//nH19a9/PX2khAllm222SR9aHxfYEkwHHHBAdf3116dQTsAu+kd4p83VOHD32WefFAkVkUbd6jPKdYIU5eakUdIr784vBwrYz2/bjVxyQEu7FgUzLQLEtFrhlBYSNRE0hJLnROPQVG9eMcMA6G4EsAmEt7zlLUmLZ/P34e185kCTpm0TAh/4wAfSfjY+RahM4yKLq+Tt61dA3qwCsIs2ouXjfwgX9Yvf48pfOiFI5VdouTlQbPZL3P6AB9ib4k+DAJqDtgnYmoKbdxCHJoBkekJxPf2T/TFzYAunvW+88carAB7mIjMFBwLIVsram4bJxbvjJBo1wcIMJVKHgCF4CC31D56MM888reBzN17lz5bfi82BAvaL3b49awcAcm2358Mj3pRXAA/AHmSVbIAiH4P3AHSkF8XyvwN97GMfS9sdiPIBtGz++f38HaDvmfXXXz9F0DC3oEgrnp3UOXjiPC7Ky+535DGu9EdJh89C9JFPPppRWfBVaDocKGac6fC5lbkAAdN8YDgtkidTiRh7dvs1K19pakI0ZM5WWv06K5/160QBmD4IAuTYxWnqvQRagKFn2de/+tWvpvR7vdMp7zZdCz4oE3ANu/2sy2gR2+GHH54ENpNczNCskt5zzz2Tw9y3kE888cTkQ7EWQtnnuS1mzfM8/6LZ59xYst80bPZjTs9JEwACrA7RMI9+9KPTHjXyzgdzDlRRJtcIJEAsCkcoZjcAI0TcYzIZhOIdX7YiIDqVY5D0xvVs8Cw/N03bO3wF/CODrAhumv4gzwH2I444IjnBrZc444wzqlNOOaV60YtelHwZQmIR4RQOef9fc801aV8j7VpoNA4UsB+Nf3P9Nps9IABuYcOeZIUAqAPwsKUzn3zuc59LkSI0d+AEdB0BbvH8F77whfTBbh/7yB2b9fKqC8FAiElnENDmxGQqCl4ow6wo8g6e5WdlCv7E707lxAfv1Z3TnZ6d9DVgr22Y1vQ5JBTU/77Utd5666VrBLmwVWGxiDIQprZ0YYx/CJZlogL2y9TatboCWFq2xUWAcZrEUSncUfijxUcGNbDluHQAdMKImenalY3LmFgsrGJbNxMAYgGIyu1/5F3CxHuDEnDM0440B01nHM/LWzz+DTfckNYkXHDBBdXFF1+ceGH24b6jU7sFX/CA890agnz2NI7yDZqG9vbVMN/l9SH2HGgJ5tgXyMrj3XffPZl63vve91bnnntuqifzD6HAH0Mgf/CDH0wO+EHLkT//+te/Pm3BkV+jVGy99dbJn5BfX4TfxWa/CK04ZB2AKe1amGIn0Bgy2b6vBYgKn9xxxx1T5IyBbfUp56tyAQNgZ4UvgSQsUggjAmaRRp6Z62zBhBhHa8wWOj2bvxe/OQv5A+TvnW75xPOTOgMzfgcOTDZsJgw8wBPAaNM29uwNN9wwrRvoVg7ObBFJ6uT9WROTzdve9rbqda97XeKxOpip+bhMEKFPYGsDeyXZQsL+SISBe8xS3/3ud5NJ6NBDD11dKOb6C1/4wup5z3teWpUtzJVwNKNQd+lYrZ2vFqfk5P8rg+0zzDYIp0WjAvaL1qID1Ie2B+wBQoD9NAFO/gYgB9073/nOZJNXDlo9LRvouefD3AZ+gHacO1UVwAMGzkAg2c9WHaAOSIBIbDMs7V75dMp7HNeAlJmO2Qwg2mijjZLZAwDS1JXTNgsnn3xyimSxUIxZRLvViXCQnjaeRV3q5bEBnbUP6ubzjVY2WxGtji9+8YvT4+rH7ISYdAg3fQCIB3kXAeYg71m/ETMYC+psrRErtM0o8OwNb3hDAvLXvva16SPvZj1+Syu+ecCEJM86jXtsEOYULQJJnQk/x6SogP2kODsn6dKEAQLNiBll2qBgABnUz3/+89PUnYlCWWh2VpyG5uW5foMtyr527dq0ahZoMv14D/AFEORN4xqbsJmFL1rZ6sDzKNLLn5/0byGJV155ZRKCBJyyKJ/yK49IJusCbPHAeUlQ4x0+BX+i/NoV6Inxn0VdOvGKlq38Diamo48+OtVjhx12SHWjbecg7n/9IyfAjkIo+O05FNfMZs4666x0zR+RXHvttVfl4zW77LJL5eM0TEKx7sH7FA0C6Pjjj6/OO++89C4/A0cysxF+6h/Pfe5zk/LhAe3C72S2pc+GwtBvJmXWxYzEtKV9Pv7xjyeTFcVGOSdBBewnwdU5ShPY0550UhqxDt8JFCdVpRyEaK+dNKrIO382rtXPgM7gAfJvf/vb02ZrzAQGooEZQKiOZgEAh3bpfr6dQpO86nmP+r/4c/Zszsr73ve+CeRjxqU8yu5/ZzMQQs3iMeX30XIAE/VTFhojgNK+sybbVihvbh5RLtte8MfofwRZrtkrs//rWz8HsOdCIQRAXMMHMwgRXBHJg4cUCQS0zR7NLK1yDiJA9UMHYnbSJoQTAUIIvPzlL6+OOuqoNGsgRJiTrMS+eWVlt9mXejA7Mgf1ote85jWpbspFoBN8FBQfz2HOHDcVB+24OTpn6QF7GrT9WgDJLECuCcualiueAyIcwGL5DaAbb7wxmYUADJAHhL4zS5M2YJ/znOesCppIo0m5Rn0GKDnwnvYIZAB9XIv0/R/kN6ACnPe///2T0zPALsruPls30GAWmxVFuQGmvYBOO+20tKhKf+N8FoJJG1dnBMgDsP0PPGN253+k7cxCcxNdCIDQ7A855JAEyHw+npUGbTrSqj//q5R/JVwiDWUE/jaq22OPPZLP6M1vfnMCZiYiFHxXlv333z/5EvgHrBXoRdqZuSjaS59UNud+s4Je6fa6VzT7XtxZgnvsuTR6tkOa1zS1+kmxF8AYRByY7Nm2QQDspu00eYPJwKKBEQrCQE3DQ4ueVLm6pausQAkAAW+zDCDXi5RVW9EoAQ9ntnaMutNmmcSsN2hDmzI1EayOMJGon/IRAgFwwDPANu7bysIMRd20GyEHuLVlzFo45Ak1wO63HU45/2nJCL/MgiLtAOlcsHguz1+fQcx7QdInQM1EUAgNzuEwNz3jGc+oXvWqV6VnBB30In4GZiCzgssvv7x66lOfmvplr3eGvVfAfljOLcB7Bo8BAhDZrA0ImsUikLohGiPTEGHm+7YGlzoDes47R2iIQDfActo8oIUzM5lp0cr7kbI6gA+QB4bazzVE+5Ump2iYd+Jev7THdR8v1QV/abEO5gpRT4SROPvcrKP8tpwmwIKYT0444YQ089Ju559/fjLBePaggw5KaQJl5hp8QNGHOfiDOOyVJ8Adr1Fo+vEc8K4/I6+cor+4FkIjhEj+HHt/P1JuJiF5ECo7rXw2c1JUwH5SnJ2TdAEA4OMooq2Ygk4bFMbNqnr5ASK7b932W8+3/l79/qT+B0IOINJUC/c84HRWbu85Rx1o9bR9JrpZkbKExh5lAMT6WCdSh3333fdWt8w2CQDx76HF81eIqhGD/+UvfzkJNBp0aNk0b36Pc845p7p2xW6PRwQfClBes2ZN4pXZnvIQDCJzgHeUL/b/p3Wb+SErfc3CfFkNyVOdzJCDwkcQQiOudzorp5mOmYgVxtYSCFGdBBWwnwRX5yTNAAZAb28YA8pUNK7PSTXmupjBa6YbYE8TBnp1bbJTJUMweDZ/nhAA9oAeCAG7eSb27XXXXfdWVaD9c5R2I/c4rplI8MH3BZhJwqxCcIjxJxA4j23f8dKXvjSBdwgEYZCc/fwM2slvz2qncL4SDkA92lF5emn7ncpLIBIenMUf+chHOj0ylmutB3uLS0zB2eiAkmm3hg7mcqCYiuV2tbFwpmEippBWgZpu5tO7hq8P9VhEGNQHwKCJhVaos0b4l3oEiAyaXnl+cA5EG9BG/aaN6+P9SP+nUbJb0ySNjRgTIk70SfZ/QBLX+6W5aPdpzY4gETg58SNwvtLU8R+JoiEYEP6yvdO43/SmN6VrhKc1AdFGgD2EQ3pg5Q9tHyZ5vxsJGMjNVZ4TJstUNSlqLdjTcF7xilckbRMD2DJFTSAgd+ihh6bfpC5tNMD+JS95SQIuXwkaJ/HM77rrrslOSAIH+Y6qlXqPfexjpwL2okvY+AD0qGAfIAAQ2E6Bhs4be5dEHct5chyINmBvpoFSboASTZ+GHvfzEsQ1Y4QZgxkuBxwmC/4JseR1M0qeTvldJd7hX9DTnva0+JnOxgWgJ4QJVv/nSt0jH/nItOdP/lIopvm1/Lf78Ikgsv2HdrfAyszawq5JUWvBniNG5UnfJzzhCanTYjYbnKlZkNjUXBM1QPIpbTw36rnbVHi77bZLDZTb7EbNq9v7FlvQQlATe2C3dDpdN70VGYG3voua87TT8+Xa+DnArEB5sEKUQqENOvU7YA9waIdW0x544IGr/YEAAPQUoNBWx1/S5UuxmwJkrNRJmGYvovFbRAbLjjnmmNTGFFqCxoKtSdFtVjpTKw16r3zlK6uvfOUryUYWmkwnJtBySUage/rppyctOzRVz1stZ0prhVrMBly/7rrrUhgYR4/0CRZefxo8yUvaW80WkpbjiDkJKJqiGWz2+Lj66qtTHLffiJf/1FNPTYOWpgxAd95556StuU9DsDxbuB/n0Je+9KXk/LGwg5TvReywBjNNQx0tyhgXEZAicvBh7733nuh0clxlXsR0rrrqqhRxQoOkNbItU2AAvzaKsxkAm7TQQn0nTAaijcSuc0YDorg+TV6BlDjk22v8ur/MigUFVuQUZ/AkTTj43FrNnlmG1nLcccel2FMe+E6dhnfcYEDC7Jh7HBwuiC0TqALqnCwzJ0x0SuliujxstkVLp12dvLKXBonORGMVpjTkYSVddFCDi4YVRFKbklnRCOjtyXHwwQenPUGkT5DI1yFdC38spnnjG9+YBmmvaTe7OhJdAvTHSepDGxSixnbYayXrOPMtad3CAX1Rv6FIcCbqO7ZMECXCTCOUjz2Yn4iphpmGQpIDOoWAZp8LgFtyGO2X8gUZMwHo+rRyGVPGkXIyuVJ8YpzEe/Uz56t+rc7q6TBr9X/k4UzQOaM419Oax/8J84gymnT5Wwv2NkeymEKH1/HZMIHnU57ylASSnRqcgCAhTV8tlx+EvBt2fxq5UCtCwsACyoSAUC/ad26zz/MwKzA1MwhjKrd2JXTMlO3CCy9MGnM8byEJ8xQSC+1/JpRR7fCR/jBnTifCzd4s/BOhSQ6TVnlnMA4EkNLuAL7oKLNRMy1hecDdDBYw0tq33XbbpHjk2iCQtbeL0EHPjouibMaceH7KgFh5JkXBAvw8ZiIUFUIJUBuvEcMe79fLQ0kjKGJ1M8XJs87KTzlSF0pIrux5ptP4r6df/r81B1oL9joKWyQthbbJFKPTH3nkkQmEx+2A1YktcbZPh99BOmNTUlZkVWaQzr9mJaY37sV1GkxQ2AMJi1mRAWRGJELA3ummljFYZ1WmZcoXeGmDADLgRmkxoxRd4zCj0yYAn0aMPI+8z0RIODDteHZUIuwJEOBuq2VpCxAAxMrG1En5MRP2G8DLF+j7TRBF+TqVxT3avxh3K4bV0Znw0P/8b8zbEVU5jCsKn/HEnBraf6e0y7X/y4HWgn0UlTkhTAo6ho8YcGKZLg4y/dFxe5Ed6EQ2CL2y0k90hLjbQUj5UH2gGZi9zC75NHyQ/CbxrBkNDd9HJCzdngcKgIyyxv9xjuvjOOdp1n9LfxSNs/6ufgH0u5H8kff0b8BoTADEJpS/nz8PWC2wM9M0u5Y2ASNdESRMo2FukV8/U02edv03gdApuIHWD/DNsmn6TERmNxQ/fjIzCTMcZSJo8hlOt3rV8162/1sL9jZJstAgt2H7rZMBzm7gCVjr+4rQhggHHSiANTqEBteZdWxmFSaYThSdqZ52/qwOiDjPQrs3cEx1rQJsMwEMPAEuys5RKOY+NMg2ll15lTvALm9TAOT6OCnyk6a+FPk6jwJ4w5Yxrx+tnoC2L0s+a+yVdryvXg52dqYjjl/jC5AybdKiafJhS8/50Cv9Ye9J3zg1K5YnU46yGkuAH+irr+AGYc8EEWe2RVCej3oNm/+ivtdasBdZw6yy6aabpk5ncNkC1iIqHbBbhwZUNlviYAXQppyeFyEjTQIEsF900UWrbWqgim32jo5OqMiH6SV249PxaLxAUOejaeRf2JGYGQhtwy6LOh0tWWdUdr6GUUl5CJsQXIQIMFaecZFBps6ELftvm4WUQQ2UmBk4z7UJoikSWtprkNlfPx7Kj8mBrVp+NE/XaJbaGiDmykm/9MZ1n7JibNC4OXRDoemXPlCN+ggSoMVTWIwXPgMgqh/n5B2UA37+O3922N+dwFoeZsza1aHOhJNNz4wDgs64A/j67KzaYtg6T+O91oK9KAOhgO94xztW+cBGx1FqN7sgHSPvHJypQNsWp8iyaVNP6bH9sUcTAA9+8IOT7T/SscWtfSkOO+ywdImjFMDnxBZqEZcVdAa1tOr5+1iycM7Y4pTA2XPPPVN+eVqdNMG8Hvmz8VvIps4dJC+AJgJoHBT5G0xA49oVZzPh1U2wjiPPUdIQeeJjFDQ8/oYoP+FKAwTCz3rWs5IfohO/m+QdQOYMVM4+++wUeSI/acqT+Y7yYOWlPkITRt4JirLF/+M4R9loucBaOG+9z0YZ5B/PyxvIs8NTajhb+WqsJuUMZcLsJrQ61aPTtXHUTxrd0sZ75XRQTgiom1f2sDH2fXyE8BWRpz78ByjnRbqwZH9aG2cf7cBBqjMDeo7MploLLc+zOVDRiGljNJZuRHs2kGMTpPpzOgxHKo2nl4kjnEzhSKqn0/b/TZUJWgPJRz1oUsMC5iTqSgu1oI42a1YG2LU3cKDtc7LzwXiOIDezClPcIOVRb23Oce/LR/KzDYH21ycJFs/oE2zmQNLCGMpEgGucB8m3ybPSdVBiaPYveMEL/k+/recN5PHFDBXIc7DyUZkd5rbz+ntNyjPNZ+rl879DCKhwbPyIyCSmLbNu7bXM1HqwX+bGmVXdYyDZ/5s5xy58wLSbljXtchrMFtMBp7Uroa1MNTHYlUU5A/QBMKA2GzS7G5SAuYAAGj3NnZmQkA8hEPkBEgLeGgsKim+mxh4rk+QbExZeiKuPkOBO+Zl9mBVeeumlSQMW7gvogWAoLXgY1CmNuNeGc5Q1yln/n7BnatN2zsy3NH2z+mUF/d84dIXa0HjzUoZ6pxpHuSNNaem88X905HHkMUgakS8wtfgLSDzsYQ9LSQA5FM+kfyb8J+eH2RnzHsBn0gP0ANnhOYcy+l8ZzayE8NHwc5OU55rUAWj4SDZzAB+N2QPgjLwiP7MJMwcmMDwzM/K8PJrkMwwL1ZF/ypkzPdfMpRf5sm1br8LsiB9MWxya7No58EVZ471hyjStd6KskV/9f21hBk/gAnhho4S++rIQxCxP+wXNQ72jrMOcC9j34Vp0hugIeacCKiIEOE0BisP/AMIAi5Ax10yfnYGV5wOcwu6bp5vn1ad4E7kdgM4ERusz5ee4M2hQlG8imXdIVH7awRlo+wA0oGdqy/mYvxplVBf2W4535jlmKffifv5O/be0aerAmxbM9utat3eVEeDiGXMg0wib8qQIgBF8zFThpI+6OeuHbNgnr6wE1zftvUIohPPSM8HXSZVx1ulqC4Jau3PwCtsUoKEv5Ka/KGe3to3783xebiNWg5aLxjc1d9DqHPwIYoAdwFuEhoFDc/Ac5yFgR0ApBj0NkDZK6wAeADU6HnsvjcP1XONqUMyxPqLOUW+2Z9tWWFW7ZmUxizDWWQAEoSjf+BwcDVo7KGfc68QE7+ArwGdX1171CJNO77mmXa2iFoIIKIIn3Z53XZm07c0rzkKgwvE5CV+HujDJ0NBFziibugYx7zDDAXt7r1uVG4v34jnnJnWKNOf5zNdiryB9mI9DdJ5IP+YdY3AZ+FDAfqUHR+fPG5xGGA5dA8vKQVNzoM75S4Oj6TqAd+xhIg1TfddicRUNS1oGPQBh26XpAy5AagbgOpBgQ6VFm24DJeAqrZyULQAuL3P+zCi/8zQJH2Dxtre9LYW2iTaZFdGqCUtAj6Kc0X6dyhVmF1pctGdTsJeXpfzqT/j20uojb89Ee9Hue5Ut3hn0LE3f1dWv2KGVzTX80DdEDQkzRjbhI7DDbOFa8M3vRae8rn6vWQF7DnS+HJFcHLkCEGJmNOmxNUt+LzXYxwCJDmGgAmIefZqRqAUDx3NAGLDbs4eWQBungZsmAhSDKQZdJ01OJ5KPs3yAOzBh2qENypMwAfwEAK0NQIk0kbffIVgi/Sj/pDuQASJ22U6hIlEItlmQ+iK8jt/9yhE8ynnvnbje731C2cwAz7VbE9If9AXtK5+meTVJ2zP2a7L4yf5PTDJI/fQldmnx5mzVFgjG/fTQEv/J20B4asTic7y//e1vr7beeus0C9NuMVYXjV1LDfYGiE4AaIGs/Xcsxwa64tcNGLZa4E7DBjIGfi+SJpJuTnEdEIRwcL8eF00IGLS0NjMKZQL8/hcJwixA6zclDw0yz2cSv9XFXutMIAaHD8QQdtOiGKgAF+8AMH5G+/UqR/DdANZ20X5xvde78tL2FIBBQBPIEwyTMA/wBdmKG1gxQQSZbYr1FzsvzHTDDTdcrSv+BQ/j+WU75+2NF0DdWLKdN58Us44V9Ma7sb6ItBRgr3GD8kYH8AYHLYkWD+ANIJ0ACNPa8+lvpNHknOfT5Pl4Rn4OpgagzrG0diW80CC3DQPgB1ym5lYL0vqBCupWz0h72LO64AWnqNhstmDmHMA5DRAJXgJfdeUwBaioU/6eD+0M6BrYTCps293WT3TijfzMrCgD0lFfZ0In53X+rnc4Q/lt1vn1VthR/vy5YX4zQ/k4Nf8P01KYCZkW7apKGNthVT2VI3gzrvyHKXMb38n5oT8QjmbNxhbT6iBbTrSxft3KtBTRONG4zgaAgQ84bZ3sA78GpU2/gGoAAsAFErMk5VUG5iIaJicjYUQIKD+NhLnJc8qbOxGjzuMsP42HEOTgQtOII5dPgJbfTF6iUIAuPgBewO6cU9TfdWDNvMFBR5A3Je9Kh3CjCBA0yuLoRK5rK+XTx4Q4NvUPdEovvyZtmjtBx+Yc+zAJi+VPMdvxVTflzHkRfMjTKr9vzQFjhx/IGPvQhz6U/HMiePR3fF8UHi4F2Gta4MDJqjHFJvttGwV2T/HQnKO01zYNlHpHo60x3RjotnOwMIaJgY3WzIS2C5AmZd5RHnwyOORJ0xWpMg2KAad+2knIIW3M/yju+62c2hG/aMMcccpJoIc2XOet9+okTeYyvHXE0nvvdiKCOfoYM4oImLxcnd5pck1+165sXWFrAzMqK15dA/wnnXRSEmAWjSlr1CvKOI78m5Rxnp/BK33FuKLA2GfHYVZXN7POcz0XDuzzzh4dXZgkzY5mZMor3tjAZyIhvXOAj8aMd+P/WZx7lQHQ0hrNRAgtZgPhkTQ9oKNeQBHFwPe7V5ru9yPvAz2apP1YzDZiQATv+6Ux6P28zNpKvflVhBWqo6m4swHrWcJIWdixRa0QiD5PyeQVlKcZ1zqd8XLNioOaqc9CLnUlYOQhP/ed5XfzSrhlgIStsmn54yCmRls1iJFnU5Yn3xKNHiD52ln4UKJezvF7HGVY5DSCT87a1pgyO7OmQ/8O3uLBpPr4NPi7UNsl1BsCINkfg0bEPs/mbKM0gzAaeBpMnkYeTBnqSKDppECAwynsxniDRq138Jgj2UfhRSsBm0HMI+PgBwHOqSYyRdgcASQcVvnMcKxz4NymybNj04aHoagvJcGnI80Q5cWEROAiNvrIjxN9p512uhVADJNvvGNGoZ5mcrZEkKewQd8hNrPbfffdxyZUIs9lPedjhIJAwGpbglt7R1+YV/4sFNhHIwA+WhatzsAwnaYVscktGuUdVN2AEe2emcWeIExUIjfCxjtK/SMvaRAaHIJ2GOQ8NiBsRzBpijLInzC34yUTh8glsxlEEHmOf0Mcunb3/6iCTkSUvYLMaPgOCBJ9janI7IJwJVRiZjFqfoS2bzATpGYm8qPl2wtH3YQLTspkN+l2bGP60beUTdsB/DPPPDP5X2wyl88M21j+fmVaGLCPwSxskdPVMneDwyo5Wm4nU00/5szzfWCEB5yLbLmAyDawKDr1qGAkLQ5iA0IUw1577VWtWTF5oGiP9M+E/zBh2c0UGANf7W7qDQjHUcd68eXHRKSv6VeEjOl/aPr15wf5P/hGUPsEp5mZmQn/hJmK0Fd+E1skqCfK2zPeHyTP8mxnDuAlH8xb3/rWNGsUpqmdc353frOdVxcG7LGXNs9uTSMCbrR5WtYyUgx62jcwFr3DDEDTzW2Qo/AGsAI75iOOQlEvIkWmbdIZpQ5tejfazGzF9xCEWIqwATDMVkcccUQCf6timSLN4rzDhl9oMhzAXwqNtQ3Mhfb8r284N5mcx5/qQoA9Gy2HFS2WA03IW0y5YgCNn3XzkyJQ5rsQMok/FkhZCTtOAvSW6DOnECrsyZPQqjuVWRsz3fj4DC3YauOcJlEOeQZF+qP2NeBt9bR+rA7qQjAzJwB/oG6bZuYrpjMzC+9wWDvMAsJZHmUr5+E5EO3pbFblw0WidUTwxaxq+NSn/+bcR+Po+Jbxc0yyY3IWxqZj2BkDcfqsbU+OeMBmL7IAmIhM8j/TAIpOPUqJaZqim4AQfwEbtthleY8j/V5lk4dNx4Rjmt2ZvbgWR693h70XaTsH5b/jWtMz0LbpGqc3c9uWW26ZzEOuCx0VZinqyl4uZmr2aQf2IoTw28yNM5FwqAu7pmUoz92aA9GezoQp3sIaQG89A9K3g+L5+L9t57kGe53d4GCbtgqORslsQ5NtO+On2RGiQ9L6AAaTgP3N8aq+CGeYckX6AN/KXrbzyy67LGmg4tunYWY4eWUbX4KG7Z6QGWR7g2HqPM539GPfKha2uXZlYZ+osdAcOYQdZqr6uagfnx/U34UImqH5aAkntPtCRNn0CfNJC9lx8qDtacETypGzxYxMOoSq/+Noex3mFuxFnNDmLd/nrBJxgqKDa4BCv+JA3hnFhIsYIRCBA21Qxx2HbyPysVEaLYj/hKNRqKL/J0VMR/qCOtGE+WxsJ6CubScrbZkHOALtvig0OMot7NI2COolxJUJwSpgsyamS33d4TdBju/MaaLQmHTMcMs4GE8P0AbaBeDDHBFZAj8iAixwZzy5TSaVuQR7A4QmZ5DvuuuuScPBnmB46eC9Owv+0ApNTZkAOHHXrETRDAv4AfJ5rjRRQoSmyQRBUw1tO9opzvl7w/zmi2BTlV4QABy3XyLSHuUcdSaURI3ZsgMJXc3LK+KHnR7fzMQITGZKsyTAkxMnuXRFA4kHp/0TFPa616bBlzIucq4N9jt4h8eEKLMZPlOcCIG4P1iq0316bsA+BokQv3POOSdpcHvsscfq3uZxf7rsm9/cdE5TfWGZwNKKVJrhOMIHgysGhUVGtFJ+Ao5GJoZ6bPgoAwWoi0UXaiodByBluwd2bYucUD7gzczFHMDktNtuu91qqwNgzv9Agwy/irahRdaBPnjtbAwAd0I8tncgYIO/cc7fKb8H54BZKh7besWMShvOA/7MDdjrqDT6M844I2kvNHrTWUzOGV06dP/OCzCCT8AA6PtcG5ML7TK2WeifUu8ntAvNVGQOmzLApxEheY5DI/K5QU5nGq/+IEyRVoxEaAm/bQuxzXPw2V3RbOrZz352ioyqa98WAtL4RX3gF4EG7PGzG2nPaFfpESgWe3kPb6K9u71frjfjAD46KEn8Q9euLOgzZiZppmxWsv5PtRrso3NjrlhXtk0dmY0+bGXB/Dj3r3J5Aq9yoj3qvDouG76omnE4VSMfZ+YFNmdOVFEnfC4cuvKtUy686/fq/9vCAIg+73nPS/H9orMOPPDANPj0GR9Kl8+0KPqs/KL+rjFl0eYJILZeQL9mxXQWz8RZCKmFU5x/nLA0fMIX78xYepE05KXtmBikFaafSL/X+8Peizp3ysO9TteHzast7zGdUWDsoWOBndXj6hkCty3lzMvR6tUY0UloKKJuANELX/jCpL3llSi/R+OAjgsUnAEN7dhGccH/0VK/5W2ALzRWzD/nLQC054tokjBXDAoO++67bzINAURhifoIcOegdUyTAvTkGbxjHhNlo2xMStttt13StsPOHs/FO2ZYhJevTIVJLc55+r3q5TmzJnlMg6IOZiCELf6HshD3plGOaeahXsyUtmKJzxv6voTrg/bhaZW71WCPCTo+ABLOZ3+KcPJNi0GLnk90TGfmFgOWT0SnBfjjJumKI6dxA30RQTR9swkhhRyRg1AsnvOO2R6wnxWpWxCTI+DmO2DXBd72KQqQj+fys4ADQtAWH1Yhh32ehh6/8+e7/daWfI2tpxQAAEAASURBVBh130i354e9Lh+rp7WfCCj1B/IAX1toY0eEkQ6bT9veU29EoFJW+KTMwKxjmdQWHePgQSvNOJip4+iwmMjWazXhmpVpb6HxciAAKs4cqEgcPn7TXqI9xpFz5GOgAHbmCdf4C2xZzNYMMNjf49mm+TJz2OF00nb6GOz18hGUPlDOXGPRk/IAO0Av+imer5+jfiKjEPMN0JCP9GLtAL5E3vFOnCNNfKUgiU5iLnLEvTjHO6OcCR/C2voAYE/IxjbT/BEWe9mRlIlDH5oHm3ZTfuBj8BK/CTYzNybmWGzVNK1pPtc6zT46s7OwPZ3Jjn+x34rrwehpMmpZ8gIo9hUCunwke+65Z+rAk+I7IDCD8LEP5g4gQVOiDdOaCAORD02ImWQamr3+F/1UucS2cxIb8CKO3DdLsvc8odWEgLM9cdauLKqKwAOzALMgMy0+DppjNw0/2sc7YvbDX6E9x02EmLEp/JmJSdsR3CGMlMFMnJnOzE3Zd1rZ9nkRZ+Xa2poGM1PROUIxmUHxoG3USs0eA3X+d7zjHWlV7NqVAeBaPsD8X2gyHNBRaaJAl0MRcNFaxsXzaMdID4DRZGmhNGFgBzSBhfBEYYS0ZuaAXqYJYCOM1P4xNK5JEkczzVZkDXMN4SgEz1YNvmFq8DcxXwR4+7as395Vj+ANBzbg1g4Rthr8q9cP8ArXtOKWv4KgwAdpRXr1dwb9Xxm1C0VARJXVvsDNLNyhnRzyBe54wsRjhhL9aNA82/x88FafJfBFgmn7NlJrwF4nCsZhmM7PoeerUoAGxf1xddxpN0hoX73ybfJMr/cHuRd5xTl/F3CICDFQAa8QPtTp2fy9Jr+jHePZvD0BHVATzgboTP9p6wCfuYANnJlAOTgCI61IQ0SR+PoA2iblzZ/Jfyuf//VNQMYOLyzSDMQKShqr2YS1BLRbjmZlH0SrU251YvbhJK8DBX7QmrUDHpjx4Ik8ou5+A1cKEu2SoLYZYC/BGLxvesYHB3u81cqE20YbbbTqg8jL4nc8z7RDGAghBfwERNx3XgRSD32RM54gNFYG6X/T4sH453hDlhzDAvDZ6Q0k+0djmo6zKB0jZ4/pMAeXuhkQufY8jjrHgJO+w/+AW77sjDoo6sRbzwINGqIl+zpwrPAcR9lyPnT6DeTk7wAwbPo+3EGjBrhWn3JcAtc1K74FIAIEARwTgrA41Klu9fzqz3ifQOEwtYhPX2QakTa+6ZP2AGJWsUo4BnY93ab/i+Yg2AipTsTUxZTJnMOBK0+O6TAXKCfzl3BLadgjqqnpq1N+va7hhYNtmqDjH8j5p28E+U0QaSPmOIJYiKJ2yt+J5+f5rL/asiUWEHKyT2OcDMKzVoE95hjItnjlkA0b36J0DPUwxQVcHInAC3joKEDYAAWuNLwItxukMfNno6M5AyqLeUwzAwSFs9K62JVppTlgeSdIWXySj++EVmm2NS2KchBKhE3MLpg1gD4g5rwkMPEUDzkE3/zmNycwAqD4LazTNJuQy/sSIJKO9+QlXSBP6OKHtnGY4QBYAkVawDfIe1FO1/L045leZ3my+a9dMVV2A2hKEO3eSltOTzt80uLNNtRBOwJ/O2XGl7J65TnMPfXCP/lrj3VW7NRm4E3qqy8DfP0Pf4G9Oin7ohA+qKN2gmFCMvUdfaMJj6bBh9aAvcrS4ESBRGjeNBgwzTzUT6SG6CLTbiAChHR6AGPgX3DBBWlAieAAKsN2Fh2M5mtTLPn5DawBoHtMI4BReZgI2IojkiDvnMpp8y02V+YLcfLDlmlQXufl8G7kSwlw0BJdA5ZAG/Crj0FHKAEnmie+MjtEGunHr//gC/ABmGYR2iFAnuaMZ0A4ByZ5IuWrl/HXyTY+AW4zBppvN4q8lYPmzrdBi9efEA1bX1HeSVLwGngrc/ChSZ7KiJfAnjkn6tTk3Uk/ox6jtqMyGiuUI21jvPjdJmoN2JP07JY6sI9r6EyLRMD1kksuSYAZJgCdPzqZDhchc+zBpuZWCtMUmnbG/Dn8NO3nsLTYA0gQLEienqUZ0tpFVnCGMxXIrz4QCQhTVIJDxAntcRYUvMrzdg0fHUj5gAkBpX4An1kGqEe9Paf+6gm4gL2BaobVKQ/P59Tkmfz5+u9oJ31CefGc4G9C3gX63WYBTdIY5hn5Iv2qPkPql5538dfZTAv5PSof++Vbz0fZ4QuBI3+zt2j7+rNN0u70jC29jRcrawUbqHdbqBVgj/GkocgLGq3psobRGabRISbdGICG2YZmLKyRSQAQmQZHp3fWMdjFaWk0VOasnVZC1midTSh4ZTDaMwY42zJXp5O+PJ2DgJ3OSRMWUWKXxYMOOuhWJh3Peoe5R6QH4cFWnZt9Ir1ZnJVNvaNeNEgavmvBtyaKg/cjjXo9Io/gb/3+sP8DBGkOogFGXeOc5z3u8tXTlj4gYzIDmPppE+D3nucJN+9Pk+TNZBmOdU7UmAEpj1kcxcCCN79HIf2E8mDmxWx684rj3VhpC83MaBYDy9nB8US7iSXHgGiSnXcaDRB1jJWRbM7MC8A/hFnU0xm5ZxDpfKIvePebUuSnc1ugwzRAC6dNxaCM/IK38mODFdPOHCLEL9KJs2c9I3SOlkwbbQtFPZwdNDVljOtNy+n5nDeRXn69aVr9nsNXBz7qB2tWHMyDUNQtL2NcGySdQZ5VXvzhG9CfgCaTVzeKsrnveWY2sy/tM2mKfisf/hj+Jl/3YrZUfvx2MNsppxn3W97yllRG70T7+D0IUdbwyLjTrkw5KNLLyzVIuuN6dmZgj8lReQ5EscFilEPqjquCs0xHHTU6TYi2KawuGr5XuQBzaAQW2jSl4CmNwmC0EC0fkPW8/R9lJIRoXWYfMdV2LyflJ4yZmQycaL/8mVn/pp3R2NpOFADaLsABEG3kZc5DfUE516yAJNDmbGUSYfpCnfpWvE+J4FA2vic9I4w+LW/9gHnSLJnSI/iBEoXnAJnPhyNV6KxZ60knnbTq26n3/ahLv7P3YJjZsnEYfpVh0+uX3yD3Zwb2CqlhAIuFKRg+K1vwIAwb9FmNraMDStox8O9FBhSeeJbtWaQJQdGUpC8Mz7s6Xb/8Il1aCfMZUw8trBMp29q1a5O2BPB14Kbpd0pvEteA/SD8mkQZeqWpz+MjsHRmYkNtAIN+5XafSczaF+Yy6x5yxSCvQ/wm1CgQwG8aNmz54jETKZOjhW8W2fGTUXz0b7NZ9521AVMmP6GQ0uOPP34VoHvxo9c9acKy8MEFL+Lc691J3psp2GMKiSoEMWxmGmqRyGAA+DQadWvS4PGMMEmdkhbdlICvyBPTZVrXIGCsjOzc8kSd2kLoocERW7tGWZuWb9LPAXtmnLaT2R7gJGBRJ163qQ7RzsasWacwT7POa1di5/G7Xn793uySH45mL9ggN+FEepOqI/MNgUqJpMkbg1FGeTvUxTUzaWWDQXyHYuVDiA1TPumGiYh2jyLv9M+M/szMQavygEhnYG7g1ECT7gTT5rOGj041SN7RCXXEph796FCcRKaw3o1r/fL2nKMJ/zm0fERGSGfbFo+0XbPHX7M1ApUZIcwg/dqnTfeVWXQWXov4Ov3001NdmAHNSM2shLsCOqtsac0ijqZF+r2QVuMA6PZTeLSJZygyzJn28/HesG1jHOGN6Dczm0HG8CR5NFPNnkbvEOlhWriIZOpIQ9f5o9M1BWCzHtpfhEz2449Oq4MaWKaQpqxNO6x3aWCERIQxupZTlFs8PqCywEY+9efyd6b9ex40e073iOvHn6ZCdtq87JZflJfW/NKXvjQdbOD6joVu+py1Mocccki17bbbpv7oneg/3dId13X9XkixvsCUCWw79dH6NWNVkIhZqzSGpVDwYkaBJ2ha9e9W7plo9tFZbGlrcUw4I4MZ9UboVvh5uK4DiQCgAZnuAu5+9aPJGzhsiGyNTUIHgxfSBvaA20HQuEbQdMrXNQdNkyamfAZJJ4r3nUUWiTYgrNkn29J2NEtTcIOVZtcWyvmDz3jIjo2Cr9Mua4zDTvn2uqe8UWb9xQHsCX7Aqs/rs9oC9UqrU96jXNPPtb+xo/2VRV+I8uZpR5vENUKKEHa9fi+eaXoG+Ex09gSi3U9zZtOtjFPV7IOJGC880FSL9IsInLwTdSvwPF2PDrNmJYLBweyB1DN4kZ+jbsCedsGOKNxxUDIVXWdlObvQPkJDemEKyvOLcujk7JRs/fZSj2d75avdDHKdOQSJ9NpAhJV6t4mib+MVTQ8YTjoypV/98/aKvhrv5PfiWq8zngsZprxRMALoo2/0enfc95Qdf+VN+ADeJhQ8GLTu3dJmFpK/GToaV7rd8ut3vRkX+qUy4H1MBUQ6CI1gUUnjqitbpo9HG+RMHzohQI3pXn72DseXRSCmwmYFTUleDiDCgUazt7gqD//K85Ku/3VGsyzaOvNME/KeWYc8TJnbRG0E++BPONuB4iwJCAn9ZF7U3/RLUWOcqgSlPjooRf9zDpo2wOmXlBdAS6OPYIMoT7ezMnueP4Xy2UTh6ZaW6/hnVqEcxkjTcvRKc9R7UzXjRMNjrLAt2ueaFY3X/3Fv1Aq17f2o13rrrZeml0cffXSaYrJ30tyjU5l6mu0YcMLFhLc5dN6m/Im88IBdfa+99qrkx3wkP5q4gSBN+cV0VxglJ7kPlbjflDjVLYazt478AEjUp2kak3iujWAfbWhKr3yDCPFx8QgAaXvAA+DPOuuspIBQRgCT/kcAaFdbJBufg7Rn3v+izJ2uxb1JndXFSnQLBAkzs1B1VpZu5cEXgpj5x9Yi0hiF5CNNQt2sWXRQmO1GSXeUd5uP7FFyqb0rvImWS3MFLgbCopOGt9+56aWFHrZxZtPjEFJ/0t/iMgMS6HJaDzLQOvGPln7ggQemj7VbUQtg7KmiDPLTsUVOmHXYxoGTPECpU3r5Nc9x5BIgNPtBpst5OpP4TYi2zYwT9WQq0xcA7LRJvtZQWDFqewyAKNww2l2bAiXgxLkqXFKMujHaDSSnXYcm+akn5UXfZA615oT9Xv1QnCMtdTPu+KAAvi1GBlF6Ip38HGBPszdrWjqwDyaLRtDZ7RGD5qkj5Q066G+dkIb96le/OgEkDZ7m4ToHDsAVw66Tjgr0wWszJxo+Uw37OoGi47GrWuTCdEPjCGdm07aI56TBVCRunElOvnFvUP6M63ng1TawD75oB4t5pr2RGd4y51lN6lsAQiIFRuh7KNqMCYMSwhRosaN+6GtUo/bHlMmU/uC1PmB2cvLKpxPja2vqVFdK1NsM17iggNr91fgLvoxSZGnzYzgbc7OmqWr2Ks0uZgq5ZgWEJjGtiUGFsX4j+Qbl9+PaNM8GDY3YYVWtjoZoEt2mjnn5m5Y13pEfswFNx7RcfnjgOoAftVOrg68jMeW0xf/SRjOOdsN3gAtQY0Yb7dS0XQd9Lh8DhL3N8XyQnVJBm3U/jiiLvmEWqj/6sIqxGh+uGTT/WTyvHg7mqO222y7ti2M9j60+jLuIuDEWmK1ElPkK2dq1a5PCNapWr87BS32RgAf6s6apgr3Ksh+byjIxAJqwI46DETptMFl6+W//1++7NksymLoB/CTKBdxDgx9X+jqxaTJbtLas83xc+QySjgGmj7WJ8EVooj4vWgpNg1eRB9OpbQsAXvhXjIegeM7/MSY9q10jag4I5s/Fu20947UgAh99sQiQf8msBeATaNoDX5DvNDCdhiAYF1Yog1kGJXdcaQ7L76mDPQnKhIDpaJydJ9LijDGNd8bgYDhbbqHxcCCAAs+Z49hGASwb5awJ2ItlbxPhEy2SEzRCLqcx+CMPbcN8+tSnPjWNB+aMXgTwASI/jzHLv7NmRcOfN8J3sxhbd9szKtaGqJ/1IfxV66zMeClB6hsUWBL/D3uGPcaH9JjvCJNZ0dTBHrMxIEw442IqBpKenIXCOnVsziiNisEYTsozO5DsKAZC+qf8GYgD2i0An6boAyj8D20B+7bZ7DGXJgnoKTtonH0/JdjjD35orya+grxcZm7GlLZdswL2ofX3yKpVt9QFiDuMfX4KdcAL1zqZbPL6j1oZaVEyKZ5MeEsD9hhMQwD0IkLGSZjJHnn++ecnhrLXkdwa1CBjNzv88MPThyJ23HHHNLNwr9DwHIhBwSxBUwQIpv5IW8f94XMY7s222eyDF/ooO/G0+522AfbhLByEq8yMyh8zgVm1qTIHHwcpf/3ZTuBef2ac/+MXvovIEfnWRNiOM/88ralp9hpKZXU6QDxOMoiEMtqQiWNJhEnYF+WLTNWAvxDEI444onrRi16U4m/HWY5lTQsgiK7SvrnmN47BOQxP2wb2AZBMKfq/8k2TCBd2Y4qW9ony9CpDjBvCiTY6S400yhnlxkPRLWbyrqkfp7cjnol3Zn1WnvCV4f0saSpgH4Pe6jxTmnBQjaPiNA5RBqeeemqyR1pAoYNicuQrH79Nn9ksxRmbAey+++6Nv/0ZZY1BEP+3rXNFuaZ9ZsoBZhHWKf9Z8aZtcfbRD/VVM9pxz2qbtDWeGBfap2mMP3OrNqWNNv1GbpOyDPJMjDd9ic+Dhsw/xP4eK8Pxk/mQMsdUO0vtuV435QfyTYVs/f1x/j8VsI9BL46VVjMOuy7m6Yzs8rR1jcwRY0A53KuTzk7D8Z1bMcRWjoqrjcFYf77T/1GXuEe7IMQ43iIddTQ4ItIm77Dx3iKd8cQ6AY487RE26VnVMTZD097Tnrb3q3O9//R7flz3Abw1EcDS7Fc5ol/mebhubNGWzZg9b23IJHxseb7dfkc5RQVdcMEF6VvO+hpgN87UgaYvfFK0je23bRUiAKQTBnTLZ1LXlV85OWdDOE0qr37pTgXsoxBA0ZSGgzSAMe4NesZEZGrKIbv99tuv2hV7NTJBAIh1XuCkQw8zRZWODmZWYUGRFanAxSABdsxGPiQtmsG1RSfaFaBvw+IRvDbAgEA44xed/93qF+ME2AN5n94Dlvqn/lon/Vp/dRZyKVTa94lnMRuJspldMNHavwmQ24JAvUJbNpat8bBpIMA3FnfaaafVRZuRzizOyglv8JOZc5b0f9XfCZYmwD52xBslK0wkMEh8DhDT1NBUooN3S99za1YiCzhuORUHJZ3MBw6OPPLI9BV5K+4Auz01dDhlsRz9da97XTpHuSKf+v9xfZ7PwARf8LQNZAYH7Av9igMA3PYkG264YZrR+pg9pcjMxz1jxu9QfOzQajM+u6DSoqdJxkcchI2Zu2ivzTffPAmquKdMMZaAqT5opi4Y4/LLL0+CaprlbnteE9fsozEwArBqEOR6P1BOD/b4Iw0dFbgCmtDo8zw7ve6+GYZ3aPaDkE5lxSgfAUewvUWk5XqQKaQVh5477bTTUridjy2jcdQ78mnTWUihgWnXQDTreuoTBexv3UMA+bOf/ew0Zm644Ya0Bw6NmLIC6AlqWrHN+OwRA1yttp0V6UPKYrsDQor5NxYn5WXyXJB+aAbDRGuRFBNUGyiwaZZlmTjYB6AbeLQtHQvF9VErD7CnCSxMNyeccELS5E1v5a8DIuXQqPG/L9er8ymnnJKc0qbO46r3qHwb5/vBf+Yr/HDMmsKMM+tytCl/7SJixQZnZrY05ptXFp/xpbEnU1g8g3e2GWi63fWk6qgsyseMYwdYZqfoa93yNL4EgKindylklLFZUyeT2bTLNHGwjwppOPZTjYBGAb1ocGlwgpq26ajhjHNdft3yMBtgP3M/yhPl7HSO/DSYL06xedLcXUfSiWfif2fXOI5tsnThhRdWe++9d5omK1sbJL0yjoOCz7ZNUGfCLpzT40h/mDTaCPbBpzjnfWaYOg76TvQ5Gv7alX1gODNFtfB7GQ94ZvGhI54dNI9xPB/80Y/MFkV68RkQSHGvWz7uwwG+Mj4k9ZpkwEDgTF6uvF39NltyP0xk3co+6etTA3uaPY90AHLOkGEqGe+T4jqmPS40MObHvW7pEgw2YxPvb2roeZQ3WKd3TW2tJmSbN12UF4r367/l4zmdVbiY0DH59csnJTqHf6J9gy+zrEIbwV5/0PbRX2bZD2KMrFnR8PXPoChf3I/rszjjl75kDPk9CFE29Md4b1L16SQU6+0K7NWBaXGWNDUHrSgN06nQpOsMGYQJ3o332cd9vZ5dT+Nifi+wIWwAvWeAdqfGqpdFXp4XvUOrD1NU/blO/5sNiBZQTu/HQO/07LxfE3WgvrSxaJ9Z1QnYzzr6oV53mh0fkX6K2tIXohxxnnXb1fmmXHHU73X7vxcGdHtn0OsUWAqcfha865QGfrImzJqmptmrKPv1uKcyBrWPDQjLuvbaa9Nv0T6hFQSDMRvQM/nY/c8e3WzuqGnnDgndtA6RrvLQNAg8nSKuR9kW5cz5LjqqDRE5+gUTRRso2ttiH8qFfkQwzpKiTMoQCk9+Lf89q3IaMw5mJqRMjl7A6jlAbxa+ZmXWYuyNc8wBeN9v0LeinysTRZYiCFPydUTyJtyVKfisjLOgqYK9ivdrqGGYQHPeYYcdqpNXPlRw0UUXpRAz9mODS0PQNjl5xONzsLJVbrrppqsmpaZ5morRzJpqDfLWwAQP+yMhMesGb1rXYZ6bRNsOUw7vtMmMgy/6AruzPqA/ItcKdecABU1MPVClREQAgDe68Q6v2faBsQgeppNx9EtpEDpW3jPJEiJm60DePWZkQsCHYYR/WsCG3KPkUTT1yVnSVMF+UhXVKUQOPO95z0uLKqz6E3qlQYAryeoZncXqWZ9aM8vQEN06Tb2s0uEf4PShmTVZrBNCwfMOAqjQdDigfWlhbaDoY5QFQG/qjwbpf22ox7TKEHwx5mx/YnM94/npT396GscxrurlCT5/+tOfTkDsgz3jIOXhqxNVR4iwCoQTmyIHW5SJQmmPrjPPPDNdE5zhXf0Q2M86KmghwD4aVMzwOivhjRaM+I6mLQyiA5g2i7nNp1hxL97vd6ZlmFZqcMCvATWyTqlRg6Trf9d1BrHCBnqb9uyIso7znPNgnOkOk1bb4uzxhmanT8Qq40H73zB8mMd3gi/OFkz6XKfvNgN861VcN+6MLfz0v7NrVv1a0b7zzjunMar+kd4gvIi+7F0gLn+g/cxnPjMpimYPnsnT5o+0P74FadbXKIMtlc1KmDhhwCxpocAeIwEwLX8SMcJmCqS6hiRUSHekk+UUnYAkpxEIvRQn7OPfTEg2YxvEyZun3ebfNJy2EGBtk4NWHzHY9U+zvEL9OWBGLvCCtqwtgftZZ52VFk0Ze8DVNaZVY+xjH/tYmjlttdVWaR1M/xy6PxEgbibGbEOAWJCmDbWl+/GMVOK3Mb/eeuulEG2r7M3m7RzA5EMgzZIWDuwxE9gG4ObMjQbJrw36e4MNNkiaOumtYWn7SH4oOoGGFX3jOdqI9971rncl7cTKWtsqsO3F++nlOf8TPIjzLKtjUPKTGKwAdtakX+gTysUUCDBmPfhnzZNu+QPWa665Jm2RgEfAHN/22GOPtP3IJz/5yco3ZY0/fAT4zKo2QrSQkdlnHG2uH3P0AnvboRAu8quTto0+ryz8MlbxsuMzKdHqZ+2QV+aJjwJMCJA18IIp+fU680b9PwB31HQ6va/Tbb311qlOwNvXb5iHaOo6psYmyU0nOYM5iUz9mBW8KywR0Vh0BKan+DRap/zm6RrzhMFgBtQGCidtE//KtMqrnwABvJrkYp9p1Wec+dh6/LrrrksOWYI6sEIexpjZOkA3rmjynjHWzShpzu6NM5Zd/rb/YBYW8dcJ6JUtL6f/PUeJE+JtTx8m3za09cTBPoDewGND18kt4ojrmDNPpCF1KFNFHczUUQSQaaZOR6Cp65qVsC9Lzu2dEx1Qvb/4xS+m6krH4X+HKSLH8TxSCG5tS6BFfWddlzaBffR3kWP8SRFdMmsetSl/4dNMXHVlwf8RJq1/2ZhtWpuzGdeEM4Uh2rAO7p14aAyYkQjzFim4FGAfjFB5zOLYmGeivWts9bGYy5TR925DY1c3DWs1b0Tf0PYJAit2aQn+Rxy2Oi3t3jGvFIOA8FLP+H/W9Qmwn3U58vzj04CcfmaFhW7hwKGHHpqUJWPkjDPOSDNkd2nw9rjJyRgM0NXfHP4fd9+r56MMkW9envrveI8y6DOobQjOmLhmH0wAkjT7WIgQ1+fxHB3KGaAHqHerCwBEnLqieXReYWFstzalqmsy3dJp+3XaKs01bKnafJbUJrCPPsN+S1sUocXEV+jWHMAn35IWxUKBcphB18eI54KnkUL9/7g+7Fl6QJozmHDu518D8KEMmuWy3euDwoDNSGZNUxuNKg3s8y1wZ135YfIfpUOtWTHtxMxmt912S5r+iSeeOEwxWvkO4QXoCbcm2s+kK9EmsI+64o1yAQ9Cv9AtHNBnhDgaYzutfHxk7dq1qT/Zh38WpBx8LGbdhHM/8rw6aGPBGUy6ovAoQG2gqYE9BpBwi6DZD9twpLsOIRKHZ59Wz9t/xRVXDJtka94TJicCIr5oNGutHmPaCPbKZbENXsU2AK4Vqqpzzz03CcE999wzAebGG2+cBOIs96RnkmVq5VfjTzB+OxGQdw/OmY0I0DDT1dZtsNcr89TAXmYclDo5m3U3pnlukelNb3pTRatHeLHXXnulVb889/NMpq2AnhBrC7UV7JnwaPWhLbZhFjTrNqPwCHHcZ599kqlTeZhQ3v72t/c1k06y7MAb2AudvnZl7y39XHsFuOd5u0aZtWWCNnZ4PxZyzrqdpwr2JBzpaAq7rAQQdYAg00Txw8cff3yy4cf1eTszz5m5tSnMsY1gb8CLuTbzsRJ71gDQhn5m3Ym4+v322291ZtiGckUZCB3brPAdvPvd705f3IsxTGmNwxiwAIwgt3iS4uNd/gbtPGsFdyoO2qioSATftWTbbYsdKxp0lmdRGb71eeyxx1YHH3xwslPOsjyD5q19fXKSmaqAfW/uxYD38RshmL4SBUSWlaw1ueCCC9Lq8jb1nbw9tJnouu233z5p9wSTQAvXOGGZMK2tYZK1AZooPfsfeY+juS00FbCPDq5Tc9ICBqFUIQTawoxZlsM2DFYOnn766WlPjVmWZZi8mSR0/LBPRpsPk9a43mmjZq9u+j1bLqCzGnRZwV7I8skrO9Xuu+++rVf+9GeLoyyQ9B2Mm1c+eUhQ0+IFJVjwZdM2bWkcnH322ensGmrDeJgK2KfarvxhssCYMONgQAH84E6VQP6www5L2oNIhHkhUQdWNHKk8UO0hdoM9uy4THrs1PZKWjbSX8xkmTDXrESpzQvR6K3U5X+kuFpbAscAvAOx66sfW39ca0P9pmqzZ6fUsJwYVpchYF/oVxzQMV74whdWF198cdLy54UvhDd7Pc2nTdRWsMcjNt8Qjmz3y0T6y1FHHZXMIsxZ80YAHpZZWMkmzzZv7Lru0J6utW3R3FTBXqOSiKY+od3PW0NPurx8GbvsskvSemLf80nnOWr6QgjN2NoG9jRnSkWsWB61nuN6P6b0gI7zjjkjp0VWgPTpN77xjWk2YyuReSRAH22oraK9XNPXfE9D36PYtommCvaYYgrEkWGag4JpbWLKsGXJQcVvjhtH3iGiY/TKwxYMNl5661vf2jqgystNi0F8DUCr3wrD/N1p/aZ9teUjJlHn6PNW01J+2O5N/RedLCik0a+//vrVRhtttBDV1ZaOGNe0envpEORMPm2iqYK9ipveiNoA9hgUHb9NTBm2LKbmgOXmFeeNPTGEaQnFEoFkgYXO3rS+vspjanjeeecNW5yJvqftaDgWkNDsOWbZ66PTTzTzARJvoykn55HoDWZNOzmi/N4A1Wz9o2bzxxxzTHJi6tuLRsY1Bc9YpwTV9/JpQ32n6k3DEIDAQw3saTOctvNOBignpY+Z2wHT6jlhpuKp3bvyyitTR7AXip0thZgByl6EVz6z+Ld/+7dpNuSDCG2iEFo2rVL3NkUd5HziS2irZq9v2FeJ3RdI2ChPeReNgJ91JBQ9q8YXkbSlOHvhtGtWzDfq6lqMkzbUuTfiTKCEQM4UxxecaMDzShrSgWgtNPjDDz88LRrzGTWLKmyL4BBWyT7pg8SHHHJIEgZhAulVf3Y/Dls7AIbZq9fzs7hnW1ozNWAf/JhFObrl2UYzTpQVEDj0D3up+MbBIpIvu/Gd7Lrrrn2VnHmtP63+wx/+cFLqjP2gNo2JqYO9yotFBRA6ONBrE0OikQY5A3ERNISYr1LR1mhoZjHsdqQ8X0XsV28JeAi6fnW/+93vXm277bbVW97ylhTqNUi5Jv0s8wMTjjKqb7+6TLo8ndJnxrHLZFsJz0Rt8Hcw/fHxLBIZF8b5C17wglaF5Y6bx7R6W57AgLYuGJ062GOyyA2f+bIQx8KEYaY6NAVxrhHCOe7G65eeMhNUVgOfvLIwxIC1UEbdDGBH1CsEGk2dFuceW7zr8Uyv/CziYNs1FfZuW0iMOL9C7MXfpC7TLjuw51doM+Gbz9jx6cTHbZS3TW09DP98OpAiZNFUfYviYdJr4zvaiBnTDNdvYxX5rV3bNCZmAvYYYdtSWqEwpSDXO1FcB+xW395www3VO9/5zqRNX3rppenTX+zl0wZ+jawsQNwCihzolbl+mOqJwFB3QoK9uyn5kpX6qW8biKD6zGc+kzRSGz6hqG8byhdlaKODNsqWn2mEInOYAnLhFH0/f3YefgN5AQr7779/a75cNgm+aR84BuwpZBF+3CaQj3pPHeyDCZyUHFI33nhjT/MEZnpHXD6ge9nLXladcsopSUgAfoB50kknVYceemj6oLfpFJrGIAH2drhbs+KQoeEC8375esfqSbZkjtx+z0dDifR5/vOfn77RyZk3a+JDsB+INgwhp52ifWddvsi/jQ7aKFucCU4mPyZAApTtvmm/iDTadDbjO+uss5JG34YPbU+KN9rIeCag/Ward25r200d7IPxwRzg3GurV+AhbJGd+z3veU/6FuUznvGMtOUoSWr663/TJ8KAbZvWPCroNGkwz4gxp60DvH6kTDoHGz7iuTfQm5L3bInsgyeAdhYUfPEhZWYHe4KgUfk9qbq02UEbfMM7fF2zojTYSvf6669PkV1xfVK8mUS6xsMJJ5yQ+mm/L7hNIv9ppqnNKKsWxWm3iKRq61iYCdgHM+waR8O3GRRnX1zPG0zYHHBj2xefa4k5swlNiLbrYA9kM99iiy3SIPn7v//71UUqAU55moP89n63NFynzStDE1I/0UjKTjgM44zj6FVPQm3aZqvgg0UjBBXTFTNJUKf2i3uzOs+DGQffHPj7rGc9K42FCNftF6I7K752ytcY1S+tAI9Q3E7Pzfu1GAe2a9dOZurCql2PdmxjHWcC9hiBKQBv7dq1aTMoK8/qjKIFi1Cw4MQUSUw+TdiBsfkh/NHCHg5QWq+PIcRzgzBenpZ0WwNA0CiTA0Uj5+kRPPJukle8TyP2Dq1zGMKzNStaIHPWtAkv7D+OT8wOUadpl6NpfvNgxom66EOEk9BdkR2f//zn41brz1bF2waBb8kK8EUmfV7/j5XPtienwAVOtLXuMwN7DME0kRzMIOyU9RWmNNcLL7wwae1sf70AFaPdJ2WFdkZ6TTUjwO6dd73rXWlhlJAxTmCS21RN49YbUwOLwGGKcl9evcDP+54hTDzPsdm0fPUO9NznPjc5q8X3T4uUnzYjYkTZOaN61Xda5eqVT9vNOHnZY4bIJAAwOTjDB5U/17bfxg6g32STTZI5o23lm0R5mG4oPbY1YaHIqY4T+b1Z/p4Z2AMJQEe733TTTZOUBKo50RaEV2KmgdAPWIA9YuqgIfEF9HsH6MqXT+ANb3hDJVzMAGNisfCLH8D1M888M+15kacH7Gm3JLxY7l6N7J7yqYdyeV5UTq93cl7Uf+Mb+70ZzCBRPfV0Bv1f9BFndISYDfr+tJ8386JEMLfNC+kjPlRNKSDMmTjbShSyo48+OplXzaqXgeCSdmGCZr4xhocdx9Pk18zAXiUDOGmJFuaIbAk7tHs0BotNgEs82485nvO8xUxNNpcSMqWzAvatt946TUPXXXfdFGViw6bNN988ARvnsC/fcxYHAVx2a8JIqBlQ6bb5kXK5J4rFFN2MYNSNw8x2bKlw3HHHpc3lolyTOgsxY1bjGL/HPe6Rshl2ZjKpMnZKdx7s9vVyc8bzzVx33XXJYet+0zFQT2tS/xOg/GNm0nwNy0CUQLN9OLDlllsmf6F2aVvbdGqLmYF9SENnGjLtXihiPaxQh2oqNSNNjA+TT693OZROPfXUtDcJTcoAo+lH40kDmJkp+CSZ55l38hWZBMvOO++cgN6sQIgoUCcIaGgOz/gfWPqkGeFmII+DxGebPht0yj4pkrYoEZ1dBFTQPHTyeQR7fc/CQ/Z7/YrZoFdfjvaY1lm7C3k2dnfcccdpZTvTfIwByiFzrw/OEHJB8zAOZgb2waQ4+1bjYx7zmOqyyy5LgKljA0hmnKaAHyAdz3dbtec5z5DQHKXsbkDdUR9QcZ2jj5P46quvTo4zgxF5njDYbbfdEshffvnlaXBaLEY4WOwlTNEGadeufJ3erGG77bZb3Sgp6j/KmYPIlFJs87gpOrGIKZ3c9zUjxExedX6NO/9xpAfs84VK40hz0mlEX8RvyoHvtMasMvrepMvQK32f3WPu3HPPPdO46fXsItzDc2Pa+CaAmTFjbBgD2qvt1JoSYhYNFeM4PoAxM4UO3vRDJ5hPkxZnz4TD1BANkjeEPNjN7dmh0Wj08utEGtkhHeWxdSmTTa7dS4+Gvd9++1Ubb7xxanjhiSKMbl7Z7E10EDC2HoAWxIk87s5hkymd8YMf/GCnagx9Td0IXOkytTFtdeLp0BlM4UVgn7fXFLIcOQs8dvA5mHWaUcWsUt+ZJeALYtDX9t5776SQjVzZliegHShtgN4YoPQZF455oqlucdyLMRgKdNnIhRSus846acHO4x//+GTjXrMSasg84rlgst9BrgF6Nn9TXhE+wDl/Pp51BsIEAvtzzATy+/FbupGP37R42j3wsDVtnr7/2f2VQecQueIdZTHl8zunSLt+PX+m6W+zGIPPzps65JoVfo2DgIoZCc3Yx5YBTfBjHOlPI415NOPkfBFSbDbowx/Cj9mKx60s5Pn1+v2BD3wg+RGsZCeIloHMYETmsTRY69PNYtB2XrRGswd4OrAVmfZupz0AY9owrYYpBJiHVhPaNgb77Z6DTZxjFzCxJwagRkMEUNlqwXM07n5aUqThTIAAvrCPuxYUv9noCSsLwBy9VhLGO5HGKGcOXzMHH3IeVZMNPvGj4Kmpq71b0DjLPEp9m747j2CPx8FnbcHM6ePczGmAJ/ofHkRbNeXHsM+xVzNHmsFSbJaBjCPh30yydp9t646WTdqiNWAfhQ1nrc78vve9Ly2UElNOExcRQ1smWWn5nnUAV9cJCFE1AE/8PhDPB03k4Rxmm9BUY2Dlz9R/x6DKBU39Gf/Hc/nvJul3SmvQa/bPF6ctQqefEOuWtvIrL1MU56Boo3kJtexUp3kE+7we0XdEcNHqzz333BQSzN+E4n7+zrh/C08247aD5TwD3iB8EfLKhyiCzsxq3uv9G4eu0CAMmPSzOi4w96Wn888/P8XLi/5g5wb47OU0fmGOpC77vM2jhAQa1MwoebSI8tYHg/9JaoKByYOwaAKM3pOfxmeb76TdBNB7No782qT5J31bR4iHV8dhPo+m3ICERsNnwvlsyh71kIdn5oUILWY1zvF5pBC+ys4cqJ/7oI2ZLF/RpNvCOHnzm9+cnLFmGMtA8MUaG2HSwkqNo+j/k+b3pPjbOrBXUcAbm4txSolGsKKQiUckCLMOqcsMwz4OdIWpMd3o/Hmj1Bsm/jdzYNun2RMs3ez20vJMvGdHPwOOptvJdue5eDYardO1uDeJs/zwy0Iw9t48RKxbfjmg4L9IJdN2Gk3E1Ec96vXrlmZbrlsEQzPlXJ5Hyvmtnew7o8/7JoKxoM/HDFX98udHrS9hb1Gh0ONF3wYheGUxG2esxYpMN/iLov/Hc/N2bo2DNhgXoIOxtGeROOecc07SKggAkQmAXifU0Wk3wIx2jgCVjt+L5MHMA+TNFDhd88GSvxsDRz7Kwndgq+Fh97XJ057kb9qfTxoeeeSRaVuDfoCvnvjiMFN6//vfn2KJzRKiTSZZ3kmmPe9mnJw30R9FrjFlUoZ89c3qVWdtNS5iGtV/OCUpU8tAcOX0009P+BLm4EWpd29UnHEteb85aGnQAD+cjjo1OzINZ50VR2gAfYBSkw7P1r/ZZpslm7/oGkIiAC+qLZ1IywzCvtW+JcvpCvzbTnjErGUnwiZL7tXfbIcTju0/zGEBMG2vb7fyAft5i7PvVpf8uhBAgKRfAih1HFdb6S+if2wHIp9FJ+NcOLb1A8a6D6OHorModW8d2OuseYdlK2ZKEP5k/xqmGw0TDta8IeLd/P38fvyO+wQF5y97LkeMDh7OX4KGUJE/2zdh494222yTwt8irbafATZ7o22iQ3BFmev/s83SFHVyKwT7zZAinbafgX0oCm0v6yDl035Ch3fYYYfkS9LGVmkjyku9fZumzV/DRh/9oOl78/IcvjiCR872t+KApgTaopkzHAVWzEvdepWzlTb7KLAGwWwmE2GFEW1jSqlR4n48P8yZeUNIoYVP7NSkO9A3hWWzExFk8ZU9cLbaaqtqza/j1+epEwD7WBvA/xGkDsFDAu+YY45JPhH2WQAZ9+L5eT0T3GYrBNg8tVsTfquP4AWOU/4kYbL8WgIPhqkr4Hvb296W2t+sYZg0mpR7ls+oUxy0eDzjjOXAZ7ISXr2I1Gqwj47mzF7PUWiBD085gGazHJWkbateWgyBAuRoNvwBFnkZRBZ2sYnWQ6+ifKOWYdLv09BpKievfBgdCAAHFGBupa8Brj42VuPUdQ/NSx1TYbv8UQfCzg6FYfLr8ujcXY72oRAR5JyLQpSBtvFC0A1C+ogV07ZBmAdT5SB1qz/LPm/GLpLPthTGeL4VSP35ef//NiuDenwenSlwwzJtGzABLB1S4wRoRccfpRhAnlYP8JlxAH50+shnlPRn+S57vAVXf/M3f5OEJ35ZXGbXT4LTlskhCGZZzknk/YpXvCI51vs5qieR9zTT1G852C+55JIUsSMuXwBC9N0Y7p3GilBb3yp4yUtesnBCURsQgEF4ZLZHiRQIYua+6NRqzb4T8zWOw4cdxLsLB6Otdeq8nd7vdc1AYB4iQGhKwL5utx5HPr3KMMl7pqc0PesX2PLFn1t8hZ877bRTmtkEKEyyHLNIm/ZmlraoU3RApm9STAg0znmmOfuuu0bLd/ZMpz7MXMnRC+gXeRsEvj9+KTM9ody2Z1kzpq1FZtGvB8lz7jT7qBwtlQ1fBxaxo3OPm0ILinQ7DZK4N0/n448/Pu1/L3oDALJT2nMl6rso9czbREQSATevC6vyunT6HWCftx2ntNBie+KLy2em4L+pKzAW4NlV86CDDlpYYcg2jxeEH1MtbV5U3ThMwZ3ao43X5k6zDybS0ETT2LuFHZ89nQlinIBl4ORH5D2PZ3xxAAW2SnvT0wA54ZiqUNR1HuvXr8xWQpqxxf4+/Z6ft/ud2s6M1xhRZ6ZJ40SwAd+UmauINt+5Fba5//77p3Un0lkEir6uPl/96lfTdyts0U3gc9Tzb4TQW5Q692u3uQV7jUlC00w5lHjTdWAARtsvdGsO6NA0Pfuq0OQ4pKyQpelxyC46GfD6jMV0y0Ta3axNAAJzHaFHu40QZuGadkslEBYJ9Agygs2MRVi1dreuBtjDCX0BLVKd+/Xr1q2g7VfguK+RNJhVsMw4tBW7ARrUJLeOXehXHMAnETe+ysWBt9OKfZ5DygB/61vfWnFe2v1zkckAp90uKzFXWCinzYVo2uCO38t3kPlxzPhC0815pO+0CRD7lUf/tl7ECnDBHOprLQ37PB9cUJvqFGWa9HlubfbBmGh8nVXjsuPb1sDKUQtONGoIBu8seiMHP5yRNQOm7/Yhp92x25r9xHO0HqYwjjnO6UUlH8SxbsKCmWWlaHOb+f3d3/1dAn/9g7avb9iCge8L6OfjJn7Pmm/Rp5UjxrRxj4Rja1+OVxq9UGNbpa9Zcb522rAwvbRkf+Ye7LVXdAIdgD1ag7NJ02Ro/aG15s8tejsbBBaIiSO2YMynC31+kXaT88Fvi6nMhGz6tKhkhSRH5T777LOoVexbL23NfOMDNxtttFH6RgHgB5IEvlmxsaKfUJQiGq2Txt83swk/oC60eDvgssWLJNLnzVgJLiAf5knPwoZlp7kHew0ZFA3KXqfzsuOT+OzTpHynXSrj3UU544eZjc8IEng6vsgD09lug5bP47DDDkubzNkLfxHppptuSoLPF5aWlYwFO1jy04i/z4kQsNUCwBdrb3GW+HzP8ovxjzH3zNIfZqda62CET5rFG+PCr81GmGmU0wLJfJwXoL+llece7G+pyq1/aWQdwS6VHJFMF7QZ0QmxqpBwCGERguLWqbT/vyi/s8FMg2W2MTBsYGUdAgddPzLQjzjiiOqAAw5Y3dK43zvzdN+aAovHXvOa18xTscdWVv3Bfjei2ERgdSNmHQvtbl75dgTbN2Dl2Kcpc3KK12cWMYYoDxG7r//FGIpxFWd51X/X8/d+nob7NHXlVibtx+9kFqKv8tUpk/IY2/5ftNXRdR6N+v/Cgn0wRofRadlsrZoD9rzy9aidekeL99t+Vm6auc/VMV+Z1di3XTw5p/UgRDCK1jnkkEMWbtk4zZVWD/CWjfQRaysAp+25u83w6nzRr5hJAK3DhoCEgOtmisaSkGcmQCaTUKJCAMhH3o7cH6SPItcJAf/Hc+LhmWIJGcqa9TTMkMJm5UeLp70Dd3nm6UZ69XqU/3/FgYUH+2ho0z8dFSCKLRZn+5jHPCZtkyxSo+1U78gGCAAzlb3iiivSoLH3C5CnvRkE3kEGVFMC9gaZz881BYWmac/yObyw748Vw4tUryY89REbbfriF794FZC7vVfvZ/EcQaG/0bLZ+QGygxDgEHWNcuGg+QNimrb3gL/rIoLMPr0T+QB3ZkdmIzMKswjPAnSHtJyNUT4EoF83JUVaUdZy7syBpQF71dcpaAw0fZqwaSETh69OsW2zS9ZX1M26I+X5m6UYHEIImaY++9nPpv8BPJulQcFemb/Tudm7X5WHD1b4VsAWW2zR/cE5vEOAvfrVr07AMYfFH6rIoq3M2A488MBbhR4OldivX9K/gLaDlk+Rin7pGuDmPCVUnQG4+4gSYpzlW5xY1AfIbdOg/zrc97/r9TH562KU04AcWNxYu4wROiei4dJ6Hfe73/3S9BBo0oxtAiV6h42biUdHyztkltxUfyozbcqA+drXvpaEFCcaYGeTN62lCXkuNPhRwN4AtcHcq171qjRtFpWxKARk8HEeZnLj4LlYc476gw8+eGxAr1z6GRB21P1BYWen0QcRBg73gL1xFTNPaYX9v9uMa5T+HGUo55V2W2HkLeEsC86RTp0mNA/avigEGr+OKSqFtg9ITR1pG000jE55DMJW79OOaEJhtxQHzVzz/9s7rxApmi4MlyKmGxMGMP2KIoq6mFHXfCGKOaGYRV0QvVBEMKDeiHizGEDFsP6GBVFRDIiIYhZdxIQBExgxYUYFRfx86qP8ZmYn7O7M7Hb3vAdme7q6u7rqrdm3qk6dOgf9KJ0R5aJDgrzcP0hoMzrSL857I+/FbJMFTfylgEEQBJNDrFBCffoHoV7R6oA5Iuob2g/9drrE/d7dMZn3xMvD/b5T8dtOpox+fjajyD5eQ/FjYvrpTNAgWDoAOgN8wDf5szjEQhR2yE7dw4iEDiBShxjvPaHX0LtD6oyCIHjeje4Tb4XuQ0eDSgVLCEbznDOiciQfml+qv2OXTkAXXCLT2fldcIbGugYzuCALZonEJ8DfDdYqEiEAAiL7GL8DdJGQP/pxdPssHt2/f98uJmHPywIUU1iOkC8dAEeI341C3Hemr07oPD58+GDvIW9G75A8HQvpqGX48A46F8gdnSadSryRj8s/1UdCteEdc9asWanOutTz+/+fwBzYjrNpKKjCYmlubq5tr0yYwQS1HdNRL5F9BKoQM1PF0OkiBM3o2y1EQcpYIqD/xeaXUTmdAR0E4p53ZM+zjMRJZzTP7AAiR3eMioSOgiOkjj4TYkenGTl6d51IaNkiip/yU8q+cuVK60OFzWl+Fvz4sxYzcOBAP1cjZtmxclm1apX1BRP02UtMEHQhJgIZsUAbs/ZRLkQSLLegruHDyB2BqFHrQNyQIUeEI4RMHqTTCUD4qEBIc2TNvY7MyRfydudciyWlSfKuDJSLCFZYsfzvzyYWFrb9KnSqzNaCKMwSGdFjQSWiD2ILJ18nkX0xMXRkHmux1hF6JDG7GQOvc3m47xwj7yfNK4KqKicnx9qo4yGTcz8KZM9aSNCEGSVEj3qKvSMSIRANgfLREpUWHwFH6PHvCr8aSuah38Pv8u4ZI3rUOMSwRa3lR4HsWX8IktAW7ArGhw07wyVCIBYCIvtYyMRIh6jjkXWs6y7dHV32kecu3YvH/v37WxUWJn1+FMiedZagCLNF4hGgVhwzZkxQqqV6pAkBkX2agA1qtviDZ1MXG3b8JpA9lk9BEayLIPypU6fGHYAEpb6qR3IIiOyTwy/jnsZaaPbs2XbHMTt6/SRBUuNgWYQFGI7NMAKQCIFECIjsEyGk64UQYCcvo8n169f7Si2C2SWuJxgN+1mIIYsHVwKx0PlKhEBREBDZFwUl3VMIAXzmZGdnW8L3C3li/grh+3mRloA07GqeN2+e3Z9RqGGUIARiICCyjwGMkhMjMGTIEDuy3Lt3b+KbPXIHO5L9qrfHyylYQ/SRDsg8Aq+K4WEERPYebhyvF42R8owZM6y75YKCAq8X15aPXct+JHsWxfPy8ux6CT6SJEKguAiI7IuLmO4PQ4CRMjts8/PzreuIsIsePPHjyB6XHOxvoGPFt49ECJQEAZF9SVDTM2EI4Flx3LhxZt26dX/9A4Xd4KETv5lf4gV19erVFl8C1EiEQEkRENmXFDk9F4YAcW+zsrLM5s2bw3wAhd3kgRM/qXHYAEbUMHYud+7c2QPoqQh+RkBk7+fW81jZ2cWJaePhw4c9VrL/iuMXNQ5O9BjRQ/L9+vX7rwL6JgRKiIDIvoTA6bHCCLC5h00+7K7FcsSL4oeRPR5TCbSCl9Fhw4Z5EUaVyYcIiOx92GheLnK1atVs4AwsR968eeO5onpdZ8+ehS1bttj9AOPHj/ccfiqQfxEQ2fu37TxbcqJsDR061FqQEHbRS+J1NQ5O5jANxfIG01aJEEgVAvo1pQpJ5ROGQJ8+fWz80x07doSll/WJl9U4hw4dMo8ePbK29AS1kQiBVCIgsk8lmsorDIHJkyfbYCEnTpwISy/LE6+O7E+dOmUuXbpk5s6dG4jg7mXZxnp3dARE9tFxUWoKEGB0iofMI0eO2GDtKcgy6SzQ2XvNuuXKlSsWI9wgEIdYIgTSgYACjqcDVeUZhsDt27fN1q1bzdKlS22w9bCLGX5y9+5dG+5x/vz5pkGDBhmOhqqfTgQ0sk8nusrbIsDOT0bTbPnHrFDyLwKPHz+2RI+7CRG9fhXpRkBkn26Elb9FgPiomGXu3r1biPxB4PXr1zZ27JQpU0zz5s2FiRBIOwIi+7RDrBc4BKZPn25QW1y4cMElZeTx48eP1g3CyJEjDXEBJEKgNBAQ2ZcGynqHRaBy5cp2wXbPnj3myZMnGYnKt2/fTG5ursE0tXv37hmJgSpdNgiI7MsG94x9K77YJ02aZPX3fvQrn0zD/fjxw/q7ad26tRkwYEAyWelZIVBsBET2xYZMDySLQIcOHUwcKwdxAAAE5UlEQVSXLl3Mxo0bk83KV89v2LDBYOc/evRoX5VbhQ0GAjK9DEY7qhZCQAgIgbgIaGQfFx5dFAJCQAgEAwGRfTDaMXC1wB7/8+fPMePFHjt2zOzbty9w9VaFhEC6EBDZpwtZ5ZsUAgcOHDATJkwwEydOtKQfmRl+ZPAnIxECQqBoCIjsi4aT7iplBE6fPm0qVqxofv36Zc6ePVvKb9frhEDwEKgQvCqpRn5H4OHDh+bZs2eGTVj79++3I/hBgwbFrdbx48fN0aNHzfv3720HUaNGDWvLPmLECFOuXDn7LEFBvn79aoN3Hzx40OCuoFevXqZHjx5m+fLlJjs727x48cLgmOz379+mW7duhh2uzDLocN6+fWuaNWtm5syZY+rUqWPzfPXqldm5c6e5d++eIZRg7dq1TdeuXQ0hGiVCwEsIiOy91Boqi0UA9UyFChVM7969zbt37yzZQsL169ePidCDBw8MUZ4g2qpVq9qwiNu3b7ezg8GDB9vn2MjFDt6LFy8agqpUr17dumBm9kA6H1w6tGnTxjx//tzQIZw/f958+vTJBlOvWbOmuXr1qi1PTk6O+fnzp1m2bJlhR2zPnj1NlSpVzK1btwybxkT2MZtKF8oIAZF9GQGv10ZHwKltOnbsaN399u3b15IrHQA6/Fgyc+ZMExrwgwVe0iBnR/Y8S/5jx441zBTY0Yu4zV3t27c3CxYssJ0FnQHrBcwK1q5d+9dRGTOA69ev2+eePn1qXr58aYk9tGw3btyw1/VHCHgJAZG9l1pDZTHXrl2zI2lIHmncuLFp2rSpQYdPTFankomECqK/c+eOfZ4RPKPxL1++2FF36L0NGzY0o0aNCk36+71ly5aW6EmoVKmSqVevnh2th3qkbNKkie1A6Azq1q1rCLJ+7tw52xlkZWUZ1EccJULAawiI7L3WIhleHmdhg47cOUz7/v27DV6OX3xcDUQT9PGE9SPsIDFwIWg8SyYjoTMFlw/qJQSVEYFQpk2bZnbt2mX93ZCOB0sidLVt25ZTiRDwDAIie880hQqCk7DLly9bwmaRNlLoCKKRPXp9iL5Tp05WDcOoHFm8eLEhz5JKrFlEaH6oiNDXMyO5efOmXchdsWKFXbTFmkgiBLyCgMjeKy2hctiRPM7ClixZUsj178KFC+11FkYjSRTdOYKe3xE91jRYx6RT0PWXL1/eLuqymMynUaNGJi8vz9BZtWrVKp2vV95CoFgIiOyLBZduTicCjNydNUzkezCPRI1TUFBgTSRDrzPaR31DrFs6Aoj+5MmTBgsdVDrpEswt16xZY4YPH25atGhhzTpZW0D9E89yKF3lUb5CIB4CIvt46OhaqSGAKgazRVz/sugZKdi8b9q0yZw5c+Yv2Ts1C+SKPXx+fr4lX55t166dJVx3D2mh3zl34tLd0aVzjExjJO/SWaCtVauW2bZtm02jHIRgXLRoke20bKL+CAGPICCvlx5pCBUjeQQwq2SjFPbwWMWUlrCAzIYryN+pkUrr3XqPECgqAiL7oiKl+4SAEBACPkbg3zmpjyugogsBISAEhEBiBET2iTHSHUJACAgB3yMgsvd9E6oCQkAICIHECIjsE2OkO4SAEBACvkdAZO/7JlQFhIAQEAKJERDZJ8ZIdwgBISAEfI+AyN73TagKCAEhIAQSI/AP+0h9/JIXNIwAAAAASUVORK5CYII=", wD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", VD = window.Vue.defineComponent, Se = window.Vue.createElementVNode, kc = window.Vue.createTextVNode, Un = window.Vue.unref, Co = window.Vue.withCtx, xo = window.Vue.createVNode, vD = window.Vue.openBlock, TD = window.Vue.createElementBlock, gD = window.Vue.pushScopeId, UD = window.Vue.popScopeId, rr = (t) => (gD("data-v-9a5b5f4e"), t = t(), UD(), t), RD = { class: "container" }, ND = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("h2", null, "Configuration", -1)), yD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("p", null, [
  /* @__PURE__ */ kc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ kc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Se("strong", null, [
    /* @__PURE__ */ Se("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), MD = { class: "radio-content" }, kD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("strong", { class: "title" }, "Clustering", -1)), ZD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), bD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("img", {
  class: "img",
  src: mD
}, null, -1)), JD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", { class: "hellinger" }, [
  /* @__PURE__ */ Se("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Se("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), ED = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", { class: "radio-content" }, [
  /* @__PURE__ */ Se("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Se("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Se("img", {
    class: "img img2",
    src: wD
  })
], -1)), SD = /* @__PURE__ */ kc(" Continue "), Lp = window.Vue.ref, FD = /* @__PURE__ */ VD({
  __name: "ConfigurationPage",
  setup(t) {
    const o = oi(), r = $c(), s = Lp(!1), a = Lp(ft.ENGINE_DBSCAN), u = () => {
      vm(o.allowSave), YN(a.value, s.value), r.push({ name: "situations" });
    };
    return (d, f) => (vD(), TD("div", RD, [
      ND,
      yD,
      Se("div", null, [
        xo(Un(Uw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: a.value,
          "onUpdate:modelValue": f[1] || (f[1] = (w) => a.value = w)
        }, {
          default: Co(() => [
            xo(Un(Ba), {
              class: "radio",
              value: Un(ft).ENGINE_DBSCAN
            }, {
              default: Co(() => [
                Se("div", MD, [
                  kD,
                  ZD,
                  bD,
                  xo(Un(Yc), {
                    modelValue: s.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (w) => s.value = w),
                    disabled: a.value !== Un(ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Co(() => [
                      JD
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            xo(Un(Ba), {
              class: "radio",
              value: Un(ft).ENGINE_DEEP_LEARNING
            }, {
              default: Co(() => [
                ED
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      xo(Un(Mn), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => u())
      }, {
        default: Co(() => [
          SD
        ]),
        _: 1
      })
    ]));
  }
});
const AD = /* @__PURE__ */ be(FD, [["__scopeId", "data-v-9a5b5f4e"]]), WD = window.VueRouter.createRouter, CD = window.VueRouter.createWebHistory, dc = async () => {
  const t = window.VRouter || qc, o = oi();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, Rw = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || qc, r = oi();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => dc(),
    component: qI
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => dc(),
    component: AD
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => dc(),
    component: r3
  },
  {
    path: "/error",
    name: "error",
    component: pD
  }
], $p = window.VRouter;
if ($p)
  for (const t of Rw) {
    const { path: o, name: r, component: s, beforeEnter: a } = t;
    $p.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: s,
      beforeEnter: a
    });
  }
const qc = WD({
  history: CD(),
  routes: Rw
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = RR;
