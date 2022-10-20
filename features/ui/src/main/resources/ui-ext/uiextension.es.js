const be = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, sR = {}, lR = window.Vue.resolveComponent, cR = window.Vue.createVNode, uR = window.Vue.openBlock, dR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const fR = { class: "main" };
function hR(t, o) {
  const r = lR("router-view");
  return uR(), dR("div", fR, [
    cR(r)
  ]);
}
const pR = /* @__PURE__ */ be(sR, [["render", hR], ["__scopeId", "data-v-5d32d140"]]), mR = window.Vue.defineComponent, wR = window.Vue.openBlock, VR = window.Vue.createBlock, vR = /* @__PURE__ */ mR({
  __name: "App",
  setup(t) {
    return (o, r) => (wR(), VR(pR));
  }
});
var Uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function TR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var $p = { exports: {} }, Mc = { exports: {} }, qp = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, gR = qp, Zc = Object.prototype.toString, bc = function(t) {
  return function(o) {
    var r = Zc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function tr(t) {
  return t = t.toLowerCase(), function(r) {
    return bc(r) === t;
  };
}
function Jc(t) {
  return Array.isArray(t);
}
function ka(t) {
  return typeof t > "u";
}
function UR(t) {
  return t !== null && !ka(t) && t.constructor !== null && !ka(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var Kp = tr("ArrayBuffer");
function RR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && Kp(t.buffer), o;
}
function NR(t) {
  return typeof t == "string";
}
function yR(t) {
  return typeof t == "number";
}
function em(t) {
  return t !== null && typeof t == "object";
}
function Va(t) {
  if (bc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var kR = tr("Date"), MR = tr("File"), ZR = tr("Blob"), bR = tr("FileList");
function Ec(t) {
  return Zc.call(t) === "[object Function]";
}
function JR(t) {
  return em(t) && Ec(t.pipe);
}
function ER(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Zc.call(t) === o || Ec(t.toString) && t.toString() === o);
}
var SR = tr("URLSearchParams");
function FR(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function AR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Sc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Jc(t))
      for (var r = 0, s = t.length; r < s; r++)
        o.call(null, t[r], r, t);
    else
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && o.call(null, t[a], a, t);
}
function dc() {
  var t = {};
  function o(a, u) {
    Va(t[u]) && Va(a) ? t[u] = dc(t[u], a) : Va(a) ? t[u] = dc({}, a) : Jc(a) ? t[u] = a.slice() : t[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Sc(arguments[r], o);
  return t;
}
function WR(t, o, r) {
  return Sc(o, function(a, u) {
    r && typeof a == "function" ? t[u] = gR(a, r) : t[u] = a;
  }), t;
}
function CR(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function xR(t, o, r, s) {
  t.prototype = Object.create(o.prototype, s), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function BR(t, o, r) {
  var s, a, u, d = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      u = s[a], d[u] || (o[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function IR(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var s = t.indexOf(o, r);
  return s !== -1 && s === r;
}
function DR(t) {
  if (!t)
    return null;
  var o = t.length;
  if (ka(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var OR = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Be = {
  isArray: Jc,
  isArrayBuffer: Kp,
  isBuffer: UR,
  isFormData: ER,
  isArrayBufferView: RR,
  isString: NR,
  isNumber: yR,
  isObject: em,
  isPlainObject: Va,
  isUndefined: ka,
  isDate: kR,
  isFile: MR,
  isBlob: ZR,
  isFunction: Ec,
  isStream: JR,
  isURLSearchParams: SR,
  isStandardBrowserEnv: AR,
  forEach: Sc,
  merge: dc,
  extend: WR,
  trim: FR,
  stripBOM: CR,
  inherits: xR,
  toFlatObject: BR,
  kindOf: bc,
  kindOfTest: tr,
  endsWith: IR,
  toArray: DR,
  isTypedArray: OR,
  isFileList: bR
}, gr = Be;
function Ef(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var tm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (gr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    gr.forEach(r, function(w, g) {
      w === null || typeof w > "u" || (gr.isArray(w) ? g = g + "[]" : w = [w], gr.forEach(w, function(R) {
        gr.isDate(R) ? R = R.toISOString() : gr.isObject(R) && (R = JSON.stringify(R)), u.push(Ef(g) + "=" + Ef(R));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, QR = Be;
function Ba() {
  this.handlers = [];
}
Ba.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Ba.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ba.prototype.forEach = function(o) {
  QR.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var zR = Ba, GR = Be, YR = function(o, r) {
  GR.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, gl, Sf;
function Hr() {
  if (Sf)
    return gl;
  Sf = 1;
  var t = Be;
  function o(a, u, d, f, w) {
    Error.call(this), this.message = a, this.name = "AxiosError", u && (this.code = u), d && (this.config = d), f && (this.request = f), w && (this.response = w);
  }
  t.inherits(o, Error, {
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
  var r = o.prototype, s = {};
  return [
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
  ].forEach(function(a) {
    s[a] = { value: a };
  }), Object.defineProperties(o, s), Object.defineProperty(r, "isAxiosError", { value: !0 }), o.from = function(a, u, d, f, w, g) {
    var v = Object.create(r);
    return t.toFlatObject(a, v, function(y) {
      return y !== Error.prototype;
    }), o.call(v, a.message, u, d, f, w), v.name = a.name, g && Object.assign(v, g), v;
  }, gl = o, gl;
}
var nm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ft = Be;
function _R(t, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : Ft.isDate(u) ? u.toISOString() : Ft.isArrayBuffer(u) || Ft.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, d) {
    if (Ft.isPlainObject(u) || Ft.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(u), Ft.forEach(u, function(w, g) {
        if (!Ft.isUndefined(w)) {
          var v = d ? d + "." + g : g, R;
          if (w && !d && typeof w == "object") {
            if (Ft.endsWith(g, "{}"))
              w = JSON.stringify(w);
            else if (Ft.endsWith(g, "[]") && (R = Ft.toArray(w))) {
              R.forEach(function(y) {
                !Ft.isUndefined(y) && o.append(v, s(y));
              });
              return;
            }
          }
          a(w, v);
        }
      }), r.pop();
    } else
      o.append(d, s(u));
  }
  return a(t), o;
}
var rm = _R, Ul, Ff;
function HR() {
  if (Ff)
    return Ul;
  Ff = 1;
  var t = Hr();
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
function PR() {
  if (Af)
    return Rl;
  Af = 1;
  var t = Be;
  return Rl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, d, f, w) {
        var g = [];
        g.push(s + "=" + encodeURIComponent(a)), t.isNumber(u) && g.push("expires=" + new Date(u).toGMTString()), t.isString(d) && g.push("path=" + d), t.isString(f) && g.push("domain=" + f), w === !0 && g.push("secure"), document.cookie = g.join("; ");
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
var jR = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, XR = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, LR = jR, $R = XR, om = function(o, r) {
  return o && !LR(r) ? $R(o, r) : r;
}, Nl, Wf;
function qR() {
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
`), function(g) {
      if (f = g.indexOf(":"), u = t.trim(g.substr(0, f)).toLowerCase(), d = t.trim(g.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([d]) : a[u] = a[u] ? a[u] + ", " + d : d;
      }
    }), a;
  }, Nl;
}
var yl, Cf;
function KR() {
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
var kl, xf;
function Ia() {
  if (xf)
    return kl;
  xf = 1;
  var t = Hr(), o = Be;
  function r(s) {
    t.call(this, s == null ? "canceled" : s, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), kl = r, kl;
}
var Ml, Bf;
function eN() {
  return Bf || (Bf = 1, Ml = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Ml;
}
var Zl, If;
function Df() {
  if (If)
    return Zl;
  If = 1;
  var t = Be, o = HR(), r = PR(), s = tm, a = om, u = qR(), d = KR(), f = nm, w = Hr(), g = Ia(), v = eN();
  return Zl = function(y) {
    return new Promise(function(F, W) {
      var B = y.data, A = y.headers, S = y.responseType, E;
      function D() {
        y.cancelToken && y.cancelToken.unsubscribe(E), y.signal && y.signal.removeEventListener("abort", E);
      }
      t.isFormData(B) && t.isStandardBrowserEnv() && delete A["Content-Type"];
      var M = new XMLHttpRequest();
      if (y.auth) {
        var Y = y.auth.username || "", $ = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        A.Authorization = "Basic " + btoa(Y + ":" + $);
      }
      var q = a(y.baseURL, y.url);
      M.open(y.method.toUpperCase(), s(q, y.params, y.paramsSerializer), !0), M.timeout = y.timeout;
      function De() {
        if (!!M) {
          var Ve = "getAllResponseHeaders" in M ? u(M.getAllResponseHeaders()) : null, Te = !S || S === "text" || S === "json" ? M.responseText : M.response, Ne = {
            data: Te,
            status: M.status,
            statusText: M.statusText,
            headers: Ve,
            config: y,
            request: M
          };
          o(function(Fe) {
            F(Fe), D();
          }, function(Fe) {
            W(Fe), D();
          }, Ne), M = null;
        }
      }
      if ("onloadend" in M ? M.onloadend = De : M.onreadystatechange = function() {
        !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(De);
      }, M.onabort = function() {
        !M || (W(new w("Request aborted", w.ECONNABORTED, y, M)), M = null);
      }, M.onerror = function() {
        W(new w("Network Error", w.ERR_NETWORK, y, M, M)), M = null;
      }, M.ontimeout = function() {
        var Te = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ne = y.transitional || f;
        y.timeoutErrorMessage && (Te = y.timeoutErrorMessage), W(new w(
          Te,
          Ne.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          M
        )), M = null;
      }, t.isStandardBrowserEnv()) {
        var Le = (y.withCredentials || d(q)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        Le && (A[y.xsrfHeaderName] = Le);
      }
      "setRequestHeader" in M && t.forEach(A, function(Te, Ne) {
        typeof B > "u" && Ne.toLowerCase() === "content-type" ? delete A[Ne] : M.setRequestHeader(Ne, Te);
      }), t.isUndefined(y.withCredentials) || (M.withCredentials = !!y.withCredentials), S && S !== "json" && (M.responseType = y.responseType), typeof y.onDownloadProgress == "function" && M.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && M.upload && M.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (E = function(Ve) {
        !M || (W(!Ve || Ve && Ve.type ? new g() : Ve), M.abort(), M = null);
      }, y.cancelToken && y.cancelToken.subscribe(E), y.signal && (y.signal.aborted ? E() : y.signal.addEventListener("abort", E))), B || (B = null);
      var we = v(q);
      if (we && ["http", "https", "file"].indexOf(we) === -1) {
        W(new w("Unsupported protocol " + we + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      M.send(B);
    });
  }, Zl;
}
var bl, Of;
function tN() {
  return Of || (Of = 1, bl = null), bl;
}
var Ee = Be, Qf = YR, zf = Hr(), nN = nm, rN = rm, oN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Gf(t, o) {
  !Ee.isUndefined(t) && Ee.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function iN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Df()), t;
}
function aN(t, o, r) {
  if (Ee.isString(t))
    try {
      return (o || JSON.parse)(t), Ee.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(t);
}
var Da = {
  transitional: nN,
  adapter: iN(),
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
      return rN(u ? { "files[]": o } : o, d && new d());
    } else if (s || a === "application/json")
      return Gf(r, "application/json"), aN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Da.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
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
    FormData: tN()
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
  Da.headers[o] = {};
});
Ee.forEach(["post", "put", "patch"], function(o) {
  Da.headers[o] = Ee.merge(oN);
});
var Fc = Da, sN = Be, lN = Fc, cN = function(o, r, s) {
  var a = this || lN;
  return sN.forEach(s, function(d) {
    o = d.call(a, o, r);
  }), o;
}, Jl, Yf;
function im() {
  return Yf || (Yf = 1, Jl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Jl;
}
var _f = Be, El = cN, uN = im(), dN = Fc, fN = Ia();
function Sl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new fN();
}
var hN = function(o) {
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
  var r = o.adapter || dN.adapter;
  return r(o).then(function(a) {
    return Sl(o), a.data = El.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return uN(a) || (Sl(o), a && a.response && (a.response.data = El.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, ut = Be, am = function(o, r) {
  r = r || {};
  var s = {};
  function a(v, R) {
    return ut.isPlainObject(v) && ut.isPlainObject(R) ? ut.merge(v, R) : ut.isPlainObject(R) ? ut.merge({}, R) : ut.isArray(R) ? R.slice() : R;
  }
  function u(v) {
    if (ut.isUndefined(r[v])) {
      if (!ut.isUndefined(o[v]))
        return a(void 0, o[v]);
    } else
      return a(o[v], r[v]);
  }
  function d(v) {
    if (!ut.isUndefined(r[v]))
      return a(void 0, r[v]);
  }
  function f(v) {
    if (ut.isUndefined(r[v])) {
      if (!ut.isUndefined(o[v]))
        return a(void 0, o[v]);
    } else
      return a(void 0, r[v]);
  }
  function w(v) {
    if (v in r)
      return a(o[v], r[v]);
    if (v in o)
      return a(void 0, o[v]);
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
    validateStatus: w
  };
  return ut.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var y = g[R] || u, x = y(R);
    ut.isUndefined(x) && y !== w || (s[R] = x);
  }), s;
}, Fl, Hf;
function sm() {
  return Hf || (Hf = 1, Fl = {
    version: "0.27.2"
  }), Fl;
}
var pN = sm().version, Rn = Hr(), Ac = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Ac[t] = function(s) {
    return typeof s === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var Pf = {};
Ac.transitional = function(o, r, s) {
  function a(u, d) {
    return "[Axios v" + pN + "] Transitional option '" + u + "'" + d + (s ? ". " + s : "");
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
function mN(t, o, r) {
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
var wN = {
  assertOptions: mN,
  validators: Ac
}, lm = Be, VN = tm, jf = zR, Xf = hN, Oa = am, vN = om, cm = wN, Ur = cm.validators;
function Qr(t) {
  this.defaults = t, this.interceptors = {
    request: new jf(),
    response: new jf()
  };
}
Qr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Oa(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && cm.assertOptions(s, {
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
  for (var g = r; a.length; ) {
    var v = a.shift(), R = a.shift();
    try {
      g = v(g);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    f = Xf(g);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
Qr.prototype.getUri = function(o) {
  o = Oa(this.defaults, o);
  var r = vN(o.baseURL, o.url);
  return VN(r, o.params, o.paramsSerializer);
};
lm.forEach(["delete", "get", "head", "options"], function(o) {
  Qr.prototype[o] = function(r, s) {
    return this.request(Oa(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
lm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, d, f) {
      return this.request(Oa(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  Qr.prototype[o] = r(), Qr.prototype[o + "Form"] = r(!0);
});
var TN = Qr, Al, Lf;
function gN() {
  if (Lf)
    return Al;
  Lf = 1;
  var t = Ia();
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
function UN() {
  return $f || ($f = 1, Wl = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Wl;
}
var Cl, qf;
function RN() {
  if (qf)
    return Cl;
  qf = 1;
  var t = Be;
  return Cl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Cl;
}
var Kf = Be, NN = qp, va = TN, yN = am, kN = Fc;
function um(t) {
  var o = new va(t), r = NN(va.prototype.request, o);
  return Kf.extend(r, va.prototype, o), Kf.extend(r, o), r.create = function(a) {
    return um(yN(t, a));
  }, r;
}
var rt = um(kN);
rt.Axios = va;
rt.CanceledError = Ia();
rt.CancelToken = gN();
rt.isCancel = im();
rt.VERSION = sm().version;
rt.toFormData = rm;
rt.AxiosError = Hr();
rt.Cancel = rt.CanceledError;
rt.all = function(o) {
  return Promise.all(o);
};
rt.spread = UN();
rt.isAxiosError = RN();
Mc.exports = rt;
Mc.exports.default = rt;
(function(t) {
  t.exports = Mc.exports;
})($p);
const dm = /* @__PURE__ */ TR($p.exports), bn = dm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Jn = dm.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", g = 500, v = "__lodash_placeholder__", R = 1, y = 2, x = 4, F = 1, W = 2, B = 1, A = 2, S = 4, E = 8, D = 16, M = 32, Y = 64, $ = 128, q = 256, De = 512, Le = 30, we = "...", Ve = 800, Te = 16, Ne = 1, ce = 2, Fe = 3, Ae = 1 / 0, _e = 9007199254740991, $r = 17976931348623157e292, oi = 0 / 0, It = 4294967295, T1 = It - 1, g1 = It >>> 1, U1 = [
      ["ary", $],
      ["bind", B],
      ["bindKey", A],
      ["curry", E],
      ["curryRight", D],
      ["flip", De],
      ["partial", M],
      ["partialRight", Y],
      ["rearg", q]
    ], or = "[object Arguments]", ii = "[object Array]", R1 = "[object AsyncFunction]", qr = "[object Boolean]", Kr = "[object Date]", N1 = "[object DOMException]", ai = "[object Error]", si = "[object Function]", qc = "[object GeneratorFunction]", Mt = "[object Map]", eo = "[object Number]", y1 = "[object Null]", _t = "[object Object]", Kc = "[object Promise]", k1 = "[object Proxy]", to = "[object RegExp]", Zt = "[object Set]", no = "[object String]", li = "[object Symbol]", M1 = "[object Undefined]", ro = "[object WeakMap]", Z1 = "[object WeakSet]", oo = "[object ArrayBuffer]", ir = "[object DataView]", Ka = "[object Float32Array]", es = "[object Float64Array]", ts = "[object Int8Array]", ns = "[object Int16Array]", rs = "[object Int32Array]", os = "[object Uint8Array]", is = "[object Uint8ClampedArray]", as = "[object Uint16Array]", ss = "[object Uint32Array]", b1 = /\b__p \+= '';/g, J1 = /\b(__p \+=) '' \+/g, E1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, eu = /&(?:amp|lt|gt|quot|#39);/g, tu = /[&<>"']/g, S1 = RegExp(eu.source), F1 = RegExp(tu.source), A1 = /<%-([\s\S]+?)%>/g, W1 = /<%([\s\S]+?)%>/g, nu = /<%=([\s\S]+?)%>/g, C1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, x1 = /^\w*$/, B1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ls = /[\\^$.*+?()[\]{}|]/g, I1 = RegExp(ls.source), cs = /^\s+/, D1 = /\s/, O1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Q1 = /\{\n\/\* \[wrapped with (.+)\] \*/, z1 = /,? & /, G1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Y1 = /[()=,{}\[\]\/\s]/, _1 = /\\(\\)?/g, H1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ru = /\w*$/, P1 = /^[-+]0x[0-9a-f]+$/i, j1 = /^0b[01]+$/i, X1 = /^\[object .+?Constructor\]$/, L1 = /^0o[0-7]+$/i, $1 = /^(?:0|[1-9]\d*)$/, q1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ci = /($^)/, K1 = /['\n\r\u2028\u2029\\]/g, ui = "\\ud800-\\udfff", ew = "\\u0300-\\u036f", tw = "\\ufe20-\\ufe2f", nw = "\\u20d0-\\u20ff", ou = ew + tw + nw, iu = "\\u2700-\\u27bf", au = "a-z\\xdf-\\xf6\\xf8-\\xff", rw = "\\xac\\xb1\\xd7\\xf7", ow = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", iw = "\\u2000-\\u206f", aw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", su = "A-Z\\xc0-\\xd6\\xd8-\\xde", lu = "\\ufe0e\\ufe0f", cu = rw + ow + iw + aw, us = "['\u2019]", sw = "[" + ui + "]", uu = "[" + cu + "]", di = "[" + ou + "]", du = "\\d+", lw = "[" + iu + "]", fu = "[" + au + "]", hu = "[^" + ui + cu + du + iu + au + su + "]", ds = "\\ud83c[\\udffb-\\udfff]", cw = "(?:" + di + "|" + ds + ")", pu = "[^" + ui + "]", fs = "(?:\\ud83c[\\udde6-\\uddff]){2}", hs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ar = "[" + su + "]", mu = "\\u200d", wu = "(?:" + fu + "|" + hu + ")", uw = "(?:" + ar + "|" + hu + ")", Vu = "(?:" + us + "(?:d|ll|m|re|s|t|ve))?", vu = "(?:" + us + "(?:D|LL|M|RE|S|T|VE))?", Tu = cw + "?", gu = "[" + lu + "]?", dw = "(?:" + mu + "(?:" + [pu, fs, hs].join("|") + ")" + gu + Tu + ")*", fw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", hw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Uu = gu + Tu + dw, pw = "(?:" + [lw, fs, hs].join("|") + ")" + Uu, mw = "(?:" + [pu + di + "?", di, fs, hs, sw].join("|") + ")", ww = RegExp(us, "g"), Vw = RegExp(di, "g"), ps = RegExp(ds + "(?=" + ds + ")|" + mw + Uu, "g"), vw = RegExp([
      ar + "?" + fu + "+" + Vu + "(?=" + [uu, ar, "$"].join("|") + ")",
      uw + "+" + vu + "(?=" + [uu, ar + wu, "$"].join("|") + ")",
      ar + "?" + wu + "+" + Vu,
      ar + "+" + vu,
      hw,
      fw,
      du,
      pw
    ].join("|"), "g"), Tw = RegExp("[" + mu + ui + ou + lu + "]"), gw = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Uw = [
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
    ], Rw = -1, fe = {};
    fe[Ka] = fe[es] = fe[ts] = fe[ns] = fe[rs] = fe[os] = fe[is] = fe[as] = fe[ss] = !0, fe[or] = fe[ii] = fe[oo] = fe[qr] = fe[ir] = fe[Kr] = fe[ai] = fe[si] = fe[Mt] = fe[eo] = fe[_t] = fe[to] = fe[Zt] = fe[no] = fe[ro] = !1;
    var de = {};
    de[or] = de[ii] = de[oo] = de[ir] = de[qr] = de[Kr] = de[Ka] = de[es] = de[ts] = de[ns] = de[rs] = de[Mt] = de[eo] = de[_t] = de[to] = de[Zt] = de[no] = de[li] = de[os] = de[is] = de[as] = de[ss] = !0, de[ai] = de[si] = de[ro] = !1;
    var Nw = {
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
    }, yw = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, kw = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Mw = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Zw = parseFloat, bw = parseInt, Ru = typeof Uo == "object" && Uo && Uo.Object === Object && Uo, Jw = typeof self == "object" && self && self.Object === Object && self, We = Ru || Jw || Function("return this")(), ms = o && !o.nodeType && o, Fn = ms && !0 && t && !t.nodeType && t, Nu = Fn && Fn.exports === ms, ws = Nu && Ru.process, mt = function() {
      try {
        var T = Fn && Fn.require && Fn.require("util").types;
        return T || ws && ws.binding && ws.binding("util");
      } catch {
      }
    }(), yu = mt && mt.isArrayBuffer, ku = mt && mt.isDate, Mu = mt && mt.isMap, Zu = mt && mt.isRegExp, bu = mt && mt.isSet, Ju = mt && mt.isTypedArray;
    function ot(T, k, N) {
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
    function Ew(T, k, N, I) {
      for (var _ = -1, ne = T == null ? 0 : T.length; ++_ < ne; ) {
        var ke = T[_];
        k(I, ke, N(ke), T);
      }
      return I;
    }
    function wt(T, k) {
      for (var N = -1, I = T == null ? 0 : T.length; ++N < I && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Sw(T, k) {
      for (var N = T == null ? 0 : T.length; N-- && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Eu(T, k) {
      for (var N = -1, I = T == null ? 0 : T.length; ++N < I; )
        if (!k(T[N], N, T))
          return !1;
      return !0;
    }
    function cn(T, k) {
      for (var N = -1, I = T == null ? 0 : T.length, _ = 0, ne = []; ++N < I; ) {
        var ke = T[N];
        k(ke, N, T) && (ne[_++] = ke);
      }
      return ne;
    }
    function fi(T, k) {
      var N = T == null ? 0 : T.length;
      return !!N && sr(T, k, 0) > -1;
    }
    function Vs(T, k, N) {
      for (var I = -1, _ = T == null ? 0 : T.length; ++I < _; )
        if (N(k, T[I]))
          return !0;
      return !1;
    }
    function he(T, k) {
      for (var N = -1, I = T == null ? 0 : T.length, _ = Array(I); ++N < I; )
        _[N] = k(T[N], N, T);
      return _;
    }
    function un(T, k) {
      for (var N = -1, I = k.length, _ = T.length; ++N < I; )
        T[_ + N] = k[N];
      return T;
    }
    function vs(T, k, N, I) {
      var _ = -1, ne = T == null ? 0 : T.length;
      for (I && ne && (N = T[++_]); ++_ < ne; )
        N = k(N, T[_], _, T);
      return N;
    }
    function Fw(T, k, N, I) {
      var _ = T == null ? 0 : T.length;
      for (I && _ && (N = T[--_]); _--; )
        N = k(N, T[_], _, T);
      return N;
    }
    function Ts(T, k) {
      for (var N = -1, I = T == null ? 0 : T.length; ++N < I; )
        if (k(T[N], N, T))
          return !0;
      return !1;
    }
    var Aw = gs("length");
    function Ww(T) {
      return T.split("");
    }
    function Cw(T) {
      return T.match(G1) || [];
    }
    function Su(T, k, N) {
      var I;
      return N(T, function(_, ne, ke) {
        if (k(_, ne, ke))
          return I = ne, !1;
      }), I;
    }
    function hi(T, k, N, I) {
      for (var _ = T.length, ne = N + (I ? 1 : -1); I ? ne-- : ++ne < _; )
        if (k(T[ne], ne, T))
          return ne;
      return -1;
    }
    function sr(T, k, N) {
      return k === k ? Pw(T, k, N) : hi(T, Fu, N);
    }
    function xw(T, k, N, I) {
      for (var _ = N - 1, ne = T.length; ++_ < ne; )
        if (I(T[_], k))
          return _;
      return -1;
    }
    function Fu(T) {
      return T !== T;
    }
    function Au(T, k) {
      var N = T == null ? 0 : T.length;
      return N ? Rs(T, k) / N : oi;
    }
    function gs(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function Us(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function Wu(T, k, N, I, _) {
      return _(T, function(ne, ke, ue) {
        N = I ? (I = !1, ne) : k(N, ne, ke, ue);
      }), N;
    }
    function Bw(T, k) {
      var N = T.length;
      for (T.sort(k); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Rs(T, k) {
      for (var N, I = -1, _ = T.length; ++I < _; ) {
        var ne = k(T[I]);
        ne !== r && (N = N === r ? ne : N + ne);
      }
      return N;
    }
    function Ns(T, k) {
      for (var N = -1, I = Array(T); ++N < T; )
        I[N] = k(N);
      return I;
    }
    function Iw(T, k) {
      return he(k, function(N) {
        return [N, T[N]];
      });
    }
    function Cu(T) {
      return T && T.slice(0, Du(T) + 1).replace(cs, "");
    }
    function it(T) {
      return function(k) {
        return T(k);
      };
    }
    function ys(T, k) {
      return he(k, function(N) {
        return T[N];
      });
    }
    function io(T, k) {
      return T.has(k);
    }
    function xu(T, k) {
      for (var N = -1, I = T.length; ++N < I && sr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function Bu(T, k) {
      for (var N = T.length; N-- && sr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function Dw(T, k) {
      for (var N = T.length, I = 0; N--; )
        T[N] === k && ++I;
      return I;
    }
    var Ow = Us(Nw), Qw = Us(yw);
    function zw(T) {
      return "\\" + Mw[T];
    }
    function Gw(T, k) {
      return T == null ? r : T[k];
    }
    function lr(T) {
      return Tw.test(T);
    }
    function Yw(T) {
      return gw.test(T);
    }
    function _w(T) {
      for (var k, N = []; !(k = T.next()).done; )
        N.push(k.value);
      return N;
    }
    function ks(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(I, _) {
        N[++k] = [_, I];
      }), N;
    }
    function Iu(T, k) {
      return function(N) {
        return T(k(N));
      };
    }
    function dn(T, k) {
      for (var N = -1, I = T.length, _ = 0, ne = []; ++N < I; ) {
        var ke = T[N];
        (ke === k || ke === v) && (T[N] = v, ne[_++] = N);
      }
      return ne;
    }
    function pi(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(I) {
        N[++k] = I;
      }), N;
    }
    function Hw(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(I) {
        N[++k] = [I, I];
      }), N;
    }
    function Pw(T, k, N) {
      for (var I = N - 1, _ = T.length; ++I < _; )
        if (T[I] === k)
          return I;
      return -1;
    }
    function jw(T, k, N) {
      for (var I = N + 1; I--; )
        if (T[I] === k)
          return I;
      return I;
    }
    function cr(T) {
      return lr(T) ? Lw(T) : Aw(T);
    }
    function bt(T) {
      return lr(T) ? $w(T) : Ww(T);
    }
    function Du(T) {
      for (var k = T.length; k-- && D1.test(T.charAt(k)); )
        ;
      return k;
    }
    var Xw = Us(kw);
    function Lw(T) {
      for (var k = ps.lastIndex = 0; ps.test(T); )
        ++k;
      return k;
    }
    function $w(T) {
      return T.match(ps) || [];
    }
    function qw(T) {
      return T.match(vw) || [];
    }
    var Kw = function T(k) {
      k = k == null ? We : ur.defaults(We.Object(), k, ur.pick(We, Uw));
      var N = k.Array, I = k.Date, _ = k.Error, ne = k.Function, ke = k.Math, ue = k.Object, Ms = k.RegExp, eV = k.String, Vt = k.TypeError, mi = N.prototype, tV = ne.prototype, dr = ue.prototype, wi = k["__core-js_shared__"], Vi = tV.toString, ie = dr.hasOwnProperty, nV = 0, Ou = function() {
        var e = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), vi = dr.toString, rV = Vi.call(ue), oV = We._, iV = Ms(
        "^" + Vi.call(ie).replace(ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ti = Nu ? k.Buffer : r, fn = k.Symbol, gi = k.Uint8Array, Qu = Ti ? Ti.allocUnsafe : r, Ui = Iu(ue.getPrototypeOf, ue), zu = ue.create, Gu = dr.propertyIsEnumerable, Ri = mi.splice, Yu = fn ? fn.isConcatSpreadable : r, ao = fn ? fn.iterator : r, An = fn ? fn.toStringTag : r, Ni = function() {
        try {
          var e = In(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), aV = k.clearTimeout !== We.clearTimeout && k.clearTimeout, sV = I && I.now !== We.Date.now && I.now, lV = k.setTimeout !== We.setTimeout && k.setTimeout, yi = ke.ceil, ki = ke.floor, Zs = ue.getOwnPropertySymbols, cV = Ti ? Ti.isBuffer : r, _u = k.isFinite, uV = mi.join, dV = Iu(ue.keys, ue), Me = ke.max, Oe = ke.min, fV = I.now, hV = k.parseInt, Hu = ke.random, pV = mi.reverse, bs = In(k, "DataView"), so = In(k, "Map"), Js = In(k, "Promise"), fr = In(k, "Set"), lo = In(k, "WeakMap"), co = In(ue, "create"), Mi = lo && new lo(), hr = {}, mV = Dn(bs), wV = Dn(so), VV = Dn(Js), vV = Dn(fr), TV = Dn(lo), Zi = fn ? fn.prototype : r, uo = Zi ? Zi.valueOf : r, Pu = Zi ? Zi.toString : r;
      function h(e) {
        if (ve(e) && !H(e) && !(e instanceof ee)) {
          if (e instanceof vt)
            return e;
          if (ie.call(e, "__wrapped__"))
            return jd(e);
        }
        return new vt(e);
      }
      var pr = function() {
        function e() {
        }
        return function(n) {
          if (!pe(n))
            return {};
          if (zu)
            return zu(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function bi() {
      }
      function vt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: A1,
        evaluate: W1,
        interpolate: nu,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = bi.prototype, h.prototype.constructor = h, vt.prototype = pr(bi.prototype), vt.prototype.constructor = vt;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = It, this.__views__ = [];
      }
      function gV() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function UV() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function RV() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = H(e), l = n < 0, c = i ? e.length : 0, p = Wv(0, c, this.__views__), m = p.start, V = p.end, U = V - m, Z = l ? V : m - 1, b = this.__iteratees__, J = b.length, C = 0, O = Oe(U, this.__takeCount__);
        if (!i || !l && c == U && O == U)
          return Vd(e, this.__actions__);
        var z = [];
        e:
          for (; U-- && C < O; ) {
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
      ee.prototype = pr(bi.prototype), ee.prototype.constructor = ee;
      function Wn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function NV() {
        this.__data__ = co ? co(null) : {}, this.size = 0;
      }
      function yV(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function kV(e) {
        var n = this.__data__;
        if (co) {
          var i = n[e];
          return i === w ? r : i;
        }
        return ie.call(n, e) ? n[e] : r;
      }
      function MV(e) {
        var n = this.__data__;
        return co ? n[e] !== r : ie.call(n, e);
      }
      function ZV(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = co && n === r ? w : n, this;
      }
      Wn.prototype.clear = NV, Wn.prototype.delete = yV, Wn.prototype.get = kV, Wn.prototype.has = MV, Wn.prototype.set = ZV;
      function Ht(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function bV() {
        this.__data__ = [], this.size = 0;
      }
      function JV(e) {
        var n = this.__data__, i = Ji(n, e);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ri.call(n, i, 1), --this.size, !0;
      }
      function EV(e) {
        var n = this.__data__, i = Ji(n, e);
        return i < 0 ? r : n[i][1];
      }
      function SV(e) {
        return Ji(this.__data__, e) > -1;
      }
      function FV(e, n) {
        var i = this.__data__, l = Ji(i, e);
        return l < 0 ? (++this.size, i.push([e, n])) : i[l][1] = n, this;
      }
      Ht.prototype.clear = bV, Ht.prototype.delete = JV, Ht.prototype.get = EV, Ht.prototype.has = SV, Ht.prototype.set = FV;
      function Pt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function AV() {
        this.size = 0, this.__data__ = {
          hash: new Wn(),
          map: new (so || Ht)(),
          string: new Wn()
        };
      }
      function WV(e) {
        var n = Qi(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function CV(e) {
        return Qi(this, e).get(e);
      }
      function xV(e) {
        return Qi(this, e).has(e);
      }
      function BV(e, n) {
        var i = Qi(this, e), l = i.size;
        return i.set(e, n), this.size += i.size == l ? 0 : 1, this;
      }
      Pt.prototype.clear = AV, Pt.prototype.delete = WV, Pt.prototype.get = CV, Pt.prototype.has = xV, Pt.prototype.set = BV;
      function Cn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Pt(); ++n < i; )
          this.add(e[n]);
      }
      function IV(e) {
        return this.__data__.set(e, w), this;
      }
      function DV(e) {
        return this.__data__.has(e);
      }
      Cn.prototype.add = Cn.prototype.push = IV, Cn.prototype.has = DV;
      function Jt(e) {
        var n = this.__data__ = new Ht(e);
        this.size = n.size;
      }
      function OV() {
        this.__data__ = new Ht(), this.size = 0;
      }
      function QV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function zV(e) {
        return this.__data__.get(e);
      }
      function GV(e) {
        return this.__data__.has(e);
      }
      function YV(e, n) {
        var i = this.__data__;
        if (i instanceof Ht) {
          var l = i.__data__;
          if (!so || l.length < a - 1)
            return l.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new Pt(l);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Jt.prototype.clear = OV, Jt.prototype.delete = QV, Jt.prototype.get = zV, Jt.prototype.has = GV, Jt.prototype.set = YV;
      function ju(e, n) {
        var i = H(e), l = !i && On(e), c = !i && !l && Vn(e), p = !i && !l && !c && vr(e), m = i || l || c || p, V = m ? Ns(e.length, eV) : [], U = V.length;
        for (var Z in e)
          (n || ie.call(e, Z)) && !(m && (Z == "length" || c && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || $t(Z, U))) && V.push(Z);
        return V;
      }
      function Xu(e) {
        var n = e.length;
        return n ? e[Os(0, n - 1)] : r;
      }
      function _V(e, n) {
        return zi($e(e), xn(n, 0, e.length));
      }
      function HV(e) {
        return zi($e(e));
      }
      function Es(e, n, i) {
        (i !== r && !Et(e[n], i) || i === r && !(n in e)) && jt(e, n, i);
      }
      function fo(e, n, i) {
        var l = e[n];
        (!(ie.call(e, n) && Et(l, i)) || i === r && !(n in e)) && jt(e, n, i);
      }
      function Ji(e, n) {
        for (var i = e.length; i--; )
          if (Et(e[i][0], n))
            return i;
        return -1;
      }
      function PV(e, n, i, l) {
        return hn(e, function(c, p, m) {
          n(l, c, i(c), m);
        }), l;
      }
      function Lu(e, n) {
        return e && Ot(n, Je(n), e);
      }
      function jV(e, n) {
        return e && Ot(n, Ke(n), e);
      }
      function jt(e, n, i) {
        n == "__proto__" && Ni ? Ni(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Ss(e, n) {
        for (var i = -1, l = n.length, c = N(l), p = e == null; ++i < l; )
          c[i] = p ? r : dl(e, n[i]);
        return c;
      }
      function xn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function Tt(e, n, i, l, c, p) {
        var m, V = n & R, U = n & y, Z = n & x;
        if (i && (m = c ? i(e, l, c, p) : i(e)), m !== r)
          return m;
        if (!pe(e))
          return e;
        var b = H(e);
        if (b) {
          if (m = xv(e), !V)
            return $e(e, m);
        } else {
          var J = Qe(e), C = J == si || J == qc;
          if (Vn(e))
            return gd(e, V);
          if (J == _t || J == or || C && !c) {
            if (m = U || C ? {} : Dd(e), !V)
              return U ? kv(e, jV(m, e)) : yv(e, Lu(m, e));
          } else {
            if (!de[J])
              return c ? e : {};
            m = Bv(e, J, V);
          }
        }
        p || (p = new Jt());
        var O = p.get(e);
        if (O)
          return O;
        p.set(e, m), mf(e) ? e.forEach(function(G) {
          m.add(Tt(G, n, i, G, e, p));
        }) : hf(e) && e.forEach(function(G, K) {
          m.set(K, Tt(G, n, i, K, e, p));
        });
        var z = Z ? U ? $s : Ls : U ? Ke : Je, j = b ? r : z(e);
        return wt(j || e, function(G, K) {
          j && (K = G, G = e[K]), fo(m, K, Tt(G, n, i, K, e, p));
        }), m;
      }
      function XV(e) {
        var n = Je(e);
        return function(i) {
          return $u(i, e, n);
        };
      }
      function $u(e, n, i) {
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
      function qu(e, n, i) {
        if (typeof e != "function")
          throw new Vt(d);
        return To(function() {
          e.apply(r, i);
        }, n);
      }
      function ho(e, n, i, l) {
        var c = -1, p = fi, m = !0, V = e.length, U = [], Z = n.length;
        if (!V)
          return U;
        i && (n = he(n, it(i))), l ? (p = Vs, m = !1) : n.length >= a && (p = io, m = !1, n = new Cn(n));
        e:
          for (; ++c < V; ) {
            var b = e[c], J = i == null ? b : i(b);
            if (b = l || b !== 0 ? b : 0, m && J === J) {
              for (var C = Z; C--; )
                if (n[C] === J)
                  continue e;
              U.push(b);
            } else
              p(n, J, l) || U.push(b);
          }
        return U;
      }
      var hn = kd(Dt), Ku = kd(As, !0);
      function LV(e, n) {
        var i = !0;
        return hn(e, function(l, c, p) {
          return i = !!n(l, c, p), i;
        }), i;
      }
      function Ei(e, n, i) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var p = e[l], m = n(p);
          if (m != null && (V === r ? m === m && !st(m) : i(m, V)))
            var V = m, U = p;
        }
        return U;
      }
      function $V(e, n, i, l) {
        var c = e.length;
        for (i = P(i), i < 0 && (i = -i > c ? 0 : c + i), l = l === r || l > c ? c : P(l), l < 0 && (l += c), l = i > l ? 0 : Vf(l); i < l; )
          e[i++] = n;
        return e;
      }
      function ed(e, n) {
        var i = [];
        return hn(e, function(l, c, p) {
          n(l, c, p) && i.push(l);
        }), i;
      }
      function Ce(e, n, i, l, c) {
        var p = -1, m = e.length;
        for (i || (i = Dv), c || (c = []); ++p < m; ) {
          var V = e[p];
          n > 0 && i(V) ? n > 1 ? Ce(V, n - 1, i, l, c) : un(c, V) : l || (c[c.length] = V);
        }
        return c;
      }
      var Fs = Md(), td = Md(!0);
      function Dt(e, n) {
        return e && Fs(e, n, Je);
      }
      function As(e, n) {
        return e && td(e, n, Je);
      }
      function Si(e, n) {
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
      function nd(e, n, i) {
        var l = n(e);
        return H(e) ? l : un(l, i(e));
      }
      function He(e) {
        return e == null ? e === r ? M1 : y1 : An && An in ue(e) ? Av(e) : Hv(e);
      }
      function Ws(e, n) {
        return e > n;
      }
      function qV(e, n) {
        return e != null && ie.call(e, n);
      }
      function KV(e, n) {
        return e != null && n in ue(e);
      }
      function ev(e, n, i) {
        return e >= Oe(n, i) && e < Me(n, i);
      }
      function Cs(e, n, i) {
        for (var l = i ? Vs : fi, c = e[0].length, p = e.length, m = p, V = N(p), U = 1 / 0, Z = []; m--; ) {
          var b = e[m];
          m && n && (b = he(b, it(n))), U = Oe(b.length, U), V[m] = !i && (n || c >= 120 && b.length >= 120) ? new Cn(m && b) : r;
        }
        b = e[0];
        var J = -1, C = V[0];
        e:
          for (; ++J < c && Z.length < U; ) {
            var O = b[J], z = n ? n(O) : O;
            if (O = i || O !== 0 ? O : 0, !(C ? io(C, z) : l(Z, z, i))) {
              for (m = p; --m; ) {
                var j = V[m];
                if (!(j ? io(j, z) : l(e[m], z, i)))
                  continue e;
              }
              C && C.push(z), Z.push(O);
            }
          }
        return Z;
      }
      function tv(e, n, i, l) {
        return Dt(e, function(c, p, m) {
          n(l, i(c), p, m);
        }), l;
      }
      function po(e, n, i) {
        n = mn(n, e), e = Gd(e, n);
        var l = e == null ? e : e[Qt(Ut(n))];
        return l == null ? r : ot(l, e, i);
      }
      function rd(e) {
        return ve(e) && He(e) == or;
      }
      function nv(e) {
        return ve(e) && He(e) == oo;
      }
      function rv(e) {
        return ve(e) && He(e) == Kr;
      }
      function mo(e, n, i, l, c) {
        return e === n ? !0 : e == null || n == null || !ve(e) && !ve(n) ? e !== e && n !== n : ov(e, n, i, l, mo, c);
      }
      function ov(e, n, i, l, c, p) {
        var m = H(e), V = H(n), U = m ? ii : Qe(e), Z = V ? ii : Qe(n);
        U = U == or ? _t : U, Z = Z == or ? _t : Z;
        var b = U == _t, J = Z == _t, C = U == Z;
        if (C && Vn(e)) {
          if (!Vn(n))
            return !1;
          m = !0, b = !1;
        }
        if (C && !b)
          return p || (p = new Jt()), m || vr(e) ? xd(e, n, i, l, c, p) : Sv(e, n, U, i, l, c, p);
        if (!(i & F)) {
          var O = b && ie.call(e, "__wrapped__"), z = J && ie.call(n, "__wrapped__");
          if (O || z) {
            var j = O ? e.value() : e, G = z ? n.value() : n;
            return p || (p = new Jt()), c(j, G, i, l, p);
          }
        }
        return C ? (p || (p = new Jt()), Fv(e, n, i, l, c, p)) : !1;
      }
      function iv(e) {
        return ve(e) && Qe(e) == Mt;
      }
      function xs(e, n, i, l) {
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
          var U = V[0], Z = e[U], b = V[1];
          if (m && V[2]) {
            if (Z === r && !(U in e))
              return !1;
          } else {
            var J = new Jt();
            if (l)
              var C = l(Z, b, U, e, n, J);
            if (!(C === r ? mo(b, Z, F | W, l, J) : C))
              return !1;
          }
        }
        return !0;
      }
      function od(e) {
        if (!pe(e) || Qv(e))
          return !1;
        var n = qt(e) ? iV : X1;
        return n.test(Dn(e));
      }
      function av(e) {
        return ve(e) && He(e) == to;
      }
      function sv(e) {
        return ve(e) && Qe(e) == Zt;
      }
      function lv(e) {
        return ve(e) && ji(e.length) && !!fe[He(e)];
      }
      function id(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? H(e) ? ld(e[0], e[1]) : sd(e) : bf(e);
      }
      function Bs(e) {
        if (!vo(e))
          return dV(e);
        var n = [];
        for (var i in ue(e))
          ie.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function cv(e) {
        if (!pe(e))
          return _v(e);
        var n = vo(e), i = [];
        for (var l in e)
          l == "constructor" && (n || !ie.call(e, l)) || i.push(l);
        return i;
      }
      function Is(e, n) {
        return e < n;
      }
      function ad(e, n) {
        var i = -1, l = qe(e) ? N(e.length) : [];
        return hn(e, function(c, p, m) {
          l[++i] = n(c, p, m);
        }), l;
      }
      function sd(e) {
        var n = Ks(e);
        return n.length == 1 && n[0][2] ? Qd(n[0][0], n[0][1]) : function(i) {
          return i === e || xs(i, e, n);
        };
      }
      function ld(e, n) {
        return tl(e) && Od(n) ? Qd(Qt(e), n) : function(i) {
          var l = dl(i, e);
          return l === r && l === n ? fl(i, e) : mo(n, l, F | W);
        };
      }
      function Fi(e, n, i, l, c) {
        e !== n && Fs(n, function(p, m) {
          if (c || (c = new Jt()), pe(p))
            uv(e, n, m, i, Fi, l, c);
          else {
            var V = l ? l(rl(e, m), p, m + "", e, n, c) : r;
            V === r && (V = p), Es(e, m, V);
          }
        }, Ke);
      }
      function uv(e, n, i, l, c, p, m) {
        var V = rl(e, i), U = rl(n, i), Z = m.get(U);
        if (Z) {
          Es(e, i, Z);
          return;
        }
        var b = p ? p(V, U, i + "", e, n, m) : r, J = b === r;
        if (J) {
          var C = H(U), O = !C && Vn(U), z = !C && !O && vr(U);
          b = U, C || O || z ? H(V) ? b = V : ge(V) ? b = $e(V) : O ? (J = !1, b = gd(U, !0)) : z ? (J = !1, b = Ud(U, !0)) : b = [] : go(U) || On(U) ? (b = V, On(V) ? b = vf(V) : (!pe(V) || qt(V)) && (b = Dd(U))) : J = !1;
        }
        J && (m.set(U, b), c(b, U, l, p, m), m.delete(U)), Es(e, i, b);
      }
      function cd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, $t(n, i) ? e[n] : r;
      }
      function ud(e, n, i) {
        n.length ? n = he(n, function(p) {
          return H(p) ? function(m) {
            return Bn(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [et];
        var l = -1;
        n = he(n, it(Q()));
        var c = ad(e, function(p, m, V) {
          var U = he(n, function(Z) {
            return Z(p);
          });
          return { criteria: U, index: ++l, value: p };
        });
        return Bw(c, function(p, m) {
          return Nv(p, m, i);
        });
      }
      function dv(e, n) {
        return dd(e, n, function(i, l) {
          return fl(e, l);
        });
      }
      function dd(e, n, i) {
        for (var l = -1, c = n.length, p = {}; ++l < c; ) {
          var m = n[l], V = Bn(e, m);
          i(V, m) && wo(p, mn(m, e), V);
        }
        return p;
      }
      function fv(e) {
        return function(n) {
          return Bn(n, e);
        };
      }
      function Ds(e, n, i, l) {
        var c = l ? xw : sr, p = -1, m = n.length, V = e;
        for (e === n && (n = $e(n)), i && (V = he(e, it(i))); ++p < m; )
          for (var U = 0, Z = n[p], b = i ? i(Z) : Z; (U = c(V, b, U, l)) > -1; )
            V !== e && Ri.call(V, U, 1), Ri.call(e, U, 1);
        return e;
      }
      function fd(e, n) {
        for (var i = e ? n.length : 0, l = i - 1; i--; ) {
          var c = n[i];
          if (i == l || c !== p) {
            var p = c;
            $t(c) ? Ri.call(e, c, 1) : Gs(e, c);
          }
        }
        return e;
      }
      function Os(e, n) {
        return e + ki(Hu() * (n - e + 1));
      }
      function hv(e, n, i, l) {
        for (var c = -1, p = Me(yi((n - e) / (i || 1)), 0), m = N(p); p--; )
          m[l ? p : ++c] = e, e += i;
        return m;
      }
      function Qs(e, n) {
        var i = "";
        if (!e || n < 1 || n > _e)
          return i;
        do
          n % 2 && (i += e), n = ki(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function X(e, n) {
        return ol(zd(e, n, et), e + "");
      }
      function pv(e) {
        return Xu(Tr(e));
      }
      function mv(e, n) {
        var i = Tr(e);
        return zi(i, xn(n, 0, i.length));
      }
      function wo(e, n, i, l) {
        if (!pe(e))
          return e;
        n = mn(n, e);
        for (var c = -1, p = n.length, m = p - 1, V = e; V != null && ++c < p; ) {
          var U = Qt(n[c]), Z = i;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return e;
          if (c != m) {
            var b = V[U];
            Z = l ? l(b, U, V) : r, Z === r && (Z = pe(b) ? b : $t(n[c + 1]) ? [] : {});
          }
          fo(V, U, Z), V = V[U];
        }
        return e;
      }
      var hd = Mi ? function(e, n) {
        return Mi.set(e, n), e;
      } : et, wv = Ni ? function(e, n) {
        return Ni(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: pl(n),
          writable: !0
        });
      } : et;
      function Vv(e) {
        return zi(Tr(e));
      }
      function gt(e, n, i) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), i = i > c ? c : i, i < 0 && (i += c), c = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = N(c); ++l < c; )
          p[l] = e[l + n];
        return p;
      }
      function vv(e, n) {
        var i;
        return hn(e, function(l, c, p) {
          return i = n(l, c, p), !i;
        }), !!i;
      }
      function Ai(e, n, i) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= g1) {
          for (; l < c; ) {
            var p = l + c >>> 1, m = e[p];
            m !== null && !st(m) && (i ? m <= n : m < n) ? l = p + 1 : c = p;
          }
          return c;
        }
        return zs(e, n, et, i);
      }
      function zs(e, n, i, l) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, V = n === null, U = st(n), Z = n === r; c < p; ) {
          var b = ki((c + p) / 2), J = i(e[b]), C = J !== r, O = J === null, z = J === J, j = st(J);
          if (m)
            var G = l || z;
          else
            Z ? G = z && (l || C) : V ? G = z && C && (l || !O) : U ? G = z && C && !O && (l || !j) : O || j ? G = !1 : G = l ? J <= n : J < n;
          G ? c = b + 1 : p = b;
        }
        return Oe(p, T1);
      }
      function pd(e, n) {
        for (var i = -1, l = e.length, c = 0, p = []; ++i < l; ) {
          var m = e[i], V = n ? n(m) : m;
          if (!i || !Et(V, U)) {
            var U = V;
            p[c++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function md(e) {
        return typeof e == "number" ? e : st(e) ? oi : +e;
      }
      function at(e) {
        if (typeof e == "string")
          return e;
        if (H(e))
          return he(e, at) + "";
        if (st(e))
          return Pu ? Pu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ae ? "-0" : n;
      }
      function pn(e, n, i) {
        var l = -1, c = fi, p = e.length, m = !0, V = [], U = V;
        if (i)
          m = !1, c = Vs;
        else if (p >= a) {
          var Z = n ? null : Jv(e);
          if (Z)
            return pi(Z);
          m = !1, c = io, U = new Cn();
        } else
          U = n ? [] : V;
        e:
          for (; ++l < p; ) {
            var b = e[l], J = n ? n(b) : b;
            if (b = i || b !== 0 ? b : 0, m && J === J) {
              for (var C = U.length; C--; )
                if (U[C] === J)
                  continue e;
              n && U.push(J), V.push(b);
            } else
              c(U, J, i) || (U !== V && U.push(J), V.push(b));
          }
        return V;
      }
      function Gs(e, n) {
        return n = mn(n, e), e = Gd(e, n), e == null || delete e[Qt(Ut(n))];
      }
      function wd(e, n, i, l) {
        return wo(e, n, i(Bn(e, n)), l);
      }
      function Wi(e, n, i, l) {
        for (var c = e.length, p = l ? c : -1; (l ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return i ? gt(e, l ? 0 : p, l ? p + 1 : c) : gt(e, l ? p + 1 : 0, l ? c : p);
      }
      function Vd(e, n) {
        var i = e;
        return i instanceof ee && (i = i.value()), vs(n, function(l, c) {
          return c.func.apply(c.thisArg, un([l], c.args));
        }, i);
      }
      function Ys(e, n, i) {
        var l = e.length;
        if (l < 2)
          return l ? pn(e[0]) : [];
        for (var c = -1, p = N(l); ++c < l; )
          for (var m = e[c], V = -1; ++V < l; )
            V != c && (p[c] = ho(p[c] || m, e[V], n, i));
        return pn(Ce(p, 1), n, i);
      }
      function vd(e, n, i) {
        for (var l = -1, c = e.length, p = n.length, m = {}; ++l < c; ) {
          var V = l < p ? n[l] : r;
          i(m, e[l], V);
        }
        return m;
      }
      function _s(e) {
        return ge(e) ? e : [];
      }
      function Hs(e) {
        return typeof e == "function" ? e : et;
      }
      function mn(e, n) {
        return H(e) ? e : tl(e, n) ? [e] : Pd(oe(e));
      }
      var Tv = X;
      function wn(e, n, i) {
        var l = e.length;
        return i = i === r ? l : i, !n && i >= l ? e : gt(e, n, i);
      }
      var Td = aV || function(e) {
        return We.clearTimeout(e);
      };
      function gd(e, n) {
        if (n)
          return e.slice();
        var i = e.length, l = Qu ? Qu(i) : new e.constructor(i);
        return e.copy(l), l;
      }
      function Ps(e) {
        var n = new e.constructor(e.byteLength);
        return new gi(n).set(new gi(e)), n;
      }
      function gv(e, n) {
        var i = n ? Ps(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function Uv(e) {
        var n = new e.constructor(e.source, ru.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Rv(e) {
        return uo ? ue(uo.call(e)) : {};
      }
      function Ud(e, n) {
        var i = n ? Ps(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Rd(e, n) {
        if (e !== n) {
          var i = e !== r, l = e === null, c = e === e, p = st(e), m = n !== r, V = n === null, U = n === n, Z = st(n);
          if (!V && !Z && !p && e > n || p && m && U && !V && !Z || l && m && U || !i && U || !c)
            return 1;
          if (!l && !p && !Z && e < n || Z && i && c && !l && !p || V && i && c || !m && c || !U)
            return -1;
        }
        return 0;
      }
      function Nv(e, n, i) {
        for (var l = -1, c = e.criteria, p = n.criteria, m = c.length, V = i.length; ++l < m; ) {
          var U = Rd(c[l], p[l]);
          if (U) {
            if (l >= V)
              return U;
            var Z = i[l];
            return U * (Z == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Nd(e, n, i, l) {
        for (var c = -1, p = e.length, m = i.length, V = -1, U = n.length, Z = Me(p - m, 0), b = N(U + Z), J = !l; ++V < U; )
          b[V] = n[V];
        for (; ++c < m; )
          (J || c < p) && (b[i[c]] = e[c]);
        for (; Z--; )
          b[V++] = e[c++];
        return b;
      }
      function yd(e, n, i, l) {
        for (var c = -1, p = e.length, m = -1, V = i.length, U = -1, Z = n.length, b = Me(p - V, 0), J = N(b + Z), C = !l; ++c < b; )
          J[c] = e[c];
        for (var O = c; ++U < Z; )
          J[O + U] = n[U];
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
          var V = n[p], U = l ? l(i[V], e[V], V, i, e) : r;
          U === r && (U = e[V]), c ? jt(i, V, U) : fo(i, V, U);
        }
        return i;
      }
      function yv(e, n) {
        return Ot(e, el(e), n);
      }
      function kv(e, n) {
        return Ot(e, Bd(e), n);
      }
      function Ci(e, n) {
        return function(i, l) {
          var c = H(i) ? Ew : PV, p = n ? n() : {};
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
      function Md(e) {
        return function(n, i, l) {
          for (var c = -1, p = ue(n), m = l(n), V = m.length; V--; ) {
            var U = m[e ? V : ++c];
            if (i(p[U], U, p) === !1)
              break;
          }
          return n;
        };
      }
      function Mv(e, n, i) {
        var l = n & B, c = Vo(e);
        function p() {
          var m = this && this !== We && this instanceof p ? c : e;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Zd(e) {
        return function(n) {
          n = oe(n);
          var i = lr(n) ? bt(n) : r, l = i ? i[0] : n.charAt(0), c = i ? wn(i, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function wr(e) {
        return function(n) {
          return vs(Mf(kf(n).replace(ww, "")), e, "");
        };
      }
      function Vo(e) {
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
      function Zv(e, n, i) {
        var l = Vo(e);
        function c() {
          for (var p = arguments.length, m = N(p), V = p, U = Vr(c); V--; )
            m[V] = arguments[V];
          var Z = p < 3 && m[0] !== U && m[p - 1] !== U ? [] : dn(m, U);
          if (p -= Z.length, p < i)
            return Fd(
              e,
              n,
              xi,
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
      function bd(e) {
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
      function Jd(e) {
        return Lt(function(n) {
          var i = n.length, l = i, c = vt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Vt(d);
            if (c && !m && Oi(p) == "wrapper")
              var m = new vt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var V = Oi(p), U = V == "wrapper" ? qs(p) : r;
            U && nl(U[0]) && U[1] == ($ | E | M | q) && !U[4].length && U[9] == 1 ? m = m[Oi(U[0])].apply(m, U[3]) : m = p.length == 1 && nl(p) ? m[V]() : m.thru(p);
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
      function xi(e, n, i, l, c, p, m, V, U, Z) {
        var b = n & $, J = n & B, C = n & A, O = n & (E | D), z = n & De, j = C ? r : Vo(e);
        function G() {
          for (var K = arguments.length, te = N(K), lt = K; lt--; )
            te[lt] = arguments[lt];
          if (O)
            var je = Vr(G), ct = Dw(te, je);
          if (l && (te = Nd(te, l, c, O)), p && (te = yd(te, p, m, O)), K -= ct, O && K < Z) {
            var Ue = dn(te, je);
            return Fd(
              e,
              n,
              xi,
              G.placeholder,
              i,
              te,
              Ue,
              V,
              U,
              Z - K
            );
          }
          var St = J ? i : this, en = C ? St[e] : e;
          return K = te.length, V ? te = Pv(te, V) : z && K > 1 && te.reverse(), b && U < K && (te.length = U), this && this !== We && this instanceof G && (en = j || Vo(en)), en.apply(St, te);
        }
        return G;
      }
      function Ed(e, n) {
        return function(i, l) {
          return tv(i, e, n(l), {});
        };
      }
      function Bi(e, n) {
        return function(i, l) {
          var c;
          if (i === r && l === r)
            return n;
          if (i !== r && (c = i), l !== r) {
            if (c === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = at(i), l = at(l)) : (i = md(i), l = md(l)), c = e(i, l);
          }
          return c;
        };
      }
      function js(e) {
        return Lt(function(n) {
          return n = he(n, it(Q())), X(function(i) {
            var l = this;
            return e(n, function(c) {
              return ot(c, l, i);
            });
          });
        });
      }
      function Ii(e, n) {
        n = n === r ? " " : at(n);
        var i = n.length;
        if (i < 2)
          return i ? Qs(n, e) : n;
        var l = Qs(n, yi(e / cr(n)));
        return lr(n) ? wn(bt(l), 0, e).join("") : l.slice(0, e);
      }
      function bv(e, n, i, l) {
        var c = n & B, p = Vo(e);
        function m() {
          for (var V = -1, U = arguments.length, Z = -1, b = l.length, J = N(b + U), C = this && this !== We && this instanceof m ? p : e; ++Z < b; )
            J[Z] = l[Z];
          for (; U--; )
            J[Z++] = arguments[++V];
          return ot(C, c ? i : this, J);
        }
        return m;
      }
      function Sd(e) {
        return function(n, i, l) {
          return l && typeof l != "number" && Pe(n, i, l) && (i = l = r), n = Kt(n), i === r ? (i = n, n = 0) : i = Kt(i), l = l === r ? n < i ? 1 : -1 : Kt(l), hv(n, i, l, e);
        };
      }
      function Di(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Rt(n), i = Rt(i)), e(n, i);
        };
      }
      function Fd(e, n, i, l, c, p, m, V, U, Z) {
        var b = n & E, J = b ? m : r, C = b ? r : m, O = b ? p : r, z = b ? r : p;
        n |= b ? M : Y, n &= ~(b ? Y : M), n & S || (n &= ~(B | A));
        var j = [
          e,
          n,
          c,
          O,
          J,
          z,
          C,
          V,
          U,
          Z
        ], G = i.apply(r, j);
        return nl(e) && Yd(G, j), G.placeholder = l, _d(G, e, n);
      }
      function Xs(e) {
        var n = ke[e];
        return function(i, l) {
          if (i = Rt(i), l = l == null ? 0 : Oe(P(l), 292), l && _u(i)) {
            var c = (oe(i) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + l));
            return c = (oe(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(i);
        };
      }
      var Jv = fr && 1 / pi(new fr([, -0]))[1] == Ae ? function(e) {
        return new fr(e);
      } : Vl;
      function Ad(e) {
        return function(n) {
          var i = Qe(n);
          return i == Mt ? ks(n) : i == Zt ? Hw(n) : Iw(n, e(n));
        };
      }
      function Xt(e, n, i, l, c, p, m, V) {
        var U = n & A;
        if (!U && typeof e != "function")
          throw new Vt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(M | Y), l = c = r), m = m === r ? m : Me(P(m), 0), V = V === r ? V : P(V), Z -= c ? c.length : 0, n & Y) {
          var b = l, J = c;
          l = c = r;
        }
        var C = U ? r : qs(e), O = [
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
        if (C && Yv(O, C), e = O[0], n = O[1], i = O[2], l = O[3], c = O[4], V = O[9] = O[9] === r ? U ? 0 : e.length : Me(O[9] - Z, 0), !V && n & (E | D) && (n &= ~(E | D)), !n || n == B)
          var z = Mv(e, n, i);
        else
          n == E || n == D ? z = Zv(e, n, V) : (n == M || n == (B | M)) && !c.length ? z = bv(e, n, i, l) : z = xi.apply(r, O);
        var j = C ? hd : Yd;
        return _d(j(z, O), e, n);
      }
      function Wd(e, n, i, l) {
        return e === r || Et(e, dr[i]) && !ie.call(l, i) ? n : e;
      }
      function Cd(e, n, i, l, c, p) {
        return pe(e) && pe(n) && (p.set(n, e), Fi(e, n, r, Cd, p), p.delete(n)), e;
      }
      function Ev(e) {
        return go(e) ? r : e;
      }
      function xd(e, n, i, l, c, p) {
        var m = i & F, V = e.length, U = n.length;
        if (V != U && !(m && U > V))
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
            if (!Ts(n, function(K, te) {
              if (!io(O, te) && (z === K || c(z, K, i, l, p)))
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
      function Sv(e, n, i, l, c, p, m) {
        switch (i) {
          case ir:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case oo:
            return !(e.byteLength != n.byteLength || !p(new gi(e), new gi(n)));
          case qr:
          case Kr:
          case eo:
            return Et(+e, +n);
          case ai:
            return e.name == n.name && e.message == n.message;
          case to:
          case no:
            return e == n + "";
          case Mt:
            var V = ks;
          case Zt:
            var U = l & F;
            if (V || (V = pi), e.size != n.size && !U)
              return !1;
            var Z = m.get(e);
            if (Z)
              return Z == n;
            l |= W, m.set(e, n);
            var b = xd(V(e), V(n), l, c, p, m);
            return m.delete(e), b;
          case li:
            if (uo)
              return uo.call(e) == uo.call(n);
        }
        return !1;
      }
      function Fv(e, n, i, l, c, p) {
        var m = i & F, V = Ls(e), U = V.length, Z = Ls(n), b = Z.length;
        if (U != b && !m)
          return !1;
        for (var J = U; J--; ) {
          var C = V[J];
          if (!(m ? C in n : ie.call(n, C)))
            return !1;
        }
        var O = p.get(e), z = p.get(n);
        if (O && z)
          return O == n && z == e;
        var j = !0;
        p.set(e, n), p.set(n, e);
        for (var G = m; ++J < U; ) {
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
        return ol(zd(e, r, $d), e + "");
      }
      function Ls(e) {
        return nd(e, Je, el);
      }
      function $s(e) {
        return nd(e, Ke, Bd);
      }
      var qs = Mi ? function(e) {
        return Mi.get(e);
      } : Vl;
      function Oi(e) {
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
        var e = h.iteratee || ml;
        return e = e === ml ? id : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Qi(e, n) {
        var i = e.__data__;
        return Ov(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Ks(e) {
        for (var n = Je(e), i = n.length; i--; ) {
          var l = n[i], c = e[l];
          n[i] = [l, c, Od(c)];
        }
        return n;
      }
      function In(e, n) {
        var i = Gw(e, n);
        return od(i) ? i : r;
      }
      function Av(e) {
        var n = ie.call(e, An), i = e[An];
        try {
          e[An] = r;
          var l = !0;
        } catch {
        }
        var c = vi.call(e);
        return l && (n ? e[An] = i : delete e[An]), c;
      }
      var el = Zs ? function(e) {
        return e == null ? [] : (e = ue(e), cn(Zs(e), function(n) {
          return Gu.call(e, n);
        }));
      } : vl, Bd = Zs ? function(e) {
        for (var n = []; e; )
          un(n, el(e)), e = Ui(e);
        return n;
      } : vl, Qe = He;
      (bs && Qe(new bs(new ArrayBuffer(1))) != ir || so && Qe(new so()) != Mt || Js && Qe(Js.resolve()) != Kc || fr && Qe(new fr()) != Zt || lo && Qe(new lo()) != ro) && (Qe = function(e) {
        var n = He(e), i = n == _t ? e.constructor : r, l = i ? Dn(i) : "";
        if (l)
          switch (l) {
            case mV:
              return ir;
            case wV:
              return Mt;
            case VV:
              return Kc;
            case vV:
              return Zt;
            case TV:
              return ro;
          }
        return n;
      });
      function Wv(e, n, i) {
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
              e = Me(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Cv(e) {
        var n = e.match(Q1);
        return n ? n[1].split(z1) : [];
      }
      function Id(e, n, i) {
        n = mn(n, e);
        for (var l = -1, c = n.length, p = !1; ++l < c; ) {
          var m = Qt(n[l]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++l != c ? p : (c = e == null ? 0 : e.length, !!c && ji(c) && $t(m, c) && (H(e) || On(e)));
      }
      function xv(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && ie.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function Dd(e) {
        return typeof e.constructor == "function" && !vo(e) ? pr(Ui(e)) : {};
      }
      function Bv(e, n, i) {
        var l = e.constructor;
        switch (n) {
          case oo:
            return Ps(e);
          case qr:
          case Kr:
            return new l(+e);
          case ir:
            return gv(e, i);
          case Ka:
          case es:
          case ts:
          case ns:
          case rs:
          case os:
          case is:
          case as:
          case ss:
            return Ud(e, i);
          case Mt:
            return new l();
          case eo:
          case no:
            return new l(e);
          case to:
            return Uv(e);
          case Zt:
            return new l();
          case li:
            return Rv(e);
        }
      }
      function Iv(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), e.replace(O1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Dv(e) {
        return H(e) || On(e) || !!(Yu && e && e[Yu]);
      }
      function $t(e, n) {
        var i = typeof e;
        return n = n == null ? _e : n, !!n && (i == "number" || i != "symbol" && $1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Pe(e, n, i) {
        if (!pe(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? qe(i) && $t(n, i.length) : l == "string" && n in i) ? Et(i[n], e) : !1;
      }
      function tl(e, n) {
        if (H(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || st(e) ? !0 : x1.test(e) || !C1.test(e) || n != null && e in ue(n);
      }
      function Ov(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function nl(e) {
        var n = Oi(e), i = h[n];
        if (typeof i != "function" || !(n in ee.prototype))
          return !1;
        if (e === i)
          return !0;
        var l = qs(i);
        return !!l && e === l[0];
      }
      function Qv(e) {
        return !!Ou && Ou in e;
      }
      var zv = wi ? qt : Tl;
      function vo(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || dr;
        return e === i;
      }
      function Od(e) {
        return e === e && !pe(e);
      }
      function Qd(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
        };
      }
      function Gv(e) {
        var n = Hi(e, function(l) {
          return i.size === g && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function Yv(e, n) {
        var i = e[1], l = n[1], c = i | l, p = c < (B | A | $), m = l == $ && i == E || l == $ && i == q && e[7].length <= n[8] || l == ($ | q) && n[7].length <= n[8] && i == E;
        if (!(p || m))
          return e;
        l & B && (e[2] = n[2], c |= i & B ? 0 : S);
        var V = n[3];
        if (V) {
          var U = e[3];
          e[3] = U ? Nd(U, V, n[4]) : V, e[4] = U ? dn(e[3], v) : n[4];
        }
        return V = n[5], V && (U = e[5], e[5] = U ? yd(U, V, n[6]) : V, e[6] = U ? dn(e[5], v) : n[6]), V = n[7], V && (e[7] = V), l & $ && (e[8] = e[8] == null ? n[8] : Oe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function _v(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function Hv(e) {
        return vi.call(e);
      }
      function zd(e, n, i) {
        return n = Me(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, p = Me(l.length - n, 0), m = N(p); ++c < p; )
            m[c] = l[n + c];
          c = -1;
          for (var V = N(n + 1); ++c < n; )
            V[c] = l[c];
          return V[n] = i(m), ot(e, this, V);
        };
      }
      function Gd(e, n) {
        return n.length < 2 ? e : Bn(e, gt(n, 0, -1));
      }
      function Pv(e, n) {
        for (var i = e.length, l = Oe(n.length, i), c = $e(e); l--; ) {
          var p = n[l];
          e[l] = $t(p, i) ? c[p] : r;
        }
        return e;
      }
      function rl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Yd = Hd(hd), To = lV || function(e, n) {
        return We.setTimeout(e, n);
      }, ol = Hd(wv);
      function _d(e, n, i) {
        var l = n + "";
        return ol(e, Iv(l, jv(Cv(l), i)));
      }
      function Hd(e) {
        var n = 0, i = 0;
        return function() {
          var l = fV(), c = Te - (l - i);
          if (i = l, c > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function zi(e, n) {
        var i = -1, l = e.length, c = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Os(i, c), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var Pd = Gv(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(B1, function(i, l, c, p) {
          n.push(c ? p.replace(_1, "$1") : l || i);
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
            return Vi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function jv(e, n) {
        return wt(U1, function(i) {
          var l = "_." + i[0];
          n & i[1] && !fi(e, l) && e.push(l);
        }), e.sort();
      }
      function jd(e) {
        if (e instanceof ee)
          return e.clone();
        var n = new vt(e.__wrapped__, e.__chain__);
        return n.__actions__ = $e(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function Xv(e, n, i) {
        (i ? Pe(e, n, i) : n === r) ? n = 1 : n = Me(P(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1)
          return [];
        for (var c = 0, p = 0, m = N(yi(l / n)); c < l; )
          m[p++] = gt(e, c, c += n);
        return m;
      }
      function Lv(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
          var p = e[n];
          p && (c[l++] = p);
        }
        return c;
      }
      function $v() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], l = e; l--; )
          n[l - 1] = arguments[l];
        return un(H(i) ? $e(i) : [i], Ce(n, 1));
      }
      var qv = X(function(e, n) {
        return ge(e) ? ho(e, Ce(n, 1, ge, !0)) : [];
      }), Kv = X(function(e, n) {
        var i = Ut(n);
        return ge(i) && (i = r), ge(e) ? ho(e, Ce(n, 1, ge, !0), Q(i, 2)) : [];
      }), e0 = X(function(e, n) {
        var i = Ut(n);
        return ge(i) && (i = r), ge(e) ? ho(e, Ce(n, 1, ge, !0), r, i) : [];
      });
      function t0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), gt(e, n < 0 ? 0 : n, l)) : [];
      }
      function n0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), n = l - n, gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function r0(e, n) {
        return e && e.length ? Wi(e, Q(n, 3), !0, !0) : [];
      }
      function o0(e, n) {
        return e && e.length ? Wi(e, Q(n, 3), !0) : [];
      }
      function i0(e, n, i, l) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && Pe(e, n, i) && (i = 0, l = c), $V(e, n, i, l)) : [];
      }
      function Xd(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Me(l + c, 0)), hi(e, Q(n, 3), c);
      }
      function Ld(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l - 1;
        return i !== r && (c = P(i), c = i < 0 ? Me(l + c, 0) : Oe(c, l - 1)), hi(e, Q(n, 3), c, !0);
      }
      function $d(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, 1) : [];
      }
      function a0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, Ae) : [];
      }
      function s0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : P(n), Ce(e, n)) : [];
      }
      function l0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = {}; ++n < i; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function qd(e) {
        return e && e.length ? e[0] : r;
      }
      function c0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : P(i);
        return c < 0 && (c = Me(l + c, 0)), sr(e, n, c);
      }
      function u0(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 0, -1) : [];
      }
      var d0 = X(function(e) {
        var n = he(e, _s);
        return n.length && n[0] === e[0] ? Cs(n) : [];
      }), f0 = X(function(e) {
        var n = Ut(e), i = he(e, _s);
        return n === Ut(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Cs(i, Q(n, 2)) : [];
      }), h0 = X(function(e) {
        var n = Ut(e), i = he(e, _s);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Cs(i, r, n) : [];
      });
      function p0(e, n) {
        return e == null ? "" : uV.call(e, n);
      }
      function Ut(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function m0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l;
        return i !== r && (c = P(i), c = c < 0 ? Me(l + c, 0) : Oe(c, l - 1)), n === n ? jw(e, n, c) : hi(e, Fu, c, !0);
      }
      function w0(e, n) {
        return e && e.length ? cd(e, P(n)) : r;
      }
      var V0 = X(Kd);
      function Kd(e, n) {
        return e && e.length && n && n.length ? Ds(e, n) : e;
      }
      function v0(e, n, i) {
        return e && e.length && n && n.length ? Ds(e, n, Q(i, 2)) : e;
      }
      function T0(e, n, i) {
        return e && e.length && n && n.length ? Ds(e, n, r, i) : e;
      }
      var g0 = Lt(function(e, n) {
        var i = e == null ? 0 : e.length, l = Ss(e, n);
        return fd(e, he(n, function(c) {
          return $t(c, i) ? +c : c;
        }).sort(Rd)), l;
      });
      function U0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var l = -1, c = [], p = e.length;
        for (n = Q(n, 3); ++l < p; ) {
          var m = e[l];
          n(m, l, e) && (i.push(m), c.push(l));
        }
        return fd(e, c), i;
      }
      function il(e) {
        return e == null ? e : pV.call(e);
      }
      function R0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (i && typeof i != "number" && Pe(e, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : P(n), i = i === r ? l : P(i)), gt(e, n, i)) : [];
      }
      function N0(e, n) {
        return Ai(e, n);
      }
      function y0(e, n, i) {
        return zs(e, n, Q(i, 2));
      }
      function k0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Ai(e, n);
          if (l < i && Et(e[l], n))
            return l;
        }
        return -1;
      }
      function M0(e, n) {
        return Ai(e, n, !0);
      }
      function Z0(e, n, i) {
        return zs(e, n, Q(i, 2), !0);
      }
      function b0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Ai(e, n, !0) - 1;
          if (Et(e[l], n))
            return l;
        }
        return -1;
      }
      function J0(e) {
        return e && e.length ? pd(e) : [];
      }
      function E0(e, n) {
        return e && e.length ? pd(e, Q(n, 2)) : [];
      }
      function S0(e) {
        var n = e == null ? 0 : e.length;
        return n ? gt(e, 1, n) : [];
      }
      function F0(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : P(n), gt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function A0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : P(n), n = l - n, gt(e, n < 0 ? 0 : n, l)) : [];
      }
      function W0(e, n) {
        return e && e.length ? Wi(e, Q(n, 3), !1, !0) : [];
      }
      function C0(e, n) {
        return e && e.length ? Wi(e, Q(n, 3)) : [];
      }
      var x0 = X(function(e) {
        return pn(Ce(e, 1, ge, !0));
      }), B0 = X(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), pn(Ce(e, 1, ge, !0), Q(n, 2));
      }), I0 = X(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, pn(Ce(e, 1, ge, !0), r, n);
      });
      function D0(e) {
        return e && e.length ? pn(e) : [];
      }
      function O0(e, n) {
        return e && e.length ? pn(e, Q(n, 2)) : [];
      }
      function Q0(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? pn(e, r, n) : [];
      }
      function al(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = cn(e, function(i) {
          if (ge(i))
            return n = Me(i.length, n), !0;
        }), Ns(n, function(i) {
          return he(e, gs(i));
        });
      }
      function ef(e, n) {
        if (!(e && e.length))
          return [];
        var i = al(e);
        return n == null ? i : he(i, function(l) {
          return ot(n, r, l);
        });
      }
      var z0 = X(function(e, n) {
        return ge(e) ? ho(e, n) : [];
      }), G0 = X(function(e) {
        return Ys(cn(e, ge));
      }), Y0 = X(function(e) {
        var n = Ut(e);
        return ge(n) && (n = r), Ys(cn(e, ge), Q(n, 2));
      }), _0 = X(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, Ys(cn(e, ge), r, n);
      }), H0 = X(al);
      function P0(e, n) {
        return vd(e || [], n || [], fo);
      }
      function j0(e, n) {
        return vd(e || [], n || [], wo);
      }
      var X0 = X(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, ef(e, i);
      });
      function tf(e) {
        var n = h(e);
        return n.__chain__ = !0, n;
      }
      function L0(e, n) {
        return n(e), e;
      }
      function Gi(e, n) {
        return n(e);
      }
      var $0 = Lt(function(e) {
        var n = e.length, i = n ? e[0] : 0, l = this.__wrapped__, c = function(p) {
          return Ss(p, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ee) || !$t(i) ? this.thru(c) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Gi,
          args: [c],
          thisArg: r
        }), new vt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function q0() {
        return tf(this);
      }
      function K0() {
        return new vt(this.value(), this.__chain__);
      }
      function eT() {
        this.__values__ === r && (this.__values__ = wf(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function tT() {
        return this;
      }
      function nT(e) {
        for (var n, i = this; i instanceof bi; ) {
          var l = jd(i);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function rT() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var n = e;
          return this.__actions__.length && (n = new ee(this)), n = n.reverse(), n.__actions__.push({
            func: Gi,
            args: [il],
            thisArg: r
          }), new vt(n, this.__chain__);
        }
        return this.thru(il);
      }
      function oT() {
        return Vd(this.__wrapped__, this.__actions__);
      }
      var iT = Ci(function(e, n, i) {
        ie.call(e, i) ? ++e[i] : jt(e, i, 1);
      });
      function aT(e, n, i) {
        var l = H(e) ? Eu : LV;
        return i && Pe(e, n, i) && (n = r), l(e, Q(n, 3));
      }
      function sT(e, n) {
        var i = H(e) ? cn : ed;
        return i(e, Q(n, 3));
      }
      var lT = bd(Xd), cT = bd(Ld);
      function uT(e, n) {
        return Ce(Yi(e, n), 1);
      }
      function dT(e, n) {
        return Ce(Yi(e, n), Ae);
      }
      function fT(e, n, i) {
        return i = i === r ? 1 : P(i), Ce(Yi(e, n), i);
      }
      function nf(e, n) {
        var i = H(e) ? wt : hn;
        return i(e, Q(n, 3));
      }
      function rf(e, n) {
        var i = H(e) ? Sw : Ku;
        return i(e, Q(n, 3));
      }
      var hT = Ci(function(e, n, i) {
        ie.call(e, i) ? e[i].push(n) : jt(e, i, [n]);
      });
      function pT(e, n, i, l) {
        e = qe(e) ? e : Tr(e), i = i && !l ? P(i) : 0;
        var c = e.length;
        return i < 0 && (i = Me(c + i, 0)), Xi(e) ? i <= c && e.indexOf(n, i) > -1 : !!c && sr(e, n, i) > -1;
      }
      var mT = X(function(e, n, i) {
        var l = -1, c = typeof n == "function", p = qe(e) ? N(e.length) : [];
        return hn(e, function(m) {
          p[++l] = c ? ot(n, m, i) : po(m, n, i);
        }), p;
      }), wT = Ci(function(e, n, i) {
        jt(e, i, n);
      });
      function Yi(e, n) {
        var i = H(e) ? he : ad;
        return i(e, Q(n, 3));
      }
      function VT(e, n, i, l) {
        return e == null ? [] : (H(n) || (n = n == null ? [] : [n]), i = l ? r : i, H(i) || (i = i == null ? [] : [i]), ud(e, n, i));
      }
      var vT = Ci(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function TT(e, n, i) {
        var l = H(e) ? vs : Wu, c = arguments.length < 3;
        return l(e, Q(n, 4), i, c, hn);
      }
      function gT(e, n, i) {
        var l = H(e) ? Fw : Wu, c = arguments.length < 3;
        return l(e, Q(n, 4), i, c, Ku);
      }
      function UT(e, n) {
        var i = H(e) ? cn : ed;
        return i(e, Pi(Q(n, 3)));
      }
      function RT(e) {
        var n = H(e) ? Xu : pv;
        return n(e);
      }
      function NT(e, n, i) {
        (i ? Pe(e, n, i) : n === r) ? n = 1 : n = P(n);
        var l = H(e) ? _V : mv;
        return l(e, n);
      }
      function yT(e) {
        var n = H(e) ? HV : Vv;
        return n(e);
      }
      function kT(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return Xi(e) ? cr(e) : e.length;
        var n = Qe(e);
        return n == Mt || n == Zt ? e.size : Bs(e).length;
      }
      function MT(e, n, i) {
        var l = H(e) ? Ts : vv;
        return i && Pe(e, n, i) && (n = r), l(e, Q(n, 3));
      }
      var ZT = X(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && Pe(e, n[0], n[1]) ? n = [] : i > 2 && Pe(n[0], n[1], n[2]) && (n = [n[0]]), ud(e, Ce(n, 1), []);
      }), _i = sV || function() {
        return We.Date.now();
      };
      function bT(e, n) {
        if (typeof n != "function")
          throw new Vt(d);
        return e = P(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function of(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, Xt(e, $, r, r, r, r, n);
      }
      function af(e, n) {
        var i;
        if (typeof n != "function")
          throw new Vt(d);
        return e = P(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var sl = X(function(e, n, i) {
        var l = B;
        if (i.length) {
          var c = dn(i, Vr(sl));
          l |= M;
        }
        return Xt(e, l, n, i, c);
      }), sf = X(function(e, n, i) {
        var l = B | A;
        if (i.length) {
          var c = dn(i, Vr(sf));
          l |= M;
        }
        return Xt(n, l, e, i, c);
      });
      function lf(e, n, i) {
        n = i ? r : n;
        var l = Xt(e, E, r, r, r, r, r, n);
        return l.placeholder = lf.placeholder, l;
      }
      function cf(e, n, i) {
        n = i ? r : n;
        var l = Xt(e, D, r, r, r, r, r, n);
        return l.placeholder = cf.placeholder, l;
      }
      function uf(e, n, i) {
        var l, c, p, m, V, U, Z = 0, b = !1, J = !1, C = !0;
        if (typeof e != "function")
          throw new Vt(d);
        n = Rt(n) || 0, pe(i) && (b = !!i.leading, J = "maxWait" in i, p = J ? Me(Rt(i.maxWait) || 0, n) : p, C = "trailing" in i ? !!i.trailing : C);
        function O(Ue) {
          var St = l, en = c;
          return l = c = r, Z = Ue, m = e.apply(en, St), m;
        }
        function z(Ue) {
          return Z = Ue, V = To(K, n), b ? O(Ue) : m;
        }
        function j(Ue) {
          var St = Ue - U, en = Ue - Z, Jf = n - St;
          return J ? Oe(Jf, p - en) : Jf;
        }
        function G(Ue) {
          var St = Ue - U, en = Ue - Z;
          return U === r || St >= n || St < 0 || J && en >= p;
        }
        function K() {
          var Ue = _i();
          if (G(Ue))
            return te(Ue);
          V = To(K, j(Ue));
        }
        function te(Ue) {
          return V = r, C && l ? O(Ue) : (l = c = r, m);
        }
        function lt() {
          V !== r && Td(V), Z = 0, l = U = c = V = r;
        }
        function je() {
          return V === r ? m : te(_i());
        }
        function ct() {
          var Ue = _i(), St = G(Ue);
          if (l = arguments, c = this, U = Ue, St) {
            if (V === r)
              return z(U);
            if (J)
              return Td(V), V = To(K, n), O(U);
          }
          return V === r && (V = To(K, n)), m;
        }
        return ct.cancel = lt, ct.flush = je, ct;
      }
      var JT = X(function(e, n) {
        return qu(e, 1, n);
      }), ET = X(function(e, n, i) {
        return qu(e, Rt(n) || 0, i);
      });
      function ST(e) {
        return Xt(e, De);
      }
      function Hi(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Vt(d);
        var i = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(c))
            return p.get(c);
          var m = e.apply(this, l);
          return i.cache = p.set(c, m) || p, m;
        };
        return i.cache = new (Hi.Cache || Pt)(), i;
      }
      Hi.Cache = Pt;
      function Pi(e) {
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
      function FT(e) {
        return af(2, e);
      }
      var AT = Tv(function(e, n) {
        n = n.length == 1 && H(n[0]) ? he(n[0], it(Q())) : he(Ce(n, 1), it(Q()));
        var i = n.length;
        return X(function(l) {
          for (var c = -1, p = Oe(l.length, i); ++c < p; )
            l[c] = n[c].call(this, l[c]);
          return ot(e, this, l);
        });
      }), ll = X(function(e, n) {
        var i = dn(n, Vr(ll));
        return Xt(e, M, r, n, i);
      }), df = X(function(e, n) {
        var i = dn(n, Vr(df));
        return Xt(e, Y, r, n, i);
      }), WT = Lt(function(e, n) {
        return Xt(e, q, r, r, r, n);
      });
      function CT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n === r ? n : P(n), X(e, n);
      }
      function xT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n == null ? 0 : Me(P(n), 0), X(function(i) {
          var l = i[n], c = wn(i, 0, n);
          return l && un(c, l), ot(e, this, c);
        });
      }
      function BT(e, n, i) {
        var l = !0, c = !0;
        if (typeof e != "function")
          throw new Vt(d);
        return pe(i) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), uf(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function IT(e) {
        return of(e, 1);
      }
      function DT(e, n) {
        return ll(Hs(n), e);
      }
      function OT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return H(e) ? e : [e];
      }
      function QT(e) {
        return Tt(e, x);
      }
      function zT(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, x, n);
      }
      function GT(e) {
        return Tt(e, R | x);
      }
      function YT(e, n) {
        return n = typeof n == "function" ? n : r, Tt(e, R | x, n);
      }
      function _T(e, n) {
        return n == null || $u(e, n, Je(n));
      }
      function Et(e, n) {
        return e === n || e !== e && n !== n;
      }
      var HT = Di(Ws), PT = Di(function(e, n) {
        return e >= n;
      }), On = rd(function() {
        return arguments;
      }()) ? rd : function(e) {
        return ve(e) && ie.call(e, "callee") && !Gu.call(e, "callee");
      }, H = N.isArray, jT = yu ? it(yu) : nv;
      function qe(e) {
        return e != null && ji(e.length) && !qt(e);
      }
      function ge(e) {
        return ve(e) && qe(e);
      }
      function XT(e) {
        return e === !0 || e === !1 || ve(e) && He(e) == qr;
      }
      var Vn = cV || Tl, LT = ku ? it(ku) : rv;
      function $T(e) {
        return ve(e) && e.nodeType === 1 && !go(e);
      }
      function qT(e) {
        if (e == null)
          return !0;
        if (qe(e) && (H(e) || typeof e == "string" || typeof e.splice == "function" || Vn(e) || vr(e) || On(e)))
          return !e.length;
        var n = Qe(e);
        if (n == Mt || n == Zt)
          return !e.size;
        if (vo(e))
          return !Bs(e).length;
        for (var i in e)
          if (ie.call(e, i))
            return !1;
        return !0;
      }
      function KT(e, n) {
        return mo(e, n);
      }
      function eg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(e, n) : r;
        return l === r ? mo(e, n, r, i) : !!l;
      }
      function cl(e) {
        if (!ve(e))
          return !1;
        var n = He(e);
        return n == ai || n == N1 || typeof e.message == "string" && typeof e.name == "string" && !go(e);
      }
      function tg(e) {
        return typeof e == "number" && _u(e);
      }
      function qt(e) {
        if (!pe(e))
          return !1;
        var n = He(e);
        return n == si || n == qc || n == R1 || n == k1;
      }
      function ff(e) {
        return typeof e == "number" && e == P(e);
      }
      function ji(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _e;
      }
      function pe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function ve(e) {
        return e != null && typeof e == "object";
      }
      var hf = Mu ? it(Mu) : iv;
      function ng(e, n) {
        return e === n || xs(e, n, Ks(n));
      }
      function rg(e, n, i) {
        return i = typeof i == "function" ? i : r, xs(e, n, Ks(n), i);
      }
      function og(e) {
        return pf(e) && e != +e;
      }
      function ig(e) {
        if (zv(e))
          throw new _(u);
        return od(e);
      }
      function ag(e) {
        return e === null;
      }
      function sg(e) {
        return e == null;
      }
      function pf(e) {
        return typeof e == "number" || ve(e) && He(e) == eo;
      }
      function go(e) {
        if (!ve(e) || He(e) != _t)
          return !1;
        var n = Ui(e);
        if (n === null)
          return !0;
        var i = ie.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Vi.call(i) == rV;
      }
      var ul = Zu ? it(Zu) : av;
      function lg(e) {
        return ff(e) && e >= -_e && e <= _e;
      }
      var mf = bu ? it(bu) : sv;
      function Xi(e) {
        return typeof e == "string" || !H(e) && ve(e) && He(e) == no;
      }
      function st(e) {
        return typeof e == "symbol" || ve(e) && He(e) == li;
      }
      var vr = Ju ? it(Ju) : lv;
      function cg(e) {
        return e === r;
      }
      function ug(e) {
        return ve(e) && Qe(e) == ro;
      }
      function dg(e) {
        return ve(e) && He(e) == Z1;
      }
      var fg = Di(Is), hg = Di(function(e, n) {
        return e <= n;
      });
      function wf(e) {
        if (!e)
          return [];
        if (qe(e))
          return Xi(e) ? bt(e) : $e(e);
        if (ao && e[ao])
          return _w(e[ao]());
        var n = Qe(e), i = n == Mt ? ks : n == Zt ? pi : Tr;
        return i(e);
      }
      function Kt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Rt(e), e === Ae || e === -Ae) {
          var n = e < 0 ? -1 : 1;
          return n * $r;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var n = Kt(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Vf(e) {
        return e ? xn(P(e), 0, It) : 0;
      }
      function Rt(e) {
        if (typeof e == "number")
          return e;
        if (st(e))
          return oi;
        if (pe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = pe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Cu(e);
        var i = j1.test(e);
        return i || L1.test(e) ? bw(e.slice(2), i ? 2 : 8) : P1.test(e) ? oi : +e;
      }
      function vf(e) {
        return Ot(e, Ke(e));
      }
      function pg(e) {
        return e ? xn(P(e), -_e, _e) : e === 0 ? e : 0;
      }
      function oe(e) {
        return e == null ? "" : at(e);
      }
      var mg = mr(function(e, n) {
        if (vo(n) || qe(n)) {
          Ot(n, Je(n), e);
          return;
        }
        for (var i in n)
          ie.call(n, i) && fo(e, i, n[i]);
      }), Tf = mr(function(e, n) {
        Ot(n, Ke(n), e);
      }), Li = mr(function(e, n, i, l) {
        Ot(n, Ke(n), e, l);
      }), wg = mr(function(e, n, i, l) {
        Ot(n, Je(n), e, l);
      }), Vg = Lt(Ss);
      function vg(e, n) {
        var i = pr(e);
        return n == null ? i : Lu(i, n);
      }
      var Tg = X(function(e, n) {
        e = ue(e);
        var i = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && Pe(n[0], n[1], c) && (l = 1); ++i < l; )
          for (var p = n[i], m = Ke(p), V = -1, U = m.length; ++V < U; ) {
            var Z = m[V], b = e[Z];
            (b === r || Et(b, dr[Z]) && !ie.call(e, Z)) && (e[Z] = p[Z]);
          }
        return e;
      }), gg = X(function(e) {
        return e.push(r, Cd), ot(gf, r, e);
      });
      function Ug(e, n) {
        return Su(e, Q(n, 3), Dt);
      }
      function Rg(e, n) {
        return Su(e, Q(n, 3), As);
      }
      function Ng(e, n) {
        return e == null ? e : Fs(e, Q(n, 3), Ke);
      }
      function yg(e, n) {
        return e == null ? e : td(e, Q(n, 3), Ke);
      }
      function kg(e, n) {
        return e && Dt(e, Q(n, 3));
      }
      function Mg(e, n) {
        return e && As(e, Q(n, 3));
      }
      function Zg(e) {
        return e == null ? [] : Si(e, Je(e));
      }
      function bg(e) {
        return e == null ? [] : Si(e, Ke(e));
      }
      function dl(e, n, i) {
        var l = e == null ? r : Bn(e, n);
        return l === r ? i : l;
      }
      function Jg(e, n) {
        return e != null && Id(e, n, qV);
      }
      function fl(e, n) {
        return e != null && Id(e, n, KV);
      }
      var Eg = Ed(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = vi.call(n)), e[n] = i;
      }, pl(et)), Sg = Ed(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = vi.call(n)), ie.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, Q), Fg = X(po);
      function Je(e) {
        return qe(e) ? ju(e) : Bs(e);
      }
      function Ke(e) {
        return qe(e) ? ju(e, !0) : cv(e);
      }
      function Ag(e, n) {
        var i = {};
        return n = Q(n, 3), Dt(e, function(l, c, p) {
          jt(i, n(l, c, p), l);
        }), i;
      }
      function Wg(e, n) {
        var i = {};
        return n = Q(n, 3), Dt(e, function(l, c, p) {
          jt(i, c, n(l, c, p));
        }), i;
      }
      var Cg = mr(function(e, n, i) {
        Fi(e, n, i);
      }), gf = mr(function(e, n, i, l) {
        Fi(e, n, i, l);
      }), xg = Lt(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var l = !1;
        n = he(n, function(p) {
          return p = mn(p, e), l || (l = p.length > 1), p;
        }), Ot(e, $s(e), i), l && (i = Tt(i, R | y | x, Ev));
        for (var c = n.length; c--; )
          Gs(i, n[c]);
        return i;
      });
      function Bg(e, n) {
        return Uf(e, Pi(Q(n)));
      }
      var Ig = Lt(function(e, n) {
        return e == null ? {} : dv(e, n);
      });
      function Uf(e, n) {
        if (e == null)
          return {};
        var i = he($s(e), function(l) {
          return [l];
        });
        return n = Q(n), dd(e, i, function(l, c) {
          return n(l, c[0]);
        });
      }
      function Dg(e, n, i) {
        n = mn(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var p = e == null ? r : e[Qt(n[l])];
          p === r && (l = c, p = i), e = qt(p) ? p.call(e) : p;
        }
        return e;
      }
      function Og(e, n, i) {
        return e == null ? e : wo(e, n, i);
      }
      function Qg(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : wo(e, n, i, l);
      }
      var Rf = Ad(Je), Nf = Ad(Ke);
      function zg(e, n, i) {
        var l = H(e), c = l || Vn(e) || vr(e);
        if (n = Q(n, 4), i == null) {
          var p = e && e.constructor;
          c ? i = l ? new p() : [] : pe(e) ? i = qt(p) ? pr(Ui(e)) : {} : i = {};
        }
        return (c ? wt : Dt)(e, function(m, V, U) {
          return n(i, m, V, U);
        }), i;
      }
      function Gg(e, n) {
        return e == null ? !0 : Gs(e, n);
      }
      function Yg(e, n, i) {
        return e == null ? e : wd(e, n, Hs(i));
      }
      function _g(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : wd(e, n, Hs(i), l);
      }
      function Tr(e) {
        return e == null ? [] : ys(e, Je(e));
      }
      function Hg(e) {
        return e == null ? [] : ys(e, Ke(e));
      }
      function Pg(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Rt(i), i = i === i ? i : 0), n !== r && (n = Rt(n), n = n === n ? n : 0), xn(Rt(e), n, i);
      }
      function jg(e, n, i) {
        return n = Kt(n), i === r ? (i = n, n = 0) : i = Kt(i), e = Rt(e), ev(e, n, i);
      }
      function Xg(e, n, i) {
        if (i && typeof i != "boolean" && Pe(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = Kt(e), n === r ? (n = e, e = 0) : n = Kt(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (i || e % 1 || n % 1) {
          var c = Hu();
          return Oe(e + c * (n - e + Zw("1e-" + ((c + "").length - 1))), n);
        }
        return Os(e, n);
      }
      var Lg = wr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? yf(n) : n);
      });
      function yf(e) {
        return hl(oe(e).toLowerCase());
      }
      function kf(e) {
        return e = oe(e), e && e.replace(q1, Ow).replace(Vw, "");
      }
      function $g(e, n, i) {
        e = oe(e), n = at(n);
        var l = e.length;
        i = i === r ? l : xn(P(i), 0, l);
        var c = i;
        return i -= n.length, i >= 0 && e.slice(i, c) == n;
      }
      function qg(e) {
        return e = oe(e), e && F1.test(e) ? e.replace(tu, Qw) : e;
      }
      function Kg(e) {
        return e = oe(e), e && I1.test(e) ? e.replace(ls, "\\$&") : e;
      }
      var eU = wr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), tU = wr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), nU = Zd("toLowerCase");
      function rU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        if (!n || l >= n)
          return e;
        var c = (n - l) / 2;
        return Ii(ki(c), i) + e + Ii(yi(c), i);
      }
      function oU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        return n && l < n ? e + Ii(n - l, i) : e;
      }
      function iU(e, n, i) {
        e = oe(e), n = P(n);
        var l = n ? cr(e) : 0;
        return n && l < n ? Ii(n - l, i) + e : e;
      }
      function aU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), hV(oe(e).replace(cs, ""), n || 0);
      }
      function sU(e, n, i) {
        return (i ? Pe(e, n, i) : n === r) ? n = 1 : n = P(n), Qs(oe(e), n);
      }
      function lU() {
        var e = arguments, n = oe(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var cU = wr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function uU(e, n, i) {
        return i && typeof i != "number" && Pe(e, n, i) && (n = i = r), i = i === r ? It : i >>> 0, i ? (e = oe(e), e && (typeof n == "string" || n != null && !ul(n)) && (n = at(n), !n && lr(e)) ? wn(bt(e), 0, i) : e.split(n, i)) : [];
      }
      var dU = wr(function(e, n, i) {
        return e + (i ? " " : "") + hl(n);
      });
      function fU(e, n, i) {
        return e = oe(e), i = i == null ? 0 : xn(P(i), 0, e.length), n = at(n), e.slice(i, i + n.length) == n;
      }
      function hU(e, n, i) {
        var l = h.templateSettings;
        i && Pe(e, n, i) && (n = r), e = oe(e), n = Li({}, n, l, Wd);
        var c = Li({}, n.imports, l.imports, Wd), p = Je(c), m = ys(c, p), V, U, Z = 0, b = n.interpolate || ci, J = "__p += '", C = Ms(
          (n.escape || ci).source + "|" + b.source + "|" + (b === nu ? H1 : ci).source + "|" + (n.evaluate || ci).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (ie.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Rw + "]") + `
`;
        e.replace(C, function(G, K, te, lt, je, ct) {
          return te || (te = lt), J += e.slice(Z, ct).replace(K1, zw), K && (V = !0, J += `' +
__e(` + K + `) +
'`), je && (U = !0, J += `';
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
        else if (Y1.test(z))
          throw new _(f);
        J = (U ? J.replace(b1, "") : J).replace(J1, "$1").replace(E1, "$1;"), J = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var j = Zf(function() {
          return ne(p, O + "return " + J).apply(r, m);
        });
        if (j.source = J, cl(j))
          throw j;
        return j;
      }
      function pU(e) {
        return oe(e).toLowerCase();
      }
      function mU(e) {
        return oe(e).toUpperCase();
      }
      function wU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return Cu(e);
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = bt(n), p = xu(l, c), m = Bu(l, c) + 1;
        return wn(l, p, m).join("");
      }
      function VU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return e.slice(0, Du(e) + 1);
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = Bu(l, bt(n)) + 1;
        return wn(l, 0, c).join("");
      }
      function vU(e, n, i) {
        if (e = oe(e), e && (i || n === r))
          return e.replace(cs, "");
        if (!e || !(n = at(n)))
          return e;
        var l = bt(e), c = xu(l, bt(n));
        return wn(l, c).join("");
      }
      function TU(e, n) {
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
        var U = m ? wn(m, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return U + l;
        if (m && (V += U.length - V), ul(c)) {
          if (e.slice(V).search(c)) {
            var Z, b = U;
            for (c.global || (c = Ms(c.source, oe(ru.exec(c)) + "g")), c.lastIndex = 0; Z = c.exec(b); )
              var J = Z.index;
            U = U.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(at(c), V) != V) {
          var C = U.lastIndexOf(c);
          C > -1 && (U = U.slice(0, C));
        }
        return U + l;
      }
      function gU(e) {
        return e = oe(e), e && S1.test(e) ? e.replace(eu, Xw) : e;
      }
      var UU = wr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), hl = Zd("toUpperCase");
      function Mf(e, n, i) {
        return e = oe(e), n = i ? r : n, n === r ? Yw(e) ? qw(e) : Cw(e) : e.match(n) || [];
      }
      var Zf = X(function(e, n) {
        try {
          return ot(e, r, n);
        } catch (i) {
          return cl(i) ? i : new _(i);
        }
      }), RU = Lt(function(e, n) {
        return wt(n, function(i) {
          i = Qt(i), jt(e, i, sl(e[i], e));
        }), e;
      });
      function NU(e) {
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
      function yU(e) {
        return XV(Tt(e, R));
      }
      function pl(e) {
        return function() {
          return e;
        };
      }
      function kU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var MU = Jd(), ZU = Jd(!0);
      function et(e) {
        return e;
      }
      function ml(e) {
        return id(typeof e == "function" ? e : Tt(e, R));
      }
      function bU(e) {
        return sd(Tt(e, R));
      }
      function JU(e, n) {
        return ld(e, Tt(n, R));
      }
      var EU = X(function(e, n) {
        return function(i) {
          return po(i, e, n);
        };
      }), SU = X(function(e, n) {
        return function(i) {
          return po(e, i, n);
        };
      });
      function wl(e, n, i) {
        var l = Je(n), c = Si(n, l);
        i == null && !(pe(n) && (c.length || !l.length)) && (i = n, n = e, e = this, c = Si(n, Je(n)));
        var p = !(pe(i) && "chain" in i) || !!i.chain, m = qt(e);
        return wt(c, function(V) {
          var U = n[V];
          e[V] = U, m && (e.prototype[V] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var b = e(this.__wrapped__), J = b.__actions__ = $e(this.__actions__);
              return J.push({ func: U, args: arguments, thisArg: e }), b.__chain__ = Z, b;
            }
            return U.apply(e, un([this.value()], arguments));
          });
        }), e;
      }
      function FU() {
        return We._ === this && (We._ = oV), this;
      }
      function Vl() {
      }
      function AU(e) {
        return e = P(e), X(function(n) {
          return cd(n, e);
        });
      }
      var WU = js(he), CU = js(Eu), xU = js(Ts);
      function bf(e) {
        return tl(e) ? gs(Qt(e)) : fv(e);
      }
      function BU(e) {
        return function(n) {
          return e == null ? r : Bn(e, n);
        };
      }
      var IU = Sd(), DU = Sd(!0);
      function vl() {
        return [];
      }
      function Tl() {
        return !1;
      }
      function OU() {
        return {};
      }
      function QU() {
        return "";
      }
      function zU() {
        return !0;
      }
      function GU(e, n) {
        if (e = P(e), e < 1 || e > _e)
          return [];
        var i = It, l = Oe(e, It);
        n = Q(n), e -= It;
        for (var c = Ns(l, n); ++i < e; )
          n(i);
        return c;
      }
      function YU(e) {
        return H(e) ? he(e, Qt) : st(e) ? [e] : $e(Pd(oe(e)));
      }
      function _U(e) {
        var n = ++nV;
        return oe(e) + n;
      }
      var HU = Bi(function(e, n) {
        return e + n;
      }, 0), PU = Xs("ceil"), jU = Bi(function(e, n) {
        return e / n;
      }, 1), XU = Xs("floor");
      function LU(e) {
        return e && e.length ? Ei(e, et, Ws) : r;
      }
      function $U(e, n) {
        return e && e.length ? Ei(e, Q(n, 2), Ws) : r;
      }
      function qU(e) {
        return Au(e, et);
      }
      function KU(e, n) {
        return Au(e, Q(n, 2));
      }
      function eR(e) {
        return e && e.length ? Ei(e, et, Is) : r;
      }
      function tR(e, n) {
        return e && e.length ? Ei(e, Q(n, 2), Is) : r;
      }
      var nR = Bi(function(e, n) {
        return e * n;
      }, 1), rR = Xs("round"), oR = Bi(function(e, n) {
        return e - n;
      }, 0);
      function iR(e) {
        return e && e.length ? Rs(e, et) : 0;
      }
      function aR(e, n) {
        return e && e.length ? Rs(e, Q(n, 2)) : 0;
      }
      return h.after = bT, h.ary = of, h.assign = mg, h.assignIn = Tf, h.assignInWith = Li, h.assignWith = wg, h.at = Vg, h.before = af, h.bind = sl, h.bindAll = RU, h.bindKey = sf, h.castArray = OT, h.chain = tf, h.chunk = Xv, h.compact = Lv, h.concat = $v, h.cond = NU, h.conforms = yU, h.constant = pl, h.countBy = iT, h.create = vg, h.curry = lf, h.curryRight = cf, h.debounce = uf, h.defaults = Tg, h.defaultsDeep = gg, h.defer = JT, h.delay = ET, h.difference = qv, h.differenceBy = Kv, h.differenceWith = e0, h.drop = t0, h.dropRight = n0, h.dropRightWhile = r0, h.dropWhile = o0, h.fill = i0, h.filter = sT, h.flatMap = uT, h.flatMapDeep = dT, h.flatMapDepth = fT, h.flatten = $d, h.flattenDeep = a0, h.flattenDepth = s0, h.flip = ST, h.flow = MU, h.flowRight = ZU, h.fromPairs = l0, h.functions = Zg, h.functionsIn = bg, h.groupBy = hT, h.initial = u0, h.intersection = d0, h.intersectionBy = f0, h.intersectionWith = h0, h.invert = Eg, h.invertBy = Sg, h.invokeMap = mT, h.iteratee = ml, h.keyBy = wT, h.keys = Je, h.keysIn = Ke, h.map = Yi, h.mapKeys = Ag, h.mapValues = Wg, h.matches = bU, h.matchesProperty = JU, h.memoize = Hi, h.merge = Cg, h.mergeWith = gf, h.method = EU, h.methodOf = SU, h.mixin = wl, h.negate = Pi, h.nthArg = AU, h.omit = xg, h.omitBy = Bg, h.once = FT, h.orderBy = VT, h.over = WU, h.overArgs = AT, h.overEvery = CU, h.overSome = xU, h.partial = ll, h.partialRight = df, h.partition = vT, h.pick = Ig, h.pickBy = Uf, h.property = bf, h.propertyOf = BU, h.pull = V0, h.pullAll = Kd, h.pullAllBy = v0, h.pullAllWith = T0, h.pullAt = g0, h.range = IU, h.rangeRight = DU, h.rearg = WT, h.reject = UT, h.remove = U0, h.rest = CT, h.reverse = il, h.sampleSize = NT, h.set = Og, h.setWith = Qg, h.shuffle = yT, h.slice = R0, h.sortBy = ZT, h.sortedUniq = J0, h.sortedUniqBy = E0, h.split = uU, h.spread = xT, h.tail = S0, h.take = F0, h.takeRight = A0, h.takeRightWhile = W0, h.takeWhile = C0, h.tap = L0, h.throttle = BT, h.thru = Gi, h.toArray = wf, h.toPairs = Rf, h.toPairsIn = Nf, h.toPath = YU, h.toPlainObject = vf, h.transform = zg, h.unary = IT, h.union = x0, h.unionBy = B0, h.unionWith = I0, h.uniq = D0, h.uniqBy = O0, h.uniqWith = Q0, h.unset = Gg, h.unzip = al, h.unzipWith = ef, h.update = Yg, h.updateWith = _g, h.values = Tr, h.valuesIn = Hg, h.without = z0, h.words = Mf, h.wrap = DT, h.xor = G0, h.xorBy = Y0, h.xorWith = _0, h.zip = H0, h.zipObject = P0, h.zipObjectDeep = j0, h.zipWith = X0, h.entries = Rf, h.entriesIn = Nf, h.extend = Tf, h.extendWith = Li, wl(h, h), h.add = HU, h.attempt = Zf, h.camelCase = Lg, h.capitalize = yf, h.ceil = PU, h.clamp = Pg, h.clone = QT, h.cloneDeep = GT, h.cloneDeepWith = YT, h.cloneWith = zT, h.conformsTo = _T, h.deburr = kf, h.defaultTo = kU, h.divide = jU, h.endsWith = $g, h.eq = Et, h.escape = qg, h.escapeRegExp = Kg, h.every = aT, h.find = lT, h.findIndex = Xd, h.findKey = Ug, h.findLast = cT, h.findLastIndex = Ld, h.findLastKey = Rg, h.floor = XU, h.forEach = nf, h.forEachRight = rf, h.forIn = Ng, h.forInRight = yg, h.forOwn = kg, h.forOwnRight = Mg, h.get = dl, h.gt = HT, h.gte = PT, h.has = Jg, h.hasIn = fl, h.head = qd, h.identity = et, h.includes = pT, h.indexOf = c0, h.inRange = jg, h.invoke = Fg, h.isArguments = On, h.isArray = H, h.isArrayBuffer = jT, h.isArrayLike = qe, h.isArrayLikeObject = ge, h.isBoolean = XT, h.isBuffer = Vn, h.isDate = LT, h.isElement = $T, h.isEmpty = qT, h.isEqual = KT, h.isEqualWith = eg, h.isError = cl, h.isFinite = tg, h.isFunction = qt, h.isInteger = ff, h.isLength = ji, h.isMap = hf, h.isMatch = ng, h.isMatchWith = rg, h.isNaN = og, h.isNative = ig, h.isNil = sg, h.isNull = ag, h.isNumber = pf, h.isObject = pe, h.isObjectLike = ve, h.isPlainObject = go, h.isRegExp = ul, h.isSafeInteger = lg, h.isSet = mf, h.isString = Xi, h.isSymbol = st, h.isTypedArray = vr, h.isUndefined = cg, h.isWeakMap = ug, h.isWeakSet = dg, h.join = p0, h.kebabCase = eU, h.last = Ut, h.lastIndexOf = m0, h.lowerCase = tU, h.lowerFirst = nU, h.lt = fg, h.lte = hg, h.max = LU, h.maxBy = $U, h.mean = qU, h.meanBy = KU, h.min = eR, h.minBy = tR, h.stubArray = vl, h.stubFalse = Tl, h.stubObject = OU, h.stubString = QU, h.stubTrue = zU, h.multiply = nR, h.nth = w0, h.noConflict = FU, h.noop = Vl, h.now = _i, h.pad = rU, h.padEnd = oU, h.padStart = iU, h.parseInt = aU, h.random = Xg, h.reduce = TT, h.reduceRight = gT, h.repeat = sU, h.replace = lU, h.result = Dg, h.round = rR, h.runInContext = T, h.sample = RT, h.size = kT, h.snakeCase = cU, h.some = MT, h.sortedIndex = N0, h.sortedIndexBy = y0, h.sortedIndexOf = k0, h.sortedLastIndex = M0, h.sortedLastIndexBy = Z0, h.sortedLastIndexOf = b0, h.startCase = dU, h.startsWith = fU, h.subtract = oR, h.sum = iR, h.sumBy = aR, h.template = hU, h.times = GU, h.toFinite = Kt, h.toInteger = P, h.toLength = Vf, h.toLower = pU, h.toNumber = Rt, h.toSafeInteger = pg, h.toString = oe, h.toUpper = mU, h.trim = wU, h.trimEnd = VU, h.trimStart = vU, h.truncate = TU, h.unescape = gU, h.uniqueId = _U, h.upperCase = UU, h.upperFirst = hl, h.each = nf, h.eachRight = rf, h.first = qd, wl(h, function() {
        var e = {};
        return Dt(h, function(n, i) {
          ie.call(h.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), h.VERSION = s, wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), wt(["drop", "take"], function(e, n) {
        ee.prototype[e] = function(i) {
          i = i === r ? 1 : Me(P(i), 0);
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
          return po(i, e, n);
        });
      }), ee.prototype.reject = function(e) {
        return this.filter(Pi(Q(e)));
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
          var m = this.__wrapped__, V = l ? [1] : arguments, U = m instanceof ee, Z = V[0], b = U || H(m), J = function(K) {
            var te = c.apply(h, un([K], V));
            return l && C ? te[0] : te;
          };
          b && i && typeof Z == "function" && Z.length != 1 && (U = b = !1);
          var C = this.__chain__, O = !!this.__actions__.length, z = p && !C, j = U && !O;
          if (!p && b) {
            m = j ? m : new ee(this);
            var G = e.apply(m, V);
            return G.__actions__.push({ func: Gi, args: [J], thisArg: r }), new vt(G, C);
          }
          return z && j ? e.apply(this, V) : (G = this.thru(J), z ? l ? G.value()[0] : G.value() : G);
        });
      }), wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = mi[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
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
      }), hr[xi(r, A).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = gV, ee.prototype.reverse = UV, ee.prototype.value = RV, h.prototype.at = $0, h.prototype.chain = q0, h.prototype.commit = K0, h.prototype.next = eT, h.prototype.plant = nT, h.prototype.reverse = rT, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = oT, h.prototype.first = h.prototype.head, ao && (h.prototype[ao] = tT), h;
    }, ur = Kw();
    Fn ? ((Fn.exports = ur)._ = ur, ms._ = ur) : We._ = ur;
  }).call(Uo);
})(me, me.exports);
const MN = "/alarms?_s=", Qa = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, ZN = async (t, o) => {
  try {
    return (await Jn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      Qa
    )).status === 204;
  } catch {
    return !1;
  }
}, bN = async (t, o) => {
  try {
    if ((await Jn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      Qa
    )).status === 204)
      return !0;
  } catch {
    return !1;
  }
}, JN = async (t) => {
  try {
    const o = t.join(",alarm.id==");
    return (await bn.put(
      `alarms?_s=alarm.id==${o}&clear=true`,
      null,
      Qa
    )).status == 204;
  } catch {
    return !1;
  }
}, EN = async () => {
  try {
    const t = `${MN}isSituation==true&limit=0`, o = await bn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, SN = async () => {
  try {
    const t = await bn("/alarms?limit=0");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, FN = async (t) => {
  try {
    const o = t.join(",id=="), r = await bn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, fm = async (t) => {
  try {
    const o = await bn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, AN = async () => {
  try {
    const t = await bn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((s) => me.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, WN = async (t, o, r) => {
  try {
    return (await bn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      Qa
    )).status == 204;
  } catch {
    return !1;
  }
}, CN = async (t, o) => {
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
}, xN = "/alec", BN = "/alec/engine/configuration", hm = "/alec/agreement/configuration", IN = "/alec/situation/statusList", pm = async (t) => {
  try {
    return (await Jn.post(`${hm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, DN = async () => {
  try {
    const t = await Jn.get(`${hm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, ON = async (t, o) => {
  try {
    return (await Jn.post(BN, {
      distanceMeasureName: o ? ft.HELLINGER_OPTION : ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, mm = async (t, o) => {
  try {
    return (await Jn.post(`${xN}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, QN = async () => {
  try {
    const t = await Jn.get(IN);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, zN = window.Pinia.defineStore, Pr = zN("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    nodes: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await AN();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await EN(), o = await SN();
      let r = [];
      o && (r = me.exports.mapKeys(o, (a) => a.id));
      const s = await QN();
      if (t) {
        const a = t.alarm.map((f) => {
          const w = f.relatedAlarms.map((v) => r[v.id]), g = s.filter(
            (v) => parseInt(v.id) === f.id
          );
          return f.alarms = w, f.status = g && g[0] ? g[0].status : "CREATED", f;
        }), u = me.exports.groupBy(a, "status"), d = [
          ...u.CREATED || [],
          ...u.ACCEPTED || [],
          ...u.REJECTED || []
        ];
        this.situations = d;
      }
    },
    async getSituation(t) {
      const o = await fm(t);
      if (o) {
        const r = o.relatedAlarms.map((d) => d.id), s = await FN(r);
        o.alarms = s;
        const a = me.exports.cloneDeep(this.situations), u = this.situations.findIndex((d) => d.id == t);
        a[u] = o, this.situations = a;
      }
    }
  }
}), GN = window.Vue.openBlock, YN = window.Vue.createElementBlock, _N = window.Vue.createElementVNode;
var HN = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const PN = {}, jN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XN = /* @__PURE__ */ _N("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), LN = [
  XN
];
function $N(t, o) {
  return GN(), YN("svg", jN, LN);
}
var Wc = /* @__PURE__ */ HN(PN, [["render", $N]]);
var qN = Object.defineProperty, eh = Object.getOwnPropertySymbols, KN = Object.prototype.hasOwnProperty, ey = Object.prototype.propertyIsEnumerable, th = (t, o, r) => o in t ? qN(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, nh = (t, o) => {
  for (var r in o || (o = {}))
    KN.call(o, r) && th(t, r, o[r]);
  if (eh)
    for (var r of eh(o))
      ey.call(o, r) && th(t, r, o[r]);
  return t;
};
const ty = window.Vue.defineComponent, ny = window.Vue.toRaw, xl = window.Vue.h;
var ry = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const oy = {
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
}, iy = ty({
  props: oy,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = ny(this.icon);
    return this.$slots.default ? xl("span", { class: "feather-icon-container" }, [
      xl(this.$slots.default()[0], nh({
        class: o
      }, r))
    ]) : xl(s, nh({
      class: o
    }, r));
  }
});
var se = /* @__PURE__ */ ry(iy, [["__scopeId", "data-v-52cbf270"]]);
const ay = window.Vue.openBlock, sy = window.Vue.createElementBlock, ly = window.Vue.createElementVNode;
var cy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uy = {}, dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fy = /* @__PURE__ */ ly("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), hy = [
  fy
];
function py(t, o) {
  return ay(), sy("svg", dy, hy);
}
var wm = /* @__PURE__ */ cy(uy, [["render", py]]);
const my = window.Vue.defineComponent, tn = window.Vue.unref, rh = window.Vue.normalizeClass, Ro = window.Vue.createElementVNode, Bl = window.Vue.toDisplayString, oh = window.Vue.createVNode, Rr = window.Vue.openBlock, Nr = window.Vue.createElementBlock, Il = window.Vue.createCommentVNode, wy = window.Vue.createTextVNode, Vy = window.Vue.renderList, vy = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ty = { class: "content" }, gy = { class: "title-row" }, Uy = { class: "title" }, Ry = {
  key: 0,
  class: "accepted"
}, Ny = {
  key: 1,
  class: "rejected"
}, yy = {
  key: 0,
  class: "count-info"
}, ky = /* @__PURE__ */ wy(" Alarms: "), My = { class: "info-title" }, Zy = /* @__PURE__ */ my({
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
      var w, g, v;
      return Rr(), Nr("div", {
        onClick: u,
        class: rh(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == tn(a)
        }])
      }, [
        Ro("div", {
          class: rh(["severity-line", [`${(g = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ro("div", Ty, [
          Ro("div", gy, [
            Ro("div", Uy, "Situation " + Bl((v = r.situationInfo) == null ? void 0 : v.id), 1),
            r.situationInfo.status == tn(s) ? (Rr(), Nr("div", Ry, [
              oh(tn(se), {
                icon: tn(Wc),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Il("", !0),
            r.situationInfo.status == tn(a) ? (Rr(), Nr("div", Ny, [
              oh(tn(se), {
                icon: tn(wm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Il("", !0)
          ]),
          r.situationInfo.alarms ? (Rr(), Nr("div", yy, [
            ky,
            Ro("span", My, Bl(r.situationInfo.relatedAlarms.length), 1)
          ])) : Il("", !0),
          (Rr(!0), Nr(vy, null, Vy(tn(me.exports.keys)(tn(me.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (R) => (Rr(), Nr("div", {
            class: "info-title",
            key: R
          }, " - " + Bl(R), 1))), 128))
        ])
      ], 2);
    };
  }
});
const by = /* @__PURE__ */ be(Zy, [["__scopeId", "data-v-1bda4968"]]);
const $i = window.Vue.ref, Jy = window.Vue.inject, Ey = window.Vue.computed, Sy = window.Vue.onMounted, Fy = {
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
}, Ay = (t) => {
  const o = $i(!1), r = $i(), s = $i(t.controls), a = $i(t.id), u = () => {
    r.value && r.value.focus();
  }, d = Jy("registerTab");
  Sy(() => {
    if (r.value && d) {
      const w = r.value.parentElement, g = w && w.parentElement ? w.parentElement : void 0, v = Array.from(g ? g.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? v.indexOf(w) : -1;
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
  const f = Ey(() => ({
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
const zr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, Gr = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var Wy = Object.defineProperty, Cy = Object.defineProperties, xy = Object.getOwnPropertyDescriptors, ih = Object.getOwnPropertySymbols, By = Object.prototype.hasOwnProperty, Iy = Object.prototype.propertyIsEnumerable, ah = (t, o, r) => o in t ? Wy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, sh = (t, o) => {
  for (var r in o || (o = {}))
    By.call(o, r) && ah(t, r, o[r]);
  if (ih)
    for (var r of ih(o))
      Iy.call(o, r) && ah(t, r, o[r]);
  return t;
}, Dy = (t, o) => Cy(t, xy(o));
const Oy = window.Vue.defineComponent, Qy = window.Vue.h;
var zy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Gy = {
  center: {
    type: Boolean,
    default: !1
  }
}, Yy = Oy({
  props: Gy,
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
        this.styles = Dy(sh({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Gr(this.failsafe), this.failsafe = zr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Qy("div", {
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
var Kn = /* @__PURE__ */ zy(Yy, [["__scopeId", "data-v-18e2a5db"]]);
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
}, lh = window.Vue.ref, _y = window.Vue.toRef, Hy = window.Vue.watch, ch = window.Vue.provide, Py = {
  prop: "modelValue",
  event: "update:modelValue"
}, jy = {
  "update:modelValue": (t) => !0
}, Xy = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, Ly = (t, o) => {
  const r = _y(t, "modelValue"), s = lh(t.modelValue), a = lh([]);
  Hy(r, (F) => {
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
    const M = [L.RIGHT], Y = [L.LEFT], $ = [L.ENTER, L.SPACE];
    t.vertical && (M.push(L.DOWN), Y.push(L.UP)), M.indexOf(B) > -1 ? (D++, D >= S.length && (D = 0), A(F), f(a.value.indexOf(S[D]))) : Y.indexOf(B) > -1 && (D--, D < 0 && (D = S.length - 1), A(F), f(a.value.indexOf(S[D]))), $.indexOf(B) > -1 && w(D);
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
}, qi = window.Vue.ref, $y = window.Vue.inject, qy = window.Vue.computed, Ky = window.Vue.onMounted, ek = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, tk = (t) => {
  const o = qi(!1), r = qi(), s = qi(t.tab), a = qi(t.id), u = $y("registerPanel");
  Ky(() => {
    if (u) {
      const f = r.value, w = f && f.parentElement ? f.parentElement : void 0, g = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: g
      });
    }
  });
  const d = qy(() => ({
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
}, Cc = window.Vue.defineComponent, nk = window.Vue.resolveComponent, xc = window.Vue.openBlock, Bc = window.Vue.createElementBlock, xo = window.Vue.createElementVNode, Vm = window.Vue.mergeProps, Ma = window.Vue.renderSlot, rk = window.Vue.createVNode, ok = window.Vue.normalizeStyle, ik = window.Vue.toHandlers, ak = window.Vue.withDirectives, sk = window.Vue.normalizeProps, lk = window.Vue.guardReactiveProps, ck = window.Vue.vShow;
var Ic = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uk = Fy, dk = Cc({
  props: uk,
  setup(t) {
    return Ay(t);
  },
  components: {
    FeatherRipple: Kn
  }
}), fk = { role: "presentation" }, hk = { class: "tab-text" };
function pk(t, o, r, s, a, u) {
  const d = nk("FeatherRipple");
  return xc(), Bc("li", fk, [
    xo("button", Vm(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      xo("span", hk, [
        Ma(t.$slots, "default", {}, void 0, !0)
      ]),
      rk(d)
    ], 16)
  ]);
}
var uh = /* @__PURE__ */ Ic(dk, [["render", pk], ["__scopeId", "data-v-e6bb52b6"]]);
const mk = Xy, wk = jy, Vk = Cc({
  model: Py,
  emits: wk,
  props: mk,
  setup(t, o) {
    return Ly(t, o);
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
}), vk = { class: "feather-tab-container" }, Tk = { class: "tab-panels" };
function gk(t, o, r, s, a, u) {
  return xc(), Bc("div", vk, [
    xo("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: ok({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    xo("ul", Vm(t.attrs, ik(t.listeners)), [
      Ma(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    xo("div", Tk, [
      Ma(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var Uk = /* @__PURE__ */ Ic(Vk, [["render", gk], ["__scopeId", "data-v-27adffb9"]]);
const Rk = ek, Nk = Cc({
  props: Rk,
  setup(t) {
    return tk(t);
  }
});
function yk(t, o, r, s, a, u) {
  return ak((xc(), Bc("div", sk(lk(t.attrs)), [
    Ma(t.$slots, "default")
  ], 16)), [
    [ck, t.selected]
  ]);
}
var dh = /* @__PURE__ */ Ic(Nk, [["render", yk]]);
const kk = window.Vue.defineComponent, Mk = window.Vue.toDisplayString, Zk = window.Vue.normalizeClass, bk = window.Vue.openBlock, Jk = window.Vue.createElementBlock, Ek = window.Vue.createCommentVNode, Sk = /* @__PURE__ */ kk({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (bk(), Jk("span", {
      key: 0,
      class: Zk(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, Mk(o.severity), 3)) : Ek("", !0);
  }
});
const vm = /* @__PURE__ */ be(Sk, [["__scopeId", "data-v-83c2cdce"]]), Fk = window.Vue.defineComponent, fh = window.Vue.toDisplayString, hh = window.Vue.createElementVNode, Ak = window.Vue.openBlock, Wk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ck = { class: "box" }, xk = { class: "label" }, Bk = { class: "date" }, Ik = /* @__PURE__ */ Fk({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (Ak(), Wk("div", Ck, [
      hh("div", xk, fh(o.label), 1),
      hh("div", Bk, fh(o.info), 1)
    ]));
  }
});
const Dl = /* @__PURE__ */ be(Ik, [["__scopeId", "data-v-b4afa751"]]), Dk = window.Vue.defineComponent, Ok = window.Vue.unref, Qk = window.Vue.renderList, zk = window.Vue.Fragment, Ol = window.Vue.openBlock, Ql = window.Vue.createElementBlock, Gk = window.Vue.toDisplayString, Yk = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _k = { class: "alarms-list" }, Hk = /* @__PURE__ */ Dk({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (Ol(), Ql("div", _k, [
      (Ol(!0), Ql(zk, null, Qk(Ok(me.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Ol(), Ql("div", {
        class: Yk(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, Gk(a.length), 3))), 128))
    ]));
  }
});
const Pk = /* @__PURE__ */ be(Hk, [["__scopeId", "data-v-52d63440"]]);
const jk = window.Vue.computed, Tm = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = jk(() => t.value[s] ? t.value[s] : o[s]);
  }), r;
}, Xk = window.Vue.openBlock, Lk = window.Vue.createElementBlock, $k = window.Vue.createElementVNode;
var qk = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Kk = {}, eM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tM = /* @__PURE__ */ $k("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), nM = [
  tM
];
function rM(t, o) {
  return Xk(), Lk("svg", eM, nM);
}
var $o = /* @__PURE__ */ qk(Kk, [["render", rM]]);
const ph = window.Vue.computed, oM = (t, o, r) => {
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
const iM = window.Vue.openBlock, aM = window.Vue.createElementBlock, Dc = window.Vue.createElementVNode;
var sM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lM = {}, cM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uM = /* @__PURE__ */ Dc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), dM = /* @__PURE__ */ Dc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), fM = /* @__PURE__ */ Dc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), hM = [
  uM,
  dM,
  fM
];
function pM(t, o) {
  return iM(), aM("svg", cM, hM);
}
var gm = /* @__PURE__ */ sM(lM, [["render", pM]]), mM = Object.defineProperty, wM = Object.defineProperties, VM = Object.getOwnPropertyDescriptors, mh = Object.getOwnPropertySymbols, vM = Object.prototype.hasOwnProperty, TM = Object.prototype.propertyIsEnumerable, wh = (t, o, r) => o in t ? mM(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Um = (t, o) => {
  for (var r in o || (o = {}))
    vM.call(o, r) && wh(t, r, o[r]);
  if (mh)
    for (var r of mh(o))
      TM.call(o, r) && wh(t, r, o[r]);
  return t;
}, Rm = (t, o) => wM(t, VM(o));
const jr = window.Vue.defineComponent, Yo = window.Vue.resolveComponent, zt = window.Vue.openBlock, xr = window.Vue.createElementBlock, gM = window.Vue.createVNode, Za = window.Vue.createBlock, UM = window.Vue.withModifiers, Yr = window.Vue.inject, _o = window.Vue.computed, RM = window.Vue.normalizeClass, yr = window.Vue.createElementVNode, ba = window.Vue.toDisplayString, Ta = window.Vue.renderSlot, Bo = window.Vue.createCommentVNode, NM = window.Vue.withDirectives, yM = window.Vue.vShow, fc = window.Vue.ref, Vh = window.Vue.toRef, vh = window.Vue.nextTick, hc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Oc = window.Vue.provide, Th = window.Vue.isRef, kM = window.Vue.onBeforeUnmount;
var qo = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const MM = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, ZM = jr({
  props: MM,
  components: {
    FeatherIcon: se
  }
}), bM = ["title"];
function JM(t, o, r, s, a, u) {
  const d = Yo("FeatherIcon");
  return zt(), xr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    gM(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, bM);
}
var EM = /* @__PURE__ */ qo(ZM, [["render", JM], ["__scopeId", "data-v-4265058e"]]);
const SM = jr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return $o;
    }
  },
  components: {
    ActionIcon: EM
  }
});
function FM(t, o, r, s, a, u) {
  const d = Yo("ActionIcon");
  return zt(), Za(d, {
    onClick: o[0] || (o[0] = UM((f) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var AM = /* @__PURE__ */ qo(SM, [["render", FM]]);
const WM = jr({
  computed: {
    errorIcon() {
      return gm;
    }
  },
  components: {
    FeatherIcon: se
  }
});
function CM(t, o, r, s, a, u) {
  const d = Yo("FeatherIcon");
  return zt(), Za(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var xM = /* @__PURE__ */ qo(WM, [["render", CM], ["__scopeId", "data-v-0b8faef3"]]);
const BM = {
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
}, IM = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, DM = jr({
  emits: IM,
  props: BM,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = Yr("wrapperOptions", {}), o = Yr("validationErrorMessage", !1), r = _o(() => t.error ? t.error : o && o.value ? o.value : !1);
    return Rm(Um({}, t), { error: r });
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
    ClearIcon: AM,
    ErrorIcon: xM
  }
}), OM = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, QM = ["for"], zM = { class: "prefix" }, GM = { class: "post" };
function YM(t, o, r, s, a, u) {
  const d = Yo("ClearIcon"), f = Yo("ErrorIcon");
  return zt(), xr("div", {
    class: RM(["feather-input-wrapper-container", t.containerCls])
  }, [
    yr("fieldset", OM, [
      yr("legend", null, ba(t.label), 1)
    ]),
    yr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ba(t.label), 9, QM),
    yr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      yr("div", zM, [
        Ta(t.$slots, "pre", {}, void 0, !0)
      ]),
      Ta(t.$slots, "default", {}, void 0, !0),
      yr("div", GM, [
        t.showClear && t.computedClearText ? (zt(), Za(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Bo("", !0),
        t.error ? (zt(), Za(f, { key: 1 })) : Bo("", !0),
        Ta(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Nm = /* @__PURE__ */ qo(DM, [["render", YM], ["__scopeId", "data-v-4db296db"]]);
const _M = jr({
  setup() {
    const t = Yr("subTextOptions", {}), o = Yr("validationErrorMessage", !1), r = _o(() => t.error ? t.error : o && o.value ? o.value : "");
    return Rm(Um({}, t), { error: r });
  }
}), HM = { class: "feather-input-sub-text" }, PM = {
  key: 0,
  class: "feather-input-spacer"
}, jM = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, XM = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function LM(t, o, r, s, a, u) {
  return NM((zt(), xr("div", HM, [
    !t.hint && !t.error.length ? (zt(), xr("div", PM, "\xA0")) : Bo("", !0),
    t.hint && !t.error.length ? (zt(), xr("div", jM, ba(t.hint), 1)) : Bo("", !0),
    t.error.length > 0 ? (zt(), xr("div", XM, ba(t.error), 1)) : Bo("", !0),
    Ta(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [yM, !t.inline || t.hint || t.error.length]
  ]);
}
var za = /* @__PURE__ */ qo(_M, [["render", LM], ["__scopeId", "data-v-8e0ac99e"]]);
const $M = {
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
jr({
  props: $M,
  setup(t) {
    const o = Yr("featherFormErrors", fc([])), r = Vh(t, "errorList"), s = _o(() => {
      var v;
      return (v = r.value) != null && v.length ? r.value : o.value;
    }), a = Vh(t, "generalError"), u = (v) => {
      document.getElementById(v).focus();
    }, d = (v) => v.replace(/ \*$/, ""), f = fc(), w = (v) => `${d(v.label)} - ${v.message}`, g = _o(() => (s.value.length && vh(() => f.value.focus()), t.headingText(s.value)));
    return hc(a, (v) => {
      v.length && vh(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: g,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const Ga = (t, o, r, s, a) => {
  const u = Yr("featherForm", !1);
  if (s && u && t.value) {
    const d = fc("");
    Oc("validationErrorMessage", d);
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
      } catch (v) {
        const R = v;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, g = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return a && Th(a) && hc(a, () => {
      u.runValidation();
    }), hc(t, (v, R) => {
      v && u && u.register(v, g), R && u && u.deregister(R);
    }, { immediate: !0 }), kM(() => {
      u.deregister(t.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ya = (t) => ({
  inherittedAttrs: _o(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), _a = {
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
}, Ha = (t) => {
  Oc("subTextOptions", t);
}, ym = {
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
}, km = (t) => {
  Oc("wrapperOptions", t);
}, Ki = window.Vue.ref, qM = window.Vue.watch, KM = window.Vue.watchEffect, gh = window.Vue.computed, zl = window.Vue.provide, Mm = (t, o, r, s, a) => {
  const u = Ki([]), d = Ki(), f = Ki(), w = Ki();
  KM(() => {
    if (!u.value.length)
      return;
    const A = u.value.map((S) => S.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[A.indexOf(t.value)]), !d.value && u.value.length) {
      let S = u.value.filter((E) => !E.disabled);
      S = S.length ? S : u.value, f.value = S[0], f.value.first = !0;
    }
  }), qM(d, (A, S) => {
    S && (S.checked = !1), A && (A.checked = !0);
  });
  const g = (A) => {
    A && A.disabled || (f.value && (f.value.first = !1), d.value !== A && (o("update:modelValue", A.value), d.value = A, A.focus()));
  }, v = gh(() => d.value || f.value), R = oM(v, u, g), y = gh(() => le("feather-radio-group"));
  w.value = y.value;
  const { validate: x } = Ga(w, t, r, s, a);
  return zl("register", (A) => {
    u.value = [...u.value, A], w.value === y.value && (w.value = A.id);
  }), zl("select", g), zl("blur", (A) => {
    o("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          d.value ? g(d.value) : f.value && g(f.value);
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
var eZ = Object.defineProperty, tZ = Object.defineProperties, nZ = Object.getOwnPropertyDescriptors, Uh = Object.getOwnPropertySymbols, rZ = Object.prototype.hasOwnProperty, oZ = Object.prototype.propertyIsEnumerable, Rh = (t, o, r) => o in t ? eZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Dr = (t, o) => {
  for (var r in o || (o = {}))
    rZ.call(o, r) && Rh(t, r, o[r]);
  if (Uh)
    for (var r of Uh(o))
      oZ.call(o, r) && Rh(t, r, o[r]);
  return t;
}, Zm = (t, o) => tZ(t, nZ(o));
const En = window.Vue.defineComponent, Io = window.Vue.inject, Ja = window.Vue.computed, Do = window.Vue.ref, kt = window.Vue.resolveComponent, ht = window.Vue.openBlock, Ko = window.Vue.createElementBlock, bm = window.Vue.normalizeClass, Yt = window.Vue.renderSlot, yn = window.Vue.createBlock, Ho = window.Vue.createCommentVNode, Ea = window.Vue.createElementVNode, iZ = window.Vue.withModifiers, Pa = window.Vue.createVNode, Jm = window.Vue.toRef, pc = window.Vue.mergeProps, ln = window.Vue.withCtx, aZ = window.Vue.h, sZ = window.Vue.provide;
var Sn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lZ = {
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
}, cZ = En({
  props: lZ,
  setup(t) {
    const o = Io("isCondensed", null), r = Ja(() => o || t.condensed), s = Do(!1);
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
}), uZ = ["aria-disabled"];
function dZ(t, o, r, s, a, u) {
  const d = kt("FeatherRipple");
  return ht(), Ko("div", {
    class: bm(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Yt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (ht(), yn(d, { key: 0 })) : Ho("", !0)
  ], 42, uZ);
}
var ja = /* @__PURE__ */ Sn(cZ, [["render", dZ], ["__scopeId", "data-v-44d413dc"]]);
const fZ = {
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
}, hZ = En({
  emits: ["delete"],
  props: fZ,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: $o
    };
  },
  components: {
    FeatherIcon: se
  }
}), pZ = { class: "chip-delete" }, mZ = ["aria-label", "aria-describedby"];
function wZ(t, o, r, s, a, u) {
  const d = kt("FeatherIcon");
  return ht(), Ko("span", pZ, [
    Ea("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = iZ((...f) => t.handleDelete && t.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      Pa(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, mZ)
  ]);
}
var VZ = /* @__PURE__ */ Sn(hZ, [["render", wZ], ["__scopeId", "data-v-4bae6cb4"]]);
const vZ = En({
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
}), TZ = ["title"];
function gZ(t, o, r, s, a, u) {
  return ht(), Ko("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 8, TZ);
}
var Xa = /* @__PURE__ */ Sn(vZ, [["render", gZ], ["__scopeId", "data-v-1a0445b2"]]);
const UZ = {}, RZ = {
  class: "chip-icon",
  role: "presentation"
};
function NZ(t, o) {
  return ht(), Ko("span", RZ, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var La = /* @__PURE__ */ Sn(UZ, [["render", NZ], ["__scopeId", "data-v-2230176f"]]);
const Nh = {
  delete: "Remove"
}, yZ = En({
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
    const r = Tm(Jm(t, "labels"), Nh), s = Ja(() => le("chip-text")), a = () => {
      t.disabled || o.emit("click");
    }, u = Dr({}, o.attrs);
    return t.disabled && delete u.onClick, Zm(Dr({}, r), {
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
    Chip: ja,
    DeleteIcon: VZ,
    Label: Xa,
    PreIcon: La
  }
}), kZ = ["aria-disabled"];
function MZ(t, o, r, s, a, u) {
  const d = kt("PreIcon"), f = kt("Label"), w = kt("DeleteIcon"), g = kt("Chip");
  return ht(), yn(g, pc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: ln(() => [
      Ea("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Ea("span", pc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (ht(), yn(d, { key: 0 }, {
            default: ln(() => [
              Yt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ho("", !0),
          Pa(f, { id: t.chipTextId }, {
            default: ln(() => [
              Yt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, kZ),
      t.canDelete ? (ht(), yn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (v) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ho("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var ZZ = /* @__PURE__ */ Sn(yZ, [["render", MZ], ["__scopeId", "data-v-48b2704a"]]);
const bZ = En({
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
    Chip: ja,
    Label: Xa,
    PreIcon: La
  }
}), JZ = ["aria-disabled"];
function EZ(t, o, r, s, a, u) {
  const d = kt("PreIcon"), f = kt("Label"), w = kt("Chip");
  return ht(), yn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: ln(() => [
      Ea("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (ht(), yn(d, { key: 0 }, {
          default: ln(() => [
            Yt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ho("", !0),
        Pa(f, null, {
          default: ln(() => [
            Yt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, JZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var SZ = /* @__PURE__ */ Sn(bZ, [["render", EZ], ["__scopeId", "data-v-3e0c4eba"]]);
const FZ = En({
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
    const o = Do(!1), r = Do(!1), s = Ja(() => le("chip-label-id")), a = Ja(() => o.value || r.value ? 0 : -1), u = Do(), d = () => {
      u.value.$el.focus();
    }, f = Io("register", (y) => {
    }), w = Io("blur", (y) => {
    }), g = Io("select", (y) => {
    }), v = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return f(v), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: w,
      click: () => {
        g(v);
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
    Chip: ja,
    Label: Xa,
    PreIcon: La
  }
});
function AZ(t, o, r, s, a, u) {
  const d = kt("PreIcon"), f = kt("Label"), w = kt("Chip");
  return ht(), yn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: bm(["focus hover", { selected: t.checked }]),
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
      })) : Ho("", !0),
      Pa(f, { id: t.labelId }, {
        default: ln(() => [
          Yt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var WZ = /* @__PURE__ */ Sn(FZ, [["render", AZ], ["__scopeId", "data-v-bbcc2f70"]]);
const CZ = {
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
  props: CZ,
  setup() {
    return { format: Io("chipListFormat", "") };
  },
  render() {
    const t = (o) => aZ(o, Dr(Dr({}, this.$props), this.$attrs), Dr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(ZZ) : this.format === "radio" ? t(WZ) : t(SZ);
  }
}), xZ = {
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
}, BZ = En({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: xZ,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    sZ("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const d = Jm(t, "modelValue");
      return Zm(Dr({
        attrs: {
          role: "radiogroup"
        }
      }, Mm(d, o.emit, t.label, {}, Do(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), IZ = ["aria-label"];
function DZ(t, o, r, s, a, u) {
  return ht(), Ko("div", pc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 16, IZ);
}
var OZ = /* @__PURE__ */ Sn(BZ, [["render", DZ], ["__scopeId", "data-v-1e06f41d"]]);
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
function QZ(t, o) {
  Ie(2, arguments);
  var r = Ye(t).getTime(), s = er(o);
  return new Date(r + s);
}
var zZ = {};
function ei() {
  return zZ;
}
function mc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function GZ(t, o) {
  Ie(2, arguments);
  var r = Ye(t), s = Ye(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function YZ(t) {
  return Ie(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function _Z(t) {
  if (Ie(1, arguments), !YZ(t) && typeof t != "number")
    return !1;
  var o = Ye(t);
  return !isNaN(Number(o));
}
function HZ(t, o) {
  Ie(2, arguments);
  var r = er(o);
  return QZ(t, -r);
}
var PZ = 864e5;
function jZ(t) {
  Ie(1, arguments);
  var o = Ye(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / PZ) + 1;
}
function Sa(t) {
  Ie(1, arguments);
  var o = 1, r = Ye(t), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Em(t) {
  Ie(1, arguments);
  var o = Ye(t), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Sa(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = Sa(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function XZ(t) {
  Ie(1, arguments);
  var o = Em(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Sa(r);
  return s;
}
var LZ = 6048e5;
function $Z(t) {
  Ie(1, arguments);
  var o = Ye(t), r = Sa(o).getTime() - XZ(o).getTime();
  return Math.round(r / LZ) + 1;
}
function Fa(t, o) {
  var r, s, a, u, d, f, w, g;
  Ie(1, arguments);
  var v = ei(), R = er((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && s !== void 0 ? s : (w = v.locale) === null || w === void 0 || (g = w.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ye(t), x = y.getUTCDay(), F = (x < R ? 7 : 0) + x - R;
  return y.setUTCDate(y.getUTCDate() - F), y.setUTCHours(0, 0, 0, 0), y;
}
function Sm(t, o) {
  var r, s, a, u, d, f, w, g;
  Ie(1, arguments);
  var v = Ye(t), R = v.getUTCFullYear(), y = ei(), x = er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (g = w.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(x >= 1 && x <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var F = new Date(0);
  F.setUTCFullYear(R + 1, 0, x), F.setUTCHours(0, 0, 0, 0);
  var W = Fa(F, o), B = new Date(0);
  B.setUTCFullYear(R, 0, x), B.setUTCHours(0, 0, 0, 0);
  var A = Fa(B, o);
  return v.getTime() >= W.getTime() ? R + 1 : v.getTime() >= A.getTime() ? R : R - 1;
}
function qZ(t, o) {
  var r, s, a, u, d, f, w, g;
  Ie(1, arguments);
  var v = ei(), R = er((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = v.locale) === null || w === void 0 || (g = w.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Sm(t, o), x = new Date(0);
  x.setUTCFullYear(y, 0, R), x.setUTCHours(0, 0, 0, 0);
  var F = Fa(x, o);
  return F;
}
var KZ = 6048e5;
function eb(t, o) {
  Ie(1, arguments);
  var r = Ye(t), s = Fa(r, o).getTime() - qZ(r, o).getTime();
  return Math.round(s / KZ) + 1;
}
function ae(t, o) {
  for (var r = t < 0 ? "-" : "", s = Math.abs(t).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var tb = {
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
const vn = tb;
var kr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, nb = {
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
    var a = Sm(t, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var d = u % 100;
      return ae(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ae(u, o.length);
  },
  R: function(t, o) {
    var r = Em(t);
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
    var a = eb(t, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ae(a, o.length);
  },
  I: function(t, o, r) {
    var s = $Z(t);
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
    var s = jZ(t);
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
    switch (s === 12 ? a = kr.noon : s === 0 ? a = kr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = kr.evening : s >= 12 ? a = kr.afternoon : s >= 4 ? a = kr.morning : a = kr.night, o) {
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
        return Mh(u);
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
        return Mh(u);
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
        return "GMT" + kh(u, ":");
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
        return "GMT" + kh(u, ":");
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
function kh(t, o) {
  var r = t > 0 ? "-" : "+", s = Math.abs(t), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var d = o || "";
  return r + String(a) + d + ae(u, 2);
}
function Mh(t, o) {
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
const rb = nb;
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
}, Fm = function(t, o) {
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
}, ob = function(t, o) {
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
  return u.replace("{{date}}", Zh(s, o)).replace("{{time}}", Fm(a, o));
}, ib = {
  p: Fm,
  P: ob
};
const ab = ib;
var sb = ["D", "DD"], lb = ["YY", "YYYY"];
function cb(t) {
  return sb.indexOf(t) !== -1;
}
function ub(t) {
  return lb.indexOf(t) !== -1;
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
}, fb = function(t, o, r) {
  var s, a = db[t];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const hb = fb;
function Gl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, s = t.formats[r] || t.formats[t.defaultWidth];
    return s;
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
}, Vb = {
  date: Gl({
    formats: pb,
    defaultWidth: "full"
  }),
  time: Gl({
    formats: mb,
    defaultWidth: "full"
  }),
  dateTime: Gl({
    formats: wb,
    defaultWidth: "full"
  })
};
const vb = Vb;
var Tb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, gb = function(t, o, r, s) {
  return Tb[t];
};
const Ub = gb;
function No(t) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : u;
      a = t.formattingValues[d] || t.formattingValues[u];
    } else {
      var f = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      a = t.values[w] || t.values[f];
    }
    var g = t.argumentCallback ? t.argumentCallback(o) : o;
    return a[g];
  };
}
var Rb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Nb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, kb = {
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
}, Zb = {
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
}, bb = function(t, o) {
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
}, Jb = {
  ordinalNumber: bb,
  era: No({
    values: Rb,
    defaultWidth: "wide"
  }),
  quarter: No({
    values: Nb,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: No({
    values: yb,
    defaultWidth: "wide"
  }),
  day: No({
    values: kb,
    defaultWidth: "wide"
  }),
  dayPeriod: No({
    values: Mb,
    defaultWidth: "wide",
    formattingValues: Zb,
    defaultFormattingWidth: "wide"
  })
};
const Eb = Jb;
function yo(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && t.matchPatterns[s] || t.matchPatterns[t.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var d = u[0], f = s && t.parsePatterns[s] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(f) ? Fb(f, function(R) {
      return R.test(d);
    }) : Sb(f, function(R) {
      return R.test(d);
    }), g;
    g = t.valueCallback ? t.valueCallback(w) : w, g = r.valueCallback ? r.valueCallback(g) : g;
    var v = o.slice(d.length);
    return {
      value: g,
      rest: v
    };
  };
}
function Sb(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function Fb(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function Ab(t) {
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
var Wb = /^(\d+)(th|st|nd|rd)?/i, Cb = /\d+/i, xb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Bb = {
  any: [/^b/i, /^(a|c)/i]
}, Ib = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Db = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ob = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qb = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, zb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Yb = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _b = {
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
}, Hb = {
  ordinalNumber: Ab({
    matchPattern: Wb,
    parsePattern: Cb,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: yo({
    matchPatterns: xb,
    defaultMatchWidth: "wide",
    parsePatterns: Bb,
    defaultParseWidth: "any"
  }),
  quarter: yo({
    matchPatterns: Ib,
    defaultMatchWidth: "wide",
    parsePatterns: Db,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: yo({
    matchPatterns: Ob,
    defaultMatchWidth: "wide",
    parsePatterns: Qb,
    defaultParseWidth: "any"
  }),
  day: yo({
    matchPatterns: zb,
    defaultMatchWidth: "wide",
    parsePatterns: Gb,
    defaultParseWidth: "any"
  }),
  dayPeriod: yo({
    matchPatterns: Yb,
    defaultMatchWidth: "any",
    parsePatterns: _b,
    defaultParseWidth: "any"
  })
};
const Pb = Hb;
var jb = {
  code: "en-US",
  formatDistance: hb,
  formatLong: vb,
  formatRelative: Ub,
  localize: Eb,
  match: Pb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Am = jb;
var Xb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $b = /^'([^]*?)'?$/, qb = /''/g, Kb = /[a-zA-Z]/;
function eJ(t, o, r) {
  var s, a, u, d, f, w, g, v, R, y, x, F, W, B, A, S, E, D;
  Ie(2, arguments);
  var M = String(o), Y = ei(), $ = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : Y.locale) !== null && s !== void 0 ? s : Am, q = er((u = (d = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (g = r.locale) === null || g === void 0 || (v = g.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = Y.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
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
  if (!_Z(Le))
    throw new RangeError("Invalid time value");
  var we = mc(Le), Ve = HZ(Le, we), Te = {
    firstWeekContainsDate: q,
    weekStartsOn: De,
    locale: $,
    _originalDate: Le
  }, Ne = M.match(Lb).map(function(ce) {
    var Fe = ce[0];
    if (Fe === "p" || Fe === "P") {
      var Ae = ab[Fe];
      return Ae(ce, $.formatLong);
    }
    return ce;
  }).join("").match(Xb).map(function(ce) {
    if (ce === "''")
      return "'";
    var Fe = ce[0];
    if (Fe === "'")
      return tJ(ce);
    var Ae = rb[Fe];
    if (Ae)
      return !(r != null && r.useAdditionalWeekYearTokens) && ub(ce) && bh(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && cb(ce) && bh(ce, o, String(t)), Ae(Ve, ce, $.localize, Te);
    if (Fe.match(Kb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return ce;
  }).join("");
  return Ne;
}
function tJ(t) {
  var o = t.match($b);
  return o ? o[1].replace(qb, "'") : t;
}
function Wm(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function nJ(t) {
  return Wm({}, t);
}
var Jh = 1e3 * 60, Aa = 60 * 24, Eh = Aa * 30, Sh = Aa * 365;
function rJ(t, o, r) {
  var s, a, u;
  Ie(2, arguments);
  var d = ei(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : d.locale) !== null && s !== void 0 ? s : Am;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = GZ(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var g = Wm(nJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), v, R;
  w > 0 ? (v = Ye(o), R = Ye(t)) : (v = Ye(t), R = Ye(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), x;
  if (y === "floor")
    x = Math.floor;
  else if (y === "ceil")
    x = Math.ceil;
  else if (y === "round")
    x = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var F = R.getTime() - v.getTime(), W = F / Jh, B = mc(R) - mc(v), A = (F - B) / Jh, S = r == null ? void 0 : r.unit, E;
  if (S ? E = String(S) : W < 1 ? E = "second" : W < 60 ? E = "minute" : W < Aa ? E = "hour" : A < Eh ? E = "day" : A < Sh ? E = "month" : E = "year", E === "second") {
    var D = x(F / 1e3);
    return f.formatDistance("xSeconds", D, g);
  } else if (E === "minute") {
    var M = x(W);
    return f.formatDistance("xMinutes", M, g);
  } else if (E === "hour") {
    var Y = x(W / 60);
    return f.formatDistance("xHours", Y, g);
  } else if (E === "day") {
    var $ = x(A / Aa);
    return f.formatDistance("xDays", $, g);
  } else if (E === "month") {
    var q = x(A / Eh);
    return q === 12 && S !== "month" ? f.formatDistance("xYears", 1, g) : f.formatDistance("xMonths", q, g);
  } else if (E === "year") {
    var De = x(A / Sh);
    return f.formatDistance("xYears", De, g);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const Zn = (t) => {
  let o = "";
  if (t)
    try {
      o = eJ(new Date(t), ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
};
var oJ = Object.defineProperty, iJ = Object.defineProperties, aJ = Object.getOwnPropertyDescriptors, Fh = Object.getOwnPropertySymbols, sJ = Object.prototype.hasOwnProperty, lJ = Object.prototype.propertyIsEnumerable, Ah = (t, o, r) => o in t ? oJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, ko = (t, o) => {
  for (var r in o || (o = {}))
    sJ.call(o, r) && Ah(t, r, o[r]);
  if (Fh)
    for (var r of Fh(o))
      lJ.call(o, r) && Ah(t, r, o[r]);
  return t;
}, Wh = (t, o) => iJ(t, aJ(o));
const cJ = window.Vue.defineComponent, uJ = window.Vue.inject, Mo = window.Vue.h;
var dJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fJ = {
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
}, hJ = cJ({
  inheritAttrs: !1,
  props: fJ,
  setup() {
    return { hasTooltip: uJ("feather-has-tooltip", !1) };
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
    let u = Mo(Kn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Mo(o, Wh(ko(ko({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Mo(Kn, { center: !0 })
      ]);
    }
    const d = Mo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Mo(o, Wh(ko(ko({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var kn = /* @__PURE__ */ dJ(hJ, [["__scopeId", "data-v-702d1074"]]);
const pJ = window.Vue.openBlock, mJ = window.Vue.createElementBlock, wJ = window.Vue.createElementVNode;
var VJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const vJ = {}, TJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gJ = /* @__PURE__ */ wJ("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), UJ = [
  gJ
];
function RJ(t, o) {
  return pJ(), mJ("svg", TJ, UJ);
}
var NJ = /* @__PURE__ */ VJ(vJ, [["render", RJ]]);
const yJ = window.Vue.openBlock, kJ = window.Vue.createElementBlock, MJ = window.Vue.createStaticVNode;
var ZJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bJ = {}, JJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EJ = /* @__PURE__ */ MJ('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), SJ = [
  EJ
];
function FJ(t, o) {
  return yJ(), kJ("svg", JJ, SJ);
}
var Cm = /* @__PURE__ */ ZJ(bJ, [["render", FJ]]);
const AJ = window.Vue.defineComponent, At = window.Vue.unref, Yl = window.Vue.createVNode, Qc = window.Vue.createElementVNode, _l = window.Vue.withCtx, ea = window.Vue.openBlock, Hl = window.Vue.createBlock, Pl = window.Vue.createCommentVNode, WJ = window.Vue.normalizeClass, CJ = window.Vue.createElementBlock, xJ = window.Vue.pushScopeId, BJ = window.Vue.popScopeId, zc = (t) => (xJ("data-v-cc0a6466"), t = t(), BJ(), t), IJ = /* @__PURE__ */ zc(() => /* @__PURE__ */ Qc("span", null, "Acknowledge", -1)), DJ = /* @__PURE__ */ zc(() => /* @__PURE__ */ Qc("span", null, "Escalate", -1)), OJ = /* @__PURE__ */ zc(() => /* @__PURE__ */ Qc("span", null, "Clear", -1)), QJ = /* @__PURE__ */ AJ({
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
    const r = t, s = Pr(), a = async (d) => {
      await ZN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id)), r.isSituation && await mm(
        r.situationId,
        ft.ACCEPTED.toLowerCase()
      );
    }, u = async (d) => {
      await bN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id), s.getSituation(r.situationId));
    };
    return (d, f) => (ea(), CJ("div", {
      class: WJ(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? Pl("", !0) : (ea(), Hl(At(kn), {
        key: 0,
        class: "acction-btn",
        onClick: f[0] || (f[0] = () => a(!0))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(Wc),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          IJ
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (ea(), Hl(At(kn), {
        key: 1,
        class: "acction-btn",
        onClick: f[1] || (f[1] = () => u(At(ft).ESCALATE))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(NJ),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          DJ
        ]),
        _: 1
      })) : Pl("", !0),
      r.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (ea(), Hl(At(kn), {
        key: 2,
        class: "acction-btn",
        onClick: f[2] || (f[2] = () => u(At(ft).CLEAR))
      }, {
        default: _l(() => [
          Yl(At(se), {
            icon: At(Cm),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          OJ
        ]),
        _: 1
      })) : Pl("", !0)
    ], 2));
  }
});
const xm = /* @__PURE__ */ be(QJ, [["__scopeId", "data-v-cc0a6466"]]);
var zJ = Object.defineProperty, GJ = Object.defineProperties, YJ = Object.getOwnPropertyDescriptors, Ch = Object.getOwnPropertySymbols, _J = Object.prototype.hasOwnProperty, HJ = Object.prototype.propertyIsEnumerable, xh = (t, o, r) => o in t ? zJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, wc = (t, o) => {
  for (var r in o || (o = {}))
    _J.call(o, r) && xh(t, r, o[r]);
  if (Ch)
    for (var r of Ch(o))
      HJ.call(o, r) && xh(t, r, o[r]);
  return t;
}, Bm = (t, o) => GJ(t, YJ(o));
const Im = window.Vue.defineComponent, PJ = window.Vue.inject, jJ = window.Vue.resolveComponent, jl = window.Vue.openBlock, Bh = window.Vue.createElementBlock, Br = window.Vue.createElementVNode, XJ = window.Vue.createBlock, Ih = window.Vue.createCommentVNode, LJ = window.Vue.renderSlot, $J = window.Vue.pushScopeId, qJ = window.Vue.popScopeId, Xl = window.Vue.toRef, ta = window.Vue.computed, KJ = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var e2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const t2 = {
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
}, n2 = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, r2 = Im({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: n2,
  props: t2,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: PJ("registerCheckbox", (o) => {
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
}), o2 = (t) => ($J("data-v-a7af27e2"), t = t(), qJ(), t), i2 = { class: "layout-container" }, a2 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], s2 = { class: "checkbox hover focus" }, l2 = /* @__PURE__ */ o2(() => /* @__PURE__ */ Br("div", { class: "box" }, [
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
], -1)), c2 = ["id", "for"];
function u2(t, o, r, s, a, u) {
  const d = jJ("feather-ripple");
  return jl(), Bh("div", i2, [
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
      Br("div", s2, [
        l2,
        t.disabled ? Ih("", !0) : (jl(), XJ(d, {
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
        LJ(t.$slots, "default", {}, void 0, !0)
      ], 8, c2))
    ], 40, a2)
  ]);
}
var Gc = /* @__PURE__ */ e2(r2, [["render", u2], ["__scopeId", "data-v-a7af27e2"]]);
const d2 = Bm(wc({}, _a), {
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
Im({
  props: d2,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    Ha(t);
    const r = Xl(t, "error"), s = ta(() => le("feather-checkbox-group")), a = ta(() => le("feather-input-description")), u = ta(() => le("feather-input-label")), d = ta(() => {
      const v = JSON.parse(JSON.stringify(o.attrs));
      return v["aria-invalid"] || (v["aria-invalid"] = !!r.value), Bm(wc({}, v), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = KJ(s.value), { validate: w } = Ga(f, Xl(t, "modelValue"), t.label, t.schema, Xl(t, "error"));
    return wc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: d,
      validate: w,
      registerCheckbox: (v) => {
        v && f.value === s.value && (f.value = v);
      }
    }, Ya(o.attrs));
  },
  components: {
    InputSubText: za
  }
});
const f2 = window.Vue.openBlock, h2 = window.Vue.createElementBlock, Dm = window.Vue.createElementVNode;
var p2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const m2 = {}, w2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V2 = /* @__PURE__ */ Dm("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), v2 = /* @__PURE__ */ Dm("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), T2 = [
  V2,
  v2
];
function g2(t, o) {
  return f2(), h2("svg", w2, T2);
}
var U2 = /* @__PURE__ */ p2(m2, [["render", g2]]);
const Dh = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const Xr = window.Vue.defineComponent, Po = window.Vue.resolveComponent, Gt = window.Vue.openBlock, Ir = window.Vue.createElementBlock, R2 = window.Vue.createVNode, Wa = window.Vue.createBlock, N2 = window.Vue.withModifiers, _r = window.Vue.inject, jo = window.Vue.computed, y2 = window.Vue.normalizeClass, Nn = window.Vue.createElementVNode, k2 = window.Vue.normalizeStyle, Vc = window.Vue.toDisplayString, ga = window.Vue.renderSlot, Oo = window.Vue.createCommentVNode, M2 = window.Vue.pushScopeId, Z2 = window.Vue.popScopeId, b2 = window.Vue.withDirectives, J2 = window.Vue.vShow, vc = window.Vue.ref, Oh = window.Vue.toRef, Qh = window.Vue.nextTick, Tc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Yc = window.Vue.provide, zh = window.Vue.isRef, E2 = window.Vue.onBeforeUnmount, S2 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, F2 = Xr({
  props: S2,
  components: {
    FeatherIcon: se
  }
}), ti = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, A2 = ["title"];
function W2(t, o, r, s, a, u) {
  const d = Po("FeatherIcon");
  return Gt(), Ir("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    R2(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, A2);
}
const C2 = /* @__PURE__ */ ti(F2, [["render", W2], ["__scopeId", "data-v-8bb27a5c"]]), x2 = Xr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return $o;
    }
  },
  components: {
    ActionIcon: C2
  }
});
function B2(t, o, r, s, a, u) {
  const d = Po("ActionIcon");
  return Gt(), Wa(d, {
    onClick: o[0] || (o[0] = N2((f) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const I2 = /* @__PURE__ */ ti(x2, [["render", B2]]), D2 = Xr({
  computed: {
    errorIcon() {
      return gm;
    }
  },
  components: {
    FeatherIcon: se
  }
});
function O2(t, o, r, s, a, u) {
  const d = Po("FeatherIcon");
  return Gt(), Wa(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const Q2 = /* @__PURE__ */ ti(D2, [["render", O2], ["__scopeId", "data-v-2b61105f"]]), z2 = {
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
}, G2 = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, Y2 = Xr({
  emits: G2,
  props: z2,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const t = _r(
      "wrapperOptions",
      {}
    ), o = _r(
      "validationErrorMessage",
      !1
    ), r = jo(() => t.error ? t.error : o && o.value ? o.value : !1);
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
    ClearIcon: I2,
    ErrorIcon: Q2
  }
}), Om = (t) => (M2("data-v-ab1739ff"), t = t(), Z2(), t), _2 = { class: "feather-input-border" }, H2 = /* @__PURE__ */ Om(() => /* @__PURE__ */ Nn("div", { class: "pre-border" }, null, -1)), P2 = ["for"], j2 = /* @__PURE__ */ Om(() => /* @__PURE__ */ Nn("div", { class: "post-border" }, null, -1)), X2 = { class: "prefix" }, L2 = { class: "post" };
function $2(t, o, r, s, a, u) {
  const d = Po("ClearIcon"), f = Po("ErrorIcon");
  return Gt(), Ir("div", {
    class: y2(["feather-input-wrapper-container", t.containerCls])
  }, [
    Nn("div", _2, [
      H2,
      Nn("div", {
        class: "label-border",
        style: k2({ width: t.labelWidth })
      }, [
        Nn("label", {
          class: "feather-input-label",
          for: t.inputId,
          "data-ref-id": "feather-form-element-label"
        }, Vc(t.label), 9, P2)
      ], 4),
      j2
    ]),
    Nn("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Nn("div", X2, [
        ga(t.$slots, "pre", {}, void 0, !0)
      ]),
      ga(t.$slots, "default", {}, void 0, !0),
      Nn("div", L2, [
        t.showClear && t.computedClearText ? (Gt(), Wa(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Oo("", !0),
        t.error ? (Gt(), Wa(f, { key: 1 })) : Oo("", !0),
        ga(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const q2 = /* @__PURE__ */ ti(Y2, [["render", $2], ["__scopeId", "data-v-ab1739ff"]]), K2 = Xr({
  setup() {
    const t = _r(
      "subTextOptions",
      {}
    ), o = _r(
      "validationErrorMessage",
      !1
    ), r = jo(() => t.error ? t.error : o && o.value ? o.value : "");
    return { ...t, error: r };
  }
}), eE = { class: "feather-input-sub-text" }, tE = {
  key: 0,
  class: "feather-input-spacer"
}, nE = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, rE = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function oE(t, o, r, s, a, u) {
  return b2((Gt(), Ir("div", eE, [
    !t.hint && !t.error.length ? (Gt(), Ir("div", tE, "\xA0")) : Oo("", !0),
    t.hint && !t.error.length ? (Gt(), Ir("div", nE, Vc(t.hint), 1)) : Oo("", !0),
    t.error.length > 0 ? (Gt(), Ir("div", rE, Vc(t.error), 1)) : Oo("", !0),
    ga(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [J2, !t.inline || t.hint || t.error.length]
  ]);
}
const iE = /* @__PURE__ */ ti(K2, [["render", oE], ["__scopeId", "data-v-f0789880"]]), aE = {
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
  props: aE,
  setup(t) {
    const o = _r(
      "featherFormErrors",
      vc([])
    ), r = Oh(t, "errorList"), s = jo(() => {
      var v;
      return (v = r.value) != null && v.length ? r.value : o.value;
    }), a = Oh(t, "generalError"), u = (v) => {
      document.getElementById(v).focus();
    }, d = (v) => v.replace(/ \*$/, ""), f = vc(), w = (v) => `${d(v.label)} - ${v.message}`, g = jo(() => (s.value.length && Qh(() => f.value.focus()), t.headingText(s.value)));
    return Tc(a, (v) => {
      v.length && Qh(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: g,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const sE = (t, o, r, s, a) => {
  const u = _r("featherForm", !1);
  if (s && u && t.value) {
    const d = vc("");
    Yc("validationErrorMessage", d);
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
      } catch (v) {
        const R = v;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, g = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return a && zh(a) && Tc(a, () => {
      u.runValidation();
    }), Tc(
      t,
      (v, R) => {
        v && u && u.register(v, g), R && u && u.deregister(R);
      },
      { immediate: !0 }
    ), E2(() => {
      u.deregister(t.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, lE = (t) => ({
  inherittedAttrs: jo(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), cE = {
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
}, uE = (t) => {
  Yc("subTextOptions", t);
}, dE = {
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
}, fE = (t) => {
  Yc("wrapperOptions", t);
}, hE = window.Vue.defineComponent, Ll = window.Vue.toRef, pE = window.Vue.computed, Gh = window.Vue.resolveComponent, Yh = window.Vue.openBlock, _h = window.Vue.createElementBlock, Hh = window.Vue.mergeProps, Ph = window.Vue.createVNode, mE = window.Vue.normalizeClass, jh = window.Vue.withCtx, wE = window.Vue.createElementVNode, VE = window.Vue.toDisplayString, vE = window.Vue.createCommentVNode, TE = {
  ...dE,
  ...cE,
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
}, gE = {
  "update:modelValue": (t) => !0
}, UE = hE({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: gE,
  props: TE,
  setup(t, o) {
    uE(t), fE(t);
    const r = Ll(t, "id"), s = pE(() => r.value ? r.value : Dh("feather-textarea-label")), { validate: a } = sE(
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
      ...lE(o.attrs)
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
    InputSubText: iE,
    InputWrapper: q2
  }
}), RE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, NE = ["maxlength"], yE = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function kE(t, o, r, s, a, u) {
  const d = Gh("InputWrapper"), f = Gh("InputSubText");
  return Yh(), _h("div", Hh(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    Ph(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: mE(["feather-textarea-content", t.contentCls])
    }, {
      default: jh(() => [
        wE("textarea", Hh(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, NE)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Ph(f, { id: t.descriptionId }, {
      right: jh(() => [
        t.maxlength ? (Yh(), _h("div", yE, VE(t.charCount), 1)) : vE("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const ME = /* @__PURE__ */ RE(UE, [["render", kE], ["__scopeId", "data-v-eee43a95"]]), ZE = window.Pinia.defineStore, Qm = ZE("appStore", {
  state: () => ({
    showError: !1
  }),
  actions: {
    showErrorMsg() {
      this.showError = !0, setTimeout(() => {
        this.showError = !1;
      }, 1800);
    }
  }
}), bE = window.Vue.defineComponent, Xh = window.Vue.toDisplayString, Zo = window.Vue.createElementVNode, Qn = window.Vue.unref, Mr = window.Vue.openBlock, Lh = window.Vue.createBlock, bo = window.Vue.createCommentVNode, $h = window.Vue.createVNode, na = window.Vue.createElementBlock, JE = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const EE = { class: "row" }, SE = { class: "label" }, FE = { class: "action-icons" }, AE = { class: "icon-btn" }, WE = {
  key: 0,
  class: "icon-btn"
}, CE = {
  key: 1,
  class: "icon-btn"
}, xE = {
  key: 0,
  class: "text"
}, BE = /* @__PURE__ */ bE({
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
    var g;
    const o = t, r = Pr(), s = Qm(), a = ref(!1), u = ref((g = o.memo) == null ? void 0 : g.body);
    watch(o, () => {
      var v;
      u.value = (v = o.memo) == null ? void 0 : v.body, a.value = !1;
    });
    const d = () => {
      a.value = !a.value;
    }, f = async () => {
      a.value = !1, await CN(o.id, o.type) ? (u.value = "", r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg();
    }, w = async () => {
      a.value = !1, u.value && u.value !== "" && (await WN(o.id, o.type, u.value) ? (r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg());
    };
    return (v, R) => (Mr(), na("div", {
      class: JE([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Zo("div", EE, [
        Zo("div", SE, Xh(t.label), 1),
        Zo("div", FE, [
          Zo("div", AE, [
            a.value ? bo("", !0) : (Mr(), Lh(Qn(se), {
              key: 0,
              icon: Qn(U2),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: d
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Mr(), na("div", WE, [
            $h(Qn(se), {
              icon: Qn(Wc),
              "aria-hidden": "true",
              class: "icon save",
              onClick: w
            }, null, 8, ["icon"])
          ])) : bo("", !0),
          u.value && u.value != "" || a.value ? (Mr(), na("div", CE, [
            $h(Qn(se), {
              icon: Qn($o),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: f
            }, null, 8, ["icon"])
          ])) : bo("", !0)
        ])
      ]),
      Zo("div", null, [
        !a.value && u.value != null ? (Mr(), na("div", xE, Xh(u.value), 1)) : bo("", !0),
        a.value ? (Mr(), Lh(Qn(ME), {
          key: 1,
          class: "textarea",
          modelValue: u.value,
          "onUpdate:modelValue": R[0] || (R[0] = (y) => u.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : bo("", !0)
      ])
    ], 2));
  }
});
const Ca = /* @__PURE__ */ be(BE, [["__scopeId", "data-v-2c1f70fc"]]), IE = window.Vue.defineComponent, $l = window.Vue.unref, Jo = window.Vue.createVNode, ra = window.Vue.toDisplayString, an = window.Vue.createElementVNode, qh = window.Vue.createTextVNode, DE = window.Vue.openBlock, OE = window.Vue.createElementBlock, QE = window.Vue.createCommentVNode, zE = window.Vue.pushScopeId, GE = window.Vue.popScopeId, zm = (t) => (zE("data-v-b8aa43af"), t = t(), GE(), t), YE = {
  key: 0,
  class: "card"
}, _E = { class: "row" }, HE = { class: "title" }, PE = ["innerHTML"], jE = /* @__PURE__ */ zm(() => /* @__PURE__ */ an("strong", null, "First Event", -1)), XE = /* @__PURE__ */ zm(() => /* @__PURE__ */ an("strong", null, "Last Event", -1)), LE = { class: "section memo-boxes" }, $E = /* @__PURE__ */ IE({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, s = ref(!1), a = ref(r.alarm);
    watch(r, () => {
      a.value = r.alarm, s.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const u = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (f) => {
      const w = await fm(f);
      w && (a.value = w);
    };
    return (f, w) => {
      var g, v, R, y, x;
      return a.value ? (DE(), OE("div", YE, [
        an("div", null, [
          an("div", _E, [
            Jo($l(Gc), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (F) => s.value = F),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            an("div", HE, ra(a.value.nodeLabel) + " - " + ra(a.value.id), 1),
            Jo(vm, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"])
          ]),
          an("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, PE),
          an("div", null, [
            jE,
            qh(" - " + ra($l(Zn)(a.value.firstEventTime)), 1)
          ]),
          an("div", null, [
            XE,
            qh(" - " + ra($l(Zn)(a.value.lastEventTime)), 1)
          ]),
          an("div", LE, [
            Jo(Ca, {
              id: (v = a.value) == null ? void 0 : v.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = a.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Jo(Ca, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (x = a.value) == null ? void 0 : x.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Jo(xm, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : QE("", !0);
    };
  }
});
const qE = /* @__PURE__ */ be($E, [["__scopeId", "data-v-b8aa43af"]]), KE = window.Vue.defineComponent, eS = window.Vue.normalizeClass, tS = window.Vue.openBlock, nS = window.Vue.createElementBlock, rS = window.Vue.createCommentVNode, oS = /* @__PURE__ */ KE({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (tS(), nS("span", {
      key: 0,
      class: eS(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : rS("", !0);
  }
});
const iS = /* @__PURE__ */ be(oS, [["__scopeId", "data-v-e08880d6"]]), aS = window.Vue.defineComponent, Qo = window.Vue.createElementVNode, nn = window.Vue.unref, Gm = window.Vue.createTextVNode, Kh = window.Vue.normalizeClass, oa = window.Vue.withCtx, Zr = window.Vue.createVNode, ep = window.Vue.renderList, tp = window.Vue.Fragment, zn = window.Vue.openBlock, Eo = window.Vue.createElementBlock, sS = window.Vue.toDisplayString, np = window.Vue.createBlock, rp = window.Vue.createCommentVNode, lS = window.Vue.pushScopeId, cS = window.Vue.popScopeId, Ym = (t) => (lS("data-v-e75f8105"), t = t(), cS(), t), uS = { class: "container" }, dS = { class: "row" }, fS = /* @__PURE__ */ Ym(() => /* @__PURE__ */ Qo("div", { class: "title" }, "Alarms", -1)), hS = /* @__PURE__ */ Gm(" ALL "), pS = { class: "row actions" }, mS = /* @__PURE__ */ Ym(() => /* @__PURE__ */ Qo("span", null, "Clear", -1)), wS = { class: "section" }, VS = {
  key: 0,
  class: "alarm-list"
}, op = window.Vue.ref, vS = window.Vue.watch, TS = window.Vue.computed, gS = window.Vue.reactive, US = /* @__PURE__ */ aS({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = Pr(), s = op(!1), a = TS(() => me.exports.keys(me.exports.groupBy(o.alarms, "severity"))), u = op(["all"]), d = gS({
      selectedAlarms: [],
      alarms: o.alarms
    }), f = (v) => {
      u.value = u.value.filter((R) => R !== "all"), u.value.includes(v) ? u.value = u.value.filter((R) => R !== v) : u.value.push(v), v === "all" || u.value.length === 0 ? (u.value = ["all"], d.alarms = o.alarms) : d.alarms = o.alarms.filter(
        (R) => u.value.includes(R.severity)
      );
    };
    vS(o, () => {
      u.value = ["all"], d.alarms = o.alarms, d.selectedAlarms = [], s.value = !1;
    });
    const w = (v) => {
      d.selectedAlarms.includes(v) ? me.exports.remove(d.selectedAlarms, (R) => R == v) : d.selectedAlarms.push(v);
    }, g = async () => {
      await JN(d.selectedAlarms), r.getSituation(o.situationId), d.selectedAlarms = [], s.value = !1;
    };
    return (v, R) => (zn(), Eo("div", uS, [
      Qo("div", dS, [
        fS,
        nn(a).length > 1 ? (zn(), np(nn(OZ), {
          key: u.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: oa(() => [
            Zr(nn(yh), {
              class: Kh({ clicked: u.value.includes("all") }),
              onClick: R[0] || (R[0] = (y) => f("all"))
            }, {
              default: oa(() => [
                hS
              ]),
              _: 1
            }, 8, ["class"]),
            (zn(!0), Eo(tp, null, ep(nn(a), (y) => (zn(), np(nn(yh), {
              class: Kh({ clicked: u.value.includes(y) }),
              key: y,
              onClick: (x) => f(y)
            }, {
              default: oa(() => [
                Zr(iS, { severity: y }, null, 8, ["severity"]),
                Gm(sS(y), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })) : rp("", !0)
      ]),
      Qo("div", pS, [
        Zr(nn(Gc), {
          modelValue: s.value,
          "onUpdate:modelValue": R[1] || (R[1] = (y) => s.value = y),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Zr(nn(kn), {
          class: "acction-btn",
          onClick: R[2] || (R[2] = () => g())
        }, {
          default: oa(() => [
            Zr(nn(se), {
              icon: nn(Cm),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            mS
          ]),
          _: 1
        })
      ]),
      Qo("div", wS, [
        d.alarms.length > 0 ? (zn(), Eo("div", VS, [
          (zn(!0), Eo(tp, null, ep(d.alarms, (y) => (zn(), Eo("div", {
            key: y.id
          }, [
            Zr(qE, {
              alarm: y,
              selectAll: s.value,
              "situation-id": o.situationId,
              onAlarmSelected: w
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : rp("", !0)
      ])
    ]));
  }
});
const RS = /* @__PURE__ */ be(US, [["__scopeId", "data-v-e75f8105"]]), NS = "/whoami", yS = async () => {
  try {
    const t = await Jn.get(NS);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, kS = window.Pinia.defineStore, ni = kS("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await yS();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await DN();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await pm(t);
        this.allowSave = o;
      }
    }
  }
}), MS = window.Vue.defineComponent, Wt = window.Vue.createVNode, dt = window.Vue.unref, ql = window.Vue.normalizeClass, ia = window.Vue.toDisplayString, Gn = window.Vue.openBlock, Yn = window.Vue.createElementBlock, aa = window.Vue.createCommentVNode, ZS = window.Vue.withCtx, Ct = window.Vue.createElementVNode, bS = window.Vue.createTextVNode, JS = window.Vue.Fragment, ES = window.Vue.pushScopeId, SS = window.Vue.popScopeId, FS = (t) => (ES("data-v-27dec6d4"), t = t(), SS(), t), AS = { class: "section" }, WS = { class: "action-section" }, CS = {
  key: 0,
  class: "btn-row"
}, xS = { key: 0 }, BS = { key: 1 }, IS = {
  key: 0,
  class: "situation-detail"
}, DS = { class: "situation-info" }, OS = { class: "id" }, QS = { key: 0 }, zS = ["innerHTML"], GS = /* @__PURE__ */ FS(() => /* @__PURE__ */ Ct("p", null, null, -1)), YS = { class: "boxes" }, _S = { class: "parameters" }, HS = { class: "section memo-boxes" }, PS = { key: 0 }, ip = window.Vue.ref, jS = window.Vue.watch, XS = /* @__PURE__ */ MS({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = Pr(), a = ft.REJECTED, u = ni(), d = ip(r.situationInfo.status), f = ip(r.situationInfo);
    jS(r, () => {
      d.value = r.situationInfo.status || "", f.value = r.situationInfo;
    });
    const w = (v) => {
      var R, y;
      mm((R = r.situationInfo) == null ? void 0 : R.id, v.toLowerCase()), d.value = v, o("situation-status-changed", v, (y = r.situationInfo) == null ? void 0 : y.id);
    }, g = () => {
      var v;
      s.selectedSituation = (v = r.situationInfo) == null ? void 0 : v.id, s.getSituations();
    };
    return (v, R) => {
      var y, x, F, W, B, A, S, E, D, M, Y, $;
      return Gn(), Yn(JS, null, [
        Ct("div", AS, [
          Ct("div", WS, [
            Wt(xm, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id,
              onActionClicked: g
            }, null, 8, ["alarm", "situation-id"]),
            dt(u).allowSave ? (Gn(), Yn("div", CS, [
              Wt(dt(kn), {
                class: ql(["btn", { rejected: d.value == dt(a) }]),
                onClick: R[0] || (R[0] = () => w(dt(a)))
              }, {
                default: ZS(() => [
                  Wt(dt(se), {
                    icon: dt(wm),
                    "aria-hidden": "true",
                    class: ql(["icon reject", { rejected: d.value == dt(a) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == dt(a) ? (Gn(), Yn("span", xS, ia(dt(a)), 1)) : (Gn(), Yn("span", BS, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : aa("", !0)
          ]),
          f.value ? (Gn(), Yn("div", IS, [
            Ct("div", {
              class: ql(["severity-line", [`${(x = (y = f.value) == null ? void 0 : y.severity) == null ? void 0 : x.toLowerCase()}-bg dark`]])
            }, null, 2),
            Ct("div", DS, [
              Ct("div", OS, [
                Ct("div", null, [
                  bS(" Situation - " + ia((F = f.value) == null ? void 0 : F.id) + " - affecting " + ia(dt(me.exports.size)(dt(me.exports.groupBy)((W = f.value) == null ? void 0 : W.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (Gn(), Yn("span", QS, "having " + ia(f.value.alarms.length) + " alarms ", 1)) : aa("", !0)
                ]),
                Wt(vm, {
                  severity: (B = f.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Ct("span", {
                innerHTML: f.value.description
              }, null, 8, zS),
              GS,
              Ct("div", YS, [
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
            Ct("div", _S, [
              Wt(Pk, {
                alarms: (A = f.value) == null ? void 0 : A.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : aa("", !0),
          Ct("div", HS, [
            Wt(Ca, {
              id: (S = f.value) == null ? void 0 : S.id,
              situationId: (E = f.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (D = f.value) == null ? void 0 : D.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Wt(Ca, {
              id: (M = f.value) == null ? void 0 : M.id,
              situationId: (Y = f.value) == null ? void 0 : Y.id,
              label: "Journal Memo",
              type: "journal",
              memo: ($ = f.value) == null ? void 0 : $.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length > 0 ? (Gn(), Yn("div", PS, [
          Wt(RS, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : aa("", !0)
      ], 64);
    };
  }
});
const LS = /* @__PURE__ */ be(XS, [["__scopeId", "data-v-27dec6d4"]]);
const $S = window.Vue.openBlock, qS = window.Vue.createElementBlock, KS = window.Vue.createElementVNode;
var eF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tF = {}, nF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rF = /* @__PURE__ */ KS("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), oF = [
  rF
];
function iF(t, o) {
  return $S(), qS("svg", nF, oF);
}
var _m = /* @__PURE__ */ eF(tF, [["render", iF]]);
const aF = window.Vue.watch, sF = window.Vue.onBeforeUnmount, lF = window.Vue.ref, cF = window.Vue.onMounted, uF = (t) => {
  const o = lF(!1);
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
  return cF(() => {
    const d = aF(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    sF(() => {
      d(), u();
    });
  }), o;
}, dF = window.Vue.watch, fF = window.Vue.onBeforeUnmount, hF = window.Vue.ref, pF = window.Vue.onMounted, mF = (t, o) => {
  const r = hF(!1), s = (d) => {
    d.target === window && o(d);
  }, a = (d) => {
    let f = [];
    Array.isArray(t.value) ? f = t.value : f = [t.value], f.some((g) => g && g.contains(d.target)) || o(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return pF(() => {
    const d = dF(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    fF(() => {
      d(), u();
    });
  }), r;
}, wF = window.Vue.watch, VF = window.Vue.onBeforeUnmount, vF = window.Vue.ref, Hm = (t, o) => {
  const r = vF(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, f = wF([t, r], ([w, g], v) => {
    v && v.length && v[0] && v[0].removeEventListener("scroll", u, !0), g && w ? w.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return VF(() => {
    f(), d();
  }), r;
}, TF = window.Vue.defineComponent, rn = window.Vue.ref, ap = window.Vue.toRef, gF = window.Vue.onMounted, UF = window.Vue.watch, sp = window.Vue.computed, RF = window.Vue.nextTick, lp = window.Vue.openBlock, cp = window.Vue.createElementBlock, up = window.Vue.renderSlot, NF = window.Vue.normalizeClass, yF = window.Vue.normalizeStyle, kF = window.Vue.createCommentVNode;
var MF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZF = {
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
}, bF = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, JF = TF({
  emits: bF,
  props: ZF,
  setup(t, o) {
    const r = rn(), s = rn(), a = ap(t, "open"), u = ap(t, "noExpand"), d = rn("auto"), f = rn(), w = rn(t.triggerId || le("feather-menu-trigger")), g = rn(le("feather-menu-dropdown")), v = rn(""), R = rn("");
    gF(() => {
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
      const M = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", RF(() => {
        let { height: Y, width: $ } = s.value.getBoundingClientRect();
        const q = x(), De = q.height, Le = q.width;
        t.fill && $ < M.width ? (d.value = M.width + "px", $ = M.width) : d.value = $ + "px";
        let we = 0;
        De - M.bottom < Y && M.top >= Y ? (we = M.top - Y, t.cover && (we += M.height)) : (we = M.bottom, t.cover && (we -= M.height));
        let Ve = t.right ? M.right - $ : M.left;
        !t.right && M.right >= $ && Le - M.left < $ && (Ve = M.right - $), t.right && M.right <= $ && Le - M.left > $ && (Ve = M.left), R.value = `${Ve}px`, v.value = `${we}px`, y.value = !1;
      });
    }, B = mF(r, (M) => {
      o.emit("outside-click", M);
    }), A = uF(F), S = Hm(f, F);
    UF([a, s], ([M, Y]) => {
      M && Y && F(), B.value = M, A.value = M, S.value = M;
    });
    const E = sp(() => {
      const M = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (M["aria-controls"] = g.value), u.value || (M["aria-expanded"] = a.value ? "true" : "false"), M;
    }), D = sp(() => ({
      click: (M) => {
        o.emit("trigger-click", M);
      }
    }));
    return {
      positionTop: v,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: E,
      triggerListeners: D,
      menuId: g,
      menu: s,
      menuWidth: d,
      root: r,
      calculatePosition: F,
      calculating: y
    };
  }
}), EF = ["data-ref-id"], SF = ["data-ref-id", "id"];
function FF(t, o, r, s, a, u) {
  return lp(), cp("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    up(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (lp(), cp("div", {
      key: 0,
      class: NF(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: yF({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      up(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, SF)) : kF("", !0)
  ], 8, EF);
}
var Pm = /* @__PURE__ */ MF(JF, [["render", FF], ["__scopeId", "data-v-f75af406"]]);
const AF = window.Vue.defineComponent, WF = window.Vue.openBlock, CF = window.Vue.createElementBlock, xF = window.Vue.normalizeClass, BF = window.Vue.pushScopeId, IF = window.Vue.popScopeId, gc = window.Vue.createElementVNode;
var DF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OF = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, QF = {
  click: (t) => !0
}, zF = AF({
  emits: QF,
  props: OF,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), jm = (t) => (BF("data-v-07e020f5"), t = t(), IF(), t), GF = /* @__PURE__ */ jm(() => /* @__PURE__ */ gc("div", { class: "track" }, null, -1)), YF = /* @__PURE__ */ jm(() => /* @__PURE__ */ gc("div", { class: "switcher" }, [
  /* @__PURE__ */ gc("div", { class: "switch-circle" })
], -1)), _F = [
  GF,
  YF
];
function HF(t, o, r, s, a, u) {
  return WF(), CF("div", {
    class: xF(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, _F, 2);
}
var PF = /* @__PURE__ */ DF(zF, [["render", HF], ["__scopeId", "data-v-07e020f5"]]), jF = Object.defineProperty, XF = Object.defineProperties, LF = Object.getOwnPropertyDescriptors, dp = Object.getOwnPropertySymbols, $F = Object.prototype.hasOwnProperty, qF = Object.prototype.propertyIsEnumerable, fp = (t, o, r) => o in t ? jF(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, hp = (t, o) => {
  for (var r in o || (o = {}))
    $F.call(o, r) && fp(t, r, o[r]);
  if (dp)
    for (var r of dp(o))
      qF.call(o, r) && fp(t, r, o[r]);
  return t;
}, pp = (t, o) => XF(t, LF(o));
const _c = window.Vue.defineComponent, _n = window.Vue.h, KF = window.Vue.openBlock, eA = window.Vue.createElementBlock, tA = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Xm = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nA = {
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
}, rA = _c({
  inheritAttrs: !1,
  props: nA,
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
      return _n("li", pp(hp({}, this.$attrs), {
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
    const u = _n("a", pp(hp({}, this.$attrs), {
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
var ri = /* @__PURE__ */ Xm(rA, [["__scopeId", "data-v-7c46b2b3"]]);
_c({
  components: {
    FeatherListItem: ri
  }
});
const oA = {}, iA = { class: "feather-list" };
function aA(t, o) {
  return KF(), eA("ul", iA, [
    tA(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Hc = /* @__PURE__ */ Xm(oA, [["render", aA], ["__scopeId", "data-v-941a1d50"]]);
const sA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, lA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
_c({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: sA,
  props: lA,
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
  components: { SwitchRender: PF, FeatherListItem: ri }
});
const Xo = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const s = getComputedStyle(t);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
var cA = Object.defineProperty, uA = Object.defineProperties, dA = Object.getOwnPropertyDescriptors, mp = Object.getOwnPropertySymbols, fA = Object.prototype.hasOwnProperty, hA = Object.prototype.propertyIsEnumerable, wp = (t, o, r) => o in t ? cA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Uc = (t, o) => {
  for (var r in o || (o = {}))
    fA.call(o, r) && wp(t, r, o[r]);
  if (mp)
    for (var r of mp(o))
      hA.call(o, r) && wp(t, r, o[r]);
  return t;
}, pA = (t, o) => uA(t, dA(o));
const Lm = window.Vue.defineComponent, Ln = window.Vue.resolveComponent, Ua = window.Vue.openBlock, Vp = window.Vue.createBlock, Ra = window.Vue.mergeProps, $n = window.Vue.withCtx, $m = window.Vue.createElementBlock, mA = window.Vue.Fragment, wA = window.Vue.renderList, VA = window.Vue.createTextVNode, vA = window.Vue.toDisplayString, TA = window.Vue.computed, vp = window.Vue.toRef, So = window.Vue.createVNode, Tp = window.Vue.toHandlers, gA = window.Vue.renderSlot, UA = window.Vue.normalizeClass, RA = window.Vue.createElementVNode;
var qm = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NA = Lm({
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
        Xo(o, this.$refs.list.$el);
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
    FeatherList: Hc,
    FeatherListItem: ri
  }
});
function yA(t, o, r, s, a, u) {
  const d = Ln("FeatherListItem"), f = Ln("FeatherList");
  return Ua(), Vp(f, Ra(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: $n(() => [
      (Ua(!0), $m(mA, null, wA(t.options, (w, g) => (Ua(), Vp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(g),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(g),
        selected: t.isSelected(g),
        onClick: (v) => t.select(w)
      }, {
        default: $n(() => [
          VA(vA(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var kA = /* @__PURE__ */ qm(NA, [["render", yA], ["__scopeId", "data-v-eae820da"]]);
const MA = pA(Uc(Uc({}, ym), _a), {
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
}), ZA = {
  "update:modelValue": (t) => !0
}, bA = Lm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ZA,
  props: MA,
  setup(t, o) {
    Ha(t), km(t);
    const r = TA(() => le("feather-select-input")), { validate: s } = Ga(r, vp(t, "modelValue"), t.label, t.schema, vp(t, "error"));
    return Uc({
      inputId: r,
      validate: s
    }, Ya(o.attrs));
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
    icon: () => _m
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
      Gr(this.delayTimeout), this.delayTimeout = zr(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Nm,
    InputSubText: za,
    FeatherMenu: Pm,
    List: kA,
    FeatherIcon: se
  }
});
function JA(t, o, r, s, a, u) {
  const d = Ln("FeatherIcon"), f = Ln("InputWrapper"), w = Ln("List"), g = Ln("FeatherMenu"), v = Ln("InputSubText");
  return Ua(), $m("div", Ra(t.inherittedAttrs, { class: "feather-select-container" }), [
    So(g, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: $n((R) => [
        So(f, Ra({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Tp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: $n(() => [
            gA(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: $n(() => [
            So(d, {
              class: UA(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: $n(() => [
            RA("input", Ra(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Tp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: $n(() => [
        So(w, {
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
    So(v, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var EA = /* @__PURE__ */ qm(bA, [["render", JA], ["__scopeId", "data-v-ecb32d90"]]);
const SA = window.Vue.openBlock, FA = window.Vue.createElementBlock, Km = window.Vue.createElementVNode;
var AA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WA = {}, CA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xA = /* @__PURE__ */ Km("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), BA = /* @__PURE__ */ Km("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), IA = [
  xA,
  BA
];
function DA(t, o) {
  return SA(), FA("svg", CA, IA);
}
var OA = /* @__PURE__ */ AA(WA, [["render", DA]]);
const Na = window.Vue.openBlock, Rc = window.Vue.createElementBlock, e1 = window.Vue.createElementVNode, QA = window.Vue.defineComponent, Hn = window.Vue.ref, zA = window.Vue.provide, gp = window.Vue.computed, GA = window.Vue.onUnmounted, Up = window.Vue.toRef, YA = window.Vue.resolveComponent, _A = window.Vue.Fragment, HA = window.Vue.createBlock, PA = window.Vue.Teleport, Rp = window.Vue.createVNode, jA = window.Vue.Transition, XA = window.Vue.withCtx, LA = window.Vue.normalizeClass, $A = window.Vue.normalizeStyle, qA = window.Vue.toDisplayString, KA = window.Vue.createCommentVNode, eW = window.Vue.renderSlot, Kl = window.Vue.nextTick;
var t1 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tW = {}, nW = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, rW = /* @__PURE__ */ e1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), oW = [
  rW
];
function iW(t, o) {
  return Na(), Rc("svg", nW, oW);
}
var aW = /* @__PURE__ */ t1(tW, [["render", iW]]), xe = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(xe || {}), sn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(sn || {});
const sW = (t, o, r, s = 9) => {
  const a = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= o.height + s && d.push(xe.top), a >= o.height + s && d.push(xe.bottom);
  const f = [];
  u >= o.width + s && f.push(xe.right), t.left >= o.width + s && f.push(xe.left);
  let w = [...f, ...d];
  return (r === xe.top || r === xe.bottom) && (w = [...d, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, lW = (t, o, r, s, a = 28) => {
  if (t === xe.left || t === xe.right)
    return sn.center;
  const u = o.left + o.width / 2, d = window.innerWidth - o.right, f = [], w = u, g = d + o.width / 2, v = r.width - a, R = r.width / 2;
  return w >= R && g >= R && f.push(sn.center), g >= v && f.push(sn.left), w >= v && f.push(sn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, cW = {
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
}, uW = QA({
  props: cW,
  setup(t) {
    const o = Hn(!1), r = Hn(!1), s = le("feather-tooltip-trigger"), a = le("feather-tooltip"), u = "data-feather-tooltip";
    zA("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      Gr(d), o.value || (d = zr(W, t.enterDelay));
    }, w = () => {
      Gr(d), d = zr(B, t.exitDelay);
    }, g = (we) => {
      we.keyCode === L.ESCAPE && (we.preventDefault(), B(!0));
    }, v = gp(() => ({
      [u]: s,
      "aria-describedby": a
    })), R = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: g
    }, y = Hn(document), x = Hm(y, () => B(!0));
    GA(() => B(!0));
    const F = () => document.getElementById(a), W = () => {
      r.value = !1, o.value = !0, Kl(() => {
        const we = F();
        Le(we), o.value = !1, Kl(() => {
          r.value = !0, o.value = !0, x.value = !0;
        });
      });
    }, B = (we = !1) => {
      Y.value = "", M.value = "", $.value = "", q.value = "", o.value = !1, we && (r.value = !1), x.value = !1;
    }, A = Up(t, "placement"), S = Up(t, "pointerAlignment"), E = 8, D = 24, M = Hn(""), Y = Hn(""), $ = Hn(""), q = Hn(""), De = gp(() => q.value ? "p-" + q.value : !1), Le = (we) => {
      const Ve = document.querySelector(`[${u}=${s}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      Kl(() => {
        const Te = Ve.getBoundingClientRect(), Ne = we.getBoundingClientRect(), ce = sW(Te, Ne, A.value, E), Fe = lW(ce, Te, Ne, S.value, D);
        $.value = Fe.toString(), q.value = ce.toString();
        let Ae = 0, _e = 0;
        if ((ce === xe.left || ce === xe.right) && (Ae = Te.top + Te.height / 2 - Ne.height / 2, ce === xe.left && (_e = Te.left - Ne.width - E), ce === xe.right && (_e = Te.right)), ce === xe.top || ce === xe.bottom) {
          Ae = Te.top - Ne.height - E, ce === xe.bottom && (Ae = Te.bottom);
          const $r = Te.left + Te.width / 2;
          switch (Fe) {
            case sn.center:
              _e = $r - Ne.width / 2;
              break;
            case sn.left:
              _e = $r - D;
              break;
            case sn.right:
              _e = $r - Ne.width + D;
              break;
          }
        }
        M.value = Ae.toString() + "px", Y.value = _e.toString() + "px";
      });
    };
    return {
      attrs: v,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: $,
      placementClass: De,
      top: M,
      left: Y,
      tooltipID: a
    };
  },
  components: {
    Pointer: aW
  }
}), dW = ["id"];
function fW(t, o, r, s, a, u) {
  const d = YA("Pointer");
  return Na(), Rc(_A, null, [
    (Na(), HA(PA, { to: "body" }, [
      Rp(jA, { css: t.animate }, {
        default: XA(() => [
          t.show ? (Na(), Rc("div", {
            key: 0,
            class: LA(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: $A({ left: t.left, top: t.top })
          }, [
            e1("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, qA(t.title), 9, dW),
            Rp(d, { class: "tooltip-pointer" })
          ], 6)) : KA("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    eW(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Np = /* @__PURE__ */ t1(uW, [["render", fW], ["__scopeId", "data-v-3da6b22e"]]);
const hW = window.Vue.defineComponent, sa = window.Vue.unref, yp = window.Vue.toHandlers, kp = window.Vue.mergeProps, Mp = window.Vue.createElementVNode, Zp = window.Vue.withCtx, bp = window.Vue.createVNode, pW = window.Vue.normalizeClass, mW = window.Vue.normalizeStyle, Jp = window.Vue.openBlock, Ep = window.Vue.createElementBlock, wW = window.Vue.createCommentVNode, VW = window.Vue.Fragment, vW = /* @__PURE__ */ hW({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(t) {
    const o = t, r = (a, u) => a && u ? (Number(u) - Number(a)) * o.proportion : 0, s = (a) => a ? (Number(a) - Number(o.minStart)) * o.proportion : 0;
    return (a, u) => (Jp(), Ep(VW, null, [
      bp(sa(Np), {
        title: sa(Zn)(t.alarm.firstEventTime)
      }, {
        default: Zp(({ attrs: d, on: f }) => [
          Mp("div", kp({ class: "circle" }, d, yp(f), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: s(t.alarm.firstEventTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      t.alarm.lastEventTime !== t.alarm.firstEventTime ? (Jp(), Ep("div", {
        key: 0,
        class: pW(["line", [`${t.alarm.severity.toLowerCase()}-bg dark`]]),
        style: mW({
          width: r(t.alarm.firstEventTime, t.alarm.lastEventTime) + "px"
        })
      }, null, 6)) : wW("", !0),
      bp(sa(Np), {
        title: sa(Zn)(t.alarm.lastEventTime)
      }, {
        default: Zp(({ attrs: d, on: f }) => [
          Mp("div", kp({ class: "circle" }, d, yp(f), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const TW = /* @__PURE__ */ be(vW, [["__scopeId", "data-v-9e17819d"]]), gW = window.Vue.openBlock, UW = window.Vue.createElementBlock, n1 = window.Vue.createElementVNode;
var RW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NW = {}, yW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kW = /* @__PURE__ */ n1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), MW = /* @__PURE__ */ n1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), ZW = [
  kW,
  MW
];
function bW(t, o) {
  return gW(), UW("svg", yW, ZW);
}
var JW = /* @__PURE__ */ RW(NW, [["render", bW]]);
const EW = window.Vue.defineComponent, SW = window.Vue.normalizeClass, ze = window.Vue.createElementVNode, br = window.Vue.toDisplayString, Tn = window.Vue.unref, la = window.Vue.createVNode, FW = window.Vue.createTextVNode, Sp = window.Vue.renderList, ec = window.Vue.Fragment, Jr = window.Vue.openBlock, Er = window.Vue.createElementBlock, AW = window.Vue.createCommentVNode, WW = window.Vue.pushScopeId, CW = window.Vue.popScopeId, xW = (t) => (WW("data-v-40347655"), t = t(), CW(), t), BW = { class: "section detail" }, IW = { class: "id" }, DW = {
  key: 0,
  class: "section"
}, OW = /* @__PURE__ */ xW(() => /* @__PURE__ */ ze("div", { class: "id" }, "Alarms", -1)), QW = { class: "action-btns" }, zW = { class: "zoom" }, GW = /* @__PURE__ */ FW(" Zoom "), YW = { class: "alarms" }, _W = { class: "times" }, HW = { class: "container" }, PW = { class: "ids" }, jW = { class: "timeline-container" }, Sr = window.Vue.ref, XW = window.Vue.watch, LW = /* @__PURE__ */ EW({
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
    ], u = Sr(a[0]), d = () => s.value / (Number(g.value) - Number(w.value)), f = Sr(o.situation.alarms), w = Sr(
      ((W = me.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : W.firstEventTime) || new Date()
    ), g = Sr(
      ((A = me.exports.maxBy((B = o.situation) == null ? void 0 : B.alarms, "lastEventTime")) == null ? void 0 : A.lastEventTime) || new Date()
    ), v = Sr(d());
    XW(o, () => {
      var S, E, D, M;
      w.value = ((E = me.exports.minBy((S = o.situation) == null ? void 0 : S.alarms, "firstEventTime")) == null ? void 0 : E.firstEventTime) || new Date(), g.value = ((M = me.exports.maxBy((D = o.situation) == null ? void 0 : D.alarms, "lastEventTime")) == null ? void 0 : M.lastEventTime) || new Date(), s.value = r, v.value = d(), f.value = o.situation.alarms, u.value = a[0];
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
        f.value = D.filter((M) => M);
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
      s.value += 100, v.value = d();
    }, x = () => {
      s.value -= 100, v.value = d();
    };
    return (S, E) => {
      var D, M;
      return Jr(), Er(ec, null, [
        ze("div", BW, [
          ze("div", {
            class: SW(["severity-line", [`${(M = (D = o.situation) == null ? void 0 : D.severity) == null ? void 0 : M.toLowerCase()}-bg dark`]])
          }, null, 2),
          ze("div", null, [
            ze("div", IW, "Situation " + br(o.situation.id), 1),
            ze("div", null, " Duration: " + br(Tn(rJ)(new Date(g.value), new Date(w.value))), 1)
          ])
        ]),
        f.value && f.value.length > 0 ? (Jr(), Er("div", DW, [
          OW,
          ze("div", QW, [
            la(Tn(EA), {
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
            ze("div", zW, [
              GW,
              ze("div", null, [
                la(Tn(se), {
                  icon: Tn(OA),
                  class: "zoom-icon",
                  onClick: y
                }, null, 8, ["icon"]),
                la(Tn(se), {
                  icon: Tn(JW),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          ze("div", YW, [
            ze("div", _W, [
              ze("div", null, br(Tn(Zn)(w.value)), 1),
              ze("div", null, br(Tn(Zn)(g.value)), 1)
            ]),
            ze("div", HW, [
              ze("div", PW, [
                (Jr(!0), Er(ec, null, Sp(f.value, (Y) => (Jr(), Er("div", {
                  class: "alarm-id",
                  key: Y.id
                }, br(Y.nodeLabel) + " - " + br(Y.id), 1))), 128))
              ]),
              ze("div", jW, [
                (Jr(!0), Er(ec, null, Sp(f.value, (Y) => (Jr(), Er("div", {
                  class: "timeline",
                  key: Y.id
                }, [
                  la(TW, {
                    alarm: Y,
                    proportion: v.value,
                    "min-start": w.value,
                    "max-end": g.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : AW("", !0)
      ], 64);
    };
  }
});
const $W = /* @__PURE__ */ be(LW, [["__scopeId", "data-v-40347655"]]), qW = window.Vue.defineComponent, r1 = window.Vue.createTextVNode, Fo = window.Vue.unref, Fr = window.Vue.withCtx, Pn = window.Vue.createVNode, KW = window.Vue.openBlock, eC = window.Vue.createElementBlock, tC = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const nC = {
  key: 0,
  class: "detail"
}, rC = /* @__PURE__ */ r1("Details"), oC = /* @__PURE__ */ r1("Metrics"), iC = /* @__PURE__ */ qW({
  __name: "SituationDetail",
  props: {
    index: null,
    forceUpdate: { type: Boolean }
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = Pr(), a = ref(s.situations[r.index]), u = (d, f) => {
      o("situation-status-changed", d, f);
    };
    return watch(r, () => {
      a.value = s.situations[r.index];
    }), (d, f) => a.value ? (KW(), eC("div", nC, [
      Pn(Fo(Uk), null, {
        tabs: Fr(() => [
          Pn(Fo(uh), null, {
            default: Fr(() => [
              rC
            ]),
            _: 1
          }),
          Pn(Fo(uh), null, {
            default: Fr(() => [
              oC
            ]),
            _: 1
          })
        ]),
        default: Fr(() => [
          Pn(Fo(dh), { class: "panel" }, {
            default: Fr(() => [
              Pn(LS, {
                "situation-info": a.value,
                onSituationStatusChanged: u
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Pn(Fo(dh), { class: "panel" }, {
            default: Fr(() => [
              Pn($W, { situation: a.value }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : tC("", !0);
  }
});
const aC = /* @__PURE__ */ be(iC, [["__scopeId", "data-v-6ec0d925"]]), sC = window.Vue.openBlock, lC = window.Vue.createElementBlock, cC = window.Vue.createElementVNode;
var uC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dC = {}, fC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hC = /* @__PURE__ */ cC("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), pC = [
  hC
];
function mC(t, o) {
  return sC(), lC("svg", fC, pC);
}
var wC = /* @__PURE__ */ uC(dC, [["render", mC]]);
const VC = window.Vue.openBlock, vC = window.Vue.createElementBlock, o1 = window.Vue.createElementVNode;
var TC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gC = {}, UC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RC = /* @__PURE__ */ o1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), NC = /* @__PURE__ */ o1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), yC = [
  RC,
  NC
];
function kC(t, o) {
  return VC(), vC("svg", UC, yC);
}
var MC = /* @__PURE__ */ TC(gC, [["render", kC]]);
const ZC = window.Vue.openBlock, bC = window.Vue.createElementBlock, JC = window.Vue.createElementVNode;
var EC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const SC = {}, FC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AC = /* @__PURE__ */ JC("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), WC = [
  AC
];
function CC(t, o) {
  return ZC(), bC("svg", FC, WC);
}
var xC = /* @__PURE__ */ EC(SC, [["render", CC]]);
const BC = window.Vue.openBlock, IC = window.Vue.createElementBlock, DC = window.Vue.createElementVNode;
var OC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QC = {}, zC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GC = /* @__PURE__ */ DC("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), YC = [
  GC
];
function _C(t, o) {
  return BC(), IC("svg", zC, YC);
}
var HC = /* @__PURE__ */ OC(QC, [["render", _C]]);
const PC = window.Vue.defineComponent, gn = window.Vue.unref, ca = window.Vue.normalizeClass, ua = window.Vue.createVNode, jC = window.Vue.openBlock, XC = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const LC = { class: "paginator" }, $C = /* @__PURE__ */ PC({
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
    return (a, u) => (jC(), XC("div", LC, [
      ua(gn(se), {
        icon: gn(wC),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => s(0))
      }, null, 8, ["icon", "class"]),
      ua(gn(se), {
        icon: gn(xC),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ua(gn(se), {
        icon: gn(HC),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ua(gn(se), {
        icon: gn(MC),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const qC = /* @__PURE__ */ be($C, [["__scopeId", "data-v-40758818"]]);
const KC = window.Vue.openBlock, ex = window.Vue.createElementBlock, tx = window.Vue.createElementVNode;
var nx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const rx = {}, ox = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ix = /* @__PURE__ */ tx("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), ax = [
  ix
];
function sx(t, o) {
  return KC(), ex("svg", ox, ax);
}
var lx = /* @__PURE__ */ nx(rx, [["render", sx]]);
const cx = window.Vue.openBlock, ux = window.Vue.createElementBlock, Pc = window.Vue.createElementVNode;
var dx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fx = {}, hx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, px = /* @__PURE__ */ Pc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), mx = /* @__PURE__ */ Pc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), wx = /* @__PURE__ */ Pc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Vx = [
  px,
  mx,
  wx
];
function vx(t, o) {
  return cx(), ux("svg", hx, Vx);
}
var Tx = /* @__PURE__ */ dx(fx, [["render", vx]]), gx = Object.defineProperty, Ux = Object.defineProperties, Rx = Object.getOwnPropertyDescriptors, Fp = Object.getOwnPropertySymbols, Nx = Object.prototype.hasOwnProperty, yx = Object.prototype.propertyIsEnumerable, Ap = (t, o, r) => o in t ? gx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, pt = (t, o) => {
  for (var r in o || (o = {}))
    Nx.call(o, r) && Ap(t, r, o[r]);
  if (Fp)
    for (var r of Fp(o))
      yx.call(o, r) && Ap(t, r, o[r]);
  return t;
}, kx = (t, o) => Ux(t, Rx(o));
const Lr = window.Vue.defineComponent, re = window.Vue.openBlock, Ze = window.Vue.createElementBlock, tt = window.Vue.createElementVNode, xt = window.Vue.toDisplayString, yt = window.Vue.createCommentVNode, ye = window.Vue.resolveComponent, Nt = window.Vue.createBlock, Ge = window.Vue.withCtx, Or = window.Vue.Fragment, zo = window.Vue.renderList, nt = window.Vue.createVNode, jc = window.Vue.withModifiers, qn = window.Vue.normalizeClass, Nc = window.Vue.renderSlot, i1 = window.Vue.createTextVNode, Mx = window.Vue.pushScopeId, Zx = window.Vue.popScopeId, a1 = window.Vue.reactive, s1 = window.Vue.nextTick, tc = window.Vue.markRaw, nc = window.Vue.toRef, Wp = window.Vue.computed, bx = window.Vue.toRefs, Ar = window.Vue.ref, rc = window.Vue.mergeProps, Cp = window.Vue.toHandlers, da = window.Vue.withDirectives, fa = window.Vue.vShow;
var $a = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, Xc = {
  query: {
    type: String
  }
}, nr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Jx = Lr({
  mixins: [],
  props: pt(pt({
    text: {
      type: String,
      required: !0
    }
  }, $a), Xc),
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
}), Ex = {
  key: 0,
  class: "highlight"
}, Sx = { key: 1 };
function Fx(t, o, r, s, a, u) {
  return re(), Ze("span", null, [
    tt("span", null, xt(t.beginning), 1),
    t.highlighted ? (re(), Ze("span", Ex, xt(t.highlighted), 1)) : yt("", !0),
    t.end ? (re(), Ze("span", Sx, xt(t.end), 1)) : yt("", !0)
  ]);
}
var l1 = /* @__PURE__ */ nr(Jx, [["render", Fx], ["__scopeId", "data-v-8abe2492"]]);
const Ax = Lr({
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
  }, $a), Xc),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        Xo(o, r.$el);
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
    FeatherList: Hc,
    FeatherListItem: ri,
    Highlighter: l1
  }
}), Wx = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function Cx(t, o, r, s, a, u) {
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
      (re(!0), Ze(Or, null, zo(t.items, (g, v) => (re(), Ze(Or, {
        key: g[t.textProp]
      }, [
        nt(f, {
          "as-li": "",
          id: t.getId(v),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(g),
          highlighted: t.isActive(v),
          selected: t.isSelected(g),
          onClick: jc((R) => t.select(g), ["stop"])
        }, {
          default: Ge(() => [
            nt(d, {
              highlight: t.highlight,
              query: t.query,
              text: g[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            g._new ? (re(), Ze("span", Wx, xt(t.newLabel), 1)) : yt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && g._new ? (re(), Ze("li", {
          role: "presentation",
          key: g[t.textProp] + "hr",
          class: "hr"
        })) : yt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var xx = /* @__PURE__ */ nr(Ax, [["render", Cx], ["__scopeId", "data-v-f623434a"]]);
const Bx = Lr({
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
  }, $a), Xc),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        Xo(o, r);
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
    Highlighter: l1
  }
}), Ix = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, Dx = ["aria-multiselectable"], Ox = { role: "row" }, Qx = ["aria-selected", "onClick"], zx = ["id", "aria-selected"], Gx = { key: 1 };
function Yx(t, o, r, s, a, u) {
  const d = ye("Highlighter");
  return re(), Ze("div", Ix, [
    tt("table", {
      class: qn(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      tt("thead", null, [
        tt("tr", Ox, [
          (re(!0), Ze(Or, null, zo(t.config, (f) => (re(), Ze("th", {
            key: f.title
          }, xt(f.title), 1))), 128))
        ])
      ]),
      tt("tbody", null, [
        (re(!0), Ze(Or, null, zo(t.items, (f, w) => (re(), Ze("tr", {
          role: "row",
          key: f[t.textProp],
          "aria-selected": t.isSelected(f),
          class: qn({ focus: t.isActive(w), selected: t.isSelected(f) }),
          onClick: jc((g) => t.select(f), ["stop"])
        }, [
          (re(!0), Ze(Or, null, zo(t.config, (g, v) => (re(), Ze("td", {
            key: f[t.textProp] + g.prop,
            id: t.getId(w, v),
            "aria-selected": t.isSelected(f),
            class: qn({ "focus-cell": t.isActiveCell(w, v) })
          }, [
            g.prop === t.textProp ? (re(), Nt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: f[g.prop]
            }, null, 8, ["highlight", "query", "text"])) : (re(), Ze("p", Gx, xt(f[g.prop]), 1))
          ], 10, zx))), 128))
        ], 10, Qx))), 128))
      ])
    ], 10, Dx)
  ], 512);
}
var _x = /* @__PURE__ */ nr(Bx, [["render", Yx], ["__scopeId", "data-v-58c88fd1"]]);
const Hx = Lr({
  components: {
    FeatherList: Hc,
    FeatherListItem: ri
  }
});
function Px(t, o, r, s, a, u) {
  const d = ye("FeatherListItem"), f = ye("FeatherList");
  return re(), Nt(f, { class: "result-list" }, {
    default: Ge(() => [
      nt(d, { "as-li": "" }, {
        default: Ge(() => [
          Nc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var jx = /* @__PURE__ */ nr(Hx, [["render", Px], ["__scopeId", "data-v-06b752c6"]]);
const Xx = Lr({
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
    Cancel: $o,
    BaseChip: ja,
    BaseChipLabel: Xa,
    BaseChipPreIcon: La
  }
});
function Lx(t, o, r, s, a, u) {
  const d = ye("FeatherIcon"), f = ye("BaseChipPreIcon"), w = ye("BaseChipLabel"), g = ye("Cancel"), v = ye("BaseChip");
  return re(), Nt(v, {
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
          i1(xt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? yt("", !0) : (re(), Ze("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = jc((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
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
var $x = /* @__PURE__ */ nr(Xx, [["render", Lx], ["__scopeId", "data-v-e0fc6ac0"]]);
const qx = {}, Kx = (t) => (Mx("data-v-aa720e06"), t = t(), Zx(), t), eB = { class: "spinner-container" }, tB = /* @__PURE__ */ Kx(() => /* @__PURE__ */ tt("svg", {
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
], -1)), nB = [
  tB
];
function rB(t, o) {
  return re(), Ze("div", eB, nB);
}
var oB = /* @__PURE__ */ nr(qx, [["render", rB], ["__scopeId", "data-v-aa720e06"]]), qa = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(qa || {});
const c1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, iB = pt(pt(pt({
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
    validator: (t) => !!qa[t]
  },
  labels: {
    type: Object,
    default: () => c1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, $a), _a), ym), aB = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, sB = (t, o, r, s) => {
  if (r.toLowerCase() === qa.multi) {
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
        if (u.value && u.value.filter((g) => g[t.textProp.value] === f[t.textProp.value]).length)
          return;
        const w = u.value ? [...u.value, f] : [f];
        s("update:modelValue", w), d(w);
      },
      removeItem(f) {
        const w = u.value.findIndex((g) => {
          if (f[t.textProp.value] === g[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const g = u.value.slice(0);
          g.splice(w, 1), s("update:modelValue", g), d(g), t.input.value.focus();
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
}, lB = () => {
  const t = a1({
    row: -1
  }), o = (u) => {
    s1(() => {
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
}, cB = (t) => {
  const o = a1({
    row: -1,
    col: -1
  }), r = (d, f) => {
    s1(() => {
      o.col = f, o.row = d;
    });
  }, s = (d, f) => {
    if (d.keyCode === L.DOWN) {
      if (d.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, g = o.col;
        a(), r(w + 1, g);
      }
      return !0;
    }
    if (d.keyCode === L.UP) {
      if (d.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, g = o.col;
        a(), r(w - 1, g);
      }
      return !0;
    }
    if (d.keyCode === L.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, g = o.row;
        a(), r(g, w + 1);
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
        const w = o.col, g = o.row;
        a(), r(g, w - 1);
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
}, uB = Lr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: aB,
  props: iB,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== qa.multi;
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
      return tc(lx);
    },
    minCharIcon() {
      return tc(Tx);
    },
    dropdownIcon() {
      return tc(_m);
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
        Xo(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Xo(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (Gr(this.typingTimeout), this.typingTimeout = zr(() => {
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
    const r = Tm(nc(t, "labels"), c1);
    Ha(t), km(t);
    let s;
    t.gridConfig ? s = cB(t.gridConfig) : s = lB();
    const a = nc(t, "id"), u = Wp(() => a.value ? a.value : le("feather-autocomplete-input")), { validate: d } = Ga(u, nc(t, "modelValue"), t.label, t.schema), { selectionLimit: f, modelValue: w, textProp: g, allowNew: v, type: R, minChar: y } = bx(t), x = Ar(!1), F = Ar(!1), W = Ar(!1), B = Ar(""), A = Ar([]), S = Ar(), E = Wp(() => S.value), D = () => {
      x.value && !F.value && (B.value && B.value.length >= y.value && o.emit("search", B.value), y.value <= 0 && o.emit("search", B.value || ""), A.value = [], s.reset());
    }, M = sB({
      selectionLimit: f,
      selectionLimitReached: F,
      modelValue: w,
      textProp: g,
      allowNew: v,
      forceCloseResults: W,
      query: B,
      internalResults: A,
      input: E,
      emitSearch: D
    }, s, R.value, o.emit);
    return kx(pt(pt({}, r), Ya(o.attrs)), {
      query: B,
      internalResults: A,
      selectionLimitReached: F,
      forceCloseResults: W,
      hasFocus: x,
      strategy: M,
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
    InputWrapper: Nm,
    InputSubText: za,
    AutocompleteResults: xx,
    AutocompleteResultsGrid: _x,
    Chip: $x,
    MenuMessage: jx,
    FeatherIcon: se,
    FeatherMenu: Pm,
    Spinner: oB
  }
}), dB = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, fB = ["id"], hB = { "data-ref-id": "feather-autocomplete-no-results" }, pB = { "data-ref-id": "feather-autocomplete-selection-limit" }, mB = { "data-ref-id": "feather-autocomplete-min-char" };
function wB(t, o, r, s, a, u) {
  const d = ye("FeatherIcon"), f = ye("Chip"), w = ye("InputWrapper"), g = ye("AutocompleteResults"), v = ye("AutocompleteResultsGrid"), R = ye("MenuMessage"), y = ye("Spinner"), x = ye("FeatherMenu"), F = ye("InputSubText");
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
        }, Cp(B), { ref: "scroll" }), {
          pre: Ge(() => [
            Nc(t.$slots, "pre", {}, () => [
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
              tt("div", dB, null, 512),
              tt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, xt(t.selectedDescribedByText), 9, fB),
              (re(!0), Ze(Or, null, zo(t.modelValueList, (A, S) => da((re(), Nt(f, {
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
                [fa, !t.singleSelect]
              ])), 128)),
              tt("textarea", rc(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Cp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? yt("", !0) : da((re(), Nt(g, {
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
          [fa, t.showResults]
        ]),
        t.gridConfig ? da((re(), Nt(v, {
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
          [fa, t.showResults]
        ]) : yt("", !0),
        t.showNoResults ? (re(), Nt(R, { key: 2 }, {
          default: Ge(() => [
            tt("span", hB, xt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : yt("", !0),
        t.showSelectionLimit ? (re(), Nt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", pB, xt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : yt("", !0),
        t.minChar ? da((re(), Nt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", mB, [
              Nc(t.$slots, "min-char", {}, () => [
                i1(xt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [fa, t.showMinCharWarning]
        ]) : yt("", !0),
        t.showLoading ? (re(), Nt(y, { key: 5 })) : yt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    nt(F, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var VB = /* @__PURE__ */ nr(uB, [["render", wB], ["__scopeId", "data-v-43a7e951"]]);
const u1 = window.Vue.defineComponent, oc = window.Vue.ref, vB = window.Vue.toRef, ic = window.Vue.inject, xp = window.Vue.watch, TB = window.Vue.nextTick, Bp = window.Vue.openBlock, Ip = window.Vue.createElementBlock, ac = window.Vue.createElementVNode, gB = window.Vue.normalizeClass, Dp = window.Vue.renderSlot, Op = window.Vue.createCommentVNode, sc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var UB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RB = {
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
}, NB = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, yB = u1({
  emits: NB,
  props: RB,
  setup(t, o) {
    const r = oc(), s = oc(!1), a = oc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), d = vB(t, "modelValue"), f = ic("queueSnackbar", !1), w = ic("unqueueSnackbar", !1), g = ic("nextSnackbar", () => {
    }), v = (W, B) => {
      let A, S, E = B;
      const D = () => {
        !A || (Gr(A), A = 0, E -= Date.now() - S);
      }, M = () => {
        A || (S = Date.now(), A = zr(W, E));
      };
      return M(), { pause: D, resume: M };
    }, R = () => {
      s.value = !1, o.emit("closed"), g && g();
    }, y = (W) => {
      W.keyCode === L.ESCAPE && (a.value = !1);
    }, x = () => {
      r.value.pause();
    }, F = () => {
      a.value && r.value.resume();
    };
    return xp(d, (W) => {
      W ? TB(() => {
        f === !1 ? a.value = W : f(u, a);
      }) : w === !1 ? a.value = W : w(u);
    }, { immediate: !0 }), xp(a, (W) => {
      W ? (s.value = !0, r.value = v(() => {
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
}), kB = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, MB = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, ZB = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, bB = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function JB(t, o, r, s, a, u) {
  return t.modelValue || t.contentShow ? (Bp(), Ip("div", kB, [
    ac("div", {
      class: gB(["feather-snackbar", {
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
      ac("div", MB, [
        t.contentShow ? (Bp(), Ip("div", ZB, [
          Dp(t.$slots, "default", {}, void 0, !0)
        ])) : Op("", !0)
      ]),
      ac("div", bB, [
        Dp(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Op("", !0);
}
var EB = /* @__PURE__ */ UB(yB, [["render", JB], ["__scopeId", "data-v-5cf64a62"]]);
const SB = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
u1({
  props: SB,
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
const FB = window.Vue.defineComponent, Co = window.Vue.createElementVNode, Qp = window.Vue.unref, ha = window.Vue.createVNode, pa = window.Vue.toDisplayString, AB = window.Vue.renderList, zp = window.Vue.Fragment, jn = window.Vue.openBlock, Wr = window.Vue.createElementBlock, ma = window.Vue.createCommentVNode, WB = window.Vue.createBlock, CB = window.Vue.createTextVNode, xB = window.Vue.withCtx, BB = window.Vue.pushScopeId, IB = window.Vue.popScopeId, DB = (t) => (BB("data-v-759abe87"), t = t(), IB(), t), OB = { class: "list-main" }, QB = /* @__PURE__ */ DB(() => /* @__PURE__ */ Co("h2", null, "Situation List", -1)), zB = { class: "situation-filters" }, GB = {
  key: 0,
  class: "container"
}, YB = { class: "situation-list" }, _B = { key: 0 }, HB = {
  key: 1,
  class: "container"
}, PB = /* @__PURE__ */ CB(" An error has occured "), jB = window.Vue.reactive, Cr = window.Vue.ref, XB = /* @__PURE__ */ FB({
  __name: "SituationList",
  setup(t) {
    const o = Pr(), r = Qm();
    o.getSituations(), o.getNodes();
    const s = 10, a = jB({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), u = Cr(!1), d = Cr(0), f = Cr(1), w = Cr(0), g = Cr(!1), v = Cr(!1), R = (S) => {
      d.value = 0, a.situations = S[0], f.value = S.length;
    }, y = (S) => {
      window.scrollTo(0, 0), a.situationSelected = S, a.selectedSituationIndex = o.situations.findIndex(
        (E) => E.id === S
      );
    }, x = (S, E) => {
      const D = a.situations;
      D.forEach((M) => {
        M.id === E && (M.status = S);
      }), a.situations = me.exports.cloneDeep(D);
    }, F = () => {
      a.nodes = o.nodes, a.results = o.nodes;
    };
    r.$subscribe((S, E) => {
      v.value = E.showError;
    }), o.$subscribe((S, E) => {
      var M;
      const D = a.selectedSituationIndex;
      E.selectedSituation != -1 ? (a.selectedSituationIndex = o.situations.findIndex(
        (Y) => Y.id === E.selectedSituation
      ), o.situations[a.selectedSituationIndex] && (a.situationSelected = o.situations[a.selectedSituationIndex].id), D === a.selectedSituationIndex && (g.value = !g.value)) : a.situationSelected = (M = E.situations[0]) == null ? void 0 : M.id, F(), w.value = o.situations.length, a.allSituations = me.exports.chunk(o.situations, s), R(a.allSituations);
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
            (M) => {
              var Y;
              return M.nodeLabel === ((Y = a.nodeSelectedValue) == null ? void 0 : Y._text);
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
    return (S, E) => (jn(), Wr(zp, null, [
      Co("div", OB, [
        QB,
        Co("div", zB, [
          ha(Qp(VB), {
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
        a.situations && a.situations.length > 0 ? (jn(), Wr("div", GB, [
          Co("div", YB, [
            Co("div", null, " Result: " + pa(a.situations.length) + " of " + pa(w.value), 1),
            (jn(!0), Wr(zp, null, AB(a.situations, (D) => (jn(), Wr("div", {
              key: D.id
            }, [
              ha(by, {
                "situation-info": D,
                onSituationSelected: y,
                selected: a.situationSelected == D.id
              }, null, 8, ["situation-info", "selected"])
            ]))), 128)),
            a.nodeSelectedValue ? ma("", !0) : (jn(), Wr("div", _B, " Page: " + pa(d.value + 1) + " of " + pa(f.value), 1)),
            a.nodeSelectedValue ? ma("", !0) : (jn(), WB(qC, {
              key: 1,
              onGoToPage: A,
              currentPage: d.value,
              totalPages: f.value
            }, null, 8, ["currentPage", "totalPages"]))
          ]),
          ha(aC, {
            index: a.selectedSituationIndex,
            forceUpdate: g.value,
            onSituationStatusChanged: x
          }, null, 8, ["index", "forceUpdate"])
        ])) : ma("", !0),
        !a.situations || a.situations.length == 0 ? (jn(), Wr("div", HB, " No results found ")) : ma("", !0)
      ]),
      ha(Qp(EB), {
        modelValue: v.value,
        "onUpdate:modelValue": E[1] || (E[1] = (D) => v.value = D),
        center: "",
        error: ""
      }, {
        default: xB(() => [
          PB
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const LB = /* @__PURE__ */ be(XB, [["__scopeId", "data-v-759abe87"]]);
var $B = Object.defineProperty, qB = Object.defineProperties, KB = Object.getOwnPropertyDescriptors, Gp = Object.getOwnPropertySymbols, e3 = Object.prototype.hasOwnProperty, t3 = Object.prototype.propertyIsEnumerable, Yp = (t, o, r) => o in t ? $B(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, ya = (t, o) => {
  for (var r in o || (o = {}))
    e3.call(o, r) && Yp(t, r, o[r]);
  if (Gp)
    for (var r of Gp(o))
      t3.call(o, r) && Yp(t, r, o[r]);
  return t;
}, d1 = (t, o) => qB(t, KB(o));
const f1 = window.Vue.defineComponent, n3 = window.Vue.ref, Go = window.Vue.computed, r3 = window.Vue.reactive, _p = window.Vue.watch, lc = window.Vue.inject, h1 = window.Vue.resolveComponent, yc = window.Vue.openBlock, p1 = window.Vue.createElementBlock, Mn = window.Vue.createElementVNode, o3 = window.Vue.createBlock, i3 = window.Vue.createCommentVNode, m1 = window.Vue.renderSlot, a3 = window.Vue.pushScopeId, s3 = window.Vue.popScopeId, cc = window.Vue.toRef, Hp = window.Vue.mergeProps, l3 = window.Vue.toDisplayString, c3 = window.Vue.createVNode;
var w1 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const u3 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, d3 = f1({
  props: u3,
  setup(t) {
    const o = n3(), r = () => {
      o.value.focus();
    }, s = Go(() => le("feather-radio-button")), a = r3({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: s.value
    }), u = Go(() => le("radio-label-id")), d = Go(() => a.first || a.checked ? 0 : -1);
    _p(() => t.disabled, (R) => {
      a.disabled = R;
    }, { immediate: !0 }), _p(() => t.value, (R) => {
      a.value = R;
    }, { immediate: !0 });
    const f = lc("register", (R) => {
    }), w = lc("blur", (R) => {
    }), g = lc("select", (R) => {
    });
    return f(a), {
      labelId: u,
      tabindex: d,
      vm: a,
      blur: w,
      click: () => {
        g(a);
      },
      input: o,
      id: s
    };
  },
  components: {
    FeatherRipple: Kn
  }
}), f3 = (t) => (a3("data-v-24790cf0"), t = t(), s3(), t), h3 = { class: "layout-container" }, p3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], m3 = { class: "radio hover focus" }, w3 = /* @__PURE__ */ f3(() => /* @__PURE__ */ Mn("div", {
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
], -1)), V3 = ["id"];
function v3(t, o, r, s, a, u) {
  const d = h1("feather-ripple");
  return yc(), p1("div", h3, [
    Mn("div", {
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
      Mn("div", m3, [
        w3,
        t.vm.disabled ? i3("", !0) : (yc(), o3(d, {
          key: 0,
          center: ""
        }))
      ]),
      Mn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        m1(t.$slots, "default", {}, void 0, !0)
      ], 8, V3)
    ], 40, p3)
  ]);
}
var xa = /* @__PURE__ */ w1(d3, [["render", v3], ["__scopeId", "data-v-24790cf0"]]);
const T3 = d1(ya({}, _a), {
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
}), g3 = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, U3 = f1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: T3,
  emits: g3,
  setup(t, o) {
    Ha(t);
    const r = cc(t, "error"), s = cc(t, "modelValue"), a = Go(() => le("feather-input-description")), u = Go(() => {
      const d = d1(ya({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return ya(ya({
      descriptionId: a,
      attrs: u
    }, Mm(s, o.emit, t.label, t.schema, cc(t, "error"))), Ya(o.attrs));
  },
  components: {
    InputSubText: za
  }
}), R3 = ["for"], N3 = ["id"];
function y3(t, o, r, s, a, u) {
  const d = h1("InputSubText");
  return yc(), p1("div", Hp(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Mn("label", {
      for: t.groupId,
      class: "group-label"
    }, l3(t.label), 9, R3),
    Mn("div", Hp(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...f) => t.keydown && t.keydown(...f))
    }), [
      m1(t.$slots, "default", {}, void 0, !0)
    ], 16, N3),
    c3(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var V1 = /* @__PURE__ */ w1(U3, [["render", y3], ["__scopeId", "data-v-6775aeb9"]]);
const k3 = window.Vue.openBlock, M3 = window.Vue.createElementBlock, Z3 = window.Vue.createStaticVNode;
var b3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const J3 = {}, E3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S3 = /* @__PURE__ */ Z3('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), F3 = [
  S3
];
function A3(t, o) {
  return k3(), M3("svg", E3, F3);
}
var W3 = /* @__PURE__ */ b3(J3, [["render", A3]]);
const C3 = window.Vue.openBlock, x3 = window.Vue.createElementBlock, B3 = window.Vue.createStaticVNode;
var I3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D3 = {}, O3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Q3 = /* @__PURE__ */ B3('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), z3 = [
  Q3
];
function G3(t, o) {
  return C3(), x3("svg", O3, z3);
}
var Y3 = /* @__PURE__ */ I3(D3, [["render", G3]]);
const _3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, P3 = window.Vue.createElementVNode;
var j3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X3 = {}, L3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $3 = /* @__PURE__ */ P3("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), q3 = [
  $3
];
function K3(t, o) {
  return _3(), H3("svg", L3, q3);
}
var eI = /* @__PURE__ */ j3(X3, [["render", K3]]);
const tI = window.Vue.openBlock, nI = window.Vue.createElementBlock, rI = window.Vue.createStaticVNode;
var oI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iI = {}, aI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sI = /* @__PURE__ */ rI('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), lI = [
  sI
];
function cI(t, o) {
  return tI(), nI("svg", aI, lI);
}
var uI = /* @__PURE__ */ oI(iI, [["render", cI]]);
const dI = window.Vue.openBlock, fI = window.Vue.createElementBlock, hI = window.Vue.createElementVNode;
var pI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mI = {}, wI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VI = /* @__PURE__ */ hI("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), vI = [
  VI
];
function TI(t, o) {
  return dI(), fI("svg", wI, vI);
}
var gI = /* @__PURE__ */ pI(mI, [["render", TI]]);
const Lc = () => window.VRouter || $c, UI = window.Vue.defineComponent, Re = window.Vue.createElementVNode, Lo = window.Vue.createTextVNode, Xe = window.Vue.unref, on = window.Vue.createVNode, wa = window.Vue.withCtx, Pp = window.Vue.openBlock, jp = window.Vue.createElementBlock, RI = window.Vue.createCommentVNode, NI = window.Vue.pushScopeId, yI = window.Vue.popScopeId, Bt = (t) => (NI("data-v-0fd6b0cd"), t = t(), yI(), t), kI = { class: "container" }, MI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "title" }, "ALEC", -1)), ZI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "description" }, [
  /* @__PURE__ */ Lo(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Re("br"),
  /* @__PURE__ */ Re("strong", null, "Our goal"),
  /* @__PURE__ */ Lo(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), bI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("h3", null, "Key Benefits:", -1)), JI = { class: "list" }, EI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), SI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, "Assist in root cause analysis.", -1)), FI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), AI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, "Easy configuration.", -1)), WI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), CI = {
  key: 0,
  class: "optin"
}, xI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("h3", null, "Enable ALEC for more precise results:", -1)), BI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), II = { class: "choices" }, DI = /* @__PURE__ */ Bt(() => /* @__PURE__ */ Re("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), OI = /* @__PURE__ */ Lo("Yes"), QI = /* @__PURE__ */ Lo("No"), zI = /* @__PURE__ */ Lo(" Continue "), GI = window.Vue.ref, YI = /* @__PURE__ */ UI({
  __name: "WelcomePage",
  setup(t) {
    const o = ni(), r = Lc(), s = GI(!0), a = () => {
      const u = Boolean(s.value);
      o.savePermission(u), u ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (u, d) => (Pp(), jp("div", kI, [
      MI,
      ZI,
      Re("div", null, [
        bI,
        Re("div", JI, [
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(uI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            EI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(eI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            SI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(gI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            FI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(W3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            AI
          ]),
          Re("div", null, [
            on(Xe(se), {
              icon: Xe(Y3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            WI
          ])
        ])
      ]),
      Xe(o).isAdmin ? (Pp(), jp("div", CI, [
        xI,
        BI,
        Re("div", II, [
          DI,
          on(Xe(V1), {
            horizontal: "",
            modelValue: s.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => s.value = f),
            label: ""
          }, {
            default: wa(() => [
              on(Xe(xa), { value: !0 }, {
                default: wa(() => [
                  OI
                ]),
                _: 1
              }),
              on(Xe(xa), { value: !1 }, {
                default: wa(() => [
                  QI
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : RI("", !0),
      on(Xe(kn), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: a
      }, {
        default: wa(() => [
          zI
        ]),
        _: 1
      })
    ]));
  }
});
const _I = /* @__PURE__ */ be(YI, [["__scopeId", "data-v-0fd6b0cd"]]), HI = window.Vue.defineComponent, PI = window.Vue.createElementVNode, jI = window.Vue.createTextVNode, XI = window.Vue.unref, LI = window.Vue.withCtx, $I = window.Vue.createVNode, qI = window.Vue.Fragment, KI = window.Vue.openBlock, eD = window.Vue.createElementBlock, tD = window.Vue.pushScopeId, nD = window.Vue.popScopeId, rD = (t) => (tD("data-v-bcb7dcc6"), t = t(), nD(), t), oD = /* @__PURE__ */ rD(() => /* @__PURE__ */ PI("div", { class: "main" }, "Something bad is happening...", -1)), iD = /* @__PURE__ */ jI(" Reload "), aD = /* @__PURE__ */ HI({
  __name: "ErrorPage",
  setup(t) {
    const o = Lc(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (KI(), eD(qI, null, [
      oD,
      $I(XI(kn), {
        primary: "",
        onClick: r
      }, {
        default: LI(() => [
          iD
        ]),
        _: 1
      })
    ], 64));
  }
});
const sD = /* @__PURE__ */ be(aD, [["__scopeId", "data-v-bcb7dcc6"]]), lD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", cD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", uD = window.Vue.defineComponent, Se = window.Vue.createElementVNode, kc = window.Vue.createTextVNode, Un = window.Vue.unref, Ao = window.Vue.withCtx, Wo = window.Vue.createVNode, dD = window.Vue.openBlock, fD = window.Vue.createElementBlock, hD = window.Vue.pushScopeId, pD = window.Vue.popScopeId, rr = (t) => (hD("data-v-9a5b5f4e"), t = t(), pD(), t), mD = { class: "container" }, wD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("h2", null, "Configuration", -1)), VD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("p", null, [
  /* @__PURE__ */ kc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ kc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Se("strong", null, [
    /* @__PURE__ */ Se("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), vD = { class: "radio-content" }, TD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("strong", { class: "title" }, "Clustering", -1)), gD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), UD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("img", {
  class: "img",
  src: lD
}, null, -1)), RD = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", { class: "hellinger" }, [
  /* @__PURE__ */ Se("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Se("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), ND = /* @__PURE__ */ rr(() => /* @__PURE__ */ Se("div", { class: "radio-content" }, [
  /* @__PURE__ */ Se("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Se("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Se("img", {
    class: "img img2",
    src: cD
  })
], -1)), yD = /* @__PURE__ */ kc(" Continue "), Xp = window.Vue.ref, kD = /* @__PURE__ */ uD({
  __name: "ConfigurationPage",
  setup(t) {
    const o = ni(), r = Lc(), s = Xp(!1), a = Xp(ft.ENGINE_DBSCAN), u = () => {
      pm(o.allowSave), ON(a.value, s.value), r.push({ name: "situations" });
    };
    return (d, f) => (dD(), fD("div", mD, [
      wD,
      VD,
      Se("div", null, [
        Wo(Un(V1), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: a.value,
          "onUpdate:modelValue": f[1] || (f[1] = (w) => a.value = w)
        }, {
          default: Ao(() => [
            Wo(Un(xa), {
              class: "radio",
              value: Un(ft).ENGINE_DBSCAN
            }, {
              default: Ao(() => [
                Se("div", vD, [
                  TD,
                  gD,
                  UD,
                  Wo(Un(Gc), {
                    modelValue: s.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (w) => s.value = w),
                    disabled: a.value !== Un(ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ao(() => [
                      RD
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Wo(Un(xa), {
              class: "radio",
              value: Un(ft).ENGINE_DEEP_LEARNING
            }, {
              default: Ao(() => [
                ND
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Wo(Un(kn), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => u())
      }, {
        default: Ao(() => [
          yD
        ]),
        _: 1
      })
    ]));
  }
});
const MD = /* @__PURE__ */ be(kD, [["__scopeId", "data-v-9a5b5f4e"]]), ZD = window.VueRouter.createRouter, bD = window.VueRouter.createWebHistory, uc = async () => {
  const t = window.VRouter || $c, o = ni();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, v1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || $c, r = ni();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => uc(),
    component: _I
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => uc(),
    component: MD
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => uc(),
    component: LB
  },
  {
    path: "/error",
    name: "error",
    component: sD
  }
], Lp = window.VRouter;
if (Lp)
  for (const t of v1) {
    const { path: o, name: r, component: s, beforeEnter: a } = t;
    Lp.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: s,
      beforeEnter: a
    });
  }
const $c = ZD({
  history: bD(),
  routes: v1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = vR;
